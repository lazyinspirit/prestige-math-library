---
id: lem-diagonal-affine-variety-cut-out-by-coordinate-differences
kind: lemma
title: The affine diagonal is cut out by coordinate differences
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-affine-variety-product-coordinate-ring]
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: J. S. Milne, Algebraic Geometry, §§5h--5i
      url: https://www.jmilne.org/math/CourseNotes/AG.pdf
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---

## Statement

If $X\subseteq\mathbf A^n$ is an affine variety, then the diagonal in $X\times X$ is cut out by $x_i\otimes1-1\otimes x_i$ for $1\le i\le n$.

## Proof

**Given:** $k[X]\otimes_k k[X]$ as the coordinate ring of $X\times X$.

1.1 The multiplication map $m:k[X]\otimes k[X]\to k[X]$, $a\otimes b\mapsto ab$, is the pullback of the diagonal map. It kills every $x_i\otimes1-1\otimes x_i$. [given, algebra]

2.1 Quotienting by these differences identifies the two copies of every coordinate class, hence identifies the quotient with $k[X]$. Therefore their ideal is $\ker m$. [step 1.1, algebra]

3.1 The closed set of this kernel consists exactly of pairs whose coordinate values agree, namely the diagonal. [step 2.1] ∎
