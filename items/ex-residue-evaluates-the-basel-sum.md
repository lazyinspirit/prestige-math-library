---
id: ex-residue-evaluates-the-basel-sum
kind: example
title: "The residue theorem gives the Basel sum"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [cor-basel-sum-by-residues]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "L. V. Ahlfors, Complex Analysis, 3rd ed., Ch. 4 §5.3"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
pipeline_run: null
---

## Example

The residue computation of [[cor-basel-sum-by-residues]] gives
$\sum_{n=1}^{\infty}\frac{1}{n^2}=\frac{\pi^2}{6}.$

## Facts & Assumptions

**Given:** The bilateral residue identity from [[cor-basel-sum-by-residues]].

## Verification

**Proof technique:** direct.

1.1 The corollary already proves that $2\sum_{n=1}^{\infty}\frac{1}{n^2}=\frac{\pi^2}{3}.$ [given]

2.1 Dividing by $2$ yields the usual one-sided Basel sum $\sum_{n=1}^{\infty}\frac{1}{n^2}=\frac{\pi^2}{6}.$ [step 1.1] ∎
