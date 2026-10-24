---
id: rem-weak-derivatives-are-distributional-derivatives-with-function-values
kind: remark
title: Weak derivatives are represented distributional derivatives
status: published
origin: pipeline
deps:
  - def-locally-integrable-function-as-a-regular-distribution
  - def-regular-distribution-from-a-locally-integrable-function
  - def-test-function-space-d-of-an-open-set
  - def-weak-derivative-of-a-locally-integrable-function
  - lem-weak-derivatives-are-unique-almost-everywhere
  - def-distributional-derivative
  - def-dirac-delta-and-its-derivatives
  - def-complex-lp-and-euclidean-test-function-conventions
  - thm-absolute-continuity-of-the-integral
  - thm-lebesgue-measure-of-a-box-of-every-kind
  - def-integrable-real-and-complex-functions-and-their-integrals
  - def-integral-over-a-measurable-set
  - prop-order-and-scalar-rules-for-the-nonnegative-integral
  - def-integral-of-a-nonnegative-simple-function
  - prop-the-nonnegative-integral-agrees-with-the-simple-integral
  - prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets
  - lem-smooth-bump-between-concentric-euclidean-balls
  - lem-complex-integration-by-parts-on-intervals-and-decaying-lines
  - thm-chain-rule
  - def-countable-choice
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  scraped: []
  references:
    - title: Haim Brezis, Functional Analysis, Sobolev Spaces and Partial Differential Equations (2011)
      url: https://www.math.utoronto.ca/almut/Brezis.pdf
      locator: Chapter 8 §8.2, printed p. 203, Examples and Remark 3; the step-function assertion is posed as an exercise, while Remark 3 states the distributional-derivative criterion for W^{1,p}.
    - title: John K. Hunter, Notes on Partial Differential Equations (2014)
      url: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf
      locator: Chapter 3 §3.2, Example 3.4, printed pp. 48–49; computes the step derivative and proves there is no L¹_loc representative.
---

## Remark

Assume Countable Choice, as required by the cited regular-distribution injection, weak-derivative uniqueness, measure, and interval-FTC results.
Let $Ω\subseteq\mathbb R^n$ be open, $n\ge1$, let
$u\in L^1_{\mathrm{loc}}(\Omega)$, and let
$\alpha\in\mathbb N_0^n$. Then
$$D^\alpha u\text{ exists as a weak }L^1_{\mathrm{loc}}\text{ derivative}\quad\Longleftrightarrow\quad\partial^\alpha T_u\in\{T_h:h\in L^1_{\mathrm{loc}}(\Omega)\}\subseteq\mathcal D'(\Omega).$$
When such an $h$ exists, its almost-everywhere class is unique. Every
distribution has distributional derivatives, but these derivatives need not
lie in the image of the regular-distribution map. In particular, a locally
integrable function can belong to every $L^p$ under consideration and still
have no $L^p$ weak derivative.

**Example of the obstruction.** On $\Omega=(-1,1)$ let
$u=\mathbf1_{(0,1)}$. This function is in $L^p(\Omega)$ for every
$1\le p\le\infty$, but its distributional derivative is $\delta_0$.
The delta distribution is not the regular distribution of any
$h\in L^1_{\mathrm{loc}}((-1,1))$, so $u$ has no locally integrable weak
derivative, and consequently no $L^p$ weak derivative.

## Facts & Assumptions

**Given:** Countable Choice, an open set $\Omega\subseteq\mathbb R^n$,
$n\ge1$, $u\in L^1_{\mathrm{loc}}(\Omega)$, and
$\alpha\in\mathbb N_0^n$.

[F1] The regular pairing $T_f(\varphi)=\int_\Omega f\varphi$ defines a
distribution for each $f\in L^1_{\mathrm{loc}}(\Omega)$; under Countable
Choice the map from almost-everywhere classes to distributions is injective
([[def-locally-integrable-function-as-a-regular-distribution]]).

[F2] The weak-derivative identity is equivalent to
$\partial^\alpha T_u=T_v$ ([[def-weak-derivative-of-a-locally-integrable-function]]).

[F3] A weak derivative, when it exists, is unique as an almost-everywhere
class under Countable Choice
([[lem-weak-derivatives-are-unique-almost-everywhere]]).

[F4] Distributional differentiation maps every distribution to a
distribution, with the signed-transpose convention
([[def-distributional-derivative]]).

[F5] A complex $L^p$ class is the quotient of measurable functions with
finite $N_p$ ([[def-complex-lp-and-euclidean-test-function-conventions]]).

[F18] For finite $p$, $N_p$ is the $p$th-root integral size; for $p=\infty$,
$N_\infty$ is the essential-supremum size
([[def-complex-lp-and-euclidean-test-function-conventions]]).

[F6] The intervals $(0,1)$ and $(-1,1)$ have measures one and two,
respectively, and
$[-\varepsilon,\varepsilon]$ has measure $2\varepsilon$ for
$0<\varepsilon<1/2$
([[thm-lebesgue-measure-of-a-box-of-every-kind]]).

[F7] The nonnegative integral of an indicator equals the measure of its
measurable set, and a nonnegative simple function has integral equal to its
simple integral
([[def-integral-of-a-nonnegative-simple-function]],
[[prop-the-nonnegative-integral-agrees-with-the-simple-integral]]).

[F8] Every compact subset of $\mathbb R$ is measurable with finite measure
under Countable Choice; the integral over a measurable set is the integral
after restricting by its indicator, and the nonnegative integral is monotone
([[prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets]],
[[def-integral-over-a-measurable-set]],
[[prop-order-and-scalar-rules-for-the-nonnegative-integral]]).

[F9] A complex function is integrable when its modulus has finite integral
([[def-integrable-real-and-complex-functions-and-their-integrals]]).

[F10] In one dimension there is a smooth $\beta:\mathbb R\to[0,1]$ equal to
one on $[-1/2,1/2]$ and with support contained in $(-1,1)$
([[lem-smooth-bump-between-concentric-euclidean-balls]]).

[F11] If $h$ is integrable on a compact set, then its absolute integral over
measurable subsets tends to zero as their measure tends to zero
([[thm-absolute-continuity-of-the-integral]]).

[F12] For complex $C^1$ functions, the Lebesgue integral of the derivative on
a compact interval is the endpoint increment, under Countable Choice
([[lem-complex-integration-by-parts-on-intervals-and-decaying-lines]]).

[F13] For $a\in\Omega$, the Dirac distribution satisfies
$\delta_a(\varphi)=\varphi(a)$
([[def-dirac-delta-and-its-derivatives]]).

[F14] For open $\Omega$, membership in $L^1_{\mathrm{loc}}(\Omega)$ means
integrability on every compact subset of $\Omega$
([[def-regular-distribution-from-a-locally-integrable-function]]).

[F15] A test function on an open set has compact support in that set, and its
zero extension to $\mathbb R^n$ is smooth with compact support
([[def-test-function-space-d-of-an-open-set]]).

[F16] Composing a smooth one-variable function with $x\mapsto x/\varepsilon$
preserves smoothness; iterating the chain rule gives
$(\beta(\cdot/\varepsilon))^{(m)}(x)=\varepsilon^{-m}\beta^{(m)}(x/\varepsilon)$
([[thm-chain-rule]]).

[F17] Countable Choice asserts that every countably indexed family of
nonempty sets has a choice function ([[def-countable-choice]]).

## Proof

**Proof technique:** direct.

1.1 For every test $\varphi\in C_c^\infty(\Omega)$, the identity $\partial^\alpha T_u=T_h$ expands by [F1] and [F4] to $(-1)^{|\alpha|}\int_\Omega uD^\alpha\varphi\,dx=\int_\Omega h\varphi\,dx$; since the sign squares to one, this is exactly the weak-derivative identity, and conversely that identity gives the distribution equality, proving both directions of the image criterion. [F1, F2, F4, given]

1.2 On $\Omega=(-1,1)$, let $u=\mathbf1_{(0,1)}$; [F6] gives $\lambda((0,1))=1$ and $\lambda(\Omega)=2$, so [F7], [F5], and [F18] give $\int_\Omega|u|^p=1$ for finite $p\ge1$ and essential supremum one, hence $u\in L^p(\Omega)$ for every $1\le p\le\infty$; also $u\in L^1(\Omega)$ by [F7] and [F9], and for every compact $K\subseteq\Omega$, [F8] gives $\int_K|u|\le\int_K1\,dx=\lambda(K)<\infty$, so $u\in L^1_{\mathrm{loc}}(\Omega)$ by [F14]. [F5, F6, F7, F8, F9, F14, F18, given]

1.3 If $\Omega=\varnothing$, [F1] gives only the zero regular distribution and locally integrable class, so the image criterion holds and the weak test identity is vacuous. [F1, F2, given]

2.1 If $h$ and $k$ both represent $\partial^\alpha T_u$, step 1.1 makes both weak $\alpha$-derivatives of $u$, and Countable-Choice uniqueness [F3] gives $h=k$ almost everywhere. [F3, step 1.1, given]

2.2 If $\alpha=0$, then $D^0u=u$ and $\partial^0T_u=T_u$; step 1.1 and the injection [F1] identify every representing class $h$ with $u$ almost everywhere. [F1, step 1.1, given]

2.3 For $\varphi\in C_c^\infty((-1,1))$, its zero extension $\widetilde\varphi$ is smooth and vanishes at $1$ by [F15], so the signed derivative and complex FTC [F4, F12] give $\langle\partial T_u,\varphi\rangle=-\int_0^1\widetilde\varphi'(x)\,dx=\widetilde\varphi(0)-\widetilde\varphi(1)=\varphi(0)=\delta_0(\varphi)$ by [F13]; hence $\partial T_u=\delta_0$. [F4, F12, F13, F15, step 1.2, given]

2.4 If $\delta_0=T_h$ for some $h\in L^1_{\mathrm{loc}}((-1,1))$, choose the bump $\beta$ from [F10] with $r=1/2$ and $R=1$, and set $\varphi_\varepsilon(x)=\beta(x/\varepsilon)$ for $0<\varepsilon<1/2$; iterating the chain rule [F16] and scaling its compact support [F15] make this a test with value one at zero and $0\le\varphi_\varepsilon\le1$, so [F1] and [F13] give $1=|T_h(\varphi_\varepsilon)|\le\int_{[-\varepsilon,\varepsilon]}|h|$. The function $h$ is integrable on $[-1/2,1/2]$ by [F14], while [F6] makes the interval measures tend to zero and absolute continuity [F11] makes the right side tend to zero, a contradiction. Thus $\delta_0$ has no locally integrable representative, and step 1.2's $L^p$ function has no $L^p$ weak derivative. [F1, F6, F10, F11, F13, F14, F15, F16, step 1.2, given]

3.1 If $u=0$, [F1] gives $T_u=0$ and [F4] gives $\partial^\alpha T_u=0=T_0$; step 1.1 makes zero a weak derivative, and step 2.1 makes its class unique. [F1, F4, step 1.1, step 2.1, given]

4.1 Countable Choice is used only by the injection and uniqueness [F1, F3], interval and compact-measure facts [F6, F8], and complex interval FTC [F12]; the test-pairing equivalence and shrinking-test contradiction are direct, and no full Axiom of Choice is used. [F1, F3, F6, F8, F12, F17, given] ∎
