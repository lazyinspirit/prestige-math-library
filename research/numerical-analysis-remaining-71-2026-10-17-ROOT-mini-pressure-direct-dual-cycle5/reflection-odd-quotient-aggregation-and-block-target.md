# Reflection-odd quotient aggregation and the rank-one block target

Research-only, 2026-10-18. The averaging and block arguments here are exact conditional implications. The per-child decomposition/remainder bounds are listed explicitly; they are not certified merely by this note.

## 1. Actual quotient space and bounded projection

Use the actual limiting mass DtN and recovered responses on the fixed child template, already obtained by nonnested mass Mosco convergence. Quotient its twenty-state space by the exact affine Darcy family W=c,p=gamma-c dot X. The response energy norm is inf_c ||W-c||_2 on the fixed reference container. Its kernel is exactly the quotiented family, by the checked mass affine-Darcy detection result. Pressure gauges are removed before forming the state space; their weak reactions remain in the actual assembly.

Restrict to the reflection-odd sector U_ref s=-s. Let L_t be root tangential velocity plus average base pressure slope. It vanishes on affine Darcy states, is reflection odd, and satisfies r sqrt(a)|L_t|<=C inf_c||W-c||. The ODD PART E_t^- of the radiation tangent column has L_t(E_t^-)=1 and quotient energy at most C r sqrt(a). Thus P=E_t^- L_t is an exact bounded rank-one projection on this quotient; Q=I-P is bounded. These are the actual projection bounds established in sharp-ideal-driver-energy-normalization.md, not generic coefficient-norm assertions.

All child states below use their own reference scaling: physical velocities are unchanged, pressure differences are divided by child radius, and local vector frames are transported by the actual child embedding. In reference coordinates their response L2 norm equals physical norm divided by the child radius. Reflection covariance requires paired grids and all local frames/gauges to be chosen as in reflection-covariance-of-two-driver-average.md.

## 2. Exact averaging implication

Let R be the parent radius, r=rho R the common child radius, B the number of equally weighted children, and T_c their ACTUAL full state recoveries. Let U=B^(-1)sum_c T_c, after the exact reference coordinate transports. Suppose the actual child fields have been decomposed as

    T_c s = A(c_c)+E eta_c+e_c,                          (1)

where A(c_c) is their incoming affine background and e_c is a source-free actual child response, including all retained base/guard/interface effects. The ideal E is the radiation embedding. A single-diagonal exterior is NOT itself reflection invariant. Pair covariance gives an averaged tangent ideal term in range E_t^- and also a possible odd normal term. For one stencil/type write that term E_n^- N(s), where N(s) is the linear normal-driver functional on one representative of each reflection pair. For finitely many oriented types sum these terms; all bounds below use their combined functional norm. Therefore the ACTUAL quotient identity is

    Q U s=Q [B^(-1)sum_c e_c]+Q E_n^- N(s).              (2)

There is no exact normal cancellation claim. The compatible-free12 exterior Darcy comparison supplies ||E_n^-|| ->0 after fixing N, while the ring/root driver estimates give ||N||<=C_N independent of h. Choose h small enough that the second term's operator norm is at most epsilon_sym. This after-fixed-N choice does not require a rate or an unrestricted full twenty-port exterior limit.

Every e_c in (1) is the RESTORED source-free pair on the child, not an auxiliary loaded solve. In particular, subtracting a pressure lift Phi gives an auxiliary momentum load -grad Phi; its contribution must be recorded as (w_corr,p_corr+Phi). The velocity and its energy are unchanged by that restoration, and the restored pair is source free inside the child. For a neutral velocity lift E_g, record (w_corr+E_g,p_corr), with its full restored velocity norm bounded by the actual trace-response estimate. Compact scattering loads supported on the uniform annulus lie outside the child, so their restricted pairs are already source free there. These restorations are required before applying the child response map, its bubble pressure bound, or physical fractional detection.

The averaged remainder is an actual response because the same limiting template response map is linear. Consequently

    ||Q U s||_reference
       <= C/(B r) sum_c ||W_e,c||_physical+epsilon_sym||s||
       <= C/(r sqrt(B)) [sum_c ||W_e,c||_physical^2]^(1/2)
                          +epsilon_sym||s||_reference. (3)

This controls Q U on ALL reflection-odd states, not only on range P, PROVIDED the complete remainder budget in (1) holds for all those states. It then controls both Q U P and Q U Q without bounding the raw whole transfer matrix.

For the distant incoming ring remainder, localized passive scattering gives

    ||W_e,c|| <= C sigma^2 V_c,
    sum_c V_c^2 <= C ||W_parent-background||^2,           (4)

using actual disjoint rings and the bubble gradient estimate. Thus its operator contribution is

    C sigma^2 R/(r sqrt(B))
       = C sigma R/(ell sqrt(B))
       ~ C sigma/sqrt(b0 a),                            (5)

where r=sigma ell, ell~b0 a R/N, B~N^2/(b0 a). The polynomial N cancels because the local rings are averaged before taking the parent norm. Applying a single-ring bound without this summation does not prove (5).

Additional proved/targeted squared budgets must be added before using (2):

* Full vector unequal base velocities, with the ideal constant matched to the actual child-center value, have center residual exactly zero. Independent corner stars and uniform guards give sum lift-energy^2 <= C eta_base parent-energy^2, eta_base=epsilon_corner+C h/(sigma d_tooth), per the checked full-normal budget. Their contribution to (3) is C sqrt(eta_base/S0), S0=B rho^2~sigma^2 b0 a.
* The entire refined straight-base pressure remainder modulo its OWN affine slope has trace/lift target sum-energy^2 <= C b0(a/N)^2 parent-energy^2. If its actual collar lift is established, its contribution is C sqrt(a)/(N sigma). The affine slope belongs to A(c_c) and the root/tangent inheritance calculation; it is not discarded.
* Any remaining pressure kink, orientation or inherited prescribed data must be included in e_c with its actual energy budget. A three-node kink estimate does not cover arbitrary additional guard breakpoints without the entire-base trace lemma.

Together with the explicitly retained epsilon_sym parity term, these items specify the error e2 in ||Q U||<=e2. They do not assume the still-required actual trace/decomposition steps.

## 3. Asymmetric block lemma

Normalize the odd ideal tangent vector E_t^- to unit quotient energy. In the direct sum range P plus range Q, suppose the ACTUAL reflection-odd U has block form

    U = [ alpha   b ; c   D ],
    |alpha+theta|<=e1, ||b||<=e1,
    ||c||<=e2, ||D||<=e2,       theta=1/17.              (6)

The top row estimate must be the actual all-state tangent-inheritance bound. It is not inferred from the small complementary row. Choose e1,e2 sufficiently small compared with theta, with fixed constants accounting for the bounded nonorthogonal projection norm.

For real lambda near -theta, lambda-D is invertible, and the scalar equation

    lambda=alpha+b(lambda-D)^(-1)c                      (7)

is a contraction on a small interval around alpha: its displacement is at most C e1e2/theta and derivative at most C e1e2/theta^2. Thus it has a unique real solution with |lambda|>=theta/2. The exact left eigenfunctional, with first coordinate one, is

    ell_lambda=(1, b(lambda-D)^(-1)),
    ||ell_lambda-(1,0)||<=C e1/theta.                   (8)

This is the ASYMMETRIC fact needed for source visibility: e2 does not replace e1 in (8). For any initial state s,

    ||U^m s|| >= |lambda|^m |ell_lambda(s)|/||ell_lambda||. (9)

The AVG-functional four-source normalization in average-contrast-four-source-moment-mismatch.md (not the historical right-half lemma) gives an initial tangent signal at least c sqrt(a)/(1+K_log)^2 in this unit-energy selector convention. Their initial state energies are bounded by fixed coarse-source mass bounds. Therefore the sufficient visibility condition is e1=o(sqrt(a)/(1+K_log)^2), rather than e2 satisfying that stronger requirement. All constants must be bound to the actual source norm and projection normalization before use.

## 4. What would finish the mass divergence

For an actual source with ell_lambda(s) nonzero, the mean state at depth m is U^m s. Jensen in the actual response quotient energy and linearity give the sum of child reference energies squared at least B^m times the squared mean energy. The checked source-free mass physical H^s detection, after child scaling, then yields growth when

    B rho^(2-2s) |lambda|^2 > 1                         (10)

for some 0<s<1/4. This must be applied on disjoint depth-m child containers, with their exact affine-background quotient; arbitrary tangential roughness is not substituted for a pressure observable. The restricted four-source pressure-observable bridge supplies that later step.

The remaining proof obligation is to certify the complete actual decomposition (1), both error rows in (6), all stated lift/geometry budgets, and the initial source normalization constants simultaneously for one fixed template. No original claim is settled by this conditional aggregation note.

## Consistent exterior operator

The assembled exterior is E_infty from radiation-consistent-two-driver-embedding.md, not the historical finite far-Dirichlet E_R. Its compatible-free12 Darcy comparison is supplied in research/N-ROOT-mini-fractional-projection-cycle4/compatible-exterior-darcy-mosco-and-symmetry-limit.md. The body above already uses the actual odd tangent column and retains the normal parity defect. No grounded/radiation identification or exact cancellation for a single diagonal grid is used.
