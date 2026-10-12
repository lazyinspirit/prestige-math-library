---
id: thm-nrqm-intervals-dirichlet-diagonal-domain-identification
aliases: [nrqm-intervals-and-contacts-dirichlet-diagonal-domain-identification]
kind: theorem
domain: mathematics
title: "Identification of the Dirichlet Laplacian with the sine diagonal operator"
status: draft
origin: pipeline
dependency_level: 4
deps: [def-nrqm-intervals-hilbert-sobolev-spaces, thm-nrqm-intervals-sine-on-completeness, lem-nrqm-intervals-integration-by-parts, lem-nrqm-intervals-endpoint-trace-and-half-line-decay, lem-nrqm-oscillator-diagonal-adjoint-and-graph-core-lemma, thm-nrqm-oscillator-diagonal-spectrum, def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis, thm-parseval-equivalences-for-a-complete-orthonormal-family, thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces, def-symmetric-self-adjoint-and-essentially-self-adjoint, def-hilbert-space, def-countable-choice, def-axiom-of-choice]
dependency_roles:
  def-nrqm-intervals-hilbert-sobolev-spaces: mathematical-premise
  thm-nrqm-intervals-sine-on-completeness: mathematical-premise
  lem-nrqm-intervals-integration-by-parts: mathematical-premise
  lem-nrqm-intervals-endpoint-trace-and-half-line-decay: mathematical-premise
  lem-nrqm-oscillator-diagonal-adjoint-and-graph-core-lemma: mathematical-premise
  thm-nrqm-oscillator-diagonal-spectrum: mathematical-premise
  def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis: mathematical-premise
  thm-parseval-equivalences-for-a-complete-orthonormal-family: mathematical-premise
  thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces: mathematical-premise
  def-symmetric-self-adjoint-and-essentially-self-adjoint: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Section 9.1 pp. 181-186 (Sturm-Liouville operators with Dirichlet boundary conditions and their eigenvalue expansions)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "Haim Brezis, Functional Analysis, Sobolev Spaces and Partial Differential Equations (Springer Universitext 2011), Section 8.6 pp. 231-233 (the Dirichlet Laplacian on an interval: eigenfunction expansion and domain)"
      url: "https://www.math.toronto.edu/almut/Brezis.pdf"
---

## Statement

Assume the Axiom of Choice and Countable Choice ([[def-axiom-of-choice]],
[[def-countable-choice]]). Let $0<L<\infty$, let
$e_n(x)=\sqrt{\tfrac2L}\sin\!\Bigl(\frac{n\pi x}{L}\Bigr),\qquad
\lambda_n:=\Bigl(\frac{n\pi}{L}\Bigr)^2\quad(n\ge1),$
let $(e_n)_{n\ge1}$ be the complete orthonormal family of
[[thm-nrqm-intervals-sine-on-completeness]], and let $A_D$ be the diagonal
operator of [[lem-nrqm-oscillator-diagonal-adjoint-and-graph-core-lemma]]
associated with $(e_n)$ and $(\lambda_n)$: $A_Dx=\sum_{n\ge1}\lambda_n
\langle x,e_n\rangle e_n$ with domain
$D(A_D)=\Bigl\{x\in L^2(0,L;\mathbb C):\sum_{n\ge1}\lambda_n^2|\langle x,e_n\rangle|^2<\infty\Bigr\}.$
Let $B$ be the Dirichlet Laplacian
$Bu:=-D^2u,\qquad D(B)=\{u\in H^2(0,L):u^*(0)=u^*(L)=0\},$
with $H^2$ and the trace $u^*$ of [[def-nrqm-intervals-hilbert-sobolev-spaces]]
and [[lem-nrqm-intervals-integration-by-parts]] clause (b). Then:

(a) $D(A_D)=D(B)$ and $A_D=B$; in particular $D(A_D)$ is a linear subspace of
$H^2(0,L)$ whose members have vanishing endpoint traces;

(b) $A_D$ is self-adjoint ([[def-symmetric-self-adjoint-and-essentially-self-adjoint]]),
positive, and its spectrum is $\sigma(A_D)=\{\lambda_n:n\ge1\}$; each
$\lambda_n$ is an eigenvalue with eigenvector $e_n$; the eigenvalues are
simple in the sense that $\ker(A_D-\lambda_n)$ contains no vector orthogonal
to $e_n$;

(c) for every $u\in D(A_D)$, $\langle A_Du,u\rangle=\|Du\|_{L^2(0,L)}^2$;
consequently $A_D\ge\lambda_1=(\pi/L)^2$ in the quadratic-form sense on its
domain.

## Facts & Assumptions

**Given:** $L>0$; the complete orthonormal sine family $(e_n)$ and numbers $\lambda_n=(n\pi/L)^2$ of [[thm-nrqm-intervals-sine-on-completeness]]; the diagonal operator $A_D$ of [[lem-nrqm-oscillator-diagonal-adjoint-and-graph-core-lemma]].

[F1] $(e_n)_{n\ge1}$ is an orthonormal family with $\langle x,e_n\rangle$ the Fourier coefficients and $x=\sum_n\langle x,e_n\rangle e_n$ in $L^2$ for every $x\in L^2(0,L)$ ([[thm-nrqm-intervals-sine-on-completeness]], [[thm-parseval-equivalences-for-a-complete-orthonormal-family]], [[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]]). Also $e_n\in H^2(0,L)$, $e_n(0)=e_n(L)=0$, and the weak derivatives satisfy $De_n(x)=\frac{n\pi}{L}\sqrt{\frac2L}\cos(\frac{n\pi x}{L})$, $D^2e_n=-\lambda_ne_n$, with $\langle De_n,De_m\rangle=\lambda_n\delta_{nm}$ ([[lem-nrqm-intervals-integration-by-parts]] and the product-to-sum computation of [[thm-nrqm-intervals-sine-on-completeness]]).

[F2] The diagonal operator lemma [[lem-nrqm-oscillator-diagonal-adjoint-and-graph-core-lemma]] states: the finite-support diagonal operator is symmetric, $A_D$ is self-adjoint with the displayed domain, $A_De_n=\lambda_ne_n$, the finite spans are a graph core, and $\langle A_Dx,x\rangle=\sum_n\lambda_n|\langle x,e_n\rangle|^2$. The companion [[thm-nrqm-oscillator-diagonal-spectrum]] identifies $\sigma(A_D)$ with the closure of the sequence $(\lambda_n)$.

[F3] For $u,v\in H^1(0,L)$, $\int_0^Lu\overline{v'}=u^*(L)\overline{v^*(L)}-u^*(0)\overline{v^*(0)}-\int_0^Lu'\overline v$ ([[lem-nrqm-intervals-integration-by-parts]] clause (a)); for $u,v\in H^2(0,L)$ the second-order identity holds; and $H^1_0(0,L)=\{u\in H^1(0,L):u^*(0)=u^*(L)=0\}$ (clause (b)).

[F4] Bessel's inequality for an orthonormal family: for every $x\in L^2$, $\sum_n|\langle x,e_n\rangle|^2\le\|x\|^2$ ([[thm-parseval-equivalences-for-a-complete-orthonormal-family]]).

## Proof

1.1 [Series of derivatives] Let $u\in D(A_D)$ and put $c_n:=\langle u,e_n\rangle$, so that $\sum_n\lambda_n^2|c_n|^2<\infty$ by [F2]. By [F4], $\sum_n|c_n|^2\le\|u\|^2$, so Cauchy-Schwarz gives $\sum_n\lambda_n|c_n|^2\le\Bigl(\sum_n\lambda_n^2|c_n|^2\Bigr)^{1/2} \Bigl(\sum_n|c_n|^2\Bigr)^{1/2}<\infty,$ and hence the series $w:=\sum_nc_nDe_n$ converges in $L^2$ with $\|w\|^2=\sum_n\lambda_n|c_n|^2$ by [F1]. [F1, F2, F4, given, algebra]

2.1 [$u\in D(B)$ and $A_Du=-D^2u$] We first show $Du=w$ for $u\in D(A_D)$. Let $\varphi\in C_c^\infty(0,L)$ and put $u_N:=\sum_{n\le N}c_ne_n$. Since $u_N\to u$ in $L^2$, $\int u_N\overline{\varphi'}\to\int u\overline{\varphi'}$. For each $n$, [F3] clause (a) applied to $e_n$ and $\varphi$ (both in $H^1(0,L)$, and $\varphi$ compactly supported in the interior) gives $\int e_n\overline{\varphi'}=e_n^*(L)\overline{\varphi(L)} -e_n^*(0)\overline{\varphi(0)}-\int e_n'\overline\varphi =-\int e_n'\overline\varphi$, because $\varphi$ vanishes near the endpoints and $e_n(0)=e_n(L)=0$. Summing over $n\le N$ and passing to the limit (justified by absolute convergence: $\sum_n|c_n|\,|\langle e_n',\varphi\rangle| \le(\sum_n\lambda_n|c_n|^2)^{1/2}(\sum_n\lambda_n^{-1}|\langle e_n,\varphi'\rangle|^2)^{1/2} \le(\sum_n\lambda_n|c_n|^2)^{1/2}\lambda_1^{-1/2}\|\varphi'\|$, using $[F4]$ for $\varphi'$ and $\lambda_n\ge\lambda_1$) gives $\int u\overline{\varphi'}=-\int w\overline\varphi$ for every test $\varphi$; hence $Du=w\in L^2$ and $u\in H^1(0,L)$. [step 1.1, F1, F2, F3, F4, algebra]

3.1 [Endpoint traces and second derivative] With $u\in D(A_D)$, $Du=w$, and the partial sums $u_N$ of step 2.1, the trace bound of [[lem-nrqm-intervals-endpoint-trace-and-half-line-decay]] clause (a) gives $|u_N^*(x)-u^*(x)|\le L^{-1/2}\|u_N-u\|+L^{1/2}\|Du_N-Du\|\qquad(x\in[0,L]),$ and the right side tends to $0$ because $u_N\to u$ and $Du_N\to Du$ in $L^2$ by [F1] and step 1.1; hence $u_N^*\to u^*$ uniformly and, since $u_N^*(0)=u_N^*(L)=0$, also $u^*(0)=u^*(L)=0$. Next, the same computation with $w$ in place of $u$ (using $\sum_n\lambda_n^2|c_n|^2<\infty$) shows $Dw=\sum_nc_nD^2e_n=-\sum_n\lambda_nc_ne_n=-A_Du$ in the weak sense: for each test $\varphi$, $\int w\overline{\varphi'}=-\int(-A_Du)\overline\varphi$ by the identical argument. Hence $Du=w\in H^1(0,L)$, $D^2u=-A_Du$, and $u\in D(B)$ with $Bu=-D^2u=A_Du$. [step 1.1, step 2.1, F1, F3]

4.1 [Reverse inclusion] Let $u\in D(B)$; then $u\in H^2(0,L)$ and $D^2u\in L^2$, and $u^*(0)=u^*(L)=0$. Put $c_n:=\langle u,e_n\rangle$. For each $n$, apply the second-order identity [F3] to $u$ and $e_n$: all boundary terms vanish because $u$ and $e_n$ vanish at $0$ and $L$, so $\langle -D^2u,e_n\rangle=\int_0^L(-D^2u)\overline{e_n} =\int_0^Lu\overline{D^2e_n}=\lambda_n\langle u,e_n\rangle=\lambda_nc_n,$ using $D^2e_n=-\lambda_ne_n$ from [F1]. By Bessel [F4] applied to $-D^2u\in L^2$, $\sum_n\lambda_n^2|c_n|^2=\sum_n|\langle -D^2u,e_n\rangle|^2\le\|D^2u\|^2<\infty,$ so $u\in D(A_D)$. Moreover $A_Du=\sum_n\lambda_nc_ne_n =\sum_n\langle -D^2u,e_n\rangle e_n=-D^2u$ by the expansion [F1]. Hence $D(B)\subseteq D(A_D)$ and $A_Du=Bu$. [step 3.1, F1, F3, F4, algebra]

5.1 [Conclusion of (a)] Steps 3.1 and 4.1 give $D(A_D)=D(B)$ and $A_D=B$. [step 3.1, step 4.1]

6.1 [Self-adjointness, spectrum, positivity] By [F2], $A_D$ is self-adjoint with spectrum the closure of $\{\lambda_n\}$; since $\lambda_n=(n\pi/L)^2\to\infty$ and the map $n\mapsto\lambda_n$ is injective, the set $\{\lambda_n:n\ge1\}$ has no finite accumulation point and is closed in $\mathbb R$, so $\sigma(A_D)=\{\lambda_n:n\ge1\}$, and [F2] gives $A_De_n=\lambda_ne_n$. If $x=\sum_mc_me_m\in D(A_D)$ lies in $\ker(A_D-\lambda_n)$, then $0=(A_D-\lambda_n)x=\sum_m(\lambda_m-\lambda_n)c_me_m$, and uniqueness of coefficients in the orthonormal expansion [F1] gives $(\lambda_m-\lambda_n)c_m=0$ for every $m$, so $c_m=0$ unless $m=n$ and $\ker(A_D-\lambda_n)=\mathbb Ce_n$; this is the simplicity assertion of (b). Finally, for $u\in D(A_D)$ and $u\ne0$, [F2] gives $\langle A_Du,u\rangle=\sum_n\lambda_n|c_n|^2 \ge\lambda_1\sum_n|c_n|^2=\lambda_1\|u\|^2>0$, since $\lambda_1>0$; so $A_D$ is positive and $A_D\ge\lambda_1$ in the quadratic-form sense. [step 5.1, F2]

7.1 [Form identity] Let $u\in D(A_D)=D(B)$. Since $u^*(0)=u^*(L)=0$ and $A_Du=-D^2u$, the first-order identity [F3] applied to the pair $(Du,u)$ — more precisely the twice-integrated form — gives $\langle A_Du,u\rangle=\int_0^L(-D^2u)\overline u =\int_0^L|Du|^2-[Du^*\overline{u^*}]_0^L=\|Du\|_{L^2}^2$, because the boundary terms contain the factor $u^*(0)=u^*(L)=0$. This is (c). [step 5.1, F3, algebra] ∎
