---
id: ex-ito-formula-for-brownian-powers
kind: example
title: "Ito formula for Brownian powers"
status: draft
origin: pipeline
deps: [def-brownian-motion, def-elementary-predictable-brownian-integrand, def-progressively-measurable-and-predictable-process, def-ito-integral-of-an-elementary-predictable-process, thm-ito-integral-process-has-a-continuous-martingale-version, thm-ito-isometry-and-linearity-in-predictable-l2, lem-gaussian-even-moment-bound-for-brownian-increments, thm-tonelli-theorem-for-sigma-finite-product-spaces, thm-dominated-convergence, thm-fatou-lemma, thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral, cor-cauchy-schwarz-for-random-variables, lem-conditioning-a-known-variable-and-an-independent-variable, thm-taking-out-what-is-known, def-continuous-time-adapted-process-and-martingale, lem-brownian-motion-has-a-jointly-measurable-continuous-version, def-axiom-of-choice]
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "Gregory F. Lawler, Stochastic Calculus: An Introduction with Applications, Section 3.3"
      url: "https://www.math.uchicago.edu/~lawler/finbook.pdf"
---

## Example

Assume AC and (H) of [[def-elementary-predictable-brownian-integrand]].
Let $B$ be standard Brownian motion. In stochastic integrands use the
predictable representative $\beta$ constructed by left-grid limits below. For pathwise
Lebesgue integrals use the everywhere-continuous normalized path $\widehat B$
of [[lem-brownian-motion-has-a-jointly-measurable-continuous-version]]. Both
agree with $B$ at all times on a common measurable full event. For every
integer $n\ge2$, on one measurable probability-one event for all $t\ge0$,
$$B_t^n=n\int_0^t\beta_s^{n-1}\,dB_s+\frac{n(n-1)}2\int_0^t\widehat B_s^{n-2}\,ds.$$
Here the stochastic integrals use their continuous adapted versions.
Consequently the original adapted polynomial processes
$$B_t^2-t,\qquad B_t^3-3tB_t$$
are continuous square-integrable martingales. In particular
$$B_t^2-t=2\int_0^t\beta_s\,dB_s,\qquad B_t^3-3tB_t=3\int_0^t(\beta_s^2-s)\,dB_s$$
on a common full event for all times.

## Facts & Assumptions

**Given:** AC, (H), $B,\beta,\widehat B$ as specified, an integer $n\ge2$, and a finite horizon $T>0$.

[F1] The predictable sigma-algebra contains every $(u,v]\times A$ with $A\in\mathcal F_u$ and is closed under finite-valued pointwise limits, with zero assigned off the convergence set. The normalized $\widehat B$ is jointly measurable and everywhere continuous, equal to $B$ at all times on one measurable full event. Predictability is preserved by polynomials and deterministic time factors. [[def-progressively-measurable-and-predictable-process]] [[lem-brownian-motion-has-a-jointly-measurable-continuous-version]]

[F2] Under (H) the increment over $(u,v]$ is independent of $\mathcal F_u$ with law $N(0,v-u)$. Gaussian even moments of order $2r$ are $(2r-1)!!(v-u)^r$; in particular the centered squared increment has variance $2(v-u)^2$. [[def-elementary-predictable-brownian-integrand]] [[def-brownian-motion]] [[lem-gaussian-even-moment-bound-for-brownian-increments]]

[F3] Elementary bounded predictable sums extend isometrically to all predictable finite-energy integrands. If the energy is finite on every finite horizon, the integral has a continuous adapted square-integrable martingale version. [[def-ito-integral-of-an-elementary-predictable-process]] [[thm-ito-isometry-and-linearity-in-predictable-l2]] [[thm-ito-integral-process-has-a-continuous-martingale-version]]

[F4] Tonelli applies to nonnegative product-measurable integrands; dominated convergence handles one integrable bound, and Fatou handles nonnegative lower limits. Cauchy--Schwarz bounds expectations of products. Continuous integrands on compact intervals have equal Riemann and Lebesgue integrals. [[thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral]] [[thm-tonelli-theorem-for-sigma-finite-product-spaces]] [[thm-dominated-convergence]] [[thm-fatou-lemma]] [[cor-cauchy-schwarz-for-random-variables]]

[F5] Independent integrable factors have constant conditional expectation, and known factors may be taken out when the relevant products are integrable. The martingale definition additionally requires adaptation and integrability, not merely equality on a full event with another process. Full AC is assumed for these and the preceding interfaces. [[lem-conditioning-a-known-variable-and-an-independent-variable]] [[thm-taking-out-what-is-known]] [[def-continuous-time-adapted-process-and-martingale]] [[def-axiom-of-choice]]

## Verification

**Proof technique:** direct.

1.1 For each $m\ge1$, set $L^m_0=B_0$ and $L^m_s=B_{k2^{-m}}$ on $(k2^{-m},(k+1)2^{-m}]$, $k\ge0$. Every $L^m$ is predictable by [F1]. Define $\beta_s=\lim_mL^m_s$ where the limit exists finitely and $\beta_s=0$ otherwise. The convergence set is predictable by the countable Cauchy criterion, so $\beta$ is predictable. On the common full event of continuous Brownian paths, the left grid points increase to $s$ and $\beta_s=B_s$ simultaneously for all $s\ge0$. This construction makes no exceptional path set part of the definition. [F1, F2, construct]

2.1 For any fixed integer $r\ge1$, Gaussian moments in [F2] and Tonelli on the predictable map $\beta^{2r}$ give $$E\int_0^T\beta_s^{2r}ds=\frac{(2r-1)!!}{r+1}T^{r+1}<\infty.$$ The integrand 1 has energy T. Thus every polynomial in $\beta$ and time used below is predictable and has finite energy on every finite horizon. To quantify step approximation, use $$|x^r-y^r|\le r|x-y|(|x|+|y|)^{r-1}.$$ Cauchy--Schwarz and [F2] show, uniformly for $0\le u\le s\le T$, $$E|B_s^r-B_u^r|^2\le C_{r,T}(s-u).$$ Indeed the fourth moment of the increment is $3(s-u)^2$, while the expectation of $(|B_s|+|B_u|)^{4r-4}$ is uniformly bounded by Gaussian even moments; when r=1 this factor is 1. [F1, F2, F4, step 1.1, given]

3.1 Fix $0<t\le T$ and take $m=2^k$, $h=t/m$, $t_j=jh$, $D_j=B_{t_{j+1}}-B_{t_j}$. The predictable step process with coefficients $B_{t_j}^r$ converges to $\beta^r$ in $L^2(dt\otimes P)$, since step 2.1 bounds its squared error integral by $C_{r,T}th$. Its integral is $\sum_jB_{t_j}^rD_j$: truncate the finitely many coefficients to bounded values, apply [F3], and let the truncation bound tend to infinity. The coefficient errors tend to zero in $L^2$ by [F4]; independence gives $E|({\rm error}_j)D_j|^2=hE|{\rm error}_j|^2$, so the finite sums converge in $L^2$ too. This includes r=0 with coefficient 1 without truncation. Consequently $$\sum_jB_{t_j}^rD_j\longrightarrow\int_0^t\beta_s^r\,dB_s\quad\hbox{in }L^2(P).$$ [F1, F2, F3, F4, step 1.1, step 2.1]

4.1 The weighted centered quadratic error $Q_k=\sum_jB_{t_j}^{n-2}(D_j^2-h)$ has mean zero. Different summands are orthogonal in $L^2$: for i<j the earlier summand and $B_{t_j}^{n-2}$ are known at $t_j$, and the remaining centered increment has conditional mean zero by [F2] and [F5]. All products are integrable by Gaussian moments and Cauchy--Schwarz. The variance is therefore $$E Q_k^2=2h^2\sum_jE B_{t_j}^{2n-4}\le C_{n,T}th\longrightarrow0,$$ interpreting the power as 1 when n=2. On the common continuity event, the sums $\sum_j hB_{t_j}^{n-2}$ converge to $\int_0^t\widehat B_s^{n-2}ds$ by continuity and the left Riemann sums. The latter integral exists on every normalized path and is measurable by joint measurability and the parameter-integral statement of [F4], using positive and negative parts. [F1, F2, F4, F5, step 3.1]

5.1 Expand each power increment by the finite binomial identity and sum: $$B_t^n-B_0^n=n\sum_jB_{t_j}^{n-1}D_j+\binom n2\sum_jB_{t_j}^{n-2}D_j^2+\sum_{\ell=3}^n\binom n\ell\sum_jB_{t_j}^{n-\ell}D_j^\ell.$$ For each $\ell\ge3$, independence, Gaussian moments and Cauchy--Schwarz give $$E\sum_j|B_{t_j}|^{n-\ell}|D_j|^\ell\le C_{n,T}m h^{\ell/2}=C_{n,T}t h^{\ell/2-1}\longrightarrow0.$$ This uses the even moment of order $2\ell$ to bound the absolute moment of order $\ell$; the factor of degree n minus ell has bounded moments on [0,T], and is 1 when ell=n. The remainder is empty for n=2. Since $B_0=0$ almost surely, steps 3.1 and 4.1 prove the desired identity at fixed t by uniqueness of limits in probability. Explicitly $L^1$ errors and $L^2$ errors tend to zero in probability by Markov's inequality applied to their absolute values and squares; almost-sure Riemann-sum convergence implies convergence in probability by dominated convergence of exceedance indicators. If two candidate limits differ by more than epsilon, at least one approximation error exceeds epsilon/2, so their difference vanishes almost surely. [F2, F4, step 3.1, step 4.1]

6.1 By [F3] choose continuous versions for the countably many powers' stochastic integrals. The Lebesgue terms along $\widehat B$ are continuous on every path, and the original B is continuous on a common full event. Intersect that event with the countably many equalities from step 5.1 at rational t for all integer n and with the stochastic-integral continuity events. Continuity extends every identity to all real times on this measurable full event. This establishes the process convention in the Example without asserting measurability of the entire all-time equality set. [F1, F3, step 1.1, step 2.1, step 5.1]

7.1 A second finite telescope yields $$tB_t=\sum_jt_jD_j+\sum_jhB_{t_{j+1}}$$ almost surely, since $B_0=0$ (its coefficient is in any case zero). The first sum converges in $L^2$ to $\int_0^t s\,dB_s$ by [F3], because the deterministic left-step times converge uniformly to s. The second converges on the continuity event to $\int_0^t\widehat B_sds$. The same uniqueness and rational-continuity argument as step 5.1 and step 6.1 gives $$tB_t=\int_0^t s\,dB_s+\int_0^t\widehat B_sds$$ on a full event at all times. Subtract three times this equality from the n=3 identity and use [F3]'s linearity to obtain $B_t^3-3tB_t=3\int_0^t(\beta_s^2-s)dB_s$. The n=2 formula similarly gives the square identity. [F1, F3, step 5.1, step 6.1]

8.1 The two original polynomial processes are adapted because B is adapted. Gaussian moments give their square integrability at each finite time. Their deterministic-time equality to the continuous square-integrable martingales in step 7.1 therefore transfers the conditional martingale identity by [F5]; adaptation is checked separately. The integral coefficient energies are finite on every horizon: the square coefficient has energy $4\int_0^T s\,ds$, and the cubic coefficient has energy $9\int_0^T E(B_s^2-s)^2ds=18\int_0^T s^2ds$, by [F2]. Continuity holds on the Brownian continuity event. [F2, F3, F4, F5, step 7.1]

9.1 At t=0 both identities for n>=2 vanish on the common zero-start event. The n=2 coefficient is 1 and its zero power means the constant function 1. Separately, the n=1 identity is $B_t=\int_0^t1\,dB_s$ on a common full event, and the constant integrand has finite energy T; one does not substitute a meaningless $0\cdot B^{-1}$ term. The n=0 constant function has zero increment and is outside the displayed range. Full AC supplies the countable-choice assumption in the Riemann-to-Lebesgue bridge of [F4], and is inherited through [F5] and the countable integral construction; no claim about divergent negative powers is needed. [F2, F3, F5, step 6.1, step 8.1] ∎

## Source notes

The polynomial formula is the usual specialization of Ito's formula.
Here a direct finite-binomial proof and explicit predictable representatives
supply the identity directly from the finite-energy integral and Gaussian increment interfaces.
