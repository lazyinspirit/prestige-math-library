---
page: properties-of-the-integral-and-the-working-ftc-examples
title: "Properties of the Integral and the Working FTC: Examples and Counterexamples"
status: draft
items: []
examples: [ex-polynomial-integrals-by-the-ftc, ex-additivity-on-a-step-function,
           ex-integral-test-applied-to-the-p-series,
           ex-two-root-x-and-its-unbounded-derivative,
           cex-an-integrable-function-with-no-primitive,
           cex-a-function-with-a-primitive-that-is-not-integrable,
           cex-a-composition-of-integrable-functions-that-is-not-integrable,
           cex-absolute-value-integrable-without-the-function,
           cex-spikes-with-integral-one-converging-pointwise-to-zero,
           cex-the-first-mean-value-theorem-needs-a-one-signed-weight,
           fs-integration-by-parts-needs-no-integrability-hypothesis,
           fs-substitution-holds-for-every-integrable-integrand,
           fs-the-integral-function-is-always-a-primitive]
---

**Objective.** Compute with the machinery of *Properties of the Integral and the
Working FTC*, and then separate the notions it keeps adjacent: having a
primitive, being integrable, and being the derivative of the integral function.
The pedagogical core is the matched pair
[[cex-an-integrable-function-with-no-primitive]] and
[[cex-a-function-with-a-primitive-that-is-not-integrable]] — neither property
implies the other, and the corollary
[[cor-primitives-of-a-continuous-function]] is exactly their intersection.

**Computations.** [[ex-polynomial-integrals-by-the-ftc]] evaluates
$\int_0^1 x^{m} = 1/\iota(m+1)$ for every natural $m$ from the primitive
$x^{m+1}/\iota(m+1)$, noting that the exponent $m+1$ is $\ge 1$ for every $m$ so
that the published power rule applies with no case split at $m = 0$; the answer
is checked at $m=0$ against the integral of a constant and, for general $m$,
against the pointwise inequality $x^{m+1}\le x^{m}$.
[[ex-additivity-on-a-step-function]] integrates a two-step function twice, once
by splitting at the jump and once from Darboux sums on a three-point partition,
and is the simplest case in which the jump sits at a partition point, which is
the case the changing-at-finitely-many-points lemma has to handle separately.
[[ex-integral-test-applied-to-the-p-series]] runs
[[thm-integral-test-for-series]] **backwards**: the published $p$-series theorem
settles the series for every rational $p>0$, and the test transfers the verdict
to the sequence $\bigl(\int_0^N (t+1)^{-p}\bigr)_N$ without computing any
primitive — which matters, because at $p=1$ the primitive is the logarithm and
this library has not built it. The case $p=2$ is then computed directly as a
cross-check.

**The two functions everything turns on.**
[[ex-two-root-x-and-its-unbounded-derivative]] works out $H(x)=2\sqrt{x}$ on
$[0,1]$: continuous everywhere, differentiable on $(0,1]$ with
$H'(x)=1/\sqrt{x}$, not differentiable at $0$, and with $H'$ unbounded — so no
extension of $H'$ to $[0,1]$ has Darboux sums at all. The improper integral that
repairs it belongs to a later page and is not computed here.
[[cex-a-function-with-a-primitive-that-is-not-integrable]] builds an
**everywhere differentiable** $G$ on $[0,1]$ with $G'$ unbounded, from bumps
$c_n\phi((x-\alpha_n)/h_n)$ with $\phi(t)=t^{2}(1-t)^{2}$ placed on disjoint
intervals accumulating only at $0$. The construction is entirely polynomial,
because the classical witness $x^{2}\sin(1/x^{2})$ needs trigonometric functions
this library does not yet have; only one bump is active near any point of
$(0,1]$, so no series is summed anywhere, and the two estimates the construction
rests on — $G(x)/x \to 0$ and $c_n/h_n \to \infty$ — are verified with the chosen
exponents.

**The matched pair, and what it says about the fundamental theorem.**
[[cex-an-integrable-function-with-no-primitive]] shows the sign function is
integrable on $[-1,1]$ with integral $0$ and has no primitive, refuted
elementarily through [[cor-zero-derivative-implies-constant]] and the two
one-sided difference quotients at $0$ — not through Darboux's theorem on the
intermediate value property of derivatives, which this library does not have:
the page planned to prove it is not built.
[[fs-the-integral-function-is-always-a-primitive]] then refutes the converse
expectation in **two** independent ways: for the sign function
$F(x)=|x|-1$ is not differentiable at $0$, and for an integrable function
differing from a continuous one at a single point $F'$ exists and simply computes
a different number.

**Where integrability fails to be preserved.**
[[cex-a-composition-of-integrable-functions-that-is-not-integrable]] takes
Thomae's function inside and the indicator of $(0,1]$ outside, giving the
Dirichlet function as the composite; it names the hypothesis of
[[thm-composition-with-a-continuous-function]] that fails, namely continuity of
the **outer** function, so the two items are consistent about which way round the
hypothesis goes. [[cex-absolute-value-integrable-without-the-function]] refutes
the converse of the modulus clause, with both Darboux integrals located exactly.
[[cex-the-first-mean-value-theorem-needs-a-one-signed-weight]] locates the
hypothesis $g \ge 0$ with $f(t)=g(t)=t$ on $[-1,1]$.

**Two false statements about the computational rules.**
[[fs-integration-by-parts-needs-no-integrability-hypothesis]] deletes the
integrability of $u'$ and $v'$; with $u = G$ and $v(x)=x$ the left-hand side
exists and the right-hand side does not, so the falsity is **undefinedness**
rather than a wrong number.
[[fs-substitution-holds-for-every-integrable-integrand]] weakens the continuity
of $f$ in [[thm-substitution]] to integrability. The witness is built on the
Smith-Volterra-Cantor set $S$: with $\varphi(x)=\int_0^x \operatorname{dist}(u,S)\,
\mathrm{d}u$, which is differentiable with continuous derivative and strictly
increasing, $\varphi$ crushes $S$ onto a null set, so the indicator of
$\varphi[S]$ is integrable while its composite with $\varphi$ is the indicator of
$S$ and is not. That item is explicit that it refutes the integrability of the
composite and **not** the substitution identity itself, for which no pair with
both sides defined and unequal is exhibited.

**One limit theorem is refuted and none is asserted.**
[[cex-spikes-with-integral-one-converging-pointwise-to-zero]] gives continuous
tents $f_n \to 0$ pointwise on $[0,1]$ with $\int_0^1 f_n = 1$ for every $n$. It
refutes the interchange of a limit with an integral under pointwise convergence,
and it says nothing about uniformly bounded sequences: no theorem in that
direction is stated on the A page, and none is contradicted here.

**Thirteen items**: four examples, six counterexamples and three false
statements.
