---
id: ex-rsk-left-right-and-two-sided-cells-in-s-three
kind: example
title: RSK cells in $S_3$ and $S_4$
status: draft
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
deps: [thm-type-a-kazhdan-lusztig-cells-are-classified-by-rsk-tableaux, def-left-right-and-two-sided-kazhdan-lusztig-preorders-and-cells, thm-robinson-schensted-correspondence, def-row-insertion-and-bumping-route, def-young-tableau-standard-tableau-and-shape, def-partition-young-diagram-and-conjugate-partition, def-weyl-group-and-length-for-finite-gl-n]
dependency_level: 12
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Susumu Ariki, Robinson–Schensted correspondence and left cells, arXiv:math/9910117 (18 pp.)"
      url: "https://arxiv.org/pdf/math/9910117"
      locator: "§2.1, Definitions 2.1–2.2 for the P/Q-symbol and recording-tableau conventions; §3.1, Example 3.1 (printed p. 6) for the S3 left-cell fibers; §3.4, Proposition 3.8 and the complete proof of Theorem A (printed pp. 9–10) for the general Q-symbol classification. The displayed S3/S4 insertion outputs are computed locally."
verification:
  precheck: pass
---

## Facts & Assumptions

**Given:** The row-insertion and recording-tableau conventions for one-line permutations in $S_3$ and $S_4$, and the corresponding Kazhdan–Lusztig cell relations.

[F1] Row insertion replaces the leftmost entry strictly greater than the carried letter, bumps that entry to the next row, and stops by appending at the right end of a row; the recording tableau places label $k$ in the new box created by inserting the $k$th letter ([[def-row-insertion-and-bumping-route]], [[thm-robinson-schensted-correspondence]]).

[F2] The type-A cell theorem identifies left cells with $Q$-fibers, right cells with $P$-fibers, and two-sided cells with common RSK-shape fibers ([[thm-type-a-kazhdan-lusztig-cells-are-classified-by-rsk-tableaux]]).

[F3] The right descent set is $R(w)=\{s_i:\ell(ws_i)<\ell(w)\}$, where $ws_i$ swaps positions $i,i+1$ in one-line notation; right descents are constant on a left cell ([[def-left-right-and-two-sided-kazhdan-lusztig-preorders-and-cells]]).

[F4] The length $\ell(w)$ is the number of inversions of the one-line word, and the standard tableaux in the RSK pairs are increasing along rows and columns ([[def-weyl-group-and-length-for-finite-gl-n]], [[def-young-tableau-standard-tableau-and-shape]], [[def-partition-young-diagram-and-conjugate-partition]]).

## Statement

Use the RSK correspondence of [[thm-robinson-schensted-correspondence]] for the one-line word (insertion tableau $P$, recording tableau $Q$; the row insertion is [[def-row-insertion-and-bumping-route]]), and write a standard tableau as its rows separated by bars. (a) In $S_3$: $123\mapsto(123,123)$, $132\mapsto(12|3,12|3)$, $213\mapsto(13|2,13|2)$, $231\mapsto(13|2,12|3)$, $312\mapsto(12|3,13|2)$, $321\mapsto(1|2|3,1|2|3)$ (pairs $(P,Q)$). (b) The left cells of $S_3$ are the four $Q$-fibers $\{123\}$, $\{132,231\}$, $\{213,312\}$, $\{321\}$; the right cells are the four $P$-fibers $\{123\}$, $\{132,312\}$, $\{213,231\}$, $\{321\}$; the two-sided cells are the three shape fibers $\{123\}$, $\{132,213,231,312\}$, $\{321\}$. (c) In $S_4$ the ten left cells are the ten $Q$-fibers: $[1234]:\{1234\}$; $[12|34]:\{2413,3412\}$; $[123|4]:\{1243,1342,2341\}$; $[124|3]:\{1324,1423,2314\}$; $[13|24]:\{2143,3142\}$; $[134|2]:\{2134,3124,4123\}$; $[12|3|4]:\{1432,2431,3421\}$; $[13|2|4]:\{3241,4132,4231\}$; $[14|2|3]:\{3214,4213,4312\}$; $[1|2|3|4]:\{4321\}$; these are in bijection with the ten standard tableaux of size $4$. (d) Right descent sets are constant on left cells but do not determine them: in $S_4$ the permutations $1324$ and $2413$ both have right descent set $\{s_2\}$, while $Q(1324)=[124|3]$ and $Q(2413)=[12|34]$, so $1324$ and $2413$ lie in different left cells.

## Proof

**Proof technique:** apply the row-insertion rule to the listed permutations and then read the cell equivalences from the type-A classification.

1.1 **The six RSK pairs in $S_3$.** Repeated insertion using [F1] gives $$\begin{array}{c|c|c}w&P(w)&Q(w)\\\hline123&[123]&[123]\\132&[12|3]&[12|3]\\213&[13|2]&[13|2]\\231&[13|2]&[12|3]\\312&[12|3]&[13|2]\\321&[1|2|3]&[1|2|3]\end{array}$$. For example, $132$ inserts $1$, then appends $3$, then inserts $2$ in place of $3$ and bumps $3$ to a new second row; the third recording label is therefore in row two. The same leftmost-greater rule gives the other displayed pairs. [F1]

1.2 **All RSK pairs in $S_4$, grouped by $Q$.** Applying [F1] to each of the $24$ one-line words gives $$\begin{array}{c|l}\text{Q(w)}&\text{(w,P(w))}\\\hline\text{[1234]}&\text{(1234,[1234])}\\\text{[12|34]}&\text{(2413,[13|24]),(3412,[12|34])}\\\text{[123|4]}&\text{(1243,[123|4]),(1342,[124|3]),(2341,[134|2])}\\\text{[124|3]}&\text{(1324,[124|3]),(1423,[123|4]),(2314,[134|2])}\\\text{[13|24]}&\text{(2143,[13|24]),(3142,[12|34])}\\\text{[134|2]}&\text{(2134,[134|2]),(3124,[124|3]),(4123,[123|4])}\\\text{[12|3|4]}&\text{(1432,[12|3|4]),(2431,[13|2|4]),(3421,[14|2|3])}\\\text{[13|2|4]}&\text{(3241,[14|2|3]),(4132,[12|3|4]),(4231,[13|2|4])}\\\text{[14|2|3]}&\text{(3214,[14|2|3]),(4213,[13|2|4]),(4312,[12|3|4])}\\\text{[1|2|3|4]}&\text{(4321,[1|2|3|4])}\end{array}$$. As a nontrivial check on the convention, insertion of $2413$ first gives rows $[2,4]$, then bumps $2$ below when $1$ is inserted, and finally bumps $4$ below $3$; thus $P(2413)=[13|24]$ and $Q(2413)=[12|34]$. [F1]

2.1 **Cells in $S_3$.** By [F2] and step 1.1, grouping by equal $Q$ gives the four left fibers in part (b), grouping by equal $P$ gives the four right fibers, and grouping by the common shape gives the three two-sided fibers. The displayed RSK pairs contain all six permutations, so there are no omitted elements in any fiber. [F2, step 1.1]

2.2 **Left cells in $S_4$.** By [F2], each row label $Q$ in step 1.2 indexes exactly one left cell. The possible shapes of size four are $(4),(3,1),(2,2),(2,1,1),(1,1,1,1)$; their standard tableaux are respectively $[1234]$; $[123|4],[124|3],[134|2]$; $[12|34],[13|24]$; $[12|3|4],[13|2|4],[14|2|3]$; and $[1|2|3|4]$. These are exactly the ten distinct $Q$-labels in the table. The listed fibers contain $1+2+3+3+2+3+3+3+3+1=24$ permutations, so every element of $S_4$ occurs and the table proves part (c) and the claimed bijection. [F1, F2, F4, step 1.2]

3.1 **Equal right descents do not determine the left cell.** In one-line notation, $1324$ has length $1$ and right products $1324s_1=3124$, $1324s_2=1234$, $1324s_3=1342$ of lengths $2,0,2$. Thus $R(1324)=\{s_2\}$. The word $2413$ has length $3$ and right products $2413s_1=4213$, $2413s_2=2143$, $2413s_3=2431$ of lengths $4,2,4$, so $R(2413)=\{s_2\}$ as well. But step 1.2 gives $Q(1324)=[124|3]\ne[12|34]=Q(2413)$, so [F2] places them in different left cells. This proves the counterexample while [F3] records that descent sets are constant within each left cell. [F2, F3, F4, step 1.2] ∎

The calculations concern only $S_3$ and $S_4$; no empty or singleton group case is asserted. All insertion procedures are finite and deterministic, so no choice principle is used.
