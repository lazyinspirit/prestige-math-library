# Batch 106 authoring notes

Run numerical-optimization-dynamics-2026-10-16; pair T18, Langevin splittings and invariant measure error.

## Inventory and ordering

- A page: langevin-splittings-and-invariant-measure-error, 10 authored items.
- B page: langevin-splittings-and-invariant-measure-error-examples, 4 examples.
- The complete item inventory and exact direct deps are in the batch manifest. Levels were computed before carrier authoring and rechecked after the local proof changes: def-underdamped-langevin-equation-and-canonical-gibbs-density: 0; alg-baoab-underdamped-langevin-splitting: 1; lem-exact-ornstein-uhlenbeck-momentum-substep: 1; lem-stable-gaussian-autoregression-invariant-law: 0; thm-underdamped-langevin-canonical-measure-is-stationary: 1; thm-harmonic-baoab-invariant-law-and-stability-limit: 2; lem-baoab-one-step-error-moment-bounds: 2; thm-baoab-finite-time-strong-order-one: 3; lem-baoab-one-step-weak-expansion: 2; thm-baoab-finite-time-weak-order-two: 3; ex-harmonic-baoab-thermostat-covariance: 3; ex-unstable-baoab-step-has-no-invariant-law: 3; ex-constant-potential-has-no-canonical-gibbs-probability: 1; ex-ula-and-baoab-have-distinct-harmonic-variance-bias: 3.
- No dependency cycle was found in this pair. The A page remains within the 100-item limit.

## Controlling-plan conflicts and scope

- The controlling owner direction and its T18 contract amendment supersede stale task/design language that asks for a general Poisson/Lyapunov invariant-bias theorem before a harmonic theorem. The local proof closure is the complete scalar linear harmonic/OU theorem. No general nonlinear BAOAB invariant-bias order or superconvergence claim is made.
- The page-level requirements in plan-spec.json match the design IDs: langevin-monte-carlo-mala-and-ula, milstein-stochastic-taylor-and-iterated-integrals, and imex-and-operator-splitting-methods. The published ULA Gaussian variance is reused only for the overdamped comparison example; its state and transition are kept separate from BAOAB.
- The mathematical convention follows the controlling amendment: dq=M^{-1}p dt, dp=-∇V(q) dt-γp dt+√(2γβ^{-1}M)dW, with BAOAB ordered B/2–A/2–O–A/2–B/2. The French course text uses a mass-scaled friction convention; all local derivations use the convention above.
- Finite-time strong order one and weak order two are proved only under global smoothness/growth and finite-moment hypotheses stated in the items. Gibbs stationarity is proved under integrability, decay and finite second-moment conditions; existence of a stationary law for the continuous SDE is not converted into an ergodicity claim.
- The algorithm defines invariant-distribution bias, burn-in error, correlation error, sampling error, and the separate finite-bit Gaussian-generation error. No rate is claimed for these simulation errors.

## Cross-batch inspection and unresolved interface

- T04 / batch 98 is now authored on disk. The manifest is nonempty. I inspected def-exact-split-flows-lie-strang-and-bracket, lem-lie-strang-local-error-expansions, and thm-lie-strang-global-orders-and-subflow-error. These give exact finite-dimensional deterministic A/B flow compositions and their compact-tube C3 Lie/Strang defects/global orders. They do not analyze the stochastic O semigroup or prove the BAOAB weak operator expansion. The BAOAB claims are derived locally; the page-level interface is recorded as verified for context, without inferring acceptance.
- T13 / batch 9 remains open for owner reconciliation. I inspected def-milstein-scheme-and-iterated-integrals, lem-iterated-brownian-integral-identities, lem-bounded-sde-increment-moments, lem-milstein-local-defect-bounds, lem-stochastic-local-to-global-rms-bound, and thm-commutative-milstein-strong-order-one. The actual theorem is for the declared Milstein/commutative-noise setting and its local/global bounds do not directly match BAOAB’s additive OU coupling, state-weighted local residual estimates, or symmetric weak composition. The BAOAB local moments, strong recurrence, and weak expansion are independently proved in this batch. The controlling page-level T13 edge is kept open; no supplier excerpt or acceptance is invented.
- The exact unresolved page-level supplier is milstein-stochastic-taylor-and-iterated-integrals; item IDs inspected and required hypothesis checks are recorded in the dependency-input record and cross-batch file.

## Scheduling-input discrepancy

- The dispatch provides current scheduling input SHA-256 9c4f54e22b01494e9d725a638d260f789d7e145c8e17fa9d62cf3ddc5d72c26f. The shared on-disk dependency-level artifact currently declares 04a57edb982e756b2bdf7b54936383b64b17fbc7a6e2709dddb29d8083b46327. Both values are preserved in the dependency-input record; the shared scheduling artifact was not edited.

## Source retrieval history

- The Roux–Rodts–Stoltz 274-page course text and relevant §§5.2.1–5.2.2 were read through full-text browser PDF retrieval. The current author URL returned HTTP 404 in source-fetch-check --stamp; because the same source was listed in both A and B page harvests, the checker made six requests per page record (12 total). This duplication is disclosed in each source-resolution record; no further retries were made. The source is dropped as a fetch-verifiable backing, while its read status and exact alternate local arguments are preserved.
- The planned Springer textbook chapter record was inspected, but its PDF endpoint returned a cookie-consent interstitial after the one browser retrieval failure and five recovery attempts. The seven-page document found is only the book contents, not Chapter 7. The unseen chapter is not cited as mathematical support; its source-resolution record supplies alternatives for every batch item.
- The retrieved full article sources and verification stamps are in the batch coverage file; a matching harvested copy is the source-coverage file. Full relevant reasoning and method mismatches are recorded per source there.
- The coverage checklist reports its advisory low-yield warning (5 of 14 harvested source results marked included on A). The non-included entries are explicitly inline or out-of-scope because they describe other compositions, formal general invariant expansions, or unrelated guarantees; the complete T18 scope remains represented by the 10 A items and 4 B examples. This is an author disposition, not Alpha acceptance.

## Readiness

Local definitions, proof arguments, examples and proof contracts are complete. All 14 Step 1 item records are escalated with owner=false because the required T13 page-level interface remains open; the batch records do not constitute proof approval or independent review.

## Scoped check results

- Scoped item dependency levels: 14 items, zero errors; levels 0–3 match the manifest.
- Precheck: 12 proof-bearing items passed; the definition and algorithm are not applicable.
- Proof layout: 14 items, 36 numbered steps, zero defects.
- Proof contracts: 14/14 items checked, zero errors and warnings.
- Focused depcheck: zero errors and warnings; rendercheck: 16 changed item/page files, zero errors or warnings; content-policy: 14 items, zero errors or warnings.
- Source fetch check: 10/16 URL records fetched and stamped; all 16 records resolved, with six page-scoped documented drops (two copies each of the ENPC source and Springer chapter). The coverage checklist has zero errors and one advisory low-yield warning described above.
- The first whole-run dependency-level check reported 23 mismatched labels in batch 101 (outside batch 106). A final recheck after concurrent updates passes: 2,009 items across 214 pages, maximum level 16; batch 106 itself remained at 14 items with zero errors. No batch-101 files were edited here.
