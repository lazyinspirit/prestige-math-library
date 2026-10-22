# Internal-circle target-neck route (unproved working plan)

The twelve sibling item drafts are still unindexed and unreviewed. No target-neck theorem or count one is asserted here. The current local format checks cover twelve paths, seventy-one proof steps, without mathematical acceptance.

Actual primary text read: Lipshitz0502404 extracted text lines4680–4985 (§12) and7735–7885 (AppendixA.3). Printed1091–1093 explicitly says the split disk plus torus maps are not transverse. Its indirect count argument uses a generic torus-with-boundary problem and handleslide data. Our torus mean inverse and dipole do not replace that argument.

A possible direct finite-obstruction construction is more specific than an invertible split operator. Normalize an old unit-disk cover by p_old(q)=i; choose q away from its finite branch values. The new constant-sheet surface coordinate is the exact rational function

    h_lambda(z)=lambda/(z-i)+conjugate(lambda)/(z+i).

It maps H biholomorphically onto the sphere minus the real interval[-Im(lambda)-|lambda|,-Im(lambda)+|lambda|]. Its node∞ maps to zero. Re(lambda)≠0 makes the node a regular slit-bank point; the two signs label different marked banks. The exact local inverse near its pole is z=i+lambda/eta+O(lambda²). This scalar assertion is proved in the new pole-model draft, independently of any coupled gluing claim.

The target neck has xi*eta=epsilon. Old p_old=i+A xi+… contributes the leading torus pole A epsilon/eta. The disk sheet contributes lambda/eta to first order. The torus mean obstruction is therefore expected to have leading complex term A epsilon+lambda. Setting lambda=epsilon L should give a nondegenerate finite obstruction derivative in L, provided the full nonlinear remainder is actually bounded with its derivatives. Choosing the target phase with Re(epsilon A)≠0 fixes a regular bank. Finitely many old regular models exclude only finitely many phase lines. Grid owner independently checked the slit Jacobian and bank ambiguity.

Important zero-mode bookkeeping: after using the old positive-affine gauge p_old(q)=i, one cannot also silently fix both the constant-sheet pole coordinate b=i and its p_D affine part. With b fixed to i, p_D has a free real affine part az+b_real. These two real variables match the torus constant to the old value. The torus mean-zero inverse removes its nonconstant modes, leaving the complex residue obstruction; its complex constant and the disk's two real affine variables handle the two node-value matches. This is a proposed parameter count, not a proof of a bounded matched inverse.

Genuinely missing local modules are: actual scalar slit/free-boundary Banach charts with two endpoint variables per active internal circle; finite-circle Cauchy response maps with uniform trace bounds; contraction on both interior necks; a finite obstruction map with a proved remainder after rescaling; equivalence of its kernel with actual symmetric-product holomorphic deformations (including branch points); and target-neck exhaustion for all unit-domain disks. The standard positive-cover/disjoint-root model avoids active/constant incidence collisions by keeping all internal circles active and inactive coordinates outside the closed component. Its branch-point deformation argument must still be proved, not presumed from a picture.

The existing proper-unit compactness theorem is for a fixed smooth target and cannot by itself prove compactness through a degenerating target neck. Any exhaustion proof must reconstruct the limiting old disk, torus fiber and constant sheet using bounded covering degree and holomorphic incidence charts, or supply an actual target-degeneration compactness theorem.

## More precise proposed two-neck response system (still unproved)

The new planar pole-response item supplies a genuine bounded scalar component inverse at the external-only induction base. It allows real simple boundary poles and, when forcing vanishes near q, uniquely normalizes its solution to vanish at q. Its kernel is real span{1,p_old}; positivity of Im p_old(q) gives the two-real-variable gauge. For later internal steps the corresponding response must include the old slit endpoint variables; that induction export and its equivalence with actual symmetric-product kernels remain unproved.

Fix small disjoint interior circles of radius r around old q, torus a and x_gamma, and constant-sheet b=i. A negative Hardy datum G at a puncture is extended outward by its negative Laurent series, multiplied by a fixed cutoff, and corrected by a component right inverse. The cutoff forcing is supported on a fixed annulus, not at the puncture. Normalized old/D responses have zero regular value at their punctures. On the torus subtract the complex mean before applying its proved Q; the remaining obstruction is the sum of the two first Laurent residues, and a free complex constant c_T remains. These are concrete constructions, but their full trace bounds still need a written proof.

An exact simplification of the second neck uses the holomorphic coordinate

    tau_lambda(z)=lambda/h_lambda(z)
                 =(z-i)/(1+(conjugate(lambda)/lambda)*(z-i)/(2i+(z-i))).

It is a genuine local coordinate at b=i with derivative one. It depends smoothly on the phase of lambda, uniformly on a small fixed source disk; after lambda=epsilon L with L near a fixed nonzero value it has uniformly bounded L derivatives. Thus eta*tau_lambda=lambda is an EXACT plumbing relation, not an approximate inverse h. Both necks then transport positive/negative Fourier modes by diagonal factors (epsilon/r²)^n and (lambda/r²)^n. Nonzero modes should satisfy a contractive response equation with norm at most C(|epsilon|+|lambda|)/r².

Let G denote the four incoming negative Laurent data. The old reference p_old has value i and derivative A at q. Let D's affine kernel be a z+b_real, with a near1. The torus constant c_T and the two-real D affine value c_D=b_real+a i must remain unknown. For fixed a and lambda, the nonzero-mode response should give G=O(epsilon+lambda), with derivative bounds, by the actual diagonal transfers and bounded core responses. Constant matching is

    c_T = i - K_T,a,0(G),
    c_D = c_T + K_T,x,0(G).

Therefore a=1+Im(K_T,x,0-K_T,a,0)(G) is a scalar contraction, b_real is the corresponding real part, and c_T is then determined. This corrects the earlier over-normalization of the D sheet.

The remaining exact complex mean obstruction should be

    R = epsilon*(A+K_old,1(G))
        +lambda*(a+K_D,1(G)).

After lambda=epsilon L, the desired estimate is R/epsilon=A+L+O(epsilon), with derivative I+O(epsilon) in L. A finite-dimensional contraction would then give the unique L near-A. This needs actual proofs of the Hardy trace responses, their phase derivatives, and the divided remainder; none of those estimates is asserted as already established here.

For regularity in the next induction step, forcing changes may require inverses growing like epsilon^-1 after the obstruction is divided. This is not fatal for a finite induction: each fixed constructed old model only needs a finite response norm, and the next neck parameter can be chosen much smaller than its inverse. But the proof must export an ACTUAL scalar slit-response right inverse, not merely uniqueness of one zero.

A prospective kernel identification uses the unit-domain incidence graph. In an all-internal-circles-active model, inactive constant coordinates lie outside the closed active component, so active/constant incidence collisions are absent. In an interior target coordinate xi the incidence equation is z=p(xi); a holomorphic symmetric-product first-order variation gives a holomorphic delta p, even at p branch points, by the implicit equation in z. At a moving slit tip, xi=a+w² and p=p_tip+c w+..., so a real tip displacement delta a contributes -c delta a/(2w) to delta p. These are the two real endpoint parameters per slit. Showing that EVERY actual smooth kernel section and every scalar endpoint variation correspond with the required norms is still a genuine missing proof; it cannot be replaced by dimension counting.

Target-neck exhaustion also remains separate. The target degenerates; fixed-target bubble compactness cannot be substituted. One possible route cuts the univalent active incidence image along the fixed target circles, extracts the old unit disk using bounded covering degree and positivity, identifies the vertical torus plus constant sheet, then puts every sufficiently close object into the actual response system. The nondegenerate condition Re(epsilon A)≠0 must rule out the zero-slit/inactive-circle wall. This whole extraction and uniform normalization must be proved before a count1 induction is claimed.
