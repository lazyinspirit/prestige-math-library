---
id: thm-kullback-leibler-is-nonnegative
kind: theorem
title: "Kullback–Leibler divergence is nonnegative"
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 0
deps:
  - cor-integral-logarithm-agrees-with-natural-logarithm
  - cor-second-derivative-characterises-convexity
  - def-axiom-of-choice
  - def-borel-sigma-algebra-on-the-extended-real-line
  - def-integral-logarithm
  - def-kullback-leibler-divergence
  - def-finite-sigma-finite-and-semifinite-measures
  - def-measure-space
  - def-measure-with-density
  - def-positive-and-negative-parts-of-a-function
  - def-probability-measure
  - lem-integral-elementary-bounds
  - lem-of-abs-value
  - prop-order-and-scalar-rules-for-the-nonnegative-integral
  - thm-additivity-over-subintervals
  - thm-algebra-of-derivatives
  - thm-arithmetic-and-lattice-operations-preserve-measurability
  - thm-composition-with-borel-functions-preserves-measurability
  - thm-continuous-implies-integrable
  - thm-integration-against-a-density
  - thm-integral-logarithm-derivative-and-normalisation
  - thm-linearity-of-the-lebesgue-integral-on-l-one
  - thm-jensens-integral-inequality
  - thm-monotonicity-of-the-integral
  - thm-natural-logarithm-laws
  - thm-nonnegative-integral-zero-iff-zero-almost-everywhere
  - thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality
  - thm-threshold-characterisations-of-real-and-extended-real-measurability
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Mario A. T. Figueiredo, Lecture Notes on the EM Algorithm (2004)"
      url: "https://www2.stat.duke.edu/courses/Spring06/sta376/Support/EM/EM.Mixtures.Figueiredo.2004.pdf"
      locator: "§2, equations (7)–(9), PDF pp. 3–5; direction and equality caveats checked locally"
---

## Statement

Assume AC and use the directional convention of
[[def-kullback-leibler-divergence]]. For probability measures $P,Q$ on one
measurable space, $D(P\|Q)\ge0$, and $D(P\|Q)=0$ if and only if $P=Q$.

There is also the following normalized-density identity. Let
$(\mathsf X,\mathcal A,\mu)$ be a sigma-finite measure space: it is a set
with a sigma-algebra and measure ([[def-measure-space]]), and there is a
countable measurable cover by sets of finite $\mu$-measure
([[def-finite-sigma-finite-and-semifinite-measures]]). Let
$\gamma:\mathsf X\to[0,\infty)$ be a finite-valued measurable function with
$Z:=\int\gamma\,d\mu\in(0,\infty)$, and put $\pi=\gamma/Z$. Let
$q:\mathsf X\to[0,\infty)$ be a finite-valued measurable probability density,
so $\int q\,d\mu=1$, and suppose $q=0$ $\mu$-almost everywhere on
$\{\gamma=0\}$. Assume
$$\int q\bigl(|\log\gamma|+|\log q|\bigr)\,d\mu<\infty,$$
where each term with $q=0$ is defined to be zero. Then
$$\log Z =\int q(\log\gamma-\log q)\,d\mu +D(q\,\mu\|\pi\,\mu).$$
In particular, the first integral is at most $\log Z$. This identity concerns
normalized densities only; it does not assert posterior existence for an
unspecified statistical model.

## Facts & Assumptions


**Given:** AC and probability measures $P,Q$; for the normalized-density
clause, a sigma-finite measure space $(\mathsf X,\mathcal A,\mu)$, finite-valued
measurable $\gamma,q\ge0$, $0<Z=\int\gamma\,d\mu<\infty$, $\pi=\gamma/Z$,
$\int q\,d\mu=1$, $q=0$ almost everywhere on $\{\gamma=0\}$, and the
stated absolute-integrability condition.

[A1] [[def-axiom-of-choice]]: AC supplies the Radon–Nikodym representative used by the published KL definition. The marginalization and density computations below use no further choice.

[F1] [[def-kullback-leibler-divergence]]: if $P\not\ll Q$, then
$D(P\|Q)=+\infty$. If $P\ll Q$ and $r=dP/dQ$, then
$D(P\|Q)=\int\log r\,dP=\int r\log r\,dQ$, with $0\log0=0$ and a finite
negative part; the definition sets the logarithm to zero on $\{r=0\}$.

[F2] [[thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality]]:
for finite positive $P\ll Q$, a measurable density $r=dP/dQ$ satisfies
$P(E)=\int_Er\,dQ$ for every measurable $E$.

[F3] [[thm-jensens-integral-inequality]]: on a probability space, if $r$ and
$\varphi(r)$ are integrable and $\varphi$ is convex, then
$\varphi(\int r)\le\int\varphi(r)$.

[F4] [[def-integral-logarithm]] and
[[cor-integral-logarithm-agrees-with-natural-logarithm]]: for $t>0$,
$\log t=\int_1^tdu/u$ and this integral logarithm is the natural logarithm.

[F5] [[thm-integral-logarithm-derivative-and-normalisation]]: for $t>0$,
$(\log t)'=1/t$.

[F6] [[thm-natural-logarithm-laws]]: $\log(1/t)=-\log t$ for $t>0$.

[F7] [[thm-algebra-of-derivatives]]: $(t\log t)'=\log t+1$ for $t>0$.

[F8] [[cor-second-derivative-characterises-convexity]]: a twice
differentiable function on an open interval with nonnegative second
derivative is convex there.

[F9] [[thm-monotonicity-of-the-integral]]: pointwise bounds on integrable
functions on a nondegenerate interval pass to their Riemann integrals.

[F10] [[thm-continuous-implies-integrable]]: a continuous real-valued function
on a compact interval is Riemann integrable.

[F11] [[thm-additivity-over-subintervals]]: for an integrable function and
oriented endpoints in its interval of integrability,
$\int_u^v h+\int_v^w h=\int_u^w h$.

[F12] [[thm-nonnegative-integral-zero-iff-zero-almost-everywhere]]: a
nonnegative measurable function has integral zero exactly when it vanishes
almost everywhere.

[F13] [[def-measure-space]] and
[[def-finite-sigma-finite-and-semifinite-measures]]: a measure space is a set
with a sigma-algebra and measure; sigma-finiteness means there is a countable
measurable cover by sets of finite measure.

[F14] [[def-probability-measure]]: a probability measure has total mass one.

[F15] [[def-measure-with-density]]: for a nonnegative measurable density $f$,
the associated measure is $(f\,d\mu)(E)=\int_Ef\,d\mu$.

[F16] [[thm-integration-against-a-density]]: for nonnegative measurable $g,f$,
$\int g\,d(f\,d\mu)=\int gf\,d\mu$.

[F17] [[prop-order-and-scalar-rules-for-the-nonnegative-integral]]: multiplying a
nonnegative measurable function by a positive finite scalar multiplies its
integral by that scalar.

[F18] [[def-borel-sigma-algebra-on-the-extended-real-line]]: the extended-real
Borel sigma-algebra is generated by rays $(a,+\infty]$ and contains Borel
intervals in $[0,+\infty]$.

[F19] [[thm-threshold-characterisations-of-real-and-extended-real-measurability]]:
an extended-real function is Borel measurable if all strict upper threshold
preimages are Borel.

[F20] [[thm-composition-with-borel-functions-preserves-measurability]]:
composition of a measurable map with a Borel measurable outer map is
measurable.

[F21] [[thm-arithmetic-and-lattice-operations-preserve-measurability]]:
pointwise products of extended-real measurable functions are measurable under
its stated zero-times-infinity convention.

[F22] [[def-positive-and-negative-parts-of-a-function]]: for a measurable
real-valued function $h$, $h=h^+-h^-$ and $|h|=h^++h^-.$

[F23] [[lem-of-abs-value]]: $-|a|\le a\le|a|$ and $|-a|=|a|$ for real $a$. Adding the bounds for $a$ and $b$ gives $-(|a|+|b|)\le a+b\le|a|+|b|$, hence $|a+b|\le|a|+|b|$.

[F24] [[lem-integral-elementary-bounds]]: for a continuous constant function
$c$ on $[a,b]$, $\int_a^b c=c(b-a)$.

[F25] [[thm-linearity-of-the-lebesgue-integral-on-l-one]]: $L^1(Q)$ is a
vector space and the integral is linear on it.

## Proof

1.1 If $P\not\ll Q$, [F1] gives $D(P\|Q)=+\infty$. If $P\ll Q$ but $D(P\|Q)=+\infty$, nonnegativity is immediate. It remains to consider $P\ll Q$ with finite divergence; let $r=dP/dQ$. [F1, given]

1.2 Put $\varphi(0)=0$ and $\varphi(t)=t\log t$ for $t>0$. By [F5] and [F7], $\varphi''(t)=1/t>0$ for $t>0$, so [F8] makes $\varphi$ convex on $(0,\infty)$. Its continuity at zero is part of [F1]; taking limits in the convexity inequality as a positive endpoint tends to zero extends convexity to $[0,\infty)$. [F1, F5, F7, F8, algebra]

1.3 Define $g(t):=t\log t-t+1$ for $t>0$ and $g(0):=1$. For $s>1$, set $c=(1+s)/2$. By [F11], $\log s=\int_1^cdu/u+\int_c^sdu/u$. On $[1,c]$, $1/u\le1$, while on $[c,s]$, $1/u\le1/c<1$; [F9] and [F24] give $\log s<s-1$. For $0<s<1$, set $c=(1+s)/2$. By [F11], $\log s=-\int_s^1du/u=-\left(\int_s^cdu/u+\int_c^1du/u\right)$. On $[s,c]$, $1/u\ge1/c>1$, and on $[c,1]$, $1/u\ge1$; [F9] and [F24] give $\log s<s-1$. The integrands and comparison constants are integrable on these compact intervals by [F10]. Equality holds at $s=1$. Applying this inequality to $s=1/t$ and using [F6] gives $t\log t\ge t-1$, strictly unless $t=1$. Hence $g\ge0$ and its only zero is $1$. [F4, F6, F9, F10, F11, F24, algebra]

1.4 For the normalized-density clause on the measure space [F13], put $P:=q\,\mu$ and $Q:=\pi\,\mu$. By [F17], $\int\pi\,d\mu=Z^{-1}\int\gamma\,d\mu=1$; hence [F15] and [F14] make $P$ and $Q$ probability measures. [F13, F14, F15, F17, given, algebra]

1.5 If $Q(E)=0$, [F15] gives $\int_E\pi\,d\mu=0$, hence $\int_E\gamma\,d\mu=0$ because $Z$ is finite and positive, using [F17]. By [F12], $\gamma=0$ $\mu$-almost everywhere on $E$. The support hypothesis on $q$ then gives $P(E)=0$, so $P\ll Q$. Define $\rho:[0,\infty]\to[0,\infty]$ by $\rho(t)=1/t$ for finite $t>0$ and $\rho(0)=\rho(+\infty)=0$. For $a<0$, $\{\rho>a\}=[0,\infty]$; for $a=0$ it is $(0,\infty)$; and for $a>0$ it is $(0,1/a)$. These are Borel by [F18], so [F19] makes $\rho$ Borel. By [F20]–[F21], $r:=q\,\rho(\pi)$ is measurable and equals $q/\pi$ on $\{\pi>0\}$ and zero on $\{\pi=0\}$. For every measurable $E$, [F16] gives $$\int_E r\,dQ=\int_Er\pi\,d\mu=\int_Eq\,d\mu=P(E),$$ because $q=0$ $\mu$-almost everywhere on $\{\pi=0\}$. Thus $r=dP/dQ$. [F12, F15, F16, F17, F18, F19, F20, F21, given, algebra]

2.1 By [F2] with $E$ equal to the whole space, $\int r\,dQ=P(\Omega)=1$. The negative part of $r\log r$ is finite by [F1], so finiteness of $D(P\|Q)$ also makes its positive part finite. Thus $r$ and $r\log r$ are integrable with respect to the probability measure $Q$. The Radon–Nikodym representative here is the one whose selection is covered by [A1]. [A1, F1, F2, step 1.1]

2.2 On the $P$-full-measure subset of $\{q>0\}$ where $\gamma>0$, we have $\pi=\gamma/Z>0$ and $\ell:=\log r=\log q-\log\gamma+\log Z$. Where $q=0$, the KL logarithm $\ell$ is defined to be zero. By [F23], $q|\ell|\le q|\log q|+q|\log\gamma|+q|\log Z|$ almost everywhere. The right-hand side has finite integral by the hypotheses and $\int q=1$; hence [F16] gives $\int|\ell|\,dP=\int q|\ell|\,d\mu<\infty$. By [F1], [F16], and [F22], applying [F16] to the positive and negative parts of $\ell$ gives $$D(P\|Q)=\int\log r\,dP =\int q(\log q-\log\gamma+\log Z)\,d\mu.$$ Using $\int q\,d\mu=1$ and rearranging proves the identity. [A1, F1, F16, F22, F23, given, step 1.5, algebra]

3.1 Apply [F3] on $(\Omega,\mathcal A,Q)$ to $r$ and $\varphi$. Steps 2.1 and 1.2 check its integrability and convexity hypotheses, and $\int r\,dQ=1$ by step 2.1. Therefore $$0=\varphi(1)=\varphi\!\left(\int r\,dQ\right) \le\int\varphi(r)\,dQ=D(P\|Q).$$ [F1, F3, step 2.1, step 1.2]

3.2 The representative $r$ is finite-valued and measurable by [F1], and $\varphi(r)$ is measurable there; the arithmetic measurability result [F21] therefore makes $g(r)=\varphi(r)-r+1$ measurable. It is nonnegative by step 1.3. By step 2.1, $r,\varphi(r)\in L^1(Q)$, and $1\in L^1(Q)$ because $Q$ is a probability measure. Linearity [F25] now gives $g(r)\in L^1(Q)$ and $$\int g(r)\,dQ=\int\varphi(r)\,dQ-\int r\,dQ+\int1\,dQ=D(P\|Q)-1+1=D(P\|Q).$$ Thus if $D(P\|Q)=0$, [F12] applies to the measurable nonnegative integrand and gives $g(r)=0$ $Q$-almost everywhere. By step 1.3, $r=1$ $Q$-almost everywhere, and the Radon–Nikodym identity [F2] gives $P(E)=Q(E)$ for every measurable $E$. Conversely, if $P=Q$ then $r=1$ almost everywhere and [F1] gives $D(P\|Q)=0$. [A1, F1, F2, F12, F21, F25, step 2.1, step 1.3, algebra]

4.1 Step 2.2 identifies the normalized-density divergence as finite, and step 3.1 proves it is nonnegative. Therefore $\int q(\log\gamma-\log q)\,d\mu\le\log Z$, as claimed. [step 2.2, step 3.1, algebra] ∎
