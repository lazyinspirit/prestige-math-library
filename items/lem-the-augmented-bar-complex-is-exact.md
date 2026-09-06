---
id: lem-the-augmented-bar-complex-is-exact
kind: lemma
title: "The augmented bar complex is exact"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [lem-the-bar-differential-is-group-equivariant-and-squares-to-zero, def-bar-augmentation]
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  scraped: []
  references:
    - title: "Weibel, Theorem 6.5.3"
      url: "https://math.mit.edu/~hrm/palestine/weibel/06-group_homology_and_cohomology.pdf"
---

## Statement

The augmented complex $\cdots\to B_1(G)\to B_0(G)\xrightarrow\varepsilon\mathbb Z\to0$ is exact as a complex of abelian groups.

## Proof

**Given:** The augmented homogeneous bar complex.

1.1 After forgetting the $G$-action, set $s_n(g_0,\ldots,g_n)=(1,g_0,\ldots,g_n)$ and $s_{-1}(1)=(1)$. [given]

2.1 For $n\ge1$, direct cancellation of the faces gives $d_{n+1}s_n+s_{n-1}d_n=1_{B_n}$. In degree zero it gives the correctly typed identity $d_1s_0+s_{-1}\varepsilon=1_{B_0}$, and $\varepsilon s_{-1}=1_{\mathbb Z}$. Thus every cycle is a boundary and the augmentation is onto. The maps $s_n$ are only $\mathbb Z$-linear: left translation changes the inserted $1$. [step 1.1] ∎
