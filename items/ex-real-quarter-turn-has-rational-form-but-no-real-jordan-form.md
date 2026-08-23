---
id: ex-real-quarter-turn-has-rational-form-but-no-real-jordan-form
kind: example
title: "The real quarter-turn has rational canonical form but no real Jordan form"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-rational-canonical-form-existence-and-uniqueness, thm-jordan-form-exists-iff-the-characteristic-polynomial-splits, thm-jordan-canonical-form-from-pid-module-structure]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: "A. Apisa, Wisconsin Math 542, Remark 39"
      url: "https://people.math.wisc.edu/~apisa/notes542.pdf"
    - title: "M. Brussel, Finitely Generated Modules over a PID, canonical-form discussion"
      url: "https://content-calpoly-edu.s3.amazonaws.com/math/1/images/FG%20Modules%20Over%20A%20PID.pdf"
pipeline_run: null
---

## Example

The real quarter-turn

$$A=\begin{pmatrix}0&-1\\1&0\end{pmatrix}$$

is the companion matrix of $x^2+1$ and hence is in rational canonical form over $\mathbb R$, but it has no Jordan canonical form over $\mathbb R$. Over a field containing $i$, its Jordan form is $\operatorname{diag}(i,-i)$.

## Facts & Assumptions

**Given:** Rational canonical form from [[thm-rational-canonical-form-existence-and-uniqueness]] and the module construction of Jordan form after splitting ([[thm-jordan-canonical-form-from-pid-module-structure]]).

[L1] An endomorphism has a Jordan canonical form over its base field if and only if its characteristic polynomial splits into linear factors there ([[thm-jordan-form-exists-iff-the-characteristic-polynomial-splits]]).

## Verification

**Proof technique:** direct.

1.1 With $e_1=(1,0)$ one has $Ae_1=e_2$ and $A^2e_1=-e_1$, so $e_1,Ae_1$ is a cyclic basis with annihilator $x^2+1$. The displayed matrix is exactly $C(x^2+1)$ and is its one-block rational canonical form. [given, algebra]

2.1 The polynomial $x^2+1$ has no real root and does not split over $\mathbb R$. By [L1], the real operator has no real Jordan form. [step 1.1, L1]

3.1 After adjoining $i$, the polynomial splits as $(x-i)(x+i)$ with distinct roots. The module Jordan theorem gives the two one-dimensional blocks $i$ and $-i$, whose dimensions sum to two. [step 2.1, given] ∎
