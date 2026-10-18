# Exact smooth-solenoidal excitation of a zero-mean-cell pressure channel

Research only, 2026-10-18. This settles the source interface for a proposed actual coupled j=0 mode. It does NOT construct that mode, prove its pressure observation, or supply a nonlinear counterexample. No canonical/control files are changed.

Work in dimension two, on one fixed triangle K retained unchanged by every refinement depth. Use the actual MINI bubble b_K=27 lambda_0 lambda_1 lambda_2, and let J be a fixed quarter-turn. For any prescribed vector B there is a streamfunction psi in Cc-infinity(K) such that

    integral_K psi=0,       (J grad psi,b_K)_K=B.       (1)

Proof: the three polynomials 1, partial_1 b_K, partial_2 b_K are linearly independent. On the reference triangle the two derivatives are proportional to y−2xy−y² and x−x²−2xy; the x² and y² coefficients force their coefficients to vanish, then the constant coefficient vanishes. Affine change of coordinates preserves independence. Choose a nonnegative smooth compact bump eta positive on a ball in K. The finite Gram matrix of these three polynomials in L2(eta dx) is strictly positive: a nonzero polynomial cannot vanish on an open ball. Solving that three-by-three linear system produces psi=eta times a polynomial with any prescribed moments against the three functions. Integration by parts translates the derivative moments to the desired B. Smooth bump existence is supplied by the actual `lem-smooth-bump-between-concentric-euclidean-balls` (rescale a ball compactly inside K). The construction uses a finite invertible real matrix, not point sources or limiting distributions.

Put u=J grad psi and extend it by zero outside K. Then u is smooth, compactly supported in D, exactly divergence-free and no-slip. For every affine scalar lambda on K,

    (u,lambda)_K=−J grad(lambda) integral_K psi=0.       (2)

In particular every vector cell mean of u is zero. Its trace vanishes on every mesh face. The ACTUAL existing face-based Scott–Zhang construction therefore gives I_hu=0, and its cell-mean bubble correction also vanishes. Consequently the actual Fortin map satisfies

    Pi_h u=0,             r=Pi_hu−u=−u,               (3)

at every refinement depth. This assertion uses the face-functional construction, not the different volume-dual projection F. No artificial bubble load is discarded: (u,b_K)=B is nonzero when B is nonzero.

Let z_h=l_h+b_K c_K on this triangle, with arbitrary coefficients elsewhere. Its pairing with r is exactly

    (r,z_h)=−B dot c_K.                               (4)

Equation (2) kills only the affine component. If the actual cell mean of z_h is zero, then

    c_K=−m_K(l_h)/m_K(b_K)
       =−(a_0+a_1+a_2)/(3 m_K(b_K)).                 (5)

Thus a zero-mean-cell kernel field is visible to this smooth solenoidal source whenever its affine vertex sum has a nonzero component in direction B. More quantitatively, suppose its root coefficient is a_0=e, |e|=1, and its two outer coefficients obey |a_1|+|a_2|<=theta<1. Choosing B=e gives

    |(r,z_h)| >= (1−theta)/(3 m_K(b_K))>0.           (6)

The same fixed u works across depths when these root conditions hold in the same retained triangle. Its H2 and all smooth norms are fixed constants. This is uniform excitation of that specified coefficient channel, not a lower bound for the projection's tail without a proved actual dual mode.

The bubble term in (5) is nonzero under (6). Its curl cannot be cancelled by the constant curl of the affine part: curl(b_K c_K) has a nonzero quadratic part for nonzero c_K, by the same polynomial independence used in (1). Hence this actual field is not an H1 gradient on K. The claimed excitation does not rely on coupling a solenoidal source to a pure gradient.

Finally these source data lie in the ORIGINAL smooth nonlinear problem: take stationary exact velocity u(t)=u, exact pressure p(t)=0 and force f=−nu Delta u+N_s(u). Because u is exactly divergence-free and compact smooth, N_s(u)=(u dot grad)u, f is compact smooth and in L2(0,T;L2), and the required W1,infinity(H2) velocity and W1,infinity(H1) pressure norms are fixed independently of mesh depth. Initialization remains the actual P_Zh u. This does not identify any backward-Euler trajectory or bound its nonlinear correction; those must be proved after the genuine pressure-observed coupled mode is constructed. In particular (4)–(6) cannot replace that missing spectral/sector/time argument.

## A bounded actual L2 pressure-observation source

There is a corresponding exact source interface for the mass lift that avoids setting q=S_h phi_h for an arbitrarily prescribed potential. Let t_0,t_1,t_2 be any fixed reals with sum zero. On the same unchanged triangle choose q_src in Cc-infinity(K) with

    (q_src,lambda_i)_K=t_i,     i=0,1,2.              (7)

The three barycentric polynomials are linearly independent, so the same positive-bump Gram construction gives these moments. Since their sum is one, integral q_src=sum t_i=0. For each mesh let q_h be its actual L2-orthogonal projection onto the meanzero continuous P1 pressure space. Then

    ||q_h||2<=||q_src||2,
    (q_h,s_h)=(q_src,s_h)=sum_i t_i s_h(a_i).        (8)

Thus the right side of the mixed mass-lift equation is supported on the three unchanged root pressure nodes, while its actual L2 norm is uniformly bounded over all refinement depths. No boundedness of an inverse pressure mass matrix is needed. The test pressure q_h itself need not have compact support; (8), rather than that false support assertion, is the property used.

For any actual potential phi_h, (q_h,phi_h)=sum t_i phi_h(a_i). In particular a root pressure vector that is nonconstant modulo the pressure gauge has a nonzero pairing with some such moment vector. This supplies an admissible bounded observation source for a future genuine coupled transfer mode. It does not prove that its mass lift shares a bad tail, that a particular mode is excited in the full response with nonzero residue, or that time evolution preserves a lower bound. Those remain the actual coupled-mode/pressure-observation obligations.

## Additional exact stiffness orthogonality of this source

For the source constructed above, every affine vector moment on its supporting unchanged coarse triangle K is zero. Consequently

    a_nu(u_*,v_h)=0                 for EVERY actual MINI v_h.   (A)

To prove this, integrate twice only inside K, where u_* has compact support. On K, v_h is affine plus b_K c. The operator -2nu div epsilon(v_h)=-nu Delta v_h-nu grad div v_h is an affine vector polynomial, since b_K is cubic. Its pairing with u_* is zero by the affine moment conditions. This gives (A), including the true symmetric-gradient form. Since div u_*=0,

    (-nu Delta u_*,v_h)=a_nu(u_*,v_h)=0.                       (B)

Thus its discrete Stokes projection is exactly zero, and the linear part of the exact stationary force -nu Delta u_* has exactly zero load on the FULL velocity space, not just on Z_h. Its continuous L² force is still present and admissible. The discrete stationary NS load for epsilon*u_* therefore consists only of epsilon² N_s(u_*) tested against v_h. This can simplify a later actual realization but does not prove any pressure-observed mode or source crossentry.
