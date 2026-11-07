---
id: def-weight-zero-maass-form-on-gamma0n
kind: definition
title: "Weight-Zero Maass Form on Gamma0(N)"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - def-congruence-subgroup-of-sl2-z
  - def-hyperbolic-laplacian-on-the-upper-half-plane
  - thm-well-ordering-principle
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "A. Knightly and C. Li, Kuznetsov's Trace Formula and the Hecke Eigenvalues of Maass Forms, Memoirs of the AMS 224 (2012), arXiv:1202.0189v1"
      url: "https://arxiv.org/pdf/1202.0189v1"
      locator: "§4.1, printed pp. 26–27: Maass cusp forms for level N and nebentypus, the Laplace eigenvalue, and spectral parameter convention."
    - title: "Austin Lei, Automorphic Forms Learning Seminar Notes (Columbia University, Fall 2024)"
      url: "https://www.math.columbia.edu/~aghosh/ALNotes12.pdf"
      locator: "§3.3: Maass forms for SL2(Z), the Laplace eigenvalue, and cusp-form convention."
---

## Definition

Let $N\ge1$ be an integer, let $\chi:(\mathbb Z/N\mathbb Z)^\times\to S^1$
be a group homomorphism with $\chi(-1)=1$, and put
$$\Gamma_0(N)=\left\{\begin{pmatrix}a&b\\c&d\end{pmatrix}\in SL_2(\mathbb Z):N\mid c\right\},\qquad \chi\!\left(\begin{pmatrix}a&b\\c&d\end{pmatrix}\right)=\chi(d\bmod N).$$
Write $X_{N,\chi}$ for the space of measurable functions $u:\mathbb H\to\mathbb C$
modulo equality almost everywhere that satisfy $u(\gamma z)=\chi(\gamma)u(z)$
for $\gamma\in\Gamma_0(N)$ and have finite norm
$$\|u\|_2^2=\int_{\mathcal F_N}|u(z)|^2\,d\mu(z),$$
where $\mathcal F_N$ is a measurable fundamental region. Its cusps are the
$\Gamma_0(N)$-orbits in $\mathbb P^1(\mathbb Q)$. For a cusp $\mathfrak a$ choose
$\sigma_{\mathfrak a}\in SL_2(\mathbb Z)$ with $\sigma_{\mathfrak a}\infty=\mathfrak a$,
and let $w_{\mathfrak a}$ be the least positive integer for which
$\sigma_{\mathfrak a}\begin{pmatrix}1&w_{\mathfrak a}\\0&1\end{pmatrix}\sigma_{\mathfrak a}^{-1}\in\Gamma_0(N)$. Such an integer exists because
$T^N=\begin{pmatrix}1&N\\0&1\end{pmatrix}\in\Gamma(N)$ and $\Gamma(N)$ is
normal, so its conjugate by $\sigma_{\mathfrak a}$ is in
$\Gamma(N)\subseteq\Gamma_0(N)$; the least one exists by the well-ordering
principle. If $\gamma=\begin{pmatrix}a&b\\c&d\end{pmatrix}\in\Gamma_0(N)$,
then $N\mid c$ and $ad-bc=1$ imply $ad\equiv1\pmod N$, so $d\bmod N$ is a unit.
The cusp is singular for $\chi$ if $\chi$ is trivial on its stabilizer. At a
singular cusp, the constant Fourier coefficient of a smooth $u\in X_{N,\chi}$ is
$$c_{\mathfrak a}(u,y)=\frac1{w_{\mathfrak a}}\int_0^{w_{\mathfrak a}}u\!\left(\sigma_{\mathfrak a}(x+iy)\right)\,dx.$$
A weight-zero Maass cusp form of level $N$ and nebentypus $\chi$ is a nonzero
$u\in C^\infty(\mathbb H)\cap X_{N,\chi}$ for which $\Delta_{\mathbb H}u=\lambda u$
with $\lambda\ge0$ and $c_{\mathfrak a}(u,y)=0$ for every $y>0$ at every singular
cusp. Nonsingular cusps have no zero-frequency term, so impose no additional
constant-term condition there.

## Definition references

[[def-congruence-subgroup-of-sl2-z]]

[[def-modular-group-action-on-the-upper-half-plane]]

[[def-hyperbolic-laplacian-on-the-upper-half-plane]]

[[thm-well-ordering-principle]]
