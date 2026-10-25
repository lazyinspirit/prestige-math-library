---
id: ex-winding-numbers-of-a-keyhole-contour
kind: example
title: "The winding numbers of a keyhole contour about the origin and about an excluded point"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-winding-number-chain-laws, thm-winding-number-circle-traversed-k-times, def-complex-chain-and-cycle, def-integration-and-index-of-complex-chain, prop-winding-number-under-reversal-and-concatenation, ex-index-of-the-boundary-cycle-of-a-round-annulus, def-complex-contours-reversal-concatenation-and-closedness, cor-piecewise-c1-paths-have-additive-speed-integral-length]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "L. V. Ahlfors, Complex Analysis, 3rd ed., Ch. 4 §2.1"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
pipeline_run: null
---

## Example

Let $0<\varepsilon<R$ and put

$$C_R(t)=R\exp(it),\quad C_\varepsilon^-(t)=\varepsilon\exp(-it)\quad(t\in[0,2\pi]),$$
$$\sigma_1(t)=\varepsilon+t(R-\varepsilon),\quad \sigma_2(t)=R+t(\varepsilon-R)\quad(t\in[0,1]).$$

The **keyhole** is the complex chain
$\Gamma=\bigl((1,C_R),(1,C_\varepsilon^-),(1,\sigma_1),(1,\sigma_2)\bigr)$. Then
$\Gamma$ is a cycle, its trace is

$$\Gamma^\ast=\{|z|=R\}\cup\{|z|=\varepsilon\}\cup\{x\in\mathbb R:\varepsilon\le x\le R\},$$

and at every point $z$ **off that trace**

$$n(\Gamma,z)=\begin{cases}0,&|z|<\varepsilon,\\ 1,&\varepsilon<|z|<R,\\ 0,&|z|>R.\end{cases}$$

The two radial segments have the same trace and both carry coefficient $1$, so
the closed segment from $\varepsilon$ to $R$ on the real axis belongs to
$\Gamma^\ast$ and no index is asserted at any of its points.

## Facts & Assumptions

**Given:** Reals $0<\varepsilon<R$ and the four contours above forming the chain $\Gamma$.

[L1] The trace of a sum of chains is the union of their traces, a sum of cycles is a cycle, and for $q$ off the traces involved $n(\Gamma_1+\Gamma_2,q)=n(\Gamma_1,q)+n(\Gamma_2,q)$ and $n(\Gamma^-,q)=-n(\Gamma,q)$, where $\Gamma^-$ reverses every contour ([[thm-winding-number-chain-laws]]).

[L2] For $a\in\mathbb C$, $r>0$ and $k\in\mathbb Z$, the contour $\gamma_k(t)=a+r\exp(ikt)$ on $[0,2\pi]$ is a closed complex contour with $n(\gamma_k,z)=k$ for $|z-a|<r$ and $n(\gamma_k,z)=0$ for $|z-a|>r$; for $k\ne0$ its trace is $\{z:|z-a|=r\}$ ([[thm-winding-number-circle-traversed-k-times]]).

[L3] A complex chain is a finite list of pairs $(m_k,\gamma_k)$; its boundary is $\partial\Gamma(q)=\sum\{m_k:\gamma_k(b_k)=q\}-\sum\{m_k:\gamma_k(a_k)=q\}$; it is a cycle when that vanishes identically; and a list of closed contours is a cycle ([[def-complex-chain-and-cycle]]).

[L4] $n(\Gamma,q)=(2\pi i)^{-1}\int_\Gamma dz/(z-q)$ for $q$ off the trace, and for a single closed contour with coefficient $1$ this is that contour's winding number ([[def-integration-and-index-of-complex-chain]]).

[L5] The reversal of $\gamma:[a,b]\to\mathbb C$ is $\gamma^-(t)=\gamma(a+b-t)$, and it is again a complex contour with the same trace ([[prop-winding-number-under-reversal-and-concatenation]], [[def-complex-contours-reversal-concatenation-and-closedness]]).

[L6] For $p\in\mathbb C$ and $0<r_1<r_2$, the chain $C_2-C_1$ built from the positively oriented circles of radii $r_1,r_2$ about $p$ has index $0$ for $|z-p|<r_1$, $1$ for $r_1<|z-p|<r_2$ and $0$ for $|z-p|>r_2$ ([[ex-index-of-the-boundary-cycle-of-a-round-annulus]]).

[L7] A continuous path differentiable with a continuous derivative on each piece of a partition is rectifiable ([[cor-piecewise-c1-paths-have-additive-speed-integral-length]]).

## Verification

**Proof technique:** direct.

1.1 The segments $\sigma_1,\sigma_2$ are affine, hence rectifiable by [L7], with $\sigma_1(0)=\varepsilon$, $\sigma_1(1)=R$, $\sigma_2(0)=R$, $\sigma_2(1)=\varepsilon$, and both have trace the closed real segment from $\varepsilon$ to $R$; the two circles are closed complex contours by [L2], with traces $\{|z|=R\}$ and $\{|z|=\varepsilon\}$. [given, L2, L7]

1.2 $\sigma_2$ is the reversal of $\sigma_1$: $\sigma_1^-(t)=\sigma_1(1-t)=\varepsilon+(1-t)(R-\varepsilon)=R+t(\varepsilon-R)=\sigma_2(t)$, so by [L1] and [L5] the one-term chains $\bigl((1,\sigma_1)\bigr)$ and $\bigl((1,\sigma_2)\bigr)$ have indices summing to $0$ at every point off the segment. [given, L1, L5]

2.1 $\Gamma$ is a cycle: by [L3] the two closed circles contribute nothing to $\partial\Gamma$, while $\sigma_1$ contributes $+1$ at $R$ and $-1$ at $\varepsilon$ and $\sigma_2$ contributes $+1$ at $\varepsilon$ and $-1$ at $R$, so every value of $\partial\Gamma$ is $0$. Its trace is the union named in the statement, by step 1.1 and [L1]. [step 1.1, L1, L3]

3.1 For $z\notin\Gamma^\ast$, [L1] and [L4] split the index into the four one-term contributions, of which the two segment terms cancel by step 1.2; so $n(\Gamma,z)=n(C_R,z)+n(C_\varepsilon^-,z)$, which by [L2] is $1+(-1)=0$ for $|z|<\varepsilon$, $1+0=1$ for $\varepsilon<|z|<R$, and $0+0=0$ for $|z|>R$. The same three values are what [L6] gives for the annulus cycle built from the positively oriented circles of radii $\varepsilon$ and $R$ about $0$; that chain is a different list from $\Gamma$, and what is asserted here is only that the two index functions agree off the traces. [step 1.2, step 2.1, L1, L2, L4, L6] ∎
