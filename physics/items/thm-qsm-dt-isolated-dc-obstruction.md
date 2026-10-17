---
id: thm-qsm-dt-isolated-dc-obstruction
kind: theorem
title: Nonzero pure-point equilibrium covariance is not integrable
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: physics
dependency_level: 7
deps:
  - def-axiom-of-choice
  - thm-dominated-convergence
  - thm-qsm-dt-trace-gibbs-correlation-measure
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  thm-dominated-convergence: mathematical-premise
  thm-qsm-dt-trace-gibbs-correlation-measure: mathematical-premise
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
    - title: Ryogo Kubo, Statistical-Mechanical Theory of Irreversible Processes I, Journal of the Physical Society of Japan 12 (1957), §3, printed p. 575
      url: https://staff.ulsu.ru/moliver/ref/kubo/kubo57.pdf
    - title: "MIT OpenCourseWare 8.512, Theory of Solids II, Lecture 1: Linear Response Theory, §1.5"
      url: https://ocw.mit.edu/courses/8-512-theory-of-solids-ii-spring-2009/0d1bb83b0e6471874b6c3e02aff52ad5_MIT8_512s09_lec01_rev2.pdf
---

## Statement

Assume the Axiom of Choice and the trace-class Gibbs hypotheses of [[thm-qsm-dt-trace-gibbs-correlation-measure]] for a self-adjoint Hamiltonian $K$ in J with a complete discrete energy basis and faithful Gibbs density $\sigma_\beta$ at $\beta>0$ in J$^{-1}$. Let $\hbar>0$ be in J s, $t$ in s, and let $A=A^*$ be a nonzero bounded observable with $\operatorname{Tr}(\sigma_\beta A)=0$. Define
$$C_{AA}(t)=\operatorname{Tr}(\sigma_\beta U(t)^*AU(t)A),\qquad G_{AA}(t)=\operatorname{Re}C_{AA}(t),\qquad U(t)=e^{-itK/\hbar}.$$
Then neither $C_{AA}$ nor $G_{AA}$ belongs to $L^1([0,\infty))$. In particular, the ordinary absolutely convergent isolated-system correlation integral used in a dc Green–Kubo formula does not exist under these hypotheses. This claim concerns discrete-spectrum trace-Gibbs dynamics only; it asserts no failure of temporal decay or transport limits in an infinite-volume or open-system model.

## Facts & Assumptions

**Given:** The Axiom of Choice, a faithful trace-class Gibbs state with a complete energy eigenbasis, a nonzero bounded self-adjoint centered $A$, and $\hbar>0$.

[A1] [[def-axiom-of-choice]]: full Choice is assumed by the unbounded self-adjoint spectral theorem and trace-Gibbs supplier.

[F1] [[thm-qsm-dt-trace-gibbs-correlation-measure]]: for the Gibbs energy basis, $C_{AA}(t)$ has an absolutely summable atomic expansion with nonnegative weights $r_i|A_{ij}|^2$, whose total is $C_{AA}(0)=\sum_i r_i\|Au_i\|^2\le\|A\|^2$; $\sigma_\beta$ is faithful.

[F2] [[thm-dominated-convergence]]: on any measure space, pointwise convergence under an integrable majorant permits passage of limits through integrals.

## Proof


**Proof technique:** grouped pure-point frequencies have a nonzero mean-square limit, which contradicts absolute integrability.

**Given:** [A1], [F1], [F2], and the centered nonzero observable in the Statement.

1.1 Group the nonnegative coefficients in [F1] by equal frequency, writing $C_{AA}(t)=\sum_{\omega\in\Omega}w_\omega e^{-i\omega t}$ with $w_\omega\ge0$ and $\sum_\omega w_\omega=C_{AA}(0)=\operatorname{Tr}(\sigma_\beta A^2)$. This sum is strictly positive: in the complete energy basis, $\operatorname{Tr}(\sigma_\beta A^2)=\sum_i r_i\|Au_i\|^2$, every $r_i>0$, and $A\ne0$ prevents all $Au_i$ from vanishing. It is bounded by $\|A\|^2$ because each $\|Au_i\|^2\le\|A\|^2$ and $\sum_i r_i=1$. [given, A1, F1, algebra]


2.1 Absolute summability gives $\sum_{\omega,\nu}w_\omega w_\nu<\infty$ and allows termwise integration of $|C_{AA}(t)|^2$. For each pair, $T^{-1}\int_0^T e^{-i(\omega-\nu)t}dt$ tends to $1$ if $\omega=\nu$ and $0$ otherwise, and its modulus is at most $1$. Apply [F2] to the countable pair set with summable majorant $w_\omega w_\nu$; then $$\lim_{T\to\infty}\frac1T\int_0^T|C_{AA}(t)|^2dt=\sum_\omega w_\omega^2>0.$$ If $C_{AA}\in L^1([0,\infty))$, the left side is at most $\|A\|^2T^{-1}\int_0^T|C_{AA}(t)|dt\to0$, because step 1.1 gives $|C_{AA}(t)|\le\sum_\omega w_\omega\le\|A\|^2$. This contradiction proves $C_{AA}\notin L^1$. [given, F1, F2, step 1.1, algebra]


3.1 The real part has grouped nonnegative weights $g_\omega=(w_\omega+w_{-\omega})/2$, with absent frequencies assigned weight zero. They satisfy $\sum_\omega g_\omega=\sum_\omega w_\omega>0$ and $G_{AA}(t)=\sum_\omega g_\omega e^{-i\omega t}$. Repeating step 2.1 with $g_\omega$ gives $\lim_{T\to\infty}T^{-1}\int_0^TG_{AA}(t)^2dt=\sum_\omega g_\omega^2>0$. If $G_{AA}\in L^1$, then this average is at most $\|A\|^2T^{-1}\int_0^T|G_{AA}(t)|dt\to0$, again a contradiction. [F1, F2, step 1.1, step 2.1, algebra] ∎