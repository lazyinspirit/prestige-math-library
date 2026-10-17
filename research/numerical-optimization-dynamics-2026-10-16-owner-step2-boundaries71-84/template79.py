M={}
def item(id,summary,axes):
 names=['empty','zero','one','degenerate','endpoints','nonempty-choice'];assert len(axes)==6
 M[id]=dict(zip(names,axes));M[id]['iff-forward']=f'The {summary} states its model, estimate or worked calculation in one direction; it does not assert an equivalence whose forward direction is missing.';M[id]['iff-reverse']=f'The {summary} makes no converse characterization from its output or bound back to the input hypotheses; there is no reverse biconditional claim.'
item('def-age-structured-renewal-transport-problem','age renewal transport Definition',[
'The Definition fixes T>0 and the half-line age domain; its initial L1 density may vanish, but the temporal and age domains are not empty.',
'Definition: n_0=0 is admitted and the prescribed inflow and weak integral equations have the zero solution. Survival at duration0 has integral0 and equals1.',
'The Definition is a scalar age-density equation with characteristic speed1; it does not require a multidimensional state or multiple age components.',
'Definition: mu=0 gives survival S(a,s)=1 and beta=0 gives birth functional B=0; both are nonnegative bounded Lipschitz rates.',
'Definition: n(0,a)=n_0, inflow at a=0 and test terminal condition phi(T,a)=0 are prescribed separately. The mild branches include a=t in the initial-cohort branch.',
'Definition: a weak or mild solution is specified by its integral identities; this definition asserts no selection or existence of a solution family.'])
item('def-size-structured-transport-and-division-kernel','fixed-interval size transport model',[
'The Definition assumes X>0 and T>0, so its fixed size interval and time horizon are nonempty; each daughter measure can nevertheless be the zero measure.',
'Definition: zero mortality, zero division rates and zero daughter measures are admitted; the strictly positive growth lower bound is retained.',
'The Definition specifies one scalar size variable and a scalar characteristic IVP, independently of any later finite-volume cell count.',
'Definition: g>=g_min>0 excludes zero growth; its text expressly excludes moving boundaries, zero growth and discontinuous coefficients.',
'Definition: incoming flux at0 is zero, flux atX is absorbing, and the characteristic includes its first hitting time atX before restriction ends.',
'Definition: the measurable kernel family K_y is supplied as input, while the particular characteristic is obtained uniquely from the extended IVP, not chosen independently for each y.'])
item('thm-age-structured-renewal-characteristic-solution','renewal characteristic existence and uniqueness theorem',[
'The Statement inherits T>0 and the nonempty age half-line; its Volterra integral can have zero integration length at t=0, giving B(0)=G(0) rather than an absent equation.',
'Proof steps 1.1 and1.2 give zero forcing G when n_0=0; uniqueness in step 2.2 then fixes B=0 and the displayed density is zero.',
'Proof step 1.1 treats one scalar characteristic a(s)=x+s; no minimum number of cohorts or components is needed for this continuous representation.',
'Proof step 2.2 explicitly treats ||K||_infinity=0 by B=G rather than dividing by its norm; zero mortality simply gives unit survival in step 1.1.',
'Proof steps 4.1 and4.2 evaluate the initial trace and birth-boundary trace and kill the terminal test value; step 4.3 joins the two regions up to their null diagonal.',
'Proof step 2.2 constructs a unique scalar Volterra fixed point on finitely many short intervals; step 5.1 makes every mild solution share that same birth rate and density.'])
item('alg-size-structured-finite-volume-flux-and-kernel-quadrature','size finite-volume update',[
'Definition: J>=1 and strict grid inequalities give positive cell widths; every daughter source sum runs ell=1,...,J. An empty grid is invalid.',
'Definition: nonnegative masses may all be zero, yielding zero fluxes and zero source contribution. Width divisors h_j stay positive; failed grid/coefficient evaluation yields failure.',
'Definition: J=1 has incoming F_0=0, one outgoing F_1 and one daughter coefficient; the finite update formula needs no internal cell interface.',
'The underlying size-model Definition retains g>=g_min>0; this procedure does not extend its admissible physical model to zero growth.',
'Definition: F_0 is set to0 and F_J is the absorbing outflow. Each cell except the last is half-open, while C_J includesX to make the daughter cells disjoint.',
'Definition: one midpoint evaluation per parent cell explicitly determines each daughter coefficient and finite arithmetic determines the update, with no arbitrary choices.'])
item('alg-age-cohort-characteristic-quadrature','finite cohort characteristic quadrature',[
'Definition: N=floor(T/Delta t) may be0, in which case its step loop is empty and it returns only the initialized level with empty birth/outflow records.',
'Definition: zero cohort masses stay zero in the Euler survival update; beta=0 inserts newborns of mass0. Invalid-step is tested before any update.',
'Definition: a single initial cohort is a valid finite quadrature input and is advanced by the same explicit age-plus-Delta t and survival formulas.',
'Definition: mu=0 leaves survival masses unchanged; beta=0 removes births but not the explicit age shift or outflow test.',
'Definition: a cohort reaching age at leastA is recorded and discarded, newborn age0 is inserted after advancing older cohorts, and final returned time is N Delta t<=T.',
'Definition: all cohorts are supplied finite data and each loop step is explicit; no independent selection of exact characteristics occurs because age advances exactly byDelta t.'])
item('def-age-structured-renewal-finite-cutoff-model','finite-age absorbing-cutoff Definition',[
'The Definition requires0<T<A, so neither its time horizon nor age interval collapses; the admitted initial density can be zero.',
'Definition: zero initial density and rates are admissible. The mild formula and renewal integral remain defined with zero values.',
'This Definition describes one scalar age transport equation; it does not assume multiple cohorts or a minimum finite-volume cell count.',
'Definition: zero mortality gives unit survival and zero fertility gives zero renewal inflow; the strict inequality A>T still excludes a collapsed cutoff horizon.',
'Definition: ageA is absorbing, extension aboveA is zero, and A>T ensures no newborn reaches that boundary before final timeT.',
'Definition: a mild solution is required to obey the given characteristic formula; existence is deferred to its theorem, so the Definition does not choose a family of solutions.'])
item('thm-age-structured-renewal-semigroup-growth-and-data-stability','renewal semigroup growth and perturbation bound',[
'The Statement applies to the existing T>0 age model. Integrals over an initial zero-duration segment are zero and the stated estimates at t=0 reduce to initial-data identities.',
'Proof step 1.1 gives linearity and positivity, so zero data map to zero. In step 2.2, delta=0 leaves only the initial-data difference term.',
'Proof step 1.1 concerns a single scalar linear solution operator, not a prescribed multi-cell discretization; its sum/scaling property holds for individual initial densities.',
'Proof step 1.3 uses the exponential Gronwall bound without division by beta_infinity; beta=0 and mu=0 are therefore permitted rate limits.',
'Proof step 1.2 computes the initial mass and birth-minus-loss derivative; step 1.3 integrates from0 to each t<=T, including the two temporal endpoints.',
'Proof step 1.1 invokes uniqueness of the scalar renewal solution to identify sums and scalar multiples; no independently chosen continuum of solutions is needed.'])
item('thm-size-structured-positivity-number-and-weighted-moment-identities','size positivity and number/weighted-moment identities',[
'Proof step 2.2 includes J=1, where the interior-flux sum has no terms; the boundary term-x_J^c F_J and loss/source terms remain.',
'Proof step 1.1 allows zero masses and source coefficients because every update coefficient is nonnegative; no division by a mass is used.',
'Proof step 1.1 explicitly gives the first-cell incoming flux F_0=0, so a one-cell update is covered without an interior neighbor.',
'The Statement inherits the strictly positive growth lower bound g_min from the size model; the characteristic continuation in step 3.1 uses it for strict increase.',
'Proof step 3.1 constructs the extended characteristic on[0,T] and restricts it through its first hit ofX. Steps 2.1 and2.2 retain the outgoing boundary fluxF_J.',
'Proof step 3.1 uses a single quantitative local IVP bound repeatedly on finitely many forward segments and uniqueness on overlaps; no free branch family is selected.'])
item('thm-age-structured-renewal-finite-cutoff-characteristic-solution','finite-cutoff characteristic solution theorem',[
'The Statement inherits0<T<A; at t=0 its Volterra integral and outflow integral have length0 and give B_A(0)=G_A(0), O_A(0)=0.',
'Proof steps 1.1–1.2 preserve zero G_A andK, with the explicit K=0 branch B_A=G_A. Zero initial data give zero density and outflow.',
'Proof step 3.1 follows each individual initial cohort until exit; the continuous solution theorem is scalar and needs no multiple-cell input.',
'Proof step 1.2 explicitly bypasses the contraction restriction whenK=0, so zero fertility is included without dividing by a kernel norm.',
'Proof step 1.2 matches adjacent continuation endpoint values; step 3.1 includes initial cohorts that reachA by t<=T while A>T excludes newborn outflow.',
'Proof step 1.2 constructs the unique continuous birth rate on finitely many contraction intervals and step 3.1 fixes the density from that rate.'])
item('alg-age-structured-positive-birth-quadrature','positive birth-quadrature procedure',[
'Definition: the age partition has positive widths and at least one cell; midpoint mode requires q_j>=1. Zero masses do not delete these quadrature index sets.',
'Definition: zero M_j makes its cell contribution zero and beta=0 gives B_h=0; all divisions use positive cell widths.',
'Definition: one age cell and one midpoint panel per cell are admitted, giving the displayed single-cell sum with q_1=1.',
'Definition: zero fertility remains admissible and returns zero birth value after successful evaluations; a failed evaluation instead returns no estimate.',
'Definition: capped adaptive mode retains its accepted/cap-reached statuses and finite estimates, without declaring indicator control of true quadrature error.',
'Definition: mode and panel/depth budgets are supplied finite inputs; the algorithm sums their returned cell estimates instead of choosing an arbitrary quadrature family.'])
item('thm-age-cohort-quadrature-weak-consistency','weak cohort consistency estimate',[
'Proof step 2.1 explicitly treats N=0 as no time steps, with survival error0; only initialized quadrature and omitted initial-tail errors remain.',
'Proof step 2.1 treats a zero reference cohort mass exactly instead of using its positive-mass tube. Zero initial measure gives no birth mass by the same finite sum bound.',
'The Statement fixes a finite positive initial cohort quadrature without requiring multiple atoms; proof step 2.1 bounds each cohort by its own reference mass before summing.',
'Proof step 2.1 uses the CFL even when mortality vanishes, and step 2.2 iterates the error recurrence without division by a positive birth-kernel norm.',
'Proof step 2.1 uses the aligned horizon T_h=N Delta t and an endpoint C1 extension at initial age0. Step 3.1 controls every returned level k Delta t<=T.',
'Proof step 2.1 analyzes supplied finite cohort masses and step 2.2 an explicit scalar recurrence; the exact comparison birth rate is unique from the characteristic theorem.'])
item('alg-age-structured-renewal-upwind-finite-volume','renewal upwind finite-volume algorithm',[
'Definition: J,N>=1, A>T>0 make positive space/time widths; only the initialized records are empty, not the cell grid or update loop.',
'Definition: zero masses and zero beta give zero fluxes and preserved zero updates. The initial cumulative outflow is explicitlyO_h^0=0.',
'Definition: J=1 is permitted; its sole cell has inletF_0=B_h and absorbing outletF_1=M_1/Delta a, so no interior cell loop is required.',
'Definition: mu=0 removes the loss term and beta=0 removes inflow, while equality in the remaining transport CFL is permitted.',
'Definition: k=0 initializes mass/outflow records, each step discards the right-boundary flux, and k=N is included in the returned grid sequence.',
'Definition: the finite grid, quadrature mode and coefficient evaluations determine every update and status; failed evaluation returns before a partial current step.'])
item('thm-age-structured-renewal-upwind-positivity-mass-bound-and-stability','renewal upwind positivity and l1-stability theorem',[
'The Statement inheritsJ>=1 from the update. AtJ=1 proof step 1.2 uses only the first-cell formula, with no j>=2 terms.',
'Proof step 1.2 permits zero initial masses and gives nonnegative updates; step 3.1 includes zero differences between the two runs.',
'Proof step 1.2 separates the first cell fromj>=2, so its positivity argument covers a single-cell grid.',
'Proof step 2.1 permits beta_infinity=0 and the mass factor becomes1; zero mortality also simply removes a nonnegative loss term.',
'Proof step 2.1 retains both inlet birth flux and absorbing outletF_J. Step 1.1 includes cap-reached quadrature estimates but no estimate on evaluation failure.',
'Proof step 3.1 uses the fixed common quadrature/update matrix on two given mass vectors; no time-dependent selection of quadrature weights is introduced.'])
item('thm-age-structured-renewal-smooth-first-order-convergence','smooth first-order age-grid error theorem',[
'The Statement requiresJ,N>=1 with A>T>0; its initial error is0 on that nonempty grid, not an empty time or space discretization.',
'Proof step 2.2 explicitly covers beta_infinity=0 by bounding the finite geometric sum by k, avoiding division by beta_infinity.',
'The Statement permits positive integer grid counts but is an asymptotic sufficiently fine-mesh estimate; proof step 1.2 separately counts the first and last boundary cells instead of requiring an infinite cell family.',
'Proof step 2.2 handles the zero-birth coefficient case explicitly; the positive two-sided mesh ratio excludes a collapsed spatial or temporal step.',
'Proof step 1.1 retains the renewal inlet and absorbing outgoing trace; step 1.2 isolates the first/last face defects, and step 2.2 controls levels0 throughN.',
'Proof steps 2.1–2.2 iterate one deterministic finite-grid error recurrence from exact cell masses; no arbitrary numerical solution branch is selected.'])
item('thm-age-structured-renewal-bv-l1-convergence','BV age-grid L1 convergence result',[
'The Statement requires positive J_m,N_m on all admissible grids; newborn and initial-density regions may have zero mass without an empty grid domain.',
'Proof steps 1.1–1.3 give zero initial variation/mass and zero updates for zero data; zero birth/mortality coefficients are allowed in the same nonnegative recurrence.',
'Each grid may have one cell, but the asserted sequence also has Delta a_m tending to0 and A_m tending toinfinity. Proof step 2.1 analyzes bounded age blocks rather than assuming a fixed multiple-cell count.',
'Proof steps 1.2 and1.3 use nonnegative transport/loss coefficients and exponential iteration without requiring strictly positive mortality or fertility.',
'Proof step 2.2 uses compactly supported tests with terminal value0 and explicitly drops the cutoff outflow only once the test support lies below it; the convergence is uniform over[0,T].',
'Proof step 2.1 uses a countable diagonal subsequence extraction at rational times after proving finite-dimensional block approximability and time-Lipschitz control. This is a countable compactness selection, not a claim that no selection occurs; its limit is identified uniquely in step 3.1.'])
item('thm-age-structured-renewal-cutoff-tail-and-outflow-bound','cutoff-tail and outflow estimate',[
'The Statement assumesA>T and compares positive-duration age models; the tail integral can vanish for compactly supported initial data, without an empty age interval.',
'Proof step 1.1 permits mu_*=0 and mu_infinity=0, giving survival1; step 2.1 gives a zero cutoff error when the displayed initial tail iszero.',
'The Statement comparison is for one scalar age population; any later finite-volume grid count comes from the separately cited smooth first-order convergence theorem.',
'Proof step 1.1 allows identically zero mortality and fertility, while A>T prevents newborn cohorts from degenerately reaching the cutoff in the horizon.',
'Proof step 1.2 includes initial cohorts exiting by t<=T and excludes newborn outflow becauseT<A; step 2.2 compares errors at each actual grid level.',
'Proof step 2.1 splits the given density into two explicitly specified tail/head functions; linear unique solution maps determine their evolutions without arbitrary choices.'])
item('ex-narrow-maturation-kernel-delay-approximation','triangular maturation-delay example',[
'The Example assumesa_*>0, R>0 and0<epsilon<a_*, giving a nonempty triangular support and unit total mass, verified in step 1.1.',
'Verification step 2.1 sets mortality m=0 and computes the strictly positive finite-width discrepancy R epsilon^2/6.',
'This Example compares a triangular distributed fertility with a point delay; it has no one-cell numerical-grid claim.',
'Verification step 2.1 explicitly treats zero mortality, but epsilon=0 is excluded by the Example and is not substituted into the triangular density.',
'Verification step 1.2 assumes t>=a_*+epsilon, including equality, so the full triangular support lies in the convolution interval.',
'Verification steps 1.1 and2.1 integrate the fixed triangle and the fixed quadratic history explicitly; no independent kernel or history selection is needed.'])
item('ex-half-size-division-numerical-moment-budget','four-cell half-size division budget',[
'The Example fixes its displayed four disjoint cells and one occupied parent cell; no empty-grid variant is asserted.',
'Verification step 2.1 computes zero first-cell mass and zero outgoing flux while the daughter and transport terms give the other three nonnegative masses.',
'The Example fixes four cells with a parent at center2 and daughter at center1, not a one-cell theorem.',
'The Example has g=0.1 and the size-model positive-growth convention; it does not vary the fixed growth tozero.',
'Verification step 2.1 explicitly hasF_4=0 at the absorbing boundary, and step 2.2 retains this zero outflow in the number and weighted-moment budgets.',
'Verification step 1.1 fixes daughter coefficientA_2,3=2; step 2.1 computes the vector directly from the supplied four-cell data.'])
item('ex-constant-mortality-and-age-localized-fertility','localized-fertility one-step example',[
'The Example fixes four unit-width age cells and initial mass(0,1,0,0), so an empty grid is outside this witness.',
'Verification step 2.2 includes the initially zero cells and computes first output(1/8,1/2,1/4,0).',
'The Example fixes four cells and a four-panel birth quadrature, not a one-cell or one-panel specialization.',
'The Example fixes mortality1 and a nonzero triangular fertility. Its fertility vanishes off[1,2], but no zero-mortality parameter family is claimed.',
'Verification step 1.1 exhibits the initial-corner mismatch n_0(0+)=0 versusB(0)=1/2; the example does not assert smooth-corner convergence.',
'Verification step 2.1 supplies all four midpoint samples and step 2.2 computes the flux vector explicitly, so no birth-rate choice is hidden.'])
item('ex-age-cutoff-versus-outflow-tail-error','zero-rate cutoff shift example',[
'The Example fixes cutoff4 and four initial age cells; its three tested horizons1,2,3 are nonempty and below the cutoff.',
'Verification step 1.1 usesmu=beta=0, and step 1.2 sets the incoming first-cell mass to0 at each exact shift.',
'The Example fixes four cells with unit CFL and one to three shifts, not a single-cell update theorem.',
'Verification step 1.2 explicitly treats the zero-rate pure-shift update, for which all loss is absorbing cutoff outflow.',
'Verification step 2.1 compares horizons1,2,3 and includes cumulative discarded last-cell mass plus the initial tail above cutoff4.',
'Verification steps 1.1–2.1 specify each initial cell mass and each shifted output exactly; no choice of a solution trajectory is required.'])
