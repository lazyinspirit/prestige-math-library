# Physical coercivity of the actual affine-Darcy quotient

Research proof, 2026-10-18. This concerns the ACTUAL mass projection, with the retained exterior represented by its actual solution inside a source-free child container. It does not presume an isolated-fan transfer or a small exterior impedance. It proves a quotient coercivity/detection result, not quotient-amplitude propagation or a pressure counterexample. No canonical content or controls were changed.

## 1. Actual source-free bubble identity and the correct background

Let C be one actual child container of diameter comparable to R, containing no support of the smooth source u. It may contain arbitrarily many recursive descendants. Let z=P_Zh u and let phi_h be its actual mass-Schur potential, with

    (z,v_h)+(grad phi_h,v_h)=(u,v_h).

Write, using the mean-one bubble beta_K,

    z|K=l_h|K+beta_K c_K,
    gamma=m_K(beta_K²)=10/7,
    p_K=grad phi_h|K.

Testing with beta_K e gives, on every cell of C,

    p_K=-m_K(l_h)-gamma c_K.                            (1)

Define exactly the background selected by the mixed Schur quotient,

    b_C=-|C|^-1 integral_C grad phi_h.

This is NOT the mean of z. Since m_Kz=m_Kl+c,

    mean_C(z)-b_C=-(gamma-1)mean_C(c).                   (2)

Thus the discrepancy between the pressure-selected constant background and the velocity mean is itself controlled by the bubble coefficient. This identity retains the actual exterior and all its affine potential components.

The affine Darcy state z=b, phi=-b dot x+constant has c=0, b_C=b, and zero quotient. Conversely, if the physical fractional seminorm of z on connected C is zero, z is a constant b, c=0, and (1) gives grad phi=-b. Thus the kernel of that seminorm on actual source-free mass solutions is precisely the affine Darcy background.

## 2. Uniform-in-depth quotient coercivity

Fix 0<s<1. There is a constant depending on s, the fixed container shape and the prescribed mesh shape bound, but NOT on its recursion depth or smallest cell, such that

    ||z-b_C||L2(C) + ||grad phi_h+b_C||L2(C)
                      <= C_s R^s |z|H^s(C).             (3)

If the seminorm is infinite this is automatic; for each finite MINI mesh it is finite for s<1 because z is conforming H1. Here |.|H^s is the physical Slobodeckij seminorm, not an intrinsic discrete operator norm.

First, finite-dimensional polynomial independence on the reference simplex, followed by affine scaling, gives

    |l+beta_K c_K|H^s(K)²
                    >= c_s h_K^(-2s)|K||c_K|².          (4)

The coefficient functional c vanishes on constants, while the fractional seminorm is a norm modulo constants on P1 plus the bubble; hence the reference bound is positive. Shape regularity makes its constant uniform. Since every h_K<=diam C<=CR,

    ||c||L2(C) <= C_s R^s |z|H^s(C).                     (5)

Local cell seminorms sum to at most the complete C seminorm, so no minimum cell scale occurs.

The scaled fractional Poincare inequality on the fixed connected Lipschitz container gives

    ||z-mean_C z||L2(C)<=C_s R^s |z|H^s(C).

Together with (2) and (5) this proves the first term in (3). Finally

    grad phi_h+b_C=-(m_Kl_h-b_C)-gamma c_K,
    ||l_h-b_C||2<=||z-b_C||2+sqrt(gamma)||c||2,

and cell averaging is an L2 contraction. These facts prove the second term of (3). The same argument works on a fixed connected annulus template, with its own shape-dependent Poincare constant. For the actual Schur quotient one should use the whole child container and its b_C, as above.

In particular a large pressure-selected quotient velocity or quotient pressure gradient cannot be hidden by adding the exact affine Darcy exterior state. At any one depth, child containers are disjoint, so their squared physical seminorm lower bounds from (3) may be summed without counting a nested region repeatedly.

## 3. Local CR test in the correct quotient

Let w_F be the local CR-repaired mean-kernel test from `local-variable-fan-cr-repair.md`, supported in the parent annulus and vanishing inside all protected child containers. Put s_K=sum of its three nodal velocity vectors=3m_K(l_h). Since w_F is perpendicular to grad Q_h,

    integral w_F=0,
    (grad phi_h,w_F)=0.

The actual source-free mass test B_hw_F yields

    (c,w_F)=-(7/30)(s,w_F)
           =-(7/30)(s-3b_C,w_F).                        (6)

Thus the affine pressure component cancels EXACTLY from this local observation. It is not bounded by an isolated normal-branch impedance, and no pressure boundary row has been deleted.

More generally, on the complete C one has

    P_(W_C)(s-3b_C)=-3gamma P_(W_C) c,                   (7)

where W_C is the cellconstant space on C perpendicular to gradients of ALL continuous P1 pressures on its restricted mesh, and P_(W_C) is its ordinary L2 orthogonal projector. A local W_C test, extended by zero outside C, has a bubble lift in the global Z_h, so the identity follows from actual projection orthogonality. The repaired CR potential has zero outer trace on C and therefore lies in this local test class. Equation (7) concerns the solenoidal mean component; it does not claim a weighted bound for either local or global orthogonal projection.

For an aligned tangential fan contrast t_F supported on the fan, the repaired w_F approximates t_F with arbitrarily small local relative error. Writing e_F=w_F-t_F, (6) gives the exact decomposition

    (s-3b_C,t_F)=-(30/7)(c,w_F)-(s-3b_C,e_F).             (8)

The outside-annulus term in the last pairing must remain. Its norm can be bounded by (3) on the whole container when a physical-seminorm lower bound is the goal; it cannot simply be declared small compared with a proposed branch amplitude. Formula (8) detects a genuine tangential quotient contrast, including its possible exterior compensation.

## 4. What this says about channels

A pure constant velocity b with potential -b dot x is invisible in both normal and tangential directions: (6) is identically zero and the quotient in (3) vanishes. Therefore a raw nodal transfer coefficient, including the isolated -5/31 value, is not a surviving-channel certificate.

The local CR repair is effective for velocity ALONG the aligned long sides. It shows that such a supported tangential contrast cannot be erased by adding only a constant affine Darcy background. An actual exterior contrast or nonaffine pressure/velocity state may still compensate it through the retained last term of (8). The normal component has no analogous small-error CR repair here, and no claim that it survives or disappears is made.

The actual recursive calculation must therefore propagate a nonzero quotient state (velocity and pressure slope after subtraction of b_C), or establish the needed tangential contrast/outside balance in (8). Once such a quotient lower bound is proved, (3) converts it into physical fractional growth with the correct radius scaling. Neither isolated-fan algebra nor affine-background subtraction alone proves that propagation.

## Scope limit for the evolutionary/Brinkman problem

This proof uses the actual MASS bubble identity (1). At finite parameter, that identity acquires the additional local viscous term lambda^-1 H_K c_K. It must not be omitted in (2)--(3), especially on deeply refined cells. No parameter-uniform quotient coercivity or evolutionary pressure lower bound is inferred here.
