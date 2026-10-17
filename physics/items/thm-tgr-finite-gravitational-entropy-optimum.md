---
id: thm-tgr-finite-gravitational-entropy-optimum
kind: theorem
title: "Unique finite gravitational Gibbs variational optimum"
status: published
origin: pipeline
domain: mathematics
library: mathematics
deps:
  - lem-tgr-finite-gravitational-gibbs
  - def-tgr-gravitating-phase-reference
  - thm-nonnegative-integral-zero-iff-zero-almost-everywhere
dependency_roles:
  lem-tgr-finite-gravitational-gibbs: mathematical-premise
  def-tgr-gravitating-phase-reference: mathematical-premise
  thm-nonnegative-integral-zero-iff-zero-almost-everywhere: mathematical-premise
justified_by: []
aliases: []
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Joseph Katz, Thermodynamics and Self-Gravitating Systems, Foundations of Physics 33 (2003), author manuscript"
      url: "https://arxiv.org/pdf/astro-ph/0212295"
    - title: "David Tong, Statistical Physics, complete author-hosted lecture notes"
      url: "https://davidtong.org/pdfs/teaching/statistical-physics/statphys.pdf"
    - title: "Terence Tao, An Introduction to Measure Theory, complete author-hosted text"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
dependency_level: 3
---

## Statement

Under the hypotheses of [[lem-tgr-finite-gravitational-gibbs]], let $\rho:\Gamma_N\to[0,\infty)$ be a measurable probability density relative to $\nu_N$, so $\int_{\Gamma_N}\rho\,d\nu_N=1$, satisfying
$$\int_{\Gamma_N}|\rho\log\rho|\,d\nu_N<\infty,\qquad \int_{\Gamma_N}|H_{N,a}|\rho\,d\nu_N<\infty,$$
with $0\log0=0$. For any probability density $\sigma$ with integrable energy, define its mean energy by $\langle H_{N,a}\rangle_\sigma:=\int_{\Gamma_N}H_{N,a}\sigma\,d\nu_N$. Define $S(\rho)=-k_B\int_{\Gamma_N}\rho\log\rho\,d\nu_N$ and $D(\rho\Vert p_\beta):=\int_{\Gamma_N}\rho\log(\rho/p_\beta)\,d\nu_N$, with $0\log(0/p_\beta):=0$. Then
$$S(\rho)-k_B\beta\langle H_{N,a}\rangle_\rho\le k_B\log Z_N,$$
with equality exactly when $\rho=p_\beta$ almost everywhere. Among densities with the same mean energy as $p_\beta$, this makes $p_\beta$ the unique entropy maximizer.

For every bounded measurable real $u$ with $\int p_\beta u\,d\nu_N=0$, $\int H_{N,a}p_\beta u\,d\nu_N=0$, and $u\ne0$ in $L^2(p_\beta d\nu_N)$, the perturbation $\rho_t=p_\beta(1+tu)$ is a probability density of the same mean energy for $|t|\|u\|_\infty\le1/2$. For sufficiently small nonzero $t$,
$$S(\rho_t)<S(p_\beta),\qquad D(\rho_t\Vert p_\beta)=\frac{t^2}{2}\int p_\beta u^2\,d\nu_N+R_t,\quad |R_t|\le\frac23|t|^3\|u\|_\infty\int p_\beta u^2\,d\nu_N.$$
This is a variational claim in the stated density class, not a dynamical equilibration theorem.

## Facts & Assumptions

**Given:** The positive normalized density $p_\beta$, its finite energy moments, and the reference-relative entropy convention.

[F1] For the softened finite model, $p_\beta=Z_N^{-1}e^{-\beta H_{N,a}}$ is positive and normalized, and its energy moments are finite. ([[lem-tgr-finite-gravitational-gibbs]])

[F2] The phase-reference item defines $S(\rho)=-k_B\int\rho\log\rho\,d\nu_N$ for probability densities relative to the dimensionless measure $\nu_N$. ([[def-tgr-gravitating-phase-reference]])

[F3] A nonnegative measurable function with integral zero vanishes almost everywhere. ([[thm-nonnegative-integral-zero-iff-zero-almost-everywhere]])

## Proof

1.1 For $s>0$, $\phi(s)=s\log s-s+1$ has derivative $\log s$, is decreasing for $0<s<1$, and increasing for $s>1$. Its continuous value at $s=0$ is $1$, so $\phi(s)\ge0$ with equality exactly at $s=1$. [algebra]

2.1 Since $p_\beta>0$, set $r=\rho/p_\beta$ almost everywhere. The assumptions and $\log p_\beta=-\beta H_{N,a}-\log Z_N$ make $\rho\log(\rho/p_\beta)$ integrable. Expanding $\phi$ and using $\int\rho=\int p_\beta=1$ gives
$$D(\rho\Vert p_\beta)=\int p_\beta\phi(r)\,d\nu_N =\int\rho\log\rho\,d\nu_N+\beta\langle H_{N,a}\rangle_\rho+\log Z_N\ge0.$$
[F1, step 1.1, algebra]

3.1 Rearranging step 2.1 and using the entropy convention [F2] gives the stated inequality. Equality forces $\phi(r)=0$ almost everywhere for the probability measure $p_\beta d\nu_N$, so $r=1$ almost everywhere by [F3], and $\rho=p_\beta$. Conversely, if $\rho=p_\beta$ almost everywhere then $D(\rho\Vert p_\beta)=0$ in step 2.1 and the inequality is an equality. At equal mean energy this is the unique entropy-maximizing density. [F1, F2, F3, step 2.1, algebra]

4.1 Put $\psi(x)=(1+x)\log(1+x)-x$. For $|x|\le1/2$, $\psi(0)=\psi'(0)=0$ and $\psi''(x)=1/(1+x)$, hence $|\psi''(x)-1|\le2|x|$. Integrating this second-derivative bound twice from zero gives $|\psi(x)-x^2/2|\le |x|^3/3\le2|x|^3/3$. The two centering conditions make $\rho_t$ normalized and energy preserving, while $|tu|\le1/2$ makes it nonnegative. Moreover [F1] gives $\int |H_{N,a}|p_\beta<\infty$ and $\int p_\beta|\log p_\beta|<\infty$ by $\log p_\beta=-\beta H_{N,a}-\log Z_N$; since $1+tu$ and $\log(1+tu)$ are bounded, these imply $\int |H_{N,a}|\rho_t<\infty$ and $\int|\rho_t\log\rho_t|<\infty$. Thus $\rho_t$ belongs to the stated density class. Therefore
$$D(\rho_t\Vert p_\beta)=\int p_\beta\psi(tu)\,d\nu_N =\frac{t^2}{2}\int p_\beta u^2\,d\nu_N+R_t$$
with the stated bound. Since $u$ is nonzero in $L^2(p_\beta d\nu_N)$, the quadratic term dominates the cubic bound for sufficiently small nonzero $t$. The equal-energy identity in step 2.1 then gives $S(\rho_t)<S(p_\beta)$. [F1, F2, step 2.1, algebra] ∎
