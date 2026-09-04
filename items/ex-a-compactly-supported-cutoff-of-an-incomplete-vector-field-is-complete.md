---
id: ex-a-compactly-supported-cutoff-of-an-incomplete-vector-field-is-complete
kind: example
title: "A compactly supported cutoff of an incomplete vector field is complete"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-compactly-supported-vector-fields-are-complete, lem-manifold-bump-for-a-compact-set-inside-an-open-set]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed."
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
---

## Example

Choose a smooth bump function $\chi:\mathbb R\to[0,1]$ with $\chi=1$ on
$[-1,1]$ and $\operatorname{supp}\chi\subseteq [-2,2]$. Then

$$ Y=\chi(x)x^2\frac{\partial}{\partial x} $$

agrees with the incomplete field $x^2\,d/dx$ near the origin but is complete.

## Facts & Assumptions

**Given:** A bump function $\chi$ equal to $1$ on $[-1,1]$ and supported in $[-2,2]$.

[L1] Smooth bump functions with prescribed compact support exist ([[lem-manifold-bump-for-a-compact-set-inside-an-open-set]]).

[L2] Compactly supported smooth vector fields are complete ([[thm-compactly-supported-vector-fields-are-complete]]).

## Verification

**Proof technique:** direct.

1.1 By [L1], such a bump function $\chi$ exists. The field $Y=\chi(x)x^2\,d/dx$ is smooth, agrees with $x^2\,d/dx$ on $[-1,1]$, and vanishes outside the compact interval $[-2,2]$. [L1, given]

2.1 Since $Y$ has compact support, [L2] implies that $Y$ is complete. Thus a compactly supported cutoff can preserve the local model of an incomplete field while restoring global existence. [L2, step 1.1] ∎
