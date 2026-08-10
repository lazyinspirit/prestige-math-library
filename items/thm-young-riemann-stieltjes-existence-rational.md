---
id: thm-young-riemann-stieltjes-existence-rational
kind: theorem
title: "Young's Riemann–Stieltjes existence theorem for rational Hölder exponents"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [lem-young-partition-sum-estimate-rational,
       def-riemann-stieltjes-sum-and-integral,
       lem-riemann-stieltjes-integral-unique,
       def-lipschitz-holder-contraction, thm-cauchy-criterion-via-lub,
       def-rational-power, lem-rational-power-laws,
       lem-rational-power-monotone]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Nourdin, Nualart, and Peccati, The Breuer–Major theorem in total variation: improved rates under minimal regularity, Section 2.2"
      url: "https://alea.math.cnrs.fr/articles/v16/16-23.pdf"
pipeline_run: null
---

## Statement

Let $p,q\in\mathbb Q\cap(0,1]$ with $p+q>1$. If $f:[a,b]\to\mathbb R$ is $p$-Hölder and $g:[a,b]\to\mathbb R$ is $q$-Hölder, then both $\int_a^b f\,dg$ and $\int_a^b g\,df$ exist. They satisfy

$$\int_a^b f\,dg+\int_a^b g\,df=f(b)g(b)-f(a)g(a).$$

## Facts & Assumptions

**Given:** Hölder functions $f,g$ with rational exponents whose sum exceeds one.

[L1] The Young partition estimate controls refinement errors by a constant times $\lVert P\rVert^{p+q-1}$ ([[lem-young-partition-sum-estimate-rational]]).

[L2] Every Cauchy net of real numbers converges ([[thm-cauchy-criterion-via-lub]]).

[L3] A Stieltjes integral is the common limit of all sufficiently fine tagged sums ([[def-riemann-stieltjes-sum-and-integral]]).

[L4] Such a limit is unique ([[lem-riemann-stieltjes-integral-unique]]).

## Proof

**Proof technique:** direct.

1.1 Given two partitions $P,Q$, let $R$ be their common refinement. By [L1], the left sum over $R$ differs from those over $P$ and $Q$ by at most $C_rK_fK_g(b-a)(\lVert P\rVert^{r-1}+\lVert Q\rVert^{r-1})$. This tends to zero with the two meshes, so the left-endpoint sums form a Cauchy family and converge by [L2]. [L1, L2]

2.1 Replacing a left endpoint $t_i$ by an arbitrary tag $\xi_i$ changes the $i$th term by at most $K_fK_g|t_{i+1}-t_i|^r$. Their sum is at most $K_fK_g(b-a)\lVert P\rVert^{r-1}$, so every fine tagged sum has the left-sum limit from step 1.1. Thus [L3] gives $\int f\,dg$; interchanging $f$ and $g$ gives $\int g\,df$. [step 1.1, L1, L2, L3, L4]

3.1 On every partition, the right-endpoint sum for $f\,dg$ plus the left-endpoint sum for $g\,df$ telescopes exactly to $f(b)g(b)-f(a)g(a)$. Passing to the two limits established in step 2.1 proves the formula. [step 2.1, L3] ∎
