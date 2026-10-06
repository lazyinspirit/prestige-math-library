# Step 3b — pair audit, repair and authoring: heat-equation-maximum-principles-duhamel-and-smoothing

- Run: `frontier-39-analysis-30`, batch 1 (single batch pair).
- A page: `heat-equation-maximum-principles-duhamel-and-smoothing` (pde, order 458.013).
- B page: `heat-equation-maximum-principles-duhamel-and-smoothing-examples` (pde, order 458.014).
- Scope decision: owner `proceed` receipt
  `research/frontier-39-analysis-30-step3a-owner-heat-equation-maximum-principles-duhamel-and-smoothing.json`
  (sha256 `cf6afd4e…`) closes the current 40-item scope; Step 3a review receipt is `insufficient`
  for the pre-repair scope and is superseded by the owner integration recorded in the batch-1
  notes ("Owner scope repair integration").
- Owned IDs: 31 A + 9 B items (dispatch list of 40). All 40 are original scaffold IDs of the
  pre-author inventory (baseline `research/frontier-39-analysis-30-step3-auditor-baseline.json`),
  so each needs an ordinary Step 3b item decision; none is an auditor-created addition.
- Entry obligations (all open at entry):
  1. Author all 40 items with complete, cited arguments; keep every promised claim.
  2. Register items/pages in manifest (already present), coverage destinations, proof contracts,
     and dependency-level labels.
  3. Recheck Step 3a findings: (i) classical Duhamel forcing hypothesis (already repaired by the
     owner integration — recheck item 39's statement and its consumers); (ii) complex Gaussian
     identity chain for the complex-time kernel (declare the published holomorphy suppliers; the
     owner repair already added `thm-holomorphic-parameter-riemann-integral`,
     `cor-holomorphic-functions-are-closed-for-local-uniform-convergence`,
     `thm-tonelli-and-fubini-for-completed-product-measures` to the manifest deps).
  4. Run explicit-path precheck/rendercheck, content policy, strict proof contracts (batch 1),
     dependency-level check, coverage and manifest-deps gates; record per-item decisions with
     confidence 1 and examined dependency IDs.
- Checkpoint log: one row per authored item below; `OK` means item file complete, checked
  locally, and consistent with manifest statement.

## Checkpoints

| # | Item | Level | Status |
|---|---|---|---|
| — | entry: scope closed, report created, obligations listed | — | OK |
| 1 | `cor-a-nonzero-compactly-supported-final-profile-…-heat-flow` | 0 | authored + local checks; contract OK |
| 2 | `def-complex-time-heat-kernel-on-a-proper-sector` | 0 | authored + local checks; contract OK |
| 3 | `def-duhamel-heat-potential` | 0 | authored + local checks; contract OK |
| 4 | `def-heat-ball-and-its-slices` | 0 | authored + local checks; contract OK; **repair R1** |
| 5 | `def-parabolic-cylinder-and-parabolic-boundary` | 0 | authored + local checks; contract OK |
| 6 | `lem-backward-uniqueness-for-the-heat-equation-on-a-bounded-interval` | 0 | authored + local checks; contract OK; **repair R2** |
| 7 | `lem-forced-heat-energy-identity` | 0 | authored + local checks; contract OK; **repair R3** |
| 8 | `lem-ltwo-normalisation-of-sine-modes-on-the-interval` | 0 | authored + local checks; contract OK; **repairs R4, R5** |
| 9 | `lem-negative-semidefinite-hessian-at-an-interior-local-maximum` | 0 | authored + local checks; contract OK |
| 10 | `thm-energy-uniqueness-for-the-homogeneous-heat-equation` | 0 | authored + local checks; contract OK; **repair R6** |
| 11 | `thm-instantaneous-smoothing-of-lp-heat-flow` | 0 | authored + local checks; contract OK; **repair R7** |
| 12 | `lem-complex-time-heat-kernel-is-lone-differentiable-in-its-parameter` | 1 | authored + local checks; contract OK; **repair R8** |
| 13 | `lem-heat-ball-chains-reach-earlier-points` | 1 | authored + local checks; contract OK; **repair R9** |
| 14 | `lem-heat-ball-representation-formula` | 1 | authored + local checks; contract OK |
| 15 | `lem-strict-subsolution-perturbation-for-the-heat-operator` | 1 | authored + local checks; contract OK |
| 16 | `thm-backward-heat-solution-map-is-unbounded` | 1 | authored + local checks; contract OK |
| 17 | `thm-duhamel-lone-in-time-lp-forcing-estimate` | 1 | authored + local checks; contract OK; **repair R10** |
| 18 | `cex-a-mild-heat-solution-need-not-be-classical-at-initial-time` | 1 | authored + local checks; contract OK |
| 19 | `cex-classical-parabolic-corner-regularity-…` | 1 | authored + local checks; contract OK |
| 20 | `ex-backward-heat-exists-for-finite-dirichlet-eigenfunction-sums` | 1 | authored + local checks; contract OK |
| 21 | `ex-sine-modes-decay-under-dirichlet-heat-flow` | 1 | authored + local checks; contract OK; **repair R11** |
| 22 | `cor-forced-heat-solutions-are-smooth-away-from-the-source-time-diagonal` | 2 | authored + local checks; contract OK |
| 23 | `lem-submean-inequality-for-heat-subsolutions` | 2 | authored + local checks; contract OK |
| 24 | `rem-backward-ill-posed-does-not-mean-universal-nonexistence` | 2 | authored + local checks; remark (no proof) |
| 25 | `thm-complex-time-heat-operators-form-a-bounded-holomorphic-semigroup` | 2 | authored + local checks; contract OK |
| 26 | `thm-weak-parabolic-maximum-principle` | 2 | authored + local checks; contract OK |
| 27 | `cex-backward-heat-amplifies-small-high-frequency-errors` | 2 | authored + local checks; contract OK |
| 28 | `cor-comparison-and-uniqueness-for-the-bounded-cylinder-heat-problem` | 3 | authored + local checks; contract OK |
| 29 | `lem-whole-space-maximum-principle-under-gaussian-growth` | 3 | authored + local checks; contract OK; **repair R14** |
| 30 | `rem-the-heat-operator-family-is-an-analytic-semigroup-in-the-later-abstract-language` | 3 | authored + local checks; remark (no proof) |
| 31 | `thm-strong-parabolic-maximum-principle` | 3 | authored + local checks; contract OK; **repair R13** |
| 32 | `cex-final-time-face-is-not-part-of-the-parabolic-boundary` | 3 | authored + local checks; contract OK |
| 33 | `cor-strict-positivity-for-nontrivial-nonnegative-heat-solutions` | 4 | authored + local checks; contract OK |
| 34 | `thm-linfinity-stability-for-the-inhomogeneous-heat-equation` | 4 | authored + local checks; contract OK |
| 35 | `thm-whole-space-heat-uniqueness-under-gaussian-growth` | 4 | authored + local checks; contract OK; **repair R14** |
| 36 | `ex-heat-comparison-preserves-an-interval-of-values` | 4 | authored + local checks; contract OK |
| 37 | `thm-duhamel-principle-for-the-whole-space-heat-equation` | 5 | authored + local checks; contract OK |
| 38 | `rem-whole-space-zero-data-heat-solutions-without-growth-control` | 5 | authored + local checks (recorded result, `proved_here: false`) |
| 39 | `thm-inhomogeneous-heat-cauchy-formula` | 6 | authored + local checks; contract OK |
| 40 | `ex-duhamel-solution-for-a-time-independent-source` | 6 | authored + local checks; contract OK |

### Local repairs to the scaffold (recorded for the run)

- **R1 — `def-heat-ball-and-its-slices`, slice at the endpoint.** The scaffold summary says the
  time slice is "empty for $\tau\ge r^2/4\pi$". At $\tau=r^2/(4\pi)$ the defining inequality
  $\Gamma\ge r^{-n}$ is satisfied exactly at $y=x$, so the slice there is the single point
  $\{x\}$; it is empty only for $\tau>r^2/(4\pi)$. The item states the corrected endpoint (and
  explains it in a Remark). The enclosed region, its width bound and the boundary description are
  unchanged, so no promised claim is weakened. The manifest statement is left untouched because
  it is bound into the owner's Step 3a scope receipt.
- **R2 — choice declaration.** `lem-backward-uniqueness-for-the-heat-equation-on-a-bounded-interval`
  assumes Countable Choice in its statement but the scaffold dep list omitted
  `def-countable-choice`. Added to the item and to the batch-1 manifest entry (published
  out-of-run dependency, so the dependency level stays 0). The owner scope receipt is unaffected
  (statements unchanged); re-verified by reloading the manifest.
- **R3 — `lem-forced-heat-energy-identity`, domination inputs.** The scaffold dep list omitted the
  compactness/boundedness suppliers needed to turn the continuity of $u,u_t$ on the closed cylinder
  into the constant majorant for differentiation under the integral sign. Added
  `thm-heine-borel-rn`, `def-metric-compactness`, `thm-extreme-value-metric` (all published, level
  stays 0).
- **R4 — `lem-ltwo-normalisation-of-sine-modes-on-the-interval`, chain rule.** The differentiation of
  $x\mapsto\sin(mx)/m$ needs the chain rule; added `thm-chain-rule` to the item and manifest.
- **R5 — same item, choice tracking.** The norm clause reads the $L^2$ quotient norm through the
  Hilbert-space dictionary, which assumes Countable Choice; `def-countable-choice` was missing from
  the declared deps. Added it and stated the exact use in the final proof step (the numerical
  integral itself is choice-free).
- **R6 — `thm-energy-uniqueness-for-the-homogeneous-heat-equation`, continuity at $t=0$.** The
  scaffold strategy passes from $E'\le0$ and $E(0)=0$ to $E\le0$, which needs continuity of the
  energy at $t=0$; added `thm-dominated-convergence` to the declared deps.
- **R7 — `thm-instantaneous-smoothing-of-lp-heat-flow`, time-derivative identity and Young.**
  Identifying $\partial_t^m\Gamma_t$ with $\Delta^m\Gamma_t$ uses commutation of mixed partials,
  and the differentiated-kernel bound uses Young's inequality for a general kernel; added
  `thm-clairaut-schwarz-mixed-partials` and `thm-young-convolution-inequality` (both published).
- **R8 — `lem-complex-time-heat-kernel-is-lone-differentiable-in-its-parameter`, compactness.**
  The uniform-on-compacta claim uses sequential compactness of a compact set in $\mathbb R^2$; added
  `cor-bolzano-weierstrass-in-rn` (published).
- **R9 — `lem-heat-ball-chains-reach-earlier-points`, growth of the log.** The chain construction
  needs $\log(cN)\to\infty$, i.e. that $\log$ is strictly increasing and onto $\mathbb R$; the
  scaffold cited `thm-exponential-beats-every-polynomial` instead, which does not directly supply
  it. Added `thm-natural-logarithm-laws` (published).
- **R10 — `thm-duhamel-lone-in-time-lp-forcing-estimate`, strong measurability input.** Added
  `def-strongly-measurable-banach-valued-function` to the declared deps; the proof uses the
  definition's simple-function approximation for both the finite-$p$ and the $p=\infty$ cases.
- **R11 — `ex-sine-modes-decay-under-dirichlet-heat-flow`, choice declaration.** The $L^2$-norm
  clause inherits Countable Choice through the inner-product dictionary; added
  `def-countable-choice` to the item and the manifest entry.
- **R12 — `cor-forced-heat-solutions-are-smooth-away-from-the-source-time-diagonal`, dependency
  registration.** Added `def-duhamel-heat-potential` to the declared deps of the corollary (the
  item is one of the corollary's own suppliers at level 2), recorded here because the earlier
  checkpoint did not list it; a published in-run dependency, so the level stays 2.
- **R13 — `thm-strong-parabolic-maximum-principle`, local repairs to suppliers.**
  (i) `lem-heat-ball-chains-reach-earlier-points`: the statement now records explicitly that the
  chain points lie in $K\times[t_1,t_0]$ (the proof already constructed them on the graph of the
  path: $P_j=(\gamma(j/N),t_0-j\delta)$), which the strong principle needs in order to know
  $E_\rho(P_j)\subseteq Q$ at every chain step; the promised chain existence and enclosure
  clauses are unchanged, so this is a strict clarification of the finished item.
  (ii) `thm-strong-parabolic-maximum-principle`: the heredity step (level sets of $u=M$ are
  absorbing under admissible heat balls) is proved by the submean inequality for interior tops and
  by a translate-and-limit argument for a maximum on the final time face, together with the strict
  positivity of the lateral measure of the representation formula; the proof selects only finitely
  many parameters, so the declared Countable Choice is inherited, not newly used.
- **R14 — `lem-whole-space-maximum-principle-under-gaussian-growth`, strip subdivision.** The
  scaffold proof chose the barrier exponent $b=1/(4(T+\delta))>a$ unconditionally, which is
  impossible when $aT\ge1/4$; following Teschl's reduction (Theorem 6.18: "we can assume
  $T<1/(4a)$ without loss of generality"), the proof now states the case $aT<1/4$ explicitly and,
  when $aT\ge1/4$ (so $a>0$), splits $[0,T]$ into finitely many consecutive strips of length at
  most $T_0=1/(8a)<1/(4a)$ and applies the proved case successively to the shifted strips, whose
  Gaussian bound is inherited. The statement and its promised conclusion are unchanged; this only
  makes the strip iteration that the statement's parenthetical already announced explicit.

## Handoff

### Completed work

- All 40 assigned items (31 A + 9 B) are written in `items/` with complete arguments, cited
  suppliers, proof contracts, and recorded Step 3b item decisions (confidence 1, examined
  dependency IDs). A-page items: the 31 listed in the dispatch order; B-page items:
  `ex-duhamel-solution-for-a-time-independent-source`, `ex-heat-comparison-preserves-an-interval-of-values`,
  `ex-sine-modes-decay-under-dirichlet-heat-flow`,
  `cex-final-time-face-is-not-part-of-the-parabolic-boundary`,
  `cex-classical-parabolic-corner-regularity-needs-compatible-initial-and-boundary-data`,
  `cex-backward-heat-amplifies-small-high-frequency-errors`,
  `cex-a-mild-heat-solution-need-not-be-classical-at-initial-time`,
  `ex-backward-heat-exists-for-finite-dirichlet-eigenfunction-sums`,
  `rem-whole-space-zero-data-heat-solutions-without-growth-control` (recorded result,
  `proved_here: false`, `external_dependency` to Hunter Example 5.7).
- Pages written: `library/pde/heat-equation-maximum-principles-duhamel-and-smoothing.md`
  (`items:` = the 31 A ids) and
  `library/pde/heat-equation-maximum-principles-duhamel-and-smoothing-examples.md`
  (`examples:` = the 9 B ids), both `status: draft` with page-summary bodies.
- Manifest (`research/frontier-39-analysis-30-batch-1.pages.json`): all 40 dep lists brought into
  agreement with the item frontmatter (sibling pairs untouched); dependency levels unchanged.
- Coverage (`…-batch-1.coverage.json`) and contracts
  (`research/frontier-39-analysis-30-batch-1.proof-contracts.json`, 40 scoped items) up to date.

### Checks actually run (final pass, after the last item and manifest edit)

- `node tools/proof-layout.mjs items/<all 40 changed paths>` — 40 items, 137 steps, 0 defects.
- `node tools/tsx-run.mjs tools/precheck.mts items/<all 40>` — 33 proof-bearing items checked,
  0 failing (the 7 definitions/remarks are `n/a`).
- `node tools/rendercheck.mjs items/<40> library/pde/<2 pages>` — 42 files, OK.
- `node tools/content-policy.mjs …batch-1.pages.json` — 40 scoped items, 0 error, 0 warning.
- `node tools/proof-contract.mjs …batch-1.proof-contracts.json --strict` — 0 error, 0 warning,
  40/40 items.
- `node tools/manifest-deps.mjs …batch-1.pages.json` — 40 items, 0 error.
- `node tools/item-dependency-levels.mjs check --run frontier-39-analysis-30` — no entry of this
  pair is flagged; the run-wide run reports 33 mismatches confined to the sibling Hardy/BMO pair
  (see open obligations).
- `node tools/coverage-checklist.mjs …batch-1.coverage.json --require-destination` — 1 page,
  74 harvested results, 0 error, 0 warning.
- `node tools/validate-plan.mjs research/plan-spec.json` — page order acyclic and consistent for
  the 1420 asserted pages (warnings concern other pages without item lists).
- `boundary-audit --fail-on-contradicted --fail-on-template` — no template reuse, no contradicted
  dispositions.
- `citation-fidelity --fail-on-missing-quote` — every recorded quote appears in its cited item;
  no widening candidates.
- `gate-liveness --run frontier-39-analysis-30` — proof-contract (40 items),
  coverage-checklist (74 results) and precheck (20323 items) live; finite-smoke vacuous because
  this pair's contracts carry no finite/direct-check obligations.
- `frontier-dependency-ledger.mjs refresh --run frontier-39-analysis-30` — refreshed.
- `step3-decisions.mjs record-item` run once per item (40 receipts
  `research/frontier-39-analysis-30-step3b-review-<id>.json`, decisions `accept`/`repaired`,
  confidence 1).

### Added suppliers

- None. Every repair used items already published or already in this pair; no new item or page
  was created, and the owner scope receipt (`cf6afd4e…`) remains current because no manifest
  `id`/`kind`/`title`/`statement` was changed.

### Published concerns

- None found in this pass. Two latent points for Steps 5–8, recorded rather than resolved:
  (i) `lem-heat-ball-representation-formula` and its consumers use the spherical surface integral
  for $n\ge1$ with the standard degenerate convention at $n=1$ (the spatial sphere is a two-point
  set); the underlying space-time shell integral is covered by
  `def-surface-integral-on-a-compact-c-one-hypersurface` for every $n\ge1$.
  (ii) `thm-duhamel-principle-for-the-whole-space-heat-equation` proves $u_t=\Delta u+f$ for a
  bounded uniformly spatially Hölder forcing by the kernel-cancellation argument; the
  time-independence substitution in `ex-duhamel-solution-for-a-time-independent-source` is
  recorded through finite-valued approximation of the continuous curve, and no stronger
  change-of-variables theorem for Bochner integrals is claimed.

### Open obligations and pre-splice plan mismatches (for Step 4)

- Run-wide `item-dependency-levels.mjs check --run frontier-39-analysis-30` fails with 33
  mismatches, all in the sibling Hardy/BMO pair (`def-radial-and-nontangential-maximal-functions-…`,
  `thm-calderon-zygmund-operators-map-hone-to-lone-under-cancellation`, `thm-real-hone-bmo-duality`,
  …): their declared levels are lower than the computed ones. This pair is not touched here; the
  mismatch is reported for the Step 4 reconciler without hiding the unresolved dependency debt.
- The Step 3b receipts bind the current item hashes; any further edit to a receipted item
  invalidates its receipt and requires re-recording before the final Step 3 gate.
- `finite-smoke` is vacuous for this pair (no finite obligations in the contracts); if the engine
  expects at least one finite obligation per batch, that is a scope decision for the owner.
