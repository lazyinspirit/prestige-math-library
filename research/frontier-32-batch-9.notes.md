# Frontier 32 / beta / batch 9 — scaffold notes

## Authority, design decision, and scope

Only this note, `frontier-32-batch-9.pages.json`, and
`frontier-32-batch-9.coverage.json` are being edited. No plan, workflow-state,
published page, or other batch artifact has been changed.

I read both design locations named by the dispatch. The original CA-17 design
is at `research/plan-commutative-algebra-track.md` lines 1363--1452. The later
`CA-17 additions` record at lines 3763--3812 controls the definition convention
and the finer proof decomposition wherever it refines an original broad
theorem; it adds 39 A items and 6 B items rather than replacing the original
CA-17 item list. Thus the scaffold retains all 16 original A and 7 original B
items, adds the 39/6 refinement items, and now includes two source-critical
depth lemmas found during Alpha scaffold review: 57 A items and 13 B items. The A
page is below the 60-item split limit, so no split is proposed.

There is a prerequisite-expression drift to leave for Stage 1: the track
design says CA-5, CA-10--CA-13, CA-16, and HA-8, whereas the plan spec and this
dispatch give immediate prerequisites
`koszul-complexes-and-regular-sequences-examples` and
`ext-and-balanced-resolutions`. The order agrees (`365.903`, companion
`365.904`), but the prerequisite expressions do not. Per dispatch instruction,
this batch follows the plan-spec/dispatch pair and does not adjudicate the
drift. The published direct material listed below provides the semantic seam.

## Sources read, support, and source repair

| Treatment | Exact source range read | Role in the scaffold |
| --- | --- | --- |
| [Mustaţă, *Introduction to commutative algebra*](https://websites.umich.edu/~mmustata/CAnotes.pdf) | Contents PDF pp. 2--3; Ch. 11, PDF pp. 106--115 / printed pp. 101--110, through Exercise 11.42 and before §11.3 | TOC-bearing primary course treatment of regular sequences, Ext depth, the Depth Lemma, depth bounds, Cohen--Macaulay modules, localization, polynomial extension, and exercises. |
| [Groutides/Reid, *Commutative Algebra II*, §6](https://mreid.warwick.ac.uk/MA4J8/Groutides6.pdf) | PDF pp. 1--5, Definition 6.1 through the completed proof of Lemma 6.10; Gorenstein material excluded | Independent full lecture-note treatment of regular-sequence depth, Ext comparison, quotient drop, associated primes, and parameters. |
| [Stacks Project, *Commutative Algebra*](https://stacks.math.columbia.edu/download/algebra.pdf) | PDF p. 231 / printed p. 232, Lemmas 10.99.2--10.99.3; PDF p. 268 / printed p. 269, Lemma 10.112.7; PDF pp. 451--452 / printed pp. 452--453, `10.163 Ascending properties` through Lemma 10.163.4 | Reharvested live full-text support for fibre regular-sequence lifting, flat-local dimension/depth additivity, and the closed-fibre Cohen--Macaulay criterion. |
| [Stacks, §10.72: Depth](https://stacks.math.columbia.edu/tag/00LE) | Whole named HTML section through Lemma 10.72.11 | Confirms the regular-sequence/infinity convention, Ext comparison, Depth Lemma, quotient formula, and local bounds. |
| [Stacks, §10.103: Cohen--Macaulay modules](https://stacks.math.columbia.edu/tag/00N2) | Whole named HTML section through Lemma 10.103.13 | Confirms the module definitions, parameters, quotient, associated-prime, localization, global, and polynomial results. |
| [Stacks, §10.104: Cohen--Macaulay rings](https://stacks.math.columbia.edu/tag/00N7) | Whole named HTML section through Lemma 10.104.10 | Ring specialization, localization, polynomial extension, and explicit deferred homological material. |

Every source-owned heading/result in those ranges is recorded with a concrete
disposition in the coverage artifact. The initial Hochster repair used the
same-document Doczz transcription, but its URL is now dead; the current
replacement and the complete provenance/audit trail are appended below. The
Hochster university URL remains in the coverage row as `original_url`; no
result is attributed to that unavailable text.

## Conventions, proof route, and dependency rationale

- Rings are commutative and unital. Modules are finite where the depth and
  associated-prime results state that hypothesis. Module dimension always means
  the dimension of its support.
- The controlling convention is Stacks Definition 10.72.1 / RG6 Definition
  6.1: depth is the supremum of lengths of regular sequences in the ideal;
  `IM=M` and the zero module have depth infinity. Mustaţă's Ext definition is
  retained as the comparison result `cor-depth-as-first-nonzero-ext`, not
  silently merged with the definition.
- A local Cohen--Macaulay module is nonzero finite with depth equal to support
  dimension. The global convention is checked at support primes; maximal
  Cohen--Macaulay means depth equals the ambient local-ring dimension.
- Prime avoidance and associated primes give the depth-zero obstruction and
  regular-element existence. The Ext long exact sequence supplies the shift and
  three Depth Lemma inequalities. Koszul self-duality supplies the first
  nonzero cohomology formulation. Parameter induction combines the one-step
  depth/dimension drop with associated-prime dimension equality.
- Completion uses flatness and faithful flatness of the published completion
  development. The flat-local theorem is ring-local with the source's exact
  Noetherian local and closed-fibre hypotheses; its Cohen--Macaulay iff also
  uses the stated dimension formula. It is not an unrestricted module depth
  formula.

The published seam was inspected directly: `def-regular-sequence-on-a-module`,
`def-associated-prime-of-a-module`, `thm-existence-of-associated-primes`,
`lem-zero-divisor-annihilator-contained-in-associated-prime`,
`def-support-of-a-module`, `def-system-of-parameters-and-parameter-ideal`,
`thm-dimension-and-parameters-for-modules`,
`lem-parameter-dimension-drop-is-exact`,
`def-koszul-complex-of-a-sequence-with-coefficients`,
`thm-regular-sequences-give-acyclic-koszul-complexes`,
`thm-localisation-and-flat-base-change-of-regular-sequences`,
`def-balanced-ext-bifunctor`, `thm-long-exact-ext-sequence-in-the-second-variable`,
`thm-nakayama-lemma`, `thm-krull-height-theorem`, `thm-artin-rees-lemma`,
`lem-associated-prime-equivalent-cyclic-embedding`,
`thm-minimal-support-primes-are-associated`, `lem-finite-prime-avoidance`, and
the listed completion and flatness results. The manifest records the exact
per-item `deps` arrays; all 70 are explicit and the dependency validator
resolves them.

## Item ledger

The following is the current, dependency-ordered scaffold. Each line's exact
dependency list and proposed proof strategy is the manifest record.

### A — Depth and Cohen Macaulay Modules (57)

- `def-depth-with-respect-to-an-ideal` — regular-sequence depth and infinity conventions.
- `lem-depth-infinity-when-ideal-acts-surjectively` — the `IM=M` case and Nakayama boundary.
- `lem-regular-element-exists-by-prime-avoidance` — associated-prime avoidance produces a regular element.
- `cor-depth-zero-iff-ideal-contained-in-an-associated-prime` — depth-zero criterion for an ideal.
- `thm-depth-zero-associated-prime-criterion` — local maximal-ideal specialization.
- `lem-maximal-regular-sequence-stops-at-associated-prime` — exact extension obstruction.
- `lem-ext-depth-zero-identifies-annihilated-elements` — Ext degree zero equals ideal-annihilated elements.
- `lem-ext-depth-shift-across-a-regular-element` — first nonzero Ext shift.
- `lem-maximal-regular-sequences-have-common-length-ext` — common maximal length.
- `cor-depth-as-first-nonzero-ext` — comparison of regular-sequence depth and Ext.
- `thm-depth-equals-maximal-regular-sequence-length` — sourced comparison package.
- `lem-depth-radical-invariance-via-ext` — Ext proof of radical invariance.
- `cor-depth-depends-only-on-radical` — depth radical invariance.
- `lem-depth-quotient-by-regular-element` — one-step depth drop.
- `lem-associated-prime-after-power-regular-quotient` — Artin--Rees produces the associated prime needed after a power quotient (Stacks Lemma 10.72.8).
- `lem-depth-bounded-by-associated-prime-quotient-dimension` — `depth(M) <= dim(R/p)` for every `p in Ass(M)` (Stacks Lemma 10.72.9).
- `lem-depth-localisation-inequality` — `depth(M_p) + dim(R/p) >= depth(M)` with the zero-localization convention (Stacks Lemma 10.72.10).
- `thm-radical-localisation-and-regular-quotient-properties-of-depth` — synthesis of those three properties.
- `lem-depth-lemma-lower-bound-middle` — middle Depth Lemma inequality.
- `lem-depth-lemma-lower-bound-left` — left Depth Lemma inequality.
- `lem-depth-lemma-lower-bound-right` — right Depth Lemma inequality.
- `thm-depth-lemma` — standard three inequalities.
- `cor-depth-lemma-unequal-depth-equalities` — strict-depth equality cases.
- `lem-koszul-depth-first-nonzero-cohomology` — Koszul depth calculation.
- `cor-depth-bounded-by-number-of-ideal-generators` — generator-count bound.
- `thm-koszul-characterisation-of-depth` — homology/cohomology characterization.
- `lem-depth-at-a-prime-bounded-by-local-dimension` — local support-dimension bound.
- `cor-depth-of-a-finite-local-module-at-most-its-dimension` — local specialization.
- `thm-depth-bounded-by-support-dimension` — canonical bound statement.
- `def-cohen-macaulay-local-module-and-ring` — local definition.
- `def-maximal-and-global-cohen-macaulay-modules` — maximal and global definitions.
- `cor-zero-dimensional-local-modules-are-cohen-macaulay` — zero-dimensional consequence.
- `lem-regular-quotient-preserves-depth-dimension-gap` — matched one-step drop.
- `cor-regular-quotient-cohen-macaulay-equivalence` — one-step CM iff.
- `thm-regular-quotients-and-cohen-macaulayness` — sequence form.
- `lem-associated-primes-of-cohen-macaulay-module-have-full-dimension` — full quotient dimension.
- `cor-cohen-macaulay-modules-have-no-embedded-associated-primes` — unmixed associated primes.
- `thm-associated-primes-of-cohen-macaulay-modules` — package theorem.
- `lem-cohen-macaulay-parameter-first-element-regular` — first parameter is regular.
- `lem-cohen-macaulay-parameter-sequence-induction` — quotient induction.
- `cor-every-system-of-parameters-is-regular-in-a-cohen-macaulay-module` — all parameter systems.
- `cor-one-regular-system-of-parameters-implies-cohen-macaulay` — converse.
- `thm-parameters-and-regular-sequences-in-cohen-macaulay-modules` — two-way parameter theorem.
- `lem-localisation-of-cohen-macaulay-module-depth-dimension-equality` — localized equality.
- `cor-cohen-macaulayness-localises` — global consequence.
- `thm-localisation-of-cohen-macaulay-modules` — localization theorem.
- `lem-polynomial-extension-depth-increases-by-one` — one-variable depth step.
- `cor-polynomial-extension-preserves-cohen-macaulayness` — module polynomial extension.
- `thm-polynomial-extension-of-cohen-macaulay-rings` — ring specialization.
- `lem-completion-preserves-regular-sequences` — completion preserves regularity.
- `lem-completion-reflects-depth` — depth reflects through completion.
- `cor-completion-preserves-cohen-macaulayness-two-directions` — module/ring iff.
- `thm-completion-preserves-cohen-macaulayness` — canonical completion theorem.
- `lem-flat-local-depth-formula-regular-sequence-split` — base/fibre split.
- `cor-flat-local-depth-additivity` — flat-local depth sum.
- `cor-flat-local-cohen-macaulay-fibre-criterion` — base/fibre criterion.
- `thm-depth-formula-for-flat-local-homomorphisms` — qualified formula package.

### B — Examples (13)

- `ex-zero-dimensional-rings-cohen-macaulay` — depth/dimension zero calculation.
- `ex-polynomial-rings-cohen-macaulay` — iteration from a field.
- `ex-non-cohen-macaulay-local-ring` — associated-prime depth obstruction.
- `ex-cohen-macaulay-ring-with-zero-divisors` — hypersurface with zero divisors.
- `ex-maximal-cohen-macaulay-module` — nonfree singular-hypersurface module.
- `ex-depth-of-a-hypersurface` — one-step quotient computation.
- `ex-depth-of-a-union-of-planes` — Depth Lemma computation.
- `ex-depth-infinity-zero-module-convention` — convention test case.
- `ex-depth-lemma-three-inequalities` — sharp examples for all three bounds.
- `ex-parameter-sequence-regular-in-a-hypersurface` — CM parameter calculation.
- `ex-parameter-sequence-fails-in-a-non-cm-ring` — parameter zero divisor.
- `ex-cohen-macaulay-associated-primes-unmixed` — full-dimensional associated primes.
- `ex-completion-depth-computation` — unchanged depth after completion.

## Known limits and validation record

- The authored proofs must distinguish regular-sequence depth from its Ext
  characterization, preserve the nonzero terminal quotient, and never invoke
  parameter permutation outside the published local regular-sequence result.
- The localization proof must state whether the localized module is nonzero and
  must not use catenarity; the catenarity source results are explicitly out of
  scope. The flat-local theorem must retain its source qualifications.
- Completion claims are for Noetherian local rings and finite modules; they may
  not be generalized to arbitrary completions. The B nonfree MCM example still
  owes a concrete singular-hypersurface presentation at authoring.
- Initial, pre-reharvest batch checks: JSON parse; `manifest-deps` reports 68 items, 0
  normalizations, 0 errors; batch `content-policy --manifest-only` reports 68
  scoped items, 0 errors, 0 warnings; and
  `coverage-checklist --require-destination` reports 1 A page, 103 harvested
  results, 0 errors, 0 warnings. `source-fetch-check` accepts the six durable
  live-reader receipts (6/6). `validate-plan.mjs research/plan-spec.json
  --repo .` completed with its `OK` verdict; its repository-wide output notes
  planned pages whose item lists have not yet been written, not a batch-9
  failure.
- The mandated whole-run manifest-only content policy was run across all
  discoverable `frontier-32-batch-*.pages.json` manifests. It has exactly two
  pre-existing failures outside this batch:
  `def-variety-scheme-theoretic` and
  `thm-classical-varieties-equivalent-integral-separated-finite-type-schemes`
  both depend on missing `def-separated-morphism-schemes`. Batch 9 alone is
  clean; this record neither edits nor adjudicates the other batch.
- A forced Node full-body re-fetch (`source-fetch-check --stamp --force`)
  failed all six URLs solely with DNS `EAI_AGAIN`; it wrote no replacement
  stamp. The required URL sweep with recovery likewise reported `0/6 live`,
  six `curl: (6) Could not resolve host` failures, and no archive responses:
  `/tmp/frontier-32-batch-9.url-liveness.json`. Those are runner-DNS failures,
  not contrary evidence to the live-reader full-text openings recorded above.
  In particular, no valid source was removed or re-sourced merely to clear a
  network gate. The original Hochster 404 was separately repaired before this
  sweep, as recorded in its coverage row.
- That initial Hochster transcription repair is superseded by the current
  reharvest below. The source and validation record below is the controlling
  handoff record; authoring must discharge the stated limits and must not treat
  the unrelated whole-run policy failure or sandbox DNS as a batch-9
  mathematical defect.

## Reharvest 1 — 2026-09-06

- Affected orphaned result: `thm-depth-formula-for-flat-local-homomorphisms`.
  Its only recorded included backing was the Doczz transcription of Mel
  Hochster's *Depth, Cohen--Macaulay Rings, and Flatness*. The original PDF,
  `https://dept.math.lsa.umich.edu/~hochster/615W16/615supp.pdf`, remains
  preserved as `original_url`. The frontier-32 liveness/recovery sweep recorded
  the transcription as HTTP 403 with no archive under it or the checked host
  variants; a new direct-reader attempt on the original did not open full text.
  A search-index excerpt is not a usable document or archive, so it was not
  treated as recovery evidence.
- Replacement read in full at the listed entries: the Stacks *Commutative
  Algebra* PDF, [Lemmas 10.99.2--10.99.3](https://stacks.math.columbia.edu/download/algebra.pdf)
  on PDF p. 231 proves the fibre nonzerodivisor lift and its regular-sequence/
  flat-quotient iteration; [Lemma 10.112.7](https://stacks.math.columbia.edu/tag/00ON)
  gives the flat-local dimension equality; and [Section 10.163](https://stacks.math.columbia.edu/tag/0336),
  Lemmas 10.163.1--10.163.3, gives the finite-module depth formula, its
  flat-local ring specialization, and the Cohen--Macaulay iff for the base and
  closed fibre. Lemma 10.163.4 was also read and is explicitly out of scope.
  The exact coverage rows now route these facts respectively to
  `lem-flat-local-depth-formula-regular-sequence-split`,
  `cor-flat-local-depth-additivity`,
  `cor-flat-local-cohen-macaulay-fibre-criterion`, and
  `thm-depth-formula-for-flat-local-homomorphisms`; thus no affected result was
  dropped to clear the source gate.
- Constraint correction for the future author: the reharvested local formula
  assumes a flat local homomorphism of Noetherian local rings and its closed
  fibre. Flatness supplies going down for the dimension equality. The
  finite-module hypotheses belong specifically to Lemma 10.163.1; the ring
  specializations 10.163.2--10.163.3 do not impose a finite-type hypothesis.
  Therefore the manifest strategy's inherited word `finite-type` must not be
  stated as an essential hypothesis of the authored local theorem; a deliberate
  narrower finite-type corollary would need its own stated reason. The existing
  dependency IDs and page split are unchanged.
- Validation checkpoint: JSON parse succeeded after the coverage edit. Pending
  this entry are batch source-backing against fresh liveness, destination-required
  coverage, URL recovery/liveness, and fetch-stamp checks; their exact outcomes
  will be appended without changing any non-batch artifact.

### Reharvest validation results

- `node tools/coverage-checklist.mjs research/frontier-32-batch-9.coverage.json
  --require-destination` passed: 1 A page, 105 harvested results, 0 errors, and
  0 warnings. The eight Stacks rows are all dispositions of source entries
  actually read; the prior source's mathematical support was reharvested rather
  than deleted.
- `node tools/source-fetch-check.mjs --coverage
  research/frontier-32-batch-9.coverage.json --stamp --timeout-sec 60` attempted
  the required new-source stamp. The five existing receipts were accepted; Node
  failed the Stacks PDF before HTTP with `EAI_AGAIN` and wrote no byte digest.
  The independently observed full-PDF reader receipt (469 pages and the exact
  entries above) is therefore recorded in this batch coverage. The no-network
  gate then passed: `source-fetch-check: 6/6 source(s) fetch-verified`.
- `node tools/source-backing.mjs --coverage
  research/frontier-32-batch-9.coverage.json --liveness
  research/frontier-32-url-liveness.json --require-verified` passed: 31 authored
  results in this file retain an openable, fetch-verified backing. The new
  Stacks source is not in the pre-reharvest global liveness file, so that gate
  correctly treats it as unknown rather than inventing a dead link; its
  independently verified receipt supplies the stricter condition.
- Fresh local URL liveness was run to
  `/tmp/frontier-32-batch-9-reharvest-url-liveness.json`: `url-sweep` reported
  0/6 only because this runner's curl resolver returned `Could not resolve host`
  for every independent source, including the five pre-existing URLs. The
  earlier frontier-32 recovery sweep had already completed before replacement:
  it reported the Doczz URL HTTP 403 and no archive under any checked host
  variant, which is why re-sourcing was authorized. This fresh all-host DNS
  failure is an environmental retry obligation, not evidence against the live
  reader openings or a reason to reinstate the dead source. No global liveness
  artifact or workflow state was edited.

## Step-3 fix pass

### F12-1 — not applicable to Batch 9

- **Disposition:** no Batch-9 scaffold change. The sole numbered finding in
  Alpha group `f` concerns
  `schemes-subschemes-and-morphisms-locally-of-finite-type` in Batch 12: its
  missing classical-variety category definition and comparison-source mapping
  cannot be repaired in this Batch-9-only dispatch. This is a scoped no-op,
  not a rejection of the finding.
- **Evidence:**
  `research/frontier-32-alpha-f-step3-scaffold-review.md`, its F12-1 section,
  and `research/frontier-32-alpha-f-step3-verdicts.json` identify no missing
  item, source row, or dependency for
  `depth-and-cohen-macaulay-modules`; that page's verdict is `sufficient`.
- **Changed scaffold record:** none. Altering the Batch-12 scheme item here
  would violate both the batch boundary and this repair licence.

### Batch-9 reviewer-repair recheck

The review's unnumbered Batch-9 repairs were already present, so they were
verified rather than duplicated. The localization chain has the separately
scaffolded records
`lem-associated-prime-after-power-regular-quotient`,
`lem-depth-bounded-by-associated-prime-quotient-dimension`, and
`lem-depth-localisation-inequality`. The corresponding included coverage rows
are Stacks Depth Lemmas 10.72.8--10.72.10; the live source gives the exact
inequality
`depth(M_p) + dim(R/p) >= depth(M)`. The latter route feeds the Cohen--Macaulay
localization record rather than bypassing it.

The flat-local route retains
`cor-flat-local-depth-additivity`,
`cor-flat-local-cohen-macaulay-fibre-criterion`, and
`thm-depth-formula-for-flat-local-homomorphisms`. The live Stacks *Commutative
Algebra* PDF, §10.163, Lemmas 10.163.1--10.163.3, supports the finite-module
formula and its ring specializations; the ring theorem states a flat local map
of Noetherian local rings and its closed fibre, with no finite-type hypothesis.

All six recorded source URLs were re-opened as full text in this fix pass: the
Mustaţă, Groutides, and Stacks PDFs reported 145, 8, and 469 pages respectively,
and the three Stacks HTML sections opened at their recorded complete ranges.
No source was re-sourced, removed, or had its harvest disposition changed.

Focused validation on the unchanged Batch-9 records:

- `manifest-deps`: 70 items, 0 normalizations, 0 errors.
- `coverage-checklist --require-destination`: 1 page, 105 harvested results,
  0 errors, 0 warnings.
- `source-fetch-check`: 6/6 sources fetch-verified.
- whole-run `content-policy --manifest-only`: 676 scoped items, 0 errors,
  0 warnings.
- `validate-plan research/plan-spec.json --repo . --max-items 60`: `OK`; the
  plan is acyclic and has no item-level cycles, forward references, B-page
  dependency violations, or unresolved ids among pages with written lists.

## Step-5 authoring

- **Authored A ids (57):** `def-depth-with-respect-to-an-ideal`, `lem-depth-infinity-when-ideal-acts-surjectively`, `lem-regular-element-exists-by-prime-avoidance`, `cor-depth-zero-iff-ideal-contained-in-an-associated-prime`, `thm-depth-zero-associated-prime-criterion`, `lem-maximal-regular-sequence-stops-at-associated-prime`, `lem-ext-depth-zero-identifies-annihilated-elements`, `lem-ext-depth-shift-across-a-regular-element`, `lem-maximal-regular-sequences-have-common-length-ext`, `cor-depth-as-first-nonzero-ext`, `thm-depth-equals-maximal-regular-sequence-length`, `lem-depth-radical-invariance-via-ext`, `cor-depth-depends-only-on-radical`, `lem-depth-quotient-by-regular-element`, `lem-associated-prime-after-power-regular-quotient`, `lem-depth-bounded-by-associated-prime-quotient-dimension`, `lem-depth-localisation-inequality`, `thm-radical-localisation-and-regular-quotient-properties-of-depth`, `lem-depth-lemma-lower-bound-middle`, `lem-depth-lemma-lower-bound-left`, `lem-depth-lemma-lower-bound-right`, `thm-depth-lemma`, `cor-depth-lemma-unequal-depth-equalities`, `lem-koszul-depth-first-nonzero-cohomology`, `cor-depth-bounded-by-number-of-ideal-generators`, `thm-koszul-characterisation-of-depth`, `lem-depth-at-a-prime-bounded-by-local-dimension`, `cor-depth-of-a-finite-local-module-at-most-its-dimension`, `thm-depth-bounded-by-support-dimension`, `def-cohen-macaulay-local-module-and-ring`, `def-maximal-and-global-cohen-macaulay-modules`, `cor-zero-dimensional-local-modules-are-cohen-macaulay`, `lem-regular-quotient-preserves-depth-dimension-gap`, `cor-regular-quotient-cohen-macaulay-equivalence`, `thm-regular-quotients-and-cohen-macaulayness`, `lem-associated-primes-of-cohen-macaulay-module-have-full-dimension`, `cor-cohen-macaulay-modules-have-no-embedded-associated-primes`, `thm-associated-primes-of-cohen-macaulay-modules`, `lem-cohen-macaulay-parameter-first-element-regular`, `lem-cohen-macaulay-parameter-sequence-induction`, `cor-every-system-of-parameters-is-regular-in-a-cohen-macaulay-module`, `cor-one-regular-system-of-parameters-implies-cohen-macaulay`, `thm-parameters-and-regular-sequences-in-cohen-macaulay-modules`, `lem-localisation-of-cohen-macaulay-module-depth-dimension-equality`, `cor-cohen-macaulayness-localises`, `thm-localisation-of-cohen-macaulay-modules`, `lem-polynomial-extension-depth-increases-by-one`, `cor-polynomial-extension-preserves-cohen-macaulayness`, `thm-polynomial-extension-of-cohen-macaulay-rings`, `lem-completion-preserves-regular-sequences`, `lem-completion-reflects-depth`, `cor-completion-preserves-cohen-macaulayness-two-directions`, `thm-completion-preserves-cohen-macaulayness`, `lem-flat-local-depth-formula-regular-sequence-split`, `cor-flat-local-depth-additivity`, `cor-flat-local-cohen-macaulay-fibre-criterion`, `thm-depth-formula-for-flat-local-homomorphisms`.
- **Authored B ids (13):** `ex-zero-dimensional-rings-cohen-macaulay`, `ex-polynomial-rings-cohen-macaulay`, `ex-non-cohen-macaulay-local-ring`, `ex-cohen-macaulay-ring-with-zero-divisors`, `ex-maximal-cohen-macaulay-module`, `ex-depth-of-a-hypersurface`, `ex-depth-of-a-union-of-planes`, `ex-depth-infinity-zero-module-convention`, `ex-depth-lemma-three-inequalities`, `ex-parameter-sequence-regular-in-a-hypersurface`, `ex-parameter-sequence-fails-in-a-non-cm-ring`, `ex-cohen-macaulay-associated-primes-unmixed`, `ex-completion-depth-computation`.
- **Pages:** `library/commutative-algebra/depth-and-cohen-macaulay-modules.md` and `library/commutative-algebra/depth-and-cohen-macaulay-modules-examples.md`; every new item and page is `status: draft`.
- **Provenance and sources:** statements are marked `literature-derived` and the written proof presentation `ai-altered` (definitions use `not-applicable`). Every item records a URL from the reharvested Mustaţă/Stacks source treatments; the flat-local and completion route cites the Stacks *Commutative Algebra* PDF. No judge record was carried into any new item.
- **Conventions retained:** depth is infinite for $IM=M$ and for the zero module; ordinary local depth claims state finite/nonzero hypotheses where needed; regular sequences retain their nonzero terminal quotient; localization distinguishes $M_\mathfrak p=0$; and the flat-local theorem is for flat local maps of Noetherian local rings with closed fibre, without a finite-type hypothesis.
- **Narrowed/dropped claims:** none at authoring. No catenarity conclusion, arbitrary-fibre statement, or finite-type strengthening was added.
- **Proof contracts:** `research/frontier-32-batch-9.proof-contracts.json` covers the 67 proof-bearing items; its per-step rows and all eight boundary axes reflect the written two-step proofs.
- **Checks run:** focused `precheck` on all 70 manifest paths passed (67 proof-bearing files); `content-policy` on this batch passed with 70 scoped items and no errors/warnings; `validate-plan.mjs research/plan-spec.json --repo . --max-items 60` ended `OK`; and strict `proof-contract` passed 67/67 with no errors or warnings.
- **Blockers:** none.
