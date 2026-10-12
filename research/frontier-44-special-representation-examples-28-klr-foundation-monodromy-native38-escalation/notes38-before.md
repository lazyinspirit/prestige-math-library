# Batch 38 — `logarithmic-hodge-complexes-and-smooth-open-weights` (order 1811) / `logarithmic-hodge-complexes-and-smooth-open-weights-examples` (order 1815)

Run `frontier-44-special-representation-examples-28`, role beta, one A/B pair, category
`algebraic-geometry`. Owner authoring direction
(`research/frontier-44-special-representation-examples-28-owner-authoring-direction.md`) was read first;
it authorizes this pair as one of the 21 necessary same-frontier prerequisite pairs and forbids scope
growth beyond the same frontier. Canonical plan: `research/plan-spec.json` orders 1811/1815 with the
`requires` lists carried in the batch task and the stub manifest — design, plan, task and manifest agree
on both pages, the four item IDs and every declared input; no scope conflict was found. Design:
`research/plan-klr-foundation-prerequisites.md`, section "Logarithmic Hodge Complexes And Smooth Open
Weights". The appended-pair drift review
(`...-alpha-step1-append-1-drift.md`) returned `no-drift (order 1811; declared closure complete; no change)`
for this page; that verdict is preserved as history.

Scaffold written: **3 A items + 1 B item = 4**, recorded 2 `ready` + 2 `escalated`, in-run dependency
levels 0 (SNC compactification lemma), 1 (modification lemma), 11 (logarithmic theorem), 12 (B example).
No page split was needed (both pages far below the 100-item cap). No published content, shared plan,
engine state or sibling batch input was edited. Only this batch's manifest, coverage, notes, owned
cross-batch input, the ledger refresh attempt and the four Step-1 readiness records were written.

## Design / plan comparison (conflicts and completions recorded)

1. **Task locator drift, not a scope conflict.** The batch task cites the design at
   `research/plan-klr-foundation-prerequisites.md` **L620** (the drift review's evidence likewise records
   line 622). The file now has 1523 lines; the "Logarithmic Hodge Complexes And Smooth Open Weights"
   section begins at line **752** and ends at line 791 (line 620 falls inside "Complex Algebraic
   Stratified Topology"). The section was located by title and read in full, together with its four
   linked carrier drafts under
   `research/frontier-44-special-representation-examples-28-klr-foundation-monodromy-drafts/items/` and the
   monodromy inventory/report/source-evidence files. The plan's item inventory (2 lemmas + 1 theorem on A,
   1 example on B) matches the design exactly.
2. **Declared inputs completed with the load-bearing suppliers the carrier proofs actually need (no claim
   changed).**
   - `lem-smooth-quasiprojective-varieties-admit-snc-projective-compactifications` keeps its four declared
     inputs and adds five published suppliers its projectivity route requires:
     `thm-weak-embedded-desingularization` (a single global sequence of blowups in one smooth projective
     ambient, whose strict transform is therefore projective), `prop-canonical-resolution-of-marked-ideals`
     (condition (2): centers are contained in the supports, which gives that the principalization is the
     identity over the complement of the boundary), `cor-rational-map-to-projective-space-resolved-by-base-ideal-blowup`
     and `lem-eventual-global-generation-coherent-twists` (a blowup of a projective integral scheme along a
     coherent ideal embeds as a closed subscheme of a product with projective space), and
     `def-blowup-scheme-along-ideal` with `def-simple-normal-crossings-divisors` for the divisor vocabulary.
     This is the completion of the design's declared closure, not a replacement.
   - `lem-smooth-projective-modification-preserves-open-cohomology-images` keeps its four declared inputs and
     adds `lem-smooth-quasiprojective-varieties-admit-snc-projective-compactifications` (its last sentence
     needs domination of an arbitrary smooth projective compactification by an SNC one),
     `def-compactly-supported-singular-cohomology-of-a-locally-compact-space` (the colimit representative
     and the extension-of-supports maps) and `thm-excision-for-singular-cohomology` (the excision
     identification behind `p^*(e_X c) = e_{X'} c`).
   - `thm-logarithmic-complex-constructs-smooth-open-mixed-hodge-structures` keeps its nine declared inputs
     and adds `def-rational-mixed-hodge-structure` (statement vocabulary: weights, type, Tate twist),
     `def-cohomological-mixed-hodge-complex` (the log complex is exhibited as one),
     `lem-morphisms-of-mixed-hodge-structures-are-strict` (independence of the compactification and
     functoriality) and `def-simple-normal-crossings-divisors`.
   - `ex-the-logarithmic-class-of-the-punctured-line-has-weight-two` adds
     `def-rational-mixed-hodge-structure` for the Tate twist and the type convention.
3. **Published resolution statements are `proper`, not `projective` — completion and obligation.** The
   published `thm-resolution-of-singularities-in-characteristic-zero` states a proper birational resolution
   constructed on affine charts (its proof glues chartwise sequences), and `thm-principalization-of-ideals`
   likewise states proper blowup sequences; neither statement alone makes the SNC compactification
   *projective*. The carrier proof asserts "the resulting morphism is projective (the canonical resolution
   is a finite sequence of blowups)" without support. The scaffold keeps every claim and completes the
   proof route instead: embed the reduced closure in a projective ambient and use the *embedded* global
   blowup sequence (`thm-weak-embedded-desingularization`), then convert each blowup of a projective scheme
   to a projective morphism via the Serre-twist/graph-closure pair, then principalize on the smooth
   projective source. The lemma's strategy writes this obligation out; it is a proof obligation for Step 3,
   not an unproved fallback. This is recorded as an interface observation rather than a defect row: the
   published claims are true as stated; the missing clause is one this consumer must supply.
4. **Cross-batch, forward-located prerequisite — the batch escalation.** Step 3 of the logarithmic theorem
   needs compact Kähler Hodge theory (Hodge decomposition, the holomorphic-degree Hodge filtration, its E1
   degeneration and functorial pure Hodge structures) on the smooth projective compactification `X` and on
   every SNC boundary stratum `D^[a]`. The library's only supplier of the compact Kähler structure of a
   smooth projective complex variety is `lem-smooth-projective-analytification-has-rational-kahler-polarization`
   (with `thm-polarized-hodge-riemann-and-hard-lefschetz-for-smooth-projective-varieties`), homed on page
   `projective-hodge-polarization-foundations`, whose current plan order **1812 is later than this page's
   1811**, and which is not in this page's `requires`. Deligne's own proof makes this exact reduction: II
   2.2.1 is stated for a compact Kähler manifold "par exemple projective lisse", and the degeneracy lemma
   II 3.2.6 is proved for projective X by applying it to the projective strata Y^n. Under the current plan
   the theorem therefore has a missing, forward, inadequate-to-underive prerequisite; the theorem and its
   consumer example are recorded `escalated`. Proposed owner fix (recorded in the owned cross-batch input
   and the ledger section): add `projective-hodge-polarization-foundations` to this A page's `requires` and
   move this pair after the projective pair (swap 1811/1812 and 1815/1816). The projective page requires
   nothing from this pair, so the swap is confined to that window; no other page order changes.
5. **L2's second sentence is read as an independence statement, not a forward use of the theorem.** "The
   compactification-image formula of logarithmic weights extends from an SNC compactification to every
   smooth projective compactification" records that the image subgroup is the same for every smooth
   projective compactification; its identification with the weight filtration is the companion theorem's
   assertion. The lemma's proof therefore closes without consuming the later theorem, so no same-page
   forward dependency exists.
6. **B-example provenance unchanged.** The carrier marks the example `literature-derived` / `ai-altered`
   (its computation instantiates the theorem on P^1); the manifest preserves this, and the example is a
   B-page leaf on which nothing depends.

## Dependency audit and prerequisite order

Every declared dependency was resolved on disk. Read in this dispatch (statement, hypotheses, direction and
axiom clauses): published `thm-resolution-of-singularities-in-characteristic-zero` (proper birational,
iso over the smooth locus, chartwise construction), `thm-principalization-of-ideals` (canonical blowup
sequence; total transform invertible with SNC support), `prop-canonical-resolution-of-marked-ideals`
(condition (2) centers contained in supports, algebraic-closedness hypothesis satisfied over C),
`thm-weak-embedded-desingularization` (global sequence in one smooth ambient; strict transform smooth and
SNC with the exceptional divisor), `thm-blowup-projective` (checked and deliberately not invoked for
projectivity: it gives local H-projectivity in general), `cor-rational-map-to-projective-space-resolved-by-base-ideal-blowup`,
`lem-eventual-global-generation-coherent-twists`, `def-simple-normal-crossings-divisors`,
`def-compactly-supported-singular-cohomology-of-a-locally-compact-space`,
`thm-excision-for-singular-cohomology`, `thm-poincare-duality-for-oriented-topological-manifolds`,
`cor-cohomology-over-a-field-is-dual-to-homology-over-that-field`,
`prop-cap-product-naturality-and-projection-formula`, `cor-homology-of-spheres`,
`thm-cohomological-kunneth-isomorphism-under-finite-free-hypotheses`, `def-axiom-of-choice`. In-run sibling
suppliers were read in their current manifests: batch 30 `lem-locally-contractible-metric-spaces-have-singular-constant-sheaf-cohomology`
(level 0), batch 34 `def-rational-mixed-hodge-structure` (0), `def-cohomological-mixed-hodge-complex` (1),
`lem-morphisms-of-mixed-hodge-structures-are-strict` (2), `lem-mixed-hodge-complexes-give-functorial-cohomology-and-simplicial-weights` (3),
batch 35 `thm-compact-kahler-hodge-decomposition-via-elliptic-harmonic-forms` (10). No dependency is homed
later than order 1811 **except the escalated projective-page supplier**, which is not declared in the
manifest; there is no declared cycle, no same-page forward edge and no B-leaf target. Computed levels match
the labels: 0, 1, 11, 12. AC is declared in every item's statement and its exact uses are recorded in the
`axiom_use` fields; the divisor bookkeeping and finite linear algebra are choice-free.

## Source work (fetched and inspected, not snippets)

`source-fetch-check --stamp` fetched and stamped **5/5** source instances over the two pages; check mode:
`5/5 source(s) fetch-verified`, `5/5 resolved (0 documented drops)`. The three treatments are:

- **Deligne, Théorie de Hodge II** (complete 54-page Numdam article; `sha256_16 748edefb44fded8a`,
  `pdf_sha256 748edefb44fded8af67869abfed87062d66977d25b5d12f7d014f1810a063c3f`; byte-identical to the hash
  recorded by the monodromy source ledger). Inspected in this dispatch: §2.1.16 (Tate structure), §2.2.1
  (compact Kähler "(par exemple projective lisse)" Hodge theory and E1 degeneracy), §3.1.1–3.1.11
  (logarithmic poles, pole-order filtration W, local contractibility), §3.2.1–3.2.19 (SNC completion,
  bifiltered resolutions, the two spectral sequences, the theorem, the E1 degeneracy lemma and its
  projective-strata reduction, the image and independence corollaries), §4.1.1 (fixed-part theorem).
  These readings match the monodromy author's recorded passage list (2.1.15–2.1.16, 2.3, 3.1–3.2, 4.1–4.2.7)
  in `research/frontier-44-special-representation-examples-28-klr-foundation-monodromy-source-evidence.json`.
- **Robles, Hodge Theory of Complex Projective Varieties** (author-hosted Duke Math 690 course notes,
  complete 182-page set, version of May 19 2025; `sha256_16 db9755af867c2b26`). Inspected: §2.2.2
  (Kähler manifolds), §3.2 (Kähler Hodge theory), §6.3 (complete normal-crossing varieties, Deligne's MHS),
  §6.4.1 residue map, §6.4.2 hypercohomology, **§6.4.3 with Definition 6.24 and Theorem 6.25**, whose
  clauses (i)–(iv) state exactly the logarithmic complex, the weight filtration
  `W_l H^k(U,C) = im H^k(X, W_{l-k} Omega^bullet(log D))`, `W_k H^k(U) = im{H^k(X) -> H^k(U)}`, the Hodge
  filtration and the E1 collapse. This is the independent second treatment of the A page.
- **Deligne, Théorie de Hodge III** (complete 74-page Numdam article; `sha256_16 d78d4f46742916cd`,
  matching the monodromy ledger). Inspected at the recorded passage range (5.2–5.3, 6.2.1–6.2.8,
  8.1.10–8.1.20, 8.2.1–8.2.6); every harvested heading is disposed to the sibling pages that consume it
  (proper hyperresolutions, geometric fixed parts). No result of III is used by this pair's items, and the
  coverage says so.

Every harvested heading received a disposition in
`research/frontier-44-special-representation-examples-28-batch-38.coverage.json` (42 harvested results over
the two pages; 0 errors; 1 advisory warning). The warning is `coverage-low-yield` on the A page: only 4 of
its harvested results are separately scaffolded because the planned three A items absorb the log-complex,
residue, spectral-sequence, mixed-Hodge-complex and functoriality machinery inline, exactly as the plan-spec
prescribes; the declines carry individual written reasons, and the source ranges support the three items'
statements. No source needed a drop and no `source_resolution` record was created.

## Cross-batch dependencies

Owned consumer input `research/frontier-44-special-representation-examples-28-batch-38.cross-batch-dependencies.json`
carries **12 rows**: three page edges to `analytic-constructible-sheaf-foundations` (batch 30),
`mixed-hodge-structures-and-strictness` (batch 34) and `compact-kahler-hodge-foundations` (batch 35); seven
item edges (the theorems' four batch-34 suppliers, the batch-35 Kähler Hodge theorem and the batch-30
local-contractibility lemma for the theorem, and the batch-34 MHS definition for the example), each
`verified` at declaration level with the exact used claim, hypotheses and the note that the suppliers'
authored proofs are still owed to Steps 3–5; and **two `open` escalation rows** naming the missing
projective-page supplier at item and page level with the exact placement, sources and the proposed order
fix. Those two rows are forward obligations by design, not accepted uses, and the unified ledger lists them
as such.

## Published defects

None of this batch's actual prerequisites is defective. The published `thm-resolution-of-singularities-in-characteristic-zero`
and `thm-principalization-of-ideals` are true as stated; they simply do not state projectivity, and the
completion above supplies it from other published items. No published item is consumed to prove its own
replacement, and neither page reaches `deferred-set-theory-beyond-choice` through any proof or prerequisite
path. No defect row is entered for the canonical ledger from this batch.

## Findings belonging to other batches (reported, not repaired here)

- `node tools/frontier-dependency-ledger.mjs refresh --run frontier-44-special-representation-examples-28`
  — the first attempt failed with `...-batch-39.cross-batch-dependencies.json: invalid review or consumer
  ownership` (a row named consumer `lem-rational-cohomology-scalar-comparison-for-compact-smooth-manifolds`,
  which was not yet in batch 39's manifest; batch 39's files were being written concurrently). That input is
  owned by batch 39 and was not edited here. After batch 39 reconciled it, the refresh succeeded
  (`refreshed and deduplicated`) and this batch's 12 rows merged: the unified ledger records 12 reviewed
  edges owned by batch 38 (three page, seven item, two `open` escalation rows) plus two page edges where
  batch 38 is the supplier, consumed by `geometric-fixed-parts-and-gauss-manin-semisimplicity` (batch 42)
  and `proper-hyperresolutions-and-mixed-hodge-restriction-images` (batch 46); those two consumer rows are
  owned by those batches and unreviewed until their scaffolds exist.
- `frontier-item-gate --tool extcheck` and `--tool fwdcheck` (item mode) both FAIL at this boundary with
  584 `focus-item-unknown` errors — the documented Step-1 state: item validators resolve manifest IDs
  through authored item files, which do not exist until Step 3. This batch's four IDs are among them. No
  `forward_refs`, `proved_here`, `external_refs` or `external_dependency` is declared by any of this
  batch's items.
- `step1-decisions check` reports `empty scaffold inventory` for sibling batches whose manifests are still
  stubs; those belong to other in-flight batches.

## Checks (actual results)

- `node tools/item-dependency-levels.mjs check --run frontier-44-special-representation-examples-28` — no
  label, shape or cycle error for any populated batch; the only findings are `empty scaffold inventory` for
  sibling stub batches. This batch's four labels equal the computed levels (0/1/11/12).
- `node tools/manifest-deps.mjs` over all 49 batch manifests — `668 item(s), 0 normalized, 0 error(s)`.
- `node tools/content-policy.mjs --manifest-only` over all 49 batch manifests — `668 scoped item(s), 0
  error(s), 0 warning(s)` (a four-manifest subset reports only batch-35's own cross-page declarations, which
  the whole-run pass resolves).
- `node tools/coverage-checklist.mjs research/…-batch-38.coverage.json --require-destination` — `2 page(s),
  42 harvested result(s), 0 error(s), 1 warning(s)` (the advisory `coverage-low-yield` explained above).
- `node tools/source-fetch-check.mjs --coverage research/…-batch-38.coverage.json --stamp` then check mode
  — `5/5 source(s) fetch-verified`, `5/5 resolved (0 documented drops)`.
- `node tools/validate-plan.mjs research/plan-spec.json --run frontier-44-special-representation-examples-28`
  — `OK`; declared page order acyclic and consistent, no item-level cycle, forward reference, B-page
  dependency or unresolved id among pages with item lists. No finding involves either batch-38 page. (The
  escalated projective-page edge is deliberately NOT declared, because the current plan order forbids it;
  it is recorded as an escalation instead.)
- `node tools/step1-decisions.mjs check --run frontier-44-special-representation-examples-28` — after the
  four records, no work row names any batch-38 item once the run-wide counts settle; the theorem and the
  example appear only as owner-held escalations.
- `node tools/frontier-dependency-ledger.mjs refresh --run frontier-44-special-representation-examples-28`
  — currently blocked by the sibling batch-39 input defect recorded above; the batch-38 input itself parses
  and its rows are valid against this batch's manifest.

## Step-1 decisions

Recorded in prerequisite order with the examined dependency IDs and the evidence above:
`lem-smooth-quasiprojective-varieties-admit-snc-projective-compactifications` **ready**;
`lem-smooth-projective-modification-preserves-open-cohomology-images` **ready**;
`thm-logarithmic-complex-constructs-smooth-open-mixed-hodge-structures` **escalated** (missing forward-located
projective-page Kähler/purity prerequisite; exact placement, sources and proposed order fix in the record);
`ex-the-logarithmic-class-of-the-punctured-line-has-weight-two` **escalated** (its only non-published supplier
is the escalated theorem; its own finite computation is complete). Owner/operator reconciliation and the
engine's Step-1 gate follow; a readiness record is not independent mathematical approval (Step 3 provides
that review).

## Residual risks for the Step-3 author

- Prove the projectivity of the blowup sequence in the SNC-compactification lemma (Serre twist + graph
  closure + closed immersions composing, or an equivalent argument); do not cite the resolution theorem's
  properness for it.
- Write out the identity-over-`U` argument from the marked-ideal center containment, and the domination /
  graph-extension clauses for arbitrary smooth projective compactifications.
- Write out the residue isomorphism, the polydisc computation and the `2 pi i` rational normalization in the
  logarithmic theorem; derive the E1 degeneracy from the cited smooth-projective Hodge theory.
- After the owner applies the page-edge/order fix, re-record the theorem and the example and re-check the
  compact-Kähler input on `X` and every `D^[a]`.
- `lem-specific` interface: if the owner instead prefers to keep the order, the alternative is a new local
  lemma supplying the smooth-projective analytification/Kähler structure on this page, which would duplicate
  the projective page's item and is not recommended.
