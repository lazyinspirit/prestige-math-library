---
page: bruhat-interval-labels-shellings-and-mobius-functions-examples
title: "Bruhat Interval Labels, Shellings, and Möbius Functions — Examples"
status: draft
items: []
examples: [ex-cg-s4-rank-three-interval-chain-labels-and-lex-first-chain, ex-cg-s4-rank-three-interval-mobius-from-recurrence, cex-cg-parabolic-quotient-interval-eulerian-claim-fails]
---

This companion is a dependency leaf: its items use only the theory of [[bruhat-interval-labels-shellings-and-mobius-functions]] and that page's established prerequisite closure, and no other page or item depends on them. All three computations are finite and choice-free evaluations inside $S_4$, with $\ell$ the inversion number; the displayed one-line notation on the letters $\{1,2,3,4\}$ is the published $0$-based notation under the letter shift $j\mapsto j-1$, declared once in the first example and reused by the other two.

[[ex-cg-s4-rank-three-interval-chain-labels-and-lex-first-chain]] lists the eight elements and the twelve covers of the rank-three interval $[e,2341]$ of $S_4$ induced by the reduced expression $2341=s_1s_2s_3$, computes all six maximal chains with their deleted-position label words — exactly the six permutations of $\{1,2,3\}$ — identifies the unique increasing chain, with word $(1,2,3)$, as the lexicographically first one, and verifies the local descent replacement on the chain with word $(1,3,2)$. [[ex-cg-s4-rank-three-interval-mobius-from-recurrence]] computes $\mu(1234,2341)=-1$ from the Möbius recurrence, confirms the parity balance of the interval (four elements of even and four of odd length), and checks the falling-chain form: the unique strictly falling maximal chain has word $(3,2,1)$. [[cex-cg-parabolic-quotient-interval-eulerian-claim-fails]] exhibits the quotient interval $[1234,3412]$ of $(S_4)^{\{s_1,s_3\}}$: its six elements and six covers give $\mu(1234,3412)=0$, whereas $(-1)^{\ell(3412)-\ell(1234)}=1$, and it identifies fullness as the exact dropped hypothesis, since $1432\le3412$ holds in the full order while $1432\notin W^{\{s_1,s_3\}}$.

The results tested here are proved on the theory page and its prerequisites: the subword and cover criteria of [[bruhat-subword-order-and-lifting]], the deleted-position labeling and local descent replacement of the theory page, and the Eulerian and quotient statements of [[thm-cg-bruhat-eulerian-intervals-and-mobius]]. The computations are evidence within their finite scope and do not replace those proofs.
