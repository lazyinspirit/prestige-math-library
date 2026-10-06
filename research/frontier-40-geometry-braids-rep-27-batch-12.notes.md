# Batch 12 Step 1 scaffold — Plancherel Measure and Asymptotic Young Diagrams

Run: `frontier-40-geometry-braids-rep-27` · pair `plancherel-measure-and-asymptotic-young-diagrams`
(A 829 / B 830, `representation-theory`). Outputs: `research/frontier-40-geometry-braids-rep-27-batch-12.pages.json`
(24 A + 3 B items), this note, `research/frontier-40-geometry-braids-rep-27-batch-12.coverage.json`,
`research/frontier-40-geometry-braids-rep-27-batch-12.cross-batch-dependencies.json`, and 27 item-readiness
records `research/frontier-40-geometry-braids-rep-27-step1-<id>.json`.

## Scope and design / plan reconciliation

- **Owner direction.** `research/frontier-40-geometry-braids-rep-27-owner-authoring-direction.md` was read first;
  it fixes the selected 27-pair scope, permits lower-order in-run dependencies, forbids new pairs or scope changes,
  and leaves publication/pushing to the owner. This batch changes neither the selected pair nor its promised claims.
- **Controlling design.** `research/plan-symmetric-group-representations-track.md` L47 (the id mention; the whole
  file was read) plus the section it points to, `research/symmetric-group-planning/proposed-inventory.md`
  §SYMR-16: the 19 A rows `def-plancherel-measure-on-partitions` … `rem-rsk-longest-increasing-subsequence-consequences-remain-rg11-owned`
  and the 3 B rows `ex-plancherel-measure-on-partitions-of-three`, `ex-rsk-shapes-of-all-six-permutations-in-s3`,
  `cex-plancherel-measure-is-not-uniform-on-partitions`. All their kinds, ids, claims and proof routes are preserved.
- **Plan comparison.** `research/plan-spec.json` agrees on page ids, orders 829/830, category, companions and page
  `requires`; its A/B `items` arrays are empty by planning convention. The page `requires` are all published pages:
  the four symmetric-group pages (specht, branching/Young graph, hook-length/RSK, Frobenius characteristic) and the
  four probability pages (finite probability, modes of convergence, weak convergence/tightness, CLT). No conflict
  between the design and the plan; the plan controls and was not edited.
- **Recorded reformulations of the design (necessary for local closure; no claim weakened).**
  1. `def-shifted-character-observables-and-profile-moments` defines `tilde p_k[omega]=k(k-1)∫x^{k-2}σ_ω dx` for
     `k≥2` and records the integration-by-parts equivalence with the source's a.e.-derivative form (2.2). The library
     has no Rademacher almost-everywhere differentiability supplier, and the integral form is total on the profile
     class and reduces to the source formula on piecewise linear profiles.
  2. `def-normalized-shifted-character-basis-elements` replaces the source's formal localization
     `A_ext = A[(p_1^#)^{1/2}]` (the library has no commutative-ring localization supplier) by the concrete
     evaluation `eta_rho^{(n)}(lambda) = p_rho^#(lambda)/(n^{|rho|_1/2} prod k^{m_k/2})` on each `Y_n`, which is
     exactly the localization's value because `p_1^#(lambda)=n`. `lem-hermite-leading-terms-...` is stated in the
     equivalent finite-expansion form with an `O(n^{-1/2})` remainder expectation.
  3. `thm-multivariate-method-of-moments-for-a-determinate-limit` no longer appeals to "analyticity of the Gaussian
     characteristic function" for determinacy (analyticity alone does not prove moment-determinacy without a
     Carleman-type criterion, which the library lacks). A complete local lemma,
     `lem-standard-gaussian-is-determined-by-its-moments`, proves the Gaussian case by the Stein identity
     (polynomial identity → extension to bounded C^1 tests by Weierstrass plus tail control → explicit Stein
     equation → bounded-continuous tests agree), and the theorem's final clause reduces to it by Cramér–Wold.
  4. Local prerequisites added, all on the same A page (24 A items total, far below the 100-item cap):
     `lem-shifted-character-multiplication-by-p-k` (IvOl Props 4.11–4.12), `lem-profile-moment-generators-and-shifted-character-basis`
     (IvOl Props 3.5–3.7, Cor. 2.8), `def-monic-probabilists-hermite-polynomials`, `lem-hermite-orthogonality-and-monomial-expansion`,
     and `lem-standard-gaussian-is-determined-by-its-moments`. The design's `thm-shifted-character-basis-and-weight-filtration`
     was retained as the umbrella theorem carrying membership/basis/filtration/top-term multiplication imported from
     Ivanov–Kerov, and the exact product formulas were separated out because the Hermite step consumes them directly.
  5. AC: the design's moment-method and CLT items did not state a choice assumption. The scaffold declares AC and
     `def-axiom-of-choice` on `def-joint-convergence-and-normalized-cycle-character-observables`
     (existence of the target `N_{N-1}(0,I)`), on `lem-standard-gaussian-is-determined-by-its-moments` (Portmanteau
     uniqueness step), on `thm-multivariate-method-of-moments-for-a-determinate-limit` (Prokhorov, Skorokhod,
     Cramér–Wold) and on `thm-kerov-central-limit-theorem-for-normalized-cycle-characters` (via that theorem and the
     target law). The LLN items and the profile/tightness items are choice-free. No result is consumed as a
     "Recorded" item and no item reaches `deferred-set-theory-beyond-choice`.

## Item inventory and dependency audit

**A page (24 items, levels 0–7).** Measure and normalization: `def-plancherel-measure-on-partitions` (0),
`prop-plancherel-weights-sum-to-one` (1), `thm-rsk-shape-of-a-uniform-random-permutation-has-plancherel-law` (1).
Profiles: `def-russian-profile-and-sqrt-n-scaling-of-a-young-diagram` (1), `def-logan-shepp-vershik-kerov-limit-profile` (2),
`lem-rsk-union-bound-localizes-plancherel-profiles` (2, local replacement for IvOl Lemma 5.6's Hammersley citation),
`lem-bounded-lipschitz-profile-moments-control-uniform-distance` (0, IvOl Lemma 5.7 complete proof).
Shifted-observable algebra: `def-shifted-character-observables-and-profile-moments` (2),
`thm-shifted-character-basis-and-weight-filtration` (3), `lem-shifted-character-multiplication-by-p-k` (4),
`lem-profile-moment-generators-and-shifted-character-basis` (4). Plancherel expectations and limit shape:
`prop-plancherel-expectations-of-shifted-character-observables` (3),
`prop-limit-profile-moments-are-central-binomial-coefficients` (3),
`prop-scaled-plancherel-profile-moments-converge-in-probability` (5),
`thm-plancherel-young-diagrams-converge-to-the-limit-shape` (6). Character CLT:
`def-joint-convergence-and-normalized-cycle-character-observables` (3),
`def-normalized-shifted-character-basis-elements` (4), `def-monic-probabilists-hermite-polynomials` (0),
`lem-hermite-orthogonality-and-monomial-expansion` (1), `lem-hermite-leading-terms-for-normalized-shifted-characters` (5),
`lem-standard-gaussian-is-determined-by-its-moments` (0),
`thm-multivariate-method-of-moments-for-a-determinate-limit` (1),
`thm-kerov-central-limit-theorem-for-normalized-cycle-characters` (6). Boundary: `rem-rsk-longest-increasing-subsequence-consequences-remain-rg11-owned` (7).

**B page (3 items, levels 1–2), a dependency leaf.** `ex-plancherel-measure-on-partitions-of-three` (1),
`ex-rsk-shapes-of-all-six-permutations-in-s3` (2), `cex-plancherel-measure-is-not-uniform-on-partitions` (1,
`ai-generated/ai-generated`, `generation.role: counterexample`, not a dependency target). Nothing outside the B page
depends on it; every B dependency is this batch's A page or an earlier item on the same B page.

**Dependency verification actually performed (not inferred from page membership).**
- Every one of the 8 `requires` pages was checked on disk: published, with the item ids used here (specht:
  `thm-standard-polytabloid-basis`; hook-length/RSK: `thm-hook-length-formula`, `thm-robinson-schensted-correspondence`,
  `def-row-insertion-and-bumping-route`, `thm-schensted-longest-increasing-and-decreasing-subsequence-theorem`;
  branching/Young graph: `cor-paths-in-the-young-graph-index-standard-tableaux`; Frobenius dictionary:
  `cor-irreducible-symmetric-group-character-values-are-power-sum-coefficients`; finite probability:
  `def-finite-probability-space-and-event`, `def-uniform-finite-probability-space`, `def-finite-real-random-variable-and-distribution`;
  modes: `def-convergence-in-probability`, `cor-chebyshev-inequality-for-random-variables`; weak convergence:
  `def-weak-convergence-of-borel-probability-measures`, `def-convergence-in-distribution-of-random-elements`,
  `def-tight-family-of-probability-measures`, `thm-prokhorov-tightness-theorem-on-polish-spaces`,
  `cor-tightness-extracts-a-weakly-convergent-subsequence`, `thm-portmanteau-theorem`,
  `thm-skorokhod-representation-on-polish-spaces`; CLT: `def-multivariate-normal-law`,
  `lem-characteristic-function-of-a-multivariate-normal-law`, `thm-cramer-wold-device`).
  Each statement was opened and its hypotheses/direction checked against the use here.
- All 57 distinct out-of-batch dependencies resolve to published item files (script check: 0 missing, 0 unpublished).
  The 47 remaining dependency edges are in-batch and are listed in topological order; the maximum in-run level is 7
  (recomputed with `tools/item-dependency-levels.mjs`; see checks below).
- Implicit-use audit: the character-value supplier is the power-sum coefficient corollary, not a character table;
  the regular-character computation uses the multiplicity theorem and the regular-character value; the RSK count uses
  the Young-graph path/standard-tableau correspondence; the topology step uses the compactly supported polynomial
  moments, not a norm on a general valued field; the Gaussian target law and the moment method use the published
  multivariate-normal and weak-convergence conventions; AC is declared exactly where those suppliers need it.

## Sources (two independent treatments plus two supporting articles)

- **Primary proof source (full text read in the relevant ranges).** V. Ivanov, G. Olshanski, *Kerov's central limit
  theorem for the Plancherel measure on Young diagrams*, arXiv:math/0304010 (NATO Sci. Ser. II 74 (2002) 93–151),
  49 pp. Read: §2 (continual diagrams, σ, `tilde p_k`, scaling) pp. 9–14; §3 (the `p_k^#`) pp. 15–18; §4 (basis
  `{p_ρ^#}`, structure constants, Kerov filtration, exact products) pp. 19–24; §5 (Plancherel measure, Props. 5.1–5.3,
  Thms. 5.4–5.5, Lemmas 5.6–5.7) pp. 25–29; §6 (character CLT, Hermite leading terms, moment method) pp. 29–32.
  §7 (diagram CLT) and §§8–9 inspected and dispositioned out of scope in the coverage file.
- **Second independent treatment (textbook).** D. Romik, *The Surprising Mathematics of Longest Increasing
  Subsequences* (CUP 2015; author-hosted manuscript, 363 pp.). Read: §§1.6–1.9 pp. 17–30 (RSK, Plancherel measure,
  hook-length formula) and §§1.11–1.17, 1.20 pp. 31–69 (the independent variational proof of the same limit-shape
  theorem). Chapters 2–5 inspected only for the boundary disposition.
- **Supporting article for the multiplication algebra.** V. Ivanov, S. Kerov, *The algebra of conjugacy classes in
  symmetric groups and partial permutations*, arXiv:math/0302203, 19 pp. Read: Props. 6.1–6.3 and Remark 6.4
  pp. 5–7 (support-union structure constants, degree inequality, unique top term) and Thm. 9.1 with its proof
  pp. 12–13 (`F(A_ρ)=p_ρ^#/z_ρ` is an algebra isomorphism); §§2–5, 10–12 inspected and dispositioned.
- **Supporting independent CLT treatment.** P. Śniady, *Gaussian fluctuations of characters of symmetric groups and
  of Young diagrams*, arXiv:math/0501112, 37 pp. Read: Theorem and Definition 3.1, Corollary 3.3 and the paragraph
  after (3.6) pp. 11–13, where the Plancherel case recovers Kerov's CLT; §§4–5 dispositioned as the alternative
  genus-expansion route.
- All four URLs were fetch-verified with `source-fetch-check --stamp`; the stamps (IO 432088 B/49 pp, IK 223059 B/19 pp,
  Romik 3840601 B/363 pp, Śniady 283411 B/37 pp) match the locally extracted and read full texts. The Romik and
  Ivanov–Olshanski URLs are cited on both pages; 6/6 coverage entries are stamped.

## Checks run (actual results)

- `node tools/coverage-checklist.mjs research/frontier-40-geometry-braids-rep-27-batch-12.coverage.json --require-destination`
  → `2 page(s), 27 harvested result(s), 0 error(s), 0 warning(s)` (exit 0). Every source heading over the read range
  has a disposition; no deferral, no drop.
- `node tools/manifest-deps.mjs research/frontier-40-geometry-braids-rep-27-batch-12.pages.json` → `27 item(s), 0 normalized, 0 error(s)` (exit 0).
- `node tools/content-policy.mjs --manifest-only research/frontier-40-geometry-braids-rep-27-batch-12.pages.json`
  → `27 scoped item(s), 0 error(s), 0 warning(s)` (exit 0). Batch capacity 1 A pair.
- `node tools/source-fetch-check.mjs --coverage research/frontier-40-geometry-braids-rep-27-batch-12.coverage.json --stamp`
  → `6/6 source(s) fetch-verified` (exit 0); check mode → `6/6 source(s) resolved` (exit 0).
- `node tools/item-dependency-levels.mjs check --run frontier-40-geometry-braids-rep-27` → still exit 1 **only** because
  page shells of other, still-running batches have empty inventories (`empty scaffold inventory`: 40 such errors at the
  first run, 36 at the last); no error names any batch-12 item and no dependency cycle/label error exists. The batch-12
  levels were recomputed and validated by the same exported `dependencyLevels` function (27 items, max level 7).
- `node tools/validate-plan.mjs research/plan-spec.json` → exit 0; acyclic page order, no item cycles, forward or
  B-page dependencies among the 1420 pages with item lists; 247 planned pages still without item lists (run in flight).
- `node tools/extcheck.mjs --quiet` → exit 0 (no `proved_here: false` item or cone in this batch); `node tools/fwdcheck.mjs --quiet`
  → exit 0 (no `forward_refs` in this batch).
- Whole-run joins run for information: `manifest-deps` over all 27 manifests → `173 item(s), 0 error(s)`;
  `content-policy --manifest-only` over all manifests → 4 errors, all in **batch 2** (`principal-series-...`, another
  owner's batch: `def-group-algebra` is not on disk and `cor-regular-finite-principal-series-is-irreducible` is not
  scaffolded); none in batch 12. Recorded here as an outside finding; not repaired by this batch.
- `node tools/frontier-dependency-ledger.mjs refresh --run frontier-40-geometry-braids-rep-27` → exit 0;
  `research/frontier-40-geometry-braids-rep-27-batch-12.cross-batch-dependencies.json` is `[]` because every
  dependency of this pair is out of run and published; the refreshed ledgers contain no edge touching batch 12.
- `node tools/step1-decisions.mjs record` was run for all 27 items with their declared dependency lists; a scoped
  `step1Decision` recheck reports 27/27 closed (current hashes) at the time of writing.

## Unresolved findings / handoff

- **Correction record (late repair during scaffold review).** Four proof-text errors found by re-deriving the arguments were
  fixed before the readiness records were finalized, and the affected records were re-recorded:
  (i) `def-normalized-shifted-character-basis-elements` had an incorrect expectation bound
  `O(n^{-ell(rho)/2})` (false for `rho=(1^r)`, where the expectation is `prod_{j<r}(1-j/n) -> 1`) and an exponent
  `(|rho|-ell(rho))/2` in the modulus bound; both are corrected to the exact case formula with exponent
  `(|rho|-m_1(rho))/2`. (ii) `thm-multivariate-method-of-moments-for-a-determinate-limit` used an invalid
  `Sigma^{-1/2}` reduction for singular covariance; replaced by translation plus projection and Cramér–Wold.
  (iii) `thm-plancherel-young-diagrams-converge-to-the-limit-shape` justified the Lipschitz bound on
  `lambda-bar-Omega` by "difference of two 1-Lipschitz functions", which is false in general; replaced by the correct
  monotonicity argument for `sigma_{lambda-bar}-sigma_Omega` (both pieces nonincreasing for `x>0` and nondecreasing for
  `x<0`), together with the explicit `epsilon/2`, `2 delta` constants in the finite-moment containment.
  (iv) `lem-bounded-lipschitz-profile-moments-control-uniform-distance` used the wrong bump-support radius; corrected
  to the `eta/2`-neighbourhood. The three records affected through the dependency closure were re-recorded and the
  batch again shows 27/27 closed.
- No batch-12 item is escalated: every item has a complete statement, proof strategy, source locators and met
  prerequisites; the 2 central theorems (`thm-plancherel-young-diagrams-converge-to-the-limit-shape`,
  `thm-kerov-central-limit-theorem-for-normalized-cycle-characters`) have complete local proof routes.
- The whole-run `item-dependency-levels` gate and the `--require-reviewed` dependency ledger can only pass once every
  batch scaffolds; batch 12's own items carry correct labels and no in-run edges.
- Outside finding for the batch-2 owner: four manifest items depend on `def-group-algebra` (absent) or on
  `cor-regular-finite-principal-series-is-irreducible` (not scaffolded). Evidence: whole-run
  `content-policy --manifest-only` output above.
- Remaining authoring attention (not blockers at Step 1): reproduce the Ivanov–Kerov structure-constant transport in
  `thm-shifted-character-basis-and-weight-filtration`, the Stein-equation bounds in
  `lem-standard-gaussian-is-determined-by-its-moments`, and the Chebyshev/translation step of IvOl Thm 5.4 exactly as
  scoped. Owner/operator reconciliation and the full engine gate follow construction; this record is not mathematical
  approval.

## Step 3b completion checkpoint (alpha pair author, 2026-10-05)

- **All 27 items authored** under `items/`, both pages created
  (`library/representation-theory/plancherel-measure-and-asymptotic-young-diagrams{,-examples}.md`), the batch
  proof-contract file written (`research/frontier-40-geometry-braids-rep-27-batch-12.proof-contracts.json`,
  131 citations / 96 derivations / 8 boundary dispositions per item, strict-clean with 2 style warnings).
- **Item decisions recorded** for all 27 (`step3-decisions record-item`, confidence 1): 7 `repaired`
  (`thm-shifted-character-basis-and-weight-filtration` — statement corrected from the false `deg_1`
  top-term rule to the weight filtration, both filtrations kept; `lem-standard-gaussian-is-determined-by-its-moments`
  — scaffold sketch replaced by a complete proof of both clauses; `thm-multivariate-method-of-moments-for-a-determinate-limit`
  — invalid singular-`Sigma^{-1/2}` reduction replaced; `lem-bounded-lipschitz-profile-moments-control-uniform-distance`
  — bump radius fixed; `thm-plancherel-young-diagrams-converge-to-the-limit-shape` — false "difference of
  1-Lipschitz" step replaced by the halved-profile argument; `lem-shifted-character-multiplication-by-p-k`
  — equality-case/coefficient repair; `def-normalized-shifted-character-basis-elements` — exact expectation
  and modulus bounds) and 20 `accept`. `check --phase final` lists no batch-12 work item.
- **Manifest deps synced** with the authored items for 24/27 items; B-page levels recomputed:
  `ex-plancherel-measure-on-partitions-of-three` 1→2, `ex-rsk-shapes-of-all-six-permutations-in-s3` 2→3
  (both fields updated). `item-dependency-levels check --run` has no batch-12 error; `manifest-deps` clean.
- **Checks actually run (all green for this pair):** precheck 19/19 proof-bearing items PASS; rendercheck 29
  files OK; proof-layout 27 items/96 steps/0 defects; content-policy 27 items 0 errors; coverage-checklist
  27 results 0 errors; source-fetch-check 6/6; validate-plan exit 0; `author-check … 12` ok:true;
  depcheck/fwdcheck/extcheck scoped to the 27 ids show no batch-12 finding
  (`research/frontier-40-geometry-braids-rep-27-author-check-12.json`).
- **Cross-batch ledger input** remains `[]`: script-verified 0 dependency edges from these items to items of
  other batches in this run; all out-of-pair suppliers are published on disk. Ledger refreshed.
- **Open for Step 4 / Step 5:** reconcile the scope-bound manifest statements of
  `thm-shifted-character-basis-and-weight-filtration` (its `deg_1` unique-top-term claim is false as written;
  the authored item fixes it) and `lem-hermite-orthogonality-and-monomial-expansion` (`c_{m,m}=1` should be
  `c_{m,0}=1`). Run-wide gates (`step3-items`, `item-dependency-levels`, depcheck) are red only on other
  batches in flight. The pair report
  `research/frontier-40-geometry-braids-rep-27-step3b-pair-plancherel-measure-and-asymptotic-young-diagrams.md`
  carries the full record; next action is the engine's Step-3/against-other-pairs reconciliation, then
  Steps 5–8 audit.
