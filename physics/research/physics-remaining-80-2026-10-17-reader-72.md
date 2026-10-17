# Step 3a reader report — batch 72

Run: `physics-remaining-80-2026-10-17`  
Role: independent reader  
Scope: `tgr-g02` and `tgr-g02-examples`

## Opened inventory

- Batch manifest: `research/physics-remaining-80-2026-10-17-batch-72.pages.json`.
- Assigned pages: `library/thermodynamics-and-general-relativity/tgr-g02.md` and `library/thermodynamics-and-general-relativity/tgr-g02-examples.md`.
- Page context opened: `tgr-g01`, `tgr-i01`, `tgr-mg01`, and the mathematical supplier page `tgr-mg02`.
- All eleven assigned items, read in the relevant supplier-to-consumer order:
  - `post-tgr-static-spherical-fluid-preparation`
  - `pthm-tgr-static-tov-local-branch`
  - `post-tgr-incompressible-star-preparation`
  - `post-tgr-gravitating-entropy-variational-preparation`
  - `pthm-tgr-static-constant-density-star`
  - `pthm-tgr-gravitating-entropy-criticality`
  - `post-tgr-finite-bath-exchange-preparation`
  - `pthm-tgr-negative-capacity-exchange-stability`
  - `ex-tgr-physical-star-half-compactness`
  - `cex-tgr-physical-critical-star-limit`
  - `ex-tgr-physical-finite-bath-attraction`
- Claim-relevant local suppliers opened: `def-tgr-framework-units`, `def-tgr-local-fluid-state`, `def-tgr-spherical-static-state-domain`, `lem-tgr-even-radial-center-regularity`, `lem-tgr-spherical-einstein-tov-reduction`, `thm-tgr-tov-regular-center-local-existence`, `post-tgr-local-material-thermodynamics`, `def-tgr-spherical-entropy-constraint-functional`, `thm-tgr-constant-density-star-verified`, `thm-tgr-constrained-entropy-tov-criticality`, `def-tgr-gravitating-phase-reference`, `lem-tgr-annular-radial-integration`, `def-tgr-regulated-kepler-shell-law`, `lem-tgr-regulated-kepler-shell-law-normalization`, `post-tgr-kepler-microcanonical-volume-preparation`, `thm-tgr-regulated-kepler-negative-capacity`, and `lem-tgr-finite-bath-exchange-stability`.
- Exact relevant published mathematical supplier statements also opened include the curvature convention, Levi-Civita and contracted Bianchi results, compact ODE continuation, differentiation under a compact-parameter integral, the Euclidean implicit function theorem, the smooth bump and uniform integral error lemmas, the zero-integral criterion for nonnegative continuous functions, Picard–Lindelöf and ODE extension, the compact-Jordan change-of-variables results, and the calculus and integration statements used by the local proofs.
- Read the source passages used as context: Chavanis, *Statistical mechanics of self-gravitating systems in general relativity: I*, Sec. III.A, Eqs. (97)–(108), and Sec. III.E, Eqs. (138)–(163), from `research/physics-remaining-80-2026-10-17-owner-gate52-tgr-coverage51-69-72/sources/chavanisI.txt`; MIT 8.962 Lecture 20–21 passages on the static-fluid equations and uniform-density branch from the corresponding `sources/mit.txt`. These passages support the stated contextual attributions; the local mathematical proofs, not the citations, establish the conditional deductions.
- Reviewed the assigned proof-contract entries and the batch notes as navigation/evidence records, not as verdicts.

## Review results

### `tgr-g02` — no confirmed defect

The page summary accurately describes the adopted static-fluid model and distinguishes its local TOV construction from global-surface or stability claims. The constant-density branch is properly kept separate from realistic causal equations of state and from a general compactness theorem. The entropy item is correctly described as a first-variation result, and the finite-bath result is correctly confined to its selected scalar exchange model. No experiment or empirical premise is included, and no model conclusion is presented as an observation.

The local TOV proof's common interval, compact pressure margin, positive denominator, regular center and continuity extension of the Einstein equations are supplied with the required hypotheses. The constant-density proof verifies the displayed profiles, vacuum match and absence of a delta-supported surface term only for `0<u<8/9`. The entropy proof matches the supplied profile-curve and fixed-constraint hypotheses and proves only first-variation criticality. The shell calculation and negative-capacity result use the stated finite branch and Gibbs-volume convention; the exchange-stability conclusion uses only the adopted ODE. The derived examples and counterexample preserve those scopes.

### `tgr-g02-examples` — no confirmed defect

The summary accurately describes the half-compactness specialization, the family-specific pressure divergence as the branch endpoint is approached, and the half-capacity bath example. The three examples are supported by the assigned physical results and contain no empirical observation or universal stellar-stability claim.

## Edits and remaining defects

- No source edits were made. No confirmed repairable defect was found in an assigned item or the assigned A-page prose.
- No confirmed defect remained to report in an uneditable dependency.
- Because no item was edited, no proof-contract change, reflow, precheck, or proof-layout run was applicable.

## Coverage limits

The review covered both assigned pages, every assigned item, and the claim-relevant supplier statements and proof arguments listed above. It did not audit unrelated items in the upstream page prerequisite chains or every ancillary clause and transitive dependency of the broad framework-units definition. This batch contains no experiment item or empirical premise, so there was no observational dataset or statistical inference to assess. No access or mathematical-understanding blocker remained for the assigned claims.
