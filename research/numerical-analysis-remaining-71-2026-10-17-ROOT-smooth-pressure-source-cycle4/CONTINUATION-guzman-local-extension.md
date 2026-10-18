# Ainsworth–Guzmán–Sayas: exact graded extension proof and MINI compatibility

Research only. Full source obtained and inspected. It provides genuine local-mesh estimates without quasiuniformity, but does not establish the missing actual MINI mass-lift or continuous-solenoidal fractional projection estimate.

## Actual source and reading

Mark Ainsworth, Johnny Guzmán and Francisco-Javier Sayas, *Discrete Extension Operators for Mixed Finite Element Spaces on Locally Refined Meshes*, author manuscript dated 2 March 2015, 10 pp.

Full authoritative author PDF: https://www.dam.brown.edu/people/jguzman/documents/guzman_revised.pdf . Saved as `guzman-revised.pdf` and `.txt`.

Read the complete mathematical text: §§1–4, Theorems 2.1/2.3, Lemmas 3.2/4.1–4.3, Theorem 3.3 and its entire Appendix-A proof. The first combined output truncated the end of §4 and Appendix; those were then reread separately and completely. The references' own complete proofs were not read or asserted local suppliers.

Also read the current actual Fortin-adjoint identities and residual estimates in `research/numerical-analysis-remaining-71-2026-10-17-ROOT-mini-reconstruction-pressure-route/volume-fortin-adjoint-gradient-range.md` fully. No claim below substitutes its controlled P_cont F*delta for P_cont delta.

## 1. What the paper actually proves

The geometry is a connected three-dimensional Lipschitz polyhedron, with an arbitrary shape-regular matching tetrahedral mesh. It expressly rejects a quasiuniformity assumption. RT_k and first-family Nédélec spaces, not MINI, are used.

Theorem 2.1 constructs, for piecewise-polynomial normal boundary data g_h of total mean zero, an RT field sigma_h satisfying

    sigma_h dot n=g_h,
    div sigma_h=0,
    ||sigma_h||H(div) <= C||g_h||H^(-1/2)(boundary).

The actual construction is important: solve the **continuous harmonic Neumann problem**, set sigma=grad u, then define sigma_h=Pi_RT sigma. Exact RT normal moments preserve the polynomial trace, and the commuting divergence identity preserves divergence zero. It is not an estimate about an arbitrary RT field or an arbitrary discrete energy-minimizing solution.

Theorem 2.3 constructs a bounded Nédélec tangential-trace extension in H(curl) by splitting its surface trace, using the RT extension, and a boundary-potential H1 lift interpolated with Scott–Zhang. It supplies H(curl) control, not physical positive-fractional regularity of every discrete Nédélec field.

There is an additional scope caution in the Nédélec proof: Lemmas 4.1/4.3 invoke exact de Rham complexes and curl surjectivity in an unqualified form. On the original arbitrary topology these need harmonic/flux-component bookkeeping; connectedness alone does not imply all those exactness assertions. The RT harmonic-Neumann construction itself does not need that topological shortcut and remains the relevant genuine graded ingredient here.

## 2. Exactly how the local proof removes a global inverse

For some fixed domain-dependent s in (0,1/2), the continuous Neumann regularity input is u in H^(3/2+s). Theorem 3.3 localizes it, for harmonic u and sigma=grad u, to each element K and its vertex patch D_K:

    ||sigma||H^(.5+s)(K)
      <= C[ h_K^(-.5-s)||sigma||L2(D_K)
            +||g||Hs(boundary intersect D_K)
            +h_K^(-s)||g||L2(boundary intersect D_K)].

This is proved by a smooth patch cutoff, local Poincare/interpolation estimates, and the continuous Neumann regularity theorem. RT interpolation then gives elementwise error h_K^(.5+s) times this local regularity norm. The h_K powers cancel **locally**, before summation. Bounded patch overlap controls the volume terms; local polynomial inverse estimates control boundary Hs terms. Finally Lemma 3.2 uses a genuine negative-boundary-norm estimate

    sum_F h_F ||g_h||L2(F)^2 <= C||g_h||H^(-.5)(boundary)^2,

proved through boundary local basis scaling and the cited mesh norm equivalences. Thus the proof does not multiply h_min inverse by h_max approximation error. This is exactly the local mechanism worth preserving.

Some Appendix displays require care if reconstructed locally. In its boundary-patch discussion the arbitrary H^(.5−s) dual test is said to vanish on a face, although that fractional space has no such trace assumption. The estimate actually needed there can instead be obtained globally from Sobolev embedding and Holder:

    ||v||L2(D_K) <= C h_K^(.5−s)||v||H^(.5−s)(D).

Indeed the Sobolev exponent is 2d/[d−2(.5−s)], and |D_K| is comparable to h_K^d. This repairs that step for the global negative norm used in the proof; it does not justify a false local-norm Poincare inequality for arbitrary constants. Likewise mean-zero Neumann estimates should be applied modulo constants (or to gradient seminorms) after the cutoff. These routine repairs preserve the stated local gradient estimate, but must not be copied as an unsupported zero-trace assumption.

## 3. Why this is not yet a graded discrete Gaffney theorem

The tempting replacement in He–Hu–Xu is:

    global inverse x global Hodge approximation
        -> local inverse x local Hodge approximation.

The new source proves the needed type of local approximation **for its specially constructed RT interpolant Pi_RT grad u**. In the Gaffney application the input is instead an arbitrary discrete field u_h and one must estimate

    u_h−Pi H u_h

in a mesh-weighted L2 norm. A global Galerkin/Hodge error estimate does not become that local bound merely because continuous H u_h has localized regularity. The missing term is the comparison of the given u_h to the chosen local interpolant, which the extension construction does not address. No theorem in the inspected paper states that comparison for arbitrary discrete codifferential/curl data.

Even the source's mixed-Laplacian corollary is quasioptimality in H(div) x L2 with an explicit boundary-data error. It does not assert a physical Hs norm of the mixed flux, a uniform weighted Hodge error, or a W1,p estimate of a scalar conforming Ritz potential.

## 4. Exact mismatch with the actual MINI mass-Schur lift

The target is

    W_h q_h=R_h grad phi_h,
    (R_h grad phi_h,R_h grad r_h)=(q_h,r_h), r_h in Q_h,

in the **fixed zero-boundary MINI velocity space**. Its divergence is only weakly specified against continuous P1 pressures. It is not an RT interpolant of a known harmonic continuous gradient, and does not have an RT face-normal prescription whose exact divergence commutation would identify the constructed field with W_h q_h.

Applying Pi_RT to a MINI field generally preserves only projected element divergence, not the weak MINI kernel's full solenoidality. Conversely a stable RT reconstruction with corrected divergence need not preserve its curl, mass pairing, or the actual minimum-mass characterization. Those are precisely the already-recorded H(div)+curl mismatch and cannot be removed by changing the name of the finite-element space.

The original owner's newer desired inequality is

    ||P_cont delta_h||H^(-s)
       <= C||A_h^(-s/2)delta_h||2, delta_h in Z_h,

at physical s>1/4. Its dual concerns the actual mass projector acting on continuous solenoidal Hs inputs. The current Fortin-adjoint route controls P_cont F*delta_h and exact gradients inside range(F*), not P_cont delta_h. This extension paper provides no identity equating these quantities. Its normal/tangential trace extensions neither preserve the needed full L2 pairing nor prove a uniform transfer angle from the adjoint companion to delta_h.

In particular, interpolating an already-constructed bounded RT extension operator cannot turn the arbitrary MINI delta_h into that extension; an actual commuting map and the required norm/pairing estimates would first have to be proved.

## Disposition

Useful verified source mechanism: **continuous harmonic reconstruction + local regularity + local RT interpolation + negative boundary-norm scaling**, on genuine arbitrarily graded shape-regular meshes. Missing actual interface: identify or quantitatively compare the original mass-MINI lift/solenoidal field with such a reconstruction while preserving the required divergence, curl and L2 pairings. No exact original pressure/fractional theorem or counterexample was obtained, and no canonical or runtime file changed.
