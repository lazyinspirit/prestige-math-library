---
id: cex-euler-characteristic-alone-does-not-classify-compact-surfaces
kind: counterexample
title: "Equal Euler characteristic without homeomorphism"
status: published
origin: pipeline
deps: [def-klein-bottle, def-orientation-local-system-and-orientation-cover, def-polygonal-schema-and-edge-pairing, def-r-orientation-of-a-topological-manifold, ex-klein-bottle-polygonal-schema, ex-torus-polygonal-schema, prop-relative-homology-is-functorial-for-maps-of-pairs]
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Gallier and Xu, A Guide to the Classification Theorem for Compact Surfaces"
      url: "https://www.cis.upenn.edu/~jean/surfclassif-root.pdf"
      locator: "Chapter 6 Section 6.2 and Theorem 6.2, printed pp.89-96"
    - title: "Richard Koch, Classification of Surfaces (University of Oregon course notes, 2005)"
      url: "https://pages.uoregon.edu/koch/math431/Surfaces.pdf"
      locator: "Section 3, Theorems 2 and 4, printed pp.3-6"
pipeline_run: frontier-36-complete
verification:
  precheck: pass
  audited: 2026-09-30
---

## Statement

The torus $T^2$ and the Klein bottle $K$ are nonempty compact connected boundaryless surfaces with equal Euler characteristic $0$ but are not homeomorphic: the torus is orientable and the Klein bottle is nonorientable. Thus Euler characteristic alone does not determine the homeomorphism class of a compact connected surface. No choice axiom is used.

## Facts & Assumptions

**Given:** The two one-polygon schemas of [L1] and [L2], their realizations, and an integral orientation of the torus.

[L1] The square schema with boundary word $a\,b\,a^{-1}b^{-1}$ realizes the torus $T^2=(\mathbb R/\mathbb Z)^2$, is a connected surface schema, is orientable, and has $\chi(T^2)=1-2+1=0$; a connected surface schema has nonempty compact connected boundaryless realization ([[ex-torus-polygonal-schema]], [[def-polygonal-schema-and-edge-pairing]]).

[L2] The square schema with boundary word $a\,a\,b\,b$ realizes the Klein bottle $K$ of [[def-klein-bottle]], is a connected surface schema, is nonorientable, and has $\chi(K)=1-2+1=0$ ([[ex-klein-bottle-polygonal-schema]]).

[L3] An integral orientation of a boundaryless $n$-manifold is a continuous section of the orientation local system whose value generates the fiber $H_n(M,M\setminus\{x\};\mathbb Z)$ at every point; each fiber is infinite cyclic, the sections $s_{K,c}(y)=r_{Ky}(c)$ over the interior of a closed coordinate ball $K$ are basic open sheets, and every point has a neighborhood on which an orientation is induced by a single generator in one such ball group ([[def-orientation-local-system-and-orientation-cover]], [[def-r-orientation-of-a-topological-manifold]]).

[L4] A continuous map of pairs induces a map of relative homology groups in every degree, identities induce identities and composites induce composites; hence a homeomorphism of pairs induces an isomorphism in every degree, with inverse the isomorphism induced by the inverse homeomorphism ([[prop-relative-homology-is-functorial-for-maps-of-pairs]]).

## Proof

**Given:** The torus schema, the Klein bottle schema and an integral orientation of $T^2$.

1.1 The torus: by [L1] the quotient of the square by the pairings of the word $a\,b\,a^{-1}b^{-1}$ is homeomorphic to $T^2=(\mathbb R/\mathbb Z)^2$ and is a connected surface schema, so $T^2$ is a nonempty compact connected boundaryless surface, it is orientable, and its Euler characteristic is $\chi(T^2)=0$. [L1]

1.2 The Klein bottle: by [L2] the quotient of the square by the pairings of the word $a\,a\,b\,b$ is the Klein bottle $K$ and is a connected surface schema, so $K$ is a nonempty compact connected boundaryless surface, it is nonorientable, and $\chi(K)=0$. [L2]

1.3 Orientability is a homeomorphism invariant. Let $h:M\to N$ be a homeomorphism of boundaryless $n$-manifolds and let $\nu$ be an integral orientation of $N$. For $x\in M$ the map $h$ is a homeomorphism of pairs $(M,M\setminus\{x\})\to(N,N\setminus\{h(x)\})$, so by [L4] it induces an isomorphism $h_{*x}:H_n(M,M\setminus\{x\};\mathbb Z)\to H_n(N,N\setminus\{h(x)\};\mathbb Z)$, and $\mu_x:=h_{*x}^{-1}(\nu_{h(x)})$ generates the infinite cyclic fiber at $x$ because $\nu_{h(x)}$ generates its fiber and an isomorphism carries generators to generators. For continuity let $x\in M$: by [L3] there are a closed coordinate ball $K$ around $h(x)$ in $N$ and a generator $c$ of $G_K=H_n(N,N\setminus K;\mathbb Z)$ with $\nu=\pm\,s_{K,c}$ on $\operatorname{int}K$; applying [L4] to the homeomorphism of pairs $(M,M\setminus h^{-1}(K))\to(N,N\setminus K)$ and then to $(M,M\setminus\{y\})\to(N,N\setminus\{h(y)\})$ for $y\in\operatorname{int}h^{-1}(K)$ gives $r_{K,h(y)}(c)=h_{*y}(r_{h^{-1}(K),y}(h_{*K}^{-1}(c)))$, so on the ball interior $h^{-1}(K)$ the section $\mu$ equals $\pm\,s_{h^{-1}(K),h_{*K}^{-1}(c)}$, which is a basic generator section and hence continuous. Thus $\mu$ is an integral orientation of $M$, and a homeomorphism transports orientability from its target to its source. [L3, L4]

2.1 Conclusion. If there were a homeomorphism $h:T^2\to K$, then applying step 1.3 to $h^{-1}:K\to T^2$ and an integral orientation of $T^2$, which exists by [L1], would produce an integral orientation of $K$, contradicting that $K$ is nonorientable by [L2]. Hence $T^2$ and $K$ are not homeomorphic, while both are nonempty compact connected boundaryless surfaces with $\chi=0$ by [L1] and [L2]. Therefore equal Euler characteristic does not determine the homeomorphism class of a compact connected surface. Only the two explicit schema computations, the given orientation data and the functoriality of relative homology are used, so no choice principle is used. [L1, L2, step 1.3] ∎

## Remarks

The two surfaces are the standard witness that Euler characteristic alone is insufficient: the orientability class distinguishes them, and the later classification theorem proves that orientability together with the Euler characteristic does determine a compact connected surface. The counterexample deliberately avoids the classification theorem, in the same way that [[ex-projective-plane-polygonal-schema]] avoids it for the projective plane.
