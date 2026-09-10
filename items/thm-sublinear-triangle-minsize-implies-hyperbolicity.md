---
id: "thm-sublinear-triangle-minsize-implies-hyperbolicity"
kind: "theorem"
title: "Sublinear triangle minsize implies hyperbolicity"
status: "draft"
origin: "pipeline"
deps: ["lem-sublinear-minsize-makes-every-cone-geodesic-a-limit-geodesic", "thm-all-asymptotic-cones-are-trees-implies-uniform-slimness", "lem-triangle-extrema-and-real-tree-tripod-rules", "def-axiom-of-choice", "lem-bounded-real-ultralimits-and-free-tail-extension"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  scraped: []
  references:
    - title: "Drutu–Kapovich, Geometric Group Theory — §11.21 Proposition 11.176, reverse implication, PDF pp.448–449"
      url: "https://www.math.ucdavis.edu/~kapovich/EPR/ggt.pdf"
pipeline_run: "phase-2-hg-prerequisite"
proof_strategy: direct
---

## Statement

Assume AC. Every nonempty geodesic space $X$ with $m_X(P)/P\to0$ as $P\to\infty$ has a finite uniform slimness constant. The empty space is separately vacuously $\delta$-slim for every $\delta\ge0$; no minsize profile is assigned to it.

## Facts & Assumptions

**Given:** AC and a nonempty geodesic X with m_X(P)=o(P).

[F1] Every cone is uniquely geodesic and every segment is the limit of any prescribed representative sides. ([[lem-sublinear-minsize-makes-every-cone-geodesic-a-limit-geodesic]]).

[F2] Minsize extrema exist and tripod triangles characterize real trees. ([[lem-triangle-extrema-and-real-tree-tripod-rules]]).

[F3] If all basepoint/ordinary-null-scale cones for a fixed free ultrafilter are trees, X has a uniform slimness bound. ([[thm-all-asymptotic-cones-are-trees-implies-uniform-slimness]]).

[F4] AC is assumed, in particular for the free ultrafilter and representative-side selections used by the cone suppliers. ([[def-axiom-of-choice]]).

[F5] Under AC a free ultrafilter extending the cofinite filter exists. ([[lem-bounded-real-ultralimits-and-free-tail-extension]]).

## Proof

**Proof technique:** direct.

1.1 Fix a free ultrafilter, whose existence under AC follows from [F5], and arbitrary basepoints and positive ordinary-null scales. The resulting cone is geodesic and uniquely geodesic by [F1]. For any triangle in it, choose representatives of its three vertices and original sides; [F1] identifies their limits with the three specified cone sides. [F1, F4, F5]

2.1 These representative triangle perimeters have $\lambda_nP_n$ uniformly bounded. The estimate $\lambda_nm_X(P_n)\le\varepsilon\lambda_nP_n+\lambda_nP_0$, with $P_0$ a threshold for sublinearity, shows their scaled minsize tends to zero. Minimizing triples exist by [F2], are bounded after scaling, and coalesce at a point $p$ lying on all three limit sides. AC supplies the countable family of triples. [step 1.1, F2, F4, given]

3.1 In a uniquely geodesic space, if $p$ lies on all three sides, those sides are unions of the three legs from $p$ to the vertices. Two legs meet only at $p$: a common point $q\ne p$ on the legs to $x,y$ would give $d(x,y)\le d(x,q)+d(q,y)=d(x,p)+d(p,y)-2d(p,q)<d(x,y)$. Thus the triangle is a tripod, with zero legs allowed. Every cone triangle is a tripod, hence the cone is a real tree by [F2]. [step 1.1, step 2.1, F2, algebra]

4.1 The basepoints and scales were arbitrary for the fixed free ultrafilter. Apply [F3] to obtain a finite slimness constant for X. For empty X there are no chosen triangles, so the separate vacuous assertion holds without a profile. [step 3.1, F3] ∎
