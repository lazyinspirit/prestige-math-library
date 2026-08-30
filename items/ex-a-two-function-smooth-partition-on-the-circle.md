---
id: ex-a-two-function-smooth-partition-on-the-circle
kind: example
title: "A two-function smooth partition on the circle"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-smooth-partitions-of-unity-exist-on-manifolds]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-30
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

## Example

Let $U_1:=S^1\setminus\{(-1,0)\}$ and $U_2:=S^1\setminus\{(1,0)\}$. Then there exist smooth functions $\phi_1,\phi_2:S^1\to [0,1]$ such that $\phi_1+\phi_2=1$, $\operatorname{supp}(\phi_1)\subseteq U_1$, and $\operatorname{supp}(\phi_2)\subseteq U_2$.

## Facts & Assumptions

**Given:** The two-set open cover $U_1,U_2$ of the circle.

[L1] Every open cover of a smooth manifold admits a subordinate smooth partition of unity ([[thm-smooth-partitions-of-unity-exist-on-manifolds]]).

## Verification

**Proof technique:** direct.

1.1 The sets $U_1$ and $U_2$ are open and cover $S^1$. [given]

2.1 Apply [L1] to this cover to obtain the required functions $\phi_1,\phi_2$. [L1, step 1.1]

3.1 Thus the circle carries a two-function smooth partition subordinate to the chosen arcs. [step 2.1] ∎
