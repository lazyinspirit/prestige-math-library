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

Assume full AC. Let $d\ge2$, $R>0$, and let $\Omega=\prod_{i=1}^d(a_i,b_i)\subset(-R,R)^d$ be a nonempty finite open rectangle. For $\alpha=(\alpha_1,\ldots,\alpha_d)\in\mathbb N_0^d$, write $|\alpha|=\sum_j\alpha_j$ and $\partial^\alpha=\partial_1^{\alpha_1}\cdots\partial_d^{\alpha_d}$. For each compact $K\subset\Omega$, let $\mathcal D_K(\Omega)=\{\phi\in C_c^\infty(\Omega;\mathbb R):\operatorname{supp}\phi\subseteq K\}$ with seminorms $p_{K,m}(\phi)=\max_{|\alpha|\le m}\sup_{x\in K}|\partial^\alpha\phi(x)|$, $m\in\mathbb N_0$. Give $\mathcal D(\Omega)=C_c^\infty(\Omega;\mathbb R)=\bigcup_{K\text{ compact},\ K\subset\Omega}\mathcal D_K(\Omega)$ the locally convex inductive-limit topology of these fixed-support test spaces. Give vector test fields the componentwise topology. A scalar or vector distribution is a continuous real-linear functional on the corresponding test space; write its bilinear real pairing as $\langle T,\phi\rangle$ or $\langle T,\psi\rangle$. For scalar distributions define $\langle\partial_jT,\phi\rangle=-\langle T,\partial_j\phi\rangle$. For a smooth vector field $\psi=(\psi_1,\ldots,\psi_d)$, set $\operatorname{div}\psi=\sum_j\partial_j\psi_j$ and $\langle\nabla p,\psi\rangle=-\langle p,\operatorname{div}\psi\rangle$. An $L^2$ vector field $f$ acts by $\langle f,\psi\rangle=\int_\Omega f\cdot\psi\,dx$, and for $u\in H_0^1$ define $\langle\Delta u,\psi\rangle=-\int_\Omega\nabla u:\nabla\psi\,dx$. Here, for $m=1$ or $m=d$, $H_0^1(\Omega;\mathbb R^m)$ is the closure of $C_c^\infty(\Omega;\mathbb R^m)$ in $\|v\|_{H^1}=(\int_\Omega(|v|^2+|\nabla v|^2)\,dx)^{1/2}$, where $(\nabla v)_{ij}=\partial_jv_i$ and $A:B=\sum_{i,j}A_{ij}B_{ij}$; $H^{-1}(\Omega)=(H_0^1(\Omega;\mathbb R))'$ is the continuous real dual of the scalar space with dual norm $\|p\|_{H^{-1}}=\sup_{\|\phi\|_{H^1}\le1}|\langle p,\phi\rangle|$. A constant distribution $c$ acts by $\langle c,\phi\rangle=c\int_\Omega\phi\,dx$; $\mathbb R\subset H^{-1}$ denotes this subspace, and $H^{-1}/\mathbb R$ has quotient norm $\|[p]\|=\inf_{c\in\mathbb R}\|p-c\|_{H^{-1}}$. Thus $D'(\Omega;\mathbb R^d)$ denotes the continuous real dual of the vector test space, and the equation below is an equality on every vector test field. Define $V=\{v\in H_0^1(\Omega;\mathbb R^d):\int_\Omega v\cdot\nabla\phi\,dx=0\text{ for every }\phi\in C_c^\infty(\Omega;\mathbb R)\}$, with the inherited $H^1$ norm.

Let $\mu>0$ and $f\in L^2(\Omega;\mathbb R^d)$. There is a unique $u\in V$ such that
$$\mu\int_\Omega\nabla u:\nabla v\,dx=\int_\Omega f\cdot v\,dx\qquad(v\in V),$$
and $\|\nabla u\|_2\le2R\|f\|_2/\mu$. There is a distribution $p\in H^{-1}(\Omega)$ such that $-\mu\Delta u+\nabla p=f$ in $D'(\Omega;\mathbb R^d)$; it is unique modulo constant distributions. With the quotient norm on $H^{-1}/\mathbb R$ and the product of the inherited $H^1$ norm on $V$ with that quotient norm, the map $f\mapsto(u,[p])$ into $V\times(H^{-1}/\mathbb R)$ is bounded and linear. The pressure is not asserted to lie in $L^2$ or to be smooth at rectangle corners.

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

1.1 Apply [F3] to obtain the unique $u\in V$ and the stated variational identity and gradient bound. Define the vector functional $T=f+\mu\Delta u$ on vector tests by
$$\langle T,\psi\rangle=\int_\Omega f\cdot\psi\,dx-\mu\int_\Omega\nabla u:\nabla\psi\,dx.$$
It satisfies $|\langle T,\psi\rangle|\le(\|f\|_2+\mu\|\nabla u\|_2)\|\psi\|_{H^1}$. For each fixed compact support $K$, $\|\psi\|_{H^1}\le C_K p_{K,1}(\psi)$ componentwise, so $T$ is continuous on every $\mathcal D_K$ and hence belongs to $D'(\Omega;\mathbb R^d)$ with the stated inductive-limit topology. The variational identity shows that $T$ annihilates every compactly supported smooth divergence-free vector field, since each lies in $V$. [given, F1, F2, F3, algebra]

2.1 Write $\mathscr R$ for the right inverse $R$ in [F4]. Each interval contains a central compact subinterval. Affinely rescale $b(s)=e^{-1/(1-s^2)}$ on $|s|<1$, extended by zero. Every derivative is the exponential times a finite sum of rational terms with poles of finite order at $|s|=1$, and the exponential tends to zero faster than every such power; thus the extension is smooth. Normalize its positive finite integral to obtain the interval bumps $\theta_i$ used in the recursive construction of [F4], and set $\theta(x)=\prod_{i=1}^d\theta_i(x_i)$. Then $\theta\in C_c^\infty(\Omega)$ and $\int_\Omega\theta\,dx=1$. For $\phi\in\mathcal D(\Omega)$ put $\phi_0=\phi-(\int_\Omega\phi\,dx)\theta$ and define $\langle p,\phi\rangle=-\langle T,\mathscr R\phi_0\rangle$, using [F4]. This is linear; for tests supported in fixed $K$, $\phi_0$ is supported in the fixed compact $K\cup\operatorname{supp}\theta$, and the fixed-support continuity of $\mathscr R$ makes $\mathscr R\phi_0$ supported in a fixed compact with every output seminorm controlled by finitely many input seminorms. Since $T$ is continuous on that output test space, $p$ is continuous on every $\mathcal D_K$ and hence is a distribution. Its construction also gives $\langle p,\theta\rangle=0$. [given, A1, F4, step 1.1, construct]

3.1 Write $\ell_1=b_1-a_1$, $\Omega'=\prod_{i=2}^d(a_i,b_i)$, and $Jg(x_1,x')=\int_{a_1}^{x_1}g(s,x')\,ds$. Cauchy–Schwarz and Fubini give $\|Jg\|_{L^2(\Omega)}\le\ell_1\|g\|_2$, $\partial_1Jg=g$, and $\|\partial_{x_j}Jg\|_2\le\ell_1\|\partial_{x_j}g\|_2$ for $j>1$. For the marginal $H(x')=\int_{a_1}^{b_1}h(s,x')\,ds$, they give $\|H\|_{H^1(\Omega')}\le\ell_1^{1/2}\|h\|_{H^1(\Omega)}$. Multiplication by the fixed smooth $\theta_1$ is bounded from $H^1(\Omega')$ to $H^1(\Omega)$ after viewing $\theta_1H$ as a function on $\Omega$, by the product rule and boundedness of $\theta_1,\theta_1'$. Hence $\|h-\theta_1H\|_{H^1(\Omega)}\le C\|h\|_{H^1(\Omega)}$. Applying the bounds for $J$ to the first component of the recursive $\mathscr R$ in [F4] gives an $H^1$ bound by $C\|h\|_{H^1}$. The remaining components are $\theta_1(x_1)(\mathscr R'H)(x')$; their $H^1(\Omega)$ norm is bounded by $C\|\mathscr R'H\|_{H^1(\Omega')}$. Starting with the one-dimensional bound for $J$ and applying this estimate inductively in the remaining dimensions proves $\|\mathscr Rh\|_{H^1(\Omega)}\le C_\Omega\|h\|_{H^1(\Omega)}$ for the explicit map in [F4]. Also $\phi_0=\phi-(\int_\Omega\phi\,dx)\theta$ satisfies $\|\phi_0\|_{H^1}\le C_\Omega\|\phi\|_{H^1}$, since $|\int_\Omega\phi\,dx|\le|\Omega|^{1/2}\|\phi\|_2$. Therefore
$|\langle p,\phi\rangle|\le C_\Omega(\|f\|_2+\mu\|\nabla u\|_2)\|\phi\|_{H^1}$. Density extends $p$ to $(H_0^1)'=H^{-1}$. [given, F3, F4, step 2.1, algebra, induction]

4.1 For compactly supported smooth vector $\psi$, $\int_\Omega\operatorname{div}\psi\,dx=0$. The field $\psi-\mathscr R(\operatorname{div}\psi)$ is divergence-free, so [F4] and step 1.1 imply $\langle T,\mathscr R(\operatorname{div}\psi)\rangle=\langle T,\psi\rangle$. By the definition of distribution gradient,
$\langle\nabla p,\psi\rangle=-\langle p,\operatorname{div}\psi\rangle=\langle T,\psi\rangle$,
hence $\nabla p=T$ and $-\mu\Delta u+\nabla p=f$. If $p_1,p_2$ both work, then $\nabla(p_1-p_2)=0$. For every $h\in D_0(\Omega)$, write $h=\operatorname{div}(\mathscr Rh)$ using [F4]; the real pairing convention gives $\langle p_1-p_2,h\rangle=-\langle\nabla(p_1-p_2),\mathscr Rh\rangle=0$. Decomposing any test as $\phi_0+(\int_\Omega\phi\,dx)\theta$ shows $p_1-p_2$ is constant. The construction is linear in $f$ and the displayed bounds prove boundedness into the quotient. [given, F1, F3, F4, step 1.1, step 2.1, step 3.1, algebra] ∎

