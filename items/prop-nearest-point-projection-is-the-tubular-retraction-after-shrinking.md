---
id: prop-nearest-point-projection-is-the-tubular-retraction-after-shrinking
kind: proposition
title: "Nearest-point projection is the tubular retraction after shrinking"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-euclidean-tubular-neighbourhood-theorem,
       cor-a-closed-euclidean-submanifold-has-a-smooth-neighbourhood-retraction]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed., Tubular Neighborhoods"
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
---

## Statement

Let $S\subseteq\mathbb R^m$ be a closed embedded smooth submanifold. After
shrinking the tubular neighbourhood from the Euclidean tubular neighbourhood
theorem, the tubular retraction agrees with the unique nearest-point
projection onto $S$.

## Facts & Assumptions

**Given:** A closed embedded smooth submanifold $S\subseteq\mathbb R^m$.

[L1] There is a tubular neighbourhood $E:\Omega_\delta\to U$ of $S$ in
$\mathbb R^m$ ([[thm-euclidean-tubular-neighbourhood-theorem]]).

[L2] The tubular chart yields a smooth retraction $r:U\to S$
([[cor-a-closed-euclidean-submanifold-has-a-smooth-neighbourhood-retraction]]).

## Proof
**Proof technique:** direct.

1.1 Write $x=E(p,v)=p+v$ in the tubular coordinates from [L1]. Because $v$ is orthogonal to $T_pS$, the function $q\mapsto\|x-q\|^2$ has vanishing first derivative at $q=p$. Its Hessian on the tangent directions equals the Euclidean metric plus terms that go to zero with $\|v\|$. Therefore, after shrinking the radius if necessary, $q=p$ is a strict local minimizer on each normal fibre. [L1, given, algebra]

2.1 On each compact piece of $S$, the radius can be shrunk once more so that this local minimizer is the only point of $S$ at the same or smaller distance from $x$. Applying this on a locally finite cover yields a still smaller tubular neighbourhood on which every point has a unique nearest point in $S$. [step 1.1, choose]

3.1 In the tubular coordinates, that unique nearest point is exactly the base point $p$ of the normal vector $v$. But [L2] defines the tubular retraction by sending $x=E(p,v)$ to $p$. Hence the nearest-point projection and the tubular retraction agree on the shrunken tube. [L2, step 2.1] ∎
