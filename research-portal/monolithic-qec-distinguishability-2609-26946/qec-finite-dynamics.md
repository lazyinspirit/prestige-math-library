---
title: Noise dynamics and calibrated cycles
description: Connect finite GKSL dynamics and jump-time Gram matrices to phase
  averaging, asymptotic checking times, repeated-cycle error budgets, invariant
  truncations and numerical Choi calculations. Place calibrated-cycle data
  beside the dynamical and channel-composition inputs it uses.
status: published
dependency_level: 1
---

**Purpose:** Connect finite GKSL dynamics and jump-time Gram matrices to phase averaging, asymptotic checking times, repeated-cycle error budgets, invariant truncations and numerical Choi calculations. Place calibrated-cycle data beside the dynamical and channel-composition inputs it uses.

## Finite GKSL evolution and the QEC channel interface

[Open item](item-def-qec-prereq-finite-gksl-channel-interface) · level 0


### Definition

Let $d\geq1$ be an integer and $M_d(\mathbb C)$ the complex $d\times d$ matrices. Fix a Hermitian matrix $H=H^\dagger$ and a finite family $L_1,\ldots,L_m$ in $M_d(\mathbb C)$, allowing $m=0$. Here $A^\dagger$ denotes conjugate transpose, $[A,B]=AB-BA$, and $\{A,B\}=AB+BA$. In units with $\hbar=1$, define the linear map $\mathcal L$ by $\mathcal L(X)=-i[H,X]+\sum_{a=1}^m(L_aXL_a^\dagger-\{L_a^\dagger L_a,X\}/2)$, with the empty sum equal to zero. The units of $H$ and $L_a$ are chosen so that every term has inverse-time units.

For $t\geq0$, define the noise channel $\mathcal N_t:M_d(\mathbb C)\to M_d(\mathbb C)$ by $\mathcal N_t=e^{t\mathcal L}:=\sum_{n=0}^\infty t^n\mathcal L^n/n!$, with $\mathcal L^0$ the identity map and convergence in operator norm. A channel here means a complex-linear, completely positive and trace-preserving map: complete positivity means positivity after tensoring with the identity on every finite matrix ancilla, and trace preservation means $\operatorname{Tr}(\mathcal N_t(X))=\operatorname{Tr}(X)$ for every $X$. A matrix is positive when it is Hermitian and has nonnegative quadratic form on every vector.

This is a mathematical construction. Assigning it to a physical emitter requires a separate physical assumption; no negative-time channel is asserted.

### Facts & Assumptions

[F1] The displayed formula is the finite GKSL generator under the stated finite-dimensional, Hermiticity and unit conventions, with $\hbar=1$. [physics:def-qsm-dt-gksl-definition](https://alphabetamath.cc/physics/item/def-qsm-dt-gksl-definition)

[F2] A finite channel is exactly a completely positive, trace-preserving complex-linear map, with complete positivity tested on every finite ancilla. [physics:def-qsm-dt-channel-definition](https://alphabetamath.cc/physics/item/def-qsm-dt-channel-definition)

[F3] For a finite GKSL generator, $e^{t\mathcal L}$ is a finite channel for every $t\geq0$; the family has identity at zero, is norm-continuous, and obeys $e^{(t+s)\mathcal L}=e^{t\mathcal L}e^{s\mathcal L}$ for $s,t\geq0$. [physics:thm-qsm-dt-gksl-sufficient](https://alphabetamath.cc/physics/item/thm-qsm-dt-gksl-sufficient)

[F4] Every finite-dimensional complex normed space is complete. [physics:cor-finite-dimensional-normed-spaces-are-banach](https://alphabetamath.cc/physics/item/cor-finite-dimensional-normed-spaces-are-banach)

[F5] The exponential series of a bounded operator on a complex Banach space converges in operator norm for every real time. [math:lem-exponential-series-of-a-bounded-operator](https://alphabetamath.cc/item/lem-exponential-series-of-a-bounded-operator)

### Justification

**Given:** The finite matrices, finite family and nonnegative time in the definition, with compatible units and $\hbar=1$.

**Goal:** Establish that the displayed series defines a unique finite channel with the stated domain and codomain.

1.1 For $1\leq i,j\leq d$, let $E_{ij}$ be the matrix whose entry in row $i$, column $j$ is $1$ and whose other entries are $0$. Every matrix $X$ has the expansion $X=\sum_{i,j=1}^d X_{ij}E_{ij}$; comparing entries makes its coefficients unique, so these matrices, ordered lexicographically by $(i,j)$, form a finite ordered complex basis. Define $\|X\|_{\mathrm{ent},1}=\sum_{i,j=1}^d|X_{ij}|$. This function is nonnegative, and it vanishes exactly when every entry is zero, hence exactly when $X=0$. For every complex scalar $\alpha$, $\|\alpha X\|_{\mathrm{ent},1}=|\alpha|\|X\|_{\mathrm{ent},1}$; summing $|X_{ij}+Y_{ij}|\leq|X_{ij}|+|Y_{ij}|$ gives $\|X+Y\|_{\mathrm{ent},1}\leq\|X\|_{\mathrm{ent},1}+\|Y\|_{\mathrm{ent},1}$. Thus this is a complex norm on a space with a finite ordered basis, and [F4] makes this normed matrix space Banach. [given, F4, construct, algebra]

2.1 The displayed GKSL formula is complex-linear. Let $C=\max_{1\leq i,j\leq d}\|\mathcal L(E_{ij})\|_{\mathrm{ent},1}$, which is finite because $d\geq1$ and all matrices and the jump family are finite. Linearity and the norm axioms give $\|\mathcal L(X)\|_{\mathrm{ent},1}\leq\sum_{i,j=1}^d|X_{ij}|\|\mathcal L(E_{ij})\|_{\mathrm{ent},1}\leq C\|X\|_{\mathrm{ent},1}$, so $\mathcal L$ is bounded. Applying [F5] on the Banach space from step 1.1, with the induced operator norm, gives a unique operator-norm limit for the exponential series. [given, F1, F5, step 1.1, algebra]

3.1 The hypotheses of the finite GKSL channel theorem are exactly those in the definition, including the finite family and Hermitian $H$. By [F3] the resulting exponential is a finite channel for $t\geq0$; [F2] gives the stated meaning of that term. Hence the construction has the claimed type and is well-defined. [given, F1, F2, F3, step 2.1] ∎


## Finite exponential and smooth quotient remainder control

[Open item](item-lem-qec-prereq-finite-taylor-control) · level 0


### Statement

Let $d$ be a nonnegative integer and let $A$ be a complex $d\times d$ matrix acting on $\mathbb C^d$ with its Euclidean norm $\|x\|_2=(\sum_{j<d}|x_j|^2)^{1/2}$, let $t\in\mathbb R$, and let $n$ be a nonnegative integer. With $\|A\|=\sup_{\|x\|_2\le1}\|Ax\|_2$ and $e^{tA}=\sum_{k=0}^{\infty}t^kA^k/k!$, one has $\|e^{tA}-\sum_{k=0}^n t^kA^k/k!\|\le e^{|t|\|A\|}(|t|\|A\|)^{n+1}/(n+1)!$.

For $d\ge1$ the same operator norm is the supremum over unit vectors. For $d=0$, the space has only the zero vector, $A=I=0$ as operators on this space, and the unit-ball supremum and the operator remainder are both zero.

For scalar functions near $t=0$, write $h(t)=O(t^{n+1})$ when there are constants $C,\delta>0$ such that $|h(t)|\le C|t|^{n+1}$ for $|t|<\delta$. If $f(t)=\sum_{k=0}^n a_kt^k+O(t^{n+1})$ and $g(t)=\sum_{k=0}^n b_kt^k+O(t^{n+1})$, their product has the expansion through order $n$ obtained by truncating the polynomial product. If $b_0\ne0$, their quotient has an expansion through order $n$ with coefficients $c_0=a_0/b_0$ and $c_j=(a_j-\sum_{k=1}^j b_kc_{j-k})/b_0$ for $1\le j\le n$. These assertions apply at fixed parameter values. Uniform remainders on a parameter set require uniform bounds on the input coefficients and remainders and, for quotients, a uniform positive lower bound on $|b_0|$. A denominator vanishing at zero requires separate cancellation or extension before this quotient assertion is applied.

### Facts & Assumptions

[F1] On a complex Banach space the bounded-operator exponential is the absolutely convergent operator-norm series given in the statement. [math:lem-exponential-series-of-a-bounded-operator](https://alphabetamath.cc/item/lem-exponential-series-of-a-bounded-operator)

[F2] A bounded linear operator has finite operator norm defined by the unit-ball supremum; this equals the unit-sphere supremum on a nonzero domain and is zero on the zero space. Composition satisfies $\|ST\|\le\|S\|\|T\|$. [math:def-bounded-linear-operator](https://alphabetamath.cc/item/def-bounded-linear-operator) [math:def-operator-norm](https://alphabetamath.cc/item/def-operator-norm) [math:lem-composition-operator-norm-inequality](https://alphabetamath.cc/item/lem-composition-operator-norm-inequality)

[F3] For $u\ge0$, the real exponential is $e^u=\sum_{j=0}^\infty u^j/j!$. [math:def-real-exponential-function-and-e](https://alphabetamath.cc/item/def-real-exponential-function-and-e)

[F4] The coordinate pairing $\langle x,y\rangle=\sum_{j<d}x_j\overline{y_j}$ is an inner product, including when $d=0$, and its induced length is a complex norm. [math:prop-standard-coordinate-inner-products](https://alphabetamath.cc/item/prop-standard-coordinate-inner-products) [math:cor-inner-product-induces-a-norm](https://alphabetamath.cc/item/cor-inner-product-induces-a-norm)

[F5] The standard coordinate vectors form an ordered basis of $\mathbb C^d$, with the empty basis at $d=0$. Every real or complex normed space with an ordered basis of finite length is Banach. [math:lem-standard-basis-of-f-n](https://alphabetamath.cc/item/lem-standard-basis-of-f-n) [math:cor-finite-dimensional-normed-spaces-are-banach](https://alphabetamath.cc/item/cor-finite-dimensional-normed-spaces-are-banach)

[F6] A linear map from a normed space with an ordered basis of finite length into a normed space over the same scalar field is bounded. [math:cor-linear-maps-with-finite-dimensional-domain-are-bounded](https://alphabetamath.cc/item/cor-linear-maps-with-finite-dimensional-domain-are-bounded)

### Proof

**Given:** The matrix, integer, and scalar expansions in the statement.

**Goal:** Establish the operator tail estimate and the scalar expansion rules with their stated uniformity conditions.

1.1 By [F4], the displayed Euclidean length makes $\mathbb C^d$ a complex normed space, and its finite ordered basis in [F5] makes it Banach. Matrix multiplication is complex linear: for each $i<d$, $(A(\alpha x+\beta y))_i=\sum_{j<d}A_{ij}(\alpha x_j+\beta y_j)=\alpha(Ax)_i+\beta(Ay)_i$. Thus [F6] makes $A$ bounded and [F1] applies. If $d=0$, there is only one vector and only one operator, so $A=I=0$ and the asserted norm and remainder are zero by [F2]. If $d\ge1$, the unit-ball norm equals the unit-sphere supremum by [F2]. [given, F1, F2, F4, F5, F6, algebra]

1.2 Write $f=P+r$ and $g=Q+s$, where $P,Q$ are the displayed polynomials and $r,s=O(t^{n+1})$. For $|t|$ sufficiently small, $P$ and $Q$ are bounded, so $Ps+Qr+rs=O(t^{n+1})$. Terms of $PQ$ above degree $n$ are also $O(t^{n+1})$; thus the stated product expansion follows. [given, algebra]

2.1 Put $u=|t|\|A\|$. By absolute convergence and the triangle inequality, the operator tail is at most $\sum_{k=n+1}^{\infty}u^k/k!$. Since $(n+1+j)!\ge(n+1)!j!$ for every $j\ge0$, this sum is at most $u^{n+1}e^u/(n+1)!$. This also covers $u=0$. [F1, F2, F3, step 1.1, algebra]

2.2 If $b_0\ne0$, define $C(t)=\sum_{j=0}^n c_jt^j$ by the stated recurrence. Its coefficients make every coefficient through degree $n$ of $P-QC$ zero, so $P-QC=O(t^{n+1})$. Also $g(t)=b_0+O(t)$ when $n\ge1$, while for $n=0$ the given remainder gives the same conclusion; hence $|g(t)|\ge|b_0|/2$ for sufficiently small $|t|$. Consequently $f/g-C=(f-gC)/g=O(t^{n+1})$. [given, step 1.2, algebra]

3.1 If coefficient and remainder bounds are uniform, the bounds used for the product are uniform after restricting to a common sufficiently small neighborhood. If additionally $|b_0|$ has a uniform positive lower bound, the same is true of $|g(t)|$, and the recurrence and quotient estimate are uniform. Without that lower bound the argument gives only fixed-parameter control. Cancellation or extension at a zero denominator must be established separately before invoking the nonzero-denominator result. [step 1.2, step 2.2, algebra] ∎


## Local inversion of a fidelity first crossing

[Open item](item-lem-qec-prereq-first-crossing-asymptotics) · level 0


### Statement

Let $F:[0,\infty)\to\mathbb R$ be continuous, $F(0)=1$, $a>0$, and $p>0$. Suppose that $1-F(t)=at^p+O(t^{p+1})$ as $t\downarrow0$: explicitly, there are $C,\delta_0>0$ such that $|1-F(t)-at^p|\le Ct^{p+1}$ for $0<t<\delta_0$. Define $\tau(1-\epsilon)=\inf\{t\ge0:F(t)<1-\epsilon\}$, with the infimum of the empty set taken as $+\infty$. Then $\tau(1-\epsilon)\sim(\epsilon/a)^{1/p}$ as $\epsilon\downarrow0$: that is, their ratio tends to $1$. If $a=0$, this inversion gives no conclusion.

### Statement references

[math:def-continuity-real](https://alphabetamath.cc/item/def-continuity-real)

[math:def-function-limit](https://alphabetamath.cc/item/def-function-limit)

[math:def-extended-reals](https://alphabetamath.cc/item/def-extended-reals)

### Facts & Assumptions

[F1] A nonempty real set bounded below has an infimum; that infimum is a lower bound at least as large as every other lower bound. [math:thm-infimum-property](https://alphabetamath.cc/item/thm-infimum-property) [math:def-infimum](https://alphabetamath.cc/item/def-infimum)

[F2] For positive bases, real powers are defined by $x^r=\exp(r\log x)$ and obey $(xy)^r=x^ry^r$ and $(x^r)^s=x^{rs}$. [math:def-real-power](https://alphabetamath.cc/item/def-real-power) [math:thm-real-power-laws](https://alphabetamath.cc/item/thm-real-power-laws)

[F3] For $p>0$, the derivative of $x^p$ on $(0,\infty)$ is $px^{p-1}>0$; hence $x\mapsto x^p$ is strictly increasing there. [math:thm-real-power-continuity-and-derivatives](https://alphabetamath.cc/item/thm-real-power-continuity-and-derivatives) [math:thm-monotonicity-from-the-derivative](https://alphabetamath.cc/item/thm-monotonicity-from-the-derivative)

### Proof

**Given:** The function and constants satisfy the stated hypotheses.

**Goal:** Prove that $\tau(1-\epsilon)/(\epsilon/a)^{1/p}\to1$ as $\epsilon\downarrow0$.

1.1 Fix $0<\eta<1$ and set $b=\frac12\min\{1-(1-\eta)^p,(1+\eta)^p-1\}>0$. Choose $0<\delta<\delta_0$ with $C\delta\le ab$. The remainder bound then gives $(a-ab)t^p\le1-F(t)\le(a+ab)t^p$ for $0<t<\delta$. [given, F3, algebra]

2.1 Put $x=(\epsilon/a)^{1/p}$. For all sufficiently small $\epsilon>0$, $(1+\eta)x<\delta$: indeed this follows whenever $\epsilon<a(\delta/(1+\eta))^p$, by the power laws and strict increase. At $t_+=(1+\eta)x$, the lower bound in step 1.1 is strictly greater than $\epsilon$, since $(1-b)(1+\eta)^p>1$. Thus $t_+$ belongs to the crossing set. [step 1.1, F2, F3, algebra]

3.1 For $0<t\le t_-=(1-\eta)x$, the upper bound in step 1.1 is strictly less than $\epsilon$, because $(1+b)(1-\eta)^p<1$. At $t=0$, $1-F(0)=0<\epsilon$. Hence every member of the crossing set is greater than $t_-$. The set is nonempty by step 2.1 and bounded below by $0$, so its infimum exists and $t_-\le\tau(1-\epsilon)\le t_+$. [given, step 1.1, step 2.1, F1, F2, F3, algebra]

4.1 Dividing by $x>0$ gives $1-\eta\le\tau(1-\epsilon)/x\le1+\eta$ for all sufficiently small positive $\epsilon$. Since every positive error tolerance contains such an $\eta$, the ratio tends to $1$. The proof used $a>0$; it asserts no inversion when $a=0$. [step 3.1, algebra] ∎


## Telescoping error budget for repeated finite channels

[Open item](item-lem-qec-prereq-channel-composition-budget) · level 0


### Statement

Let $d\geq1$ and let $\mathcal E,\mathcal F:M_d(\mathbb C)\to M_d(\mathbb C)$ be quantum channels: complex-linear, completely positive, trace-preserving maps. For a linear map $T$ between finite matrix spaces define $\|T\|_{1\to1}=\sup_{X\ne0}\|T(X)\|_1/\|X\|_1$, where $\|X\|_1=\operatorname{Tr}\sqrt{X^*X}$. For every integer $N\geq0$, $\|\mathcal E^N-\mathcal F^N\|_{1\to1}\leq N\|\mathcal E-\mathcal F\|_{1\to1}$, with zeroth powers equal to the identity map. For a fixed reference dimension $r\geq1$, use the reference-first ordered product basis of $\mathbb C^r\otimes\mathbb C^d$, identifying its operator space with $M_{rd}(\mathbb C)$. For $X\in M_{rd}(\mathbb C)$, define its system blocks $X_{ij}\in M_d(\mathbb C)$ by $(X_{ij})_{ab}=X_{(i,a),(j,b)}$ for $0\leq i,j<r$ and $0\leq a,b<d$. For any complex-linear $T:M_d(\mathbb C)\to M_d(\mathbb C)$, define its reference extension $\widehat T_r:M_{rd}(\mathbb C)\to M_{rd}(\mathbb C)$ by $\widehat T_r(X)_{(i,a),(j,b)}=T(X_{ij})_{ab}$. Thus the extension leaves reference matrix-unit indices unchanged and applies $T$ to each system block. The same error budget holds for these extensions: $\|\widehat{\mathcal E}_r^{\,N}-\widehat{\mathcal F}_r^{\,N}\|_{1\to1}\leq N\|\widehat{\mathcal E}_r-\widehat{\mathcal F}_r\|_{1\to1}$, with zeroth powers again the identity.

For $q\in[0,1]$, define the qubit dephasing channel $D_q$ by $D_q(\begin{smallmatrix}a&b\\c&d\end{smallmatrix})=\begin{smallmatrix}a&qb\\qc&d\end{smallmatrix}$. Then $D_q^N=D_{q^N}$ and $1-q^N\leq N(1-q)$. For a normalized pure input $|\psi\rangle=\alpha|0\rangle+\beta|1\rangle$, defining its output fidelity as $\langle\psi|D_q^N(|\psi\rangle\langle\psi|)|\psi\rangle$, the corresponding infidelity is $2|\alpha|^2|\beta|^2(1-q^N)$ and is at most $N$ times its one-cycle value. A fidelity value for one input alone does not imply a corresponding induced-norm error bound.

### Facts & Assumptions

**Given:** The channels, reference space, integer $N$, parameter $q$, and normalized qubit vector in the Statement.

**Goal:** Establish the norm budget, the dephasing identities and bound, and the limitation of a single-input fidelity.

[F1] A finite quantum channel is a complex-linear completely positive trace-preserving map, with trace preservation on every input matrix. [math:def-qc-quantum-channel](https://alphabetamath.cc/item/def-qc-quantum-channel)

[F2] Every finite quantum channel contracts the trace norm on every complex input matrix. [physics:thm-qsm-dt-trace-contraction](https://alphabetamath.cc/physics/item/thm-qsm-dt-trace-contraction)

[F3] Finite ordered tensor registers have an ordered orthonormal product basis with the product inner product, so a reference and system operator space may be represented in that basis as one finite matrix space. [math:def-qc-tensor-register-and-permutation](https://alphabetamath.cc/item/def-qc-tensor-register-and-permutation)

[F4] On every finite matrix space, $\|X\|_1=\operatorname{Tr}\sqrt{X^*X}$ is a norm; in particular it is positive for $X\ne0$, homogeneous, and satisfies the triangle inequality. [physics:lem-qsm-dt-finite-matrix-trace-ideal](https://alphabetamath.cc/physics/item/lem-qsm-dt-finite-matrix-trace-ideal)

[F5] The qubit register is $Q_2=\mathbb C^2$ with ordered computational basis $|0\rangle=e_0=(1,0)^{\mathsf T}$, $|1\rangle=e_1=(0,1)^{\mathsf T}$, the basis used in the matrix formula for $D_q$. Kets are coordinate columns, bras their conjugate-transpose rows, and $|x\rangle\langle y|$ has coordinate matrix $xy^*$. [math:def-qc-register-and-computational-basis](https://alphabetamath.cc/item/def-qc-register-and-computational-basis) [math:def-qc-dirac-notation-conversion](https://alphabetamath.cc/item/def-qc-dirac-notation-conversion)

[F6] For a map $T$ on the system operator space, its amplification $T^{(r)}$ is defined on the system-first space $\mathbb C^d\otimes\mathbb C^r$ by applying $T$ to each system block indexed by reference indices. Complete positivity means that $T^{(r)}$ sends nonnegative operators to nonnegative operators for every $r\geq1$. [math:def-qc-completely-positive-map](https://alphabetamath.cc/item/def-qc-completely-positive-map)

[F7] A map between finite-dimensional complex operator spaces given by a finite sum $T(X)=\sum_a K_a X K_a^*$ of linear operators $K_a$ is completely positive. [math:thm-qc-kraus-map-completely-positive](https://alphabetamath.cc/item/thm-qc-kraus-map-completely-positive)

[F8] An operator is nonnegative when it is self-adjoint and its quadratic form is nonnegative on every vector. [math:def-non-negative-and-positive-operator](https://alphabetamath.cc/item/def-non-negative-and-positive-operator)

### Proof

1.1 For $N\geq1$, cancellation of consecutive terms in the finite sum gives $\mathcal E^N-\mathcal F^N=\sum_{j=0}^{N-1}\mathcal E^{N-1-j}(\mathcal E-\mathcal F)\mathcal F^j$. By [F2], every power of either channel contracts the trace norm; the zeroth power is the identity. By [F4], the trace-norm denominator is positive on nonzero inputs. Applying its triangle inequality to the displayed sum and then taking the supremum over those inputs gives the stated norm bound. For $N=0$ both sides are zero. [given, F2, F4, algebra]

1.2 With $Z=\operatorname{diag}(1,-1)$, put $K_0=\sqrt{(1+q)/2}\,I_2$ and $K_1=\sqrt{(1-q)/2}\,Z$. For $q\in[0,1]$ these are linear operators on $\mathbb C^2$, and direct matrix multiplication gives $D_q(X)=K_0XK_0^*+K_1XK_1^*$ for every $X\in M_2(\mathbb C)$. The finite-sum theorem [F7] therefore makes $D_q$ completely positive. The same matrix formula shows complex linearity and preserves the two diagonal entries, hence the trace of every input matrix. Thus $D_q$ is a channel by [F1]. Its off-diagonal entries gain a factor $q$ per application, giving $D_q^N=D_{q^N}$, including $N=0$. The geometric-sum identity gives $1-q^N=(1-q)\sum_{j=0}^{N-1}q^j\leq N(1-q)$, with an empty sum when $N=0$. [given, F1, F7, algebra]

1.3 The block formula in the Statement assigns every entry of $\widehat T_r(X)$ uniquely and is complex-linear because $T$ is. It is therefore a well-defined linear map on $M_{rd}(\mathbb C)$ using the product basis of [F3]. For another complex-linear $S:M_d(\mathbb C)\to M_d(\mathbb C)$, applying the rule twice gives $\widehat S_r\widehat T_r=\widehat{S\circ T}_r$, and the extension of the identity is the identity. Hence $\widehat T_r^{\,N}=\widehat{T^N}_r$ for every $N\geq0$. If $T$ preserves trace, then $\operatorname{Tr}(\widehat T_r(X))=\sum_{i=0}^{r-1}\operatorname{Tr}(T(X_{ii}))=\sum_{i=0}^{r-1}\operatorname{Tr}(X_{ii})=\operatorname{Tr}X$. In particular the two channel extensions preserve trace by [F1]. [given, F1, F3, algebra]

2.1 To compare factor orders with [F6], fix $s\geq1$ and define the coordinate permutation $P$ from $(\mathbb C^r\otimes\mathbb C^d)\otimes\mathbb C^s$ to $\mathbb C^d\otimes\mathbb C^{rs}$ by $P((e_i\otimes e_a)\otimes e_k)=e_a\otimes e_{is+k}$. Here $0\leq i<r$, $0\leq a<d$ and $0\leq k<s$. The product bases and their inner products in [F3] make this a bijection of orthonormal coordinate bases, so $P^*P=PP^*=I$. Coordinate multiplication and [F8] show that conjugation by $P$ or $P^*$ preserves nonnegativity: self-adjointness is preserved and $v^*PYP^*v=(P^*v)^*Y(P^*v)\geq0$ when $Y$ is nonnegative. For every $Y$, the block rules in the Statement and [F6] give $(\widehat T_r)^{(s)}(Y)=P^*T^{(rs)}(PYP^*)P$: the system block indexed by $(i,k),(j,\ell)$ on either side is obtained by applying $T$ to the matrix with entries $Y_{((i,a),k),((j,b),\ell)}$ as $a,b$ vary. For $T=\mathcal E$ or $\mathcal F$, [F6] makes $T^{(rs)}$ positive, so this identity proves positivity of every amplification of $\widehat T_r$. With $s=1$ it also explicitly identifies the reference-first extension with the supplied system-first amplification under the factor swap. Thus both extensions are completely positive. By step 1.3 and [F1] they are channels, and applying step 1.1 to them proves the stated reference-extended inequality. [given, F1, F3, F6, F8, step 1.1, step 1.3, algebra]

3.1 Using the coordinate and outer-product conventions in [F5], put $p=|\alpha|^2$, so $|\beta|^2=1-p$. Direct multiplication gives $\langle\psi|D_q^N(|\psi\rangle\langle\psi|)|\psi\rangle=p^2+(1-p)^2+2p(1-p)q^N$. Its infidelity is therefore $2p(1-p)(1-q^N)$, and step 1.2 bounds it by $N$ times the same expression at $N=1$. For the limitation, the identity channel and $D_0$ both return $|0\rangle\langle0|$ exactly, giving fidelity one on that input, but their difference sends $|0\rangle\langle1|$ to itself and hence, by the positive trace norm of this nonzero matrix in [F4], has induced norm at least one. Thus that single fidelity cannot imply a zero induced-norm error bound. [given, F4, F5, step 1.2, algebra] ∎


## Liouville matrix and Choi reshuffling conventions

[Open item](item-def-qec-prereq-liouville-choi-reshuffle) · level 0


### Definition

Let $H_{\mathrm{in}}$ and $H_{\mathrm{out}}$ be finite-dimensional complex inner-product spaces with ordered orthonormal bases $(e_i)_{i<n}$ and $(f_k)_{k<m}$. Use the convention that the inner product is linear in its first argument. Write $\mathcal L(H)$ for the complex-linear endomorphisms of $H$. Define input matrix units $E_{ij}x=\langle x,e_j\rangle e_i$ and output matrix units $F_{kl}y=\langle y,f_l\rangle f_k$. A superoperator here means a complex-linear map $\mathcal N:\mathcal L(H_{\mathrm{in}})\to\mathcal L(H_{\mathrm{out}})$.

The **Liouville matrix** of $\mathcal N$ in these ordered matrix-unit bases is the $m^2\times n^2$ matrix $S$ whose entries satisfy $\mathcal N(E_{ij})=\sum_{k,l<m}S_{(k,l),(i,j)}F_{kl}$. Pairs are ordered lexicographically. The **input-first Choi matrix** is $J=\sum_{i,j<n}E_{ij}\otimes\mathcal N(E_{ij})$, represented in the ordered product basis $(e_i\otimes f_k)_{(i,k)}$. Its entries obey $J_{(i,k),(j,l)}=S_{(k,l),(i,j)}$. This exchange of index groupings is called **reshuffling**; the two matrices generally have different shapes and represent different linear maps.

If $H_{\mathrm{in}}=H_{\mathrm{out}}=H$ with the same ordered basis and $X=\mathcal L(H)$ is equipped with a Banach-space norm for which a linear endomorphism $\mathcal G:X\to X$ is bounded, write $L$ for the Liouville matrix of $\mathcal G$. For real $t$, the Liouville matrix of $e^{t\mathcal G}=\sum_{r=0}^{\infty}t^r\mathcal G^r/r!$ is $S=e^{tL}=\sum_{r=0}^{\infty}t^rL^r/r!$. Reshuffling this $S$ gives the Choi matrix of $e^{t\mathcal G}$.

### Justification

**Given:** The finite-dimensional spaces, ordered orthonormal bases and linear maps of the Definition, with the stated Banach norm and bounded generator when the exponential is used.

1.1 For any $A\in\mathcal L(H_{\mathrm{in}})$, expand each $Ae_j$ in the input basis. The resulting coefficients give $A=\sum_{i,j}a_{ij}E_{ij}$; evaluating a vanishing such sum at each $e_j$ shows all coefficients vanish. Thus the $E_{ij}$ form a basis, and the same argument gives the output basis $F_{kl}$. Unique coordinates therefore make $S$ well defined. The input-first Choi definition and the tensor-map action give $J(e_j\otimes f_l)=\sum_{i,k}S_{(k,l),(i,j)}e_i\otimes f_k$, establishing the stated entries in the ordered product basis. These arguments also cover an empty basis, with empty sums and the unique zero-space maps. [math:def-linear-map](https://alphabetamath.cc/item/def-linear-map) [math:thm-unique-coordinates-with-respect-to-an-ordered-basis](https://alphabetamath.cc/item/thm-unique-coordinates-with-respect-to-an-ordered-basis) [math:def-qc-choi-matrix](https://alphabetamath.cc/item/def-qc-choi-matrix) [math:def-qc-tensor-map](https://alphabetamath.cc/item/def-qc-tensor-map) [math:def-qc-tensor-register-and-permutation](https://alphabetamath.cc/item/def-qc-tensor-register-and-permutation). [given, algebra]

1.2 For endomorphisms $\mathcal P,\mathcal Q$ of $X=\mathcal L(H)$, let $A,B$ be their Liouville matrices and abbreviate a matrix-unit index pair by $\alpha$, $\beta$ or $\gamma$. Linearity gives $(\mathcal P\circ\mathcal Q)(E_\beta)=\sum_\alpha(\sum_\gamma A_{\alpha\gamma}B_{\gamma\beta})E_\alpha$. The inner sum is exactly $(AB)_{\alpha\beta}$ by the matrix-product definition. The identity map has matrix $I_{n^2}$. Thus, defining zeroth powers as these identities, repeated composition gives the matrix $L^r$ for $\mathcal G^r$, and linearity gives $\sum_{r=0}^{N}t^rL^r/r!$ for the partial sum $T_N:=\sum_{r=0}^{N}t^r\mathcal G^r/r!$. This includes $n=0$, where $I_0$ and all matrices concerned are empty. [math:def-linear-map](https://alphabetamath.cc/item/def-linear-map) [math:def-matrix-product-and-identity-matrix](https://alphabetamath.cc/item/def-matrix-product-and-identity-matrix). [given, step 1.1, algebra]

2.1 Under the stated Banach and boundedness hypotheses the operator exponential converges in operator norm. Write $\|\cdot\|_{\mathrm{op}}$ for the operator norm on bounded endomorphisms of $X$ and $T=e^{t\mathcal G}$. For every matrix unit the operator-norm bound gives $\|(T_N-T)E_\beta\|\leq\|T_N-T\|_{\mathrm{op}}\|E_\beta\|\to0$. Thus evaluation on each fixed matrix unit respects this limit. [math:def-banach-space](https://alphabetamath.cc/item/def-banach-space) [math:def-bounded-linear-operator](https://alphabetamath.cc/item/def-bounded-linear-operator) [math:def-operator-norm](https://alphabetamath.cc/item/def-operator-norm) [math:lem-exponential-series-of-a-bounded-operator](https://alphabetamath.cc/item/lem-exponential-series-of-a-bounded-operator). [given, step 1.2]

2.2 The coordinate-map theorem applied to the normed space $X$ and its ordered matrix-unit basis gives a bounded coordinate map $c:X\to\mathbb C^{n^2}$, where the coordinate space has its $\ell^1$ norm. In particular, there is a constant $C\geq0$ such that $\sum_\alpha|c(x)_\alpha|\leq C\|x\|$ for all $x\in X$. For each $\beta$, applying this to $(T_N-T)E_\beta$ and using step 2.1 shows that every matrix entry of $T_N$ converges to the corresponding entry of the Liouville matrix of $T$. By step 1.2 these entries are the partial sums of $\sum_{r=0}^{\infty}t^rL^r/r!$, proving the claimed equality $S=e^{tL}$. The Choi entry identity from step 1.1 then gives the Choi matrix by reshuffling. If $n=0$, both matrix series and the Choi matrix are empty and the same conclusions hold. [math:thm-coordinate-map-for-a-finite-dimensional-normed-space](https://alphabetamath.cc/item/thm-coordinate-map-for-a-finite-dimensional-normed-space) [math:thm-unique-coordinates-with-respect-to-an-ordered-basis](https://alphabetamath.cc/item/thm-unique-coordinates-with-respect-to-an-ordered-basis). [given, step 1.1, step 1.2, step 2.1] ∎


## Finite no-jump and ordered-jump expansion

[Open item](item-lem-qec-prereq-trajectory-dyson-expansion) · level 1


### Statement

Take the finite-dimensional GKSL data $d,H,L_1,\ldots,L_m$ and channel $\mathcal N_t=e^{t\mathcal L}$ from the finite GKSL interface, with $t\geq0$. The matrix spectral norm means $\|X\|=\sup_{\|v\|_2\leq1}\|Xv\|_2$ on $\mathbb C^d$, where $\|v\|_2=(\sum_i|v_i|^2)^{1/2}$; map norms are induced by this matrix norm. Put $G=-iH-\frac12\sum_aL_a^\dagger L_a$ and $E(u)=e^{uG}$. For $n\geq1$, indices $a_1,\ldots,a_n\in\{1,\ldots,m\}$ and ordered times $0\leq s_1\leq\cdots\leq s_n\leq t$, define $K_{a_1\cdots a_n}(s_1,\ldots,s_n)=E(t-s_n)L_{a_n}E(s_n-s_{n-1})\cdots L_{a_1}E(s_1)$; for $n=0$ put $K_\varnothing=E(t)$. All matrix-valued integrals are taken entrywise. For $n\geq2$, the ordered-integral notation means the nested one-dimensional Riemann integral

$$\int_{0\leq s_1\leq\cdots\leq s_n\leq t}f(s)\,ds_1\cdots ds_n:=\int_0^t\int_0^{s_n}\cdots\int_0^{s_2}f(s_1,\ldots,s_n)\,ds_1\cdots ds_n.$$

For $n=1$ it means $\int_0^t f(s_1)\,ds_1$. Then

$$\mathcal N_t(X)=E(t)XE(t)^\dagger+\sum_{n=1}^\infty\sum_{a_1,\ldots,a_n}\int_{0\leq s_1\leq\cdots\leq s_n\leq t}K_{a_1\cdots a_n}(s)XK_{a_1\cdots a_n}(s)^\dagger\,ds_1\cdots ds_n.$$

The series converges absolutely in the operator norm induced by the matrix spectral norm. Thus $E(t)$ is the no-jump amplitude and $E(t-s)L_aE(s)$ is the single-jump amplitude at time $s$; these names describe terms of this mathematical expansion. If $g=\|G\|$ and $j=\sum_a\|L_a\|^2$, the norm of the sum of all terms with at least $N$ jumps is at most $e^{2gt}\sum_{n=N}^\infty(jt)^n/n!$ for $N\geq1$.

As $t\downarrow0$, $E(t)=I+tG+O(t^2)$ in matrix norm and $\mathcal N_t(X)=E(t)XE(t)^\dagger+t\sum_aL_aXL_a^\dagger+O(t^2)\|X\|$ uniformly in $X$. Consequently the finite amplitudes $E(t)$ and $\sqrt t L_a$ represent the channel through first order, with an $O(t^2)$ induced-norm error; they are not asserted to give the exact channel at finite time.

### Facts & Assumptions

[F1] The finite GKSL interface defines $\mathcal L(X)=-i[H,X]+\sum_a(L_aXL_a^\dagger-\{L_a^\dagger L_a,X\}/2)$ and $\mathcal N_t=e^{t\mathcal L}$ for finite matrices, Hermitian $H$, a finite family of $L_a$, and $t\geq0$. [def-qec-prereq-finite-gksl-channel-interface](item-def-qec-prereq-finite-gksl-channel-interface)

[F2] On a complex Banach space, a strongly continuous bounded operator family with a continuous norm majorant has a unique solution given by its uniformly convergent iterated Volterra series. [physics:lem-qsm-dt-banach-volterra-dyson](https://alphabetamath.cc/physics/item/lem-qsm-dt-banach-volterra-dyson)

[F3] Every finite-dimensional complex normed space is complete. [physics:cor-finite-dimensional-normed-spaces-are-banach](https://alphabetamath.cc/physics/item/cor-finite-dimensional-normed-spaces-are-banach)

[F4] A bounded operator exponential is norm differentiable, obeys the group law and the bound $\|e^{uA}\|\leq e^{|u|\|A\|}$, and has quadratic remainder at zero. [math:lem-exponential-series-of-a-bounded-operator](https://alphabetamath.cc/item/lem-exponential-series-of-a-bounded-operator)

[F5] On $\mathbb C^d$ with its Euclidean norm, the matrix operator norm in the statement makes $M_d(\mathbb C)$ a complete normed matrix algebra with $\|AB\|\leq\|A\|\|B\|$, $\|A^\dagger\|=\|A\|$, and $\|I\|=1$. [math:lem-matrix-algebra-is-a-c-star-algebra](https://alphabetamath.cc/item/lem-matrix-algebra-is-a-c-star-algebra)

[F6] A continuous curve in a complete normed real space has a norm-Riemann integral, linear in the curve and commuting with bounded real-linear maps; its indefinite integral has derivative equal to the curve. The integral is bounded by interval length times the supremum norm. Complex matrix spaces can be used as real spaces here. [physics:lem-cm-integral-and-ftc-for-continuous-normed-space-curves](https://alphabetamath.cc/physics/item/lem-cm-integral-and-ftc-for-continuous-normed-space-curves)

### Proof

**Given:** The finite matrices and nonnegative time in the statement. Matrix norms below are spectral norms, and map norms are their induced operator norms.

**Goal:** Establish the ordered expansion, its tail bound, and the stated short-time approximation.

1.1 Define $\mathcal A(X)=GX+XG^\dagger$ and $\mathcal J(X)=\sum_aL_aXL_a^\dagger$. Direct expansion of [F1] gives $\mathcal L=\mathcal A+\mathcal J$. By [F5], $\|\mathcal A\|\leq2g$ and $\|\mathcal J\|\leq j$, so $\mathcal L$ is bounded too. The matrix space is Banach by [F5], while $\mathbb C^d$ and the finite-dimensional space of matrix-space linear maps with the induced norm are Banach by [F3]. The entry functional obeys $|X_{ij}|\leq\|X\|$: the $j$th column has Euclidean norm at most $\|X\|$ and each entry has modulus at most that column norm. Conversely $\|X\|\leq\sum_{i,j}|X_{ij}|$, by the triangle inequality applied to $X=\sum_{i,j}X_{ij}E_{ij}$ and $\|E_{ij}\|=1$. These inequalities show that the exponential series in the finite GKSL interface has the same entrywise sum as the spectral-norm exponential here. By [F4], $e^{u\mathcal A}(X)=E(u)XE(u)^\dagger$: for $u\geq0$ both sides solve the same linear differential equation with initial value $X$, by differentiating the right side and using uniqueness in [F2]. For $u<0$ apply the same argument to $-\mathcal A$ and $-G$. In particular $\|e^{u\mathcal A}\|\leq e^{2|u|g}$ by [F4] and [F5]. [given, F1, F2, F3, F4, F5, algebra]

2.1 For fixed $X$ set $Y(t)=e^{-t\mathcal A}e^{t\mathcal L}X$. Differentiation using [F4] yields $Y'(t)=B(t)Y(t)$, $Y(0)=X$, where $B(t)=e^{-t\mathcal A}\mathcal J e^{t\mathcal A}$. On every finite interval $[0,T]$, $B$ is norm-continuous and $\|B(t)\|\leq je^{4Tg}$, so [F2] applies. To obtain the series in map norm as well, apply [F2] on the Banach space of matrix-space linear maps to the coefficient $\Phi\mapsto B(s)\Phi$, with initial map the identity; its norm is bounded by $je^{4Tg}$. The recursion in [F2] nests the earliest time innermost, exactly as in the ordered-integral convention of the statement. By [F6], a fixed bounded linear map commutes with each integral. Thus its iterated integrals, multiplied on the left by $e^{t\mathcal A}$, have integrand $e^{(t-s_n)\mathcal A}\mathcal J e^{(s_n-s_{n-1})\mathcal A}\cdots\mathcal J e^{s_1\mathcal A}X$ on $0\leq s_1\leq\cdots\leq s_n\leq t$; the exponential group law cancels adjacent factors. Expanding the finite sums in $\mathcal J$ and using step 1.1 gives exactly the displayed amplitudes and integrals. [given, F2, F4, F6, step 1.1, algebra]

3.1 The integrals in step 2.1 exist in norm by the Volterra recursion [F2]; moving the fixed linear factors through them and expanding the finite sums uses [F6]. For each matrix entry, the real and imaginary parts of $X\mapsto X_{ij}$ are bounded real-linear functionals by step 1.1, so [F6] identifies these norm integrals with entrywise integrals. The same conclusion holds for the map-valued integrands: apply the bounded evaluation maps $\Phi\mapsto\Phi(X)$ and then matrix-entry functionals. The inequality $\|\int f\|\leq\int\|f\|$ follows by the triangle inequality on each Riemann sum and passage to the limits; $\|f\|$ is continuous. Finally, the nested integral of the constant $1$ is $V_n(t)=t^n/n!$: start with $V_0(t)=1$ and use $V_n(t)=\int_0^t V_{n-1}(u)\,du$ and the polynomial antiderivative, by the fundamental theorem in [F6]. This is the ordered integration weight used below. [F2, F6, step 1.1, step 2.1, algebra]

4.1 For ordered times the nonnegative propagation intervals sum to $t$. Therefore each $n$-jump integrand has induced norm at most $e^{2gt}\prod_{k=1}^n\|L_{a_k}\|^2$. Summing indices gives $e^{2gt}j^n$. Applying the integral norm bound successively and using $V_n(t)=t^n/n!$ from step 3.1 gives the factorial factor. Thus the $n$-jump term has norm at most $e^{2gt}(jt)^n/n!$. The exponential majorant proves absolute induced-norm convergence and the stated tail bound. [given, F5, step 1.1, step 2.1, step 3.1, algebra]

5.1 By [F4], $\|E(t)-I-tG\|\leq t^2g^2e^{tg}/2$. For the one-jump term, write its integrand as $e^{(t-s)\mathcal A}\mathcal J e^{s\mathcal A}$; subtracting $\mathcal J$ and using $\|e^{u\mathcal A}-I\|\leq e^{2ug}-1$ for $u\geq0$ (from the series in [F4] and $\|\mathcal A\|\leq2g$) bounds the difference by $j(e^{2tg}-1)$ for each $s\in[0,t]$. Hence its integral differs from $t\mathcal J$ by at most $tj(e^{2tg}-1)$. Step 4.1 bounds all terms with at least two jumps by $e^{2gt}(jt)^2e^{jt}/2$. Both bounds are $O(t^2)$ as $t\downarrow0$, and $t\mathcal J(X)=\sum_a(\sqrt t L_a)X(\sqrt t L_a)^\dagger$. This proves the approximation and its uniform induced-norm error. [given, F4, step 1.1, step 2.1, step 3.1, step 4.1, algebra] ∎


## Conditional jump-time phases form a positive Gram matrix

[Open item](item-lem-qec-prereq-jump-time-phase-gram) · level 1


### Statement

Let $t\geq0$, let $\mu$ be a probability measure on the Borel sets of $[0,t]$, and let $\theta_1,\ldots,\theta_r$ be bounded Borel-measurable real functions, where $r\geq1$. Define $G_{jk}=\int_{[0,t]}e^{i(\theta_j(s)-\theta_k(s))}\,d\mu(s)$. Then $G$ is Hermitian positive semidefinite, $G_{jj}=1$, and $|G_{jk}|\leq1$.

For the following conditional branch, let $\rho$ be a density operator on $\mathbb C^r$ and let $D(s)$ be diagonal with entries $e^{i\theta_j(s)}$. If its normalized output is the entrywise average $\sigma=\int D(s)\rho D(s)^\dagger\,d\mu(s)$, then $\sigma_{jk}=G_{jk}\rho_{jk}$. Thus $G_{jk}$ is the relative-coherence multiplier for this branch. A common input-independent waiting law supplies $\mu$ only when a model also establishes this diagonal phase action and the stated averaging formula.

### Facts & Assumptions

[F1] A probability measure has total mass one. [math:def-probability-measure](https://alphabetamath.cc/item/def-probability-measure)

[F2] On complex $L^2(\mu)$, the pairing is $\langle f,g\rangle=\int f\overline g\,d\mu$, linear in the first variable. [math:def-complex-l-two-inner-product](https://alphabetamath.cc/item/def-complex-l-two-inner-product)

[F3] This pairing is an inner product and satisfies $|\langle f,g\rangle|\leq\|f\|_2\|g\|_2$. [math:thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz](https://alphabetamath.cc/item/thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz)

[F4] A Gram matrix has entries given by pairwise inner products. [math:def-gram-matrix-and-gram-determinant](https://alphabetamath.cc/item/def-gram-matrix-and-gram-determinant)

[F5] A density operator is a non-negative trace-one endomorphism; matrix entries and adjoints use the stated finite coordinate conventions. [math:def-qc-density-operator](https://alphabetamath.cc/item/def-qc-density-operator) [def-qec-prereq-finite-operator-conventions](item-def-qec-prereq-finite-operator-conventions)

[F6] The Borel sigma-algebra of a topological space is generated by its open sets. A function between measurable spaces is measurable when inverse images of all measurable sets are measurable. [math:def-borel-sigma-algebra](https://alphabetamath.cc/item/def-borel-sigma-algebra) [math:def-measurable-function-between-measurable-spaces](https://alphabetamath.cc/item/def-measurable-function-between-measurable-spaces)

[F7] The complex exponential is complex differentiable everywhere, and complex differentiability implies continuity. [math:thm-complex-exponential-is-entire-with-derivative-itself](https://alphabetamath.cc/item/thm-complex-exponential-is-entire-with-derivative-itself) [math:cor-complex-differentiability-implies-continuity](https://alphabetamath.cc/item/cor-complex-differentiability-implies-continuity)

[F8] A continuous map between topological spaces has Borel inverse images of Borel sets. [math:thm-continuous-preimages-of-borel-sets-are-borel](https://alphabetamath.cc/item/thm-continuous-preimages-of-borel-sets-are-borel)

[F9] For real $u$, $|e^{iu}|=1$; for complex $z,w$, $e^{z+w}=e^ze^w$. Also $z\overline z=|z|^2$, and conjugation and modulus obey their usual sum and product laws. [math:cor-complex-exponential-cartesian-form-modulus-and-eulers-identity](https://alphabetamath.cc/item/cor-complex-exponential-cartesian-form-modulus-and-eulers-identity) [math:thm-complex-exponential-addition-and-real-extension](https://alphabetamath.cc/item/thm-complex-exponential-addition-and-real-extension) [math:lem-complex-conjugation-and-modulus-laws](https://alphabetamath.cc/item/lem-complex-conjugation-and-modulus-laws)

[F10] Complex functions are measurable when their real and imaginary components are measurable; products and conjugation preserve this property. The space $L^2(\mu;\mathbb C)$ consists of measurable functions with finite squared-modulus integral, modulo equality almost everywhere, and complex integration is componentwise. [math:def-complex-lp-and-euclidean-test-function-conventions](https://alphabetamath.cc/item/def-complex-lp-and-euclidean-test-function-conventions)

[F11] The integral of complex integrable functions is complex-linear. [math:thm-linearity-of-the-lebesgue-integral-on-l-one](https://alphabetamath.cc/item/thm-linearity-of-the-lebesgue-integral-on-l-one)

[F12] On a finite-dimensional inner-product space, a non-negative operator is a self-adjoint endomorphism $T$ satisfying $\langle Tv,v\rangle\geq0$ for every $v$; here positive semidefinite means non-negative. [math:def-non-negative-and-positive-operator](https://alphabetamath.cc/item/def-non-negative-and-positive-operator)

### Proof

**Given:** The probability measure, phases, and, for the conditional assertion, $\rho$, $D(s)$ and the averaging formula in the statement.

**Goal:** Prove the matrix properties and the conditional coherence formula.

1.1 Put $E(u)=e^{iu}$ for real $u$ and $f_j=E\circ\theta_j$. By F7, $E$ is continuous: the map $u\mapsto iu$ preserves distances, and composing it with the continuous exponential preserves continuity. The coordinate projections $z\mapsto\operatorname{Re}z$ and $z\mapsto\operatorname{Im}z$ are continuous, since each coordinate difference is bounded in absolute value by the modulus of the complex difference. For every Borel $B\subseteq\mathbb C$, $f_j^{-1}(B)=\theta_j^{-1}(E^{-1}(B))$ is Borel by F6 and F8. The same inverse-image argument for the continuous real and imaginary components of $E$ shows that $f_j$ is measurable in the componentwise convention of F10. [given, F6, F7, F8, F10]

2.1 F9 gives $|f_j(s)|=1$. F1 and F10 give $\int|f_j|^2\,d\mu=\mu([0,t])=1$, so each $f_j$ represents an $L^2(\mu)$ vector of norm one. For real $a,b$, exponential addition gives $E(a)=E(a-b)E(b)$. Multiplying by $\overline{E(b)}$ and using $E(b)\overline{E(b)}=|E(b)|^2=1$ gives $E(a-b)=E(a)\overline{E(b)}$. Taking $a=\theta_j(s)$ and $b=\theta_k(s)$ identifies the stated phase-difference integrand with $f_j(s)\overline{f_k(s)}$; F2 makes this product integrable. The stated entries satisfy $G_{jk}=\langle f_j,f_k\rangle$; thus $G$ is their Gram matrix. [F1, F2, F4, F9, F10, step 1.1, algebra]

3.1 Regard $G$ as the coordinate endomorphism $c\mapsto Gc$ of $\mathbb C^r$ with its standard first-variable-linear inner product, as in F5. Conjugate symmetry gives $G_{kj}=\overline{G_{jk}}$, so its conjugate transpose equals $G$ and this endomorphism is self-adjoint. For any $c\in\mathbb C^r$, first-variable linearity gives $\langle Gc,c\rangle_{\rm root}=c^\dagger Gc=\sum_{j,k}\overline{c_j}c_k\langle f_j,f_k\rangle=\|\sum_j\overline{c_j}f_j\|_2^2\geq0$. F12 therefore identifies this endomorphism as non-negative. Hence $G$ is Hermitian positive semidefinite. Also $G_{jj}=\|f_j\|_2^2=1$, and Cauchy–Schwarz gives $|G_{jk}|\leq1$. [F3, F5, F12, step 2.1, algebra]

4.1 By diagonal matrix multiplication and the phase identity in step 2.1, $(D(s)\rho D(s)^\dagger)_{jk}=f_j(s)\overline{f_k(s)}\rho_{jk}=e^{i(\theta_j(s)-\theta_k(s))}\rho_{jk}$. The product $f_j\overline{f_k}$ is measurable by F10 and the entry is integrable, since its modulus is the constant $|\rho_{jk}|$ and $\mu([0,t])=1$. Entrywise integration and scalar linearity therefore give $\sigma_{jk}=\rho_{jk}\int e^{i(\theta_j-\theta_k)}\,d\mu=G_{jk}\rho_{jk}$. This uses the assumed averaging formula; it does not derive a waiting law or phase action from a physical model. [given, F1, F5, F9, F10, F11, step 1.1, step 2.1] ∎


## Invariant finite truncation for lowering generators

[Open item](item-lem-qec-prereq-lowering-invariant-truncation) · level 1


### Statement

Let $V=\bigoplus_{j=0}^{J_*}V_j$ be a finite-dimensional complex inner product space expressed as an orthogonal direct sum, with $J_*$ a nonnegative integer. Let $H=H^\dagger$ preserve each $V_j$, and let a finite family of linear maps $L_a$ satisfy $L_aV_j\subseteq V_{j-1}$ for every $j$, where $V_{-1}=\{0\}$. Let $\mathcal L(X)=-i[H,X]+\sum_a(L_aXL_a^\dagger-\{L_a^\dagger L_a,X\}/2)$ and $\mathcal N_t=e^{t\mathcal L}$ for $t\geq0$.

For any integer $0\leq J_0\leq J_*$, put $W=\bigoplus_{j=0}^{J_0}V_j$ and let $P$ be the orthogonal projection onto $W$. The operators supported on $W$, meaning those $X$ with $X=PXP$, are preserved by $\mathcal N_t$. Under the natural inclusion of operators on $W$ into operators on $V$, the restriction of $\mathcal N_t$ is exactly $e^{t\mathcal L_W}$, where $\mathcal L_W$ is the same GKSL formula on $W$ with $H_W=H|_W$ and $L_{a,W}=L_a|_W$. If $W=\{0\}$, this equality is understood on the zero operator space. The conclusion requires the stated lowering condition; a low-temperature heuristic alone does not establish it.

### Facts & Assumptions

[F1] In orthonormal coordinates on a nonzero finite-dimensional complex inner product space, a Hermitian $H$ and a finite family of jumps define the displayed finite GKSL generator and its channel as the operator-norm exponential series for $t\geq0$. [def-qec-prereq-finite-gksl-channel-interface](item-def-qec-prereq-finite-gksl-channel-interface)

[F2] An inner product is positive definite and Hermitian; orthogonality means that the inner product of vectors from different summands is zero. [math:def-inner-product-space](https://alphabetamath.cc/item/def-inner-product-space)

[F3] The orthogonal projection onto a subspace sends a vector to its component in that subspace along its orthogonal complement. [math:def-orthogonal-projection](https://alphabetamath.cc/item/def-orthogonal-projection)

[F4] The exponential series of a bounded operator on a real or complex Banach space converges in operator norm. [math:lem-exponential-series-of-a-bounded-operator](https://alphabetamath.cc/item/lem-exponential-series-of-a-bounded-operator)

[F5] The adjoint $T^\dagger$ is characterized by $\langle Tu,v\rangle=\langle u,T^\dagger v\rangle$; every linear map between finite-dimensional real or complex inner product spaces has a unique such adjoint, including zero-dimensional spaces. [math:def-adjoint-of-a-linear-map-between-inner-product-spaces](https://alphabetamath.cc/item/def-adjoint-of-a-linear-map-between-inner-product-spaces) [math:thm-adjoint-exists-and-is-unique-in-finite-dimension](https://alphabetamath.cc/item/thm-adjoint-exists-and-is-unique-in-finite-dimension)

[F6] A real or complex normed space admitting an ordered basis of finite length is Banach. [math:cor-finite-dimensional-normed-spaces-are-banach](https://alphabetamath.cc/item/cor-finite-dimensional-normed-spaces-are-banach)

[F7] Every linear map between normed spaces over the same scalar field is bounded if its domain admits an ordered basis of finite length. [math:cor-linear-maps-with-finite-dimensional-domain-are-bounded](https://alphabetamath.cc/item/cor-linear-maps-with-finite-dimensional-domain-are-bounded)

[F8] Every finite-dimensional real or complex inner product space has an orthonormal basis, with the empty basis in dimension zero. [math:cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases](https://alphabetamath.cc/item/cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases)

### Proof

**Given:** The finite orthogonal grading, Hermitian $H$, lowering maps, cutoff $J_0$, and nonnegative $t$ of the statement.

**Goal:** Prove support invariance and equality with the compressed exponential.

1.1 By [F8], choose an ordered orthonormal basis in each of the finitely many blocks $V_j$. Concatenation in increasing block order gives an ordered orthonormal basis of $V$ whose initial segment is a basis of $W$. All daggers exist by [F5]. If $A$ has entries $a_{ij}$ in orthonormal bases, the identity in [F5] evaluated on basis vectors says that the entry of $A^\dagger$ in row $j$, column $i$ is $\overline{a_{ij}}$. Thus the abstract daggers are the conjugate transposes used by [F1], and on every nonzero space the abstract GKSL formula identifies with that finite matrix interface. [given, F1, F2, F5, F8, choose, algebra]

1.2 For $u\in V_j$ and $v\in V_k$, the adjoint identity and conjugate symmetry give $\langle L_a^\dagger L_a u,v\rangle=\langle L_a u,L_a v\rangle$. When $j\ne k$, the latter is zero because the two images lie in distinct orthogonal summands, with the zero image allowed. Thus $L_a^\dagger L_a$ preserves every $V_j$. The block-preserving $H$ therefore commutes with $P$, as does each $L_a^\dagger L_a$. Moreover $L_aW\subseteq W$, so $L_aP=PL_aP$. [given, F2, F3, F5, algebra]

2.1 Let $\iota(Y)$ denote extension by zero to $W^\perp$ of an operator $Y$ on $W$. In the adapted basis from step 1.1, this has diagonal blocks $Y$ and zero. Since $L_aW\subseteq W$, the lower-left block of $L_a$ is zero; block multiplication gives $L_a\iota(Y)L_a^\dagger=\iota(L_{a,W}YL_{a,W}^\dagger)$. The upper-left block of $L_a^\dagger L_a$ is $L_{a,W}^\dagger L_{a,W}$, and step 1.2 makes its off-diagonal blocks zero. The same block property holds for $H$, and $H_W$ is Hermitian by the adjoint identity. Hence the commutator and anticommutator terms also compress exactly, proving $\mathcal L(\iota(Y))=\iota(\mathcal L_W(Y))$. Induction gives $\mathcal L^n\iota(Y)=\iota(\mathcal L_W^n(Y))$ for every nonnegative integer $n$. The restricted jumps form a finite family, so the compressed formula has the finite GKSL form whenever $W$ is nonzero. [given, F1, F3, F5, step 1.1, step 1.2, algebra]

2.2 Suppose $W\ne\{0\}$. Equip each of the complex spaces of operators on $V$ and on $W$ with the coordinate norm $\|X\|_{\mathrm{ent},1}=\sum_{i,j}|X_{ij}|$ in its basis from step 1.1. This is a norm: definiteness and absolute homogeneity follow entrywise, and summing $|X_{ij}+Y_{ij}|\leq|X_{ij}|+|Y_{ij}|$ proves its triangle inequality. The matrix units, ordered lexicographically by $(i,j)$, are finite ordered bases. Thus [F6] makes both normed operator spaces Banach. The displayed formulas are complex-linear, so [F7] makes $\mathcal L$ and $\mathcal L_W$ bounded. With the induced norm $\|S\|=\sup_{X\ne0}\|S(X)\|_{\mathrm{ent},1}/\|X\|_{\mathrm{ent},1}$, [F4] therefore applies and gives operator-norm convergence of both exponential series. [given, F4, F6, F7, step 1.1, algebra]

3.1 In these adapted coordinates $\|\iota(Y)\|_{\mathrm{ent},1}=\|Y\|_{\mathrm{ent},1}$ because extension only adds zero entries. Applying step 2.1 to finite exponential partial sums and using this isometry to pass to their limits from step 2.2 gives $\mathcal N_t(\iota(Y))=\iota(e^{t\mathcal L_W}Y)$. An operator is supported on $W$ exactly when it is such an extension, proving invariance and exact compressed evolution. If $W=\{0\}$, the only supported operator is zero; its image under any linear map is zero, and the exponential on the zero operator space is its unique map. If also $V=\{0\}$, the same convention defines the ambient exponential, so the equality still holds. [given, F1, F3, step 2.1, step 2.2, algebra] ∎


## Rotation covariance and operator-weight sectors

[Open item](item-lem-qec-prereq-rotation-covariance-sectors) · level 1


### Statement

Let $J_z=\operatorname{diag}(m_1,\ldots,m_d)$ have real diagonal entries, and let $H=H^\dagger$ be diagonal in the same basis. Let $L_1,\ldots,L_r$ be matrices satisfying $[J_z,L_a]=q_aL_a$, where each $q_a$ is real. Define the finite GKSL generator $\mathcal L(X)=-i[H,X]+\sum_a(L_aXL_a^\dagger-\{L_a^\dagger L_a,X\}/2)$ and $R_\theta=e^{-i\theta J_z}$ for real $\theta$. Then $R_\theta L_aR_\theta^\dagger=e^{-iq_a\theta}L_a$, and $\mathcal L$ commutes with the map $X\mapsto R_\theta X R_\theta^\dagger$.

For each real difference $\omega$, the operator-weight sector $W_\omega=\operatorname{span}\{E_{jk}:m_j-m_k=\omega\}$ is invariant under $\mathcal L$. Here $E_{jk}$ is the matrix unit with a single $1$ in row $j$, column $k$. In particular, the same conclusion applies to the standard finite-spin diagonal matrix $J_z$ with magnetic labels $m=-s,-s+1,\ldots,s$. If the weight convention is instead $[J_z,L_a]=-q_aL_a$, the jump phase is $e^{+iq_a\theta}$.

### Statement references

[def-qec-prereq-finite-gksl-channel-interface](item-def-qec-prereq-finite-gksl-channel-interface)

[def-qec-prereq-liouville-choi-reshuffle](item-def-qec-prereq-liouville-choi-reshuffle)

[physics:prop-nrqm-orbital-and-spin-finite-spin-matrices](https://alphabetamath.cc/physics/item/prop-nrqm-orbital-and-spin-finite-spin-matrices)

[physics:def-nrqmx-finite-hermitian-matrix-exponential](https://alphabetamath.cc/physics/item/def-nrqmx-finite-hermitian-matrix-exponential)

### Facts & Assumptions

[F1] The finite GKSL interface defines the displayed generator for Hermitian $H$ and a finite family of matrices, with $[A,B]=AB-BA$, $\{A,B\}=AB+BA$ and $\dagger$ denoting conjugate transpose. [def-qec-prereq-finite-gksl-channel-interface](item-def-qec-prereq-finite-gksl-channel-interface)

[F2] In an ordered finite basis, matrix units form a basis for the matrix space, so every matrix has a unique expansion in them. [def-qec-prereq-liouville-choi-reshuffle](item-def-qec-prereq-liouville-choi-reshuffle)

[F3] For $s\in\frac12\mathbb N$, the standard finite-spin matrix $J_z$ is diagonal with real entries $m=-s,-s+1,\ldots,s$. [physics:prop-nrqm-orbital-and-spin-finite-spin-matrices](https://alphabetamath.cc/physics/item/prop-nrqm-orbital-and-spin-finite-spin-matrices)

[F4] For a finite complex matrix $A$ and complex scalar $z$, the matrix exponential is $e^{zA}=\sum_{n=0}^{\infty}z^nA^n/n!$, with $A^0=I$ and absolute convergence in operator norm. [physics:def-nrqmx-finite-hermitian-matrix-exponential](https://alphabetamath.cc/physics/item/def-nrqmx-finite-hermitian-matrix-exponential)

[F5] If a finite complex matrix $A$ satisfies $A^\dagger=-A$, then $e^{tA}$ is unitary for every real $t$. [math:lem-skew-hermitian-matrix-exponential-is-unitary](https://alphabetamath.cc/item/lem-skew-hermitian-matrix-exponential-is-unitary)

### Proof

**Given:** The matrices, real weights and real parameter in the statement.

**Goal:** Prove the jump phases, covariance and invariance of each stated sector.

1.1 By [F4], the exponential series for the diagonal matrix gives $R_\theta=\operatorname{diag}(e^{-i\theta m_1},\ldots,e^{-i\theta m_d})$. Since $(-iJ_z)^\dagger=iJ_z=-(-iJ_z)$, [F5] with $A=-iJ_z$ and $t=\theta$ gives $R_\theta^\dagger=R_\theta^{-1}$. The $(j,k)$ entry of $[J_z,L_a]=q_aL_a$ is $(m_j-m_k-q_a)(L_a)_{jk}=0$. Consequently every nonzero entry of $L_a$ has $m_j-m_k=q_a$, and entrywise multiplication gives $R_\theta L_aR_\theta^\dagger=e^{-iq_a\theta}L_a$. Replacing $q_a$ by $-q_a$ gives the stated alternative phase. [given, F1, F4, F5, algebra]

2.1 Write $C_\theta(X)=R_\theta X R_\theta^\dagger$. Because $H$ and $R_\theta$ are diagonal, $C_\theta(H)=H$. Conjugation by the unitary $R_\theta$ preserves products and adjoints. The phases from step 1.1 therefore cancel in both $C_\theta(L_a)C_\theta(X)C_\theta(L_a)^\dagger$ and $C_\theta(L_a)^\dagger C_\theta(L_a)$. Applying this to each term of the generator yields $C_\theta(\mathcal L(X))=\mathcal L(C_\theta(X))$. [given, F1, step 1.1, algebra]

3.1 For $E_{jk}$, direct multiplication gives $C_\theta(E_{jk})=e^{-i\theta(m_j-m_k)}E_{jk}$. If $X\in W_\omega$, linearity and step 2.1 imply $C_\theta(\mathcal L(X))=e^{-i\theta\omega}\mathcal L(X)$ for every real $\theta$. Expand $\mathcal L(X)=\sum_{j,k}c_{jk}E_{jk}$ using [F2]. Comparing the $(j,k)$ entries for all $\theta$ shows $c_{jk}=0$ whenever $m_j-m_k\ne\omega$, since the two real-frequency exponentials then differ for some $\theta$. Hence $\mathcal L(X)\in W_\omega$. The finite-spin instance follows from [F3]. [given, F2, F3, step 1.1, step 2.1, algebra] ∎


## Calibrated diagonal lifts and transition phase differences

[Open item](item-def-qec-prereq-diagonal-lift-phase-data) · level 1


### Definition

Let $H=\mathbb C^d$ be a finite operator space with specified orthonormal basis $\{|x\rangle\}_{x=1}^d$, where $d\geq 1$. For specified real numbers $d_x$, the diagonal lift is the linear operator $D=\sum_x d_x|x\rangle\langle x|$. Its phase evolution at real time $t$, in units with $\hbar=1$, is $U_t=e^{-itD}$, acting on an operator $X$ by $X\mapsto U_tXU_t^\dagger$. In particular, the matrix unit $|x\rangle\langle y|$ acquires the phase $e^{-it(d_x-d_y)}$.

If an unperturbed Hamiltonian $H_0$ is diagonal in this same basis with eigenvalues $E_x$, define the directed transition energy for $x\to y$ as the source energy minus the destination energy. Replacing $H_0$ by $H_0+D$ changes this difference from $E_x-E_y$ to $(E_x-E_y)+(d_x-d_y)$; the lift contribution is therefore $d_x-d_y$.

For the calibration criterion, a recovery rule is a supplied parameterized family of quantum channels $\mathcal R_{a,\tau}:\mathcal L(H_R)\to\mathcal L(H_L)$, indexed by $(a,\tau)\in A$, where $H_R$ and $H_L$ are specified nonzero finite operator spaces, $\mathcal L(K)$ denotes the linear endomorphisms of $K$, and $A\subseteq\mathbb R^d\times[0,\infty)$ is a specified nonempty set of admissible lift vectors and elapsed intervals. Any auxiliary inputs, such as a recorded outcome, are fixed or supplied separately. The phase data are calibrated for this rule at an admissible pair $(a,\tau)$ with $a=(d_1,\ldots,d_d)$ when the actual vector $a$ and interval $\tau$ are supplied as explicit inputs and the rule evaluates the specified channel $\mathcal R_{a,\tau}$. Each channel is complex-linear, completely positive and trace-preserving; the word recovery specifies its intended use and supplies no correction guarantee or physical control assumption.

This availability is an assumption about the rule's inputs, not a claim that an unknown jump time has been observed. An unknown jump time remains a variable; averaging over it requires a separately specified probability distribution.

When probabilistic averaging is invoked, the additional inputs are a probability space $(T,\mathcal T,\mu)$ of allowed real times $T\subseteq\mathbb R$ and a specified $\mu$-integrable real or complex scalar function $f$ on $T$. The probability measure $\mu$ is the jump-time distribution, and the average means the expectation $\mathbb E_\mu[f]=\int_T f\,d\mu$. Neither this distribution nor a choice of $f$ is supplied by calibration alone.

### Definition references

[def-qec-prereq-finite-operator-conventions](item-def-qec-prereq-finite-operator-conventions)

[math:lem-exponential-series-of-a-bounded-operator](https://alphabetamath.cc/item/lem-exponential-series-of-a-bounded-operator)

[math:def-complex-exponential](https://alphabetamath.cc/item/def-complex-exponential)

[math:thm-complex-exponential-addition-and-real-extension](https://alphabetamath.cc/item/thm-complex-exponential-addition-and-real-extension)

[math:def-qc-quantum-channel](https://alphabetamath.cc/item/def-qc-quantum-channel)

[math:def-probability-measure](https://alphabetamath.cc/item/def-probability-measure)

[math:def-expectation-of-a-nonnegative-or-integrable-random-variable](https://alphabetamath.cc/item/def-expectation-of-a-nonnegative-or-integrable-random-variable)

### Facts & Assumptions

[F1] In the finite operator conventions, $|x\rangle\langle y|$ maps $v$ to $|x\rangle\langle y|v\rangle$, and the adjoint is the conjugate transpose in the specified bases. [def-qec-prereq-finite-operator-conventions](item-def-qec-prereq-finite-operator-conventions)

[F2] Every finite-dimensional normed space is Banach and every linear map from such a space to a normed space is bounded. [math:cor-finite-dimensional-normed-spaces-are-banach](https://alphabetamath.cc/item/cor-finite-dimensional-normed-spaces-are-banach) [math:cor-linear-maps-with-finite-dimensional-domain-are-bounded](https://alphabetamath.cc/item/cor-linear-maps-with-finite-dimensional-domain-are-bounded)

[F3] For a bounded linear operator $A$ on a complex Banach space, $e^{tA}=\sum_{n=0}^{\infty}t^nA^n/n!$ converges in operator norm for real $t$. [math:lem-exponential-series-of-a-bounded-operator](https://alphabetamath.cc/item/lem-exponential-series-of-a-bounded-operator)

[F4] For every $z\in\mathbb C$, the scalar exponential is $e^z=\exp z=\sum_{n=0}^{\infty}z^n/n!$; for all complex $z,w$, $e^{z+w}=e^ze^w$. [math:def-complex-exponential](https://alphabetamath.cc/item/def-complex-exponential) [math:thm-complex-exponential-addition-and-real-extension](https://alphabetamath.cc/item/thm-complex-exponential-addition-and-real-extension)

[F5] A quantum channel between finite-dimensional complex inner-product spaces is a complex-linear, completely positive, trace-preserving map on their full operator spaces; the definition assumes no physical realization. [math:def-qc-quantum-channel](https://alphabetamath.cc/item/def-qc-quantum-channel)

[F6] A probability measure on a measurable space has total mass one. On a probability space $(T,\mathcal T,\mu)$, the expectation of a specified $\mu$-integrable real or complex scalar function $f$ is the finite integral $\int_T f\,d\mu$. [math:def-probability-measure](https://alphabetamath.cc/item/def-probability-measure) [math:def-expectation-of-a-nonnegative-or-integrable-random-variable](https://alphabetamath.cc/item/def-expectation-of-a-nonnegative-or-integrable-random-variable)

### Justification

**Given:** The finite operator space, basis and real diagonal data in the definition, real $t$, and, for calibration, the supplied channel family and admissible input pair. When probabilistic averaging is invoked, also the supplied probability space and integrable scalar function in the definition.

**Goal:** Verify the phase evolution and transition difference, the typing of the calibration criterion, and the meaning of the averaging caveat.

1.1 By the basis action in [F1], $D|x\rangle=d_x|x\rangle$ and $D^n|x\rangle=d_x^n|x\rangle$ for every nonnegative integer $n$. The space $H$, with its standard norm, is Banach and $-iD$ is bounded by [F2], so [F3] applies. Acting with its norm-convergent series on each basis vector and using the scalar series in [F4] gives $U_t|x\rangle=e^{-itd_x}|x\rangle$. [F1, F2, F3, F4, algebra]

1.2 At a supplied admissible pair $(a,\tau)$, the given family assigns a channel $\mathcal R_{a,\tau}$ with the source and target operator spaces in [F5]. Evaluating this supplied family defines the rule's use of the known lift vector and interval. It introduces no assertion that a corrective channel family exists for an unspecified noise model, that physical control is available, or that an unknown jump time or its distribution has been supplied. [given, F5]

2.1 For $z\in\mathbb C$ write $p_N(z)=\sum_{n=0}^N z^n/n!$. Conjugating the finite sum gives $\overline{p_N(z)}=p_N(\overline z)$, and $|\overline{p_N(z)}-\overline{e^z}|=|p_N(z)-e^z|\to0$ by [F4]. Thus $\overline{e^z}=e^{\overline z}$. Since $t,d_y$ are real, the diagonal matrix from step 1.1 and the conjugate transpose in [F1] give $U_t^\dagger|y\rangle=e^{itd_y}|y\rangle$. [F1, F4, step 1.1, algebra]

3.1 For every basis vector $|z\rangle$, the three factors in $U_t|x\rangle\langle y|U_t^\dagger$ give $e^{-itd_x}e^{itd_y}|x\rangle\langle y|z\rangle=e^{-it(d_x-d_y)}|x\rangle\langle y|z\rangle$ by [F4]; equality on the basis proves the asserted matrix-unit action. When $H_0|x\rangle=E_x|x\rangle$, $(H_0+D)|x\rangle=(E_x+d_x)|x\rangle$, and subtracting the destination eigenvalue from the source eigenvalue gives the stated transition shift. [F1, F4, step 1.1, step 2.1, algebra]

4.1 With the additional averaging inputs in the definition, [F6] applies to $f$ on $(T,\mathcal T,\mu)$ and defines its finite average as $\int_T f\,d\mu$. This operation uses the specified measure $\mu$ as well as $f$; neither is an input furnished by the calibration criterion itself. Thus the averaging caveat is a requirement to supply a probability model, not a probability law inferred from the channel family or an observation of the unknown time. [given, F6] ∎


## Finite no-jump propagator and survival identity

[Open item](item-lem-qec-author-9ff6bb2d6819-no-jump-survival) · level 1


### Statement

Assume AC (hence Countable Choice for integration). In the finite GKSL interface set $Q=\sum_aL_a^\dagger L_a$, $B=-iH-Q/2$, $V_t=e^{tB}$, and $S_t(X)=V_tXV_t^\dagger$. A density matrix means a positive matrix of trace one. For a density matrix $\sigma$, let $s_\sigma(t)=\operatorname{Tr}S_t(\sigma)$. Then for every $t\ge0$, $V_t$ is invertible, $0<s_\sigma(t)\le1$, $S_t$ is completely positive, and $s_\sigma'(t)=-\operatorname{Tr}(Q S_t(\sigma))$. If $Q\le rI$ with $r\ge0$, then $e^{-rt}\le s_\sigma(t)\le1$.

### Facts & Assumptions

[F1] Use finite matrices, density matrices and the finite GKSL conventions. [def-qec-prereq-finite-gksl-channel-interface](item-def-qec-prereq-finite-gksl-channel-interface)

[F2] Bounded matrix exponentials are differentiable groups, with derivative given by multiplication by their generator. [math:lem-exponential-series-of-a-bounded-operator](https://alphabetamath.cc/item/lem-exponential-series-of-a-bounded-operator)

[F3] Integrate continuous scalar or finite-dimensional matrix derivatives on compact intervals; Countable Choice is sufficient. [math:lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves](https://alphabetamath.cc/item/lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves)

[F4] Adopt AC, including its Countable Choice consequence for the stated integration interface. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)

### Proof

**Given:** The matrices and density matrix in the statement, and $t\ge0$.

**Goal:** Establish positivity, the trace derivative, and the survival bounds.

1.1 The matrix exponential supplier gives $V_t'=BV_t$, $V_t^{-1}=V_{-t}$ and $V_0=I$. For every positive matrix $X$ and every ancilla dimension, conjugation by $V_t$ tensored with the ancilla identity preserves positivity, so $S_t$ is completely positive. In particular $S_t(\sigma)$ is positive and nonzero, since $V_t$ is invertible; its trace is positive. [given, F1, F2, algebra]

2.1 Differentiate the two finite matrix factors and use cyclicity of trace: $s_\sigma'(t)=\operatorname{Tr}((B+B^\dagger)S_t(\sigma))=-\operatorname{Tr}(Q S_t(\sigma))\le0$. Thus $s_\sigma(t)\le s_\sigma(0)=1$. If $Q\le rI$, positivity gives $s_\sigma'(t)\ge-rs_\sigma(t)$, so the derivative of $e^{rt}s_\sigma(t)$ is nonnegative. Integrating this derivative gives $s_\sigma(t)\ge e^{-rt}$. This includes $r=0$ and the empty jump family. [F1, F2, F3, F4, step 1.1, algebra] ∎

### Source notes

Plenio–Knight, Section IV.C, Eqs. (122), (124)–(128), motivates the no-jump/jump split in a cavity example. This item supplies its own finite-matrix argument; no general existence theorem is imported from that example.


## Two-path coherence Gram spectrum and Kraus weights

[Open item](item-lem-qec-prereq-two-path-gram-spectrum) · level 2


### Statement

Let $H=\mathbb C^2$ have ordered orthonormal basis $e_0,e_1$, and let $K$ be a finite-dimensional complex inner-product space with orthonormal vectors $f_0,f_1$. Put $F_j=|f_j\rangle\langle e_j|$. Let $0\leq p\leq1$, $\chi\in\mathbb C$, $|\chi|\leq1$, and $G=\begin{pmatrix}1&\chi\\\overline\chi&1\end{pmatrix}$. Its eigenvalues are $1\pm|\chi|$.

Suppose the linear branch map is $\Phi(X)=p\sum_{j,k=0}^1G_{jk}F_jXF_k^\dagger$. Its input-first unnormalized Choi matrix has two possible nonzero eigenvalues $p(1\pm|\chi|)$, counting zeros when either vanishes. These are the squared Hilbert–Schmidt norms, or canonical weights, of an orthogonal Kraus decomposition of this branch. Each logical basis input has branch probability $p$. When $p>0$, the smaller, phase-adjusted antisymmetric direction carries fraction $(1-|\chi|)/2$ of the sum of the two weights. Rephasing a path rotates the eigenvectors and leaves the weights unchanged. If $\chi=0$, the two directions have equal weights and their eigenbasis is not unique; if $p=0$, both weights vanish and their normalized fraction is undefined.

In particular, a two-phase average satisfying the hypotheses of [lem-qec-prereq-jump-time-phase-gram](item-lem-qec-prereq-jump-time-phase-gram) gives such a matrix with $\chi=G_{01}$; applying the branch conclusion additionally requires the displayed map and common probability $p$.

### Facts & Assumptions

**Given:** The spaces, basis vectors, path maps, parameters and branch map in the Statement.

**Goal:** Establish the spectrum, branch weights and qualified fraction.

[F1] The finite coordinate conventions define adjoints, outer products and ordered tensor factors. [def-qec-prereq-finite-operator-conventions](item-def-qec-prereq-finite-operator-conventions)

[F2] A positive semidefinite finite-dimensional operator has an orthonormal eigenbasis with nonnegative eigenvalues. [def-qec-prereq-support-spectral-calculus](item-def-qec-prereq-support-spectral-calculus)

[F3] With the input-first unnormalized Choi convention, a map $X\mapsto AXA^\dagger$ has Choi matrix $|A\rangle\!\rangle\langle\!\langle A|$, where $|A\rangle\!\rangle=\sum_j e_j\otimes Ae_j$; for a channel, Choi eigenvalues equal canonical Kraus weights. [math:def-qc-choi-matrix](https://alphabetamath.cc/item/def-qc-choi-matrix) [lem-qec-prereq-canonical-choi-weights](item-lem-qec-prereq-canonical-choi-weights)

[F4] The two-phase construction in the cited lemma has unit diagonal and off-diagonal modulus at most one, under its stated probability-measure and phase hypotheses. [lem-qec-prereq-jump-time-phase-gram](item-lem-qec-prereq-jump-time-phase-gram)

[F5] A finite Kraus representation of a linear map is a finite family of operators whose conjugation maps sum to that map on every input operator; trace preservation is not part of this definition, and zero operators are allowed. [math:def-qc-kraus-representation](https://alphabetamath.cc/item/def-qc-kraus-representation)

[F6] Relative to the supplied input basis $E=(e_0,e_1)$, the finite Hilbert–Schmidt norm is $\|A\|_{HS,E}^2=\sum_{j=0}^1\|Ae_j\|^2$. In this item an orthogonal family means that $\operatorname{Tr}(A^\dagger B)=0$ for distinct family members. [math:def-hilbert-schmidt-operator](https://alphabetamath.cc/item/def-hilbert-schmidt-operator)

[F7] The trace of a finite-dimensional endomorphism is the sum of its diagonal entries in any ordered basis. [math:def-trace-of-an-endomorphism](https://alphabetamath.cc/item/def-trace-of-an-endomorphism)

[F8] A finite instrument is a nonempty finite family of completely positive maps whose sum preserves trace. Its outcome weight on a nonnegative trace-one input $\rho$ is the output trace of the corresponding map; this is the meaning of branch probability here. [math:def-qc-instrument-and-conditional-state](https://alphabetamath.cc/item/def-qc-instrument-and-conditional-state)

[F9] A map is completely positive when every finite ancillary block amplification preserves nonnegative operators. [math:def-qc-completely-positive-map](https://alphabetamath.cc/item/def-qc-completely-positive-map)

### Proof

1.1 Set $r=|\chi|$ and choose a unit complex number $u$ with $\chi=ru$; when $r=0$ choose any such $u$. Direct multiplication gives $G(u,\pm1)^T=(1\pm r)(u,\pm1)^T$. The normalized vectors $(u,\pm1)^T/\sqrt2$ are orthonormal and span $\mathbb C^2$, so these are all eigenvalues. Since $0\leq r\leq1$, both are nonnegative. [given, F1, algebra]

2.1 Put $A_\pm=\sqrt{p(1\pm r)/2}(uF_0\pm F_1)$. Expanding the two terms gives $\Phi(X)=A_+XA_+^\dagger+A_-XA_-^\dagger$: the diagonal coefficients are $p$, and the coefficient of $F_0XF_1^\dagger$ is $pru=p\chi$. Also $\operatorname{Tr}(F_j^\dagger F_k)=\delta_{jk}$, hence $\operatorname{Tr}(A_\pm^\dagger A_\pm)=p(1\pm r)$ and $\operatorname{Tr}(A_+^\dagger A_-)=0$. For any $A:H\to K$, the diagonal entries of $A^\dagger A$ are $\|Ae_j\|^2$, so $\|A\|_{HS,E}^2=\sum_{j=0}^1\|Ae_j\|^2=\operatorname{Tr}(A^\dagger A)$. Thus the displayed family is a Kraus representation in the sense of [F5], orthogonal in the sense of [F6], with the asserted squared Hilbert–Schmidt norms. Zero operators are allowed when a weight vanishes. [given, F1, F5, F6, F7, step 1.1, algebra]

3.1 The path orthonormality gives $F_j^\dagger F_k=0$ for $j\ne k$ and $F_0^\dagger F_0+F_1^\dagger F_1=I_H$. Consequently $A_+^\dagger A_++A_-^\dagger A_-=pI_H$. Put $V=F_0+F_1$, $B=\sqrt{1-p}\,V$ and $\Psi(X)=BXB^\dagger$; then $V^\dagger V=I_H$ and $B^\dagger B=(1-p)I_H$. For any $C:H\to K$, the finite block amplification of $X\mapsto CXC^\dagger$ sends $Y\geq0$ on $H\otimes\mathbb C^m$ to $(C\otimes I_m)Y(C\otimes I_m)^\dagger\geq0$: its quadratic form at $z$ is the nonnegative quadratic form of $Y$ at $(C\otimes I_m)^\dagger z$. Thus [F9] makes $\Phi$ and $\Psi$ completely positive, including their zero cases. Finite coordinate summation gives $\operatorname{Tr}(CXC^\dagger)=\operatorname{Tr}(C^\dagger CX)$, so $\operatorname{Tr}\Phi(X)=p\operatorname{Tr}X$ and $\operatorname{Tr}\Psi(X)=(1-p)\operatorname{Tr}X$ for every $X$. Hence $(\Phi,\Psi)$ is a two-outcome instrument by [F8], for all $0\leq p\leq1$. [given, F1, F7, F8, F9, step 2.1, algebra]

3.2 Expanding the Choi definition in [F3] on the matrix units gives $J(\Phi)=\sum_{i,j=0}^1|e_i\rangle\langle e_j|\otimes\sum_{s\in\{+,-\}}|A_se_i\rangle\langle A_se_j|=\sum_{s\in\{+,-\}}|A_s\rangle\!\rangle\langle\!\langle A_s|$. These vectors are orthogonal and have squared norms $p(1\pm r)$ by the same coordinate trace calculation, so the nonzero Choi spectrum has exactly the stated values, with any zero values omitted from the nonzero spectrum. This calculation applies directly to the branch map; it does not assume that the branch alone is trace-preserving. [F1, F3, step 2.1, algebra]

4.1 For input $|e_j\rangle\langle e_j|$, the branch output is $p|f_j\rangle\langle f_j|$, whose trace is $p$. This input is nonnegative with trace one, so [F8] and step 3.1 identify $p$ as its probability for the $\Phi$ outcome. If $p>0$, the weight sum is $2p$, and the smaller weight divided by this sum is $(1-r)/2$. At $p=0$ this quotient is $0/0$ and is undefined. The minus direction is the difference of the two paths after the phase adjustment $F_0\mapsto uF_0$; when $r=0$ and $p>0$, the two nonzero Choi eigenvalues coincide and any orthonormal basis of their two-dimensional eigenspace is valid. When $p=0$, step 3.2 gives $J(\Phi)=0$, whose zero eigenspace is all of $H\otimes K$. Rephasing conjugates the coefficient matrix by a diagonal unitary, leaving $r$ and the spectrum unchanged. Finally, [F4] supplies the displayed matrix properties for the stated phase-average specialization; the form of $\Phi$ remains an additional hypothesis. [given, F4, F7, F8, step 1.1, step 2.1, step 3.1, step 3.2, algebra] ∎


## Transpose recovery for a flagged coherence channel

[Open item](item-lem-qec-prereq-qubit-transpose-phase-rule) · level 2


### Statement

Let $H=\mathbb C^2$ have ordered orthonormal basis $|0\rangle,|1\rangle$. Take $K=H\oplus H=\{(x_0,x_1):x_0,x_1\in H\}$ with coordinatewise addition and complex scalar multiplication, and with inner product $\langle(x_0,x_1),(y_0,y_1)\rangle_K=\langle x_0,y_0\rangle_H+\langle x_1,y_1\rangle_H$ in the finite-operator convention. Define $\iota_0x=(x,0)$ and $\iota_1x=(0,x)$, and order the basis of $K$ as $\iota_0|0\rangle,\iota_0|1\rangle,\iota_1|0\rangle,\iota_1|1\rangle$. For $0\leq p\leq1$ and $|\chi|\leq1$, define the flagged channel $\mathcal N(X)=(1-p)\iota_0X\iota_0^\dagger+p\iota_1\mathcal D_\chi(X)\iota_1^\dagger$, where $\mathcal D_\chi$ preserves the diagonal entries and multiplies the $01$ and $10$ entries by $\chi$ and $\overline\chi$, respectively. Use the whole input space as the code, with maximally mixed input $I/2$, and the support-normalized transpose recovery for $\mathcal N$.

On each positive-weight branch, the conditional recovered map is the identity for branch $0$ and $\mathcal D_{|\chi|^2}$ for branch $1$. Consequently, after discarding the flag the recovered channel is $(1-p)\operatorname{id}+p\mathcal D_{|\chi|^2}$. A decoder that reads the flag, uses the identity on branch $0$, and applies a phase-correcting unitary on branch $1$ instead gives $(1-p)\operatorname{id}+p\mathcal D_{|\chi|}$. At $\chi=0$ the unitary phase can be chosen arbitrarily. A zero-weight branch contributes zero and has no conditional state.

### Facts & Assumptions

**Given:** The spaces, basis, parameters and flagged channel in the Statement.

**Goal:** Compute the transpose-recovered and phase-corrected channels, including boundary cases.

[F1] The finite operator conventions specify matrices, adjoints and orthonormal bases. [def-qec-prereq-finite-operator-conventions](item-def-qec-prereq-finite-operator-conventions)

[F2] The maps $\mathcal D_\lambda$ for $|\lambda|\leq1$ are channels and satisfy $\mathcal D_\mu\circ\mathcal D_\lambda=\mathcal D_{\mu\lambda}$. [lem-qec-prereq-qubit-coherence-fidelities](item-lem-qec-prereq-qubit-coherence-fidelities)

[F3] For code projector $P$ and channel Kraus operators $E_a$, the transpose map has Kraus operators $PE_a^\dagger\mathcal N(P)^{-1/2}$, with the inverse taken on the support; its completion does not change outputs of code-supported inputs. [thm-qec-prereq-transpose-support-completion](item-thm-qec-prereq-transpose-support-completion)

[F4] The support inverse square root acts by the reciprocal square root on positive eigenspaces and by zero on the kernel. [def-qec-prereq-support-spectral-calculus](item-def-qec-prereq-support-spectral-calculus)

[F5] A channel is linear, completely positive and trace-preserving; a decoder is a channel from the noise output space to the logical space. [def-qec-prereq-restricted-logical-channel](item-def-qec-prereq-restricted-logical-channel)

[F6] For two complex vector spaces, viewed as modules over $\mathbb C$, the indexed direct sum consists of all pairs with coordinatewise operations; its coordinate inclusions insert a vector in one coordinate and zero in the other. The finite-support condition is automatic for the index set $\{0,1\}$. [math:def-direct-sum-of-a-family-of-modules](https://alphabetamath.cc/item/def-direct-sum-of-a-family-of-modules)

### Proof

**Proof technique:** direct.

1.1 In the coordinates of the Statement, [F6] gives the underlying direct sum, and the displayed inner product is the standard coordinate inner product on $\mathbb C^4$. By [F1], taking conjugate transposes of the inclusion matrices gives $\iota_0^\dagger(x_0,x_1)=x_0$ and $\iota_1^\dagger(x_0,x_1)=x_1$. Thus $\iota_j^\dagger\iota_j=I_H$ for $j=0,1$, $\iota_0^\dagger\iota_1=\iota_1^\dagger\iota_0=0$, and $\iota_0\iota_0^\dagger+\iota_1\iota_1^\dagger=I_K$. The two ranges are therefore orthogonal and their block projections exhaust $K$. Put $r=|\chi|$ and choose $z=\chi/r$ when $r>0$, and any unit-modulus $z$ when $r=0$. Set $U=\operatorname{diag}(1,\overline z)$, $Z=\operatorname{diag}(1,-1)$, $q_+=(1+r)/2$ and $q_-=(1-r)/2$. Direct multiplication gives $\mathcal D_\chi(X)=q_+UXU^\dagger+q_-UZXZU^\dagger$. Thus a Kraus family for $\mathcal N$ is $E_0=\sqrt{1-p}\,\iota_0$ and $E_\pm=\sqrt{p q_\pm}\,\iota_1UZ$. In the last expression use $Z$ only for $E_-$: explicitly, $E_+=\sqrt{p q_+}\,\iota_1U$ and $E_-=\sqrt{p q_-}\,\iota_1UZ$. These operators also show that the two branches form a channel: their adjoint products sum to $I$, and conjugation by each operator is completely positive after every finite amplification. [given, F1, F2, F5, F6]

2.1 With $P=I$, the unitality of $\mathcal D_\chi$ gives $A=\mathcal N(I)=(1-p)\iota_0\iota_0^\dagger+p\iota_1\iota_1^\dagger$. By [F4], $A^{-1/2}$ acts as $(1-p)^{-1/2}$ on the first block when $1-p>0$, as $p^{-1/2}$ on the second when $p>0$, and as zero on any zero-weight block. Substitution into [F3] gives the identity map on the first positive-weight block and $Y\mapsto q_+U^\dagger YU+q_-ZU^\dagger YUZ$ on the second. The latter map is $\mathcal D_{\overline\chi}$ by direct matrix multiplication. The support completion has no effect on $\mathcal N(X)$. [given, F1, F3, F4, step 1.1]

3.1 Applying the branch maps from step 2.1 to the noise outputs and using [F2] yields $(1-p)X+p\mathcal D_{\overline\chi}\mathcal D_\chi(X)=(1-p)X+p\mathcal D_{r^2}(X)$. For a positive branch weight, dividing its output by that weight gives the stated conditional map; a zero-weight branch has zero output and no conditional state. The normalization uses the trace preservation in [F5]. [given, F2, F5, step 2.1]

4.1 On the second block, conjugation by $U^\dagger$ is $\mathcal D_{\overline z}$, so its composition with $\mathcal D_\chi$ is $\mathcal D_r$ by [F2]. Combining it with the identity decoder on the first block gives the map $\mathcal R_{\rm ph}(Y)=\iota_0^\dagger Y\iota_0+U^\dagger\iota_1^\dagger Y\iota_1U$. Each summand is completely positive by the conjugation argument of step 1.1. For every $Y$, summing its four diagonal entries in the ordered basis gives $\operatorname{tr}Y=\operatorname{tr}(\iota_0^\dagger Y\iota_0)+\operatorname{tr}(\iota_1^\dagger Y\iota_1)$; conjugation by the diagonal unitary $U$ leaves diagonal entries unchanged. Hence $\mathcal R_{\rm ph}$ preserves trace and is a channel by [F5]. It therefore produces $(1-p)\operatorname{id}+p\mathcal D_r$. When $r=0$, every unit-modulus choice of $z$ gives the same $\mathcal D_0$ after composition. [given, F1, F2, F5, step 1.1] ∎


## Finite absorbing lowering dynamics and replacement limit

[Open item](item-lem-qec-prereq-absorbing-ground-limit) · level 2


### Statement

Let $V=\bigoplus_{j=0}^{J}V_j$ be a finite-dimensional complex inner-product space with an orthogonal grading, $J\geq0$, and $V_0=\mathbb C g$ for a unit vector $g$. Let $P_j$ be the orthogonal projection onto $V_j$. Let $H=H^\dagger$ preserve every block, and let finitely many linear maps $L_a$ satisfy $L_aV_j\subseteq V_{j-1}$, with $V_{-1}=\{0\}$. Define $R=\sum_aL_a^\dagger L_a$ and assume that, for some $r_*>0$, $P_jRP_j\geq r_*P_j$ for every $j\geq1$, where the inequality means that the difference has nonnegative quadratic form. This is a uniform lower bound on the total exit rate of every vector in each excited block.

For $t\geq0$ let $\mathcal N_t=e^{t\mathcal L}$, where $\mathcal L(X)=-i[H,X]+\sum_a(L_aXL_a^\dagger-\{L_a^\dagger L_a,X\}/2)$. Then $\mathcal N_t$ converges as $t\to\infty$ to the replacement channel $\mathcal R(X)=\operatorname{Tr}(X)|g\rangle\langle g|$, in the induced norm of the entrywise $\ell^1$ matrix norm in any fixed orthonormal basis. In particular, every initial density operator has ground population tending to one and all excited populations and ground–excited coherences tending to zero. The stated rate bound excludes a nonzero excited vector annihilated by all jumps. Here, in the chosen orthonormal basis, $\|X\|_{\mathrm{ent},1}=\sum_{k,l}|X_{kl}|$, and the induced norm of a linear map $T$ on operators is $\|T\|_{\mathrm{ent},1\to\mathrm{ent},1}=\sup_{\|X\|_{\mathrm{ent},1}\leq1}\|T(X)\|_{\mathrm{ent},1}$. The norm axioms and boundedness of every such $T$ are verified in step 4.1.

If $d=\dim V$ and $(e_k)_{k=1}^d$ is any orthonormal basis, $\mathcal R$ has Kraus operators $K_k=|g\rangle\langle e_k|$ and its input-first, unnormalized Choi matrix has rank $d$; hence $d$ is also the minimum Kraus number.

### Facts & Assumptions

**Given:** The finite orthogonal grading, operators and lower bound in the Statement. A density operator is a positive semidefinite operator of trace one.

**Goal:** Prove the population and channel limits and the asserted Kraus and Choi properties.

[F1] The lowering supplier gives the finite graded generator and shows that each lower cutoff is invariant under its exponential. [lem-qec-prereq-lowering-invariant-truncation](item-lem-qec-prereq-lowering-invariant-truncation)

[F2] For Hermitian $H$ and finitely many jumps on a finite-dimensional space, the displayed exponential is a completely positive trace-preserving linear map for every $t\geq0$. [def-qec-prereq-finite-gksl-channel-interface](item-def-qec-prereq-finite-gksl-channel-interface)

[F3] A finite-dimensional positive semidefinite operator has an orthonormal eigenbasis with nonnegative eigenvalues and a positive square root. [def-qec-prereq-support-spectral-calculus](item-def-qec-prereq-support-spectral-calculus)

[F4] Real power series may be differentiated term by term inside their radius of convergence; the real exponential has derivative equal to itself, and the usual algebra rules apply to derivatives. [math:thm-termwise-differentiation-of-a-real-power-series](https://alphabetamath.cc/item/thm-termwise-differentiation-of-a-real-power-series) [math:thm-derivative-of-exponential](https://alphabetamath.cc/item/thm-derivative-of-exponential) [math:thm-algebra-of-derivatives](https://alphabetamath.cc/item/thm-algebra-of-derivatives) The real chain rule gives $(f\circ h)'(t)=f'(h(t))h'(t)$ when $h$ is differentiable at $t$ and $f$ is differentiable at $h(t)$, with both points limit points of their respective domains. [math:thm-chain-rule](https://alphabetamath.cc/item/thm-chain-rule)

[F5] The mean value theorem applies to a real function continuous on a closed interval and differentiable on its interior. For $c>0$, $e^{-ct}\to0$ as $t\to\infty$. [math:cor-mean-value-theorem](https://alphabetamath.cc/item/cor-mean-value-theorem) [math:thm-exponential-beats-every-polynomial](https://alphabetamath.cc/item/thm-exponential-beats-every-polynomial)

[F6] In a complex inner-product space, $|\langle u,v\rangle|\leq\|u\|\|v\|$. [math:thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces](https://alphabetamath.cc/item/thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces)

[F7] The input-first Choi matrix is $\sum_{k,l}|e_k\rangle\langle e_l|\otimes\Phi(|e_k\rangle\langle e_l|)$. For a finite-dimensional channel, its Choi rank is its minimum Kraus number. [math:def-qc-choi-matrix](https://alphabetamath.cc/item/def-qc-choi-matrix) [lem-qec-prereq-canonical-choi-weights](item-lem-qec-prereq-canonical-choi-weights)

[F8] For a bounded linear map $T$ between normed spaces over the same scalar field, its operator norm is the finite supremum $\sup_{\|X\|\leq1}\|T(X)\|$. [math:def-operator-norm](https://alphabetamath.cc/item/def-operator-norm)

### Proof

1.1 If $J=0$, the space is one-dimensional, all jumps vanish and $H$ is scalar, so $\mathcal L=0$ and every operator already equals its trace times $|g\rangle\langle g|$. Assume henceforth $J\geq1$. Put $D=\sum_{j=0}^JjP_j$ and $Q=I-P_0$. The lowering relation gives $[D,L_a]=-L_a$, including on $V_0$, while $H$ and every $L_a^\dagger L_a$ preserve the blocks. The latter follows from orthogonality: for $u\in V_j$ and $v\in V_k$ with $j\ne k$, $\langle L_au,L_av\rangle=0$. Thus cyclicity of the finite trace gives $\operatorname{Tr}(D\mathcal L(X))=-\operatorname{Tr}(RX)$ for every $X$. The blockwise rate hypothesis implies $R\geq r_*Q$; also $Q\leq D\leq JQ$. [given, F1, algebra]

2.1 Let $\rho$ be a density operator and put $\rho_t=\mathcal N_t(\rho)$ and $m(t)=\operatorname{Tr}(D\rho_t)$. By [F2], $\rho_t$ is positive and has trace one. The convergent exponential series, differentiated entrywise using [F4], gives $\dot\rho_t=\mathcal L(\rho_t)$. By step 1.1, $m'(t)=-\operatorname{Tr}(R\rho_t)\leq-r_*\operatorname{Tr}(Q\rho_t)\leq-(r_*/J)m(t)$. The trace inequalities follow by diagonalizing the positive operator $\rho_t$ as in [F3] and applying the quadratic-form inequalities to its eigenvectors. Let $c=r_*/J>0$. The difference quotient of $t\mapsto ct$ equals $c$, and the exponential is differentiable on $\mathbb R$; hence the chain rule in [F4], applied on real domains, gives $(e^{ct})'=ce^{ct}$. The product rule in [F4] now gives $(e^{ct}m(t))'=e^{ct}(cm(t)+m'(t))\leq0$; [F5] therefore makes $e^{ct}m(t)$ nonincreasing on every finite interval. Hence $0\leq\operatorname{Tr}(Q\rho_t)\leq m(t)\leq m(0)e^{-ct}\leq Je^{-ct}$. [given, F2, F3, F4, F5, step 1.1, algebra]

3.1 Choose an orthonormal basis beginning with $g$ and continuing with vectors in the excited blocks. Write its matrix entries as $(\rho_t)_{ab}$. By [F3], $\rho_t$ has a positive square root; applying [F6] to its images of two basis vectors gives $| (\rho_t)_{ab} |^2\leq(\rho_t)_{aa}(\rho_t)_{bb}$. Every excited diagonal entry is between zero and $\operatorname{Tr}(Q\rho_t)$, and the ground entry is $1-\operatorname{Tr}(Q\rho_t)$. Step 2.1 and [F5] therefore show that every matrix entry of $\rho_t$ converges to the corresponding entry of $|g\rangle\langle g|$, including all off-diagonal entries. In particular all excited populations vanish and the ground population tends to one. [given, F3, F5, F6, step 2.1, algebra]

4.1 The entrywise function in the Statement is a norm: it vanishes exactly on the zero matrix, is absolutely homogeneous, and satisfies the triangle inequality by summing $|X_{kl}+Y_{kl}|\leq|X_{kl}|+|Y_{kl}|$. The rank-one operators $|e_k\rangle\langle e_l|$ form a basis of the operator space. Each diagonal unit is a density operator. For $k\ne l$, the polarization identity expresses $|e_k\rangle\langle e_l|$ as a fixed complex linear combination of the four rank-one positive operators formed from $e_k\pm e_l$ and $e_k\pm i e_l$; after division by their traces these are density operators. By linearity and step 3.1, $\mathcal N_t(E_{kl})\to\operatorname{Tr}(E_{kl})|g\rangle\langle g|$ entrywise for every matrix unit. For any linear map $T$ on this operator space, put $C_T=\max_{k,l}\|T(E_{kl})\|_{\mathrm{ent},1}$, a finite maximum. For $X=\sum_{k,l}x_{kl}E_{kl}$, linearity and the triangle inequality give $\|T(X)\|_{\mathrm{ent},1}\leq\sum_{k,l}|x_{kl}|\|T(E_{kl})\|_{\mathrm{ent},1}\leq C_T\|X\|_{\mathrm{ent},1}$. Thus $T$ is bounded, so the operator-norm definition in [F8] applies and gives $\|T\|_{\mathrm{ent},1\to\mathrm{ent},1}\leq C_T$. For $T=\mathcal N_t-\mathcal R$, each matrix-unit image tends entrywise to zero, so its finite sum of absolute entries tends to zero; the maximum over the finitely many pairs also tends to zero. This proves the asserted channel convergence. The same argument applies in any fixed orthonormal basis. [given, F2, F8, step 3.1, algebra]

5.1 For $K_k=|g\rangle\langle e_k|$, direct expansion gives $\sum_kK_kXK_k^\dagger=\operatorname{Tr}(X)|g\rangle\langle g|$ and $\sum_kK_k^\dagger K_k=I$. By [F7], the Choi matrix is $\sum_k|e_k\rangle\langle e_k|\otimes|g\rangle\langle g|=I\otimes|g\rangle\langle g|$, whose rank is $d$; [F7] gives the minimum Kraus number. Finally, if an excited vector $v$ is annihilated by every $L_a$, then $\langle v,Rv\rangle=0$, whereas step 1.1 gives $\langle v,Rv\rangle\geq r_*\|v\|^2$; hence $v=0$. Together with the $J=0$ case, this proves all claims. [given, F7, step 1.1, step 4.1, algebra] ∎


## Exact versus thresholded Kraus rank protocol

[Open item](item-def-qec-prereq-spectral-threshold-protocol) · level 2


### Definition

Let $H$ and $K$ be finite-dimensional complex inner-product spaces, with $d=\dim H>0$, and let $\mathcal N:\mathcal L(H)\to\mathcal L(K)$ be a completely positive, trace-preserving linear map. Fix an ordered orthonormal input basis and form its input-first unnormalized Choi matrix $J=\sum_{i,j}|e_i\rangle\langle e_j|\otimes\mathcal N(|e_i\rangle\langle e_j|)$. Alternatively use the trace-one normalization $J/d$. In either convention let $\lambda_1,\ldots,\lambda_n$ be all eigenvalues of the selected matrix, repeated according to multiplicity, where $n=d\dim K$.

The **exact Kraus rank** is the number of $\lambda_k>0$. For a specified threshold $\epsilon>0$ in the units of the selected normalization, the **threshold count** is $\#\{k:\lambda_k>\epsilon\}$; equality with the threshold is excluded. These are distinct quantities: a threshold count alone does not establish the exact rank. Switching from $J$ to $J/d$ divides every eigenvalue and any equivalent threshold by $d$.

For a numerical report, record the normalization, $\epsilon$, the computed real eigenvalue estimates $\widehat\lambda_k$, the strict comparison used, and the handling of negative estimates. If a certified bound $\delta\geq0$ is available after ordering both lists nonincreasingly, it means $|\widehat\lambda_k-\lambda_k|\leq\delta$ for every $k$; otherwise report the error bound as unknown. The raw numerical count is $\#\{k:\widehat\lambda_k>\epsilon\}$. With a certified bound, report also the lower count $\#\{k:\widehat\lambda_k-\delta>\epsilon\}$ and upper count $\#\{k:\widehat\lambda_k+\delta>\epsilon\}$. They bound the exact threshold count; if they agree, they certify it. A computed negative estimate is not by itself evidence that the exact Choi matrix has a negative eigenvalue. Do not silently clip it: record any clipping separately and apply the stated error guarantee to the values actually used for certification.

### Definition references

[lem-qec-prereq-canonical-choi-weights](item-lem-qec-prereq-canonical-choi-weights)

[def-qec-prereq-liouville-choi-reshuffle](item-def-qec-prereq-liouville-choi-reshuffle)

[math:thm-complex-spectral-theorem-for-normal-endomorphisms](https://alphabetamath.cc/item/thm-complex-spectral-theorem-for-normal-endomorphisms)

[math:def-qc-completely-positive-map](https://alphabetamath.cc/item/def-qc-completely-positive-map)

[math:def-qc-kraus-representation](https://alphabetamath.cc/item/def-qc-kraus-representation)

### Justification

The Choi convention is the input-first convention used in the reshuffling interface. The canonical Choi result gives positivity and identifies the number of positive eigenvalues, counted with multiplicity, with the minimum number of Kraus operators. The finite-dimensional spectral theorem gives a real eigenvalue list for the Hermitian Choi matrix. Trace preservation gives $\operatorname{Tr}J=\sum_i\operatorname{Tr}\mathcal N(|e_i\rangle\langle e_i|)=d$, so $J/d$ has trace one; scalar multiplication divides its eigenvalues by $d$. Thus both normalizations and their threshold conversion are well defined. [def-qec-prereq-liouville-choi-reshuffle](item-def-qec-prereq-liouville-choi-reshuffle) [lem-qec-prereq-canonical-choi-weights](item-lem-qec-prereq-canonical-choi-weights) [math:thm-complex-spectral-theorem-for-normal-endomorphisms](https://alphabetamath.cc/item/thm-complex-spectral-theorem-for-normal-endomorphisms) [math:def-qc-completely-positive-map](https://alphabetamath.cc/item/def-qc-completely-positive-map) [math:def-qc-kraus-representation](https://alphabetamath.cc/item/def-qc-kraus-representation)

For each ordered index the supplied error bound places $\lambda_k$ between $\widehat\lambda_k-\delta$ and $\widehat\lambda_k+\delta$. Hence every index counted by the lower count has $\lambda_k>\epsilon$, and every index with $\lambda_k>\epsilon$ appears in the upper count. Equal bounds therefore determine the threshold count. Since eigenvalues in $(0,\epsilon]$ contribute to exact rank but not to the threshold count, the latter alone need not determine the former. The error bound is an input to this conditional conclusion, not a claim that a numerical method has provided one. [lem-qec-prereq-canonical-choi-weights](item-lem-qec-prereq-canonical-choi-weights)


## Bounded phase spread and calibrated jump-time residual

[Open item](item-lem-qec-prereq-bounded-phase-averaging-control) · level 2


### Statement

Assume Countable Choice. Let $\tau\geq0$, let $I=[a,a+\tau]$, and let $s$ be a real measurable random variable on a probability space with $s\in I$ almost surely. Write $m=\mathbb E s$. For every real $\delta$ and every $s_0\in I$, almost surely $|e^{i\delta s}-e^{i\delta s_0}|\leq|\delta|\tau$, and $|\mathbb E e^{i\delta(s-m)}-1|\leq\delta^2\tau^2/2$.

For finitely many real frequencies $d_j$, let $\delta_{jk}=d_j-d_k$ and $G_{jk}=\mathbb E e^{i\delta_{jk}s}$. If $\max_{j,k}|\delta_{jk}|\leq M$, every calibrated entry $e^{-i\delta_{jk}m}G_{jk}$ satisfies $|e^{-i\delta_{jk}m}G_{jk}-1|\leq M^2\tau^2/2$; this deviation tends uniformly to zero as $\tau\to0$ with $M$ fixed. When a conditional branch has the phase Gram lemma's diagonal averaging formula under the common input-independent law of $s$, and its diagonal entries are specifically $e^{id_js}$, these calibrated entries are its relative-coherence multipliers after removing the known mean phase.

For the diagonal lift's evolution $U_s=e^{-isD}$ with $D$ having entries $d_j$, the uncorrected multipliers instead are $H_{jk}=\mathbb E e^{-i\delta_{jk}s}$. Under the corresponding common-law averaging formula, inverse mean-phase calibration gives $|e^{i\delta_{jk}m}H_{jk}-1|\leq M^2\tau^2/2$, with the same uniform limit. In both conventions calibration requires the mean phase to be known; it does not reveal the random time $s$. This entrywise estimate alone does not assert a bound for a complete repeated-check channel.

### Facts & Assumptions

[F1] A probability measure has total mass one, and expectation is integration of an integrable random variable against it. [math:def-probability-measure](https://alphabetamath.cc/item/def-probability-measure) [math:def-expectation-of-a-nonnegative-or-integrable-random-variable](https://alphabetamath.cc/item/def-expectation-of-a-nonnegative-or-integrable-random-variable)

[F2] Expectation is linear and monotone on integrable variables, and $|\mathbb E Z|\leq\mathbb E|Z|$ for integrable complex $Z$. [math:cor-expectation-linearity-monotonicity-and-modulus-bound](https://alphabetamath.cc/item/cor-expectation-linearity-monotonicity-and-modulus-bound)

[F3] For real $u$, $|e^{iu}|=1$; the complex exponential has derivative equal to itself. [math:cor-complex-exponential-cartesian-form-modulus-and-eulers-identity](https://alphabetamath.cc/item/cor-complex-exponential-cartesian-form-modulus-and-eulers-identity) [math:thm-complex-exponential-is-entire-with-derivative-itself](https://alphabetamath.cc/item/thm-complex-exponential-is-entire-with-derivative-itself)

[F4] A differentiable Banach-valued curve with derivative norm bounded by $C$ changes by at most $C$ times the interval length. [math:lem-mean-value-inequality-for-a-differentiable-banach-valued-curve](https://alphabetamath.cc/item/lem-mean-value-inequality-for-a-differentiable-banach-valued-curve)

[F5] Under Countable Choice, the fundamental theorem applies to continuously differentiable Banach-valued curves on compact intervals; the norm of a Bochner integral is at most the integral of the norm. [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice) [math:lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves](https://alphabetamath.cc/item/lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves) [math:lem-bochner-integral-norm-inequality](https://alphabetamath.cc/item/lem-bochner-integral-norm-inequality)

[F6] The phase Gram lemma assumes a common probability law and diagonal entries $e^{i\theta_j}$; its averaging formula then has coherence multiplier $\mathbb E e^{i(\theta_j-\theta_k)}$. The diagonal lift convention $U_s=e^{-isD}$ has matrix-unit phase $e^{-is(d_j-d_k)}$; its calibration convention supplies known phase data, not an unobserved time. [lem-qec-prereq-jump-time-phase-gram](item-lem-qec-prereq-jump-time-phase-gram) [def-qec-prereq-diagonal-lift-phase-data](item-def-qec-prereq-diagonal-lift-phase-data)

[F7] A real random variable is a measurable map into the real Borel space; measurable maps take inverse images of measurable sets to measurable sets. An almost-sure assertion holds off a measurable null set. [math:def-random-element-and-real-random-variable](https://alphabetamath.cc/item/def-random-element-and-real-random-variable) [math:def-measurable-function-between-measurable-spaces](https://alphabetamath.cc/item/def-measurable-function-between-measurable-spaces) [math:def-measure-null-set-and-almost-everywhere](https://alphabetamath.cc/item/def-measure-null-set-and-almost-everywhere)

[F8] Continuous maps have Borel inverse images of Borel sets. A complex function is measurable when its real and imaginary components are measurable, and modulus preserves this measurability. [math:thm-continuous-preimages-of-borel-sets-are-borel](https://alphabetamath.cc/item/thm-continuous-preimages-of-borel-sets-are-borel) [math:def-complex-lp-and-euclidean-test-function-conventions](https://alphabetamath.cc/item/def-complex-lp-and-euclidean-test-function-conventions)

[F9] A real or complex measurable function is integrable when its modulus has finite integral. The nonnegative integral is the supremum of the simple integrals of its nonnegative simple minorants; a simple function with disjoint measurable level sets $E_\ell$ and values $c_\ell\geq0$ has simple integral $\sum_\ell c_\ell\mathbb P(E_\ell)$. [math:def-integrable-real-and-complex-functions-and-their-integrals](https://alphabetamath.cc/item/def-integrable-real-and-complex-functions-and-their-integrals) [math:def-nonnegative-lebesgue-integral](https://alphabetamath.cc/item/def-nonnegative-lebesgue-integral) [math:def-integral-of-a-nonnegative-simple-function](https://alphabetamath.cc/item/def-integral-of-a-nonnegative-simple-function)

[F10] For all complex $z,w$, $e^{z+w}=e^ze^w$. [math:thm-complex-exponential-addition-and-real-extension](https://alphabetamath.cc/item/thm-complex-exponential-addition-and-real-extension)

[F11] The complex numbers with the usual modulus form a normed complex space with ordered basis $(1)$, so they are Banach by the finite-dimensional Banach corollary. For differentiation in a real variable, the underlying real space has the same norm metric and is therefore also complete. [math:cor-finite-dimensional-normed-spaces-are-banach](https://alphabetamath.cc/item/cor-finite-dimensional-normed-spaces-are-banach)

### Proof

**Given:** The probability space, interval, random variable, frequencies and conditional branch data in the statement, and Countable Choice.

**Goal:** Prove the pointwise and centered bounds and their conditional entrywise application in both phase conventions.

1.1 Work in the Banach codomain $\mathbb C$ with norm $|\cdot|$, using its underlying real structure for differentiation, as established in [F11]. The curve $u\mapsto e^{iu}$ has derivative $ie^{iu}$ of modulus one: the complex derivative in [F3], evaluated on increments $ih$, gives this real derivative directly. Differentiability also gives continuity, including at the endpoints of every compact interval. Applying the mean value inequality between real $u$ and $v$ gives $|e^{iu}-e^{iv}|\leq|u-v|$, including equality of endpoints trivially. Taking $u=\delta s$ and $v=\delta s_0$ proves the first assertion almost surely because both $s$ and $s_0$ lie in $I$. [given, F3, F4, F11]

2.1 In the same Banach codomain from [F11], for real $x$ the fundamental theorem applied to $u\mapsto e^{iu}-1-iu$ on the interval between $0$ and $x$, with orientation reversed when $x<0$, gives $e^{ix}-1-ix=\int_0^x i(e^{iu}-1)\,du$. The derivative $i(e^{iu}-1)$ is continuous by step 1.1. The integral norm inequality and step 1.1 yield $|e^{ix}-1-ix|\leq\int_0^{|x|}v\,dv=x^2/2$. The case $x=0$ is immediate. [F3, F5, F11, step 1.1]

3.1 If $h$ is a continuous real- or complex-valued function on $\mathbb R$, then $h\circ s$ is measurable: for any Borel set $B$, $(h\circ s)^{-1}(B)=s^{-1}(h^{-1}(B))$ is measurable by [F7] and [F8]. In the complex case apply the same argument to the continuous real and imaginary components of $h$ to obtain the componentwise convention of [F8]; coordinate projections are continuous since each coordinate difference is bounded by the complex modulus. Affine real functions, their squares, and the exponential and remainder functions in steps 1.1 and 2.1 are continuous, so all their compositions with $s$ used below, and their moduli, are measurable. [F7, F8, step 1.1, step 2.1]

4.1 Let $f$ be any such measurable real or complex function with $|f|\leq B$ off a measurable null set $N$, where $0\leq B<\infty$. For any nonnegative simple minorant $q\leq|f|$, split its disjoint level sets into intersections with $N$ and its complement. The pieces in $N$ have zero measure. Every nonempty piece outside $N$ has coefficient at most $B$, and their disjoint measures sum to at most $1$. Thus the simple integral of $q$ is at most $B$. Taking the supremum in [F9] gives $\int|f|\,d\mathbb P\leq B$, hence integrability. Applying this to $f=1$ gives an upper bound of $1$; the simple minorant $q=1$ has simple integral $1$ by [F1] and [F9], so $\mathbb E1=1$. In particular $s$ is integrable with $B=\max(|a|,|a+\tau|)$, and real constants have their stated expectations by [F2]. [given, F1, F2, F7, F9, step 3.1]

5.1 Monotonicity gives $a\leq m\leq a+\tau$, so $|s-m|\leq\tau$ almost surely. Put $X=\delta(s-m)$. The variables $X$, $X^2$, $e^{iX}$ and $e^{iX}-1-iX$ are measurable by step 3.1 and almost surely bounded, respectively by $|\delta|\tau$, $\delta^2\tau^2$, $1$ and $2+|\delta|\tau$, so step 4.1 makes all of them integrable. Linearity and $\mathbb E1=1$ give $\mathbb E X=0$ and $\mathbb E e^{iX}-1=\mathbb E(e^{iX}-1-iX)$. The expectation modulus bound, step 2.1 and monotonicity now give $|\mathbb E e^{iX}-1|\leq\mathbb E(X^2/2)\leq\delta^2\tau^2/2$. [given, F1, F2, F3, step 2.1, step 3.1, step 4.1]

6.1 The exponential addition law and expectation linearity give $e^{-i\delta_{jk}m}G_{jk}=\mathbb E e^{i\delta_{jk}(s-m)}$. The expectations exist by steps 3.1 and 4.1. Step 5.1 bounds each entry's distance from $1$ by $M^2\tau^2/2$. This common upper bound tends to zero with $\tau$, uniformly over the finite index set and all laws satisfying the interval hypothesis, when $M$ is fixed. [given, F2, F10, step 3.1, step 4.1, step 5.1]

7.1 Under the positive-sign branch hypothesis, diagonal matrix multiplication in [F6] gives $(D_+(s)\rho D_+(s)^\dagger)_{jk}=e^{i\delta_{jk}s}\rho_{jk}$, where $D_+(s)$ denotes its specified diagonal matrix. Entrywise averaging and [F2] give multiplier $G_{jk}$; inverse mean-phase conjugation by the diagonal matrix with entries $e^{-id_jm}$ multiplies it by $e^{-i\delta_{jk}m}$. For the lift convention in [F6], the same calculation gives $H_{jk}$, and its inverse mean-phase matrix has entries $e^{id_jm}$. Substituting $-\delta_{jk}$ into step 5.1 and using [F10] bounds $|e^{i\delta_{jk}m}H_{jk}-1|$ by $M^2\tau^2/2$. These calculations use the respective assumed diagonal averaging formula and knowledge of the mean phase, without inferring observation of $s$ or a repeated-check channel bound. [given, F2, F6, F10, step 5.1, step 6.1] ∎


## Calibrated recovery cycles and accumulated-error contract

[Open item](item-def-qec-prereq-calibrated-cycle-contract) · level 2



### Definition

Let $H_L,H_P,H_O,H_S$ be nonzero finite-dimensional complex inner-product spaces. Write $\mathcal L(H)$ for the linear endomorphisms of $H$. A density operator is a positive semidefinite operator of trace one. A quantum channel is a complex-linear, completely positive, trace-preserving map; complete positivity means that every finite identity amplification preserves positive semidefinite operators.

A calibrated cycle consists of a linear isometry $V:H_L\to H_P$ encoding a logical input $\rho$ as $V\rho V^*$, a specified finite interval of length $h\geq0$ with a noise channel $\mathcal N_h:\mathcal L(H_P)\to\mathcal L(H_O)$, a finite instrument $(\mathcal I_a)_{a\in\Omega}$ from $H_O$ to $H_S$, and a decoder channel $\mathcal R_a:\mathcal L(H_S)\to\mathcal L(H_L)$ for each outcome. Here $\Omega$ is finite and nonempty; each instrument map is completely positive and their sum is trace-preserving. The unconditional logical cycle is $\mathcal E_h=\sum_{a\in\Omega}\mathcal R_a\circ\mathcal I_a\circ\mathcal N_h\circ\operatorname{Ad}_V$, where $\operatorname{Ad}_V(X)=VXV^*$.

When the recovery rule uses diagonal-lift phases, calibration means that the specified real diagonal lift values and the elapsed interval used by that rule are available to it. It does not assert that an unknown decay time is observed; any averaging over such a time requires a specified probability distribution.

A continuous-checking error contract at fixed total time $T>0$ specifies, for each positive integer $N$, a calibrated cycle with $h=T/N$, a reference logical channel $\mathcal F_h$, and a uniform bound $\|\mathcal E_h-\mathcal F_h\|_{1\to1}\leq\epsilon_N$. Here $\|A\|_1=\operatorname{Tr}\sqrt{A^*A}$ and $\|\Phi\|_{1\to1}=\sup_{X\ne0}\|\Phi(X)\|_1/\|X\|_1$. The contract also specifies a bound $\delta_N$ on the probability of two or more decays in a cycle, uniformly over the allowed inputs, together with the event model that defines this probability. It states the dependence of $\epsilon_N$ and $\delta_N$ on $N$, $T$ and the chosen code support: the physical subspace containing the encoded states. The condition $N\epsilon_N\to0$ is sufficient to certify vanishing accumulated channel error through this budget; it is not necessary for the actual error to vanish when the supplied bound is loose. A separate claim that the probability of any multiple-decay cycle vanishes can use $N\delta_N\to0$ under the history condition below. If a reference system is included, the same contract must explicitly bound the identity-extended one-cycle difference on that reference.

For that probability claim, for each $N$ and each allowed input the application supplies a probability space $(\Xi,\mathcal A,\mathbb P)$, a filtration $\mathcal G_0\subseteq\cdots\subseteq\mathcal G_N\subseteq\mathcal A$, and events $B_k\in\mathcal G_k$ describing two or more decays in cycle $k$, for $1\leq k\leq N$. The required bound after every preceding measurable history is $\mathbb P(B_k\cap H)\leq\delta_N\mathbb P(H)$ for every $H\in\mathcal G_{k-1}$, with $\delta_N\geq0$. When $\mathbb P(H)>0$, this is the conditional-probability bound $\mathbb P(B_k\mid H):=\mathbb P(B_k\cap H)/\mathbb P(H)\leq\delta_N$; the intersection inequality also covers histories of probability zero. The sample space need not be finite, and independence is not assumed.

A bound on normalized single-decay conditional states alone is not an unconditional channel bound. An accumulation argument using such bounds must specify the corresponding outcome probabilities and weight each conditional contribution by its probability, including all other outcomes. Zero-probability outcomes have no assigned conditional state and contribute zero through their unnormalized output.

### Definition references

[def-qec-prereq-restricted-logical-channel](item-def-qec-prereq-restricted-logical-channel)

[def-qec-prereq-diagonal-lift-phase-data](item-def-qec-prereq-diagonal-lift-phase-data)

[lem-qec-prereq-channel-composition-budget](item-lem-qec-prereq-channel-composition-budget)

[math:def-qc-instrument-and-conditional-state](https://alphabetamath.cc/item/def-qc-instrument-and-conditional-state)

[math:def-probability-measure](https://alphabetamath.cc/item/def-probability-measure)

[math:def-filtration-and-filtered-probability-space](https://alphabetamath.cc/item/def-filtration-and-filtered-probability-space)

[math:def-sigma-algebra](https://alphabetamath.cc/item/def-sigma-algebra)

[math:prop-measure-monotonicity](https://alphabetamath.cc/item/prop-measure-monotonicity)

[math:thm-finite-union-bound](https://alphabetamath.cc/item/thm-finite-union-bound)

[physics:lem-qsm-dt-finite-matrix-trace-ideal](https://alphabetamath.cc/physics/item/lem-qsm-dt-finite-matrix-trace-ideal)

### Facts & Assumptions

[F1] Isometric encoding and a channel followed by a decoded recovery give a logical channel on the logical operator space. [def-qec-prereq-restricted-logical-channel](item-def-qec-prereq-restricted-logical-channel)

[F2] Calibrated diagonal-lift data consist of specified real lift values and the elapsed interval available to the recovery rule; an unknown jump time is not thereby observed. [def-qec-prereq-diagonal-lift-phase-data](item-def-qec-prereq-diagonal-lift-phase-data)

[F3] For finite channels $\mathcal E,\mathcal F$ on one matrix space, $\|\mathcal E^N-\mathcal F^N\|_{1\to1}\leq N\|\mathcal E-\mathcal F\|_{1\to1}$; the analogous bound holds on a fixed finite reference extension. [lem-qec-prereq-channel-composition-budget](item-lem-qec-prereq-channel-composition-budget)

[F4] A finite instrument has completely positive outcome maps whose sum preserves trace. Its outcome weight is the trace of the unnormalized output, and its conditional state is that output divided by its weight when the weight is positive. [math:def-qc-instrument-and-conditional-state](https://alphabetamath.cc/item/def-qc-instrument-and-conditional-state)

[F5] On a finite complex inner-product space, $\|X\|_1=\operatorname{Tr}\sqrt{X^*X}$ is a norm, in particular definite and homogeneous and satisfying the triangle inequality. [physics:lem-qsm-dt-finite-matrix-trace-ideal](https://alphabetamath.cc/physics/item/lem-qsm-dt-finite-matrix-trace-ideal)

[F6] A probability space has a measure of total mass one on its event sigma-algebra. A filtration is an increasing sequence of sub-sigma-algebras, without a requirement that the initial one be trivial. [math:def-probability-measure](https://alphabetamath.cc/item/def-probability-measure) [math:def-filtration-and-filtered-probability-space](https://alphabetamath.cc/item/def-filtration-and-filtered-probability-space)

[F7] A sigma-algebra is closed under complements and finite unions, hence under finite intersections. [math:def-sigma-algebra](https://alphabetamath.cc/item/def-sigma-algebra)

[F8] A measure is monotone on measurable sets. For finitely many events $A_1,\ldots,A_N$, $\mathbb P(\bigcup_{k=1}^N A_k)\leq\sum_{k=1}^N\mathbb P(A_k)$. [math:prop-measure-monotonicity](https://alphabetamath.cc/item/prop-measure-monotonicity) [math:thm-finite-union-bound](https://alphabetamath.cc/item/thm-finite-union-bound)

### Justification

**Given:** The finite spaces, encoding, channels, instrument, calibrated data and error contract in the Definition; for a multiple-decay claim, the supplied probability space, filtration, events and history bound.

**Goal:** Verify the logical cycle and the stated channel and event budgets, and explain the role of branch weights.

1.1 The encoding and noise maps are well typed by [F1]. Each composite $\mathcal R_a\circ\mathcal I_a\circ\mathcal N_h\circ\operatorname{Ad}_V$ is completely positive, because every finite amplification is a composition of positive maps. Their finite sum is completely positive. Since every decoder preserves trace and the instrument sum preserves trace by [F4], the sum also preserves trace; hence $\mathcal E_h$ is a channel. The phase clause is precisely the availability assumption of [F2] and does not assert existence of an observation or an averaging law. [given, F1, F2, F4]

1.2 For each fixed $N$, applying [F3] to the specified cycle and reference gives $\|\mathcal E_h^N-\mathcal F_h^N\|_{1\to1}\leq N\epsilon_N$; the reference-extended version requires the separately stated extended bound. Thus $N\epsilon_N\to0$ is sufficient for this budget to certify vanishing accumulated error. Necessity for the actual error would be false: if both channels are the identity and the supplied valid bound is $\epsilon_N=1/N$, their accumulated error is zero for every $N$, while $N\epsilon_N=1$. Calibration alone implies neither a one-cycle error estimate nor its asymptotic rate. [given, F3, algebra]

1.3 Fix an allowed input and its supplied event model. Put $H_k=\bigcap_{j<k}(\Xi\setminus B_j)$, with $H_1=\Xi$, and $A_k=B_k\cap H_k$. By [F6] and [F7], $H_k\in\mathcal G_{k-1}$ and $A_k\in\mathcal G_k\subseteq\mathcal A$. The $A_k$ are disjoint first-occurrence events and have union $\bigcup_{k=1}^N B_k$: every point in that finite union has a least index at which it belongs to a $B_k$. [given, F6, F7, construct]

2.1 The history bound gives $\mathbb P(A_k)\leq\delta_N\mathbb P(H_k)\leq\delta_N$, since [F6] and monotonicity in [F8] give $\mathbb P(H_k)\leq\mathbb P(\Xi)=1$. The union bound in [F8] therefore gives $\mathbb P(\bigcup_{k=1}^N B_k)=\mathbb P(\bigcup_{k=1}^N A_k)\leq\sum_{k=1}^N\mathbb P(A_k)\leq N\delta_N$. Thus $N\delta_N\to0$ suffices for the separate event claim. The event model and the history estimate remain assumptions to be supplied by an application. [given, F6, F8, step 1.3, algebra]

3.1 The decoded branch maps in step 1.1 also form a finite instrument, so [F4] applies to their outputs. For an instrument outcome of positive weight $p_a$, [F4] writes its unnormalized output as $p_a\rho_a$; at zero weight its positive unnormalized output has trace zero and is zero. Indeed, for a positive semidefinite matrix $B$, $\sqrt{B^*B}=B$, so $\|B\|_1=\operatorname{Tr}B$; definiteness in [F5] then gives $B=0$ if its trace is zero. For any two families of unnormalized logical branch outputs $(B_a)$ and $(C_a)$ on the same finite outcome set, the triangle inequality in [F5] gives $\|\sum_a B_a-\sum_a C_a\|_1\leq\sum_a\|B_a-C_a\|_1$. Consequently unconditional output comparisons involve the probability-weighted contributions and all outcomes, including those outside the single-decay branch. A conditional-state estimate without its weight and the other branches does not supply the stated channel norm bound. [F4, F5, step 1.1, algebra] ∎


## Marked waiting law from finite no-jump evolution

[Open item](item-lem-qec-author-9ff6bb2d6819-marked-waiting-kernel) · level 2


### Statement

Use the finite matrices, $Q,B,V_t,S_t$ and $s_\sigma$ of the no-jump survival lemma, and assume AC. Write $d\ge1$ for the system dimension and $M=\{1,\ldots,m\}$ for the finite mark set, possibly empty. Give the density-matrix space $D_d=\{\sigma\in M_d(\mathbb C):\sigma\ge0,\ \operatorname{Tr}\sigma=1\}$ its Euclidean subspace topology and Borel sigma-algebra. Time intervals have their Borel sigma-algebras, $M$ has the discrete sigma-algebra, and products have the product sigma-algebra. The outcome space is the disjoint union $E=((0,\infty)\times M)\sqcup\{+\infty\}$. Its sigma-algebra $\mathcal E$ consists of sets $A\subseteq E$ whose sections $A_a=\{u>0:(u,a)\in A\}$ are Borel for every $a\in M$, with the isolated no-event outcome $+\infty$ independently included or excluded. Let $\lambda$ be Lebesgue measure restricted to the Borel sets of $(0,\infty)$.

Define $f_{\sigma,a}(u)=\operatorname{Tr}(L_aS_u(\sigma)L_a^\dagger)$ and $s_\sigma(\infty)=\lim_{t\to\infty}s_\sigma(t)$. The marked next-event law is the probability kernel from $D_d$ to $(E,\mathcal E)$ given by $K(\sigma,A)=\sum_{a\in M}\int_{A_a}f_{\sigma,a}(u)\,d\lambda(u)+\mathbf1_A(+\infty)s_\sigma(\infty)$. Its survivor at finite $u\ge0$, including the no-event outcome, is $K(\sigma,((u,\infty)\times M)\sqcup\{+\infty\})=s_\sigma(u)$. Given survival to $u$, its no-event state is $\widehat\sigma(u)=S_u(\sigma)/s_\sigma(u)$ and its marked hazard is $h_{\sigma,a}(u)=f_{\sigma,a}(u)/s_\sigma(u)=\operatorname{Tr}(L_a^\dagger L_a\widehat\sigma(u))$. After an event of positive density with mark $a$, its state is $J(\sigma,u,a)=L_aS_u(\sigma)L_a^\dagger/f_{\sigma,a}(u)$. Set $J(\sigma,u,a)=I/d$ at zero-density events; this does not change the law. The no-event state map on $D_d\times[0,\infty)$, the hazard maps, and $J$ on $D_d\times(0,\infty)\times M$ are Borel measurable, with state outputs in $D_d$. In particular, their state-valued maps define measurable Dirac probability kernels into $D_d$.

### Facts & Assumptions

[F1] The no-jump maps are positive, have strictly positive survival, and satisfy the survival derivative identity. [lem-qec-author-9ff6bb2d6819-no-jump-survival](item-lem-qec-author-9ff6bb2d6819-no-jump-survival)

[F2] The fundamental theorem integrates the continuous survival derivative on every finite interval. [math:lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves](https://alphabetamath.cc/item/lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves)

[F3] Assume AC, including Countable Choice for the integration interface. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[F4] Borel sigma-algebras are generated by open sets, and product sigma-algebras by measurable rectangles. [math:def-borel-sigma-algebra](https://alphabetamath.cc/item/def-borel-sigma-algebra) [math:def-product-sigma-algebra-and-finite-product-sigma-algebras](https://alphabetamath.cc/item/def-product-sigma-algebra-and-finite-product-sigma-algebras)

[F5] A probability measure has total mass one. A probability kernel has a probability measure at each input and measurable evaluation at every output event. [math:def-probability-measure](https://alphabetamath.cc/item/def-probability-measure) [math:def-measure-kernel-and-probability-kernel](https://alphabetamath.cc/item/def-measure-kernel-and-probability-kernel)

[F6] Under Countable Choice, Lebesgue measure is a measure extending interval length. A nonnegative measurable density defines a measure by integration over events. [math:thm-lebesgue-measure-is-a-complete-measure](https://alphabetamath.cc/item/thm-lebesgue-measure-is-a-complete-measure) [math:def-measure-with-density](https://alphabetamath.cc/item/def-measure-with-density)

[F7] Increasing limits of nonnegative measurable functions pass through their integrals on any measure space. [math:thm-monotone-convergence-for-the-integral](https://alphabetamath.cc/item/thm-monotone-convergence-for-the-integral)

[F8] Integrating a nonnegative product-measurable function against a finite kernel gives a measurable function of the input. [math:thm-measurability-of-integration-against-a-kernel](https://alphabetamath.cc/item/thm-measurability-of-integration-against-a-kernel)

### Proof

**Given:** The finite no-jump data, AC and the measurable spaces in the statement.

**Goal:** Construct the normalized marked waiting kernel and establish the survivor, state, hazard and measurability assertions.

1.1 Each $f_{\sigma,a}(u)$ is jointly continuous in $(\sigma,u)$ and nonnegative. For fixed $\sigma$ the density measures of [F6] on the marked components, together with the nonnegative atom at $+\infty$, define a measure on $(E,\mathcal E)$. Indeed, $\sum_a f_{\sigma,a}(u)=\operatorname{Tr}(QS_u(\sigma))=-s_\sigma'(u)$, so $\sum_a\int_0^t f_{\sigma,a}(u)\,du=1-s_\sigma(t)$. The decreasing nonnegative survivor has a limit at infinity; [F7] applied to the densities restricted to $(0,n]$ gives total finite-event mass $1-s_\sigma(\infty)$. Adding the atom normalizes the measure to one. If $M$ is empty, the derivative identity gives $s_\sigma(t)=1$ and all mass is at $+\infty$. [given, F1, F2, F3, F5, F6, F7, algebra]

2.1 Subtracting the finite-event mass up to $u$ from one gives survivor $s_\sigma(u)$, since individual finite times have zero density-measure mass. Division by this strictly positive survivor gives the displayed marked hazard. The positive no-event matrix normalized by its trace is a density matrix, as is the positive post-event matrix whenever its trace $f_{\sigma,a}(u)$ is positive. Thus the stated conditional-state and hazard formulas hold with no exceptional finite survival times. [F1, F6, step 1.1, algebra]

2.2 Fix $A\in\mathcal E$ and put $g_A(\sigma,u)=\sum_{a\in M}\mathbf1_{A_a}(u)f_{\sigma,a}(u)$. The spaces $D_d$ and $(0,\infty)$ have countable bases inherited from Euclidean spaces, so each open subset of their product is a countable union of basic open rectangles. Consequently the jointly continuous densities are measurable for the product sigma-algebra, and so is the nonnegative $g_A$. For every integer $n\ge1$, $C_n(\sigma,C)=\lambda(C\cap(0,n])$ is a finite kernel from $D_d$ to $(0,\infty)$: its section is a measure of total mass $n$ and each evaluation is constant in $\sigma$. By [F8], $G_n(\sigma)=\int g_A(\sigma,u)\,C_n(\sigma,du)$ is Borel measurable. By [F7], $G_n\uparrow G$, where $G(\sigma)=\sum_a\int_{A_a}f_{\sigma,a}\,d\lambda$. For every real $c$, $\{G>c\}=\bigcup_n\{G_n>c\}$, so $G$ is measurable. Also $s_\sigma(\infty)=\inf_{n\ge1}s_\sigma(n)$ and $\{\sigma:s_\sigma(\infty)<c\}=\bigcup_n\{\sigma:s_\sigma(n)<c\}$, a Borel set since every $s_\sigma(n)$ is continuous in $\sigma$. Hence the infinity mass is measurable. Their sum $K(\sigma,A)$ is measurable for every $A\in\mathcal E$; together with step 1.1 this is exactly the probability-kernel property. [F1, F4, F5, F6, F7, F8, step 1.1, algebra, construct]

3.1 Matrix multiplication, exponentiation and trace are continuous, and $s_\sigma(u)>0$ everywhere on $D_d\times[0,\infty)$. Thus the no-event state and marked hazards are continuous. For each mark the set $\{(\sigma,u):f_{\sigma,a}(u)>0\}$ is open, and $J$ is continuous there and constant on its Borel complement. Hence $J$ is Borel measurable into $D_d$ with its subspace Borel sigma-algebra. For any one of these state maps $F$ and any Borel $B\subseteq D_d$, the Dirac-kernel evaluation is $\delta_{F(x)}(B)=\mathbf1_B(F(x))$, which is measurable, and each Dirac measure has mass one. Finally the zero-density event set has probability $\sum_a\int_{\{u:f_{\sigma,a}(u)=0\}}f_{\sigma,a}(u)\,d\lambda(u)=0$ for every $\sigma$; assigning $I/d$ there leaves the law unchanged. All formulas specify the maps simultaneously, without selecting separate conditional versions. [F1, F4, F5, F6, step 2.1, step 2.2, algebra] ∎

### Source notes

Plenio–Knight, Section IV.C, Eqs. (122), (124)–(128), is retained as contextual bibliography for the no-jump/jump split. No general existence or measurability theorem is imported from it. This item supplies a local argument from the declared mathematical suppliers.


## Normalized record measure and absence of explosion

[Open item](item-lem-qec-author-9ff6bb2d6819-finite-horizon-record-law) · level 3


### Statement

Use the finite no-jump matrices $L_a,Q,B,V_t$ and maps $S_t$ of the no-jump survival lemma, assume AC, and fix a finite horizon $U>0$ and initial density matrix $\rho$. Put $M=\{1,\ldots,m\}$, possibly empty. For $n\ge1$, let $\Delta_n(U)=\{(t_1,\ldots,t_n):0<t_1<\cdots<t_n<U\}$ and $E_n(U)=\Delta_n(U)\times M^n$, with the Borel sigma-algebra from the Euclidean time coordinates and discrete marks. Let $E_0(U)=\{\varnothing\}$ be the empty-record singleton. The record space is $\Omega_U=\bigsqcup_{n\ge0}E_n(U)$, with sigma-algebra $\mathcal A_U=\{A\subseteq\Omega_U:A\cap E_n(U)\text{ is Borel for every }n\}$. On $E_n(U)$ let $\mu_n$ be the restriction of the product of $n$ copies of Borel Lebesgue measure on $(0,U)$ and counting measure on $M^n$; let $\mu_0$ give the singleton mass one.

For a record with $n>0$, put $t_0=0$, $W_n=L_{a_n}V_{t_n-t_{n-1}}\cdots L_{a_1}V_{t_1}$ and $K_U=V_{U-t_n}W_n$; put $W_0=I$ and $K_U=V_U$ on the empty record. Then $\mathbb P_U(A)=\sum_{n\ge0}\int_{A\cap E_n(U)}\operatorname{Tr}(K_U\rho K_U^\dagger)\,d\mu_n$ defines a probability measure on $(\Omega_U,\mathcal A_U)$. For $0<t\le U$, the restriction $R_{U,t}$ keeps precisely the events strictly before $t$; it is measurable and its pushforward law is $\mathbb P_t$. At $t=0$ the restriction is the empty record. The successive waiting laws are the marked kernels of the waiting-kernel lemma, with all waiting outcomes beyond the remaining horizon combined into the no-further-event outcome.

The associated counting process $N_t=\#\{j:t_j\le t\}$, $0\le t\le U$, has measurable coordinates, is simple and non-explosive, and has right-continuous unit-jump paths. For each fixed $t$, an event exactly at $t$ has probability zero, so using $\le t$ for $N_t$ and $<t$ for the restriction gives the same count almost surely. If $Q\le rI$ with $r\ge0$, then $\Pr(N_t\ge n)\le (rt)^n/n!$ for every $n\ge1$ and $0\le t\le U$.

### Facts & Assumptions

[F1] No-jump evolution contracts the trace of positive matrices, and supplies $V_t$ and $Q$. [lem-qec-author-9ff6bb2d6819-no-jump-survival](item-lem-qec-author-9ff6bb2d6819-no-jump-survival)

[F2] The explicit normalized waiting kernels have the displayed survival, marked densities, measurable state updates and post-event states. [lem-qec-author-9ff6bb2d6819-marked-waiting-kernel](item-lem-qec-author-9ff6bb2d6819-marked-waiting-kernel)

[F3] Tonelli applies to nonnegative product-measurable densities on sigma-finite products; it permits reordering event-time integrals, mark sums and nonnegative series. [math:thm-tonelli-theorem-for-sigma-finite-product-spaces](https://alphabetamath.cc/item/thm-tonelli-theorem-for-sigma-finite-product-spaces)

[F4] Assume AC. Its Countable Choice consequence is used for the Lebesgue-measure suppliers. The record and state formulas make no further selection of conditional versions. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[F5] Borel sigma-algebras are generated by open sets, product sigma-algebras by measurable rectangles, and measurability means that inverse images of measurable sets are measurable. [math:def-borel-sigma-algebra](https://alphabetamath.cc/item/def-borel-sigma-algebra) [math:def-product-sigma-algebra-and-finite-product-sigma-algebras](https://alphabetamath.cc/item/def-product-sigma-algebra-and-finite-product-sigma-algebras) [math:def-measurable-function-between-measurable-spaces](https://alphabetamath.cc/item/def-measurable-function-between-measurable-spaces)

[F6] Under Countable Choice, Lebesgue measure is a measure extending interval length and every Borel set is Lebesgue measurable. Counting measure is a measure. Sigma-finite measures have sigma-finite product measures with the rectangle formula. [math:thm-lebesgue-measure-is-a-complete-measure](https://alphabetamath.cc/item/thm-lebesgue-measure-is-a-complete-measure) [math:thm-borel-sets-are-lebesgue-measurable](https://alphabetamath.cc/item/thm-borel-sets-are-lebesgue-measurable) [math:prop-counting-measure-is-a-measure](https://alphabetamath.cc/item/prop-counting-measure-is-a-measure) [math:thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique](https://alphabetamath.cc/item/thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique)

[F7] On any measure space, integrating a nonnegative measurable density over measurable sets defines a measure. [math:thm-indefinite-integral-of-a-nonnegative-function-is-a-measure](https://alphabetamath.cc/item/thm-indefinite-integral-of-a-nonnegative-function-is-a-measure)

[F8] A probability measure is a measure of total mass one; together with its measurable space it defines a probability space. [math:def-probability-measure](https://alphabetamath.cc/item/def-probability-measure)

[F9] A family of measurable random elements indexed by time is a stochastic process. Here the count state space is $\mathbb N_0$ with its discrete sigma-algebra. [math:def-stochastic-process-and-finite-dimensional-distributions](https://alphabetamath.cc/item/def-stochastic-process-and-finite-dimensional-distributions)

[F10] A conditional law of a random element $Y$ given a random element $P$ is a probability kernel $C$ from the prefix space to the outcome space whose evaluations satisfy $\int_{P^{-1}(B)}C(P(\omega),A)\,d\mathbb P=\mathbb P(P\in B,Y\in A)$ for every measurable $A,B$. This is the defining identity on $\sigma(P)$, and does not condition by division by the probability of a singleton prefix. [math:def-conditional-law-given-a-random-element](https://alphabetamath.cc/item/def-conditional-law-given-a-random-element)

[F11] For every Lebesgue measurable $E\subseteq\mathbb R$ and $b\in\mathbb R$, the translate $E+b$ is Lebesgue measurable and has the same Lebesgue measure. [math:thm-lebesgue-outer-measure-and-measurability-are-translation-invariant](https://alphabetamath.cc/item/thm-lebesgue-outer-measure-and-measurability-are-translation-invariant)

[F12] The integral of a nonnegative simple function is the sum of its coefficients times the measures of its disjoint level sets. The nonnegative Lebesgue integral is the supremum of these simple integrals over all nonnegative simple minorants. [math:def-integral-of-a-nonnegative-simple-function](https://alphabetamath.cc/item/def-integral-of-a-nonnegative-simple-function) [math:def-nonnegative-lebesgue-integral](https://alphabetamath.cc/item/def-nonnegative-lebesgue-integral)

### Proof

**Given:** The finite no-jump data, AC, a finite horizon, initial state and record coordinates as in the statement.

**Goal:** Construct and normalize the measurable record law, prove measurable consistent restrictions, and bound its jump-count tails.

1.1 The component Borel sigma-algebras agree with the time-and-mark product sigma-algebras: rational open boxes form a countable basis for each Euclidean time space, so open sets are countable unions of basic rectangles; the finite discrete mark space adds only finitely many pieces. Thus the ordered simplexes are measurable, and [F6] supplies the finite component base measures $\mu_n$. The matrix densities are continuous in the time coordinates for each mark word and nonnegative, hence Borel measurable by [F5]. For $n\ge1$, define $q_n(t)$ by integrating $\operatorname{Tr}(W_n\rho W_n^\dagger)$ over the ordered $n$ event times up to $t$ and summing marks; let $q_0(t)=1$. For any positive $X$, $\sum_a\operatorname{Tr}(L_aXL_a^\dagger)=\operatorname{Tr}(QX)\le r\operatorname{Tr}X$, while each intervening $S_v$ contracts trace. Summing marks successively from the last mark backwards bounds the summed integrand by $r^n$. The ordered simplex has volume $t^n/n!$, by iterating the elementary integral of $t^{n-1}/(n-1)!$. Hence $q_n(t)\le(rt)^n/n!$. An available bound always exists: take $r=\|Q\|$, the largest eigenvalue of the positive matrix $Q$. If $M$ is empty, every positive-event component is empty and $q_n(t)=0$ for $n\ge1$. [given, F1, F3, F4, F5, F6, algebra]

1.2 Write $\lambda$ for Borel Lebesgue measure on $\mathbb R$. Translation is a Borel bijection with Borel inverse, and [F11] gives $\lambda(E+b)=\lambda(E)$ for every Borel $E$. For $\ell\ge1$ and $b\in\mathbb R^\ell$, the translated product measure and $\lambda^{\otimes\ell}$ agree on rectangles by the one-dimensional identity, and are sigma-finite; the uniqueness clause in [F6], iterated through the finite factors, makes them equal on all product-Borel sets. For a Borel $D\subseteq\mathbb R^\ell$ and nonnegative Borel $g$ on $D+b$, it follows first for indicators, then for nonnegative simple functions by their coefficient-sum definition, and finally for $g$ by the supremum definition in [F12], that $$\int_{D+b}g(v)\,d\lambda^{\otimes\ell}(v)=\int_D g(u+b)\,d\lambda^{\otimes\ell}(u).$$ The last passage uses the bijection between simple minorants given by composition with the translation and its inverse. Restricting to intervals or ordered simplexes preserves this identity, and summing unchanged discrete marks preserves it as well. With no time coordinates the identity is immediate. When $b$ depends on a fixed prefix, apply this identity separately for each prefix and then use [F3] for the nonnegative outer integral; the translations used below depend continuously on the prefix time, so the composed integrands remain product-measurable. [F3, F5, F6, F11, F12, construct, algebra]

2.1 The family $\mathcal A_U$ is a sigma-algebra: intersections with any component commute with complements relative to $\Omega_U$ and with countable unions. By step 1.1 and [F7], each $\nu_n(A_n)=\int_{A_n}\operatorname{Tr}(K_U\rho K_U^\dagger)\,d\mu_n$ is a measure on $E_n(U)$, including the singleton component. Define $\mathbb P_U(A)=\sum_n\nu_n(A\cap E_n(U))$. It vanishes at the empty set. For pairwise disjoint $A_j\in\mathcal A_U$, component countable additivity gives $\mathbb P_U(\bigcup_j A_j)=\sum_n\sum_j\nu_n(A_j\cap E_n(U))=\sum_j\mathbb P_U(A_j)$. The interchange holds for nonnegative double series, since either order is the supremum of the sums over finite rectangles of indices, or by [F3] on counting spaces. Thus the proposed law is a countably additive measure before normalization. [F3, F5, F6, F7, step 1.1, construct]

3.1 Let $p_n(U)=\nu_n(E_n(U))$. For a prefix ending at $t_n$, set $X=W_n\rho W_n^\dagger$, with $X=\rho$ and $t_n=0$ when $n=0$. The waiting-kernel identity, multiplied by $\operatorname{Tr}X$, says $\operatorname{Tr}(S_{U-t_n}(X))+\sum_a\int_0^{U-t_n}\operatorname{Tr}(L_aS_u(X)L_a^\dagger)\,du=\operatorname{Tr}X$. It also holds when $\operatorname{Tr}X=0$, since positivity then gives $X=0$. For each fixed prefix, step 1.2 permits the change from the absolute next-event time $v\in(t_n,U)$ to $u=v-t_n$. Integrating prefixes by [F3] therefore gives $p_n(U)=q_n(U)-q_{n+1}(U)$, including $n=0$. Products of successive normalized waiting densities and terminal survival factors cancel their trace denominators, leaving exactly $\operatorname{Tr}(K_U\rho K_U^\dagger)$; zero-density prefixes contribute zero. Hence $\sum_{n=0}^{k-1}p_n(U)=1-q_k(U)\to1$: for $rU>0$, the bound $(rU)^k/k!$ has successive ratio $rU/(k+1)\le1/2$ eventually, and the case $rU=0$ is immediate. Therefore step 2.1 has total mass one and is a probability measure by [F8]. This argument holds for every density matrix and finite remaining horizon, without presupposing a stochastic existence theorem. [F1, F2, F3, F8, step 1.1, step 1.2, step 2.1, algebra]

3.2 For fixed $0<t<U$, partition each $E_n(U)$ according to $k=\#\{j:t_j<t\}$. These pieces are Borel, as the cut conditions are coordinate inequalities. On each piece $R_{U,t}$ is the coordinate projection onto the first $k$ time-and-mark pairs, with the constant empty record for $k=0$. Inverse images of Borel subsets of $E_k(t)$ are Borel by continuity of this projection, and taking the finite union over $k$ and the countable union over $n$ proves measurability for $\mathcal A_t$. The endpoint restrictions are constant at zero and the identity at $U$. Also $N_t=\sum_{j=1}^n\mathbf1_{\{t_j\le t\}}$ on $E_n(U)$, so each $N_t$ is measurable into the discrete space $\mathbb N_0$. By [F9], this family on $(\Omega_U,\mathcal A_U,\mathbb P_U)$ is a stochastic process. For each fixed $t$, the coordinate sets $\{t_j=t\}$ have base measure zero by the product rectangle formula and Tonelli, because a singleton time has Lebesgue measure zero. Their finite union on each component, then countable union over components, has $\mathbb P_U$-measure zero by [F7] and step 2.1. Thus the strict and non-strict count conventions agree almost surely at each fixed time. [F3, F5, F6, F7, F9, step 1.1, step 2.1, algebra, construct]

4.1 Fix $0<t<U$ and a prefix of $k$ events before $t$. Its unnormalized state at $t$ is $X_t=K_t\rho K_t^\dagger$ with weight $w=\operatorname{Tr}X_t$. If $w>0$, every completed continuation after $t$ factors into the prefix weight times the same record density on horizon $U-t$ with initial state $X_t/w$; this follows from multiplication of the matrices defining $K_U$. Step 1.2 sends the absolute continuation times $v_j\in(t,U)$ to $v_j-t\in(0,U-t)$ without changing their product-time/counting-mark measure. By step 3.1 those continuation densities have total mass one. If $w=0$, positivity gives $X_t=0$ and every continuation density vanishes. The state maps are measurable by [F2]. Multiplying by the indicator of any Borel prefix event and using [F3] to integrate and sum continuations therefore leaves exactly its $\mathbb P_t$ weight. The null event at the cut, from step 3.2, is harmless. This proves $(R_{U,t})_*\mathbb P_U=\mathbb P_t$; the endpoint cases are immediate. Finally $\Pr(N_t\ge n)=\sum_{k\ge n}p_k(t)=q_n(t)\le(rt)^n/n!$, using the telescoping identity and vanishing remainder; at $t=0$ both sides are zero for $n\ge1$. Every record contains finitely many strictly ordered times, so its count path is right-continuous with unit jumps and finitely many jumps on the horizon. The process is therefore simple and non-explosive. [F1, F2, F3, F9, step 1.1, step 1.2, step 3.1, step 3.2, algebra]

4.2 To specify successive conditioning, fix an integer $k\ge0$ and give $\mathcal P_k=E_k(U)\sqcup\{\partial\}$ the component Borel sigma-algebra, with $\partial$ isolated. The random prefix $P_k$ is the first $k$ time-and-mark pairs when $N_U\ge k$, and is $\partial$ otherwise; $P_0$ is always the empty record. Give $D=((0,U)\times M)\sqcup\{\dagger\}$ the analogous sigma-algebra, with $\dagger$ the censored next-outcome symbol. Define $Y_k=(t_{k+1}-t_k,a_{k+1})$ when $N_U\ge k+1$, with $t_0=0$, and $Y_k=\dagger$ otherwise. On every record component these maps are either coordinate projections, continuous differences of coordinates, or constants on measurable pieces, so they are measurable by [F5]. For $p\in E_k(U)$ write $s(p)=t_k$ (zero for $k=0$), $w_k(p)=\operatorname{Tr}(W_k\rho W_k^\dagger)$ and $\sigma(p)=W_k\rho W_k^\dagger/w_k(p)$ on $w_k>0$. Integrating all continuations after $s(p)$ gives prefix-law density $w_k(p)$ on $E_k(U)$: indeed the matrix product factors as $W_k$ followed by a record on horizon $U-s(p)$, and step 1.2 shifts every continuation time by $-s(p)$ without changing its base measure. Step 3.1 then normalizes that continuation for every positive-weight state. Precisely, for every Borel $B\subseteq E_k(U)$, $\mathbb P_U(P_k\in B)=\int_B w_k(p)\,d\mu_k(p)$. Zero-weight prefixes have zero mass; on them the matrix vanishes and all continuation weights vanish. This argument uses prefix densities, not probabilities of individual continuous prefixes. [F1, F2, F3, F5, step 1.2, step 3.1, algebra, construct]

5.1 For $p\in E_k(U)$ with $w_k(p)>0$, put $h(p)=U-s(p)$ and define the candidate next-outcome kernel by $$C_k(p,A)=\sum_{a\in M}\int_0^{h(p)}\mathbf1_A((u,a))f_{\sigma(p),a}(u)\,du+\mathbf1_A(\dagger)s_{\sigma(p)}(h(p)).$$ Here $f_{\sigma,a}$ and $s_\sigma$ are the marked density and survivor in [F2]. For $p=\partial$ or $w_k(p)=0$ set $C_k(p,\cdot)=\delta_\dagger$. Every section is a probability measure: it is the [F2] waiting law with waiting times at or beyond $h(p)$, including the infinite no-event outcome, sent to $\dagger$; a finite endpoint has zero waiting-law mass. For each measurable $A\subseteq D$, its evaluation is Borel in $p$. Indeed $w_k$ is continuous on each mark component, the positive-weight set is open, and $\sigma(p)$ is continuous there. The integrand on the fixed interval $(0,U)$, multiplied by $\mathbf1_{\{u<h(p)\}}$, is nonnegative and product-measurable, so its parameter integral is measurable by [F3]. The prefix base measure $\mu_k$ and interval Lebesgue measure are finite, as required there; the singleton case $k=0$ is immediate. The survivor term is continuous on each positive-weight component, and the complementary assignment is constant on a Borel set. Thus $C_k$ is a probability kernel as required in [F10]. [F1, F2, F3, F5, F6, F10, step 1.1, step 4.2, construct]

6.1 For any measurable $A\subseteq D$ and Borel $B\subseteq E_k(U)$, separating the next waiting time and mark from its later continuation gives $$\mathbb P_U(P_k\in B,Y_k\in A)=\int_B w_k(p)C_k(p,A)\,d\mu_k(p).$$ To see this directly, the branch with no further event has density $w_k(p)s_{\sigma(p)}(U-s(p))$ and outcome $\dagger$. A next event $(u,a)$ with $0<u<U-s(p)$ has density $w_k(p)f_{\sigma(p),a}(u)$ after all later records have been integrated out by step 3.1 from the post-event state in [F2]. At zero next-event density its entire contribution is zero. Tonelli permits these nonnegative sums and iterated integrals; step 1.2 justifies the translation from the next absolute time $v$ to $u=v-s(p)$ and the shifts of later continuation times, for each fixed prefix, preserving the relevant Lebesgue integrals. Step 4.2 then identifies the displayed right side with $\int_{P_k^{-1}(B)}C_k(P_k(\omega),A)\,d\mathbb P_U$. On $\{P_k=\partial\}$ one has $Y_k=\dagger$ and $C_k=\delta_\dagger$, so the same identity holds for every measurable $B\subseteq\mathcal P_k$. By [F10] this is exactly the conditional-law identity for $Y_k$ given $P_k$. It establishes each successive censored waiting law, including $k=0$ and the empty mark family, without invoking a general conditional-distribution existence theorem or selecting versions. Together with the process and tail arguments above, this proves all assertions. [F1, F2, F3, F10, step 1.2, step 3.1, step 4.1, step 4.2, step 5.1, algebra] ∎

### Source notes

Plenio–Knight, Section IV.C, Eqs. (122), (124)–(128), is retained as contextual bibliography for the no-jump/jump split. No general existence theorem is imported from it. This item supplies its own finite-matrix and measure-construction arguments from the declared mathematical suppliers.


## Finite jump-record ensemble equals the GKSL channel

[Open item](item-lem-qec-author-9ff6bb2d6819-record-ensemble-gksl) · level 4


### Statement

Assume AC. For the finite-record matrices $K_t$ above, averaging the unnormalized conditional matrices gives $e^{t\mathcal L}(\rho)$, for every density matrix $\rho$ and $t\ge0$. More precisely, let $\Phi_n(t)(X)$ be the integral of $K_tXK_t^\dagger$ over exactly $n$ marked records, and set $M_t=\sum_{n\ge0}\Phi_n(t)$. The series converges on every matrix uniformly for $t$ in compact intervals, and $M_t=e^{t\mathcal L}$. Thus the exact record law supplies an unraveling, meaning a distribution of conditional density matrices whose mean is the specified GKSL evolution.

### Facts & Assumptions

[F1] The specified finite generator is $\mathcal L(X)=-i[H,X]+\sum_a(L_aXL_a^\dagger-\{L_a^\dagger L_a,X\}/2)$. [def-qec-prereq-finite-gksl-channel-interface](item-def-qec-prereq-finite-gksl-channel-interface)

[F2] Use $Q=\sum_aL_a^\dagger L_a$, $B=-iH-Q/2$, $V_t=e^{tB}$ and the no-jump maps $S_t(X)=V_tXV_t^\dagger$. Define $D(X)=BX+XB^\dagger$. [lem-qec-author-9ff6bb2d6819-no-jump-survival](item-lem-qec-author-9ff6bb2d6819-no-jump-survival)

[F3] The finite-record matrices $K_t$ and their Lebesgue-time/counting-mark measure are specified by the record law. This law is normalized, and for a density matrix the mass of exactly $n$ records is at most $(rt)^n/n!$, with $r=\|Q\|$; the $n=0$ bound is $1$. [lem-qec-author-9ff6bb2d6819-finite-horizon-record-law](item-lem-qec-author-9ff6bb2d6819-finite-horizon-record-law)

[F4] Bounded operator exponentials on a Banach space are differentiable groups, have their specified generator, and satisfy $\|e^{tA}\|\le e^{|t|\|A\|}$. [math:lem-exponential-series-of-a-bounded-operator](https://alphabetamath.cc/item/lem-exponential-series-of-a-bounded-operator)

[F5] Under Countable Choice, the fundamental theorem applies to continuous Banach-valued integrands and to curves with continuous derivatives, including their compact-interval endpoint extensions. [math:lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves](https://alphabetamath.cc/item/lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves)

[F6] Fubini reorders absolutely integrable complex entries on sigma-finite product spaces. [math:thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces](https://alphabetamath.cc/item/thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces)

[F7] Assume AC, including Countable Choice for the integration interfaces. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[F8] Each finite Hermitian matrix $Y$ has positive parts $Y_+,Y_-$ with $Y=Y_+-Y_-$ and $\|Y\|_1=\operatorname{Tr}Y_++\operatorname{Tr}Y_-$. [math:thm-qc-hermitian-trace-norm-positive-negative-parts](https://alphabetamath.cc/item/thm-qc-hermitian-trace-norm-positive-negative-parts)

[F9] For a finite positive matrix $P$, $\|P\|_1=\operatorname{Tr}P$. [math:thm-qc-trace-norm-unitary-invariance-and-positive-formula](https://alphabetamath.cc/item/thm-qc-trace-norm-unitary-invariance-and-positive-formula)

[F10] The finite trace norm is a norm; its dual formula bounds $|\operatorname{Tr}(C^\dagger A)|$ by $\|A\|_1$ whenever $\|C\|\le1$. [math:thm-qc-trace-norm-duality-and-norm-properties](https://alphabetamath.cc/item/thm-qc-trace-norm-duality-and-norm-properties)

[F11] A real or complex normed space with a finite ordered basis is complete. [math:cor-finite-dimensional-normed-spaces-are-banach](https://alphabetamath.cc/item/cor-finite-dimensional-normed-spaces-are-banach)

[F12] In a finite-dimensional normed space, an ordered basis gives a bounded coordinate isomorphism with coordinate $\ell^1$ space and a bounded inverse. [math:thm-coordinate-map-for-a-finite-dimensional-normed-space](https://alphabetamath.cc/item/thm-coordinate-map-for-a-finite-dimensional-normed-space)

[F13] A uniform limit of continuous maps from a nonempty topological space to a metric space is continuous. [math:thm-uniform-limit-theorem](https://alphabetamath.cc/item/thm-uniform-limit-theorem)

[F14] For an integrable complex function $f$, $|\int f|\le\int|f|$. [math:thm-integral-triangle-inequality](https://alphabetamath.cc/item/thm-integral-triangle-inequality)

### Proof

**Given:** The finite GKSL matrices, their finite-record matrices and a density matrix, with $r=\|Q\|$. The trace norm $\|\cdot\|_1$ is the sum of singular values, and the induced norm on linear maps on $M_d(\mathbb C)$ will be used below.

**Goal:** Prove compact-uniform convergence, establish continuity before differentiation, and identify the exact record average with $e^{t\mathcal L}$.

1.1 For a positive input $P$ of trace one, each integrand $K_tPK_t^\dagger$ is positive: its quadratic form at $v$ is $(K_t^\dagger v)^\dagger P(K_t^\dagger v)\ge0$. Its integral is therefore positive, and its trace is the exactly-$n$ mass in [F3]. Hence [F9] gives $\|\Phi_n(t)(P)\|_1\le(rt)^n/n!$. Scaling gives the bound $\operatorname{Tr}(P)(rt)^n/n!$ for any positive $P$; a positive matrix of trace zero vanishes by [F9]–[F10]. For arbitrary $X$, put $Y=(X+X^\dagger)/2$ and $Z=(X-X^\dagger)/(2i)$. Both are Hermitian, so [F8] writes $X=Y_+-Y_-+iZ_+-iZ_-$ with all four parts positive. Linearity and [F10] give $\|\Phi_n(t)(X)\|_1\le c_X(rt)^n/n!$, where $c_X=\operatorname{Tr}(Y_++Y_-+Z_++Z_-)$ is finite and independent of $t,n$. The integrals exist entrywise: for fixed $n$ and marks, the finite exponential products have continuous entries and finite bounds on $0\le t_j\le t\le T$ by [F4] and [F12]; extending by zero off the ordered simplex gives bounded measurable entries on a finite-measure cube. Positivity and finite linear decomposition justify all stated integral identities. [given, F2, F3, F4, F8, F9, F10, F12, algebra]

2.1 Let $E_{ij}$ be the usual ordered matrix-unit basis. By [F12] there is a finite constant $b$ with $\sum_{ij}|X_{ij}|\le b\|X\|_1$. Set $C=b\max_{ij}c_{E_{ij}}$. Expanding $X=\sum_{ij}X_{ij}E_{ij}$ in step 1.1 gives $\|\Phi_n(t)\|\le C(rt)^n/n!$. On every $[0,T]$ these norms are dominated by $C(rT)^n/n!$, a summable scalar exponential series. By [F11], both the trace-norm matrix space and its finite-dimensional space of linear maps are complete; thus the uniform Cauchy estimate for the tails proves absolute, compact-uniform convergence of $M_t=\sum_{n\ge0}\Phi_n(t)$ in the induced operator norm. Every linear map used here is bounded: its values on the finite basis, together with the coordinate bound in [F12], give a finite norm bound. [F4, F10, F11, F12, step 1.1, algebra]

3.1 Put $J(X)=\sum_aL_aXL_a^\dagger$. Entrywise differentiation of $S_t(X)=V_tXV_t^\dagger$ gives $S_t'=DS_t$ and $S_0=I$. By [F4], $e^{-tD}$ is differentiable and commutes with $D$; the product $e^{-tD}S_t$ has derivative zero. The fundamental theorem [F5] on each compact interval gives $S_t=e^{tD}$. This identity follows from the no-jump formula and does not use continuity of $M$. [F2, F4, F5, F7, step 2.1, algebra]

4.1 For each fixed $n$, classifying a nonempty record by its last time $s$ and last mark gives $\Phi_{n+1}(t)=\int_0^t S_{t-s}J\Phi_n(s)\,ds$, with $\Phi_0(t)=S_t$. Indeed the terminal factor is $V_{t-s}$, the last jump contributes $L_a$, and the preceding record ends at $s$, so the matrix products in [F3] give precisely this composition after summing the last mark. For fixed $n$, the bounded measurable entries described in step 1.1 are absolutely integrable on the finite cube, with finite counting measure for marks. Fubini therefore identifies this iterated integral with the record integral. Faces with coincident or endpoint times have Lebesgue measure zero. At $t=0$ every positive-event integral is zero. [F2, F3, F6, F7, step 1.1, step 3.1, algebra]

5.1 Each $\Phi_n$ is continuous, as follows by induction before taking any infinite sum. The base $\Phi_0(t)=e^{tD}$ is continuous by [F4]. If $\Phi_n$ is continuous, the group identity in step 3.1 rewrites step 4.1 as $\Phi_{n+1}(t)=e^{tD}\int_0^t e^{-sD}J\Phi_n(s)\,ds$. Its integrand is continuous: the entries of products are finite sums of products of continuous entries, and [F12] identifies their coordinate and norm topologies. The fundamental theorem [F5] makes its primitive continuously differentiable, so $\Phi_{n+1}$ is continuous, including at zero. On every nonempty $[0,T]$ the finite partial sums are consequently continuous maps into the finite-dimensional normed space of linear maps. Their uniform convergence from step 2.1 and [F13] show that $M$ is continuous. [F4, F5, F7, F11, F12, F13, step 2.1, step 3.1, step 4.1, algebra]

6.1 Sum the recurrence from step 4.1 over $n$. The sum passes through the integral: on $0\le s\le t\le T$, $S_{t-s}J$ is uniformly bounded by $e^{T\|D\|}\|J\|$. The norm of the tail of $\sum_n\Phi_n(s)$ tends uniformly to zero by step 2.1. In each coordinate the error in integrating a partial sum is at most a fixed coordinate-bound constant times $T e^{T\|D\|}\|J\|$ times that uniform tail norm, by [F12] and [F14]. Thus the error tends to zero. We obtain $M_t=S_t+\int_0^t S_{t-s}JM_s\,ds$. This passage uses convergence of the finite-record sums and not the desired GKSL identity. [F4, F12, F14, step 2.1, step 3.1, step 4.1, step 5.1, algebra]

7.1 Multiply step 6.1 by $e^{-tD}$ to get $e^{-tD}M_t=I+\int_0^t e^{-sD}JM_s\,ds$. Its integrand is continuous by step 5.1, so [F5] makes the right side differentiable. Multiplication by $e^{tD}$ then gives $M_t'=DM_t+JM_t=\mathcal L M_t$, since [F1]–[F2] imply $D+J=\mathcal L$, and $M_0=I$. By [F4] the derivative of $e^{-t\mathcal L}M_t$ is zero; [F5] makes this product identically $I$. Therefore $M_t=e^{t\mathcal L}$ for every $t\ge0$. [F1, F2, F4, F5, F7, step 3.1, step 5.1, step 6.1, algebra]

8.1 On a record of positive weight $w=\operatorname{Tr}(K_t\rho K_t^\dagger)$ the conditional state is $K_t\rho K_t^\dagger/w$, a positive matrix of trace one. If $w=0$, [F9]–[F10] imply $K_t\rho K_t^\dagger=0$; assign any fixed density matrix there, for example $\rho$, to define the state everywhere. This assignment is measurable on each record component, and the zero-weight set has record-law measure zero. Averaging with the normalized record law [F3] cancels $w$ on its positive set and gives $M_t(\rho)=e^{t\mathcal L}(\rho)$ by step 7.1. The entrywise averages exist by the absolute-convergence bounds from step 2.1. At $t=0$ the sole record gives $\rho$; an empty jump family leaves only the no-jump term. This proves the stated unraveling identity. [F3, F9, F10, step 2.1, step 7.1, algebra] ∎

### Source notes

The retained Plenio–Knight reference is contextual bibliography for the no-jump/jump split in a cavity example. No general existence theorem is imported from it. The matrix decomposition and norm facts above use the explicit mathematical suppliers; continuity is proved locally from the finite-record recurrence before applying the uniform-limit theorem and differentiating.


## Jump-record instruments and conditional intensity

[Open item](item-lem-qec-author-9ff6bb2d6819-record-hazard-compensator) · level 5


### Statement

Assume AC and use the normalized finite-record process and its GKSL ensemble. Let $\mathcal F_t$ be the filtration generated by the times and marks observed up to $t$. The conditional state $\sigma_t$ is obtained by no-jump propagation and trace normalization between events and by the marked update at events. Every finite measurable partition of the record space defines a finite instrument: integrate $X\mapsto K_UXK_U^\dagger$ over each cell. Its total channel is $e^{U\mathcal L}$. With the left-limit state at an event, the process has predictable intensity $\lambda_t=\operatorname{Tr}(Q\sigma_{t-})$, bounded by $r$ whenever $Q\le rI$. In the counting-process contract with $Y_t=1$, $A_t=\int_0^t\lambda_s\,ds$ is continuous and predictable, and $N_t-A_t$ is a square-integrable martingale for all pairs of times in $[0,U]$.

### Facts & Assumptions

[F1] The marked waiting densities and survival give conditional state updates and their exact hazard. [lem-qec-author-9ff6bb2d6819-marked-waiting-kernel](item-lem-qec-author-9ff6bb2d6819-marked-waiting-kernel)

[F2] The normalized finite-record measure has consistent restriction laws and tails $\Pr(N_t\ge n)\le(rt)^n/n!$. [lem-qec-author-9ff6bb2d6819-finite-horizon-record-law](item-lem-qec-author-9ff6bb2d6819-finite-horizon-record-law)

[F3] Summing record maps gives the finite GKSL channel. [lem-qec-author-9ff6bb2d6819-record-ensemble-gksl](item-lem-qec-author-9ff6bb2d6819-record-ensemble-gksl)

[F4] A finite instrument consists of completely positive maps whose sum preserves trace; its outcome states are normalized outputs at positive weights. [math:def-qc-instrument-and-conditional-state](https://alphabetamath.cc/item/def-qc-instrument-and-conditional-state)

[F5] The intensity contract requires a predictable finite density, a continuous integrated compensator and an all-pairs square-integrable martingale. [math:def-counting-process-intensity-and-compensator-contract](https://alphabetamath.cc/item/def-counting-process-intensity-and-compensator-contract)

[F6] Tonelli permits summing nonnegative record densities and integrating event times. [math:thm-tonelli-theorem-for-sigma-finite-product-spaces](https://alphabetamath.cc/item/thm-tonelli-theorem-for-sigma-finite-product-spaces)

[F7] Fubini permits absolutely integrable signed or matrix entries and conditional expected integrals. [math:thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces](https://alphabetamath.cc/item/thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces)

[F8] Assume AC for the probability, filtration and integration interfaces. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[F9] On $[0,U]$, the predictable sigma-algebra is generated by $(s,u]\times B$ with $0\le s<u\le U$ and $B\in\mathcal F_s$ and by $\{0\}\times B$ with $B\in\mathcal F_0$. Predictable real processes are closed under pointwise limits and are progressively measurable. [math:def-progressively-measurable-and-predictable-process](https://alphabetamath.cc/item/def-progressively-measurable-and-predictable-process)

### Proof

**Given:** The finite-record law, the history filtration and $Q\le rI$, with any finite $r\ge\|Q\|$ available when no smaller bound is specified.

**Goal:** Connect records, instruments, conditional hazards and the compensator contract.

1.1 Integrating conjugation by $K_U$ over a measurable cell preserves positivity at every ancilla dimension, since the integral of each nonnegative quadratic form is nonnegative. The integrals exist by the positive trace bound and decomposition into four positive parts. Their sum over a finite partition is the GKSL channel by [F3], hence trace-preserving, so [F4] applies. Conditional on a recorded prefix the remaining law starts from its normalized output: the kernel-product factors in [F2] cancel exactly as in [F1]. This also identifies the conditional state before the next event as the normalized no-jump state. This is the particular instrument chosen by the given $L_a$; the channel alone does not select a unique monitoring instrument. [given, F1, F2, F3, F4, algebra]

2.1 At a time with no intervening event the survivor from the current state is $s_\sigma(u)$ and its derivative is minus the summed marked density. Thus the no-event conditional hazard is $\operatorname{Tr}(Q\widehat\sigma(u))$ by [F1]. On the finite-record space of [F2], the conditional state has continuous no-jump evolution between finitely many events and the prescribed right-hand reset at each event; the zero-density reset convention in [F1] defines it on every record. The Borel state maps in [F1], composed along the finite observed prefix, show that the state and its left-limit state are measurable functions of that prefix. Thus $t\mapsto\sigma_{t-}$, with $\sigma_{0-}=\rho$, is adapted and left-continuous on $(0,U]$. In particular $\lambda_t=\operatorname{Tr}(Q\sigma_{t-})$, with $\lambda_0=\operatorname{Tr}(Q\rho)$, is a real adapted process with left-continuous paths on $(0,U]$ and values in $[0,r]$. [F1, F2, step 1.1, algebra]

3.1 To prove the needed predictability implication locally, let $H$ be any real adapted process with left-continuous paths on $(0,U]$, with $H_0$ measurable for $\mathcal F_0$. Put $q_k=kU/2^n$ and define $H^{(n)}_t=H_0\mathbf1_{\{0\}}(t)+\sum_{k=0}^{2^n-1}H_{q_k}\mathbf1_{(q_k,q_{k+1}]}(t)$. For each Borel set $C\subseteq\mathbb R$, its inverse image is $\{0\}\times\{H_0\in C\}$ together with the finite union of $(q_k,q_{k+1}]\times\{H_{q_k}\in C\}$; all are predictable generators by adaptedness and [F9]. Thus every $H^{(n)}$ is predictable. At $t=0$ these approximants equal $H_0$; for each $t>0$ the selected left endpoints are strictly below $t$ and tend to $t$, so left-continuity gives $H^{(n)}_t\to H_t$ on every record. Pointwise-limit closure in [F9] proves that $H$ is predictable. Apply this to the process $\lambda$ from step 2.1. The constant process $Y_t=1$ is also predictable by the same construction. [F9, step 2.1, construct]

4.1 By [F9], predictability of $\lambda$ makes its restriction to $[0,t]\times\Omega$ measurable for $\mathcal B([0,t])\otimes\mathcal F_t$ for each fixed $t$. Apply the section-integral measurability in Tonelli to this nonnegative function on the product of the finite Lebesgue time space and $(\Omega,\mathcal F_t,P)$; both measures are finite. It follows that $A_t=\int_0^t\lambda_s\,ds$ is $\mathcal F_t$-measurable. The pathwise bound $0\le\lambda\le r$ gives $|A_t-A_s|\le r|t-s|$, so $A$ is adapted and continuous on every record, with $A_0=0$, $A_U\le rU$ and $\mathbb E[A_U]\le rU$. Apply the local approximation of step 3.1 to $H=A$, including its deterministic time-zero value, to conclude that $A$ is predictable. [F6, F9, step 2.1, step 3.1, algebra]

5.1 Here is an explicit verification of the martingale requirement, rather than an inference from the hazard formula alone. Starting from any state at time $s$, let $Z_n(v)$ be the integral over exactly $n$ events in $(s,v)$ of their unnormalized record state propagated without further events up to $v$. The expected rate density of the next event after these $n$ events is $\operatorname{Tr}(Q Z_n(v))$: integrate and sum the last marked jump and then all continuations after it, whose conditional mass is one by [F2]. Consequently $\mathbb E[N_u-N_s]=\int_s^u\sum_{n\ge0}\operatorname{Tr}(Q Z_n(v))\,dv$. On the other hand the weight of each $n$-event state at $v$ is its trace, and multiplying that weight by its normalized hazard cancels the normalization. Hence $\mathbb E[\lambda_v]=\sum_{n\ge0}\operatorname{Tr}(Q Z_n(v))$. Tonelli justifies both identities, and the sums are bounded by $r$, since the trace weights sum to one. The same computation applies conditional on every prefix at $s$, by consistency and the explicit kernels. Integrating against an arbitrary bounded measurable function of that prefix, and using Fubini, gives $\mathbb E[N_u-N_s\mid\mathcal F_s]=\mathbb E[\int_s^u\lambda_v\,dv\mid\mathcal F_s]$ for each fixed $s\le u$. Thus $N-A$ is an all-pairs martingale. [F1, F2, F6, F7, F8, step 1.1, step 4.1, algebra]

6.1 For an integer-valued nonnegative variable $N_U$, $N_U^2=\sum_{n=1}^{N_U}(2n-1)$. By the tail bound and Tonelli, $\mathbb E[N_U^2]\le\sum_{n\ge1}(2n-1)(rU)^n/n!<\infty$; convergence follows by the ratio test, or by the exponential series. Since $A_U\le rU$, every $N_t-A_t$ is square-integrable. Together with step 4.1 and the martingale identity, this establishes every clause of [F5]. [F2, F5, F6, step 4.1, step 5.1, algebra] ∎

### Source notes

Plenio–Knight, Section IV.C, Eqs. (122), (124)–(128), motivates the no-jump/jump split in a cavity example. This item supplies its own finite-matrix argument; no general existence theorem is imported from that example.


## Two-jump probability from a bounded hazard

[Open item](item-lem-qec-prereq-bounded-intensity-two-jumps) · level 6


### Statement

Assume AC for the intensity interface, hence also Countable Choice and Dependent Choice for its conditional waiting-law suppliers. For a supplied simple, non-explosive counting process, use measurable conditional waiting laws in the full-history sense: the supplied jointly measurable kernels give the actual next-event law conditional on the full history, including histories immediately after each event. If their locally integrable conditional no-event hazards are bounded by a finite $r\ge0$ for every history throughout $[0,\tau]$, where $\tau>0$, the probability of at least two jumps is at most $r^2\tau^2/2$. Over $N=T/\tau$ intervals, with $N$ an integer and the same bound valid conditional on every interval's initial history, a union bound gives at most $r^2T\tau/2$. In the exact finite quantum-jump instrument associated with a finite GKSL generator and its specified $L_a$, the sufficient hypothesis is $\sum_aL_a^\dagger L_a\le rI$. A stationary Poisson law is not assumed.

### Facts & Assumptions

[F1] Use the finite GKSL evolution with Hermitian $H$ and a finite family $L_a$. [def-qec-prereq-finite-gksl-channel-interface](item-def-qec-prereq-finite-gksl-channel-interface)

[F2] Finite coarse partitions of a monitored record define instruments and conditional states by normalized positive outputs. [math:def-qc-instrument-and-conditional-state](https://alphabetamath.cc/item/def-qc-instrument-and-conditional-state)

[F3] The simple non-explosive counting-process intensity contract distinguishes a supplied density formula from an actual compensator law. [math:def-counting-process-intensity-and-compensator-contract](https://alphabetamath.cc/item/def-counting-process-intensity-and-compensator-contract)

[F4] A supplied measurable conditional waiting law with locally integrable hazard $\lambda_h$ has density $\lambda_h(u)\exp(-\int\lambda_h)$; this supplier assumes AC, Countable Choice and Dependent Choice. [math:lem-conditional-intensity-interevent-survival-and-density](https://alphabetamath.cc/item/lem-conditional-intensity-interevent-survival-and-density)

[F5] Assume full AC; in particular carry the Countable Choice and Dependent Choice requirements of the waiting-law supplier. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[F6] The five preceding finite-matrix lemmas construct the exact GKSL record instrument, with conditional hazard $\operatorname{Tr}(Q\sigma_{t-})$ and the full compensator law. [lem-qec-author-9ff6bb2d6819-record-hazard-compensator](item-lem-qec-author-9ff6bb2d6819-record-hazard-compensator)

[F7] Use the measurable full-history and next-event-kernel conventions, with actual conditional laws after each event and jointly measurable finite-time densities; these are supplied law hypotheses, not an existence assertion from a displayed hazard. [math:def-temporal-point-process-and-conditional-intensity](https://alphabetamath.cc/item/def-temporal-point-process-and-conditional-intensity)

[F8] For every density matrix, the finite no-jump evolution supplies a marked waiting probability kernel, measurable state updates at events, and marked hazards whose sum is $\operatorname{Tr}(Q\widehat\sigma(u))$, where $Q=\sum_aL_a^\dagger L_a$. [lem-qec-author-9ff6bb2d6819-marked-waiting-kernel](item-lem-qec-author-9ff6bb2d6819-marked-waiting-kernel)

[F9] The probability of a finite union of events is at most the sum of their probabilities. [math:thm-finite-union-bound](https://alphabetamath.cc/item/thm-finite-union-bound)

### Proof

**Given:** A supplied process and history-uniform hazard bound as in the statement; for the quantum application, finite GKSL data and $Q\le rI$.

**Goal:** Bound two or more jumps in one interval and in the $N$ check intervals, and justify the quantum application.

1.1 Conditional on the initial history, let $S_1$ be the first jump time. By [F4] its finite-time density $f_1(s)$ is at most $r$. By [F7], conditional on the first jump and its updated full history $h$, the next-event density $f_{2,h}(t)$ is also at most $r$ throughout the remaining interval, because its survivor is at most one. Thus its conditional probability of another jump by $\tau$ is at most $r(\tau-s)$. Integrating the conditional probability with the first-event law yields $\Pr(N_\tau-N_0\ge2)\le\int_0^\tau r\,r(\tau-s)\,ds=r^2\tau^2/2$. This counts the first two events regardless of later events; atoms at infinite waiting time contribute zero, and no independence or stationary intensity is used. The history kernels provide the disintegration used here, so no selection of conditional densities at individual histories is asserted. [given, F3, F4, F5, F7, algebra]

2.1 The bound in step 1.1 is uniform in the initial history of each check interval, so averaging it gives the same bound for that interval even if earlier measurements change its initial state. By [F9], the probability of at least one interval containing two jumps is at most the sum of the $N$ interval probabilities, namely $Nr^2\tau^2/2=r^2T\tau/2$. The same argument allows arbitrary state resets between intervals, provided the uniform hazard bound remains valid. [given, F7, F9, step 1.1, algebra]

3.1 For the specified finite quantum model, [F6] constructs the record process and shows that its ensemble is the channel of [F1], with the finite coarse instruments and normalized conditional states of [F2]. Its conditional hazard is $\lambda_t=\operatorname{Tr}(Q\sigma_{t-})$. Since $\sigma_{t-}$ is positive of trace one and $0\le Q\le rI$, this is between zero and $r$ for every state, including states reachable after an allowed reset. By [F8], the waiting kernel and marked update are jointly measurable functions of the current density matrix, so they can be applied after every event using its updated full history. By [F6], these are the actual conditional laws of the simple non-explosive record process, and its compensator satisfies [F3]. Thus [F7] supplies the history conventions, [F8] supplies the explicit waiting kernels, and [F6] identifies their conditional-law application to this process. The hypotheses used in steps 1.1 and 2.1 therefore hold for this instrument, proving both stated bounds. [F1, F2, F3, F6, F7, F8, step 1.1, step 2.1, algebra] ∎

### Source notes

The probability estimate uses supplied full-history waiting kernels; a bare intensity formula is not used as an existence assertion. The finite GKSL application uses the existing marked waiting-kernel and record-instrument lemmas, independently of the trajectory-expansion draft. Plenio–Knight is retained as contextual bibliography from prior authoring, not as an imported general existence theorem; this adjudication did not reread it. This repair concerns generated prerequisite content and makes no claim about a defect in the article under study.
