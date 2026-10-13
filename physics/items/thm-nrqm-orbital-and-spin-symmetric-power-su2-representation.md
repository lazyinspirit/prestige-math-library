---
id: thm-nrqm-orbital-and-spin-symmetric-power-su2-representation
aliases: [ nrqm-orbital-and-spin-symmetric-power-su2-representation ]
kind: theorem
domain: mathematics
title: "Symmetric-power SU2 representation"
status: published
origin: pipeline
dependency_level: 1
deps:
  [
    thm-tensor-product-basis-from-bases,
    thm-sine-and-cosine-addition-formulas,
    prop-nrqm-orbital-and-spin-finite-spin-matrices,
    def-commuting-symmetric-and-linear-actions-on-tensor-power,
    def-inner-product-space,
    def-linear-map,
    def-linear-basis,
    def-linear-combination-and-span,
    def-adjoint-of-a-linear-map-between-inner-product-spaces,
    def-self-adjoint-and-normal-endomorphism,
    def-linear-isometry-and-orthogonal-or-unitary-operator,
    def-strongly-continuous-unitary-representation,
    def-strongly-continuous-one-parameter-unitary-group,
    def-infinitesimal-generator-of-a-unitary-group,
    def-matrix-product-and-identity-matrix,
    def-determinant-of-a-square-matrix,
    thm-determinant-multiplicative,
    def-coordinate-column-and-matrix-of-a-linear-map,
    thm-matrix-of-the-adjoint-is-the-conjugate-transpose,
    def-operator-norm,
    def-bounded-linear-operator,
    def-derivative,
    thm-algebra-of-derivatives,
    thm-chain-rule,
    cor-differentiable-implies-continuous,
    thm-sine-and-cosine-derivatives,
    cor-trigonometric-parity-and-pythagorean-identity,
    lem-complex-conjugation-and-modulus-laws,
    def-complex-numbers-and-arithmetic,
    def-finite-symmetric-group-and-permutation-notation,
    def-binomial-coefficient,
    thm-binomial-closed-formula,
    def-factorial-and-falling-factorial,
    def-finite-sum-in-a-commutative-monoid,
    cor-finite-iterated-tensor-products-represent-multilinear-maps
  ]
dependency_roles:
  thm-tensor-product-basis-from-bases: mathematical-premise
  thm-sine-and-cosine-addition-formulas: mathematical-premise
  prop-nrqm-orbital-and-spin-finite-spin-matrices: mathematical-premise
  def-commuting-symmetric-and-linear-actions-on-tensor-power: mathematical-premise
  def-inner-product-space: mathematical-premise
  def-linear-map: mathematical-premise
  def-linear-basis: mathematical-premise
  def-linear-combination-and-span: mathematical-premise
  def-adjoint-of-a-linear-map-between-inner-product-spaces: mathematical-premise
  def-self-adjoint-and-normal-endomorphism: mathematical-premise
  def-linear-isometry-and-orthogonal-or-unitary-operator: mathematical-premise
  def-strongly-continuous-unitary-representation: mathematical-premise
  def-strongly-continuous-one-parameter-unitary-group: mathematical-premise
  def-infinitesimal-generator-of-a-unitary-group: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
  def-determinant-of-a-square-matrix: mathematical-premise
  thm-determinant-multiplicative: mathematical-premise
  def-coordinate-column-and-matrix-of-a-linear-map: mathematical-premise
  thm-matrix-of-the-adjoint-is-the-conjugate-transpose: mathematical-premise
  def-operator-norm: mathematical-premise
  def-bounded-linear-operator: mathematical-premise
  def-derivative: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-chain-rule: mathematical-premise
  cor-differentiable-implies-continuous: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  cor-trigonometric-parity-and-pythagorean-identity: mathematical-premise
  lem-complex-conjugation-and-modulus-laws: mathematical-premise
  def-complex-numbers-and-arithmetic: mathematical-premise
  def-finite-symmetric-group-and-permutation-notation: mathematical-premise
  def-binomial-coefficient: mathematical-premise
  thm-binomial-closed-formula: mathematical-premise
  def-factorial-and-falling-factorial: mathematical-premise
  def-finite-sum-in-a-commutative-monoid: mathematical-premise
  cor-finite-iterated-tensor-products-represent-multilinear-maps: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "MIT 8.05 Quantum Physics II (Fall 2013), Chapter 2 'Spin one-half, Bras,
        Kets, and Operators' (spin-half systems and their operators) and Chapter
        9 'Angular Momentum', §2 pp. 11-18 (Commuting observables; algebraic
        theory of angular momentum)"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/e765f050b2f\
        d50a9d87d2ae801e9c52f_MIT8_05F13_Chap_09.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Chapter 7
        (Angular Momentum), §7.1 pp. 141-152 (rotation operators and ladder
        algebra) and §7.4.2 pp. 161-164 (spin-half matrices)"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "MIT 8.05 Quantum Physics II (Fall 2013), Chapter 8 'Multiparticle States
        and Tensor Products' (tensor products and product bases)"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/ffe665c0cba\
        2eae19a83e88dec42925c_MIT8_05F13_Chap_08.pdf"
---

## Statement

Fix an integer $n\ge0$, let
$V:=\mathbb C^2$ carry the standard inner product linear in the first argument, with orthonormal basis
$(e_+,e_-)$ where $e_+:=(1,0)$ and $e_-:=(0,1)$ ([[def-inner-product-space]]), and let $V^{\otimes n}$ be the
$n$-fold algebraic tensor power with its finite string basis
([[thm-tensor-product-basis-from-bases]]) made orthonormal. Use
$S_n=\operatorname{Sym}(\{0,\dots,n-1\})$ as in
[[def-finite-symmetric-group-and-permutation-notation]]. For $n\ge1$ define the bijection
$b_n:\{0,\dots,n-1\}\to\{1,\dots,n\}$ by $b_n(a)=a+1$, and for $\pi\in S_n$ put
$\widehat\pi:=b_n\circ\pi\circ b_n^{-1}$. Define $U_\pi$ to be the place action of
$\widehat\pi$ in [[def-commuting-symmetric-and-linear-actions-on-tensor-power]]: explicitly, for $x_1,\dots,x_n\in V$,
$U_\pi(x_1\otimes\cdots\otimes x_n)=x_{\pi^{-1}(0)+1}\otimes\cdots\otimes x_{\pi^{-1}(n-1)+1}$,
extended linearly. Use the diagonal action $W^{\otimes n}$ of
$W\in M_2(\mathbb C)$ and the operators
$\Delta(T):=\sum_{j=1}^{n}\mathbf 1^{\otimes(j-1)}\otimes T\otimes\mathbf 1^{\otimes(n-j)}$. Put

$$P_+:=\frac1{n!}\sum_{\pi\in S_n}U_\pi,\qquad \mathcal S_n:=\operatorname{ran}P_+\subseteq V^{\otimes n},\qquad SU(2):=\{W\in M_2(\mathbb C): W^*W=I_2,\ \det W=1\},$$

where $W^*:=\overline W^{\mathsf T}$ is the conjugate transpose of $W$ and $I_2$ the identity matrix
([[def-matrix-product-and-identity-matrix]], [[def-determinant-of-a-square-matrix]]). For $W\in SU(2)$ define
$U_n(W):=W^{\otimes n}|_{\mathcal S_n}$. For $k\in\{0,\dots,n\}$ let $s_k$ be the sum of the elementary tensors
$e_{\varepsilon_1}\otimes\cdots\otimes e_{\varepsilon_n}$ over all $2^n$ strings
$(\varepsilon_1,\dots,\varepsilon_n)\in\{+,-\}^n$ containing exactly $k$ entries $-$, and put
$v_k:=\binom nk^{-1/2}s_k$.

For $n=0$ use $V^{\otimes0}=\mathbb C$, the empty string $s_0=v_0=1$, $0!=\binom00=1$, the trivial group $S_0$, $U_\pi=P_+=I_{\mathbb C}$, $W^{\otimes0}=I_{\mathbb C}$ for every $W$, and $\Delta(T)=0$. These conventions define $\mathcal S_0=\mathbb C$ and the trivial representation $U_0$, with $J_x=J_y=J_z=0$.

Then:

(a) $P_+$ is the orthogonal projection onto the closed subspace $\mathcal S_n$, $U_\pi$ and $W^{\otimes n}$ commute for
every $\pi\in S_n$ and every $W$, and $W^{\otimes n}(\mathcal S_n)\subseteq \mathcal S_n$; the assignment $W\mapsto U_n(W)$ is
well defined on all of $M_2(\mathbb C)$, and $U_n(W')U_n(W)=U_n(W'W)$ holds for all $W,W'$;

(b) $SU(2)$ is a subgroup of the multiplicative monoid of $M_2(\mathbb C)$ with identity $I_2$; for $W\in SU(2)$
the operator $U_n(W)$ is unitary with inverse $U_n(W^{-1})=U_n(W)^*$, so $U_n:SU(2)\to U(\mathcal S_n)$ is a group
homomorphism ([[def-strongly-continuous-unitary-representation]],
[[def-linear-isometry-and-orthogonal-or-unitary-operator]]);

(c) the vectors $v_0,\dots,v_n$ form an orthonormal basis of $\mathcal S_n$; in particular $\mathcal S_n$ is $(n+1)$-dimensional;

(d) the operators $J_i:=\tfrac12\Delta(\sigma_i)|_{\mathcal S_n}$, $i=x,y,z$, where $\sigma_x,\sigma_y,\sigma_z$ are the
Pauli matrices of [[prop-nrqm-orbital-and-spin-finite-spin-matrices]], are self-adjoint and satisfy, with
$J_\pm:=J_x\pm iJ_y$, $J^2:=J_x^2+J_y^2+J_z^2$,

$$J_zv_k=\bigl(\tfrac n2-k\bigr)v_k,\qquad J_+v_k=\sqrt{k(n-k+1)}\,v_{k-1},\qquad J_-v_k=\sqrt{(k+1)(n-k)}\,v_{k+1},$$

with $v_{-1}:=0$ and $v_{n+1}:=0$; moreover $[J_z,J_\pm]=\pm J_\pm$, $[J_+,J_-]=2J_z$,
$[J_i,J_j]=i\sum_k\varepsilon_{ijk}J_k$ and $J^2=\tfrac n2\bigl(\tfrac n2+1\bigr)I_{\mathcal S_n}$; the map
$v_k\mapsto e_{n/2-k}$ is a unitary equivalence of $(J_x,J_y,J_z)$ with the spin-$\tfrac n2$ matrices of
[[prop-nrqm-orbital-and-spin-finite-spin-matrices]];

(e) for each $i$ the curve $A_i(t):=\cos(t/2)I_2-i\sin(t/2)\sigma_i$ ($t\in\mathbb R$) lies in $SU(2)$, satisfies
$A_i(s)A_i(t)=A_i(s+t)$ and $A_i'(0)=-\tfrac i2\sigma_i$, and $t\mapsto V_i(t):=U_n(A_i(t))$ is a strongly
continuous one-parameter unitary group on $\mathcal S_n$ ([[def-strongly-continuous-one-parameter-unitary-group]])
whose infinitesimal generator $G_i$ ([[def-infinitesimal-generator-of-a-unitary-group]]) is $G_i=-iJ_i$ on all
of $\mathcal S_n$; equivalently $\frac1t\bigl(V_i(t)v-v\bigr)\to-iJ_iv$ for every $v\in \mathcal S_n$;

(f) $U_n$ is strongly continuous on $SU(2)$: if $W_m\to W_0$ in $M_2(\mathbb C)$ with all $W_m\in SU(2)$ and
$W_0\in SU(2)$, then $\|U_n(W_m)-U_n(W_0)\|\to0$ in the operator norm on $\mathcal S_n$.

This is finite-dimensional linear algebra: the theorem constructs a unitary representation of $SU(2)$ and its
generators. It does not assert that $SU(2)$ or any spin observable describes a physical particle, and it makes
no measurement or statistics claim.

## Facts & Assumptions

**Given:** $n\ge0$; the space $V=\mathbb C^2$ with its orthonormal basis $(e_+,e_-)$; the tensor power $V^{\otimes n}$; the place permutations $U_\pi$ and diagonal actions $W^{\otimes n}$; the projection $P_+$; the subspace $\mathcal S_n$; the strings $s_k$ and vectors $v_k$; the group $SU(2)$; the Pauli matrices $\sigma_x,\sigma_y,\sigma_z$; the operators $\Delta(T)$ and $J_i$.

[F1] For $n\ge1$, iterating [[thm-tensor-product-basis-from-bases]] gives the finite basis of all $2^n$ strings $e_{\varepsilon_1}\otimes\cdots\otimes e_{\varepsilon_n}$; for $n=0$ the basis is $1\in\mathbb C$. Define the inner product by $\langle\sum c_\varepsilon e_\varepsilon,\sum d_\varepsilon e_\varepsilon\rangle=\sum c_\varepsilon\overline{d_\varepsilon}$. Expansion on elementary tensors gives the product inner product. The finite tensor product is thus the standard finite-dimensional coordinate inner product space; no completion or countable choice is used. The universal multilinear property is [[cor-finite-iterated-tensor-products-represent-multilinear-maps]].

[F2] For $n\ge1$, conjugation by $b_n$ is a bijection from the zero-indexed $S_n$ of [[def-finite-symmetric-group-and-permutation-notation]] to the group on tensor positions $\{1,\dots,n\}$ of [[def-commuting-symmetric-and-linear-actions-on-tensor-power]]; it preserves composition because $\widehat\pi\widehat\sigma=b_n\pi\sigma b_n^{-1}=\widehat{\pi\sigma}$, and $\widehat\pi^{-1}(j)=\pi^{-1}(j-1)+1$ for $1\le j\le n$. Thus the stated $U_\pi$ are well-defined linear maps by [F1], permute the orthonormal string basis, are unitary, satisfy $U_\pi U_\sigma=U_{\pi\sigma}$ and have $U_\pi^*=U_{\pi^{-1}}$. There are $n!$ permutations: prescribing the images of $0,\dots,n-1$ successively leaves $n,n-1,\dots,1$ possibilities. In the finite average $P_+=(1/n!)\sum_\pi U_\pi$, inversion and left or right multiplication by a permutation reindex the summands. Thus $P_+^*=P_+$, $U_\pi P_+=P_+U_\pi=P_+$ and $P_+^2=P_+$; its range consists exactly of the invariant vectors, since every invariant vector $v$ satisfies $P_+v=v$. For $n=1$, $\widehat\pi(1)=1$ and $U_\pi=I_V$; for $n=0$, all identities follow from the separate empty-tensor conventions.

[F3] On the spanning string basis, expansion of matrix entries gives $(S\otimes T)(S'\otimes T')=(SS')\otimes(TT')$, and evaluation of the inner products of [F1] gives $(S\otimes T)^*=S^*\otimes T^*$. Thus a tensor product of unitary matrices is unitary. Applying the same $W$ to every factor commutes with any place permutation, since both rules send $v_1\otimes\cdots\otimes v_n$ to the tensor of the same permuted list $Wv_j$; this identity is also valid for $n=0$ ([[def-commuting-symmetric-and-linear-actions-on-tensor-power]]).

[F4] For a bounded operator $L$ on a finite-dimensional Hilbert space, the operator norm is $\|L\|=\sup_{\|z\|\le1}\|Lz\|$, and $\|L\|\le\sum_j\|Le_j\|$ for every orthonormal basis $(e_j)$; a linear map with finite-dimensional domain is bounded, and $\|Lz\|\le\|L\|\,\|z\|$ ([[def-operator-norm]], [[def-bounded-linear-operator]]). In orthonormal product coordinates, writing $z=\sum_b z_b\otimes e_b$ gives $\|(S\otimes I)z\|^2=\sum_b\|Sz_b\|^2\le\|S\|^2\sum_b\|z_b\|^2$; similarly $\|I\otimes T\|\le\|T\|$. Since $S\otimes T=(S\otimes I)(I\otimes T)$ and $\|LMz\|\le\|L\|\|M\|\|z\|$, this proves $\|S\otimes T\|\le\|S\|\|T\|$, and iteration supplies the tensor estimates below.

[F5] $W^*W=I_2$ means that $W$ is a unitary operator on $\mathbb C^2$; in orthonormal bases the matrix of the adjoint is the conjugate transpose, and $\det(W^*)=\overline{\det W}$, $\det(W'W)=\det W'\det W$ ([[thm-matrix-of-the-adjoint-is-the-conjugate-transpose]], [[def-coordinate-column-and-matrix-of-a-linear-map]], [[thm-determinant-multiplicative]], [[def-linear-isometry-and-orthogonal-or-unitary-operator]], [[def-determinant-of-a-square-matrix]]).

[F6] The Pauli matrices satisfy $\sigma_i^*=\sigma_i$, $\sigma_x^2=\sigma_y^2=\sigma_z^2=I_2$, $\sigma_x\sigma_y=i\sigma_z$, $\sigma_y\sigma_z=i\sigma_x$, $\sigma_z\sigma_x=i\sigma_y$; also $\sigma_++\sigma_-=2\sigma_x$ and $\sigma_+-\sigma_-=2i\sigma_y$ for $\sigma_+:=\sigma_x+i\sigma_y$, $\sigma_-:=\sigma_x-i\sigma_y$, and $\sigma_+e_-=2e_+$, $\sigma_+e_+=0$, $\sigma_-e_+=2e_-$, $\sigma_-e_-=0$, $\sigma_ze_\pm=\pm e_\pm$ ([[prop-nrqm-orbital-and-spin-finite-spin-matrices]]).

[F7] The sine and cosine addition identities hold ([[thm-sine-and-cosine-addition-formulas]]). Sine and cosine are differentiable with $\sin'=\cos$, $\cos'=-\sin$, and $\sin^2+\cos^2=1$; derivatives of sums, scalar multiples and compositions are computed by the algebra of derivatives and the chain rule ([[thm-sine-and-cosine-derivatives]], [[cor-differentiable-implies-continuous]], [[cor-trigonometric-parity-and-pythagorean-identity]], [[thm-algebra-of-derivatives]], [[thm-chain-rule]], [[def-derivative]]).

[F8] For integers $0\le k\le n$, $\binom nk=n!/(k!(n-k)!)>0$ and $\binom nk=\binom n{n-k}$ and $\binom n{k-1}/\binom nk=k/(n-k+1)$ for $1\le k\le n$; the ratio follows by cancelling the factorials using $k!=k(k-1)!$ and $(n-k+1)!=(n-k+1)(n-k)!$. Each string with $k$ minus signs corresponds bijectively to its set of minus positions, so there are $\binom nk$ such strings and the string sums split accordingly ([[thm-binomial-closed-formula]], [[def-factorial-and-falling-factorial]], [[def-binomial-coefficient]], [[def-finite-sum-in-a-commutative-monoid]]).

[F9] Complex conjugation is additive and multiplicative, $i^2=-1$, $\overline i=-i$, and $\overline{z^{-1}}=\overline z^{-1}$ for $z\ne0$ ([[lem-complex-conjugation-and-modulus-laws]], [[def-complex-numbers-and-arithmetic]]).

[F10] For $s=\frac n2$ the operators $J_z,J_\pm,J_x,J_y,J^2$ of [[prop-nrqm-orbital-and-spin-finite-spin-matrices]] act on their orthonormal basis $e_m$, $-s\le m\le s$, by $J_ze_m=me_m$, $J_+e_m=\sqrt{(s-m)(s+m+1)}e_{m+1}$, $J_-e_m=\sqrt{(s+m)(s-m+1)}e_{m-1}$, with endpoint conventions $e_{s+1}=e_{-s-1}=0$, have self-adjoint $J_x,J_y,J_z$ and $J_-=J_+^*$, satisfy $[J_z,J_\pm]=\pm J_\pm$, $[J_+,J_-]=2J_z$ and $J^2=s(s+1)I$, and have $\|J_+e_m\|^2=(s-m)(s+m+1)$.



## Proof

1.1 [The zero tensor power] For $n=0$, the conventions give $P_+=I$, $\mathcal S_0=\mathbb C v_0$, $U_0(W)=I$, and $J_i=0$. Clauses (a)-(c) follow immediately; all ladder and Casimir formulas in (d) vanish, and $v_0\mapsto e_0$ identifies the zero operators with the spin-zero model [F10]. Each $V_i(t)=I$ has derivative zero and is strongly continuous, and $U_0$ is constant, proving (e)-(f); the subgroup and $A_i$ assertions, independent of $n$, are proved below. For the tensor and basis calculations in the remaining steps assume $n\ge1$. [given, F10, algebra]

1.2 [The symmetric subspace and invariance] By [F2] $P_+$ is an orthogonal projection and $U_\pi P_+=P_+$; hence $P_+v=v$ exactly for $v\in \mathcal S_n$, and $\mathcal S_n=\ker(I-P_+)$ is closed because the finite matrix $I-P_+$ is continuous. For $W\in M_2(\mathbb C)$ and $\pi\in S_n$, [F3] gives $W^{\otimes n}P_+=\frac1{n!}\sum_\pi W^{\otimes n}U_\pi=\frac1{n!}\sum_\pi U_\pi W^{\otimes n}=P_+W^{\otimes n}$, so $v\in \mathcal S_n$ implies $P_+(W^{\otimes n}v)=W^{\otimes n}P_+v=W^{\otimes n}v$, i.e. $W^{\otimes n}(\mathcal S_n)\subseteq \mathcal S_n$; therefore $U_n(W):=W^{\otimes n}|_{\mathcal S_n}$ is a well-defined linear map on $\mathcal S_n$ for every $W$. [F2, F3, algebra]

1.3 [The curves $A_i$] Using $I_2^*=I_2$, $\sigma_i^*=\sigma_i$, $\sigma_i^2=I_2$, [F7] and [F9]: $A_i(t)^*A_i(t)=\cos(t/2)^2I_2+\sin(t/2)^2\sigma_i^2-i\cos(t/2)\sin(t/2)(\sigma_i-\sigma_i^*)=(\cos^2+\sin^2)(t/2)I_2=I_2$, and direct computation of the three $2\times2$ determinants from the displayed matrices gives $\det A_i(t)=\cos^2(t/2)+\sin^2(t/2)=1$; so $A_i(t)\in SU(2)$. The identities $\cos(s+t)=\cos s\cos t-\sin s\sin t$ and $\sin(s+t)=\sin s\cos t+\cos s\sin t$, applied with $\sigma_i^2=I_2$, give $A_i(s)A_i(t)=A_i(s+t)$. Differentiating the displayed formula at $t=0$ with [F7] and [F9] gives $A_i'(0)=-\tfrac i2\sigma_i$. [F6, F7, F9, algebra]

2.1 [Representation law and unitarity] For $W,W'\in M_2(\mathbb C)$, [F3] gives $(W')^{\otimes n}W^{\otimes n}=(W'W)^{\otimes n}$ on $V^{\otimes n}$, hence on $\mathcal S_n$ by step 1.2 and restriction: $U_n(W')U_n(W)=U_n(W'W)$. If $W\in SU(2)$, then $W$ is unitary by [F5], [F6]; by [F3] $W^{\otimes n}$ is unitary on $V^{\otimes n}$, and for $v\in \mathcal S_n$, $\|U_n(W)v\|=\|W^{\otimes n}v\|=\|v\|$ with $W^{\otimes n}$ mapping $\mathcal S_n$ bijectively onto $\mathcal S_n$ (its inverse is $(W^{-1})^{\otimes n}$ restricted, where $W^{-1}=W^*\in SU(2)$); hence $U_n(W)$ is unitary with $(U_n(W))^*=U_n(W^{-1})$. This gives the operator statements of (a) and (b). [step 1.2, F3, F5, algebra]

2.2 [The basis $v_k$ and the dimension] Fix $k$ and let $w=e_{\varepsilon_1}\otimes\cdots\otimes e_{\varepsilon_n}$ have exactly $k$ minus entries. In $n!P_+w=\sum_\pi U_\pi w$ every string with exactly $k$ minus entries occurs once for each of the $k!(n-k)!$ permutations carrying the pattern of $w$ to it, so $n!P_+w=k!(n-k)!\,s_k$ and $P_+w=\binom nk^{-1}s_k$ by [F8]; since the $2^n$ elementary tensors span $V^{\otimes n}$ [F1], this shows $\mathcal S_n=\operatorname{ran}P_+\subseteq\operatorname{span}\{s_0,\dots,s_n\}$, while $s_k\in \mathcal S_n$ because each $U_\pi$ permutes the strings with $k$ minus entries, so $P_+s_k=s_k$. Distinct elementary tensors are orthonormal [F1], and two summands from $s_k$ and $s_l$ with $k\ne l$ are distinct elementary tensors, so $\langle s_k,s_l\rangle=\delta_{kl}\binom nk$ by [F8]; hence $v_0,\dots,v_n$ are orthonormal and span $\mathcal S_n$, an orthonormal basis of the $(n+1)$-dimensional space $\mathcal S_n$. [step 1.2, F1, F2, F8, algebra]

2.3 [The operators $\Delta(\sigma_i)$ and their commutation] For $T,T'\in M_2(\mathbb C)$ the place sums satisfy $[\Delta(T),\Delta(T')]=\Delta([T,T'])$ and $\Delta(T)^*=\Delta(T^*)$: expanding the definitions, the summands at different places commute and the summand at a common place contributes $[T,T']$, while the adjoint of a place sum is the place sum of the adjoints [F3]. Consequently $[\Delta(\sigma_i),\Delta(\sigma_j)]=\Delta([\sigma_i,\sigma_j])$; and $\Delta(\sigma_i)$ commutes with every $U_\pi$ because permuting places preserves the multiset of places, so by [F2] each $\Delta(\sigma_i)$ preserves $\mathcal S_n$, and its restriction $J_i=\tfrac12\Delta(\sigma_i)|_{\mathcal S_n}$ is self-adjoint. [step 1.2, F2, F3, F6, algebra]

3.1 [$SU(2)$ is a subgroup] If $W,W'\in SU(2)$, then $(WW')^*(WW')=W'^*W^*WW'=W'^*W'=I_2$ and $\det(WW')=\det W\det W'=1$, so $WW'\in SU(2)$; $I_2^*I_2=I_2$ and $\det I_2=1$, so $I_2\in SU(2)$; and for $W\in SU(2)$ one has $W^*W=WW^*=I_2$ (multiplying $W^*W=I_2$ by $W^{-1}$ on the right gives $W^*=W^{-1}$, whence $WW^*=I_2$) and $\det W^*=\overline{\det W}=1$, so $W^{-1}=W^*\in SU(2)$. Hence $SU(2)$ is a subgroup, and $U_n$ is a group homomorphism by step 2.1. [step 2.1, F5, F9, algebra]

3.2 [Generator of $t\mapsto U_n(A_i(t))$] By step 2.1, $V_i(t):=U_n(A_i(t))$ satisfies $V_i(s)V_i(t)=V_i(s+t)$ and $V_i(0)=I$, and each $V_i(t)$ is unitary. The telescoping identity $W^{\otimes k}-W_0^{\otimes k}=\sum_{j=1}^k\bigl(W^{\otimes(j-1)}\otimes(W-W_0)\otimes W_0^{\otimes(k-j)}\bigr)$, valid by [F3] with $W^{\otimes0}:=I$, gives $\|W^{\otimes k}-W_0^{\otimes k}\|\le k\max(\|W\|,\|W_0\|)^{k-1}\|W-W_0\|$ by [F4]; with $W=A_i(t)$, $W_0=A_i(t_0)$ and $\|A_i(\cdot)\|=1$, the explicit formula for $A_i$ and [F7] show that $\|V_i(t)v-V_i(t_0)v\|$ is bounded by $n\|A_i(t)-A_i(t_0)\|\,\|v\|$ for all $v\in \mathcal S_n$ by the operator-norm bound; so $V_i$ is a strongly continuous one-parameter unitary group. For the derivative, write $A_i(t)=I_2+tA_i'(0)+r(t)$ with $\|r(t)\|\le|t|\eta(t)$ and $\eta(t)\to0$ by [F6], [F7] and step 1.3; the same telescoping expansion with $W=A_i(t)$, $W_0=I_2$, using $\|A_i(t)\|\le1$ and $\|r(t)\|\le|t|\eta(t)$, gives $A_i(t)^{\otimes n}-I_2^{\otimes n}=t\sum_{j=1}^n\mathbf 1^{\otimes(j-1)}\otimes A_i'(0)\otimes\mathbf 1^{\otimes(n-j)}+R(t)$ with $\|R(t)\|\le n|t|\,\eta'(t)$ and $\eta'(t)\to0$ as $t\to0$; restricting to $\mathcal S_n$ and using step 2.3 and $A_i'(0)=-\tfrac i2\sigma_i$ of step 1.3 gives $\frac1t\bigl(V_i(t)v-v\bigr)\to-\tfrac i2\Delta(\sigma_i)v=-iJ_iv$ for every $v\in \mathcal S_n$. Hence the infinitesimal generator is $G_i=-iJ_i$ with domain $D(G_i)=\mathcal S_n$. [step 2.1, step 2.3, step 1.3, F1, F3, F4, F6, F7, algebra]

3.3 [Actions on the basis vectors] Fix $0\le k\le n$. On an elementary tensor with $k$ minus entries, $\Delta(\sigma_z)$ acts by $\#+-\#-=n-2k$, and by linearity $\Delta(\sigma_z)s_k=(n-2k)s_k$, so $J_zv_k=(n/2-k)v_k$. For $\sigma_+=\sigma_x+i\sigma_y$ one has $\sigma_+e_+=0$ and $\sigma_+e_-=2e_+$ by [F6]. If $1\le k\le n$, each target string with $k-1$ minus entries in $\Delta(\sigma_+)s_k$ occurs with coefficient $2$ from each of its $n-k+1$ plus positions, so $\Delta(\sigma_+)s_k=2(n-k+1)s_{k-1}$ and $J_+v_k=(n-k+1)\sqrt{\binom n{k-1}/\binom nk}v_{k-1}=\sqrt{k(n-k+1)}v_{k-1}$ by [F8]. For $k=0$, every factor is $e_+$, so $J_+v_0=0$, agreeing with the stated $v_{-1}=0$ convention. Similarly, if $0\le k<n$, $\sigma_-e_-=0$ and $\sigma_-e_+=2e_-$ give $\Delta(\sigma_-)s_k=2(k+1)s_{k+1}$, hence $J_-v_k=(k+1)\sqrt{\binom n{k+1}/\binom nk}v_{k+1}=\sqrt{(k+1)(n-k)}v_{k+1}$ by [F8]. For $k=n$, every factor is $e_-$, so $J_-v_n=0$, agreeing with $v_{n+1}=0$. [step 2.2, step 2.3, F1, F6, F8, algebra]

4.1 [Commutators and identification with the spin-$n/2$ model] By steps 2.3 and 3.3, $J_z,J_\pm$ satisfy $[J_z,J_\pm]=\pm J_\pm$ and $[J_+,J_-]=2J_z$ on the basis $(v_k)$; substituting $J_x=\tfrac12(J_++J_-)$, $J_y=\tfrac1{2i}(J_+-J_-)$ and expanding gives $[J_x,J_y]=iJ_z$, $[J_y,J_z]=iJ_x$, $[J_z,J_x]=iJ_y$. Since $v_k\mapsto e_{n/2-k}$ maps the basis of $\mathcal S_n$ onto the basis of the spin-$\tfrac n2$ space of [[prop-nrqm-orbital-and-spin-finite-spin-matrices]], and by step 3.3 the three operators have there exactly the action prescribed in that proposition, the described map is a unitary equivalence intertwining $(J_x,J_y,J_z)$ with the spin-$\tfrac n2$ matrices and carrying $J^2$ to $s(s+1)I$ with $s=n/2$; in particular $J^2=\tfrac n2(\tfrac n2+1)I_{\mathcal S_n}$. This proves (a)-(d) except the strong-continuity clause. [step 3.3, F10, algebra]

5.1 [Strong continuity] Let $W_m\to W_0$ in $M_2(\mathbb C)$. By the telescoping identity of step 3.2 with [F3], $\|W_m^{\otimes n}-W_0^{\otimes n}\|\le n\max(\|W_m\|,\|W_0\|)^{n-1}\|W_m-W_0\|$, and $\max(\|W_m\|,\|W_0\|)$ is bounded because $\|W_m\|\to\|W_0\|$ by [F4] and convergence of the entries; hence $\|W_m^{\otimes n}-W_0^{\otimes n}\|\to0$. Restricting the operators to the invariant subspace $\mathcal S_n$ can only decrease the operator norm, so $\|U_n(W_m)-U_n(W_0)\|\to0$, proving (f); in particular $U_n$ is strongly continuous on $SU(2)$, since norm continuity implies strong continuity by [F4]. This completes (a)-(f). [step 1.1, step 1.2, step 2.1, step 3.1, step 3.2, F3, F4, algebra] ∎
