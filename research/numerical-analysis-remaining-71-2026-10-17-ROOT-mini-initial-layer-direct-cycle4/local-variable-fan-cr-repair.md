# Local variable-amplitude CR repair on an aligned toothed fan

Research-only, 2026-10-18. This strengthens the fresh counterexample helper's constant-amplitude streamfunction repair to arbitrary bounded vertical amplitudes on the fan triangles, and makes the repair vanish in every protected child container. It supplies an actual local approximation in the mean-kernel W=P0^2 perpendicular to grad Q_h. It does not prove persistence of the constrained-projector nodal cone or a pressure counterexample. No canonical content or controls were changed.

Read the complete verified toothed-fan note, its aligned-template refinement, and the exact smooth-source realizability note. The constant-amplitude construction was communicated by its owner; this note owns the variable-amplitude and child-flattening extension.

## 1. Geometry and target

Use one upward fan of radius R, with axial variable y>0 and transverse variable x. Its central line is x=k y, |k|<=C delta; its angular aperture a is much smaller than delta. Downward copies follow by reflecting the axial variable. The long-side directions have slopes k+O(a). Consecutive main radial directions are separated by comparable a/N, and the alternating endpoint radii are R/2 and R. Subdividing a long side does not change its line slope. The short guard/ramp completion can be taken inside the same aperture; its additional total slope variation is O(a).

Let Omega be this star fan polygon, triangulated radially from its root. Put

    w|K=A_K e_y on each fan triangle K,
    w=0 outside Omega,
    M=max_K |A_K|.

No regularity or small variation of A_K between triangles is assumed. In the proposed nodal cone, A_K is the vertical scalar coefficient of the unnormalized nodal sum S a. If its three nodal coefficients have one root value and two opposite values of magnitudes at most L times the root, with L<1/2, then |A_K| is bounded above and below by fixed positive multiples of the root magnitude. Thus ||w||2² is comparable to a R² M² on the main fan. The construction below also works without that lower bound; only the relative-error conclusion uses it.

## 2. A uniform horizontal-slice estimate for variable amplitudes

Set

    Psi(x,y)=integral_(-infinity)^x w_y(s,y) ds,
    L(y)=integral_R w_y(s,y) ds.

Then

    |Psi|+|L| <= C a y M,
    |L'(y)| <= C a M,                                      (1)

and, for almost every (x,y),

    |partial_y Psi(x,y)| <= C delta M,
    |partial_y Psi(x,y)| <= C a M when (x,y) is outside Omega. (2)

Here are the details needed to avoid a factor N or the variation of the A_K. At a fixed generic height, the intersection of each fan triangle is an interval with affine endpoints. For a complete sequence of such intervals, the derivative of the weighted total width is a sum of A_K times the differences of its two endpoint slopes. Across an internal radial interface the slope is t_j=x_j/y_j. These t_j are ordered, so the sum of their successive absolute differences over an angular subinterval is at most its aperture.

For an outer tooth side between consecutive alternating-radius points, its slope is

    s_j=(y_(j+1)t_(j+1)-y_j t_j)/(y_(j+1)-y_j).

Since |y_(j+1)-y_j|>=cR on an unsubdivided long side and y_j,y_(j+1)<=CR,

    |s_j-t_j|+|s_j-t_(j+1)| <= C |t_(j+1)-t_j| <= C a/N.

The same side slope is used on every subdivision segment. Each fully crossed high-y tooth interval consequently contributes at most C(a/N)M: its internal radial slopes are monotone and its two outside slopes differ from the extreme radial slopes by C a/N. Summing the O(N) intervals gives C a M. Below the inner radius, the same argument applies to the single connected sector interval with total radial slope variation O(a). Guard ramps add O(a). An unfinished interval ending at the fixed observation point x has one endpoint slope zero rather than k+O(a); it contributes at most C(|k|+a)M. This proves (1)--(2) without differentiating A_K or estimating their total variation. Standard one-dimensional slicing, or direct integration of finitely many polygonal intervals, then gives Psi in W1,infinity locally, with partial_x Psi=w_y.

## 3. A local return flow

The actual half-container has room for the wedge

    |x-k y|<c delta y,   0<y<CR,

with a fixed outer margin, by the aligned-template direction separation. Choose a smooth scalar H which is zero to the left of this wedge and one to its right, and put

    H_y(x)=H((x-k y)/(c delta y)),
    Xi(x,y)=Psi(x,y)-L(y)H_y(x).

The wedge contains Omega. Since Psi=0 on its left and Psi=L(y) on its right, Xi vanishes outside the wedge. It vanishes above the fan because then w=0 and L=0. The bound |L(y)|<=Ca y M makes Xi tend to zero at the root and ensures that the apparent 1/y factors in derivatives are harmless. Extend Xi by zero; it is an H1 function supported in the local half-container. An arbitrarily small enlargement within the fixed outer margin gives compact support if needed.

Use J grad Xi=(-partial_y Xi,partial_x Xi), so its vertical component matches w before the return-flow correction. The vertical return-flow error has magnitude at most C(a/delta)M on a wedge of area C delta R². The horizontal error is at most C delta M on Omega and C a M outside it. Consequently

    ||J grad Xi - w||2²
         <= C R² M² [a delta²+a²/delta].                    (3)

Using the opposite curl convention changes only the sign of the CR potential. Formula (3) uses the improved outside-Omega estimate in (2); the coarser bound C(delta³+a²/delta) from the constant-amplitude construction would also suffice after an appropriate aperture choice.

## 4. Flattening every protected child container

Let C_j be all protected reserve child containers attached to this fan, with diameters r_j comparable to rR. Their middle-third placement and separation permit pairwise disjoint balls B_j of radius C r_j containing C_j and collars, once the fixed reserve fraction sigma is chosen sufficiently small. These balls lie inside the parent half-container: their attachment points are a fixed distance from its outer boundary, and r_j is much smaller than the distance to nonincident tooth sides. They may meet the parent fan, which is allowed.

Choose Lipschitz cutoffs chi_j equal to one on C_j, supported in B_j, and with |grad chi_j|<=C/r_j. Take a point x_j in C_j and put c_j=Xi(x_j). Define

    Xi_flat=Xi-sum_j chi_j(Xi-c_j).

On every C_j it is exactly the constant c_j, so its curl is zero there. The balls are disjoint. Since ||grad Xi||infinity<=CM and |Xi-c_j|<=CM r_j on B_j,

    ||grad(Xi_flat-Xi)||2² <= C M² sum_j r_j².              (4)

This deliberately simple flattening may alter the desired jet inside the tiny collars intersecting Omega; their cost is already included in (4). No unproved small normal derivative inside Omega is assumed.

The actual fan count and reserve scale give

    B comparable N²/(b0 a),   r comparable sigma b0 a/N,
    sum_j r_j² <= C sigma² b0 a R².                       (5)

Constants can depend on the fixed container aspect ratios and aligned-template directions. If they depend on delta, choose b0 still smaller after delta and a are fixed. Combining (3)--(5),

    ||J grad Xi_flat-w||2²
        <= C a R² M² [delta²+a/delta+sigma² b0].           (6)

Thus the relative error can be made arbitrarily small by choosing delta, then a/delta, then b0 small, all before N and the recursion depth. This remains compatible with the full-mass amplification mechanism, since N is subsequently chosen arbitrarily large but fixed.

## 5. Exact transfer to actual discrete means

Let I_CR be the global face-average Crouzeix--Raviart interpolant of Xi_flat, extended by zero outside its parent container. Its boundary face averages are zero because Xi_flat is supported away from the parent boundary except for the root point, which has measure zero; equivalently use its H1_0 zero extension. By the divergence theorem and the defining face averages,

    grad_h I_CR Xi_flat|K = m_K(grad Xi_flat).

Hence

    m_h=J grad_h I_CR Xi_flat=P0(J grad Xi_flat)

belongs to W exactly. Since w is already cellconstant and P0 is an L2 contraction,

    ||m_h-w||2 <= ||J grad Xi_flat-w||2.                  (7)

No H1 stability of CR interpolation, inverse inequality, mesh-size comparison, or pressure approximation is involved. On every mesh cell inside a child container, Xi_flat is constant, so m_h=0 there exactly. Multiplying by the mean-one MINI bubbles gives an actual kernel velocity B_h m_h if desired.

Recursive parent repairs therefore have zero field in all descendant containers. Their supports lie in disjoint tree annuli: parent container minus child-container interiors. Errors for different fan repairs have disjoint supports up to measure-zero interfaces. Their squared local L2 bounds can be summed with arbitrary nonnegative weights constant on these tree annuli. This is a local construction, rather than a global approximation which could hide errors on very deep small-energy subtrees.

## Exact scope

For vertical fan amplitudes in a fixed bounded cone, (6)--(7) give an actual local W approximation with arbitrarily small per-fan relative L2 error and no ancestor contamination. This is the requested CR-repair interface for the fan part of S a. The background/filler contribution of S a, the effect of its nonzero source bubble moments, and conversion of this approximation into rowwise persistence of the actual constrained nodal system remain separate. In particular global L2 projection onto W need not contract a tree-weighted norm merely because the constructed approximants have local bounds. No constrained-pressure or original-scope counterexample is asserted.

## 6. Exact local detection for the actual constrained projection

This corollary avoids an unjustified weighted bound for the global P0 projection onto W. Let z_h=P_Zh u for an actual smooth source u supported away from the local fan annulus, and write

    z_h=l_h+beta_K c_K,
    s_K=sum_(vertices i of K)a_i=3m_K(l_h),
    gamma=m_K(beta_K²)=10/7.

For any local repaired mean test w_F in W supported in that annulus, B_hw_F is an actual kernel velocity with the same support. Orthogonality of the actual mass projection therefore gives

    0=(u,B_hw_F)=(z_h,B_hw_F)
      =(m_h(l_h)+gamma c,w_F).

Consequently

    (c,w_F)=-(1/(3gamma))(s,w_F)=-(7/30)(s,w_F).            (8)

This retains the source bubble moments: they vanish here because the TEST SUPPORT is disjoint from the source, rather than because the global source bubble load was set to zero.

Moreover every constant vector b is grad of a globally affine mean-adjusted pressure, so (b,w_F)=0. Thus s in (8) may be replaced by s-3b for any constant b, while c itself is unaffected by adding a constant velocity. This is the correct way to remove a locally constant macroscopic background.

For precision, suppose t_F is a vertical fan field as in sections 1--5, let N_F=||t_F||L2(Omega), and suppose

    ||w_F-t_F||L2(annulus)<=eta N_F,
    ||s-3b-t_F||L2(Omega)<=epsilon N_F,
    ||s-3b||L2(annulus minus Omega)<=L N_F.

Then Cauchy--Schwarz, separating the fan and its complement, gives

    (s,w_F) >= [1-eta-epsilon(1+eta)-L eta] N_F².           (9)

The sign convention of t_F may be reversed; (9) concerns its matching signed pairing. If the bracket is positive, (8) implies

    ||c||L2(annulus) >= (7/30)
       [1-eta-epsilon(1+eta)-L eta]/(1+eta) N_F.            (10)

This is a genuinely LOCAL lower bound on the actual bubble coefficient. It requires no closeness of the global pressure correction in a tree-weighted norm and no assertion that P_W contracts that norm.

On a single cell, the polynomial bubble beta_K has a strictly positive L2 distance from the affine polynomial subspace, by reference-cell finite-dimensional independence. Thus for every l affine and c constant,

    inf_(p affine)||l+beta_K c-p||L2(K)
                         >= c_ref |K|^(1/2)|c|.

The corresponding local fractional seminorm lower bound is also valid for each fixed s in (0,1): fractional Poincare modulo constants on the fixed reference polynomial space, followed by affine scaling, gives

    |l+beta_K c|H^s(K)² >= c_(s,shape) h_K^(-2s)|K||c|².   (11)

Indeed the seminorm is a norm modulo constants on this finite-dimensional space, and the coefficient functional c vanishes on constants and is continuous in that norm. Shape regularity transports the reference bound. This proves that a lower bound for c is meaningful physical oscillation rather than merely a nonzero nodal coefficient.

Every annulus cell has diameter at most C R. Therefore summing (11) over that annulus gives the physical lower bound c R^(-2s)||c||L2(annulus)^2, even if the detected coefficient lies in small filler cells rather than main fan cells. Errors and annuli from different generations are disjoint. Thus (10), if its actual contrast hypotheses are verified at depth n, supplies the corresponding physical fractional lower bound with the fan-radius scaling and no need to locate it at a particular main triangle.

Equations (8)--(11) do not by themselves prove a depth-dependent counterexample. The outstanding condition is the ACTUAL constrained nodal contrast and the outside-fan bound L after subtraction of a constant background. Those cannot be borrowed from the unconstrained full-R nodal solution. This corollary identifies exactly what a block-energy propagation argument would need to prove.
