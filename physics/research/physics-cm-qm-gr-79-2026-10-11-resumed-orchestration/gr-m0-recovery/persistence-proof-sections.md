# Persistence: true gain of one derivative on the original interval

Necessary Statement correction: require the smooth datum to belong to S(K,R), explicitly norm u_0 in H^s <=R. A datum only taking values in K need not lie in the class for which T was chosen. Retain all higher Sobolev bounds and joint smoothness. Constants also depend on the fixed base uniform bound R_1 (hence the original R) unless that bound is explicitly reconstructed from the actual base norm using the existence proof; carrying R is the transparent choice.

Use the same cofinal Galerkin family used in the repaired existence proof. Do not first differentiate an unknown H^{m+1} limit. Add dependencies on the projection, ODE/time derivative/compactness-limit suppliers actually invoked, and a proved higher-order energy refinement. The following refinement has an elementary proof for m>=6 and is sufficient; no claim that an existing proof 'applies verbatim' is needed.

## Higher-order refinement to supply locally

Fix integer m>=6, a compact time slab I_0, a compact value set Q inside O, and rho>=0. For every Galerkin field z=z_N with values in Q and norm z in H^{m-1} <=rho, set g=partial_t z. There are constants independent of N with

- norm g in H^{m-2} <=C_rho;
- norm g in H^{m-1} <=C_rho(1+norm z in H^m);
- a norm z in H^m squared <=E_m(z)<=b norm z in H^m squared and |E_m'(z)|<=C_rho(1+E_m(z)).

Proof details: composition at order m-1 is bounded by C_rho. At order m, the chain expansion has at most one factor of order >=m-2, since 2(m-2)>m. All other factors have order <=m-3 and are L-infinity bounded by H^{m-1} embedding. The exceptional factor has L2 norm <=rho unless its order is m, in which case it is bounded by norm z in H^m. Thus norm F(z) in H^m <=C_rho(1+norm z in H^m). Density by Fourier truncation and a smooth compact-value cutoff justifies this expansion for nonsmooth fields, although each Galerkin z is already spatially smooth.

The first g bound is the corrected time-derivative lemma at base order m-1. For the second, write P_N(A^0(z)g)=-P_N(A^i(z)partial_i z+B(z)). For each |alpha|<=m-1, pair the differentiated equation with D^alpha g. Coercivity and projection self-adjointness give a norm D^alpha g <=norm D^alpha(A^i partial_i z+B)+norm [D^alpha,A^0]g. The source H^{m-1} bound is C_rho(1+norm z in H^m): in its Leibniz expansion coefficient derivatives <=m-3 are bounded in L-infinity, and coefficient derivatives m-2 or m-1 pair with at most one derivative of partial_i z, which is L-infinity bounded by the lower H^{m-1} norm (m>=6). The commutator is bounded by C_rho norm g in H^{m-2}: coefficient derivatives <=m-3 are L-infinity bounded and all derivatives on g have order <=m-2; for coefficient derivatives m-2 or m-1, at most one derivative lands on g, L-infinity bounded by its H^{m-2} norm. The asserted g estimate follows.

Now use the exact weighted energy identity from the repaired base energy lemma at order m. For a commutator [D^alpha,A(z)]v, |alpha|<=m, with v=g or partial_i z, terms with coefficient derivative gamma of order <=m-3 are bounded in L-infinity and the v derivative is controlled by H^{m-1}. Terms with |gamma|>=m-2 have at most two derivatives on v, which are L-infinity bounded by H^{m-2} because m-2-2>=2>3/2. Their coefficient derivative is L2 bounded by C_rho(1+norm z in H^m). The lower norms of g and partial_i z are bounded already. Consequently each commutator is <=C_rho(1+norm z in H^m). Also norm B(z) in H^m has this bound. The total derivative dot A^0(z) and spatial derivatives partial_i A^i(z) are L-infinity bounded using the lower norms of z and g. Pair each error with D^alpha z, sum, and use 2xy<=x^2+y^2 and energy equivalence: this gives |E_m'|<=C_rho(1+E_m). All constants use only the lower H^{m-1} bound, Q, I_0, m and coefficients.

## Replacement Facts and Proof

Facts: [L1] The repaired existence construction gives on the original interval (-T,T) a cofinal Galerkin family with values in a fixed compact Q subset K' and uniform H^s and H^{s-1} time derivative bounds, with a subsequence converging to u. [L2] The proved higher-order refinement above. [L3] Projection contraction and Fourier finite-sum Fatou preserve uniform higher norms in the limit; time derivatives of that subsequence have the convergence supplied by the corrected limit lemma. [L4] Gronwall applied to an absolute energy derivative bound controls both time directions.

**Given:** Countable Choice; integer s>=5; coefficient family; compact K subset int K'; datum u_0 in C-infinity intersect S(K,R); and the original T and Galerkin family of the repaired existence construction.

**Proof technique:** induction.

1.1 (Base approximation bounds.) Let rho_s be the uniform H^s bound for the Galerkin family of [L1]. These approximations all exist on the original (-T,T), independently of their higher norms; their values remain in Q. Their initial norms at every higher order m are <=norm u_0 in H^m by projection contraction. [L1, L3, base]

1.2 (Induction hypothesis.) Fix M>=s and assume the same entire cofinal Galerkin family has a uniform bound rho_M in H^M on (-T,T). [ih]

2.1 (Gain one derivative.) Apply [L2] with m=M+1>=6 and rho=rho_M. The approximations are spatially smooth and time-smooth ODE solutions, so their order-(M+1) energies are defined before any assertion about the limit. The refinement gives |E_{M+1}'|<=C_M(1+E_{M+1}) with C_M independent of N. The initial energy is <=b norm u_0 in H^{M+1} squared. Gronwall [L4] yields 1+E_{M+1}(t)<=(1+b norm u_0 in H^{M+1} squared)e^{C_M T}; equivalence therefore gives a uniform H^{M+1} bound rho_{M+1} on the original whole interval. The same refinement bounds partial_t u_N in H^M there. This proves the induction step from M to M+1. [step 1.2, L2, L3, L4]

3.1 (Higher bounds for the same solution.) Induction supplies those approximation bounds at every order. Apply finite Fourier-sum Fatou to the original convergent subsequence and its convergent time derivatives as in [L3]: u lies in L-infinity H^m and partial_t u lies in L-infinity H^{m-1} at every order, with the recursively obtained bounds. No change of T occurs. Uniqueness identifies any alternative construction with this u. [step 1.1, step 2.1, L3, discharge-induction]

3.2 (Joint smoothness.) At every integer q, the uniform H^q time derivative bound and the coefficientwise fundamental theorem give norm(u(t)-u(t')) in H^q <=C_q|t-t'| by applying the bound first to finite Fourier sums and then taking their supremum. Thus u is continuous into every H^q. The PDE writes partial_t u=-(A^0(t,x,u))^{-1}(A^i(t,x,u)partial_i u+B(t,x,u)); smooth composition and products, with one extra spatial order, make its right side continuous in every H^q. Integrating the coefficientwise identity yields u in C^1(time;H^q). Repeatedly differentiate this smooth coefficient formula in time; the chain and Leibniz rules and availability of arbitrary spatial orders inductively give u in C^k(time;H^q) for all k,q. Sobolev embedding then gives continuity of all mixed spacetime derivatives, hence joint C-infinity regularity. [step 3.1, L2, L3, algebra] ∎

This is a proof blueprint with full key estimates, not a checked production carrier. The supplier corrections in research-findings.md remain prerequisite obligations.
