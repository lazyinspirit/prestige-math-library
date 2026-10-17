---
id: cex-qsm-dt-damping-entropy
kind: counterexample
title: Amplitude damping can decrease system entropy
status: published
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: physics
dependency_level: 3
deps:
  - def-axiom-of-choice
  - def-qsm-dt-channel-definition
  - def-qsm-relative-entropy-domain
  - def-kullback-leibler-divergence
  - def-real-exponential-function-and-e
  - thm-kullback-leibler-is-nonnegative
  - cor-exponential-reciprocal-and-positivity
  - thm-exponential-is-strictly-increasing
  - thm-qsm-dt-choi-kraus
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-qsm-dt-channel-definition: mathematical-premise
  def-qsm-relative-entropy-domain: mathematical-premise
  def-kullback-leibler-divergence: mathematical-premise
  def-real-exponential-function-and-e: mathematical-premise
  thm-kullback-leibler-is-nonnegative: mathematical-premise
  cor-exponential-reciprocal-and-positivity: mathematical-premise
  thm-exponential-is-strictly-increasing: mathematical-premise
  thm-qsm-dt-choi-kraus: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: John Watrous, The Theory of Quantum Information, Chapter 4, §4.1.1 and Chapter 5, §5.2.2
      url: https://cs.uwaterloo.ca/~watrous/TQI/TQI.4.pdf
    - title: Lin Lin and Nathan Wiebe, Quantum Algorithms for Scientific Computation, Chapter 3, §3.2, Example 3.17
      url: https://math.berkeley.edu/~linlin/qasc/live_notes_0315.pdf
---

## Statement refuted

Every finite quantum channel $\Phi$ and every positive semidefinite trace-one matrix $\rho$ satisfy $S(\Phi(\rho))\geq S(\rho)$.

## Facts & Assumptions

**Given:** The finite channel and entropy definitions, $k_B>0$ with units ${\rm J}\,{\rm K}^{-1}$, and the full Axiom of Choice as required by the KL supplier below.

[A1] [[def-axiom-of-choice]]: every family of nonempty sets has a choice function. It is an explicit hypothesis of the published KL nonnegativity supplier used for the strict entropy comparison.

[F1] [[def-qsm-dt-channel-definition]]: a finite channel is a complex-linear completely positive trace-preserving map.

[F2] [[thm-qsm-dt-choi-kraus]]: a finite Kraus map $X\mapsto\sum_aK_aXK_a^*$ is completely positive, and it is trace-preserving when $\sum_aK_a^*K_a=I$.

[F3] [[def-qsm-relative-entropy-domain]]: for a positive trace-one matrix with eigenvalues $\lambda_i$, $S(\rho)=-k_B\sum_i\lambda_i\ln\lambda_i$, with $0\ln0=0$.

[F4] [[def-kullback-leibler-divergence]]: for probability laws $P\ll Q$, $D(P\|Q)=\int\ln(dP/dQ)\,dP$, using the natural logarithm.

[F5] [[thm-kullback-leibler-is-nonnegative]]: under full AC, $D(P\|Q)\geq0$, with equality exactly when $P=Q$.

[F6] [[def-real-exponential-function-and-e]]: $\exp(x)$ is the real exponential function defined by its power series, with $\exp(0)=1$.

[F7] [[cor-exponential-reciprocal-and-positivity]]: $\exp(x)>0$ for every real $x$.

[F8] [[thm-exponential-is-strictly-increasing]]: $x<y$ implies $\exp(x)<\exp(y)$.

## Counterexample


1.1 Fix $\gamma>0$ in ${\rm s}^{-1}$ and $t>0$ in seconds, so $0<e^{-\gamma t}<1$ by [F6]–[F8]. On $\mathbb C^2$, define $K_0=\operatorname{diag}(e^{-\gamma t/2},1)$, $K_1=\sqrt{1-e^{-\gamma t}}\,|1\rangle\langle0|$, and $\Phi_t(X)=K_0XK_0^*+K_1XK_1^*$. Since $K_0^*K_0+K_1^*K_1=I_2$, [F2] and [F1] show that $\Phi_t$ is a finite channel. [given, F1, F2, F6, F7, F8, algebra]

2.1 The matrix $\rho_0=I_2/2$ is positive semidefinite with trace one. Direct multiplication gives $\Phi_t(\rho_0)=\operatorname{diag}(p,1-p)$, where $p=e^{-\gamma t}/2\in(0,1/2)$ by [F6]–[F8]. The entropy difference is $S(\rho_0)-S(\Phi_t(\rho_0))=k_B(\ln2-h(p))$, where $h(p)=-p\ln p-(1-p)\ln(1-p)$. For the binary laws $P=(p,1-p)$ and $Q=(1/2,1/2)$, [F4] gives $D(P\|Q)=\ln2-h(p)$; since $P\ne Q$, [F5] gives $D(P\|Q)>0$. With $k_B>0$, this yields $S(\Phi_t(\rho_0))<S(\rho_0)$ and refutes the universal claim. [given, A1, F3, F4, F5, F6, F7, F8, step 1.1, algebra] ∎
