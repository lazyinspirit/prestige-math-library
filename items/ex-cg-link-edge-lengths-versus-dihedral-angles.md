---
id: ex-cg-link-edge-lengths-versus-dihedral-angles
kind: example
title: "Link edge lengths versus dihedral mirror angles in type I_2(m)"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-cg-spherical-gram-simplex-and-angular-link, def-cg-real-coxeter-form-and-reflection, lem-cg-reflection-form-invariance-and-rank-two-orders, def-finite-convex-cell-complex-and-linear-subdivision, def-principal-inverse-sine-and-cosine, thm-sine-cosine-signs-monotonicity-and-ranges, thm-sine-and-cosine-addition-formulas, thm-quarter-turn-values-and-shift-formulas, cor-pi-is-the-first-positive-sine-zero, cor-trigonometric-parity-and-pythagorean-identity, cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases, def-real-and-complex-inner-product-space, cor-inner-product-induces-a-norm, def-metric-space]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  scraped: []
  references:
    - title: "Martin R. Bridson and Andre Haefliger, Metric Spaces of Non-Positive Curvature (Springer Grundlehren 319, 1999; author-hosted PDF)"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/bridsonhaefligerx.pdf"
      locator: "I.5.6-5.10, printed pp. 59-62 (angular distance convention)"
    - title: "Michael W. Davis, The Geometry and Topology of Coxeter Groups (first-edition author manuscript, 2007-2008)"
      url: "https://people.math.osu.edu/davis.12/davisbook.pdf"
      locator: "Appendix I.2, printed pp. 505-507 (spherical links); Chapter 6, printed pp. 106-112 (Gram matrices of spherical simplices)"
dependency_level: 3
---

## Example

Let $m\ge2$ and let $P_m$ be the regular $2m$-gon in the Euclidean plane with centre the origin, circumradius $1$ and vertices $v_j=(\cos(j\pi/m),\sin(j\pi/m))$, $j=0,\dots,2m-1$, in cyclic order; regard $P_m$ as a compact convex polyhedral cell whose facets are its edges ([[def-finite-convex-cell-complex-and-linear-subdivision]]). Then:

(i) every interior angle of $P_m$ is $\pi-\pi/m$: the centre triangle on two adjacent vertices has apex angle $2\pi/(2m)=\pi/m$, hence base angles $(\pi-\pi/m)/2$, and the interior angle is twice that; consequently the angular link of a vertex ([[def-cg-spherical-gram-simplex-and-angular-link]]) is the arc from one incident edge direction to the other and its two endpoints have angular distance $\pi-\pi/m$;

(ii) the two inward unit normals of the edges through the vertex make angular distance $\pi-(\pi-\pi/m)=\pi/m$; equivalently the link edge angular distance is $\pi$ minus the angle between the two incident facets;

(iii) the canonical rank-two form of type $I_2(m)$ ([[def-cg-real-coxeter-form-and-reflection]], [[lem-cg-reflection-form-invariance-and-rank-two-orders]]) lives on $P=\mathbb Re_s+\mathbb Re_t$ with Gram matrix $\begin{pmatrix}1&-c\\-c&1\end{pmatrix}$, $c=\cos(\pi/m)$, which is positive definite; the mirror lines $H_s=\ker B(-,e_s)=\mathbb R(ce_s+e_t)$ and $H_t=\ker B(-,e_t)=\mathbb R(e_s+ce_t)$ satisfy
$$\frac{\lvert B(ce_s+e_t,\,e_s+ce_t)\rvert}{\sqrt{B(ce_s+e_t,ce_s+e_t)\,B(e_s+ce_t,e_s+ce_t)}}=\frac{c(1-c^2)}{1-c^2}=c=\cos(\pi/m),$$
so the mirrors meet at angle $\pi/m$, while the product $r_sr_t$ is a rotation of $(P,B)$ through $2\pi/m$ up to the choice of orientation;

(iv) the $2\times2$ Gram matrix of the vertex link (with vertices labelled by the two facets through the vertex) is $\begin{pmatrix}1&-\cos(\pi/m)\\-\cos(\pi/m)&1\end{pmatrix}$, because the link edge angular distance $\pi-\pi/m$ has cosine $\cos(\pi-\pi/m)=-\cos(\pi/m)=B(e_s,e_t)$; it is positive definite by the rank-two computation. Hence the link edge angular distance $\pi-\pi/m$ and the mirror angle $\pi/m$ are supplementary — their cosines are negatives of each other — and they are distinct for $m\ge3$, while for $m=2$ both equal $\pi/2$: they are not interchangeable.

## Facts & Assumptions

**Given:** An integer $m\ge2$ and the regular $2m$-gon $P_m$ with centre $0$, circumradius $1$, vertices $v_j$ in cyclic order and edges the segments $[v_j,v_{j+1}]$ ($j$ mod $2m$, with $v_{2m}=v_0$); the polygon is the convex hull of those vertices.

[F1] For a compact convex polyhedral cell $C$ and a nonempty face $F$ with inward unit facet normals $n_j$ and direction space $U(F)$, the tangent cone is $T_FC=\{\xi:\langle\xi,n_j\rangle\ge0\ (j\in I(F))\}$, the angular link is $\operatorname{Lk}_C(F)=T_FC\cap U(F)^{\perp}\cap S(V)$, the set of *all* unit inward directions at a point of the relative interior of $F$ is $T_FC\cap S(V)$, and the angular distance of unit directions is $d_{\mathrm{ang}}(\xi,\eta)=\arccos\langle\xi,\eta\rangle$; moreover $T_FC$ is the closure of $\{\lambda(x-p):x\in C,\lambda\ge0\}$ and, when $F$ is a vertex (the case used below), $U(F)=\{0\}$ so that the two sets coincide with $T_FC\cap S(V)$ ([[def-cg-spherical-gram-simplex-and-angular-link]]).

[F2] The unit circle $S(V)$ of a Euclidean plane consists of the unit vectors, and for unit vectors $\xi,\eta$ the angular distance is the number in $[0,\pi]$ whose cosine is $\langle\xi,\eta\rangle$; $\arccos$ is the inverse of $\cos$ restricted to $[0,\pi]$ ([[def-real-and-complex-inner-product-space]], [[cor-inner-product-induces-a-norm]], [[def-principal-inverse-sine-and-cosine]]).

[F3] $\cos(\pi-t)=-\cos t$ for every real $t$, and $\cos(2t)=\cos^2t-\sin^2t$ for every real $t$ ([[thm-quarter-turn-values-and-shift-formulas]], [[thm-sine-and-cosine-addition-formulas]]); cosine is strictly decreasing on $[0,\pi]$ ([[thm-sine-cosine-signs-monotonicity-and-ranges]]).

[F4] For the canonical rank-two form of type $I_2(m)$: $B(e_s,e_s)=1$, $B(e_s,e_t)=-\cos(\pi/m)$ on $P=\mathbb Re_s+\mathbb Re_t$, and $r_a(v)=v-\frac{2B(v,a)}{B(a,a)}a$ for $B(a,a)\ne0$ ([[def-cg-real-coxeter-form-and-reflection]]).

[F5] $B|_P$ has Gram matrix $\begin{pmatrix}1&-c\\-c&1\end{pmatrix}$ with $c=\cos(\pi/m)$ and is positive definite; each $r_a$ is linear, satisfies $r_a^2=\mathrm{id}$ and preserves $B$, so $A=r_sr_t$ preserves $B$; moreover $A$ has determinant $1$, trace $2\cos(2\pi/m)$, and satisfies $A^m=\mathrm{id}$, $A^k\ne\mathrm{id}$ for $0<k<m$ ([[lem-cg-reflection-form-invariance-and-rank-two-orders]]).

[F6] For $\sin(2\pi/m)$: $\sin x>0$ for $0<x<\pi$ ([[cor-pi-is-the-first-positive-sine-zero]]), and $\cos^2t+\sin^2t=1$ ([[cor-trigonometric-parity-and-pythagorean-identity]]); a finite-dimensional positive-definite inner-product space has an orthonormal basis ([[cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]]).



## Verification

1.1 Interior angle. Put $a=\pi/(2m)$. At $v_0=(1,0)$, the addition and double-angle formulas give $v_1-v_0=2\sin a(-\sin a,\cos a)$ and $v_{2m-1}-v_0=2\sin a(-\sin a,-\cos a)$. Since $\sin a>0$, the unit incident edge directions are $u_+=(-\sin a,\cos a)$ and $u_-=(-\sin a,-\cos a)$; their inner product is $\sin^2a-\cos^2a=-\cos(2a)=\cos(\pi-\pi/m)$. Their angular distance is therefore $\pi-\pi/m$ by [F2]. The directions bound the inward wedge at the vertex, so this is the interior angle. Rotation by $j\pi/m$ preserves inner products and carries the configuration to $v_j$, giving the same angle at every vertex. [given, F2, F3, F6, algebra]

1.2 Inward normals. At $v_0=(1,0)$ the edge $[v_0,v_1]$ has midpoint direction $(\cos\frac{\pi}{2m},\sin\frac{\pi}{2m})$ and the edge $[v_{2m-1},v_0]$ has midpoint direction $(\cos\frac{\pi}{2m},-\sin\frac{\pi}{2m})$; the outward unit normals are these midpoint directions, and the inward unit normals are their negatives $n_+=(-\cos\frac{\pi}{2m},-\sin\frac{\pi}{2m})$ and $n_-=(-\cos\frac{\pi}{2m},\sin\frac{\pi}{2m})$. Then $\langle n_+,n_-\rangle=\cos^2\frac{\pi}{2m}-\sin^2\frac{\pi}{2m}=\cos\frac{\pi}{m}$ by [F3], so $d_{\mathrm{ang}}(n_+,n_-)=\arccos(\cos\frac{\pi}{m})=\frac{\pi}{m}$, since $0<\frac{\pi}{m}\le\frac{\pi}{2}$ and $\cos$ is injective on $[0,\pi]$. [given, F2, F3, algebra]

1.3 The mirror lines. With $c:=\cos(\pi/m)$ and $v_s:=ce_s+e_t$, $v_t:=e_s+ce_t$, evaluating the bilinear form [F4] gives $B(v_s,e_s)=c-c=0$ and $B(v_t,e_t)=-c+c=0$, so $\mathbb Rv_s\subseteq H_s$ and $\mathbb Rv_t\subseteq H_t$; since $B|_P$ is positive definite by [F5] and $v_s,v_t\ne0$, each of the subspaces $\{v\in P:B(v,e_s)=0\}$ and $\{v\in P:B(v,e_t)=0\}$ is a line, so these inclusions are equalities. Moreover $B(v_s,v_s)=c^2-2c^2+1=1-c^2$, $B(v_t,v_t)=1-c^2$ and $B(v_s,v_t)=2c-c^3-c=c(1-c^2)$, so the ratio of the Statement is $c(1-c^2)/(1-c^2)=c$, the denominator being positive because $c=\cos(\pi/m)<1$ for $m\ge2$. [given, F4, F5, algebra]

2.1 The link at a vertex. At $v_0=(1,0)$ the two facets through $v_0$ are the edges $[v_0,v_1]$ and $[v_{2m-1},v_0]$, with edge directions $u_+:=\frac{v_1-v_0}{\lvert v_1-v_0\rvert}$ and $u_-:=\frac{v_{2m-1}-v_0}{\lvert v_{2m-1}-v_0\rvert}$; the angle between $u_+$ and $u_-$ is the interior angle $\pi-\pi/m$ of step 1.1. By [F1] the tangent cone is $\{\xi:\langle\xi,n_+\rangle\ge0,\ \langle\xi,n_-\rangle\ge0\}$ for the inward normals $n_\pm$ of the two edges. Its boundary lines are $\mathbb Ru_+$ and $\mathbb Ru_-$, since $u_\pm$ is the unit direction along the facet whose inward normal is $n_\pm$, so the cone is the intersection of the two closed half-planes bounded by these lines that contain $u_+$ and $u_-$; that intersection is exactly the wedge $\{au_++bu_-:a,b\ge0\}$, whose unit section is the arc from $u_+$ to $u_-$. The angular distance of its endpoints is $\arccos\langle u_+,u_-\rangle=\pi-\pi/m$. [step 1.1, given, F1, F2]

2.2 The mirror angle. The angle $\theta$ of the nonzero vectors $v_s,v_t$ in the positive definite plane $(P,B)$ is the number in $[0,\pi]$ with $\cos\theta=B(v_s,v_t)/(\lvert v_s\rvert_B\lvert v_t\rvert_B)$, where $\lvert v\rvert_B=\sqrt{B(v,v)}$; by step 1.3 this cosine is $c\in[0,1]$, so $\theta\in[0,\pi/2]$ and $\theta=\arccos c=\pi/m$ by [F2]. The mirror lines $H_s,H_t$ therefore meet at angle $\pi/m$. [step 1.3, F2, F3]

3.1 The product. Let $A=r_sr_t$. By [F5] $A$ is a $B$-preserving linear map of the positive definite plane $(P,B)$ with $\det A=1$ and $\operatorname{tr}A=2\cos(2\pi/m)$. Choose a $B$-orthonormal basis $(u,w)$ of $P$ by [F6] and let $M=\begin{pmatrix}p&q\\r&s\end{pmatrix}$ be the matrix of $A$ in it; $B$-preservation and $\det M=1$ give $M^{T}M=I$, so $M^{-1}=\begin{pmatrix}s&-q\\-r&p\end{pmatrix}=M^{T}=\begin{pmatrix}p&r\\q&s\end{pmatrix}$, whence $s=p$ and $r=-q$; thus $M=\begin{pmatrix}p&q\\-q&p\end{pmatrix}$ with $p^2+q^2=1$ and $2p=\operatorname{tr}M=2\cos(2\pi/m)$. Hence $p=\cos(2\pi/m)$ and $q^2=1-p^2=\sin^2(2\pi/m)$ by [F6], so $q=\pm\sin(2\pi/m)$ for $m\ge3$, where $0<2\pi/m<\pi$ makes $\sin(2\pi/m)>0$, and $q=0$ for $m=2$. In every $B$-orthonormal basis, therefore, $A$ acts by the rotation of angle $2\pi/m$ or of angle $-2\pi/m$: the product $r_sr_t$ is a rotation of $(P,B)$ through $2\pi/m$ up to the choice of orientation. [step 2.2, F5, F6, algebra]

4.1 The link Gram matrix. By step 2.1 the vertex link is the arc with endpoints $u_+,u_-$; its Gram matrix as a spherical $1$-simplex is the matrix with diagonal entries $1$ and off-diagonal entries $\cos(\pi-\pi/m)$, and $\cos(\pi-\pi/m)=-\cos(\pi/m)=-c=B(e_s,e_t)$ by [F3] and [F4], so it equals the Gram matrix of $B|_P$ displayed in the Statement. It is positive definite since $1-c^2>0$ and the diagonal entries are $1$. Hence for $m\ge3$ the link edge angular distance $\pi-\pi/m\in(\pi/2,\pi)$ and the mirror angle $\pi/m\in(0,\pi/2]$ are distinct and supplementary, and they are equal to $\pi/2$ only in the square case $m=2$; in either case they must not be interchanged. [step 2.1, step 2.2, F3, F4, F5, algebra] ∎

## Remarks

- **Two different angles.** The link edge angular distance $\pi-\pi/m$ is the interior angle of the polygon at the vertex, i.e. the angle between the two incident edge directions; the mirror angle $\pi/m$ is the angle between the two facet hyperplanes, i.e. between the inward normals. They are supplementary: $\cos(\pi-\pi/m)=-\cos(\pi/m)$. The link Gram matrix and the Coxeter Gram matrix of type $I_2(m)$ coincide because both encode the same pair of unit vectors at angular distance $\pi-\pi/m$.
- **The square case $m=2$.** The centre angle is $\pi/2$, so $c=0$, the mirror lines are $B$-orthogonal, $r_sr_t$ is a rotation through $\pi$, the link edge angular distance is $\pi/2$ and the mirror angle is $\pi/2$; the two numbers coincide but the identity $\cos(\pi-\pi/m)=-\cos(\pi/m)$ remains the correct correspondence.
