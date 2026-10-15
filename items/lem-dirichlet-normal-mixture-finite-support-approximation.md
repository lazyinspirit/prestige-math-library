---
id: lem-dirichlet-normal-mixture-finite-support-approximation
kind: lemma
title: "Compactly supported Gaussian mixtures admit logarithmic-size finite approximations"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 2
deps:
  - lem-dirichlet-normal-mixture-density-well-defined
  - lem-normal-location-scale-density
  - def-monic-probabilists-hermite-polynomials
  - cor-cauchy-schwarz-inequality-for-l-two
  - def-axiom-of-choice
  - lem-normal-location-scale-mean-and-variance
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - thm-integration-by-parts
  - thm-ftc-second-part
proof_strategy: direct
axiom_use: "Finite-dimensional convex-hull reduction uses only finite choice; AC is inherited from the normal-density interface."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Subhashis Ghosal and Aad W. van der Vaart, Posterior convergence rates of Dirichlet mixtures at smooth densities, Lemma 2"
      url: "https://arxiv.org/pdf/0708.1885"
    - title: "Subhashis Ghosal and Aad W. van der Vaart, Fundamentals of Nonparametric Bayesian Inference, Lemma 6.8"
      url: "https://diamhomes.ewi.tudelft.nl/~avandervaart/books/bayesianstatistics"
---

## Statement

There is a universal constant $C$ such that, for $A,\sigma>0$,
$0<\eta<1/2$, and every probability measure $F$ supported on $[-A,A]$,
there is a discrete probability measure $F'$ on $[-A,A]$ with at most
$$C(A/\sigma\vee1)\log(e/\eta)$$
support points and
$$\|p_{F,\sigma}-p_{F',\sigma}\|_1\le\eta,\qquad \|p_{F,\sigma}-p_{F',\sigma}\|_\infty\le\eta/\sigma.$$

## Facts & Assumptions

**Given:** $A,\sigma>0$, $0<\eta<1/2$, and a probability measure $F$ on $[-A,A]$.

[F1] [[lem-dirichlet-normal-mixture-density-well-defined]]: $p_{F,\sigma}$ is the mixture integral of the normal location-scale density.

[F2] [[lem-normal-location-scale-density]]: the standard normal density is $\phi(x)=(2\pi)^{-1/2}e^{-x^2/2}$ and $\phi_\sigma(x)=\sigma^{-1}\phi(x/\sigma)$.

[F3] [[def-monic-probabilists-hermite-polynomials]]: $H_m$ is monic of degree $m$ and $H_{m+1}=xH_m-mH_{m-1}$.

[F4] Cauchy--Schwarz bounds an $L^1$ integral of a product by the product of its $L^2$ norms. [[cor-cauchy-schwarz-inequality-for-l-two]]

[F5] For a standard normal random variable $Z$, $E[Z^2]=1$. [[lem-normal-location-scale-mean-and-variance]]

[F6] Nonnegative product integrals may be interchanged. [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]

[F7] Integration by parts holds for continuously differentiable functions on compact intervals. [[thm-integration-by-parts]]

[F8] A differentiable function with integrable derivative on a compact interval has endpoint difference equal to the integral of its derivative. [[thm-ftc-second-part]]

[A1] Assume AC for the normal-density interface. [[def-axiom-of-choice]]

## Proof

**Given:** The hypotheses in the Statement.

1.1 Partition $[-A,A]$ into $K\le 2A/\sigma+1$ consecutive Borel intervals $I_i$ of length at most $\sigma$, with left endpoints $a_i$. Ignore intervals of zero $F$-mass and let $G_i$ be the law of $W_i=(Z-a_i)/\sigma$ conditional on $Z\in I_i$. Let $\ell_i$ be the length of $I_i$ and put $b_i=\ell_i/\sigma\le1$, so $G_i$ is supported on $[0,b_i]$. Approximate the moment vector $(\int w\,dG_i,\ldots,\int w^m dG_i)$ by finite sums obtained from partitions of $[0,b_i]$; it is therefore in the closure of the convex hull of the compact moment curve $w\mapsto(w,\ldots,w^m)$ on that interval. Every finite convex combination with more than $m+1$ points can be reduced: affine dependence supplies coefficients $c_j$, not all zero, with $\sum c_j=0$ and $\sum c_jx_j=0$; moving the weights along this relation until one becomes zero preserves nonnegativity and the represented point, so iteration gives at most $m+1$ points. Thus the convex hull is the continuous image of a compact set consisting of $m+1$ curve points and simplex weights; it is compact and closed. The moment vector belongs to it, giving a probability $G'_i$ on at most $m+1$ points of $[0,b_i]$ matching the first $m$ moments of $G_i$. [A1, F1, given, construct]

1.2 The Hermite recurrence [F3] and differentiation of $\phi$ give $\phi^{(r)}=(-1)^rH_r\phi$ for every integer $r\ge0$. The case $r=0$ is immediate. If it holds at orders $r$ and $r-1$, differentiating $H_r$'s recurrence gives $H'_{r+1}=H_r+xH'_r-rH'_{r-1}=H_r+r(xH_{r-1}-(r-1)H_{r-2})=(r+1)H_r$; the base cases $H'_0=0$ and $H'_1=1$ start this induction. Thus differentiating $(-1)^rH_r\phi$ gives $(-1)^{r+1}H_{r+1}\phi$. Since $H_r$ is monic, $H_r^{(r)}=r!$. Apply integration by parts [F7] repeatedly on $[-T,T]$ and let $T\to\infty$; the boundary terms vanish because each derivative is a polynomial times the Gaussian. This gives $\int H_r^2\phi=(-1)^r\int H_r\phi^{(r)}=\int H_r^{(r)}\phi=r!$. Cauchy--Schwarz [F4] therefore gives $\|\phi^{(r)}\|_1\le\sqrt{r!}$. Also $\phi^{(r)}$ tends to zero at $-\infty$, so [F8] on $[-T,x]$, followed by $T\to\infty$, gives $|\phi^{(r)}(x)|\le\int_{-\infty}^x|\phi^{(r+1)}(t)|dt\le\sqrt{(r+1)!}$ and $\|\phi^{(r)}\|_\infty\le\sqrt{(r+1)!}$. [A1, F2, F3, F4, F5, F7, F8, algebra]

2.1 Repeated application of [F8] gives the Taylor integral remainder for $w\mapsto\phi(x-w)$ through degree $m-1$: $R_m(x,w)=\frac{(-w)^m}{(m-1)!}\int_0^1(1-t)^{m-1}\phi^{(m)}(x-tw)\,dt$. By translation invariance and Tonelli [F6], $\|R_m(\cdot,w)\|_1\le w^m\|\phi^{(m)}\|_1/m!\le1/\sqrt{m!}$; the same formula gives $\|R_m(\cdot,w)\|_\infty\le w^m\|\phi^{(m)}\|_\infty/m!\le\sqrt{m+1}/\sqrt{m!}$ by step 1.2. Moment matching in step 1.1 cancels the polynomial terms after integration against $G_i-G'_i$. Integrating the remainder bounds against these two probability laws gives $\|p_{G_i,1}-p_{G'_i,1}\|_1,\|p_{G_i,1}-p_{G'_i,1}\|_\infty\le2\sqrt{m+1}/\sqrt{m!}$. The bound $\log(m!)=\sum_{k=1}^m\log k\ge\int_1^m\log x\,dx=m\log m-m+1$ shows this error is at most $\eta$ when $m=\lceil c\log(e/\eta)\rceil$ for a sufficiently large universal $c$, with $\eta\in(0,1/2)$ absorbed by increasing $c$. [F1, F6, F8, step 1.1, step 1.2, algebra]

3.1 Let $\nu_i$ and $\nu_i'$ be the pushforwards of $G_i$ and $G_i'$, respectively, under $w\mapsto a_i+\sigma w$, and set $F'=\sum_iF(I_i)\nu_i'$. Since $G'_i$ is supported on $[0,b_i]$, every $\nu_i'$ is supported in the closure of $I_i$, so $F'$ is a discrete probability measure on $[-A,A]$ with at most $K(m+1)\le C(A/\sigma\vee1)\log(e/\eta)$ support points. Translation and scaling give $p_{\nu_i,\sigma}(x)=\sigma^{-1}p_{G_i,1}((x-a_i)/\sigma)$ and the same identity for $\nu_i'$ and $G_i'$. Summing these component errors with weights $F(I_i)$ shows the $L^1$ error is at most $\eta$ and the supremum error at most $\eta/\sigma$. [F1, step 1.1, step 2.1, algebra] ∎
