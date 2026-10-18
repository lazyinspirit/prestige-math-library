# Fourth-cycle smooth instantaneous pressure research

## Outcome

No complete original-hypothesis instantaneous pressure estimate or original-scope counterexample was obtained. There is a useful stronger spatial approximation reduction: the actual mass-projection initialization error is second order in L2, including on the allowed graded meshes. The same improvement applies to the time-dependent mass-projection defect. This does not require H1 stability of the kernel projector, Stokes regularity of the domain, or duality.

Read CLAUDE.md, README.md and SCHEMA.md fully; the current smooth velocity theorem, pressure escalation, complete pressure-primitive theorem, MINI Fortin theorem, Scott--Zhang interpolant and existing Fortin L2 approximation lemma; and the cycle3 smooth note and REPORT. No primitive proof was changed or differentiated. No new full-text literature theorem was retrieved or used. The updated spatial proof uses the existing Scott--Zhang supplier's affine patch approximation and its stated first-order L2 estimate; it is not an assertion that the missing evolutionary theorem is established in the literature.

## 1. A second-order L2 approximation by the existing MINI Fortin map

The complete schema-format proposed supplier is in `../proposed-items/lem-na-mini-fortin-h2-approximation.md`. It uses exactly the existing face-average Fortin map, requires only inherited Countable Choice, and uses no point values or Sobolev extension construction. This supersedes the first version of this section's alternative nodal construction.

The actual Scott--Zhang supplier proof step 2.2 supplies a patch affine approximant p with

    ||v-p||L2(omega_K) <= C h_K^2 ||D2v||L2(omega_K),
    ||grad(v-p)||L2(omega_K) <= C h_K ||D2v||L2(omega_K).

Apply the supplier's stated first-order L2 interpolation estimate to w=v-p. Affine reproduction gives

    ||v-I_hv||L2(K) = ||w-I_hw||L2(K)
        <= C h_K ||grad(w)||L2(omega_K)
        <= C h_K^2 ||D2v||L2(omega_K).

The same supplier already proves the first-order gradient estimate. The existing Fortin map is

    Pi_h v = I_h v + sum_K b_K c_K,
    c_K = (integral_K b_K)^(-1) integral_K(v-I_h v).

With e_K=v-I_hv, its actual unweighted integral numerator satisfies

    |c_K| <= |K|^(1/2) (integral_K b_K)^(-1) ||e_K||L2(K)
          <= C |K|^(-1/2) ||e_K||L2(K).

Bubble scaling therefore gives

    ||b_K c_K||L2(K) <= C ||e_K||L2(K),
    ||grad(b_K c_K)||L2(K) <= C h_K^(-1)||e_K||L2(K).

Consequently the same Pi_h has local L2 error at most C h_K^2 ||D2v||L2(omega_K), and local gradient error at most C h_K ||D2v||L2(omega_K). Bounded patch overlap gives global errors C h^2 ||D2v||2 and C h ||D2v||2 on every allowed mesh.

For solenoidal H2 no-slip v, Fortin preservation puts Pi_hv in Z_h; L2 best approximation therefore gives

    ||(I-P_Zh)v||2 <= C h^2 ||D2v||2.

In particular the original initialization error is O(h^2) in L2. No H1 stability of P_Zh, domain Stokes regularity, duality or minimum element diameter enters.

## 2. Stronger actual zero-initial-value mass split

Use exactly the original initialization and set

    rho(t)=(I-P)u(t),    xi^n=P u(t_n)-u_h^n.

Then xi^0=0. The fixed finite-dimensional L2 projector is bounded and linear, and u_t is almost everywhere solenoidal, H2 and no slip. Therefore

    rho_t=(I-P)u_t,
    ||rho||Linf(L2) + ||rho_t||Linf(L2) <= C h^2 M.

No differentiated PDE or u_tt is used. Averaging over each time cell gives

    ||D_tau rho_n||V_h* <= C_P C h^2 M,

where the norm tests all of V_h. In particular the exact full-test interface Delta in the escalation satisfies

    Delta <= C_P C T^(3/4) h^2 M
               + (sum_n tau_n ||D_tau xi^n||V_h*^(4/3))^(3/4).

This leaves the same genuinely zero-initial discrete derivative problem, now with a second-order mass defect. The kernel equation for xi still contains a_nu(Pu_n-u_n,z_h), whose V norm is not controlled by L2 best approximation.

One can also compare the energy and existing face-average Fortin interpolants. Both S_hu and Pi_hu lie in Z_h, and their difference is O(h) in V by the existing S_h estimate and section 1. At t=0,

    S_hu-Pu = (S_hu-Pi_hu) + P(Pi_hu-u).

The first term is uniformly O(h) in V. The second is uniformly O(h^2) in L2. This isolates the remaining initialization difficulty more sharply than treating all of S_hu-Pu as an arbitrary O(h) L2 vector. There is no proved V or fractional-discrete-Stokes estimate for the second term here. Applying an inverse estimate with the smallest element diameter would leave an inadmissible grading dependence.

## 3. Why an abstract kernel-energy argument still cannot suffice

The following exact finite-dimensional example checks that uniform mixed inf-sup, a bounded bilinear form, small L2 initial error, and kernel energy control alone cannot give the desired full-test derivative estimate. It is not a MINI counterexample and does not satisfy the original initialization construction.

For L>=1 use H=R2 with Euclidean mass inner product and V=R2 with

    ||v||V^2=L v_1^2+v_2^2,
    a(v,w)=L v_1 w_1+v_2 w_2,
    Q=R,    b(v,q)=q(v_1-v_2).

The bilinear form a has continuity and coercivity constants one. The b continuity and inf-sup constants are both sqrt(1+L^(-1)), between one and sqrt(2). Thus all these constants are uniform. The kernel is span{z}, z=(1,1)/sqrt(2), and its discrete Stokes eigenvalue is lambda=(L+1)/2. Its restricted dual norm is lambda^(-1/2); its full V* norm is sqrt((1+L^(-1))/2), bounded below by 1/sqrt(2).

For the continuous homogeneous kernel evolution y(t)=a_0 exp(-lambda t)z,

    ||y'||L^(4/3)(0,1;V*)
      = |a_0| ||z||V* lambda^(1/4)
          [(1-exp(-(4/3)lambda))/(4/3)]^(3/4).

This is comparable to |a_0|lambda^(1/4), whereas

    sup_t ||y(t)||2 <= |a_0|,
    integral_0^1 ||y(t)||V^2 dt <= |a_0|^2/2.

The backward-Euler version already has the same lower bound on a single first cell tau_1=lambda^(-1). There y^1=a_0 z/2 and D_tau y^1=-lambda a_0 z/2, so

    tau_1^(3/4)||D_tau y^1||V* = (|a_0|/2)lambda^(1/4)||z||V*.

The first cell can be followed by any partition of the remaining fixed interval; all contributions are nonnegative. This proves that even a second-order initial amplitude a_0=h^2 does not, by itself, imply an O(h) full-test estimate if arbitrary discrete eigenvalues are allowed independently of h. One needs additional structure of the actual MINI mass projection and approximation defect, or a different pressure argument. The example does not prove that such bad initial vectors arise from the permitted exact smooth data on permitted meshes.

## Remaining obligation

The original instantaneous pressure clause is still unresolved. The new fully explicit positive input is the h^2 mass-approximation estimate on the original meshes and its time-dependent version. The remaining term is the actual full-test derivative of xi, equivalently an adequate original-hypothesis mixed parabolic pressure estimate. The full L2 time-consistency estimate proved in cycle3 remains available. Its availability and the stronger mass approximation do not address the independent nonlinear-load difficulty in a stronger L2-derivative route.

The proposed H2 Fortin approximation supplier is complete as a separate spatial result, and does not complete the instantaneous clause. No quasiuniformity, alternate initialization, domain Stokes regularity, time-step ratio, mesh/time coupling or additional exact-solution regularity was imposed. Only this research note and the proposed item under the same cycle4 research directory were written. The required explicit-file proof-layout check on the proposed item reported one item, six steps and zero defects. No canonical content, metadata, runtime state or hashes were changed; no tests or gates were run.
