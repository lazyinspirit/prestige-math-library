---
id: lem-cdr-weak-injectivity-and-auxiliary-pattern-reduction
kind: lemma
title: "Weak injectivity and auxiliary-pattern reduction"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 7
deps:
  - def-cdr-satellite-concordance-categories
  - def-satellite-induced-concordance-operator
  - def-smooth-and-topological-slice-genus
  - lem-cdr-smooth-s4-complement-is-standard-ball
  - lem-cdr-zero-surgery-pattern-homology-cobordism
  - lem-concordance-annulus-induces-zero-surgery-cobordism
  - lem-general-knot-reverse-mirror-sum-is-ribbon
  - lem-satellite-connected-sum-substitution
  - lem-satellite-operator-preserves-concordance
  - lem-strong-winding-stable-under-companion-insertion
  - thm-cdr-concordance-categories-form-abelian-groups
justified_by:
  []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Tim D. Cochran, Christopher W. Davis, and Arunima Ray, “Injectivity of satellite operators in knot concordance”"
      url: "https://arxiv.org/pdf/1205.5058v3"
      locator: "Proposition 3.2, Theorems 4.1/4.3, and the auxiliary-pattern reduction in Theorem 5.1"
    - title: "Michael H. Freedman, The topology of four-dimensional manifolds"
      url: "https://doi.org/10.4310/jdg/1214437136"
      locator: "J. Differential Geometry 17 (1982), pp. 357–453; contractible-boundary four-ball consequence, used in the exact form explicitly applied in CDR Proposition 3.2, printed p. 7."
---

## Statement

Let P be a pattern of nonzero winding n. If P(U) is smoothly slice in an R_n-homology 4-ball, then P is weakly injective on C^{1/n}, meaning P(K)=P(U) implies K=U in that category. If P has strong winding number ±1 and P(U) is pseudo-slice (respectively locally flat topologically slice), then P is weakly injective on C_ex (respectively C_top). In ordinary smooth concordance, if P(U) is smoothly slice in standard B⁴ and P has strong winding number ±1, then P is weakly injective on C_sm provided the smooth 4-dimensional Poincaré conjecture holds.

For any pattern P and knots K,J with P(K)=P(J) in one of these concordance groups, the connected-sum reduction constructs a pattern R for which R(−K#J) is concordant to U, whose closure R(U)=−P(K)#P(K) is ribbon, and whose winding w(R)=w(P). If P is strong winding ±1, then R is strong winding ±1. This reduction turns injectivity of P into weak injectivity of R; it does not assert that P itself is weakly injective without the closure hypotheses above.

## Statement references

[[lem-satellite-operator-preserves-concordance|Concordance preservation for the satellite function]]

[[def-smooth-and-topological-slice-genus|Smooth and locally flat topological slice disks]]

[CDR, Proposition 3.2 and Theorem 5.1](https://arxiv.org/pdf/1205.5058v3)

## Facts & Assumptions

**Given:** A pattern P, knots K,J, and the exact category and closure-slice hypotheses stated above.

[F1] The solid-torus meridian is strong winding when it normally generates the closure-complement group ([[def-satellite-induced-concordance-operator]]).

[F2] The zero-surgery comparison has a smooth R_n branch and category-specific exotic/topological branches with their closure hypotheses ([[lem-cdr-zero-surgery-pattern-homology-cobordism]]).

[F3] The definitions of C_ex, C_top and C^{1/n} specify the ambient 4-manifold and coefficient conditions ([[def-cdr-satellite-concordance-categories]]).

[F4] The concordance classes have a connected-sum group law with unknot identity ([[thm-cdr-concordance-categories-form-abelian-groups]]).

[F5] The ordinary smooth branch uses the special smooth S⁴-complement assertion ([[lem-cdr-smooth-s4-complement-is-standard-ball]]).

[F6] Satellite insertion rewrites P(K#J) as P_K(J) for the simultaneous companion-insertion pattern P_K ([[lem-satellite-connected-sum-substitution]]).

[F7] The satellite rule descends to the specified concordance classes only after concordance preservation ([[lem-satellite-operator-preserves-concordance]]).

[F8] A concordance annulus with a compatible zero-framed normal neighborhood gives a zero-surgery cobordism ([[lem-concordance-annulus-induces-zero-surgery-cobordism]]).

[F9] Strong winding survives companion insertion and local connected sum ([[lem-strong-winding-stable-under-companion-insertion]]).

[F10] The reverse-mirror connected sum −J#J bounds a ribbon disk ([[lem-general-knot-reverse-mirror-sum-is-ribbon]]).

[F11] **External TOP input.** A compact contractible topological four-manifold with boundary homeomorphic to the standard $S^3$ is homeomorphic to $B^4$. This is the Freedman consequence invoked explicitly in Cochran–Davis–Ray, Proposition3.2 and its proof, printed7–8; it is imported, not locally reconstructed. A supplied boundary marking is respected: if $h:B\to B^4$ is any such homeomorphism and $k:\partial B\to S^3$ is the required marking, extend $k\circ(h|_{\partial B})^{-1}$ radially over $B^4$ by the Alexander extension and postcompose $h$. Thus the co-core boundary knot retains its actual endpoint marking. This fact applies to the underlying TOP manifold of a smooth contractible $B$ as well; it asserts no smooth standardness. The cited application in CDR printed7–8 was read directly; the original Freedman paper is cited as its authoritative source, not claimed read in full here.

[F12] **External remaining concordance input.** Zero-framed surgery on a concordance annulus descends to a homology cobordism of the zero-surgery manifolds in the same category; the coefficient ring is $R_n$ for localized concordance, and in the TOP/exotic categories the fundamental group is normally generated by either boundary knot-group image. The meridians are the normal-circle factors along the framed annulus and are identified by its product coordinate. This is the zero-surgery descent in CDR Section3, printed7, paragraph preceding Definition3.1 and diagram3.1, read directly. The local normal-GIVEN construction [F8] is retained; this explicit external input supplies its needed conclusion where an unresolved general annulus-neighborhood/descent interface would otherwise be required. No local reconstruction of that missing interface is asserted.

## Proof

1.1 Suppose P(K)=P(U), with the stated closure-slice hypothesis. By [F7] this equality is witnessed by a concordance annulus; the zero-surgery descent [F12], with the retained normal-GIVEN construction [F8], gives a meridian-preserving homology cobordism from M(P(K)) to M(P(U)). Applying [F2] to K and U gives cobordisms from M(P(K)) to M(K) and from M(P(U)) to M(U). On each pattern cobordism its marked first-homology relation is [mu_companion]=n[mu_satellite], where n is a unit in R_n; the concordance cobordism from [F8] identifies the two satellite meridian classes exactly. No equality of the pattern and companion preferred meridians is assumed. [F2, F7, F8, F12, given]

1.2 Glue the cobordisms along the identified surgery manifolds. Mayer–Vietoris shows that the resulting boundary inclusions retain the required homology isomorphisms. In the exotic/topological branches, van Kampen shows the boundary normal-generation condition is preserved under this gluing. Hence M(K) and M(U) satisfy the corresponding surgery-cobordism relation. In the localized branch each endpoint meridian maps to a unit multiple of the same H_1 generator: compose the two winding-unit relations and the intervening exact concordance relation. In particular each endpoint meridian, including that of K, remains an R_n-module generator. In the strong-winding branches n=+1 or -1, so these multipliers are already integral units. [F2, F8, step 1.1, algebra]

2.1 In the localized category, cap the M(U)=S¹×S² end with S¹×B³. Mayer–Vietoris gives an R_n-homology circle X with boundary M(K), and its meridian class is an R_n-module generator by step1.2. Attach a smooth 2-handle along that meridian with the surgery-dual zero framing. The relative pair (B,X) has only H_2(B,X;R_n)=R_n, generated by its core; its boundary map to H_1(X;R_n)=R_n is the meridian class, hence multiplication by a unit and an isomorphism. The pair sequence gives H_i(B;R_n)=0 for all i>0 and H_0(B;R_n)=R_n. The boundary handle description is the zero-surgery presentation for K together with its zero-framed meridian; this dual meridian surgery restores S³, and the 2-handle co-core has boundary K under that identification. Thus the resulting B is an R_n-homology ball containing the required smooth proper disk, proving K=U in C^{1/n}. Only a unit meridian multiplier was used, so the corrected [F2] supplies exactly the needed premise. [F3, step 1.2, algebra]

2.2 In the exotic and topological categories, the normal-generation condition makes the capped manifold after the meridian 2-handle contractible with boundary S³. The external input [F11] identifies this manifold with the boundary-marked topological $B^4$. Its co-core is smooth in the exotic branch and locally flat in the TOP branch, and its boundary is the original marked $K$. It therefore gives a pseudo-slice disk or a TOP slice disk respectively, proving $K=U$ in the required category. [F3, F11, step 1.2, construct]

2.3 In the ordinary smooth branch, if P(U) is smoothly slice and P has strong winding ±1, the same cap and handle construction gives a contractible smooth 4-manifold B with boundary S³. Capping B with standard B⁴ gives a smooth homotopy S⁴; under the smooth 4-dimensional Poincaré conjecture and [F5], B is diffeomorphic to B⁴. [F1, F5, step 1.2, step 2.2]

3.1 Now suppose P(K)=P(J). By [F6], the connected-sum identity and the ribbon inverse give $P(J)=P_K(-K\#J)$ as concordance classes. Define R as the local connected sum of −P(K) with P_K. Then R(−K#J) is concordant to U because K#(−K#J) is concordant to J and satellites preserve concordance; moreover R(U)=−P(K)#P(K). By [F10], this closure is ribbon; [F6] gives w(R)=w(P). [F4, F6, F7, F10, given, algebra]

3.2 If P has strong winding ±1, [F9] implies R also has strong winding ±1. The closure R(U) supplies the localized slice, pseudo-slice, topological-slice, and standard smooth-slice hypotheses in their respective branches. Apply the applicable earlier weak-injectivity branch to R to obtain $-K\#J=U$ and hence $K=J$. [F1, F2, F3, F4, F9, step 3.1, algebra] ∎
