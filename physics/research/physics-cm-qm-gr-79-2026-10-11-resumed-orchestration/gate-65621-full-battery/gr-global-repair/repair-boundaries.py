import json,pathlib
r=pathlib.Path('physics/research');run='physics-cm-qm-gr-79-2026-10-11';p=r/f'{run}-batch-78.proof-contracts.json';a=json.loads(p.read_text())
# Each entry was checked against its named carrier; six independent axis dispositions.
M={
'finite-speed-independence-of-extension':[
'Statement (b) fixes a positive-radius initial ball and a nonempty cone; step 2.1 integrates only its nonempty truncations, with the vertex handled separately.',
'Step 3.1 begins with zero initial energy and proves w=0; the denominator a in step 1.1 is strictly positive, while b=0 gives lambda=1.',
'Statement permits one-component w; step 1.1 becomes a scalar quadratic inequality and the cone flux argument is unchanged.',
'Step 1.1 keeps A0 bounded below by aI, excluding singular time matrices; the collapsing cone top at t0 is handled by continuity in step 3.1.',
'Steps 2.1 and 3.1 first prove vanishing for tau<t0 and then include the boundary and vertex by continuity; t0<T stays inside the coefficient domain.',
'Steps 1.1–4.1 use the prescribed coefficient matrices and fixed cone, without choosing elements simultaneously from an arbitrary family.'],
'positive-definite-symmetric-matrix-bounds':[
'Statement (c) allows empty Lambda: every uniform inequality is then vacuous and any 0<a<=b works; step 1.2 minimum construction is needed only for nonempty Lambda.',
'Step 1.1 includes z=0 in both bounds; step 2.1 divides only by eigenvalues proved strictly positive, and step 3.1 uses det B>=a^m>0.',
'At m=1 the Statement reduces to a positive scalar and its reciprocal, exactly the eigenvalue calculations of steps 1.1 and 2.1.',
'Statement requires positive definite B, so zero eigenvalues are excluded before constructing its inverse in step 2.1.',
'The compact parameter case in Statement (c) includes all parameter points through the attained extrema in step 1.2; no extension past the open D of (d) is claimed.',
'The eigenbasis in step 1.1 is a single finite-dimensional selection; no uniform selection of bases for the parameter family is required in step 1.2.'],
'periodic-fourier-differentiation-and-norm-equivalence':[
'Steps 2.2 and 3.1 use Fourier sums over Z^3; finite-subset sums allow the empty subset and contribute zero, while the lattice itself contains the zero mode.',
'Step 1.2 has q0=1 from alpha=0; zero coefficients give the zero weak derivative and zero norm in steps 2.1–3.1 without division by a mode.',
'Statement permits scalar-valued classes; for s=0 the multi-index family is the singleton alpha=0, giving the Parseval identity in step 2.2.',
'The weight (1+|k|²)^s in Statement is at least one, so the inverse coefficient construction in step 3.1 has no singular frequency, including k=0.',
'Step 1.1 cancels the periodic integration endpoints; Statement (b) includes integer s=0, for which the norm comparison is the L2 coefficient identity.',
'Statement declares Countable Choice for the Fourier/Hilbert suppliers; step 3.1 constructs each weak derivative through their unique coefficient isometry.'],
'periodic-sobolev-embedding':[
'Steps 1.1 and 3.1 take finite-subset Fourier sums, including F=empty with S_F=0; the directed finite-subset net has the empty subset as a member.',
'The zero class has every coefficient zero and unique representative zero by step 3.1; step 4.1 treats d=0 by identical point values before splitting at d inverse.',
'Statement permits N=1 and m=0; steps 1.1 and 3.1 then estimate scalar Fourier sums and give a continuous scalar representative.',
'The strict gap s-m>3/2 in Statement is essential for the lattice weight estimate of step 2.1; no conclusion at the critical divergent weight is claimed.',
'Step 4.1 treats the allowed Holder endpoint using q=2 separately from q>=3 and includes d=0 by equality; the upper theta endpoint in Statement (b) is retained.',
'Statement explicitly carries Countable Choice inherited by the Fourier suppliers; finite tail-control sets in steps 1.1–3.1 come from finite-subset supremum convergence.'],
'galerkin-projection-properties':[
'The mode set Lambda_N in Statement is nonempty even at N=0, while an empty tail sum is zero in steps 1.3 and 2.1.',
'All projection formulas in step 1.1 send the zero class to zero; step 2.1 uses 1+N², which cannot vanish at the cutoff N=0.',
'For scalar m=1 and cutoff N=0, Statement gives the projection onto the constant mode; steps 1.1–1.3 still prove idempotence and contraction.',
'The finite Fourier range may lose nonconstant modes, but step 1.1 identifies this kernel explicitly; no invertibility of P_N is asserted.',
'Statement includes r=0 and r=s in the contraction and convergence assertions; step 2.1 requires s>=1 only for the H^(s-1) tail bound.',
'The cutoff Lambda_N is defined explicitly rather than selected; Countable Choice in Statement is retained for the underlying Fourier suppliers.'],
'periodic-sobolev-algebra':[
'Step 2.1 uses the finite Leibniz family beta<=alpha, which contains beta=0; empty finite coefficient subsums encountered in approximation are zero.',
'In steps 2.1–4.1 a zero factor gives zero product and satisfies the stated bilinear bounds; no reciprocal of a function or its norm is taken.',
'Statement is already scalar-valued; the alpha=0 Leibniz expansion in step 2.1 has one term uv and uses the same L2–L-infinity estimate.',
'The order k>=4 in Statement supplies the L-infinity control of lower derivatives in step 1.1; no product estimate below this stated order is asserted.',
'The borderline allowed integer k=4 has k-2=2>3/2 in step 1.1; the strict embedding threshold is preserved through every Leibniz estimate.',
'The Countable Choice premise in Statement remains on the Fourier-density suppliers used in step 3.1; each Fourier truncation is explicitly prescribed.'],
'smooth-composition-and-commutator-estimates':[
'If compact K is empty, no torus-valued u or v can take values in it and the Statement is vacuous; otherwise step 1.1 constructs a finite ball cover of K.',
'Zero u does not force F(t,x,0)=0, explaining the additive 1 in Statement (a); the commutator vanishes for w=0 by the expansion in step 3.2.',
'The composition Statement permits a scalar state or scalar target; the derivative-factor counting in steps 2.1 and 4.1 does not require multiple components.',
'Step 1.1 extends cutoff coefficients across nonconvex state sets without evaluating outside O; matrix inverse estimates apply only where the inverse exists near the compact set.',
'The estimates are uniform on the specified compact I0 within open I, including I0 endpoints; step 4.1 checks n=6 with n-4>=2 for the highest-order product.',
'Step 1.1 chooses finitely many explicit smooth bumps on a compact cover; the Countable Choice premise remains on the Fourier approximation suppliers in step 2.1.'],
'galerkin-ode-local-solution':[
'The Given clause includes an admissible projected datum, so its coordinate domain V in step 1.1 is nonempty; Lambda_N includes k=0.',
'An admissible zero datum need not be an equilibrium because B(t,x,0) may be nonzero; step 1.1 keeps that forcing when forming G.',
'For m=1 and N=0, X_N consists of a scalar constant mode and step 1.1 gives an ordinary scalar ODE with the same positive projected mass coefficient.',
'Step 1.1 proves the projected mass matrix positive before inversion; leaving the open state set is explicitly excluded by the compact trajectory in step 3.1.',
'Step 3.1 assumes T_* lies inside I and constructs the limiting coordinate z_* in compact Q before restarting; no continuation at a coefficient-domain endpoint is claimed.',
'The basis fixed in step 1.1 is one finite-dimensional basis; the Countable Choice premise comes from the analytic/Fourier suppliers, not an arbitrary family of ODE choices.'],
'galerkin-time-derivative-bound':[
'The Statement is conditional on a Galerkin solution on J; if J is empty the bound is vacuous, and otherwise K must contain its values.',
'Step 1.1 retains B(u_N) in the projected equation, so a zero field is not assumed stationary; the RHS estimate includes 1 for inhomogeneous forcing.',
'The range j=0 in Statement is the base L2 coercivity estimate of step 1.1; N=0 still has the constant Fourier mode rather than an empty Galerkin space.',
'The time-matrix positivity bound used in step 1.1 protects its inverse estimate; no estimate is claimed when this coercivity vanishes.',
'The Statement fixes a compact I0 strictly inside the coefficient time domain, so coefficient derivatives are bounded at its endpoints as well as its interior.',
'All differentiations in the proof concern the given finite-dimensional Galerkin solution; Countable Choice is retained for its Fourier and Sobolev prerequisites.'],
'galerkin-compactness':[
'The bounded sequence or Galerkin family in Statement is indexed by infinitely many natural indices; empty finite Fourier tails used in step 1.1 contribute zero.',
'Radius R=0 in the compactness Statement gives the zero sequence; derivative Lipschitz constant zero gives time-constant maps in step 2.1.',
'Finite-mode projection in step 1.1 may be a single constant mode, for which boundedness is ordinary finite-dimensional sequential compactness.',
'The gap from H^r to H^(r-1) in Statement is the compactness mechanism; the proof uses positive weights 1+|k|² and does not claim same-order compactness.',
'Step 2.1 yields convergence uniformly on compact subintervals inside (-T,T), with no assertion of convergence at excluded time endpoints.',
'Statement declares Countable Choice; step 2.1 transfers its rational-time extraction to the supplied rational diagonal lemma rather than invoking an unproved compactness choice.'],
'galerkin-energy-inequality':[
'The multi-index sum defining energy in Statement contains alpha=0; the torus has positive normalized volume, so the integral domain is not an empty initial surface.',
'Step 1.1 gives energy zero for u_N=0, but step 2.1 bounds inhomogeneous forcing with 1+e and does not infer that zero data stays zero.',
'The scalar constant-mode Galerkin case is included by the quadratic energy definition in Statement; spatial integration-by-parts terms then vanish in step 1.2.',
'The lower energy-equivalence bound a>0 in step 1.1 excludes singular A0; the leading spatial term is integrated by parts in step 1.2 rather than requiring an extra derivative.',
'Statement fixes its coefficient slab compactly inside the time domain; step 3.1 applies Gronwall on oriented segments where the assumed bounds continue to hold.',
'Only the given solution and finite derivative family are used in steps 1.1–3.1; Countable Choice remains the declared prerequisite of the Sobolev coefficient estimates.'],
'galerkin-limit-is-classical-solution':[
'Statement assumes an infinite cofinal sequence N_j and a positive T; finite empty Fourier subsets in step 1.1 give the zero lower subsum.',
'Zero Fourier coefficients give zero limit class in step 1.1; inverse A0 in step 4.1 is protected by uniform positivity, irrespective of vanishing field values.',
'Statement allows one state component; the finite Fourier-sum passage in steps 1.1 and 2.1 then gives scalar norm and time-derivative bounds.',
'Step 4.1 inverts only the uniformly coercive time matrix; the limit stays in the closed admissible K1 by step 1.1, so no singular state is introduced.',
'All convergence in Statement and step 1.2 is local on compact subintervals of (-T,T); step 4.1 includes time zero by projection convergence, without extending to ±T.',
'Step 1.2 uses the rational diagonal supplier with the declared Countable Choice to extract time derivatives; the original subsequence is retained for the solution limit.'],
'dust-symmetric-hyperbolic-reduction':[
'The Statement fixes the six-dimensional space of symmetric spatial matrices, so its tensor index ranges are finite and nonempty; zero-dimensional spatial geometry is outside this fixed frame.',
'Step 1.2 gives C(0)=0 and norm zero; step 2.1 then has symbol zI and still requires z>0 rather than dividing by a spatial frequency.',
'The tensor domain V in Statement is not a variable-size scalar block; the proof of step 1.2 handles a single nonzero tensor component through the Frobenius norm.',
'Statement (d) requires z>|zeta_perp|, excluding the characteristic boundary at equality; step 2.1 proves a strict positive lower bound before invoking hyperbolicity.',
'The symbol result is pointwise in the Statement, with no time-evolution endpoint; the allowed conormals remain in the open future timelike cone.',
'Steps 1.1–2.1 compute finite contractions in the prescribed Euclidean frame and make no countable or arbitrary-index choice.'],
'dust-weyl-reconstruction-from-electric-magnetic':[
'The Statement uses two prescribed spatial tensors and fixed nonempty three-dimensional index ranges; no union of developments or choice of an empty tensor family is formed.',
'The reconstruction is linear, so E=B=0 gives C=0 in step 1.1; epsilon inversion in step 2.1 divides only by the numeral two.',
'Step 3.1 counts the six independent components of the spatial curvature pair matrix; these fixed 3-space/4-spacetime dimensions are essential and not varied to one.',
'Trace-free symmetric E and B are hypotheses of Statement; the cyclic trace term in step 1.1 vanishes precisely using these restrictions.',
'All contractions in steps 1.1–3.1 are algebraic at a point; the Statement asserts no boundary extension or evolution-time endpoint.',
'The inverse in step 3.1 is fixed by tensor component identities, requiring only the given observer and finite frame, with no simultaneous choice of observers.'],
'periodic-symmetric-hyperbolic-existence':[
'Step 1.1 explicitly disposes an empty initial-data class by taking any positive interior time T and C, then works with nonempty K only in the nonvacuous branch.',
'R=0 and admissible zero data are allowed in Statement; step 1.2 chooses R1>R and keeps inhomogeneous B through the energy and time-derivative bounds.',
'Statement permits a scalar state m=1; the admissible cofinal projection family in step 1.1 is still chosen only for N>=N0, not every individual small cutoff.',
'Step 1.2 selects uniform positive a before R1 and T; the strict norm and value margins in step 2.1 keep the trajectories away from singular states.',
'Step 2.1 excludes first exit by strict inequalities before T and uses continuation inside I; the resulting solution is asserted on the open interval (-T,T).',
'Step 3.1 extracts from the explicit cofinal cutoff family using the compactness supplier and the Countable Choice assumption stated at the start.'],
'dust-reduced-evolution-equations':[
'The Statement prescribes E,B,r and fixed frame indices; an empty field collection is not an input, although any empty coordinate domain makes its identities vacuous.',
'Step 1.2 writes density transport as partial_s r=-r chi without dividing by r; step 3.1 preserves zero traces even at zero density.',
'The preserved traces in Statement (b) are scalar transport variables; step 3.1 proves their homogeneous ODEs separately from the five-component tracefree Weyl variables.',
'Step 4.1 requires a timelike conormal with z>|w| and an invertible frame; null conormal or singular-frame limits are not included in the hyperbolicity assertion.',
'The reduced equations in Statement are local differential identities; step 4.1 proves pointwise hyperbolicity and supplies no continuation beyond a flow crossing.',
'The projections in steps 1.1–4.1 use only the fixed frame and its finite epsilon contractions; no global choice of an oriented tetrad is asserted.'],
'constraint-equations-in-normal-frame':[
'The Gauss/Codazzi Statement is quantified pointwise over a hypersurface; if that hypersurface is empty the equations have no instances and all assertions are vacuous.',
'Step 3.1 normal contractions allow K=0, zero curvature and T=0; no density or curvature norm is used as a denominator in the constraint formulas.',
'Step 3.1 contracts finite three-dimensional tangent indices; an individual tangent vector can be zero and its multilinear curvature equation remains valid.',
'Statement requires h Riemannian and g Lorentzian, giving an actual future unit normal for step 1.1; degenerate or null hypersurfaces are excluded.',
'The Statement proves constraints at every point where the Einstein equation holds, not continuation or extension of a hypersurface through its boundary.',
'The adapted frame used for contraction is local and finite; step 1.1 defines the induced connection intrinsically without choosing global tangent frames.'],
'periodic-symmetric-hyperbolic-uniqueness-stability':[
'If the class of solution pairs in Statement is empty, the comparison assertions are vacuous; any given pair has the common nonempty time interval containing zero.',
'Step 1.2 proves identical initial data give E0=0 everywhere by homogeneous Gronwall; step 3.1 retains homogeneous |Eprime|<=CE for zero difference.',
'Statement allows a scalar difference w; steps 1.2 and 3.1 then use the same scalar weighted energy and do not require independent components.',
'The common compact value set supplies positive time-matrix constants a0,b0 in step 3.1; singular coefficients are excluded before the inverse estimate of step 2.1.',
'Step 4.1 uses both orientations from zero to any t with |t|<T; no continuous extension to ±T is part of the comparison Statement.',
'The projection approximants in step 1.3 are explicit P_Nw rather than separately chosen solutions; Countable Choice is the premise carried by the Fourier prerequisites.'],
'dust-initial-data-and-tilted-initialization':[
'The Statement fixes prescribed initial data on Sigma; empty Sigma makes the local tensor obligations vacuous, while each nonempty patch has a finite orthonormal frame.',
'Step 1.1 admits density epsilon=0 with separately specified U0; step 1.2 uses W²/(W+1), smooth at v=0, rather than the apparent singular quotient by |v|².',
'The conormal in step 2.2 has z=1, so the symbol bounds in step 4.1 directly reduce to 1-|v| and 1-|v|/2; the fixed spatial frame remains three-dimensional.',
'Step 4.1 proves both evolution and residual time matrices strictly positive for |v|<1; the luminal tilt boundary |v|=1 is explicitly excluded.',
'The Statement allows every strict subluminal tilt and every c>0; its formulas do not take the limit to luminal data or c=0.',
'Step 1.2 chooses an oriented orthonormal frame locally; CC/DC in Statement are retained from analytic and causal suppliers, without postulating a global tetrad.'],
'harmonic-initial-data-construction':[
'The prescribed jet Statement is pointwise along Sigma and therefore vacuous on an empty slice; step 1.1 constructs its germ only near actual slice points.',
'For K=0 the normal metric jet in Statement vanishes; steps 1.2 and 2.1 still cancel the harmonic gauge components using matching spatial Christoffels.',
'The Statement fixes four-dimensional metric slots; step 1.2 traces the three tangent slots rather than varying the dimension to a one-dimensional spacetime.',
'The positive definite initial h in step 1.1 makes the displayed g00=-1,g0i=0 jet Lorentzian on a neighborhood; a degenerate h is outside the hypotheses.',
'The conclusion is a smooth germ near the slice in Statement (a), with arbitrary higher smooth jets; no fixed-width global collar or endpoint continuation is claimed.',
'Step 1.1 extends the explicitly prescribed value and first normal derivative; no infinite simultaneous selection of higher jets is needed to realize this finite jet.'],
'dust-subsidiary-and-residual-vanishing':[
'The Statement concerns residual fields on a fixed local reduced solution; when its initial surface is empty, the zero-initial-data conclusion has only vacuous local instances.',
'Step 4.1 gives identically zero residuals from zero Cauchy data; the proof never divides by density r, retaining separately prescribed dust velocity on r=0 regions.',
'The transport blocks in step 4.1 can be considered one component at a time, while the coupled curl-pair block has its prescribed three-dimensional vector indices.',
'Step 4.1 proves positivity from z>|w|; the subsidiary lower bound z-|w|/2 is distinct from the evolution lower bound and includes arbitrary strict tilt.',
'The energy uniqueness in step 4.1 holds on the metric domain of determination of the initial surface; no extension past that causal boundary is asserted.',
'The subsidiary solution is prescribed by the given reduced solution; Countable Choice is inherited by its analytic uniqueness supplier, not used to select a new matter velocity.'],
'periodic-symmetric-hyperbolic-smooth-persistence':[
'The Statement is conditional on a given smooth datum and its E0 solution; an empty data class has no persistence instances, and derivative sums contain alpha=0.',
'The high-order estimate in step 2.1 has 1+E_n for possible forcing, so zero data is not silently identified with a stationary zero solution.',
'The first induction gain is n=s+1>=6 in step 3.1; scalar states and the single alpha=0 energy term remain covered by the same norm estimates.',
'Step 1.1 uses coercivity of the time matrix before bounding the projected derivative; step 2.1 keeps the solution in the original admissible compact value set.',
'Step 4.1 explicitly retains the original time T at all orders, while step 5.1 proves smoothness only on the open interval (-T,T).',
'The higher bounds in step 4.1 use the original solution subsequence, not a new arbitrary selection for every derivative order; Countable Choice remains on the original extraction.'],
'einstein-residual-and-subsidiary-identity':[
'If open U in Statement (b) is empty, both reduced equations and subsidiary identities are vacuous; tensor contractions on an actual U use fixed finite slots.',
'Step 1.1 cancels Lambda and stress trace terms algebraically, including Lambda=0 or T=0; step 3.1 gives a homogeneous gauge wave equation with H=0 allowed.',
'The factor one-half in Statement (a) is a fixed numeral; the derivative calculation in step 2.1 uses the four-dimensional metric trace, not a variable-size family.',
'Statement requires smooth nondegenerate Lorentzian g; step 2.1 raises H indices with that inverse metric and does not cover a singular metric.',
'Statement (a) and (b) are identities on their specified open solution set, without any regularity or extension conclusion on its boundary.',
'The residual and harmonic vector in Given are already specified; steps 1.1–3.1 involve no choice of new solutions or any family of representatives.'],
'reduced-einstein-principal-part':[
'If chart region U in Statement is empty the local symbol and reduction formulas have no instances; their metric slot family is finite and fixed otherwise.',
'The zero perturbation h gives zero linearized operator in step 2.1; step 3.1 divides by g00 inverse only on the strict g^00<0 state set.',
'The Statement keeps ten symmetric metric components and their derivative slots; step 4.1 uses an identity block on those slots rather than asserting variable dimension.',
'Step 4.1 requires both -g^00>0 and positive (g^ij); equality or a singular spatial inverse metric destroys the asserted positive time matrix and is excluded.',
'The first-order construction in steps 3.1–4.1 is asserted only on the stated open admissible region, without extending its coefficients to g^00=0.',
'The background and chart are fixed in Statement, and the variables are explicitly defined covariant derivatives; no global harmonic chart is selected by this lemma.'],
'local-symmetric-hyperbolic-well-posedness':[
'Statement (a) quantifies over the existing data class: if it is empty there are no local existence instances; a cone in (b) has its nonempty base by t0>0.',
'Step 2.1 forms the difference w=u-v and uses zero base energy to obtain zero difference, retaining the actual zeroth-order coefficient instead of assuming evaluations agree.',
'For one unknown the cutoff mean-value argument of step 2.1 is scalar; all flux inequalities and the continuity-at-vertex step remain valid.',
'Step 2.1 checks positivity of the evaluated time matrix on the cone and obtains bounded difference coefficients by cutoff, even for a nonconvex common state set.',
'The cone calculation in step 2.1 includes its vertex and lateral boundary by continuity, with t0<T; the existence interval stays open at ±T.',
'The periodic solutions are supplied by the Countable Choice existence theorem; step 2.1 uses one finite smooth cutoff around their compact ranges.'],
'barotropic-fluid-symmetric-hyperbolic-system':[
'The Statement fixes a smooth EOS on an open interval and a given unit velocity; an empty spacetime patch gives vacuous equations, not a constructed fluid state.',
'The chosen enthalpy reference may give r=0 and rest velocity may have y=0; step 1.1 divides only by epsilon+p>0 and uses strictly positive cs.',
'The enthalpy unknown in Statement is scalar with three independent velocity variables; step 1.2 removes the redundant normalization component explicitly.',
'Step 3.1 requires 0<cs<1 and a future-positive timelike conormal; cs=0, negative pprime or luminal conormal fall outside the symbol positivity claim.',
'Statement assumes the strict interior EOS interval and subluminal data; step 4.1 initializes W0 using h(v0,v0)<1, without extrapolating to a vacuum or sonic endpoint.',
'Countable Choice in Statement is used for the enthalpy integral; step 1.2 uses explicit positive-branch velocity reconstruction rather than arbitrary pointwise normalization choices.'],
'scalar-einstein-symmetric-hyperbolic-reduction':[
'The Statement specifies one scalar field and its fixed potential; zero fields are allowed, but an empty collection of matter variables is the separate vacuum model.',
'Step 2.1 propagates initially zero auxiliary residual Q_i-partial_i phi; phi=0 is a solution only if its scalar equation with Vprime(0) is satisfied.',
'The scalar wave slot in Statement has one amplitude variable and three gradient components; step 1.1 supplies their actual symmetric coefficient matrix.',
'Step 1.1 requires g^00<0 and positive spatial inverse block before dividing by g^00; no sign of potential V or its mass parameter is needed.',
'The Statement gives a local reduction on the open positive-time-matrix state set; it makes no lifespan assertion at the edge of that set.',
'The compatible scalar variables are explicit derivatives in step 2.1; a fixed chart and background suffice, without any selection of a global orientation.'],
'harmonic-constraint-propagation':[
'On empty Sigma the existence of an empty W is vacuous; on each actual point step 1.1 computes the normal gauge jet from the prescribed constraints.',
'Step 1.1 proves zero normal and tangent gauge derivatives; step 2.1 uses the homogeneous subsidiary system to compare H with the zero solution.',
'The Statement fixes the four gauge components of H and three tangent frame vectors; it is not a theorem for a one-dimensional spacetime.',
'Spacelikeness of Sigma in Statement supplies a timelike unit normal and the positive subsidiary time matrix in step 2.1; a null initial hypersurface is excluded.',
'The conclusion of step 2.1 is an open W inside U near Sigma, without extension of H or the full Einstein equation through the boundary of U.',
'Each local adapted chart in step 1.1 is an individual finite coordinate choice; no arbitrary family of initial tensors or gauge representatives is selected.'],
'reduced-einstein-local-existence':[
'If Sigma intersect U is empty, the Statement is vacuous with V empty; otherwise step 2.1 uses actual coordinate balls meeting the slice.',
'Zero prescribed stress is allowed in Statement, but a zero metric is not Lorentzian; the initial value g0 remains nondegenerate before forming the reduced variables.',
'The initial slice is three-dimensional in a four-dimensional chart in Statement; step 1.1 initializes every symmetric metric derivative slot explicitly.',
'Step 1.1 uses g0^00<0 and positive spatial inverse block to obtain the initial positive time matrix and shrink within its open admissible set.',
'The patched V of step 2.1 is an open neighborhood with possibly varying time widths; no uniform noncompact slab or global continuation is asserted.',
'Step 2.1 uses the stated local analytic supplier for coordinate cutoff solutions; this theorem itself adds no arbitrary selection principle beyond its suppliers.'],
'local-geometric-uniqueness':[
'The Statement compares two actual developments of prescribed data; empty Sigma leaves only a vacuous neighborhood comparison, while step 1.2 treats nonempty collar patches.',
'Zero matter stress or zero K is permitted by the fixed model, but step 2.1 still compares its complete matter Cauchy variables, not just a zero stress tensor.',
'Step 1.1 solves the four scalar wave-coordinate equations separately with fixed initial labels; the Statement does not vary spacetime dimension.',
'The nonzero coordinate Jacobian in step 1.1 and spacelike normal collar in step 1.2 give genuine chart and overlap identifications; degenerate metric data are excluded.',
'The isometry Statement is near the entire initial surface with variable widths; step 1.2 constructs injective collars without promising a uniform noncompact time interval.',
'The countable locally finite collar construction in step 1.2 uses the declared Countable Choice; no arbitrary family of full developments is selected for comparison.'],
'local-geometric-development':[
'The Statement assumes complete initial data for one fixed model; vacuum has an empty matter list, handled through the metric block, rather than absent geometric data.',
'Vanishing initial stress does not replace the fixed-model reconstruction assumptions in Statement; gauge and Einstein residuals are zero only after the proved recovery step.',
'The Statement permits a scalar matter model but retains four metric dimensions and the full first-order initialization, not merely one normal stress projection.',
'Its reduced coefficients must have a positive time matrix on admissible neighborhoods; the complete model/reconstruction contract excludes singular states before analytic existence.',
'The local solution is obtained near Sigma with a variable-width collar and then restricted to its intrinsic Cauchy neighborhood; no global completeness or uniform slab is asserted.',
'The declared Countable Choice is used to select local construction and comparison widths in the countable locally finite patching, with causal suppliers retaining Dependent Choice.'],
'barotropic-fluid-local-evolution':[
'The Statement supplies actual density and bundle velocity on Sigma; empty Sigma makes its local development conclusion vacuous, while a vacuum matter-list branch is not this strict fluid.',
'The data may have v0=0, giving W0=1; step 1.1 keeps the EOS assumptions epsilon+p>0 and pprime>0 independently of whether numeric epsilon is zero.',
'Step 1.1 initializes the scalar enthalpy and three independent velocity variables of the reduction, not only a singleton stress projection.',
'Statement excludes vanishing sound speed and h(v0,v0)=1; step 1.1 verifies the strictly positive fluid principal matrix for every allowed subluminal tilt.',
'Step 2.1 invokes a local variable-width development and explicitly excludes continuation through shocks, vacuum boundaries or vanishing sound speed.',
'The application in step 2.1 retains Countable Choice and Dependent Choice from its full geometric local-development supplier, including countable patching and causal curves.'],
'dust-local-evolution':[
'Statement allows zero-density regions with separately prescribed velocity; an empty initial manifold has only vacuous local patches, whereas vacuum regions remain genuine geometric regions.',
'Step 3.1 writes r=r0 exp(-integral chi), preserving r=0 without division; rho=r/c² is protected by the strictly positive constant c.',
'The scalar density transport of step 3.1 is independent of the multiple Weyl/frame components; fixing one density value still requires its given unit velocity.',
'Step 1.1 works with invertible frames and positive tilted time matrices; step 3.1 permits zero density but step 7.1 still requires a timelike conormal.',
'Statement and step 6.1 retain variable time widths; step 7.1 restricts to the Cauchy neighborhood, making no extension through flow crossings.',
'Step 6.1 explicitly spends Countable Choice on construction and pairwise comparison widths; Dependent Choice remains on the causal-curve suppliers of step 7.1.'],
'scalar-field-local-evolution':[
'One fixed scalar model with complete data is supplied in Statement; empty Sigma gives vacuous local instances and is not used to infer a nontrivial spacetime.',
'Zero phi0 and pi0 are allowed, but step 1.1 reconstructs the actual equation with fixed Vprime, so it does not infer the zero field is stationary for arbitrary V.',
'The matter sector is a single scalar field with its independent normal derivative; step 1.1 initializes all scalar gradient variables, not just its one field value.',
'The fixed scalar reduction in step 1.1 uses a positive metric time block; potential positivity and mass sign are not assumptions, unlike nondegeneracy of g.',
'Step 2.1 retains the variable-width local Cauchy development and rules out any inferred global existence or uniform slab from this local scalar result.',
'Step 2.1 carries the explicit Countable Choice and Dependent Choice from the geometric development supplier for countable patching and causal restriction.'],
'high-regularity-selected-matter-development':[
'Vacuum in Statement has no matter variables and T=0; step 1.1 discharges reconstruction and conservation automatically while still supplying the full metric data.',
'Step 2.1 converts epsilon0=0 to rho0=0 by c²>0 and retains prescribed dust velocity; scalar zero fields retain their fixed potential equations.',
'Statement selects one of four named sectors, not a sum or arbitrary family of sectors; step 1.2 treats the single scalar and strict fluid branches through their own suppliers.',
'The sector conditions in Statement exclude fluid epsilon+p=0 or pprime=0, while admitting nonnegative dust density through step 2.1 without a density division.',
'Step 1.2 provides smooth high-regularity developments locally and claims no optimal finite-regularity threshold; step 2.1 retains the dust variable-width causal conclusion.',
'Statement explicitly carries CC/DC through the sector theorems; step 2.1 calls the independent dust route rather than selecting a nonexistent harmonic dust reduction.'],
'high-regularity-local-development':[
'The physical Statement includes the vacuum branch with empty matter data; step 2.1 applies the mathematical supplier to actual constrained geometric data.',
'Statement admits nonnegative dust including epsilon=0 with independently prescribed velocity; step 1.1 matches that exact stress law rather than canceling a density factor.',
'Statement chooses a single named matter sector; step 2.1 applies its complete-data mathematical development result and does not combine arbitrary sector families.',
'The fluid branch in Statement retains strict epsilon+p>0 and 0<pprime<1; zero-density dust is a separate admissible branch and is not treated as a fluid singular limit.',
'Step 3.1 expressly limits its claim to local isometry uniqueness and gives no global existence or continuation assertion from the adopted field law.',
'Countable Choice and Dependent Choice are explicit Statement premises and inherited from the mathematical development supplier in step 2.1; no empirical choice premise is added.'],
'sobolev-embedding-needs-s-minus-m-above-three-halves':[
'The dyadic shell family in step 1.1 is nonempty for every integer cutoff N>=0, so its normalized counterexample is not drawn from an empty mode set.',
'Step 2.1 normalizes by the H1 norm of a nonzero shell polynomial; step 1.1 gives positive shell size and hence a positive norm, with u_N(0) the peak value.',
'At shell index N=0 the lattice annulus contains unit lattice vectors; the scalar component dimension is one and is independent of this dyadic index.',
'The counterexample Statement deliberately fixes s=1,m=0 below the strict embedding threshold; it does not invoke an embedding estimate at this deficient order.',
'The constructed shell polynomials in step 1.1 are smooth periodic functions; step 2.1 sends N to infinity, not toward a spatial boundary of the torus.',
'The shell coefficients are explicitly all ones on the given lattice annulus in step 1.1; no nonconstructive selection of a bad function from each shell is required.'],
'periodic-energy-method-check':[
'The Statement fixes the nonempty torus and one scalar field; empty Fourier subsets are zero in the inherited coefficient definition, not an empty evolution domain.',
'For u0=0 the translation formula in step 1.1 gives the zero solution; step 2.1 then has energy e=0 and derivative zero.',
'This Statement is explicitly the scalar case m=1 with A0=1; a single constant Fourier mode has zero spatial derivative and is stationary under step 1.1.',
'The coefficient A0=1 is strictly positive and the transport speed is fixed at two; no degenerate time matrix occurs in the direct energy verification of step 2.1.',
'The translation formula in step 1.1 is defined for all times, while identification with the supplied E0 solution in step 3.1 applies on that supplier interval.',
'The solution in step 1.1 is constructed by a prescribed translation; no family of solution representatives is chosen in the energy comparison.'],
'negative-sound-speed-derivative-breaks-evolution':[
'The linearized Fourier construction in step 2.1 uses the explicit nonempty axis-mode sequence; it does not establish the nonlinear refuted Statement by an empty-data argument.',
'The growing modes of step 1.1 have k nonzero and pprime<0; k=0 is a separate constant/affine mode and gives no instability.',
'Each single Fourier mode in step 2.1 is a smooth real cosine density paired with its velocity mode; unbounded growth requires a sequence of these modes.',
'The sign pprime<0 in Given is the nonhyperbolic case; the positive-sound-speed enthalpy reduction cannot be applied to it as a supplier of real coefficients.',
'The linearized amplification is proved for each fixed positive time in step 2.1; transferring it to nonlinear Einstein-fluid continuous dependence remains an unresolved prerequisite.',
'The bad Fourier coefficients can be prescribed explicitly; they require no choice axiom, and cannot by themselves supply a nonlinear Einstein constraint-solving map.'],
'fluid-principal-symbol-radiation':[
'The Statement prescribes one concrete rest-frame symbol matrix, whose four-dimensional component set is nonempty; no aggregate over an optional mode family is involved.',
'The rest spatial velocity vanishes but the prescribed covector has zeta0=1 and transverse size one-half; step 1.1 therefore gives a positive, nonzero time symbol.',
'The EOS in Statement is p=epsilon/3 and cs=1/sqrt(3); step 2.1 has eigenvalue one on the uncoupled two-dimensional block and two other positive eigenvalues.',
'Step 2.1 checks the smallest eigenvalue 1-1/(2sqrt(3))>0 explicitly, so this example never tests a degenerate or null conormal.',
'The example Statement is at one point for a specified timelike covector; it claims no evolution interval, continuation, or EOS boundary behavior.',
'The matrix is determined by its explicit constants in step 1.1; no selection from an infinite collection of frames or covectors is needed.'],
'rational-diagonal-extraction':[
'Step 1.1 proves the rational test set is infinite using T>0; step 2.1 starts with N and retains infinite index sets at every refinement.',
'If R=0 all f_j vanish, while if C=0 they are constant in time; step 3.1 uses C+1, avoiding division by a possibly zero Lipschitz constant.',
'The space X0 may be a one-dimensional normed space or the zero vector space; the diagonal estimates in steps 2.1–4.1 apply without positive dimension.',
'If the inclusion constant kappa in Statement is zero, every X1 vector has zero X0 norm and hence X1={0}; the claimed convergence is then immediate.',
'Step 3.1 establishes uniform convergence on every strict compact subinterval |t|<=Tprime<T; no extension to the omitted endpoints ±T is claimed.',
'Statement assumes Countable Choice for its countable prerequisites, but step 2.1 refines using least indices and finite covers rather than an unproved infinite recursive choice.'],
'periodic-sobolev-completeness':[
'Step 4.1 sums over finite Fourier balls, and the equal-cutoff difference is an empty sum of value zero; finite-subset weighted subsums in Statement include the empty subset.',
'The zero Cauchy sequence gives c=v=u=0 in steps 2.1–4.1; the only reciprocals are positive weights w_k and the positive norm-equivalence constant c_s.',
'For N=1 the coefficient space in step 2.1 is scalar ell2; at s=0 the weights equal one and the reconstruction is precisely the L2 completeness argument.',
'The weights w_k=(1+|k|²)^(s/2) in step 2.1 never vanish, including k=0, and norm constants remain strictly positive.',
'Statement includes integer s=0; step 4.1 uses finite Fourier cutoffs n>=0, with no spatial boundary since the domain is periodic.',
'Countable Choice is explicitly declared for the Fourier/Hilbert completeness suppliers; the limit coefficient c and its L2 reconstruction are unique in steps 2.1–4.1.'],
'galerkin-second-time-derivative-bound':[
'The Statement is conditional on a given Galerkin solution on J; empty J gives a vacuous derivative bound, while nonempty J forces a nonempty compact value set.',
'Step 1.2 retains coefficient time derivatives and Bdot, so zero field need not have zero second derivative; step 1.1 divides only by a strictly positive coercivity constant.',
'At N=0 the projected space still has the constant mode; step 1.1 proves the inverse estimate for that finite space just as for larger cutoffs.',
'The projected mass M in step 1.1 is positive before inversion; no convexity of K is imposed or used in the differentiated coefficient identities of step 1.2.',
'Step 2.1 integrates on the segment between t,tprime inside the solution interval and compact coefficient slab; the bound implies Lipschitz continuity there, not extension outside I0.',
'The second derivative is obtained by differentiating the prescribed finite-dimensional ODE in step 1.2; Countable Choice is inherited from its analytic/Fourier suppliers.']
}
axes=['empty','zero','one','degenerate','endpoints','nonempty-choice'];gate=r/(run+'-resumed-orchestration/gate-65621-full-battery');original=json.load(open(gate/'096-boundary-audit.stdout.log'));flag=set()
for t in original['templates']:
 for id in t['items']:
  if id in a['contracts']:
   for b in a['contracts'][id]['boundaries']:
    if b.get('reason',b.get('evidence'))==t['sample']:flag.add((id,b['case']))
flag.add(('lem-gr-periodic-sobolev-completeness','empty'))
changed=[]
for id,c in a['contracts'].items():
 key=id.removeprefix('lem-gr-').removeprefix('thm-gr-').removeprefix('pthm-gr-').removeprefix('cex-gr-').removeprefix('ex-gr-')
 assert key in M,key
 s=pathlib.Path('physics/items',id+'.md').read_text(); claim=s.split('\n## ',1)[1].split('\n## ',1)[0].strip();claim=claim.split('\n',1)[1].strip()
 for b in c['boundaries']:
  if (id,b['case']) not in flag:continue
  case=b['case'];text=M[key][axes.index(case)] if case in axes else f'Statement concerns {claim[:240]}. Its promised conclusions are conditional deductions, not an asserted equivalence with a converse; the {case} obligation is therefore absent.'
  # Checked is a recorded treatment, not an acceptance stamp. Every real zero/empty edge is explicit above.
  if case in axes:b['status']='checked';b.pop('reason',None);b['evidence']=text
  else:b['status']='not_applicable';b.pop('evidence',None);b['reason']=text
  b.pop('reviewed',None);b.pop('template_review',None);changed.append([id,case])
# Two detector candidates require source-specific faithful-use explanations, not blanket suppression.
for id,fact,source,reason in [
 ('lem-gr-periodic-sobolev-embedding','L3','def-square-summable-family-on-an-arbitrary-index-set','The L3 use in steps 1.1 and 3.1 is exactly the finite-subset supremum, tail-control, and scalar-net convergence defined by the arbitrary-index source. Its incidental phrase two arguments concerns addition of scalar families, not an arity restriction on the indexing set or on summation. Z^3 is a permitted arbitrary index set.'),
 ('cex-gr-sobolev-embedding-needs-s-minus-m-above-three-halves','L2','def-gr-periodic-torus-and-sobolev-spaces','In L2 and step 1.1 the integer N>=0 labels the dyadic annulus 2^N<=|k|<2^(N+1), not the target component dimension N>=1 of the Sobolev Definition. The counterexample is scalar valued, so that dimension is one throughout; the shell-count estimate does not widen the supplier dimension bound.')]:
 for cit in a['contracts'][id]['citations']:
  if cit['fact']==fact and cit['source']==source:cit['reviewed']={'upheld':True,'by':'/root/gate_contract_gr_global','reason':reason}
p.write_text(json.dumps(a,indent=2)+'\n');print('item-specific flagged boundary replacements',len(changed));print('citation false-positive reviews2')
