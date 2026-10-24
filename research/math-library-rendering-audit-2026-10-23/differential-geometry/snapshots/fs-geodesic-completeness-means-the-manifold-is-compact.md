---
id: "fs-geodesic-completeness-means-the-manifold-is-compact"
kind: "false-statement"
title: "Geodesic completeness means compactness"
status: published
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["def-countable-choice", "prop-open-subsets-of-euclidean-space-have-the-standard-smooth-structure", "def-riemannian-metric-and-riemannian-manifold", "cor-rn-is-polygonally-connected-and-locally-path-connected", "def-riemannian-speed-and-length", "def-riemannian-distance-on-a-connected-manifold", "thm-gradient-theorem-for-line-integrals", "thm-scalar-and-vector-line-integral-estimates", "thm-euclidean-space-complete", "thm-hopf-rinow", "thm-heine-borel-rn"]
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Ben Andrews, Geodesics and Completeness, Theorem 11.5.1 and proof, printed pp. 106--108
      url: https://maths-people.anu.edu.au/andrews/DG/DG_chap11.pdf
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
proof_strategy: "direct"
---

## Statement

**False claim:** every geodesically complete Riemannian manifold is compact.
Thus any stronger reading of “geodesic completeness means compactness” as an
equivalence is false as well.

Assume $\mathrm{AC}_\omega$ for the current library interfaces used below. The
counterexample is the Euclidean line: it is a nonempty connected boundaryless
geodesically complete Riemannian manifold, but it is unbounded and noncompact.

## Facts & Assumptions

**Given:** $M=\mathbb R$ with its standard smooth structure and Riemannian metric $g=dx^2$.

[A1] [[def-countable-choice]] is the assumed $\mathrm{AC}_\omega$.

[F1] [[prop-open-subsets-of-euclidean-space-have-the-standard-smooth-structure]] makes $\mathbb R$ a smooth boundaryless $1$-manifold; [[def-riemannian-metric-and-riemannian-manifold]] makes the constant positive tensor $dx^2$ a Riemannian metric; and [[cor-rn-is-polygonally-connected-and-locally-path-connected]] makes $\mathbb R$ connected directly from its line-segment paths.

[F2] [[def-riemannian-speed-and-length]] defines the length of a piecewise- $C^1$ curve, and [[def-riemannian-distance-on-a-connected-manifold]] defines $d_g$ as the infimum of such lengths. The endpoint formula in [[thm-gradient-theorem-for-line-integrals]] and the constant-unit-field bound in [[thm-scalar-and-vector-line-integral-estimates]] compare Euclidean chord length with curve length.

[F3] [[thm-euclidean-space-complete]] says that the real line with its usual metric $d_{\mathbb R}(x,y)=|x-y|$ is complete.

[F4] Under [A1], [[thm-hopf-rinow]] makes metric completeness equivalent to geodesic completeness for a nonempty connected boundaryless Riemannian manifold, and says equivalently that every closed bounded subset is compact.

[F5] [[thm-heine-borel-rn]] says, without a choice principle, that a subset of the real line is compact exactly when it is closed and bounded.

## Refutation

**Proof technique:** direct.

1.1 The identity chart and the constant coefficient $g_{11}=1$ make $(M,g)$ a nonempty smooth boundaryless Riemannian $1$-manifold by [F1]. Since $\mathbb R$ is convex, [F1] also makes it connected. [F1, given, algebra]

1.2 Fix $x,y\in\mathbb R$. If $x=y$, the constant curve has length zero. If $x\ne y$, let $u=(y-x)/|y-x|\in\{-1,1\}$. For any piecewise-$C^1$ curve $\sigma$ from $x$ to $y$, the constant unit field $u$ is the gradient of $s\mapsto us$, so [F2] evaluates its line integral as $u(y-x)=|y-x|$ and bounds this by the Euclidean length of $\sigma$, which equals its $g$-length because $g=dx^2$. Conversely the segment $c(t)=(1-t)x+ty$ on $[0,1]$ has constant speed $|y-x|$ and length $|y-x|$. Taking the infimum in [F2] therefore gives $d_g(x,y)=|x-y|$ in both cases. [F2, given, algebra]

2.1 By step 1.2, the Riemannian metric space $(M,d_g)$ is exactly the usual metric real line, so [F3] makes it complete. The hypotheses checked in step 1.1 let [F4] apply under [A1], and metric completeness then makes $(M,g)$ geodesically complete. In particular every maximal geodesic, including the constant one, has domain all of $\mathbb R$. [A1, F3, F4, step 1.1, step 1.2]

3.1 The whole space $M$ is closed in itself but is not bounded: for any centre $a\in\mathbb R$ and radius $r>0$, the point $a+r+1$ has $d_g(a,a+r+1)=r+1>r$ by step 1.2. Hence [F5] says that $M$ is not compact. Together with step 2.1, this is the required geodesically complete noncompact counterexample. [F5, step 1.2, step 2.1, algebra]

4.1 The exact failed inference is now visible in [F4]: completeness makes every closed **bounded** subset compact, but the whole Euclidean line is not bounded, so that clause cannot be applied to $M$ itself. Andrews proves the completeness equivalences and the minimizing-geodesic conclusion in the cited Hopf--Rinow theorem, printed pp. 106--108; it does not assert compactness of the whole manifold and does not supply this Euclidean-line counterexample. [F4, step 3.1]

5.1 The empty manifold is compact and supplies no noncompact witness; a connected nonempty zero-manifold is a compact singleton. The Euclidean-line witness is genuinely one-dimensional, nonempty and boundaryless. Its distance calculation includes $x=y$, its unboundedness uses positive radii, and the completeness conclusion covers zero-velocity as well as nonconstant geodesics with full parameter domain $\mathbb R$, so there is no finite endpoint or degenerate-interval omission. Every displayed witness is explicit. The direct distance calculation [F2], Euclidean completeness [F3], Heine--Borel [F5] and the unboundedness calculation are choice-free. Assumption [A1] is used only when invoking the current Hopf--Rinow interface [F4] to pass from metric to geodesic completeness; no full choice axiom is used. The proof refutes the forward implication; no converse is asserted here. [A1, F2, F3, F4, F5, step 1.2, step 2.1, step 3.1] ∎
