# Parameter-dependent actual MINI divergence lifts

Research continuation, 2026-10-18. This note proves parameter-uniform lift bounds and an exact approximation identity from the verified common lifting. It also identifies why those bounds do not supply the missing boundary-layer decay. It does not claim the original pressure estimate.

Use b(v,q)=(div v,q), changing the pressure sign if the repository's equivalent convention b(v,q)=-(div v,q) is used. Let Q_h have mean zero. Put X=(H1(D)/R)* with the gradient quotient norm. The proved common continuous operator B and the new volume-dual MINI projection Pi satisfy

    div Bq=q,
    ||Bq||H1<=C||q||2,   ||Bq||2<=C||q||X,
    b(Pi v,q_h)=b(v,q_h),
    Pi bounded L2->L2 and H1_0->H1_0.

All constants are independent of mesh grading. These are proved in `actual-mini-common-retraction-and-stokes-fractional-norm.md`; Pi here is that actual L2-defined projection, not the earlier face-average-only map.

## 1. One lift controls both endpoints

Define L_h q=Pi Bq, q in Q_h. Then

    b(L_h q,s_h)=(q,s_h),
    ||L_h q||2<=C||q||X,
    ||L_h q||V<=C||q||2.                               (1)

Thus, for every lambda>0,

    lambda||L_hq||2^2+a_nu(L_hq,L_hq)
       <= C [lambda||q||X^2+nu||q||2^2].              (2)

The very same L_h appears for all lambda. This is a genuine actual-space parameter-uniform admissible lift.

Let W_hq be the L2-minimum lift in V_h and W_lambda q be the minimum of

    ||w||lambda^2=lambda||w||2^2+a_nu(w,w)

among the same affine set of divergence lifts. Finite-dimensional coercivity and the MINI inf-sup give unique minimizers. They are precisely the mass-Schur lift and Brinkman lift in the maximal-helper's exact pressure duality.

Minimality and (1)--(2) prove

    ||W_hq||2<=C||q||X,
    ||W_lambda q||lambda
       <= C [sqrt(lambda)||q||X+sqrt(nu)||q||2],
    ||W_lambda q||2
       <= C [||q||X+sqrt(nu/lambda)||q||2].             (3)

These assertions require neither an inverse estimate nor a smallest mesh size. The common nonorthogonal retraction Q_h also has

    ||Q_h v||lambda<=C||v||lambda,

by its two endpoint bounds. For complex lambda in a fixed sector avoiding the negative real axis, the same construction gives the usual sector-dependent energy estimates by rotating the form through half arg(lambda); no assertion about inverse Laplace transformation follows merely from this energy observation.

## 2. Exact approximation identity

Since W_hq is mass-orthogonal to Z_h, every admissible lift w=W_hq+z satisfies

    ||w||2^2=||W_hq||2^2+||z||2^2.

Consequently W_lambda minimizes

    ||w-W_hq||2^2+lambda^(-1)a_nu(w,w)

over all admissible lifts, and the minimum is exactly

    ||W_lambda q-W_hq||2^2
        +lambda^(-1)a_nu(W_lambda q,W_lambda q).        (4)

For any chosen admissible w,

    ||W_lambda q-W_hq||2^2
       <= ||w-W_hq||2^2+lambda^(-1)a_nu(w,w).          (5)

This identity isolates the real missing assertion: one needs an admissible approximation to the *mass-minimum lift*, not merely an admissible lift with bounded H1 norm.

Inserting w=L_h q in (5) gives the actual bound

    ||W_lambda q-W_hq||2^2
       <= C||q||X^2+C nu lambda^(-1)||q||2^2.          (6)

The first term does not decay in lambda. Replacing it silently by a decaying term would assume precisely the missing approximation/regularity theorem.

## 3. Relation to the special defect and strip information

For the actual r=Pi_old u0-u0, the original H2 Fortin defect, the maximal helper proved exactly

    (pi_lambda,q)=(r,W_lambda q-W_hq).

Here Pi_old and the new projection Pi above need not coincide; this exact identity uses only the actual r and actual orthogonal mass initialization. The new common retraction has not changed that initialization.

Because r has zero cell means, the right side also equals

    sum_K (r,W_lambda q-W_hq-m_K(W_lambda q-W_hq))_K.    (7)

The proved local estimate ||r||L2(K)<=C h_K^2||D2u0||L2(omega_K) therefore permits an oscillation-sensitive estimate. But (1)--(6) do not bound that oscillation by a positive power of lambda. Applying a local inverse estimate to the full mass-Schur correction can reintroduce h_min or an unproved weighted projector assertion.

Likewise the newly proved near-L2 estimate on the special scalar correction gives a positive boundary-strip energy exponent. It controls the data's concentration near the physical boundary. To use it in (7), one still needs an actual decomposition/localization of W_lambda-W_h into a boundary contribution with a quantified normal scale and an interior contribution controlled by cell-mean cancellation. No such localization follows from the common retraction or (4).

Thus the new construction supplies the parameter-uniform lifting endpoint required by a potential mixed boundary-layer argument. The unresolved step is a discrete Rellich/half-trace approximation theorem or equivalent off-boundary resolvent estimate for the actual mass-Schur lift on arbitrary graded meshes. No canonical item, metadata, hashes, runtime state, tests, or gates were changed.
