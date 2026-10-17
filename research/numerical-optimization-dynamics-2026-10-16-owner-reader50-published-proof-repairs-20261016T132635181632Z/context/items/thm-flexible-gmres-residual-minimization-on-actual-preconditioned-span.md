---
id: thm-flexible-gmres-residual-minimization-on-actual-preconditioned-span
kind: theorem
title: "Flexible GMRES minimizes over the actual preconditioned-vector span"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - alg-flexible-gmres-variable-right-preconditioning
  - def-linear-combination-and-span
  - lem-span-is-the-set-of-linear-combinations
  - thm-complex-numbers-form-a-field
  - prop-standard-coordinate-inner-products
  - def-inner-product-norm
  - def-matrix-product-and-identity-matrix
  - lem-standard-basis-of-f-n
  - thm-least-squares-solutions-and-normal-equation
justified_by: []
aliases: []
proof_strategy: direct
verification:
  precheck: pending
sources:
  references:
    - title: "Yousef Saad, Iterative Methods for Sparse Linear Systems, 2nd ed., §9.4.1, printed pp. 287–289"
      url: "https://www-users.cse.umn.edu/~saad/IterMethBook_2ndEd.pdf"
dependency_level: 1
---

## Statement

Let $A\in M_n(\mathbb C)$ and $b,x_0\in\mathbb C^n$, with the standard
Hermitian inner product and induced Euclidean norm. Suppose the algorithm
[[alg-flexible-gmres-variable-right-preconditioning]] completes $m\ge1$ steps
without breakdown, producing $Z_m=[z_1,\ldots,z_m]$ and $\bar H_m$. Define
$\beta=\|b-Ax_0\|_2$, let $e_0\in\mathbb C^{m+1}$ be the standard unit
vector at coordinate $0$, and define $V_{m+1}\in M_{n\times(m+1)}(\mathbb C)$
by $(V_{m+1})_{a,i-1}=(v_i)_a$ for $0\le a<n$, $1\le i\le m+1$. The
one-based column label $i$ therefore occupies zero-based matrix column $i-1$.
The matrices $Z_m$ and $\bar H_m$ use the algorithm's one-based-to-zero-based
slot mapping. Then
$$AZ_m=V_{m+1}\bar H_m,$$
and every $y\in\mathbb C^m$ satisfies
$$b-A(x_0+Z_my)=V_{m+1}(\beta e_0-\bar H_my),\qquad \|b-A(x_0+Z_my)\|_2=\|\beta e_0-\bar H_my\|_2.$$
Consequently every least-squares minimizer $y_m$ in the algorithm produces a
true-residual minimizer $x_m=x_0+Z_my_m$ over
$$x_0+\operatorname{span}\{z_1,\ldots,z_m\}.$$
Moreover, $\bar H_m$ has full column rank, so its least-squares minimizer is
unique.
The result makes no fixed-preconditioner spectral or convergence claim.

## Facts & Assumptions

**Given:** A system $Ax=b$, an initial vector $x_0$, and a completed $m$-step run of the variable-right-preconditioned flexible GMRES algorithm with no breakdown.

[F1] [[alg-flexible-gmres-variable-right-preconditioning]]: the initialization sets $r_0=b-Ax_0$, $\beta=\|r_0\|_2$, and, when $\beta\ne0$, $v_1=r_0/\beta$.

[F2] [[alg-flexible-gmres-variable-right-preconditioning]]: each column starts with $w=Az_j$; the ordered updates use $h_{ij}=\langle w,v_i\rangle$ and $w:=w-h_{ij}v_i$; after them $h_{j+1,j}=\|w\|_2$, and a positive value normalizes $v_{j+1}=w/h_{j+1,j}$.

[F3] [[alg-flexible-gmres-variable-right-preconditioning]]: in zero-based matrix coordinates, column $k-1$ of $Z_j$ is $z_k$, and $(\bar H_j)_{i-1,k-1}=h_{ik}$ for $1\le k\le j$, $1\le i\le k+1$; $(\bar H_j)_{a,b}=0$ when $a>b+1$, and the algorithm minimizes $\|\beta e_0-\bar H_jy\|_2$.

[F4] [[prop-standard-coordinate-inner-products]]: on each $\mathbb C^q$, $\langle z,w\rangle=\sum_{k<q}z_k\overline{w_k}$ is an inner product, linear in its first argument.

[F5] [[def-inner-product-norm]]: the induced norm is $\|v\|_2=\sqrt{\langle v,v\rangle}$.

[F6] [[def-matrix-product-and-identity-matrix]]: matrix multiplication is defined by the finite coordinate sums, so its columns act linearly on vectors.

[F7] [[thm-least-squares-solutions-and-normal-equation]]: a linear map between finite-dimensional inner-product spaces has a least-squares minimizer, and any two minimizers differ by an element of the map's kernel.

[F8] [[def-linear-combination-and-span]]: $\operatorname{span}(S)$ is the smallest linear subspace containing $S$.

[F9] [[lem-span-is-the-set-of-linear-combinations]]: a vector belongs to $\operatorname{span}(S)$ exactly when it is a finite linear combination of elements of $S$.

[F10] [[thm-complex-numbers-form-a-field]]: $\mathbb C$ is a field, so the finite coordinate spaces and matrices in the statement are over a field.

[F11] [[lem-standard-basis-of-f-n]]: for every $q\in\mathbb N$, $\mathbb C^q$ has the standard basis indexed by coordinates $0,\ldots,q-1$ and is finite-dimensional; in particular its standard unit vector at coordinate $0$ has value $1$ there and $0$ elsewhere.

## Proof

1.1 Since this run reaches the first step, [F1] gives $r_0\ne0$ and $\beta=\sqrt{\langle r_0,r_0\rangle}>0$. Since $\beta$ is real, $\langle r_0/\beta,r_0/\beta\rangle=\beta^{-2}\langle r_0,r_0\rangle=1$, so $v_1$ has norm $1$. Inductively suppose $v_1,\ldots,v_j$ are orthonormal. At the $i$th Gram–Schmidt substep, the current vector $w$ is orthogonal to $v_k$ for $k<i$. The update $w':=w-h_{ij}v_i$, with $h_{ij}=\langle w,v_i\rangle$, satisfies $\langle w',v_i\rangle=h_{ij}-h_{ij}\langle v_i,v_i\rangle=0$ and $\langle w',v_k\rangle=\langle w,v_k\rangle-h_{ij}\langle v_i,v_k\rangle=0$ for each $k<i$. These equalities use linearity in the first argument and orthonormality [F4]. After all $i=1,\ldots,j$, the final $w$ is orthogonal to every current basis vector. Nonbreakdown gives $h_{j+1,j}=\|w\|_2>0$; the same inner-product calculation gives $\langle v_{j+1},v_{j+1}\rangle=h_{j+1,j}^{-2}\langle w,w\rangle=1$, and its orthogonality follows from that of $w$. Induction proves orthonormality through $v_{m+1}$. [given, F1, F2, F4, F5, algebra, induction]

1.2 The finite matrix $\bar H_m$ defines a linear map $\mathbb C^m\to\mathbb C^{m+1}$ between finite-dimensional inner-product spaces by [F6], [F10], and [F11]. By [F7], least-squares minimizers exist and any two differ by an element of $\ker\bar H_m$. This kernel is zero: if $\bar H_my=0$, its zero-based last row $a=m$ gives $h_{m+1,m}y_{m-1}=0$, hence $y_{m-1}=0$. For each one-based row label $r=m,m-1,\ldots,2$ in descending order, matrix row $r-1$ has coefficient $h_{r,r-1}$ in column $r-2$; its other possibly nonzero terms use coordinates $y_{k-1}$ with $k\ge r$, already shown zero. Thus $h_{r,r-1}y_{r-2}=0$. Since $h_{r,r-1}=h_{(r-1)+1,r-1}>0$ by no breakdown, we obtain $y_{r-2}=0$. Thus every zero-based coordinate vanishes, $\bar H_m$ is injective, and its least-squares minimizer is unique. [given, F2, F3, F6, F7, F10, F11, algebra]

1.3 At the end of column $j$, the successive subtractions give $Az_j=\sum_{i=1}^j h_{ij}v_i+w$. Since $w=h_{j+1,j}v_{j+1}$, this is $Az_j=\sum_{i=1}^{j+1}h_{ij}v_i$. Assembling these column identities for $j=1,\ldots,m$ yields $AZ_m=V_{m+1}\bar H_m$. [F2, F3, F6, F10, algebra]

2.1 The initial residual is $r_0=b-Ax_0=\beta v_1$. The vector $e_0$ has value $1$ in coordinate $0$ and $0$ in every other coordinate by [F11], so $V_{m+1}\beta e_0=\beta v_1$. For any $y\in\mathbb C^m$, linearity and step 1.3 give $b-A(x_0+Z_my)=r_0-AZ_my=V_{m+1}(\beta e_0-\bar H_my)$. [given, F1, F6, F10, F11, step 1.3, algebra]

3.1 For every $c\in\mathbb C^{m+1}$, orthonormality from step 1.1 and the coordinate inner product [F4] give $\|V_{m+1}c\|_2^2=\langle V_{m+1}c,V_{m+1}c\rangle=\sum_{i=1}^{m+1}\sum_{k=1}^{m+1}c_{i-1}\overline{c_{k-1}}\langle v_i,v_k\rangle=\sum_{i=1}^{m+1}|c_{i-1}|^2=\|c\|_2^2$. Taking the nonnegative square roots defined by [F5] proves norm preservation. Apply it to $c=\beta e_0-\bar H_my$ in step 2.1 to obtain the asserted norm identity. [F4, F5, step 1.1, step 2.1, algebra]

4.1 Put $S=\{z_1,\ldots,z_m\}$. By [F9], write any $u\in\operatorname{span}(S)$ as $u=\sum_{a<q}c_av_a$ with $v_a\in S$. For each of the finitely many indices $a<q$, choose $j_a\in\{1,\ldots,m\}$ with $v_a=z_{j_a}$; successive finite induction supplies this list. Set $y^{(0)}=0\in\mathbb C^m$ and, for $a<q$, set $y^{(a+1)}=y^{(a)}+c_ae_{j_a-1}$, where $e_{j_a-1}$ is the standard coordinate vector. By [F3], [F6], and [F11], $Z_me_{j_a-1}=z_{j_a}$; the matrix-product coordinate formula and field distributivity then give by induction on $a$ that $Z_my^{(a)}=\sum_{t<a}c_tz_{j_t}$. Hence $u=Z_my^{(q)}$, so $\operatorname{span}(S)$ is contained in the range of $Z_m$. Conversely, [F3] and [F6] give $Z_my=\sum_{k=1}^m y_{k-1}z_k$ for every $y\in\mathbb C^m$, so $Z_my\in\operatorname{span}(S)$ by [F8] and [F9]. Thus the range of $Z_m$ is exactly $\operatorname{span}(S)$. By step 3.1, each vector in this affine set has true-residual norm $\|\beta e_0-\bar H_my\|_2$. Therefore the unique least-squares minimizer from step 1.2 gives $x_m=x_0+Z_my_m$ with minimum true residual over the whole affine span. [step 1.2, step 3.1, F3, F6, F8, F9, F10, F11] ∎
