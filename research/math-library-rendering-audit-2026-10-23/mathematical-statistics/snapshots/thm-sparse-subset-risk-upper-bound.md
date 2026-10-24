---
id: thm-sparse-subset-risk-upper-bound
kind: theorem
title: "Sparse constrained least-squares risk bound"
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 5
deps:
  - alg-constrained-l0-least-squares
  - cor-cardinality-of-the-power-set
  - lem-finite-support-projection-selection-is-borel
  - thm-subgaussian-projection-risk
  - lem-binomial-support-count-bound
  - def-subgaussian-variable-and-vector
  - thm-cauchy-schwarz-finite
  - def-orthogonal-projection
  - thm-orthogonal-projection-is-the-unique-nearest-point
  - lem-probability-measure-basic-identities
  - def-loss-function-and-risk
  - def-natural-logarithm
  - thm-natural-logarithm-laws
  - def-real-exponential-function-and-e
  - cor-exponential-reciprocal-and-positivity
  - thm-exponential-addition-formula
  - def-integer-power
  - thm-geometric-series
  - thm-monotone-convergence-for-the-integral
  - thm-of-archimedean
  - cor-expectation-linearity-monotonicity-and-modulus-bound
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "Philippe Rigollet and Jan-Christian Hütter, High-Dimensional Statistics: Lecture Notes, Chapter 2, Theorem 2.6 and Corollaries 2.8–2.9"
      url: "https://arxiv.org/pdf/2310.19244v1"
    - title: "Sylvain Arlot, Model/estimator selection, Lecture on model selection, §§1–2"
      url: "https://uq.math.cnrs.fr/media/210618_ecole_ete_cea-edf-inria__modsel_penmin_crossval.pdf"
---

## Statement

For every admissible input to [[alg-constrained-l0-least-squares]], its finite
scan terminates and returns a support minimizing $\|y-P_{V_S}y\|_2^2$ over all
supports of size at most $s$. Among tied minimizers, it returns the earliest
support in the prescribed order.

Moreover, let $n,d$ be positive integers, let $X\in\mathbb R^{n\times d}$ be fixed, and
let $\theta^*\in\mathbb R^d$ have at most $s$ nonzero coordinates, where
$1\le s\le d/2$. Suppose $Y=X\theta^*+\varepsilon$ and $\varepsilon$ is centered
sub-Gaussian with proxy $\sigma^2\ge0$ in the linear-functional sense of
[[def-subgaussian-variable-and-vector]]. Let $\widehat\mu_s$ be the fitted vector
returned by [[alg-constrained-l0-least-squares]]. For $0<\delta<1$, with
$C:=32(4+2\log6)$,

$$\mathbb E\left[\frac1n\|\widehat\mu_s-X\theta^*\|_2^2\right] \le C\frac{\sigma^2s\log(ed/s)}{n},$$

and

$$\mathbb P\!\left(\frac1n\|\widehat\mu_s-X\theta^*\|_2^2 \le C\frac{\sigma^2\left[s\log(ed/s)+\log(1/\delta)\right]}{n}\right) \ge1-\delta.$$
No design-rank, incoherence, or column-normalization condition is assumed. The
claim concerns fitted values; it gives no coefficient-error bound.

## Facts & Assumptions

**Given:** For the scan assertion, any admissible input listed in the Definition of [[alg-constrained-l0-least-squares]]. For the risk bounds, the fixed-design model and noise assumptions in the statement, with $1\le s\le d/2$ and $0<\delta<1$.

[F1] The procedure enumerates the finite nonempty list of supports of size at most $s$ in its prescribed order and replaces its incumbent only when it finds a strictly smaller residual ([[alg-constrained-l0-least-squares]], [[cor-cardinality-of-the-power-set]]).

[F2] For a fixed subspace of rank $r$ and centered sub-Gaussian noise with proxy
$\sigma^2>0$,
$$\mathbb P(\|P_V\varepsilon\|_2^2>t)\le2\cdot6^r e^{-t/(8\sigma^2)}$$
for $t>0$; proxy zero gives zero projection error
([[thm-subgaussian-projection-risk]]).

[F3] For natural numbers $1\le m\le d$, $\binom dm\le(ed/m)^m$ ([[lem-binomial-support-count-bound]]).

[F5] The Euclidean inner product satisfies Cauchy--Schwarz ([[thm-cauchy-schwarz-finite]]).

[F6] Orthogonal projection has its component in the subspace and its residual orthogonal to that subspace ([[def-orthogonal-projection]]).

[F7] Probability is countably subadditive ([[lem-probability-measure-basic-identities]]).

[F8] Risk is the expected loss of a decision rule under the sampling law ([[def-loss-function-and-risk]]).

[F9] The selected support index and fitted-vector maps are Borel measurable for this finite score family ([[lem-finite-support-projection-selection-is-borel]]).

[F10] Orthogonal projection minimizes distance to its subspace ([[thm-orthogonal-projection-is-the-unique-nearest-point]]).

[F11] The natural logarithm is the inverse of $\exp$, is strictly increasing, has the product, quotient, and reciprocal laws and $\log 1=0$; repeated application gives its integer-power law, and $e=\exp(1)$ ([[def-natural-logarithm]], [[thm-natural-logarithm-laws]], [[def-real-exponential-function-and-e]]).

[F12] For $T\ge0$, $c>0$, $x_0\ge0$, $h=c/2$, and $N\in\mathbb N$,
$$\min(T,x_0+Nh)\le x_0+h\sum_{j<N}\mathbf1_{\{T>x_0+jh\}}.$$ If
$\mathbb P(T>x)\le A\exp(-x/c)$ and $x_0=c\log A$, monotone convergence
and expectation linearity, with the Archimedean property giving
$x_0+Nh\to\infty$, bound $\mathbb ET$ by
$x_0+h\sum_{j\ge0}\exp(-j/2)$. The exponential series gives
$\exp(1/2)\ge13/8$. Set $q=\exp(-1/2)=1/\exp(1/2)\le8/13<1$; the addition
law gives $\exp(-j/2)=q^j$ by induction, and the geometric-series formula
gives $\sum_{j\ge0}\exp(-j/2)=1/(1-q)\le13/5$
([[thm-monotone-convergence-for-the-integral]], [[thm-of-archimedean]],
[[cor-expectation-linearity-monotonicity-and-modulus-bound]],
[[thm-exponential-addition-formula]], [[cor-exponential-reciprocal-and-positivity]],
[[def-real-exponential-function-and-e]], [[def-integer-power]],
[[thm-geometric-series]]).

[F13] Expectation is linear for integrable random variables ([[cor-expectation-linearity-monotonicity-and-modulus-bound]]).

## Proof

1.1 Let $S_1,\ldots,S_M$ be the finite nonempty ordered candidate list from [F1]. After the first support is processed, the incumbent has least residual and earliest index among minimizers in the first one-element list. If this is true after $j<M$ supports, then the next residual either is strictly smaller, in which case replacing the incumbent gives the new least residual, or is at least the incumbent residual, in which case retaining it preserves the minimum and keeps the earlier index in a tie. Induction proves the invariant through $M$, so the scan terminates and returns a least-residual support with the stated tie rule. [F1, algebra]

1.2 Write $\mu=X\theta^*$, let $S^*=\{j:\theta_j^*\ne0\}$, and put $\Delta=\widehat\mu_s-\mu$. Since $|S^*|\le s$, $S^*$ is a candidate support and $\mu\in V_{S^*}$. Its candidate fitted vector is $P_{V_{S^*}}Y$. By [F10], $\|Y-P_{V_{S^*}}Y\|_2^2\le\|Y-\mu\|_2^2$. [F1, F10, given]

2.1 By the scan-minimizer result in step 1.1, the selected residual is no larger than that of $P_{V_{S^*}}Y$, which step 1.2 bounds by the residual at $\mu$: $\|Y-\widehat\mu_s\|_2^2\le\|Y-\mu\|_2^2=\|\varepsilon\|_2^2$. Expanding $Y=\mu+\varepsilon$ gives $\|\Delta\|_2^2\le2\langle\varepsilon,\Delta\rangle$. [step 1.1, step 1.2, algebra]

3.1 If $\Delta\ne0$, its support difference lies in the span of columns indexed by $S^*\cup\widehat S$, whose size is at most $2s$. Since $2s\le d$, that set is contained in some $T\subseteq\{1,\ldots,d\}$ with $|T|=2s$. Thus $\Delta\in V_T$, and orthogonality of the projection gives $\langle\varepsilon,\Delta\rangle=\langle P_{V_T}\varepsilon,\Delta\rangle$ by [F6]. By [F5] and step 2.1, $\|\Delta\|_2^2\le2\|P_{V_T}\varepsilon\|_2\|\Delta\|_2$, hence $\|\Delta\|_2^2\le4\|P_{V_T}\varepsilon\|_2^2$. If $\Delta=0$, the last inequality holds for every such $T$ as well. [step 2.1, F5, F6, algebra]

4.1 There are $\binom d{2s}$ possible sets $T$. For each, its projection rank is at most $2s$, so [F2] and the finite union bound give, for $t>0$ and $\sigma^2>0$, $$\mathbb P(\|\Delta\|_2^2>4t) \le2\binom d{2s}6^{2s}e^{-t/(8\sigma^2)}=:A e^{-t/(8\sigma^2)}.$$ If $\sigma^2=0$, apply [F2] to the identity subspace: for every integer $j\ge1$, $\mathbb P(\|\varepsilon\|_2^2>1/j)=0$. Since $\{\|\varepsilon\|_2^2>0\}=\bigcup_{j\ge1}\{\|\varepsilon\|_2^2>1/j\}$, [F7] gives $\varepsilon=0$ almost surely. Then [F1] and the scan result in step 1.1 show that the selected residual is zero, so its fitted vector equals $Y=\mu$; both claims hold with zero error. [F1, F2, F7, F9, step 1.1, step 1.2, algebra, step 3.1]

5.1 For $\sigma^2>0$, take $t=8\sigma^2[\log A+\log(1/\delta)]$ in step 4.1. By [F11] the threshold is positive. The resulting tail is at most $\delta$, and $\log A=\log2+2s\log6+\log\binom d{2s}$. By [F3] and [F11], $\log\binom d{2s}\le2s\log(ed/(2s))=2s\log(ed/s)-2s\log2$. Hence $\log A\le2s\log(ed/s)+2s\log6+(1-2s)\log2\le(2+2\log6)s\log(ed/s)$. Dividing the threshold $4t$ by $n$ and using $C=32(4+2\log6)$ proves the stated high-probability bound. [F3, F9, F11, step 4.1, algebra]

6.1 Put $Z=\|\Delta\|_2^2$, $c=32\sigma^2$, $h=c/2$, and $x_0=c\log A$. Step 4.1 gives $\mathbb P(Z>x_0+jh)\le\exp(-j/2)$ for every $j\ge0$. Apply [F12] to $Z$, using [F13] for expectation linearity and monotone convergence, to get $\mathbb E Z\le x_0+h\sum_{j\ge0}\exp(-j/2)\le c(\log A+13/10)$. By step 5.1, $\log A\le(2+2\log6)s\log(ed/s)$; since $s\log(ed/s)\ge1$ and $13/10<2$, this yields $\mathbb E Z/n\le C\sigma^2s\log(ed/s)/n$. By [F8], this is the expected risk under squared fitted-value loss. The zero-proxy case was settled in step 4.1. [F3, F8, F9, F11, F12, F13, step 4.1, step 5.1, algebra] ∎
