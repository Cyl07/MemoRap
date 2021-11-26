<?php

namespace App\Model;

class PlayManager extends AbstractManager
{
    public function getRound(int $number)
    {
        $query = "select round.id, name, text from line l "
            . "right join round on l.id = round.st_line_id or l.id = round.nd_line_id "
            . "join artiste on artiste.id = round.id where round.id = :id;";

        $statement = $this->pdo->prepare($query);
        $statement->bindValue("id", $number, \PDO::PARAM_INT);
        return $statement->fetchAll();
    }
}
