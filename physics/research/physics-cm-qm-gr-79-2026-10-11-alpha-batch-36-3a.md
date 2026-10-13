# Batch 36 Step 3a adjudication

Run: `physics-cm-qm-gr-79-2026-10-11`; group: `batch-36`; scope: batch 36 only. Engine owns hashes, stamping and gates.

## Completed dependency-order review

### `lem-nrqm-oscillator-diagonal-adjoint-and-graph-core-lemma`

Reviewed every step 1.1–4.1 and exact operator/adjoint/Parseval/CS supplier definitions and statements. Real lambda is essential for symmetry; testing each basis vector gives both adjoint-domain inclusions. Weighted square summability proves convergence; both unweighted and weighted tails prove graph-core density and closure equality. Unique extension follows maximal symmetry. Zero lambda, repeated lambda and unbounded sequences are admissible; countable choice is explicitly carried from adjoint/Parseval suppliers. The stray reference to 1.2 instead of 2.2 in 3.1 and redundant assertion in 2.1 are immediately repaired by the explicit tail/direct pairing arguments already written; no fatal defect.

### `thm-nrqm-oscillator-diagonal-spectrum`

Reviewed steps 1.1–3.1 and exact resolvent definition and diagonal supplier. The inverse is bounded precisely outside the closure, with domain membership bounded by (1+|lambda|/d)^2. Basis vectors give the exact norm even when the infimum is unattained. Distinct closure points admit increasing approximate-eigenvector indices (choose least possible index); coefficient comparison excludes every eigenvector. Repeated eigenvalues and zero eigenvalues cause no problem. Countable choice is carried; no DC bounded-inverse theorem is invoked. Reader strengthening from may fail to zero kernel is valid.


### `thm-nrqm-oscillator-hermite-recurrence`

Reviewed 1.1–4.1 and all exact suppliers. Gaussian normalization now follows the published Lebesgue Gaussian-transform statement at n=1, xi=0, parameter t/pi; no defective batch-35 improper-integral convention is consumed. Polynomial moments have the explicit power-series majorant; derivative products are L1 by Cauchy–Schwarz and P invariance; boundary decay follows the same exponential estimate. Unique continuous representative follows positive measure of any interval on which it is nonzero. Componentwise FTC and integration by parts give both adjoint pairings. Rodrigues induction, leading degree, parity, ladder commutator and n=0 with g_-1=0 checked; CC carried from L2/Gaussian suppliers. Reader representative/Hilbert-pairing repair accepted with this supplier repair and duplicate F5 relabelled F6.

Batch-35 producer proof, contract and manifest independently read. Its F7 citation does not define the attributed bilateral integral, and its Statement does not define the multidimensional improper integral or identify it with the product Lebesgue integral. The existing published Euclidean Gaussian-transform statement supplies all positive-real Gaussian values needed locally. Replaced that consumer dependency, without changing its Statement. The three original producer findings remain escalated for producer-batch 35; original routing metadata will be retained. Required owner decision: repair producer with an explicit Lebesgue formulation (or prove an explicit improper/Lebesgue identification), synchronize its contract/manifest and review its consumers. No producer edit or certification made.

### `lem-nrqm-oscillator-closed-ladder-domains`

Reviewed every step 1.1–3.1 and exact Parseval/adjoint/diagonal/recurrence supplier statements. Square-summable weighted coefficient shifts prove existence; testing every e_m proves both adjoint inclusions, including the missing zeroth coefficient of the creation operator. Products require n^2 weights, using (n+1)^2<=2n^2+2; the commutator is only asserted on D(N). Kernel at n=0 and creation injectivity checked. Each weighted tail proves the claimed closures. Concrete clause (f) is explicitly conditional on a complete orthonormal Hermite family; the degree-triangular span property follows immediately from recurrence (f), without assuming later Hermite completeness. Countable choice carried. F2 closedness is used only via the valid adjoint-is-closed direction. No change needed.

### `thm-nrqm-oscillator-hermite-orthogonality`

Reviewed every step 1.1–3.1 and exact recurrence, pairing and orthonormal-family definitions. Both adjoint pairings on invariant P imply symmetry of a-dagger a; real distinct n,m force zero pairing. The cases m=0,n=0 are addressed separately. Norm induction divides only by n+1>0. Product-rule expansion gives Y^2-partial^2=2a-dagger a+I with the correct sign. Ladder pairings at zero follow ag0=0 (the expression involving g_-1 is zero). No completeness is assumed. Countable choice and Lebesgue equivalence classes carried; positive real Gaussian normalization is locally repaired upstream.

### `thm-nrqm-oscillator-hermite-completeness`

Reviewed every step 1.1–4.1 and exact Fourier uniqueness, DCT, CS, exponential-series and Parseval statements. Confirmed refuter:36:3 as nonfatal: the original proof began with orthogonality and then claimed the moment-hypothesis result. Now begins with arbitrary f satisfying (a) and separately derives that hypothesis from orthogonality using triangular polynomial degrees. All moments are absolutely integrable by CS. For each fixed xi the majorant |h| exp(2pi|xi||y|) is L1, using 4pi|xi||y|-y^2<=8pi^2 xi^2-y^2/2. DCT on the complex partial sums yields a zero transform, uniqueness gives fg0=0 a.e., positive g0 gives f=0. Gaussian majorant finiteness now uses the published Lebesgue Gaussian transform directly, avoiding the defective batch-35 convention. Orthogonality plus the zero-complement implication proves completeness; P contains the dense span. xi=0,f=0 and CC checked; Statement unchanged.

### `ex-nrqm-oscillator-formal-nonnormalizable-solution`

Reviewed every Verification step and exact oriented FTC, exponential calculus, nonnegative-integral and box-measure suppliers. Oriented additivity covers both signs of y and y=0. Differentiation yields u2 double prime=(y^2-1)u2 and W=pi^-1/4. For y>=1, F>=exp((y-1)^2), hence |u2|^2>=exp(y^2-4y+2), >=1 at y>=4. Indicators of length N force an infinite integral. For complex u, componentwise FTC makes W constant and integrates (u/g0) prime=c/g0^2. Reverse triangle inequality controls possible cancellation with C and gives a growing lower bound whenever c is nonzero. Replaced the inaccurate public phrase grows like exp(y^2/2) with the precise proved lower bound K exp(y^2/2-2y+1); uniqueness and solution family preserved. Reader complex/oriented-integral repair accepted with this refinement. No numerical or empirical claim.

### `thm-nrqm-oscillator-coherent-state-convergence`

Reviewed all six steps and exact exponential, geometric-series, Hermite and weighted-ladder suppliers. Square norms of tails are exponential-series tails; complete Hermite basis makes prescribed coefficients determine the element. Ratio n>=1 makes every weighted factorial series summable; z=0 and k=0 use integer zeroth-power convention, N^0=I. Iterated domain formula follows induction since n^{2k} weights imply all lower weights for x in H. Graph convergence of ladder images gives a psi_z=z psi_z. Overlap phase sign matches the first-linear convention, its modulus separates z!=w. Shifted exponential series gives number and creation means. CC inherited; no probability or measured premise is asserted.

### `thm-nrqm-oscillator-oscillator-scaling-and-exact-realization`

Reviewed all six steps and exact change-of-variables, test-function, diagonal, Hermite and calculus suppliers. T(x)=x/ell is a C1 diffeomorphism with Jacobian 1/ell; substitution of |u-v|^2 proves representative independence in both directions. Basis transport is onto and preserves pairings. Positive hbar,omega make scaled domain weights equivalent and the spectrum discrete. Triangular polynomial degrees give P=span g_n; explicit graph approximants prove the scaled core. Corrected the proof-only erroneous equality DAD^-1=H to H=(hbar omega/2)DAD^-1. Chain rule gives the exact kinetic/potential coefficients. Twice integrating by parts against compactly supported complex tests and graph convergence yields the bilinear weak identity; no maximal-domain equality or empirical interpretation is claimed. Reader substitution, representatives and span repairs are valid.

### `thm-nrqm-oscillator-coherent-evolution-and-variance`

Reviewed all eight steps and exact Plancherel, weak-Fourier derivative, Sobolev, Parseval, ladder and multiplier statements; independently read the real-multiplier proof. Original batch-35 supplier has blanket full AC in its Statement, whereas this consumer assumes only CC. Replaced it with the published CC-only real L2 multiplier and unitary transport lemma; no extra choice premise is now needed. Basis derivatives lie in L2 and agree with weak derivatives by compact-test integration by parts. Domains of H and N coincide by weighted bounds. Phase coefficients prove group law, onto isometry and strong continuity via finite/tail estimates. Generator domain proved in both directions by coefficient limits and Parseval. Closed Q,P permit limits of ladder partial sums; weighted tails vanish. First-linear adjoint conventions give cross term z^2, hence means and both centered-norm variances. Only D(Q),D(P) are required for variances, no unsupported squared-operator domain. Evolved global phase cancels. z=0,t=0 and positive parameters checked; no empirical or uncertainty-minimality assertion.

### `thm-nrqm-oscillator-multidimensional-oscillator-completeness`

Reviewed every step and exact tensor-construction, product-unitary, bounded-tensor-map, counting and diagonal suppliers. Left-associated completions and recursive product maps are well typed; bounded tensor products of specified unitaries are onto. Clarified intermediate induction family is indexed by N^r, not by all N^d with repeated unused trailing coordinates. Finite degree levels give a bijective countable enumeration (d=1 included), preserving Parseval nonnegative sums. Coordinate differential formulas act on unique smooth product representatives and extend by finite linearity on the core. Positive frequencies give real diagonal energies; isotropic coefficient testing identifies exactly the finite level eigenspace and stars-and-bars gives its multiplicity including M=0,d=1,d=3. Anisotropic repeated energies are not assigned the isotropic multiplicity. CC carried; reader recursive definitions and transport are accepted with this proof-only indexing clarification.

### `ex-nrqm-oscillator-poisson-number-distribution`

Reviewed every Verification step and exact coherent-domain, number-operator and exponential suppliers. Coefficients with reversed pairing are conjugated but their squared moduli agree. Nonnegative weights normalize by the exponential series. D(N^2) is justified by all coherent weighted moments; reindexing n and n(n-1) sums gives first/second moments lambda and lambda^2+lambda and variance lambda. At z=0, zeroth powers give p0=1 and other weights zero; z!=0 gives positive weights for every integer. Poisson means the explicitly given normalized weights, not just equality of two moments. This is a mathematical distribution and does not claim observed counts, Born-rule validation or universal trial independence.

### `ex-nrqm-oscillator-ground-energy-units`

Reviewed all four Verification steps and exact scaling, multidimensional, Hermite and calculus suppliers. Positivity of hbar omega licenses division into units and makes n=0 the least spectral value. Twice differentiating the scaled Gaussian gives psi0 double prime=(-1/ell^2+x^2/ell^4)psi0; ell^2=hbar/(m omega) cancels x^2 coefficients. Isotropic d=1,d=3 and M=0 agree with the multidimensional spectrum, and each coordinate increment has gap hbar omega. This uses dimension d as a positive integer. Units mean ratios of positive mathematical parameters, and no measured energy or empirical precision is asserted; CC inherited.

## Verdicts and consumer dispositions

Exactly ten original routed obligations are recorded in the decisions JSON: four amended repairs; diagonal-spectrum and A-page audit enrichment without inventing defects; one confirmed nonfatal moment-direction finding; and three escalated batch-35 supplier findings. Each completed repair records confidence 1. The escalation entries retain original producer batch, consumer ID, dependency path, split carrier, pre-reader fingerprint and observed-byte binding. No observation was unbound; no owner historical resolution is invented. The unresolved producer findings have no closed ledger row because no producer repair has been authorized or completed here.

All thirteen owned risk reviews are complete against the current proof text, not the authoring-time reviews they replace. Six items were edited by Alpha. The coherent-evolution repair and B-page consumer update are newly changed carriers outside the initial touched list; they are disclosed for engine coverage/routing before closure. The closed risk-only choice defect is recorded in the defect ledger with this report as its adjudication reference; adding an eleventh unowed decision would violate the exact-obligation dispatch. Owner/engine must attach its routed decision before closure.

Actual outside uses of the reader-changed interfaces were inspected. Dirichlet diagonal-domain identification F2, compact-resolvent eigenbasis F3, and twisted periodic momentum F5 use the unchanged diagonal-spectrum closure formula. Driven-oscillator common-domain F3 uses the ladder actions, valid also at n=0 under the new convention; Coulomb atomic dipole F4 already explicitly sets the lowering term to zero. Orbital-and-spin harmonic-polynomial dimension Statement (d)/F4 uses real Hermite degrees, leading monomials, the complete three-factor basis and the finite-core differential expression; all survive the explicit recursive transport and intermediate-index clarification. The oscillator model Definition (c) uses the triangular polynomial span, and (d) specializes the multidimensional theorem at d=3. Ground-state Gaussian F1 uses unchanged normalized g0; oscillator energy spectrum F6 uses unchanged three-dimensional energies and multiplicities. None requires an outside edit or another propagation hop.

Alpha's only substantive public-interface change is the precise growth bound in the formal solution example. Its item-reference consumers are the two oscillator scope remarks: they link to the example as the nonnormalizable solution and do not repeat the defective growth wording. The B-page paragraph did repeat it and was surgically corrected within this batch. The A-page summary remains accurate and its prerequisite list now names the replacement published supplier homes. No mathematical or physical claim was withdrawn. Published/imported bytes remain unchanged; no defective published supplier was identified, so no published-ledger write or lock was needed.

The owning cross-batch input records removal of both Gaussian uses and the blanket-AC multiplier use; it preserves the historical producer hold and independently verifies the tensor layer. The missing bounded-tensor-map edge is added. Frontier ledger refresh passed. The unified ledger was refreshed by its tool, not hand-edited.

## Sources and exact conventions

Load-bearing evidence is the current local and published item Statement/Definition text: first-variable-linear complex L2 pairing, a.e. classes with unique smooth polynomial-Gaussian representatives, negative-sign 2pi Fourier normalization, componentwise complex calculus, CC for Hilbert/Parseval/integration suppliers, explicit real eigenvalue sequences, and bilinear compact-test pairings. No draft or planned statement was treated as an audited published theorem. The replacement published Gaussian lemma at n=1, xi=0, parameter t/pi supplies sqrt(pi/t); the replacement real L2 multiplier lemma supplies self-adjointness and unitary transport under CC. Their complete local proofs were read.

Retrieved authoritative literature: [Teschl, 2009 online edition](https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf), inspected Section 2.4, printed pp.73–74, and Section 8.3, pp.178–179, equations (8.33)–(8.44), Theorem 8.5. Teschl uses the opposite resolvent shift and a different normalization; the local formulas were checked directly. These passages supply context, not the new domain or weak-realization proof. [MIT 8.05 Chapter 6](https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/79a8091ef4f18d8e3ff76a097e8db33c_MIT8_05F13_Chap_06.pdf) was retrieved and inspected for the oscillator algebra and coherent/Poisson source locations. [Binney and Skinner](https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf) was retrieved and its oscillator section located; no claim of a full-book or full-transitive-source audit is made. Published mathematical suppliers were consumed at their exact statements, with complete local proof reading for the Gaussian/multiplier replacements; the three in-run tensor supplier proofs and the defective Gaussian producer proof were independently read.

## Local checks and handoff

- Initial owned-contract risk report: 13 HIGH/CRITICAL items, no tool errors. Final `--require-reviewed`: all 13 Alpha reviews present, zero errors.
- Explicit six-item reflow: unchanged; explicit six-item precheck: 6 checked, zero failures.
- Rendercheck on the six edited items and both pages: 8 files, zero defects; actual KaTeX and YAML parsing performed.
- Final single batched `node tools/physics-support/proof-layout.mjs` on all six edited items: 6 items, 36 steps, zero defects.
- Manifest/contracts updated for supplier replacements and affected statements/derivations/citations. JSON and exact obligation coverage checked separately. No judge stamps were present in edited carriers. No judge, certification, gate battery or engine transition initiated.

The preliminary `--help` probe was rejected by precheck because that tool treats non-JSON arguments as filenames; this mechanical probe was not a content failure, and the explicit checks above passed. The rendercheck `--help` probe unexpectedly ran a whole-corpus read-only check (30,661 files), reporting 45 unrelated errors and exit 1; it is outside this dispatch and is not a batch validation result. No unrelated content was edited. This command was an accidental scope expansion; subsequent validation selected the eight owned files explicitly.

Outstanding owner action: the three original Gaussian producer obligations remain escalated to batch 35 for an explicit complex multidimensional integration definition/identification and downstream review. Local consumer removal does not clear those escalations. Engine must bind/stamp the ten decisions and account for the newly changed risk-only item and B-page carrier before closure. No producer risk review or historical disposition was falsely closed.

Manifest reconciliation found and synchronized stale reader-era prerequisite arrays and public statements (including the added complex L2 pairing, explicit multidimensional construction and formal-solution suppliers) against the current carriers. This is metadata maintenance, not additional mathematical acceptance.

## Frozen fingerprint comparison

The pre/post records identify the five reader-touched items; the seven unedited owned items currently match their post-reader raw fingerprints. Alpha applied the six disclosed item edits; no unavailable raw preimage was claimed to have been read. The following are raw item SHA-256 prefixes, for comparison only; the engine supplies decision stamps.

| Item | Pre | Post-reader | Current |
|---|---|---|---|
| `lem-nrqm-oscillator-diagonal-adjoint-and-graph-core-lemma` | `4bea397dc071` | `4bea397dc071` | `4bea397dc071` |
| `thm-nrqm-oscillator-diagonal-spectrum` | `6fa15e78e301` | `54cad4bd0f6f` | `54cad4bd0f6f` |
| `thm-nrqm-oscillator-hermite-recurrence` | `52add84184a9` | `64a1f431449d` | `1a4c5601dcaf` |
| `thm-nrqm-oscillator-hermite-orthogonality` | `aceb71652295` | `aceb71652295` | `aceb71652295` |
| `thm-nrqm-oscillator-hermite-completeness` | `72a04c64246f` | `72a04c64246f` | `2abeb56703ff` |
| `thm-nrqm-oscillator-oscillator-scaling-and-exact-realization` | `ee62ba106b3e` | `d77e44f751fe` | `dfd81f10f3b9` |
| `lem-nrqm-oscillator-closed-ladder-domains` | `041c985f36b6` | `041c985f36b6` | `041c985f36b6` |
| `thm-nrqm-oscillator-coherent-state-convergence` | `85ef05e6d2ce` | `85ef05e6d2ce` | `85ef05e6d2ce` |
| `thm-nrqm-oscillator-coherent-evolution-and-variance` | `893956a44625` | `893956a44625` | `abbd7b85afa6` |
| `thm-nrqm-oscillator-multidimensional-oscillator-completeness` | `8be4a6200273` | `ad48ca08fade` | `882cc5700f13` |
| `ex-nrqm-oscillator-ground-energy-units` | `e7ee54f532b9` | `e7ee54f532b9` | `e7ee54f532b9` |
| `ex-nrqm-oscillator-poisson-number-distribution` | `5f31354a1547` | `5f31354a1547` | `5f31354a1547` |
| `ex-nrqm-oscillator-formal-nonnormalizable-solution` | `5c4ba8980622` | `4ec0c520e9ca` | `45a5850a90ea` |

The producer raw bytes remain exactly `46980b377014ec4ce62592afe5da57d1846baccc6d31663a18010e18339c492a`, matching the immutable routing carrier. Its owner has not supplied a repaired current proof in this session. No escalation has been cleared.

Final metadata check: exact ten-obligation coverage passed; all thirteen current manifest dependency arrays and public statements match their carriers; every referenced completed defect has the matching subject, stage and fixed disposition.
