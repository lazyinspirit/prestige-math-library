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

Assume Countable Choice and the conventions of [[def-qft-qed-gauge-data]]. Let $I\subseteq\mathbb R$ be a nonempty open time interval, with $t$ measured in seconds and $x^0=ct$, and let $T_L^3=(\mathbb R/L\mathbb Z)^3$ be the flat spatial torus with period $L>0$ metres and periodic coordinates $\mathbf x$. Take jointly smooth periodic maps
$$\mathbf A:I\times T_L^3\to\mathbb R^3,\qquad \phi:I\times T_L^3\to\mathbb R,\qquad \rho:I\times T_L^3\to\mathbb R,\qquad \mathbf J:I\times T_L^3\to\mathbb R^3.$$
Write $\dot{\mathbf A}:=\partial_t\mathbf A$ for the time partial derivative at fixed $\mathbf x$, and $\mathbf B:=\nabla\times\mathbf A$. All spatial differential operators below are the periodic coordinate derivatives, and each displayed spatial integral and Hamiltonian is evaluated at a fixed $t\in I$; the time argument is suppressed in the formulas. In SI units, $\mathbf A$ has unit $\mathrm{T\,m}$, $\phi$ has unit $\mathrm V$, $\rho$ has unit $\mathrm{C\,m^{-3}}$, and $\mathbf J$ has unit $\mathrm{A\,m^{-2}}$. Thus $\dot{\mathbf A}$ and $\nabla\phi$ both have unit $\mathrm{V\,m^{-1}}=\mathrm{T\,m\,s^{-1}}$, and every term of the formal classical Lagrangian density has unit $\mathrm{J\,m^{-3}}$. Let $c>0$ have unit $\mathrm{m\,s^{-1}}$, let $\mu_0>0$ be the symbolic magnetic constant with unit $\mathrm{N\,A^{-2}}$, and put $\epsilon_0=(\mu_0c^2)^{-1}$ with unit $\mathrm{F\,m^{-1}}$; no numerical value for these constants is adopted. Define the formal classical density
$$\mathcal L=\frac{\epsilon_0}{2}|\dot{\mathbf A}+\nabla\phi|^2-\frac1{2\mu_0}|\nabla\times\mathbf A|^2-\rho\phi+\mathbf J\cdot\mathbf A.$$
The canonical momenta are $\boldsymbol\pi_A=\epsilon_0(\dot{\mathbf A}+\nabla\phi)$, with unit $\mathrm{C\,m^{-2}}$, and $\pi_\phi=0$. Periodic integration by parts gives the fixed-time Hamiltonian
$$H(t)=\int_{T_L^3}\left(\frac{|\boldsymbol\pi_A|^2}{2\epsilon_0}+\frac{|\mathbf B|^2}{2\mu_0}+\phi(\nabla\cdot\boldsymbol\pi_A+\rho)-\mathbf J\cdot\mathbf A\right)d^3\mathbf x.$$
Variation of the multiplier $\phi$ imposes $\nabla\cdot\boldsymbol\pi_A+\rho=0$. In Coulomb gauge $\nabla\cdot\mathbf A=0$, this becomes $-\Delta\phi=\rho/\epsilon_0$. At each fixed $t$, a smooth periodic solution can exist only if $\int_{T_L^3}\rho(\mathbf x,t)\,d^3\mathbf x=0$. If $\int_{T_L^3}\rho(\mathbf x,t)\,d^3\mathbf x=0$ for every $t\in I$, there is a unique jointly smooth periodic solution with zero spatial mean, whose Fourier coefficients are
$$\widehat\phi_0(t)=0,\qquad \widehat\phi_k(t)=\frac{\widehat\rho_k(t)}{\epsilon_0|2\pi k/L|^2}\quad(k\ne0),\qquad \widehat\rho_k(t)=L^{-3}\int_{[0,L]^3}\rho(\mathbf x,t)e^{-2\pi i k\cdot\mathbf x/L}\,d^3\mathbf x.$$
For every $t\in I$ it satisfies
$$\frac{\epsilon_0}{2}\int_{T_L^3}|\nabla\phi|^2\,d^3\mathbf x=\frac12\int_{T_L^3}\rho\phi\,d^3\mathbf x=\frac{L^3}{2\epsilon_0}\sum_{k\ne0}\frac{|\widehat\rho_k(t)|^2}{|2\pi k/L|^2}\ge0.$$
This is a classical conditional solver for smooth periodic neutral data; it makes no claim about quantum density products or nonperiodic boundary conditions.

## Facts & Assumptions

**Given:** Countable Choice; the positive symbolic SI constants and units stated in the theorem; jointly smooth periodic maps on $I\times T_L^3$; the fixed-time convention for $\dot{\mathbf A}$; and the Fourier convention stated in the theorem.

[A1] The convention sets $\epsilon_0=(\mu_0c^2)^{-1}$ with positive symbolic SI constants. [[def-qft-qed-gauge-data]]

[F1] On the normalized torus, the Fourier characters form a complete orthonormal basis and Parseval holds; the theorem's torus measure is normalized to total mass one. [[thm-fourier-basis-and-parseval-on-the-n-torus]]

[A2] Assume Countable Choice. [[def-countable-choice]]

## Proof

**Given:** [A1], [F1], [A2], the smooth periodic data, and periodic boundary conditions.

1.1 Since the displayed density contains no $\dot\phi$, its canonical momentum is $\pi_\phi=\partial\mathcal L/\partial\dot\phi=0$. Differentiating with respect to $\dot{\mathbf A}$ gives $\boldsymbol\pi_A=\epsilon_0(\dot{\mathbf A}+\nabla\phi)$. The Legendre expression $\boldsymbol\pi_A\cdot\dot{\mathbf A}-\mathcal L$ equals
$$\frac{|\boldsymbol\pi_A|^2}{2\epsilon_0}-\boldsymbol\pi_A\cdot\nabla\phi+ \frac{|\nabla\times\mathbf A|^2}{2\mu_0}+\rho\phi-\mathbf J\cdot\mathbf A.$$
The periodic boundary has no surface term, and integrating $-\boldsymbol\pi_A\cdot\nabla\phi$ gives $\phi\,\nabla\cdot\boldsymbol\pi_A$. This yields the displayed $H$; varying the scalar multiplier gives the Gauss constraint. If $\nabla\cdot\mathbf A=0$, then $\nabla\cdot\boldsymbol\pi_A=\epsilon_0\Delta\phi$, so the constraint is $-\Delta\phi=\rho/\epsilon_0$. [A1, given, algebra]

1.2 Integrating this equation over the periodic box at any fixed $t$ gives $0=L^{-3}\int(-\Delta\phi)\,d^3\mathbf x=L^{-3}\epsilon_0^{-1}\int\rho\,d^3\mathbf x$, since each periodic first derivative has equal boundary values on opposite faces. Thus neutrality is necessary at each time. For neutral data, fix a compact interval $K\subset I$ and integers $r,M\ge0$. Differentiating the Fourier coefficient under the integral gives $\partial_t^r\widehat\rho_k(t)=L^{-3}\int_{[0,L]^3}\partial_t^r\rho(\mathbf x,t)e^{-2\pi i k\cdot\mathbf x/L}\,d^3\mathbf x$. For $k\ne0$, repeated periodic integration by parts $M$ times in a coordinate $j$ with $|k_j|\ge|k|/\sqrt3$ gives $|\partial_t^r\widehat\rho_k(t)|\le C_{r,M,K}(1+|k|)^{-M}$ uniformly for $t\in K$; boundedness of the finitely many low modes is absorbed in the constant. Since $\widehat\phi_k=\widehat\rho_k/(\epsilon_0|2\pi k/L|^2)$ for $k\ne0$, a mixed derivative $\partial_t^r\partial_{\mathbf x}^{\alpha}$ of its Fourier series is bounded termwise on $K\times T_L^3$ by a constant times $|k|^{|\alpha|-M-2}$. Taking $M>|\alpha|+1$ makes this series absolutely and uniformly summable over $\mathbb Z^3\setminus\{0\}$. Thus every mixed derivative series converges uniformly on compact time intervals, and the Fourier construction is jointly smooth. [given, algebra]

2.1 Under Countable Choice [A2], apply [F1] after rescaling $\mathbf x=L\mathbf y$: the characters $e^{2\pi i k\cdot\mathbf x/L}$ form a complete basis for $L^{-3}d^3\mathbf x$. The coefficient formula then gives $|2\pi k/L|^2\widehat\phi_k(t)=\widehat\rho_k(t)/\epsilon_0$ for $k\ne0$ and the zero mode is zero. Step 1.2 permits termwise differentiation in space and time to every order, so the resulting real jointly smooth periodic $\phi$ solves $-\Delta\phi=\rho/\epsilon_0$ at every $t$. Reality follows from $\widehat\rho_{-k}(t)=\overline{\widehat\rho_k(t)}$. [A1, A2, F1, step 1.2, given]

3.1 At any fixed $t$, if two zero-mean solutions existed, their difference $u$ would satisfy $-\Delta u=0$ and $\widehat u_0=0$. Parseval [F1] applied to its gradient gives $L^3\sum_{k\ne0}|2\pi k/L|^2|\widehat u_k|^2=0$, hence every coefficient vanishes; completeness then gives $u=0$. Parseval applied to $\nabla\phi$ and to $\rho,\phi$ yields
$$\int|\nabla\phi|^2=L^3\sum_{k\ne0}|2\pi k/L|^2|\widehat\phi_k|^2,\qquad \int\rho\phi=L^3\sum_{k\ne0}\overline{\widehat\rho_k}\widehat\phi_k.$$
Substituting the coefficients from step 2.1 proves the displayed positive-energy identity. [A1, F1, step 2.1, given] ∎
