---
id: def-oriented-smooth-cobordism
kind: definition
title: Oriented smooth cobordism
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
  - def-unoriented-smooth-cobordism-of-closed-manifolds
  - def-induced-boundary-orientation
  - def-oriented-smooth-manifold-and-oriented-chart
  - def-orientation-preserving-parametrization
  - def-product-orientation
  - prop-boundary-orientation-is-independent-of-the-outward-vector-field
  - def-relative-fundamental-class-and-boundary-orientation
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    delegated_by: "owner via frontier-38-owner-30 build dispatch"
    scope: "Historical completed Step 5 full authored item reading and mathematical acceptance; exact historical raw bytes differ from current only by publication status and verification metadata. Direct prerequisite interfaces checked; no recursive audit of supplier proofs."
    evidence:
      - "research/frontier-38-owner-30-reader-13.md"
      - "research/frontier-38-owner-30-alpha-batch-13-5a.md"
      - "research/frontier-38-owner-30-step5-hash-13-post-5a.json"
    content_sha256: "3489b2d3fdb17f135beb9ec5785de7b1a7ba19426bd24b84f39ce6295e2f4fa1"
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Daniel S. Freed, Bordism: Old and New (lecture notes, UT Austin, Fall 2012)"
      url: https://people.math.harvard.edu/~dafr/bordism.pdf
      locator: "Lecture 2, Oriented bordism, (2.20)-(2.22), printed pp.18-19"
    - title: "John Milnor and James Stasheff, Characteristic Classes (original pagination)"
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf
      locator: "Section 17, Oriented Cobordism definition, printed pp.200-202"
---

## Definition

Let $M_0$ and $M_1$ be closed oriented smooth $n$-manifolds, with orientations
$o_0$ and $o_1$. An **oriented bordism** from $M_0$ to $M_1$ is a bordism
$(W,\theta_0,\theta_1)$ from $M_0$ to $M_1$ in the sense of
[[def-unoriented-smooth-cobordism-of-closed-manifolds]], together with an
orientation of $W$, such that the induced boundary orientation
([[def-induced-boundary-orientation]]) of the incoming face $(\partial W)_0$ is
the negative of the supplied orientation $o_0$ of $M_0$, and the induced
boundary orientation of the outgoing face $(\partial W)_1$ is the supplied
orientation $o_1$ of $M_1$. Oriented manifolds are **oriented cobordant** when
such data exist.

**Equivalent collar formulation.** The condition is equivalent to the
requirement that, in the collar parametrisations, the embeddings
$\theta_0:[0,1)\times M_0\to W$ and $\theta_1:(-1,0]\times M_1\to W$ are
orientation-preserving ([[def-orientation-preserving-parametrization]]) for the
product orientations of $[0,1)\times M_0$ and $(-1,0]\times M_1$
([[def-product-orientation]]), the intervals carrying their standard
orientations. Indeed, at a point of the incoming collar the derivative of
$\theta_0$ in the interval direction is an inward normal vector, so
$\theta_0$ is orientation-preserving exactly when an outward vector followed by
the image orientation of $M_0$ is a negative determinant of $TW$, that is,
exactly when the induced boundary orientation of $(\partial W)_0$ is $-o_0$;
at the outgoing collar the derivative in the interval direction is an outward
normal vector, so $\theta_1$ is orientation-preserving exactly when the induced
orientation of $(\partial W)_1$ is $o_1$. The induced orientation is
independent of the choice of outward vector field
([[prop-boundary-orientation-is-independent-of-the-outward-vector-field]]),
so the condition is well posed. This is the same outward-normal-first
convention that the relative fundamental class uses to define the induced
boundary orientation
([[def-relative-fundamental-class-and-boundary-orientation]]).

**Orientation reversal and empty manifolds.** An orientation of a manifold is a
smooth choice of a ray in each determinant line
([[def-oriented-smooth-manifold-and-oriented-chart]]); the **opposite
orientation** reverses every ray pointwise and the manifold with that
orientation is written $-M$. For a disconnected oriented manifold the reversal
is taken on every component. The empty manifold carries its unique orientation
and is its own negative. The definition uses no choice principle: the
orientation of $W$ and the collar data are supplied, and the boundary
orientation is determined by the outward-normal-first convention.
