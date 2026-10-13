---
id: lem-projective-verma-multiplicities-equal-soergel-standard-ranks
kind: lemma
title: "Projective Verma multiplicities equal Soergel standard ranks"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-regular-integral-dot-orbit-labelling-convention, prop-verma-flag-multiplicities-are-standard-filtration-ranks-under-v, thm-indecomposable-projectives-correspond-to-indecomposable-soergel-modules, def-verma-flag-and-its-multiplicities, prop-projective-covers-in-o-are-indecomposable-and-unique, lem-finite-length-objects-decompose-into-indecomposables, def-axiom-of-choice]
justified_by: []
aliases: []
landmark: false
dependency_level: 14
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Wolfgang Soergel, Kategorie O, perverse Garben und Moduln ueber den Koinvarianten zur Weylgruppe, J. Amer. Math. Soc. 3 (1990) 421-445 (MPIM preprint 1989/46, complete German text)"
      url: "https://archive.mpim-bonn.mpg.de/3653/1/preprint_1989_46.pdf"
      locator: "Sections 1.1-1.2 (printed pp. 2-6) and Section 2.5 (printed p. 18, Theorem 11): V P(x^{-1}.lambda) = D_x, the projective dictionary and the reduction convention; complete passages read."
    - title: "Lin Chen, lecture notes (Spring 2024), Lecture 8: Hecke algebras and the Kazhdan-Lusztig conjecture (complete 10-page lecture)"
      url: "https://windshower.github.io/linchen/teaching/s2024/lecture8.pdf"
      locator: "Section 4 (printed pp. 7-9): Hom_O(P_lambda, M) = [M:L_lambda], enough projectives and uniqueness of projective covers, used to identify the indecomposable summands; complete section read."
---

## Statement

Assume the Axiom of Choice. Let $\mathcal O_\lambda$ be a regular integral
type-$A$ block with $W=S_n$, and for $w\in W$ let $B_{w^{-1}}$ be the polynomial
Soergel lift of $V(P(w\cdot\lambda))$, so that
$V(P(w\cdot\lambda))=\bar B_{w^{-1}}$ is its right reduction. Write
$r_{x,d}(B)$ for the graded multiplicity of the polynomial standard graph
module supported at $x$ in the standard support filtration of a polynomial
Soergel bimodule $B$, in the standard-generator normalization of the polynomial
Soergel category. Then for all $y,w\in W$
$$(P(w\cdot\lambda):\Delta(y\cdot\lambda))=\sum_d r_{y^{-1},d}(B_{w^{-1}}).$$
These are ranks before reduction: the right side sums the graded standard
support multiplicities of the polynomial lift, not multiplicities in any
separated filtration of the finite-dimensional module $V(P(w\cdot\lambda))$.

## Facts & Assumptions

**Given:** The Axiom of Choice (inherited from the block and projective theory cited below), a regular integral type-$A$ block $\mathcal O_\lambda$ with $W=S_n$, and labels $y,w\in W$.

[F1] Block and dictionary conventions ([[def-regular-integral-dot-orbit-labelling-convention]]): $P(w\cdot\lambda)$ are the indecomposable projectives, $V(P(w\cdot\lambda))=\bar B_{w^{-1}}$ holds with $B_{w^{-1}}$ the polynomial lift, standard support at $x$ corresponds to $\Delta(x^{-1}\cdot\lambda)$, and $(P:\Delta)$ is the Verma-flag multiplicity.

[F2] Projective dictionary ([[thm-indecomposable-projectives-correspond-to-indecomposable-soergel-modules]]): $V$ is an equivalence from ${\operatorname{Proj}}(\mathcal O_\lambda)$ onto the ungraded Soergel modules, with $P(w\cdot\lambda)\mapsto\bar B_{w^{-1}}$; the inverse-label assignment is a bijection on isomorphism classes.

[F3] General rank comparison ([[prop-verma-flag-multiplicities-are-standard-filtration-ranks-under-v]]): for a projective $P$ with polynomial lift $\mathsf B(P)=\bigoplus_w B_{w^{-1}}^{m_w}$ built from a decomposition $P=\bigoplus_w P(w\cdot\lambda)^{m_w}$, one has $(P:\Delta(y\cdot\lambda))=\sum_d r_{y^{-1},d}(\mathsf B(P))$; these are ranks before reduction.

[F4] Projective covers ([[prop-projective-covers-in-o-are-indecomposable-and-unique]]): $P(w\cdot\lambda)$ is a projective cover of $L(w\cdot\lambda)$ and is indecomposable; any two projective covers of the same simple are isomorphic.

[F5] Krull–Schmidt ([[lem-finite-length-objects-decompose-into-indecomposables]]): every object of $\mathcal O_\lambda$ is a finite direct sum of nonzero indecomposable objects, and the decomposition is unique up to isomorphism and permutation of the summands.

[F6] Verma-flag multiplicities ([[def-verma-flag-and-its-multiplicities]]): $(X:\Delta(\mu))$ is well defined for Verma-filtered $X$, independent of the flag, and additive over the factors of any flag.

## Proof

**Proof technique:** direct.

1.1 The object $P:=P(w\cdot\lambda)$ is a nonzero indecomposable projective of $\mathcal O_\lambda$, namely a projective cover of the simple $L(w\cdot\lambda)$, and by the projective dictionary [F2] its Soergel value is $V(P)=\bar B_{w^{-1}}$, the right reduction of the single polynomial lift $B_{w^{-1}}$. [F1, F2, F4]

1.2 Every decomposition of $P$ into indecomposables is a one-summand decomposition. Indeed, by [F5] a decomposition $P\cong\bigoplus_v P(v\cdot\lambda)^{m_v}$ exists and any two such decompositions agree up to isomorphism and permutation of summands; since the nonzero object $P$ is an indecomposable projective cover by [F4], only one summand can be present, so the decomposition is $P\cong P(v\cdot\lambda)$ for a single label $v$. Applying the equivalence $V$ of [F2] to this isomorphism gives $\bar B_{w^{-1}}\cong\bar B_{v^{-1}}$; as $V$ is a bijection on isomorphism classes of indecomposables, $v=w$. Hence in the dictionary of [F3] the polynomial lift assigned to $P$ is the single term $\mathsf B(P)=B_{w^{-1}}$, with no further summands. [F2, F3, F4, F5]

2.1 Substitute $\mathsf B(P)=B_{w^{-1}}$ from step 1.2 into the general rank comparison [F3] applied to the projective $P=P(w\cdot\lambda)$: its left side is the Verma-flag multiplicity $(P(w\cdot\lambda):\Delta(y\cdot\lambda))$ of [F1] and [F6], and its right side is $\sum_d r_{y^{-1},d}(B_{w^{-1}})$, the sum of the graded standard-support multiplicities of the polynomial lift $B_{w^{-1}}$. This is the displayed identity for all $y,w\in W$. The ranks on the right are pre-reduction ranks of the polynomial lift, by the final clause of [F3] and by the reduction convention [F2]; no separated filtration of $V(P(w\cdot\lambda))$ is produced or used. [F1, F2, F3, F6, step 1.2] ∎
