# phase-2-wave-1 — Alpha group `a` — Step 3 scaffold review

Group `a` covers batches `1`, `3`, and `6`. I reviewed all five
assigned A/B pairs from the current manifests, coverage ledgers, Beta notes,
the binding track designs, `research/plan-spec.json`, and the published
prerequisite interfaces. The review covers 89 A items and 26 B items.

All five pair verdicts are **insufficient** on the 2026-09-08 bytes. Their
batch-local mathematics is mostly ready, but the scaffold contract requires
the complete transitive page and item closure, not merely sound direct items.
The live plan still makes every assigned pair inherit B pages as suppliers;
batches 1 and 6 also retain explicit uncompleted full-closure audits. The
quantitative-hyperbolicity pair has one additional undeclared choice
dependency in its filling converse.

Machine-readable verdicts are in
`research/phase-2-wave-1-alpha-a-step3-verdicts.json`.

| batch | A page | A/B items | verdict | blocking findings |
|---:|---|---:|---|---|
| 1 | `small-cancellation-disc-diagrams-and-torsion-toolkit` | 17/4 | **insufficient** | `B1-CLOSURE`; seven inherited B-supplier edges |
| 1 | `quantitative-hyperbolic-geometry-toolkit` | 29/5 | **insufficient** | `B1-CLOSURE`; undeclared ultrafilter lemma/choice cost; eleven inherited B-supplier edges |
| 3 | `modular-traces-and-brauer-character-independence` | 7/3 | **insufficient** | eighteen inherited B-supplier edges |
| 3 | `group-homology-transfer-and-low-degree-exact-sequences` | 21/3 | **insufficient** | empty Künneth B supplier and thirty-five other inherited B-supplier edges |
| 6 | `hall-malcev-coordinates-and-bass-guivarch-growth` | 19/7 | **insufficient** | `BG-CLOSURE`; one inherited B-supplier edge |

## Direct mathematical review

The direct SC route is coherent after Beta's repairs: symmetrisation and pieces
precede reduced/minimal diagrams; the balloon construction proves both
directions of van Kampen; cancellable-pair surgery and the block-cut
decomposition handle singular diagrams; the curvature/shell argument feeds
Greendlinger, Dehn reduction, linear area, the periodic-word lemma, and the
torsion theorem in proof order. The four B items consume only the owned A
interface.

The direct HG route correctly separates slim-triangle conventions, local
geodesics, the explicit Morse constant, quasi-isometry transport, Dehn
presentations, the filling converse, stable length and centralizers, and the
sequential boundary/dynamics package. The five B items are leaves. One proof
contract is nevertheless incomplete as dependency metadata:
`lem-linear-isoperimetry-implies-uniformly-thin-geodesic-bigons` explicitly
selects an asymptotic cone via a nonprincipal ultrafilter. Its current item
closure reaches neither `def-ultrafilter` nor `thm-ultrafilter-lemma`, the
page does not require `filters-and-ultrafilters`, and the statement does not
state the choice cost. The strategy's alternative “replace ... by an
elementary proved version” does not identify such a proof or its
dependencies. Beta 1 must either:

1. add `filters-and-ultrafilters` to the A-page requirements and
   `thm-ultrafilter-lemma` to the lemma's item dependencies, state the choice
   hypothesis, and construct the free ultrafilter by extending the cofinite
   filter; or
2. replace the asymptotic-cone paragraph with a complete, specifically
   scaffolded elementary proof and explicit earlier dependencies.

No new prerequisite pair is required for that repair: the earlier
`filters-and-ultrafilters` A page already contains the needed theorem.

The direct modular-trace route is adequate. It uses the semisimple quotient to
isolate simple-module traces, restricts a matrix to its prime-to-p part,
lifts residue roots uniquely in the complete DVR, and reduces a
minimum-valuation integral relation to a trace-one matrix unit contradiction.
The cyclic and S3 B computations use only the owned A chain and earlier
A-page facts.

The direct low-degree group (co)homology route is also adequate after the
revisions recorded by Beta 3. It fixes the left-module/right-transversal bar
conventions, checks the transfer chain map, derives finite-group annihilation,
constructs the free-presentation bicomplex and its low-degree filtration
explicitly, and proves restriction/inflation/transgression exactness by
crossed homomorphisms and extension data. The three B examples are leaves. Its
failure is inherited: the plan sends
`group-cohomology-as-a-derived-functor` to the empty
`kunneth-exactness-and-splittings-over-principal-ideal-domains-examples`
page. Both that B page and its A companion currently have zero
items. The binding HA-12 design instead requires
`ext-and-balanced-resolutions`, `tor-flatness-and-global-dimension`, and
`the-group-algebra-and-representations` — this is a plan repair, not a reason to pretend the
empty pair is built. A single authorized plan/prose-scaffold writer must
install the binding HA-12 requirements and the Group Theory section 30.2
requirements.

The direct Hall–Mal'cev/Bass–Guivarc'h route preserves the corrected
torsion-sensitive mathematics. It does not claim all lower-central quotients
of a torsion-free nilpotent group are torsion-free; finite carries remain in
the coordinate system, weights are ambient lower-central weights, both
distortion inequalities are present, and the coordinate-box estimates prove
upper and lower polynomial growth. Its seven B examples/counterexamples are
leaves.

No direct or transitive item edge found by a focused traversal of the manifests
and published item headers reaches a recorded-not-proved item,
`deferred-set-theory-beyond-choice`, or an item homed there. No source
drop or `source_resolution` decision exists in the assigned coverage.

## Source adjudication

All 22 active source records are fetch-verified and have exact locators in the
owned coverage. The proof-bearing stacks are:

- SC: Touikan's complete combinatorial-group-theory notes/PDF and Lipschutz's
  complete 1964 paper, including the van Kampen, singular-diagram,
  Greendlinger, periodic-word, and torsion passages.
- HG: Druţu–Kapovich's old and corrected editions, Hamann's complete
  hyperbolic-group chapter, Canary's boundary-dynamics proofs,
  Gouëzel–Shchur, and the two complete AFP theory sources. The exact constant
  `92 lambda^2 (epsilon + 3 delta)` is backed by the formal AFP proof rather
  than attributed to the weaker printed exposition.
- modular traces: Webb, Pound/Martin, the Yanqi Lake algebra lectures, Halle
  §5.3, and Stacks Project §10.153. The Stacks Newton-lifting proof supplies
  the complete-DVR root-lifting generality.
- low-degree group (co)homology: Löh §§1.7.3 and 3.2, Weibel Chapter 6
  §§6.4/6.7/6.8, and Dekimpe–Hartl–Wauters §§2–5 and §10.2. General
  spectral-sequence machinery not proved in those selected passages is not
  silently imported; the manifest expands the needed low-degree chase.
- BG: Löh's growth section plus both Druţu–Kapovich editions. The corrected
  837-page edition supplies the finite-carry, distortion, coordinate-box, and
  Bass–Guivarc'h passages and controls the known false statement in the
  585-page draft.

The coverage checklist's two low-yield warnings concern declined material on
the modular-trace and BG pages. I checked those dispositions against the
current statements, strategies, dependencies, and destinations; they do not
remove or weaken an owned result.

## Complete page-requirement defects

The following is the full B-as-supplier census in each assigned A page's live
transitive `requires` closure. Repeated edges are intentionally shown under
each affected consumer pair because sufficiency is pair-specific.

### SC closure — 7 edges

```text
hnn-extensions-and-brittons-lemma -> subgroups-of-free-groups-and-schreier-rewriting-examples
subgroups-of-free-groups-and-schreier-rewriting -> socles-and-the-onan-scott-landscape-examples
socles-and-the-onan-scott-landscape -> blocks-primitivity-and-multiple-transitivity-examples
blocks-primitivity-and-multiple-transitivity -> extraspecial-p-groups-and-central-products-examples
extraspecial-p-groups-and-central-products -> frattini-subgroups-and-the-burnside-basis-theorem-examples
frattini-subgroups-and-the-burnside-basis-theorem -> sylow-theorems-and-nilpotent-groups-examples
primitive-roots-and-unit-groups-modulo-n -> splitting-fields-examples
```

### HG closure — 11 edges

```text
cayley-graphs-word-metrics-and-quasi-isometry -> applications-of-the-fundamental-group-examples
geometric-actions-svarc-milnor-and-growth -> cayley-graphs-word-metrics-and-quasi-isometry-examples
small-cancellation-and-dehn-algorithms -> decision-problems-for-finitely-presented-groups-examples
decision-problems-for-finitely-presented-groups -> hnn-extensions-and-brittons-lemma-examples
hnn-extensions-and-brittons-lemma -> subgroups-of-free-groups-and-schreier-rewriting-examples
subgroups-of-free-groups-and-schreier-rewriting -> socles-and-the-onan-scott-landscape-examples
socles-and-the-onan-scott-landscape -> blocks-primitivity-and-multiple-transitivity-examples
blocks-primitivity-and-multiple-transitivity -> extraspecial-p-groups-and-central-products-examples
extraspecial-p-groups-and-central-products -> frattini-subgroups-and-the-burnside-basis-theorem-examples
frattini-subgroups-and-the-burnside-basis-theorem -> sylow-theorems-and-nilpotent-groups-examples
primitive-roots-and-unit-groups-modulo-n -> splitting-fields-examples
```

### Modular-trace closure — 18 edges

```text
modular-representations-and-projective-covers -> induced-representations-and-frobenius-reciprocity-examples
valuation-rings-and-discrete-valuation-rings -> noether-normalisation-and-nullstellensatz-examples
inverse-limits-and-noetherian-completion -> flatness-and-faithful-flatness-examples
solvability-by-radicals-and-kummer-theory -> finite-fields-and-cyclotomic-extensions-examples
noether-normalisation-and-nullstellensatz -> integral-extensions-and-going-up-examples
flatness-and-faithful-flatness -> rees-modules-artin-rees-and-hilbert-samuel-theory-examples
algebraic-closure-embeddings-and-separability -> algebraic-extensions-degree-and-finite-fields-examples
finite-fields-and-cyclotomic-extensions -> the-galois-correspondence-examples
integral-extensions-and-going-up -> associated-primes-and-primary-decomposition-examples
rees-modules-artin-rees-and-hilbert-samuel-theory -> krull-dimension-and-height-theorems-examples
the-galois-correspondence -> algebraic-closure-embeddings-and-separability-examples
associated-primes-and-primary-decomposition -> artinian-rings-and-length-examples
krull-dimension-and-height-theorems -> dedekind-domains-and-ideal-classes-examples
artinian-rings-and-length -> prime-spectra-and-radicals-examples
dedekind-domains-and-ideal-classes -> valuation-rings-and-discrete-valuation-rings-examples
prime-spectra-and-radicals -> localisation-of-modules-and-support-examples
localisation-of-modules-and-support -> noetherian-rings-and-hilbert-basis-examples
noetherian-rings-and-hilbert-basis -> modules-over-a-pid-and-canonical-forms-examples
```

### Low-degree group-(co)homology closure — 36 edges

```text
group-cohomology-as-a-derived-functor -> kunneth-exactness-and-splittings-over-principal-ideal-domains-examples
group-extensions-complements-and-schur-zassenhaus -> small-cancellation-and-dehn-algorithms-examples
abelian-categories -> preadditive-and-additive-categories-and-biproducts-examples
subobject-lattices-generators-and-the-grothendieck-axioms -> abelian-categories-examples
small-cancellation-and-dehn-algorithms -> decision-problems-for-finitely-presented-groups-examples
preadditive-and-additive-categories-and-biproducts -> kan-extensions-density-and-the-free-cocompletion-examples
universal-coefficients-and-kunneth-theorems -> tor-flatness-and-global-dimension-examples
solvability-by-radicals-and-kummer-theory -> finite-fields-and-cyclotomic-extensions-examples
localisation-of-modules-and-support -> noetherian-rings-and-hilbert-basis-examples
decision-problems-for-finitely-presented-groups -> hnn-extensions-and-brittons-lemma-examples
kan-extensions-density-and-the-free-cocompletion -> ends-coends-and-weighted-limits-examples
finite-fields-and-cyclotomic-extensions -> the-galois-correspondence-examples
noetherian-rings-and-hilbert-basis -> modules-over-a-pid-and-canonical-forms-examples
ext-and-balanced-resolutions -> delta-functors-and-universality-examples
yoneda-extensions-and-homological-dimension -> ext-and-balanced-resolutions-examples
hnn-extensions-and-brittons-lemma -> subgroups-of-free-groups-and-schreier-rewriting-examples
ends-coends-and-weighted-limits -> monadicity-and-becks-theorem-examples
the-galois-correspondence -> algebraic-closure-embeddings-and-separability-examples
delta-functors-and-universality -> derived-functors-examples
subgroups-of-free-groups-and-schreier-rewriting -> socles-and-the-onan-scott-landscape-examples
monadicity-and-becks-theorem -> monads-comonads-and-their-algebras-examples
algebraic-closure-embeddings-and-separability -> algebraic-extensions-degree-and-finite-fields-examples
derived-functors -> projective-and-injective-resolutions-examples
socles-and-the-onan-scott-landscape -> blocks-primitivity-and-multiple-transitivity-examples
monads-comonads-and-their-algebras -> reflective-subcategories-and-the-adjoint-functor-theorems-examples
projective-and-injective-resolutions -> long-exact-sequences-in-homology-examples
blocks-primitivity-and-multiple-transitivity -> extraspecial-p-groups-and-central-products-examples
reflective-subcategories-and-the-adjoint-functor-theorems -> adjunctions-units-and-counits-examples
long-exact-sequences-in-homology -> mapping-cones-cylinders-and-chain-triangles-examples
extraspecial-p-groups-and-central-products -> frattini-subgroups-and-the-burnside-basis-theorem-examples
adjunctions-units-and-counits -> limits-and-colimits-examples
the-diagram-lemmas-in-an-abelian-category -> exactness-and-the-member-calculus-examples
mapping-cones-cylinders-and-chain-triangles -> chain-homotopy-and-the-homotopy-category-examples
frattini-subgroups-and-the-burnside-basis-theorem -> sylow-theorems-and-nilpotent-groups-examples
primitive-roots-and-unit-groups-modulo-n -> splitting-fields-examples
chain-homotopy-and-the-homotopy-category -> chain-complexes-and-homology-examples
```

### BG closure — 1 edge

```text
cayley-graphs-word-metrics-and-quasi-isometry -> applications-of-the-fundamental-group-examples
```

All Group Theory edges in this census have a binding repair in
`research/plan-group-theory-track.md` §30.2: every B page requires only its
own A page, and every A page receives the listed A-only prerequisites. The
cross-category edges must likewise be reconciled against their controlling
track tables by the same authorized central writer. None may be waived merely
because `validate-plan` accepts the current graph.

## Closure limits and repair routing

`B1-CLOSURE` remains open for both batch-1 pairs: the owned notes explicitly
say the 1,567-ID SC and 3,112-ID HG inherited statements and proof uses were
not all semantically reread. `BG-CLOSURE` likewise remains open for the
2,540-ID BG closure. Beta 1 and Beta 6 must finish and record those
proof-by-proof audits. I do not convert their structural traversals into
mathematical certification.

Batch 3's direct source and mathematics review is closed, but its protected
plan/header findings remain real. The empty Künneth supplier is not accepted
as a dependency, and B-page resolution is not accepted as proof adequacy.

No new prerequisite A/B pair is required by the defects found here. The
ultrafilter supplier exists already; the empty Künneth pair is not a legitimate
HA-12 dependency under the binding homological-algebra design. Shared
`research/plan-spec.json` and prose-scaffold corrections must be assigned to
one authorized writer. Beta 1, Beta 3, and Beta 6 own their respective
manifest/coverage/notes repairs and receive the pair-local findings above.

## Scope decisions

`node tools/scope-decisions.mjs refresh --run phase-2-wave-1 --group a`
produced 27 pending rows. All 27 now stand. The out-of-scope results are not
used by an owned statement, proof route, dependency, or B example. The
deferred Hopf/Schur-multiplier results go to
`schur-multipliers-and-universal-central-extensions`, the modular
spanning/orthogonality results go to
`brauer-characters-and-decomposition-matrices`, and the Dehn-algorithm
result goes to `small-cancellation-and-dehn-algorithms`; each destination is
later and none is used early.

`node tools/scope-decisions.mjs check --run phase-2-wave-1 --group a`
reports `27 current decline(s), 0 error(s)`.

A contemporaneous batch-3 context update made nine rows stale during the
review. The intervening check reported nine stale-context errors; I reread the
current batch-3 notes and coverage, reran `refresh`, readjudicated those nine
rows, and obtained the clean current check above.

## Same-frontier dependency ledger

The owned consumer manifests have no page requirement, item dependency,
well-definedness use, or load-bearing forward reference to a supplier in a
different `phase-2-wave-1` batch. I therefore wrote the required empty input
arrays for batches 1, 3, and 6 and refreshed
`research/phase-2-wave-1-cross-batch-dependencies.json`. The protected
published-plan defects above are not same-frontier consumer/supplier edges and
are recorded as scaffold findings rather than fabricated ledger rows.

## Checks run

- `node tools/scope-decisions.mjs refresh --run phase-2-wave-1 --group a`
  -> 27 pending rows generated before adjudication.
- `node tools/scope-decisions.mjs check --run phase-2-wave-1 --group a`
  -> `27 current decline(s), 0 error(s)`.
- `node tools/source-fetch-check.mjs --coverage research/phase-2-wave-1-batch-1.coverage.json,research/phase-2-wave-1-batch-3.coverage.json,research/phase-2-wave-1-batch-6.coverage.json --stamp`
  -> `22/22 source(s) fetch-verified`, `0` newly stamped, `0` drops.
- `node tools/coverage-checklist.mjs ... --require-destination`
  -> `5 page(s), 164 harvested result(s), 0 error(s), 2 warning(s)`; both
  low-yield warnings were adjudicated in the scope ledger.
- `node tools/content-policy.mjs --manifest-only ...`
  -> `115 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/manifest-deps.mjs research/phase-2-wave-1-batch-*.pages.json`
  -> `434 items, 0 normalized, 0 errors`.
- `node tools/validate-plan.mjs research/plan-spec.json`
  -> exit 0; declared page order and item order are acyclic and resolvable.
  This syntactic pass does not detect the semantically forbidden B suppliers
  listed above.
- `node tools/extcheck.mjs --plan research/plan-spec.json`
  -> exit 0 with 63 repository-wide warnings and no hard error.
- focused transitive `requires` census
  -> SC 7, HG 11, modular traces 18, low-degree group (co)homology 36, BG 1
  B-as-supplier edges.
- focused transitive item-closure traversal over current manifest items and
  published headers -> zero unresolved IDs, zero recorded-not-proved reach,
  and zero reach to an item homed on `deferred-set-theory-beyond-choice` for
  all five pairs.
- `node tools/frontier-dependency-ledger.mjs refresh --run phase-2-wave-1`
  -> `refreshed and deduplicated`.

No A page exceeds the plan limit, so no split is owed.
