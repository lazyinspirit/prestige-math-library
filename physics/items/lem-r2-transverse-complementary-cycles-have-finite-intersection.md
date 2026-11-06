---
id: lem-r2-transverse-complementary-cycles-have-finite-intersection
kind: lemma
title: "Transverse complementary submanifolds meet in finitely many points"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
dependency_level: 0
deps:
  - def-smooth-manifold
  - def-embedded-smooth-submanifold-with-boundary
  - thm-boundary-submanifolds-of-a-boundaryless-manifold-have-half-slice-charts
  - thm-smooth-inverse-function-theorem-on-manifolds
  - thm-compact-subset-of-a-hausdorff-space-is-closed
dependency_roles:
  def-smooth-manifold: mathematical-premise
  def-embedded-smooth-submanifold-with-boundary: mathematical-premise
  thm-boundary-submanifolds-of-a-boundaryless-manifold-have-half-slice-charts: mathematical-premise
  thm-smooth-inverse-function-theorem-on-manifolds: mathematical-premise
  thm-compact-subset-of-a-hausdorff-space-is-closed: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  scraped: []
  references:
    - title: "Joel W. Robbin and Dietmar A. Salamon, Introduction to Differential Topology, §4.3"
      url: "https://umutvg.github.io/difftop.pdf"
    - title: "Victor Guillemin and Peter J. Haine, Differential Forms, MIT 18.952 course book, §5.5"
      url: "https://math.mit.edu/classes/18.952/2018SP/files/18.952_book.pdf"
---

## Statement

Let $X$ be a Hausdorff smooth $n$-manifold and let $C,D\subseteq X$ be compact embedded smooth submanifolds without boundary, of dimensions $p$ and $n-p$. Assume they are transverse, meaning $T_xC+T_xD=T_xX$ for every $x\in C\cap D$. Then $C\cap D$ is finite.

## Statement references

[[def-smooth-manifold]]

[[def-embedded-smooth-submanifold-with-boundary]]

[[thm-boundary-submanifolds-of-a-boundaryless-manifold-have-half-slice-charts]]

## Facts & Assumptions

**Given:** The Hausdorff smooth manifold $X$ and the compact embedded submanifolds in the statement.

[F1] [[def-embedded-smooth-submanifold-with-boundary]] only requires the inclusion to be a smooth embedding. The published slice-chart theorem [[thm-boundary-submanifolds-of-a-boundaryless-manifold-have-half-slice-charts]] supplies the missing local form: because $C$ has no boundary, every $x\in C$ is an interior point of its manifold-with-boundary structure, so near $x$ it is an ordinary coordinate slice.

[F2] [[thm-smooth-inverse-function-theorem-on-manifolds]] states that a smooth map with invertible differential at a point restricts to a diffeomorphism between neighborhoods of that point and its image.

[F3] [[thm-compact-subset-of-a-hausdorff-space-is-closed]] states that compact subsets of a Hausdorff space are closed.

## Proof

**Given:** Put $q=n-p$. At every intersection point, the hypothesis is $T_xC+T_xD=T_xX$.

1.1 Since $D$ is compact and $X$ is Hausdorff, [F3] makes $D$ closed in $X$. Thus $C\cap D$ is closed in the compact space $C$, hence compact. [F3, given]

1.2 Fix $x\in C\cap D$. By [F1], choose coordinates $(u^1,\ldots,u^p,v^1,\ldots,v^q)$ near $x$ with $C$ given by $v=0$. The coordinate projection $v$ restricted to $D$ has derivative with kernel $T_xD\cap T_xC=\{0\}$, because the two tangent dimensions sum to $n$ and their sum is $T_xX$. Its domain and target both have dimension $q$, so this derivative is an isomorphism. By [F2], after shrinking a neighborhood of $x$ in $D$, the map $v|_D$ is one-to-one. The only point of that neighborhood lying in $C$ is therefore $x$; hence $x$ is isolated in $C\cap D$. [F1, F2, given, algebra]

2.1 Every point of $C\cap D$ is isolated by step 1.2, so its singleton neighborhoods form an open cover of the compact subspace $C\cap D$. Compactness gives a finite subcover, which means $C\cap D$ is finite. If $C\cap D=\varnothing$, the conclusion holds directly. [step 1.1, step 1.2, given] ∎

## Statement references

[[thm-smooth-inverse-function-theorem-on-manifolds]]

[[thm-compact-subset-of-a-hausdorff-space-is-closed]]

