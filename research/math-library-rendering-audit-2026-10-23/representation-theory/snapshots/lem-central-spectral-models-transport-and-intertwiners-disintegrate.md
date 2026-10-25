---
id: lem-central-spectral-models-transport-and-intertwiners-disintegrate
kind: lemma
title: Transport of central models and disintegration of intertwiners
deps:
- lem-two-common-diagonalizations-are-related-by-a-base-isomorphism-and-a-measurable-field-of-unitaries
- thm-central-decomposition-into-factor-representations
- lem-separable-group-c-star-representations-disintegrate-over-a-commuting-diagonal-algebra
- lem-direct-integrals-transport-along-bimeasurable-base-isomorphisms
- thm-decomposable-operators-are-the-commutant-of-diagonal-multiplication
- def-standard-borel-space
- def-axiom-of-choice
dependency_level: 5
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: Bachir Bekka and Pierre de la Harpe, Unitary Representations of Groups, Duals, and Characters (arXiv:1912.07262v1, 16 December 2019; author-hosted complete book draft)
    url: https://arxiv.org/pdf/1912.07262
    locator: 'Chapter 6, §6.C: Theorem 6.C.8 and the uniqueness assertion following it (equivalence of the measures and of the fibre representations after null-set modification), printed pp. 197-198'
  - title: 'Bruce Blackadar, Operator Algebras: Theory of C*-Algebras and von Neumann Algebras (author-hosted complete text)'
    url: https://bruceblackadar.com/Mathematics/Cycr.pdf
    locator: 'Part III, §1.6: III.1.6.4-III.1.6.5 (transport and uniqueness of central decompositions), printed pp. 254-255'
status: published
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
proof_strategy: direct
axiom_use: AC is inherited from central decomposition and spatialization and supplies the countable dense choice used in the common-null-set argument. Discarding zero fibre strata is permitted by the definition of central decomposition; null total spaces use empty conull bases. The group is second countable, and strong continuity is essential for extending from the countable dense set. The Radon–Nikodym weight affects norms and measure normalization but cancels from intertwining because it is scalar.
verification:
  audited: "2026-10-08"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Statement

Assume the Axiom of Choice. Let $G$ be a second-countable locally compact group and $(\pi,H)$ a separable strongly continuous unitary representation with two central decompositions $U:H\to\int_X^\oplus H_x\,d\mu(x)$, $\pi\cong\int^\oplus\pi_x\,d\mu$, and $V:H\to\int_Y^\oplus K_y\,d\nu(y)$, $\pi\cong\int^\oplus\sigma_y\,d\nu$, in the sense of [[thm-central-decomposition-into-factor-representations]]. Then there exist conull Borel sets $X_0\subseteq X$, $Y_0\subseteq Y$, a bimeasurable bijection $c:X_0\to Y_0$ with $c_*(\mu|_{X_0})$ equivalent to $\nu|_{Y_0}$, and a field of unitaries $u_x:H_x\to K_{c(x)}$ that is measurable over $X_0$ and satisfies $$u_x\pi_x(g)u_x^{-1}=\sigma_{c(x)}(g)\qquad\text{for every }g\in G\text{ and }\mu\text{-almost every }x\in X_0.$$ Consequently the two central decompositions determine the same base modulo null sets and null-set modification, and the fibre representations are unitarily equivalent almost everywhere through a measurable field.

## Facts & Assumptions

[F1] Central decompositions identify the centre with the full scalar diagonal algebra and have nonzero fibres after removing null zero strata ([[thm-central-decomposition-into-factor-representations]]).

[F2] A unitary conjugating the full scalar diagonal algebras of nonzero standard-Borel sigma-finite fields is implemented by a conull bimeasurable base bijection and a measurable fibre-unitary field, with pushforward measure equivalent to the target measure and square-root Radon–Nikodym normalization ([[lem-two-common-diagonalizations-are-related-by-a-base-isomorphism-and-a-measurable-field-of-unitaries]], [[lem-direct-integrals-transport-along-bimeasurable-base-isomorphisms]]).

[F3] Decomposable representatives are unique almost everywhere; on one base scalar-commuting bounded operators are decomposable ([[thm-decomposable-operators-are-the-commutant-of-diagonal-multiplication]]). Representation fibres are strongly continuous ([[lem-separable-group-c-star-representations-disintegrate-over-a-commuting-diagonal-algebra]]). The base and choice conventions are [[def-standard-borel-space]], [[def-axiom-of-choice]].

## Proof

**Proof technique:** direct.

**Given:** The hypotheses and notation of the Statement, including AC.

1.1 Write $\Pi_X(g)=U\pi(g)U^{-1}$ and $\Pi_Y(g)=V\pi(g)V^{-1}$. The unitary $W=VU^{-1}$ satisfies $W\mathcal D_XW^{-1}=\mathcal D_Y$ by [F1]. Apply [F2] to obtain $X_0,Y_0,c,u_x$ and the normalized formula $(J^{-1}W\xi)_{c(x)}=u_x\xi_x$, where $J$ multiplies by the square root of $d(c_*\mu)/d\nu$. This normalization commutes with every fibre representation operator because it is scalar. [F1, F2, given, construct]

2.1 For every fixed $g$, $W\Pi_X(g)=\Pi_Y(g)W$. Using the formula of step 1.1, transport to one base and cancel $J$; [F3] gives $u_x\pi_x(g)=\sigma_{c(x)}(g)u_x$ almost everywhere. Choose a countable dense subset $S$ of $G$ and remove the union of these null sets for $g\in S$. At each remaining $x$, both orbit maps are continuous, so equality on $S$ extends to every $g\in G$ by density. The fibre equivalence therefore holds on a single conull set for the whole group. The bimeasurable bijection and measure equivalence from [F2] identify the two bases modulo null sets as asserted. [F2, F3, step 1.1, algebra] ∎

## Boundary and source qualifications

AC is inherited from central decomposition and spatialization and supplies the countable dense choice used in the common-null-set argument. Discarding zero fibre strata is permitted by the definition of central decomposition; null total spaces use empty conull bases. The group is second countable, and strong continuity is essential for extending from the countable dense set. The Radon–Nikodym weight affects norms and measure normalization but cancels from intertwining because it is scalar. No source citation replaces a local supplier proof. The referenced complete Bekka–de la Harpe PDF, pp. 195–202, and Blackadar PDF pp. 255–262 were consulted for the central/type-I architecture; Blackadar explicitly outlines the direct-integral theory and refers technical details elsewhere. The measurable and spatial steps here use the proved local suppliers named above.
