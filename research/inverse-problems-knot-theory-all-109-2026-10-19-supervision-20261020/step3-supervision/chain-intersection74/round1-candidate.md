---
id: lem-linking-number-equals-four-dimensional-intersection-number
kind: lemma
title: "Boundary linking is intersection of bounding chains in the four-ball"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 5
deps:
  - thm-linking-number-equals-signed-intersection
  - thm-every-oriented-knot-bounds-a-seifert-surface
  - def-oriented-intersection-number
  - def-local-oriented-intersection-sign
  - def-product-orientation
  - def-induced-boundary-orientation
  - lem-oriented-boundary-of-a-compact-oriented-one-manifold-has-zero-signed-count
  - cor-contractible-nonempty-spaces-have-the-homology-of-a-point
  - def-axiom-of-choice
  - lem-relative-smoothing-of-a-continuous-simplex-along-its-faces
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Charles Livingston, A Survey of Classical Knot Concordance"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/living.pdf"
      locator: "§2.2, proof of Theorem 2.6, printed p. 323"
    - title: "Danny Calegari, Introduction to Knot Theory"
      url: "https://math.uchicago.edu/~dannyc/notes/knot_theory.pdf"
      locator: "§3.3, Theorem 3.13, printed pp. 27–29; linking as intersection with a spanning surface"
    - title: "Victor Guillemin and Alan Pollack, Differential Topology (1974)"
      url: "https://www.math.auckland.ac.nz/~hekmati/Books/GP.pdf"
      locator: "Chapter 2 §3, printed pp.68–73 (parametric transversality, relative Extension Theorem and proof); Chapter 3 §3, printed pp.107–114 (oriented intersection, boundary cancellation, and diagonal reduction). Actual bounded text reading: printed67–74 and107–114/PDF81–88 and121–128 of the236-page PDF. These map-level results are imported; the finite rational-chain extension is spelled out in Proof1.1, not attributed as a printed chain theorem."
---

## Statement

Assume the Axiom of Choice. Let $\alpha$ and $\beta$ be disjoint finite rational $1$-cycles in the boundary $S^3$ of the standard oriented $4$-ball $B^4$, each represented as a finite rational linear combination of oriented knots. Let $P$ and $Q$ be finite rational $2$-chains in $B^4$ with $\partial P=\alpha$ and $\partial Q=\beta$, with common standard product collars at their respective boundaries and with their interiors in general position. Then the signed interior intersection number $P\cdot Q$ equals the bilinear extension of the linking number $\operatorname{lk}(\alpha,\beta)$ defined by positive meridians in $S^3$.

## Statement references

[[thm-linking-number-equals-signed-intersection|Linking is signed intersection with a spanning surface in the three-sphere]]

[[def-oriented-intersection-number|Local signs and intersection numbers for smooth maps and submanifolds]]

## Facts & Assumptions

**Given:** Full AC, disjoint oriented boundary cycles in $S^3$, collared rational bounding chains in $B^4$, and general position for their interiors.

[A1] The Axiom of Choice is assumed in the supplied topological linking-number convention. [[def-axiom-of-choice]]

[F1] For disjoint oriented knots, linking is the signed intersection of the first knot with an oriented Seifert surface spanning the second. [[thm-linking-number-equals-signed-intersection]]

[F5] Every oriented knot in $S^3$ bounds a compact oriented smooth Seifert surface. [[thm-every-oriented-knot-bounds-a-seifert-surface]]

[F2] A compact oriented $1$-manifold has signed boundary count zero. [[lem-oriented-boundary-of-a-compact-oriented-one-manifold-has-zero-signed-count]]

[F3] The standard $4$-ball is contractible, so its interior has zero second rational homology. [[cor-contractible-nonempty-spaces-have-the-homology-of-a-point]]

[F4] The local sign of a transverse intersection is determined by the ordered tangent bases and ambient orientation; boundary orientations use the outward-normal-first convention and product orientations preserve the stated factor order. [[def-oriented-intersection-number]], [[def-local-oriented-intersection-sign]], [[def-induced-boundary-orientation]], [[def-product-orientation]]

[F6] **External map-level transversality input.** For a smooth map to a boundaryless smooth manifold and a closed embedded boundaryless target submanifold, transversality can be attained by a homotopy fixed on a neighborhood of any closed subset where the map and its boundary restriction are already transverse (Guillemin–Pollack, Chapter 2 §3, Extension Theorem, printed pp.72–73). Their parametric theorem, printed pp.68–69, gives almost-every-parameter transversality, and their Chapter 3 §3, printed pp.107–114, supplies the oriented boundary count and reduction of a pair of maps to the diagonal. We apply this only in the smooth interior of the standard ball and to finitely many simplex-face strata; no smoothing of a TOP embedded manifold is asserted. ([Guillemin–Pollack](https://www.math.auckland.ac.nz/~hekmati/Books/GP.pdf))

[F7] For a continuous simplex in a boundaryless smooth target, compatible smooth face maps and compatible face homotopies extend to a smooth replacement and homotopy with those exact face restrictions. An originally smooth simplex with constant prescribed face homotopies may be fixed. This is used only for a finite face-closed family, relative to its already smooth prescribed subfamily. [[lem-relative-smoothing-of-a-continuous-simplex-along-its-faces]]

## Proof

1.1 **Finite-chain model and independence.** A rational chain here is a finite sum of parametrized singular simplices with rational coefficients; subdivision, face identification and every perturbation are performed on the finite collection of occurring simplices and all their faces. On the prescribed end collars use the given product maps. Truncate at a smaller positive collar level before smoothing, so every remaining map has target in the boundaryless smooth interior of $B^4$. By [F7], replace continuous simplices inductively over their dimensions, using the same replacement and homotopy whenever an identical parametrized face occurs. Keep an already smooth prescribed subfamily fixed. The resulting replacement respects the boundary operator exactly; prisms give the usual relative homology, and all coefficients remain the original rational coefficients. In particular a continuous filling of a fixed smooth cycle can be replaced by a smooth filling with exactly that boundary. For these finite smooth chains, general position means transversality of every pair of relevant open simplex-face strata to the diagonal in $B^{4circ}	imes B^{4circ}$. It is attainable relative to the fixed end collars: in Euclidean interior coordinates perturb a face map by a small parameter times a smooth cutoff positive on the unfixed interior and zero near the already fixed subfamily. Its parameter derivative is surjective where the cutoff is positive; at the fixed locus transversality already holds. The diagonal version of [F6] therefore applies. Extend the chosen face homotopy to its incident simplices, and proceed by increasing face dimension, treating an identical face only once. At each stage the restrictions on lower faces are fixed and transverse; this remains true on a small neighborhood of them, so the relative clause applies. There are finitely many faces and pairs, hence finitely many full-measure parameter requirements can be imposed simultaneously, with arbitrarily small perturbations and supports away from the end collars. Any prescribed open neighborhood of the finite compact supports can be retained: use that open neighborhood intersected with $B^{4\circ}$ as the boundaryless target of [F7], subdivide into finitely many coordinate pieces and choose all displacement parameters below a finite positive distance bound from their compact image pieces to the complements of the chosen open sets. Thus disjoint chains may be replaced in disjoint open neighborhoods. For complementary two-chains define their intersection by the finite sum of the local signed points of the products of their simplex maps, weighted by the products of their rational coefficients. Lower face pairs have dimension less than four and so are disjoint. This agrees with the given signed interior count whenever the chains are already in general position. Now fix $Q$, and let $P,P'$ bound $alpha$ with identical end collars. After cancelling those collars, $C=P-P'$ is a closed rational two-cycle with compact support in $B^{4circ}$. By [F3] it bounds a finite continuous rational three-chain $Z$ there. Apply the just-described relative smoothing to $Z$, fixing its smooth boundary $C$, and relative facewise general position against $Q$, preserving that boundary intersection count. For each pair of simplices of $Z$ and $Q$, the diagonal preimage is a compact oriented one-manifold with boundary on the codimension-one source faces; codimension-two faces have negative expected dimension and contribute nothing. This assertion is local on the smooth extensions of the simplex maps: at a codimension-one face, transversality of the restricted map makes the preimage a half-interval, with its outward boundary sign. Sum these one-manifolds with the rational product coefficients. Identical internal faces give identical endpoint sets with opposite incidence coefficients, so cancel exactly. The remaining boundary terms are the intersections of $partial Z=C$ with $Q$ and those of $Z$ with $partial Q$. The latter are empty because the compact support of $Z$ lies in the interior whereas $partial Q=eta$ lies on $S^3$. By [F2] each compact oriented one-manifold has total signed boundary count zero, hence the rational weighted sum gives $Ccdot Q=0$, or $Pcdot Q=P'cdot Q$. The same relative construction for a homotopy prism proves independence of smooth/general-position representatives. Interchanging the two factors proves independence of $Q$; the two-dimensional factor swap has positive sign. This proves independence for all the stated finite rational chains without treating $Z$ as an embedded three-manifold. [A1, F2, F3, F4, F6, F7, given, construct]

1.2 By [F5], choose an oriented Seifert surface $S_\beta\subset S^3$ for each knot component of $\beta$, and similarly choose a cap for each component of $\alpha$. It suffices by bilinearity to consider one knot component of each. Choose a collar depth $0<\epsilon$ in $B^4$. Make $Q$ a graph of $S_\beta$ in the boundary collar with depth zero on $\beta$ and strictly between $0$ and $\epsilon/2$ on its interior. Make $P$ consist of the product collar $\alpha\times[0,\epsilon]$ followed by a cap at depth $\epsilon$. Then $P$ and $Q$ intersect exactly above $\alpha\cap S_\beta$. At each such point, the oriented tangent basis of the collar of $P$ is $(n_{\mathrm{out}},a)$, where $a$ is the positive tangent to $\alpha$ and $n_{\mathrm{out}}$ is the outward normal of $B^4$; the tangent basis of $Q$ is a positive basis $(s_1,s_2)$ of $S_\beta$, up to radial components which do not change the determinant. By [F4], $(n_{\mathrm{out}},a,s_1,s_2)$ is positive exactly when $(a,s_1,s_2)$ is positive in the boundary orientation. Thus the $4$-dimensional intersection sign is exactly the $3$-dimensional sign of $\alpha\cap S_\beta$. Hence $P\cdot Q=\operatorname{lk}(\alpha,\beta)$ by [F1]. [F1, F4, F5, given, construct]

2.1 Step 1.1 shows the intersection number is independent of admissible collared bounding chains, and step 1.2 computes it for one convenient choice. Hence the equality holds for all such $P,Q$ when the boundaries are knots. Expanding finite rational cycles into their oriented knot components and using bilinearity of both signed intersection and linking proves the stated equality. [F1, step 1.1, step 1.2, algebra] ∎
