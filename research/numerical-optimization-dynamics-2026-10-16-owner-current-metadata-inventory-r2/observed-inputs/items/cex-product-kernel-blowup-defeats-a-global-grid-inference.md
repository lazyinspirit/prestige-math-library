---
id: cex-product-kernel-blowup-defeats-a-global-grid-inference
kind: counterexample
title: Finite-grid mass conservation does not bound the product-kernel continuum second moment
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - thm-finite-sectional-positivity-and-mass-reservoir-conservation
  - thm-product-kernel-pre-gelation-second-moment-blowup
justified_by: []
proof_strategy: direct
axiom_use: No choice principle is used; the finite-grid states and the continuum moment formula are explicit.
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: Philippe Laurençot, Weak compactness techniques and coagulation equations, §§1 and 3.3
      url: https://arxiv.org/pdf/1801.08312
    - title: Jacek Kumar, Numerical approximations of population balance equations in particulate systems, Chapter 2, §2.2
      url: https://www.iitrpr.ac.in/jkumar/pub/Kumar_Dissertation_web.pdf
---

## Statement

For every cutoff $N$, the finite state $n_N=1/N$ at the sole occupied size $N$ has mass $1$ and second moment $N$. Hence finite-grid mass conservation alone yields no second-moment bound uniform in the cutoff. Separately, the infinite product-kernel solution from [[thm-product-kernel-pre-gelation-second-moment-blowup]] has conserved first moment $1$ but $M_2(t)=1/(1-t)\to\infty$ as $t\uparrow1$. Thus finite-grid augmented-mass conservation does not prove a global continuum second-moment estimate or rule out gelation for a superlinear kernel.

## Facts & Assumptions

**Given:** The finite sectional mass identity and the product-kernel pre-gelation solution.

[F1] [[thm-finite-sectional-positivity-and-mass-reservoir-conservation]]: finite sectional event dynamics conserve retained-plus-reservoir mass exactly.

[F2] [[thm-product-kernel-pre-gelation-second-moment-blowup]]: for the product kernel, $M_1(t)=1$ and $M_2(t)=1/(1-t)$ on $0\le t<1$.

## Proof

1.1 On a grid with top pivot $N$, the state with $n_N=1/N$ and all other retained coordinates zero has first moment $N(1/N)=1$ and second moment $N^2(1/N)=N$. Its reservoir may be zero, so the conserved augmented mass is $1$. As $N$ increases these admissible mass-one states have unbounded second moment, proving the finite mass identity alone gives no cutoff-independent moment bound. [given, F1, algebra]

2.1 The continuum product-kernel solution in [F2] has $M_2(t)=1/(1-t)$, which diverges at the finite time $1$ while its first moment remains $1$. The kernel $K(x,y)=xy$ is superlinear and unbounded, outside the bounded-kernel global theorem's hypotheses; therefore this example warns against inferring continuum mass-conserving global moment control from finite-grid conservation. [given, F2, algebra] ∎

## Remark

Laurençot's full-text lecture notes separately state a post-gel mass-loss theorem for nontrivial weak solutions with $K(x,y)\ge\kappa(xy)^{\lambda/2}$, $\lambda\in(1,2]$, under the solution hypotheses there (Theorem 3.13, §3.3); that source result is contextual and is not used to prove the pre-gelation formula here. Kumar's dissertation reports fixed-pivot moment deviations from analytical product-kernel comparisons near gelation in its numerical examples (Chapter 3, §3.2.2); this is a numerical warning, not a substitute for the local proof above. ([Laurençot, §§3.3](https://arxiv.org/pdf/1801.08312); [Kumar, Chapter 3](https://www.iitrpr.ac.in/jkumar/pub/Kumar_Dissertation_web.pdf))
