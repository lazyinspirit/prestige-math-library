---
id: ex-sigma-simple-lattice-zero
kind: example
title: "A simple zero of the Weierstrass sigma function on the square lattice"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-weierstrass-zeta-and-sigma-functions
  - thm-weierstrass-zeta-sigma-quasi-periodicity
  - def-complex-lattice-and-complex-torus
  - def-complex-exponential
  - thm-complex-exponential-addition-and-real-extension
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "NIST Digital Library of Mathematical Functions, §23.2 and §23.5"
      url: https://dlmf.nist.gov/23.2
      locator: "§23.2(ii)-(iii), equations (23.2.10)-(23.2.12): the zeta and sigma functions, their quasi-periods, and the simple zeros of sigma at the lattice points; §23.5(i): the residue 1 of zeta at each lattice point."
    - title: "J. S. Milne, Modular Functions and Modular Forms, Ch. 3, pp. 41-47"
      url: https://www.jmilne.org/math/CourseNotes/MF.pdf
      locator: "Ch. 3, the construction of sigma and its zeros along the lattice, printed pp. 44-46."
    - title: "C. T. McMullen, Advanced Complex Analysis, Math 213a course notes, Ch. 5 §5.1, pp. 79-90"
      url: https://people.math.harvard.edu/~ctm/home/text/class/harvard/213a/10/html/home/course/course.pdf
      locator: "Ch. 5 §5.1, the zeta and sigma functions and their transformation laws, printed pp. 84-88."
verification:
  precheck: pass
---

## Example

Let $\Lambda=\mathbb Z+i\mathbb Z$, with oriented basis $\omega_1=1$,
$\omega_2=i$, and let $\zeta=\zeta_\Lambda$, $\sigma=\sigma_\Lambda$ be the
Weierstrass zeta and sigma functions. Then
$\sigma(0)=\sigma(1)=0$, $\sigma'(0)=1$ and
$\sigma'(1)=-\exp(\eta_1/2)\neq0$ where $\eta_1=2\zeta(1/2)$: both zeros
of $\sigma$ at $0$ and at $1$ are simple. Moreover $\zeta$ has residue $1$ at
both points.

## Facts & Assumptions

**Given:** The square lattice $\Lambda=\mathbb Z+i\mathbb Z=\mathbb Z\omega_1+\mathbb Z\omega_2$ with $\omega_1=1$, $\omega_2=i$, its Weierstrass functions $\zeta=\zeta_\Lambda$ and $\sigma=\sigma_\Lambda$ ([[def-weierstrass-zeta-and-sigma-functions]]), and $\eta_1=2\zeta(\omega_1/2)=2\zeta(1/2)$.

[F1] $\Lambda=\mathbb Z\omega_1+\mathbb Z\omega_2$ is a full complex lattice with oriented basis $\omega_1=1$, $\omega_2=i$, and $\zeta,\sigma$ are its Weierstrass zeta and sigma functions ([[def-complex-lattice-and-complex-torus]], [[def-weierstrass-zeta-and-sigma-functions]]).

[F2] $\zeta$ is meromorphic on $\mathbb C$, holomorphic exactly on $\mathbb C\setminus\Lambda$, odd, and at every lattice point $\lambda\in\Lambda$ has a simple pole with principal part $(z-\lambda)^{-1}$ and residue $1$, with no other poles. $\sigma$ is entire and odd, its zero set is exactly $\Lambda$ and every zero is simple, $\sigma'(0)=1$, and $\sigma'(z)/\sigma(z)=\zeta(z)$ for $z\in\mathbb C\setminus\Lambda$. Moreover the quasi-period laws hold for all $z\in\mathbb C$ with poles matched: $\zeta(z+\omega_j)=\zeta(z)+\eta_j$ and $\sigma(z+\omega_j)=-\exp(\eta_j(z+\omega_j/2))\sigma(z)$ for $j=1,2$, where $\eta_j=2\zeta(\omega_j/2)$ ([[thm-weierstrass-zeta-sigma-quasi-periodicity]]).

[F4] The complex exponential satisfies $\exp(0)=1$ and $\exp(z+w)=\exp(z)\exp(w)$; consequently $\exp(z)\exp(-z)=1$ and $\exp(z)\neq0$ for every $z\in\mathbb C$ ([[def-complex-exponential]], [[thm-complex-exponential-addition-and-real-extension]]). Its defining series also proves continuity: for $|u|\le1$, $n!\ge2^{n-1}$ for $n\ge1$ gives $|\exp(u)-1|\le |u|\sum_{n\ge1}1/n!\le2|u|$. The addition law then gives $|\exp(v+u)-\exp(v)|\le2|\exp(v)|\,|u|$, so $\exp$ is continuous at every $v$.

## Verification

1.1 (Values at $0$.) Since $0\in\Lambda$, [F2] gives $\sigma(0)=0$ and $\sigma'(0)=1$, and the zero of $\sigma$ at $0$ is simple; also $\zeta$ has at $0$ a simple pole with residue $1$. [F1, F2]

1.2 (Residues of $\zeta$.) Both $0$ and $1$ lie in $\Lambda=\mathbb Z\omega_1+\mathbb Z\omega_2$; by [F2] the only poles of $\zeta$ are the lattice points and each is simple with residue $1$, so $\zeta$ has residue $1$ at $0$ and at $1$. [F1, F2]

2.1 ($\sigma(1)=0$.) Put $z=0$ in the sigma quasi-period law for $j=1$: $\omega_1=1$ and $\eta_1=2\zeta(1/2)$, so $\sigma(1)=-\exp(\eta_1\cdot\frac12)\sigma(0)=-\exp(\eta_1/2)\cdot0=0$. [F1, F2, step 1.1]

3.1 ($\sigma'(1)=-\exp(\eta_1/2)\ne0$.) For $u\ne0$ the quasi-period law and step 2.1 give [F2, step 2.1]
$$\frac{\sigma(1+u)-\sigma(1)}{u}=-\exp\!\bigl(\eta_1(u+1/2)\bigr)\frac{\sigma(u)-\sigma(0)}{u}.$$
As $u\to0$, the second factor tends to $\sigma'(0)=1$ by step 1.1, and the exponential tends to $\exp(\eta_1/2)$ by the continuity derived in [F4]. Thus $\sigma'(1)=-\exp(\eta_1/2)\ne0$ by [F4]; simplicity and the residue $1$ of $\zeta$ at $1$ also follow directly from [F2]. [F2, F4, step 1.1, step 2.1]

4.1 (Assembly.) Steps 1.1, 2.1 and 3.1 give $\sigma(0)=\sigma(1)=0$ with simple zeros, $\sigma'(0)=1$ and $\sigma'(1)=-\exp(\eta_1/2)\neq0$; step 1.2 gives residue $1$ of $\zeta$ at both points. This is the asserted statement. ∎

## Remarks

The whole example is a computation with the transformation law alone: the zero of $\sigma$ at the lattice point $1$ is inherited from the zero at $0$ through $\sigma(z+1)=-\exp(\eta_1(z+1/2))\sigma(z)$, and taking its difference quotient at $z=0$ gives the derivative at $1$, using continuity of the exponential from its defining series. The residue statement is the local form of $\zeta=\sigma'/\sigma$ at a simple zero of $\sigma$, which is how the normalization $\sigma'(0)=1$ enters. This is the concrete display of the lattice-zero convention used in [[thm-weierstrass-zeta-sigma-quasi-periodicity]].
