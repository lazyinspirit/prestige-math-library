# Step 5A Alpha group a — authored-content review (batches 1 and 5)

Run: `phase-2-next-20`. Group `a` covers batch 1 (weak mixing and the Chacon
transformation, plan orders 288.0423/288.0424; 24 items, two pages) and batch 5
(FR-4K Kolmogorov divergence and FR-4C Carleson–Hunt, plan orders 288.140165+; 27
items, four pages). All 51 items and six pages received one
decision with obligation `authored:<batch>:<id>` in
`research/phase-2-next-20-alpha-a-5a-decisions.json`.

Method: each item and page was read on disk at the post-splice authored state; proof
steps, cited hypotheses (published and in-batch), boundary cases and the declared AC
uses were checked against the actual dependency texts. HIGH/CRITICAL items additionally
recorded a `risk_review` disposition in their owning batch contract during this same
read (21 + 21 items; `risk-report --require-reviewed` now exits 0 for both batch
contracts). This is direct group adjudication, not an independent judge, a publication
stamp, or a repeat of the Step-3 scope/source audit. No shared-plan splice, pair, page
order or manifest inventory changed.

## Verdicts

- **Accepted: 53 obligations** (49 items, four pages). `defect_ids: []`.
- **Repaired: 4** — one batch-5 item and three page-prose records, listed below.
- **Escalated: 0.** No item or page is left with unresolved mathematics, so no owner
  decision is requested by this group. `check-escalations` reports no owner escalations.
- **Withdrawn: 0** (nothing proposed for withdrawal, so nothing to preserve for 5B).
- **New items/pages: 0.** Every declared dependency of every reviewed item exists as a
  current item file and states the fact its consumer cites; no local supplier was needed.

## Batch 1 — weak mixing and the Chacon transformation

Page `weak-mixing-and-the-chacon-transformation` (21 items) and its companion
`weak-mixing-and-the-chacon-transformation-examples` (3 items) were read item by item.

- Hilbert-space block: `lem-closed-l-two-subspaces-have-orthogonal-projections`
  (parallelogram step with `(g_n+g_m)/2`, closedness, `(f-g)⊥M` via real `t` and the
  substitution `h↦ih`, uniqueness and contraction); `lem-hilbert-cesaro-averages…`
  (closed range, `V=U^{-1}P_R` with `VU=I` without surjectivity, `M^⊥=F`, the single
  approximant `A_N(I-U)g=(g-U^Ng)/N`); the kernel chain
  `lem-product-rectangle-kernels…` → `lem-square-integrable-kernels…` →
  `lem-conjugate-transpose-kernels…` → `lem-invariant-square-integrable-kernel…` →
  `lem-nonzero-compact-kernel-operators…` →
  `lem-nonzero-positive-compact-self-adjoint-operators…` →
  `lem-compact-intertwiners…` → `lem-nonzero-finite-dimensional…`.
  Checked: product-null well-definedness, finite-rank compactness plus the nested
  diagonal argument with the `2B2^{-m}` split, injectivity of `k↦K` by rectangle
  testing, `K1=K^*1=0` forcing invariance of `H_0` with nonzero restriction, positivity
  `⟨Sf,f⟩=‖Kf‖²`, the `‖Sx_n−αx_n‖²≤α(α−q(x_n))` maximizing-sequence step, and the
  algebraic-closure supply for the finite-dimensional eigenvector.
- `thm-weak-mixing-is-equivalent-to-absence-of-nonconstant-eigenfunctions`: read all
  three implications and the density-zero reformulation. Checked the credential use of
  `prop-mixing-correlations-extend-to-l-two`, `def-strong-and-weak-mixing` and
  `thm-ergodicity-and-invariant-functions` (statements read at the consumed clause);
  the product-kernel step (center a fixed kernel, test the dense rectangle family,
  ergodicity makes `K1,K^*1` constant with means zero by Fubini); the
  `⟨W^nF,G⟩=|⟨U^nf_0,g⟩|²` computation; and the finite Cauchy–Schwarz conversion
  `N^{-1}Σb_n ≤ (N^{-1}Σb_n²)^{1/2}`. Invertibility is never assumed. No defect.
- Chacon block: reconstructed stages 0–2 of
  `def-chacon-three-cut-one-spacer-towers` (heights 1,4,13; widths 2/3,2/9,2/27;
  spacers taken from the left of the reservoir with the new-level width; the physical
  partition of `[0,1)`); verified the two return times `T^{h_r}:J^{(0)}→J^{(1)}` and
  `T^{h_r+1}:J^{(1)}→J^{(2)}` from the explicit block order and the spacer. Checked
  `lem-chacon-partial-maps…` (monotone `D_r,E_r` with complements `3^{-r}`, the null
  wandering-set recursion and two-sided invariance of `X_0`), `lem-chacon-levels…`
  (endpoint counting with at most `2q` incident atoms and reservoir `3^{-(r+1)}`;
  the high-density level; the `δ≥1` case closes either trivially or with
  `η<μ(E)/2`), `thm-chacon-transformation-is-ergodic` (equal level densities by
  transport, `μ(E∩C_r)>(1−δ)μ(C_r)`, `μ(E)=1`), `lem-chacon-eigenfunctions-are-constant`
  (finite circle cover, level of density `>1−δ`, the two consecutive return times forcing
  `|λ−1|<4ε`), and `lem-chacon-tower-height-correlations-obstruct-mixing`
  (`Q^{(0)}⊆Q∩T^{−h_r}Q`, the fixed set `[0,2/9)` with `2/27>4/81`, and the general
  `liminf ≥ μ(E)/3` with the explicit `(7/3)η_r` loss). No defect.

## Batch 5 — Kolmogorov divergence and Carleson–Hunt

Pages `kolmogorov-block-construction-and-almost-everywhere-divergence` (+ examples)
and `carleson-hunt-time-frequency-theorem` (+ examples) were read against their items.

- Kolmogorov construction (8 + 2 items): checked `lem-kolmogorov-simultaneous-phase-approximation`
  (Fejér-product approximation with the telescoping `r2^{r−1}ρ`, constant-coefficient
  comparison, equidistribution for nonzero integer vectors); `lem-kolmogorov-atomic-kernel-maxima`
  (inductive choice outside countable null spans, independence of `1,x−t_j`, the sign
  normalization giving `D_L(y_j)>1/(2|sin πy_j|)`, and the one-sided cell count with
  `m+1≥n/2`, hence `c=1/(4π)`); `lem-kolmogorov-block-polynomial-with-large-partial-sums`
  (coefficients `b_k`, increasing sets and continuity from below, the Fejér smoothing
  difference `<1` for `L≤K`, and the reindexing `e_M S_L g=A_{M+L}P−A_{M−L−1}P`);
  `lem-separated-frequency-blocks…` (support/cutoff identities and the explicit refusal
  of any magnitude reduction — the corrected form of the earlier unprovable design
  clause); `lem-kolmogorov-gliding-hump-series-converges-in-lone` (summable norms and
  exceptional measures, the Cauchy tail, `∫G=1`, finiteness a.e.);
  `lem-kolmogorov-block-maxima-diverge-off-a-null-limsup-set` (coefficient stabilization,
  Borel–Cantelli, the exact cutoff identity and `j−G(x)→∞`); and the theorem.
- Carleson–Hunt (14 + 3 items): checked the operator definition (absolute convergence,
  cutoff continuity, least-index measurable selector, the phase testing function); the
  packet definition (C^∞ flat function and vanishing derivatives, the plateau ratio ψ,
  `φ=ψ̂(−·)`, the exact transform with support strictly inside the lower half); the
  wave-packet averaging (exact spatial kernel, `R=φ*φ`, `R̂=ψ²`, the η-average giving
  `H(l(a−ξ))` without freezing `N`, the r-average giving `m_K↑κ`, and the reconstruction
  `κT_{N(x)}f`); density and size selection against Lacey Lemma 3.6 / 3.9 and the
  explicit packing/TT* estimates; the single-tree estimate against Lacey Lemma 3.11
  and §6 (maximal `3J` partition, the `4j` density witness, the exact smooth
  truncations with the `1/(8r)` support gap, the `M_H` square-function step); the
  joint stopping (3.13)–(3.16) calculation; the localized signed-tree weak-(1,1)
  estimate as an explicit Calderón–Zygmund proof (synthesis bound, kernel/Hörmander
  estimates, the `3J_0` weighted split); the Hunt distribution estimates against
  §7.1–7.2 and Lemma 7.10 (Rademacher fourth moment, the subtree bootstrap, the major
  subset, the inside-tile packing); restricted weak interpolation (the testing
  functional, high/low split and the two geometric sums requiring `r<p<s`); the
  strong-L2 extension; the real-to-torus transfer (half-integer cutoffs, periodic
  averaging, Fejér approximation); and the all-`p` torus theorem. One item was repaired
  (below); the rest were accepted.

## Repairs (four, all local, `repair_confidence: 1`)

1. **`lem-wave-packet-model-dominates-the-linearised-carleson-operator`** — corrected the explanation introduced during 5a, recorded as `p2-next20-owner-carleson-review-explanation` (nonfatal, fixed). The original witness was bounded: its magnitude is `|T_Nf|^{p-1} <= ||fhat||_1^{p-1}` for every `p>1`. The earlier claim that a factor with exponent `p-2` made the product unbounded was a false positive. The sound lower-truncation proof is retained, with its true product bound made explicit. The append-only history retains `p2-next20-5a-a-carleson-testing-functional-below-two` as the historical erroneous fatal diagnosis; the current decision owns both records and does not uphold that diagnosis.
2. **`weak-mixing-and-the-chacon-transformation`** — defect
   `p2-next20-5a-a-chacon-page-stale-source-status` (`accuracy / other` with
   `subclass_note`, polish, `page-prose`, fixed). The page asserted that the Chacon
   source-verification and independent-proof obligations "remain open"; this batch's
   coverage records `source_obligation_resolution` at 2026-09-10T17:41:05Z resolving S1
   (root-authorized waiver of the unavailable Katok–Thouvenot/Creutz backing against
   seven complete local constructions) and S2 (the owner's reading of Varju §11). The
   sentence now points at those records and repeats that ordinary mathematical review
   remains required.
3. **`weak-mixing-and-the-chacon-transformation-examples`** — defect
   `p2-next20-5a-a-chacon-examples-stale-source-status` (same class, fixed). The closing
   sentence said the construction's source obligations "remain inherited"; it now
   points at the companion page's recorded resolution.
4. **`kolmogorov-block-construction-and-almost-everywhere-divergence`** — defect
   `p2-next20-5a-a-kolmogorov-page-stale-source-status` (same class, fixed). The page
   asserted a "retained verification obligation" for Kolmogoroff's 1923 paper although
   batch 5 coverage records that source as dropped/waived against the eight complete
   local arguments (`research/phase-2-next-20-kolmogorov-source-alternative-review.json`,
   six retrieval failures preserved). The sentence now matches the coverage.

All four rows are appended to `research/defect-ledger.jsonl` with
`caught_at_stage: 5a-adjudicate`, `caught_by_role: group-alpha`, dispositions `fixed`,
and are referenced by the corresponding decisions. No other published content, item
statement or proof step was edited.

## Source evidence read for this review

- **Lacey, Carleson's Theorem: Proof, Complements, Variations** (arXiv `math/0307008`):
  read the extracted text of the paper's tile definitions and §3 (Lemma 3.6, 3.9, 3.11
  and the (3.13)–(3.16) summation), §4 (Density Lemma), §5 (Size Lemma and the TT*
  estimate), §6 (Tree Lemma, both `−` and `+` tree cases, `M_δ`), and §7.1–7.3
  (Proposition 7.1, the two cases of (7.3), Lemma 7.10 with (7.11)–(7.16)). The
  library's authored arguments for `lem-carleson-density-selection`,
  `lem-carleson-size-selection`, `lem-carleson-single-tree-estimate`,
  `lem-carleson-forest-summation-gives-restricted-weak-ltwo`,
  `lem-carleson-signed-tree-weak-one-one-estimate` and
  `lem-hunt-exceptional-set-and-distribution-estimates` were compared with these
  passages and with the stated constants/hypotheses; the library variants are valid
  reorganizations (the signed-tree estimate replaces Lacey's appeal to Calderón–Zygmund
  theory by an explicit kernel decomposition, which was checked step by step).
- **Grafakos, Classical Fourier Analysis, 3rd ed.** — not re-fetched here; the batch-5
  Kolmogorov items are literature-derived and their unavailable original backing is
  recorded as waived in coverage with the complete eight-item local alternative
  (`research/phase-2-next-20-kolmogorov-source-alternative-review.json`). I verified the
  local alternative's mathematics directly, not the unavailable source text.
- **Fremlin, Measure Theory vol. 2 ch. 28** — not re-fetched; coverage records the
  six failed attempts and the dropped/waived disposition with the hashed local
  alternatives (`research/phase-2-next-20-carleson-source-alternative-review.json`).
  I verified the local normalization/transfer argument in
  `lem-carleson-real-line-to-torus-transfer` directly.
- Published in-batch suppliers whose consumed clauses I read in full: batch 1 —
  `prop-mixing-correlations-extend-to-l-two`, `def-strong-and-weak-mixing`,
  `thm-ergodicity-and-invariant-functions`. Cross-batch suppliers for batch 5 are the
  Fourier items authored by another group (`def-fourier-transform-on-l-one-of-rn`,
  `def-schwartz-space-and-its-seminorms`, `thm-fourier-inversion-on-schwartz-space`,
  `thm-plancherel`, `thm-fourier-transform-maps-schwartz-space-continuously-to-itself`,
  `lem-schwartz-functions-and-all-derivatives-are-integrable`,
  `cor-schwartz-convolution-and-product-transform-laws`), whose interfaces are recorded
  as verified in `research/phase-2-next-20-batch-5.cross-batch-dependencies.json`; I
  re-read the rows and the declared use sites and found them accurate. Those items are
  still `status: draft` in this run and are group b's to adjudicate in 5A/5B — they are
  not published defects.

## Published findings

No new published-item defect was found in the suppliers I read. The one published
defect on a load-bearing chain is already canonical: **`thm-marcinkiewicz-interpolation-for-weak-one-one-and-strong-infinity`**
(proof 4.1 applies the sigma-finite Tonelli theorem without its hypothesis and step 2.1
omits the tail-integrability estimate). Its exact consumer path here is
`lem-carleson-single-tree-estimate` → `cor-centered-hardy-littlewood-maximal-operator-is-l-p-bounded`
→ the defective interpolation proof. The existing
`research/published-consumer-supplier-ledger.md` entry ("Published Marcinkiewicz
interpolation: local repair, no new pair", with the 2026-09-11 author-handoff
reconciliation) already records the exact clauses and the fact that the live corollary
specializes to Euclidean Lebesgue measure under countable choice and sigma-finiteness,
so this use is not an additional Carleson blocker. Because the finding, supplier mapping,
repair strategy and audit status are unchanged by this read, the ledger was not edited
(no duplicate row was created; the lock protocol was not needed).

The two source waivers above (Katok–Thouvenot/Creutz and Varju in batch 1; Kolmogorov's
original paper and Fremlin in batch 5) are owner-resolved backing dispositions recorded
in the batch coverage; they waive only unavailable backing and no result or independent
review, and they are not published-item defects.

## Local suppliers and shared-plan amendments

None. No new definition or lemma was needed, no manifest item order changed, and no
page/pair/plan splice or page header changed. No shared-plan or Phase-2 amendment is
requested from the serial lead by this group. The batch-5 cross-batch dependency input
was re-read and left unchanged; `frontier-dependency-ledger.mjs refresh --run
phase-2-next-20` was run afterwards (exit 0).

One page-level observation for the 5b lead (not a defect and not an amendment request):
`kolmogorov-block-construction-and-almost-everywhere-divergence` lists the planned page
`orthonormal-bases-parseval-and-fourier-series` among its `requires`, and that page is
not authored in any of this run's 15 batches. None of the eight Kolmogorov items'
declared dependencies reaches it — their route uses the period-one coefficient page,
the Dirichlet-kernel size lemma, uniform Fejér convergence, the countable-null-set
proposition and the general first Borel–Cantelli theorem — and `depcheck.mjs` resolves
every declared reference. The requirement is therefore a plan-level prerequisite whose
own inventory is outside this run, exactly as the batch-5 construction record states;
no reviewed proof in this group consumes it.

## Checks run

| Check | Result |
| --- | --- |
| `risk-report.mjs research/phase-2-next-20-batch-1.proof-contracts.json --require-reviewed` | exit 0 — 21 HIGH/CRITICAL risk_reviews complete, 0 errors |
| `risk-report.mjs research/phase-2-next-20-batch-5.proof-contracts.json --require-reviewed` | exit 0 — 21 HIGH/CRITICAL risk_reviews complete, 0 errors |
| `precheck.mts` on all 51 scope items | 44 checked, 0 failing |
| `precheck.mts` on the repaired item | 1 checked, 0 failing |
| `manifest-deps.mjs` on both batch manifests | 51 items, 0 errors |
| `content-policy.mjs --manifest-only` on both batch manifests | 24/24 and 27/27, 0 errors, 0 warnings |
| `author-check.mts phase-2-next-20 1` / `5` | exit 0 (no diagnostics) |
| `depcheck.mjs --quiet` | exit 0 — no cycles, all references resolve |
| `extcheck.mjs --quiet` | exit 0 — recorded-not-proved consequences marked |
| `defect-ledger.mjs validate --run phase-2-next-20` | 7 rows, 0 errors (4 new rows from this group) |
| `frontier-dependency-ledger.mjs refresh --run phase-2-next-20` | exit 0 — refreshed and deduplicated |
| `step5-scope.mjs check --phase adjudicate` filtered to `authored:1:` / `authored:5:` | 0 errors for this group (all 57 obligations decided; stamp run for group a) |
| `step5-scope.mjs check-escalations --run phase-2-next-20` | no owner escalations |

Whole-run note for the serial lead (not this group's work): the same routing check still
reports other groups in flight — group c's batch-4 decisions carry stale `subject_sha256`
values after later edits, and groups d, e and f have not yet written 5a decisions. Those
errors name only `authored:3`/`authored:4` obligations or missing decisions files for
other groups.

## Blockers

None for this group. No item or page is escalated; no mathematical uncertainty remains
unresolved in the reviewed content. The published Marcinkiewicz proof debt and the four
recorded source waivers remain Phase-3/owner-track items as recorded elsewhere, with the
exact consumer paths stated above.

