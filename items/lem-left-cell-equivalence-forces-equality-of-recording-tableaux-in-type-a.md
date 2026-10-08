---
id: lem-left-cell-equivalence-forces-equality-of-recording-tableaux-in-type-a
kind: lemma
title: Left equivalence forces equality of recording tableaux in type A
status: draft
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
deps: [prop-same-insertion-or-recording-tableaux-imply-cell-equivalence, lem-kazhdan-lusztig-mu-edges-and-left-cells-are-transported-by-star-operations, lem-dual-knuth-star-operations-give-antiparallel-kazhdan-lusztig-graph-edges, thm-knuth-equivalence-classes-are-insertion-tableau-fibers, thm-robinson-schensted-correspondence, def-left-right-and-two-sided-kazhdan-lusztig-preorders-and-cells, def-star-operations-on-the-symmetric-group, def-row-insertion-and-bumping-route, lem-row-bumping-route-monotonicity, lem-robinson-schensted-recording-tableau-is-standard, def-weyl-group-and-length-for-finite-gl-n, def-young-tableau-standard-tableau-and-shape, def-partition-young-diagram-and-conjugate-partition]
dependency_level: 10
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Susumu Ariki, Robinson–Schensted correspondence and left cells, arXiv:math/9910117 — the hard direction of Theorem A and the descent/block comparison."
      url: "https://arxiv.org/pdf/math/9910117"
      locator: "§3.2, Definition 3.2 and Theorem 3.3, printed pp. 7–8; §3.4, the complete proof of Theorem A, printed pp. 10–11."
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Facts & Assumptions

**Given:** $n\ge1$, permutations $x,y\in S_n$ in one-line notation, their RSK tableaux $P(x),Q(x),P(y),Q(y)$, and the left and right Kazhdan–Lusztig cells.

[F1] The RSK map is a bijection from permutations in one-line notation to pairs of standard tableaux of the same shape ([[thm-robinson-schensted-correspondence]]).

[F2] Knuth equivalence is exactly equality of insertion tableaux; every equality of insertion tableaux is connected by a finite chain of elementary Knuth moves ([[thm-knuth-equivalence-classes-are-insertion-tableau-fibers]]).

[F3] Each elementary Knuth move is a right star operation on its domain, whose domain is determined by the right descents at the two adjacent simple reflections ([[def-star-operations-on-the-symmetric-group]], [[lem-dual-knuth-star-operations-give-antiparallel-kazhdan-lusztig-graph-edges]]).

[F4] If $u,v\in D_{ij}$, then $u\sim_Lv\iff K_{ij}(u)\sim_LK_{ij}(v)$; the same equivalence holds on $D_{ji}$ for the inverse $K_{ji}$, by applying the $D_{ij}$ equivalence to the starred pair ([[lem-kazhdan-lusztig-mu-edges-and-left-cells-are-transported-by-star-operations]]).

[F5] The right descent set is constant on a left cell, and the RSK pair of a permutation is unique for that permutation ([[def-left-right-and-two-sided-kazhdan-lusztig-preorders-and-cells]], [[thm-robinson-schensted-correspondence]]).

[F6] In row insertion, label $k$ in the recording tableau is in the box added when the $k$th letter is inserted ([[def-row-insertion-and-bumping-route]], [[lem-robinson-schensted-recording-tableau-is-standard]]).

[F7] Row insertion replaces the leftmost entry greater than the carried letter, carries the displaced entry to the next row, and otherwise appends at the right end of the row ([[def-row-insertion-and-bumping-route]]).

[F8] For a one-line permutation $w=w_1\cdots w_n$, $s_k\in R(w)$ iff $w_k>w_{k+1}$, since swapping adjacent positions changes only that inversion ([[def-weyl-group-and-length-for-finite-gl-n]]).

[F9] Standard tableaux have strictly increasing rows and columns, and their shapes are Young diagrams with weakly decreasing row lengths and column lengths ([[def-young-tableau-standard-tableau-and-shape]], [[def-partition-young-diagram-and-conjugate-partition]]).

[F10] Inserting a distinct new letter into a standard tableau terminates at an addable node and produces a standard tableau of the enlarged Young shape; the bumped letters strictly increase ([[lem-row-bumping-route-monotonicity]]).

## Statement

For $x,y\in S_n$, $x\sim_Ly\Rightarrow Q(x)=Q(y)$.

## Proof

**Proof technique:** replace the tableaux by column-superstandard insertion tableaux, transport Knuth paths through left cells, and compare the column lengths.

1.1 **Recording descents match permutation descents.** For a standard tableau $U$, define $\operatorname{Des}(U):=\{k:\operatorname{row}_U(k+1)>\operatorname{row}_U(k)\}$. Let $a=w_k$, $b=w_{k+1}$ and $T=P_{k-1}$; both letters are absent from $T$. By [F10], $T$ and $T\leftarrow a$ have strictly increasing rows, and the route for $a$ has increasing carried letters. Inserting $a$ follows rows $1$ through $m$: write $a_1=a$, and for $i<m$ let $p_i$ be the position where $a_i$ bumps the old entry $a_{i+1}$; in row $m$ it appends $a_m$ at position $p_m$. Let $b_i$ and $q_i$ be the corresponding carried letters and positions when $b$ is inserted into $T\leftarrow a$. If $b>a$, then $b_1>a_1$. Whenever this route reaches row $i<m$ with $b_i>a_i$, every entry left of $p_i$ in the current row is $<a_i$, and the entry at $p_i$ is $a_i$; thus $b$ either appends and stops in that row or bumps at a position $q_i>p_i$. In the latter case row strictness gives $b_{i+1}>a_{i+1}$. If it reaches row $m$, then $b_m>a_m$, so it appends at $p_m+1$; in all cases its new box is in a row at most $m$. If $b<a$, then $b_1<a_1$. Whenever the route reaches row $i<m$ with $b_i<a_i$, the entry at $p_i$ is $a_i>b_i$, so it bumps at $q_i\le p_i$. If $q_i<p_i$, the old entry there is $<a_{i+1}$; if $q_i=p_i$, it bumps $a_i<a_{i+1}$. Hence $b_{i+1}<a_{i+1}$ and it reaches row $m$. There $a_m$ was appended at $p_m$, so $b_m<a_m$ makes it bump at or before $p_m$ and continue to a lower row. Thus the box for $b$ is strictly below the box for $a$ exactly when $b<a$. By [F6], these are the boxes carrying $k+1$ and $k$ in $Q(w)$; by [F8], $b<a$ is equivalent to $s_k\in R(w)$. Therefore $\operatorname{Des}(Q(w))=\{k:s_k\in R(w)\}$. [given, F6, F7, F8, F10, algebra]

1.2 **The column-superstandard word.** Let $\lambda$ have column lengths $l_1\ge\cdots\ge l_m>0$, put $L_0=0$ and $L_j=l_1+\cdots+l_j$, and let $P_\lambda$ fill column $j$ from top to bottom with $L_{j-1}+1,\dots,L_j$. The word $\omega_\lambda=(L_1,\dots,1,L_2,\dots,L_1+1,\ldots,L_m,\dots,L_{m-1}+1)$ has RSK pair $(P_\lambda,P_\lambda)$. Indeed the first decreasing block inserts as a column. Each later block has entries larger than all preceding blocks; its largest entry appends at the end of the first row, and each subsequent smaller entry bumps the preceding new-column entry down one row, where it appends after the entries from earlier blocks. Thus block $j$ fills column $j$ with $L_{j-1}+1,\dots,L_j$ from top to bottom, and the recording labels fill that column in increasing order. By [F1], $\omega_\lambda$ is the unique permutation with pair $(P_\lambda,P_\lambda)$. Its right descent positions are precisely the positions inside its decreasing blocks, with ascents at $L_1,\dots,L_{m-1}$. [F1, F5, F7, F9, F10, algebra]

1.3 **The descent set determines the tableau of this fixed shape.** Let $U$ be a standard tableau of shape $\lambda$, and put $D_\lambda:=\{1,\dots,n-1\}\setminus\{L_1,\dots,L_{m-1}\}=\operatorname{Des}(P_\lambda)$. Suppose $\operatorname{Des}(U)=D_\lambda$. The cells carrying labels at most $k$ form a Young diagram contained in $\lambda$, since every cell to the left or above a cell has a smaller entry; the next label occupies an addable node of that prefix. Induct on the columns. Label $1$ occupies $(1,1)$. After columns $1,\dots,j-1$ have been filled to their final heights $l_1,\dots,l_{j-1}$, no further box can be added to those columns: such a box would lie outside $\lambda$. For $j>1$, the non-descent at $L_{j-1}$ requires label $L_{j-1}+1$ to lie in a row at most $l_{j-1}$; every such row of the prefix has length $j-1$, and the Young-prefix condition makes $(1,j)$ its only addable node in those rows. Thus column $j$ starts at its top. Suppose its first $r<l_j$ entries have filled rows $1,\dots,r$. The next label is an internal descent, so its row is strictly greater than $r$. Earlier columns cannot grow, while an addable node in a later column would be in row one and hence cannot be a descent. In column $j$, skipping row $r+1$ would violate the Young-prefix condition, so the only possible node is $(r+1,j)$, which belongs to $\lambda$ because $r<l_j$. Therefore column $j$ is filled from top to bottom with $L_{j-1}+1,\dots,L_j$. This completes every column and gives $U=P_\lambda$. [F9, algebra]

1.4 **Replace by column-superstandard insertion tableaux.** Suppose $x\sim_Ly$, and let $\lambda_1,\lambda_2$ be the shapes of $Q(x),Q(y)$. By [F1] there are unique $\hat x,\hat y$ with RSK pairs $(P_{\lambda_1},Q(x))$ and $(P_{\lambda_2},Q(y))$. Since $Q(\hat x)=Q(x)$ and $Q(\hat y)=Q(y)$, the recording-tableau implication of [[prop-same-insertion-or-recording-tableaux-imply-cell-equivalence]] gives $x\sim_L\hat x$ and $y\sim_L\hat y$, hence $\hat x\sim_L\hat y$. By [F5], $R(\hat x)=R(\hat y)$. [F1, F5, algebra]

2.1 **Transport the two Knuth paths.** By [F2] and [F1], take a finite Knuth path $\hat x\to y'$ with RSK pair $(P_{\lambda_1},P_{\lambda_1})$ and a finite path $\hat y\to w''$ with pair $(P_{\lambda_2},P_{\lambda_2})$. Apply the first path's successive star operations also to $\hat y$, obtaining $w'$, and the second path's operations also to $\hat x$, obtaining $y''$. These parallel paths are defined at every step: initially the paired elements have equal right descent sets by step 1.4; if one path step is a star on $D_{ij}$ or $D_{ji}$, [F3] shows the other element is in the same domain, and the transported pair remains left equivalent by [F4]. The left-cell descent property [F5] then keeps their right descent sets equal for the next step. Therefore $y'\sim_Lw'$ and $y''\sim_Lw''$, so $R(y')=R(w')$ and $R(y'')=R(w'')$. Knuth moves preserve insertion tableaux by [F2], hence $P(w')=P_{\lambda_2}$ and $P(y'')=P_{\lambda_1}$. [F1, F2, F3, F4, F5, step 1.4, algebra]

3.1 **Compare the column lengths.** Write $l_1,l_2,\dots$ and $l'_1,l'_2,\dots$ for the column lengths of $\lambda_1$ and $\lambda_2$, padding both lists by zeros after their final columns. By step 1.2, $y'$ and $w''$ are concatenations of decreasing blocks of lengths $l_j$ and $l'_j$, respectively; since $R(y')=R(w')$ and $R(y'')=R(w'')$, [F8] implies the corresponding position blocks of $w'$ and $y''$ are also decreasing. The first $l_1$ letters of $w'$ insert to a column of height $l_1$, so the first column of $P(w')=P_{\lambda_2}$ has length $l'_1\ge l_1$; the first $l'_1$ letters of $y''$ similarly give $l_1\ge l'_1$, hence $l_1=l'_1$. Inductively suppose $l_j=l'_j$ for $j<k$ and the first $k-1$ blocks have filled exactly those first $k-1$ columns in each partial insertion tableau. Inserting block $k$ of $w'$ cannot add boxes to those columns, whose lengths already equal their final lengths in $P_{\lambda_2}$. All later columns are empty before that block. Its first new box must be at the top of column $k$; each subsequent letter is smaller, so by step 1.1 its new box lies strictly lower, and the Young-diagram condition forces the successive new boxes down column $k$. Thus $l'_k\ge l_k$; if $l'_k=0<l_k$, the forced new column would contradict the final shape, so this case is impossible as well. The same argument with $y''$ and target $P_{\lambda_1}$ gives $l_k\ge l'_k$, including the case $l_k=0<l'_k$. Induction yields $\lambda_1=\lambda_2=:\lambda$. [F1, F2, F5, F7, F8, F9, F10, step 1.1, step 1.2, step 2.1]

4.1 **Identify the recording tableau and conclude.** By step 3.1, $P(w')=P_\lambda$ and $R(w')=R(y')$. The common-shape property in [F1] therefore gives $\operatorname{sh}(Q(w'))=\operatorname{sh}(P(w'))=\lambda$. Step 1.1 gives $\operatorname{Des}(Q(w'))=\{k:s_k\in R(w')\}=\{k:s_k\in R(y')\}=\operatorname{Des}(P_\lambda)$, since step 1.2 identifies the block descent set with the descent set of $P_\lambda$. By step 1.3, $Q(w')=P_\lambda$. The RSK bijection [F1] then gives $w'=y'$. The first transported path is a composition of bijective star maps, so equality of its outputs on $\hat x,\hat y$ implies $\hat x=\hat y$. Their recording tableaux are $Q(x),Q(y)$ by construction in step 1.4, whence $Q(x)=Q(y)$. [F1, step 1.1, step 1.2, step 1.3, step 1.4, step 3.1] ∎

## Remarks

Ariki's §3.4 proof is the source route. This item proves locally the two facts his compressed argument uses at the end: adjacent descents of the word agree with descent positions in the recording tableau, and among standard tableaux of the same fixed shape, the column-superstandard tableau is determined by its block descent set. The row-insertion route comparison is derived from [F6]–[F8] and [F10], so no separate descent-set supplier is assumed.

The parallel finite Knuth paths use the locally proved star-cell transport and constant right descent sets on left cells. Coefficientwise positivity is not required.

The finite paths and inductions use no choice principle.
