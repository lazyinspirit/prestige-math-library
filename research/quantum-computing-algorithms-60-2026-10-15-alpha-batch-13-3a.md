# Step 3a adjudication — batch 13

Run: `quantum-computing-algorithms-60-2026-10-15`. Group: `batch-13`.

Scope: three touched obligations, no reader/refuter findings and no page-only obligations. Reviewed in generated dependency order; risk-report initially returned 38 carriers and 29 HIGH/CRITICAL. No judgment or certification is claimed. Current proofs and exact direct-supplier interfaces, rather than prior review verdicts, govern this review.

Sources are identified per item below. The reader report and empty findings and refuter artifacts were read. Initial unqualified risk-report passed (0 errors).

### lem-qc-modular-square-root-expected-polynomial

Checked Proof 1.1–3.1 and exact Statements of Euler criterion, quadratic-residue count and prime residue field. Prime promise is essential. p=2 and a=0 exit before odd-prime tests; half of nonzero samples are nonsquares. Tonelli–Shanks invariants x²=at, ord(c)=2^M, ord(t)|2^(M−1) are maintained: the two order-2 powers cancel and M decreases. At most log₂p iterations, each O(log p) modular products, give O((1+log p)^4) schoolbook bit cost; only independent rejection sampling is randomized. No choice axiom or unresolved boundary. No defect found.

### lem-qc-dyadic-coefficient-encoding

Checked Proof 1.1–2.1 against def-qc-dyadic-cyclotomic-ring and the exact n=8 integral-basis Statement of thm-cyclotomic-ring-of-integers. Localization gives a nonempty set of nonnegative exponents; its least element enforces the parity condition. Cross multiplication at unequal exponents contradicts that condition; equal exponents use basis independence. Zero has unique exponent zero and zero numerator. No AC use or limiting argument; no defect found.

### lem-qc-sqrt-two-divisibility-criterion

Independently multiplied by ω−ω³ to obtain (b−d,a+c,b+d,c−a). Since (√2)^2=2, x divisible by √2 is equivalent to √2x in 2O; parity gives both directions. Expanded x conjugate(x)=P+√2Q with P=sum of four squares and Q=a(b−d)+c(b+d). Its power-basis coordinates are (P,Q,0,−Q); evenness is P,Q even. The four (a+c,b+d) parity pairs give (P,Q)=(0,0) only at (0,0). Exact ring/basis interface checked. Zero and units obey the same computation. No defect found.

### lem-qc-cyclotomic-euclidean-factorization-and-units

Checked all six steps with exact coefficient arithmetic and bullet interface. Real norm rounding error <=1/2. Gaussian coefficient rounding gives O-norm <1, including four half-integer tie errors, where orthogonality makes the norm 1/2. Euclidean norm descent proves gcd, prime irreducibles and UFD without assumed ideal theory. Scaling a real unit into [1,1+√2) forces 1; positive-at-both-embeddings units are precisely even powers of 1+√2 and admit effective square roots. Proper O-divisors can be unit-scaled to 1<=|d|<1+√2 while |d bullet|<=√M, giving the stated finite coefficient search box. M>=2, negative exponents and unit inputs are handled. No polynomial factorization claim and no AC use; no defect found.

### lem-qc-dyadic-cyclotomic-unit-circle

Checked Proof 1.1–2.1 using the already reviewed coefficient encoding and √2-divisibility criterion. A norm 2^(2r) permits exactly 2r successive √2 divisions in O, making the canonical numerator divisible by 2^r and contradicting r>0. At r=0 the norm coefficients force four integer squares to sum to one; exactly one coefficient ±1 yields the eight powers of ω. Zero is excluded by modulus one. No density or unproved roots-of-unity theorem is assumed; no defect found.

### lem-qc-paired-ellipse-grid-uprighting — amended_repair

Current-at-entry raw hash f34b2779b6f0a0585a797422bd49f95ec7b441e751b0724e30e9a03cd48d5926 equals the frozen reader-post item hash; pre-reader hash is 8d0e22d93185ac2241e13b2b76e9aa7ac73c47b209bbde7650eaa75124e0a147. The reader parity criterion is correct: applying P+Q/√2 to the four module generators forces total P parity even and a common Q parity, and conversely these conditions suffice. However, R,A,B,K,X,Z,L were never defined anywhere in the carrier or its dependencies. Added their exact matrices in step 1.1, including L=diag(λ,λ⁻¹), and defined cosh in step 4.2. Renamed the auxiliary step-2.1 diagonal U to avoid collision with the given normalized matrix D₀. Statement unchanged; no consumer claim changes.

Source: Ross–Selinger https://arxiv.org/pdf/1403.2975, Figure 6 (PDF p.25), Appendix A.1–A.6 (PDF pp.24–31), read in full for the local contraction cases and shift identities. The seven matrix/inverse parity and determinant checks now have explicit inputs. Recomputed shift action and factorization σTσ=λ⁻¹I diag(λ,1) T diag(λ,1); the second conjugate differs only by a scalar sign, harmless for quadratic forms. Z fixes β sign and X fixes z+ζ sign without leaving the bias strip. The R,K,A,B cases cover that strip; all rational contraction bounds are <0.9, including S=15 and floor boundaries. The source K off-diagonal sign differs before squaring and gives the same squared skew. Area ratio exceeds π/16. Balancing by L preserves skew; the nonzero column coordinate rational norm bounds the product of embedding lengths, then determinant-one products and balancing bound all intermediate entries and floor operands by H powers. H>=2 avoids logarithmic small-parameter issues. Integer-part supplier lem-integer-part is used only for explicit floors. No AC use.

The new missing-matrix defect is closed by a local proof-only repair with repair_confidence 1; contract step 1.1 mirrors the explicit matrices. Independent checks pending at this checkpoint. No risk review is required by the routing score (MODERATE); the whole proof was nevertheless checked for the touched obligation.

### alg-qc-rz-efficient-scaled-grid-iterator — accepted_repair

Reader-post raw hash 0eb567310311f0b192821097193081c56851218eea89660246700e06c7d151e8 matches current bytes; pre-reader hash 4b6cc539d9dd30eb1391eb61ab7454ea5abe063c5739d84378721e13f1a89e0e. Accepted the explicit 81-tuple k=0 procedure with repair_confidence 1. The exact finite-grid supplier proves |a_j|<=1 at k=0 under both disk bounds; zero fails the positive cap cutoff. This is a complete deterministic finite layer. Reviewed the full Definition and the one-dimensional proposal/singleton supplier Proof 1.1–3.1: unit rescaling, narrow-coordinate slices, singleton padding and exact filters preserve every point, and the sequential scan advances even on a rejected random draw. Six affine/coset branches are disjoint and exhaust the exact nonzero denominator residue classes. Random bits affect within-layer order only. Real comparisons/logarithms/exponentiation remain explicit arithmetic-model assumptions. The uprighting procedure now has explicit matrices; its Statement was unchanged. No algorithm edit by this adjudicator. Its actual consumer thm-qc-rz-efficient-scaled-grid-enumeration checks the finite scan in steps 1.1 and 2.1; further consumer interfaces are checked below. No risk review required for a procedure without a proof contract.

### thm-qc-cyclotomic-norm-equation-decision

Checked all five steps using the reviewed Euclidean/UFD and positive-real-unit-square supplier. Both embeddings must be nonnegative; an embedding zero forces ξ=0. δ=1+ω has norm 2, conjugate associate and δ^4=2iλ², so localization at 2 creates only this prime denominator. A D-solution of an integral real norm has nonnegative δ valuation and is integral. Therefore conjugation-fixed prime classes require even exponent, while conjugate pairs have equal exponents. Allocation creates s with the correct valuations; η/(s†s) is a real unit positive at both embeddings and hence a real unit square. Denominator clearing η=4^r ξ and output vs/2^r are exact. Empty factor list and zero handled. Finite factorization terminates without any polynomial claim. No AC or unresolved prerequisite; no defect found.

### cor-qc-cyclotomic-prime-norm-solvability

Checked Proof 1.1–3.1 using the exact first supplementary reciprocity Statement and the reviewed valuation solver/UFD. Clearing ξ by 4^r gives norm 2^(4r−ell)p. For any prime over odd p≡1 mod8, a square root of −1 modulo p separates the conjugate factors b±i; a conjugation-fixed prime would divide 2 and p and hence 1. The sole ramified class δ has vδ(c)=4v₂(c) and vδ(d√2)=4v₂(d)+2, whose unequal residues prevent cancellation, proving every real integral element has even δ valuation. Zero coefficients and norm-numerator one are handled. Therefore every fixed class has even exponent; positive-unit correction applies. Source comparison: Ross–Selinger Proposition C.26, PDF p.37; the local proof additionally covers numerator one without a runtime claim. No defect found.

### lem-qc-squared-entry-denominator-bound

Checked all four steps against the exact sde Definition (integer exponents including negatives, zero separately −infinity), its well-definedness proof and the reviewed √2 criterion. Minimal numerator is not √2-divisible. Its norm has P,Q not both even, so its √2 valuation m is 0 or 1, giving sde(|z|²)=2s−m. If a still smaller exponent cleared y, upward closure would force y divisible by √2, a contradiction. The bound <=3 gives s<=2 for all integer s, including negative cases. Nonzero hypothesis makes every exponent finite. No defect found.

### thm-qc-factored-cyclotomic-norm-equation-efficient

Read all 13 steps and the four exact reciprocity/field/quotient supplier Statements, in addition to the previously reviewed root, UFD and norm-decision proofs. Independently checked split cases: R-primes inert at p≡3,5, split at 1,7; O/π=E[i] since 2 is invertible, inert at 7 and split by b+i or b+i√2 in the other cases. Distinct-root evaluation/interpolation identifies the kernel ideals, and Euclidean gcd generates each prime class. δ handles p=2. Valuation allocation and positive-unit exponent recovery match the exact solver. The explicit rounding bound rho=81/100 gives norm halving every four divisions, balancing keeps coordinate lengths polynomial, and multiplicities are bounded by log norm. Ordinary denominator encoding and full input length L avoid the false log-norm-only cost for large units. Bounded residual coefficients, numerator n<=4^h, zero and n=1 checked. In the explicit calibration, at most 8 root calls/16 gcds, storage B=2^20(h+1)^2 and fewer than 2^40(h+1)^4 actions, each <2^70(B+1)^4, give deterministic <2^194(h+1)^12 and total <P(h)=2^200(h+1)^20 with slack. Prime input promise is not applied to composite interrupted branches. Source: Ross–Selinger Appendix C, Lemmas C.12,C.20–C.23 and Proposition C.24, PDF pp.34–37, read; the local proof supplies extra bit-size/calibration details. No AC or unresolved gap; no defect found.

### lem-qc-rz-candidate-norm-integer

Checked all four steps and exact bullet, ring, sde and scaled-grid-finiteness interfaces. δ inverse and parity criterion give least δ numerator with odd coefficient sum. h=0 yields zero/eight roots; h=1 has odd sum of squares <=2, hence one, contradicting the bullet disk bound. For h>=2, A is odd and B even, while both coefficients of (2+√2)^h are even; thus residual norm numerator X²−2Y² is odd and 1 mod8, proving least denominator and the residue. Nonnegativity follows from both embedding disks. √2 denominator k gives residual norm denominator <=2k and n<=4^k; k>=0 is supplied by the finite-grid proof. Zero and exact-unit candidates handled. Cross-checked the complete Ross–Selinger Appendix D proof, PDF pp.37–38. No defect found.

### thm-qc-rz-efficient-scaled-grid-enumeration

Checked all five steps against the full algorithm and proofs of one-dimensional proposals, the corrected explicit uprighting construction, and finite-grid coefficient bounds. Residues modulo √2 are exactly four parity pairs, with three nonzero classes for k>=1; two Gaussian-real cosets partition each. At k=0 all valid coefficients lie in the 81-tuple box, and zero fails the cap. The cap is between the outer ellipse and its 1/8 dilate; matrix entries with b²<=15 put the 1/8 box in the ellipse, yielding inner boxes scaled by 1/64. Large coordinate products give a lower bound proportional to the outer box product; otherwise only constantly many coordinate slices occur, each with O(Nx+1) proposals. Singleton/tiny slices are padded and filtered; exponents and floor cost remain polynomial in k+L. One solution per index and independent random attempts give coupon-collector expectation <=4C j harmonic(j); geometric moment domination gives O_r(j^(2r)). The sequential background guarantees finite completion for every bit sequence, and M=O(N+1) controls empty layers. No bit-time or worst-case-delay claim for arbitrary reals. Reader k=0 explanation accepted with repair_confidence 1; entry bytes equal frozen post ff69e243b2c54a760da465a693653d6f8efb87eac74aa71c8add9dbd7893ea56 (pre d3e0a101898ba7840374d536795fd0264ae0c85e4c21dd1ea540e269bb11e965). No additional item edit required.

### lem-qc-clifford-t-entry-ring

Checked both steps and current exact gate, chronological denotational and ordered-wire embedding interfaces. 1/√2=(ω−ω³)/2 lies in D; diagonals, Pauli/permutation matrices and allowed scalar phases have D entries. Tensor identity and factor permutations copy entries/insert zeros; finite matrix sums and products remain in the ring. Induction includes the empty circuit and empty layer. No scalar phase is discarded under control. No defect found.

### lem-qc-hadamard-reduced-word-denominators

Checked all four steps directly from H,T and Pauli matrices. Y=iXZ, XT^r=ω^r T^(−r)X and XH=HZ retain exact scalar; the four even-interior identities remove H without adding T-cost. Stack reduction terminates and preserves both separate resource bounds. Bloch actions follow by multiplication. Two-H triple has transverse/longitudinal exponents 1; after three H they are (1,2,2), and unequal-exponent primitive numerators prove the induction (h−2,h−1,h−1). Then |u|²=(1+z)/2 gives h+1 for h>=2, exponent 2 for h=1 and squared entry 0/1 for h=0. These disjoint cases force H minimality for every competing word, including scalar equivalence and basis-column cases. No normal-form minimality is assumed without proof; no defect found.

### lem-qc-clifford-t-determinant-one-approximants

Checked all three steps and exact spectral, norm, determinant and unit-circle supplier Statements. Read current projective-density proof: irreducible nonintegral trace quartic forces an irrational eigenangle, and two nonparallel Pauli-axis tori give projective density with exact normalized phases. Its actual axis/irrational-circle interfaces were checked. Finite determinant image gives a finite-index kernel whose projective closure is clopen; spectral paths prove PU(2) connected. For unit columns, determinant multilinearity yields |1−λ²|<=2δ; |λ−1|²+|λ+1|²=4 then gives a sign within √2δ. The word (XZ)²=−I implements that sign exactly without changing determinant. Arbitrary epsilon handled by smaller positive δ. No claim that arbitrary lifted scalar is a Clifford gate, and no AC use; no defect found.

### lem-qc-rz-epsilon-region-equivalence

Checked both proof steps, the exact Rz Definition and spectral/norm/unit-circle Statements. Rz*U is SU(2); conjugate eigenvalues and trace identify cos(alpha)=Re(exp(iθ/2)u). Unitary left multiplication and diagonalization preserve the operator norm, giving its square exactly 2−2Re(exp(iθ/2)u). Nonnegative norm and epsilon justify both directions including equality on the cap boundary, U=Rz and the endpoint eigenangles. Nonzero domain C² satisfies the norm interface. No defect found.

### prop-qc-controlled-t-clean-ancilla-correct

Checked all three steps and full 15-gate algorithm against the current control-first, Toffoli, clean-ancilla, ordered-wire and chronological-product interfaces. Recomputed phase exponent for each control pair: (0,0),(1,1),(0,0),(7,3), with final data phase 1,ω^(−1),1,ω giving exact Toffoli, not a relative-phase substitute. Compute-apply-T-uncompute maps (a,b,0) to ω^(ab)(a,b,0); linear expansion proves identity on arbitrary finite reference with exact restored ancilla. The eight-basis certificate is independently rerun later with the common generator. No implicit controlled call or workspace assumption; no defect found.

### thm-qc-controlled-t-two-qubit-obstruction

Checked both steps from actual gate matrices, embedding, ring-unit-circle, determinant and phase-equivalence interfaces. Two-wire one-qubit embeddings and CNOT have even ω-power determinants, including scalar ω^jI₂ embedding determinant ω^(4j) and T adjoints. CT has determinant ω. Any phase-equivalent circuit has its (0,0) entry λ in D, so |λ|=1 forces λ=ω^j and determinant ω^(4j+1), still odd. Both exact and arbitrary-global-scalar claims follow; exactly two wires excludes the clean-ancilla construction. No defect found.

### thm-qc-rz-synthesis-up-to-phase

Checked all four steps and exact spectral, determinant, trig monotonicity/quarter-turn/parity, Rz, phase/control and norm interfaces. Normalize determinant to SU(2), then sign so trace>=0; eigenangle alpha lies in [0,π/2]. For every scalar μ, one eigenangle distance from 1 is at least the centered pair distance; the proof explicitly covers ψ positive/negative and angle beyond π via the 3π/4 sine bound. Thus a phase exp(inπ/8) is at least as feasible as the original λ; n=2q+r absorbs only the allowed free scalar ω^q and leaves r=0 or 1. Controlled placement restores diag(1,λ) on the control; the target space is nonzero C². No arbitrary phase is dropped from feasibility. No defect found.

### ex-qc-clifford-t-exact-period-and-phase

Checked both Verification steps and exact cyclotomic irreducibility/degree Statements plus the reviewed ring-entry lemma. T^8=I with no smaller positive period. Rz(π/16) has lower-right entry ζ64; if in Q(ζ8), the containment Q(ζ8)⊂Q(ζ64) would be equality. The degrees are 4 and 32, a contradiction. This is an exact-word obstruction only; no unclaimed phase-equivalent obstruction or converse ring theorem used. No defect found.

### lem-qc-capped-prime-norm-attempt-success

Checked all four proof steps against the full capped-solver Definition and reviewed calibrated P(k), prime-numerator solvability and residue suppliers. Exact coefficient verification makes acceptance sound even for composites; all failed/undefined/capped branches skip, never certify unsolvability. Watchdog bounds string lengths and final certification is polynomial in k+P(k), hence polynomial in k on every input. For an actual prime the supplied factor is valid, expected cost <=P and Markov at 2P gives success >=1/2. Zero and numerator-one branches are complete. Conditioning on all arithmetic data fixes primality and leaves fresh solver streams independent; conditional failure <=product(1−I_i/2), whose average factors by the modelled indicator independence. No unconditional solver-success independence is asserted. This is explicitly an ideal arithmetic model, not a primality theorem for fixed inputs. No defect found.

### lem-qc-clifford-t-denominator-descent-and-base

Read every proof step and the exact 195-line Fraction-arithmetic generator, then ran a /tmp copy successfully and compared its JSON byte-for-byte with the repository certificate (cmp exit 0). Recomputed counts: 4096 mod-8 vectors, 3072 primitive-norm cases, 393216 compatible pairs, 1179648 targets in each power direction, 256 s=4 columns and 208 base columns (8 zero,8 exponent 0,64 exponent 2,128 exponent 3); BFS visits 7660 states, maximum shortest length 16. Polynomial multiplication/conjugation, valuation tests through 5, cyclic ω multiplication and negative-power rotations in the checker match the written forms. The modulo-8 tests suffice for exact j+3 valuations, since they distinguish >=4 from >=5, and the finite box follows from all four embeddings. Unequal entry exponents contradict primitiveness through the reviewed norm criterion; s>3 forces both nonzero and equal. The r=2,s=4 boundary is separately exhaustive. Base zero-entry cases use unit-circle and others have exponents <=2; every stored BFS word is computed by exact arithmetic. No sampling is substituted for exhaustion and no AC use; no defect found.

### lem-qc-rz-determinant-one-reduction

Checked all three steps against exact current determinant, spectral/norm, angle parametrization, floor, trig, derivative/continuity/MVT and pi-supplier Statements. Below c=2sin(π/16), both eigenarguments of VRz* have magnitude <π/8, so their sum cannot be a nontrivial eighth-root argument. At epsilon>=c, q=floor(2θ/π+1/2) gives the determinant-one Clifford diag(ω^(−q),ω^q) with weak error <=c, including equality. The positive-zero supplier gives π<4 and MVT on sine has the required closed-interval continuity, establishing c<1/2. Density supplies a nonempty feasible set and integer well-ordering attains its minimum. Zero-T direct branch uses only free scalar Clifford phases, not arbitrary phases. No defect found.

### lem-qc-rz-scaled-grid-norm-solution-exists

Checked all three steps using the reviewed determinant-one density and epsilon-region proofs, exact H/T matrices, ring and bullet definitions. A strict SU(2) approximation is a ring-entry word; first-column orthogonality and determinant one fix the second column exactly. Applying bullet to U*U=I is valid because bullet commutes with conjugation, so both embeddings of the first column have norm one. The epsilon equivalence supplies the strict cap inequality, hence the required weak condition and exact norm solution. No claim of efficient search or primality is inferred; zero off-diagonal and cap boundary are harmless. No defect found.

### thm-qc-single-qubit-exact-clifford-t-characterization

Checked both iff directions and all four proof steps against the completed entry-ring, unitary-column normal-form, finite descent/base and unit-circle suppliers. Necessity is ring closure. For sufficiency each HT^(−k) left multiplication lowers the integer statistic above 3; the finite base word prepares the terminal column, and reversing the recorded operations prepares the original column. W*U has first column e0, so is diag(1,λ); its D-entry unit scalar is ω^j, giving U=WT^j exactly. Zero entry/base and retained scalar phases covered. The certificate independently regenerated byte-identically. Only one-qubit U(2) is claimed; no ancillary or many-qubit converse. No defect found.

### thm-qc-exact-clifford-t-synthesis-optimality

Checked every step and the full exact-compiler Definition against the reviewed reduced-word, descent, finite-grid and denominator suppliers. Reducing any t-T word into t+1 Clifford blocks proves h(V)<=t(V)+1. Extending a reduced h>=1 word by HT^ell and T^jH gives h+2 iff both endpoint parities are complemented; trailing X changes j sign only and adds free Z. This gives the lower bound h−1+p(a)+p(c), attained by the reduced word, including h=1,2. Thus for n>=4 h=n−1 and t=h+1−p(ell)−p(j); the corrected formula in Remarks is consistent with U=HTHTH. Descent uses n−3 iterations and constant base words; all embeddings remain unitary, giving O(n) coefficient bits. Trailing-zero and opposite-coefficient parity tests compute valuations in linear scans, avoiding hidden large multiplication in the descent trials; stack reduction is linear. O(n) ring/O(n²) bit bounds follow and n+1 is comparable to minimal total H/T count. Ordinary canonical input and separate costs retained. No defect found.

### thm-qc-exact-single-qubit-synthesis-correct

Checked all four steps against the full exact synthesis algorithm, descent/base certificate and reduced-word supplier. Invariant U=(T^k1 H)...(T^kr H)M follows from Mprime=HT^(−k)M; exact ring unitarity is preserved. Four-trial search always finds descent, with strictly decreasing integer statistic until the finite base regime. W0*M=diag(1,λ) and unit-circle makes λ=ω^j. The chronological output emits right factors first, agreeing with the actual QC09 denotation; final stack reduction retains its scalar phase. All 208 base words were independently regenerated by the exact finite checker, including zero upper-left entries. No defect found.

### lem-qc-su-two-denominator-t-count

Checked all three steps using the reviewed exact characterization, reduced-word H invariant, endpoint T optimality and squared-norm/unit-circle suppliers. h=0 is monomial, k=0 and determinant one forces even diagonal exponent, so both conjugate counts vanish. h=1 gives k=1. For h>=2 the complementary squared entries have the same positive primitive exponent s=h+1; solving s=2r−m, m in {0,1}, fixes every entry exponent r=ceil(s/2). Determinant parity makes endpoint parity sum A satisfy A+h−1 even. Conjugation by T flips both endpoint parities, yielding counts h−1+A and h+1−A and exactly the pair {2k−2,2k} with minimum 2k−2. This includes k=1 and the zero-entry monomial boundary. No defect found.

### thm-qc-rz-approximation-correct-on-termination

Checked all five proof steps and full Rz algorithm Definition against the reviewed grid, norm-decision/efficient solver, exact compiler, determinant reduction and epsilon-region interfaces. Direct branch includes epsilon=c and has zero T; for smaller precision c<1/2 permits the grid theorem. Exact norm certificate gives SU(2) and cap gives operator error. T commutes with Rz, so conjugate candidate has identical error. A finite-exponent solvable candidate exists by density; finite layers and complete norm decisions ensure termination under the stated exact-real and oracle assumptions. Efficient valid-factor calls terminate almost surely over finitely many earlier algebraic candidates, uniformly over random within-layer order. Finite B may TIMEOUT and capped mode is not claimed to terminate for every fixed input. Final compiler restores exact selected matrix and phase. No defect found.

### thm-qc-rz-clifford-t-tcount

Read all six steps, full Rz/norm algorithms and the complete growth and stopping-bound proofs. First two grid points exist by simultaneous unit-scaled rounding with 2^k rR>=128; convex dyadic interpolation gives infinitely many and k_j<=k2+2ceil(log2 j), uniformly over ties. Product-tail lemma proves all fixed moments by exp(−sqrt(j/a)/(1+3b)) and summation, and the logarithmic expectation by the tangent bound. Complete mode first solvable exponent minimizes f(k)=max(0,2k−2); every u-class has this minimum by the SU(2) count lemma. Direct epsilon>=c0 branch is zero-T optimal. Under explicit ideal arithmetic [A1], conditional fresh solver bits give product(1−I/2) failure and indicator independence yields the stated averaged bound; no actual fixed-stream primality or unconditional call independence is inferred. At most J−1 better classes occur, and k2<=k-second-best gives m<=m-second-best+6+4log2 J. Infinite good indices and a two-block tail justify existence and integrability of the random second benchmark before taking expectations. Iterator second moments and Cauchy–Schwarz bound stopped work without independence from J; capped candidate work and exact compilation are polynomial in k. Source Hypothesis 8.3/Proposition 8.8 is a model, preserved explicitly; all cost claims are ideal arithmetic, with no bit-time assertion for arbitrary real θ. No defect found.

## Final dispositions and local changes

Exactly three decisions are recorded in the task-named decisions JSON: uprighting `amended_repair`, iterator `accepted_repair`, and enumeration theorem `amended_repair`. Each completed repair has `repair_confidence: 1` and its own closed defect row. The theorem source is accepted unchanged; its contract step 1.1 omitted the F3 input that its current proof cites. Added that input after the first strict check exposed the mechanical omission. This is an amendment to the reader's contract integration, not a new mathematical defect. No historical pre-reader full-source reconstruction is claimed: pre/post raw hashes and the unchanged reader report bind the comparison, and every current argument was independently checked.

The only Alpha item edit is `items/lem-qc-paired-ellipse-grid-uprighting.md`, with corresponding derivation mirrors in the batch contract. Its Statement, dependencies, provenance class and manifest entry remain valid and unchanged. No material prior judge record existed to invalidate. All 29 HIGH/CRITICAL risk records in the owned contract are complete, with specific proof and boundary evidence above. The finite generator was read fully and run from `/tmp`; the resulting JSON is byte-identical to the repository certificate. No checked-in generated certificate was rewritten.

The iterator Definition changed in the reader pass. A direct item/reference scan found only the owning A page, `thm-qc-rz-efficient-scaled-grid-enumeration`, and `alg-qc-cyclotomic-scaled-grid-and-norm-solver` besides the iterator itself. The theorem now proves its exact finite k=0 branch; the composite procedure calls the same increasing-layer iterator and remains sound. No consumer repair is necessary, no consumer Statement/Definition changed here, and no outside affected consumer was identified. Existing cross-batch interface records and stable IDs are preserved. No proposed withdrawal is deleted or newly proposed.

## Checks and limitations

- Initial `risk-report` without `--require-reviewed`: exit 0, 38 proof carriers, 29 HIGH/CRITICAL.
- Exact finite generator from `/tmp`: exit 0; `cmp` with the checked-in certificate: exit 0. The finite domains and program arithmetic were reviewed; this computation supports the explicitly exhaustive finite proof obligations, not arbitrary untested inputs.
- `reflow` on the only Alpha-edited item: unchanged.
- Focused `precheck` on the three touched items: exit 0, two proofs checked, zero failing; the algorithm has no phase proof.
- Focused `rendercheck` on the three touched items: exit 0, all YAML and math spans parse with the actual renderer/KaTeX.
- Strict `proof-contract` on the entire owned contract: initial mechanical F3-input omission, repaired; final exit 0, 38/38 checked, zero errors/warnings.
- Final `risk-report --require-reviewed`: exit 0, 38 routed, zero errors.
- After the final item edit and reflow, the single explicit `proof-layout` invocation on `items/lem-qc-paired-ellipse-grid-uprighting.md`: exit 0, one item, nine steps, zero defects.

No new defective published supplier was established; published carriers remained read-only, so no published-ledger entry is owed. Published dependencies were checked at their exact interfaces as used, without claiming a transitive library audit. No mathematical blocker or unresolved risk review remains in this batch. The recomputed active engine status reports the run still in Step 3a with other batches pending; old reader-era blocker messages were not adopted as current facts. No judge, stamp, native gate battery, dispatch or transition was initiated.

## Durable handoff

Closed rows appended successfully with the serialized defect-ledger tool: `qca60-b13-3a-uprighting-undefined-matrices`, `qca60-b13-3a-grid-zero-layer-procedure`, and `qca60-b13-3a-grid-zero-layer-completeness`; its generated Markdown view was refreshed by the same command. The owned-consumer summary was appended under the unique batch-13 marker in `briefs/tasks/frontier-dependency-ledger.md`, preserving other owners' entries.

Final changed-item raw SHA-256: `83149ca85f02bceec0a9d1683d70171ccbe03a52ced089c294c0fd9ba4055e91` for `lem-qc-paired-ellipse-grid-uprighting`. The iterator and enumeration theorem retain their reader-post raw source hashes listed above. A local JSON consistency check confirms exactly the three owed touched obligations and 29 complete risk reviews. Decisions deliberately carry no self-issued subject seals; the engine owns current-carrier stamping and the native battery. Next action: engine collection/stamping and its ordinary gates.
