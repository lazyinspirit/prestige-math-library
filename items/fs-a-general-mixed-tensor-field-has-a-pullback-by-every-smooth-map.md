---
id: fs-a-general-mixed-tensor-field-has-a-pullback-by-every-smooth-map
kind: false-statement
title: "A general mixed tensor field does not have a pullback by every smooth map"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-pullback-of-covariant-tensors-is-smooth-and-functorial]
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

## Statement

**False claim:** for every smooth map $F:M\to N$ and every vector field $Y$ on
$N$, there is a vector field $X$ on $M$ satisfying

$$dF_p(X_p)=Y_{F(p)}\qquad(p\in M).$$

Such an $X$ would be the natural candidate for a pullback of $Y$ along $F$.

## Facts & Assumptions

**Given:** The smooth map $F:\mathbb R\to\mathbb R^2$, $F(t)=(0,0)$, and the constant vector field $Y=\partial/\partial x$ on $\mathbb R^2$.

[L1] Covariant tensor fields do admit functorial pullbacks ([[prop-pullback-of-covariant-tensors-is-smooth-and-functorial]]).

## Refutation
**Proof technique:** direct.

1.1 The field $Y$ is a type $(1,0)$ tensor field, so the false claim requires a vector field $X$ on $\mathbb R$ with $dF_t(X_t)=Y_{F(t)}$ for every $t$. [given]
2.1 The differential of the constant map is zero at every point, so $dF_t(X_t)=0$ for every possible $X_t\in T_t\mathbb R$, whereas $Y_{F(t)}\neq0$. Thus the required equality is impossible. [given, step 1.1, algebra]
3.1 Thus a general mixed tensor field does not have a pullback by every smooth map, even though [L1] shows that purely covariant tensors do. [L1, step 2.1] ∎
