---
dependency_level: 1
id: lem-geometric-split-renewal-gives-integrable-hitting-time
kind: lemma
title: Geometric small-set renewal convergence gives an integrable exponential hitting moment
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
deps:
  - cor-canonical-markov-chain-on-path-space
  - cor-cauchy-estimates-taylor-coefficients
  - cor-complex-power-series-sums-are-analytic
  - cor-complex-power-series-sums-have-derivatives-of-all-orders
  - def-axiom-of-choice
  - def-invariant-and-stationary-distribution-for-a-markov-kernel
  - def-measure-kernel-and-probability-kernel
  - def-small-set-minorization-and-drift
  - thm-cauchy-integral-formula-higher-derivatives
  - thm-complex-analytic-functions-are-holomorphic
  - thm-discrete-strong-markov-property
  - thm-invariant-initial-law-makes-the-chain-stationary
  - thm-markov-property-for-bounded-future-path-functionals
  - thm-measurability-of-integration-against-a-kernel
  - thm-monotone-convergence-for-the-integral
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: Meyn and Tweedie, Markov Chains and Stochastic Stability, Chapters 13 and 15, regeneration and local geometric convergence
      url: https://probability.ca/MT/BOOK.pdf
axiom_use: AC is assumed for canonical path laws and the Markov conditional-expectation suppliers.
---

## Statement

Assume the Axiom of Choice. Let $Q$ be a probability kernel on any measurable space $(X,\mathcal G)$, with invariant probability $\pi$. Let $C\in\mathcal G$ satisfy $\pi(C)>0$, and suppose
$$Q(x,\cdot)\ge\epsilon\nu(\cdot)\quad(x\in C),\qquad 0<\epsilon<1,$$
where $\nu$ is a probability measure. Suppose some $A<\infty$ and $0<\theta<1$ satisfy
$$|\nu Q^n(C)-\pi(C)|\le A\theta^n\quad(n\ge0).$$
For a $Q$-chain started at $x$, put $\sigma_C=\inf\{n\ge0:X_n\in C\}$. Then some $s>1$ makes
$$H(x)=\mathbb E_x[s^{\sigma_C}]\quad\text{measurable},\qquad \pi(H)<\infty,$$
where $s^\infty=\infty$. In particular $H$ is finite $\pi$-almost everywhere; finiteness at every state is not asserted.

For the same hypotheses, the split construction also has the following return and occupation properties. Put $w_1(x)=\epsilon1_C(x)$ and $w_0(x)=1-w_1(x)$. Define $K_{x,1}=\nu$, $K_{x,0}=(Q(x,\cdot)-\epsilon\nu)/(1-\epsilon)$ on $C$, and $K_{x,0}=Q(x,\cdot)$ off $C$. On $X\times\{0,1\}$ use the kernel
$$\widetilde Q((x,i),dy\times\{j\})=K_{x,i}(dy)w_j(y)$$
and invariant law $\widetilde\pi(dx,i)=w_i(x)\pi(dx)$. Its atom $\alpha=C\times\{1\}$ has mass $p=\epsilon\pi(C)>0$. If $Z_0$ has law $\kappa=\widetilde\pi(\cdot\mid\alpha)$ and $\tau=\inf\{n\ge1:Z_n\in\alpha\}$, then some $b>1$ satisfies
$$\mathbb E_\kappa b^\tau<\infty,$$
and for every nonnegative measurable $g$ on the split space,
$$\widetilde\pi(g)=p\,\mathbb E_\kappa\sum_{k=0}^{\tau-1}g(Z_k).$$
In particular $\tau<\infty$ almost surely and $\mathbb E_\kappa\tau=1/p$. These additional assertions use exactly the construction and hypotheses above; they do not assert an exponential entrance-time moment from every state.

## Facts & Assumptions

**Given:** AC, the invariant law, small-set minorization, and scalar geometric-convergence bound in the Statement.

[A1] [[def-axiom-of-choice]]: AC is assumed, as required by the path-space and Markov suppliers below.

[F1] [[def-small-set-minorization-and-drift]]: the displayed minorization permits the probability residual $(Q(x,\cdot)-\epsilon\nu)/(1-\epsilon)$ on $C$.

[F2] [[cor-canonical-markov-chain-on-path-space]]: probability kernels on arbitrary measurable spaces have canonical path laws under AC.

[F3] [[thm-measurability-of-integration-against-a-kernel]]: integration of a nonnegative measurable function against a probability kernel is measurable.

[F4] [[thm-discrete-strong-markov-property]]: future bounded path functionals obey the Markov identity at stopping times.

[F5] [[thm-markov-property-for-bounded-future-path-functionals]]: bounded future-path expectations are measurable functions of the starting state and satisfy the deterministic-time Markov identity.

[F6] [[thm-invariant-initial-law-makes-the-chain-stationary]]: an invariant initial distribution makes every finite-dimensional law stationary.

[F7] [[thm-monotone-convergence-for-the-integral]]: nonnegative increasing limits pass through integrals.

[F8] [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]: nonnegative double sums and probability integrals may be interchanged.

[F9] [[cor-complex-power-series-sums-are-analytic]] and [[thm-complex-analytic-functions-are-holomorphic]]: an absolutely convergent complex power series is holomorphic in its open disk of convergence.

[F10] [[cor-complex-power-series-sums-have-derivatives-of-all-orders]]: power series can be differentiated repeatedly term by term inside their convergence disk.

[F11] [[thm-cauchy-integral-formula-higher-derivatives]]: a holomorphic function has derivatives of every order locally; these derivatives are continuous because each has a further complex derivative.

[F12] [[cor-cauchy-estimates-taylor-coefficients]]: if $|g|\le B$ on a radius-$\delta$ circle about $a$ contained with its disk in the holomorphic domain, then $|g^{(k)}(a)|/k!\le B\delta^{-k}$.

[F13] [[def-invariant-and-stationary-distribution-for-a-markov-kernel]]: invariance is equality of the initial law with its one-step image.

[F14] [[def-measure-kernel-and-probability-kernel]]: a probability kernel is measurable in its starting point and countably additive in its target event.

## Proof

**Given:** The hypotheses in the Statement, with AC [A1].

1.1 Set $w_1(x)=\epsilon1_C(x)$ and $w_0(x)=1-w_1(x)$. On $\widetilde X=X\times\{0,1\}$ define $K_{x,1}=\nu$; define $K_{x,0}=(Q(x,\cdot)-\epsilon\nu)/(1-\epsilon)$ for $x\in C$, and $K_{x,0}=Q(x,\cdot)$ otherwise. The split kernel is $\widetilde Q((x,i),B\times\{j\})=\int_B w_j(y)K_{x,i}(dy).$ Nonnegativity follows from [F1], measurability from [F3], and finite summation over the two flag sections defines a probability on every product-measurable event. Thus [F2] realizes the split path. If the initial flag at $x$ has probabilities $w_i(x)$, summing it gives $\sum_iw_i(x)K_{x,i}=Q(x,\cdot)$. The same summation at each subsequent time shows that the $x$-coordinate path has the original $Q$-chain law. The set $\alpha=C\times\{1\}$ is an atom: all its states have the identical outgoing transition obtained by using $\nu$. [A1, F1, F2, F3, F14, given]

2.1 Put $\widetilde\pi(dx,i)=w_i(x)\pi(dx)$. Summing its incoming transitions first over $i$ gives $\pi Q=\pi$ and then assigns the new flag according to $w_j$, proving $\widetilde\pi\widetilde Q=\widetilde\pi$ by [F13]. Let $p=\widetilde\pi(\alpha)=\epsilon\pi(C)>0$, and let $\kappa=\widetilde\pi(\cdot\mid\alpha)$, an ordinary normalized restriction. Write $\mathbb P_\alpha=\mathbb P_\kappa$; its future after time zero is the same from every atom state. Starting in $\alpha$, the next coordinate law is $\nu$ and subsequent coordinate transitions are $Q$, so $u_0=1,\qquad u_n=\mathbb P_\alpha(Z_n\in\alpha)=\epsilon\nu Q^{n-1}(C)\quad(n\ge1).$ The hypothesis implies $|u_n-p|\le c\theta^n$ for all $n\ge0$ after increasing a finite $c$. [F6, F13, step 1.1, given]

3.1 Let $\tau=\inf\{n\ge1:Z_n\in\alpha\}$ and $f_n=\mathbb P_\alpha(\tau=n)$ for $n\ge1$, with $f_0=0$. Decompose a visit at time $n\ge1$ by the first return time and use [F4] and the common atom transition to obtain $u_n=\sum_{j=1}^nf_ju_{n-j}$. The possible event $\tau=\infty$ contributes zero. For $|z|<1$, absolute convergence and [F8] give $U(z)=\sum_{n\ge0}u_nz^n=\frac1{1-F(z)},\qquad F(z)=\sum_{n\ge1}f_nz^n.$ Here $|F(z)|\le|z|\sum_nf_n\le|z|<1$, so the denominator is legitimate. Since $u_n-p$ decays geometrically, [F9] gives $U(z)=p/(1-z)+J(z)$ with $J$ holomorphic on $|z|<\theta^{-1}$. For real $t\uparrow1$, $U(t)\to\infty$; hence $F(t)\to1$ and [F7] gives $\sum_nf_n=1$. [F4, F7, F8, F9, step 2.1]

3.2 Let $T=\inf\{n\ge0:Z_n\in\alpha\}$ and start the split chain from $\widetilde\pi$. By [F6], $I_j=1_\alpha(Z_j)$ have mean $p$ and $\operatorname{Cov}(I_0,I_n)=p(u_n-p)$. Expanding the square of $N^{-1}\sum_{j=0}^{N-1}I_j-p$ and summing the geometric covariance bound from step 2.1 gives expectation at most $c_1/N$ for some finite $c_1$. On $\{T\ge N\}$ this square equals $p^2$, so $\mathbb P_{\widetilde\pi}(T\ge N)\le c_1/(Np^2)\to0$. In particular the stationary split chain hits the atom almost surely; no unproved Harris or skeleton-recurrence theorem is needed. [F6, step 2.1, algebra]

4.1 Near $z=1$ the expression $\widehat F(z)=1-\frac{1-z}{p+(1-z)J(z)}$ is holomorphic and agrees with $F$ on its overlap with $|z|<1$. Indeed the denominator has value $p>0$ at $1$ and remains nonzero on a sufficiently small disk; the quotient is complex differentiable there by the difference-quotient formula for the derivative of a reciprocal. By [F10], for $0<t<1$ and $k\ge0$, $F^{(k)}(t)=\sum_{n\ge k}f_n(n)_kt^{n-k}$, where $(n)_k=n!/(n-k)!$. Letting $t\uparrow1$ and using [F7] and derivative continuity from [F11] gives $\sum_{n\ge k}f_n(n)_k=\widehat F^{(k)}(1)$. Choose a radius $\delta>0$ whose closed disk about $1$ lies strictly within this holomorphic neighborhood and a finite bound $B$ for $|\widehat F|$ on its circle. [F12] then bounds these nonnegative derivative values by $k!B\delta^{-k}$. [F7, F10, F11, F12, step 3.1]

4.2 For bounded nonnegative $g$, decompose $g(Z_N)$ by the last atom visit at times $0,\ldots,N$. A last visit at time $N-k$ contributes $p\mathbb E_\alpha[g(Z_k);\tau>k]$, by stationarity and [F5]. The remaining paths have no atom visit through time $N$, and their contribution $R_N$ lies between zero and $\|g\|_\infty\mathbb P_{\widetilde\pi}(T>N)$. Thus $\widetilde\pi(g)=p\sum_{k=0}^N\mathbb E_\alpha[g(Z_k);\tau>k]+R_N.$ Let $N\to\infty$ using step 3.2, then extend from bounded $g$ to all nonnegative measurable $g$ using [F7] and [F8]. This proves the stationary occupation identity $\widetilde\pi(g)=p\mathbb E_\alpha\sum_{k=0}^{\tau-1}g(Z_k)$. At $k=0$ the atom state has law $\kappa$; subsequent transitions are independent of which atom state was chosen, so this argument does not require $g$ to be constant on $\alpha$. [F5, F6, F7, F8, step 2.1, step 3.2]

5.1 For $0<h<\delta$, the finite binomial expansion for each integer $n$, followed by [F8], yields $\mathbb E_\alpha[(1+h)^\tau]=\sum_{k\ge0}\frac{h^k}{k!}\sum_{n\ge k}f_n(n)_k\le\frac{B}{1-h/\delta}<\infty.$ Thus some $b>1$ has $\mathbb E_\alpha b^\tau<\infty$. The return is almost surely finite by step 3.1. This argument establishes an exponential moment from positivity and analytic continuation; it does not assume in advance that the original series $F$ converges beyond the unit disk. [F8, step 3.1, step 4.1, algebra]

6.1 Fix $1<s<b$ and let $g(z)=\mathbb E_zs^T$, allowing infinity. The bounded path functions $s^{T\wedge l}$ increase to $s^T$, so [F5] and [F7] give measurability and the Markov identity for this nonnegative function by truncation. On $\alpha$, $g=1$. For $k\ge1$, on $\{\tau>k\}$, the residual time to $\alpha$ is $\tau-k$; the Markov identity and step 4.2 give $\widetilde\pi(g)=p\left(1+\mathbb E_\alpha\sum_{k=1}^{\tau-1}s^{\tau-k}\right)\le p\mathbb E_\alpha[\tau s^\tau]<\infty.$ The last moment is finite because $\sup_{j\ge1}j(s/b)^j<\infty$ and step 5.1 bounds $\mathbb E_\alpha b^\tau$. For the coordinate chain initialized with the prescribed flag, its first $C$ visit $\sigma_C$ is no later than its first atom visit $T$. Consequently $H(x)=\mathbb E_xs^{\sigma_C}$ is measurable by the same bounded-path approximation and $\pi(H)\le\widetilde\pi(g)<\infty$. This proves the conclusion, including the null-set qualification. [F5, F7, F8, step 1.1, step 5.1, step 4.2] ∎
