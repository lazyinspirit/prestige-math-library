---
id: def-qec-prereq-entanglement-fidelity
kind: definition
domain: mathematics
title: Entanglement fidelity on a finite logical space
status: draft
origin: session
deps:
  - math:def-qc-quantum-channel
  - math:def-qc-density-operator
  - math:def-qc-tensor-register-and-permutation
  - math:def-qc-first-factor-partial-trace
  - math:lem-qc-tensor-products-of-operator-matrix-units-form-a-basis
  - math:def-qc-completely-positive-map
  - math:def-infimum
  - math:thm-infimum-property
dependency_roles:
  math:def-qc-quantum-channel: mathematical-premise
  math:def-qc-density-operator: mathematical-premise
  math:def-qc-tensor-register-and-permutation: mathematical-premise
  math:def-qc-first-factor-partial-trace: mathematical-premise
  math:lem-qc-tensor-products-of-operator-matrix-units-form-a-basis: mathematical-premise
  math:def-qc-completely-positive-map: mathematical-premise
  math:def-infimum: mathematical-premise
  math:thm-infimum-property: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: A simple formula for the average gate fidelity of a quantum dynamical
        operation
      url: https://arxiv.org/pdf/quant-ph/0205035
      locator: p. 1, paragraph defining entanglement fidelity; p. 2, paragraph
        preceding Eq. (11)
      statement: Entanglement fidelity is the overlap of a maximally entangled state
        with its image under the identity on a reference system tensored with
        the channel; a standard maximally entangled vector is the normalized sum
        of matching basis vectors.
      hypotheses: A finite-dimensional system and a trace-preserving quantum
        operation, with an equally sized reference system.
      reading_limits: Read the entanglement-fidelity definition on p. 1 and the
        standard maximally entangled vector on p. 2 before Eq. (11). The local
        notation, normalization, partial-trace, tensor-map, positivity and
        replacement-channel calculations are locally authored adaptations; no
        reconstruction of the paper's average-fidelity proof or source audit is
        claimed.
dependency_level: 0
proof_strategy: direct
---

## Definition

Let $d\ge 1$ be an integer, let $H=\mathbb C^d$ with standard orthonormal basis $|0\rangle,\ldots,|d-1\rangle$, and let $\mathcal E:\mathcal L(H)\to\mathcal L(H)$ be a quantum channel. Use a second copy of $H$ as a reference and set $|\Phi_d\rangle=d^{-1/2}\sum_{j=0}^{d-1}|j\rangle\otimes|j\rangle$. For vectors $u,v$, write $|u\rangle\langle v|$ for the operator $x\mapsto\langle x,v\rangle u$, using the inner product linear in its first argument. The entanglement fidelity of $\mathcal E$ for the maximally mixed input $I/d$ is

$$F_e(\mathcal E)=\langle\Phi_d|({\rm id}\otimes\mathcal E)(|\Phi_d\rangle\langle\Phi_d|)|\Phi_d\rangle.$$

Here the bracket $\langle v|A|v\rangle$ means $\langle Av,v\rangle$, $I$ is the identity on $H$, and ${\rm id}$ is the identity map on $\mathcal L(H)$. The tensor map acts on elementary operators by $({\rm id}\otimes\mathcal E)(A\otimes B)=A\otimes\mathcal E(B)$ and extends linearly. The pure-state overlap $\langle\psi|\mathcal E(|\psi\rangle\langle\psi|)|\psi\rangle$ for a unit vector $\psi$, and its infimum over unit vectors, are separately defined functionals; they need not equal $F_e$.

## Definition references

[[math:def-qc-quantum-channel]]

[[math:def-qc-density-operator]]

[[math:def-qc-tensor-register-and-permutation]]

[[math:def-infimum]]

## Facts & Assumptions

[F1] A finite-dimensional quantum channel is complex-linear, completely positive and trace-preserving on all operators. [[math:def-qc-quantum-channel]]

[F2] A density operator is a non-negative operator of trace one on a nonzero finite-dimensional space. [[math:def-qc-density-operator]]

[F3] Product basis vectors form an orthonormal basis of the ordered tensor register, with inner product linear in the first argument; the wire swap exchanges the two factors on product basis vectors and extends linearly. [[math:def-qc-tensor-register-and-permutation]]

[F4] In an ordered orthonormal product basis, the first-factor partial trace is given by $(\operatorname{Tr}_1 X)_{ab}=\sum_s X_{(s,a),(s,b)}$, with matrix entries computed using the linear-first inner product. [[math:def-qc-first-factor-partial-trace]]

[F5] Tensor products of the operator matrix units of two specified orthonormal bases form a basis of the endomorphisms of their tensor product. [[math:lem-qc-tensor-products-of-operator-matrix-units-form-a-basis]]

[F6] For a complex-linear map $\mathcal A:\mathcal L(K)\to\mathcal L(K)$ and an ancilla $R=\mathbb C^r$, the amplification $\mathcal A^{(r)}$ acts on the $R$-indexed blocks of an operator on $K\otimes R$ by applying $\mathcal A$ to each block. Complete positivity means that this amplification preserves non-negativity for every integer $r\ge1$. [[math:def-qc-completely-positive-map]]

[F7] For a real set $S$, a real number $\ell$ is its infimum when it is a lower bound of $S$ and every lower bound of $S$ is at most $\ell$. [[math:def-infimum]]

[F8] Every nonempty subset of $\mathbb R$ that is bounded below has an infimum in $\mathbb R$. [[math:thm-infimum-property]]

## Justification

**Given:** The finite space, standard basis, channel, rank-one-operator convention and tensor-map rule in the Definition. Write $E_{jk}=|j\rangle\langle k|$ and $P_\Phi=|\Phi_d\rangle\langle\Phi_d|$.

1.1 By [F3], the $d$ matching product basis vectors are orthonormal, so $\|\Phi_d\|=1$. The operator $P_\Phi$ is self-adjoint and satisfies $\langle P_\Phi x,x\rangle=|\langle x,\Phi_d\rangle|^2\ge0$, and its trace is $\|\Phi_d\|^2=1$, so it is a density operator by [F2]. Expanding gives $P_\Phi=d^{-1}\sum_{j,k}E_{jk}\otimes E_{jk}$. The coordinate rule [F4] yields $\operatorname{Tr}_1(E_{jk}\otimes E_{\ell m})=\delta_{jk}E_{\ell m}$, since summing the first-factor diagonal entries gives $\sum_s\delta_{sj}\delta_{sk}=\delta_{jk}$. Consequently $\operatorname{Tr}_1 P_\Phi=d^{-1}\sum_j E_{jj}=I/d$. [given, F2, F3, F4, algebra]

1.2 By [F5], prescribing $E_{jk}\otimes E_{\ell m}\mapsto E_{jk}\otimes\mathcal E(E_{\ell m})$ defines a unique linear map $L$ on the full operator space. Expanding $A$ and $B$ in their matrix units shows $L(A\otimes B)=A\otimes\mathcal E(B)$, as required in the Definition. In the product basis, summing diagonal entries gives $\operatorname{tr}(A\otimes B)=\operatorname{tr}(A)\operatorname{tr}(B)$. Hence [F1] implies $\operatorname{tr}L(E_{jk}\otimes E_{\ell m})=\operatorname{tr}(E_{jk})\operatorname{tr}\mathcal E(E_{\ell m})=\delta_{jk}\delta_{\ell m}=\operatorname{tr}(E_{jk}\otimes E_{\ell m})$; linearity extends trace preservation to every input. [given, F1, F3, F5, algebra]

1.3 For every unit vector $\psi\in H$, put $P_\psi=|\psi\rangle\langle\psi|$. This operator is self-adjoint and satisfies $\langle P_\psi x,x\rangle=|\langle x,\psi\rangle|^2\ge0$, so it is non-negative. Complete positivity in [F1] and the $r=1$ case of [F6] imply that $\mathcal E(P_\psi)$ is non-negative. Thus $f_\psi=\langle\mathcal E(P_\psi)\psi,\psi\rangle$ is real and nonnegative. Since $d\ge1$, the unit vector $|0\rangle$ exists, so $S_{\mathcal E}=\{f_\psi:\psi\in H,\ \|\psi\|=1\}$ is a nonempty subset of $\mathbb R$ bounded below by $0$. By [F8] it has a real infimum. By [F7], any two infima are each at most the other and hence equal; the infimum functional in the Definition is therefore well-defined. [given, F1, F6, F7, F8, algebra]

2.1 Let $S(x\otimes y)=y\otimes x$ be the wire swap on $H\otimes H$. It permutes the orthonormal product basis and satisfies $S^2=I$, so it preserves inner products and $\langle Su,v\rangle=\langle u,Sv\rangle$. If $X$ is non-negative, $SXS$ is self-adjoint and $\langle SXSy,y\rangle=\langle XSy,Sy\rangle\ge0$; thus conjugation by $S$ preserves non-negativity. The block rule [F6] gives $\mathcal E^{(d)}(B\otimes A)=\mathcal E(B)\otimes A$. Checking on the product operator basis [F5] therefore gives $L(X)=S\mathcal E^{(d)}(SXS)S$ for every $X$. Complete positivity in [F1] and [F6] makes $\mathcal E^{(d)}$ positive, so this identity proves positivity of the reference-first map $L={\rm id}\otimes\mathcal E$. [F1, F3, F5, F6, step 1.2, algebra]

3.1 Steps 1.1, 1.2 and 2.1 show that $\rho=L(P_\Phi)$ is non-negative and has trace one, hence is a density operator by [F2]. In an orthonormal basis beginning with $\Phi_d$, $F_e(\mathcal E)=\langle\rho\Phi_d,\Phi_d\rangle$ is its first diagonal entry. All diagonal entries are non-negative and sum to one, so this is a well-defined real number in $[0,1]$. [F2, F3, step 1.1, step 1.2, step 2.1, algebra]

4.1 For the comparison example take $d=2$ and define $\mathcal R(X)=\operatorname{tr}(X)|0\rangle\langle0|$ on every operator $X$. This map is complex-linear and trace-preserving since $\operatorname{tr}(|0\rangle\langle0|)=1$. For any $r\ge1$, write $X\in\mathcal L(\mathbb C^2\otimes\mathbb C^r)$ uniquely as $\sum_{a,b=0}^1 E_{ab}\otimes X_{ab}$. On elementary operator tensors the block rule [F6] acts as $\mathcal R^{(r)}(E_{ab}\otimes B)=\delta_{ab}E_{00}\otimes B$; [F5] extends this to $\mathcal R^{(r)}(X)=E_{00}\otimes(X_{00}+X_{11})$. If $X$ is non-negative, each compression $X_{aa}$ is self-adjoint and satisfies $\langle X_{aa}y,y\rangle=\langle X(|a\rangle\otimes y),|a\rangle\otimes y\rangle\ge0$. The displayed output is self-adjoint and, on $z=|0\rangle\otimes u+|1\rangle\otimes v$, its quadratic form is $\langle(X_{00}+X_{11})u,u\rangle\ge0$. Thus every amplification is positive, proving complete positivity by [F6]; [F1] then makes $\mathcal R$ a channel. Direct expansion yields $({\rm id}\otimes\mathcal R)(P_{\Phi_2})=(I_2/2)\otimes E_{00}$ and $F_e(\mathcal R)=1/4$. For a unit vector $\psi=a|0\rangle+b|1\rangle$, its pure-state overlap is $|a|^2$, equal to $1$ at $|0\rangle$ and $0$ at $|1\rangle$, so $0$ is a lower bound and every lower bound is at most the attained value $0$. By [F7], its infimum is therefore $0$. This verifies that these functionals need not equal entanglement fidelity. [F1, F3, F5, F6, F7, step 1.1, step 1.2, algebra] ∎
