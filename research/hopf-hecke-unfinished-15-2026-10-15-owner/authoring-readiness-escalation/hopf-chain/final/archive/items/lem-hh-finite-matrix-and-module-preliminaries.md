---
id: lem-hh-finite-matrix-and-module-preliminaries
kind: lemma
title: "Finite matrix and module preliminaries: right inverses, rank invariance, finite length and nilpotent trace"
status: published
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 0
deps: [def-left-and-right-modules, def-submodule, def-quotient-module, def-simple-module, def-semisimple-module, def-composition-series-and-length-of-a-module, def-direct-sum-of-a-family-of-modules, def-endomorphism-ring-of-a-module, def-dimension, thm-dimension-of-a-linear-subspace, thm-unique-coordinates-with-respect-to-an-ordered-basis, def-linear-map, def-linear-basis, def-row-space-column-space-nullspace-and-matrix-ranks, cor-matrix-rank-equals-the-rank-of-its-linear-map, def-matrix-space, def-matrices-over-a-commutative-ring, def-determinant-of-a-square-matrix, thm-determinant-multiplicative, thm-adjugate-identity-over-a-commutative-ring, cor-square-matrix-invertible-iff-determinant-is-a-unit, def-trace-of-a-square-matrix, def-trace-of-an-endomorphism, def-free-module-on-a-set-and-standard-basis, def-ring-matrix-product-identity-and-transpose, def-invertible-matrix-and-similarity-over-a-commutative-ring, lem-finite-choice, def-algebra-over-a-commutative-ring, def-subfield, lem-restriction-of-scalars, def-function-space, def-coordinate-column-and-matrix-of-a-linear-map]
justified_by: []
axiom_use: 'No arbitrary Choice: every selection is made from a finite list or by maximal finite dimension.'
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Keith Conrad, Tensor products (University of Connecticut expository notes, 60 pp.)"
      url: "https://kconrad.math.uconn.edu/blurbs/linmultialg/tensorprod.pdf"
      locator: "Theorem 5.9 and Example 5.11, printed pp. 30–31: finite-free Hom–tensor duality; Theorem 5.14, printed pp. 32–33: comparison of tensor rank and linear-map rank"
    - title: "The CRing Project, open-source commutative algebra text (2016 PDF; Chapter 13)"
      url: "https://math.colorado.edu/topology/cringproject.pdf"
      locator: "§11.6, printed pp. 81–89: free modules, finite generation and modules of finite length; §13.2, printed pp. 120–131: projective and injective modules for the finite-splitting context"
verification:
  audited: "2026-10-08"
  precheck: pass
---

## Statement

Let $k$ be a field.

1. Let $R$ be a commutative ring, $M$ a free $R$-module of finite rank $n$ with basis $(e_0,\dots,e_{n-1})$, and let $v_0,\dots,v_{n-1}\in M$ span $M$. Then the coordinate matrix $A$ of $(v_0,\dots,v_{n-1})$ in the basis $(e_i)$ has a right inverse, $\det(A)$ is a unit of $R$, and $(v_0,\dots,v_{n-1})$ is a basis of $M$. The determinant is formed for $n\ge1$; for $n=0$ the module is the zero module and the empty family is its basis, with no determinant clause.
2. If $F\subseteq E$ is a field extension and $A\in M_{m\times n}(F)$, then the rank of $A$ over $F$ equals its rank over $E$.
3. Let $B$ be a finite-dimensional $k$-algebra and $N$ a finite-dimensional left $B$-module. A proper submodule has strictly smaller $k$-dimension, a maximal proper submodule of a nonzero finite-dimensional module exists by maximal dimension (no arbitrary Choice), and iterating produces a finite composition series of $N$ ([[def-composition-series-and-length-of-a-module]]); in particular $N$ has finite length.
4. If $S_1,\dots,S_m$ are simple $B$-modules and $N\subseteq S_1\oplus\cdots\oplus S_m$ is a submodule, then $N$ is isomorphic to a direct sum of a subfamily of the $S_i$, and $N$ has a complement in $S_1\oplus\cdots\oplus S_m$.
5. If $T:N\to N$ is $k$-linear with $T^r=0$ for some $r\ge1$, then $\operatorname{tr}(T)=0$ ([[def-trace-of-an-endomorphism]]).

## Facts & Assumptions

**Given:** A field $k$; a commutative ring $R$; a free $R$-module $M$ of finite rank $n$ with basis $(e_0,\dots,e_{n-1})$ and vectors $v_0,\dots,v_{n-1}$ spanning $M$; a field extension $F\subseteq E$ and a matrix $A\in M_{m\times n}(F)$; a finite-dimensional $k$-algebra $B$ and a finite-dimensional left $B$-module $N$; simple $B$-modules $S_1,\dots,S_m$ and a submodule $N\subseteq S_1\oplus\cdots\oplus S_m$; a $k$-linear $T:N\to N$ with $T^r=0$ for some $r\ge1$.

[F1] A free module on a set has a standard basis with unique finite expansions, and a family $(b_x)$ is a basis of a module when every element is uniquely a finite $R$-linear combination of the $b_x$ ([[def-free-module-on-a-set-and-standard-basis]]).

[F2] Matrix product and identity over a commutative ring: $(AB)_{ik}=\sum_{j<n}a_{ij}b_{jk}$, and $I_n$ has entry $1$ on the diagonal and $0$ elsewhere ([[def-ring-matrix-product-identity-and-transpose]]).

[F3] Invertibility over a commutative ring means the existence of $C$ with $AC=I_n=CA$, and the inverse is unique ([[def-invertible-matrix-and-similarity-over-a-commutative-ring]]).

[F4] The Leibniz determinant is $\det(A)=\sum_{\sigma\in S_n}\operatorname{sgn}(\sigma)\prod_{i<n}a_{\sigma(i),i}$ and is multiplicative, $\det(AB)=\det(A)\det(B)$ ([[def-determinant-of-a-square-matrix]], [[thm-determinant-multiplicative]]).

[F5] A matrix $A\in M_n(R)$ over a commutative ring is invertible if and only if $\det(A)$ is a unit of $R$ ([[cor-square-matrix-invertible-iff-determinant-is-a-unit]]).

[F6] Every family of nonempty sets indexed by a natural number $n$ has a choice function ([[lem-finite-choice]]).

[F7] The row space $\operatorname{Row}(A)\subseteq F^n$ is the span of the rows, and $\operatorname{rank}(A)=\dim_F\operatorname{Row}(A)$, defined because a finite list spans it ([[def-row-space-column-space-nullspace-and-matrix-ranks]]).

[F8] An $R$-algebra has a central structure map, and a left module over a $k$-algebra is a $k$-vector space through that map ([[def-algebra-over-a-commutative-ring]], [[def-left-and-right-modules]]).

[F9] A subspace of a finite-dimensional space is finite-dimensional with no larger dimension; $\dim_F U=\dim_F V$ holds for $U\subseteq V$ exactly when $U=V$; every independent subset of a finite-dimensional space is contained in a basis ([[thm-dimension-of-a-linear-subspace]]).

[F10] Ordered bases give unique coordinates, and the matrix $[T]^{\mathcal C}_{\mathcal B}$ of a linear map has as its $j$-th column the coordinate column of $T(b_j)$ ([[thm-unique-coordinates-with-respect-to-an-ordered-basis]], [[def-coordinate-column-and-matrix-of-a-linear-map]]).

[F11] The trace of a square matrix is the sum of its diagonal entries, and the trace of an endomorphism of a finite-dimensional space is the trace of any matrix of it ([[def-trace-of-a-square-matrix]], [[def-trace-of-an-endomorphism]]).

[F12] For a subfield $F$ of $E$, every $E$-vector space is an $F$-vector space by restricting scalars, and $F^X$, $F^n$ are the function spaces with pointwise operations ([[def-subfield]], [[lem-restriction-of-scalars]], [[def-function-space]]).

[F13] Submodules, quotient modules, simple modules, composition series and length ([[def-submodule]], [[def-quotient-module]], [[def-simple-module]], [[def-composition-series-and-length-of-a-module]]).

[F14] The direct sum $\bigoplus_{i=1}^mS_i$ is the submodule of the product of tuples with finite support, with coordinate inclusions ([[def-direct-sum-of-a-family-of-modules]]).

## Proof

**Proof technique:** direct.

1.1 Write the unique coordinate expansion $v_j=\sum_{i<n}a_{ij}e_i$ of each $v_j$ in the basis $(e_i)$; this is the coordinate matrix $A=(a_{ij})$, and identifying $M$ with $R^n$ through coordinate expansions of [F1] carries $v_j$ to the $j$-th column $a_j$ of $A$ and is an $R$-module isomorphism. Since the $v_j$ span $M$, the columns $a_j$ span $R^n$, so for every $i<n$ the set $\{b\in R^n:Ab=e_i\}$ is nonempty; by [F6] applied to the function $i\mapsto\{b\in R^n:Ab=e_i\}$ on $n$ there are $b_0,\dots,b_{n-1}\in R^n$ with $Ab_i=e_i$, and $B\in M_n(R)$ denotes the matrix with $i$-th column $b_i$. [given, F1, F6, algebra, choose]

1.2 Let $U\subseteq F^n$ be the $F$-row space of $A$ and $(u_0,\dots,u_{r-1})$ an $F$-basis of it, so that $r=\operatorname{rank}_F(A)$ by [F7]; by [F12] the field extension makes $E^n$ an $F$-vector space containing $F^n$, and viewing rows and the $u_i$ in $E^n$, every row of $A$ is an $F$-combination of the $u_i$ and hence an $E$-combination, so every $E$-combination of the rows is an $E$-combination of the $u_i$: each $u_i$ is itself an $F$-combination of the rows and therefore lies in $U_E$, so the list $(u_0,\dots,u_{r-1})$ $E$-spans the $E$-row space $U_E$ of the matrix $A$ read over $E$. [given, F7, F12, algebra]

1.3 A submodule of $N$ is closed under $k$-scalars through the structure map of the $k$-algebra $B$ of [F8], hence is a $k$-linear subspace of $N$; consequently, if $L\subsetneq L'\subseteq N$ are submodules then $\dim_kL<\dim_kL'$ by [F9]. [given, F8, F9, algebra]

1.4 Claim 4 is proved by induction on $m$. For $m=0$ the direct sum is $0$, so $N=0$ is the empty direct sum with complement $0$; for $m=1$ the only submodules of the simple module $S_1$ are $0$ and $S_1$, the direct sums over the empty and the full subfamily, with complements $S_1$ and $0$; for $m\ge2$, write $S:=S_1$ and $M:=S_2\oplus\cdots\oplus S_m$, a direct sum of $m-1$ simple modules, so that $S_1\oplus\cdots\oplus S_m=S\oplus M$ with the coordinate projections as in [F14], and let $N\subseteq S\oplus M$ be a submodule. [given, F13, F14, algebra]

1.5 If $T:N\to N$ is $k$-linear with $T^r=0$, put $K_j:=\ker(T^j)$ for $j\ge0$, so that $K_0=0$ and $0=K_0\subseteq K_1\subseteq\cdots\subseteq K_r=N$ is a chain of $k$-subspaces of the finite-dimensional space $N$, with $K_j$ finite-dimensional for every $j$ by [F9]; extend a basis of $K_{j}$ successively to a basis of $K_{j+1}$ using the extension clause of [F9] and concatenate the successive blocks to an ordered basis $(w_1,\dots,w_d)$ of $N$ in the sense of [F10]. [given, F9, F10, algebra]

2.1 By [F2] the $i$-th column of $AB$ is $Ab_i=e_i$, so $AB=I_n$; by [F4] $\det(A)\det(B)=\det(AB)=\det(I_n)$, and the Leibniz expansion of $\det(I_n)$ has vanishing products $\prod_{i<n}(I_n)_{\sigma(i),i}$ unless $\sigma=\operatorname{id}$, so $\det(I_n)=1$ for $n\ge1$ and $\det(A)\det(B)=1$: the determinant $\det(A)$ is a unit of $R$ with inverse $\det(B)$. [step 1.1, F2, F4, algebra]

2.2 Suppose $\sum_{i<r}\lambda_iu_i=0$ in $E^n$ with all $\lambda_i\in E$. The coefficients span an $F$-subspace $L\subseteq E$ that is spanned by the finitely many $\lambda_i$; discarding from that finite spanning list each vector lying in the span of those retained leaves an $F$-basis $(\mu_1,\dots,\mu_t)$ of $L$, and $\lambda_i=\sum_{t}c_{it}\mu_t$ with $c_{it}\in F$. For each coordinate $k<n$ the equality gives $0=\sum_{i<r}\lambda_iu_i(k)=\sum_t\mu_t\bigl(\sum_{i<r}c_{it}u_i(k)\bigr)$ in $E$; the $\mu_t$ are $F$-independent in $E$ and the coefficients $\sum_{i<r}c_{it}u_i(k)$ lie in $F$, so they all vanish, that is $\sum_{i<r}c_{it}u_i=0$ in $F^n$ for every $t$; the $u_i$ are $F$-independent, so every $c_{it}=0$ and hence every $\lambda_i=0$: the list $(u_0,\dots,u_{r-1})$ is $E$-independent. [step 1.2, F7, F12, algebra]

2.3 Let $N\ne0$. The $k$-dimensions $\dim_kL$ of the proper submodules $L\subsetneq N$ form a nonempty set of natural numbers, since the zero submodule is proper and has dimension $0$, bounded above by $\dim_kN-1$ by [F9]; let $d$ be its largest element and let $L$ be a proper submodule with $\dim_kL=d$ (one selection from a nonempty set of submodules). Then $L$ is maximal proper: if $L\subsetneq L'\subseteq N$, step 1.3 gives $\dim_kL'>\dim_kL=d$, so $L'$ is not a proper submodule with dimension at most $d$, whence $L'=N$. [step 1.3, F9, choose, algebra]

2.4 Case $N\cap S\ne0$ of claim 4. Since $S$ is simple and $N\cap S$ is a nonzero submodule of it, $N\cap S=S$, and for $n=s+u\in N$ with $s\in S$, $u\in M$ one has $u=n-s\in N\cap M$; hence $N=S\oplus(N\cap M)$ with the sum direct because $S\cap M=0$. By the induction hypothesis applied to $N\cap M\subseteq M$ there are a subfamily $(S_i)_{i\in J}$, $J\subseteq\{2,\dots,m\}$, with $N\cap M\cong\bigoplus_{i\in J}S_i$ and a submodule $K'\subseteq M$ with $(N\cap M)\cap K'=0$ and $(N\cap M)+K'=M$; then $N\cong S\oplus\bigoplus_{i\in J}S_i$, and $K'$ is a complement of $N$ in $S\oplus M$, because $N+K'=S+(N\cap M)+K'=S\oplus M$ and an element of $N\cap K'$ lies in $M$, hence has zero $S$-component and lies in $(N\cap M)\cap K'=0$. [step 1.4, F13, F14, algebra]

3.1 By [F5] the unit determinant of step 2.1 makes $A$ invertible, so [F3] gives $C$ with $CA=AC=I_n$; if $\sum_{j<n}\lambda_ja_j=0$ in $R^n$, then $0=C(0)=CA\lambda=\lambda$, so the columns $a_j$ of $A$ are linearly independent and, being spanning, they form a basis of $R^n$; applying the coordinate isomorphism to the preimages shows $(v_0,\dots,v_{n-1})$ is a basis of $M$, which proves claim 1 for $n\ge1$; for $n=0$ the module is $0$ with empty basis by [F1] and there is no determinant clause. [step 2.1, F1, F3, F5, algebra]

3.2 The list $(u_0,\dots,u_{r-1})$ is $E$-independent by step 2.2 and $E$-spans $U_E$ by step 1.2, so it is an $E$-basis of $U_E$; therefore $\operatorname{rank}_E(A)=\dim_EU_E=r=\dim_FU=\operatorname{rank}_F(A)$ by [F7], which is claim 2. [step 1.2, step 2.2, F7, algebra]

3.3 Iteration for claim 3: starting from $N$ and repeatedly replacing a nonzero module by a maximal proper submodule, which exists by step 2.3, produces a strictly decreasing chain $N=N_0\supsetneq N_1\supsetneq\cdots\supsetneq N_t=0$ of finite-dimensional submodules, because each $N_i$ is finite-dimensional by [F9] and each step strictly lowers the $k$-dimension, so the process terminates after at most $\dim_kN$ steps. Reading the chain upwards gives $0=N_t\subsetneq\cdots\subsetneq N_0=N$, and each factor $N_{i-1}/N_i$ is simple: if it had a nonzero proper submodule $Q$, the preimage $\{x\in N_{i-1}:x+N_i\in Q\}$ would be a submodule strictly between $N_i$ and $N_{i-1}$, contradicting maximality of $N_i$ in $N_{i-1}$; this is a finite composition series of $N$ in the sense of [F13], so $N$ has finite length. [step 2.3, F9, F13, algebra]

3.4 Case $N\cap S=0$ of claim 4. The projection $\pi:N\to M$ is then injective, and $\pi(N)\subseteq M$ is a submodule to which the induction hypothesis applies: there are a subfamily $(S_i)_{i\in J}$, $J\subseteq\{2,\dots,m\}$, with $\pi(N)\cong\bigoplus_{i\in J}S_i$ and a submodule $K\subseteq M$ with $\pi(N)\cap K=0$ and $\pi(N)+K=M$. For $u\in\pi(N)$ let $f(u)\in S$ be the $S$-component of the unique $n\in N$ with $\pi(n)=u$, so that this $n$ is $f(u)+u$ and $N=\{f(u)+u:u\in\pi(N)\}$; the projection and the $S$-component map are $B$-module homomorphisms; the inverse of the restricted projection respects addition and $B$-scalars, so $f$ is a $B$-module homomorphism. Every $x=s+u\in S\oplus M$ with $u=u_1+u_2$, $u_1\in\pi(N)$, $u_2\in K$, equals $\bigl(f(u_1)+u_1\bigr)+\bigl((s-f(u_1))+u_2\bigr)\in N+(S\oplus K)$, and if $n=f(u)+u\in N\cap(S\oplus K)$ with $n=s'+k$, $k\in K$, then projecting to $M$ gives $u=k$, so $u\in\pi(N)\cap K=0$, $u=0$ and $n=f(0)=0$ by linearity of $f$, whence $N\cap(S\oplus K)=0$; therefore $S\oplus K$ is a complement of $N$ in $S\oplus M$, and $N\cong\pi(N)\cong\bigoplus_{i\in J}S_i$ through the injective projection. [step 2.4, F13, F14, algebra]

4.1 Cases 2.4 and 3.4 cover every submodule $N\subseteq S\oplus M$ according to whether $N\cap S$ is zero, and in both cases $N$ is isomorphic to a direct sum of a subfamily of $S_1,\dots,S_m$ and has a complement in $S_1\oplus\cdots\oplus S_m$; with the case $m\le1$ of step 1.4 this proves claim 4 by induction on $m$. [step 1.4, step 2.4, step 3.4, algebra]

5.1 In the ordered basis of step 1.5, a basis vector $w\in K_j$ coming from the $j$-th block satisfies $T(w)\in K_{j-1}$, which is the span of the blocks preceding $w$; the matrix $[T]$ of $T$ in this ordered basis of [F10] therefore has zeros on its diagonal, and $\operatorname{tr}(T)$ is the trace of that matrix by [F11] and thus the sum of its diagonal entries, which is $0$. This proves claim 5, and with steps 3.1, 3.2, 3.3, 4.1 all five claims are proved. [step 1.5, step 3.1, step 3.2, step 3.3, step 4.1, F10, F11, algebra] ∎
