---
id: lem-tgr-null-screen-quotient-positive
kind: lemma
title: The null screen quotient is a smooth positive two-plane
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: mathematics
dependency_level: 1
deps:
  - def-tgr-horizon-screen-family
  - def-gr-smooth-lorentzian-objects
  - thm-sylvesters-law-of-inertia
dependency_roles:
  def-tgr-horizon-screen-family: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  thm-sylvesters-law-of-inertia: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), complete 238-page lecture notes"
      url: https://arxiv.org/pdf/gr-qc/9712019
      locator: "Chapter 7, the null tetrad and its normalized null pair in equations (7.121)–(7.123), printed pp. 208–209 (PDF pp. 214–215); the local proof supplies the quotient argument."
    - title: "Robert M. Wald, The Thermodynamics of Black Holes, Living Reviews in Relativity 4 (2001), 6"
      url: https://arxiv.org/pdf/gr-qc/9912119
      locator: "Section 2, PDF pp. 3–5, on null hypersurfaces, their null generators and the regularity/completeness qualifications; the local linear-algebra proof is supplied here."
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Statement

Let $(\mathcal M,g,N)$ be a time-oriented smooth Lorentzian four-manifold, let $H\subset\mathcal M$ be a smooth null hypersurface, and let $k$ be a smooth affine null generator field on $H$, as defined in [[def-tgr-horizon-screen-family]]. Then the screen spaces
$$\mathcal S_p=k_p^\perp/\mathbb R k_p,\qquad p\in H,$$
form a smooth rank-two real vector bundle. The formula
$$\bar g_p([X],[Y]):=g_p(X,Y)$$
is independent of the representatives $X,Y\in k_p^\perp$ and defines a positive-definite inner product on each fiber. The screen deformation form $B([X],[Y])=g(\nabla_Xk,Y)$ is also independent of the representatives and is a smooth bilinear form on the screen bundle.

## Facts & Assumptions

**Given:** The time-oriented smooth Lorentzian four-manifold $(\mathcal M,g,N)$, the embedded null hypersurface $H$, and its smooth future-directed nowhere-zero affine null generator field $k$.

[F1] At each $p\in\mathcal M$, $(T_p\mathcal M,g_p)$ is a four-dimensional real vector space with a nondegenerate symmetric bilinear form of inertia $(3,1,0)$; $N_p$ is timelike; future null vectors satisfy $g_p(k_p,N_p)<0$. [[def-gr-smooth-lorentzian-objects]]

[F2] The screen space and candidate forms are the quotient and formulas of [[def-tgr-horizon-screen-family]]; in particular $k_p$ spans the radical of $g_p|_{T_pH}$, $k$ is smooth and nowhere zero, and $\nabla_k k=0$ along $H$.

[F3] The inertia of a real symmetric bilinear form is unchanged by a basis change, and inertia is additive for a block-diagonal matrix. [[thm-sylvesters-law-of-inertia]]

[F4] [[def-gr-smooth-lorentzian-objects]], Facts [F2], proves that $x^{1/2}$ is smooth on $(0,\infty)$ by iterating its derivative formula; composition with the positive smooth function $-g(N,N)$ therefore gives smooth $n=N/\sqrt{-g(N,N)}$.

[A1] The fields $g,N,k$ and the hypersurface $H$ have the smoothness stated in the Given data, and the screen form uses the metric-selected connection.

## Proof

1.1 Fix $p\in H$. Nondegeneracy of $g_p$ and $k_p\ne0$ imply that the linear functional $v\mapsto g_p(k_p,v)$ is nonzero, so choose $v\in T_p\mathcal M$ with $g_p(k_p,v)=-1$. In a neighborhood in $H$, set $n:=N/\sqrt{-g(N,N)}$ and $\alpha:=-g(k,n)>0$, so $n$ and $\alpha$ are smooth; define $v_0:=n/\alpha$ and $\ell:=v_0+\frac12g(v_0,v_0)k$. Then $g(k,\ell)=g(k,v_0)=-1$, and
$$g(\ell,\ell)=g(v_0,v_0)+g(v_0,v_0)g(v_0,k)+\frac14g(v_0,v_0)^2g(k,k)=0,$$
since $g(v_0,k)=-1$ and $g(k,k)=0$. This construction is smooth locally and gives a null field $\ell$ paired with $k$ by $-1$. [F1, F2, F4, A1, construct, algebra]

2.1 Let $P_p:=\operatorname{span}_{\mathbb R}\{k_p,\ell_p\}$. Its Gram matrix in the ordered basis $(k_p,\ell_p)$ is $\begin{pmatrix}0&-1\\-1&0\end{pmatrix}$, with determinant $-1$ and eigenvalues $1,-1$, so it is nondegenerate with inertia $(1,1,0)$. Therefore $T_p\mathcal M=P_p\oplus P_p^\perp$; in a basis adapted to this orthogonal direct sum, the Gram matrix is block diagonal. The full inertia is $(3,1,0)$ by [F1], so [F3] makes the restriction to the two-dimensional $P_p^\perp$ have inertia $(2,0,0)$, hence be positive definite. [F1, F3, step 1.1, algebra]

3.1 Every $X\in k_p^\perp$ has a unique decomposition $X=a k_p+b\ell_p+z$ with $z\in P_p^\perp$. Pairing with $k_p$ gives $0=g(k_p,X)=-b$, so $b=0$. Hence $k_p^\perp=\mathbb Rk_p\oplus P_p^\perp$, and the quotient map restricts to a linear isomorphism from $P_p^\perp$ to $\mathcal S_p$. Changing a representative by a multiple of $k_p$ does not change $g_p(X,Y)$ because every representative lies in $k_p^\perp$; under the isomorphism the quotient form is the positive-definite restriction to $P_p^\perp$ from step 2.1. This proves its dimension, well-definedness and positivity. [F1, F2, step 2.1, algebra]

4.1 The local fields $k,\ell$ are linearly independent and their $2\times2$ Gram matrix is invertible. Choose two smooth local vector fields $w_1,w_2$ whose values at $p$ complete them to a basis. Solving the two linear equations $g(k,e_i)=g(\ell,e_i)=0$ for the $k,\ell$ components of $w_i$ uses the inverse of that smooth invertible Gram matrix, so yields smooth fields $e_1,e_2\in P^\perp$; after shrinking the neighborhood they remain linearly independent and form a frame of $P^\perp$. By step 3.1 their quotient classes frame $\mathcal S$, so the quotient is a smooth rank-two vector bundle and $\bar g$ is a smooth positive-definite metric. Applying the two finite Gram–Schmidt operations to $e_1,e_2$ gives a local smooth $\bar g$-orthonormal screen frame: each denominator is the positive square root of a smooth positive squared norm, hence smooth by [F4]. [F1, F3, F4, step 3.1, construct, algebra]

5.1 The screen form is independent of representatives. Replacing $X$ by $X+f k$ changes $g(\nabla_Xk,Y)$ by $f g(\nabla_k k,Y)=0$ because $k$ is affine. Replacing $Y$ by $Y+h k$ changes it by $h g(\nabla_X k,k)=\frac h2 X(g(k,k))=0$, since $\nabla$ is metric-compatible and $k$ is null on $H$. Thus $B$ descends to a smooth bilinear form on $\mathcal S$; smoothness follows from its smooth local-frame components. [F2, step 4.1, given, algebra] ∎

## Remarks

The proof is pointwise Lorentzian linear algebra plus a local smooth construction. It does not assume a global null frame, a global screen basis, or any completeness property.

