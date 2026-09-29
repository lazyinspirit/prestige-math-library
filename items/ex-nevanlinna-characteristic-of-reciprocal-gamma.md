---
id: ex-nevanlinna-characteristic-of-reciprocal-gamma
kind: example
title: "Reciprocal Gamma has order one and characteristic of size $r\\log r$"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-nevanlinna-counting-proximity-and-characteristic, def-order-of-growth-meromorphic-function, thm-gamma-weierstrass-product, thm-stirling-formula-gamma, thm-gamma-meromorphic-continuation]
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
    - title: "Goldberg–Ostrovskii, Value Distribution of Meromorphic Functions, Ch. 2 §5, reciprocal-Gamma exercise, printed pp. 80–81"
      url: "https://www.math.purdue.edu/~eremenko/dvi/GOmainfile.pdf"
    - title: "K. Chandrasekharan, Lectures on the Riemann Zeta-Function, Lecture 7 §6, Stirling formula, printed pp. 60–62"
      url: "https://mathweb.tifr.res.in/Documents/Publications/Lectures/01.pdf"
---

## Example

Let $g(z)=1/\Gamma(z)$ be the reciprocal Gamma function. Its zeros are simple
and are exactly $0,-1,-2,\ldots$, and it has no poles. For every sufficiently
large $r$,
$$T(r,g)=\Theta(r\log r).$$
Consequently its Nevanlinna order and lower order are both one.

## Verification

**Given:** The characteristic and order conventions for meromorphic functions,
the reciprocal-Gamma product, Gamma's meromorphic continuation, and the
sectorial Stirling formula.

[F1] $T(r,h)=m(r,\infty;h)+N(r,\infty;h)$, where $m(r,\infty;h)$ is the
circular mean of $\tfrac12\log(1+|h|^2)$ ([[def-nevanlinna-counting-proximity-and-characteristic]]).

[F2] The order and lower order are the limsup and liminf of
$\log T(r,h)/\log r$ for all sufficiently large $r$ with $T(r,h)>1$
([[def-order-of-growth-meromorphic-function]]).

[F3] The reciprocal Gamma product
$$\frac1{\Gamma(z)}=ze^{\gamma z}\prod_{n\ge1}\left(1+\frac{z}{n}\right)e^{-z/n}$$
converges locally uniformly on $\mathbb C$
([[thm-gamma-weierstrass-product]]).

[F4] For fixed $0<\delta<\pi$, on the closed sector
$|\arg z|\le\pi-\delta$, with the principal logarithm in
$z^{z-1/2}=\exp((z-\tfrac12)\operatorname{Log}z)$,
$$\Gamma(z)=\sqrt{2\pi}\,z^{z-1/2}e^{-z}\left(1+O_\delta(|z|^{-1})\right)$$
as $|z|\to\infty$ ([[thm-stirling-formula-gamma]]).

[F5] Gamma is meromorphic on $\mathbb C$ with simple poles exactly at the
nonpositive integers ([[thm-gamma-meromorphic-continuation]]).

1.1 By [F3], the product defines an entire function $g$. On every compact $K$, for all large $n$ the series for $\operatorname{Log}(1+z/n)-z/n$ is bounded by $C_Kn^{-2}$ uniformly on $K$, so the product tail is the exponential of a locally uniformly convergent sum and is nowhere zero. The finitely many factors then give simple zeros exactly at $0,-1,-2,\ldots$; [F5] identifies these with the simple poles of the meromorphic continuation of $\Gamma$, and $g$ has no poles. [F3, F5, algebra]

1.2 Fix $r\ge2$ and $|z|=r$. At a product zero the upper bound is immediate; otherwise $\log|g(z)|=\log r+\Re(\gamma z)+\sum_{n\ge1}(\log|1+z/n|-\Re z/n)$. For $n\le2r$, the summands are at most $\log(1+r/n)+r/n$, with total $O(r\log r)$. For $n>2r$, $w=z/n$ satisfies $|w|<1/2$, so $\log|1+w|-\Re w=\Re(\operatorname{Log}(1+w)-w)\le\sum_{k\ge2}|w|^k/k\le C|w|^2$; the tail is at most $Cr^2\sum_{n>2r}n^{-2}=O(r)$. Since $|\Re(\gamma z)|\le|\gamma|r$, this gives $\log^+|g(z)|\le Cr\log r$ uniformly on the circle, and hence $m_0(r,g)=O(r\log r)$. [F3, algebra]

1.3 Set $\delta=\pi/4$ and $I=[2\pi/3,3\pi/4]$, a fixed arc in the closed sector $|\arg z|\le3\pi/4$. For $z=re^{it}$ with $t\in I$, [F3] identifies $g$ with $1/\Gamma$ and [F4] applies uniformly: writing its error as $E(z)=O(r^{-1})$, $\log|g(re^{it})|=-r\cos t\log r+rt\sin t+r\cos t+\tfrac12\log r-\tfrac12\log(2\pi)+O(r^{-1})$. Since $-\cos t\ge1/2$, $t\sin t\ge0$, and $\cos t\ge-1$, this is at least $\tfrac14r\log r>0$ for all sufficiently large $r$, uniformly on $I$. This closed arc meets the exact sector hypotheses in [F4]. [F3, F4, algebra]

2.1 Integrating the lower bound of step 1.3 over the arc of length $\pi/12$ gives $m_0(r,g):=(2\pi)^{-1}\int_0^{2\pi}\log^+|g(re^{it})|\,dt\ge(1/96)r\log r$ for all sufficiently large $r$. [step 1.3, algebra]

3.1 Since $g$ is entire, [F1] gives $T(r,g)=m(r,\infty;g)$. The pointwise inequality $\log^+|w|\le\tfrac12\log(1+|w|^2)\le\log^+|w|+\tfrac12\log2$ gives $m_0(r,g)\le T(r,g)\le m_0(r,g)+\tfrac12\log2$. Steps 1.2 and 2.1 prove $T(r,g)=\Theta(r\log r)$, so $T>1$ eventually. By [F2], $\log T(r,g)/\log r=(\log r+\log\log r+O(1))/\log r\to1$, proving both order assertions. [F1, F2, step 1.2, step 2.1, algebra] ∎
