---
id: lem-cell-slides-and-stabilizations-realize-elementary-group-ring-matrices
kind: lemma
title: "Cell slides and stabilizations realize elementary group-ring matrices"
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-long-exact-sequence-of-relative-homotopy-groups, lem-two-relative-cell-layers-have-free-group-ring-homotopy-bases, def-elementary-expansion-and-collapse-of-finite-cw-complexes, lem-elementary-basis-changes-orientations-and-deck-lift-changes-die-in-the-whitehead-group, prop-relative-cw-inclusions-are-cofibrations, lem-the-stable-elementary-subgroup-is-normal-and-contains-the-commutator-subgroup]
proof_strategy: direct
verification:
  audited: 2026-09-27
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Cohen, §§7.1, 7.4, 8.3–8.4, printed pp.23, 26–27, 31–32"
      url: "https://math.uchicago.edu/~shmuel/tom-readings/Cohen%2C%20simple-htpy-thry.pdf"
      locator: "§§7.1, 7.4, 8.3–8.4, printed pp.23, 26–27, 31–32"
    - title: "Casson, proof of Theorem 4.7, printed pp.32–34"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/cassonsimp.pdf"
      locator: "Theorem 4.7 proof, printed pp.32–34"
---
## Statement

Let $L\subset K$ be a homotopy-equivalence inclusion of connected finite CW
complexes, with only relative cells in degrees $n,n+1$, $n\ge3$. Put
$R=\mathbb Z[\pi_1L]$, choose oriented lifts, and let $A$ be the invertible
relative boundary matrix in the right-module column convention. A finite
formal deformation fixing $L$ realizes $A\mapsto PAQ$ for elementary matrices
$P,Q$ over $R$ and $A\mapsto\operatorname{diag}(A,I_m)$. Reordering, reversing
orientations, and changing lifts implement permutations and diagonal factors
$\pm g$. Every resulting pair has the same relative simple type over $L$.

## Facts & Assumptions

**Given:** The finite connected homotopy-equivalence pair and chosen bases in the statement.

[F1] In two high relative cell degrees, the relative homotopy groups have free right $R$-bases on the lifted cells, their triple boundary is the cellular boundary, and for a homotopy equivalence this boundary is an isomorphism ([[lem-two-relative-cell-layers-have-free-group-ring-homotopy-bases]]).

[F2] An elementary expansion adds a free-face cell pair and its collapse removes it; both operations may fix a retained subcomplex ([[def-elementary-expansion-and-collapse-of-finite-cw-complexes]]).

[F3] The inclusion of a CW subcomplex is a cofibration, so homotopies of its attaching maps extend over finite cell attachments ([[prop-relative-cw-inclusions-are-cofibrations]]).

[F4] Reordering, orientation reversal and a new deck lift change a group-ring cellular basis by a permutation or a diagonal factor $\pm g$; elementary changes and these trivial units do not change its Whitehead class ([[lem-elementary-basis-changes-orientations-and-deck-lift-changes-die-in-the-whitehead-group]]).

[F5] The stable elementary subgroup $E(R)$ is normal in $GL(R)$ ([[lem-the-stable-elementary-subgroup-is-normal-and-contains-the-commutator-subgroup]]).

[F6] For the pair $(V,L)$ the kernel of $\pi_n(V)\to\pi_n(V,L)$ is the image of $\pi_n(L)$. For $V=L\vee\bigvee S^n_j$, the standard sphere classes map to the relative cell basis, so any class in $\pi_n(V)$ is a sum of those sphere classes with group-ring coefficients and a class from $\pi_n(L)$ ([[thm-long-exact-sequence-of-relative-homotopy-groups]], [F1]).

## Proof

**Proof technique:** direct.

1.1 Each attaching sphere of a relative $n$-cell maps into $L$. Its class in $\pi_{n-1}(L)$ maps to zero in $\pi_{n-1}(K)$ because the cell fills it. The inclusion is a homotopy equivalence, so that homomorphism is injective; each attaching sphere is therefore null-homotopic **in $L$**. This also holds for $n=3$, where the relevant group is $\pi_2$. [given]

2.1 A chosen null-homotopy changes that attaching map to a constant map through the standard collar: attach a copy of the $n$-cell and an $(n+1)$-cell whose two cap faces are the old and new characteristic disks and whose side is the homotopy, then collapse the old cap. This is precisely the two-expansion/collapse comparison of homotopic attaching maps in Cohen’s attaching-map comparison (printed p.23), carried out relative to $L$ using [F2] and [F3]. Repeat finitely for the lower cells and push the attaching maps of the upper cells across each collapse by the same collar construction. Thus the pair is formally deformed relative to $L$ to **simplified form**, where every lower $n$-cell is trivially attached at the chosen base vertex of $L$. The deformation does not change its relative simple type. [F2, F3, step 1.1]

3.1 In simplified form put $K_n=L\vee\bigvee_{j=1}^aS^n_j$, and write $\varphi_j:S^n\to K_n$ for the attaching map of the $j$th upper $(n+1)$-cell and $u_j$ for its relative class. Given distinct upper indices $i,j$ and $r=\sum_g a_g g\in R$, represent the based sphere class $[\varphi_j]+[\varphi_i]r\in\pi_n(K_n)$ by a finite pinch-and-whisker map $\theta:S^n\to K_n$: one sphere summand gives $\varphi_j$, and the finitely many other signed summands give the $g$-translates of $\varphi_i$. Since $n\ge3$, $\pi_n(K_n)$ is abelian; the right group-ring action and triple boundary are those of [F1], so the relative image of $\theta$ is $\partial u_j+(\partial u_i)r$. This constructs an **attaching map for a new upper cell**, not a replacement characteristic disk for an existing lower cell. [F1, step 2.1]

3.2 Attach at the basepoint of $L$ a trivially attached $n$-cell and an $(n+1)$-cell whose attaching sphere wraps once around that new $n$-sphere and misses the old relative cells. The new lower cell is a free face after choosing the evident characteristic maps, so this is an elementary expansion relative to $L$; its relative boundary adds a $1$ diagonal block and zero off-diagonal blocks. Repeating gives $A\mapsto\operatorname{diag}(A,I_m)$. [F2, step 2.1]

4.1 Let $C$ be the CW subcomplex containing $K_n$ and all upper cells except $e_j^{n+1}$; since $i\ne j$, it contains $e_i^{n+1}$. The attaching sphere $\varphi_i$ extends over the characteristic disk of $e_i^{n+1}$ in $C$, so every whiskered multiple $[\varphi_i]r$ is null-homotopic in $C$. Thus $\varphi_j$ and the map $\theta$ of step 3.1 are homotopic as maps into $C$. Apply the finite collar expansion/collapse comparison of homotopic attaching maps, as in step 2.1, to replace the $j$th **upper** cell attached by $\varphi_j$ with a new upper cell attached by $\theta$; all other cells and $L$ stay fixed. In the unchanged lower basis and the upper basis in which only $u_j$ is replaced by its new characteristic class, the $j$th boundary column changes from $A_j$ to $A_j+A_i r$ by step 3.1, while every other column stays fixed. Hence the new matrix is $A(I+E_{ij}r)$ in the right-module column convention. The reverse collar realizes its inverse $I-E_{ij}r$. This is Cohen’s cell-slide construction, printed pp.31–32, translated from his upper-indexed row notation. [F1, F2, F3, step 2.1, step 3.1]

5.1 For an elementary left factor $P$ and an $a\times a$ matrix $A$, normality [F5] gives $A^{-1}PA\in E(R)$ in the stable group. Thus for some finite $m$, the matrix $\operatorname{diag}(A^{-1}PA,I_m)$ is a product of elementary matrices of size $a+m$. First perform the $m$ stabilizations of step 3.2. The upper-cell slides of step 4.1 for that product then change $\operatorname{diag}(A,I_m)$ to $\operatorname{diag}(PA,I_m)$. This establishes the desired operation with extra identity pairs; the next step removes those pairs geometrically. No unstabilized normality is assumed. [F1, F5, step 3.2, step 4.1]

6.1 The lower skeleton is still $V=L\vee\bigvee_{j=1}^{a+m}S^n_j$: the slides changed only upper attaching maps. For an added lower index $j>a$, the corresponding upper attaching map has relative class $b_j$, and every other upper map has zero $j$th coordinate. By [F6], the first is homotopic in $V$ to $\sigma_j+\alpha_j$, where $\sigma_j$ traverses the $j$th lower sphere once and $\alpha_j$ lies in $L$; represent this sum with the traversal on one disk and the $L$-map on its complementary disk. Every other upper map is homotopic to a finite sum of sphere terms using only the other lower indices and a term in $L$, so it can avoid the interior of this lower cell. Make these replacements using the collar construction of step 2.1. Now the $j$th lower cell is a genuine free face of its matched upper cell, and no other upper cell meets its interior. Collapse this pair. The other relative coordinates are unchanged because the homotopies took place in $V$ and the remaining maps avoid that pair. Repeating for the $m$ added indices leaves exactly the matrix $PA$. Thus stabilization has not weakened the claimed original-size operation. [F1, F2, F6, step 2.1, step 5.1]

7.1 A simultaneous left and right elementary operation $PAQ$ is a finite composite of steps 5.1–6.1 and 4.1; stabilization may be inserted first. Basis permutations, orientations and lifts have exactly the effects asserted in [F4]. All constructions used finitely many cells and finitely many summands of a group-ring coefficient, and each map fixes $L$, proving the statement. ∎ [F4, step 4.1, step 3.2, step 5.1, step 6.1]
