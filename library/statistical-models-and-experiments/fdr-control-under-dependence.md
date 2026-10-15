---
page: fdr-control-under-dependence
title: "BY arbitrary dependence and BH PRDS"
status: published
items:
  - alg-benjamini-yekutieli-step-up-procedure
  - lem-unit-interval-is-standard-borel
  - lem-step-up-leave-one-out-rejection-partition
  - def-prds-on-true-null-coordinates
  - thm-by-fdr-control-under-arbitrary-dependence
  - lem-bh-prds-null-contribution-bound
  - thm-bh-fdr-control-under-prds
examples: []
---

The Benjamini–Yekutieli (BY) step-up rule uses critical values $kq/(mH_m)$, where $H_m=\sum_{j=1}^m1/j$. For any finite family of valid p-values, its FDR is at most $(m_0/m)q$ under arbitrary dependence. The proof sums each true-null rejection contribution over the possible rejection counts and applies only marginal superuniformity.

Ordinary Benjamini–Hochberg (BH) uses critical values $kq/m$; these equal the BY cutoffs when $m=1$ and are larger when $m>1$. Its separate guarantee here assumes that the p-value vector is positive regression dependent on the true-null coordinates (PRDS): conditional probabilities of all increasing Borel sets must have nondecreasing versions as each true-null p-value increases. Under that exact condition, BH also has FDR at most $(m_0/m)q$. PRDS is a distributional condition; pairwise positive covariance alone does not verify it, and two-sided Gaussian tests have no blanket PRDS guarantee. See the companion examples for a discrete independent threshold comparison and a counterexample to the pairwise-correlation shortcut.
