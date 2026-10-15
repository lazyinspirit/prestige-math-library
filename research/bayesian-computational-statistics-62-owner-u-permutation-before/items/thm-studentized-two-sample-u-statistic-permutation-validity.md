---
id: thm-studentized-two-sample-u-statistic-permutation-validity
kind: theorem
title: Studentized permutation validity under a weak two-sample parameter null
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 6
deps:
  - def-two-sample-order-r-u-statistic-and-first-projections
  - lem-two-sample-u-statistic-projections-well-defined
  - lem-two-sample-u-statistic-degenerate-remainder-order
  - lem-pooled-mixture-projection-and-variance
  - lem-finite-population-permutation-clt
  - lem-permutation-consistency-from-iid-mixture
  - lem-permutation-mixture-coupling-for-two-sample-u-statistics
  - thm-two-sample-u-statistic-projection-clt
  - def-studentized-two-sample-u-statistic
  - thm-slutsky-for-real-random-variables
  - def-axiom-of-choice
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "E. Y. Chung and J. P. Romano, Asymptotically Valid and Exact Permutation Tests Based on Two-Sample U-Statistics, Stanford Technical Report 2011-09, Theorems 3.1–3.2 and Appendix A"
      url: "https://stacks.stanford.edu/file/dp187pj2131/dp187pj2131_2011-09.pdf"
    - title: "E. Y. Chung and J. P. Romano, Exact and Asymptotically Robust Permutation Tests, Stanford Technical Report 2011-05, §3.4 and Appendix A"
      url: "https://stacks.stanford.edu/file/vs995qc2521/vs995qc2521_2011-05.pdf"
    - title: "E. Y. Chung and J. P. Romano, Exact and asymptotically robust permutation tests, The Annals of Statistics 41(2), 2013, §§2–3.1"
      url: "https://arxiv.org/pdf/1304.5939"
verification:
  precheck: n/a
---

## Statement

Let $X_1,\ldots,X_m$ be IID $P$ and independently let $Y_1,\ldots,Y_n$ be
IID $Q$, with $N=m+n$, $m/N\to p\in(0,1)$, and
$\theta(P,Q;h)=0$. Assume AC. Fix $r$ and a measurable kernel $h$ that is
symmetric in each block and antisymmetric under block exchange. Assume
$0<E[h^2]<\infty$ for every assignment of independent P- and Q-distributed
arguments to its $2r$ positions. Let the direct first-projection variances and
the pooled-mixture first-projection variance be finite and positive. Suppose
the variance estimators in [[def-studentized-two-sample-u-statistic]] are
consistent under the true samples and under IID triangular samples from
$\bar P_N=(m/N)P+(n/N)Q$, with the corresponding pooled projection targets.

The intended weak-null conclusion is that the conditional permutation CDF of
$S_{m,n}=U_{m,n}/V_{m,n}^{\rm SE}$ converges uniformly in probability to
$\Phi$, and that $S_{m,n}\Rightarrow N(0,1)$ under the true sampling law.
Here $V_{m,n}^{\rm SE}=r\{\widehat\sigma_m^2/m+\widehat\sigma_n^2/n\}^{1/2}$.

## Remarks

**Authoring status: escalated; no proof is supplied.** The controlling weak-null
claim assumes only $\theta(P,Q;h)=0$, block antisymmetry, mixed second moments,
positive direct and pooled projections, and consistent studentizers. The
2011 report's Theorem 3.1 coupling route also assumes
$E[h]=0$ for every P/Q assignment to the $2r$ kernel positions and
$p-m/N=O(N^{-1/2})$. The B-page counterexample
[[cex-weak-null-does-not-imply-mixed-assignment-centering]] satisfies the
planned weak null and its moment and nondegeneracy premises, yet one mixed
assignment has nonzero kernel mean. This refutes an implication required by
that coupling proof; it does not refute the broader asymptotic theorem itself.

The local theorem
[[thm-studentized-permutation-validity-under-mixed-assignment-centering]]
proves only the stronger assignment-wise centering case. A complete local
permutation CLT for the planned weak-null scope, including unrestricted
$m/N\to p$, remains unresolved. Proposed missing supplier:
thm-two-sample-u-statistic-permutation-clt-under-weak-null, placed on this
A page before the present theorem. It must prove the conditional limit for
$\sqrt m\,U_{m,n}$ under only $\theta(P,Q;h)=0$, block antisymmetry, the
stated uniformly finite mixed second moments and projection nondegeneracy, and
$m/N\to p\in(0,1)$. It must not assume assignment-wise centering or a
sample-fraction rate, and it must handle the triangular mixture
$\bar P_N=(m/N)P+(n/N)Q$. No proof of this supplier is available locally.
The 2013 main article states a broader asymptotically linear theory but defers
its proofs to a separate supplement; that proof is not imported here. This
gap affects the conditional permutation-CDF claim here; the true-sampling
studentized limit follows separately from the local projection CLT, the stated
estimator-consistency hypotheses, and Slutsky.

The plan's additional conclusion for $\sqrt m S_{m,n}$ conflicts with its
standard-error denominator. With this definition,
$S_{m,n}=U_{m,n}/V_{m,n}^{\rm SE}$ is already the studentized pivot. The
source's $\sqrt m$ multiplies $U/V^{\rm CR}$, where
$V^{\rm CR}=\sqrt m\,V^{\rm SE}$. The B-page counterexample
[[cex-extra-sqrt-m-after-standard-error-studentization-diverges]] verifies
that the extra factor diverges. This plan conflict needs owner reconciliation;
the correct standard-error pivot conclusion is retained in the proved
assignment-wise theorem.
