---
id: thm-cft-c2-cofinite-analytic-sewing-convergence
kind: theorem
title: C2-cofinite analytic sewing convergence and pseudo-sewing applications
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 8
deps:
  - thm-cft-segal-sewing-convergence
  - thm-cft-c2-cofinite-pseudo-sewing-convergence
  - lem-cft-plumbing-proper-analytic-family
  - def-cft-pointed-analytic-worldsheet
  - def-cft-plumbing-and-sewing-parameter
  - def-cft-voa-conformal-block-and-dual-fusion-product
  - def-c2-cofinite-vertex-algebra
  - def-grading-restricted-generalized-vertex-module
  - def-cft-contragredient-generalized-module
  - thm-cft-contragredient-generalized-module
  - def-cft-pseudotrace
  - lem-cft-pseudotrace-basis-independent
  - def-axiom-of-choice
justified_by: []
domain: mathematics
library: mathematics
dependency_roles:
  thm-cft-segal-sewing-convergence: mathematical-premise
  thm-cft-c2-cofinite-pseudo-sewing-convergence: mathematical-premise
  lem-cft-plumbing-proper-analytic-family: mathematical-premise
  def-cft-pointed-analytic-worldsheet: mathematical-premise
  def-cft-plumbing-and-sewing-parameter: mathematical-premise
  def-cft-voa-conformal-block-and-dual-fusion-product: mathematical-premise
  def-c2-cofinite-vertex-algebra: mathematical-premise
  def-grading-restricted-generalized-vertex-module: mathematical-premise
  def-cft-contragredient-generalized-module: mathematical-premise
  thm-cft-contragredient-generalized-module: mathematical-premise
  def-cft-pseudotrace: mathematical-premise
  lem-cft-pseudotrace-basis-independent: mathematical-premise
  def-axiom-of-choice: mathematical-premise
axiom_use: "Full AC is inherited from the compact-surface and analytic sewing suppliers; no additional physical hypothesis is used in these deductions."
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Bin Gui and Hao Zhang, Analytic Conformal Blocks of C2-cofinite Vertex Operator Algebras II: Convergence of Sewing and Higher Genus Pseudo-q-traces"
      url: https://arxiv.org/pdf/2411.07707v4
      locator: "Theorem 4.9 and proof for ordinary sewing, §4.3, PDF pp. 55–60; Theorem 4.13 and setup for pseudo-sewing, §4.4, PDF pp. 61–64."
verification:
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Let $V$ be a C2-cofinite conformal vertex algebra of CFT type over $\mathbb C$. For every proper analytic family of compact pointed Riemann surfaces over a complex manifold $B$ with $N\geq1$ incoming sections and $R\geq1$ disjoint paired coordinate neighborhoods, assume every component of each fiber before sewing meets an incoming or paired section and every component of every smooth sewn fiber meets an incoming section. Give the incoming points a grading-restricted generalized joint $V^{\otimes N}$-module $W$, and give the plus sewing points a grading-restricted generalized joint $V^{\otimes R}$-module $M$ and the minus sewing points its restricted contragredient $M'$, formed from the finite joint generalized-weight duals with the stated opposite-field action. The coordinate disks have positive radii $r_j,\rho_j$.

Fix a holomorphic family conformal block $\psi:W\otimes M\otimes M'\to\mathcal O(B)$ on the unsewn family: this means a $\mathbb C$-linear map whose evaluation at each $b\in B$ annihilates every global residue action on that fiber. For joint weight bases $e_{\lambda,\alpha}$ of $M$ with dual bases $e_{\lambda,\alpha}^{\vee}$ in $M'$, the formal sewing tensor and series are
$$
\Omega_{\mathbf q}=\sum_{\lambda,\alpha}\left(\prod_{j=1}^R e^{\ell_j L_j(0)}\right)e_{\lambda,\alpha}\otimes e_{\lambda,\alpha}^{\vee},\qquad S_\psi(w)(b,\mathbf q)=\psi_b(w\otimes\Omega_{\mathbf q}),\qquad e^{\ell_j}=q_j.
$$
Here $L_j(0)$ is the conformal operator of the $j$th joint action, and on a joint generalized-weight block the exponential means $e^{\ell_j\lambda_j}\sum_{k\geq0}\ell_j^k(L_j(0)-\lambda_j I)^k/k!$, a finite nilpotent sum. For $0<|q_j|<r_j\rho_j$, with the logarithms fixed on the universal cover, $S_\psi(w)$ converges absolutely and locally uniformly on compact subsets of the base and punctured sewing-parameter cover for every $w\in W$, and defines a holomorphic conformal block of the sewn smooth family.

For one sewing pair, fix also a holomorphic unsewn family conformal block $\phi:W\otimes M'\otimes M\to\mathcal O(B)$, with the two paired labels enumerated in that order, and the following additional data: a grading-restricted generalized $V$-module $M$ with finite-dimensional $\mathrm{End}_V(M)$, a unital subalgebra $A\subseteq\mathrm{End}_V(M)^{\mathrm{op}}$ over which $M$ and the finite-dimensional lower truncations used in the series are projective, a symmetric functional $\omega:A\to\mathbb C$ satisfying $\omega(ab)=\omega(ba)$, and A-linearity of every finite-block map $T_{\lambda,\mu;b,w}:M_{[\mu]}\to M_{[\lambda]}$ defined by
$$
\langle m_\lambda^\vee,T_{\lambda,\mu;b,w}m_\mu\rangle=\phi_b(w\otimes m_\lambda^\vee\otimes m_\mu).
$$
Then the pseudo-sewing series $S^\omega_\phi(w)=\sum_\lambda\mathrm{Tr}_\omega(q^{L(0)}|_{M_{[\lambda]}}T_{\lambda,\lambda;b,w})$ has the same absolute locally uniform convergence and sewn-block conclusion. Here $\mathrm{Tr}_\omega$ is the finite-projective pseudo-trace, applied after extending a diagonal block map by zero to a projective lower truncation containing it, as in the pseudo-sewing supplier. These block maps need not assemble to an algebraic endomorphism of $M$. No rationality or self-duality assumption is added in either conclusion.

## Statement references

[[thm-cft-segal-sewing-convergence]]

[[thm-cft-c2-cofinite-pseudo-sewing-convergence]]

[[lem-cft-plumbing-proper-analytic-family]]

[[def-cft-pointed-analytic-worldsheet]]

[[def-cft-plumbing-and-sewing-parameter]]

[[def-cft-voa-conformal-block-and-dual-fusion-product]]

[[def-cft-pseudotrace]]

## Facts & Assumptions

**Given:** The C2-cofinite CFT-type VOA, the proper analytic family with its marked-coordinate data, incoming and sewing modules, the holomorphic unsewn family block $\psi$, nonzero plumbing parameters with fixed branches, and, for the pseudo-sewing conclusion, the holomorphic unsewn family block $\phi$ and additional projective-trace data listed in the Statement. Both family blocks use the residue-annihilator convention of F3.

[F1] [[thm-cft-segal-sewing-convergence]]: the ordinary Segal sewing series converges absolutely and locally uniformly on compact subsets of the universal cover and yields a conformal block; its full local proof is supplied by the ordinary sewing theorem.

[F2] [[thm-cft-c2-cofinite-pseudo-sewing-convergence]]: for one sewing pair, if $\dim_\mathbb C\mathrm{End}_V(M)<\infty$, $A\subseteq\mathrm{End}_V(M)^{\mathrm{op}}$ is unital, $M$ and the finite-dimensional lower truncations used by the series are projective right $A$-modules, $\omega:A\to\mathbb C$ is symmetric, and every finite-block coefficient map $T_{\lambda,\mu;b,w}:M_{[\mu]}\to M_{[\lambda]}$ is A-linear, then pseudo-sewing converges. The block maps need not define an algebraic endomorphism of $M$. Its trace-compatible convergence is proved by an actual two-pair ordinary sewing on the finite-support A-linear endomorphism joint module. The projectivity, symmetry and blockwise A-linearity assumptions remain exactly those stated.

[F3] [[def-cft-voa-conformal-block-and-dual-fusion-product]]: the conformal-block space is the algebraic dual of the quotient by global VOA residue actions.

## Proof

1.1 The specified $\psi$ is a holomorphic family block on $W\otimes M\otimes M'$ by its residue-annihilation condition. Its tensor $\Omega_{\mathbf q}$ is exactly F1's generalized-weight coevaluation, because each exponential expands as the stated finite nilpotent polynomial on a joint weight block. The family, paired modules, component hypotheses, radii and logarithm lifts therefore meet all hypotheses of F1. Applying it to this $\psi$ proves the ordinary convergence and holomorphic sewn-block conclusion for every $w\in W$. [given, F1, F3]

1.2 For one sewing pair, the specified $\phi$ supplies F2's holomorphic unsewn family block, with its paired factors ordered $M',M$. The displayed pairing defines its finite-block maps uniquely by finite-dimensional duality. The stated projectivity of the lower truncations, symmetry of $\omega$, and A-linearity are precisely F2's remaining trace hypotheses. Thus F2 applies to this $\phi$ and gives the asserted convergence and holomorphic sewn-block property of $S^\omega_\phi(w)$. [given, F2, F3]

2.1 The two convergent functionals are conformal blocks of the same sewn smooth family by [F1] and [F2]. They are separate outputs with their own stated inputs; neither identifies pseudo-trace with ordinary trace or replaces the nonsemisimple module coend by a simple-object sum. [given, F1, F2, F3, step 1.1, step 1.2] ∎

## Proof status

Both analytic suppliers now have local proofs. Ordinary convergence uses the actual nodal positive-pole lifting and finite logarithmic Euler system; pseudo-sewing uses the finite-projective cyclic trace and two-pair sphere plumbing reduction. The deductions above therefore establish the stated combined conclusion. No fixed-surface sewing inverse, coend factorization or modular-functor assertion follows from convergence alone.
