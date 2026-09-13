# Step 5A Alpha group b — authored-content review (batches 5, 6, 9)

Run: `phase-2-next-21`. Group `b` covers batch 5 (Bocksteins, Steenrod squares
and cohomology operations; local coefficients, twisted homology and duality —
64 items / 4 pages), batch 6 (spectra and stable homotopy groups; obstruction
theory, Postnikov towers and classifying spaces — 51 items / 4 pages) and batch
9 (Brauer's Second Main Theorem — 20 items / 2 pages). 145 `authored`
obligations were decided: 135 items and 10 pages. 144 were `accepted`; **one
item was repaired locally**; there are no escalations, no local suppliers, and
no shared-plan amendment is requested.

## Method

Every manifest item and every A/B page was read on disk at the post-splice
authored state, in manifest order. For each item I checked the numbered steps
against their declared `[F#]` facts and the cited library items, the exact
hypotheses of the cited suppliers (AC, abelianness, simplicity, connectivity,
finite/free hypotheses, algebraically closed residue field, second countability),
the boundary clauses (empty, zero, one, degenerate, endpoints, out-of-range
indices), and the choice declaration. Statements were re-derived where a
displayed identity carries the argument (the list of specific checks is the
`evidence` field of each decision in
`research/phase-2-next-21-alpha-b-5a-decisions.json` and the `risk_review`
notes in the three batch contracts).

Honesty about depth: the sources of the hardest constructions were consulted
through their already-verified Step-1 records (Mosher–Tangora, Steenrod–Epstein
Chapters V/VII/VIII, Hatcher §3.E/§3.H, May, Davis–Kirk, Craven, Meierfrankenfeld,
Aschbacher–Kessar–Oliver); I re-derived the internal displays and their
interlocking signs and degrees, but I did not re-read whole external books in
this dispatch, and I do not claim to have re-proved the published suppliers
that these items cite (Freudenthal, the collaring theorem, UCT, Whitehead,
Brauer First Main, block support, and similar published results).

## The one repair

`items/lem-natural-higher-diagonal-approximations-on-singular-chains.md`,
proof step 4.1. The step asserted that the discrepancy
`(D_i-D_i')(iota_n)+(1+T)K_{i-1}(iota_n)` of two higher-diagonal systems is a
cycle. It is not: its boundary is the value of the discrepancy on the
lower-dimensional chain `d iota_n`. The coherent-uniqueness induction needs the
lower-dimensional correction `K_i(d iota_n)` — exactly as the sibling item
`lem-cartan-coherence-for-higher-diagonal-approximations` correctly carries the
`-H_i(d z_{p,q})` term. With
`omega=(D_i-D_i')(iota_n)+(1+T)K_{i-1}(iota_n)+K_i(d iota_n)` the two copies of
`(1+T)dK_{i-1}(iota_n)` cancel and the remaining terms agree by the induction
hypothesis on `d iota_n`, so `d omega=0`; filling by the fixed contraction `h_n`
gives the displayed equation. Only step 4.1 was rewritten; the Statement, the
other steps, the dependencies and every consumer are unchanged.

Recorded as defect-ledger row
`p2-next21-b5-5a-higher-diagonal-homotopy-term` (run `phase-2-next-21`, class
`accuracy`, subclass `invalid-inference`, severity `nonfatal`, location
`proof-step 4.1`, subject the item, `caught_at_stage` `5a-adjudicate`,
disposition `fixed`), and referenced by the item's `repaired` decision with
`repair_confidence: 1`. The stale contract derivation row `step-4.1` was
updated; the item was re-prechecked (`PASS ... (direct)`), and its hash before
and after the edit is recorded in the ledger row.

## HIGH/CRITICAL risk reviews

`risk-report` routes 45 (batch 5), 29 (batch 6) and 17 (batch 9) items as
HIGH/CRITICAL. A specific, complete `risk_review` (`status: complete`,
`reviewer: alpha-5a-b …`) was written into each owning batch contract during
this same read, naming what was checked: exact displays, hypothesis use,
choice cost, and boundary cases. `node tools/risk-report.mjs
research/phase-2-next-21-batch-{5,6,9}.proof-contracts.json --require-reviewed`
now reports `0 error(s)` for all three batches.

## Declared forward references (for the 5b lead)

`ex-wu-classes-of-a-closed-surface` (batch 5, consequence kind `example`)
rests on five items of the later same-batch A pair
`local-coefficients-twisted-homology-and-duality` and declares them in
`forward_refs`. This is the owner-authorized load-bearing forward-reference
class; `node tools/fwdcheck.mjs --quiet` passes ("every forward reference is
declared, points strictly forward, is closed by a planned later page"). No
shared-plan amendment is needed, but the 5b lead still owes the protocol's
per-forward-edge decision, and `depcheck` continues to list the five links as
`cited-not-in-deps` warnings by design.

One stable ID intentionally misleads: `ex-k-z-one-as-the-infinite-complex-projective-space`
is retained (stable IDs are preserved) with the corrected statement
`CP^infinity ~ K(Z,2)`; the item and its page say so explicitly.

## Published findings

No defective **published** item was identified in this read: every published
supplier cited by these 145 obligations was checked against the clause actually
used (statement, hypotheses, and the specific identity taken from it), and each
was adequate. This is a bounded statement about the dependencies of my batch,
not an independent published-item audit, and it does not close or reopen any
existing ledger entry. Accordingly the canonical published-consumer ledger was
not edited; no defect row was opened, and (per Step 5A) a sound acceptance needs
none.

## Local suppliers and plan amendments

None. The Step-3b author had already added the local equivariant
resolution/carrier interfaces that the Adem and reduced-power items need, and
this read found no missing prerequisite that could not be supplied by the
existing closure. No pages, pairs, IDs, or `requires` edges were added or
changed; no manifest statement or strategy row was made stale by the one
repair.

## Checks run (locally, honestly reported)

- `node tools/step5-scope.mjs check --run phase-2-next-21 --phase adjudicate --batch {5,6,9}` —
  68 / 55 / 22 adjudication obligations, **0 errors** (decisions complete, current
  carrier hashes, ledger references closed and uniquely owned).
- `risk-report … --require-reviewed` (three batch contracts): 0 errors.
- merged (my three batches) `proof-contract --strict`: 0 errors, 1 pre-existing
  style warning (`shotgun-bracket` on
  `thm-simple-postnikov-stages-are-classified-by-k-invariants`);
  `boundary-audit --fail-on-contradicted --fail-on-template`: no templates and
  no contradicted rows; `citation-fidelity --fail-on-missing-quote`: every
  recorded quote found, no widening candidates.
- repo-wide: `precheck` on the 135 owned items — 101 pass, 0 failing (the
  remaining items are definition/example-only and are not proof-bearing);
  `depcheck --quiet`, `fwdcheck --quiet`, `prosecheck`, `depsource`,
  `extcheck`, `rendercheck`, `pathcheck` — all OK.
- `gate-liveness` at run scope (stale full merged contract): live. Note that on
  the three-batch subset `finite-smoke` is vacuous (its single obligation in
  this run lives in another batch); that is a subsetting artifact, not a
  run-level vacuity.

## Concurrency and records

The defect row was appended through `node tools/defect-ledger.mjs append`
(its own lock; it also re-rendered `research/DEFECT-LEDGER.md`), and
`node tools/frontier-dependency-ledger.mjs refresh --run phase-2-next-21` was
run after the edit. The repaired lemma is consumed only inside batch 5, so no
cross-batch ledger review row changed status; batch 6's nine "verified"
cross-batch rows against batch-5 suppliers remain accurate because none of
those suppliers was edited.

## Blockers

None for this dispatch. No unresolved mathematics, no unmet prerequisite, and
no owner decision is requested from group b.
