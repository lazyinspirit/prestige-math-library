---
id: "fs-the-distance-function-is-smooth-on-all-of-m-times-m"
kind: "false-statement"
title: "The distance function is smooth on all of m times m"
deps: ["def-riemannian-distance-on-a-connected-manifold", "thm-scalar-and-vector-line-integral-estimates", "thm-newton-leibniz-with-interior-derivative"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, second edition"
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

The Riemannian distance function is smooth everywhere on $M\times M$.

## Facts & Assumptions

**Given:** $M=\mathbb R$ with $g=dx^2$.

[F1] [[def-riemannian-distance-on-a-connected-manifold]]: On a connected Riemannian manifold define $d_g(p,q)=\inf\{L_g(\gamma):\gamma\text{ is piecewise }C^1\text{ from }p\text{ to }q\}$. Lengths are those of def-riemannian-speed-and-length. For each pair $p,q$, lem-any-two-points-in-a-connected-smooth-manifold-can-be-joined-by-a-piecewise-c-one-curve supplies a curve, so the set of lengths is nonempty, contains a finite real number and is bounded below by zero. Applying the least-upper-bound property cor-cauchy-reals-lub-complete to the negatives gives a finite nonnegative infimum. On the empty connected manifold this defines the empty distance function; there are no pairs to evaluate. No minimizing curve is part of this definition.

[F3] [[thm-newton-leibniz-with-interior-derivative]]: Let $a<b$. Suppose $G:[a,b]\to\mathbb R$ is continuous on $[a,b]$ and differentiable on $(a,b)$. If $f:[a,b]\to\mathbb R$ is Riemann integrable and $$f(x)=G'(x)\qquad(a<x<b),$$ then $$\int_a^b f=G(b)-G(a).$$ No derivative of $G$ at either endpoint is assumed, and the two endpoint values assigned to the integrable extension $f$ do not enter the conclusion.

## Refutation

**Proof technique:** direct.

1.1 For any piecewise $C^1$ curve $\gamma$ from $x$ to $y$, speed is $|\gamma'|$, and integration and Newton–Leibniz on the pieces give $L(\gamma)=\int|\gamma'|\ge|\int\gamma'|=|y-x|$. The affine path $\gamma(t)=x+t(y-x)$, $0\le t\le1$, has length $|y-x|$. Therefore the infimum defining distance equals $d(x,y)=|y-x|$. [F1, F3, given]

2.1 If $d$ were smooth on $\mathbb R^2$, its restriction along the smooth map $x\mapsto(x,0)$ would be differentiable at zero. That restriction is $|x|$; its difference quotient at zero is $1$ for $x>0$ and $-1$ for $x<0$. The unequal one-sided limits contradict differentiability. [step 1.1] ∎

## Source locator

Lee, p. 338, Euclidean Riemannian distance; the nonsmoothness is the displayed absolute-value difference quotient.
