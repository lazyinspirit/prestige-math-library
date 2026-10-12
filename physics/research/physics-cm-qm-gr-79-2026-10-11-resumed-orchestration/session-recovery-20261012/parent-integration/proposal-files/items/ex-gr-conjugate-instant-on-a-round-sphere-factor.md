---
id: ex-gr-conjugate-instant-on-a-round-sphere-factor
kind: example
title: "An equator geodesic of the round-sphere factor: conjugate instant at distance pi with multiplicity one"
status: draft
origin: session
domain: mathematics
dependency_level: 14
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [ex-gr-curvature-of-a-product-with-a-round-sphere, def-gr-jacobi-field-and-conjugate-instant, thm-gr-jacobi-equation-and-geodesic-deviation, lem-gr-conjugacy-via-the-exponential-map, thm-gr-local-geodesics-and-exponential-map, def-gr-curvature-tensor-and-derived-tensors, def-gr-smooth-lorentzian-objects, def-gr-metric-selected-connection, thm-gr-nondegenerate-levi-civita-and-tensor-derivative, def-geodesic-of-an-affine-connection, def-covariant-derivative-along-a-curve, def-christoffel-symbols-of-an-affine-connection, thm-gr-curvature-algebraic-symmetries]
dependency_roles:
  ex-gr-curvature-of-a-product-with-a-round-sphere: mathematical-premise
  def-gr-jacobi-field-and-conjugate-instant: mathematical-premise
  thm-gr-jacobi-equation-and-geodesic-deviation: mathematical-premise
  lem-gr-conjugacy-via-the-exponential-map: mathematical-premise
  thm-gr-local-geodesics-and-exponential-map: mathematical-premise
  def-gr-curvature-tensor-and-derived-tensors: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  def-geodesic-of-an-affine-connection: mathematical-premise
  def-covariant-derivative-along-a-curve: mathematical-premise
  def-christoffel-symbols-of-an-affine-connection: mathematical-premise
  thm-gr-curvature-algebraic-symmetries: mathematical-premise
sources:
  references:
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), section 3.3.2: the equator geodesic of S^2, the Riemann component (3.38) and the geodesic deviation of neighbouring meridians, printed pp. 128-129 (PDF pp. 135-136)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
    - title: "E. Minguzzi, Lorentzian causality theory, Living Reviews in Relativity 22 (2019), section 6.1: conjugate points, the matrix of Jacobi fields with A(0)=0, nabla A(0)=Id and the characterization by the exponential map (Proposition 6.3 and following), printed pp. 159-161 (PDF pp. 159-161)"
      url: "https://link.springer.com/content/pdf/10.1007/s41114-019-0019-x.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 3: geodesic deviation and the failure of coordinates at conjugate points, printed pp. 86-88 (PDF pp. 93-95)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
verification:
  precheck: pass
---

## Example

On the open set $\Omega:=\{x\in\mathbb R^4:0<x^1<\pi\}$ with the identity chart
let $g=-(dx^0)^2+(dx^1)^2+\sin^2(x^1)(dx^2)^2+(dx^3)^2$ with time
orientation $N=\partial_0$, the metric of
[[ex-gr-curvature-of-a-product-with-a-round-sphere]], whose Christoffel
symbols and curvature are computed there. Write $\theta:=x^1$, $\varphi:=x^2$
and let $\nabla$ be the metric-selected connection. Fix
$$p:=(0,\tfrac{\pi}{2},\tfrac{\pi}{2},0),\qquad \gamma(s):=(0,\tfrac{\pi}{2},\tfrac{\pi}{2}+s,0),\qquad T:=\gamma'=\partial_2 .$$
Then:

1. $\gamma$ is a geodesic with affine parameter $s$ and unit spacelike
   tangent, $g(T,T)=\sin^2(\pi/2)=1$, and every Christoffel symbol of the
   chart vanishes along $\gamma$; hence the coordinate frame
   $\partial_0,\partial_1,\partial_2,\partial_3$ is parallel along $\gamma$.
2. The smooth field $J(s):=\sin(s)\,\partial_1|_{\gamma(s)}$ along $\gamma$ is
   a nonzero Jacobi field with $J(0)=J(\pi)=0$. Therefore $\pi$ is a
   conjugate instant of $\gamma$ relative to $0$
   ([[def-gr-jacobi-field-and-conjugate-instant]] clause (d)), and the events
   $p=\gamma(0)$ and $\gamma(\pi)=(0,\tfrac{\pi}{2},\tfrac{3\pi}{2},0)$ are
   distinct conjugate points of $\Omega$.
3. No $s_1\in(0,\pi)$ is a conjugate instant of $\gamma$ relative to $0$:
   the first conjugate instant is exactly $\pi$.
4. The conjugate instant $\pi$ has multiplicity $1$, and consistently
   $\ker d(\exp_p)_{\pi T(p)}$ is the one-dimensional subspace
   $\pi\,\mathbb R\,\partial_1|_p$ of $T_pM$
   ([[lem-gr-conjugacy-via-the-exponential-map]] clause (b)).

## Facts & Assumptions

**Given:** The metric $g=-\bigl(dx^0\bigr)^2+\bigl(dx^1\bigr)^2+\sin^2(x^1)\bigl(dx^2\bigr)^2+\bigl(dx^3\bigr)^2$ on $\Omega=\{0<x^1<\pi\}$, its metric-selected connection $\nabla$, the geodesic $\gamma(s)=(0,\pi/2,\pi/2+s,0)$ and the point $p=\gamma(0)$.

[L1] In this chart the only nonzero Christoffel symbols are $\Gamma^1{}_{22}=-\sin x^1\cos x^1$ and $\Gamma^2{}_{12}=\Gamma^2{}_{21}=\cot x^1$; the curvature satisfies $R_{1212}=\sin^2(x^1)$, $R(\partial_1,\partial_2)\partial_1=-\partial_2$, $R(\partial_1,\partial_2)\partial_2=\sin^2(x^1)\partial_1$, and every component containing an index $0$ or $3$ vanishes ([[ex-gr-curvature-of-a-product-with-a-round-sphere]] clauses 1-2).

[L2] A geodesic with affine parameter satisfies $D_s\gamma'=0$, and the covariant derivative along a curve is $D_sV^a=\partial_sV^a+\sum_{b,c}\Gamma^a{}_{bc}\dot\gamma^bV^c$ in a chart ([[def-geodesic-of-an-affine-connection]], [[def-covariant-derivative-along-a-curve]], [[def-christoffel-symbols-of-an-affine-connection]]).

[L3] A Jacobi field along a geodesic is a smooth field with $D_s^2J=R(T,J)T$, $T=\gamma'$; $s_1$ is a conjugate instant relative to $s_0$ when a nonzero Jacobi field vanishes at $s_0$ and $s_1$, and the multiplicity is the dimension of the space of such fields ([[def-gr-jacobi-field-and-conjugate-instant]] clauses (b)-(d), [[thm-gr-jacobi-equation-and-geodesic-deviation]] clause (b)).

[L4] The curvature is antisymmetric in its first two arguments, $R(X,Y)Z=-R(Y,X)Z$, and in its second pair, so in particular $R(\partial_2,\partial_1)\partial_2=-R(\partial_1,\partial_2)\partial_2$ ([[thm-gr-curvature-algebraic-symmetries]] clause (a), [[def-gr-curvature-tensor-and-derived-tensors]]).

[L5] For $v\in T_pM$ and $s_1>0$ with $s_1v$ in the exponential domain $\mathcal E_p$, $\ker d(\exp_p)_{s_1v}=s_1\{u\in T_pM:J_u(s_1)=0\}$, where $J_u$ is the Jacobi field along $t\mapsto\exp_p(tv)$ with $J_u(0)=0$, $D_tJ_u(0)=u$; this kernel is zero if and only if no nonzero Jacobi field along the geodesic vanishes at $0$ and $s_1$ ([[lem-gr-conjugacy-via-the-exponential-map]] clauses (a)-(b), [[thm-gr-local-geodesics-and-exponential-map]]).

## Verification

**Proof technique:** direct.

1.1 (The geodesic and its parallel frame.) Along $\gamma$ one has $x^1\equiv\pi/2$, so $\Gamma^1{}_{22}=-\sin(\pi/2)\cos(\pi/2)=0$ and $\Gamma^2{}_{12}=\cot(\pi/2)=0$; by [L1] every Christoffel symbol vanishes along $\gamma$. By [L2], $\nabla_{\partial_2}\partial_2=0$, so $D_sT=0$ and $\gamma$ is a geodesic with affine parameter $s$; likewise $D_s\partial_a=0$ for $a=0,1,2,3$, so the coordinate frame is parallel along $\gamma$ and $D_s$ is the componentwise derivative for fields written in this frame. Finally $g(T,T)=\sin^2(\pi/2)=1$. [L1, L2, algebra]

2.1 (The Jacobi field.) Let $J(s):=\sin(s)\,\partial_1|_{\gamma(s)}$. By step 1.1, $D_sJ=\cos(s)\,\partial_1$ and $D_s^2J=-\sin(s)\,\partial_1$. By [L1] and [L4], $R(T,J)T=\sin(s)\,R(\partial_2,\partial_1)\partial_2=-\sin(s)\,R(\partial_1,\partial_2)\partial_2=-\sin(s)\sin^2(\pi/2)\,\partial_1=-\sin(s)\,\partial_1$. Hence $D_s^2J=R(T,J)T$: $J$ is a Jacobi field by [L3]. It is nonzero (for instance $J(\pi/2)=\partial_1\neq0$) and $J(0)=J(\pi)=0$. [step 1.1, L1, L3, L4, algebra]

2.2 (The general Jacobi field and the first conjugate instant.) Let $K=a\partial_0+b\partial_1+c\partial_2+d\partial_3$ be a smooth field along $\gamma$. By step 1.1, $D_s^2K=a''\partial_0+b''\partial_1+c''\partial_2+d''\partial_3$, while $R(T,K)T=b\,R(\partial_2,\partial_1)\partial_2=-b\,\partial_1$ by [L1] and [L4]: the Jacobi equation is the system $a''=c''=d''=0$, $b''=-b$, with general solution $a=a_0+a_1s$, $b=b_0\cos s+b_1\sin s$, $c=c_0+c_1s$, $d=d_0+d_1s$. If $K(0)=0$ and $K(s_1)=0$ for some $s_1\in(0,\pi)$: the first condition gives $a_0=b_0=c_0=d_0=0$; the second gives $a_1=c_1=d_1=0$ and $b_1\sin s_1=0$, so $b_1=0$ because $\sin s_1\neq0$. Hence $K=0$: no instant in $(0,\pi)$ is conjugate to $0$, and the first conjugate instant of $\gamma$ is $\pi$. [step 1.1, L1, L3, L4, algebra]

3.1 (Conjugacy at $\pi$.) By step 2.1 and [L3], $\pi$ is a conjugate instant of $\gamma$ relative to $0$ with $p=\gamma(0)$ and $\gamma(\pi)=(0,\pi/2,3\pi/2,0)\neq p$: the two distinct points $p$ and $\gamma(\pi)$ of $\Omega$ are conjugate along $\gamma$. [step 2.1, L3, given]

4.1 (Multiplicity one and the kernel of the exponential differential.) By step 2.2, a Jacobi field with $K(0)=K(\pi)=0$ has $a_0=b_0=c_0=d_0=a_1=c_1=d_1=0$, hence is $K=b_1\sin s\,\partial_1$: the space of such fields is one-dimensional, so the multiplicity of the conjugate instant $\pi$ is $1$ by [L3]. For the kernel statement, let $v:=T(p)=\partial_2|_p$ and note that the geodesic $\tau\mapsto\exp_p(\tau\pi v)=\gamma(\tau\pi)$ exists for $\tau\in[0,1]$, so $\pi v\in\mathcal E_p$. By [L5], $\ker d(\exp_p)_{\pi v}=\pi\{u\in T_pM:J_u(\pi)=0\}$; solving the system of step 2.2 with initial data $J_u(0)=0$, $D_sJ_u(0)=u$ gives $J_u(s)=u_0s\,\partial_0+u_1\sin s\,\partial_1+u_2s\,\partial_2+u_3s\,\partial_3$ for $u=\sum_au_a\partial_a|_p$, so $J_u(\pi)=0$ if and only if $u_0=u_2=u_3=0$, that is $u\in\mathbb R\,\partial_1|_p$. Hence $\ker d(\exp_p)_{\pi v}=\pi\,\mathbb R\,\partial_1|_p$ is one-dimensional, in agreement with the multiplicity computed above. [step 2.2, L3, L5, algebra] ∎

## Remarks

- **Relation to the index-form results.** For every $s_1<\pi$ the segment
  $\gamma|_{[0,s_1]}$ has no conjugate instant, and $\pi$ is the first
  conjugate instant (step 2.2). This is the pattern of "no conjugate instant
  below a bound" that the index-form positivity and local-maximum results on
  the curvature page require in the timelike case; the example itself is
  spacelike, $g(T,T)=1$, so those statements, which assume $g(T,T)=-1$, are
  not applied to it.
- **Spacelike nature of the example.** The geodesic $\gamma$ is spacelike
  ($g(T,T)=1$); the conjugacy and multiplicity statements are those of the
  general definitions, which do not require a timelike geodesic, and no
  proper-time maximum claim is made here.
