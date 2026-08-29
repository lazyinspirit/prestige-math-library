---
id: thm-principal-logarithm-biholomorphism-to-the-principal-strip
kind: theorem
title: "The principal logarithm is a biholomorphism from the slit plane to the principal strip"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [rem-holomorphic-logarithm-and-principal-power-dictionary, cor-principal-logarithm-is-holomorphic-on-the-slit-plane, thm-complex-exponential-is-entire-with-derivative-itself, cor-complex-exponential-cartesian-form-modulus-and-eulers-identity, def-biholomorphic-map]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-29
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Lars V. Ahlfors, Complex Analysis, 3rd ed., Ch. 3 §4.2"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
    - title: "Jiri Lebl, Guide to Cultivating Complex Analysis, Exercise 4.1.1"
      url: "https://www.jirka.org/ca/ca.pdf"
---

## Statement

Let

$$S:=\mathbb C\setminus\{x\in\mathbb R:x\le0\},\qquad P:=\{\,w\in\mathbb C:-\pi<\operatorname{Im}w<\pi\,\}.$$

Then the principal logarithm

$$\operatorname{Log}:S\to P$$

is a biholomorphism.

## Facts & Assumptions

**Given:** The slit plane $S$ and the principal strip $P$ above.

[F1] On $S$, the principal logarithm is holomorphic, satisfies $\exp(\operatorname{Log}z)=z$, and has imaginary part in $(-\pi,\pi)$ ([[cor-principal-logarithm-is-holomorphic-on-the-slit-plane]]).

[F2] The dictionary remark distinguishes the holomorphic principal branch on $S$ from the pointwise boundary value on the negative axis ([[rem-holomorphic-logarithm-and-principal-power-dictionary]]).

[F3] The complex exponential is entire ([[thm-complex-exponential-is-entire-with-derivative-itself]]).

[F4] For real $u,v$, $\exp(u+iv)=e^u(\cos v+i\sin v)$ ([[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]).

[F5] A map is biholomorphic when it is bijective, holomorphic, and has holomorphic inverse ([[def-biholomorphic-map]]).

## Proof

**Proof technique:** direct.

1.1 By [F1] and [F2], $\operatorname{Log}$ is holomorphic on $S$ and maps $S$ into $P$. [F1, F2, given]

2.1 If $\operatorname{Log}z_1=\operatorname{Log}z_2$, then exponentiating and using [F1] gives $z_1=\exp(\operatorname{Log}z_1)=\exp(\operatorname{Log}z_2)=z_2$. Thus $\operatorname{Log}$ is injective. [F1, step 1.1, algebra]

3.1 If $w=u+iv\in P$, then [F4] gives $\exp w=e^u(\cos v+i\sin v)\ne0$; because $v\in(-\pi,\pi)$, this value is never on the nonpositive real axis, so $\exp w\in S$, and its principal logarithm is exactly $w$. Hence $\operatorname{Log}$ is surjective onto $P$ with inverse $w\mapsto\exp w$. [F1, F4, step 2.1, algebra]

4.1 The inverse $w\mapsto\exp w$ is holomorphic by [F3]. Therefore [F5] makes $\operatorname{Log}:S\to P$ a biholomorphism. [F3, F5, step 1.1, step 3.1] ∎
