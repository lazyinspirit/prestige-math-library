---
id: thm-qft-self-adjoint-regulated-interaction
kind: theorem
domain: mathematics
title: Self-adjoint unbounded polynomial interaction at fixed regulator
status: draft
origin: pipeline
dependency_level: 4
deps: [lem-qft-polynomial-positive-compact-resolvent, thm-spectral-theorem-for-compact-self-adjoint-operators, thm-hilbert-space-fourier-expansion, cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases, thm-cauchy-schwarz-in-an-inner-product-space, def-unbounded-linear-operator-domain-and-graph, def-adjoint-of-a-densely-defined-unbounded-operator, def-symmetric-self-adjoint-and-essentially-self-adjoint, def-countable-choice]
dependency_roles:
  lem-qft-polynomial-positive-compact-resolvent: mathematical-premise
  thm-spectral-theorem-for-compact-self-adjoint-operators: mathematical-premise
  thm-hilbert-space-fourier-expansion: mathematical-premise
  cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases: mathematical-premise
  thm-cauchy-schwarz-in-an-inner-product-space: mathematical-premise
  def-unbounded-linear-operator-domain-and-graph: mathematical-premise
  def-adjoint-of-a-densely-defined-unbounded-operator: mathematical-premise
  def-symmetric-self-adjoint-and-essentially-self-adjoint: mathematical-premise
  def-countable-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Gerald Teschl, Mathematical Methods in Quantum Mechanics, 2nd ed., §2.3, pp.76–83"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe2.pdf"
    - title: "Richard S. Laugesen, Spectral Theory of Partial Differential Equations — Lecture Notes, Chapter 4, pp.27–32"
      url: "https://arxiv.org/pdf/1203.2344v1"
---

## Statement

Assume Countable Choice and the data of
[[lem-qft-polynomial-positive-compact-resolvent]]. Its variational operator $R$
is compact, self-adjoint, positive, and injective on the infinite-dimensional
complex Hilbert space $H_N$. Let $(\mu_n)_{n\ge1}$ be its positive eigenvalues
in nonincreasing order, with multiplicity, and choose corresponding
orthonormal eigenvectors $(\psi_n)_{n\ge1}$. Put
$E_n:=\mu_n^{-1}-1$ and define
$$D(S):=\left\{u=\sum_{n\ge1}c_n\psi_n\in H_N:\sum_{n\ge1}E_n^2|c_n|^2<\infty\right\},\qquad Su:=\sum_{n\ge1}E_nc_n\psi_n.$$
The series for $u$ converges in $H_N$ by the Hilbert-space expansion theorem.
Then $S$ is self-adjoint and satisfies $\langle Su,u\rangle\ge\|u\|_2^2$
for every $u\in D(S)$; also $(S+I)^{-1}=R$ is compact. For every
$u\in C_c^\infty(\mathbb R^N;\mathbb C)$,
$$Su=-\sum_{j=1}^Na_j\partial_j^2u+Wu.$$
Consequently $h:=S-(C_0+1)I$, on the same domain, is a self-adjoint realization
of the differential expression in
[[def-qft-regulated-polynomial-hamiltonian]] and satisfies
$\langle hu,u\rangle\ge-C_0\|u\|_2^2$ for every $u\in D(h)$.
It has compact resolvent, meaning that for some $z\in\mathbb C$ the map
$h-zI:D(h)\to H_N$ is bijective with bounded inverse on $H_N$, and that
inverse is compact; here $z=-(C_0+2)$ and $(h+(C_0+2)I)^{-1}=R$. Put
$\lambda_n:=E_n-C_0-1$, the eigenvalues of $h$; equivalently,
$$D(h)=\left\{u=\sum_nc_n\psi_n:\sum_n\lambda_n^2|c_n|^2<\infty\right\}.$$
For every $u\in Q$,
$$a(u,u)=\sum_{n\ge1}(E_n+1)|\langle u,\psi_n\rangle|^2,\qquad
q_h(u):=a(u,u)-(C_0+2)\|u\|_2^2
=\sum_{n\ge1}\lambda_n|\langle u,\psi_n\rangle|^2.$$
The lowest eigenvalue is attained and has finite multiplicity. This selects a
form realization; it does not assert that the differential expression on
$C_c^\infty$ is essentially self-adjoint or that it has no other self-adjoint
extensions.

## Facts & Assumptions

**Given:** Countable Choice, $H_N$, the compact positive injective operator $R$,
and its variational form.

[A1] [[def-countable-choice]]: every countable family of nonempty sets has a choice function; this is used to select orthonormal bases in countably many finite-dimensional eigenspaces.

[F1] [[lem-qft-polynomial-positive-compact-resolvent]]: $R$ is bounded, compact, self-adjoint, positive, injective, and $\|R\|\le\tfrac12$; for each $f\in H_N$, $Rf\in Q$ is the unique vector satisfying $a(v,Rf)=\langle v,f\rangle$ for all $v\in Q$.

[F2] [[thm-spectral-theorem-for-compact-self-adjoint-operators]]: the nonzero eigenspaces of a compact self-adjoint operator are finite-dimensional, their eigenvalues are real with only possible accumulation point $0$, and their closed span is $(\ker R)^\perp$.

[F3] [[cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]]: each finite-dimensional eigenspace has an orthonormal basis.

[F4] [[thm-hilbert-space-fourier-expansion]]: a complete orthonormal family in a Hilbert space gives norm-convergent finite-subset expansions and Parseval's identity.

[F5] [[def-unbounded-linear-operator-domain-and-graph]], [[def-adjoint-of-a-densely-defined-unbounded-operator]], and [[def-symmetric-self-adjoint-and-essentially-self-adjoint]]: an unbounded operator has a specified linear domain; its adjoint domain consists of vectors for which the defining pairing is represented by a Hilbert-space vector; a densely defined operator is self-adjoint exactly when its domain equals its adjoint domain and the actions agree.

[F6] [[lem-qft-coercive-polynomial-form-domain]] and [[thm-hilbert-space-fourier-expansion]]: $(Q,a)$ is a Hilbert space, $Q$ injects into $H_N$, and a complete orthonormal family in either Hilbert space has Parseval expansion in its Hilbert norm.

[F7] [[thm-cauchy-schwarz-in-an-inner-product-space]]: the Hilbert-space and form pairings satisfy Cauchy--Schwarz.

## Proof

**Proof technique:** direct.

1.1 By [F1], $R$ is compact and self-adjoint. Applying [F2] and using $\ker R=\{0\}$ shows that the closed span of its nonzero eigenspaces is all of $H_N$. If $R\psi=\mu\psi$ with $\psi\ne0$, then $\mu\|\psi\|^2=\langle R\psi,\psi\rangle\ge0$ by positivity, while injectivity rules out $\mu=0$; hence every nonzero eigenvalue is positive. [F1, F2, algebra]

1.2 Each eigenspace is finite-dimensional by [F2], and so has an orthonormal basis by [F3]. The set of nonzero eigenvalues is at most countable, and [A1] selects these finite bases; their union is an orthonormal family whose closed span is $H_N$ by step 1.1. The space is infinite-dimensional: the indicators of the pairwise disjoint unit cubes $[r,r+1)\times[0,1)^{N-1}$, $r\in\mathbb N$, are nonzero mutually orthogonal $L^2$ vectors. Thus the family can be indexed by $n\ge1$. The bound $\|R\|\le\tfrac12$ gives $0<\mu_n\le\tfrac12$ and $E_n\ge1$. The compact spectral theorem says only finitely many eigenvalues satisfy $\mu\ge\varepsilon$ for each $\varepsilon>0$; recursively taking a largest remaining eigenvalue (which exists because above half its positive supremum there are only finitely many) orders them nonincreasingly with multiplicity and gives $\mu_n\to0$, hence $E_n\to\infty$. [A1, F1, F2, F3, step 1.1, algebra]

1.3 The family $(\psi_n)$ is complete by step 1.1, so [F4] gives $u=\sum_n\langle u,\psi_n\rangle\psi_n$ in norm for every $u\in H_N$ and Parseval. In particular $D(S)$ is dense because it contains all finite linear combinations of the $\psi_n$. Since each $E_n$ is real, the diagonal formula for $S$ gives $\langle Su,v\rangle=\langle u,Sv\rangle$ for finite sums, and then for all $u,v\in D(S)$ by [F7] and convergence of the coefficient series; thus $S$ is symmetric. For $u\in D(S)$ with coefficients $c_n$, Cauchy--Schwarz [F7] makes $\sum_nE_n|c_n|^2$ absolutely convergent, and step 1.2 gives $E_n\ge1$, so $\langle Su,u\rangle=\sum_nE_n|c_n|^2\ge\sum_n|c_n|^2=\|u\|_2^2$. [F4, F7, step 1.2, algebra]

2.1 To compute the adjoint domain, let $v=\sum_nd_n\psi_n\in D(S^*)$ and write $S^*v=z=\sum_nz_n\psi_n$. Testing the adjoint identity on each $\psi_n$ gives $z_n=E_nd_n$. Because $z\in H_N$, Parseval gives $\sum_nE_n^2|d_n|^2<\infty$, so $v\in D(S)$. Conversely, if this sum is finite, then $z:=\sum_nE_nd_n\psi_n\in H_N$ and the coefficient identity $\langle Su,v\rangle=\langle u,z\rangle$ holds first for finite sums and then for every $u\in D(S)$ by [F7]; hence $v\in D(S^*)$ and $S^*v=Sv$. Therefore $D(S^*)=D(S)$ and $S^*=S$ as operators; by the unbounded self-adjointness definition in [F5], $S$ is self-adjoint. [F4, F5, F7, step 1.3, algebra]

2.2 On each $\psi_n$, $(S+I)^{-1}\psi_n=(E_n+1)^{-1}\psi_n=\mu_n\psi_n=R\psi_n$. Both sides are bounded operators on $H_N$ and agree on the span of the complete family, so they agree on all of $H_N$. Thus $(S+I)^{-1}=R$, which is compact by [F1]. [F1, F2, step 1.2, step 1.3]

2.3 The variational identity for $R$, applied to $f=\psi_n$, gives $a(v,R\psi_n)=\langle v,\psi_n\rangle$ for every $v\in Q$. Since $R\psi_n=\mu_n\psi_n$ and $\mu_n>0$, each $\psi_n$ lies in $Q$ and
$$a(v,\psi_n)=\mu_n^{-1}\langle v,\psi_n\rangle.$$
Thus $\xi_n:=\sqrt{\mu_n}\,\psi_n$ is an orthonormal family in $Q$. If $v\in Q$ is orthogonal in $a$ to every $\xi_n$, the displayed identity makes all $H_N$ coefficients $\langle v,\psi_n\rangle$ zero. The $H_N$ completeness of $(\psi_n)$ and injectivity of $Q\hookrightarrow H_N$ force $v=0$ in $Q$. Hence $(\xi_n)$ is complete in $Q$, and Parseval in $(Q,a)$ gives
$$a(v,v)=\sum_n\mu_n^{-1}|\langle v,\psi_n\rangle|^2=\sum_n(E_n+1)|\langle v,\psi_n\rangle|^2.$$
[F1, F4, F6, step 1.1, step 1.2, step 2.2, algebra]

2.4 Parseval in $H_N$ gives $\|v\|_2^2=\sum_n|\langle v,\psi_n\rangle|^2$. Subtracting $(C_0+2)$ times this identity from step 2.3 yields the claimed formula for $q_h(v)$, because $E_n+1-(C_0+2)=E_n-C_0-1=\lambda_n$. [step 2.3, F4, algebra]

2.5 If $u\in D(h)=D(S)$ and $c_n=\langle u,\psi_n\rangle$, then $\sum_nE_n^2|c_n|^2<\infty$ by the definition of $D(S)$. Since $E_n\ge1$, $E_n+1\le2E_n^2$, so $\sum_n(E_n+1)|c_n|^2<\infty$. Step 2.3 therefore gives $u\in Q$. Thus every eigenvector, and indeed every operator-domain vector, belongs to the form domain. [F2, step 2.3, algebra]

2.6 The domains defined by the squared coefficient sums for $E_n$ and $\lambda_n=E_n-(C_0+1)$ coincide. Indeed
$$\lambda_n^2\le2E_n^2+2(C_0+1)^2,\qquad E_n^2\le2\lambda_n^2+2(C_0+1)^2.$$
Multiplying by $|c_n|^2$ and summing preserves finiteness in both directions because $\sum_n|c_n|^2=\|u\|_2^2<\infty$ by [F4]. This proves the displayed coefficient-domain description of $D(h)$. [F4, algebra]

3.1 Let $u\in C_c^\infty$ and set $f:=(-\sum_ja_j\partial_j^2+W+1)u\in H_N$. Integration by parts gives $a(u,v)=\langle f,v\rangle$ for $v\in C_c^\infty$; both sides are continuous in $v$ for the $Q$ norm by [F7], and $C_c^\infty$ is dense in $Q$, so the identity holds for all $v\in Q$. It is the defining variational identity for $Rf$, and uniqueness in [F1] gives $Rf=u$. Hence $u\in\operatorname{ran}R=D(S)$ and $(S+I)u=f$, so $Su=-\sum_ja_j\partial_j^2u+Wu$. [F1, F7, step 2.2, algebra]

4.1 Subtracting the real scalar $(C_0+1)I$ preserves self-adjointness on the same domain, and $E_n\ge1$ gives eigenvalues $\lambda_n=E_n-C_0-1\ge-C_0$. For $u\in D(h)$, the diagonal expansion and Cauchy--Schwarz [F7] make $\langle hu,u\rangle=\sum_n\lambda_n|\langle u,\psi_n\rangle|^2$ absolutely convergent; Parseval then gives $\langle hu,u\rangle\ge-C_0\|u\|_2^2$. The lowest eigenvalue corresponds to the largest eigenvalue $\mu_1$ of $R$; its eigenspace is nonzero and finite-dimensional by [F2]. Since $W=V+C_0+1$, step 3.1 shows that $h=S-(C_0+1)I$ extends the specified polynomial differential expression. Finally $h+(C_0+2)I=S+I$, whose inverse is the compact operator $R$ by step 2.2. These statements establish the declared realization and all listed scope limits. [F1, F2, F7, step 1.2, step 2.2, step 3.1] ∎
