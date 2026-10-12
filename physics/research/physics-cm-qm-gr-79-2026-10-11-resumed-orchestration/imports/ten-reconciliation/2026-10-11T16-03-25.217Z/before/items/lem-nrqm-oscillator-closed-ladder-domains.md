---
id: lem-nrqm-oscillator-closed-ladder-domains
aliases: [nrqm-oscillator-closed-ladder-domains]
kind: lemma
domain: mathematics
title: "Closed ladder domains"
status: draft
origin: pipeline
dependency_level: 2
deps: [lem-nrqm-oscillator-diagonal-adjoint-and-graph-core-lemma, thm-nrqm-oscillator-diagonal-spectrum, thm-nrqm-oscillator-hermite-recurrence, def-adjoint-of-a-densely-defined-unbounded-operator, lem-unbounded-adjoint-is-well-defined-and-closed, def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis, thm-parseval-equivalences-for-a-complete-orthonormal-family, thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces, def-hilbert-space, def-countable-choice]
dependency_roles:
  lem-nrqm-oscillator-diagonal-adjoint-and-graph-core-lemma: mathematical-premise
  thm-nrqm-oscillator-diagonal-spectrum: mathematical-premise
  thm-nrqm-oscillator-hermite-recurrence: mathematical-premise
  def-adjoint-of-a-densely-defined-unbounded-operator: mathematical-premise
  lem-unbounded-adjoint-is-well-defined-and-closed: mathematical-premise
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
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, §8.3 pp. 177-179 (A± and their domains on the core)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "MIT 8.05 Quantum Physics II (Fall 2013), Chapter 6 'Quantum Dynamics', §1 pp. 1-9 (creation and annihilation operators)"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/79a8091ef4f18d8e3ff76a097e8db33c_MIT8_05F13_Chap_06.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let $H$ be a complex Hilbert space ([[def-hilbert-space]]) with inner product linear in the first argument, let $(e_n)_{n\in\mathbb N}$, $\mathbb N=\{0,1,2,\dots\}$, be a complete orthonormal family of $H$ ([[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]]), and for $x\in H$ write $c_n:=\langle x,e_n\rangle$, so that $x=\sum_nc_ne_n$ and $\sum_n|c_n|^2=\|x\|^2$. Define

$$D(a):=\Bigl\{x:\sum_n n|c_n|^2<\infty\Bigr\},\quad ax:=\sum_{m\ge0}\sqrt{m+1}\,c_{m+1}\,e_m ;$$
$$D(a^\dagger):=\Bigl\{x:\sum_n(n+1)|c_n|^2<\infty\Bigr\},\quad a^\dagger x:=\sum_{m\ge1}\sqrt m\,c_{m-1}\,e_m ;$$
$$D(N):=\Bigl\{x:\sum_n n^2|c_n|^2<\infty\Bigr\},\quad Nx:=\sum_n n\,c_n\,e_n .$$

Then:

(a) $a,a^\dagger,N$ are well-defined linear operators with the displayed domains; these domains contain the algebraic span $D_0=\operatorname{span}\{e_n\}$ and are dense in $H$; and $\|ax\|^2=\sum_nn|c_n|^2$, $\|a^\dagger x\|^2=\sum_n(n+1)|c_n|^2$, $\|Nx\|^2=\sum_nn^2|c_n|^2$;

(b) $a$ and $a^\dagger$ are closed, densely defined operators with $a^*=a^\dagger$ and $(a^\dagger)^*=a$;

(c) $\ker a=\mathbb Ce_0$ and $\ker a^\dagger=\{0\}$;

(d) $D(aa^\dagger)=D(a^\dagger a)=D(N)$; on $D(N)$ one has $a^\dagger a=N$ and $aa^\dagger=N+I$, hence $[a,a^\dagger]x=aa^\dagger x-a^\dagger ax=x$ for every $x\in D(N)$; and $D(N)$ is exactly the set of $x\in H$ for which both $a(a^\dagger x)$ and $a^\dagger(ax)$ are defined;

(e) $N$ is self-adjoint with $Ne_n=ne_n$ and spectrum $\sigma(N)=\mathbb N$ ([[thm-nrqm-oscillator-diagonal-spectrum]]), and for $x\in D(N)$ the partial sums $x_M:=\sum_{n\le M}c_ne_n$ satisfy $x_M\to x$ and $Nx_M\to Nx$;

(f) if $H=L^2(\mathbb R,dy)$ with the Hermite orthonormal family $e_n=g_n$ of [[thm-nrqm-oscillator-hermite-recurrence]], then the operators $a_P,a^\dagger_P:P\to P$ of that theorem are the restrictions of $a,a^\dagger$ to $P$, and $a$ and $a^\dagger$ are exactly the closures of $a_P$ and $a^\dagger_P$.

## Facts & Assumptions

**Given:** a complex Hilbert space $H$, a complete orthonormal family $(e_n)$, and the operators $a,a^\dagger,N$ displayed above.

[F1] $\langle e_i,e_j\rangle=\delta_{ij}$, $x=\sum_n\langle x,e_n\rangle e_n$ with $\sum_n|\langle x,e_n\rangle|^2=\|x\|^2$ for every $x\in H$, and a series $\sum_na_ne_n$ converges in $H$ exactly when $\sum_n|a_n|^2<\infty$, its sum then satisfying $\bigl\|\sum_na_ne_n\bigr\|^2=\sum_n|a_n|^2$ ([[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]], [[thm-parseval-equivalences-for-a-complete-orthonormal-family]]).

[F2] For a densely defined $T$: $y\in D(T^*)$ exactly when $x\mapsto\langle Tx,y\rangle$ is bounded on $(D(T),\|\cdot\|)$, and then $T^*y$ is the unique $w$ with $\langle Tx,y\rangle=\langle x,w\rangle$ for all $x\in D(T)$; $T^*$ is closed; $T$ is closed exactly when $T=(T^*)^*$ is an adjoint ([[def-adjoint-of-a-densely-defined-unbounded-operator]], [[lem-unbounded-adjoint-is-well-defined-and-closed]]).

[F3] $|\langle x,y\rangle|\le\|x\|\|y\|$ and $\bigl|\sum_{n\in F}a_n\overline{b_n}\bigr|\le\bigl(\sum_{n\in F}|a_n|^2\bigr)^{1/2}\bigl(\sum_{n\in F}|b_n|^2\bigr)^{1/2}$ for finite $F$ ([[thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]]).

[F4] The self-adjoint diagonal operator of [[lem-nrqm-oscillator-diagonal-adjoint-and-graph-core-lemma]] with $\lambda_n=n$ is precisely $N$ on $D(N)$, and its spectrum is the closure of $\{n:n\in\mathbb N\}=\mathbb N$ ([[thm-nrqm-oscillator-diagonal-spectrum]]).

[F5] In the concrete case $H=L^2(\mathbb R,dy)$ with $e_n=g_n$, the operators $a_P,a^\dagger_P$ of [[thm-nrqm-oscillator-hermite-recurrence]] act on the finite expansions by $a_Pg_n=\sqrt n\,g_{n-1}$ and $a^\dagger_Pg_n=\sqrt{n+1}\,g_{n+1}$, and $P=\operatorname{span}\{g_n\}$ ([[thm-nrqm-oscillator-hermite-recurrence]](e),(f)).

## Proof

1.1 [Well-definedness and densities] For $x\in D(a)$ the coefficients $\sqrt{m+1}c_{m+1}$ are square summable with $\sum_m(m+1)|c_{m+1}|^2=\sum_{n\ge1}n|c_n|^2<\infty$, so the series $ax=\sum_m\sqrt{m+1}c_{m+1}e_m$ converges in $H$ and $\|ax\|^2=\sum_{n\ge1}n|c_n|^2$ by [F1]; the same computation gives the formulas for $a^\dagger x$ and $Nx$. Linearity is coefficientwise. Every finite combination of the $e_n$ lies in all three domains, and $D_0$ is dense in $H$ by [F1], so the three domains are dense. [given, F1, F3, algebra]

1.2 [$a^*=a^\dagger$] First let $y\in D(a^*)$ and $w:=a^*y$. Testing the defining identity $\langle ax,y\rangle=\langle x,w\rangle$ on $x=e_m$ ($m\ge1$) gives $\sqrt m\,\overline{\langle y,e_{m-1}\rangle}=\overline{\langle w,e_m\rangle}$, that is $\sqrt m\langle y,e_{m-1}\rangle=\langle w,e_m\rangle$; hence $\sum_{m\ge1}m|\langle y,e_{m-1}\rangle|^2=\sum_{m\ge1}|\langle w,e_m\rangle|^2\le\|w\|^2<\infty$, so $y\in D(a^\dagger)$ and $a^\dagger y=\sum_{m\ge1}\sqrt m\langle y,e_{m-1}\rangle e_m=\sum_{m\ge1}\langle w,e_m\rangle e_m=w$ by [F1]. Thus $a^*\subseteq a^\dagger$. Conversely let $y\in D(a^\dagger)$ and $x\in D(a)$; then $\langle ax,y\rangle=\sum_{m\ge0}\sqrt{m+1}c_{m+1}\overline{d_m}$ with $d_m=\langle y,e_m\rangle$, absolutely convergent by [F3] since $\sum_m(m+1)|c_{m+1}|^2=\|ax\|^2<\infty$ and $\sum_m|d_m|^2=\|y\|^2$, and the same series equals $\sum_{n\ge1}c_n\overline{\sqrt n\,d_{n-1}}=\langle x,a^\dagger y\rangle$; hence the functional $x\mapsto\langle ax,y\rangle$ is bounded on $(D(a),\|\cdot\|)$ by $\|y\|$, so $y\in D(a^*)$ and $a^*y=a^\dagger y$. Therefore $a^*=a^\dagger$. [given, F1, F2, F3, algebra]

1.3 [$(a^\dagger)^*=a$ and closedness] Let $y\in D((a^\dagger)^*)$ and $w:=(a^\dagger)^*y$; testing against $x=e_m$ with $m\ge0$ gives $\sqrt{m+1}\langle y,e_{m+1}\rangle=\langle w,e_m\rangle$, so $\sum_{m\ge0}(m+1)|\langle y,e_{m+1}\rangle|^2=\sum_m|\langle w,e_m\rangle|^2<\infty$, that is $\sum_{n\ge1}n|\langle y,e_n\rangle|^2<\infty$; thus $y\in D(a)$ and $ay=\sum_{n\ge1}\sqrt n\langle y,e_n\rangle e_{n-1}=\sum_{m\ge0}\langle w,e_m\rangle e_m=w$. Conversely for $y\in D(a)$ and $x\in D(a^\dagger)$ the same two absolutely convergent series show $\langle a^\dagger x,y\rangle=\langle x,ay\rangle$, so $y\in D((a^\dagger)^*)$ with $(a^\dagger)^*y=ay$. Hence $(a^\dagger)^*=a$. Since $a=(a^\dagger)^*$ and $a^\dagger=a^*$ are adjoints of densely defined operators, [F2] makes both closed. [given, F1, F2, F3, algebra]

1.4 [Kernels] If $ax=0$ then $\sqrt{m+1}c_{m+1}=0$ for all $m$, so $c_n=0$ for $n\ge1$ and $x=c_0e_0$; conversely $ae_0=0$. If $a^\dagger x=0$ then $\sqrt m\,c_{m-1}=0$ for all $m\ge1$, so $c_n=0$ for all $n$ and $x=0$. [given, F1, algebra]

1.5 [Products, commutator and exact domain] For $x\in H$ with coefficients $c_n$: $a^\dagger x$ has coefficients $(a^\dagger x)_m=\sqrt m\,c_{m-1}$ for $m\ge1$ and $0$ for $m=0$, so $a(a^\dagger x)$ has coefficients $m\,c_{m-1}\cdot$... computing directly, $(aa^\dagger x)_n=(n+1)c_n$, and the product is defined exactly when $\sum_m(m+1)^2|c_{m+1}|^2<\infty$, that is $\sum_n n^2|c_n|^2<\infty$ up to the finite $n=0,1$ terms, i.e. exactly for $x\in D(N)$. Similarly $(a^\dagger ax)_n=nc_n$ with the product defined exactly for $x\in D(N)$. Hence $D(aa^\dagger)=D(a^\dagger a)=D(N)$, on which $a^\dagger a=N$ and $aa^\dagger=N+I$; subtracting gives $[a,a^\dagger]x=x$ for $x\in D(N)$. A vector not in $D(N)$ has at least one of the two products undefined, so $D(N)$ is exactly the common domain of the two products. [given, F1, algebra]

2.1 [(e) self-adjointness and spectrum] By [F4] the operator with domain $D(N)$ and action $Ne_n=ne_n$ is self-adjoint with spectrum $\mathbb N$, and step 1.1 identifies it with the diagonal operator of [F4]. The partial-sum statement is the graph-core clause of [[lem-nrqm-oscillator-diagonal-adjoint-and-graph-core-lemma]] with $\lambda_n=n$. [step 1.1, F4]

3.1 [(f) closure of the concrete ladder] In the concrete case $H=L^2(\mathbb R,dy)$, $e_n=g_n$ and $P=\operatorname{span}\{g_n\}$ by [F5]; on the finite expansion $\varphi=\sum_{n\le M}c_ng_n$ the operator $a$ of this lemma acts by $a\varphi=\sum_{m\le M-1}\sqrt{m+1}c_{m+1}g_m=a_P\varphi$, and similarly $a^\dagger\varphi=a^\dagger_P\varphi$; hence $a_P\subseteq a$ and $a^\dagger_P\subseteq a^\dagger$. Since $a$ is closed by step 1.3 and $a_P\subseteq a$, the closure satisfies $\overline{a_P}\subseteq a$. Conversely, for $x\in D(a)$ the partial sums $x_M=\sum_{n\le M}c_ng_n\in P$ satisfy $x_M\to x$ and $a_Px_M=ax_M\to ax$ by step 1.1, so $(x,ax)\in\overline{\Gamma(a_P)}$ and $a\subseteq\overline{a_P}$; hence $a=\overline{a_P}$, and the argument for $a^\dagger$ is identical. [step 1.1, step 1.3, F5] ∎
