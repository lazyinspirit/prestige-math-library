# Step 3a scope review — pair `balanced-triples-and-global-crystal-bases`

- Run: `frontier-44-special-representation-examples-28` (stage `3a-scope`),
  dispatch label `step3a-pair-balanced-triples-and-global-crystal-bases-9d1061bcc97f76d2`
- Role: alpha (scope reviewer; not owner, not item author)
- A page: `balanced-triples-and-global-crystal-bases` (batch 8, order 1532,
  `special-topics-in-representation-theory`, 27 items: 7 definitions, 10 lemmas,
  9 theorems, 1 proposition; maximum dependency level 19)
- B page: `balanced-triples-and-global-crystal-bases-examples` (batch 8,
  order 1533, 4 items: 3 examples, 1 counterexample)
- Decision: **`sufficient`**, via
  `node tools/step3-decisions.mjs record-scope --run frontier-44-special-representation-examples-28
  --page balanced-triples-and-global-crystal-bases --decision sufficient`
- Date: 2026-10-10.

This review decides scope only. It is not an item approval, not a proof judgment,
not a source audit and not an owner record.

## 1. Intended subject and role in the library

The controlling prose design is QG-5 of `research/plan-quantum-groups-track.md`
(summary table line 44; the QG-5 section from "## QG-5 — Balanced triples and
global crystal bases"), which defines this pair as the library's
globalization and canonical/global-basis normalization page of the quantum
groups track. The design's stated hard constraints are: build the integral
residue and signed string-ideal prerequisites first; run the simultaneous
balanced/global construction from Kashiwara's 1991 Sections 6–7; derive
freeness as a conclusion (no global-freeness premise); keep the balanced-triple
linear algebra over an arbitrary Z[q,q^-1]-submodule with the A_0/A_infinity
chart lattices; prove the based-quotient zero/survival interface and the two
retained global Z theorems afterwards; then the corrected quasi-R
field/action material; upper duality is weightwise restricted, never
lower-lattice self-duality; arbitrary affine based-pair integral action is
false and is retained only as an explicit boundary.

Binding owner direction (all read): `...-owner-authoring-direction.md`
(2026-10-08 quantum proof-route decision, lines 24–33, and the "Owner final
quantum interface and tensor boundary" section),
`...-owner-quantum-global-repair.md` ("Owner correction supersession — current31
contract interface"), `...-owner-quantum-integral-home-proposal.json` and
`...-owner-quantum-final-interface-proposal.json`. The owner fixes the current
inventory at 27 A + 4 B ordered supplier-first, moves the two global Z theorems
to this page, and mandates the two added in-page suppliers (normalization
dictionary; negative-half reversal).

Intended role: QG-5 supplies the lower/upper global bases, the based quotient,
the integral triangular decomposition, specialization and the quasi-R/tensor-bar
interfaces to the run's downstream pages QG-6 (`quantum-affine-type-a-and-level-one-fock-space`,
batch 9), QG-7 (`klr-algebras-induction-and-quantum-serre-categorification`,
batch 10), QG-8 (`cyclotomic-klr-algebras-and-highest-weight-categorification`,
batch 11), KL-6 (`parabolic-category-o-and-fock-space-bases`, batch 16) and,
transitively, batches 23/25. No published item, library page or article
references this pair (recursive scan of `items/`, `library/`, `articles/`: 0 hits);
it is a new supplier, not a repair of published content.

## 2. Design-to-manifest mapping

The QG-5 prose table lists exactly 27 A item IDs; the batch-8 manifest contains
exactly those 27 IDs (set difference both ways: empty). The design's "QG-5
examples" list names exactly the 4 B items present (set difference: empty).
Kinds, order and the B companion pointer match; the B page requires the A page
and the A page requires the three designed pages
(`divided-powers-integral-forms-and-quantum-highest-weights`,
`kashiwara-operators-and-crystal-lattices`,
`tensor-product-crystals-and-highest-weight-crystal-uniqueness`), all three
present in-run as batches 5/6/7 with 25/17/14 items (A+B).

`research/plan-spec.json` carries only the two transferred contracts on this A
page (`thm-integral-triangular-decomposition-for-the-lusztig-form`,
`thm-quantum-highest-weight-modules-deform-the-classical-weight-character`) and
no B items. That is the recorded, owner-resolved design/plan-spec split
(batch-8 notes §2.1; owner direction lines 24–33): the full 27-item QG-5
interface lives in the track table and the manifest, and I verified the
manifest is the union (25 earlier-approved + the two owner-added in-page
suppliers), with no design item dropped and no unplanned item added beyond
those two owner-recorded additions.

Subject coverage of the A page, by component:

| subject component | items |
| --- | --- |
| convention dictionary (v=q^-1, K-h, opposite coproduct, root-color form factor) | `lem-lusztig-and-kashiwara-normalizations-match-by-root-color` |
| based-module data a–(d), bar lattice, integral lattice, balanced triple + globalization map | `def-the-bar-lattice-and-integral-lattice-of-a-based-module`, `def-balanced-triple-and-globalization-map`, `def-integral-residue-lattices-...` |
| two-chart linear algebra over P^1 (finite Z residue as the freeness input) | `lem-balanced-triple-linear-algebra-over-the-projective-line` |
| integral crystal residues / norm criterion / B(infinity) | `lem-integral-crystal-residues-of-the-negative-half-represent-the-crystal-basis` |
| signed reversal and string-ideal handling (half saturation before gluing; image ideals only) | `lem-negative-half-reversal-preserves-integral-and-crystal-lattices`, `lem-string-ideal-decomposition-of-the-integral-lattices` |
| string-ideal balancing and the simultaneous integral global construction | `lem-string-ideal-triples-are-balanced`, `thm-the-highest-weight-crystal-triple-is-balanced` |
| lower global basis, bar invariance/congruence/uniqueness, based quotient projection | `def-lower-global-basis-of-a-quantum-highest-weight-module`, `thm-existence-bar-invariance-and-uniqueness-of-the-lower-global-basis`, `thm-global-basis-projection-from-the-negative-half-to-a-highest-weight-module` |
| integral triangular decomposition, weight-character deformation (transferred Z theorems) | `thm-integral-triangular-decomposition-for-the-lusztig-form`, `thm-quantum-highest-weight-modules-deform-the-classical-weight-character` |
| specialization and canonical/Kashiwara comparison in symmetric type | `prop-global-bases-specialize-to-integral-weight-bases`, `thm-lusztig-canonical-and-kashiwara-global-bases-agree-in-symmetric-type` |
| upper form-dual basis and weightwise restricted duality/crystal compatibility | `def-upper-global-basis-by-the-contravariant-form`, `thm-upper-and-lower-global-bases-are-dual-and-crystal-compatible` |
| quasi-R machinery: completion, Drinfeld pairing, nondegeneracy, dual sums, intertwiner, inverse/factorizations | `def-root-height-completion-...`, `def-drinfeld-hopf-pairing-...`, `lem-the-drinfeld-hopf-pairing-is-nondegenerate-in-each-root-degree`, `lem-homogeneous-dual-basis-sums-...`, `thm-the-weightwise-quasi-r-intertwiner-exists-and-is-unique`, `lem-quasi-r-intertwining-determines-the-inverse-and-coproduct-factorizations` |
| integral quasi-R action on its exact admissible cases, with the affine A1 boundary | `lem-quasi-r-divided-power-integrality-on-based-lattices` |
| tensor bars (field: all finite O_int products; integral: exact admissible classes) | `thm-quasi-r-tensor-bars-on-finite-products-of-based-integrable-modules` |

The B page supplies the intended computational/diagnostic counterpart: the
two-dimensional sl_2 balanced triple and its tensor global basis
(`ex-balanced-triple-...`), the rank-one m=1,2 lower-versus-upper lattice
comparison (`ex-lower-and-upper-global-bases-in-a-small-highest-weight-module`),
the rank-one/A_2 canonical normalization match
(`ex-canonical-global-basis-normalization-in-symmetric-type`), and the
non-existence/non-uniqueness witness that bar invariance plus mod-q congruence
do not determine a balanced globalization
(`cex-bar-invariance-and-mod-q-congruence-without-balancedness`). All four are
locally derived computations from printed source results, and no B item is a
dependency of another page (leaf rule checked; `content-policy` over the run
reports no `batch-b-leaf-target`).

## 3. Source coverage

`research/frontier-44-special-representation-examples-28-batch-8.coverage.json`
holds 8 A-page sources and 2 B-page sources (Kashiwara91 and the Lusztig
monograph reused for the companion), 62 harvested rows total: A page 54 rows
(47 included, 5 inline, 1 deferred, 1 declined out-of-scope), B page 8 rows
(all inline proof uses). `node tools/source-fetch-check.mjs --coverage ...`
reports **10/10 fetch-verified, 0 documented drops**; the stamps include the
two key full texts (Kashiwara91 `39b89708…`, 52 pp.; Lusztig monograph
`b0dc6abf…`, 355 pp.) plus JKK, Brundan, Lacabanne, Bao–Wang, the Stanford
slides and the Berkeley lectures.

What the A sources cover, matching the design's attribution:

- Kashiwara91 §§5–7 (polarization, integral residues, chart lemmas, string
  ideals, gluing, based quotient) backs the integral/balanced core.
- JKK §§8–10 backs the balanced-triple definition, linear-algebra joint,
  balancedness, bar invariance/uniqueness and the projection theorem.
- Lusztig (monograph) backs the normalization dictionary, the field quasi-R
  construction and factorizations, the canonical signed recursion and the
  finite-type/finite-dimensional based tensor proofs.
- Brundan and Lacabanne back the quasi-R completion, inverse/factorization and
  type-A integrality statements; Bao–Wang (complete 7 pages) backs the corrected
  highest-first/lowest-second/constructible action scope and the affine
  coefficient boundary; the Berkeley lectures back only the rational/local q=1
  comparison; the Stanford slides are contextual only (the integral freeness
  route is Kashiwara91 §6–7).

`node tools/coverage-checklist.mjs ... --require-destination` returns 2 pages,
62 harvested, 0 errors, 1 warning: the B page's 8 inline rows count as 0/8
"included" and trigger the documented `coverage-low-yield` advisory. The owner
record (`...-owner-quantum-global-repair.md`, "Independent missing-B coverage
check") already reviewed this advisory, confirmed the 8 rows are genuine inline
proof uses of printed results with explicit item destinations, and declined to
falsify a disposition to silence it. I concur: it is a low-yield advisory, not a
scope defect.

## 4. Prerequisites, consumers and integrity checks (rerun 2026-10-10)

- Transitive closure of the 31 pair items over the manifest graph, in-run
  manifests and `items/*.md`: **128 distinct IDs, 0 unresolved**; 97 external,
  59 published (all `status: published`, none `not-proved-here`) and 38 in-run
  (21 in batch 5, 13 in batch 6, 4 in batch 7). All declared deps, all
  `[[wikilinks]]` and all item-ID-like mentions in the 31 statements/strategies
  resolve (one regex false positive: the power-series ring `Z[[q]]`).
- `node tools/manifest-deps.mjs research/...-batch-8.pages.json` → 31 items,
  0 errors. `node tools/content-policy.mjs --manifest-only` over all 28 batch
  manifests → 858 scoped items, 0 errors, 0 warnings.
  `node tools/item-dependency-levels.mjs check --run ...` → 858 items across
  100 pages, no label/cycle errors. `node tools/validate-plan.mjs
  research/plan-spec.json --run ...` → acyclic, no forward references, no
  B-page dependencies, no unresolved ids. `node tools/step1-decisions.mjs check`
  → 858/858 items ready and closed.
- Consumers: 56 dependency edges from 8 in-run pages (batches 9, 10, 11 and its
  B page, 16 and its B page, 23, 25) onto 18 distinct A items, every one
  present in the batch-8 manifest. QG-6/7/8 and KL-6 name this page in
  `requires`; batches 23/25 reach it transitively. The batch-8
  `cross-batch-dependencies.json` ledger has 3 page + 83 item reviewed edges,
  all `status: open` (pending readiness), each with owner-review evidence.
- Page-level prerequisites require all three designed supplier pages; those
  pages are in-run with nonempty scaffolds, but their own Step 3a scope
  decisions are still in flight (see §6). No other prerequisite is missing.

## 5. Unmet prerequisites

None found. I checked both directions with the evidence above: (i) every
prerequisite the pair consumes — all 97 external closure IDs, including the 59
published ones and the 38 batch-5/6/7 scaffold items — is present with the
hypotheses used by the consuming items' interfaces (spot-checked the key
interfaces: the half form and its Gaussian localization in batch 5,
`lem-crystal-lattice-polarizations-are-perfect-at-q-zero` and
`thm-crystal-basis-of-the-negative-half` in batch 6, and the tensor-product rule
in batch 7 all supply exactly the forms/lattices the batch-8 items cite); and
(ii) every downstream interface this pair's consumers rely on — 18 item IDs over
56 edges — is contained in the current 27-item inventory.

## 6. Observations and honest uncertainty

- This is a scope review, not a proof or source audit. I read the design,
  owner records, manifests, coverage records, dependency listings and the
  statements/strategies needed to judge subject coverage. I did not re-derive
  the mathematics or re-read the full primary texts for this dispatch.
- Independent corroboration of scope, not of proofs: the standard
  crystal-basis text (Hong–Kang, *Introduction to Quantum Groups and Crystal
  Bases*, Ch. 6, "balanced triple" §, globalization via P^1 vector bundles) and
  the structure of Kashiwara's 1991 Duke paper (Part II, §§5–7) confirm that the
  page's chosen components — polarization/integral forms, balanced triples,
  global bases, canonical comparison, tensor/bar structure — are the canonical
  content of this subject. No standard component of "balanced triples and
  global crystal bases" at this level is absent; the excluded material
  (modified/dot-U global bases, KLR-geometric constructions, arbitrary affine
  integral Θ action) is deliberately homed elsewhere or excluded by the
  owner-reviewed true boundary.
- The batch-8 notes record a Kashiwara91 PDF text-layer limitation
  (symbol-level displays of §§6.1/7.4/7.5 to be re-checked at Step 3 authoring
  against the printed pages). That is an authoring/proof obligation, not a
  scope gap: the intended source is present, stamped and locator-mapped.
- Coverage bookkeeping notes for any future refresh (not scope blockers):
  (a) four A items (`def-integral-residue-lattices-...`,
  `lem-the-drinfeld-hopf-pairing-is-nondegenerate-in-each-root-degree`,
  `thm-quantum-highest-weight-modules-deform-the-classical-weight-character`,
  `thm-upper-and-lower-global-bases-are-dual-and-crystal-compatible`) carry
  their support in the manifest `sources` blocks but have no harvested
  coverage row; (b) the Berkeley §13.2.1 row is disposed `deferred` with no
  destination although the transferred weight-character contract cites
  Berkeley §13.2.1 for the rational/local q=1 comparison — the source is
  stamped and cited, so this is a reconciliation note only.
- Timing uncertainty (not a defect of this pair): the three required supplier
  pages QG-2/3/4 have their own Step 3a reviews pending in this run. I verified
  the interfaces they supply exist and match on current bytes; if a sibling
  review were to record `insufficient` for one of those pages, the owner would
  need to reconcile before this pair's Step 3b authoring. Nothing in the current
  manifests or owner records indicates such a gap.

## 7. Decision

Scope decision for the A page (and hence the pair): **`sufficient`**. The
planned definitions, results and examples match the controlling QG-5 prose
design item-for-item (27 A + 4 B, including the two owner-mandated in-page
suppliers and the two transferred global Z contracts), cover every component of
the intended subject at the intended level of generality with the
owner-corrected boundaries (no lower self-duality; restricted weightwise upper
duality; exact quasi-R action classes; explicit affine counterexample retained),
are backed by 10 fetch-verified full-source bodies with destination-mapped
coverage, consume only published or in-run scaffolded prerequisites (128-id
closure, 0 unresolved), and supply all 18 consumed interfaces needed by the 56
downstream edges. Receipt:
`research/frontier-44-special-representation-examples-28-step3a-review-balanced-triples-and-global-crystal-bases.json`.
