/* eslint-disable no-useless-catch */
import { chatRealTimeModel } from '~/models/Hocnhom/ChatRealTime/chatRealTimeModel'
import { groupModel } from '~/models/Hocnhom/groupModel'
import { teamBoxModel } from '~/models/Hocnhom/teamboxModel'

const createNew = async (reqBody) => {
  try {
    // Handle data according to each project
    const newGroup = {
      ...reqBody
    }
    // Call model layer to save record into database
    const createdGroup = await groupModel.createNew(newGroup)

    // Get record board after calling (optional)
    const getNewGroup = await groupModel.findOneById(createdGroup.insertedId)

    // Return result; note: have to return in Service
    return getNewGroup
  } catch (error) { throw error }
}

const update = async (groupId, reqBody) => {
  try {
    const updateData = {
      ...reqBody
    }
    const updatedGroup = await groupModel.update(groupId, updateData)

    const group = await groupModel.findOneById(groupId)
    const teamBoxId = await teamBoxModel.findOneById(group.teamBoxModel)
    const chatRealTimeId = await chatRealTimeModel.findOneById(teamBoxId.chatRealTimeId)

    if (chatRealTimeId)
    {
      const conversationMems = chatRealTimeId.conversationMem
      const groupListMems = group.listMem

      for (const conversationMem of conversationMems) {
        if (!groupListMems.includes(conversationMem))
        {
          await chatRealTimeModel.pullMemList(conversationMem)
        }
      }
    }

    return updatedGroup
  } catch (error) { throw error }
}

export const groupService ={
  createNew,
  update
}