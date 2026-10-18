# Average/odd root contrast: four-source normalization by a coarse moment mismatch

Research proof, 2026-10-18. This repairs the SOURCE INTERFACE needed by the reflection-odd recurrence. It does not reuse the right-half functional from reflection-normalized-coarse-bubble-sources.md. That historical result concerns L_right and does not by itself normalize the odd/average contrast.

## 1. Exact functional and adjoint

Keep the unchanged bottom coarse triangles K_±, each of area 8r^2, and the four coarse bubbles w_j=b_K e_i with their fixed smooth solenoidal mass realizations u_j, R_hu_j=w_j. The desired contrast is

    L_avg(v,phi)=v(o)_t+[phi(c_+)-phi(c_-)]/(8r).

Let its actual mixed mass adjoint be

    (w,z)+(grad p,z)=z(o)_t,
    (w,grad q)=[q(c_+)-q(c_-)]/(8r).                    (1)

The finite problem exists by the actual MINI mass mixed inf-sup, and the limiting response follows from the proved DtN/Mosco convergence. Set e=max_j |(w_j,w)|. Reciprocity gives

    (u_j,w)=L_avg(P_hu_j,phi_j).                        (2)

No assertion about L_right is used. The scalar functional in (1) is odd under reflection; the full contrast is odd as required by the recurrence.

## 2. Consequences of small four coarse bubble moments

On K_± write w=lambda_o a+b_K c_K, with b_K=27 lambda_1 lambda_2 lambda_3. The actual bubble momentum equations have zero right-hand side and imply

    grad p|K=O(e),
    c_K=-(14/27)a+O(e),
    mean_K w=a/10+O(e).                                (3)

The implied constants depend only on the fixed coarse triangles and r. The bottom pressure hat q_d has zero right-hand side in (1); its gradient is (0,-1/(4r)) on both coarse triangles. Thus a_n=O(e). Gauge p(o)=0. Equation (3) makes all three prescribed base pressure values O(e).

On the upper rectangle C, let w_ref be the source-free local mass response with root velocity a_t t, zero velocity at all other boundary nodes, and zero pressure trace on its entire base. Its pressure tests vanish on the base; all other pressure boundary coefficients are free. The actual sharp root-star geometry and cell-mean-neutral root lift give

    ||w_ref||_L2(C)<=C r sqrt(a_ap)|a_t|,                (4)

where a_ap is the fan aperture (distinguished from the vector a). The actual adjoint restriction has root normal trace O(e) and base pressure trace O(e). A neutral normal root lift and the checked seven-node pressure extension therefore give

    ||w-w_ref||_L2(C)<=C K_log e,
    ||w||_L2(C)<=C[r sqrt(a_ap)|a_t|+K_log e].           (5)

Here K_log>=1 is the depth-uniform pressure lift bound. Physical side/top pressure coefficients are free in this local comparison. No raw mesh pressure hat gradient, point pressure value estimate on an arbitrary H1 function, or right-half parity argument is used.

## 3. First exact linear equation: cell-mean-neutral root velocity test

Use the GLOBAL actual MINI field z_0 with nodal part lambda_o t and, on every cell incident to o, bubble correction -(20/27)b_K t. It is continuous, vanishes on the physical domain boundary, has root value t, and has EXACT zero vector mean on every cell. Hence its pressure pairing in the first equation of (1) is zero and

    (w,z_0)=1.                                         (6)

The sharp upper root star gives ||z_0||_L2(C)<=C r sqrt(a_ap). On a bottom coarse cell, (w,b_K)=O(e); therefore

    (w,z_0)_K=(w,lambda_o t)_K+O(e)
       =(4/45)|K| a_t+O(e).                            (7)

The coefficient follows explicitly from integral lambda_o^2=|K|/6, integral b_K lambda_o=3|K|/20, and c_K=-(14/27)a+O(e). Summing the two coarse cells and using (5) above C yields

    1=C_0 a_t+err_1,
    C_0=64r^2/45,
    |err_1|<=C[a_ap r^2|a_t|
                    +(1+r sqrt(a_ap)K_log)e].           (8)

For sufficiently small fixed a_ap this implies

    |a_t|<=C(1+K_log e),
    |a_t-C_0^(-1)|<=C[a_ap+K_log e].                   (9)

All constants here are independent of recursion depth and the fine boundary grids.

## 4. Second exact linear equation: global affine pressure test

Take q(X)=x, with a mean correction if the pressure space is mean-zero. It is an ACTUAL continuous P1 pressure function on every affine mesh. Its right-hand side in (1) is exactly one. Thus

    1=integral_D w_t.                                  (10)

The two bottom coarse means in (3) give

    integral_(K_- union K_+) w_t=M_0 a_t+O(e),
    M_0=8r^2/5.

The upper rectangle contribution is bounded by (5) and its fixed area. Hence

    1=M_0 a_t+err_2,
    |err_2|<=C[r^2 sqrt(a_ap)|a_t|+K_log e].             (11)

But M_0/C_0=9/8 EXACTLY. Substituting (9) into (11) gives

    1/8<=C[sqrt(a_ap)+K_log e].                        (12)

Choose the aperture sufficiently small that the first term is at most 1/16. Then

    max_j |L_avg(P_hu_j,phi_j)|=e>=c/K_log.             (13)

In particular the weaker convenient bound c/(1+K_log)^2 also holds. This is the genuine AVG/ODD four-source normalization. It relies on the actual sharp root-star geometry, which was not needed in the earlier right-half proof.

## 5. Reflection-odd source states and the pressure bridge

The contrast L_avg is odd. Project each source/state onto the reflection-odd sector. Its L_avg value is unchanged, its norm stays bounded, and the full coarse-bubble span is invariant under reflection. At least one of these odd projected source states therefore has the lower bound (13). Roughness of a fixed odd combination of the four coarse sources forces roughness of at least one individual source by the triangle inequality. Their full mass projections remain fixed coarse H1 bubbles/combinations, so the checked pressure-observable coarse-projection bridge applies.

The constants in the six-actuator mass realizations and their H2 bounds involve only the unchanged coarse cells. K_log grows at most like sqrt(1+log(1/epsilon_strip)), and the chosen aperture a_ap=L^-220 tends to zero. Thus (13) is compatible with the asymmetric left-eigenfunctional error bounds; no source residue is inferred merely from a nonzero finite-dimensional coupling.

This result repairs source normalization only. Actual full-row/complement closure, the autonomous spectral channel, and its physical fractional divergence must still be assembled before claiming a counterexample to the original smooth pressure estimate.
