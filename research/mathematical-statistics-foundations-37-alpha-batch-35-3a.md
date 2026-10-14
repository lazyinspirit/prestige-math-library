# Batch 35 Step 3a adjudication

Run: `mathematical-statistics-foundations-37`; group: `batch-35`.

## Completed level 0 obligation

`refuter:35:1`: **confirmed_fatal**, repaired with confidence 1; defect `msf37-batch35-3a-test-supermartingale-source-locator`. Howard et al., arXiv:1810.08240v9 p.5, Definition 1 (PDF page index 4, lines 239–247) defines the sub-psi condition, not test supermartingales. Removed that inaccurate reference; retained Ramdas et al., arXiv:2210.01948 §§2.2–2.4, printed p.5, which supplies the common-law supermartingale class and distinction from e-processes. Its M0=1 convention is stricter than this item’s explicitly stated initial-expectation convention; the latter is sound and directly proved sufficient by the local Ville argument. Definition and dependencies unchanged.

Source checks: https://arxiv.org/pdf/1810.08240 (Definition 1, printed p.5); https://arxiv.org/pdf/2210.01948 (sections 2.2–2.4, printed p.5). Read the complete relevant definitions. The current definition raw SHA-256 before repair was `167734d70e664ae916c8a1d11d1b0421cf7ef35bb7052e52c3e93bc9b962d184`, matching both pre/post item fingerprints; the scope separately records observed_sha256 `5e7e6b5443b62de48480c643c9b3e6e83f1005c2376d89ac3c098065189b4435`. The inaccurate reference was still present in the independently opened current bytes. Both pre/post snapshots agree for all item/contract/manifest fingerprints: the reader made no repairs.

Reviewed exact filtration, supermartingale, and AC definitions. Conditions apply separately under every law; integrability, adjacent-time conditional inequality (explicit in the second paragraph), initial expectation at most one, and time zero are coherent. Empty null family is vacuous; zero process is allowed; law-dependent exceptional null sets are permitted. AC is inherited from the conditional-expectation supplier. Only references changed, so no Statement/Definition or consumer interface changed, and no contract or manifest claim requires revision. No published defect found.

## Review scope

Five HIGH/CRITICAL reviews completed below in generated order. No extra decisions are owed for untouched, unflagged risk-only carriers. No page obligations or outside-scope defect alerts arose. Existing frontier ledger has no record for these owned consumers requiring a changed disposition; supplier interfaces are unchanged. No published carrier was edited.

## Level 1: mixture risk review

Reviewed all three proof steps and exact cited definitions, bounded optional sampling, and Tonelli. Probability measures pi and P are sigma-finite. Positive-part replacement is jointly measurable and agrees a.s. separately for each fixed lambda under every null law; no common component null set is needed. Optional sampling at deterministic 0,t gives expectation at most one; Tonelli implies the measurable infinite-integral set is null under every null law. Setting it to zero gives one common finite adapted version without completed filtrations. Integrating each component event inequality over pi is valid; conditioning tested on {U>Etilde_(t-1)} and positive level sets proves the adjacent-time inequality. Handles zero components, point-mass mixtures, empty null family vacuously, and nonattained/infinite integrals correctly. AC inherited only through conditional expectations/optional sampling. Reader found no defect; refuter finding concerns only definition bibliography and was corrected without altering the supplier claim. No unresolved prerequisite or mathematical defect.

Dependencies read: `def-nonnegative-test-supermartingale`, `thm-optional-sampling-for-bounded-stopping-times`, `thm-tonelli-theorem-for-sigma-finite-product-spaces`, both conditional-expectation definitions, and `def-axiom-of-choice`. Optional sampling’s finite predictable telescope and Tonelli’s simple approximation/MCT proofs support the exact uses. External references are contextual; the complete argument is supplied locally.

## Level 1: Ville risk review

Read all five proof steps, stopping-time definition, bounded optional-sampling proof, continuity-from-below proof, and AC/supermartingale definitions. Hitting events are finite unions in F_n; truncation is bounded even when the first hit is infinite. Optional sampling uses 0 <= tau wedge N, and nonnegativity outside the hit gives the probability bound with random E0 of expectation at most one. Increasing finite-horizon events give the infinite-horizon actual-hit bound. The final beta=(alpha+q)/2 contradiction handles a supremum equal to threshold without attaining it: 1/beta<1/alpha forces a lower-threshold hit. Countable sup/events are measurable, time-zero crossings included, null family may be empty, alpha endpoints excluded explicitly. Only conditional-expectation/optional-sampling suppliers carry AC; no unbounded optional stopping or illicit interchange is used. Reader found no defect; refuter bibliography correction leaves mathematical premises intact. No defect or blocker.

Source: Ramdas et al. §2.5, printed p.6, inequality (8), checked directly; local proof establishes the broader initial-expectation convention rather than relying on the source’s unit start.

## Level 2: two-look example risk review

Independently read both verification steps and all four cited suppliers. Enumerated fair-bit paths: HH has (E1,E2)=(3/2,9/4), HT=(3/2,3/4), TH=(1/2,3/4), TT=(1/2,1/4). E0=1 and E1 never cross 2; only HH crosses at time 2, with probability 1/4. The conditional factor mean is one on each prefix atom, nonnegative finite process is adapted and held constant after two. First-hit events are empty for n<2 and HH for n>=2, hence stopping-time measurability holds even on never-hit paths. Ville applies at alpha=1/2 and yields 1/4<=1/2. Threshold is fixed; stopping time is data-dependent. AC is correctly inherited, no independence beyond the stated two independent fair bits, and no infinite-horizon limit is needed for this finite constant-tail witness. Reader/refuter reports contain no finding on this carrier. No defect or blocker.

The four-path arithmetic is an elementary independent computation; the example has no external source claim. All dependency statements are the already reviewed definition, Ville theorem, stopping-time definition, and AC.

## Level 6: anytime-validity risk review

Read every proof step and all five direct cited dependencies. The Borel transform is defined on every finite real x, including x<=0, so no undefined reciprocal or negative p-value occurs on exceptional paths. For 0<alpha<1, g(x)<=alpha iff x>=1/alpha pointwise. Countable union of actual hits is contained in the Ville sup event. Fixed-time and stopped finite-time rejection events are measurable subsets of the crossing event; no optional sampling at an unbounded tau is used. p_t>0 everywhere gives u=0 and probability<=1 gives u=1, including tau=infinity excluded from rejection. Empty null family has vacuous inequalities; the final fixed-time experiment is formed only for nonempty null and uses restriction of probability laws, satisfying the exact def-p-value prerequisite. No monotonicity in t or claim p_tau at infinity is needed. AC correctly inherited. Reader found no defect and refuter source correction leaves all mathematical premises unchanged. No defect or blocker.

Exact dependencies: the test-supermartingale and anytime-valid-process definitions, Ville, AC, and `def-p-value` (including its nonempty-null condition). The ancillary binary-kernel explanation in the anytime definition is not used to prove the probability bound.

## Level 7: inversion risk review

Read all three proof steps and every direct dependency, including the exact pointwise-membership confidence-sequence definition. For each fixed theta, the singleton-null process meets the full anytime theorem hypotheses. On every real version, E_t^theta<1/alpha iff p_t^theta>alpha for 0<alpha<1, including nonpositive evidence values; threshold equality is excluded from C_t. Each fixed-theta membership event is F_t-measurable, and the complement of its countable all-times intersection is exactly the anytime crossing event with probability at most alpha. Quantifiers give coverage separately under P_theta for every theta, not a simultaneous intersection over the parameter set. Thus no sigma-algebra on Theta or joint theta/sample measurability is needed. Empty parameter space is vacuous, time zero included, alpha endpoints excluded, and sets may be empty on some paths without invalidating coverage. AC inherited from supplied conditional-expectation/anytime theorem only. Reader found no defect and refuter bibliography repair leaves premises intact. No defect or blocker.

Sources checked: Howard et al. §6, printed p.19, Lemma 3 and following duality discussion; Ramdas et al. §§2.7–2.8, printed pp.6–7. The local proof uses countable actual crossing events and supplies its own reciprocal-transform and membership equivalences; it does not rely on identifying an unattained infimum event with an actual crossing. For the mixture reference, checked Howard et al. Lemma 2, printed p.9 and complete Appendix A.3 proof of Lemma 2, printed pp.27–28 (equations 49–50), including explicit product measurability.

## Local checks and handoff

- `node tools/risk-report.mjs research/mathematical-statistics-foundations-37-batch-35.proof-contracts.json`: exit 0, ten items routed; two CRITICAL and three HIGH items identified.
- Same command with `--require-reviewed` after recording the five specific reviews: exit 0, zero errors.
- `node tools/tsx-run.mjs tools/precheck.mts items/def-nonnegative-test-supermartingale.md --json`: exit 0, one file, zero proof sections, zero failures, definition correctly not-applicable.
- `node tools/rendercheck.mjs items/def-nonnegative-test-supermartingale.md`: exit 0, YAML and all mathematics parsed by the actual renderer.
- Final `node tools/proof-layout.mjs items/def-nonnegative-test-supermartingale.md`: exit 0, one item, zero numbered steps, zero defects. No item edits followed this check.

Additional focused check: `node tools/proof-contract.mjs research/mathematical-statistics-foundations-37-batch-35.proof-contracts.json --strict --items def-nonnegative-test-supermartingale,thm-mixture-of-null-supermartingales,thm-villes-inequality,ex-data-dependent-threshold-crossing,thm-anytime-validity,thm-confidence-sequence-by-test-inversion`: exit 0, 6/6 checked, zero errors/warnings. Refreshed the generated defect-ledger view using `node tools/defect-ledger.mjs render` (exit 0).

Changed content: only the definition bibliography. Added risk-review evidence in the batch contract, one closed accuracy/citation-inaccurate defect row, this report, and exactly one decision in the task-named decisions file. Preserved reader/refuter reports and pre/post snapshots. No judgment, stamping, certification, engine transition, or gate battery performed. No unresolved obligations or blockers; engine owns subsequent current-hash stamping and gates.
