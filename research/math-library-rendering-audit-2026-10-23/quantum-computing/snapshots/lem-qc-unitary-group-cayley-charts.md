---
id: lem-qc-unitary-group-cayley-charts
kind: lemma
title: Cayley Charts on the Unitary Matrix Group
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 0
deps:
  - thm-heine-borel-rn
  - def-smooth-manifold
  - def-riemannian-metric-and-riemannian-manifold
  - def-riemannian-volume-density
  - lem-the-riemannian-volume-density-is-coordinate-independent
  - thm-a-positive-smooth-density-defines-a-locally-finite-radon-measure
  - prop-riemannian-volume-is-the-radon-measure-of-the-riemannian-density
  - def-countable-choice
  - lem-axiom-of-choice-implies-countable-choice
  - cor-normalized-haar-probability-on-a-compact-group
  - def-axiom-of-choice
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification: {}
axiom_use: "Assume AC_omega for the Radon volume measure; assume full AC only for the optional identification with normalized Haar probability."
sources:
  references:
    - title: "Vivek V. Shende, Igor L. Markov, and Stephen S. Bullock, Minimal Universal Two-Qubit CNOT-Based Circuits, arXiv:quant-ph/0308033v3"
      url: "https://arxiv.org/pdf/quant-ph/0308033"
---

## Statement

For $N\ge1$, define $U(N)=\{Q\in M_N(\mathbb C):Q^*Q=QQ^*=I\}$ and $\mathfrak u(N)=\{X\in M_N(\mathbb C):X^*=-X\}$, both regarded as real spaces where appropriate. Then $U(N)$ is a compact smooth real manifold of dimension $N^2$. Near $I$, the Cayley map
$$X\longmapsto (I+X)(I-X)^{-1}$$
is a smooth chart from $\mathfrak u(N)$; left translates give a finite atlas. The Frobenius inner product induces a smooth Riemannian metric. Under AC$_\omega$, its volume density defines a normalized Borel volume probability $\mu_F$; a Borel subset is $\mu_F$-null exactly when its intersection with every chart has Lebesgue-null coordinate image. Under AC, $\mu_F$ is the normalized Haar probability, so this also gives the Haar-null criterion in that branch.

## Facts & Assumptions

**Given:** An integer $N\ge1$ and the matrix definitions in the Statement.

[F1] [[thm-heine-borel-rn]]: a closed bounded subset of a finite-dimensional real Euclidean space is compact.

[F2] [[def-smooth-manifold]]: a smooth manifold is specified by a compatible smooth atlas.

[F3] [[def-riemannian-metric-and-riemannian-manifold]]: a Riemannian metric is a smooth symmetric positive-definite inner product on each tangent space.

[F4] [[def-riemannian-volume-density]]: in coordinates, the Riemannian volume density is $\sqrt{\det G_x}\,|dx^1\cdots dx^{N^2}|$.

[F5] [[lem-the-riemannian-volume-density-is-coordinate-independent]]: these local positive smooth densities agree on chart overlaps and define one global density.

[F6] [[thm-a-positive-smooth-density-defines-a-locally-finite-radon-measure]]: under AC$_\omega$, a finite-valued positive smooth density defines a regular Borel measure finite on compact sets, hence a Radon measure.

[F7] [[prop-riemannian-volume-is-the-radon-measure-of-the-riemannian-density]]: under AC$_\omega$, the Riemannian density gives the compact-finite Radon volume measure, and integration agrees with the smooth density integral.

[F8] [[cor-normalized-haar-probability-on-a-compact-group]]: under full AC a compact Hausdorff group has a unique normalized left Haar probability.

[A1] Assume AC$_\omega$ for the Borel volume measure; full AC implies AC$_\omega$ ([[def-countable-choice]], [[def-axiom-of-choice]], [[lem-axiom-of-choice-implies-countable-choice]]).

[A2] Assume full AC only for the optional identification of normalized Frobenius volume with normalized Haar probability ([[def-axiom-of-choice]]).

## Proof


1.1 A skew-Hermitian matrix has purely imaginary diagonal entries, giving $N$ real parameters. For each $i<j$, its $(i,j)$ entry is an arbitrary complex number and the $(j,i)$ entry is then forced to be its negative conjugate, giving two real parameters. Thus $\mathfrak u(N)$ has real dimension $N+2\binom N2=N^2$. [given, algebra]

2.1 If $(I-X)v=0$ for $X^*=-X$, then $Xv=v$. But $v^*Xv$ is purely imaginary because $X^*=-X$, while this equality gives $v^*Xv=v^*v>0$ for nonzero $v$. Hence $I-X$ is invertible. Direct multiplication, using that $I-X$ and $I+X$ commute, shows $(I+X)(I-X)^{-1}$ is unitary. [given, step 1.1, algebra]

3.1 On the open set of unitary matrices $Q$ near $I$ where $Q+I$ is invertible, the inverse formula is $X=(Q-I)(Q+I)^{-1}$. The factors are polynomials in $Q$, so they commute; using $Q^*=Q^{-1}$ gives $X^*=-X$. The forward and inverse formulas are smooth rational matrix maps, and therefore define a chart of dimension $N^2$ near $I$. [step 1.1, step 2.1, algebra]

4.1 Left translation by any fixed $Q_0\in U(N)$ sends a Cayley neighborhood of $I$ to a chart neighborhood of $Q_0$, so these translates cover $U(N)$. The group is closed, since $Q^*Q=I$ is a closed matrix equation, and bounded, since every column has norm one. Identifying $M_N(\mathbb C)$ with $\mathbb R^{2N^2}$, [F1] makes $U(N)$ compact. Its subspace topology is Hausdorff and second-countable: the Euclidean metric restricts to a separating metric, and intersections with rational Euclidean balls form a countable base. On overlaps, translated Cayley transition maps are compositions of the forward and inverse rational formulas from step 3.1 with fixed matrix multiplication; matrix inversion is smooth on its open domain, so the transitions are smooth. Thus a finite subcover of these neighborhoods is a finite smooth atlas on a topological $N^2$-manifold, and [F2] supplies its smooth structure. [given, F1, F2, step 3.1, algebra]

5.1 The Frobenius inner product is left invariant because $\operatorname{Re}\operatorname{tr}((Q_0A)^*Q_0B)=\operatorname{Re}\operatorname{tr}(A^*B)$. By [F3] it defines a Riemannian metric; [F4] and [F5] give its global positive smooth volume density. In each of the finitely many charts from step 4.1, take all rational coordinate balls whose closed balls lie in the chart domain. These balls form a countable cover without making pointwise choices. Compactness gives a finite subcover. On each selected closed ball the smooth density coefficient is bounded, so its integral is finite; every nonempty coordinate ball has positive integral. The total smooth volume is therefore finite and positive, so it can be normalized. [given, F3, F4, F5, step 4.1, algebra]

6.1 Under [A1], [F6] and [F7] make the associated Borel measure a regular left-invariant Radon measure; the normalization from step 5.1 makes it a probability. In each chart the density coefficient is smooth and strictly positive, so a Borel set is $\mu_F$-null exactly when its coordinate image is Lebesgue-null. [F6, F7, A1, step 5.1, algebra]

7.1 Under [A2], this normalized left-invariant probability on the compact group agrees with normalized Haar probability by uniqueness in [F8]. This proves only the optional Haar branch; the volume-null statement was proved in step 6.1. [A2, F8, step 6.1, algebra] ∎
