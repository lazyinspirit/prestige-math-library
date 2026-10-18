# Actual real-parameter mixed child DtN bound

2026-10-18. Research proof for the actual two-dimensional MINI element and actual strain bilinear form. This is a complete response/residual estimate on a child container. It does not establish a growing branching eigenchannel or the required fixed-smooth-source cross-entry.

## Mesh and pressure-trace input

Let C_r be a fixed rectangular container scaled by r. Its prescribed boundary vertices and boundary edges are unchanged at every recursive depth M. All triangles incident to one of those boundary vertices belong to a fixed finite set of triangles, also unchanged with M. This is true for the toothed templates: recursive replacements lie in strictly interior reserve boxes; the root is on the container boundary, but its incident fan triangles are never replaced. Filler modifications for pressure macro-zones/corner fans are included before this fixed set is taken.

Use the full conforming MINI velocity space V_M and continuous P1 pressure space Q_M on C_r. Let V_0 have zero boundary velocity trace and Q_0 have zero boundary pressure trace. Put

    a(v,w)=2 nu integral epsilon(v):epsilon(w),
    (v,w)_lambda=(v,w)+lambda^(-1)a(v,w),
    ||v||_lambda^2=(v,v)_lambda.

Boundary velocities are their actual continuous affine traces on the prescribed edges. For a pressure boundary trace f, assume an ACTUAL discrete extension E_p f in Q_M, preserved under all subsequent recursive replacements, with

    ||grad E_p f||2 <= K_N osc_boundary(f).             (1)

One may subtract one constant in (1). The explicit macro-zone/corner-fan constructions supply such an extension; a continuous Lipschitz extension followed by nodal interpolation on skinny triangles is not being assumed. Affine f has an exact affine extension with K_N bounded. Arbitrary nodal traces admit the separately constructed polylogarithmic corner lift. This note uses (1) explicitly rather than upgrading it to a bound on every boundary hat without proof.

## An exact divergence-neutral boundary velocity lift

For prescribed boundary nodal vectors g with max|g|<=A, let I_Gamma g be their continuous P1 extension obtained by setting EVERY interior nodal vector to zero. Define, on each triangle,

    E_v g = I_Gamma g - (20/9) b_K mean_K(I_Gamma g),    (2)

where b_K=27 lambda_0 lambda_1 lambda_2 and mean_K b_K=9/20. Equation (2) fixes the boundary trace and has exactly zero vector mean on EVERY cell. Consequently

    b(E_v g,q)=integral E_v g dot grad q=0
                               for every q in Q_M.    (3)

No pressure boundary condition is needed in (3). The local reference-polynomial bounds give

    ||E_v g||2 <= C A r,                               (4)

with C independent of N, the grading and M. Indeed the affine nodal interpolant has magnitude at most A and the bubble correction has magnitude bounded by a universal multiple of A.

Only triangles incident to a prescribed boundary vertex support (2). By the mesh premise these triangles are fixed as M varies. There is therefore a finite constant D_N, depending on that fixed template but NOT on M, such that

    a(E_v g,E_v g) <= nu D_N^2 A^2.                   (5)

For example define D_N by the maximum of the strain-energy quadratic form of the finitely many corrected boundary hats on the unit container, over max nodal magnitude<=1. Scaling from the unit container to C_r leaves two-dimensional strain energy unchanged. This defines and proves finiteness of D_N without a global inverse estimate.

If

    lambda r^2 >= nu D_N^2,                            (6)

then (4)--(5) imply

    ||E_v g||_lambda <= C A r.                         (7)

The only N-dependent threshold in this assertion is explicit in (6); it is not claimed that D_N is universally bounded.

## Full mixed interior response

For boundary velocity trace g and boundary NORMALIZED pressure trace f, solve

    (w,v)_lambda+b(v,p)=0              for all v in V_0,
    b(w,q)=0                          for all q in Q_0,
    w|boundary=g,  p|boundary=f.                       (8)

The normalized pressure is p=chi_lambda/lambda if the original Brinkman equation is lambda(w,v)+a(w,v)+b(v,chi_lambda)=0. At the Darcy limit it is the ordinary mass multiplier. All interior velocity and scalar-pressure equations in (8) are retained.

For every finite mesh, (8) has one solution. To see pressure uniqueness/surjectivity, if q in Q_0 annihilates V_0 under b, testing its element bubbles implies grad q=0 on every cell; continuity and its zero boundary trace give q=0. The finite-dimensional divergence map is therefore onto Q_0*. Positive definiteness of the velocity inner product gives the usual elementary kernel/Riesz saddle solution.

Here is an estimate that does not need a depth-uniform pressure H1 inf-sup constant for the Brinkman operator. Set p_b=E_p f, w_b=E_v g and

    Z_0={z in V_0: b(z,Q_0)=0}.

By (3), the affine constraint space in (8) is w_b+Z_0. On Z_0 the exact equation is

    (w_b+z,v)_lambda=-b(v,p_b).                        (9)

Thus the Riesz theorem and ||v||2<=||v||lambda give

    ||z||lambda <= ||w_b||lambda+||grad p_b||2,
    ||w||lambda <= 2||w_b||lambda+||grad p_b||2.       (10)

In particular, if osc(f)<=A r and (6) holds, then

    ||w||lambda <= C(1+K_N) A r.                      (11)

Writing p=p_b+p_0, the actual interior pressure Schur norm obeys

    sup_(v in V_0) |b(v,p_0)|/||v||lambda
        <= ||w||lambda+||grad p_b||2.                 (12)

No uniform full H1 bound for p is asserted at finite lambda on the deeply refined cells. Such a bound would incorrectly replace the parameter Schur norm by the Darcy one.

## Complete boundary residuals, with their correct norms

The mixed Schur residual of (8) is independent of which discrete extension of a boundary test is used: differences lie in V_0 or Q_0 and vanish by the interior equations.

For a boundary velocity test h with max|h|<=1, use its exact lift E_v h. Equations (3) and (7) give

    R_v(h)=(w,E_v h)_lambda+b(E_v h,p)
          =(w,E_v h)_lambda,
    |R_v(h)| <= C(1+K_N) A r^2.                       (13)

The pressure pairing in (13) vanishes EXACTLY, including its prescribed boundary part. No bound on raw pressure gradients or a pressure interpolation constant enters this row estimate.

For a pressure boundary test k use the ACTUAL extension E_p k. Its residual satisfies

    R_q(k)=b(w,E_p k),
    |R_q(k)| <= ||w||2 ||grad E_p k||2
              <= C(1+K_N) A r ||grad E_p k||2.        (14)

When osc(k)<=1 and the lift constant in (1) applies, this is

    |R_q(k)| <= C K_N(1+K_N) A r.                    (15)

Uniformly Lipschitz coarse combinations have K_N=O(1). The raw endpoint hats next to a short strip edge require their proved larger corner-lift constant; they are not silently assigned the coarse norm. A polylogarithmic K_N yields polylogarithmic (13)--(15).

## What this supplies and what it does not

Equations (11)--(15) are bounds for the TRUE coupled real-parameter child Schur map, for arbitrary depth, prescribed velocity boundary values, and pressure traces with the stated actual discrete lift. They retain the full scalar equilibrium, all bubble blocks, and the actual strain operator. They use neither a quasiuniform mesh nor an H1 estimate for the orthogonal mass projector.

For a fixed template N, the threshold D_N in (6) changes a geometric lambda-front by only a fixed number of levels, independent of total depth M. This observation does not prove any transfer eigenvalue, root-source residue or actual observed cross-entry. In particular the residual upper bounds alone do not force repeated attachment values to remain nonzero: the remaining coupled-cone or spectral calculation must establish that fact and keep the bounded L2 divergence source and smooth solenoidal observation.
