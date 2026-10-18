# The pressure-observable quotient is already present in the actual generated lift

Research continuation, 2026-10-18. Read the complete direct-dual-cycle5 `REPORT.md` and the counterhelper's `actual-pressure-free-canonical-mini-channels.md`. This note proves an exact actual-space structural fact. It establishes no new mesh-uniform pressure admissibility estimate and no counterexample. Canonical strain, fixed zero trace, arbitrary allowed grading, and original initialization remain unchanged.

Let A be the actual positive mass-selfadjoint Stokes operator on Z_h, and let H:Z_h->Q_h be its homogeneous pressure observation. Thus

    b(v,H z)=(A z,v)-a(z,v),   v in V_h.

For the actual mass-minimum divergence lift W_h,

    (H z,q)=-a(z,W_h q).

With F:Q_h->Z_h defined by (Fq,z)=a(W_hq,z), this is the exact adjoint identity

    H=-F*.

The adjoint uses the actual velocity and pressure L2 inner products. It includes all mass and canonical strain blocks.

## 1. Exact observable subspace

Put m=dim Z_h and define

    N=intersection_{k=0}^{m-1} ker(H A^k),
    O=N^perp.

Cayley--Hamilton shows that N is A-invariant and is the largest A-invariant subspace contained in ker H. Self-adjointness makes N and O reducing subspaces. Taking orthogonal complements gives the concrete identity

    O=span{ A^k Fq : q in Q_h, 0<=k<m }.             (1)

Equivalently, if E_mu are the orthogonal spectral projections of A,

    O=direct sum_mu range(E_mu F),
    N=direct sum_mu [range E_mu intersect ker H].     (2)

These formulas retain multiple eigenvalues. Replacing an eigenspace by independently selected eigenvectors without respecting its joint pressure range is unnecessary.

Since (lambda+A)^{-1} preserves O and range F is contained in O,

    W_lambda q-W_h q=-(lambda+A)^{-1}Fq in O.        (3)

Thus the actual generated lift in the old weighted cell-oscillation target was already completely pressure observable. Removing the maximal pressure-free invariant space changes neither that lift nor its weighted cell oscillation. In particular, the pressure-free D4 tangential sector does not supply a missing cancellation inside this generated lift: it is already orthogonal to it.

For actual initial data y0=P_Zh r,

    H E_n y0=H E_n P_O P_Zh r,                      (4)

for every positive-step backward-Euler product E_n; the same is true of the semigroup and every resolvent. The quotient can therefore weaken a DATA-side regularity statement. It does not automatically improve the GENERATED-LIFT-side estimate (3).

## 2. Why exact invisibility gives no quantitative uniform estimate

On O, the finite-dimensional observation Gramian

    G_obs=integral_0^infinity exp(-tA) H*H exp(-tA)dt

is positive definite: its quadratic form vanishes exactly on N. Its existence follows from the positive spectral gap on each mesh. Positive definiteness does not yield a mesh-independent lower bound or an upper pressure-admissibility bound in the initial-data norm. The eigenvalues and the mixed source/pressure residues must still be estimated.

The exact quotient is sensitive to exact zeros. A mode with arbitrarily small but nonzero pressure output belongs to O, just as a strongly observed mode does. Consequently replacing a norm on Z_h by its quotient norm cannot be treated as a quantitative gain from a symmetric pressure-free example. The actual canonical D4 construction proves exact invisibility in its symmetry sector; it supplies no estimate for pressure-visible sectors on unrestricted meshes.

There is one elementary mesh-uniform bound on the quotient that follows from existing suppliers. Let Lq be the energy-minimum divergence lift and Kq=Lq-W_hq. Then K=P_Zh L, ||Kq||2<=C||q||2, and

    F=-A K,       H=K* A,
    ||H A^{-1}||_{Z_h->Q_h}<=C.                     (5)

Indeed a(Lq,z)=0 and K=Lq-W_hq imply (Fq,z)=-a(Kq,z). This proves (5) using the actual variational forms. It remains the order-one pressure observation bound; exact quotienting does not lower that order.

## 3. The remaining original-smooth-data content

For the unchanged Fortin defect r=(Pi_h-I)u, u in H2 intersect H1_0 with div u=0, the pressure pairing is exactly

    (p_hat(lambda),q)=(r,W_lambda q-W_hq).

By (3), only P_O P_Zh r enters. Hence a bound confined to this observable smooth-source image would genuinely avoid asserting full-projector H1/Hs stability. What is still absent is a quantitative, mesh-uniform estimate on that image or on its pairing with the actual generated lift. The known cell means, O(h2) mass approximation, O(h) unprojected H1 approximation, and (5) supply no positive high-lambda decay adequate for ell4/3 pressure.

The old all-cell-oscillation sector hypothesis is sufficient but stronger than a bound tested only against actual smooth solenoidal Fortin defects. It cannot be weakened merely by inserting P_O on its generated-lift side: (3) makes that insertion the identity. A new proof must estimate the restricted smooth-source/pressure crossentry, or establish actual spatial localization/regularity of (3). Neither has been obtained here.

Accordingly there is no new pressure-admissibility closure in this continuation. The concrete result is the exact Krylov/spectral characterization (1)--(3), showing precisely what quotienting does and does not remove.
