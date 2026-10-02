# Step 3b — authoring report, pair `minkowski-theory-and-number-field-class-groups`

- Run: `frontier-37-owner-30`; dispatch
  `step3b-pair-minkowski-theory-and-number-field-class-groups-bfafec4db4fdbde4`.
- A page: `minkowski-theory-and-number-field-class-groups` (24 items).
  B page: `minkowski-theory-and-number-field-class-groups-examples` (7 items).
- Batch: 2 (`research/frontier-37-owner-30-batch-2.pages.json`), owned
  exclusively by this pair; other batches' files were not edited.
- Batch contract: `research/frontier-37-owner-30-batch-2.proof-contracts.json`
  (31 items × 8 boundary axes = 248 rows), built from the authored item text.
- Scaffold audit decision read: `…-step3a-pair-minkowski-theory-and-number-field-class-groups.md`
  (`sufficient`, receipt `…-step3a-review-minkowski-theory-and-number-field-class-groups.json`).
- Owner authoring direction: no `research/frontier-37-owner-30-owner-authoring-direction.md`
  exists on disk; no owner-held obligation for this pair.
- Cross-batch input: `research/frontier-37-owner-30-batch-2.cross-batch-dependencies.json`
  is `[]`; zero cross-batch dependency edges exist from this batch (checked
  against every current batch manifest). No in-run sibling supplier is used.
- Pre-splice findings rechecked: the only row naming this pair is
  `undeclared-prereq` for `convex-and-semicontinuous-functions-on-rn`; the
  current batch manifest and `research/plan-spec.json` both already carry that
  page in `requires`, so the row is stale/resolved. No plan change requested.

## 1. Scaffold audit (author-level readiness) and repairs made

Each item was audited for the hypotheses, quantifiers, direct suppliers and
proof route needed to write the promised claim before authoring it, in the
dispatch order (dependency level, then page order, then item ID). All 31 items
were then authored completely (numbered steps + facts/assumptions + remarks).

Repairs made while authoring (all inside this pair's files):

- Empty `uses` on `[A1]` (AC ⇒ CC) citations were repaired or removed: each
  remaining `[A1]` fact now names, in `uses`, exactly the steps that print it
  (`lem-full-lattice-fundamental-domain-and-bounded-points` 2.2;
  `lem-blichfeldt-lattice-point-principle` 1.2/2.1;
  `thm-minkowski-convex-body-theorem` 1.1;
  `cor-minkowski-convex-body-theorem-at-equality` 2.1;
  `lem-successive-minima-attainment-and-adapted-flag` 1.1;
  `lem-minkowski-successive-minima-volume-deformation` 2.2/5.1;
  `thm-minkowski-second-theorem-on-successive-minima` 1.3/4.1;
  `cex-minkowski-constants-change-under-scaled-embedding` 1.2).
  `thm-small-element-in-a-number-field-ideal` and
  `thm-hermite-minkowski-finiteness` do not use countable choice and their
  `[A1]`/`thm-choice-implies-dependent-implies-countable-choice` rows were
  removed; `lem-hermite-minkowski-bounded-primitive-integral-element` keeps the
  AC⇒CC fact because steps 2.2/2.3 use it.
- `shotgun-bracket` warnings removed by splitting compound steps at the step
  that uses each fact and adopting the canonical renumbering:
  `lem-triangular-borel-maps-scale-euclidean-volume`,
  `lem-archimedean-norm-bound`, `ex-class-group-of-q-sqrt-ten`.
- Three `checked` boundary rows that named no step/anchor were rewritten with
  concrete anchors: `def-full-euclidean-lattice-and-covolume` (degenerate),
  `def-successive-minima-of-a-convex-body-with-respect-to-a-lattice`
  (degenerate), `lem-archimedean-norm-bound` (empty, now anchored to steps 2.2
  and 3.1/4.1).
- `cor-class-group-generated-by-small-primes` boundary row credited a
  non-existent step 2.2; corrected to steps 2.1 and 3.1.
- rendercheck repaired four multiline `$$…$$` displays in authored items
  (`def-minkowski-embedding-of-a-number-field`,
  `lem-triangular-borel-maps-scale-euclidean-volume`,
  `thm-minkowski-second-theorem-on-successive-minima`,
  `thm-small-element-in-a-number-field-ideal`) with
  `tools/fix-multiline-display.mjs`; no character of the mathematics changed.
- `ex-class-group-of-q-sqrt-ten`: stray duplicate of the Remarks paragraph
  between the proof end and `## Remarks` deleted.
  `ex-discriminant-lower-bound`: missing blank line before `## Remarks` added.

No local supplier items were added; no pairs were added; no promised result was
dropped; no Recorded result was consumed; no published content was edited.
The Step-3a design correction (the volume-deformation image is not claimed
convex; avoidance via Blichfeldt + adapted flag) is reflected in the authored
`lem-minkowski-successive-minima-volume-deformation`.

## 2. Authoring checkpoint (complete)

`precheck` PASS and the strict proof contract PASS for every row; "contract"
column = item entry in `research/frontier-37-owner-30-batch-2.proof-contracts.json`;
decision = `research/frontier-37-owner-30-step3b-review-<id>.json` (`accept`,
confidence 1).

| # | Level | Item (page) | State |
| --- | --- | --- | --- |
| 1 | 0 | def-minkowski-embedding-of-a-number-field (A) | authored; contract 2 cites; decision accept |
| 2 | 0 | def-full-euclidean-lattice-and-covolume (A) | authored; contract 1 cite; decision accept |
| 3 | 0 | lem-bounded-conjugates-give-finitely-many-integral-polynomials (A) | authored; self-contained [F1]; decision accept |
| 4 | 0 | lem-finitely-many-number-field-ideals-of-bounded-norm (A) | authored; decision accept |
| 5 | 0 | lem-triangular-borel-maps-scale-euclidean-volume (A) | authored; renumbered; decision accept |
| 6 | 1 | def-successive-minima-of-a-convex-body-with-respect-to-a-lattice (A) | authored; decision accept |
| 7 | 1 | lem-archimedean-norm-bound (A) | authored; renumbered; decision accept |
| 8 | 1 | lem-full-lattice-fundamental-domain-and-bounded-points (A) | authored; decision accept |
| 9 | 1 | thm-ring-of-integers-and-ideals-are-full-lattices (A) | authored; decision accept |
| 10 | 2 | lem-blichfeldt-lattice-point-principle (A) | authored; decision accept |
| 11 | 2 | lem-successive-minima-attainment-and-adapted-flag (A) | authored; decision accept |
| 12 | 2 | thm-covolume-of-an-ideal-lattice (A) | authored; decision accept |
| 13 | 3 | lem-minkowski-successive-minima-volume-deformation (A) | authored; decision accept |
| 14 | 3 | thm-minkowski-convex-body-theorem (A) | authored; decision accept |
| 15 | 4 | cor-minkowski-convex-body-theorem-at-equality (A) | authored; decision accept |
| 16 | 4 | lem-hermite-minkowski-bounded-primitive-integral-element (A) | authored (Milne 8.43 route, both windows); decision accept |
| 17 | 4 | thm-minkowski-second-theorem-on-successive-minima (A) | authored (both inequalities); decision accept |
| 18 | 5 | thm-hermite-minkowski-finiteness (A) | authored; decision accept |
| 19 | 5 | thm-small-element-in-a-number-field-ideal (A) | authored; decision accept |
| 20 | 5 | cex-minkowski-constants-change-under-scaled-embedding (B) | authored (6/5-disc witness); decision accept |
| 21 | 6 | thm-minkowski-bound-for-ideal-classes (A) | authored; decision accept |
| 22 | 7 | cor-class-group-generated-by-small-primes (A) | authored; decision accept |
| 23 | 7 | cor-no-nontrivial-number-field-has-discriminant-plus-or-minus-one (A) | authored; decision accept |
| 24 | 7 | thm-finiteness-of-the-number-field-class-group (A) | authored; decision accept |
| 25 | 7 | ex-class-group-from-small-prime-ideals (B) | authored (X⁵−X−1, d=2869); decision accept |
| 26 | 7 | ex-class-group-of-q-sqrt-minus-five (B) | authored; decision accept |
| 27 | 7 | ex-class-group-of-q-sqrt-ten (B) | authored; renumbered; decision accept |
| 28 | 7 | ex-minkowski-bound-for-gaussian-integers (B) | authored; decision accept |
| 29 | 8 | cor-no-nontrivial-number-field-is-unramified-over-q (A) | authored (criterion re-verified locally); decision accept |
| 30 | 8 | ex-discriminant-lower-bound (B) | authored; decision accept |
| 31 | 9 | ex-no-everywhere-unramified-extension-of-q (B) | authored; decision accept |

## 3. Checks actually run (exact evidence)

- `node tools/tsx-run.mjs tools/precheck.mts <31 explicit paths>` →
  `28 checked, 0 failing` (3 definitions skipped by design).
- `node tools/rendercheck.mjs <31 items + 2 pages>` → OK, 33 files: no
  multiline display, no wikilink-in-math, all math parses under KaTeX, all
  frontmatter parses. (Four multiline-display errors in this batch were found
  and repaired before this pass.)
- `node tools/content-policy.mjs research/frontier-37-owner-30-batch-2.pages.json`
  → 31 scoped items, 0 errors, 0 warnings.
- `node tools/proof-contract.mjs research/frontier-37-owner-30-batch-2.proof-contracts.json --strict`
  → 0 errors, 0 warnings, 31/31 items checked.
- `node tools/citation-fidelity.mjs …batch-2.proof-contracts.json --fail-on-missing-quote`
  → 245 citations over 31 items; no missing quote; no widening candidates.
- `node tools/boundary-audit.mjs …batch-2.proof-contracts.json --fail-on-contradicted --fail-on-template --json`
  → 248 rows, 0 template clusters, 0 contradicted dispositions.
- `node tools/finite-smoke.mjs …batch-2.proof-contracts.json` →
  `0 error(s), 0 check(s) over 0/31 item(s) carrying obligations`. This is a
  vacuous scope for this batch: none of the 18 registered finite-smoke checks
  applies to number theory/Minkowski content, and no item text asserts an
  invariant the registry can model. Reported as vacuous, not as passed.
- `node tools/risk-report.mjs …batch-2.proof-contracts.json` → 0 errors, 31
  items routed (critical tiers) to Step-5a review.
- `node tools/gate-liveness.mjs --run frontier-37-owner-30 --contracts …batch-2… --checklists …batch-2.coverage.json`
  → proof-contract 31 live; coverage-checklist 75 live; precheck 17927 live;
  finite-smoke VACUOUS (same registry reason as above).
- `node tools/coverage-checklist.mjs research/frontier-37-owner-30-batch-2.coverage.json`
  → 1 page, 75 harvested results, 0 errors, 0 warnings.
- `node tools/item-dependency-levels.mjs check --run frontier-37-owner-30` →
  812 items over 60 pages; **0 findings name any batch-2 item or page**
  (re-run on the final state). At the time of the batch-2 check the whole run
  was clean; a later sibling edit in batch 8 then left 32 `dependency_level`
  drifts there (`ex-residue-pairing-one-cocycle` 23 vs 18, `thm-serre-duality-…`,
  `thm-riemann-hurwitz-complete`, and the rest of the residue/serre-duality
  cluster), which that batch's owner must recompute. This is a sibling
  scaffold-label drift; no batch-2 dep, level or order is affected.
- `node tools/validate-plan.mjs research/plan-spec.json` → OK: acyclic page
  order, no item cycles, no forward refs, no B-page dependencies.
- `node tools/depcheck.mjs` / `fwdcheck.mjs` / `extcheck.mjs` → repo-wide
  exit 1 for pre-existing findings in other groups (186 depcheck errors, 104
  fwdcheck errors); **0 findings name any batch-2 item or page**. `extcheck`
  exits 0 with no batch-2 rows.
- `node tools/manifest-deps.mjs research/frontier-37-owner-30-batch-2.pages.json`
  → 31 items, 0 normalized, 0 errors.
- `node tools/prosecheck.mjs <31 paths>` → 0 errors, 0 warnings.
  `node tools/citecheck.mjs <31 paths>` → OK. `node tools/depsource.mjs research/plan-spec.json`
  → 0 unresolved, no batch-2 row.
- `node tools/step3-decisions.mjs check --run frontier-37-owner-30 --phase final`
  → all 31 batch-2 items closed (no batch-2 row in `work`); 31 `accept`
  decisions at confidence 1 recorded against the current item hashes.

## 4. Cross-batch dependency input and ledger

- `research/frontier-37-owner-30-batch-2.cross-batch-dependencies.json` = `[]`.
  Verified against all 30 current batch manifests: no batch-2 item depends on
  an in-run item of another batch. No sibling rows needed preserving.
- `node tools/frontier-dependency-ledger.mjs refresh --run frontier-37-owner-30`
  **fails on a sibling pair's file**, not on batch 2:
  `items/def-modular-specht-form-and-radical-quotient.md` frontmatter is
  invalid YAML — an unescaped `\cap` inside the double-quoted source locator
  "…S^\lambda/(S^\lambda\cap(S^\lambda)^perp)…" (line 26, col 170). The same
  file also has 3 rendercheck errors. The refresh reads every run item's
  frontmatter, so it cannot complete until that owner escapes the backslashes
  (`\\cap`, `\\perp`) or rewrites the scalar. Escalated; not edited here.

## 5. Pre-splice plan status (for Step 4)

- Stale finding resolved: `undeclared-prereq` for
  `convex-and-semicontinuous-functions-on-rn` — the page is already in the
  current manifest and `plan-spec.json` `requires`.
- `splice-plan.mjs --run frontier-37-owner-30 --batch 2 --verify` reports only
  the expected pre-splice state (manifest 24 vs plan 0 items; manifest 7 vs
  plan 0 items) — i.e. batch 2 has not been spliced into the plan yet. No
  undeclared-prerequisite or mismatch finding names batch 2.
- Manifest ↔ item dependency alignment is additive: for all 31 items the
  manifest contains every dependency the authored frontmatter declares. Seven
  manifest rows additionally keep scaffold deps the authored proof does not
  cite (`lem-blichfeldt-lattice-point-principle`:
  `thm-countable-additivity-and-set-function-continuity`;
  `lem-minkowski-successive-minima-volume-deformation`:
  `thm-supporting-hyperplane-at-a-boundary-point-of-a-convex-set`;
  `thm-small-element-in-a-number-field-ideal` and
  `thm-hermite-minkowski-finiteness`:
  `thm-choice-implies-dependent-implies-countable-choice`;
  `cor-no-nontrivial-number-field-has-discriminant-plus-or-minus-one`:
  `thm-number-field-discriminant-is-well-defined-and-nonzero`;
  `ex-class-group-of-q-sqrt-minus-five` and `ex-class-group-of-q-sqrt-ten`:
  `thm-unique-factorisation-of-ideals-in-dedekind-domains`). No item dep is
  missing from its manifest row. These supersets are left for Step-4 splice
  reconciliation, not silently dropped here.
- Run-level merged contract `research/frontier-37-owner-30-proof-contracts.json`
  was not written by this dispatch: 11 sibling batches (6, 11, 13, 14, 16, 21,
  22, 23, 26, 27, 30) still have no `proof-contracts.json`, so a merge now
  would be partial. The engine's `merge-contracts` gate (single writer) will
  produce it once all batches exist; this batch's file is ready as input.

## 6. Published concerns (report only; not repaired here)

1. `cor-ring-of-integers-is-a-dedekind-domain` (published): step 1.1
   "Apply [F1] with base ring $\mathbb Z$ and extension $K/\mathbb Q$"
   does not check [F1]'s hypotheses — that $\mathbb Z$ is a Dedekind domain
   with fraction field $\mathbb Q$, and that $K/\mathbb Q$ is finite
   separable (only "K is a number field" is given) — and names no supplier for
   those premises; step 2.1's "Its integral closure" has no explicit
   antecedent. Statement and result are standard and true; the gap is
   under-justification of the applied supplier. Confidence: high on the
   evidence, no claim of mathematical falsity. Repair strategy: add the
   published suppliers `ex-integers-with-absolute-value-are-euclidean`,
   `thm-euclidean-domain-is-a-pid`, `ex-pid-as-dedekind-domain` for the base
   ring, `cor-fields-of-characteristic-zero-and-finite-fields-are-perfect`,
   `cor-algebraic-extensions-of-perfect-fields-are-separable` for separability,
   and spell out the integral closure of $\mathbb Z$ in $K$ (see also
   `research/frontier-37-owner-30-batch-2.notes.md` §"Published prerequisite
   observations").
   Consumers in this pair pass `[F11]`
   (`cor-no-nontrivial-number-field-is-unramified-over-q`,
   `ex-minkowski-bound-for-gaussian-integers`) only for Dedekind-ness, which
   this corollary's statement supplies; the local criterion re-verification in
   `cor-no-nontrivial-number-field-is-unramified-over-q` uses Dedekind
   invertibility, also supplied by the statement.
2. `thm-ramified-primes-and-the-number-field-discriminant` (published): the
   two-step proof compresses the whole criterion into step 1.1's
   "[given, algebra]" line (radical mod $p$ ⟺ residue algebra not a product of
   separable fields ⟺ some $e_i>1$) with no cited supplier and no proof of the
   equivalences; `origin: pipeline` without a run stamp. Statement is Milne
   Thm 3.35 and true. Published partial suppliers already exist
   (`thm-chinese-remainder-theorem-for-comaximal-ideals`,
   `thm-trace-form-is-nondegenerate-iff-separable`); a proposed new supplier
   `lem-trace-degeneracy-of-finite-residue-algebra-detects-ramification` is not
   published and is not in this run. Repair strategy: expand step 1.1 in place,
   or split it, along the lines already written locally in
   `cor-no-nontrivial-number-field-is-unramified-over-q`
   steps 1.3–3.1 (CRT decomposition, nilpotents for $e_i>1$, trace form /
   Frobenius argument for $e_i=1$), citing
   `thm-chinese-remainder-theorem-for-comaximal-ideals`,
   `lem-trace-pairing-for-a-finite-separable-extension`,
   `cor-fields-of-characteristic-zero-and-finite-fields-are-perfect`.
   Our dependent item does not lean on the compressed step: it re-verifies the
   criterion in full, so no batch-2 decision is escalated for this.

No other potentially defective published item was used or noticed in this
pair's proofs.

## 7. Open obligations and handoff

- Completed IDs: all 31 items of the dispatch order (24 A + 7 B), each with an
  `accept`/confidence-1 Step-3b decision and a batch-2 contract entry.
- Local suppliers added: none.
- Open obligations routed outward (not batch-2 defects):
  (a) sibling YAML fix at `items/def-modular-specht-form-and-radical-quotient.md`
  (unescaped backslashes) blocking the run-level ledger refresh;
  (b) engine-owned run-level proof-contract merge, pending batches
  6/11/13/14/16/21/22/23/26/27/30;
  (c) batch-8 `dependency_level` drift (32 rows, no batch-2 row) for that
  pair's owner to recompute before the run-level `item-dependency-levels` gate;
  (d) the two published concerns in §6 for the serial reconciler /
  `published-consumer-supplier-ledger.md` owner.
- Step-3 gates cleared for this batch: precheck + rendering, content-policy,
  strict proof-contract, citation fidelity, boundary audit, coverage checklist,
  item dependency levels, validate-plan, manifest-deps, prosecheck, citecheck,
  depsource, and item decisions. finite-smoke is vacuous for this batch's
  subject matter and is reported as such rather than claimed green.
- No unresolved supplier flags: every fact consulted is either in-pair, a
  published item, or (for AC/CC and the ramification criterion) reproduced
  locally with the actual proof use recorded.
