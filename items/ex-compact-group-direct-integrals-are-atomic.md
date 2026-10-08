---
id: ex-compact-group-direct-integrals-are-atomic
kind: example
title: "Canonical compact-group decompositions are atomic Hilbert sums"
status: published
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
deps:
  - cor-compact-groups-are-type-i-and-direct-integrals-collapse-to-discrete-sums
  - def-unitary-dual-of-a-compact-group
  - thm-regular-representation-peter-weyl-decomposition
  - thm-l-p-of-a-sigma-finite-countably-generated-measure-space-is-separable
  - def-axiom-of-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - def-measurable-hilbert-field-from-a-countable-fundamental-family
  - def-direct-integral-of-a-measurable-hilbert-field
  - def-direct-integral-of-unitary-representations
  - def-hilbert-direct-sum-of-unitary-representations
dependency_level: 4
axiom_use: "Assume AC, including the stated choice assumptions of the suppliers. It permits representatives, transversals and orthonormal bases; AC implies Countable Choice for Hilbert and Fourier/L2 suppliers. Countability arguments are proved locally rather than assumed."
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Bachir Bekka and Pierre de la Harpe, Unitary Representations of Groups, Duals, and Characters (arXiv:1912.07262v1)"
      url: "https://arxiv.org/pdf/1912.07262"
      locator: "Example 1.G.1(1) and compact-group discussion, printed p.59."
verification:
  audited: "2026-10-08"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Example

Assume the Axiom of Choice. Let $K$ be a second-countable compact group with normalized Haar measure and let $(\pi,H)$ be a strongly continuous unitary representation on a separable complex Hilbert space. Its canonical isotypic decomposition is
$$\pi\cong\bigoplus_{\alpha\in I}m_\alpha\pi_\alpha,$$
with $I\subseteq\widehat K$ at most countable, $\pi_\alpha$ finite dimensional and $m_\alpha\in\{1,2,\ldots,\infty\}$. In fact $\widehat K$ is countable. Give it its discrete sigma-algebra and counting measure, and put $H_\alpha=\mathbb C^{m_\alpha}\otimes V_\alpha$ for occurring classes, where $\mathbb C^\infty$ means $\ell^2(\mathbb N)$, and $H_\alpha=0$ for the others. This measurable field realizes $\pi$ as the atomic direct integral of $m_\alpha\pi_\alpha$ over the full dual. Its Hilbert space is the completed square-summable orthogonal sum. For the left regular representation $m_\alpha=\dim V_\alpha$.

## Facts & Assumptions

[F1] The compact corollary supplies the canonical countable isotypic Hilbert decomposition and its regular multiplicities ([[cor-compact-groups-are-type-i-and-direct-integrals-collapse-to-discrete-sums]]).

[F2] The compact dual is the set of finite-dimensional irreducible classes, and Peter--Weyl assigns every class a nonzero coefficient block in $L^2(K)$; distinct blocks are orthogonal ([[def-unitary-dual-of-a-compact-group]], [[thm-regular-representation-peter-weyl-decomposition]]).

[F3] A sigma-finite countably generated measure space has separable real $L^2$ under Countable Choice ([[thm-l-p-of-a-sigma-finite-countably-generated-measure-space-is-separable]]). AC implies Countable Choice ([[def-axiom-of-choice]], [[thm-choice-implies-dependent-implies-countable-choice]]).

[F4] A countable fundamental family defines a measurable Hilbert field, and its direct integral consists of measurable sections with integrable squared norm, modulo Borel null sets. A measurable field of unitary representations acts fibrewise ([[def-measurable-hilbert-field-from-a-countable-fundamental-family]], [[def-direct-integral-of-a-measurable-hilbert-field]], [[def-direct-integral-of-unitary-representations]]). The Hilbert direct sum uses square-summable components ([[def-hilbert-direct-sum-of-unitary-representations]]).

## Verification

**Given:** AC, $K$, normalized Haar measure, and $(\pi,H)$ as in the Example.

1.1 A countable open base generates the Borel sigma-algebra of $K$, and normalized Haar measure is finite. By [F3] real $L^2(K)$ has a countable dense subset $D$; the set $D+iD$ is countable and dense in complex $L^2(K)$, since real and imaginary parts can be approximated separately. Choose a unit vector in each nonzero Peter--Weyl coefficient block [F2]. These vectors are orthogonal, so pairwise disjoint balls of radius $1/3$ each meet a countable dense set. Assigning the first dense point in each ball proves that $\widehat K$ is at most countable. [F2, F3, choose]

2.1 Use [F1] to choose the representatives and multiplicity spaces stated above. The countable dual with discrete metric is complete and separable, hence standard Borel, and its counting measure is sigma-finite. Choose an orthonormal basis in each nonzero separable fibre and enumerate all pairs consisting of an atom and a basis vector. The section associated with a pair equals that vector at its atom and zero elsewhere. Their Gram coefficients are measurable and their values span densely at each atom, so they form a countable fundamental family in [F4]; if all fibres are zero, use a sequence of zero sections. Every section is measurable because every scalar function on a countable discrete space is measurable. For fixed $k\in K$, all matrix coefficients of the fibre action are likewise measurable. [F1, F4, step 1.1, construct]

3.1 Counting integration gives $\|\xi\|^2=\sum_{\alpha\in\widehat K}\|\xi(\alpha)\|^2$, and its only null subset is empty. Thus the direct integral is exactly the completed Hilbert direct sum, with precisely the isotypic action of [F1]. This action is strongly continuous: approximate a vector by its finitely many nonzero coordinates, use continuity on those coordinates, and bound the remaining displacement by twice the tail norm. The regular multiplicity assertion follows from [F1], including its conjugate-class reindexing convention. [F1, F4, step 2.1] ∎

## Remarks

The full-dual counting presentation is redundant at classes outside $I$: these are positive-measure atoms with zero Hilbert fibre. The canonical effective measure class is supported on the occurring set $I$; equivalently give zero measure to $\widehat K\setminus I$, or discard those zero-carrier atoms, before applying uniqueness results requiring nonzero fibres.

“Atomic” describes the effective canonical isotypic model. It does not force an original redundant parameter measure to be atomic: the constant trivial one-dimensional representation over a nonatomic probability interval integrates to the trivial representation on $L^2([0,1])$, a countably infinite multiple of the trivial irreducible. Nor is a countable Hilbert sum merely its algebraic finite-support subspace.
