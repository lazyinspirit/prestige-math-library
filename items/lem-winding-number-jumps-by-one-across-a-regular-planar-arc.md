---
id: lem-winding-number-jumps-by-one-across-a-regular-planar-arc
kind: lemma
title: "The winding number jumps by one across a regular planar arc"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-winding-number-closed-complex-contour, thm-winding-number-is-integer, prop-linearity-of-complex-line-integrals, cor-ml-estimate-for-complex-line-integrals, thm-line-integrals-under-oriented-reparametrization, thm-principal-inverse-tangent-calculus, cor-mean-value-theorem, cor-intermediate-value-theorem-topological, thm-heine-borel-rn]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
dependency_level: 0
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "L. V. Ahlfors, Complex Analysis, 3rd ed., Ch. 4 §2.1 and §4.2 (the index and its behaviour under rotation of the point)"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
      locator: "Ch. 4 §2.1-2.3 and §4.2 (the argument principle); the one-step jump across a regular arc is the local computation of the index along a nearly straight crossing"
    - title: "J. Lebl, Complex Analysis (open text), Ch. 4 §4.1 (the index of a closed curve)"
      url: "https://www.jirka.org/ca/ca.pdf"
      locator: "§4.1, printed pp. 179-184"
---

## Statement

Let $\Gamma$ be an oriented closed piecewise-$C^1$ contour. Suppose that near $0$ it
contains exactly one regular $C^1$ arc, traversed once with positive real tangent, and
that the remaining contour is a compact set disjoint from $0$. Then for all sufficiently
small $\varepsilon>0$, the points $i\varepsilon$ and $-i\varepsilon$ avoid $\Gamma$ and
$n(\Gamma,i\varepsilon)-n(\Gamma,-i\varepsilon)=1$.

## Facts & Assumptions
**Given:** An oriented closed piecewise-$C^1$ contour $\Gamma$ that near $0$ contains exactly one regular $C^1$ arc, traversed once with positive real tangent, the remaining part of the contour being compact and disjoint from $0$.

[F1] For a closed complex contour $\gamma$ and a point $p$ off its trace, $n(\gamma,p)=\frac{1}{2\pi i}\int_\gamma\frac{dz}{z-p}$. ([[def-winding-number-closed-complex-contour]]).

[F2] For continuous $f,g$ on the trace of a rectifiable contour $\gamma$ and $\alpha,\beta\in\mathbb C$, $\int_\gamma(\alpha f+\beta g)\,dz=\alpha\int_\gamma f\,dz+\beta\int_\gamma g\,dz$. ([[prop-linearity-of-complex-line-integrals]]).

[F3] Complex line integrals over piecewise-$C^1$ paths are unchanged by an orientation-preserving piecewise-$C^1$ reparametrization. ([[thm-line-integrals-under-oriented-reparametrization]]).

[F4] If $|f(z)|\le M$ on the trace of a rectifiable contour $\gamma$ with $M\ge0$, then $\left|\int_\gamma f(z)\,dz\right|\le M L(\gamma)$. ([[cor-ml-estimate-for-complex-line-integrals]]).

[F5] For a closed complex contour $\gamma$ and a point $p$ off its trace, $n(\gamma,p)\in\mathbb Z$. ([[thm-winding-number-is-integer]]).

[F6] For real $a<b$, a real-valued function continuous on $[a,b]$ and differentiable on $(a,b)$ satisfies $f(b)-f(a)=f'(c)(b-a)$ for some $c\in(a,b)$. ([[cor-mean-value-theorem]]).

[F7] A continuous real function on a connected space has order-convex image and attains every intermediate value. ([[cor-intermediate-value-theorem-topological]]).

[F8] For every real $x$, $\frac{d}{dx}\arctan x=\frac{1}{1+x^2}$. ([[thm-principal-inverse-tangent-calculus]]).



## Proof

**Proof technique:** direct.

1.1 Write the regular arc near $0$ as $z(t)=x(t)+iy(t)$ on a parameter interval $[-\delta,\delta]$, with $t=0$ corresponding to $0$, so $x(0)=y(0)=0$ and after an orientation-preserving affine change of parameter the positive real tangent gives $x'(0)=1$, $y'(0)=0$. [given]

2.1 Shrink $\delta$ so that $x'\ge1/2$ on the interval; then [F6] makes the real part strictly increasing, [F7] shows its image contains a symmetric interval $[-a,a]$ about zero; restrict the arc to the preimage of this interval, and the inverse $x\mapsto t(x)$ is $C^1$ with derivative $1/x'(t(x))$ by the difference quotient and the positive lower bound; hence the arc is a graph $z(x)=x+if(x)$ for $|x|\le a$ with $f(0)=f'(0)=0$, and after shrinking $a$ further one has $|z'(x)|\le2$ and $|f(x)|\le\eta|x|$ for a fixed $0<\eta<1/2$. [F6, F7, step 1.1]

2.2 The parameter pieces outside the local arc form a compact set disjoint from $0$; for each parameter $t$ in it continuity of the contour gives a relative interval on which $|z|$ exceeds half its positive value at $t$, the family of all these intervals covers the compact parameter set, so finitely many cover it, and the minimum of the finitely many positive half-values is a number $d>0$ with $|z|\ge d$ on the remainder. [F4, step 1.1]

3.1 If $\varepsilon<d/2$ then $|z|\ge d>\varepsilon$ on the remainder, so $i\varepsilon$ and $-i\varepsilon$ avoid the remainder, and they avoid the arc because its real coordinate vanishes only at $x=0$, where $z(0)=0$; hence both points lie off the trace of $\Gamma$. [step 2.1, step 2.2]

4.1 By the winding definition, linearity and orientation-preserving reparametrization, $n(\Gamma,i\varepsilon)-n(\Gamma,-i\varepsilon)=\frac{1}{2\pi i}\int_\Gamma\frac{2i\varepsilon}{z^2+\varepsilon^2}\,dz$, the integrand being continuous on the trace of $\Gamma$ for these values of $\varepsilon$. [F1, F2, F3, step 3.1]

5.1 On the remainder $|z^2+\varepsilon^2|=|z-i\varepsilon||z+i\varepsilon|\ge d^2/4$, so the ML estimate bounds the contribution of the remainder to the integral of step 4.1 by a constant times $\varepsilon$. [F4, step 4.1]

5.2 On the local graph one has $|z(x)-i\varepsilon||z(x)+i\varepsilon|\ge c(x^2+\varepsilon^2)$ for a constant $c>0$: for $|x|\ge\varepsilon$ each factor is at least $|x|$, while for $|x|<\varepsilon$ the bound $|f(x)|\le\eta|x|<\varepsilon/2$ gives $|z(x)\pm i\varepsilon|\ge\varepsilon/2$; substituting $x=\varepsilon u$ turns the local contribution into $\int_{-a/\varepsilon}^{a/\varepsilon}\frac{2iz'(\varepsilon u)}{(z(\varepsilon u)/\varepsilon)^2+1}\,du$, whose integrand converges uniformly on bounded $u$-intervals to $\frac{2i}{1+u^2}$ and is dominated by $C/(1+u^2)$, so the tails are uniformly of order $1/R$ outside $[-R,R]$ and the integral tends to $\int_{\mathbb R}\frac{2i\,du}{1+u^2}=4i\lim_{R\to\infty}\arctan R=2\pi i$ by [F8]; hence the index difference tends to $1$. [F4, F8, step 4.1]

6.1 Each winding number is an integer by [F5], so the difference $n(\Gamma,i\varepsilon)-n(\Gamma,-i\varepsilon)$ is an integer for every sufficiently small $\varepsilon>0$; since it tends to $1$ by steps 5.1 and 5.2, it equals $1$ for all sufficiently small $\varepsilon$. [F5, step 5.1, step 5.2] ∎
