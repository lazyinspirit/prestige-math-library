---
id: lem-replacement-invariant-derived-enriched-mapping-spaces
kind: lemma
title: "Replacement-invariant derived enriched mapping spaces"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 7
proof_strategy: constructive
justified_by: []
aliases: []
deps:
  - thm-model-structures-on-variable-simplicial-modules-and-algebras
  - lem-variable-base-cotensor-corner-and-path-objects
  - lem-simplicial-normalization-prism-and-trivial-fibration-criterion
  - lem-trivial-simplicial-fibration-fibres-products-and-contraction
  - def-model-category-and-quillen-adjunction
  - def-simplicial-horn-and-kan-fibration
  - def-axiom-of-choice
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Goerss-Schemmerhorn, Model Categories and Simplicial Methods"
      url: "https://arxiv.org/pdf/math/0609537"
      locator: "Explicit derived mapping-space and replacement-invariance proof, route 3.5-3.8 and 4.12-4.17; unprinted prerequisites expanded locally"
    - title: "The Stacks Project, Chapter 14 (Simplicial Methods)"
      url: "https://stacks.math.columbia.edu/download/simplicial.pdf"
      locator: "Sections 14.24.1-14.24.3 and 14.31.1-14.31.9 (normalization, homotopy, horns)"
---

## Statement

In each supplied simplicial model category of
[[thm-model-structures-on-variable-simplicial-modules-and-algebras]], define
$\mathrm{RMap}(X,Y)$ using functorial cofibrant-fibrant replacements and the
constructed simplicial mapping object. These mapping objects are Kan and are
invariant under weak equivalences in either variable up to simplicial homotopy
equivalence. An enriched Quillen adjunction gives a canonical derived mapping
equivalence
$\mathrm{RMap}(L^{\mathrm{der}}X,Y)\simeq\mathrm{RMap}(X,R^{\mathrm{der}}Y)$
by the actual replacement and adjunction construction. The $\pi_0$ category
of cofibrant-fibrant models is the ordinary localization at the weak
equivalences. These assertions concern this explicit enriched homotopy theory;
no general coherent localization or strictification theorem is inferred. The
Axiom of Choice ([[def-axiom-of-choice]]) is assumed for the simultaneous
choices in the small-object construction.

## Facts & Assumptions

**Given:** A model category from [[thm-model-structures-on-variable-simplicial-modules-and-algebras]] with its simplicial mapping object $\mathrm{Map}$, cotensors and functorial factorizations; AC.

[F1] The model structures exist with weak equivalences detected by normalized additive homology, fibrations the underlying horn-lifting maps, and cofibrations the maps with the left lifting property against maps whose underlying simplicial-set maps lift all boundary inclusions (equivalently, trivial fibrations); generating cofibrations and trivial cofibrations are respectively free objects on boundaries and horns, and the factorizations are functorial ([[thm-model-structures-on-variable-simplicial-modules-and-algebras]]).

[F2] The mapping corner of a cofibration and a fibration is Kan and has boundary lifting when either is acyclic; cotensor corners of a horn-lifting map against a monomorphism have horn lifting, and against a horn or with boundary lifting they have boundary lifting; cotensor path endpoints are Kan and constant paths are weak equivalences for fibrant objects in the appropriate unsliced or relative cotensor ([[thm-model-structures-on-variable-simplicial-modules-and-algebras]], [[lem-variable-base-cotensor-corner-and-path-objects]], [[def-simplicial-horn-and-kan-fibration]]).

[F3] A morphism of simplicial sets that is boundary-trivial (a trivial Kan fibration) is a simplicial homotopy equivalence ([[lem-trivial-simplicial-fibration-fibres-products-and-contraction]]); weak equivalences of additive objects are normalized quasi-isomorphisms and are stable under homotopy ([[lem-simplicial-normalization-prism-and-trivial-fibration-criterion]]).



## Proof

1.1 Definition and fibrancy. For objects $X,Y$, let $X_c\to X$ be the functorial cofibrant replacement and $Y\to Y_f$ the functorial fibrant replacement; define $\mathrm{RMap}(X,Y)=\mathrm{Map}(X_c,Y_f)$. The mapping corner axiom of [F2] shows that $\mathrm{RMap}(X,Y)$ is a Kan simplicial set, since the source $X_c$ is cofibrant and the target $Y_f$ is fibrant. [F1, F2, construct]

2.1 Target invariance. Let $C$ be cofibrant and let $D\to D'$ be a weak equivalence between fibrant objects. Factor it as a trivial cofibration $D\to E$ followed by a trivial fibration $E\to D'$, with $E$ fibrant. A trivial cofibration between fibrant objects is a homotopy equivalence: lifting against the terminal fibration $D\to\ast_{\mathcal M}$ gives a retraction $r\colon E\to D$ with $ri=\mathrm{id}_D$ (in a slice over $B$, $\ast_{\mathcal M}$ is $B\xrightarrow{\mathrm{id}}B$ and the lifting square is a square over $B$). Lifting against the endpoint fibration $\mathrm{Path}(E)\to E\times_{\ast_{\mathcal M}}E$, using the constant path on $i$ as the map from $D$ and $(ir,\mathrm{id}_E)$ as the map from $E$, gives a homotopy $ir\simeq\mathrm{id}_E$; in a slice the path object is $E^{\Delta[1]}\times_{B^{\Delta[1]}}B$ and both endpoints lie over the same section of $B$. Mapping from the cofibrant $C$ preserves simplicial homotopies and sends trivial fibrations to boundary-trivial maps by the corner axiom, which are homotopy equivalences by [F3]. Hence $\mathrm{Map}(C,D)\to\mathrm{Map}(C,E)\to\mathrm{Map}(C,D')$ are homotopy equivalences, proving invariance in the target. [F2, F3, step 1.1]

2.2 Source invariance. Let $D$ be fibrant and let $C\to C'$ be a weak equivalence between cofibrant objects. A trivial cofibration between cofibrant objects becomes boundary-trivial after mapping into $D$ by the corner axiom; a trivial fibration $q\colon C\to C'$ between cofibrant objects has a section $s$ obtained by lifting $\varnothing\to C'$ through $q$ (using cofibrancy of $C'$), and the cotensor corner $q^{\partial\Delta[1]}$ is boundary-trivial by [F2]; lifting the cofibration $\varnothing\to C$ into it with endpoints $sq$ and $\mathrm{id}_C$ and the constant path on $q$ produces a homotopy $sq\simeq\mathrm{id}_C$ over $C'$, so $q$ is a homotopy equivalence and the contravariant mapping maps are homotopy equivalences. Factoring a general weak equivalence between cofibrant objects into a trivial cofibration followed by a trivial fibration gives invariance in the source. [F2, F3, step 1.1]

3.1 Enriched adjunction. Let $L\dashv R$ be an enriched Quillen adjunction, so $R$ preserves fibrations and trivial fibrations. For cofibrant $C$ and fibrant $D$ the enriched adjunction gives a strict isomorphism $\mathrm{Map}(LC,D)\cong\mathrm{Map}(C,RD)$, and $LC$ is cofibrant while $RD$ is fibrant; composing with the replacement comparisons of steps 2.1 and 2.2 yields the canonical derived mapping equivalence $\mathrm{RMap}(LX,Y)\simeq\mathrm{RMap}(X,RY)$ for cofibrant-fibrant representatives. The Quillen adjunction condition itself is the lifting formulation of [[def-model-category-and-quillen-adjunction]]. [F1, F2, step 1.1, step 2.1, step 2.2]

4.1 The $\pi_0$ interface. The functorial cofibrant then fibrant replacement supplies natural weak-equivalence zigzags between every object and a cofibrant-fibrant model, and weak maps between such models are homotopy equivalences by steps 2.1-2.2. Simplicially homotopic maps agree in the localization because the constant-path map is a weak equivalence with both endpoints as inverses; hence the category of homotopy classes of maps between cofibrant-fibrant models has the universal localization property for the weak equivalences. This proves the asserted $\pi_0$ description with no independent hammock, infinity-categorical localization or coherent-diagram strictification claimed. [F1, F2, F3, step 2.2, discharge-construct] ∎ 