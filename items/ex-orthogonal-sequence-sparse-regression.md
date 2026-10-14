---
id: ex-orthogonal-sequence-sparse-regression
kind: example
title: "Constrained least squares in a two-coordinate orthogonal sequence model"
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 6
deps:
  - alg-constrained-l0-least-squares
  - thm-sparse-subset-risk-upper-bound
  - thm-gaussian-projection-risk
  - def-subgaussian-variable-and-vector
  - def-moments-variance-and-covariance
  - def-loss-function-and-risk
  - cor-expectation-linearity-monotonicity-and-modulus-bound
  - prop-order-and-scalar-rules-for-the-nonnegative-integral
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
sources:
  references:
    - title: "Philippe Rigollet and Jan-Christian Hütter, High-Dimensional Statistics: Lecture Notes, §2.2, Theorem 2.6 and Corollary 2.9"
      url: "https://arxiv.org/pdf/2310.19244v1"
    - title: "Sylvain Arlot, Model/estimator selection, Lecture on model selection, §2"
      url: "https://uq.math.cnrs.fr/media/210618_ecole_ete_cea-edf-inria__modsel_penmin_crossval.pdf"
---

## Example

Let $n=d=2$, $X=I_2$, $\theta^*=0$, and impose sparsity $s=1$. Observe
$Y=X\theta^*+\varepsilon=\varepsilon$. Assume the
centered noise vector is sub-Gaussian with proxy $\sigma^2>0$ and has covariance
$\sigma^2 I_2$. The constrained support search retains the coordinate with the
larger squared observation. Its expected fitted-value error per observation is
between $\sigma^2/2$ and $\sigma^2$, and the general theorem gives the upper
bound $C\sigma^2\log(2e)/2$.

## Facts & Assumptions

**Given:** $n=d=2$, $X=I_2$, $\theta^*=0$, $s=1$, $\sigma^2>0$, the observation
$Y=X\theta^*+\varepsilon=\varepsilon$, and a centered noise vector
$\varepsilon=(\varepsilon_1,\varepsilon_2)$ with sub-Gaussian proxy $\sigma^2$
and $\mathbb E[\varepsilon_i\varepsilon_j]=\sigma^2\mathbf 1_{i=j}$.

[F1] The support-search estimator projects onto each support and chooses the
least-residual candidate, with its stated deterministic tie rule
([[alg-constrained-l0-least-squares]]).

[F2] Its expected squared fitted-value error is at most
$C\sigma^2s\log(ed/s)/n$ when $1\le s\le d/2$
([[thm-sparse-subset-risk-upper-bound]]).

[F3] The centered vector proxy convention is the all-directions MGF bound
([[def-subgaussian-variable-and-vector]]).

[F4] Coordinate second moments and covariance are defined by expectations of
centered products ([[def-moments-variance-and-covariance]]).

[F5] Squared fitted-value error is a nonnegative loss and risk is its expected
value ([[def-loss-function-and-risk]]).

[F6] The nonnegative integral is monotone
([[prop-order-and-scalar-rules-for-the-nonnegative-integral]]), and expectation
is linear and monotone for integrable real random variables
([[cor-expectation-linearity-monotonicity-and-modulus-bound]]).

## Verification

1.1 The three candidate supports are $\varnothing,\{1\},\{2\}$. Their fitted vectors are $0$, $(\varepsilon_1,0)$, and $(0,\varepsilon_2)$, with residual squares $\varepsilon_1^2+\varepsilon_2^2$, $\varepsilon_2^2$, and $\varepsilon_1^2$, respectively. Hence the chosen fitted vector has squared norm $\max(\varepsilon_1^2,\varepsilon_2^2)$, including a tie. [F1, given]

2.1 Pointwise, $\varepsilon_1^2\le\max(\varepsilon_1^2,\varepsilon_2^2) \le\varepsilon_1^2+\varepsilon_2^2$. The coordinate squares are integrable by the covariance assumption [F4], so their sum is integrable by [F6]. The nonnegative maximum is dominated by this sum, hence is integrable by nonnegative-integral monotonicity in [F6]. Taking expectations with [F6] and using [F4] gives $\sigma^2\le\mathbb E\|\widehat\mu_s\|_2^2\le2\sigma^2$. Division by $n=2$ proves the stated interval for fitted-value error. [F4, F6, step 1.1, algebra]

3.1 Here $s=1$, $d=2$, and $n=2$, and the noise satisfies [F3], so [F2] gives expected error at most $C\sigma^2\log(2e)/2$. This is consistent with the direct calculation; the example makes no separate minimax lower-bound claim. By [F5], this expectation is the squared fitted-value risk. [F2, F3, F5, given, step 2.1] ∎
