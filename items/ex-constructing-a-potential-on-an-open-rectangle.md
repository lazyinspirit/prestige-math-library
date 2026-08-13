---
id: ex-constructing-a-potential-on-an-open-rectangle
kind: example
title: "Constructing a potential on a rectangle by coordinate-segment integrals"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-closed-and-exact-c1-vector-fields, thm-poincare-lemma-for-star-shaped-domains, cor-potentials-differ-by-a-componentwise-constant, thm-newton-leibniz-with-interior-derivative]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J.-B. Campesato, Poincare Lemma, sections 1 and 2"
      url: "https://www.math.toronto.edu/campesat/ens/1920/poincare.pdf"
pipeline_run: null
---

## Example

On an open rectangle $U$ containing $(a,b)$, let

$$F(x,y)=(2xy+y^2,x^2+2xy).$$

The coordinate-segment construction

$$\phi(x,y):=\int_a^xF_0(t,b)\,dt+\int_b^yF_1(x,t)\,dt$$

gives the normalized potential

$$\phi(x,y)=x^2y+xy^2-a^2b-ab^2.$$

## Facts & Assumptions
**Given:** The rectangle, basepoint, and field in the Example.

[L1] With coordinates indexed from $0$, so that $F=(F_0,F_1)$, a $C^1$ field is closed when $\partial_yF_0=\partial_xF_1$, and it is exact when it is the gradient of a $C^2$ potential ([[def-closed-and-exact-c1-vector-fields]]).

[L2] A closed $C^1$ field on a star-shaped open domain has the radial potential based at a star centre ([[thm-poincare-lemma-for-star-shaped-domains]]).

[L3] Two potentials of one field differ by a constant on a piecewise-$C^1$ path component ([[cor-potentials-differ-by-a-componentwise-constant]]).

[L4] Newton-Leibniz evaluates an integral of an interior derivative by the endpoint increment ([[thm-newton-leibniz-with-interior-derivative]]).



## Verification

**Proof technique:** direct.

1.1 Direct differentiation gives $$\partial_yF_0=2x+2y=\partial_xF_1,$$ so $F$ is closed by [L1]. [given, L1, algebra]

1.2 Evaluating the two polynomial integrals using [L4] gives $$\phi(x,y)=b(x^2-a^2)+b^2(x-a)+x^2(y-b)+x(y^2-b^2) =x^2y+xy^2-a^2b-ab^2.$$ [given, L4, algebra]

2.1 Differentiating step 1.2 yields $\partial_x\phi=2xy+y^2=F_0$ and $\partial_y\phi=x^2+2xy=F_1$. Thus [L1] makes $\phi$ a potential, and substitution gives $\phi(a,b)=0$. [step 1.2, L1, algebra]

3.1 An open rectangle is convex and hence star-shaped with respect to $(a,b)$, so [L2] also supplies a radial potential normalized to zero there. By [L3] and the common normalization, that radial potential agrees with $\phi$. [given, step 2.1, L2, L3, algebra] ∎
