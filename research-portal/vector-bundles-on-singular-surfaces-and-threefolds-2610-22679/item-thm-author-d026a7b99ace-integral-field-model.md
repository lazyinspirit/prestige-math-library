---
title: Integral oriented field coefficient comparison with actual Picard and
  support maps
status: draft
research_item: thm-author-d026a7b99ace-integral-field-model
dependency_level: 21
---

PDF p. 17: Corollary6.9 supported factor calculation

## Prerequisites

- [lem-adjudicate-6e70d30b9793-field-unit-zigzag](item-lem-adjudicate-6e70d30b9793-field-unit-zigzag)
- [lem-adjudicate-6e70d30b9793-picard-map-detection](item-lem-adjudicate-6e70d30b9793-picard-map-detection)
- [lem-adjudicate-6e70d30b9793-em-picard-square](item-lem-adjudicate-6e70d30b9793-em-picard-square)
- [lem-adjudicate-6e70d30b9793-chern-operation-transport](item-lem-adjudicate-6e70d30b9793-chern-operation-transport)
- [lem-adjudicate-6e70d30b9793-smooth-supported-gysin-transport](item-lem-adjudicate-6e70d30b9793-smooth-supported-gysin-transport)
- [thm-adjudicate-6e70d30b9793-oriented-field-map-input](item-thm-adjudicate-6e70d30b9793-oriented-field-map-input)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [prop-smooth-motivic-comparison](item-prop-smooth-motivic-comparison)
- [thm-author-16f30f6b95cb-lowweight-augmented-slice-comparison](item-thm-author-16f30f6b95cb-lowweight-augmented-slice-comparison)


## Statement
Assume the Axiom of Choice and the fixed compatible site and universe bounds of the supplied constructions. Fix a perfect field $k$. The classical coefficient theory here is ordinary Voevodsky motivic cohomology with its Bloch cycle model on smooth schemes. On smooth finite-type $k$-schemes and their closed-support restriction diagrams, the integral Spitzweck/classical coefficient theory used by Navarro and the supplied EM theory are related by the following specified natural equivalence: the unit-induced field zigzag $H_{\rm Spi}\leftarrow s^0\mathbf1_k\to s^0KGL_k$, followed by the inverse of the actual structured EM-to-cdh-to-represented comparison. This is multiplicative, unital and preserves the actual Picard first-Chern map. It therefore preserves the universal projective-relation Chern classes in every nonnegative degree. For every $i\geq1$, it preserves the corresponding completed pointed K-space Chern operations and their maps on closed-support fibers. The coefficient $c_0=1$ is preserved separately as the unpointed total-series constant; it supplies no additive-target support-fiber operation. For regular immersions between smooth schemes it also preserves the refined Gysin and forget-support maps; in particular it sends the positive refined point class to the positive EM point class. All statements are integral in every characteristic. No new smooth comparison or Gysin formalism on singular normal qcqs schemes is asserted.

## Statement references

[lem-adjudicate-6e70d30b9793-field-unit-zigzag](item-lem-adjudicate-6e70d30b9793-field-unit-zigzag)

[lem-adjudicate-6e70d30b9793-picard-map-detection](item-lem-adjudicate-6e70d30b9793-picard-map-detection)

[lem-adjudicate-6e70d30b9793-em-picard-square](item-lem-adjudicate-6e70d30b9793-em-picard-square)

[lem-adjudicate-6e70d30b9793-chern-operation-transport](item-lem-adjudicate-6e70d30b9793-chern-operation-transport)

[lem-adjudicate-6e70d30b9793-smooth-supported-gysin-transport](item-lem-adjudicate-6e70d30b9793-smooth-supported-gysin-transport)

[thm-adjudicate-6e70d30b9793-oriented-field-map-input](item-thm-adjudicate-6e70d30b9793-oriented-field-map-input)

[prop-smooth-motivic-comparison](item-prop-smooth-motivic-comparison)

[thm-author-16f30f6b95cb-lowweight-augmented-slice-comparison](item-thm-author-16f30f6b95cb-lowweight-augmented-slice-comparison)

## Facts & Assumptions
[A8] The current smooth comparison fixes the ordinary Voevodsky/Bloch model and the actual augmented EM comparison, with its AC premise. [prop-smooth-motivic-comparison](item-prop-smooth-motivic-comparison), [thm-author-16f30f6b95cb-lowweight-augmented-slice-comparison](item-thm-author-16f30f6b95cb-lowweight-augmented-slice-comparison)

[A9] Choice is inherited through the current smooth motivic comparison and its classical/cycle model. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[F1] [lem-adjudicate-6e70d30b9793-field-unit-zigzag](item-lem-adjudicate-6e70d30b9793-field-unit-zigzag), [lem-adjudicate-6e70d30b9793-picard-map-detection](item-lem-adjudicate-6e70d30b9793-picard-map-detection) and [lem-adjudicate-6e70d30b9793-em-picard-square](item-lem-adjudicate-6e70d30b9793-em-picard-square) specify the actual unit zigzag and prove the actual Picard-map square, with the exact primary input and its reading limits.

[F2] [lem-adjudicate-6e70d30b9793-chern-operation-transport](item-lem-adjudicate-6e70d30b9793-chern-operation-transport) identifies all universal Chern coefficients and, for $i\geq1$, the completed pointed K-space operations and their support fibers; the unit coefficient is preserved separately as an unpointed constant. [lem-adjudicate-6e70d30b9793-smooth-supported-gysin-transport](item-lem-adjudicate-6e70d30b9793-smooth-supported-gysin-transport) identifies the refined smooth Gysin and forget-support maps.

## Proof
**Given:** The fixed perfect field, smooth pairs, actual coefficient models, AC and compatible site and universe bounds in the statement.

**Goal:** Fill the orientation-preserving-map prerequisite, not only identify groups or conventions.

1.1 Apply [F1]. Its zigzag consists of the unit-induced ring maps and canonical structured graded comparisons. EM regular comparison applies because each smooth finite-type scheme over $k$ is regular Noetherian even when $k$ is not finite over its prime field. The Kan-extension argument identifies the actual Picard maps before restriction to $k$. Thus the equivalence preserves their full natural line-bundle maps. [F1, A9]

2.1 Transport Spitzweck's actual Picard map through the unit-induced ring zigzag. The primary input identifies its restriction to the reduced projective line with the unit-adjoint class, after the stated line/quotient and Tate-coordinate convention is matched. The unital maps of the zigzag preserve that class. Apply the Picard-map detector of [F1] with the represented slice coefficients: their negative weights vanish and they satisfy PBF. Thus this transported map is homotopic to the represented Picard map, as a natural map of Picard spaces. Combining it with the EM square of step 1.1 proves the claimed preservation of the actual first Picard operation, including descent data. [F1, A9, step 1.1]

3.1 Apply [F2]. Relation uniqueness identifies the actual universal Chern coefficients. For each $i\geq1$, functorial completion identifies the pointed K-space operations, and taking homotopy fibers of their restriction arrows identifies the supported operations and forget-support squares. In degree zero, the unital coefficient comparison instead preserves the ordinary constant $c_0=1$; no pointed additive-target support operation is constructed from that constant. On smooth regular pairs, the coefficient-independent purity map and matching Thom class identify refined Gysin. Thus the point generator and every stated sign are transported by the specified actual maps, with the positive-index range of the supplier retained. [F1, F2, step 1.1, step 2.1]

4.1 This is an integral statement: the field unit zigzag and the primary positive-characteristic specialization use no p-inversion. The construction is confined to the smooth site; the already defined EM operations on a singular qcqs ambient scheme are used via restriction to a smooth neighborhood and their existing support-to-global square. Hence no global normal qcqs claim is narrowed or replaced by a smooth one. [F1, F2, step 1.1, step 3.1] ∎

## Convention and source scope
Spitzweck Proposition 11.1 uses the tautological subline $\mathcal O(-1)$ in its line-parametrizing convention. The Picard operation assigns a line its own class. Concretely, $\mathbb P_{\rm lines}(E^\vee)\cong\mathbb P_{\rm quot}(E)$ identifies the dual of the tautological subline with the tautological quotient. Evaluate both Picard maps on that same line, and use the same Tate-coordinate identification for the unit-adjoint reduced class. The argument compares actual maps with these conventions; the symbol $\mathcal O(-1)$ alone neither proves nor refutes compatibility. EM v1 Remark 3.6 states its tower identification with then-in-preparation [7]; the additional BEM v1 constructions above supply the specified structured bridge, while BEM (6.4) is used for no multiplicative assertion.
