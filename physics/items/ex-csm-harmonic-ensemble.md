---
id: ex-csm-harmonic-ensemble
kind: example
title: "Unpinned translation zero-mode divergence"
status: published
origin: pipeline
domain: physics
library: physics
dependency_level: 4
deps:
  - post-csm-examples-ensemble-preparations
  - def-countable-choice
  - thm-change-of-variables-for-compact-jordan-sets
  - thm-lebesgue-measure-of-a-box-of-every-kind
  - thm-jordan-measurable-sets-are-lebesgue-measurable-with-equal-content
  - thm-extreme-value-metric
  - prop-order-and-scalar-rules-for-the-nonnegative-integral
  - def-real-exponential-function-and-e
dependency_roles:
  post-csm-examples-ensemble-preparations: physical-assumption
  def-countable-choice: mathematical-premise
  thm-change-of-variables-for-compact-jordan-sets: mathematical-premise
  thm-lebesgue-measure-of-a-box-of-every-kind: mathematical-premise
  thm-jordan-measurable-sets-are-lebesgue-measurable-with-equal-content: mathematical-premise
  thm-extreme-value-metric: mathematical-premise
  prop-order-and-scalar-rules-for-the-nonnegative-integral: mathematical-premise
  def-real-exponential-function-and-e: mathematical-premise
physical_scope: "Finite periodic harmonic chain with no pinning; conditional on ACω for the declared Euclidean Lebesgue reference, the continuous translation zero mode makes the canonical partition function diverge."
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "David Tong, Statistical Physics, §2.2.1, quadratic degrees of freedom"
      url: "https://davidtong.org/pdfs/teaching/statistical-physics/statphys.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Example

Assume $\mathrm{AC}_\omega$ as defined in [[def-countable-choice]] for the Euclidean Lebesgue measure of the phase-space boxes below. Take $N\ge3$ resolved displacement coordinates $q_i\in\mathbb R$ in metres and momenta $p_i\in\mathbb R$ in kg m s$^{-1}$ on a periodic chain, with $q_{N+1}=q_1$, mass $m>0$ kg, spring stiffness $\kappa>0$ in J m$^{-2}$, and
$$H(q,p)=\sum_{i=1}^N\frac{p_i^2}{2m}+\frac{\kappa}{2}\sum_{i=1}^N(q_{i+1}-q_i)^2.$$
Adopt inverse temperature $\beta>0$ in J$^{-1}$ and fixed action reference $h_0=a_0>0$ in J s under [[post-csm-examples-ensemble-preparations]]. Because the coordinates are resolved, use the reference $dq\,dp/h_0^N$ with no particle-exchange factorial. Define the partition integral
$$Z:=\int_{\mathbb R^N\times\mathbb R^N}\exp(-\beta H(q,p))\,\frac{dq\,dp}{h_0^N},$$
where $\exp$ is the real exponential of [[def-real-exponential-function-and-e]]. The unpinned position integral is infinite, so this model has no normalized canonical probability on the full position space.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, the periodic-chain Hamiltonian, $m>0$ kg, $\kappa>0$ J m$^{-2}$, $\beta>0$ J$^{-1}$, $h_0=a_0>0$ J s, and the resolved-coordinate reference above.

[F1] [[post-csm-examples-ensemble-preparations]]: when $Z$ is finite and positive, the canonical density is $Z^{-1}\exp(-\beta H)$ relative to the chosen reference measure; the fixed action reference is part of the preparation, and resolved harmonic coordinates retain their declared labels without an added particle-exchange factorial.

[F2] Under $\mathrm{AC}_\omega$, Lebesgue measure of a box is its product volume, and a bounded Jordan measurable set has Lebesgue measure equal to its Jordan content ([[thm-lebesgue-measure-of-a-box-of-every-kind]], [[thm-jordan-measurable-sets-are-lebesgue-measurable-with-equal-content]]).

[F3] A $C^1$ diffeomorphism with nonzero Jacobian transforms Riemann integrals on compact Jordan sets by the absolute determinant ([[thm-change-of-variables-for-compact-jordan-sets]]).

[F4] Every continuous real function on a nonempty compact metric space is bounded and attains a finite maximum ([[thm-extreme-value-metric]]).

[F5] The nonnegative Lebesgue integral is monotone under pointwise ordering ([[prop-order-and-scalar-rules-for-the-nonnegative-integral]]).

[A1] The example adopts the displayed unpinned periodic-chain Hamiltonian and full $\mathbb R^N$ displacement domain.

## Verification
1.1 Put $r_1:=0$ and use coordinates $u:=q_1$, $r_i:=q_i-q_1$ for $2\le i\le N$. The linear bijection $(u,r_2,\ldots,r_N)\mapsto(q_1,\ldots,q_N)=(u,u+r_2,\ldots,u+r_N)$ has determinant $1$. With $r_{N+1}:=r_1$, every periodic difference satisfies $q_{i+1}-q_i=r_{i+1}-r_i$, so the potential is independent of $u$; the momentum term is also independent of $u$. On each compact coordinate box the change-of-variables supplier [F3] therefore gives the phase-volume Jacobian $1$. [given, A1, F3, algebra]



2.1 Under the declared reference convention [F1], choose any compact coordinate box $C$ of positive volume in $(r_2,\ldots,r_N,p)$. The Hamiltonian is continuous and hence bounded above on $C$ by a finite $H_C$ by [F4]. By [F2], $C$ has Lebesgue measure $\operatorname{vol}(C)$. On $u\in[-R,R]$ and $(r,p)\in C$, the integrand is at least $e^{-\beta H_C}$; the determinant-one map in step 1.1 and [F2] show this slab contributes at least $2R e^{-\beta H_C}\operatorname{vol}(C)/h_0^N$ to the partition integral by [F5]. This lower bound is unbounded as $R\to\infty$, so $Z=\infty$ and no normalization exists. [F1, F2, F4, F5, step 1.1, algebra] ∎

## Remarks

This calculation identifies a translation zero mode. It makes no claim about separately confined or pinned models.

