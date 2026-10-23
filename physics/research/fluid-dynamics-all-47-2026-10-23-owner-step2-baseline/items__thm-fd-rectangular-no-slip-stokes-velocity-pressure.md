---
id: thm-fd-rectangular-no-slip-stokes-velocity-pressure
kind: theorem
title: "Rectangular no-slip Stokes velocity and distribution pressure"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 3
deps:
  - def-fd-projected-no-slip-stokes-space
  - thm-fd-projected-stationary-stokes
  - lem-fd-rectangular-test-divergence-inverse
  - def-axiom-of-choice
dependency_roles:
  def-fd-projected-no-slip-stokes-space: mathematical-premise
  thm-fd-projected-stationary-stokes: mathematical-premise
  lem-fd-rectangular-test-divergence-inverse: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
physical_scope: null
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: "Martin Vohralík, A posteriori error estimates for efficiency and error control in numerical simulations, Course NM497 lecture notes (2010–2011)"
      url: "https://www.ljll.fr/MathModel/enseignement/polycopies/vohralik.pdf"
      locator: "Chapter 6 §6.1, PDF pp. 55–56: standard no-slip Stokes velocity-pressure formulation; its L² pressure relies on inf–sup, unlike the local H⁻¹ construction proved here."
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21%2112_02_01_AM.pdf"
      locator: "§2.3.6, Example 2.66, pp. 87–88; §5.3.1, pp. 233–237."
---

## Statement

Assume full AC. Let $d\ge2$, let $\Omega=\prod_{i=1}^d(a_i,b_i)\subset(-R,R)^d$ be a nonempty finite rectangle, let $\mu>0$, and let $f\in L^2(\Omega;\mathbb R^d)$. The projected variational theorem gives a unique $u\in V$ with $\mu\int\nabla u:\nabla v=\int f\cdot v$ for all $v\in V$ and $\|\nabla u\|_2\le2R\|f\|_2/\mu$. There is a distribution $p\in H^{-1}(\Omega):=(H_0^1(\Omega))'$ such that $-\mu\Delta u+\nabla p=f$ in $D'(\Omega;\mathbb R^d)$; it is unique modulo constant distributions. With the quotient norm on $H^{-1}/\mathbb R$, the map $f\mapsto(u,[p])$ is bounded and linear. The pressure is not asserted to lie in $L^2$ or to be smooth at rectangle corners.

## Statement references

[Martin Vohralík, A posteriori error estimates for efficiency and error control in numerical simulations, Course NM497 lecture notes (2010–2011)](https://www.ljll.fr/MathModel/enseignement/polycopies/vohralik.pdf).

[Theo Bühler and Dietmar Salamon, Functional Analysis](https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21%2112_02_01_AM.pdf).

## Facts & Assumptions

**Given:** The hypotheses stated in the formulation, including the explicitly adopted choice principle where indicated.

[F1] [[def-axiom-of-choice]]: full AC is assumed and supplies Countable Choice for the Sobolev and Hilbert suppliers.

[F2] [[def-fd-projected-no-slip-stokes-space]]: $V$ consists of divergence-free $H_0^1$ fields with the closure-based no-slip convention.

[F3] [[thm-fd-projected-stationary-stokes]]: for the stated bounded open domain, $\mu>0$, and $f\in L^2$, a unique variational velocity exists with the $2R/\mu$ gradient bound.

[F4] [[lem-fd-rectangular-test-divergence-inverse]]: on a finite rectangle, every compactly supported smooth scalar test of integral zero has a compactly supported smooth vector preimage under divergence, with fixed-support continuity.

[A1] A normalized smooth compact bump exists inside every nonempty interval; an affine rescaling of $e^{-1/(1-s^2)}$ on $|s|<1$, extended by zero, gives one after normalization.

## Proof

**Given:** Full AC, a finite rectangle $\Omega\subset(-R,R)^d$, $\mu>0$, and $f\in L^2$.

1.1 Apply [F3] to obtain the unique $u\in V$ and the stated variational identity and gradient bound. Define the vector distribution $T=f+\mu\Delta u$ by
$\langle T,\psi\rangle=\int f\cdot\psi-\mu\int\nabla u:\nabla\psi$.
The variational identity shows that $T$ annihilates every compactly supported smooth divergence-free vector field, since each lies in $V$. [given, F1, F2, F3, algebra]

2.1 Each interval contains a central compact subinterval. Affinely rescale $b(s)=e^{-1/(1-s^2)}$ on $|s|<1$, extended by zero. Every derivative is the exponential times a finite sum of rational terms with poles of finite order at $|s|=1$, and the exponential tends to zero faster than every such power; thus the extension is smooth. Normalize its positive finite integral and take the product to obtain $\theta\in C_c^\infty(\Omega)$ with $\int\theta=1$. For $\phi\in D(\Omega)$ put $\phi_0=\phi-(\int\phi)\theta$ and define $\langle p,\phi\rangle=-\langle T,R\phi_0\rangle$, using [F4]. This is linear; for tests with fixed compact support, $R\phi_0$ has fixed compact support and seminorms bounded by finitely many seminorms of $\phi$. Since $T$ is a distribution, $p$ is a distribution and $\langle p,\theta\rangle=0$. [given, A1, F4, step 1.1, construct]

3.1 Write $\ell_1=b_1-a_1$ and $Jg(x_1,x')=\int_{a_1}^{x_1}g(s,x')\,ds$. Cauchy–Schwarz and Fubini give $\|Jg\|_{L^2(\Omega)}\le\ell_1\|g\|_2$, $\partial_1Jg=g$, and $\|\partial_{x_j}Jg\|_2\le\ell_1\|\partial_{x_j}g\|_2$ for $j>1$. For the marginal $H(x')=\int_{a_1}^{b_1}h(s,x')ds$, they give $\|H\|_{H^1(\Omega')}\le\ell_1^{1/2}\|h\|_{H^1(\Omega)}$. Multiplication by the fixed smooth $\theta_1$ is bounded on $H^1$, by the product rule and boundedness of $\theta_1,\theta_1'$. Hence $\|h-\theta_1H\|_{H^1}\le C\|h\|_{H^1}$. Applying the bounds for $J$ to the first component in [F4], and the induction estimate $\|R'H\|_{H^1(\Omega')}\le C\|H\|_{H^1(\Omega')}$ to the remaining components $\theta_1R'H$, proves $\|Rh\|_{H^1}\le C_\Omega\|h\|_{H^1}$ by induction on $d$. Also $\phi_0=\phi-(\int\phi)\theta$ satisfies $\|\phi_0\|_{H^1}\le C_\Omega\|\phi\|_{H^1}$, since $|\int\phi|\le|\Omega|^{1/2}\|\phi\|_2$. Therefore
$|\langle p,\phi\rangle|\le C_\Omega(\|f\|_2+\mu\|\nabla u\|_2)\|\phi\|_{H^1}$. Density extends $p$ to $(H_0^1)'=H^{-1}$. [given, F3, F4, step 2.1, algebra, induction]

4.1 For compactly supported smooth vector $\psi$, $\int\operatorname{div}\psi=0$. The field $\psi-R(\operatorname{div}\psi)$ is divergence-free, so [F4] and step 1.1 imply $\langle T,R(\operatorname{div}\psi)\rangle=\langle T,\psi\rangle$. By the definition of distribution gradient,
$\langle\nabla p,\psi\rangle=-\langle p,\operatorname{div}\psi\rangle=\langle T,\psi\rangle$,
hence $\nabla p=T$ and $-\mu\Delta u+\nabla p=f$. If $p_1,p_2$ both work, their difference annihilates $D_0(\Omega)$ because every such test is a divergence by [F4]; decomposing any test as $\phi_0+(\int\phi)\theta$ shows $p_1-p_2$ is constant. The construction is linear in $f$ and the displayed bounds prove boundedness into the quotient. [given, F1, F3, F4, step 1.1, step 2.1, step 3.1, algebra] ∎

