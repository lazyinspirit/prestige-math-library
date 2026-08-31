---
id: ex-the-area-form-in-polar-coordinates
kind: example
title: "The area form in polar coordinates"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-pullback-of-a-differential-form,
       prop-pullback-of-forms-is-smooth-functorial-and-preserves-wedges,
       prop-local-coordinate-expression-for-a-differential-form]
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

On the polar chart domain $\{(r,\theta):r>0\}$, the Euclidean area form pulls
back as

$$
F^*(dx\wedge dy)=r\,dr\wedge d\theta,
$$

where $F(r,\theta)=(r\cos\theta,r\sin\theta)$.

## Facts & Assumptions

**Given:** The polar-coordinate map $F(r,\theta)=(r\cos\theta,r\sin\theta)$.

[F1] Pullback of a differential form is defined by composing with the differential ([[def-pullback-of-a-differential-form]]).

[L1] Pullback preserves wedge products ([[prop-pullback-of-forms-is-smooth-functorial-and-preserves-wedges]]).

## Verification
**Proof technique:** direct.

1.1 By [F1], $$ F^*dx=\cos\theta\,dr-r\sin\theta\,d\theta,\qquad F^*dy=\sin\theta\,dr+r\cos\theta\,d\theta. $$ [F1, given, algebra]
2.1 Using [L1] and bilinearity of the wedge product, $$ F^*(dx\wedge dy)=F^*dx\wedge F^*dy =(\cos\theta\,dr-r\sin\theta\,d\theta)\wedge(\sin\theta\,dr+r\cos\theta\,d\theta) =r\,dr\wedge d\theta. $$ [L1, step 1.1, algebra]
3.1 Thus the area form becomes $r\,dr\wedge d\theta$ in polar coordinates. [step 2.1] ∎