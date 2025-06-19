// create svg component for Pentagon shape
import React from 'react';
import type { SVGProps } from 'react';
import { cn } from '../../utils/style/cn';

const DEFAULT_HEIGHT = 396;
const DEFAULT_WIDTH = 365
const DEFIND_RATIO = DEFAULT_WIDTH / DEFAULT_HEIGHT;
export type PentagonPropsType = SVGProps<SVGSVGElement> & {
  fill?: string,
  borderColor?: string,
  borderWidth?: number,
  padding?: number,
  size?: number
}
const Pentagon: React.FC<PentagonPropsType> = ({
  fill = 'none',
  borderColor = 'none',
  borderWidth = 0,
  size = DEFAULT_HEIGHT,
  className,
  ...props
}) => {
  return (
    <svg
      width={DEFIND_RATIO * size}
      height={size}
      viewBox="0 0 365 396"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      className={cn(
        `aspect-[${DEFIND_RATIO}] w-full h-auto`,
        className
      )}
      {...props}
    >
      <path
        d="M182.496 1C186.855 1.00002 191.135 2.09814 194.905 4.18164V4.18262L351.622 90.8486C355.39 92.9323 358.515 95.9258 360.686 99.5244C362.856 103.123 363.998 107.201 364 111.35V284.654C364 288.805 362.859 292.886 360.688 296.486C358.518 300.087 355.392 303.082 351.622 305.167L194.905 391.817C191.135 393.901 186.855 395 182.496 395C178.137 395 173.857 393.901 170.086 391.817L13.3779 305.167C9.60788 303.082 6.48222 300.087 4.31152 296.486C2.14108 292.886 1.00016 288.805 1 284.654V111.361L1.01367 110.584C1.14704 106.702 2.27672 102.905 4.31152 99.5293C6.48223 95.9286 9.60789 92.9333 13.3779 90.8486L170.086 4.18262C173.857 2.09881 178.137 1 182.496 1Z"
        stroke={borderColor}
        stroke-width={borderWidth}
      />
    </svg>
  );
}

export default Pentagon;