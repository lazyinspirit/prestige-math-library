---
id: thm-dominated-state-space-filtering-recursion
kind: theorem
title: Exact state-space filtering recursion under dominated observations
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 2
deps:
  - def-axiom-of-choice
  - def-state-space-filtering-laws
  - alg-recursive-bayesian-filter
  - thm-state-space-filtering-and-smoothing-laws-exist
  - def-measure-kernel-and-probability-kernel
  - def-general-state-space-model-by-kernels
  - thm-finite-horizon-state-space-kernel-law-exists-uniquely
  - thm-conditional-integration-through-a-regular-conditional-law
  - thm-measurability-of-integration-against-a-kernel
  - thm-bayes-formula-for-dominated-kernels
  - thm-monotone-convergence-for-the-integral
  - def-product-sigma-algebra-and-finite-product-sigma-algebras
  - thm-dynkin-pi-lambda
  - def-law-or-distribution-of-a-random-element
  - thm-change-of-variables-for-expectation
proof_strategy: direct
axiom_use: "Assume AC to use the data-indexed conditional kernels supplied by the RCD existence and factorization result. Once a predictive probability kernel is supplied, the dominated Bayes update and its zero/infinite-fiber filler require no additional choice."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Simo Särkkä and Lennart Svensson, Bayesian Filtering and Smoothing, 2nd ed., Chapter 6"
      url: "https://users.aalto.fi/~ssarkka/pub/bfs_book_2023_online.pdf"
    - title: "Arnaud Doucet and Adam M. Johansen, A Tutorial on Particle Filtering and Smoothing: Fifteen Years Later, §§2.1–2.3"
      url: "https://www.stats.ox.ac.uk/~doucet/doucet_johansen_tutorialPF2011.pdf"
---

## Statement

Assume AC and a finite-horizon model as in
[[def-general-state-space-model-by-kernels]]. For each $1\le t\le T$, let
$\nu_t$ be a sigma-finite measure on $(F_t,\mathcal F_t)$ and suppose the
observation kernel has a specified product-measurable density
$g_t:E_t\times F_t\to[0,\infty]$ with respect to $\mathcal E_t\otimes\mathcal F_t$:
$$G_t(x,B)=\int_B g_t(x,y)\,\nu_t(dy),\qquad\int_{F_t}g_t(x,y)\,\nu_t(dy)=1$$
for every state $x\in E_t$ and measurable $B\subseteq F_t$. For
$h\in\mathsf F_{1:t-1}$, let $\pi_{t-1}$ be the filtering kernel at time
$t-1$ from
[[def-state-space-filtering-laws]] when $t>1$, and for $t=1$ let $\pi_0$ be
the initial kernel $\mu_0$ on the singleton empty-history space. For
$A\in\mathcal E_t$, define the predictive kernel
$$\widehat\pi_t(h,A):=\int_{E_{t-1}}K_t(x,A)\,\pi_{t-1}(h,dx),$$
the evidence density
$$z_t(h,y):=\int_{E_t}g_t(x,y)\,\widehat\pi_t(h,dx),$$
and for $h\in\mathsf F_{1:t-1}$, $y\in F_t$, and $A\in\mathcal E_t$ define
the update
$$\pi_t(h,y,A):=\begin{cases}\displaystyle\frac{\int_Ag_t(x,y)\,\widehat\pi_t(h,dx)}{z_t(h,y)},&0<z_t(h,y)<\infty,\\[6pt]\widehat\pi_t(h,A),&z_t(h,y)=0\text{ or }z_t(h,y)=\infty.\end{cases}$$
Then $\widehat\pi_t$ is a predictive kernel for $X_t$ given $Y_{1:t-1}$,
and $\pi_t$ is a filtering kernel for $X_t$ given $Y_{1:t}$. For each fixed
history $h$, the observation marginal under the conditional version
determined by $\widehat\pi_t(h,\cdot)$ has density
$z_t(h,\cdot)$ with respect to $\nu_t$ and assigns zero mass to both
$\{y:z_t(h,y)=0\}$ and $\{y:z_t(h,y)=\infty\}$. Thus the formula never
divides by zero or infinity; values on those fibers are conditional-law
fillers. The statement is exact and finite-horizon and gives no numerical
approximation or long-time stability claim.

## Facts & Assumptions

**Given:** AC; the finite-horizon state-space model; for every $1\le t\le T$, a sigma-finite $\nu_t$ and product-measurable $g_t\ge0$ satisfying the displayed kernel-density identity and pointwise normalization; and the stated time-$(t-1)$ filtering kernel.

[A1] AC states that every family of nonempty sets has a choice function. [[def-axiom-of-choice]]

[F1] The model path law has the ordered factorization $\mu_0(dx_0)\prod_{s=1}^T K_s(x_{s-1},dx_s)G_s(x_s,dy_s)$. [[thm-finite-horizon-state-space-kernel-law-exists-uniquely]]

[F2] A filtering kernel composed with the observation history is an RCD of the current state given that history; the initial filtering kernel is $\mu_0$ on the singleton empty history. [[def-state-space-filtering-laws]]

[F3] Integrating a nonnegative measurable function through an RCD gives the conditional integral identities for every conditioning event. [[thm-conditional-integration-through-a-regular-conditional-law]]

[F4] Integrating a nonnegative product-measurable function against a probability kernel gives a measurable function of the source variable. [[thm-measurability-of-integration-against-a-kernel]]

[F5] A probability kernel has pointwise probability-measure sections and measurable evaluations. [[def-measure-kernel-and-probability-kernel]]

[F6] For a proper prior probability and a jointly measurable normalized kernel density, the dominated Bayes kernel has density-normalizer marginal; it uses the quotient only at finite positive evidence and fills both zero and infinite evidence fibers with the supplied prior probability. [[thm-bayes-formula-for-dominated-kernels]]

[F7] Measurable rectangles generate the finite product sigma-algebra. [[def-product-sigma-algebra-and-finite-product-sigma-algebras]]

[F8] A pi-system generating a sigma-algebra determines finite measures and extends equality of finite measures from the pi-system. [[thm-dynkin-pi-lambda]]

[F9] Expectations of measurable functions of a random element equal their integrals against its law. [[thm-change-of-variables-for-expectation]]

[F10] Increasing limits pass through nonnegative integrals. [[thm-monotone-convergence-for-the-integral]]

[F11] Under AC, the required data-indexed filtering kernels and smoothing kernel exist on the standard-Borel state and observation spaces. [[thm-state-space-filtering-and-smoothing-laws-exist]]

[F12] The recursive filtering procedure defines prediction, evidence, and finite-positive updates with the predictive measure as the zero/infinite evidence filler. [[alg-recursive-bayesian-filter]]

## Proof

**Given:** The hypotheses in the Statement.

1.1 For $t=1$ use $\pi_0=\mu_0$; for $t>1$ use the filtering kernel supplied by [F11] under [A1], and define $\widehat\pi_t$ by the displayed mixture. Each section has mass $\int K_t(x,E_t)\pi_{t-1}(h,dx)=1$; countable additivity follows by applying [F10] to increasing partial sums for disjoint target sets, and measurability in $h$ follows from [F4]. [A1, F2, F4, F5, F10, F11, given]

2.1 Regard $(h,y)\mapsto\widehat\pi_t(h,dx)$ as a probability kernel constant in $y$. Product measurability of $(h,y,x)\mapsto g_t(x,y)$ and [F4] make $z_t$ and each numerator measurable. On $0<z_t<\infty$ the numerator is a finite measure of total mass $z_t$, so division gives a probability; off that set the predictive measure is a probability. Thus $\pi_t$ is an everywhere probability kernel with measurable evaluations, including zero and infinite fibers. [F2, F4, F5, step 1.1, given]

2.2 For a history rectangle $H$ and measurable $A\subseteq E_t$, inserting $K_t$ at the transition factor of [F1] gives $P_T(H\cap\{X_t\in A\})=E_{P_T}[\mathbf1_HK_t(X_{t-1},A)]$, since later kernels integrate to one; at $t=1$ this is the one-step transition integral. These are finite measures of $H$, so [F7]–[F8] extend equality from history rectangles to all $H\in\sigma(Y_{1:t-1})$. Then [F3] for the filtering kernel from [F11] turns the right side into $E_{P_T}[\mathbf1_H\widehat\pi_t(Y_{1:t-1},A)]$, proving that $\widehat\pi_t$ is predictive. [A1, F1, F2, F3, F7, F8, F11, step 1.1]

3.1 Fix $h$. The prior $\widehat\pi_t(h,\cdot)$ is a probability and $G_t$ has the specified jointly measurable normalized density, so [F6] gives observation marginal $z_t(h,y)\nu_t(dy)$ and conditional kernel $\pi_t(h,y,\cdot)$; the zero and infinite evidence fibers have zero marginal. In particular, $\int_C\pi_t(h,y,A)z_t(h,y)\nu_t(dy)=\int_A G_t(x,C)\widehat\pi_t(h,dx)$. [F6, step 1.1, step 2.1]

4.1 For a history rectangle $B$ and an observation set $C\in\mathcal F_t$, the path law [F1], predictive identity from step 2.2, and conditional integration [F3] applied to $x\mapsto\mathbf1_A(x)G_t(x,C)$ give $P_T(Y_{1:t-1}\in B,X_t\in A,Y_t\in C)=\int_B\int_A G_t(x,C)\,\widehat\pi_t(h,dx)P_{Y_{1:t-1}}(dh)$. By step 3.1 this is $\int_B\int_C\pi_t(h,y,A)z_t(h,y)\,\nu_t(dy)P_{Y_{1:t-1}}(dh)$. Taking $A=E_t$ and using $\pi_t(h,y,E_t)=1$ from step 2.1 identifies the law of $(Y_{1:t-1},Y_t)$ on history-observation rectangles with $P_{Y_{1:t-1}}(dh)z_t(h,y)\nu_t(dy)$; [F7]–[F8] extend this to the product sigma-algebra. [A1, F1, F2, F3, F6, F7, F8, step 2.1, step 2.2, step 3.1]

5.1 Step 2.1 makes $\pi_t(\cdot,\cdot,A)$ measurable and bounded. The joint-observation law just established and [F9] therefore give, on each history-observation rectangle $B\times C$, $E_{P_T}[\mathbf1_{\{Y_{1:t-1}\in B,Y_t\in C\}}\pi_t(Y_{1:t-1},Y_t,A)]=\int_B\int_C\pi_t(h,y,A)z_t(h,y)\,\nu_t(dy)P_{Y_{1:t-1}}(dh).$ By step 4.1 this is $P_T(Y_{1:t-1}\in B,X_t\in A,Y_t\in C)$. Such rectangles generate $\sigma(Y_{1:t})$ by [F7], and for fixed $A$ both sides are finite measures of the conditioning event, so [F8] extends the identity to every event in $\sigma(Y_{1:t})$. Thus $\pi_t$ is a filtering kernel; step 2.2 already proves prediction, and the procedure [F12] returns the claimed kernels. [A1, F2, F3, F7, F8, F9, F11, F12, step 2.1, step 2.2, step 4.1] ∎
