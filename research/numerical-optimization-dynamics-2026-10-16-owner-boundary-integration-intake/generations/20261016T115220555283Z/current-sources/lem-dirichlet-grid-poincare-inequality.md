---
id: lem-dirichlet-grid-poincare-inequality
kind: lemma
title: A finite-grid Poincare inequality for zero endpoint values
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps: [def-uniform-grid-and-difference-operators]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Endre Süli, B6.1 Numerical Solution of Partial Differential Equations"
      url: "https://people.maths.ox.ac.uk/suli/nspdes.pdf"
      locator: "§6.3, PDF pp. 87–89: finite-grid Poincare–Friedrichs estimate used in the endpoint energy discussion."
---

## Statement

Let $N\ge2$, $h>0$, $L=Nh$, and let $w=(w_0,\ldots,w_N)$ be a complex grid function with $w_0=w_N=0$. Then
$$ \|w\|_h\le L\|D_+w\|_{e,h}. $$

## Facts & Assumptions

**Given:** A complex grid function $w$ on $j=0,\ldots,N$ with zero endpoint values.

[F1] The weighted interior and edge norms are those of [[def-uniform-grid-and-difference-operators]].

## Proof

1.1 For each $1\le j\le N-1$, put $d_i=w_{i+1}-w_i$ for $i=0,\ldots,j-1$. Expanding both expressions shows $$ j\sum_{i=0}^{j-1}|d_i|^2-\left|\sum_{i=0}^{j-1}d_i\right|^2 =\sum_{0\le i<r<j}|d_i-d_r|^2, $$ since each side equals $(j-1)\sum_i|d_i|^2-\sum_{i<r}(d_i\overline{d_r}+d_r\overline{d_i})$. The right side is nonnegative. Since $w_0=0$, $w_j=\sum_{i=0}^{j-1}d_i$, so $$ |w_j|^2\le j\sum_{i=0}^{j-1}|w_{i+1}-w_i|^2 \le N\sum_{i=0}^{N-1}|w_{i+1}-w_i|^2. $$ [given, F1, algebra]

2.1 Sum the step 1.1 bound over $j=1,\ldots,N-1$ and multiply by $h$. Since $(N-1)N h\le N^2h$ and $\|D_+w\|_{e,h}^2=h^{-1}\sum_{i=0}^{N-1}|w_{i+1}-w_i|^2$, we obtain $\|w\|_h^2\le N^2h^2\|D_+w\|_{e,h}^2=L^2\|D_+w\|_{e,h}^2$. Taking nonnegative square roots proves the claim. [step 1.1, F1, algebra] ∎
