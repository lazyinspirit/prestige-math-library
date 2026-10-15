---
id: lem-hh-type-a-garnir-straightening-and-murphy-cell-law
kind: lemma
title: "Integral type-A Garnir straightening and the Murphy cell law"
status: draft
origin: pipeline
pipeline_run: hopf-hecke-unfinished-15-2026-10-15
dependency_level: 2
deps:
  - def-hh-cell-datum-dominance-and-cell-ideals
  - def-hh-multipartitions-standard-tableaux-and-generic-contents
  - def-hh-cyclotomic-murphy-elements
  - lem-hh-colored-permutation-rsk-and-tableau-square-count
  - lem-hh-finite-matrix-and-module-preliminaries
  - lem-bruhat-order-basic-properties-for-permutations
  - lem-hh-hecke-anti-involution-bar-and-normalization
  - thm-hh-parabolic-minimal-representatives-and-length-additivity
  - thm-hh-generic-coxeter-hecke-standard-basis
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Andrew Mathas, Hecke algebras and Schur algebras of the symmetric group, complete author-uploaded preliminary lecture manuscript (1998)"
      url: "https://web.math.ucsb.edu/~bigelow/books/mathas.pdf"
      locator: "Chapter 3, §§3.3–3.18, printed pp. 18–25 (PDF pp. 22–30): row-module action, Garnir belt identity, row-standard straightening, basis, column refinement, dominance ideals, and cell law. Complete passages inspected; the dominance refinement proof is flagged below for an unresolved local check."
    - title: "Richard Dipper, Gordon James, and Andrew Mathas, Cyclotomic q-Schur algebras, Mathematische Zeitschrift 229 (1998), 385–416"
      url: "https://pnp.mathematik.uni-stuttgart.de/iaz/iaz1/Dipper/papers/cyclo.ps"
      locator: "§3, printed pp. 387–397: ordinary Murphy straightening as input to the cyclotomic proof; full text inspected."
---

## Statement

Let $R_A=\mathbb Z[Q^{\pm1}]$ and let $H_n$ be the type-A Hecke algebra on $T_1,\ldots,T_{n-1}$ with braid relations and $(T_i-Q)(T_i+1)=0$. For a partition $\lambda\vdash n$, let $t^\lambda$ be row-filled, $S_\lambda$ its row subgroup, $x_\lambda=\sum_{w\in S_\lambda}T_w$, and
$$m_{st}=T_{d(s)}^*x_\lambda T_{d(t)}$$
for standard $\lambda$-tableaux, with the tableau action and distinguished representatives fixed in [[def-hh-cyclotomic-murphy-elements]]. Then the $m_{st}$ form an $R_A$-basis of $H_n$, $m_{st}^*=m_{ts}$, and the spans $H_n^{\trianglerighteq\lambda}$ and $H_n^{\triangleright\lambda}$ of shapes respectively dominating and strictly dominating $\lambda$ are two-sided ideals. For every $h\in H_n$ and standard $s,t$ of shape $\lambda$,
$$m_{st}h\equiv\sum_{v\in\operatorname{Std}(\lambda)}r_{t,v}(h)m_{sv}\pmod{H_n^{\triangleright\lambda}},$$
where $r_{t,v}(h)\in R_A$ does not depend on $s$. The proof is integral over $R_A$; it does not divide by $Q+1$ or assume semisimplicity.

## Facts & Assumptions

**Given:** $n\ge0$, the universal unit $Q$, the type-A Hecke presentation, partitions of $n$, and standard tableaux.

[F1] The generic Coxeter-Hecke algebra has basis $T_w$; after $Q=v^2$ and $T_i=v\widetilde T_i$, the symmetric normalization $(\widetilde T_i-v)(\widetilde T_i+v^{-1})=0$ becomes $(T_i-Q)(T_i+1)=0$. ([[thm-hh-generic-coxeter-hecke-standard-basis]], [[lem-hh-hecke-anti-involution-bar-and-normalization]])

[F2] Parabolic cosets have unique distinguished representatives and length-additive decompositions. The standard right tableau action and the row subgroup are as in [[thm-hh-parabolic-minimal-representatives-and-length-additivity]] and [[def-hh-cyclotomic-murphy-elements]].

[F3] For one component, $\sum_{\lambda\vdash n}|\operatorname{Std}(\lambda)|^2=n!$. ([[lem-hh-colored-permutation-rsk-and-tableau-square-count]], specialized to $r=1$)

[F4] If a square family spans a free module of the same finite rank, its coordinate matrix has a right inverse and determinant a unit. ([[lem-hh-finite-matrix-and-module-preliminaries]])

[F5] A finite cell datum has an involution-swapped basis and right multiplication coefficients independent of the first index; its higher-cell spans are two-sided ideals. ([[def-hh-cell-datum-dominance-and-cell-ideals]])

[F6] The row symmetrizers, distinguished tableau permutations, and Murphy elements use the right tableau action and $*$ of [[def-hh-cyclotomic-murphy-elements]].

[F7] Bruhat order on $S_n$ is characterized by reduced subwords and rank inequalities. For row-standard tableaux of a fixed shape, the rank numbers at row boundaries are the cumulative counts of entries at most a given label in the first rows. ([[lem-bruhat-order-basic-properties-for-permutations]])

## Proof

**Given:** The type-A Hecke algebra $H_n$, its standard basis, and the Murphy elements in the Statement.

1.1 Put $R'_A=\mathbb Z[v^{\pm1}]$ and map $R_A\to R'_A$ by $Q\mapsto v^2$. Every Laurent polynomial in $v$ has a unique expression $f(Q)+vg(Q)$, so $R'_A$ is free over $R_A$ on $1,v$ and $R_A\hookrightarrow R'_A$. In the symmetric normalization of [F1], setting $T_i=v\widetilde T_i$ gives $(T_i-v^2)(T_i+1)=0$ and preserves braid relations; the generator rescaling multiplies $T_w$ by the unit $v^{\ell(w)}$. Thus the base-changed algebra over $R'_A$ has basis $\{T_w\}$ by [F1]. The quadratic relation spans products over $R_A$; any relation among the $T_w$ remains a relation over $R'_A$, where they are independent. Injectivity of $R_A\to R'_A$ proves that $\{T_w\}$ is an $R_A$-basis. [F1, algebra]

1.2 For a composition $\alpha$, let $x_\alpha=\sum_{w\in S_\alpha}T_w$. The elements $x_\alpha T_d$ for distinguished right coset representatives $d$ span $x_\alpha H_n$ because each group element factors uniquely as $yd$ with $y\in S_\alpha$ and $\ell(yd)=\ell(y)+\ell(d)$, while $x_\alpha T_y=Q^{\ell(y)}x_\alpha$. Their standard-basis supports are disjoint cosets and each has coefficient $1$ at its distinguished representative, so they are independent. If $s_i$ is a row generator, pairing $w$ and $ws_i$ in $x_\alpha T_i$ and using the two Hecke multiplication cases gives $x_\alpha T_i=Qx_\alpha$. Consequently, on the row-module basis $e_t=x_\alpha T_{d(t)}$, multiplication by $T_i$ has the three cases: $Qe_t$ if $ts_i$ is not row standard, $e_{ts_i}$ if it is row standard and length increases, and $Qe_{ts_i}+(Q-1)e_t$ if it is row standard and length decreases. The left-action formulas follow by applying $*$. [F1, F2, step 1.1]

2.1 For $\alpha$ a composition and $\bar\alpha$ the partition obtained by sorting its parts, reorder the consecutive row blocks by a permutation $d$ so that $S_\alpha d=dS_{\bar\alpha}$. The blocks are intervals, so the intersections of the two block decompositions are intervals; parabolic length additivity gives $x_\alpha T_d=T_dx_{\bar\alpha}$ and hence $x_\alpha=T_dx_{\bar\alpha}T_d^{-1}$. The row-module bases from step 1.2 show that $Hx_{\bar\alpha}H$ is spanned by row-standard Murphy elements of partition shape $\bar\alpha$. Thus every row-standard Murphy element of composition shape $\alpha$ lies in that span. [F2, step 1.2, algebra]

2.2 Fix $\lambda\vdash n$ and a node $(i,j)$ with $\lambda_{i+1}\ge j$. Set $a=t^\lambda(i,j)$, $b=t^\lambda(i+1,j)$, and let $g$ be the Garnir tableau that fills the belt (row $i$ from column $j$ to its end and row $i+1$ from its start through column $j$) increasingly, first along the lower row segment and then along the upper segment. Put $\nu=(\lambda_1,\ldots,\lambda_{i-1},j-1,\lambda_i+1,\lambda_{i+1}-j,\lambda_{i+2},\ldots)$, a composition. The two parabolic decompositions of the interval-block product $S_\lambda S_\nu$ give
$$\sum_{w\in S_\nu\cap D_\lambda}x_\lambda T_w=\sum_{x\in S_\lambda S_\nu}T_x=\sum_{v\in S_\lambda\cap D_\nu}T_v^*x_\nu.$$
Indeed each side lists every element of $S_\lambda S_\nu$ exactly once, with length-additive factors, by [F2]. The tableaux $t^\lambda w$ on the left consist of $g$ and the tableaux obtained by assigning any other $j$-element subset of belt labels to the lower segment; those are standard and strictly more dominant than $g$, since at the first label where the subset differs, a smaller label moves to the upper row. Isolating the $g$ term expresses $x_\lambda T_{d(g)}$ as a linear combination of row-standard Murphy elements of shape $\nu$ and standard right-tableau terms strictly more dominant than $g$. By step 2.1, the shape-$\nu$ terms reduce to partition shapes lexicographically greater than $\lambda$: the first $i$ parts of the sorted $\nu$ have sum at least $\lambda_1+\cdots+\lambda_i+1$. [F2, step 2.1, algebra]

2.3 Let $t$ be a nonstandard row-standard $\lambda$-tableau and choose a column violation $t(i,j)>t(i+1,j)$. Order the boxes first by row order and add the relation $(i+1,j)<(i,j)$. Both $t$ and the Garnir tableau $g$ of step 2.2 are linear extensions. The inversions of $g$ relative to row reading are exactly the pairs consisting of a lower-belt box through column $j$ followed by an upper-belt box from column $j$ onward; the added relation and the two row orders force every such pair in every extension. Thus the inversion set of $g$ is contained in that of $t$. For row-standard tableaux the Coxeter length of $d(t)$ counts these inversions, and $t=g\cdot w$ for the relative permutation $w$ has $\ell(w)$ equal to the number of pairs whose order differs between $g$ and $t$. Therefore $d(t)=d(g)w$ and $\ell(d(t))=\ell(d(g))+\ell(w)$. [F2, F6, step 2.2, algebra]

3.1 For fixed shape, define tableau dominance by comparing, for every label cutoff $m$ and row cutoff $k$, the number of entries at most $m$ in the first $k$ rows. This relation agrees with Bruhat order on the distinguished permutations: at row boundaries the Bruhat rank numbers are exactly these counts by [F7]; inside a row, row standardness makes the count the minimum of the preceding-row count plus the partial row length and the count at the next row boundary, so boundary inequalities give all rank inequalities. Hence $u\triangleright_{\rm tab}t$ implies $d(u)<d(t)$. In step 2.2, each standard tableau $u\triangleright_{\rm tab}g$ has $d(u)$ a proper reduced subword of $d(g)$. Multiplying its row-module element by the reduced word $T_w$ of step 2.3, every standard-basis term is represented by a subword of the reduced expression for $d(t)=d(g)w$. Parabolic reduction to its distinguished row representative preserves the subword inequality. Thus all same-shape output tableaux strictly dominate $t$. Induction first on the finite lexicographic shape order and then on the finite tableau order, and applying $*$ for the first index, straightens every row-standard Murphy element to standard Murphy elements; higher-shape terms are handled before lower shapes. [F1, F2, F6, F7, step 2.1, step 2.2, step 2.3]

4.1 When $\lambda=(1^n)$, $x_\lambda=1$ and the row-standard elements include every standard Hecke basis element $T_w$. Step 3.1 therefore shows that the standard Murphy elements span $H_n$. Their number is $\sum_{\lambda\vdash n}|\operatorname{Std}(\lambda)|^2=n!$ by [F3], equal to the rank of $H_n$ by step 1.1. The square coordinate matrix of this spanning family has a right inverse, hence unit determinant by [F4], so the Murphy elements form an $R_A$-basis. Reversal fixes $x_\lambda$ and sends $T_{d(s)}^*x_\lambda T_{d(t)}$ to $m_{ts}$. [F3, F4, F6, step 1.1, step 3.1]

5.1 Let $\lambda$ be maximal in lexicographic order. For $x_\lambda h\in x_\lambda H_n$, the row-module basis and step 3.1 express it modulo higher lexicographic shapes as $\sum_v r_vx_\lambda T_{d(v)}$, with coefficients independent of a later first tableau. Assume by descending induction that the higher lexicographic Murphy span is a two-sided ideal. Multiplying this congruence on the left by $T_{d(s)}^*$ gives the fixed-first-index law for shape $\lambda$; the higher terms remain in the higher ideal, and the same-shape terms become $m_{sv}$. The induction proves the lexicographic cell law for every shape. Together with the basis and involution, this gives a lexicographic cell datum, so the higher lexicographic spans are two-sided ideals by [F5]. [F5, F6, step 3.1, step 4.1]

6.1 The remaining Statement requires replacing lexicographic shape support by multipartition/partition dominance. The plan's prescribed route is to prove that every nonzero coefficient of $x_\lambda h$ has a first tableau whose successive row-label blocks are horizontal strips, by propagating coefficients across adjacent incomparable swaps and ruling out vertical cover pairs with a column eigenvalue. I cannot complete the needed coefficient-elimination argument from the current local suppliers. In particular, Mathas, Chapter 3, Proposition 3.16 (printed pp. 23–24) first rules out a selected coefficient with a vertical adjacent pair, then removes a selected nonvertical coefficient using $m_{uv}+m_{u'v}=m_\mu m_{uv}$ for $u'=u(i,i+1)$. The proof does not address the case where $i,i+1$ are in the same row of $u$: then $u'$ is not standard, and the displayed two-standard-tableau subtraction is not justified. A complete row-block horizontal-strip support lemma, or a repaired elimination handling this case, is needed before the dominance ideals and the dominance cell law in the Statement follow. This step records an unresolved proof gap; it does not claim those conclusions. [F5, step 5.1] ∎

## Proof status

The integral basis, involution, Garnir straightening, and lexicographic cell law are proved above. The dominance ideals and dominance cell law in the Statement remain unproved in this draft. The final step is an audit record, not a proof of those dominance claims; this item must be escalated until the missing row-block horizontal-strip argument is supplied and checked.
