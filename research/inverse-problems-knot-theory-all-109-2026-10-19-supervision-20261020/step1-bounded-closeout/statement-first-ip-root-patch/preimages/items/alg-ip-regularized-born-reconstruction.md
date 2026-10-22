---
id: alg-ip-regularized-born-reconstruction
kind: algorithm
title: One-pass filtered reconstruction from finite Born data
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 3
deps:
  - def-countable-choice
  - def-fourier-transform-on-l-one-of-rn
  - def-ip-fixed-frequency-far-field-data
  - def-truncated-singular-value-pseudoinverse-at-a-declared-threshold
  - lem-ip-born-linearization-of-the-scattering-map
  - thm-ip-picard-range-criterion-for-compact-operators
justified_by: []
proof_strategy: not-applicable
axiom_use: "Countable Choice is assumed only for the contextual infinite-dimensional Picard statement. The finite matrix instructions themselves use finite data and no choice principle."
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Fioralba Cakoni, David Colton, and Houssem Haddar, Inverse Scattering Theory and Transmission Eigenvalues, CBMS 88"
      url: "https://sites.math.rutgers.edu/~fc292/CCH-Book-Final.pdf"
      locator: "Chapter 1, §1.2, printed pp. 10–11: Fourier form of the first Born far-field pattern; §1.2.2, pp. 18–20: nonlinear far-field map and its local derivative"
    - title: "Otmar Scherzer and Leonidas Mindrinos, Inverse Problems: Lecture Notes, University of Vienna, Sommersemester 2015"
      url: "https://www.csc.univie.ac.at/files/InverseProblems_SS15/InverseProblems_full.pdf"
      locator: "Chapter 5, §5.2.6, printed pp. 79–82: inhomogeneous-medium volume equation and outgoing convention"
    - title: "Semyon Dyatlov, MIT 18.155 Lecture Notes: Distributions, Elliptic Regularity, and Applications to PDEs"
      url: "https://math.mit.edu/~dyatlov/18.155/155-notes.pdf"
      locator: "§11.1.1, Definition 11.1, printed p. 119; rescale the source frequency by 2π"
verification:
  precheck: n/a
---

## Definition

**Inputs and admissible conditions.** Fix the domain $D$, wavenumber $k>0$, and library Fourier convention from the fixed-frequency data definition. Give nonempty finite lists of incident directions $d_1,\ldots,d_s\in S^2$ and observation directions $\theta_1,\ldots,\theta_r\in S^2$. Give a finite measurable partition $D=\bigsqcup_{n=1}^N E_n$ with $|E_n|>0$, complex Born-data samples $y=(y_{ba})\in\mathbb C^{rs}$, a discrepancy threshold $\delta\ge0$, and an iteration budget $B\in\mathbb N_0:=\{0,1,2,\ldots\}$. The sample frequency for pair $(\theta_b,d_a)$ is $\xi_{ba}:=k(\theta_b-d_a)/(2\pi)$. The declared finite discrete Born Fourier matrix $F\in\mathbb C^{rs\times N}$ has entries
$$F_{(b,a),n}:=\frac1{4\pi}\int_{E_n}e^{-2\pi i x\cdot\xi_{ba}}\,dx.$$
For a piecewise-constant contrast $q_c:=\sum_{n=1}^N c_n1_{E_n}$, its sampled first Born data vector is exactly $Fc$.
The input also declares a reduced singular-value decomposition
$$Fc=\sum_{j=1}^{p}\sigma_j\langle c,v_j\rangle u_j\qquad(c\in\mathbb C^N),$$
where $p=\operatorname{rank}F$, the positive singular values $\sigma_j$ have orthonormal right vectors $v_j$ and orthonormal left vectors $u_j$, and the empty sum is used when $F=0$. Give a scalar filter $g:[0,\infty)\to\mathbb C$ whose values at the $\sigma_j$ are finite and with $g(0)=0$. The threshold filter $g_\tau(\sigma)=1/\sigma$ for $\sigma>\tau$ and $g_\tau(\sigma)=0$ for $0\le\sigma\le\tau$ is the truncated singular-value pseudoinverse at threshold $\tau\ge0$.

**Instructions and outputs.**

1. If $B=0$, return no estimate, no residual, and status **budget-exhausted**, with zero filter applications.
2. If $B\ge1$, form the coefficient estimate
   $$\widehat c:=\sum_{j:\sigma_j>0}g(\sigma_j)\langle y,u_j\rangle v_j,$$
   where $\langle z,w\rangle=\sum_\ell z_\ell\overline{w_\ell}$ is linear in its first argument. Return the piecewise-constant reconstruction $\widehat q:=\sum_{n=1}^{N}\widehat c_n1_{E_n}$ after exactly one filter application.
3. Compute the finite data residual $R:=\|F\widehat c-y\|_2$, where $\|z\|_2=(\sum_\ell|z_\ell|^2)^{1/2}$. Return status **discrepancy** when $R\le\delta$, and **residual-above-threshold** when $R>\delta$; in either case also return $\widehat q$, $R$, and the application count $1$.

This procedure only defines one filtered finite-dimensional Born reconstruction and a residual status. The residual is not an exact-range test for an infinite-dimensional compact forward operator and does not establish a nonlinear solution, identifiability, stability, convergence, or correctness of the reconstructed contrast.

## Definition references

[[def-ip-fixed-frequency-far-field-data|The linearized far-field samples are $\widehat q(k(\theta-d)/(2\pi))/(4\pi)$.]]

[[lem-ip-born-linearization-of-the-scattering-map|The first Born family is the local Fréchet derivative of the nonlinear scattering data at zero contrast.]]

[[def-truncated-singular-value-pseudoinverse-at-a-declared-threshold|The special filter $g_\tau$ is the finite-matrix truncated singular-value pseudoinverse.]]

[[thm-ip-picard-range-criterion-for-compact-operators|For a compact Hilbert-space map, exact range membership also requires orthogonality to the adjoint kernel and a finite Picard sum.]]

[[def-countable-choice|Countable Choice is the axiom branch of the contextual compact-operator Picard supplier.]]

[[def-fourier-transform-on-l-one-of-rn|The library Fourier transform uses the stated $2\pi$ normalization.]]
