---
id: def-rational-determinacy-measure-game
kind: definition
title: "The rational measure game"
status: published
origin: pipeline
deps: ["def-cantor-sequence-space-for-descriptive-set-theory", "def-gale-stewart-games-on-pruned-trees", "thm-rationals-countable"]
justified_by: []
forward_refs: []
landmark: false
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  scraped: []
  references:
    - title: "game definition pp393–394 and rational-move paragraph p396; full mathematical text pp393–396 and references/end p397 read 2026-09-09. Measure construction and transfer supplied locally."
      url: "https://seminariomatematico.polito.it/rendiconti/61-4/393.pdf"
---
## Definition

Work in ZF, with $\mathcal C$ as in [[def-cantor-sequence-space-for-descriptive-set-theory]]. For $E\subseteq\mathcal C$ and rational $0<v\leq1$, the **rational measure game** starts with current bound v. On each I turn the move is a rational pair $(h_0,h_1)\in[0,1]^2$ satisfying $(h_0+h_1)/2\geq v_{\rm current}$. II then chooses a bit e with $h_e>0$, and the next current bound is h_e. I wins exactly when II's infinite bit sequence belongs to E. Strategies remember the full sequence of pairs and bits, according to [[def-gale-stewart-games-on-pruned-trees]].

Using [[thm-rationals-countable]], fix an enumeration of rational numbers and code pairs by $\langle i,j\rangle=(i+j)(i+j+1)/2+j$. This encodes I moves by naturals; II's legal bit codes are zero and one. The first illegal move loses immediately, regardless of later moves. Thus the payoff on $\mathbb N^{\mathbb N}$ is the union of plays with first illegal II move and wholly legal plays with bit outcome in E.

Every legal position has a legal continuation. I can choose (1,1), and every legal pair has a positive coordinate because the current bound is positive. II can take the least positive coordinate. The next bound remains rational in (0,1], including when it equals one. Thus legal full histories exist by least-code recursion; zero selected coordinates are illegal. A winning coded strategy cannot prescribe a first illegal move on a legal consistent history, since the opponent can always continue legally. Restrict it there and fill inconsistent legal histories with least legal defaults to obtain a legal winning strategy. This definition assumes neither AD nor AC, and asserts no measure exists.
