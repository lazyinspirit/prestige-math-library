# Step 3a scope review — pair `ariki-categorification-and-graded-decomposition-numbers` / `ariki-categorification-and-graded-decomposition-numbers-examples`

- Run: `frontier-44-special-representation-examples-28`
- Role/label: alpha / `step3a-pair-ariki-categorification-and-graded-decomposition-numbers-3f43ff7c24432b4b`
- Batch 25; A page order 1842 (26 items), B page order 1843 (2 items),
  category `special-topics-in-representation-theory`
- Date: 2026-10-10
- **Decision: `sufficient`** — scope only; this is not item approval, proof
  certification or an owner record. No scaffold or library file was edited.

## Inputs read

- Manifests: `...-batch-25.pages.json` (26 A + 2 B = 28 items), the pair's
  entries in `research/plan-spec.json` (order 1842/1843, empty item arrays,
  ten page-level `requires`), `...-scope-ledger.json` (both pages owed),
  `...-batch-25.cross-batch-dependencies.json` (107 batch-25 edges) and
  `...-batch-25.notes.md` (current NEW25 disposition plus the retained native
  notes).
- Coverage: `...-batch-25.coverage.json` — 2 pages, 8 works for the A page,
  3 for the B page, 79 dispositioned source/result rows (`canonical` list of 4).
- Prose/design: the controlling design is the SYMR-12 section of
  `research/symmetric-group-planning/proposed-inventory.md` (section at L341,
  A inventory L351, B inventory L368) with `research/symmetric-group-planning/proposed-items.json`
  (12 A + 2 B proposed items). The two plan mentions only fix identity/role:
  `research/plan-quantum-groups-track.md` L479 (SYMR-12 consumes QG-6 and QG-8)
  and `research/plan-symmetric-group-representations-track.md` L47 ("QG-8
  categorification transported to Hecke decomposition numbers"). Batch-25's
  own reading of the same control is recorded in its notes §1.
- Owner decisions: `...-owner-authoring-direction.md` (L99: future 11/24/25
  must use the full exact parameter/form/basis interfaces and the Step1-ready
  batch-10 geometric/global theorem only under its actual hypotheses; L151/L156:
  the original supplier reviewer owns the actual 11/24/25 supplier-use and
  affected-consumer checks); `...-owner-native24-cyclotomic-consumer-review/native25-consumer-review/`
  — `final-actual-afterbinding-round2.json` (verdict
  `SUFFICIENT_STEP1_FINAL_ACTUAL_AFTERBINDING_ALL28`, repair round 2/2, no
  remaining gap, 28 subjects) and
  `coherent-first-repair-sufficiency-and-integration-handoff.json` (verdict
  `SUFFICIENT_COHERENT_FIRST_REPAIR_FOR_GUARDED_INTEGRATION`; 4 new local
  helpers; scope boundary "native authoring and independent acceptance
  steps3–8 remain owed"). The earlier
  `confirmed-supplier-use-findings-first-pass.json` records the initial
  `INSUFFICIENT` supplier-use finding that the repair cycle then discharged.
- Drift: `...-alpha-step1-drift.md` §`ariki-categorification-and-graded-decomposition-numbers`
  — verdict `drift-reordered` (orders 1840/1841 → 1842/1843 only; identity,
  claims and item inventory retained).

## A-page scope (26 items)

The manifest contains **all 12 design items** and **all 2 design B items**,
plus 14 local joint items (10 added at scaffold, 4 added by the NEW25 repair):

- design items present: two graded Grothendieck towers; graded Cartan pairing;
  nondegenerate root-of-unity level-one regime; QG-8 transport across the
  Hecke–KLR bridge; graded Specht module by homogeneous tableaux; removable-node
  restriction filtration; standard-Fock realization; Ariki canonical-basis
  theorem (C0); graded decomposition numbers = canonical-basis coefficients
  (C0); graded adjustment polynomials (CP); positive-characteristic
  factorization through adjustment; the no-identity-adjustment remark;
  plus `ex-projective-versus-simple-grothendieck-classes-in-a-small-block` and
  `cex-specializing-v-to-one-forgets-graded-decomposition-information`.
- local joints: tableau domination/Garnir combinatorics; degree–codegree
  arithmetic; shifted-degree Garnir exchanges; homogeneous tableau basis
  theorem; graded-algebra transport lemma; standard-Fock expansion in the
  upper global basis; restricted-class Grothendieck basis; heads classify
  graded simples; integral form of the block; reduction of C0 simples mod p;
  and the four repair helpers (integer cyclic-presentation head descent;
  extremal-word character detection; rational Garnir annihilator lines;
  CP Specht-head/crystal-label agreement).

Content mapping against the controlling source (Brundan–Kleshchev,
arXiv:0901.4450): §2.4–2.10/(2.30) → the two towers and the Hom pairing;
§3.4–3.9 → Fock/standard vectors, triangularity and the head classification;
§3.8 → the Ariki endpoint; §5.1 Thm 5.1/Cor 5.2, Thm 5.6, Cor 5.7, Thm 5.9,
Thm 5.10, Cor 5.11/Rem 5.12, Thms 5.13–5.14, Cor 5.15, Lemma 5.16, Thm 5.17
and Thm 5.18 each map to a named item (the last to
`lem-positive-characteristic-specht-head-and-cyclotomic-crystal-labels-agree`);
§5.7 Thm 5.19 is out-of-scope with the reason that the negative-half theorem is
owned by batches 10/11. BKW 0901.0218 §3.3–3.5 and Thm 4.11 map to the
tableau/degree and restriction items; the Hu–Mathas induced filtration is
deliberately inline-only; Kleshchev's survey §§3.3, 6.2–6.3, 9 (Cor 9.7,
Thms 9.8–9.9) and Mathas Chs. 2–5 map to the degree, tableau-basis and
adjustment rows; BK 0808.2032 §6 maps to the integral form and mod-p reduction;
Ariki 1996 §1 and Thm 4.4 map to the regime and the ungraded endpoint. I read
BK §5.5–5.6 (Thms 5.13–5.18 with Lemma 5.16 and Thm 5.17's final factorization
display) directly in the cached full text to confirm this mapping, not just the
coverage table.

Intended role: SYMR-12 is the terminal page of the nondegenerate Ariki route
(QG-8 global-basis categorification transported across the blockwise
Hecke–KLR isomorphism), and its positive-characteristic adjustment boundary.
A reverse scan of all 50 batch manifests and of `plan-spec.json` finds **no
other page requiring this pair and no item depending on its items** — only the
B companion consumes the A page, consistent with the plan's consumer sentence
and with batch-25's terminal position (no in-run consumer exists to check).

## B-page scope (2 items)

Both design items are present and the page is a B leaf requiring only its A
page. The example is a full explicit rank-two, `e=2`, non-semisimple block
computation (`C[t]/(t²)`, `[P]=(1+q²)[D]`, `G(1,1)=M_{1,1}+qM_{(2)}`,
`h([P],[D])=1`, `[P:D]_q=1+q²`); the counterexample exhibits the distinct
Laurent classes `1+q²` vs `2`, `[D]` vs `q[D]` and `d_{(1,1),(2)}(q)=q` vs its
`q=1` image. This matches the SYMR worked-example policy's Hecke/KLR branch
("a low-rank specialization and grading", plan L206) at the level scope
requires, and the B rows are backed by BKW §3.5/§4 and BK §2.4–2.9/§5.2/5.5.

## Source coverage

- `coverage-checklist --require-destination`: 2 pages, 79 harvested results,
  0 errors, 0 warnings. Every deferred/out-of-scope row that names a
  destination reaches an existing item in this run's scaffold (batches 10, 11,
  20, 24 verified at item level).
- `source-fetch-check` (check mode): 11/11 source instances fetch-verified,
  11/11 resolved, 0 documented drops.
- `url-sweep` (re-run this review): 10/10 URLs live, 0 failed, 0 suspect.
  `source-backing` against the refreshed liveness file: 21 authored results,
  every one backed, exit 0.
- I independently re-fetched the load-bearing documents and the byte counts /
  SHA-256 prefixes match the recorded stamps exactly:
  0901.4450 678767/`62e4dddfab3caf89`; 0901.0218 301476/`dc74dd93bd954f8f`;
  1008.1462 276630/`f29a8e1040db2fb8`; 0909.4844 746493/`8685199608967fa7`;
  Mathas manuscript 750887/`8cfeb611a95a3ff2`; 0808.2032
  398736/`c9a24757f7f3d1e1`; 1102.3519v1 519749/`c9146a0938f25dcb`.
- **Access caveat (honest uncertainty).** The Ariki 1996 alternate extraction
  (`r.jina.ai` over the Project Euclid PDF) no longer reproduces the stamped
  50,142-byte / 48,807-character text: re-fetching now returns a 1,060-byte
  Incapsula "Pardon Our Interruption" page, and the canonical Project Euclid
  PDF bot-walls this client (both facts already recorded in the coverage
  `recovery_attempts`). The pair uses Ariki only for the Section-1 parameter
  dictionary and the ungraded endpoint (Thm 4.4), both independently carried
  by the byte-verified BK paper (Thms 5.1/5.3/5.9) and Kleshchev's survey
  (§9); Kleshchev's survey also carries the ungraded endpoint. So the source
  set remains adequate for the pair's claims, but the Ariki URL is not
  currently re-openable and the owner may want a refreshed stamp or a
  documented drop before the stage-7 source gates.

## Prerequisite closure — no unmet prerequisites found

- `depsource` for all 28 items against the run: 36 published + 133
  planned-earlier external dep rows; **0 unresolved, 0 homeless, 0
  draft-page, 0 planned-later**; no scope errors.
- My independent transitive walk (deps ∪ justified_by ∪ forward_refs) from the
  28 items over all 50 batch manifests of this run and the published `items/`
  graph: 5,654 distinct ids = 450 in-run scaffold (batches 1–50; 136 of them
  from the appended KLR-foundation pairs, batches 29–50) + 5,204 published
  items, with **0 ids absent from both the published library and the current
  scaffold** and 0 non-published statuses among the visited items. The pages
  named by the ten page-level `requires` (batches 23, 24, 9, 11, 50, 10 and
  the published `grothendieck-groups-and-graded-cartan-pairings`,
  `modular-representations-and-projective-covers`,
  `chain-conditions-and-semisimple-modules`,
  `field-extensions-and-the-complex-numbers`) all exist with the consumed
  interfaces.
- The batch-9 and batch-20 coverage rows that name this page as deferral
  destination concern v-Schur-algebra decomposition numbers / the
  q-decomposition-number conjectures (Leclerc's notes §§4–5) and a
  graded-decomposition/KLR refinement row. The Hecke–KLR endpoint of both
  lands here (Thm 5.9/Cor 5.15 = the LLT/Ariki resolution in Hecke form, the
  adjustment theory and the ungraded specialization); the **v-Schur-algebra
  formulation itself is not scaffolded** and has no consumer in this frontier.
  Batch-25's notes (honesty flag, §4/§5 item 5) already record this for owner
  reconciliation. Recommended owner action: confirm the v-Schur deferral is
  reassigned to a future q-Schur/v-Schur page or explicitly accept the
  Hecke-form coverage — either way an owner decision, not a scaffold edit
  here; it does not block this pair because nothing consumes it.
- Stale-note correction for the record: batch-25's retained native notes item 4
  says BK Thm 5.18 is "available but not scaffolded". The current coverage
  (post-NEW25 repair) maps Thm 5.18 to the CP label-agreement lemma, so that
  sentence is superseded; the CP content needed by the adjustment matrix is
  covered. The notes' current disposition (not the retained native block) is
  the accurate record.

## Checks re-run during this review

| check | command (paths abbreviated) | result |
|---|---|---|
| manifest deps | `node tools/manifest-deps.mjs ...-batch-25.pages.json` | 28 items, 0 errors |
| coverage | `node tools/coverage-checklist.mjs ...-batch-25.coverage.json --require-destination` | 2 pages, 79 results, 0/0 |
| source fetch | `node tools/source-fetch-check.mjs --coverage ...-batch-25.coverage.json` | 11/11 verified, 11/11 resolved |
| url liveness | `node tools/url-sweep.mjs --coverage ... --out /tmp/f44/url-liveness.json` | 10/10 live, 0 suspect |
| source backing | `node tools/source-backing.mjs --coverage ... --liveness /tmp/f44/url-liveness.json` | 21 results, all backed, exit 0 |
| scope integrity | `node tools/manifest-integrity.mjs --run frontier-44-special-representation-examples-28` | 100 pages owed, 100 present, no drift |
| plan | `node tools/validate-plan.mjs research/plan-spec.json --run ...` | exit 0; 947 redundant-prereq warnings, 35 on this A page's plan-level `requires` (plan hygiene, not scope loss) |
| levels | `node tools/item-dependency-levels.mjs check --run ...` | 861 items / 100 pages, max level 47 |
| readiness | `node tools/step1-decisions.mjs check --run ...` | 858 items, 858 ready, closed |

Independent closure and reverse-consumer walks are mine, not the engine's.

## Uncertainty

- Scope only: this review does not re-audit the four local repair helper proofs
  or the authored claims; the original supplier reviewer's afterbinding
  `SUFFICIENT` verdicts are cited as owner-side evidence, and native authoring
  plus steps 3b–9 remain owed.
- The Ariki 1996 access caveat above is unresolved at the URL level (the
  mathematics it backs is redundantly supplied).
- The v-Schur deferral reconciliation is pending an owner decision, as
  recorded; the deferral has no consumer and does not affect this pair's scope.
- No evidence was found of any omitted planned definition, result or example:
  all 12+2 design items are present, and the 14 scaffold-only items are proof
  joints consumed by the design items (each mapped in the coverage).

## Decision

`sufficient` for `ariki-categorification-and-graded-decomposition-numbers`:
the planned definitions, results and examples of the pair adequately cover the
intended subject (nondegenerate level-one Ariki categorification transported
across the Hecke–KLR bridge, the graded decomposition numbers, and the
positive-characteristic adjustment boundary), with adequate source coverage
and no unmet prerequisites. Recorded with
`tools/step3-decisions.mjs record-scope`.
