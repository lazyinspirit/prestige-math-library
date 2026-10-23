# Batch 36 authoring notes — Measurement and assimilation model adoption

Run `fluid-dynamics-all-47-2026-10-23`; role `beta`; batch `36`; pair `fd-pda01` / `fd-pda01-examples` (orders 677–678). The two page files contain YAML frontmatter only. The four manifest `statement` values mirror the complete authored public sections; references remain after each complete statement. No page summaries were added.

## Plan and design comparison

Read design §1179–1215 in `research/plan-fluid-dynamics-refresh-track.md` and the `fd-pda01` entry in `research/plan-spec.json`. Title, category, order, A/B pairing, and page prerequisites agree. The plan-spec item arrays are blank pre-authoring placeholders, while the design names A-page `post-fd-fluid-observation-and-noise` and `pthm-fd-conditional-fluid-filter-law`, and B-page `ex-fd-symbolic-single-sensor`. This scaffold difference is recorded; no substantive scope or interface conflict was found. Added the A-page mathematical helper `lem-fd-finite-modal-field-has-finite-second-moment` because the field-law pushforward needs a proved finite-moment input before the consuming postulate/theorem. The owner authoring-direction override file was absent.

The adopted regime is finite-horizon, finite-modal, linear-Gaussian fluid velocity with ideal weighted spatial sensors in a fixed Newtonian Cartesian inertial chart. SI conventions are explicit. The postulate is an assumption, not a report about a real apparatus or a universal fluid law. The theorem is conditional on AC, mutually independent Gaussian initial/process/observation vectors, positive-semidefinite state/noise covariances, and positive-definite innovations wherever inverted. It proves the exact coefficient conditional law transfers through the continuous modal map to an everywhere-defined field regular conditional kernel, including null histories. The example is a symbolic one-mode, one-sensor calculation, including the zero-prior-variance case; it claims no measured data.

## Authored items and dependencies

- `lem-fd-finite-modal-field-has-finite-second-moment` — A, level 1, `domain: mathematics`. For a measurable finite-second-moment coefficient vector and a finite family of (L^2) modes, proves continuity/strong measurability of the modal field map, the pushforward probability law, and the second-moment identity and bound. Direct suppliers: `def-fd-random-velocity-sensor-law`, `def-probability-measure`, `def-strongly-measurable-banach-valued-function`, `def-nonnegative-lebesgue-integral`, `thm-increasing-simple-approximation-of-a-nonnegative-measurable-function`, `thm-monotone-convergence-for-the-integral`, and `thm-cauchy-schwarz-and-the-euclidean-norm`. All prerequisites are mathematical.
- `post-fd-fluid-observation-and-noise` — A, level 2. Adopts the finite-dimensional coefficient transition, weighted spatial observation, independent Gaussian assumptions, PSD covariance convention, units, AC convention, and stated empirical/model limits. Direct suppliers: `def-fd-quantity-and-frame-conventions`, `def-fd-random-velocity-sensor-law`, `lem-fd-sensor-pairing-is-well-defined`, the local moment lemma, `def-fd-fluid-coefficient-observation-model`, and `def-axiom-of-choice`.
- `pthm-fd-conditional-fluid-filter-law` — A, level 3. First proves (L_k(\Phi_k(a))=H_ka) from finite sensor-pairing linearity and the declared matrix entries; then matches the exact coefficient-filter hypotheses; finally proves the field pushforward-kernel and conditional-event identities. Direct suppliers add `prop-fd-linear-fluid-filter-interface` and `def-state-space-filtering-laws` to the postulate and shared mathematical inputs.
- `ex-fd-symbolic-single-sensor` — B, level 4. Specifies SI units, verifies (S_\psi(\phi)=1), derives the scalar innovation/gain/covariance update, and applies the conditional theorem. Direct suppliers: frame conventions, sensor definition and pairing lemma, the postulate, theorem, and AC.

The declared levels were recomputed over actual current-run item edges: 1, 2, 3, 4 respectively. Run batch-level projection gives batch 36 level 2 with `requires: [3, 32, 35]`. The cross-batch record contains all 16 expected direct item/page edges, all `verified`, zero open edges. Supplier interfaces and current Step 1 records were checked for `def-fd-quantity-and-frame-conventions`, `def-fd-random-velocity-sensor-law`, `lem-fd-sensor-pairing-is-well-defined`, `def-fd-fluid-coefficient-observation-model`, and `prop-fd-linear-fluid-filter-interface`; each is currently `ready`. In particular, the frame-conventions carrier now has a current ready record and matches the use. Published mathematical prerequisites (`def-state-space-filtering-laws`, `def-axiom-of-choice`, and the real-analysis/probability suppliers) were inspected at their actual statements/proofs; their absence from this run's readiness records is not treated as a gap.

## Sources and harvested results

All full texts below were retrieved and the complete relevant arguments/passages read. The batch coverage records five page/source entries, all fetch-verified, with no drops. Repeated A/B entries reuse the same full-text retrieval evidence.

- [Law, Stuart, and Zygalakis, *Data Assimilation: A Mathematical Introduction*](https://arxiv.org/pdf/1506.07825v1), full 158-page PDF. Chapter 2 §§2.1 (printed pp. 25–26) and 2.4 (pp. 37–38), and Chapter 4 §4.1 (pp. 78–80), including the Kalman update proof. Included for the postulate's finite state/additive observation convention and theorem's filtering/Kalman context; inline for the scalar example. Its stated positive-definite covariance/full-row-rank setting is narrower than the theorem; the inspected exact local coefficient-filter supplier supplies the singular state/noise case.
- [Särkkä, *Bayesian Filtering and Smoothing* (2013)](https://users.aalto.fi/~ssarkka/pub/cup_book_online_20131111.pdf), author's full 252-page first-edition PDF. Chapter 4 §§4.1–4.3 (printed pp. 51–61), including state-space assumptions, conditional-independence reasoning, and the Kalman proof; §4.3 pp. 56–60 for the scalar random-walk example. Included as an independent filtering treatment for the postulate/theorem and inline for the example. The source's covariance assumptions are recorded; it does not support a claim about actual fluid measurements.
- [Tao, *An Introduction to Measure Theory*](https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf), full 265-page PDF. §1.4, Exercise 1.4.38 (printed pp. 103–104) states the pushforward integral identity as an exercise; that identity is proved locally in the helper. Theorem 1.4.44 (pp. 107–108) and its complete proof support the monotone-convergence step. Disposition: inline mathematical support, not a substitute for the local argument.

`source-fetch-check --coverage research/fluid-dynamics-all-47-2026-10-23-batch-36.coverage.json` reports 5/5 fetch-verified and 5/5 resolved. Each recorded retrieval attempt succeeded; there are no documented failed fetches or source drops. Coverage records retrieval/reading only, not proof approval or empirical validation.

## Contracts, readiness, checks, and remaining run-wide blockers

`research/fluid-dynamics-all-47-2026-10-23-batch-36.proof-contracts.json` contains the four finished contracts with actual derivations, exact supplier excerpts, input labels, boundary cases, and applicable finite checks. The precheck's proposed phase normalization was adopted for the theorem/example (`1.1`, `2.1`, `3.1`) and all references/contracts were aligned. Step 1 records for all four assigned items are now `ready` (`owner: false`); these record completed authoring inputs, not independent review approval. No assigned prerequisite remains open or escalated.

Final scoped results:

- `precheck.mts`: 4/4 pass.
- `proof-contract.mjs --strict`: 4/4, 0 errors, 0 warnings.
- `proof-layout.mjs`: 4 items, 8 steps, 0 defects.
- `rendercheck.mjs`: 6 files clean, including both pages.
- `content-policy.mjs`: 4 scoped items, 0 errors/warnings.
- `manifest-deps.mjs`: 4 items, 0 normalized, 0 errors.
- focused `depcheck.mjs`: 0 errors, 0 warnings; no scoped dependency cycles.
- `source-fetch-check`: 5/5 fetch-verified.
- Item levels and cross-batch edge audit: all four declared levels match; 16/16 expected edges present; 0 open.

Two broader checks remain blocked outside this batch's write scope. `proof-contract-coverage.mjs` stops at `Empty or invalid frontier page inventory fd-ples01-examples`; this batch's strict contract check passes. `batch-dependency-levels.mjs check --run fluid-dynamics-all-47-2026-10-23` reports stale shared level evidence. The recomputed batch-36 row is still level 2, requiring batches 3, 32, and 35; the recorded input hash is `f76e98843f0c5a98bccb19bca557191701576dd4092e4c551683412408c3322b`, while the latest current recomputation is `2959642f814d4dfc5a1ee07199006fb72845d56939ba626ff1ab59eba6ede50c`. The graph delta is one owner-side row: batch 29 now directly requires batch 3 (its level remains 5); all other batch rows, including batch 36, match. The shared dependency-level file and unrelated frontier inventory were not edited. Owner action: repair/refresh those run-wide inputs, then rerun the whole-run checks. Independent review and later gates remain outstanding.


### Owner statistical-interface propagation closure (2026-10-22T16:08:46.155Z)

Owner /root closes the actual source32/33 scientific consumer propagation using research/fluid-dynamics-all-47-2026-10-23-owner-random-sampling-readiness-resolution/final-consumer-scope.json. Final drained36 spatial-H sensor/model and44 measurable observable/law-shift uses preserve the repaired interfaces; no source edits are needed. Earlier36 proof-tag/delimiter concerns were fixed in native final bytes. Native readiness bindings were freshly authenticated. Independent review/native gates remain required.
The broader navigation chain through46/47 introduces no logical statistical supplier use; those batches retain their separate native readiness obligations. Original source-reading/check attestations remain attributed to native authors.
