---
id: lem-nrqm-oscillator-diagonal-adjoint-and-graph-core-lemma
aliases: [nrqm-oscillator-diagonal-adjoint-and-graph-core-lemma]
kind: lemma
domain: mathematics
title: "Diagonal adjoint and graph-core lemma"
status: published
origin: pipeline
dependency_level: 0
deps: [def-unbounded-linear-operator-domain-and-graph, def-densely-defined-closed-and-closable-operator, def-adjoint-of-a-densely-defined-unbounded-operator, def-symmetric-self-adjoint-and-essentially-self-adjoint, lem-unbounded-adjoint-is-well-defined-and-closed, thm-closable-iff-adjoint-domain-is-dense, def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis, thm-parseval-equivalences-for-a-complete-orthonormal-family, thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces, def-hilbert-space, def-countable-choice]
dependency_roles:
  def-unbounded-linear-operator-domain-and-graph: mathematical-premise
  def-densely-defined-closed-and-closable-operator: mathematical-premise
  def-adjoint-of-a-densely-defined-unbounded-operator: mathematical-premise
  def-symmetric-self-adjoint-and-essentially-self-adjoint: mathematical-premise
  lem-unbounded-adjoint-is-well-defined-and-closed: mathematical-premise
  thm-closable-iff-adjoint-domain-is-dense: mathematical-premise
  def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis: mathematical-premise
  thm-parseval-equivalences-for-a-complete-orthonormal-family: mathematical-premise
  thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, §2.4 pp. 73-74 (resolvent, spectrum and the multiplication-operator example)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, §8.3 pp. 177-179 (algebraic construction of the oscillator eigenbasis)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let $H$ be a complex Hilbert space ([[def-hilbert-space]]) with inner product linear in the first argument, let $(e_n)_{n\in\mathbb N}$, where $\mathbb N=\{0,1,2,\dots\}$, be a complete orthonormal family of $H$ ([[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]]), and let $(\lambda_n)_{n\in\mathbb N}\subseteq\mathbb R$. Put

$$D_0:=\Bigl\{\sum_{n\in F}c_ne_n:\ F\subseteq\mathbb N\ \text{finite},\ c_n\in\mathbb C\Bigr\},\qquad S\Bigl(\sum_{n\in F}c_ne_n\Bigr):=\sum_{n\in F}\lambda_nc_ne_n,$$

and

$$D(A):=\Bigl\{x\in H:\sum_{n\in\mathbb N}\lambda_n^2\,|\langle x,e_n\rangle|^2<\infty\Bigr\},\qquad Ax:=\sum_{n\in\mathbb N}\lambda_n\langle x,e_n\rangle\,e_n .$$

Then:

(a) $S$ is a well-defined, densely defined linear operator with domain $D_0$ ([[def-unbounded-linear-operator-domain-and-graph]]), and it is symmetric ([[def-symmetric-self-adjoint-and-essentially-self-adjoint]]);

(b) the series defining $Ax$ converges in $H$ for every $x\in D(A)$, with $\|Ax\|^2=\sum_n\lambda_n^2|\langle x,e_n\rangle|^2$, so $A$ is a linear operator with domain $D(A)$ and $S\subseteq A$;

(c) $S^*=A$ ([[def-adjoint-of-a-densely-defined-unbounded-operator]]), hence $A$ is closed and $A^*=A$: $A$ is self-adjoint and $\overline S=A$, so $S$ is essentially self-adjoint and $A$ is its unique self-adjoint extension;

(d) $D_0$ is a core for $A$ ([[def-densely-defined-closed-and-closable-operator]]): the finite truncations $x_N:=\sum_{n=0}^N\langle x,e_n\rangle e_n\in D_0$ of $x\in D(A)$ satisfy $x_N\to x$ and $Ax_N\to Ax$ in $H$ as $N\to\infty$;

(e) $\langle Ax,x\rangle=\sum_n\lambda_n|\langle x,e_n\rangle|^2$ for $x\in D(A)$, so $\langle Ax,x\rangle$ is real and $\langle Ax,x\rangle\ge c\|x\|^2$ whenever $\lambda_n\ge c$ for all $n$; and $Ae_n=\lambda_ne_n$ for every $n$, so each $\lambda_n$ is an eigenvalue of $A$ with eigenvector $e_n$.

No assertion is made about a differential or multiplication realisation of $A$: the lemma concerns only a specified complete orthonormal family and real eigenvalue sequence.

## Facts & Assumptions

**Given:** a complex Hilbert space $H$; a complete orthonormal family $(e_n)_{n\in\mathbb N}$; real numbers $\lambda_n$; the linear span $D_0$; the operators $S$ and $A$ displayed above.

[F1] $\langle e_i,e_j\rangle=\delta_{ij}$; every finite subfamily of $(e_n)$ is linearly independent, so coefficients in a finite expansion in $D_0$ are unique; and for every $x\in H$ the finite-subset net of partial sums $\sum_{n\in F}\langle x,e_n\rangle e_n$ converges to $x$ in $H$, with $\sum_n|\langle x,e_n\rangle|^2=\|x\|^2$ ([[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]], [[thm-parseval-equivalences-for-a-complete-orthonormal-family]], clauses 3 and 4).

[F2] For a densely defined $T$, a vector $y\in H$ lies in $D(T^*)$ exactly when $x\mapsto\langle Tx,y\rangle$ is bounded on $(D(T),\|\cdot\|)$; then $T^*y$ is the unique $w\in H$ with $\langle Tx,y\rangle=\langle x,w\rangle$ for all $x\in D(T)$. The adjoint $T^*$ is closed, and $T\subseteq T^*$ holds exactly when $\langle Tx,y\rangle=\langle x,Ty\rangle$ for all $x,y\in D(T)$; a symmetric operator is closable with symmetric closure, and a self-adjoint operator has no proper symmetric extension and is closed ([[def-adjoint-of-a-densely-defined-unbounded-operator]], [[def-symmetric-self-adjoint-and-essentially-self-adjoint]], [[lem-unbounded-adjoint-is-well-defined-and-closed]]).

[F3] $\overline T=T^{**}$ and $T^*=\overline T^{\,*}$ for a densely defined closable $T$ ([[thm-closable-iff-adjoint-domain-is-dense]]).

[F4] $|\langle x,y\rangle|\le\|x\|\,\|y\|$ and $\bigl|\sum_{n\in F}a_n\overline{b_n}\bigr|\le\bigl(\sum_{n\in F}|a_n|^2\bigr)^{1/2}\bigl(\sum_{n\in F}|b_n|^2\bigr)^{1/2}$ for finite $F$ ([[thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]]).

## Proof

1.1 [Well-definedness and density] $D_0$ is the linear span of the family and is a linear subspace; by [F1] the coefficients in a finite expansion are unique, so $S$ is well defined, and it is linear and maps $D_0$ into $H$. By [F1] the finite partial sums of the expansion of any $x\in H$ converge to $x$, so the span $D_0$ is dense in $H$. [given, F1]

1.2 [Symmetry and the series for $A$] Let $x=\sum_{n\in F}c_ne_n$ and $y=\sum_{m\in G}d_me_m$ lie in $D_0$, with $c_n=\langle x,e_n\rangle$ and $d_m=\langle y,e_m\rangle$ by [F1]. Then $\langle Sx,y\rangle=\sum_{n\in F}\lambda_nc_n\overline{d_n}=\sum_{n\in F}c_n\overline{\lambda_nd_n}=\langle x,Sy\rangle$ because $\lambda_n$ is real: $S$ is symmetric. For $x\in D(A)$ the sequence $(\lambda_n\langle x,e_n\rangle)_{n}$ is square summable with $\sum_n\lambda_n^2|\langle x,e_n\rangle|^2<\infty$, so its finite partial sums are Cauchy: $\bigl\|\sum_{m\le M<N}\lambda_m\langle x,e_m\rangle e_m\bigr\|^2=\sum_{M<m\le N}\lambda_m^2|\langle x,e_m\rangle|^2\to0$ by [F1]; by completeness of $H$ the series $\sum_n\lambda_n\langle x,e_n\rangle e_n$ converges, its sum $Ax$ satisfies $\|Ax\|^2=\sum_n\lambda_n^2|\langle x,e_n\rangle|^2$ (the finite-subset net of squared norms has the same supremum), and $A$ is linear because coefficient extraction is linear. If moreover $x\in D_0$, then $\langle x,e_n\rangle=0$ for all but finitely many $n$ and $Ax=Sx$; hence $S\subseteq A$. [given, F1, F4, algebra]

1.3 [$S^*=A$] Let $y\in D(S^*)$ and $w:=S^*y$. For each $n$, $\lambda_n\overline{\langle y,e_n\rangle}=\langle Se_n,y\rangle=\langle e_n,w\rangle=\overline{\langle w,e_n\rangle}$, so $\lambda_n\langle y,e_n\rangle=\langle w,e_n\rangle$. By [F1] applied to $w$, $\sum_n\lambda_n^2|\langle y,e_n\rangle|^2=\sum_n|\langle w,e_n\rangle|^2=\|w\|^2<\infty$, so $y\in D(A)$; and $\sum_n\lambda_n\langle y,e_n\rangle e_n=\sum_n\langle w,e_n\rangle e_n=w$ by [F1], so $S^*y=Ay$. Hence $S^*\subseteq A$. Conversely let $y\in D(A)$ and $x=\sum_{n\in F}c_ne_n\in D_0$; then $\langle Sx,y\rangle=\sum_{n\in F}\lambda_nc_n\overline{\langle y,e_n\rangle}=\langle x,Ay\rangle$, so $x\mapsto\langle Sx,y\rangle$ is the restriction to the dense subspace $D_0$ of the bounded functional $\langle\,\cdot\,,Ay\rangle$ and is therefore bounded on $(D_0,\|\cdot\|)$; by [F2] $y\in D(S^*)$ and $S^*y=Ay$. Thus $S^*=A$. [given, F1, F2, F4, algebra]

2.1 [$A$ is self-adjoint] Let $z\in D(A^*)$ and $v:=A^*z$. For $y\in D(A)$ the pairing $\langle Ay,z\rangle=\sum_n\lambda_n\langle y,e_n\rangle\overline{\langle z,e_n\rangle}$ is absolutely convergent by [F4] and $\|Ay\|\,\|z\|$. Testing $y=e_m$ gives $\lambda_m\langle e_m,z\rangle=\langle Ae_m,z\rangle=\langle e_m,v\rangle$, that is $\lambda_m\langle z,e_m\rangle=\langle v,e_m\rangle$. By [F1], $\sum_m\lambda_m^2|\langle z,e_m\rangle|^2=\sum_m|\langle v,e_m\rangle|^2=\|v\|^2<\infty$, so $z\in D(A)$; and then $Az=\sum_m\lambda_m\langle z,e_m\rangle e_m=\sum_m\langle v,e_m\rangle e_m=v=A^*z$ by [F1]. Hence $D(A^*)\subseteq D(A)$; the reverse inclusion was proved in step 1.3 as $A\subseteq S^*$ with $S^*=A$, and directly: for $z\in D(A)$ and $y\in D(A)$, $\langle Ay,z\rangle=\sum_n\lambda_n\langle y,e_n\rangle\overline{\langle z,e_n\rangle}=\langle y,Az\rangle$ by absolute convergence and realness of $\lambda_n$, so $z\in D(A^*)$ with $A^*z=Az$. Therefore $A^*=A$. [step 1.3, F1, F2, F4, algebra]

2.2 [Graph core] Let $x\in D(A)$ and $x_N:=\sum_{n=0}^N\langle x,e_n\rangle e_n\in D_0\subseteq D(A)$. By [F1], $\|x-x_N\|^2=\sum_{n>N}|\langle x,e_n\rangle|^2\to0$, and by step 1.2, $\|Ax-Ax_N\|^2=\sum_{n>N}\lambda_n^2|\langle x,e_n\rangle|^2\to0$ because the series converges. Thus $(x_N,Ax_N)\to(x,Ax)$ in $H\oplus H$; since $x\in D(A)$ was arbitrary, $D_0$ is dense in $(D(A),\|\cdot\|_A)$, that is, $D_0$ is a core for $A$. [step 1.2, F1]

3.1 [Closure, essential self-adjointness and uniqueness] Since $S$ is symmetric, [F2] makes $S$ closable with symmetric closure $\overline S$, and [F3] gives $\overline S=S^{**}$. Since $A=S^*$ is the adjoint of a densely defined operator, $A$ is closed by [F2]; as $S\subseteq A$, the least closed extension satisfies $\overline S\subseteq A$. Conversely, for $x\in D(A)$ step 1.2 supplies $x_N\in D_0$ with $x_N\to x$ and $Sx_N=Ax_N\to Ax$, so $(x,Ax)\in\overline{\Gamma(S)}=\Gamma(\overline S)$ and $A\subseteq\overline S$. Hence $\overline S=A$, and $S$ is essentially self-adjoint because $\overline S=A$ is self-adjoint. If $T$ is any self-adjoint extension of $S$, then $T$ is closed and contains $\overline S=A$; since $A$ is self-adjoint and $A\subseteq T$ with $T$ symmetric, [F2] forces $T=A$. So $A$ is the unique self-adjoint extension of $S$. [step 1.2, step 1.3, step 2.1, F2, F3]

4.1 [Positivity and eigenvalues] For $x\in D(A)$ the series $\sum_n\lambda_n|\langle x,e_n\rangle|^2$ is absolutely convergent by [F4] and step 1.2: $\sum_n|\lambda_n||\langle x,e_n\rangle|^2\le(\sum_n\lambda_n^2|\langle x,e_n\rangle|^2)^{1/2}(\sum_n|\langle x,e_n\rangle|^2)^{1/2}<\infty$, and $\langle Ax,x\rangle=\sum_n\lambda_n|\langle x,e_n\rangle|^2$ by continuity of the inner product in the first argument applied to the convergent series of step 1.2. Since the $\lambda_n$ are real the value is real, and $\lambda_n\ge c$ for all $n$ gives $\langle Ax,x\rangle\ge c\|x\|^2$ by [F1]. Finally $Ae_n=\lambda_ne_n$ directly from the definition of $A$ and [F1], so each $\lambda_n$ is an eigenvalue of $A$ with eigenvector $e_n\ne0$. [step 1.2, F1, F4] ∎
