---
id: ex-tangent-basis-change-between-cartesian-and-polar-coordinates
kind: example
title: "Tangent basis change between Cartesian and polar coordinates"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-change-of-coordinate-formula-for-tangent-bases]
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

## Example

On every polar-coordinate chart in $\mathbb R^2\setminus\{0\}$, the coordinate
basis satisfies $\partial_r=\cos\theta\,\partial_x+\sin\theta\,\partial_y$ and
$\partial_\theta=-r\sin\theta\,\partial_x+r\cos\theta\,\partial_y$.

## Facts & Assumptions

**Given:** An open set $U\subseteq\mathbb R^2\setminus\{0\}$ carrying a smooth
polar angle $\theta$, with coordinate change $x=r\cos\theta$, $y=r\sin\theta$.

[L1] Tangent bases transform by the Jacobian of the coordinate change ([[thm-change-of-coordinate-formula-for-tangent-bases]]).

## Verification

**Proof technique:** direct.

1.1 The Jacobian of $(r,\theta)\mapsto (x,y)$ is $\begin{pmatrix}\cos\theta&-r\sin\theta\\ \sin\theta&r\cos\theta\end{pmatrix}$. [given]

2.1 Applying [L1] with this Jacobian gives the displayed formulas for $\partial_r$ and $\partial_\theta$ in the Cartesian basis. [L1, step 1.1]

3.1 This is the standard basis-change example. [step 2.1] ∎
