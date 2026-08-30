---
id: ex-the-tangent-bundle-of-the-circle-is-a-cylinder
kind: example
title: "The tangent bundle of the circle is a cylinder"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-the-tangent-bundle-has-a-canonical-smooth-2n-manifold-structure, thm-curve-contact-classes-are-canonically-isomorphic-to-derivation-tangent-vectors, def-induced-tangent-bundle-chart]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
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

The tangent bundle of $S^1$ is diffeomorphic to the cylinder
$S^1\times\mathbb R$. If $p=(x,y)$ and $q=(-y,x)$, the diffeomorphism sends
$(p,a)$ to the tangent derivation represented by
$$\gamma_{p,a}(t):=\cos(at)p+\sin(at)q.$$
Under the canonical ambient-velocity identification, this tangent vector is
$a(-y,x)$.

## Facts & Assumptions

**Given:** A point $p=(x,y)\in S^1$ and a scalar $a\in\mathbb R$.

[L1] The tangent bundle is a smooth manifold whose fibers are the tangent spaces ([[thm-the-tangent-bundle-has-a-canonical-smooth-2n-manifold-structure]]).

[L2] Curve contact classes are canonically identified with derivation tangent
vectors ([[thm-curve-contact-classes-are-canonically-isomorphic-to-derivation-tangent-vectors]]).

[L3] A smooth coordinate chart induces tangent-bundle coordinates by recording
the coefficients in its coordinate tangent basis
([[def-induced-tangent-bundle-chart]]).

## Verification

**Proof technique:** direct.

1.1 The curve $\gamma_{p,a}$ lies in $S^1$, starts at $p$, and has ambient derivative $a(-y,x)$ at $0$. By [L2] it therefore determines a tangent derivation at $p$. [given, L2, algebra]

2.1 Let $p_0\in S^1$ and choose a local angle chart $\theta\mapsto p(\theta)=(\cos\theta,\sin\theta)$ around $p_0$. Its coordinate tangent vector has ambient velocity $(-\sin\theta,\cos\theta)$, so [L2] makes every tangent derivation over this arc uniquely $a\,\partial_\theta$. In the induced chart of [L3], the displayed map is therefore $$(\theta,a)\longmapsto(\theta,a).$$ Thus it and its inverse are smooth on every such bundle-chart domain. [L1, L2, L3, step 1.1]

3.1 Hence $TS^1$ is a cylinder. [step 2.1] ∎
