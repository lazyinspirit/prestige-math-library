---
id: ex-linear-self-correction
kind: example
title: "Correcting one corrupted table entry"
status: published
origin: pipeline
deps: [thm-linear-self-correction]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct calculation
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Arora and Barak, Computational Complexity, January 2007 web draft, \u00a718.4.1 Local decoding pp.364\u2013365"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
---

## Example

On $\mathbb F_2^3$, let $\ell(x)=x_1$, and let $f$ agree with $\ell$ except that $f(0)=1$. Thus $\operatorname{dist}(f,\ell)=1/8$. At every fixed nonzero $x$, the two-query corrector succeeds with probability exactly $6/8=3/4$; it fails exactly for seeds $y=0$ and $y=x$. At $x=0$ it always returns zero.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement above.

[F1] At distance delta<1/4 from a linear function, the two-query corrector succeeds at every point with probability at least 1-2delta, and that nearby linear function is unique ([[thm-linear-self-correction]]).

## Verification

1.1 There are eight cube points, with precisely the zero point corrupted, so $\delta=1/8<1/4$. The self-correction theorem gives a unique nearby linear function and success at least $1-2\delta=3/4$ at each point. [F1, algebra]

2.1 For fixed $x\ne0$, the query $y$ is corrupted exactly when $y=0$, and the query $x+y$ is corrupted exactly when $y=x$. These are distinct seeds. At either seed exactly one summand is flipped, so the output is wrong; at the other six seeds neither is flipped and linearity gives the right answer. At $x=0$, the sum $f(y)+f(y)$ is zero for every seed, equal to $\ell(0)$. Thus the lower bound is attained for nonzero requests and exceeded for the zero request. [step 1.1, algebra] ∎
