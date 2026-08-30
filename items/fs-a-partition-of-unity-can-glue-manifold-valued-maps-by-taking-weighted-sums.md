---
id: fs-a-partition-of-unity-can-glue-manifold-valued-maps-by-taking-weighted-sums
kind: false-statement
title: "Weighted sums do not glue arbitrary manifold-valued maps"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-smooth-functions-defined-locally-can-be-glued-by-a-partition-of-unity]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds"
      url: "https://books.google.com/books/about/Introduction_to_Smooth_Manifolds.html?id=eqfgZtjQceYC"
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
    - title: "Nigel Hitchin, Differentiable Manifolds"
      url: "https://web.archive.org/web/20201111215108id_/https://people.maths.ox.ac.uk/hitchin/files/LectureNotes/Differentiable_manifolds/manifolds2014.pdf"
---

## Statement

**False claim:** a partition of unity can glue arbitrary manifold-valued maps by weighted sums of their values.

## Facts & Assumptions

**Given:** The target manifold $S^1\subseteq \mathbb R^2$, the two-member cover
$U=V=\mathbb R$, the subordinate smooth partition $\phi_U=\phi_V=1/2$, and
the constant maps $f_U\equiv (1,0)$ and $f_V\equiv (-1,0)$.

[L1] Partition-of-unity gluing works for real-valued functions because addition and scalar multiplication are available in the target ([[thm-smooth-functions-defined-locally-can-be-glued-by-a-partition-of-unity]]).

[A1] On the overlap $U\cap V=\mathbb R$, the partition weights are $1/2$ and
$1/2$.

## Refutation

**Proof technique:** direct.

1.1 On the overlap, the weighted sum would be $(1/2)f_U+(1/2)f_V=(0,0)$. [A1, given]

2.1 The point $(0,0)$ does not lie on $S^1$, so the weighted sum leaves the manifold target. [step 1.1]

3.1 Thus the affine argument from [L1] does not extend to arbitrary manifold-valued maps. [L1, step 2.1] ∎
