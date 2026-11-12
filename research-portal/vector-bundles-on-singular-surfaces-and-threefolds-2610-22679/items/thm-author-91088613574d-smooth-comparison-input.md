---
id: thm-author-91088613574d-smooth-comparison-input
kind: theorem
title: Elmanto–Morrow smooth comparison input
status: published
domain: mathematics
external_input: true
deps:
  - def-motivic-cohomology
  - def-motivic-filtration
  - def-bloch-higher-cycle-complex
  - math:def-axiom-of-choice
  - math:def-field
  - math:def-scheme-over-base
  - math:def-locally-finite-type-and-finite-type-morphism
  - math:def-smooth-morphism-schemes
  - math:def-derived-category-of-an-abelian-category
  - math:thm-abelian-groups-form-an-abelian-category
  - math:def-cochain-complex-in-an-abelian-category
  - def-multiplicative-filtered-spectrum
  - def-nonconnective-k-spectrum-interface
  - lem-adjudicate-d6ce097ccb62-finite-type-qcqs
dependency_roles:
  def-motivic-cohomology: mathematical-premise
  def-motivic-filtration: mathematical-premise
  def-bloch-higher-cycle-complex: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  math:def-field: mathematical-premise
  math:def-scheme-over-base: mathematical-premise
  math:def-locally-finite-type-and-finite-type-morphism: mathematical-premise
  math:def-smooth-morphism-schemes: mathematical-premise
  math:def-derived-category-of-an-abelian-category: mathematical-premise
  math:thm-abelian-groups-form-an-abelian-category: mathematical-premise
  math:def-cochain-complex-in-an-abelian-category: mathematical-premise
  def-multiplicative-filtered-spectrum: mathematical-premise
  def-nonconnective-k-spectrum-interface: mathematical-premise
  lem-adjudicate-d6ce097ccb62-finite-type-qcqs: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: literature-derived
sources:
  references:
    - title: Motivic cohomology of equicharacteristic schemes
      url: https://arxiv.org/pdf/2309.08463v1
      locator: Theorem 1.1(9), PDF page 4 of 74; §3.1, equation (3.1) and
        slice-filtration discussion, PDF pages 12–13 of 74
      statement: For a smooth scheme X over a field and j ≥ 0, the Elmanto–Morrow
        weight-j complex is equivalent to Bloch’s cycle complex shifted by −2j.
        Its motivic K-theory filtration is naturally equivalent, as a
        multiplicative filtered spectrum, to the filtration from Voevodsky’s
        slice filtration. Section 3.1 identifies the shifted cycle complex with
        classical motivic cohomology.
      hypotheses: X is quasi-compact and quasi-separated and smooth over a field; j is
        a nonnegative integer. The application below uses smooth finite-type
        schemes.
      reading_limits: "Historical reading record retained from the incoming generated
        item: Freshly read the exact v1 PDF extraction at its title/version,
        opening of Theorem 1.1, Theorem 1.1(9), and Section 3.1 through the
        classical slice-filtration description. Screenshot requests for PDF
        pages 4 and 12 failed with cache-miss errors; no fresh image inspection
        is claimed. The source proofs and motivic-homotopy foundations were not
        reconstructed. The numerical connectivity display in Section 3.1 is not
        imported. The explicit distinction between the literature construction
        and the Choice-qualified local cycle and perfect-K models is a local
        contract clarification. Current maintenance read the current declared
        supplier interfaces and this item; it claims no fresh reading of this
        primary PDF and no reconstruction of its proof."
local_argument_provenance: ai-altered
formulation_deps:
  - def-motivic-cohomology
  - def-motivic-filtration
  - def-bloch-higher-cycle-complex
  - math:def-axiom-of-choice
  - math:def-field
  - math:def-scheme-over-base
  - math:def-locally-finite-type-and-finite-type-morphism
  - math:def-smooth-morphism-schemes
  - math:def-derived-category-of-an-abelian-category
  - math:thm-abelian-groups-form-an-abelian-category
  - math:def-cochain-complex-in-an-abelian-category
  - def-multiplicative-filtered-spectrum
  - def-nonconnective-k-spectrum-interface
argument_deps:
  - def-motivic-cohomology
  - def-motivic-filtration
  - def-bloch-higher-cycle-complex
  - math:def-axiom-of-choice
  - math:def-field
  - math:def-scheme-over-base
  - math:def-locally-finite-type-and-finite-type-morphism
  - math:def-smooth-morphism-schemes
  - math:def-derived-category-of-an-abelian-category
  - math:thm-abelian-groups-form-an-abelian-category
  - math:def-cochain-complex-in-an-abelian-category
  - def-multiplicative-filtered-spectrum
  - def-nonconnective-k-spectrum-interface
  - lem-adjudicate-d6ce097ccb62-finite-type-qcqs
dependency_level: 14
---

## Statement
Let $k$ be a field, $X$ a smooth finite-type $k$-scheme, and $j\geq0$. The Elmanto–Morrow complex $\mathbb Z(j)_{\mathrm{mot}}(X)$ is equivalent in the derived category of abelian groups to Bloch's cycle complex, regarded cohomologically and shifted by $-2j$. It consequently represents the classical Voevodsky weight-$j$ motivic cohomology of $X$.

For the filtration comparison in the selected local perfect-$K$-theory realization, assume the Axiom of Choice and its fixed suitable universes. Under these assumptions the Elmanto–Morrow filtration of $K(X)$ is naturally equivalent as a multiplicative filtered spectrum to the filtration arising from Voevodsky's slice filtration.

The first paragraph imports the Elmanto–Morrow and classical complexes as used in the cited source, including Bloch's model in §3.1. To represent this comparison by the declared local motivic and cycle constructions, assume the Axiom of Choice and the fixed compatible nested-universe, scheme, site and coefficient bounds of the local motivic functor, with $\omega$ in its scheme-data universe. Both selected local realizations carry these inherited premises. The published complex comparison itself retains its stated field, smoothness and weight hypotheses; no foundational necessity for the additional local premises is asserted. The slice filtration is the construction recalled in the same source. A multiplicative filtered equivalence is an equivalence of coherent towers preserving transitions, units, products and their higher compatibilities.

Here finite type and smoothness concern the structure morphism $X\to\operatorname{Spec}k$. For a homological complex $C_\bullet$, the cohomological convention is $C^q=C_{-q}$ with differential $d^q=\partial_{-q}$. The shift is $C[m]^q=C^{q+m}$ with differential $(-1)^m d^{q+m}$; use $m=-2j$ in the comparison.

## Statement references
[[def-motivic-cohomology]]

[[def-motivic-filtration]]

[[def-bloch-higher-cycle-complex]]

[[math:def-axiom-of-choice]]

[[math:def-field]]

[[math:def-scheme-over-base]]

[[math:def-locally-finite-type-and-finite-type-morphism]]

[[math:def-smooth-morphism-schemes]]

[[math:def-derived-category-of-an-abelian-category]]

[[math:thm-abelian-groups-form-an-abelian-category]]

[[math:def-cochain-complex-in-an-abelian-category]]

[[def-multiplicative-filtered-spectrum]]

[[def-nonconnective-k-spectrum-interface]]

## External input
This is the cited theorem's smooth comparison, together with the identification recalled in §3.1. It is imported from the literature; its geometric proof and motivic-homotopy constructions are not locally reconstructed. The restriction to finite type matches the selected local cycle model. Invoking either the selected local motivic complex or the selected local cycle complex retains the Choice and compatible size premises in the Statement and [A1]. The unqualified imported comparison uses the literature constructions.

## Facts & Assumptions
**Given:** A field $k$, a smooth finite-type $k$-scheme $X$, and an integer $j\geq0$; for either selected local complex realization or the selected local filtration realization, the Axiom of Choice and the compatible universe and site-size bounds stated above.

**Goal:** Supply the complex and filtered-spectrum comparisons under their respective hypotheses.

[F1] Elmanto–Morrow Theorem 1.1(9) states the smooth complex and multiplicative filtered-spectrum equivalences; §3.1 identifies the shifted cycle complex with the classical motivic complex. These are the precise imported assertions in reference 0, including the literature constructions on the classical side.

[F2] The field, structure-morphism, finite-type and smoothness conditions are those of [[math:def-field]], [[math:def-scheme-over-base]], [[math:def-locally-finite-type-and-finite-type-morphism]] and [[math:def-smooth-morphism-schemes]]. The domain check that $X$ is qcqs is supplied by [[lem-adjudicate-d6ce097ccb62-finite-type-qcqs]].

[F3] [[math:thm-abelian-groups-form-an-abelian-category]] permits the abelian-groups specialization of [[math:def-derived-category-of-an-abelian-category]], including its cochain shift and stated size convention. [[math:def-cochain-complex-in-an-abelian-category]] supplies the chain/cochain reindexing convention. No additional Hom-set or local-smallness claim is made here.

[F4] [[def-motivic-cohomology]] specifies the Elmanto–Morrow complex and its motivic cohomology notation on qcqs field-schemes.

[A1] The assumed [[math:def-axiom-of-choice]] and the fixed compatible nested-universe, scheme, site and coefficient bounds of [[def-motivic-cohomology]] discharge the premises of that local motivic model and [[def-bloch-higher-cycle-complex]] when the selected local complexes are used in step 1.1. For step 2.1 retain the same Choice premise and the additional compatible universes of [[def-nonconnective-k-spectrum-interface]], [[def-motivic-filtration]] and [[def-multiplicative-filtered-spectrum]]. These supply, respectively, the selected perfect-$K$ realization, its motivic tower and the coherent meaning of its multiplicative structure. Without these local premises, step 1.1 invokes only the literature constructions and comparison imported in [F1]. This records supplier contracts, not a claim of foundational necessity for the published theorem.

## Proof
1.1 By [F2], $X$ is qcqs, and its smoothness and nonnegative integer weight satisfy [F1]. Apply its imported complex comparison to the literature constructions. The derived-category and reindexing conventions in [F3] give the asserted shifted equivalence and classical interpretation. When representing this comparison by the selected local complexes, invoke both the motivic model of [F4] and the unnormalized Bloch model under all the Choice and size premises of [A1]. These are the selected local realizations of the same imported comparison. Its literature statement remains independent of invoking those local models, and its geometric proof is not reconstructed. [given, F1, F2, F3, F4, A1]

2.1 For the filtration assertion, invoke the selected local $K$ spectrum, tower and coherent multiplicative interface under [A1]. The filtered comparison in [F1] then identifies this tower with the classical slice tower as a multiplicative filtered spectrum, including the coherent transitions and products. Together with step 1.1 this gives both assertions with their respective premises; no numerical connectivity estimate from §3.1 is used. [A1, F1, step 1.1] ∎
