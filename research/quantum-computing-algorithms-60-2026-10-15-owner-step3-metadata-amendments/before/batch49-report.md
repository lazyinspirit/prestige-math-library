# Batch 49 Step 3a adjudication

Run: quantum-computing-algorithms-60-2026-10-15; group: batch-49. Review in generated dependency order.

## lem-qa-25-isometry-error-implies-trace-distance

Reviewed steps 1.1–3.1 against current finite SVD and spectral theorem statements. Tensor amplification preserves the norm; pure-state distance follows from eigenvalues ±sqrt(1-|a*b|²); the trace-norm dual formula proves partial-trace contraction and convex extension to mixed states. Zero-dimensional input admits no trace-one rho; delta=0 and coincident rays give zero. No AC or reader/refuter finding applies.

## lem-qa-25-parity-path-transfer

Reviewed steps 1.1–3.1 against matrix-dynamics, spectral, Dirac and exponential supplier statements. Prefix-XOR conjugation gives two weighted paths; normalized Hamming-weight counting gives H0=(2/n)J. The explicit sign basis yields exp(-i pi J)=(-i)^n product Xr, so t=pi n/2 is correct. Checked n=1, missing endpoint neighbors and repeated eigenvalues; n=0 excluded. No arbitrary choice. Reader-post source and contract differ from pre fingerprints; current transfer proof is sound and retained.


Polynomial target: accepted the tau=0 convergence correction; J0(0)=1 and Jk(0)=0 for k>0. Definition retains the scalar target and makes no unsupported implementation assertion. Checked its exact exponential/QSP/SV suppliers.

## lem-qa-25-hermitian-block-encoding-signal-subspaces

Checked all four steps against the exact access model, block-encoding, finite spectral theorem, adjoint and PUE signal-space statements. Orthogonal components have squared norm 1-x²; applying U to (I-Pi)U* v gives s²v-xs eta, fixing both matrix columns. Orthogonality holds also for repeated eigenvalues. x=0 uses s=1; x=±1 uses no division. Residual complements remain outside the clean projection under the paired action. Finite eigenbasis choice needs no AC; no reader/refuter defect applies.

## thm-qa-25-qubitization-signal-sequence

Checked steps 1.1–3.1 against exact access and QSP/QSVT suppliers, reflection and convention-conversion statements. F=[[0,U*],[U,0]] is an involution with compression K/alpha; R F gives [[x,s],[-s,x]], hence exp(±i arccos x). Alternating paired bases yield the stated matrix-order product for all eigenvalues, including zero, endpoints and multiplicities. QSP admissibility supplies phases, and i^d is retained under control (d=0 trivial). No AC or additional synthesis-cost claim; reader/refuter reports have no finding here.

## lem-qa-25-sorted-xor-sparse-access-isometries

Checked every step against exact QA20 total sorted XOR lists, coherent oracle, root Dirac pairing, block-encoding and state-preparation cost statements. F_x uses distinct pads N+l below M; binary lower_bound finds slots including slot zero; compute/XOR inverse/swap erases all prepared slots. Masked queries allow controls without free controlled access. Value amplitude is inserted only on the right, yielding H_ij/(dh), not a squared modulus. Cauchy–Schwarz with Hermitian row/column sums establishes ||H||<=dh. Checked listed zeros, empty rows, invalid labels, N=d=1, d>N, H=0 with h>0 and repeated raw sentinels. Finite reversible history needs no AC. Retain added normalization proof.

## thm-qa-25-bounded-error-parity-query-lower-bound

Checked three steps against actual finite XOR oracle, involution, promise and uniform circuit definitions. Oracle matrix entries are affine in signs; q calls give degree q amplitudes and degree 2q signed expectation. Pointwise error gives chi*p>=1/3 while every degree<n character is orthogonal to parity. n=0 gives the trivial lower bound and n=1 rules out zero queries. No promise restriction or free input-dependent gates is used; no AC or reader/refuter finding applies.

Supplied sparse algorithm: accepted explicit permutation semantics, decoding/unquery interfaces, certified bound and zero branch. Dependencies supply only the operations actually invoked; exact uniform preparation is separately supplied, avoiding ray/global-phase ambiguity. Direct consumer checks completed below.

## thm-qa-25-sparse-no-fast-forwarding-lower-bound

Reviewed all six steps and current QA20, finite evolution, norm, cost, XOR, parity-transfer and parity-lower-bound supplier statements. Rounding has spacing <=2 eta and positive weights; row/column sums give ||E||<=2 eta. Duhamel differentiation gives t||E||<=1/6. Simulation error plus rounding <=1/2 bounds wrong-bit probability by 1/4. Each sorted predecessor/successor or value query uses one bit in compute/copy/uncompute, costing two bit queries, hence q>=n/4. Checked n=1, boundary rows, sentinels, exact dyadic generation, and constant upper/lower normalization. The bound concerns sparse oracles only; no arbitrary block-access lower bound or AC. No routed finding.

## thm-qa-25-sparse-hamiltonian-block-encoding-correctness

Reviewed all five proof steps against the actual supplied-permutation and sorted-XOR procedures and seven cited suppliers. The flag columns are orthonormal, value work is uncomputed, and the root pairing puts the right amplitude first. For h>hmax the unique overlap is H_ij/(d_H h); amended the stale hmax denominator in step 2.1 and its contract mirror. Witness H=[1], d_H=1, h=2 gives 1/2, not 1. The row/column Cauchy–Schwarz normalization proof is sound, as are h=0, H=0 with h>0, sentinels, d_H=1, logarithmic sorted lookup, and separately costed adjoints/controls. Statement and procedure remain unchanged in this adjudication; no AC. Refuter:49:1 is confirmed fatal and completely repaired with confidence 1.

Parity example: verified all four prefix-XOR paths, hmax=1/sqrt(2), dH=2 and alpha=sqrt(2) using the tight certified bound. H0 has spectrum {-1,0,1}, so exp(-i pi H0)=I-2H0² maps the start to minus the endpoint. Contract-only change is audit enrichment; no item edit needed.

## lem-qa-25-jacobi-anger-truncation

Reviewed all eight steps against current coefficient/exponential definitions, exponential convergence/derivative/addition statements and both actual simulator procedures. The beta-weight moment recurrence integrates integrable endpoint singularities (including k=0) and gives |Jk|<=(|tau|/2)^k/k!. Absolute uniform exponential products justify regrouping into Chebyshev terms. Tail ratios require |tau|/(2(d+2))<1. Rounding contributes <rho/16, plus rho/8 tail. Rechecked the degree proof: S>=1/4 for tau0>epsilon, m=ceil(64S) is eligible, factorial lower bound and both r=L/tau0 regimes give test <=rho/8, and m<=68S. tau=0 and negative tau, d=0, x=±1 and small-time equality are included. No AC; no reader/refuter finding. Contract-only delta retained as audit enrichment.

## thm-qa-25-qubitized-simulation-correctness

Reviewed all five steps against current OP4 instructions, phase synthesis success theorem, QSVT signal action and robustness, spectral/norm/reflection, robust OAA and isometry-to-trace-distance suppliers. Even/odd Hermitian singular transforms recover signed eigenvalue polynomials, including zero and repeated endpoints. Scaling B gives <3rho error; two extraction errors contribute 2delta_qsp+8d sqrt(epsilon_BE). Actual block is a contraction since it compresses a unitary, so robustness hypotheses hold. Post-degree budget implies eta<=9epsilon²/16384<1/100; OAA gives 15epsilon/64 leakage-inclusive error, and remaining unrolled errors add epsilon/64. Success is conditional on certificates; no clean-work or dirty-input guarantee is inferred. t=0, epsilon=1, zero odd target and arbitrary reference systems checked. No AC or routed finding.

## ex-qa-25-chebyshev-truncation

Reviewed all three steps against current target definition and the fully reviewed Jacobi–Anger lemma. Coefficients are J0,-2iJ1,-2J2, T2=2x²-1, with real-even and imaginary-odd parts. Tail condition specializes to |tau|<8, without claiming it at equality. tau=0 yields the exact constant 1; x=±1 needs no exception; negative tau is covered by real coefficient series. No standalone QSP implementability is asserted and no AC is used. Current item bytes unchanged; contract-only delta is audit enrichment.

## thm-qa-25-small-time-aware-simulator-correctness

Reviewed all three steps against actual two-branch wrapper, OP4 correctness, normalized exact access, finite differentiable evolution, norm bound and trace-distance supplier. Integration over signed time gives ||exp(-itH)-I||<=|t| ||H||<=alpha|t|. The equality threshold belongs to the identity branch; t=0 and H=0 are included. Large branch inherits only successful OP4 certificates, and arbitrary references follow from clean-input isometry comparison. No AC or reader/refuter finding.

## thm-qa-25-qubitized-simulation-resource-bound

Reviewed all five steps against actual wrapper/OP4 circuit, Jacobi–Anger degree bound and exact QSVT/QSP query/resource statements. W contains two real extractions; three OAA blocks give 3(dE+dO) signal calls and 3(dE+dO+2) phase slots, each with two controlled reflections. Control against identity uses one controlled signal iff odd, separately from Phi/-Phi phase selection. d=0 targets and zero odd target cause no exception. Small-time equality uses zero signal calls, with comparison cost separate. Sparse normalization is d_H h for any certified h>0, h=0 uses normalization 1 and no sparse queries, and sorted-XOR multiplier remains logarithmic. For tau bounded away from zero/infinity, denominator is Theta(log L); no precision-term lower bound is inferred. No AC. Retain supplied-bound reader repair; all counts match suppliers.

Local contract check found two mechanical mismatches: refreshed F9’s cost-model quote to an exact current sentence and added the F3 input already cited in sparse-correctness step 1.1. These are contract synchronization, not mathematical defects.

## Dispositions and evidence binding

All 11 owed obligations are recorded in the companion decisions JSON: nine touched carriers, one refuter finding and one page. The three contract-only carriers (Jacobi–Anger, parity example and Chebyshev example) are reviewed_no_defect/audit_enrichment with empty defect IDs. The sparse-correctness touched repair is amended_repair; the refuter finding is confirmed_fatal and closed by its single dedicated ledger row. Other source repairs and the page update are accepted. Repair confidence is 1 for completed repairs.

Compared both frozen snapshots: all eight unedited touched item sources equal their reader-post raw hashes; the three audit-only item hashes also equal pre. The sparse-correctness source before Alpha's single denominator correction exactly matched reader-post raw cd305bb64e98fa3aea383182237c14f2ad7747c6bf513b333a542320bc048aa3. Its corrected raw hash is 77135c8fd401a38d4e69952ad031a0c24f1556721ab74a5955fd10688778588b. The routed refuter observed hash ce0cea76e5431aaa5b98ca56ba1d9ac37da464ef0d1e8f0d77df115ff5be6ba8 differs from that reader-post hash; the finding was independently reproduced in the actual reader-post proof and is not decided by assuming those byte bindings coincide. No historical reconstruction or owner-resolution exception is claimed. The parity source repair is retained on the current complete argument and pre/post source/contract comparison; this review does not attribute a new historical defect to that item.

Four closed rows were appended with caught_at_stage 3a-adjudicate: qca60-b49-3a-sparse-access-interface, qca60-b49-3a-sparse-certified-bound, qca60-b49-3a-zero-bessel-ratio and qca60-b49-3a-sparse-overlap-denominator. The generated ledger view was refreshed by the append tool. Contract synchronization failures have no defect row.

## Sources and actual prerequisite checks

Current cited item statements/definitions were read directly, including finite SVD/spectral/adjoint/norm facts, matrix evolution and exponential facts; QA20 exact sorted sparse XOR and QC access/cost/state-preparation interfaces; QA23 admissibility, phase factorization, synthesis correctness, reflected/SU(2) conversion and signal/phase count; QA24 PUE signal spaces, singular transforms, circuit, robustness, phase implementation and resource counts; and QA21 robust OAA. The actual QA23 phase procedure and QA24 QSVT procedure were also read. These are interface and assigned-argument reviews, not an audit of every transitive supplier proof.

Authoritative external checks: [Childs, Lecture Notes](https://www.cs.umd.edu/~amchilds/qa/qa.pdf), §28.1 equations (28.1)–(28.3), printed p.139, supports the parity weights and hypercube reduction; §29.3 equations (29.25)–(29.34), printed pp.146–147, supplies the paired-basis action and alternating U/U* convention. The current proof handles their degenerate cases explicitly. [Gilyén–Su–Low–Wiebe](https://arxiv.org/pdf/1806.01838), §3.3 Lemma 22, PDF printed p.23, states the 4d sqrt(delta) bound for contractions and admissible parity polynomials; §5.1 Lemma 57 and proof, printed pp.49–50, provides the real/imaginary Chebyshev split and factorial Bessel estimate, while Theorem 58 and Lemma 59, printed pp.51–52, give the simulation/degree regime. Local proofs establish the claims actually used; citations do not replace them.

## Consumers, scope and published content

Alpha changed no Statement, Definition, dependency edge, provenance class, manifest membership or page bytes. Existing provenance already marks the sparse proof ai-altered; no judge record was present to invalidate. The correction is a proof-local algebraic denominator change. Manifests and content contracts retain the approved claims and stable IDs; the exact derivation mirror and all 13 required risk reviews are synchronized.

For accepted reader Definition/Statement changes, searched all current item/page dependency and reference consumers and inspected their actual uses. Within QA25 these are the simulator, sparse correctness/resource results, Jacobi–Anger and both relevant examples, plus the parity lower-bound consumer. Outside this batch, QA27 CKS procedure's finite-precision budget explicitly sets h=1 and compression Atilde/d with separately supplied permutations; its guarantee F6 uses the same specialization. QA26 HHL cost F1 uses sorted-XOR h=1 and logarithmic location counts. QA30 SDP procedure's derived-access paragraph and sparse-substitution F2 use sorted distinct support unions allowing listed zeros and normalization dh. These uses remain sound; no supplier-first repair is owed outside batch 49. The frontier dependency ledger records this closure. No published defect was confirmed, so the published ledger remains untouched. No withdrawal was proposed or deleted.

## Checks and blockers

Reflow of the one Alpha-edited item was unchanged. Focused precheck: 1 proof checked, 0 failing. Focused renderer: 1 file, valid YAML and all math parsed. Initial strict contract check identified two mechanical mismatches; after synchronizing the F9 source quote and missing F3 input, strict contract check passed all 16 contracted items with 0 errors and 0 warnings. Risk report was run before review; all 13 HIGH/CRITICAL reviews are now specific and complete, and --require-reviewed passed. Final proof-layout ran once after the final item edit/formatter, on items/thm-qa-25-sparse-hamiltonian-block-encoding-correctness.md: 1 item, 5 steps, 0 defects.

No unresolved mathematical blocker or outside-scope alert remains from this assignment. Engine hashing, gate battery, judgment and stage transitions were not run or claimed.
