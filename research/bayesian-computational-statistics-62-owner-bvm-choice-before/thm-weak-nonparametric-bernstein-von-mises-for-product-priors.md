---
id: thm-weak-nonparametric-bernstein-von-mises-for-product-priors
kind: theorem
title: Weak nonparametric Bernstein–von Mises theorem for product priors
status: draft
origin: pipeline
dependency_level: 3
deps:
  - def-negative-sobolev-space-for-white-noise
  - lem-wavelet-product-prior-is-l2-valued
  - lem-product-prior-coordinate-posterior-law
  - def-countable-choice
  - lem-white-noise-is-borel-gaussian-on-negative-sobolev-space
  - lem-product-prior-posterior-second-moment-in-negative-sobolev-space
  - lem-finite-coordinate-posterior-total-variation-limit
  - cor-cauchy-schwarz-for-random-variables
  - cor-markov-inequality-for-random-variables
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Castillo and Nickl, Nonparametric Bernstein–von Mises theorems in Gaussian white noise, Theorems 5, 7–9 and proofs, printed pp. 2013–2021"
      url: https://www.statslab.cam.ac.uk/~rn289/Site/__files/AOS1133.pdf
    - title: "Giné and Nickl, Mathematical Foundations of Infinite-Dimensional Statistical Models, Theorems 7.3.12, 7.3.18–7.3.19 and proofs, printed pp. 584–596"
      url: https://www.statslab.cam.ac.uk/~rn289/Site/__files/FULLPDF.pdf
    - title: "Ray, Adaptive Bernstein–von Mises theorems in Gaussian white noise, §§2.1–2.2 and §7.1, printed pp. 5–8 and 23–24"
      url: https://arxiv.org/pdf/1407.3397
---

## Statement

Let $(\psi_{lk})$ be the S-regular wavelet basis in [[def-negative-sobolev-space-for-white-noise]], with $2^l$ coefficients at each level $l\ge0$. For $\alpha>0$, put $\sigma_l=2^{-l(\alpha+1/2)}$ and let the prior on $f=\sum_{l,k}\sigma_l\xi_{lk}\psi_{lk}$ have IID coefficients $\xi_{lk}$ with density $\varphi$. Assume countable choice for the $L^2$ prior construction supplied by [[lem-wavelet-product-prior-is-l2-valued]], and take the full posterior kernel as the supplied model input of [[lem-product-prior-coordinate-posterior-law]]. Let $f_0\in L^2([0,1])$, write $\theta_{0,lk}=\langle f_0,\psi_{lk}\rangle$ and $r_{lk}=\theta_{0,lk}/\sigma_l$, and suppose

$$\sup_{l,k}|r_{lk}|\le M<\tau,$$

where $\varphi$ is a probability density satisfying $\varphi(u)\le C_\varphi$ for every $u$, $\varphi(u)\ge c_\varphi>0$ for $|u|<\tau$, $\int u^2\varphi(u)\,du<\infty$, and $\varphi$ is continuous at each $r_{lk}$. The observation model is

$$dX^{(n)}(t)=f_0(t)\,dt+n^{-1/2}dW(t),\qquad 0\le t\le1,$$

with standard white noise $W$; in the stated basis this is the sequence experiment $X_{lk}=\theta_{0,lk}+n^{-1/2}Z_{lk}$ with independent standard normal coordinates. Let $\Pi_n(\cdot\mid X)$ be the product-coordinate posterior of [[lem-product-prior-coordinate-posterior-law]]. Let $N$ be the law of the canonical white noise in $H(\delta)$ and define

$$\widetilde\Pi_n:=\Pi_n(\cdot\mid X)\circ[f\mapsto\sqrt n(f-X)]^{-1},\qquad \beta_{BL,H(\delta)}(\mu,\nu):=\sup_{\substack{\|g\|_\infty\le1\\ \operatorname{Lip}_{H(\delta)}(g)\le1}}\left|\int g\,d\mu-\int g\,d\nu\right|.$$

For every $\delta>1/2$,

$$\beta_{BL,H(\delta)}(\widetilde\Pi_n,N)\longrightarrow0$$

in probability under the true white-noise law $P_{f_0}^{(n)}$. This is a bounded-Lipschitz weak BvM conclusion; it asserts neither total-variation convergence on all Borel subsets nor an $L^2$-valued Gaussian limit.

## Facts & Assumptions

[F1] [[def-negative-sobolev-space-for-white-noise]]: $H(\delta)$ has norm $\|u\|_{H(\delta)}^2=\sum_{l,k}w_l^\delta|u_{lk}|^2$, where $w_l^\delta=a_l^{-1}(\log a_l)^{-2\delta}$, and its trace sum is finite for $\delta>1/2$.

[F2] [[lem-wavelet-product-prior-is-l2-valued]]: The product prior series defines an $L^2$-valued random element for $\alpha>0$ and finite coefficient second moment.

[F3] [[lem-white-noise-is-borel-gaussian-on-negative-sobolev-space]]: The canonical white-noise coefficient sequence has Borel Gaussian law $N$ on $H(\delta)$ for $\delta>1/2$, is not $L^2$-valued, and satisfies $\mathbb E\|W\|_{H(\delta')}^2=\sum_{l,k}w_l^{\delta'}<\infty$ for every $\delta'>1/2$.

[F4] [[lem-product-prior-posterior-second-moment-in-negative-sobolev-space]]: For any $\delta'>1/2$, $n\,\mathbb E_{f_0}^{(n)}\int\|f-f_0\|_{H(\delta')}^2\,\Pi_n(df\mid X)$ is bounded uniformly in $n$.

[F5] [[lem-finite-coordinate-posterior-total-variation-limit]]: For every fixed finite coordinate projection, the posterior and standard Gaussian densities of $\sqrt n(\theta_J-X_J)$ converge in $L^1$ in probability.

[F6] [[lem-product-prior-coordinate-posterior-law]]: A supplied posterior kernel has product-coordinate marginals with densities proportional to $e^{-n(\theta_j-X_j)^2/2}\sigma_j^{-1}\varphi(\theta_j/\sigma_j)$.

[F7] [[cor-cauchy-schwarz-for-random-variables]]: On any probability space, $\mathbb E|UV|\le(\mathbb EU^2)^{1/2}(\mathbb EV^2)^{1/2}$ for square-integrable real random variables.

[F8] [[cor-markov-inequality-for-random-variables]]: For nonnegative $Y$ and $a>0$, $\mathbb P(Y\ge a)\le\mathbb E[Y]/a$.

[A1] [[def-countable-choice]]: Countable choice is used only for the $L^2$ prior construction. The full posterior kernel is supplied as model input by [F6]; the posterior moment estimate, finite-coordinate convergence, and projection/tail inequalities introduce no further choice axiom.

**Given:** Countable choice, the basis, prior, truth, density conditions, white-noise experiment, and the supplied posterior kernel of [F6]. The stated bounded-Lipschitz convergence is proved below without using full AC.

## Proof

1.1 Fix $\delta>1/2$ and choose $\delta'$ with $1/2<\delta'<\delta$. Let $P_J$ retain all wavelet coordinates with level $l\le J$. Since $w_l^\delta/w_l^{\delta'}=(\log a_l)^{-2(\delta-\delta')}$ and $a_l\to\infty$, for $q_J:=(\log a_{J+1})^{-(\delta-\delta')}$ one has $\|(I-P_J)u\|_{H(\delta)}\le q_J\|u\|_{H(\delta')}\quad\text{and}\quad q_J\to0.$ For any probability law $Q$ on $H(\delta)$, coupling $U$ with $P_JU$ and using the defining Lipschitz bound gives $\beta_{BL,H(\delta)}(Q,Q\circ P_J^{-1})\le\int\|(I-P_J)u\|_{H(\delta)}\,Q(du)$. [F1, given, algebra]

1.2 For a fixed $J$, the middle term in $\beta_{BL,H(\delta)}(\widetilde\Pi_n,N)\le\beta_{BL,H(\delta)}(\widetilde\Pi_n,\widetilde\Pi_n\circ P_J^{-1})+\beta_{BL,H(\delta)}(\widetilde\Pi_n\circ P_J^{-1},N\circ P_J^{-1})+\beta_{BL,H(\delta)}(N\circ P_J^{-1},N)$ tends to zero in probability: [F5] gives $L^1$ convergence of the projected posterior and Gaussian coordinate densities. Every bounded-Lipschitz test function restricted to the projected subspace is bounded by $1$, so its integral difference is at most that $L^1$ distance. [F5, algebra]

1.3 The last term is bounded by $\mathbb E\|W-P_JW\|_{H(\delta)}$, which is at most $\bigl(\mathbb E\|W-P_JW\|_{H(\delta)}^2\bigr)^{1/2}=\bigl(\sum_{l>J,k}w_l^\delta\bigr)^{1/2}$ by [F3] and [F7]. This tends to zero as $J\to\infty$ by [F1]. [F1, F3, F7, algebra]

2.1 Under the joint true-data/posterior law, using the supplied posterior model [F6] and the $L^2$ prior construction [F2], $U=\sqrt n(f-X)=\sqrt n(f-f_0)-W$, where $W=\sqrt n(X-f_0)$ has law $N$. By [F4], [F3] and $(a-b)^2\le2a^2+2b^2$, $\mathbb E_{f_0}^{(n)}\int\|U\|_{H(\delta')}^2\,\Pi_n(df\mid X)\le2n\mathbb E_{f_0}^{(n)}\int\|f-f_0\|_{H(\delta')}^2\,\Pi_n(df\mid X)+2\mathbb E\|W\|_{H(\delta')}^2\le C,$ with $C$ independent of $n$. Applying [F7] under the posterior probability and then under the true-data probability, together with step 1.1, gives $\mathbb E_{f_0}^{(n)}\beta_{BL,H(\delta)}(\widetilde\Pi_n,\widetilde\Pi_n\circ P_J^{-1})\le q_J\sqrt C.$ Thus the first projection error can be made uniformly small by taking $J$ large. [A1, F2, F3, F4, F6, F7, step 1.1, algebra]

3.1 Fix $0<\varepsilon<1$ and choose $J$ so the expected first and deterministic third terms are each less than $\varepsilon^2$. By [F8], the probability that the first term exceeds $\varepsilon$ is at most $\varepsilon$; the deterministic third term is less than $\varepsilon$. For this fixed $J$, step 1.2 makes the probability that the middle term exceeds $\varepsilon$ tend to zero. The triangle bound then gives a limiting upper bound $\varepsilon$ for the probability that the full distance exceeds $3\varepsilon$. Since $\varepsilon$ is arbitrary, $\beta_{BL,H(\delta)}(\widetilde\Pi_n,N)\to0$ in $P_{f_0}^{(n)}$-probability. [F8, step 2.1, step 1.2, step 1.3, algebra] ∎
