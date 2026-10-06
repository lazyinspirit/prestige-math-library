# Step 3b author report — `morita-bicategories-and-projective-generators` / `-examples`

- **Run:** frontier-41-ha-dt-29, role `alpha-high`, label
  `step3b-pair-morita-bicategories-and-projective-generators-71efe02e4c779b05`.
- **Owned pair:** A `morita-bicategories-and-projective-generators` (order 921,
  batch 26) / B `morita-bicategories-and-projective-generators-examples`
  (order 922, batch 26). Batch 26 holds only this pair.
- **Owned item IDs (19), in assigned dependency-level order:**
  1. `def-bicategory-pseudofunctor-and-biequivalence` (L0, A)
  2. `def-center-of-a-ring` (L0, A)
  3. `def-small-projective-generator-and-progenerator` (L0, A)
  4. `lem-endomorphism-ring-of-an-object-in-a-preadditive-category` (L0, A)
  5. `lem-finite-projective-dual-basis-gives-tensor-hom-isomorphism` (L0, A)
  6. `def-morita-bicategory-of-rings-and-bimodules` (L1, A)
  7. `lem-equivalences-preserve-progenerators` (L1, A)
  8. `lem-generator-hom-functor-is-exact-coproduct-preserving-and-faithful` (L1, A)
  9. `lem-small-projective-modules-are-exactly-finitely-generated-projective-modules` (L1, A)
  10. `lem-bimodule-tensor-associators-and-unitors-satisfy-bicategory-coherence` (L2, A)
  11. `cex-a-projective-generator-need-not-be-small` (L2, B)
  12. `lem-copower-presentation-construction-is-left-adjoint-to-generator-hom` (L3, A)
  13. `lem-tensoring-defines-a-pseudofunctor-with-interchange` (L4, A)
  14. `thm-cocomplete-abelian-category-with-small-projective-generator-is-a-module-category` (L4, A)
  15. `thm-eilenberg-watts-biequivalence-for-module-categories` (L5, A)
  16. `thm-morita-equivalence-is-invertibility-of-a-bimodule` (L6, A)
  17. `cor-center-is-morita-invariant-via-natural-endomorphisms` (L7, A)
  18. `ex-matrix-ring-morita-pair-with-explicit-tensor-inverses` (L7, B)
  19. `ex-central-elements-as-natural-endomorphisms-of-the-identity` (L8, B)
- **Pages to author:** `library/homological-algebra/morita-bicategories-and-projective-generators.md`
  (16 A items) and `.../morita-bicategories-and-projective-generators-examples.md`
  (3 B items).

## Open obligations at entry

- [ ] Author all 19 items as `status: draft` files in `items/`, matching the
  batch-26 manifest statements (promised claims preserved), with complete
  proofs/facts and valid tags; definitions keep their `justified_by` links.
- [ ] Create both `library/homological-algebra/` page files with the item lists
  and prose summaries; keep them draft.
- [ ] Reconcile in-run supplier status: batch-25 HA-25 items
  (`eilenberg-watts-theorem-and-natural-transformations` pair) were **not
  authored at entry**; flag exact supplier IDs, consumers and consuming steps
  below; recheck before handoff.
- [ ] Run explicit-path precheck + rendercheck + proof-layout on changed items;
  `content-policy` (item scope), `depcheck`/`extcheck`/`fwdcheck` for the
  level, `item-dependency-levels.mjs check --run frontier-41-ha-dt-29`,
  `manifest-deps`, `coverage-checklist --require-destination`,
  `validate-plan research/plan-spec.json`, proof-contract merge + strict gates
  for batch 26.
- [ ] Record Step-3b item decisions (`tools/step3-decisions.mjs record-item`)
  for each of the 19 scaffold items — `accept`/`repaired` only with confidence
  1 and examined dependency IDs; `escalate` where an unfinished supplier is
  load-bearing (exact supplier + consuming step recorded).
- [ ] Update batch-26 cross-batch dependency rows / dependency levels if any
  actual dependency changed; preserve sibling rows and other pairs.
- [ ] Report published concerns (F1/F2/F3/F4 recheck) with exact IDs and
  evidence; do not edit shared ledgers.
- [ ] Step-3a findings recheck: F1 (ring structure on Nat(1,1): record route),
  F2 (coverage destination rows; owner-owned scaffold record — do not edit?),
  F3/F4 notes.

## Checkpoint log (append after each item)

### Entry state (audit)

- Batch-26 manifest read in full; all 19 items have statements, deps,
  `dependency_level`, provenance and source URLs. `plan-spec.json` pages
  921/922 agree with the manifest (`requires` arrays equal).
- Step-3a review (`...-step3a-review-morita-bicategories-and-projective-generators.json`)
  decision `sufficient`, sha pinned; report read in full (findings F1–F4).
- Batch-26 notes and coverage read; cross-batch rows (13) to batch 25 exist.
- `items/` contains none of the 19 IDs and none of the batch-25 HA-25 items at
  entry; no `library/homological-algebra/morita-*` page files exist.
- In-run supplier status at entry: **all seven** batch-25 HA-25 suppliers used
  by this pair are unauthored: `def-additive-cocontinuous-module-functor`,
  `lem-additive-cocontinuous-module-functors-form-a-category`,
  `thm-eilenberg-watts-for-arbitrary-unital-rings`,
  `thm-natural-transformations-of-tensor-functors-are-bimodule-maps`,
  `cor-eilenberg-watts-is-an-equivalence-of-hom-categories`,
  `lem-canonical-free-presentation-controls-eilenberg-watts-comparison`,
  `lem-tensor-hom-adjunction-for-bimodules`. Consumers and consuming steps are
  itemized in "Unfinished-supplier flags" below.

## Unfinished-supplier flags (update as they are authored)

| supplier (batch 25) | consumer (this pair) | consuming step | status |
|---|---|---|---|
| `def-additive-cocontinuous-module-functor` | `lem-tensoring-defines-a-pseudofunctor-with-interchange`; `thm-eilenberg-watts-biequivalence-for-module-categories` | target 2-category of $\Phi$ (steps on 1-cells/2-cells) | unauthored at entry |
| `lem-additive-cocontinuous-module-functors-form-a-category` | `lem-tensoring-defines-a-pseudofunctor-with-interchange` | hom-categories of $\mathbf{RngMod}$ | unauthored at entry |
| `thm-eilenberg-watts-for-arbitrary-unital-rings` | `lem-tensoring-...`; `thm-morita-equivalence-...` | placing $T_M$ in the target class; representation $F\mapsto F(A)$ | unauthored at entry |
| `thm-natural-transformations-of-tensor-functors-are-bimodule-maps` | `lem-tensoring-...`; `thm-morita-...`; `cor-center-...` | interchange; invertibility; Nat$(1,1)$ ring | unauthored at entry |
| `cor-eilenberg-watts-is-an-equivalence-of-hom-categories` | `thm-eilenberg-watts-biequivalence-...`; `thm-morita-...` | local equivalence clause; kernel comparison | unauthored at entry |
| `lem-canonical-free-presentation-controls-eilenberg-watts-comparison` | `lem-copower-presentation-construction-...` | canonical presentation $A^{(J)}\to A^{(I)}\to V\to0$ | unauthored at entry |
| `lem-tensor-hom-adjunction-for-bimodules` | `thm-morita-...` | $T_P\dashv\operatorname{Hom}_B(P,-)$ uniqueness comparison | unauthored at entry |

(Reason recorded: the sibling HA-25 pair author was dispatched in the same
wave; its items are read provisionally from the batch-25 manifest and the
exact supplier ID, consumer ID and consuming proof step are kept here until
the suppliers are authored and reconciled.)

## Item checkpoints

### 1. `def-bicategory-pseudofunctor-and-biequivalence` (L0, A) — authored

- Claim preserved verbatim from the manifest; pure definition, no proof
  section (`verification.precheck: n/a`; `provenance.proof: not-applicable`).
- Suppliers read: `def-strict-two-category`, `def-monoidal-category`,
  `def-natural-transformation`,
  `def-vertical-composition-of-natural-transformations`,
  `def-natural-isomorphism`,
  `def-horizontal-composition-and-whiskering-of-natural-transformations`,
  `def-equivalence-and-adjoint-equivalence-of-categories`, `def-functor-category`.
  All published; the strict-2-category and one-object-monoidal special cases
  match the published definitions (strictness is literal equality; a
  one-object bicategory is a monoidal category).
- Checks: precheck n/a-clean, rendercheck clean. Decision pending (record at
  end after all checks).

### 2. `def-center-of-a-ring` (L0, A) — authored

- Verification added: zero/one central, closure under $+$, $\cdot$, $-$, the
  subring criterion, commutativity of $Z(A)$, and both directions of
  `A` commutative $\Leftrightarrow$ $Z(A)=A$. Step labels follow the precheck
  layer convention. `verification.precheck: pass`.
- Suppliers read: `def-ring`, `def-subring`, `def-commutative-ring` (all
  published, statements match the uses).
- Checks: precheck PASS (direct); proof-layout 8 steps, 0 defects.

### 3. `def-small-projective-generator-and-progenerator` (L0, A) — authored

- Pure definition; the coherence claims "small projective generator =
  progenerator in module categories" and "the regular module is one" are
  carried by the recorded `justified_by:
  [lem-small-projective-modules-are-exactly-finitely-generated-projective-modules]`
  and are proved there (item 9 below).
- `verification.precheck: n/a`.

### 4. `lem-endomorphism-ring-of-an-object-in-a-preadditive-category` (L0, A) — authored

- Verification added: (R1) hom-group, (R2) composition monoid with $1_P$,
  (R3) bilinearity/distributivity, assembly as a unital ring, opposite ring
  via `def-opposite-ring`, and the module-case identification. Steps layered
  1.1-1.3, 2.1, 3.1-3.2, 4.1.
- **Local dep addition:** `def-opposite-ring` (published) added to the item's
  deps and to the batch-26 manifest entry (statement unchanged; level stays 0
  because the dep is out of run). Reason: the statement names
  $\operatorname{End}_{\mathcal C}(P)^{\mathrm{op}}$ and the published
  definition supplies the ring laws for reversed multiplication.
- Checks: precheck PASS (direct); proof-layout 7 steps, 0 defects.

### 5. `lem-finite-projective-dual-basis-gives-tensor-hom-isomorphism` (L0, A) — authored

- Verification added: $(A,B)$-bimodule structure on $P^{\vee}$, dual basis
  from a finite free cover split by projectivity, balanced evaluation pairing,
  existence/naturality of `ev`, the inverse
  $h\mapsto\sum_i\varphi_i\otimes h(p_i)$, both composite computations, and
  left $A$-linearity. Steps 1.1-1.3, 2.1-2.2, 3.1-3.2, 4.1.
- **Local dep addition:**
  `lem-generated-submodule-as-finite-linear-combinations` (published) added
  to the item's deps and to the batch-26 manifest entry (statement unchanged;
  level stays 0, out-of-run dep). Reason: the finite free cover
  $B^n\twoheadrightarrow P$ is built from a finite generating set, which needs
  the finite-linear-combination description of the generated submodule.
- Suppliers read (all published, statements match): `def-bimodule`,
  `def-projective-module`,
  `def-generated-cyclic-finitely-generated-and-free-modules`,
  `lem-generated-submodule-as-finite-linear-combinations`,
  `thm-projective-object-characterisations`,
  `thm-universal-property-of-module-tensor-products`,
  `prop-elementary-tensor-formulas-descend-exactly-when-balanced`,
  `thm-bimodule-actions-induced-on-tensor-products`,
  `prop-functoriality-of-module-tensor-products`,
  `def-direct-sum-of-a-family-of-modules`,
  `thm-universal-property-of-module-direct-sums`,
  `def-hom-groups-and-induced-hom-maps`.
- Checks: precheck PASS (direct); proof-layout 8 steps, 0 defects; rendercheck
  clean.

**Pending across items 1-5:** batch-26 manifest dep additions for items 4 and
5; batch-26 proof contracts; step-3b decisions; page files.

## Final handoff

### Completed IDs (19/19 authored)

All 19 assigned items are fully authored as `status: draft` files; every
promised statement is preserved from the batch-26 manifest (no statement
change), each proof-bearing item has a complete argument with numbered,
tagged steps, and each `justified_by` link is retained:

1. `def-bicategory-pseudofunctor-and-biequivalence` (L0) — definition, no proof.
2. `def-center-of-a-ring` (L0) — Verification, 8 steps.
3. `def-small-projective-generator-and-progenerator` (L0) — definition,
   justified by item 9.
4. `lem-endomorphism-ring-of-an-object-in-a-preadditive-category` (L0) — 7 steps.
5. `lem-finite-projective-dual-basis-gives-tensor-hom-isomorphism` (L0) — 8 steps.
6. `def-morita-bicategory-of-rings-and-bimodules` (L1) — definition, justified
   by item 10.
7. `lem-equivalences-preserve-progenerators` (L1) — 8 steps.
8. `lem-generator-hom-functor-is-exact-coproduct-preserving-and-faithful` (L1) — 8 steps.
9. `lem-small-projective-modules-are-exactly-finitely-generated-projective-modules` (L1) — 6 steps.
10. `lem-bimodule-tensor-associators-and-unitors-satisfy-bicategory-coherence` (L2) — 6 steps.
11. `cex-a-projective-generator-need-not-be-small` (L2) — 4 steps, AC declared.
12. `lem-copower-presentation-construction-is-left-adjoint-to-generator-hom` (L2) — 6 steps, constructive.
13. `lem-tensoring-defines-a-pseudofunctor-with-interchange` (L3) — 7 steps.
14. `thm-cocomplete-abelian-category-with-small-projective-generator-is-a-module-category` (L3) — 4 steps.
15. `thm-eilenberg-watts-biequivalence-for-module-categories` (L4) — 4 steps.
16. `thm-morita-equivalence-is-invertibility-of-a-bimodule` (L5) — 9 steps.
17. `cor-center-is-morita-invariant-via-natural-endomorphisms` (L6) — 4 steps.
18. `ex-matrix-ring-morita-pair-with-explicit-tensor-inverses` (L6) — 5 steps.
19. `ex-central-elements-as-natural-endomorphisms-of-the-identity` (L7) — 6 steps.

Pages authored:
`library/homological-algebra/morita-bicategories-and-projective-generators.md`
(16 items) and `.../morita-bicategories-and-projective-generators-examples.md`
(3 examples). Both are `status: draft`, list exactly the owned IDs, and carry
prose summaries.

### Unfinished-supplier reconciliation (was the only escalation source)

At entry, seven batch-25 HA-25 suppliers were unauthored. During this session
the sibling author landed all of them; each was read and its statement matched
to the consuming step:

| supplier | consumer(s) | consuming steps | status |
|---|---|---|---|
| `def-additive-cocontinuous-module-functor` | items 13, 15, 16 | [F1]/1.1, [F3]/1.2, [F2]/1.1 | verified |
| `lem-additive-cocontinuous-module-functors-form-a-category` | items 13, 15 | [F1]/1.1, [F3]/1.2 | verified |
| `thm-eilenberg-watts-for-arbitrary-unital-rings` | items 13, 16 | [F2]/1.1, [F2]/1.1 and 1.3 | verified |
| `thm-natural-transformations-of-tensor-functors-are-bimodule-maps` | item 16 | [F3]/2.1 | verified |
| `cor-eilenberg-watts-is-an-equivalence-of-hom-categories` | item 15 | [F2]/1.1 and 1.3 | verified (landed during the session; read and reconciled) |
| `lem-canonical-free-presentation-controls-eilenberg-watts-comparison` | items 12, 14 | [F4]/1.1 and 2.1, [F4]/2.1 | verified |
| `lem-tensor-hom-adjunction-for-bimodules` | item 16 | [F8]/1.4 | verified |

No item decision remains escalated: the transient open edge for item 15 was
reconciled after the supplier was authored, and all 19 decisions were recorded
with confidence 1.

### Dependency record changes (batch 26 input file)

`research/frontier-41-ha-dt-29-batch-26.cross-batch-dependencies.json` was
rewritten with one row per `(kind, consumer, supplier)` and refreshed through
`frontier-dependency-ledger.mjs refresh`:

- **New verified edges:** item 14 ← `lem-canonical-free-presentation-...`;
  item 15 ← `lem-additive-cocontinuous-module-functors-form-a-category`;
  item 16 ← `def-additive-cocontinuous-module-functor`.
- **Removed edges (declaration dropped, actual use removed with evidence):**
  item 13 ← `thm-natural-transformations-of-tensor-functors-are-bimodule-maps`
  (interchange computed directly); item 16 ← `cor-eilenberg-watts-is-an-
  equivalence-of-hom-categories`; item 17 ← `thm-natural-transformations-of-
  tensor-functors-are-bimodule-maps` (Nat(1,1) identified by direct evaluation).
- All other scaffolded rows (items 12, 13, 14, 15, 16 and the page edge) are
  `verified` against the authored suppliers; the page edge is satisfied by the
  item-level uses listed above.

Dependency levels were recomputed from the final in-run DAG and recorded
consistently in both the item frontmatter and the batch-26 manifest
(`def-*`/`lem-*` level-0 group; 1: items 6, 7, 8, 9; 2: items 10, 11, 12;
3: items 13, 14; 4: item 15; 5: item 16; 6: items 17, 18; 7: item 19).

### Checks actually run (with results)

- `tools/tsx-run.mjs tools/precheck.mts` on the 19 explicit item paths:
  **16 checked, 0 failing** (the three pure definitions report n/a).
- `node tools/proof-layout.mjs` once on all 19 changed item paths:
  **19 items, 100 steps, 0 defects**.
- `node tools/rendercheck.mjs` on the 19 items and the two new pages:
  **21 files, all clean** (frontmatter, delimiters, KaTeX).
- `node tools/depcheck.mjs` with the 19 IDs: **0 findings mentioning any owned
  item**.
- `node tools/fwdcheck.mjs` and `node tools/extcheck.mjs`: no finding mentions
  any owned item.
- `node tools/content-policy.mjs` over all batch manifests: **0 errors and 0
  warnings for the 19 owned items** (run-wide errors belong to unauthored items
  of other in-flight pairs).
- `tools/item-dependency-levels.mjs` on the batch-26 subset: **0 errors for all
  19 items**. (The whole-run check still reports label mismatches in other
  batches, e.g. Morse-theory items, which belong to other authors.)
- `node tools/manifest-deps.mjs` batch 26: 19 items, 0 errors.
- `node tools/coverage-checklist.mjs ... --require-destination`: 2 pages, 40
  rows, 0 errors, 0 warnings.
- `node tools/validate-plan.mjs research/plan-spec.json`: exit 0 (the 259
  pages without item lists are the pre-splice state; pages 921/922 carry their
  items in the batch manifest and are awaiting the Step-4 splice).
- Proof contracts: `research/frontier-41-ha-dt-29-batch-26.proof-contracts.json`
  written with scope of all 19 items and entries for all 19;
  `proof-contract.mjs --strict` **0 errors, 19/19 checked**;
  `citation-fidelity.mjs --fail-on-missing-quote` **192 citations, every quote
  found**; `boundary-audit.mjs` **no templates, no contradicted rows**;
  `finite-smoke.mjs` **1 check passed** (`matrix-ring-laws-mod-n` for item 18:
  associativity and determinant multiplicativity held in 720 products, moduli
  through 6); `gate-liveness.mjs` **all four lanes live**;
  `risk-report.mjs` (without `--require-reviewed`) 0 errors.
- `tools/step3-decisions.mjs check --phase final`: at first recording
  (2026-10-06 01:33:28-31 local) **0 open work rows for the 19 owned items**;
  all 19 receipts recorded (`accept` ×5 for the items whose scaffold needed no
  dependency or route change, `repaired` ×14). Twenty seconds later the
  sibling batch-25 author rewrote `lem-tensor-hom-adjunction-for-bimodules`,
  which invalidated four of the receipts; see the reconciliation section
  below. After re-recording: **19/19 closed, 0 open**.
- `frontier-dependency-ledger.mjs refresh --run frontier-41-ha-dt-29`: success
  after the final input edit.

### Added suppliers

No new item was created: the four local closure items named in the Step-3a
report were already part of the scaffold inventory and are owned here
(`def-center-of-a-ring`, `lem-endomorphism-ring-of-an-object-in-a-preadditive-
category`, `lem-generator-hom-functor-is-exact-coproduct-preserving-and-
faithful`, `lem-equivalences-preserve-progenerators`). Published prerequisites
added to owned dependency lists (and to the manifest): `def-opposite-ring`,
`lem-generated-submodule-as-finite-linear-combinations`,
`prop-modules-and-homomorphisms-form-category-rmod`,
`thm-rmod-is-complete-and-cocomplete`,
`def-kernels-and-cokernels-as-equalizers-and-coequalizers`,
`thm-yoneda-embedding-is-fully-faithful`,
`thm-the-adjunction-hom-set-bijection-under-local-smallness`,
`def-natural-transformation`, `def-preadditive-category`,
`def-abelian-category`, `thm-modules-over-a-ring-form-an-abelian-category`,
`def-hom-groups-and-induced-hom-maps`,
`cor-a-morphism-in-an-abelian-category-is-monic-exactly-when-its-kernel-is-
zero-and-epic-exactly-when-its-cokernel-is-zero`,
`def-exact-functor-between-abelian-categories`,
`def-left-exact-and-right-exact-functor`, `def-additive-functor`,
`def-matrix-units`, `lem-matrix-unit-multiplication`,
`def-matrices-over-a-commutative-ring`, `def-field`, `def-commutative-ring`,
`def-projective-module`, `def-generator-and-cogenerator-of-a-category`,
`def-separating-set-and-coseparating-set`,
`def-preservation-reflection-creation-continuity-and-cocontinuity`,
`def-adjunct-and-transposition-under-an-adjunction`.

### Scaffold defects repaired locally (reported, not escalated)

1. `lem-generator-hom-functor-...` clause 5: the scaffold strategy said the
   generator index set `C(P,Z)` is empty when `H(Z)=0`. It is a singleton
   (the zero morphism). The authored step 1.3 uses the correct singleton
   argument: the canonical epimorphism is the zero map `P→Z`, whose cokernel
   is `Z`, and epicness forces `Z=0`. Statement unchanged.
2. Item 4 and the Step-3a F1 route: the ring structure on
   `Nat(1,1)` is proved inline in `cor-center-...` (step 1.1), so the corollary
   no longer relies on a small-source functor-category supplier; the
   tensor-classification dependency was removed with evidence.
3. `def-opposite-ring` and `lem-generated-submodule-as-finite-linear-
   combinations` were silently assumed by items 4 and 5 and are now declared
   dependencies.

### Published concerns (no edits made to published content)

- **F2 (confirmed, owner-owned coverage record):** two rows of
  `research/frontier-41-ha-dt-29-batch-26.coverage.json` defer material to
  destinations that do not host it (EGNO Prop 1.8.17 Gabber; FSS Radford S^4).
  Neither claim is used by any owned item. Required action: owner corrects the
  two disposition reasons (`out-of-scope` or a real home) before the Step-3
  baseline/splice; no repair within author scope.
- **F3/F4 (non-defects, rechecked):** the published example
  `ex-cyclic-tensor-coinvariants-of-matrix-bimodules` does not state the tensor
  inverses of item 18, so there is no duplication; `def-matrix-units` and
  `lem-matrix-unit-multiplication` are now used by items 18 and 19, replacing
  the heavier matrix-multiplication citations. The Crawley-Boevey Example (ii)
  row remains marked `inline` while item 18 states the matrix-ring instance
  only; that is the designed claim, not a gap.
- No published dependency was found defective in statement or hypothesis at the
  level required by the owned proofs; the one source-hypothesis mismatch found
  at Step 1 (commutative-only `thm-hom-tensor-adjunction-for-modules`) is
  already replaced locally by
  `lem-finite-projective-dual-basis-gives-tensor-hom-isomorphism`.

### Pre-splice plan mismatches reported for Step 4

- `research/plan-spec.json` pages 921/922 still carry empty item arrays; this is
  the expected pre-splice state. The batch-26 manifest holds the final 16+3
  inventory with recomputed dependency levels, and both pages exist as draft
  files with matching `items`/`examples` lists. No `requires` disagreement and
  no ID collision is present for this pair.
- The unified cross-batch ledger now records three new `verified` edges and
  three `removed` edges for batch 26 as itemized above; the Step-4 splice
  should consume the refreshed ledger, not the scaffold rows.

### Open obligations at handoff

- **None for the owned pair.** All 19 items are authored, checked, contracted
  and decided; both pages are draft and registered; the ledger input is
  refreshed.
- Run-level (not owned): the whole-run `item-dependency-levels` check still
  reports label mismatches in other batches (Morse-theory items), the
  whole-run `content-policy` reports missing item files for other in-flight
  pairs, and `merge-proof-contracts` cannot run until the remaining batch
  contract files exist. These belong to the other pair authors / the engine.
- The remaining independent mathematical audit of this pair (Steps 5–8) and
  the Step-4 splice are outside this dispatch.

## Post-handoff reconciliation (2026-10-06, 01:38 local)

On resuming to verify the handoff, `tools/step3-decisions.mjs check --phase
final` showed **4 open items** — `thm-morita-equivalence-is-invertibility-of-a-
bimodule`, `cor-center-is-morita-invariant-via-natural-endomorphisms`,
`ex-matrix-ring-morita-pair-with-explicit-tensor-inverses` and
`ex-central-elements-as-natural-endomorphisms-of-the-identity`, all reporting
"current item audit required". Root cause, established from mtimes and the
receipt hashes: the 19 receipts were recorded at 14:33:28–31Z, and the sibling
batch-25 author then rewrote `items/lem-tensor-hom-adjunction-for-bimodules.md`
at 14:33:50Z. That file is the only input newer than the receipts in the
transitive input closure of the four items (checked with
`itemInputPaths`; 947 input files, 1 changed), so the stored `sha256` no longer
matched `itemHash`. The other 15 receipts were unaffected (`thm-eilenberg-watts-
biequivalence-for-module-categories` does not depend on that supplier).

Reconciliation performed:

1. Re-read each of the four items and the current supplier. The supplier's
   statement still contains the exact claim consumed in `thm-morita-…` step
   1.4 / [F8] ("Consequently $T_M=M\otimes_A-$ is left adjoint to
   $\operatorname{Hom}_B(M,-)$" with $(a\varphi)(m)=\varphi(ma)$), and its
   added unit/counit clause is consistent with the uniqueness-of-left-adjoints
   comparison used there. The other three items use the chain only through
   unchanged statements.
2. Re-recorded all four decisions with
   `tools/step3-decisions.mjs record-item --decision repaired --confidence 1`
   and the re-examined dependency ID lists (reasons quote the root cause and
   the consuming step).
3. Re-ran, in this session, on the current content:
   `precheck` 16 checked / 0 failing; `proof-layout` 21 files / 100 steps / 0
   defects; `rendercheck` 21 files clean; `proof-contract --strict` on
   batch 26 = 0 errors, 19/19; `citation-fidelity --fail-on-missing-quote` =
   192 citations, every quote found; `item-dependency-levels` (batch-26
   subset) 19 items / 0 errors with the levels listed above;
   `manifest-deps` 0 errors; `content-policy` (batch 26) 0 errors / 0
   warnings; `coverage-checklist --require-destination` 0 errors / 0
   warnings; `validate-plan research/plan-spec.json` exit 0;
   `depcheck`/`fwdcheck`/`extcheck` — no finding mentions any owned ID (their
   whole-run failures are in other pairs: Morse-theory handle items, etc.);
   `step3-decisions.mjs` owned-ID check **19/19 closed, 0 open**;
   A-page scope decision `sufficient` and current (sha match).

Run-level notes for the engine (not owned, not repaired here):

- `research/frontier-41-ha-dt-29-proof-contracts.json` (written 01:35:45 by
  another worker) does **not** contain the batch-26 entries; the final merge
  must include `research/frontier-41-ha-dt-29-batch-26.proof-contracts.json`
  (which passes `--strict` on its own).
- `frontier-dependency-ledger.mjs refresh --run frontier-41-ha-dt-29` currently
  aborts on `frontier-41-ha-dt-29-batch-19.cross-batch-dependencies.json`
  ("invalid review or consumer ownership"), an in-flight sibling input.
  Batch 26's own input validates under the same rules (16 rows: 13 `verified`,
  3 `removed`), so the run-level ledger will refresh once batch 19 is fixed.
- The derived ledger rows themselves are unaffected by the supplier-text edit
  (edges, not text); the earlier successful refresh at 01:32 stands.
- Race note for the Step-3 gate: the four re-recorded receipts are valid
  against the current bytes of the batch-25 suppliers. Any further edit by the
  batch-25 author to `lem-tensor-hom-adjunction-for-bimodules` (or to any
  declared dependency of these items) will invalidate them again; re-run the
  `step3-decisions` owned-ID check after all Step-3 writers have drained, and
  re-record with a current reason before the final gate if it reports open
  work.

Mathematical spot-checks read in full during reconciliation (beyond the four
re-decided items): `cex-a-projective-generator-need-not-be-small`,
`lem-generator-hom-functor-is-exact-coproduct-preserving-and-faithful`,
`thm-cocomplete-abelian-category-with-small-projective-generator-is-a-module-
category`, `thm-eilenberg-watts-biequivalence-for-module-categories`; the
arguments are as recorded and no new defect was found in them. Thorough
independent audit remains Steps 5–8.
