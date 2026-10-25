---
id: ex-blowup-rational-map-p1
kind: example
title: "Resolving the rational map [x:y] at the origin"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
  - cor-rational-map-to-projective-space-resolved-by-base-ideal-blowup
  - lem-blowup-plane-origin-incidence-equations
  - thm-projective-map-line-bundle-data-equivalence
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ravi Vakil, Foundations of Algebraic Geometry, June 27, 2011 draft (author-hosted 'Early (out-of-date) version of The Rising Sea')"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGjun2711publicnoindex.pdf"
      locator: "19.4.7-19.4.9 resolving rational maps and Exercise 19.4.K, pp. 391-392"
    - title: "Roman Bezrukavnikov et al., MIT 18.725 Algebraic Geometry (Fall 2015) consolidated lecture notes"
      url: "https://ocw.mit.edu/courses/18-725-algebraic-geometry-fall-2015/ec341c7a2524e5dba7c3e939f322613a_MIT18_725F15_notes.pdf"
      locator: "Lecture 9, blowup as closure of the graph of the rational map to P^{n-1}, PDF p. 23"
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "completed-independent-mathematical-review"
    date: 2026-10-03
    scope: "Complete item claim and mathematical body read in delegated Step 5a reader; evidence: research/frontier-38-owner-30-reader-2.md; immutable carrier: research/frontier-38-owner-30-step5-hash-2-post.json; exact saved draft bytes in git d90f26208 match that carrier after exclusion of the later judge stamp. Current content matches the saved carrier except publication status and verification metadata. Source and supplier coverage is limited to the report."
    delegated_by: "owner via tools/autopilot frontier-38-owner-30 reader-2 dispatch"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
---

## Example

Let $k$ be a field and let
$\varphi\colon\mathbb A^2_k\dashrightarrow\mathbb P^1_k$,
$(x,y)\mapsto[x:y]$ on $\mathbb A^2_k\smallsetminus\{0\}$, be the rational map recording the ratio of the
coordinates, whose base ideal is the maximal ideal
$I=(x,y)\subseteq k[x,y]$ of the origin. Blowing up the origin resolves the
indeterminacy: after the blowup the map extends to a morphism
$$f\colon\operatorname{Bl}_0\mathbb A^2_k\longrightarrow\mathbb P^1_k,$$
which on the chart with coordinates $(x,s)$, $y=xs$, sends a point to the
ratio $s$ (that is, to $[x:y]=[1:s]$), on the other chart with coordinates
$(t,y)$, $x=yt$, sends a point to $[x:y]=[t:1]$, and which is the projection
$V(xv-yu)\to\mathbb P^1_k$ of the incidence model
$\operatorname{Bl}_0\mathbb A^2_k=V(xv-yu)\subseteq\mathbb A^2_k\times
\mathbb P^1_k$ ([[lem-blowup-plane-origin-incidence-equations]]). The
exceptional curve $E$ is the fibre of the first projection over the origin,
and the second projection restricts to an isomorphism
$E\xrightarrow{\ \sim\ }\mathbb P^1_k$: over the origin the equation
$xv-yu$ imposes no condition on $[u:v]$, so the fibre is the full projective
line, and every normal direction occurs exactly once.

The mechanism is the general base-ideal statement
([[cor-rational-map-to-projective-space-resolved-by-base-ideal-blowup]]): the
pair consisting of $\mathcal O_{\mathbb A^2}$ and its two coordinate
sections $x,y$ defines $\varphi$ on $\mathbb A^2_k\smallsetminus\{0\}$ through the equivalence between morphisms to
projective space and globally generated line bundles with chosen sections
([[thm-projective-map-line-bundle-data-equivalence]]), and those two sections
generate the base ideal $I=(x,y)$. This is the standard model example of
resolving indeterminacy by blowing up a base ideal, and the resolution is the
graph of the extended map inside $\mathbb A^2_k\times\mathbb P^1_k$.

## Facts & Assumptions

**Given:** A field $k$, the rational map $\varphi\colon\mathbb A^2_k\dashrightarrow\mathbb P^1_k$, $(x,y)\mapsto[x:y]$, the line bundle $\mathcal O_{\mathbb A^2}$ with its two coordinate sections $x,y$, the base ideal $I=(x,y)$, the blowup $\operatorname{Bl}_0\mathbb A^2_k$ and its incidence model. The Axiom of Choice is inherited from the blowup and Proj constructions cited below.

[F1] [[cor-rational-map-to-projective-space-resolved-by-base-ideal-blowup]]: For an integral finite-type $k$-scheme with a nonzero meromorphic tuple in an invertible sheaf, the fractional base-ideal blowup resolves its ratios and is the schematic closure of their graph. For regular sections of $\mathcal O_X$, the base ideal is the ordinary ideal they generate.

[F2] [[lem-blowup-plane-origin-incidence-equations]]: With homogeneous coordinates $(u:v)$, the blowup of the origin is $V(xv-yu)\subseteq\mathbb A^2_k\times\mathbb P^1_k$; its charts are $\operatorname{Spec}k[x,s]$ with $y=xs$ and $E=V(x)$, and $\operatorname{Spec}k[t,y]$ with $x=yt$ and $E=V(y)$, glued by $st=1$; the exceptional curve is isomorphic to $\mathbb P^1_k$.

[F3] [[thm-projective-map-line-bundle-data-equivalence]]: Sending a morphism $\psi\colon X\to\mathbb P^1$ to the pair $(\psi^*\mathcal O(1); \psi^*u,\psi^*v)$ is a bijection between morphisms to $\mathbb P^1$ and isomorphism classes of invertible sheaves with two generating global sections.

## Verification

1.1 The two coordinate functions $x,y$ are global sections of the line bundle $\mathcal O_{\mathbb A^2}$; they generate it over $\mathbb A^2\smallsetminus\{0\}=D(x)\cup D(y)$, and the image of the map $\mathcal O_{\mathbb A^2}^2\to\mathcal O_{\mathbb A^2}$, $(a,b)\mapsto ax+by$, is the ideal $(x,y)$. Hence $\varphi$ is the rational map attached by [F3] to this pair of sections, and its base ideal is $I=(x,y)$, the maximal ideal of the origin. [F3]

2.1 By [F1] applied to $X=\mathbb A^2_k$, $\mathcal L=\mathcal O$ and the sections $x,y$, the blowup $\operatorname{Bl}_I\mathbb A^2_k$ resolves $\varphi$: the induced map is the unique morphism extending $\varphi$, characterized by the pulled-back sections. Since $I=(x,y)$ is the ideal of the origin, $\operatorname{Bl}_I\mathbb A^2_k=\operatorname{Bl}_0\mathbb A^2_k$, which by [F2] is the incidence subscheme $Z=V(xv-yu)\subseteq\mathbb A^2_k\times\mathbb P^1_k$; on the chart with coordinates $(x,s)$, $y=xs$, one has $[x:y]=[1:s]$ and the second projection sends a point to $[1:s]$, while on the chart with coordinates $(t,y)$, $x=yt$, it sends a point to $[t:1]$. Both formulas agree with $(x,y)\mapsto[x:y]$ wherever the latter is defined, so the second projection is the resolved morphism. [F1, F2, step 1.1]

3.1 The exceptional curve of the blowup is $E=\pi^{-1}(0)$, the fibre of the first projection of $Z$ over the origin. Over $0$ the conditions $x=y=0$ become vacuous in the incidence equation, so $E=\{0\}\times\mathbb P^1_k$ and the second projection restricts to an isomorphism $E\to\mathbb P^1_k$; every normal direction occurs exactly once. Therefore the rational map is resolved by the blowup, the extension is the projection of the incidence model, and the exceptional curve maps isomorphically onto $\mathbb P^1_k$. [F2, step 2.1] ∎
