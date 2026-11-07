---
id: thm-cft-conformal-block-modular-functor-is-rt
kind: theorem
title: RT comparison for the strongly rational VOA modular functor
status: draft
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 16
domain: mathematics
library: mathematics
deps:
- def-cft-strong-rational-voa
- def-cft-modular-functor-and-sewing
- def-cft-modular-functor-equivalence
- def-modular-ribbon-category-and-hopf-link-data
- thm-cft-conformal-blocks-form-modular-functor
- thm-cft-strongly-rational-module-category-is-modular
- thm-weighted-rt-tqft-and-factorization
- lem-cft-cyclic-genus-zero-rt-extension-classification
dependency_roles:
  def-cft-strong-rational-voa: mathematical-premise
  def-cft-modular-functor-and-sewing: mathematical-premise
  def-cft-modular-functor-equivalence: mathematical-premise
  def-modular-ribbon-category-and-hopf-link-data: mathematical-premise
  thm-cft-conformal-blocks-form-modular-functor: mathematical-premise
  thm-cft-strongly-rational-module-category-is-modular: mathematical-premise
  thm-weighted-rt-tqft-and-factorization: mathematical-premise
  lem-cft-cyclic-genus-zero-rt-extension-classification: mathematical-premise
justified_by: []
aliases: []
physical_scope: null
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
  - title: Chiara Damiolini and Lukas Woike, Modular Functors from Conformal Blocks
      of Rational Vertex Operator Algebras
    url: https://arxiv.org/pdf/2507.05845v2
    locator: Sections 3.2–3.4 and 4.2–4.5; Theorems 4.2.2, 5.3.1, 5.5.1, and the Section
      5.4 comparison discussion.
  - title: Adrien Brochier and Lukas Woike, A Classification of Modular Functors via
      Factorization Homology
    url: https://arxiv.org/pdf/2212.11259v5
    locator: Theorem 6.6 and its proof; Theorem 6.8 and its proof; Proposition 7.7,
      Theorem 7.8, Corollary 8.1 and Corollary 8.3 with their hypotheses.
  - title: Bojko Bakalov and Alexander Kirillov Jr., Lectures on Tensor Categories
      and Modular Functor, Chapter 5
    url: https://www.math.stonybrook.edu/~kirillov/tensor/chapter5.ps.gz
    locator: Section 5.1, especially Definition 5.1.12, printed pp. 97–98; Section
      5.2, Theorem 5.2.3, pp. 99–103; Section 5.7, pp. 127–130. Preliminary lecture-note
      version.
---

## Statement

For a strongly rational VOA $V$, let $F_V$ be the conformal-block modular functor of Damiolini–Woike Theorem 4.2.2 and let $\mathcal C_V$ be the modular fusion category induced from its genus-zero sewing structure in Theorem 5.3.1. Theorem 5.5.1 identifies $F_V$, up to a contractible space of choices, with the unique modular functor extending $\mathcal C_V$ from genus zero to all surfaces, and gives the corresponding RT-type modular-functor equivalence. This compares $F_V$ with the functor-induced category; it does not identify that tensor structure with the Huang–Lepowsky one.

## Statement references

[[def-cft-strong-rational-voa]]

[[def-cft-modular-functor-and-sewing]]

[[def-cft-modular-functor-equivalence]]

[[def-modular-ribbon-category-and-hopf-link-data]]

[[thm-cft-conformal-blocks-form-modular-functor]]

[[thm-cft-strongly-rational-module-category-is-modular]]

[[thm-weighted-rt-tqft-and-factorization]]

## Facts & Assumptions

**Given:** The original strongly rational VOA, its constructed conformal-block modular functor and its functor-induced category. Use the source-compatible extension-comparison convention, with the full cyclic genus-zero identification fixed below.

[F1] [[thm-cft-conformal-blocks-form-modular-functor]] supplies the complete coinvariant modular functor and its Hodge extension, including unmarked values, tangent descent, logarithmic action and coherent formal sewing.

[F2] [[thm-cft-strongly-rational-module-category-is-modular]] supplies its induced finite semisimple modular ribbon category, with the actual duality, twist, trace and nondegenerate Hopf matrix. The category here is the functor-induced one required in the Statement.

[F3] [[thm-weighted-rt-tqft-and-factorization]] supplies the weighted RT construction, with actual coherent circle-cutting inverses and its integer-weight anomaly.

[F4] [[lem-cft-cyclic-genus-zero-rt-extension-classification]] proves the full cyclic genus-zero identification, the common boundary-skein extension, and its universality and contractible extension space. It also specifies the scalar pushout of the RT framing and the resulting equivalence of the scalar-central extensions.

[F5] [[def-cft-modular-functor-equivalence]] specifies the source comparison maps and their coherent localization. It includes the direct matched-extension model furnished by F4 as a special case. It does not identify anomalies from an underlying braided equivalence alone.

## Proof

1.1 Apply F1 and F2 to the original strongly rational hypotheses. They supply exactly F_V and the induced modular fusion category C_V in the Statement. F3 therefore supplies its RT functor. These prerequisites are actual proved suppliers; no former A1–A6 or missing induced-category premise is retained as an extra assumption. [given, F1, F2, F3, algebra]

2.1 F4 first identifies their complete cyclic framed genus-zero data: the two-point coinvariant pairing is transported through the vacuum functor, and the three-point representing maps preserve cups, caps, the chosen duality, rotation and all coupon operations. Its universal boundary-skein construction then gives the specified comparison zigzag over the surface operad. For a direct scalar model, it pushes the integer RT weight out by its actual scalar kappa and proves that the Hodge and scalar RT extensions are both equivalent to that common extension. Thus all genus-zero and anomaly data required by F5 are explicitly supplied. [F3, F4, F5, step 1.1, construct]

3.1 By F4 the bicategory of extensions of these fixed cyclic data is equivalent to a slice with its terminal identity object; its nerve is contractible. Hence the comparison and its coherent relative choices have precisely the contractible-space qualification in the Statement. The constructed equivalence respects pairings, duals, mapping-class actions, vacuum insertion and every sewing by F4–F5, so it is the claimed RT-type modular-functor equivalence. No comparison with the Huang–Lepowsky tensor structure and no full local CFT is used or inferred. [F4, F5, step 2.1, algebra] ∎

## Comparison diagram

The two arrows are the actual universal comparison maps, carrying pullback-equivalent modular algebras and preserving the fixed cyclic genus-zero data. Their scalar-central models are equivalences of extension groupoids; the original integer-weight RT model compares through its stated scalar pushout.

~~~tikzcd
(Q_V,F_V) \arrow[r] & (\mathsf{Surf}_{A},F_A) & (Q_{\mathrm{RT}},F_{\mathrm{RT}}) \arrow[l]
~~~

## Scope

The proof compares the modular functor to the RT-type extension of its own induced modular category. It does not infer an equivalence with another tensor structure, equality of a character matrix and the categorical Hopf matrix, or existence of full local correlators.
