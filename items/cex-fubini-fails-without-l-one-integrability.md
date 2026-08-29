---
id: cex-fubini-fails-without-l-one-integrability
kind: counterexample
title: "The function (x^2-y^2)/(x^2+y^2)^2 shows that Fubini's integrability hypothesis is not decorative"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces, thm-principal-inverse-tangent-calculus]
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Gerald B. Folland, Real Analysis, 2nd ed., Exercise 55(a)"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
    - title: "Terence Tao, An Introduction to Measure Theory, Exercise 1.7.23"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf"
---

## Statement refuted

Fubini's theorem remains valid if one deletes the assumption
$f \in L^1(\mu \times \nu)$.

## Counterexample

**Proof technique:** direct.

On $(0,1)^2$, let
$$f(x,y):=\frac{x^2-y^2}{(x^2+y^2)^2}.$$

## Facts & Assumptions

**Given:** The function $f$ above.

[L1] The principal inverse tangent satisfies $$ (\arctan u)'=\frac{1}{1+u^2} $$ and $$ \arctan u=\int_0^u\frac{dt}{1+t^2}. $$ ([[thm-principal-inverse-tangent-calculus]])

[A1] On $(0,1)^2$ one has $x^2+y^2>0$, so the rational functions written below are well-defined and differentiable.

## Verification

1.1 Direct differentiation gives $$ f(x,y)=\partial_y\left(\frac{y}{x^2+y^2}\right) = -\partial_x\left(\frac{x}{x^2+y^2}\right). $$ [A1, algebra]

2.1 Integrating the first identity of step 1.1 in $y$ from $0$ to $1$ gives $$\int_0^1 f(x,y)\,dy=\frac{1}{1+x^2}.$$ Integrating in $x$ and applying [L1] yields $$\int_0^1\left(\int_0^1 f(x,y)\,dy\right)dx = \int_0^1 \frac{dx}{1+x^2} = \frac{\pi}{4}.$$ [step 1.1, L1]

3.1 Repeating the same calculation with the second identity of step 1.1 gives $$\int_0^1\left(\int_0^1 f(x,y)\,dx\right)dy = -\int_0^1 \frac{dy}{1+y^2} = -\frac{\pi}{4}.$$ Therefore the iterated integrals exist and are unequal, so the conclusion of Fubini fails. In particular $f \notin L^1((0,1)^2)$, because otherwise [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]] would force them to agree. [step 1.1, step 2.1, L1] ∎
