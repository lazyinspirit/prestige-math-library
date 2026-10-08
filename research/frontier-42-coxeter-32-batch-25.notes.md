# Batch 25 notes — `coxeter-descents-poincare-polynomials-and-growth` (CG-20)

Run `frontier-42-coxeter-32`, role beta, label `batch-25`, covers 25. One A/B pair:

- A page `coxeter-descents-poincare-polynomials-and-growth`, order **1766**, category `coxeter-groups`, 6 items.
- B page `coxeter-descents-poincare-polynomials-and-growth-examples`, order **1767**, 3 items.

Artifacts written by this batch: `research/frontier-42-coxeter-32-batch-25.pages.json`,
`research/frontier-42-coxeter-32-batch-25.coverage.json`,
`research/frontier-42-coxeter-32-batch-25.cross-batch-dependencies.json`,
`research/frontier-42-coxeter-32-step1-<item>.json` (9 readiness records),
`research/frontier-42-coxeter-32-batch-25-url-liveness.json` (mechanical sweep output), and this file.
No published content, shared plan, engine state or verdict was edited.

## 1. Inputs read

`CLAUDE.md`, `SCHEMA.md`, `WORKFLOW.md`, `briefs/beta-scaffold.md`, `briefs/tasks/frontier-dependency-ledger.md`,
the dispatch and task prompt, owner direction `research/frontier-42-coxeter-32-owner-authoring-direction.md` (binding),
design `research/plan-coxeter-groups-track.md` §CG-20 (L465-480), `research/plan-spec.json` (order 1766/1767 entries),
`research/coxeter-scaffold/inventory.json` (CG-20 entry), `research/coxeter-scaffold/definition-justifications.json`
(the CG-20 definition justifier), `research/coxeter-scaffold/independent-audit.md` (the invariant-degree/Poincare repair row:
"Invariant degrees and Poincare exponents lacked independent identification" and the exceptional-growth row
"Six complete exact parabolic-orbit graphs and rank-at-most-eight cyclotomic spectra certify all exceptional products"),
`research/coxeter-scaffold/combinatorial-source-report.md` §C4, `research/coxeter-scaffold/algebraic-source-report.md`,
`research/coxeter-scaffold/math-checks/degree-poincare-proof-route.md` and
`research/coxeter-scaffold/math-checks/finite-degree-poincare-certificates.json` (re-run in this batch: all six cases PASS),
drift review `research/frontier-42-coxeter-32-alpha-step1-drift.md` (§`coxeter-descents-poincare-polynomials-and-growth`:
**VERDICT: no-drift**; its "Remaining" note — the rational-growth and finite-certificate proofs remain draft obligations —
is the authoring burden carried by A2, A4 and A5), the actual statements of all in-run suppliers read below, and the
published items listed in the coverage file.

Two source texts were fetched and read in full text for this batch (not just the run's reports):
Björner–Brenti §§2.3-2.4, 3.2, 7.1, 8.1-8.2 (class-hosted complete PDF) and Davis Chapter 4.6-4.7, Chapter 17.1
(author manuscript). Knapp Chapter II is used only for the classical coordinate models, as already recorded in the run's
classical source report. `source-fetch-check --stamp` stamped all six coverage entries (3 unique URLs).

## 2. Plan vs design

`research/plan-spec.json` order 1766 (CG-20) and 1767 (CG-20-B) agree with the dispatch and the design on id, kind,
category, title, companion, requires and order; both plan entries carry **empty `items` arrays**, so the design file is the
only item-level source and there is **no plan/design conflict to record**. The owner direction ("keep the richest sound
promised claims", "no empty scaffold contracts", "definitions get well-definedness justifiers before their properties are
consumed") is respected.

Two mathematical corrections to the design text were needed; both are source-verified, not scope changes:

1. **The Steinberg identity's summation range.** The design displays
   `1/P_W(t^-1) = sum_(I spherical) (-1)^|I|/P_(W_I)(t)`. That formula is correct **only for finite `W`**, and only after
   exchanging "spherical" for "all subsets" (for finite `W` every subset is spherical) and rewriting `t^{l(w0)}/P_W(t)`
   via palindromicity `P_W(t)=t^{l(w0)}P_W(t^{-1})` (Björner–Brenti Corollary 7.1.4(i) and Proposition 2.3.2(ii);
   Davis Corollary 17.1.5(i) and Lemma 17.1.1). For **infinite** `W` the identity is
   `0 = sum_(K subset S) (-1)^|K|/P_(W_K)(t)` (Björner–Brenti Corollary 7.1.4(ii); Davis Corollary 17.1.5(ii)), a sum over
   **all** subsets including non-spherical ones, with `1/P_(W_K)` the formal inverse. The spherical-only version is false in
   general: for the (2,3,infinity) Coxeter system the spherical-only sum is `0` at `t=0` while `1/P_W(t^{-1})` has constant
   term `1`, and for infinite dihedral the spherical-only sum equals `0` only because both simple generators happen to be
   spherical. The scaffold states the source-verified two-case identity (all `K subset S`), keeps the design's finite-case
   display as the equivalent rational-function form, and the B example tests both cases. Recorded here because the design
   text is stale on this point.
2. **The `D_n` terminal node.** The design's `D_n/D_(n-1)` quotient data (distances `0..n-2` and `n..2n-2` once each and
   `n-1` twice) is the quotient of the terminal node `s_n` of the chain (the swap of the last two coordinates), not of a
   fork leaf; the deleted node is fixed explicitly in `lem-cg-classical-type-poincare-products` (2)(c) and in the certificate
   for the exceptional analogues. This was verified by hand for `D_4` and by the general graph structure of the statement.

Everything else in the design's CG-20 section was checked and is preserved: the definition, the parabolic factorization
`P_W=P_(W^I)P_(W_I)`, the finite-descent-parabolic lemma ("every element has finite descent parabolic", established explicitly
in clause (1) of A2 from the batch-2/batch-17/batch-23 suppliers), the classical quotient computations, the six exact
exceptional certificates, the exponent product and the reciprocity. No promised claim was weakened and nothing was added
beyond mathematical closure.

## 3. Manifest inventories and dependency levels

A page (6 items): `def-cg-length-series-descent-generating-polynomial` 7 · `thm-cg-parabolic-growth-factorization-and-rationality` 18 ·
`lem-cg-fundamental-weight-orbit-and-schreier-distance` 13 · `lem-cg-classical-type-poincare-products` 19 ·
`lem-cg-exceptional-parabolic-orbit-length-certificates` 20 · `thm-cg-finite-poincare-exponent-product-and-reciprocity` 21.
B page (3 items): insertion example 20 · infinite-dihedral example 22 · `A_2=S_3` example 22.

Two local items were added beyond the design's five contracts, and both are used by two consumers each:

| Item | Role |
|---|---|
| `lem-cg-fundamental-weight-orbit-and-schreier-distance` (A, level 13) | the shared orbit/Stab bijection, minimal-coset-length identity, Schreier-graph distance and the quotient formula `P_W=P_(W_T) sum_v t^{d(v)}` used by the classical products (A4) and the exceptional certificates (A5) |
| `thm-cg-finite-poincare-exponent-product-and-reciprocity`'s A-page prerequisites | none added: the design's five contracts plus the shared orbit lemma close the pair; the finite-descent-parabolic statement is proved inside A2 (clause (1)) rather than duplicated as a near-copy of batch-23 `lem-cg-full-descent-element-characterizes-finite-type`/`thm-cg-weak-order-meet-semilattice-and-finite-lattice` (3) |

The design's five contracts are all present, plus one shared local lemma; the B page realises the design's two promised
companion behaviours (insertion products; infinite dihedral growth/reciprocity) as three examples (the `A_2=S_3` verification
is split out so the finite and infinite reciprocity behaviour can be contrasted).

Levels were computed with the in-run rule (published and other out-of-run suppliers do not raise a level) and checked after
every dependency edit; `node tools/item-dependency-levels.mjs check --run frontier-42-coxeter-32` reports **no error for any
batch-25 item** (run-wide: 302 items, maximum level 31). No cycle exists. All declared deps resolve: 71 published items on
disk and the in-run draft suppliers of batches 2, 4, 7, 9, 10, 13, 17, 20 and 23 (each with an item-level review row in the
cross-batch input).

## 4. Repairs and checks made during construction

1. **Certificate closed forms verified by hand and by re-execution.** The six quotient polynomials recorded in
   `finite-degree-poincare-certificates.json` were matched coefficientwise against the closed forms
   `[9](1+t^4+t^8)`, `[14](1+t^5)(1+t^9)`, `[30](1+t^6)(1+t^10)(1+t^12)`, `[8](1+t^4+t^8)`, `[6](1+t^5)`,
   `[30](1+t^6)(1+t^10)`, and the identity `Q(t)*prod_(d' in D(W_T))[d'] = prod_(d in D(W))[d]` was re-checked
   coefficientwise for all six types (exact integer arithmetic); the script `finite-degree-poincare.py` was re-executed and
   printed `PASS` for every case. The F4 polynomial also matches Björner–Brenti Example 7.1.6 exactly.
2. **Classical quotient graphs checked by hand.** A_n: the Schreier graph on the n+1 coordinate classes is the path; B_n
   (terminal node s_1): the orbit ±e_i is a 2n-vertex path; D_n (terminal node s_n): the orbit ±e_i carries the 4-cycle core
   with two tails, giving distances 0..n-2, two at n-1 and n..2n-2; I_2(m): the m-vertex path with indices k,-k,1-k. The `B_2`
   and `D_4` cases were computed vertex by vertex. The design's distance claims were confirmed; the D_n deletion was made
   precise (see §2.2).
3. **Model identifications made supplier-explicit.** The canonical representation of each classical diagram is identified with
   the coordinate model by the linear isometry `e_s -> alpha_s/||alpha_s||` (matching Gram matrices), injectivity of the
   resulting isomorphism from the faithfulness item of batch 7, and the rank-two exact orders of batch 4; the signed/even-signed
   permutation descriptions use the published classical root-system example plus (independently) the source's Propositions
   8.1.1-8.1.3. The type-A length identification `ell = inversion number` is batch-2
   `thm-hh-parabolic-minimal-representatives-and-length-additivity` (4).
4. **Dependency direction and adequacy.** Every declared dependency was matched against the actual statement of the supplier,
   including the direction of the inverse and of the descent-side conventions (`D_L` vs `D_R`), the hypothesis `S` finite,
   the hypothesis `W_T` finite where the longest element is used, and the AC premise of the degree determination (carried
   into A5 and A6 and stated in their contracts; A1-A4 and the B examples are choice-free). No missing, circular, forward or
   inadequate edge was found. The additivity used in A4/B1 is the length-additive coset factorization of batch 2 (3) (right
   form by inversion), not an unproved "insertion is additive" assumption.
5. **Convention audits.** `\mathbb Z[[t]]` was written as `\mathbb Z\llbracket t\rrbracket` so that no wikilink-shaped token
   appears inside a formula (a raw `[[t]]` would be read as a link to a nonexistent item named `t`). All `[[...]]` links in the
   nine items resolve to declared deps or are same-page forward links handled by declaration (the two A-page forward
   references A1->A2 and A5->A6 are inside the same pages in dependency order and are declared in `deps`).

## 5. Sources and coverage

Coverage file: A page 3 sources (Björner–Brenti monograph: 10 harvested headings; Davis monograph: 10; Knapp textbook: 4),
B page 3 sources (the same three documents with B-page locators: 3+2+1). Two independent treatments per A page are present
(a book and a monograph, plus a textbook for the classical models). Every harvested heading has a disposition
(`inline`/`included` with an item ID, `already-published` with an item ID, or `out-of-scope` with a specific reason — the
Möbius/nerve formula 7.1.7, Bott's affine formula, and Davis Chapters 17.2-17.4 are declined with reasons).

- `source-fetch-check --stamp`: **6/6 sources fetch-verified** (3 unique URLs, each with bytes/sha256/page count stamped into
  the coverage file); the gate form without `--stamp` reports 6/6 resolved.
- `url-sweep` scoped to this batch: **3/3 live, 0 failed** (output `research/frontier-42-coxeter-32-batch-25-url-liveness.json`).
- `coverage-checklist`: 2 pages, 31 harvested results, **0 errors, 1 warning** (`coverage-low-yield`, advisory: 3/25 A-page
  results take a direct item destination; the remaining rows are `included`/`already-published`/declined with reasons).
- No source drop and no `source_resolution` escalation was needed; the 5-retry allowance was not consumed (first fetch of
  the Björner–Brenti and Davis PDFs succeeded; the run's earlier reports had already established the locators).

## 6. Cross-batch dependency input

`research/frontier-42-coxeter-32-batch-25.cross-batch-dependencies.json` contains **46 review rows** (43 item, 3 page),
all `status: open` with substantive evidence (required claim, hypotheses checked, use location, adequacy): interfaces to
batch 2 (`def-hh-coxeter-matrix-word-group-and-length`, `thm-hh-parabolic-minimal-representatives-and-length-additivity`,
`thm-hh-coexeter-exchange-deletion-and-faithfulness`, `lem-hh-dihedral-root-recurrence-and-root-sign`), batch 4
(`def-cg-real-coxeter-form-and-reflection`, `def-cg-canonical-reflection-homomorphism`,
`def-cg-dual-chambers-and-reflection-hyperplanes`, `lem-cg-reflection-form-invariance-and-rank-two-orders`), batch 7
(`thm-cg-root-length-criterion-and-faithfulness`), batch 9 (`def-cg-tits-cone-and-fundamental-chamber`,
`thm-cg-dual-chamber-intersections-and-point-stabilizers`), batch 10 (`def-cg-parabolic-quotient-and-two-sided-minima`),
batch 13 (`def-cg-coxeter-diagram-components-and-finite-type`,
`thm-cg-finite-coexeter-classification-including-h-and-dihedral`, `lem-cg-diagram-products-and-invariant-form-comparison`),
batch 17 (`thm-cg-finite-parabolic-longest-element-and-opposition`), batch 20
(`def-cg-coxeter-basic-degrees-and-graded-coinvariants`, `thm-cg-regular-coxeter-eigenvectors-determine-basic-degrees`),
batch 23 (`lem-cg-full-descent-element-characterizes-finite-type`, `thm-cg-weak-order-meet-semilattice-and-finite-lattice`),
plus the three page-level `requires` edges. `frontier-dependency-ledger refresh --require-reviewed` now reports **0 orphaned
reviews and 0 unreviewed batch-25 edges**; it still fails run-wide because exactly one declared edge of batch 13's consumer
set has no review input (batch 13, supplier not owned by this batch) — outside batch-25 scope, reported here for the owner.

## 7. Readiness records

The 9 items' `ready` Step-1 records were written at closeout with the exact manifest `deps` arrays via
`node tools/step1-decisions.mjs record`; `node tools/step1-decisions.mjs check --run frontier-42-coxeter-32` then reported
**302/302 items ready, `closed: true`, 0 open work** (run-wide, all 32 batches). Each record lists the examined
dependency IDs (the manifest `deps`), the hypothesis checks and the evidence. Step-1 records
proof *design* closure only; no proof is claimed to be written, and Step 3 owns authoring and review.

## 8. Gate results (as run, after the final edits)

| Check | Result |
|---|---|
| `coverage-checklist` batch-25 | 2 pages, 31 harvested results, **0 errors, 1 warning** (`coverage-low-yield`, advisory) |
| `manifest-deps` batch-25 | 9 items, 0 normalized, **0 errors** |
| `content-policy --manifest-only` whole run | 302 scoped items, **0 errors, 0 warnings** |
| `item-dependency-levels check` | 302 items, 64 pages, **0 errors** |
| `manifest-integrity --run frontier-42-coxeter-32` | 64 page(s) owed, 64 in the manifests, **no scope drift** |
| `drift-review-check --run frontier-42-coxeter-32` | 32 page(s) reviewed, 0 blocked edges, all owed pages above the 95% published-or-earlier threshold |
| `source-fetch-check` batch-25 | **6/6 source(s) resolved**, 6/6 stamped |
| `url-sweep` batch-25 | **3/3 live**, 0 failed |
| `extcheck` (run-level external-reference check) | 25966 items scanned, **0 recorded-not-proved, 0 resting on them** |
| `source-backing` batch-25 | 5 authored result(s) with `included` rows, every one backed, **0 lost** |
| `frontier-dependency-ledger refresh --require-reviewed` | batch-25 clean (46/46 reviewed, 0 orphans); fails run-wide on one batch-13 edge |
| `validate-plan research/plan-spec.json --run frontier-42-coxeter-32` | **FAIL** at `frontier-selection`: all 302 current manifest items (every batch, including batch 25) are "absent from the selected plan pages" because the selected plan pages carry empty `items` arrays; page-level checks pass (`64 pages, 0 new items`) |

## 9. Unresolved findings for the owner / Step 3

1. **Design-text corrections** (§2): the Steinberg identity's infinite case and the spherical/all-subset distinction, and the
   `D_n` terminal-node identification. Both are source-verified; the design file should be reconciled by the owner if it is
   ever reused for another run.
2. **A page's slowest proofs** (as flagged by the drift review's "Remaining" line): the rational-growth induction (A2 (5)), the
   exceptional coefficientwise certificate comparisons (A5) and the model identifications (A4 (1)) must be written out in
   Step 3 with the suppliers named in the strategy text. The certificate file is exact evidence for the finite comparisons,
   but Step 3 must re-verify the file against the frozen content and state the actual fields used.
3. **Advisory coverage warning**: `coverage-low-yield` (3/25 A-page results take a direct item destination). The declined rows
   carry written reasons; Alpha should confirm the declines at Step 5.
4. **Run-wide gate status**: `frontier-dependency-ledger --require-reviewed` fails only on one batch-13 consumer edge
   (1261 declared edges run-wide; 1260 reviewed). `validate-plan --run` fails at `frontier-selection` for **all 302 manifest
   items of every batch** because the selected `plan-spec.json` pages still carry empty `items` arrays; that is a run-level
   plan/engine integration condition that predates batch 25 (batch-1 items are flagged identically) and is not caused by, and
   cannot be fixed inside, this batch's write scope. `content-policy --manifest-only`, `item-dependency-levels`,
   `manifest-integrity`, `drift-review-check`, `extcheck`, coverage, fetch and liveness checks all pass with batch 25 included.
   Closeout re-verification (2026-10-07): the refresh reports 1261 declared edges, 1260 reviewed, the single unreviewed edge
   being the batch-13 consumer `ex-cg-dihedral-gram-determinants-and-low-rank-coincidences` ->
   `thm-cg-root-length-criterion-and-faithfulness`; `validate-plan` reports exactly 302 `frontier-selection` errors (every
   current manifest item, batch-25 items flagged identically to batch-1's), accompanied run-wide by advisory
   `redundant-prereq` warnings, one of them on this pair's A page (`requires
   finite-reflection-arrangements-and-spherical-coxeter-complexes` is already reached transitively through
   `finite-coxeter-invariants-and-coinvariant-gradings`); the `requires` list is plan-fixed and cannot be edited in batch scope.
5. **No published defect found**: every published supplier examined exists with status `published` and was consumed as a
   supplier only (no `Recorded`/unproved record is used); the AC-carrying suppliers of batch 20 are consumed with their AC
   premise restated in the consumers.
