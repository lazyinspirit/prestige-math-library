---
id: ex-radial-power-membership-in-w-one-p
kind: example
title: "Sharp Sobolev threshold for a radial power"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-countable-choice, def-sobolev-space-wkp-and-its-norm, def-weak-derivative-of-a-locally-integrable-function, def-test-function-space-d-of-an-open-set, def-ck-and-multi-index-notation-in-several-variables, def-l-p-space-as-a-quotient-by-null-functions, def-calligraphic-l-p-on-a-measure-space, def-l-infinity-on-a-measure-space, def-complex-lp-and-euclidean-test-function-conventions, thm-polar-coordinates-formula-for-lebesgue-measure, def-polar-surface-measure-on-the-unit-sphere, def-real-power, thm-real-power-laws, thm-real-power-continuity-and-derivatives, cor-mean-value-theorem, def-natural-logarithm, thm-natural-logarithm-laws, cor-exponential-reciprocal-and-positivity, thm-geometric-series, thm-monotone-convergence-for-the-integral, thm-lebesgue-measure-of-a-box-of-every-kind, def-integral-over-a-measurable-set, def-integral-of-a-nonnegative-simple-function, prop-the-nonnegative-integral-agrees-with-the-simple-integral, prop-order-and-scalar-rules-for-the-nonnegative-integral, lem-metrics-on-rn, def-metric-ball, def-metric-topology, def-borel-sigma-algebra, thm-continuous-preimages-of-borel-sets-are-borel, thm-borel-sigma-algebra-of-a-subspace-is-the-trace, cor-continuous-functions-are-borel-measurable, def-borel-and-lebesgue-measurable-function-on-rn, thm-borel-sets-are-lebesgue-measurable, lem-euclidean-balls-have-positive-finite-lebesgue-measure, lem-smooth-bump-between-concentric-euclidean-balls, thm-heine-borel-rn, thm-extreme-value-metric, thm-chain-rule, thm-algebra-of-derivatives, lem-classical-derivatives-are-weak-derivatives, lem-weak-derivative-linearity-locality-and-commutation, lem-weak-derivatives-are-unique-almost-everywhere, thm-linearity-of-the-lebesgue-integral-on-l-one]
proof_strategy: direct
sources:
  references:
    - title: "Juha Kinnunen, Sobolev Spaces (Aalto University, 2026)"
      url: "https://math.aalto.fi/~jkkinnun/files/sobolev_spaces.pdf"
      locator: "Chapter 1 §1.2, Example 1.10, printed pp. 6–7; off-origin derivative, punctured-ball boundary estimate, and the 1≤p<n W1p threshold"
---

## Sources

- Juha Kinnunen, *Sobolev Spaces*, Chapter 1 §1.2, Example 1.10, printed
  pp. 6–7. For $n\ge2$ and $a>0$, the example differentiates
  $|x|^{-a}$ off the origin, integrates by parts on the punctured ball, and
  bounds the inner boundary term by a constant times $\varepsilon^{n-1-a}$;
  it then computes the $L^p$ and $W^{1,p}$ thresholds for $1\le p<n$.
  The source's weak-derivative argument requires $a<n-1$, which is implied by
  its Sobolev range. It does not cover $n=1$, the $L^p$ threshold for $p\ge n$,
  or the $p=\infty$ statement. Those cases and the cutoff proof below are
  supplied here.

## Statement

Assume the Axiom of Countable Choice. Let $n\ge1$, $a>0$, and
$B=B(0,1)\subseteq\mathbb R^n$. For an arbitrary finite $c\in\mathbb R$, define
$u:B\to\mathbb R$ by $u(0)=c$ and $u(x)=|x|^{-a}$ for $x\ne0$. For every
finite $1\le p<\infty$,
$$u\in L^p(B)\quad\Longleftrightarrow\quad ap<n,$$
and
$$u\in W^{1,p}(B;\mathbb R)\quad\Longleftrightarrow\quad p(a+1)<n.$$
Whenever $p(a+1)<n$, the weak derivative $D_i u$ is the almost-everywhere
class represented off the origin by $v_i(x)=-a x_i|x|^{-a-2}$; one may set
$v_i(0)=0$. In all dimensions $u\notin L^\infty(B)$, and therefore
$u\notin W^{1,\infty}(B;\mathbb R)$.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice, $n\ge1$, $a>0$, the unit ball $B$, $c\in\mathbb R$, and a test function $\varphi\in C_c^\infty(B;\mathbb C)$.

[F1] The only choice principle assumed is the Axiom of Countable Choice, written $\mathrm{AC}_\omega$: every countable family of nonempty sets has a choice function ([[def-countable-choice]]).

[F2] For $W^{1,p}$, the function class and each first weak-derivative class must be in $L^p$; the zero multi-index is the function itself ([[def-sobolev-space-wkp-and-its-norm]]). Real $L^p$ classes are equivalence classes of measurable representatives with finite $p$-integral, and $L^\infty$ means essentially bounded ([[def-l-p-space-as-a-quotient-by-null-functions]], [[def-calligraphic-l-p-on-a-measure-space]], [[def-l-infinity-on-a-measure-space]]). The weak first-derivative identity is $\int_B f\,\partial_i\varphi=-\int_B g\varphi$ for every test, with the complex bilinear convention and no conjugation ([[def-weak-derivative-of-a-locally-integrable-function]], [[def-test-function-space-d-of-an-open-set]], [[def-ck-and-multi-index-notation-in-several-variables]]).

[F3] Under $\mathrm{AC}_\omega$, polar integration for nonnegative Borel functions uses the finite Borel sphere measure $\sigma$ and density $r^{n-1}dr$; by definition $\sigma(E)=n\lambda_n(\{r\omega:\omega\in E,\ 0<r\le1\})$ ([[thm-polar-coordinates-formula-for-lebesgue-measure]], [[def-polar-surface-measure-on-the-unit-sphere]]). In particular the origin is null, and $\sigma(S^{n-1})$ is positive once the unit ball has positive measure.

[F4] For real $q$ and $0<R\le1$, dyadic annuli give $\int_0^R r^q\,dr<\infty$ exactly when $q>-1$; in that case the integral is bounded by $C_qR^{q+1}$ for a finite $C_q$. Indeed, on $A_k=(R2^{-k-1},R2^{-k}]$, monotonicity of real powers bounds the integral by a constant times $R^{q+1}(2^{-(q+1)})^k$ when $q>-1$, and bounds it below by such terms when $q\le-1$. Monotone convergence passes from finite unions of annuli to $(0,R]$, and the geometric series converges exactly for a ratio in $(0,1)$ ([[def-real-power]], [[thm-real-power-laws]], [[thm-real-power-continuity-and-derivatives]], [[cor-mean-value-theorem]], [[def-natural-logarithm]], [[thm-natural-logarithm-laws]], [[cor-exponential-reciprocal-and-positivity]], [[thm-geometric-series]], [[thm-monotone-convergence-for-the-integral]]). Interval lengths and the integrals of their constant majorants are given by the box and nonnegative simple-integral rules ([[thm-lebesgue-measure-of-a-box-of-every-kind]], [[def-integral-over-a-measurable-set]], [[def-integral-of-a-nonnegative-simple-function]], [[prop-the-nonnegative-integral-agrees-with-the-simple-integral]], [[prop-order-and-scalar-rules-for-the-nonnegative-integral]]).

[F5] The Euclidean norm is continuous, open balls are Borel, and continuous maps have Borel preimages; Borel sets in a subspace are traces of ambient Borel sets. Thus functions continuous off a Borel point and finitely glued on Borel pieces are Borel. Under $\mathrm{AC}_\omega$, Borel functions on $\mathbb R^n$ are Lebesgue measurable ([[lem-metrics-on-rn]], [[def-metric-ball]], [[def-metric-topology]], [[def-borel-sigma-algebra]], [[thm-continuous-preimages-of-borel-sets-are-borel]], [[thm-borel-sigma-algebra-of-a-subspace-is-the-trace]], [[cor-continuous-functions-are-borel-measurable]], [[def-borel-and-lebesgue-measurable-function-on-rn]], [[thm-borel-sets-are-lebesgue-measurable]]). Every Euclidean ball has positive finite Lebesgue measure under the same assumption ([[lem-euclidean-balls-have-positive-finite-lebesgue-measure]]).

[F6] A smooth bump $\rho$ exists with $0\le\rho\le1$, $\rho=1$ on $\overline B_1(0)$, and compact support in $B_2(0)$ ([[lem-smooth-bump-between-concentric-euclidean-balls]]). Its first derivatives are bounded by continuity on a compact set ([[thm-heine-borel-rn]], [[thm-extreme-value-metric]]); coordinatewise chain and product rules give the scaled-cutoff derivatives ([[thm-chain-rule]], [[thm-algebra-of-derivatives]]). A compactly supported smooth test and its first derivatives are bounded by the same compactness argument ([[def-test-function-space-d-of-an-open-set]]).

[F7] A $C^1$ function on an open Euclidean set has its classical first partials as weak derivatives under $\mathrm{AC}_\omega$ ([[lem-classical-derivatives-are-weak-derivatives]]). Weak differentiation restricts to open subsets, and weak derivatives are unique almost everywhere under $\mathrm{AC}_\omega$ ([[lem-weak-derivative-linearity-locality-and-commutation]], [[lem-weak-derivatives-are-unique-almost-everywhere]]).

[F8] Complex test pairings are bilinear, with no conjugation, and the complex Lebesgue integral is taken componentwise and is linear on $L^1$ ([[def-complex-lp-and-euclidean-test-function-conventions]], [[thm-linearity-of-the-lebesgue-integral-on-l-one]]).

## Proof

**Proof technique:** polar integrals and a shrinking smooth cutoff.

1.1 For $x\ne0$, coordinate differentiation gives $v_i(x)=-a x_i|x|^{-a-2}$ and $|\nabla u(x)|=a|x|^{-a-1}$. On $B\setminus\{0\}$ these functions are continuous; assigning finite values at $0$ and extending by zero off $B$ is finite Borel gluing by [F5]. Hence the representatives, their finite-power integrands, and the radial functions used with [F3] are Borel and Lebesgue measurable under [F1]. [F1, F4, F5, given]

2.1 Put $I_q(R)=\int_0^R r^q\,dr$. By [F4], $I_q(R)$ is finite exactly for $q>-1$ and then $I_q(R)\le C_qR^{q+1}$. Applying the polar formula [F3] to $|u|^p$ and to the candidate gradient magnitude gives $\int_B|u|^p=\sigma(S^{n-1})I_{n-1-ap}(1)$ and $\int_B|\nabla u|^p=a^p\sigma(S^{n-1})I_{n-1-p(a+1)}(1)$. The factor $\sigma(S^{n-1})$ is finite and positive by [F3, F5]; for $0<R\le1$ the same formulas yield $\int_{B(0,R)}|u|\le C R^{n-a}$ when $a<n$ and $\int_{B(0,R)}|\nabla u|\le C R^{n-a-1}$ when $a<n-1$. [F1, F3, F4, F5, step 1.1]

3.1 The first polar identity in step 2.1 shows that $u\in L^p(B)$ exactly when $ap<n$, since changing $u(0)$ affects only the null singleton [F3]. For every $M>0$, choose $0<R<\min\{1,M^{-1/a}\}$; then $|u(x)|>M$ on $B(0,R)\setminus\{0\}$, a set of positive measure by [F5] and [F3]. Thus $u$ is essentially unbounded and cannot lie in $L^\infty(B)$. By [F2], it also cannot lie in $W^{1,\infty}(B)$. [F1, F2, F3, F5, given, step 2.1]

3.2 Suppose $1\le p<\infty$ and $p(a+1)<n$. Then $a<n-1$, so step 2.1 places $u$ and every $v_i$ in $L^p(B)$ and gives the small-ball $L^1$ bounds. Fix one bump $\rho$ from [F6], set $\eta_\varepsilon(x)=\rho(x/\varepsilon)$, and $\chi_\varepsilon=1-\eta_\varepsilon$ for $0<\varepsilon<1/2$. Then $\chi_\varepsilon=0$ on $B(0,\varepsilon)$, $\chi_\varepsilon=1$ off $B(0,2\varepsilon)$, and $|\partial_i\chi_\varepsilon|\le C/\varepsilon$. The product $w_\varepsilon=\chi_\varepsilon u$, defined as zero near the origin, is $C^1(B)$ and has classical partial $\partial_iw_\varepsilon=\chi_\varepsilon v_i+u\partial_i\chi_\varepsilon$ away from $0$ by [F6]. For each real test $\varphi$, [F7] gives $\int_Bw_\varepsilon\partial_i\varphi=-\int_B\partial_iw_\varepsilon\varphi$. The left-side error from replacing $w_\varepsilon$ by $u$ is at most $\|\partial_i\varphi\|_\infty\int_{B(0,2\varepsilon)}|u|=O(\varepsilon^{n-a})$; the missing $v_i$ term is $O(\varepsilon^{n-a-1})$, and the cutoff term is at most $C\|\varphi\|_\infty\varepsilon^{-1} \int_{B(0,2\varepsilon)}|u|=O(\varepsilon^{n-a-1})$. All tend to zero because $a<n-1$. Thus $\int_Bu\partial_i\varphi=-\int_Bv_i\varphi$ for real tests. Split a complex test into real and imaginary parts and use [F8] to obtain the same identity for every complex test. [F1, F2, F4, F6, F7, F8, step 1.1, step 2.1]

3.3 Conversely, suppose $u\in W^{1,p}(B)$ for finite $p$. For each $i$ its weak derivative has an $L^p$ representative. On $B\setminus\{0\}$, locality and classical compatibility in [F7], followed by uniqueness in [F7], identify that representative almost everywhere with $v_i$ from step 1.1. The origin is null by [F3]. Pointwise, $|\nabla u|^p\le n^{p/2}\sum_{i=1}^n|D_i u|^p$, so the gradient magnitude is in $L^p(B)$. The second polar identity in step 2.1 can be finite only if $p(a+1)<n$; at or above the threshold [F4] gives divergence. [F1, F2, F3, F4, F7, step 1.1, step 2.1]

4.1 If $p(a+1)<n$, then $ap<p(a+1)<n$, so step 3.1 gives $u\in L^p$; step 3.2 gives all first weak derivatives in $L^p$, and [F2] gives $u\in W^{1,p}$. Step 3.3 proves the converse. Since $a>0$ and $p\ge1$, the condition is impossible when $n=1$. In the admissible range step 3.2 identifies $D_i u=[v_i]$; [F3] makes the chosen value at $0$ irrelevant. Together with the $p=\infty$ conclusion of step 3.1, this proves every assertion. [F1, F2, F3, step 3.1, step 3.2, step 3.3] ∎
