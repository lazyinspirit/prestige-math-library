# Actual MINI H(div) reconstruction: verified properties and pressure-route audit

Research only, 2026-10-18. No canonical, metadata, workflow-control, hash, or test files changed. The original method, arbitrary matching shape-regular graded meshes, symmetric-strain viscosity, original mass initialization, arbitrary positive time partitions, and original pressure target are retained. This route does not close that target and proposes no new supplier.

## Source actually obtained and read

Lederer–Linke–Merdon–Schöberl, *Divergence-free reconstruction operators for pressure-robust Stokes discretizations with continuous pressure finite elements*, arXiv:1609.03701v1, 13 September 2016, https://arxiv.org/pdf/1609.03701. PDF and extracted text are under `sources/`. Read the paper's setup and §§2–5, including the entire local saddle-point proof in §4 and its actual MINI changes in §5. Also read the remaining numerical examples, appendix, and references; none supplies an unmodified unsteady-pressure theorem. Critical locators: §1.3 p.3; Theorem 2 p.5; equation (2.13) and Remark 4 p.6; Theorem 6 and proof pp.6–7; Remark 9 p.8; Theorem 12 pp.10–14; equation (4.19) p.15; equations (5.1), Propositions 16–17 p.16 and proof p.17.

The source defines shape regularity separately from quasiuniformity. Its local reconstruction bounds use shape regularity and patch sizes. Quasiuniformity is assumed in its convenient global h-power Corollary 8 and numerical experiments, not in the local estimates used here. Its viscosity is the full-gradient form, not the present symmetric-strain form. The reconstruction itself depends on divergence and local mass problems only, so its geometric properties transfer; its Stokes error theorem cannot simply be imported as a symmetric-strain or unsteady theorem.

## Exact operator at lowest MINI order

Write C_h = I - R_h here (not the weighted cell-oscillation operator bearing a similar notation in the other research note). For a mesh vertex a, let omega_a be its patch, H_a its diameter, and let the patch RT space have degree d, zero normal trace on the patch boundary. Its divergence space is discontinuous P_d with zero integral. This is precisely §5 with k=1. There is no Koszul multiplier at this order.

Use the nodal bubble splitter B_a on discontinuous P_d: multiply the coefficient at each degree-d Lagrange node x by the barycentric coordinate lambda_a(x), cellwise, and extend by zero off the patch. Thus sum_a B_a = I. Let S be degree-one nodal averaging from discontinuous P_d to continuous P1 (the source's tilde-S). It reproduces continuous P1. For input v_h in the actual zero-boundary MINI space, the patch correction sigma_a is the least-L2-norm RT field satisfying

    (div sigma_a,psi) = (div v_h, B_a(psi-S psi))

for every discontinuous P_d test psi on the patch, interpreted by the same globally extended averaging convention as the source. Then

    C_h v_h = sum_a sigma_a,    R_h v_h = v_h - C_h v_h.

The source's patch normal condition is imposed on boundary patches too; corrections extended by zero therefore have zero global normal trace. No tangential boundary condition is asserted for R_h v_h.

For completeness, the stability mechanism at this particular order is uncomplicated: the right side vanishes on constants, is bounded by C ||div v_h||_{omega_a} ||psi||_{omega_a}, and the RT zero-normal divergence right inverse on a scaled shape-regular vertex patch has norm C H_a. Least-norm minimization gives

    ||sigma_a||_2 <= C H_a ||div v_h||_{omega_a}.       (1)

This is Proposition 16(i), using the actual divergence constraints, not a generic reconstruction assumption. For each coordinate x_j, use psi=x_j; S x_j=x_j and integration by parts with zero patch normal trace gives

    (sigma_a,e_j) = -(div sigma_a,x_j) = 0.            (2)

Thus patchwise constant moments vanish, exactly Proposition 16(iii). The divergence identity follows by summing the patch constraints:

    (div R_h v_h,psi) = (div v_h,S psi).              (3)

Since div R_h v_h belongs to discontinuous P_d, (3) proves exact divergence zero for every v_h in Z_h. In particular R_h Z_h is contained in the continuously solenoidal normal-zero L2 space. This is Proposition 17(iii), with the actual operator and actual MINI degrees.

Shape regularity, conformity, bounded patch overlap, and comparability of cells in a vertex patch give from (1)

    ||h^{-1} C_h v_h||_2 <= C ||div v_h||_2,
    ||C_h v_h||_2 <= C ||h div v_h||_2,
    ||R_h v_h||_2 + ||C_h v_h||_2 <= C ||v_h||_2.     (4)

The last bound uses only the cell inverse inequality. Constants do not involve h_min. The source's general high-order Koszul argument is unnecessary for these lowest-order conclusions.

## Concrete cancellation for the actual special smooth defect

Let r=Pi_h u0-u0 be exactly the original mean-corrected Fortin defect. It has zero mean on each cell and the known local H2 approximation bound. Equations (1)–(2) give the stronger patch-oscillation identity/bound

    |(r,C_h z_h)|
      <= C [sum_a H_a^2 ||r-P_0^{omega_a}r||_2^2]^{1/2}
             ||div z_h||_2
      <= C [sum_K h_K^2 ||r||_{2,K}^2]^{1/2}
             ||z_h||_V
      <= C h_max^3 ||u0||_{H2} ||z_h||_V.             (5)

The middle inequality uses patch comparability and overlap; discarding the patch-constant subtraction only increases the bound. The final inequality is the local O(h_K^2) defect estimate and patch overlap, not a global inverse estimate. Thus reconstruction changes the pairing of this particular defect by an O(h_max^3) functional on the energy space. Independently, for any smooth L2 datum g with H1 regularity, patch Poincare gives

    |(g,C_h v_h)| <= C h_max^2 ||g||_{H1} ||v_h||_V. (6)

These are valid for arbitrary grading. They concern the correction, not the reconstructed principal term.

## Why this does not give the missing pressure observation

Use the exact notation of the weighted-lift research note: W_h is the actual mass-minimum divergence lift, F_h is defined by (F_h q,z)=a(W_h q,z), and E_n is the actual variable-step kernel propagator. The actual homogeneous initialization pressure is

    (p^n,q)=-(r,E_n F_h q).

Set z_h=E_n F_h q and apply the verified reconstruction:

    (p^n,q)=-(r,R_h z_h)-(r,C_h z_h).               (7)

The second summand has (5). The first summand does **not** vanish. Exact divergence freedom of R_h z_h annihilates gradients; the defect r is not a gradient. Nor does cell-mean zero of r annihilate the nonconstant polynomial modes of R_h z_h. The source supplies no estimate for this first term in terms of a sufficiently mild power of t_n. Applying L2 stability (4) only recovers

    |(r,R_h z_h)| <= C h_max^2 ||u0||_{H2} ||z_h||_2,

which is the pre-existing unweighted initial-defect estimate. Applying cell Poincare would require weighted broken derivative bounds on the actual reconstructed propagator/lift; the reconstruction theorem has no such resolvent estimate.

Likewise (5) alone is not a usable pressure estimate: it still requires a bound on ||E_n F_h||_{Q_h->V}. The local reconstruction does not bound the H1 norm of the actual mass-minimum lift W_h and does not remove its mass floor. Replacing W_h by an arbitrary stable divergence lift changes F_h and loses the exact pressure identity.

A common invalid shortcut is to test the original mixed equation with R_h v_h. Its test space is V_h; the reconstructed field is in V_h+RT_d, generally only H(div), and is not an admissible original test. Subtracting it formally introduces a full discrete residual on the correction, including the actual mass derivative. Smooth exact derivative terms admit (6); the actual initial-layer derivative is not covered. Modifying all loads/mass pairings would change the algorithm, which is outside scope.

The source's pressure proof makes the essential cancellation

    (grad p,R_h v_h) = -(p,div R_h v_h)

inside the explicitly modified right hand side (f,R_h v_h), equation (2.13). It does not establish the corresponding identity for the original right hand side (f,v_h), nor for its original mass derivative. Its pressure theorem therefore cannot supply the original instantaneous BE pressure assertion.

## Remaining gap and disposition

The source gives a genuine uniformly L2-bounded local map Z_h -> H_sigma and an O(h_max^3) correction cancellation for the special smooth initial defect. It does not provide fractional regularity of the actual orthogonal projector, a weighted complex-sector estimate for the actual Brinkman/mass lift difference, or a direct bound for the first term in (7). One of those actual-space estimates remains necessary. The reconstruction route has not refuted the original claim, and the present absence of a proof is not evidence that the claim is a known open problem. No new supplier is proposed because the verified correction lemma does not close a necessary consumer obligation.
