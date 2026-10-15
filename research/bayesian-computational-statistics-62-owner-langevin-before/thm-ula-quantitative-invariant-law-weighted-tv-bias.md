---
id: thm-ula-quantitative-invariant-law-weighted-tv-bias
kind: theorem
title: ULA's invariant-law bias under smoothness and radial drift
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 4
deps:
  - alg-unadjusted-langevin-algorithm
  - def-axiom-of-choice
  - def-v-weighted-total-variation-distance
  - lem-langevin-potential-exponential-generator-drift
  - lem-ula-fixed-step-gaussian-kernel-exponential-drift
  - lem-ula-potential-coercivity-from-radial-drift
  - lem-weighted-pinsker-inequality-for-probability-laws
axiom_use: "AC is assumed by the source through Gaussian-law and Radon–Nikodym constructions; exact uses in the quantitative proof remain within the escalated local proof obligation."
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "Alain Durmus and Éric Moulines, Non-asymptotic convergence analysis for the Unadjusted Langevin Algorithm, Theorem 10 and proof §4.6"
      url: "https://arxiv.org/pdf/1507.05021v3"
      locator: "Theorem 10 and its complete proof in §4.6; the proof uses continuous-time weighted ergodicity, a Girsanov path-space KL estimate, discrete Euler drift/ergodicity, weighted Pinsker, and an inhomogeneous moment bound."
---

## Statement

Assume AC ([[def-axiom-of-choice]]) and the hypotheses of [[alg-unadjusted-langevin-algorithm]]. In
addition, let $U\in C^2(\mathbb R^d)$, let $\nabla U$ be $L$-Lipschitz for
$L>0$, and suppose there are a global minimizer $x_\star$, $\rho>0$,
$\alpha\in(1,2]$, and $M_\rho\ge0$ such that
$$\langle\nabla U(x),x-x_\star\rangle\ge\rho\|x-x_\star\|^\alpha \quad\text{whenever }\|x-x_\star\|\ge M_\rho.$$
Assume $0<Z_U=\int e^{-U(x)}dx<\infty$ and normalize $U(x_\star)=0$;
subtracting a constant leaves the target and ULA kernel unchanged and only
rescales the weight by a constant. Put $\pi_U(dx)=Z_U^{-1}e^{-U(x)}dx$ and
$V(x)=e^{U(x)/2}$. For every $0<\gamma<L^{-1}$, the ULA kernel has a unique
invariant probability $\pi_\gamma$, both $\pi_U$ and $\pi_\gamma$ have finite
$V^{1/2}$ moments, and
$$\|\pi_U-\pi_\gamma\|_{V^{1/2}}\le C\gamma^{1/2},$$
where the finite source-dependent constant $C$ is independent of $\gamma$.
The norm is the weighted total-variation norm of
[[def-v-weighted-total-variation-distance]].

## Proof

The source states this theorem and supplies a complete proof, but the library
does not yet contain local proofs of the continuous-time weighted geometric
ergodicity theorem, the Girsanov pathwise KL block bound, or the discrete
Euler-kernel small-set/drift theorem used in that proof. The local lemmas [L1]
[[lem-langevin-potential-exponential-generator-drift]] and
[[lem-ula-fixed-step-gaussian-kernel-exponential-drift]] establish only the
formal-generator and one-step-drift precursors; the radial-to-coercivity
lemma [[lem-ula-potential-coercivity-from-radial-drift]] supplies the local
potential bound, and [[lem-weighted-pinsker-inequality-for-probability-laws]]
supplies only the final entropy-to-weighted-TV conversion. The full local
proof remains an owner-escalated prerequisite obligation. The source citation
is evidence for the statement and proposed route, not a replacement proof.
