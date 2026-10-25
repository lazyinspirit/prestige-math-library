# Batch 46 authoring notes — EFT Measurements, Global Fits and Search Likelihoods

Run: `advanced-qft-supersymmetry-build-2026-10-23`  
Batch: `46`  
Owned pair: `aqft-eft-experimental-inference` / `aqft-eft-experimental-inference-examples`  
Category/library: `advanced-qft-and-supersymmetry` / `physics`  
A-page order: `1002`

## Plan and inventory

The complete design is section “EFT Measurements, Global Fits and Search Likelihoods” in `research/plan-advanced-qft-and-supersymmetry-track.md` (lines 639–652). Its page IDs, title, order, category, library, companion, and required pages match the current `research/plan-spec.json`; no plan/spec conflict was found. The binding owner authoring direction was followed: the two page files are YAML frontmatter only with empty bodies; no summary was authored.

The planned B-page inventory contains four source-reported experiment records: `exp-aqft-atlas-global-smeft-fit-2026`, `exp-aqft-cms-global-smeft-fit-2026`, `exp-aqft-cms-multiboson-smeft-2026`, and `exp-aqft-atlas-tau-squark-gluino-search-2025`. The A page adds three local mathematical definitions needed to state and interpret the reported likelihood procedures: `def-aqft-profile-likelihood-ratio`, `def-aqft-calibrated-pvalue`, and `def-aqft-cls-exclusion-ratio`. Each definition states domains and well-definedness conditions; none asserts a probability model’s empirical validity or a theorem without proof.

The original candidate inventory left experiment `proposed_deps` empty. After checking the dimension-six and Warsaw-basis interfaces, the three SMEFT fits now have direct item dependencies on `post-aqft-smeft-model` and `def-aqft-warsaw-basis-contract` as well as the stated statistical suppliers. These edges refine the item interface only; neither batch-27 carrier was edited and no classification or empirical result is inferred from it. The tau-search item remains conditional on the collaboration’s own simplified model and has an explicit open page-level dependency on the planned supersymmetry-breaking/phenomenology page.

## Dependency levels and inspected suppliers

Dependency levels use current in-run item suppliers and were recomputed from the current manifests:

| Item | In-run suppliers used for level | Level |
|---|---|---:|
| `def-aqft-profile-likelihood-ratio` | none | 0 |
| `def-aqft-calibrated-pvalue` | none | 0 |
| `def-aqft-cls-exclusion-ratio` | calibrated-p-value definition (0) | 1 |
| `exp-aqft-atlas-global-smeft-fit-2026` | profile likelihood (0), p-value (0), SMEFT postulate (4), Warsaw contract (5) | 6 |
| `exp-aqft-cms-global-smeft-fit-2026` | profile likelihood (0), p-value (0), SMEFT postulate (4), Warsaw contract (5) | 6 |
| `exp-aqft-cms-multiboson-smeft-2026` | profile likelihood (0), SMEFT postulate (4), Warsaw contract (5) | 6 |
| `exp-aqft-atlas-tau-squark-gluino-search-2025` | profile likelihood (0), p-value (0), CLs ratio (1) | 2 |

All three mathematical items use mathematical-only dependencies. The four empirical items use the relevant published measurement, likelihood, test, and coverage definitions from `cm-math-evidence`; the IID definition is not imported as an assumption because none of these items claims independent identical event sampling. The profile-likelihood, calibrated p-value, and CLs definitions state their own statistical limitations.

The current batch-26 `aqft-eft-matching-running` page and `def-aqft-threshold-matching-map` were inspected. The supplier is a finite input-to-output matching map and does not justify a generic continuum matching claim; no threshold calculation is asserted here. The current batch-27 `post-aqft-smeft-model` and `def-aqft-warsaw-basis-contract` statements were inspected, including the adopted three-family, B/L-conserving dimension-six conventions. `loadStep1Record` plus `step1Decision` reports both current and ready: the postulate hash is `6e20b1efc7c8b6533498520ac75f0cd7060c41b852bfc3ee25630e24cfda24ac`, and the Warsaw-contract hash is `33d9e1b67423e1ca114c41260f9a25d52e69544b3e1baf5431b374ea08fa31ac`. Draft labels were not treated as proof or as missing prerequisites. The current batch-28 scattering-channel definition was read; it is a gapped scalar forward-amplitude interface and is not used to derive any global fit or search result.

`research/advanced-qft-supersymmetry-build-2026-10-23-batch-dependency-levels.json` stores batch 46 at page-level dependency level 8, but the changed manifest bytes require a fresh derived-graph check. The current recomputation is blocked before its freshness comparison by an unrelated malformed batch-59 manifest: `research/advanced-qft-supersymmetry-build-2026-10-23-batch-59.pages.json`, page `qftx-adhm-linear-data-and-framed-monads`, has six bare string entries under `items`; `loadStep3` consequently reports `Duplicate item undefined`. Treat 8 as the stored prior scheduling level, not a fresh current-graph result; the owner must repair batch 59 and recompute the shared graph. This batch did not modify batch 59 or the shared batch-dependency file. The seven batch-46 item levels were independently recomputed against all current object-form in-run item records and match `0, 0, 1, 6, 6, 6, 2`.

## Item claims, conventions, sources, and dependencies

- `def-aqft-profile-likelihood-ratio`: defines the profile ratio and `q=-2 log(lambda)` for a dominated density family with specified pointwise density versions, nonempty parameter sets, and finite positive global likelihood supremum. It uses `def-cm-likelihood-function`, `def-extended-reals`, and `lem-extended-reals-complete`. The full Wasserman book (Chapter 9 §9.3 and Chapter 10 §10.6, printed pp. 122–124 and 164–165) and Cowan et al. (§2, equations (7)–(8)) were inspected. The definition does not claim the statistic has a particular distribution or a confidence interpretation.
- `def-aqft-calibrated-pvalue`: defines an upper-tail null-calibrated probability with measurable tails and an explicit calibration law. It says that validity, level control, and super-uniformity require separate assumptions or proofs. It uses the Borel-set, probability-measure, and test/size definitions. Wasserman Chapter 10 §10.2 (printed pp. 157–158) and Cowan et al. §2.1/§2.3 were read in full at the relevant sections.
- `def-aqft-cls-exclusion-ratio`: defines the source-oriented `CL_s=CL_{s+b}/CL_b` ratio only when `CL_b>0`, and explicitly says it is neither a probability nor an exact coverage level. A. L. Read, §2 and §§2.1–2.2, printed pp. 2694–2697, was read in full. It is a frequentist-motivated conservative exclusion presentation, not a posterior probability.
- `exp-aqft-atlas-global-smeft-fit-2026`: reports the ATLAS 13 TeV Run 2 Higgs/STXS, di-Higgs, diboson, VBF-Zjj, high-mass Drell–Yan and top inputs plus LEP/SLD/ATLAS electroweak observables, input-specific luminosities of roughly 36–140 fb⁻¹, and the source’s 48-direction dimension-six fit. It preserves the reported 99% compatibility p-value alongside the electroweak direction pulled by the known `A_FB^{b,c}` discrepancy. The article’s dimension-six-squared truncation is not called a complete order-`Lambda^-4` prediction. Full arXiv v2: `https://arxiv.org/pdf/2604.21670v2`, §§2.5–2.7, 3.1–3.2, 4, 5.3–5.4.
- `exp-aqft-cms-global-smeft-fit-2026`: reports seven CMS input sets at 13 TeV and 36.3 or 138 fb⁻¹ plus electroweak precision data; 64 individual coefficients and the 43-direction fit; the 2.5% compatibility p-value rising to 27% without inclusive jets; inclusive-jet and PDF sensitivity; and the separate linear versus quadratic parameterizations and pseudoexperiment coverage qualifications. Full arXiv v2: `https://arxiv.org/pdf/2504.02958v2`, input/parameterization sections, likelihood/correlation sections, results, and appendix coverage study.
- `exp-aqft-cms-multiboson-smeft-2026`: deliberately records only the official summary page’s accessible claims: 13 TeV 2016–2018, 138 fb⁻¹, ten named VBS/VBF/diboson/triboson measurements, the six CP-even bosonic operators, event-by-event LO-MC detector-level reweighting, binned profile likelihood, and “no significant deviations.” It does not copy numeric intervals or invent unavailable selections, calibration, correlations, or uncertainties. Official page: `https://cms-results.web.cern.ch/cms-results/public-results/preliminary-results/SMP-25-002/`.
- `exp-aqft-atlas-tau-squark-gluino-search-2025`: reports 140 fb⁻¹ at 13 TeV plus 51.8 fb⁻¹ at 13.6 TeV, the exact three tau/lepton channels and trigger/efficiency qualifications, the source’s R-parity-conserving simplified spectra and midpoint mass relations, two independent fit strategies, nuisance/correlation and asymptotic-validation treatment, local `p=0.00058 (Z=3.2)` at the named benchmark, and strategy-specific observed contours. It does not generalize these to all SUSY models. The full Springer article was read across §§2–9. Springer’s full-text HTML fetch later returned a cookie interstitial; its linked arXiv v2 HTML is the verified source URL `https://arxiv.org/html/2507.00296v2`, and its metadata confirms the same published EPJC 85 (2025) 1437 article and DOI.

The detailed per-source reading extents, item support, limitations, and dispositions are in `research/advanced-qft-supersymmetry-build-2026-10-23-batch-46.coverage.json`. The coverage contains eight source records (seven distinct URLs), including the textbook treatment of p-value interpretation on both pages. All eight records are fetch-verified. No source was marked dropped.

## Source-resolution and page-level escalation

`research/advanced-qft-supersymmetry-build-2026-10-23-batch-46.source-resolution.json` records an owner escalation for the full CMS-PAS-SMP-25-002 PDF. Five retrieval attempts are documented (one earlier source-note attempt plus four current retrieval methods), and four alternative searches found no accessible full report; the earlier query strings were not retained, so they are explicitly identified as such rather than reconstructed. The accessible CMS result page supports only the limited summary item. The full PDF, detailed selections and calibrations, nuisance correlations, detailed test calibration, and numeric observed/expected coefficient intervals remain unresolved. No numerical search-snippet limits were copied; this is an empirical-source gap with no mathematical substitute.

The required batch-34 page-level supplier `qftx-susy-breaking-and-phenomenology` is also genuinely absent: current batch-34 manifest rows have empty A and B item inventories, and neither page carrier file exists. `loadStep1Record` plus `step1Decision` confirmed that the four planned batch-34 item readiness records are missing; the carrier absence/empty inventory, rather than draft status or missing independent approval, is the prerequisite gap. The planned page scope is to derive selected F-term breaking/vacuum energy and distinguish model-specific collider limits from framework-wide claims. No planned item is treated as an authored or proved supplier. Exact page edge remains `open` in `batch-46.cross-batch-dependencies.json`; the ATLAS tau report is source-conditional and makes no vacuum or framework-wide claim.

The cross-batch file has one row per scoped edge: the batch-26 matching page, batch-27 SMEFT page, and batch-28 amplitudes page are `verified` as scoped interface checks; the batch-34 page is `open`; and the three SMEFT consumer items have verified edges to the current batch-27 model postulate and Warsaw contract. A `verified` row is an interface check, not independent proof approval.

## Scoped checks and current next action

- `source-fetch-check --stamp`: 8/8 source records fetch-verified and resolved; the CMS PAS PDF is separately documented as an owner escalation because it is not in the accessible source coverage.
- `coverage-checklist`: 2 pages, 13 harvested results, 0 errors, 0 warnings.
- `content-policy`: 7 items, 0 errors, 0 warnings.
- `depcheck`: focused checks for 7 items and prerequisite cycle checks over 3037 items / 451 pages passed.
- `rendercheck`: 9 changed files passed actual KaTeX and frontmatter parsing; no invalid or multiline math.
- `proof-layout`: 7 items, 0 proof steps (all records are definitions or experiments), 0 defects.
- `precheck`: 4 experiments checked as nonproof structure, 0 failures; definitions are nonproof definitions.
- `proof-contract --strict`: 7/7 contracts checked, 0 errors, 0 warnings.
- The run-wide statement-first tool stops on batch 34’s empty item inventory. A separate scoped scan of all seven assigned item statements and both empty-body page files found 0 in-statement hyperlinks or page bodies.
- The run-level `batch-dependency-levels check` is blocked by batch 59’s six bare string item rows described above. No shared graph/manifest was changed to bypass that error.

Native Step 1 readiness records were written with `node tools/physics-support/step1-decisions.mjs record` and without `--owner`, in supplier order. A final `loadStep1Record` / `step1Decision` read confirms the five ready rows below are current and hash-closed. Both owner escalations remain explicit and were not overwritten:

| Item | Final Step 1 decision | Current hash / exact unresolved input |
|---|---|---|
| `def-aqft-profile-likelihood-ratio` | ready | `f9e6be2b92ecdc8d6cf36e5babf285517e753e763904e6288f95189592b0444e` |
| `def-aqft-calibrated-pvalue` | ready | `7c2bf6de6394562ecb137ca5b1dd7fa5bc9fe6b8a3a93325625058f48ff572ea` |
| `def-aqft-cls-exclusion-ratio` | ready | `0cfcc9b7003484cfaf217bf92e2a198257f4b95a490723892e967601893ebb51` |
| `exp-aqft-atlas-global-smeft-fit-2026` | ready | `aa2d537586f80470c8612193b29ab9e9bbf9998e5c65eedf75b6b4a1a7ab03b0` |
| `exp-aqft-cms-global-smeft-fit-2026` | ready | `2a075cdf4ff71ec4e5d926118e809fa5cd752a1b8bdc1a8a6b90af0923ae860d` |
| `exp-aqft-cms-multiboson-smeft-2026` | escalated | `4bad3d7f37c5b0d8fedee33608fdd818bd216b4419615d199070a952c6d39b98`; full PAS SMP-25-002 remains inaccessible |
| `exp-aqft-atlas-tau-squark-gluino-search-2025` | escalated | `664217aebce51cd72aae84f39403338f14202f4896188e4d8362f5737c3cf4da`; required batch-34 page carrier remains absent |

These readiness records document authoring status and input freshness only; they are not independent proof or publication approvals.


## Owner source recovery: CMS PAS SMP-25-002 (23 October 2026)

The earlier summary-only CMS record and source escalation above describe the historical authoring state. A bounded two-cycle source recovery has now retrieved the actual same 32-page primary PAS from the full-text URL indexed by INSPIRE record 3185630: `https://inspirehep.net/files/e9aa001bdef81c4b728fdafbdc261122`. Its metadata identifies the original CDS 2967655 file `SMP-25-002-pas.pdf`; the cover identifies CMS PAS SMP-25-002, the correct full title, CMS Collaboration and date 2026/07/30. Actual body: 1,039,362 bytes, application/pdf, %PDF magic, SHA256 `999b7b1f31431226f76db30003264d117e4d8195900c11b59b2fc70b200d0a91`. A genuine successful `source-fetch-check --stamp` generated the PDF stamp at 2026-10-23T12:54:11.311Z, 32 pages; all 9 current coverage sources pass fetch-check. No manual stamp was substituted.

Only `exp-aqft-cms-multiboson-smeft-2026` and its batch-46 metadata/coverage/contract/source-resolution entry are scientifically repaired. It now reports the PAS detector and input categories, selected explicit cuts and controls, LO detector-level reweighting and source closure checks, Poisson/auxiliary-constraint profile likelihood, Wilks thresholds, 562-nuisance uncertainty/correlation treatment, and all Table-4 expected/observed single-coefficient intervals. The table and statistical-threshold page were visually checked. The PAS sections and appendices are harvested explicitly; plots were not digitized, original component/calibration papers were not claimed read, and no raw likelihood/data were audited. The recovery directory preserves the original item/manifest/contract/coverage/notes/source-resolution/native escalation preimages and all old attempts/searches, with raw full PDF, extracted text, identity, retrieval and check evidence.

Source qualifications remain explicit: the assumed one-dimensional q thresholds 1/4 correspond to 68.3%/95.4% in §5 despite rounded 68%/95% table labels; Table 2's VBF-W reference [18] is an 8 TeV paper despite the stated 13 TeV Run-2 combination; Table 3 prints a 1250 GeV last WW bin edge while Appendix A uses infinity. No implementation choice or empirical precision is invented to repair those source inconsistencies. The item is a faithful source-reported preliminary fit, not an independent fit reproduction or proof of the SMEFT.

The item deps/roles remain unchanged. No other item file refers to this experiment ID, so there is no direct or indirect empirical-result consumer to repair; page inventory references do not infer empirical conclusions. Current native read-only checks show the in-run profile-likelihood definition, SMEFT postulate and Warsaw contract closed/current. The three generic statistics suppliers remain external published imports. The separate batch-34 phenomenology page obligation and ATLAS tau experiment are untouched. No native readiness row or owner acceptance was written; the preserved CMS row remains escalated pending Root's actual source review and recertification.

Focused checks: experiment strict contract, actual KaTeX/frontmatter rendering, nonproof precheck, batch-46 content policy and fetch-check pass. Correctly invoked coverage-checklist reports 2 pages, 29 harvested headings, 0 errors and one low-yield warning: many full-PAS headings are absorbed inline into one experiment, rather than fabricated as separate claims. The earlier unsupported extra-manifest argument was corrected and its diagnostic retained as execution history. No whole-run gate, shared graph/state/plan/import write, or change to active batch 34 was performed.
