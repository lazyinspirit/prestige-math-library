---
id: ex-periods-of-a-complex-torus
kind: example
title: Periods of a complex torus
status: draft
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
dependency_level: 26
deps:
  - def-complex-lattice-and-complex-torus
  - thm-complex-torus-quotient-is-well-defined
  - def-elliptic-function-for-a-lattice
  - def-period-pairing-and-period-lattice
  - def-path-integral-of-a-holomorphic-differential-on-a-riemann-surface
  - def-meromorphic-differential-on-a-riemann-surface
  - lem-holomorphic-differentials-form-a-g-dimensional-space
  - lem-period-pairing-is-well-defined-and-computed-by-integration
  - def-jacobian-of-a-compact-riemann-surface
  - def-abel-jacobi-map
  - lem-abel-jacobi-map-is-well-defined-and-base-point-independent
  - thm-abel-jacobi-embedding-positive-genus
  - cor-picard-zero-is-the-jacobian
  - def-genus-and-euler-characteristic-compact-riemann-surface
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Eduard Looijenga, Riemann Surfaces (2007 author lecture notes)"
      url: "https://webspace.science.uu.nl/~looij101/riemannsurfaces.pdf"
      locator: "Ch. 7 §2, Corollary 7.7 and Ch. 1 §2 for the complex torus: for genus one the point map is an isomorphism, printed pp. 9 and 61."
    - title: "Curtis T. McMullen, Riemann Surfaces, Harvard Math 213b course notes (2026)"
      url: "https://people.math.harvard.edu/~ctm/papers/home/text/class/harvard/213b/course/course.pdf"
      locator: "Ch. 15, the remark that for a complex torus the periods of a 1-form are its two generating periods and the meaning of the norm, printed pp. 129 and 136."
    - title: "Karl Otto Forster, Lectures on Riemann Surfaces, GTM 81, 4th corrected printing"
      url: "http://ronan.terpereau.perso.math.cnrs.fr/Master_Class_2023_Dijon/FORSTER_Lectures%20on%20Riemann%20Surfaces.pdf"
      locator: "Ch. 2 §20.8 (application to doubly periodic functions: the Abel condition $\\sum a_k\\equiv\\sum b_k$ mod $\\Gamma$), printed pp. 165-166."
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let
$\Lambda=\mathbb Z\omega_1+\mathbb Z\omega_2\subseteq\mathbb C$ be a full
lattice with oriented basis and let $X=\mathbb C/\Lambda$ be the associated
complex torus with quotient map $q:\mathbb C\to X$
([[def-complex-lattice-and-complex-torus]],
[[thm-complex-torus-quotient-is-well-defined]]). Then:

1. The translation-invariant differential $dz$ descends to a nowhere-vanishing
holomorphic differential on $X$; $\Omega(X)=\mathbb C\cdot dz$, so $X$ has genus
$1$, $\ell(K)=1$ and $\deg K=0$
([[lem-holomorphic-differentials-form-a-g-dimensional-space]],
[[def-elliptic-function-for-a-lattice]]).
2. With $\pi_1,\pi_2$ the loops $t\mapsto[t\omega_1]$, $t\mapsto[t\omega_2]$,
the periods of $dz$ are $P(\pi_1,dz)=\omega_1$ and $P(\pi_2,dz)=\omega_2$
([[def-period-pairing-and-period-lattice]],
[[def-path-integral-of-a-holomorphic-differential-on-a-riemann-surface]]).
Under the isomorphism $\Omega(X)^*\cong\mathbb C$,
$\alpha\mapsto\alpha(dz)$, the period lattice is exactly $\Lambda$, and
$$\operatorname{Jac}(X)=\mathbb C/\Lambda=X .$$
3. For every base point $p_0\in X$ the point Abel-Jacobi map
$u_{p_0}:X\to\operatorname{Jac}(X)=X$ is a biholomorphism, and for $D\in\operatorname{Div}^0(X)$
one has $u(D)=0$ if and only if $D$ is principal; equivalently
$\operatorname{Pic}^0(X)\cong X$ canonically
([[thm-abel-jacobi-embedding-positive-genus]],
[[cor-picard-zero-is-the-jacobian]]). In particular, for points $p,q\in X$ the
class of the divisor $(q)-(p)$ is the class of $q-p$ in $\mathbb C/\Lambda$.

## Facts & Assumptions

**Given:** Full AC, a full lattice $\Lambda=\mathbb Z\omega_1+\mathbb Z\omega_2$, the torus $X=\mathbb C/\Lambda$, and the loops $\pi_1,\pi_2$.

[F1] $X$ is a compact Riemann surface, the quotient map $q$ is a holomorphic covering, and the charts are local inverses of $q$ with translation transitions ([[thm-complex-torus-quotient-is-well-defined]], [[def-complex-lattice-and-complex-torus]]).

[F2] A holomorphic differential on $X$ is equivalently a $\Lambda$-invariant holomorphic differential $h(z)\,dz$ on $\mathbb C$; the differential $dz$ is invariant and nowhere vanishing, hence descends to a nowhere-vanishing holomorphic differential on $X$ ([[def-meromorphic-differential-on-a-riemann-surface]], [[def-elliptic-function-for-a-lattice]]).

[F3] If $\gamma$ is a closed loop in $X$ and $\widetilde\gamma:[0,1]\to\mathbb C$ is a lift, then $\int_\gamma dz=\widetilde\gamma(1)-\widetilde\gamma(0)\in\Lambda$: the integral of $dz$ along a path is the difference of the endpoint values of any lift, because $z$ is a primitive of $dz$ on $\mathbb C$ and $\Lambda$ is the group of deck translations. Conversely, for $\lambda\in\Lambda$ the projection of $t\mapsto t\lambda$ is a loop with $\int dz=\lambda$. Hence the period subgroup $e(H_1(X;\mathbb Z))$ equals $\Lambda$ ([[def-complex-lattice-and-complex-torus]], [[thm-complex-torus-quotient-is-well-defined]], [[def-path-integral-of-a-holomorphic-differential-on-a-riemann-surface]]).

[F4] For a compact connected Riemann surface of genus $g$, $\dim_{\mathbb C}\Omega(X)=g$ and a nonzero holomorphic differential has exactly $2g-2$ zeros counted with multiplicity ([[lem-holomorphic-differentials-form-a-g-dimensional-space]]).

[F5] The path integral of a holomorphic differential is computed by local primitives; for $dz$ on $\mathbb C$ a primitive is $z$, so the integral along a lifted path is the difference of its endpoints; the period pairing $P$ agrees with integration over cycles and is additive ([[def-path-integral-of-a-holomorphic-differential-on-a-riemann-surface]], [[def-period-pairing-and-period-lattice]], [[lem-period-pairing-is-well-defined-and-computed-by-integration]]).

[F6] The Jacobian is $\Omega(X)^*/\Lambda'$ with $\Lambda'=e(H_1(X;\mathbb Z))$, the Abel-Jacobi map is represented by path integrals modulo $\Lambda'$, and for $g=1$ it is a biholomorphism onto the Jacobian; $\operatorname{Pic}^0(X)\cong\operatorname{Jac}(X)$ canonically ([[def-jacobian-of-a-compact-riemann-surface]], [[def-abel-jacobi-map]], [[lem-abel-jacobi-map-is-well-defined-and-base-point-independent]], [[thm-abel-jacobi-embedding-positive-genus]], [[cor-picard-zero-is-the-jacobian]]).

[F7] Full AC is inherited from the Jacobian and classification interfaces; the example selects only the given lattice basis ([[def-axiom-of-choice]]).

## Verification

**Given:** The lattice, the torus and the two loops.

1.1 The translation action of $\Lambda$ on $\mathbb C$ leaves $dz$ invariant, so by [F2] $dz$ descends to a holomorphic differential on $X$, and it is nowhere vanishing because its local expressions are the constant coefficient $1$. Hence $\Omega(X)\neq0$, so $g\ge1$ by [F4], and since a nonzero holomorphic differential has exactly $2g-2$ zeros counted with multiplicity while $dz$ has none, $2g-2=0$ and $g=1$; then [F4] gives $\dim_{\mathbb C}\Omega(X)=1$ and, since $dz\ne0$, $\Omega(X)=\mathbb C\cdot dz$ with $(dz)=0$ of degree $0$; in particular $\ell(K)=1$ and $\deg K=0$. [F2, F4]

1.2 The loops $\pi_1,\pi_2$ lift to the paths $t\mapsto t\omega_1$ and $t\mapsto t\omega_2$ on $[0,1]$; by [F5] the path integral of $dz$ along $\pi_1$ is $\omega_1-0=\omega_1$ and along $\pi_2$ is $\omega_2$. By [F3] the period lattice is exactly $e(H_1(X;\mathbb Z))=\Lambda$; under $\Omega(X)^*\cong\mathbb C$, $\alpha\mapsto\alpha(dz)$, the periods $\omega_1,\omega_2$ of the two standard loops are therefore the two generators of $\Lambda$. Hence $\operatorname{Jac}(X)=\mathbb C/\Lambda=X$. [F3, F5]

2.1 By [F5] the point map sends $p=[z]$ to the class of the functional $\omega\mapsto\int_{p_0}^p\omega$; under the identification $\Omega(X)=\mathbb C\,dz$ of step 1.1 and $\operatorname{Jac}(X)=\mathbb C/\Lambda$ of step 1.2 this is the class of $z-z_0$, that is, $u_{p_0}(p)=p-p_0$ in the group $X$. Hence $u_{p_0}$ is the translation by $-p_0$, a biholomorphism. Consequently $u(D)=0$ for $D\in\operatorname{Div}^0(X)$ exactly when $\sum_p n_p(p-p_0)=0$ in $\mathbb C/\Lambda$, i.e. when the group sum of $D$ vanishes; by [F6] (Abel's criterion) this is exactly the condition that $D$ is principal, and $\operatorname{Pic}^0(X)\cong X$. For $D=(q)-(p)$ the class is $q-p$. [F1, F5, F6, step 1.1, step 1.2]

3.1 The four displayed claims are steps 1.1, 1.2 and 2.1, under the inherited AC of [F7]. [F7, step 1.1, step 1.2, step 2.1] ∎


## Source notes

Looijenga's Corollary 7.7 (*Riemann Surfaces*, printed p. 61) states that for
genus one the point map is an isomorphism, so that $S$ is isomorphic to a
complex torus; McMullen (printed pp. 129 and 136) records that the periods of a
one-form on a complex torus are its two generating periods. Forster's §20.8
(printed pp. 165-166) gives the doubly periodic Abel condition
$\sum a_k\equiv\sum b_k\pmod\Gamma$. The example spells out the invariant
differential, the two period vectors and the resulting identification
$\operatorname{Jac}(X)=X$.
