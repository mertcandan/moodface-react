import { useSelector } from "react-redux";
import Container from "@mui/material/Container";
import { WORD_SPACING } from "../constants";

const Moodface = () => {
  const { text } = useSelector((state) => state.typing);

  return text.map((line) => <Line line={line} />);
};

const Line = ({ line }) => {
  return (
    <span>
      {line.map((word) => (
        <Word word={word} />
      ))}
      <br />
    </span>
  );
};

const Word = ({ word }) => {
  return (
    <span style={{ marginLeft: WORD_SPACING }}>
      {word.map(({ letter, kerning, fontSize }) => {
        return <Letter letter={letter} kerning={kerning} fontSize={fontSize} />;
      })}
    </span>
  );
};

const Letter = ({ letter, kerning, fontSize }) => {
  return (
    <span
      style={{ fontKerning: kerning, fontSize: fontSize }}
    >{`${letter}`}</span>
  );
};

const MoodfaceWrapper = () => {
  return (
    <Container sx={{ flexDirection: "row", pt: 3 }}>
      <Moodface />
    </Container>
  );
};

export default MoodfaceWrapper;
