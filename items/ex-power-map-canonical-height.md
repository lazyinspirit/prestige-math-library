---
id: ex-power-map-canonical-height
kind: example
title: Canonical height for the power map on the projective line
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 7
deps:
  - def-canonical-height-of-a-morphism-on-projective-line
  - thm-dynamical-canonical-height-limit-and-functional-equation
  - def-axiom-of-choice
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
sources:
  references:
    - title: "Joseph H. Silverman, Lecture Notes on Arithmetic Dynamics, Arizona Winter School 2010, §5.2, Theorem 17, printed pp. 14–15"
      url: "https://swc-math.github.io/aws/2010/2010SilvermanNotes.pdf"
    - title: "Gregory S. Call and Joseph H. Silverman, Canonical heights on varieties with morphisms, §1, Example 3, printed p. 167"
      url: "https://www.numdam.org/item/CM_1993__89_2_163_0.pdf"
---

## Example

Assume the Axiom of Choice. For an integer $m\ge2$, the power map $\phi_m([X:Y])=[X^m:Y^m]$ is a degree-$m$ self-map of the projective line over $\mathbb Q$. Its canonical height agrees with the absolute logarithmic height:

$$\widehat h_{\phi_m}(P)=h(P)$$

for every algebraic point $P$ of the projective line.

## Example references

[[def-canonical-height-of-a-morphism-on-projective-line|Canonical height and absolute-height conventions]]

[[thm-dynamical-canonical-height-limit-and-functional-equation|Limit definition of canonical height]]

[[def-axiom-of-choice|Axiom of Choice]]

[Silverman, §5.2, Theorem 17, printed pp. 14–15](https://swc-math.github.io/aws/2010/2010SilvermanNotes.pdf)

[Call and Silverman, §1, Example 3, printed p. 167](https://www.numdam.org/item/CM_1993__89_2_163_0.pdf)

## Facts & Assumptions

**Given:** The Axiom of Choice; an integer $m\ge2$; and a point $P=[x:y]$ on the projective line over a finite extension of $\mathbb Q$.

[A1] The absolute projective height and its canonical-height construction use the number-field product-formula normalization under Choice. [[def-axiom-of-choice]]

[F1] The absolute logarithmic height is the normalized sum of local logarithmic maximum norms, and the canonical height is the limit of $m^{-n}h(\phi_m^n(P))$. [[def-canonical-height-of-a-morphism-on-projective-line]]

## Verification

1.1 For every integer $n\ge0$, iteration gives $\phi_m^n([x:y])=[x^{m^n}:y^{m^n}]$. At each place $w$, $\max\{|x|_w^{m^n},|y|_w^{m^n}\}=\max\{|x|_w,|y|_w\}^{m^n}$, so the height formula in [F1], summed over places, yields $h(\phi_m^n(P))=m^n h(P)$. [given, A1, F1, induction, algebra]

2.1 Dividing the identity in step 1.1 by $m^n$ and taking the limit in [F1] gives $\widehat h_{\phi_m}(P)=h(P)$. [F1, step 1.1] ∎
