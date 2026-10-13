---
id: thm-nrqm-oscillator-oscillator-scaling-and-exact-realization
aliases: [nrqm-oscillator-oscillator-scaling-and-exact-realization]
kind: theorem
domain: mathematics
title: "Oscillator scaling and exact realization"
status: draft
origin: pipeline
dependency_level: 3
deps: [lem-nrqm-oscillator-diagonal-adjoint-and-graph-core-lemma, thm-nrqm-oscillator-diagonal-spectrum, thm-nrqm-oscillator-hermite-recurrence, thm-nrqm-oscillator-hermite-orthogonality, thm-nrqm-oscillator-hermite-completeness, cor-c-one-change-of-variables-for-l-one-functions, def-l-p-space-as-a-quotient-by-null-functions, def-complex-lp-and-euclidean-test-function-conventions, def-test-function-space-d-of-an-open-set, cor-cauchy-schwarz-inequality-for-l-two, thm-chain-rule, thm-algebra-of-derivatives, thm-ftc-second-part, def-hilbert-space, def-countable-choice]
dependency_roles:
  lem-nrqm-oscillator-diagonal-adjoint-and-graph-core-lemma: mathematical-premise
  thm-nrqm-oscillator-diagonal-spectrum: mathematical-premise
  thm-nrqm-oscillator-hermite-recurrence: mathematical-premise
  thm-nrqm-oscillator-hermite-orthogonality: mathematical-premise
  thm-nrqm-oscillator-hermite-completeness: mathematical-premise
  cor-c-one-change-of-variables-for-l-one-functions: mathematical-premise
  def-l-p-space-as-a-quotient-by-null-functions: mathematical-premise
  def-complex-lp-and-euclidean-test-function-conventions: mathematical-premise
  def-test-function-space-d-of-an-open-set: mathematical-premise
  cor-cauchy-schwarz-inequality-for-l-two: mathematical-premise
  thm-chain-rule: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-ftc-second-part: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, §8.3 pp. 177-179 (H = H0 + omega^2 x^2, essential self-adjointness and Theorem 8.5)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, §3.1 pp. 37-41 (oscillator Hamiltonian, length scale and stationary states)"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Fix real parameters $m>0$, $\omega>0$, $\hbar>0$, put $\ell:=\sqrt{\hbar/(m\omega)}>0$, and let $g_0,P,(g_n)_{n\in\mathbb N}$ be the Hermite data of [[thm-nrqm-oscillator-hermite-recurrence]] in $L^2(\mathbb R,dy)$, so that $(g_n)$ is a complete orthonormal family by [[thm-nrqm-oscillator-hermite-completeness]]. Define

$$D:L^2(\mathbb R,dy)\to L^2(\mathbb R,dx),\qquad (Df)(x):=\ell^{-1/2}f(x/\ell),$$

and let $A$ be the self-adjoint diagonal operator of [[lem-nrqm-oscillator-diagonal-adjoint-and-graph-core-lemma]] for the complete orthonormal family $(g_n)$ and the eigenvalues $\lambda_n=2n+1$, with the core $P$ and spectrum $\{2n+1:n\in\mathbb N\}$ ([[thm-nrqm-oscillator-diagonal-spectrum]]).

Then:

(a) $D$ is a linear isometry of $L^2(\mathbb R,dy)$ onto $L^2(\mathbb R,dx)$ with two-sided inverse $(D^{-1}g)(y)=\ell^{1/2}g(\ell y)$; the functions $\psi_n:=Dg_n$, $\psi_n(x)=\ell^{-1/2}g_n(x/\ell)$, form a complete orthonormal family of $L^2(\mathbb R,dx)$;

(b) the operator

$$H_{\mathrm{osc}}:=\frac{\hbar\omega}{2}\,DAD^{-1},\qquad D(H_{\mathrm{osc}}):=\{f\in L^2(\mathbb R,dx):D^{-1}f\in D(A)\},$$

is self-adjoint, satisfies $H_{\mathrm{osc}}\psi_n=\hbar\omega(n+\tfrac12)\psi_n$ for every $n$, and has

$$D(H_{\mathrm{osc}})=\Bigl\{f:\sum_n\hbar^2\omega^2(n+\tfrac12)^2|c_n|^2<\infty\Bigr\},\qquad H_{\mathrm{osc}}f=\sum_n\hbar\omega(n+\tfrac12)c_n\psi_n,$$

where $c_n:=\langle D^{-1}f,g_n\rangle=\langle f,\psi_n\rangle$; its spectrum is $\sigma(H_{\mathrm{osc}})=\{\hbar\omega(n+\tfrac12):n\in\mathbb N\}$, its ground energy is $\hbar\omega/2$ with eigenvector $\psi_0$, and $\langle H_{\mathrm{osc}}f,f\rangle\ge\frac{\hbar\omega}{2}\|f\|^2$ for every $f\in D(H_{\mathrm{osc}})$;

(c) $D(P)=\operatorname{span}\{\psi_n\}$ is a core for $H_{\mathrm{osc}}$, and for every polynomial $p$ the function $f:=D(pg_0)$ is $C^\infty$ on $\mathbb R$ with

$$H_{\mathrm{osc}}f=-\frac{\hbar^2}{2m}f''+\frac{m\omega^2}{2}x^2f$$

pointwise on $\mathbb R$;

(d) for every $f\in D(H_{\mathrm{osc}})$ and every test function $\varphi\in C_c^\infty(\mathbb R)$,

$$\int_{\mathbb R}(H_{\mathrm{osc}}f)(x)\varphi(x)\,dx=\int_{\mathbb R}f(x)\Bigl(-\frac{\hbar^2}{2m}\varphi''(x)+\frac{m\omega^2}{2}x^2\varphi(x)\Bigr)dx,$$

so $H_{\mathrm{osc}}$ is the self-adjoint realization of the differential expression $-\frac{\hbar^2}{2m}\frac{d^2}{dx^2}+\frac{m\omega^2}{2}x^2$ in the weak sense; no identification of $D(H_{\mathrm{osc}})$ with a separately defined maximal differential-operator domain is asserted.

All parameters enter as positive real numbers; no physical identification of $m,\omega,\hbar$ with measured quantities is made.

## Facts & Assumptions

**Given:** real $m,\omega,\hbar>0$; $\ell=\sqrt{\hbar/(m\omega)}$; the complete orthonormal family $(g_n)$ in $L^2(\mathbb R,dy)$; the diagonal operator $A$ with $Ag_n=(2n+1)g_n$; the map $D$ and the vectors $\psi_n=Dg_n$.

[F1] $(g_n)$ is orthonormal and complete in $L^2(\mathbb R,dy)$, hence a Hilbert basis; coefficients in expansions are $\langle f,g_n\rangle$ and $\sum_n|\langle f,g_n\rangle|^2=\|f\|^2$ ([[thm-nrqm-oscillator-hermite-orthogonality]], [[thm-nrqm-oscillator-hermite-completeness]], [[def-complex-lp-and-euclidean-test-function-conventions]]).

[F2] $A$ has domain $D(A)=\{f:\sum_n(2n+1)^2|\langle f,g_n\rangle|^2<\infty\}$, action $Ag_n=(2n+1)g_n$, is self-adjoint with $\sigma(A)=\{2n+1:n\in\mathbb N\}$, and its algebraic eigenvector span is a core for $A$; the Hermite polynomials $H_n$ have degree $n$ with nonzero leading coefficient, so triangular elimination gives $P=\operatorname{span}\{g_n\}$; also $\langle Af,f\rangle\ge\|f\|^2$ for $f\in D(A)$ ([[lem-nrqm-oscillator-diagonal-adjoint-and-graph-core-lemma]](b),(d),(e), [[thm-nrqm-oscillator-diagonal-spectrum]], [[thm-nrqm-oscillator-hermite-recurrence]](f)).

[F3] $(-\partial_y^2+Y^2)\varphi=A\varphi$ for $\varphi\in P$; explicitly $-\varphi''+y^2\varphi=2a^\dagger a\varphi+\varphi$ on $P$ and $Ag_n=(2n+1)g_n$ ([[thm-nrqm-oscillator-hermite-orthogonality]](b), [F2]).

[F4] For a $C^1$ diffeomorphism $T:U\to V$ of open subsets of $\mathbb R$ and $h\in L^1(V)$, $\int_Vh(y)dy=\int_Uh(T(x))|T'(x)|dx$ ([[cor-c-one-change-of-variables-for-l-one-functions]]).

[F5] $\|uv\|_1\le\|u\|_2\|v\|_2$; the real chain and product rules for derivatives, applied componentwise to complex-valued functions under the convention of [[def-complex-lp-and-euclidean-test-function-conventions]] ([[cor-cauchy-schwarz-inequality-for-l-two]], [[thm-chain-rule]], [[thm-algebra-of-derivatives]]); and for real $G\in C^1[a,b]$ with integrable derivative, $\int_a^bG'=G(b)-G(a)$ ([[thm-ftc-second-part]]).

[F6] $C_c^\infty(\mathbb R)\subseteq L^2(\mathbb R)$ and, for $g\in C_c^\infty(\mathbb R)$, $g''\in L^2$ and $x\mapsto x^2g(x)\in L^2$; the integral pairing $(u,\varphi)\mapsto\int u\varphi$ satisfies $|\int u\varphi|\le\|u\|_2\|\varphi\|_2$ ([[def-test-function-space-d-of-an-open-set]], [[def-complex-lp-and-euclidean-test-function-conventions]], [F5]).

## Proof

1.1 [$D$ is a bijective isometry] Define $D$ initially on a measurable representative $u$ of an $L^2(dy)$ class by the representative $\ell^{-1/2}u(x/\ell)$. With $T(x)=x/\ell$ in [F4], $\int h(x/\ell)dx=\ell\int h(y)dy$ for every $h\in L^1(\mathbb R)$. If $u,v$ represent the same class, apply this identity to $h=|u-v|^2\in L^1$: then $\|\ell^{-1/2}(u-v)(\cdot/\ell)\|_2^2=\|u-v\|_2^2=0$, so $D$ is independent of the representative. Applying the same change of variables to $|u|^2$ gives $\|Du\|^2=\ell^{-1}\int|u(x/\ell)|^2dx=\|u\|^2$; $D$ is linear, hence a linear isometry. The formula $D^{-1}v(y):=\ell^{1/2}v(\ell y)$ is also independent of representatives by the same change of variables, is linear, and satisfies $D(D^{-1}v)=v$ and $D^{-1}(Du)=u$ as $L^2$ classes. Thus $D$ is a bijective linear isometry. [given, F4, algebra]

2.1 [Transport of the orthonormal basis] By step 1.1 and the definition $\psi_n=Dg_n$, for all $m,n$ we have $\langle\psi_n,\psi_m\rangle_{L^2(dx)}=\int\ell^{-1}g_n(x/\ell)\overline{g_m(x/\ell)}dx=\int g_n(y)\overline{g_m(y)}dy=\delta_{nm}$ by the substitution of step 1.1 applied to $g_n\overline{g_m}\in L^1$ and [F1]. If $h\in L^2(dx)$ satisfies $\langle h,\psi_n\rangle=0$ for all $n$, then $\langle D^{-1}h,g_n\rangle=\langle h,\psi_n\rangle=0$ for all $n$ because $D$ is an isometry, so $D^{-1}h=0$ by completeness of $(g_n)$ and $h=0$. Hence $(\psi_n)$ is a complete orthonormal family. [step 1.1, F1]

3.1 [$H_{\mathrm{osc}}$ is the diagonal operator in the transported basis] Let $B$ be the diagonal operator of [[lem-nrqm-oscillator-diagonal-adjoint-and-graph-core-lemma]] for the complete orthonormal family $(\psi_n)$ and the eigenvalues $\lambda_n'=\hbar\omega(n+\tfrac12)$, so $D(B)=\{f:\sum_n(\lambda_n')^2|\langle f,\psi_n\rangle|^2<\infty\}$ and $Bf=\sum_n\lambda_n'\langle f,\psi_n\rangle\psi_n$. By that lemma and [[thm-nrqm-oscillator-diagonal-spectrum]], $B$ is self-adjoint with $\sigma(B)=\overline{\{\lambda_n'\}}=\{\hbar\omega(n+\tfrac12)\}$ (a closed discrete set) and $\langle Bf,f\rangle\ge\frac{\hbar\omega}{2}\|f\|^2$ because $\lambda_n'\ge\frac{\hbar\omega}{2}$. We claim $B=H_{\mathrm{osc}}$ as operators. First, $\langle f,\psi_n\rangle=\langle D^{-1}f,g_n\rangle$ by the isometry of step 1.1 applied to $f=D(D^{-1}f)$ and $\psi_n=Dg_n$; hence $D(H_{\mathrm{osc}})=\{f:D^{-1}f\in D(A)\}=D(B)$. Second, if $f\in D(H_{\mathrm{osc}})$ and $c_n=\langle D^{-1}f,g_n\rangle$, then $D^{-1}f\in D(A)$ means $\sum_n(2n+1)^2|c_n|^2<\infty$, and the series $\sum_n(2n+1)c_ng_n$ converges in $L^2$ to $AD^{-1}f$ by [F2]; since $D$ is a bijective isometry it preserves limits of series, so $H_{\mathrm{osc}}f=\frac{\hbar\omega}{2}D\bigl(\sum_n(2n+1)c_ng_n\bigr)=\sum_n\hbar\omega(n+\tfrac12)c_n\psi_n=Bf$, and $\sum_n(\lambda_n')^2|c_n|^2=\frac{\hbar^2\omega^2}{4}\sum_n(2n+1)^2|c_n|^2<\infty$. Hence $B=H_{\mathrm{osc}}$, giving self-adjointness, the eigenvalue formulas $H_{\mathrm{osc}}\psi_n=\hbar\omega(n+\tfrac12)\psi_n$, the spectrum, the domain formula, the ground energy $\hbar\omega/2$ and the lower bound. [step 1.1, step 2.1, F1, F2]

4.1 [The differential expression on the core] For a polynomial $p$ put $F:=pg_0\in P$ and $f:=DF$, so $f(x)=\ell^{-1/2}p(x/\ell)g_0(x/\ell)$. By the chain rule and product rule [F5], $f$ is $C^\infty$ with $f'(x)=\ell^{-3/2}F'(x/\ell)$ and $f''(x)=\ell^{-5/2}F''(x/\ell)$. Since $\hbar^2/(2m\ell^2)=\hbar\omega/2$ and $m\omega^2\ell^2/2=\hbar\omega/2$ by $\ell^2=\hbar/(m\omega)$, for all $x$ one has $-\frac{\hbar^2}{2m}f''(x)+\frac{m\omega^2}{2}x^2f(x)=\ell^{-1/2}\bigl(-\frac{\hbar^2}{2m\ell^2}F''+\frac{m\omega^2\ell^2}{2}y^2F\bigr)\big|_{y=x/\ell}=\frac{\hbar\omega}{2}\ell^{-1/2}(-F''+y^2F)(x/\ell)$. By [F3], $-F''+y^2F=AF$ as functions on $\mathbb R$, because the operator identity on $P$ holds for the smooth representatives; hence the right side equals $\frac{\hbar\omega}{2}(DAF)(x)=H_{\mathrm{osc}}f(x)$ by step 3.1. This proves the pointwise identity. Moreover, if $\deg p\le m$, then $H_0,\dots,H_m$ have respective degrees $0,\dots,m$ and nonzero leading coefficients by [[thm-nrqm-oscillator-hermite-recurrence]]; triangular elimination shows that they span all polynomials of degree at most $m$. Since $g_n=H_ng_0/\sqrt{2^nn!}$, every $pg_0\in P$ is a finite linear combination of the $g_n$, and the reverse inclusion follows from $g_n\in P$. Thus $P=\operatorname{span}\{g_n\}$ and $D(P)=\operatorname{span}\{\psi_n\}$. Since $P$ is a core for $A$ by [F2], its image under the unitary $D$ is a core for $H_{\mathrm{osc}}=\frac{\hbar\omega}{2}DAD^{-1}$: for $f\in D(H_{\mathrm{osc}})$ with $D^{-1}f\in D(A)$ choose $\varphi_k\in P$ with $\varphi_k\to D^{-1}f$ and $A\varphi_k\to AD^{-1}f$; then $D\varphi_k\to f$ and $H_{\mathrm{osc}}(D\varphi_k)=\frac{\hbar\omega}{2}DA\varphi_k\to\frac{\hbar\omega}{2}DAD^{-1}f=H_{\mathrm{osc}}f$. [step 3.1, F2, F3, F5, algebra]

5.1 [Weak identity for general elements] Let $f\in D(H_{\mathrm{osc}})$ and $\varphi\in C_c^\infty(\mathbb R)$; put $S\varphi:=-\frac{\hbar^2}{2m}\varphi''+\frac{m\omega^2}{2}x^2\varphi$, an element of $L^2(\mathbb R)$ by [F6]. By step 4.1 with the core $D(P)$, choose $f_k\in D(P)$ with $f_k\to f$ and $H_{\mathrm{osc}}f_k\to H_{\mathrm{osc}}f$ in $L^2$. For each $k$, write $f_k=DF$ with $F\in P$; by applying [F5] separately to the real and imaginary parts on $[-R,R]$, and using the fact that $F$ is a polynomial times $g_0$, whose products with $\varphi$ and their derivatives tend to $0$ at $\pm\infty$, integrating by parts twice gives $\int_{\mathbb R}\bigl(-\frac{\hbar^2}{2m}f_k''+\frac{m\omega^2}{2}x^2f_k\bigr)\varphi\,dx=\int_{\mathbb R}f_k\bigl(-\frac{\hbar^2}{2m}\varphi''+\frac{m\omega^2}{2}x^2\varphi\bigr)dx$. By step 4.1 the left side is $\int(H_{\mathrm{osc}}f_k)\varphi$. Letting $k\to\infty$, [F6] and [F5] give $|\int(H_{\mathrm{osc}}f_k-H_{\mathrm{osc}}f)\varphi|\le\|H_{\mathrm{osc}}f_k-H_{\mathrm{osc}}f\|_2\|\varphi\|_2\to0$ and $|\int(f_k-f)S\varphi|\le\|f_k-f\|_2\|S\varphi\|_2\to0$, so the identity of the statement holds for $f$. [step 4.1, F5, F6]

6.1 [Summary of the hypotheses used] The construction uses only the completeness of $(g_n)$ (step 2.1), the diagonal lemma and spectrum (step 3.1), the eigenvalue equation on $P$ (step 4.1) and the two integration-by-parts limits (step 5.1); no claim identifies $D(H_{\mathrm{osc}})$ with the domain of a maximal differential expression, and no physical meaning is attached to $m,\omega,\hbar$ or to $f$. [step 2.1, step 3.1, step 4.1, step 5.1] ∎
