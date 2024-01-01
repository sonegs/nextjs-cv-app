enum ListValues {
    BEGINNING = "Beginning",
    STORY = "Story",
    TRAINING = "Training",
    EXPERIENCE = "Experience",
    HOBBIES = "Hobbies",
}

enum ListIcons {
    BEGINNING = "BEGINNING",
    STORY = "STORY",
    TRAINING = "TRAINING",
    EXPERIENCE = "EXPERIENCE",
    HOBBIES = "HOBBIES",
}

const list = [
    {
        value: ListValues.BEGINNING,
        icon: ListIcons.BEGINNING,
    },
    {
        value: ListValues.STORY,
        icon: ListIcons.STORY,
    },
    {
        value: ListValues.TRAINING,
        icon: ListIcons.TRAINING
    },
    {
        value: ListValues.EXPERIENCE,
        icon: ListIcons.EXPERIENCE
    },
    {
        value: ListValues.HOBBIES,
        icon: ListIcons.HOBBIES
    },
];

export default list;