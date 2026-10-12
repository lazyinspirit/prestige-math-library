---
id: prop-nrqm-orbital-and-spin-finite-spin-matrices
aliases: [nrqm-orbital-and-spin-finite-spin-matrices]
kind: proposition
domain: mathematics
title: "Finite spin matrices"
status: draft
origin: pipeline
dependency_level: 0
deps: [def-inner-product-space, def-linear-map, def-linear-basis, def-linear-combination-and-span, def-adjoint-of-a-linear-map-between-inner-product-spaces, def-self-adjoint-and-normal-endomorphism, def-complex-numbers-and-arithmetic, lem-complex-conjugation-and-modulus-laws, def-natural-numbers]
dependency_roles:
  def-inner-product-space: mathematical-premise
  def-linear-map: mathematical-premise
  def-linear-basis: mathematical-premise
  def-linear-combination-and-span: mathematical-premise
  def-adjoint-of-a-linear-map-between-inner-product-spaces: mathematical-premise
  def-self-adjoint-and-normal-endomorphism: mathematical-premise
  def-complex-numbers-and-arithmetic: mathematical-premise
  lem-complex-conjugation-and-modulus-laws: mathematical-premise
  def-natural-numbers: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Chapter 7 (Angular Momentum), §7.1 pp. 141-152 (ladder operators and the algebra j(j+1), (7.13)-(7.15)) and §7.4.2 pp. 161-164 (spin-half matrices, (7.110)-(7.111))"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "MIT 8.05 Quantum Physics II (Fall 2013), Chapter 9 'Angular Momentum', §2 pp. 11-18 (algebraic theory: [J_i,J_j]=i eps J_k, ladder constants |C_pm|^2 = j(j+1)-m(m pm 1))"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/e765f050b2fd50a9d87d2ae801e9c52f_MIT8_05F13_Chap_09.pdf"
---

## Statement

Let $s\in\frac12\mathbb N=\{0,\tfrac12,1,\tfrac32,\dots\}$, put $N:=2s\in\mathbb N$ and let
$V_s:=\mathbb C^{N+1}$ carry the standard inner product
$\langle z,w\rangle=\sum_{k=0}^{N}z_k\overline{w_k}$, linear in the first argument
([[def-inner-product-space]]). Write $(e_m)_{-s\le m\le s}$ for the standard basis, indexed so that
$e_m$ is the vector with entry $1$ in position $k=s-m$ and entry $0$ elsewhere; thus
$\langle e_m,e_n\rangle=1$ if $m=n$ and $\langle e_m,e_n\rangle=0$ otherwise. Define $\mathbb C$-linear maps
$J_z,J_+,J_-\in\operatorname{End}_{\mathbb C}(V_s)$ by their values on this basis ([[def-linear-map]]):

$$J_ze_m:=m\,e_m,\qquad J_+e_m:=\sqrt{(s-m)(s+m+1)}\,e_{m+1},\qquad J_-e_m:=\sqrt{(s+m)(s-m+1)}\,e_{m-1},$$

where $e_{s+1}:=0$ and $e_{-s-1}:=0$, and put

$$J_x:=\tfrac12(J_++J_-),\qquad J_y:=\tfrac1{2i}(J_+-J_-),\qquad J^2:=J_x^2+J_y^2+J_z^2 .$$

Then:

(a) $J_z$, $J_x$ and $J_y$ are self-adjoint endomorphisms of $V_s$
([[def-self-adjoint-and-normal-endomorphism]]), and $J_+^*=J_-$, $J_-^*=J_+$
([[def-adjoint-of-a-linear-map-between-inner-product-spaces]]);

(b) on $V_s$ the commutators are

$$[J_z,J_+]=J_+,\qquad [J_z,J_-]=-J_-,\qquad [J_+,J_-]=2J_z,\qquad [J_x,J_y]=iJ_z,\qquad [J_y,J_z]=iJ_x,\qquad [J_z,J_x]=iJ_y ;$$

(c) $J^2=J_-J_++J_z^2+J_z=J_+J_-+J_z^2-J_z=s(s+1)I$, and $[J^2,J_z]=[J^2,J_\pm]=0$;

(d) the matrix elements of the raising operator are
$\|J_+e_m\|^2=(s-m)(s+m+1)$ and $\|J_-e_m\|^2=(s+m)(s-m+1)$, and
$\langle J_+e_m,e_{m+1}\rangle=\sqrt{(s-m)(s+m+1)}$, which is nonzero exactly when $m<s$;

(e) for $s=\tfrac12$, identify $V_{\frac12}=\mathbb C^2$ with the basis ordered as $(e_{\frac12},e_{-\frac12})$ and let

$$\sigma_x:=\begin{pmatrix}0&1\\1&0\end{pmatrix},\qquad \sigma_y:=\begin{pmatrix}0&-i\\ i&0\end{pmatrix},\qquad \sigma_z:=\begin{pmatrix}1&0\\0&-1\end{pmatrix}$$

be the Pauli matrices. Then $J_i=\tfrac12\sigma_i$ for $i=x,y,z$, $\sigma_x^2=\sigma_y^2=\sigma_z^2=I$,
$\sigma_x\sigma_y=i\sigma_z$, $\sigma_y\sigma_z=i\sigma_x$, $\sigma_z\sigma_x=i\sigma_y$, and consequently
$\sigma_i\sigma_j+\sigma_j\sigma_i=2\delta_{ij}I$ and $\sigma_i\sigma_j=\delta_{ij}I+i\sum_k\varepsilon_{ijk}\sigma_k$ for all $i,j$, where $\delta_{ij}=1$ if $i=j$ and $0$ otherwise, and $\varepsilon_{ijk}$ denotes the sign of the permutation $(x,y,z)\mapsto(i,j,k)$.

All statements are finite-dimensional linear algebra: no physical interpretation of $J_x,J_y,J_z$ as angular momentum, and no measurement postulate, is asserted here.

## Facts & Assumptions

**Given:** $s=\frac N2$ with $N\in\mathbb N$; the space $V_s=\mathbb C^{N+1}$ with its standard inner product; the standard basis $(e_m)_{-s\le m\le s}$; the maps $J_z,J_\pm,J_x,J_y,J^2$ displayed in the Statement.

[F1] The standard basis is orthonormal: $\langle e_m,e_n\rangle=\delta_{mn}$ in the sense of the Statement, and every $z\in V_s$ has the unique expansion $z=\sum_m\langle z,e_m\rangle e_m$ with coefficients $\langle z,e_m\rangle$; a linear map is determined by, and may be prescribed by, its values on a basis ([[def-linear-basis]], [[def-linear-combination-and-span]], [[def-linear-map]]).

[F2] For $T\in\operatorname{End}(V_s)$ the adjoint $T^*$ is the unique endomorphism with $\langle Tz,w\rangle=\langle z,T^*w\rangle$ for all $z,w$; $T$ is self-adjoint when $T=T^*$, equivalently when $\langle Tz,w\rangle=\langle z,Tw\rangle$ for all $z,w$ ([[def-adjoint-of-a-linear-map-between-inner-product-spaces]], [[def-self-adjoint-and-normal-endomorphism]]).

[F3] Complex conjugation is additive, satisfies $\overline{zw}=\overline z\,\overline w$, $\overline{\overline z}=z$ and $z\overline z=|z|^2\ge0$, and $z\overline z=0$ only for $z=0$; also $i^2=-1$ and $\overline i=-i$ ([[def-complex-numbers-and-arithmetic]], [[lem-complex-conjugation-and-modulus-laws]]).

[F4] For real $t\ge0$ the square root symbol denotes the unique nonnegative $r$ with $r^2=t$; the numbers $(s-m)(s+m+1)$ and $(s+m)(s-m+1)$ are nonnegative integers for every $m\in\{-s,-s+1,\ldots,s\}$, and they vanish exactly at the endpoints $m=s$, respectively $m=-s$, where an endpoint vector is killed ([[def-natural-numbers]]).

[F5] Matrix multiplication of the displayed $2\times2$ matrices is entrywise-finite multiplication; the identities $\sigma_x^2=\sigma_y^2=\sigma_z^2=I$, $\sigma_x\sigma_y=i\sigma_z$, $\sigma_y\sigma_z=i\sigma_x$, $\sigma_z\sigma_x=i\sigma_y$ are checked by direct multiplication using [F3].

## Proof

1.1 [Well-definedness; (a)] By [F4] the coefficients are nonnegative reals and the endpoint conventions are compatible, so prescribing the values $J_ze_m,J_\pm e_m$ on the basis defines unique linear maps $J_z,J_+,J_-\in\operatorname{End}(V_s)$ by [F1]; $J_x,J_y,J^2$ are then defined by the displayed formulas and are linear. For all basis vectors, $\langle J_ze_m,e_n\rangle=m\delta_{mn}=\langle e_m,J_ze_n\rangle$, and $\langle J_+e_m,e_n\rangle=\sqrt{(s-m)(s+m+1)}\,\delta_{n,m+1}$, while $\langle e_m,J_-e_n\rangle=\sqrt{(s+n)(s-n+1)}\,\delta_{m,n-1}$, which at $n=m+1$ equals $\sqrt{(s+m+1)(s-m)}=\sqrt{(s-m)(s+m+1)}$, and both sides vanish otherwise; hence $\langle J_+e_m,e_n\rangle=\langle e_m,J_-e_n\rangle$ and $\langle J_-e_m,e_n\rangle=\langle e_m,J_+e_n\rangle$ for all $m,n$, so $J_+^*=J_-$ and $J_-^*=J_+$ by [F1], [F2]. Taking adjoints in the definitions of $J_x,J_y$ and using $(J_++J_-)^*=J_-+J_+=J_++J_-$ and $\bigl(\tfrac1{2i}(J_+-J_-)\bigr)^*=\tfrac1{\overline{2i}}(J_+-J_-)^*=\tfrac1{-2i}(J_--J_+)=\tfrac1{2i}(J_+-J_-)$ gives $J_x^*=J_x$ and $J_y^*=J_y$. This is (a). [F1, F2, F3, F4, algebra]

1.2 [(b), ladder relations] For every basis vector, $J_z(J_+e_m)=J_z\sqrt{(s-m)(s+m+1)}e_{m+1} =(m+1)J_+e_m=J_+(J_ze_m)+J_+e_m$, so acting on the basis and using linearity, $[J_z,J_+]=J_+$; similarly $J_z(J_-e_m)=(m-1)J_-e_m=J_-(J_ze_m)-J_-e_m$ gives $[J_z,J_-]=-J_-$. Moreover, using the endpoint conventions, $J_+J_-e_m=(s+m)(s-m+1)e_m$ and $J_-J_+e_m=(s-m)(s+m+1)e_m$, so $[J_+,J_-]e_m=\bigl[(s+m)(s-m+1)-(s-m)(s+m+1)\bigr]e_m=2m\,e_m=2J_ze_m$, and by linearity $[J_+,J_-]=2J_z$. [F1, F4, algebra]

1.3 [(d)] For $-s\le m\le s$, orthonormality [F1] and the definitions give $\|J_+e_m\|^2=(s-m)(s+m+1)$ and $\|J_-e_m\|^2=(s+m)(s-m+1)$, and $\langle J_+e_m,e_{m+1}\rangle=\sqrt{(s-m)(s+m+1)}$; the coefficient vanishes exactly when $m=s$ by [F4]. [F1, F4, algebra]

2.1 [(b), remaining commutators] From $J_x=\frac12(J_++J_-)$, $J_y=\frac1{2i}(J_+-J_-)$ and the relations $[J_+,J_-]=2J_z$, $[J_-,J_+]=-2J_z$ of step 1.2, expand the products bilinearly: $[J_x,J_y]=\frac1{4i}\bigl([J_+,J_+]-[J_+,J_-]+[J_-,J_+]-[J_-,J_-]\bigr)=\frac1{4i}\bigl(0-2J_z-2J_z-0\bigr) =\frac{-4J_z}{4i}=iJ_z$, because $1/i=-i$ by [F3]. Likewise $[J_z,J_x]=\frac12\bigl([J_z,J_+]+[J_z,J_-]\bigr)=\frac12(J_+-J_-)=iJ_y$, and $[J_z,J_y]=\frac1{2i}\bigl([J_z,J_+]-[J_z,J_-]\bigr)=\frac1{2i}(J_++J_-)=-iJ_x$, which is $[J_y,J_z]=iJ_x$. This completes (b). [step 1.2, F3, algebra]

2.2 [(c)] The definitions give $J_x^2+J_y^2=\tfrac12(J_+J_-+J_-J_+)$; combining this with $[J_+,J_-]=2J_z$ from step 1.2 yields $J^2=J_-J_++J_z^2+J_z=J_+J_-+J_z^2-J_z$. Direct expansion on each basis vector gives $(J_-J_++J_z^2+J_z)e_m=\bigl[(s-m)(s+m+1)+m^2+m\bigr]e_m=s(s+1)e_m$ and $(J_+J_-+J_z^2-J_z)e_m=\bigl[(s+m)(s-m+1)+m^2-m\bigr]e_m=s(s+1)e_m$, using $(s\mp m)(s\pm m+1)=s^2+s-m^2\mp m$; hence $J^2=s(s+1)I$ by [F1]. Since $J^2$ is a scalar multiple of the identity, it commutes with $J_x,J_y,J_z$ and with $J_\pm=J_x\pm iJ_y$, giving (c). [step 1.2, F1, algebra]

3.1 [(e), Pauli case] Let $s=\frac12$, so $N=1$ and the basis is $(e_{\frac12},e_{-\frac12})$. From the definitions, $J_ze_{\pm\frac12}=\pm\frac12e_{\pm\frac12}$, $J_+e_{-\frac12}=e_{\frac12}$, $J_+e_{\frac12}=0$, $J_-e_{\frac12}=e_{-\frac12}$, $J_-e_{-\frac12}=0$; reading these actions as matrices in the ordered basis $(e_{\frac12},e_{-\frac12})$ gives $J_z=\frac12\sigma_z$, $J_+=\frac12(\sigma_x+i\sigma_y)$ and $J_-=\frac12(\sigma_x-i\sigma_y)$, whence $J_x=\frac12(J_++J_-)=\frac12\sigma_x$ and $J_y=\frac1{2i}(J_+-J_-)=\frac12\sigma_y$. The displayed matrices satisfy $\sigma_i^*=\sigma_i$ by inspection. Direct multiplication using [F3] and [F5] gives $\sigma_x^2=\sigma_y^2=\sigma_z^2=I$, $\sigma_x\sigma_y=i\sigma_z$, $\sigma_y\sigma_z=i\sigma_x$, $\sigma_z\sigma_x=i\sigma_y$; taking adjoints of the three off-diagonal products and using that the $\sigma_i$ are Hermitian with $\overline i=-i$ gives $\sigma_j\sigma_i=-\sigma_i\sigma_j$ for $i\ne j$, so $\sigma_i\sigma_j+\sigma_j\sigma_i=2\delta_{ij}I$ and $\sigma_i\sigma_j=\delta_{ij}I+i\sum_k\varepsilon_{ijk}\sigma_k$ for all ordered pairs $i,j\in\{x,y,z\}$. This is (e). [F3, F5, algebra] ∎

The displayed relations are those of the standard $(2s+1)$-dimensional spin representation; the proposition alone asserts only the finite matrix identities written in its Statement.
