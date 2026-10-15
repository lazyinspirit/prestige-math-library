---
id: ex-delete-d-and-subsampling
kind: example
title: "Delete-d replicates and subsampling on four units"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 2
deps:
  - alg-delete-d-jackknife-replicates
  - alg-uniform-subsampling-without-replacement
  - def-partial-sums-and-sample-means
  - def-statistic-and-estimator
justified_by: []
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Bradley Efron and Robert Tibshirani, The Bootstrap Method for Assessing Statistical Accuracy, Behaviormetrika 12 (1985), §10, printed pp. 30–33"
      url: "https://link.springer.com/content/pdf/10.2333/bhmk.12.17_1.pdf"
    - title: "B. Efron and R. Tibshirani, The Bootstrap Method for Assessing Statistical Accuracy, Stanford LCS Technical Report 19 / BIO 101 (October 1985; full-text report copy)"
      url: "https://stacks.stanford.edu/file/xv648rw7816/xv648rw7816_LCS-19.pdf"
    - title: "P.J. Bickel, F. Götze and W.R. van Zwet, Resampling Fewer Than n Observations, Statistica Sinica 7 (1997), §3, printed pp. 8–11"
      url: "https://www3.stat.sinica.edu.tw/statistica/oldpdf/a7n11.pdf"
---

## Example

Take four observed real units $z=(1,2,4,7)$ and use $T_m(u_1,\ldots,u_m)=m^{-1}\sum_{j=1}^m u_j$ as the statistic at every nonempty subsample size. For delete-two jackknife replicates, remove each two-unit subset in turn and average the six size-two complement means. For subsampling, draw a two-unit subset uniformly without replacement and compute its mean.

## Facts & Assumptions

**Given:** The ordered tuple $(1,2,4,7)$ and the sample-mean statistic $T_m(u_1,\ldots,u_m)=m^{-1}\sum_{j=1}^m u_j$ for $m=2,4$.

[F1] [[alg-delete-d-jackknife-replicates]]: the delete-$d$ procedure evaluates the declared size-$(n-d)$ statistic on every complement of a $d$-subset and returns the uniform average of the replicates; it defines no variance scaling.

[F2] [[alg-uniform-subsampling-without-replacement]]: the subsampling procedure selects a uniformly distributed subset of the declared size without replacement and applies the corresponding statistic.

[F3] [[def-partial-sums-and-sample-means]] defines $\overline X_m=m^{-1}\sum_{j=1}^mX_j$ for real random variables on one probability space. Evaluating this finite-sum identity at an outcome gives the tuple formula declared in **Given**.

## Verification

1.1 The six deleted pairs $\{1,2\},\{1,3\},\{1,4\},\{2,3\},\{2,4\},\{3,4\}$ leave complement means $11/2,9/2,3,4,5/2,3/2$, respectively. [given, F1, F3, algebra]

2.1 Their uniform average is $(11/2+9/2+3+4+5/2+3/2)/6=7/2$, equal to the original sample mean; [F1] supplies no multiplier or variance interpretation for that average. [F1, F3, step 1.1, algebra]

3.1 The six two-unit subsets have means $3/2,5/2,4,3,9/2,11/2$, each with probability $1/6$ by [F2]. The complement of every two-subset again has size two, and taking the complement twice returns the original subset; hence complementation bijects the deleted pairs with the sampled pairs. Therefore the size-two subsampling law has the same six equally weighted values as the delete-two replicate law in this example. The jackknife output in step 2.1 is their average, a single number, and is not a variance estimate. [F1, F2, F3, step 1.1, step 2.1, algebra] ∎
