---
id: "prop-a-smooth-map-with-pointwise-operator-norm-at-most-c-is-c-lipschitz-for-riemannian-distance"
kind: "proposition"
title: "A smooth map with pointwise operator norm at most c is c lipschitz for riemannian distance"
deps: ["def-riemannian-distance-on-a-connected-manifold", "def-riemannian-speed-and-length", "lem-any-two-points-in-a-connected-smooth-manifold-can-be-joined-by-a-piecewise-c-one-curve"]
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

Let $M,N$ be connected Riemannian manifolds. If smooth $F:M\to N$ satisfies $|dF_pv|_h\le c|v|_g$ for a finite $c\ge0$ and all $p,v$, then $d_h(Fp,Fq)\le c\,d_g(p,q)$.

## Facts & Assumptions

**Given:** The stated differential bound and two source points.

[F1] [[def-riemannian-distance-on-a-connected-manifold]]: On a connected Riemannian manifold define $d_g(p,q)=\inf\{L_g(\gamma):\gamma\text{ is piecewise }C^1\text{ from }p\text{ to }q\}$. Lengths are those of def-riemannian-speed-and-length. For each pair $p,q$, lem-any-two-points-in-a-connected-smooth-manifold-can-be-joined-by-a-piecewise-c-one-curve supplies a curve, so the set of lengths is nonempty, contains a finite real number and is bounded below by zero. Applying the least-upper-bound property cor-cauchy-reals-lub-complete to the negatives gives a finite nonnegative infimum. On the empty connected manifold this defines the empty distance function; there are no pairs to evaluate. No minimizing curve is part of this definition.

[F2] [[def-riemannian-speed-and-length]]: The **Riemannian speed** on a $C^1$ piece is $|\dot\gamma(t)|_g=\sqrt{g_{\gamma(t)}(\dot\gamma(t),\dot\gamma(t))}$. Its **length** is $L_g(\gamma)=\sum_j\int_{t_{j-1}}^{t_j}|\dot\gamma(t)|_g\,dt$. The curve convention is def-piecewise-c-one-curve-on-a-manifold and the norm is def-pointwise-norm-and-angle-from-a-riemannian-metric. Each integrand is continuous on its closed piece with the one-sided endpoint derivative, hence Riemann integrable and nonnegative. Values chosen at the finitely many corners do not change its integral. For a singleton interval the empty sum is zero; a constant curve also has zero length. Partition independence is established next.

[F3] [[lem-any-two-points-in-a-connected-smooth-manifold-can-be-joined-by-a-piecewise-c-one-curve]]: Any two points in a nonempty connected smooth manifold can be joined by a finite piecewise $C^1$ curve.

## Proof

**Proof technique:** direct.

1.1 Every source competitor $\gamma$ maps to a target competitor $F\gamma$. The chain rule gives $|(F\gamma)\prime|_h=|dF\dot\gamma|_h\le c|\dot\gamma|_g$ on each piece, and integration gives $L_h(F\gamma)\le cL_g(\gamma)$. Hence $d_h(Fp,Fq)\le cL_g(\gamma)$. [F1, F2, F3, given]

2.1 If $c=0$, any such path yields $d_h(Fp,Fq)=0$. If $c>0$, for every $\varepsilon>0$ choose a competitor of length less than $d_g(p,q)+\varepsilon/c$. The preceding bound gives $d_h(Fp,Fq)<c\,d_g(p,q)+\varepsilon$; letting $\varepsilon$ decrease to zero gives the required inequality. Empty source has no point pairs. [F1, step 1.1] ∎

## Source locator

Lee, Chapter 13, pp.337–340, Proposition 13.25, Lemma 13.28 and Theorem 13.29; finite piecewise $C^1$ refinements and pauses are treated explicitly here.
