# Batch 2 authoring notes — APP-RBF

## Inventory and dependency order

This batch contains the A page `radial-basis-and-kernel-interpolation` (17 items) and its B companion `radial-basis-and-kernel-interpolation-examples` (3 examples). The batch dependency input lists batch `2` at level `0` with no prerequisite batches. The item graph is acyclic; the manifest levels were recomputed from in-batch `deps` (out-of-run suppliers do not raise levels):

- Level 0: `def-rbf-kernels-sites-and-augmented-interpolation`.
- Level 1: `lem-rbf-augmented-system-is-invertible`, `def-normalized-matern-spectral-kernel`, `def-bessel-potential-space-and-restriction-quotient`, `lem-cone-sites-admit-stable-polynomial-norming-stencils`, `ex-duplicate-rbf-sites-singular-gram-matrix`.
- Level 2: `lem-matern-spectral-integral-and-normalization`, `alg-augmented-rbf-finite-difference-weights`.
- Level 3: `lem-matern-weighted-fourier-space-is-hilbert-and-injective`, `lem-separated-sites-matern-gram-bound`, `thm-rbf-fd-polynomial-reproduction-and-local-truncation`.
- Level 4: `lem-schwartz-dense-in-fourier-bessel-potential-space`, `lem-sobolev-zeros-bound-on-a-cone-domain`, `cor-matern-mesh-ratio-conditioning-bound`, `ex-small-fill-distance-can-have-poor-rbf-conditioning`.
- Level 5: `lem-matern-native-space-fourier-identity-and-positive-definiteness`.
- Level 6: `lem-restricted-matern-native-space-is-sobolev`.
- Level 7: `thm-native-interpolation-projection-and-power-function`.
- Level 8: `thm-matern-interpolation-fill-distance-error`.
- Level 9: `ex-smooth-scattered-surface-matern-rate`.

The batch-level input and item-level levels are distinct: the batch has no in-run supplier batch, while local `deps` order the new items. The A-page's `requires` entries (`finite-precision-direct-factorizations` and `polynomial-interpolation-and-remainder`) are retained from the dispatch; they are page context, not undeclared proof premises. Exact proof suppliers are declared on the items.

## Design reconciliation and scope

The repaired APP-RBF section of `research/plan-numerical-linear-track.md` controls scope and proof route; its complete proof packet and report are `research/numerical-analysis-remaining-71-2026-10-17-ROOT-rbf-planning-cycle1/PROOF.md` and `REPORT.md`. The `plan-spec.json` row agrees with the dispatch on page IDs, order, companion, and the two `requires` pages. The older namespace-normalized interface text in the design instead lists proposed same-frontier pair edges `NA-02` and `NA-10` and says no external page token is in `requires`. This is a recorded planning conflict. The current owner direction and batch dependency input govern this batch: no prerequisite batch edge is declared, and the two dispatched `requires` pages remain page context rather than logical item suppliers.

The chosen kernel is Matérn, with fixed arbitrary `d >= 1`, `nu > 0`, and `a > 0`; the carriers use the negative-sign `2 pi` Fourier convention and the restriction-quotient `H^(nu+d/2)(Omega)` norm. They state the uniform cone condition explicitly. The fill-distance error proof is independent of mesh ratio; a separate exact-arithmetic separation/conditioning estimate uses `q_X`. RBF-FD claims stop at polynomial reproduction and the Taylor truncation bound with the actual weight norm. No finite-precision guarantee for the augmented indefinite solve, PDE stability claim, Gaussian flat-limit claim, or RBF-QR claim is made. The native-space and quotient-space constructions keep their declared Axiom of Choice / Countable Choice dependencies; no choice-free claim is inferred for supplier results that do not state one.

## Source review and harvested results

All four A-page sources and the NeurIPS paper's full 13-page text were inspected; the coverage file records exact locators, supported items, harvested-result dispositions, and retrieval history: `research/numerical-analysis-remaining-71-2026-10-17-batch-2.coverage.json`.

- Rasmussen–Williams, *Gaussian Processes for Machine Learning*, Chapter 4, printed pp. 81–85, §§4.1.1 and 4.2.1, equations (4.5)–(4.6), (4.14)–(4.15): used for the Matérn convention and comparison; the local spectral integral/normalization is proved in `lem-matern-spectral-integral-and-normalization`. Mean-square regularity, general Bochner representation, and half-integer-only simplifications are out of scope.
- Fasshauer, *MATH 590: Meshfree Methods*, Chapter 13, §§2–3, printed pp. 18–25 and 34–36: supports the finite kernel-span/RKHS and Bessel-potential/Matérn native-space topics. The relevant statements are re-proved locally; Wendland and thin-plate native-space routes are out of scope.
- Narcowich–Ward–Wendland, “Sobolev Bounds on Functions with Scattered Zeros,” *Mathematics of Computation* 74 (2005), 743–763: the author-uploaded ResearchGate reader exposed 2,969 lines, and the complete relevant arguments in Theorem 1.1, §§2.1–2.2, §3.1.1, Lemma 3.1, and Proposition 3.2 were inspected. Its intrinsic fractional-norm and extension route is comparison only; the local Fourier restriction-quotient proofs supply the claims. The paper's derivative estimate and thin-plate arguments are out of scope.
- Fitzgibbon et al., “Radial Basis Function-Finite Differences,” NeurIPS 2022, complete 13-page paper, §2.2, equations (8)–(11): supports the local augmented moment system and polynomial reproduction discussion. The local truncation proof retains the actual weight norm; the paper's asymptotic rate is not adopted.

Mechanical retrieval caveat: direct NWW retrieval recorded the initial failure plus five retries, all HTTP 403. The required `source-fetch-check --stamp` could not stamp that ResearchGate URL (HTTP 403), although the full text was inspected in the web reader. Publisher/CiteSeerX/SciSpace direct PDF routes also failed with HTTP 403; one direct-link click returned a cache miss. No further recovery retry was made. The other three source URLs have fetch stamps in coverage. This is a source-provenance stamping blocker, not a missing mathematical premise: each affected claim has a complete local proof and the source is not used as an unproved supplier. Do not describe this as a clean four-source stamp.

## Scoped checks and handoff

The manifest, A/B pages, coverage, contracts, dependency evidence, notes, and cross-batch input are the batch deliverables. Proof contracts contain exact supplier excerpts and step-level claim/input mappings; they were updated to match the final spectral-integral proof numbering.

Final scoped results:

- `author-check.mts`: pass. Its precheck covered 16 proof-bearing items (4 definitions/algorithms were not applicable); rendercheck covered 22 files; content policy covered 20 items with 0 errors and 0 warnings; strict proof contract covered 20/20 items with 0 errors and 0 warnings.
- `proof-layout.mjs` on the 20 explicit item files: 20 items, 67 steps, 0 defects.
- `coverage-checklist.mjs --require-destination`: 1 page, 20 harvested results, 0 errors, 0 warnings. The inaccessible direct NWW stamp is recorded with its attempts/searches and three complete local alternative proofs; it is not counted as a proof premise.
- Scoped `dependencyLevels` check on the batch-2 manifest: 20 items, no errors or cycles, maximum item level 9. All 59 unique declared supplier item bodies are present.
- Step 1 decisions: 20/20 `ready`, all current against their item and supplier hashes, all `owner:false`.

No RBF/Matérn-specific finite-smoke check is registered in the current finite-smoke families. The finite B-page witnesses are verified directly in their numbered proofs; no unsupported check name or new registry entry was added. Readiness records are construction-readiness evidence only and do not approve proofs. The A-page inventory is below the 100-item cap. No tests were run.
