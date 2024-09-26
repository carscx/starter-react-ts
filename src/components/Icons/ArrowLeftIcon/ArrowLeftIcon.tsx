import { type FC } from 'react'

interface ArrowLeftIconProps {
  className?: string
}

const ArrowLeftIcon: FC<ArrowLeftIconProps> = ({ className = '' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    viewBox="0 0 23 23"
    height="23"
    fill="none"
    width="23"
  >
    <path
      d="M10.7929 22.7071C11.1834 23.0976 11.8166 23.0976 12.2071 22.7071C12.5976 22.3166 12.5976 21.6834 12.2071 21.2929L3.41421 12.5L22 12.5C22.5523 12.5 23 12.0523 23 11.5C23 10.9477 22.5523 10.5 22 10.5L3.41422 10.5L12.2071 1.70711C12.5976 1.31658 12.5976 0.683417 12.2071 0.292892C11.8166 -0.0976324 11.1834 -0.0976325 10.7929 0.292891L0.294162 10.7916C0.290088 10.7957 0.28605 10.7998 0.282046 10.8039C0.107467 10.9839 1.02902e-06 11.2294 1.00536e-06 11.5C9.93414e-07 11.6367 0.0274172 11.7669 0.0770502 11.8856C0.12547 12.0016 0.196712 12.1104 0.290776 12.205M10.7929 22.7071L0.293391 12.2076L10.7929 22.7071Z"
      fillRule="evenodd"
      clipRule="evenodd"
      fill="#2864eb"
    />
  </svg>
)

export default ArrowLeftIcon
