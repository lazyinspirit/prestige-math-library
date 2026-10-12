# Step 3b — pair `analytic-constructible-sheaf-foundations` (batch 30)

Run `frontier-44-special-representation-examples-28`; role alpha-high; label
`step3b-pair-analytic-constructible-sheaf-foundations-e17b1c9f6655b4f6`.
Owned A page: `analytic-constructible-sheaf-foundations` (order 1796,
algebraic-geometry, 6 scaffold items). Owned B page:
`analytic-constructible-sheaf-foundations-examples` (order 1801, 1 scaffold
item). Batch 30 contains only this pair, so the shared batch files
(`…-batch-30.pages.json`, `…-batch-30.coverage.json`,
`…-batch-30.cross-batch-dependencies.json`) carry no sibling rows.

## Owned IDs and open obligations (entry checkpoint)

A (all scaffold-only; item files, page, contracts owed):
`def-analytic-topology-and-finite-smooth-algebraic-stratifications` (level 0),
`def-locally-constant-sheaf-of-finite-rank` (level 0),
`lem-finite-poset-diagrams-have-bounded-finite-bar-models` (level 0),
`lem-locally-contractible-metric-spaces-have-singular-constant-sheaf-cohomology`
(level 0), `def-algebraically-constructible-complex-of-analytic-field-sheaves`
(level 1), `lem-field-module-sheaves-have-injective-derived-models` (level 8).

B (scaffold-only; item file, page owed):
`ex-constructible-six-operations-on-a-point-and-an-open-closed-line` (level 9).

Open obligations at entry:
1. create `library/algebraic-geometry/analytic-constructible-sheaf-foundations.md`
   and `…-examples.md`;
2. author all 7 item files in dependency-level order (0, 0, 0, 0, 1, 8, 9),
   rechecking each item's exact suppliers against the current files;
3. sync the batch-30 manifest deps/provenance to the authored items and
   refresh the cross-batch dependency inputs;
4. write `research/frontier-44-special-representation-examples-28-batch-30.proof-contracts.json`
   with exact quotes, per-step inputs and boundary dispositions;
5. run the explicit-path checks (proof-layout, precheck, rendercheck,
   content-policy, depcheck, depsource, manifest-deps, item-dependency-levels,
   validate-plan, coverage-checklist, source checks, proof-contract --strict,
   boundary-audit, citation-fidelity, pathcheck, prosecheck) and record item
   decisions with `tools/step3-decisions.mjs`;
6. reconcile supplier uses; the two declared load-bearing forward references of
   the B example (`def-derived-operations-on-analytic-sheaves-over-locally-compact-spaces`,
   `lem-bounded-analytic-field-sheaves-have-derived-tensor-hom-and-pullback-pushforward-adjunctions`)
   belong to the still-unscaffolded/unfinished sibling pair
   `analytic-derived-six-operations-and-duality` (order 1813) and must be
   flagged with the exact consuming steps; that item's decision stays escalated
   until the supplier and its proof use are verified.

Direct in-run prerequisite pairs to inspect: none (dispatch). Step 3a scope
decisions and the owner Round-1 corrections in
`…-klr-foundation-constructible-native30-review/integration-round1.json` are
already applied to the current batch-30 scaffold; they are rechecked below.

## Checkpoint log

(one entry per item, in the dispatch's dependency order; all seven item files
were newly authored and now exist in `items/`)

### Level-0 item 1: `def-analytic-topology-and-finite-smooth-algebraic-stratifications`

- **Authored** `items/def-analytic-topology-and-finite-smooth-algebraic-stratifications.md`
  (draft, `dependency_level: 0`). Definition with three parts: the analytic
  topology of a complex classical variety, smooth points via intrinsic
  regularity of the algebraic local ring, and finite smooth algebraic
  stratifications with the frontier condition.
- **Audit.** The scaffold already carried the owner Round-1 corrections
  (intrinsic regular-local-ring smoothness; reduced induced polynomial-quotient
  structure sheaf instead of an ambient restriction). Rechecked against
  `def-classical-algebraic-prevariety-regular-maps-and-varieties`,
  `def-morphism-locally-ringed-spaces`, `def-embedding-dimension-and-regular-local-ring`,
  `def-metric-topology`, `rem-complex-euclidean-space-dictionary` and the
  continuity suppliers. Local gap repaired: the gluing and continuity clauses
  need the Euclidean metric topology, the complex dictionary, the continuity of
  polynomial quotient functions, and the connectedness/closure notions, so the
  item now also depends on `def-metric-topology`,
  `rem-complex-euclidean-space-dictionary`,
  `lem-algebra-of-continuous-real-maps-on-a-space`,
  `thm-componentwise-limits-and-continuity`, `def-connected-space`,
  `def-interior-closure-boundary-top`, `def-constructible-subset-variety` and
  `def-continuous-map-top`, all published and inside the page's `requires`
  closure. No existence or common-refinement theorem is asserted; choice-free.
- **Checks.** `precheck` not applicable (no phase proof), `rendercheck` OK,
  `proof-layout` 0 steps, `prosecheck` clean. Decision `repaired`/`dependency`.

### Level-0 item 2: `def-locally-constant-sheaf-of-finite-rank`

- **Authored** `items/def-locally-constant-sheaf-of-finite-rank.md` (draft,
  `dependency_level: 0`) exactly to the scaffold: local isomorphism to a finite
  free constant sheaf, explicit `n ≥ 0`, no global rank, no groupoid
  comparison. Six published suppliers unchanged.
- **Checks.** `rendercheck` OK, `prosecheck` clean, `proof-layout` 0 steps.
  Decision `accept`, defects `[]`.

### Level-0 item 3: `lem-finite-poset-diagrams-have-bounded-finite-bar-models`

- **Authored** `items/lem-finite-poset-diagrams-have-bounded-finite-bar-models.md`
  (draft, `dependency_level: 0`) with a complete proof: representables `Q_p`
  are projective (`Hom(Q_p,N) = N(p)`), the two-sided bar complex has an
  objectwise contracting homotopy and is a bounded projective resolution of
  finite-dimensional diagrams, the total double complex is quasi-isomorphic to
  `A` via the bounded row-filtration argument, the source-resolution models give
  `R lim` in `[a,b+h]` and `R Hom` in `[c-b,d-a+h]`, and field extension
  commutes with the finite-dimensional terms and hence with cohomology. The
  empty-poset zero convention is explicit.
- **Corrections during authoring.** (i) Replaced the carrier's unjustified
  "direct summand of a finite sum of projectives" step by the direct
  computation `Hom(Q_p ⊗ V, N) = Hom_k(V, N(p))` plus the finite-product
  induction, so no natural splitting is assumed; (ii) made the cone of the
  `Tot → A` comparison the bounded double complex with acyclic rows and proved
  the bounded-row lemma by induction over the finitely many rows; (iii)
  established the concentration bounds by the vanishing of every factor outside
  the stated range.
- **Checks.** `precheck` PASS (canonical layering adopted: 1.1, 2.1, 3.1, 4.1,
  5.1, 5.2, 6.1, 7.1), `rendercheck` OK, `proof-layout` 1 item / 8 steps /
  0 defects, `prosecheck` clean. Decision `accept`, defects `[]`.

### Level-0 item 4: `lem-locally-contractible-metric-spaces-have-singular-constant-sheaf-cohomology`

- **Authored** `items/lem-locally-contractible-metric-spaces-have-singular-constant-sheaf-cohomology.md`
  (draft, `dependency_level: 0`) with the scaffold's repaired route: flasque
  `k`-sheaves are acyclic for derived sections (injective `k`-sheaves are
  flasque by the extension-by-zero adjunction; flasque kernel lifting gives the
  quotient step); the sheafified singular-cochain complexes are flasque, with
  the locally-finite shrinking and the common-germ argument making the simplex
  assignment independent of the admissible index near every point; the
  augmented complex is a flasque resolution by the contractible-neighbourhood
  stalk computation; and the kernel of `C^*(X;k) → Γ(X,C^*)` is the acyclic
  directed union of small-cochain complexes over covers.
- **Dependency repair.** Added `thm-metric-hausdorff-separation`
  (Hausdorffness of metric spaces) and `lem-paracompact-hausdorff-cover-shrinking`
  (the locally finite refinement with closures inside the cover members), both
  published and inside the closure, because the construction needs the shrunk
  cover with `closure(W_i) ⊆ U_{j(i)}` that Stone's theorem alone does not
  provide. The AC use stays confined to the six itemized places.
- **Checks.** `precheck` PASS (canonical layering 1.1, 1.2, 2.1, 3.1, 3.2,
  4.1, 5.1; the forward-reference check caught and removed an early cross
  reference to a later step), `rendercheck` OK, `proof-layout` 1 item /
  7 steps / 0 defects, `prosecheck` clean. Decision `repaired`/`dependency`.

### Level-1 item 5: `def-algebraically-constructible-complex-of-analytic-field-sheaves`

- **Authored** `items/def-algebraically-constructible-complex-of-analytic-field-sheaves.md`
  (draft, `dependency_level: 1`) to the scaffold: `D_c^b(X;k)` as the full
  subcategory of `D^b(Sh_k(X))` with cohomologically bounded and algebraically
  constructible cohomology, the smallness hypothesis of the derived-category
  definition carried in the text, and the shift convention recorded. Seven
  scaffold deps unchanged; the topological (not coherent) nature of the sheaves
  and the uncompared groupoid local systems are stated explicitly.
- **Checks.** `rendercheck` OK, `prosecheck` clean, `proof-layout` 0 steps.
  Decision `accept`, defects `[]`.

### Level-8 item 6: `lem-field-module-sheaves-have-injective-derived-models`

- **Authored** `items/lem-field-module-sheaves-have-injective-derived-models.md`
  (draft, `dependency_level: 8`). First part: `Sh_k(X) = Mod(k_X)`, the
  functorial injective resolutions of the published ringed-space lemma, and the
  injective model equivalence under AC and AC ⇒ DC. Second part: for a fixed
  finite smooth algebraic frontier stratification 𝔖, the complexes
  constructible with respect to 𝔖 form a triangulated subcategory — closure
  under shifts and isomorphisms, restriction to strata computed stalkwise, the
  long exact sequence exhibiting `H^j(C(f))|_S` as an extension of the local
  systems `ker(f^{j+1})` and `coker(f^j)`, and the local splitting argument
  showing that an extension of finite-rank local systems is again locally
  constant of finite rank.
- **Dependency repair.** Extended the dependency list with
  `def-locally-constant-sheaf-of-finite-rank`,
  `def-analytic-topology-and-finite-smooth-algebraic-stratifications`,
  `thm-abelian-sheaves-form-abelian-category`,
  `def-derived-category-of-an-abelian-category`,
  `lem-stalk-inverse-image-sheaf`, `thm-exactness-of-sheaves-stalkwise`,
  `def-sheaf-on-topological-space` and `def-presheaf-of-groups-rings-modules`,
  all published and inside the closure; the manifest was synced.
- **Checks.** `precheck` PASS (canonical layering 1.1, 2.1, 2.2, 2.3, 3.1,
  4.1, 5.1), `rendercheck` OK, `proof-layout` 1 item / 7 steps / 0 defects,
  `prosecheck` clean. Decision `repaired`/`dependency`.

### Level-9 item 7: `ex-constructible-six-operations-on-a-point-and-an-open-closed-line`

- **Authored** `items/ex-constructible-six-operations-on-a-point-and-an-open-closed-line.md`
  (draft, `dependency_level: 9`). Point clause: `D_c^b(pt;k) ≃ D^b(Vect^{fd})`
  via the single-stratum condition and the splitting of bounded complexes with
  finite-dimensional cohomology; the four operations of the identity map, the
  finite tensor/Hom constructions and the dualizing object `k` in degree zero.
  Line clause: the published open/closed sequence specialized to `k_C`, the cone
  of `k_C → i_*k` computed with the published mapping-cone convention, and its
  rotation to the localization triangle `j_!k_{C*} → k_C → i_*k → j_!k_{C*}[1]`.
- **Open obligation (escalated).** The point-operation clauses consume the two
  declared load-bearing forward references
  `def-derived-operations-on-analytic-sheaves-over-locally-compact-spaces` and
  `lem-bounded-analytic-field-sheaves-have-derived-tensor-hom-and-pullback-pushforward-adjunctions`
  of the not-yet-authored batch-40 pair
  `analytic-derived-six-operations-and-duality` (order 1813) in the authored
  verification step 2.1. Neither supplier exists in `items/` yet. The decision
  is recorded `escalate` with defect type `dependency` and must stay escalated
  until the supplier items are authored and this exact use is reconciled; the
  line computation is closed locally and does not depend on them.
- **Checks.** `precheck` PASS (steps 1.1, 2.1, 2.2, 3.1), `rendercheck` OK,
  `proof-layout` 1 item / 4 steps / 0 defects, `prosecheck` clean.

## Pages, manifests, contracts

- Created `library/algebraic-geometry/analytic-constructible-sheaf-foundations.md`
  (draft; the six A items in plan order; the eight plan-controlled `requires`
  entries unchanged) and
  `library/algebraic-geometry/analytic-constructible-sheaf-foundations-examples.md`
  (draft; the single example; `requires` unchanged). The category-level
  `_category.md`/`_pathway.md` absences are pre-existing whole-category states
  owned by the later pathway stages.
- `research/…-batch-30.pages.json`: item `deps` synced to the authored item
  files, `forward_refs` of the example preserved; `manifest-deps` reports
  7 items, 0 errors. Coverage
  (`…-batch-30.coverage.json`) already records the source rows for both pages
  and is unchanged; `coverage-checklist --require-destination` reports 0 errors
  and only the pre-existing low-yield warning (7/18 scaffolded).
- `research/…-batch-30.cross-batch-dependencies.json` refreshed: the
  injective-model consumer's AC ⇒ DC row is `verified` against the authored
  step 2.1 use; the two example forward-reference rows stay `open` with the
  exact consumer step and the escalation stated. `frontier-dependency-ledger
  refresh --run …` was run after the edit.
- `research/…-batch-30.proof-contracts.json` written: 7 contracts, 37
  citation rows with exact quotes from the cited Statements/Definitions, one
  derivation row per numbered step with complete input tokens, and the eight
  boundary dispositions per item.

## Checks actually run

- `proof-layout` over the seven authored item paths: 7 items, 26 steps,
  0 defects (single batch command, run after the final item edits).
- `precheck` (explicit paths, 7 items): 4 checked / 0 failing; the three
  definitions report not-applicable.
- `rendercheck` (7 items + 2 pages): OK, 9 files; no malformed YAML, no
  wikilink in math, every math span parses under KaTeX.
- `content-policy` on `…-batch-30.pages.json` (item mode): 7 scoped items,
  0 errors, 0 warnings. (`--manifest-only` reports the expected
  `batch-item-already-exists` rows for the now-authored IDs, which is why the
  item-mode run is the operative one.)
- `depcheck --items-file` (7 owned IDs): 0 errors, no owned warning.
- `depsource --items-file … --run …`: 0 unresolved; 64 deps resolve to
  published pages, 7 in-pair edges to the draft A page.
- `manifest-deps …-batch-30.pages.json`: 7 items, 0 normalized, 0 errors.
- `item-dependency-levels check --run …`: 861 items / 100 pages; no error, and
  the manifest labels 0, 0, 0, 0, 1, 8, 9 match the computed levels.
- `validate-plan research/plan-spec.json --run …`: hard errors only on other
  pairs (kashiwara-operators-and-crystal-lattices, character-polynomials-fi-modules-and-representation-stability); no error touches either owned page. The
  `redundant-prereq` warnings on this pair's `requires` are the inherited
  plan-controlled reduction, unchanged by this dispatch.
- `coverage-checklist --require-destination`: 2 pages, 26 harvested results,
  0 errors, 1 pre-existing low-yield warning. `source-fetch-check`: 4/4
  fetch-verified and resolved. `url-sweep --out …-batch-30-url-liveness.json`:
  2/2 live, 0 failed. `source-backing --liveness …`: 6 authored results, all
  still backed.
- `proof-contract --strict`: 7/7 items, 0 errors, 0 warnings.
  `boundary-audit --fail-on-contradicted --fail-on-template`: exit 0; only two
  advisory `iff` candidates on the finite-poset lemma, both explained from the
  statement's defining phrase "exactly when". `citation-fidelity
  --fail-on-missing-quote`: every recorded quote appears in its cited item; no
  widening candidates. `finite-smoke` on the contract file: 0 obligations over
  7 items (none owed).
- `pathcheck` (whole corpus): 3 pre-existing pathway errors in other
  categories; for `algebraic-geometry` only the pre-existing
  `overview-missing`/`pathway-missing` warnings. `prosecheck` over the 7 items
  and 2 pages: 9 files, 0 errors, 0 warnings.
- `step3-decisions check --run … --phase final`: the six non-escalated owned
  items are closed; the example is listed open with its recorded `escalate`
  decision, as intended. `gate-liveness --run …`: whole-run aggregate only —
  the run-wide proof-contract/coverage/precheck inputs are not assembled yet,
  not an owned-pair defect.

## Supplier reconciliation, pre-splice rechecks, published concerns

- Pre-splice findings rechecked against current inputs: the owner Round-1
  corrections are present in the authored definitions (intrinsic smoothness,
  reduced induced structure, `cone[1]`/rotation with carried AC); the two
  scaffold-stage dependency additions (the analytic topology and locally
  constant definitions) are authored before their consumers; the strict
  satisfaction of plan order and per-item dependency levels was re-run.
- In-run supplier status: the only same-run supplier used by a proof is
  `thm-choice-implies-dependent-implies-countable-choice` (batch 2; published,
  its file re-read), consumed by the injective-model lemma in step 2.1 and
  recorded `verified`. All other suppliers are published out-of-run items.
- Unfinished suppliers flagged: `def-derived-operations-on-analytic-sheaves-over-locally-compact-spaces`
  and `lem-bounded-analytic-field-sheaves-have-derived-tensor-hom-and-pullback-pushforward-adjunctions`
  (batch 40, consumer steps: example verification step 2.1); the example
  decision stays escalated until they are authored and reconciled.
- Published concerns: none new. No published item was edited; the only
  published-content contacts are citations, all verified against the current
  files. Shared-ledger updates remain with the serial reconciler.

## Handoff status

- **Completed.** All seven assigned IDs authored and checked; both pages
  created; manifest, coverage, cross-batch inputs and proof contracts in place;
  item decisions recorded for all seven IDs (six closed, one escalated on the
  two flagged forward suppliers). Report written.
- **Added suppliers.** None beyond the scaffold's items; no new item IDs were
  minted, so no engine certification for additions is involved.
- **Open obligations.** The example's escalation on the two batch-40 forward
  references (supplier IDs, consumer ID, consuming step and remedy recorded
  above and in the cross-batch input); the run-wide gate-liveness aggregate
  observation; the pre-existing plan `redundant-prereq` warnings and the
  category-level pathway gaps, none of which belongs to this pair.

### Note on the escalated receipt

The example's `escalate` receipt was recorded at 11:25; its own cross-batch
evidence rows and the manifest sync were refreshed immediately afterwards (as
the dependency brief requires) and again after the final wording edit, so the
run-level `step3-decisions check --phase final` now lists the item as
"changed inputs require a current owner decision". This is the expected
owner-resolution trigger for an escalation: the tool correctly refuses a
non-owner overwrite of an escalated decision
(`The owner must resolve this item decision`), and the six other owned items
are closed with current receipts. Whichever stage next authorises this item's
decision must re-affirm the escalation or resolve it against the completed
batch-40 suppliers; no non-owner action in this dispatch can replace it.

