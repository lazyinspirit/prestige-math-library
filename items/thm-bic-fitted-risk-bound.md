---
id: thm-bic-fitted-risk-bound
kind: theorem
title: "BIC fitted-value risk bound"
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 5
deps:
  - alg-bic-penalized-least-squares
  - cor-cardinality-of-the-power-set
  - lem-finite-support-projection-selection-is-borel
  - thm-subgaussian-projection-risk
  - lem-binomial-support-count-bound
  - def-subgaussian-variable-and-vector
  - thm-orthogonal-projection-is-the-unique-nearest-point
  - def-real-exponential-function-and-e
  - thm-exponential-is-strictly-increasing
  - thm-cauchy-schwarz-finite
  - def-orthogonal-projection
  - lem-probability-measure-basic-identities
  - def-loss-function-and-risk
  - def-natural-logarithm
  - thm-natural-logarithm-laws
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Philippe Rigollet and Jan-Christian Hütter, High-Dimensional Statistics: Lecture Notes, Chapter 2, Definition 2.12, Theorem 2.14 and full proof"
      url: "https://arxiv.org/pdf/2310.19244v1"
    - title: "Sylvain Arlot, Model/estimator selection, Lecture on model selection, §§2–3"
      url: "https://uq.math.cnrs.fr/media/210618_ecole_ete_cea-edf-inria__modsel_penmin_crossval.pdf"
---

## Statement

Let $n,d\ge1$, let $X\in\mathbb R^{n\times d}$ be fixed, and let
$\theta^*\in\mathbb R^d$ have a nonempty support
$S^*:=\{j:\theta_j^*\ne0\}$ of size $s:=|S^*|\ge1$. Suppose
$Y=X\theta^*+\varepsilon$, where $\varepsilon\in\mathbb R^n$ is centered
sub-Gaussian with proxy $\sigma^2\ge0$ in the linear-functional sense of
[[def-subgaussian-variable-and-vector]]. Run
[[alg-bic-penalized-least-squares]] with

$$\tau^2=16\log(6)\frac{\sigma^2}{n}+32\frac{\sigma^2\log(ed)}{n}.$$

For every admissible input to [[alg-bic-penalized-least-squares]], its finite
scan terminates and returns a support minimizing
$n^{-1}\|y-P_{V_S}y\|_2^2+\tau^2|S|$ over all supports. Among tied minimizers,
it returns the earliest support in the prescribed order.

Moreover, there is a universal constant
$C_0:=64+64\log6+32\log4$ such that, for every $0<\delta<1$,

$$\mathbb P\!\left(\frac1n\|\widehat\mu_{\mathrm{BIC}}-X\theta^*\|_2^2 \le C_0\frac{\sigma^2[s\log(ed)+\log(1/\delta)]}{n}\right)\ge1-\delta.$$

Since $s\ge1$, this also gives
$C_0\sigma^2s\log(ed/\delta)/n$. The theorem makes no design-rank,
incoherence, or column-normalization assumption. It asserts no zero right-hand
side when $s=0$.

## Facts & Assumptions

**Given:** For the scan assertion, any admissible input listed in the Definition of [[alg-bic-penalized-least-squares]]. For the risk bound, the fixed-design model, centered sub-Gaussian noise, nonempty true support $S^*$ of size $s\ge1$, and $0<\delta<1$.

[F1] The support list consists of every subset of the finite $d$-element coordinate set, so it is finite and nonempty by [[cor-cardinality-of-the-power-set]]. The algorithm lists it in the prescribed order and updates its incumbent only when it finds a strictly smaller score ([[alg-bic-penalized-least-squares]]).

[F2] For centered sub-Gaussian noise with proxy $\sigma^2>0$ and a fixed subspace of rank $r$, $\mathbb P(\|P_V\varepsilon\|_2^2>t)\le2\cdot6^r e^{-t/(8\sigma^2)}$; proxy zero gives zero projection error ([[thm-subgaussian-projection-risk]]).

[F3] For natural $k$ with $1\le k\le d$, $\binom dk\le(ed/k)^k$ ([[lem-binomial-support-count-bound]]).

[F4] Orthogonal projection is the nearest-point map on its subspace ([[thm-orthogonal-projection-is-the-unique-nearest-point]]).

[F5] $e=\exp(1)>1$ ([[def-real-exponential-function-and-e]], [[thm-exponential-is-strictly-increasing]]).

[F6] The Euclidean inner product satisfies Cauchy--Schwarz ([[thm-cauchy-schwarz-finite]]).

[F7] The centered vector MGF convention is the all-directions bound $\mathbb E e^{\lambda\langle u,\varepsilon\rangle}\le e^{\sigma^2\lambda^2\|u\|_2^2/2}$ ([[def-subgaussian-variable-and-vector]]).

[F8] Orthogonal projection has its component in the subspace and its residual orthogonal to that subspace ([[def-orthogonal-projection]]).

[F9] Probability is countably subadditive ([[lem-probability-measure-basic-identities]]).

[F10] The nonnegative squared fitted-value error is the loss used here; risk is its expectation ([[def-loss-function-and-risk]]).

[F11] The selected support index and fitted-vector maps are Borel measurable for this finite score family ([[lem-finite-support-projection-selection-is-borel]]).

[F12] The natural logarithm is the inverse of $\exp$, is strictly increasing, has the product law and $\log 1=0$, and $e=\exp(1)$ ([[def-natural-logarithm]], [[thm-natural-logarithm-laws]], [[def-real-exponential-function-and-e]]).

## Proof

1.1 Let $S_1,\ldots,S_M$ be the finite ordered support list from [F1]. After the first support is processed, the incumbent has least score and earliest index among minimizers in the first one-element list. If this is true after $j<M$ supports, then the next score either is strictly smaller, in which case replacing the incumbent gives the new least score, or is at least the incumbent score, in which case retaining it preserves the minimum and keeps the earlier index in a tie. Induction proves the invariant through $M$, so the scan terminates and returns the least-scoring support with the stated tie rule. [F1, algebra]

2.1 Let $\widehat S$ be the selected support, $k=|\widehat S|$, $\widehat\mu=\widehat\mu_{\mathrm{BIC}}$, and $\Delta=\widehat\mu-X\theta^*$. The support $S^*$ is a candidate, and $X\theta^*\in V_{S^*}$. By step 1.1 and [F4], the selected penalized score is no larger than the score of the projection onto $V_{S^*}$, whose residual is no larger than $\|\varepsilon\|_2^2$. Thus $$\|Y-\widehat\mu\|_2^2+n\tau^2 k \le\|\varepsilon\|_2^2+n\tau^2s.$$ Expanding $Y=X\theta^*+\varepsilon$ gives $\|\Delta\|_2^2\le2\langle\varepsilon,\Delta\rangle+n\tau^2(s-k)$. [step 1.1, F4, given, algebra]

3.1 On the event $\|\Delta\|_2>0$, set $v=\Delta/\|\Delta\|_2$. Then $v\in W_{\widehat S}:=\operatorname{span}\{X_j:j\in\widehat S\cup S^*\}$, whose dimension is at most $k+s$. Young's inequality $2ab\le2a^2+b^2/2$ applied to $a=|\langle\varepsilon,v\rangle|$ and $b=\|\Delta\|_2$ yields $$\|\Delta\|_2^2\le2n\tau^2s+4\langle\varepsilon,v\rangle^2-2n\tau^2k.$$ If $\Delta=0$, no tail event with a positive threshold can occur. [step 2.1, F11, algebra]

4.1 Assume $\sigma^2>0$ and fix $t>0$. First consider $k=0$. On the event $\|\Delta\|_2^2>2n\tau^2s+t$, step 3.1 implies $\langle\varepsilon,v\rangle^2>t/4$ for a unit vector in $V_{S^*}$. By [F6] and [F8], this forces $\|P_{V_{S^*}}\varepsilon\|_2^2>t/4$. Since $\dim V_{S^*}\le s$, [F2] gives, for $\sigma^2>0$, $$\mathbb P(k=0,\ \|\Delta\|_2^2>2n\tau^2s+t) \le2\cdot6^s e^{-t/(32\sigma^2)}.$$ [F2, F6, F8, F11, step 3.1, algebra]

5.1 Now fix $1\le k\le d$ and a candidate support $S$ of size $k$. On the event $\{\widehat S=S,\ \|\Delta\|_2^2>2n\tau^2s+t\}$, step 3.1 forces $\langle\varepsilon,v\rangle^2>t/4+n\tau^2k/2$ for a unit vector in $W_S=\operatorname{span}\{X_j:j\in S\cup S^*\}$, whose dimension is at most $k+s$. By [F6] and [F8], this implies $\|P_{W_S}\varepsilon\|_2^2>t/4+n\tau^2k/2$. By [F2], the probability for this support is at most $$2\cdot6^{k+s}\exp\!\left(-\frac{t}{32\sigma^2} -\frac{n\tau^2k}{16\sigma^2}\right).$$ [F2, F6, F8, F11, step 3.1, step 4.1, algebra]

6.1 Union bound over the $\binom dk$ supports, use [F3], and substitute the specified $\tau^2$. Since $n\tau^2/(16\sigma^2)=\log6+2\log(ed)$, the sum over all $k\ge1$ is at most $$2e^{s\log6-t/(32\sigma^2)} \sum_{k=1}^d(ed)^{-k}\le2e^{s\log6-t/(32\sigma^2)}.$$ The last inequality follows because each summand is at most $(ed)^{-1}$, there are $d$ terms, and $d(ed)^{-1}=1/e<1$ by [F5]. [F3, F5, F9, F11, step 5.1, algebra]

7.1 Take $t=32\sigma^2[s\log6+\log(4/\delta)]$ in steps 4.1 and 6.1. Each branch has probability at most $\delta/2$, so with probability at least $1-\delta$, $$\|\Delta\|_2^2\le2n\tau^2s+t =\sigma^2\left[64s\log(ed)+64s\log6+32\log4+32\log(1/\delta)\right].$$ By [F5, F12], $\log(ed)=\log e+\log d=1+\log d\ge1$ because $e=\exp(1)$, $\log e=1$, and $d\ge1$. Since $s\ge1$, the right side is at most $C_0\sigma^2[s\log(ed)+\log(1/\delta)]$. Dividing by $n$ proves the positive-proxy bound. The probability event is for the squared fitted-value loss identified by [F10]. [F5, F9, F10, F12, step 4.1, step 6.1, algebra]

8.1 The centered vector proxy assumption is [F7], so [F2] applies to the identity subspace. If $\sigma^2=0$, for every integer $j\ge1$, $\mathbb P(\|\varepsilon\|_2^2>1/j)=0$. Since $\{\|\varepsilon\|_2^2>0\}=\bigcup_{j\ge1}\{\|\varepsilon\|_2^2>1/j\}$, [F9] gives $\varepsilon=0$ almost surely. Then $Y=X\theta^*$; the true support has zero residual, and step 1.1 shows that the selected support also has zero residual because $\tau^2=0$. Its fitted vector therefore equals $Y=X\theta^*$. Thus the bound also holds in the zero-proxy case. [F2, F7, F9, given, step 1.1, algebra] ∎
