# Quantum normalization repair preparation

Run: frontier-43-complex-representation-15. Preparation only; no item, shared manifest, certification, ledger, or runtime write. Native author 9049de6d60173d78 was active when this review began. Re-read carriers after that writer drains before applying any correction. Maximum two focused repair rounds, each addressing a concrete confirmed finding.

## Independent conclusions

The restriction of the diagonal word pairing from all of Sh(V) to its generated shuffle half is necessary and mathematically sound. The tensor word i^N j pairs nontrivially with the first summand of the opposite Serre generator and with no other summand. Preserve this correction.

The assertion that the scalar braided coproduct fails to descend for non-simply-laced data is false for the actual current conventions. The form is already symmetric: (epsilon_i,epsilon_j)=d_i a_ij, and the scalar is q^{-(epsilon_i,epsilon_j)}. Thus the diagonal entries are q_i^{-2} and the off-diagonal entries are q_i^{-a_ij}. The quantum Serre ideal is a braided Hopf ideal for these parameters. Restore the full braided Hopf pairing rather than retain the weakened representative-only claim.

There are three additional confirmed supplier/interface defects: the full-double local-finiteness condition excludes infinite Kac–Moody doubles; the current Manin form yields a factor 1/2 different from the embedding proof; and the formal generator pairing normalization is misread and cannot itself be transferred as a rational function of q.

## Supplier-first corrections

1. `def-lie-bialgebra-and-root-graded-manin-triple`, then `thm-root-graded-manin-triple-gives-dual-lie-bialgebras`.

The definition requires finitely many decompositions into nonzero graded pieces in the whole double. For an infinite root system, degree zero has infinitely many decompositions alpha+(-alpha). The actual transposition construction needs finite decompositions within each of the two Borel subalgebras, which hold because their supports lie in Q_+ and -Q_+. Replace the global condition by that precise same-side condition. The theorem's step 1.1 then uses finitely many opposite-Borel pieces, and its mixed-Jacobi calculations still concern fixed homogeneous finite-dimensional pieces. Do not impose finite type or withdraw the infinite Kac–Moody claim.

2. `lem-opposite-symmetrizable-kac-moody-borels-are-root-degreewise-dual-lie-bialgebras`, then `thm-the-formal-quantum-serre-half-embeds-in-the-quantum-shuffle-algebra-and-is-degreewise-free`.

The current double form is B_d((x,a),(y,b))=B(x,y)-B(a,b), giving cross pairing 2B on Cartan and B on opposite root spaces. With B(e_i,f_i)=1/d_i and B(h_i,h)=alpha_i(h)/d_i, determinant wedge pairing gives

    <e_i wedge h_i, f_i wedge h> = 2 alpha_i(h)/d_i^2,
    <e_i,[f_i,h]> = alpha_i(h)/d_i.

Therefore the transposed cobracket is (d_i/2)e_i wedge h_i. The embedding proof's step 3.2 instead asserts d_i e_i wedge h_i, which is its actual formal coproduct's first-order skew part. These do not agree.

Least destructive repair: use (1/2)(B(x,y)-B(a,b)) for the Manin form. It remains invariant and nondegenerate; Cartan cross pairing becomes B and root cross pairing B/2. The same calculation then gives d_i e_i wedge h_i exactly. Keep the enveloping vector-space pairing in part (i) normalized by the original B; it is a separate construction and need not change. State the simple-generator cobracket explicitly in part (ii), verify it against f_i wedge h, and use that exact formula in the embedding proof. No d_i factor is missing from the current root bilinear form itself.

The finite PID argument in embedding steps 6.1–8.1 is viable after this upstream repair. It compares intrinsic generated-half reduction, not its possibly nonsaturated reduction inside the full word space. The graded Lie-bialgebra argument is the essential input establishing that intrinsic reduction. Do not replace it by naive specialization inside Sh(V): at hbar=0 the ambient shuffle algebra is commutative, while higher classical root vectors arise as hbar-divisible ambient words whose classes remain nonzero in the intrinsic half reduction.

3. `lem-quantum-serre-sums-vanish-in-the-formal-quantum-shuffle-algebra` and `thm-generic-quantum-serre-halves-have-classical-pbw-ranks-and-a-nondegenerate-hopf-pairing`.

Preserve Serre vanishing and annihilation of the generated half. In the Serre lemma, step 2.3 should assert that the cut coproduct belongs to <V> tensor <V>, not that individual prefixes and suffixes of every tensor word belong to <V>. This follows by proving the cut coproduct is an algebra map to the tensor square with the same scalar braiding; on a letter it is primitive. The cross-cut inversion scalar gives the verification in one paragraph.

After the embedding theorem, this immediately proves coproduct descent without an additional deep result: the map from the braided tensor algebra to <V> is an algebra isomorphism modulo the Serre ideal; its cut coproduct agrees on generators with the braided tensor coproduct. Hence the latter kills the Serre ideal after the tensor quotient, and descends. The tensor quotient kernel identity follows from the already available tensor right-exactness supplier. Transfer to the negative presentation by e_i -> f_i. Graded connectedness gives the antipode recursively on color height. The pairing theorem can perform these steps after invoking the embedding theorem, avoiding a cycle.

An independent coefficient check also rules out the alleged non-simply-laced failure. Put N=1-a_ij and t=q_i^{-1}. The braided adjoint recurrence z_0=f_j, z_{m+1}=f_i z_m-t^{2m+a_ij}z_m f_i expands as

    z_N = sum_k (-1)^k B_{N,k}(t^2)t^{k(k-1)+k a_ij} f_i^{N-k} f_j f_i^k.

Since B_{N,k}(t^2)=t^{k(N-k)} C_{N,k}(t), the exponent becomes k(N-1+a_ij)=0; C(t)=C(q_i). This is exactly the printed symmetric Serre sum, for every positive integer d_i. One must still supply the finite coproduct cancellation or use the embedding/cut argument above; this recurrence alone is not a complete coideal proof.

The source's actual formal normalization is <e_i,f_j>=delta_ij/(hbar d_i), not hbar^{1-d_i}delta_ij. Enriquez printed p.23 equation (3) shows the product (1/hbar)d_i^{-1}. Current theorem step 3.1 incorrectly calls d_i hbar^{2-d_i} a unit of R; it is not a unit unless d_i=2 (and is not in R if d_i>2). It is invertible only over K=C((hbar)). If the extra arbitrary K-normalization is retained, identify it as a K-rescaling, but it has no role in rational generic transfer.

For the generic pairing needed by the crossed double, set <e_i,f_j>_q=delta_ij/(q_i-q_i^{-1}). Under q=e^hbar the ratio to the formal normalization is u_i=hbar d_i/(e^{d_i hbar}-e^{-d_i hbar}), an R-unit with constant term 1/2. For a multidegree alpha the ratio is product_i u_i^{alpha_i}; this preserves both adjunction rules and nondegeneracy. Rational generic coefficients are then obtained directly from the word/shuffle formula with generator factor 1/(q_i-q_i^{-1}); their base change is this unit-rescaled formal pairing. The unrescaled hbar^{-length} word formula is not C(q)-valued and cannot be transferred unchanged. Over Q(q), all presentation and pairing coefficients are rational; nonzero determinant/minor checks transfer from C(q) or K, supplying the rational-field interface.

Correct the negative-degree typos in pairing proof steps 1.1 and 2.2. A negative half component paired with alpha is indexed -alpha. Also remove the sentence treating tensor-word basis vectors as individual elements of the generated half; expand generated-half elements in the ambient word basis instead.

4. Preserve approved PBW richness.

The report withdrew generic homogeneous-basis lifts and PBW monomial lifts because a classical PBW supplier was supposedly unavailable. Published `lem-pbw-for-countably-presented-kac-moody-lie-algebras` and `thm-pbw-symmetrization-is-a-vector-space-isomorphism-in-characteristic-zero` already supply the classical input through the opposite-Borel lemma. Rational lifts regular at q=1 of a classical homogeneous component basis become an R-basis under q=e^hbar by the existing finite-free lift argument. Their determinant is nonzero after field extension, so they form a generic basis. Ordered monomials in rational homogeneous root-vector lifts follow from the classical PBW ordered-monomial basis degree by degree. Add the exact direct supplier needed if the claim is restored; no new deep quantization theorem is required for this route.

## Actual consumer map and remaining double obligation

Current authored item edges: Manin definition -> Manin theorem -> opposite-Borel lemma -> formal embedding -> generic PBW/pairing. The Serre lemma separately feeds formal embedding and generic pairing. Manifest-only consumers continue generic pairing -> crossed-double lemma -> triangular decomposition -> rank-one string theorem -> rank-one B example. The four final carriers were absent at first read; stable reinspection is mandatory because the native author is creating them. `rg` over current items found no published consumer of these newly added interfaces.

The Hopf theorem and the two normalized A2/affine examples use the separate toral-action Serre coproduct lemma, not the changed formal pairing; their statements do not change from these fixes. The unsymmetrized B2 counterexample's full-quotient extension remains a separate confirmed gap; a normalized triangular-decomposition theorem cannot certify an unsymmetrized quotient.

The manifest crossed-double strategy is not a proof: its displayed sum lacks the required toral and antipode terms, and quotient associativity alone does not identify the quotient with the stipulated tensor vector space. The smallest missing result is a finite crossed-product construction on the abstract Serre halves and free toral group algebra, with generator commutator normalization and explicit associativity/Serre stability. Alternatively prove the free pre-Serre triangular decomposition by terminating mixed-word rewriting, then prove [F_k,Serre^+_ij]=[E_k,Serre^-_ij]=0 and the resulting factor-ideal decomposition, as in Berkeley Theorem 13.1.3.22. The native writer may close this; review its actual argument before choosing a repair.

Do not use subalgebras of the already-presented full U as the abstract factors whose injectivity is being proved. Distinguish the independently presented halves and Q(q)[P^vee], then identify their images after tensor-space injectivity. Likewise, testing only nonzero pure tensors does not prove injectivity on arbitrary sums.

Triangular-decomposition scaffold clause (i) claiming arbitrary simple-generator words are linearly independent is false by Serre relations. Preserve the full tensor decomposition and PBW basis of root-vector monomials; arbitrary simple words only span. Clause (iii)'s finite dimension sum omits the infinite toral factor and infinite choices of positive/negative root degree. State the direct-sum graded tensor decomposition or the refined triple grading, not a finite total root-degree dimension formula. These are actual false scaffold claims requiring correction, unlike the sound braided Hopf clause.

## Evidence and repair rounds

Read CLAUDE.md, README.md and SCHEMA.md; read the full current pair report in sequential chunks; inspected the actual formal shuffle, Serre, opposite-Borel, Manin-definition/theorem, embedding and generic-pairing carriers, relevant batch-6 manifest rows and current pairing proof-contract claims. Coverage/contract inspections show that the false R-unit and unchanged rational-pairing transfer are currently certified assertions; receipts require refresh after repair. This preparation has not audited all 27 items or all external suppliers.

Full-text source files were locally available and were independently extracted with PyMuPDF to `research/frontier-43-complex-representation-15-quantum-normalization-sources/`. Metadata records their byte sizes, page counts and SHA-256; no new download was needed. Read Enriquez printed pp.22–24 and pp.30–38, especially equations (2)–(5), Lemmas 2.8–2.11 and the pairing proof; JKK printed pp.5–6 definitions/relations/Hopf and triangular-decomposition assertions; Etingof–Semenyakin printed pp.21–24, §3.7 and §4.1, for restricted double and commutator normalization; Berkeley printed pp.309–310 Theorem 13.1.3.22 proof. Source assertions do not substitute for local proof. `pdftotext` and `python` were unavailable; successful extraction used `python3` and fitz. No mathematical validator was run on unchanged carriers in this preparation.

Round 1 after writers drain: fix the concrete supplier interfaces in the order above; inspect and correct the actual downstream double/triangular/rank-one proofs only where affected. Run explicit changed-path proof-layout and appropriate scoped checks, then deliver exact changes to root for manifest/coverage/contracts and recertification integration. Round 2 is reserved for concrete failures discovered by independent review/gate; do not repeat unchanged reasoning or weaken sound claims. If double associativity or another branch remains unproved, record the exact missing local identity and hold that branch while independent work continues.

## Preparation addendum: newly authored consumers and complete bounded route

The native author has now created the four final carriers. This addendum is preparation only and supersedes the earlier missing-carrier observation; it is not repair round 1. Current triangular receipt (2026-10-07T19:33:20.802Z) escalates precisely the unproved Serre-free decomposition and factor-ideal identity. Current string receipt (19:33:21.632Z) escalates its dependency on those inputs. The old B2 receipt (14:11:49.076Z) requests a full-quotient detecting representation. All three mathematical gaps have a finite local repair route below; no new lemma ID is necessary.

### Exact Serre-free decomposition proof

Work over k=Q(q), and put c_i=(K_i-K_i^{-1})/(q_i-q_i^{-1}). Use generators E_i,F_i and K_h, with K_0 deleted; reduce

    E_i F_j -> F_j E_i + delta_ij c_i,
    E_i K_h -> q^{-alpha_i(h)} K_h E_i,
    K_h F_j -> q^{-alpha_j(h)} F_j K_h,
    K_h K_g -> K_{h+g},   K_0 -> 1.

Normal words are F_word K_h E_word, with K_0 understood as the empty middle factor. They are indexed by arbitrary words and h in P^vee. Termination uses the lexicographic triple (number of E/F letters, number of inverted type pairs for F<K<E, number of K letters). Each monomial on each right side has a strictly smaller triple: the mixed correction drops the first coordinate; E/F swapping and toral crossings drop the second; toral multiplication/deletion never increases the second and drops the third when it leaves the second unchanged. No ordering of the possibly infinite toral lattice is needed.

All nondisjoint two-rule overlaps are:

* K_h K_g K_l: both paths give K_{h+g+l}.
* E_i K_h K_g: both give q^{-alpha_i(h+g)} K_{h+g} E_i.
* K_h K_g F_j: both give q^{-alpha_j(h+g)} F_j K_{h+g}.
* E_i K_h F_j: the first path gives q^{-alpha_i(h)-alpha_j(h)}F_j K_h E_i + delta_ij q^{-alpha_i(h)} K_h c_i; the second gives the same leading term plus delta_ij q^{-alpha_j(h)} c_i K_h. Toral factors commute, and delta_ij makes the two scalar corrections equal.
* K_0 deletion against an adjacent toral product or crossing: the same formulas with h=0 or g=0 give identical outputs; alpha_i(0)=0. Cases h+g=0 likewise give the unit consistently.

There is no overlapping E_iF_j rule with another mixed rule because their shared middle letter would have to be both E and F. Disjoint reductions commute by distributivity. Prove unique normal reduction by well-founded induction on the triple: two first reductions have either disjoint support or one of the overlaps above, hence join; all resulting smaller terms have unique reductions by induction. Extend reduction linearly. A defining relation multiplied by arbitrary left and right words reduces to zero because the two corresponding local choices have the same normal reduction. Thus its two-sided ideal lies in the kernel of the normal-form map, while every word minus its normal reduction lies in the ideal. Consequently the quotient is precisely the vector space freely based on all normal words. This proves the Serre-free tensor decomposition and genuine injectivity on arbitrary sums, not only on pure tensors.

This proof can be placed in the existing crossed-double lemma, using abstract free halves and the free toral group algebra. It may then carry the Serre quotient proof below as well, restoring the original tensor-space crossed-product claim. The triangular theorem becomes the immediate application, with no dependency cycle. Alternatively both intermediate arguments fit locally in triangular decomposition; then remove its dependence on the weakened tautological crossed-double item, and order the genuine crossed-double corollary afterwards. Prefer the former organization to preserve the approved supplier order.

### Exact opposite commutators and ideal identity

Let t=q_i, a=a_ij, N=1-a, C_s=binom(N,s)_t, and

    S^+_ij = sum_{s=0}^N (-1)^s C_s E_i^{N-s} E_j E_i^s.

For every m>=1 in the Serre-free presentation, direct commutator expansion and moving K_i to the right give

    [F_i,E_i^m] = -[m]_i E_i^{m-1}(t^{m-1}K_i-t^{-(m-1)}K_i^{-1})/(t-t^{-1}).

Indeed [F_i,E_i]=-c_i, and summing the m positions yields sum_{r=0}^{m-1}t^{2r}=t^{m-1}[m]_i and its inverse-parameter analogue. For k different from i,j, [F_k,S^+_ij]=0 immediately. For k=j, symmetry q_j^{a_ji}=t^a yields the exact formula with toral factors on the right:

    [F_j,S^+_ij] = -E_i^N/(q_j-q_j^{-1})
      * ((sum_s(-1)^s C_s t^{as})K_j
         -(sum_s(-1)^s C_s t^{-as})K_j^{-1}) = 0.

Both sums vanish by the already proved alternating Gaussian identities, since a=1-N; N=1 includes the commuting-edge case.

For k=i, expand the commutator in the left and right E_i blocks. In the first contribution set s=r, and in the second set s=r+1, so both contributions have the same positive word E_i^{N-1-r} E_j E_i^r. Their toral-right coefficients give

    [F_i,S^+_ij] = -1/(t-t^{-1})
      * sum_{r=0}^{N-1} (-1)^r
        (C_r[N-r]_i-C_{r+1}[r+1]_i)
        E_i^{N-1-r}E_jE_i^r (t^rK_i-t^{-r}K_i^{-1}) = 0.

The first term's crossing exponent is (N-r-1)+a+2r=r because N-1+a=0; the second term's right-block exponent is also r. The factorial quotient gives C_r[N-r]_i=C_{r+1}[r+1]_i. These formulas include all signs, endpoints and toral placements.

The involution omega(E_i)=F_i, omega(F_i)=E_i, omega(K_h)=K_{-h} respects every Serre-free relation: the mixed commutator and c_i both change sign, and the toral weights change sign together. Applying it proves [E_k,S^-_ij]=0. Toral conjugation of either Serre generator is scalar because its color degree is homogeneous.

Put X=I^- C T^+ + T^- C I^+ in normal form, where C=k[P^vee] and I^± are the two-sided Serre ideals in their free halves. X contains every Serre generator. It is a two-sided ideal: same-side multiplication and toral multiplication/conjugation preserve each summand; moving an opposite simple generator across a product a S^± b gives [opposite,a]S^±b+aS^±[opposite,b], because the middle commutator is zero. Expanding [F_k,a] for a positive word gives positive-word/toral terms by the mixed relation, and expanding [E_k,a] for a negative word gives negative-word/toral terms; moving these toral terms past the homogeneous Serre generator merely scales it. Thus the remaining crossed multiplications also remain in X. Conversely each summand of X lies in the ambient two-sided Serre ideal. Therefore X equals that ideal. Under the normal-word tensor isomorphism, its kernel is exactly I^- tensor C tensor T^+ + T^- tensor C tensor I^+. Tensor quotient right-exactness then gives the full decomposition (T^-/I^-) tensor C tensor (T^+/I^+) without any new assumption. Use the existing tensor right-exactness suppliers, rather than cite tensor-algebra universal properties for quotient kernels as the current F4 does.

These arguments prove the two currently missing inputs for every finite symmetrizable datum, including singular Cartan matrices and arbitrary permitted toral lattices. Half-PBW ranks then come from the repaired generic pairing/PBW supplier; they are not required for the normal-word injectivity proof.

### Full unsymmetrized B2 witness preserving the assigned claim

Define a four-dimensional k-vector space with basis v_0,v_1,v_2,v_3. Its K_1 exponent list is (0,-1,1,0), and its K_2 exponent list is (-1,1,-1,1); K_i acts by q to that exponent. Set

    E_1 v_1=v_2,       F_1 v_2=v_1,
    E_2 v_0=v_1,       E_2 v_2=v_3,
    F_2 v_1=v_0,       F_2 v_3=v_2,

and set every unlisted E/F action to zero. This realizes the unsymmetrized full presentation with A=[[2,-1],[-2,2]], q_1=q_2=q, and torus freely generated by K_1,K_2. The E_1 arrow changes the two exponents by (2,-2); each E_2 arrow changes them by (-1,2), exactly the required toral actions; F arrows reverse those shifts. The diagonal entries of [E_1,F_1] are (0,-1,1,0), and those of [E_2,F_2] are (-1,1,-1,1). Since each exponent is 0 or ±1, these are precisely (K_i-K_i^{-1})/(q-q^{-1}). The two off-diagonal mixed commutators vanish on every vector.

E_1^2=E_2^2=F_1^2=F_2^2=0. Also E_1E_2E_1=F_1F_2F_1=0, since no composable arrow sequence has colors 1,2,1. Thus S^±_12=0. Every summand of the length-four S^±_21 contains a square of the color-2 operator (the middle summands contain one as well), so S^±_21=0. All defining relations therefore hold in this full representation; no Borel embedding or triangular decomposition is assumed.

Let D_i denote the proposed coproduct operator E_i tensor K_i^{-1}+1 tensor E_i. Directly on v_0 tensor v_1,

    D_1^2 D_2 = (1+q^{-2}) v_2 tensor v_2,
    D_1 D_2 D_1 = v_2 tensor v_2,
    D_2 D_1^2 = 0.

Consequently Delta(S^+_12) acts as (1+q^{-2}-q-q^{-1})v_2 tensor v_2=q^{-2}(1-q)(1+q^2)v_2 tensor v_2, which is nonzero. This closes the original full-quotient Serre counterexample with the same displayed coefficient. For an even shorter independent witness, Delta(E_1) and Delta(F_2) have commutator (q-1)K_2E_1 tensor F_2K_1^{-1}; its action on v_1 tensor v_1 is (q-1)v_2 tensor v_0, so the proposed map also fails the off-diagonal mixed relation.

The representation interprets the torus as the two independent node symbols of the unsymmetrized test presentation. It is not a symmetrizable datum with q_i=q^{d_i}; the whole purpose is to test the explicitly changed node-parameter assignment. State this test presentation fully in the counterexample.

An exact rational matrix check at q=2 passed all four toral E relations, all four toral F relations, all four mixed commutators, both positive and negative Serre families, and the tensor witness coefficient -5/4. The reproducible stdlib script is `...-quantum-normalization-sources/b2-full-quotient-check.py`. This checks one specialization; the general rational-function proof is the explicit symbolic calculation above. An attempted SymPy check could not run because SymPy is unavailable; no symbolic-machine verification is claimed.

### Fresh downstream defects requiring focused correction

The newly authored triangular theorem still has false part (iii): with positive indices beta_±, total degree is beta_+-beta_-, not beta_++beta_-. In particular U_q(g)[0] includes F_iE_i and is much larger than U_q^0. State the direct sum over beta_+-beta_-=beta, with potentially infinite rank. If stating a U_q^0-module structure, specify left multiplication by the toral subalgebra; each homogeneous negative/positive pair gives a free toral copy after the scalar conjugation twist. There is no reason to single out beta=0 for a different formula.

The string theorem should define its source rank-one algebra explicitly as k<e,f,k^{±1}> with k e k^{-1}=q_i^2 e, k f k^{-1}=q_i^{-2}f and [e,f]=(k-k^{-1})/(q_i-q_i^{-1}). A full rank-one datum with P^vee=Z h and symmetrizer d_i includes the additional generator K_h, with K_i=K_{d_i h}; it is not in general generated by K_i alone. The explicit standard rank-one presentation avoids this lattice mismatch while preserving all string claims.

Prove its cyclic-module basis using the rank-one normal-word basis: the left ideal A_i E_i kills the positive-exponent terms, and A_i(K_i-q_i^N) quotients the surviving Laurent toral factor by evaluation K_i=q_i^N. Hence the quotient is freely based by F_i^t v_N. Then the span t>=N+1 is the exact submodule generated by F_i^{(N+1)}v_N from the displayed action formulas, proving quotient independence. Do not infer independence in a module quotient merely from independence in the algebra. The current sentence saying toral terms m!=0 are absorbed is inaccurate: F^t K^m maps to q_i^{Nm}F^t, rather than to zero. State this evaluation.

The rank-one example's statement (ii) writes E K^{-1}-E K=0 for the right antipode identity. Its proof correctly computes E S(K^{-1})+S(E)=E K-E K=0; synchronize the statement with that proof. The oscillator nonvanishing argument itself supplies the promised independent witness and does not need the triangular theorem.

### Bounded integration choice

Round 1 can repair the original supplier chain, rebuild the genuine tensor-space crossed-double lemma using the two local arguments above, make triangular decomposition unconditional, restore its correct total grading, reconcile the string-module quotient proof and lattice convention, fix the literal antipode statement, and complete the full B2 counterexample with the explicit module. This needs no two new named lemmas and no unproved assumptions. Existing source locators support the route: Berkeley Lemma 13.1.3.21/Theorem 13.1.3.22 print the commutator and ideal-interface statements, while the finite normal-form and commutator calculations here supply the omitted local details; Enriquez supplies the general symmetrizable half-PBW ranks, and JKK supplies the exact inverse-K coproduct convention. Preserve the root's appended owner direction and re-read all stable carriers before execution. Round 2 remains reserved for concrete review/gate findings after those edits and evidence refresh.


## Current status after authorized repair

Focused repair round 1 is complete. The authoritative current mathematical changes, checks, before carriers, source hashes, consumer closure and root-owned certification work are recorded in [the round-1 report](frontier-43-complex-representation-15-quantum-normalization-round1.md). The preparatory routes and open obligations above are historical and are superseded by that completed repair. No round-2 work has started.
