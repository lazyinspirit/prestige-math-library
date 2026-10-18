# Independent check of the direct mixed-dual continuation

Read the complete current `../numerical-analysis-remaining-71-2026-10-17-ROOT-mini-pressure-direct-dual-cycle5/REPORT.md`, including equations (1)--(23), against the actual scheme, canonical b=-integral q divv=+(v,grad q), actual symmetric-gradient a, original regularity and initialization.

**Verdict:** the displayed algebra, unconditional Stokes backward estimate, mass-defect estimates, and exact Oseen cancellation are correct as written. They are meaningful new research progress. They do not prove the remaining pressure estimate, and the report accurately identifies that limitation.

In detail:

- The nodal/averaged residual in (2) has the right signs, including the projected nodal pressure term; forcing averages cancel. Deta=(I-P)D_tau u has L2 size h^2M without u_tt or H1 stability of P.
- The mass/stiffness lifts have the stated minimality and bounds. Since the divergence right inverse B has div Bq=q, the admissible velocity is -Pi_hBq. The upper/lower Korn form bounds give the stated sqrt(2) factor. K=L-W=P L is an exact mass identity.
- Equation (8) follows from a(Lq,w)=0. Testing with A^-1 z gives the exact endpoint at z_1 and the nonnegative backward increments. Young gives (9); weighted Holder gives the T^(1/4) in (10), and then T^(3/4) in (13),(17). No step-ratio or global inverse estimate enters.
- Discrete summation by parts has endpoint -E_0 z_1, which vanishes under actual mass initialization. This gives (12). Substituting eta=-r+Pr produces the **positive** endpoint +(r_0,z_1) in (16). The derivative replacement DPr,z=Dr,z uses only z in Z_h.
- The strong skew expansion (18) retains +(div e)u/2 and -N_s(e), so the remaining joint functional (19) has the correct positive quadratic sign.
- The zero-initial Stokes response arguments for smooth bounded-variation V* loads and L2 loads really bound their pairings against v=W+z: the forward mixed pressure paired with q equals the corresponding load paired with v. Thus section 6 is entitled to identify the residual joint Stokes functional. It is not asserting a generic pressure bound for arbitrary V* loads.
- B_n(w,v)=a(w,v)+c(u_h^n;w,v)+c(w;u_n,v) gives N(u_n)-N(u_h^n)=B_n(e_n,.)-a(e_n,.) exactly. On the diagonal the actual rough coefficient u_h cancels by skew symmetry. The remaining exact-u term has the original Gårding bound and original time restriction, after choosing the domain/trilinear constant large enough once. There is no h threshold, changed numerical root, or changed initialization in this algebra.
- The orientation B_n(w,z_n^B) in the backward equation is the transpose required to eliminate B_n(E_n,v_n^B). Repeating the same summation gives every sign in (23), including the positive initial endpoint.
- The two convective residual classes following (23) are correct: c(r;u,.) is L2 represented with norm ChM^2, while c(u_h;r,.) is only assured L^(3/2) represented with norm C||u_h||V||r||V. Their claimed time exponents follow from the actual energy and Fortin bounds. Pointwise divergence of u_h is not set to zero.

## A possible refinement that does not yet close the estimate

One can define a shifted adjoint Oseen energy lift L_n^B q by imposing the same divergence and requiring

    C_n(w,L_n^B q)=0 for all w in Z_h,
    C_n=B_n+gamma(.,.),

where gamma dominates the exact-u Gårding constant. Coercivity on Z_h, an ordinary Fortin divergence lift, and the continuity bound for c(u_h;w,v) give

    ||L_n^B q||V <= C(data,nu)(1+||u_h^n||V^(1/2))||q||2.

The L2 norm has the same bound. Because ||u_h||ell2(V) is uniformly controlled, ||u_h||V^(1/2) belongs to ell4. Therefore q in ell4 implies L_n^B q-Wq belongs to ell2(L2), without any mesh or step-ratio dependence. This recovers the right *static input integrability* for a possible analogue of section 3.

It does not justify repeating the A^-1 test. That test introduces C_n(A^-1 z,z) and C_n(A^-1 z,K_n), whose convective parts do not cancel. H1 control of A^-1 z and H1 energy control of u_h do not put those terms uniformly in the two L2 norms from (9). Moving derivatives requires additional spatial regularity of the actual Stokes/Oseen lift, exactly the unresolved generated-test estimate. No Oseen negative-norm maximal-regularity assertion follows from this refinement.

The independent check wrote only this research receipt. It made no canonical edits and ran no tests, gates, rehashes or workflow transitions.
