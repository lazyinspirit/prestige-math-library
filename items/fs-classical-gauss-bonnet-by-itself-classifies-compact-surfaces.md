---
id: fs-classical-gauss-bonnet-by-itself-classifies-compact-surfaces
kind: false-statement
title: Gauss-Bonnet alone does not classify surfaces
status: draft
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - def-axiom-of-choice
  - thm-global-gauss-bonnet-for-closed-oriented-riemannian-surfaces
  - thm-gauss-bonnet-for-closed-nonorientable-riemannian-surfaces
  - def-klein-bottle
  - def-polygonal-schema-and-edge-pairing
  - def-euler-characteristic-of-a-finite-cw-complex
  - thm-euler-poincare-formula-for-finite-cw-complexes
  - thm-euler-characteristic-computed-by-a-finite-geodesic-triangulation-is-well-defined
  - def-r-orientation-of-a-topological-manifold
  - def-orientation-local-system-and-orientation-cover
  - prop-relative-homology-is-functorial-for-maps-of-pairs
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "John M. Lee, Riemannian Manifolds: An Introduction to Curvature (1997)"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf"
      locator: "Chapter 9, Theorem 9.7 and Problem 9-5, printed pp. 167-172 (PDF pp. 183-188): the curvature identity computes the Euler characteristic only; Lee's Chapter 9 does not classify surfaces."
    - title: "Gallier and Xu, A Guide to the Classification Theorem for Compact Surfaces"
      url: "https://www.cis.upenn.edu/~jean/surfclassif-root.pdf"
      locator: "Chapter 1, Section 1.2, printed pp. 7-13: the torus and Klein bottle one-polygon words and their orientability, the standard witness that Euler characteristic alone does not determine a compact surface."
---

## Statement

Assume the axiom of choice.
False: the Gauss-Bonnet identity $\int_MK\,dA=2\pi\chi(M)$ by itself
classifies compact surfaces, in the sense that two compact surfaces with the
same Euler characteristic must have the same total curvature and be
homeomorphic.

## Facts & Assumptions

**Given:** The claim that the curvature/Euler identity of Gauss-Bonnet determines the homeomorphism type of a compact surface, to be refuted by two comparable surfaces.

[A1] full AC is assumed; it is inherited through the two global Gauss-Bonnet theorems quoted below and is used nowhere else in this finite comparison ([[def-axiom-of-choice]]).

[F1] A polygonal schema is finite disk data with paired sides whose realization carries a finite CW structure with one $0$-cell per vertex class, one $1$-cell per side pair and one $2$-cell per face; the Euler characteristic of a finite CW complex is the alternating sum of its cell counts. In a one-polygon word each pair with opposite exponents is orientation compatible, while each pair with equal exponents is twisted ([[def-polygonal-schema-and-edge-pairing]], [[def-euler-characteristic-of-a-finite-cw-complex]]).

[F2] Let $T$ be the quotient of $Q=[0,1]^2$ by $(x,0)\sim(x,1)$ and $(0,y)\sim(1,y)$. These are the translation side pairings of a square polygonal schema; its boundary word is $a\,b\,a^{-1}b^{-1}$ in the convention of [[def-polygonal-schema-and-edge-pairing]]. Its cell count and orientability are checked below.

[F3] The Klein bottle $K$ is the quotient of $Q$ by $(x,0)\sim(x,1)$ and $(0,y)\sim(1,1-y)$. Its four corners form one vertex class, its two side pairs give two edge classes, and it has one face; it is a compact boundaryless surface. Its one-polygon word is $a\,b\,a^{-1}b$, with an equal-exponent $b$-pair ([[def-klein-bottle]]). Its Euler characteristic and nonorientability are checked below.

[F4] For a closed oriented Riemannian surface $\int_MK\,dA=2\pi\chi(M)$, and for a closed nonorientable Riemannian surface $\int_MK\,\mu_g=2\pi\chi(M)$ with the orientation-free area density ([[thm-global-gauss-bonnet-for-closed-oriented-riemannian-surfaces]], [[thm-gauss-bonnet-for-closed-nonorientable-riemannian-surfaces]]).

[F5] An integral orientation of a topological manifold is a continuous section of its local homology system whose value generates each fiber, and the orientation system is a locally constant system of local homology groups ([[def-r-orientation-of-a-topological-manifold]], [[def-orientation-local-system-and-orientation-cover]]). A homeomorphism and its inverse induce inverse maps on relative homology, compatible with restrictions to smaller coordinate balls ([[prop-relative-homology-is-functorial-for-maps-of-pairs]]). Thus the induced fiberwise isomorphism is a homeomorphism of orientation local systems in their basic ball-section charts and carries integral orientations to integral orientations; homeomorphic surfaces are simultaneously orientable or nonorientable.

[F6] The alternating cell count of a finite CW complex equals the alternating ranks of its singular homology groups ([[thm-euler-poincare-formula-for-finite-cw-complexes]]). The Euler characteristic in the two global Gauss-Bonnet theorems is this same homology invariant, since every supplied curvilinear triangulation gives a finite CW structure ([[thm-euler-characteristic-computed-by-a-finite-geodesic-triangulation-is-well-defined]]).

## Refutation

**Proof technique:** exhibit the translation square quotient and the Klein bottle, verify that their Euler characteristics and hence their Gauss-Bonnet totals agree, and separate them by orientability.

1.1 In $T$, the horizontal pairing identifies $(0,0)$ with $(0,1)$ and $(1,0)$ with $(1,1)$, while the vertical pairing identifies $(0,0)$ with $(1,0)$ and $(0,1)$ with $(1,1)$. Thus all four corners form one vertex class, and their four sectors join in a single cyclic link. Both edge classes have two incident face-sides, so [F1] makes $T$ a compact boundaryless surface with $V=1$, $E=2$, $F=1$. The same counts and surface properties for $K$ are in [F3]. Consequently $\chi(T)=\chi(K)=1-2+1=0$. [F1, F2, F3]

2.1 The seam maps extend across the plane to Euclidean isometries. For $T$ they are translations by $(1,0)$ and $(0,1)$; for $K$ they are $H(x,y)=(x,y+1)$ and $G(x,y)=(x+1,1-y)$. The orbits of each generated group meet $Q$ in exactly its prescribed side-pairing classes. Each action is free: a nonidentity element either changes $x$ by a nonzero integer or is a nonzero power of $H$; it is properly discontinuous since only finitely many integer shifts can meet any compact set. Thus small Euclidean disks give compatible smooth charts, including at the quotient corners, and $dx^2+dy^2$ descends to a smooth flat metric on each quotient. By [F6], the finite CW counts in step 1.1 equal the smooth-surface Euler characteristics in [F4]. Hence [F4] gives total curvature $2\pi\chi(T)=0$ and $2\pi\chi(K)=0$. [F2, F3, F4, F6, step 1.1, construct]

3.1 The standard plane orientation is preserved by both translations defining $T$, so it descends through the charts of step 2.1 to an integral orientation of $T$. The glide reflection $G$ defining $K$ reverses the plane orientation. If $K$ had an integral orientation, its pullback along $\mathbb R^2\to K$ would be a continuous generator of the plane's local homology system. Relative to the standard generator its sign is constant on connected $\mathbb R^2$ by [F5]. Since the pullback comes from $K$, this sign must be invariant under $G$, whereas $G$ changes it, a contradiction. Thus $K$ is nonorientable. By [F5] a homeomorphism preserves orientability, so $T$ and $K$ are not homeomorphic, although step 2.1 gives them the same Gauss-Bonnet total. [F2, F3, F5, step 2.1]

4.1 Hence equal Euler characteristic and equal total curvature do not determine the homeomorphism type: classification of compact surfaces requires additional input beyond the Gauss-Bonnet identity, and the asserted classification by Gauss-Bonnet alone is false. The comparison is finite; full AC entered only through the two global theorems of [F4]. [A1, step 2.1, step 3.1] ∎

## Source locator

Lee, *Riemannian Manifolds: An Introduction to Curvature*, Chapter 9, Theorem 9.7 and Problem 9-5, printed pp. 167-172, proves the curvature/Euler identity and does not classify surfaces; Gallier and Xu, *A Guide to the Classification Theorem for Compact Surfaces*, Chapter 1, Section 1.2, printed pp. 7-13, gives the torus and Klein bottle one-polygon words and their orientability and Euler characteristics. Steps 1.1–3.1 verify the two square quotients directly, including their smooth flat metrics and orientation behavior.
