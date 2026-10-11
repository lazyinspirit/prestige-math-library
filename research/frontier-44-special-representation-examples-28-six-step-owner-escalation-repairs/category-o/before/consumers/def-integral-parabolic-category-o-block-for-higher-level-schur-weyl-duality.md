---
id: def-integral-parabolic-category-o-block-for-higher-level-schur-weyl-duality
kind: definition
title: "The integral parabolic category-O blocks for higher-level Schur-Weyl duality"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 22
deps:
  - def-parabolic-category-o-for-a-standard-parabolic
  - def-standard-parabolic-and-levi-subalgebras-from-simple-roots
  - def-bgg-category-o
  - def-verma-module
  - def-standard-and-costandard-objects-in-category-o
  - def-verma-flag-and-its-multiplicities
  - thm-bgg-reciprocity
  - def-grothendieck-group-and-character-of-category-o
  - thm-parabolic-category-o-is-a-highest-weight-category
  - def-partition-young-diagram-and-conjugate-partition
  - def-dominance-order-on-partitions
  - def-young-tableau-standard-tableau-and-shape
  - thm-simple-objects-of-category-o-are-highest-weight-modules
  - def-axiom-of-choice
  - def-higher-level-wedge-tensor-fock-module
  - thm-finite-dimensional-simple-modules-are-classified-by-dominant-highest-weights
  - cor-central-characters-are-dot-weyl-orbits
  - lem-type-a-tableau-central-summands-are-single-linkage-blocks
  - lem-the-parabolic-semi-regular-duality-and-reverse-column-label-map
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jonathan Brundan and Alexander Kleshchev, The degenerate analogue of Ariki's categorification theorem, Math. Z. 266 (2010) 877-919 (complete 44-page arXiv article)"
      url: "https://arxiv.org/pdf/0901.0057"
      locator: "Section 3.1 up to (3.3) (printed pp. 19-21): $\\mathfrak{gl}_n$, the standard parabolic with Levi $\\mathfrak{gl}_{n_1}\\oplus\\cdots\\oplus\\mathfrak{gl}_{n_l}$, the blocks $\\mathcal O^\\Lambda_\\alpha$, their simples, standards, projectives, tiltings and BGG reciprocity; complete passage read."
    - title: "Volodymyr Mazorchuk, Lectures on Algebraic Categorification, QGM Master Class Series, European Mathematical Society 2012 (complete 77-page arXiv lecture-note set)"
      url: "https://arxiv.org/pdf/1011.0144"
      locator: "Sections 4.4 and 4.6 (printed pp. 20-21): quasi-hereditary structure, parabolic category $\\mathcal O^{\\mathfrak p}$, Zuckerman functors and parabolic Verma modules; complete passage read."
---

## Definition

Assume the Axiom of Choice ([[def-axiom-of-choice]]) and that $I$ is bounded
below, so $n_j=m_j+1-\inf(I)$ and $n=\sum_jn_j$ are finite; the upper end of
$I$ may remain unbounded. Let $\mathfrak g=\mathfrak{gl}_n(\mathbb C)$ and let
the standard parabolic $\mathfrak p$ have Levi
$\mathfrak{gl}_{n_1}\oplus\cdots\oplus\mathfrak{gl}_{n_l}$
([[def-standard-parabolic-and-levi-subalgebras-from-simple-roots]]).
For a tableau $A$ let $a_1,\dots,a_n$ be its ordinary highest-weight
reading: read columns from left to right and each column from top to bottom,
so its entries are strictly decreasing. This is also the normally ordered column reading of
[[def-higher-level-wedge-tensor-fock-module]]. Put
$$\lambda_A=\sum_{j=1}^{n}(a_j+j-1)\,\varepsilon_j .$$
Strict columns make $\lambda_A$ Levi-dominant, so that the simple highest weight
module $L(A)$ of [[thm-simple-objects-of-category-o-are-highest-weight-modules]]
and the induced generalized standard
$M(A)=M_{\mathfrak p}(\lambda_A)$ of
[[def-parabolic-category-o-for-a-standard-parabolic]] belong to the genuine
parabolic category $\mathcal O^{\mathfrak p}$ of
[[thm-parabolic-category-o-is-a-highest-weight-category]].

Use the published **half-sum convention**
$\rho_j=(n+1-2j)/2$; then
$$\lambda_{A,j}+\rho_j=a_j+\frac{n-1}{2},$$
so the $\mathfrak{gl}_n$ Harish-Chandra shifted-coordinate multiset of the
block is the tableau-entry multiset plus the common scalar $(n-1)/2$, and this
multiset together with the displayed scalar $\mathfrak{gl}_n$ centre labels the
central character ([[cor-central-characters-are-dot-weyl-orbits]]). The Fock
weight $\sum_j\delta_{a_j}=\Lambda-\alpha$ of the Fock item belongs to the
different $\mathfrak{gl}_{I^+}$ weight lattice and indexes that entry multiset;
it is **not** a literal $\mathfrak{gl}_n$ highest weight.

For an entry multiset $\alpha$ the corresponding **finite parabolic central
block** $\mathcal O^\Lambda_\alpha$ has labels
$\mathrm{Col}^\Lambda_\alpha$, generalized standards $M(A)$, simples $L(A)$,
projective covers $P(A)$ and costandards $\nabla(A)$, with the BGG reciprocity,
restricted duality and highest-weight structure inherited from
[[thm-parabolic-category-o-is-a-highest-weight-category]]; by
[[lem-type-a-tableau-central-summands-are-single-linkage-blocks]] it is a single
linkage block. Its simple and standard classes form bases of its Grothendieck
group, and its numerical multiplicities include repeated-entry singular central
characters. The direct sum over the admitted entry multisets is
$\mathcal O^\Lambda$. **Opposite blocks** use the reversed Levi order and the
reverse-column reading, with the correspondingly reversed label order
([[lem-the-parabolic-semi-regular-duality-and-reverse-column-label-map]]).

## Facts & Assumptions

**Given:** A bounded-below residue set $I$ with finite column heights $n_j$ and $n=\sum_jn_j$, the Lie algebra $\mathfrak{gl}_n$ with standard parabolic of Levi $\mathfrak{gl}_{n_1}\oplus\cdots\oplus\mathfrak{gl}_{n_l}$, the tableau readings $a_1,\dots,a_n$, the half-sum convention $\rho_j=(n+1-2j)/2$, and the Fock conventions of [[def-higher-level-wedge-tensor-fock-module]].

[F1] Parabolic category structure ([[def-parabolic-category-o-for-a-standard-parabolic]], [[thm-parabolic-category-o-is-a-highest-weight-category]], [[def-standard-parabolic-and-levi-subalgebras-from-simple-roots]]): generalized standards $M(A)$, simples, projectives, costandards, BGG reciprocity, restricted duality and finite highest-weight flags in each integral block.

[F2] Classical highest weights and characters ([[thm-simple-objects-of-category-o-are-highest-weight-modules]], [[thm-finite-dimensional-simple-modules-are-classified-by-dominant-highest-weights]], [[cor-central-characters-are-dot-weyl-orbits]], [[def-grothendieck-group-and-character-of-category-o]], [[def-bgg-category-o]], [[def-verma-module]]): the finite Levi highest-weight classification, the dot-action and Harish-Chandra labelling of central characters, and character/Grothendieck bases.

[F3] Linkage ([[lem-type-a-tableau-central-summands-are-single-linkage-blocks]]): each of these genuine type-$A$ tableau central summands is a single linkage block, original and opposite.

[F4] Semi-regular duality ([[lem-the-parabolic-semi-regular-duality-and-reverse-column-label-map]]): reversed Levi order, reverse-column reading and reversed label order.

[F5] Axiom of Choice ([[def-axiom-of-choice]]).

## Verification

**Proof technique:** direct.

1.1 **Levi dominance and the shifted multiset.** Read each strict column from top to bottom, as stipulated for the ordinary highest-weight tuple. Then $a_j>a_{j+1}$ within each Levi block and the integral difference is at least one. Consequently $\lambda_{A,j}-\lambda_{A,j+1}=a_j-a_{j+1}-1\ge0$, so $\lambda_A$ is weakly dominant and integral for the Levi. Consecutive ground entries may give equality of these highest-weight coordinates, which is allowed. This ordinary tuple follows the same normally ordered column reading. Therefore $L(A)$ and $M(A)$ are genuine objects of $\mathcal O^{\mathfrak p}$ by [F1]. Because $\rho_j=(n+1-2j)/2$ has total sum $0$, the $j$-th shifted coordinate is $\lambda_{A,j}+\rho_j=a_j+(n-1)/2$, so the shifted-coordinate multiset differs from the entry multiset by the common scalar $(n-1)/2$; by [F2] this multiset together with the trace-centre scalar determines the central character, with no undeclared full-staircase shift. [F1, F2, algebra]

2.1 **The block and its labels.** Fix an admitted entry multiset $\alpha$; its shifted-coordinate multiset gives one central character, and the simple modules $L(A)$ of that central character form exactly the labels $\mathrm{Col}^\Lambda_\alpha$ with $\mathrm{wt}(A)=\Lambda-\alpha$. The induced modules $M(A)$ are the generalized standards of the block, the projectives $P(A)$ and costandards $\nabla(A)$ exist by [F1], and BGG reciprocity and restricted duality hold blockwise because they are inherited from the ambient parabolic category. [F1, step 1.1]

3.1 **Filtered and Grothendieck structure.** By [F1] every object of the block has finite length with simple factors among the $L(A)$, and the projective covers have finite $M(A)$-flags; the simple and standard classes are bases of the block Grothendieck group with the stated unitriangular character matrix. By [F3] the block is a single linkage block, so all its labels are connected by actual indecomposable-tilting edges, including repeated-entry singular central characters; the direct sum over the admitted multisets is $\mathcal O^\Lambda$. [F1, F3, F5, step 2.1]

4.1 **Opposite blocks.** Reversing the Levi order and reading tableaux by columns in the reverse direction swaps the blocks and reverses the prefix order of the labels; by [F4] the reversed labels are the same tableaux with reversed column readings, and the corresponding central characters are the reversed-coordinate multisets. This is the opposite-block dictionary. [F3, F4, step 3.1] ∎
