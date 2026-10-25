---
id: thm-relu-linear-region-lower-bounds
kind: theorem
title: "One-dimensional and multidimensional ReLU region lower bounds"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 5
deps: [def-relu-linear-region, lem-relu-folding-block, lem-hyperplane-arrangement-region-count, thm-relu-linear-region-upper-bound]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Serra, Tjandraatmadja, and Ramalingam, Bounding and Counting Linear Regions of Deep Neural Networks, Theorems 7 and 8, Appendices D and E"
      url: "https://proceedings.mlr.press/v80/serra18b/serra18b.pdf"
      locator: "Theorems 7–8, pp. 7–8; full constructions in official supplement Appendices D–E."
    - title: "Matus Telgarsky, Deep learning theory lecture notes, Chapter 5"
      url: "https://mjt.cs.illinois.edu/dlt/index.html"
      locator: "Chapter 5, Benefits of depth; supplementary context. The exact mathematical argument is given locally and the primary source is cited separately."
---

## Statement

For a standard adjacent-layer ReLU network with one input dimension and $L\ge1$ hidden layers of widths $n_1,\ldots,n_L\ge3$, the maximum number of full-dimensional activation regions is exactly $\prod_{\ell=1}^L(n_\ell+1)$. For integers $n_0,L\ge1$ and widths $n_1,\ldots,n_L\ge3n_0$, there exists a standard adjacent-layer ReLU network with at least $$\left(\prod_{\ell=1}^{L-1}\left(\left\lfloor\frac{n_\ell}{n_0}\right\rfloor+1\right)^{n_0}\right)\sum_{j=0}^{n_0}\binom{n_L}{j}$$ full-dimensional activation regions.

## Statement references

[Serra et al., Theorems 7–8 and Appendices D–E: exact 1D and multidimensional lower constructions](https://proceedings.mlr.press/v80/serra18b/serra18b.pdf)

[Telgarsky, Chapter 5: depth and approximation context](https://mjt.cs.illinois.edu/dlt/index.html)

## Facts & Assumptions

**Given:** The layer width conditions in the statement and the fold, region upper-bound, and hyperplane arrangement results below.

[F1] A width-$q$ ReLU block for $q\ge3$ maps each of its $q+1$ intervals bijectively onto $[0,1]$ ([[lem-relu-folding-block]]).

[F2] For input dimension $n_0$ and widths $n_1,\ldots,n_L$, the region count is at most the rank-sensitive sum in [[thm-relu-linear-region-upper-bound]].

[F3] $n$ hyperplanes in general position in dimension $d$ cut that space into $\sum_{j=0}^{d}\binom nj$ regions when $n\ge d$ ([[lem-hyperplane-arrangement-region-count]]).

## Proof

1.1 Compose the width-$n_\ell$ blocks from [F1]. Each existing interval is divided into $n_{\ell+1}+1$ intervals, each mapped onto $[0,1]$, so after all $L$ layers the number is $\prod_{\ell=1}^L(n_\ell+1)$. [given, F1, induction]

2.1 For $n_0=1$, each index $j_\ell$ in [F2]'s upper sum is $0$ or $1$: the previous factors leave $n_i-j_i\ge2$ for every $n_i\ge3$. Thus the sum factors as $\prod_{\ell=1}^L(1+n_\ell)$, so the count in step 1.1 is exact. For the multidimensional construction, in each of the first $L-1$ layers allocate $q_\ell=\lfloor n_\ell/n_0\rfloor\ge3$ units to each coordinate and implement an independent width-$q_\ell$ fold on that coordinate; set any remaining units constantly inactive. Each prior box is thereby subdivided into $(q_\ell+1)^{n_0}$ boxes, each mapped bijectively onto $[0,1]^{n_0}$. [step 1.1, F1, F2, construct, algebra]

3.1 Take an arrangement of $n_L$ hyperplanes in general position in $\mathbb R^{n_0}$. It has $S=\sum_{j=0}^{n_0}\binom{n_L}{j}$ chambers by [F3], and there are finitely many chambers. Choose one point $y_C$ in each chamber and set $A=\max_C\|y_C\|_\infty$. With $c=(1/2,\ldots,1/2)$ and $\lambda=1/(4(1+A))$, all points $c+\lambda y_C$ lie in the interior of $[0,1]^{n_0}$. Translate and scale the arrangement by $y\mapsto c+\lambda y$; it remains in general position and each of its $S$ chambers now meets the interior of the image cube. Use these transformed hyperplanes as the last layer's preactivation zero sets. Each preceding folded box maps affinely and bijectively onto $[0,1]^{n_0}$, so every last-layer chamber has a preimage in the interior of every such box. The earlier layers distinguish different boxes, and the last-layer patterns distinguish the $S$ chambers within each box. Multiplying the number of boxes from step 2.1 by $S$ proves the stated lower bound. [step 2.1, F3, algebra, choose, construct] ∎
