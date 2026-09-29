---
id: lem-pullback-order-of-meromorphic-differentials-under-branched-maps
kind: lemma
title: Pullback order formula for a branched holomorphic map
status: draft
origin: pipeline
pipeline_run: frontier-36-complete
landmark: true
deps:
  - def-holomorphic-and-meromorphic-map-of-riemann-surfaces
  - def-meromorphic-differential-on-a-riemann-surface
  - def-ramification-index-and-branch-value
  - thm-local-normal-form-holomorphic-map-riemann-surfaces
  - def-isolated-singularity-types
  - thm-laurent-expansion-annulus
  - thm-zero-order-factorization-holomorphic-function
  - thm-chain-rule-for-complex-derivatives
  - thm-algebra-of-complex-derivatives
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Eduard Looijenga, Riemann Surfaces (2007)"
      url: https://webspace.science.uu.nl/~looij101/riemannsurfaces.pdf
      locator: "Ch. 4 §2, Theorem 4.4 and its proof, printed p. 43: the order of a pulled-back meromorphic differential at a point equals e times the order at the image plus e−1."
    - title: "Curtis T. McMullen, Riemann Surfaces, Math 213b course notes (2026)"
      url: https://people.math.harvard.edu/~ctm/papers/home/text/class/harvard/213b/course/course.pdf
      locator: "Ch. 3 and Ch. 6, the local computation of the pullback of a meromorphic form under z ↦ z^e; used as an independent cross-check."
---

## Statement

Let $f:X\to Y$ be a nonconstant holomorphic map between Riemann surfaces
([[def-holomorphic-and-meromorphic-map-of-riemann-surfaces]]) and let $\eta$ be a
meromorphic differential on $Y$
([[def-meromorphic-differential-on-a-riemann-surface]]). The **pullback**
$f^\ast\eta$ is the meromorphic differential on $X$ whose expression in charts
$\varphi$ at $x\in X$ and $\psi$ at $f(x)$ is
$$f^\ast\eta=\bigl(h_\eta(w(z))\bigr)\,w'(z)\,dz,$$
where $w=\psi\circ f\circ\varphi^{-1}$ is the chart expression of $f$ and
$h_\eta\,dw$ is the expression of $\eta$ in the chart $\psi$; the family of
expressions is compatible with all chart changes of $X$ and $Y$.

**Lemma.** Let $x\in X$, $y=f(x)$, $e=e_x(f)$ the ramification index
([[def-ramification-index-and-branch-value]]) and let $\eta$ be a nonzero
meromorphic differential near $y$. Then
$$\operatorname{ord}_x(f^\ast\eta)=e\,\operatorname{ord}_y(\eta)+e-1 .$$
In particular $e=1$ reproduces $\operatorname{ord}_x(f^\ast\eta)=\operatorname{ord}_y(\eta)$,
and for the power map $w=z^e$ and $\eta=dw$ the formula gives the order $e-1$
of the ramified pullback. This is the local analytic Riemann–Hurwitz interface;
no global nonzero meromorphic differential and no canonical divisor is assumed
to exist.

## Facts & Assumptions

**Given:** A nonconstant holomorphic map $f:X\to Y$ of Riemann surfaces, points $x\in X$, $y=f(x)$, a nonzero meromorphic differential $\eta$ on a neighbourhood of $y$, and the ramification index $e=e_x(f)$.

[F1] $\operatorname{ord}_p(\omega)$ and $\operatorname{Res}_p(\omega)$ of a nonzero meromorphic differential are defined by the Laurent expansion of any local expression in a centred chart, and are independent of the centred chart; the transition law $h_\psi(w)=h_\varphi(z(w))z'(w)$ holds on overlaps ([[def-meromorphic-differential-on-a-riemann-surface]]).

[F2] In suitable centred charts at $x$ and $y$ the map is the power map $\psi\circ f\circ\varphi^{-1}(z)=z^e$ with the unique positive integer $e=e_x(f)$; a nonzero meromorphic germ at $0$ has a factorization $h(w)=w^k u(w)$ with $k\in\mathbb Z$, $u$ holomorphic near $0$ and $u(0)\ne0$, where $k=\operatorname{ord}_0(h)$ is the order of $h$ at $0$ ([[thm-local-normal-form-holomorphic-map-riemann-surfaces]], [[def-ramification-index-and-branch-value]], [[def-isolated-singularity-types]], [[thm-laurent-expansion-annulus]], [[thm-zero-order-factorization-holomorphic-function]]).

[F3] The chain rule and product rule hold for holomorphic derivatives, and a composition of holomorphic functions on plane domains is holomorphic ([[thm-chain-rule-for-complex-derivatives]], [[thm-algebra-of-complex-derivatives]]).


## Proof

**Proof technique:** direct.

1.1 (Compatibility of the pullback expressions.) Let $z$ and $z'$ be charts on $X$ and $w,w'$ the corresponding expressions of $f$; changing the source chart multiplies $w'(z)$ by the transition derivative, and changing the target chart replaces $h_\eta$ by the transition law of $\eta$ and $w'$ by the chain rule, so the coefficient transforms exactly as the coefficient of a differential on $X$: the two ways of computing $f^\ast\eta$ in overlapping charts agree by [F3] and [F1]. Hence $f^\ast\eta$ is a meromorphic differential on $X$; it is nonzero because on a connected chart domain the product of the coefficient $h_\eta\circ w$ and the derivative $w'$ is not identically zero: $w'$ is not identically zero since the nonconstant holomorphic $w$ has isolated values, $h_\eta\circ w$ is not identically zero since the zeros and poles of the nonzero meromorphic $h_\eta$ are isolated while $w$ is not locally constant, and a product of two functions on a domain, neither identically zero, is not identically zero. [F1, F3, given]

1.2 (Computation in normal-form coordinates.) Choose centred charts as in [F2], so that $w(z)=z^e$; write the expression of $\eta$ in the target chart as $h(w)\,dw$ with $h(w)=w^k u(w)$, $k=\operatorname{ord}_y(\eta)\in\mathbb Z$ and $u$ holomorphic with $u(0)\ne0$. Then $w(z)^k u(w(z))\,w'(z)=z^{ek}u(z^e)\,e z^{e-1}=e\,z^{e(k+1)-1}u(z^e)$, and the coefficient $e\,u(z^e)$ is holomorphic near $0$ with value $e\,u(0)\ne0$; hence the expression of $f^\ast\eta$ in the source chart has order $e(k+1)-1=e\,k+e-1$ at $0$. [F2, F3]

2.1 (Conclusion.) By [F1] the order of $f^\ast\eta$ at $x$ is the order of its expression in any centred source chart, and the order of $\eta$ at $y$ is the exponent of the factorization in [F2]; step 1.2 computes the former as $e\operatorname{ord}_y(\eta)+e-1$ in the normal-form charts, and step 1.1 shows that this is the pullback differential defined by all charts. The special cases $e=1$ and $\eta=dw$ follow by substitution. [step 1.1, step 1.2, F1] ∎


## Remarks

The formula is local: it never chooses a global differential, and the order
$e-1$ is the ramification order of $x$. It is applied in
[[thm-riemann-hurwitz-formula]] as one of the two interfaces of that theorem,
the other being the Euler-characteristic cell count. The same computation shows
that a *coordinate* change, in which $e=1$ at every point, preserves orders,
which is the invariance already recorded in
[[def-meromorphic-differential-on-a-riemann-surface]]; the point here is that a
genuinely ramified map with $e>1$ multiplies the target order by $e$ and
adds $e-1$. Thus a nonzero holomorphic differential of order $k\ge0$ at the
image pulls back to a zero of order $ek+e-1$, which equals $e-1$ exactly when
the target differential is nonvanishing there.
