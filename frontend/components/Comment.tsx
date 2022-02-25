import {FC} from "react";
import {Box, Divider, Text} from "@chakra-ui/react";
import { Button, ButtonGroup } from '@chakra-ui/react'

interface Props {
    content: string;
    postedAt: Date;
}

const Comment: FC<Props> = ({content, postedAt}) => {
    // TODO: Implemnt a Comment!
    return <div>"hi"</div>;
}

export default Comment;