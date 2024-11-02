/**
 * Formats a date string into the format MM-DD-YYYY.
 *
 * @param dateString - The date string to format.
 * @returns The formatted date string in the format MM-DD-YYYY.
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const day = date.getDate().toString().padStart(2, '0')
  const year = date.getFullYear().toString()
  return `${month}-${day}-${year}`
}

/**
 * Formats a date string into a readable format like "Oct 21, 2024".
 *
 * @param dateString - The date string to format.
 * @returns The formatted date string in a readable format.
 */
export function formatReadableDate(dateString: string): string {
  const date = new Date(dateString)
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' }
  return date.toLocaleDateString('en-US', options)
}
