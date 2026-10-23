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
  - lem-fd-zero-trace-directional-poincare
dependency_roles:
  def-fd-projected-no-slip-stokes-space: mathematical-premise
  thm-fd-projected-stationary-stokes: mathematical-premise
  lem-fd-rectangular-test-divergence-inverse: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  lem-fd-zero-trace-directional-poincare: mathematical-premise
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

[F5] [[lem-fd-zero-trace-directional-poincare]]: on the stated domain, $\|v\|_2\le2R\|\nabla v\|_2$ for every $v\in H_0^1$.

[A1] A normalized smooth compact bump exists inside every nonempty interval; an affine rescaling of $e^{-1/(1-s^2)}$ on $|s|<1$, extended by zero, gives one after normalization.

## Proof

**Given:** Full AC, a finite rectangle $\Omega\subset(-R,R)^d$, $\mu>0$, and $f\in L^2$.

1.1 Apply [F3] to obtain the unique $u\in V$ and the stated variational identity and gradient bound. Define the vector functional $T=f+\mu\Delta u$ on vector tests by
$$\langle T,\psi\rangle=\int_\Omega f\cdot\psi\,dx-\mu\int_\Omega\nabla u:\nabla\psi\,dx.$$
It satisfies $|\langle T,\psi\rangle|\le(\|f\|_2+\mu\|\nabla u\|_2)\|\psi\|_{H^1}$. For each fixed compact support $K$, $\|\psi\|_{H^1}\le C_K p_{K,1}(\psi)$ componentwise, so $T$ is continuous on every $\mathcal D_K$ and hence belongs to $D'(\Omega;\mathbb R^d)$ with the stated inductive-limit topology. The variational identity shows that $T$ annihilates every compactly supported smooth divergence-free vector field, since each lies in $V$. [given, F1, F2, F3, algebra]

1.2 Each interval contains a central compact subinterval. Affinely rescale $b(s)=e^{-1/(1-s^2)}$ on $|s|<1$, extended by zero. Every derivative is the exponential times a finite sum of rational terms with poles of finite order at $|s|=1$, and the exponential tends to zero faster than every such power; thus the extension is smooth. Normalize its positive finite integral to fix interval bumps $\theta_i$, independently of all input tests and support sets, and set $\theta(x)=\prod_{i=1}^d\theta_i(x_i)$. Then $\theta\in C_c^\infty(\Omega)$ and $\int_\Omega\theta\,dx=1$. [given, A1, construct]

2.1 The existence and test-space continuity in [F4] alone assert no Sobolev estimate. Choose a particular inverse explicitly, and verify its needed properties locally. In dimension one set $\mathscr Rh(x)=\int_{a_1}^{x}h(s)\,ds$ for $\int h=0$. In dimension $d>1$, put $x'=(x_2,\ldots,x_d)$, $\Omega'=\prod_{i=2}^d(a_i,b_i)$ and $H(x')=\int_{a_1}^{b_1}h(s,x')\,ds$. Define recursively
$$(\mathscr Rh)_1(x_1,x')=\int_{a_1}^{x_1}\bigl(h(s,x')-\theta_1(s)H(x')\bigr)\,ds,\qquad (\mathscr Rh)_j(x_1,x')=\theta_1(x_1)(\mathscr R'H)_{j-1}(x')\quad(2\le j\le d),$$
where $\mathscr R'$ is the same construction on $\Omega'$ using $\theta_2,\ldots,\theta_d$. Smoothness and differentiation under these finite integrals follow from the smooth zero extension of the tests to a neighborhood of the closed box. Fubini gives $\int_{\Omega'}H=\int_\Omega h=0$. The first-component derivative is $h-\theta_1H$; the sum of the other divergence terms is $\theta_1H$ by induction, proving $\operatorname{div}(\mathscr Rh)=h$. If $h$ is supported in a fixed compact $K$, choose closed intervals inside each side containing its coordinate projection and $\operatorname{supp}\theta_i$. Their product contains every output support: the first primitive vanishes before this interval and after it because its full first-coordinate integral is zero, and the other components have this support by induction. For $p_m$ the supremum of derivatives of order at most $m$, $p_m(H)\le(b_1-a_1)p_m(h)$. Differentiating the displayed formula bounds each output derivative by a fixed bump-derivative constant times $p_m(h)$, a finite-integral length times that bound, or $p_m(\mathscr R'H)$. The one-dimensional primitive has $p_m(\mathscr Rh)\le\max(1,b_1-a_1)p_m(h)$; induction therefore gives $p_m(\mathscr Rh)\le C_{\Omega,m}p_m(h)$. All operations are linear. This proves that this chosen map has the right-inverse and support-continuity properties, without extracting a quantitative Sobolev estimate from [F4]. [given, F4, step 1.2, construct, algebra, induction]

3.1 For $\phi\in\mathcal D(\Omega)$ put $\phi_0=\phi-(\int_\Omega\phi\,dx)\theta$ and define $\langle p,\phi\rangle=-\langle T,\mathscr R\phi_0\rangle$. This is linear. For tests supported in fixed $K$, $\phi_0$ is supported in $K\cup\operatorname{supp}\theta$, and step 2.1 puts $\mathscr R\phi_0$ in a common compact support with every output seminorm bounded by input seminorms. Continuity of $T$ on that test space proves that $p$ is continuous on every $\mathcal D_K$, hence a distribution. Its construction gives $\langle p,\theta\rangle=0$. [given, step 1.1, step 1.2, step 2.1, construct]

4.1 Write $\ell_1=b_1-a_1$ and $Jg(x_1,x')=\int_{a_1}^{x_1}g(s,x')\,ds$. Cauchy–Schwarz and Fubini give $\|Jg\|_2\le\ell_1\|g\|_2$, $\partial_1Jg=g$ and $\partial_{x_j}Jg=J(\partial_{x_j}g)$ for $j>1$, hence $\|Jg\|_{H^1}\le\sqrt{1+\ell_1^2}\|g\|_{H^1}$. They also give $\|H\|_{H^1(\Omega')}\le\sqrt{\ell_1}\|h\|_{H^1(\Omega)}$. With $B_1^2=\|\theta_1\|_{L^2(a_1,b_1)}^2+\|\theta_1'\|_{L^2(a_1,b_1)}^2$, the product rule and Fubini give $\|\theta_1G\|_{H^1(\Omega)}\le B_1\|G\|_{H^1(\Omega')}$, also for vector $G$. Thus the first component in step 2.1 is bounded in $H^1$ by $\sqrt{1+\ell_1^2}(1+B_1\sqrt{\ell_1})\|h\|_{H^1}$; the other components together are bounded by $B_1\sqrt{\ell_1}C_{\Omega'}\|h\|_{H^1}$ if the inductive inverse bound is $C_{\Omega'}$. The one-dimensional primitive starts the induction, proving $\|\mathscr Rh\|_{H^1}\le C_\Omega\|h\|_{H^1}$ with a constant independent of the input support. Also $\|\phi_0\|_{H^1}\le(1+|\Omega|^{1/2}\|\theta\|_{H^1})\|\phi\|_{H^1}$, since $|\int_\Omega\phi|\le|\Omega|^{1/2}\|\phi\|_2$. Therefore
$|\langle p,\phi\rangle|\le C_\Omega(\|f\|_2+\mu\|\nabla u\|_2)\|\phi\|_{H^1}$. For any $H_0^1$ element choose smooth tests converging in $H^1$; this bound makes their pressure values Cauchy with the same limit for any such sequence. The resulting extension is a bounded linear functional on $H_0^1$, so $p\in H^{-1}$. [given, step 1.1, step 2.1, step 3.1, algebra, induction]

5.1 For compactly supported smooth vector $\psi$, $\int_\Omega\operatorname{div}\psi\,dx=0$. The field $\psi-\mathscr R(\operatorname{div}\psi)$ is divergence-free by step 2.1, so step 1.1 implies $\langle T,\mathscr R(\operatorname{div}\psi)\rangle=\langle T,\psi\rangle$. By the definition of distribution gradient,
$\langle\nabla p,\psi\rangle=-\langle p,\operatorname{div}\psi\rangle=\langle T,\psi\rangle$,
hence $\nabla p=T$ and $-\mu\Delta u+\nabla p=f$. If $p_1,p_2$ both work, then $\nabla(p_1-p_2)=0$. Every $h\in D_0(\Omega)$ is a divergence by [F4], so the real pairing convention gives $\langle p_1-p_2,h\rangle=0$. Decomposing any test as $\phi_0+(\int_\Omega\phi\,dx)\theta$ shows $p_1-p_2$ is constant. Uniqueness of the variational velocity in [F3] makes $f\mapsto u$ linear: any linear combination of two velocities solves the variational equation for the same combination of their forcings. With the bumps fixed, $T$ and the normalized $p$ are then linear in $f$ as well. By [F5] and [F3], $\|u\|_{H^1}\le\sqrt{1+4R^2}\,2R\|f\|_2/\mu$, while step 4.1 and [F3] give $\|[p]\|\le\|p\|_{H^{-1}}\le C_\Omega(1+2R)\|f\|_2$. These prove the bounded linear map into the stated product. [given, F3, F4, F5, step 1.1, step 1.2, step 2.1, step 3.1, step 4.1, algebra] ∎

