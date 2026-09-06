# Frontier 32 / beta / batch 3 — scaffold notes

## Authority, scope, and plan comparison

Only this note, `frontier-32-batch-3.pages.json`, and
`frontier-32-batch-3.coverage.json` were edited. No plan structure, workflow
state, published item, or other batch artifact was changed.

The controlling design is MT-20, `Radon Measures and the
Riesz--Markov--Kakutani Theorem`, in
`research/plan-measure-theory-track.md` at line 3581 and its contiguous
examples/counterexamples discussion. `research/plan-spec.json` agrees on the
A order `288.039`, the A/B ids, category, title, and the A page's two declared
requirements:

- `absolute-continuity-and-the-sharp-fundamental-theorem-of-calculus-examples`
- `partitions-of-unity-and-paracompactness`

The design also enumerates a wider mathematical closure (MT-3, MT-4, MT-8,
MT-12, MT-15, compactness, Urysohn, Euclidean topology, and countability).
That is not an order disagreement, but it is more extensive than the two
`plan-spec` requirement edges. This batch does not adjudicate it: it follows
the spec and explicitly scaffolds the missing local cutoff, local partition,
ordinal, and regularity intermediates. The recorded alpha drift adds the
partitions-of-unity page and records no unresolved design-versus-spec drift.

There are 35 A items and 7 B items, so the A page is below the 60-item split
threshold. The B page depends on A only; no A item depends on B.

## Sources read and source support

| Treatment | Exact source and locator read | What it supports |
| --- | --- | --- |
| Primary textbook | Donald L. Cohn, *Measure Theory*, 2nd ed., <https://math.bme.hu/~pitrik/2023_24_2/Measure_Cohn.pdf>; contents PDF p. 12; Ch. 7 §§7.1--7.4, PDF pp. 199--228 / printed pp. 182--211 | The LCH cutoffs and support decomposition; the exact outer-content construction; positive RMK; C_0 duality and real positive decomposition; density, Lusin, and the ordinal exercise. Its `regular` means this page's weak Radon convention. |
| Independent lecture notes | Stanford Math 205A, *Lecture Supplement #4: Borel Regular and Radon Measures*, <https://web.stanford.edu/class/math205a/radon-13.pdf>; whole §2, PDF pp. 2--7 / supplement pp. 5--15, through Theorem 2.14 | Independent check of the supported LCH cutoff and finite partition, Radon convention, sigma-compact-open regularity, C_c density, and positive functional construction. |
| Focused counterexample treatment | Directorate of Distance Education, *Real Analysis Block 2*, <https://cdoe.nbu.ac.in/doc/slm/SEM2/PG/Mathematics/MSC-Maths-Sem-II-DEMATH2SCORE%201-Real%20Analysis-Block%202.pdf>; PDF pp. 49--50 / note pp. 50--51, the three named regularity-counterexample headings | The outer-regularised locally finite wedge-space measure: weak inner regularity on opens but failure of strong compact inner regularity on the axis. It attributes the starting wedge example to Bourbaki (2004, Ch. IV, §1, Ex. 5). This is additional support for the one false statement, not the pair's primary backing. |

All three were fetched as full PDFs through the reader on 2026-09-06 (Cohn:
466 PDF pages; Stanford: 8; Directorate: 200). The coverage artifact records
65 source-owned section/result headings, every one with an item disposition or
a specific out-of-scope reason. In particular it retains Cohn Exercise 7.2.7,
the bounded C_0 route, the C_c density and Lusin results, and the separate
wedge-space regularity warning rather than hiding any under a generic source
citation.

`node tools/source-fetch-check.mjs --coverage research/frontier-32-batch-3.coverage.json --stamp --timeout-sec 90` was also run on 2026-09-06. Node's
full-body fetch failed for all three live URLs with sandbox DNS
`EAI_AGAIN`, before an HTTP request could be made. No dead URL was inferred,
no unverified alternate was substituted, and no synthetic fetch stamp was
written. This is a remaining mechanical source-stamp gate limitation; the
reader-visible full-text verification above is the evidence actually obtained.

## Conventions and proof route

- `C_c(X)` means continuous compactly supported functions on an LCH space;
  `C_0(X)` means functions vanishing at infinity. Positive functionals on
  `C_c(X)` are real-linear first; the bounded complex theorem is a separate
  C_0 result.
- `f prec U` means `f in C_c(X)`, `0 <= f <= 1`, and `supp(f) subset U`.
- **Radon** here means finite on compact sets, outer regular on all Borel sets,
  and inner regular on open sets. **Regular Borel** is deliberately stronger:
  inner regular on every Borel set. A regular complex measure is defined by
  regularity of total variation. Cohn calls the first convention `regular`;
  this translation must remain visible when authoring.
- The positive RMK route is exactly the design's seven-stage route: define
  `rho(U)=sup Lambda(f)` over `f prec U` and outer-regularise; prove an outer
  measure; prove opens Caratheodory; prove compact finiteness/formula; prove
  open inner regularity; prove the integration identity with the finite
  support-controlled partition hard step; prove uniqueness only among Radon
  measures.
- The bounded endpoint is: positive bounded C_0 functional -> finite regular
  representing measure; bounded real functional -> difference of positives;
  real/imaginary assembly -> unique regular complex measure with least bound
  `|mu|(X)`.
- The ordinal route uses the club measure on `omega_1`, eventual constancy on
  `[0,omega_1]`, and comparison with `delta_{omega_1}`. The published
  countable-ordinal boundedness theorem carries its countable-choice scope;
  the new ordinal items must preserve it.

## Item and dependency ledger

The manifest gives each item its complete proposed proof strategy and explicit
`deps` array. This index records the exact planned claim boundary and the
dependency rationale needed at authoring.

| Item | Planned claim / proof responsibility | Direct proposed dependencies |
| --- | --- | --- |
| `def-compact-support-c-c-and-c-zero-on-an-lch-space` | Define support, C_c, and C_0 with real/complex roles. | LCH, Hausdorff, compact definitions |
| `def-cutoff-relation-f-prec-u` | Define the admissible RMK cutoff relation. | C_c/C_0 definition |
| `def-positive-linear-functional-on-c-c` | Define positivity on real C_c. | C_c/C_0 definition |
| `def-radon-measure-on-an-lch-space` | Fix weak-Radon convention. | Borel, measure, compact definitions |
| `def-regular-borel-measure-on-an-lch-space` | Define strong all-Borel regularity. | Radon definition |
| `def-regular-complex-borel-measure-on-an-lch-space` | Define via total variation. | Strong regularity, complex measure, total variation |
| `lem-positive-linear-functionals-on-c-c-are-monotone` | Positivity implies order monotonicity. | Positive functional definition |
| `lem-lch-urysohn-cutoff-for-a-compact-set-inside-an-open-set` | Obtain `chi_K <= f <= chi_U` in C_c. | Compact-closure basis; Urysohn; C_c |
| `lem-finite-lch-partition-of-unity-near-a-compact-set` | Finite nonnegative supported partition near K. | Cutoffs; published compact partition |
| `lem-rmk-functional-outer-content-is-well-defined` | Define rho and mu-star and prove agreement on opens. | Cutoffs, positivity/monotonicity, local partition |
| `thm-rmk-functional-outer-content-is-an-outer-measure` | Prove the three outer-measure axioms. | Outer-content lemma; local partition |
| `thm-rmk-open-sets-are-caratheodory-measurable` | Open Caratheodory measurability and Borel inclusion. | Outer measure; cutoffs; Caratheodory theorem |
| `lem-rmk-compact-set-formula-and-local-finiteness` | Compact infimum formula and finite compact mass. | Open measurability; outer content; cutoff |
| `thm-rmk-representing-measure-is-inner-regular-on-open-sets` | Open compact approximation and weak Radon conclusion. | Open measurability; compact formula; Radon definition |
| `thm-rmk-positive-functional-is-integration-against-its-representing-measure` | Both integral inequalities and equality on C_c. | Open inner regularity; compact formula; partition; Caratheodory |
| `thm-rmk-uniqueness-among-radon-measures` | Uniqueness only in the Radon class. | Positive theorem; Radon; cutoff |
| `thm-locally-finite-borel-measures-are-regular-when-open-sets-are-sigma-compact` | Strong regularity under the stated topological hypothesis. | Both regularity definitions; C_c/C_0 |
| `cor-second-countable-lch-locally-finite-borel-measures-are-regular` | Apply the countable-base compact exhaustion. | Prior theorem; second countability; compact-closure basis |
| `thm-lebesgue-measure-is-a-radon-measure-on-rn` | Reconcile existing Euclidean regularity with this convention. | R^n LCH; finite-on-bounded; Euclidean regularity |
| `prop-lebesgue-stieltjes-and-lch-radon-conventions-agree-on-r` | Reconcile R Stieltjes and LCH formulations. | Radon definition; existing Stieltjes existence/regularity |
| `thm-lusin-theorem-for-radon-measures` | Finite-set Lusin theorem on an LCH Radon space. | Radon; local partition |
| `thm-c-c-is-dense-in-l-p-for-radon-measures` | C_c dense for `1 <= p < infinity`, not L-infinity. | Radon; C_c; cutoff; simple Lp density; Lp definition |
| `lem-positive-c-zero-functionals-have-finite-regular-representing-measures` | Positive bounded C_0 functionals give finite regular measures. | C_c/C_0; strong regularity; positive RMK |
| `lem-bounded-real-c-zero-functional-is-a-difference-of-positive-functionals` | The required lattice decomposition. | C_c/C_0; preceding positive C_0 lemma |
| `thm-bounded-c-zero-functionals-are-regular-complex-measure-integrals` | Complex C_0 duality and exact norm. | Complex regularity; the two C_0 lemmas; variation; complex integration |
| `lem-countable-intersections-of-club-subsets-of-omega-one-are-club` | Club-intersection ordinal intermediate. | omega_1, order topology, countable boundedness |
| `thm-dieudonne-club-set-function-is-a-borel-measure` | Establish the Borel 0/1 club measure. | Club lemma; Borel and measure definitions |
| `lem-continuous-functions-on-omega-one-plus-one-are-eventually-constant` | Terminal constancy on the compact ordinal interval. | omega_1, order topology, countable boundedness |
| `lem-dieudonne-measure-and-top-dirac-agree-on-continuous-functions` | Continuous integral equality with top-point Dirac. | Dieudonne measure; eventual constancy; Dirac |
| `fs-every-borel-measure-on-an-lch-space-is-radon` | Refute with the ordinal Borel measure. | Dieudonne; ordinal compactness; Radon definition |
| `fs-rmk-representing-measure-is-unique-among-all-borel-measures` | Refute unqualified uniqueness by Dieudonne versus top Dirac. | Radon uniqueness; continuous-integral lemma |
| `fs-positive-linear-functionals-on-c-c-are-uniformly-bounded` | Refute with Lebesgue integral and expanding cutoffs. | Lebesgue Radon; cutoff; positivity |
| `fs-inner-regularity-on-open-sets-implies-inner-regularity-on-all-borel-sets` | Refute with outer-regularised wedge measure and axis. | Radon and strong-regularity definitions |
| `fs-every-finite-borel-measure-on-a-compact-hausdorff-space-is-regular` | Refute with finite Dieudonne measure. | Dieudonne; ordinal compactness; strong regularity |
| `fs-c-c-is-dense-in-l-infinity-for-radon-measures` | Refute with `1` on R under Lebesgue measure. | Lebesgue Radon; finite-p density; C_c |
| `ex-riemann-integral-functional-is-represented-by-interval-lebesgue-measure` | Calculate the compact-interval representation. | Positive RMK; Lebesgue Radon; existing Riemann facts |
| `ex-point-evaluation-functional-is-represented-by-a-dirac-measure` | Calculate evaluation as Dirac integration. | Positive RMK; Dirac definition/integration |
| `ex-locally-integrable-density-functional-is-represented-by-g-dlambda` | Identify `g dlambda` for nonnegative locally integrable g. | Positive RMK; local integrability; density measure; Lebesgue Radon |
| `ex-lebesgue-stieltjes-functional-is-represented-by-its-stieltjes-measure` | Identify the Stieltjes functional. | Positive RMK; Stieltjes existence; convention proposition |
| `ex-counting-functional-on-a-discrete-lch-space` | Identify finite-support summation with counting measure. | Positive RMK; counting definition/measure/series |
| `cex-dieudonne-borel-measure-on-omega-one-plus-one-is-not-regular` | Work the finite nonregular ordinal witness. | Dieudonne; ordinal compactness; finite-compact-Hausdorff FS |
| `cex-distinct-borel-measures-can-represent-the-same-c-c-functional` | Work equal C_c integrals with unequal Borel measures. | Dirac comparison; unqualified uniqueness FS; ordinal cex |

## Known limits and authoring obligations

- Retain both directions of the positive representation proof. The upper
  integral inequality needs the finite LCH partition; it may not be replaced
  by a claim that Urysohn alone settles the approximation.
- Keep `C_c` and `C_0` separate. A positive C_c functional is generally not
  globally sup-norm bounded; a C_0 functional is. Likewise, the density result
  stops at finite p.
- Do not strengthen weak Radon to strong all-Borel regularity without the
  sigma-compact-open/finite hypotheses. The wedge false statement is the
  explicit warning, while Dieudonne is a separate non-Radon compact-space
  warning.
- The ordinal proof must state its countable-choice qualification and must
  prove eventual constancy before claiming equality of continuous integrals.
- The LCH cutoff and every downstream RMK claim that uses it inherit
  Dependent Choice from the published `thm-urysohn-lemma`; insofar as the
  published `cor-compact-hausdorff-partitions-of-unity` is invoked, its stated
  Choice plus Dependent Choice ledger also applies. The direct finite
  normalization in the scaffold may avoid importing more choice than it uses,
  but authoring must say which route is taken and may not present the
  Urysohn-dependent construction as a ZF proof.
- The published `rem-riesz-markov-kakutani` was inspected and is retained only
  as orientation. It is not silently duplicated; this scaffold supplies the
  actual theorem route under the design's conventions.
- The source-fetch stamp failure above remains unresolved. If the Node network
  becomes available, rerun the stamped fetch before authoring; do not alter
  source URLs or remove a harvested result just to clear that gate.

## Pre-fix validation checkpoint

- `node -e "JSON.parse(require('fs').readFileSync('research/frontier-32-batch-3.pages.json')); ..."` — manifest JSON parsed; A has 35 items and B has 7.
- `node tools/manifest-deps.mjs research/frontier-32-batch-3.pages.json` — 42 items, 0 normalizations, 0 errors.
- `node tools/content-policy.mjs research/frontier-32-batch-3.pages.json --manifest-only` — 42 scoped items, 0 errors, 0 warnings.
- `node tools/coverage-checklist.mjs research/frontier-32-batch-3.coverage.json --require-destination` — 1 A page, 65 harvested results, 0 errors, 0 warnings.
- `node tools/validate-plan.mjs research/plan-spec.json` — completed with `OK — declared page order is acyclic and consistent`; it validates the current plan structure without splicing this task-authorised manifest into `plan-spec.json`.
- `node tools/source-fetch-check.mjs --coverage research/frontier-32-batch-3.coverage.json --stamp --timeout-sec 90` — 0/3 stamped; all failed with `EAI_AGAIN` before HTTP, as recorded above.

Next action for a writing stage is to reread the named source passages and the
relevant on-disk dependency statements before authoring each item, beginning
with the five definitions and the two LCH support lemmas. No source, proof, or
dependency obligation is marked complete merely because this scaffold exists.

## Step-3 fix pass

- Finding `frontier-32-alpha-b-step3-verdicts.json[0].missing[0]` — **applied**.
  The review found the design-required functional-analysis receipt absent. The
  exact controlling text is MT-20,
  `research/plan-measure-theory-track.md:3647-3651`: FA-9 cites positive RMK,
  FA-18 the compact/$C_0$ form, and FA-20 the complex-measure form, while
  MT-20 remains the sole mathematical supplier. The independently read
  destination contracts agree: FA-9 names MT-20 for its
  probability-measure/extreme-point application at
  `research/plan-functional-analysis-track.md:752-800`; FA-18 names MT-20 as
  its planned predecessor at `:1324-1418`; and FA-20 says that it obtains its
  scalar and complex measures from positive functionals via MT-20 at
  `:1476-1527`. Changed scaffold record:
  `rem-rmk-functional-analysis-uses` (remark; `deps: []`) in the A-page
  `items` array, immediately after the bounded complex $C_0$ theorem. It is
  explicitly orientation-only, so it neither duplicates an FA theorem nor
  creates a load-bearing cross-page dependency.

- Source URL repair — the Directorate course notes' former Internet Archive
  record returned an internal error to the current full-text reader, but its
  `original_url` is now a live 200-page PDF. I fetched and read the exact
  claimed range at PDF pp. 49--50 / note pp. 50--51: the headings “Inner
  regular measures that are not outer regular”, “Outer regular measures that
  are not inner regular”, and “Measures that are neither inner nor outer
  regular” occur there; the wedge outer-regularisation and ordinal passages
  match the existing three dispositions. The coverage record now cites that
  live original URL, keeps `original_url` as provenance, and retains every
  harvested result and its disposition. Cohn’s full 466-page PDF and the
  eight-page Stanford supplement were also fetched and re-read at their listed
  ranges; their records are unchanged.

Validation on the repaired current bytes:

- `node tools/manifest-deps.mjs research/frontier-32-batch-3.pages.json` —
  43 items, 0 normalizations, 0 errors; in particular the new remark carries
  the explicit empty dependency array required of every manifest item.
- `node tools/coverage-checklist.mjs research/frontier-32-batch-3.coverage.json
  --require-destination` — 1 A page, 65 harvested results, 0 errors, 0
  warnings; no source heading or disposition was removed by the URL repair.
- `node tools/content-policy.mjs --manifest-only
  research/frontier-32-batch-*.pages.json` — 671 scoped items, 0 errors, 0
  warnings (whole-run manifest-only policy).
- `node tools/source-fetch-check.mjs --coverage
  research/frontier-32-batch-3.coverage.json` — 3/3 sources fetch-verified.
- `node tools/validate-plan.mjs research/plan-spec.json` — `OK — declared
  page order is acyclic and consistent`; the run-wide pre-existing
  redundant-prerequisite diagnostics were informational and did not alter this
  batch or plan structure.

Next action: the new remark requires no mathematical proof; a later author
should preserve its orientation-only boundary and reread the three named FA
contracts before writing it.

## Step-5 authoring

Authored all 43 planned draft items and both planned draft pages:

- A: the six definitions, the RMK cutoff/content/outer-measure/Carathéodory/
  compactness/representation/uniqueness route, regularity, Lusin, $L^p$
  density, bounded $C_0$ route, the required orientation-only
  `rem-rmk-functional-analysis-uses`, ordinal intermediates, and six false
  statements.
- B: five positive representation examples and the two ordinal
  counterexamples.

The statements are literature-derived from the Cohn Chapter 7 route recorded
above (and the Directorate wedge source for the open-inner-versus-all-Borel
regularity counterexample); local arguments are marked `ai-altered`. All new
items and pages remain `status: draft`; no `verification.judge` record was
created. The weak-Radon convention, the strong all-Borel convention, the
Radon-only uniqueness qualifier, $1\le p<\infty$, and the ordinal
countable-choice qualification were retained. No planned claim was narrowed
or dropped.

Checks run on the authored bytes:

- Explicit-path `precheck` for all 43 manifest item paths: 36 proof-bearing
  files passed; definitions and the orientation remark have no proof phase.
- `node tools/validate-plan.mjs research/plan-spec.json`: passed (the
  repository's existing redundant-prerequisite diagnostics are informational).
- `node tools/content-policy.mjs research/frontier-32-batch-3.pages.json`:
  43 scoped items, 0 errors, 0 warnings.
- `node tools/proof-contract.mjs research/frontier-32-batch-3.proof-contracts.json --strict`:
  36/36 proof-bearing items checked, 0 errors, 0 warnings.

Blockers: none.
