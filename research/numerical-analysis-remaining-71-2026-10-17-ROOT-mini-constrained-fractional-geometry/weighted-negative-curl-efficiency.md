# A local weighted negative-curl estimate for the actual adjoint range

Research only, 2026-10-18. No canonical files, controls, gates, or tests changed.

This proves a new weighted reconstruction estimate. It does not prove a negative-norm angle for the constrained projector, or the original instantaneous pressure estimate. Throughout, meshes are matching shape-regular simplicial meshes in dimension two or three, with arbitrary grading. Constants may depend on the fixed shape bound and domain.

Let F be the actual volume-functional, cell-mean-preserving MINI projection, and let P0 denote vector cell averaging. The exact local polynomial description and bounded eligible-component argument are in `../numerical-analysis-remaining-71-2026-10-17-ROOT-mini-reconstruction-pressure-route/volume-fortin-adjoint-gradient-range.md`. In particular that note proves its local estimate (7), also with oscillatory tangential jumps. Only that proved local estimate is used here.

## Result

For every fixed s in [0,1] and every g in range(F*),

    ||h_K^s (I-P0)g||_2
       <= C_s ||curl g||_(H_0^(1+s))* .                 (1)

Here H_0^(1+s) means the closure of compactly supported smooth scalar tests in dimension two, or vector tests in dimension three. The curl norm is the distributional one on those tests. For 0<s<=1 one also has

    ||(I-P0)g||_(H^s)*
       <= C_s ||h_K^s (I-P0)g||_2.                    (2)

The same conclusion holds with the dual of H_0^s on the left. These are local-weight estimates; there is no h_min or comparison with a global grading weight.

## C1 face lifts

For an interior face F shared by K+ and K-, let j be a fixed-degree polynomial face residual, componentwise in dimension three. There is a polynomial patch function E_F j supported on these two cells, in H_0^2(D), with common trace B_F^4 j and common normal derivative zero on F. It and its gradient vanish on all other patch faces. Here B_F is the product of the barycentric coordinates of the face vertices.

An explicit construction verifies that this is a genuine H2 lift. On either cell extend j polynomially, put B equal to the product of the face-vertex barycentric coordinates, and start with T=B^4 j. Write lambda for the coordinate opposite F. Add lambda B^2 H. On F choose

    H|F = -(partial_n T)|F / [(partial_n lambda) B_F^2].

This is polynomial: partial_n T contains B_F^3 as a factor, while partial_n lambda is a nonzero constant. Extend H polynomially into the cell. The correction sets the normal derivative to zero; both terms vanish to second order on every other face. Matching trace and normal derivative imply H2 conformity across F. The construction is linear, fixed degree, and scales uniformly on shape-regular patches. Its face trace has positive weighted mass against j, bounded below by c||j||_F^2. The same construction works when the patch touches the exterior boundary because its other face traces and first derivatives vanish.

For 0<=s<=1, affine scaling and interpolation between the H1 and H2 estimates give

    ||E_F j||H^(1+s) <= C h_F^(-1/2-s)||j||_F,
    ||E_F j||2       <= C h_F^(1/2)||j||_F.             (3)

The full norms have a harmless fixed-domain factor. Extension by zero is legitimate because these patch functions belong to H_0^2.

## Polynomial residual efficiency one fractional order lower

For any broken polynomial vector field g of fixed degree, write r_K=curl g|K and j_F for its oriented interior tangential jump. Then

    E_s(g)^2 = sum_K h_K^(2+2s)||r_K||_K^2
              +sum_F h_F^(1+2s)||j_F||_F^2

satisfies

    E_s(g) <= C_s ||curl g||_(H_0^(1+s))* .             (4)

For the cell residuals test with h_K^(2+2s) b_K^2 r_K, extended by zero. Squaring the bubble makes each test H_0^2. Weighted polynomial mass equivalence bounds the pairing below by the squared cell part of E_s, while its H^(1+s) norm is at most C h_K^(1+s)||r_K||. Cell supports are disjoint. For a sum of zero-extended tests, its global fractional norm is bounded by the sum of squared local norms: in the Slobodeckij seminorm of first derivatives, at most one summand is nonzero at either integration point. Thus the cell part is controlled by the right side of (4).

For faces test with

    z_F = h_F^(1+2s) E_F j_F.

The pairing with j_F bounds h_F^(1+2s)||j_F||_F^2 below. Equation (3) gives

    ||z_F||H^(1+s) <= C h_F^(1/2+s)||j_F||_F,
    ||z_F||2 <= C h_F^(3/2+2s)||j_F||_F.

No other face residual pairs with this test. The cell contribution is bounded by the already controlled cell part of E_s times the face part, since h_K and h_F are comparable on the patch. Face patches have bounded overlap. For the fractional seminorm of the sum, the number of nonzero summands at either integration point is bounded, which proves the same squared-sum bound as above. Pairing the sum with curl g now proves (4). Endpoints s=0 and s=1 use the ordinary H1 and H2 norms directly.

## Application to the actual adjoint range

The already proved local eligible-component estimate controls oscillation by h_K times volume curl and h_F^(1/2) times face jumps. Its patches contain a bounded number of face-connected cells, so their diameters are comparable. Multiplying each patch estimate by its diameter to the power s and summing gives

    ||h_K^s(I-P0)g||2 <= C_s E_s(g),

for g in range(F*). Combining this with (4) proves (1). This step uses the actual bounded eligible-component structure, not an unrestricted broken-polynomial claim.

For (2), put e=(I-P0)g. Its mean is zero separately on each cell. Pairing with a test v and subtracting its cell mean gives

    |(e,v)| <= ||h_K^s e||2
                 [sum_K h_K^(-2s)||v-m_Kv||_K^2]^(1/2)
             <= C_s ||h_K^s e||2 ||v||H^s(D).

The last step is the fractional cell Poincare inequality and the fact that the sum of within-cell Slobodeckij seminorms is bounded by the global seminorm. For s=1 use ordinary cell Poincare. This proves (2).

## Relation to the continuous solenoidal component

Let w be the continuous Leray projection of g. Since g-w is an H1 gradient, curl g=curl w. For z in H_0^(1+s), curl z has zero trace when s=1 and belongs to H_0^1; it is solenoidal. Hence at s=1 specifically,

    ||h_K(I-P0)g||2 <= C ||w||_(V_sigma)* .             (5)

This is a valid negative-norm factorization of the reconstructed oscillation. For intermediate s the appropriate test space is the image curl(H_0^(1+s)); no identification with an arbitrary solenoidal interpolation space is asserted here.

For g=F*delta with delta in Z_h, none of (1)--(5) replaces h_K(I-P0)g by h_K(I-P0)delta. Such a replacement requires a constrained, weighted transfer theorem. Likewise these estimates do not control P0g modulo discrete gradients in negative norm. Those are distinct missing statements, and neither follows by applying the established L2 angle at a different norm.

## A directly generated bubble defect has the required half-power

There is also an exact estimate specific to the actual mass/Brinkman lift pair. It does not apply to arbitrary delta in Z_h.

Use the mean-one bubble beta_K, and write W_lambda=l_lambda+beta_K c_lambda and W_0=l_0+beta_K c_0, where W_0 is the mass-minimum lift. Put gamma=m_K(beta_K^2), and let phi_lambda be the Brinkman multiplier divided by lambda, with sign chosen so the bubble equation has positive gradient on its right. The mass multiplier is phi_0. Define

    D_K=nu |K|^(-1) integral_K
            (|grad beta_K|^2 I+grad beta_K tensor grad beta_K),
    J_lambda,K=(gamma I+lambda^(-1)D_K)^(-1).

Nodal P1 and bubble energy cross terms vanish exactly for the actual symmetric-gradient energy: the nodal gradient is constant and integral_K grad beta_K=0. Bubble mass coupling is |K|m_K(l), by permutation symmetry. Consequently the exact local equation is

    c_lambda=J_lambda,K(grad phi_lambda-m_K(l_lambda)),
    c_0=gamma^(-1)(grad phi_0-m_K(l_0)).

Writing delta quantities as Brinkman minus mass quantities yields

    c_delta=J_lambda,K(grad phi_delta-m_K(l_delta))+r_lambda,K,
    r_lambda,K= -lambda^(-1) J_lambda,K D_K c_0.        (6)

For every closed sector |arg lambda|<=pi-theta, diagonalizing the real symmetric positive D_K gives

    ||lambda^(-1) J_lambda,K D_K||
       <= C_theta min(1,|lambda|^(-1) h_K^(-2)).

Shape regularity is the only ingredient in D_K~h_K^(-2)I. Since h min(1,|lambda|^(-1)h^(-2))<=|lambda|^(-1/2),

    ||h_K r_lambda,K||L2(D)
       <= C_theta |lambda|^(-1/2)||c_0||L2(D)
       <= C_theta |lambda|^(-1/2)||q||2.              (7)

The last inequality follows from local polynomial mass norm equivalence and the actual mass-minimum property, comparing W_0 to the common uniformly H1-bounded divergence lift of q. Thus (7) is uniform over all original grading allowances. It controls the direct local bubble-filter term of the GENERATED difference. It does not control the first coupled term in (6), which contains both the pressure multiplier difference and nodal response. In particular this estimate has not discarded either of those terms or treated the bubble mean constraint as independent of nodal transport.
