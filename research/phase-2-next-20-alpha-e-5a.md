# Step 5A Alpha group e — authored-content review (batches 7, 8, 9)

Run: `phase-2-next-20`. Group `e` covers batches 7 (HA-16 double complexes/exact couples), 8 (AT-6 singular cohomology + AT-11 fibrations) and 9 (DG-16 smooth singular comparison + DG-19 connections/Levi-Civita).

Method: each manifest item and all pages of every assigned pair were read at the post-splice authored state; statements, proof steps, cited hypotheses, boundary cases and declared AC/DC uses were checked against the item dependencies and, where needed, against the cited sources (Weibel Chapter 5 PDF, Stacks tags 011P/011Q/012K read live, Hatcher/Miller/Park/Datar passages as named in the contracts). HIGH/CRITICAL items additionally recorded a `risk_review` disposition in their owning batch contract during this read. No item mathematics was found defective; the only two edits are stale-record wording repairs listed under Edits.

Verdict totals across the 225 obligations (215 items + 10 pages): 223 accepted, 2 repaired (both stale-record wording; mathematics unchanged), 0 escalated.

## Batch 7 — double-complexes-exact-couples-and-convergence

### item — def-homological-double-complex

Decision: accepted. Signs, bidegrees and morphism conditions checked: h^2=0, v^2=0 and hv+vh=0 are stated at the correct Hom(C_{p,q},C_{p-1,q-1}) targets; morphisms are required to commute with both differentials with matching indices; first-quadrant vanishing and zero-object support are explicit and no infinite sum, completeness or choice is assumed. Stacks 12.18.1 translated convention matches the item reference.

### item — rem-commuting-versus-anticommuting-double-complex-conventions

Decision: accepted. The twist v~=(-1)^p v computed on both mixed composites gives (-1)^p hv + (-1)^(p-1) vh = 0 under hv=vh; v~^2=(-1)^{2p}v^2=0; the twist square is the identity and equal p on source and target keeps morphisms commuting. Total differential h+(-1)^p v in the commuting convention is consistent with def-homological-double-complex, and the warning against a second twist is correct.

### item — def-direct-sum-total-complex-of-a-double-complex

Decision: accepted. d_n is defined by the coproduct universal property from two-term injections with matching targets, so no infinite morphism sum is used; degree -1 and the chain condition (deferred to lem-the-total-differential-squares-to-zero) are correctly attributed; existence of diagonal coproducts is a hypothesis, zero and singleton diagonals discussed correctly. Interfaces def-products-and-coproducts match the injections iota^n_{p,q}.

### item — lem-the-total-differential-squares-to-zero

Decision: accepted. Step 1.1 expands d^2 on each injection iota^n_{p,q} into the three Hom(C_{p,q},T_{n-2}) terms; step 2.1 kills them by h^2=0, hv+vh=0 and v^2=0; step 3.1 concludes by coproduct uniqueness. The expansion and index shifts (p-2, p-1,q-1, q-2 with n-2) were recomputed and are correct, including zero targets and single-supported diagonals.

### item — def-product-total-complex-of-a-double-complex

Decision: accepted. The coordinate formula pi^{n-1}_{a,b} d_n = h_{a+1,b} pi^n_{a+1,b} + v_{a,b+1} pi^n_{a,b+1} was recomputed; the displayed double-composition through pi^{n-2}_{a,b} yields exactly h^2, hv+vh and v^2 terms vanishing, so the chain condition holds without a finite-support assumption; products are an existence hypothesis and zero/singleton diagonals are covered.

### item — prop-sum-and-product-totalisations-agree-on-finite-diagonal-double-complexes

Decision: accepted. Step 1.1 adjoins zero objects to the finite biproduct over nonzero components, step 2.1 identifies eta with the invertible finite biproduct comparison, step 3.1 tests d^P eta and eta d^T on injections and projections (both give h or v), and step 4.1 concludes the inverse is a chain map. Finite-diagonal hypothesis is used only to get finite biproducts; empty and singleton diagonals are handled. Interfaces def-biproduct/def-additive-category supply finite biproducts.

### item — lem-countable-sequence-groups-and-tail-filtrations

Decision: accepted. Recomputed: S=k^(N) as coproduct and P=k^N as product (step 1.1); binary encoding bijection S->N with unique division by 2 (step 2.1, needs thm-division-algorithm-in-z only); A/T_m A=k^m with kernel T_m and intersection of tails zero (2.2); diagonal argument gives P uncountable, so S->P injective non-surjective (3.1); inverse limit L with explicit mutually inverse formulas via initial segments (3.2); step 4.1 identifies completions with P. No AC is used and the claim is consistent with tails T_m defined by zero below index m.

### item — cex-sum-and-product-totalisations-can-differ-on-infinite-diagonals

Decision: accepted. Witness C_{j,-j}=Z/2 for j>=0 with zero arrows: all squares and mixed composites vanish; degree-zero total objects are the coproduct S and product P of lem-countable-sequence-groups-and-tail-filtrations, all other degrees zero, total differentials zero. An isomorphism would biject S onto P, contradicting uncountability of P; the canonical comparison misses the constant-one sequence. Square-zero and anticommutation checks are trivial but correct.

### item — def-row-and-column-filtrations-of-a-first-quadrant-double-complex

Decision: accepted. F^col_s T_n = direct sum over p<=s, F^row_s T_n over q<=s of C_{p,q} are split subobjects and filtered subcomplexes since h lowers p and v lowers q; vanishing for s<0 and equality with T_n for s>=n>=0 checked; associated graded of F^col is C_{s,t} with differential v and of F^row is C_{t,s} with differential h in spectral coordinates (s,t). The latter transposition is exactly what the row/column spectral sequence theorems use.

### item — thm-the-row-filtration-spectral-sequence-of-a-first-quadrant-double-complex

Decision: accepted. Step 1.1: quotient of total degree p+q by row cutoff p-1 is C_{q,p}, d^0=h; 2.1: E^1_{p,q}=H^h_q(C_{*,p}) and d^1=[x]->[vx] checked including the horizontal-cycle/boundary computation hv=-vh; 3.1: E^2=H^v H^h with bidegree (-r,r-1); 4.1: degreewise bounded filtration F^row_{-1}=0, F^row_n=T_n gives abutment to the image filtration via the bounded filtered theorem. The transposed row index convention matches def-row-and-column-filtrations; dependency interfaces (next-page homology, filtered-differential, subquotient calculus, bounded abutment) read and applicable.

### item — thm-the-column-filtration-spectral-sequence-of-a-first-quadrant-double-complex

Decision: accepted. Step 1.1 transposition D_{a,b}=C_{b,a} with h^D=v^C, v^D=h^C is again an anticommuting first-quadrant double complex and the finite summand permutation is a filtered chain isomorphism carrying rows to columns with no sign; step 2.1 applies the row theorem to D giving E^1_{p,q}=H^v_q(C_{p,*}), d^1=h, E^2=H^h H^v; step 3.1 transports the finite image filtration. All indices recomputed; zero column and n=0 cases covered.

### item — prop-the-two-double-complex-spectral-sequences-have-the-same-abutment-but-not-the-same-pages

Decision: accepted. Step 1.1 common unfiltered target H_*(Tot) for both constructions. Witnesses checked: (a) C_{1,0}=C_{0,0}=k, h=1: row E^1=0 while column E^1 has k at (1,0),(0,0) with d^1=1_k, so column E^1 nonzero E^2=0; total complex k->k has zero homology - early pages differ. (b) C_{1,0}=k only: H_1(T)=k, F^row_0H_1=k but F^col_0H_1=0<F^col_1H_1=k - filtrations differ. All witnesses finite and explicit.

### item — thm-acyclic-assembly-lemma-for-a-first-quadrant-double-complex

Decision: accepted. Projection rho kills positive vertical homology and is the identity on B_p=H^v_0(C_{p,*}) (step 1.1 chain map checked: on C_{p,1} the surviving output is a vertical boundary; on C_{p,q}, q>1 both outputs have positive vertical degree). Regarded as a map of column-filtered complexes it is an E^1-isomorphism (step 2.1) hence E^r-isomorphism for all r by natural transitions. E^1 supported on q=0 forces E^2=E^infinity (step 3.1), and in degree n the only nonzero quotient is at p=n, giving F_{n-1}=0, F_n=H_n; naturality of the abutment makes H_n(rho) that sole graded isomorphism (step 4.1). Row variant by transposition (5.1). Verdict supported by these checks.

### item — def-exact-couple

Decision: accepted. Bidegrees recomputed: i:(1,-1), j:(1-r,r-1), k:(-1,0); each is total-degree preserving; the three exactness equations are stated at the correct vertices (im i_{p-1,q+1}=ker j_{p,q}; im j_{p+r-1,q-r+1}=ker k_{p,q}; im k_{p+1,q}=ker i_{p,q}) and imply the consecutive zero composites; morphism compatibility is stated for all three maps; r=1 initial couple convention j degree (0,0) with first page called E^1 is consistent with the following definitions.

### item — def-differential-associated-to-an-exact-couple

Decision: accepted. d_{p,q}=j_{p-1,q}k_{p,q} was recomputed: k maps E_{p,q}->D_{p-1,q}, j_{p-1,q} maps D_{p-1,q}->E_{p-r,q+r-1}, so total degree drops by one and bidegree is (-r,r-1); r=1 gives (-1,0); square-zero deferred to the following lemma and no section or preimage selection is built into the definition.

### item — lem-the-exact-couple-differential-squares-to-zero

Decision: accepted. Step 1.1 uses exactness at E_{p-r,q+r-1} to get k_{p-r,q+r-1}j_{p-1,q}=0 (indices recomputed: im j_{p+r-1-r, q-r+1+r-1}=im j_{p-1,q}); step 2.1 substitutes d twice with associativity: j(kj)k=0, target E_{p-2r,q+2r-2} correct for bidegree (-r,r-1) composed. Valid for all r>=1 without choice.

### item — def-derived-exact-couple

Decision: accepted. D'_{p,q}=im(i_{p-1,q+1}) and E'_{p,q}=ker d_{p,q}/im d_{p+r,q-r+1} are the standard derived data; degree checks: i' (1,-1) unchanged, j': D'_{p,q}->E'_{p-r,q+r} has degree (-r,r) as required for page r+1, k' (-1,0); local formulas j'(ix)=[jx], k'([e])=ke with d-cycle e match the well-definedness lemma; no section of i or quotient map is part of the definition; zero objects allowed.

### item — lem-the-derived-couple-maps-are-well-defined

Decision: accepted. Step 1.1: i restricted to im i lands in im i and factors uniquely through the monic inclusion. Step 1.2: dj=jkj=0, and j kills ker i=im k because jkz=dz; independence of preimage ix=iy via x-y in ker j=im i. Step 1.3: k on ker d lands in ker j=im i (jke=de=0) and kills boundaries since kdz=kjkz=0. Degrees (-r,r) for j' verified by the local i-preimage at D_{p-1,q+1}. Descent is by epic local lifting, not global choice.

### item — thm-the-derived-couple-is-exact

Decision: accepted. All three index chases recomputed independently. (1) ker j'=im i': from [jx]=0 get jx=jkz with z at E_{p,q+1}, then x-kz in ker j=im i, so a=ix=i^2y in im i_{p-1,q+1}; converse from ji=0. (2) ker k'=im j': ke=0 gives e=jx with x at D_{p+r-1,q-r+1}, so [e]=j'(ix); converse kj=0. (3) ker i'=im k': ia=0 gives a=ke with e at E_{p+1,q}; a in im i gives ja=0 hence de=jke=0, so [e] is a cycle class; converse ik=0. Zero-object cases are the zero composite identities, and no sections are used.

### item — thm-an-exact-couple-generates-a-spectral-sequence

Decision: accepted. N^r=k^{-1}(im i^{r-1}:D_{p-r,q+r-1}->D_{p-1,q}) and B^r=j(ker i^{r-1}:D_{p,q}->D_{p+r-1,q-r+1}) were checked against Stacks 12.21.3-12.21.4 (read live at tag 011P: Z_{r+1}=f^{-1}(Im a^r), B_{r+1}=g(Ker a^r), with Stacks f=k, g=j) and Weibel Exercise 5.9.1 (E^r=Z^r/B^r, Z^r=k^{-1}(i^r D), B^r=j(ker i^r)). Step 1.1 iteration, step 2.1 differential rule d^r[e]=[jx] for ke=i^{r-1}x, step 3.1 kernel=N^{r+1} (jx=jz with i^{r-1}z=0 gives x-z=iy and ke=i^r y; conversely ke=i^r y take x=iy), incoming image=B^{r+1}/B^r, step 4.1 iteration compatibility, all recomputed. Staleness note: the source-note sentence claiming the Step 3 escalation remains is stale because owner decision research/phase-2-next-20-step3b-owner-thm-...-criterion.json repaired it; the mathematics is unaffected.

### item — thm-a-filtered-complex-produces-an-exact-couple

Decision: accepted. D^1_{p,q}=H_{p+q}(F_pC), E^1_{p,q}=H_{p+q}(F_pC/F_{p-1}C); the LES segment D^1_{p-1,q+1}->D^1_{p,q}->E^1_{p,q}->D^1_{p-1,q}->D^1_{p,q-1} was recomputed from the degreewise short exact sequence of complexes and gives the three exact-couple equalities with degrees (1,-1),(0,0),(-1,0). No boundedness or completeness is used; the construction is componentwise and choice-free (Weibel Example 5.9.3, read).

### item — prop-the-exact-couple-and-subquotient-constructions-of-the-filtered-complex-spectral-sequence-agree

Decision: accepted. A^r_{p,n}=F_pC_n cap d^{-1}F_{p-r}C_{n-1} matches the standard page model; step 1.2 gives the positive-sign connector k([c])=[dc]; step 2.1 shows the N^r membership condition dc=z+db is exactly A^r; step 3.1 computes the inverse image of B^r as A^{r-1}_{p-1,n}+d A^{r-1}_{p+r-1,n+1} (both directions recomputed); step 4.1 identifies the exact-couple differential [c]->[dc] on the same subquotients. Weibel Theorem 5.9.4 and its proof (printed pp.155-156, read as extracted full text) state exactly this natural isomorphism via the same numerators/denominators.

### item — def-regular-spectral-sequence

Decision: accepted. Two-sided regularity is explicitly defined as eventual vanishing of both incident differentials, with the design-term warning against the Stacks 12.24.7 outgoing-only meaning; pointwise stationarity follows because the next-page isomorphism has kernel E^r and zero incoming image, so E^{r+1}=E^r canonically. First-quadrant bounds r>p and r>q+1 checked; no collapse page or AC is assumed.

### item — def-weak-convergence-of-a-spectral-sequence

Decision: accepted. Weak convergence is defined as a specified isomorphism E^inf_{p,q}->F_pH_{p+q}/F_{p-1}H_{p+q} together with the actual-cycle prescription; it does not assert exhaustiveness, separatedness or completeness and does not identify H with its associated graded. Every clause matches Stacks 12.24.9's weak-convergence convention translated to increasing homological indices; the stationarity alternative for the limiting page is explicitly allowed.

### item — def-strong-convergence-of-a-spectral-sequence

Decision: accepted. Strong convergence = weak convergence plus two-sided regularity plus exhaustive, separated, complete target filtration, with completeness stated as H_n -> lim H_n/F_pH_n an isomorphism and the finite-filtration case proved inline (constant lower tail). Decreasing-cohomological variant stated; source convention mismatch flagged. Matches Weibel 5.2.9/5.5.10 usage of complete convergence.

### item — thm-a-first-quadrant-filtered-complex-spectral-sequence-converges-to-filtered-homology

Decision: accepted. Degreewise finite filtration gives the bounded theorem's stabilization and the actual-cycle graded description F_pC_n cap ker d / ((F_{p-1}C_n cap ker d)+(F_pC_n cap im d)) (step 1.1); the image filtration is zero below a_n and full above b_n (step 1.2); the constant-tail inverse limit reproduces H_n (step 2.1); normalized endpoints F_{-1},F_n checked in step 3.1. No uniform bound over degrees and no AC is used; the Stacks 12.24.11 correspondence is correctly qualified by the local bounded supplier being the load-bearing input.

### item — def-lim-one-obstruction-to-completeness

Decision: accepted. Delta(x)_m=x_m-u_m x_{m+1} is a homomorphism; ker Delta is exactly the compatible-tuple limit (cone factorization unique, no choice) and lim^1 is defined as the specific cokernel, explicitly not identified with derived functors in general. The subgroup-tower completion sequence use is scoped to G_m=F_{-m}A; coordinate formulas and zero/identity transition cases checked.

### item — lem-countable-tower-completion-obstruction-exact-sequence

Decision: accepted. Sequence 0->cap G_m->A->lim A/G_m->lim^1 G_m->0 recomputed: step 1.1 well-definedness (a'_m=a_m+g_m gives b'=b+Delta(g)) and additivity; step 2.1 exactness at lim (constant representative; converse from Delta(g) gives constant a_0-g_0); step 2.2 surjectivity of partial-derivative map via a_m=-sum_{j<m}b_j with a_m-a_{m+1}=b_m; step 3.1 naturality and equivalence completeness <-> lim^1=0 for separated filtrations via cofinality. AC used exactly for countably many coset representatives, declared in deps. Matches Weibel 3.5.7/5.5.8 interface.

### item — lem-countable-tower-six-term-limit-sequence

Decision: accepted. Milnor sequence 0->lim A->lim B->lim C->lim^1 A->lim^1 B->lim^1 C->0 recomputed: step 1.1 lifting and connecting class with independence b->b+a; steps 2.1-2.3 all six exactness positions (ker at lim C; image at lim^1 A; ker at lim^1 B via b-Delta t in P(A)); step 1.3 surjective transitions give R=0 and limit projections onto (right-inverse recursion x_{m+1}=s_m(x_m-y_m)); step 1.4 finite-tail invariance including the backwards recursion. Infinite selections are exactly those declared under AC.

### item — lem-two-by-two-delta-complex-for-a-double-tower

Decision: accepted. The three-term complex P->P+ P->P with maps (D,E) and (E,-D) is a complex because DE=ED on commuting squares (both composites computed coordinatewise); H^0=L_iL_j, H^2=P/(EP+DP) with W=P/EP~prod_i R_jA (kernel=EP needs one Delta-preimage per row, AC declared) and H^2~R_iR_j; the middle sequence 0->R_iL_j->H^1->L_iR_j->0 is established by the V=ker E and W-mod-D constructions in steps 2.1-3.1; step 6.1's swapped system maps (a,b)->(b,a) with -1 in degree 2 and yields the vanishing consequence. Index/degree bookkeeping verified.

### item — lem-boardman-approximate-cycle-obstruction-sequence

Decision: accepted. Recomputed the whole interface: A(p,t)=F_pC_n cap d^{-1}F_tC_{n-1}, Z_p=F_pC_n cap ker d, S(p,t)=image in F_p/F_{p-1}, Q_p=R_tA(p,t). Step 4.1 gives 0->A(p-1,t)->A(p,t)->S(p,t)->0 and the Milnor sequence of [F3] yields 0->Z_{p-1}->Z_p->S(p,inf)->Q_{p-1}->Q_p->R_tS(p,t)->0 with L_tA(p,t)=Z_p (separatedness) and L_tS(p,t)=S(p,inf). Step 2.1: for p<=t, A(p,t)=F_pC_n, whose p-tower has L=0 (separatedness) and R=0 (completeness via the obstruction lemma); step 2.2 constructs per-tuple antiderivatives x_m with x_m-x_{m+1}=y_m via compatible finite residue sums, so R_pZ_p=0; step 3.1 applies the 2x2 Delta lemma to get L_pQ_p=0. Both vanishings and the completeness hypotheses are used exactly as stated. AC consumption is confined to the cited tower lemmas.

### item — thm-complete-exhaustive-filtered-complex-convergence-criterion

Decision: repaired [defect_ids: p2-next20-5a-e-convergence-stale-escalation-note]. All seven proof steps were independently checked (details in the batch-7 contract risk_review): the kernel description S(p,p-r-1)/bar B^r, bounded primitive descent via E^a_{s,n+1-s}=0, the Milnor sequence on 0->B_n cap F_{-m}->Z_{-m}->F_{-m}H_n->0 with R_mZ=0, outgoing vanishing <=> eventual constancy of S(p,t) with Q_p=0, E_infinity=Gr_pH_n with actual cycles, closedness of d(F_PC) and of B_n, and the incoming vanishing from the diagonal bound. Compared against Weibel Cor 5.5.8, Prop 5.5.9, Thm 5.5.10 (full chapter PDF read); the Grothendieck 5.8.7 route is replaced by the local Delta lemmas and the precise diagonal hypothesis is stated. Local repair: the Source notes sentence asserting an open Step 3 escalation was stale after the owner repair decision of 2026-09-10T17:54:52Z; it now cites that record. Mathematics unchanged by the edit.

### item — prop-failure-of-separatedness-or-completeness-can-destroy-the-claimed-abutment

Decision: accepted. Three witnesses recomputed. (1) C_0=k with F_p=k for all p: all graded quotients 0 so every page is 0, H_0=k and cap F_p=k nonzero. (2) C_1=S->C_0=P inclusion with tail filtrations: graded quotients T_m/T_{m+1}=k and induced differential identity, so E^1=0 while H_0=P/S nonzero; H_0 filtration is all of P/S because tails map onto P/S, and the degree-one completion is the proper inclusion S->P. (3) S[0] vs P[0] with same tails: zero differentials keep the graded pieces k at (-m,m), targets S and P are nonisomorphic. Choice-free.

### item — lem-finite-and-complete-filtered-isomorphism-lifting

Decision: accepted. Step 1.1 is a correct short-five-lemma: monic via U and V isomorphism, epic via projection/lift and correction in U', invertible by coimage-image. Step 2.1 finite induction over a<p<=b gives filtered isomorphism. Step 1.2 identifies F_pA with lim_{k<p}F_pA/F_kA using completeness plus separatedness, and step 3.1 restricts to finitely filtered F_p/F_k, applies the finite case, and step 4.1 assembles the unique compatible inverse. No AC; no splitting.

### item — thm-spectral-sequence-comparison-theorem

Decision: accepted. Inverse of an isomorphism on page s commutes with differentials (multiply the square by inverses), so cycles/boundaries correspond and f_{r+1}=alpha H(f) alpha^{-1} is iso by induction (step 1.1). At each bidegree choose r beyond both stationarity bounds: the limiting map is an isomorphism and equals gr_p h_{p+q} by the abutment compatibility (step 2.1). Then lifting (step 3.1) via the finite/complete filtered isomorphism lemma. The statement explicitly requires compatible target maps and strong convergence as data and says a bare E^inf isomorphism gives nothing, which is exactly Weibel's comparison setup.

### item — cor-quasi-isomorphism-criterion-from-a-filtered-map

Decision: accepted. Step 1.1: page-one of the induced spectral morphism is the graded quasi-isomorphism (prop-e-one-is-homology-of-the-associated-graded-complex), so an entire page is an isomorphism; step 1.2 checks the homology image maps commute with the spectral map on actual cycles; step 2.1 applies the comparison theorem under the declared strong-convergence hypotheses; step 3.1 shows degreewise finite filtrations supply those hypotheses via the bounded abutment theorem and constant-tail completeness. No first-quadrant or uniform-bound assumption is smuggled in.

### item — thm-five-term-exact-sequence-of-a-first-quadrant-cohomological-spectral-sequence

Decision: accepted. Indices recomputed: (1,0) has zero incoming/outgoing, so E_2^{1,0}=F^1H^1 and the edge is monic; (0,1) has incoming only from (-1,*) and outgoing only at r=2, so E_inf^{0,1}=ker d_2=H^1/F^1H^1; (2,0) has outgoing zero and incoming only from (0,1), so E_inf^{2,0}=coker d_2=F^2H^2. Exactness at all four middle positions then matches, with no terminal surjectivity asserted. Normalization F^0=H^n, F^{n+1}=0 used exactly.

### item — thm-five-term-exact-sequence-of-a-first-quadrant-homological-spectral-sequence

Decision: accepted. Dual index check: (1,0) gives E^2_{1,0}=E_inf=H_1/F_0H_1 with epic edge; (0,1) yields E_inf=coker d^2=F_0H_1; (2,0) yields E_inf=ker d^2=H_2/F_1H_2. Exactness at E^2_{2,0}, E^2_{0,1}, H_1, E^2_{1,0} and the terminal zero verified; no initial injectivity asserted. Normalized endpoints F_{-1},F_n used explicitly.

### item — prop-collapse-with-projective-associated-graded-pieces-splits-the-finite-filtration-noncanonically

Decision: accepted. Step 1.1: projectivity of each graded piece gives a section s_p and phi_p:F_{p-1}oplus G_p->F_p is an isomorphism (kernel via q_p; surjectivity via z-s_p(q_pz) in F_{p-1}); step 2.1 finite induction gives the filtered direct-sum splitting; step 4.1 noncanonicity witness in Z+Z with two distinct sections and the filtration-preserving automorphism T(x,y)=(x+y,y) acting identically on graded pieces. Only finitely many sections, no AC, no canonicality claim.

### item — prop-a-map-of-exact-couples-induces-a-map-of-spectral-sequences

Decision: accepted. Step 1.1: ui=i~u gives u' on im i; vjk=j~uk=j~k~v gives the induced E' map. Step 2.1 verifies all three derived-couple squares: i' by u i= i~ u; j' locally with a=ix: v'j'a=[vjx]=[j~ux]=j~'(i~ux); k' by uk=k~v. Step 3.1 handles iteration, identities and composition by uniqueness of restrictions/quotient maps. Choice-free.

### item — prop-short-exact-sequences-of-filtered-complexes-give-compatible-exact-couples

Decision: accepted. Under strictness F_pA=A cap F_pB and beta(F_pB)=F_pC, step 1.1 gives degreewise short exact sequences of subcomplexes; step 1.2 commutes D/E ladders including the connecting square via naturality of the homology connector; step 2.1 proves graded short exactness: monic (b in F_{p-1}B cap im alpha lies in F_{p-1}A) and epic (lift c to F_pB, adjust by a lift in F_{p-1}B). The statement correctly disclaims short exactness of homology terms.

### item — fs-the-two-spectral-sequences-of-a-double-complex-have-identical-e-one-pages

Decision: accepted. Refutation checked on the witness C_{1,0}=C_{0,0}=k, h=1, all else zero: row E^1 term at (0,0) is H^h_0(k->k)=0 while column E^1_{0,0}=k, so the pages are not isomorphic as bigraded objects; both abut to H_*(k->k)=0. Counterexample is finite, first quadrant and choice-free. The false statement is genuinely false.

### item — fs-direct-sum-and-product-totalisations-are-always-isomorphic

Decision: accepted. Uses the infinite-diagonal witness C_{j,-j}=Z/2 with zero arrows: Tot^oplus_0=S, Tot^Pi_0=P with zero differentials, so homology S vs P and no bijection exists (P uncountable, explicit diagonal argument); the canonical comparison misses the constant-one sequence. Correctly refutes the universal claim and is choice-free.

### item — fs-every-exact-couple-is-a-long-exact-sequence-with-no-extra-grading-data

Decision: accepted. Witness D=Z --x2--> D=Z --mod2--> E=Z/2 --0--> D is exact at all three vertices (im x2=2Z=ker mod2; im mod2=E=ker0; im0=0=ker x2), yet placing the nonzero groups in bidegree (0,0) makes the required i:D_{0,0}->D_{1,-1}=0 impossible. This correctly shows the grading/repetition data is additional structure, not implied by ungraded exactness.

### item — fs-first-quadrant-support-alone-identifies-the-abutment-without-a-filtration

Decision: accepted. Same stationary page with k at (0,1),(1,0) admits the two filtered targets Z/4 (F_0={0,2}) and k^2 (F_0=k x 0), whose graded pieces are both k,k but which are not isomorphic as groups (2-torsion argument). Correctly shows support plus graded pieces does not determine the extension/target without filtration data.

### item — fs-an-isomorphism-on-e-infinity-automatically-gives-an-isomorphism-of-unfiltered-targets

Decision: accepted. Witness S[0]->P[0] with tail filtrations: zero differentials make all page maps the graded identities on k at (-m,m), the compatible target map is the proper inclusion S->P (not surjective), while the source filtration is exhaustive and separated but incomplete (completion is S->P). Correctly refutes the unqualified claim and matches the comparison theorem's explicit hypotheses.

### item — fs-exhaustive-filtration-implies-separated-and-complete-filtration

Decision: accepted. Two witnesses: constant filtration F_p k = k is exhaustive with nonzero intersection and zero limit, so not separated and not complete; the tail filtration on S=k^{(N)} is exhaustive and separated but has completion P and misses the constant-one sequence. Both computed from the countable-sequence lemma; the zero group case is excluded explicitly.

### item — ex-the-two-spectral-sequences-of-a-two-by-two-double-complex

Decision: accepted. Recomputed both pages: column E^1 = four k with d^1=1 at (1,1)->(0,1) and 0 at (1,0)->(0,0), giving E^2=k at (0,0),(1,0); row E^1=k at (0,0),(0,1) with zero d^1. Total complex k ->(x->(0,x)) k^2 ->0 k has H_1=k, H_0=k, H_2=0; row filtration jumps at 0, column at 1, matching E_inf positions (0,1) vs (1,0).

### item — ex-acyclic-assembly-with-exact-columns

Decision: accepted. 2x2 all k, vertical maps identity, horizontal zero: each column k->k acyclic; total complex k ->(x->(x,0)) k^2 ->((u,v)->v) k has injective first map with image the kernel of the surjective second map, so H_*=0. Direct check agrees with the acyclic assembly lemma invocation (the hypotheses H^v_q=0 for q>0 hold).

### item — ex-the-exact-couple-of-a-two-step-filtration

Decision: accepted. C_0=Z/4, F_0={0,2}, F_p=C for p>=1: D^1_{p,-p} listed correctly (0, {0,2}, Z/4 tail) and E^1 at p=0,1 ({0,2} and Z/2). i inclusions and j (identity at p=0, parity at p=1) have required degrees; k=0 because its target has total degree -1. All three exactness equalities checked vertex by vertex, including the constant D^1 tail. The example honestly notes it is not first quadrant.

### item — ex-deriving-an-exact-couple-once

Decision: accepted. D^2=im i^1 computed as 0 for p<=0, {0,2} at p=1, Z/4 for p>=2; E^2=E^1 since k^1=0. j^2(i^1x)=[j^1x] verified at p=1 (identity on {0,2} into E^2_{0,0}) and p=2 (parity quotient into E^2_{1,-1}); the degree (-1,1) shift is exactly the derived-couple formula. Exactness at D^2 before j^2 checked casewise.

### item — ex-a-first-quadrant-five-term-exact-sequence

Decision: accepted. C^1=ka+kb, C^2=kc, db=c, weights 1,0,2: graded pieces E_0 at (1,0),(0,1),(2,0); d_0=0 so E_1=E_0; d_2[b]=[c] is an identity, all later terms collapse to k[a] at (1,0). H^1=k[a], H^2=0, F^1H^1=H^1, F^2H^1=0 checked directly. Five-term sequence 0->k->k->k->k->0 with maps 1,0,1 verified position by position.

### item — cex-sum-and-product-totalisations-on-an-infinite-diagonal

Decision: accepted. Same infinite-diagonal witness: degree-zero homology is S for the sum and P for the product totalisation, all other homology zero; the canonical comparison is the non-surjective finite-support inclusion and no abstract isomorphism exists by the cardinality/diagonal argument. Correctly notes the witness is not first quadrant, so no first-quadrant statement is contradicted.

### item — cex-an-exhaustive-nonseparated-filtration-with-the-wrong-naive-abutment

Decision: accepted. Example 1: constant filtration on k[0] has all graded quotients zero hence zero pages, while H_0=k and every F_pH_0=k (exhaustive, nonseparated). Example 2: S->P inclusion with tail filtrations has E^1=0 from k->k identity graded complexes, H_0=P/S nonzero, and F_pH_0=P/S for every p because tails map onto P/S. Both effects and the failing hypotheses are stated accurately and choice-free.

### item — ex-a-filtered-quasi-isomorphism-detected-on-associated-graded-complexes

Decision: accepted. C=(ka->kb+k c), F_0=kc[0], F_p=C for p>=1; gr_0 is kc[0]->kc[0] identity (quasi-iso) and gr_1 is (ka->kb)->0 with zero homology (quasi-iso); all other graded complexes zero. Both filtrations bounded, so the finite branch of the criterion applies and the projection f is a quasi-isomorphism; H_0 and H_1 computed directly (H_0~kc, H_1=0).

### page — double-complexes-exact-couples-and-convergence

Decision: repaired [defect_ids: p2-next20-5a-e-convergence-page-stale-escalation]. Read the full A-page prose and checked it against the 47-item inventory in manifest order. Page summary claims match the reviewed items: anticommuting convention with total differential h+v, existence hypotheses for sums/products, finite-diagonal identification and the binary infinite-diagonal failure, transposed row/column pages with the two image filtrations, the derived-couple exactness and degree change of j, the two-sided regular convention, the tower/Delta convergence route with declared AC, the comparison theorem hypotheses, five-term sequences and noncanonical splitting. The only defect was a stale sentence claiming an owner-held Step 3 decision was still pending; it now cites the 2026-09-10 owner repair. Inventory, order and mathematics unchanged.

### page — double-complexes-exact-couples-and-convergence-examples

Decision: accepted. Read the complete B page and all eight listed examples. Inventory order is supplier-before-consumer on the page (ex-deriving depends on ex-the-exact-couple-of-a-two-step-filtration). Prose accurately describes: the two-by-two total differential calculations with different filtration jumps, the Z/4 exact couple with its nonzero (1,-1) term, the zero-d_0/d_1 cohomological example with nonzero d_2 and its five-term sequence, the infinite-diagonal and nonseparated failures with their exact failing hypotheses, and the filtered quasi-isomorphism checked on graded complexes and homology. No B item supplies another page; no mathematical issue found.

## Batch 8 — singular cohomology and fibrations

### item — def-singular-cochain-complex-with-coefficients

Decision: accepted. C^n=Hom_Z(C_n(X;Z),G), delta phi = phi circ partial with positive sign; the simplex-function description (arbitrary functions, no finite support) and the R-linear identification Hom_R(C_n(X;R),G) were checked against C_n(X;R)=C_n(X;Z) tensor R; delta^0 on a path is endpoint minus initial, consistent with the library face-map convention partial sigma = sum (-1)^i sigma circ delta_i and delta_i(v_k)=v_k (k<i), v_{k+1} (k>=i) (def-standard-topological-simplex-and-its-affine-face-maps read). Empty space, zero coefficients and negative degrees handled; choice-free.

### item — lem-the-singular-coboundary-squares-to-zero

Decision: accepted. delta^{n+1}delta^n phi = phi partial partial = 0 by associativity with the chain square-zero theorem; negative degrees have zero domain. No freeness or injectivity on G; the unnormalized point complex is retained explicitly.

### item — def-singular-cohomology-with-coefficients

Decision: accepted. Z^n=ker delta, B^n=im delta with B^n subset Z^n by the square-zero lemma; H^n=Z^n/B^n, H^0=ker delta^0 since B^0=0, negative degrees zero; the definition explicitly refuses to identify cohomology with a dual of homology and chooses no representatives.

### item — prop-singular-cohomology-is-contravariantly-functorial

Decision: accepted. f^sharp phi = phi f_# commutes with delta by the chain-map identity; it preserves cocycles and coboundaries and descends to cohomology; (g circ f)_# = g_# f_# gives contravariant functoriality; coefficient postcomposition gives covariant maps commuting with f^*. Empty spaces, point and zero coefficients covered.

### item — thm-homotopic-maps-induce-equal-maps-in-singular-cohomology

Decision: accepted. With the supplier prism P satisfying g_#-f_# = partial P + P partial, K^n phi = phi P_{n-1} gives delta K + K delta = phi(g_#-f_#) on cochains; on a cocycle the difference is a coboundary. Degree-zero and negative-degree conventions checked; no primitives or AC.

### item — def-relative-singular-cochain-complex

Decision: accepted. C^n(X,A;G)=Hom(C_n(X,A;Z),G) with positive induced coboundary; the identification with absolute cochains vanishing on A-simplices via the quotient map q (with q partial = partial-bar q) was verified, as was the complementary-simplex free basis and the H^n definition. The definition explicitly refuses a claim that extension by zero commutes with the differential.

### item — thm-long-exact-sequence-of-a-pair-in-singular-cohomology

Decision: accepted. Degreewise 0->D->C->E->0 is short exact (restriction is onto by extension by zero; kernel is the vanishing-on-A cochains) with a degreewise section, so the LES follows; the explicit chase was recomputed: connector well-definedness (two extensions differ by d in D^n; delta-dtilde changes by delta d; representative change a+delta b absorbed), exactness at H^n(C) (kernel of r = relative image), at H^n(A) (image of r = kernel of partial), at H^{n+1}(D) (image of partial = kernel of j). Degree zero initial injection checked; no AC.

### item — thm-naturality-of-the-singular-cohomology-pair-sequence

Decision: accepted. The cochain pullback preserves vanishing on subspace chains, so it maps relative complexes; inclusion and restriction squares commute on simplices; for the connector, if a-tilde extends a then a-tilde f_# extends (f|_A)^sharp a and delta(a-tilde f_#)=(delta a-tilde)f_# by functoriality, so both composites agree on classes. Coefficient postcomposition and identity/composition laws verified; one extension per cocycle suffices, so no AC.

### item — thm-excision-for-singular-cohomology

Decision: accepted. The cover-small supplier's explicit operators satisfy D|_M=0, R|_M=1 for simplices already in A or in X minus Z (least depth m=0, all faces small), so M=C_A+C_*(Y) and quotienting by C_A gives the actual relative inclusion C_*(Y)/C_*(A setminus Z)->C_*(X)/C_*(A) as a chain homotopy equivalence. Dualizing by precomposition produces cochain homotopy inverses (1-i^sharp R^sharp = delta K + K delta), hence an isomorphism on H^*(-;G) for arbitrary G, with no Hom exactness or coefficient hypothesis. M/C_A ~= C_*(Y)/C_*(A cap Y) verified via the second isomorphism theorem.

### item — thm-mayer-vietoris-sequence-in-singular-cohomology

Decision: accepted. Dualizing the chain-level MV sequence 0->C(U cap V)->C(U)+C(V)->M->0 gives 0->D->E->F->0 termwise exact (a injective since j onto; ker b = im a by gluing over U,V with the intersection; surjectivity by zero extension). The small inclusion is a homotopy equivalence, so theta: H^n(X;G)->H^n(D) is an iso via precomposition. The connector partial_D[c]=[d] with delta e = a(d) was verified well-defined, additive, and identified with zero-extension; exactness at H^n(E), H^n(F), H^{n+1}(D) checked both directions. Sign beta(u,v)=u|-v| and naturality under ordered-cover maps and coefficient maps verified.

### item — def-kronecker-evaluation-pairing

Decision: accepted. Evaluation of a cocycle on a cycle with the finite formal expansion is defined; the pairing is introduced only with its descent justified by the named lemma; no claim that evaluation is an isomorphism; negative degrees, empty space and zero coefficients give zero; the R-bilinear variant is correctly separated from the Z-bilinear one.

### item — lem-the-kronecker-pairing-is-independent-of-cocycle-and-cycle-representatives

Decision: accepted. (delta psi)(c)=psi(partial c)=0 for a cycle and phi(partial b)=(delta phi)(b)=0 for a cocycle, so the pairing descends through both quotients; biadditivity and R-bilinearity verified; spatial naturality (f^* alpha,z)=(alpha,f_* z) by phi f_#(c)=phi(f_#c) and coefficient naturality by (u phi)(c)=u(phi(c)); no representative function or AC.

### item — lem-singular-uct-extension-from-cycle-projections

Decision: accepted. Using the supplied free decomposition C_j=Z_j + s_j(B_{j-1}) and pi_j=c-s_jd_jc: iota[psi]=[psi d_n] is closed, changes by delta(g pi_{n-1}) when psi changes by g|_{B_{n-1}}, and is injective because surjectivity of d_n restricts h to B_{n-1}; beta(u)=[u q pi_n] is a well-defined cocycle with evaluation u; im iota = ker beta (psi d_n kills Z_n; conversely zero evaluation makes psi-bar(d_n c)=phi(c) well-defined); naturality in chain maps; comparison of length-one resolutions by the standard lift argument is independent of lifts. AC declared exactly for the freeness/sections and free lifts.

### item — thm-topological-universal-coefficient-short-exact-sequence-for-cohomology

Decision: accepted. The absolute and relative integral singular chain complexes are nonnegative free PID complexes (the relative one is free on simplices not contained in A), so the local extension lemma gives the natural sequence 0->Ext^1(H_{n-1},G)->H^n->Hom(H_n,G)->0 with evaluation as the right map (Kronecker lemma). Naturality in pair maps and coefficients comes from the extension lemma; n=0, empty space, A=X and G=0 handled; AC declared.

### item — prop-the-cohomology-universal-coefficient-sequence-splits-nonnaturally

Decision: accepted. s(u)=[u q pi_n] is a linear right inverse of beta (beta s(u)([z])=u q(z)=u[z]); T(e,u)=iota e+s(u) is bijective with explicit inverse and additive, so the sequence splits abstractly. The proof correctly declines to claim naturality of the splitting and points to the separate counterexample; n=0 and degenerate cases handled; AC only for the projections.

### item — cor-cohomology-over-a-field-is-dual-to-homology-over-that-field

Decision: accepted. Over a field k, restricting Hom_k(Z,k)->Hom_k(B,k) is onto by extending a basis of B to a basis of Z (basis extension under AC), so Ext^1(H_{n-1},k)=0 and the UCT evaluation H^n(X;k)->Hom_k(H_n(X;k),k) is an isomorphism. No finite-dimensional hypothesis; the auxiliary bases do not enter the map; n=0 and zero groups handled.

### item — cor-integral-cohomology-detects-adjacent-homology-torsion

Decision: accepted. Hom(Z^r+T,Z)=Z^r; Ext^1(Z,Z)=0 and Ext^1(Z/m,Z)=Z/m via the two-term resolutions; the UCT splitting then gives H^n(X;Z) ~= Z^r + sum Z/m_j, whose torsion subgroup and free rank are as claimed. No canonical identification is asserted; n=0 and degenerate data handled.

### item — lem-singular-product-chain-equivalence-by-simplex-models

Decision: accepted. Checked the explicit unnormalized point contraction (d e_n = e_{n-1} for even n, 0 for odd; a_n(e_n)=e_{n+1} for odd n) and verified da+ad=1-i epsilon in all parities; verified the tensor-model contraction h(x tensor y)=h_Cx tensor y+(-1)^|x| e_Cx tensor h_Ey satisfies dh+hd=1-e_C tensor e_E by expanding both composites (the h_Cx tensor dy terms cancel with signs (-1)^{|x|+1},(-1)^{|x|}, and the e_C dx terms cancel since e_C is a chain map). The inductive construction of the natural inverse T by pushing a model filling h z forward (z=T_{n-1}d a_n is a cycle; degree-one augmentation zero; dt_n=z) and the natural homotopy induction for both composites (z=(u-v)a-H da, d z=0, H_n(a)=h z) were checked, including naturality by pushforward of universal generators. Extension of scalars verified. No AC.

### item — thm-topological-kunneth-short-exact-sequence-for-homology

Decision: accepted. Free nonnegative PID complexes apply the published PID Kunneth exactness theorem; composing with the shuffle homology isomorphism s (and its inverse t) gives exactness of 0->K->s alpha->H_n(XxY;R)->gamma=beta t->Q->0: ker gamma = im s alpha and gamma is onto; the left map on generators is [z] tensor [w] -> [z x w]; naturality follows from naturality of s,t and of alpha,beta. n=0 and empty factors handled; AC inherited from the PID theorem.

### item — prop-the-homology-kunneth-sequence-splits-nonnaturally

Decision: accepted. j'=sj and r'=rt satisfy gamma j'=beta j=1, r' alpha'=r t s alpha=1 and r'j'=rtsj=0 using the supplied tensor-complex maps with r alpha=1, beta j=1, j beta=1-alpha r, rj=0; then j' gamma=sj beta t=s(1-alpha r)t=1-alpha' r' makes (alpha',j') a direct-sum decomposition with inverse (r',gamma). The proof correctly declines to assert naturality of the section and defers nonexistence to the counterexample.

### item — cor-field-kunneth-isomorphism-for-homology-of-products

Decision: accepted. Over a field k, Tor_1^k(V,W)=0 computed with the explicit length-one projective resolution V -> V (identity) and the supplied balanced-Tor convention (AC supplies the required DC); hence the Kunneth Tor term vanishes and the natural cross product is an isomorphism. No finite-dimensional restriction; n=0 and empty factors checked.

### item — def-additive-singular-cohomology-cross-product

Decision: accepted. J(phi,psi) is defined on homogeneous tensors with the stated support and extended linearly and R-balanced (commutativity used); the product [phi]x[psi]=[J(phi,psi)T] uses a shuffle inverse T; the definition explicitly restricts to additive cross products (no cup product) and states the positive-differential identity without extra signs; justification deferred to the named lemma.

### item — lem-additive-singular-cohomology-cross-product-is-well-defined

Decision: accepted. Verified delta J(phi,psi)=J(delta phi,psi)+(-1)^p J(phi,delta psi) on the (p+1,q) and (p,q+1) bidegrees (the factor (-1)^p comes from the Koszul sign in the tensor differential) with all other bidegrees zero; representative changes give coboundaries; independence of the shuffle inverse via K=T'L+PT with dK+Kd=T'-T; R-bilinearity and naturality (f x g)^*(alpha x beta)=f^*alpha x g^*beta from naturality of T and J(phi,psi)(f_# tensor g_#)=J(phi f_#, psi g_#). No AC.

### item — thm-cohomological-kunneth-isomorphism-under-finite-free-hypotheses

Decision: accepted. The deformation retraction of D onto V=H_*(Y) (eta,ell,h with dh+hd=1-ell eta, eta ell=1) uses the PID cycle-boundary sections and free-homology sections under AC; tensoring with C and composing with the shuffle reduces Hom(D(XxY),R) to Hom(C tensor V,R); for finite free V_q the evaluation map Hom(U,R) tensor V_q^* -> Hom(U tensor V_q,R) is an isomorphism for arbitrary U (explicit inverse using a basis); the fixed-q cohomology is H^{n-q}(X;R) tensor V_q^* and step 3.2 identifies V_q^* with H^q(Y;R); step 4.1 identifies the resulting isomorphism with the cross product. Symmetric case by the same argument on C with the unit sign (-1)^p. No finite chain-rank or degree-bound hypothesis.

### item — cor-singular-cohomology-satisfies-the-eilenberg-steenrod-cohomology-axioms

Decision: accepted. Relative homotopy invariance via the descended prism; point computation verified (one simplex per degree, d_n=1 for even n, 0 for odd; delta^n zero for even n, identity for odd; H^0=G, H^n=0 for n>0); additivity H^n(disjoint union) ~= product over H^n(X_i) with AC for arbitrary index (simplex of the disjoint union lies in one summand by connectedness of the interval), finite index needs only finite choice. Multiplication explicitly excluded.

### item — lem-real-projective-space-cellular-homology-and-pinch-map

Decision: accepted. One-cell-per-dimension CW structure from hemispheres with the compact-Hausdorff and disjoint-orbit-neighbourhood checks; incidence degree computed via the double-cover local-degree argument: deg_x f = deg_-x f * deg_x a with deg a = (-1)^j, giving deg f = 1+(-1)^j = 2 for even j and 0 for odd j, matching the cellular boundary; j=1 handled separately. Integral homology and mod-two RP^2 complex checked. The pinch q: RP^2->S^2 is cellular and the identity on the degree-two generator over F_2; naturality of field duality gives q^* iso. AC only for field duality.

### item — ex-integral-cohomology-of-real-projective-space-from-uct

Decision: accepted. Using the RP^m homology of the pinch lemma and the UCT: even 0<j<=m gives 0->Ext^1(Z/2,Z)=Z/2->H^j->0; odd 0<j<m has Hom(H_j,Z)=0 and Ext^1(H_{j-1},Z)=0; j=m odd gives H^m=Z; j=m+1 and higher vanish. Examples m=0..3 checked against the standard answer.

### item — ex-cohomology-of-lens-spaces-from-uct

Decision: accepted. Free action of <rho> checked via coprime p,q; the sector/D^3 identification and the one-cell-per-degree CW structure verified; the face boundary maps to the quotient circle by w->w^p (degree p, computed by subdividing at the p-th roots of unity) giving d_2=p, d_1=d_3=0; homology Z,Z/p,0,Z; UCT gives H^0=H^3=Z, H^1=0, H^2=Z/p; p=1 handled separately as S^3.

### item — ex-field-cohomology-of-an-infinite-wedge-of-circles

Decision: accepted. Cellular chain complex of the weak-topology wedge has one 0-cell and one 1-cell per circle with zero differentials, so homology is k in degree 0 and the direct sum in degree 1; the full algebraic dual of the direct sum is the product (arbitrary sequences define functionals since sums are finite); for k=F_2 the product is uncountable and the direct sum countable, with the explicit diagonal argument.

### item — ex-homology-of-a-product-of-spheres-by-kunneth

Decision: accepted. All Tor terms vanish (free factors, explicit projective resolutions); the tensor diagonal gives the four generators a tensor b, u tensor b, a tensor v, u tensor v in degrees 0,m,n,m+n; images are the product point class, the two inclusion-induced sphere classes (zero-degree point factor formula), and the top cross product. m=n gives rank two in the middle degree; boundary cases m or n zero are stated separately.

### item — ex-tor-term-in-the-homology-of-a-product-of-real-projective-spaces

Decision: accepted. Degree-three Kunneth: tensor diagonal (0,3),(3,0) gives Z^2; Tor diagonal (0,2),(1,1),(2,0) has only the middle nonzero, Tor_1(Z/2,Z/2)=Z/2 via 0->Z -2-> Z->Z/2->0. The split sequence gives H_3 = Z^2 + Z/2, and the nonzero Tor class has order two and is outside the tensor image because gamma of it is nonzero.

### item — ex-kronecker-pairing-for-a-cellular-circle-generator

Decision: accepted. Cellular H_1(S^1)=Z generated by the one-cell (zero boundary); Ext^1(H_0,Z)=0 so evaluation H^1->Hom(H_1,Z) is an isomorphism; alpha=beta^{-1}(u) is the unique class with <alpha,z>=1; the explicit cocycle u q_1 pi_1 realizes it and is closed (q_1 pi_1 kills boundaries); biadditivity gives <r alpha,s z>=rs.

### item — cex-the-integral-kronecker-map-need-not-be-an-isomorphism

Decision: accepted. For X=RP^2, n=2: H_2=0 and H_1=Z/2 so the UCT sequence is 0->Ext^1(Z/2,Z)=Z/2->H^2->Hom(0,Z)=0->0; the nonzero presentation class psi (value 1 on Z in 0->Z -2-> Z->Z/2->0) is not a boundary, and its injective image alpha is a nonzero class with zero evaluation (every 2-cycle is a boundary). Correctly refutes the universal isomorphism claim, not injectivity of iota or surjectivity of beta.

### item — cex-the-uct-splitting-is-not-natural

Decision: accepted. For q:RP^2->S^2 and G=F_2 in degree 2: beta_Y is iso onto Hom(Z,F_2) and s_Y(u) is forced to be the nonzero a; q^* is an isomorphism by the pinch lemma plus natural field duality; the Hom-term map is precomposition by q_*: H_2(RP^2)=0->H_2(S^2)=Z, hence zero, and s_X is a homomorphism from the zero group, so naturality would force q^*(a)=0. Contradiction; correctly uses the actual quotient map and does not rely on cellular-cohomology identification.

### item — def-hurewicz-and-serre-fibrations

Decision: accepted. HLP statement quantified exactly (initial lift prescribed, projection identity, no uniqueness or regularity); Hurewicz tests all spaces, Serre tests disks; CGWH convention explicitly separated with ordinary topology on products with I; no surjectivity assumed and the empty-domain example explained; path lifting via D^0 noted; no choice principle.

### item — prop-a-fibration-has-path-lifting-and-homotopy-lifting-relative-to-a-subspace

Decision: accepted. Disk-cylinder change of domain checked (the boundary disk parametrization maps D^n onto D^n x {0} cup S^{n-1} x I and extends radially, giving the pair homeomorphism). Serre relative lifting for CW pairs by cell induction is correct with AC for the cell families and weak-topology continuity via transposition. Hurewicz relative HLP for closed cofibrations verified: the NDR formulas T_s and the retraction r=T_1 map Y onto W, K interpolates, and one HLP application with initial map f r and homotopy gK gives the prescribed relative lift; continuity across u=0 via the compact-time tube estimate. NDR witness and HLP witness are single existential choices, so no AC in the Hurewicz clause.

### item — def-fiber-and-fiber-homotopy-equivalence

Decision: accepted. Fiber as subspace (kified in CGWH), might be empty; maps and homotopies over B defined with fixed base coordinate; fiber homotopy equivalence requires homotopies over B; restriction gives ordinary homotopy equivalences on fibers and empty/nonempty fibers cannot be equivalent; single-point base reduces to ordinary homotopy equivalence.

### item — prop-pullbacks-of-fibrations-are-fibrations

Decision: accepted. Pullback g^*E with q(a,e)=a; given v=(v_A,v_E) and H with qv=H(-,0), the composite gH has a lift L starting at v_E by the original HLP (same test class), and H~(x,t)=(H(x,t),L(x,t)) is a continuous lift in the pullback with the correct initial value. Empty cases and CGWH kified pullback addressed; one HLP witness, no AC.

### item — def-mapping-path-space-replacement-of-a-map

Decision: accepted. E_f = {(x,gamma): gamma(0)=f(x)} with subspace of X x Y^I (compact-open), p_f(x,gamma)=gamma(1), j_f(x)=(x,c_{f(x)}), r_f(x,gamma)=x; continuity of evaluation, constant-path map and r_f via the interval exponential law and transposition; empty and point cases stated; no path selection.

### item — thm-mapping-path-factorization

Decision: accepted. p_f j_f=f and r_f j_f=id; the explicit deformation D((x,gamma),t)=(x, s->gamma((1-t)s)) is continuous, stays in E_f and contracts E_f onto j_f(X) fixing j_f(X), so j_f is a homotopy equivalence with inverse r_f. HLP verified with the explicit reparametrized path eta_{z,t} (gamma up to time 1, then H(z,·) from 0) which avoids division by t; pasting on the two closed domains by continuity-is-local. Joint continuity and the initial condition checked, including t=0 and the CG version.

### item — def-homotopy-fiber-of-a-map

Decision: accepted. hofib(f) defined as the fiber of p_f over y_0 with basepoint (x_0,c_{y_0}); paths in the homotopy fiber specified; induced maps for strictly commuting based squares verified continuous by postcomposition on path spaces (compact-open preimage computation) with basepoints preserved; point-domain and point-target identifications stated as constructions, not as claims about literal fibers.

### item — def-fibration-connecting-homomorphism

Decision: accepted. Construction: lift the reversed cube with all faces except t=0 fixed at e_0 (prescribed bottom-and-sides data), read the distinguished face a in F; the terminal-point convention and the n=1 component case are explicit; the orientation warning matches the action formula in the LES theorem; independence and homomorphism property deferred to the declared justifier; only finite cubical lifting, no AC.

### item — lem-the-fibration-connecting-map-is-independent-of-lift-and-representative

Decision: accepted. p_*: pi_n(E,F)->pi_n(B) surjective by the connecting lift construction, injective by lifting a based homotopy of projections on the (u,r)-parameter disk with prescribed data on the boundary and t=1 (finite cubical relative lifting), including the n=1 pointed-set case. The connecting map is the relative boundary composed with the inverse bijection, hence independent of lift/representative, pointed, and a group homomorphism for n>=2 (bijective homomorphism has homomorphic inverse). No AC.

### item — thm-long-exact-sequence-of-homotopy-groups-of-a-fibration

Decision: accepted. Replacing the relative terms via the bijection of the independence lemma in the exact based pair sequence gives exactness at all groups and at the pointed-set tail; exactness at pi_0(E) by lifting a path from p(e) to b_0; the action [e]·[gamma] as endpoint component of a lift, its well-definedness and identity/composition laws verified by pasting lifts and by the same finite relative lifting argument for endpoint-fixed homotopies; orbits = fibers of i_*; stabilizer of [e_0] = p_* pi_1(E); boundary formula partial[gamma]=[e_0]·[gamma]^{-1} consistent with the terminal-lift convention; last arrow onto iff p(E) meets every component.

### item — thm-fibration-sequence-is-natural

Decision: accepted. u_F restriction is continuous and based; inclusion and projection squares commute by functoriality; for the connecting square, if a lifts b constant at e_0 on J then ua lifts vb and restricts on the distinguished face to u_F composed with a, so partial_{p'} v_* = u_{F*} partial_p; the component-action identity follows from applying u to the lifting paths. Strict commutation (not merely up to homotopy) is required and used.

### item — def-fiber-transport-and-monodromy-action

Decision: accepted. Universal lifting function from the single HLP problem in D_p (a single existential choice, not AC); transport T_gamma(e)=Lambda(e,gamma,1); homology local system and monodromy as a right action with first-loop-first composition; for homotopy groups the moving-basepoint correction is explicitly required and no unqualified fixed-basepoint action is asserted; the sufficient hypothesis (path-connected fiber plus trivial loop transport) and its independence argument stated; no canonical transport homeomorphism claimed.

### item — prop-fibers-over-one-path-component-are-fiber-homotopy-equivalent

Decision: accepted. Serre case: for the pullback fibration over I, surjectivity on pi_n(F_i)->pi_n(P) by deforming the height (q(a(x))->i) relative to the boundary using finite relative lifting, and injectivity by the same deformation of a based homotopy; pi_0 by lifting a height path. Hurewicz case: independence of lift families and endpoint-fixed homotopic paths by the bottom-and-sides square comparison with arbitrary parameter; transport composition/constant/inverse laws; fiber homotopy equivalence of gamma^*E over I with F_b x I via continuous transport along alpha_t, beta_t; the explicit ordinary-space counterexample (Cantor-times-interval with the finer topology, constant maps into C) correctly shows Serre fibers need not be homotopy equivalent while the pointwise action claim is properly qualified.

### item — def-locally-trivial-fiber-bundle

Decision: accepted. Charts theta_i:p^{-1}(U_i) ~= U_i x F over an open cover, transition functions g_ji with cocycle identities; numerable data specified with the support-subordinate locally finite partition and repeated charts allowed; empty base, empty fiber and surjectivity remarks correct; ordinary (non-k) product charts explicitly required; no AC.

### item — thm-numerable-fiber-bundles-are-hurewicz-fibrations

Decision: accepted. Standard numerable-bundle proof checked: lambda_T is continuous with supp lambda_T subset V_T (finite compact-open conditions; closed-support argument); positive lambda_T exists at each path by a finite subdivision of I into cozero pieces; the disjointification gamma_T=max(0,lambda_T-n sum_{|R|<n}lambda_R) and normalization give a locally finite partition w_T summing to one with supp w_T subset V_T; a well-order (the sole AC use) converts weights into the ordered intervals [a_T,b_T]; the chart transports L_T over consecutive closed intervals paste continuously (third-case/clipped endpoint analysis); Lambda(e,alpha,t) processes the finitely many positive weights, is jointly continuous by a local-finiteness argument, and is independent of the finite list; HLP follows for arbitrary initial maps by transposing. Empty and zero-weight cases handled.

### item — def-principal-g-bundle-and-associated-fiber-bundle

Decision: accepted. Right principal bundle with equivariant charts (freeness and transitivity in fibers via right multiplication); associated quotient P x_G F by the orbit relation of (p,x)·g=(pg,g^{-1}x) with the verified action law; projection r well-defined and continuous by the quotient property; the equivalence relation and quotient require no orbit representatives; empty base/fiber and trivial-group cases stated; no AC.

### item — prop-associated-bundle-is-locally-trivial-and-functorial-under-pullback

Decision: accepted. Chart coordinates s(b)=theta^{-1}(b,1) and a(p) with p=s(pi(p))a(p), a(pg)=a(p)g; chi([p,x])=(pi(p),a(p)x) is well-defined (a(pg)g^{-1}x=a(p)x) and continuous by restriction-of-quotient and the universal property, with continuous inverse psi(b,y)=[s(b),y]; transition cocycle checks; the pullback principal bundle and the canonical isomorphism Phi (identity in associated coordinates) verified with open-cover continuity. No AC, no effectiveness needed.

### item — lem-covering-homotopies-lift-by-finite-local-strips

Decision: accepted. Path lifting by a finite subdivision into evenly covered strips with unique sheet continuation and pasting; uniqueness by the connectedness of I and sheet separation (equality set open and closed); propagation of the finite subdivision to a neighbourhood of each parameter by the compact-time tube lemma, giving the local continuous lift on N x [t_{j-1},t_j]; global continuity by pasting. Full HLP for every parameter space, no AC.

### item — ex-path-loop-fibration-and-its-connecting-isomorphisms

Decision: accepted. Realized as the mapping-path factorization of the point-to-X map: PX contractible by D(alpha,t)(s)=alpha((1-t)s), fiber over x_0 is Omega X; the terminal-point lift of a cube is b~(u,t)(s)=b(u,1-(1-t)s), correctly recovering the reverse loop in degree one; exact LES segments give pi_n(X) ~= pi_{n-1}(Omega X) for n>=2 and the pointed bijection in degree one via the transitive action with zero stabilizer.

### item — ex-hopf-circle-fibration

Decision: accepted. |h|^2=(a+b)^2=1 and explicit local sections s_N,s_S with unique lambda-parameters prove local triviality over U_N,U_S; the two-chart partition with supports in the chart domains gives numerable data, so h is Hurewicz under AC; the covering R->S^1 with discrete fiber has pi_k(Z)=0 for k>=1 and pi_k(R)=0, giving pi_k(S^1)=0 for k>=2 and pi_1(S^1)=Z; LES then gives partial: pi_2(S^2) ~= pi_1(S^1) and h_*: pi_k(S^3) ~= pi_k(S^2) for k>=3, so pi_3(S^2)=Z.

### item — ex-real-projective-space-cover-as-a-discrete-fiber-fibration

Decision: accepted. Antipodal quotient is open (saturation of an open set), and the sets U_x={y:<y,x>>1/2} give two-sheeted trivializations covering RP^n, so q is a covering and hence Hurewicz; discrete fiber has vanishing positive homotopy groups, giving q_* iso on pi_k for k>=2; for n>=2 the transitive action on the two fiber components with stabilizer p_*pi_1(S^n)=0 identifies pi_1(RP^n) with Z/2; the n=1 case is computed separately via z->z^2 on the circle (multiplication by 2, not an isomorphism onto Z/2).

### item — ex-mobius-band-as-an-interval-bundle-with-monodromy

Decision: accepted. Both charts and transition u->-u over the seam verified (the second chart uses local representatives and pastes at zero); the numerable partition from cos(2 pi t) has supports in the chart domains; the continuous family s->[s,u] is a lift of the circuit ending at [0,-u], so transport is u->-u up to the homotopy-class comparison; R(u)=-u is homotopic to the identity through K(u,r)=(1-2r)u, so it induces the identity on every homology group and J is based-contractible; the example correctly refuses nontrivial homology/homotopy monodromy claims.

### item — cex-a-surjective-map-need-not-be-a-fibration

Decision: accepted. q(t)=e^{2 pi i t} is continuous onto; a lift of beta(s)=e^{-pi i s} with l(0)=0 must satisfy l(s)+s/2 in Z, forcing l(s)=1-s/2 for s>0, which is discontinuous at 0 (preimage of [0,1/4) is {0}); path lifting is required by both fibration notions (X=D^0 test), so the claim fails. Correct and choice-free.

### item — cex-a-fibration-need-not-be-a-locally-trivial-bundle

Decision: accepted. For the triangle E={0<=y<=x<=1} with p(x,y)=x, the explicit lift L(z,t)=(h(z,t),min(b(z),h(z,t))) is continuous, stays in E, starts at f and projects to h, proving Hurewicz HLP for arbitrary test spaces. The fiber over 0 is a singleton while fibers over x>0 have two distinct points, so no chart at an open neighbourhood of 0 can make all fibers homeomorphic. Correct refutation of the converse.

### page — singular-cohomology-and-coefficient-theorems

Decision: accepted. Read the full A-page prose against all 26 items in manifest order. Every page-level claim checked: positive coboundary convention delta phi = phi partial; relative cochains as vanishing cochains; the pair sequence, excision by cover-small homotopies, and the ordered MV difference U minus V; evaluation with adjacent-degree torsion in its kernel; the cycle-projection UCT injection and comparison; existence-only splitting; unrestricted field duality; the simplex-model chain equivalence with inverse and both homotopies; the transported PID Kunneth sequence and the finite-free hypothesis used only in the cohomological theorem; exact AC placement; the projective-space pinch supplier. The companion-page pointer and the explicit exclusion of cup/cap products are accurate.

### page — singular-cohomology-and-coefficient-theorems-examples

Decision: accepted. Read the complete B-page prose and all eight examples. Prose correctly describes the UCT calculations for RP^m and lens spaces (including the actual cell construction and attaching winding number), the wedge product-vs-sum distinction, the product-of-spheres generators, the RP^3 x RP^3 Tor class, and the two failures (nonzero Ext class invisible to evaluation; the pinch quotient preventing a natural splitting). No B item supplies another page; inventory order matches the manifest.

### page — fibrations-fiber-bundles-and-homotopy-exact-sequences

Decision: accepted. Read the full A-page prose against all 18 items in manifest order. Claims verified: the Hurewicz/Serre distinction by test class; relative lifting with disk/CW/closed-cofibration hypotheses and the AC boundary; the mapping-path factorization and homotopy fiber; the fibration LES with pointed-set terms, the pi_1(B)-action on pi_0(F), stabilizers and naturality; the terminal-point connecting convention; Hurewicz transport producing fiber homotopy equivalences, the homology local system and the conditioned monodromy action; the Serre weak-equivalence statement and its explicit counterexample; ordinary (non-k) bundle charts; the numerable-bundle AC use; associated-bundle quotient charts; and the covering finite-strip lemma. No page-level mathematical overclaim found.

### page — fibrations-fiber-bundles-and-homotopy-exact-sequences-examples

Decision: accepted. Read the complete B-page prose and all six examples and checked the cross-references: the path-loop degree-one pointed-set interpretation, the Hopf/antipodal charts and their homotopy-group consequences including the exceptional circle case, the Mobius reversal inducing the identity on invariants, the AC import through the numerable theorem, and the two explicit failures distinguishing surjectivity, lifting and local triviality. No issue found.

## Batch 9 — smooth singular comparison and connections

### item — def-continuous-singular-simplex-and-real-singular-chain-group

Decision: accepted. C_k(X;R)=R^{(S_k(X))} as finite-support functions with unique formal coefficients; the identification with C_k(X;Z) tensor R via [sigma] tensor r <-> r[sigma] verified as mutually inverse and additive; simplex basis is part of the definition (no selection); empty space, point, constant and degenerate simplices retained (unnormalized).

### item — def-real-singular-chain-complex

Decision: accepted. Signed face differential partial[sigma]=sum (-1)^i[sigma circ delta_i], zero in negative degrees and degree zero; square-zero from the simplicial identity; matches the integer-coefficient convention of the earlier AT6 page under the real tensor identification.

### item — prop-singular-chains-are-covariantly-functorial

Decision: accepted. f_# by postcomposition is real-linear with partial f_# = f_# partial checked on generators (every face retained) and extends linearly; identity and composition laws hold; negative degrees use the unique zero maps; no AC.

### item — lem-real-singular-cochains-identify-with-functions-on-the-supplied-simplex-basis

Decision: accepted. Evaluation on generators gives bijections Hom_R(R^{(S)},R) ~= R^S ~= Hom_Z(Z^{(S)},R) with explicit inverse formulas; commutation with precomposition by an integer matrix with finite columns (in particular the signed boundary) checked; no finite-support restriction and no basis choice.

### item — def-real-singular-cochain-complex

Decision: accepted. C^k=Hom_R(C_k,R), delta phi = phi circ partial, no extra degree sign; delta^2=0; identified with Hom_Z(C_k(X;Z),R) (not Hom_Z(C_k(X;R),R)) via the preceding lemma; degree zero on a path is endpoint minus initial; point complex computed as 0,id,0,id,... in (delta^0,delta^1,...); no choice.

### item — def-real-singular-cohomology

Decision: accepted. Z^k, B^k, H^k=Z^k/B^k with B^k inside Z^k by square-zero; representative criterion; degree zero H^0 = functions equal on path endpoints; negative degrees zero; point values H^0=R, H^k=0 for k>0; explicitly refuses a dual-of-homology identification and uses no AC.

### item — cor-singular-cohomology-is-homotopy-invariant

Decision: accepted. K^k phi = phi P_{k-1} gives (g^*-f^*)phi = delta K phi + K delta phi from the signed prism identity; on cocycles the difference is a coboundary; homotopy equivalence gives inverse pullbacks; empty and negative degrees and constant homotopies covered; no AC.

### item — thm-short-exact-two-open-cover-small-singular-chain-sequence

Decision: accepted. i(c)=(-c,c), j(a,b)=a+b on real chains; subcomplex structure by faces of small simplices; injectivity immediate and surjectivity by the priority-U decomposition of a finite small chain (no arbitrary selection); kernel=image by coefficient comparison in the supplied X-basis, with the overlap term C_{U cap V}; sign noted as the negative of the AT convention.

### item — lem-canonical-extension-by-zero-of-a-singular-cochain-on-a-simplex-basis

Decision: accepted. E_A^U extends basis values by zero on simplices not lying in A (unique corestriction); section of restriction verified on generators; not a cochain map with the explicit U=[0,1], A={0}, eta(0)=1 witness giving -1 versus 0; choice-free.

### item — thm-short-exact-two-open-singular-cochain-mayer-vietoris-sequence

Decision: accepted. Dual of the small-chain sequence with a(lambda)=(lambda|_U,lambda|_V), b(phi,psi)=psi|-phi|; a injective (vanishing on all small generators), ker b = im a by priority-U gluing, surjectivity by the zero-extension section with the required minus sign (-E eta,0); all maps are cochain maps; the first complex is the dual of small chains, not C^*(X).

### item — thm-mayer-vietoris-sequence-in-real-singular-cohomology

Decision: accepted. theta=H(I^*) from the small-chain inclusion is an isomorphism via the explicit chain homotopy inverse; connector well-defined (delta e = a(d) with a injective; lift changes by delta t; representative changes absorbed); exactness positions verified; sign comparison: b=-b_AT forces Delta=-Delta_AT under the same theta; degenerate cases checked; no AC.

### item — thm-naturality-of-singular-mayer-vietoris-connectors

Decision: accepted. Postcomposition by f preserves the small simplex bases and commutes with faces; the cochain diagram commutes with connectors (image of a lift is a lift, with the same equations); the small-chain inclusions satisfy f_# I_X = I_Y f_{sm,#} on generators, so theta transports the connector square; restriction/difference squares verified.

### item — def-smooth-singular-simplex

Decision: accepted. Smooth k-simplex = map with a smooth target-valued extension on an open neighbourhood in the affine span; explicitly not separate face smoothness and not merely Euclidean extension outside the target; every smooth simplex is continuous; k=0 gives every point; constant and degenerate allowed; empty manifold has none; no choice of extensions.

### item — def-smooth-singular-chain-and-cochain-complexes

Decision: accepted. Smooth chains as the span of smooth simplices with the inherited signed differential; subcomplex verified (affine face inverse image of the extension open set, composition gives a target-valued extension); smooth cochains as the real dual with delta=phi partial; H_k^inf and H_inf^k defined by the quotients; empty/point cases.

### item — prop-smooth-singular-chains-and-cochains-are-functorial-for-smooth-maps

Decision: accepted. Composition of smooth maps of manifolds with boundary verified by shrinking the first local Euclidean extension so its image lies in the second's chart domain; f_# preserves smooth generators and commutes with partial; cochain pullback commutes with delta; identity/composition laws; no simultaneous choice.

### item — prop-barycentric-subdivision-and-prism-preserve-smooth-singular-chains

Decision: accepted. Subdivision and its homotopy consist of affine domain pieces (finitely many, by the cone recursion), so they preserve smooth chains via the extension O and its affine inverse images; the prism argument for smooth target-valued homotopies checked; the boundary-target obstruction (M=point, H(t)=t into [0,infinity)) is correctly identified and the time-flattening repair given; the chain-homotopy identity and endpoint maps retained.

### item — thm-smooth-singular-mayer-vietoris-sequence

Decision: accepted. Least-depth m(sigma)=max(a(sigma), faces) is finite by induction; D=sum TS^i telescopes; R=1-partial D-D partial lands in the smooth cover-small subcomplex (S^{m(tau)}tau small and S,T preserve smallness); rI=1 and 1-Ir=partial D+D partial give theta_infinity an isomorphism; the smooth dual row is exact by the same gluing/zero-extension argument; connector and naturality transported; degeneracies retained.

### item — lem-compatible-smooth-simplex-faces-have-a-neighbourhood-extension

Decision: accepted. Under AC_omega (used for the Whitney embedding of the boundaryless target), the local construction is checked: projections P_I (setting I-coordinates to zero and adding their sum to a fixed nonincident coordinate) satisfy P_I P_L=P_{I cup L}, P_I p=p, P_I(D) subset D; the alternating sum A_p=sum (-1)^{|I|+1} a_I P_I equals jg on the boundary by pairing I with I cup {j_0} (values agree on the actual intersection face by compatibility); finite subcover and bump functions make A=jg near the boundary, and h=j^{-1}R A extends the faces.

### item — lem-relative-smoothing-of-a-continuous-simplex-along-its-faces

Decision: accepted. Boundaryless case: the pasted map on D x {0} cup B x [0,1] is compressed by the explicit retraction r (d=max((2-t)/2, max_i(1-(n+1)lambda_i)), s=1/d) onto that union with the prescribed values; f_1 is extended to E by the max-coordinate projection; the convex combination toward the compatible smooth boundary extension h (with cutoff chi and j,R from the Whitney supplier) is followed by relative Whitney approximation to a smooth G agreeing near B; time-splicing at a(x)=1/(1+d(x,B)) gives a continuous homotopy with the exact prescribed face homotopies (compactness handles (b,1)). Counterexample for boundary targets verified: the four compatible nonnegative face maps of the 3-simplex admit the explicit continuous filling f=max(q,0)rho^2, and the Taylor expansion of any C^2 extension forces quadratic part q=(x-y-z)^2-4yz..., giving h(t,t,t)=-3t^2+o(t^2)<0 on the diagonal, contradiction.

### item — thm-smooth-singular-chains-compute-singular-homology

Decision: accepted. Boundaryless case: finite face-closed smoothing by the relative smoothing lemma gives Q with partial P+P partial=Q-1, hence surjectivity and injectivity on homology. Boundary case: the explicit inward push J_t (bump-driven translation s->s+epsilon s_0(t)chi) moves a finite compact set into the interior, preserving smooth chains; boundaryless result applied in the interior gives both directions, with the smooth prism returning to M. Naturality of the inclusion only; AC_omega inherited from the smoothing lemma.

### item — def-restriction-from-continuous-to-smooth-singular-cochains

Decision: accepted. rho=phi circ I_M is real-linear and a cochain map (delta rho = rho delta); natural for smooth maps since both composites send a simplex to f sigma; point case identity; no approximation or choice.

### item — prop-smooth-continuous-singular-cohomology-comparison-is-an-isomorphism-on-convex-coordinate-domains

Decision: accepted. A single chosen point in a nonempty convex domain gives a smooth contraction (and a flattened strict smooth prism); the point maps are inverse on smooth and ordinary cohomology, and restriction commutes with them, so H(rho_W) is an isomorphism; both sides R in degree 0 only; half-space and empty cases handled; one point, not an indexed family.

### item — lem-de-rham-and-singular-cohomology-respect-countable-disjoint-unions

Decision: accepted. A simplex has connected image lying in one component, so chains/smooth chains and their duals split as direct sums/products; forms on a disjoint union are products; under AC_omega the product complex has H^*(prod)=prod H^* (kernels are products; images need one primitive per component and surjectivity one representative per class); comparisons commute with coordinate restrictions; empty index set and degree zero handled.

### item — thm-countable-mayer-vietoris-open-set-principle

Decision: accepted. Abstract principle: five-lemma step for U union V; continuous exhaustion with K_m in int K_{m+1} under AC_omega; bands A_j, opens O_j and finite basis covers V_j with A_j subset V_j subset O_j; V_even, V_odd and their disjoint-intersection decomposition give P(X) via countable products and one MV step; basis globalization for Euclidean opens, boundaryless manifolds and (with the extra half-box local hypothesis) boundary manifolds. Local hypothesis on rational boxes and half-boxes; no increasing-union continuity assumed.

### item — thm-smooth-and-continuous-real-singular-cohomology-agree

Decision: accepted. Restriction is natural for smooth maps, commutes with MV restrictions/differences/connectors (lift-differential comparison on small smooth simplices) and with countable products; it is an isomorphism on rational boxes and half-boxes by the convex-domain proposition; the countable MV principle then globalizes it to all smooth manifolds with boundary under AC_omega.

### item — fs-the-singular-boundary-of-a-simplex-is-the-unsigned-sum-of-its-faces

Decision: accepted. Explicit 2-simplex witness: unsigned faces give u^2 sigma=2[a]+2[b]+2[c] and u[a,b]=[b]+[a] != [b]-[a]; signed boundary squares to zero; constant edge example; correct refutation.

### item — fs-a-singular-cochain-is-a-finite-linear-combination-of-singular-simplices

Decision: accepted. On discrete X=N in degree zero the sum functional phi(sum a_n[n])=sum a_n is a legitimate cochain taking value 1 on every vertex; no finite linear combination of coordinate functionals has that property; correctly distinguishes chains from their dual and is choice-free.

### item — rem-dualizing-real-vector-space-sequences-and-the-choice-boundary

Decision: accepted. Under AC: basis extension makes i^* onto and ker i^*=im q^* verified. Under ZF+DC+BP: P=R^N with the product metric is complete; every linear functional on P is continuous (nonmeager A_m plus the Baire property, translation argument, bounded on a neighbourhood); then L(e_n)=0 off a finite coordinate set, contradicting l(e_n)=1 for the finite-sum functional, so P^*->E^* is not onto. Conditional, no consistency claim; the countability/DC selection cost of countable unions of meager sets is spelled out.

### item — fs-one-fixed-number-of-barycentric-subdivisions-makes-every-singular-simplex-cover-small

Decision: accepted. For the cover of R by (-inf,1/2) and (-1/2,inf), the smooth paths sigma_m(t)=sin(2 pi 2^m t) subdivide into 2^m affine pieces with signs; forward and backward pieces cannot cancel (distinct maps, values ±1 at t=1/4) and each has image [-1,1] in neither open set, so S^m sigma_m is not small. Correctly refutes a single fixed depth for all simplices (no claim that one simplex defeats all depths).

### item — fs-every-continuous-singular-simplex-is-smooth

Decision: accepted. The cusp sigma(t)=|t-1/2| is continuous but not differentiable at 1/2 (one-sided derivative limits ±1), so it admits no smooth extension; endpoints agree but the interior defect persists; correct refutation.

### item — rem-dualizing-real-chain-complexes-requires-an-exactness-argument

Decision: accepted. Under AC the evaluation map epsilon: H^n(C^*) -> Hom(H_n,R) is an isomorphism (restriction to cycles descends; extension of functionals on Z_n and on B_{n-1} uses basis extension; both directions verified), and it is natural in chain maps. Under ZF+DC+BP the acyclic complex E->P->P/E has H^2 of the dual equal to E^*/im(P^*->E^*) nonzero by the non-extension of the finite-sum functional. Conditional statement, no consistency claim.

### item — def-connection-on-a-smooth-vector-bundle

Decision: repaired. The previous accepted text consumed the published dual/Hom existence clause without its missing topology/second-countability proof. Repaired by the complete choice-free frame/image-tuple open-quotient construction in def-connection-on-a-smooth-vector-bundle, and routed this item through that existing local interface. Removed its direct dependency on the defective published theorem. Original operator, dual pairing, difference and tensor formulas remain unchanged. Construction and direct suppliers were read before authoring; independent Astra reader checked full construction with confidence1. No added item/pair or choice assumption.

### item — def-covariant-derivative-of-a-section-in-a-vector-field-direction

Decision: accepted. nabla_X s = (nabla s)(X) fibrewise; smoothness by local component sums; direction used only at the point; zero direction/section cases; no choice.

### item — prop-connection-laws-in-directional-form

Decision: accepted. The three directional laws follow from fibrewise linearity, R-linearity and the Leibniz rule. Converse verified with plateaus cutoffs (including boundary charts and dimension zero): vanishing near p forces local dependence via chi X=0; coordinate expansion and function-linearity give pointwise dependence on X(p); testing fs yields eta_{fs}=df tensor s+f eta_s, so D determines a unique connection. Finitely many cutoffs only.

### item — lem-a-bundle-connection-is-local-and-restricts-to-open-sets

Decision: accepted. Sections agreeing near p have equal derivatives (0=nabla_v(chi s)=d chi_p(v)s(p)+chi(p)nabla_v s for a cutoff chi=1 at p supported where s vanishes); direction depends only on X(p); restriction to open U by cutoff extension by zero is well-defined, smooth and satisfies the connection laws; uniqueness and composition of nested restrictions; boundary points included.

### item — def-connection-one-form-in-a-local-frame

Decision: accepted. omega^i_j(X) characterized by nabla_X e_j=sum_i omega^i_j(X)e_i; well-defined by unique frame coordinates of the smooth Hom section; conventions e row/u column, e'=eA with u=Au' stated; omega^i_j=sum Gamma^i_{kj}dx^k with no tensorial claim; rank zero/one and zero-dimensional cases.

### item — prop-local-coordinate-formula-for-a-bundle-connection

Decision: accepted. nabla_X(eu)=e(X(u)+omega(X)u) by the section Leibniz rule on finitely many summands; one-form form nabla s=e(du+omega u) by pointwise evaluation; empty frame/rank cases.

### item — thm-connection-one-form-transformation-law

Decision: accepted. From nabla e'=e(dA+omega A)=eA omega' one gets A omega'=dA+omega A and hence omega'=A^{-1}omega A+A^{-1}dA; rank one and constant/identity cases checked; smooth invertibility required.

### item — thm-local-connection-forms-glue-exactly-when-they-obey-the-transformation-law

Decision: accepted. Necessity is the transformation law; sufficiency: local eta_s=e_alpha(du_alpha+omega_alpha u_alpha) is smooth and agrees on overlaps by du_alpha+omega_alpha u_alpha=A(du_beta+omega_beta u_beta) (product rule plus the assumed law); real-linearity and Leibniz verified; uniqueness by the Leibniz rule on frame expansions; no local finiteness or choice.

### item — prop-the-difference-of-two-connections-is-an-endomorphism-valued-one-form

Decision: repaired. The previous accepted text consumed the published dual/Hom existence clause without its missing topology/second-countability proof. Repaired by the complete choice-free frame/image-tuple open-quotient construction in def-connection-on-a-smooth-vector-bundle, and routed this item through that existing local interface. Removed its direct dependency on the defective published theorem. Original operator, dual pairing, difference and tensor formulas remain unchanged. Construction and direct suppliers were read before authoring; independent Astra reader checked full construction with confidence1. No added item/pair or choice assumption.

### item — prop-adding-an-endomorphism-valued-one-form-to-a-connection-gives-a-connection

Decision: accepted. eta_s(p)(v)=B_p(v)s(p) is smooth, R-linear with eta_{fs}=f eta_s, so nabla+B satisfies the connection axioms; the connection set is an affine space modeled on endomorphism-valued one-forms (free and transitive via the difference proposition); no nonemptiness claim and no choice of origin beyond the given connection.

### item — thm-every-smooth-vector-bundle-admits-a-connection

Decision: accepted. Under full AC (explicitly inherited for the partition-of-unity and frame selections, including the point-indexed subordinate chart and bump choices): choose trivializing frames, a subordinate smooth partition, set nabla^(i)=componentwise derivative in the i-th frame, extend rho_i nabla^(i)(s|U_i) by zero (smooth, locally finite supports), and sum; Leibniz verified with sum rho_i=1. Boundary partitions and rank-zero/empty cases handled; the AC assumption is stated, not hidden.

### item — def-pullback-connection

Decision: accepted. Prescription (f^*nabla)_X((f^*e)u)=(f^*e)(X(u)+(f^*omega)(X)u) with (f^*omega)_q(v)=omega_{f(q)}(df_q v); coefficients need not factor through f; constant f example noted; well-definedness deferred to the next theorem; no rank condition on df and no choice.

### item — thm-pullback-connection-is-well-defined-and-functorial

Decision: accepted. Pulling back the transformation law through f (composition preserves products/inverses; chain rule d(A circ f)=f^*dA) gives the overlap condition, so the gluing criterion yields a unique connection; functoriality (g^*f^*=(f circ g)^*, id^*=id) from the chain rule and canonical pullback isomorphisms; (f^*nabla)_X(f^*s)=(nabla s)_{f(q)}(df_q X_q) verified; no AC.

### item — def-dual-connection

Decision: repaired. The previous accepted text consumed the published dual/Hom existence clause without its missing topology/second-countability proof. Repaired by the complete choice-free frame/image-tuple open-quotient construction in def-connection-on-a-smooth-vector-bundle, and routed this item through that existing local interface. Removed its direct dependency on the defective published theorem. Original operator, dual pairing, difference and tensor formulas remain unchanged. Construction and direct suppliers were read before authoring; independent Astra reader checked full construction with confidence1. No added item/pair or choice assumption.

### item — lem-finite-tensor-products-of-smooth-vector-bundles

Decision: repaired. The previous accepted text consumed the published dual/Hom existence clause without its missing topology/second-countability proof. Repaired by the complete choice-free frame/image-tuple open-quotient construction in def-connection-on-a-smooth-vector-bundle, and routed this item through that existing local interface. Removed its direct dependency on the defective published theorem. Original operator, dual pairing, difference and tensor formulas remain unchanged. Construction and direct suppliers were read before authoring; independent Astra reader checked full construction with confidence1. No added item/pair or choice assumption.

### item — def-product-connection-on-tensor-and-hom-bundles

Decision: accepted. Product connection characterized on elementary tensors and constructed intrinsically by (nabla_X T)(alpha_1,...,alpha_k)=X(T(alpha))-sum T(...,(nabla^j)^*_X alpha_j,...); function-linearity in each dual argument by cancellation; smooth local coefficients; reduction to the displayed sum on pure tensors and compatibility with the balanced relation; Hom identification with F tensor E^* and the Hom connection formula; empty-product/zero-rank conventions distinguished; finite frames only.

### item — prop-induced-connections-commute-with-contraction-and-permutation

Decision: accepted. Permutation identity on elementary tensors (no sign for ordinary tensor permutation); contraction identity from ((nabla_X alpha)(s)+alpha(nabla_X s))T=X(alpha(s))T; extension to general sections by finite product-frame expansions; full contraction and empty/zero-rank cases; no AC.

### item — prop-induced-connection-on-exterior-powers-is-a-degree-zero-derivation

Decision: accepted. Exterior powers as alternating tensors with the basis of increasing-index signed sums; alternation commutes with nabla_X (commutes with permutations and constants), so the induced connection exists; wedge identity nabla_X(S wedge T)=(nabla_X S) wedge T+S wedge(nabla_X T) with no graded sign (degree-zero operator) derived from the product rule; k=0,1 and k>rank cases.

### item — def-vector-field-and-section-along-a-smooth-curve

Decision: accepted. Section along gamma = smooth section of the pullback bundle gamma^*E, equivalently V with pi(V(t))=gamma(t); values in the fibre over the parameter even when gamma repeats (constant-curve example V(t)=tv correctly shows no ambient extension is needed); piecewise smooth sections continuous with smooth pieces; singleton/empty conventions; no differentiability claimed on a singleton.

### item — def-covariant-derivative-along-a-curve

Decision: accepted. D_tV=(gamma^*nabla)_{partial_t}V using the pullback connection; R-linear with D_t(fV)=f'V+fD_tV; one-sided endpoint derivatives and separate corner derivatives; singleton has no operator by convention (identity transport); zero section/rank zero give zero; constant curves can have nonzero coefficient derivative.

### item — thm-covariant-derivative-along-a-curve-is-independent-of-frame-and-extension

Decision: accepted. gamma^*nabla is intrinsic so frame-independent; if V=s circ gamma then D_tV=(nabla s)_{gamma(t)}(dot gamma(t)) by the pullback section identity; two ambient extensions agreeing along gamma give the same derivative; correctly scoped as an agreement assertion (no claim that every along-curve section extends); no choice.

### item — prop-local-frame-formula-for-covariant-differentiation-along-a-curve

Decision: accepted. D_tV=e(gamma(t))(v'+Bv) with B(t)=omega_{gamma(t)}(dot gamma(t)); parallel iff v'=-Bv; frame-change consistency v=Cw with B'=C^{-1}BC+C^{-1}C' verified; zero velocity allowed and no inverse of dot gamma used; rank/endpoint cases.

### item — def-parallel-section-along-a-curve

Decision: accepted. Parallel means D_tV=0, i.e. v'=-omega(dot gamma)v in a pulled-back frame; piecewise version continuous with separate one-sided derivatives per piece; singleton convention; zero section parallel; constant-curve constant coefficients characterization.

### item — thm-existence-and-uniqueness-of-parallel-sections

Decision: accepted. Local solve by the global linear-matrix-ODE supplier on compact frame segments (matrix solution with v_0 in the first column, zero other columns, gives vector solutions and uniqueness); finite mesh by the Lebesgue number with finitely many chosen frames; artificial subdivision points are smooth by local uniqueness; general intervals by compact-subinterval patching; singleton/empty cases; no AC.

### item — def-parallel-transport-along-a-piecewise-smooth-curve

Decision: accepted. P_gamma(v)=V_v(b) for the unique continuous piecewise parallel section; P_{gamma;s,t} both orders; independence from frames/subdivisions by the existence/uniqueness theorem; singleton identity; zero initial data maps to zero; the transport depends on the supplied connection and curve.

### item — thm-parallel-transport-is-a-linear-isomorphism

Decision: accepted. Linearity from cV_v+dV_w=solution with initial cv+dw and uniqueness; P_{gamma;t,s}P_{gamma;s,t}=id both ways by restarting uniqueness; reversal via the chain rule (v circ h)' + omega((gamma circ h)')(v circ h) = h'(v'+omega(dot gamma)v) circ h = 0; singleton/rank-zero cases.

### item — prop-parallel-transport-under-reparametrization-reversal-and-concatenation

Decision: accepted. D_u(V circ h)=h'(u)(D_tV)(h(u)) gives invariance under endpoint-preserving increasing reparametrization (including h'=0) and reversal for decreasing maps; concatenation by pasting the two parallel sections at the join and uniqueness; finitely many pieces; rank-zero/singleton cases.

### item — prop-pullback-connections-intertwine-parallel-transport

Decision: accepted. Canonical gamma^*(f^*E) ~= (f circ gamma)^*E identifies the connections (functoriality) and hence the parallel sections; both coefficient equations use omega_{f(gamma(t))}(df dot gamma); the fibre identifications J_t give J_b P^{f^*nabla}=P^nabla_{f circ gamma} J_a; no injectivity or nonzero velocity required; canonical identifications only.

### item — def-metric-compatible-connection-on-a-riemannian-vector-bundle

Decision: accepted. X(h(s,t))=h(nabla_X s,t)+h(s,nabla_X t), equivalently nabla h=0 in E^* tensor E^*; local matrix form X(H)=omega(X)^T H+H omega(X) both necessary and sufficient; pointwise testability; rank-zero vacuous; metric supplied so no metric existence used.

### item — prop-a-connection-is-metric-compatible-iff-parallel-transport-is-isometric

Decision: accepted. Compatibility => (v^T H w)'=0 along parallel solutions, so transport is isometric across pieces. Converse: isometry of transports makes v^T H w constant, differentiating gives v_0^T(zH-omega(z)^T H-H omega(z))w_0=0 and testing basis pairs yields the compatibility matrix identity, including a boundary normal direction by one-sided lines; finite tests only, no AC.

### item — def-affine-connection-on-a-smooth-manifold

Decision: accepted. Affine connection = connection on TM with function-linearity in X, R-linearity in Y, and nabla_X(fY)=X(f)Y+f nabla_XY; explicitly neither metric nor torsion-freeness; tangent-bundle specialization allows the bracket comparison; boundary/empty/zero-dimensional cases.

### item — def-christoffel-symbols-of-an-affine-connection

Decision: accepted. Gamma^k_{ij} defined by nabla_{partial_i} partial_j=sum_k Gamma^k_{ij}partial_k with the stated index convention; omega^k_j=sum_i Gamma^k_{ij}dx^i; explicitly no symmetry or tensoriality asserted; dimension zero/one and boundary charts addressed.

### item — thm-christoffel-symbol-transformation-law

Decision: accepted. With J^i_a=partial x^i/partial y^a, nabla_{partial_{y^a}}partial_{y^b}=(partial_{y^a}J^k_b+J^i_aJ^j_bGamma^k_{ij})partial_{x^k} and the chain rule give the displayed transformation with the inhomogeneous second-derivative term; identity and affine changes checked; dimension cases.

### item — def-torsion-tensor-of-an-affine-connection

Decision: accepted. T(X,Y)=nabla_XY-nabla_YX-[X,Y] using the Lie bracket supplier; tensoriality proved in the next lemma; torsion-free when T=0; tangent-bundle-specific; boundary and dimension-zero remarks.

### item — lem-torsion-is-c-infinity-bilinear-and-skew-symmetric

Decision: accepted. T(fX,Y)=fT(X,Y) by expansion and cancellation; skew-symmetry from the bracket and exchanged derivatives; local coordinate expansion T=sum X^iY^jT(partial_i,partial_j) shows pointwise dependence and smoothness; intrinsic so frame independent; dimension zero/one cases; no choice.

### item — prop-torsion-free-is-equivalent-to-symmetric-christoffel-symbols-in-coordinate-frames

Decision: accepted. T(partial_i,partial_j)=sum_k(Gamma^k_{ij}-Gamma^k_{ji})partial_k since coordinate brackets vanish, so torsion-free iff symmetric in every chart; conversely symmetry on a chart cover plus tensoriality gives T=0; the criterion is correctly restricted to coordinate frames (noncoordinate brackets would enter).

### item — def-levi-civita-connection

Decision: accepted. Levi-Civita = metric compatible and torsion free, with both identities displayed; existence/uniqueness proved below from a supplied metric via Koszul; dimension zero/one remarks; no arbitrary connection presupposed and no choice.

### item — lem-koszul-formula-is-necessary-for-a-levi-civita-connection

Decision: accepted. Expanded S=Xg(Y,Z)+Yg(Z,X)-Zg(X,Y) by compatibility into six terms and substituted the torsion identities; symmetry cancels the gradient pairs leaving S=2g(nabla_XY,Z)-g(Z,[X,Y])-g(Y,[Z,X])+g(X,[Y,Z]); rearrangement gives the displayed K; recomputed independently and the displayed K matched; local and choice-free.

### item — thm-the-koszul-formula-defines-an-affine-connection

Decision: accepted. Verified K(X,Y,fZ)=fK (the six Xf/Yf terms cancel by metric symmetry), K(fX,Y,Z)=fK, and K(X,fY,Z)=fK+2(Xf)g(Y,Z); so nabla_XY=(1/2K(X,Y,.))^sharp is smooth (musical iso), function-linear in X and satisfies nabla_X(fY)=f nabla_XY+(Xf)Y since g(Y,.)^sharp=Y; the directional connection laws then give an affine connection; boundary points included; no AC.

### item — thm-fundamental-theorem-of-riemannian-geometry

Decision: accepted. For the Koszul connection: K(X,Y,Z)+K(X,Z,Y)=2Xg(Y,Z) gives metric compatibility, and K(X,Y,Z)-K(Y,X,Z)=2g(Z,[X,Y]) gives torsion-freeness; any Levi-Civita connection satisfies the same Koszul identity, so nondegeneracy gives uniqueness; boundary and degenerate-dimension cases; no choice beyond the construction.

### item — prop-christoffel-formula-for-the-levi-civita-connection

Decision: accepted. Inserting coordinate fields into the Koszul identity (brackets vanish) gives 2sum_k Gamma^k_{ij}g_{k l}=partial_i g_{j l}+partial_j g_{i l}-partial_l g_{ij}; multiplying by g^{m l} gives the displayed formula; constant metric/dimension one and zero cases; recomputed.

### item — prop-levi-civita-parallel-transport-preserves-lengths-angles-and-volume

Decision: accepted. Metric compatibility plus the isometric-transport equivalence preserve g(v,w), lengths and angles of nonzero vectors; the Gram determinant det(V^TGV) equals (det V)^2 det G so the density coefficient is preserved; oriented volume form preserved by continuity of the sign along the curve using one transported basis; dimension zero/one and boundary cases; no AC.

### item — prop-levi-civita-connection-commutes-with-musical-isomorphisms

Decision: accepted. (nabla_X alpha)(Y)=Xg(A,Y)-g(A,nabla_XY)=g(nabla_XA,Y) by compatibility, so (nabla_X alpha)^sharp=nabla_X(alpha^sharp); substituting alpha=Y^flat and using inverse musical identities gives nabla_X(Y^flat)=(nabla_XY)^flat; local, boundary and degenerate cases.

### item — prop-gradient-hessian-and-divergence-connection-formulas

Decision: accepted. Hess f(X,Y)=g(nabla_X grad f,Y)=(nabla_X df)(Y)=X(Yf)-(nabla_XY)f with coordinate form partial_i partial_j f-Gamma^k_{ij}partial_k f; direction-linearity makes v->nabla_vX a fibre endomorphism so the trace formula is basis independent (tr(AB)=tr(BA) checked); Gamma^i_{ik}=1/2 g^{i l}partial_k g_{i l} and the determinant/divergence expansion verified; agrees with the earlier divergence definition; boundary and dimension cases.

### item — prop-the-riemannian-hessian-is-symmetric

Decision: accepted. Subtracting the two Hessian formulas gives [X,Y]f-(nabla_XY-nabla_YX)f=0 by torsion-freeness; tensoriality gives all vectors; no commutativity of X,Y assumed; boundary/dimension cases.

### item — rem-holonomy-of-a-connection

Decision: accepted. Hol_p defined as transports around finite piecewise smooth based loops; subgroup properties from the concatenation/reversal laws and linear invertibility; rank-zero and empty-base conventions; explicitly no homotopy invariance or path independence; curvature/holonomy classification deferred.

### item — fs-a-connection-is-c-infinity-linear-in-the-section-being-differentiated

Decision: accepted. Rank-one trivial bundle with nabla_X(u e)=X(u)e, X=partial_x, f=x, s=e: nabla_X(fs)=e but f nabla_X s=0, so the alleged C-infinity-linearity in the section fails; the missing Leibniz term X(f)s is exhibited; correct refutation.

### item — fs-christoffel-symbols-are-components-of-a-tensor

Decision: accepted. On (0,infinity) with nabla_{partial_x}partial_x=0, the coordinate y=log x gives Gammatilde=(dy/dx)(d^2x/dy^2)=1, while tensoriality would force T(partial_y,partial_y)=x^2T(partial_x,partial_x)=0; nonzero Jacobian so not a coordinate artifact; correct refutation.

### item — fs-parallel-transport-depends-only-on-the-endpoints-of-a-curve

Decision: accepted. On R^2 x R with omega=x dy, the unit square loop has multiplier e^{-1} (coefficients 0,1,0,0 with solution multipliers 1,e^{-1},1,1) while the constant loop has multiplier 1; they differ on the unit vector; correct and uses no curvature theorem.

### item — fs-every-affine-connection-is-the-levi-civita-connection-of-a-riemannian-metric

Decision: accepted. On R^2 with omega^x_y=dx one has T(partial_x,partial_y)=partial_x nonzero everywhere; torsion is metric-independent, so this connection is not Levi-Civita for any metric; correct refutation.

### item — fs-torsion-free-means-curvature-free

Decision: accepted. Supplies its own local curvature definition and verifies its C-infinity-trilinearity (including the X(Yf)-Y(Xf) cancellation by the bracket derivative); for g=e^{2x^2}(dx^2+dy^2) the Christoffels are computed, torsion is zero, and R(partial_x,partial_y)partial_y=-2partial_x nonzero (even at x=0); correct refutation without invoking later curvature theory.

### item — fs-every-connection-on-a-riemannian-vector-bundle-is-metric-compatible

Decision: accepted. On the trivial line with the standard metric and nabla(ue)=(du+u dx)e, with s=t=e and X=partial_x the compatibility identity reads 0=2, failing; correct refutation showing compatibility is an extra condition.

### item — ex-the-flat-connection-on-a-trivial-vector-bundle

Decision: accepted. Constant frame with omega=0 gives componentwise derivative; direction-linearity and Leibniz verified; flatness checked directly by X(Yu)-Y(Xu)-[X,Y]u=0; rank zero/one and empty/zero-dimensional base cases.

### item — ex-a-connection-one-form-on-a-trivial-line-bundle

Decision: accepted. nabla(ue)=(du+au)e verified as a connection with connection form a; for a=x dy the two derivatives give the displayed formulas (nabla_{partial_y}(ye)=(1+xy)e=2e at (1,1)); endpoint cases; no choices.

### item — ex-gauge-transformation-of-a-connection-one-form

Decision: accepted. e'=e e^f gives omega'=omega+df by the transformation law; the example shows the constant section has new coefficient e^{-x} and zero new covariant derivative, confirming the same connection; frame never vanishes; correct.

### item — ex-pullback-of-the-flat-connection

Decision: accepted. Pullback of the flat connection is componentwise derivative on the canonically identified product (matrix f^*0=0); constant map still differentiates arbitrary varying pullback sections (s(t)=t e_1 has derivative e_1); no immersion/injectivity needed.

### item — ex-parallel-transport-for-a-scalar-linear-ode

Decision: accepted. v'=-c(t)v solved by exp(-int_a^b c); continuity across finitely many pieces and corner matching verified; multiplier positive and nonzero; reversal reciprocal; c=0 and singleton cases; explicit scalar integration only.

### item — ex-the-euclidean-levi-civita-connection

Decision: accepted. Cartesian Christoffels vanish so nabla_XY=sum_j X(Y^j)partial_j; parallel components constant across pieces and corners; example computation checked; n=0/1 cases; no AC.

### item — ex-christoffel-symbols-in-polar-coordinates

Decision: accepted. Metric diag(1,r^2) gives the three nonzero symbols Gamma^r_{theta theta}=-r and Gamma^theta_{r theta}=Gamma^theta_{theta r}=1/r; all others vanish; the chart excludes r=0 and no metric singularity at the origin is asserted; recomputed.

### item — ex-levi-civita-connection-of-a-conformal-plane-metric

Decision: accepted. For g=e^{2u}(dx^2+dy^2) substitution gives Gamma^k_{ij}=delta^k_j u_i+delta^k_i u_j-delta_{ij}u_k; the u=x^2 entries (2x,-2x,2x,2x) recomputed; conformal factor positive; constant u gives zero symbols.

### item — ex-parallel-transport-on-the-round-sphere-along-the-equator

Decision: accepted. Smooth sphere structure supplied by graph charts; nabla_XY=D_XY+<X,Y>p verified as an affine connection (tangency, smoothness, Leibniz), metric compatible and torsion-free (bracket identity on components, normal terms cancel), hence Levi-Civita; D_t^nabla V=V'+<dot gamma,V>gamma; T,N are parallel and equal their t=2pi values, so equatorial transport is the identity.

### item — cex-a-torsion-free-connection-that-is-not-metric-compatible

Decision: accepted. On R with g=dx^2 and Gamma^1_{11}=1 the connection is torsion-free but compatibility fails (0 vs 2 for X=Y=Z=partial_x); the same connection IS compatible with gtilde=e^{2x}dx^2 (differing by a local conformal factor), so the statement's failure is correctly isolated.

### item — cex-path-dependent-parallel-transport-on-the-sphere

Decision: accepted. Three quarter great circles e1->e2->e3->e1: the input e2 becomes -e1 at e2, stays -e1 on the second arc, and becomes e3 at e1; the constant loop fixes e2, so transport depends on the path. Explicit parallel fields and corner handling verified; no curvature formula used.

### item — ex-hessian-and-divergence-in-euclidean-coordinates

Decision: accepted. Cartesian Hessian and divergence formulas; for f=x^2y and X=x^2partial_x+xy partial_y the matrix [[2y,2x],[2x,0]] and divergence 3x recomputed; constant f and zero X cases; dimension zero/one.

### item — ex-a-finite-chain-needing-different-subdivision-depths-on-its-simplices

Decision: accepted. For the cover (-inf,3/4),(-1/4? no (1/4,inf))... the constant path kappa has depth 0 and sigma(t)=t has depth 1 (S sigma splits into [1/2,1] and [0,1/2]); common bound one for the chain; correct example of varying depths within a finite chain.

### item — ex-canonical-zero-extension-of-an-overlap-cochain

Decision: accepted. U=(-2,1), V=(-1,2), overlap vertex 0 and U-only vertex -3/2: E_U eta has values 2 at p and 0 at q, so (E_U eta)(3[p]-[q])=6; restriction back to the overlap recovers eta; degreewise extension, no coboundary commutation claim; no choices.

### item — ex-smooth-singular-simplices-in-a-coordinate-ball

Decision: accepted. sigma(lambda)=psi^{-1}(sum lambda_i v_i) is smooth with the explicit common extension L^{-1}(B) containing the closed simplex; the uniform margin argument with compact K and r<R verified; k=0, repeated vertices and dimension-zero cases.

### item — cex-a-continuous-nowhere-differentiable-singular-one-simplex

Decision: accepted. Takagi path T is continuous (uniform majorant 2^{-n-1}) with T(0)=T(1)=0 and T(1/2)=1/2 (terms vanish for n>=1); the nested dyadic secant slopes sum consecutive signs ±1 and cannot converge, so no finite derivative anywhere; hence not smooth; explicit and choice-free.

### item — ex-relative-smoothing-fixes-the-endpoints-of-a-path

Decision: accepted. Faces of Delta^1 are disjoint points, so the smoothing lemma applies with constant face homotopies giving an endpoint-fixed homotopy to a smooth path; the explicit cusp-to-constant homotopy H(t,s)=(1-s)|t-1/2|+s/2 verified; AC_omega only through the smoothing lemma.

### item — ex-singular-cohomology-of-a-point-from-the-cochain-complex

Decision: accepted. One simplex per degree; partial s_k=(sum(-1)^i)s_{k-1} is zero for odd k and s_{k-1} for even k>0; delta^k is zero for even k and identity for odd k; kernel/image quotient gives H^0=R and H^k=0 for k>0; negative groups zero; all degenerate simplices retained.

### item — rem-hom-of-homology-is-not-the-definition-of-singular-cohomology

Decision: accepted. States the kernel/image definition, its choice-free well-definedness, the natural evaluation map into Hom(H_n,R) (representative independence of both variables), and that its isomorphism under AC is a theorem about functional extensions, not the definition; point/empty cases; no counterexample claimed.

### page — singular-cochains-mayer-vietoris-and-smooth-singular-comparison

Decision: accepted. Read the full A-page prose against all 31 items in manifest order. Verified: real cochains as arbitrary functions on the simplex basis with finite-chain evaluation; the V-minus-U MV difference and explicit zero extension; the smooth extension convention and subdivision/prism preservation with time flattening; the boundaryless compatible-face smoothing with the explicit boundary-target counterexample; the finite inward push giving the full smooth/continuous homology comparison; the convex-domain, countable-product and exhaustion-band globalization with AC_omega; and the separate AC vs ZF+DC+BP dualization remarks (conditional, no consistency claim). Page-level statements match the reviewed items.

### page — singular-cochains-mayer-vietoris-and-smooth-singular-comparison-examples

Decision: accepted. Read the complete B-page prose and all seven examples: varying subdivision depths, the canonical overlap zero extension, smooth affine simplices with an explicit common extension neighbourhood, the Takagi nowhere-differentiable simplex, endpoint-relative path smoothing, the unnormalized point cohomology computation, and the distinction between the definition of cohomology and its AC evaluation isomorphism. Consistent with the suppliers named in each item.

### page — connections-levi-civita-and-parallel-transport

Decision: accepted. Read the full A-page prose against all 52 items in manifest order. Claims checked: locality, open restriction and frame-transformation law before gluing; the connection set as an affine space; the explicit full-AC assumption in the bundle connection-existence theorem; pullback/dual/tensor/Hom/exterior connections with smooth bundle interfaces; sections along curves and the ODE-based existence, uniqueness and transport laws; the Koszul construction of the unique Levi-Civita connection and the Christoffel, torsion, metric-transport, Hessian and divergence consequences; and the six refutations (coefficient non-tensoriality, torsion vs compatibility/curvature, path dependence, non-Levi-Civita connections and non-compatible connections). The curvature witness supplies its own tensoriality proof as stated.

### page — connections-levi-civita-and-parallel-transport-examples

Decision: accepted. Read the complete B-page prose and all twelve examples: flat trivial bundle, line-bundle connection form, gauge transformation, pullback flatness, scalar ODE transport, Euclidean/Cartesian, polar and conformal Christoffels, sphere Levi-Civita and equatorial vs three-arc transport, the torsion-free non-compatible connection (with the second metric making it compatible), and the Euclidean Hessian/divergence calculation. Inventory order matches the manifest and no item relies on later curvature theory.

## Edits made

1. `items/thm-complete-exhaustive-filtered-complex-convergence-criterion.md` — Source notes, final sentence.
   Stale claim "The existing Step 3 escalation remains for owner resolution" was replaced by an
   accurate reference to the owner repair record
   `research/phase-2-next-20-step3b-owner-thm-complete-exhaustive-filtered-complex-convergence-criterion.json`
   (decision `repaired`, owner `true`, 2026-09-10T17:54:52Z). Defect ledger id
   `p2-next20-5a-e-convergence-stale-escalation-note` (disposition `fixed`). No mathematical
   statement, hypothesis, proof step, dependency, source or AC use changed.

2. `library/homological-algebra/double-complexes-exact-couples-and-convergence.md` — convergence paragraph.
   Same stale claim about a pending owner-held Step 3 decision replaced by the accurate
   resolution statement. Defect ledger id `p2-next20-5a-e-convergence-page-stale-escalation`
   (disposition `fixed`). Page inventory, order, requires, dependency records and prose mathematics
   unchanged.

Both edits are recorded as verdict `repaired` in the decisions file; every other obligation is
`accepted` with empty `defect_ids`.

Recorded repairs elsewhere (contracts): 42 + 40 + 36 = 118 `risk_review` dispositions added to
`research/phase-2-next-20-batch-7/8/9.proof-contracts.json` (status complete, reviewer
"Step 5A Alpha group e", item-specific notes). No other file was edited.

No definitions or lemmas were added: no missing local dependency was found in the assigned batches.
All declared dependencies were present on disk, and the AC/DC declarations in dependency items
matched the uses made of them.

## Source evidence

- Weibel, *An Introduction to Homological Algebra*, Chapter 5 (full PDF read as extracted text,
  /tmp/alpha-e/weibel5.txt, 40 pages): Exercise 5.9.1 and Example 5.9.3/Theorem 5.9.4 (printed
  pp.154–156) confirm `E^r = Z^r/B^r` with `Z^r=k^{-1}(i^rD)`, `B^r=j(ker i^r)` and the natural
  isomorphism with the filtered-subquotient construction; Corollary 5.5.8 (Boardman criterion),
  Proposition 5.5.9 (`lim Q_p=0` for complete filtrations) and Theorem 5.5.10 (complete+exhaustive+
  regular => weak convergence; bounded above => convergence) at printed pp.138–140 are the exact
  source statements behind `thm-complete-exhaustive-filtered-complex-convergence-criterion`, whose
  authored proof replaces Weibel's Grothendieck 5.8.7 route with the local Delta/tower lemmas.
- Stacks Project tags 011P/011Q read live (`curl`): Definition 12.21.1 and Lemma 12.21.4
  (`Z_{r+1}=f^{-1}(Im a^r)`, `B_{r+1}=g(Ker a^r)`, with f=k, g=j under this page's convention) and
  Definition 12.24.7 (outgoing-only "regular" convention) confirm the exact-couple page's formulas
  and the flagged terminology difference. The item cites these tags itself.
- Hatcher, Miller, Park, Datar and Merry locators were used as recorded in each item's contract and
  coverage rows; item-level notes in the risk_review entries name the exact statements checked.
  (The run's source-fetch stamps remain owner-escalated; this review read the passages it cites via
  the recorded browser/extraction routes, not a fetch stamp.)
- For the singular UCT/Künneth/excision items the cited Miller §25–28 and Hatcher §3.1 arguments
  were read in the run's coverage-recorded extracts; the local proofs were checked independently
  against those statements.
- For the DG-19 connection items the Datar §5.1 extract (including the incomplete Proposition 5.1.8
  opening) was the recorded source; the authored proofs supply the missing gluing and Koszul
  identities explicitly, matching the owner's earlier disposition that the source proof is
  inadequate as a supplier.

## Local suppliers and interfaces used

- `thm-cover-small-inclusion-is-a-chain-homotopy-equivalence`, `def-cover-small-singular-chain-subcomplex`,
  `thm-short-exact-two-open-singular-chain-mayer-vietoris-sequence`, `lem-pid-complex-decomposes-into-two-term-cycle-boundary-pieces`,
  `thm-free-modules-are-projective-with-choice-boundary`, `thm-every-independent-set-extends-to-a-basis`,
  `thm-relative-whitney-approximation-for-manifold-valued-maps`, `thm-whitney-approximation-for-manifold-valued-maps`,
  `lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval`,
  `thm-smooth-partitions-of-unity-exist-on-manifolds(-with-boundary)`,
  `thm-the-pullback-fibre-product-is-a-smooth-vector-bundle`, `thm-the-musical-maps-are-smooth-inverse-bundle-isomorphisms`
  and the new-run local suppliers `lem-singular-uct-extension-from-cycle-projections`,
  `lem-singular-product-chain-equivalence-by-simplex-models`, `lem-canonical-extension-by-zero-of-a-singular-cochain-on-a-simplex-basis`,
  `lem-compatible-smooth-simplex-faces-have-a-neighbourhood-extension`, `lem-relative-smoothing-of-a-continuous-simplex-along-its-faces`,
  `lem-a-bundle-connection-is-local-and-restricts-to-open-sets` were read at their statements/proof
  interfaces and used exactly as declared. No supplier was found missing or mis-declared.
- The three local tower/Delta lemmas (`lem-countable-tower-completion-obstruction-exact-sequence`,
  `lem-countable-tower-six-term-limit-sequence`, `lem-two-by-two-delta-complex-for-a-double-tower`,
  `lem-boardman-approximate-cycle-obstruction-sequence`) were checked line by line; they supply the
  complete-convergence criterion without the forbidden later HA-17 Grothendieck route.

## Required shared-plan / Phase-2 amendments (for the serial lead)

1. `thm-complete-exhaustive-filtered-complex-convergence-criterion` is now an authored, locally
   complete proof of Weibel 5.5.10's two clauses under the stated precise diagonal hypothesis.
   Its Step 3b owner record already exists; the two stale prose/notes sentences referring to the
   escalation were repaired. No scope, inventory or plan change is required.
2. Terminology: `def-regular-spectral-sequence` keeps the design's two-sided meaning of "regular"
   and explicitly names Stacks' outgoing-only convention as *outgoing regularity*. If the serial
   lead later renames the design term, only the wording (not any mathematical content) changes.
3. `thm-every-smooth-vector-bundle-admits-a-connection` explicitly assumes full AC and states that
   the published partition-of-unity/locally-finite-cover suppliers' point-indexed selections are
   consumed under that stronger assumption (their own AC_omega contract debt remains recorded in
   the canonical ledger). No new supplier from this run closes that published debt.
4. DG-16's countable globalization chain (`thm-countable-mayer-vietoris-open-set-principle` →
   `thm-smooth-and-continuous-real-singular-cohomology-agree`) assumes AC_omega as declared in the
   items; no plan page needs a change, but downstream DG-17 consumers should inherit AC_omega.
5. No batch-7/8/9 item needs a new page, pair, or prerequisite edge. Page orders and the ten page
   inventory lists on disk match the three manifests exactly (checked item-by-item).

## Published findings for the canonical ledger (no new entry added; reasons below)

- The batch-8 Step-1/3 notes recorded published defects in
  `lem-the-cohomology-universal-coefficient-extension-map` and its consumers
  `thm-universal-coefficient-theorem-for-cohomology-over-a-pid`,
  `thm-the-cohomology-universal-coefficient-sequence-splits-nonnaturally`, and
  `cor-cohomology-over-a-field-is-dual-to-homology-for-finite-dimensional-complexes`.
  My review of the corresponding new topological items confirms they do **not** consume those
  defective published proofs (the new page proves its own `lem-singular-uct-extension-from-cycle-projections`
  and does not use the published extension-map item). These published findings were already handed
  to the canonical ledger by the batch notes; I did not find additional evidence requiring an edit,
  and published content remains read-only.
- The DG-19 partition-of-unity AC debt (published `thm-smooth-partitions-of-unity-exist-on-manifolds`,
  `lem-every-open-cover-of-a-manifold-has-a-countable-cover-by-relatively-compact-coordinate-balls-subordinate-to-it`,
  `lem-a-countable-coordinate-ball-cover-has-a-countable-locally-finite-shrinking`) is an existing
  canonical-ledger entry (the run matches the recorded UC34/later partition rows). The new connection
  existence theorem states the inherited full-AC assumption instead of hiding it; no new ledger row
  was created to avoid duplicating the existing entry.
- No published item was found defective by this review beyond those already recorded. The RP^2
  pinch lemma supplied in this run was verified (degree-two mod-two isomorphism via natural field
  duality) and is used by `cex-the-uct-splitting-is-not-natural`; it does not repair the published
  non-naturality statement in the canonical ledger, which was recorded separately.

## Checks run (local, honest)

- `node tools/risk-report.mjs research/phase-2-next-20-batch-{7,8,9}.proof-contracts.json --require-reviewed`
  → 0 errors for each batch (43/45/79 item(s) routed; all HIGH/CRITICAL items now carry a complete
  Alpha `risk_review`).
- `node tools/defect-ledger.mjs append --file /tmp/alpha-e/rows.json` → 2 rows appended and view
  re-rendered (7935 total rows). `validate` on the run was not rerun after the last writer's rows
  changed concurrently; the two appended rows carry all mandatory fields.
- Item/page inventory: every item and page in the three manifests has exactly one decision
  (`authored:<batch>:<id>`), with matching `id` and route; the ten page frontmatter item lists were
  compared with the manifests (no missing, no extra).
- Item files were read at the post-splice state; the two repairs invalidate the pre-5a carrier
  hashes of those two files only, and the engine's stamp/check recomputes them (the engine stamps
  current content, manifest and contract hashes before the routing gate).
- No precheck/depcheck/rendercheck was run by me on my batches (those are engine gates; running them
  repository-wide would mix other groups' in-flight carriers).

## Blockers / uncertainty

- None for mathematics: all 215 assigned items and 10 pages are accepted or (for the two stale-record
  repairs) repaired with `repair_confidence: 1`.
- Open owner-held matters are unchanged and not cleared here: the source-fetch stamps remain
  owner-escalated per the batch coverage rows, and the published items listed above remain
  read-only. This review does not claim independent judgment of those records.
- Honest scope note: this review checked the authored inferences and the interfaces it cites. It did
  not re-audit the full transitive closure of every ancestor item (hundreds of nodes); where an
  ancestor was load-bearing for a step I verified, it was read. No unresolved inference was
  accepted.

## Frontier dependency-ledger maintenance (owned consumers)

`research/phase-2-next-20-batch-9.cross-batch-dependencies.json` (group e's owned consumer input)
had three `open` rows recording that DG-16 required AT-6 suppliers that were still scaffold-only.
After this review those suppliers are authored and accepted, and the consumers' use of them was
checked item by item, so the three rows were updated to `status: "verified"` with the exact current
check recorded in their evidence:

- page `singular-cochains-mayer-vietoris-and-smooth-singular-comparison` ← page
  `singular-cohomology-and-coefficient-theorems` (all 26 batch-8 A items and the page prose read);
- `def-real-singular-cochain-complex` ← `def-singular-cochain-complex-with-coefficients`
  (the `Hom_Z(C_n(X;Z),R) ~= R^{S_n(X)} ~= Hom_R(C_n(X;R),R)` identification with positive
  coboundary is proved locally and both items were reviewed);
- `thm-mayer-vietoris-sequence-in-real-singular-cohomology` ←
  `thm-mayer-vietoris-sequence-in-singular-cohomology` (cochain SES exactness and the recorded sign
  relation `Delta_DG = -Delta_AT` under the otherwise identity identifications).

`node tools/frontier-dependency-ledger.mjs refresh --run phase-2-next-20` was then run and reported
"refreshed and deduplicated". Batches 7 and 8 keep their empty consumer inputs: their declared
suppliers are earlier published interfaces or earlier local items, not another selected batch.
