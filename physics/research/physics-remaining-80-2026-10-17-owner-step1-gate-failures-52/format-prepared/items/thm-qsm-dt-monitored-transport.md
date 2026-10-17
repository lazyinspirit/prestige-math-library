---
id: thm-qsm-dt-monitored-transport
kind: theorem
title: Stationary monitored-chain transport variance coefficient
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: physics
dependency_level: 8
deps:
  - def-qsm-dt-monitored-chain
  - thm-qsm-dt-gibbs-jump
  - thm-dominated-convergence
  - def-axiom-of-choice
dependency_roles:
  def-qsm-dt-monitored-chain: mathematical-premise
  thm-qsm-dt-gibbs-jump: mathematical-premise
  thm-dominated-convergence: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: David Aldous and James Allen Fill, Reversible Markov Chains and Random Walks on Graphs, Chapters 2–3
      url: https://www.stat.berkeley.edu/~aldous/RWG/book.pdf
    - title: M. B. Plenio and P. L. Knight, The quantum-jump approach to dissipative dynamics in quantum optics, §§I and IV.A
      url: https://arxiv.org/pdf/quant-ph/9702007
---

## Statement

Assume the full Axiom of Choice and the connected finite Gibbs jump data of [[thm-qsm-dt-gibbs-jump]]. Use the energy-resolved record path supplied by [[def-qsm-dt-monitored-chain]], initialized with law $\pi$. Let $v:E\to\mathbb R$ be a real velocity observable with units metres per second and $\pi(v):=\sum_a\pi_av_a=0$. Define the record displacement

$$Y_T:=\int_0^T v_{a(s)}\,ds,\qquad C_v(s):=\langle v,e^{sW}v\rangle_\pi,$$

where $Wf(a)=\sum_{b\ne a}w_{ab}(f_b-f_a)$, $\langle f,g\rangle_\pi=\sum_a\pi_a f_ag_a$, and $\pi^\perp:=\{f:E\to\mathbb R:\sum_a\pi_af_a=0\}$. Then for every $T\geq0$,

$$\mathbb E_\pi[Y_T]=0,\qquad \operatorname{Var}_\pi(Y_T)=2\int_0^T(T-s)C_v(s)\,ds.$$

If $\gamma_{\rm cl}>0$ is the reversible spectral gap of $W$ on $\pi$-centered functions, then $|C_v(s)|\leq e^{-\gamma_{\rm cl}s}\sum_a\pi_av_a^2$, and

$$D_{\rm rec}:=\lim_{T\to\infty}\frac{\operatorname{Var}_\pi(Y_T)}{2T}=\int_0^\infty C_v(s)\,ds=\langle(-W|_{\pi^\perp})^{-1}v,v\rangle_\pi\geq0.$$

The units of $D_{\rm rec}$ are square metres per second. This proves a variance coefficient for the selected finite record model; it does not prove a central-limit theorem or a generic quantum transport law.

## Facts & Assumptions

**Given:** Full AC, the finite connected Gibbs jump model, the selected energy-resolved instrument, initial record law $\pi$, and centered real $v$.

[A1] [[def-axiom-of-choice]]: every family of nonempty sets has a choice function. This full axiom is required by the monitored-chain supplier's Ionescu–Tulcea path construction.

[F1] [[def-qsm-dt-monitored-chain]]: the chosen instrument produces a nonexplosive finite continuous-time Markov path $a(t)$ with the prescribed rates and transition semigroup.

[F2] [[thm-qsm-dt-gibbs-jump]]: $W$ is self-adjoint on $L^2(E,\pi)$, has constants as its kernel, and has a strictly positive gap on centered functions.

[F3] [[thm-dominated-convergence]]: almost-everywhere convergence under one integrable majorant gives convergence of the integrals.

## Proof

1.1 The path in [F1] has locally piecewise-constant sample paths with finitely many jumps on bounded intervals. Each coordinate $a(s)$ is measurable under the supplied path law; since $E$ is finite, $(s,\omega)\mapsto v_{a(s,\omega)}$ is jointly measurable and bounded, so its time integral $Y_T$ is a measurable bounded random variable. It is stationary when initialized with $\pi$, since [F2] gives $\pi W=0$. For $s,t\geq0$, stationarity and the transition semigroup give
$$
\mathbb E_\pi[v_{a(s)}v_{a(t)}]=\langle v,e^{|t-s|W}v\rangle_\pi=C_v(|t-s|).
$$
For $t\geq s$, this is the Markov property; for $s>t$, the same scalar follows by self-adjointness of $e^{(s-t)W}$. Since $v$ is centered, $\mathbb E_\pi[Y_T]=0$. [given, A1, F1, F2, algebra]

2.1 The function $v_{a(s)}$ is bounded because $E$ is finite, so the product covariance is bounded on the finite square $[0,T]^2$ and Fubini's theorem applies. Therefore
$$
\operatorname{Var}_\pi(Y_T)=\int_0^T\int_0^T\mathbb E_\pi[v_{a(s)}v_{a(t)}]\,ds\,dt =2\int_0^T(T-s)C_v(s)\,ds,
$$
using the covariance identity from step 1.1 and splitting the square into its two triangles. [step 1.1, algebra]

2.2 Expand $v$ in an orthonormal eigenbasis of the self-adjoint $W|_{\pi^\perp}$. Its eigenvalues are at most $-\gamma_{\rm cl}<0$, so the expansion gives $|C_v(s)|\leq e^{-\gamma_{\rm cl}s}\|v\|_\pi^2$. The finite matrix exponential makes $C_v$ continuous. On $[0,\infty)$, set $f_T(s)=\mathbf1_{[0,T]}(s)(1-s/T)C_v(s)$. For every sequence $T_n\to\infty$, $f_{T_n}(s)\to C_v(s)$ pointwise and $|f_{T_n}(s)|\leq\|v\|_\pi^2e^{-\gamma_{\rm cl}s}$, an integrable majorant. [F2, step 1.1, algebra]

3.1 Applying [F3] to step 2.2 gives $\int_0^{T_n}(1-s/T_n)C_v(s)\,ds\to\int_0^\infty C_v(s)\,ds$ for every $T_n\to\infty$, hence the real-$T$ limit exists and equals that integral. The same finite spectral expansion gives $\int_0^\infty e^{sW}v\,ds=(-W|_{\pi^\perp})^{-1}v$, so the integral is $\langle(-W|_{\pi^\perp})^{-1}v,v\rangle_\pi$. Each eigencomponent contributes its squared coefficient divided by a positive gap eigenvalue, proving nonnegativity. [F2, F3, step 2.2, algebra] ∎
