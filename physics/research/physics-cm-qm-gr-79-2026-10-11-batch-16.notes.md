# Batch 16 notes — `cm-math-rotation-double-cover` / `cm-math-rotation-double-cover-examples`

Run `physics-cm-qm-gr-79-2026-10-11`, role beta, label batch-16, covers 16.
Step 1 complete initial authoring only. No readiness record, no check output
and no batch note here is independent mathematical approval; Step 3 review
follows. Nothing was published, and no shared plan, engine state or verdict
was edited.

## Scope built

- A page `cm-math-rotation-double-cover` (order 111, category
  `non-relativistic-classical-mechanics-mathematics`, `library: mathematics`,
  `requires: ["cm-math-dynamics"]`), 7 locally authored mathematical items:
  1 definition, 3 lemmas, 1 proposition, 1 theorem, 1 remark.
- B page `cm-math-rotation-double-cover-examples` (order 112,
  `requires: ["cm-math-rotation-double-cover"]`), 5 leaf items: 4 examples
  (each with a numbered verification) and 1 counterexample.
- Every item carries `domain: mathematics`; every `deps` entry is annotated
  `mathematical-premise`; no physical item is a supplier anywhere in the
  batch, and no item of this pair is consumed by a physical item *within the
  pair*. The only in-run suppliers are three items of other batches, all
  mathematical and reviewed row by row in the cross-batch input: batch 1
  (`cm-math-geometry`) `def-cm-special-orthogonal-group` and
  `lem-cm-so3-is-a-matrix-group`, and batch 2 (`cm-math-balances`)
  `thm-cm-compact-continuation-for-locally-lipschitz-odes`. All other
  suppliers are published canonical root items.
- Dependency levels (in-run dependencies only, recomputed by
  `item-dependency-levels.mjs`): `def-cm-quaternion-rotation-map-and-cover` 1;
  `lem-cm-quaternion-product-rule-and-conjugation-formula` 2;
  `lem-cm-body-angular-velocity-of-a-rotation-path` 3;
  `lem-cm-quaternion-lift-of-a-prescribed-body-angular-velocity` 4;
  `prop-cm-quaternion-angular-velocity-reconstruction` 5;
  `thm-cm-quaternion-lift-exists-and-is-unique` 5;
  `rem-cm-quaternion-lift-scope-and-sign` 6;
  `ex-cm-constant-angular-velocity-quaternion-lift` 6;
  `ex-cm-quaternion-lift-of-a-varying-rate-about-a-fixed-axis` 6;
  `ex-cm-quaternion-angular-velocity-reconstruction-check` 6;
  `ex-cm-two-to-one-preimages-and-homomorphism-check` 3;
  `cex-cm-no-closed-lift-along-a-full-turn` 6.
  Items were built in this ascending order, and `node
  tools/physics-support/item-dependency-levels.mjs check --run
  physics-cm-qm-gr-79-2026-10-11` reports no finding for either page of this
  pair (the remaining 124 whole-run ERROR lines are other batches' empty
  scaffold inventories).
- No page split was needed: 7 + 5 items against the 100-item cap.

## Design vs plan-spec

- `research/plan-spec.json` pages for orders 111/112 agree with the design
  section `research/plan-non-relativistic-classical-mechanics-track.md`
  L421-432 on page ids, titles, category, library, companion, orders and the
  `requires` lists; the batch manifest was generated to that record and
  verified by JSON comparison (page carriers agree with the manifest on every
  field, including the item order). **No design/plan conflict to record.**
- Scope transfer recorded at plan L16 is preserved: `E25` was moved from
  `CM-Math-geometry` to this pair, the published
  `ex-su-two-to-so-three-as-a-covering-homomorphism` supplies the double-cover
  conclusion under its stated countable-choice hypothesis, and only E25's
  local quaternion ODE-lift and angular-velocity reconstruction were authored
  here. The local `E1`/`E2` content of the original reservation is used from
  the published and in-run suppliers (`def-cm-special-orthogonal-group`,
  `lem-cm-so3-is-a-matrix-group`, the ODE and compact-continuation items),
  not re-authored.
- The closure-ledger entry for E25 (`closure-ledger.json`) is delivered
  claim-wise as:
  - "Define H, conjugation, norm, S^3 and the rotation map `rho`" →
    `def-cm-quaternion-rotation-map-and-cover` (with the identification
    `varphi: R^3 -> Im H`, `rho(q)(x) = qxq^{-1}`, quaternion lifts, and the
    cited cover in the definition remark);
  - "Associativity, multiplicativity |qr|^2 = |q|^2|r|^2, conjugation" →
    proved locally in `lem-cm-quaternion-product-rule-and-conjugation-formula`
    (product rule, anti-automorphism, norm multiplicativity, the explicit
    conjugation formula and its Rodrigues axis-angle form);
  - "R' = R Omega, Omega = R^T R' skew, body angular velocity" →
    `lem-cm-body-angular-velocity-of-a-rotation-path`;
  - "q' = q(0,omega)/2 keeps the norm and yields R(tau) with the prescribed
    body rate; global existence by compact continuation" →
    `lem-cm-quaternion-lift-of-a-prescribed-body-angular-velocity` (uses the
    in-run `thm-cm-compact-continuation-for-locally-lipschitz-odes` for the
    endpoint argument);
  - "orientation reconstruction" →
    `prop-cm-quaternion-angular-velocity-reconstruction` and
    `thm-cm-quaternion-lift-exists-and-is-unique` (existence, uniqueness and
    the global sign ambiguity);
  - "the arbitrary sign of the initial q gives the same physical orientation"
    → `rem-cm-quaternion-lift-scope-and-sign` plus the explicit
    full-turn counterexample on the B page;
  - finite checks → the four B-page examples.
- The countable-choice hypothesis `AC_omega` is declared on
  `def-cm-quaternion-rotation-map-and-cover` (through
  `ex-su-two-to-so-three-as-a-covering-homomorphism` and
  `def-countable-choice`) and its actual uses are identified in the proof
  contracts and in the boundary worksheets: the facts `rho(q_0) in SO(3)`,
  the homomorphism property and the kernel `{1,-1}` are consumed in
  `lem-cm-quaternion-lift-of-a-prescribed-body-angular-velocity` (step 2.2),
  `prop-cm-quaternion-angular-velocity-reconstruction` (step 3.1),
  `thm-cm-quaternion-lift-exists-and-is-unique` (steps 2.1 and 3.1) and the
  B-page items that invoke them. The differential-equation, norm-conservation
  and matrix arguments are choice-free.

## Sources (full text read, then stamped)

All five A-page sources and the three B-page source records were fetched in
full and stamped by
`node tools/physics-support/source-fetch-check.mjs --coverage
research/physics-cm-qm-gr-79-2026-10-11-batch-16.coverage.json --stamp`
(`8/8 source(s) fetch-verified`), and the coverage file passed
`coverage-checklist.mjs --require-destination` with `0 errors, 0 warnings`
after every harvested heading received a disposition.

| source | kind | locator read | primary disposition |
|---|---|---|---|
| P. Etingof, MIT 18.745 Lie Groups and Lie Algebras I (Fall 2020), full notes | lecture-notes | Ex. 3.9 (p.26); §6.2 Def. 6.6 and Prop. 6.7 (pp.39-40) | Ex. 3.9 → already-published `ex-su-two-to-so-three-as-a-covering-homomorphism`; §6.2/Prop. 6.7 inline in the definition and product-rule items |
| A. W. Knapp, Lie Groups Beyond an Introduction, Digital 2nd ed. (2023) | monograph | Introduction §1 (pp.5-6); Problems 7-9 (pp.20-21); §I.8 opening (pp.56-58) | `so(3)` inline in the body-angular-velocity lemma; Problems 7-9 included in `ex-cm-two-to-one-preimages-and-homomorphism-check`; §I.8 inline in the product-rule lemma |
| J. Sola, Quaternion kinematics for the error-state Kalman filter, arXiv:1711.02508 | paper | §1.2 (pp.6-8); §2.3-2.3.1 (pp.14-18); §2.4.1-2.4.6 (pp.20-24); §2.5 (p.25); §2.6 (pp.26-27); §4.5 (pp.45-46) | each subsection included in or inline with the item that consumes it (see coverage file) |
| N. Trawny and S. I. Roumeliotis, TR-2005-002 (Univ. of Minnesota, 25 pp.) | paper | §§1.1-1.2 (pp.2-4); §1.4 (pp.6-8); §1.5 (pp.9-10) | axis-angle and negative-quaternion facts included on the B page; quaternion product/inverse and the quaternion time derivative inline in the lift items |
| G. Teschl, Ordinary Differential Equations and Dynamical Systems (AMS GSM 140, author preliminary online edition) | textbook | §2.1-2.3 (pp.33-41); §2.6 (pp.50-53) | fixed-point, Picard-Lindelof and extensibility results inline/included in the lift lemma; §2.3's linear-growth criterion out of scope with a written reason |

- Two independent treatments are satisfied on both pages, including a
  monograph (Knapp), a textbook (Teschl) and full lecture notes (Etingof);
  the two technical application papers (Sola, Trawny-Roumeliotis) carry the
  quaternion-kinematics conventions.
- Locator corrections made during authoring (after reading the full texts):
  the Teschl reference was corrected from a wrong section/page mapping to
  §2.1-2.3 (pp.33-41) and §2.6 (pp.50-53); the Trawny references were
  corrected from §3.1/§3.2 (sensor and filter-update sections) to the actual
  §1.2 (inverse/conjugate), §1.4 (small rotation) and §1.5 (quaternion time
  derivative, eqs. (80)-(89)); the Sola references were corrected to
  §2.3 (pp.14-19), §2.5 (p.25; eqs. (115)-(119), including `R{-q} = R{q}`)
  and §2.4.6 (p.24); the Knapp `so(3)` locator to pp.5-6. No equation number
  cited in the items was left unverified against the fetched text.
- Every harvested heading has a disposition in
  `research/physics-cm-qm-gr-79-2026-10-11-batch-16.coverage.json`;
  out-of-scope declines (interpolators and convention catalogues, the
  Kalman-filter model, the semisimple-classification machinery, the
  linear-growth existence criterion, and the notes' general Lie theory) each
  carry a specific written reason.

## Proof-contract input

`research/physics-cm-qm-gr-79-2026-10-11-batch-16.proof-contracts.json`
(version 1) scopes the 10 proof-bearing items (3 lemmas, 1 proposition,
1 theorem, 4 examples, 1 counterexample; the definition and the remark are
nonproof and outside the strict contract scope). Citations were regenerated
from the finished carriers so that each fact-link names the cited item's own
statement section verbatim; every numbered step has a derivation entry whose
`inputs` list covers every `F#`/`L#` label and every `step x.y` token in the
step, and all eight boundary-worksheet cases are recorded per item with
checked/not-applicable status and step-anchored evidence.

## Cross-batch dependencies

`research/physics-cm-qm-gr-79-2026-10-11-batch-16.cross-batch-dependencies.json`
records the 6 consumer-side cross-batch edges of this batch, one row per
`(kind, consumer, supplier)`, each `verified` against the current supplier
carrier:

| kind | consumer | supplier | checked use |
|---|---|---|---|
| page | `cm-math-rotation-double-cover` | `cm-math-dynamics` | declared reading-order prerequisite (manifest requires, plan L421); no item-level use |
| item | `def-cm-quaternion-rotation-map-and-cover` | `def-cm-special-orthogonal-group` | SO(3) as level set in `M_3(R)`, used by the `rho in SO(3)` and preimage clauses |
| item | `lem-cm-body-angular-velocity-of-a-rotation-path` | `def-cm-special-orthogonal-group` | differentiating `R^T R = I_3`; multiplying `Omega` by `R` |
| item | `lem-cm-body-angular-velocity-of-a-rotation-path` | `lem-cm-so3-is-a-matrix-group` | `R^{-1} = R^T`, `R R^T = I_3` in step 3.1 |
| item | `lem-cm-quaternion-lift-of-a-prescribed-body-angular-velocity` | `thm-cm-compact-continuation-for-locally-lipschitz-odes` | compact continuation used as F8 in the whole-interval argument |
| item | `thm-cm-quaternion-lift-exists-and-is-unique` | `def-cm-special-orthogonal-group` | `SO(3)`-valued path and the linear matrix IVP on `M_3(R)` |

`node tools/physics-support/frontier-dependency-ledger.mjs refresh --run
physics-cm-qm-gr-79-2026-10-11` accepted the input: all six rows attached to
their declared edges with status `verified` and no orphaned review. The
consuming side of this pair is *other* batches: e.g. plan order 131
(`cm10-rigid-body-configuration-and-inertia`) declares
`cm-math-rotation-double-cover` as a prerequisite, and those consumer-batch
rows belong to that batch's owner.

## Checks run (actual results)

- `proof-layout.mjs` on the 12 items: `12 items, 42 steps, 0 defects`.
- `precheck.mts` (via `tsx-run.mjs`) on the 12 items: `10 checked, 0 failing
  — all clean`; the two nonproof items are `not-applicable`.
- `rendercheck.mjs` on the 12 items and the 2 page carriers: OK (no wikilink
  inside math, no unbalanced delimiters, every math span parses under KaTeX,
  every frontmatter block parses).
- `content-policy.mjs` on the batch manifest: `12 scoped item(s), 0 error(s),
  0 warning(s)` (after the `notation-iota-applied` repair below).
- `manifest-deps.mjs`: `12 item(s), 0 normalized, 0 error(s)`.
- `proof-contract.mjs --strict`: `0 error(s), 0 warning(s), 10/10 item(s)
  checked`.
- `coverage-checklist.mjs --require-destination`: `2 page(s), 41 harvested
  result(s), 0 error(s), 0 warning(s)`.
- `source-fetch-check.mjs` (check mode): `8/8 source(s) fetch-verified`;
  `8/8 source(s) resolved (0 documented drops)`.
- `item-dependency-levels.mjs check --run ...`: no finding for either page of
  this pair (whole-run remainder: 124 empty-inventory errors of unauthored
  batches).
- `depcheck.mjs` scoped to the 12 items (plus its whole-corpus scan, run to
  completion): no finding names any item of this batch; the reported
  `cited-not-in-deps` rows belong to other batches' draft items.
- `fwdcheck.mjs` (whole corpus, `--json`): the only forward reference of this
  batch — `rem-cm-quaternion-lift-scope-and-sign` →
  `cex-cm-no-closed-lift-along-a-full-turn`, linked only in `## Remarks` of
  the remark — is recorded as `closed`, `bearing: false`; the 12,480
  corpus-wide errors and 2 warnings name no item of this batch.
- `citation-faithfulness-screen.mjs` on the 10 proof-bearing ids reports 5
  candidates, each read against the cited statement: all are token-level
  notation differences (`varphi` vs the sources' vector notation,
  `operatorname{Re}` vs `Re`, `Omega` vs `Ω`, `circ` for composition),
  no dropped hypothesis, widened scope or reversed direction.
- `extcheck.mjs` on the batch manifest: `27519 items, 0 recorded-not-proved,
  0 resting on them — OK`.
- `proof-contract-coverage.mjs --run ... --contracts
  research/physics-cm-qm-gr-79-2026-10-11-batch-16.proof-contracts.json`
  cannot complete yet: `ERROR proof-contract-coverage-input: Empty or invalid
  frontier page inventory cm-math-numerical` (another batch's unauthored
  page). The batch-local strict contract gate above covers all 10
  proof-bearing items of this pair; the run-level provider re-runs after all
  inventories are populated.
- `validate-plan.mjs research/plan-spec.json --run ...`: 58 run findings in
  total; exactly **one** names this page (the escalation below). The other
  findings belong to other batches' pages, and the run-wide `redundant-prereq`
  warnings likewise do not name this pair.
- `step1-decisions.mjs record` was used for all 12 items (see the readiness
  section below); `step1-decisions.mjs check --run ...` reports no
  outstanding record for any item or page of this batch (run level at the
  time of writing: 263/375 ready; the remainder is other batches' empty
  inventories and missing records).

## Escalation (open, owner action): imported host page missing from the run plan

- **Exact finding.** `validate-plan --run` reports, for
  `cm-math-rotation-double-cover` only:
  `[undeclared-prereq] page cm-math-rotation-double-cover has an item
  depending on lie-subgroups-actions-and-homogeneous-spaces, which is NOT in
  the closure of its declared requires — either add it or drop the
  dependency.`
- **Cause.** The page is the home of the published example
  `ex-su-two-to-so-three-as-a-covering-homomorphism`
  (`library/lie-theory/lie-subgroups-actions-and-homogeneous-spaces.md`, with
  its companion `...-examples`), which the definition item declares and the
  theorem and remark consume through it. The page exists on disk and is
  listed in `research/math-imports.json` (read-only imported mathematics) but
  occurs **zero times** in `research/plan-spec.json`, so the finding cannot be
  repaired by adding it to `requires`: `requires-resolve` would fire because
  the plan declares no such page. Only 2 of the plan's pages carry "lie" in
  their ids, neither of them this one.
- **Why the dependency cannot be dropped.** The double-cover conclusion —
  surjectivity, kernel `{1,-1}`, two preimages — is exactly what plan L16
  assigns to this published item and what the theorem's sign-ambiguity clause
  and the B-page counterexample rest on; re-authoring it locally would
  duplicate imported canonical mathematics, which the workspace instructions
  forbid.
- **Smallest missing supplier.** A plan declaration of the imported page
  `lie-subgroups-actions-and-homogeneous-spaces` (precedent: the owner
  declared imported `kind: "P"` pages with orders strictly below 85 for the
  batch-2 and batch-3 escalations), after which this batch's manifest and page
  carrier `requires` can name it and the pair's proofs remain unchanged.
  Alternative acceptable resolution: an owner decision licensing reading-order
  access to imported published pages without `requires` entries.
- **Status.** Raised here and in the batch manifest location; the shared plan
  was **not** edited (`plan-spec.json`, engine state and verdicts are out of
  batch write scope). Item statements, proofs, contracts and coverage are
  complete against the current carriers, so the escalation is a plan-registry
  gap, not an item gap.

## Authoring repairs and refinements (with reasons)

1. **`notation-iota-applied` (content-policy, 11 items).** The house rule
   reserves `\iota` for natural-number inclusions; the R^3 → Im H
   identification originally named `\iota` in every item and both page
   carriers. All occurrences were renamed to `\varphi` (12 items + 2 pages);
   the mathematics is unchanged and `content-policy` is now clean.
2. **Fact-citation completeness.** The initial precheck/contract pass found
   three facts whose links had no citing step (`F3` of the reconstruction
   proposition; `L4` of the finite two-to-one check). Rather than delete them
   (they are load-bearing for well-definedness and notation), each was cited
   where it is actually used: the proposition now cites `F3` in step 3.1 for
   `R = rho o q` taking values in `SO(3)`, and the example cites `L4` in
   step 1.1 for the Euclidean inner product and the vanishing cross-product
   term.
3. **Endpoint rigour in the closed-loop claims.** The original one-line
   arguments applied the lift-uniqueness theorem "to an open interval
   containing [0,T]" to a lift that is only defined on the closed interval,
   which is not literally its hypothesis. Both `ex-cm-constant-angular-
   velocity-quaternion-lift` step 4.1 and the counterexample step 3.1 now
   apply the theorem to the *restricted* path on the open interval `(0,T)`
   with the interior initial time `T/2`, obtain "every lift of the restriction
   is `±` the unique one", and then contradict the assumed endpoint values by
   continuity of the lifts at `0` and `T`. This is a genuinely complete
   argument and uses the theorem's clauses 1-2 as stated.
4. **Continuity step in the uniqueness theorem.** `thm-cm-quaternion-lift-
   exists-and-is-unique` step 3.1 now records explicitly that `h = qtilde
   q^{-1}` is a `C^1` (hence continuous) curve into `{1,-1}` and that the
   image of the interval is order-convex (new fact `F6`, cited from the
   published `cor-continuous-image-of-an-interval-is-an-interval`, which is
   inside the declared closure through `cm-math-dynamics`), so `h ≡ 1` and
   `qtilde = q`; the inverse identity `q q^{-1} = 1` used there is now
   declared in fact `F2`. Fact `F5` states why the linear matrix field is
   locally Lipschitz in the state variable.
5. **Source-locator corrections** as recorded in the sources section above.

## Unresolved / not attributable

- Whole-run `item-dependency-levels` empty-inventory errors (124) and the
  other 57 `validate-plan` findings: other batches' unauthored pages.
- `fwdcheck`/`depcheck` corpus-wide findings and warnings (published-unaudited
  imports, forward markers on published items): pre-existing, not attributable
  to this batch, and none of the affected items is a supplier of this pair
  except transitively through published root mathematics.
- The owner reconciliation of the escalation above and the merged run-level
  gates (merged proof contract, `frontier-dependency-ledger
  --require-reviewed`) remain open until all batches finish. Step 3 provides
  the independent mathematical review of this batch; nothing here is
  published.

## Readiness records

Twelve `ready` records were written through the ordinary CLI, one per item,
after the final carrier edits and the final manifest regeneration, so each
record's `sha256` (item text plus the examined dependency documents plus the
page metadata) is current:

```
node tools/physics-support/step1-decisions.mjs record --run physics-cm-qm-gr-79-2026-10-11 \
  --item <id> --decision ready --dependencies '<the item's deps array>' --reason '<item-specific evidence>'
```

The examined dependency list for each record is exactly the item's declared
`deps` array (the in-run suppliers above plus the published root items cited
in its Facts block); the reason records what was authored, what was checked
in the suppliers, the page placement and the contract/worksheet status. No
`--owner` flag was used and no escalation record existed to overwrite.
