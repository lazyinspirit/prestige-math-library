# Step 3b authoring report — `real-hardy-spaces-maximal-functions-and-atoms`

- Run: `frontier-39-analysis-30` (batch 5) · Role: alpha-high, Step 3b scaffold auditor and item author.
- A page: `real-hardy-spaces-maximal-functions-and-atoms` (order 458.02607, fourier-analysis).
- B page: `real-hardy-spaces-maximal-functions-and-atoms-examples` (order 458.02608).
- Owned inventory: 28 items (A 23, B 5). Batch 5 contains no sibling pair.
- Step 3a scope decision: `sufficient` (receipt
  `research/frontier-39-analysis-30-step3a-review-real-hardy-spaces-maximal-functions-and-atoms.json`);
  report `research/frontier-39-analysis-30-step3a-pair-real-hardy-spaces-maximal-functions-and-atoms.md`.
- Inputs: `research/frontier-39-analysis-30-batch-5.pages.json` (scaffold),
  `-batch-5.coverage.json`, `-batch-5.notes.md`,
  `-batch-5.cross-batch-dependencies.json` (`[]`), `research/plan-spec.json`,
  `research/plan-fourier-analysis-track.md` §FR-9.
- No owner authoring direction file exists for this run/pair.

## Owned IDs in authoring order (dependency level, then page, then dispatch order)

Level 0: def-grand-maximal-test-class-of-order-n,
def-hp-atom-with-moment-order,
def-radial-and-nontangential-maximal-functions-of-a-tempered-distribution,
lem-approximate-identities-in-schwartz-space-converge-in-tempered-distributions,
lem-existence-of-schwartz-functions-with-flat-fourier-transform-at-the-origin,
lem-local-polynomial-projections-match-moments-through-order-s,
lem-whitney-decomposition-of-proper-open-subsets-of-euclidean-space.

Level 1: def-real-hardy-space-by-a-radial-maximal-function,
lem-calderon-reproducing-formula-for-the-hardy-decomposition,
lem-grand-maximal-function-controls-admissible-radial-and-nontangential-maximal-functions,
lem-smooth-maximal-functions-of-tempered-distributions-are-borel-measurable,
lem-whitney-type-ball-cover-of-a-proper-open-set,
cex-a-normalised-cube-indicator-is-not-a-hone-atom,
cex-an-hone-atom-need-not-be-smooth.

Level 2: lem-an-hp-atom-has-uniform-hp-quasinorm,
rem-riesz-transform-characterisation-of-real-hone,
thm-maximal-function-characterisations-of-real-hardy-spaces.

Level 3: cor-real-hardy-space-equals-lp-for-p-greater-than-one,
lem-ellp-sums-of-hp-atoms-converge-in-tempered-distributions,
lem-hardy-calderon-zygmund-level-decomposition-produces-atoms,
ex-a-normalised-mean-zero-hone-atom.

Level 4: thm-atomic-characterisation-of-real-hp.

Level 5: rem-real-hp-is-quasi-banach-below-one,
thm-calderon-zygmund-operators-map-hone-to-lone-under-cancellation,
thm-fourier-transform-decay-of-real-hardy-space-elements.

Level 6: cor-integrable-hardy-functions-have-vanishing-moments-in-the-atomic-range,
ex-hilbert-transform-of-a-hone-atom-is-integrable.

Level 7: cex-an-lone-function-with-nonzero-integral-is-not-in-real-hone.

## Open obligations (entry)

1. Author all 28 item files `items/<id>.md`; author both page files
   `library/fourier-analysis/real-hardy-spaces-maximal-functions-and-atoms.md`
   and `...-examples.md`.
2. Write `research/frontier-39-analysis-30-batch-5.proof-contracts.json` for the
   28 items (citation/source excerpts, step inputs, boundary worksheet).
3. Recheck 3a-recorded proof uncertainties: (i) maximal-characterisation
   theorem CUW (3.4) cited to unfetched Stein p. 96; (ii) level-decomposition
   route (Stein III.2 vs DKKP Theorem 1) must be fixed to one authored route;
   (iii) vanishing moments proved via the Fourier-decay theorem.
4. Run explicit-path precheck/rendercheck, `proof-layout.mjs` (one batched
   command), content policy, strict proof contracts, dependency levels,
   `validate-plan`, coverage checklist, manifest deps, and report results.
5. Record Step 3 item decisions (`accept`/`repaired` with confidence 1, checked
   dependency IDs) or `escalate`; no `--owner` records.

Checkpoints are appended below as items are completed.

## Checkpoint 0 — entry audited, first items written, key source found

**Scaffold audit (entry).** The batch-5 manifest statement/strategy pairs were
read in dependency order. Local repairs found so far:

1. `def-grand-maximal-test-class-of-order-n` uses the notation
   $M^{*,1}_\varphi$ but declares no dependency on
   `def-radial-and-nontangential-maximal-functions-of-a-tempered-distribution`.
   Repair: add that dependency and re-run the level computation; the item moves
   from level 0 to level 1, and the radial definition is authored first.
2. `def-hp-atom-with-moment-order` uses multi-indices $x^\alpha$ and the a.e.
   bound without declaring
   `def-ck-and-multi-index-notation-in-several-variables` and
   `def-essential-supremum-with-respect-to-a-measure`. Repair: added to `deps`.
3. The page needs a formal home for the fact that dilations of Schwartz
   functions are Schwartz with the scaling identities used by every maximal
   function item. Repair: new item
   `lem-schwartz-dilations-preserve-schwartz-space` (A page, level 0).
4. The hard direction of the maximal-characterisation theorem is authorable
   **completely** from a fetched authoritative source; see below.

**Key source found (resolves the 3a-recorded CUW (3.4) risk).** The 3a report
flagged that CUW's proof of the maximal characterisation cites the pointwise
estimate (3.4) to Stein, *Harmonic Analysis* p. 96, which is not fetched.
A complete, self-contained proof of exactly the needed result is available in
a fetch-verified author-hosted source:

- Marcin Bownik, *Anisotropic Hardy Spaces and Wavelets*, Memoirs Amer. Math.
  Soc. 164 (2003), no. 781, Chapter 7 "Other maximal definitions", printed
  pp. 41-49: Theorem 7.1 (radial/nontangential/grand equivalence, complete
  proof), Lemma 7.2 (aperture comparison of level sets), Lemma 7.3
  (deconvolution $\psi=\sum_j\eta^j*\varphi_{-j}$ with $\|\eta^j\|_{S_N}\le
  Cb^{-jL}\|\psi\|_{S_M}$), Lemma 7.4 (tangential $\le$ nontangential in
  $L^p$), Lemma 7.5 (grand $\le$ tangential pointwise), Lemma 7.6 (truncated
  maximal functions are bounded with decay), and the closing bootstrap
  (7.14)-(7.17) using the Hardy-Littlewood maximal theorem.
- URL `https://pages.uoregon.edu/mbownik/papers/12-memo0781.pdf` (scanned
  memoir, fetch-verified) and the cleaner author copy
  `https://pages.uoregon.edu/mbownik/papers/12.pdf` (123 pp., searchable
  text) used to read the proofs; local copies kept at
  `/tmp/f39/bownik-memo.pdf` and `/tmp/f39/bownik-12.pdf`.
- Isotropic specialisation: take the dilation $A=2I$; continuous dilations
  $t>0$ replace $k\in\mathbb Z$ everywhere, the truncation parameter is
  $t\ge2^{-K}$ with weight $(1+|z|/2^K)^{-L}(1+t/2^K)^{-L}$, and the
  Hardy-Littlewood maximal theorem is the published
  `thm-hardy-littlewood-maximal-inequality-for-balls` /
  `cor-centered-hardy-littlewood-maximal-operator-is-l-p-bounded`.
- Additional new prerequisite items for this route (all A page, authored in
  dependency order): `lem-schwartz-deconvolution-along-dyadic-dilations`
  (Bownik Lemma 7.3), `lem-aperture-comparison-for-maximal-function-level-sets`
  (Bownik Lemma 7.2), `lem-tangential-maximal-function-norm-bound` (Bownik
  Lemma 7.4), `lem-grand-maximal-function-is-dominated-by-the-tangential-maximal-function`
  (Bownik Lemma 7.5).
- Consequence for the page: the maximal-characterisation theorem is stated
  for the fixed admissible order $N\ge N_0(n,p)$ with
  $N_0(n,p)=\lfloor n/p\rfloor+n+2$ (the CUW/Bownik threshold), replacing the
  scaffold's open choice of threshold; the DKKP/MSV smaller threshold is
  recorded as a remark in the definition item (statements of DKKP are quoted
  with their own order there).

**Items completed (files written).**

- `items/def-hp-atom-with-moment-order.md` (definition; `precheck: n/a`).
- `items/def-radial-and-nontangential-maximal-functions-of-a-tempered-distribution.md`
  (definition; `precheck: n/a`).
- `items/lem-schwartz-dilations-preserve-schwartz-space.md` (lemma, proof).

**Checks run so far:** none yet (single batched `proof-layout.mjs` and the
per-gate commands run at handoff, as the dispatch requires).

**Next action:** author `lem-schwartz-deconvolution-along-dyadic-dilations`
(Bownik Lemma 7.3) from `/tmp/f39/bownik-12.txt` lines 4464-4650, then the
level-0 flat-Fourier and approximate-identity items.

**Correction to Checkpoint 0 (recorded at handoff).** The item
`lem-aperture-comparison-for-maximal-function-level-sets` mentioned above was
never written and is not part of the delivered inventory. The final route
compares apertures pointwise and in $L^p$ through the tangential maximal
function (`lem-tangential-maximal-function-norm-bound`, Bownik Lemma 7.4)
instead of through Bownik Lemma 7.2; the memoir's Lemma 7.2 is therefore
recorded as out-of-scope in the batch-5 coverage harvest rather than as a
scaffolded item. Likewise the Checkpoint 0 bullet stating
$N_0(n,p)=\lfloor n/p\rfloor+n+2$ is superseded: the final theorem uses the
kernel-dependent finite threshold $N_0(n,p,\varphi)$ forced by the
deconvolution constants, and records both source thresholds as choices
normalised in those sources. The delivered inventory is 33 items: the 28 scaffold IDs
(23 A + 5 B) plus five new prerequisite items on the A page:
`lem-schwartz-dilations-preserve-schwartz-space`,
`lem-schwartz-deconvolution-along-dyadic-dilations`,
`lem-tangential-maximal-function-norm-bound`,
`lem-grand-maximal-function-is-dominated-by-the-tangential-maximal-function`,
`lem-truncated-maximal-function-estimates`.

## Checkpoint 1 — inventory, decisions and final evidence

**Claim amendment (scope-visible, for Step 4 plan prose).** The maximal
characterisation theorem is stated with the kernel-dependent finite threshold
$N_0(n,p,\varphi)$ in place of the scaffold's $N_0(n,p)$. The proof route
(Bownik Chapter 7 via
`lem-schwartz-deconvolution-along-dyadic-dilations`,
`lem-grand-maximal-function-is-dominated-by-the-tangential-maximal-function`
and `lem-truncated-maximal-function-estimates`) produces order thresholds
through deconvolution constants that depend on the fixed kernel, so the
honest threshold is $N_0(n,p,\varphi)$; the $n,p$-only thresholds recorded in
[DKKP, MSV] ($N\ge\lfloor n/p\rfloor+1$) and [CUW] ($N>n/p+n+1$) are for the
test classes normalised in those papers and are recorded separately in the
definition and theorem. The refreshed Step 3a scope decision (sufficient,
`research/frontier-39-analysis-30-step3a-review-real-hardy-spaces-maximal-functions-and-atoms.json`,
sha256 `c31988060009725e349bb72741b5ec42d989afaabc048f6cd6570911c41df060`)
covers this amendment. `research/plan-spec.json` carries no item list for this
page, so no shared plan/spec file needed changing; the batch-5 manifest was
regenerated from the item files.

The Step 3a receipt is a single-slot record (`step3a-review-<page>.json`); the
refresh overwrote its scaffold-scope payload with the current-scope decision,
which is what the 3b instruction to refresh sufficient scope decisions
prescribes. The Step 3a review report itself is preserved unchanged at
`research/frontier-39-analysis-30-step3a-pair-real-hardy-spaces-maximal-functions-and-atoms.md`.

**Item decisions (28 scaffold IDs; all confidence 1).** Recorded in dependency
order; `repaired` flags items where the 3b audit changed the scaffold claim,
supplier set or proof body beyond writing it out.

| Item (A page unless marked B) | level | decision | source locator (primary) | notes |
|---|---|---|---|---|
| def-hp-atom-with-moment-order | 0 | repaired | Williams Def. 7.34; DKKP §1.1 | added multi-index/essential-supremum suppliers |
| lem-existence-of-schwartz-functions-with-flat-fourier-transform-at-the-origin | 0 | repaired | DKKP Lemma 1; Kinnunen §1.2 | B-page bump dependency replaced by A-page `def-the-standard-smooth-step-function` + `thm-chain-rule`; new even bump $\sigma(1/16-x^2)$ |
| lem-local-polynomial-projections-match-moments-through-order-s | 0 | accept | DKKP §2 | authoring of scaffold route |
| lem-whitney-decomposition-of-proper-open-subsets-of-euclidean-space | 0 | repaired | Kinnunen Remark 1.11; Williams Thm 14.5 | claim 4 restricted to $1\le R\le2$ (counterexample for $R\ge3$ recorded); L3 dilation-volume citation added |
| lem-whitney-type-ball-cover-of-a-proper-open-set | 0 | repaired | Kinnunen Remark 1.11 | decimal tokens removed; exact fractions 64/49, 15/49 |
| def-radial-and-nontangential-maximal-functions-of-a-tempered-distribution | 1 | repaired | Wang §1.1.1; Hiserote Def. 4 | added dilation/measurability suppliers |
| lem-approximate-identities-in-schwartz-space-converge-in-tempered-distributions | 1 | accept | Williams §6.2 | authored from scaffold route |
| def-grand-maximal-test-class-of-order-n | 2 | repaired | DKKP (1); MSV p.16; Bownik §3 | added radial-definition supplier; order made kernel-dependent |
| lem-calderon-reproducing-formula-for-the-hardy-decomposition | 5 | accept | DKKP §2 | authored from scaffold route |
| def-real-hardy-space-by-a-radial-maximal-function | 4 | repaired | Williams Prop. 6.10(a) | added measurability supplier |
| lem-grand-maximal-function-controls-admissible-radial-and-nontangential-maximal-functions | 4 | repaired | DKKP (2); Wang Thm 1.1 | added distributional-convolution supplier |
| lem-smooth-maximal-functions-of-tempered-distributions-are-borel-measurable | 3 | repaired | Wang §1.1.1 | added distributional-convolution supplier |
| lem-an-hp-atom-has-uniform-hp-quasinorm | 5 | repaired | Williams Prop. 7.35; DKKP §2 | order made kernel-dependent; multi-index supplier added |
| rem-riesz-transform-characterisation-of-real-hone | 5 | accept | Williams notes | quoted result, `proved_here: false`, external dependency recorded |
| thm-maximal-function-characterisations-of-real-hardy-spaces | 5 | repaired | Bownik Thm 7.1 and Lemmas 7.3-7.6; CUW §3.1-3.2 | threshold $N_0(n,p,\varphi)$; constants and truncation step repaired |
| cor-real-hardy-space-equals-lp-for-p-greater-than-one | 6 | repaired | Williams §6.2; CUW | kernel-dependent order; ultrafilter-lemma use recorded |
| lem-ellp-sums-of-hp-atoms-converge-in-tempered-distributions | 6 | repaired | DKKP §2; Williams §7.6 | kernel-dependent order; convolution supplier added |
| lem-hardy-calderon-zygmund-level-decomposition-produces-atoms | 6 | repaired | DKKP §2 pp. 61-72 | kernel-dependent order; conclusion references fixed |
| ex-a-normalised-mean-zero-hone-atom (B) | 6 | accept | Williams Def. 7.34 | authored from scaffold route |
| thm-atomic-characterisation-of-real-hp | 7 | repaired | DKKP §2; Williams §7.6 | redundant unused uniform-atom fact removed |
| rem-real-hp-is-quasi-banach-below-one | 8 | accept | Williams §6.2 | authored remark, no duality claim |
| thm-calderon-zygmund-operators-map-hone-to-lone-under-cancellation | 8 | repaired | Williams Prop. 7.35 + Rem. 7.37; MSV Thm 1 | stale step-range tokens fixed; Countable Choice recorded |
| thm-fourier-transform-decay-of-real-hardy-space-elements | 8 | accept | Bownik-Wang §3 | authored from scaffold route |
| cor-integrable-hardy-functions-have-vanishing-moments-in-the-atomic-range | 9 | repaired | Williams Prop. 6.10(b); Bownik-Wang Cor. 6 | editing artefact in the exponent comparison removed |
| cex-a-normalised-cube-indicator-is-not-a-hone-atom (B) | 1 | accept | Williams §7.6 | authored from scaffold route |
| cex-an-hone-atom-need-not-be-smooth (B) | 1 | accept | Williams Def. 7.34 | authored from scaffold route |
| ex-hilbert-transform-of-a-hone-atom-is-integrable (B) | 9 | repaired | Williams §7.6; MSV Thm 1 | CZ-kernel supplier added |
| cex-an-lone-function-with-nonzero-integral-is-not-in-real-hone (B) | 10 | accept | Williams Prop. 6.10(b) | authored from scaffold route |

The five new prerequisite items carry no Step 3 receipts by design (they are
absent from the immutable pre-author scaffold inventory and receive engine
certifications after dispatch; the Step 3 final check lists exactly these five
as `current item audit required`):

| New item | computed level | source locator (primary) |
|---|---|---|
| lem-schwartz-dilations-preserve-schwartz-space | 0 | DKKP §1.1; Wang §1.1.1 |
| lem-schwartz-deconvolution-along-dyadic-dilations | 1 | Bownik Lemma 7.3 (pp. 42-44); DKKP p. 62 |
| lem-tangential-maximal-function-norm-bound | 2 | Bownik Lemma 7.4 (pp. 44-45); CUW (3.2) |
| lem-grand-maximal-function-is-dominated-by-the-tangential-maximal-function | 3 | Bownik Lemma 7.5 (pp. 45-46); CUW (3.1) |
| lem-truncated-maximal-function-estimates | 3 | Bownik Lemma 7.6 + (7.14)-(7.17); CUW §3.1-3.2 |

**Added source (authoring).** The Bownik memoir
`https://pages.uoregon.edu/mbownik/papers/12-memo0781.pdf` is load-bearing for
the maximal-characterisation route. It was added to the batch-5 coverage row
for the A page with a Chapter 7 harvest (Theorem 7.1, Lemmas 7.2-7.6,
bootstrap (7.14)-(7.17); Lemma 7.2 recorded out-of-scope with reason) and
fetch-stamped by `source-fetch-check --stamp`: 6,950,878 bytes, 136 pages,
sha256_16 `c977260c65554fa4`. All other cited URLs were already covered by the
12 plan sources.

**Checks actually run (final state; verbatim summaries).**

1. `node tools/tsx-run.mjs tools/precheck.mts <33 item paths>` → `27 checked, 0 failing — all clean` (the six definitions/remarks have `precheck: n/a`).
2. `node tools/proof-layout.mjs <33 item paths>` (one batched command) → `proof-layout: 33 items, 115 steps, 0 defects`.
3. `node tools/rendercheck.mjs <33 item paths> <2 page paths>` → `OK — 35 file(s): ... every math span parses under the real KaTeX, and every frontmatter block parses`.
4. `node tools/content-policy.mjs research/frontier-39-analysis-30-batch-5.pages.json` → `33 scoped item(s), 0 error(s), 0 warning(s)`.
   `--manifest-only` mode reports 33 `batch-item-already-exists` errors, one per item: this mode models the batch as a future mint, and the item files already exist because the batch is authored. Item mode is the applicable check (0 errors); recorded as a known manifest-mode false positive.
5. `node tools/proof-contract.mjs research/frontier-39-analysis-30-batch-5.proof-contracts.json --strict` → `0 error(s), 0 warning(s), 33/33 item(s) checked`. Contracts: 142 exact-quote citations generated from the on-disk source statements, one derivation for each of the 115 numbered steps, and 8 boundary dispositions per item (264 entries).
6. `node tools/finite-smoke.mjs research/frontier-39-analysis-30-batch-5.proof-contracts.json` → `0 error(s), 0 check(s) over 0/33 item(s) carrying obligations` (no finite-model invariants were declared).
7. `node tools/manifest-deps.mjs research/frontier-39-analysis-30-batch-5.pages.json` → `33 item(s), 0 normalized, 0 error(s)`.
8. `node tools/audit-manifest.mjs research/frontier-39-analysis-30-batch-5.pages.json` → `226 relationship(s) over 33 item(s) in 1 batch(es); 0 defect(s)`.
9. `node tools/validate-plan.mjs research/plan-spec.json` → `OK — declared page order is acyclic and consistent; no item-level cycles, forward references, B-page dependencies, or unresolved ids ...`.
10. `node tools/coverage-checklist.mjs research/frontier-39-analysis-30-batch-5.coverage.json --require-destination` → `2 page(s), 83 harvested result(s), 0 error(s), 0 warning(s)`.
11. `node tools/source-fetch-check.mjs --coverage research/frontier-39-analysis-30-batch-5.coverage.json` → `13/13 source(s) fetch-verified` (1 newly stamped: the Bownik memoir).
12. `node tools/item-dependency-levels.mjs check --run frontier-39-analysis-30` → exit 1 with 9 errors, all in the batch-6 BMO pair (see published concerns); zero errors for batch 5.
13. `node tools/extcheck.mjs` → `OK — every recorded-not-proved statement is a cited remark with no proof, and every consequence is marked`.
14. `node tools/depcheck.mjs` → exit 1 overall (899 pre-existing library-wide errors); after the repair of the B-page bump dependency, no `depcheck` error names any of the 33 item paths or the two page paths.
15. `node tools/fwdcheck.mjs` → exit 1 overall; our items appear only in inherited informational rows, with no `forward-undeclared` or `link-unplanned` error naming them.
16. Step 3 decisions: scope refreshed (sufficient, sha256 `c31988...`) and 28 item receipts recorded (`repaired` 18, `accept` 10). `check --phase final` shows our two pages closed and the 28 scaffold items closed; only the five new prerequisite items remain `current item audit required` (engine certification is the designed post-dispatch step).

**Published concerns (exact IDs, evidence, confidence, repair strategy).**

1. Cross-batch dependency-level drift (confirmed; high confidence). Adding the
   five in-run prerequisite items raised the computed levels of the batch-6
   BMO duality items, whose manifest labels were computed before these
   additions. The run-level checker reports:
   `lem-ltwo-atoms-have-uniform-hone-quasinorm` 3→6,
   `lem-mean-zero-ltwo-functions-on-a-cube-embed-continuously-in-hone` 4→7,
   `lem-linfinity-bmo-functions-dualise-hone-boundedly` 5→8,
   `lem-finite-atomic-sums-are-dense-in-hone` 5→8,
   `thm-bmo-defines-a-bounded-functional-on-hone` 6→9,
   `lem-hone-functional-has-compatible-local-ltwo-representatives` 5→8,
   `lem-the-dual-representative-has-uniform-bmo-oscillation` 6→9,
   `lem-bmo-classes-are-determined-by-their-atom-pairings` 7→10,
   `thm-real-hone-bmo-duality` 8→11. Repair: the BMO pair owner re-runs the
   manifest level recomputation for batch 6; no mathematical content is
   affected. A separate custom scan also found `thm-w-one-infinity-functions-`
   `have-lipschitz-representatives` (batch 4) labelled 0 with computed 1; the
   official checker does not flag it, so it is recorded at suspicion level.
2. Library-wide debt in `depcheck` (899 errors) and `fwdcheck` (many
   `forward-undeclared`/`link-unplanned` rows) predates this pair and lies in
   other pages; no error names the owned items or pages. No action in scope.
3. `rem-riesz-transform-characterisation-of-real-hone` is deliberately
   `proved_here: false` with an external dependency on the Williams notes; it
   is a quoted remark, carries no proof, and is excluded from the strict
   proof-contract derivations. Independent audit in Steps 5-8 should verify
   the recorded external dependency wording and locator.

**Open obligations.**

1. Engine certifications for the five new prerequisite items (post-dispatch);
   nothing else in this pair is open in the Step 3 final check.
2. Batch-6 (BMO duality) manifest re-leveling listed above, owned by that
   pair; report only, no cross-pair edit performed.
3. Step 4 plan prose may record the $N_0(n,p,\varphi)$ amendment if the plan
   text restates the maximal-characterisation threshold; the batch-5
   manifest and both page files already state it.

**Handoff inventory.** 33 item files written (`items/`), both pages written
(`library/fourier-analysis/real-hardy-spaces-maximal-functions-and-atoms.md`
and `...-examples.md`), proof contract
`research/frontier-39-analysis-30-batch-5.proof-contracts.json`, manifest
`research/frontier-39-analysis-30-batch-5.pages.json`, coverage updated with
the fetch-stamped Bownik memoir. Sibling pairs untouched.

## Follow-up audit — Batch 7 Littlewood–Paley endpoint remarks

The two previously escalated Batch-7 remarks were re-read against the authored
Batch-5 real-Hardy definition and Batch-6 H1–BMO duality. The definition
supplies the meaning and norm notation for real $H^1$; it is a naming use, not
the proof of either endpoint result. Both Batch-7 cross-batch rows to that
definition are now `verified` with this exact use recorded.

The square-function record now identifies the source's homogeneous dyadic
operator with scales $j\in\mathbb Z$. The strict-range theorem on the square
functions page uses the different inhomogeneous operator with $j\ge0$; the
record does not claim an endpoint extension for that operator. The source
locator and exact external statement now match Williams Proposition 7.30 and
its nontangential characterization in Proposition 7.32. I removed the
unsupported claim that the cited source establishes equivalence with every
area kernel permitted by the local definition; that definition now asserts no
square-function equivalence. The endpoint remark cites the unproved square
characterization through `external_refs`, not `deps`, and the strict-range
theorem no longer links forward to that remark. These changes avoid treating
the two square functions as identical and keep the item dependency graph
acyclic.

The BMO endpoint clause uses the Batch-6 duality theorem, which assumes full
AC. The endpoint remark declares AC and depends on `def-axiom-of-choice`; no
DC use was found. The statement makes only an endpoint-scale identification
via the recorded lower-endpoint result and the H1–BMO duality; it asserts no
BMO square-function characterization. Batch-7 statements, dependencies,
external-reference metadata, contracts and this report are synchronized.
No receipts or gates were touched.
