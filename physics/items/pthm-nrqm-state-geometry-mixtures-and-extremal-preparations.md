---
id: pthm-nrqm-state-geometry-mixtures-and-extremal-preparations
kind: physics-theorem
domain: physics
title: "Statistical mixtures, spectral decompositions and the extremal role of
  pure preparations"
status: published
origin: pipeline
dependency_level: 7
deps:
  [
    post-nrqm-framework-state-and-composition,
    def-nrqm-state-geometry-framework-state-space,
    def-nrqm-state-geometry-state-vectors-and-rays,
    def-nrqm-state-geometry-pure-mixed-states-and-purity,
    lem-nrqm-state-geometry-density-set-convex-and-complete,
    lem-nrqm-state-geometry-purity-criterion,
    lem-nrqm-state-geometry-extreme-points-of-the-state-space,
    lem-nrqm-state-geometry-ray-to-rank-one-projection,
    lem-nrqm-composites-density-and-scalar-spectral-probability,
    def-countable-choice
  ]
dependency_roles:
  post-nrqm-framework-state-and-composition: formulation-prerequisite
  def-nrqm-state-geometry-framework-state-space: formulation-prerequisite
  def-nrqm-state-geometry-state-vectors-and-rays: mathematical-premise
  def-nrqm-state-geometry-pure-mixed-states-and-purity: mathematical-premise
  lem-nrqm-state-geometry-density-set-convex-and-complete: mathematical-premise
  lem-nrqm-state-geometry-purity-criterion: mathematical-premise
  lem-nrqm-state-geometry-extreme-points-of-the-state-space: mathematical-premise
  lem-nrqm-state-geometry-ray-to-rank-one-projection: mathematical-premise
  lem-nrqm-composites-density-and-scalar-spectral-probability: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "Model-internal statements about preparations of the
  non-relativistic quantum framework under the state postulate: statistical
  mixtures of preparations with probability weights are preparations; every
  preparation has a spectral decomposition as a countable mixture of pairwise
  orthogonal pure preparations; and the pure preparations are exactly the
  extreme points of the preparation set, so every mixed preparation is a
  nontrivial mixture of two preparations. The weights are classical preparation
  probabilities, not amplitudes. The item asserts no apparatus realization of
  any mixture, no measurement or probability law, no dynamics and no empirical
  result."
sources:
  references:
    - title: "J. Preskill, Lecture Notes for Ph219/CS219: Quantum Information, Chapter
        2 (updated July 2015), Sections 2.3 and 2.5.1, printed pages 18-21 and
        26-27: the density operator of a mixture, convex combinations of density
        matrices, and the interpretation of convexity as an ensemble
        preparation"
      url: "https://preskill.caltech.edu/ph219/chap2_15.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 6.3,
        printed pages 121-126: the density operator as a probability mixture of
        pure states, with the spectral diagonalization and the reduced-state
        example"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "G. Teschl, Topics in Real and Functional Analysis (17 November 2017),
        Section 3.6, printed pages 96-100: spectral decomposition of positive
        trace-class operators and the eigenvalue form of the trace"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.\
        pdf"
verification:
  precheck: pass
---

## Statement

Adopt the state and composition postulate P1 of the framework ([[post-nrqm-framework-state-and-composition]]) and use the state-space vocabulary of [[def-nrqm-state-geometry-framework-state-space]]. Assume the Axiom of Countable Choice ([[def-countable-choice]]), which is the choice hypothesis of the spectral and mixture suppliers cited below. Let $H\ne\{0\}$ be the Hilbert space assigned to a declared system. Then:

(a) **Mixtures.** Let $(\rho_n)$ be a finite or countable family of preparations with real weights $w_n\ge0$ satisfying $\sum_nw_n=1$. Then the statistical mixture $\sum_nw_n\rho_n$ of clause (iii) of P1 converges in trace norm to a preparation, namely to the density operator $T=\sum_nw_n\rho_n$ of [[lem-nrqm-state-geometry-density-set-convex-and-complete]]. The mixture is affine in its data: a term of zero weight may be added or removed without changing $T$, and splitting one weight between two copies of the same preparation, $w\rho=w_1\rho+w_2\rho$ with $w_1+w_2=w$, leaves $T$ unchanged. If the index set is partitioned into consecutive finite blocks with total weights $u_k>0$ and block mixtures $\sigma_k$, then $\sum_ku_k\sigma_k=\sum_nw_n\rho_n$ in trace norm, so mixtures may be regrouped.

(b) **Spectral decomposition.** Every preparation $\rho$ is a countable statistical mixture of pairwise orthogonal pure preparations: there exist a finite or countable orthonormal family $(u_n)$ of unit vectors and positive weights $\lambda_n$ with $\sum_n\lambda_n=1$ such that
$$\rho=\sum_n\lambda_n\,T_{u_n,u_n},$$
the sum converging in trace norm, and the weights $\lambda_n$ are exactly the positive eigenvalues of $\rho$ counted with multiplicity.

(c) **Extremality and nontrivial decompositions.** A preparation is pure if and only if its density operator is an extreme point of the state space $D(H)$ in the sense of the condition displayed in [[lem-nrqm-state-geometry-extreme-points-of-the-state-space]]; consequently every mixed preparation $\rho$ admits a representation as a statistical mixture of two preparations in a nontrivial way: if $\lambda_1\ge\lambda_2>0$ are two positive eigenvalues of $\rho$ with orthonormal eigenvectors $u_1$ and $u_2$, then with $\varepsilon:=\lambda_2/2$ the operators
$$\sigma_\pm:=\rho\pm\varepsilon\bigl(T_{u_1,u_1}-T_{u_2,u_2}\bigr)$$
are preparations with $\rho=\tfrac12\sigma_++\tfrac12\sigma_-$ and $\sigma_+\ne\sigma_-$.

## Facts & Assumptions

**Given:** The adopted state postulate P1, the assigned Hilbert space $H\ne\{0\}$, preparations $\rho,\rho_n\in D(H)$, weights $w_n\ge0$ with $\sum_nw_n=1$, and where required two positive eigenvalues $\lambda_1\ge\lambda_2>0$ of $\rho$ with orthonormal eigenvectors $u_1,u_2$.

[F1] **The state postulate** ([[post-nrqm-framework-state-and-composition]]): pure preparations are the unit rays of $H$; general preparations are the density operators on $H$; a statistical mixture of preparations $\rho_n$ with weights $w_n\ge0$, $\sum_nw_n=1$, is the trace-norm convergent sum $\rho=\sum_nw_n\rho_n$, whose weights are a classical preparation uncertainty and not amplitudes; and the density operator associated with a unit ray $[\psi]$ is $T_{\psi,\psi}$.

[F2] **State-space vocabulary and mixtures** ([[def-nrqm-state-geometry-framework-state-space]], [[lem-nrqm-state-geometry-density-set-convex-and-complete]]): preparations are the states $D(H)$; countable probability-weighted sums of states converge absolutely in the trace norm to a state, finite convex combinations of states are states, and consecutive finite blocks of a weighted family may be grouped with the grouped weights producing the same sum.

[F3] **Spectral expansion** ([[lem-nrqm-composites-density-and-scalar-spectral-probability]] clause (a), [[lem-nrqm-state-geometry-purity-criterion]]): every density operator $\rho$ admits an expansion $\rho=\sum_n\lambda_nT_{u_n,u_n}$ converging in trace norm, with $\lambda_n>0$, $\sum_n\lambda_n=1$, and $(u_n)$ an orthonormal family of eigenvectors; the $\lambda_n$ are the positive eigenvalues of $\rho$ counted with multiplicity. The purity criterion gives that $\rho$ is pure exactly when the multiplicity list has one positive eigenvalue equal to $1$.

[F4] **Pure states are extreme** ([[lem-nrqm-state-geometry-extreme-points-of-the-state-space]]): the extreme points of $D(H)$ are exactly the pure states.

[F5] **Pure states and rays** ([[lem-nrqm-state-geometry-ray-to-rank-one-projection]], [[def-nrqm-state-geometry-pure-mixed-states-and-purity]]): $T_{u,u}$ with $u\in S(H)$ are exactly the pure states, and $T_{u_1,u_1}\ne T_{u_2,u_2}$ for orthonormal unit vectors $u_1,u_2$.

[F6] **Extremality condition** ([[lem-nrqm-state-geometry-extreme-points-of-the-state-space]]): a state $x\in D(H)$ is extreme when $x=(1-t)y+tz$ with $y,z\in D(H)$ and real $0<t<1$ implies $y=z=x$.

## Proof

1.1 [(a) mixtures and affinity] By [F2] the sum $T=\sum_nw_n\rho_n$ converges absolutely in trace norm to a state, so it is a preparation in the sense of [F1]; the identity $\sum_nw_n\rho_n=\sum_nw_n\rho_n+0\cdot\rho'$ for an extra preparation $\rho'$ and the identity $w\rho=w_1\rho+w_2\rho$ for $w_1+w_2=w$ are identities in the real vector space of self-adjoint trace-class operators, so the value of the mixture is unchanged; and the grouping statement for consecutive blocks is clause (c) of [F2]. [given, F1, F2, algebra]

1.2 [(b) the spectral decomposition is a mixture of pure preparations] By [F3] the preparation $\rho$ has an expansion $\rho=\sum_n\lambda_nT_{u_n,u_n}$ with positive weights $\lambda_n$, $\sum_n\lambda_n=1$ and $(u_n)$ orthonormal; by [F5] each $T_{u_n,u_n}$ is a pure state, and pairwise orthogonality of the $u_n$ makes the pure preparations pairwise distinct; the convergence in trace norm is the convergence of a statistical mixture as in [F2]. Thus $\rho$ is exhibited as the mixture of the pure preparations $T_{u_n,u_n}$ with the weights $\lambda_n$, which by [F3] are its positive eigenvalues counted with multiplicity. [given, F2, F3, F5, algebra]

1.3 [(c) extremality] By [F4] the extreme points of $D(H)$ are exactly the pure states; since preparations are the states of $D(H)$ by [F2], a preparation is pure exactly when its density operator is extreme. [given, F2, F4]

2.1 [(c) the nontrivial splitting of a mixed preparation] By [F3], a mixed $\rho$ has at least two positive eigenvalues counted with multiplicity. Choose two with $\lambda_1\ge\lambda_2>0$ and orthonormal eigenvectors $u_1,u_2$, and put $\varepsilon=\lambda_2/2$. In the spectral expansion of [F3], choose the orthonormal eigenvectors to include $u_1,u_2$ (within either selected eigenspace, replace its finite orthonormal basis by one containing the specified vectors). The operators $\sigma_\pm=\rho\pm\varepsilon(T_{u_1,u_1}-T_{u_2,u_2})$ therefore have the same trace-norm convergent expansion with the two selected weights replaced by $\lambda_1\pm\varepsilon$ and $\lambda_2\mp\varepsilon$. All weights remain positive, since $\lambda_1-\varepsilon\ge\lambda_2/2>0$ and $\lambda_2-\varepsilon=\lambda_2/2>0$, and their sum remains one. By [F2] and [F5] each $\sigma_\pm$ is a density operator and hence a preparation. Their average is $\rho$, while $\sigma_+-\sigma_-=2\varepsilon(T_{u_1,u_1}-T_{u_2,u_2})\ne0$ by [F5]. Thus [F1] reads the identity as a nontrivial statistical mixture with weights $1/2$, so $\rho$ is not extreme by [F6], consistent with step 1.3. [given, step 1.3, F1, F2, F3, F5, F6, algebra]

3.1 [Conclusion] Steps 1.1-1.2 prove (a) and (b); steps 1.3 and 2.1 prove (c). [step 1.1, step 1.2, step 1.3, step 2.1] ∎
