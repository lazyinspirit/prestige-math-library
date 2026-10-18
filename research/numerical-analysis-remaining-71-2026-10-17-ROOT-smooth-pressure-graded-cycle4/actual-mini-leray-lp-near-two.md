# Actual MINI Leray projection: an Lp-near-2 proof route

## Scope and analytic inputs

This is a research proof of uniform Lp stability for the actual constrained MINI mass projector for some mesh-independent open interval containing p=2. It preserves the original domain and arbitrary matching shape-regular meshes. It does **not** prove a positive physical fractional exponent, a discrete Stokes semigroup estimate, or the instantaneous pressure error claim.

The proof uses the owner's already-proved all-Lp stability of the full MINI mass projector R_h and its actual scalar Schur representation. The remaining functional-analysis inputs are stated explicitly: complex interpolation of W1,p on a bounded Lipschitz domain; the retraction property of complex interpolation; and duality of complex interpolation for reflexive compatible couples. These are established analytic theorems, not additional mesh hypotheses. A canonical version would need corresponding locally proved suppliers. This note proves the finite-dimensional quantitative interpolation-openness step itself, instead of hiding it as an unproved discrete regularity assertion.

Source inspected for that step: Auscher, Bortz, Egert and Saari, *Nonlocal self-improving properties: a functional analytic approach*, Tunisian Journal of Mathematics 1 (2019), 151–183, complete published PDF <https://msp.org/tunis/2019/1-2/tunis-v1-n2-p01-p.pdf>. Read the entire Appendix, including Theorem A.1 and Lemma A.5 with proofs, printed pp.177–181. Saved `auscher2019.pdf` and extracted text. The arXiv v1/v2 versions also downloaded in this directory do not contain this published appendix; no assertion that they do is made.

## 1. Uniform interpolation structure for the pressure spaces

Put p0=4/3, p1=4 and define 1/p(theta)=(1-theta)/p0+theta/p1. Thus p(1/2)=2. Let X_h(p) be the actual zero-mean continuous P1 pressure space Q_h with norm ||grad q_h||Lp. By Poincare, this is uniformly equivalent to its W1,p norm when p ranges over a compact subinterval of (1,infinity).

There is a single Scott–Zhang projector J_h onto the full continuous P1 space which is uniformly bounded W1,p->W1,p at both endpoints. Use the same selected face and its affine dual moment for each vertex, and the same choices at every p. The local proof uses Holder and the scaled trace estimate in place of Cauchy–Schwarz; affine reproduction bounds the gradient after subtracting a patch constant. Finite shape-regular patch overlap gives the global bound. This is the ordinary local Scott–Zhang argument, with no inverse bound involving h_min or h_max/h_min. Since no boundary condition is imposed on pressures, there is no boundary-node deletion issue.

Subtract the mean to obtain

    J_h^0 v=J_h v-|D|^(-1) integral_D J_h v.

On zero-mean W1,p this is a uniformly bounded projector onto Q_h, independent of p. Denote inclusion of Q_h into that ambient space by E_h. Then J_h^0 E_h=I. Complex interpolation of this retraction, together with ambient Sobolev interpolation and the zero-mean projection, gives

    [X_h(p0),X_h(p1)]_theta = X_h(p(theta))                    (1)

with equivalent norms whose constants are uniform in h and theta on a closed neighborhood of 1/2. The equality is as compatible finite-dimensional vector spaces, not merely equality of their dimensions.

For completeness, the norm comparison follows in both directions: interpolate E_h at the endpoints to bound the ambient norm by the interpolation norm; for q_h in Q_h, interpolate J_h^0 and use J_h^0 q_h=q_h to bound the interpolation norm by the ambient norm. This is exactly where a stable retraction is used. Define Y_h(p)=X_h(p')*, the ordinary Banach dual of the conjugate-exponent space. Interpolation duality, with reversed pressure exponents p(theta)', similarly gives

    [Y_h(p0),Y_h(p1)]_theta = Y_h(p(theta)).                   (2)

All spaces may be complexified; real estimates follow by restriction. Uniform norm-equivalence constants in (1)–(2) are retained below rather than assumed to be one.

## 2. The actual Schur operator

Let G_h:X_h(p)->Y_h(p) be the same linear operator at all p, defined by the actual mass Schur form

    <G_h q_h,r_h> = g_h(q_h,r_h)
                  = (R_h grad q_h,R_h grad r_h)_2.

For complex scalars one may use the bilinear extension with ordinary duals; testing with the complex conjugate recovers the positive quadratic form. Equivalently use the usual sesquilinear convention and antiduals throughout.

The all-Lp bound for R_h and Holder give

    ||G_h||_(X_h(p)->Y_h(p)) <= C_(d,p) C_(d,p').              (3)

In particular the two endpoint norms are uniformly bounded. The bubble lower bound proved by the owner gives

    g_h(q_h,q_h) >= kappa_d ||grad q_h||_2^2,
    kappa_2=7/10,   kappa_3=33/56.                            (4)

Hence G_h is an isomorphism X_h(2)->Y_h(2) with inverse norm at most 1/kappa_d in the natural gradient norms. This follows directly in the finite-dimensional Hilbert space from coercivity and equal dimensions; no elliptic regularity of D is needed.

Use (1)–(2) to transport (3)–(4) to the exact interpolation norms. There are uniform numbers M<infinity and k>0 such that the endpoint operator norms are at most M and

    ||G_h q||_(Y interpolation at1/2)
        >= k ||q||_(X interpolation at1/2).                   (5)

The numbers depend on the fixed domain, dimension, shape-regularity bound and endpoint retraction/interpolation constants, but not on any mesh diameter.

## 3. Finite-dimensional quantitative interpolation openness

Here is the needed openness proof. Let T be a linear map between two compatible finite-dimensional couples X=(X0,X1), Y=(Y0,Y1) of the same algebraic dimensions, with endpoint norms <=M and a lower bound k at theta*=1/2. The norms X_theta,Y_theta are the exact complex interpolation norms.

First, if f belongs to the usual strip analytic-function class F(X0,X1), r<=min(theta*,1-theta*)/2 and |theta-theta*|<=r, then

    ||f(theta)||X_theta
       >= (1/2)||f(theta*)||X_theta*
             - |theta-theta*|/(2r) ||f||F.                   (6)

Indeed, for any g in F with g(theta)=f(theta), the removable-singularity quotient H(z)=(f(z)-g(z))/(z-theta) belongs to F and has norm <=r^(-1)(||f||F+||g||F). Evaluate f(theta*)=g(theta*)+(theta*-theta)H(theta*) and use |theta-theta*|<=r. This gives ||f(theta*)||<=2||g||F+|theta-theta*|r^(-1)||f||F; take the infimum over g.

Apply (6) to T f, use the lower bound at theta*, and then apply (6) to f with theta and theta* interchanged. Taking r<=min(theta*,1-theta*)/3 makes both applications valid. For x=f(theta), this gives

    ||T x||Y_theta
       >= k/4 ||x||X_theta
            - |theta-theta*|(k+2M)/(4r) ||f||F.

Choose strip representatives f(theta)=x whose F norms decrease to ||x||X_theta and pass to the limit in the displayed lower bound. Choosing r=1/6 and

    |theta-1/2| <= k/[12(k+2M)]                              (7)

yields ||T x||Y_theta >= (k/8)||x||X_theta. Since the finite-dimensional domain and codomain have equal dimensions, injectivity implies surjectivity. Thus T remains invertible with inverse norm <=8/k throughout the interval (7). This proof is uniform in the dimension of the spaces. It is the portion of the published quantitative Shneiberg argument needed here.

Apply this result to G_h using (5). Transport the resulting estimates back through (1)–(2). There is epsilon>0 independent of h such that

    ||grad q_h||Lp <= C ||G_h q_h||Y_h(p),
             |p-2|<epsilon.                                (8)

No quantitative lower bound on epsilon, beyond strict positivity depending on the fixed constants, is inferred.

## 4. Consequence for the actual constrained mass projector

For f in Lp(D)^d and p in the interval (8), define the actual scalar Schur solution phi_h by

    g_h(phi_h,q_h)=(f,R_h grad q_h)_2,   q_h in Q_h.

The right side is well-defined by Holder, and its Y_h(p) norm is <=C||f||Lp. Therefore (8) gives ||grad phi_h||Lp<=C||f||Lp. The exact mass-Schur identity then gives

    P_Zh f=R_h f-R_h grad phi_h,
    ||P_Zh f||Lp <= C ||f||Lp,     |p-2|<epsilon.             (9)

For f in L2 intersect Lp this is the original L2-orthogonal projector, since the scalar equation is precisely its mass Schur equation. For general Lp, the same finite-dimensional moment formula is the consistent extension; uniqueness of the scalar solution identifies it. Equation (9) is about the actual constrained projector, not a replacement Fortin map or an alternate initialization.

There is also a special smooth-data consequence. If v is solenoidal, no slip and H2, use the already-proved H2 Fortin map Pi_h and put r=Pi_h v-v. Its L2 error is O(h^2)||v||H2 and its H1 error is O(h)||v||H2. In three dimensions, H1->L6 and elementary Lp interpolation therefore give

    ||r||Lp <= C h^(2-theta_p) ||v||H2,
    theta_p=3(1/2-1/p),    2<=p<=6.

The same estimate is valid in two dimensions using H1->L6; the dimension-three exponent is sufficient for both cases. Since Pi_h v belongs to Z_h, (9) and projection reproduction give

    ||P_Zh v-v||Lp <= C h^(2-theta_p) ||v||H2,
                2<=p<min(2+epsilon,6).                      (10)

Indeed P_Zh v-v=r-P_Zh r. The full-mass error satisfies the same estimate because R_h Pi_h v=Pi_h v. For the scalar correction in P_Zh v=R_h v-R_h grad phi_h, its exact right side for solenoidal v is (R_h v-v,grad q_h); applying (8) gives

    ||grad phi_h||Lp <= C h^(2-theta_p) ||v||H2.              (11)

These are higher-integrability approximation estimates, retaining their actual exponent; they are not fractional derivative bounds. They also apply almost everywhere to the original u_t, since u_t has the same spatial assumptions. Neither a derivative trace of phi_h nor pressure-semigroup smoothing follows just from (11).

There is nevertheless a direct and uniform positive boundary-strip consequence. Let D_delta={x in D:dist(x,partial D)<delta}. Bounded Lipschitz geometry gives |D_delta|<=C_D delta for sufficiently small delta>0. Fix any admissible p>2 and put sigma=1/2-1/p>0, so theta_p=3sigma. Holder and (11) give

    ||grad phi_h||L2(D_delta)
       <= |D_delta|^sigma ||grad phi_h||Lp(D)
       <= C delta^sigma h^(2-3sigma) ||v||H2.                (12)

The same strip estimate holds for P_Zh v-v and R_h v-v by (10). In particular the scalar correction has an actual positive boundary-strip power, uniform over every permitted grading and every strip width. This is a data estimate, not a statement about a boundary trace or about the pressure response. The near-2 interval allows sigma to be chosen small, with 2-3sigma>1. This observation was pointed out by the direct-initial-layer helper after reading the higher-integrability estimates.

## 5. What this does not settle

Higher integrability and positive fractional differentiability are distinct. Equation (9) does not imply (F_alpha) or (O_beta) from the companion initialization note. No Stokes semigroup estimate has been deduced from it. The interval may be very small and must not be treated as containing p=3, p=6, p=3/2 or p=6/5.

In particular, the correct energy-only nonlinear residual bounds in three dimensions are ell^(4/3)(L^(6/5)) and ell^1(L^(3/2)); the stronger mixed pair ell^(4/3)(L^(3/2)) does not follow. A tiny interval around p=2 does not supply either required endpoint automatically. The original instantaneous pressure claim remains unresolved.

Only this research proof and source files were added. No canonical content, metadata, manifests, runtime controls, hashes, tests or gates were changed or run.
