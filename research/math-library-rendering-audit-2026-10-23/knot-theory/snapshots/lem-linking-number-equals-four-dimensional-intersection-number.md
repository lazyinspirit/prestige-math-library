---
id: lem-linking-number-equals-four-dimensional-intersection-number
kind: lemma
title: "Boundary linking is intersection of bounding chains in the four-ball"
status: published
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
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
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

1.1 **Finite-chain model and independence.** Write each rational chain as a finite rational sum of parametrized singular simplices. Within each labeled intersection factor, take the finite family of its simplices and iterated faces, identifying equal parametrized faces so that cancellations remain exact. Never identify simplices across the two factors merely because their maps agree: their perturbations must be independent. Preserve the given smooth product end collars and truncate at a smaller positive collar level. The remaining target is the boundaryless interior $B^{4\circ}$. Apply [F7] inductively over the finite face family, extending compatible face homotopies and fixing prescribed smooth faces. This gives a smooth chain replacement respecting the boundary operator, with the same rational coefficients; the homotopy prisms give relative homology. Applying [F7] with any prescribed open neighborhood as target keeps the replacement there. For general position, keep the two labeled families separate and make each pair of their open face strata transverse to the diagonal in $B^{4\circ}\times B^{4\circ}$. Choose faces in increasing dimension, fixing their previously treated subfaces. In Euclidean coordinates a cutoff-supported translation of the unfixed map is submersive in its parameter where the cutoff is positive; near the fixed part the pair is already transverse. The relative and parametric clauses of [F6] therefore give the required perturbation. Extend a chosen face homotopy consistently to all incident simplices in that factor, but not to the other factor. Finitely many face-pair conditions can be imposed simultaneously. Subdivision into finitely many compact coordinate pieces and sufficiently small parameters keep all changes inside prescribed open neighborhoods and away from the end collars. For complementary two-chains the diagonal preimages are finite signed sets; lower-dimensional face pairs are empty. Define the intersection by summing these signs with the rational product coefficients. This agrees with the given transverse interior count. Now fix $Q$ and two choices $P,P'$ bounding $\alpha$, using facewise-transverse representatives with their identical end collars. Their difference $C=P-P'$ is a smooth rational two-cycle compactly supported in $B^{4\circ}$. By [F3], choose a finite continuous rational three-chain $Z$ there with $\partial Z=C$. Smooth $Z$ relative to its prescribed boundary $C$ by [F7], identifying faces within the $Z$ family only. Keeping $Q$ independent and fixed, perturb the remaining $Z$ faces relative to $C$, whose intersections with $Q$ are already transverse. Each simplex-pair diagonal preimage is a compact oriented one-manifold; codimension-one faces give its endpoints, while codimension-two faces have negative expected dimension. The local half-space model and [F4] give the boundary signs. Sum with the rational product coefficients: internal face endpoints cancel because the same face map occurs with opposite boundary coefficients. What remains is $(\partial Z)\cdot Q=C\cdot Q$, together with the term from $Z$ and $\partial Q$. That latter term is empty since $Z$ is compactly supported in the interior and $\partial Q=\beta\subset S^3$. By [F2] the total signed boundary count is zero, so $P\cdot Q=P'\cdot Q$. Apply the same finite construction to homotopy prisms to obtain independence of the replacements. Interchanging the two two-dimensional factors introduces no sign and proves independence of the second chain. All operations are rational-linear, giving the same assertions for finite rational combinations. No embedded-manifold realization of $Z$ is used. [A1, F2, F3, F4, F6, F7, given, construct]

1.2 By [F5], choose an oriented Seifert surface $S_\beta\subset S^3$ for each knot component of $\beta$, and similarly choose a cap for each component of $\alpha$. It suffices by bilinearity to consider one knot component of each. Choose a collar depth $0<\epsilon$ in $B^4$. Make $Q$ a graph of $S_\beta$ in the boundary collar with depth zero on $\beta$ and strictly between $0$ and $\epsilon/2$ on its interior. To give this graph a literal product end collar, choose $0<\delta<\epsilon/2$, attach $\beta\times[0,\delta]$, and join its inner edge to the graph inside a tubular neighborhood of $\beta$ disjoint from $\alpha$, leaving the graph unchanged outside that neighborhood; choose the join below depth $\epsilon/2$. This adds no intersections with $P$ and changes none of the signs computed below. Make $P$ consist of the product collar $\alpha\times[0,\epsilon]$ followed by a cap at depth $\epsilon$. Then $P$ and $Q$ intersect exactly above $\alpha\cap S_\beta$. At each such point, the oriented tangent basis of the collar of $P$ is $(n_{\mathrm{out}},a)$, where $a$ is the positive tangent to $\alpha$ and $n_{\mathrm{out}}$ is the outward normal of $B^4$; the tangent basis of $Q$ is a positive basis $(s_1,s_2)$ of $S_\beta$, up to radial components which do not change the determinant. By [F4], $(n_{\mathrm{out}},a,s_1,s_2)$ is positive exactly when $(a,s_1,s_2)$ is positive in the boundary orientation. Thus the $4$-dimensional intersection sign is exactly the $3$-dimensional sign of $\alpha\cap S_\beta$. Hence $P\cdot Q=\operatorname{lk}(\alpha,\beta)$ by [F1]. [F1, F4, F5, given, construct]

2.1 Step 1.1 shows the intersection number is independent of admissible collared bounding chains, and step 1.2 computes it for one convenient choice. Hence the equality holds for all such $P,Q$ when the boundaries are knots. Expanding finite rational cycles into their oriented knot components and using bilinearity of both signed intersection and linking proves the stated equality. [F1, step 1.1, step 1.2, algebra] ∎
