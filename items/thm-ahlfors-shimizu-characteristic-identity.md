---
id: thm-ahlfors-shimizu-characteristic-identity
kind: theorem
title: "Ahlfors–Shimizu area form of the characteristic"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-nevanlinna-counting-proximity-and-characteristic, thm-nevanlinna-quantities-well-defined, thm-pole-characterizations, thm-zero-order-factorization-holomorphic-function, thm-complex-differentiability-real-linearity-wirtinger-and-cauchy-riemann, cor-holomorphic-functions-are-real-analytic-and-smooth, def-integrable-real-and-complex-functions-and-their-integrals]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  scraped: []
  references:
    - title: "Alexandre Eremenko, Lectures on Nevanlinna Theory, §3, equations (9)–(12)"
      url: "https://www.math.purdue.edu/~eremenko/dvi/weizmann.pdf"
    - title: "Goldberg–Ostrovskii, Value Distribution of Meromorphic Functions, Ch. 1 §2, Theorem 2.6; §4, Theorem 4.2"
      url: "https://www.math.purdue.edu/~eremenko/dvi/GOmainfile.pdf"
---

## Statement

Let $f$ be a nonconstant meromorphic function on $\mathbb C$. At regular points set
$$f^\#(z)=\frac{|f'(z)|}{1+|f(z)|^2},$$
and extend $f^\#$ continuously at poles. Define
$$A(r,f)=\frac1\pi\int_{|z|\le r}(f^\#(z))^2\,dA(z),\qquad T_{\rm AS}(r,f)=\int_0^r A(t,f)\,\frac{dt}{t}.$$
Write $M_r h=(2\pi)^{-1}\int_0^{2\pi}h(re^{it})\,dt$ for a circular mean whenever it exists. If $f(0)$ is finite, set $C_\infty(f)=\tfrac12\log(1+|f(0)|^2)$. If $0$ is a pole and
$$f(z)=c z^{-m}+\text{higher Laurent terms},\qquad c\ne0,$$
set $C_\infty(f)=\log|c|$. Then, for every $r>0$,
$$T(r,f)=T_{\rm AS}(r,f)+C_\infty(f).$$
In particular, $T_{\rm AS}$ is finite and nondecreasing, and is convex as a function of $\log r$.

## Facts & Assumptions

**Given:** A nonconstant meromorphic $f$ on $\mathbb C$, the counting, proximity, and characteristic conventions in [[def-nevanlinna-counting-proximity-and-characteristic]], and plane area measure $dA$.

[F1] $N(r,a;f)=n(0,a;f)\log r+\int_0^r(n(t,a;f)-n(0,a;f))\,dt/t$ ([[def-nevanlinna-counting-proximity-and-characteristic]]).

[F2] $T(r,f)=m(r,\infty;f)+N(r,\infty;f)$, where $m(r,\infty;f)$ is the mean of $\tfrac12\log(1+|f|^2)$ ([[def-nevanlinna-counting-proximity-and-characteristic]]).

[F3] The Laurent principal part at a pole of order $m$ begins with $c_{-m}(z-p)^{-m}$, where $c_{-m}\ne0$ ([[thm-pole-characterizations]]).

[F4] A finite-order zero factors locally as $(z-p)^m q(z)$ with $q(p)\ne0$ ([[thm-zero-order-factorization-holomorphic-function]]).

[F5] A holomorphic function satisfies the Cauchy–Riemann equations ([[thm-complex-differentiability-real-linearity-wirtinger-and-cauchy-riemann]]).

[F6] A holomorphic function is of class $C^k$ for every natural $k$, hence smooth ([[cor-holomorphic-functions-are-real-analytic-and-smooth]]).

[F7] Pole counts on bounded discs are finite, and $N(r,\infty;f)$ and $m(r,\infty;f)$ are finite and continuous for $r>0$ ([[thm-nevanlinna-quantities-well-defined]]).

[F8] A measurable function whose absolute value has finite integral is integrable ([[def-integrable-real-and-complex-functions-and-their-integrals]]).

## Proof

**Proof technique:** correct the logarithmic singularities of the spherical potential at each pole, apply the radial Laplacian identity to its circular mean, and identify the finite pole corrections with the integrated count.

1.1 Let $p$ be a pole of order $m$. The leading Laurent term in [F3] gives $g=1/f=(z-p)^m q(z)$ with $q$ holomorphic and nonzero at $p$ by [F4]. [F3, F4, algebra]

1.2 On a pole-free neighbourhood write $f=\alpha+i\beta$. By [F5]–[F6], the Cauchy–Riemann equations and smoothness make $\alpha,\beta$ harmonic; for $s=|f|^2$, direct differentiation gives $|\nabla s|^2=4|f|^2|f'|^2$ and $\Delta s=4|f'|^2$. Applying the real chain rule to $\tfrac12\log(1+s)$ yields $\Delta(\tfrac12\log(1+|f|^2))=2|f'|^2/(1+|f|^2)^2=2(f^\#)^2$. [F5, F6, algebra]

1.3 For any $p\in\mathbb C$ and $r>0$, $M_r\log|re^{it}-p|=\log\max\{r,|p|\}$. If $r\ne|p|$, factor out the larger of $r$ and $|p|$ and average the uniformly convergent series $\log(1-\zeta)=-\sum_{n\ge1}\zeta^n/n$. If $r=|p|>0$, rotate to $p=r$; then $|re^{it}-p|=2r|\sin(t/2)|$. The logarithm is integrable since $\sin(t/2)$ is comparable to the distance from an endpoint near $0$ and $2\pi$. With $J=\int_0^{\pi/2}\log(\sin x)\,dx$, symmetry and $\sin(2x)=2\sin x\cos x$ give $2J=-(\pi/2)\log2+J$, hence $J=-(\pi/2)\log2$ and the angular mean of $\log(2|\sin(t/2)|)$ is zero. The case $p=0$ is immediate. [F8, algebra]

1.4 Fix a regular radius $r$, so its circle contains no pole, and list the finitely many poles $p$ in $|z|<r$ with orders $m_p$; finiteness follows from [F7]. Integrating the defining count [F1] over its step intervals gives $N(r,\infty;f)=m_0\log r+\sum_{0<|p|<r}m_p\log(r/|p|)$, where $m_0=0$ if $0$ is not a pole. Each pole at radius $|p|$ contributes $m_p\int_{|p|}^r dt/t$. [F1, F7, algebra]

1.5 Put $u_f=\tfrac12\log(1+|f|^2)$ away from poles and define $v(z)=u_f(z)+\sum_{|p|<r}m_p\log|z-p|$. The list is finite by [F7]; since $r$ is regular, it is the full pole set in a slightly larger disc. Near a listed pole $p$, [F3] gives $h_p(z)=(z-p)^{m_p}f(z)$ holomorphic and nonzero, so the singular part of $v$ is $\tfrac12\log(|z-p|^{2m_p}+|h_p(z)|^2)$. It extends as a $C^2$ function through $p$ by [F6]; all other logarithmic terms are smooth near $p$. Thus $v$ is $C^2$ on a neighbourhood of the closed disc. [F3, F6, F7]

2.1 Away from poles $f^\#$ is continuous by holomorphic smoothness; at a pole, step 1.1 gives $|f'|/(1+|f|^2)=|g'|/(1+|g|^2)$ off the pole, which extends continuously there by [F6]. Hence $(f^\#)^2$ is continuous and bounded on compact sets, so its absolute area integral is finite by [F8] and $A(t)=O(t^2)$ near zero. [F6, F8, step 1.1, algebra]

2.2 Let $V(t)=M_t v$. By step 1.3, $V(r)=m_0\log r+\sum_{0<|p|<r}m_p\log\max\{r,|p|\}+m(r,\infty;f)$. Using the count formula of step 1.4 gives $T(r,f)=V(r)-\sum_{0<|p|<r}m_p\log|p|$. At the centre, $V(0)=C_\infty(f)+\sum_{0<|p|<r}m_p\log|p|$: this follows from continuity of $v$ and the finite value of $u_f(0)$, or from $u_f(z)+m_0\log|z|\to\log|c|$ when $0$ is a pole. Consequently $T(r,f)=V(r)-V(0)+C_\infty(f)$. [F2, step 1.3, step 1.4, step 1.5, algebra]

3.1 Away from the listed poles, every $\log|z-p|$ is harmonic and step 1.2 gives $\Delta v=2(f^\#)^2$. Both sides are continuous on the closed disc by steps 1.5 and 2.1, so the equality holds at the poles as well. [step 1.2, step 1.5, step 2.1, algebra]

4.1 Polar coordinates and step 3.1 give $(tV'(t))'=tM_t(\Delta v)=2tM_t((f^\#)^2)=A'(t)$, since $A'(t)=\pi^{-1}t\int_0^{2\pi}(f^\#(te^{i\theta}))^2\,d\theta$. The angular second-derivative term in the polar Laplacian integrates to zero. [step 3.1, algebra]

5.1 The function $v$ is $C^2$ at $0$, so $tV'(t)\to0$ as $t\downarrow0$, while $A(t)\to0$ by step 2.1. Integrating step 4.1 from $0$ to $r$ gives $tV'(t)=A(t)$, and integrating once more gives $V(r)-V(0)=\int_0^r A(t)\,dt/t=T_{\rm AS}(r,f)$. Step 2.2 now proves the claimed exact identity for every regular radius. [step 4.1, step 2.2, step 2.1, algebra]

6.1 The area function $A$ is continuous and nondecreasing because $(f^\#)^2$ is continuous and nonnegative; step 2.1 gives $A(t)=O(t^2)$ and a finite integral $T_{\rm AS}$. The derivative of $x\mapsto T_{\rm AS}(e^x)$ is $A(e^x)$, which is nondecreasing, so this function is convex. Finally [F7] makes $T=m(r,\infty;f)+N(r,\infty;f)$ continuous across pole radii; $T_{\rm AS}$ is continuous because $A$ is. Pole radii are locally finite by [F7], so regular radii approach every $r>0$, and taking this limit in step 5.1 proves the identity there. [F2, F7, step 2.1, step 5.1, algebra] ∎
