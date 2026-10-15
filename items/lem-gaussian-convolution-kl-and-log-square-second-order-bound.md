---
dependency_level: 1
id: lem-gaussian-convolution-kl-and-log-square-second-order-bound
kind: lemma
title: "Gaussian convolution has second-order KL and log-square error"
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
deps:
  - lem-normal-location-scale-density
  - cor-cauchy-schwarz-inequality-for-l-two
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - def-kullback-leibler-divergence
  - def-axiom-of-choice
  - thm-differentiation-under-the-integral-sign
  - thm-integration-by-parts
  - thm-ftc-second-part
  - thm-logarithm-derivative-and-integral
  - thm-dominated-convergence
proof_strategy: direct
axiom_use: "AC is inherited from the normal-law and directional KL interfaces; the analytic estimates add no choice principle."
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
    - title: "Ghosal and van der Vaart, Posterior convergence rates of Dirichlet mixtures at smooth densities (2007), Section 9 and Lemma 4"
      url: "https://arxiv.org/pdf/0708.1885"
---

## Statement

Assume AC. Let $p\in C^2(\mathbb R)$ be a nonnegative compactly supported probability density and suppose
$$J:=\int_{\{p>0\}}\frac{(p''(x))^2}{p(x)}\,dx<\infty.$$
For $\sigma>0$, set $q_\sigma=p*\phi_\sigma$, where $\phi_\sigma$ is the centered normal density with standard deviation $\sigma$. Then
$$\int\frac{(p-q_\sigma)^2}{q_\sigma}\,dx\le\frac49\sigma^4J,\qquad \mathrm{KL}(p\Vert q_\sigma)\le\frac49\sigma^4J,\qquad \int p\left[\log\frac p{q_\sigma}\right]^2dx\le\frac49\sigma^4J.$$
The logarithmic integrands are zero where $p=0$. No unimodality or uniform bound on $p/q_\sigma$ is assumed.

## Facts & Assumptions

**Given:** AC and the density and integrability hypotheses of the Statement.

[F1] The normal kernel is $\phi_\sigma(x)=(\sigma\sqrt{2\pi})^{-1}e^{-x^2/(2\sigma^2)}$ and integrates to one. [[lem-normal-location-scale-density]]

[F2] Cauchy–Schwarz bounds an integral of a product by the product of its two $L^2$ norms. [[cor-cauchy-schwarz-inequality-for-l-two]]

[F3] Nonnegative product integrals may be taken in either order. [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]

[F4] The directional KL divergence of two densities with absolute continuity is the integral of their log ratio under the first law. [[def-kullback-leibler-divergence]]

[F5] A parameter derivative may pass under an integral when it is measurable and dominated locally by one integrable function. [[thm-differentiation-under-the-integral-sign]]

[F6] For differentiable functions with integrable derivatives on a compact interval, integration by parts holds. [[thm-integration-by-parts]]

[F7] If a differentiable function has an integrable derivative on a compact interval, its derivative integrates to the endpoint difference. [[thm-ftc-second-part]]

[F8] The natural logarithm is differentiable on $(0,\infty)$ with derivative $1/x$. [[thm-logarithm-derivative-and-integral]]

[F9] Pointwise-convergent integrands dominated by one integrable function have convergent integrals. [[thm-dominated-convergence]]

## Proof

1.1 At every zero of the nonnegative differentiable function $p$, $p'=0$. At each accumulation point of its zero set, differentiation along zeros of $p'$ gives $p''=0$; isolated zeros form a countable set. Thus $p''=0$ almost everywhere on $\{p=0\}$. Put $r=p''/p$ on $\{p>0\}$ and zero elsewhere. Then $p''=rp$ almost everywhere, $\int r^2p=J$, and [F2] gives $\int|p''|\le\sqrt J$. Both $p$ and $p''$ are continuous and compactly supported. [F2, given, algebra]

2.1 Let $P_t f=f*\phi_{\sqrt t}$ for $t>0$. Direct differentiation of [F1] gives $\partial_t\phi_{\sqrt t}=\tfrac12\partial_x^2\phi_{\sqrt t}$. For fixed $x$ and $0<\varepsilon<t$, the differentiated integrand in $P_sp(x)$ is bounded on $s\in[\varepsilon,t]$ and the compact support of $p$ by $C_{x,\varepsilon,t}|p(z)|$; differentiation under the integral [F5] and two integrations by parts [F6] therefore give $\partial_sP_s p=\tfrac12P_s p''$. The boundary terms vanish because $p,p'$ have compact support. Dominated convergence [F9] makes $s\mapsto P_s p''(x)$ continuous on $[\varepsilon,t]$, so [F7] integrates the derivative there. Gaussian approximate identities converge uniformly on continuous compactly supported functions: split their convolution integral at $|z|\le\delta$, where uniform continuity controls the integrand difference, and its complement, whose normal mass tends to zero by scaling and integrability of [F1]. Letting $\varepsilon\downarrow0$ consequently yields $p-P_t p=-\tfrac12\int_0^tP_s p''\,ds$ pointwise; the omitted integral over $[0,\varepsilon]$ tends to zero because $|P_sp''(x)|\le\|p''\|_\infty$. [F1, F5, F6, F7, F9, step 1.1, algebra]

2.2 Fix $t>0$ and put $q=P_t p$. It is positive everywhere because $p$ is a nonzero nonnegative density and the Gaussian kernel is positive; Tonelli [F3] and $\int\phi_{\sqrt t}=1$ show $q$ integrates to one. For $0<s\le t$, the Gaussian formula gives $\phi_{\sqrt t}(z)\ge\sqrt{s/t}\,\phi_{\sqrt s}(z)$ for every $z$, hence $q\ge\sqrt{s/t}P_s p$. Applying [F2] inside the convolution and then [F3] gives $|P_s p''|^2\le(P_s p)P_s(r^2p)$ and therefore $\int |P_s p''|^2/q\le\sqrt{t/s}\int P_s(r^2p)=\sqrt{t/s}J$. These inequalities remain valid if one of the pointwise nonnegative integrals is infinite. [F1, F2, F3, step 1.1, algebra]

3.1 Apply [F2] to the time integral in step 2.1 with weights $w(s)=(t/s)^{1/4}$. Since $\int_0^t w(s)ds=4t/3$, it gives $|p-q|^2\le\tfrac14(4t/3)\int_0^t w(s)^{-1}|P_s p''|^2ds$. Divide by $q$, integrate and use [F3] and step 2.2. The result is $\int(p-q)^2/q\le\tfrac14(4t/3)J\int_0^t(t/s)^{1/4}ds=(4/9)t^2J$. In particular all these weighted integrals are finite. [F2, F3, step 2.1, step 2.2, algebra]

4.1 For $u>0$, the function $u-1-\log u$ has value zero at $1$ and derivative $(u-1)/u$, so $\log u\le u-1$ and $u\log u-u+1\le(u-1)^2$. For $t\ge1$, $t-t^{-1}-2\log t$ has value zero at $1$ and derivative $(t-1)^2/t^2\ge0$; replacing $t$ by $1/t$ gives $2|\log t|\le|t-t^{-1}|$ also for $0<t<1$. With $u=t^2$, this yields $u(\log u)^2\le(u-1)^2$. At $u=0$, use the conventions $u\log u=u(\log u)^2=0$, for which both inequalities hold. Apply these pointwise bounds to $u=p/q$ and integrate against $q$. Since $p,q$ integrate to one, [F4] identifies the first integral as KL; its negative part is integrable because $u\log u\ge-e^{-1}$. Both requested logarithmic quantities are at most the chi-square integral from step 3.1. Taking $t=\sigma^2$ proves the Statement. [F4, F8, step 3.1, algebra] ∎
