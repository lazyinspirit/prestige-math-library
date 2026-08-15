---
id: ex-quadratic-discriminant-and-double-root
kind: example
title: "The discriminant of $x^2+bx+c$ and its double-root criterion"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-discriminant-root-formula-and-repeated-root-criterion, cor-vietas-formulas-for-a-split-monic-polynomial]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-15
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Fields and Galois Theory, discriminant discussion"
      url: "https://www.jmilne.org/math/CourseNotes/FT.pdf"
pipeline_run: null
---

## Example

For $f(t)=t^2+bt+c$ over a field,

$$\operatorname{Disc}(f)=b^2-4c.$$

This vanishes exactly when $f$ has a repeated root, in every characteristic.

## Facts & Assumptions

**Given:** A field $F$, a monic quadratic $f(t)=t^2+bt+c$, and roots $\alpha,\beta$ in a splitting field.

[L1] The discriminant of a split monic quadratic is $(\alpha-\beta)^2$ and vanishes exactly for a repeated root ([[thm-discriminant-root-formula-and-repeated-root-criterion]]).

[L2] Vieta's formulas give $\alpha+\beta=-b$ and $\alpha\beta=c$ ([[cor-vietas-formulas-for-a-split-monic-polynomial]]).

## Verification

**Proof technique:** direct.

1.1 Expand $(\alpha-\beta)^2=(\alpha+\beta)^2-4\alpha\beta$. [given, algebra]

2.1 Substitute [L2] into step 1.1 to get $(\alpha-\beta)^2=b^2-4c$, and apply [L1] to identify this with $\operatorname{Disc}(f)$. [step 1.1, L1, L2, algebra]

3.1 By [L1], this element vanishes exactly when $\alpha=\beta$. In characteristic two the formula becomes $b^2$, while $f'=b$, so the same repeated-root criterion remains valid; completing a square is a separate issue. [L1, algebra] ∎
