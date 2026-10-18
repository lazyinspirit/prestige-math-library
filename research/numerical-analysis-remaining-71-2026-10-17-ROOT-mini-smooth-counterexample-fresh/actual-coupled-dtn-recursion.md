# Actual coupled MINI boundary recursion: exact finite-template diagnostic

Research computation, 2026-10-18. This gives actual matrices on a completely specified conforming Euclidean mesh. It does not compute the branching toothed template, assert a limiting transfer spectrum, or supply a pressure counterexample. Arithmetic in the saved calculation is exact rational arithmetic; no numerical eigenvalue approximation or test suite was used.

## Exact local coupled matrix

Use the mass-projection convention (z,v)+(v,grad phi)=(u,v). On a triangle K let g_i=grad lambda_i. Eliminate its two bubble velocity coefficients from the mixed mass equations. In the order (three vector nodal values, three pressure values), the resulting actual 9 by 9 symmetric matrix is

    D_K = [ C_K                H_K ]
          [ H_K^T        -(7/10)K_K ],
    (C_K)_ij=|K|[4/45 if i=j, 1/180 otherwise] I_2,
    (H_K)_ij=|K|g_j/10,
    (K_K)_ij=|K|g_i dot g_j.                                  (1)

The signs and constants retain the scalar constraint. In particular this is not a velocity-only condensed matrix. We use the elementwise gradient form of the pressure pairing. For tests with nonzero container trace this differs from the negative-divergence convention by its boundary flux matrix; those terms cancel on assembly. Globally on H1_0 velocities the two conventions agree.

## A fully specified valid recursive template

Let the outer triangle have vertices

    A0=(0,0), A1=(1,0), A2=(0,1).

Its one child is the homothetic half-size triangle about the centroid:

    B0=(1/6,1/6), B1=(2/3,1/6), B2=(1/6,2/3).

The six filler triangles, with indices taken cyclically, are

    (Ai,Ai+1,Bi+1), (Ai,Bi+1,Bi),     i=0,1,2.                  (2)

The terminal child is (B0,B1,B2). Replacing that child by the same seven-triangle template recursively yields actual matching affine meshes, with the same three-node boundary on every child. Only finitely many triangle similarity classes occur, so one positive minimum angle bounds every finite depth. The outer filler remains unchanged, hence global h stays bounded below while h_min tends to zero. There is only one child, so this is a diagnostic family, not the branching construction.

Assemble (1) over the six filler triangles into a matrix F, retaining outer state O and child-boundary state I, each of dimension nine. Let D_m be the exact nine-dimensional boundary Schur matrix of a child of depth m in reference coordinates. For a mass-pressure potential, a similarity of scale r transforms its physical matrix by

    D_m -> S_r^T D_m S_r,   S_r=diag(r I_velocity,I_pressure).  (3)

Equivalently the reference pressure potential is the physical potential divided by r; velocities retain their units. Thus, with r=1/2,

    A_m=F+E_I^T S_r^T D_m S_r E_I,
    D_(m+1)=(A_m)_OO-(A_m)_OI[(A_m)_II]^(-1)(A_m)_IO.          (4)

The actual child recovery at that depth is

    x_I=-[(A_m)_II]^(-1)(A_m)_IO x_O                          (5)

plus the usual interior-source term when present. Interior mixed blocks are invertible: the velocity mass block is positive definite, and an interior pressure with zero retained-boundary trace whose gradient pairs to zero against every cell bubble must be constant on each cell, hence zero. Standard finite-dimensional saddle elimination then applies.

Pressure gauge is quotiented by subtracting the first pressure vertex value. The scaled child state records its two remaining pressure differences divided by r. Equations (4)--(5) give a depth-dependent sequence of recovery matrices. The terminal-child recovery cannot be raised to a power unless a separate fixed-point/invariant-transfer argument is proved.

## Exact computed artifacts

`exact_triangle_dtn.py` assembles the actual seven-triangle mixed matrix, eliminates its nine inner variables, and saves the exact rational DtN and recovery matrices to `exact-triangle-dtn-result.json`. The gauge-quotiented, pressure-rescaled one-level recovery T has dimension eight. The exact calculation gives

    det[T+(5/31)I]
       =1765422192916057/305376520374273077172 !=0.             (6)

This shows that the ideal -5/31 factor is not a universal one-level coupled transfer eigenvalue. It does not rule out such an eigenvalue for a different template or a limiting recursive DtN.

`exact_recursive_triangle_dtn.py` implements (4) afresh at depths one, two and three and saves `exact-recursive-triangle-dtn-result.json`. It also realizes an actual fixed smooth-solenoidal source in the first immutable filler triangle: choose integral psi=0, u=J grad psi, and bubble moment (u,b_K)=(1,0). All raw affine moments vanish. The source's exact condensed right-hand side on that cell is

    nodal velocity load_i=-(14/27)(1,0),
    pressure load_i=-(14/9)partial_x lambda_i.                  (7)

All bubble-induced pressure forcing is retained. At each depth, outer velocity is zero; two outer pressure differences are solved with the third gauged to zero. Interior recovery then uses the actual current child DtN and continues through the shorter-depth matrices in the correct order. The saved deepest states therefore describe actual constrained mass projections of one fixed smooth divergence-free source, not a formal power of a terminal transfer.

The saved multipliers are mass-Schur potentials, not evolutionary Stokes pressures. No claim of unboundedness follows from these three finite exact calculations.

## Parameter-dependent Stokes version and the missing observation criterion

For the actual Stokes resolvent, assemble the full local blocks

    [lambda M_K+nu E_K      B_K^T]
    [B_K                         0],                          (8)

where E_K is the exact canonical symmetric-gradient stiffness, not an altered scalar viscosity form. Its entries and bubble elimination are finite polynomial simplex integrals. With local size h, set eta=lambda h^2/nu and scaled physical pressure pi=h p/nu. In dimension two the common energy scale is nu; a child of ratio r has parameter eta r^2 and pressure trace pi_child=r pi_parent. Hence the child contribution is

    R_r^T D_m(eta r^2) R_r,
    R_r=diag(I_velocity,r I_pressure),                       (9)

followed by the same actual assembly and Schur elimination as (4). This is a parameter-dependent recursive map, not the mass map (3).

Source loads must be the actual smooth-data loads, including their compatible pressure/bubble terms after elimination. Observation can be a fixed smooth mean-zero scalar q_src supported in an unchanged source triangle, with prescribed P1 moments summing to zero. Its L2 projection to Q_h has uniformly bounded L2 norm, and its pressure functional is exactly that fixed moment vector against the pressure coefficients. Thus the source and observation can both be fixed genuine smooth functions, without an h_min-dependent normalization.

A genuine negative result would require an unbounded actual resolvent observation along this map, for example the positive-real-parameter lower bound identified by the owner,

    lambda^(1/4)|(r,W_lambda q-Wq)|/||q||2 ->infinity,

for the actual special smooth initial defect r and the actual lift difference. Such a lower bound would still need the precise finite-horizon and nonlinear passage. Neither (6) nor a static mass transfer factor is that observation. No branching-template computation or limiting-mode claim is made here.
