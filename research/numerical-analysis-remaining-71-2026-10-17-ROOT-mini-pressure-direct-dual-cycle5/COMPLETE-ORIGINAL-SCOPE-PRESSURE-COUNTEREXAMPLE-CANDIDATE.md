# Complete original-scope smooth-pressure counterexample: research proof candidate

2026-10-18. Original pressure owner. This binds ONE construction, parameter choice, exterior operator and functional throughout. It is submitted for independent full-chain audit before canonical authoring. All local proofs named below are actual research proofs, not literature attributions for this novel construction. No manifest, canonical carrier, gate, runtime, hash or commit has been changed.

## 1. Claim and exact scope

There is a fixed bounded connected convex polygon D, a fixed positive viscosity and time interval, and a family of conforming affine MINI meshes with ONE fixed shape-regularity bound, for which the original smooth instantaneous pressure estimate cannot hold uniformly under mass initialization and the original arbitrary-time-step/any-root scope. The smooth exact Navier–Stokes data used below satisfy the original W1,infinity(H2) velocity, W1,infinity(H1) pressure and L2L2 force hypotheses. No extra domain, mesh grading, time-step ratio/coupling or initialization assumption is imposed.

The construction is in two dimensions, which suffices to refute a claim covering dimensions two and three. The polygon is the rectangle C=[-4,4]x[0,4] together with the lower triangle with vertices (-4,0),(0,-4),(4,0). Keep the two coarse lower triangles K_± joining the origin o to the lower vertex and one base corner. Their areas are eight. All smooth source actuators are compactly supported in their interiors. The coarse cells and all external domain edges remain unchanged with recursive depth. Thus global maximum mesh diameter is bounded and does not tend to zero; the original claim has no small-h threshold and expressly uses global maximum diameter.

The positive velocity estimate and primitive-pressure theorems are not modified by this argument. This is a refutation of the remaining stronger instantaneous pressure-rate clause only.

## 2. One parameter receipt and actual mesh family

Put L=log N and take sufficiently large integer N (dyadic rounding of the following small parameters is harmless):

    delta=L^-200,   a=L^-220,   b0=L^-20,
    sigma=L^-150,   epsilon_Q=L^-380,
    epsilon_corner=L^-600.

Fix epsilon_strip DYADIC in [a/8,a/4] at this stage, independently of every later h refinement. The physical side-strip vertices and their positive internal port cells are therefore fixed before h. The logarithmic lift has K_log^2<=C(1+log(1/epsilon_strip))=O(1+log L), in particular O(L).

Here a is fan aperture, not a velocity coefficient or the final nonlinear amplitude. Use the mirrored two-fan template. The actual straight long tooth sides have root distance D_i comparable to a/N and longitudinal coordinate Y_i comparable to one. Reserve middle-third attachment windows with spacing ell comparable to b0 a/N, common child radius rho comparable to sigma ell, and reflection-paired counts

    B comparable to N^2/(b0 a),    S0=B rho^2 comparable to sigma^2 b0 a.

Use the exact seven-node unrefined child boundary. Every child is a rotated or reflected homothetic copy of the same template. Frame tangents are labelled in the direction nearest the parent tangent; normals point into the child. The reflected-frame convention is O_i'=S O_i S, as proved in actual-all-state-reflection-odd-tangent-top-row.md. This preserves the sign of paired tangent contrasts.

The actual geometry, matching uniform rings and radial refined parent guards are those in research/N-ROOT-mini-fractional-projection-cycle4/actual-seven-node-child-uniform-ring-geometry.md. In particular:

* Every local comparison window lies wholly on ONE straight tooth side, with all below-base triangles radial from the same parent root and Y_i comparable to the parent radius.
* Safe radii are fixed small multiples of ell (one may use ell/1000). Nested cutoffs fit inside these windows: bulk commutator annulus R..2R, stencil enlargement below3R, base pressure and velocity lifts equal the actual remainder through4R and vanish beyond8R, trace window through16R. Tail inputs therefore start beyond the bulk annulus. The common actual uniform region includes every cutoff stencil.
* Physical child base edges and all seven child boundary edges remain whole. Extra uniform guard nodes occur outside the two child-base edges. Their exterior stars are O(h^2).
* The root has fan area comparable to a times its container area. All nonfan exterior stars in the outer-row tests satisfy epsilon_Q. The unavoidable selected center ratio is O(a sigma b0)=O(L^-390), strictly below epsilon_Q. Original child boundary-port stars remain positive independently of the later h choice.
* Child-side CORNER stars satisfy the independent single-parent-triangle ratio epsilon_corner. This is possible by finite interior star surgery, leaving both original boundary edges whole. The center mismatch is made exactly zero by matching the constant driver to its actual velocity, so its fan-area floor is not used for this smaller error.
* Mirror grids have opposite diagonal orientations. Include BOTH child kink-macro crease families t=n and t=-n, and both U-transition overlays, not only the right-top crease. These rays end at existing root/top-corner nodes, avoid the protected near-base cones, and add no eighth child boundary node. All collar/pressure-macro refinements and h-dependent changes are reflected together. Pressure lift affine macrozones contain the entire protected fans and all recursive holes.

Choose one uniform width h sufficiently small AFTER N. Besides all finite geometric grid conditions, require

    h/(sigma D_i) <= c L^-600,
    h <= c a rho,
    h <= c rho^2/R

for every finitely many first-generation side type. Make the exterior transition vary as h decreases in the explicit compatible exterior Mosco construction, rather than keep a coarse transition fixed. This shrinking EXTERIOR transition does not remove the positive INTERNAL child port triangles. Further reduce h below the symmetry tolerance in section 4. Once selected, fix this ONE h and its finite actual template forever. Repeating the finite pattern to depth m gives conforming meshes with a finite shape-regularity constant depending on this fixed N,h, but independent of m. No condition of the original theorem bounds that constant by a preselected numerical value.

## 3. Actual mass limit, quotient and correct source functional

For each fixed chosen template, the actual nonnested mass Mosco proof gives the limiting child DtN D_infinity, actual response maps and finite-depth convergence, including pressure gradients and all interface coefficients. This is research/N-ROOT-mini-fractional-projection-cycle4/actual-mini-mass-mosco-and-dtn-limit.md. Its exact Schur fixed point gives actual child recoveries T_i; no terminal map is iterated in place of the recursive one.

Quotient the finite retained boundary-state space by the exact affine Darcy family W=c,p=gamma-c dot X. The quotient norm is inf_c ||W-c||_L2(C). Its kernel is exactly that family by the actual source-free mass bubble/affine detection proof. Affine pressure gauges are removed; affine weak reactions are retained. Let U=B^-1 sum_i T_i be the actual mean recovery after the exact child scaling and type transport. Reflection preserves its odd sector.

The functional used throughout is the AVERAGE contrast

    L_t(s)=W(o)_t+[p(c_+)-p(c_-)]/8.

It is reflection odd. The earlier RIGHT-HALF functional is not substituted for it. Odd source states have exactly affine pressure on their three-node parent base.

## 4. Radiation ideal, bounded odd projection and parity repair

Use ONLY the radiation-consistent embedding from radiation-consistent-two-driver-embedding.md. It is NOT the historical finite-ring far-Dirichlet embedding. Its auxiliary uniform halfplane is used after actual localization. The exact constant-base tangential/normal layers need not be globally L2. Subtract them outside a compact cutoff, restore the actual neutral base lift, and solve the compact mixed residual in velocity L2 and zero-flat-base pressure-gradient Hilbert spaces. Halfplane Hardy proves exterior density; the actual mean-one bubble gives mass inf-sup sqrt(7/10). The total plane-plus-scattered equations are local; the finite-energy correction is the global variational object. The independent radiation audit verifies these statements and limiting-child gluing.

Its two ideal child responses have mass at most C sqrt(a), and root trace gives the matching lower bound. Let E_t^- be the actual ODD PART of its tangent column. Then L_t(E_t^-)=1 and its quotient norm g satisfies c sqrt(a)<=g<=C sqrt(a). The root mass lower bound and fixed-rectangle H1/2 trace estimate on the two affine base edges give

    g |L_t(s)| <= C ||s||_quotient.

Thus e=E_t^-/g, ell=g L_t define a uniformly bounded exact rank-one projection P=e ell on the odd quotient; Q=I-P is bounded.

A single SWNE exterior is not reflection invariant. Its normal column's odd part is retained. The new compatible-exterior-darcy-mosco-and-symmetry-limit.md proves that this defect tends to zero as h tends to zero AFTER N, with the actual transition changed. Only the compatible free twelve interface ports are involved: three base pressures zero, four free outer pressure traces matching zero at base corners, and eight free velocities. No arbitrary incompatible corner-pressure convergence is asserted. Uniform actual child signed-energy coercivity bounds the coupled inverse despite varying child D_h; original child port triangles stay positive. The SW/NW exterior matrices converge to the SAME continuous Darcy map, and the radiation driver tends to zero. Therefore E_h(D_h)-E_0(D_h) tends to zero, uniformly along the actual family D_h, and E_0 is reflection equivariant.

The normal-driver functional of an arbitrary parent state has a finite C_N bound INDEPENDENT of h: selected center values are bounded by their unrefined parent fan triangles, and incoming regular velocity by the actual uniform kernel value and ring energy. Choose h so small that the combined odd normal-column contribution is at most L^-30 times parent quotient norm. This is noncircular: all N-dependent constants and the positive child port floors are fixed first; no convergence rate is required. The finite h chosen afterward is then fixed with recursion depth.

## 5. Complete actual per-child decomposition and complementary row

All remainders below are RESTORED source-free child responses. For a pressure lift Phi the physical pair is (w_corr,p_corr+Phi); for a neutral velocity lift Eg it is (w_corr+Eg,p_corr). Auxiliary loaded pairs are not passed to the child response map or fractional detection.

Start with an arbitrary odd parent response and subtract an arbitrary affine Darcy shift. On each safe side window extract the affine pressure CHORD slope C_I=mean(T), where T is the tangential gradient. The exact radial identity

    D_y T=-(D_i/y)D_y N,
    D_y[T+D_i(N-N0)/y]=-D_i(N-N0)/y^2

for every constant N0 gives

    ||T-mean T||_L2(I)<=C(D_i/Y_i)||N-N0||_L2(I).

The base area measure is D_i dy/2. Thus all guard-breakpoint pressure remainders, not only the child three nodes, have an actual collar pressure lift of squared energy at most C R D_i/Y_i^2 times parent-patch quotient energy, namely C b0(a/N)^2. The explicit lift is g(x)+k(S-|x|), equal inside the child to an affine function plus k|x-y|; it preserves all seven edges, whole protected affine zones and all actual extra guard values. All gradient estimates are from prescribed affine pieces or uniform-grid products, not skinny-cell interpolation. Its nested far tail is retained as a distant base input, with actual full-field bound and all base reactions.

For velocity choose the constant incident value equal to the ACTUAL child-center velocity, making its center residual zero. Actual coarse P1+b mass positivity gives |K||W(e)-W(o)|^2<=24||W-c||_K^2 on each parent base triangle. Independent corner stars and all uniform guard stars therefore give squared neutral-lift budget

    eta_base <=C[epsilon_corner+h/(sigma D_i)]<=C L^-600.

This is a FULL VECTOR estimate, including normal endpoint patterns; no normal pressure-gradient regularity is assumed. The nested distant base-velocity tail is also retained. Its effective physical pressure input has an h gain and its ring-energy cost is no larger than the guard budget.

After removing the local lifts and tails, the uniform bulk cutoff sees zero residual base data. Subtract the local affine field and the exact constant-base short layers before using its driver norm. The chord-slope cost on a ring is at most C(R/D_i) times parent patch energy; the constant shortlayer cost is C h/(sigma D_i) times that energy. The pressure/velocity tails have the previously bounded local ring norms, since they start beyond4R while bulk cutoff stencils lie below3R. Thus the sum of squared actual bulk-driver energies over disjoint rings is at most C times parent quotient energy.

The actual incoming Green proof decomposes this far driver into its regular affine field, TWO exact neutral layers, and residual with velocity/pressure-gradient collar norm at most C(rho/R)^2 times ring energy. Its independently extracted normal affine component is not inferred from a parent normal slope. Child-scale compact cutoff, actual mixed bubble stability and restoration bound the scattered residual with the complete radiation child selfresponse. The exact same radiation operator is used here as in section 4. All outgoing child moments/selfresponse remain inside that solve; prescribing the actual base velocity/pressure traces leaves their weak reactions as OUTPUTS, not independent incoming parameters. No additional monopole is assumed zero.

Consequently the actual child trace is affine macro plus the radiation two-driver response plus restored errors, with total squared physical error budgets as above. Equal averaging, child-reference rescaling and Cauchy-Schwarz give

    ||Q U|| <= e2,
    e2 <= C[sigma/sqrt(b0 a)
             +sqrt(eta_base/(sigma^2 b0 a))
             +sqrt(a)/(N sigma)] + L^-30.              (A)

The final term is the explicitly retained normal parity defect. The cancellation of polynomial N is exact: ell sqrt(B) is comparable to sqrt(b0 a) in unit parent scale. The induced mean norm is the actual source-free child response norm; its linearity justifies averaging states. All affine macro states vanish in the quotient. The normal ideal parity defect is charged, not declared cancelled.

For the fixed tuple, both first terms in (A) are O(L^-30); the third is L^40/N. Thus e2 tends to zero with N.

## 6. Actual all-state tangent row and asymmetric spectral channel

The complete proof is actual-all-state-reflection-odd-tangent-top-row.md. Use parent global tangent in the full reversible outer-fan inverse, with exact constant reference b_ref,t=-(a_root,t+18p0)/17. The all-guard tangential reset is C delta times parent quotient energy; hybrid parent/exterior tests have ZERO exterior cell means, so all exterior pressure terms cancel and the remaining reaction norm is C sqrt(epsilon_Q) times that energy. No pressure-only exterior block is assumed small.

Selected child half-base triangles have equal areas and unrefined edges, so their average pressure slope is EXACTLY the row's pbar dotted with the transported child tangent. Intrinsic nodal/bubble mass controls the O(delta) frame error. The selected parent star-area sum is comparable to sigma a. Therefore the normalized selector satisfies for ALL odd states

    |ell(U s)+(1/17)ell(s)|<=e1||s||,
    e1<=C(delta+sqrt(epsilon_Q))/sqrt(sigma)
       =O(L^-125+L^-115).                              (B)

In the splitting range P plus range Q, (A)-(B) give the ACTUAL block

    U=[alpha b;c D],
    |alpha+1/17|,||b||<=C e1,    ||c||,||D||<=C e2.

For sufficiently large N the scalar Schur contraction has a real eigenvalue lambda with |lambda|>=1/34. Its left eigenfunctional is (1,b(lambda-D)^-1), differing from ell by O(e1), NOT O(e2). This is the asymmetric block lemma already proved in reflection-odd-quotient-aggregation-and-block-target.md. No generic high-dimensional determinant or raw whole-state norm estimate is used.

## 7. Genuine average-source visibility

Use average-contrast-four-source-moment-mismatch.md. For the adjoint to the AVERAGE contrast, let e_source be the maximum of the four unchanged coarse bubble moments. Small moments give coarse grad p=O(e_source), bubble coefficient -14a_root/27+O(e_source), and coarse mean a_root/10+O(e_source); the bottom pressure hat makes a_root,n=O(e_source).

The GLOBAL cell-mean-neutral root velocity test gives the exact linear coefficient C0=64/45. The GLOBAL affine pressure test q=x gives M0=8/5. The upper rectangle's root-only reference has mass O(sqrt(a)|a_root,t|) by the sharp star, and the perturbation is O(K_log e_source). Thus the two equations have the incompatible ratio M0/C0=9/8 unless e_source>=c/K_log. In particular the convenient lower bound c/(1+K_log)^2 holds. This proof does not use the invalid even-root-pressure argument for the historical right-half functional.

The fixed six coarse curl actuators realize the four coarse bubbles as FULL mass projections, with H2 bounds independent of mesh depth. Odd projection preserves this average functional; the coarse-bubble span is reflection invariant. Thus one odd source state has normalized selector at least c sqrt(a)/(1+K_log)^2 and bounded quotient energy. K_log^2=O(L) for the fixed dyadic strip choice. Dividing the two left-row terms in (B) by the source scale sqrt(a)=L^-110 gives L^-15 and L^-5, which beat the inverse-logarithmic source bound. Hence the actual left eigenfunctional is NONZERO on one odd coarse-source combination for sufficiently large fixed N.

A rough odd combination of the four source responses implies roughness of at least one individual source. No unproved source-cyclicity assumption is made.

## 8. Actual mass fractional divergence and transfer back to finite depth

Fix s=1/8. At depth m, actual mean recovery is U^m, because D_infinity is the actual autonomous fixed point, not a terminal approximation. The nonzero eigenfunctional gives mean quotient energy bounded below by c|lambda|^m. Jensen in the actual response quotient energy makes the sum of squared depth-m energies at least c B^m|lambda|^(2m).

Write r_m=rho^m. On each disjoint depth-m child, the checked mass affine-Darcy fractional detection is explicitly

    E_phys(C_(r_m))<=C_N r_m^s |W|_Hs(C_(r_m)),
    E_ref=E_phys/r_m
         <=C_N r_m^(s-1)|W|_Hs(C_(r_m)).

Therefore sum_child |W|_Hs^2 >=c_N r_m^(2-2s) sum_child E_ref^2. Using the Jensen lower bound above gives a lower growth factor

    [B rho^(2-2s)|lambda|^2]^m.

For s=1/8, B rho^(7/4) is comparable to N^(1/4) times a fixed negative power of log N, hence tends to infinity. Choose N once so that the bracket exceeds one. The infinite-depth restricted source response therefore has infinite physical H^(1/8) norm.

The actual finite-depth responses converge strongly in L2 to that response. Fractional seminorm lower semicontinuity then forces unbounded H^(1/8) norms along finite depths. This does not require sharp terminal-leaf stars: omit the terminal generation or use the actual infinite limit and lower semicontinuity. Every finite mesh is a genuine conforming shape-regular MINI mesh of the SAME fixed template.

## 9. Actual pressure observation and original nonlinear/time-discrete realization

Apply the already independently checked pressure-observable-coarse-projection-bridge.md to the resulting individual source u_j. Its FULL unconstrained mass projection is the fixed coarse H1 bubble w_j. With q_h=P_Q(-div w_j), uniformly L2 bounded, the kernel initial state splits as uniformly H1 s_h plus Kq_h. The actual homogeneous Kq pressure observation is the positive spectral function G_h(lambda); its Mellin moment turns the physical H^(1/8) divergence into a sequence with lambda^(3/16) times the ACTUAL pressure crossentry unbounded. The H1 remainder contributes only O(lambda^-1/2) and cannot cancel it. Normalize q_h where nonzero. This is real pressure output, not an inference from an arbitrary pressure-free rough channel.

Finally use nonlinear-realization-from-strong-crossentry.md with finite real-amplitude Vandermonde order m=4: m/[4(m+1)]=1/5>3/16. It supplies uniformly smooth exact stationary solenoidal velocities supported on the unchanged coarse cells, exact pressure zero, actual Navier–Stokes forcing, and a sequence of actual semidiscrete pressure norms growing without bound. The real amplitudes and all data obey the ORIGINAL hypotheses with uniform bounds. For each finite mesh, select an actual backward-Euler root arbitrarily close to the semidiscrete solution by choosing time steps sufficiently small; impose also the original tau_max Lambda<=1/2. The theorem's any-root quantifier is refuted by this legitimate branch. No additional mesh-time coupling is an assumption of the counterexample; the original universal statement allows these choices.

Global maximum diameter and all approved data/viscosity constants stay bounded while the actual instantaneous ell^(4/3)L2 pressure error is unbounded. Thus no constant of the originally claimed form can give its first-order bound on this fixed shape-regular mesh family.

## Audit status and integration discipline

This is the single complete research proof candidate for independent review. It binds the corrected average source, radiation exterior, odd tangent projection, charged normal parity defect, exact chord affine extractor, restored physical errors, one parameter tuple and the original nonlinear/BE scope. The local source, top-row, radiation and exterior-Mosco proofs have separate substantive checks; the entire assembly must now be audited. No canonical false-statement correction, new item creation, consumer rewrite or metadata action is authorized by a claim of success in this file alone. The original stronger obligation stays held until that audit and owner/root integration decision.
