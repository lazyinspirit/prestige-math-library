# Batch 60 Step-3a adjudication

Run: `quantum-computing-algorithms-60-2026-10-15`; group: `batch-60`.

Scope: five touched obligations, no reader/refuter findings or page obligations. Source inventory and pre/post snapshots opened; reader and refuter evidence considered independently.

## Completed review checkpoints

### thm-qa-36-finite-cheeger-bound

Checked every step and current cited Markov, spectral and Cauchy–Schwarz statements. Symmetric flow row/column sums justify coarea; level sets have mass at most 1/2, including zero function. Weighted median gives disjoint positive/negative supports and the mean-zero norm comparison. Irreducibility makes eigenvalue 1 simple; complex vectors reduce to real/imaginary parts. Periodic eigenvalue -1 is harmless because the conclusion concerns the algebraic gap. Finite sums require no AC. Source: Aharonov et al. Theorem 2.5 (context); the local coarea proof supplies the bound independently. Reader/refuter report no remaining finding.

### lem-qa-36-partial-trace-contracts-trace-distance

Checked every step and current cited partial-trace pairing/positivity, trace-norm spectral formula, tensor-basis, norm and spectral statements. Hermiticity is verified by matrix entries. The signed spectral projection attains the Hermitian dual maximum; tensoring a self-adjoint contraction with identity repeats eigenvalues. Pairing then proves contraction with the correct factor 1/2. Both factors are nonzero; zero state difference and one-dimensional factors satisfy the proof. No assumption of contraction for general non-Hermitian maps is used, and no AC is needed. Reader/refuter report no defect.


### lem-qa-36-gapped-projection-regularity

Checked all four steps and exact path, spectral-calculus and operator-norm suppliers. A fixed local contour remains in the resolvent set by a uniformly convergent finite-matrix Neumann series; inverse differentiation gives R-prime=-RH-prime R and the stated second derivative. Compact contour differentiation and coherent local patching prove C2, including one-sided endpoint derivatives and internal eigenvalue collisions. Full band P=I gives constant projection. JRS PDF pp. 3 and 6–7 supplies the same local Riesz setup; no AC or individual eigenvector differentiability is assumed.

### lem-qa-36-jrs-finite-band-estimates

Read every step and cited linear-algebra/path supplier. Independently checked commutator signs, off-diagonal blocks, adapted orthonormal-column Cauchy–Schwarz estimates, triple-resolvent residues (including coincident band eigenvalues), and differentiation of the local contour. The QP bounds give sqrt(m)||H-second||/g+4m||H-prime||^2/g^2 and the final 2m term. JRS Lemmas 2 and 5–8, PDF pp. 6–12, agree with these identities. The local proof uses rank m rather than distinct-eigenvalue count; rank bounds the column count and remains fixed at crossings. For P=I the reduced operators vanish, consistent with gap infinity. No AC; no unresolved reader/refuter evidence.

### thm-qa-36-jrs-finite-adiabatic-bound

Checked every step against the current proved band estimates, finite matrix ODE theorem and norm/spectral statements. Anti-self-adjoint D=[P-prime,P] makes TH+iD self-adjoint; [D,P]=P-prime proves intertwining by ODE uniqueness. Differentiating the wave operator gives the negative D kernel. Integration by parts with twiddle has the stated -i/T sign in the QP block; off-diagonal commutators with D vanish there. Norm bounds give endpoint m terms and integral coefficient 4+1+2=7. Projection-difference norm equals maximum of the two off-diagonal wave-operator block norms after unitary multiplication. Squaring controls leakage of every initial unit band vector. Checked s=0, full band, internal degeneracy and T>0; no assertion at T=0. JRS Theorem 3, Lemmas 1–8 and equation (11), PDF pp. 5–12, independently checked; rank substitution is an upper bound. No AC.

### thm-qa-36-adiabatic-path-to-circuit-simulation

Reviewed all six steps and actual algorithm, resource, exact-time, matrix-dynamics, product-formula, uniform-circuit and norm suppliers; read the commutator-error supplier proof. Physical-time Duhamel gives TM1/(2q)<=epsilon/6, coefficient error epsilon/3, formula error epsilon/6 and provider telescoping epsilon/6, totaling 5epsilon/6. All provider-induced target operations are unitary under their access contract, so the telescopes apply. A0 has norm one and domain C^m; the evolution block has domain V. Checked T=0 separately, M1=0, B=0, M=1 and negative coefficient call times; unsupported calls are explicitly outside the output guarantee. Polynomial full-list generation is conditional; a named oracle is charged and is not silently a finite-syntax circuit. No adiabatic gap claim is needed for this simulation bound. No AC or unresolved report finding.

### ex-qa-36-two-level-avoided-crossing

Checked all four steps against the current finite JRS theorem and spectral/path definitions. H^2=((s-1/2)^2+1/4)I gives opposite eigenvalues (trace zero), gap minimum 1 and endpoint sqrt(2); H-prime=Z has norm 1 and H-second=0. The antiderivative gives integral 7/sqrt(2), and endpoints contribute 1, hence A1=(1+7/sqrt(2))/T. Ground band is simple at endpoints and midpoint; T must be positive for JRS. The example only gives the stated sufficient bound, not a necessary runtime. JRS Theorem 3 is the source for substitution; no AC.

### lem-qa-36-history-path-ground-vector-monotonicity

Checked all six steps and the actual construction/spectral suppliers. Legal-clock restriction is (1-s)diag(0,...,N)+(s/2)L_N, rather than the step potential in Aharonov Claims 3.7–3.8. The local proof independently handles this change: absolute values minimize the quadratic form; positivity propagates across the path; the tridiagonal recurrence fixes every eigenvector from v0 and proves simplicity. Differences d_i have increments (E-ai)v_i/t, which change sign at most once; nonnegative endpoint differences follow from 0<=E<=aN/2. Thus every difference is nonnegative. Explicit s=0, s=1 and N=1 cases avoid division by zero. No Perron assertion or arbitrary choice is imported; no defect in current proof.

### lem-qa-36-history-state-ground-and-output

Checked each of seven steps against the actual five-local patterns, partial-trace formula, trace-distance range and Dirac conventions. Every local block has quadratic form ||y-Ux||^2/2, hence is positive on the full register; legal clocks are invariant and prefix conjugation gives I tensor L_N/2. The input penalty at c0 selects the all-zero data vector. A full zero-energy vector must be in the clock-penalty kernel, so uniqueness extends to the full Hamiltonian. Clock trace removes cross terms and yields L early terms and K+1 final terms; distance is at most L/(N+1)<=epsilon/2. L>=1 ensures the early mixture is defined, and prescribed padding gives N>=3 so endpoint patterns exist. Aharonov section 3.1.1 and Lemma 3.10 checked as context; the local mixture proves the exact bound. No AC.

### lem-qa-36-history-path-restricted-gap

Checked all six steps and current Cheeger, monotonicity, history and spectral suppliers. For s<=1/6 the codimension-one argument gives E1>=1-s and E0<=s/2, hence gap>=3/4. For s>=1/6 positive v permits the ground-state transform. Conductances pi_(i+1) give exit rates <=2 and P=I+Q/2; its flow is c_i/2. Both cut cases yield phi>=1/(2N), Cheeger yields generator gap>=1/(4N^2), and t>=1/12 gives the asserted 1/(48N^2). Applying the Rayleigh lower bound to a first excited eigenvector supplies the final gap inequality. Checked N=1 and both s endpoints; no limit near zero is needed. Aharonov Lemma 3.5/Claims 3.7–3.8 are step-potential context, not a substitute for this linear-potential proof. No AC.

### lem-qa-36-history-path-full-gap

Checked all six steps and full current perturbation lemma proof, restricted-gap proof, monotonicity and history suppliers. Prefix conjugation separates input Hamming-weight sectors. v0^2>=1/(N+1); a two-dimensional compression bounds the clock gap above by 2. Adding the c0 projector lifts each nonzero-input sector by at least p*Delta/(1+Delta)>=p*Delta/3; p=1 is checked separately. Thus the legal gap is >=1/[144N^2(N+1)]>=Delta0. Illegal clocks have clock penalty >=I and ||H1||<=n+N<=K0, legal dimension>=2. J-2K0=4K0^2/Delta0+1 gives perturbation error strictly below Delta0/4, proving simplicity and strict full gap >3Delta0/4. s=0, s=1, N=1 and the p=1 branch are sound. Aharonov Lemma 3.17 checked; local proof keeps its additive error separate. No AC.

### thm-qa-36-circuit-to-adiabatic-simulation

Checked every step with all current gap, JRS, history, trace-distance, simulator, circuit and cost suppliers. Initial common positive penalties select |0^n>|c0>; H-prime=Hprop-Hclock0 has norm <=2N<=3N and H-second=0. gamma=1/[288(N+1)^3] gives BT=6N/gamma^2+63N^2/gamma^3=O(N^11); T=ceil(4BT/epsilon) makes adiabatic error <=epsilon/4. Rank-one projector norm equals pure-state distance. Provider operator error epsilon/4 bounds vector and hence pure-state distance; partial trace contracts both contributions. Padding epsilon/2 gives total <=epsilon. M=n+3N-1, polynomial J and B=M^2J^2 give polynomial q and rPF in n,L,1/epsilon, with rational encodings and all provider costs conditional as stated. Exact coefficients permit zero approximation error. Checked L=1, n=1, epsilon=1; construction N>=3 avoids clock-boundary ambiguity. No zero-input preparation or inverse/controlled access is free. Current F6/4.1 correctly retain named-oracle schedules. No AC.

## Routed decisions and carrier changes

### def-qa-36-finite-adiabatic-path-model — amended_repair

The current Definition explicitly indexes H and P on [0,1] and types the comparison state and measurements on V. Its finite matrix ODE has a unique unitary propagator, A0 is an isometry C^m to V, and positivity/cyclic trace make the evolved state well-defined. Checked rank m>=1, P=I with infinite complementary gap, internal band crossings and both endpoints. Reader changes are sound; current item bytes equal reader-post and differ from pre. Amended the manifest Definition mirror to match current content. All direct uses retain their stated domains and hypotheses; no consumer statement needs repair. Repair confidence: 1. Closed ledger rows: `qa60-b60-3a-path-domain`.

### alg-qa-36-discretized-path-simulation — amended_repair

Current algorithm specifies admissible finite encoded inputs, availability failures, T=0 branch, finite q/rPF loops, descending chronological term order, certified unitary target providers and separately charged resources. The term-access model permits named exact-oracle calls, whereas the full-list circuit definition fixes a finite gate alphabet; a general access schedule is the sound output type. The conditional expansion into a circuit preserves the richest supported result. Current source equals reader-post and differs from pre; amended title and full Definition manifest mirrors. Checked the five-local algorithm and both simulation theorems as direct consumers. Repair confidence: 1. Closed ledger rows: `qa60-b60-3a-discretized-provider`.

### alg-qa-36-five-local-history-path — amended_repair

The repaired output retains the declared circuit-family or named-oracle provider for each term call. All seven instructions are concrete and finite: K=ceil(2L/epsilon), N=L+K>=3, explicit endpoint/internal patterns, positive local blocks, integer J, certified M1/B, T, simulator invocation and clock discard. For n,L>=1 and epsilon<=1 no endpoint pattern is undefined. Correctness/gaps are proved separately in the assigned lemmas. Current source equals reader-post and differs from pre; amended its Definition manifest mirror. Checked all history-path lemmas and the two-gate example; their construction-only uses require no repairs. Repair confidence: 1. Closed ledger rows: `qa60-b60-3a-history-provider`.

### thm-qa-36-adiabatic-path-to-circuit-simulation — amended_repair

Current source equals reader-post and differs from pre. The evolution guarantee is on V, followed by a separately typed C^m-to-V isometry-composition guarantee; ||A0||=1 transfers the bound. The finite access schedule becomes a full-list uniform circuit only under circuit-provider and polynomial-generation conditions; named-oracle calls keep their query charges. All six proof steps and cited prerequisite statements were independently checked. Duhamel, coefficient, product-formula and provider errors total 5epsilon/6. T=0, M1=0 and B=0 are covered. Amended statement/title manifest mirrors and completed risk_review; the circuit-to-adiabatic consumer already incorporates the repaired F6. Repair confidence: 1. Closed ledger rows: `qa60-b60-3a-simulation-typing`, `qa60-b60-3a-simulation-provider`.

### thm-qa-36-circuit-to-adiabatic-simulation — accepted_repair

Current source equals reader-post and differs from pre; only risk_review was added to its contract, with source/manifest unchanged from reader-post. Reader F6 and Proof 4.1 correctly use the declared access schedule rather than an unconditional finite-basis circuit. The current suppliers give gamma=1/[288(N+1)^3], A1<=epsilon/4, simulation distance<=epsilon/4 and padding distance<=epsilon/2. Trace contraction/triangle prove final epsilon. Polynomial resource bounds are conditional on the declared providers and are polynomial in n,L,1/epsilon. No further source repair or changed theorem statement is needed. Repair confidence: 1. Closed ledger rows: `qa60-b60-3a-circuit-consumer`.

The five touched source files all match their immutable reader-post raw SHA-256 values and differ from their pre-reader values. The snapshots bind those states; the reader report and pre-reader manifest mirrors document the corrections. No original full-source preimage was reconstructed or claimed read. All current proofs and actual prerequisite statements were reviewed independently. Four decisions are `amended_repair` because their manifest title/Statement/Definition mirrors required synchronization; the fifth is `accepted_repair` with a risk-review-only contract addition. No item source, proof, page, dependency edge, provenance field or verification stamp was changed by this dispatch. The reader's affected contract quotations and derivations pass the current strict check.

## Sources and consumer dispositions

Read current local dependency statements/definitions for every declared supplier used in the routed arguments, including Markov reversibility/stationarity, finite spectral/norm/adjoint/trace calculus, tensor bases and partial trace, density/measurement definitions, the finite matrix ODE, exact-time term access, first-order product formula and uniform-circuit/cost interfaces. Read the complete current commutator-error and clock-penalty proofs because their estimates are used substantively. The draft in-batch suppliers were reviewed in full as recorded above. No audit of unrelated transitive published proofs is claimed.

Consulted [Jansen–Ruskai–Seiler](https://arxiv.org/pdf/quant-ph/0603175), general conditions and Theorem 3, Lemmas 1–3 and 5–8, equations (9), (11)–(19), PDF pp. 3–12. Relevant complete arguments were read in the cached text `research/quantum-algorithms-planning/sources/qa_r4/jansen-ruskai-seiler-quant-ph-0603175.txt`, lines 175–485 and 575–895. The local proof uses finite-rank column estimates and includes eigenvalue coincidences rather than assuming individual eigenvectors are differentiable. The source's bounded-operator and isolated-band hypotheses hold locally in the assigned finite-dimensional model; its constants are bounded by the fixed rank.

Consulted [Aharonov et al.](https://arxiv.org/pdf/quant-ph/0405098), Theorem 2.5, Lemma 3.5, Claims 3.7–3.8, Lemma 3.10, input-sector discussion and Lemma 3.17; cached text `research/quantum-algorithms-planning/sources/qa_r4/aharonov-adiabatic-equivalence.txt`, lines 430–475, 575–815, 840–975 and 1070–1185. This is route context: its initial clock potential is a step potential, whereas the assigned sum-of-clock-bits potential is linear. The current local recurrence, conductance and input-sector comparison independently establish their actual constants; the source is not treated as proving the changed potential.

Also read Childs, `research/quantum-algorithms-planning/sources/qa_r6/childs-lecture-notes.txt`, PDF pp. 141–143, 159–164 and 179–184 (printed Chapters 27, 30 and 33), [source](https://www.cs.umd.edu/~amchilds/qa/qa.pdf). These give simulation and adiabatic/history context; the exact quantitative claims are established by the local proofs and JRS. The source's alternative clock and Hamiltonian conventions are not silently substituted for the assigned ones.

A repository search for the four changed Statement/Definition suppliers found their actual consumers entirely within batch 60 and its A-page summary. Checked the path/resource definitions, projection/JRS suppliers, both algorithms and simulation theorems, history lemmas, avoided-crossing example, gap-closing counterexample and two-gate example. Domain clarifications preserve their uses. Access-output changes are already propagated to the five-local algorithm and both simulation results; other consumers use the unchanged Hamiltonian construction or mathematical path, not a claimed compiled circuit. The A-page summary correctly conditions simulation on declared access. No consumer repair outside this batch is required. Stable IDs and all proposed withdrawals are preserved. No defective published item was identified; no published-ledger mutation or lock was needed.

## Local validation and handoff

- Initial `node tools/risk-report.mjs research/quantum-computing-algorithms-60-2026-10-15-batch-60.proof-contracts.json`: 12 HIGH/CRITICAL items routed, 0 errors.
- Added a specific complete `risk_review` for each of those twelve items; rerun with `--require-reviewed`: 0 errors, 15 contract subjects reported.
- `node tools/proof-contract.mjs research/quantum-computing-algorithms-60-2026-10-15-batch-60.proof-contracts.json --strict`: 15/15 checked, 0 errors, 0 warnings.
- `node tools/tsx-run.mjs tools/precheck.mts` on the five touched source paths: both theorem proofs PASS, 2 checked, 0 failing; the three definition/algorithm carriers have no proof section.
- Final batched `node tools/proof-layout.mjs` on those same five paths: 5 items, 12 steps, 0 defects. No item edit or formatter followed it.

Six confirmed defects have six closed rows at `caught_at_stage: "3a-adjudicate"`, referenced by the five owed decisions. No reader/refuter finding or page decision was fabricated. No remaining mathematical blocker or escalation was found. The engine owns decision hashing, the gate battery and later transitions; none was initiated or claimed here.


## Root current-carrier metadata amendment

Original native mathematical acceptance remains above. Current source continuity and actual later contract/manifest maintenance are recorded in `research/quantum-computing-algorithms-60-2026-10-15-owner-step3-metadata-amendments/root-current-carrier-amendment.json`. The affected accepted-repair labels now honestly read amended_repair because the composite carrier differs from reader-post; no new execution, mathematical repair or historical observation is invented.
