# Frontier 15 — independent reader 6 report

Run: `frontier-15`  
Role: independent Step-6 reader  
Batch: 6  
Scope: `goursat-and-cauchys-theorem-in-a-convex-domain` and `goursat-and-cauchys-theorem-in-a-convex-domain-examples`

## Fatal findings

### R6-1 — `ex-goursat-triangle-integral-of-z-squared` — false title — fatal

**Location:** title/frontmatter, formerly line 4, and the matching title in `research/frontier-15-batch-6.pages.json`.

**Defect and evidence:** The title said the integral “vanishes edge by edge,” but the Example and verification compute the three individual edge integrals as $1/3$, $(-i-1)/3$, and $i/3$. None is zero; only their sum is zero. The title therefore had a literal reading stronger than—and contradicted by—the verified construction.

**Repair:** Retitled the item and manifest row to “The three edge integrals of $z^2$ around the triangle with vertices $0$, $1$, and $i$ sum to zero.” No Statement, proof step, dependency, id, or provenance label changed.

### R6-2 — `ex-goursat-four-triangle-boundary-cancellation` — inflated `[L1]` restatement — fatal

**Location:** Facts & Assumptions `[L1]` and Verification steps 2.1–3.1, formerly lines 58 and 66–68.

**Defect and evidence:** `[L1]` said `lem-goursat-four-triangle-boundary-cancellation` “lists the four oriented boundaries and cancels every oppositely directed interior pair.” The cited lemma’s on-disk Statement does neither: it states the exact four-integral equality (and its degenerate validity). The lists and pairwise cancellation occur only in that lemma’s proof. Step 2.1 therefore cited a Statement for content it did not state.

**Repair:** Replaced `[L1]` by the lemma’s exact integral equality. Step 2.1 now derives formal cancellation directly from the explicitly listed reversed edge pairs; step 3.1 identifies that computation with the exact `[L1]` equality. Updated the contract’s citation uses and derivation inputs/claims.

### R6-3 — `ex-cauchy-integral-formula-exponential-over-z-minus-one` — inflated `[L2]` restatement — fatal

**Location:** Facts & Assumptions `[L2]`, formerly line 37.

**Defect and evidence:** `[L2]` paraphrased `thm-cauchy-integral-formula-circle` as applying whenever a function is holomorphic “on a disc containing a positively oriented circle and its interior.” The cited Statement is narrower and explicit: $f$ is holomorphic on $D(a,R)$, $0<r<R$, $|z-a|<r$, and the contour is the circle $a+r\exp(it)$. The proof’s concrete application satisfies those hypotheses, but the written citation dropped them.

**Repair:** Restated `[L2]` with the exact disc, radius, interior-point, and parametrized-circle hypotheses. The numerical verification is unchanged.

### R6-4 — `ex-cauchy-integral-formula-cosine-third-order-pole` — inflated `[L1]` restatement — fatal

**Location:** Facts & Assumptions `[L1]`, formerly line 37.

**Defect and evidence:** `[L1]` said only “For a holomorphic $f$” before asserting the higher-derivative circle formula. The cited theorem requires holomorphy on $D(a,R)$, a fixed circle with $0<r<R$, an interior point $z\in D(a,r)$, and $n\in\mathbb N$. The example meets these conditions because cosine is entire, but its fact restatement erased them.

**Repair:** Replaced `[L1]` by the smallest faithful restatement carrying every domain, radius, point, contour, and index hypothesis. The calculation at $a=0$, $r=2$, $z=1$, $n=2$ is unchanged.

### R6-5 — `cex-holomorphic-function-on-an-annulus-with-nonzero-closed-contour-integral` — uncited Euler identity — fatal

**Location:** Facts & Assumptions `[L3]` and Refutation step 1.2, formerly lines 45 and 61.

**Defect and evidence:** `[L3]` attributed the representation $z=r\exp(i\theta)$ to `thm-polar-form-with-unique-principal-argument`, but that theorem’s on-disk Statement gives $z=r(\cos\theta+i\sin\theta)$. Passing to exponential notation requires the separate identity $\exp(i\theta)=\cos\theta+i\sin\theta`; neither `[L3]` nor step 1.2 cited it.

**Repair:** Added the published, provenance-eligible dependency `cor-complex-exponential-cartesian-form-modulus-and-eulers-identity`, restated both source clauses exactly in `[L3]`, added the dependency to the batch manifest, and added its exact Statement quote/use to the proof contract. The explicit radial and circular paths are otherwise unchanged.

## Nonfatal findings

### R6-6 — all 23 proof-bearing batch items — invalid prefilled `risk_review` attestations — nonfatal

**Location:** every contract object in `research/frontier-15-batch-6.proof-contracts.json`, field `risk_review`.

**Defect and evidence:** Every proof-bearing contract carried `status: completed` with reviewer `beta-author-batch-6`. `LEVELS.md` and `QUALITY-CONTROLS.md` reserve `risk_review` for Alpha at Step 6 after the additional refuter reading; the Step-5 author cannot pre-attest that role. Because every item in this batch routes high or critical except the ordinary/moderate cases, these records could falsely satisfy the Step-6 reviewed gate before Alpha’s required work.

**Repair:** Removed all 23 Beta-authored `risk_review` blocks. Alpha remains responsible for writing genuine Step-6 dispositions.

### R6-7 — `lem-goursat-nested-triangle-selection` — inaccurate boundary dispositions — nonfatal

**Location:** contract boundary rows `empty`, `one`, and `endpoints`.

**Defect and evidence:** The `empty` row pointed to step 3.1 although nonemptiness is proved in step 1.2; the `one` row pointed to step 2.1 although the $n=0$ base formulas are in step 3.1; and `endpoints` was marked `not_applicable` even though step 1.2 uses the closed square $[0,1]^2$ and separately handles $s=0$ in the surjectivity argument.

**Repair:** Corrected both anchors and changed `endpoints` to `checked` with the actual step-1.2 disposition.

### R6-8 — `lem-differentiating-cauchy-integrals` — empty-set boundary falsely marked inapplicable — nonfatal

**Location:** contract boundary row `empty`.

**Defect and evidence:** The row asserted that a point $z_0$ in $V$ is given and marked the case inapplicable, but the Statement permits the open set $V$ to be empty. The theorem is still true there: holomorphy and the derivative identity on $V$ are vacuous. Only in the nonempty case does step 1.2 fix $z_0\in V$.

**Repair:** Changed the row to `checked` and recorded the empty/nonempty split explicitly; corrected the positive-ball anchor to step 1.2.

### R6-9 — `cor-cauchy-theorem-star-shaped-domain` and `thm-cauchy-theorem-one-exceptional-point-on-a-star-shaped-domain` — boundary rows cited the wrong local facts — nonfatal

**Location:** the first item’s `zero`, `degenerate`, and `endpoints` contract rows; the second item’s `degenerate` row.

**Defect and evidence:** The first contract attributed constant-contour and endpoint handling to `[L2]`, but `[L2]` is the definition of a primitive; the closed-contour result is `[L4]`. The second contract likewise attributed constant-contour handling to `[L3]`, another primitive definition, instead of `[L4]`.

**Repair:** Re-anchored the rows to the actual proof steps and `[L4]`, retaining the zero-function primitive construction separately.

### R6-10 — `fs-every-continuous-function-on-a-convex-domain-has-a-primitive` — boundary evidence cited unrelated facts — nonfatal

**Location:** contract boundary row `endpoints`.

**Defect and evidence:** The row said the unit circle’s closedness and orientation met `[L2]` and `[L3]`; `[L2]` is the convex-set definition and `[L3]` is the $z^{-1}$ circle integral. Neither establishes endpoint equality for the given parametrization.

**Repair:** Replaced the evidence by the direct check $\gamma(0)=\gamma(2\pi)$ for $\gamma(t)=\exp(it)$, with the proof steps that use that given contour.

## Polish

### R6-11 — several contract rows — stale or wrong proof-step anchors — polish

**Locations and evidence:** `thm-goursat-triangle-theorem` (`endpoints`), `cor-goursat-rectangle-theorem` (`nonempty-choice`), `thm-goursat-theorem-one-exceptional-point` (`degenerate`, `nonempty-choice`), `thm-cauchy-integral-formula-circle` (`zero`, `endpoints`), `ex-cauchy-integral-formula-exponential-over-z-minus-one` (`zero`, `endpoints`), `ex-cauchy-integral-formula-cosine-third-order-pole` (`zero`, `one`), `cex-holomorphic-function-on-an-annulus-with-nonzero-closed-contour-integral` (`empty`, `zero`, `endpoints`, `nonempty-choice`), and `cex-connected-domain-need-not-be-star-shaped` (`empty`). Each disposition’s mathematical conclusion was correct, but its evidence named a later step or wrong local fact rather than the step where the case was actually checked.

**Repair:** Replaced every stale anchor by the exact Statement/Given, proof step, and fact that performs the check. Finding ids were not split or renumbered after this grouped polish finding was recorded.

## Changes made

- Repaired five item files: `ex-goursat-triangle-integral-of-z-squared`, `ex-goursat-four-triangle-boundary-cancellation`, `ex-cauchy-integral-formula-exponential-over-z-minus-one`, `ex-cauchy-integral-formula-cosine-third-order-pole`, and `cex-holomorphic-function-on-an-annulus-with-nonzero-closed-contour-integral`.
- Updated the batch manifest for the corrected example title and the annulus counterexample’s added Euler-identity dependency. `research/plan-spec.json` was not touched.
- Updated `research/frontier-15-batch-6.proof-contracts.json` for the changed citation use/derivation, the added exact source clause, and every corrected boundary disposition.
- Removed no item and added no item. No id, kind, Statement, reading order, page assignment, or provenance label changed.
- No scoped item carried `verification.judge`; there was no stale judge block to delete.

## Coverage and provenance

Every one of the 25 scoped items was opened and read in full. Every numbered proof/verification/refutation step and every direct dependency citation was checked against the cited item on disk. All dependency targets have `provenance.statement` equal to `literature-derived` or `ai-altered`; none is `ai-generated` or legacy-unclassified. The two AI-generated constructions (`ex-goursat-triangle-integral-of-z-squared` and `ex-cauchy-integral-formula-cosine-third-order-pole`) were recomputed directly and no counterexample or numerical discrepancy was found.

The exact source-backed provenance routes in the batch notes were also checked against the cited Stein–Shakarchi, Tang-Kai Lee, and Howell–Mathews material for the delicate Goursat, exceptional-point, Cauchy-formula, exponential-example, and conjugation-counterexample claims. No provenance retag was warranted.

## Gate log

- `node tools/tsx-run.mjs tools/reflow.mts` on the five changed item files: all unchanged by reflow.
- `node tools/tsx-run.mjs tools/precheck.mts` on the five changed item files: pass, 5 checked, 0 failing.
- `node tools/proof-contract.mjs research/frontier-15-batch-6.proof-contracts.json --strict`: pass, 23/23, 0 errors, 0 warnings.
- `node tools/citation-fidelity.mjs research/frontier-15-batch-6.proof-contracts.json --fail-on-missing-quote`: pass, 103 citations, no missing quote or widening candidate.
- `node tools/boundary-audit.mjs research/frontier-15-batch-6.proof-contracts.json --fail-on-contradicted`: pass, 184 rows, 90 specifically justified `not_applicable` rows, no template cluster or contradicted disposition.
- `node tools/finite-smoke.mjs research/frontier-15-batch-6.proof-contracts.json`: pass, 0 errors and 0 registered checks; this batch carries no available finite-smoke obligation, so the result is not treated as mathematical evidence.
- `node tools/risk-report.mjs research/frontier-15-batch-6.proof-contracts.json`: pass, 0 errors, 23 items routed. Genuine high/critical `risk_review` dispositions remain Alpha’s Step-6 responsibility and were not fabricated by this reader.
- `node tools/content-policy.mjs research/frontier-15-batch-6.pages.json`: pass, 25 scoped items, 0 errors, 0 warnings.
- `node tools/coverage-checklist.mjs research/frontier-15-batch-6.coverage.json`: pass, 1 page, 92 harvested results, 0 errors, 0 warnings.
- `node tools/prosecheck.mjs` on the five changed items and both page files with `--warnings`: pass, 7 files, 0 errors, 0 warnings, no positional contradiction.
- `node tools/rendercheck.mjs` on the same seven files: pass; frontmatter, wikilinks, delimiters, and KaTeX all parse.
- `node tools/depcheck.mjs`: pass; repository-wide advisory `cited-not-in-deps` rows are outside batch 6, and the hard result is no cycle, no unresolved reference, and no draft item on a published page.
- `node tools/fwdcheck.mjs`: pass; no forward-reference defect.
- `node tools/extcheck.mjs`: pass; displayed warnings are inherited published recorded-not-proved consequences, none from batch 6.
- `node tools/depsource.mjs` on each batch page: pass, 0 unresolved for both pages.
- `node tools/audit-manifest.mjs research/frontier-15-batch-6.pages.json`: pass, 125 relationships over 25 items, 0 defects.
- `git diff --check` on the changed tracked artifacts and `jq empty` on both changed JSON files: pass.

The manifest now contains the corrected title and added dependency. In accordance with the dispatch, `research/plan-spec.json` was not touched; the Step-6b Alpha must apply the licensed manifest delta with `splice-plan --update`. No judge was run.

## Per-page verdicts

- `goursat-and-cauchys-theorem-in-a-convex-domain`: clean after contract corrections; no mathematical item text required repair on this A page.
- `goursat-and-cauchys-theorem-in-a-convex-domain-examples`: five fatal defects repaired; clean on reread with no unresolved mathematical concern.

Final coverage statement: every proof step and every dependency citation in both pages was read; there is no exception. Items actually opened: 70 distinct on-disk items (25 scoped items plus 45 distinct direct dependency items), in addition to both page files, the four batch artifacts, and the cited source material.
