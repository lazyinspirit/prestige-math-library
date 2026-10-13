---
id: ex-nrqm-orbital-and-spin-example-orbital-core-commutators
aliases: [nrqm-orbital-and-spin-example-orbital-core-commutators]
kind: example
domain: mathematics
title: "Orbital core commutators"
status: published
origin: pipeline
dependency_level: 8
deps: [thm-nrqm-orbital-and-spin-orbital-self-adjoint-generators, thm-nrqm-orbital-and-spin-sphere-laplacian-diagonal-domain, thm-nrqm-orbital-and-spin-harmonic-polynomial-dimension, thm-nrqm-orbital-and-spin-associated-polynomial-normalization, thm-nrqm-orbital-and-spin-sphere-onb, lem-nrqm-orbital-and-spin-sphere-integral-in-angle-coordinates, prop-nrqm-orbital-and-spin-finite-spin-matrices, def-directional-and-partial-derivatives, def-laplacian-of-a-c2-function, thm-algebra-of-derivatives, thm-ftc-second-part, thm-sine-and-cosine-derivatives, def-sine-and-cosine-by-power-series, def-complex-exponential, def-inner-product-space, def-hilbert-space, cor-inner-product-induces-a-norm, def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis, thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces, def-l-p-space-as-a-quotient-by-null-functions, def-complex-lp-and-euclidean-test-function-conventions, def-countable-choice]
dependency_roles:
  thm-nrqm-orbital-and-spin-orbital-self-adjoint-generators: mathematical-premise
  thm-nrqm-orbital-and-spin-sphere-laplacian-diagonal-domain: mathematical-premise
  thm-nrqm-orbital-and-spin-harmonic-polynomial-dimension: mathematical-premise
  thm-nrqm-orbital-and-spin-associated-polynomial-normalization: mathematical-premise
  thm-nrqm-orbital-and-spin-sphere-onb: mathematical-premise
  lem-nrqm-orbital-and-spin-sphere-integral-in-angle-coordinates: mathematical-premise
  prop-nrqm-orbital-and-spin-finite-spin-matrices: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  def-laplacian-of-a-c2-function: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-ftc-second-part: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  def-sine-and-cosine-by-power-series: mathematical-premise
  def-complex-exponential: mathematical-premise
  def-inner-product-space: mathematical-premise
  def-hilbert-space: mathematical-premise
  cor-inner-product-induces-a-norm: mathematical-premise
  def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis: mathematical-premise
  thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces: mathematical-premise
  def-l-p-space-as-a-quotient-by-null-functions: mathematical-premise
  def-complex-lp-and-euclidean-test-function-conventions: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "MIT 8.05 Quantum Physics II (Fall 2013), Chapter 9 'Angular Momentum', §1.2 and §3 (the l = 1 angular-momentum matrices and the spherical harmonics Y(1,m) proportional to x, y, z)"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/e765f050b2fd50a9d87d2ae801e9c52f_MIT8_05F13_Chap_09.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Chapter 7, §7.2.3 and Table 7.1 (l = 1 spherical harmonics as coordinate functions), printed pp. 147-149, and §7.1 (eigenvalues of Jz and J2)"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
---

## Example

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Use the notation of
[[thm-nrqm-orbital-and-spin-orbital-self-adjoint-generators]]: $S^2=\{x\in\mathbb R^3:|x|=1\}$ with polar
measure $\sigma$, the Hilbert space $L^2(S^2,\sigma)$ with inner product linear in the first argument, the
operators $L_1,L_2,L_3$ with $L_\pm:=L_1\pm iL_2$, the finite span $H$, the blocks $V_l$, and the first-order
operators $D_i$, so that $L_i=-i\hbar D_i$ on $H$. Let $d:=\sqrt{3/(4\pi)}$ and, writing $\Omega=(\Omega_1,\Omega_2,\Omega_3)$ for the points of $S^2$ and restricting the coordinate polynomials,
$$v_1:=-\frac{d}{\sqrt2}(\Omega_1+i\Omega_2),\qquad v_0:=d\,\Omega_3,\qquad v_{-1}:=\frac{d}{\sqrt2}(\Omega_1-i\Omega_2)\in V_1 .$$
Then:

(a) $(v_1,v_0,v_{-1})$ is an orthonormal basis of $V_1$, and it is the degree-one part of the family
$(Y_{lm})$, in the sense that
$$v_m=Y_{1,m}\qquad (m\in\{1,0,-1\})$$
as elements of $L^2(S^2,\sigma)$ ([[thm-nrqm-orbital-and-spin-associated-polynomial-normalization]]);

(b) the core commutators hold on the whole three-dimensional space $V_1$:
$$L_3v_m=\hbar m\,v_m,\qquad L_+v_1=0,\qquad L_+v_0=\sqrt2\,\hbar\,v_1,\qquad L_+v_{-1}=\sqrt2\,\hbar\,v_0,$$
with $(L_-|_{V_1})=(L_+|_{V_1})^*$ (adjoint in the finite Hilbert space $V_1$) giving $L_-v_{-1}=0$, $L_-v_0=\sqrt2\hbar v_{-1}$, $L_-v_1=\sqrt2\hbar v_0$; and
$$[L_1,L_2]v=i\hbar\,L_3v,\qquad (L_1^2+L_2^2+L_3^2)v=2\hbar^2\,v\qquad (v\in V_1);$$

(c) the assignment $e_m\mapsto v_m$ ($m=-1,0,1$) is a unitary isomorphism of the spin-$1$ model
$(V_1^{\mathrm{spin}},J_x,J_y,J_z)$ of [[prop-nrqm-orbital-and-spin-finite-spin-matrices]] onto $V_1$ carrying
$J_i$ to $\hbar^{-1}L_i$ for $i=x,y,z$: the orbital degree-$1$ block is unitarily equivalent to the spin-$1$
block, and $L_1^2+L_2^2+L_3^2$ acts on $V_1$ as $\hbar^2A$, where $A$ is the diagonal sphere Laplacian of
[[thm-nrqm-orbital-and-spin-sphere-laplacian-diagonal-domain]] with $A|_{V_1}=2\,\mathrm{id}$.

All claims are finite-dimensional matrix computations inside $V_1$; no physical interpretation of the operators
as angular momentum of a particle is asserted.

## Facts & Assumptions

**Given:** the operators $L_1,L_2,L_3,L_\pm$ of the generators theorem, the functions $\Omega_i$, the number $d=\sqrt{3/(4\pi)}$, and the vectors $v_m$.

[F1] Generators theorem ([[thm-nrqm-orbital-and-spin-orbital-self-adjoint-generators]] (a),(b)): for $F\in V_l$ with representative $p_F$ one has $L_iF=\mathrm{res}_l(-i\hbar D_ip_F)$ with $D_ip=(x\times\nabla p)_i$, so $L_i$ maps $V_l$ into itself and $L_i=-i\hbar D_i$ on $H$; $L_1,L_2,L_3$ are self-adjoint and $L_iL_j-L_jL_i=i\hbar\sum_k\varepsilon_{ijk}L_k$ on $H$; and the everywhere-defined finite restrictions $A_i:=L_i|_{V_1}$ are Hermitian. Hence $A_\pm:=A_1\pm iA_2$ satisfy $A_-=(A_+)^*$ as operators on $V_1$: for $f,g\in V_1$, $\langle A_+f,g\rangle=\langle f,(A_1-iA_2)g\rangle$, since the inner product is first-variable linear. This is solely a finite-block adjoint identity, with no assertion about the full unbounded sum adjoint.

[F2] The $L^2$ inner products of the coordinate functions: integrating over $S^2$ in angle coordinates, $\int_{S^2}\Omega_1^2\,d\sigma=\int_0^\pi\int_0^{2\pi}\sin^2\theta\cos^2\varphi\,\sin\theta\,d\varphi\,d\theta=\pi\cdot\tfrac43=\tfrac{4\pi}3$ and likewise for $\Omega_2^2,\Omega_3^2$, while all mixed integrals vanish, since $\int_0^{2\pi}\cos\varphi\,d\varphi=\int_0^{2\pi}\sin\varphi\,d\varphi=\int_0^{2\pi}\sin\varphi\cos\varphi\,d\varphi=0$ and the $\theta$-integrals factor; hence $\langle\Omega_i,\Omega_j\rangle=\tfrac{4\pi}3\delta_{ij}$ ([[lem-nrqm-orbital-and-spin-sphere-integral-in-angle-coordinates]], [[thm-ftc-second-part]], [[thm-sine-and-cosine-derivatives]], [[def-sine-and-cosine-by-power-series]], [[def-complex-exponential]]).

[F3] The degree-one harmonics: $Y_{1,0}=b_{10}w_{10}(\cos\theta)/\sqrt{2\pi}$ with $P_1(t)=t$ and $w_{10}=P_1$, $b_{10}=(\int_{-1}^1t^2dt)^{-1/2}=\sqrt{3/2}$, so $Y_{1,0}=\sqrt{3/(4\pi)}\Omega_3$; and $Y_{1,1}=b_{11}w_{11}(\cos\theta)e^{i\varphi}/\sqrt{2\pi}$ with $w_{11}=-(1-t^2)^{1/2}$ and $b_{11}=(\int_{-1}^1(1-t^2)dt)^{-1/2}=\sqrt{3/4}$, so $Y_{1,1}=-\sqrt{3/(8\pi)}(\Omega_1+i\Omega_2)$; moreover $Y_{1,-1}=-Y_{1,1}$-conjugate: $Y_{1,-1}=(-1)^1\overline{Y_{1,1}}=\sqrt{3/(8\pi)}(\Omega_1-i\Omega_2)$, using $\Omega_1+i\Omega_2=\sin\theta e^{i\varphi}$ on $S^2$ ([[thm-nrqm-orbital-and-spin-associated-polynomial-normalization]] (a),(c), [[thm-ftc-second-part]], [[thm-sine-and-cosine-derivatives]], [[def-sine-and-cosine-by-power-series]], [[def-complex-exponential]]).

[F4] The space $V_1$ and the diagonal operator: $V_1$ consists of the classes of the restrictions of the linear polynomials $\Omega_i$, the restriction map on harmonic homogeneous polynomials of degree $1$ is a linear isomorphism onto $V_1$, and $AY_{1,m}=2Y_{1,m}$, so $A|_{V_1}=2\,\mathrm{id}$ ([[thm-nrqm-orbital-and-spin-harmonic-polynomial-dimension]] (b),(c), [[thm-nrqm-orbital-and-spin-sphere-laplacian-diagonal-domain]] (a), [[def-laplacian-of-a-c2-function]]).

[F5] Spin-one data ([[prop-nrqm-orbital-and-spin-finite-spin-matrices]]): in the basis $(e_m)_{m=1,0,-1}$ one has $J_ze_m=me_m$, $J_+e_1=0$, $J_+e_0=\sqrt2e_1$, $J_+e_{-1}=\sqrt2e_0$, $J_-=(J_+)^*$, and $J_x=\tfrac12(J_++J_-)$, $J_y=\tfrac1{2i}(J_+-J_-)$; the arrows $e_m\mapsto v_m$ with orthonormal domain and target bases are unitary ([F2], [[def-inner-product-space]], [[cor-inner-product-induces-a-norm]]).



## Verification

1.1 [(a) orthonormality and identification] By [F2], $\|v_0\|^2=d^2\tfrac{4\pi}3=1$, $\|v_{\pm1}\|^2=\tfrac{d^2}2(\tfrac{4\pi}3+\tfrac{4\pi}3)=1$, and $\langle v_1,v_0\rangle=\langle v_1,v_{-1}\rangle=\langle v_0,v_{-1}\rangle=0$; so the $v_m$ are orthonormal, and since $\dim V_1=3$ they form an orthonormal basis of $V_1$ ([F4]). Comparing with the displayed values of [F3]: $Y_{1,0}=d\Omega_3=v_0$, $Y_{1,1}=-\sqrt{3/(8\pi)}(\Omega_1+i\Omega_2)=-\tfrac{d}{\sqrt2}(\Omega_1+i\Omega_2)=v_1$ (because $\sqrt{3/(8\pi)}=d/\sqrt2$), and $Y_{1,-1}=+\tfrac{d}{\sqrt2}(\Omega_1-i\Omega_2)=v_{-1}$. [F2, F3, F4, algebra]

2.1 [(b) $L_3$ and ladder] Compute the polynomial actions with $D_1=x_2\partial_3-x_3\partial_2$, $D_2=x_3\partial_1-x_1\partial_3$, $D_3=x_1\partial_2-x_2\partial_1$ and [F1]: $D_3(\Omega_1\pm i\Omega_2)=\pm i(\Omega_1\pm i\Omega_2)$ (since $D_3\Omega_1=-\Omega_2$, $D_3\Omega_2=\Omega_1$), hence $L_3(\Omega_1\pm i\Omega_2)=\pm\hbar(\Omega_1\pm i\Omega_2)$ and, after the normalisation $v_{\pm1}=\mp\frac{d}{\sqrt2}(\Omega_1\pm i\Omega_2)$, $L_3v_1=\hbar v_1$, $L_3v_{-1}=-\hbar v_{-1}$, and $L_3v_0=0$; further $(D_1+iD_2)(\Omega_1+i\Omega_2)=0$, $(D_1+iD_2)\Omega_3=-i(\Omega_1+i\Omega_2)$, $(D_1+iD_2)(\Omega_1-i\Omega_2)=2i\Omega_3$, so $L_+=-i\hbar(D_1+iD_2)$ satisfies $L_+v_1=0$, $L_+v_0=-i\hbar\,d\,(-i(\Omega_1+i\Omega_2))=-\hbar d(\Omega_1+i\Omega_2)=\sqrt2\hbar v_1$, and $L_+v_{-1}=-i\hbar\,d\,\tfrac{2i}{\sqrt2}\Omega_3=\sqrt2\hbar\,d\,\Omega_3=\sqrt2\hbar v_0$; the relations for $L_-|_{V_1}=(L_+|_{V_1})^*$ follow by the finite-block adjunction of [F1]. [step 1.1, F1, algebra]

3.1 [(b) commutators on the core] With the same operators, $L_1x_1=0$, $L_1x_2=i\hbar x_3$, $L_1x_3=-i\hbar x_2$; $L_2x_1=-i\hbar x_3$, $L_2x_2=0$, $L_2x_3=i\hbar x_1$; $L_3x_1=i\hbar x_2$, $L_3x_2=-i\hbar x_1$, $L_3x_3=0$. Evaluating $L_1L_2-L_2L_1$ on $x_1,x_2,x_3$: since $L_2x_1=-i\hbar x_3$ and $L_1x_1=0$ one has $L_1L_2x_1=-i\hbar\,L_1x_3=-\hbar^2x_2$ and $L_2L_1x_1=0$, so $[L_1,L_2]x_1=-\hbar^2x_2=i\hbar(i\hbar x_2)=i\hbar L_3x_1$; $[L_1,L_2]x_2=+\hbar^2x_1=i\hbar L_3x_2$; and $[L_1,L_2]x_3=0=i\hbar L_3x_3$. Hence $[L_1,L_2]=i\hbar L_3$ on $V_1$, and cyclically for the other two pairs, consistent with [F1]. Likewise, squaring the displayed actions: $L_1^2x_1=0$, $L_2^2x_1=\hbar^2x_1$, $L_3^2x_1=\hbar^2x_1$; $L_1^2x_2=i\hbar\,L_1x_3=\hbar^2x_2$, $L_2^2x_2=0$, $L_3^2x_2=\hbar^2x_2$; $L_1^2x_3=\hbar^2x_3$, $L_2^2x_3=\hbar^2x_3$, $L_3^2x_3=0$; in each case the sum is $2\hbar^2x_i$, so $L_1^2+L_2^2+L_3^2=2\hbar^2\,\mathrm{id}$ on $V_1$, which equals $\hbar^2A|_{V_1}$ by [F4]. Alternatively the sum identity follows from the ladder relations of step 2.1 via $L_1^2+L_2^2=\tfrac12(L_+L_-+L_-L_+)$ and $L_1^2+L_2^2+L_3^2=2\hbar^2$ on each $v_m$. [step 1.1, F1, F4, algebra]

4.1 [(c) spin-one equivalence] By steps 1.1 and 2.1 the assignment $e_m\mapsto v_m$ matches the spin-one relations of [F5]: $J_ze_m=me_m$ with $L_3v_m=\hbar mv_m$, and $J_+e_1=0$, $J_+e_0=\sqrt2e_1$, $J_+e_{-1}=\sqrt2e_0$ with $L_+v_1=0$, $L_+v_0=\sqrt2\hbar v_1$, $L_+v_{-1}=\sqrt2\hbar v_0$; since both bases are orthonormal and $L_x=\tfrac12(L_++L_-)$, $L_y=\tfrac1{2i}(L_+-L_-)$ mirror $J_x,J_y$, the assignment is a unitary isomorphism carrying $J_i$ to $\hbar^{-1}L_i$ for $i=x,y,z$. The last assertion is step 3.1 with [F4]. [step 1.1, step 2.1, step 3.1, F4, F5, algebra] ∎
