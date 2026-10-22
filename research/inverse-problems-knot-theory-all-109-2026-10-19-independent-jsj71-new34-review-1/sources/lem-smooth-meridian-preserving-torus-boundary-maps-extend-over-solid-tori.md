---
id: lem-smooth-meridian-preserving-torus-boundary-maps-extend-over-solid-tori
kind: lemma
title: "Smooth meridian-preserving torus maps extend over solid tori"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps: [lem-choice-free-smooth-torus-curves-and-annulus-strips, lem-choice-free-isotopy-extension-for-a-compact-smooth-source, lem-smooth-sphere-diffeomorphisms-extend-over-balls, lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space]
justified_by: []
proof_strategy: direct
axiom_use: "Choice-free. The supplied product solid tori have explicit meridian cuts; finite curve and collar moves and the completely proved smooth sphere-map extension supply the extension."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Allen Hatcher, Notes on Basic 3-Manifold Topology"
      url: "https://pi.math.cornell.edu/~hatcher/3M/3M.pdf"
      locator: "Printed pp.10–13, solid-torus and finite disk arguments; the jointly smooth marked boundary-map extension is supplied here rather than inferred from a topological Alexander extension."
---

## Statement

Let $V_0,V_1$ be parametrized smooth solid tori and let $b:\partial V_0\to\partial V_1$ be a smooth diffeomorphism carrying the unoriented primitive meridian class to the meridian class. Then $b$ extends to a smooth diffeomorphism $V_0\to V_1$. The extension can be a product in the supplied boundary collars on a smaller width. No choice axiom is assumed. The orientation of the extension is the boundary orientation sign of $b$.

## Facts & Assumptions

**Given:** The product solid-torus parameters, meridian-preserving boundary map and boundary collars.

[F1] Equal primitive torus curves have smooth ambient isotopies, and fixed-circle strip coordinate changes are smooth ([[lem-choice-free-smooth-torus-curves-and-annulus-strips]], Statement and full proof).

[F2] Compact-source smooth isotopies extend with compact prescribed support, without choice ([[lem-choice-free-isotopy-extension-for-a-compact-smooth-source]], Statement).

[F3] Smooth sphere boundary maps extend over parametrized balls as products in boundary collars ([[lem-smooth-sphere-diffeomorphisms-extend-over-balls]], Statement).

[F4] Full-rank local coordinate maps have smooth inverses ([[lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space]], Statement).

## Proof

1.1 Work in $D^2\times S^1$ on both sides. The map on meridian classes has a sign $\varepsilon$, and its longitude coefficient modulo the meridian has sign $\eta$, both $\pm1$. The explicit solid-torus map $(z,w)\mapsto(z,w)$ with complex conjugation on $z$ when $\varepsilon=-1$ and on $w$ when $\eta=-1$ changes those two signs as required. Precompose with its inverse, retaining the known extension of this factor. We may therefore suppose $b$ preserves orientation and the oriented meridian. By [F1], postcompose it with a boundary isotopy carrying $b(\partial D^2\times\{1\})$ to $\partial D^2\times\{1\}$. This boundary isotopy extends over the solid torus explicitly in a radial collar by $(x,r)\mapsto(h_{\chi(r)t}(x),r)$, with $\chi=1$ near the boundary and zero near the inner collar edge. Its inverse has $h_{\chi(r)t}^{-1}$ in the same formula. The restriction now induced on that meridian circle has degree one. Interpolating its increasing angular lift to the identity and extending the circle isotopy by [F2] makes the boundary map fix the meridian pointwise. The same radial collar formula again retains an extension of every adjustment. [F1, F2, given, construct]

2.1 Make the adjusted map the identity in a meridian strip. In coordinates $(s,u)$ along and normal to the fixed meridian, its map is $(s+a(s,u),R(s,u))$, with $a(s,0)=R(s,0)=0$ and $R_u(s,0)>0$. Interpolate it to the identity by $(s+t a,(1-t)u+tR)$, using the small periodic lift of $a$. At $u=0$ its derivative is triangular with positive diagonal, so [F4] and compactness give a common narrow strip on which all maps are embeddings. Use [F2] on a compact narrower strip and the inverse isotopy to correct the map to the identity near the meridian. This correction is itself a boundary isotopy, hence extends by step 1.1. Cut each solid torus along its parametrized meridian disk. The result is a parametrized ball with two marked disk faces. The adjusted boundary map on the cut annulus extends by the identity on both disk faces to a smooth sphere map: its meridian strip was fixed, so it matches smoothly across the rounded seams. Apply [F3]. Its product collar form and identity on the two disk faces make the ball map the identity on smaller face-normal collars. Therefore it reglues to a smooth solid-torus diffeomorphism. Undo all boundary isotopy corrections and the explicit sign factor. The resulting boundary map is exactly the original $b$. [F2, F3, F4, step 1.1, construct]

3.1 Finally compare the extension's induced collar with the prescribed source and target collars. In collar coordinates the discrepancy is $(x,r)\mapsto(x+a(x,r),R(x,r))$ with $a(x,0)=0$, $R(x,0)=0$, and $R_r(x,0)>0$. Its interpolation with the identity has block triangular invertible derivative at $r=0$, hence consists of embeddings on a common smaller two-sided strip by [F4] and compact separation. Extend this strip isotopy in the double by [F2]. It fixes the zero torus, so it preserves its two sides and restricts to a correction on the solid torus fixing its boundary pointwise. This gives exact product form in the prescribed smaller collars. Boundary and interior determinant signs agree because this normal collar coordinate is preserved; the initial sign factors account for all orientation possibilities. All constructions use finitely many strips, paths and chart parameters, and every named extension is choice-free. [F2, F4, step 2.1, construct] ∎
