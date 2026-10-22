---
id: thm-qsm-dt-variance-green-kubo
kind: theorem
title: Integrability-qualified quantum variance Green–Kubo limit
status: published
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: physics
dependency_level: 9
deps:
  - def-countable-choice
  - lem-qsm-finite-matrix-cstar-and-state-duality
  - thm-dominated-convergence
  - thm-qsm-dt-algebraic-kubo
  - lem-qsm-dt-stationary-variance-integral-identity
dependency_roles:
  def-countable-choice: mathematical-premise
  lem-qsm-finite-matrix-cstar-and-state-duality: mathematical-premise
  thm-dominated-convergence: mathematical-premise
  thm-qsm-dt-algebraic-kubo: mathematical-premise
  lem-qsm-dt-stationary-variance-integral-identity: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Ryogo Kubo, Statistical-Mechanical Theory of Irreversible Processes I, Journal of the Physical Society of Japan 12 (1957), §§2–3, printed pp. 573–575
      url: https://staff.ulsu.ru/moliver/ref/kubo/kubo57.pdf
    - title: Pieter Naaijkens, Quantum Spin Systems on Infinite Lattices, Theorem 3.3.12 and proof, printed pp. 69–71
      url: https://arxiv.org/pdf/1311.2717
---

## Statement

Assume Countable Choice and the finite-matrix C$^*$-identity hypothesis used by [[thm-qsm-dt-algebraic-kubo]]. Use its finite-range spin algebra $\mathcal A$, strongly continuous automorphism group $\alpha_t$, and invariant state $\phi$ obtained from consistent local densities. Let $V=V^*\in\mathcal A$ satisfy $\phi(V)=0$, and define
$$X_T=\int_0^T\alpha_t(V)\,dt,\qquad G(t)=\operatorname{Re}\phi(V\alpha_t(V)).$$
If $G\in L^1([0,\infty))$, then
$$\lim_{T\to\infty}\frac{\phi(X_T^2)}{2T}=D:=\int_0^\infty G(t)\,dt\ge0.$$
For a finite list of centered self-adjoint observables $V_1,\ldots,V_m$, if each symmetrized covariance $G_{ab}(t)=\tfrac12(\operatorname{Re}\phi(V_a\alpha_t(V_b))+\operatorname{Re}\phi(V_b\alpha_t(V_a)))$ is absolutely integrable on $[0,\infty)$, then $D_{ab}=\int_0^\infty G_{ab}(t)dt$ is a real positive semidefinite matrix. For a velocity observable measured in m s$^{-1}$, $D$ has units m$^2$ s$^{-1}$; for general $V$, its units are $[V]^2$ s. The result is a variance of a time-integrated observable, not a joint classical trajectory or a universal transport law.

## Facts & Assumptions

**Given:** Countable Choice and the finite-matrix C$^*$-identity hypothesis of the finite-range group construction; the invariant state and group of the algebraic response theorem; centered self-adjoint observables; and absolute integrability of the stated covariance functions.

[A1] [[def-countable-choice]]: Countable Choice is the exact choice assumption for the local-algebra completion; no full Axiom of Choice is used.

[F1] [[lem-qsm-finite-matrix-cstar-and-state-duality]]: every finite local matrix algebra has its induced-norm C$^*$-identity.

[F2] [[thm-qsm-dt-algebraic-kubo]]: under [A1], [F1], and the stated finite-range interaction assumptions, $\alpha_t$ is a strongly continuous automorphism group on the quasi-local algebra and $\phi$ is an invariant bounded state.

[F3] [[lem-qsm-dt-stationary-variance-integral-identity]]: for centered self-adjoint observables, the time-integrated symmetrized covariance equals the finite-time symmetrized variance and its matrix is positive semidefinite.

[F4] [[thm-dominated-convergence]]: pointwise convergence under an integrable majorant permits passage of limits through Lebesgue integrals.

## Proof


**Proof technique:** apply the stationary covariance identity and pass to the infinite-time limit by dominated convergence.

**Given:** [A1], [F1]–[F4], the centered observables, and the integrability hypotheses.

1.1 The algebraic group/state hypotheses follow from [A1], [F1], and the exact interaction and state assumptions carried by [F2]; applying the stationary covariance identity [F3] to the scalar observable gives $$\frac{\phi(X_T^2)}{2T}=\int_0^T\left(1-\frac{t}{T}\right)G(t)\,dt.$$ Extend the integrand by zero for $t>T$. For each fixed $t\ge0$ it converges to $G(t)$ as $T\to\infty$, and its absolute value is at most $|G(t)|$, which is integrable by hypothesis. Applying [F4] on $[0,\infty)$ yields the limit $\int_0^\infty G(t)dt$. [given, A1, F1, F2, F3, F4, algebra]


2.1 For finite $T$, $X_T=X_T^*$ by [F3], so $\phi(X_T^2)=\phi(X_T^*X_T)\ge0$. The limit in step 1.1 is therefore nonnegative. [given, F2, F3, step 1.1, algebra]


3.1 For $m$ observables, [F3] gives the finite-time real symmetric covariance matrix with entries $D_{ab}(T)=\int_0^T(1-t/T)G_{ab}(t)dt$; for every real vector $c$, $c^TD(T)c=\phi((\sum_a c_aX_{a,T})^2)/(2T)\ge0$. Each entry converges to $D_{ab}=\int_0^\infty G_{ab}(t)dt$ by the same dominated-convergence argument as step 1.1. For any $c$, $c^TDc=\lim_Tc^TD(T)c\ge0$, so $D$ is positive semidefinite. [F2, F3, F4, step 1.1, algebra] ∎