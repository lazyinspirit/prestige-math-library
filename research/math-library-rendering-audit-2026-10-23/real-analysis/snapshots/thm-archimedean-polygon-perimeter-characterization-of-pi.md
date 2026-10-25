---
id: thm-archimedean-polygon-perimeter-characterization-of-pi
kind: theorem
title: "Inscribed regular-polygon perimeters increase to 2 pi, while circumscribed perimeters decrease to 2 pi"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-circular-arcs-circumference-and-diameter, thm-circle-circumference-diameter-ratio-is-pi, def-path-polygonal-length-and-rectifiability-in-rn, lem-polygonal-length-is-monotone-under-refinement, def-p-norms-on-rn, def-canonical-natural, def-pi-via-first-positive-cosine-zero, thm-sine-and-cosine-addition-formulas, thm-sine-and-cosine-derivatives, cor-trigonometric-parity-and-pythagorean-identity, cor-sin-x-over-x-limit, cor-archimedean-reciprocal, def-tangent-cotangent-secant-cosecant, thm-tangent-cotangent-secant-cosecant-derivatives-and-periods, def-derivative, thm-algebra-of-derivatives, cor-differentiable-implies-continuous, thm-monotonicity-from-the-derivative, thm-algebra-of-limits, thm-sine-cosine-signs-monotonicity-and-ranges]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "Rutgers Mathematics 373, Workshop 9 Solutions: Pi and the AGM"
      url: "https://sites.math.rutgers.edu/courses/373/373-f03/w9sol.pdf"
    - title: "J. Lebl, Basic Analysis II, section 11.4.3"
      url: "https://www.jirka.org/ra/html/sec_complexexp.html"
pipeline_run: null
---

## Statement

For every natural $n\ge3$, let $I_n$ and $O_n$ be the perimeters of the regular $n$-gons respectively inscribed in and circumscribed about the unit circle. Then

$$I_n=2n\sin(\pi/n),\qquad O_n=2n\tan(\pi/n),$$

$$I_n<2\pi<O_n.$$

The sequence $(I_n)_{n\ge3}$ is strictly increasing, $(O_n)_{n\ge3}$ is strictly decreasing, and both converge to $2\pi$, the circumference of the unit circle.

## Facts & Assumptions
**Given:** A natural $n\ge3$, the regular inscribed and circumscribed $n$-gons of the statement, and the functions $f(x)=\sin x/x$ and $g(x)=\tan x/x$ on $(0,\pi/2)$.

[L1] The addition formulas hold for sine and cosine, and $\sin^2x+\cos^2x=1$ ([[thm-sine-and-cosine-addition-formulas]], [[cor-trigonometric-parity-and-pythagorean-identity]]).

[L2] Sine is strictly increasing on $[-\pi/2,\pi/2]$, and cosine is strictly decreasing on $[0,\pi]$ ([[thm-sine-cosine-signs-monotonicity-and-ranges]]).

[L3] Tangent is $\sin x/\cos x$ and secant is $1/\cos x$ on their natural domains; there $(\tan x)'=\sec^2x$ and $(\sec x)'=\sec x\tan x$ ([[def-tangent-cotangent-secant-cosecant]], [[thm-tangent-cotangent-secant-cosecant-derivatives-and-periods]]).

[L4] $(\sin x)'=\cos x$, $(\cos x)'=-\sin x$, $\sin0=0$, and $\cos0=1$; sums, products, and quotients obey the usual derivative rules on their natural domains ([[thm-sine-and-cosine-derivatives]], [[thm-algebra-of-derivatives]], [[def-derivative]]).

[L5] Differentiability implies continuity. On an interval, a continuous function with positive derivative at every interior point is strictly increasing, and one with negative derivative at every interior point is strictly decreasing ([[cor-differentiable-implies-continuous]], [[thm-monotonicity-from-the-derivative]]).

[L6] $\lim_{x\to0}\sin x/x=1$ ([[cor-sin-x-over-x-limit]]).

[L7] Sums, products, and quotients of convergent real sequences have the corresponding limits when the limiting denominator is nonzero ([[thm-algebra-of-limits]]).

[L8] The length of a path is the supremum of its polygonal lengths, and refinement cannot decrease polygonal length ([[def-path-polygonal-length-and-rectifiability-in-rn]], [[lem-polygonal-length-is-monotone-under-refinement]]).

[L9] The unit-circle circumference is $2\pi$ ([[def-circular-arcs-circumference-and-diameter]], [[thm-circle-circumference-diameter-ratio-is-pi]]).

[L10] The Euclidean norm is induced by the sum of coordinate squares, and natural numbers in real formulas are the canonical naturals of the field ([[def-p-norms-on-rn]], [[def-canonical-natural]]).

[L11] The constant $\pi$ is positive and $\pi/2$ is the least positive zero of cosine ([[def-pi-via-first-positive-cosine-zero]]).

[L12] For every $\varepsilon>0$ there is a natural $N\ge1$ with $1/N<\varepsilon$ ([[cor-archimedean-reciprocal]]).







## Proof

**Proof technique:** direct.

1.1 Since $n\ge3$ and [L11] gives $\pi>0$, one has $0<\pi/n<\pi/2$. By [L2] and [L4], both $\sin(\pi/n)$ and $\cos(\pi/n)$ are positive. Adjacent vertices of the inscribed polygon subtend angle $2\pi/n$; using [L1] and [L10], their squared distance is $2-2\cos(2\pi/n)=4\sin^2(\pi/n)$, so the side length is $2\sin(\pi/n)$ and $I_n=2n\sin(\pi/n)$. [given, L1, L2, L4, L10, L11, algebra]

1.2 By [L12], $\pi/n\to0$ as $n\to\infty$; [L6] gives $f(\pi/n)\to1$. Also $\cos(\pi/n)\to1$ by [L4] and [L5], so $g(\pi/n)=f(\pi/n)/\cos(\pi/n)\to1$ by [L7]. [L4, L5, L6, L7, L12]

1.3 The derivative of $f$ has the sign of $x\cos x-\sin x$. The function $h(x)=\sin x-x\cos x$ has derivative $x\sin x>0$ on $(0,\pi/2)$ by [L2] and [L4], and tends to $0$ at $0$ by [L4]. Hence $h(x)>0$, $f'(x)<0$, and $f$ is strictly decreasing by [L5]. [L2, L4, L5, algebra]

1.4 The derivative of $g$ has the sign of $k(x)=x\sec^2x-\tan x$. From [L2] to [L4], $k'(x)=2x\sec^2x\tan x>0$ on $(0,\pi/2)$. Moreover, [L3], [L4], [L6], and [L7] give $k(x)\to0$ as $x\to0$. Thus $g'(x)>0$, so $g$ is strictly increasing by [L5]. [L2, L3, L4, L5, L6, L7, algebra]

2.1 The two tangent lines at adjacent vertices meet on the angle bisector. The resulting right triangle has adjacent side $1$, opposite side half a polygon side, and angle $\pi/n$; by step 1.1 and [L3] its half-side is $\tan(\pi/n)$, so $O_n=2n\tan(\pi/n)$. [given, step 1.1, L3, algebra]

2.2 The inscribed edges form a polygonal approximation to the once-around circle, so [L8] and [L9] give $I_n\le2\pi$. By [L2] and [L4], $1-\cos x>0$ for $0<x<\pi/2$; hence [L4] and [L5] applied to $x-\sin x$ give $\sin x<x$ there and $I_n<2\pi$. [step 1.1, L2, L4, L5, L8, L9, algebra]

2.3 Since $n\mapsto\pi/n$ is strictly decreasing for $n\ge3$, step 1.3 gives $I_n=2\pi f(\pi/n)<2\pi f(\pi/(n+1))=I_{n+1}$. [step 1.1, step 1.3, algebra]

3.1 The derivative of $\tan x-x$ is $\sec^2x-1=\tan^2x>0$ on $(0,\pi/2)$ by [L2] to [L5]. Thus $\tan x>x$ there, and step 2.1 gives $O_n>2\pi$. [step 2.1, L2, L3, L4, L5, algebra]

3.2 Since $n\mapsto\pi/n$ decreases, step 1.4 gives $O_{n+1}=2\pi g(\pi/(n+1))<2\pi g(\pi/n)=O_n$. [step 2.1, step 1.4, algebra]

4.1 Therefore $I_n=2\pi f(\pi/n)\to2\pi$ and $O_n=2\pi g(\pi/n)\to2\pi$ by [L7]. Together with [L9], the common limit is exactly the unit-circle circumference. [step 1.1, step 2.1, step 1.2, L7, L9] ∎
