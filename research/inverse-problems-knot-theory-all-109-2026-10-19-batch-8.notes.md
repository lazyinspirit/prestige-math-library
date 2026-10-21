# Batch 8 authoring notes

Run: `inverse-problems-knot-theory-all-109-2026-10-19`  
Pair: `gaussian-sequence-models-and-risk-decomposition`  
Batch level: 2; prerequisite batches: 2 and 7.  
Dispatch scheduling input: `2b2a556706a99d20fd22c6b2453f81bedde080dbc7e75f7f995373777c2fe510`.

## Inventory, dependencies, and levels

The complete IP-08 design in `research/plan-inverse-problems-track.md` gives
four A-page items and three B-page examples. The assigned page IDs, titles,
category, orders, and `requires` fields in `research/plan-spec.json` agree with
the design and task. Its generated `items: []` values were unpopulated scaffold
inventories, not a competing item list. The A page retains its five declared
page requirements; the B page retains the A page plus the orthonormal-bases and
Bochner page requirements. Both authored page files contain YAML frontmatter
only and have empty Markdown bodies.

The final in-run item levels are:

- Level 2: `def-ip-gaussian-sequence-inverse-model`.
- Level 3: `def-ip-statistical-ellipsoid-class` and
  `alg-ip-svd-truncated-estimator`.
- Level 4: `thm-ip-truncated-estimator-exact-risk`.
- Level 5: `ex-ip-polynomial-spectrum-risk-profile`,
  `ex-ip-severely-ill-posed-risk-profile`, and
  `ex-ip-zero-noise-truncated-risk-limit`.

These levels use the actual in-run supplier labels: compact model 1, isonormal
experiment 0, and white-noise spectral representation 1 make the model level 2;
the ellipsoid and estimator follow it; the theorem follows both plus the
estimator; and the B examples follow the theorem. The scoped recomputation over
the current run manifests matched all seven assigned labels and reported no
errors involving these items. Recomputing the batch graph from current manifests
still gives batch 8 level 2 with prerequisites `[2, 7]`. The recomputed current
manifest hash is `d8ce3b4315aedccc295b9b52c5e38a7fd7befd584c2dac86b8ac311a267a6102`;
the dispatch hash above is retained in the coverage file. No shared scheduling
metadata or engine state was changed.

## Plan and convention decisions

- The design's exact claim is the cutoff estimator's **expected squared
  sequence risk** over a weighted ellipsoid, with worst-case risk
  `Q^2/a_(D+1)^2 + epsilon^2 sum_(j<=D) s_j^-2` and a one-coordinate
  tail attainer. The local theorem proves this for `epsilon>0` and the
  separately defined deterministic `epsilon=0` sequence experiment. The risk
  is explicitly distinguished from deterministic error under arbitrary
  bounded perturbations of the original data.
- The design describes polynomial and exponential spectra as “mildly and
  severely ill-posed.” Ding–Mathé's operator taxonomy calls polynomial
  singular-value decay **moderately** ill-posed and exponential decay
  **severely** ill-posed; its “mild” terminology describes statistical
  minimax-rate behavior. The polynomial example therefore names the spectrum
  neutrally and records the operator-level moderate terminology. No claim
  conflates singular-value decay with statistical rate terminology.
- The plan's Clason Chapter 12 source note does not match the identifiable
  Chapter 12 source in the repository's current plan-spec references:
  Clason's *Introduction to Finite Element Methods*, arXiv:1709.08618v2,
  Chapter 12 is Galerkin methods and a priori error estimates for parabolic
  PDEs. I read the full notes and Chapter 12; its Theorems 12.1–12.4 contain no
  white-noise or statistical-risk argument. Those harvested results are marked
  `out-of-scope` with item-specific reasons in the coverage file. This source
  contributes no mathematical support. Ding–Mathé and Johnstone independently
  support the authored risk claims, so there is no unresolved theory dependency.
- Ding–Mathé assumes positive noise. The local `epsilon=0` point mass and risk
  branch are defined and proved independently; the paper is not cited as a
  zero-noise source. The imported proof route is the coordinatewise
  bias–variance identity, monotone-weight tail bound, and a truth supported on
  coordinate `D+1`.

## Supplier audit and interfaces

I read the actual supplier bodies, including statements and proofs where
present. The current batch-2 and batch-7 suppliers are drafts, not approved
content. Their exact interfaces, supplier hashes, and this pair's five
cross-batch edges are recorded in
`research/inverse-problems-knot-theory-all-109-2026-10-19-batch-8.cross-batch-dependencies.json`.
The `verified` status records this author's interface check only.

- `def-ip-compact-linear-inverse-model` (batch 2, draft): real or complex
  Hilbert spaces, compact linear map, parameter space and truth class `X`,
  exact datum `Kx`, and no injectivity, surjectivity, or closed-range premise.
  The local definition specializes to real infinite-rank operators and
  minimum-norm representatives in `N(K)^perp`.
- `def-ip-isonormal-white-noise-experiment` (batch 7, draft): a real isonormal
  process on a separable real Hilbert space, linear into `L^2`, centered, with
  covariance the inner product and independent standard-normal values on
  finite orthonormal tuples. The local experiment uses it on
  `H_0=overline{ran K}`; the fixed countable complete SVD basis makes `H_0`
  separable.
- `thm-ip-white-noise-spectral-sequence-representation` (batch 7, draft): for
  positive noise and a fixed complete orthonormal basis, the coordinates are
  independent `N(mu_j, epsilon^2)`. The local definition uses this clause only;
  it makes no `H_0`-valued observation claim and does not rely on the optional
  negative-Sobolev carrier clause. Zero noise is defined separately.
- The published compact SVD theorem supplies positive singular systems
  complete in `N(K)^perp` and `H_0`; the published complete-basis coefficient
  isometry supplies `ell^2` parameter coordinates. The definitions of complete
  orthonormal basis, square summability, and Countable Choice were read for the
  exact conventions used. The Picard criterion is not used.
- The required weak-convergence and Bochner pages were inspected as page-level
  prerequisites retained from the plan; no weak-convergence or Bochner claim
  enters this pair's statements or proofs. The orthonormal-bases page supplies
  the coefficient-space and Parseval conventions used by the model.

No supplier is absent. There are no unresolved supplier hypotheses or
cross-batch theory requests.

## Source record

The A page has two independent full-text treatments, including a complete book
manuscript. URLs, locators, supported item IDs, source fetch stamps, and the
disposition of every harvested result are in
`research/inverse-problems-knot-theory-all-109-2026-10-19-batch-8.coverage.json`.

- Ding and Mathé, “Minimax rates for statistical inverse problems under
  general source conditions,” <https://arxiv.org/pdf/1707.01706>, complete
  7-page paper. Read §1 and equations (1)–(4), Lemma 1 and its complete proof,
  Definitions 3–5 and Table 1. Supports the SVD sequence convention,
  ellipsoids, cutoff estimator, exact bias–variance risk and attainer, and the
  polynomial/moderate versus exponential/severe operator taxonomy. It assumes
  positive noise.
- Johnstone, *Gaussian estimation: Sequence and wavelet models*, 2011 draft,
  <https://mathweb.ucsd.edu/~jbradic/math281a/Johnstone.pdf>, complete
  446-page manuscript. Read §3.1 equations (3.1)–(3.4), §3.2 equations
  (3.11)–(3.12) and the full tail-maximizer derivation, and §3.8 equations
  (3.63)–(3.67). It independently supports the sequence experiment,
  ellipsoids, and cutoff risk. Its §3.2 derivation is homoscedastic; Ding–Mathé
  and the local proof cover inverse-problem heteroscedasticity. Its §3.8 starts
  with an injective formulation; the local model explicitly handles the
  minimum-norm `N(K)^perp` coordinates.
- Clason, *Introduction to Finite Element Methods*,
  <https://arxiv.org/pdf/1709.08618v2.pdf>, complete 118-page lecture notes.
  Read Chapter 12, §§29–30 and Theorems 12.1–12.4, printed/PDF pp. 102–110.
  The source was successfully fetched; its harvested results are out of scope
  for this pair because they concern parabolic Galerkin discretization and
  deterministic error estimates, not statistical inverse risk.

Retrieval history: an initial Johnstone 2019 author-hosted PDF candidate
returned HTTP 403 and the attempted CiteSeerX mirror path failed. Searching for
an accessible full treatment found Johnstone's 2011 complete manuscript above;
its relevant sections and complete risk argument were inspected. Work stopped
on that successful alternative. No declared coverage source remains unfetched,
and no unresolved-source disposition is recorded. The Clason source was
fetched successfully, so its `out-of-scope` harvest dispositions are not
retrieval-failure `source_resolution` records.

## Item checkpoints

- `def-ip-gaussian-sequence-inverse-model` — level 2. Defines the real compact
  infinite-rank SVD model, minimum-norm coefficient parameterization, the
  positive-noise measurable sequence pushforward on `R^N`, and its separate
  zero-noise point mass. Dependencies: `def-ip-compact-linear-inverse-model`,
  `def-ip-isonormal-white-noise-experiment`,
  `thm-ip-white-noise-spectral-sequence-representation`,
  `thm-singular-value-decomposition-for-compact-operators`,
  `def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis`,
  `thm-hilbert-space-with-a-given-orthonormal-basis-is-ell-two-of-the-index-set`,
  `def-square-summable-family-on-an-arbitrary-index-set`, and
  `def-countable-choice`. Countable Choice supplies the upstream SVD and
  complete-basis coefficient identification. The commutative TikZ diagram is
  explained and is not used as proof.
- `def-ip-statistical-ellipsoid-class` — level 3. Defines positive
  nondecreasing weights, radius `Q>=0`, and the weighted subset of `ell^2`; it
  expressly makes no `a_j -> infinity` or compactness claim. Dependencies:
  `def-ip-gaussian-sequence-inverse-model` and
  `def-square-summable-family-on-an-arbitrary-index-set`.
- `alg-ip-svd-truncated-estimator` — level 3. Defines a finite-support map for
  each `D in N_0`, including `D=0`. Dependency:
  `def-ip-gaussian-sequence-inverse-model`.
- `thm-ip-truncated-estimator-exact-risk` — level 4. Proves the exact
  expected-squared-risk supremum for both noise branches and exhibits the
  attaining `D+1` coordinate, including `Q=0` and `D=0`. Dependencies:
  `def-ip-gaussian-sequence-inverse-model`,
  `def-ip-statistical-ellipsoid-class`,
  `alg-ip-svd-truncated-estimator`, and `def-countable-choice`. The local
  finite-coordinate risk calculation uses no additional choice.
- `ex-ip-polynomial-spectrum-risk-profile` — level 5. Substitutes
  `s_j=j^{-p}` and `a_j=j^r`, with `p,r>0`, into the theorem; states polynomial
  operator decay in the moderate taxonomy. Dependencies:
  `def-ip-gaussian-sequence-inverse-model`,
  `def-ip-statistical-ellipsoid-class`,
  `thm-ip-truncated-estimator-exact-risk`, and `def-countable-choice`.
- `ex-ip-severely-ill-posed-risk-profile` — level 5. Substitutes
  `s_j=e^{-cj}` and `a_j=j^r`, with `c,r>0`, into the theorem. Dependencies:
  `def-ip-gaussian-sequence-inverse-model`,
  `def-ip-statistical-ellipsoid-class`,
  `thm-ip-truncated-estimator-exact-risk`, and `def-countable-choice`.
- `ex-ip-zero-noise-truncated-risk-limit` — level 5. For polynomial weights,
  the zero-noise worst-case risk tends to zero as `D` grows; for unit weights,
  it remains `Q^2` at every finite cutoff and is attained. It distinguishes
  this sequence boundary from arbitrary bounded data perturbations.
  Dependencies: `def-ip-gaussian-sequence-inverse-model`,
  `def-ip-statistical-ellipsoid-class`,
  `thm-ip-truncated-estimator-exact-risk`, and `def-countable-choice`.

The contracts contain exact supplier excerpts, every numbered step, all
standard boundary dispositions, explicit Countable Choice uses, and finite
substitution checks at `D=0` and `D=1` where applicable.

## Final scoped checks and handoff

- `source-fetch-check --stamp`: 3/3 sources fetch-verified; final rerun added
  no stamps.
- `coverage-checklist`: 1 A page, 17 harvested results, 0 errors, 0 warnings.
- `proof-contract.mjs --strict --json`: 7/7 items, 0 errors, 0 warnings.
- `proof-layout.mjs` on all seven changed items: 11 proof steps, 0 defects.
- `precheck.mts` on the theorem and three proof-bearing examples: 4 checked,
  0 failed.
- `rendercheck.mjs` on all seven changed items: 7 checked, 0 errors, 0
  warnings.
- Focused `depcheck` on the seven IDs and their prerequisite closure: 0 errors,
  0 warnings. It examined 1,305 dependency-closure items and 186 pages for
  cycles.
- `content-policy` on the batch-8 manifest: 7 assigned items, 0 errors, 0
  warnings.
- Scoped item-level recomputation: all seven dependency labels match. Current
  batch-graph recomputation confirms batch 8 level 2 and prerequisites 2, 7.

The initial finalization pass caught multiline display math and proof-phase
labels that the format/render checks correctly rejected; those were repaired,
the proof contracts and boundary evidence were updated to match the final
arguments, and the final scoped checks above pass. A/B page bodies remain empty.

The current `.autopilot/inverse-problems-knot-theory-all-109-2026-10-19`
status recomputes to `running` at `1-scaffold`, with no work in flight. It shows
12/109 construction units covered and still lists batch 8 among the uncovered
dispatch units even though this pair's draft artifacts and Step 1 records are
now present. Its active `step1-blockers.json` names unit 58 as artifact-
incomplete and no longer running; that is the reported hold. This pair did not
modify the active blocker, engine state, or owner verdicts, and did not register
a dispatch result. A read-only whole-run derived frontier-ledger aggregation
also stopped on the existing batch-15 cross-batch input (`invalid review or
consumer ownership`). The scoped check of this batch's five cross-batch rows
passed, including exact consumer ownership and supplier hashes; batch 15 was
not edited.

All seven assigned items have current, hash-closed `ready` Step 1 authoring
records. These records are author-readiness evidence only and are not
independent mathematical approval or publication.
