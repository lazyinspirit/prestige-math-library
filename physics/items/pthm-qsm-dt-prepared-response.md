---
id: pthm-qsm-dt-prepared-response
kind: physics-theorem
title: Conditional prepared finite quantum control response
status: published
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: physics
library: physics
dependency_level: 5
physical_scope: Exact prediction of the specified finite-dimensional isolated-control model under its adopted preparation, unitary-evolution, and Born-expectation postulates; it is not an observation, an apparatus validation, or evidence that the model describes nature.
deps:
  - def-axiom-of-choice
  - post-qsm-dt-physical-control
  - post-qsm-dt-isolated-model
  - thm-qsm-dt-finite-kubo
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  post-qsm-dt-physical-control: physical-assumption
  post-qsm-dt-isolated-model: physical-assumption
  thm-qsm-dt-finite-kubo: mathematical-premise
proof_strategy: direct
empirical_premises: []
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
    - title: Ryogo Kubo, Statistical-Mechanical Theory of Irreversible Processes I, Journal of the Physical Society of Japan 12 (1957), §2, printed pp. 572–575
      url: https://staff.ulsu.ru/moliver/ref/kubo/kubo57.pdf
    - title: "MIT OpenCourseWare 8.512, Theory of Solids II, Lecture 1: Linear Response Theory, §§1.1–1.2"
      url: https://ocw.mit.edu/courses/8-512-theory-of-solids-ii-spring-2009/0d1bb83b0e6471874b6c3e02aff52ad5_MIT8_512s09_lec01_rev2.pdf
---

## Statement

Assume the adopted finite isolated model and fixed-preparation control convention of [[post-qsm-dt-isolated-model]] and [[post-qsm-dt-physical-control]]. Let $T>0$ be finite in s, let $A=A^*$ be a bounded matrix observable, and set $\alpha_t(A)=e^{itH/\hbar}Ae^{-itH/\hbar}$ for time $t$ measured in s. Define
$$R_{AB}(u)=\frac{i}{\hbar}\operatorname{Tr}\!\left(\sigma[\alpha_u(A),B]\right),\qquad C_T=\frac2\hbar\int_0^T|h(s)|\,\|B\|\,ds.$$
Then for $0\le t\le T$ the model expectation obeys
$$\mathbb E_{\epsilon,t}[A]=\operatorname{Tr}(\sigma\alpha_t(A))+\epsilon\int_0^t h(s)R_{AB}(t-s)\,ds+r_\epsilon(t),\qquad |r_\epsilon(t)|\le\|A\|\frac{(|\epsilon|C_T)^2e^{|\epsilon|C_T}}2.$$
Here $H$ and $hB$ have unit J, $\hbar$ has unit J s, $t$ has unit s, $\beta$ has unit J$^{-1}$, and $\epsilon,C_T$ are dimensionless. This is a conditional model prediction for the adopted preparation and dynamics, not a claim that an observed finite dataset must equal the prediction.

## Facts & Assumptions

**Given:** The Axiom of Choice, the two adopted physical postulates, finite $T$, the matrix observable $A$, and the stated control $h,B$.

[A1] [[post-qsm-dt-isolated-model]]: the specified finite prepared state evolves as $\rho_t=U(t)\rho_0U(t)^*$ and the model expectation of bounded $A$ is $\operatorname{Tr}(\rho_tA)$.

[A2] [[post-qsm-dt-physical-control]]: the controlled generator is $H-\epsilon h(t)B$ on $[0,T]$ while the initial Gibbs matrix $\sigma$ remains fixed.

[F1] [[thm-qsm-dt-finite-kubo]]: for this fixed initial Gibbs density, the Heisenberg expectation has the displayed retarded commutator response and quadratic finite-time remainder.

[A3] [[def-axiom-of-choice]]: the full Choice convention is carried from the adopted normal-state measurement framework; no step below uses it to derive the finite matrix formula.

## Proof


**Proof technique:** conditional substitution of the adopted model inputs into the finite-time mathematical response theorem.

**Given:** [A1]–[A3], [F1], and the exact finite-dimensional matrices and controls in the Statement.

1.1 By [A1] and [A2], the initial state, controlled Hamiltonian, and model expectation are exactly the inputs used by [F1]; the control does not differentiate or replace the initial Gibbs matrix. The controlled density satisfies $\operatorname{Tr}(\rho_\epsilon(t)A)=\operatorname{Tr}(\rho_I(t)\alpha_t(A))$ by the finite trace identity in [F1]. Applying [F1] with this $A,B,h,\epsilon,T$ gives the stated convolution and remainder bound. [given, A1, A2, F1, algebra]


2.1 The equation is therefore a deduction within the adopted finite model, conditional on [A1] and [A2]. The full-Choice convention [A3] is inherited from the wider measurement framework, but the finite-matrix calculation in step 1.1 does not need it. The remainder is a mathematical bound; it supplies no measured response, apparatus reliability claim, or unconditional assertion about nature. [given, A1, A2, A3, step 1.1] ∎