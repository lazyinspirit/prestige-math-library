# Step 3a reader report — batch 46

## Scope and opened inventory

Reviewed the two assigned page carriers and all seven assigned items in
`research/advanced-qft-supersymmetry-build-2026-10-23-batch-46.pages.json`.
The A and B pages are frontmatter-only, retain `page_layout: compact-v1`, and
match their listed item/example inventories.

Assigned items, read with suppliers before consumers:

- Definitions: `def-aqft-profile-likelihood-ratio`,
  `def-aqft-calibrated-pvalue`, `def-aqft-cls-exclusion-ratio`.
- Reported experiments: `exp-aqft-atlas-global-smeft-fit-2026`,
  `exp-aqft-cms-global-smeft-fit-2026`,
  `exp-aqft-cms-multiboson-smeft-2026`,
  `exp-aqft-atlas-tau-squark-gluino-search-2025`.

Read the 11 direct item suppliers used in these claims:

- `def-cm-likelihood-function`, `def-extended-reals`,
  `lem-extended-reals-complete`, `def-borel-sigma-algebra`,
  `def-cm-statistical-test-and-size`, `def-probability-measure`,
  `def-cm-measurement-model`, `def-cm-confidence-set-and-coverage`,
  `post-aqft-smeft-model`, `def-aqft-warsaw-basis-contract`, and
  `def-sr-total-four-momentum-and-invariant-mass`.
  The imported mathematics snapshots `def-extended-reals`,
  `lem-extended-reals-complete`, `def-borel-sigma-algebra`, and
  `def-probability-measure` were treated as read-only. The other mathematical
  suppliers listed above are physics-workspace items.

Inspected frontmatter and inventory metadata for the nine page prerequisites:
`aqft-eft-matching-running`, `aqft-smeft-heft`, `aqft-eft-amplitudes`,
`qftx-susy-breaking-and-phenomenology`, `cm-math-evidence`,
`limsup-and-subsequential-limits`, `sigma-algebras-and-borel-sets`,
`measures-and-their-basic-properties`, and `sr-energy-momentum`. The four QFT
pages are draft; the other five prerequisite pages are published. The external
mathematics pages are in the root mathematics workspace.

The assigned proof contracts were read as review evidence, not verdicts. No
TikZ/tikzcd diagrams occur in the assigned carriers. The described procedures
are source-reported experimental analyses, not author-supplied proofs.

## Mathematical and source review

- `def-aqft-profile-likelihood-ratio`: the common dominating measure and
  pointwise density versions are explicit. The condition
  `0 < M_s < +infinity` makes the denominator nonzero and finite, and each
  fixed-parameter profile supremum is bounded by the global supremum. The
  `lambda=0` branch avoids taking a real logarithm at zero. The cited Cowan et
  al. paper, §2, equations (7)–(9), confirms the conditional/unconditional
  profile-likelihood ratio and upper-tail calibration convention. The definition
  does not assert a sampling distribution or coverage result.
- `def-aqft-calibrated-pvalue`: measurable upper-tail sets suffice to define the
  stated tails; the simple-null pushforward and supplied composite/asymptotic
  calibration cases are distinguished. It does not infer level control,
  super-uniformity, or a posterior probability.
- `def-aqft-cls-exclusion-ratio`: the explicit denominator condition and
  statistic ordering make the ratio well defined on its stated domain. Read
  A. L. Read, “Presentation of search results: the CLs technique,” §2 and
  §§2.1–2.2: for the source ordering by `-2 ln Q`, the CLs+b and CLb regions
  are the right-hand tails, and the ratio is a conservative
  frequentist-motivated exclusion presentation, not a probability or coverage
  level. This matches the item's convention.
- `exp-aqft-atlas-global-smeft-fit-2026`: the ATLAS primary report
  (arXiv:2604.21670v2), §§2.5–2.7, 3.2, 4, and 5.3.1, supports the input
  inventory, event-overlap treatment, likelihood assumptions, 47 fitted
  directions with 39 other directions fixed for the linear fit without
  di-Higgs data, the reported 99% compatibility p-value, and the separate
  electroweak pull. The report's source-reported p-value is not reinterpreted
  as a probability that the SM is true; the item's un-reconstructed global
  calibration limit is accurate.
- `exp-aqft-cms-global-smeft-fit-2026`: the CMS primary paper
  (arXiv:2504.02958v2), abstract, results on pp. 24 and 30, and Appendix C,
  supports the seven CMS measurement sets, 64 coefficients, 43-direction fit,
  2.5% and 27% compatibility p-values, and the inclusive-jet/PDF qualification.
  Appendix C limits its pseudoexperiment coverage study to individual
  coefficients in a simplified likelihood, excluding coefficients constrained
  only by t(t)X; it reports slight under- or over-coverage among tested cases.
  The item reports these as selected coefficient-interval checks and does not
  extend them to the separate global p-value.
- `exp-aqft-cms-multiboson-smeft-2026`: recovered the complete 32-page primary
  CMS PAS from the cited INSPIRE full-text mirror and checked its extracted text
  at §§4–8, Table 3, Table 4, and Appendix A. The source supports the 138 fb^-1
  dataset, six-coefficient bosonic fit, reported region/bin/event/nuisance
  counts, assumed Wilks thresholds, and every transcribed Table 4 interval.
  The item preserves the single-coefficient linear-plus-quadratic condition,
  source's rounded 68%/95% labels versus 68.3%/95.4% thresholds, and lack of
  independent calibration or raw-likelihood reproduction. The noted VBF-W
  reference-energy and WW final-bin differences are present in the PAS text.
  Also checked Cacciari–Salam–Soyez, §1, equations (1a)–(1b), and the FastJet
  manual, §§2, 3.2 and 3.4: the stated anti-kt distances, clustering rule,
  rapidity separation and default E-scheme four-vector sum agree with those
  sources. The item correctly leaves the CMS-specific configuration as a
  source input rather than claiming to reconstruct it.
- `exp-aqft-atlas-tau-squark-gluino-search-2025`: the ATLAS primary report
  (arXiv:2507.00296v2), §§2, 4, 8 and 9, supports the two dataset exposures,
  simplified-model mass relations and branching assumptions, local
  GG(1300,1200) p-value, asymptotic-fit validation, and strategy-specific
  observed exclusion reaches. The item identifies the p-value as local and
  limits all contours to the stated simplified spectra; it does not generalize
  them to supersymmetry as a whole.

## Page verdicts

- `aqft-eft-experimental-inference` — **Pass.** Its three definitions match
  the A-page inventory; frontmatter-only layout and page prerequisites are
  consistent with the assigned manifest.
- `aqft-eft-experimental-inference-examples` — **Pass.** Its four reported
  experiments match the B-page example inventory; frontmatter-only layout,
  companion relation, and listed prerequisites are consistent.

## Edits, remaining defects, and blockers

No confirmed defect was found in the assigned items or pages. No edits were
made, so no contract update, verification-stamp removal, reflow, precheck, or
proof-layout command was needed. No out-of-scope defect requiring an
uneditable finding was identified. There is no blocker.

## Coverage limitations

The review checked the direct supplier statements/proofs needed by the assigned
claims and inspected page metadata for the required outside pages; it did not
re-audit every transitive prerequisite of every published supplier or audit the
bodies of out-of-scope pages. The CMS PAS was text-extracted, not visually
inspected page by page. No raw detector data, component likelihoods, external
calibration files, or independent fit reproduction were available or claimed.
