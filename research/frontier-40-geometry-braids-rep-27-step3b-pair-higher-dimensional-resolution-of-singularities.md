# Step 3b — pair `higher-dimensional-resolution-of-singularities`

- Run `frontier-40-geometry-braids-rep-27`; role `alpha-high`; batch 26.
- A page order 915 `higher-dimensional-resolution-of-singularities` (56 items);
  B page order 916 `higher-dimensional-resolution-of-singularities-examples` (3 items).
- Scope decision (Step 3a): `sufficient` —
  `research/frontier-40-geometry-braids-rep-27-step3a-review-higher-dimensional-resolution-of-singularities.json`;
  refreshed once at the end of Step 3b because local repairs changed several item
  statement strings (see "Scope refresh" below). The refresh keeps the same
  decision (`sufficient`), the same pair, and drops no promised claim.
- This file is the running checkpoint. After every item: id, exact claim, conventions,
  source locator, dependencies, decision, checks, open gaps, next action.

## Owned IDs (59; authoring order = dispatch order)

Level 0: `def-order-of-an-ideal-sheaf-at-a-point`, `def-simple-normal-crossings-divisors`,
`lem-etale-formal-local-isomorphism`, `lem-etale-morphism-extends-to-ambient-neighbourhoods`.
Level 1: `lem-order-and-snc-under-smooth-morphisms`, `rem-resolution-of-singularities-conventions`,
`lem-blowup-charts-of-the-quadric-cone`.
Level 2–5: `def-marked-ideal`, `def-ideal-of-derivatives`,
`def-multiple-test-blowup-and-controlled-transform`, `def-equivalence-of-marked-ideals`,
`lem-controlled-transform-is-well-defined`, `lem-derivative-ideals-have-the-same-support`,
`lem-derivative-ideals-under-etale-morphisms`, `lem-derivatives-under-field-isomorphisms`,
`lem-restriction-of-marked-ideal-to-a-smooth-subvariety`, `def-canonical-resolution-invariants`,
`def-maximal-order-and-tangent-directions`, `lem-addition-and-multiplication-of-marked-ideals`,
`lem-derivatives-commute-with-controlled-transform`, `lem-smooth-pullback-of-multiple-test-blowups`.
Level 6–10: `def-coefficient-ideal`, `def-companion-ideal-and-monomial-part`,
`def-homogenized-ideal`, `lem-derivatives-of-a-multiple-test-blowup`,
`lem-derivatives-of-maximal-order-ideals`, `lem-equivalence-of-powers-of-a-marked-ideal`,
`lem-maximal-order-preserved-by-controlled-transform`, `lem-order-semicontinuity-and-snc-strata`,
`lem-coefficient-ideal-is-equivalent`, `lem-coefficient-ideal-under-smooth-morphisms`,
`lem-completion-automorphisms-for-tangent-directions`,
`lem-giraud-tangent-directions-and-controlled-transforms`, `lem-homogenized-ideal-properties`,
`lem-homogenized-ideal-under-smooth-morphisms`, `lem-coefficient-ideal-restriction-support`,
`lem-homogenized-ideal-is-equivalent`, `lem-tangent-direction-contains-the-support`,
`lem-codimension-one-maximal-order-components`, `lem-coefficient-ideal-disjoint-centres`,
`lem-glueing-homogenized-ideals`, `lem-refined-giraud-maximal-contact`.
Level 11–23: `prop-canonical-resolution-of-marked-ideals`,
`lem-canonical-resolution-commutes-with-ambient-embeddings`,
`lem-canonical-resolution-under-field-isomorphisms`, `lem-etale-commutativity-of-maximal-order-case`,
`lem-etale-commutativity-of-companion-step`, `lem-canonical-resolution-commutes-with-smooth-morphisms`,
`lem-canonical-resolution-over-nonclosed-fields`, `thm-principalization-of-ideals`,
`thm-weak-embedded-desingularization`, `thm-bravo-villamayor-full-transform`,
`lem-embedding-independence-of-desingularization`, `lem-open-restriction-of-desingularization`,
`thm-resolution-of-singularities-in-characteristic-zero`,
`lem-resolution-is-functorial-under-smooth-maps`, `rem-positive-characteristic-resolution-status`,
`ex-resolution-of-a-surface-singularity`, `cex-no-claim-of-resolution-in-positive-characteristic`.

**Level recomputation.** `cex-no-claim-of-resolution-in-positive-characteristic` received
`dependency_level: 8` (not the scaffold's 23) after its linked use of
`rem-positive-characteristic-resolution-status` was moved from `deps` to `external_refs`
(Step 3a note 1) and its level was recomputed from the actual deps by
`node tools/item-dependency-levels.mjs check --run frontier-40-geometry-braids-rep-27`;
the B-page item order was re-sorted to `[lem-blowup-charts (1), cex (8), ex-resolution (22)]`.

## Open obligations at entry, and their resolution

1. **Unfinished in-run supplier (cross-batch item edge).**
   `thm-resolution-of-normal-surface-singularities` (batch 25, order 913) is still not on
   disk (batch 25 has 77 of 88 items; the level 19–22 surface-resolution chain, including
   this theorem, is among the missing). Consumer `ex-resolution-of-a-surface-singularity`
   was fully authored anyway; its one-blowup computation is independent of the supplier,
   and its item decision is `escalate` until the supplier text exists and the comparison
   sentence's use is reconciled.
2. **Page-level `requires` edge** to `birational-morphisms-contractions-and-surface-singularities`
   (batch 25): rechecked — no item of the A page references any of the 88 batch-25 ids in
   its frontmatter deps or body wikilinks; the edge is a reading-order declaration and
   `validate-plan` confirms order 913 < 915. The batch-26 cross-batch input row records
   this and stays `open` pending the supplier page's own completion.
3. **Step 3a note 1** — done: `cex-no-claim-of-resolution-in-positive-characteristic`
   moved `rem-positive-characteristic-resolution-status` to `external_refs` (the remark is
   `proved_here: false` and the argument does not use it).
4. **Proof contracts** — created
   `research/frontier-40-geometry-braids-rep-27-batch-26.proof-contracts.json` with entries
   for all 59 items (citations, derivations, boundaries); strict check green.
5. **Gates** — all run at handoff; outputs in "Checks actually run".

## Source route (from Step 1 coverage; primary locators)

J. Włodarczyk, *Simple Hironaka resolution in characteristic zero*, arXiv:math/0401401
(28 pp., 2018 version; byte size 438468 matches the coverage stamp; local copy
`scratchpad/src/wlodarczyk.pdf`, text `scratchpad/src/wlodarczyk.txt`). Secondary:
Hauser BAMS 40 (2003) §§11–14; ATW arXiv:1906.07106 §1.1–1.4 (statement-level);
Hauser *Problem_PosChar* intro/§A–B; Stacks Divisors 31.33–31.34 (B page).

## Item log

### Levels 0–6 (authoring checkpoint)

- Level 0: `def-order-of-an-ideal-sheaf-at-a-point` (**repaired**: the multiplicity-one
  clause now assumes the local ring regular, since the claim is false otherwise);
  `def-simple-normal-crossings-divisors`; `lem-etale-formal-local-isomorphism`
  (**repaired**: the scaffold's "completions are isomorphic" is false without residual
  triviality — witness $\operatorname{Spec}L\to\operatorname{Spec}K$ for a finite
  separable extension; the item now proves flatness, $\mathfrak m_x\mathcal O_{X',x'}=\mathfrak m_{x'}$
  and the adic-filtration equivalence, and records the failure of the naive statement);
  `lem-etale-morphism-extends-to-ambient-neighbourhoods` (**repaired**: narrowed to the
  local statement used and true — $U_0\hookrightarrow X\subseteq\mathbb A^{n+1}$ closed,
  $X$ smooth at $0$, $\Phi$ étale).
- Level 1: `lem-order-and-snc-under-smooth-morphisms` (étale + projection cases, source
  Lemma 2.4.1); `rem-resolution-of-singularities-conventions` (remark, no proof section);
  `lem-blowup-charts-of-the-quadric-cone` (three charts, conic fibre, transversality,
  normality of the cone via Serre R1+S2; Stacks 31.33, Hauser §12).
- Level 2: `def-marked-ideal` (Definitions 2.1.1–2.1.2).
- Level 3: `def-ideal-of-derivatives` (Definition 2.6.1);
  `def-multiple-test-blowup-and-controlled-transform` (Definitions 2.1.3–2.1.5, §2.2).
- Level 4: `def-equivalence-of-marked-ideals` (Definition 2.5.1);
  `lem-controlled-transform-is-well-defined` (Lemma 2.2.1);
  `lem-derivative-ideals-have-the-same-support` (Lemma 2.6.2; **repaired** — see below);
  `lem-derivative-ideals-under-etale-morphisms` (Lemma 2.6.5, via $\Omega$ pullback);
  `lem-derivatives-under-field-isomorphisms` (Lemma 4.3.1; **narrowed and repaired** to
  ground-field-preserving isomorphisms — see below);
  `lem-restriction-of-marked-ideal-to-a-smooth-subvariety` (Lemma 2.10.3).
- Level 5: `def-canonical-resolution-invariants` (Section 1; rendering repair below);
  `def-maximal-order-and-tangent-directions` (Definitions 2.7.1 and 2.7.5);
  `lem-addition-and-multiplication-of-marked-ideals` (Lemma 2.8.1; rendering repair below);
  `lem-derivatives-commute-with-controlled-transform` (Lemma 2.6.3);
  `lem-smooth-pullback-of-multiple-test-blowups` (Proposition 2.4.2).
- Level 6: `def-coefficient-ideal` (Definition 2.10.1);
  `def-companion-ideal-and-monomial-part` (Definition 3.0.10); `def-homogenized-ideal`
  (Section 2.9); `lem-derivatives-of-a-multiple-test-blowup` (Lemma 2.6.4);
  `lem-derivatives-of-maximal-order-ideals` (Lemma 2.7.3);
  `lem-equivalence-of-powers-of-a-marked-ideal` (Example 2.5.2);
  `lem-maximal-order-preserved-by-controlled-transform` (Lemma 2.7.2);
  `lem-order-semicontinuity-and-snc-strata` (parts (1)–(2) proved; part (3) is the
  induction carried out inside the algorithm and is flagged as a forward pointer to
  `prop-canonical-resolution-of-marked-ideals`).

### Levels 7–13

- `lem-homogenized-ideal-properties` (source §2.9; the five formal properties of $H$).
- `lem-homogenized-ideal-under-smooth-morphisms` (Lemma 2.9.3; étale case via
  `lem-derivative-ideals-under-etale-morphisms` + the projection case).
- `lem-completion-automorphisms-for-tangent-directions` (Lemma 2.9.4; parameters
  $u=u_1$, $v=u_1+h$ with both regular systems, Taylor expansion in the complete ring).
- `lem-coefficient-ideal-under-smooth-morphisms` (Lemma 2.10.7).
- `lem-giraud-tangent-directions-and-controlled-transforms` (Lemma 2.7.4).
- `lem-coefficient-ideal-is-equivalent` (Lemma 2.10.2).
- `lem-homogenized-ideal-is-equivalent` (Lemma 2.9.2).
- `lem-tangent-direction-contains-the-support` (Lemma 2.7.6).
- `lem-coefficient-ideal-restriction-support` (Lemma 2.10.4).
- `lem-codimension-one-maximal-order-components` (Lemma 2.7.7).
- `lem-glueing-homogenized-ideals` (Lemma 2.9.5; ATW §4.1, 4.3–4.4).
- `lem-coefficient-ideal-disjoint-centres` (Lemma 2.10.5).
- `lem-refined-giraud-maximal-contact` (Lemma 2.10.6).
- `prop-canonical-resolution-of-marked-ideals` (Proposition 3.0.8; Hauser §11 as the
  independent account; step labels follow precheck's canonical numbering).
- `lem-etale-commutativity-of-maximal-order-case` (Lemma 3.0.9).
- `lem-canonical-resolution-commutes-with-ambient-embeddings` (§4.2; rendering repair below).
- `lem-canonical-resolution-under-field-isomorphisms` (Proposition 4.3.2; **repaired** —
  the missing proof was authored during Step 3b: induction on $\dim X$ transporting the
  algorithm's intrinsic data; also added $\mathcal I\ne0$ and fixed the quantification of
  the invariant comparison to the pullback side).
- `lem-etale-commutativity-of-companion-step` (Lemma 3.0.11).

### Levels 14–23

- `lem-canonical-resolution-commutes-with-smooth-morphisms` (source §4.1).
- `lem-canonical-resolution-over-nonclosed-fields` (§4.4; Galois equivariance + descent).
- `thm-principalization-of-ideals` (Theorem 1.0.1; Hauser §4.5; ATW Theorem 6.1.1).
- `thm-weak-embedded-desingularization` (Theorem 1.0.2; Hauser §13).
- `thm-bravo-villamayor-full-transform` (§4.6, Theorem 4.7.1).
- `lem-embedding-independence-of-desingularization` (Lemma 4.8.1, Proposition 4.8.2(1)).
- `lem-open-restriction-of-desingularization` (Proposition 4.8.2(2)).
- `thm-resolution-of-singularities-in-characteristic-zero` (Theorem 1.0.3; Theorem 8.1.1).
- `lem-resolution-is-functorial-under-smooth-maps` (§4.9; ATW Theorem 1.1.1).
- `rem-positive-characteristic-resolution-status` (remark; `proved_here: false`, external
  sources: Włodarczyk's remark after Definition 2.6.1 and Hauser *Problem_PosChar*
  intro/§A–B).
- `ex-resolution-of-a-surface-singularity` (Example; Stacks 31.34, Hauser §13; the
  one-blowup computation from `lem-blowup-charts-of-the-quadric-cone` is proved, the
  comparison clause cites the unfinished batch-25 supplier — decision `escalate`).
- `cex-no-claim-of-resolution-in-positive-characteristic` (Hauser §14 Example 1 and the
  introduction; **repaired**: steps moved under `## Counterexample` in the published
  counterexample layout, `rem-positive-characteristic-resolution-status` moved to
  `external_refs`, level 23 → 8. Counterexample 2 is transcribed from the source with its
  locator and is not re-proved; only Counterexample 1 is proved in full here).

### Repairs and decisions made in Step 3b

**Statement/proof repairs (11 items marked `repaired`).** The five carried over from the
authoring pass — `def-order-of-an-ideal-sheaf-at-a-point`,
`lem-etale-formal-local-isomorphism`, `lem-etale-morphism-extends-to-ambient-neighbourhoods`,
`lem-derivatives-under-field-isomorphisms`: the stale scaffold sentence "isomorphism over
$\mathbb Q$" was replaced by "isomorphism of $K$-schemes" so Statement, Facts, proof and
Remark agree; and `cex-no-claim-of-resolution-in-positive-characteristic` — plus the
repairs made during the Step 3b authoring pass:

- `lem-derivative-ideals-have-the-same-support` — removed a self-reference ("steps 1.1
  and 2.1" inside step 2.1) and proved the previously asserted maximal-order equivalence
  $\max_x\operatorname{ord}_x(\mathcal I)\le\mu\iff\mathcal D^\mu(\mathcal I)=\mathcal O_X$
  in both directions (new step 3.1), which is what
  `def-maximal-order-and-tangent-directions` cites.
- `lem-canonical-resolution-under-field-isomorphisms` — the lemma had only a Statement;
  a complete proof was authored (4 steps), with the corrected guard $\mathcal I\ne0$ and
  the corrected quantification of the invariant comparison.
- `def-multiple-test-blowup-and-controlled-transform`,
  `lem-addition-and-multiplication-of-marked-ideals`, `def-canonical-resolution-invariants`,
  `lem-canonical-resolution-commutes-with-ambient-embeddings` — rendercheck
  `multiline-display` repairs only: the display blocks were collapsed to single source
  lines; no mathematical change.

**Item decisions recorded** (`tools/step3-decisions.mjs record-item`, confidence 1,
dependencies = the item's deps): **47 `accept`, 11 `repaired`, 1 `escalate`**
(`ex-resolution-of-a-surface-singularity`). 58 of 59 receipts are closed against the
current item bytes; the escalation is intentionally open for the owner.

**Scope refresh.** The Step 3a `sufficient` receipt was re-recorded once at the end of
Step 3b because the repairs changed item statement strings and the stored `scopeHash` no
longer matched; the refreshed receipt keeps `sufficient`, covers the current inventory,
and no owner-held decision was touched.

## Checks actually run (final state)

| command (explicit paths) | result |
|---|---|
| `tools/tsx-run.mjs tools/precheck.mts items/<59 paths>` | 46 checked, 0 failing |
| `node tools/proof-layout.mjs items/<59 paths>` | 59 items, 155 steps, 0 defects |
| `node tools/rendercheck.mjs <59 items + 2 pages>` | OK — no wikilink-in-math, no unbalanced delimiters, no multiline display, all math parses |
| `node tools/proof-contract.mjs research/…-batch-26.proof-contracts.json --strict` | 0 errors, 0 warnings, 59/59 items |
| `node tools/boundary-audit.mjs research/…-batch-26.proof-contracts.json --fail-on-contradicted --fail-on-template` | 472 rows; no template cluster ≥ 3; no contradicted disposition |
| `node tools/content-policy.mjs research/…-batch-26.pages.json` | 59 scoped items, 0 errors, 0 warnings |
| `node tools/manifest-deps.mjs research/…-batch-26.pages.json` | 59 items, 0 missing, 0 errors |
| `node tools/coverage-checklist.mjs research/…-batch-26.coverage.json` | 2 pages, 80 harvested results, 0 errors, 0 warnings |
| `node tools/item-dependency-levels.mjs check --run frontier-40-geometry-braids-rep-27` | batch 26 clean; six errors in sibling batch 19 (see Findings) |
| `node tools/validate-plan.mjs research/plan-spec.json` | OK — declared page order acyclic and consistent |
| `node tools/prosecheck.mjs library/algebraic-geometry/higher-dimensional-resolution-of-singularities{,-examples}.md` | 0 errors, 1 heuristic warning (`count-of-this-page` on the true sentence "the main page cites none of them") |
| `node tools/frontier-dependency-ledger.mjs refresh --run frontier-40-geometry-braids-rep-27` | OK at handoff — "refreshed and deduplicated"; all 27 batches reviewed, 0 unreviewed, 0 orphaned; the batch-26 input's two rows appear as `open` edges (transiently blocked earlier by a sibling YAML title, fixed meanwhile — see Findings) |

## Added suppliers

None. No new item or page id was created in this pair; every change is to the 59 owned
items, the two owned pages, the batch-26 manifest/coverage/contracts, and the batch-26
cross-batch input. The 17 dependencies of
`lem-canonical-resolution-under-field-isomorphisms` are all pre-existing items at levels
0–11, so no dependency-level increase followed.

## Findings and open obligations at handoff

1. **Open escalation (owner decision needed).**
   `ex-resolution-of-a-surface-singularity` — `escalate`: supplier
   `thm-resolution-of-normal-surface-singularities` (batch 25, order 913) is not yet on
   disk; the consumer's comparison clause is the second half of its Statement. Reconcile
   when batch 25 publishes the theorem (then re-record the item decision as owner or have
   the owner resolve). Exact consuming use is recorded in the batch-26 cross-batch input
   and in the item's decision receipt.
2. **Ledger refresh (resolved during Step 3b).**
   The refresh was transiently blocked by the sibling item
   `items/lem-upper-unitriangular-coordinate-ring-is-coconnected.md`
   (`title: Coconnected Hopf algebras: …` unquoted, so the `: ` failed the YAML parse);
   that sibling title is quoted now and
   `frontier-dependency-ledger.mjs refresh --run frontier-40-geometry-braids-rep-27`
   exits 0 with all 27 batches reviewed. Recorded here because a fresh run-wide refresh
   failure of this shape should be re-checked rather than silently retried.
3. **Sibling dependency-level drift (batch 19, representation theory).**
   `item-dependency-levels.mjs check --run …` still reports four mismatches —
   `thm-parabolics-and-levi-decomposition` (31 vs computed 30),
   `ex-root-groups-and-bruhat-cells-for-sl2` (31 vs 30),
   `ex-standard-parabolics-in-gl-n` (32 vs 31),
   `cex-lie-root-system-does-not-record-full-root-datum` (29 vs 28) — a systematic
   off-by-one after those items' deps were amended (two further items of the same batch
   were corrected during Step 3b). Remedy: recompute and re-record the levels in that
   batch's manifest and item files (owner: the batch-19 author). Batch 26 is clean.
4. **Sibling supplier for Step 4 plan review.** The page edge
   `higher-dimensional-resolution-of-singularities` → `birational-morphisms-contractions-and-surface-singularities`
   remains a reading-order requirement satisfied by order 913 < 915; no A-page item
   consumes a batch-25 item, and the batch-26 cross-batch input records this. Step 4
   should re-check once batch 25 finishes.
5. **Honest scope limits recorded in items.** `lem-etale-formal-local-isomorphism`,
   `lem-etale-morphism-extends-to-ambient-neighbourhoods`,
   `lem-derivatives-under-field-isomorphisms` and
   `lem-canonical-resolution-under-field-isomorphisms` prove the ground-field-preserving
   forms actually used by the page, not the source's more general over-$\mathbb Q$
   statements; the narrowings are stated in the items. `lem-order-semicontinuity-and-snc-strata`
   part (3) is the algorithm's internal induction and is flagged as a forward pointer to
   `prop-canonical-resolution-of-marked-ideals`. Counterexample 2 of the positive-characteristic
   item is recorded from the source, not re-proved.

## Handoff

- **Completed:** all 59 owned items authored (46 proof-bearing with numbered steps, 11
  definitions, 2 remarks), both owned pages written
  (`library/algebraic-geometry/higher-dimensional-resolution-of-singularities{,-examples}.md`),
  batch-26 proof contracts created (citations, derivations, 8 boundary rows per item),
  manifest/coverage/notes preserved for siblings, and the batch-26 cross-batch input
  updated.
- **Checks actually run at handoff:** precheck, proof-layout (one batched command over all
  59 items), rendercheck (61 files), strict proof contracts, boundary audit
  (contradicted + template), content policy, manifest-deps, coverage checklist,
  item-dependency-levels, validate-plan, prosecheck — all green except the sibling
  blockers recorded above.
- **Added suppliers:** none.
- **Published concerns:** none outside this pair beyond the sibling findings above; the
  in-pair published-looking defects (false scaffold claims) were repaired and their
  failure modes are recorded in the items themselves.
- **Open obligations:** the items in "Findings and open obligations at handoff" (the
  ledger blocker is resolved; the sibling batch-19 level drift and the batch-25 page-edge
  recheck remain for their owners/Step 4); the only mathematical open edge of this pair is
  the batch-25 supplier reconciliation for `ex-resolution-of-a-surface-singularity`
  (decision `escalate`).
- **Independent audit:** Steps 5–8 will re-read the claims, sources, contracts and
  boundary dispositions; this report deliberately states which statements are narrowed,
  transcribed or forward-referenced so that audit starts from the true state.
