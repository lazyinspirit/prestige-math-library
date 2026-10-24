---
id: lem-relative-derived-subdivision-makes-the-fixed-subcomplex-full
kind: lemma
title: "Relative derived subdivision makes the fixed subcomplex full"
status: published
origin: pipeline
deps: ["def-relative-derived-subdivision-of-a-finite-simplicial-pair"]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-09-09
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: "C. R. F. Maunder, Algebraic Topology"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/maunder.pdf"
---

## Statement

For finite $A\subseteq K$, $A$ is full in $D_A^rK$ for every $r\geq1$: the vertices of any simplex that lie in $A$ span a face of $A$, and its geometric intersection with $|A|$ is exactly that face (possibly empty).

## Source locators

2.5.10–2.5.12 pp.51–52.


## Facts & Assumptions

[F1] Relative derived simplices have a fixed-face plus outside-face-chain form. [[def-relative-derived-subdivision-of-a-finite-simplicial-pair]].


## Proof

**Given:** A finite pair $A\subseteq K$ and at least one relative derived subdivision.

1.1 A simplex of $D_AK$ consists of a face $\alpha$ of $A$ and barycenters $b_{\sigma_1},\ldots,b_{\sigma_s}$ of nested faces outside $A$, strictly containing $\alpha$. The only vertices in $|A|$ are those of $\alpha$: a barycenter of $\sigma\notin A$ has support $\sigma$, so cannot lie in the subcomplex $A$. Thus the vertices in $A$ span precisely $\alpha$. [F1]

2.1 For a point in that simplex with a positive coefficient at some $b_{\sigma_j}$, take the largest such face $\sigma_j$. All its vertex coordinates in the original simplex become positive, with no cancellation, so the original support contains $\sigma_j$. Such a point cannot belong to $|A|$, since that would put its support and every subface, including $\sigma_j$, in $A$. Conversely every point using only vertices of $\alpha$ lies in $|A|$. Therefore the intersection is exactly $|\alpha|$. The same argument applies with $K$ replaced by each $D_A^{r-1}K$. If $A$ is empty intersections are empty; if $A=K$, every simplex is already in $A$. [F1, step 1.1] ∎
