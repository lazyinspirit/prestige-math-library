# Direct mixed-dual synthesis for the original smooth pressure rate

Research only. The generic energy-pressure clause and the two Gaussian claims are settled and are not reopened. This note concerns only the original smooth instantaneous MINI pressure-error obligation. It proves an exact joint dual identity and uniform bounds for all its mass-consistency terms. It does not claim the remaining joint functional is bounded.

CLAUDE.md and README.md were fully re-read, followed by the actual current escalation remark and PE06 A page. The domain remains a bounded connected Lipschitz polyhedron in dimension two or three; meshes are arbitrary matching shape-regular affine meshes, h is their global maximum diameter, time partitions are arbitrary positive partitions subject only to the original smooth theorem's restriction, initialization is P_Zh u(0), and the chosen nonlinear root is arbitrary. No quasiuniformity, step-ratio restriction, extra domain regularity, mesh threshold or mesh/time coupling is added. No canonical edits or workflow/metadata actions occur in this packet.

## 1. Exact full mixed error equation

Write V_h,Q_h,Z_h for the actual MINI spaces, P for the full-L2 orthogonal projection onto Z_h, a=a_nu, and N(v)(w)=c(v;v,w). Use nodal exact representatives u_n=u(t_n),p_n=p(t_n), and interval averages denoted by bars. Let r_h be the L2 orthogonal projection onto Q_h. Put

    e_n=u_n−u_h^n,       rho_n=r_h p_n−p_h^n,
    E_n=P u_n−u_h^n,     eta_n=(I−P)u_n.

Then e_n=E_n+eta_n, E_n belongs to Z_h, E_0=0 exactly, and eta_n is L2-orthogonal to Z_h. Subtracting the actual mixed equations gives, for every v_h in V_h,

    (D_tau E_n,v_h)+a(e_n,v_h)+[N(u_n)−N(u_h^n)](v_h)
                      +b(v_h,rho_n)
      =F_n(v_h)−(D_tau eta_n,v_h),                    (1)

where the exact residual is

    F_n(v)=a(u_n−bar u_n,v)
            +N(u_n)(v)−bar N_n(v)
            +b(v,r_h p_n−bar p_n).                   (2)

The forcing averages cancel exactly. The signs in (1) follow from writing the averaged exact equation minus the discrete equation; moving its nodal-versus-averaged terms to the right gives (2). This does not differentiate a pressure primitive.

The already-proved H2 Fortin approximation and L2 best approximation give

    ||D_tau eta_n||2 <= C h² M.                      (3)

Indeed D_tau eta_n=(I−P)D_tau u_n; the exact time derivative is averaged over the cell, remains H2 and solenoidal, and has norm at most M. The estimate uses no H1 bound for P.

For later orientation, the spatial part b(v,r_h p_n−p_n) of F is W1,infinity in time as a V* load with norm C h M. Its time-consistency remainder is represented by an L2 vector with norm at most C tau_n[(1+nu)M+M²]. The viscosity term is represented by −nu Delta(u_n−bar u_n), since the difference is exactly solenoidal; the pressure time term is its H1 gradient. The nonlinear time term is L2 because H2 embeds in L-infinity in d<=3 and grad H2 embeds in L3, giving

    ||N_s(u)−N_s(v)||2 <= C(||u||H2+||v||H2)||u−v||H2.

These are the same admissible smooth residual classes identified in the earlier maximal-route note, not a generic V* maximal-regularity assertion.

## 2. Actual mass and stiffness divergence lifts

For q in Q_h define Wq as the unique L2-minimal element of the affine space

    {v_h in V_h:b(v_h,s_h)=(q,s_h) for every s_h in Q_h}.

This affine space is nonempty: if B is the actual continuous divergence right inverse, −Pi_h Bq belongs to it by the actual Fortin preservation. Finite-dimensional strictly positive mass gives the unique minimizer. Its first variation says Wq is L2-orthogonal to Z_h. It is exactly the actual mass-Schur lift, not a replacement projection.

Define Lq as the unique a-minimal element of the same affine space. Its first variation gives a(Lq,w_h)=0 for w_h in Z_h. With

    C_B=C_P C_F C_div,

mass minimality and Fortin stability give

    ||Wq||2 <= C_B||q||2,
    ||Lq||V <= sqrt(2) C_F C_div||q||2,
    ||Lq||2 <= sqrt(2) C_B||q||2.                    (4)

For the second bound, compare a(Lq,Lq) with the admissible −Pi_h Bq, and use nu||v||V²<=a(v,v)<=2nu||v||V². Thus Kq=Lq−Wq belongs to Z_h and

    ||Kq||2 <= (1+sqrt(2))C_B||q||2=:C_K||q||2.       (5)

All constants in (4)–(5) are independent of the smallest mesh diameter, h and every time step. In particular K=P L, but no H1 bound on K or P is inferred.

## 3. Backward mixed dual test and a uniform L2 estimate

Choose an arbitrary sequence q_n in Q_h, with norm

    ||q||ell4(Q)=(sum_n tau_n||q_n||2^4)^(1/4).

Let z_{N+1}=0 and solve backward in Z_h

    ((z_n−z_{n+1})/tau_n,w_h)+a(z_n,w_h)
        =−a(Wq_n,w_h),      w_h in Z_h.              (6)

Every step is uniquely solvable by positive mass plus stiffness. Put

    v_n=Wq_n+z_n.

Then b(v_n,s_h)=(q_n,s_h) and

    (D_tau^* z_n,w_h)+a(v_n,w_h)=0.                 (7)

Let A:Z_h→Z_h be the positive mass-selfadjoint operator (Az,w)=a(z,w). Because a(Lq_n,w)=0, (6) is precisely

    D_tau^* z_n+A z_n=A Kq_n.                       (8)

Test (8) with A^-1 z_n, multiply by tau_n and sum. The Hilbert identity gives

    1/2||A^-1/2 z_1||2²
      +1/2 sum_n||A^-1/2(z_n−z_{n+1})||2²
      +sum_n tau_n||z_n||2²
       =sum_n tau_n(Kq_n,z_n).

Young's inequality therefore yields

    ||A^-1/2 z_1||2²
      +sum_n||A^-1/2(z_n−z_{n+1})||2²
      +sum_n tau_n||z_n||2²
       <=sum_n tau_n||Kq_n||2².                    (9)

In particular,

    ||z||ell2(L2)+||A^-1/2 z_1||2
       <= 2 C_K T^(1/4)||q||ell4(Q).               (10)

This is an unconditional actual-MINI backward-test bound on every allowed partition. It does not use a fractional norm equivalence, a pressure boundary trace estimate or the false H1-stable orthogonal kernel projector. The endpoint controlled in (10) is a kernel negative norm, not the full V* norm.

## 4. Exact pressure dual identity without an explicit initial term

Test (1) with Wq_n. Since D_tau E_n belongs to Z_h and Wq_n is mass-orthogonal to it,

    (rho_n,q_n)=F_n(Wq_n)−a(e_n,Wq_n)
                   −[N(u_n)−N(u_h^n)](Wq_n)
                   −(D_tau eta_n,Wq_n).            (11)

On kernel tests, the eta derivative vanishes. Discrete summation by parts, using E_0=0 and z_{N+1}=0, gives

    sum_n tau_n(D_tau E_n,z_n)
       =sum_n tau_n(E_n,D_tau^* z_n).

Combine this identity with (7) and the kernel restriction of (1). Every term is a finite-dimensional pairing; no temporal regularity of q is assumed. The result is

    sum_n tau_n(rho_n,q_n)
      =sum_n tau_n {
          F_n(v_n)−[N(u_n)−N(u_h^n)](v_n)
          −a(eta_n,v_n)−(D_tau eta_n,Wq_n)
        }.                                         (12)

Thus the mass-projected-error formulation genuinely has zero initial error and no separately introduced homogeneous initial orbit. Equation (12) is the requested direct time-dependent mixed identity. Its mere existence is not a bound: eta_n is not known small in H1, and neither Wq nor v has a uniform H1 bound in terms of ell4(Q).

One of its terms is already harmless. From (3)–(4), weighted Holder gives

    |sum_n tau_n(D_tau eta_n,Wq_n)|
       <=C h² M T^(3/4)||q||ell4(Q).                (13)

## 5. Where the initial observation returns under the known H1 approximation

Let r_n=Pi_h u_n−u_n, where Pi_h is exactly the existing face-average Fortin map. Its cell moments vanish, it annihilates grad Q_h, and

    ||r_n||V<=C hM,    ||r_n||2<=C h²M,
    ||D_tau r_n||2<=C h²M.                          (14)

Since Pi_h u_n belongs to Z_h,

    P r_n=Pi_h u_n−P u_n,
    eta_n=−r_n+P r_n.                               (15)

Applying (7) to P r_n and summing by parts yields the exact identity

    −sum_n tau_n a(eta_n,v_n)
       =sum_n tau_n a(r_n,v_n)
           +sum_n tau_n(D_tau r_n,z_n)
           +(r_0,z_1).                             (16)

To verify the endpoint sign, −a(P r_n,v_n)=(P r_n,D_tau^*z_n); its sum is sum_n tau_n(D_tau P r_n,z_n)+(P r_0,z_1). Orthogonality gives (D_tau P r_n,z_n)=(D_tau r_n,z_n) and (P r_0,z_1)=(r_0,z_1). This is a positive initial term.

Equation (10) and (14) give the second uniform mass-consistency bound

    |sum_n tau_n(D_tau r_n,z_n)|
       <=C h² M T^(3/4)||q||ell4(Q).                (17)

Hence all mass derivative defects in this direct argument are controlled with no relation among h, h_min and the time steps. The remaining endpoint is the unprojected, structured r_0 paired with the generated z_1; r_0 has zero cell means and vanishing trace. Bounding it by ||P r_0||V would reintroduce an unproved special H1 estimate and is not done.

This algebra explains exactly why setting E_0=0 does not, by itself, dispose of the initialization difficulty. Replacing the uncontrolled H1 approximation eta=(I−P)u by the sound Fortin approximation moves the same difficulty into a dual endpoint. A proof might still bound the joint expression directly by its local moments or the actual equation. No impossibility for such a proof is asserted.

## 6. The single joint functional still required

The exact skew realization is

    N_s(v)=(v dot grad)v+(divv)v/2.

With e_n=u_n−u_h^n and divu_n=0,

    N_s(u_n)−N_s(u_h^n)
       =(u_n dot grad)e_n+(e_n dot grad)u_n
          +(div e_n)u_n/2−N_s(e_n).                (18)

The linearized bracket is L2 in space, with norm at most C M||e_n||V, so the complete existing velocity error controls it in ell2(L2). The smooth residuals and a(r_n,·) have the time-regular V* and L2 classes already handled in the earlier zero-initial linear analysis. Once those known responses and (13),(17) are accounted for, the exact remaining pressure-dual functional is

    J_h(q)=(r_0,z_1)
             +sum_n tau_n N_s(e_n)(Wq_n+z_n).       (19)

Finite-dimensional weighted Holder duality gives ||rho||ell^(4/3)(Q)=sup_{||q||ell4<=1} sum_n tau_n(rho_n,q_n). The missing nodal interpolation term obeys ||p_n−r_h p_n||2<=ChM; replacing nodal exact pressure by p(t) on its time cell costs at most tau_max M by the original Lipschitz-in-time H1 hypothesis. Thus an original-scope bound |J_h(q)|<=C(hM+tau_max M²)||q||ell4(Q), with the required viscosity/data dependence, would close the pressure rate without separately certifying a generic full-test derivative estimate. The e_n here must be the ACTUAL error of a selected original backward Euler solution; arbitrary energy-class fields are not interchangeable with it. In particular the initial endpoint and the nonlinear term may only be separated if each separate estimate is genuinely proved.

The fixed-polyhedral-vertex note in `../numerical-analysis-remaining-71-2026-10-17-ROOT-mini-quadratic-boundary-cycle4/actual-polyhedral-vertex-energy-obstruction.md` shows that the instantaneous Helmholtz pressure of a freely chosen no-slip, exactly solenoidal quadratic energy pulse cannot be bounded in ell4/3(L2) by the two energy norms alone. Root independently checked that precise obstruction. It does not refute (19) for actual numerical errors, nor the whole time-dependent mixed-dual test. Thus the next valid step must exploit generated-dual localization, the exact cell moments of r_0, or an actual-trajectory cancellation; it cannot simply apply the false separate scalar bound.

## Status and ownership

A genuinely new actual-MINI proof step is complete: (12), the unconditional backward-test estimate (9)–(10), and the resulting h² mass-consistency estimates (13),(17) under the original scope. The full bound (19) is not proved. The three settled claims stay closed, the original smooth pressure clause stays unchanged, and no canonical material or controlling metadata has been edited. The original pressure owner retains all eventual supplier/consumer repair duties. Helpers are coordinated on the generated initial endpoint and actual no-slip quadratic response rather than on a generic load theorem already refuted.

## 7. Exact Oseen adjoint removes the separate quadratic term

There is a further genuinely joint formulation. For the ACTUAL selected numerical solution define

    B_n(w,v)=a(w,v)+c(u_h^n;w,v)+c(w;u_n,v).          (20)

Trilinearity gives exactly N(u_n)−N(u_h^n)=B_n(e_n,·)−a(e_n,·). The second term in (20) cancels on equal arguments regardless of pointwise discrete divergence. Thus

    B_n(w,w)=a(w,w)+c(w;u_n,w)
       >=(nu/2)||w||V²−C nu^(-3)M_u^4||w||2².       (21)

This follows from the proved trilinear bound and Young with exponents4/3,4. The constant is absorbed by the original Lambda after the same permitted enlargement of its domain/trilinear constant. Consequently each backward adjoint step is invertible under the ORIGINAL time restriction, with no h-smallness and no regularity assumption on u_h beyond the selected finite-dimensional solution. Indeed its diagonal form is tau_n^(-1)||w||2²+B_n(w,w), positive by (21) and tau_n Lambda<=1/2; in finite equal dimensions injectivity of the transpose gives solvability.

Define the new backward z^B by

    (D_tau^* z_n^B,w_h)+B_n(w_h,z_n^B)
          =−B_n(w_h,Wq_n),    z_(N+1)^B=0,
    v_n^B=Wq_n+z_n^B.                                (22)

Thus (D_tau^* z_n^B,w_h)+B_n(w_h,v_n^B)=0 and b(v_n^B,s_h)=(q_n,s_h). Repeating the finite summation argument in Sections4–5 gives the exact identity

    sum_n tau_n(rho_n,q_n)
       =sum_n tau_n {
           F_n(v_n^B)+B_n(r_n,v_n^B)
              +(D_tau r_n,z_n^B)
              −(D_tau eta_n,Wq_n)
         }+(r_0,z_1^B).                              (23)

In particular the actual quadratic error does not appear separately. No estimate for its independently reconstructed scalar pressure is needed to WRITE (23). This is an exact cancellation, not a proof that the new dual tests are uniformly bounded.

The residual B_n(r_n,·) also has more structure than a generic quadratic energy load. The viscosity part a(r_n,·) is W1,infinity in time in V* with size C hM. The exact-u part c(r_n;u_n,·) is represented by an L2 vector

    (r_n dot grad)u_n+(div r_n)u_n/2,

of norm C hM², using H2-to-L-infinity and grad u in L3. The rough coefficient term c(u_h^n;r_n,·) is represented by

    (u_h^n dot grad)r_n+(div u_h^n)r_n/2.

Sobolev and Holder bound its L^(3/2) norm by C||u_h^n||V||r_n||V, hence its ell2(L^(3/2)) norm by C h M M_E. The divergence term is retained. These claims use the actual unprojected, zero-boundary r_n; they would not be valid merely by assigning small H1 norm to (I−P)u_n.

The unconditional Stokes adjoint estimate (9) does NOT automatically hold for z^B. Testing its equation with A^-1 z^B introduces nonsymmetric transport terms; energy cancellation on equal arguments in (21) does not cancel them. Nor does the finite-dimensional invertibility just proved give a constant independent of the mesh. The algebraic example in `abstract-joint-energy-residual-obstruction.md` shows that the uniform stability and smooth-residual information alone cannot supply the missing spatial observation, even when all transport terms vanish.

Therefore (23) is a materially different exact joint target that preserves the original nonlinear/any-root/coarse-global-h scope and removes the false separate quadratic estimate. A complete proof must still control its GENERATED mixed lift against the specific smooth/local-moment residuals and the structured initial r_0. Those bounds remain unproved; they are not supplied by positive coercivity, the existence of a common oblique Fortin projection, or the already settled pressure-primitive theorem.

## 8. An actual-MINI equivalence prevents merely hiding the initialization estimate

This final reduction uses the ACTUAL MINI spaces and every original domain/mesh/time allowance, but a linear Stokes auxiliary equation. It does not assert that the original nonlinear theorem is equivalent to its linear analogue. It identifies what any proof using the linear decomposition must still establish, even if it is packaged as a joint mixed-dual argument.

Fix any stationary u in H2(D)^d intersect V_sigma, take exact pressure0 and force −nu Delta u, and solve the linear mixed backward Euler MINI problem with initialization P u. Let S_h u be the actual energy projection, a(S_hu,z)=a(u,z) for z in Z_h. Its static mixed pressure p_S satisfies

    a(S_hu,v_h)+b(v_h,p_S)=a(u,v_h).

Fortin approximation gives

    ||u−S_hu||V<=C h||u||H2,
    ||p_S||2<=2nu beta^(-1)||u−S_hu||V,
    ||Pi_hu−S_hu||V<=C h||u||H2.                    (24)

For completeness, test energy orthogonality against S_hu−Pi_hu; coercivity and the upper bound on a give its V norm at most twice ||u−Pi_hu||V. The first and third bounds follow. Inf-sup applied to b(v,p_S)=a(u−S_hu,v) proves the second bound. No dual elliptic regularity is used.

Define the actual homogeneous pressure observation C_h:Z_h→Q_h by

    b(v_h,C_h y)=(A y,v_h)−a(y,v_h),    v_h in V_h.  (25)

Its right side annihilates Z_h, so finite-dimensional inf-sup gives a unique C_h y. For the homogeneous recurrence D_tau y_n+A y_n=0, C_h y_n is exactly its mixed pressure, independent of the step length once y_n is known.

If y_0 belongs to Z_h, derivative-energy testing gives

    sum_n tau_n||D_tau y_n||2²<=a(y_0,y_0)/2
                                      <=nu||y_0||V².

The ordinary velocity energy estimate gives sum_n tau_n||y_n||V²<=||y_0||2²/(2nu). Applying inf-sup to (25) and Holder in time therefore yields

    ||C_h y||ell^(4/3)(Q)
      <=T^(1/4) beta^(-1)(1+sqrt(2))C_P sqrt(nu)
                                            ||y_0||V.  (26)

This is only a bound for genuinely V-controlled INITIAL DATA. It says nothing about the unproved V norm of P r.

Let R_n=product_(j=1)^n(I+tau_j A)^(-1). The actual linear velocity and pressure split as

    u_h^n=S_hu+R_n(Pu−S_hu),
    p_h^n=p_S+C_h R_n(Pu−S_hu).

With r=Pi_hu−u, one has the exact identity

    Pu−S_hu=(Pi_hu−S_hu)−P r.

Consequently (24)–(26) show

    | ||p_h||ell^(4/3)(Q)
         −||C_h R_n P r||ell^(4/3)(Q) |
       <=C h||u||H2,                                (27)

with C independent of mesh grading and all time steps. The norm difference is bounded by the norm of p_S+C_hR_n(Pi_hu−S_hu), which is precisely controlled by those two estimates.

Thus for this actual-MINI stationary linear auxiliary problem, first-order pressure accuracy is equivalent, up to already-proved first-order terms, to the structured homogeneous observation for P(Pi_hu−u). A direct proof can establish this content implicitly through a joint duality or local cancellation, but cannot obtain the linear pressure rate merely by declaring the separate initial layer unnecessary. Equation(27) is not an original nonlinear counterexample and does not rule out an Oseen/actual-trajectory proof of (23). It pinpoints the actual spatial initialization content that remains within any such proof, rather than returning to the false full-test H1 projector.

## 9. An exact adjoint reconstruction and a controlled actual component

This additional spatial observation uses the actual local-volume Fortin projection F described in `research/numerical-analysis-remaining-71-2026-10-17-ROOT-smooth-pressure-maximal-cycle4/local-volume-fortin-projection.md`. That construction was read in full. It is defined directly on all L2 by volume integrals, maps onto the actual no-slip MINI space, is the identity on that space, and preserves every vector cell mean. No H1 stability of its L2 adjoint is asserted or used below.

Let R be the orthogonal L2 projection onto the full MINI velocity space, P0 the vector cell-average projection, and F* the L2 adjoint. Projection and range give

    F*R=F*,       RF*=R,       F*P0=P0.                 (28)

For example, (F*R x,y)=(R x,Fy)=(x,Fy); (RF*x,v_h)=(x,Fv_h)=(x,v_h); and (F*P0x,y)=(P0x,Fy)=(P0x,y), where the last equality uses exact preservation of each cell integral. Thus if the mass-minimum divergence lift is written Wq=R grad(phi_h), with the sign of phi_h chosen accordingly, then

    F*Wq=grad(phi_h).                                 (29)

This is an exact gradient reconstruction, not just an H(div) reconstruction. It makes no claim about the curl of F* on arbitrary inputs.

Define the self-adjoint weighted oscillation C_h f on K by h_K(f−P0 f). A further actual bound is

    ||F C_h f||V <= C||f||2,      F C_h f in Z_h.       (30)

Indeed the construction gives a local inverse-scaled bound ||Fv||V(K)<=C h_K^(-1)||v||2(omega_K). This follows from its local L2 stability and the polynomial inverse bound on the OUTPUT space, and does not require v to have a trace. All cells of the bounded vertex patch have comparable diameters on matching shape-regular meshes. Applying this to v=C_hf, using ||C_h f||2(K)<=h_K||f||2(K), and summing bounded-overlap patches proves (30). Its kernel property follows because every cell integral of C_h f is zero and F preserves those integrals.

Let delta_lambda=W_lambda q−Wq for the same actual complex Brinkman lift as in the structured-observation packet, in a sector |arg lambda|<=pi−theta, with |lambda|>=1. The already available uniformly bounded energy lift Lq implies

    ||W_lambda q||V <= C_theta |lambda|^(1/2)||q||2.    (31)

To check this without a parameter-dependent inf-sup claim, put k=W_lambda q−Lq in Z_h. The kernel equation is lambda(k,z)+a(k,z)=−lambda(Lq,z)−a(Lq,z). Multiplication by exp(−i arg(lambda)/2), followed by the real part with z=k, bounds k in the norm (|lambda|||k||2^2+a(k,k))^(1/2) by C_theta times the same norm of Lq. The common L2 and V bounds for Lq prove (31).

Testing the lift equation against z=F C_h f, which is an actual kernel test by (30), gives

    lambda(delta_lambda,F C_h f)
        =−a(W_lambda q,F C_h f).

Here (Wq,F C_hf)=0 by mass minimality. Using (30),(31) and adjointness therefore proves the uniform sector estimate

    ||C_h F*delta_lambda||2
          <=C_theta |lambda|^(−1/2)||q||2.            (32)

By (29), C_h F*Wq=0, so the same bound holds for C_h F*W_lambda q. This controls an actual reconstructed oscillation with the desired half-power, on arbitrary grading. It is not the still-missing estimate for C_h delta_lambda. In particular F* fixes the entire vector P0 space, not only the gradients of Q_h: if delta=R g for a vector cellconstant g, then F*delta=g and C_hF*delta=0 while C_hdelta need not vanish. The generated coupled cellconstant component consequently remains to be controlled. Neither (28) nor (32) may be substituted for that missing bound in the pressure proof. This section supplies one genuine controlled spatial component and identifies precisely the remaining coupling; it does not resolve the original smooth pressure assertion.

## 10. Current branching/resolvent synthesis after the exact local obliquity check

The original smooth instantaneous pressure claim remains unresolved. No canonical changes were made in this research continuation. The other three settled claims remain unchanged.

The exact full-state target is `full-boundary-state-and-recursive-schur-target.md`: twenty-dimensional seven-node boundary state, pressure/r scaling, full child Schur recursion and source recovery, with root and inherited pressure forcing retained. Its affine Darcy background is an exact global assembly mode. No ancestor star is assigned a child's area.

A genuine improved supplier is `logarithmic-pressure-corner-lift-with-affine-fan.md`. Its explicit dyadic ladder gives seven-node pressure extension cost C sqrt(log(1/epsilon_strip)), affine on the entire protected fan and every hole, with no tilt loss. Root independently checked its complete geometry and energy. The compatible parameter receipt is `compatible-logarithmic-parameters.md`: delta² log(1/epsilon_strip)<<aperture<<delta, joint neutral collar budgets and guards can coexist with the formal critical branching scale. These are actual estimate/geometry compatibilities, not a proved transfer.

The completed actual tangential inheritance and disjoint-annulus weighted reset estimates are in `research/N-ROOT-mini-fractional-projection-cycle4/actual-tangential-slope-inheritance.md`, Sections 6–9. They charge only the affine-Darcy quotient, sum over disjoint current annuli, and use the exact variance identity to obtain a physical H^s bound without nested double counting. Actual strain equations are retained above their fixed-template lambda fronts. Owner independently read and checked these interfaces. The exact selected child half-base slope versus parent adjacent weighted average, including tangential kink and neighboring velocity differences, is the next active coupling step.

The exact zero-child-quotient implication is recorded in `exact-child-background-parent-row-compatibility.md`: a child that is an affine Darcy background b forces b=a_parent and the adjacent parent potential gradient -a_parent, provided its base center has precisely the two parent-fan plus child incidence. Quantitative normal recovery from only these center rows fails: independent exact calculations found an N^-2 pressure-curvature weak direction. The counterhelper's complete endpoint/root and genuine-child DtN calculation is under `research/numerical-analysis-remaining-71-2026-10-17-ROOT-mini-smooth-counterexample-fresh/`; the exported endpoint loads must be handled, rather than deleting them. The exact implication is not a normal transfer theorem.

Current direction: use the actual tangential parent row plus the weighted reset-energy dichotomy, rather than assuming a pointwise twenty-dimensional cone. Either accumulated reset is small enough for an actual anti-copy channel, or its actual quotient energy is already large. This still requires a real source-to-pressure observation. A norm-one adaptive q_j is permitted; the original problem does not require a fixed coarse q source. In particular a proof of actual ||p_hat||2 growth could select q_j=p_hat/||p_hat||2. Conversely mass H^s growth alone does not imply this output growth: the true strain resolvent W_lambda-W_h and actual smooth solenoidal input must remain in the argument.

The source and nonlinear realization interfaces remain exactly `exact-solenoidal-bubble-excitation.md` and `nonlinear-realization-from-strong-crossentry.md`. The latter is a complete conditional realization: every strict-power actual source crossentry lower bound lambda^-gamma with gamma<1/4 suffices via finitely many real admissible amplitudes and an actual BE branch. The missing physical input is still that actual static/resolvent crossentry or an equivalent pressure-output lower bound, not the nonlinear realization. No pressure theorem or counterexample is certified by this synthesis.

## 11. Structured-source and actual-pressure bridge now complete

The original smooth instantaneous pressure clause is STILL unresolved; no canonical edits or metadata/control actions were made. The following additional research proofs were independently fully read and mathematically checked by root:

* `exact-boundary-moment-lift-and-local-mass-comparison.md`: a true depth-uniform boundary-moment-preserving mass competitor, including all inherited weak-divergence moments. It gives a positive twenty-dimensional primal boundary state but does not control that state by a scalar root contrast.
* `uniform-coarse-solenoidal-source-root-contrast.md`: six fixed smooth coarse curl actuators uniformly normalize the actual initial root contrast, independently of depth; Section 5 covers the actual normalized strain response above a fixed initial-root-star threshold.
* `pressure-observable-coarse-projection-bridge.md`: the four special smooth sources with FULL R_hu_j equal to fixed coarse bubbles w_j have uniformly H1 full projections. Then P_hu_j=s_h+Kq_h with s_h uniformly H1 and q_h=P_Q(-div w_j) uniformly L2. The actual Kq pressure Laplace observation is the positive spectral G_h(lambda). Unbounded physical H^s, SOME s<1/4, forces strict-power actual pressure crossentry growth through the exact Mellin moment identity. The H1 remainder cannot cancel it. The completed nonlinear/BE realization therefore applies. This is an actual output bridge, not the invalid inference from arbitrary tangential roughness.
* `reflection-normalized-coarse-bubble-sources.md`: on the explicitly MIRRORED TWO-fan template, those SAME FOUR structured sources uniformly normalize the initial root contrast. The adjoint proof uses the coarse bottom pressure row and an exact parity reference in the C problem with pressure Dirichlet data on its base and zero weak-divergence loads at the other pressure ports. It is mass-only. Each protected fan and all holes lie in its own affine macrozone.

Consequently source normalization and pressure observation are no longer separate missing obligations IF mass fractional divergence is established for the restricted four-source family. The remaining actual task is to prove that P_hu_j has unbounded physical H^s for some s<1/4 on one admissible fixed-template mesh family. This needs nonextinction or an actual spectral/relative-state lower bound; absolute weighted error budgets and arbitrarily large finite transients do not suffice.

The actual nonnested mass Mosco/DtN convergence and autonomous limiting fixed point are supplied in the fractional helper's `research/N-ROOT-mini-fractional-projection-cycle4/actual-mini-mass-mosco-and-dtn-limit.md`, reviewed separately by root. They do not themselves supply a growing eigenchannel. Generic pseudospectral dimension estimates must retain the aperture-dependent state norm a^(-1/2); choosing delta arbitrarily small without respecting a<<delta is not a proof. Fixed N is chosen first, then depth tends to infinity. A finite-depth cutoff is consistent with any absolute shape-dependent bound and remains to be excluded by actual structure.


## 12. Actual ring, quotient block and average-source interface

The original smooth instantaneous pressure claim remains unresolved pending complete assembled block/decomposition certification. No canonical/control changes have been made. The current concrete route is MASS fractional divergence for the restricted coarse-bubble sources, followed by the already checked actual-pressure/nonlinear/BE bridge.

The exact finite two-driver embedding is `exact-two-driver-schur-embedding-target.md`. The actual energy/gluing step is `passive-child-mass-remainder-energy.md` together with `child-scale-incoming-cutoff-and-passive-scattering.md`. These retain all weak-moment residuals and prescribed pressure reactions, use a common uniform annulus, and restore physical pairs after pressure/velocity lifts. The sharp ideal family energy and exact bounded odd rank-one projection are in `sharp-ideal-driver-energy-normalization.md`.

The reflected uniform grids and driver/frame covariance are fixed in `reflection-covariance-of-two-driver-average.md`. The actual ALL-STATE tangent top row, including guards, exact equal-half slope, quotient normalization and all frame signs, is proved in `actual-all-state-reflection-odd-tangent-top-row.md`. Root independently checked this proof. Its normalized error is C(delta+sqrt(epsilon_Q))/sqrt(sigma), with no full normal-gradient inference.

The full comparison-base guard pressure issue is addressed by `radial-fan-entire-base-affine-remainder.md`: final affine extractor is the EXACT chord slope mean(T), while mean(T+dN/y) is only an intermediate proof device. This is necessary for affine-Darcy quotient covariance. The structured helper's actual full-breakpoint lift, nested cutoffs and distant-tail field are in its `entire-refined-base-pressure-collar-lift.md`. Full normal unequal velocities use center matching plus arbitrarily thin child-side CORNER stars and tiny uniform guard stars, as proved by the geometry and counter helpers; normal slope inheritance is not assumed.

`reflection-odd-quotient-aggregation-and-block-target.md` gives the exact remainder-averaging implication and asymmetric rank-one block argument. Its complement budget requires the complete per-child decomposition and all restored source-free remainder fields; it is not certified solely from the individual local estimates. The intended fixed parameters are delta=L^-200, aperture=L^-220, b0=L^-20, sigma=L^-150, epsilon_Q=L^-380, corner error L^-600, with freely smaller dyadic uniform width. The bulk normalized term is L^-30, and the left-row terms L^-125,L^-115 beat the initial normalized source scale L^-110/polylog. Polynomial N cancels in the averaged ring estimate because ell sqrt(B) is comparable to parent-radius sqrt(b0 aperture).

A critical source-interface defect was found and repaired: the older reflection-normalized-coarse-bubble-sources.md concerns RIGHT-HALF slope, not the reflection-odd AVERAGE slope. Its even-root-pressure contradiction cannot prove average-source visibility. The new `average-contrast-four-source-moment-mismatch.md` proves the actual average functional using the cell-mean-neutral GLOBAL root velocity test and GLOBAL affine pressure test q=x. Their unchanged coarse coefficients are 64r²/45 and 8r²/5, with ratio 9/8; the sharp upper root star makes their top contributions small. This yields a depth-uniform c/K_log source lower bound for the genuine average/odd contrast. No right-half-to-odd identification is used.

Remaining work: one complete per-child actual decomposition with nested velocity and pressure tails, the two row bounds on the SAME chosen template, and source-supported spectral/Hs divergence. Only after independent full-chain audit may this be promoted to an exact-scope counterexample and supplier/consumer authoring inventory. The other three settled claims remain unchanged.

### Subsequent operator and source audits within the same continuation

Two additional interface corrections are now explicit. First, the actual halfplane Green proof must use the radiation-consistent ideal embedding in `radiation-consistent-two-driver-embedding.md`, not silently identify it with the historical finite far-Dirichlet Schur. The compact incident patch, actual bubble inf-sup, halfplane Hardy and exterior-only density give its finite-energy scattered correction and sharp child energy; the total plane field is tested only on bounded-spatial-support tests. An independent checker is auditing this proof. Inside the limiting child, bounded spatial support never means finite-cell truncation near the accumulation set.

Second, a single SWNE diagonal exterior is not itself reflection invariant. The actual odd tangent projection uses E_t^-, with exact selector one and sharp energy; the normal odd part E_n^- must be charged, not cancelled by a formal two-driver sign argument. The current repair is a compatible-free12-port exterior Darcy/Mosco comparison after fixing N, with arbitrarily small uniform width selected afterward. Full twenty-port exterior convergence is not claimed: incompatible nonzero pressure at a base corner against zero exterior flat-base trace can have logarithmic corner energy. The actual ideal problem fixes all three base pressure values zero, so its free pressure traces are compatible. Current-child original boundary-port mass detection must remain positive independently of the exterior refinement.

The old right-half source proof has now been replaced for recurrence purposes by the ACTUAL AVERAGE-functional proof `average-contrast-four-source-moment-mismatch.md`; root independently checked all constants and signs. Its neutral-root and global-q=x identities have the exact 9/8 coarse mismatch and give c/K_log initial average contrast. This is the source bound to use in the odd block, not the right-half result.

No canonical or metadata/control operation has been performed. The full original smooth instantaneous pressure claim remains held until the exterior parity comparison, one consistent actual decomposition/block proof, and independent full-chain audit are complete.

## Direct original-owner canonical materialization

The complete research proof and same-child research acceptance have now been materialized in `items/cex-na-graded-mini-mass-initialization-pressure-rate.md`. The carrier includes all novel local proofs and the final assembly, with 33 existing dependencies and declared level 9. Its exact phase/source map, added elementary expansions, focused source edits, preserved positive interfaces and explicit final layout result are recorded in `canonical-materialization-handoff.md`. Actual current cross-batch supplier uses and the complete velocity-theorem consumer closure are recorded in `canonical-supplier-use-and-consumer-dispositions.json`. The SAME child is performing the actual completed canonical proof/consumer audit; root retains final metadata/readiness/gates. This records direct owner authorship, not a new native dispatch or native author success.

The SAME child has now completed the actual canonical audit and accepted the full proof plus focused consumer edits without a substantive defect. Durable evidence: `independent-canonical-proof-consumer-audit-smooth-fresh-c4.md`; the original owner read the complete report. Source writing is drained. The final explicit changed-item layout remains four items, 164 steps, zero defects; no item changed after that pass. Root integration/readiness/gates remain separate.
