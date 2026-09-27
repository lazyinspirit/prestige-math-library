---
id: lem-relatively-compact-boundary-coordinate-half-balls-form-a-basis
kind: lemma
title: "Relatively compact coordinate balls and half-balls form a boundary-manifold basis"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-topological-manifold-with-boundary, def-smooth-chart-atlas-and-structure-on-a-manifold-with-boundary, def-euclidean-upper-half-space-and-its-boundary, cor-euclidean-closed-balls-and-spheres-are-compact, thm-continuous-image-of-a-compact-space-is-compact, thm-compact-subset-of-a-hausdorff-space-is-closed, thm-closed-subspace-of-a-compact-space-is-compact]
proof_strategy: direct
verification:
  verified:
    model: Codex
    verdict: locally-reviewed
    date: 2026-09-23
    scope: "Owner-authorized new repair prerequisite; bounded mathematical reading and local checks, no independent judge or whole-closure certification"
    delegated_by: owner
  precheck: pass
sources:
  references:
    - title: "Ioan Mărcuț, Manifolds (2017 lecture notes), §§14.5, 15.1"
      url: "https://www.math.ru.nl/~imarcut/index_files/lectures_2017.pdf"
---

## Statement

Let $M$ be a smooth $n$-manifold with boundary, $p\in M$, and $O\subseteq M$
an open neighbourhood of $p$. There is a boundary chart
$\varphi:U\to V\subseteq\mathbb H^n$ and an open coordinate ball
$B=\varphi^{-1}(B(c,r)\cap\mathbb H^n)$ such that
$$p\in B\subseteq\overline B\subseteq O,$$
and $\overline B$ is compact. At an interior point one may take
$B(c,r)\subseteq\operatorname{int}\mathbb H^n$; at a boundary point the
relative ball is a half-ball centred at $c=\varphi(p)$ on the boundary.
For $n=0$ the corresponding coordinate ball is the singleton $\{p\}$.
These balls and half-balls form a basis of the topology of $M$.

## Facts & Assumptions

**Given:** $M,p,O$ as in the statement.

[F1] Boundary charts map open subsets of $M$ homeomorphically onto relatively
open subsets of $\mathbb H^n$; $M$ is Hausdorff
([[def-smooth-chart-atlas-and-structure-on-a-manifold-with-boundary]],
[[def-topological-manifold-with-boundary]]).

[F2] Euclidean closed balls are compact, as are their closed intersections
with $\mathbb H^n$ ([[cor-euclidean-closed-balls-and-spheres-are-compact]],
[[def-euclidean-upper-half-space-and-its-boundary]]).

[F3] Continuous images of compact spaces are compact; compact subsets of
Hausdorff spaces are closed; and closed subsets of compact spaces are compact
([[thm-continuous-image-of-a-compact-space-is-compact]],
[[thm-compact-subset-of-a-hausdorff-space-is-closed]],
[[thm-closed-subspace-of-a-compact-space-is-compact]]).

## Proof

**Proof technique:** direct.

1.1 Choose a boundary chart $\varphi:U\to V$ at $p$ and put $c=\varphi(p)$. The set $\varphi(U\cap O)$ is relatively open in $\mathbb H^n$. For $n>0$, choose $r>0$ so small that the relative closed ball $\overline{B(c,r)}\cap\mathbb H^n$ lies in $\varphi(U\cap O)$. If $c$ is interior, shrink $r$ further so $\overline{B(c,r)}\subseteq\operatorname{int}\mathbb H^n$. If $c$ lies on the boundary, $B(c,r)\cap\mathbb H^n$ is a relative half-ball. For $n=0$, use the one-point chart image. [F1, given, choose]

2.1 Let $B$ be the inverse image of the relative open ball from step 1.1, and let $C$ be the inverse image of its relative closed ball. By [F2], the relative closed ball is compact; the inverse chart is continuous, so [F3] makes its image $C$ compact in $M$. As $M$ is Hausdorff, [F3] also makes $C$ closed there. Thus $p\in B\subseteq\overline B\subseteq C\subseteq O$, and $\overline B$ is a closed subset of compact $C$, hence compact by [F3]. In dimension zero the singleton chart image gives the same conclusion. [F1, F2, F3, step 1.1]

3.1 Step 2.1 works for every point and every open neighbourhood, so these relatively compact coordinate balls and half-balls form a basis. [step 2.1] ∎
