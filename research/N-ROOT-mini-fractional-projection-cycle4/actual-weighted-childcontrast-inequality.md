# One actual weighted child-contrast inequality

2026-10-18. Combines the checked actual slope-reset, hybrid pressure-free row, kink and anisotropic velocity-defect estimates. This is an exact error-controlled branching inequality, not an invariant cone or pressure counterexample.

## Contrasts, weights and the exact scalar recurrence

For each container v choose its oriented incoming-base unit tangent t_v, selecting the base half toward which its aligned fan points. Let p_(v,base) be the ACTUAL affine pressure slope on that half. Define

    q_v=a_v dot t_v+p_(v,base),
    m_v=|F_v| r_v^(-2s),                   0<s<1,

where a_v is its root velocity and F_v its main fan. This contrast is invariant under every affine Darcy background. For child w attached at center i, t_w is the parent straight-side tangent, oriented consistently with t_v. Its selected incoming half slope is exactly the corresponding parent triangle slope p_h dot t_w. Reversing both tangent orientations just changes the corresponding signed contrast; choose consistent near-global orientations.

The checked hybrid parent row gives EXACTLY

    q_w=-q_v/17+e_w,                                      (1)

    e_w= -[(a_v+p_h)dot t_w-q_v]/17
          +(18/17)(p_h-p_bar)dot t_w
          -d_b dot t_w/17-180 R_i/(17T_i) dot t_w.          (2)

All quantities are actual solution coefficients. Parent/selected-half pressure difference, changes of tangent, neighboring velocity defect, and the full hybrid exterior/strain reaction are present in (2). No isolated-fan pressure state has been imposed.

For a fixed level l put Q_l²=sum_(|v|=l) m_v |q_v|² and E_l²=sum_(|w|=l+1)m_w|e_w|². Set

    mu_(s,v)^2=sum_(w child of v) m_w/(17² m_v),
    mu_s=inf_v mu_(s,v).

The reverse triangle inequality in the ACTUAL weighted child coefficient space yields

    Q_(l+1)>=mu_s Q_l-E_l.                                (3)

No assertion that E_l is small relative to Q_l is included.

## The combined actual physical error budget

For attachment i in parent v let T_i be its two parent triangle areas, and let w_i=h_i d_i/|v_i| be their transverse thin scale from the checked equal-half anisotropic lemma. Define the EXACT dimensionless factors

    Lambda_s=sup_(v,i) [m_child(i) r_v^(2s)/T_i],
    Gamma_s=sup_(v,i) [m_child(i) w_i^(2s)/T_i].             (4)

Let epsilon_Q be the actual G1 exterior-star ratio. Under the geometric premises of the checked notes, their estimates combine to

    sum_l E_l²
       <= C_s {Lambda_s[delta²+epsilon_Q+(a/N)²]+Gamma_s}
                          |W|_(H^s(C_root))².              (5)

Here a is the tooth-sector aperture, delta bounds the aligned tilt, and comparable-radius constants are retained in C_s. To verify (5):

* The first term in (2) is bounded by the parent's actual slope reset plus the O(delta) change of tangent applied to a_v+p_h. The slope theorem and reference-polynomial quotient estimate charge their parent-area-weighted squares to C delta² inf_c||W-c||_(A_v)². Multiply by Lambda_s r_v^(-2s), then use the annulus variance identity.
* The half-slope kink term contributes C(a/N)² by exact pressure continuity across the root--center edge. It is charged with the same Lambda_s factor.
* The hybrid reaction term contributes C epsilon_Q via the enlarged current-annulus plus immediate-child-boundary patches B_v. Their multiplicity is at most two, and the selected-center star multiplicity is at most three. Multiply its R_i²/T_i estimate by m_child/T_i<=Lambda_s r_v^(-2s), then use variance on B_v.
* The equal-half anisotropic lemma gives T_i w_i^(-2s)|d_b|²<=C_s |W|Hs(parent pair)². Multiply by Gamma_s. Parent pairs have bounded overlap, and parent annuli are disjoint, so their fractional pair integrals sum with bounded multiplicity.

The same proof applies to actual strain real-parameter rows over a range of levels satisfying BOTH the current-annulus and fixed parent/immediate-child boundary strain thresholds. The finite thresholds depend on the fixed N-template, not total depth. No deep-cell inverse estimate is introduced. Below that range no recurrence estimate is asserted.

## Actual scale factors and what the inequality does not prove

For the equal-scale branching templates, with relative child radius rho,

    B comparable to N²/(b0 a),
    rho comparable to sigma b0 a/N,
    T_i comparable to (a r_v/N)(rho r_v),
    |F_v| comparable to a r_v²,
    w_i comparable to rho a r_v/N.

Therefore

    mu_s² comparable to B rho^(2-2s)/17²,
    Lambda_s comparable to N rho^(1-2s),
    Gamma_s comparable to a rho (a/N)^(2s-1).               (6)

All comparisons are statements with fixed geometric constants; (4) is the exact definition used in (5). In particular

    Lambda_s/mu_s² comparable to 17²/sigma.                (7)

At s=1/4, Gamma_s is comparable to sigma b0 a^(3/2)/sqrt(N), while mu_s² grows like sigma^(3/2) sqrt(b0 a N)/17². Thus the normalized error budget sum(E_l/mu_s)² has relative coefficients of order [delta²+epsilon_Q+(a/N)²]/sigma, plus Gamma_s/mu_s². This records the reserve loss explicitly; an unnormalized small-delta argument that forgets Lambda_s would be false.

Even mu_s>1 and a small constant in (5) do NOT alone force Q_l to grow indefinitely or the Hs norm to diverge with depth. A finite early reset can extinguish an incoming channel at a finite energy cost. Equation (5) gives an absolute error budget in terms of the unknown full Hs norm; it is not a relative invariant-state estimate. The actual coupled solve must prevent such extinction, bound the source-visible root channel against the relevant state norm, or prove a stronger repeated local estimate. Fixed smooth source normalization and evolutionary pressure observation remain separate mandatory obligations.


## Actual flux-preserving minimality: what it adds to this inequality

The owner's checked exact-boundary-moment-lift-and-local-mass-comparison.md supplies the following additional ACTUAL interface. For a source-free container let g be all fourteen boundary velocity coefficients, and let ell be its seven weak-gradient moment coefficients (sum ell=0). The local field W is the mass minimizer with BOTH g and ALL ell preserved. For any constant background b define

    N_b(g,ell)=sum_i w_i|g_i-b|²+|ell-ell_bg(b)|²,

with w_i the actual boundary-node star areas and ell_bg the exact constant-background boundary moment vector. Its flux-preserving competitor proves

    ||W-b||²<=C N_b(g,ell).                               (8)

There is also a reverse estimate with the checked logarithmic trace-lift factor K_log. On each boundary cell reference-polynomial nodal extraction gives |K||g_i-b|²<=C||W-b||K². Summing boundary nodes counts each cell at most three times, hence the first term of N_b is at most C||W-b||². For each of the seven moment coordinates choose the actual discrete boundary-pressure hat extension from the logarithmic construction. Interior moment loads vanish, so

    ell_i-ell_bg,i=(W-b,grad Phi_i),
    ||grad Phi_i||<=C K_log.

Thus

    N_b(g,ell)<=C(1+K_log²)||W-b||².                       (9)

No interior pressure norm is needed. The constants are independent of total depth; the seven-node trace and actual boundary cell list are fixed. Minimizing (8)--(9) over b identifies a positive, depth-uniform norm on the full affine-Darcy primal-state quotient. In particular this is more informative than preserving boundary velocity alone.

However (8)--(9) do NOT bound N_b by r²|q_v|². The quotient state has eighteen dimensions whereas q_v is one scalar functional. The actual boundary moment directions orthogonal to that functional remain present. A finite early reset can spend their energy while preserving all weak moments. This is a missing relative estimate, not a failure of the competitor.

Consequently the present combined recurrence becomes a nonextinction proof only after an additional ACTUAL solution property is established: a preserved quotient-state cone, a quantitative child-port observability inequality strong enough at the actual scale, or a variational comparison bounding reset energy against continuation with the SAME (g,ell). The verified flux-preserving comparison allows such a comparison to be formulated correctly; it does not itself supply that comparison. In particular one must not replace ell by zero or by the affine-background flux when constructing a purported cheaper continuation.
