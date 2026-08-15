# frontier-13 — RESUME

**Verify disk state before trusting any line here.** Run prefix is `frontier-13`.
Pairs span dependency levels 19–25, so there is **no single level number** and the
`run-level.mjs` driver's briefs do not apply (`UNATTENDED.md` §Limits — its step
table produces `research/level<n>-batch-<i>.*` paths that do not exist here).
Hand-orchestrated, as `frontier-11` and `frontier-12` were.

## Objective

Build the 11 buildable A/B pairs in **abstract algebra, linear algebra,
combinatorics, category theory and number theory** through steps 0 → 10.
Topology (4 pairs) and complex analysis (2 pairs) are on the frontier but out of
scope by the owner's subject list.

## Owner policy for this run

- Orchestrate **autonomously to the end of step 10**. **Do not pause at a step
  boundary** — a cleared step is a dispatch trigger, not a reporting checkpoint.
  Dispatch first, narrate after.
- **No permission prompts from anyone**, orchestrator or agent.
- Decision priority: **(1) mathematical accuracy, citational accuracy,
  mathematical richness; (2) minimise forward references and nonfatal defects.**
- Check in with the owner roughly every **20 minutes**, confirming nothing is
  stuck. A check-in is a report *while work continues*, never a pause.

## The 11 pairs and their batches

| batch | order | category | A page |
|---|---|---|---|
| 1 | 58 | abstract-algebra | `symmetric-polynomials` |
| 1 | 96 | abstract-algebra | `algebraic-extensions-degree-and-finite-fields` |
| 2 | 57.001 | number-theory | `primitive-roots-and-unit-groups-modulo-n` |
| 2 | 68 | abstract-algebra | `semidirect-products-and-automorphism-groups` |
| 3 | 88 | linear-algebra | `diagonalisation-and-the-minimal-polynomial` |
| 3 | 94 | linear-algebra | `inner-product-spaces-and-orthogonality` |
| 4 | 395 | combinatorics | `erdos-hajnal-property-and-homogeneous-sets` |
| 4 | 399 | combinatorics | `regular-pairs-and-induced-counting` |
| 5 | 106 | abstract-algebra | `tensor-products-of-modules` |
| 6 | 365.001 | category-theory | `adjunctions-units-and-counits` |
| 7 | 195 | combinatorics | `linear-recurrences-and-rational-generating-functions` |

Each A page's B companion is its `-examples` page. **Zero cross-pair seams** —
verified pairwise over all 11 `requires` closures, so `undeclared-prereq` forbids
any item citation between two of this run's pages, *including between the two
pairs inside one batch*. Fan-out: batch 6 unlocks **197** downstream A pages,
batch 5 unlocks 35, batch 3's order 88 unlocks 30.

## Current step

**Steps 1–3 COMPLETE. Step 3 Alpha scaffold review in flight** (dispatched
2026-08-15 00:48).

### Steps 1–2 — all seven Betas exited 0

| batch | runtime | A items | B items | harvest | declines |
|---|---|---|---|---|---|
| 7 | 46m40s | 32 | 14 | 60 | 3 |
| 3 | 54m44s | 23 + 33 | 12 + 16 | 126 | 6 |
| 1 | 56m07s | 26 + 35 | 9 + 14 | 97 | **15** |
| 2 | 65m47s | 26 + 23 | 11 + 15 | 96 | 10 |
| 6 | 75m40s | 51 | 9 | 194 | **63** |
| 5 | 90m19s | 38 | 11 | 121 | **4** |
| 4 | 91m33s | 19 + 25 | 8 | 93 | 12 |

**450 items total — 323 on A pages, 127 on B pages, 11 pairs. No pair needs a
split**; the largest A page is batch 6 at 51 against the 60 ceiling.

### Step-2 gates — all green

```
validate-plan.mjs                  exit 0   (after D1, D3.1, D5.1, D5.2)
coverage-checklist  x7             787 harvested results, 0 errors, 0 warnings
content-policy --manifest-only x7  450 scoped items,      0 errors, 0 warnings
```

Whole-run dependency graph over all 450 items: **0 cross-pair edges, 0 B-leaf
deps, 0 unresolved deps, 0 duplicate ids.** The zero-seam property holds on the
finished scaffold, not merely on the plan.

*Method note:* run the cross-edge check at **pair** granularity, not page. A
per-page test reports ~38 false hits, every one a B examples item citing its own
A page — which is what a B companion is for.

### REPAIR PHASE (2026-08-15 01:15 →) — where the run actually is

Step 3 review done, repairs done, **Alpha re-checks done**, corrective passes
closing. Sequence still owed: final corrective passes → short re-check round →
**step 4 splice (lead Alpha only)** → step 5 authoring.

**Step-4 task is already written and staged:**
`research/frontier-13-alpha-a-step4.task.md`. Do not dispatch it until every
corrective pass has landed and all three groups read `ready-for-splice`.

#### Re-check verdicts (2026-08-15 ~02:00)

| pair | verdict |
|---|---|
| 96 algebraic-extensions · 68 semidirect · 106 tensor-products | ready-for-splice |
| 94 inner-product · 399 regular-pairs | ready-for-splice |
| 58 symmetric-polynomials · 57.001 primitive-roots | not-ready |
| 88 diagonalisation · 195 linear-recurrences | not-ready |
| 395 erdős–hajnal · 365.001 adjunctions | not-ready |

#### MY OWN ERRORS THIS RUN — all corrected, all worth not repeating

1. **I wrote the fix briefs from each Alpha's `result.json` *tail* instead of its
   full report on disk, and renumbered findings while transcribing.** Eleven
   findings were dropped; the renumbering disguised the loss because my "F1.2"
   collided with a real, different F1.2. Two were real mathematics (F7.2's
   undischarged split hypothesis; F1.2's provenance sourced from an excluded
   range). **Always write routing tasks from the report file, and never renumber
   another agent's finding ids.**
2. **I relayed "re-anchor onto Treil Ch. 4" having verified only that the URL
   returned 200.** Ch. 4 contains zero occurrences of "minimal polynomial",
   "primary", "coprime" or "generalized eigenspace". 18 of 22 rows found no
   replacement and 9 items were left sourceless. **A URL resolving is not the
   source containing the material.** Same shape as D1, where I checked the page
   was published but not that the item lived on it.
3. **My first whole-run dependency sweep tested "is this dep published", not "is
   its home page in this pair's closure".** The second is what
   `undeclared-prereq` means; the weaker test missed a real defect.
4. **My first PDF-term check returned 0 for a document titled "The Minimal
   Polynomial".** Silent extraction failure reported as absence. Use the venv at
   `<scratchpad>/pdfvenv` (`pypdf`), and sanity-check that a term certain to be
   present is present.
5. **A `ps | grep dispatch.mjs` matches the monitor's own shell**, whose script
   text contains the labels — it read as three duplicate agents clobbering one
   batch. Filter on `comm ~ /node/`.

#### Content-verified replacement sources for page 88 (measured, not guessed)

| source | minimal poly | gen. eigenspace | primary decomp | relatively prime |
|---|---|---|---|---|
| Axler LADR 4e | 135 | 42 | 0 | 0 |
| Knapp *Basic Algebra* | 55 | — | 4 | 7 |

Both already in the run's ledger and live. Treil Ch. 9 has generalized
eigenspaces (63) and Cayley (15) but **0** minimal polynomial / primary / coprime.
Conrad has 0 "primary" across all seven sections.

#### Repair ledger

Passes landed: `fix` ×7 (all batches), `fix2` ×5 (1, 3?, 4?, 6, 7), `fix3` ×1 (6),
`fix4` ×1 (6). Running at last check: `fix2-batch-3`, `fix2-batch-4`,
`fix3-batch-7`. Chained: `fix3-batch-3` fires when `fix2-batch-3` lands.

Cumulative: items 450 → ~470; proof-contract citations 668 with **100 empty
arrays** → **0 empty**, and batch 6's **8 hollow citations** (quoting a clause's
opening words and stopping) replaced with real propositions.

#### Gate blind spots found — carry into step 5/6

- `--strict`'s "input map covers every step exactly once" **passes vacuously**
  when a contract puts one derivation at step 1.1 with every fact attached.
- **Half the citations are not yet checkable**: 285 of 594 target published items
  (all byte-exact); 309 cite unwritten items, so their "quote" is the planned
  title, and after step 5 that still passes `--strict`.
- `level-coverage` checks a URL is **present**, not that it **resolves**. All 35
  run URLs verified 200 on 2026-08-15; re-verify at step 6.
- **Deleting a coverage row is invisible** to `coverage-checklist`. Beta 3's
  voluntary `replacement_audit` is the only reason the page-88 shortfall surfaced
  — recommend making it a required artifact for any re-harvest.
- An **undeclared** hypothesis (batch 7 resting on "ℂ is algebraically closed") is
  structurally invisible to a closure audit, which only inspects declared `deps`.

### Step 3 — decisions settled, Alphas dispatched

All three group Alphas exited 0 (A 23m21s, B 27m30s, C 19m13s) — no quota
trouble at three concurrent Opus lanes plus the orchestrator. Reports:
`research/frontier-13-alpha-{a,b,c}-step3-scaffold-review.md`.

**Verdicts: 7 of 11 pairs `insufficient`.** None needed a split; every remedy is
items or citations, not a rewrite.

**The four findings that justify the whole step:**

1. **Batch 3's second source is a DEAD LINK** (group B). Kim's UCL notes,
   `homepages.ucl.ac.uk/~ucahmki/2201notes.pdf`, return **HTTP 404**; so does the
   directory. Verified independently by the orchestrator with browser headers.
   Computed from the coverage file: **47 of 114 rows (41%) rest on it, 15 items
   are backed only by it**, including `thm-primary-decomposition-for-an-endomorphism`
   and `lem-coprime-kernel-decomposition`. `level-coverage` checks a URL is
   *present*, not that it *resolves*. Remedy dispatched: Treil Ch. 4 (page 88),
   Axler LADR4e (page 94) — both verified HTTP 200.
2. **A hard `undeclared-prereq` failure** (group A):
   `def-tensor-product-of-modules-by-generators-and-relations` cited two items
   homed on `free-groups-and-presentations` (order 60), outside order 106's
   closure. **FIXED and re-verified — see the standing check below.**
3. **Three Statements claiming more than their proofs give**, all caught before
   authoring: `cor-a-galois-connection-…` (equality from a preorder),
   `cor-cayley-hamilton-recurrences-for-matrix-powers` (drops $A\in GL_d(K)$; a
   nilpotent $A$ falsifies it), and order 395 proving no positive EH instance at
   all.
4. **Uneven proof-contract citations**, run-wide and visible to no single group:
   batches 1/2 had 212/222 with none empty; **batches 4 and 5 were entirely
   empty**. All seven fix tasks carry the table.

### THE STANDING CHECK — run this, not the weaker one

The orchestrator's first whole-run sweep tested only whether each dependency was
**published**. That is NOT `undeclared-prereq`, and it missed finding 2. The
correct test resolves every published dependency to its **home page on disk** and
asks whether that page is in the pair's declared `requires` closure:

```
for each scaffolded item, for each dep:
  if dep is scaffolded in this run -> must be in the SAME pair, and not on a B page
  else -> resolve dep to its home page in library/**, and require
          that page ∈ closure(this pair's A page)
```

Post-repair snapshot (3 of 7 repaired): **457 items, 688 published deps checked,
0 out-of-closure, 0 cross-pair, 0 B-leaf.** Re-run it once all seven land — the
still-running batches were writing their `pages.json` during that snapshot.

### Spec amendments applied (all seam-verified before writing)

| id | edge | onto |
|---|---|---|
| D1 | `free-modules-…`, `tychonoff-…` | 365.001 |
| D1-amend | **removed** `conjugacy-…` (0 citations; rationale was wrong) | 365.001 |
| D3.1 | `field-extensions-and-the-complex-numbers` | 88 |
| D5.1 / D5.2 | `dual-spaces-…`, `field-extensions-…` | 106 |
| R2.1 | `polynomial-rings-and-roots` | 68 |
| R7.1 | `the-field-of-fractions-and-localisation` | 195 |

`validate-plan.mjs` exit 0 after every one.

### Repairs

`research/frontier-13-brief-beta-fix.md` + `research/frontier-13-beta-<i>-fix.task.md`
for all seven, dispatched as `--label fix-batch-<i>`; results land at
`research/frontier-13-dispatch/beta-fix-batch-<i>.result.json`.

Landed so far: **6** (12m10s, then a second pass `fix2-batch-6` for two residues
the first left — a poset hypothesis with no dependency supplying antisymmetry,
and an id still naming the "fractions adjoint triple" it no longer contains;
ids are immutable once on `main`, so this was the last free moment),
**1** (14m43s, 26→29 items on `symmetric-polynomials`, contracts 73/0 empty/218
citations), **5** (14m37s, F5.1 fixed, contracts 41/0 empty/147 citations).

**Next: when all seven land, re-run the standing check, then Alpha re-check, then
step 4 splice — lead Alpha (group A) only.** Step 4 must also drop batch 4's two
B-page summaries and resolve batch 3's ambiguous third summary paragraph.

### Step 3 — decisions settled, Alphas dispatched

`research/frontier-13-step3-decisions.md` holds all of them with the disk
evidence. Three `requires` amendments applied to `plan-spec.json` (each with a
`note`): **D3.1** `field-extensions-and-the-complex-numbers` → order 88;
**D5.1** `dual-spaces-bilinear-forms-and-inertia` and **D5.2**
`field-extensions-and-the-complex-numbers` → order 106. Every one verified
published, order-legal, absent from the prior closure, carrying the named
results, and **simulated against all 11 run closures for 0 seams** before
applying.

Both step-0 mathematical risks closed clean: batch 2 built
`thm-automorphisms-of-a-finite-cyclic-group` locally from four published items
instead of citing its batch-mate; batch 6 dropped MA-1 item 40 to the Hom-side
adjoint with a deferral row naming batch 5.

**Three group Alphas running** (pids 75480/75481/75482, one codex child each),
against `research/frontier-13-brief-alpha.md` whose "Named challenges" section is
now filled with per-group charges. Results land at
`research/frontier-13-dispatch/alpha-alpha-{a,b,c}.result.json`. A Monitor is
armed for those three plus quota/auth signals in the logs.

**QUOTA WATCH — the live risk.** Alpha is the Opus lane. Three concurrent Alphas
plus this orchestrator is effectively four concurrent Opus lanes at `xhigh`, and
`ARCHITECTURE.md` §6 records four such lanes exhausting the Claude session limit
in 25–34 minutes — a limit that also feeds the orchestrator. If the monitor
reports a quota signal, the recovery is to let the groups run **sequentially**
(A, then B, then C), not to re-dispatch all three.

## Decisions

- **D1 (step 0)** — added three published `requires` edges to
  `adjunctions-units-and-counits`:
  `conjugacy-and-simplicity-in-the-symmetric-groups` (64),
  `free-modules-and-exact-sequences` (104), `tychonoff-embedding-and-stone-cech`
  (271). Its MA-1 design in `research/plan-category-theory-track.md` names seven
  prerequisites; the spec declared one. Without them, MA-1 items 34/36/38 (free
  module, abelianisation, Stone–Čech adjunctions) fail `undeclared-prereq` at step
  4. `tensor-products-of-modules` deliberately **excluded** — it is batch 5 of this
  run, and the edge would serialise batches 5 and 6; MA-1 item 40 already
  specifies the Hom-side fallback. Recorded in the spec `note` field. Backup:
  `<scratchpad>/plan-spec.backup.json`.

## Mechanism changes made during this run (persistent, committed)

**`1fdc0946` — GROUP ALPHAS (owner instruction).** `dispatch.mjs` `alpha` lane cap
**1 → 3**. A run's batches divide among group Alphas, ≤3 batches each; each runs
**step 3** and **steps 6a/6b** for its own batches only, namespaced outputs. Three
stages stay single-agent **by rule**, pinned to the **lead Alpha**: step 4
propagation, step 6c cross-batch/cross-level citation audit, step 8 judge
adjudication. Docs updated in the same commit: `CLAUDE.md`, `LEVELS.md`
(Actors, step 3, step 6a), `ARCHITECTURE.md` §6, `briefs/alpha.md` (new "Group
Alpha or lead Alpha" contract).

Groups for this run:

| group | batches | subjects | role |
|---|---|---|---|
| A | 1, 2, 5 | abstract algebra, number theory | **LEAD** |
| B | 3, 7 | linear algebra, generating functions | group |
| C | 4, 6 | Erdős–Hajnal, category theory | group |

Briefs already written: `research/frontier-13-brief-alpha.md` + per-group
`research/frontier-13-alpha-{a,b,c}.task.md`. The brief's "Named challenges"
section is a placeholder to be filled at step 3 from
`research/frontier-13-step3-decisions.md`.

**The quota caveat is load-bearing.** `ARCHITECTURE.md` §6 records that four
concurrent Opus lanes at `xhigh` exhausted the Claude session limit in 25–34
minutes, **and that limit also feeds the orchestrator** — an over-wide Alpha
fan-out kills the run, not just the stage. The cap is a ceiling to use, never a
quota to spend; the accuracy win comes from *scoping*, which is free. Plan: run
the three groups **concurrently at step 3** (light stage, nothing authored yet to
lose), measure the burn, then decide about step 6 from evidence.

**`8efcf10d` — CLAUDE.md dedupe (owner instruction).** 39,947 → **39,396** chars,
headroom 53 → **604** under the hard 40,000 ceiling. Verified with a four-set-diff
harness (`<scratchpad>/verify-trim.sh`): owner-dates, backticked identifiers and
doc cross-refs all unchanged; headings and publish-path steps byte-identical; the
only two dropped rule-headings are one deliberate merge whose nine substantive
phrases were confirmed verbatim.

## Gate results so far

```
node tools/preflight.mjs                              -> READY (1 warn: dirty tree)
node tools/validate-plan.mjs research/plan-spec.json  -> exit 0 (after D1)
node tools/run-level.test.mjs                         -> 19/19 stop conditions
node tools/dispatch.mjs --check-read-only             -> unchanged
```

## Working-tree baseline

`main`. Two commits made this run (`1fdc0946`, `8efcf10d`), **not pushed** —
pushing is a separate owner decision. Modified and uncommitted: `plan-spec.json`
(D1), `research/BUILD-LEVELS.md` (regenerated — it was stale at 217 pairs/level-18
frontier, predating the subjects-01 and subjects-02 splices; now 583 pairs, 217
levels, frontier level 19). Plus pre-existing uncommitted work from earlier
sessions (`research/ra-enrich-01-*`, `research/subjects-01-*`, several
`plan-*.md`) that is **not this run's scope**.

## Open risks

- **Batch 2 is the likeliest illegal edge.** `semidirect-products-and-automorphism-groups`
  wants `Aut(ℤ/n) ≅ (ℤ/n)^×` from `primitive-roots-and-unit-groups-modulo-n`, the
  other pair in its own batch, which is **not** in its closure. Legal outcomes:
  build the unit-group facts locally, or record a `requires` recommendation.
  Check at step 3.
- **Batch 6 must have dropped MA-1 item 40** to the Hom-side adjoint and recorded
  the drop. Citing batch 5 is a hard failure; dropping silently is also a finding.
- **Five live 60-item split candidates**: batches 1 (algebraic extensions), 2
  (semidirect products), 5 (tensor products), 6 (adjunctions — MA-1 already lists
  45 items before harvest), 7 (linear recurrences). A split costs a spec edit at
  step 4 and a rewrite after step 5, so **every split must be settled at step 3**.
- **Two A pages declare a B page in `requires`** (`primitive-roots-…` on
  `splitting-fields-examples`; `adjunctions-…` on `limits-and-colimits-examples`).
  Legal, and it puts the companion A page in the closure — but it never licenses
  citing an examples item (`b-leaf` / `b-leaf-content`).
- **Riehl 2nd edition renumbered Ch 3–4** — adjoint functor theorems are §4.7 not
  §4.6. A first-edition locator in batch 6's harvest looks plausible and is wrong.
  Group C must check this against the PDF.

## Exact next action

Wait on the Monitor for the seven `beta-*.result.json`. As each lands, read its
batch notes. When all seven are in:

1. Step-2 gates: `node tools/validate-plan.mjs research/plan-spec.json`;
   `node tools/coverage-checklist.mjs research/frontier-13-batch-<i>.coverage.json`
   for i in 1..7; `node tools/content-policy.mjs --manifest-only` on the manifests.
2. Step 3: adjudicate every Beta recommendation from disk (never on the report
   alone), write `research/frontier-13-step3-decisions.md`, fill the "Named
   challenges" section of `research/frontier-13-brief-alpha.md` with the decision
   ids routed to each group.
3. **Dispatch all three group Alphas immediately** against
   `research/frontier-13-brief-alpha.md` with `--task research/frontier-13-alpha-{a,b,c}.task.md`,
   `--label alpha-{a,b,c}`. Do not pause first.

## Step 6 — impact-audit baseline, stated honestly (2026-08-15)

`impact-audit` blocked step 6 on a missing `research/frontier-13-touches.json`:
**I never took a pre-authoring touch snapshot.** The baseline in the ledger was
therefore taken *after* authoring, so the tool's own diff cannot prove anything.

The conclusion it reports — **0 changed public interfaces, 0 affected items** —
is nevertheless true, and the evidence is independent of the snapshot:
`git status` shows **0 modified files under `items/` or `library/`**. Every one of
this run's 463 items is new and `status: draft`; no published item was touched,
so the obvious-published-dependency delegation was never exercised and there is
no public interface whose downstream consumers need a disposition.

**For the next run:** take the snapshot at step 4, before authoring, so the gate
is checking rather than confirming. Recorded here rather than left implicit,
because a green `impact-audit` over a same-moment baseline is exactly the kind of
gate that passes while checking nothing.
