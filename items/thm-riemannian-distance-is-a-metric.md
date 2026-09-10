---
id: "thm-riemannian-distance-is-a-metric"
kind: "theorem"
title: "Riemannian distance is a metric"
deps: ["def-riemannian-distance-on-a-connected-manifold", "prop-length-is-additive-under-concatenation-and-invariant-under-reversal", "lem-local-comparison-of-a-riemannian-metric-with-the-euclidean-metric", "thm-scalar-and-vector-line-integral-estimates", "thm-newton-leibniz-with-interior-derivative"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, second edition"
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

$d_g$ is a finite metric on a connected Riemannian manifold.

## Facts & Assumptions

**Given:** A connected Riemannian manifold, with its infimum distance.

[F1] [[def-riemannian-distance-on-a-connected-manifold]]: On a connected Riemannian manifold define $d_g(p,q)=\inf\{L_g(\gamma):\gamma\text{ is piecewise }C^1\text{ from }p\text{ to }q\}$. Lengths are those of def-riemannian-speed-and-length. For each pair $p,q$, lem-any-two-points-in-a-connected-smooth-manifold-can-be-joined-by-a-piecewise-c-one-curve supplies a curve, so the set of lengths is nonempty, contains a finite real number and is bounded below by zero. Applying the least-upper-bound property cor-cauchy-reals-lub-complete to the negatives gives a finite nonnegative infimum. On the empty connected manifold this defines the empty distance function; there are no pairs to evaluate. No minimizing curve is part of this definition.

[F2] [[prop-length-is-additive-under-concatenation-and-invariant-under-reversal]]: Length adds under finite concatenation and is unchanged by reversal.

[F3] [[lem-local-comparison-of-a-riemannian-metric-with-the-euclidean-metric]]: For a compact set $K$ contained in one coordinate chart of an $n$-dimensional Riemannian manifold, there are $0<c\le C<\infty$ such that $c|v|^2\le g_x(v,v)\le C|v|^2$ for $x\in K$. The dimension-zero assertion is vacuous.

[F4] [[thm-scalar-and-vector-line-integral-estimates]]: Let $\gamma$ be a piecewise-$C^1$ path of length $L(\gamma)$, let $f$ be a continuous scalar field and $F$ a continuous vector field on its trace, and let $M\geq0$. 1. If $|f(x)|\leq M$ on the trace of $\gamma$, then $$\left|\int_\gamma f\,ds\right|\leq M L(\gamma).$$ 2. If $\lVert F(x)\rVert_2\leq M$ on the trace of $\gamma$, then $$\left|\int_\gamma F\cdot d\mathbf r\right|\leq M L(\gamma).$$

[F5] [[thm-newton-leibniz-with-interior-derivative]]: Let $a<b$. Suppose $G:[a,b]\to\mathbb R$ is continuous on $[a,b]$ and differentiable on $(a,b)$. If $f:[a,b]\to\mathbb R$ is Riemann integrable and $$f(x)=G'(x)\qquad(a<x<b),$$ then $$\int_a^b f=G(b)-G(a).$$ No derivative of $G$ at either endpoint is assumed, and the two endpoint values assigned to the integrable extension $f$ do not enter the conclusion.

## Proof

**Proof technique:** direct.

1.1 Nonnegativity and finiteness follow from the definition. A constant curve gives $d_g(p,p)=0$, and reversal of curves gives symmetry. For any $\varepsilon>0$ choose paths from $p$ to $q$ and from $q$ to $r$ with lengths less than their respective infima plus $\varepsilon$. Concatenation gives $d_g(p,r)<d_g(p,q)+d_g(q,r)+2\varepsilon$; letting $\varepsilon$ decrease to zero gives the triangle inequality. [F1, F2, given]

1.2 For distinct $p,q$, choose a chart about $p$ and a ball $B$ centred at its coordinate image, of radius $r_0>0$, whose closed ball stays inside the chart and excludes $q$. On its compact closure the comparison lemma gives $g(v,v)\ge c|v|^2$, $c>0$. Any curve $\gamma:[a,b]\to M$ from $p$ to $q$ has a first exit time $t_0$ from $B$: the nonempty closed preimage of $M\setminus B$ is compact and has a minimum. Continuity puts $\gamma(t_0)$ on the sphere, and the initial curve remains in the closed ball. [F3, given]

2.1 For that initial coordinate curve $x(t)$, let $e=(x(t_0)-x(a))/r_0$. The vector line integral of the constant unit field $e$ is $e\cdot(x(t_0)-x(a))=r_0$, by Newton–Leibniz applied to each coordinate on every closed smooth piece and telescoping the endpoints. The line-integral estimate bounds this by $\int_a^{t_0}|\dot x|dt$. Therefore $L_g(\gamma)\ge\sqrt c\int_a^{t_0}|\dot x|dt\ge\sqrt c\,r_0$. Taking infima proves $d_g(p,q)>0$. At boundary points replace the ball by its intersection with the half-space; the same first-exit sphere estimate holds. A connected zero-manifold is a point, and the empty manifold has the empty metric. [F1, F4, F5, step 1.2] ∎

## Source locator

Lee, Chapter 13, pp.337–340, Proposition 13.25, Lemma 13.28 and Theorem 13.29; finite piecewise $C^1$ refinements and pauses are treated explicitly here.
