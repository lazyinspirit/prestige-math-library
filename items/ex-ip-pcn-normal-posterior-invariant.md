---
id: ex-ip-pcn-normal-posterior-invariant
kind: example
title: A Gaussian pCN kernel leaves a normal posterior invariant
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 6
deps:
  - alg-ip-prior-preserving-crank-nicolson
  - def-axiom-of-choice
  - def-standard-normal-and-normal-laws
  - lem-normal-location-scale-density
  - thm-ip-pcn-posterior-invariance
  - thm-normal-normal-conjugate-update
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
axiom_use: "AC is inherited from the normal-law and pCN interfaces; no additional choice is used in the calculation."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "MIT 18.05, Spring 2022, Class 15: Conjugate priors: Beta and normal"
      url: "https://ocw.mit.edu/courses/18-05-introduction-to-probability-and-statistics-spring-2022/mit18_05_s22_class15-prep.pdf"
      locator: "§§6–7, pp. 5–7: normal-normal updating with known observation variance, precision-weighted posterior parameters, and a worked completion-of-square example."
    - title: "S. L. Cotter, G. O. Roberts, A. M. Stuart, and D. White, MCMC Methods for Functions: Modifying Old Algorithms to Make Them Faster, Statistical Science 28(3) (2013)"
      url: "https://eprints.maths.manchester.ac.uk/2215/1/1202.0709v3.pdf"
      locator: "§4.2, equation (4.7), pCN proposal and potential-ratio acceptance."
---

## Example

Assume the Axiom of Choice. Let $H=\mathbb R$, give the unknown parameter $u$ the prior law
$\mu_0=N(0,1)$, and observe one datum $Y=0$ from the model
$Y\mid u\sim N(u,1)$. The Gaussian conjugate update gives posterior
$\mu=N(0,1/2)$. Use the potential $\Phi(u)=u^2/2$ in the pCN algorithm. For
$\beta\in[0,1]$, write $\rho=\sqrt{1-\beta^2}$, propose
$v=\rho u+\beta\xi$ with $\xi\sim N(0,1)$ independent of the current
state, and accept with probability
$$\alpha(u,v)=\min\{1,\exp((u^2-v^2)/2)\}.$$
The resulting pCN probability kernel leaves $N(0,1/2)$ invariant for every
$\beta\in[0,1]$.

## Example references

[[thm-normal-normal-conjugate-update|A normal prior and one normal observation with known variance give a normal posterior by the precision update.]]

[[alg-ip-prior-preserving-crank-nicolson|The proposal combines the current state with an independent Gaussian reference draw and accepts by the potential ratio.]]

[[thm-ip-pcn-posterior-invariance|A proper pCN posterior target is invariant under its accept-reject kernel.]]

## Facts & Assumptions

**Given:** The Axiom of Choice, the one-observation normal model and pCN rule in the Example.

[F1] For prior $N(\mu_0,\tau_0^2)$ and one observation from $N(u,\sigma^2)$, the posterior mean is $(\tau_0^{-2}+\sigma^{-2})^{-1}(\mu_0/\tau_0^2+y/\sigma^2)$ and the posterior variance is $(\tau_0^{-2}+\sigma^{-2})^{-1}$; evidence is finite and positive. [[thm-normal-normal-conjugate-update]]

[F2] The law $N(m,1)$ has density $(2\pi)^{-1/2}\exp(-(y-m)^2/2)$ with respect to Lebesgue measure. [[def-standard-normal-and-normal-laws]] [[lem-normal-location-scale-density]]

[F3] The pCN rule proposes $v=\rho u+\beta\xi$ and accepts with probability $\min\{1,\exp(\Phi(u)-\Phi(v))\}$ for finite potential values. [[alg-ip-prior-preserving-crank-nicolson]]

[F4] The pCN accept-reject probability kernel leaves its normalized posterior target invariant. [[thm-ip-pcn-posterior-invariance]]

## Proof

**Given:** The Axiom of Choice, prior $N(0,1)$, observation variance $1$, datum $y=0$, and potential $\Phi(u)=u^2/2$.

1.1 Apply [F1] with $\mu_0=0$, $\tau_0^2=1$, $\sigma^2=1$, $n=1$, and $y=0$. The posterior variance is $(1+1)^{-1}=1/2$, and its mean is $(1+1)^{-1}(0+0)=0$. The evidence is finite and positive, so the posterior is the proper law $N(0,1/2)$. [F1, given, algebra]

2.1 By [F2], the likelihood density at $y=0$ is $(2\pi)^{-1/2}e^{-u^2/2}$. Its constant factor cancels when the likelihood is normalized against the prior, so the potential $\Phi(u)=u^2/2$ gives exactly the posterior from step 1.1. It is finite on $D=H=\mathbb R$, and the pCN target assumptions are satisfied. [F2, step 1.1, given, algebra]

3.1 For the proposal in [F3], $$\Phi(u)-\Phi(v)=\frac{u^2-v^2}{2},$$ so the stated acceptance probability is precisely the algorithm's pCN acceptance rule for this target. [F3, step 2.1, given, algebra]

4.1 Step 1.1 identifies the normalized target, and step 3.1 identifies the kernel as the pCN accept-reject kernel for that target. Applying [F4] proves that $N(0,1/2)$ is invariant for every $\beta\in[0,1]$. [F4, step 1.1, step 3.1, given] ∎
