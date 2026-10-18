---
id: def-it-two-user-real-awgn-mac-code
kind: definition
title: Two-user real AWGN multiple-access channel and no-feedback code
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps: [thm-gaussian-integral, thm-substitution, thm-of-square-roots, thm-tonelli-theorem-for-sigma-finite-product-spaces]
justified_by: []
proof_strategy: direct
axiom_use: No choice axiom is used; finite message sets and finite-dimensional Gaussian densities suffice.
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Thomas M. Cover and Joy A. Thomas, Elements of Information Theory, 2nd ed., Chapter 15, §15.3
      url: https://pages.hmc.edu/ruye/book2/ElementsofInformationTheory.pdf
    - title: Abbas El Gamal and Young-Han Kim, Network Information Theory, Lecture Notes 4, Gaussian and discrete MACs
      url: https://arxiv.org/pdf/1001.3404v3
---

## Definition

Fix powers $P_1,P_2\ge0$ and noise variance $N>0$. At use $i$ the real channel is
$$Y_i=X_{1i}+X_{2i}+Z_i,$$
where the noises are independent of the messages and of one another, each with Lebesgue density $\phi_N(z)=(2\pi N)^{-1/2}e^{-z^2/(2N)}$. The Gaussian integral proves this density has mass one. A length-$n$ no-feedback code has independent uniform messages $M_j\in[M_j]$, separate deterministic encoders $f_j:[M_j]\to\mathbb R^n$, and a joint decoder $g:\mathbb R^n\to[M_1]\times[M_2]$. Write $X_j^n=f_j(M_j)$. Its average joint error is $P_e=\Pr[g(Y^n)\ne(M_1,M_2)]$ and its expected block-power constraints are $n^{-1}\sum_i\mathbb E X_{ji}^2\le P_j$, separately for $j=1,2$. The rate is $R_j=n^{-1}\ln M_j$ nats/use. Achievability means a sequence with error tending to zero and limiting lower rates at least the specified pair; the capacity region is the closure of all achievable pairs.

## Facts & Assumptions

**Given:** $P_1,P_2\ge0$, $N>0$, independent finite uniform messages and fresh independent Gaussian noises.

[F1] [[thm-gaussian-integral]]: $\int_{-\infty}^{\infty}e^{-x^2}\,dx=\sqrt\pi$.

[F2] [[thm-substitution]]: for a differentiable substitution with integrable derivative and continuous integrand, the oriented integral changes by the derivative factor.

[F3] [[thm-of-square-roots]]: each nonnegative real has a unique nonnegative square root.

[F4] [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]: a nonnegative measurable function on a sigma-finite product has equal iterated and product integrals.

## Proof

1.1 By scaling $x=\sqrt{2N}\,t$ in the Gaussian integral [F1, F2, F3], the density $(2\pi N)^{-1/2}e^{-x^2/(2N)}$ integrates to one. [given, F1, F2, F3, algebra]

2.1 Tonelli's theorem [F4] gives the product density $\prod_{i=1}^n(2\pi N)^{-1/2}e^{-z_i^2/(2N)}$ total mass one; its coordinates are independent and have the required Gaussian law. [F4, step 1.1, algebra]

3.1 The finite message sets, deterministic maps and channel law define a joint distribution; the displayed expected costs and error probability are therefore well-defined, and the closure convention specifies the operational region. [given, step 2.1, algebra] ∎

