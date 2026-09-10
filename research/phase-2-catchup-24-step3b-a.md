# Step 3b item adjudication — group a

Run `phase-2-catchup-24`; dispatch `step3b-a-c3b2eea480397dc3`; batches 1, 3, 4.
Latest dispatch: `step3b-a-3ea5646e8989a632`. Final group disposition: **126/127 closed (121 accept, 5 repaired); one preserved owner escalation**. Mechanical limitations and exact counts are recorded at the end. Current Step-3a scope hashes for all six pairs were checked and are closed. This is a new item audit, not adoption of historical scaffold reviews. Accepted contracts remain unchanged. Item receipts contain the exact examined dependency IDs and bind their closure hashes. Published dependencies are checked for the clauses actually used.

## Item decisions in audit order

1. `def-measure-preserving-transformation-and-system` — **accept**. The claim defines measurable inverse-image preservation and probability normalization without invertibility or completion. Read published `def-measure-space`, `def-measurable-function-between-measurable-spaces`, and their underlying measure/measurable-space definitions. These supply exactly the domains and inverse-image measurability required. Source locator in contract: Einsiedler–Ward Definition 2.1 pp.13–14, https://maths.qmul.ac.uk/~fvivaldi/teaching/ETAD/NotesI.pdf. This elementary definition was checked directly; no external proof theorem is needed. Receipt written successfully. No unresolved mathematical obligation for this item.

## Continuation and gates

The initial continuation marker is superseded by the final dispatch report below. Every assigned item has a current disposition; the expanding-grid example remains escalated. No owner ruling has been assumed.

### thm-measure-preservation-on-a-generating-pi-system — accept

Claim/conventions: Let T be measurable and P generate A as a pi-system. Suppose P has increasing P_n covering X with μ(P_n)<∞ and μ(T^-1 P)=μ(P) for P in P. Then T preserves μ.

Audit: Pullback is a measure by disjoint inverse-image additivity. Read the full published sigma-finite uniqueness proof and finite uniqueness lemma: the same increasing P_n exhausts both measures with equal finite masses; all hypotheses match. Adding X in the finite case supplies total mass because T is a self-map. Direct complete argument requires no source recovery.

Examined dependencies: `def-measure-preserving-transformation-and-system`, `thm-measure-uniqueness-on-a-sigma-finite-pi-system`, `lem-finite-measure-uniqueness-on-a-pi-system`.

Contract source locators: {"references":[{"title":"E–W §2.1 p.13; local sigma-finite uniqueness theorem","url":"https://maths.qmul.ac.uk/~fvivaldi/teaching/ETAD/NotesI.pdf"}]}. Receipt written successfully; no unresolved item obligation.

### prop-measure-preserving-compositions-iterates-and-completions — accept

Claim/conventions: Compositions and nonnegative iterates of measure-preserving self-maps preserve measure. Assuming countable choice for the existence of the completion measure, any measurable measure-preserving self-map of (X,A,μ) remains measurable and measure preserving for the completion (X,Abar,μbar), in particular for a Borel measure and its completion.

Audit: Read completion theorem in full and countable-choice definition. Completed E=A union N has pullback T^-1 A union T^-1 N, with the latter contained in the measurable null T^-1 Z; hence completed measurability and equal mass. The countable-choice assumption is correctly limited to constructing the completion. Composition and finite iteration use only inverse-image identities and are choice-free.

Examined dependencies: `def-measure-preserving-transformation-and-system`, `thm-completion-of-a-measure-space`, `def-countable-choice`, `def-completion-of-a-measure-space`.

Contract source locators: {"references":[{"title":"Einsiedler–Ward Exercise 2.1.3, p.19; Sarig Proposition 1.4 preservation proof, p.8","url":"https://www.weizmann.ac.il/math/sarigo/sites/math.sarigo/files/uploads/ergodicnotes.pdf"}]}. Receipt written successfully; no unresolved item obligation.

### thm-integrals-are-invariant-under-measure-preserving-maps — accept

Claim/conventions: Let T be a measure-preserving transformation. For measurable f≥0, ∫f∘T=∫f in [0,∞]; for integrable real or complex f the same identity holds and f∘T is integrable. Conversely indicator integral invariance implies measure preservation.

Audit: Read the complete simple-approximation, monotone-convergence and real/complex linearity proofs. Indicator preservation gives finite-simple integral equality; the explicit dyadic sequence and its pullback increase pointwise, so MCT applies on both sides. Apply to the modulus for integrability, then real/imaginary positive and negative parts. Conversely use indicators. No sigma-finiteness, completeness or choice is spent.

Examined dependencies: `def-measure-preserving-transformation-and-system`, `thm-increasing-simple-approximation-of-a-nonnegative-measurable-function`, `thm-monotone-convergence-for-the-integral`, `thm-linearity-of-the-lebesgue-integral-on-l-one`.

Contract source locators: {"references":[{"title":"E–W Lemma 2.6, pp.15–16","url":"https://maths.qmul.ac.uk/~fvivaldi/teaching/ETAD/NotesI.pdf"}]}. Receipt written successfully; no unresolved item obligation.

### def-koopman-operator-on-l-p — accept

Claim/conventions: For real or complex Lp classes, 1≤p≤∞, define U_T[f]=[f∘T] for a measure-preserving system. The following theorem establishes membership, representative-independence, linearity and isometry.

Audit: Read both quotient definitions and the full complex norm and essential-bound proofs. Pullback preserves measurable null disagreement sets. Membership follows from the already checked integral invariance applied to |f|^p, or null superlevels at infinity. Inspected the following justified_by isometry contract: it supplies membership without assuming membership as a premise, so this definition/theorem obligation is not circular.

Examined dependencies: `def-measure-preserving-transformation-and-system`, `def-l-p-space-as-a-quotient-by-null-functions`, `def-complex-lp-and-euclidean-test-function-conventions`, `thm-koopman-operator-is-a-linear-isometry-on-l-p`, `thm-integrals-are-invariant-under-measure-preserving-maps`, `thm-complex-holder-minkowski-and-the-quotient-norm`, `prop-essential-supremum-is-attained-as-the-least-essential-bound`.

Contract source locators: {"references":[{"title":"E–W §2.4 pp.28–29; Sarig Proposition 1.3","url":"https://maths.qmul.ac.uk/~fvivaldi/teaching/ETAD/NotesI.pdf"}]}. Receipt written successfully; no unresolved item obligation.

### thm-koopman-operator-is-a-linear-isometry-on-l-p — accept

Claim/conventions: For 1≤p≤∞, U_T is a well-defined linear isometry. It is onto for an invertible system.

Audit: Integral invariance gives finite-p norm equality; preservation makes every modulus superlevel and its preimage simultaneously null, giving equality of essential bounds. Quotient independence and complex linear operations follow from the inspected quotient proof. For a measurable inverse S, preservation applied to T(E) gives preservation by S. On an invariant conull restriction, extend inverse compositions by zero on the measurable complement, so the same argument gives surjectivity modulo null sets. No noninvertible surjectivity is asserted.

Examined dependencies: `def-koopman-operator-on-l-p`, `thm-integrals-are-invariant-under-measure-preserving-maps`, `thm-the-l-p-norm-descends-to-the-quotient-and-makes-l-p-a-normed-space`, `prop-essential-supremum-is-attained-as-the-least-essential-bound`, `thm-complex-holder-minkowski-and-the-quotient-norm`, `def-invertible-measure-preserving-system`.

Contract source locators: {"references":[{"title":"Einsiedler–Ward §2.4 opening, pp.28–29 (isometry paragraph, not Lemma 2.18)","url":"https://maths.qmul.ac.uk/~fvivaldi/teaching/ETAD/NotesI.pdf"}]}. Receipt written successfully; no unresolved item obligation.

### def-strict-and-mod-null-invariant-sigma-algebras — accept

Claim/conventions: I={E∈A:T^-1 E=E}; I′={E∈A:μ(T^-1 E Δ E)=0}.

Audit: Read published sigma-algebra and null/a.e. definitions. The symmetric difference is measurable, so both formulas are meaningful without completeness. Checked the immediately following closure argument: pullback commutes with complements/unions and countable symmetric-difference errors stay null. Thus the name sigma-algebra has its local justification, and no inequality between the two families is falsely asserted.

Examined dependencies: `def-measure-preserving-transformation-and-system`, `def-sigma-algebra`, `def-measure-null-set-and-almost-everywhere`, `prop-invariant-families-are-sigma-algebras`.

Contract source locators: {"references":[{"title":"E–W Proposition 2.14; Sarig Proposition 1.1","url":"https://maths.qmul.ac.uk/~fvivaldi/teaching/ETAD/NotesI.pdf"}]}. Receipt written successfully; no unresolved item obligation.

### prop-invariant-families-are-sigma-algebras — accept

Claim/conventions: I and I′ are sigma-algebras and I⊆I′.

Audit: X is in both families; inverse images commute with relative complements. For E_n the symmetric difference of the two unions is contained in the union of T^-1 E_n symmetric-difference E_n; the inspected countable-subadditivity proof makes that measurable union null. Strict invariance gives zero symmetric difference. Thus all algebra/countable-union axioms hold without completeness or choice.

Examined dependencies: `def-strict-and-mod-null-invariant-sigma-algebras`, `thm-finite-and-countable-subadditivity-of-measures`.

Contract source locators: {"references":[{"title":"Sarig Proposition 1.1 proof; E–W Proposition 2.14","url":"https://www.weizmann.ac.il/math/sarigo/sites/math.sarigo/files/uploads/ergodicnotes.pdf"}]}. Receipt written successfully; no unresolved item obligation.

### lem-mod-null-invariant-sets-have-strictly-invariant-representatives — accept

Claim/conventions: For E∈I′ the set F=limsup_n T^-n E lies in I and μ(E Δ F)=0.

Audit: Read the complete limsup argument in Einsiedler–Ward Proposition 2.14 pp.23–24 (browser lines 1390–1446). Independently checked telescoping E symmetric-difference T^-n E inside the finite union of inverse images of E symmetric-difference T^-1 E. Their countable union is measurable null; outside it every iterate indicator agrees with E. Shifting the tail index leaves limsup unchanged. Uses only the choice-free iterate clause of the completion/composition supplier.

Examined dependencies: `prop-invariant-families-are-sigma-algebras`, `prop-measure-preserving-compositions-iterates-and-completions`, `thm-finite-and-countable-subadditivity-of-measures`.

Contract source locators: {"references":[{"title":"E–W Proposition 2.14 pp.23–24; Sarig Proposition 1.1 pp.5–6","url":"https://maths.qmul.ac.uk/~fvivaldi/teaching/ETAD/NotesI.pdf"}]}. Receipt written successfully; no unresolved item obligation.

### def-ergodic-measure-preserving-system — accept

Claim/conventions: T is ergodic for μ if each E∈I has μ(E)=0 or μ(X\E)=0. On a probability space this means measure zero or one.

Audit: The null-or-conull definition is meaningful for arbitrary measures; for probability measures finite additivity makes the conull alternative exactly measure one. It names the measure and uses strict invariant measurable sets. Compared with Einsiedler–Ward Definition 2.13 p.23; the subsequent probability results do not import a general-measure zero-or-one equivalence.

Examined dependencies: `def-strict-and-mod-null-invariant-sigma-algebras`.

Contract source locators: {"references":[{"title":"Sarig Definition 1.4 p.5","url":"https://www.weizmann.ac.il/math/sarigo/sites/math.sarigo/files/uploads/ergodicnotes.pdf"}]}. Receipt written successfully; no unresolved item obligation.

### thm-ergodicity-and-invariant-functions — accept

Claim/conventions: On a probability space ergodicity is equivalent to null/conull mod-null invariant sets, to every invariant measurable real or complex function being constant a.e., and to every f with f∘T=f a.e. being constant a.e.

Audit: Read full Proposition 2.14 through its final converse (E–W pp.23–25, lines 1373–1531). For each dyadic partition, mod-null invariance of the fibers follows from the measurable disagreement set; countable additivity forces one and only one full-measure fiber. The intersection of these canonically specified fibers is conull and nonempty, with diameter of values tending to zero. It therefore gives a finite constant without countable selection. Apply to two components. Indicator functions prove the converses, and the strict representative lemma bridges strict/mod-null versions. Completeness is unused.

Examined dependencies: `def-ergodic-measure-preserving-system`, `lem-mod-null-invariant-sets-have-strictly-invariant-representatives`, `def-measurable-function-between-measurable-spaces`, `def-complex-lp-and-euclidean-test-function-conventions`, `thm-finite-and-countable-subadditivity-of-measures`.

Contract source locators: {"references":[{"title":"E–W Proposition 2.14 pp.23–25; Sarig Proposition 1.1","url":"https://maths.qmul.ac.uk/~fvivaldi/teaching/ETAD/NotesI.pdf"}]}. Receipt written successfully; no unresolved item obligation.

### prop-ergodic-positive-sets-sweep-out-almost-every-point — accept

Claim/conventions: In an ergodic probability system, E of positive measure has μ(union_{n≥1}T^-n E)=1. Equivalently every pair A,B of positive measure has μ(B∩T^-n A)>0 for some n≥1.

Audit: Checked the complete E–W Proposition 2.14 sweep-out and intersection implications, pp.24–25. U=union(n>=1)T^-n E has T^-1 U subset U with equal finite mass, hence null difference by the inspected published difference theorem. U has positive measure from T^-1 E and is therefore conull. Subadditivity forces a positive intersection for some n>=1. Conversely an invariant set and its complement cannot both have positive measure under the intersection condition. Only the choice-free iteration clause is used.

Examined dependencies: `thm-ergodicity-and-invariant-functions`, `prop-measure-preserving-compositions-iterates-and-completions`, `prop-measure-of-a-set-difference`, `thm-finite-and-countable-subadditivity-of-measures`.

Contract source locators: {"references":[{"title":"E–W Proposition 2.14 pp.24–25","url":"https://maths.qmul.ac.uk/~fvivaldi/teaching/ETAD/NotesI.pdf"}]}. Receipt written successfully; no unresolved item obligation.

### def-strong-and-weak-mixing — accept

Claim/conventions: For a measure-preserving probability system and measurable A,B, Strong mixing means μ(A∩T^-n B)→μ(A)μ(B) for every A,B. Weak mixing means N^-1 sum_{n=0}^{N-1}|μ(A∩T^-n B)-μ(A)μ(B)|→0.

Audit: Both correlation quantities are finite under probability normalization. The absolute value is inside the weak-mixing Cesaro average, so cancellation cannot turn mere Cesaro ergodicity into this definition. All inverse images are measurable by preservation. No existence or well-definedness theorem beyond the accepted measure-preserving system is needed.

Examined dependencies: `def-measure-preserving-transformation-and-system`.

Contract source locators: {"references":[{"title":"E–W Definitions 2.32 and 2.35, pp.49–50","url":"https://maths.qmul.ac.uk/~fvivaldi/teaching/ETAD/NotesI.pdf"}]}. Receipt written successfully; no unresolved item obligation.

### thm-mixing-implies-weak-mixing-implies-ergodicity — accept

Claim/conventions: Every strongly mixing probability system is weakly mixing; every weakly mixing probability system is ergodic.

Audit: For a convergent-to-zero nonnegative correlation error, fix a finite initial segment and bound the remaining terms by epsilon; its Cesaro average tends to zero. For strict invariant E each error against E equals mu(E)(1-mu(E)); weak mixing forces this constant to vanish. This is a complete elementary proof from the two inspected definitions, with no mean-ergodic theorem.

Examined dependencies: `def-strong-and-weak-mixing`, `def-ergodic-measure-preserving-system`.

Contract source locators: {"references":[{"title":"E–W §2.7 pp.49–50; Sarig Proposition 1.2","url":"https://maths.qmul.ac.uk/~fvivaldi/teaching/ETAD/NotesI.pdf"}]}. Receipt written successfully; no unresolved item obligation.

### lem-finite-measure-sets-are-approximable-by-a-generating-algebra — accept

Claim/conventions: If μ(X)<∞ and an algebra C generates A, every E∈A can be approximated in μ(E Δ C) by C∈C.

Audit: Read continuity-from-below and generated-sigma-algebra minimality proofs. For union E_j, finite total measure makes the difference from a sufficiently long finite union smaller than epsilon/2. Only finitely many individual approximants are then chosen. Complement errors are equal, and finite-union errors are subadditive. The approximable class is a sigma-algebra containing C, so minimality proves the claim. No countable choice of approximants is needed.

Examined dependencies: `thm-continuity-from-below-for-measures`, `thm-finite-and-countable-subadditivity-of-measures`, `def-generated-sigma-algebra`, `thm-generated-sigma-algebra-exists-and-is-minimal`, `def-algebra-of-subsets`.

Contract source locators: {"references":[{"title":"E–W Proposition 2.15 proof and Exercise 2.7.3","url":"https://maths.qmul.ac.uk/~fvivaldi/teaching/ETAD/NotesI.pdf"}]}. Receipt written successfully; no unresolved item obligation.

### thm-mixing-is-checkable-on-a-generating-pi-system — accept

Claim/conventions: For a measure-preserving probability system, correlations on a generating pi-system containing X suffice to check strong or weak mixing.

Audit: Finite Boolean indicators are finite linear combinations of generating-pi indicators because the pi-system contains X and is intersection-closed. Bilinearity and a finite triangle bound extend either convergence criterion to that algebra. Approximate A,B there: preservation bounds correlation error by mu(A delta A0)+mu(B delta B0), and the product-of-means error has the same bound. The total bound is uniform in n and therefore in Cesaro averages. This proves the complete local generalization without importing an unproved pi-system exercise.

Examined dependencies: `def-strong-and-weak-mixing`, `lem-finite-measure-sets-are-approximable-by-a-generating-algebra`.

Contract source locators: {"references":[{"title":"Einsiedler–Ward Exercise 2.7.3(1)–(2), pp.52–53; local Boolean-algebra extension from a pi-system","url":"https://maths.qmul.ac.uk/~fvivaldi/teaching/ETAD/NotesI.pdf"}]}. Receipt written successfully; no unresolved item obligation.

### prop-mixing-correlations-extend-to-l-two — accept

Claim/conventions: For a measure-preserving probability system and complex L2 functions f,g put C_n(f,g)=∫(f∘T^n) conjugate(g) dμ − (∫f dμ)conjugate(∫g dμ). Strong mixing is equivalent to C_n(f,g)→0 for every f,g; weak mixing is equivalent to N^-1∑_{n<N}|C_n(f,g)|→0 for every f,g. The pairing is linear in its first variable.

Audit: Read the complex finite-simple density clause and full complex L2 pairing/Cauchy–Schwarz proof; the real Cauchy–Schwarz inequality applies only to moduli, not its unrelated equality clause. Probability normalization gives ||1||2=1 and integrable means. Expand finite simple pairs, then telescope the correlation difference in its two variables. Isometry and Cauchy–Schwarz give precisely 2(||f-a||2||g||2+||a||2||g-b||2), uniformly in n. Fixed-tolerance density needs only two choices, not countable choice. Indicators recover the set definition with arguments swapped.

Examined dependencies: `def-strong-and-weak-mixing`, `thm-koopman-operator-is-a-linear-isometry-on-l-p`, `cor-cauchy-schwarz-inequality-for-l-two`, `def-complex-lp-and-euclidean-test-function-conventions`, `thm-complex-finite-simple-and-smooth-compact-support-density-for-finite-p`, `thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz`.

Contract source locators: {"references":[{"title":"Sarig Proposition 1.3 p.7; E–W Exercise 2.7.7","url":"https://www.weizmann.ac.il/math/sarigo/sites/math.sarigo/files/uploads/ergodicnotes.pdf"}]}. Receipt written successfully; no unresolved item obligation.

### ex-two-point-preserving-permutation — accept

Claim/conventions: On X={0,1} with all subsets measurable and μ({0})=μ({1})=1/2, the swap T(0)=1,T(1)=0 preserves μ.

Audit: Checked all four sets: empty/full sets are fixed and the two singleton inverse images exchange equal masses. Every disjoint sequence has at most two nonempty sets, so the finite prescription is a probability measure and every map is measurable. No unproved finite-model existence premise or choice is needed.

Examined dependencies: `def-measure-preserving-transformation-and-system`.

Contract source locators: {"references":[{"title":"Einsiedler–Ward Definition 2.1, p.13; explicit finite specialization","url":"https://maths.qmul.ac.uk/~fvivaldi/teaching/ETAD/NotesI.pdf"}]}. Receipt written successfully; no unresolved item obligation.

### cex-identity-on-two-points-is-not-ergodic — accept

Claim/conventions: The identity on two atoms of mass 1/2 preserves probability but is not ergodic.

Audit: The all-subsets two-point mass prescription is a measure by finite counting. The identity is measurable and preserves every set, but its strictly invariant singleton has probability 1/2, contradicting the accepted ergodicity criterion. This directly proves the counterexample without a dynamical supplier.

Examined dependencies: `def-ergodic-measure-preserving-system`.

Contract source locators: {"references":[{"title":"Sarig Definition 1.4, p.5; explicit finite witness","url":"https://www.weizmann.ac.il/math/sarigo/sites/math.sarigo/files/uploads/ergodicnotes.pdf"}]}. Receipt written successfully; no unresolved item obligation.

### ex-koopman-on-a-finite-probability-space — accept

Claim/conventions: For the equal-mass two-point swap, U(a,b)=(b,a), with matrix [[0,1],[1,0]], and ||U(a,b)||p=||(a,b)||p for 1≤p≤∞.

Audit: Direct preservation on four sets makes the accepted Koopman theorem applicable. Composition swaps coordinates; the normalized finite-p sum and the maximum at infinity are symmetric in the two entries. Thus the stated matrix, class membership and all claimed norm equalities hold for real or complex entries. No choice or completeness theorem is used.

Examined dependencies: `def-koopman-operator-on-l-p`, `thm-koopman-operator-is-a-linear-isometry-on-l-p`.

Contract source locators: {"references":[{"title":"Einsiedler–Ward §2.4, pp.28–29; explicit finite specialization","url":"https://maths.qmul.ac.uk/~fvivaldi/teaching/ETAD/NotesI.pdf"}]}. Receipt written successfully; no unresolved item obligation.

### lem-endpoint-interpolation-simple-analytic-families — accept

Claim/conventions: Let 1≤p0,p1<∞, 1≤q0,q1≤∞, 0<θ<1, 1/p=(1−θ)/p0+θ/p1, 1/q=(1−θ)/q0+θ/q1, and r=q conjugate, ri=qi conjugate. For finite simple functions f=∑a_j1_Ej and g=∑b_k1_Fk with disjoint finite-measure nonzero fibers, construct coefficientwise entire f_z,g_z, bounded on the closed strip, with f_θ=f,g_θ=g. For nonzero classes ||f_{i t}||p0=||f||p^(p/p0), ||f_{1+i t}||p1=||f||p^(p/p1). If r<∞ then ||g_{i t}||r0=||g||r^(r/r0), ||g_{1+i t}||r1=||g||r^(r/r1), interpreting the exponent as zero at ri=∞ and the norm as one for a nonzero class. If r=∞ (hence q0=q1=1), set g_z=g, retaining ||g_z||∞=||g||∞. Zero classes are treated separately.

Audit: Read Laugesen Appendix C equations C.4–C.6 and boundary calculation, printed pp.170–172; checked published exponential, modulus, derivative, log, power and conjugacy clauses. All fibers are finite in number; discarding null fibers avoids unit-norm claims for zero classes. Positive coefficient magnitudes make logarithms valid. Affine exponents have fixed real parts on boundary lines and remain bounded across the closed strip. For r finite the endpoint-infinity norm is one; r=infinity forces both q_i=1 and the constant test family supplies the missing case. At theta each nonconstant exponent is one. All stated identities follow by finite summation.

Examined dependencies: `def-complex-lp-and-euclidean-test-function-conventions`, `thm-complex-holder-minkowski-and-the-quotient-norm`, `def-conjugate-exponents`, `thm-complex-exponential-is-entire-with-derivative-itself`, `thm-complex-exponential-addition-and-real-extension`, `thm-chain-rule-for-complex-derivatives`, `cor-complex-exponential-cartesian-form-modulus-and-eulers-identity`, `thm-algebra-of-complex-derivatives`, `def-natural-logarithm`, `def-real-power`.

Contract source locators: {"references":[{"title":"Laugesen Appendix C proof of Theorem C.6, pp.170–172, equations (C.4)–(C.6); Teschl Theorem 15.2, p.415","url":"https://arxiv.org/pdf/0903.3845"}]}. Receipt written successfully; no unresolved item obligation.

### lem-riesz-thorin-bound-on-the-finite-simple-core — accept

Claim/conventions: On sigma-finite source and target measure spaces, let T be a complex-linear map from complex finite simple a.e. classes of finite-measure support into measurable complex a.e. classes, satisfying ||Tf||qi≤Mi||f||pi for i=0,1, with 1≤p0,p1<∞, 1≤q0,q1≤∞ and finite Mi≥0. Then ||Tf||qθ≤M0^(1−θ)M1^θ||f||pθ for 0<θ<1 and reciprocal-affine exponents. Also the same conclusion holds on arbitrary source and target measure spaces if q0,q1<∞. Endpoint θ=0,1 bounds are the hypotheses, with no 0^0 convention.

Audit: Read full published three-lines proof including zero boundary constants, and full finite-simple dual membership proof including q=infinity. Laugesen C.6 pp.170–172 confirms the finite scalar analytic pairing and norm-recovery caveat. Endpoint Holder makes every fixed indicator/test integral finite. Finite coefficient expansion supplies entire H, closed-strip continuity and boundedness; normalized families give the required boundary constants. For arbitrary spaces and finite target exponents, each indicator image has sigma-finite nonzero support by its finite integral; their finite union supports every image family. Dual membership on that restriction, with tests extended by zero, proves the full bound without presupposing intermediate Lq membership. All zero-class/constants cases are covered.

Examined dependencies: `lem-endpoint-interpolation-simple-analytic-families`, `thm-hadamard-three-lines`, `lem-complex-lq-norm-from-finite-simple-dual-tests`, `thm-complex-holder-minkowski-and-the-quotient-norm`, `thm-linearity-of-the-lebesgue-integral-on-l-one`, `prop-order-and-scalar-rules-for-the-nonnegative-integral`, `thm-finite-and-countable-subadditivity-of-measures`, `thm-algebra-of-complex-derivatives`.

Contract source locators: {"references":[{"title":"Teschl Theorem 15.2 pp.414–415; Laugesen Theorem C.6 pp.168–173, including p.172 norm-recovery caveat","url":"https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"}]}. Receipt written successfully; no unresolved item obligation.

### cor-complex-interpolation-extensions-agree-on-intersections — accept

Claim/conventions: Assume countable choice and the core hypotheses of the preceding lemma, with its same measure-space alternatives. The finite-simple map extends uniquely as a bounded complex-linear Tθ:Lpθ→Lqθ for every 0≤θ≤1, with the interpolated bounds for 0<θ<1 and original endpoint bounds for θ=0,1. These extensions agree as measurable a.e. classes on every pairwise domain intersection. Consequently the endpoint maps define a well-defined linear map on Lp0+Lp1 by summation, and the interpolated maps are its restrictions.

Audit: Read full complex completeness/a.e.-subsequence and dominated-convergence proofs. Countable choice is declared for selected approximation sequences/representatives. Boundedness makes image sequences Cauchy in each target, including infinity, so limits define unique linear extensions. For f in two finite input spaces, truncation at 1/n and n followed by component rounding toward zero on mesh 1/n² gives a single finite-simple sequence dominated in modulus by |f|; its error is bounded by 2|f| and tends pointwise to zero. DCT gives both norm limits. Successive a.e. subsequences identify target classes. Difference of two sum decompositions lies in the endpoint intersection. Splitting |f| above/below one puts intermediate f in the required pairwise intersections and proves the restriction clause.

Examined dependencies: `lem-riesz-thorin-bound-on-the-finite-simple-core`, `thm-complex-lp-completeness-and-almost-everywhere-subsequences`, `thm-complex-finite-simple-and-smooth-compact-support-density-for-finite-p`, `thm-complex-holder-minkowski-and-the-quotient-norm`, `def-countable-choice`, `thm-dominated-convergence`.

Contract source locators: {"references":[{"title":"Teschl Corollary 15.3 p.415 and sum-space discussion p.413; Laugesen Remark C.7(2)–(3) pp.169–170 and proof conclusion pp.172–173","url":"https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"}]}. Receipt written successfully; no unresolved item obligation.

### cor-l-one-l-infinity-and-l-two-bounds-interpolate-to-l-p-l-p-prime — accept

Claim/conventions: On sigma-finite spaces let the same complex-linear finite-simple-core operator satisfy ||Tf||∞≤A||f||1 and ||Tf||2≤B||f||2. For 1<p<2, ||Tf||p-prime≤A^(2/p−1)B^(2−2/p)||f||p. At p=1 and p=2 retain the given endpoint inequalities. The unique bounded extensions are supplied by the preceding corollary under countable choice.

Audit: Substituting theta=2-2/p gives source reciprocal 1-theta/2 and target reciprocal theta/2=1-1/p, and powers 2/p-1 and 2-2/p. The core lemma includes the target-infinity endpoint; zero constants are legitimate only at the stated interior parameters. Endpoints use the hypotheses directly. Countable choice is explicitly required only for the extension clause supplied by the preceding accepted corollary. No Fourier result is used.

Examined dependencies: `lem-riesz-thorin-bound-on-the-finite-simple-core`, `def-conjugate-exponents`, `cor-complex-interpolation-extensions-agree-on-intersections`, `def-countable-choice`.

Contract source locators: {"references":[{"title":"Laugesen Theorem C.6 pp.168–173; Teschl Corollary 15.4 p.415 as application motivation","url":"https://arxiv.org/pdf/0903.3845"}]}. Receipt written successfully; no unresolved item obligation.

### ex-endpoint-interpolation-for-a-finite-matrix — accept

Claim/conventions: On two-point counting measure, H(a,b)=(a+b,a−b) has l1→linfinity norm 1 and l2→l2 norm sqrt(2). Thus for 1≤p≤2 its lp→lp-prime norm is at most 2^(1−1/p).

Audit: Counting measure gives the ordinary complex two-coordinate norms. Triangle inequality gives l1-to-linfinity bound one, attained at (1,0); expansion of the two squared moduli gives twice the input squared l2 norm. Every vector is already finite simple, so the accepted core interpolation clause yields 2^(1-1/p) with no extension/choice assumption.

Examined dependencies: `cor-l-one-l-infinity-and-l-two-bounds-interpolate-to-l-p-l-p-prime`, `def-complex-lp-and-euclidean-test-function-conventions`.

Contract source locators: {"references":[{"title":"Laugesen Theorem C.6; explicit finite matrix calculation","url":"https://arxiv.org/pdf/0903.3845"}]}. Receipt written successfully; no unresolved item obligation.

### ex-hausdorff-young-endpoint-exponent-arithmetic — accept

Claim/conventions: For p=4/3 the parameter is θ=1/2, the target exponent is 4, and the bound from A,B is sqrt(AB). At p=1 the target is infinity, and at p=2 it is 2.

Audit: At p=4/3, 2-2/p=1/2 and 1-1/p=1/4; both constant exponents equal 1/2. At p=1,2 the target conjugates are infinity and two. These are calculations in the accepted abstract core bound, not a claim that any Fourier operator or extension has been constructed.

Examined dependencies: `cor-l-one-l-infinity-and-l-two-bounds-interpolate-to-l-p-l-p-prime`.

Contract source locators: {"references":[{"title":"Laugesen Remark C.7(1), p.169; explicit specialization","url":"https://arxiv.org/pdf/0903.3845"}]}. Receipt written successfully; no unresolved item obligation.

### cex-finite-target-interpolation-does-not-state-an-infinite-endpoint — accept

Claim/conventions: Assume countable choice, as in the earlier construction of Lebesgue measure. The identity on complex finite simple functions on (0,1) with Lebesgue measure has L1→L1 and L2→L2 bounds one, but has no bounded L1→Linfinity estimate. Thus finite-target interpolation hypotheses alone do not supply an infinite target endpoint.

Audit: The box-measure statement explicitly assumes countable choice, propagated here. For f_n=n1_(0,1/n), the open interval has measure 1/n; thus L1 norm is one and essential infinity norm is n. The identity has both finite endpoint norms one, yet any proposed L1-to-infinity bound fails for n larger than it. This refutes the inference without contradicting the accepted finite-target theorem.

Examined dependencies: `def-complex-lp-and-euclidean-test-function-conventions`, `thm-complex-holder-minkowski-and-the-quotient-norm`, `thm-lebesgue-measure-of-a-box-of-every-kind`, `def-countable-choice`.

Contract source locators: {"references":[{"title":"Laugesen Theorem C.6 and Remark C.7, endpoint parameter scope; explicit witness","url":"https://arxiv.org/pdf/0903.3845"}]}. Receipt written successfully; no unresolved item obligation.

### ex-interpolation-of-an-integral-averaging-operator — accept

Claim/conventions: On any probability space set Pf=(∫f dμ)1 for finite simple f. It has L1→Linfinity and L2→L2 norms at most one; hence ||Pf||p-prime≤||f||p for 1≤p≤2.

Audit: A probability space is sigma-finite, finite simple functions are integrable, and the componentwise integral is complex linear. Integral triangle gives |integral f|<=||f||1; complex Cauchy–Schwarz against 1 gives <=||f||2 because ||1||2=1. The constant output has every norm equal to that modulus. Core interpolation gives the claim on the stated finite-simple domain, without consuming the choice-dependent extension clause.

Examined dependencies: `cor-l-one-l-infinity-and-l-two-bounds-interpolate-to-l-p-l-p-prime`, `thm-integral-triangle-inequality`, `thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz`.

Contract source locators: {"references":[{"title":"Teschl Theorem 15.2; explicit averaging specialization","url":"https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"}]}. Receipt written successfully; no unresolved item obligation.

### def-strong-law-of-large-numbers-for-a-sequence — accept

Claim/conventions: For integrable real X_n, S_n=sum_{k=1}^n X_k satisfies the centered strong law if (S_n-E S_n)/n tends to zero almost surely. For identically distributed integrable variables this is S_n/n -> E X_1.

Audit: Read the published finite-sum/sample-mean, measurable a.s.-convergence and expectation definitions. Integrability of each variable makes each finite sum and its mean defined; linearity gives E S_n=sum E X_k. Under identical distributions this equals n E X_1, so the two convergence formulas agree without assuming independence in the definition.

Examined dependencies: `def-partial-sums-and-sample-means`, `def-almost-sure-convergence-of-random-variables`, `def-expectation-of-a-nonnegative-or-integrable-random-variable`, `thm-linearity-of-the-lebesgue-integral-on-l-one`.

Contract source locators: {"references":[{"title":"Durrett, §§2.4–2.5, pp. 76–87","url":"https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"}]}. Receipt written successfully; no unresolved item obligation.

### cor-kolmogorov-strong-law-for-independent-uniformly-bounded-variances — repaired

Claim/conventions: Independent square-integrable real variables with sup_n Var(X_n)<infinity satisfy the centered strong law.

Audit: Read the complete normalized-variance theorem, convergence criterion, Kronecker and integral-test statements/proofs. The current published convergence criterion already uses a canonical conull Cauchy event and Fatou, so the contract's claim of outstanding L2-completeness debt was stale. Replaced that commentary and made the elementary telescoping bound on sum n^-2 explicit. The mathematical claim is unchanged: b_n=n and finite uniform variance meet every hypothesis. Local strategy repair checked against these proofs; no published edit or extra mathematical recheck required.

Examined dependencies: `thm-kolmogorov-strong-law-under-summable-normalized-variances`, `def-strong-law-of-large-numbers-for-a-sequence`, `thm-integral-test-for-series`, `thm-kolmogorov-convergence-criterion`, `lem-kronecker-summation-lemma`.

Contract source locators: {"references":[{"title":"Durrett, §§2.4–2.5, pp. 76–87","url":"https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"}]}. Receipt written successfully; no unresolved item obligation.

### cor-iid-finite-variance-strong-law — accept

Claim/conventions: IID square-integrable real X_n satisfy S_n/n -> E X_1 almost surely.

Audit: The inspected IID definition gives mutual independence and equality of laws. Thus integrals of x and x² against the common law agree, yielding one finite variance and one mean. The previously repaired bounded-variance corollary applies and its centered expression is the stated common-mean expression. No existence of an IID product is asserted.

Examined dependencies: `def-identically-distributed-and-iid-random-variables`, `cor-kolmogorov-strong-law-for-independent-uniformly-bounded-variances`.

Contract source locators: {"references":[{"title":"Durrett, §§2.4–2.5, pp. 76–87","url":"https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"}]}. Receipt written successfully; no unresolved item obligation.

### lem-tail-sum-integrability-equivalence — repaired

Claim/conventions: For nonnegative measurable X (possibly extended), sum_{n>=1} P(X>n) <= E X <= 1+sum_{n>=1} P(X>n). Hence integrability is equivalent to tail-sum finiteness.

Audit: The claim includes extended X. Read the layer-cake corollary and its actual supplier: the latter states only complex finite-valued f, so its displayed specialization does not justify X=infinity. Repaired locally by the complete pointwise indicator-counting inequalities followed by integral MCT, which was previously missing (thm-monotone-convergence concerns real sequences). Integer atoms and infinity satisfy both inequalities. Published layer-cake extended-clause proof gap is recorded here for canonical reconciliation; owner may repair by truncating X and applying MCT. This supplier no longer depends on that gap. Claim unchanged.

Examined dependencies: `cor-layer-cake-formulas-for-random-variables`, `thm-monotone-convergence`, `thm-monotone-convergence-for-the-integral`, `thm-layer-cake-formula-for-l-p-powers`.

Contract source locators: {"references":[{"title":"Durrett, §§2.4–2.5, pp. 76–87","url":"https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"}]}. Receipt written successfully; no unresolved item obligation.

### lem-iid-linear-truncation-occurs-only-finitely-often — accept

Claim/conventions: For identically distributed real X_n with E|X_1|<infinity, Y_n=X_n 1_{|X_n|<=n} differs from X_n only finitely often almost surely; independence is unnecessary.

Audit: The fixed-level definition includes both endpoints and gives measurable bounded Y_n. Equality of laws identifies P(|X_n|>n) with the summable tails of |X_1| from the repaired lemma. The inspected first Borel–Cantelli statement needs no independence. Outside its null limsup event only finitely many finite summand errors occur, whose partial sums divided by n vanish.

Examined dependencies: `def-truncation-at-a-fixed-level`, `lem-tail-sum-integrability-equivalence`, `cor-first-borel-cantelli-lemma-for-events`.

Contract source locators: {"references":[{"title":"Durrett, §§2.4–2.5, pp. 76–87","url":"https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"}]}. Receipt written successfully; no unresolved item obligation.

### lem-summability-of-truncated-normalized-variances — accept

Claim/conventions: For identically distributed integrable real X_n and Y_n=X_n 1_{|X_n|<=n}, sum Var(Y_n)/n^2 <= 2 E|X_1| < infinity; independence is unnecessary.

Audit: Variance identity bounds each term by its second moment; the expectation change-of-variable theorem transports the finite-valued nonnegative functions to the common law. Integral MCT applies to increasing finite sums. For t<=1, sum n^-2<=2 gives 2t²<=2t. For t>1 and m=ceil(t), integral comparison gives sum(n>=m)n^-2<=m^-2+m^-1<=2/t; multiplication by t² gives 2t. At integer t, n=m is retained, as required by zero truncation. This proves the exact constant two without independence or choice.

Examined dependencies: `def-truncation-at-a-fixed-level`, `lem-variance-and-covariance-identities-for-random-variables`, `thm-change-of-variables-for-expectation`, `thm-monotone-convergence-for-the-integral`, `thm-integral-test-for-series`, `lem-integer-part`.

Contract source locators: {"references":[{"title":"Durrett, §§2.4–2.5, pp. 76–87","url":"https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"}]}. Receipt written successfully; no unresolved item obligation.

### lem-cesaro-limit-of-truncated-means — accept

Claim/conventions: With the same identically distributed integrable variables, n^-1 sum_{k<=n} E[X_k 1_{|X_k|<=k}] -> E X_1.

Audit: For the common law use h_k(x)=x1_{|x|<=k}. These finite-valued measurable functions converge to x, dominated by the integrable |x|. The inspected change-of-variables and DCT statements therefore give E Y_k -> E X_1. The deterministic Cesaro theorem applies after the harmless one-based index shift. No simultaneous choice or independence is needed.

Examined dependencies: `thm-dominated-convergence`, `thm-change-of-variables-for-expectation`, `thm-cesaro-mean-theorem`, `def-truncation-at-a-fixed-level`.

Contract source locators: {"references":[{"title":"Durrett, §§2.4–2.5, pp. 76–87","url":"https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"}]}. Receipt written successfully; no unresolved item obligation.

### thm-kolmogorov-iid-l1-strong-law — repaired

Claim/conventions: IID real X_n with E|X_1|<infinity satisfy S_n/n -> E X_1 almost surely.

Audit: The accepted truncation lemmas give bounded mutually independent Y_n, summable normalized variances, convergence of their mean averages and only finitely many pathwise changes. The published normalized-variance theorem then supplies exactly the centered convergence. Replaced stale text alleging a currently defective L2 supplier with the actual canonical-event/Fatou proof status, inspected above. The claim and independent proof route are unchanged; no choice is used for an already supplied IID sequence.

Examined dependencies: `def-identically-distributed-and-iid-random-variables`, `lem-iid-linear-truncation-occurs-only-finitely-often`, `lem-summability-of-truncated-normalized-variances`, `lem-cesaro-limit-of-truncated-means`, `lem-measurable-functions-preserve-independence`, `thm-kolmogorov-strong-law-under-summable-normalized-variances`, `thm-kolmogorov-convergence-criterion`, `lem-kronecker-summation-lemma`.

Contract source locators: {"references":[{"title":"Durrett, §§2.4–2.5, pp. 76–87","url":"https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"},{"title":"Roch, Note 5, Theorems 5.8–5.9, printed pp. 5–6 (mutual independence specialization only)","url":"https://people.math.wisc.edu/~roch/grad-prob/gradprob-notes5.pdf"}]}. Receipt written successfully; no unresolved item obligation.

### thm-integrability-is-necessary-for-an-iid-finite-mean-strong-law — accept

Claim/conventions: If IID real X_n have S_n/n converging almost surely to a finite (possibly initially random) limit, then E|X_1|<infinity and the limit equals E X_1 almost surely.

Audit: On the given finite-limit event, X_n/n is the difference of two averages with the same limit and tends to zero. Hence |X_n|>n occurs only finitely often. These events are mutually, hence pairwise, independent; the inspected BC2 statement implies by contrapositive that their probability sum is finite. Equality of laws and the repaired tail lemma give E|X_1|<infinity. The preceding strong law and uniqueness of a pathwise finite limit identify even an initially random limit as E X_1.

Examined dependencies: `def-identically-distributed-and-iid-random-variables`, `cor-second-borel-cantelli-lemma-under-pairwise-independence`, `lem-tail-sum-integrability-equivalence`, `thm-kolmogorov-iid-l1-strong-law`.

Contract source locators: {"references":[{"title":"Durrett, Theorem 2.3.8 and §2.4","url":"https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"}]}. Receipt written successfully; no unresolved item obligation.

### thm-etemadi-strong-law-for-pairwise-independent-iid-variables — accept

Claim/conventions: Pairwise independent identically distributed integrable real X_n satisfy S_n/n -> E X_1 almost surely.

Audit: Read Durrett Theorem 2.4.1 and complete proof pp.76–78 (lines 4729–4913), plus the published pairwise-event, covariance, Chebyshev, floor, integer-power and geometric-series interfaces. Apply measurable-independence preservation to each two-element subfamily, not the whole family. For fixed alpha>1, floor(alpha^j)>=alpha^j/2 and the geometric tail bound gives coefficient <=4/(1-alpha^-2)m^-2. Finite double sums already have this bound; taking their increasing suprema avoids any choice-dependent rearrangement. Chebyshev and BC1 at rational tolerances yield subsequence convergence. Nonnegative partial sums permit the adjacent geometric-index squeeze; alpha=1+1/r and a countable conull intersection recover the mean. Apply separately to positive/negative parts and remove finitely many truncations.

Examined dependencies: `def-pairwise-independence`, `lem-iid-linear-truncation-occurs-only-finitely-often`, `lem-summability-of-truncated-normalized-variances`, `lem-cesaro-limit-of-truncated-means`, `cor-chebyshev-inequality-for-random-variables`, `cor-covariance-vanishes-under-independence`, `lem-variance-and-covariance-identities-for-random-variables`, `lem-measurable-functions-preserve-independence`, `cor-first-borel-cantelli-lemma-for-events`, `thm-monotone-convergence`, `lem-integer-part`, `def-integer-power`, `thm-geometric-series`.

Contract source locators: {"references":[{"title":"Durrett, Theorem 2.4.1, Lemmas 2.4.2–2.4.4 and complete proof, pp. 76–78","url":"https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"}]}. Receipt written successfully; no unresolved item obligation.

### cor-iid-strong-law-implies-the-weak-law — accept

Claim/conventions: Under the IID L1 hypotheses, S_n/n -> E X_1 in probability.

Audit: The preceding IID L1 theorem yields almost-sure convergence of real sample means to the finite constant E X_1; the inspected published a.s.-to-probability implication applies to exactly these variables. There is no stronger moment or product-existence hypothesis.

Examined dependencies: `thm-kolmogorov-iid-l1-strong-law`, `thm-almost-sure-convergence-implies-convergence-in-probability`.

Contract source locators: {"references":[{"title":"Durrett, §§2.4–2.5, pp. 76–87","url":"https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"}]}. Receipt written successfully; no unresolved item obligation.

### lem-finite-probability-maximal-ergodic-inequality — accept

Claim/conventions: Let T preserve a probability measure P and let f be an integrable real-valued measurable function. Write S_k f=sum_{j=0}^{k-1} f composed with T^j, M_N=max(0,S_1 f,...,S_N f), and E_N={M_N>0}. Then integral_{E_N} f dP>=0. The same inequality holds on E={sup_{k>=1} S_k f>0}.

Audit: Read the full maximal lemma proof in Durrett p.335, lines 22272–22296. Checked its local pointwise inequality on both E_N and its complement. M_N is bounded above by the finite sum of |f| pulled back, so all integrated terms are integrable by the accepted batch-1 invariant-integral supplier. Their integrals cancel. E_N increases and |f1_E_N|<=|f|, allowing DCT for the infinite horizon. Arithmetic measurability and order/linearity clauses were inspected. No future ergodic theorem is used.

Examined dependencies: `def-measure-preserving-transformation-and-system`, `thm-integrals-are-invariant-under-measure-preserving-maps`, `thm-arithmetic-and-lattice-operations-preserve-measurability`, `thm-linearity-of-the-lebesgue-integral-on-l-one`, `thm-integral-triangle-inequality`, `thm-dominated-convergence`, `prop-order-and-scalar-rules-for-the-nonnegative-integral`.

Contract source locators: {"references":[{"title":"Durrett, Probability: Theory and Examples, 5th ed., Lemma 6.2.2, printed p.335; complete proof read","url":"https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"}]}. Receipt written successfully; no unresolved item obligation.

### thm-birkhoff-ergodic-probability-case-for-strong-laws — accept

Claim/conventions: If T is an ergodic measure-preserving transformation of a probability space and f is an integrable real-valued measurable function, then A_n f=n^-1 sum_{j=0}^{n-1} f composed with T^j converges almost surely and in L1 to the constant integral f dP. No invertibility assumption is required.

Audit: Read Durrett's full maximal argument and ergodic convergence proof pp.335–337, including the truncation tail estimate. Independently checked the local ergodic specialization: finite h makes the shifted-average identity valid everywhere; positive multipliers tending to one preserve finite/infinite limsup, hence D is strictly invariant. For g=(h-epsilon)1_D the positive-supremum event is exactly D. The maximal inequality and ergodicity exclude P(D)=1 since integral h=0. Apply to +/-h at epsilon=1/m. Bounded truncations give L1 convergence by DCT; invariant integration bounds the remaining error by twice the L1 truncation tail. No conditional expectation or IID strong law is used, and no arbitrary representative selection is needed.

Examined dependencies: `lem-finite-probability-maximal-ergodic-inequality`, `def-ergodic-measure-preserving-system`, `thm-integrals-are-invariant-under-measure-preserving-maps`, `thm-arithmetic-and-lattice-operations-preserve-measurability`, `thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable`, `thm-linearity-of-the-lebesgue-integral-on-l-one`, `thm-integral-triangle-inequality`, `thm-dominated-convergence`, `thm-finite-and-countable-subadditivity-of-measures`.

Contract source locators: {"references":[{"title":"Durrett, Probability: Theory and Examples, 5th ed., Theorem 6.2.1 and its complete proof, printed pp.335–337; ergodic specialization proved without conditional expectation","url":"https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"}]}. Receipt written successfully; no unresolved item obligation.

### cor-birkhoff-strong-law-for-iid-coordinate-shifts — accept

Claim/conventions: On the countable product carrying IID integrable real coordinates, the left shift is measure preserving and ergodic, and Birkhoff recovers S_n/n -> E X_1 almost surely. Assume AC for the countable-product construction and ergodic supplier.

Audit: Read the independent-copy proof and exact product/coordinate clauses requiring CC+DC. The explicit AC successor selection followed by the inspected recursion theorem supplies DC with its prescribed starting point; restriction supplies CC. Canonical finite cylinders include the whole probability space and form a generating pi-system with equal shifted probabilities. The accepted preservation theorem applies. For every n, preimages of all product-measurable sets are measurable in coordinates starting at n by sigma-algebra closure; a strictly invariant event is therefore tail measurable. The inspected zero-one law gives ergodicity. Apply the independently accepted Birkhoff theorem to the integrable first coordinate. Its own supplied-function clause is choice-free; AC here covers product existence.

Examined dependencies: `thm-birkhoff-ergodic-probability-case-for-strong-laws`, `cor-countable-independent-copies-exist`, `thm-kolmogorov-zero-one-law`, `thm-measure-preservation-on-a-generating-pi-system`, `def-ergodic-measure-preserving-system`, `def-axiom-of-choice`, `def-countable-choice`, `def-dependent-choice`, `thm-recursion`, `thm-countable-product-of-probability-spaces`, `cor-coordinate-random-elements-on-a-countable-product-are-independent`.

Contract source locators: {"references":[{"title":"Durrett, Examples 6.1.4–6.1.5 pp.332–333; Theorem 6.2.1, Lemma 6.2.2 and Example 6.2.3, pp.335–337","url":"https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"}]}. Receipt written successfully; no unresolved item obligation.

### rem-strong-law-does-not-assert-a-rate — accept

Claim/conventions: The L1 strong law asserts almost-sure convergence without a numerical rate. The separate finite-variance result below has extra hypotheses.

Audit: The accepted IID L1 statement asserts a limit and no numerical error bound. The following theorem has the additional finite-variance hypothesis. This remark accurately describes their scope and invokes no lower-rate example or later LIL theorem.

Examined dependencies: `thm-kolmogorov-iid-l1-strong-law`.

Contract source locators: {"references":[{"title":"Durrett, §§2.4–2.5, pp. 76–87","url":"https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"}]}. Receipt written successfully; no unresolved item obligation.

### thm-finite-variance-logarithmic-rate-for-iid-sums — repaired

Claim/conventions: For IID real X_n of finite variance and mean mu, for every epsilon>0, (S_n-n mu)/(sqrt(n)(log n)^(1/2+epsilon))->0 almost surely, n>=2.

Audit: Read the published general strong-law proof including its current dyadic rate clause and all declared real-power/log/p-series interfaces. Repaired stale claims that this published rate and L2 proof remain defective; set b_1=b_2 to the n=2 formula so monotonicity needs no extra numeric estimate. Positive log2 and positive power monotonicity give divergent nondecreasing b_n. Each dyadic block has 2^k terms bounded by 1/[2^k(k log2)^(1+2epsilon)], summably in k. The normalized-variance theorem now applies exactly. Claim unchanged.

Examined dependencies: `thm-kolmogorov-strong-law-under-summable-normalized-variances`, `def-integer-power`, `def-real-power`, `thm-natural-logarithm-laws`, `thm-real-power-laws`, `thm-real-power-continuity-and-derivatives`, `thm-p-series-real-exponents`, `thm-direct-comparison-test`.

Contract source locators: {"references":[{"title":"Durrett, Theorem 2.5.11, p. 87; Roch, Theorem 5.9, pp. 5–6","url":"https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"},{"title":"Roch, Note 5, Theorems 5.8–5.9, printed pp. 5–6 (mutual independence specialization only)","url":"https://people.math.wisc.edu/~roch/grad-prob/gradprob-notes5.pdf"}]}. Receipt written successfully; no unresolved item obligation.

### ex-almost-sure-frequency-of-heads — accept

Claim/conventions: Assume AC for the product-space construction. On {0,1} with P({1})=p and P({0})=1-p, independent product coordinates X_n satisfy S_n/n -> p almost surely, including p=0,1.

Audit: The two nonnegative masses sum to one (including p=0,1); finite atomic sums give E X=p and variance p(1-p). The inspected independent-copy supplier applies using the explicitly proved AC-to-CC/DC bridge and recursion. Its coordinates meet the accepted finite-variance SLLN. Degenerate endpoint laws cause zero variance, not an exception.

Examined dependencies: `cor-countable-independent-copies-exist`, `cor-iid-finite-variance-strong-law`, `def-axiom-of-choice`, `def-probability-measure`, `def-expectation-of-a-nonnegative-or-integrable-random-variable`, `lem-variance-and-covariance-identities-for-random-variables`, `def-countable-choice`, `def-dependent-choice`, `thm-recursion`.

Contract source locators: {"references":[{"title":"Durrett, §§2.4–2.5, pp. 76–87","url":"https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"}]}. Receipt written successfully; no unresolved item obligation.

### ex-strong-law-for-empirical-indicator-averages — accept

Claim/conventions: For IID random elements and a fixed measurable set A, n^-1 sum 1_A(X_k)->P(X_1 in A) almost surely. For a countable specified class, one common full-measure event works.

Audit: Indicators of each specified measurable set are bounded, share a law, and preserve mutual independence under the inspected measurable-map lemma. Their means are event probabilities, so the accepted IID L1 law applies. The convergence events are canonically defined from each test; their countable intersection is measurable conull by subadditivity. No uncountable simultaneous assertion or countable selection of versions occurs.

Examined dependencies: `lem-measurable-functions-preserve-independence`, `cor-expectation-of-an-indicator-is-probability`, `thm-kolmogorov-iid-l1-strong-law`, `thm-finite-and-countable-subadditivity-of-measures`.

Contract source locators: {"references":[{"title":"Durrett, §§2.4–2.5, pp. 76–87","url":"https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"}]}. Receipt written successfully; no unresolved item obligation.

### ex-strong-law-estimator-of-an-integrable-mean — accept

Claim/conventions: Assume AC for the product-space construction. Let X have CDF F(x)=0 for x<1 and F(x)=1-x^(-3/2) for x>=1 (equivalently density (3/2)x^(-5/2) on [1,infinity)). IID copies have mean 3 and infinite second moment, but their sample mean converges almost surely to 3.

Audit: Checked the CDF existence clause with its CC assumption, real-power derivative formulas, FTC/continuous integrability, compact Riemann–Lebesgue agreement and indefinite-integral measure construction. The stated CDF is continuous at one and has limits zero/one. Integrating the density on compact intervals gives its CDF increments and total mass one by MCT; pi uniqueness identifies the two laws. Strict tails are 1 below one and t^-3/2 above. Proper primitive evaluations and MCT give E X=1+2=3 and E X²=1+2 integral_1^infinity t^-1/2=infinity. Here X is finite-valued, so the layer-cake supplier's finite-valued clause suffices. Explicit AC bridge supplies the product assumptions; IID L1 law gives consistency.

Examined dependencies: `thm-kolmogorov-iid-l1-strong-law`, `cor-countable-independent-copies-exist`, `thm-probability-law-and-distribution-function-correspondence`, `cor-layer-cake-formulas-for-random-variables`, `thm-layer-cake-formula-for-l-p-powers`, `def-real-power`, `thm-real-power-continuity-and-derivatives`, `def-countable-choice`, `def-axiom-of-choice`, `thm-ftc-second-part`, `thm-continuous-implies-integrable`, `thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral`, `thm-monotone-convergence-for-the-integral`, `thm-indefinite-integral-of-a-nonnegative-function-is-a-measure`, `thm-measure-uniqueness-on-a-sigma-finite-pi-system`, `def-dependent-choice`, `thm-recursion`.

Contract source locators: {"references":[{"title":"Durrett, §§2.4–2.5, pp. 76–87","url":"https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"}]}. Receipt written successfully; no unresolved item obligation.

### ex-nonidentical-strong-law-under-summable-normalized-variances — accept

Claim/conventions: Assume AC for the product-space construction. For independent copies eps_n of the two-point law P(eps_n=1)=P(eps_n=-1)=1/2 and X_n=n^(1/4) eps_n, S_n/n->0 almost surely although Var(X_n)=sqrt(n) is unbounded.

Audit: The symmetric two-atom probability has mean zero and second moment one. AC with the explicit recursion bridge supplies independent copies; coordinate scaling is measurable and preserves independence. Power laws give variance sqrt(n), whose n^-2 normalization is n^-3/2. The inspected real p-series theorem supplies summability, and the general normalized-variance SLLN applies. No assertion about an unavailable L2 clause is needed.

Examined dependencies: `cor-countable-independent-copies-exist`, `thm-kolmogorov-strong-law-under-summable-normalized-variances`, `def-probability-measure`, `def-expectation-of-a-nonnegative-or-integrable-random-variable`, `lem-variance-and-covariance-identities-for-random-variables`, `def-real-power`, `thm-real-power-laws`, `thm-p-series-real-exponents`, `def-axiom-of-choice`, `def-countable-choice`, `def-dependent-choice`, `thm-recursion`, `lem-measurable-functions-preserve-independence`.

Contract source locators: {"references":[{"title":"Durrett, §§2.4–2.5, pp. 76–87","url":"https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"}]}. Receipt written successfully; no unresolved item obligation.

### cex-weak-law-does-not-imply-strong-law — accept

Claim/conventions: Assume AC for the product-space construction. There are integrable real X_n with S_n/n->0 in probability but (S_n-E S_n)/n not tending to zero almost surely.

Audit: AC supplies independent uniforms via the inspected product and box-measure interfaces. The threshold indicators are independent with P(B_n=1)=1/(n+1), so B_n tends to zero in probability. The defined integrable finite differences X_n telescope exactly to S_n=nB_n. Harmonic divergence and BC2 give ones infinitely often (and complements likewise); subtracting 1/(n+1) cannot yield almost-sure zero convergence. The summands are not claimed independent, avoiding the erroneous use of a bare convergence-mode example.

Examined dependencies: `cor-countable-independent-copies-exist`, `cor-second-borel-cantelli-lemma-under-pairwise-independence`, `def-convergence-in-probability`, `def-strong-law-of-large-numbers-for-a-sequence`, `def-axiom-of-choice`, `lem-measurable-functions-preserve-independence`, `thm-lebesgue-measure-of-a-box-of-every-kind`, `def-countable-choice`, `def-dependent-choice`, `thm-recursion`.

Contract source locators: {"references":[{"title":"Durrett, §§2.4–2.5, pp. 76–87","url":"https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"}]}. Receipt written successfully; no unresolved item obligation.

### cex-iid-strong-law-fails-at-infinite-absolute-mean — accept

Claim/conventions: Assume AC for the product-space construction. IID standard Cauchy variables cannot have sample means converging almost surely to any finite random limit. Their sample means are standard Cauchy for each n and hence cannot converge in probability to a finite constant.

Audit: Checked CDF/AC construction, inverse-tangent range and derivative, logarithm primitive, compact integral comparison, product-law and sigma-finite Tonelli clauses. Arctangent is increasing onto (-pi/2,pi/2), so its endpoint limits normalize f_a; log(1+R²)/(2pi) proves the absolute mean infinite. Independently multiplied out the displayed partial fractions: quadratic/cubic coefficients cancel and the constant is H/H. For H>0 their compact antiderivatives yield vanishing combined log terms and pi(B/a+D/b)=pi(a+b)/(ab(x²+(a+b)²)). H vanishes only at x=0,a=b, an irrelevant null singleton. Interval testing, nonnegative Tonelli and pi uniqueness rigorously give convolution and positive scaling, hence the invariant Cauchy sample-mean laws. Necessity excludes any finite a.s. random limit; any finite constant has a neighborhood of Cauchy mass below one, excluding convergence in probability to it.

Examined dependencies: `cor-countable-independent-copies-exist`, `thm-integrability-is-necessary-for-an-iid-finite-mean-strong-law`, `thm-independent-random-elements-have-product-joint-law`, `thm-tonelli-theorem-for-sigma-finite-product-spaces`, `thm-change-of-variables-for-expectation`, `thm-probability-law-and-distribution-function-correspondence`, `thm-principal-inverse-tangent-calculus`, `thm-substitution-for-improper-integrals`, `thm-logarithm-derivative-and-integral`, `thm-natural-logarithm-laws`, `def-countable-choice`, `def-axiom-of-choice`, `thm-ftc-second-part`, `thm-continuous-implies-integrable`, `thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral`, `thm-monotone-convergence-for-the-integral`, `thm-indefinite-integral-of-a-nonnegative-function-is-a-measure`, `thm-measure-uniqueness-on-a-sigma-finite-pi-system`, `def-dependent-choice`, `thm-recursion`, `def-principal-inverse-tangent`.

Contract source locators: {"references":[{"title":"Durrett, Example 2.2.15 p.65 and Theorem 2.3.8 pp.70–71; convolution evaluated locally without characteristic functions","url":"https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"}]}. Receipt written successfully; no unresolved item obligation.

### cex-identical-distribution-without-independence-can-defeat-the-mean-law — accept

Claim/conventions: On {0,1} with P({0})=P({1})=1/2, let X be the identity and X_n=X for every n. Then S_n/n=X never converges almost surely to its mean 1/2.

Audit: Direct finite atomic calculation gives probability one and E X=1/2. Every sample mean equals X and differs from 1/2 by absolute value 1/2 on both atoms. Identical marginals hold trivially; two events {X_n=1} have intersection probability 1/2 rather than 1/4, so independence fails. This is an explicit choice-free counterexample.

Examined dependencies: `def-strong-law-of-large-numbers-for-a-sequence`, `def-probability-measure`, `def-expectation-of-a-nonnegative-or-integrable-random-variable`.

Contract source locators: {"references":[{"title":"Durrett, §§2.4–2.5, pp. 76–87","url":"https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"}]}. Receipt written successfully; no unresolved item obligation.

### def-borel-probability-law-on-a-polish-space — accept

Claim/conventions: Let S be Polish, equipped with its Borel sigma-algebra. A Borel probability law is a countably additive probability measure on that sigma-algebra. Choose a compatible complete metric when a construction needs it.

Audit: Checked the published Polish, Borel and probability definitions. Selecting one compatible complete metric is a single existential witness, not a sequence-choice use. Countable additivity and total mass one exclude the empty space exactly as stated.

Examined dependencies: `def-polish-space`, `def-probability-measure`, `def-borel-sigma-algebra`.

Contract source locators: {"references":[{"title":"van Gaans, §2, p. 3","url":"https://pub.math.leidenuniv.nl/~gaansowvan/jancol1.pdf"}]}. Receipt written successfully; no unresolved item obligation.

### def-weak-convergence-of-borel-probability-measures — accept

Claim/conventions: For Borel probability measures on a metric space, mu_n=>mu means integral f dmu_n -> integral f dmu for every bounded continuous real f.

Audit: The integral is well-defined: epsilon-delta continuity gives Borel measurability and bounded absolute value has finite integral against mass one. Only the choice-free continuity definition is used, not its separate CC sequential characterization. Real tests suffice as stipulated.

Examined dependencies: `def-probability-measure`, `def-borel-sigma-algebra`, `def-metric-continuity`, `def-integrable-real-and-complex-functions-and-their-integrals`.

Contract source locators: {"references":[{"title":"van Gaans, Definition 3.1, pp. 6–7","url":"https://pub.math.leidenuniv.nl/~gaansowvan/jancol1.pdf"}]}. Receipt written successfully; no unresolved item obligation.

### def-convergence-in-distribution-of-random-elements — accept

Claim/conventions: Measurable random elements X_n and X with a common metric state space converge in distribution when their laws converge weakly; their underlying probability spaces need not agree.

Audit: Read the implicit law-probability lemma in full: measurable inverse images preserve disjoint unions and total mass. Thus each law belongs to the test definition even with differing underlying spaces. No coupling or selection is used.

Examined dependencies: `def-law-or-distribution-of-a-random-element`, `def-weak-convergence-of-borel-probability-measures`, `lem-law-of-a-random-element-is-a-probability-measure`.

Contract source locators: {"references":[{"title":"van Gaans, Definition 3.1 applied to laws","url":"https://pub.math.leidenuniv.nl/~gaansowvan/jancol1.pdf"}]}. Receipt written successfully; no unresolved item obligation.

### thm-portmanteau-theorem — accept

Claim/conventions: For metric-space Borel probabilities, weak convergence is equivalent to convergence of integrals of bounded uniformly continuous functions, the closed-set limsup inequality, the open-set liminf inequality, and convergence on all Borel mu-continuity sets. No completeness is required.

Audit: Read van Gaans Theorem 3.2 pp.7–9 through the final 2epsilon bound, and the distance and continuity-above suppliers. The explicit cutoff avoids empty-complement distances; F empty is separate. Open/closed bounds give the boundary sandwich. For the converse, pushforward atoms of mass above 1/m are finite and can be ordered on R, so their union is enumerable without CC; finitely many nonatom endpoints give uniform simple-function bounds. All integrals are bounded on probability spaces. No completeness/choice is needed.

Examined dependencies: `def-weak-convergence-of-borel-probability-measures`, `lem-distance-to-set-is-lipschitz`, `thm-dominated-convergence`, `thm-continuity-from-above-for-measures`, `thm-dynkin-pi-lambda`, `thm-change-of-variables-for-expectation`, `lem-law-of-a-random-element-is-a-probability-measure`.

Contract source locators: {"references":[{"title":"van Gaans, Theorem 3.2, pp. 7–9","url":"https://pub.math.leidenuniv.nl/~gaansowvan/jancol1.pdf"}]}. Receipt written successfully; no unresolved item obligation.

### lem-real-cdf-and-bounded-continuous-definitions-agree — accept

Claim/conventions: For real random variables, the earlier CDF continuity-point definition of convergence in distribution agrees with weak convergence of laws.

Audit: Read the current correspondence theorem and earlier CDF definition. Its blanket CC assumption is unnecessary here: no measure is constructed. For already supplied laws, increasing/decreasing half-lines directly give tails, right continuity and jump mu({t}); finite difference gives interval masses. These choice-free clauses reproduce steps 1.1–1.2 of that proof from the examined measure suppliers. Portmanteau gives one direction. For the converse choose finite continuity endpoints bounding both tails, use interval-mass convergence and uniform continuity of a fixed test on their compact interval; its boundedness controls the tails. Thus the statement remains choice-free without invoking the CC construction clause.

Examined dependencies: `thm-portmanteau-theorem`, `def-convergence-in-distribution-for-real-random-variables`, `thm-probability-law-and-distribution-function-correspondence`, `thm-continuity-from-below-for-measures`, `thm-continuity-from-above-for-measures`, `prop-measure-of-a-set-difference`, `def-atom-and-continuity-point-of-a-law`.

Contract source locators: {"references":[{"title":"Durrett, Theorem 3.2.9, pp. 119–120","url":"https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"}]}. Receipt written successfully; no unresolved item obligation.

### cor-weak-limits-are-unique — accept

Claim/conventions: Bounded continuous real functions determine Borel probabilities on a metric space; a weakly convergent sequence has at most one limit.

Audit: Apply the explicit closed-set cutoff proof already checked in Portmanteau to equal test integrals, obtaining equal masses for every nonempty closed set (empty is automatic). Closed sets contain S, are a pi-system, and generate Borel sets by complements. The finite probability uniqueness consequence of Dynkin applies. Equality for any two weak limits follows from uniqueness of real integral limits.

Examined dependencies: `thm-portmanteau-theorem`, `thm-dynkin-pi-lambda`.

Contract source locators: {"references":[{"title":"van Gaans, Theorem 4.1, definiteness argument, pp. 9–10","url":"https://pub.math.leidenuniv.nl/~gaansowvan/jancol1.pdf"}]}. Receipt written successfully; no unresolved item obligation.

### thm-continuous-mapping-theorem — accept

Claim/conventions: For metric spaces S,T, measurable g:S->T, mu_n=>mu and mu(D_g)=0 imply g_*mu_n=>g_*mu. In particular X_n=>X implies g(X_n)=>g(X). Assume D_g Borel, as holds for metric-valued maps by the oscillation criterion.

Audit: Read the law-composition proof. The continuous-map clause is understood under the same mu-null-discontinuity hypothesis. At any continuity point outside g^-1(F), an open target neighborhood disjoint from closed F pulls back to a neighborhood, proving closure inclusion without sequential choice. The oscillation neighborhoods form open unions and their countable intersection is precisely the continuity set, even for nonseparable metric targets. Thus D_g is Borel and the closed-set Portmanteau inequality gives the pushed-forward convergence.

Examined dependencies: `thm-portmanteau-theorem`, `lem-laws-commute-with-measurable-maps`, `def-metric-continuity`.

Contract source locators: {"references":[{"title":"van Gaans, Theorem 3.2; local closed-preimage argument","url":"https://pub.math.leidenuniv.nl/~gaansowvan/jancol1.pdf"}]}. Receipt written successfully; no unresolved item obligation.

### thm-converging-together-lemma — accept

Claim/conventions: For S-valued random elements X_n,Y_n on a common probability space (or one space per n), with S metric, P(d(X_n,Y_n)>epsilon)->0 for every epsilon>0 and X_n=>X, one has Y_n=>X. Require measurability of the distances, automatic for separable metric S.

Audit: For a nonempty closed F the Lipschitz distance gives a closed epsilon enlargement. The stated event inclusion follows from triangle inequality; empty F has zero mass separately. Portmanteau bounds its X_n probability, then finite-mass continuity above with epsilon=1/k gives mu(F). The additional distance-measurability hypothesis is explicit; in separable S the product Borel structure makes distance measurable. The proof permits a different common space for each pair n.

Examined dependencies: `thm-portmanteau-theorem`, `thm-continuity-from-above-for-measures`, `def-convergence-in-probability`, `lem-distance-to-set-is-lipschitz`.

Contract source locators: {"references":[{"title":"van Gaans, Theorem 3.2 and closed-neighborhood argument","url":"https://pub.math.leidenuniv.nl/~gaansowvan/jancol1.pdf"}]}. Receipt written successfully; no unresolved item obligation.

### def-tight-family-of-probability-measures — accept

Claim/conventions: A family A of Borel probability measures on S is tight if for every epsilon>0 some compact K satisfies sup_{mu in A}mu(S\K)<epsilon. The empty family is vacuously tight.

Audit: The compact set is uniform over the family; for a nonempty family the displayed supremum exists in [0,1]. The explicit empty-family convention supplies the vacuous case without taking an undefined real supremum. Intrinsic metric compactness is the published convention; no ambient-cover argument is required by the definition.

Examined dependencies: `def-metric-compactness`, `def-probability-measure`.

Contract source locators: {"references":[{"title":"van Gaans, Definition 5.1, p. 14","url":"https://pub.math.leidenuniv.nl/~gaansowvan/jancol1.pdf"}]}. Receipt written successfully; no unresolved item obligation.

### def-relative-sequential-compactness-for-weak-convergence — accept

Claim/conventions: A family is relatively sequentially compact if every sequence chosen from it has a weakly convergent subsequence with a Borel probability limit on S, not necessarily in the family.

Audit: The definition quantifies over supplied sequences and increasing-index subsequences, with a Borel probability limit in the ambient space. It correctly allows the limit outside the family and imposes no choice or unsupported equivalence with topological compactness.

Examined dependencies: `def-weak-convergence-of-borel-probability-measures`.

Contract source locators: {"references":[{"title":"van Gaans, Theorem 5.2, p. 14 (closure of the family)","url":"https://pub.math.leidenuniv.nl/~gaansowvan/jancol1.pdf"}]}. Receipt written successfully; no unresolved item obligation.

### thm-every-borel-probability-on-a-polish-space-is-tight — accept

Claim/conventions: Assuming AC, every Borel probability on a Polish space is tight.

Audit: Read the published inner-regularity argument, especially steps 1.1–2.1 used at A=S. Dense finite ball unions lose summable mass; their closed intersections are complete and have finite nets with centers selected inside nonempty intersections. Hence total boundedness gives compactness. AC explicitly supplies its CC hypothesis (restrict a choice function to a countable family), so applying the whole-space clause is legitimate; no unrelated regularity extension clause is needed.

Examined dependencies: `def-borel-probability-law-on-a-polish-space`, `def-tight-family-of-probability-measures`, `thm-borel-probability-measures-on-polish-spaces-are-inner-regular`, `def-axiom-of-choice`, `def-countable-choice`.

Contract source locators: {"references":[{"title":"van Gaans, Theorem 2.6, pp. 5–6","url":"https://pub.math.leidenuniv.nl/~gaansowvan/jancol1.pdf"}]}. Receipt written successfully; no unresolved item obligation.

### lem-countable-uniformly-dense-tests-on-a-compact-metric-space — accept

Claim/conventions: Assuming AC, C(K,R) is separable in supremum norm for every compact metric K. In particular a countable class determines all integrals of continuous functions uniformly.

Audit: Checked complete/total-bounded and Heine-Cantor proofs. AC permits a sequence of finite nets, whose union D is countable dense. For |f|<=M, L delta>2M implies f(y)+Ld(x,y)>=f(x)-eta by splitting d<delta and d>=delta, while y=x gives the upper bound. Replacing y by a D-net point costs its f oscillation plus L times mesh; rational coefficients cost another eta. Finitely many centers suffice by compactness, and all finite rational/integer formulas on D form a countable set. Rational clipping preserves the approximation. Empty K and constants cause no exception.

Examined dependencies: `def-metric-compactness`, `def-totally-bounded`, `lem-distance-to-set-is-lipschitz`, `thm-compact-implies-complete-and-totally-bounded`, `def-axiom-of-choice`, `thm-heine-cantor-metric`.

Contract source locators: {"references":[{"title":"van Gaans, Proposition 5.3, pp. 15–16; explicit countable-test replacement for its Alaoglu step","url":"https://pub.math.leidenuniv.nl/~gaansowvan/jancol1.pdf"}]}. Receipt written successfully; no unresolved item obligation.

### lem-probability-laws-on-a-compact-metric-space-have-weakly-convergent-subsequences — accept

Claim/conventions: Assuming AC, every sequence of Borel probabilities on a compact metric K has a weakly convergent subsequence.

Audit: Read the BW proof and RMK integration proof plus construction interfaces (outer content, Borel measurability and compact finiteness). Successive subsequences for countably dense tests diagonalize bounded real integrals; norm-one integral bounds extend Cauchy limits uniquely to every continuous f, preserving positivity, linearity and L(1)=1. Compact metric K is Hausdorff and locally compact, and C_c(K)=C(K); RMK supplies a Borel measure of mass one by testing 1. AC covers both dependent subsequence selections and the DC hypothesis hidden in the RMK cutoff construction (choose successors then recurse). The staircase proof telescopes its upper/lower errors to epsilon mu(K), as required. No uniqueness or Alaoglu is used.

Examined dependencies: `lem-countable-uniformly-dense-tests-on-a-compact-metric-space`, `def-weak-convergence-of-borel-probability-measures`, `thm-rmk-positive-functional-is-integration-against-its-representing-measure`, `thm-bolzano-weierstrass`, `def-axiom-of-choice`, `lem-rmk-functional-outer-content-is-well-defined`, `thm-rmk-open-sets-are-caratheodory-measurable`, `lem-rmk-compact-set-formula-and-local-finiteness`, `def-dependent-choice`, `thm-recursion`.

Contract source locators: {"references":[{"title":"van Gaans, Proposition 5.3 and §6; diagonal replacement for compact-case functional argument","url":"https://pub.math.leidenuniv.nl/~gaansowvan/jancol1.pdf"}]}. Receipt written successfully; no unresolved item obligation.

### thm-prokhorov-tightness-theorem-on-polish-spaces — accept

Claim/conventions: Assuming AC, a family of Borel probability measures on a Polish space is tight iff it is relatively sequentially compact for weak convergence.

Audit: Read both complete van Gaans §5 arguments pp.14–18 and current cube embedding, product-metric and complete-total-bounded proofs. Forward: countable compact images are closed in H, have limit masses >=1-1/m, and their union E has mass one. The trace-Borel theorem makes E intersect image(B) measurable, with countable additivity and mass one. For closed F its image is a closed trace Z intersect image(S); Z intersect E gives precisely the pullback limit mass. Reverse: failure of one uniform finite initial open cover selects a sequence whose weak subsequence contradicts continuity below at its probability limit. Dense balls with summable losses then yield a closed, complete, totally bounded common set; use intrinsic centers from finite intersections. AC covers all selections and CC compactness. The weighted cube has finite rational meshes plus a geometric tail and coordinatewise complete limits, so no unlisted Tychonoff or local compactness premise occurs.

Examined dependencies: `def-tight-family-of-probability-measures`, `def-relative-sequential-compactness-for-weak-convergence`, `thm-every-borel-probability-on-a-polish-space-is-tight`, `lem-probability-laws-on-a-compact-metric-space-have-weakly-convergent-subsequences`, `thm-portmanteau-theorem`, `thm-hilbert-cube-universal-for-separable-metrizable-spaces`, `thm-complete-and-totally-bounded-implies-compact`, `thm-finite-and-countable-subadditivity-of-measures`, `thm-continuity-from-below-for-measures`, `def-axiom-of-choice`, `lem-standard-complete-metric-on-a-countable-product`, `thm-borel-sigma-algebra-of-a-subspace-is-the-trace`, `def-countable-choice`.

Contract source locators: {"references":[{"title":"van Gaans, Theorem 5.2, Proposition 5.3, Lemma 5.4, pp. 14–18","url":"https://pub.math.leidenuniv.nl/~gaansowvan/jancol1.pdf"}]}. Receipt written successfully; no unresolved item obligation.

### cor-weakly-convergent-sequences-are-tight — accept

Claim/conventions: Assuming AC, {mu,mu_1,mu_2,...} is tight whenever mu_n=>mu on a Polish space.

Audit: Given any sequence in the displayed set, assign each value its least index in the enumeration (including the limit as index zero). A repeated index gives a constant subsequence; otherwise recursively choose increasing indices tending to infinity. The latter is a subsequence of the given weakly convergent laws and has the same limit. Thus the exact relative-sequential-compactness hypothesis of Prokhorov holds, with AC propagated.

Examined dependencies: `thm-prokhorov-tightness-theorem-on-polish-spaces`, `def-axiom-of-choice`.

Contract source locators: {"references":[{"title":"Durrett, §§2.4–2.5, pp. 76–87","url":"https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"}]}. Receipt written successfully; no unresolved item obligation.

### cor-tightness-extracts-a-weakly-convergent-subsequence — accept

Claim/conventions: Assuming AC, every tight sequence of Polish-space Borel probability laws has a subsequence converging weakly to a probability law on that same space.

Audit: This is precisely the forward implication of the adjudicated Prokhorov theorem applied to the range family of the supplied sequence. Its Borel probability limit lies on the original Polish space, since the compact-image mass-one construction excludes loss of mass. AC is explicitly propagated.

Examined dependencies: `thm-prokhorov-tightness-theorem-on-polish-spaces`, `def-axiom-of-choice`.

Contract source locators: {"references":[{"title":"Durrett, §§2.4–2.5, pp. 76–87","url":"https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"}]}. Receipt written successfully; no unresolved item obligation.

### def-levy-prokhorov-metric — accept

Claim/conventions: For probabilities mu,nu on a metric space, pi(mu,nu) is the infimum of epsilon>0 such that both mu(F)<=nu(F^[epsilon])+epsilon and nu(F)<=mu(F^[epsilon])+epsilon for every closed F, with F^[epsilon]={x:d(x,F)<=epsilon} and empty enlargement empty.

Audit: Closed enlargements of nonempty sets are measurable by the distance Lipschitz lemma; empty is explicitly handled. Every epsilon>=1 is admissible because probabilities are at most one, and zero is a lower bound, so the real infimum exists. The definition fixes closed tests and nonstrict enlargements; its equivalence with the source convention remains the next lemma obligation.

Examined dependencies: `def-probability-measure`, `def-metric-bounded-diameter`, `thm-infimum-property`, `lem-distance-to-set-is-lipschitz`.

Contract source locators: {"references":[{"title":"van Gaans, §4, pp. 9–10 (open-enlargement convention; equivalence must be proved locally)","url":"https://pub.math.leidenuniv.nl/~gaansowvan/jancol1.pdf"}]}. Receipt written successfully; no unresolved item obligation.

### lem-levy-prokhorov-distance-is-a-metric — accept

Claim/conventions: The closed-set closed-enlargement definition is a metric, bounded above by 1, on Borel probabilities of a metric space; it equals the infimum in the all-Borel open-enlargement convention.

Audit: Checked source Theorem 4.1 and the closed-neighborhood convention directly. Distance-to-F Lipschitz yields d(x,F)<=d(x,y)+a for y in F^[a]; infimizing gives nested enlargement inclusion even when infima are unattained. Admissible parameters are upward closed, enabling infimum triangle inequalities. Distance zero bounds each closed mass using rational slack and continuity above; Dynkin yields equality. For any Borel B, d(x,closure B)=d(x,B), so a closed-test inequality for closure B implies the Borel open-enlargement inequality with any larger parameter. The opposite convention immediately implies the closed one. No inner regularity or choice is needed.

Examined dependencies: `def-levy-prokhorov-metric`, `thm-continuity-from-above-for-measures`, `thm-dynkin-pi-lambda`, `lem-distance-to-set-is-lipschitz`.

Contract source locators: {"references":[{"title":"van Gaans, Theorem 4.1, pp. 9–10","url":"https://pub.math.leidenuniv.nl/~gaansowvan/jancol1.pdf"}]}. Receipt written successfully; no unresolved item obligation.

### lem-countable-boundary-null-partitions-of-a-separable-metric-space — accept

Claim/conventions: Assuming AC, for a separable metric S and Borel probability mu there are countable refining Borel partitions P_k with every nonempty atom of diameter<=2^-k and mu-null boundary. They generate Borel(S).

Audit: Read the complete null-sphere construction in van Gaans Lemma 4.3. At each center, spheres are pairwise disjoint and positive masses at threshold 1/m have finite multiplicity, so radii in (2^-k-3,2^-k-2) can avoid all positive spheres. Density guarantees coverage; disjointizing the ith ball subtracts only finitely many predecessors. Finite-level refinement has countably many atoms and boundary in a finite union of null spheres. For x in an open set, sufficiently small diameter forces its containing atom inside that set; all levels together give a countable generating class. AC covers dense enumeration/radius/representative choices.

Examined dependencies: `def-separable-space`, `def-metric-ball`, `thm-finite-and-countable-subadditivity-of-measures`, `def-axiom-of-choice`.

Contract source locators: {"references":[{"title":"van Gaans, Lemma 4.3, pp. 10–11; refining-partition consequence","url":"https://pub.math.leidenuniv.nl/~gaansowvan/jancol1.pdf"}]}. Receipt written successfully; no unresolved item obligation.

### thm-levy-prokhorov-metric-metrizes-weak-convergence — accept

Claim/conventions: Assuming AC, on a separable metric space pi(mu_n,mu)->0 iff mu_n=>mu; completeness is not required.

Audit: Read full Theorem 4.2 through both 2delta/3delta bounds. The preceding partition construction supplies the needed boundary-null balls, or its small atoms suffice identically. Finitely many unions have simultaneously convergent masses and cover all but delta of mu and 2delta of late mu_n. The union of pieces meeting B lies inside B^epsilon by the diameter bound, yielding both inequalities with 3delta<epsilon. Conversely upward admissibility bounds closed masses at each fixed enlargement, which then shrinks by continuity above. AC propagated; completeness is absent throughout.

Examined dependencies: `lem-levy-prokhorov-distance-is-a-metric`, `lem-countable-boundary-null-partitions-of-a-separable-metric-space`, `thm-portmanteau-theorem`, `thm-continuity-from-below-for-measures`, `def-axiom-of-choice`.

Contract source locators: {"references":[{"title":"van Gaans, Theorem 4.2 and Lemma 4.3, pp. 10–12","url":"https://pub.math.leidenuniv.nl/~gaansowvan/jancol1.pdf"}]}. Receipt written successfully; no unresolved item obligation.

### lem-interval-realization-from-refining-small-diameter-partitions — accept

Claim/conventions: Assuming AC, on a nonempty complete separable metric S, a sequence of countable refining partitions of vanishing atom diameters yields, for each Borel probability sigma, a measurable map T_sigma:(0,1)->S with law sigma by nested interval allocation.

Audit: Read all of source Theorem 5.29 pp.65–67 and the Lebesgue box/countable-null proofs. The partitions are the Borel partitions of the preceding dependency (otherwise sigma(A) would be undefined). The source incorrectly infers intersection of nested half-open atoms; the existing local strategy correctly uses representative limits instead. Countable child masses sum to the parent, so allocation covers each parent except endpoints; zero-mass atoms get empty intervals. Nested representatives are Cauchy and their limits exist by completeness. Off the Borel countable endpoint set, closed-F distance tests show limit measurability; the fixed endpoint value preserves it. Bounded Lipschitz integrals of representative maps differ from sigma integrals by at most the mesh times Lip(f); DCT and closed distance cutoffs identify the pushforward law without claiming membership in each atom. AC covers representatives and the CC Lebesgue construction.

Examined dependencies: `lem-countable-boundary-null-partitions-of-a-separable-metric-space`, `cor-weak-limits-are-unique`, `thm-dominated-convergence`, `def-complete-metric-space`, `def-axiom-of-choice`, `thm-lebesgue-measure-of-a-box-of-every-kind`, `prop-countable-subsets-of-rn-are-lebesgue-null`, `def-countable-choice`, `lem-distance-to-set-is-lipschitz`, `lem-law-of-a-random-element-is-a-probability-measure`.

Contract source locators: {"references":[{"title":"Advanced Probability, Theorem 5.29, pp. 65–67; representative-limit repair of the nonclosed-atom intersection step","url":"https://www.mat.univie.ac.at/~mathias/Advanced_Probability.pdf"}]}. Receipt written successfully; no unresolved item obligation.

### thm-skorokhod-representation-on-polish-spaces — accept

Claim/conventions: Assuming AC, if mu_n=>mu on a Polish space, then there are random elements Y_n,Y on ((0,1),B,Lebesgue) with these laws and Y_n->Y almost surely.

Audit: Checked the full source proof and its existing representative-limit correction in the preceding lemma. At a fixed finite child address, endpoints are finite sums of atom masses plus a parent endpoint; induction and Portmanteau therefore give endpoint convergence even with countably infinite partitions. A u interior to its positive limit interval eventually has that same address for mu_n. Exclude endpoints for every law and level, a countable Borel null union. Both limiting representatives lie in the closure of the shared atom, whose diameter has the same bound; then let the level tend to infinity. All laws are realized on Borel (0,1) with unit Lebesgue mass, and the complete compatible metric and AC are explicit.

Examined dependencies: `lem-countable-boundary-null-partitions-of-a-separable-metric-space`, `lem-interval-realization-from-refining-small-diameter-partitions`, `thm-portmanteau-theorem`, `def-axiom-of-choice`.

Contract source locators: {"references":[{"title":"Advanced Probability, Theorem 5.29, pp. 65–67, repaired as in the preceding lemma","url":"https://www.mat.univie.ac.at/~mathias/Advanced_Probability.pdf"}]}. Receipt written successfully; no unresolved item obligation.

### rem-skorokhod-representation-does-not-couple-the-original-variables — accept

Claim/conventions: The representation theorem constructs copies preserving each marginal law; it does not assert almost-sure convergence of the original variables or preserve their joint law.

Audit: The preceding theorem specifies only separate marginal laws and constructs a new common space. Its conclusion contains neither the original joint law nor an assertion about original sample paths. This is a logical clarification of that conclusion, requiring no further existence claim or axiom.

Examined dependencies: `thm-skorokhod-representation-on-polish-spaces`.

Contract source locators: {"references":[{"title":"Advanced Probability, Theorem 5.29","url":"https://www.mat.univie.ac.at/~mathias/Advanced_Probability.pdf"}]}. Receipt written successfully; no unresolved item obligation.

### lem-countable-compactly-supported-tests-determine-euclidean-weak-convergence — accept

Claim/conventions: For each finite d>=1 there is a countable uniformly dense subset of C_c(R^d) in its supremum norm, including compact cutoff functions increasing to 1. Convergence of probability integrals on this class to a probability mu implies weak convergence to mu.

Audit: Read the choice-free Euclidean box compactness proof and Heine-Cantor. Finite rational rectangular grids with rational vertex data form a countable family. Multilinear interpolation is a convex combination of vertex values and agrees across faces; zero boundary vertices make zero extension continuous. Put the support strictly inside an integer cube and use uniform continuity to bound mesh and rational errors. Product tent cutoffs chi_m are monotone to one; integral MCT gives masses approaching one. Convergence on the dense class first extends to C_c by probability norm bounds. A chosen cutoff then bounds late-n tails, and f times a larger cutoff approximates an arbitrary bounded continuous test with small integral errors. All approximation selections are finite; no norm separability of C_b is asserted.

Examined dependencies: `def-weak-convergence-of-borel-probability-measures`, `thm-portmanteau-theorem`, `thm-heine-borel-rn`, `thm-monotone-convergence-for-the-integral`, `thm-heine-cantor-metric`.

Contract source locators: {"references":[{"title":"van Gaans, compact-test approximation in Proposition 5.3 and tightness transfer; explicit Euclidean construction","url":"https://pub.math.leidenuniv.nl/~gaansowvan/jancol1.pdf"}]}. Receipt written successfully; no unresolved item obligation.

### thm-empirical-measures-of-iid-euclidean-samples-converge-weakly — accept

Claim/conventions: For IID R^d-valued X_i with law mu, the empirical probabilities n^-1 sum delta_(X_i) converge weakly to mu almost surely on one common event.

Audit: Each fixed compact continuous test is bounded, so its transformed IID sequence is integrable; the published independence proof and expectation change-of-variables supply the exact SLLN hypotheses and mean. Use the explicit event that its averages converge to that mean, avoiding choice of unspecified full-measure witnesses. Countable subadditivity makes the intersection event have probability one, and the determining lemma gives all bounded continuous tests there. Finite averages of Dirac probabilities are probabilities pointwise. The same-batch earlier SLLN dependency is retained; given IID samples require no product construction or AC.

Examined dependencies: `thm-kolmogorov-iid-l1-strong-law`, `lem-countable-compactly-supported-tests-determine-euclidean-weak-convergence`, `lem-measurable-functions-preserve-independence`, `thm-change-of-variables-for-expectation`, `thm-finite-and-countable-subadditivity-of-measures`, `prop-dirac-measure-is-a-probability-measure`.

Contract source locators: {"references":[{"title":"Durrett, strong law Theorem 2.5.10 plus countable-test argument","url":"https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"}]}. Receipt written successfully; no unresolved item obligation.

### lem-normal-density-has-total-mass-one — accept

Claim/conventions: Assume AC. The Borel function phi(x)=exp(-x^2/2)/sqrt(2*pi) is positive and has Lebesgue integral one on R.

Audit: Read the Gaussian integral and all three supplying arguments: finite positive tails, square exhaustion/product identity, and injective polar maps on enlarged half-annuli with content-zero seams. Their integral is improper Riemann. The local one-dimensional substitution t=x/sqrt(2) satisfies continuous integrand and constant integrable derivative on each compact interval; the existing compact Riemann/Lebesgue bridge requires CC, explicitly supplied by AC. Nonnegative truncations then increase to the full Borel density, and integral MCT yields sqrt(2)sqrt(pi). Positive square-root uniqueness identifies sqrt(2pi), so homogeneity gives mass one. No circular normal law or later geometry supplier is used.

Examined dependencies: `thm-gaussian-integral`, `thm-substitution`, `thm-continuous-implies-integrable`, `thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral`, `thm-monotone-convergence-for-the-integral`, `thm-exponential-definition-equivalence`, `thm-derivative-of-exponential`, `cor-continuous-functions-are-borel-measurable`, `thm-of-square-roots`, `prop-order-and-scalar-rules-for-the-nonnegative-integral`, `def-axiom-of-choice`, `def-countable-choice`, `lem-gaussian-integral-is-finite-and-positive`, `lem-gaussian-square-is-the-plane-gaussian-integral`, `lem-plane-gaussian-integral-in-polar-coordinates`.

Contract source locators: {"references":[{"title":"Durrett, Probability: Theory and Examples, Example 1.6.11, p.34; local normalization from the earlier published Gaussian integral","url":"https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"}]}. Receipt written successfully; no unresolved item obligation.

### def-standard-normal-and-normal-laws — accept

Claim/conventions: Assume AC for the preceding density normalization. On the Borel subsets E of R define gamma(E)=integral_E exp(-x^2/2)/sqrt(2*pi) dx. This is the standard normal probability law N(0,1). For m in R and sigma>=0 define N(m,sigma^2) as the law of x -> m+sigma*x on (R,B(R),gamma). In particular N(m,0)=delta_m.

Audit: The preceding normalization supplies a nonnegative Borel density with integral one; the indefinite-integral measure theorem gives countable additivity. For sigma>0 the affine map is Lipschitz, and for sigma=0 it is constant, so the published law lemma supplies a probability pushforward in both cases. Direct inverse images in the constant case give delta_m. AC from normalization is stated; neither moments nor characteristic functions are presumed.

Examined dependencies: `lem-normal-density-has-total-mass-one`, `thm-indefinite-integral-of-a-nonnegative-function-is-a-measure`, `def-probability-measure`, `def-law-or-distribution-of-a-random-element`, `lem-law-of-a-random-element-is-a-probability-measure`, `cor-continuous-functions-are-borel-measurable`, `def-dirac-measure`, `def-axiom-of-choice`.

Contract source locators: {"references":[{"title":"Durrett, Probability: Theory and Examples, Example 1.6.11, p.34; local normalization from the earlier published Gaussian integral","url":"https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"}]}. Receipt written successfully; no unresolved item obligation.

### ex-dirac-laws-converge-weakly-exactly-when-their-points-converge — accept

Claim/conventions: On a metric space, delta_(x_n)=>delta_x iff x_n->x.

Audit: Dirac laws are probabilities and integrate a bounded test by evaluation. If the laws converge, the bounded continuous test min(1,d(.,x)) has values tending to zero, forcing d(x_n,x)->0. Conversely convergence of points gives convergence of every continuous test by epsilon-delta continuity. No choice is used.

Examined dependencies: `def-weak-convergence-of-borel-probability-measures`, `thm-portmanteau-theorem`, `prop-dirac-measure-is-a-probability-measure`, `lem-distance-to-set-is-lipschitz`.

Contract source locators: {"references":[{"title":"van Gaans, §9, Dirac embedding","url":"https://pub.math.leidenuniv.nl/~gaansowvan/jancol1.pdf"}]}. Receipt written successfully; no unresolved item obligation.

### ex-uniform-laws-on-expanding-finite-grids-converge-to-uniform-zero-one — escalate

Claim/conventions: The uniform probability on {1/n,2/n,...,1} converges weakly to uniform measure on [0,1].

Audit: The uniform-continuity cell comparison is sound, but the declared box-measure supplier explicitly assumes CC and the example does not propagate it. Read that complete proof and the null-singleton clause; these are needed to define the Lebesgue probability and assign cell masses. A certain local repair was prepared: prepend Assume AC for the Lebesgue probability measure, declare AC and CC, and spell out AC restriction. The canonical record tool rejected it because a statement change invalidates the independent Step3a scope hash. Restored the unrecorded edit to preserve the independent review rather than overwrite it. Owner action: apply this assumption repair and refresh the invalidated Step3a gate, then send directly to final mechanical gate. This item will not be retried.

Examined dependencies: `def-weak-convergence-of-borel-probability-measures`, `thm-heine-cantor-r`, `thm-lebesgue-measure-of-a-box-of-every-kind`, `def-axiom-of-choice`, `def-countable-choice`.

Contract source locators: {"references":[{"title":"Durrett, §3.2.1, weak convergence examples; elementary Riemann sum specialization","url":"https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"}]}. Receipt written successfully; owner resolution required.

### ex-tightness-from-a-uniform-moment-bound — accept

Claim/conventions: For probability laws on R^d, sup_mu integral ||x||^p dmu<=C with p>0 implies tightness.

Audit: Markov applies to the Borel nonnegative function ||x||^p. The published definition includes 0^p=0 for p>0; away from zero continuity follows from exp(p log x), and the value at zero preserves Borel measurability. Strict increase of log/exp gives the threshold comparison (not an integer-power lemma). Choose R=((C+1)/epsilon)^(1/p) using the real-power laws, so C/R^p<epsilon for C>=0. Heine-Borel makes the closed ball compact. Empty families are vacuous; all other laws are supplied, so no AC/Lebesgue construction is involved.

Examined dependencies: `def-tight-family-of-probability-measures`, `cor-markov-inequality-for-random-variables`, `thm-heine-borel-rn`, `lem-metrics-on-rn`, `def-real-power`, `thm-real-power-laws`, `thm-real-power-continuity-and-derivatives`, `thm-exponential-is-strictly-increasing`, `thm-natural-logarithm-laws`.

Contract source locators: {"references":[{"title":"Durrett, Theorem 3.2.14, p. 123","url":"https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"}]}. Receipt written successfully; no unresolved item obligation.

### ex-weak-convergence-of-gaussian-laws-by-parameters — accept

Claim/conventions: Assume AC. If m_n->m and sigma_n>=0 tends to sigma>=0, then N(m_n,sigma_n^2)=>N(m,sigma^2), with N(m,0)=delta_m.

Audit: The in-pair normal definition supplies the standard probability space and every affine pushforward, including sigma=0. For each real x, the affine values converge; a fixed bounded continuous test therefore converges pointwise with the integrable bound ||f||. DCT and the expectation pushforward identity give weak convergence. No moment calculation or characteristic function is used, and AC from normalization is propagated.

Examined dependencies: `def-weak-convergence-of-borel-probability-measures`, `thm-dominated-convergence`, `thm-change-of-variables-for-expectation`, `def-standard-normal-and-normal-laws`, `def-axiom-of-choice`.

Contract source locators: {"references":[{"title":"Durrett, §3.2, bounded continuous test criterion","url":"https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"}]}. Receipt written successfully; no unresolved item obligation.

### ex-quantile-coupling-on-the-real-line — accept

Claim/conventions: Assume AC. If real laws mu_n=>mu have CDFs F_n,F, then on ((0,1),B,Lebesgue), U(u)=u and Q_n(U)->Q(U) almost surely with the prescribed laws, where Q(u)=inf{x:F(x)>=u}.

Audit: Read the source generalized-inverse argument (Advanced Probability 5.26–5.27) and current correspondence/Froda clauses. CDF tails make Q(u) finite for 0<u<1; right continuity gives Q(u)<=x iff u<=F(x), proving Borel measurability and its law. For a<Q(u), F(a)<u. Continuity of Q at u guarantees b arbitrarily close above Q(u) with F(b)>u; otherwise Q(v)>=b for all v>u would contradict that continuity. Avoid the countably many CDF atoms when choosing a,b. Portmanteau supplies F_n convergence there, trapping Q_n. Froda makes the exceptional Q jumps countable; the CC null-set theorem is covered by explicit AC. Froda itself is choice-free in the current library; that extra source-cost description does not affect the proof.

Examined dependencies: `thm-probability-law-and-distribution-function-correspondence`, `thm-portmanteau-theorem`, `thm-froda`, `thm-lebesgue-measure-of-a-box-of-every-kind`, `prop-countable-subsets-of-rn-are-lebesgue-null`, `def-countable-choice`, `def-axiom-of-choice`.

Contract source locators: {"references":[{"title":"Durrett, Theorem 3.2.8, pp. 118–119","url":"https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"}]}. Receipt written successfully; no unresolved item obligation.

### cex-pointwise-cdf-convergence-at-a-jump-is-not-required — accept

Claim/conventions: delta_(1/n)=>delta_0 although F_n(0)=0 and F(0)=1.

Audit: For n>=1, 1/n>0 gives delta_(1/n)((-infinity,0])=0, whereas delta_0 gives one. Every bounded continuous f satisfies f(1/n)->f(0), proving weak convergence directly. Thus the exceptional point is precisely a jump of the limiting CDF; no construction assumption is needed.

Examined dependencies: `def-weak-convergence-of-borel-probability-measures`, `def-cumulative-distribution-function-of-a-random-variable`, `prop-dirac-measure-is-a-probability-measure`.

Contract source locators: {"references":[{"title":"Durrett, §3.2.1, continuity-point convention","url":"https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"}]}. Receipt written successfully; no unresolved item obligation.

### cex-bounded-continuous-cannot-be-replaced-by-all-bounded-measurable-functions — accept

Claim/conventions: For delta_(1/n)=>delta_0, the integrals of the bounded Borel indicator of {0} are zero then one.

Audit: The singleton zero is closed and hence Borel, so its bounded indicator is admissible in the proposed stronger condition. Its Dirac integrals are zero at every 1/n and one at zero. Continuity of each genuine weak test still gives the displayed weak convergence; this is a direct choice-free witness.

Examined dependencies: `def-weak-convergence-of-borel-probability-measures`, `prop-dirac-measure-is-a-probability-measure`.

Contract source locators: {"references":[{"title":"van Gaans, Definition 3.1; Dirac test example","url":"https://pub.math.leidenuniv.nl/~gaansowvan/jancol1.pdf"}]}. Receipt written successfully; no unresolved item obligation.

### cex-a-nontight-sequence-with-no-probability-law-subsequence-limit — accept

Claim/conventions: delta_n on R is not tight and has no weakly convergent subsequence to a probability law on R.

Audit: Compact subsets of R are bounded by the published compact-subset theorem, so any such K misses large integer atoms and cannot uniformly retain mass greater than one half. In any hypothetical weak subsequence, the open-set Portmanteau bound gives mu((-m,m))<=0 for each positive integer m. Continuity below then forces mu(R)=0, contradicting a probability limit. This uses no AC-dependent Prokhorov corollary.

Examined dependencies: `def-tight-family-of-probability-measures`, `thm-portmanteau-theorem`, `thm-continuity-from-below-for-measures`, `thm-compact-subset-is-closed-and-bounded`.

Contract source locators: {"references":[{"title":"van Gaans, example after Theorem 5.2, p. 18; Dirac variant","url":"https://pub.math.leidenuniv.nl/~gaansowvan/jancol1.pdf"}]}. Receipt written successfully; no unresolved item obligation.

### cex-boundedness-of-first-moments-alone-does-not-give-uniform-integrability — accept

Claim/conventions: If P(X_n=n)=1/n and P(X_n=0)=1-1/n, then E|X_n|=1 and the laws are tight and converge weakly to delta_0, but the variables are not uniformly integrable.

Audit: Read the exact tail-integral UI definition. For any supplied variables with these two-point laws, E|X_n|=1 and for n>M the tail expectation equals one, so UI fails. Test-integral deviation is |f(n)-f(0)|/n<=2||f||/n. Markov gives uniformly small mass outside [-R,R], compact by Heine-Borel, establishing tightness choice-free. The conditional statement needs no simultaneous variable construction.

Examined dependencies: `def-uniformly-integrable-family`, `def-weak-convergence-of-borel-probability-measures`, `def-tight-family-of-probability-measures`, `cor-markov-inequality-for-random-variables`, `thm-heine-borel-rn`.

Contract source locators: {"references":[{"title":"Durrett, §3.2, weak convergence versus moment convergence; explicit two-point construction","url":"https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"}]}. Receipt written successfully; no unresolved item obligation.

### ex-empirical-laws-of-a-finite-valued-iid-sample — accept

Claim/conventions: For IID samples from a finite subset of R^d, the empirical laws converge weakly almost surely; equivalently all finitely many atom frequencies converge to their probabilities.

Audit: On the finite support each indicator frequency obeys the earlier choice-free IID SLLN; intersect the finitely many canonical convergence events. Every test integral is the finite weighted sum of those frequencies. Conversely for each distinct atom choose a small positive radius excluding all other support points and use a bounded continuous tent equal to one at that atom and zero at the others. Thus weak convergence is equivalent to frequency convergence on the common support, consistently with the empirical-law theorem.

Examined dependencies: `thm-empirical-measures-of-iid-euclidean-samples-converge-weakly`, `def-weak-convergence-of-borel-probability-measures`, `thm-kolmogorov-iid-l1-strong-law`.

Contract source locators: {"references":[{"title":"Durrett, §§2.4–2.5, pp. 76–87","url":"https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"}]}. Receipt written successfully; no unresolved item obligation.

### lem-hilbert-cube-has-a-bimeasurable-real-coding — repaired

Claim/conventions: There is an explicit measurable bijection c from [0,1]^N onto a Borel subset C of [0,1], with measurable inverse. Both domains have their Borel sigma-algebras.

Audit: Read Durrett 2.1.22 pp.53–54, including its warning that image/inverse details are omitted. Checked the explicit floor expansion: digits are 0/1, telescope with error <2^-k, and infinitely many zeros exactly resolve dyadic ambiguity (x/2 avoids endpoint one). Borel row conditions and continuous binary sums give the code-domain Borel set. Repaired the index seam: library N starts at zero, so gave a diagonal bijection j=1+(i+k-1)(i+k)/2+(k-1) for i>=0,k>=1 and wrote the ternary sum starting j=1. Then its maximum is one, first differing digit exceeds the tail by at least 3^-j, and finite ternary cylinders recover digits continuously; the image is the closed intersection of finite cylinder unions. Deinterleaved row restrictions are Borel, and coordinate inverse measurability implies cube measurability via its countable rational-cylinder basis. No choice is used; claim unchanged.

Examined dependencies: `def-borel-sigma-algebra`, `def-product-topology`, `thm-seven-generators-of-the-borel-sigma-algebra-on-r`, `thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable`, `thm-geometric-series`, `thm-rationals-countable`, `lem-rat-embeds-dense`, `lem-integer-part`, `def-integer-power`, `thm-n-cross-n-countable`.

Contract source locators: {"references":[{"title":"Durrett, Probability: Theory and Examples, 5th ed.","url":"https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"}]}. Receipt written successfully; no unresolved item obligation.

### thm-standard-borel-spaces-admit-bimeasurable-real-codings — accept

Claim/conventions: Assume AC. Every standard-Borel space (E,S) is measurably isomorphic to a Borel subset of [0,1]. The empty space is included.

Audit: Read the published Polish-presentation definition and current forward Alexandrov proof, now including its owner-repaired ambient-closure step 3.1. The complete presentation embeds homeomorphically in the metrized cube; its image is G_delta by that theorem, and thus Borel. Composing with the preceding code gives a Borel image because c inverse is measurable, with both restricted maps measurable by the trace theorem. AC supplies the inherited DC history selection by a successor choice function and recursion. Empty domain maps to empty. Only this forward G_delta clause is used; no Recorded catalogue or infinite-product probability theorem occurs.

Examined dependencies: `lem-hilbert-cube-has-a-bimeasurable-real-coding`, `def-standard-borel-space`, `thm-hilbert-cube-universal-for-separable-metrizable-spaces`, `thm-completely-metrizable-subspaces-of-metric-spaces-are-g-delta`, `def-axiom-of-choice`, `lem-standard-complete-metric-on-a-countable-product`, `def-dependent-choice`, `thm-recursion`, `thm-borel-sigma-algebra-of-a-subspace-is-the-trace`.

Contract source locators: {"references":[{"title":"Durrett, Probability: Theory and Examples, 5th ed.","url":"https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"}]}. Receipt written successfully; no unresolved item obligation.

### cor-standard-borel-spaces-have-countable-generating-and-measure-determining-algebras — accept

Claim/conventions: Under AC a standard-Borel space has a countable algebra that generates its sigma-algebra, separates points, and determines every finite measure: agreement of two finite measures on this algebra implies equality. In particular it determines probability measures.

Audit: Rational closed rays are complements of the published generating rational right rays. Their code pullbacks generate and separate distinct points. Each algebra on the first n rays has at most 2^(2^n) members, and AC supplies the CC hypothesis for the declared countable-union theorem; their union is a countable algebra containing E. Agreement includes total mass, so the equality family of two finite measures is a lambda-system; the algebra is a pi-system and Dynkin proves equality. Infinite-measure uniqueness is correctly excluded, and the empty-space algebra is harmless.

Examined dependencies: `thm-standard-borel-spaces-admit-bimeasurable-real-codings`, `thm-dynkin-pi-lambda`, `thm-seven-generators-of-the-borel-sigma-algebra-on-r`, `def-axiom-of-choice`, `thm-rationals-countable`, `thm-countable-union-of-countable`, `def-countable-choice`.

Contract source locators: {"references":[{"title":"Durrett, Probability: Theory and Examples, 5th ed.","url":"https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"}]}. Receipt written successfully; no unresolved item obligation.

### lem-borel-subspaces-admit-polish-presentations — accept

Claim/conventions: Under AC, each Borel subset B of a Polish space P admits a finer Polish topology with precisely its trace Borel sigma-algebra. Consequently it is standard Borel under the published Polish-presentation definition.

Audit: Read complete Marker Lemmas 2.22–2.23/Theorem 2.24 pp.20–21 and current open/G_delta complete-metric and Polish countability interfaces. Splitting an open set from its closed complement gives two completely metrizable second-countable components; bounded metrics at distance two make a complete sum with unchanged Borel sets. For countably many refinements include the original topology; the diagonal is closed in the complete product since the coordinate maps to original Hausdorff P are continuous. Its countable cylinder basis consists of old Borel sets, so all new opens are old Borel, while refinement gives the reverse inclusion. The common topology makes the union open, then splitting makes it clopen. Complement and union closure prove the full Borel refinement theorem; restricting to clopen B gives exactly its trace Borel algebra. AC covers countably many metric/base witnesses and CC separability. No Lusin-Souslin or perfect-set supplier is needed.

Examined dependencies: `def-standard-borel-space`, `def-polish-space`, `thm-g-delta-subspaces-of-complete-metric-spaces-are-completely-metrizable`, `lem-standard-complete-metric-on-a-countable-product`, `prop-polish-space-countability-conventions-agree`, `def-axiom-of-choice`, `lem-bounded-remetrisation`, `thm-complete-subspace-iff-closed`, `thm-borel-sigma-algebra-of-a-subspace-is-the-trace`, `def-countable-choice`.

Contract source locators: {"references":[{"title":"Rao and Srivastava, An Elementary Proof of the Borel Isomorphism Theorem","url":"https://math.iisc.ac.in/~manju/MartBM/RaoSrivastava_borelisomorphism.pdf"},{"title":"Marker, Descriptive Set Theory, Lemmas 2.22-2.23 and Theorem 2.24","url":"https://www.math.uic.edu/~marker/math512/dst.pdf"}]}. Receipt written successfully; no unresolved item obligation.

### ex-countable-discrete-spaces-are-standard-borel — accept

Claim/conventions: Every at most countable discrete measurable space, with its full power set, is standard Borel, including the empty space.

Audit: The 0/1 metric on the given at-most-countable set is complete because any Cauchy sequence is eventually constant at scale 1/2. The set itself is a countable dense subset, every subset is open, and identity is a Polish measurable presentation. Empty space is complete/separable vacuously. No selected enumeration or AC is necessary.

Examined dependencies: `def-standard-borel-space`, `def-polish-space`.

Contract source locators: {"references":[{"title":"Durrett, Probability: Theory and Examples, 5th ed.","url":"https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"}]}. Receipt written successfully; no unresolved item obligation.

### ex-euclidean-borel-spaces-are-standard-borel — accept

Claim/conventions: For each finite n, (R^n,B(R^n)) is standard Borel.

Audit: For n>=1, the published finite-coordinate maximum metric is equivalent to Euclidean distance. Each Cauchy coordinate has a unique real limit, so finitely assembling them gives completeness; finite products of the enumerated rationals are countable and dense by finite coordinate approximation. Thus identity is a Polish presentation with the usual Borel sets. For n=0 use the single empty tuple and its zero metric directly, avoiding the undefined empty maximum. No choice is needed.

Examined dependencies: `def-standard-borel-space`, `def-polish-space`, `thm-reals-cauchy-complete`, `thm-rationals-countable`, `lem-rat-embeds-dense`, `lem-metrics-on-rn`, `thm-product-of-countable`.

Contract source locators: {"references":[{"title":"Durrett, Probability: Theory and Examples, 5th ed.","url":"https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"}]}. Receipt written successfully; no unresolved item obligation.

### ex-borel-subspaces-of-polish-spaces-are-standard-borel — accept

Claim/conventions: Under AC, each Borel subset of a Polish space is standard Borel, even if its inherited topology is not Polish.

Audit: The accepted refinement lemma supplies precisely the Polish presentation required by the published definition, with AC propagated. In the rational example, any subset of Q is a countable union of closed singletons and hence trace Borel; its discrete complete topology has that same power-set Borel algebra. This makes no inherited completeness assertion.

Examined dependencies: `lem-borel-subspaces-admit-polish-presentations`, `def-axiom-of-choice`.

Contract source locators: {"references":[{"title":"Durrett, Probability: Theory and Examples, 5th ed.","url":"https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"}]}. Receipt written successfully; no unresolved item obligation.

### def-conditional-expectation-given-a-sigma-algebra — accept

Claim/conventions: On a probability space (Omega,F,P), for a real X in L1(P) and sub-sigma-algebra G, a conditional-expectation version is a G-measurable real integrable Y with integral_A Y = integral_A X for every A in G. No completeness of G is assumed.

Audit: Read L1 representative and expectation definitions. Real integrable X has finite event integrals, as does a proposed G-measurable real integrable Y. The defining identity is meaningful on every G event without completing G. This definition asserts a property of versions only; existence and quotient notation follow later.

Examined dependencies: `def-expectation-of-a-nonnegative-or-integrable-random-variable`, `def-l-one-of-a-measure`.

Contract source locators: {"references":[{"title":"Durrett, Probability: Theory and Examples, 5th ed.","url":"https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"}]}. Receipt written successfully; no unresolved item obligation.

### thm-conditional-expectation-exists-by-radon-nikodym — accept

Claim/conventions: Assume AC (used in the supplied RN construction). For every X and G as in the definition, a conditional-expectation version exists.

Audit: Read current RN and its finite-positive decomposition proof in full. Both now explicitly assume AC; the old batch note about missing published AC is stale. Restrict the finite positive indefinite integrals of X+ and X- to G; they vanish on P-null G sets, and Omega itself is a common finite exhaustion with variation equal to mass. RN supplies real integrable densities already; testing their negative level sets allows nonnegative versions, modified only on measurable G-null sets. Their real difference is integrable and has every required event integral. No G-completion, infinite subtraction, signed global patching, or conditional convergence theorem is used. AC precisely covers maximizing/Hahn selections in the supplying proof.

Examined dependencies: `def-conditional-expectation-given-a-sigma-algebra`, `thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality`, `thm-indefinite-integral-of-a-nonnegative-function-is-a-measure`, `thm-linearity-of-the-lebesgue-integral-on-l-one`, `thm-nonnegative-integral-zero-iff-zero-almost-everywhere`, `def-axiom-of-choice`, `thm-lebesgue-decomposition-exists-for-sigma-finite-signed-measures`, `cor-integral-over-a-null-set-vanishes`.

Contract source locators: {"references":[{"title":"Durrett, Probability: Theory and Examples, 5th ed.","url":"https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"}]}. Receipt written successfully; no unresolved item obligation.

### lem-conditional-expectation-is-unique-almost-surely — accept

Claim/conventions: Two conditional-expectation versions of the same integrable X given G agree P-a.s.

Audit: For two given versions the real difference D is G-measurable and L1 by the published closure/linearity clauses. Test {D>0} and {D<0}; the corresponding nonnegative positive/negative parts each have zero integral and hence vanish a.e. by the examined zero-integral criterion. The exceptional set is itself G-measurable. This uniqueness implication needs no AC or existence assertion.

Examined dependencies: `def-conditional-expectation-given-a-sigma-algebra`, `thm-linearity-of-the-lebesgue-integral-on-l-one`, `thm-nonnegative-integral-zero-iff-zero-almost-everywhere`, `prop-closure-properties-of-measurable-functions-used-by-the-integral`.

Contract source locators: {"references":[{"title":"Durrett, Probability: Theory and Examples, 5th ed.","url":"https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"}]}. Receipt written successfully; no unresolved item obligation.

### def-conditional-expectation-as-an-ae-class — accept

Claim/conventions: Under AC, with existence supplied by the chosen Radon-Nikodym proof: E[X|G] denotes the unique L1(Omega,G,P restricted to G) class of versions. Equality and inequalities between conditional expectations are a.s. assertions. The input can equally be an ambient L1 class, since a.e.-equal inputs have identical event integrals.

Audit: Existence under AC and choice-free uniqueness precede the notation. The class lives in the restricted G quotient, so every version must remain G-measurable. Published a.e. integral invariance gives identical event integrals for ambient a.e.-equal inputs, establishing input-class independence even when G is incomplete. No arbitrary pointwise modification is asserted to remain a version.

Examined dependencies: `def-conditional-expectation-given-a-sigma-algebra`, `thm-conditional-expectation-exists-by-radon-nikodym`, `lem-conditional-expectation-is-unique-almost-surely`, `def-l-p-space-as-a-quotient-by-null-functions`, `thm-the-lebesgue-integral-respects-almost-everywhere-equality`, `def-axiom-of-choice`.

Contract source locators: {"references":[{"title":"Durrett, Probability: Theory and Examples, 5th ed.","url":"https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"}]}. Receipt written successfully; no unresolved item obligation.

### thm-basic-algebra-and-order-properties-of-conditional-expectation — accept

Claim/conventions: Under AC, with existence supplied by the chosen Radon-Nikodym proof: For real integrable X,Y and scalars a,b, conditional expectation is linear, positive and order preserving, fixes constants, preserves expectation, and |E[X|G]|<=E[|X||G] a.s. Moreover X<Y a.s. implies E[X|G]<E[Y|G] a.s.

Audit: Linearity and constants satisfy the same finite event integrals and follow from uniqueness. For nonnegative X, testing a version on its negative set contradicts negativity unless that set is null; apply to differences for order and to |X|±X for the absolute bound. A=Omega gives expectation preservation. For strict order use W=Y-X>0 a.s. and a nonnegative version V; on the G-set {V=0}, the zero integral of W forces W=0 there a.s., hence that event has probability zero. This preserves strict a.s. order exactly and does not claim pointwise order for all versions. AC from existence is propagated.

Examined dependencies: `def-conditional-expectation-as-an-ae-class`, `lem-conditional-expectation-is-unique-almost-surely`, `thm-linearity-of-the-lebesgue-integral-on-l-one`, `thm-nonnegative-integral-zero-iff-zero-almost-everywhere`, `prop-closure-properties-of-measurable-functions-used-by-the-integral`, `def-axiom-of-choice`.

Contract source locators: {"references":[{"title":"Durrett, Probability: Theory and Examples, 5th ed.","url":"https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"}]}. Receipt written successfully; no unresolved item obligation.

### thm-taking-out-what-is-known — accept

Claim/conventions: Under AC, with existence supplied by the chosen Radon-Nikodym proof: For bounded real G-measurable Z and X in L1, E[ZX|G]=Z E[X|G] a.s. The identity extends to finite real G-measurable Z whenever ZX and Z E[X|G] are integrable; in fact X,ZX in L1 already imply the latter integrability.

Audit: Indicators reduce the event identity to intersections of G events; linearity gives simple factors and uniformly bounded simple approximation plus ordinary DCT gives bounded factors. For arbitrary finite Z with X,ZX integrable, let U be a nonnegative version of E[|X||G]. The bounded result gives E[min(|Z|,n)U]=E[min(|Z|,n)|X|]; integral MCT yields E[|Z|U]=E|ZX|<infinity. The absolute conditional bound thus proves Z E[X|G] integrable, and signed truncations satisfy DCT on both sides of every event identity. This proves the stated stronger observation without circular conditional MCT. AC is inherited explicitly.

Examined dependencies: `def-conditional-expectation-as-an-ae-class`, `thm-basic-algebra-and-order-properties-of-conditional-expectation`, `lem-conditional-expectation-is-unique-almost-surely`, `thm-increasing-simple-approximation-of-a-nonnegative-measurable-function`, `thm-monotone-convergence-for-the-integral`, `thm-dominated-convergence`, `thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable`, `def-axiom-of-choice`.

Contract source locators: {"references":[{"title":"Durrett, Probability: Theory and Examples, 5th ed.","url":"https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"}]}. Receipt written successfully; no unresolved item obligation.

### thm-tower-property-of-conditional-expectation — accept

Claim/conventions: Under AC, with existence supplied by the chosen Radon-Nikodym proof: If H subset G subset F, then E[E[X|G]|H]=E[X|H] and E[E[X|H]|G]=E[X|H] a.s.

Audit: Each H event is a G event, so applying the two defining identities successively gives the first formula; its candidate is H-measurable and integrable. An H-measurable version is also G-measurable and is its own conditional candidate, giving the second formula directly without the later known-variable lemma. Quotient independence and AC existence assumptions are preserved.

Examined dependencies: `def-conditional-expectation-as-an-ae-class`, `lem-conditional-expectation-is-unique-almost-surely`, `def-axiom-of-choice`.

Contract source locators: {"references":[{"title":"Durrett, Probability: Theory and Examples, 5th ed.","url":"https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"}]}. Receipt written successfully; no unresolved item obligation.

### lem-conditioning-a-known-variable-and-an-independent-variable — accept

Claim/conventions: Under AC, with existence supplied by the chosen Radon-Nikodym proof: A G-measurable integrable X satisfies E[X|G]=X. If P({X in B} intersect A)=P(X in B)P(A) for every Borel B and A in G, then E[X|G]=EX.

Audit: For a known integrable G-measurable variable its event integrals tautologically satisfy the definition. The independence hypothesis is an explicit rectangle identity. Applying it to simple nonnegative Borel functions of X, then canonical increasing simple approximants of positive/negative parts, gives E[X1_A]=EX P(A); both signed terms are finite by L1. Thus the constant EX is a version by uniqueness. No undeclared product measure or general factorization theorem is needed; AC is only the propagated existence assumption.

Examined dependencies: `def-conditional-expectation-as-an-ae-class`, `lem-conditional-expectation-is-unique-almost-surely`, `thm-increasing-simple-approximation-of-a-nonnegative-measurable-function`, `thm-monotone-convergence-for-the-integral`, `thm-linearity-of-the-lebesgue-integral-on-l-one`, `def-axiom-of-choice`.

Contract source locators: {"references":[{"title":"Durrett, Probability: Theory and Examples, 5th ed.","url":"https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"}]}. Receipt written successfully; no unresolved item obligation.

### def-conditional-expectation-for-nonnegative-variables — accept

Claim/conventions: Assume AC for selecting countably many versions. For measurable X:Omega->[0,infinity], define E[X|G] as the a.s. class of the increasing limit of versions of E[min(X,n)|G], after making them nonnegative and increasing off one G-null set. Values infinity are allowed. Well-definedness and arbitrary increasing truncations are justified next.

Audit: Examined the immediately following justified_by contract in full before accepting this definition. AC selects countably many finite truncation versions; their nonnegativity and order violations are G-measurable null sets, so setting every version to zero there makes a nonnegative increasing sequence everywhere without completing G. Sequential measurable limits give an extended nonnegative G-measurable limit. The following proof uses ordinary integral MCT for event identities and bounded-discrepancy localization for uniqueness, so its justification does not assume the definition is already well-defined. Infinity values and a.s. quotient conventions are explicit.

Examined dependencies: `def-conditional-expectation-as-an-ae-class`, `thm-basic-algebra-and-order-properties-of-conditional-expectation`, `thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable`, `def-axiom-of-choice`, `thm-conditional-monotone-convergence`.

Contract source locators: {"references":[{"title":"Durrett, Probability: Theory and Examples, 5th ed.","url":"https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"}]}. Receipt written successfully; no unresolved item obligation.

### thm-conditional-monotone-convergence — accept

Claim/conventions: Under AC, the extended conditional expectation is the unique a.s. class of nonnegative G-measurable Y with integral_A Y=integral_A X for every A in G. If 0<=X_n increases to X a.s., E[X_n|G] increases to E[X|G] a.s.; bounded integrable truncating approximations give the same class.

Audit: For the constructed truncations, ordinary integral MCT on each G event proves representation. If two nonnegative representatives differ, localize to {Y>=Z+1/k,Z<=m}; the Z integral there is at most m, so equal event integrals force finite Y integral too, legitimizing subtraction and the positive discrepancy bound. These sets cover {Y>Z}, including Y=infinity>Z; symmetry gives extended uniqueness. The same localization proves order from event-integral domination. Countably selected versions can then be made increasing on one G-null complement, MCT gives the limit identity and uniqueness identifies it. A.s. input changes preserve nonnegative event integrals by the declared null-set lemma. No infinity-minus-infinity operation occurs.

Examined dependencies: `def-conditional-expectation-for-nonnegative-variables`, `lem-conditional-expectation-is-unique-almost-surely`, `thm-basic-algebra-and-order-properties-of-conditional-expectation`, `thm-monotone-convergence-for-the-integral`, `prop-closure-properties-of-measurable-functions-used-by-the-integral`, `def-axiom-of-choice`, `cor-integral-over-a-null-set-vanishes`.

Contract source locators: {"references":[{"title":"Durrett, Probability: Theory and Examples, 5th ed.","url":"https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"}]}. Receipt written successfully; no unresolved item obligation.

### thm-conditional-fatou-and-dominated-convergence — accept

Claim/conventions: Under AC, for nonnegative X_n, E[liminf X_n|G]<=liminf E[X_n|G] a.s. For real X_n converging a.s. to X with |X_n|<=W in L1, E[X_n|G] converges to E[X|G] a.s. and in L1.

Audit: Tail infima increase to liminf, so conditional MCT plus countably simultaneous conditional order gives Fatou in the nonnegative extended sense. For a.s. convergence dominated by integrable W, the limit is integrable and W±X_n are nonnegative; their Fatou bounds trap the conditional liminf/limsup between the same finite E[X|G]. After discarding one countable G-null set, absolute conditional values are dominated by the integrable version E[W|G]. Ordinary DCT then yields L1 convergence as well. No kernel, uncountable exceptional set or unstated uniform integrability theorem is used.

Examined dependencies: `thm-conditional-monotone-convergence`, `thm-basic-algebra-and-order-properties-of-conditional-expectation`, `thm-dominated-convergence`, `def-conditional-expectation-as-an-ae-class`, `def-axiom-of-choice`.

Contract source locators: {"references":[{"title":"Durrett, Probability: Theory and Examples, 5th ed.","url":"https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"}]}. Receipt written successfully; no unresolved item obligation.

### lem-convex-functions-have-countable-supporting-line-representations — accept

Claim/conventions: A finite convex function phi on R is the supremum of its supporting lines at rational points, using the left derivative as the deterministic slope. The coefficients need not be rational.

Audit: Read supporting-line and one-sided-derivative proofs. On R every rational point is interior and its finite left derivative is a deterministic supporting slope. On any compact neighborhood of x, the derivative chain bounds all these slopes between two fixed outer slopes; secant bounds likewise give local continuity. A canonical rational sequence q->x then gives phi(q)+phi_-(q)(x-q)->phi(x), while every line lies below phi. Thus the supremum is exact. The class is countable through rational contact points, with unrestricted real coefficients, so irrational affine functions are covered and no choice is needed.

Examined dependencies: `thm-supporting-lines-for-convex-functions`, `thm-one-sided-derivatives-of-convex-functions`, `thm-rationals-countable`, `lem-rat-embeds-dense`.

Contract source locators: {"references":[{"title":"Durrett, Probability: Theory and Examples, 5th ed.","url":"https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"}]}. Receipt written successfully; no unresolved item obligation.

### thm-conditional-jensen-inequality — accept

Claim/conventions: Under AC, with existence supplied by the chosen Radon-Nikodym proof: If X and phi(X) are integrable and phi:R->R is finite convex, then phi(E[X|G])<=E[phi(X)|G] a.s.; the left side is integrable.

Audit: Each supporting affine function of X is integrable and bounded above by integrable phi(X); conditional linearity and order give its inequality. Outside the countable union of measurable null discrepancy sets, take the exact supporting-line supremum to obtain Jensen. Phi is continuous by the preceding local slope proof, so composition is measurable. A fixed affine minorant controls the negative part by an integrable affine absolute value, while the conditional upper bound controls the positive part by an integrable positive part. Thus the claimed left-side L1 property also follows. AC is propagated only from conditional existence.

Examined dependencies: `def-conditional-expectation-as-an-ae-class`, `thm-basic-algebra-and-order-properties-of-conditional-expectation`, `lem-convex-functions-have-countable-supporting-line-representations`, `def-axiom-of-choice`.

Contract source locators: {"references":[{"title":"Durrett, Probability: Theory and Examples, 5th ed.","url":"https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"}]}. Receipt written successfully; no unresolved item obligation.

### lem-absolute-real-powers-are-convex — accept

Claim/conventions: For every real p>=1, the function phi_p:R->R, phi_p(t)=|t|^p, is finite, Borel measurable, and convex.

Audit: Checked the published positive-base differentiation and second-derivative convexity proofs and explicit convention 0^p=0 for p>0. The second derivative is nonnegative on the positive half-line including p=1. For 0<u<=1, exp monotonicity gives u^p<=u, hence continuity at zero; take endpoint limits in the half-line convex inequality. Absolute-value triangle inequality, monotonicity and convexity then give convexity on R. Composition is continuous and therefore Borel. No derivative at zero or undefined 0^0 is used; choice-free.

Examined dependencies: `def-real-power`, `thm-real-power-continuity-and-derivatives`, `thm-natural-logarithm-laws`, `thm-exponential-is-strictly-increasing`, `cor-exponential-reciprocal-and-positivity`, `thm-algebra-of-derivatives`, `thm-monotonicity-from-the-derivative`, `cor-second-derivative-characterises-convexity`, `def-convex-concave-and-midpoint-convex-functions`, `lem-of-triangle-inequality`, `lem-of-abs-value`, `thm-algebra-of-continuous-functions`, `thm-squeeze-for-function-limits`, `thm-continuous-preimages-of-borel-sets-are-borel`, `def-measurable-function-between-measurable-spaces`.

Contract source locators: {"references":[{"title":"Durrett, Probability: Theory and Examples, 5th ed.","url":"https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"},{"title":"van der Vaart, Martingales, Diffusions and Financial Mathematics","url":"https://diamhomes.ewi.tudelft.nl/~avandervaart/books/stochint.pdf"}]}. Receipt written successfully; no unresolved item obligation.

### cor-conditional-lp-contraction — accept

Claim/conventions: Under AC, with existence supplied by the chosen Radon-Nikodym proof: For 1<=p<=infinity, conditional expectation maps real Lp(P) into Lp(P restricted to G) with norm at most one.

Audit: On probability spaces the checked finite-measure inclusion puts each Lp input in L1. For 1<p<infinity, the preceding absolute-power lemma meets every hypothesis of conditional Jensen; expectation preservation yields the pth-power norm inequality. For p=1 use conditional modulus and expectation. For p=infinity the least essential bound is an a.s. bound, so conditional order bounds both signs by the same constant. The earlier conditional-class definition and uniqueness make the map independent of input representatives into the restricted measurable quotient. AC is explicitly inherited from existence.

Examined dependencies: `thm-conditional-jensen-inequality`, `lem-absolute-real-powers-are-convex`, `thm-basic-algebra-and-order-properties-of-conditional-expectation`, `def-l-p-space-as-a-quotient-by-null-functions`, `thm-finite-measure-l-r-includes-into-l-p-for-p-less-r`, `def-axiom-of-choice`, `prop-essential-supremum-is-attained-as-the-least-essential-bound`.

Contract source locators: {"references":[{"title":"Durrett, Probability: Theory and Examples, 5th ed.","url":"https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"}]}. Receipt written successfully; no unresolved item obligation.

### thm-conditional-expectation-is-the-l2-orthogonal-projection — accept

Claim/conventions: Under AC, L2(G) embeds isometrically as a closed subspace of real L2(F); E[X|G] is the orthogonal projection of X onto it. The minimizing prediction is unique as an a.s. class.

Audit: Read the complete current Riesz-Fischer proof: it applies to the restricted, possibly incomplete, measure space, with measurable null exceptional sets and countable representative choice covered by AC. The quotient inclusion is linear and isometric; completeness makes its image closed. L2 contraction supplies U. For bounded G tests, taking-out and expectation give E[(X-U)Z]=0; clipped versions of any Z in L2(G) converge in L2 by DCT, and the checked Cauchy-Schwarz inequality passes the pairing to the limit. Expanding ||X-Z||_2^2=||X-U||_2^2+||U-Z||_2^2 proves minimization and uniqueness as a class. No completeness of G or abstract projection existence is assumed.

Examined dependencies: `cor-conditional-lp-contraction`, `lem-conditioning-a-known-variable-and-an-independent-variable`, `thm-taking-out-what-is-known`, `cor-cauchy-schwarz-inequality-for-l-two`, `thm-riesz-fischer-completeness-of-l-p`, `def-axiom-of-choice`, `thm-dominated-convergence`.

Contract source locators: {"references":[{"title":"Durrett, Probability: Theory and Examples, 5th ed.","url":"https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"}]}. Receipt written successfully; no unresolved item obligation.

### def-conditional-variance — accept

Claim/conventions: Under AC, with existence supplied by the chosen Radon-Nikodym proof: For real X in L2, define Var(X|G)=E[(X-E[X|G])^2|G], as an a.s. class. Its integrability, nonnegativity, representative independence and second-moment formula are justified by the following lemma.

Audit: Read the following well-definedness lemma before approving this definition. L2 contraction gives a finite G-measurable L2 representative U; (X-U)^2<=2X^2+2U^2 is integrable. Changing X or U on measurable null sets changes the square only a.e., and conditional uniqueness makes its class independent. The justified_by lemma expands the square using the checked unbounded taking-out clause and Cauchy-Schwarz for XU, with no circular variance theorem. AC is propagated.

Examined dependencies: `def-conditional-expectation-as-an-ae-class`, `cor-conditional-lp-contraction`, `thm-taking-out-what-is-known`, `def-axiom-of-choice`, `lem-conditional-variance-is-well-defined-and-has-the-second-moment-formula`, `cor-cauchy-schwarz-inequality-for-l-two`, `thm-the-lebesgue-integral-respects-almost-everywhere-equality`.

Contract source locators: {"references":[{"title":"Durrett, Probability: Theory and Examples, 5th ed.","url":"https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"}]}. Receipt written successfully; no unresolved item obligation.

### lem-conditional-variance-is-well-defined-and-has-the-second-moment-formula — accept

Claim/conventions: Under AC, with existence supplied by the chosen Radon-Nikodym proof: For real X in L2, conditional variance is an integrable nonnegative class independent of the representatives, and equals E[X^2|G]-(E[X|G])^2 a.s.

Audit: With U=E[X|G], L2 contraction and the displayed elementary square bound make the defining input L1; ordinary Cauchy-Schwarz makes XU L1. Measurable null-set changes preserve each event integral and hence the conditional class. Taking-out applies to the finite unbounded factor U because X and XU are L1; it gives E[XU|G]=U^2. Known-variable conditioning applies to U^2 in L1. Linearity yields E[X^2|G]-U^2, and conditional positivity gives nonnegativity. Every assertion of the preceding definition is therefore justified without using the decomposition corollary.

Examined dependencies: `def-conditional-variance`, `thm-taking-out-what-is-known`, `cor-conditional-lp-contraction`, `thm-basic-algebra-and-order-properties-of-conditional-expectation`, `thm-the-lebesgue-integral-respects-almost-everywhere-equality`, `def-axiom-of-choice`, `cor-cauchy-schwarz-inequality-for-l-two`, `lem-conditioning-a-known-variable-and-an-independent-variable`.

Contract source locators: {"references":[{"title":"Durrett, Probability: Theory and Examples, 5th ed.","url":"https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"}]}. Receipt written successfully; no unresolved item obligation.

### cor-conditional-variance-decomposition — accept

Claim/conventions: Under AC, with existence supplied by the chosen Radon-Nikodym proof: For real X in L2, Var(X)=E[Var(X|G)]+Var(E[X|G]).

Audit: The preceding lemma supplies an integrable conditional variance and E[X^2|G]-U^2 with U in L2. Expectation preservation gives E Var(X|G)=EX^2-EU^2 and EU=EX. Expanding the published centered-square definition gives Var(U)=EU^2-(EX)^2 and Var(X)=EX^2-(EX)^2, hence the stated identity; all products and subtractions are finite. AC is inherited explicitly.

Examined dependencies: `def-conditional-variance`, `thm-basic-algebra-and-order-properties-of-conditional-expectation`, `def-moments-variance-and-covariance`, `lem-conditional-variance-is-well-defined-and-has-the-second-moment-formula`, `def-axiom-of-choice`.

Contract source locators: {"references":[{"title":"Durrett, Probability: Theory and Examples, 5th ed.","url":"https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"}]}. Receipt written successfully; no unresolved item obligation.

### thm-uniform-integrability-of-conditional-expectations-of-one-variable — accept

Claim/conventions: Under AC, with existence supplied by the chosen Radon-Nikodym proof: For fixed real X in L1, all the classes E[X|G], with G ranging over sub-sigma-algebras of F, form a uniformly integrable family.

Audit: Read the published tail-integral UI definition and full absolute-continuity proof. For any fixed G and any measurable version V, A={|V|>K} lies in G, P(A)<=E|X|/K by the integral bound, and integral_A|V|<=integral_A E[|X||G]=integral_A|X|. Given epsilon, the single delta from absolute continuity for |X| and then K>E|X|/delta work for every G. Tail integrals are invariant under a.e. changes, so this defines UI of the whole set of classes without simultaneous uncountable representative choice. Existence AC is declared.

Examined dependencies: `def-conditional-expectation-as-an-ae-class`, `thm-basic-algebra-and-order-properties-of-conditional-expectation`, `thm-taking-out-what-is-known`, `def-uniformly-integrable-family`, `thm-absolute-continuity-of-the-integral`, `def-axiom-of-choice`.

Contract source locators: {"references":[{"title":"van der Vaart, Martingales, Diffusions and Financial Mathematics","url":"https://diamhomes.ewi.tudelft.nl/~avandervaart/books/stochint.pdf"}]}. Receipt written successfully; no unresolved item obligation.

### rem-conditional-expectation-is-a-class-not-a-canonical-pointwise-function — accept

Claim/conventions: Under AC, with existence supplied by the chosen Radon-Nikodym proof: Identities on this page concern a.s. classes. A finite or countable collection of identities can be enforced off one measurable null set; this statement gives no simultaneous pointwise representative for an uncountable collection. Later kernel results impose their own hypotheses.

Audit: Each identity between supplied measurable representatives has a measurable null discrepancy set. Countable subadditivity makes the finite or countable union null; AC covers selection if representatives of a countable class family are needed. No arbitrary subset of a null set is declared G-measurable, and no uncountable union is asserted null. The remark correctly limits the earlier a.s. identities and makes no unsupported kernel existence claim.

Examined dependencies: `def-conditional-expectation-as-an-ae-class`, `def-axiom-of-choice`, `thm-finite-and-countable-subadditivity-of-measures`.

Contract source locators: {"references":[{"title":"Durrett, Probability: Theory and Examples, 5th ed.","url":"https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"}]}. Receipt written successfully; no unresolved item obligation.

### cor-conditional-cauchy-schwarz-inequality — accept

Claim/conventions: Under AC, with existence supplied by the chosen Radon-Nikodym proof: For real X,Y in L2, |E[XY|G]|^2<=E[X^2|G]E[Y^2|G] a.s.

Audit: Ordinary Cauchy-Schwarz gives XY in L1, so every coefficient A=E[X^2|G], B=E[XY|G], C=E[Y^2|G] has a finite representative. Positivity and linearity for each rational t give A+2tB+t^2C>=0 off a countable union of measurable null sets; rational density and polynomial continuity extend to all real t there. If C=0, varying t forces B=0. If C>0, evaluate at -B/C to get B^2<=AC. Thus the degenerate case is covered and AC is propagated from existence.

Examined dependencies: `def-conditional-expectation-as-an-ae-class`, `thm-basic-algebra-and-order-properties-of-conditional-expectation`, `cor-cauchy-schwarz-inequality-for-l-two`, `def-axiom-of-choice`, `lem-rat-embeds-dense`, `thm-rationals-countable`, `thm-finite-and-countable-subadditivity-of-measures`.

Contract source locators: {"references":[{"title":"Durrett, Probability: Theory and Examples, 5th ed.","url":"https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"}]}. Receipt written successfully; no unresolved item obligation.

### ex-conditioning-on-a-finite-partition — accept

Claim/conventions: Under AC, with existence supplied by the chosen Radon-Nikodym proof: For a finite G-generating measurable partition (A_i), a version is sum_i 1_Ai integral_Ai X / P(A_i), with value zero on zero-mass cells.

Audit: For the real L1 input from the conditional-expectation context, each positive-mass-cell average is finite; set zero on zero-mass cells, avoiding 0/0. The step function is G-measurable, and summing |integral_Ai X| bounds its L1 norm by E|X|. A finite partition generates exactly its unions of cells, so finite additivity proves every defining event identity, including null cells. Uniqueness identifies the class; X=1_B gives the usual conditional probability quotient. AC stated for the existing class interface.

Examined dependencies: `def-conditional-expectation-as-an-ae-class`, `lem-conditional-expectation-is-unique-almost-surely`, `def-axiom-of-choice`, `thm-the-lebesgue-integral-respects-almost-everywhere-equality`, `thm-linearity-of-the-lebesgue-integral-on-l-one`.

Contract source locators: {"references":[{"title":"Durrett, Probability: Theory and Examples, 5th ed.","url":"https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"}]}. Receipt written successfully; no unresolved item obligation.

### ex-conditioning-on-trivial-and-full-sigma-algebras — accept

Claim/conventions: Under AC, with existence supplied by the chosen Radon-Nikodym proof: For integrable X, E[X|{empty,Omega}]=EX and E[X|F]=X as classes.

Audit: The constant EX is measurable for the trivial sigma-algebra and has correct integrals on its only two events. Equivalently X is independent of that sigma-algebra under the exact rectangle condition of the supplied lemma. For G=F the integrable X is already G-measurable, so the known-variable clause applies. Conclusions are classes with the declared existence assumption.

Examined dependencies: `lem-conditioning-a-known-variable-and-an-independent-variable`, `def-axiom-of-choice`.

Contract source locators: {"references":[{"title":"Durrett, Probability: Theory and Examples, 5th ed.","url":"https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"}]}. Receipt written successfully; no unresolved item obligation.

### ex-conditioning-an-independent-sum-on-one-summand — accept

Claim/conventions: Under AC, with existence supplied by the chosen Radon-Nikodym proof: If real integrable X,Y are independent, E[X+Y|sigma(X)]=X+EY a.s.

Audit: Preimages X^{-1}(B) of Borel sets form a sigma-algebra and therefore are exactly sigma(X). The assumed Borel rectangle independence thus supplies the independent-variable lemma for Y and every event of sigma(X), without a hidden pi-lambda argument. X is sigma(X)-measurable, so its conditional class is X; Y has conditional class EY. Integrability of the sum and linearity give the formula. AC inherited as stated.

Examined dependencies: `lem-conditioning-a-known-variable-and-an-independent-variable`, `thm-basic-algebra-and-order-properties-of-conditional-expectation`, `def-axiom-of-choice`.

Contract source locators: {"references":[{"title":"Durrett, Probability: Theory and Examples, 5th ed.","url":"https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"}]}. Receipt written successfully; no unresolved item obligation.

### ex-conditional-expectation-given-a-discrete-random-variable — accept

Claim/conventions: Under AC, with existence supplied by the chosen Radon-Nikodym proof: For countably valued Y and integrable X, E[X|sigma(Y)] has value integral_{Y=y} X/P(Y=y) on every positive-mass fibre, and zero on the remaining fibres.

Audit: For the countably valued real random variable convention, all fibres and all their unions are in sigma(Y) (countable subsets of R are Borel); these unions exhaust sigma(Y). The displayed zero convention avoids division by zero, and countable subadditivity makes the union of null fibres null. MCT over finite collections bounds the absolute integral of the piecewise averages by E|X|. The fully read countable-additivity proposition applies to signed L1 event integrals, so summing fibre identities proves every test-event identity. Uniqueness gives the class, with the stated AC assumption.

Examined dependencies: `def-conditional-expectation-as-an-ae-class`, `lem-conditional-expectation-is-unique-almost-surely`, `def-axiom-of-choice`, `prop-indefinite-integral-of-an-integrable-function-is-countably-additive`, `thm-finite-and-countable-subadditivity-of-measures`, `thm-monotone-convergence-for-the-integral`.

Contract source locators: {"references":[{"title":"Durrett, Probability: Theory and Examples, 5th ed.","url":"https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"}]}. Receipt written successfully; no unresolved item obligation.

### ex-l2-best-prediction-by-conditional-expectation — accept

Claim/conventions: Under AC, for X in real L2 and any Z in L2(G), E[(X-Z)^2]=E[(X-E[X|G])^2]+E[(E[X|G]-Z)^2].

Audit: The just-audited projection theorem applies to real X in L2 and Z in the restricted L2(G) image. U-Z lies in that closed linear subspace and X-U is orthogonal to it, so the mixed term in the square expansion integrates to zero. All terms are integrable by L2 contraction and Cauchy-Schwarz within the supplier proof. The extra error term is nonnegative and vanishes exactly for equality of a.s. classes, as claimed. AC including representative choice is declared.

Examined dependencies: `thm-conditional-expectation-is-the-l2-orthogonal-projection`, `def-axiom-of-choice`.

Contract source locators: {"references":[{"title":"Durrett, Probability: Theory and Examples, 5th ed.","url":"https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"}]}. Receipt written successfully; no unresolved item obligation.

### ex-law-of-total-variance — accept

Claim/conventions: Under AC, with existence supplied by the chosen Radon-Nikodym proof: Let Omega={0,1}^2 have its full sigma-algebra and P({(u,v)})=1/4. Set U(u,v)=u, V(u,v)=v, X=U+V and G=sigma(U). Then Var(X)=1/2, E[Var(X|G)]=1/4, Var(E[X|G])=1/4.

Audit: Read the finite full-power-set probability supplier: the four weights are nonnegative and total one, and any disjoint event family reduces to at most four nonempty terms, verifying countable additivity. Direct rectangles give independence of U and V. Conditional linearity and the known/independent clauses give U+1/2; the residual square (V-1/2)^2 is the constant 1/4. The four-point law of X has masses 1/4,1/2,1/4 at 0,1,2, so EX=1 and Var(X)=1/2. U+1/2 has variance 1/4, verifying all three numbers and the decomposition. AC is inherited from the conditional-class interface.

Examined dependencies: `cor-conditional-variance-decomposition`, `lem-conditioning-a-known-variable-and-an-independent-variable`, `thm-basic-algebra-and-order-properties-of-conditional-expectation`, `def-axiom-of-choice`, `thm-finite-probability-spaces-are-exactly-finite-full-power-set-probability-spaces`.

Contract source locators: {"references":[{"title":"Durrett, Probability: Theory and Examples, 5th ed.","url":"https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"}]}. Receipt written successfully; no unresolved item obligation.

## Dispatch step3b-a-3ea5646e8989a632 — continuation

Current exact-hash check: six assigned Step-3a decisions are sufficient and current; 123/127 item decisions were closed at entry. The expanding-grid example remains escalated to the owner and is not retried. Three final conditional-expectation counterexamples require receipts. Existing current decisions are retained.

### cex-a-version-can-fail-a-pointwise-identity-on-a-null-set — accept

Claim: under the stated AC class interface, a version of E[0|F] need not vanish at every point. On the full power set of {a,b}, define P(A)=1 if b belongs to A and 0 otherwise. This is countably additive: a disjoint family has at most one member containing b. The indicator of {a} is measurable, has absolute integral zero, and has zero integral on each of the four events. It is therefore a version, yet equals one at a. No completeness or simultaneous choice is used; AC is inherited from the existing class interface.

Read exact contracts in batch-4.pages.json and complete published finite-space definition/theorem and AC definition. Examined IDs: def-conditional-expectation-as-an-ae-class; def-conditional-expectation-given-a-sigma-algebra; def-axiom-of-choice; def-finite-probability-space-and-event; thm-finite-probability-spaces-are-exactly-finite-full-power-set-probability-spaces. Source: contract Durrett https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf, conditional expectation section 4.1; no external argument needed for this complete elementary construction. Receipt succeeded; contract unchanged. Next: strict pointwise inequality counterexample.

### cex-conditioning-does-not-preserve-strict-inequalities — accept

Read the current pointwise-only claim and full strategy in batch-4.pages.json, plus the class definition, defining event-integral condition and basic-properties strict a.s. clause. With the preceding explicit countably additive measure P concentrated at b, X=0<Y=1 everywhere. The measurable integrable functions 2 indicator({a}) and 1 have respectively the same event integrals as X and Y, so are valid versions; at a their values are 2 and 1. On b the strict order holds. Thus the claimed failure is exactly pointwise and preserves the A-page strict a.s. theorem. AC is stated through the class existence interface; this finite construction adds no choice.

Examined IDs: def-conditional-expectation-as-an-ae-class; def-conditional-expectation-given-a-sigma-algebra; thm-basic-algebra-and-order-properties-of-conditional-expectation; def-axiom-of-choice; def-finite-probability-space-and-event; thm-finite-probability-spaces-are-exactly-finite-full-power-set-probability-spaces. Source locator: Durrett section 4.1, https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf (contract); complete elementary argument checked directly without external theorem retrieval. Receipt succeeded; no repair or unresolved obligation. Next: unbounded-factor integrability counterexample.

### cex-taking-out-an-unbounded-factor-needs-integrability — accept

Read the exact claim/strategy and all declared suppliers. With S=sum(n>=1)2^(-3n)=1/7, each atom (n,s) has positive weight 7*2^(-3n-1). The Dirac and countable weighted-sum proofs establish a measure on the full power set; total mass is 2*(7/2)*(1/7)=1. Finite-support truncations and MCT give E|X|=7 sum 2^(-2n)=7/3 and EZ=7 sum 2^(-n)=7. Every event of sigma(n) is a union of paired fibres, since all subsets of the countable coordinate range are Borel. On each fibre the integral of X cancels; the published signed indefinite-integral countable-additivity proposition applies because X is L1, so the integral vanishes on every such event. The zero function is therefore a conditional version. Z is finite and sigma(n)-measurable. For ZX=s*2^(3n), each sign contributes 7/2 on each corresponding atom; MCT makes each part integral infinite. Thus ZX is outside signed L1, while Z E[X|G]=0 is integrable. This refutes precisely the proposed omission of product integrability, with both individual factors L1. AC is inherited explicitly; no undefined subtraction is performed.

Examined dependency IDs are recorded completely in the receipt, including implicit MCT, signed indefinite-integral additivity, the defining version condition and nonnegative double-series Tonelli. Local source paths: items/{def-integer-power,thm-geometric-series,def-dirac-measure,prop-dirac-measure-is-a-probability-measure,def-probability-measure,def-nonnegative-weighted-sum-of-measures,thm-nonnegative-weighted-sums-of-measures,thm-tonelli-for-nonnegative-double-series,thm-monotone-convergence-for-the-integral,prop-indefinite-integral-of-an-integrable-function-is-countably-additive}.md; conditional contracts in batch-4.pages.json. Contract reference: Durrett section 4.1, https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf. This is a complete direct discrete argument; no unfamiliar external result was needed. Receipt succeeded, contract unchanged. All three remaining item audits are now recorded; proceed to mechanical gates.

## Final group report — dispatch 3ea5646e8989a632

**Disposition:** 127 assigned items; 121 accepted, 5 locally repaired in earlier receipts, 1 unresolved escalation. This dispatch recorded the three previously missing counterexample acceptances individually and changed no scaffold contract. All six Step-3a scope receipts remain current. Hash checks retained all 123 initially closed decisions; no accepted item was mathematically adjudicated again, and no escalation/owner decision was overwritten.

**Owner action remains:** `ex-uniform-laws-on-expanding-finite-grids-converge-to-uniform-zero-one` lacks propagation of the choice assumption used by its Lebesgue-box supplier. Preserve the existing escalation: the owner must apply the stated AC/CC assumption repair and reconcile its changed Step-3a scope, then route the repair directly to the final mechanical gate. This reviewer did not retry the item.

**Scope and dependencies:** refreshed group-a scope decisions; 12 records became pending because their context hashes changed. Reconciled those with current contracts, coverage and plan-probability-track.md sections 0A.4, PT-6, PT-7, PT-10 and PT-11. They now stand with specific route/destination evidence; the other 22 current decisions were retained. No owner rulings were invented. Consumer inputs for batches 1/4 are empty; batch 3 retains its seven current page/item edges to batch 1, including same-group dependencies. The three newly reviewed counterexamples use only their own pair and published suppliers, so no new cross-batch edge was introduced. Ran the canonical ledger refresh with --require-reviewed successfully.

**Actual mechanical checks:**

| Check | Result |
|---|---|
| Assigned Step-3 exact hashes | Six scope decisions closed; 126/127 items closed; only the preserved expanding-grid escalation remains |
| Run-wide Step-3 final check | Fails while group-a escalation and other groups' open decisions remain; no whole-run certification claimed |
| manifest-integrity --run phase-2-catchup-24 | PASS: 48 owed pages, 48 manifested, no scope drift |
| manifest-deps, all run manifests | PASS: 735 items, 0 normalized, 0 errors |
| content-policy --manifest-only, all run manifests | PASS: 735 scoped items, 0 errors, 0 warnings |
| validate-plan research/plan-spec.json | PASS, exit 0; reading order and populated item lists consistent; 644 planned pages still lack item lists; redundant-prerequisite advisories remain |
| coverage-checklist --require-destination | PASS batches 1/3/4: 91/44/94 harvested results, respectively; 0 errors/warnings |
| scope-decisions check --group a | PASS after reconciliation: 34 current declines, 0 errors |
| frontier-dependency-ledger refresh --require-reviewed | PASS, refreshed and deduplicated |
| source-fetch-check, assigned coverages | PASS: 14/14 source records fetch-verified and resolved, 0 documented drops |
| Live url-sweep, assigned coverages | BLOCKED by shell DNS: 0/11 live, each fails curl(6) Could not resolve host; not evidence that these publications are unavailable |
| source-backing against that live probe | FAIL: 70 mapped authored results lose openable backing because every probe failed DNS |
| source-backing against existing run liveness receipt | PASS: 70 mapped authored results across three files remain backed; this is recorded evidence, not a fresh live-network pass |
| depcheck --quiet | FAIL: four published-unaudited metadata errors, 473 warnings |
| extcheck | PASS, exit 0; 55 existing items rest on recorded material and are marked; warnings retained |

The four repository-wide missing-audit-stamp errors are `cex-separately-continuous-not-jointly-continuous`, `def-metric-continuity`, `lem-boundary-label-of-a-van-kampen-diagram-is-null-in-the-presented-group`, and `lem-curvature-count-for-reduced-c-prime-one-sixth-diagrams`. They are not modifications authorized to this dispatch. Their metadata errors are not new mathematical findings; no published proof was edited. The finite-probability equivalence supplier is already listed in the canonical published-consumer ledger (classification index near line 29861); the two newly audited finite examples explicitly establish countable additivity directly, rather than rely on the terse step 1.1 inference in that published proof. No new published defect entry is needed for an already indexed item.

The live run was verified by the autopilot status command and git HEAD `390dfea54`; it is running Step 3, not a historical RESUME run. Current network artifacts/logs are temporary under /tmp/step3b-a-* and /tmp/phase-2-catchup-24-step3b-a-url-liveness.json; the meaningful results and blockers are preserved here. Existing run liveness evidence was not replaced by sandbox DNS failures. The final gate must rerun from a network-capable environment and after the owner resolves the grid example and repository metadata blockers. All authorized item adjudications are recorded; group a is **not cleared for publication**.
