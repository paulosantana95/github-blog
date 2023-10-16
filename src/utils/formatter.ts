import { formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

export function relativeDateFormatter(date: string) {
  return formatDistanceToNow(new Date(date), {
    addSuffix: true,
    locale: ptBR,
  }).replace("cerca de ", "");
}
