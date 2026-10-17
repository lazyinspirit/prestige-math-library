---
id: lem-tgr-fluid-frame-projection
kind: lemma
title: "Eckart and local Landau frame construction"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 1
proof_strategy: direct
deps:
  - def-tgr-local-fluid-state
  - lem-gr-observer-projection-decomposition
  - thm-tdmath-local-implicit-rank
  - thm-gr-local-lorentz-tetrad-existence
  - def-countable-choice
dependency_roles:
  def-tgr-local-fluid-state: mathematical-premise
  lem-gr-observer-projection-decomposition: mathematical-premise
  thm-tdmath-local-implicit-rank: mathematical-premise
  thm-gr-local-lorentz-tetrad-existence: mathematical-premise
  def-countable-choice: mathematical-premise
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Éric Gourgoulhon, An Introduction to Relativistic Hydrodynamics, arXiv:gr-qc/0603009v1 (2006), §§4.1–4.2"
      url: "https://arxiv.org/pdf/gr-qc/0603009"
    - title: "Nicolas Borghini, Elements of Hydrodynamics, University of Bielefeld lecture notes (2015), §§IX.2 and IX.4.1–IX.4.2"
      url: "https://www.physik.uni-bielefeld.de/~borghini/Teaching/Hydrodynamics15/Hydrodynamics.pdf"
---

## Statement

Let $\mathcal V$ be a four-dimensional real vector space with Lorentz form $g$ of signature $(-,+,+,+)$ and a chosen future cone. Let $u$ be a future unit timelike vector, $g(u,u)=-1$, and define $\Delta^a{}_b=\delta^a{}_b+u^a u_b$ as in [[def-tgr-local-fluid-state]]. For every vector $J\in\mathcal V$ and symmetric contravariant rank-two tensor $\mathsf T$ on $\mathcal V$, the following statements hold.

1. The operator $\Delta$ is the $g$-orthogonal projection onto $u^\perp$, and
$$J^a=\nu_u u^a+V^a,\qquad \nu_u=-u_aJ^a,\qquad V^a=\Delta^a{}_bJ^b,$$
is the unique decomposition with $V\in u^\perp$.

2. With
$$\varepsilon_u=\mathsf T^{ab}u_a u_b,\quad Q^a=-\Delta^a{}_c\mathsf T^{cd}u_d,\quad P^{ab}=\Delta^a{}_c\Delta^b{}_d\mathsf T^{cd},$$
one has the unique decomposition
$$\mathsf T^{ab}=\varepsilon_u u^a u^b+u^aQ^b+Q^a u^b+P^{ab}.$$
The scalar $p_{\mathrm{mech}}=\tfrac13g_{ab}P^{ab}$ and tensor $\pi^{ab}=P^{ab}-p_{\mathrm{mech}}\Delta^{ab}$ satisfy $u_aQ^a=u_aP^{ab}=0$, $u_a\pi^{ab}=0$, and $g_{ab}\pi^{ab}=0$. Also, $Q=0$ if and only if $u$ is a timelike eigenvector of $\mathsf T^a{}_b$.

3. If $J$ is future timelike, then
$$u_E:=\frac{J}{\sqrt{-g(J,J)}}$$
is the unique future unit timelike frame with vanishing spatial number current; this is the Eckart frame for $J$.

4. Let $(M,g,N)$ be a time-oriented smooth Lorentzian four-manifold, let $O\subset M$ be open, and let $\mathsf T$ be a $C^1$ symmetric tensor field on $O$. At $x_0\in O$, choose a smooth future tetrad $(E_0,E_1,E_2,E_3)$ near $x_0$ as supplied by [[thm-gr-local-lorentz-tetrad-existence]], and put $u_0:=E_0(x_0)$ and $\Delta_0{}^a{}_b:=\delta^a{}_b+u_0^a(u_0)_b$. If
$$\mathsf T^{ab}(x_0)=\varepsilon_0 u_0^a u_0^b+p_0\Delta_0^{ab},\qquad h_0:=\varepsilon_0+p_0>0,$$
then there are a neighborhood $U\subset O$ of $x_0$ and a neighborhood $W$ of $u_0$ in the future unit timelike hyperboloid such that there is a unique $C^1$ future unit timelike field $u_L:U\to W$ with $Q_{u_L}=0$. This field is the local Landau frame. This is a local result; no far-from-equilibrium or global Landau-frame existence is asserted.

5. For every nonzero null $\ell$ and $\rho>0$, the tensor $\mathsf T^{ab}=\rho\ell^a\ell^b$ has no timelike eigenvector and hence no Landau frame.

## Facts & Assumptions

**Given:** The Lorentz vector space and future unit timelike vector in clauses 1–3, and the $C^1$ symmetric tensor field and pointwise perfect-fluid value in clause 4.

[F1] [[def-tgr-local-fluid-state]]: $\Delta^a{}_b=\delta^a{}_b+u^a u_b$; for a vector current, $\nu_u=-u_aJ^a$ and $V^a=\Delta^a{}_bJ^b$; for a symmetric tensor, $Q^a=-\Delta^a{}_c\mathsf T^{cd}u_d$ and $P^{ab}=\Delta^a{}_c\Delta^b{}_d\mathsf T^{cd}$.

[F2] [[thm-tdmath-local-implicit-rank]]: a $C^1$ map on an open Euclidean domain with an invertible derivative minor has a unique local $C^1$ graph of its zero set.

[F3] [[thm-gr-local-lorentz-tetrad-existence]]: every point of a time-oriented smooth Lorentzian four-manifold has a neighborhood carrying a smooth future-directed tetrad field.

[F4] [[lem-gr-observer-projection-decomposition]]: the orthogonal complement of a unit timelike observer is positive definite, and its spatial projection is the orthogonal projection onto that complement.

[A1] [[def-countable-choice]]: the local tetrad supplier uses only the library's $\mathrm{AC}_\omega$ tangent-bundle smooth-structure convention; no full axiom of choice is assumed.

## Proof

1.1 For every vector $X$, $u_a(\Delta X)^a=u_aX^a+(u_au^a)(u_bX^b)=0$ and $\Delta u=0$. If $X\in u^\perp$, then $\Delta X=X$. Hence $\operatorname{im}\Delta=u^\perp$, $\ker\Delta=\mathbb Ru$, and $\Delta^2=\Delta$. Also $g(\Delta X,Y)=g(X,Y)+g(X,u)g(u,Y)=g(X,\Delta Y)$ for all $X,Y$, so $\Delta$ is self-adjoint and is the orthogonal projection onto $u^\perp$. [given, F1, algebra]

1.2 Since $\delta^a{}_c=\Delta^a{}_c-u^a u_c$, expansion in both indices gives
$$\mathsf T^{ab}=\Delta^a{}_c\Delta^b{}_d\mathsf T^{cd}-u^a u_c\Delta^b{}_d\mathsf T^{cd}-\Delta^a{}_c\mathsf T^{cd}u_d\,u^b+u^a u^b u_cu_d\mathsf T^{cd}.$$
By the definitions this is the stated decomposition. Orthogonality of $Q$ and $P$ follows by $u_a\Delta^a{}_c=0$, so $\pi$ is spatial as well. Since $g_{ab}\Delta^{ab}=3$, the definition of $p_{\mathrm{mech}}$ gives $g_{ab}\pi^{ab}=0$. The component formulas recover $\varepsilon_u,Q,P$ from any such decomposition, so it is unique. [F1, algebra]

1.3 In the tetrad of [F3], identify symmetric tensors with $\mathbb R^{10}$ and write $T^A{}_B=\mathsf T^{AC}\eta_{CB}$. For $w\in B_1(0)\subset\mathbb R^3$, set $\gamma(w)=(1-|w|^2)^{-1/2}$, $u(w)=\gamma(w)(E_0+w^iE_i)$, and
$$\Phi_i(T,w):=T^i{}_Au^A(w)-w^iT^0{}_Au^A(w)\quad(i=1,2,3).$$
This is a smooth map on the open subset $\operatorname{Sym}^2(\mathbb R^4)\times B_1(0)\cong\mathbb R^{10}\times B_1(0)$ of $\mathbb R^{13}$, and $\Phi(T_0,0)=0$. At $T_0=\operatorname{diag}(\varepsilon_0,p_0,p_0,p_0)$ as a contravariant matrix, the mixed matrix is $\operatorname{diag}(-\varepsilon_0,p_0,p_0,p_0)$. Since $\partial_{w^j}u^0(0)=0$ and $\partial_{w^j}u^k(0)=\delta^k_j$, direct differentiation gives $\partial_{w^j}\Phi_i(T_0,0)=p_0\delta_{ij}+\varepsilon_0\delta_{ij}=h_0\delta_{ij}$. Thus $D_w\Phi(T_0,0)=h_0I_3$ is invertible by $h_0>0$. [F3, given, A1, algebra]

2.1 Put $\nu_u=-u\cdot J$. Then $J-\nu_u u=J+u(u\cdot J)=\Delta J=V$, and [step 1.1] shows $V\in u^\perp$. If $J=\nu u+W$ with $W\perp u$, contracting with $u$ forces $\nu=\nu_u$ and applying $\Delta$ forces $W=V$. [step 1.1, F1, algebra]

2.2 $Q=0$ is equivalent to $\Delta(\mathsf T^\sharp u)=0$, where $(\mathsf T^\sharp u)^a:=\mathsf T^{ab}u_b$. By [step 1.1], $\ker\Delta=\mathbb Ru$, so this holds exactly when $\mathsf T^a{}_b u^b$ is a scalar multiple of $u^a$, the timelike-eigenvector condition. [step 1.1, F1, algebra]

3.1 Apply [F2] with $q=3$ to $\Phi(T,w)=0$. The $3\times3$ minor in the $w$ variables is invertible, so the zero set is a unique local $C^1$ graph $w=\varphi(T)$. After shrinking the spacetime neighborhood, continuity of $\mathsf T(x)$ keeps its components in this graph's tensor neighborhood; $u_L(x):=u(\varphi(\mathsf T(x)))$ is a $C^1$ future unit timelike field. The equations $\Phi_i=0$ say that the spatial components of $\mathsf T^A{}_Bu^B$ equal $w^i$ times its time component, so $\mathsf T^A{}_Bu^B=\lambda u^A$ for a scalar $\lambda$. By step 2.2 this is equivalent to $Q_{u_L}=0$, and local graph uniqueness gives the claimed local uniqueness. [step 2.2, step 1.3, F2, algebra, construct]

3.2 Let $r:=\sqrt{-g(J,J)}>0$. Then $u_E=J/r$ is future unit timelike and $\Delta_{u_E}J=J+u_E(u_E\cdot J)=J+(J/r)(-r)=0$. Conversely, if a future unit timelike $u$ has $\Delta_uJ=0$, step 2.1 gives $J=\lambda u$ for a scalar $\lambda$. Since both $J$ and $u$ are future timelike, $\lambda>0$; hence $-g(J,J)=\lambda^2$ forces $\lambda=r$ and $u=u_E$. [given, step 2.1, F1, algebra]

4.1 If $g(\ell,u)=0$, then $\ell\in u^\perp$, and [F4] makes the restricted metric positive definite; since $g(\ell,\ell)=0$, this would force $\ell=0$. Therefore $g(\ell,u)\ne0$, so $\mathsf T^\sharp u=\rho\ell\,g(\ell,u)$ is a nonzero null vector. It cannot equal $\lambda u$ for any scalar $\lambda$: if $\lambda=0$ it is nonzero, and if $\lambda\ne0$ the right side is timelike while the left side is null. Thus no timelike eigenvector exists. [F4, given, algebra] ∎

