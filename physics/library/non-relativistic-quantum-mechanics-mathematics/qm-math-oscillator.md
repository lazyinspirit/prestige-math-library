---
page: qm-math-oscillator
title: Qm Math Oscillator
status: draft
items:
  - lem-nrqm-oscillator-diagonal-adjoint-and-graph-core-lemma
  - thm-nrqm-oscillator-diagonal-spectrum
  - thm-nrqm-oscillator-hermite-recurrence
  - thm-nrqm-oscillator-hermite-orthogonality
  - thm-nrqm-oscillator-hermite-completeness
  - thm-nrqm-oscillator-oscillator-scaling-and-exact-realization
  - lem-nrqm-oscillator-closed-ladder-domains
  - thm-nrqm-oscillator-coherent-state-convergence
  - thm-nrqm-oscillator-coherent-evolution-and-variance
  - thm-nrqm-oscillator-multidimensional-oscillator-completeness
requires:
  - qm-math-composites
  - complex-lp-spaces-and-test-function-conventions
  - distributions-test-functions-and-differentiation
  - series-and-nonnegative-tests
  - strongly-continuous-semigroups-and-hille-yosida
  - the-exponential-function
  - the-lebesgue-and-riemann-integrals-compared
examples: []
---

The oscillator layer of the non-relativistic quantum mechanics mathematical
prerequisites, all of it mathematics: the abstract diagonal operator as the
exact model of an eigenbasis with prescribed real eigenvalues, the Hermite
family of the line with its ladder operators and their closed maximal domains,
the scaling that realises the one-dimensional oscillator as the
self-adjoint differential operator $-\frac{\hbar^2}{2m}\frac{d^2}{dx^2}+
\frac{m\omega^2}{2}x^2$, the coherent vectors and their exact evolution and
variance, and the product-basis completeness of the anisotropic
multidimensional oscillator. Every item carries `domain: mathematics` and
depends only on mathematical suppliers, published or from
[[qm-math-composites]]; nothing here asserts a physical interpretation,
measurement model or empirical claim, and the companion page
[[qm-math-oscillator-examples]] stays mathematics as well.

The operator layer begins with
[[lem-nrqm-oscillator-diagonal-adjoint-and-graph-core-lemma]]: for a complete
orthonormal family $(e_n)$ and real $\lambda_n$, the finite-support operator
$Se_n=\lambda_ne_n$ has exactly one self-adjoint extension, namely the diagonal
operator $A$ with domain $\{x:\sum_n\lambda_n^2|\langle x,e_n\rangle|^2<\infty\}$,
and the algebraic span is a core on which the finite truncations converge in
graph norm. [[thm-nrqm-oscillator-diagonal-spectrum]] computes its spectrum,
$\sigma(A)=\overline{\{\lambda_n\}}$, proves that every $\lambda_n$ is an
eigenvalue and exhibits the resolvent
$R(\lambda,A)x=\sum_n(\lambda-\lambda_n)^{-1}\langle x,e_n\rangle e_n$ with
norm $(\inf_n|\lambda-\lambda_n|)^{-1}$ outside the closure.

The Hermite layer is the analytic heart of the page.
[[thm-nrqm-oscillator-hermite-recurrence]] defines $g_0=\pi^{-1/4}e^{-y^2/2}$,
the polynomial-Gaussian space $P$, the operators
$a=(Y+\partial_y)/\sqrt2$, $a^\dagger=(Y-\partial_y)/\sqrt2$ and the vectors
$g_n=(a^\dagger)^ng_0/\sqrt{n!}$; it proves the adjoint pairing on $P$, the
commutator $[a,a^\dagger]=I$, the ladder relations
$ag_n=\sqrt n\,g_{n-1}$, $a^\dagger g_n=\sqrt{n+1}g_{n+1}$, the Rodrigues
polynomials $H_n$ with $g_n=H_ng_0/\sqrt{2^nn!}$ and the recurrences
$H_n'=2nH_{n-1}$, $H_{n+1}=2yH_n-2nH_{n-1}$. Orthonormality is
[[thm-nrqm-oscillator-hermite-orthogonality]], which also records the
eigenvalue equation $(-\partial_y^2+Y^2)g_n=(2n+1)g_n$; completeness is
[[thm-nrqm-oscillator-hermite-completeness]], proved by the moment criterion
and the uniqueness of the $L^1$ Fourier transform, and it makes $(g_n)$ a
Hilbert basis and $P$ dense.

[[lem-nrqm-oscillator-closed-ladder-domains]] extracts the maximal closed
ladder operators from the basis alone: $D(a)=\{\sum_nn|c_n|^2<\infty\}$,
$D(a^\dagger)=\{\sum_n(n+1)|c_n|^2<\infty\}$, closedness, $a^*=a^\dagger$,
$(a^\dagger)^*=a$, the common domain $D(N)$ of the products, $a^\dagger a=N$
and $aa^\dagger=N+I$, the commutator identity on $D(N)$, and the
identification of $a,a^\dagger$ with the closures of the polynomial-Gaussian
ladder operators. [[thm-nrqm-oscillator-oscillator-scaling-and-exact-realization]]
then scales with $\ell=\sqrt{\hbar/(m\omega)}$: $Df(x)=\ell^{-1/2}f(x/\ell)$ is
unitary, $H_{\mathrm{osc}}=\frac{\hbar\omega}{2}DAD^{-1}$ is self-adjoint with
spectrum $\{\hbar\omega(n+\frac12)\}$ and orthonormal eigenbasis
$\psi_n=Dg_n$, the span of the $\psi_n$ is a core, on it
$H_{\mathrm{osc}}=-\frac{\hbar^2}{2m}\frac{d^2}{dx^2}+\frac{m\omega^2}{2}x^2$,
and the same identity holds against every test function for every element of
the domain.

The coherent layer begins with
[[thm-nrqm-oscillator-coherent-state-convergence]]: for every $z\in\mathbb C$
the series $\psi_z=e^{-|z|^2/2}\sum_n\frac{z^n}{\sqrt{n!}}g_n$ converges to a
unit vector in every polynomial number domain, with $a\psi_z=z\psi_z$,
$\|a^\dagger\psi_z\|^2=|z|^2+1$, $\langle N\psi_z,\psi_z\rangle=|z|^2$ and
$\langle\psi_z,\psi_w\rangle=e^{-(|z|^2+|w|^2)/2+z\overline w}$.
[[thm-nrqm-oscillator-coherent-evolution-and-variance]] transports these coherent vectors by $D$ to $L^2(\mathbb R,dx)$, identifies
$H_{\mathrm{osc}}=\hbar\omega(N_\psi+\frac12I)$, constructs the unitary group
$U(t)$ generated by $-\frac{i}{\hbar}H_{\mathrm{osc}}$ (with the exact
generator-domain statement), proves
$U(t)\psi_z=e^{-i\omega t/2}\psi_{ze^{-i\omega t}}$, and computes the position
and momentum means $\langle Q\rangle=\sqrt2\ell\operatorname{Re}z$,
$\langle P\rangle=\frac{\sqrt2\hbar}{\ell}\operatorname{Im}z$ and variances
$\ell^2/2$, $\hbar^2/(2\ell^2)$ with product $\hbar^2/4$, invariant under the
evolution.

Finally [[thm-nrqm-oscillator-multidimensional-oscillator-completeness]]
builds the product basis $g_N=\prod_jg^{(j)}_{n_j}$ of $L^2(\mathbb R^d)$ from
[[qm-math-composites]], proves its completeness, transports the anisotropic
operator $\sum_j\bigl(-\frac{\hbar^2}{2m_j}\partial_{x_j}^2+
\frac{m_j\omega_j^2}{2}x_j^2\bigr)$ with spectrum the closure of
$\{\hbar\sum_j\omega_j(n_j+\frac12)\}$, and computes the isotropic
multiplicities $\binom{M+d-1}{d-1}$, which is $(M+1)(M+2)/2$ for $d=3$. All
items are draft mathematics under construction; the physical oscillator pages
consume these results as stated mathematical premises and add their own
postulates and interpretation.

