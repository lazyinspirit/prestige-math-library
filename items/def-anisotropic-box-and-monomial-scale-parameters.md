---
id: def-anisotropic-box-and-monomial-scale-parameters
kind: definition
title: "Anisotropic projective boxes and monomial scale parameters"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - def-primitive-projective-coordinate-representative
  - lem-primitive-projective-coordinate-representative-well-defined
  - def-coefficient-height-of-an-integral-form
  - def-homogeneous-polynomial-and-homogeneous-ideal
sources:
  scraped: []
  references:
    - title: "D. R. Heath-Brown, The density of rational points on curves and surfaces, §1"
      url: "https://arxiv.org/pdf/math/0405392v1"
---

## Definition

Let $n\ge3$, let $F\in\mathbb Z[x_1,\ldots,x_n]$ be a nonzero homogeneous
form of degree $d$, and let $B_1,\ldots,B_n\ge1$ be real numbers. Its support
is the finite set of exponent vectors $e=(e_1,\ldots,e_n)\in\mathbb N^n$ with
nonzero coefficient and $e_1+\cdots+e_n=d$. The **anisotropic projective box**
is the set of rational projective points whose primitive normalized coordinate
representatives $x$ satisfy $|x_i|\le B_i$ for every $i$. Define

$$N(F;B_1,\ldots,B_n):=\#\{[x]\in\mathbb P^{n-1}(\mathbb Q):F(x)=0,\ |x_i|\le B_i\text{ for the primitive normalized representative }x\},$$

$$V:=\prod_{i=1}^nB_i,\qquad T:=\max_{e\in\operatorname{supp}(F)}\prod_{i=1}^nB_i^{e_i}.$$

The representative is unique by the stated primitive-coordinate convention;
the count is finite because each coordinate lies in a bounded interval of
integers. Since $F$ is homogeneous, replacing a vector by a nonzero rational
multiple multiplies its value by the $d$th power of that scalar, so the
condition $F(x)=0$ depends only on the projective point. The coefficient height
$\|F\|$ is the maximum absolute value of the coefficients, and $T$ is the
largest scale of a monomial that actually occurs in $F$.

## Definition references

[[def-primitive-projective-coordinate-representative]]

[[lem-primitive-projective-coordinate-representative-well-defined]]

[[def-coefficient-height-of-an-integral-form]]

[[def-homogeneous-polynomial-and-homogeneous-ideal]]
