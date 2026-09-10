---
id: lem-countable-boundary-null-partitions-of-a-separable-metric-space
kind: lemma
title: Countable boundary null partitions of a separable metric space
deps: ["def-separable-space", "def-metric-ball", "thm-finite-and-countable-subadditivity-of-measures", "def-axiom-of-choice"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: van Gaans, Lemma 4.3, pp. 10–11; refining-partition consequence
      url: https://pub.math.leidenuniv.nl/~gaansowvan/jancol1.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
status: draft
origin: pipeline
proof_strategy: direct
---

## Statement

Assume AC. For a separable metric S with Borel probability $\mu$, there are countable refining Borel partitions $\mathcal P_k$ for $k\ge1$, all of whose nonempty atoms have diameter at most $2^{-k}$ and $\mu$-null boundary. Together these partitions generate $\mathcal B(S)$.

## Facts & Assumptions

[F1] [[thm-finite-and-countable-subadditivity-of-measures]]: Let $\mu$ be a measure and let $(E_k)_{k\in\mathbb N}$ be measurable. Then

$$\mu\left(\bigcup_{k\in\mathbb N}E_k\right)\le\sum_{k=0}^{\infty}\mu(E_k).$$

For every $m\in\mathbb N$ one also has

$$\mu\left(\bigcup_{k<m}E_k\right)\le\sum_{k<m}\mu(E_k),$$

including $m=0$, where both sides are $0$.

## Proof

**Given:** The objects, hypotheses and definitions in the statement. Its conclusions are to be established below.

1.1 S is nonempty since $\mu$(S)=1. Fix a countable dense list $a_i$. For a fixed center, spheres at distinct radii are disjoint; at most r spheres have mass at least 1/r. Thus the radii with positive sphere mass form a countable union of finite, increasing-order lists. For each k,i, AC chooses $r_{k,i}\in(2^{-k-2},2^{-k-1})$ outside this countable exceptional set. The balls $B(a_i,r_{k,i})$ cover S by density, and each has diameter at most 2^{-k} and boundary contained in its null sphere. [given, algebra]

1.2 At level k disjointize this ordered cover: $D_{k,i}=B(a_i,r_{k,i})\setminus\bigcup_{j<i}B(a_j,r_{k,j})$. These sets partition S; discard empty members. Their boundaries lie in the finite union of the first i sphere boundaries, hence are null by F1. Let $P_k$ consist of all nonempty intersections $D_{1,i_1}\cap\cdots\cap D_{k,i_k}$. These form a countable Borel partition, refine the preceding one, and have diameter at most 2^{-k}; their boundaries are again contained in finitely many null boundaries. [F1]

2.1 Every partition atom is Borel, so the $\sigma$-algebra they generate is contained in Borel(S). Conversely if U is open and x belongs to U, choose a ball about x contained in U and then k with 2^{-k} below its radius. The $P_k$ atom containing x lies in that ball, hence in U. Thus U is the union of the atoms, over countably many levels and members, that are contained in U. It lies in the generated $\sigma$-algebra, proving equality. [given, algebra] ∎
