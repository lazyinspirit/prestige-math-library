# Batch 12 Step 3a adjudication

Run: `quantum-computing-algorithms-60-2026-10-15`; group: `batch-12`.

## lem-qc-fixed-dimension-interval-arithmetic

`refuter:12:1`: confirmed_nonfatal, repair_confidence 1. The observed raw SHA-256 2ee5c982a5ae46d1abf2059de8aba12d65654e8e623ad6c73c900149cafe4733 is recorded in the scope; the current pre-edit raw hash is d31cea40ff4cd959ad10f0aff2a24a1393e5051c2b68b3ccd240dc5e388dc3c1 (the pre/post snapshot value), and it independently contains the exact defective construction. Rational 1/3 cannot be the midpoint of two dyadic endpoints. Proof 1.1 now queries at q+4, rounds to a dyadic within 2^(-q-4), and adds radius 2^(-q-3), giving a containing dyadic interval of width 2^(-q-2). The input-output encoding length is charged through a linear scan followed by short division. Proof 3.1 also rounds rational isolator endpoints outward, including an exact rational root. Proof 2.1 explicitly rescales bounded vectors before using its [0,1] square-root routine. These are local proof completions; Statement, dependencies, provenance and manifest interfaces stay unchanged. No judge record was present.

Read the complete current argument and actual F1/F2 suppliers (effective encoding Definition and operator-norm corollary Statement/Proof). Checked zero/one square-root inputs, excluded zero divisors/normalizers, closed exponential/logarithm endpoints, empty expressions, fixed dimension, sign-changing unique-root isolators, and the series tail and arithmetic bounds. Risk review completed in the owning contract. Sources are contextual: the Cauchy-name and explicit bit-exponent claims are established locally, not inferred from a finite-input literature theorem.

Review checkpoint completed; final dispositions and checks follow below.

## Level 0 risk reviews

`lem-qc-irrational-rotation-dense-on-circle`: both steps and six supplier statements checked; signed q and n in Z, delta>0, beta=0 and parameter wrap handled. No defect.

`lem-qc-su2-near-identity-logarithm`: all three steps and nineteen supplier statements checked; unitary spectral pairing, strict principal-angle bound, scalar logarithm branch via continuity/IVT, trace/skew-Hermitian conclusions and rho=0,1/2 checked. No defect. Complete risk reviews recorded before proceeding to level 1.

## lem-qc-compact-su2-base-net

All three current steps reviewed with actual gate-package, norm and compact-ball suppliers. The positive-word semigroup closure proof is sound, including g=I and eventual d_n>=2, so the reader closes the missing inverse-approximation argument while preserving arbitrary finite dense-generated G. Step 3.1 can use the family of all word-centered balls, requiring only finite representative selection, not AC. Risk review complete. Pre/post snapshot hashes are 7bfdf5c9… and 929c1a9c…; the touched verdict and historical evidence limits are recorded below.

## Level 5 risk reviews

`lem-qc-su2-balanced-commutator`: all four steps checked; Pauli sign gives [A,B]=log D, finite axis normalization is bounded away from zero, and the 32s^3 and s^3 remainders fit 40 eta^(3/2) at both allowed endpoints.

`lem-qc-two-axis-su2-generation`: all four steps checked; commutator-power and product-formula limits follow from the written series/telescoping estimates; nonparallel axes span, and spectral diagonalization covers I and -I. Actual cited supplier statements and the local Pauli proof were checked. Both risk reviews complete with no defect.

## Level 6 supplier findings

`lem-qc-clifford-t-projective-density`: corrected Proof 4.1 to place the conjugate torus in the subgroup closure. The subgroup itself is countable. All five steps and actual supplier interfaces checked: exact h,t phases; irreducible quartic X^4-2X^2+1/2; number-field/minimal-polynomial criterion; root-of-unity recurrence; nonparallel axes; continuous surjective map to PU(2). Statement unchanged; complete risk review.

`lem-qc-commutator-error-cancellation`: a new confirmed fatal false bound in the supplier proof, repaired completely. The second replacement must use tilde V, so the bound is 4 eta^(3/2)+2 eta^2<=5 eta^(3/2), not 4 eta^(3/2). Direct dependency/reference search found exactly the compiler algorithm and the resource/bit-complexity theorems, all owned here. Algorithm instructions remain sound. The two theorem facts/proofs use 5 and 45 in place of 4 and 44; their Statements are unchanged because 45<=64. Their contract citation quotes and derivations are synchronized.

Exact finite witness (sanity check, not the general repaired proof): identify a real quaternion (s,v) with sI+i v.sigma, so multiplication is (s,v)(t,w)=(st-v.w,sw+tv-v cross w). Let R_x(t)=((1-t^2)/(1+t^2),2t/(1+t^2),0,0) and define R_y analogously. Set eta=1/10000, V=R_x(1/200), W=R_y(-1/200), tilde V=V R_x(1/20000), tilde W=W R_y(-1/20000). Exact Fraction arithmetic checked both original squared distances <=eta and both perturbation squared distances <=eta^2. The squared commutator difference is strictly greater than 16 eta^3 (ratio approximately 1.009923236907887). The repaired general bound follows from the two explicit replacements and triangle inequality, including eta=0 and 1/16.

## thm-qc-solovay-kitaev-error-and-resource-bound

All four steps, exact algorithm and relevant supplier statements reviewed. F3 and Proof 2.1 now use 5 eta^(3/2), hence total 45<=64. Recurrence, level existence, endpoint epsilon=eta_0, word length, DAG arithmetic and printing bounds remain valid. Statement unchanged; complete risk review.

## Level 9 risk reviews

`thm-qc-fixed-arity-unitary-error-budget`: all five steps and exact supplier interfaces checked, including real-tolerance dyadic selection, supplied factorization hypothesis, empty spectator register, tensor norm extension, circuit-wide scalar, attained phase minimum and E=0,I event bounds. No edit needed.

`thm-qc-solovay-kitaev-bit-complexity`: all six steps and exact supplier interfaces checked. Corrected cancellation constant and 45<=64 preserve its Statement. Checked unreduced rational encoding cost, J/B/P growth, certified base-net slack and residual branches, nonsingular coordinate selection, exact child targets, additive conditioning guards and final polynomial time/output estimate. The balanced branch has r>tau_j, so its square roots admit additive rather than multiplicative precision guards; |sqrt x-sqrt y|<=|x-y|/sqrt x verifies the needed bound. Risk reviews complete before proceeding to controlled phase.

## thm-qc-controlled-phase-approximation

All five proof steps and actual controlled-phase/global-phase supplier proofs reviewed. Checked four two-bit actions, P/Rz scalar product, the nonzero target hypothesis for added control, theta=0 and lambda=1, and all four Hamming weights for the three-bit parity identity. Seven one-qubit phase gates and ten CNOTs give an actual exact factorization, so the conditional fixed-arity compiler applies. No defect; complete risk review.

## Routed decisions and historical evidence

Exactly two decisions are owed and written in the companion JSON. `touched:12:lem-qc-compact-su2-base-net` is accepted_repair, repair_confidence 1: current source hash 929c1a9cf174b27553ba17e76234018e65410449dbb392fce0b38b3d14011f7b exactly matches reader-post; pre was 7bfdf5c921f095e9a37c9855488d2ffc38585ce80192465bb6978f471a74d097. The original contract derivation 2.1 is available in `research/quantum-computing-algorithms-60-2026-10-15-owner-synthesis/stateprep-qa33-preimages/research/quantum-computing-algorithms-60-2026-10-15-batch-12.proof-contracts.json` and `.autopilot/quantum-computing-algorithms-60-2026-10-15/step2-contract-edit/final-batch-12.json`: it goes directly from subgroup density to word representatives without establishing positive-word density. The reader report and exact unchanged post carrier identify and close that gap. A complete raw pre-reader source was not recovered from these archives; no invented source reconstruction or exact historical full-byte comparison is claimed. Acceptance is of the actual hash-matching reader-post proof after independent mathematical review, not a metadata/current-content substitution.

`refuter:12:1` is confirmed_nonfatal, repair_confidence 1. The finding and the independently observed current construction have the same defect; the report preserves the scope's differing observed fingerprint. No reader findings, page obligations, in-run-dependency findings, withdrawals or outside consumer repairs are owed.

## Sources and scope limits

Consulted [Dawson–Nielsen](https://arxiv.org/pdf/quant-ph/0505030), Definition 1, §3 arithmetic caveat, and complete §§4.1–4.2 (cached `research/quantum-computing-planning/sources/qc_r3/dawson-nielsen-quant-ph-0505030.txt`, lines 95–143 and 429–642). Its commutator estimate includes higher-order perturbation terms; it does not establish the erroneous local constant 4. The repaired numerical bound is proved locally.

Consulted [van Melkebeek–Watson](https://theoryofcomputing.org/articles/v008a001/v008a001.pdf), Theorems 4.3/4.5, §4.3.2 Lemma 4.6 and its complete kernel construction (PDF pp. 35–38), and §4.3.3 input/recursion interface (PDF pp. 38–40). Their input is a finite approximation, unlike this batch's Cauchy-name model. Its Fact 4.11 retains the quadratic perturbation term. This source provides context; the local bound, branching and bit exponent were independently checked. The cached 2007 preprint was not substituted for the final 2012 paper. An attempted local PDF extraction failed because pdftotext is unavailable; the final PDF was read through the web PDF text interface instead.

Every current cited dependency Statement/Definition used by the routed and HIGH/CRITICAL proofs was opened; local computational supplier proofs and the controlled-phase supplier proofs were read as described above. This is not an audit of the full transitive published library, all page prose, or every literature source listed in frontmatter. No defective published supplier was established, so the published-consumer ledger was not modified. No new page, pair, algorithm, dependency, AC assumption or proposed withdrawal was introduced. The sole Statement change is the commutator constant; all its actual direct consumers are owned here and were checked supplier-first. The manifest contains no numerical claim mirror requiring an edit; dependency, title and provenance arrays remain correct.

## Local checks and handoff

- Exact rational quaternion counterexample: all four hypothesis comparisons passed; old conclusion failed by an exact squared-error comparison. This tests a specific witness, not the repaired general proof.
- Reflow completed on the five changed item paths.
- Precheck: 5 checked, 0 failing.
- Strict proof-contract check on the batch-12 contract: 14/14 items, 0 errors, 0 warnings.
- Rendercheck on the five changed items: pass, including YAML and real KaTeX parsing.
- Final batched proof-layout command on all five changed paths: 5 items, 22 steps, 0 defects. It ran after the final item edit and reflow.
- Risk report was run without --require-reviewed, then with --require-reviewed after all eleven required reviews: 0 errors, 14 items routed (eleven required reviews plus one additional supplier review complete).
- Four closed defect-ledger rows were appended using the ledger tool's serialized append; decisions reference the two routed rows, and the two additional local findings are referenced by owning contract risk reviews.

No mathematical blocker remains in this batch. The reader's historical scaffold-identity diagnostic was not treated as a mathematical finding, and no engine state, scheduling, gate, judge or stamp was changed. Engine-owned current hash sealing and gate battery remain outstanding.

Final raw item SHA-256 values:

- `lem-qc-fixed-dimension-interval-arithmetic`: `e0c96a6e2a08bc1a8c3d22919015ebff01bcb2f6f639e3d6255f4d3729f49a3f`.
- `lem-qc-commutator-error-cancellation`: `dadb48fd1257286e777b7aa295b2528b4e7fbbf481166fd86950d7054db02f27`.
- `lem-qc-clifford-t-projective-density`: `ce65d8a593fa367756390d6b995ecfc63eebb95b325832dc20aed9b4872c922d`.
- `thm-qc-solovay-kitaev-error-and-resource-bound`: `b4c3aa3a518184c3bb1d781dd3f5552f44ba288261e0be3618e867a869707369`.
- `thm-qc-solovay-kitaev-bit-complexity`: `f21dfacd2d15884924f97a652327731d795a364ad96bbf1a6afce1a5384d6c9e`.


## Owner followup: cycle 1 genuine ledger-reference closure

Original report and decisions exact bytes are archived in `research/quantum-computing-algorithms-60-2026-10-15-owner-step3-ledger-repair/batches1-30/originals`. This followup records current focused review and supplemental gate decisions for existing risk-review discoveries; it does not change native reports, original observations, snapshots, source carriers or prior check results.

- `gate:qca60-b12-3a-conjugate-torus-closure`: Current proof 4.1 explicitly computes conjugation by t, retains a nonzero Z coordinate and nonzero planar component, and proves det(R_pi/4-I)>0; the resulting axes are nonparallel as required by the actual two-axis supplier. This is the same recorded repaired missing justification, not a new defect.
- `gate:qca60-b12-3a-commutator-constant`: Confirmed repaired bound by two sequential replacements: 2 eta sqrt(eta) then 2 eta(sqrt(eta)+eta), giving 4 eta^(3/2)+2 eta^2<=5 eta^(3/2). Reviewed actual direct consumers compiler, error/resource theorem, bit-complexity theorem and owning page: algorithm uses recurrence constant 64, both theorem proofs use 40+5=45<=64, Statements are unchanged, and page asserts no old constant. Same-owner native batch12 report records the original Statement repair and complete consumer closure; current review independently confirms its affected uses.

Root must bind current decision subject hashes after writers freeze. No tests, validators or gates were run in this followup.
