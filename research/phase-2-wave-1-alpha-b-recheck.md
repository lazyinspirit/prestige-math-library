# Phase 2 wave 1 — Alpha group `b`, Step 3 recheck

Date: 2026-09-08

This recheck covers batches `14` and `15`. I reread the group review and
current verdict bytes, both fix notes, the current manifests and coverage,
the controlling SET-2/SET-9/DC–Baire design sections, the corresponding plan
records, the existing item-level semantic audit and the load-bearing published proof interfaces, the
owned frontier-ledger inputs, and the cited full-text source passages. This is
a current-state scaffold decision, not publication approval.

## Current verdicts

| Batch | A page | B page | Verdict |
| ---: | --- | --- | --- |
| 14 | `deduction-soundness-completeness-and-compactness` | `deduction-soundness-completeness-and-compactness-examples` | `sufficient` |
| 14 | `set-theoretic-trees-delta-systems-and-diamond` | `set-theoretic-trees-delta-systems-and-diamond-examples` | `sufficient` |
| 15 | `dependent-choice-and-the-complete-metric-baire-theorem` | `dependent-choice-and-the-complete-metric-baire-theorem-examples` | `sufficient` |

No current A/B pair has an unmet or inadequate prerequisite, so no verdict has
a `missing` list. No new prerequisite A/B pair is required.

## Finding dispositions and regression audit

### Batch 14 F4, deduction/model theory — resolved

The former finding was that structural resolution did not certify the exact
published proofs below the three page roots
`formal-set-theoretic-syntax-structures-and-satisfaction`,
`countability-and-uncountability`, and
`cardinal-arithmetic-and-cofinality`. The repair now records a fresh closure
from all 90 batch-14 items: 321 IDs comprising 90 owned items and 231 published
suppliers. The existing audit covered 52 distinct immediate external suppliers over 101 direct
manifest edges; the new representation lemma adds two edges to already audited suppliers, no missing ID, and no cycle. I recomputed every published
whole-file hash and both aggregate inventories against current bytes. All 231
item hashes match; the published inventory remains
`e379582b4d58388bb8287255324cb6ebc73627423c385318ed7c04b36517b134`,
and its historical direct-interface inventory was
`8194267cc5aa7aca27236a2d78287c3f29f1ef670d3aa2de7136880932d2326d`.
The new lemma uses `thm-transfinite-recursion` and `thm-well-ordering-theorem`
in precisely their ZFC forms; both were already in the published inventory.
Thus the repair is attached to the live proofs, not the stale 352-ID traversal
retained as history.

The exact interfaces are adequate. Set structures have nonempty carriers;
substitution retains the free-for convention; soundness and the deduction
theorem retain their generalization, sentence, and freshness side conditions.
Fresh-constant elimination, Henkin consistency, canonical countable coding,
the congruence quotient, term-model truth lemma, and compactness appear in
proof order. Least natural codes make the countable-language construction a
ZF argument. Well-ordering, Zorn, arbitrary well-orderable-language Henkin
completion, and the stated Skolem cardinal bounds occur only in explicitly
ZFC results. The arbitrary-language Boolean-prime-ideal strengthening remains
later and is not imported. The elementary-chain, Tarski–Vaught, diagram, and
Loewenheim–Skolem uses match the statements and directions of their suppliers.
The nonstandard-model and noncategoricity applications do not assert
`Con(ZF)`.

Moschovakis, §§1H–1J (printed pp.34–46) and §2B (pp.63–65), and
Weiss–D'Mello, Chapter 2 (pp.14–21) and Chapter 3 (pp.24–25), remain two
independent complete-text treatments for the harvested spine. Exercise-only
diagram work and the arbitrary-cardinality extension are explicitly supplied
locally rather than falsely attributed to those texts. There is no source
drop or owner escalation.

**Disposition:** F4 is resolved for this pair; its former `missing` entry is
removed.

### Batch 14 F4, trees/delta systems/diamond — resolved

The same current 321-ID audit covers the roots
`club-stationary-sets-and-pressing-down` and
`filters-and-ultrafilters`. The published interfaces preserve regularity,
uncountability, proper-filter, and ZFC hypotheses. Hessenberg arithmetic and
cardinal absorption are used in their well-orderable-cardinal forms; the
well-ordering theorem, countable unions, successor-aleph regularity, and Zorn
enter only where ZFC is stated.

The local 42-A/7-B order remains complete. The indexed delta-system corollary
handles repeated supports; the finite-petals incomparability argument names
its ultrafilter input; finite-support Knaster and specialization prove only
their stated ccc conclusions and do not infer a generic filter. The
antichain-reflection and diamond-sealing lemmas support the conditional Suslin
construction. The width-one square convention needs no additional no-thread
clause because a continuous thread would force an initial club of order type
greater than the recorded bound. The local finite-beth definition and pattern
closure support the full induction
`beth_n(kappa)^+ -> (kappa^+)^(n+1)_kappa`, including `n=0`; no deferred
partition theorem is being used. Kurepa and Halpern–Läuchli statements remain
orientation-only with their later destinations and have no local consumer.

Karagila Chapter 9, the named tree/delta/partition passages in Monk,
Mildenberger–Shelah Definitions 1.1/1.9/1.11, Cummings–Magidor Definition
1.1, and Marks §§15–17 remain current full-text support at the exact locators
recorded in coverage. Local proofs replace the erroneous indexed-delta
citation and supply every adapted or exercise-only step. There is no source
drop or owner escalation.

**Disposition:** F4 is resolved for this pair; its former `missing` entry is
removed.

### Final repair within batch 14

Monk Proposition 9.33 (printed p86) was mapped only to the normal-tree definition.
I added `lem-normal-set-theoretic-tree-sequence-representation` immediately after
that definition. Transfinite recursion assigns an empty root code, successor
codes by injective successor labels, and limit codes by union. Normality supplies
level injectivity at limits; restriction and level injectivity prove order
reflection and downward closure. The general alphabet is T; omega suffices for
countable successor sets. Injections, rather than surjections onto omega, handle
finite branching correctly. Its four explicit dependencies precede it.

Monk p661 Propositions 1–2 were also implicit in a combined coverage row.
`def-pruned-tree-products-and-dense-matrices` now states and proves inline that
k-density is domination of level k and infinity-density is domination of every
node. The unique root and finite heights prove these directly. Coverage now
gives each proposition its own inline disposition, maps Proposition 9.33 to
the new lemma, and records the corrected source locator. No plan/prose edit or
new pair is needed: 42 A items remain below the page limit.

### Batch 15 — sufficient verdict stands

No batch-15 finding was issued and no repair changed its scaffold. Two historical
notes claiming increasing/unbounded witness indices were corrected to arbitrary
least witness indices; the manifest already had the correct extraction. Current
bytes still contain the planned 9-A/1-B inventory with explicit backward
`deps`, a leaf B page, and the ZF proof route required by the design. The
finite-path construction proves the prescribed-start form of DC without a
separate choice function. The forward implication applies DC once to nested
centre/radius states and proves membership of the complete-space limit by a
direct tail argument. In the converse, the first-difference ultrametric on
`A^omega` is complete using least stabilization indices, successor-occurrence
sets are open dense by one finite-cylinder extension, and natural-number
minimization plus recursion extracts the required relation chain without
requiring witness indices to increase.

Miller, Proposition 5.4 and its surrounding complete §5 (pp.10–11), and
Karagila, Chapter 2 §§2.1–2.4 (pp.8–11), remain independent full-text support
and explicitly expose the hidden-choice hazard. All 29 harvested results keep
valid dispositions. There is no DMC item, source drop, or owner escalation.

**Disposition:** the original `sufficient` verdict stands; no regression and
no missing prerequisite were found.

### Forbidden catalogue, frontier ledger, and scope — stand

The item closures, supplemental `justified_by` records, and load-bearing
`forward_refs` contain no direct or transitive path to
`deferred-set-theory-beyond-choice` or an item recorded there. The broader
administrative page closure of the metric-space prerequisites reaches an old
choice page, but the batch-15 load-bearing item proof is the audited local ZF
route; it does not import an AC theorem.

Both owned frontier inputs remain `[]`. A current reviewed refresh reports no
declared or reviewer-found batch-14 or batch-15 same-frontier edge and no
orphaned review; the unified ledger is generated from all current inputs; unrelated groups remain
outside this adjudication.

The refreshed group-b scope file contains 20 current declines, all `stands`,
with no pending or empty-evidence row. Deferred results retain valid later
destinations, and out-of-scope results have specific reasons. None is used as
a proof supplier by an assigned item.

## Checks run on current bytes

- `node tools/scope-decisions.mjs refresh --run phase-2-wave-1 --group b` — 20 declines, 0 pending.
- `node tools/scope-decisions.mjs check --run phase-2-wave-1 --group b` — 20 current declines, 0 errors.
- `node tools/frontier-dependency-ledger.mjs refresh --run phase-2-wave-1 --require-reviewed` — refreshed and deduplicated; all inputs reviewed and all declared edges reviewed.
- `node tools/coverage-checklist.mjs research/phase-2-wave-1-batch-14.coverage.json research/phase-2-wave-1-batch-15.coverage.json` — 3 pages, 146 harvested results, 0 errors, 0 warnings.
- `node tools/source-fetch-check.mjs --coverage research/phase-2-wave-1-batch-14.coverage.json,research/phase-2-wave-1-batch-15.coverage.json --stamp` — 9/9 sources fetch-verified and resolved, 0 newly stamped, 0 documented drops.
- `node tools/source-backing.mjs --coverage research/phase-2-wave-1-batch-14.coverage.json,research/phase-2-wave-1-batch-15.coverage.json --liveness research/phase-2-wave-1-url-liveness.json --require-verified` — all 66 authored results remain backed by openable sources or documented alternatives.
- `node tools/content-policy.mjs --manifest-only research/phase-2-wave-1-batch-14.pages.json research/phase-2-wave-1-batch-15.pages.json` — 100 scoped items, 0 errors, 0 warnings.
- `node tools/manifest-deps.mjs research/phase-2-wave-1-batch-{1..15}.pages.json` — 436 items, 0 normalized, 0 errors.
- `node tools/validate-plan.mjs research/plan-spec.json` — exit 0: page order is acyclic and consistent; no item cycle, forward reference, B-page dependency, or unresolved ID among pages with item lists.
- `node tools/extcheck.mjs --quiet` — exit 0. Its 63 marked external/inherited warnings are existing repository notices and none lies in an assigned load-bearing dependency cone.
- JSON parsing and final-newline/trailing-whitespace checks on the group scope file, verdict file, recheck, both owned frontier inputs, and the unified frontier ledger — passed.

Final terminal outcomes: `accept` for deduction/completeness, `repaired` for
trees/delta systems/diamond, and `accept` for DC/Baire, each with confidence 1.
The ordinary verdicts are sufficient for all three. No owner-decision file was
present for these pages. Published proofs and shared plan/prose were not edited.

Additional verification: a current published-item-first dependency traversal
finds 321 IDs for batch 14 and 160 for batch 15, with no missing ID or cycle.
An exploratory traversal that overlaid all other run manifests on published
items gave 358 IDs for batch 14; that substitution is not the current published
supplier graph and is not used as acceptance evidence. The initial auxiliary
YAML parser failed on a URL containing dashes; using line-delimited frontmatter
fixed the parser. Neither diagnostic was a source-fetch failure.
