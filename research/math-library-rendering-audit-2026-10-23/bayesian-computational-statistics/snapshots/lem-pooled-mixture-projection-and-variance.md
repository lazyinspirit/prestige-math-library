---
id: lem-pooled-mixture-projection-and-variance
kind: lemma
title: Pooled-mixture projection and variance
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 3
deps:
  - def-two-sample-order-r-u-statistic-and-first-projections
  - lem-two-sample-u-statistic-projections-well-defined
  - def-moments-variance-and-covariance
  - cor-cauchy-schwarz-inequality-for-l-two
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "E. Y. Chung and J. P. Romano, Asymptotically Valid and Exact Permutation Tests Based on Two-Sample U-Statistics, Stanford Technical Report 2011-09, Theorem 3.1 and Remark 3.1"
      url: "https://stacks.stanford.edu/file/dp187pj2131/dp187pj2131_2011-09.pdf"
---

## Statement

Use the setup of [[def-two-sample-order-r-u-statistic-and-first-projections]]
and suppose $h$ is antisymmetric under exchange of its two blocks and has finite second moment under every independent P/Q assignment to its $2r$ positions. For
$t\in(0,1)$ put $\bar P_t=tP+(1-t)Q$ and define

$$g_t(z)=\int h(z,z_2,\ldots,z_r;w_1,\ldots,w_r)\,d\bar P_t^{\otimes(2r-1)}-\theta(\bar P_t,\bar P_t;h).$$

Then $\theta(\bar P_t,\bar P_t;h)=0$, the first projection in the second block
is $-g_t$, and $\sigma_t^2:=E_{\bar P_t}[g_t^2]$ is finite. The map $t\mapsto\sigma_t^2$ is continuous on
$(0,1)$. In particular, with $N=m+n$ and $p_N=m/N\to p\in(0,1)$,

$$r^2\left(1+\frac{m}{n}\right)\sigma_{p_N}^2\longrightarrow\frac{r^2}{1-p}\sigma_p^2.$$

## Facts & Assumptions

**Given:** A block-symmetric kernel, its antisymmetry under exchange of blocks, and finite second moments under all mixed P/Q assignments.

[F1] [[def-two-sample-order-r-u-statistic-and-first-projections]] defines the block kernel and its first projections.

[F2] [[lem-two-sample-u-statistic-projections-well-defined]] gives the section-integral versions and their L2 bounds.

[F3] [[def-moments-variance-and-covariance]] defines the second-moment variance $E[g_t^2]$ when $E g_t=0$.

[F4] [[cor-cauchy-schwarz-inequality-for-l-two]] makes cross products of the finitely many square-integrable mixed-assignment section functions integrable.

[F5] [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]] supplies measurable integrable section functions and equality of iterated integrals on the mixed product probability spaces.

## Proof

**Given:** The hypotheses in the Statement. Prove the pooled mean, sign relation, finiteness, and continuity claims.

1.1 Under $\bar P_t^{\otimes 2r}$, swapping the first and second blocks preserves the product law and changes $h$ to $-h$. Therefore $\theta(\bar P_t,\bar P_t;h)=-\theta(\bar P_t,\bar P_t;h)$, so it is zero. [F1, given, algebra]

1.2 Expand each factor $\bar P_t=tP+(1-t)Q$ in the section integral. This writes $g_t$ as a finite sum $\sum_\eta c_\eta(t)f_\eta(z)$, where $\eta$ ranges over assignments of P and Q to the remaining $2r-1$ coordinates, $c_\eta(t)$ is a polynomial, and $f_\eta$ is the corresponding section integral. For either first-coordinate law $R\in\{P,Q\}$, write $E_{R,\eta}$ for product expectation with independent coordinates having law $R$ first and the laws specified by $\eta$ in the remaining positions. The mixed-moment assumption gives both $E_{P,\eta}[h^2]<\infty$ and $E_{Q,\eta}[h^2]<\infty$. Cauchy--Schwarz [F4] also makes $h$ integrable with first-coordinate law $(P+Q)/2$. Fubini [F5] on that product space supplies one measurable version of $f_\eta$, valid $(P+Q)$-almost everywhere after setting it to zero on the common exceptional set. Cauchy--Schwarz on the remaining probability product then gives $\int |f_\eta|^2\,dR\le E_{R,\eta}[h^2]<\infty$ for each $R\in\{P,Q\}$, as in the section-integral argument of [F2]. Consequently every cross integral $\int f_\eta f_{\eta'}\,dR$ is finite by [F4]. Expanding $E_{\bar P_t}g_t^2=tE_P[g_t^2]+(1-t)E_Q[g_t^2]$ now gives a finite sum of polynomial coefficients times these finite cross integrals, so it is finite and continuous in $t$. [F2, F3, F4, F5, given, algebra]

2.1 Holding the first coordinate of $h$ fixed and integrating the other $2r-1$ coordinates with law $\bar P_t$ defines $g_t$, since the kernel mean in [F1] is zero by step 1.1. For the projection in the second block, exchange the blocks inside the integral. Antisymmetry changes the sign and the common product law is unchanged, so the second-block projection is $-g_t$. [F1, F2, step 1.1, algebra]

3.1 Since $m/n=p_N/(1-p_N)$ and $p_N\to p$, step 1.2 gives $\sigma_{p_N}^2\to\sigma_p^2$, while $1+m/n=1/(1-p_N)\to1/(1-p)$. Multiplication by $r^2$ proves the displayed limit. [step 1.2, algebra] ∎
