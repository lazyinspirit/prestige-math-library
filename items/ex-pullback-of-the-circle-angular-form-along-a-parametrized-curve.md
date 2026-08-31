---
id: ex-pullback-of-the-circle-angular-form-along-a-parametrized-curve
kind: example
title: "Pullback of the circle angular form along a parametrized curve"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-pullback-of-a-differential-form,
       prop-pullback-of-forms-is-smooth-functorial-and-preserves-wedges]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2019).pdf"
---

## Example

Let $c:\mathbb R\to S^1\subseteq\mathbb R^2$ be the parametrized unit circle
$c(t)=(\cos t,\sin t)$, and let

$$
\eta=-y\,dx+x\,dy.
$$

Then

$$
c^*\eta=dt.
$$

## Facts & Assumptions

**Given:** The curve $c(t)=(\cos t,\sin t)$ and the $1$-form $\eta=-y\,dx+x\,dy$.

[F1] Pullback of a differential form is defined by composing with the differential ([[def-pullback-of-a-differential-form]]).

## Verification
**Proof technique:** direct.

1.1 Along the curve, $x\circ c=\cos t$, $y\circ c=\sin t$, so $$ c^*x=\cos t,\qquad c^*y=\sin t,\qquad c^*dx=-\sin t\,dt,\qquad c^*dy=\cos t\,dt. $$ [F1, given, algebra]

2.1 Therefore $$ c^*\eta=-(\sin t)(-\sin t\,dt)+(\cos t)(\cos t\,dt)=(\sin^2 t+\cos^2 t)\,dt=dt. $$ [step 1.1, algebra]

3.1 Thus the angular form pulls back to the standard parameter form on the circle. [step 2.1] ∎