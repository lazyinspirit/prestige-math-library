---
id: ex-cauchy-pompeiu-compact-support
kind: example
title: A compact-support Cauchy–Pompeiu calculation
status: draft
origin: pipeline
deps:
  - thm-cauchy-pompeiu-formula
  - def-axiom-of-choice
  - def-wirtinger-derivatives
  - cor-volume-of-a-radius-r-n-ball
  - thm-volume-recursion-for-closed-euclidean-balls
  - thm-real-gamma-functional-equation
  - thm-jordan-measurable-sets-are-lebesgue-measurable-with-equal-content
  - prop-degenerate-boxes-and-coordinate-hyperplanes-are-lebesgue-null
  - def-polar-surface-measure-on-the-unit-sphere
  - thm-polar-coordinates-formula-for-lebesgue-measure
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Lebl, Tasty Bits of Several Complex Variables, v4.4, Chapter 4 §4.1"
      url: https://www.jirka.org/scv/scv.pdf
      locator: "Theorem 4.1.1 and complete proof, printed pp. 130–131 (PDF pp. 129–130), lines 10628–10751. This supplies the Cauchy–Pompeiu identity; the compactly supported function and integral evaluation below are an explicit application proved here."
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
---

## Example

Assume AC. Define
$$f(z)=\begin{cases}(1-|z|^2)^2,&|z|<1,\\0,&|z|\ge1.\end{cases}$$
Then $f\in C_c^1(\mathbb C)$, its Cauchy boundary term on the unit disc
$D=\{|z|<1\}$ is zero, and at $z=0$ the area term in the Cauchy–Pompeiu
formula equals $f(0)=1$.

## Facts & Assumptions

**Given:** Full AC and the piecewise-defined function $f$ above.

[F1] The Wirtinger derivative is $\partial_{\bar z}f=\tfrac12(\partial_xf+i\,\partial_yf)$ ([[def-wirtinger-derivatives]]).

[F2] Under full AC, for a bounded C¹ plane domain, a C¹ function on its closure, and an interior point $z$, Cauchy–Pompeiu gives the boundary Cauchy integral plus the area term; equivalently the area coefficient is $-1/\pi$ ([[thm-cauchy-pompeiu-formula]]).

[F3] Full AC means every family of nonempty sets has a choice function ([[def-axiom-of-choice]]); in particular it implies countable choice.

[F4] On $S^1$, the polar surface measure is $\sigma(E)=2\lambda_2(\{r\omega:\omega\in E,\ 0<r\le1\})$ for Borel $E\subseteq S^1$ ([[def-polar-surface-measure-on-the-unit-sphere]]).

[F5] The Jordan content of a closed radius-$r$ ball in $\mathbb R^m$ is $V_m(r)=\pi^{m/2}r^m/\Gamma(m/2+1)$ ([[cor-volume-of-a-radius-r-n-ball]]).

[F6] $\Gamma(s+1)=s\Gamma(s)$ for $s>0$ and $\Gamma(1)=1$ ([[thm-real-gamma-functional-equation]]).

[F7] Every closed Euclidean ball is Jordan measurable ([[thm-volume-recursion-for-closed-euclidean-balls]]).

[F8] Under countable choice, a bounded Jordan measurable set has Lebesgue measure equal to its Jordan content ([[thm-jordan-measurable-sets-are-lebesgue-measurable-with-equal-content]]).

[F9] Under countable choice, every coordinate hyperplane in $\mathbb R^m$ is Lebesgue null; in particular $\{0\}\subset\{x=0\}\subset\mathbb R^2$ is null ([[prop-degenerate-boxes-and-coordinate-hyperplanes-are-lebesgue-null]]).

[F10] Under countable choice, polar coordinates integrate nonnegative Borel functions against $r^{m-1}dr\,d\sigma$ ([[thm-polar-coordinates-formula-for-lebesgue-measure]]).

## Proof

**Proof technique:** direct.

1.1 The zero extension is $C^1_c(\mathbb C)$, and its interior $\bar\partial$ derivative is explicit. [F1, given, algebra]
The function $h(t)=(\max\{t,0\})^2$ is $C^1$ on $\mathbb R$, so $f(z)=h(1-|z|^2)$ is $C^1$. It is zero for $|z|\ge1$, hence has support in the compact closed unit disc. On $D$, the Wirtinger formula [F1] gives $\partial_{\bar\zeta}f=-2\zeta(1-|\zeta|^2)$. In particular $f=0$ on $\partial D$ and $f(0)=1$.

1.2 The sphere measure in [F4] has total mass $2\pi$. [F3, F4, F5, F6, F7, F8, F9, algebra]
For the closed unit disc $K\subset\mathbb R^2$, [F5] and [F6] give $\operatorname{cont}(K)=V_2(1)=\pi$, and [F7] makes $K$ Jordan measurable. By [F3], full AC supplies the countable-choice premise of [F8], so $\lambda_2(K)=\pi$. Also [F9] gives $\lambda_2(\{0\})=0$. The set in [F4] for $E=S^1$ is $K\setminus\{0\}$, so its measure is $\pi$ and [F4] yields $\sigma(S^1)=2\pi$.

2.1 Applying Cauchy–Pompeiu at $z=0$ gives the asserted value of the area term. [F2, F3, F10, step 1.1, step 1.2, given, algebra]
The unit disc is a bounded $C^1$ domain, and step 1.1 proves the needed $C^1$ hypothesis for $f$. Full AC [F3] supplies the premise of [F2]. Since $f=0$ on $\partial D$, its boundary term vanishes. For $\zeta\ne0$, step 1.1 gives $(\partial_{\bar\zeta}f)/\zeta=-2(1-|\zeta|^2)$, which extends continuously to $-2$ at $0$. Put $q(x)=\max\{1-|x|^2,0\}$, a nonnegative Borel function on $\mathbb R^2$. By [F10] and the sphere mass from step 1.2,
$$\int_D(1-|\zeta|^2)\,dA(\zeta)=\int_{\mathbb R^2}q\,d\lambda_2=2\pi\int_0^1(1-r^2)r\,dr=\frac\pi2.$$
Thus the area term equals $-\frac1\pi\int_D\frac{\partial_{\bar\zeta}f}{\zeta}\,dA=\frac2\pi\int_D(1-|\zeta|^2)\,dA=1=f(0)$, as claimed.
∎
