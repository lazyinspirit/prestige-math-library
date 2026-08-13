---
id: def-piecewise-c1-path-operations-and-oriented-reparametrizations
kind: definition
title: "Reversal, concatenation, closed paths, and oriented piecewise-C1 reparametrizations"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-path-polygonal-length-and-rectifiability-in-rn, cor-piecewise-c1-paths-have-additive-speed-integral-length]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis II, sections 9.2 and 9.3"
      url: "https://www.jirka.org/ra/html/sec_pathintegral.html"
pipeline_run: null
---

## Definition

Let $\gamma:[a,b]\to\mathbb R^n$ be a piecewise-$C^1$ path in the sense of [[def-path-polygonal-length-and-rectifiability-in-rn]]. Its **reversal** is $\gamma^{-}(t):=\gamma(a+b-t)$. It is **closed** when $\gamma(a)=\gamma(b)$.

For paths $\alpha,\beta:[0,1]\to\mathbb R^n$ with $\alpha(1)=\beta(0)$, their **concatenation** is

$$ (\alpha*\beta)(t):=\begin{cases}\alpha(2t),&0\le t\le\tfrac12,\\ \beta(2t-1),&\tfrac12\le t\le1.\end{cases} $$

When $a<b$ and $c<d$, if $h:[c,d]\to[a,b]$ is a continuous piecewise-$C^1$ bijection whose derivative has a fixed nonzero sign on every smooth piece, then $\gamma\circ h$ is an **oriented piecewise-$C^1$ reparametrization**. It is orientation-preserving when $h'>0$ and orientation-reversing when $h'<0$. Bijectivity excludes multiple coverings. Constant paths are allowed, although they are not regular; their speed-integral length is zero by [[cor-piecewise-c1-paths-have-additive-speed-integral-length]].
