---
id: prop-tower-exact-couple-interface
kind: proposition
title: Spectral sequence of a tower
status: draft
domain: mathematics
deps:
  - lem-filtered-stage-exact-sequence
  - lem-eilenberg-maclane-shift-index
  - math:def-exact-couple
  - math:def-derived-exact-couple
  - math:def-cohomological-spectral-sequence
dependency_roles:
  lem-filtered-stage-exact-sequence: mathematical-premise
  lem-eilenberg-maclane-shift-index: mathematical-premise
  math:def-exact-couple: mathematical-premise
  math:def-derived-exact-couple: mathematical-premise
  math:def-cohomological-spectral-sequence: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 6
---

## Statement
Let $E$ be a spectrum equipped with spectra $F^jE$ and compatible maps $F^{j+1}E\to F^jE\to E$, for all integers $j$. Put $\operatorname{gr}^jE=\operatorname{cofib}(F^{j+1}E\to F^jE)$ and $F^j\pi_nE=\operatorname{im}(\pi_nF^jE\to\pi_nE)$. The stage sequences form an exact couple and yield a cohomological spectral sequence, indexed from page 2, with

$$E_2^{a,b}=\pi_{-a-b}\operatorname{gr}^{-b}E,\qquad d_s:E_s^{a,b}\longrightarrow E_s^{a+s,b-s+1}\quad(s\ge2).$$

If specified equivalences $\operatorname{gr}^jE\simeq(HC_j)[2j]$ are given for cochain complexes $C_j$, then naturally

$$E_2^{a,b}\cong H^{a-b}(C_{-b}).$$

Suppose additionally that, for each integer $n$, there are integers $L_n\le U_n$ such that $\pi_nF^jE\to\pi_nE$ is an isomorphism for $j\le L_n$ and $\pi_nF^jE=0$ for $j\ge U_n$. Then every bidegree stabilizes after finitely many pages and there are natural isomorphisms

$$E_\infty^{a,b}\cong F^{-b}\pi_{-a-b}E/F^{-b+1}\pi_{-a-b}E.$$

Thus the spectral sequence converges to $\pi_{-a-b}E$ with its finite image filtration. Here $E_\infty$ denotes the eventual stable page in each bidegree; convergence includes the displayed associated-graded identification, not a canonical splitting of the filtration. The stated boundedness is a sufficient hypothesis; no convergence is asserted from the graded identifications alone.

## Facts & Assumptions

**Given:** The tower and compatible maps in the statement; for the indexed cohomology formula, the specified graded equivalences; for convergence, the stated degreewise bounds.

**Goal:** Construct the spectral sequence, calculate its indices, and prove its bounded convergence assertion.

[F1] For every $j,n$, [[lem-filtered-stage-exact-sequence]] gives the natural long exact sequence containing $\pi_nF^{j+1}E\to\pi_nF^jE\to\pi_n\operatorname{gr}^jE\to\pi_{n-1}F^{j+1}E$.

[F2] [[math:def-exact-couple]] specifies the initial homological exact-couple degrees. [[math:def-derived-exact-couple]] supplies the derived couple, its exactness, and its differential and homology construction. [[math:def-cohomological-spectral-sequence]] specifies the cohomological differential degrees and page-to-page homology requirement.

[F3] Under a specified equivalence $\operatorname{gr}^jE\simeq(HC_j)[2j]$, [[lem-eilenberg-maclane-shift-index]] gives $\pi_n\operatorname{gr}^jE\cong H^{2j-n}(C_j)$.

## Proof

1.1 Set $D^1_{p,q}=\pi_{p+q}F^{-p}E$ and $E^1_{p,q}=\pi_{p+q}\operatorname{gr}^{-p}E$. Let $i$ be induced by $F^{-p}E\to F^{-p-1}E$, let $j$ be the stage projection, and let $k$ be the connecting homomorphism. Their respective degrees are $(1,-1)$, $(0,0)$ and $(-1,0)$. Exactness at all three vertices follows from the long exact sequences in [F1], so these maps form an initial exact couple. [F1, F2, construct]

2.1 Derive the couple repeatedly. At homological page $r\ge1$, its differential $d_r=jk$ has degree $(-r,r-1)$, squares to zero, and its homology is the next page. Define $E_s^{a,b}=E^{s-1}_{b,-a-2b}$ for $s\ge2$. A homological differential with $r=s-1$ changes $(b,-a-2b)$ to $(b-r,-a-2b+r-1)$, corresponding to $(a+s,b-s+1)$. Hence these reindexed pages satisfy the cohomological spectral-sequence convention. At $s=2$, their total homotopy degree is $b+(-a-2b)=-a-b$ and their filtration index is $-b$, proving the first displayed formula. [F2, step 1.1, algebra]

3.1 With $j=-b$ and $n=-a-b$, [F3] gives $\pi_n\operatorname{gr}^jE\cong H^{2j-n}(C_j)=H^{a-b}(C_{-b})$. This proves the second displayed formula and its naturality for maps preserving the given graded equivalences. [F3, step 2.1, algebra]

4.1 Fix $j,n$. Iterating the derived-couple formulas shows the following two elementary lifting facts. A class on the initial graded term that survives through arbitrarily many differentials has connecting image in $\pi_{n-1}F^{j+1}E$ admitting lifts from arbitrarily high stages; the indeterminacies in choosing lifts are precisely the boundaries already factored out. Conversely, if its connecting image is zero, exactness writes it as the stage projection of an element of $\pi_nF^jE$, and that projected class survives every page. The first assertion follows inductively because passing to the next derived couple replaces the $D$-term by the image of the next transition map; the converse follows because a stage projection has zero connecting image and the same is true after each derivation. [F1, F2, step 1.1, step 3.1]

5.1 The high-stage bound in degree $n-1$ makes the liftable subgroup in step 4.1 zero after finitely many stages. Thus every eventual class is represented by the stage projection of some $x\in\pi_nF^jE$. The derived-couple formulas also give the boundary test: such a projection is eventually zero exactly when the image of $x$ in a sufficiently low stage lies in the image there of $\pi_nF^{j+1}E$. Indeed, a boundary coming from a lower graded stage has connecting image in $\pi_nF^jE$ whose image in that lower stage vanishes; conversely, if $x$ differs by an element from $F^{j+1}$ by an element killed at a lower stage, repeated exactness lifts that difference through the intervening connecting maps and expresses its projection as an iterated boundary. These implications use only finitely many stages. [F1, F2, step 4.1]

6.1 Choose the low stage at or below $L_n$. Its map to $\pi_nE$ is an isomorphism, so the boundary test says precisely that the image of $x$ in $\pi_nE$ belongs to $F^{j+1}\pi_nE$. Consequently the projection induces an isomorphism from $F^j\pi_nE/F^{j+1}\pi_nE$ to the eventual graded term. The high- and low-stage bounds also bound the possible sources and targets of differentials at the fixed bidegree, so this eventual term is reached after finitely many pages. Finally $F^j\pi_nE=\pi_nE$ for $j\le L_n$ and $F^j\pi_nE=0$ for $j\ge U_n$; hence the image filtration is finite and the stated convergence follows. Substitution of $j=-b$ and $n=-a-b$ gives the displayed indexing. [given, step 2.1, step 5.1] ∎
