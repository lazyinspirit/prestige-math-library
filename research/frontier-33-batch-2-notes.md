# frontier-33 batch 2 — scaffold evidence and obligations

Only this batch manifest, coverage, and notes are writable. No items, pages, plan structure, workflow state, or other batch was changed. Scaffold only; authoring belongs to step 5.

Status: policy-fix-1-b2 repaired both reported missing dependencies; all four required checks pass. Full batch acceptance remains limited by the five pre-existing c0/RMK populated-plan errors and historical shell source-stamp failures. The latest repair checkpoints and validator results are at the end of this file.

## Dependency repair authority and current boundary

The original FA-7 design invokes FA-8 weak-star/bipolar support, creating a later-page seam. This policy-repair dispatch explicitly authorizes genuinely needed supporting definitions/results inside batch 2. Accordingly, def-weak-star-topology, lem-finite-evaluations-separate-from-a-dual-subspace and thm-bipolar-closure-for-linear-subspaces now precede thm-kernel-range-annihilator-identities. The full operator statement and its bipolar proof route are retained. No page order, requires edge, plan structure or later-page artifact was changed. FA-8 can reuse these canonical IDs when its scaffold is authored; it must not mint duplicates. The historical blocker/validator records below remain as evidence of the earlier state and are superseded by the current repair checkpoints.

## Conventions, reuse, and limits

Work over K=R or C, use K-linear functionals, and the bilinear evaluation pairing f(x), with NO complex conjugation in the Banach transpose. J_X is the evaluation embedding. Preannihilators live in X, not X**. Subspace/quotient formulas are canonical maps on cosets, independent of extensions or representatives. Restriction is contractive and has norm one only when M is nonzero; the design's unqualified norm-one wording has a zero-space exception. Closed-range equivalences carry DC and the inherited HB dependencies. HB is not relabelled AC; sequence-phase arguments make finitely many explicit choices.

Do not mint def-continuous-dual-space or def-duality-pairing: published def-dual-space-of-a-normed-space already defines both. Dual completeness is a scalar-target specialization of thm-bounded-operator-space-is-banach, recalled in a non-load-bearing orientation remark. Published def-continuous-annihilator-of-a-subspace owns M-perp; the new definition adds the preannihilator, not a second definition of M-perp. The real ell-one dual theorem already follows verbatim from cor-ell-p-duality-by-counting-measure; reuse it and add only the complex endpoint extension. The Lp dictionary retains the published theorem's REAL, sigma-finite, 1<=p<infinity hypotheses; no arbitrary-measure or complex Lp representation is inferred. RMK is already published for complex C_0 on LCH spaces and can support compact-space evaluation examples.

## Source acquisition

BS: original_url https://people.math.ethz.ch/~salamon/PREPRINTS/funcana.pdf failed in web fetch (403); the ?download=1 variant and ~salamond/PREPRINTS/funcana.pdf also failed. Recovered complete same-title 452-page 2017 manuscript at https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf (university-hosted). Its contents and theorem numbering agree with the design's specified edition. Read the actual recovered text, not the design harvest. The coverage file preserves original_url and indexes this copy's printed pagination; PDF page index = printed page + 7.

BR: https://math.jhu.edu/~sire/brezis.pdf is a complete 603-page university-hosted copy. Read §1.3 pp.8–10; §2.5 pp.40–42; §2.6 pp.43–46; §2.7 pp.46–48, stopping before Comments on Chapter 2. PDF page index = printed page + 10 for pp.8–9, then +9 from printed page 10 (the PDF joins the printed page boundary there). Coverage locators primarily use printed page and named result.

Web full-document fetch and actual passages were available. Shell curl cannot resolve either host (exit 6), so this is an environment DNS restriction distinct from a dead citation. No fetch_verified digest or byte count is fabricated. Mechanical stamp/liveness gates remain to be run and their exact results recorded below.

## Item checkpoints

Each entry below records a completed scaffold item, not an authored proof. Source locators refer to the verified BS/BR documents above. Dependency IDs were read on disk for the load-bearing earlier functional-analysis and measure-theory seams. The former outstanding FA-8 edges are now discharged by the local support recorded in the repair checkpoints below.

### rem-continuous-dual-completeness-and-pairing

Claim/conventions: Recall X*=B(X,K), a Banach space even when X is incomplete, and <f,x>=f(x). This is a bilinear pairing, not an inner product.

Dependencies: def-dual-space-of-a-normed-space, thm-bounded-operator-space-is-banach.

Source: BS §§1.3.1–1.3.2, Theorem 1.31 and (1.22), pp.31–32. Strategy/rationale: Definition or orientation only; no proof claimed.

Validation: pending batch gates. Next action: continue scaffold/coverage; retain global obligations above.

### def-annihilator-and-preannihilator

Claim/conventions: For M subset X, M-perp={f in X*: f|M=0}, agreeing with the published subspace definition after taking span M. For N subset X*, preannihilator N={x in X: f(x)=0 for every f in N}.

Dependencies: def-dual-space-of-a-normed-space, def-continuous-annihilator-of-a-subspace.

Source: BR §1.3, notation p.9. Strategy/rationale: Definition or orientation only; no proof claimed.

Validation: pending batch gates. Next action: continue scaffold/coverage; retain global obligations above.

### lem-annihilators-are-closed-subspaces

Claim/conventions: Both annihilators in X* and preannihilators in X are norm-closed linear subspaces, for arbitrary subsets M,N.

Dependencies: def-annihilator-and-preannihilator, def-dual-space-of-a-normed-space.

Source: BR §1.3, notation before Proposition 1.9, p.9. Strategy/rationale: Intersect kernels of evaluation maps; |f(x)|<=||f||||x|| gives continuity in either variable.

Validation: pending batch gates. Next action: continue scaffold/coverage; retain global obligations above.

### thm-dual-of-a-quotient-is-the-annihilator

Claim/conventions: For normed X and closed M, q-pullback maps (X/M)* onto M-perp as a linear isometry.

Dependencies: def-dual-space-of-a-normed-space, def-annihilator-and-preannihilator, thm-universal-property-of-the-normed-quotient.

Source: BS Corollary 2.57(ii), pp.84–85. Strategy/rationale: Factor a functional vanishing on M through cosets; prove representative independence before applying the quotient universal property and its norm equality. No HB needed in this direction.

Validation: pending batch gates. Next action: continue scaffold/coverage; retain global obligations above.

### thm-dual-of-a-closed-subspace-is-a-dual-quotient

Claim/conventions: For closed M in normed X, restriction induces an onto linear isometry X*/M-perp -> M*. Restriction is contractive, norm one if M is nonzero and zero if M=0.

Dependencies: def-annihilator-and-preannihilator, lem-annihilators-are-closed-subspaces, thm-universal-property-of-the-normed-quotient, thm-norm-preserving-extension-from-any-subspace.

Source: BS Corollary 2.57(i), pp.84–85. Strategy/rationale: Restrictions of representatives agree; kernel is M-perp. HB supplies a norm-preserving extension, minimizing norm in each coset. Thus surjectivity and isometry are separate verified claims.

Validation: pending batch gates. Next action: continue scaffold/coverage; retain global obligations above.

### cor-distance-to-annihilator-is-restriction-norm

Claim/conventions: For closed M in X and f in X*, dist(f,M-perp)=||f|M||.

Dependencies: thm-dual-of-a-closed-subspace-is-a-dual-quotient.

Source: BS Corollary 2.58, (2.33), p.85. Strategy/rationale: Unpack the quotient norm in the restriction isometry.

Validation: pending batch gates. Next action: continue scaffold/coverage; retain global obligations above.

### def-transpose-of-a-bounded-operator

Claim/conventions: For bounded K-linear T:X->Y define T*:Y*->X* by T*g=g composed with T; this is the Banach adjoint, distinguished from the future Hilbert adjoint.

Dependencies: def-dual-space-of-a-normed-space, lem-composition-operator-norm-inequality.

Source: BS §4.1.1, Definition 4.1, p.172. Strategy/rationale: Definition or orientation only; no proof claimed.

Validation: pending batch gates. Next action: continue scaffold/coverage; retain global obligations above.

### lem-transpose-is-bounded-and-has-the-same-norm

Claim/conventions: T* is bounded K-linear and ||T*||=||T|| for normed X,Y.

Dependencies: def-transpose-of-a-bounded-operator, thm-dual-norms-every-vector.

Source: BS Lemma 4.2, p.172. Strategy/rationale: The composition estimate gives <=. Norm each nonzero Tx with a unit functional for the reverse inequality, including zero operators separately.

Validation: pending batch gates. Next action: continue scaffold/coverage; retain global obligations above.

### lem-transpose-reverses-composition

Claim/conventions: For T:X->Y and S:Y->Z, (ST)*=T*S*; identity transposes to identity. Transposition is K-linear on operators.

Dependencies: def-transpose-of-a-bounded-operator.

Source: BS Lemma 4.3(i), p.173. Strategy/rationale: Evaluate every map on g and x; associativity and scalar linearity give the identities.

Validation: pending batch gates. Next action: continue scaffold/coverage; retain global obligations above.

### lem-elementary-kernel-range-annihilator-identities

Claim/conventions: For bounded T:X->Y between normed spaces: (ran T)-perp=ker T*, preannihilator(ran T*)=ker T, and closure(ran T)=preannihilator(ker T*), with norm closure in Y.

Dependencies: def-transpose-of-a-bounded-operator, def-annihilator-and-preannihilator, cor-annihilator-detects-closure, thm-dual-norms-every-vector.

Source: BS Theorem 4.8(i), pp.174; Corollary 2.55, p.84. Strategy/rationale: The first identity is composition; for the second norming separates Tx from zero. Apply the published primal annihilator-closure theorem for the third. This independent lemma carries all norm-topology uses; no FA-8 result is invoked.

Validation: pending batch gates. Next action: continue scaffold/coverage; retain global obligations above.

### cor-dense-range-iff-transpose-is-injective

Claim/conventions: For bounded T between normed spaces, closure(ran T)=Y iff ker T*={0}.

Dependencies: lem-elementary-kernel-range-annihilator-identities.

Source: BS Theorem 4.8(ii), p.174. Strategy/rationale: Use the third elementary identity and the zero annihilator criterion.

Validation: pending batch gates. Next action: continue scaffold/coverage; retain global obligations above.

### def-canonical-map-into-the-bidual

Claim/conventions: For normed X, define J_X:X->X** by (J_X x)(f)=f(x). Boundedness of each evaluation follows from the dual-norm inequality.

Dependencies: def-dual-space-of-a-normed-space.

Source: BS §2.4.1, (2.39), p.88. Strategy/rationale: Definition or orientation only; no proof claimed.

Validation: pending batch gates. Next action: continue scaffold/coverage; retain global obligations above.

### thm-canonical-bidual-map-is-an-isometry

Claim/conventions: J_X is K-linear and ||J_X x||=||x|| for every x in any normed space X.

Dependencies: def-canonical-map-into-the-bidual, thm-dual-norms-every-vector.

Source: BS Lemma 2.68, p.88. Strategy/rationale: Use |f(x)|<=||f||||x|| and a norming functional for x nonzero; handle x=0 separately.

Validation: pending batch gates. Next action: continue scaffold/coverage; retain global obligations above.

### cor-distance-to-subspace-by-annihilating-functionals

Claim/conventions: For closed M in normed X, dist(x,M)=sup{|f(x)|: f in M-perp, ||f||<=1}.

Dependencies: thm-dual-of-a-quotient-is-the-annihilator, thm-canonical-bidual-map-is-an-isometry.

Source: BS Corollary 2.69, p.88. Strategy/rationale: Apply bidual norm equality in X/M and identify its dual by Q. The unit-ball supremum covers M=X without an empty supremum convention.

Validation: pending batch gates. Next action: continue scaffold/coverage; retain global obligations above.

### lem-canonical-map-is-natural

Claim/conventions: For bounded T:X->Y, T** J_X=J_Y T.

Dependencies: def-canonical-map-into-the-bidual, def-transpose-of-a-bounded-operator, lem-transpose-is-bounded-and-has-the-same-norm.

Source: BS Lemma 4.3(ii), p.173. Strategy/rationale: Evaluate both sides on arbitrary g in Y*.

Validation: pending batch gates. Next action: continue scaffold/coverage; retain global obligations above.

### def-reflexive-banach-space

Claim/conventions: A Banach space X is reflexive when J_X is onto. An unspecified isomorphism X ~= X** does not define reflexivity.

Dependencies: def-canonical-map-into-the-bidual, thm-canonical-bidual-map-is-an-isometry, def-banach-space.

Source: BS Definition 2.70, p.89. Strategy/rationale: Definition or orientation only; no proof claimed.

Validation: pending batch gates. Next action: continue scaffold/coverage; retain global obligations above.

### lem-transpose-range-membership-by-domination

Claim/conventions: For bounded T:X->Y and f in X*, f=T*g for some g in Y* iff |f(x)|<=C||Tx|| for all x and some C>=0. In the latter case one can choose ||g||<=C.

Dependencies: def-transpose-of-a-bounded-operator, thm-norm-preserving-extension-from-any-subspace.

Source: BS Lemma 4.15, pp.175–176. Strategy/rationale: Define h(Tx)=f(x); the bound proves independence of x and boundedness on ran T, even if that range is not closed. HB extends h to Y.

Validation: pending batch gates. Next action: continue scaffold/coverage; retain global obligations above.

### lem-closed-range-iff-quotient-estimate

Claim/conventions: Assume DC. For bounded T between Banach spaces, ran T is closed iff dist(x,ker T)<=C||Tx|| for all x and some C>0.

Dependencies: def-transpose-of-a-bounded-operator, thm-quotient-of-banach-by-closed-subspace-is-banach, thm-universal-property-of-the-normed-quotient, lem-closed-subspace-of-a-banach-space-is-banach, thm-bounded-inverse-theorem, thm-bounded-below-iff-injective-with-closed-range.

Source: BS Theorem 4.16(ii)–(iii), pp.178–179. Strategy/rationale: The induced map X/ker T -> ran T is bounded and bijective; if the range is closed use bounded inverse. Conversely its map into Y is bounded below from a Banach domain, giving closed range. The kernel is closed by continuity.

Validation: pending batch gates. Next action: continue scaffold/coverage; retain global obligations above.

### lem-transpose-lower-bound-gives-image-ball-density

Claim/conventions: If ||g||<=C||T*g|| for all g in Y*, C>0, then B_Y(0,1/C) is contained in the norm closure of T(B_X(0,1)). X,Y need only be normed.

Dependencies: def-transpose-of-a-bounded-operator, lem-transpose-is-bounded-and-has-the-same-norm, thm-strong-separation-of-closed-and-compact-convex-sets.

Source: BS Theorem 4.16 proof (vii) => (i), (4.10)–(4.11), p.180. Strategy/rationale: Separate a point outside the closed convex balanced image-ball closure. Its support supremum is ||T*g||; use real parts over C and phase rotation. A point of norm <1/C contradicts ||g||<=C||T*g||. This lemma does not use closed-range equivalence.

Validation: pending batch gates. Next action: continue scaffold/coverage; retain global obligations above.

### thm-surjective-iff-transpose-is-bounded-below

Claim/conventions: Assume DC. For bounded T:X->Y between Banach spaces, T is onto iff some C>0 satisfies ||g||<=C||T*g|| for all g in Y*.

Dependencies: lem-transpose-lower-bound-gives-image-ball-density, lem-open-mapping-successive-approximation, cor-open-mapping-quantitative-form.

Source: BS Corollary 4.17(i), p.181, with Theorem 4.16 p.180. Strategy/rationale: Forward: the quantitative open-mapping ball inclusion gives the lower bound by taking suprema. Reverse: BALL plus the published successive approximation lemma gives an actual ball of radius 1/(2C) in T(B_X), hence onto. Do not derive this reverse direction from the closed-range theorem being proved next.

Validation: pending batch gates. Next action: continue scaffold/coverage; retain global obligations above.

### thm-banach-closed-range-theorem

Claim/conventions: Assume DC. For bounded T:X->Y between Banach spaces the ranges of T and T* are norm closed simultaneously; each is equivalent to dist(x,ker T)<=C||Tx||. When closed, ran T=preannihilator(ker T*) and ran T*=(ker T)-perp.

Dependencies: lem-closed-range-iff-quotient-estimate, lem-transpose-range-membership-by-domination, thm-surjective-iff-transpose-is-bounded-below, lem-elementary-kernel-range-annihilator-identities, thm-dual-of-a-closed-subspace-is-a-dual-quotient, cor-distance-to-annihilator-is-restriction-norm, lem-annihilators-are-closed-subspaces, lem-transpose-is-bounded-and-has-the-same-norm, thm-bounded-operator-space-is-banach, lem-closed-subspace-of-a-banach-space-is-banach.

Source: BS Theorem 4.16, pp.178–181. Strategy/rationale: Forward: EST bounds every f annihilating ker T by C||f||||Tx||; FAC yields the exact transpose range, which is norm closed. Reverse: apply EST to T* (both duals Banach), set Y0=closure ran T and S:T:X->Y0. Restriction Y*->Y0* is onto with kernel ker T*. Its quotient norm is the distance to ker T*, so the estimate on T* gives ||h||<=C||S*h||. SUR makes S onto Y0. Finish primal identity with E. No reflexivity or weak-star closure is assumed.

Validation: pending batch gates. Next action: continue scaffold/coverage; retain global obligations above.

### thm-bounded-below-iff-transpose-is-surjective

Claim/conventions: Assume DC. For bounded T between Banach spaces, T is bounded below iff T* is onto.

Dependencies: thm-banach-closed-range-theorem, lem-elementary-kernel-range-annihilator-identities, lem-transpose-range-membership-by-domination, thm-bounded-below-iff-injective-with-closed-range.

Source: BS Corollary 4.17(ii), p.181. Strategy/rationale: Bounded below gives injective closed range, so the closed-range identity makes T* onto. Conversely onto implies ker T=0 by E and ran T closed by CR; apply the published bounded-below criterion.

Validation: pending batch gates. Next action: continue scaffold/coverage; retain global obligations above.

### cor-transpose-preserves-invertibility

Claim/conventions: Assume DC. T between Banach spaces is bijective iff T* is bijective, and then (T*)^{-1}=(T^{-1})*. A surjective isometry T has a surjective isometry T*, and conversely.

Dependencies: thm-surjective-iff-transpose-is-bounded-below, thm-bounded-below-iff-transpose-is-surjective, lem-transpose-reverses-composition, lem-transpose-is-bounded-and-has-the-same-norm, thm-bounded-inverse-theorem.

Source: BS Corollary 4.18, p.182. Strategy/rationale: Combine injectivity/surjectivity criteria. Transpose the two inverse identities; compare the operator and inverse norms. BS uses isometry here to mean a bijective isometry, as its proof explicitly assumes. Never extend this to arbitrary isometric embeddings.

Validation: pending batch gates. Next action: continue scaffold/coverage; retain global obligations above.

### lem-finite-truncations-are-dense-in-c0-and-ell-one

Claim/conventions: For K=R or C and P_N retaining coordinates 0,...,N, ||x-P_N x||_infinity ->0 for x in c0 and ||a-P_N a||_1 ->0 for a in ell-one. Here ell-one(K) consists of sequences with sum |a_n|<infinity.

Dependencies: def-c-zero-and-ell-infinity, rem-ell-p-is-l-p-of-counting-measure.

Source: BS Examples 1.35–1.36, pp.36–37. Strategy/rationale: The errors are respectively sup_{n>N}|x_n| and sum_{n>N}|a_n|. Define the complex sequence model explicitly, with coordinatewise operations and the absolute-sum norm; scalar series convergence justifies the norm and pairing.

Validation: pending batch gates. Next action: continue scaffold/coverage; retain global obligations above.

### thm-dual-of-c0-is-ell-one

Claim/conventions: Over K=R or C, a maps to [x -> sum_{n>=0} a_n x_n] is a linear isometric bijection ell-one(K)->c0(K)*.

Dependencies: def-dual-space-of-a-normed-space, def-c-zero-and-ell-infinity, lem-finite-truncations-are-dense-in-c0-and-ell-one.

Source: BS Example 1.36, pp.36–37. Strategy/rationale: For f define a_n=f(e_n). For each finite prefix use x_n=conj(a_n)/|a_n| when nonzero, else 0, to bound its absolute sum by ||f||. Absolute convergence yields a functional; finite-truncation density recovers f. The same finite test vectors prove norm equality. No conjugate is inserted into the pairing.

Validation: pending batch gates. Next action: continue scaffold/coverage; retain global obligations above.

### thm-complex-dual-of-ell-one-is-ell-infinity

Claim/conventions: For complex sequence spaces, b -> [a -> sum b_n a_n] is a linear isometric bijection ell-infinity(C)->ell-one(C)*. The real counterpart is the already-published counting-measure corollary.

Dependencies: def-dual-space-of-a-normed-space, def-c-zero-and-ell-infinity, lem-finite-truncations-are-dense-in-c0-and-ell-one.

Source: BS Example 1.35, p.36 (scalar-field extension of its coefficient proof). Strategy/rationale: For f, coefficients b_n=f(e_n) are bounded by ||f||. Absolute convergence defines the pairing and truncation proves representation. Testing e_n yields the supremum lower bound, with no requirement that a maximum exists.

Validation: pending batch gates. Next action: continue scaffold/coverage; retain global obligations above.

### rem-lp-duality-in-abstract-language

Claim/conventions: For the real spaces and sigma-finite measure in the published theorem, 1<=p<infinity and conjugate q give a linear isometric identification (Lp)* ~= Lq. In particular the real ell-one dual is ell-infinity. No p=infinity surjectivity, complex extension, or arbitrary-measure generalization is claimed.

Dependencies: def-dual-space-of-a-normed-space, thm-sigma-finite-duality-for-bounded-functionals-on-l-p, cor-ell-p-duality-by-counting-measure.

Source: BS Example 1.33, p.33 and Example 1.35, p.36. Strategy/rationale: Definition or orientation only; no proof claimed.

Validation: pending batch gates. Next action: continue scaffold/coverage; retain global obligations above.

### thm-kernel-range-annihilator-identities

Claim/conventions: For bounded T:X->Y between normed spaces, (ran T)-perp=ker T* and (ker T)-perp=weak-star closure(ran T*) in sigma(X*,X). Norm closure is not substituted.

Dependencies: lem-elementary-kernel-range-annihilator-identities, def-weak-star-topology, thm-bipolar-closure-for-linear-subspaces.

Source: BS Theorem 4.8 and Corollary 3.26, pp.174 and 130. Strategy/rationale: Apply the FA-8 bipolar theorem to N=ran T* and the elementary preannihilator identity. BLOCKED: the design requires these later dependencies; preserve for drift adjudication rather than falsely presenting this as a valid earlier-page edge.

Validation: pending batch gates. Next action: continue scaffold/coverage; retain global obligations above.

### ex-coordinate-functionals-on-classical-sequence-spaces

Claim/conventions: For each n>=0, x -> x_n has norm one on c0 and ell-one over R or C, represented by e_n in their identified duals.

Dependencies: thm-dual-of-c0-is-ell-one, thm-complex-dual-of-ell-one-is-ell-infinity, cor-ell-p-duality-by-counting-measure.

Source: BS Examples 1.35–1.36, pp.36–37. Strategy/rationale: The coordinate bound gives <=1, and e_n attains one.

Validation: pending batch gates. Next action: continue scaffold/coverage; retain global obligations above.

### ex-adjoint-of-the-right-and-left-shifts

Claim/conventions: On c0 define R(x)=(0,x_0,x_1,...) and L(x)=(x_1,x_2,...). On the ell-one dual, R*=L and L*=R. The same formulas hold for ell-one and its ell-infinity dual.

Dependencies: def-transpose-of-a-bounded-operator, thm-dual-of-c0-is-ell-one, thm-complex-dual-of-ell-one-is-ell-infinity, cor-ell-p-duality-by-counting-measure.

Source: BS Definition 4.1 and Examples 1.35–1.36, pp.172,36–37. Strategy/rationale: Check each shift preserves the stated sequence space and is bounded; reindex the absolutely convergent pairing. Define shifts explicitly, with indexing from zero.

Validation: pending batch gates. Next action: continue scaffold/coverage; retain global obligations above.

### ex-evaluation-functionals-and-point-masses

Claim/conventions: For nonempty compact Hausdorff K and t in K, evaluation delta_t on C(K;C) has norm one and is represented by the regular point mass at t in RMK. For a homeomorphism phi, pullback sends delta_t under its transpose to delta_phi(t).

Dependencies: def-transpose-of-a-bounded-operator, thm-bounded-c-zero-functionals-are-regular-complex-measure-integrals.

Source: BS Example 1.37 and Example 4.4, pp.37,173. Strategy/rationale: The constant function one norms evaluation. Check Dirac regularity directly and integral f d delta_t=f(t), then invoke the published RMK uniqueness. Evaluate pullback at t.

Validation: pending batch gates. Next action: continue scaffold/coverage; retain global obligations above.

### ex-annihilator-of-a-coordinate-subspace

Claim/conventions: For I subset N and M_I={x in c0:x_n=0 for n not in I}, its annihilator under c0*=ell-one is {a:a_n=0 for n in I}; the preannihilator of this last space is M_I.

Dependencies: def-annihilator-and-preannihilator, thm-dual-of-c0-is-ell-one.

Source: BS Example 1.36, pp.36–37; Brezis §1.3 notation p.9. Strategy/rationale: Use e_n tests in both directions and the absolutely convergent coordinate pairing; M_I is an intersection of closed coordinate kernels.

Validation: pending batch gates. Next action: continue scaffold/coverage; retain global obligations above.

### ex-dual-of-a-finite-dimensional-space

Claim/conventions: For a fixed basis of a finite-dimensional normed K-space, continuous and algebraic duals agree. Under dual-basis coordinates, a matrix A has Banach transpose A^t over R or C, without conjugation.

Dependencies: def-transpose-of-a-bounded-operator, thm-dual-family-is-a-basis-in-finite-dimension, cor-linear-maps-with-finite-dimensional-domain-are-bounded.

Source: BS Example 4.5, p.173. Strategy/rationale: Coordinate estimates give boundedness of all linear functionals using norm equivalence; expand sum_i g_i sum_j A_ij x_j. This is not the Hilbert conjugate transpose.

Validation: pending batch gates. Next action: continue scaffold/coverage; retain global obligations above.

### cex-dual-functor-is-not-covariant

Claim/conventions: The claim that T:X->Y canonically induces by composition an arrow X*->Y* is false. For inclusion i:K->K^2, i*=coordinate restriction (K^2)*->K*.

Dependencies: def-transpose-of-a-bounded-operator, lem-transpose-reverses-composition.

Source: BS Definition 4.1 and Lemma 4.3(i), pp.172–173. Strategy/rationale: Write i(t)=(t,0); composition of g(s,t)=as+bt with i is at. The proposed same-direction composition is not defined for a functional on K. No claim that all conceivable covariant assignments are impossible.

Validation: pending batch gates. Next action: continue scaffold/coverage; retain global obligations above.

### cex-canonical-bidual-map-need-not-be-surjective

Claim/conventions: Under the dual identifications, J_c0 is the inclusion c0 -> ell-infinity; the bounded sequence (1,1,...) is not in its image.

Dependencies: thm-dual-of-c0-is-ell-one, thm-complex-dual-of-ell-one-is-ell-infinity, cor-ell-p-duality-by-counting-measure, def-canonical-map-into-the-bidual, def-reflexive-banach-space.

Source: BS Examples 1.35–1.36 and §2.4.1, pp.36–37,88. Strategy/rationale: Evaluate J_x on the coefficient functional associated with a in ell-one; it is sum a_n x_n. Every possible preimage of (1,1,...) would have all coordinates one and hence would not lie in c0.

Validation: pending batch gates. Next action: continue scaffold/coverage; retain global obligations above.

### cex-transpose-range-need-not-be-norm-dense

Claim/conventions: Over R, inclusion T:ell-one->c0 is injective and has dense range. Its transpose is ell-one->ell-infinity, whose norm closure is c0, a proper subspace of (ker T)-perp=ell-infinity.

Dependencies: def-transpose-of-a-bounded-operator, thm-dual-of-c0-is-ell-one, cor-ell-p-duality-by-counting-measure, lem-finite-truncations-are-dense-in-c0-and-ell-one, lem-c-zero-is-a-closed-subspace-of-ell-infinity, def-annihilator-and-preannihilator.

Source: BS Example 4.10, p.174. Strategy/rationale: Compute T* by the pairing. Finite support sequences imply norm closure contains c0; ell-one is contained in the closed c0 subspace, proving equality. The constant-one sequence is outside. No weak-star result is needed for this norm-closure refutation.

Validation: pending batch gates. Next action: continue scaffold/coverage; retain global obligations above.

### cex-injective-transpose-does-not-imply-surjectivity

Claim/conventions: On real ell-two let (Tx)_n=x_n/(n+1). T and its transpose under counting-measure duality are injective with dense, nonclosed range, but neither is onto.

Dependencies: def-transpose-of-a-bounded-operator, cor-ell-p-duality-by-counting-measure, rem-ell-p-is-l-p-of-counting-measure.

Source: BS Example 4.9, p.174; Brezis Remark 20, p.48. Strategy/rationale: Finite sequences belong to the range and approximate every ell-two vector by tails. The target y_n=1/(n+1) lies in ell-two, but its forced preimage (1,1,...) does not. Bound the sum of 1/(n+1)^2 by telescoping for n>=1. Compute the transpose by the real pairing.

Validation: pending batch gates. Next action: continue scaffold/coverage; retain global obligations above.

### rem-riesz-representation-name-split

Claim/conventions: RMK identifies the complex dual of C_0(K) with regular measures; the Hilbert-space Riesz theorem belongs to the later Hilbert geometry page. Evaluation is not an inner-product identification.

Dependencies: thm-bounded-c-zero-functionals-are-regular-complex-measure-integrals, def-dual-space-of-a-normed-space.

Source: BS Examples 1.32 and 1.37, pp.32,37. Strategy/rationale: Definition or orientation only; no proof claimed.

Validation: pending batch gates. Next action: continue scaffold/coverage; retain global obligations above.

## Coverage checkpoint

Completed 28 A items and 10 B items, below the 60-item A limit; no split proposed or scope removed for size. Completed 82 harvest dispositions from two independent complete treatments, including source-native headings, precise ranges, and specific destinations/reasons. Source BS §4.1.1 is actually titled Definition and Examples (the design abbreviates the parent title); this recovered heading is retained faithfully.

Corrected the finite-dimensional example prerequisite to the existing cor-linear-maps-with-finite-dimensional-domain-are-bounded. Original invented spelling was caught by content-policy and removed. The required two FA-8 deps remain explicit and unresolved. Next action: run coverage, whole-run manifest-only policy, validate-plan, manifest-deps, and mechanical full-fetch/URL recovery checks; record exact outputs.

Provenance checkpoint: the five locally selected coordinate/shift/coordinate-annihilator/covariance/c0-bidual examples and counterexamples are explicitly ai-generated with the matching generation role. They have no downstream dependency use. Supporting source mathematics remains cited; source text is not falsely credited with these exact constructions. Other substantive statements are source-based or explicit scalar-field specializations.

## Final structural findings and next action

The scaffold is source-grounded but NOT dependency-closed or ready. All 31 A and 10 B items have explicit deps arrays; source harvest has 88 dispositions. Size is below the cap. No failed gate was waived.

1. The earlier forward FA-8 seam has been repaired locally: def-weak-star-topology, lem-finite-evaluations-separate-from-a-dual-subspace, and thm-bipolar-closure-for-linear-subspaces now precede thm-kernel-range-annihilator-identities and supply the exact weak-star closure route without a forward edge.
2. Published def-c-zero-and-ell-infinity and lem-c-zero-is-a-closed-subspace-of-ell-infinity are homed on geometric-hahn-banach-and-convex-separation-examples. They are mathematically available but forbidden as cross-page B dependencies. Three A dependencies and one B dependency trigger this restriction. Silently cloning them would violate the no-duplicate rule; changing their published homes exceeds this task. A home/contract repair must precede authoring. The explicit c0 duality and norm-closure counterexample remain, not discarded to clear the gate.
3. Step 3 added the published order-288.039 radon-measures-and-the-riesz-markov-kakutani-theorem as a backward prerequisite of the B page. This repairs the design's MT-20 RMK seam for the evaluation example and orientation remark without duplicating RMK.
4. The shell network cannot resolve either source host. web opened the full documents and the indexed mathematical ranges were read; source-fetch-check --stamp failed both with EAI_AGAIN, and URL recovery failed at the same DNS boundary. This does NOT establish that no archive exists. No full-fetch stamp, content hash, or successful liveness result is invented.

Read-only checks of the REAL plan passed (validate-plan exit 0), but this is not scaffold clearance: this pair still has empty item lists in the real spec. To avoid a vacuous pass, a temporary spec copy was populated with ONLY this owned manifest and checked too. It failed with the following exact batch errors; the real plan was not modified.

```text
7 ERROR(s):
  [resolve] thm-kernel-range-annihilator-identities (dual-spaces-adjoint-operators-and-annihilators) depends on "def-weak-star-topology", which is neither planned nor in items/
  [resolve] thm-kernel-range-annihilator-identities (dual-spaces-adjoint-operators-and-annihilators) depends on "thm-bipolar-closure-for-linear-subspaces", which is neither planned nor in items/
  [b-leaf] lem-finite-truncations-are-dense-in-c0-and-ell-one (dual-spaces-adjoint-operators-and-annihilators) depends on published def-c-zero-and-ell-infinity, which is homed on examples page geometric-hahn-banach-and-convex-separation-examples; B pages must be leaves
  [b-leaf] thm-dual-of-c0-is-ell-one (dual-spaces-adjoint-operators-and-annihilators) depends on published def-c-zero-and-ell-infinity, which is homed on examples page geometric-hahn-banach-and-convex-separation-examples; B pages must be leaves
  [b-leaf] thm-complex-dual-of-ell-one-is-ell-infinity (dual-spaces-adjoint-operators-and-annihilators) depends on published def-c-zero-and-ell-infinity, which is homed on examples page geometric-hahn-banach-and-convex-separation-examples; B pages must be leaves
  [b-leaf] cex-transpose-range-need-not-be-norm-dense (dual-spaces-adjoint-operators-and-annihilators-examples) depends on published lem-c-zero-is-a-closed-subspace-of-ell-infinity, which is homed on examples page geometric-hahn-banach-and-convex-separation-examples; B pages must be leaves
  [undeclared-prereq] page dual-spaces-adjoint-operators-and-annihilators-examples has an item depending on radon-measures-and-the-riesz-markov-kakutani-theorem, which is NOT in the closure of its declared requires — either add it or drop the dependency

FAIL
```

## Final validators

Local date 2026-09-07, Australia/Sydney. Other batches are concurrently scaffolded, so whole-run counts and unrelated errors are a snapshot, not this batch’s work.

`node tools/coverage-checklist.mjs research/frontier-33-batch-2.coverage.json --require-destination` — exit 0

```text
coverage-checklist: 1 page(s), 82 harvested result(s), 0 error(s), 0 warning(s)
```

`node tools/content-policy.mjs --manifest-only research/frontier-33-batch-1.pages.json research/frontier-33-batch-10.pages.json research/frontier-33-batch-11.pages.json research/frontier-33-batch-12.pages.json research/frontier-33-batch-13.pages.json research/frontier-33-batch-14.pages.json research/frontier-33-batch-15.pages.json research/frontier-33-batch-16.pages.json research/frontier-33-batch-17.pages.json research/frontier-33-batch-18.pages.json research/frontier-33-batch-19.pages.json research/frontier-33-batch-2.pages.json research/frontier-33-batch-20.pages.json research/frontier-33-batch-3.pages.json research/frontier-33-batch-4.pages.json research/frontier-33-batch-5.pages.json research/frontier-33-batch-6.pages.json research/frontier-33-batch-7.pages.json research/frontier-33-batch-8.pages.json research/frontier-33-batch-9.pages.json` — exit 1

```text
content-policy: 677 scoped item(s), 7 error(s), 0 warning(s)
ERROR batch-dependency-missing [def-compactly-supported-differential-form]: def-compactly-supported-differential-form depends on def-compactness-open-cover, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-kernel-range-annihilator-identities]: thm-kernel-range-annihilator-identities depends on def-weak-star-topology, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-kernel-range-annihilator-identities]: thm-kernel-range-annihilator-identities depends on thm-bipolar-closure-for-linear-subspaces, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-regular-local-rings-are-domains-and-cohen-macaulay]: thm-regular-local-rings-are-domains-and-cohen-macaulay depends on def-cohen-macaulay-module-and-ring, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [lem-polynomial-local-regularity-fibre-step]: lem-polynomial-local-regularity-fibre-step depends on thm-euclidean-domain-implies-pid, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [def-normal-noetherian-ring]: def-normal-noetherian-ring depends on def-integrally-closed-domain, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [def-total-ring-of-fractions]: def-total-ring-of-fractions depends on def-localisation-of-a-commutative-ring, which is neither declared by this batch nor an item on disk
```

`node tools/source-fetch-check.mjs --coverage research/frontier-33-batch-2.coverage.json` — exit 1

```text
source-fetch-check: 0/2 source(s) fetch-verified, 2 FAILED
ERROR fetch-check-unstamped: dual-spaces-adjoint-operators-and-annihilators: https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf
ERROR fetch-check-unstamped: dual-spaces-adjoint-operators-and-annihilators: https://math.jhu.edu/~sire/brezis.pdf
```

`node tools/manifest-deps.mjs research/frontier-33-batch-*.pages.json` — exit 0, 647 items at that snapshot, 0 normalized, 0 errors. This was a check only; no manifest normalized.

`node tools/source-fetch-check.mjs --coverage research/frontier-33-batch-2.coverage.json --stamp --timeout-sec 15` — exit 1, 0/2 fetch-verified, 2 failures (EAI_AGAIN), 0 newly stamped.

`node tools/url-sweep.mjs --coverage research/frontier-33-batch-2.coverage.json --out /tmp/frontier-33-batch-2-url-liveness.json --recover --fail-on-dead --timeout-ms 5000` — exit 1, 0/2 live, 2 failed, 0 recovered. Both rows returned curl exit 6, Could not resolve host. Original ETH URL was correctly counted as superseded, not as a live-source citation. The durable result is this notes record, not the temporary tool output.

Next action: the run's drift/repair machinery must adjudicate the FA-8 prerequisite route, c0 item homes, and missing RMK prerequisite before this scaffold can be accepted. Re-run fetch/stamp and recovery from an environment where DNS works, then re-run the batch coverage and whole-run policy plus the populated-plan validator. Do not commence step 5 on the current failed gates. No permission request is needed or issued.

Manifest SHA-256: `6b42df857ea4ed1f0def42ff46f66c80576e1d4b7095002c1701eaee4942ea1f`. Coverage SHA-256: `cdcd554a97f43583912de3f7c47585ab750646458e85c16de60b651eb1f88459`. No independent review or exact-hash gate was removed.

## Policy-fix-1-b2 — current repair checkpoint (2026-09-07)

This dispatch explicitly authorizes adding missing supporting mathematics inside batch 2. It supersedes the earlier prohibition on supplying the two FA-8 prerequisites locally; the design, page structure and all other owners remain untouched. The earlier missing-dependency outputs and hashes above are historical evidence, not current validation. No result has been removed. The recorded-not-proved rem-weak-and-weak-star-topologies is not a usable logical prerequisite; this definition supplies the required scoped construction. Searches found no existing item, alias, or whole-run manifest declaration colliding with the three added IDs. The published primal double-annihilator claim is reused explicitly, not silently duplicated.

Sources: successfully reopened complete BS and BR PDFs at their recorded URLs via web. Read BS Example 3.9, p.122; Lemma 3.6(i) and its complete proof, pp.119–120; Theorem 3.12 and Lemmas 3.13–3.14, pp.125–127; Corollaries 3.25–3.26 and the complete latter proof, p.130. BR Remark 17, p.46, independently confirms the operator identity. Coverage preserves original_url provenance and updates all affected dispositions. The failed HKUST search-result fetch is not recorded as mathematical support.

### Repair checkpoint: def-weak-star-topology

Claim/conventions: For a real or complex normed space X, sigma(X*,X) is the initial topology of the evaluations f -> f(x), x in X, into K with its usual topology. At f0 a neighbourhood basis consists of {f: |(f-f0)(x_j)|<epsilon for 1<=j<=n}, with finitely many x_j in X and epsilon>0; n=0 gives X*. Weak-star closure means topological closure in this topology, not sequential closure.

Dependencies: def-dual-space-of-a-normed-space, def-initial-and-final-topology.

Source: Bühler–Salamon, Functional Analysis, Example 3.9(i), p.122; Lemma 3.6(i), pp.119–120 (real source; complex disk version via the same initial-topology construction) — https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf

Strategy/rationale: Initial topology specializes the published construction to evaluations; the same finite-intersection basis works with complex disks.

Validation: pending the four required checks. Next action: run them and record results below.

### Repair checkpoint: lem-finite-evaluations-separate-from-a-dual-subspace

Claim/conventions: Let N be a K-linear subspace of X*, let x_1,...,x_n in X, n>=1, and let E(f)=(f(x_1),...,f(x_n)). If E(f0) is not in E(N), there exists x in span{x_1,...,x_n} with g(x)=0 for every g in N and f0(x)=1. No completeness of X or closedness of N is assumed.

Dependencies: def-annihilator-and-preannihilator, cor-finite-dimensional-subspaces-are-closed, thm-geometric-hahn-banach-for-subspaces.

Source: Bühler–Salamon, Functional Analysis, Theorem 3.12(ii), pp.125–127, and Corollary 3.26(i), p.130; finite-coordinate adaptation using Theorem 2.53, pp.82–83 — https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf

Strategy/rationale: E(N) is a linear subspace of K^n, hence finite dimensional and closed. Apply geometric Hahn–Banach in K^n to E(N) and E(f0), obtaining a K-linear h with h|E(N)=0 and h(E(f0))=1. Put a_j=h(e_j) and x=sum_j a_j x_j. Expansion in the standard coordinate basis gives h(E(f))=sum_j a_j f(x_j)=f(x); no complex conjugates occur. This is a finite-dimensional implementation of the source separation step, not an appeal to unplanned locally convex separation.

Validation: pending the four required checks. Next action: run them and record results below.

### Repair checkpoint: thm-bipolar-closure-for-linear-subspaces

Claim/conventions: For a K-linear subspace N of X*, (preannihilator N)-perp equals the sigma(X*,X) closure of N. Thus N is weak-star closed iff it equals its double annihilator, and weak-star dense iff its preannihilator is zero. The primal identity preannihilator(M-perp)=norm closure(M), for a linear subspace M of X, is recalled from cor-annihilator-detects-closure rather than proved a second time. X need only be normed.

Dependencies: def-weak-star-topology, def-annihilator-and-preannihilator, lem-finite-evaluations-separate-from-a-dual-subspace, cor-annihilator-detects-closure.

Source: Bühler–Salamon, Functional Analysis, Corollary 3.26(i)–(iii), p.130; Corollary 2.55, p.84 (real source; K-linear finite-coordinate proof covers C) — https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf

Strategy/rationale: Every evaluation at x in preannihilator N vanishes on N and has a closed kernel in sigma(X*,X), proving closure(N) is contained in its double annihilator. Conversely, if f0 is outside closure(N), choose a basic finite-evaluation neighbourhood disjoint from N. It has n>=1 since N contains zero. Its coordinate map E satisfies E(f0) not in E(N). The preceding separation lemma gives x in preannihilator N with f0(x)=1, excluding f0 from the double annihilator. Closedness is immediate; density uses that X* separates each nonzero x, already contained in the published primal annihilator-closure result with M={0}. Reuse that published result for the primal identity. No sequence characterization or Banach hypothesis is used.

Validation: pending the four required checks. Next action: run them and record results below.

### Repair checkpoint: thm-kernel-range-annihilator-identities

Claim/conventions: For bounded T:X->Y between normed spaces, (ran T)-perp=ker T* and (ker T)-perp=weak-star closure(ran T*) in sigma(X*,X). Norm closure is not substituted.

Dependencies: lem-elementary-kernel-range-annihilator-identities, def-weak-star-topology, thm-bipolar-closure-for-linear-subspaces.

Source: Bühler–Salamon, Functional Analysis, Theorem 4.8 and Corollary 3.26, pp.174 and 130 — https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf

Strategy/rationale: Apply the now preceding local bipolar-closure theorem to the linear subspace N=ran T*. The elementary preannihilator identity gives preannihilator(ran T*)=ker T. The first identity is the preceding elementary kernel-range lemma. Its injectivity consequence is that T is injective iff ran T* is weak-star dense. Preserve weak-star closure throughout.

Validation: pending the four required checks. Next action: run them and record results below.

The new A-page count is 31, below 60; no page split or content removal is needed. Local dependency statements read: def-dual-space-of-a-normed-space, def-initial-and-final-topology, cor-finite-dimensional-subspaces-are-closed, thm-geometric-hahn-banach-for-subspaces, cor-annihilator-detects-closure, and this batch’s annihilator/transpose definitions and elementary identities. Finite-dimensional separation uses published HB, not unrestricted algebraic basis choice. No extra completeness or reflexivity assumptions are introduced. Outstanding obligations: required validators; earlier c0 B-page and RMK prerequisite seams and shell fetch-stamp failures are outside the two reported policy subjects and are not claimed repaired.

## Policy-fix-1-b2 — final validation

All required commands ran after the manifest/harvest repair:

- `node tools/coverage-checklist.mjs research/frontier-33-batch-2.coverage.json --require-destination` — exit 0; 1 page, 88 harvested results, 0 errors, 0 warnings.
- `node tools/manifest-deps.mjs research/frontier-33-batch-*.pages.json` — exit 0; 923 items, 0 normalized, 0 errors. No other manifest was written.
- `node tools/content-policy.mjs research/frontier-33-batch-*.pages.json --manifest-only` — exit 0; 923 scoped items, 0 errors, 0 warnings. Both original batch-dependency-missing findings are resolved.
- `node tools/validate-plan.mjs research/plan-spec.json` — exit 0; existing redundant-prerequisite warnings. The real plan has no item list for this pair, so this success alone does not validate the repaired item graph.

Additional non-vacuous diagnostic: injected only this batch's item lists into a temporary copy of the current spec and ran validate-plan. Before Step 3 it reported five errors. Step 3 repaired the backward RMK page prerequisite, leaving exactly four structural errors: three b-leaf edges to def-c-zero-and-ell-infinity from lem-finite-truncations-are-dense-in-c0-and-ell-one, thm-dual-of-c0-is-ell-one, and thm-complex-dual-of-ell-one-is-ell-infinity; and one b-leaf edge from cex-transpose-range-need-not-be-norm-dense to lem-c-zero-is-a-closed-subspace-of-ell-infinity. There are no missing, later, cyclic, or other undeclared dependency errors introduced by the three supporting items. The four remaining errors require a published home/contract decision; the existing definitions must not be cloned merely to clear the gate. Batch 2 remains insufficient until that decision is implemented and validated.

Next action: return the completed policy repair to the driver; preserve the five page-seam errors and source-stamp obligations for their authorized stages. Only the batch-2 manifest, coverage and this notes file were modified. No independent review or exact-hash gate was removed; earlier hashes remain historical, and current manifest/coverage hashes follow.

Step-3 checkpoint (2026-09-07): the B page now declares the backward RMK prerequisite. The combined assigned overlay validates batch 12 and leaves exactly the four recorded c0 B-leaf errors in batch 2; `manifest-deps`, `coverage-checklist --require-destination`, and `content-policy --manifest-only` otherwise pass. The Step-3 verdict is `insufficient` for the A page pending the published c0 home/contract decision.

Current frontier-33-batch-2.pages.json SHA-256: `05939f083f45b2b26f23b37f77d019ae8b718d914b5e5fb25e658f5adfc3bcd2`.

Current frontier-33-batch-2.coverage.json SHA-256: `a69a945162fedbb0a4309a9d18f718663f35d1f4636fbd0ebb9b6257400166dc`.

## Step-3 fix pass

Read `research/frontier-33-alpha-b-step3-scaffold-review.md` and its stable
verdict records in `research/frontier-33-alpha-b-step3-verdicts.json`. The
review supplies no separate numeric finding identifiers, so the immutable JSON
pointers below identify its two batch-2 `missing` findings without renumbering
them.

### `#/0/missing/0` — admissibly homed `c_0` and `ell-infinity` definition

Disposition: **push back; unresolved outside this batch's authority.** The
needed published result is exactly `def-c-zero-and-ell-infinity`, but it is
homed on the published B page
`geometric-hahn-banach-and-convex-separation-examples`. The three retained,
load-bearing dependencies are on
`lem-finite-truncations-are-dense-in-c0-and-ell-one`,
`thm-dual-of-c0-is-ell-one`, and
`thm-complex-dual-of-ell-one-is-ell-infinity`. Rehoming the published item or
changing the B-page contract is not authorised here; cloning the exact claim
would violate the no-duplicate requirement.

Evidence: Bühler--Salamon, *Functional Analysis*, Example 1.35 and Example
1.36, pp.36--37, supply the sequence-dual route; the recorded complete source
URL is
`https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf`
and its current coverage fetch record is SHA-256 prefix `8ffd5f868b480006`.
The populated-plan validator reports precisely the three corresponding
`b-leaf` errors. Changed scaffold record: no claim or edge was removed; the
three existing `scaffold_blocker` records are retained verbatim, and the
coverage status is corrected to report the live four-error state.

### `#/0/missing/1` — admissibly homed norm-closedness of `c_0`

Disposition: **push back; unresolved outside this batch's authority.** The
needed published result is exactly
`lem-c-zero-is-a-closed-subspace-of-ell-infinity`, homed on the same published
B page. It remains the explicit dependency of
`cex-transpose-range-need-not-be-norm-dense`; its norm-closure conclusion must
not be discarded merely to avoid the graph error. Rehoming or an equivalent
owner-approved contract repair is required, and is not a batch-2 scaffold
edit.

Evidence: the same fetch-verified Bühler--Salamon treatment, Example 4.10,
p.174, supplies the transpose-range counterexample, and the review identifies
the already-published closedness lemma as its exact prerequisite. The populated
plan reports the one corresponding `b-leaf` error, with no missing, forward,
cyclic, or undeclared-prerequisite error in this pair. Changed scaffold record:
the existing `scaffold_blocker` remains on
`cex-transpose-range-need-not-be-norm-dense`; no duplicate definition or lemma
was minted.

Validation on 2026-09-07:

- `node tools/coverage-checklist.mjs research/frontier-33-batch-2.coverage.json --require-destination` — exit 0; 1 page, 88 harvested results, 0 errors, 0 warnings.
- `node tools/source-fetch-check.mjs --coverage research/frontier-33-batch-2.coverage.json` — exit 0; 2/2 sources fetch-verified.
- `node tools/content-policy.mjs --manifest-only research/frontier-33-batch-*.pages.json` — exit 0; 923 scoped items, 0 errors, 0 warnings.
- `node tools/validate-plan.mjs research/plan-spec.json` — exit 0. This remains page-level for batch 2 because its lists have not been spliced into the shared plan.
- A temporary copy populated only with this batch's two manifest records exited 1 with exactly the four `b-leaf` errors above. This is the decisive batch result: **insufficient and not authorable** until an authorised published-home or equivalent contract repair is made.

Current records after this pass: the manifest is intentionally unchanged;
`frontier-33-batch-2.coverage.json` has its stale five-error/source-stamp
status replaced; this notes file contains the required dispositions and
evidence. No plan, item, library page, review finding, or other batch was
changed.

## Scaffold-fix round

This round applies only `research/frontier-33-scaffold-closure.json` work[1],
the entry for `dual-spaces-adjoint-operators-and-annihilators`. Its `missing`
array has no supplied numeric ids, so the stable finding identifiers used here
are `work[1].missing[0]` and `work[1].missing[1]`.

### `work[1].missing[0]` — admissible home for `c_0` and `ell-infinity`

Disposition: **push back; not repairable within this batch.** The three
load-bearing manifest edges remain on
`lem-finite-truncations-are-dense-in-c0-and-ell-one`,
`thm-dual-of-c0-is-ell-one`, and
`thm-complex-dual-of-ell-one-is-ell-infinity`, each to the exact published
definition `def-c-zero-and-ell-infinity`. That definition is homed only on
the published B page `geometric-hahn-banach-and-convex-separation-examples`.
Rehoming that published claim or changing its page contract is outside the
batch; a second definition would silently duplicate the exact claim and is
not a valid scaffold repair.

Evidence and source support: the fetch-verified Bühler--Salamon *Functional
Analysis*, Example 1.35, printed p.36 (PDF p.43), defines the real
`ell-infinity` model as bounded sequences with the supremum norm; Example 1.36,
printed p.37 (PDF p.43), introduces `c_0` as its closed subspace of sequences
tending to zero. The same examples give the real sequence-dual constructions
used by the three dependent scaffold items:
https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf.
The complete 452-page PDF was reopened and the exact examples read through
their coefficient and finite-support arguments. A third author-hosted treatment
was readable through the browser but failed the required repository fetch gate;
it is not retained in coverage. Its three harvested results have instead been
reharvested from the fetch-verified Bühler--Salamon source, with the exact
locators above.

Change: all three manifest records retain their explicit `deps` arrays and
now state this `work[1].missing[0]` pushback in `scaffold_blocker`. Coverage
adds three exact Bühler--Salamon harvest rows, each disposed as
`already-published` to the existing item. No item was added, no dependency
removed, and no content was duplicated.

### `work[1].missing[1]` — admissible home for norm-closedness of `c_0`

Disposition: **push back; not repairable within this batch.**
`cex-transpose-range-need-not-be-norm-dense` retains its load-bearing edge to
the exact published lemma `lem-c-zero-is-a-closed-subspace-of-ell-infinity`.
It too is homed only on
`geometric-hahn-banach-and-convex-separation-examples`. Its norm-closedness is
needed to identify the norm closure of the transpose image with `c_0`; removing
the edge would damage the counterexample, while a duplicate lemma would violate
the no-duplicate rule.

Evidence and source support: Bühler--Salamon, Example 1.36, printed p.37
(PDF p.43), states its `c_0` model as a closed subspace of `ell-infinity`;
Example 4.10, printed p.174 (PDF p.181), takes the inclusion
`ell-one -> c_0`, identifies the transpose as the inclusion
`ell-one -> ell-infinity`, and states that its image is weak-star dense but not
norm dense. The full cited passage was reread on 2026-09-07.

Change: the counterexample’s `scaffold_blocker` now identifies
`work[1].missing[1]`; the dependency and its coverage disposition remain.
No claim was removed or cloned.

Current conventions and limits: all four affected records retain the stated
real/complex sequence-space conventions and their existing proof strategies;
the source-backed real models remain explicitly extended locally where the
manifest says so. The current plan’s pair has no item list, so
`validate-plan` can only verify its page level. The prior populated-overlay
diagnostic remains decisive for the actual scaffold graph: exactly four
forbidden B-leaf dependencies, the three definition edges and the one
closedness edge. An authorised published-home or equivalent contract repair is
still required before this A page can be authorable.

Final validation on 2026-09-07:

- `node tools/coverage-checklist.mjs research/frontier-33-batch-2.coverage.json --require-destination` — exit 0; 1 page, 91 harvested results, 0 errors, 0 warnings. The two retained independent treatments are the complete Bühler--Salamon lecture notes and the Brezis textbook; both have full-text fetch stamps.
- `node tools/source-fetch-check.mjs --coverage research/frontier-33-batch-2.coverage.json` — exit 0; 2/2 sources fetch-verified.
- `node tools/manifest-deps.mjs research/frontier-33-batch-*.pages.json` — exit 0; 923 items, 0 normalized, 0 errors.
- `node tools/content-policy.mjs research/frontier-33-batch-*.pages.json --manifest-only` — exit 0; 923 scoped items, 0 errors, 0 warnings.
- `node tools/validate-plan.mjs research/plan-spec.json` — exit 0. It reports the established global redundant-prerequisite warnings and confirms the current declared page order, but explicitly notes that this pair has no item list in the shared plan; it cannot discharge the four B-leaf edges in the unspliced batch manifest.

The A scaffold remains 31 items (under the 60-item split threshold), the B
scaffold remains 10, and all 41 manifest objects have explicit `deps` arrays.
No plan, item, library page, workflow-state file, or other batch was modified.

## Scaffold-fix round

This is the `scaffold-fix-3-b2` recheck. The sole closure work object is
`/work/0`, for the batch-2 A page
`dual-spaces-adjoint-operators-and-annihilators`; its `missing` array supplies
no external ids, so the immutable JSON pointers below are the finding ids. The
current scope ledger assigns both this A page and its B companion to batch 2.

### `/work/0/missing/0` — an admissibly homed definition of `c_0` and `ell-infinity`

Disposition: **push back.** The three explicit, load-bearing dependencies on
the exact published `def-c-zero-and-ell-infinity` remain on
`lem-finite-truncations-are-dense-in-c0-and-ell-one`,
`thm-dual-of-c0-is-ell-one`, and
`thm-complex-dual-of-ell-one-is-ell-infinity`. The published definition is
homed on the B page `geometric-hahn-banach-and-convex-separation-examples`;
therefore the populated-plan check rejects all three edges. Rehoming a
published item or changing the published B-page contract is not authorised to
this batch, and a duplicate definition would violate the no-duplicate rule.

Evidence: the exact published item's author-hosted source was reopened in full:
Piotr Hajlasz, *Functional Analysis*, §1.1, examples 7–10, PDF p.5,
https://sites.pitt.edu/~hajlasz/Notatki/Functional%20Analysis2.pdf. It defines
`ell-infinity` as the bounded real/complex sequences with the supremum norm,
defines `c_0` as the sequences converging to zero, and states that `c_0` is a
closed linear subspace. Independently, the full 452-page Bühler--Salamon PDF
was reopened at the coverage URL; Example 1.35 (printed p.36; PDF p.43) gives
the bounded-sequence/supremum-norm model and Example 1.36 (printed p.37; PDF
pp.43–44) gives `c_0` and the real `c_0^* = ell-one` coefficient argument.
The local complex statements remain explicitly marked as local extensions in
the manifest rather than being attributed verbatim to the real-scalar source.

Change: the three manifest `scaffold_blocker` fields now identify this exact
closure pointer as `Scaffold-fix round 3, closure /work/0/missing/0`; their
`deps` arrays, claims, conventions, source locators, and proof strategies are
unchanged. Coverage retains the three corresponding Bühler--Salamon harvest
rows (`already-published`, `inline`, and `included` dispositions respectively)
and its status now names the round-3 closure pointers. No item was added or
duplicated.

### `/work/0/missing/1` — an admissibly homed proof that `c_0` is norm closed in `ell-infinity`

Disposition: **push back.**
`cex-transpose-range-need-not-be-norm-dense` still explicitly depends on the
exact published `lem-c-zero-is-a-closed-subspace-of-ell-infinity`, which is
homed on the same B page. Its closedness conclusion is needed to identify the
norm closure of the transpose image with `c_0`; removing the edge would make
the planned counterexample unsound, while copying the lemma would duplicate a
published claim. The requested repair is therefore an authorised rehome or an
equivalent published-home contract decision, neither of which belongs to this
batch.

Evidence: Hajlasz §1.1, examples 7–10, PDF p.5 at the URL above directly
states the closed-subspace result for real and complex sequence spaces.
Independently, Bühler--Salamon Example 4.10 (printed p.174; PDF p.181) uses
the inclusion `ell-one -> c_0`, identifies its transpose with the inclusion
`ell-one -> ell-infinity`, and says that its image is weak-star dense but not
norm dense. Brezis §1.3, pp.8–10 (especially Remark 6), remains the second
independent treatment in coverage for the weak-star-closure qualification.

Change: the counterexample's `scaffold_blocker` now identifies
`Scaffold-fix round 3, closure /work/0/missing/1`; its dependency, statement,
source locator, and proof strategy remain unchanged. Coverage retains the
exact Bühler--Salamon Example 1.36 closedness row as
`already-published` to the published lemma and the Example 4.10 row as
`included` to the counterexample. No item was added, rehomed, or cloned.

Source verification: the two recorded coverage sources retain valid full-text
fetch stamps, and `node tools/source-fetch-check.mjs --coverage
research/frontier-33-batch-2.coverage.json` reports `2/2` verified. A forced
shell refresh on 2026-09-07 returned `EAI_AGAIN` for both hosts; it wrote no
stamp and did not invalidate the existing stamps. The browser nevertheless
opened the complete Bühler--Salamon and Brezis PDFs, so this is a DNS failure
in the shell transport, not evidence that either recorded text is unavailable.

Validation and current limit: the batch coverage checklist, whole-run
manifest-only content policy, manifest dependency check, and unspliced
`validate-plan` pass. An in-memory overlay that replaces only these two plan
records with this batch's manifest fails with exactly four `b-leaf` errors:
the three definition edges above and the one closedness edge above. Hence the
batch is still **insufficient and not authorable** until an authorised
published-home or equivalent contract repair is made. The A page remains at 31
items, below the 60-item limit; the B page remains at 10; all 41 item objects
retain explicit `deps` arrays. No plan, item, library page, workflow-state
file, or another batch was changed.

Current artifact hashes: manifest
`ad3b4187aae9efde114fa3998762fc2f255c5bf4529ecaa58ad88227eb0e6bf3`;
coverage
`a97617efa6244bbaed39c050855f20e230b073942943e42e1feca672c2f54f79`.
Next action: the owner of the published-home/contract decision must provide an
authorised rehome or an equivalent repair, after which the populated plan must
be revalidated; batch 2 must not begin authoring before then.

## Owner-authorized rehome resolution

The owner instructed the active Frontier 33 supervisor to resolve workflow
blockers autonomously under `CLAUDE.md`. The supervisor therefore applied the
repository's formal rehome protocol in `research/frontier-33-rehomed.json` for
the two exact published prerequisites named by Alpha:

- `def-c-zero-and-ell-infinity`
- `lem-c-zero-is-a-closed-subspace-of-ell-infinity`

Both items moved from the B leaf
`geometric-hahn-banach-and-convex-separation-examples` to its paired A page
`geometric-hahn-banach-and-convex-separation`, in dependency order. Their IDs,
statements, proofs, item files, and dependency arrays are unchanged. The four
batch-2 edges are now admissible backward dependencies, so the four superseded
`scaffold_blocker` fields were removed from the manifest. All earlier pushback
entries above remain as the audit trail for why the rehome was necessary.

The same closure pass exposed one remaining plan/manifest mismatch: the B page
already declared the earlier published
`radon-measures-and-the-riesz-markov-kakutani-theorem` prerequisite required by
`rem-riesz-representation-name-split`, while the shared plan still listed only
the A companion. The owner-authorized blocker resolution accepts that exact
backward `requires` edge in `research/plan-spec.json`; no page was reordered and
no item dependency changed. Its superseded `scaffold_blocker` field was removed.
