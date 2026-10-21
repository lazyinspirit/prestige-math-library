---
id: lem-deterministic-ito-integral-has-gaussian-independent-increments
kind: lemma
title: A deterministic Itô integral has independent Gaussian increments
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
axiom_base: Full AC
dependency_level: 0
deps:
  - def-axiom-of-choice
  - def-d-dimensional-brownian-motion
  - def-elementary-predictable-brownian-integrand
  - def-ito-integral-of-an-elementary-predictable-process
  - def-ito-integral-for-square-integrable-predictable-processes
  - thm-ito-isometry-and-linearity-in-predictable-l2
  - thm-ito-integral-process-has-a-continuous-martingale-version
  - thm-the-l-p-norm-descends-to-the-quotient-and-makes-l-p-a-normed-space
  - def-moments-variance-and-covariance
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - def-multivariate-normal-law
  - lem-characteristic-function-of-a-multivariate-normal-law
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Gregory F. Lawler, Stochastic Calculus: An Introduction with Applications"
      url: "https://www.math.uchicago.edu/~lawler/finbook.pdf"
      locator: "Sections 3.2.2–3.2.3, printed pp. 87–91; Exercise 3.8, printed p. 121. The stochastic-integral framework is used for context; the local characteristic-function proof below establishes the Gaussian limit."
    - title: "Simo Särkkä and Arno Solin, Applied Stochastic Differential Equations"
      url: "https://users.aalto.fi/~asolin/sde-book/sde-book.pdf"
      locator: "Section 4.1, printed pp. 42–45 (PDF pp. 50–53), definition of Brownian increments and the L2 Itô integral."
    - title: "Jonathan Goodman, Stochastic Calculus Notes, Lecture 7"
      url: "https://math.nyu.edu/~goodman/teaching/StochCalc2007/notes/l7.pdf"
      locator: "Sections 1.1–1.2, PDF pp. 1–2. The lecture gives the adapted left-step construction and explicitly treats deterministic-integral Gaussianity as prior context; the complete proof is local here."
    - title: "Jonathan Mattingly, Gaussian Itô Integrals, Duke Probability Workbook"
      url: "https://sites.duke.edu/probabilityworkbook/gaussian-ito-integrals/"
      locator: "Complete exercise, especially parts 1–2. It specifies the step-integral and characteristic-function proof route as an exercise, not as a supplied proof."
---

## Statement

Assume the Axiom of Choice. Fix a finite integer $d\ge1$, a horizon $T>0$, and a complete filtered probability space $(\Omega,\mathcal F,(\mathcal F_t)_{0\le t\le T},P)$. Let $W=(W_t)_{0\le t\le T}$ be a standard $d$-dimensional Brownian motion adapted to the filtration, and assume that for every $0\le s<t\le T$ the vector increment $W_t-W_s$ is independent of $\mathcal F_s$ and has law $N_d(0,(t-s)I_d)$. Let $g:[0,T]\to(0,\infty)$ be continuously differentiable with constants $0<g_{\min}\le g(t)\le g_{\max}<\infty$, set $v(t)=\int_0^t g(r)^2\,dr$, and define $M_t=(\int_0^t g(r)\,dW_r^1,\ldots,\int_0^t g(r)\,dW_r^d)$ by coordinatewise scalar Itô integration. For every $0\le s<t\le T$, the increment $M_t-M_s$ is independent of $\mathcal F_s$ and has law $N_d(0,(v(t)-v(s))I_d)$. Consequently, the increments of $M$ over every finite increasing time list are mutually independent.

## Statement references

[Lawler, Stochastic Calculus, Sections 3.2.2–3.2.3 and Exercise 3.8](https://www.math.uchicago.edu/~lawler/finbook.pdf)

[Särkkä and Solin, Applied Stochastic Differential Equations, Section 4.1](https://users.aalto.fi/~asolin/sde-book/sde-book.pdf)

[Goodman, Stochastic Calculus Notes, Lecture 7, Sections 1.1–1.2](https://math.nyu.edu/~goodman/teaching/StochCalc2007/notes/l7.pdf)

[Mattingly, Gaussian Itô Integrals, Duke Probability Workbook](https://sites.duke.edu/probabilityworkbook/gaussian-ito-integrals/)

## Facts & Assumptions

**Given:** Full AC, the filtered vector Brownian motion and deterministic integrand stated above, and the coordinatewise scalar Itô integrals constructed in L2.

[A1] The full Axiom of Choice is available. [[def-axiom-of-choice]]

[F1] A standard d-dimensional Brownian motion has mutually independent vector increments on every finite increasing time list, each with law $N_d(0,(t_j-t_{j-1})I_d)$. [[def-d-dimensional-brownian-motion]]

[F2] Under the standing filtered Brownian hypothesis, increments after a time $r$ are independent of $\mathcal F_r$; deterministic step integrands are elementary predictable integrands. [[def-elementary-predictable-brownian-integrand]]

[F3] The Itô integral of an elementary predictable integrand is the finite sum of its coefficients times the corresponding Brownian increments. [[def-ito-integral-of-an-elementary-predictable-process]]

[F4] A square-integrable predictable Itô integral is the L2 limit of elementary integrals, independent of the chosen approximating sequence. [[def-ito-integral-for-square-integrable-predictable-processes]]

[F5] The scalar Itô integral is an isometry from predictable L2 into mean-zero L2. Applied coordinatewise, it gives $E|I(H)-I(K)|^2=d\,E\int_0^T|H_s-K_s|^2ds$ for deterministic scalar integrands. [[thm-ito-isometry-and-linearity-in-predictable-l2]]

[F6] For a square-integrable real random variable $Y$, the variance $E[(Y-EY)^2]$ is nonnegative. [[def-moments-variance-and-covariance]]

[F7] L2 convergence implies convergence of norms by the reverse triangle inequality. [[thm-the-l-p-norm-descends-to-the-quotient-and-makes-l-p-a-normed-space]]

[F8] Tonelli permits interchange of the time integral and expectation for nonnegative measurable functions. [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]

[F9] The law $N_d(m,\Sigma)$ is defined by its one-dimensional normal projections for every vector in $\mathbb R^d$. [[def-multivariate-normal-law]]

[F10] The characteristic function of $N_d(m,\Sigma)$ is $\theta\mapsto\exp(i\theta\cdot m-\theta^T\Sigma\theta/2)$ and uniquely determines its law, including singular covariance matrices. [[lem-characteristic-function-of-a-multivariate-normal-law]]

[F11] The Itô integral process has an adapted continuous martingale version. [[thm-ito-integral-process-has-a-continuous-martingale-version]]

## Proof

**Given:** The hypotheses and notation of the statement.

1.1 Fix $0\le s<t\le T$ and put $H(r)=g(r)1_{(s,t]}(r)$. By [F4], choose elementary predictable approximants $H_n(r,\omega)=\sum_k\xi_{n,k}(\omega)1_{(r_{n,k},r_{n,k+1}]}(r)$ converging to $H$ in $L^2(dr\otimes P)$. On each interval define the deterministic coefficient $\bar\xi_{n,k}=E[\xi_{n,k}]$ and let $\bar H_n=\sum_k\bar\xi_{n,k}1_{(r_{n,k},r_{n,k+1}]}$. Boundedness of the elementary coefficients makes these expectations finite. For every $r$ in the kth interval, nonnegativity of $\operatorname{Var}(\xi_{n,k}-H(r))$ from [F6] gives $|\bar\xi_{n,k}-H(r)|^2\le E|\xi_{n,k}-H(r)|^2$. Integrating and applying [F7], with Tonelli [F8] to exchange the time integral and expectation of this nonnegative integrand, yields $\|\bar H_n-H\|_{L^2([0,T])}^2\le E\int_0^T|H_n-H|^2dr\to0$. Set $H_n^0=\bar H_n1_{(s,t]}$; it remains a deterministic step integrand and its error cannot increase, because $H=0$ outside $(s,t]$. [A1, F4, F6, F7, F8]

1.2 Write $H_n^0=\sum_j a_{n,j}1_{(u_{n,j},u_{n,j+1}]}$ on a partition of $[s,t]$. By [F3], its vector integral is $Z_n=\sum_j a_{n,j}(W_{u_{n,j+1}}-W_{u_{n,j}})$. For $\theta\in\mathbb R^d$, independence and the Gaussian increment laws in [F1] give $E e^{i\theta\cdot Z_n}=\prod_j\exp(-a_{n,j}^2(u_{n,j+1}-u_{n,j})|\theta|^2/2)=\exp(-|\theta|^2\int_s^t(H_n^0)^2dr/2)$. The same factorization holds with any indicator $1_A$, $A\in\mathcal F_s$, inserted: each increment is independent of the sigma-algebra at its left endpoint, which contains $A$ and all preceding increments, so repeated factorization gives $E[1_Ae^{i\theta\cdot Z_n}]=P(A)E e^{i\theta\cdot Z_n}$. [F1, F2, F3, A1]

2.1 Let $Z=M_t-M_s$. By [F5] applied to the deterministic step integrands, $E|Z_n-Z|^2=d\int_s^t|H_n^0(r)-g(r)|^2dr\to0$. Since $|e^{i\theta\cdot z}-e^{i\theta\cdot w}|\le|\theta||z-w|$, nonnegativity of the variance of $|Z_n-Z|$ in [F6] gives convergence of both the ordinary and $1_A$-weighted characteristic functions. Also $\int_s^t(H_n^0)^2dr\to\int_s^tg(r)^2dr=v(t)-v(s)$ by the square-integrable norm convergence in step 1.1 and the norm-continuity result [F7]. Passing to the limit in step 1.2 therefore gives $Ee^{i\theta\cdot Z}=\exp(-|\theta|^2(v(t)-v(s))/2)$ and $E[1_Ae^{i\theta\cdot Z}]=P(A)\exp(-|\theta|^2(v(t)-v(s))/2)$ for every $\theta$ and every $A\in\mathcal F_s$. [F5, step 1.1, step 1.2, F6, F7, F10, A1]

3.1 The multivariate-normal convention [F9] identifies the Gaussian law from its one-dimensional normal projections, and [F10] gives the characteristic function in step 2.1 for those projections. For any $A\in\mathcal F_s$ with $P(A)>0$, the probability measure $B\mapsto P(Z\in B,A)/P(A)$ has the same characteristic function by the second identity, so uniqueness in [F10] identifies it with that same Gaussian law. If $P(A)=0$, the joint probability is zero. Thus $Z$ is independent of $\mathcal F_s$. [step 2.1, F9, F10, A1]

4.1 By [F11], $M$ has an adapted continuous version. For any finite increasing list $0=t_0<\cdots<t_n$, the increments through time $t_{j-1}$ are $\mathcal F_{t_{j-1}}$-measurable. Step 3.1 makes the next increment independent of that sigma-algebra; induction on $j$ therefore factors the joint probabilities of all increment Borel sets into the product of their marginal probabilities. This proves mutual independence over the list. [F11, step 3.1, A1] ∎
