# Independent matrix-F research and covariance audit

Research only. Read CLAUDE.md and README.md fully. No canonical files, run controls, manifests, gates, or commits changed. Coordinated with the complex Gaussian supplier and Gaussian planning owners.

## Independent check of the replacement covariance argument

Read the complete current `ROOT-complex-gaussian-supplier-cycle4/covariance-helper/explicit-one-sided-covariance-proof.md`. The argument is sound subject to its expressly identified established real Gaussian comparison and real Gaussian product suppliers.

The equal-variance Gaussian augmentation has covariance difference

    (aa'−s·s')(||t||||t'||−t·t') >= 0,

so its comparison direction is correct. A common deterministic index penalty preserves the finite Gaussian interpolation argument. The supplied dense-net and ball truncations give integrable envelopes independent of the ball radius. Jensen in the independent augmentation variable has the required direction. The subsequent maximization over v and w is exact before the displayed quadratic upper bound. In particular the positive-part centering costs only 1/sqrt(2), since the scalar centered quadratic form has mean zero.

The complex reduction legitimately diagonalizes S by its singular-value decomposition and M by its unitary eigendecomposition, using both invariances of the circular Gaussian law. The imaginary part is bounded by the norm of D X M Y^T D because the other product is its transpose. Conditioning before each use of the real product bound gives precisely the claimed constants

    C1=5/2+sqrt(2), C2=3/2.

These constants suffice for the stronger requested unweighted RMS target. Let l=k+p, M=W^-1, and H have j rows. The proof gives

    E||H M^(1/2)||op²
      <= k/p + C1 sqrt[j k l/(p(p²−1))] + (3/2)j E||M||op.

Here Cauchy–Schwarz uses the exact already derived inverse second trace moment. Put alpha=sqrt(k/p), beta=e sqrt(j l)/p. For p>=2,

    C1 sqrt[j k l/(p(p²−1))]/(2 alpha beta)
      = C1 p/(2e sqrt(p²−1))
      <= C1/(e sqrt(3)) < 1.

For a purely elementary numerical check, C1<4 and e sqrt(3)> (8/3)(3/2)=4. Thus any independently proved inverse estimate

    E||M||op <= (2/3)e² l/p²

implies E||H M^(1/2)||op² <= (alpha+beta)². The inverse helper's stronger factor 5/9 therefore has surplus room. This calculation uses alpha²=k/p, not the weaker k/(p−1).

## Independent check of the local inverse-moment proof

Before completing this note I independently read the entire new inverse helper `local-density-recurrence-proof.md`. The matrix density Laplace-transform argument, Cholesky and eigenvalue Jacobians, finite Laguerre orthogonality and Christoffel–Darboux computation, and integration range s>−p all check. In particular the density ODE's term (2k+p−p²/x)rho is consistent with the moment recurrence. I independently evaluated the three displayed ODE identities as sparse multivariate Laurent polynomials over exact rational coefficients; each reduced identically to zero. I also executed the current `check_integer_endpoints.py`: both its 38 endpoint certificate and its additional 6 endpoint certificate passed. No mathematical defect was identified. The redundant ranges in its draft statement are an editorial cleanup already expressly acknowledged by its author.

## A rigorous obstruction to optimizing the raw homogeneous moments

The exact complete-homogeneous moment formula in the spectral helper gives

    E||F||op² <= min_(1<=q<=p) B_q^(1/q),
    B_q=(k)_q(j)_q/[q! p(p−1)...(p−q+1)].

A numerical grid initially suggested that optimizing q might prove the requested bound. That suggestion is false in sufficiently large parameters. Here is a precise obstruction, independent of numerical evidence.

Take j=2 and k=p. Then

    B_q=(q+1) product_(r=0)^(q−1) (p+r)/(p−r).

Since log((1+x)/(1−x))>=2x for 0<=x<1,

    log(B_q)/q >= log(q+1)/q+(q−1)/p.                 (1)

For every fixed C>0, the right side exceeds C/sqrt(p), uniformly over all 1<=q<=p, once p is sufficiently large. Indeed, for q>=2C sqrt(p)+1 its second term is at least 2C/sqrt(p). For smaller q, the function log(q+1)/q decreases, so its first term is at least

    log(2C sqrt(p)+2)/(2C sqrt(p)+1),

which exceeds C/sqrt(p) for sufficiently large p. Therefore

    sqrt(p) min_(1<=q<=p) log(B_q)/q -> infinity.

But the logarithm of the requested squared target at these parameters is

    2 log(1+2e/sqrt(p)) ~ 4e/sqrt(p).

Consequently the raw homogeneous-moment upper bounds cannot establish the target in all parameters, regardless of how the permissible integer moment is selected. Centering or another structural argument is essential. This is an obstruction to that proof method, not a counterexample to the target theorem.

## Jacobi-route status

The matrix-F asymptotic spectral edge has the attractive constant 2 in place of e, but an asymptotic edge alone cannot justify a finite bound. The supplier's parallel spectral helper already owns the Jacobi doubled-real chi/beta coupling investigation; I did not duplicate it. Complementary sine/cosine beta factors obstruct direct entrywise monotonicity. No independent finite-dimensional Jacobi proof is claimed here. The explicit one-sided covariance argument above bypasses that gap.
