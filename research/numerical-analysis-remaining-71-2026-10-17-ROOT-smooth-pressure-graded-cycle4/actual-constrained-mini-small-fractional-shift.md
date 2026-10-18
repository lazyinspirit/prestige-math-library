# A small physical fractional shift for the actual constrained MINI projector

## Scope

This research proof combines the newly proved small-Hs full mass-projector theorem with the actual scalar Schur form and uniform pressure-space retractions. It yields some positive mesh-independent physical fractional shift for P_Zh. Combined with the independently constructed common oblique retraction onto Z_h, it supplies an actual positive intrinsic exponent alpha>0 and its full-test dual estimate. It does **not** quantify alpha>1/8, prove the special-data beta required by the asymmetric initialization reduction, or complete the pressure claim.

Inputs read: the fractional helper's complete notes `../N-ROOT-mini-fractional-projection-cycle4/actual-full-mini-physical-fractional-stability.md` and `actual-mini-common-retraction-and-stokes-fractional-norm.md`; the owner's actual scalar mass-Schur note; and the source/analytic statements listed in this directory's near-2 note. The exact negative-order Bogovskii input for the common retraction is independently verified in `negative-bogovskii-source-verification.md`.

The following are explicit standard analytic inputs, requiring locally authored suppliers for a canonical treatment: interpolation of restriction Sobolev spaces H^r(D) on a Lipschitz domain; interpolation of retractions and duality; differentiation H^(1-t)(D)->(H^t(D))* for |t|<1/2, with the usual equivalent restriction/supported negative-order norms. The finite-dimensional quantitative openness argument itself is proved in section 3 of `actual-mini-leray-lp-near-two.md` and is reused here. No new mesh or domain hypothesis is inserted.

## 1. A pressure retraction at H1 plus and minus a small shift

Let J_h be one fixed volume-dual Scott–Zhang projection onto the full continuous P1 scalar space. It reproduces all affine functions, is locally L2 stable, and is H1 stable. Subtract its mean to obtain J_h^0 onto Q_h. Mean adjustment is bounded in every space below.

We record why J_h is also uniformly H^(1+t) stable for every fixed 0<t<1/2. Let E_0 be the cellwise unweighted mean operator on vector fields. The elementary cell-pair argument gives

    ||E_0 F||H^t <= C_t ||F||H^t,    0<t<1/2.               (1)

Here are details of the only geometric point in (1). On a matching shape-regular mesh there is a fixed small c>0 such that cells K,J with dist(K,J)<c max(h_K,h_J) lie in bounded neighboring stars and have comparable diameters. This follows from the uniformly thick stars covering the closed simplices; c and the star bound may depend on the shape bound. For these near pairs, Jensen and the finite cross-cell kernel integral <=C_t h^(d-2t) bound their contribution by the H^t seminorm on the expanded neighboring patch. The cross-cell integral is finite precisely for t<1/2, by integrating dist(x,partial K)^(-2t) over K. For all remaining pairs, the two expanded patches have diameter at most C dist(K,J), so their pointwise distances are at most that same bound. Jensen therefore bounds the constant cell-average difference, multiplied by the integrated output kernel, by a fixed multiple of the original fractional integral over the two patches. Uniform overlap completes the sum. The L2 bound is ordinary Jensen. This proof also works for any positive cell averaging density bounded by C/|K|.

For a piecewise constant vector field w_0 one has

    ||w_0||H^t <= C_t ||h^(-t)w_0||2,    0<t<1/2.           (2)

Indeed bound each cross-cell difference by twice the two squared cell values and use integral_K integral_(R^d\K)|x-y|^(-d-2t) dy dx<=C_t h_K^(d-2t); the within-cell seminorm is zero. The L2 term is absorbed using the fixed domain diameter.

For q in H^(1+t), affine patch approximation gives

    ||grad J_h q-E_0 grad q||L2(K)
       <= C h_K^t |grad q|H^t(omega_K).                     (3)

To see this directly, let a be the mean of grad q on the fixed patch and choose an affine p with gradient a and with q-p of mean zero. Fractional Poincare bounds ||grad(q-p)||2 by C h_K^t |grad q|H^t; ordinary Poincare controls ||q-p||2. Local H1 stability and affine reproduction of J_h then bound grad J_h(q-p), giving (3), also after replacing grad q by its mean on K. Summing uses bounded patch overlap.

Since grad J_h q-E_0 grad q is piecewise constant, (1)–(3) yield

    ||grad J_h q||H^t
       <= ||E_0 grad q||H^t
             +C_t||h^(-t)(grad J_h q-E_0 grad q)||2
       <= C_t||grad q||H^t.

Together with L2 stability this proves H^(1+t) stability. H^(1-t) stability follows by interpolating the fixed J_h between its L2 and H1 endpoint bounds. The same single J_h^0 therefore retracts the ambient mean-zero H^(1-t) and H^(1+t) spaces onto Q_h, with constants uniform in h. Interpolating inclusion and this retraction gives the actual compatible pressure-space scale

    [Q_h in H^(1-t), Q_h in H^(1+t)]_theta
            = Q_h in H^(1+(2theta-1)t),                    (4)

with uniform norm equivalence near theta=1/2. Its dual reversed-order scale has the same property. These are full pressure spaces, with no velocity boundary condition imposed on them.

## 2. Endpoint boundedness of the actual Schur form

The full-projector theorem supplies some t0>0 such that R_h is uniformly H^t bounded for |t|<=t0, after decreasing t0 strictly inside its proved interval and below 1/2. At negative t this follows from L2 self-adjointness and duality; it is the extension consistent with the original finite-dimensional moments.

Set X_h(t)=Q_h with its full H^(1+t)(D) norm and Y_h(t)=X_h(-t)*. At the midpoint only, ordinary mean-zero Poincare identifies the H1 norm with the gradient norm used in coercivity. No fractional Poincare assertion at negative t is needed. The same operator G_h is defined by

    <G_h q_h,r_h>=(R_h grad q_h,R_h grad r_h)_2.

For t=+t0 or -t0, differentiation and Sobolev duality give

    |<G_h q_h,r_h>|
       <= C ||R_h grad q_h||H^t
                   ||R_h grad r_h||H^(-t)
       <= C ||q_h||H^(1+t) ||r_h||H^(1-t).                 (5)

When t is negative the roles of q_h and r_h are reversed. Since all discrete gradients are L2 functions, these pairings agree exactly with the original L2 form. In particular no new Schur operator was substituted. More explicitly, for 0<t<1/2 extend q in H^(1-t)(D) boundedly to H^(1-t)(R^d), differentiate there into H^(-t)(R^d), and test against the bounded zero extension of a function in H^t(D). Below 1/2 one has H^t_0(D)=H^t(D), so the resulting bound is the full physical H^t dual norm and agrees with the interior L2 gradient pairing for the discrete pressures. No boundary trace of that H^t test is assumed.

At t=0 the actual bubble bound gives

    <G_h q_h,q_h> >= kappa_d ||grad q_h||2^2,
    kappa_2=7/10,    kappa_3=33/56.                        (6)

Thus G_h:X_h(0)->Y_h(0) has a uniform inverse.

## 3. A uniform fractional Schur inverse and constrained projection

Apply (4), its dual version, and the finite-dimensional quantitative openness proof to the endpoint operator bounds (5) and midpoint inverse (6). After decreasing the resulting interval choose 0<eta<t0, independent of h, such that

    ||q_h||H^(1+t) <= C ||G_h q_h||Y_h(t),
                       |t|<eta.                          (7)

The number eta may depend on t0, D, the shape bound and the interpolation constants. It is positive; no lower bound eta>1/4 or any other fixed width is claimed.

For f in H^t(D)^d, |t|<eta, let phi_h solve its actual mass Schur equation

    g_h(phi_h,q_h)=(f,R_h grad q_h)_2.

By the same dual estimate used in (5), its right side has Y_h(t) norm <=C||f||H^t. Therefore

    ||phi_h||H^(1+t) <= C||f||H^t.

The exact representation of the original constrained projector gives

    P_Zh f=R_h f-R_h grad phi_h,
    ||P_Zh f||H^t <= C||f||H^t,    |t|<eta.                (8)

For L2 input this is precisely the original orthogonal mass projector; the other exponents are its consistent finite-dimensional extensions. The same proof gives the scalar correction estimate and never asserts an H1_0 bound for P_Zh.

## 4. The actual positive intrinsic exponent and full-test comparison

The separately proved common oblique retraction onto Z_h identifies its intrinsic discrete Stokes scale with the physical H^t norm for 0<t<1/2. Choose any fixed 0<t<min(eta,1/2), put alpha=t/2, and combine that equivalence with (8):

    ||A_h^alpha P_Zh v||2 <= C||v||H^t <= C||v||V,
                       v in H1_0(D)^d.                    (9)

This is the actual interface (F_alpha) at **some alpha>0**. Its adjoint gives the full-test comparison

    ||z_h||V_h* <= C||A_h^(-alpha) z_h||2,   z_h in Z_h.   (10)

Indeed (z_h,v_h)=(A_h^(-alpha)z_h,A_h^alpha P_Zh v_h) for every v_h in the entire V_h. Equations (9)–(10) keep their test space and the original projector exactly.

The initialization reduction needs alpha+beta>1/4. Equation (9) supplies only the small generic test exponent alpha. It does not establish the remaining restricted beta bound on P_Zh(Pi_h u0-u0). The near-2 Lp result in the companion note instead supplies a positive boundary-strip gain for that actual data, which is being investigated by the direct initial-layer helper. No implication from one route to completion of the other is asserted.

Only this research note was written. No canonical item, manifest, metadata, runtime control, hash, test or gate was changed or run.
