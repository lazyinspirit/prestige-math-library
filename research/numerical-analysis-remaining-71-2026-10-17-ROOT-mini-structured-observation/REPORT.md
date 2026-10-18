# Actual MINI bubble condensation for the structured initial observation

Research only, 2026-10-18. The original smooth instantaneous pressure assertion is **not resolved** here. The results below are exact spatial identities for the actual MINI element, including its symmetric-gradient viscosity. They isolate a potentially useful local parameter dependence, but do not establish the required uniform sector exponent greater than one quarter. No canonical item, manifest, runtime state, gate, test, or commit is changed.

CLAUDE.md and README.md were read fully. The current escalation remark, direct-dual cycle-5 report (in particular Sections 2 and 8), actual Fortin construction, and weighted-lift time-transfer note were read. All domain, graded matching shape-regular mesh, initialization, arbitrary partition, and original nonlinear-root hypotheses remain unchanged. The discussion is confined to the linear homogeneous initial observation already identified by the stationary auxiliary reduction. It does not infer a nonlinear result from that reduction.

## 1. Exact stiffness decoupling

Normalize the scalar cell bubble to have mean one: write it as beta_K, with

    m_K(beta_K)=1,    m_K(beta_K^2)=gamma_d>1.

The fixed number gamma_d depends only on dimension. Every actual MINI velocity has a unique expression

    v_h=l_h+sum_K beta_K c_K,

with l_h continuous piecewise affine, zero on the boundary, and c_K a vector. Write m_K(v)=|K|^{-1} integral_K v.

For any piecewise-affine l_h and vector c,

    a_nu(l_h,beta_K c)=0.                                      (1)

Indeed epsilon(l_h) is constant on K, while integral_K grad beta_K=0 by the zero trace of the bubble. This proves (1) for the actual form 2nu(epsilon(v),epsilon(w)); no replacement by a scalar Laplacian is made.

Define the real symmetric positive matrix H_K by

    |K| c dot H_K d = a_nu(beta_K c,beta_K d).

Affine scaling, shape regularity and coercivity give

    c_shape nu h_K^{-2}|c|^2 <= c dot H_K c
       <= C_shape nu h_K^{-2}|c|^2.                            (2)

For example the exact integrand is

    2 |epsilon(beta_K c)|^2
       = |c|^2 |grad beta_K|^2 + |c dot grad beta_K|^2.

Thus the matrix may be anisotropic, but its spectral bounds are uniform under the stated shape regularity hypothesis.

## 2. Actual parameter-dependent lift and its reduced system

Use b(v,q)=(v,grad q). Let W_lambda q be the divergence lift minimizing the real Brinkman energy for positive lambda, extended to the complex sector by its mixed equations:

    lambda(W_lambda q,v)+a_nu(W_lambda q,v)
                       +b(v,pi_lambda)=0,
    b(W_lambda q,s)=(q,s).

Write W_lambda q=l_lambda+sum beta_K c_lambda,K. Bubble tests and (1) give the exact formula

    J_lambda,K=(lambda gamma_d I+H_K)^{-1},
    c_lambda,K=-J_lambda,K[lambda m_K(l_lambda)
                                         +grad pi_lambda|K].  (3)

For |arg lambda|<=pi-delta, spectral diagonalization of H_K yields

    ||J_lambda,K|| <= C_delta/(|lambda|+nu h_K^{-2}).           (4)

This is a genuine local sector bound independent of h_min. It controls the bubble coefficient in terms of the *actual generated* nodal component and pressure; those quantities cannot be replaced by independently bounded data without a further argument.

Eliminating c_lambda gives the following exact nodal/pressure system. Put m_l,K=m_K(l_lambda) and g_K=grad pi_lambda|K. For every zero-boundary continuous P1 vector v and every s in Q_h,

    lambda(l_lambda,v)+a_nu(l_lambda,v)
      -lambda^2 sum_K |K| [J_lambda,K m_l,K] dot m_K(v)
      +sum_K |K| [(I-lambda J_lambda,K)g_K] dot m_K(v)=0,

    sum_K |K| [(I-lambda J_lambda,K)m_l,K
                         -J_lambda,K g_K] dot grad s|K=(q,s). (5)

The mass-minimum lift W_h q has an analogous decomposition l_0+sum beta_K c_0,K and potential phi_h. Its exact reduced equations are

    c_0,K=-gamma_d^{-1}[m_K(l_0)+grad phi_h|K],

    (l_0,v)-gamma_d^{-1}sum_K |K|m_K(l_0) dot m_K(v)
      +(1-gamma_d^{-1})sum_K |K|grad phi_h dot m_K(v)=0,

    sum_K |K|[(1-gamma_d^{-1})m_K(l_0)
                     -gamma_d^{-1}grad phi_h] dot grad s=(q,s).
                                                                    (6)

The reduced mass form in (6) is uniformly equivalent to the ordinary P1 L2 mass form: its subtraction is bounded above by gamma_d^{-1}||l_0||_2^2, by Jensen. Consequently this elimination introduces no small-cell-dependent degeneration of the nodal mass matrix. It does retain the global scalar pressure coupling.

## 3. Exact structured RHS for P_Z r

Let r=Pi_h u_0-u_0 for the original face-average, cell-mean-corrected Fortin map. Its exact cell means vanish. Define the actual bubble moments

    r_b,K=m_K(beta_K r).

Write y=P_Z r=l+sum beta_K c_K. There is a unique mean-zero xi in Q_h such that

    (y,v)+b(v,xi)=(r,v),    b(y,s)=0.

Bubble elimination gives

    c_K=gamma_d^{-1}[r_b,K-m_K(l)-grad xi|K],                   (7)

    (l,v)-gamma_d^{-1}sum_K |K|m_K(l) dot m_K(v)
      +(1-gamma_d^{-1})sum_K |K|grad xi dot m_K(v)
       =(r,v)-gamma_d^{-1}sum_K |K|r_b,K dot m_K(v),

    sum_K |K|[(1-gamma_d^{-1})m_K(l)
               +gamma_d^{-1}r_b,K-gamma_d^{-1}grad xi]
                                      dot grad s=0.           (8)

The original local approximation estimate gives

    |K|^{1/2}|r_b,K| <= C h_K^2 ||u_0||_{H2(omega_K)}.

For an affine test v on K, the zero cell mean further gives

    |(r,v)_K|
      <= C h_K ||r||_{L2(K)} ||grad v||_{L2(K)}
      <= C h_K^3 ||u_0||_{H2(omega_K)}||grad v||_{L2(K)}.       (9)

Thus (8), rather than a generic small H1 input to P_Z, is an exact actual-space representation of the structured initial data. It preserves both the extra affine-test moment cancellation and the nonzero bubble moments. In particular, zero cell means do **not** imply r_b,K=0.

## 4. Fine-cell half of the weighted sector estimate

Set delta_lambda=W_lambda q-W_h q. The actual stiffness-minimum lift L_h q and mass lift obey

    K_h q=L_h q-W_h q=P_Z L_h q,
    delta_lambda=(lambda+A_h)^{-1}A_h K_h q.

The common lift bound gives ||K_h q||_2<=C||q||_2, and the positive self-adjoint spectrum of A_h therefore gives, throughout the same complex sector,

    ||delta_lambda||_2<=C_delta||q||_2.                       (10)

For the local oscillation operator O_h v|K=h_K[v-m_K(v)], restrict to cells satisfying h_K<=|lambda|^{-1/2}. Since subtraction of cell means is an L2 contraction,

    ||O_h delta_lambda||_{L2(fine cells)}
                       <=C_delta |lambda|^{-1/2}||q||_2.     (11)

This proves the requested decay on all fine cells, with no minimum mesh size. It is the coarse cells that remain.

For those cells the exact oscillation is

    delta_lambda-m_K(delta_lambda)
      =l_lambda-l_0-m_K(l_lambda-l_0)
                         +(beta_K-1)(c_lambda,K-c_0,K).        (12)

Equations (3)--(6) are an explicit spatial route to the missing estimate for (12). The local denominator (4) alone does not estimate the difference in (12), because the nodal fields and pressure gradients in (5) are globally coupled and lambda-dependent.

One cancellation must be handled carefully. A continuous piecewise-affine pressure gradient is cellconstant, so its direct pairing with r is zero. However its **mass projection** has the bubble component displayed in (6), and

    (r,beta_K grad phi_h)=|K| r_b,K dot grad phi_h

need not vanish. Dropping this term on the grounds that r has zero cell means would lose exactly the actual mass-Schur contribution. Equations (7)--(9) retain it.

## 5. A second exact split exposing the coarse cancellation

There is a useful equivalent parameterization by the actual cell means m_K=m_K(v_h):

    v_h=l_h+sum_K beta_K[m_K-m_K(l_h)].

The divergence condition depends only on m: sum_K |K|m_K dot grad s=(q,s). Every nodal vector k yields an actual kernel test

    z_0(k)=k-sum_K beta_K m_K(k),

because all its cell means vanish. In the mass-plus-t-viscosity lift, with t>0 and with the pressure potential rescaled accordingly, testing by z_0(k) gives exactly

    (l,k)+sum_K |K|(gamma_d-2)m_K(l) dot m_K(k)
       +t a_nu(l,k)
       +t sum_K |K|[H_K m_K(l)] dot m_K(k)
     =sum_K |K|[((gamma_d-1)I+tH_K)m_K] dot m_K(k). (13)

The pure mass form on the left at t=0 is the mass of the mean-zero nodal reconstruction: ||z_0(l)||_2^2. Thus it is positive and uniformly equivalent to ||l||_2^2, even if gamma_d-2 is negative. This is an explicit nodal reaction-diffusion equation conditional on the constrained means, with all strain off-diagonal blocks retained correctly through (1).

It shows where a local coarse-cell proof would have to work. In a region where the means are approximately constant, the interior nodal solution can track those means and cancel the bubble part of the oscillation. The actual boundary condition and the global pressure constraint determine the discrepancy. Treating means as arbitrary independent cell data loses that cancellation. Conversely, merely choosing the mean-zero tests z_0(k) does not control every divergence-free bubble mean: there are additional means satisfying sum_K |K|m_K dot grad s=0. Thus (13) is not by itself a closed coercive estimate for the whole weighted observation.

No weighted-Schur variational bound for those remaining constrained means was established in this attempt. In particular a local denominator estimate for H_K, uniform bounds of the unweighted mixed inverse, and the exact identities (5),(13) have not been combined into a grading-independent coarse-cell power estimate. This is the unfinished spatial step, rather than a time-transfer or initialization algebra problem.

## 6. Exact gradient-channel Schur form and jump-defect equivalence

For this section choose the mass-potential sign so that W_h q=R_h grad phi, where R_h is the full velocity-space L2 projector. Put a_0=1-gamma_d^{-1}, and let

    M_red(l,v)=(l,v)-gamma_d^{-1}sum_K |K|m_K(l) dot m_K(v),
    B_phi(v)=(grad phi,v).

Then (6) gives l=a_0 M_red^{-1}B_phi. Therefore the actual scalar mass Schur form is exactly

    s_h(phi,psi)=(R_h grad phi,R_h grad psi)
      =gamma_d^{-1}(grad phi,grad psi)
             +a_0^2 B_psi(M_red^{-1}B_phi).                    (14)

The constants are gamma_2=10/7 and gamma_3=56/33, by reference-simplex integration. The bubble test beta_K grad phi proves

    gamma_d^{-1}||grad phi||_2^2
                <=s_h(phi,phi)<=||grad phi||_2^2.              (15)

The low ellipticity ratio in (15) alone does not supply a half-trace estimate: M_red^{-1} acts on the compatible gradient load B_phi in (14), and replacing it by an all-input estimate loses that structure.

There is also an exact defect identity. Let E_h=I-R_h on broken L2 vectors. Orthogonality gives

    s_h(phi,psi)=(grad phi,grad psi)
                         -(E_h grad phi,E_h grad psi).        (16)

For an arbitrary piecewise-constant vector g define

    J_h(g)^2=sum_Finterior h_F ||[g]||_{L2(F)}^2
                    +sum_Fboundary h_F ||g||_{L2(F)}^2.

Then, on the actual shape-regular matching meshes,

    c J_h(g) <= ||E_h g||_2 <= C J_h(g).                       (17)

Here the constants depend only on dimension and shape regularity. To prove the lower inequality, take any v_h in V_h. Since v_h is continuous and has zero boundary trace, the jumps and boundary traces of g equal those of g-v_h. Polynomial inverse trace on the neighboring cells bounds J_h(g) by C||g-v_h||_2. Minimize over v_h. For the upper inequality, average the piecewise-constant vectors at each interior vertex and prescribe zero at boundary vertices. The resulting continuous P1 vector v_h has local L2 approximation error bounded by the weighted neighboring jump terms. The proof uses finite chains of face-neighbor cells inside each vertex patch, polynomial scaling, and the boundary face term for patches meeting the boundary. Shape regularity bounds the chain length and all neighboring scale ratios. Summing gives ||g-v_h||_2<=C J_h(g), and mass best approximation gives (17). Bubble enrichment cannot spoil either direction.

Consequently the true mass potential solves the exact defect-Poisson equation

    (grad phi,grad psi)=(q,psi)
                           +(E_h grad phi,E_h grad psi),
                                      psi in Q_h.             (18)

Its defect is quantitatively a weighted pressure-gradient jump and boundary-trace defect, by (17). This identifies a concrete target for a Rellich multiplier that retains the actual mass projection. It is not the scalar P1 Ritz equation: deleting the second term in (18) changes the operator.

I did not establish an **unweighted** face trace/jump estimate for the generated grad phi from (18). Applying a broken Rellich multiplier introduces precisely the defect pairing in (18), together with its facet reconstruction terms. Bounds (15),(17) control only h_F-weighted jumps; removing that weight requires the additional spatial regularity the multiplier is intended to prove. Thus no valid absorption of those terms, or uniform coarse-cell sector estimate, is claimed here. The new content of this section is the actual compatible-gradient Schur identity and the independently proved equivalence (17).

## Status

Complete here: the actual symmetric-gradient P1/bubble stiffness decoupling; the local complex-sector bubble resolvent estimate; the exact globally coupled condensed systems for W_lambda, W_h and P_Z r; the fine-cell estimate (11); the compatible-gradient Schur identity; and its actual weighted jump/boundary-defect equivalence (17).

Unproved: a coarse-cell estimate for (12) strong enough to give ||O_h(W_lambda-W_h)||<=C|lambda|^{-gamma} with gamma>1/4, or a direct structured pressure bound bypassing it. No actual-mesh obstruction is established. Consequently the original instantaneous smooth pressure assertion and the structured homogeneous observation remain unresolved. This packet offers a concrete actual-space spatial reduction, not a certificate of the missing rate.
