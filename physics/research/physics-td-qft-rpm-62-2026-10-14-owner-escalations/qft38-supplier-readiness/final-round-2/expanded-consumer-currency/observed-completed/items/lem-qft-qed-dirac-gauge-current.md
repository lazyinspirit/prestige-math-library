---
id: lem-qft-qed-dirac-gauge-current
kind: lemma
title: Dirac gauge covariance, action and conserved current
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 3
deps:
  - def-countable-choice
  - def-qft-dirac-projections
  - def-qft-qed-gauge-data
  - lem-qft-free-action-equations
  - lem-smooth-bump-between-concentric-euclidean-balls
dependency_roles:
  def-countable-choice: mathematical-premise
  def-qft-dirac-projections: mathematical-premise
  def-qft-qed-gauge-data: mathematical-premise
  lem-qft-free-action-equations: mathematical-premise
  lem-smooth-bump-between-concentric-euclidean-balls: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: David Tong, Quantum Field Theory, Chapter 6, §§6.1 and 6.3.1
      url: https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S6.html
      locator: Complete author-hosted HTML chapter 6; QED gauge transformations, covariant derivative, Dirac action and current.
    - title: Mark Srednicki, Quantum Field Theory, author-hosted 2006 book draft, §§57–58
      url: https://www.physics.ucsb.edu/~mark/ms-qft-DRAFT.pdf
      locator: Complete 616-page book draft; QED covariant derivative and charged Dirac coupling. Its metric and charge conventions are translated explicitly here.
---

## Statement

Assume Countable Choice and use the conventions of [[def-qft-qed-gauge-data]]. Let $a_a$ be a smooth real potential and let $\psi:\mathbb R^4\to\mathbb C^4$ be a smooth commuting spinor. Use the symmetrized classical density
$$\mathcal L_D=\frac i2\{\bar\psi\gamma^aD_a\psi-(D_a\bar\psi)\gamma^a\psi\}-\mu\bar\psi\psi,\qquad
D_a\bar\psi=\partial_a\bar\psi+ig a_a\bar\psi.$$
For compactly supported smooth variations, its spinor Euler equation is $(i\gamma^aD_a-\mu)\psi=0$ and its adjoint. The density is invariant under the gauge transformation in [[def-qft-qed-gauge-data]]. On solutions,
$$\partial_a j^a=0,\qquad j^a=g\bar\psi\gamma^a\psi.$$
In SI variables the corresponding Hamiltonian density has the sign convention
$$\psi^\dagger\!\left[c\,\boldsymbol\alpha\cdot(-i\hbar\nabla-q\mathbf A)+\beta mc^2+q\phi\right]\psi.$$
These are conditional variational identities for smooth commuting classical fields. They assert no global existence theorem for the coupled field equations, no quantum current product, and no empirical measurement.

## Facts & Assumptions

**Given:** Countable Choice; the charged conventions in [[def-qft-qed-gauge-data]]; smooth commuting fields; compactly supported variations; and the free Dirac variation interface.

[A1] The normalized conventions give $D_a=\partial_a-iga_a$, $\mu=mc/\hbar$, $g=q\sqrt{\mu_0c/\hbar}$, and $A_a=(-\phi/c,\mathbf A)$ divided by $\sqrt{\mu_0\hbar c}$. [[def-qft-qed-gauge-data]]

[F1] For smooth commuting spinors, compact variations of the free density give the Euler equation $(i\gamma^a\partial_a-\mu)\psi=0$ through the displayed first variation; the supplier fixes $(\gamma^a)^\dagger\beta=\beta\gamma^a$. [[lem-qft-free-action-equations]]

[F2] The Clifford matrices satisfy $\gamma^0=\beta$, $\gamma^j=\beta\alpha_j$, and $\bar\psi=\psi^\dagger\beta$. [[def-qft-dirac-projections]]

[F3] The fixed matrix $\beta$ is Hermitian with $\beta^2=I_4$, and $(\gamma^a)^\dagger\beta=\beta\gamma^a$. [[def-qft-dirac-projections]]

[A2] Assume Countable Choice. [[def-countable-choice]]

[A3] All varied fields and gauge parameters are smooth, and variations have compact support.

[F4] Every open ball contains a nonnegative compactly supported smooth bump positive on a smaller ball. [[lem-smooth-bump-between-concentric-euclidean-balls]]

## Proof

**Given:** [A1], [F1], [F2], [A2], [A3], and the displayed charged density.

1.1 Under $a\mapsto a+\partial\alpha$ and $\psi\mapsto e^{ig\alpha}\psi$, the chain rule gives $D'_a\psi'=e^{ig\alpha}D_a\psi$; the conjugate equation gives $D'_a\bar\psi'=e^{-ig\alpha}D_a\bar\psi$. The two phases cancel in each term of $\mathcal L_D$, so the density is gauge invariant. The explicit Countable Choice assumption is [A2]. [A1, A2, A3, given, algebra]

1.2 Vary $\psi$ along a compactly supported complex $\chi$ and $\bar\psi$ along $\bar\chi$. Expanding the four kinetic terms and integrating the terms containing $D_a\chi$ or $D_a\bar\chi$ by parts gives
$$\delta S_D=2\operatorname{Re}\int_{\mathbb R^4}\chi^\dagger\beta R_D\,d^4x,
\qquad R_D=(i\gamma^aD_a-\mu)\psi.$$
For example, $\int\bar\psi\gamma^aD_a\chi=-\int(D_a\bar\psi)\gamma^a\chi$ and $-\int(D_a\bar\chi)\gamma^a\psi=\int\bar\chi\gamma^aD_a\psi$; compact support removes both boundary terms. The resulting variation is
$$i\int\bigl(\bar\chi\gamma^aD_a\psi-(D_a\bar\psi)\gamma^a\chi\bigr)d^4x-\mu\int(\bar\chi\psi+\bar\psi\chi)d^4x
=\int\bigl(\bar\chi R_D+\overline{\bar\chi R_D}\bigr)d^4x,$$
where the equality uses $(\gamma^a)^\dagger\beta=\beta\gamma^a$ from [F3]. If $R_D(x_0)\ne0$, continuity gives a ball where $|R_D|>0$; choose a bump $\rho$ from [F4] there and take $\chi=\rho\beta R_D$. Since $\beta^\dagger\beta=I_4$, this gives $\delta S_D=2\int\rho|R_D|^2d^4x>0$, contradicting stationarity. Thus stationarity is equivalent to $R_D=0$ pointwise, and taking the adjoint gives $-i(D_a\bar\psi)\gamma^a-\mu\bar\psi=0$. This is the charged version of the compact-variation identity in [F1]; the additional $a_a$ terms are smooth multiplication terms. [A1, A2, A3, F1, F3, F4, given, algebra]

2.1 Contract the first equation in step 1.2 on the left by $\bar\psi$ and the adjoint equation on the right by $\psi$. Subtracting cancels the equal mass terms and gives
$$i\bigl(\bar\psi\gamma^aD_a\psi+(D_a\bar\psi)\gamma^a\psi\bigr)=0.$$
The parenthesis equals $\partial_a(\bar\psi\gamma^a\psi)$ because the $+ig a_a\bar\psi$ and $-ig a_a\psi$ contributions cancel. Since $i\ne0$ and $g$ is constant, $\partial_a j^a=0$. [step 1.2, F2, given, algebra]

3.1 From [A1], $g/S_0=q/\hbar$, so $ga_j=qA_j/\hbar$ and $ga_0=-q\phi/(\hbar c)$; also $x^0=ct$ and $\mu=mc/\hbar$. With $\gamma^0=\beta$ and $\gamma^j=\beta\alpha_j$ [F2], multiply the equation in step 1.2 by $\beta$ and then by $\hbar c$. Collecting the time derivative gives
$$i\hbar\partial_t\psi=\left[c\boldsymbol\alpha\cdot(-i\hbar\nabla-q\mathbf A)+\beta mc^2+q\phi\right]\psi.$$
This verifies the stated minimal-coupling signs. [A1, F2, step 1.2, given, algebra] ∎
