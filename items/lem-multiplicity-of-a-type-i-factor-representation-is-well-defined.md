---
id: lem-multiplicity-of-a-type-i-factor-representation-is-well-defined
kind: lemma
title: Irreducible class and multiplicity of a type I factor representation are well defined
deps:
- lem-separable-type-i-factors-are-multiples-of-irreducible-representations
- def-type-i-factor-representation-and-type-i-group
- thm-schurs-lemma-for-unitary-representations
- def-hilbert-direct-sum-of-unitary-representations
- def-axiom-of-choice
dependency_level: 3
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: Bachir Bekka and Pierre de la Harpe, Unitary Representations of Groups, Duals, and Characters (arXiv:1912.07262v1, 16 December 2019; author-hosted complete book draft)
    url: https://arxiv.org/pdf/1912.07262
    locator: 'Chapter 6, §6.B: Corollary 6.B.7, Proposition 6.B.14 and Theorem 6.B.15 (quasi-equivalence class of a factor representation), printed pp. 183-188'
  - title: 'Bruce Blackadar, Operator Algebras: Theory of C*-Algebras and von Neumann Algebras (author-hosted complete text)'
    url: https://bruceblackadar.com/Mathematics/Cycr.pdf
    locator: 'Part III, §1.5: III.1.5.1-III.1.5.5 (matrix units and uniqueness of the type I factor structure), printed pp. 247-248 (PDF pp. 255-256)'
status: draft
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
proof_strategy: direct
axiom_use: 'AC is inherited from the type-I spatial and direct-sum suppliers; locally only a nonzero block and one unit vector are chosen. Nonzero carriers and positive multiplicities are essential: a zero amplification would not determine an irreducible class. Finite and countably infinite multiplicities are both covered.'
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Statement

Assume the Axiom of Choice. Let $G$ be a topological group, let $\sigma,\sigma'$ be irreducible strongly continuous unitary representations on nonzero separable Hilbert spaces $K,K'$, and let $m,m'\in\{1,2,\dots,\infty\}$. If $\sigma^{\oplus m}\cong(\sigma')^{\oplus m'}$, then $\sigma\cong\sigma'$ and $m=m'$. Consequently, if $\pi$ is a factor representation of $G$ whose generated von Neumann algebra is a type I factor, then the irreducible representation $\sigma$ and the multiplicity $m$ in any decomposition $\pi\cong\sigma^{\oplus m}$ are determined up to unitary equivalence by $\pi$ alone.

## Facts & Assumptions

[F1] A nonzero separable type-I factor representation is a multiple of an irreducible strongly continuous unitary representation; its commutant in the amplification model is the full bounded-operator algebra on the multiplicity space ([[lem-separable-type-i-factors-are-multiples-of-irreducible-representations]], [[def-type-i-factor-representation-and-type-i-group]]).

[F2] An operator commuting with an irreducible unitary representation is scalar. An intertwiner between two irreducible unitary representations is either zero or a scalar multiple of a unitary equivalence: its adjoint products are commuting positive scalars, so any nonzero intertwiner has a scalar unitary normalization ([[thm-schurs-lemma-for-unitary-representations]]).

[F3] The countable Hilbert direct sum has coordinate inclusions and projections and finite-coordinate vectors are dense ([[def-hilbert-direct-sum-of-unitary-representations]]). AC has the meaning of [[def-axiom-of-choice]].

## Proof

**Proof technique:** direct.

**Given:** The hypotheses and notation of the Statement, including AC.

1.1 Let $T:K^{\oplus m}\to(K')^{\oplus m'}$ be a unitary equivalence. Its coordinate blocks $T_{ji}:K\to K'$ intertwine $\sigma$ and $\sigma'$. Some block is nonzero: otherwise $T$ vanishes on every coordinate inclusion and hence on the dense finite-coordinate vectors, contradicting unitarity on the nonzero domain. Fix such a block $A$. By [F2], $A^*A=aI_K$ and $AA^*=bI_{K'}$, where $a,b>0$; $AA^*A=bA=aA$ gives $a=b$, so $S=a^{-1/2}A$ is a unitary equivalence $K\to K'$. [F2, F3, given, construct]

2.1 Apply $S^{-1}$ in each target coordinate to obtain a unitary $R:K^{\oplus m}\to K^{\oplus m'}$ intertwining the two amplifications of $\sigma$. Every block of $R$ is $v_{ji}I_K$ by [F2]. Fix a unit $\eta\in K$. On finite-coordinate scalar vectors $z$, the norm identity for $R(z_i\eta)_i$ gives $\sum_j|\sum_i v_{ji}z_i|^2=\sum_i|z_i|^2$. Thus the scalar matrix defines an isometry $v:\ell^2(m)\to\ell^2(m')$. The same block argument for $R^*$ gives its adjoint matrix, and $R^*R=I$, $RR^*=I$ imply $v^*v=I$, $vv^*=I$ by testing these vectors; hence $v$ is onto. A unitary preserves dimension: finite dimensions agree by linear independence of bases; finite versus infinite is impossible because the infinite space has arbitrarily large independent coordinate sets. The only remaining case is both countably infinite. Therefore $m=m'$. Existence from [F1] and this uniqueness prove the consequence. [F1, F2, F3, step 1.1, algebra] ∎

## Boundary and source qualifications

AC is inherited from the type-I spatial and direct-sum suppliers; locally only a nonzero block and one unit vector are chosen. Nonzero carriers and positive multiplicities are essential: a zero amplification would not determine an irreducible class. Finite and countably infinite multiplicities are both covered. No source citation replaces a local supplier proof. The referenced complete Bekka–de la Harpe PDF, pp. 195–202, and Blackadar PDF pp. 255–262 were consulted for the central/type-I architecture; Blackadar explicitly outlines the direct-integral theory and refers technical details elsewhere. The measurable and spatial steps here use the proved local suppliers named above.
