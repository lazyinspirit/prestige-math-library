---
id: lem-product-prior-posterior-second-moment-in-negative-sobolev-space
kind: lemma
title: A negative-Sobolev posterior second-moment bound
status: draft
origin: pipeline
dependency_level: 2
deps:
  - def-negative-sobolev-space-for-white-noise
  - lem-wavelet-product-prior-is-l2-valued
  - lem-product-prior-coordinate-posterior-law
  - def-countable-choice
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - thm-monotone-convergence-for-the-integral
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Castillo and Nickl, Nonparametric Bernstein–von Mises theorems in Gaussian white noise, Theorem 5 and proof, printed pp. 2013–2016"
      url: https://www.statslab.cam.ac.uk/~rn289/Site/__files/AOS1133.pdf
    - title: "Giné and Nickl, Mathematical Foundations of Infinite-Dimensional Statistical Models, Theorem 7.3.12 and proof, printed pp. 584–586"
      url: https://www.statslab.cam.ac.uk/~rn289/Site/__files/FULLPDF.pdf
---

## Statement

Use the wavelet product-prior white-noise model of [[lem-wavelet-product-prior-is-l2-valued]] and [[lem-product-prior-coordinate-posterior-law]], with $\sigma_l=2^{-l(\alpha+1/2)}$, $\alpha>0$, and $2^l$ coefficients at level $l\ge0$. Let $\theta_{0,lk}$ be the coefficients of a fixed $f_0\in L^2([0,1])$. Assume countable choice for the $L^2$ prior construction, with the full posterior kernel supplied by [[lem-product-prior-coordinate-posterior-law]], and suppose

$$\sup_{l,k}\left|\frac{\theta_{0,lk}}{\sigma_l}\right|\le M<\tau,$$

where the common prior density $\varphi$ satisfies $\varphi(u)\le C_\varphi$ for all $u$, $\varphi(u)\ge c_\varphi>0$ for $|u|<\tau$, and $m_2:=\int u^2\varphi(u)\,du<\infty$. For every $\delta>1/2$ there is a constant $C_\delta<\infty$, independent of $n$, such that

$$\mathbb E_{f_0}^{(n)}\int\|f-f_0\|_{H(\delta)}^2\,\Pi_n(df\mid X^{(n)})\le\frac{C_\delta}{n}.$$

No continuity assumption on $\varphi$ is needed for this moment estimate.

## Facts & Assumptions

[F1] [[def-negative-sobolev-space-for-white-noise]]: $\|u\|_{H(\delta)}^2=\sum_{l,k}w_l^\delta|u_{lk}|^2$, where $w_l^\delta=a_l^{-1}(\log a_l)^{-2\delta}$ and $\sum_{l,k}w_l^\delta<\infty$ for $\delta>1/2$.

[F2] [[lem-product-prior-coordinate-posterior-law]]: Given the data coordinate $X_{lk}$, the posterior density of $\theta_{lk}$ is proportional to $e^{-n(\theta-X_{lk})^2/2}\sigma_l^{-1}\varphi(\theta/\sigma_l)$; finite coordinate marginals factor.

[F3] [[thm-monotone-convergence-for-the-integral]]: Expectations of nonnegative partial sums increasing pointwise to a limit increase to the expectation of that limit.

[F4] [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]: For the nonnegative Gaussian-integral integrand, expectation and Lebesgue integration may be interchanged on the sigma-finite product of the normal probability space and $\mathbb R$.

[A1] The true normalized coordinates $r_{lk}=\theta_{0,lk}/\sigma_l$ satisfy $|r_{lk}|\le M<\tau$, and $\varphi$ has the boundedness, local positivity, and second-moment properties in the statement.

[A2] [[def-countable-choice]]: Countable choice is used for the $L^2$ prior construction. The full posterior kernel is supplied as model input in [F2]; the coordinate moment estimates below require no further choice.

**Given:** Countable choice, the white-noise observations $X_{lk}=\theta_{0,lk}+n^{-1/2}Z_{lk}$ with independent standard normal coordinates, the prior, and its coordinate posterior law. The expected posterior loss bound in the Statement is to be proved.

## Proof

1.1 Fix $(l,k)$ and abbreviate $\sigma=\sigma_l$, $\theta_0=\theta_{0,lk}$, $r=\theta_0/\sigma$, and $\lambda=\sqrt n\,\sigma$. Under the true law write $X=\theta_0+n^{-1/2}Z$, where $Z$ has density $(2\pi)^{-1/2}e^{-z^2/2}$. If $B_{lk}(X)=\int(\theta-\theta_0)^2\,\Pi_n(d\theta_{lk}\mid X)$, change variables $v=\sqrt n(\theta-\theta_0)$ in [F2] to obtain $nB_{lk}(X)=\frac{N_\lambda(Z)}{D_\lambda(Z)},\quad D_\lambda(z)=\frac1\lambda\int_{\mathbb R}e^{-v^2/2+zv}\varphi(r+v/\lambda)\,dv,\quad N_\lambda(z)=\frac1\lambda\int_{\mathbb R}v^2e^{-v^2/2+zv}\varphi(r+v/\lambda)\,dv.$ All integrands are nonnegative and the denominator is positive. The posterior kernel is the $L^2$ model supplied by [F2] under [A2]. [A1, A2, F2, given, algebra]

2.1 Set $h=(\tau-M)/2>0$. If $\lambda\le S_0$ for a fixed $S_0>0$, then $|r+v/\lambda|<\tau$ whenever $|v|\le h\lambda$. Substituting $v=\lambda t$ and pairing $t$ with $-t$ gives $D_\lambda(z)\ge c_\varphi\int_{-h}^h e^{-\lambda^2t^2/2+z\lambda t}\,dt=2c_\varphi\int_0^h e^{-\lambda^2t^2/2}\cosh(z\lambda t)\,dt\ge 2hc_\varphi e^{-h^2\lambda^2/2}\ge d_0:=2hc_\varphi e^{-h^2S_0^2/2}>0,$ because $\cosh(x)\ge1$ and $e^{-\lambda^2t^2/2}\ge e^{-h^2\lambda^2/2}$ on $[0,h]$. Completing the square in the standard normal density gives $\mathbb E e^{Zv}=e^{v^2/2}$; hence, by the substitution $u=r+v/\lambda$, $\mathbb E N_\lambda(Z)=\frac1\lambda\int v^2\varphi(r+v/\lambda)\,dv=\lambda^2\int(u-r)^2\varphi(u)\,du\le2\lambda^2(m_2+M^2).$ Here [F4] justifies the exchange of expectation and the nonnegative $v$-integral. Therefore $\mathbb E B_{lk}(X)\le C\lambda^2/n=C\sigma_l^2\le CS_0^2/n$ in this range. [A1, given, step 1.1, F4, algebra]

2.2 If $\lambda\ge S_0$, let $R=hS_0$. For $|v|\le R$ one has $|r+v/\lambda|<\tau$, so $D_\lambda(z)\ge\frac{c_\varphi e^{z^2/2}}\lambda I_R(z),\qquad N_\lambda(z)\le\frac{C_\varphi e^{z^2/2}}\lambda J(z),$ where $I_R(z)=\int_{-R}^{R}e^{-(v-z)^2/2}\,dv$ and $J(z)=\int_{\mathbb R}v^2e^{-(v-z)^2/2}\,dv=\sqrt{2\pi}(1+z^2)$. Thus $nB_{lk}(X)\le(C_\varphi/c_\varphi)J(Z)/I_R(Z)$. For $|z|\le R$, integrate $I_R$ over the half-interval nearest $z$; for $|z|>R$, integrate over the half-interval adjacent to the nearer endpoint. These choices give the common lower bound $I_R(z)\ge\frac R2\exp\left(-\frac{R^2}{2}-\frac{(|z|-R/2)_+^2}{2}\right).$ Consequently $\mathbb E[J(Z)/I_R(Z)]$ is finite: after multiplying by the standard normal density, its integrand is bounded on $|z|\le R/2$ and is at most a constant times $(1+z^2)e^{-R|z|/2}$ on $|z|>R/2$. Hence $\mathbb E B_{lk}(X)\le C/n$ also when $\lambda\ge S_0$, with $C$ independent of $(l,k,n)$. [A1, given, step 1.1, algebra]

3.1 The two ranges in steps 2.1 and 2.2 cover every $\lambda>0$; since $\sigma_l^2\le S_0^2/n$ in the first range, there is a single constant $C$ for which $\sup_{l,k}\mathbb E_{f_0}^{(n)}B_{lk}(X)\le C/n$. [step 2.1, step 2.2]

4.1 By [F1], the posterior squared loss is the nonnegative series $\sum_{l,k}w_l^\delta B_{lk}(X)$. Apply monotone convergence [F3] to its finite partial sums and use step 3.1 to obtain $\mathbb E_{f_0}^{(n)}\int\|f-f_0\|_{H(\delta)}^2\,\Pi_n(df\mid X)=\sum_{l,k}w_l^\delta\mathbb E_{f_0}^{(n)}B_{lk}(X)\le\frac Cn\sum_{l,k}w_l^\delta.$ The trace on the right is finite for $\delta>1/2$ by [F1], proving the bound. [A1, F1, F3, step 3.1] ∎
