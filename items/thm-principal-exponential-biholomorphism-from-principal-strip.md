---
id: thm-principal-exponential-biholomorphism-from-principal-strip
kind: theorem
title: "The exponential is the inverse biholomorphism from the principal strip to the slit plane"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-principal-logarithm-biholomorphism-to-the-principal-strip, thm-complex-exponential-is-entire-with-derivative-itself, def-biholomorphic-map]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Lars V. Ahlfors, Complex Analysis, 3rd ed., Ch. 3 §4.2"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
---

## Statement

Let

$$P:=\{\,w\in\mathbb C:-\pi<\operatorname{Im}w<\pi\,\},\qquad S:=\mathbb C\setminus\{x\in\mathbb R:x\le0\}.$$

Then the restriction

$$\exp:P\to S$$

is a biholomorphism, and its inverse is the principal logarithm.

## Facts & Assumptions

**Given:** The principal strip $P$ and slit plane $S$ above.

[F1] The principal logarithm is a biholomorphism $\operatorname{Log}:S\to P$
([[thm-principal-logarithm-biholomorphism-to-the-principal-strip]]).

[F2] The complex exponential is entire
([[thm-complex-exponential-is-entire-with-derivative-itself]]).

[F3] A map is biholomorphic when it is bijective, holomorphic, and has
holomorphic inverse ([[def-biholomorphic-map]]).

## Proof

**Proof technique:** direct.

1.1 By [F1], every $z\in S$ satisfies $\operatorname{Log}z\in P$ and $\exp(\operatorname{Log}z)=z$, so $\exp:P\to S$ is surjective and $\operatorname{Log}$ is a two-sided inverse candidate. [F1, given]

2.1 If $w\in P$, then [F1] applied to $z=\exp w\in S$ gives $\operatorname{Log}(\exp w)=w$, so $\exp$ is injective on $P$. [F1, step 1.1, algebra]

3.1 The restriction of $\exp$ to $P$ is holomorphic by [F2], and its inverse is the holomorphic map $\operatorname{Log}$ by [F1]. Therefore [F3] makes $\exp:P\to S$ biholomorphic. [F1, F2, F3, step 1.1, step 2.1] ∎
