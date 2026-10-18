# Child-scale incoming cutoff and passive mass scattering

Research-only, 2026-10-18. This gives the exact localization step between an incoming FIELD estimate and the passive-child mass estimate. It does not prove that incoming field estimate or the eventual recursive nonextinction. It uses the actual full MINI mass mixed operator, including cell bubbles.

## 1. Precise geometric and boundary interface

Assume the actual coarse transition/child lies inside a half-disc of radius r. Outside it there is a common uniform MINI mesh through radii 2r to 8r and on to the outer drivers. Let the geometric base be flat there. Prescribed pressure data on that base are treated as Dirichlet data; their pressure reactions are outputs. This is the local embedding problem, not a claim that the original global pressure has Dirichlet boundary conditions.

Compare two incoming fields, one actual and one affine-background-plus-exact-short-layers, both satisfying the SAME uniform mixed equations away from their distant drivers. Their difference d=(v,p) is homogeneous on the common annulus. Its actual pressure and velocity traces on the base need not vanish. After subtracting an additive pressure gauge, assume that its reconstructed fields satisfy on the common annulus and a one-element enlargement

    ||v||_2+||grad p||_2+r^(-1)||p||_2 <= e r.            (1)

In addition, the actual boundary traces of d near the child must have actual MINI/pressure lifts of cost at most C e r. This last condition is automatic for zero residual base data, but is a separate interface obligation for an incoming kink or unequal base values. No trace hypothesis is inferred merely from an L2 volume norm.

The desired application of the independently derived incoming field estimate has e=O((r/R)A), where R is the distant-driver scale. The pressure potential error is O(r e), whereas velocity and pressure-gradient errors are O(e). This distinction avoids assigning a squared Taylor gain to velocity.

## 2. Exact compact residual on the uniform annulus

First suppose d has ZERO residual base traces, so all comparison unknowns have homogeneous prescribed boundary values after subtracting the incident data. Choose a nodal cutoff zeta equal to one through radius 2r and zero beyond radius 4r, with local first differences at most C h/r and second differences at most C h^2/r^2. Use the same diagonal cutoff on every velocity nodal coefficient and pressure nodal coefficient; on a cell bubble coefficient use the cutoff value at the cell barycentre. Denote the resulting diagonal coefficient operator by J.

The field (I-J)d is an ACTUAL comparison field outside the coarse transition and is identically zero on a neighbourhood of that transition. Thus it can be extended by zero into the actual child without defining a uniform interpolant on any skinny coarse element. All its nonzero cutoff stencils lie in the common uniform annulus.

Let A be the full symmetric mixed mass matrix, with bilinear form

    a((v,p),(z,q))=(v,z)+(grad p,z)+(v,grad q).

Let F be the difference of the true distant-driver loads, including prescribed far trace elimination. Outside the child, d solves the actual uniform equations with load F. Subtracting (I-J)d from the actual full glued difference leaves an unknown with homogeneous far data and residual

    R = F-A(I-J)d = [A,J]d                             (2)

on the cutoff stencils, and zero elsewhere. Equation (2) is a LOCAL identity: no equation for d inside the coarse transition is required. On stencils wholly inside J=1 the subtracted field is zero; on those outside J=0 the incident equation cancels F. The only remaining stencils lie where the actual and ambient uniform meshes coincide.

The exact residual tested against an actual pair (z,q) is

    R(z,q)=a(Jd,(z,q))-a(d,J(z,q)).                      (3)

Consequently both the weak-moment residual and the velocity residual are retained. There is no inference that their scalar sum is zero or that their reactions vanish.

## 3. Dual norm of the actual commutators

On the fixed uniform reference cell, coefficient multiplication by the smooth cutoff satisfies

    ||J_v w-zeta w||_K <= C(h/r)||w||_K,
    ||grad J_p q-zeta grad q||_K
       <= C[r^(-1)||q||_K+(h/r)||grad q||_K],

with the same bounds on a one-cell patch when the barycentre bubble cutoff and the nodal cutoff differ. These follow directly by subtracting the constant cutoff value on the cell: every remaining coefficient difference is O(h/r), and the finite-dimensional reference-cell mass and gradient norms have fixed equivalence constants. The analogous estimate for p has the same form. Summing the bounded-overlap patches gives the corresponding global estimates.

Separate (3) into velocity tests z and pressure tests q. For z, insert and subtract pointwise multiplication by zeta. The mass commutator is bounded by C||v||_2||z||_2. The gradient-pressure commutator is bounded by

    C[||grad p||_2+r^(-1)||p||_2]||z||_2.

For q, the velocity-pressure commutator is bounded by

    C||v||_2[||grad q||_annulus+r^(-1)||q||_annulus].

The annulus is a fixed-shape half-annulus touching a base interval on which q=0. Its anchored Poincare inequality gives ||q||_annulus<=C r||grad q||_annulus. This boundary condition is essential: without it one must retain the constant/monopole moment port, rather than assume the same estimate.

Thus R=(F_loc,ell_loc), with exact dual bounds

    |F_loc(z)| <= C e r ||z||_2,
    |ell_loc(q)| <= C e r ||grad q||_2.                 (4)

No derivative of the velocity is used, and no inverse estimate across the coarse transition is used.

## 4. Stable scattered response, including nonzero weak moments

Apply the actual mixed mass stability proved in passive-child-mass-remainder-energy.md, section 5, to (4). It yields for the whole glued correction, regardless of the child's depth,

    ||W_corr||_2+||grad p_corr||_2 <= C e r.             (5)

Near the child the subtracted field (I-J)d is zero, so this correction IS the actual difference of the two full self-consistent child responses. In particular the child's outgoing selfresponse has not been omitted or replaced by a small trace assumption.

For residual base traces with the actual lifts required in section 1, subtract those lifts first. Their exact velocity and weak-moment loads are bounded by their L2 and pressure-gradient norms, so they add at most C e r to (4)-(5). The prescribed-base pressure reactions remain free outputs. A mere pointwise pressure estimate does not establish the required velocity trace lift; the full incoming-field estimate must supply it.

If the root star has area at least c a r^2, the reference-cell mass lower bound gives

    |W_corr(o)| <= C e/sqrt(a).

With e<=C(r/R)A this is the desired root-velocity complement bound C(r/R)A/sqrt(a). This is not an arbitrary twenty-port coefficient estimate. The incoming normal macro background must still be identified from the regular incident field, as specified in exact-two-driver-schur-embedding-target.md.

What remains for application is the actual uniform annulus/transition geometry, the incoming velocity-plus-short-layer estimate with its trace lift, and the quantitative recursive two-driver/nonextinction argument. No original instantaneous pressure claim is certified by this note alone.
