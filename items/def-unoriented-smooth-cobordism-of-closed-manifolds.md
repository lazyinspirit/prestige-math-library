---
id: def-unoriented-smooth-cobordism-of-closed-manifolds
kind: definition
title: Unoriented smooth cobordism of closed manifolds
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
  - def-smooth-manifold
  - def-smooth-chart-atlas-and-structure-on-a-manifold-with-boundary
  - def-smooth-collar-of-a-manifold-boundary
  - def-smooth-immersion-and-embedding-for-manifolds-with-boundary
  - def-compact-space
  - thm-the-boundary-is-a-closed-embedded-smooth-n-minus-one-manifold
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    scope: "Whole authored item, including statement or definition, every proof or verification step, and used direct supplier interfaces; completed prior Step5 reader/adjudicator evidence reconciled to the current mathematics. Transitive supplier proofs were not audited in full."
    delegated_by: "owner via tools/autopilot (frontier-38-owner-30)"
    evidence:
      - "research/frontier-38-owner-30-reader-13.md"
      - "research/frontier-38-owner-30-alpha-batch-13-5a.md"
      - "research/frontier-38-owner-30-step5-hash-13-post.json"
    reviewed_raw_sha256: "802a5f7930da8424e987aeabcbd375284e810b086e8e04e8bea42e77c6861264"
    content_sha256: "712e0b497be03540df4ce0069a4c27fac1676563fcbc5ca3cf1132820e6cab4c"
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Daniel S. Freed, Bordism: Old and New (lecture notes, UT Austin, Fall 2012)"
      url: https://people.math.harvard.edu/~dafr/bordism.pdf
      locator: "Lecture 1, Bordism, Definition 1.19 and equations (1.20)-(1.21), printed pp.8-9"
    - title: "C. T. C. Wall, Differential Topology (Cambridge Studies in Advanced Mathematics 156, 2016)"
      url: https://www.math.auckland.ac.nz/~hekmati/Books/Wall.pdf
      locator: "Chapter 8 introduction and section 8.2, printed pp.237 and 243-247"
---

## Definition

Fix an integer $n\ge0$. In this library a manifold is Hausdorff and
second-countable, and **closed** means compact without boundary
([[def-smooth-manifold]], [[def-compact-space]]).

Let $M_0$ and $M_1$ be closed smooth $n$-manifolds. A **(unoriented) bordism**
from $M_0$ to $M_1$ is data $(W,\theta_0,\theta_1)$ consisting of

- a compact smooth $(n+1)$-manifold with boundary $W$
  ([[def-smooth-chart-atlas-and-structure-on-a-manifold-with-boundary]]) whose
  boundary is decomposed as a disjoint union
  $\partial W=(\partial W)_0\sqcup(\partial W)_1$ of boundary subsets that are
  both open and closed in $\partial W$; and
- smooth embeddings $\theta_0:[0,1)\times M_0\to W$ and
  $\theta_1:(-1,0]\times M_1\to W$
  ([[def-smooth-immersion-and-embedding-for-manifolds-with-boundary]]) onto
  open collar neighbourhoods of $(\partial W)_0$ and $(\partial W)_1$
  respectively, with $\theta_i(\{0\}\times M_i)=(\partial W)_i$ for $i=0,1$
  ([[def-smooth-collar-of-a-manifold-boundary]]).

Each $(\partial W)_i$ is then a union of components of $\partial W$, of which
there are finitely many because $W$ is compact; and $\partial W$ is a closed
embedded smooth $n$-manifold ([[thm-the-boundary-is-a-closed-embedded-smooth-n-minus-one-manifold]]).
The two closed $n$-manifolds $M_0$ and $M_1$ are **cobordant** when such data
exist; we then also say that $(W,\theta_0,\theta_1)$ is a bordism from $M_0$ to
$M_1$ and that $W$ bounds $M_0\sqcup M_1$.

The collar embeddings are part of the data, not a choice made afterwards: every
gluing argument on this page uses the supplied collars, which is why no choice
principle is required for the cobordism relation. The parametrisation widths
are fixed to the standard intervals $[0,1)$ and $(-1,0]$; a collar supplied
with a different width is rescaled to this form before it is used, and the
rescaled embedding is again a smooth embedding onto the same collar
neighbourhood.

The empty manifold is allowed as $M_0$ or $M_1$ and as $W$, and $n=0$ is
allowed; a bordism from the empty $n$-manifold to the empty $n$-manifold is
exactly a compact smooth $(n+1)$-manifold with empty boundary. The definition
depends only on the smooth structures of $M_0$, $M_1$ and $W$ and on the
supplied data; it introduces no equivalence relation by itself, and the
statement that cobordism is an equivalence relation is proved later.
