import { StarIcon } from "@heroicons/react/20/solid";

const Rating = ({ rate }: { rate: number }) => {
  return (
    <div className="flex">
      {Array.from({ length: 5 }, (_, index) => (
        <StarIcon
          key={index}
          width={17}
          height={17}
          stroke={index < rate ? "yellow" : "grey"}
          fill={index < rate ? "yellow" : "grey"}
        />
      ))}
    </div>
  );
};

export default Rating;
