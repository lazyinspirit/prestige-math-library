---
id: lem-qec-prereq-channel-composition-budget
kind: lemma
domain: mathematics
title: Telescoping error budget for repeated finite channels
status: published
origin: session
deps:
  - math:def-qc-quantum-channel
  - physics:thm-qsm-dt-trace-contraction
  - math:def-qc-tensor-register-and-permutation
  - physics:lem-qsm-dt-finite-matrix-trace-ideal
  - math:def-qc-register-and-computational-basis
  - math:def-qc-dirac-notation-conversion
  - math:def-qc-completely-positive-map
  - math:thm-qc-kraus-map-completely-positive
  - math:def-non-negative-and-positive-operator
dependency_roles:
  math:def-qc-quantum-channel: mathematical-premise
  physics:thm-qsm-dt-trace-contraction: mathematical-premise
  math:def-qc-tensor-register-and-permutation: mathematical-premise
  physics:lem-qsm-dt-finite-matrix-trace-ideal: mathematical-premise
  math:def-qc-register-and-computational-basis: mathematical-premise
  math:def-qc-dirac-notation-conversion: mathematical-premise
  math:def-qc-completely-positive-map: mathematical-premise
  math:thm-qc-kraus-map-completely-positive: mathematical-premise
  math:def-non-negative-and-positive-operator: mathematical-premise
formulation_deps:
  - math:def-qc-quantum-channel
  - math:def-qc-tensor-register-and-permutation
  - physics:lem-qsm-dt-finite-matrix-trace-ideal
  - math:def-qc-register-and-computational-basis
  - math:def-qc-dirac-notation-conversion
  - math:def-qc-completely-positive-map
argument_deps:
  - math:def-qc-quantum-channel
  - physics:thm-qsm-dt-trace-contraction
  - math:def-qc-tensor-register-and-permutation
  - physics:lem-qsm-dt-finite-matrix-trace-ideal
  - math:def-qc-register-and-computational-basis
  - math:def-qc-dirac-notation-conversion
  - math:def-qc-completely-positive-map
  - math:thm-qc-kraus-map-completely-positive
  - math:def-non-negative-and-positive-operator
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 0
---

## Statement

Let $d\geq1$ and let $\mathcal E,\mathcal F:M_d(\mathbb C)\to M_d(\mathbb C)$ be quantum channels: complex-linear, completely positive, trace-preserving maps. For a linear map $T$ between finite matrix spaces define $\|T\|_{1\to1}=\sup_{X\ne0}\|T(X)\|_1/\|X\|_1$, where $\|X\|_1=\operatorname{Tr}\sqrt{X^*X}$. For every integer $N\geq0$, $\|\mathcal E^N-\mathcal F^N\|_{1\to1}\leq N\|\mathcal E-\mathcal F\|_{1\to1}$, with zeroth powers equal to the identity map. For a fixed reference dimension $r\geq1$, use the reference-first ordered product basis of $\mathbb C^r\otimes\mathbb C^d$, identifying its operator space with $M_{rd}(\mathbb C)$. For $X\in M_{rd}(\mathbb C)$, define its system blocks $X_{ij}\in M_d(\mathbb C)$ by $(X_{ij})_{ab}=X_{(i,a),(j,b)}$ for $0\leq i,j<r$ and $0\leq a,b<d$. For any complex-linear $T:M_d(\mathbb C)\to M_d(\mathbb C)$, define its reference extension $\widehat T_r:M_{rd}(\mathbb C)\to M_{rd}(\mathbb C)$ by $\widehat T_r(X)_{(i,a),(j,b)}=T(X_{ij})_{ab}$. Thus the extension leaves reference matrix-unit indices unchanged and applies $T$ to each system block. The same error budget holds for these extensions: $\|\widehat{\mathcal E}_r^{\,N}-\widehat{\mathcal F}_r^{\,N}\|_{1\to1}\leq N\|\widehat{\mathcal E}_r-\widehat{\mathcal F}_r\|_{1\to1}$, with zeroth powers again the identity.

For $q\in[0,1]$, define the qubit dephasing channel $D_q$ by $D_q(\begin{smallmatrix}a&b\\c&d\end{smallmatrix})=\begin{smallmatrix}a&qb\\qc&d\end{smallmatrix}$. Then $D_q^N=D_{q^N}$ and $1-q^N\leq N(1-q)$. For a normalized pure input $|\psi\rangle=\alpha|0\rangle+\beta|1\rangle$, defining its output fidelity as $\langle\psi|D_q^N(|\psi\rangle\langle\psi|)|\psi\rangle$, the corresponding infidelity is $2|\alpha|^2|\beta|^2(1-q^N)$ and is at most $N$ times its one-cycle value. A fidelity value for one input alone does not imply a corresponding induced-norm error bound.

## Facts & Assumptions

**Given:** The channels, reference space, integer $N$, parameter $q$, and normalized qubit vector in the Statement.

**Goal:** Establish the norm budget, the dephasing identities and bound, and the limitation of a single-input fidelity.

[F1] A finite quantum channel is a complex-linear completely positive trace-preserving map, with trace preservation on every input matrix. [[math:def-qc-quantum-channel]]

[F2] Every finite quantum channel contracts the trace norm on every complex input matrix. [[physics:thm-qsm-dt-trace-contraction]]

[F3] Finite ordered tensor registers have an ordered orthonormal product basis with the product inner product, so a reference and system operator space may be represented in that basis as one finite matrix space. [[math:def-qc-tensor-register-and-permutation]]

[F4] On every finite matrix space, $\|X\|_1=\operatorname{Tr}\sqrt{X^*X}$ is a norm; in particular it is positive for $X\ne0$, homogeneous, and satisfies the triangle inequality. [[physics:lem-qsm-dt-finite-matrix-trace-ideal]]

[F5] The qubit register is $Q_2=\mathbb C^2$ with ordered computational basis $|0\rangle=e_0=(1,0)^{\mathsf T}$, $|1\rangle=e_1=(0,1)^{\mathsf T}$, the basis used in the matrix formula for $D_q$. Kets are coordinate columns, bras their conjugate-transpose rows, and $|x\rangle\langle y|$ has coordinate matrix $xy^*$. [[math:def-qc-register-and-computational-basis]] [[math:def-qc-dirac-notation-conversion]]

[F6] For a map $T$ on the system operator space, its amplification $T^{(r)}$ is defined on the system-first space $\mathbb C^d\otimes\mathbb C^r$ by applying $T$ to each system block indexed by reference indices. Complete positivity means that $T^{(r)}$ sends nonnegative operators to nonnegative operators for every $r\geq1$. [[math:def-qc-completely-positive-map]]

[F7] A map between finite-dimensional complex operator spaces given by a finite sum $T(X)=\sum_a K_a X K_a^*$ of linear operators $K_a$ is completely positive. [[math:thm-qc-kraus-map-completely-positive]]

[F8] An operator is nonnegative when it is self-adjoint and its quadratic form is nonnegative on every vector. [[math:def-non-negative-and-positive-operator]]

## Proof

1.1 For $N\geq1$, cancellation of consecutive terms in the finite sum gives $\mathcal E^N-\mathcal F^N=\sum_{j=0}^{N-1}\mathcal E^{N-1-j}(\mathcal E-\mathcal F)\mathcal F^j$. By [F2], every power of either channel contracts the trace norm; the zeroth power is the identity. By [F4], the trace-norm denominator is positive on nonzero inputs. Applying its triangle inequality to the displayed sum and then taking the supremum over those inputs gives the stated norm bound. For $N=0$ both sides are zero. [given, F2, F4, algebra]

1.2 With $Z=\operatorname{diag}(1,-1)$, put $K_0=\sqrt{(1+q)/2}\,I_2$ and $K_1=\sqrt{(1-q)/2}\,Z$. For $q\in[0,1]$ these are linear operators on $\mathbb C^2$, and direct matrix multiplication gives $D_q(X)=K_0XK_0^*+K_1XK_1^*$ for every $X\in M_2(\mathbb C)$. The finite-sum theorem [F7] therefore makes $D_q$ completely positive. The same matrix formula shows complex linearity and preserves the two diagonal entries, hence the trace of every input matrix. Thus $D_q$ is a channel by [F1]. Its off-diagonal entries gain a factor $q$ per application, giving $D_q^N=D_{q^N}$, including $N=0$. The geometric-sum identity gives $1-q^N=(1-q)\sum_{j=0}^{N-1}q^j\leq N(1-q)$, with an empty sum when $N=0$. [given, F1, F7, algebra]

1.3 The block formula in the Statement assigns every entry of $\widehat T_r(X)$ uniquely and is complex-linear because $T$ is. It is therefore a well-defined linear map on $M_{rd}(\mathbb C)$ using the product basis of [F3]. For another complex-linear $S:M_d(\mathbb C)\to M_d(\mathbb C)$, applying the rule twice gives $\widehat S_r\widehat T_r=\widehat{S\circ T}_r$, and the extension of the identity is the identity. Hence $\widehat T_r^{\,N}=\widehat{T^N}_r$ for every $N\geq0$. If $T$ preserves trace, then $\operatorname{Tr}(\widehat T_r(X))=\sum_{i=0}^{r-1}\operatorname{Tr}(T(X_{ii}))=\sum_{i=0}^{r-1}\operatorname{Tr}(X_{ii})=\operatorname{Tr}X$. In particular the two channel extensions preserve trace by [F1]. [given, F1, F3, algebra]

2.1 To compare factor orders with [F6], fix $s\geq1$ and define the coordinate permutation $P$ from $(\mathbb C^r\otimes\mathbb C^d)\otimes\mathbb C^s$ to $\mathbb C^d\otimes\mathbb C^{rs}$ by $P((e_i\otimes e_a)\otimes e_k)=e_a\otimes e_{is+k}$. Here $0\leq i<r$, $0\leq a<d$ and $0\leq k<s$. The product bases and their inner products in [F3] make this a bijection of orthonormal coordinate bases, so $P^*P=PP^*=I$. Coordinate multiplication and [F8] show that conjugation by $P$ or $P^*$ preserves nonnegativity: self-adjointness is preserved and $v^*PYP^*v=(P^*v)^*Y(P^*v)\geq0$ when $Y$ is nonnegative. For every $Y$, the block rules in the Statement and [F6] give $(\widehat T_r)^{(s)}(Y)=P^*T^{(rs)}(PYP^*)P$: the system block indexed by $(i,k),(j,\ell)$ on either side is obtained by applying $T$ to the matrix with entries $Y_{((i,a),k),((j,b),\ell)}$ as $a,b$ vary. For $T=\mathcal E$ or $\mathcal F$, [F6] makes $T^{(rs)}$ positive, so this identity proves positivity of every amplification of $\widehat T_r$. With $s=1$ it also explicitly identifies the reference-first extension with the supplied system-first amplification under the factor swap. Thus both extensions are completely positive. By step 1.3 and [F1] they are channels, and applying step 1.1 to them proves the stated reference-extended inequality. [given, F1, F3, F6, F8, step 1.1, step 1.3, algebra]

3.1 Using the coordinate and outer-product conventions in [F5], put $p=|\alpha|^2$, so $|\beta|^2=1-p$. Direct multiplication gives $\langle\psi|D_q^N(|\psi\rangle\langle\psi|)|\psi\rangle=p^2+(1-p)^2+2p(1-p)q^N$. Its infidelity is therefore $2p(1-p)(1-q^N)$, and step 1.2 bounds it by $N$ times the same expression at $N=1$. For the limitation, the identity channel and $D_0$ both return $|0\rangle\langle0|$ exactly, giving fidelity one on that input, but their difference sends $|0\rangle\langle1|$ to itself and hence, by the positive trace norm of this nonzero matrix in [F4], has induced norm at least one. Thus that single fidelity cannot imply a zero induced-norm error bound. [given, F4, F5, step 1.2, algebra] ∎
