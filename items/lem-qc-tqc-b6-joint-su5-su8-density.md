---
id: lem-qc-tqc-b6-joint-su5-su8-density
kind: lemma
title: Joint SU(5)×SU(8) closure from B6 path blocks
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps:
  - lem-qc-tqc-fibonacci-b6-path-projectors-and-artin
  - thm-qc-tqc-b6-su5-density
  - thm-qc-tqc-b6-su8-density
  - lem-qc-irrational-rotation-dense-on-circle
  - thm-complex-spectral-theorem-for-normal-endomorphisms
  - thm-cartans-closed-subgroup-theorem
  - prop-the-lie-algebra-of-a-lie-subgroup-is-a-lie-subalgebra
  - def-countable-choice
  - ex-unitary-and-special-unitary-lie-groups
  - lem-qc-tqc-special-unitary-connected
  - thm-smooth-inverse-function-theorem-on-manifolds
dependency_level: 9
axiom_use: Assumes exactly ACω for the closed-subgroup and Lie-algebra suppliers; no full Axiom of Choice is used.
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Michael H. Freedman, Michael J. Larsen, and Zhenghan Wang, A Modular Functor Which Is Universal for Quantum Computation"
      url: https://arxiv.org/pdf/quant-ph/0001108
      locator: §4, Theorem 4.1 and complete proof, printed pp. 17–21; cross-check only
    - title: "Chetan Nayak, Steven H. Simon, Ady Stern, Michael Freedman, and Sankar Das Sarma, Non-Abelian Anyons and Topological Quantum Computation"
      url: https://arxiv.org/pdf/0707.1889
      locator: §IV.B.c, PDF pp. 53–57
---

## Statement

Assume $\mathrm{AC}_\omega$. For the normalized simultaneous six-$\tau$
Fibonacci B6 representation on
$V(\tau^6\to1)\oplus V(\tau^6\to\tau)\cong\mathbb C^5\oplus\mathbb C^8$,
the closure in $U(5)\times U(8)$ contains $SU(5)\times SU(8)$.

## Facts & Assumptions

**Given:** The simultaneous normalized matrices $B_i^{(5)}\oplus B_i^{(8)}$, their common braid word $C$, and $\mathrm{AC}_\omega$. Let $G$ be the closure of the simultaneous braid image and write $\mathfrak g=\operatorname{Lie}(G)$, which is defined by [F2].

[F1] The separate braid-image closures contain $SU(5)$ and $SU(8)$, respectively. [[thm-qc-tqc-b6-su5-density]] [[thm-qc-tqc-b6-su8-density]]

[F2] Closed subgroups are Lie subgroups under $\mathrm{AC}_\omega$, and their Lie algebras are bracket closed. [[thm-cartans-closed-subgroup-theorem]] [[prop-the-lie-algebra-of-a-lie-subgroup-is-a-lie-subalgebra]]

[F3] $\mathfrak{su}(n)$ consists of the trace-zero skew-Hermitian matrices. A real basis is given by $i(E_{jj}-E_{nn})$ for $j<n$ and, for each $j<k$, $E_{jk}-E_{kj}$ and $i(E_{jk}+E_{kj})$. Thus its real dimension is $(n-1)+2\binom n2=n^2-1$, giving dimensions $24$ and $63$ for $n=5,8$. [[ex-unitary-and-special-unitary-lie-groups]]

[F4] Both $SU(5)$ and $SU(8)$ are connected. [[lem-qc-tqc-special-unitary-connected]]

[F5] Integer powers of a circle rotation with irrational angle are dense in the circle. [[lem-qc-irrational-rotation-dense-on-circle]]

[F6] A normal complex endomorphism has an orthonormal eigenbasis. [[thm-complex-spectral-theorem-for-normal-endomorphisms]]

[F7] A smooth map between manifolds whose differential is an isomorphism at a point is a diffeomorphism between neighborhoods of that point. [[thm-smooth-inverse-function-theorem-on-manifolds]]

[A1] Assume $\mathrm{AC}_\omega$. [[def-countable-choice]]

[A2] Assume the fixed Fibonacci path convention and $F/R$ data stated in [[lem-qc-tqc-fibonacci-b6-path-projectors-and-artin]].

## Proof

1.1 Group the paths in [A2] by the charge of their first three strands. The total-$1$ first-three sector contributes identity blocks of dimensions $1$ and $2$ in the five- and eight-dimensional spaces. The total-$\tau$ sector gives respectively two and three copies of the same two-dimensional block. On each copy, $C=B_1B_2^{-1}$ is $C_0=D F D^{-1}F$, with $D=\operatorname{diag}(1,r)$ and $F$ from [A2]. Direct multiplication gives $\det C_0=1$ and $\operatorname{tr}C_0=\phi^{-2}$. By unitarity and [F6], choose eigenbases in which $C_5=\operatorname{diag}(1,e^{i\theta}I_2,e^{-i\theta}I_2)$ and $C_8=\operatorname{diag}(I_2,e^{i\theta}I_3,e^{-i\theta}I_3)$, where $0<\theta<\pi$ and $2\cos\theta=\phi^{-2}$. [A2, F6, algebra]

1.2 For $n\ge2$, the complex Lie algebra $\mathfrak{sl}_n(\mathbb C)$ is simple. Let $I$ be a nonzero ideal. If some $X\in I$ has an off-diagonal entry $X_{ij}\ne0$, choose a traceless diagonal matrix $D$ whose ordered differences $\lambda_p-\lambda_q$ ($p\ne q$) are nonzero and pairwise distinct. Such a $D$ exists because each forbidden equality is a proper linear hyperplane in the trace-zero diagonal subspace, and finitely many proper hyperplanes do not cover a vector space over the infinite field $\mathbb C$. The map $\operatorname{ad}_D$ has eigenvectors $E_{pq}$ with these eigenvalues and is zero on diagonal matrices. Lagrange interpolation therefore supplies a polynomial in $\operatorname{ad}_D$ that sends $X$ to $X_{ij}E_{ij}$; since $I$ is an ideal, $E_{ij}\in I$. If instead a nonzero $X\in I$ is diagonal, it is nonscalar because it is traceless. Choose $i\ne j$ with $X_{ii}\ne X_{jj}$; then $[E_{ij},X]=(X_{jj}-X_{ii})E_{ij}\in I$, again giving a matrix unit. From $E_{ij}\in I$, bracketing with $E_{ji}$ gives $E_{ii}-E_{jj}\in I$, and bracketing that diagonal matrix with $E_{ji}$ gives $E_{ji}\in I$. For each $k\notin\{i,j\}$, $[E_{ki},E_{ij}]=E_{kj}$ and $[E_{jk},E_{ij}]=-E_{ik}$, so these units lie in $I$. The additional unit $E_{jk}$ follows explicitly from $[E_{ji},E_{ik}]=E_{ji}E_{ik}-E_{ik}E_{ji}=E_{jk}-0=E_{jk}$, since $i,j,k$ are distinct. We now have $E_{kj}$ and $E_{jl}$ for every $k,l\ne j$; for $k\ne l$, $[E_{kj},E_{jl}]=E_{kl}$. Thus every off-diagonal matrix unit lies in $I$, and their brackets give all trace-zero diagonal matrices. Hence $I$ is the whole algebra. If $n=2$, there is no $k\notin\{i,j\}$; the already obtained $E_{ij},E_{ji}$ and $E_{ii}-E_{jj}$ span $\mathfrak{sl}_2$, so this case is complete as well. The complexification of $\mathfrak{su}(n)$ is $\mathfrak{sl}_n(\mathbb C)$: every traceless complex matrix is uniquely a sum $A+iB$ of traceless skew-Hermitian matrices. A nonzero real ideal of $\mathfrak{su}(n)$ would complexify to a nonzero ideal of $\mathfrak{sl}_n(\mathbb C)$, hence to all of it; equality of dimensions then makes the real ideal all of $\mathfrak{su}(n)$. Therefore $\mathfrak{su}(5)$ and $\mathfrak{su}(8)$ are simple. Their dimensions $24$ and $63$ from [F3] show they are not isomorphic. [F3, algebra]

2.1 The algebraic number $\phi^{-2}$ has minimal polynomial $x^2-3x+1$, whose other root is $\phi^2>2$. If $e^{i\theta}$ were a root of unity, every algebraic conjugate of $e^{i\theta}+e^{-i\theta}$ would be a sum of two roots of unity and have absolute value at most $2$. The conjugate $\phi^2>2$ contradicts this, so $\theta/(2\pi)$ is irrational. [given, step 1.1, algebra]

3.1 In the eigenbases of step 1.1, put $\gamma(t)=(\operatorname{diag}(1,e^{it}I_2,e^{-it}I_2),\operatorname{diag}(I_2,e^{it}I_3,e^{-it}I_3))$. The simultaneous braid word is $(C_5,C_8)=\gamma(\theta)$, so its integer powers are $\gamma(k\theta)$. By step 2.1 and [F5], their closure is the whole circle $\gamma(\mathbb R)$, which therefore lies in $G$. Differentiating at zero shows that $(X_5,X_8):=(C_5-C_5^{-1},C_8-C_8^{-1})=2\sin\theta\,\gamma'(0)$ belongs to $\mathfrak g$; both coordinates are nonzero. [F2, F5, step 1.1, step 2.1, construct, algebra]

4.1 By [A2], each generator has determinant pair $(r^3,r^5)$, and $r^{10}=1$, so the determinant image of $G$ is finite. A connected coordinate neighborhood of the identity lies in $G^0$, making $G^0$ open in $G$ and $\mathfrak g=\operatorname{Lie}(G^0)$. Connectedness forces its determinant pair to be $(1,1)$; hence $\mathfrak g\subseteq\mathfrak{su}(5)\oplus\mathfrak{su}(8)$. For $n=5,8$, let $W_n$ be the coordinate projection of $\mathfrak g$. Conjugation by simultaneous braids preserves $\mathfrak g$, so $W_n$ is invariant under conjugation by their $n$-dimensional images. As a finite-dimensional vector subspace, $W_n$ is closed; continuity and [F1] extend this invariance to $SU(n)$. For $A\in\mathfrak{su}(n)$ and $Y\in W_n$, differentiate $h(t)Yh(t)^{-1}\in W_n$ along a smooth curve in $SU(n)$ with $h(0)=I$ and $h'(0)=A$. This gives $[A,Y]\in W_n$, so $W_n$ is an ideal. It is nonzero by step 3.1, and simplicity from step 1.2 gives $W_n=\mathfrak{su}(n)$. Thus both projections are surjective. [A2, F1, F2, F3, step 1.2, step 3.1, algebra]

5.1 Define the kernel ideals $K_5=\{x\in\mathfrak{su}(5):(x,0)\in\mathfrak g\}$ and $K_8=\{y\in\mathfrak{su}(8):(0,y)\in\mathfrak g\}$. They are ideals because $\mathfrak g$ projects onto both factors and is closed under brackets. Simplicity says each kernel is either zero or the whole factor. If either is the whole factor, surjectivity of the other projection implies $\mathfrak g=\mathfrak{su}(5)\oplus\mathfrak{su}(8)$. If both are zero, each projection restricts to an isomorphism from $\mathfrak g$ to its factor, yielding an isomorphism $\mathfrak{su}(5)\cong\mathfrak{su}(8)$, contrary to their different dimensions. Thus $\mathfrak g=\mathfrak{su}(5)\oplus\mathfrak{su}(8)$. [F2, F3, step 4.1, step 1.2, algebra]

6.1 By [F2], the inclusion $G^0\hookrightarrow SU(5)\times SU(8)$ has injective differential. Step 5.1 and [F3] show that its Lie algebra has the full dimension of $SU(5)\times SU(8)$, so the differential is an isomorphism. By [F7], the inclusion is a local diffeomorphism; its image therefore contains an open neighborhood of the identity and is an open subgroup. The product is connected by [F4], hence $G^0=SU(5)\times SU(8)$. Therefore the joint closure contains $SU(5)\times SU(8)$. The only choice assumption is [A1]. [A1, F2, F3, F4, F7, step 5.1, algebra] ∎
