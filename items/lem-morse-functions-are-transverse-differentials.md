---
id: lem-morse-functions-are-transverse-differentials
kind: lemma
title: "A smooth function is Morse if and only if its differential section is transverse to the zero section"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-hessian-of-a-function-at-a-critical-point, def-nondegenerate-critical-point-nullity-index-and-coindex, def-a-smooth-map-transverse-to-an-embedded-submanifold, prop-the-zero-section-is-a-smooth-embedding]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-05
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Shintaro Fushida-Hardy, Morse theory"
      url: "https://www.scribd.com/document/488533132/morse"
    - title: "Marco Gualtieri, Topology I: Smooth Manifolds, Part 10"
      url: "https://www.math.toronto.edu/mgualt/courses/17-1300/docs/17-1300-notes-10.pdf"
---

## Statement

Let $M$ be a smooth manifold and let $f:M\to\mathbb R$ be smooth. Then $f$ is a
Morse function if and only if the smooth section
$$df:M\to T^*M$$
is transverse to the zero section of the cotangent bundle.

## Facts & Assumptions

**Given:** A smooth manifold $M$ and a smooth function $f:M\to\mathbb R$.

[F1] At a critical point $p$, the Hessian $\operatorname{Hess}_p(f)$ is the
intrinsic symmetric bilinear form defined from the second coordinate
derivatives, and $p$ is nondegenerate exactly when that bilinear form has zero
nullity ([[def-hessian-of-a-function-at-a-critical-point]],
[[def-nondegenerate-critical-point-nullity-index-and-coindex]]).

[L1] A smooth map is transverse to an embedded submanifold exactly when its
differential plus the target tangent space spans the ambient tangent space, and
the zero section is an embedded submanifold of $T^*M$
([[def-a-smooth-map-transverse-to-an-embedded-submanifold]],
[[prop-the-zero-section-is-a-smooth-embedding]]).

[A1] In local coordinates $x=(x^1,\dots,x^n)$ near $p$, if
$g=f\circ x^{-1}$ and $a=x(p)$, then the cotangent-bundle coordinates identify
$df$ with $x\mapsto (x,\partial_1 g(x),\dots,\partial_n g(x))$, and the induced
map on the fibre quotient along the zero section is multiplication by the
Hessian matrix $\left(\partial_i\partial_j g(a)\right)$.

## Proof

**Proof technique:** direct.

1.1 The zero set of the section $df$ is exactly the critical set of $f$, because $df_p=0$ means that the differential of $f$ vanishes at $p$. Thus transversality to the zero section is vacuous away from the critical points. [given, A1]

2.1 Fix a critical point $p$. By [A1], in cotangent-bundle coordinates centered at $0_p$ the derivative of $df$ at $p$ induces on the fibre quotient exactly the Hessian matrix of $f$ at $p$. Therefore that quotient map is surjective if and only if $\operatorname{Hess}_p(f)$ is nondegenerate in the sense of [F1]. [F1, A1, step 1.1, algebra]

3.1 By [L1], $df$ is transverse to the zero section at $p$ if and only if that quotient map is surjective. Combining this with step 2.1 shows that $df$ is transverse to the zero section at $p$ if and only if $p$ is a nondegenerate critical point of $f$. [L1, step 2.1]

4.1 Since the only points at which transversality needs checking are the critical points from step 1.1, step 3.1 proves that $df$ is transverse to the zero section exactly when every critical point of $f$ is nondegenerate. By [F1], that is exactly the Morse condition. [F1, step 1.1, step 3.1] ∎
