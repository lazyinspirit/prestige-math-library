---
id: lem-ip-joint-range-invariance-vsc-estimate
kind: lemma
title: The joint relaxed objective controls Bregman and range errors
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 5
deps:
  - def-ip-differential-range-invariance
  - def-ip-relaxed-range-invariance-objective
  - def-ip-banach-convex-subgradient-and-dual-pairing
  - def-ip-bregman-distance
  - def-ip-variational-source-condition
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Barbara Kaltenbacher, Convergence rates under a range invariance condition with application to electrical impedance tomography, equations (2.10)–(2.14)"
      url: "https://arxiv.org/pdf/2403.18704"
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Statement

Let $1\le p<\infty$. Let $X,Y,Z$ be real Banach spaces, $X_0\subseteq X$ a closed linear subspace, $D\subseteq X$ a domain containing $X_0$ and $U$, and $x_0\in U\cap X_0$. Let $F:D\to Y$, $K\in\mathcal L(Z,Y)$, and $r:D\to Z$ satisfy $F(x)-F(x_0)=Kr(x)$ on $D$, with $r|_U:U\to\widetilde U$ bijective and $r$ Lipschitz with constant $L_r$ on $D$. Let $P:X\to X$ be a bounded linear projection such that $P|_{X_0}=0$, $(I-P)(X)\subseteq X_0$, and $P(x_0)=P(x^\dagger)=0$ for an exact solution $x^\dagger\in U\cap X_0$; put $y:=F(x^\dagger)$. Assume the projected points $(I-P)r^{-1}(\widehat r)$ belong to $D\cap X_0$ for all admitted $\widehat r\in\widetilde U$.

Let $\check R:X_0\to[0,+\infty]$ be proper and convex, choose $\xi^\dagger\in\partial\check R(x^\dagger)\subseteq X_0^*$, and suppose that for some $R_0\ge\check R(x^\dagger)$, $b\in[0,1)$, and continuous nondecreasing concave $\psi:[0,\infty)\to[0,\infty)$ with $\psi(0)=0$, the variational source inequality

$$-\langle\xi^\dagger,\check x-x^\dagger\rangle\le bD_{\check R}^{\xi^\dagger}(\check x,x^\dagger)+\psi\big(\|F(\check x)-F(x^\dagger)\|_Y^p\big)$$

holds whenever $\check x\in D\cap X_0$ and $\check R(\check x)\le R_0$, where $D_{\check R}^{\xi^\dagger}(\check x,x^\dagger):=\check R(\check x)-\check R(x^\dagger)-\langle\xi^\dagger,\check x-x^\dagger\rangle$. Set $R_P=0$ in the joint objective. Let $Q:\widetilde U\times\widetilde U\to[0,\infty]$ satisfy $Q(a,b)=Q(b,a)$ and $Q(a,b)=0$ exactly when $a=b$, and assume there is a constant $C_Q\ge0$ such that

$$\|P(r^{-1}(a))-P(r^{-1}(b))\|_X\le C_Q Q(a,b)\qquad(a,b\in\widetilde U).$$

For $\delta>0$, let $y^\delta\in Y$ satisfy $\|y^\delta-y\|_Y\le\delta$. Let $\alpha,\beta>0$, $C_\eta\ge0$, and let $(\widehat r_\delta,x_\delta)\in\widetilde U\times U$ be an $\eta_\delta$-minimizer of the joint objective, meaning

$$\mathcal J_{\alpha,\beta}^\delta(\widehat r_\delta,x_\delta)\le\mathcal J_{\alpha,\beta}^\delta(\widehat r,x)+\eta_\delta\qquad((\widehat r,x)\in\widetilde U\times U),\qquad 0\le\eta_\delta\le C_\eta\delta^p.$$

Assume $\check x_\delta:=(I-P)r^{-1}(\widehat r_\delta)$ lies in the stated VSC sublevel. Define

$$s_\delta:=2^{1-p}\|K(\widehat r_\delta-r(x^\dagger))\|_Y^p+\beta Q(r(x_\delta),\widehat r_\delta)^p+\|Px_\delta\|_X^p,\qquad e_\delta:=D_{\check R}^{\xi^\dagger}(\check x_\delta,x^\dagger),$$

and

$$C_*:=2^{2p-2}\max\left\{1,\|K\|^pL_r^p,\frac{\|K\|^pL_r^pC_Q^p}{\beta}\right\},\qquad d_\delta:=(2+C_\eta)\delta^p.$$

Then

$$s_\delta+(1-b)\alpha e_\delta\le d_\delta+\alpha\psi(C_*s_\delta).$$

## Statement references

[Barbara Kaltenbacher, *Convergence rates under a range invariance condition with application to electrical impedance tomography*, equations (2.10)–(2.14)](https://arxiv.org/pdf/2403.18704)

## Facts & Assumptions

**Given:** The Banach spaces, range factorization, projection, regularizer, VSC, compatibility inequality, exact datum, noise bound, and approximate minimizer in the Statement.

[A1] The candidate projected point $\check x_\delta$ belongs to $D\cap X_0$ and satisfies $\check R(\check x_\delta)\le R_0$, so the VSC applies to it.

[A2] The noisy datum and approximate-minimizer tolerance satisfy the bounds in the Statement.

[A3] The projection-coupling bound holds for all range variables in the Statement.

[F1] [[def-ip-differential-range-invariance]]: $F(x)-F(x_0)=Kr(x)$ for every $x$ in the range-factorization domain.

[F2] [[def-ip-relaxed-range-invariance-objective]]: with $R_P=0$, the joint objective is $\|K\widehat r+F(x_0)-y^\delta\|_Y^p+\alpha\check R((I-P)r^{-1}(\widehat r))+\beta Q(r(x),\widehat r)^p+\|Px\|_X^p$.

[F3] [[def-ip-banach-convex-subgradient-and-dual-pairing]]: $\xi^\dagger\in\partial\check R(x^\dagger)$ means $\check R(z)\ge\check R(x^\dagger)+\langle\xi^\dagger,z-x^\dagger\rangle$ for every $z\in X_0$.

[F4] [[def-ip-bregman-distance]]: $D_{\check R}^{\xi^\dagger}(z,x^\dagger)=\check R(z)-\check R(x^\dagger)-\langle\xi^\dagger,z-x^\dagger\rangle$.

[F5] [[def-ip-variational-source-condition]]: on the named regularizer sublevel, $-\langle\xi^\dagger,z-x^\dagger\rangle\le bD_{\check R}^{\xi^\dagger}(z,x^\dagger)+\psi(\|F(z)-F(x^\dagger)\|_Y^p)$.

## Proof

1.1 Compare the approximate-minimum inequality with $(\widehat r,x)=(r(x^\dagger),x^\dagger)$. By [F1], $Kr(x^\dagger)+F(x_0)=F(x^\dagger)=y$, while $Q(r(x^\dagger),r(x^\dagger))=0$ and $Px^\dagger=0$. Since $r^{-1}(r(x^\dagger))=x^\dagger$ and $P(x^\dagger)=0$, the comparison regularizer is $\check R(x^\dagger)$, so its objective is at most $\delta^p+\alpha\check R(x^\dagger)$. Writing the estimated data residual as $K(\widehat r_\delta-r(x^\dagger))+(y-y^\delta)$, the triangle inequality gives $\|K(\widehat r_\delta-r(x^\dagger))\|\le\|K\widehat r_\delta+F(x_0)-y^\delta\|+\delta$. For $p=1$ the power inequality is equality; for $p>1$, $f(t)=t^p$ has $f\prime\prime(t)=p(p-1)t^{p-2}\ge0$ for $t>0$ and is continuous at zero, so it is convex on $[0,\infty)$; midpoint convexity gives $(a+b)^p\le2^{p-1}(a^p+b^p)$ for $a,b\ge0$. Rearranging yields $2^{1-p}\|K(\widehat r_\delta-r(x^\dagger))\|^p\le\|K\widehat r_\delta+F(x_0)-y^\delta\|^p+\delta^p$. Combining this with the comparison and $\eta_\delta\le C_\eta\delta^p$ gives $s_\delta+\alpha(\check R(\check x_\delta)-\check R(x^\dagger))\le d_\delta$. [A2, F1, F2, given, algebra]

2.1 By [F3], $\xi^\dagger$ is a subgradient at $x^\dagger$, and [F4] gives $\check R(\check x_\delta)-\check R(x^\dagger)=e_\delta+\langle\xi^\dagger,\check x_\delta-x^\dagger\rangle$. The VSC [F5] therefore implies $\check R(\check x_\delta)-\check R(x^\dagger)\ge(1-b)e_\delta-\psi(\|F(\check x_\delta)-F(x^\dagger)\|^p)$. Substituting this lower bound in step 1.1 yields $s_\delta+(1-b)\alpha e_\delta\le d_\delta+\alpha\psi(\|F(\check x_\delta)-F(x^\dagger)\|^p)$. [A1, F3, F4, F5, step 1.1, algebra]

2.2 Put $u_\delta=r^{-1}(\widehat r_\delta)$, so $\check x_\delta=(I-P)u_\delta$. Since $r^{-1}(r(x_\delta))=x_\delta$, assumption [A3] and the triangle inequality give $\|Pu_\delta\|\le\|Px_\delta\|+C_QQ(r(x_\delta),\widehat r_\delta)$. Lipschitz continuity of $r$ gives $\|r(\check x_\delta)-\widehat r_\delta\|=\|r((I-P)u_\delta)-r(u_\delta)\|\le L_r\|Pu_\delta\|$. Applying [F1] at $\check x_\delta$ and $x^\dagger$, then applying $(a+b)^p\le2^{p-1}(a^p+b^p)$ twice, yields $\|F(\check x_\delta)-F(x^\dagger)\|^p\le2^{p-1}\|K(\widehat r_\delta-r(x^\dagger))\|^p+2^{2p-2}\|K\|^pL_r^p(\|Px_\delta\|^p+C_Q^pQ(r(x_\delta),\widehat r_\delta)^p)\le C_*s_\delta$. Monotonicity of $\psi$ gives $\psi(\|F(\check x_\delta)-F(x^\dagger)\|^p)\le\psi(C_*s_\delta)$. [A3, F1, step 1.1, algebra]

3.1 Substitute the last bound from step 2.2 into the inequality from step 2.1. This gives $s_\delta+(1-b)\alpha e_\delta\le d_\delta+\alpha\psi(C_*s_\delta)$, as claimed. [step 2.1, step 2.2, algebra] ∎
