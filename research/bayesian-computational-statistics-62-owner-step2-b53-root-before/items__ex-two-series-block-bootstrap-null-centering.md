---
id: ex-two-series-block-bootstrap-null-centering
kind: example
title: Two-series null centering with a final block prefix
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
deps: [alg-k-sample-null-constrained-block-bootstrap, lem-k-sample-null-centering]
proof_strategy: direct finite calculation
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
---

## Example

Apply moving-mode [[alg-k-sample-null-constrained-block-bootstrap]] in $H=\mathbb R$ to the series $(0,2,4)$ and $(10,12,14,16)$, with $b_1=b_2=2$. Their observed means are $2$ and $13$, but both bootstrap series have conditional mean $\bar Y_P=58/7$.

## Verification

**Given:** The two fixed series and block lengths in the Example.

[F1] [[alg-k-sample-null-constrained-block-bootstrap]] subtracts the within-series mean, then the candidate average at each within-block position, and adds the pooled mean; it retains exactly $n_i$ observations.

[F2] [[lem-k-sample-null-centering]] gives the common conditional mean for every retained observation and hence every series mean.

1.1 Here $M=7$, $\bar Y_P=(6+52)/7=58/7$, $N_1=2$, $N_2=3$, and $k_1=k_2=2$. The first residual series is $(-2,0,2)$; its candidate blocks are $(-2,0)$ and $(0,2)$, with position averages $(-1,1)$. After subtracting those averages the two candidates are $(-1,-1)$ and $(1,1)$. The second residual series is $(-3,-1,1,3)$; its candidates are $(-3,-1),(-1,1),(1,3)$, also with position averages $(-1,1)$, and become $(-2,-2),(0,0),(2,2)$. [F1, given, algebra]

2.1 Let $V_1,V_2$ be independent uniforms on $\{-1,1\}$ and $W_1,W_2$ independent uniforms on $\{-2,0,2\}$, all four independent. The outputs are $(58/7+V_1,58/7+V_1,58/7+V_2)$ and $(58/7+W_1,58/7+W_1,58/7+W_2,58/7+W_2)$. The first output retains only the first entry of its final block. Since all four offsets have mean zero, $E^*\bar Y_1^*=E^*\bar Y_2^*=58/7$, explicitly realizing [F2] despite the unequal observed means and unequal sample sizes. [F1, F2, step 1.1, algebra] ∎
