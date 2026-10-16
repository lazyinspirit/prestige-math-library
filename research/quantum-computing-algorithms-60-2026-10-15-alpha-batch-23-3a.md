# Batch 23 Step 3a adjudication

Run: quantum-computing-algorithms-60-2026-10-15. Group: batch-23.

Scope: five touched obligations and refuter:23:1; no reader/page obligations. Current proofs and actual suppliers are reviewed in generated dependency order. The reader's evidence is considered independently. Risk-report initial invocation succeeded (28 routed contracts, 17 HIGH/CRITICAL). This report records local review, not a judge or gate certification.

### lem-qc-logspace-uniform-iterated-multiplication-tc0

Checked all 12 steps against the explicit array/MAJ convention, the addition construction, prime-number lower bound and primitive-root statement. CRT reconstruction uses upward rounding by k/2^t, with error <1/(4T), so floor and strict comparison remain correct at X=0 and X=T-1. The squarefree division branches B=1 and P=1 avoid empty-basis extension; in the recovery construction all actual extension bases are nonempty. The prime blocks exceed M, preventing product wrap; Q differs from floor(X/2^s) by at most one and the final comparison repairs it. N=1 needs only parity. Fixed finite composition and polynomially bounded tables give logspace uniformity; DLOGTIME is expressly not asserted. No AC. No defect found. Source: Hesse–Allender–Barrington, division.pdf, CRT method; the local weaker logspace proof is independently checked.

### lem-qc-uniform-probabilistic-clocked-simulation

Checked all 22 steps and the actual clocked-universal-simulation buffer supplier, explicit decoder and constructible-bound definitions, and counting-model profiles. Complete-table size bounds parameters by polynomial in L; capped parser does not expand invalid codes. Sequential event resets require 2^i transitions and lazy input loading is linear. For erased indexes, fresh emitted-word lengths total polynomial(L)b; three cached blocks suffice since B>b, and two literal tries preserve numerical address equality. Record allocation and fixed pointer widths give charged short-address operations and polynomial(L)(b+1)polylog H time. Halt is tested before expiry (including b=0 and halt at b); designated fair bits preserve exact terminal-prefix masses. Doubling construction is valid for polynomial clocks >=n. No source-space preservation, preprint equivalence, or choice is claimed. No defect found.

### lem-qc-basis-query-time-normalization

Accepted reader repair at 2.1: recomputing size/OR on the entire insertion path, even without rotations, is necessary for 5.2 rank and 6.1 range OR. Single/double AVL rotations restore pre-insertion height and update lower nodes before ancestors. Checked all 12 steps against current clocked interpreter and basis-model definition. Stable node IDs plus current ranks avoid rereading long keys; insertion charging uses only freshly emitted endpoints. Range OR visits at most two boundary subtrees per depth. Query reads only last k bits and rejects any nonzero high suffix; i=0, empty word, n=0, reversed endpoints and out-of-range input preserve zero query action. b>=n ensures k<=b when n>=1. Pointer allocation and designated fair-bit preservation give the asserted time-only result. No Statement change or AC. Verdict accepted_repair; repair_confidence 1.

### lem-qc-counting-time-space-to-linear-hierarchy

Accepted reader repair at 4.1: normalize the false-predecessor OR test before swapping outcomes; otherwise no-witness ties would remain rejected for AND. Checked current arithmetic suppliers and logspace-predicate hierarchy proof. Rational exponent margins absorb fixed machine constants; qS=O(n), fixed recursion bounds leaf lengths, and path concatenation is bijective with fair-bit multiplicities. Basis index overflow saturation is unobservable until use and FAR input positions cannot return during the remaining T steps. Native query leaf checks scan O(S+n) bits; multiplication wiring needs only logspace on polynomial inputs, while exponential addition uses DLOGTIME uniformity on O(n)-bit labels. Neutral nonedges cancel exactly for majority; explicit complements implement at-least-half and empty AND/OR correctly. Exact threshold is >2^(T-1). Tau is machine independent. No AC or profile equivalence. Verdict accepted_repair; repair_confidence 1.

### lem-qc-logspace-uniform-cook-formula-encoding

Checked all seven steps against the explicit interpreter and basis-normalization suppliers, counting-model profile and encoding definition. Sequential trace covers positions through T even for inputs longer than T; accessed initial input bits suffice. Sorting by tape/address/time enforces previous-write consistency, including initially blank cells; the Boolean threshold reduction proves bitonic merging, with deterministic comparator outputs. Determinism plus gate truth-table clauses gives exactly one witness, not merely equisatisfiability. Tuple-addressed clause wiring uses logarithmic counters and polylogarithmic bit time; source constants in the ordered initial block allow sequential virtual-head generation. Basis normalization yields polynomially bounded physical addresses and short native indexes, so its trace adds only polylogarithmic overhead. Empty/dummy records are excluded from read checks, absorbing halts fix final traces, no AC. No defect found.

### thm-qc-probabilistic-polynomial-time-hierarchy

Checked all three steps and exact tie-normalization, interpreter, explicit encoding and clock definitions. Choose a<a-prime<b to absorb arbitrary constants and uniform polylog overhead; the code length restriction eventually includes every fixed candidate. Probability denominator divides 2^T even when the interpreter takes longer, so source-clock tie normalization preserves strict membership; swapping then contradicts the candidate on arbitrarily long inputs beginning with its code. Sequential and basis targets remain separately declared; basis normalization is time-only and clock>=n. Finite short lengths are harmless. Proper inclusion also uses the immediate monotone time containment. No AC. No defect found.

### lem-qc-tight-majority-formula-completeness

Checked six steps against current Cook unique-witness construction, tie normalization, basis normalization and exact formula conventions; compared Allender et al. Section 3.2, Theorem 7 proof (PDF pp.9–12). For a correct oracle answer exactly one accepting rank witness has 2^(R_i-1) predecessors; an incorrect answer has none. Nonnegative G vanishes precisely for valid transcripts, and 1-2G^2 is positive exactly there. Fixed sum/product gap-count compositions and zero suffixes preserve integer counts; total query/witness lengths remain linear. Both threshold gadgets have one-below/two-extra counts per source path, restoring strict machine majority after tie normalization, including no random bits and empty witness blocks. Unique deterministic extensions prevent overcounting, and fixed repeated near-linear encodings preserve output-bit and streaming bounds. No defect found; no AC.

### thm-qc-unbounded-error-counting-time-space-alternative

Checked all six steps and the actual bounded-space virtual-input simulation, hierarchy, counting containment and tight-formula suppliers. Strict rational margins eta<eta1<epsilon absorb polylogs in the first space reduction. Choose 1<b<B with B(1-eta)<1, and A>Ba; padding then yields a fixed LCH_tau. The induction retains e-prime_j<delta^(j-1), so normalized oracle deciders fit their padded linear budgets. Total padded query length is O(n^e) for e>1; final virtual-input simulation uses known polynomial power-of-two work majorants, not a false source-space preservation by the time-only normalizer. Its OR trees use O(M) extent with zero-initialized sparse access. The concluding rational exponents satisfy delta^(tau-1)<b and contradict the separate-profile hierarchy. Negative d or epsilon>=1 are covered by choosing positive weaker margins. No AC or preprint-profile assertion. No defect found.

### lem-qc-vmw-fh-density-and-base-net

Checked five steps and all four suppliers: irrational integer powers, two-axis closure via commutator/Trotter limits, gate-package base-net definition, and fixed-dimensional certified interval arithmetic. z=w^2 is not a root of unity because 6/5 cannot be a root of the displayed monic integer polynomial; hence D powers fill the Z subgroup and conjugation by J gives X. Nonparallel axes imply generated density. The normalized four-coordinate dyadic mesh covers SU(2), with operator distance equal to Euclidean distance; finite strict word approximations admit eventual Frobenius interval certificates. Preprocessing is fixed with eta0, finite selection uses no AC, and erasing per-letter phases preserves projective error and length. Algebraic real and imaginary parts have fixed isolating descriptions. No defect found.

### lem-qc-multiplexed-rz-gray-code

Checked all three steps against the current ordered circuit semantics, CNOT support order, Pauli/axis rotation and Euler statements, and occurrence resources. The reflected Gray cycle starts at zero and returns to zero; its masks are a permutation of all bit strings. Walsh character orthogonality gives the inverse angle transform, and XRz(t)X=Rz(-t) fixes the branch sign under chronological multiplication. The final parity-restoring edge is counted. k=0 is one rotation and no CNOT; k=1 includes two toggles and works exactly. All angles are real and no scalar phase is lost. No AC. No defect found.

### lem-qc-circuit-resource-composition

Checked three proof steps against the current syntax, denotation, resource-vector, tensor-map and clean/dirty-ancilla definitions. Concatenation adds occurrences and explicit layers on the declared aligned register; workspace maximum is conditional on permitted reuse. Parallel schedules pair disjoint-support layers and pad with empty layers, giving exact maximum explicit depth and additive width/count. Tensor action agrees on elementary vectors. The clean-return promise concerns the complete block and all permitted data vectors, including zero-ancilla/empty-circuit cases. No hidden minimum-depth claim, controlled access or choice. No defect found.

### lem-qc-unoptimized-qsd-recursive-decomposition-and-count

Checked four steps against current cosine-sine, two-block demultiplexing, axis/Rz multiplexor and exact three-CNOT two-qubit statements, trigonometric parametrization, polar form and circuit/resource definitions. First-wire target and contiguous children match the block tensor convention. Central positive cosine/sine blocks are Ry(2phi); diag(D,D*) gives Rz(-2alpha), retaining phases. Four recursive children plus three restored Gray multiplexors yield 4c_(n-1)+3*2^(n-1). Base n=2 is at most 3 with scalar gates allowed; substitution gives 9/16*4^n-3/2*2^n. It is explicitly unoptimized and makes no precision/runtime claim. Finite angle choices require no AC. No defect found.

### lem-qc-ninefold-nearest-neighbor-multiplexor-routing

Checked four steps against unoptimized contiguous QSD, restored Gray rotations, CNOT and circuit/resource definitions. Order Gray coordinates nearest to farthest so distance-k toggles obey 2^(n-k) for k>=2. Squaring the 2k-2 adjacent sweep restores every middle bit and flips the target by the remote control; reflecting that network gives the opposite orientation. This is an exact basis identity, including k=2. Summing (4k-4)2^(n-k) plus the deliberately loose nearest-control bound gives 9*2^(n-1)-8n. Adjacent two-qubit terminals need no routing, so the ninefold bound composes for the unoptimized tree. No depth or arbitrary-layout conclusion; no AC. No defect found.

### alg-qc-basic-clifford-t-rewrite and thm-qc-basic-rewrite-correct-and-terminating

Accepted the algorithm repair: deleting an identity subword keeps the declared H/T/T†/CNOT alphabet closed; literal I tokens would not. Exact matrices give H²=T⁸=TT†=T†T=CNOT²=I on identical ordered support. The deterministic first-match/restart rule decreases length by at least two and covers empty input. Its only item consumer, the correctness theorem, already states deletion and proves termination and local irreducibility; no consumer repair is needed. The theorem source is identical in pre/post snapshots: only its contract citation changed, so its obligation is reviewed_no_defect, change_kind audit_enrichment, defect_ids empty. Algorithm accepted_repair, confidence 1.

### thm-qc-qsd-cnot-upper-bound — refuter:23:1

Confirmed fatal: U=-1 on Q_0=C is a scalar unitary with no circuit, since every allowed gate has positive arity. Corrected Statement and proof 2.1 to identity-only exact implementation at n=0; n=1 and the n>=2 formula remain intact. Read the complete current supplier thm-qc-exact-arbitrary-unitary-qsd-upper-bound: its four-child recurrence, central CZ saving and terminal diagonal migration produce 23/48*4^n-3/2*2^n+4/3; its final step proves the identity-only zero-wire boundary from syntax. Updated the manifest statement/provenance, exact supplier quote, derivation and false boundary worksheets. Repair confidence 1.

Direct consumer search (all items and page references) found ex-qc-two-qubit-qsd-cnot-count only; it substitutes n=2, gives 3, and expressly uses the two-qubit base case, so requires no change. The A page lists the theorem and makes no scalar boundary assertion. No affected outside consumer or published defect found. The refuter is bound to the original carrier fingerprint, and its counterexample addresses those original bytes, now corrected.

### lem-qc-fixed-arity-polynomial-cauchy-gate-decomposition

Reviewed all seven current steps and actual Givens algorithm/correctness, Gray-path procedure, no-workspace multi-control recursion, controlled-U two-CNOT proof, spectral statement and interval routines. Fixed finite matrices permit hardcoded zero tests, branch signs and positive divisor/eigenvalue-gap bounds; no uniform arbitrary-Cauchy equality decision is claimed. The Gray-path permutation sends x,y to the selected ordered pair and P*MP restores its complement. Givens factors and terminal word phases preserve polynomial-Cauchy coordinates. Rotating a unit scalar into Re>=1/2 gives a conditioned square root; nonscalar 2x2 spectral projectors use a fixed nonzero gap, while scalar roots are separate. Euler half-angle entries require only coherently fixed phase roots, magnitudes and nonnegative square roots, including zero coordinates. Fixed arity bounds recursion and gate count; no ancilla or scalar loss. Pre/post item hashes coincide and only contract hash differs: touched disposition reviewed_no_defect, change_kind audit_enrichment, defect_ids empty. No new mathematical repair or AC.

### thm-qc-bqtisp-to-ptisp-simulation

Checked seven steps against all 12 current dependencies: BQTISP/basis definitions, effective fixed-arity factors, F/H density and finite-bit compiler, exact H/CNOT matrices, constructors, norm inequalities, register/tensor orthogonality and Cauchy–Schwarz. Fixed transition factors compile with O(log t) precision and polylog resources. Orthogonal measurement-history records are proof-only, so rephasing each history preserves measured acceptance; telescoping gives vector error <=1/20 and probability error <=1/10, hence 17/30 versus 13/30. F phase-term expansion and paired rows compute the exact squared-amplitude integer gap with shared histories and final-row equality. The disagreement counter avoids an O(s) scan; separate native-query basis rows retain contiguous operands and fresh endpoints without scanning long address blocks. Missing F/H denominators are padded to D=25^t-prime*2^t-prime with bounded choices. Zero-only suffix padding preserves counts, and the leading-bit construction decides sign(2(Nplus-Nminus)-D). Constructibility and operand extent are explicit, including sublinear t relative to n; no free input scan, #P assertion for arbitrary t, or sequential simulation is used. No AC. No defect found.

### thm-qc-generic-circuit-count-lower-bound

Checked four steps against syntax/denotation/resource and acceptance/BQP threshold definitions. At most kC used ancillas plus a possible designated output suffice after relabeling; serializing layers gives a counted gate list. Fixed finite A,k make W=O(C) for C>=n>=1, and the geometric sum has logarithm O(C log C). A single measured-bit probability cannot satisfy two different 2/3-success truth tables. For C=floor(c2^n/n), a sufficiently small alphabet-dependent c gives logarithmic description count <=2^(n-1), so less than 1 percent of the 2^(2^n) functions fit eventually. Empty circuits/output-only ancillas are included; arbitrary uncharged postprocessing and varying continuous alphabets are expressly excluded. No uniformity or named-function lower bound is claimed; no AC. No defect found.

### thm-qc-counting-hierarchy-time-space-lower-bound

Checked both steps against the current simulation, separate-profile classical alternative and common plain-formula encoding. For time-only quantum computation an exponential space majorant has an O(t)-bit binary numeral; fresh erased index emission bounds all operands, including query endpoints. Rational time margins absorb polylogs; epsilon-prime<min(epsilon,1) makes additive polylog space negligible. Thus both hypothetical quantum deciders would contradict the classical alternative in the derived basis profile. For the consequence, plain MajSAT is the identical input string as its implicit-unused-outer-variable MajMajSAT instance, so the coherent oracle is unchanged. Plain-format validation costs only n polylog n time and logarithmic scratch, absorbed by weaker positive epsilon-double-prime and fixed d>1. n^(1+o(1)) fits every fixed exponent c>1. Negative d and epsilon>=1 cause no exception due to weakened majorants. Exact constructors are charged and no historical-profile extension or choice is asserted. No defect found.

### thm-qc-qsd-cnot-upper-bound

The scalar correction newly raises this contract to HIGH risk. Checked the complete wrapper and exact QSD supplier, including recursive central-CZ absorption and terminal diagonal-migration uses. The formula is restricted to n>=2 and gives 3 at n=2; n=1 uses one allowed one-qubit gate. Positive-arity circuit syntax permits no gate occurrence on Q_0=C, so exact implementation exists precisely for scalar 1; U=-1 refutes the original blanket zero-CNOT implementation assertion. Repaired Statement/proof and synchronized contract, provenance and manifest. Direct example consumer uses only n=2 and is unchanged. No judge stamp existed, no compilation-time or scalar-control claim is added, and no AC. Confirmed fatal refuter finding, completed repair confidence 1.

## Snapshot and disposition evidence

The pre/post snapshots differ in exactly five routed carriers: three item-byte repairs (basis normalization, counting-to-hierarchy, rewrite algorithm) and two contract-only enrichments (rewrite correctness, fixed-arity decomposition). All five current item SHA-256 values match their post-reader snapshots before this adjudicator's sole item edit, the separate QSD wrapper repair. No historical preimage resolution or unbound finding is invoked. Four confirmed defects receive one closed ledger row each; audit enrichment creates no defect row. Six decisions exactly cover the dispatch.

## Sources and boundaries checked

- Hesse–Allender–Barrington, https://www.cs.rutgers.edu/~allender/papers/division.pdf, §4, pp.8–11, Lemmas 4.1–4.5 and Theorem 4.1: residue conversion, generator logarithms, basis extension, fixed squarefree division and binary recovery. The local proof independently adds explicit upward rounding and polynomial logspace table generation.
- Allender et al., https://people.cs.rutgers.edu/~allender/papers/tradeoff.pdf, §3.1 pp.5–8, Lemma 5; §3.2 pp.9–11, proof of Theorem 7: consulted the full relevant count/checkpoint, threshold-evaluation and unique-rank-witness portions. Checked the local threshold gadgets and profile handling independently rather than importing source assertions.
- Van Melkebeek–Watson, https://theoryofcomputing.org/articles/v008a001/v008a001.pdf, §2.3.1–2.3.2 pp.10–11: checked fresh erased index tapes, native coherent query, collision suppression and worst-case resources. The local operand-endpoint clarification and derived classical basis profile are explicitly additional conventions. No preprint-to-published equivalence is asserted.

Direct local supplier statements/definitions and relevant constructions are identified in each review above. Published suppliers were read only; no defective published item was identified, so no published-ledger edit or lock was needed. No new definition, lemma, pair, page, AC assumption, or proposed withdrawal was introduced.

## Dependency maintenance and blockers

Updated focused interface evidence on 97 existing rows for reviewed owned consumers in `research/quantum-computing-algorithms-60-2026-10-15-batch-23.cross-batch-dependencies.json`; retained all other rows. No new dependency or outside consumer repair is required.

Local mathematical obligations are closed. Live disk status still reports unrelated run blockers: invalid construction-scheduling identity def-qc-effective-unitary-matrix-input in batch 12, plus reader-38 and reader-44 failures. These remain engine/owner concerns; no run controls were changed.

## Local checks and handoff

- Reflow: `node tools/tsx-run.mjs tools/reflow.mts items/thm-qc-qsd-cnot-upper-bound.md` reported unchanged. An initial lookup of nonexistent tools/reflow-math.mjs failed; the actual tool above succeeded.
- Precheck: `node tools/tsx-run.mjs tools/precheck.mts items/thm-qc-qsd-cnot-upper-bound.md` passed, 1 proof checked, 0 failures.
- Render: `node tools/rendercheck.mjs items/thm-qc-qsd-cnot-upper-bound.md` passed actual YAML/KaTeX parsing.
- Final layout: `node tools/proof-layout.mjs items/thm-qc-qsd-cnot-upper-bound.md` passed, 1 item, 2 steps, 0 defects. This is the only item changed by this adjudicator; the three reader-edited items retain the reported reader formatting checks and their exact post-reader raw hashes.
- Risk report: initial invocation succeeded. The corrected QSD wording increased its tier to HIGH, causing the first require-reviewed run to report its missing review. Added its specific current proof review, reran without require-reviewed, then with require-reviewed: 18 required reviews complete, 0 errors. No defect row was created for this mechanical missing-review diagnostic.
- Four defect rows appended successfully through the locking append tool, with the generated view refreshed. Run-scoped ledger validation checked 66 rows and failed on eight unrelated rows: qca60-b2-3a-zero-qubit-identification (subclass unjustified-identification), qca60-b16-3a-simulator-procedure-specification (incomplete-procedure), qca60-b20-3a-four-qubit-generator-orientation (location example), qca60-b20-3a-four-qubit-logical-translation (false-intermediate-claim), qca60-b20-3a-steane-generator-orientation (location example), qca60-b30-3a-local-preswap-proof (external-proof-gap), qca60-b30-3a-inverse-cost-premise (missing-cost-convention), and qca60-b30-3a-inverse-count-premise (unlicensed-cost-inference). These are owner-routed foreign schema defects; no foreign ledger row was edited.
- Frontier dependency ledger refresh succeeded. Updated the example contract's exact citation of the repaired QSD Statement; its mathematical use remains n=2 and its carrier is unchanged.

All six routed decisions are supplied; three reader repairs accepted, two contract enrichments reviewed without defect, and one refuter defect confirmed fatal and repaired. There is no local mathematical escalation. Run-wide mechanical closure remains with the engine, including the foreign ledger failures above. No judging, stamping, scheduling, publishing, or run-state mutation was performed.


## Root current-carrier metadata amendment

Original native mathematical acceptance remains above. Current source continuity and actual later contract/manifest maintenance are recorded in `research/quantum-computing-algorithms-60-2026-10-15-owner-step3-metadata-amendments/root-current-carrier-amendment.json`. The affected accepted-repair labels now honestly read amended_repair because the composite carrier differs from reader-post; no new execution, mathematical repair or historical observation is invented.
