# Batch 37 Step 3a adjudication

Run: physics-remaining-80-2026-10-17. Group: batch-37. Scope assignment group m retained.

Read dispatch, workspace rules, reader report/findings, refuter report and frozen scope/hash inventories. Exactly four obligations: two touched carriers and refuter:37:1–2; no reader or page obligation. Initial risk-report: exit 0, 16 items, eleven HIGH/CRITICAL.

## Dependency-order review checkpoints

### lem-qsm-local-hermitian-diagonalization

Read all six steps and exact Statements of thm-heine-borel-rn, thm-extreme-value-metric and thm-of-square-roots. The sphere in real dimension 2d is nonempty compact for d>=1. Real and imaginary Rayleigh variations give the eigenvector, the invariant orthogonal complement gives finite induction, and scalar square roots act identically on repeated eigenspaces. Checked d=1, A=0 and repeated/zero eigenvalues. Only finite selections are used; no arbitrary choice assumption. No reader/refuter finding concerns this carrier. Risk review complete; no source edit.

### def-qsm-local-matrix-net-completion

Read Definition and both proof steps against def-linear-map, def-qc-tensor-register-and-permutation, def-c-star-algebra, Cauchy-Schwarz and the reviewed Hermitian lemma. The orthogonal coordinate decomposition proves both embedding norm bounds; the maximum eigenvalue of A*A proves the C*-identity. Submultiplicativity bounds products of Cauchy sequences and isometric adjoint preserves their equivalence classes, so both operations extend to the norm completion with the same identity. Checked N=0, q=1 and zero matrices. No claim of physical dynamics and no empirical premise; no reader/refuter objection. Risk review complete; no source edit.

### lem-qsm-local-subsystem-trace-tests

Read both steps and the exact Definition/Statements of partial trace, tensor map, ordered registers, trace characterization and positivity/trace preservation. Nonzero finite factors and trace-one positivity give a density; characterization applies to every matrix A, and coordinate sum positivity plus sum-to-identity proves lifted effects form a POVM. Checked one-dimensional factors, zero effects and a single-outcome POVM. Linear-first inner products agree throughout. No statistical/physical interpretation is inferred from this mathematical trace identity; no reader/refuter objection. Risk review complete; no source edit.

### lem-qsm-local-tensor-gibbs-factorization

Accepted reader repair after exact archived-preimage/current diff and current raw hash equality with frozen post. Read both current steps and exponential addition/real exponential definitions. Finite distributivity gives Z1^N with positive denominator for any finite real beta; explicit diagonal weights and tail sums give R_N,k=gamma_k and mean NE. Checked q=1, beta=0/negative, k=N empty tuple and N=1. Only consumer independent-shell-equivalence uses the corrected reduction; its rewritten coordinate formula preserves the old canonical product. No physical applicability conclusion or choice assumption. Risk review complete.

### thm-qsm-local-classical-diagonal-embedding

Read all three steps and exact state Definition, Cauchy-Schwarz and reviewed completion Definition/proof. Marginal consistency makes local functionals agree under A tensor I, including scalar N=0. The coordinate bound gives norm at most one and sequence-independent unique extension. Approximation of A*A by local A_n*A_n proves positivity; value one on the norm-one unit proves norm one. Checked zero-probability labels, q=1 and scalar algebra. Does not claim all states are diagonal or assert empirical probabilities. No reader/refuter defect. Risk review complete.

### cex-qsm-local-entropy-density-insufficient

Confirmed refuter:37:1 nonfatal undefined trace norm; supplied the finite Hermitian absolute-eigenvalue-sum convention before use. All dependencies and both steps read: zero energies give gamma=I/2, tagged-site density has rank 2^(N-1), entropy (N-1)log2 versus Nlog2, and reduced diagonal difference (1/2,-1/2) has norm one. Checked N=1, rank deficiency and any finite beta; no uniform-in-site claim. No item consumers; B page placement only. Repair confidence: 1. Risk review complete.

### cex-qsm-local-local-global-distinction

Confirmed refuter:37:2 nonfatal undefined trace norm; supplied the finite Hermitian absolute-eigenvalue-sum convention before use. Dependencies and all three steps read: even-parity sector has 2^(N-1) strings, every k<N coordinate set has 2^(N-k-1) completions, and global diagonal differences all have absolute value 2^(-N). Projection pairing gap is exactly 1/2. Checked N=2, k=0, k=N-1, and exclusion of k=N. No physical empirical claim or arbitrary choice; no item consumers, only B page placement. Repair confidence: 1. Risk review complete.

### def-qsm-local-coercive-regulated-model

Read the full Definition against the published finite-regulator data, self-adjoint form-realization Statement and Gibbs trace bound, countable-choice Definition and draft normal-state Postulate. Hypotheses r>=1, a_j>0, real polynomial and V>=c|q|^2-C0 exactly match the QFT suppliers. H=E_*h uses positive scale and the same domain; b=beta E_* is dimensionless and positive. Positive finite partition trace normalizes the density. Countable eigenbasis choices remain assumed, and the normal PVM interpretation inherits the stronger AC scope through its draft supplier. No uniqueness of bare differential realization, continuum limit or empirical identification is asserted. Batch-36 readiness stays open; no source edit. Risk review complete.

### thm-qsm-local-independent-shell-equivalence

Accepted reader coordinate-definition repair after archived exact-preimage diff; current item raw hash equals frozen post. Read all four steps, all seven dependencies and the published microcanonical theorem full proof. Its q>=1, finite real beta, width lower bound q sum|e_j| and delta_N/N->0 match verbatim in content. Rounding proves every shell nonempty, type entropy gap gives fixed-k marginal convergence, and flat projection spectrum gives entropy log Omega. Diagonal difference norm is twice total variation; trace pairing bound follows by diagonal entries/Cauchy-Schwarz even for nondiagonal observables. Checked q=1, zero/repeated energies, beta=0/negative, N=k tail singleton, fixed rather than growing k. Sole direct item consumer qualified-shell-measurements retains the same canonical and shell coordinate meanings; no consumer repair needed. No choice, empirical, interacting or global equivalence claim. Risk review complete.

### pthm-qsm-local-qualified-shell-measurements

Read both proof steps, shell-equivalence theorem, preparation Postulate, finite tensor POVM Definition, NRQM state/composition and probability Postulates and units Definition. For each effect, nonnegative diagonal entries sum to one over outcomes; triangle inequality bounds the summed prediction difference by the diagonal trace norm, without a superfluous factor r. Fixed k and stated width hypotheses match the supplier; checked r=1, zero effects, q=1. Positive temperature narrows the physical interpretation consistently to beta>0, with joules/kelvin and dimensionless exponent. Reader changed only explicit coordinate realization of the same shell/canonical reductions, so no consumer repair. Predictions are conditional Born probabilities; no observed frequencies, sampling precision or proof of physical validity. Risk review complete.

### pthm-qsm-local-regulated-interacting-gibbs

Read all three steps and eight direct dependencies, including the full draft trace-Gibbs proof and cross-log proof, exact canonical fixed-beta model and summable-differentiation Statements. Positive E_* scaling preserves self-adjoint domain and lower bound; QFT trace theorem at b=beta E_* gives positive finite Z for every beta>0. Thus an open interval exists around each beta, and the draft variational theorem applies on the exact finite absolute spectral form-energy domain, with AC explicit. Its local lower-temperature envelope supplies Gibbs energy/entropy finiteness; finite competitor cross-log gives finite entropy, KL/Jensen inequality and equality only at the Gibbs state. Checked nonzero L2 space, finite r, repeated/negative finite eigenvalues, positive scale/temperature and zero density eigenvalues. Joules, kelvin and entropy units agree. Normal-state and thermal postulates are adopted assumptions, with no dynamics/continuum/data claim. Batch-36 native readiness remains open and is not certified by this local current-interface review. Risk review complete.

## Decisions and repairs

- `touched:37:lem-qsm-local-tensor-gibbs-factorization`: **accepted_repair**, defect `remaining80-b37-3a-canonical-reduction`.
- `touched:37:thm-qsm-local-independent-shell-equivalence`: **accepted_repair**, defect `remaining80-b37-3a-shell-reduction`.
- `refuter:37:1`: **confirmed_nonfatal**, repaired, defect `remaining80-b37-3a-entropy-trace-norm`.
- `refuter:37:2`: **confirmed_nonfatal**, repaired, defect `remaining80-b37-3a-parity-trace-norm`.

Each completed repair has `repair_confidence: 1` and exactly one fixed ledger row owned at `3a-adjudicate`. No additional decision is owed for untouched risk-only carriers. No escalated or withdrawn carrier.

Both exact pre-reader files were recovered from `research/physics-remaining-80-2026-10-17-owner-step2-source-preimages-60/items/`. Their raw hashes match the immutable pre snapshot. Both current reader-edited items match the immutable post snapshot. The diffs show coordinate definitions replacing tensor-power/reduction shorthand, with the same canonical weights and fixed-subsystem conclusions; no unknown historical delta. Exact pre/post hashes and independent justification are retained in the decisions file. No historical artifact was edited.

The two Alpha source changes add the Hermitian trace norm convention before its first use. Existing `ai-altered` statement / `ai-generated` proof provenance remains accurate; no judge record was present. Reflow affected paragraph layout only. Their claims and witness calculations are preserved. Updated both manifest statements, and synchronized the two accepted reader statements which the reader had left stale in the manifest. Updated the measurement consumer's stale F1 contract quote to the current exact supplier Statement. No dependency edges, pages, IDs or physical public interfaces changed.

## Consumer and supplier disposition

Repository item/reference search found one item consumer of the factorization lemma, `thm-qsm-local-independent-shell-equivalence`, and one item consumer of the shell theorem, `pthm-qsm-local-qualified-shell-measurements`. Their actual uses were read: the canonical product entries, shell tail sums and conditional POVM trace pairings retain the same mathematical meaning. No further source repairs or outside consumer escalation required. Each counterexample has only its B-page placement and no item consumer. Pages are not edited.

No defective published supplier was confirmed. Published/imported sources remain read-only, and no published-maintenance ledger row was warranted. The cross-batch dependency input already preserves OPEN batch-36 readiness rows. They remain OPEN: current conditional interface checking supplies no native readiness stamp. Added the owned-consumer disposition to `briefs/tasks/frontier-dependency-ledger.md` and ran its refresh command successfully.

## Sources and review limits

Primary external text consulted: [Watrous, The Theory of Quantum Information](https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf), §1.1.3, printed pp. 32–34 (PDF pages 39–41), equations (1.165), (1.167), (1.181). The Schatten 1-norm definition reduces to the absolute eigenvalue sum for Hermitian matrices; this confirms the convention used by the two repaired diagonal examples. Source text was retrieved for these sections only, not the entire book.

The mathematical evidence used for the principal deductions is the actual local supplier text: the full published `thm-tdmath-independent-microcanonical-block-limit` proof, QFT regulator/realization and Gibbs-trace statements and relevant arguments, draft `thm-qsm-trace-gibbs-variational` and `thm-qsm-trace-cross-log-inequality` proofs, exact fixed-temperature trace-Gibbs and summable-differentiation statements, and direct finite matrix/partial-trace/exponential/C*-state interfaces listed in the item checkpoints. This is not a new whole-closure audit of published mathematics or a claim to have retrieved every cited textbook. Physical conclusions remain deductions under preparation/measurement assumptions; no observations, apparatus precision or statistical inference were added.

## Local checks

All commands ran from the physics workspace. These are local checks, not engine certification or judgment.

- Initial `risk-report.mjs research/physics-remaining-80-2026-10-17-batch-37.proof-contracts.json`: exit 0; eleven HIGH/CRITICAL carriers identified and individually reviewed.
- `tsx-run.mjs tools/physics-support/reflow.mts` on both Alpha-edited counterexamples: exit 0; paragraph reflow only.
- `tsx-run.mjs tools/physics-support/precheck.mts` on both changed counterexamples: exit 0, 2 checked, 0 failing.
- Final required `proof-layout.mjs` on both changed item paths in one invocation: exit 0, 2 items, 5 steps, 0 defects. No item edits afterward.
- `rendercheck.mjs` on both changed counterexamples: exit 0, 2 files, no defects.
- First strict `proof-contract.mjs` pass: one stale consumer F1 quote; refreshed that quote. Final strict pass: exit 0, 16/16 checked, 0 errors, 0 warnings.
- `citation-fidelity.mjs` on the batch contract: exit 0, 40 citations over 16 items, no missing quotes or widening candidates.
- Final `risk-report.mjs` on the batch contract with `--require-reviewed`: exit 0, 16 routed items, all eleven required reviews complete.
- `defect-ledger.mjs append`: exit 0, four fixed rows appended and generated view refreshed.
- `frontier-dependency-ledger.mjs refresh --run physics-remaining-80-2026-10-17`: exit 0, refreshed and deduplicated.
- Exact obligation/closed-row check: four decisions equal the frozen routed obligation set; each references exactly one fixed ledger row.

## Handoff

All four assigned obligations are resolved locally. No new scientific blocker was identified. Existing batch-36 readiness holds remain owner/engine work. Engine owns current decision hashes, gates, judgment and stage transitions; none were initiated here.
