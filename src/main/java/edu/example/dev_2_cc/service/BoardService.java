package edu.example.dev_2_cc.service;


import edu.example.dev_2_cc.dto.board.BoardResponseDTO;
import edu.example.dev_2_cc.entity.Board;
import edu.example.dev_2_cc.exception.BoardException;
import edu.example.dev_2_cc.repository.BoardRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional
@Log4j2
public class BoardService {
    private final BoardRepository boardRepository;
    public BoardResponseDTO read(Long boardId) {
        try{
            Optional<Board> foundBoard = boardRepository.findById(boardId);
            Board board = foundBoard.get();
            return new BoardResponseDTO(board);
        }catch (Exception e){
            log.error(e.getMessage());
            throw BoardException.NOT_FOUND.get();
        }
    }
}
