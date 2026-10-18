# Pressure-observable coarse-projection bridge

Research proof, 2026-10-18. This is a conditional BRIDGE with an actual pressure output, not the false implication from arbitrary tangential roughness. Its essential extra hypothesis is that the FULL unconstrained velocity mass projection of the smooth source is a uniformly H1-bounded coarse field.

## Hypotheses and conclusion

On one fixed two-dimensional polygon D and the actual MINI mesh family, let R_h be the L2 projector onto the full velocity space V_h, P_h the L2 projector onto Z_h, and A_h the positive kernel Stokes operator for the true symmetric-gradient form a_nu. Let u_h^* be smooth exactly solenoidal no-slip sources with uniformly bounded H² norms. Assume

    R_h u_h^*=w_h,          sup_h ||w_h||H1<infinity.          (1)

Suppose, for SOME 0<s<1/4,

    ||P_h u_h^*||H^s(D) is unbounded.                       (2)

Then there are actual norm-one q_h, lambda_h -> infinity, and any chosen s' with s<s'<1/4, along a subsequence, such that

    lambda_h^(s') |(u_h^*,W_(lambda_h)q_h-W_hq_h)| -> infinity. (3)

The lifts are the actual strain Brinkman and mass divergence lifts. Therefore (3) meets the complete finite-amplitude nonlinear/BE realization criterion for sufficiently large FIXED extraction order m. It would refute the ORIGINAL smooth pressure clause with its original data scope. This note proves the implication, not hypothesis (2).

## 1. An actual bounded divergence load and decomposition

Define q_h as the pressure-space Riesz representative of the functional

    eta -> (w_h,grad eta)=(-div w_h,eta).

Thus ||q_h||2<=||div w_h||2 is uniformly bounded. Let L_hq_h be the energy-minimum divergence lift and W_hq_h the mass-minimum divergence lift, with this SAME actual moment convention. Uniform MINI inf-sup on the prescribed fixed shape bound gives

    ||L_hq_h||H1<=C||q_h||2.

Set

    k_h=L_hq_h-W_hq_h=P_h L_hq_h,
    s_h=w_h-L_hq_h in Z_h.

Since P_hu_h^*=P_hw_h=w_h-W_hq_h,

    P_hu_h^*=s_h+k_h,       sup_h||s_h||H1<infinity.         (4)

The energy-minimum property gives a_nu(L_hq_h,z)=0 for every z in Z_h. The uniform L2 bound on k_h follows from L2 contraction of P_h and the H1 bound on L_hq_h.

## 2. Exact positive pressure observation for k_h

Let z(t)=exp(-t A_h)k_h, and let pi_k(t) be its ACTUAL homogeneous mixed Stokes pressure:

    (z_t,v)+a_nu(z,v)+(v,grad pi_k)=0,   v in V_h.

Test with L_hq_h. Because z,z_t belong to Z_h and the energy lift is energy-orthogonal to Z_h,

    (pi_k(t),q_h)=-(z_t,L_hq_h)
                  =(A_h exp(-t A_h)k_h,k_h)>=0.           (5)

Consequently its infinite-time Laplace observation is exactly

    G_h(lambda):= integral_0^infinity exp(-lambda t)(pi_k(t),q_h) dt
       =(A_h(lambda+A_h)^(-1)k_h,k_h)
       =sum_i [a_i/(lambda+a_i)] |k_(h,i)|²,              (6)

where a_i are the actual positive kernel eigenvalues. There is no modal cancellation in (6). The divergence load is bounded in the REQUIRED spatial L2 norm.

For the H1-bounded part s_h in (4), the homogeneous kernel solution has

    integral_0^infinity ||z_t||2² dt =a_nu(s_h,s_h)/2,
    integral_0^infinity ||z||H1² dt <=C||s_h||2².

Full mixed inf-sup then bounds its actual pressure pi_s uniformly in L2(0,infinity;L2). This uses the ACTUAL full derivative z_t in L2, not an extension from the solenoidal dual. Therefore

    |integral_0^infinity exp(-lambda t)(pi_s(t),q_h)dt|
          <=C lambda^(-1/2).                              (7)

Equations (5)--(7) show that the actual pressure of initial P_hu_h^* has Laplace observation at least G_h(lambda)-C lambda^(-1/2).

## 3. Physical roughness forces slower-than-quarter decay

By (2) and (4), k_h is unbounded in physical H^s. The embedding

    ||k_h||H^s(D)<=C[||k_h||2+||A_h^(s/2)k_h||2]           (8)

has a constant independent of the mesh. Only the inclusion direction is needed; no uniform stability of an orthogonal projector or converse fractional norm theorem is used. One direct proof is the zero-extension translation/K-functional argument: for any decomposition k=x+y in Z_h,

    ||T_a k-k||2<=2||x||2+C|a|nu^(-1/2)||A_h^(1/2)y||2.

Minimize the squared bound and integrate against |a|^(-2-2s). The finite spectral quadratic K-functional gives a constant times sum a_i^s|k_i|² for 0<s<1. Fractional Poincare and the already bounded L2 term give (8). This is the same direct argument used for the intrinsic quarter-power Sobolev estimate in the nonlinear realization note.

Hence sum_i a_i^s|k_(h,i)|² is unbounded. But the EXACT moment identity is

    integral_0^infinity lambda^(s-1) G_h(lambda) d lambda
        =c_s sum_i a_i^s |k_(h,i)|²,
    c_s=integral_0^infinity t^(s-1)/(1+t)dt in (0,infinity).  (9)

If lambda^(s')G_h(lambda) were uniformly bounded for lambda>=1 and all h, (9) would be uniformly bounded: the part below one uses G_h<=||k_h||2², and the part above one integrates lambda^(s-1-s'). This contradicts (8)--(9). Thus one can select lambda_h -> infinity with

    lambda_h^(s') G_h(lambda_h) -> infinity.              (10)

Bounded lambda cannot produce this divergence since ||k_h||2 is uniformly bounded.

## 4. Actual source crossentry and original-scope realization

By (7), since s'<1/4<1/2, the positive term (10) dominates the s_h pressure. Normalize q_h to norm one whenever needed; its norms are uniformly bounded above, and the selected G_h is nonzero. The actual mixed Laplace identity identifies this pressure observation, up to the fixed sign convention, with

    (u_h^*,W_lambda q_h-W_hq_h).

This identity uses the smooth source u_h^* and its actual projected initial value; no Kq is substituted as admissible initial data. Equivalently the pressure is phi_lambda-phi_0, where both normalized resolvent and mass problems have full source u_h^*. This proves (3).

Choose one fixed integer m with s'<m/[4(m+1)]. Then (3) implies the strict-power hypothesis of the completed nonlinear realization theorem. Uniform H² source bounds allow its Section 6 varying-source form. It supplies exact stationary smooth NS data, actual finite-T pressures, and an actual BE root with arbitrarily fine permitted time steps. Thus the only additional hypothesis in this bridge is the MASS roughness (2) for sources satisfying (1).

## Realizing (1) with fixed smooth coarse sources

Use the two unchanged coarse triangles K_-,K_+ of the root-source normalization note. The six compact curl actuators there give an invertible pairing matrix on the six-dimensional local velocity coefficient space (a,c_-,c_+): if all pairings vanish, both bubble coefficients vanish and the two nonparallel coarse curl equations force a=0. Thus they realize ANY full velocity mass load supported on this space.

In particular prescribe w_h=w_j to be one of the FOUR fixed coarse cell bubbles, zero on every other cell and with zero nodal values. Choose a fixed linear combination u_j of the six smooth actuators satisfying

    (u_j,v_h)=(w_j,v_h) for EVERY global v_h.

The equality reduces to those six coarse coefficients, because both sides vanish outside the two unchanged triangles. Its fixed 6x6 matrix is invertible as just proved. Therefore R_hu_j=w_j EXACTLY for every refinement depth. The four u_j are fixed smooth solenoidal sources with uniformly bounded H² norms; the four w_j have uniformly bounded H1 norms. Their divergence loads are fixed coarse L² functions before pressure projection. This is an actual admissible source family with property (1).

What remains is to prove (2) for at least one of THESE sources (or a uniformly bounded combination). Arbitrary sources whose full R_h projection is itself rough do not meet this bridge, and pressure-free tangential examples do not contradict it.
