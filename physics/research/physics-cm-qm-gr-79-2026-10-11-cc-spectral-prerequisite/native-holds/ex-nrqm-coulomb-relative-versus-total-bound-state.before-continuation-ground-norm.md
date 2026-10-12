---
id: ex-nrqm-coulomb-relative-versus-total-bound-state
aliases: [nrqm-coulomb-example-relative-versus-total-bound-state]
kind: example
domain: mathematics
title: "Relative versus total bound state"
status: draft
origin: pipeline
dependency_level: 12
deps: [thm-nrqm-coulomb-two-body-reduced-mass, thm-nrqm-coulomb-laguerre-bound-energy-exhaustion, thm-nrqm-coulomb-transported-radial-endpoint-realization, lem-nrqm-composites-euclidean-l2-product-unitary, def-hilbert-space, def-l-p-space-as-a-quotient-by-null-functions, def-complex-lp-and-euclidean-test-function-conventions, cor-cauchy-schwarz-inequality-for-l-two, thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators, thm-plancherel, lem-weak-derivatives-are-polynomial-fourier-multipliers, def-countable-choice, def-axiom-of-choice]
dependency_roles:
  thm-nrqm-coulomb-two-body-reduced-mass: mathematical-premise
  thm-nrqm-coulomb-laguerre-bound-energy-exhaustion: mathematical-premise
  thm-nrqm-coulomb-transported-radial-endpoint-realization: mathematical-premise
  lem-nrqm-composites-euclidean-l2-product-unitary: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-l-p-space-as-a-quotient-by-null-functions: mathematical-premise
  def-complex-lp-and-euclidean-test-function-conventions: mathematical-premise
  cor-cauchy-schwarz-inequality-for-l-two: mathematical-premise
  thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators: mathematical-premise
  thm-plancherel: mathematical-premise
  lem-weak-derivatives-are-polynomial-fourier-multipliers: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Section 10.1 pp. 221-222 (the one-particle reduction -Laplacian - gamma/|x| with the nucleus fixed at the origin and sigma_ess = [0,infinity))"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics (Cappella Archive), Section 8.1 pp. 182-185 (centre-of-mass motion and the reduced mass in the two-body Coulomb model)"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
---

## Example

Assume the Axiom of Countable Choice and the Axiom of Choice
([[def-countable-choice]], [[def-axiom-of-choice]]). Let $m_1,m_2,\mu,M,\kappa,\hbar$
be as in [[thm-nrqm-coulomb-two-body-reduced-mass]], let $C_\mu$ and $T_R$ be
the relative and centre-of-mass kinetic operators there, let
$u_1\in L^2(\mathbb R^3_r)$ be the relative ground state with
$C_\mu u_1=E_1u_1$, where $E_1=-\frac{\mu\kappa^2}{2\hbar^2}$, and let
$\varphi\in C_c^\infty(\mathbb R^3_R;\mathbb C)$ be a nonzero centre-of-mass
test function. Consider the product vector
$$\Psi:=\varphi\otimes u_1\in L^2(\mathbb R^3_R)\widehat\otimes L^2(\mathbb R^3_r),$$
viewed as an element of $L^2(\mathbb R^6)$ through the identification of
[[lem-nrqm-composites-euclidean-l2-product-unitary]]. This example verifies
that:

(a) $(T_R\otimes I+I\otimes C_\mu)\Psi=E_1\Psi+(T_R\varphi)\otimes u_1$, and $T_R\varphi\ne0$, so $\Psi$ is not an eigenvector of the two-body operator;

(b) $\langle(T_R\otimes I+I\otimes C_\mu)\Psi,\Psi\rangle=E_1\|\varphi\|^2+\langle T_R\varphi,\varphi\rangle>E_1\|\varphi\|^2$: the product vector has energy strictly above the bottom $E_1$ of the two-body spectrum, and the bottom is not attained;

(c) the relative bound state $u_1$ is an eigenvector of the relative operator $C_\mu$, but the two-body operator has no eigenvalues at all ([[thm-nrqm-coulomb-two-body-reduced-mass]] (d)); the relative bound energy is a threshold of the continuous spectrum of the total operator, so "relative bound state" and "bound state of the two-body problem" are distinct notions.

## Verification

**Given:** the constants and operators $T_R,C_\mu,M,\mu,\kappa,\hbar$; the relative ground state $u_1$; the test function $\varphi$; the product vector $\Psi$.

**Proof technique:** direct computation with the tensor decomposition and the positivity of $T_R$.

[F1] $C_\mu u_1=E_1u_1$ with $E_1=-\frac{\mu\kappa^2}{2\hbar^2}$ and $\|u_1\|=1$, and $C_\mu\ge E_1$ on its form domain ([[thm-nrqm-coulomb-laguerre-bound-energy-exhaustion]], [[thm-nrqm-coulomb-transported-radial-endpoint-realization]]).

[F2] Tensor identities: $(A\otimes I)(u\otimes\varphi)=(Au)\otimes\varphi$ and $(I\otimes B)(u\otimes\varphi)=u\otimes(B\varphi)$ on the appropriate domains, and $\langle u\otimes\varphi,u'\otimes\varphi'\rangle=\langle u,u'\rangle\langle\varphi,\varphi'\rangle$ ([[lem-nrqm-composites-euclidean-l2-product-unitary]], [[def-hilbert-space]]).

[F3] $T_R\ge0$, $T_R\varphi\ne0$ for every nonzero $\varphi\in C_c^\infty(\mathbb R^3_R)$: if $T_R\varphi=0$, then the Fourier transform satisfies $\frac{4\pi^2\hbar^2}{2M}|\xi|^2\widehat\varphi(\xi)=0$ a.e., hence $\widehat\varphi=0$ a.e. off $|\xi|=0$, and since $\{0\}$ is null, $\varphi=0$ ([[thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators]], [[thm-plancherel]], [[lem-weak-derivatives-are-polynomial-fourier-multipliers]]).

[F4] Cauchy-Schwarz and sesquilinearity of the inner product for the displayed computations ([[cor-cauchy-schwarz-inequality-for-l-two]], [[def-l-p-space-as-a-quotient-by-null-functions]], [[def-complex-lp-and-euclidean-test-function-conventions]]).


1.1 [The product vector is not an eigenvector] By [F2], $(T_R\otimes I)\Psi=(T_R\varphi)\otimes u_1$ and $(I\otimes C_\mu)\Psi=\varphi\otimes(C_\mu u_1)=\varphi\otimes E_1u_1=E_1\Psi$ by [F1]; hence $(T_R\otimes I+I\otimes C_\mu)\Psi=E_1\Psi+(T_R\varphi)\otimes u_1$, and the difference from $E_1\Psi$ is $(T_R\varphi)\otimes u_1$. By [F3] $T_R\varphi\ne0$ and $u_1\ne0$, so this difference is nonzero: $\Psi$ is not an eigenvector at $E_1$. The full no-eigenvalue result [[thm-nrqm-coulomb-two-body-reduced-mass]] (d) also rules out every other energy, so $\Psi$ is not an eigenvector at any energy. This is (a). [F1, F2, F3, algebra]

2.1 [Energy strictly above the threshold] Taking pairings with $\Psi$ and using [F2] and [F1], $\langle(T_R\otimes I+I\otimes C_\mu)\Psi,\Psi\rangle=\|u_1\|^2\langle T_R\varphi,\varphi\rangle+\|u_1\|^2E_1\|\varphi\|^2=E_1\|\varphi\|^2+\langle T_R\varphi,\varphi\rangle$, and $\langle T_R\varphi,\varphi\rangle=\frac{4\pi^2\hbar^2}{2M}\int|\xi|^2|\widehat\varphi(\xi)|^2d\xi>0$ by [F3] applied to the nonzero function $\varphi$ (the integrand is nonnegative and not a.e. zero). Hence the energy of $\Psi$ is strictly larger than $E_1\|\Psi\|^2$, and since $\Psi/\|\Psi\|$ is a unit vector with energy $E_1+\langle T_R\varphi,\varphi\rangle/\|\varphi\|^2>E_1$, this vector lies strictly above the bottom $E_1$ of the spectrum; by the no-eigenvalue theorem of [[thm-nrqm-coulomb-two-body-reduced-mass]] (d) no nonzero vector at all attains $E_1$. This is (b). [step 1.1, F1, F2, F3, F4, algebra]

3.1 [Relative eigenvalue versus total spectrum] The relative vector $u_1$ is an eigenvector of $C_\mu$ at $E_1$ by [F1]; but by the actual no-eigenvalue theorem of [[thm-nrqm-coulomb-two-body-reduced-mass]] (d), no nonzero vector at all satisfies the two-body eigenvalue equation, and $E_1$ is the bottom of the continuous spectrum of the total operator. This is (c). [step 2.1, F1, algebra]

4.1 [Conclusion] Parts (a), (b), (c) are steps 1.1, 2.1 and 3.1. [step 1.1, step 2.1, step 3.1] ∎
