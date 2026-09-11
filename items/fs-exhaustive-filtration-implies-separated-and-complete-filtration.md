---
id: fs-exhaustive-filtration-implies-separated-and-complete-filtration
kind: false-statement
title: Exhaustive filtration implies separated and complete filtration
status: published
origin: pipeline
pipeline_run: phase-2-next-20
deps: ["lem-countable-sequence-groups-and-tail-filtrations", "def-strong-convergence-of-a-spectral-sequence", "lem-abelian-group-model-for-spectral-sequence-computations"]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "Weibel, An Introduction to Homological Algebra, Chapter 5"
      url: "https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf"
    - title: "The Stacks Project, Homological Algebra"
      url: "https://stacks.math.columbia.edu/download/homology.pdf"
---

## Statement

**False:** An exhaustive filtration is automatically separated and complete.

## Facts & Assumptions

[F1] [[def-strong-convergence-of-a-spectral-sequence]] specifies exhaustiveness by union, separatedness by zero intersection and completeness by the canonical inverse-quotient map in modules.

[F2] [[lem-abelian-group-model-for-spectral-sequence-computations]] supplies the nonzero group $k=\mathbb Z/2$. [[lem-countable-sequence-groups-and-tail-filtrations]] gives the separated tail filtrations of $S=k^{(\mathbb N)}$ and $P=k^{\mathbb N}$ and the proper completion inclusion $S\to P$.

## Refutation

**Given:** First the constant increasing filtration $F_pk=k$ for every integer $p$.

1.1 Its union is $k$, so it is exhaustive. Its intersection is also $k\ne0$, so it is not separated. Every quotient $k/F_pk$ is zero, and the inverse system therefore has zero limit: a cone into zero objects has exactly the unique zero map into the zero object. The completion map $k\to0$ kills the nonzero class of $1$ and is not an isomorphism. Thus the same exhaustive filtration fails both asserted conclusions. [F1, F2]

2.1 Separately filter $S$ by $F_{-m}S=T_mS$ for $m\ge0$ and $F_pS=S$ for $p>0$. This is exhaustive since $F_0S=S$. If a sequence lies in every tail, its coordinate $j$ is zero by taking $m=j+1$, so the filtration is separated. Its quotients are $k^m$ with truncation maps, and their limit is $P$ by [F2]. The completion map misses the constant-one sequence, hence is not onto. This second example shows that even adding separatedness to exhaustiveness does not force completeness. The index $m=0$ gives the zero quotient by the whole group; the zero group itself would satisfy all three properties and is not a refuting witness. All maps and sequences used are explicit and require no AC. [F1, F2] ∎
