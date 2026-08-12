---
id: cor-integral-logarithm-is-strictly-increasing
kind: corollary
title: "The integral logarithm is continuous and strictly increasing on (0,infinity)"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-integral-logarithm-derivative-and-normalisation,
       cor-differentiable-implies-continuous, cor-mean-value-theorem]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "OpenStax, Calculus Volume 1, Section 6.7"
      url: "https://openstax.org/books/calculus-volume-1/pages/6-7-integrals-exponential-functions-and-logarithms"
pipeline_run: null
---

## Statement

The function $L:(0,\infty)\to\mathbb R$ is continuous and strictly increasing.

## Facts & Assumptions

**Given:** $L$ on $(0,\infty)$.

[L1] $L$ is differentiable and $L'(x)=1/x$ for $x>0$
([[thm-integral-logarithm-derivative-and-normalisation]]).

[L2] Differentiability at a point implies continuity there
([[cor-differentiable-implies-continuous]]).

[L3] If a function is continuous on $[a,b]$ and differentiable on $(a,b)$,
then $f(b)-f(a)=f'(c)(b-a)$ for some $c\in(a,b)$
([[cor-mean-value-theorem]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] and [L2], $L$ is continuous at every point of $(0,\infty)$. [L1, L2]

1.2 Let $0<a<b$. Applying [L3] gives a $c\in(a,b)$ such that $$ L(b)-L(a)=L'(c)(b-a)=\frac{b-a}{c}>0. $$ [L1, L3, algebra]

2.1 Hence $L(a)<L(b)$ whenever $0<a<b$, so $L$ is strictly increasing; step 1.1 supplies continuity. [step 1.1, step 1.2] ∎
