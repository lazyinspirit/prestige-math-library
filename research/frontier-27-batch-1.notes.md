# frontier-27 batch 1 notes — scaffold

Owned pair:
`krull-dimension-and-height-theorems` (A, order `111.019`) with
`krull-dimension-and-height-theorems-examples` (B, order `111.020`).

Artifacts written by this dispatch:
`research/frontier-27-batch-1.pages.json`,
`research/frontier-27-batch-1.coverage.json`,
and this file.

Session date: Monday, August 31, 2026.

## Design against spec

Recorded here, not adjudicated here.

- The controlling design material is the CA-10 block at
  `research/plan-commutative-algebra-track.md:910-962` together with the later
  density-enrichment overlay at `research/plan-commutative-algebra-track.md:3442-3481`.
  The main CA-10 block fixes the page identity, headline results, proof route,
  and choice ledger; the later overlay is an explicit additive amendment and so
  controls proof granularity and boundary examples where it refines the earlier
  table.

- The matched algebraic-geometry references at
  `research/plan-algebraic-geometry-track.md:61`, `:315`, `:374`, `:2079`,
  and `:2203` are seam statements about downstream use of this page, not a
  local scaffold. I treated them as consumer constraints only.

- The live `research/plan-spec.json` agrees with the batch task on the A/B page
  ids, order `111.019` / `111.020`, title, companion relationship, and the
  page-level prerequisite `dedekind-domains-and-ideal-classes-examples`. I
  kept the spec edge unchanged.

- The first two CA-10 rows in the main table are already published on
  `prime-spectra-and-radicals` under the current library ids
  `lem-height-equals-local-dimension` and
  `cor-dimension-of-a-quotient-as-chains-above-an-ideal`. Because the owner
  forbids silently duplicating an established claim, I recorded those results in
  coverage as `already-published` carriers and did not remint local copies as
  `lem-height-and-localisation` or `lem-dimension-of-quotient-by-a-prime`.

- The main table phrases systems of parameters through `m`-primary ideals,
  while the later overlay isolates the radical/primary equivalence as its own
  lemma. I followed the later granularity: the definition fixes the radical
  form, and `lem-parameter-ideal-equivalent-m-primary` records the Noetherian
  local equivalence. This keeps the definition honest without leaning on an
  unstated equivalence.

- The later overlay restates several headline results in corollary form
  (`cor-height-of-a-finitely-generated-ideal`,
  `cor-height-theorem-converse-local-radical-form`,
  `cor-affine-domain-dimension-equals-transcendence-degree`). I treated those
  rows as proof-granularity guidance and kept the main CA-10 theorem ids as the
  page's load-bearing carriers, since they are the stable interface named in the
  primary design block and elsewhere in the track document.

- On the B page, I followed the overlay's six diagnostic examples and kept
  `ex-affine-dimension-formula` from the original CA-10 table because the later
  overlay otherwise leaves the affine-dimension tail without a direct worked
  computation.

## Current scaffold shape

- A page `krull-dimension-and-height-theorems`: **37 items**.
- B page `krull-dimension-and-height-theorems-examples`: **7 items**.

The A page stays well below the 60-item split ceiling, so no split is owed.

## Source set actually read

The coverage ledger records six fetch-verified sources, all re-opened in the
web reader on Monday, August 31, 2026:

1. Allen B. Altman and Steven L. Kleiman, *A Term of Commutative Algebra*,
   13th ed.:
   `https://web.mit.edu/18.705/www/13Ed.pdf`
2. J. S. Milne, *A Primer of Commutative Algebra*:
   `https://www.jmilne.org/math/xnotes/CA.pdf`
3. Melvin Hochster, *Dimension theory and systems of parameters*:
   `https://sites.lsa.umich.edu/hochster/wp-content/uploads/sites/1337/2026/04/Dim.pdf`
4. The Stacks Project, Section 10.60 `Dimension`:
   `https://stacks.math.columbia.edu/tag/00KD`
5. The Stacks Project, Section 10.116 `Dimension of finite type algebras over fields, reprise`:
   `https://stacks.math.columbia.edu/tag/07NB`
6. The Stacks Project, Section 10.105 `Catenary rings`:
   `https://stacks.math.columbia.edu/tag/00NH`

Notes on source choice:

- Altman-Kleiman is the eligible primary textbook treatment the task requires.
  Milne gives the second full lecture-note treatment for the principal ideal,
  height, and affine-dimension theorems.

- The live Hochster supplement turned out to be better for the density overlay
  than the older archive-only course-note URL: it is fetchable at its current
  host, compact, and it states the exact principal-ideal, parameter, polynomial,
  and affine-dimension cluster that the overlay decomposes.

- I used Stacks only where it materially sharpens the page boundary:
  Section 10.60 for the local parameter/dimension package,
  Section 10.116 for the affine-domain dimension formula, and
  Section 10.105 for the noncatenary warning.

- Shell-network stamping is unavailable in this sandbox. I therefore recorded
  `fetch_verified` blocks with `verified_via: web-open` after opening each URL
  in the web tool, and then re-ran gate-mode `source-fetch-check` over those
  durable stamps.

## Source-backed scope decisions

- I kept the page focused on the exact CA-10 package the design assigns:
  principal ideal theorem, height theorem and converse, systems of parameters,
  the local radical-generator characterization of dimension, polynomial-ring
  dimension, affine-domain dimension/transcendence-degree, the affine dimension
  formula, and the catenarity boundary.

- I did not remint the prime-localization and quotient-chain basics because the
  current library already publishes them earlier. That is a real scope decision,
  not a shortcut: the page now depends on the earlier prime-spectrum results
  instead of duplicating them under new ids.

- I deferred the formal-power-series half of Hochster's mixed
  polynomial/power-series dimension theorem to the published
  `formal-power-series` page. Keeping it here would duplicate an established
  page-level interface that lies outside this pair's brief.

- I kept the equal-length chain statement restricted to affine domains over a
  field, exactly as the design and Stacks boundary require. I did not broaden
  it to arbitrary Noetherian rings or to a general catenary theory page.

## Dependency rationale

- The page is layered in five blocks:
  principal-ideal reduction;
  height theorem and converse;
  local parameter ideals and dimension drop;
  polynomial-ring dimension;
  affine-domain dimension and catenarity boundary.

- The most delicate local proof step is the associated-prime/Nakayama move
  inside the principal ideal theorem. I isolated it as
  `lem-principal-ideal-theorem-associated-prime-step` so the later authoring
  pass does not hide the only genuinely nontrivial local argument inside one big
  theorem proof.

- The converse-height and parameter block follows the later overlay rather than
  compressing everything into two theorems. The selection lemma, the
  exact one-step dimension drop, and the `m`-primary equivalence are all
  genuinely used later on this page.

- The polynomial upper bound is deliberately tied to the published
  `cor-polynomial-ring-over-a-field-is-a-pid` interface. That avoids inventing a
  second one-variable polynomial-dimension theorem solely to count repeated
  contractions in `R[x]`.

- The affine tail spends the already-published Noether-normalization and
  integral-extension pages rather than rebuilding them: `cor-noether-normalisation-module-finiteness`,
  `thm-going-down-over-normal-domains`,
  `thm-incomparability-for-integral-extensions`, and
  `cor-transcendence-degree-tower-additivity` are the real upstream carriers.

## Known limits

- The radical-first definition of systems of parameters is a real design choice.
  The later authoring pass must keep the wording and the immediate equivalence
  lemma consistent instead of drifting back and forth between two conventions.

- `lem-principal-ideal-theorem-associated-prime-step` and
  `lem-polynomial-prime-contraction-height-jump-at-most-one` are the two most
  proof-dense scaffold items on the page. Their current decomposition is
  source-grounded, but they will need careful authoring to keep the supporting
  local reductions explicit.

- The shell-level URL liveness sweep could not complete in this environment.
  The source URLs themselves were opened and checked in the web tool, and the
  batch passes gate-mode `source-fetch-check`, but `url-sweep.mjs` remains an
  environment blocker on current machine bytes.

## Validation results

- `node -e "JSON.parse(...pages...); JSON.parse(...coverage...);"`
  passed on Monday, August 31, 2026:
  `json-ok`.

- `node tools/coverage-checklist.mjs --require-destination research/frontier-27-batch-1.coverage.json`
  passed on Monday, August 31, 2026:
  `1` page(s), `36` harvested result(s), `0` error(s), `0` warning(s).

- `node tools/content-policy.mjs research/frontier-27-batch-*.pages.json --manifest-only`
  passed on Monday, August 31, 2026:
  `255` scoped item(s), `0` error(s), `0` warning(s).

- `node tools/validate-plan.mjs research/plan-spec.json`
  passed on Monday, August 31, 2026 with the repository's standing
  `redundant-prereq` warnings outside this batch. The validator's final line was
  the normal success status:
  `OK — declared page order is acyclic and consistent; no item-level cycles, forward references, B-page dependencies, or unresolved ids among the 594 page(s) with item lists.`

- `node tools/source-fetch-check.mjs --coverage research/frontier-27-batch-1.coverage.json --stamp`
  did **not** complete on this machine: every URL failed immediately with
  `EAI_AGAIN`, which is the sandbox DNS/network restriction rather than a
  source-specific dead link.

- After converting the six source records to durable `web-open` stamps,
  `node tools/source-fetch-check.mjs --coverage research/frontier-27-batch-1.coverage.json`
  passed on Monday, August 31, 2026:
  `6/6` source(s) fetch-verified.

- `node tools/url-sweep.mjs --coverage research/frontier-27-batch-1.coverage.json --out /tmp/frontier-27-batch-1-url-liveness.json --recover --fail-on-dead`
  was attempted twice, once at the default timeout and once with
  `--concurrency 1 --timeout-ms 3000`. In both runs the process hung in the
  sandboxed network layer and had to be interrupted; no liveness report was
  produced on current machine bytes.

## Outcome

Batch 1 is now spec-aligned, source-harvested, and mechanically clean on the
manifest, coverage, content-policy, plan-order, and gate-mode source-fetch
checks. The remaining blocker is the shell-level URL liveness validator, whose
network calls do not complete in this sandbox even though the same URLs were
opened successfully in the web tool.

## Step-3 fix pass

Session date: Monday, August 31, 2026.

- Stable review file checked:
  `research/frontier-27-alpha-b-step3-scaffold-review.md`.

- Finding id: `7cc1a9396270f46031ca0ec947036cd6c87ee921f03d174548d076c5bc916cc4`.
  Disposition: `stands`; no batch-1 scaffold repair applied.
  Evidence: the group-`b` review keeps Hochster's formal-power-series half as a
  real deferment, not a missing CA-10 carrier. The live harvest row in
  `research/frontier-27-batch-1.coverage.json` still defers `The formal-power-series half of the theorem on polynomial and power-series extensions` to
  `formal-power-series`, while the live A-page manifest in
  `research/frontier-27-batch-1.pages.json` still owns only the polynomial half
  through `thm-dimension-of-a-polynomial-ring-over-a-noetherian-ring`. I
  re-opened Hochster's live PDF at
  `https://sites.lsa.umich.edu/hochster/wp-content/uploads/sites/1337/2026/04/Dim.pdf`
  on Monday, August 31, 2026 and re-checked the mixed `Polynomial and power
  series extensions` heading against that current deferment.
  Changed scaffold record: none in
  `research/frontier-27-batch-1.pages.json`; none in
  `research/frontier-27-batch-1.coverage.json`; appended this receipt in
  `research/frontier-27-batch-1.notes.md`.

- Finding id: **none issued for the batch-1 stale-note observation** in
  `research/frontier-27-alpha-b-step3-scaffold-review.md`.
  Disposition: `pushback`; I did not rewrite the earlier fetch/liveness
  troubleshooting transcript.
  Evidence: the review's batch-1 note says only that the old prose is stale,
  not that the current scaffold is wrong or under-specified. The historical
  validation section in this notes file still accurately records the original
  `source-fetch-check --stamp` and `url-sweep` machine behavior for the initial
  scaffold pass, while current readiness is decided by this fix pass's reruns:
  `node tools/coverage-checklist.mjs --require-destination research/frontier-27-batch-1.coverage.json`
  returned `coverage-checklist: 1 page(s), 36 harvested result(s), 0 error(s),
  0 warning(s)`; `node tools/content-policy.mjs --manifest-only research/frontier-27-batch-*.pages.json`
  returned `content-policy: 449 scoped item(s), 0 error(s), 0 warning(s)`;

## Step-5 authoring

Session date: Monday, August 31, 2026.

- Authored page files:
  `library/commutative-algebra/krull-dimension-and-height-theorems.md` and
  `library/commutative-algebra/krull-dimension-and-height-theorems-examples.md`.

- Authored A-page ids:
  `cor-minimal-prime-has-height-zero`,
  `lem-prime-chains-in-a-domain-start-at-zero`,
  `lem-height-in-quotient-is-relative-chain-length`,
  `lem-principal-ideal-theorem-reduction-to-local-domain`,
  `lem-principal-ideal-theorem-associated-prime-step`,
  `thm-krull-principal-ideal-theorem`,
  `cor-noetherian-local-domain-dimension-zero-iff-field`,
  `cor-minimal-prime-over-a-nonzerodivisor-has-height-one`,
  `lem-height-theorem-first-generator-reduction`,
  `lem-height-theorem-quotient-induction`,
  `thm-krull-height-theorem`,
  `cor-height-of-a-prime-bounded-by-minimal-number-of-generators`,
  `lem-height-converse-parameter-selection`,
  `thm-krull-height-theorem-converse`,
  `def-system-of-parameters-and-parameter-ideal`,
  `lem-parameter-ideal-equivalent-m-primary`,
  `lem-parameter-selection-avoids-minimal-components`,
  `lem-parameter-dimension-drop-is-exact`,
  `thm-existence-of-systems-of-parameters`,
  `thm-dimension-as-minimal-number-of-radical-generators`,
  `cor-dimension-drops-under-a-parameter`,
  `cor-localisation-dimension-does-not-increase`,
  `cor-quotient-dimension-does-not-increase`,
  `lem-polynomial-ring-dimension-lower-chain`,
  `lem-polynomial-prime-contraction-height-jump-at-most-one`,
  `lem-polynomial-ring-dimension-upper-bound`,
  `thm-dimension-of-a-polynomial-ring-over-a-noetherian-ring`,
  `cor-dimension-of-a-finite-polynomial-ring-over-a-field`,
  `lem-affine-domain-normalisation-dimension-upper-bound`,
  `lem-affine-domain-normalisation-dimension-lower-bound`,
  `thm-affine-domain-dimension-transcendence-degree`,
  `thm-dimension-formula-for-affine-domains`,
  `lem-affine-domain-chain-dimension-formula-step`,
  `cor-height-plus-quotient-dimension-affine-domain`,
  `cor-affine-domain-maximal-ideal-height-equals-dimension`,
  `cor-maximal-chains-in-affine-domains-have-equal-length`,
  `rem-catenarity-boundary`.

- Authored B-page ids:
  `ex-relative-height-in-a-quotient`,
  `ex-principal-ideal-height-zero-for-a-zerodivisor`,
  `ex-height-theorem-bound-sharp`,
  `ex-system-of-parameters-not-a-minimal-generating-set`,
  `ex-localisation-strictly-lowers-dimension`,
  `ex-polynomial-dimension-zero-ring-boundary`,
  `ex-affine-dimension-formula`.

- Provenance rationale:
  I kept the page's theorem/lemma/corollary statements literature-derived from
  Altman-Kleiman, Milne, Hochster, and Stacks. The local proofs are mostly
  `ai-altered` where I rewrote or compressed the printed arguments into the
  repository's phase format. The two worked examples already marked
  `ai-generated` in this batch now carry the required `generation.role: example`
  field.

- Narrowed or dropped claims:
  none. The authored statements keep the scaffolded claims and stay at
  `status: draft`.

- Proof-contract artifact:
  created `research/frontier-27-batch-1.proof-contracts.json` with `42`
  proof-bearing scope ids, regenerated its `citations` and `derivations` from
  the final on-disk proofs via `node tools/regen-contract-entries.mjs`, and
  repaired the one contradicted boundary row on
  `lem-height-theorem-first-generator-reduction`.

- Checks actually run on the final bytes:
  `node tools/tsx-run.mjs tools/precheck.mts <42 proof-bearing batch items>` ->
  `42 checked, 0 failing — all clean`.
  `node tools/validate-plan.mjs research/plan-spec.json` ->
  `OK`, with only the repository's standing out-of-batch `redundant-prereq`
  advisories.
  `node tools/content-policy.mjs research/frontier-27-batch-1.pages.json` ->
  `44 scoped item(s), 0 error(s), 0 warning(s)`.
  `node tools/proof-contract.mjs research/frontier-27-batch-1.proof-contracts.json --strict`
  -> `0 error(s), 0 warning(s), 42/42 item(s) checked`.
  `node tools/citation-fidelity.mjs research/frontier-27-batch-1.proof-contracts.json --items-dir items --fail-on-missing-quote`
  -> `122` citation(s), no missing quotes, no widening candidates.
  `node tools/boundary-audit.mjs research/frontier-27-batch-1.proof-contracts.json --items-dir items --fail-on-contradicted`
  -> no contradicted dispositions; the tool still reports two template-reuse
  advisory clusters on repeated checked-row evidence (`step 1.1` and
  `steps 1.1 and 1.2`).
  `git diff --check -- items library/commutative-algebra research/frontier-27-batch-1.proof-contracts.json research/frontier-27-batch-1.notes.md`
  -> no output.

- Blockers:
  none for the required Step-5 gates. The only remaining advisory on these
  bytes is the optional `boundary-audit` template-reuse clustering noted
  immediately above.
  `node tools/validate-plan.mjs research/plan-spec.json` ended with the normal
  `OK` success line; and
  `node tools/source-fetch-check.mjs --coverage research/frontier-27-batch-1.coverage.json`
  returned `source-fetch-check: 6/6 source(s) fetch-verified`.
  Changed scaffold record: no edit to
  `research/frontier-27-batch-1.pages.json` or
  `research/frontier-27-batch-1.coverage.json`; the only byte change in this
  pass is this appended `## Step-3 fix pass` receipt in
  `research/frontier-27-batch-1.notes.md`.
