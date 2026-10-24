---
id: cor-regular-c1-paths-have-c1-unit-speed-parametrizations
kind: corollary
title: "A regular $C^1$ path has a $C^1$ arc-length reparametrization with derivative of Euclidean norm one"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-c1-paths-have-length-equal-to-the-integral-of-speed, thm-ftc-first-part, cor-mean-value-theorem, thm-derivative-of-an-inverse, thm-chain-rule, thm-componentwise-limits-and-continuity, def-arc-length-function]
justified_by: []
aliases: []
landmark: true
proof_strategy: inverse-function
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "U. Lang, Differential Geometry I, Section 1.1"
      url: "https://people.math.ethz.ch/~lang/DG1_9Jan2025.pdf"
pipeline_run: null
---

## Statement

Let $n\ge1$ and $a<b$. Suppose $\gamma:[a,b]\to\mathbb R^n$ is continuous, differentiable on $(a,b)$, and its derivative extends continuously to $v:[a,b]\to\mathbb R^n$ with $\lVert v(t)\rVert_2>0$ for every $t$. Put

$$s(t)=\int_a^t\lVert v(u)\rVert_2\,du,\qquad L=s(b).$$

Then $s$ is a continuously differentiable increasing bijection from $[a,b]$ onto $[0,L]$. Its inverse $\tau$ is continuously differentiable, and

$$\sigma(r):=\gamma(\tau(r))$$

is a $C^1$ reparametrization with $\lVert\sigma'(r)\rVert_2=1$ for every $r\in[0,L]$, using relative derivatives at the endpoints.

## Facts & Assumptions

**Given:** The regular $C^1$ path and its continuous velocity extension $v$.

[L1] The path has length $\int_a^b\lVert v\rVert_2$, and its arc-length function is the corresponding partial integral ([[thm-c1-paths-have-length-equal-to-the-integral-of-speed]], [[def-arc-length-function]]).

[L2] The first fundamental theorem gives $s'(t)=\lVert v(t)\rVert_2$ at every point, including relative endpoints ([[thm-ftc-first-part]]).

[L3] A continuous injective function on an interval has an inverse, and if its derivative is nonzero then the inverse derivative is its reciprocal ([[thm-derivative-of-an-inverse]]).

[L4] The chain rule gives $(f\circ g)'=(f'\circ g)g'$ ([[thm-chain-rule]]); vector differentiation and continuity are componentwise ([[thm-componentwise-limits-and-continuity]]).

[L5] A continuous function with positive derivative on an interval is increasing by the mean value theorem ([[cor-mean-value-theorem]]).

## Proof

**Proof technique:** inverse-function.

1.1 By [L1]--[L2], $s'(t)=\lVert v(t)\rVert_2>0$. By [L5], $s$ is increasing, and continuity plus its endpoint values makes it a bijection onto $[0,L]$; in particular $L>0$. [given, L1, L2, L5]

2.1 By [L3], the inverse $\tau:[0,L]\to[a,b]$ is differentiable and $\tau'(r)=1/\lVert v(\tau(r))\rVert_2$. This derivative is continuous because $v$, the norm, $\tau$, and reciprocal on positive reals are continuous. [step 1.1, L3]

3.1 Apply [L4] componentwise to $\sigma=\gamma\circ\tau$ to get $\sigma'(r)=v(\tau(r))/\lVert v(\tau(r))\rVert_2$. [step 2.1, L4]

4.1 Absolute homogeneity of the Euclidean norm gives $\lVert\sigma'(r)\rVert_2=1$, and the formula is continuous in $r$, so $\sigma$ is $C^1$. The relative endpoint derivatives follow from the relative forms in [L2] and [L3]. [step 3.1, algebra] ∎
