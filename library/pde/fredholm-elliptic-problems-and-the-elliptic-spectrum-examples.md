---
page: "fredholm-elliptic-problems-and-the-elliptic-spectrum-examples"
title: "Fredholm Elliptic Problems and the Elliptic Spectrum — Examples"
status: draft
items: []
examples:
  - ex-dirichlet-laplacian-eigenpairs-on-an-interval
  - ex-neumann-laplacian-has-a-zero-constant-mode
  - ex-shift-removes-a-negative-zero-order-obstruction
  - cex-elliptic-fredholm-solvability-can-fail-at-an-eigenvalue
  - cex-elliptic-eigenvalues-need-not-be-simple
  - cex-nonsymmetric-elliptic-operators-need-not-have-an-orthonormal-eigenbasis
  - ex-coercive-nonsymmetric-form-can-have-nonreal-galerkin-eigenvalues
  - ex-disconnected-neumann-domain-has-multiple-zero-eigenvalue
  - rem-a-repeated-eigenvalue-has-no-canonical-eigenfunction-basis
  - ex-resolvent-norm-blows-up-when-a-real-parameter-approaches-an-eigenvalue
---

These companions compute and stress-test the theory of the main page. On
$(0,\pi)$ the Dirichlet eigenpairs $(\sin(kx),k^2)$ are verified directly for
all $H^1_0$ tests, and the Neumann spectrum is seen to contain the constant
zero mode with the cosines $\cos(kx)$ at eigenvalues $k^2$, so on the full
space the lowest Neumann eigenvalue is $0$, while the mean-zero
subspace has first Rayleigh value at most $1$. A negative zero-order
coefficient $-10$ destroys coercivity, and shifting by $\mu$ restores it
for every $\mu>10$ by the direct sufficient bound, well below the general Gårding
threshold $21/2$. Resonance at a Dirichlet eigenvalue is exhibited on
the interval: the datum $\sin(kx)$ has nonzero pairing with itself, and the equation $-\Delta u-k^2u=f$ is solvable exactly when $f$ is
$L^2$-orthogonal to $\sin(kx)$; no solution exists for $f=\sin(kx)$ and
uniqueness fails at the eigenvalue. On the square the eigenvalue $5$ has a
two-dimensional eigenspace, so eigenvalues need not be simple, and the
companion remark records that no canonical eigenbasis exists in a multiple
eigenspace. Two finite-dimensional models separate symmetry from coercivity:
a coercive non-Hermitian matrix has real spectrum but no orthonormal
eigenbasis, and a coercive complex matrix has the non-real eigenvalue pair
$1\pm i\beta$. A disconnected Neumann domain shows that the zero eigenvalue
has multiplicity equal to the number of connected components and that
Poincaré--Wirtinger with the global mean fails on it, and the resolvent norm
blows up at rate $1/\operatorname{dist}(\lambda,\{\lambda_j\})$ near an
eigenvalue.

The constructions use the main page's conventions: bounded or unbounded open
subsets of $\mathbb R^n$, divergence-form operators with the stated
coefficient bounds, and weak equations tested against $H^1_0$ or $H^1$ classes.
Countable Choice is declared for the Sobolev and Hilbert-space interfaces, and
the Axiom of Choice is carried where the discrete spectral theorem, Rellich
compactness or the Fredholm alternative is invoked.
