---
id: alg-sketch-and-solve-least-squares
kind: algorithm
title: Rank-aware sketch-and-solve least squares
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
page: sketched-least-squares-and-subspace-embeddings
dependency_level: 0
deps:
  - alg-rank-thresholded-least-squares-by-svd
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "David P. Woodruff, Sketching as a Tool for Numerical Linear Algebra,
        §2.5, Theorem 21"
      url: "https://arxiv.org/pdf/1411.4357"
    - title: "Michael W. Mahoney, Randomized Algorithms for Matrices and Data, §4.2"
      url: "https://www.math.ucdavis.edu/~strohmer/courses/270/RandLA.pdf"
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Definition

Input $A\in\mathbb K^{n\times p}$, $b\in\mathbb K^n$, a supplied sketch
$S\in\mathbb K^{m\times n}$, and a finite nonnegative integer SVD sweep
budget $N$, where $\mathbb K\in\{\mathbb R,\mathbb C\}$. Form
$C=SA$ and $c=Sb$, and call
[[alg-rank-thresholded-least-squares-by-svd]] on $(C,c)$ with threshold
$\tau=0$ and budget $N$.

If the call returns exact-arithmetic convergence with an exact SVD record,
return `success`, the exact rank $r=\operatorname{rank}(C)$, the canonical
minimum-norm vector $\widehat x=C^+c$, and the separately computed sketched
and physical residuals $\|C\widehat x-c\|_2$ and
$\|A\widehat x-b\|_2$. The exact-arithmetic solve-error certificate is
zero. If the SVD call returns `inconclusive`, return its status and supplied
partial diagnostics without claiming a minimizer. In finite precision, return
the computed candidate and the two residual reports separately; mark the rank
`unverified` unless a certified interval separates every singular-value
comparison from zero, and report a solve-error certificate only when the
solver supplies one. No finite-precision accuracy guarantee is part of this
procedure.
