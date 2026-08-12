---
id: ex-mobius-map-is-conformal-off-its-pole
kind: example
title: "A Möbius map $(az+b)/(cz+d)$ with $ad-bc\\ne0$ is conformal wherever $cz+d\\ne0$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-algebra-of-complex-derivatives, thm-nonzero-complex-derivative-iff-oriented-conformal]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Howell and Mathews, Complex Analysis, §3.6"
      url: "https://complexanalysis.org/web/sec_conformal-mappings.html"
pipeline_run: frontier-12
---

## Example

Let $a,b,c,d\in\mathbb C$ with $ad-bc\ne0$, and define
$$F(z)=\frac{az+b}{cz+d}$$
wherever $cz+d\ne0$. Then $F$ is holomorphic and orientation-preserving conformal at every point of its domain.

## Facts & Assumptions
**Given:** Complex coefficients $a,b,c,d$ with $ad-bc\ne0$.

[L1] The linearity and quotient rules hold for complex derivatives wherever the denominator is nonzero ([[thm-algebra-of-complex-derivatives]]).

[L2] A real-differentiable complex map is orientation-preserving conformal at a point exactly when it is complex differentiable there with nonzero derivative ([[thm-nonzero-complex-derivative-iff-oriented-conformal]]).

## Verification

**Proof technique:** direct computation.

1.1 On the set $D:=\{z:cz+d\ne0\}$, [L1] gives $$F'(z)=\frac{a(cz+d)-c(az+b)}{(cz+d)^2}=\frac{ad-bc}{(cz+d)^2}.$$ [L1, algebra]

2.1 Both numerator and denominator in step 1.1 are nonzero on $D$, so $F'(z)\ne0$ throughout $D$. [step 1.1, given]

3.1 Thus [L2] makes $F$ orientation-preserving conformal at every point of $D$. [step 1.1, step 2.1, L2]

4.1 If $c=0$, then $ad\ne0$, hence $d\ne0$ and $D=\mathbb C$. If $c\ne0$, the excluded equation $cz+d=0$ has the unique solution $z=-d/c$, so $D=\mathbb C\setminus\{-d/c\}$. No global injectivity claim on $\mathbb C$ is needed. [given, algebra] ∎
