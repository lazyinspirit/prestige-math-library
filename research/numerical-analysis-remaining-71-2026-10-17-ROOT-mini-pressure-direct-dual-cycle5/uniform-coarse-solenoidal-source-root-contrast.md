# Uniform smooth-solenoidal coarse source normalization of an actual root contrast

Research proof, 2026-10-18. This supplies a genuinely depth-uniform source normalization. It does not prove that the contrast survives down the tree or that it is observed by the actual evolutionary pressure.

## 1. Fixed admissible domain and coarse cells

Fix r>0 and let C=[-4r,4r]x[0,4r] be the recursive half-container, with o=(0,0), c_-=(-4r,0), c_+=(4r,0). Attach the lower triangle with vertices c_-, d=(0,-4r), c_+. Its union with C is a fixed convex pentagon D. Split that lower triangle into the TWO fixed cells

    K_-=(d,c_-,o),     K_+=(d,o,c_+).

The base of C has exactly the three nodes c_-,o,c_+, so these cells conform to every recursive C mesh. The nodes d,c_-,c_+ lie on the physical boundary and their no-slip velocities are zero. Thus on each fixed K the P1 part of ANY global no-slip MINI velocity is exactly lambda_o a, with the SAME root vector a at o. The two vectors grad lambda_o on K_- and K_+ are nonparallel. The complete C triangulation may vary arbitrarily with depth under the previously specified shape bound; nothing below assumes its terminal DtN converges.

Write b_K=27 lambda_1 lambda_2 lambda_3. Let V_h,Q_h be the actual global MINI pair on D, pressure modulo constants. For any smooth solenoidal source u define its mass mixed solution (v,phi) by

    (v,z)+(z,grad phi)=(u,z),           z in V_h,
    (v,grad q)=0,                     q in Q_h.             (1)

Thus v=P_Zh u. The potential phi is the actual mass-Schur potential, with the same positive-gradient convention as the branch calculations. Set t=(1,0), and define the actual incoming root contrast

    L(v,phi)=v(o) dot t + [phi(c_+)-phi(o)]/(4r).           (2)

The second term is the exact pressure slope on the right half of the coarse C base. Formula (2) is gauge invariant. The aligned positive-x fan uses this half-base.

## 2. Six explicit fixed smooth actuators

On each K choose a nonnegative smooth bump omega_K supported in its interior and positive on some open ball. The three scalar polynomials

    f_0=1,      f_1=partial_x b_K,      f_2=partial_y b_K

are linearly independent. On the reference triangle b=27xy(1-x-y), comparison of the quadratic coefficients proves that a linear combination of its two derivatives cannot be a nonzero constant; affine transport preserves independence. Consequently the 3x3 Gram matrix

    G_(ij)=integral_K omega_K f_i f_j

is positive definite: a nonzero polynomial cannot vanish on the open positivity ball. Define

    psi_(K,j)=omega_K sum_i (G^(-1))_(ji) f_i,
    u_(K,j)=(-partial_y psi_(K,j), partial_x psi_(K,j)),
    j=0,1,2,

and extend each by zero to D. These SIX sources are fixed, smooth, compactly supported in the unchanged coarse cells, exactly divergence free, and no-slip. They have fixed finite H² norms independent of the recursive mesh. Their defining moments are

    integral_K psi_(K,j) f_k=delta_jk.                     (3)

No zero-mean condition on psi is imposed here: the constant-curl actuator is essential.

For a MINI velocity w|K=lambda_o a+b_K c_K,

    curl w = gamma_K + (c_K)_2 f_1-(c_K)_1 f_2,
    gamma_K=(partial_x lambda_o)a_2-(partial_y lambda_o)a_1.

Integration by parts, with the displayed rotation convention, gives

    (u_(K,0),w)=-gamma_K,
    (u_(K,1),w)=-(c_K)_2,
    (u_(K,2),w)= (c_K)_1.                                (4)

These are exact identities, not density or qualitative nonannihilation statements.

## 3. Adjoint mixed problem and exact signs

Let F(z)=z(o) dot t and G(q)=[q(c_+)-q(o)]/(4r). The functional G annihilates constants. For each finite mesh solve the actual adjoint mixed system

    (w,z)+(z,grad p)=F(z),             z in V_h,
    (w,grad q)=G(q),                  q in Q_h.             (5)

Finite-dimensional MINI inf-sup gives existence and uniqueness modulo the pressure gauge; no uniform bound for this potentially mesh-dependent G is assumed.

Symmetry of the full mixed form gives the exact reciprocity

    L(v_u,phi_u)=(u,w),                                    (6)

where (v_u,phi_u) solves (1). Indeed test (1) with w and (5)'s first equation with v_u; use (v_u,grad p)=0 and (w,grad phi_u)=G(phi_u). This gives (u,w)=F(v_u)+G(phi_u).

Testing (5) with z=w and q=p gives

    ||w||2²=F(w)-G(p).                                    (7)

The minus sign in (7) and plus sign in (6) are both required.

## 4. Uniform lower bound from the unchanged coarse cells

Let E=max_(K,j)|(u_(K,j),w)|. Equations (4) give |c_K|<=C E and |gamma_K|<=E on both fixed coarse cells. Nonparallel grad lambda_o on K_- and K_+ therefore imply

    |a|<=C E.                                             (8)

Constants in this section depend only on the two fixed cells and r. In particular they do not depend on N, the depth, or the minimum cell.

The velocity functional F has zero value on every cell bubble. Bubble testing (5) on either fixed K therefore gives

    grad p|K=-a/3-(9/14)c_K.                              (9)

Here integral b lambda_o=(1/3)integral b and (integral b²)/(integral b)=9/14. Equations (8)--(9) imply |grad p|<=C E on K_+. Since o-c_+ is its straight edge,

    |F(w)|+|G(p)|<=C E.

By (7),

    ||w||2²<=C E.                                         (10)

There is also a mesh-independent POSITIVE lower bound for this norm. Let z_0 be the global nodal hat of o in direction t, corrected on every incident triangle by its MINI bubble so that EACH cell mean is zero:

    z_0|K=[lambda_o-(20/27)b_K]t

on an incident cell, and zero otherwise. This is a conforming no-slip MINI function, and (z_0,grad q)=0 for every actual q. Its root value is t, so F(z_0)=1. Its reference polynomial mass bound gives

    ||z_0||2<=C |D|^(1/2),

independent of the number, shapes, or refinement depth of root-incident triangles; only their total area is used. Test (5) with z_0:

    (w,z_0)=1,      ||w||2>=1/||z_0||2>=c_D>0.             (11)

Combining (10)--(11) yields E>=c_*>0 uniformly over ALL recursive depths and admissible interior meshes. Finally (6) proves

    max_(K,j) |L(P_Zh u_(K,j),phi_(K,j))| >= c_*.           (12)

This is stronger than nonzero coupling on each finite mesh: it is a genuine uniform lower bound. No compactness or limiting Schur map was used.

For any sequence of depths, choose a maximizing actuator; this uniformly bounded finite family is permitted by Section 6 of the nonlinear realization note. Alternatively some one actuator occurs along an infinite subsequence. In either case all exact smooth stationary data constructed from these sources have uniform original H² data bounds. The previous bubble-only zero-affine-moment actuator cannot replace all six: omitting the constant-curl actuator would not force a in (8) to be small.

## Exact remaining scope

Formula (12) normalizes the INITIAL root quotient against the actual incoming coarse-half pressure slope. It does not control inherited states at deeper generations, exclude a finite-depth cutoff, or prove a pressure-observed crossentry. The sources are admissible original data, but mass contrast propagation and actual strain-pressure output remain separate obligations. No original pressure claim is resolved by (12) alone.

## 5. Actual-strain resolvent version above a fixed root-star threshold

The same source family also normalizes the actual Brinkman root contrast. Replace the velocity inner product in (1) and (5) by

    (v,z)_lambda=(v,z)+lambda^(-1)a_nu(v,z),

using the TRUE symmetric-gradient form. Then (6) remains exact reciprocity and (7) becomes

    ||w||_lambda²=F(w)-G(p).

The actuators still give the exact curl identities (4), hence (8). On either unchanged coarse cell, bubble testing now changes (9) only by

    -lambda^(-1) H_K c_K / integral_K b_K,

because affine/bubble strain cross terms vanish. Here H_K is the fixed actual bubble strain matrix. Thus for lambda r²>=c nu the bound |grad p|<=C E remains uniform.

The same fixed root test satisfies

    (w,z_0)_lambda=1,
    ||w||_lambda>=1/||z_0||_lambda.

All triangles incident to the INITIAL root o are fixed as descendant depth grows: recursive replacements occur strictly inside reserve boxes. Its strain norm is consequently a fixed finite number for each chosen finite template. Above the threshold making lambda^(-1)a_nu(z_0,z_0)<=||z_0||2², the lower energy bound in (11) is uniform in depth and lambda. It follows that (12) holds for the ACTUAL normalized Brinkman responses as well, with the same six sources and a fixed-template parameter threshold. No altered Laplacian or descendant inverse bound is used.

For a source u, this response v_lambda solves (v_lambda,z)+lambda^(-1)a(v_lambda,z)+(z,grad phi_lambda)=(u,z), with zero divergence. If v_0=P_Zh u and phi_0 is its mass potential, the actual homogeneous Stokes evolutionary pressure Laplace transform is phi_lambda-phi_0, not phi_lambda alone. Therefore separate lower bounds for the mass and Brinkman root contrasts do NOT lower-bound their difference or the pressure. This distinction is retained.
