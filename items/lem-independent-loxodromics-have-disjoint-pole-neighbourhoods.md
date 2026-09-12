---
id: "lem-independent-loxodromics-have-disjoint-pole-neighbourhoods"
kind: "lemma"
title: "Independent loxodromics have disjoint pole neighbourhoods"
deps: ["def-hg-toolkit-loxodromics-and-independent-poles", "lem-boundary-products-are-independent-of-representative-and-basepoint"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "Canary Theorem 7.3 pp.32–33; four-pole separation"
      url: "https://websites.umich.edu/~canary/lecnotespublic.pdf"
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

Independent loxodromics have four pairwise disjoint open pole neighbourhoods in the boundary.

## Facts & Assumptions

**Given:** Two independent loxodromic isometries of a metric space satisfying the Gromov product condition.

[F1] Each has two distinct poles; independence means that their pole sets are disjoint ([[def-hg-toolkit-loxodromics-and-independent-poles]]).

[F2] The Gromov-sequence boundary topology is Hausdorff ([[lem-boundary-products-are-independent-of-representative-and-basepoint]]).

## Proof

1.1 List the poles as $p_1,p_2,p_3,p_4$, placing the positive and negative poles of the first isometry before those of the second. By F1 each pair is distinct and the two pairs are disjoint, so all four points are distinct. [F1, given]

2.1 For each of the six pairs $i<j$, F2 supplies disjoint open sets $V_{ij}$ containing $p_i$ and $W_{ij}$ containing $p_j$. Fix these six pairs of sets successively; this is finite existential instantiation, not an invocation of AC. Define $O_i=\bigcap_{j>i}V_{ij}\cap\bigcap_{j<i}W_{ji}$. An intersection with no indices denotes the whole boundary. Each $O_i$ is open as a finite intersection of open sets and contains $p_i$. [step 1.1, F2, construct]

3.1 If $i<j$, then $O_i\subseteq V_{ij}$ and $O_j\subseteq W_{ij}$, hence $O_i\cap O_j=\varnothing$. Thus these are the four required open neighbourhoods. Repeated poles, an empty boundary or a singleton boundary are excluded by step 1.1; empty sub-intersections in step 2.1 cause no restriction. This construction assumes the two independent isometries and asserts no existence of such a pair. [step 2.1, step 1.1, algebra] ∎
