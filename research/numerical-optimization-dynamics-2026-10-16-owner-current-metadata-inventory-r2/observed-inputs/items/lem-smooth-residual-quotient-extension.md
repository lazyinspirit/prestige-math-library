---
id: lem-smooth-residual-quotient-extension
kind: lemma
title: 'A $C^{k+r}$ residual vanishing through order $r-1$ has a $C^k$ scaled extension'
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - thm-multivariable-taylor-formula-with-lagrange-remainder
  - thm-chain-rule-for-total-derivatives
  - thm-mean-value-inequality-for-total-derivatives
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
axiom_use: "No choice principle is used."
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Ernst Hairer, Christian Lubich, and Gerhard Wanner, Geometric Numerical Integration, 2nd ed., Chapter VII.1, §§VII.1.1–VII.1.4"
      url: "https://ndl.ethernet.edu.et/bitstream/123456789/63242/1/131.pdf"
    - title: "Robert I. McLachlan, Klas Modin, Olivier Verdier, and Matt Wilkins, Geometric Generalisations of SHAKE and RATTLE, Foundations of Computational Mathematics 14 (2014), 339–370"
      url: "https://arxiv.org/pdf/1207.3367"
---

## Statement

Let $P\subseteq\mathbb R^n$ be open, let $r\in\{1,2\}$, let $k\in\mathbb N$ with $k\ge1$, and let $\delta>0$. Let $f:(-\delta,\delta)\times P\to\mathbb R^m$ be $C^{k+r}$. Suppose $\partial_h^j f(0,\alpha)=0$ for every $\alpha\in P$ and $0\le j<r$. Then $f(h,\alpha)/h^r$, initially defined for $h\ne0$, has a $C^k$ extension $F$ to $(-\delta,\delta)\times P$. Its mixed derivatives at zero satisfy
$$\partial_h^\ell\partial_\alpha^\beta F(0,\alpha)=\frac{\ell!}{(r+\ell)!}\partial_h^{r+\ell}\partial_\alpha^\beta f(0,\alpha)\qquad(\ell+|\beta|\le k).$$

## Facts & Assumptions

**Given:** The hypotheses in the Statement.

[F1] [[thm-multivariable-taylor-formula-with-lagrange-remainder]]: a $C^{s+1}$ map on a convex neighborhood has its degree-$s$ Taylor polynomial with a remainder of order $s+1$ along each line.

[F2] [[thm-chain-rule-for-total-derivatives]]: differentiating a composition with a coordinate line gives the corresponding directional derivative.

[F3] [[thm-mean-value-inequality-for-total-derivatives]]: on a convex interval, a derivative bound gives the corresponding scalar increment bound.

## Proof

1.1 For each parameter multi-index $\beta$ with $|\beta|\le k$, iteratively apply the chain rule [F2] to the identities $\partial_h^j f(0,\alpha)=0$. Thus $\partial_\alpha^\beta\partial_h^j f(0,\alpha)=0$ for every $0\le j<r$, as needed below. [given, F2]

2.1 For each parameter multi-index $\beta$ with $|\beta|\le k$, put $k_\beta=k-|\beta|$, $N=r+k_\beta$, and $g_\beta(h)=\partial_\alpha^\beta f(h,\alpha)$. For every $s\le k_\beta$, put $m=N-s$. If $m\ge2$, apply [F1] componentwise to $g_\beta^{(s)}$ through degree $m-1$; continuity of its highest derivative lets us replace the Lagrange coefficient at $\theta h$ by its value at zero plus $o(1)$. If $m=1$, subtract the linear Taylor polynomial: the derivative of the remainder is $o(1)$ by continuity, so [F3] gives a remainder $o(|h|)$. Thus in every case $g_\beta^{(s)}(h)$ equals its Taylor polynomial through degree $m$ plus $o(|h|^m)$. By step 1.1 all coefficients of degrees below $r$ vanish. For $h\ne0$, the quotient rule expresses the $\ell$th derivative of $g_\beta/h^r$ as a finite linear combination of $h^{-r-\ell+s}g_\beta^{(s)}(h)$, $0\le s\le\ell$. Substituting the expansions shows that the remainder terms are $o(|h|^{k_\beta-\ell})$; the polynomial part has a continuous extension whose $\ell$th derivative at zero is $\ell!\partial_h^{r+\ell}\partial_\alpha^\beta f(0,\alpha)/(r+\ell)!$. Continuity of the derivatives on compact parameter neighborhoods makes these limits locally uniform in $\alpha$. [F1, F3, step 1.1, algebra]

3.1 Define the value at $h=0$ by the displayed limit formula. For each $|\beta|+\ell\le k$, step 2.1 gives a locally uniform limit for the corresponding derivative as $h\to0$; at $h=0$ these formulas are differentiable in $\alpha$ because $f$ is $C^{k+r}$, and their $h$-derivatives agree with the next displayed coefficient. Induction on total derivative order therefore shows that all mixed partial derivatives through order $k$ exist and are continuous across $h=0$. The extension is $C^k$ with the asserted formula. [step 2.1, algebra] ∎
