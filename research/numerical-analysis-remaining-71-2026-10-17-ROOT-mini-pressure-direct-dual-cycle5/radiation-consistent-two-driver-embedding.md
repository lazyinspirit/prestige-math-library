# Radiation-consistent ideal two-driver embedding

Research proof proposal, 2026-10-18. This explicitly chooses the exterior operator used by the infinite-halfplane Green decomposition. It does NOT identify it with the earlier finite-ring Dirichlet Schur. The old finite embedding is an exact finite algebraic target, but its far grounded selfresponse differs from radiation. The present ideal embedding must be used consistently if this operator choice is accepted in the assembled proof.

## 1. Exterior mesh and scattered class

Use an actual child C with seven boundary nodes, its actual finite coarse transition, and a common uniform half-annulus outside that transition. Extend the uniform mesh beyond that annulus to the whole upper halfplane. This extension is an AUXILIARY exterior mesh; the actual parent field is localized into its distant commutator/base drivers. The uniform mesh and its reflected copy use the already checked actual MINI symbols.

Let I_eta=(v_eta,p_eta) be the exact two neutral plane layers with base velocity eta and base pressure zero. They solve all uniform interior equations and retain their actual base pressure reactions. They have infinite mass because their constant tangential extent is infinite. We NEVER put I_eta itself in the global L2 energy space.

Seek an actual composite child/exterior solution whose difference from I_eta outside the coarse transition has velocity in L2 and pressure gradient in L2, with base velocity eta and base pressure zero. All child exterior-interface velocity and pressure coefficients are equilibrated. Its trace on the child's seven-node boundary, gauged at the root, will define E_infty(D)eta.

## 2. Compact actual construction

Choose a smooth nodal cutoff zeta equal to one on the entire child/coarse transition through radius 2r and zero beyond 4r, varying ONLY in the common uniform annulus. Define outside the coarse transition

    v_ext=(1-J_v)v_eta,    p_ext=(1-J_p)p_eta,

and extend them by zero inside the actual child. This is an actual field: no uniform interpolant is defined on a skinny coarse cell. On the base, v_ext equals (1-zeta)eta and p_ext is zero.

Take the actual cell-mean-neutral velocity lift E_g with base trace zeta eta and zero other prescribed trace. It has exactly zero mean on every cell. Under the sharp coarse base-star geometry,

    ||E_g||_2 <= C(sqrt(a)r+sqrt(h r))|eta|.             (1)

Only base length O(r) is involved here because the infinite plane layer is already carried by v_ext outside 4r. This is not the earlier finite-ring far-boundary extension calculation.

The pair (v_ext+E_g,p_ext) has the desired full base traces. Its residual on free test rows is compactly supported in the common annulus and in the finite support of E_g. Since I_eta solves the uniform equations away from the cutoff, it is an exact mixed commutator residual plus the mass load of E_g.

For the neutral layers on a region of tangential extent O(r), their velocity norm and pressure-gradient norm are at most C sqrt(h r)|eta|: the layer coefficient decays geometrically in the mesh height j. Their pressure VALUE is at most C h|eta_n|; the cutoff derivative therefore costs at most C h|eta|. The full-MINI reference-cell cutoff estimates already proved in child-scale-incoming-cutoff-and-passive-scattering.md, with pressure test functions vanishing on the geometric base, imply that the compact residual (F,ell) satisfies

    |F(z)|<=f||z||_2,     |ell(q)|<=l||grad q||_2,
    f+l<=C[r sqrt(a)+sqrt(h r)+h]|eta|.                 (2)

The lift contributes no weak moment because its cell means are zero. The cutoff weak moment ell is retained, not assumed zero.

## 3. Finite-energy mixed correction on the infinite mesh

For a finite-depth child, define V_0 as the L2 closure of actual MINI velocities with BOUNDED SPATIAL SUPPORT and zero geometric-base trace. Define G_0 as the gradient-norm completion of continuous P1 pressures with bounded spatial support and zero geometric-base trace. For the limiting child, use the already proved V_infty/Q_infty INSIDE the child and the actual uniform exterior spaces, glued along their fixed finite interface traces, before taking this exterior spatial completion. Bounded spatial support allows all stabilized child annuli; it does NOT mean finitely many child cells or degrees of freedom. No cutoff is made at the interior refinement accumulation set. All radial far cutoffs below are identically one on the whole child and change only in the uniform exterior. Finite-depth recovery inside the child comes from the prior actual Mosco proof. Every cell bubble lies in V_0. The actual map q -> beta_K grad q|K extends to the pressure completion, has norm sqrt(gamma_2), and satisfies

    (Bq,grad q)=||grad q||_2^2.

Thus the gradient pairing has the same uniform mass inf-sup as on every finite mesh. Solve the residual moment by gradient Riesz and its cellbubble lift, and solve the remaining velocity equation on the closed kernel of the pairing by L2 Riesz. Recover the pressure-gradient component by the same inf-sup. This is exactly the finite mixed-stability proof in Hilbert completions; it uses no continuous Leray regularity or projector theorem. It yields a unique correction (delta v,grad delta p) with homogeneous base traces and

    ||delta v||_2+||grad delta p||_2<=C(f+l).             (3)

For this pressure completion the halfplane Hardy inequality is explicit: for a smooth finite-support function vanishing on y=0, integration by parts in y and Cauchy-Schwarz give integral |p|^2/y^2 <=4 integral |partial_y p|^2. Density gives it for continuous P1 pressures and their gradient completion. It supplies local L2 control on every bounded strip (y bounded above), hence local H1 potentials and the unique zero-base trace/gauge. For a radial far cutoff varying on radius R, its error term integral |p|^2/R^2 on the annulus is bounded by C times the Hardy-weighted tail integral there, because y<=C R. That tail tends to zero. The ordinary uniform-mesh P1 cutoff-product estimate therefore proves density of bounded-SPATIAL-radius pressures in gradient norm, rather than merely postulating it. Velocity coefficient cutoffs are dense in L2 by their bounded local mass norms.

One may consequently exhaust the auxiliary exterior by nested uniform halfrectangles, impose zero CORRECTION values on their far and base boundaries, and extend each correction by zero. The uniform bubble inf-sup and Hilbert mixed Galerkin stability give convergence of velocity and pressure gradient to the same infinite solution. The child trace and reaction converge because they are finitely many bounded local coefficient/functionals. The interior limiting child is glued through its already proved finite boundary response and strong mass/gradient convergence; this does not require a nonexistent locally finite triangulation at an accumulation set. No L2 norm of the infinite plane layer is taken in either construction.

Choose the correction with the negative residual. Then

    W=v_ext+E_g+delta v,    p=p_ext+delta p

is sourcefree in the actual child and exterior ON BOUNDED-SPATIAL-SUPPORT TESTS (equivalently every local assembled free row) and has the prescribed base traces. Neither total W nor I_eta is asserted globally L2, so their full homogeneous equations are not tested against arbitrary global L2 fields. Only the compact-residual correction problem is the global Hilbert variational problem. Child/interface reactions use compact local trace lifts. Outside the coarse perturbation,

    W-v_eta=-(J_v v_eta)+E_g+delta v,
    grad(p-p_eta)=-grad(J_p p_eta)+grad delta p,

so the scattered differences have finite energy. Uniqueness follows by applying the homogeneous mixed equations to the difference of two finite-energy scattered solutions, where global Hilbert testing IS legitimate. This retains all interface and base pressure reactions; no extra monopole compatibility equation is imposed or discarded.

The same construction works with the proved passive limiting child D: use its actual finite-dimensional boundary response in the composite variational form, or pass from the finite child approximants by the established strong mass/gradient response convergence. Its interior carries no source; all new residuals remain outside or are exactly restored lifts.

## 4. Child energy, trace and exact operator choice

Inside the child v_ext and p_ext are zero, hence its physical response is (E_g+delta v,delta p). By (1)-(3),

    ||W||_L2(C)<=C[r sqrt(a)+sqrt(h r)+h]|eta|.          (4)

Choose h<=c a r. Then (4) is at most C r sqrt(a)|eta|. Its root velocity is exactly eta, because E_g has that trace and the correction has zero base trace. The actual root fan gives the matching lower bound. Thus the sharp ideal-driver energy equivalence holds for this radiation-consistent embedding.

Its seven-node trace is a linear 20x2 map E_infty(D), and L_t(E_infty(D)e_t)=1. Reflection covariance holds when the entire auxiliary exterior grids are mirrored. The exterior response defines the corresponding RADIATION Schur J_infty and incident driver F_infty in the scattered class. All earlier exact finite Schur algebra, quotient projection, pairing, and restoration arguments apply with this consistently chosen operator; no equality J_infty=J_finite is claimed.

The infinite-halfplane Green/localized-cutoff decomposition must therefore bind to E_infty(D), J_infty and F_infty throughout the actual per-child proof. The finite E_R(D) remains valid for its separate finite Dirichlet problem but cannot be substituted for E_infty without an additional comparison theorem.

What remains is to check that the per-child incoming decomposition uses precisely this auxiliary exterior and that its local actual common uniform annulus lies inside the prescribed safe window. The auxiliary exterior may extend beyond neighboring actual children because it is used only after localization, with their effects represented by the exact distant sources. No original pressure claim is certified by this note alone.
