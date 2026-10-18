# Exact two-driver Schur embedding and the remaining ring-to-recurrence target

Research integration specification, 2026-10-18. The finite Schur identities below are exact. Reduction of the ACTUAL recursive incoming data to these two drivers is a separate uniform-ring estimate, not asserted here. No normal flux, pressure gauge, self-response or inherited reaction is discarded.

## 1. Macro background and neutral incident layers

Use local tangent/normal coordinates (t,n) with the child container C_1 based on y=0. An affine Darcy background is

    W_bg=c,       p_bg=gamma-c dot X.                       (1)

Its boundary velocity is c; its scalar pressure slope along the base is -c_t. Its normal weak-moment reactions are those of the constant mean c_n, and remain in the parent assembly. Constant gamma is a gauge, not an additional physical driver.

On the actual uniform halfplane stencil, the independently derived constant-along-base short layers supply two incident velocities indexed by eta=(eta_t,eta_n):

    tangential: U_j=eta_t r_t^j,   r_t+r_t^(-1)=-25,
    normal:     U_j=eta_n r_n^j,   r_n+r_n^(-1)=-862/109,

with the stable roots of modulus below one. The tangential pressure is zero. The normal pressure has amplitude proportional to h eta_n and can be gauged to have value zero on the base. Both layers have EXACT zero weak pressure moments on the uniform base, as computed from the full MINI boundary rows. The normal layer is NOT pressure free. Denote the full linear incident field, including bubbles and its pressure, by U_inc eta. Its base velocity is eta and its base pressure is zero after that gauge.

These fields have infinite mass along an infinite base, so the finite construction below uses their exact traces on a large FINITE outer boundary. An infinite-ring limit, if desired, must be proved through finite responses or finite-energy differences; no global L2 norm of U_inc is assumed.

## 2. One exact finite coupled problem

Choose a finite half-ring Omega_R surrounding C_1 in the uniform halfplane, together with an ACTUAL finite conforming transition from its uniform outer stencil to the child's seven-node boundary. The long child boundary edges remain unrefined. All transition variables are part of Omega_R. The physical base outside C_1 carries the incident layer's exact velocity and pressure traces. The finite far boundary also carries its exact incident traces. These prescribed values are linear in eta. Subtract the same base pressure constant from every prescribed trace when gauging the normal layer.

On the child boundary Gamma retain all fourteen velocities and seven pressures. Gauge p(o)=0, giving twenty coefficients s. Let B denote its three base vertices (c_-,o,c_+) and I its remaining four vertices. Prescribe

    g(c_-)=g(o)=g(c_+)=eta,
    p(c_-)=p(o)=p(c_+)=0.                                  (2)

Thus six velocity coefficients and two independent pressure coefficients are fixed; the free interface vector has twelve coefficients (eight velocities and four pressures).

Let D be the ACTUAL child mass DtN, at finite depth or the proved limit. Eliminate the ring's interior variables with all prescribed far/base-outside incident traces. It supplies the exact affine interface reaction

    J_R s - F_R eta,                                       (3)

where J_R is the symmetric mixed exterior Schur matrix and F_R is its exact incident-driver matrix. Include every pressure reaction. The child root does not lie on the exterior ring; its exterior rows and columns are zero when (3) is embedded into the twenty-state coordinates. The base corners are shared and retained.

Let B_0:R²->R20 embed eta into just the six fixed base velocity coefficients, with all pressure coefficients and all free coefficients zero. Let I_0:R12->R20 inject the free interface coefficients. Set

    H_R(D)=D+J_R,
    H_II=I_0^T H_R(D) I_0.

Actual interface equilibrium on the FREE coefficients is

    H_II y=[I_0^T F_R-I_0^T H_R(D)B_0]eta.                 (4)

This block is invertible for an actual finite child, and also for the proved passive limit child. Indeed a homogeneous state with all prescribed exterior/base data zero glues into a zero-boundary homogeneous mass mixed solution. Test by its velocity and pressure; mass is zero, then cell bubble tests force the pressure gradient to vanish. Gauging on the base gives zero pressure. This is the same actual gluing argument used for the limiting finite interface block.

Therefore define the EXACT embedding

    E_R(D)=B_0+I_0 H_II^(-1)
                    [I_0^T F_R-I_0^T H_R(D)B_0].          (5)

It has twenty rows and TWO columns. It retains the entire child self-response through D and the entire exterior feedback through J_R. No pressure-only block is assumed small. The child boundary response to these incident drivers is exactly s=E_R(D)eta.

The constrained base reactions are outputs, not equations set to zero:

    r_B = B_full^T[H_R(D)E_R(D)-F_R]eta,                   (6)

where B_full injects ALL eight fixed base coefficient directions. These include the pressure-hat loads that the parent fan must balance. Retaining them is essential; prescribing base pressure in (2) does NOT impose zero base pressure reaction.

## 3. Exact affine background addition and driver projection

Let A(c) be the twenty-state trace of W=c, p=-c dot(X-o), and retain gamma separately before gauge fixing. The exact full response is

    s=A(c)+E_R(D)eta.                                     (7)

Its macro boundary reactions are the EXACT affine-background reactions plus (6). In particular its normal-flux moment is not erased.

Given the incoming macro vector c and a state of the form (7), the driver projection is simply

    Pi(s,c)=(g(c_-)+g(o)+g(c_+))/3-c.                      (8)

Because the base velocity columns in (5) are fixed, Pi(E_R(D)eta,0)=eta EXACTLY. A fixed choice of one root velocity instead of the average also has this property. Average or root selection for perturbed data must keep the actual endpoint velocity errors.

Tangentially c_t is the negative INCOMING affine base pressure slope, so eta_t=g_base,t+p_in,t. Normally c_n must come from the incoming regular affine/weak-flux component of the EXTERIOR field. It is not determined by the base pressure trace, and it is NOT generally the mean child velocity or the parent-fan normal pressure gradient. A normal affine pressure field, its weak flux, and the normal short layer are distinct channels. The uniform-ring decomposition must identify the first before using (8).

## 4. The actual integration target

At an attachment of a parent response, subtract the child's actual self-response before extracting the incident data. The needed uniform-ring theorem should produce a linear incoming macro extractor c_c and layer-driver extractor eta_c, with a retained remainder r_c, such that the child's actual trace satisfies

    s_c=A(c_c)+E_R(D_child)eta_c+r_c.                      (9)

The incoming pressure base kink and unequal base velocities are part of r_c, not absorbed into an affine background. The previously proved tangential half-slope and full-outer-fan estimates give concrete weighted bounds for those particular parts. Distant outer/base drivers need the actual ring estimate; arbitrary inner trace/self-response cannot be bounded by a sigma factor.

All quantities in (9) are linear functions of the parent's finite retained coefficients once the ring problem and extraction operators are fixed. Write T_c for the ACTUAL finite child recovery map and C_c for the INCOMING macro extractor, both including scale/rotation and the subtraction of outgoing self-response. The two-driver recurrence matrix on the ideal embedded parent state is then

    M_c = Pi_c( T_c E_R(D_parent), C_c E_R(D_parent) ),      (10)

where Pi_c is the linear version of (8). For a child of relative radius rho, pressures in T_c and C_c use rho^(-1) times potential differences and the child's local rotation; velocities use just that rotation. Additive pressure gauge is removed. In coordinates (10) is a 2x2 matrix, but this reduction is valid ONLY after (9) and its remainder bounds are proved.

The new affine macro state is retained in (9) and in its own reaction accounting. It is quotiented in (10) because exact affine backgrounds map to exact affine backgrounds, NOT because their normal moments vanish. If an additional monopole/normal-flux mode survives the actual equilibrium, it must be added to the retained macro ports; it cannot be declared absent merely to keep dimension two. The identity sum ell_child=0 applies to actual weak moments, not to physical normal boundary velocity flux.

## 5. What this does and does not resolve

Equation (5) is an exact finite target for the ring proof and a concrete way to keep self-response while reducing the number of incoming drivers. It removes no actual variable from the coupled solve. Its two columns arise from prescribed affine-plus-two-layer incident data, not from a rank assertion about arbitrary boundary data.

What remains is an actual error estimate (9), a resulting nonextinction/spectral lower bound for the restricted four-source responses, and hence mass H^s divergence for some s<1/4. The checked pressure-observable bridge then supplies the actual pressure output and nonlinear/BE realization. No original pressure clause is settled here.
