---
id: ex-monic-resultant-of-two-quadratics
kind: example
title: "Computing the monic resultant of two quadratics from roots and coefficients"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-monic-resultant-root-product-and-common-root-criterion, cor-vietas-formulas-for-a-split-monic-polynomial]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Fields and Galois Theory, Proposition 4.35"
      url: "https://www.jmilne.org/math/CourseNotes/FT.pdf"
pipeline_run: null
---

## Example

For

$$f(t)=t^2+at+b,\qquad g(t)=t^2+ct+d$$

over a field,

$$\operatorname{Res}(f,g)=(d-b)^2-a(c-a)(d-b)+b(c-a)^2.$$

## Facts & Assumptions

**Given:** Monic quadratics $f,g$ and roots $\alpha,\beta$ of $f$ in a splitting field.

[L1] The monic resultant is $\operatorname{Res}(f,g)=g(\alpha)g(\beta)$ and vanishes exactly when the two polynomials have a common root ([[thm-monic-resultant-root-product-and-common-root-criterion]]).

[L2] Vieta's formulas give $\alpha+\beta=-a$ and $\alpha\beta=b$ ([[cor-vietas-formulas-for-a-split-monic-polynomial]]).

## Verification

**Proof technique:** direct.

1.1 Since $\alpha^2=-a\alpha-b$ and $\beta^2=-a\beta-b$, put $u=c-a$ and $v=d-b$ to obtain $g(\alpha)=u\alpha+v$ and $g(\beta)=u\beta+v$. [given, algebra]

2.1 Multiply and use [L2]: $g(\alpha)g(\beta)=u^2\alpha\beta+uv(\alpha+\beta)+v^2=bu^2-auv+v^2$. [step 1.1, L2, algebra]

3.1 Substitution of $u=c-a$ and $v=d-b$ gives the displayed formula, and [L1] identifies it as the resultant. [step 2.1, L1, algebra]

4.1 For $f=(t-1)(t-2)$ and $g=(t-2)(t-4)$ the formula gives $0$, as the shared root predicts. For the same $f$ and $g=t^2+1$ it gives $10$, so over $\mathbb Q$ the polynomials have no common root. [step 3.1, L1, algebra] ∎
