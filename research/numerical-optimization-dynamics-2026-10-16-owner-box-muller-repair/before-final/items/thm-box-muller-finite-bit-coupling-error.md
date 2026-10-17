---
id: thm-box-muller-finite-bit-coupling-error
kind: theorem
title: "Certified finite-bit Box–Muller has explicit BL and W1 error"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - alg-box-muller-finite-bit-transform
  - thm-midpoint-bit-stream-coupling-and-error
  - lem-box-muller-product-density-and-radius-moment
  - cor-cauchy-schwarz-for-random-variables
  - def-total-variation-distance-for-probability-laws
  - def-countable-choice
  - def-dependent-choice
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Luc Devroye, Non-Uniform Random Variate Generation, Chapter V §4.4"
      url: "https://luc.devroye.org/chapter_five.pdf"
    - title: "E. M. Raz, Lecture Notes in Probability, Chapter 5, Exercise 5.2"
      url: "https://ma.huji.ac.il/~razk/Teaching/LectureNotes/LectureNotesProbability.pdf"
---

## Statement

Let $b\ge1$, $\delta_b=2^{-b-1}$, and $0<\delta$ with $\delta+\delta_b\le1$. Form the exact Box–Muller vector from the same ideal uniforms, assigning $Z=(0,0)$ when $U_1=0$ so the null endpoint is defined. Run [[alg-box-muller-finite-bit-transform]] with successful deterministic evaluators whose reported bounds are $\eta_\ell,\eta_s,\eta_t$. Put
$$R_\delta=\sqrt{2\log(1/\delta)},\quad R_b=\sqrt{2(b+1)\log2},\quad p=\delta+\delta_b,$$
$$e=\sqrt{\frac{2\delta_b}{\delta}}+2\pi R_\delta\delta_b+
\bigl(\sqrt{2\eta_\ell}+\eta_s\bigr)(1+\eta_t)+R_\delta\eta_t.$$
For the exact ideal Box–Muller vector $Z$ and the computed midpoint output $\widehat Z$, the bounded-Lipschitz distance, defined by the supremum over functions with supremum norm and Lipschitz constant at most $1$, is at most $e+2p$. The 1-Wasserstein distance, defined as the infimum of $\mathbb E\|X-Y\|_2$ over couplings, is at most
$$e+\sqrt{2p}+(R_b+\eta_r)(1+\eta_t),\qquad \eta_r=\sqrt{2\eta_\ell}+\eta_s.$$
The finite-bit output has finite support and bounded radius, so its total-variation distance from the continuous law with density $(2\pi)^{-1}e^{-(x^2+y^2)/2}$ is $1$, where total variation is $\sup_A|\mu(A)-\nu(A)|$. These bounds do not assert exact Gaussian output.

## Facts & Assumptions

**Given:** The bit budget, $\delta$, the certified evaluator bounds, and the exact/finite procedures in the Statement.

[F1] Coupling a bit-stream uniform to its $b$-bit midpoint gives coordinate error at most $\delta_b$. [[thm-midpoint-bit-stream-coupling-and-error]]

[F2] The exact Box–Muller vector has product Gaussian density, radial tail $e^{-r^2/2}$, and $\mathbb E\|Z\|_2^2=2$. [[lem-box-muller-product-density-and-radius-moment]]

[F3] For square-integrable random variables, Cauchy–Schwarz bounds $\mathbb E[|XY|]$ by the product of their $L^2$ norms. [[cor-cauchy-schwarz-for-random-variables]]

[F4] The finite transform calls return $\widehat r,\widehat t$ with the exact error certificates stated in their Definition. [[alg-box-muller-finite-bit-transform]]

[F5] Total variation between probability laws is the supremum of event-probability differences. [[def-total-variation-distance-for-probability-laws]]

[A1] The fair-bit product probability model requires Countable Choice and Dependent Choice. [[def-countable-choice]], [[def-dependent-choice]]

[A2] The exact Box–Muller law uses Countable Choice for Borel change of variables and the null-axis calculation. [[def-countable-choice]]

## Proof

1.1 Couple each ideal uniform input $U_j$ to its midpoint $U_{j,b}$ using the same bits. On the event $G=\{U_1\ge\delta+\delta_b\}$, both $U_1$ and $U_{1,b}$ are at least $\delta$. The mean-value theorem for $\log$ gives $|\log U_1-\log U_{1,b}|\le\delta_b/\delta$. Since $|\sqrt x-\sqrt y|\le\sqrt{|x-y|}$ for $x,y\ge0$, the radial change before evaluator error is at most $\sqrt{2\delta_b/\delta}$. The angular unit vector changes by at most $2\pi|U_2-U_{2,b}|\le2\pi\delta_b$, and the midpoint radius is at most $R_\delta$. Thus the exact transform difference on $G$ is at most $\sqrt{2\delta_b/\delta}+2\pi R_\delta\delta_b$. [given, F1, A1, A2, algebra]

2.1 The evaluator perturbation satisfies $\|\widehat r\,\widehat t-r_b t_b\|_2\le|\widehat r-r_b|\|\widehat t\|_2+r_b\|\widehat t-t_b\|_2\le\eta_r(1+\eta_t)+R_\delta\eta_t$, using [F4] and $\|t_b\|_2=1$. Combining with step 1.1 gives $\|Z-\widehat Z\|_2\le e$ on $G$. [F4, step 1.1, algebra]

3.1 Since $U_1$ is uniform by [F1], $\mathbb P(G^c)=p$. For every bounded-Lipschitz test function the difference on $G$ is at most $e$, and on $G^c$ it is at most $2$. Taking expectations and then the supremum gives $d_{\rm BL}(\mathcal L(Z),\mathcal L(\widehat Z))\le e+2p$. [F1, A1, step 2.1, algebra]

3.2 By [F2], $\mathbb E\|Z\|_2^2=2$, so [F3] gives $\mathbb E[\|Z\|_2\mathbf1_{G^c}]\le\sqrt{2p}$. The smallest midpoint is $2^{-b-1}$, hence every exact midpoint radius is at most $R_b$; [F4] gives $\|\widehat Z\|_2\le(R_b+\eta_r)(1+\eta_t)$. Therefore the expected coupled error is at most $e+\sqrt{2p}+(R_b+\eta_r)(1+\eta_t)$, which bounds $W_1$. [F2, F3, F4, A1, A2, step 2.1]

4.1 There are only $2^{2b}$ possible pairs of bit blocks, so $\widehat Z$ is supported on a finite set. The exact Gaussian law has a density and assigns that set probability zero; by [F5], the distance is $1$. The radius bound in step 3.2 proves bounded support. [F2, F4, F5, A1, A2, step 3.2] ∎
