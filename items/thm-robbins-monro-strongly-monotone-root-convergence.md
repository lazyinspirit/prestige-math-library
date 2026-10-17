---
id: thm-robbins-monro-strongly-monotone-root-convergence
kind: theorem
title: "Robbins–Monro converges almost surely for a strongly monotone root"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-stochastic-gradient-oracle-and-unconstrained-update
  - lem-robbins-siegmund-almost-supermartingale
  - thm-taking-out-what-is-known
  - thm-basic-algebra-and-order-properties-of-conditional-expectation
  - def-axiom-of-choice
  - def-euclidean-inner-product
  - thm-cauchy-schwarz-and-the-euclidean-norm
  - thm-induction-principle
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Léon Bottou, Frank E. Curtis, and Jorge Nocedal, Optimization Methods for Large-Scale Machine Learning, SIAM Review 60(2) (2018), §4.2"
      url: "https://leon.bottou.org/publications/pdf/tr-optml-2016.pdf"
      locator: "§4.2, the square-summable/nonsummable stepsize discussion and strongly convex diminishing-step theorem"
    - title: "Dimitri P. Bertsekas, Convex Optimization Algorithms, Appendix A, Proposition A.4.5"
      url: "https://web.mit.edu/dimitrib/www/Appendix_A_NEW_ALG.pdf"
      locator: "Appendix A, Proposition A.4.5; the local Robbins–Siegmund proof is supplied from the library Doob interface"
---

## Statement

Assume the Axiom of Choice. Let $h:\mathbb R^d\to\mathbb R^d$ have a root $x^\ast$, so $h(x^\ast)=0$, and suppose that for some $\mu>0$,
$$\langle h(x)-h(y),x-y\rangle\ge\mu\|x-y\|_2^2\qquad(x,y\in\mathbb R^d).$$
On a filtered probability space, let $x_0$ be square-integrable and let $x_k,G_k$ follow [[def-stochastic-gradient-oracle-and-unconstrained-update]]. Assume each $h(x_k)$ is $\mathcal F_k$-measurable, and suppose
$$\mathbb E[G_k\mid\mathcal F_k]=h(x_k),\qquad \mathbb E[\|G_k\|_2^2\mid\mathcal F_k]\le M^2$$
almost surely for a finite constant $M$. If the deterministic stepsizes satisfy $\alpha_k>0$, $\sum_k\alpha_k=\infty$, and $\sum_k\alpha_k^2<\infty$, then $x_k\to x^\ast$ almost surely. Strong monotonicity also makes the root unique.

## Facts & Assumptions

**Given:** AC, the update and filtration in the Statement, a root $x^\ast$, the strong-monotonicity inequality, square-integrable $x_0$, and the stated conditional oracle bounds.

[A1] [[def-axiom-of-choice]]: AC is assumed for the conditional-expectation and Doob interfaces.

[F1] [[def-stochastic-gradient-oracle-and-unconstrained-update]]: $x_{k+1}=x_k-\alpha_kG_k$, $x_k$ is $\mathcal F_k$-measurable, $G_k$ is $\mathcal F_{k+1}$-measurable, vector conditional expectations are coordinatewise almost-sure classes, and $\mathbb E[\|G_k\|_2^2\mid\mathcal F_k]=\|\mathbb E[G_k\mid\mathcal F_k]\|_2^2+\operatorname{Var}(G_k\mid\mathcal F_k)$ with nonnegative conditional variance.

[F2] [[lem-robbins-siegmund-almost-supermartingale]]: if $V_k$ is nonnegative adapted integrable and $\mathbb E[V_{k+1}\mid\mathcal F_k]\le V_k-b_k+c_k$ with $b_k\ge0$ predictable and $\sum c_k<\infty$, then $V_k$ converges almost surely and $\sum b_k<\infty$ almost surely.

[F3] [[thm-taking-out-what-is-known]]: a finite $\mathcal F_k$-measurable factor may be taken outside conditional expectation when the input and products are integrable.

[F4] [[thm-basic-algebra-and-order-properties-of-conditional-expectation]]: conditional expectation is linear, preserves order, and preserves ordinary expectation.

[F5] [[def-euclidean-inner-product]]: $\|u\|_2^2=\langle u,u\rangle$ and the real inner product is symmetric.

[F6] [[thm-cauchy-schwarz-and-the-euclidean-norm]]: $|\langle u,v\rangle|\le\|u\|_2\|v\|_2$.

[F7] [[thm-induction-principle]]: a property true at the first index and inherited by each successor holds at every natural index.

## Proof

1.1 Write $V_k=\|x_k-x^\ast\|_2^2$. By [F6] and $(\sqrt\mu\|u\|_2-\|v\|_2/\sqrt\mu)^2\ge0$, $2|\langle u,v\rangle|\le\mu\|u\|_2^2+\mu^{-1}\|v\|_2^2$. The update therefore gives $V_{k+1}\le(1+\mu\alpha_k)V_k+(\alpha_k/\mu+\alpha_k^2)\|G_k\|_2^2.$ By [F4], the conditional moment bound implies $\mathbb E\|G_k\|_2^2\le M^2$. Using [F1] and nonnegativity of conditional variance gives $\mathbb E[\|h(x_k)\|_2^2]\le M^2$. Thus [F7] and induction from square-integrable $x_0$ show every $V_k$ is integrable; Cauchy–Schwarz makes the products of $x_k-x^\ast$ with both $G_k$ and $h(x_k)$ integrable. [F1, F4, F5, F6, F7, given, algebra, induction]

2.1 Strong monotonicity with $y=x^\ast$ gives $\langle h(x_k),x_k-x^\ast\rangle\ge\mu V_k$. Expanding the update and using [F3] to take out $x_k-x^\ast$, then [F4] for the conditional mean and moment, yields $\mathbb E[V_{k+1}\mid\mathcal F_k]\le V_k-2\mu\alpha_kV_k+M^2\alpha_k^2.$ The products are integrable by step 1.1. [A1, F1, F3, F4, F5, given, step 1.1, algebra]

3.1 Step 2.1 supplies the conditional inequality required by [F2]. Apply it with $a_k=0$, $b_k=2\mu\alpha_kV_k$, and $c_k=M^2\alpha_k^2$. Step 1.1 gives the required integrability, and the stepsize hypotheses make $b_k$ predictable and $c_k$ summable. Hence $V_k$ converges almost surely and $\sum_k\alpha_kV_k<\infty$ almost surely. [A1, F2, step 1.1, step 2.1, given]

4.1 If the almost-sure limit of $V_k$ were positive, then eventually $V_k$ would be bounded below by half that limit, contradicting $\sum_k\alpha_kV_k<\infty$ and $\sum_k\alpha_k=\infty$. Thus $V_k\to0$ and $x_k\to x^\ast$ almost surely. If $x'$ were another root, the strong-monotonicity inequality at $(x^\ast,x')$ would give $0\ge\mu\|x^\ast-x'\|_2^2$, hence $x'=x^\ast$. [F2, step 3.1, given, algebra] ∎

