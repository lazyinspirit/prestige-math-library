# Step 3a scope review — Rellich–Kondrachov and Sobolev compactness

- Run: `frontier-39-analysis-30` (role: alpha; batch 9; this pair only).
- A page: `rellich-kondrachov-and-sobolev-compactness` (plan order 458.027).
- B page: `rellich-kondrachov-and-sobolev-compactness-examples` (458.028).
- Inventory: **24 A + 6 B = 30 items** (in-run levels 0–6); 279 dependency
  slots, 101 distinct dependency ids (26 in-run: 19 in-batch plus 7 batch-4
  PDE-14 suppliers; 75 published), **0 unresolved**; the 55 distinct
  statement/strategy wikilinks also all resolve (31 published, 24 in-run).
- A `requires` `sobolev-poincare-and-morrey-inequalities` (in-run PDE-14,
  batch 4); B requires the A page only; both equal `plan-spec.json`
  458.027/.028 verbatim, and the B page is a leaf (no consumer).
- Scope decision: **insufficient** (recorded with
  `tools/step3-decisions.mjs record-scope`; receipt
  `research/frontier-39-analysis-30-step3a-review-rellich-kondrachov-and-sobolev-compactness.json`).
- This file judges **scope only**, not proof correctness, and is not an item
  approval. No scaffold, item, plan, coverage record, engine state or owner
  record was edited.

## Evidence read

| Artifact | Use |
|---|---|
| `research/frontier-39-analysis-30-batch-9.pages.json` | Current scope carrier: 24 A + 6 B items with statements, strategies, deps, sources; `requires`, orders and companion pointers as above; batch 9 holds only this pair |
| `research/frontier-39-analysis-30-batch-9.coverage.json` | 7 A + 4 B source entries, 55 harvested rows, all disposed (`included`/`inline`/`deferred`/`out-of-scope`); re-run `coverage-checklist --require-destination` → 2 pages, 55 results, 0/0 |
| `research/frontier-39-analysis-30-batch-9.notes.md` | Scaffolder record: design fidelity claims, conflict notes, choice ledger, checks (its item/addition counts are wrong; see “gap” below) |
| `research/frontier-39-analysis-30-batch-9.cross-batch-dependencies.json` | 9 open rows: 1 page-level + 8 item-level edges from the pair to batch-4 PDE-14 draft suppliers |
| `research/plan-pde-track.md` PDE-15 design (L1583–1627); §12 preamble (L3270–3292); **§12.5 PDE-15 additions table (L3624–3640, rows L3628–3640; same table at run baseline `d6aaf33e` L3600–3616, rows L3604–3616)** | Binding prose design plus the authoritative density-enrichment overlay |
| `research/plan-spec.json` orders 458.027/.028 | Page-level `requires` and empty item arrays; manifests match |
| `research/frontier-39-analysis-30-scope-ledger.json`, `alpha-step1-drift.md` (“rellich…”: no-drift, local proof obligations for the compact-trace enrichment), `alpha-groups.json` | Run-level scope, drift verdict and assignment |
| Published suppliers on disk (`items/*.md`) | 75 distinct published dependency ids and 31 published wikilinks exist with `status: published`; of these, `thm-lp-trace-operator-on-a-bounded-c-one-domain`, `thm-sharp-trace-theorem-for-w-one-p`, `def-fractional-sobolev-space-on-a-compact-c-one-boundary`, `def-fractional-slobodeckij-space-on-euclidean-space` (frontier-38, judge pass) carry the trace/fractional interfaces the page consumes |

Checks re-run here: `manifest-deps` batch 9 → 30 items, 0 errors;
`coverage-checklist --require-destination` → 0/0; `source-fetch-check`
(check mode) → 11/11 fetch-verified, 11/11 resolved; `content-policy
--manifest-only` over all 30 manifests → 899 items, 0/0;
`item-dependency-levels check --run` → 899 items across 60 pages.
(`fwdcheck` currently fails on an unrelated published braid/modular-group
item, `lem-the-minus-one-specialization-of-three-strand-burau…`; that finding
does not touch this pair and is not used as pair evidence.)

## What is already sound

1. **Base design reproduced.** The manifest carries the design's A1–A12 and
   B1–B6 in design order: compact-embedding definition; translation estimate;
   Fréchet–Kolmogorov criterion; `W^{1,p}_0` and bounded-extension-domain
   Rellich theorems; Poincaré–Wirtinger (relocated from PDE-14 into PDE-15
   item 5 by the current plan revision and present in the manifest); the
   subcritical, critical-source (`p=n`) and Morrey (`p>n`) Rellich–Kondrachov
   rows; the higher-order statement; the two corollaries used by elliptic and
   variational pages; and the strictly-subcritical remark, plus the six B
   examples/counterexamples. The design's well-definedness clauses (compact
   embedding = continuous inclusion with subsequential strong convergence;
   boundedness and extension hypotheses in every theorem) are stated in the
   items.
2. **Declared prerequisites are complete.** Every dependency id of the pair
   resolves to the in-run scaffold (19 in-batch, 7 batch-4 draft suppliers) or
   to a published item; no declared prerequisite is missing, unpublished or
   forward. The 7 PDE-14 suppliers are recorded as open cross-batch edges with
   their exact required claims, hypotheses and choice accounting; they are
   draft scaffolds of this run (not published), correctly flagged for
   re-examination if their statements change at Step 3.
3. **Sources and coverage are adequate.** Seven full graduate treatments back
   the pair (Kinnunen Ch. 3 §3.6; Hunter §§1.5, 3.10–3.11; Laugesen Ch. 3
   §§3.7, 3.9; Teschl §9.3/§B.2; Brezis §9.3; Grigoryan §1.6; Di Nezza–
   Palatucci–Valdinoci §6 for the fractional block), all 11 source entries
   fetch-verified, with 55/55 harvested headings disposed and no result left
   undisposed. The Teschl Theorem B.15 boundedness caveat is recorded in the
   coverage entry and source note.
4. **The pair's library role is real and used.** Batch-9 items have 10 direct
   dependency consumers in other in-run pages (batch 10 Lax–Milgram/Neumann;
   batch 11 Fredholm/shifted solution operator; batch 13 Schauder `W^{2,p}`;
   batch 16 constrained variational; batch 20 vanishing viscosity), and the
   remark's three forward references are declared to the B page.
5. **The local additions are authorized.** `def-compactly-embedded-normed-
   spaces` and the six fractional Slobodeckij items (level-set kernel,
   dyadic summability, level-set lower bound, critical fractional Sobolev
   inequality, mollification rates, fractional Rellich) close the compact
   trace theorem locally; the Alpha drift verdict for this page directs that
   boundary compactness be supplied in charts and not inferred from
   continuous trace boundedness, and the items are literature-derived
   (Di Nezza–Palatucci–Valdinoci §6). This is sanctioned local closure, not
   scope creep.

## The gap: §12.5 PDE-15 additions are only 5/13 in the scaffold

The plan's §12 declares itself an “additive, authoritative overlay” whose
rows are “inserted on the named A or B page” at build time (L3272–3274). Its
**PDE-15 additions table plans 13 further rows**; the manifest contains five
of them (`lem-relative-compactness-implies-uniform-translation-continuity-in-lp`,
`lem-bounded-support-makes-frechet-kolmogorov-tail-control-automatic`,
`thm-local-lp-compactness-of-w-one-p-bounded-sequences`,
`cor-subcritical-compactness-for-w-one-p-zero-on-arbitrary-bounded-open-sets`,
`thm-subcritical-compactness-of-the-sobolev-trace`). The other **eight are in
no manifest item, no published item and no batch of this run** (exact-id scan
over all 30 manifests and `items/`):

| §12.5 PDE-15 row | Assessment against the current scaffold |
|---|---|
| A `cor-strong-lq-convergence-implies-strong-convergence-of-subcritical-powers` | **Absent.** No in-run or published replacement; no planned consumer cites it |
| A `cor-bounded-map-into-h-one-zero-followed-by-rellich-is-compact-on-ltwo` | **Absent as stated.** Its named downstream role (“the composition used for elliptic resolvents”) is supplied downstream by batch-11's `lem-shifted-elliptic-solution-operator-is-compact-on-ltwo`, an elliptic special case with its own proof |
| A `cor-strong-lp-convergence-has-an-almost-everywhere-convergent-subsequence` | **Claim already available** under the published id `cor-l-p-convergent-sequences-have-almost-everywhere-convergent-subsequences`; folding this row is a placement choice |
| A `lem-strong-lp-closed-constraints-pass-through-rellich-limits` | **Absent as stated.** Constraint preservation exists in-run under different hypotheses (batch 15 `lem-weak-closedness-keeps-the-direct-method-limit-admissible`, batch 16 `thm-direct-method-on-a-weakly-closed-constraint-set`); the strong-`L^q`-closed version is not stated |
| B `cex-high-frequency-oscillations-violate-uniform-translation-control` | **Absent.** The B page tests the tightness hypothesis (`cex-rellich-fails-without-uniform-tail-control`) but has no witness that the *translation* hypothesis of the criterion cannot be dropped |
| B `ex-normalised-critical-bubbles-converge-weakly-but-not-strongly-at-p-star` | **Absent.** B2 `cex-critical-sobolev-embedding-is-not-compact` covers critical non-compactness but not the explicit weak-vs-strong distinction |
| B `cex-critical-trace-compactness-fails-by-tangential-dilation` | **Absent.** The A page now carries the subcritical trace-compactness theorem; the B page has no witness that its strict subcriticality is necessary |
| B `cex-dilations-can-destroy-tightness-on-an-unbounded-domain` | **Absent.** The B page separates translation escape, not dilation escape, from tightness failure |

**Audit-trail defect.** `batch-9.notes.md` states “The manifest holds
**29 items: 23 on A, 6 on B**” and “all five ‘PDE-15 additions’ rows”, while
the manifest has 30 items (24 A + 6 B) and the table has 13 rows. No owner
decision, drift record or coverage disposition drops the eight rows; the
omission is unrecorded, and the notes' own line citation (L3600–3617) is the
exact location of the 13-row table in the committed plan. The sub-count
appears to be arithmetic slip (the strictly-subcritical remark dropped from
the tally), but the overlay omission cannot be read as a deliberate
disposition from this record.

**Precedent in this plan family.** The same omission was recorded
`insufficient` in `frontier-36-complete` (PDE-5) and `frontier-38-owner-30`
(PDE-7, receipt reason: base design 1:1 “but the authoritative §12.4 PDE-7
overlay plans 8 further rows and none is in the manifest”); the owner then
applied the rows. Run-wide context for the owner: overlay application is
uneven (rows present / total: PDE-8 0/8, PDE-12 0/13, PDE-13 3/13, PDE-14 2/13),
while PDE-16–PDE-18 and PDE-21–PDE-26 carry all their rows — so whether the
remaining rows or their B halves are mandatory is a run-level owner question,
but here the batch notes themselves claim completeness, making the eight
omissions unreviewed scope loss.

## Unmet prerequisites

- **No confirmed unmet prerequisite at the declared level.** All 101 distinct
  dependency ids and all 55 statement/strategy wikilinks resolve (in-run
  scaffold or published library); nothing the pair consumes is absent from
  both.
- **No consumer of the missing rows is blocked.** A scan of all 30 manifests
  and published items finds zero references to the eight absent ids; the one
  row with a named consumer role (compact composition for elliptic resolvents)
  is independently supplied in batch 11.
- **Provisional edge (recorded, not a gap).** The pair's Rellich–Kondrachov,
  critical-exponent, Morrey and higher-order rows rest on 7 batch-4 PDE-14
  draft suppliers (8 item edges + 1 page edge, all `open` in the cross-batch
  input). Their final exponent ranges, representative conventions and choice
  accounting must survive Step-3 authoring; the input already requires
  re-examination of these consumers if a statement changes.
- **Uncertainty.** I verified the batch-4 suppliers at statement/manifest
  level only (scope review, not proof review); their proofs are not assessed
  here. Likewise the published trace/fractional suppliers are cited with
  their published hypotheses (`1<p<∞`, `θ=1−1/p`, bounded `C^1` domain),
  which match the consuming items.

## Proposed owner action

1. Enrich batch 9 with the eight missing §12.5 PDE-15 rows (or fold each exact
   claim into a named anchor and record the fold, as one row already permits:
   the a.e.-subsequence claim exists as a published corollary), keeping the
   base 12+6 inventory; include the B rows or record an explicit owner waiver
   for exemplar rows. This is an owner decision between enrichment and
   folding/waiver; no scaffold edit is made by this review.
2. Correct the `batch-9.notes.md` item tally (30 items, 24 A) and record which
   overlay rows were folded, deferred or waived, so the choice ledger stays
   auditable.
3. Record `proceed` for the resulting scope with
   `tools/step3-decisions.mjs record-scope --owner`; until then Step 3b for
   this pair stays blocked. No pair merger is warranted: the base subject
   (translation compactness and Rellich–Kondrachov, all exponent regimes,
   sharpness and the compact trace) is well anchored, and the omissions are
   additive overlay rows.

Report path: `research/frontier-39-analysis-30-step3a-pair-rellich-kondrachov-and-sobolev-compactness.md`.
