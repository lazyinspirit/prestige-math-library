---
id: thm-harmonic-measure-is-well-defined
kind: theorem
title: "Existence and uniqueness of harmonic measure on a bounded regular plane domain"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
deps:
  - cor-uniqueness-for-the-bounded-plane-dirichlet-problem
  - def-barrier-and-regular-boundary-point
  - def-borel-sigma-algebra
  - def-complex-domain
  - def-dependent-choice
  - def-harmonic-measure-plane-domain
  - def-perron-envelope-for-the-plane-dirichlet-problem
  - def-perron-family-for-the-plane-dirichlet-problem
  - def-plane-harmonic-function
  - def-radon-measure-on-an-lch-space
  - lem-perron-family-is-nonempty-and-bounded
  - lem-positive-c-zero-functionals-have-finite-regular-representing-measures
  - thm-compactness-under-continuous-maps
  - thm-heine-borel-rn
  - thm-perron-envelope-is-harmonic
sources:
  references:
    - title: "Mikhail Lyubich, Dynamics of Quadratic Polynomials, Vol. I, Appendix 1, Sections 10.1-10.9"
      url: https://www.math.stonybrook.edu/~mlyubich/book.pdf
      locator: "Section 10.8, printed p. 171: harmonic measure representing continuous boundary data"
    - title: "Boris Khoruzhenko, LTCC Potential Theory lecture notes, Sections 4.1-4.2"
      url: https://maths.qmul.ac.uk/~boris/potential_th_notes.pdf
      locator: "Section 4.2, PDF pp. 37-39: existence and uniqueness of harmonic measure"
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
---

## Statement

Assume Dependent Choice, as required by the published positive
$C_0$ Riesz-Markov representation theorem
([[lem-positive-c-zero-functionals-have-finite-regular-representing-measures]],
[[def-dependent-choice]]). Then for every bounded regular plane domain
$\Omega$, in the sense of [[def-harmonic-measure-plane-domain]], and every
$z\in\Omega$ there is exactly one Radon Borel probability measure
$\omega_\Omega^z$ on $\partial\Omega$ with
$$H_\varphi(z)=\int_{\partial\Omega}\varphi\,d\omega_\Omega^z$$
for every real continuous $\varphi:\partial\Omega\to\mathbb R$. Moreover, for
each such $\varphi$ the function
$z\mapsto\int_{\partial\Omega}\varphi\,d\omega_\Omega^z=H_\varphi(z)$ is the
unique continuous extension to $\overline\Omega$ that is harmonic on $\Omega$
and agrees with $\varphi$ on $\partial\Omega$.

## Facts & Assumptions

**Given:** A bounded complex domain $\Omega$ every boundary point of which is regular ([[def-complex-domain]], [[def-barrier-and-regular-boundary-point]], [[def-harmonic-measure-plane-domain]]) and a point $z\in\Omega$. Harmonicity is that of [[def-plane-harmonic-function]]; the Perron family and envelope are those of [[def-perron-family-for-the-plane-dirichlet-problem]] and [[def-perron-envelope-for-the-plane-dirichlet-problem]]; Radon measures are as in [[def-radon-measure-on-an-lch-space]].

[F1] The boundary $\partial\Omega$ is closed, hence compact because $\Omega$ is bounded, and carries the Borel sigma-algebra ([[thm-heine-borel-rn]], [[def-borel-sigma-algebra]]); the regularized Perron envelope $H_\varphi$ of every continuous datum is harmonic on $\Omega$ ([[thm-perron-envelope-is-harmonic]]), and at every regular boundary point $H_\varphi(w)\to\varphi(\zeta)$ as $w\to\zeta$ inside $\Omega$ ([[def-barrier-and-regular-boundary-point]]).

[F2] Two functions continuous on $\overline\Omega$ and harmonic on $\Omega$ with equal boundary values are equal ([[cor-uniqueness-for-the-bounded-plane-dirichlet-problem]]); the constant $0$ belongs to the Perron lower family of any datum $\varphi\ge0$, the envelope satisfies $U_\varphi\le\max_{\partial\Omega}\varphi$, and $U_\varphi\le H_\varphi$ ([[lem-perron-family-is-nonempty-and-bounded]], [[def-perron-envelope-for-the-plane-dirichlet-problem]]).

[F3] Assume Dependent Choice. For a locally compact Hausdorff space $X$ and a bounded positive linear $L:C_0(X;\mathbb R)\to\mathbb R$ there is a unique finite regular Borel measure $\mu$ with $L(f)=\int f\,d\mu$ and $\mu(X)=\|L\|$ ([[lem-positive-c-zero-functionals-have-finite-regular-representing-measures]]).

## Proof

**Proof technique:** direct.

1.1 For a continuous datum $\varphi$ define $L(\varphi):=H_\varphi(z)$. Each $H_\varphi$ is harmonic on $\Omega$ and has the boundary limit $\varphi$ at every boundary point by [F1], so the function equal to $H_\varphi$ on $\Omega$ and to $\varphi$ on $\partial\Omega$ is continuous on $\overline\Omega$; by [F2] it is the unique continuous harmonic extension of $\varphi$. [F1, F2]

2.1 The map $L$ is linear: for real $\alpha,\beta$ and continuous $\varphi,\psi$ the function $\alpha H_\varphi+\beta H_\psi$ is harmonic on $\Omega$ and extends continuously to the boundary with values $\alpha\varphi+\beta\psi$, so it equals $H_{\alpha\varphi+\beta\psi}$ by the uniqueness in step 1.1, and evaluating at $z$ gives $L(\alpha\varphi+\beta\psi)=\alpha L(\varphi)+\beta L(\psi)$. [F1, step 1.1, algebra]

2.2 The map $L$ is positive and normalized: if $\varphi\ge0$ then the constant $0$ lies in the Perron family of $\varphi$ by [F2], so $U_\varphi\ge0$ and hence $H_\varphi\ge U_\varphi\ge0$; and $H_1=1$ because the constant function $1$ is a continuous harmonic extension of the boundary datum $1$, so it equals $H_1$ by step 1.1. Consequently $|L(\varphi)|\le\max_{\partial\Omega}|\varphi|$ for every continuous $\varphi$, by applying positivity to $\max|\varphi|-\varphi$ and $\max|\varphi|+\varphi$, and $\|L\|=1$. [F2, step 1.1, algebra]

3.1 The boundary $\partial\Omega$ is compact by [F1], hence a locally compact Hausdorff space on which every continuous function has compact support, so $C(\partial\Omega)=C_0(\partial\Omega)$; by [F3] and $\mathrm{DC}$ there is a unique finite regular Borel measure $\omega$ on $\partial\Omega$ with $L(\varphi)=\int_{\partial\Omega}\varphi\,d\omega$ for all continuous $\varphi$ and $\omega(\partial\Omega)=\|L\|=1$. [F1, F3, step 2.2]

4.1 The measure $\omega$ of step 3.1 is a Radon Borel probability measure representing every continuous boundary datum at $z$, so it is a harmonic measure for $\Omega$ at $z$ in the sense of the definition. If $\omega'$ were another one, then $\int\varphi\,d\omega'=H_\varphi(z)=L(\varphi)$ for every continuous $\varphi$, so $\omega'=\omega$ by the uniqueness in [F3]; hence the harmonic measure is unique. [F3, step 3.1, given]

5.1 Finally, for fixed continuous $\varphi$ the function $z\mapsto\int_{\partial\Omega}\varphi\,d\omega_\Omega^z$ coincides with $H_\varphi$ by the defining identity, so it is harmonic on $\Omega$ and has the boundary values $\varphi$; by step 1.1 it is the unique continuous harmonic extension. This is the only place where $\mathrm{DC}$ is used, through the representation theorem [F3]; the Perron input [F1] was used as a completed theorem. [F1, F3, step 1.1, step 4.1] ∎
