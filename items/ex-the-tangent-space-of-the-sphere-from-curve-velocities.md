---
id: ex-the-tangent-space-of-the-sphere-from-curve-velocities
kind: example
title: "The tangent space of the sphere from curve velocities"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-curve-contact-classes-are-canonically-isomorphic-to-derivation-tangent-vectors]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
  audited: 2026-08-30
  precheck: pass
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

For $p\in S^n\subseteq\mathbb R^{n+1}$, sending a curve contact class
$[\gamma]$ to its ambient derivative $\gamma'(0)$ canonically identifies
$$T_pS^n\cong\{v\in\mathbb R^{n+1}:p\cdot v=0\}.$$

## Facts & Assumptions

**Given:** A point $p\in S^n$.

[L1] Tangent vectors are the same as curve velocities through the point ([[thm-curve-contact-classes-are-canonically-isomorphic-to-derivation-tangent-vectors]]).

## Verification

**Proof technique:** direct.

1.1 If $v$ is the velocity of a curve $\gamma$ in $S^n$ with $\gamma(0)=p$, then differentiating $\gamma(t)\cdot\gamma(t)=1$ at $0$ gives $p\cdot v=0$. [L1, given]

1.2 Conversely, if $p\cdot v=0$, the normalized curve $\gamma(t):=(p+tv)/\|p+tv\|$ lies in $S^n$, satisfies $\gamma(0)=p$, and has velocity $v$ at $0$. [L1, given]

2.1 Contact-equivalent curves have the same coordinate, hence ambient, velocity, so the displayed map is well defined. Conversely, choose an index $k$ with $p_k\ne0$ and the standard sphere chart on the hemisphere where the sign of the $k$th coordinate is fixed, obtained by deleting that coordinate. If two curves have the same ambient derivative, their derivatives after this coordinate deletion agree, so they are contact equivalent. The ambient-derivative map is therefore injective. Steps 1.1-1.2 show that its image is exactly $p^\perp$, and [L1] identifies its domain with the derivation tangent space. [L1, step 1.1, step 1.2] ∎
