# Type-I measurable splitting: bounded supplier-first repair

Run frontier-43-complex-representation-15; 2026-10-07. Only this receipt was edited. Native batch-1 manifests, readiness decisions, coverage, reports and item files were read but not written. This pass repairs the mathematical direction in a concrete, integration-ready form; it does not certify unwritten items or discharge the separate Glimm H1/H2 holds.

## Confirmed defects and repair order

Read the current batch-1 entries for `lem-polar-decomposition-and-nonzero-partial-isometries-in-factors`, `lem-separable-type-i-factors-are-multiples-of-irreducible-representations`, `lem-multiplicity-of-a-type-i-factor-representation-is-well-defined`, the measurable splitting lemma, its named selection/field prerequisites, and its direct irreducible-disintegration consumer; also read the splitting readiness escalation. The two escalated measurable steps are real gaps. There are additionally algebraic orientation errors in their single-fibre supplier, so repair suppliers first:

1. Polar decomposition: for x = p x q and x = v|x|, one has v* v ≤ q and v v* ≤ p. The current strategy reverses them. Its existential statement of comparability can be retained by reversing the chosen x when necessary; the proof must match the chosen orientation.
2. The single-fibre structure supplier selects minimal projections of M but treats pH as an irreducible carrier. This is false: if M = B(K) tensor I_L, then a minimal p in M has pH isomorphic to L (the multiplicity space), and pH need not be invariant under M. Its claimed unitary carrier statement must be corrected as below. This is an alteration of the supplier's original statement, so its direct and indirect consumers must be reconciled before release.
3. The measurable splitting strategy mixes minimal projections of M and M′, then defines m as dim(qH) for q minimal in M′. Here qH is the irreducible carrier; its dimension is not the multiplicity. All selected projections used to split the representation into equivalent invariant summands must lie in N = M′. Multiplicity is the number of summands, or equivalently the dimension of the abstract Hilbert space on which N acts as a full operator algebra.
4. Minimal-projection fibres and partial-isometry solution sets are Borel, but are not established WOT-compact. For example on l2, rank-one projections onto (e1+en)/sqrt(2) converge weakly to (1/2)P_e1, which is not a projection. Thus the compact-graph selector cannot select minimal projections or matrix units by the current argument.
5. An arbitrary greedy sequence of orthogonal minimal projections can leave a nonzero residual corner. Countability is not maximality or exhaustion. Replace it with the quantitative faithful-state exhaustion below.

## Source evidence actually read

Re-fetched full sources because the temporary copies from the earlier turn no longer existed. Blackadar https://bruceblackadar.com/Mathematics/Cycr.pdf, 561 PDF pages, SHA-256 `8cb61a8348efe6e4b36dbefed4eac2c35498d28c03e160638ad7af952457f88a`. Read III.1.5.1–5 in full: the matrix-unit convention, spatial type-I factor structure and commutant calculation, printed pp. **247–248**, PDF pp. 255–256. The current manifest locator “III.1.5.1–5, pp.253–255” is inaccurate and should be replaced.

Bekka–de la Harpe https://arxiv.org/pdf/1912.07262, 445 PDF pages, SHA-256 `f478a69afaed8df5a38ee316f4d625ee809a6ebe4b05439ef265c992189019d4`. Re-read Theorem 6.D.4's measurable projection construction, printed pp.199–201, and Appendix A.C.6, printed p.409. A.C.6 states the needed conull Borel selector for a Borel relation with nonempty fibres and refers its proof to Mackey 1976, Theorem Z.2. This is not a proof in the fetched text. Blackadar's matrix-unit passage supplies the single-fibre algebraic construction; neither passage supplies a complete local general conull selector. No new broad Glimm source audit was conducted.

## Corrected single-fibre supplier: complete algebraic construction

Assume AC, nonzero separable H, and a concrete type-I factor M. Fix a nonzero minimal p in M. Use Zorn to choose a maximal orthogonal family (p_i) of projections equivalent to p. Its sum is I: if residual r is nonzero, factor comparison gives a nonzero partial isometry whose initial projection lies under p and final projection under r; minimality makes the initial projection p, hence its final projection is another equivalent minimal projection under r, contradicting maximality. Separability makes the family finite or countable.

Choose i0 with p_i0 = p and partial isometries t_i in M with t_i* t_i = p and t_i t_i* = p_i; take t_i0 = p. Put L = pH and E = l2(I). Define

W:E tensor L → H, W(delta_i tensor eta) = t_i eta.

Orthogonality gives an isometry, and sum p_i = I gives surjectivity. Let e_ij = t_i t_j*. For a in M, t_i* a t_j lies in pMp = C p, so equals a_ij p. Thus W* a W has scalar operator blocks a_ij I_L and equals A tensor I_L for a unique bounded A on E, with ||A|| ≤ ||a|| (test on vectors z tensor a fixed unit eta). Conversely all finite matrix blocks A_F tensor I_L belong to W*MW through e_ij. Finite-coordinate compressions of any A in B(E) converge strongly to A, so W*MW = B(E) tensor I_L. This is the correct statement when minimal projections are selected in M.

The commutant is I_E tensor B(L): commuting with coordinate projections and every scalar matrix unit forces all off-diagonal blocks zero and every diagonal block equal; the converse is pointwise. In particular N = M′ is itself a type-I factor.

If pi(G)″ = M, write W*pi(g)W = sigma(g) tensor I_L. The group and unitary identities give a unitary representation sigma on E. Strong continuity follows by testing against z tensor one fixed unit eta in L. Its commutant is scalar, since sigma(G)″ = B(E), so sigma is irreducible. Hence the representation is m copies of sigma with m = dim L. The unitary H → E^{oplus m} is obtained from W* by expanding the L coordinate in an orthonormal basis of L. The carrier is E, **not pH = L**. This preserves the promised amplification claim while correcting its explicit carrier formula.

Equivalent alternative for the statement most useful to the measurable consumer: choose a minimal projection q in N = M′; put K = qH; choose an exhaustive family (q_i) of equivalent orthogonal minimal projections in N; select u_i in N with u_i* u_i = q_i, u_i u_i* = q (u_1=q). Then

V:H → K^{oplus m}, V xi = (u_i xi)_i, m = number of q_i.

The inverse is (eta_i) → sum_i u_i* eta_i. Norm identities and exhaustion prove these are inverse unitaries. Every u_i commutes with pi(g), so Vpi(g)V^{-1} = sigma(g)^{oplus m}, with sigma = pi|K. Its commutant is qNq = Cq, hence sigma is irreducible. Use this commutant version in the measurable supplier.

Multiplicity uniqueness remains sound after this correction: N in the amplification is B(l2(m)) tensor I_K. Isomorphism of the commutants distinguishes finite m by algebra dimension m² and infinite m by infinite-dimensionality. Equivalent minimal projections in the commutant give equivalent restrictions of pi because their connecting partial isometries commute with pi. Thus the irreducible class and multiplicity are invariant. Reconcile the uniqueness item's link to the corrected carrier supplier; do not reuse its former pH carrier.

## Measurable replacement: exhaustion without a measurable Zorn argument

The following proof is complete **conditional on the precise local conull Borel uniformization supplier specified below** and on the separately proved measurable commutant-field/dimension-trivialization prerequisites. It replaces both faulty greedy exhaustion and matrix-unit selection, with one explicit remaining prerequisite rather than a claim of completion.

Pass to countably many constant-dimension strata and trivialize H_x measurably. Set N_x=M_x′; it is a measurable type-I factor field by the corrected single-fibre lemma and the commissioned commutant-field lemma. Its unit ball can be represented by countably many WOT-dense measurable sections. Use a measurable orthonormal fundamental frame (f_j), allowing f_j=0 beyond the fibre dimension, and put

phi_x(T) = sum_{j≥1} 2^{-j} <T f_j(x), f_j(x)>.

For positive T this is a finite faithful normal functional; its total value on I is at most 1, and positive on every nonzero projection. No normalization is needed. Matrix coefficients and bounded countable sums show it is jointly Borel on bounded operator fields.

On a fixed dimension stratum the set of pairs (x,q) with q a nonzero minimal projection in N_x is Borel. Spell this out: q=q*=q², q≠0; q commutes with the countable generators of M_x; and for every member a_j(x) of a WOT-dense countable family in (N_x)_1,

q a_j(x) q = [phi_x(q a_j(x) q)/phi_x(q)] q.

These countable equations characterize qN_xq=Cq: for fixed q, compression is WOT-continuous, and phi_x is WOT-continuous on bounded balls by the uniformly convergent coefficient series. All products are Borel on bounded operator balls (their matrix coefficients are limits of finite coordinate sums); WOT continuity of joint multiplication is neither required nor true. This graph is not presumed compact.

Construct residual r_0=I. At step n let s_n(x) be the supremum of phi_x(q) over minimal projections q in N_x with q≤r_{n-1}; set s_n=0 if r_{n-1}=0. Every nonzero residual in a type-I factor contains a minimal projection, so s_n>0 there. The sets {s_n>t} are projections of Borel sets, hence analytic. The local selection prerequisite must include their measurability in the completed sigma-finite base measure. Replace s_n by a Borel version outside a Borel null set. Select q_n with q_n≤r_{n-1} and phi_x(q_n)>s_n(x)/2; set q_n=0 on the zero-residual set. The conull Borel selector applies to this nonempty Borel relation. Put r_n=r_{n-1}-q_n. These operations are measurable. Iterate countably and discard the union of the exceptional Borel null sets once.

**Exhaustion proof.** At fixed x, suppose r_infty=strong-limit r_n is nonzero. It is a projection in N_x and contains a nonzero minimal q. Faithfulness gives c=phi_x(q)>0. Because q≤r_{n-1} at every step, s_n≥c, so phi_x(q_n)>c/2 for every n. Orthogonality implies sum_n phi_x(q_n)≤phi_x(I)≤1, contradiction. Thus sum_n q_n=I. This quantitative rule, unlike arbitrary greedy selection, forces exhaustion.

Select q_1 as above; it is nonzero everywhere on the retained nonzero-field base. Set K_x=q_1(x)H_x with fundamental sections q_1 f_j; this is a measurable Hilbert subfield. Let m(x) be the number of nonzero q_n(x), a value in {1,2,...,infinity}. Since the construction stops only at r=0 and keeps all later q_n zero, {m≥n}={q_n≠0}, a Borel set. This m is the multiplicity; dim K_x is the irreducible carrier dimension and can differ from m.

On {q_n≠0}, choose u_n(x) in N_x satisfying u_n* u_n=q_n and u_n u_n*=q_1. The solutions are nonempty by the factor/minimal-projection structure. Their graph is Borel by the same countable commutation and operator-product test. Apply the **general conull Borel selector**, not the compact selector; take u_1=q_1 and u_n=0 where q_n=0. Remove countably many null exceptional sets. No independent selection of all matrix units is needed: u_i* u_j gives the compatible units automatically.

Define sigma_x=pi_x|K_x and V_x xi=(u_n(x)xi) over n with q_n≠0. The single-fibre inverse formula proves V_x unitary and the amplification identity. Measurability of K, direct-sum field, V and V^{-1} follows from their countable fundamental matrix coefficients; sum expressions are pointwise norm limits. Restriction preserves strong continuity, and q_1N_xq_1=Cq_1 gives irreducibility. All group identities hold for every g at each retained x because the operators are chosen in the actual fibre commutant, not by taking uncountably many null complements. The corrected uniqueness supplier gives the final invariant pair.

## Exact remaining prerequisite; no invented closure

Commission `lem-borel-relations-admit-conull-borel-uniformizations` before the measurable splitting lemma. Its statement must cover: X a sigma-finite standard-Borel measured space; Y standard Borel; R⊆X×Y Borel with nonempty fibres; existence of a selector Borel on a conull Borel subset; and completed-measure measurability of analytic projections plus Borel versions for the scalar suprema used above. This is the measure-specific von Neumann/Jankov-von-Neumann form, not a claim of a global Borel selector on all X.

A plausible finite proof route is closed-witness coding of Borel/analytic relations, least-index nested-ball/prefix selection in a Polish presentation of Y with a Baire-space witness, analytic measurability for arbitrary finite Borel measures, and conversion of the completed-measurable selector to a Borel version on a conull set; sigma-finite measures reduce to an equivalent finite probability measure as in Bekka A.C.5. Each of the analytic-measurability and coding assertions needs a full local proof or a proved local supplier. **This receipt does not supply those proofs.** Bekka A.C.6 explicitly refers its proof out. The precise smallest hold is this general conull uniformization/analytic-measurability interface; the exhaustion and compatible-unitary reconstruction above have no further measurable maximal-family gap once it is supplied.

The compact-graph selector may remain as a prerequisite of other field lemmas if they truly meet its hypotheses; it does not satisfy this new interface. Mark the single-fibre carrier supplier owner-escalated until corrected, then its multiplicity uniqueness consumer, then the splitting lemma. Splitting remains held on the uniformization supplier. Reconcile `thm-irreducible-direct-integral-decomposition-for-type-i-groups` and `thm-essential-uniqueness-of-type-i-irreducible-disintegration` only after their suppliers close. The former still independently needs the held smooth-dual H2 to transport to the dual, and this repair does not resolve H1/H2 or RG-30's held uses.

Bounded-pass exit: actual algebraic errors corrected in an integration-ready supplier construction; measurable exhaustion proved by a faithful-state estimate; matrix units reduced to countably many compatible partial isometries; the one precise unsupplied selection interface stated; no active content certified or claim narrowed.
