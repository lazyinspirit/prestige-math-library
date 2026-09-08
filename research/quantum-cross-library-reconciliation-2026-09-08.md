# Quantum-groups cross-library reconciliation — 2026-09-08

Supervisor integration: the canonical plan now contains every page delta in
this receipt. All five unresolved gates are mirrored in
`research/four-track-proof-gates.json`; the combined checker fails while any
remains open. Zero missing declared IDs is not a proof-adequacy certificate.

## Decision

The quantum-groups block adds **no Phase 2 root pair**. Its direct published
consumer inventory is empty, and following declared item dependencies in
reverse gives an empty transitive published consumer inventory as well. The
provisional Phase 2 total therefore remains 142 pairs. This is only a demand
decision: all sixteen quantum pages are unbuilt, and page registration or page
closure alone does not establish proof adequacy.

The existing registered block remains eight adjacent A/B pairs at canonical
orders 767--782:

| pair | orders | A page | B page |
|---|---:|---|---|
| QG-1 | 767--768 | `quantized-enveloping-algebras-and-quantum-serre-relations` | `quantized-enveloping-algebras-and-quantum-serre-relations-examples` |
| QG-2 | 769--770 | `divided-powers-integral-forms-and-quantum-highest-weights` | `divided-powers-integral-forms-and-quantum-highest-weights-examples` |
| QG-3 | 771--772 | `kashiwara-operators-and-crystal-lattices` | `kashiwara-operators-and-crystal-lattices-examples` |
| QG-4 | 773--774 | `tensor-product-crystals-and-highest-weight-crystal-uniqueness` | `tensor-product-crystals-and-highest-weight-crystal-uniqueness-examples` |
| QG-5 | 775--776 | `balanced-triples-and-global-crystal-bases` | `balanced-triples-and-global-crystal-bases-examples` |
| QG-6 | 777--778 | `quantum-affine-type-a-and-level-one-fock-space` | `quantum-affine-type-a-and-level-one-fock-space-examples` |
| QG-7 | 779--780 | `klr-algebras-induction-and-quantum-serre-categorification` | `klr-algebras-induction-and-quantum-serre-categorification-examples` |
| QG-8 | 781--782 | `cyclotomic-klr-algebras-and-highest-weight-categorification` | `cyclotomic-klr-algebras-and-highest-weight-categorification-examples` |

No new page pair and no order change is proposed.

## Exact canonical-plan deltas

The binding quantum `pages.json` and prose now require these changes to the
canonical plan. The central plan is deliberately not edited in this receipt.

| page | exact delta | reason |
|---|---|---|
| QG-1 A | add `permutation-statistics-inversions-and-eulerian-numbers` | owns published `def-q-integer-q-factorial-and-q-multinomial` |
| QG-1 A | add `harish-chandra-isomorphism-casimir-and-central-characters` | owns published `thm-pbw-ordered-monomial-basis-for-the-enveloping-algebra`, used only in the classical coideal/primitive lemma inside the noncircular quantum-shuffle proof |
| QG-5 A | remove `graded-bimodules-and-tensor-functors` if present in an older copy | balanced triples and finite tensor bars use no graded-bimodule theorem |
| QG-7 A | add `balanced-triples-and-global-crystal-bases` | the negative-half projective/global-basis theorem consumes QG-5's canonical/global-basis comparison |
| QG-8 A | remove `modular-representations-and-projective-covers` if present in an older copy | HA-19 reaches the needed finite-dimensional projective/simple infrastructure; no exact QG-8 item depends directly on that page |

All other page edges stay as registered. In particular QG-6 keeps RG-8,
QG-7 keeps HA-18 and HA-19, and QG-8 keeps HA-19.

## Repaired item inventory and seams

The synchronized proposed inventory contains 148 identities: 113 A-page items
and 35 B-page examples/counterexamples. These are planning identities, not
published items.

The substantive changes are:

1. `prop-specialization-at-q-one-recovers-the-classical-enveloping-relations`
   moved from QG-1 to QG-2, after
   `thm-integral-triangular-decomposition-for-the-lusztig-form`, and now names
   RL-12's `thm-serre-presentation-of-a-kac-moody-algebra`. Rational-form
   substitution at `q=1` is not a proof.
2. The overstrong abstract-graph claim
   `thm-uniqueness-of-normal-highest-weight-crystals` was replaced by
   `thm-crystal-bases-of-integrable-modules-decompose-into-highest-weight-crystals`.
   This is Kashiwara's integrable-module theorem; rank-one normality alone does
   not classify an arbitrary abstract coloured graph.
3. QG-1 gained `lem-q-binomial-expansion-for-q-commuting-elements` and
   `lem-coproduct-preserves-the-positive-and-negative-quantum-serre-ideals`;
   QG-2 gained explicit divided-power/toral reordering and toral-specialization
   lemmas. These isolate small computations but do not close the Hopf or
   integral source routes.
4. QG-1 gained the noncircular Enriquez shuffle/PBW chain
   `def-formal-quantum-shuffle-borel-for-a-symmetrizable-cartan-datum` ->
   `lem-quantum-serre-sums-vanish-in-the-formal-quantum-shuffle-algebra` ->
   `lem-a-two-sided-coideal-in-an-enveloping-algebra-is-generated-by-its-primitive-part` ->
   `lem-opposite-symmetrizable-kac-moody-borels-are-root-degreewise-dual-lie-bialgebras` ->
   `thm-the-formal-quantum-serre-half-embeds-in-the-quantum-shuffle-algebra-and-is-degreewise-free` ->
   `thm-generic-quantum-serre-halves-have-classical-pbw-ranks-and-a-nondegenerate-hopf-pairing` ->
   `lem-the-generic-borel-half-and-opposite-half-form-a-dj-crossed-double`.
   The chain authors both q-binomial calculations abbreviated by Enriquez,
   the degreewise adic rank argument, scalar reflection, and crossed-double
   presentation maps. Its classical-limit comparison remains conditional on
   the corrected symmetrizable RL-12 Serre theorem and its own source route;
   this receipt does not turn an unbuilt theorem into a proof.
5. QG-5 gained the finite tensor-bar chain
   `def-root-height-completion-for-weightwise-quasi-r-intertwiners` ->
   `def-drinfeld-hopf-pairing-between-positive-and-negative-quantum-halves` ->
   `lem-the-drinfeld-hopf-pairing-is-nondegenerate-in-each-root-degree` ->
   `lem-homogeneous-dual-basis-sums-are-basis-independent-and-weightwise-finite` ->
   `thm-the-weightwise-quasi-r-intertwiner-exists-and-is-unique` ->
   `lem-quasi-r-intertwining-determines-the-inverse-and-coproduct-factorizations` ->
   `thm-quasi-r-tensor-bars-on-finite-products-of-based-integrable-modules`.
   The terminal theorem is the exact KL-6 interface.
6. QG-5 gained
   `thm-global-basis-projection-from-the-negative-half-to-a-highest-weight-module`,
   including the zero-or-corresponding-basis-vector alternative.
7. QG-7 gained
   `thm-self-dual-indecomposable-klr-projectives-give-the-negative-half-lower-global-basis`.
8. QG-8 gained
   `lem-cyclotomic-extension-of-scalars-respects-the-based-quotient`; the
   cyclotomic lower-global-basis theorem now depends on this lemma instead of
   being inferred from a bare Grothendieck-group isomorphism.

The four QG-1 B items now end at
`thm-quantized-sl-two-string-formulas`, not the moved QG-2 specialization.
Every B page remains a leaf: its items depend on its own A page, no A item
depends on a B item, and no B item reaches a later page.

## Exact upstream ownership

The new non-quantum item edges resolve as follows.

| supplier page | exact supplied identities | state |
|---|---|---|
| `permutation-statistics-inversions-and-eulerian-numbers` | `def-q-integer-q-factorial-and-q-multinomial` | published |
| `tensor-products-of-modules` and its published prerequisite closure | `thm-tensor-product-of-algebras-over-a-commutative-ring`; ordinary algebra/tensor infrastructure | published |
| `harish-chandra-isomorphism-casimir-and-central-characters` | `thm-pbw-ordered-monomial-basis-for-the-enveloping-algebra` for the classical enveloping-algebra filtration only | published |
| `kac-moody-algebras-from-generalized-cartan-matrices` | `def-generalized-cartan-matrix`; `def-realization-of-a-generalized-cartan-matrix`; `def-symmetrizable-generalized-cartan-matrix`; `thm-serre-presentation-of-a-kac-moody-algebra` | planned RL-12 |
| `integrable-highest-weight-kac-moody-modules` | the classical integrable highest-weight input named by QG-2's page edge | planned RL-14 |
| `young-diagrams-tableaux-and-permutation-modules` | `def-partition-young-diagram-and-conjugate-partition`; `def-removable-and-addable-nodes-of-a-partition`; `def-dominance-order-on-partitions` | planned RG-8 |
| `graded-bimodules-and-tensor-functors` | `def-graded-ring-module-bimodule-and-internal-shift`; `def-graded-balanced-tensor-product-and-homogeneous-hom`; `thm-bimodule-tensor-exactness-and-projective-preservation`; `thm-graded-bimodule-tensor-hom-adjunction` | planned HA-18 |
| `grothendieck-groups-and-graded-cartan-pairings` | split/graded Grothendieck groups, functoriality, shift-orbit bases, and the projective/simple Hom pairing named explicitly in QG-7/QG-8 | planned HA-19 |

HA-19's prerequisite closure reaches published
`modular-representations-and-projective-covers`; QG-8 does not duplicate that
page edge. RL-12 and RL-14 already occur in the provisional Phase 2 closure for
unrelated demand. None of RG-8, HA-18, or HA-19 becomes a new Phase 2 root merely
because this future quantum track plans to use it.

No proposed quantum dependency resolves to an item with `proved_here: false`.
Definitions in the exact dependency graph resolve to ordinary published or
planned suppliers rather than recorded stand-ins. A page-level prerequisite
closure may pass through a page containing unrelated recorded remarks; that is
not an item dependency and is not evidence that a proof route is closed.

## Published and planned consumer inventory

The cross-track dependency audit over `deps`, `justified_by`, and
`forward_refs`, checked against actual library publication status, finds:

- direct published consumers of any QG proposed item: **none**;
- transitive published consumers of any QG proposed item: **none**;
- published pages directly requiring a QG page: **none**.

Consequently there is no evidence-backed quantum retirement root. The planned
consumer cone is nonempty and is frozen at these interfaces:

| planned consumer | exact quantum seam |
|---|---|
| KL-6 `parabolic-category-o-and-fock-space-bases` | `thm-the-qg-tensor-product-bar-is-triangular-and-compatible-with-fock-truncations` directly consumes QG-5 `thm-quasi-r-tensor-bars-on-finite-products-of-based-integrable-modules`; KL-6 owns column-wedge triangularity, truncation embeddings, and the unbounded/direct-limit passage |
| SYMR-10 `level-one-fock-space-and-residue-crystals` | consumes QG-6 `def-level-one-partition-fock-space-and-node-residues`, `thm-the-crystal-of-level-one-fock-space-is-the-good-node-partition-graph`, `thm-the-empty-component-is-the-highest-weight-crystal-b-lambda-zero`, and `thm-the-basic-representation-global-basis-is-unitriangular-in-the-partition-basis` |
| SYMR-11 `cyclotomic-hecke-and-quiver-hecke-algebras` | its type-A specialization consumes QG-6 `def-cyclic-affine-type-a-cartan-datum`, QG-7 `def-quiver-hecke-klr-algebra-for-a-symmetrizable-cartan-datum`, and QG-8 `def-cyclotomic-klr-quotient-at-a-dominant-weight`; the Hecke--KLR bridge additionally consumes QG-7 `thm-klr-pbw-basis-theorem` and grading |
| SYMR-12 `ariki-categorification-and-graded-decomposition-numbers` | `prop-qg8-categorification-transports-across-the-hecke-klr-bridge` consumes QG-8's separate projective K0, module G0, lower-global, and upper-global basis theorems; its Specht restriction theorem consumes QG-8 induction/restriction |

These planned consumers do not count as current published impact.

## Mathematical boundary conditions

The finite tensor-bar theorem is restricted to finite tensor products of based
integrable modules in the finite-weight-space highest-weight category `O_int`,
including the finite-degree polynomial type-A modules used in KL-6. The
bounded-above weight support makes the quasi-`R` action finite on each tensor;
finite-dimensional weight spaces alone are not used as a substitute for that
support condition. The theorem must prove the
intertwining identity, involution, integral-lattice preservation,
parenthesization independence, and locally finite dominance triangularity. It
does not construct a completed universal `R`-matrix, apply to arbitrary
two-sided-unbounded integrable modules, or prove a semi-infinite direct-limit
theorem.

The KLR categorification of the negative half remains all-symmetrizable under
its stated nondegeneracy conditions, but the indecomposable-projective/global-
basis identification is only asserted for symmetric Cartan data over
characteristic zero with the quiver-geometric parameter choice. QG-8 uses the
same regime for its lower/upper global-basis claims. Extension to arbitrary
`Q_ij` requires a separately proved parameter-invariance theorem. The Fock
space relations retain the `e=2` double-edge case, and K0 and G0 remain distinct.

The page graph is acyclic, all same-page item dependencies point backward, and
all cross-page item dependencies point to earlier pages after the canonical
plan deltas above. The machine audit reports no dependency cycle and no
recorded-item path for the quantum inventory.

## Remaining source gates before authoring

The full-text checks support the corrected crystal theorem and the statement
and downstream consequences of the finite tensor-bar interface, but they do
not supply every proof behind those statements. They expose five authoring
gates:

1. **Source-open, locally decomposed:** a complete relation-by-relation proof
   of the QG-1 Hopf formulas. The q-commuting binomial and Serre-ideal lemmas
   now expose the nontrivial local calculation, but the read JKK text states
   the structure by reference rather than proving it.
2. **Route repaired, conditional verification obligation:** Enriquez §§2.1--2.2
   and Appendix A give an arbitrary finite-rank symmetrizable shuffle proof of
   half-PBW and the nondegenerate opposite-half pairing. The seven explicit
   QG-1 joints supply its cited/abbreviated Serre and pairing-radical
   cancellations, classical Borel duality, adic torsion/rank argument, generic
   scalar reflection, and crossed-double transport to full triangularity.
   Authoring must verify every joint and the corrected symmetrizable RL-12
   Serre supplier route; later QG-2 cannot be used circularly.
3. **Source-open and PBW-dependent:** a complete integral triangular-
   decomposition and toral-quotient `q=1`
   specialization proof for QG-2;
4. **Source-open in the stated scope, with the finite-type calculation read:**
   Lacabanne, §1.7, Proposition 1.14, Lemmas 1.15--1.16 and Proposition 1.17,
   explicitly proves homogeneous quasi-`R` intertwining, the two-sided inverse,
   and both coproduct factorizations for a finite-dimensional simple Lie
   algebra. It cites rather than proves the upstream nondegenerate pairing and
   PBW/dual-basis inputs, and it does not cover the planned general
   symmetrizable or divided-power-integral statement. Brundan and Luo--Wang
   likewise send the general key theorem to Lusztig. Thus the finite-rank
   type-A KL-6 truncation route has a checked calculation conditional on the
   explicit earlier QG inputs, but the QG-wide gate remains open.
5. **Missing mathematical supplier stack:** the QG-7 generic projective/global-
   basis theorem. Varagnolo--Vasserot §§1.2--1.3 and 4.6--4.10 require
   equivariant constructible/perverse derived categories, Verdier duality,
   decomposition/semisimplicity, equivariant Ext and Borel--Moore convolution,
   equivariant formality/base change, and Lusztig's perverse-sheaf realization
   of the canonical basis. The present library supplies none of that stack,
   and Khovanov--Lauda I states the general identification as a conjecture.

Jeong--Kang--Kashiwara states or cites the first structural results but does not
itself close those proof routes. Brundan supplies weightwise finiteness,
finite-product compatible bars, and the type-A triangular/lattice consequences,
while Lacabanne supplies the finite-type quasi-`R` calculation but not its
cited pairing/PBW inputs or the general/integral extension. Bershtein's
finite-type lecture notes leave the key steps as problems with hints, and the
Yale typed notes were not retrieved through their expired TLS endpoint. These gates are
recorded in `quantum-groups-planning/source-manifest.json`; the geometric gate
is also the central `QG-GEOMETRIC-GLOBAL-BASIS` proof gate. QG-8's
extension-of-scalars lemma is proof-sized conditional on QG-7: QG-5 supplies
the zero-or-basis-vector class formula, and HA-19's projective shift-orbit basis
turns nonnegative Krull--Schmidt coefficients into the object-level
indecomposable-or-zero statement. It cannot bypass the QG-7 gate. Therefore
this reconciliation does not claim that the unbuilt pages are ready to
publish.
