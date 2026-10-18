# Actual child weak moments of the unflattened CR repair

2026-10-18. Exact one-step primal-state interface for the constant-amplitude aligned fan. It permits a legitimate flux-preserving child replacement. It does not identify the actual minimizing child state or prove a right transfer eigenvector.

## 1. Exact boundary moment formula

Use J(x,y)=(-y,x). Let Xi be the continuous H1 streamfunction in the checked local CR repair, and m=J grad_h I_CR Xi. For every continuous P1 pressure q on a child container H, cellwise integration by parts and the defining edge averages give

    (m,grad q)_H
       =sum_(e in boundary H) (average_e Xi)
                               [q(e_end)-q(e_start)],     (1)

where edges have the counterclockwise boundary orientation. The identity holds on any conforming refinement inside H. Indeed Jgrad Xi_h dot grad q=-div(Xi_h Jgrad q); on an oriented boundary edge this equals Xi_h partial_t q after integration. Interior edge contributions cancel: the tangential derivative of q is the SAME on both sides and Xi_h has matching edge averages. Boundary CR averages equal those of Xi.

In particular all interior pressure moments vanish exactly. For the fixed seven boundary nodes, the moment at node i is

    ell_i=average_(previous edge) Xi-average_(next edge) Xi. (2)

Thus sum ell_i=0. This is the full ACTUAL boundary moment vector, not a normal-trace heuristic for a discontinuous cellconstant field.

If Xi_0 is affine with Jgrad Xi_0=b, (1) is exactly ell_bg(b). Consequently

    ||ell-ell_bg(b)||_ell2
          <=C sup_(boundary H)|Xi-Xi_0|.                 (3)

The constant counts only seven edges; their lengths cancel against the derivative of the nodal boundary hat. Short strip edges introduce no inverse factor.

## 2. The constant fan's exterior affine pieces

Take w=A e_y on the ENTIRE parent fan and zero outside it, with upward coordinates as in the checked CR repair. Assume the main long sides join the two common radial levels near R/2 and R, in a fixed small angular aperture a about slope k=O(delta). Choose middle-third child attachments so their entire reserve boxes stay in one exterior component and their heights avoid ALL tooth-vertex heights by a fixed multiple of R. This is possible because those endpoint heights lie near the two separated radial levels; the selected middle thirds lie between them. Reserve width is sufficiently small compared with the gap clearance.

In that height interval the intersection pattern of a horizontal line with the fan is fixed. Every outer intersection endpoint is affine in y. At a point outside the fan, Psi(x,y)=integral_(-infinity)^x w_y(s,y)ds is the sum of COMPLETE interval widths, hence is one affine function of y on that exterior component. Its horizontal derivative is zero and its vertical derivative is O(a A), by the checked ordered-slope estimate. This assertion is for CONSTANT A; arbitrary variable triangle amplitudes require additional interface bookkeeping and are not used here.

The return-flow streamfunction is

    Xi=Psi-L(y)H((x-k y)/(c delta y)),

where L is affine in the same height range, |L|<=C a R|A|, |L'|<=C a|A|, and the fixed smooth H has bounded derivatives. Throughout a reserve box H_j of diameter r_j=rho_j R, including its base trace from the exterior side,

    |grad Xi|<=C(a/delta)|A|,
    |D² Xi|<=C a |A|/(delta² R).                         (4)

This follows by differentiating the displayed smooth expression at y comparable to R. Psi's Hessian is zero there. Although Xi can have a gradient jump across the parent fan edge, its EXTERIOR affine formula extends smoothly to the reserve-box closure and yields (4) on the entire child side.

Let Xi_0,j be its affine Taylor polynomial at the child root, from that exterior formula, and put b_j=Jgrad Xi_0,j. Taylor's formula, (3), and (4) give

    |b_j|<=C(a/delta)|A|,
    ||ell_j-ell_bg(b_j)||_ell2
          <=C a rho_j² R |A|/delta².                    (5)

These are actual weak flux coefficients. There is no flattening of Xi inside the child and no unjustified zero-flux substitution. The residual is second order in child radius, whereas the extracted affine background may be first order.

## 3. Legitimate variational replacement inside every child

Choose any conforming parent MINI nodal field l with the desired interface traces. Define on current-annulus cells

    v=l+beta_K(m_K-m_K(l)),

where beta_K has mean one and m is the CR mean field above. This has EXACT cell mean m_K. On each child, replace the candidate by the ACTUAL mass minimizer with its prescribed nodal boundary trace g_j and the full moment vector ell_j from (1). The checked moment-lift theorem guarantees this feasible set is nonempty. The child minimizer has zero interior pressure loads and exactly ell_j on its boundary.

This replacement preserves global weak moments: for every global continuous P1 pressure test, the difference of its old and new child pairings is zero, including boundary tests, because their complete seven-node moment vectors agree. Velocity continuity is preserved by the shared nodal trace. Therefore these replacements give a legitimate global constrained competitor with the ACTUAL weak flux inherited from the unflattened streamfunction. If Xi has compact outer support, the full global moment functional is zero exactly.

After subtracting b_j, the child's prescribed data are

    g_j-b_j,
    ell_j-ell_bg(b_j),

and the actual flux-preserving comparison controls the second component by (5), without charging the extracted background. For r_j=rho_j R and parent amplitude A, the flux-only residual's squared mass cost is at most C a² rho_j^4 R² A²/delta^4. Relative to a child fan mass scale a rho_j² R² A² it is C a rho_j²/delta^4, which can be small for large N. This is parameter accounting for the flux part only.

What remains is substantial: identify the actual nodal child trace g_j against a fixed right-state profile, compare the minimizing parent state to this competitor with a quantitative energy defect, and derive a true right transfer residue. A trial with the correct trace and flux is admissible; minimality gives an upper energy bound, not equality of the actual child states. No eigenvalue or nonextinction follows from (5) alone.


## 4. Far-return placement: exact background flux, without a residual

The return transition can be placed in a strip strictly to the right of ALL fan and child collars, as in the initial-layer helper's independently checked one-sided repair. Since a<<delta and all reserve widths are much smaller than their separation margin, choose the smooth H to be identically zero on their entire union; its transition remains in the available outer wedge. Then Xi=Psi on every protected reserve box.

For the CONSTANT-amplitude fan of Section 2, Psi is exactly affine on each such box, not merely close to affine. Thus (1) gives

    ell_j=ell_bg(b_j) EXACTLY,
    b_j=Jgrad Psi|H_j,
    |b_j|<=C a |A|.                                      (6)

There is no higher weak-moment residual and no a/delta loss. The background is horizontal in these local coordinates, since Psi is independent of x in the gap. This assertion still requires the full child box to avoid all tooth-vertex height changes, as specified in Section 2; subdivisions of a straight side do not change Psi's affine formula for CONSTANT amplitude.

Subtracting this background from a proposed child's seven velocity trace values changes its mass comparison cost by at most C a² r_j² A², since the sum of its boundary-star weights is at most three times its container area. Relative to a child fan mass scale a r_j² A², this is O(a). This only controls the background correction term. It does not assert that the remaining child trace is a scalar multiple of a fixed prototype, or that the actual parent minimizer equals the trial state.


## 5. Exact correction to arbitrary child moment vectors on the current annulus

For a dual-pressure prototype one may need to replace the flux in (6) by the ACTUAL child response flux, rather than impose zero. This can be done with a controlled annulus bubble lift. Let d_j be the desired change of the seven moment coefficients on child j, with sum_i d_(j,i)=0 for EACH child. Prescribe zero change of outer-container moments. Orient the signs so annulus and child changes cancel on assembly.

On each disjoint fixed-shape rectangular collar 2H_j\H_j, the long-edge Gram estimate followed by collar trace/Poincare gives

    sum_i |q(i)-mean_collar q|²<=C||grad q||collar².

This is uniform under scaling; no pressure mesh interpolation occurs. Hence the actual annulus pressure functional

    R(q)=sum_j sum_i d_(j,i) q(i)

satisfies

    |R(q)|<=C[sum_j||d_j||ell2²]^(1/2)||grad q||annulus.

Each child sum zero removes its collar mean, and disjoint collars justify Cauchy--Schwarz. Solve the finite scalar Neumann equation (grad chi,grad q)=R(q) on the current-annulus pressure mesh modulo constants. The mean-one bubble field v|K=beta_K grad chi|K has zero velocity trace on EVERY annulus boundary and exactly the prescribed complete weak-moment changes, with

    ||v||2²<=C sum_j||d_j||ell2².                         (7)

No outer weak moment is introduced because its coefficients in R are exactly zero. Thus the correction is legitimate for the ACTUAL child fluxes, not a relaxation of them. The constant is independent of child count/N when the stipulated doubled collars have uniform aspect and are disjoint.

This proves admissibility and energy control of the required flux matching. It still does not improve the generic scale of the ACTUAL d_j: the elementary child energy estimate can give sum||d_j||² of order a S0 A², which becomes order one after normalizing by total child fan energy. A true right-state transfer estimate needs additional structure of the actual response or sharper boundary-flux bounds.
