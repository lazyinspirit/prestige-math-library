---
id: ex-ip-biased-pde-solver-posterior-error
kind: example
title: A biased forward solve shifts a Gaussian posterior
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 2
deps:
  - def-axiom-of-choice
  - def-ip-posterior-computation-error-budget
  - def-probability-measure
  - def-standard-normal-and-normal-laws
  - prop-ip-bounded-posterior-functional-error
justified_by: []
forward_refs: []
proof_strategy: direct
axiom_use: >-
  AC is assumed by the library normal-law interface. Once the prior and
  likelihood densities are specified, the completion-of-square and expectation
  calculations are choice-free.
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
---

## Example

Let the scalar parameter $u$ have prior density
$$p_0(u)=(2\pi)^{-1/2}e^{-u^2/2},$$
and observe $y=0$ with unit-variance Gaussian noise. The exact forward map is
$G(u)=u$, while a deliberately biased numerical forward/PDE solver reports
$\widetilde G(u)=u+2$. At $y=0$, use likelihoods
$L(u)=\exp(-G(u)^2/2)$ and
$\widetilde L(u)=\exp(-\widetilde G(u)^2/2)$; the common Gaussian density
constant cancels when normalizing. Define each fixed-data posterior by
normalizing the prior times its stated likelihood. The exact posterior is
$N(0,1/2)$ and the solver posterior is $N(-1,1/2)$. For the bounded functional
$f(u)=\mathbf 1_{(-\infty,0]}(u)$, their expectations are respectively
$$\Pi(f)=\tfrac12,\qquad \widetilde\Pi(f)=\Phi_0(\sqrt2)>\tfrac12,$$
where
$$\Phi_0(t):=\int_{-\infty}^{t}(2\pi)^{-1/2}e^{-z^2/2}\,dz.$$
The discrepancy is in the forward-solver stage of the posterior error budget;
this toy solver assumption makes no claim about the bias of any general PDE
discretization.

## Example references

[[def-ip-posterior-computation-error-budget|The model, forward-solver, and discretization stages of the error budget.]]

[[def-standard-normal-and-normal-laws|The standard normal density and affine normal laws.]]

[[prop-ip-bounded-posterior-functional-error|Bounded expectations differ by at most $2\|f\|_\infty$ times library total variation.]]

## Facts & Assumptions

**Given:** The prior density, the exact and solver forward maps, the unit-variance observation noise, and the normalized prior-times-likelihood posterior convention in the Example.

[F1] The error-budget solver term compares the exact-model posterior expectation with the posterior expectation obtained from the declared numerical forward solve. [[def-ip-posterior-computation-error-budget]]

[F2] The standard normal density is $(2\pi)^{-1/2}e^{-z^2/2}$, and $N(m,s^2)$ is its affine image $m+sZ$ for $s>0$. [[def-standard-normal-and-normal-laws]]

[A1] AC is assumed by the library standard-normal law interface. [[def-axiom-of-choice]]

[F3] For a bounded measurable functional, the expectation difference is at most $2\|f\|_\infty$ times the event-supremum total variation distance. [[prop-ip-bounded-posterior-functional-error]]

## Verification

1.1 With the likelihoods stated in the Example, the exact prior-times-likelihood product is $(2\pi)^{-1/2}e^{-u^2}$. The substitution $z=\sqrt2u$ and the normalized standard-normal integral in [F2] give $\int_{\mathbb R}e^{-u^2}\,du=\sqrt\pi$, so this product has normalizing integral $(2\pi)^{-1/2}\sqrt\pi=1/\sqrt2$. Its normalized density is therefore $\pi^{-1/2}e^{-u^2}$, which is $N(0,1/2)$ by [F2]. For the solver output, the prior-times-likelihood product is
$$ (2\pi)^{-1/2}e^{-u^2/2-(u+2)^2/2}=(2\pi)^{-1/2}e^{-(u+1)^2-1};$$
its normalizing integral is $(2\pi)^{-1/2}e^{-1}\sqrt\pi=e^{-1}/\sqrt2$, and its normalized density is $\pi^{-1/2}e^{-(u+1)^2}=N(-1,1/2)$ by [F2]. [A1, F2, given, algebra]

2.1 The exact density is symmetric about zero, so its mass on $(-\infty,0]$ is $1/2$. Under the solver density, $Z=\sqrt2(U+1)$ is standard normal, and $U\le0$ is equivalent to $Z\le\sqrt2$; hence $\widetilde\Pi(f)=\Phi_0(\sqrt2)$. The standard normal density is positive and symmetric, so $\Phi_0(\sqrt2)>\Phi_0(0)=1/2$. [F2, step 1.1, given, algebra]

3.1 In the error ledger set $\mu_\star=\mu_{\rm model}=\Pi$ and $\mu_{\rm solver}=\mu_{\rm disc}=\widetilde\Pi$; then the solver-stage term is $\delta_{\rm solver}=\Phi_0(\sqrt2)-1/2$ and the model and discretization terms vanish. Since $\|f\|_\infty=1$, [F3] also gives $\delta_{\rm solver}\le2\|\Pi-\widetilde\Pi\|_{\rm TV}$. [F1, F3, step 2.1, algebra] ∎
