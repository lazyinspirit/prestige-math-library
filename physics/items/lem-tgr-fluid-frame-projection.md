---
id: lem-tgr-fluid-frame-projection
kind: lemma
title: "Observer projections, pointwise Eckart vector and local C¹ Landau field"
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
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Éric Gourgoulhon, An Introduction to Relativistic Hydrodynamics, arXiv:gr-qc/0603009v1 (2006), §§4.1–4.2"
      url: "https://arxiv.org/pdf/gr-qc/0603009"
    - title: "Nicolas Borghini, Elements of Hydrodynamics, University of Bielefeld lecture notes (2015), §§IX.2 and IX.4.1–IX.4.2"
      url: "https://www.physik.uni-bielefeld.de/~borghini/Teaching/Hydrodynamics15/Hydrodynamics.pdf"
---

## Statement

Let $\mathcal V$ be a four-dimensional real vector space and let $g:\mathcal V\times\mathcal V\to\mathbb R$ be a symmetric nondegenerate bilinear form of signature $(-,+,+,+)$, meaning that in some basis its matrix is $\operatorname{diag}(-1,1,1,1)$. A vector $X$ is timelike when $g(X,X)<0$, and null when $X\ne0$ and $g(X,X)=0$. Choose one connected component $C^+$ of the timelike set $\{X:g(X,X)<0\}$ as the future cone; a timelike vector is future-directed when it belongs to $C^+$. Components and connectedness use the basis-independent finite-dimensional real vector-space topology. Lower indices with $g$ and raise them with its inverse, summing repeated upper/lower indices over $0,1,2,3$. Let $u\in C^+$ be unit timelike, $g(u,u)=-1$, and define $\Delta^a{}_b=\delta^a{}_b+u^a u_b$ as in [[def-tgr-local-fluid-state]]. For every vector $J\in\mathcal V$ and symmetric contravariant rank-two tensor $\mathsf T$ on $\mathcal V$, the following statements hold.

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
is the unique future unit timelike observer vector for which the spatial number current vanishes, $\Delta_{u_E}J=0$, where $\Delta_{u_E}{}^a{}_b:=\delta^a{}_b+u_E^a(u_E)_b$ is the clause-1 projection computed using $u_E$. Call $u_E$ the pointwise Eckart observer vector associated with $J$; it is a vector, not a chart or a tetrad.

4. Let $(M,g,N)$ be a time-oriented smooth Lorentzian four-manifold, let $O\subset M$ be open, and let $\mathsf T$ be a $C^1$ symmetric tensor field on $O$. At $x_0\in O$, choose an open neighborhood $O_0\subset O$ and a smooth future tetrad $(E_0,E_1,E_2,E_3)$ on $O_0$ as supplied by [[thm-gr-local-lorentz-tetrad-existence]], and put $u_0:=E_0(x_0)$ and $\Delta_0{}^a{}_b:=\delta^a{}_b+u_0^a(u_0)_b$. Define $\mathbb B^3:=\{w\in\mathbb R^3:\sum_{i=1}^3(w^i)^2<1\}$ and, for $x\in O_0$ and $w\in\mathbb B^3$, define
$$u(x,w):=(1-|w|^2)^{-1/2}\left(E_0(x)+\sum_{i=1}^3w^iE_i(x)\right)\in T_xM.$$
The tetrad equations make $u(x,w)$ future unit timelike. If
$$\mathsf T^{ab}(x_0)=\varepsilon_0 u_0^a u_0^b+p_0\Delta_0^{ab},\qquad h_0:=\varepsilon_0+p_0>0,$$
then there are a neighborhood $U\subset O_0$ of $x_0$ and an open neighborhood $W\subset\mathbb B^3$ of $0$ such that there is a unique $C^1$ map $w_L:U\to W$ for which $u_L(x):=u(x,w_L(x))$ satisfies $Q_{u_L(x)}(x)=0$ for every $x\in U$. Thus $u_L$ is a $C^1$ observer field, meaning a $C^1$ vector field whose values are future unit timelike; it is distinct from the chosen tetrad field and from any coordinate chart. This is a local result; no far-from-equilibrium or global Landau-field existence is asserted.

5. In a Lorentz vector space, for every nonzero null vector $\ell$ and $\rho>0$, the pointwise tensor $\mathsf T^{ab}=\rho\ell^a\ell^b$ has no timelike eigenvector. Hence no future unit timelike observer vector has $Q=0$ for this tensor, so no pointwise Landau observer vector exists.

## Facts & Assumptions

**Given:** The Lorentz vector space and future unit timelike vector in clauses 1–3, and for clause 4 the time-oriented smooth Lorentzian four-manifold, open sets, $C^1$ symmetric tensor field, chosen smooth future tetrad, and pointwise perfect-fluid value stated there.

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

1.3 In the chosen tetrad of [F3], identify symmetric contravariant tensors with the ten-dimensional vector space $\operatorname{Sym}^2(\mathbb R^4)$ and write $T^A{}_B=\mathsf T^{AC}\eta_{CB}$ for their mixed components. For $w\in\mathbb B^3$, put $\gamma(w)=(1-|w|^2)^{-1/2}$ and $\widehat u^A(w)=\gamma(w)(1,w^1,w^2,w^3)$, the tetrad components of $u(x,w)$ from clause 4, and define
$$\Phi_i(T,w):=T^i{}_A\widehat u^A(w)-w^iT^0{}_A\widehat u^A(w)\quad(i=1,2,3).$$
This is a smooth map on the open subset $\operatorname{Sym}^2(\mathbb R^4)\times\mathbb B^3\cong\mathbb R^{10}\times\mathbb B^3$ of $\mathbb R^{13}$, and $\Phi(T_0,0)=0$. At $T_0=\operatorname{diag}(\varepsilon_0,p_0,p_0,p_0)$ as a contravariant matrix, the mixed matrix is $\operatorname{diag}(-\varepsilon_0,p_0,p_0,p_0)$. Since $\partial_{w^j}\widehat u^0(0)=0$ and $\partial_{w^j}\widehat u^k(0)=\delta^k_j$, direct differentiation gives $\partial_{w^j}\Phi_i(T_0,0)=p_0\delta_{ij}+\varepsilon_0\delta_{ij}=h_0\delta_{ij}$. Thus $D_w\Phi(T_0,0)=h_0I_3$ is invertible by $h_0>0$. [F3, given, A1, algebra]

2.1 Put $\nu_u=-u\cdot J$. Then $J-\nu_u u=J+u(u\cdot J)=\Delta J=V$, and [step 1.1] shows $V\in u^\perp$. If $J=\nu u+W$ with $W\perp u$, contracting with $u$ forces $\nu=\nu_u$ and applying $\Delta$ forces $W=V$. [step 1.1, F1, algebra]

2.2 $Q=0$ is equivalent to $\Delta(\mathsf T^\sharp u)=0$, where $(\mathsf T^\sharp u)^a:=\mathsf T^{ab}u_b$. By [step 1.1], $\ker\Delta=\mathbb Ru$, so this holds exactly when $\mathsf T^a{}_b u^b$ is a scalar multiple of $u^a$, the timelike-eigenvector condition. [step 1.1, F1, algebra]

3.1 Apply [F2] with $q=3$ to $\Phi(T,w)=0$. The $3\times3$ minor in the $w$ variables is invertible by step 1.3, so near $(T_0,0)$ the zero set is a unique $C^1$ graph $w=\varphi(T)$. Choose an open ball $W\subset\mathbb B^3$ about $0$ within the graph neighborhood and shrink the tensor neighborhood so that $\varphi(T)\in W$. In the chosen tetrad, the component map $x\mapsto T^A{}_B(x)$ is $C^1$, because $\mathsf T$ is $C^1$ and the tetrad is smooth. Shrink to a neighborhood $U\subset O_0$ on which these components remain in that tensor neighborhood; then $w_L(x):=\varphi(T(x))$ is $C^1$, and $u_L(x):=u(x,w_L(x))$ is a $C^1$ future unit timelike field. The equations $\Phi_i(T(x),w_L(x))=0$ say that the spatial components of $\mathsf T^A{}_B(x)u_L^B(x)$ equal $w_L^i(x)$ times its time component, so $\mathsf T^A{}_B(x)u_L^B(x)=\lambda(x)u_L^A(x)$ for a scalar $\lambda(x)$. By step 2.2 this is equivalent to $Q_{u_L(x)}(x)=0$, and uniqueness of the local graph gives the claimed uniqueness of $w_L$. [step 2.2, step 1.3, F2, algebra, construct]

3.2 Let $r:=\sqrt{-g(J,J)}>0$. Then $u_E=J/r$ is future unit timelike and $\Delta_{u_E}J=J+u_E(u_E\cdot J)=J+(J/r)(-r)=0$. Conversely, if a future unit timelike $u$ has $\Delta_uJ=0$, step 2.1 gives $J=\lambda u$ for a scalar $\lambda$. Since both $J$ and $u$ are future timelike, $\lambda>0$; hence $-g(J,J)=\lambda^2$ forces $\lambda=r$ and $u=u_E$. [given, step 2.1, F1, algebra]

4.1 If $g(\ell,u)=0$, then $\ell\in u^\perp$, and [F4] makes the restricted metric positive definite; since $g(\ell,\ell)=0$, this would force $\ell=0$. Therefore $g(\ell,u)\ne0$, so $\mathsf T^\sharp u=\rho\ell\,g(\ell,u)$ is a nonzero null vector. It cannot equal $\lambda u$ for any scalar $\lambda$: if $\lambda=0$ it is nonzero, and if $\lambda\ne0$ the right side is timelike while the left side is null. Thus no timelike eigenvector exists. [F4, given, algebra] ∎

