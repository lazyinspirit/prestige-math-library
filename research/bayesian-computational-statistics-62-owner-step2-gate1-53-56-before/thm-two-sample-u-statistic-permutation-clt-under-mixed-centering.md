---
id: thm-two-sample-u-statistic-permutation-clt-under-mixed-centering
kind: theorem
title: Permutation CLT for a two-sample U-statistic under mixed-assignment centering
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 6
deps:
  - thm-two-sample-u-statistic-permutation-clt-under-weak-null
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "E. Y. Chung and J. P. Romano, Asymptotically Valid and Exact Permutation Tests Based on Two-Sample U-Statistics, Stanford Technical Report 2011-09, Theorem 3.1 and Appendix A, Lemmas A.1–A.2"
      url: "https://stacks.stanford.edu/file/dp187pj2131/dp187pj2131_2011-09.pdf"
---

## Statement

Assume AC. Let $X_1,\ldots,X_m$ be IID $P$ and independently let
$Y_1,\ldots,Y_n$ be IID $Q$, with $N=m+n$, $m/N\to p\in(0,1)$, and
$\theta(P,Q;h)=0$. Fix $r$ and a measurable kernel $h$ that is symmetric in
each block and antisymmetric under block exchange. Assume for **every**
assignment of independent P- and Q-distributed arguments to the $2r$ positions
that $E[h]=0$ and $0<E[h^2]<\infty$. Let
$\sigma_p^2=E_{\bar P}[g_{\bar P}^2]>0$ for
$\bar P=pP+(1-p)Q$, where $g_{\bar P}$ is its first projection. Then the
conditional permutation CDF of $\sqrt m\,U_{m,n}$ satisfies

$$\sup_{t\in\mathbb R}\left|\widehat R_{m,n}^{\sqrt m U}(t)-\Phi\!\left(\frac{t}{\tau_p}\right)\right|\to_P0,\qquad \tau_p^2=\frac{r^2}{1-p}\sigma_p^2.$$

## Facts & Assumptions

**Given:** The sample, all-assignment centering and moment assumptions, and positive pooled projection variance in the Statement.

[F1] [[thm-two-sample-u-statistic-permutation-clt-under-weak-null]] gives the conditional permutation limit under the weak null, block antisymmetry, finite positive mixed second moments and positive pooled projection variance.

[A1] AC is inherited through [F1]. [[def-axiom-of-choice]]

## Proof

**Given:** The hypotheses in the Statement. Apply the general weak-null result.

1.1 The stated all-assignment assumptions include the weak null and every finite positive mixed second moment required by [F1]. Block symmetry, antisymmetry, proportional growth and positive pooled projection variance are the same hypotheses as in [F1]. [F1, given]

2.1 Under AC [A1], apply [F1] to obtain the stated uniform conditional CDF limit and the identical scale $\tau_p^2=r^2\sigma_p^2/(1-p)$. The additional assignment-wise centering assumptions cause no change in that scale. [A1, F1, step 1.1, algebra] ∎

## Remarks

This is the all-assignment-centered specialization of the general weak-null theorem. Its extra centering assumptions are sufficient but are not needed by the locally proved permutation coupling.
