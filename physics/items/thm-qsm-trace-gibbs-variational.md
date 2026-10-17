---
id: thm-qsm-trace-gibbs-variational
kind: theorem
title: Self-adjoint trace-Gibbs normalization and form-energy optimization
status: published
origin: pipeline
domain: mathematics
library: physics
dependency_level: 4
deps:
- def-axiom-of-choice
- thm-qsm-trace-cross-log-inequality
- thm-tdmath-general-trace-gibbs-model
- thm-tdmath-summable-canonical-differentiation
- thm-spectral-theorem-for-unbounded-self-adjoint-operators
- thm-bounded-borel-pvm-integral
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  thm-qsm-trace-cross-log-inequality: mathematical-premise
  thm-spectral-theorem-for-unbounded-self-adjoint-operators: mathematical-premise
  thm-bounded-borel-pvm-integral: mathematical-premise
  thm-tdmath-general-trace-gibbs-model: mathematical-premise
  thm-tdmath-summable-canonical-differentiation: mathematical-premise
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
  - title: J. W. Gibbs, Elementary Principles in Statistical Mechanics, Chapter IV, The Canonical Distribution
    url: https://www.gutenberg.org/files/50992/50992-pdf.pdf
    locator: Full 273-page Project Gutenberg text of the 1902 book; Chapter IV, printed pp. 35–40 (PDF pp. 55–60), equations
      (90)–(93) and the explicit finite-normalization condition.
  - title: Mehran Kardar, Statistical Mechanics I, MIT OpenCourseWare, Lecture 21, Quantum Microstates and Quantum Macrostates
    url: https://live.ocw.mit.edu/courses/8-333-statistical-mechanics-i-statistical-mechanics-of-particles-fall-2013/4f8defd6fcba707a0c691dd8957a43e3_MIT8_333F13_Lec21.pdf
---

## Statement

Assume the Axiom of Choice. Let $\mathcal H\ne\{0\}$ be a separable complex Hilbert space and $A=A^*$ a densely defined Hamiltonian bounded below by $a\in\mathbb R$. Assume $e^{-\beta A}$ is trace class for every $\beta$ in an open interval $I\subset(0,\infty)$. For each $\beta\in I$, put $Z_\beta=\operatorname{Tr}(e^{-\beta A})$ and $\rho_\beta=e^{-\beta A}/Z_\beta$. Then $Z_\beta\in(0,\infty)$ and $\rho_\beta$ is a faithful normal density. For the entropy and optimization clause, fix $k_B>0$ (in SI units J/K), put $T=(k_B\beta)^{-1}$ and $F_\beta=-\beta^{-1}\log Z_\beta$, and let $\rho$ be any normal density with finite spectral form energy
$
\mathcal E_A(\rho)=\int_{\mathbb R}\lambda\,d\mu_\rho(\lambda),\qquad
\int_{\mathbb R}|\lambda|\,d\mu_\rho(\lambda)<\infty.
$
Then $\rho$ has finite entropy and satisfies
$
\mathcal E_A(\rho)-TS(\rho)\geq F_\beta,
$
with equality exactly at $\rho=\rho_\beta$. The prepared Gibbs state also has
$
S(\rho_\beta)=k_B\bigl(\log Z_\beta+\beta\mathcal E_A(\rho_\beta)\bigr).
$
The trace-class and open-interval hypotheses are essential; a lower bound on $A$ alone does not imply finite $Z_\beta$.

## Facts & Assumptions

**Given:** The Axiom of Choice, the exact self-adjoint spectral PVM of $A$, trace-class $e^{-\beta A}$ on the open interval $I$, finite form energy of the competitor, and $k_B>0$ for the entropy and optimization clause.

[A1] [[def-axiom-of-choice]]: the full Axiom of Choice is assumed for the unbounded self-adjoint spectral theorem and the trace-Gibbs supplier.

[F1] [[thm-spectral-theorem-for-unbounded-self-adjoint-operators]] and [[thm-bounded-borel-pvm-integral]]: $A$ has its regular spectral PVM; bounded Borel functions of $A$ are defined by spectral integration, and the spectral moment law uses its actual form domain.

[F2] [[thm-tdmath-general-trace-gibbs-model]], fixed-$\beta$ clause: under AC, a nonzero Hilbert space, self-adjoint $A$ bounded below and trace-class $e^{-\beta A}$, its injective compact exponential yields a complete energy eigenbasis, $0<Z_\beta<\infty$ and a faithful normal density. Its interval moment clause is not used without the envelope proved below.

[F3] [[thm-tdmath-summable-canonical-differentiation]]: a nonempty finite/countable canonical model with energies $E_j$, weights $g_j=1$ and compact-$\beta$ summable $(1+E_j^2)e^{-\beta E_j}$ envelopes has twice differentiable $Z$, finite moments and $S=k_B(\log Z+\beta U)$.

[F4] [[thm-qsm-trace-cross-log-inequality]]: for finite cross-log moment, $D(\rho\|\sigma)\geq0$, and its equality case is $\rho=\sigma$.

## Proof

1.1 By [F2], $Z_\beta$ is finite and positive and $\rho_\beta$ is a faithful trace-class density with a complete eigenbasis $u_j$ of $A$, $Au_j=E_ju_j$, and eigenvalues $q_j=e^{-\beta E_j}/Z_\beta>0$. The spectral logarithm is $-\log\rho_\beta=\beta A+(\log Z_\beta)I$ on the corresponding spectral form domain. [given, A1, F1, F2]

1.2 Let $\rho=\sum_i p_i|v_i\rangle\langle v_i|$ be a normal density with the stated finite absolute form energy. Its cross-log moment against $\rho_\beta$ is $ C(\rho,\rho_\beta)=\sum_i p_i\sum_j|\langle v_i,u_j\rangle|^2(-\log q_j) =\beta\mathcal E_A(\rho)+\log Z_\beta, $ because $-\log q_j=\beta E_j+\log Z_\beta$, and the absolute first-moment hypothesis permits the signed sum. This value is finite. [given, F1, F2, algebra]

2.1 Let $K=[b,B]\subset I$ be compact and choose $\beta_0\in I$ with $\beta_0<b$. For $E\geq0$, the function $(1+E^2)e^{-(b-\beta_0)E}$ is bounded; for $a\leq E\leq0$, $(1+|E|^2)e^{-(\beta-\beta_0)E}$ is uniformly bounded over $\beta\in K$ by compactness. Thus for a finite $C_K$, $(1+|E_j|^2)e^{-\beta E_j}\leq C_K e^{-\beta_0E_j}$ for every $j$ and $\beta\in K$. The right side is summable because $Z_{\beta_0}<\infty$ by [F2]. This is the exact uniform moment envelope required by [F3]; applying that supplier yields finite energy, finite entropy, and $S(\rho_\beta)=k_B(\log Z_\beta+\beta U_\beta)$, with $U_\beta=\mathcal E_A(\rho_\beta)$. [step 1.1, F2, F3, algebra]

3.1 Since $\rho_\beta$ is faithful by [F2], $\operatorname{supp}\rho\subseteq\operatorname{supp}\rho_\beta$. Apply [F4] to step 1.2: $S(\rho)<\infty$ and $ \beta\mathcal E_A(\rho)+\log Z_\beta-\frac{S(\rho)}{k_B} =D(\rho\|\rho_\beta)\geq0, $ with equality exactly when $\rho=\rho_\beta$. Rearranging and using $T=(k_B\beta)^{-1}$, $F_\beta=-\beta^{-1}\log Z_\beta$ gives the claimed inequality and equality case. [step 1.2, F2, F4, algebra] ∎
