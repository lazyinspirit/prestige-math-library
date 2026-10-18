---
id: lem-cherednik-nilpotent-induced-connections-have-moderate-growth
kind: lemma
title: "Nilpotent induced Cherednik connections have uniform moderate growth on generic lines"
status: draft
dependency_level: 12
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps:
  - def-rational-cherednik-category-o
  - thm-rational-cherednik-pbw-theorem
  - lem-rational-cherednik-dunkl-localization-and-flat-connection
  - lem-rational-cherednik-standard-module-local-connection-residue
  - thm-gronwall-integral-inequality
  - lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Ginzburg, Guay, Opdam and Rouquier, On the category O for rational Cherednik algebras"
      url: "https://arxiv.org/pdf/math/0212036"
      locator: "Sections 5.1–5.4, especially Proposition 5.7 and Theorems 5.13–5.15; elementary analytic details supplied locally."
---

## Statement

For $M\in\mathcal O_c(W,\mathfrak h)$ there is a surjection $U=H_{1,c}\otimes_{S(\mathfrak h)\rtimes W}X\twoheadrightarrow M$ with $X$ a finite-dimensional $S(\mathfrak h)\rtimes W$-module killed by a power of the augmentation ideal of $S(\mathfrak h)$. Under PBW, $U=P\otimes X$. On generic affine coordinate lines its localized connection, and the duals and finite exterior powers of its localized quotients, have horizontal sections of at most power growth at every finite puncture and at infinity on bounded-angle sectors. In fixed rational frames, the exponents and number of punctures are bounded independently of the generic line. Constants and radii may depend on the line. No logarithmic trivialization of the whole induced connection at infinity is asserted.

## Facts & Assumptions

**Given:** The data and hypotheses in the Statement.

[F1] [[def-rational-cherednik-category-o]] and [[thm-rational-cherednik-pbw-theorem]]: $M$ is finite over $P=\mathbb C[\mathfrak h^*]$; the commuting $y$ act locally nilpotently; induced modules have vector space $P\otimes X$.

[F2] [[lem-rational-cherednik-standard-module-local-connection-residue]] proves the polynomial commutator identity and cancellation of the Dunkl correction. The same calculation permits a nonzero inducing $y$-action.

[F3] [[lem-rational-cherednik-dunkl-localization-and-flat-connection]] supplies exact localization, finite locally free localized modules and integrable connections. Its local-freeness proof applies to any finite module with a connection over the localized polynomial ring.

[F4] [[lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval]] and [[thm-gronwall-integral-inequality]] give existence, uniqueness and norm bounds along compact real paths; complex systems are real systems on twice as many coordinates.

## Proof

**Proof technique:** direct.

**Given:** The stated data and Facts.

1.1 Take polynomial generators of $M$, all their finite $W$-orbits, and the $y$-monomials applied to these vectors. For a finite list there is a common upper bound on the exponent of every commuting $y_i$ that kills each vector; hence their span $X$ is finite dimensional, $W$-stable and $y$-stable. All sufficiently high total-degree $y$-monomials vanish on $X$. Induction gives $P\otimes X\twoheadrightarrow M$. The commutator calculation [F2], now retaining $y v$, gives $\partial_y(f\otimes v)=\partial_yf\otimes v+f\otimes yv+\sum_s c_s\alpha_s(y)\alpha_s^{-1}f\otimes(1-s)v$. [F1, F2, construct, algebra]

2.1 Filter $X$ by the annihilators of powers of the augmentation ideal. This is a finite $W$-stable filtration, every $y$ lowers it, and the group-algebra residues preserve it. On a generic affine line $a+tb$, the induced connection is block triangular. At a finite reflecting puncture all blocks have poles of order at most one. At infinity $z=1/t$, the diagonal blocks have poles of order at most one, with constant residues given by the sum of the reflecting residues; the off-diagonal constant-$y$ terms have poles of order at most two. The number of blocks, their pole orders and the norms of the diagonal residues are bounded uniformly in the generic line; excluding lines contained in a hyperplane or with coincident finite punctures is algebraic. [step 1.1, algebra]

3.1 For a diagonal block with coefficient bounded by $C/|z|$, solve along a bounded-angle sector, first around a fixed circle and then radially. [F4] gives a bound $C'|z|^{-N}$ for a fundamental matrix and its inverse, with an integer $N>C$; the finite angular segment changes only $C'$. For a block triangular system use variation of constants: an off-diagonal block is a diagonal fundamental matrix times an integral involving previously bounded blocks and a coefficient with pole order at most two. Integrating a power bound adds a finite inverse power; a logarithmic factor is bounded by one extra inverse power. Induction over the finitely many block distances gives power bounds for both the fundamental matrix and its inverse. The exponents depend only on the uniform residue bound, pole orders and block number. Exterior powers multiply finitely many entries; duals use the inverse matrix. Thus they retain uniform power bounds. [F4, step 2.1, induction, algebra]

4.1 Let $V$ be a localized quotient of $U$. Every horizontal section of $V$ lifts locally to one of $U$ by lifting its initial value and using uniqueness in [F4]; the dual embeds into $U^*$. Choose a rational frame of $V$ from a nonzero maximal minor of its polynomial generating matrix. In these frames the quotient map and a left inverse of its dual embedding have rational entries. Their finite pole orders and degrees give uniform bounds after restriction to generic lines. Therefore both horizontal sections and dual horizontal sections of $V$ have power bounds. There are only finitely many extra punctures from these fixed rational denominators; their number and orders are uniformly bounded. The same argument for exterior powers proves the full assertion. [F3, F4, step 1.1, step 3.1, choose, algebra] ∎
