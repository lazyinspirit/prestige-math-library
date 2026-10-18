# Fresh graded-Leray, FEEC and semigroup source checks

Research continuation of the original smooth MINI mass-initialization question. No canonical or workflow changes. No new exact-scope pressure proof or smooth counterexample was obtained. The following checks are distinct from the previously excluded full-H1 projector and generic low-q resolvent routes.

## 1. Generalized discrete Gaffney source: proof needs a graded transfer argument

Juncai He, Kaibo Hu and Jinchao Xu, *Generalized Gaffney inequality and discrete compactness for discrete differential forms*, arXiv:1804.03428v2, 16 July 2018, 12 pp.

Actual full text https://arxiv.org/pdf/1804.03428v2, saved `discrete-gaffney2018.pdf` and `.txt`.

Actually inspected the complete setup §§1–2, all main theorem statements §3, the full generalized-Hodge-mapping argument §4, and scalar/vector Laplacian applications §5. The cited continuous regularity and cochain-projection construction papers were not independently reconstructed.

This is a promising **different** scalar-Neumann route: for a P1 Ritz potential psi_h, its gradient is an edge-element field with zero discrete curl and L2 discrete codifferential. Theorem 1 of this source gives a discrete Gaffney Lp estimate at p=2n/(n−2s), so p=3 in n=3 at s=1/2. The source also says the analogous theorem holds without imposed trace conditions, as needed for the absolute/Neumann complex. Harmonic fields are avoided by an explicit trivial-cohomology assumption in its presentation; the original domain is not assumed topologically trivial, which would require an additional treatment if used.

The actual proof on PDF p.6 has the following decisive step:

    ||u_h−Pi H u_h||Lp
      <= C h^(-(n/2−n/p)) ||u_h−Pi H u_h||2
      <= C h^(-(n/2−n/p)) h^s
                       (||du_h||2+||d_h* u_h||2).

It cancels the global inverse factor against a global Hodge approximation factor. The proof does not give a local weighted Hodge estimate replacing this step. The paper mentions a shape-regular family in its compactness theorem, but that wording cannot justify applying this global inverse inequality with h=h_max on arbitrarily graded meshes. I therefore do not certify its Gaffney conclusion for the original arbitrary-grading scope from the supplied proof. This is a limitation of the inspected proof, not a counterexample to the desired graded Gaffney theorem.

Even a corrected scalar discrete Gaffney estimate would still need transfer to the **actual nonlocal MINI mass-Schur form** g_h, rather than merely the ordinary scalar Laplacian form. The owner's exact g_h=kappa Laplace+positive averaging identity is the relevant bridge; positivity alone is not that transfer.

## 2. Actual mass-initialized saddle-point pressure semigroup source

Tomoya Kemmochi, *On the finite element approximation for non-stationary saddle-point problems*, arXiv:1709.00723v1, 12 pp.

Actual full text https://arxiv.org/pdf/1709.00723, saved `saddlepoint2017.pdf` and `.txt`.

Actually inspected the full abstract setup, all assumptions (A-1)–(A-4), resolvent proof, Theorem 3.1 and its full-test duality lemma, and the Stokes application Theorem 4.1. The separate hydrostatic application was not independently certified.

This source really uses mass initialization P_{h,sigma}u0. Its main semidiscrete pressure error estimate is

    ||p(t)−p_h(t)||Q <= C h t^(-1)||u0||H.

The full-test derivative-error estimate is obtained by comparing **continuous and discrete resolvents** and testing their difference against arbitrary velocity tests with a local approximant. It therefore does not invoke the false full-kernel H1 stability statement.

Its actual Stokes theorem nevertheless assumes a **convex polygonal/polyhedral domain and shape-regular quasiuniform triangulations**. The abstract approximation assumption includes elliptic regularity: Remark 1 explicitly explains why it fails on nonconvex polygons. Its pressure analysis concerns a homogeneous semidiscrete equation. The source also explicitly notes that the inhomogeneous pressure problem has not been treated there.

Thus it supplies a useful genuine full-test error mechanism but no original arbitrary-polyhedral, graded, arbitrary-partition theorem. Its t^-1 bound itself is not L4/3-integrable at zero. Smooth-data improvement would require a complete initialization/resolvent argument; the original smooth data cannot simply be inserted into the stated nonsmooth-data bound to remove that singularity.

## 3. A nominal stochastic source concerns primitives and different boundary conditions

The retrieved `stochastic2022.pdf`/`.txt` is arXiv:2206.13879, 40 pp. Its introduction and assumption section were inspected only: the stated pressure estimate is for the **time integral of pressure**, the FE meshes are quasiuniform, and the continuous model uses stress boundary conditions. It does not supply the original instantaneous no-slip claim. No later theorem from that paper is asserted verified.

## 4. Independent check of the genuinely new constrained near-2 result

Read the graded agent's research note `research/numerical-analysis-remaining-71-2026-10-17-ROOT-smooth-pressure-graded-cycle4/actual-mini-leray-lp-near-two.md` in full. Its uniform retraction/interpolation reasoning checks, subject to the standard analytic inputs explicitly listed there:

- A single p-independent, mean-adjusted Scott–Zhang projector onto Q_h, bounded at p=4/3 and p=4, makes the actual finite-dimensional pressure spaces a uniform complex-interpolation retract of ambient zero-mean W1,p spaces. The face trace required at 4/3 is valid since p>1; pressure nodes have no zero-boundary deletion.
- The reversed conjugate exponents p0'=4 and p1'=4/3 interpolate to p(theta)', so the dual scale used for g_h is correct.
- The finite-dimensional analytic-quotient openness proof has the stated constants: with r=1/6 and |theta−1/2|<=k/[12(k+2M)], its error term is at most k/8, leaving a k/8 lower bound. The estimate is uniform in dimension.
- The owner's exact full-MINI all-Lp bounds and mass-Schur coercivity provide the two operator ingredients. This establishes a positive research route for the **actual constrained** projector near p=2 on the original meshes, not an alternative projector.

No issue was found in this independent check. A canonical proof still requires the named ambient Sobolev interpolation, retraction and duality suppliers; this note does not claim to have authored them. The resulting tiny interval around p=2 must not be promoted to p=3 or a physical Hs bound. The improved special smooth-data Lp errors and boundary-strip estimate are valid consequences but do not yet prove the pressure initial-layer response.

## Disposition

These sources give no exact-scope counterexample for the actual smooth MINI initialization, and no completed original instantaneous estimate. The new actual near-2 constrained estimate remains positive evidence; the FEEC/Gaffney theorem remains a potentially useful route with a precise missing graded proof step. No claim is labeled impossible or open on this basis.
