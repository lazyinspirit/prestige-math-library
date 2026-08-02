---
id: ex-unit-circle-implicit-function-theorem
kind: example
title: "The unit circle is locally a $C^1$ graph at every point"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-euclidean-implicit-function-theorem, def-c-one-map-and-local-inverse, thm-continuous-partial-derivatives-imply-total-differentiability, thm-algebra-of-total-derivatives, lem-derivative-of-a-power]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis II, §8.5.1 and Exercise 8.5.1"
      url: "https://www.jirka.org/ra/html/sec_svinvfuncthm.html"
pipeline_run: null
---

## Example

At every point $(a,b)$ of the unit circle $a^2+b^2=1$, the circle is locally
the graph of a $C^1$ function of one coordinate.

## Facts & Assumptions

**Given:** No hypotheses beyond those quantified in the statement.

[L1] On an open domain, a $C^1$ map satisfying $F(a,b)=0$ can be solved locally
for the second block when $D_yF(a,b)$ is invertible
([[thm-euclidean-implicit-function-theorem]]).

[L2] Direct difference quotients give $\partial_xF(x,y)=2x$ and
$\partial_yF(x,y)=2y$; their displayed affine formulas are continuous. Thus the
continuous-partials theorem gives $DF(x,y)(u,v)=2xu+2yv$, and $F$ is $C^1$
([[thm-continuous-partial-derivatives-imply-total-differentiability]],
[[def-c-one-map-and-local-inverse]], [[lem-derivative-of-a-power]]).

## Proof

**Proof technique:** direct.

1.1 Let $F(x,y):=x^2+y^2-1$. Then [L2] gives $DF(x,y)(u,v)=2xu+2yv$. At a point $(a,b)$ on the circle, at least one of $a,b$ is nonzero. [L2, given, algebra]

2.1 If $b\ne0$, then $D_yF(a,b)$ is multiplication by $2b$ and is invertible, so [L1] expresses the circle locally as $y=\varphi(x)$.  If $a\ne0$, exchange the coordinate blocks and obtain $x=\psi(y)$.  These alternatives cover every circle point by step 1.1.  [step 1.1, L1, cases] ∎
