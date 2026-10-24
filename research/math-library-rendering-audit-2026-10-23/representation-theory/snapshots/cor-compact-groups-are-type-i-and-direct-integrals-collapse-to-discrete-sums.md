---
id: cor-compact-groups-are-type-i-and-direct-integrals-collapse-to-discrete-sums
kind: corollary
title: "Compact groups are type I and their direct integrals collapse to discrete Hilbert sums"
status: published
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
deps:
  - thm-arbitrary-unitary-representations-of-compact-groups-decompose-discretely
  - def-unitary-dual-of-a-compact-group
  - def-hilbert-direct-sum-of-unitary-representations
  - thm-schurs-lemma-for-unitary-representations
  - def-von-neumann-algebra-and-commutant
  - thm-double-commutant-theorem-for-concrete-von-neumann-algebras
  - def-factor-representation-and-primary-representation
  - lem-separable-type-i-factors-are-multiples-of-irreducible-representations
  - def-type-i-factor-representation-and-type-i-group
  - thm-regular-representation-peter-weyl-decomposition
  - def-separable-space
  - def-axiom-of-choice
dependency_level: 3
axiom_use: "Assume AC, including the stated choice assumptions of the suppliers. It permits representatives, transversals and orthonormal bases; AC implies Countable Choice for Hilbert and Fourier/L2 suppliers. Countability arguments are proved locally rather than assumed."
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Bachir Bekka and Pierre de la Harpe, Unitary Representations of Groups, Duals, and Characters (arXiv:1912.07262v1)"
      url: "https://arxiv.org/pdf/1912.07262"
      locator: "Chapter 1, \u00a71.G, printed p.59; Remark 6.A.13(3), printed p.179; Proposition 6.B.14, printed pp.186\u2013187."
verification:
  audited: "2026-10-08"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Statement

Assume the Axiom of Choice. Let $K$ be a compact second-countable group. Every nonzero factor representation of $K$ on a separable complex Hilbert space is a multiple of one finite-dimensional irreducible representation; consequently $K$ is type I. Every strongly continuous unitary representation $(\pi,H)$ on a separable complex Hilbert space has the canonical isotypic decomposition
$$\pi\cong\bigoplus_{\alpha\in I}m_\alpha\pi_\alpha,\qquad m_\alpha\in\{1,2,\ldots,\infty\},$$
where $I\subseteq\widehat K$ is at most countable, the representatives $\pi_\alpha$ are finite dimensional, and $\infty$ denotes countably infinite multiplicity. The sum is the completed orthogonal Hilbert sum, with $I=\varnothing$ allowed when $H=0$. In the left regular representation the multiplicity of each irreducible is its dimension. Thus compact-group representations admit atomic direct-integral models; this concerns the canonical isotypic decomposition, not the atomicity of every redundant parameter measure.

## Facts & Assumptions

[F1] Under AC, every strongly continuous compact-group representation is an orthogonal Hilbert sum of finite-dimensional irreducible copies; its isotypic subspace $H_\alpha$ is the closed span of all copies of class $\alpha$ ([[thm-arbitrary-unitary-representations-of-compact-groups-decompose-discretely]], [[def-unitary-dual-of-a-compact-group]], [[def-hilbert-direct-sum-of-unitary-representations]]).

[F2] A bounded intertwiner between inequivalent irreducible unitary representations is zero, and the commutant of an irreducible representation is scalar ([[thm-schurs-lemma-for-unitary-representations]]).

[F3] The generated von Neumann algebra is $\pi(K)''$; its centre consists of operators in both $\pi(K)''$ and $\pi(K)'$ ([[def-von-neumann-algebra-and-commutant]], [[thm-double-commutant-theorem-for-concrete-von-neumann-algebras]]). A factor has scalar centre ([[def-factor-representation-and-primary-representation]]).

[F4] A separable factor representation is type I exactly when it is a multiple of an irreducible representation; a type I group has this property for every separable factor representation ([[lem-separable-type-i-factors-are-multiples-of-irreducible-representations]], [[def-type-i-factor-representation-and-type-i-group]]).

[F5] Peter--Weyl gives the left regular representation as the sum of $\dim\pi_\alpha$ copies of each irreducible; its left coefficient-block convention first gives the conjugate class, and reindexing by conjugation gives the displayed multiplicities ([[thm-regular-representation-peter-weyl-decomposition]]).

[F6] A separable space has a countable dense subset. AC permits the choices of irreducible copies, representatives and unit vectors used below ([[def-separable-space]], [[def-axiom-of-choice]]).

## Proof

**Given:** AC, $K$, and $(\pi,H)$ as in the Statement.

1.1 Apply [F1] to express $H$ as an orthogonal Hilbert sum of nonzero finite-dimensional irreducible copies. Choose a unit vector in each copy. Distinct chosen vectors have distance $\sqrt2$, so the open balls of radius $1/3$ about them are pairwise disjoint. A countable dense subset of $H$ meets each ball; assigning its first point in each ball injects the copies into $\mathbb N$. Thus there are at most countably many copies, hence at most countably many occurring classes and each multiplicity is finite positive or countably infinite. Grouping equal classes in the Hilbert sum gives the displayed decomposition with canonical isotypic subspaces. For $H=0$ take the empty sum. [F1, F6, choose]

2.1 Let $P_\alpha$ be the orthogonal projection onto $H_\alpha$. This subspace reduces $\pi(K)$, so $P_\alpha\in\pi(K)'$. If $T\in\pi(K)'$ and $V$ is an irreducible copy of class $\alpha$, the map $T|_V$ intertwines. By [F2], $(T|_V)^*(T|_V)$ is a nonnegative scalar on $V$; if that scalar is zero its image is zero, and otherwise its image is a closed irreducible copy of the same class. Hence $T(V)\subseteq H_\alpha$, and boundedness gives $T(H_\alpha)\subseteq H_\alpha$. The same holds for $T^*\in\pi(K)'$, so $H_\alpha$ reduces $T$ and $P_\alpha T=TP_\alpha$. Consequently $P_\alpha\in\pi(K)''\cap\pi(K)'$, the centre in [F3]. [F1, F2, F3, step 1.1]

3.1 If $\pi$ is a nonzero factor representation, each nonzero $P_\alpha$ is a scalar projection, hence equals $I$. Orthogonality makes exactly one class occur. Therefore $\pi$ is a multiple of that finite-dimensional irreducible, and [F4] makes it type I; this holds for every separable factor representation, so $K$ is type I. The regular multiplicities are [F5]. The countable isotypic Hilbert sum itself is an atomic counting-measure integral: square-integrability is exactly square-summability of its components. This proves all claims without imposing atomicity on an initially supplied parameter space. [F4, F5, step 1.1, step 2.1] ∎
