---
id: lem-qft-qed-coulomb-constraint
kind: lemma
title: Gauss multiplier and smooth periodic Coulomb solver
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 3
deps:
  - def-countable-choice
  - def-qft-qed-gauge-data
  - thm-fourier-basis-and-parseval-on-the-n-torus
dependency_roles:
  def-countable-choice: mathematical-premise
  def-qft-qed-gauge-data: mathematical-premise
  thm-fourier-basis-and-parseval-on-the-n-torus: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: David Tong, Quantum Field Theory, Chapter 6, §6.4
      url: https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S6.html
      locator: Complete author-hosted HTML chapter 6; Coulomb gauge and the Gauss-law constraint.
    - title: Mark Srednicki, Quantum Field Theory, author-hosted 2006 book draft, §55
      url: https://www.physics.ucsb.edu/~mark/ms-qft-DRAFT.pdf
      locator: Complete 616-page book draft; canonical Maxwell variables and Coulomb gauge.
---

## Statement

Assume Countable Choice and the conventions of [[def-qft-qed-gauge-data]]. On the periodic box $T_L^3=(\mathbb R/L\mathbb Z)^3$, take smooth real periodic charge and current densities $\rho,\mathbf J$, smooth periodic $\mathbf A,\dot{\mathbf A},\phi$, and $L,\epsilon_0,\mu_0>0$. Define the formal classical density
$$\mathcal L=\frac{\epsilon_0}{2}|\dot{\mathbf A}+\nabla\phi|^2-\frac1{2\mu_0}|\nabla\times\mathbf A|^2-\rho\phi+\mathbf J\cdot\mathbf A.$$
The canonical momenta are $\boldsymbol\pi_A=\epsilon_0(\dot{\mathbf A}+\nabla\phi)$ and $\pi_\phi=0$. Periodic integration by parts gives
$$H=\int_{T_L^3}\left(\frac{|\boldsymbol\pi_A|^2}{2\epsilon_0}+\frac{|\nabla\times\mathbf A|^2}{2\mu_0}
+\phi(\nabla\cdot\boldsymbol\pi_A+\rho)-\mathbf J\cdot\mathbf A\right)d^3x.$$
Variation of the multiplier $\phi$ imposes $\nabla\cdot\boldsymbol\pi_A+\rho=0$. In Coulomb gauge $\nabla\cdot\mathbf A=0$, this becomes $-\Delta\phi=\rho/\epsilon_0$. Such a smooth periodic solution exists only if $\int_{T_L^3}\rho\,d^3x=0$. If this neutrality condition holds, there is a unique zero-mean solution, with Fourier coefficients
$$\widehat\phi_0=0,\qquad
\widehat\phi_k=\frac{\widehat\rho_k}{\epsilon_0|2\pi k/L|^2}\quad(k\ne0),\qquad
\widehat\rho_k=L^{-3}\int_{[0,L]^3}\rho(x)e^{-2\pi i k\cdot x/L}\,d^3x.$$
It is smooth and satisfies
$$\frac{\epsilon_0}{2}\int|\nabla\phi|^2\,d^3x
=\frac12\int\rho\phi\,d^3x
=\frac{L^3}{2\epsilon_0}\sum_{k\ne0}\frac{|\widehat\rho_k|^2}{|2\pi k/L|^2}\ge0.$$
This is a classical conditional solver for smooth periodic neutral data; it makes no claim about quantum density products or nonperiodic boundary conditions.

## Facts & Assumptions

**Given:** Countable Choice; the positive SI parameters $\epsilon_0,\mu_0$; smooth periodic data; and the Fourier convention stated in the theorem.

[A1] The convention sets $\epsilon_0=(\mu_0c^2)^{-1}$ with positive symbolic SI constants. [[def-qft-qed-gauge-data]]

[F1] On the normalized torus, the Fourier characters form a complete orthonormal basis and Parseval holds; the theorem's torus measure is normalized to total mass one. [[thm-fourier-basis-and-parseval-on-the-n-torus]]

[A2] Assume Countable Choice. [[def-countable-choice]]

## Proof

**Given:** [A1], [F1], [A2], the smooth periodic data, and periodic boundary conditions.

1.1 Since the displayed density contains no $\dot\phi$, its canonical momentum is $\pi_\phi=\partial\mathcal L/\partial\dot\phi=0$. Differentiating with respect to $\dot{\mathbf A}$ gives $\boldsymbol\pi_A=\epsilon_0(\dot{\mathbf A}+\nabla\phi)$. The Legendre expression $\boldsymbol\pi_A\cdot\dot{\mathbf A}-\mathcal L$ equals
$$\frac{|\boldsymbol\pi_A|^2}{2\epsilon_0}-\boldsymbol\pi_A\cdot\nabla\phi+
\frac{|\nabla\times\mathbf A|^2}{2\mu_0}+\rho\phi-\mathbf J\cdot\mathbf A.$$
The periodic boundary has no surface term, and integrating $-\boldsymbol\pi_A\cdot\nabla\phi$ gives $\phi\,\nabla\cdot\boldsymbol\pi_A$. This yields the displayed $H$; varying the scalar multiplier gives the Gauss constraint. If $\nabla\cdot\mathbf A=0$, then $\nabla\cdot\boldsymbol\pi_A=\epsilon_0\Delta\phi$, so the constraint is $-\Delta\phi=\rho/\epsilon_0$. [A1, given, algebra]

1.2 Integrating this equation over the periodic box gives $0=L^{-3}\int(-\Delta\phi)\,d^3x=L^{-3}\epsilon_0^{-1}\int\rho\,d^3x$, since each periodic first derivative has equal boundary values on opposite faces. Thus neutrality is necessary. For neutral data, integrating $M$ times by parts in a coordinate with $|k_j|\ge|k|/\sqrt3$ gives $|\widehat\rho_k|\le C_M(1+|k|)^{-M}$ for every integer $M\ge0$; the same bound holds uniformly on compact time intervals when the data depend smoothly on time. Therefore the proposed coefficients for $\phi$ and every differentiated Fourier series are absolutely summable: division by $|2\pi k/L|^2$ costs only two powers and $M$ can be taken arbitrarily large. [given, algebra]

2.1 Under Countable Choice [A2], apply [F1] after rescaling $x=Ly$: the characters $e^{2\pi i k\cdot x/L}$ form a complete basis for $L^{-3}d^3x$. The coefficient formula then gives $|2\pi k/L|^2\widehat\phi_k=\widehat\rho_k/\epsilon_0$ for $k\ne0$ and the zero mode is zero. Absolute convergence from step 1.2 permits termwise differentiation to every order, so the resulting real smooth periodic $\phi$ solves $-\Delta\phi=\rho/\epsilon_0$. Reality follows from $\widehat\rho_{-k}=\overline{\widehat\rho_k}$. [A1, A2, F1, step 1.2, given]

2.2 If two zero-mean solutions existed, their difference $u$ would satisfy $-\Delta u=0$ and $\widehat u_0=0$. Parseval [F1] applied to its gradient gives $L^3\sum_{k\ne0}|2\pi k/L|^2|\widehat u_k|^2=0$, hence every coefficient vanishes; completeness then gives $u=0$. Parseval applied to $\nabla\phi$ and to $\rho,\phi$ yields
$$\int|\nabla\phi|^2=L^3\sum_{k\ne0}|2\pi k/L|^2|\widehat\phi_k|^2,\qquad
\int\rho\phi=L^3\sum_{k\ne0}\overline{\widehat\rho_k}\widehat\phi_k.$$
Substituting the coefficients from step 2.1 proves the displayed positive-energy identity. [A1, F1, step 2.1, given] ∎
