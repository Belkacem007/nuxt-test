import { defineStore } from "pinia";

export const useEmailsStore = defineStore('emails', {
    state: () => ({
        emails: [
            {
                id: 0,
                message: 'Wave hello with video, reactions and more now in huddles',
                description: 'In the early days of the pandemic, audio-only huddles helped recreate the informal discussions that traditionally took place in office cafés and hallways. Whether your team is remote, in the office, or a mix of both, working alongside your colleagues is as important as ever.'
            },
            {
                id: 1,
                message: '[JIRA] (LXQ-2604) Learning path- file - Existing File -two buttons for viewing the file',
                description: 'In the early days of the pandemic, audio-only huddles helped recreate the informal discussions that traditionally took place in office cafés and hallways. Whether your team is remote, in the office, or a mix of both, working alongside your colleagues is as important as ever.'
            },
            {
                id: 2,
                message: 'Wave hello with video, reactions and more now in huddles',
                description: 'In the early days of the pandemic, audio-only huddles helped recreate the informal discussions that traditionally took place in office cafés and hallways. Whether your team is remote, in the office, or a mix of both, working alongside your colleagues is as important as ever.'
            },
            {
                id: 3,
                message: '[JIRA] (LXQ-2604) Learning path- file - Existing File -two buttons for viewing the file',
                description: 'In the early days of the pandemic, audio-only huddles helped recreate the informal discussions that traditionally took place in office cafés and hallways. Whether your team is remote, in the office, or a mix of both, working alongside your colleagues is as important as ever.'
            },
            {
                id: 4,
                message: 'Wave hello with video, reactions and more now in huddles',
                description: 'In the early days of the pandemic, audio-only huddles helped recreate the informal discussions that traditionally took place in office cafés and hallways. Whether your team is remote, in the office, or a mix of both, working alongside your colleagues is as important as ever.'
            },
            {
                id: 5,
                message: '[JIRA] (LXQ-2604) Learning path- file - Existing File -two buttons for viewing the file',
                description: 'In the early days of the pandemic, audio-only huddles helped recreate the informal discussions that traditionally took place in office cafés and hallways. Whether your team is remote, in the office, or a mix of both, working alongside your colleagues is as important as ever.'
            },
            {
                id: 6,
                message: 'Wave hello with video, reactions and more now in huddles',
                description: 'In the early days of the pandemic, audio-only huddles helped recreate the informal discussions that traditionally took place in office cafés and hallways. Whether your team is remote, in the office, or a mix of both, working alongside your colleagues is as important as ever.'
            },
            {
                id: 7,
                message: '[JIRA] (LXQ-2604) Learning path- file - Existing File -two buttons for viewing the file',
                description: 'In the early days of the pandemic, audio-only huddles helped recreate the informal discussions that traditionally took place in office cafés and hallways. Whether your team is remote, in the office, or a mix of both, working alongside your colleagues is as important as ever.'
            },
            {
                id: 8,
                message: 'Wave hello with video, reactions and more now in huddles',
                description: 'In the early days of the pandemic, audio-only huddles helped recreate the informal discussions that traditionally took place in office cafés and hallways. Whether your team is remote, in the office, or a mix of both, working alongside your colleagues is as important as ever.'
            },
            {
                id: 9,
                message: '[JIRA] (LXQ-2604) Learning path- file - Existing File -two buttons for viewing the file',
                description: 'In the early days of the pandemic, audio-only huddles helped recreate the informal discussions that traditionally took place in office cafés and hallways. Whether your team is remote, in the office, or a mix of both, working alongside your colleagues is as important as ever.'
            },
            {
                id: 10,
                message: 'Wave hello with video, reactions and more now in huddles',
                description: 'In the early days of the pandemic, audio-only huddles helped recreate the informal discussions that traditionally took place in office cafés and hallways. Whether your team is remote, in the office, or a mix of both, working alongside your colleagues is as important as ever.'
            },
            {
                id: 11,
                message: '[JIRA] (LXQ-2604) Learning path- file - Existing File -two buttons for viewing the file',
                description: 'In the early days of the pandemic, audio-only huddles helped recreate the informal discussions that traditionally took place in office cafés and hallways. Whether your team is remote, in the office, or a mix of both, working alongside your colleagues is as important as ever.'
            }
        ]
    }),

    getters: {
        getEmails: state => state.emails,
        getEmailsLength: state => state.emails.length
    }
})