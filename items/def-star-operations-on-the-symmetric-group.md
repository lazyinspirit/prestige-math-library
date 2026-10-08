---
id: def-star-operations-on-the-symmetric-group
kind: definition
title: Star operations on strings of adjacent simple reflections
status: draft
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
deps: [def-knuth-and-dual-knuth-equivalence-for-permutations, def-weyl-group-and-length-for-finite-gl-n]
dependency_level: 1
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Lars Thorge Jensen, p-Kazhdan–Lusztig Theory (Bonn dissertation 2017/18), — the star operations, their action on structure coefficients, and the transfer of the type-A classification; his normalization is translated to the one of this page"
      url: "https://d-nb.info/1162953020/34"
      locator: "§5.0–5.1, printed pp. 44–52; Definition 5.1 on p. 49 gives the right coset-string involution, specialized here to m=3."
    - title: "Susumu Ariki, Robinson–Schensted correspondence and left cells, arXiv:math/9910117 (18 pp.) — the direct proof of the Kazhdan–Lusztig cell classification in type A via Knuth relations and transported Kazhdan–Lusztig graph edges"
      url: "https://arxiv.org/pdf/math/9910117"
      locator: "§3.2, printed pp. 7–8 / PDF pp. 7–8: Definition 3.2 of the local Knuth transformations and the description of them as the m=3 right star operation."
    - title: "Donald E. Knuth, Permutations, Matrices, and Generalized Young Tableaux, Pacific J. Math. 34 (1970), 709–727"
      url: "https://msp.org/pjm/1970/34-3/pjm-v34-n3-p09-s.pdf"
      locator: "§6, equations (6.6)–(6.7), printed p. 723: the two strict three-letter Knuth moves used in the type-A description."
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Definition

Let $n\ge3$ and $1\le i\le n-2$, and put $r=s_i$, $t=s_{i+1}$. These simple reflections satisfy $(rt)^3=1$. For $w\in S_n$, let $R(w):=\{s: \ell(ws)<\ell(w)\}$ be its right descent set, using the one-line convention and inversion length of [[def-weyl-group-and-length-for-finite-gl-n]]. Define
$$D_i:=\{w\in S_n:|R(w)\cap\{r,t\}|=1\}.$$

The subgroup $P_i:=\langle r,t\rangle$ permutes the entries in positions $i,i+1,i+2$. In each right coset $C=wP_i$, let $a<b<c$ be the three entries in those positions, and let $\widetilde w$ be the unique member whose entries there are $a,b,c$ in increasing order. Then $C$ consists of $\widetilde w,\widetilde wr,\widetilde wt,\widetilde wrt,\widetilde wtr,\widetilde wrtr$, with lengths $\ell(\widetilde w),\ell(\widetilde w)+1,\ell(\widetilde w)+1,\ell(\widetilde w)+2,\ell(\widetilde w)+2,\ell(\widetilde w)+3$, respectively. Its intersection with $D_i$ is the four middle elements.

Right multiplying by $r$ and $t$ swaps the first two and last two block entries; the six words $1,r,t,rt,tr,rtr$ give the six distinct reorderings, so $P_i\cong S_3$ and the displayed list exhausts $C$. Sorting gives the unique member with no internal inversions. Reordering the block does not change the total number of inversions involving a position outside it: an outside position lies either before all three entries or after all three, so its comparisons with the block depend only on the set $\{a,b,c\}$. The internal inversion counts of $abc,bac,acb,bca,cab,cba$ are $0,1,1,2,2,3$. Their right descent sets restricted to $\{r,t\}$ are respectively $\varnothing,\{r\},\{t\},\{t\},\{r\},\{r,t\}$, so precisely the four length-one and length-two elements lie in $D_i$.

The **right star operation** $w\mapsto w^*$ on $D_i$ is defined on each coset by

| $w$ | $w^*$ |
| --- | --- |
| $\widetilde w r$ | $\widetilde w rt$ |
| $\widetilde w rt$ | $\widetilde w r$ |
| $\widetilde w t$ | $\widetilde w tr$ |
| $\widetilde w tr$ | $\widetilde w t$ |

Thus $w\mapsto w^*$ is an involution of $D_i$. The **left star operation** is $^*w:=((w^{-1})^*)^{-1}$ on $D_i^{-1}:=\{w^{-1}:w\in D_i\}$; it is also an involution.

In one-line notation, the sorted triple for $\widetilde w$ is $abc$ with $a<b<c$. The four elements of $D_i$ have triples $bac$, $bca$, $acb$, $cab$, and the right star operation exchanges $bac\leftrightarrow bca$ and $acb\leftrightarrow cab$. Hence for every $w\in D_i$, the words $w$ and $w^*$ differ by exactly one elementary Knuth move in positions $i,i+1,i+2$ as defined in [[def-knuth-and-dual-knuth-equivalence-for-permutations]].
