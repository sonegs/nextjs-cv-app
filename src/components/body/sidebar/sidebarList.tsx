import { Box, Stack, styled } from "@mui/material";
import list from "./sidebarList.utils";

const StyledSidebarContainer = styled(Stack)({
    width: 250,
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    padding: 20,
})

const SidebarList: React.FC = () => {
    return (
        <StyledSidebarContainer>
            {list?.map((item) => 
                <Box key={item.value}> {item.icon} - {item.value} </Box>
            )}
        </StyledSidebarContainer>
      )
}

export default SidebarList;