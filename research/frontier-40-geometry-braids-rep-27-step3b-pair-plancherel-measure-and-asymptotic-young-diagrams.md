# Step 3b pair report — `plancherel-measure-and-asymptotic-young-diagrams`

- Run: `frontier-40-geometry-braids-rep-27` (batch 12, orders 829/830, `representation-theory`).
- Pair: A `plancherel-measure-and-asymptotic-young-diagrams` (24 items) / B
  `plancherel-measure-and-asymptotic-young-diagrams-examples` (3 items).
- Role: alpha-high pair scaffold auditor and item author. Owned IDs: the 27 batch-12 items
  listed in the dispatch order below; both library pages.
- Step 3a input: `research/frontier-40-geometry-braids-rep-27-step3a-pair-plancherel-measure-and-asymptotic-young-diagrams.md`
  (decision `sufficient`, no unmet prerequisite, one §7 boundary note closed as out-of-scope
  by the design endpoint). Scope receipt
  `research/frontier-40-geometry-braids-rep-27-step3a-review-plancherel-measure-and-asymptotic-young-diagrams.json`
  (`sha256 ce856902…`) is current against the scaffold scope hash; no statement/title/kind changes are
  permitted by this author.

## Owned IDs and authoring order (dependency level, then page order, then item id)

| # | level | item | page | state |
|---|---|---|---|---|
| 1 | 0 | def-monic-probabilists-hermite-polynomials | A | done |
| 2 | 0 | def-plancherel-measure-on-partitions | A | done |
| 3 | 0 | lem-bounded-lipschitz-profile-moments-control-uniform-distance | A | done |
| 4 | 0 | lem-standard-gaussian-is-determined-by-its-moments | A | done |
| 5 | 1 | def-russian-profile-and-sqrt-n-scaling-of-a-young-diagram | A | done |
| 6 | 1 | lem-hermite-orthogonality-and-monomial-expansion | A | done |
| 7 | 1 | prop-plancherel-weights-sum-to-one | A | done |
| 8 | 1 | thm-multivariate-method-of-moments-for-a-determinate-limit | A | done |
| 9 | 1 | thm-rsk-shape-of-a-uniform-random-permutation-has-plancherel-law | A | done |
| 10 | 1 | cex-plancherel-measure-is-not-uniform-on-partitions | B | done |
| 11 | 2 | ex-plancherel-measure-on-partitions-of-three | B | done |
| 12 | 2 | def-logan-shepp-vershik-kerov-limit-profile | A | done |
| 13 | 2 | def-shifted-character-observables-and-profile-moments | A | done |
| 14 | 2 | lem-rsk-union-bound-localizes-plancherel-profiles | A | done |
| 15 | 3 | ex-rsk-shapes-of-all-six-permutations-in-s3 | B | done |
| 16 | 3 | def-joint-convergence-and-normalized-cycle-character-observables | A | done |
| 17 | 3 | prop-limit-profile-moments-are-central-binomial-coefficients | A | done |
| 18 | 3 | prop-plancherel-expectations-of-shifted-character-observables | A | done |
| 19 | 3 | thm-shifted-character-basis-and-weight-filtration | A | done |
| 20 | 4 | def-normalized-shifted-character-basis-elements | A | done |
| 21 | 4 | lem-profile-moment-generators-and-shifted-character-basis | A | done |
| 22 | 4 | lem-shifted-character-multiplication-by-p-k | A | done |
| 23 | 5 | lem-hermite-leading-terms-for-normalized-shifted-characters | A | done |
| 24 | 5 | prop-scaled-plancherel-profile-moments-converge-in-probability | A | done |
| 25 | 6 | thm-kerov-central-limit-theorem-for-normalized-cycle-characters | A | done |
| 26 | 6 | thm-plancherel-young-diagrams-converge-to-the-limit-shape | A | done |
| 27 | 7 | rem-rsk-longest-increasing-subsequence-consequences-remain-rg11-owned | A | done |

## Open obligations at entry

- Author all 27 item files under `items/`, both page files under
  `library/representation-theory/`, the batch proof contracts file
  `research/frontier-40-geometry-braids-rep-27-batch-12.proof-contracts.json`, and the page file lists.
- Run per item: explicit-path precheck/rendercheck/content policy/strict proof contracts; then the batch
  and run gates (`item-dependency-levels check --run`, `validate-plan`, coverage, manifest deps, fetch,
  dependency ledger) before recording Step-3 item decisions.
- No direct in-run prerequisite pairs to inspect (dispatch states none). Cross-batch dependency input
  `research/frontier-40-geometry-braids-rep-27-batch-12.cross-batch-dependencies.json` is `[]` (verified
  still current); recheck after authoring.
- No item supplier is unfinished at entry: all 57 out-of-pair suppliers are published items on disk.

## Checkpoints

Per-item checkpoint lines are appended below as each item is authored, checked and (at the end)
decided. This report is the durable continuation record for this pair.

**Level 0 (all four authored, precheck+rendercheck clean):**

- 1. `def-monic-probabilists-hermite-polynomials` — definition (literature-derived; IvOl (6.3) p. 30,
  monic normalization $xH_m=H_{m+1}+mH_{m-1}$). Suppliers read: `def-standard-normal-and-normal-laws`,
  `def-moments-variance-and-covariance`, `def-derivative`. No proof. Checked: precheck n/a (no phase body),
  rendercheck OK.
- 2. `def-plancherel-measure-on-partitions` — definition $P_n(\lambda)=(f^\lambda)^2/n!$ with the finiteness,
  positivity and well-definedness facts (deps `def-partition-young-diagram-and-conjugate-partition`,
  `def-factorial-and-falling-factorial`, `thm-standard-polytabloid-basis`, `thm-hook-length-formula`; all read).
  Normalization deferred to the proposition. rendercheck OK.
- 3. `lem-bounded-lipschitz-profile-moments-control-uniform-distance` — complete IvOl Lemma 5.7 proof
  (clipped triangular bump, Weierstrass replacement, mesh, finitely many moments). Added published suppliers
  used by the actual argument: `def-abs-value`, `lem-of-triangle-inequality`, `def-continuity-real`,
  `thm-linearity-of-the-integral`, `thm-monotonicity-of-the-integral` (manifest deps for this item should be
  extended accordingly at registration; all are out-of-run published so levels are unchanged). precheck PASS,
  rendercheck OK.
- 4. `lem-standard-gaussian-is-determined-by-its-moments` — replaced the scaffold's Stein sketch by a complete
  elementary proof **covering both clauses of the statement** (the general analytic-MGF clause included):
  moment growth from the MGF via Markov + layer cake; Gaussian moments $(2k-1)!!$ from the published even-moment
  item; Taylor remainder propagation of $h=\varphi_X-\varphi_Z$ from the origin along $\mathbb R$; uniqueness
  from equal characteristic functions. Actual suppliers used (manifest deps for this item to be extended):
  `def-characteristic-function-of-a-real-random-variable`,
  `lem-moments-give-derivatives-of-the-characteristic-function`, `def-taylor-polynomial-and-remainder`,
  `cor-taylor-remainder-bound`, `cor-cauchy-schwarz-for-random-variables`,
  `cor-markov-inequality-for-random-variables`, `thm-layer-cake-formula-for-l-p-powers`,
  `thm-uniqueness-of-a-law-from-its-characteristic-function`,
  `lem-gaussian-even-moment-bound-for-brownian-increments`, `thm-of-archimedean`. precheck PASS, rendercheck OK.
- Deviations recorded so far: item 3 and item 4 dependency lists are being extended in the item files with the
  exact suppliers actually used (all published, out-of-run); no in-run edge changed; dependency levels unaffected.

**Level 1 (all seven authored, precheck+rendercheck clean):**

- 5. `def-russian-profile-and-sqrt-n-scaling-of-a-young-diagram` — continual diagrams $D_0$, the profile
  $\sigma_\omega=(\omega-|x|)/2$, the scaling $\omega_s$, the rotated boundary $\lambda(\cdot)$, the
  $\sqrt n$-scaled profile and the area identity $\frac12\int(\lambda-|x|)=n$ (verified via the linear
  change of variables with $|\det T|=2$; supplier `thm-change-of-variables-for-compact-jordan-sets` added).
- 6. `lem-hermite-orthogonality-and-monomial-expansion` — full proof of orthogonality $E[H_mH_n]=m!\delta_{mn}$
  and of the monomial expansion $x^m=\sum_j c_{m,j}H_{m-2j}$ with $c_{m,j}=\binom{m}{2j}(2j-1)!!$; the Stein
  identity is proved coefficientwise from the published even-moment formula and the vanishing of odd moments
  (odd derivatives of the even characteristic function $e^{-t^2/2}$ vanish at $0$). Added published suppliers:
  `lem-characteristic-function-of-a-normal-law`, `lem-moments-give-derivatives-of-the-characteristic-function`,
  `lem-gaussian-even-moment-bound-for-brownian-increments`, `cor-cauchy-schwarz-for-random-variables`,
  `thm-chain-rule`, `thm-algebra-of-derivatives`, `def-axiom-of-choice`.
- 7. `prop-plancherel-weights-sum-to-one` — two independent counts of $n!$ (regular representation via the
  multiplicity theorem with the complex Specht modules as the irreducibles; RSK corollary) and the finite
  probability space structure. Added published suppliers:
  `thm-complex-irreducibles-of-symmetric-groups-are-specht-modules`,
  `thm-complex-specht-modules-are-irreducible`, `thm-standard-polytabloid-basis`.
- 8. `thm-multivariate-method-of-moments-for-a-determinate-limit` — complete proof: coordinate second
  moments bound a tight family; Prokhorov extracts a weak limit; Skorokhod couples; $L^2$-bounded moment
  families are UI and pass to the limit by Vitali; determinacy identifies the limit; the Gaussian clause is
  proved by Cramér–Wold reduction to the univariate determinacy lemma. All suppliers are the scaffolded
  published ones plus `thm-algebra-of-derivatives`-free elementary steps.
- 9. `thm-rsk-shape-of-a-uniform-random-permutation-has-plancherel-law` — fibre count $(f^\lambda)^2$ via the
  RSK bijection and the uniform law; LIS clause via Schensted.
- 10. `cex-plancherel-measure-is-not-uniform-on-partitions` (B) — $n=3$ weights $1/6,4/6,1/6$ and the general
  $n\ge3$ comparison $f^{(n)}=1$ vs $f^{(n-1,1)}=n-1$.
- 11. `ex-plancherel-measure-on-partitions-of-three` (B) — explicit standard tableaux of $(2,1)$ and the
  weights, recovering the normalization.
- Recorded scaffold typo for Step 4 prose review: the manifest statement of item 6 writes "$c_{m,m}=1$",
  which should read "$c_{m,0}=1$" (the coefficient of $H_m$). The authored item states the correct version;
  the manifest statement itself was not edited (scope hash).

**Level 2 (all four authored, precheck+rendercheck clean):**

- 12. `def-logan-shepp-vershik-kerov-limit-profile` — explicit $\Omega$ with its elementary properties
  (evenness, junction continuity and differentiability, $1$-Lipschitz bound, $C^\infty$ on $(-2,2)$,
  $\sigma_\Omega$ supported in $[-2,2]$) derived from the arcsine branch and the mean value theorem.
- 13. `def-shifted-character-observables-and-profile-moments` — the source's $p_\rho^\#$; profile moments
  $\tilde p_k=k(k-1)\int x^{k-2}\sigma_\omega$ with the integration-by-parts form (Step-1 documented
  reformulation of the a.e.-derivative formula); the scaling identity $\tilde p_k[\bar\omega]=s^{-k}\tilde p_k[\omega]$.
- 14. `lem-rsk-union-bound-localizes-plancherel-profiles` — complete local replacement for the source's
  Hammersley citation (union bound, $\binom nL/L!\le(e^2n/L^2)^L$, support localization on $E_n$).
- 15. `ex-rsk-shapes-of-all-six-permutations-in-s3` (B) — explicit insertion runs giving $1/6,4/6,1/6$,
  matching $P_3$ of the sibling example and confirming the shape law at $n=3$.

**Level 3–4 (all seven authored, precheck+rendercheck clean):**

- 16. `def-joint-convergence-and-normalized-cycle-character-observables` — $\eta_k^{(n)}=p_k^\#/(\sqrt k\,n^{k/2})$,
  joint convergence as weak convergence of pushforward laws, Gaussian target; AC declared exactly for the
  target law. Repaired a stale wikilink to the CLT item id (it pointed at the unwritten long id
  `…-cycle-character-observables`; now `…-cycle-characters`).
- 17. `prop-limit-profile-moments-are-central-binomial-coefficients` — complete Wallis-integral proof of
  $\tilde p_{2m}[\Omega]=\binom{2m}{m}$, odd moments $0$; supplier `lem-wallis-integrals-recurrence-and-squeeze`
  added. Fixed an internal cross-reference to a nonexistent step 1.3 in the conclusion.
- 18. `prop-plancherel-expectations-of-shifted-character-observables` — $\mathbb E_{P_n}[p_\rho^\#]=n^{\downarrow r}$
  on columns, $0$ otherwise, from the regular-character expansion of $\mathbb C[S_n]$; degenerate $n<r$ included.
- 19. `thm-shifted-character-basis-and-weight-filtration` — **statement corrected** (see corrections below);
  membership/basis, the two filtrations, the weight top-term rule and triangularity, imported from IK/IvOl.
- 20. `def-normalized-shifted-character-basis-elements` — concrete evaluation of the source's localization;
  expectation formula and modulus bound corrected at Step 1 (recomputed from $|\chi^\lambda_\mu|\le\dim S^\lambda$).
- 21. `lem-profile-moment-generators-and-shifted-character-basis` — expansion of $\tilde p_k$ in
  $B(u)=1+\sum p_{j-1}^\#u^j$, multiplicativity of $L_k$ on the weight grading, $L_{2m}(\tilde p_{2m})=\binom{2m}{m}$.
- 22. `lem-shifted-character-multiplication-by-p-k` — exact products $p_\sigma^\#p_1^\#$ and $p_\sigma^\#p_k^\#$
  with the two equality cases and coefficient $f^\rho_{\sigma(k)}=k\,m_k(\sigma)$; also repaired the
  layer numbering and removed decimal source locators from steps (they collide with the step-reference
  grammar of the strict proof contract).

**Level 5–7 (all four authored, precheck+rendercheck clean):**

- 23. `lem-hermite-leading-terms-for-normalized-shifted-characters` — $\prod_kH_{m_k}(\eta_k)=\eta_\rho+R_\rho$
  with $\mathbb E[R_\rho]=O(n^{-1/2})$, by the exact multiplication recurrence compared with the Hermite
  recurrence; finite-expansion form of the remainder (Step-1 documented reformulation).
- 24. `prop-scaled-plancherel-profile-moments-converge-in-probability` — IvOl Thm 5.4: the weight-homogeneous
  test-function limit $L$, multiplicativity, $L=$ evaluation at $\Omega$, Chebyshev for the moments, and the
  pointwise identity transferring the moment convergence to $\int(\bar\lambda-\Omega)x^k$.
- 25. `thm-kerov-central-limit-theorem-for-normalized-cycle-characters` — IvOl Thm 6.1 by the moment method:
  Hermite-product moments $\to$ Gaussian ones, unitriangular monomial transfer, multivariate moment method
  with the Gaussian determinacy clause; AC exactly through that theorem and the target law.
- 26. `thm-plancherel-young-diagrams-converge-to-the-limit-shape` — IvOl Thm 5.5: localization event
  $E_n$, finite-moment topology applied to $(\sigma_{\bar\lambda}-\sigma_\Omega)/2$, subadditivity over
  finitely many moment events.
- 27. `rem-rsk-longest-increasing-subsequence-consequences-remain-rg11-owned` — ownership-boundary remark
  (no Baik–Deift–Johansson, Tracy–Widom, edge-statistics or sharp-constant claim); no proof section.

## Corrections, dependency changes and added suppliers

1. **`thm-shifted-character-basis-and-weight-filtration` (repaired).** The scaffold statement (ii)–(iii)
   conflates $\deg_1(p_\rho^\#)=|\rho|+m_1(\rho)$ with the weight $\operatorname{wt}(p_\rho^\#)=|\rho|+\ell(\rho)$
   and asserts the unique-top-term rule for $\deg_1$. Counterexample (from IK, imported in the item):
   $p_{(2)}^\#p_{(2)}^\#=p_{(2,2)}^\#+4p_{(3)}^\#+2p_{(1,1)}^\#$ has
   $\deg_1(2p_{(1,1)}^\#)=4=\deg_1(p_{(2)}^\#)+\deg_1(p_{(2)}^\#)$, so the top $\deg_1$ component has two terms;
   it is the **weight** filtration that has the unique top term $p_{\sigma\cup\tau}^\#$ with coefficient $1$
   ($\operatorname{wt}(2p_{(1,1)}^\#)=4<6$). The item now states both filtrations, that $\operatorname{wt}$
   dominates $\deg_1$, and the top-term rule for the weight filtration. The manifest statement was **not**
   edited (scope hash `ce856902…`); Step 4 prose/splice must reconcile the manifest statement with the
   authored one, and Step 5 should read the correction as the intended claim.
2. **`lem-hermite-orthogonality-and-monomial-expansion` (accept, manifest typo).** The manifest statement (ii)
   writes "$c_{m,m}=1$"; the correct coefficient of $H_m$ is $c_{m,0}=1$ (the item states $c_{m,0}=1$ and
   $c_{m,j}=\binom{m}{2j}(2j-1)!!$). The manifest statement is scope-bound and was left unchanged; recorded
   for the Step 4 prose review. (The manifest also writes "any $d\ge1$ and any $m_2,\dots,m_N$" where the
   item says $N\ge1$ and $m_1,\dots,m_N$ — index typo, same disposition.)
3. **`lem-standard-gaussian-is-determined-by-its-moments` (repaired).** The scaffold Stein sketch is
   replaced by a complete elementary proof of **both** clauses (Gaussian and the general analytic-MGF case):
   Markov + layer cake moment growth, Taylor propagation along $\mathbb R$, uniqueness from equal
   characteristic functions. Added published suppliers: `def-characteristic-function-of-a-real-random-variable`,
   `lem-moments-give-derivatives-of-the-characteristic-function`, `def-taylor-polynomial-and-remainder`,
   `cor-taylor-remainder-bound`, `cor-cauchy-schwarz-for-random-variables`,
   `cor-markov-inequality-for-random-variables`, `thm-layer-cake-formula-for-l-p-powers`,
   `thm-uniqueness-of-a-law-from-its-characteristic-function`,
   `lem-gaussian-even-moment-bound-for-brownian-increments`, `thm-of-archimedean`.
4. **`thm-multivariate-method-of-moments-for-a-determinate-limit` (repaired).** The invalid
   $\Sigma^{-1/2}$ reduction for singular covariance is replaced by second-moment tightness,
   Prokhorov/Skorokhod extraction, Vitali passage along the coupling, and Cramér–Wold + univariate
   determinacy for the Gaussian clause; AC use localised and declared.
5. **`lem-bounded-lipschitz-profile-moments-control-uniform-distance` (repaired).** Bump support radius
   corrected to the $\eta/2$-neighbourhood; complete proof with the Weierstrass replacement, mesh and
   explicit finite-moment thresholds.
6. **`thm-plancherel-young-diagrams-converge-to-the-limit-shape` (repaired).** The scaffold's
   "difference of two $1$-Lipschitz functions" step is replaced by applying the moment-topology lemma to
   $g=\tfrac12(\sigma_{\bar\lambda}-\sigma_\Omega)=\tfrac14(\bar\lambda-\Omega)$, which is $1$-Lipschitz by
   the triangle inequality; the containment threshold is $4\delta$.
7. **`lem-shifted-character-multiplication-by-p-k` (repaired).** Equality-case analysis split into the two
   IK configurations; the coefficient computation uses $z_\rho/(z_\sigma z_{(k)})=(k+\ell)!/(\ell!\,k^2m)$
   and the support count; step layers renumbered canonically.
8. **`def-normalized-shifted-character-basis-elements` (repaired).** Expectation and modulus bounds corrected
   (case formula for columns; exponent $(|\rho|-m_1(\rho))/2$), as recomputed from the character bound.
9. **B-page dependency levels recomputed after syncing manifest deps with the authored items.**
   `ex-plancherel-measure-on-partitions-of-three` 1→2 (it uses `prop-plancherel-weights-sum-to-one`) and
   `ex-rsk-shapes-of-all-six-permutations-in-s3` 2→3 (it matches `ex-plancherel-measure-on-partitions-of-three`);
   both manifest `deps` and `dependency_level` fields updated. No other level changed. `item-dependency-levels
   check --run` now reports no batch-12 error (the remaining run-wide errors are in other batches, see below).
10. **Manifest deps synced** with the item files for 24 of 27 items (actual suppliers used, including the
    published out-of-run suppliers added during authoring); `manifest-deps` is clean (`27 item(s), 0 error(s)`).
11. **Dangling wikilinks repaired:** `[[F5]]` in `thm-multivariate-method-of-moments-for-a-determinate-limit`
    (now a plain `[F5]` reference), and the two citations of the long id
    `thm-kerov-central-limit-theorem-for-normalized-cycle-character-observables` in
    `def-joint-convergence-and-normalized-cycle-character-observables` and
    `def-normalized-shifted-character-basis-elements` (now the actual id `…-cycle-characters`).
12. **`lem-shifted-character-multiplication-by-p-k`** gained the declared supplier
    `def-partition-young-diagram-and-conjugate-partition` (cited in its statement).
13. **Decimal source locators inside proof steps** ("Prop. 4.10", "Cor. 4.8", "IK Prop. 6.2", …) were
    replaced by references to the item's own facts in `thm-shifted-character-basis-and-weight-filtration`
    and `lem-shifted-character-multiplication-by-p-k`: the strict proof contract's token grammar reads
    `\d+\.\d+` as a step reference, so those locators made the step-input contract unsatisfiable.

## Pages, contracts and checks (actual results)

- **Pages created:** `library/representation-theory/plancherel-measure-and-asymptotic-young-diagrams.md`
  (24 A items in dependency order, `examples: []`) and `…-examples.md` (3 B items in `examples:`,
  `requires` its A page). rendercheck OK on both; fwdcheck `--items-file` reports the pair clean.
- `node tools/step3-decisions.mjs check --run frontier-40-geometry-braids-rep-27 --phase scope` →
  `closed: true, work: []` (the scope hash is unchanged by this authoring; no manifest
  statement/title/kind was edited).
- **Proof contracts:** `research/frontier-40-geometry-braids-rep-27-batch-12.proof-contracts.json`
  (version 1, scope = the 27 ids, 131 citation entries with exact quotes and uses, 96 derivations, 8
  boundary dispositions per item, all 8 cases either checked with anchored evidence or not_applicable
  with a specific reason). `node tools/proof-contract.mjs … --strict` → **0 error(s), 2 warning(s)**;
  the two warnings are the non-fatal `shotgun-bracket` style detector in
  `lem-bounded-lipschitz-profile-moments-control-uniform-distance` and
  `lem-hermite-orthogonality-and-monomial-expansion` (an early step cites several facts while later
  steps cite none; each fact is still cited at the step that uses it, and no fact is uncited).
- `node tools/tsx-run.mjs tools/precheck.mts <27 items>` → 19 checked, **0 failing** (8 items without a
  phase body report not-applicable).
- `node tools/rendercheck.mjs <27 items + 2 pages>` → OK, 29 files.
- `node tools/proof-layout.mjs <27 items>` → **27 items, 96 steps, 0 defects** (run once on the batch
  after the last edit).
- `node tools/content-policy.mjs <batch manifest>` → 27 scoped items, **0 error(s), 0 warning(s)**.
- `node tools/manifest-deps.mjs <batch manifest>` → 27 items, **0 error(s)**.
- `node tools/coverage-checklist.mjs <batch coverage> --require-destination` → 2 pages, 27 harvested
  results, **0 error(s), 0 warning(s)**.
- `node tools/source-fetch-check.mjs --coverage <batch coverage>` → **6/6 sources fetch-verified** (and
  resolved in check mode).
- `node tools/validate-plan.mjs research/plan-spec.json` → exit 0 (page order acyclic and consistent;
  257 later planned pages still carry no item list, as expected mid-run).
- `node tools/tsx-run.mjs tools/author-check.mts frontier-40-geometry-braids-rep-27 12` → **ok: true**
  (precheck, rendercheck, content-policy-items, proof-contract --strict all pass); receipt
  `research/frontier-40-geometry-braids-rep-27-author-check-12.json` (fingerprint refreshed after
  proof-layout).
- `node tools/depcheck.mjs --items-file <27 ids>` → **no finding names a batch-12 item** (dangling links,
  b-leaf and citation-not-in-deps findings all resolved for this pair). The run-wide command is currently
  red on other in-flight content (833 `published-unaudited`, 190 `cited-not-in-deps`, 141 `multi-home`,
  …, none in this pair).
- `node tools/fwdcheck.mjs --items-file <27 ids>` → OK, "selected item checks passed; complete global
  dependency/forward graph checks passed" (exit 0).
- `node tools/extcheck.mjs --items-file <27 ids>` → no batch-12 finding (no `proved_here: false` item or
  cone; the one run-level error is another item, `cex-no-claim-of-resolution-in-positive-characteristic`).
- `node tools/item-dependency-levels.mjs check --run frontier-40-geometry-braids-rep-27` → all batch-12
  labels current (the command currently exits 1 only for other batches' stale labels, e.g. the
  Burau/braid items `def-coloured-reduced-burau-matrix`, `thm-the-burau-determinant-formula-…`,
  `prop-burau-determinant-…`, `ex-the-burau-determinant-…`, `prop-khovanov-seidel-…`,
  `lem-a-nontrivial-five-strand-braid-…`, `ex-decategorifying-…`, `cex-equal-actions-on-k-zero-…`:
  another owner's in-flight pairs, not this batch).
- `node tools/frontier-dependency-ledger.mjs refresh --run …` → refreshed; the batch-12 cross-batch
  input remains `[]` (script-verified: **0** dependency edges from these 27 items to items of other
  batches in this run; every out-of-pair supplier is a published item on disk, 0 missing, 0 unpublished).
- **Step-3 item decisions recorded** for all 27 items (`node tools/step3-decisions.mjs record-item`,
  confidence 1, exact dependency arrays, concrete reasons): 7 `repaired`
  (`thm-shifted-character-basis-and-weight-filtration`, `lem-shifted-character-multiplication-by-p-k`,
  `def-normalized-shifted-character-basis-elements`,
  `lem-bounded-lipschitz-profile-moments-control-uniform-distance`,
  `lem-standard-gaussian-is-determined-by-its-moments`,
  `thm-multivariate-method-of-moments-for-a-determinate-limit`,
  `thm-plancherel-young-diagrams-converge-to-the-limit-shape`) and 20 `accept`.
  `step3-decisions check --phase final` lists **no** batch-12 work item (run-wide gate still open on
  other batches: 415/894 accepted, none of the remaining work is in this pair).

## Open obligations, escalations and published concerns

- **No unresolved supplier for this pair.** No assigned item has an unfinished in-run supplier; no
  decision was left escalated. The Step-1 note that `def-group-algebra` /
  `cor-regular-finite-principal-series-is-irreducible` are missing for batch 2 stands as an outside
  finding (not touched by this pair).
- **Step 4 reconciliation required (recorded above):** the manifest statement of
  `thm-shifted-character-basis-and-weight-filtration` (scope-bound, unedited) asserts the $\deg_1$
  unique-top-term rule, which is false; the authored item corrects it to the weight filtration and keeps
  both filtrations. The manifest statement of `lem-hermite-orthogonality-and-monomial-expansion` writes
  $c_{m,m}=1$ instead of $c_{m,0}=1$ (and a $d$/$N$ index typo). Both need prose/plan reconciliation in
  Step 4; no mathematical defect remains in the authored items.
- **Run-wide gates still red on other batches** (not this pair): the stale `dependency_level` labels listed
  above, and the run-level `step3-items` gate (894 items, 415 accepted, none of the missing ones here).
  The pair is complete on disk; thorough independent audit follows in Steps 5–8.
