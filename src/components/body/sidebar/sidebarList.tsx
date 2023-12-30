import { Box, Stack, styled } from "@mui/material";

const StyledSidebarContainer = styled(Stack)({
    width: 250,
    display: "flex",
    alignItems: "center",
    flexAlign: "column",
})

enum List {
    BEGINNING = "Beginning",
    STORY = "Story",
    TRAINING = "Training",
    EXPERIENCE = "Experience",
    HOBBIES = "Hobbies",
}

const SidebarList: React.FC = () => {
    const list = [
        {
            value: List.BEGINNING,
            icon: "BEGINNING"
        },
        {
            value: List.STORY,
            icon: "STORY"
        },
        {
            value: List.TRAINING,
            icon: "TRAINING"
        },
        {
            value: List.EXPERIENCE,
            icon: "EXPERIENCE"
        },
        {
            value: List.HOBBIES,
            icon: "HOBBIES"
        },
    ];

    return (
        <StyledSidebarContainer>
            {list?.map((item) => 
                <Box key={item.value}> {item.value} </Box>
            )}
        </StyledSidebarContainer>
      )
}

export default SidebarList;