---
id: lem-meridional-splitting-retains-a-nontrivial-decomposing-sphere
kind: lemma
title: "Meridional splitting retains a nontrivial decomposing sphere"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-countable-choice
  - thm-smooth-schoenflies-for-embedded-two-sphere-in-s-three
  - lem-boundary-sum-of-one-string-ball-tangles-preserves-nontriviality
  - lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Countable choice is inherited from smooth sphere and local side-tangle suppliers. The construction uses two sphere caps and finite gluings."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "William Menasco, Closed incompressible surfaces in alternating knot and link complements, Topology 23 (1984), 37–44, Lemma 1 case (2), printed p.40"
      url: "https://doi.org/10.1016/0040-9383(84)90023-5"
---

## Statement

Assume countable choice. Let $L\subset S^3$ be a smooth link, and let a smooth sphere $S$ meet it transversely in two points $x_1,x_2$. Each closed ball side contains one proper arc of $L$ and possibly closed components. Call a side tangle trivial when it has no closed components and its proper arc is boundary-parallel. Suppose both side tangles are nontrivial.

Let $B$ be one side ball, with opposite ball $B_0$. Supply a proper embedded disk $D\subset B$ transverse to $L$ in one interior point $p$, such that $\partial D\subset S\setminus\{x_1,x_2\}$ separates $x_1$ from $x_2$ on $S$. Let $Q_i\subset S$ be the disk bounded by $\partial D$ containing $x_i$. After small corner rounding and separation of their copies of $D$, at least one of the spheres $Q_1\cup D$ and $Q_2\cup D$ meets $L$ twice and has both side tangles nontrivial. Thus meridional surgery of this decomposing sphere has a nontrivial decomposing child.

## Statement references

[[def-countable-choice]]

[[lem-boundary-sum-of-one-string-ball-tangles-preserves-nontriviality]]

## Facts & Assumptions

**Given:** The link, the nontrivial two-point decomposing sphere, the supplied meridional disk and countable choice.

[F1] Both closed sides of every smooth embedded sphere in $S^3$ are balls, compatibly identified along their common boundary, under countable choice. ([[thm-smooth-schoenflies-for-embedded-two-sphere-in-s-three]])

[F2] A boundary sum of two one-string ball tangles, allowing closed components, is trivial if and only if both factors are trivial, under countable choice. ([[lem-boundary-sum-of-one-string-ball-tangles-preserves-nontriviality]], [[def-countable-choice]])

[F3] A regular simple circle on a sphere bounds its two complementary disk regions. A linear nullhomotopy in a stereographic plane supplies the hypothesis of the surface disk criterion. ([[lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups]])

## Proof

1.1 By [F3], the boundary circle of $D$ cuts $S$ into the disks $Q_1,Q_2$ specified in the statement. The embedded unions $Q_i\cup D$ are spheres with corners along $\partial D$. Round them in a product neighborhood of that circle, away from $L$, and use nearby parallel copies of $D$ when considering both spheres simultaneously. Each sphere meets $L$ at its one original point $x_i$ and its one new meridional point near $p$. No other link intersection occurs because $D$ has precisely the one supplied intersection and the rounding collar misses $L$. [given, F3, construct]

2.1 Cutting $B$ along $D$ gives two ball sides $B_1,B_2$, with boundaries the rounded $Q_i\cup D$. Here the ball assertion follows from [F1], rather than from an assumption that every disk is already standard. For the sphere $Q_i\cup D$, the connected open set exterior to $B$ is disjoint from it and lies in one complementary component. The other complementary component is contained in $B$, and its closure is a ball by [F1]. In $\operatorname{int}B$ the two sphere complements are separated precisely by $\operatorname{int}D$: a path crossing between their local sides must cross that disk. Thus these two interior ball regions exhaust the cut ball, and their boundaries meet along the copy of $D$. Restoring its collar identifies $B$ with their boundary sum along $D$. [F1, step 1.1, construct]

3.1 The original proper arc of $L\cap B$ has endpoints $x_1,x_2$ on opposite boundary disks and crosses $D$ exactly once. Its two portions therefore give one proper arc in each $B_i$, joining $x_i$ to the new endpoint near $p$. Each closed component misses $D$ and stays in one ball. Consequently $L\cap B$ is precisely the boundary sum of the two child one-string tangles. Since the original side was nontrivial, [F2] implies that at least one child tangle, say the one in $B_i$, is nontrivial. [given, F2, step 2.1, construct]

4.1 The complementary ball side of $Q_i\cup D$ is the rounded union of $B_0$ and the other child ball $B_j$, glued along $Q_j$, where $\{i,j\}=\{1,2\}$. Indeed $B_0$ is outside the original $B$, while $B_j$ is its remaining part; their common boundary disk is $Q_j$. Their link arcs meet that disk only at $x_j$, and their union is the complementary side tangle. This is a supplied boundary sum in the sense of [F2]; its total manifold is a ball by [F1] applied to $Q_i\cup D$. The factor in $B_0$ is the original opposite nontrivial side. Hence [F2] makes this complementary side tangle nontrivial as well. [given, F1, F2, step 2.1, step 3.1, construct]

5.1 The child sphere indexed by $i$ meets $L$ twice by step 1.1, has the nontrivial inside tangle from step 3.1 and the nontrivial outside tangle from step 4.1. It is therefore a nontrivial decomposing sphere. Deleting its two meridional cap disks gives the corresponding nontrivial decomposing annulus. This proves exactly the asserted survival under the supplied meridional surgery, without asserting that the child is isotopic to the original sphere. [step 1.1, step 3.1, step 4.1, construct] ∎
