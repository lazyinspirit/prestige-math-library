---
id: thm-author-8a080e7d9445-em-regular-input
kind: theorem
title: Exact natural regular motivic-to-cdh comparison
status: published
domain: mathematics
deps:
  - def-motivic-cohomology
  - math:def-axiom-of-choice
  - math:def-perfect-field
  - math:def-smooth-morphism-classical
  - math:thm-regular-equals-smooth-over-perfect-field
  - math:def-regular-local-ring-geometric-point
  - math:def-locally-finite-type-and-finite-type-morphism
  - math:def-quasi-compact-and-quasi-separated-morphism
  - math:def-locally-noetherian-and-noetherian-scheme
  - math:def-quasi-compact-and-quasi-separated-scheme
  - math:def-noetherian-topological-space
  - math:thm-noetherian-ring-has-noetherian-spectrum
  - math:lem-noetherian-open-subsets-are-quasi-compact
  - math:def-affine-scheme-spectrum
  - math:lem-spectrum-localization-open-immersion
  - math:thm-noetherian-ring-quotients-and-localisations
  - math:def-affine-open-subscheme
  - math:def-stalk-of-presheaf
dependency_roles:
  def-motivic-cohomology: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  math:def-perfect-field: mathematical-premise
  math:def-smooth-morphism-classical: mathematical-premise
  math:thm-regular-equals-smooth-over-perfect-field: mathematical-premise
  math:def-regular-local-ring-geometric-point: mathematical-premise
  math:def-locally-finite-type-and-finite-type-morphism: mathematical-premise
  math:def-quasi-compact-and-quasi-separated-morphism: mathematical-premise
  math:def-locally-noetherian-and-noetherian-scheme: mathematical-premise
  math:def-quasi-compact-and-quasi-separated-scheme: mathematical-premise
  math:def-noetherian-topological-space: mathematical-premise
  math:thm-noetherian-ring-has-noetherian-spectrum: mathematical-premise
  math:lem-noetherian-open-subsets-are-quasi-compact: mathematical-premise
  math:def-affine-scheme-spectrum: mathematical-premise
  math:lem-spectrum-localization-open-immersion: mathematical-premise
  math:thm-noetherian-ring-quotients-and-localisations: mathematical-premise
  math:def-affine-open-subscheme: mathematical-premise
  math:def-stalk-of-presheaf: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: Elden Elmanto and Matthew Morrow, Motivic cohomology of
        equicharacteristic schemes
      url: https://arxiv.org/pdf/2309.08463v1
      locator: "v1, Section 2.1 p. 11; Section 3.3 equation (3.5) p. 14; Construction
        4.36 p. 32; Section 6 equation (6.1) and Theorem 6.1(2) p. 44. Context
        only: Construction 4.34 p. 31; Corollary 6.4 and footnote 12 p. 45."
      statement: For a prime field F and nonnegative weight r, equation (3.5) fixes
        the cdh motivic functor. Construction 4.36 and equation (6.1) give the
        natural motivic-to-cdh comparison on qcqs F-schemes, and Theorem 6.1(2)
        makes it an equivalence on regular Noetherian F-schemes.
      hypotheses: F is Q or F_p, r is nonnegative, and the input schemes are qcqs. The
        equivalence requires regularity and Noetherianity, without a
        finite-type-over-F assumption. The functors and natural transformation
        take values in the stable derived infinity-category D(Z), using Section
        2.1 conventions.
      reading_limits: Freshly read the versioned PDF extraction at Section 2.1,
        equation (3.5), Construction 4.36, equation (6.1), and Theorem 6.1(2).
        Also read Construction 4.34, Corollary 6.4 with its short proof, and
        footnote 12 to check the boundary with the separate classical
        comparison. PDF screenshot requests failed with a cache miss; no image
        inspection is claimed. The regular comparison theorem is imported, not
        reconstructed. The geometric applicability argument below is local; the
        smooth arbitrary-field cycle comparison is not imported here.
    - title: Kerodon, Natural Isomorphisms, Theorem 4.4.4.4 (tag 01DK)
      url: https://kerodon.net/tag/01DK
      locator: Subsection 4.4.4, Definition 4.4.4.1 and Remark 4.4.4.2 (tag 01DF);
        Theorem 4.4.4.4 (tag 01DK), statement and its one-line proof.
      statement: For diagrams indexed by a simplicial set with values in an
        infinity-category, an already given coherent natural transformation is
        invertible in the functor infinity-category exactly when all vertex
        components are equivalences. A coherent transformation is a morphism of
        that functor category, represented by a map from the product with
        Delta^1 having the specified endpoints.
      hypotheses: An infinity-category, a simplicial indexing set, two diagrams and an
        already supplied coherent natural transformation. Here use the enhanced
        derived target of reference 0 and the nerve of the opposite category of
        opens, or of the relevant smooth-scheme/open-restriction category, under
        the fixed universe bounds.
      reading_limits: In this maintenance pass, read the HTML statement and complete
        one-line proof of tag 01DK, and Definition 4.4.4.1 and Remark 4.4.4.2 at
        tag 01DF. The proof invokes Proposition 4.4.4.9; that proposition and
        its upstream combinatorial arguments were not reconstructed. Import only
        the stated criterion and transformation convention, not a construction
        of coherent naturality from component maps.
dependency_level: 9
formulation_deps:
  - def-motivic-cohomology
  - math:def-axiom-of-choice
  - math:def-perfect-field
  - math:def-smooth-morphism-classical
  - math:thm-regular-equals-smooth-over-perfect-field
  - math:def-regular-local-ring-geometric-point
  - math:def-locally-finite-type-and-finite-type-morphism
  - math:def-quasi-compact-and-quasi-separated-morphism
  - math:def-locally-noetherian-and-noetherian-scheme
  - math:def-quasi-compact-and-quasi-separated-scheme
  - math:def-noetherian-topological-space
  - math:def-affine-scheme-spectrum
  - math:def-affine-open-subscheme
  - math:def-stalk-of-presheaf
argument_deps:
  - def-motivic-cohomology
  - math:def-axiom-of-choice
  - math:def-perfect-field
  - math:def-smooth-morphism-classical
  - math:thm-regular-equals-smooth-over-perfect-field
  - math:def-regular-local-ring-geometric-point
  - math:def-locally-finite-type-and-finite-type-morphism
  - math:def-quasi-compact-and-quasi-separated-morphism
  - math:def-locally-noetherian-and-noetherian-scheme
  - math:def-quasi-compact-and-quasi-separated-scheme
  - math:def-noetherian-topological-space
  - math:thm-noetherian-ring-has-noetherian-spectrum
  - math:lem-noetherian-open-subsets-are-quasi-compact
  - math:def-affine-scheme-spectrum
  - math:lem-spectrum-localization-open-immersion
  - math:thm-noetherian-ring-quotients-and-localisations
  - math:def-affine-open-subscheme
  - math:def-stalk-of-presheaf
---

## Statement
For a prime field $F$ and $r\geq0$, the actual source comparison $\eta_r:\mathbb Z(r)_{\mathrm{mot},F}\to C_{r,F}=\mathbb Z(r)_{\mathrm{cdh},F}$ is a natural transformation on all qcqs $F$-schemes and is an equivalence on every regular Noetherian $F$-scheme. Therefore on smooth finite-type schemes over any perfect field $k\supset F$, it is an equivalence of diagrams for open restrictions, even when those schemes are not finite type over $F$.

## External input
The imported premises are the two specified complex-valued functors, their actual natural transformation (6.1), and its regular Noetherian equivalence in Theorem 6.1(2), with the source and hypotheses recorded above. Here $F$ is $\mathbb Q$ or $\mathbb F_p$ and $C_{r,F}$ denotes precisely the cdh-local motivic functor of equation (3.5), not an unspecified cdh sheafification of a separately chosen presheaf. The functors take values in the stable derived infinity-category $D(\mathbb Z)$ with the conventions of Section 2.1 of the source. An equivalence of open-restriction diagrams means the restriction of this natural transformation with equivalences at every object and its supplied coherent naturality data. Thus naturality is imported before taking cohomology or fibers, rather than inferred from pointwise group isomorphisms. The smooth arbitrary-field cycle comparison remains a separate input; Construction 4.34 and footnote 12 are contextual checks only.

Reference 1 imports the criterion from [Kerodon, Theorem 4.4.4.4](https://kerodon.net/tag/01DK), with its coherent-transformation convention. It is used to pass from the already supplied natural comparison with equivalences at every object to invertibility in the enhanced functor category. Its proof is imported within the recorded reading limits; it does not construct naturality from pointwise maps. The local geometric verification below is retained.

## Facts & Assumptions
**Given:** The hypotheses in the statement, with the Axiom of Choice and fixed universe bounds.

**Goal:** Apply the imported natural comparison to the stated schemes and every open restriction.

[A1] The Axiom of Choice is assumed through [[math:def-axiom-of-choice]]. It discharges the hypotheses of the smooth-to-regular theorem in [F3] and the Noetherian-spectrum and quasi-compact-open results in [F5] at their applications below. No additional simultaneous choice of charts or inverses is made.

[F1] The exact functors, natural transformation, and regular Noetherian equivalence specified in External input are imported from the statement-bearing source citation, equation (3.5), Construction 4.36, equation (6.1), and Theorem 6.1(2). Its coherent naturality is part of that presheaf map, not an assertion reconstructed from its values.

[F2] [[def-motivic-cohomology]] fixes the motivic-complex notation and its restriction from the prime-field theory. The cdh target and derived diagram convention are fixed explicitly in External input by the same source.

[F3] A perfect field has every nonconstant irreducible polynomial separable, and smoothness uses the local standard-smooth convention. [[math:def-perfect-field]] [[math:def-smooth-morphism-classical]] Under AC, a smooth finite-type scheme over a perfect field is regular and locally Noetherian. [[math:thm-regular-equals-smooth-over-perfect-field]] A point of a locally Noetherian scheme is regular when its local ring is regular local; regularity of a scheme means this at every point. [[math:def-regular-local-ring-geometric-point]]

[F4] Finite type means locally of finite type and quasi-compact as a morphism; quasi-compactness of a morphism means its inverse images of quasi-compact opens are quasi-compact. [[math:def-locally-finite-type-and-finite-type-morphism]] [[math:def-quasi-compact-and-quasi-separated-morphism]] A Noetherian scheme is locally Noetherian and quasi-compact, equivalently it has a finite affine cover by spectra of Noetherian rings. [[math:def-locally-noetherian-and-noetherian-scheme]] A scheme is qcqs when its space is quasi-compact and each intersection of two affine opens is quasi-compact. [[math:def-quasi-compact-and-quasi-separated-scheme]]

[F5] A Noetherian topological space has every descending sequence of closed subsets stationary. [[math:def-noetherian-topological-space]] Under AC a Noetherian ring has Noetherian spectrum, and every open subset of a Noetherian space is quasi-compact, including the empty open. [[math:thm-noetherian-ring-has-noetherian-spectrum]] [[math:lem-noetherian-open-subsets-are-quasi-compact]]

[F6] On an affine spectrum the distinguished opens $D(f)$ form a basis, and $D(f)$ with its restricted structure sheaf is $\operatorname{Spec}A_f$. [[math:def-affine-scheme-spectrum]] [[math:lem-spectrum-localization-open-immersion]] Localizations of Noetherian rings are Noetherian. [[math:thm-noetherian-ring-quotients-and-localisations]] An open subscheme carries the restricted structure sheaf, and stalks are germs of sections over neighborhoods. [[math:def-affine-open-subscheme]] [[math:def-stalk-of-presheaf]]

[F7] Reference 1 defines a coherent natural transformation as a morphism in the functor infinity-category and supplies the criterion that it is an equivalence precisely when its components at all vertices are equivalences. Apply it to the nerve of the opposite indexing category and the enhanced derived target supplied in [F1]. The transformation itself must already be given; its existence and coherent naturality come from [F1].

## Proof
1.1 Import the functors and actual natural transformation of [F1] with the interpretation in [F2]. To check its domain on all Noetherian schemes, let $S$ be any Noetherian scheme. By [F4] it has a finite affine cover with Noetherian coordinate rings. Each chart has Noetherian underlying space by [F5] and [A1]. A descending sequence of closed subsets of $S$ becomes stationary on each chart; taking the maximum of the finitely many stabilization indices makes the sequence stationary on $S$. Thus $|S|$ is Noetherian. For every open $O\subseteq S$, [F5] makes $O$ quasi-compact; intersections of affine opens in $O$ are also open in $S$ and hence quasi-compact. Thus $O$ is qcqs by [F4]. The distinguished opens lying inside $O$ in the Noetherian affine charts cover $O$; their rings $A_f$ are Noetherian by [F6], so $O$ is locally Noetherian and therefore Noetherian. At each $x\in O$, restriction of the structure sheaf leaves the local ring unchanged: a germ at $x$ can be restricted to its intersection with $O$, and the same operation preserves equality of germs. Consequently if $S$ is regular, every such $O$ is regular. This includes $O=\varnothing$ and $O=S$. [A1, F1, F2, F3, F4, F5, F6]

2.1 Let $X$ be smooth finite type over the perfect field $k\supset F$. By [F3] and [A1], $X$ is regular and locally Noetherian. By [F4] the finite-type structure morphism is quasi-compact; its inverse image of the one-point, hence quasi-compact, space $\operatorname{Spec}k$ is $X$. Thus $X$ is Noetherian. Step 1.1 shows that every open $O\subseteq X$ is regular Noetherian and qcqs. Viewing these schemes over $F$ merely composes their structure maps with $\operatorname{Spec}k\to\operatorname{Spec}F$; their spaces, sheaves, and local rings are unchanged. Their inclusions are therefore arrows in the qcqs $F$-scheme category on which [F1] is already natural. Restrict that supplied coherent transformation to the opposite category of opens of $X$. Every component is an equivalence by Theorem 6.1(2), so [F7] makes it an equivalence in the enhanced functor category. The same argument applies to smooth finite-type $k$-schemes and their open restrictions. No finite-type condition over $F$ has been introduced. The comparison and the criterion are imported; verification of the geometric hypotheses and this restriction application are local. [A1, F1, F2, F3, F4, F7, step 1.1] ∎
