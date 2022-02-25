import {FC, FormEvent, useState} from "react";
import {
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay
} from "@chakra-ui/modal";
import {Button, Input, Textarea, VStack} from "@chakra-ui/react";
import axios from "axios";

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

const NewPostModal: FC<Props> = ({isOpen, onClose}) => {
    function handleSubmit(e: any) {
        e.preventDefault()
        axios.post('http://localhost:8080/posts', {
                title: e.target.title.value,
                body: e.target.body.value,
                createdAt: new Date(),
            })
              .then((response) => {
                  alert("Post created!")
              })
              .catch((error) => {
                    alert("Issue creating post :(")
              })
    }
 
    return (<Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalHeader>create a new post</ModalHeader>
          <form onSubmit={handleSubmit}>
            <Input name="title" placeholder="Title" type="text" required />
            <Textarea name="body" placeholder="Body" required />
            <Button type="submit">Create Post</Button>
            </form>
        </ModalContent>
      </Modal>
      );
}

export default NewPostModal;
