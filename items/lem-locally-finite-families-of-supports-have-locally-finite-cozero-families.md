---
id: lem-locally-finite-families-of-supports-have-locally-finite-cozero-families
kind: lemma
title: "Locally finite supports have locally finite cozero sets"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-cover-refinement-and-local-finiteness]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
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

## Statement

Let $(f_i)_{i\in I}$ be a family of real-valued functions on a topological space $X$. If the family of supports $(\operatorname{supp}(f_i))_{i\in I}$ is locally finite, then the family of cozero sets $(\{x:f_i(x)\ne 0\})_{i\in I}$ is locally finite.

## Facts & Assumptions

**Given:** A family $(f_i)_{i\in I}$ of real-valued functions on $X$.

[F1] A family of subsets is locally finite when every point has a neighbourhood meeting only finitely many members ([[def-cover-refinement-and-local-finiteness]]).

[A1] For each $i$, the cozero set of $f_i$ is contained in $\operatorname{supp}(f_i)$.

## Proof

**Proof technique:** direct.

1.1 Fix $x\in X$; by [F1], there is a neighbourhood $N$ of $x$ meeting only finitely many supports $\operatorname{supp}(f_i)$. [F1, given]

2.1 If $N$ meets the cozero set of $f_i$, then it meets $\operatorname{supp}(f_i)$ by [A1], so only finitely many cozero sets can meet $N$. [A1, step 1.1]

3.1 Since $x$ was arbitrary, the cozero family is locally finite by [F1]. [F1, step 2.1] ∎
