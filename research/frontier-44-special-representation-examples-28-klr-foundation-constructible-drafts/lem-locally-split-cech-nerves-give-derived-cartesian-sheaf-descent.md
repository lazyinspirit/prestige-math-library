---
id: "lem-locally-split-cech-nerves-give-derived-cartesian-sheaf-descent"
kind: lemma
title: "Locally split Cech nerves give actual derived Cartesian sheaf descent"
status: draft
origin: session
deps: ["lem-field-module-sheaves-have-injective-derived-models", "thm-inverse-direct-image-adjunction", "thm-extension-by-zero-adjunction-exactness", "def-axiom-of-choice"]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Bernstein\u2013Lunts, Equivariant Sheaves and Functors, relevant full Part I proof text"
      url: "https://www.math.tau.ac.il/~bernstei/Publication_list/publication_texts/luntz_ESF/3-derived-category-and-functors.pdf"
proof_strategy: direct
---

## Statement

Assume AC. For a strict augmented simplicial space $Z_\bullet\to S$, its category of simplicial analytic $k$-sheaves has explicit coinduced injective resolutions. The derived augmentation is computed by the normalized double complex with first page $R^j q_{p*}F_p$ and alternating face differential. A common internal lower bound makes every total-degree diagonal finite. The same construction works for strict bisimplicial diagrams and is compatible with composition of derived right adjoints to exact inverse image. If $Z_\bullet$ is the Cech nerve of a map $P\to S$ admitting local sections, inverse image gives an equivalence from $D^b(\operatorname{Sh}_k(S))$ to the full derived subcategory with Cartesian cohomology. For algebraic principal GL bundles this restricts to the algebraically constructible subcategories.

## Facts & Assumptions

**Given:** The spaces, coefficients, ordinary bounds and maps specified above; AC where stated.

[F1] The exact local supplier contract of [[lem-field-module-sheaves-have-injective-derived-models]] is used with the hypotheses explicitly stated in its claim.

[F2] The exact local supplier contract of [[thm-inverse-direct-image-adjunction]] is used with the hypotheses explicitly stated in its claim.

[F3] The exact local supplier contract of [[thm-extension-by-zero-adjunction-exactness]] is used with the hypotheses explicitly stated in its claim.

[F4] The exact local supplier contract of [[def-axiom-of-choice]] is used with the hypotheses explicitly stated in its claim.

## Proof

1.1 A simplicial sheaf is a family F_p with structure maps α*F_m→F_p for every simplicial operator α:P_p→P_m, satisfying the composition identities. Kernels, cokernels and filtered colimits are computed levelwise, with sheafification for cokernels; inverse image is exact over a field. Evaluation at p is exact. Its left adjoint is the free simplicial sheaf obtained by the sums of inverse images indexed by the simplicial operators, and is exact because inverse images and sheaf direct sums are exact. Thus evaluation preserves injectives. Its right adjoint N_p is coinduction: in degree m, [given, F1, F2, F3, F4]

1.2 `(N_p I)_m = ∏_{α:[m]→[p]} α_*I`. [given, F1, F2, F3, F4]

1.3 The ordinary direct images α_* are right adjoints to exact inverse image, so for injective I every factor, and its product, is injective in the corresponding sheaf category. N_p I is injective in the simplicial category by exactness of evaluation. An embedding of each F_p into an ordinary injective I_p gives a monomorphism F→∏_p N_p I_p: the identity-operator factor detects a nonzero section. Products of injectives are injective under AC. This supplies enough injectives and an explicit objectwise resolution. It also proves local-smallness and AB5 by levelwise stalks. Free simplicial sheaves on j_U!k_U form a set of generators. Thus the bounded derived category is an actual derived sheaf category, with the usual ordinary cochain shift and local-smallness from its injective model. [given, F1, F2, F3, F4]

1.4 The ordinary right adjoint q_* to q* is the equalizer of the two face maps q_0*F_0⇒q_1*F_1; the other compatibility equations follow from the simplicial identities. For N_p I, the cosimplicial sheaf q_m*(N_p I)_m is the product of copies of q_p*I indexed by the m-simplices α:[m]→[p] of the standard p-simplex. Its augmented cochain complex has an explicit contracting homotopy: insert vertex0 at the start of the ordered vertex tuple, declaring repeated tuples degenerate in the normalized complex. The identity dh+hd=1 follows by canceling all internal deletion terms; the initial deletion contributes the identity. Its degree0 augmentation is q_p*I. Every injective simplicial sheaf is a retract of a product of these coinduced injectives, so the augmented cosimplicial complex is exact in positive degrees for injectives. Ordinary q_m* preserves injectives, since q_m* has exact inverse image as left adjoint. Apply this cosimplicial construction to an injective resolution F→I^•. Horizontal contraction computes Rq_*F, while vertical cohomology gives R^j q_m*F_m. Total degree uses m≥0 and the common lower bound on the injective resolution, so each diagonal contains only finitely many m. This proves the actual derived augmentation formula and its convergent spectral sequence, not just a proposed bar notation. [given, F1, F2, F3, F4]

1.5 The preceding coinduced-injective argument does not use that the augmented simplicial space is a Čech nerve or that it has local sections. For any strict augmented simplicial space Z_•→S, it constructs the actual derived augmentation total model in the category of all simplicial analytic sheaves. For a strict bisimplicial diagram, use coinduction indexed by pairs of simplicial operators. Its sheaf cochains are those of a product of two standard simplices, and the two vertex-insertion contractions give the horizontal/vertical exactness for injectives. An injective resolution in this whole diagram category supplies the strict coherent maps in all indices at once. In total degree m and common internal lower bound a, only p,q≥0 with p+q≤m−a occur, so every diagonal is finite. Iterated and simultaneous totalizations coincide with their ordinary Koszul signs on these finite diagonals. For two composed augmentation inverse-image functors, ordinary right adjoints compose; the right adjoint of an exact inverse image preserves injectives. Thus resolving in the full diagram category proves the corresponding derived-right-adjoint composition identity and its unit/counit compatibility. These are literal derived functor constructions, not an assumed proper-hypercover theorem. The proper-descent author may use this general total model without using the separate local-section conclusion below. [given, F1, F2, F3, F4]

1.6 For a sheaf B on S, the augmented rows R^j q_m*q_m*B have a local contracting homotopy induced by inserting the chosen local section of q. The insertion is an actual map P_{m−1}|V→P_m|V over V, and the inverse-image coefficients agree; hence pullback on sheaf cohomology defines its action on each R^j row. Simplicial identities imply dh+hd=1 on these rows. In the augmented degree−1, the only term is B for j=0 (and0 for j>0). Thus the spectral sequence of the augmentation gives B≅Rq_*q*B. Finite ordinary truncation triangles extend this to all bounded complexes. Derived adjunction proves full faithfulness for every bounded A,B, without requiring a projective resolution by nonprojective open-extension generators. [given, F1, F2, F3, F4]

2.1 Ordinary sheaf descent is explicit: on a local section s:V→P use s*F_0; on overlaps identify these sheaves by the Cartesian isomorphism on P×_S P; the degree2 cocycle is exactly the simplicial identity. They glue to a sheaf on S. Conversely q* gives its Cartesian simplicial sheaf. A bounded Cartesian-cohomology complex is built by its finite ordinary truncation triangles from these descended cohomology sheaves. Full faithfulness just proved lifts every connecting morphism between already descended truncations; the cone then lifts the next truncation. Induction on the number of nonzero cohomology degrees proves the essential-image statement. Finite algebraic graph charts and algebraic transition maps make the descended bounded constructible complex algebraically constructible. No claim about deriving the naive equivariant abelian category for a nonfree action is made. [given, F1, F2, F3, F4] ∎

## Source notes

This is an authored research draft with a local proof from the exact named suppliers. Its ordinary algebraic triangulation, support/duality and source prerequisites retain their own current proof status. No independent audit, native verdict, readiness or gate pass is asserted. The durable construction and actual source readings are recorded in the constructible packet and proof notes.
