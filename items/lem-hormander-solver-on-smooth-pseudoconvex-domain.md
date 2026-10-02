---
id: lem-hormander-solver-on-smooth-pseudoconvex-domain
kind: lemma
title: Weighted ∂̄ solvability on a smoothly bounded pseudoconvex domain
status: published
origin: pipeline
deps:
  - def-weighted-l2-spaces-dbar-forms
  - lem-maximal-distributional-dbar-operator-is-closed
  - lem-hilbert-complex-solver-from-coercive-estimate
  - lem-weighted-morrey-estimate-on-smooth-pseudoconvex-domains
  - def-levi-pseudoconvex-domain
  - def-levi-form-and-strict-plurisubharmonicity
  - thm-distributional-differentiation-is-continuous-and-commutes
  - lem-clairaut-for-c2-potentials-by-rectangular-differences
  - thm-complex-spectral-theorem-for-normal-endomorphisms
  - thm-bessel-inequality-and-finite-parseval-identity
  - prop-self-adjoint-and-normal-matrix-criteria-in-orthonormal-bases
  - def-self-adjoint-and-normal-endomorphism
  - def-countable-choice
  - def-axiom-of-choice
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jean-Pierre Demailly, Complex Analytic and Differential Geometry"
      url: https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf
      locator: "Ch. VIII §4, Theorem 4.5 with its proof and Remark 4.8, printed pp. 370-372 (the A-weighted estimate and the smallest-eigenvalue bound); Ch. VIII §6, Theorem 6.5 with (6.4), printed pp. 377-378"
    - title: "Harold P. Boas, Lecture Notes on Several Complex Variables"
      url: https://haroldpboas.gitlab.io/courses/650-2019c/notes.pdf
      locator: "§3.3.3, printed pp. 81-85: the basic estimate and the resulting solvability of the ∂̄ equation in L2"
    - title: "Mohammad Jabbari, Several Complex Variables course notes"
      url: "https://www.cimat.mx/~mohammad.jabbari/course-SCV.pdf"
      locator: "§4.3, the energy estimate (4.4) and Theorem 72 applied to T=∂̄_{q-1}, S=∂̄_q, PDF pp. 85-87"
verification:
  audited: 2026-10-02
  precheck: pass
---

## Statement

Assume the Axiom of Choice (AC). Let $n\ge1$ and use one-based labels $z_j:=z_{j-1}^{\mathrm{can}}$ for $1\le j\le n$ and the corresponding derivatives. Let
$D\subseteq\mathbb C^n$ be a bounded Levi pseudoconvex domain with
$C^\infty$ boundary ([[def-levi-pseudoconvex-domain]]), let
$\varphi\in C^2(\overline D;\mathbb R)$ be strictly plurisubharmonic at every
point of $\overline D$ ([[def-levi-form-and-strict-plurisubharmonicity]]),
and let $1\le q\le n$. Write
$L^2_{0,k}:=L^2_{0,k}(D,e^{-\varphi})$ and let
$\bar\partial_k:\operatorname{Dom}\bar\partial_k\subseteq L^2_{0,k}\to
L^2_{0,k+1}$ denote the maximal distributional $\bar\partial$ of
[[def-weighted-l2-spaces-dbar-forms]], with
$\bar\partial_\varphi^*$ its weighted adjoint. For $a\in\overline D$ let
$\lambda_1(a)\le\cdots\le\lambda_n(a)$ be the eigenvalues of the Hermitian
matrix $(\varphi_{j\bar k}(a))$ and put
$w(a):=\lambda_1(a)+\cdots+\lambda_q(a)$, so that $w>0$ on $\overline D$.
Then for every $f\in\operatorname{Dom}\bar\partial_q$ with
$\bar\partial_qf=0$ there exists
$u\in\operatorname{Dom}\bar\partial_{q-1}$ with
$\bar\partial_{q-1}u=f$, and the least-norm such solution $u_0$, which lies
in $(\ker\bar\partial_{q-1})^\perp$, satisfies
$$\|u_0\|_\varphi^2\le\int_D\frac{|f|^2}{w}\,e^{-\varphi}\,dV .$$

## Facts & Assumptions

**Given:** The Axiom of Choice; an integer $n\ge1$; a bounded Levi pseudoconvex domain $D\subseteq\mathbb C^n$ with $C^\infty$ boundary; a weight $\varphi\in C^2(\overline D;\mathbb R)$ strictly plurisubharmonic at every point of $\overline D$; an integer $1\le q\le n$; the eigenvalues $\lambda_1(a)\le\cdots\le\lambda_n(a)$ of the Hermitian matrices $(\varphi_{j\bar k}(a))$ and the function $w:=\lambda_1+\cdots+\lambda_q$ on $\overline D$; and a form $f\in\operatorname{Dom}\bar\partial_q$ with $\bar\partial_qf=0$.

[F1] With the conventions of [[def-weighted-l2-spaces-dbar-forms]], the space $L^2_{0,q}(\Omega,e^{-\varphi})$ carries the inner product $\langle\cdot,\cdot\rangle_\varphi$ and is a complex Hilbert space, and $\bar\partial_q:\operatorname{Dom}\bar\partial_q\to L^2_{0,q+1}$ is the **maximal distributional $\bar\partial$** in degree $q$ (clauses (a) and (b) of that definition).

[F2] $\operatorname{Dom}\bar\partial_q$ is dense in $L^2_{0,q}$, and $\bar\partial_q$ is closed ([[lem-maximal-distributional-dbar-operator-is-closed]]).

[F3] Distributional derivatives satisfy $\partial^\alpha\partial^\beta u=\partial^{\alpha+\beta}u$ ([[thm-distributional-differentiation-is-continuous-and-commutes]]).

[F4] A domain with $C^2$ boundary is **Levi pseudoconvex** when for every boundary point $p$ there are a neighbourhood $U$ of $p$ and a function $\rho\in C^2(U,\mathbb R)$ with $D\cap U=\{\rho<0\}$, $d\rho(p)\ne0$, and $\mathcal L_\rho(p;v)\ge0$ for every complex tangent vector $v$ ([[def-levi-pseudoconvex-domain]]).

[F5] For $u\in C^2(\Omega,\mathbb R)$, $u$ is **strictly plurisubharmonic** when $\mathcal L_u(a;v)>0$ for every $a\in\Omega$ and every $v\ne0$ ([[def-levi-form-and-strict-plurisubharmonicity]]).

[F6] Weighted Morrey estimate ([[lem-weighted-morrey-estimate-on-smooth-pseudoconvex-domains]]): if $D$ is Levi pseudoconvex and $\lambda_1(a)\le\cdots\le\lambda_n(a)$ are the eigenvalues of $(\varphi_{j\bar k}(a))$, then $$\int_D(\lambda_1+\cdots+\lambda_q)|u|^2\,e^{-\varphi}\,dV\le\|\bar\partial u\|_\varphi^2+\|\bar\partial_\varphi^*u\|_\varphi^2 ,$$ and the inequality holds for **every** $u\in\operatorname{Dom}\bar\partial_q\cap\operatorname{Dom}\bar\partial_\varphi^*$.

[F7] The $A$-weighted form of the abstract Hilbert-complex solver ([[lem-hilbert-complex-solver-from-coercive-estimate]]): if $A\in\mathcal B(H_1)$ is bounded self-adjoint with $\langle Ax,x\rangle\ge0$ on $H_1$ and $$\langle Ax,x\rangle\le\|T^*x\|^2+\|Sx\|^2\qquad\text{for all }x\in D(T^*)\cap D(S),$$ and if $f\in\ker S$ has the form $f=Ag$ for some $g\in H_1$, then there exists $u\in D(T)$ with $Tu=f$, and the least-norm such $u_0$ satisfies $\|u_0\|^2\le\langle f,g\rangle$.

[F8] A finite-dimensional complex inner product space has an orthonormal basis of eigenvectors of every normal endomorphism, and a self-adjoint endomorphism is normal with $\langle Tv,w\rangle=\langle v,Tw\rangle$ ([[thm-complex-spectral-theorem-for-normal-endomorphisms]], [[prop-self-adjoint-and-normal-matrix-criteria-in-orthonormal-bases]], [[def-self-adjoint-and-normal-endomorphism]]).

[F9] AC states that every family of nonempty sets has a choice function ([[def-axiom-of-choice]]), and it supplies its countable instance ([[def-countable-choice]]).

[F10] For a function of class $C^2$ on an open subset of $\mathbb R^n$ the mixed partial derivatives commute, $\partial_j\partial_i\phi=\partial_i\partial_j\phi$ ([[lem-clairaut-for-c2-potentials-by-rectangular-differences]]).

[F11] With the conventions of [[def-weighted-l2-spaces-dbar-forms]] (c), the **weighted adjoint** is the Hilbert adjoint $\bar\partial_\varphi^*:L^2_{0,q}\supseteq\operatorname{Dom}\bar\partial_\varphi^*\to L^2_{0,q-1}$ of $\bar\partial_{q-1}$, and $v\in\operatorname{Dom}\bar\partial_\varphi^*$ holds exactly when the functional $u\mapsto\langle\bar\partial_{q-1}u,v\rangle_\varphi$ is continuous on $\operatorname{Dom}\bar\partial_{q-1}$ in the ambient norm.

[F12] Finite orthonormal lists satisfy the Bessel inequality, with Parseval equality for an orthonormal basis ([[thm-bessel-inequality-and-finite-parseval-identity]]).

**Choice use.** AC is the ambient hypothesis recorded in the Statement and cited as [F9]; the countable instance $\mathrm{AC}_\omega$ is consumed by the closedness and density facts [F2] and by the extension step inside claim (iv) of [F7]. The proof itself selects nothing beyond those countable instances: the eigenvalue functions are determined by $\varphi$, the multiplier $A$ is determined by $w$, and $g=f/w$ is determined by $f$ and $\varphi$.

## Proof

**Proof technique:** direct.

1.1 Write $H_0:=L^2_{0,q-1}$, $H_1:=L^2_{0,q}$ and $H_2:=L^2_{0,q+1}$, and let $T:=\bar\partial_{q-1}:H_0\supseteq D(T)\to H_1$ and $S:=\bar\partial_q:H_1\supseteq D(S)\to H_2$ be the maximal distributional operators of [F1](b): the three spaces are complex Hilbert spaces by [F1](a), and $T$ and $S$ are closed densely defined linear operators by [F2]. [F1, F2, given]

1.2 $T(D(T))\subseteq\ker S$, i.e. $S\circ T=0$ on $D(T)$: for $u\in D(T)$ the form $v:=Tu$ has $L^2$ coefficients $v_K$ which represent the coefficient distributions $\sum_{j}\frac{\partial u_J}{\partial\bar z_j}\,d\bar z_j\wedge d\bar z^J$ of [F1] on the tuples $K$ with $|K|=q$, each of the form $\sum_{j\in K}\pm D_ju_{K\setminus j}$ with the shuffle signs of the exterior algebra; applying $\bar\partial_q$ to $v$ therefore gives, on each increasing tuple $L$ with $|L|=q+1$, a coefficient distribution $\sum_{j\ne k\in L}\pm D_kD_ju_{L\setminus\{j,k\}}$ in which the term belonging to the ordered pair $(j,k)$ and the term belonging to $(k,j)$ carry the shuffle signs of $d\bar z_k\wedge d\bar z_j$ and $d\bar z_j\wedge d\bar z_k$, hence opposite signs; since distributional derivatives commute, $D_kD_ju_J=D_jD_ku_J$ as distributions by [F3], the two terms cancel and every coefficient distribution of $\bar\partial v$ vanishes; the zero distribution is represented by the zero $L^2$ form, so $v\in\operatorname{Dom}\bar\partial_q$ with $\bar\partial_qv=0$, as required. [F1, F3, given, algebra]

1.3 Write $H(a):=(\varphi_{j\bar k}(a))$ and $B(a):=H(a)^T$. Reality of $\varphi$ and [F10] give $H_{j k}=\overline{H_{k j}}$, so both $H$ and $B$ are Hermitian. They have the same characteristic polynomial, since $\det(tI-H^T)=\det(tI-H)$, and therefore the same ordered eigenvalues $\lambda_i$. With the first-variable-linear inner product, the correct identity is $$\mathcal L_\varphi(a;v)=\sum_{j,k}H_{j k}(a)v_j\overline{v_k}=\langle B(a)v,v\rangle.$$ Thus $B$ is positive definite by [F5], and [F8] gives $\lambda_1(a)=\min_{|v|=1}\langle B(a)v,v\rangle>0$. For every unit vector, $$|\langle(B(a)-B(b))v,v\rangle|\le n\max_{j,k}|H_{j k}(a)-H_{j k}(b)|.$$ Taking minima on the unit sphere shows that $\lambda_1$ is continuous. Also $w(a)$ is the minimum of $\sum_{i=1}^q\langle B(a)v_i,v_i\rangle$ over orthonormal $q$-frames. Indeed expansion in an eigenbasis gives $\sum_j\lambda_jm_j$, where $0\le m_j\le1$ and $\sum_jm_j=q$ by [F12]; subtracting $\sum_{j\le q}\lambda_j$ and bounding each term by $\lambda_q(m_j-1)$ for $j\le q$, or $\lambda_qm_j$ for $j>q$, gives a nonnegative difference. The first $q$ eigenvectors attain equality. The preceding uniform bound on unit-vector quotients now gives $|w(a)-w(b)|\le qn\max_{j,k}|H_{j k}(a)-H_{j k}(b)|$, so $w$ is continuous. On compact $\overline D$, put $\delta:=\min\lambda_1>0$ and $M:=\max_{j,k}\sup_{\overline D}|H_{j k}|<\infty$. The same unit-vector bound gives $q\delta\le w\le qnM$. [F5, F8, F10, F12, given, algebra]

2.1 Define $A:H_1\to H_1$ coefficientwise by $(Av)_K:=w\,v_K$ for $|K|=q$; since $w$ is real-valued, measurable and bounded with $0<q\delta\le w\le qnM<\infty$ by step 1.3, $A$ is a bounded linear operator on $H_1$ with $\|A\|\le qnM$, self-adjoint because $\langle Av,v'\rangle_\varphi=\int_D\sum_{|K|=q}w\,v_K\overline{v'_K}e^{-\varphi}dV=\langle v,Av'\rangle_\varphi$ for $v,v'\in H_1$, and nonnegative because $\langle Av,v\rangle_\varphi=\int_Dw|v|^2e^{-\varphi}dV\ge0$. [F1, step 1.3, given, algebra]

3.1 For every $x\in D(T^*)\cap D(S)$ one has $\langle Ax,x\rangle_\varphi\le\|T^*x\|^2+\|Sx\|^2$: here $D(T^*)=\operatorname{Dom}\bar\partial_\varphi^*$ and $D(S)=\operatorname{Dom}\bar\partial_q$ by [F1] and [F11], and $D$ is Levi pseudoconvex as assumed ([F4]), so the weighted Morrey estimate [F6], whose two clauses are the inequality and its extension to the maximal domains, applies to $x$ and gives $\langle Ax,x\rangle_\varphi=\int_Dw|x|^2e^{-\varphi}dV\le\|\bar\partial x\|_\varphi^2+\|\bar\partial_\varphi^*x\|_\varphi^2=\|Sx\|^2+\|T^*x\|^2$. [F1, F4, F6, F11, step 2.1, given, algebra]

3.2 Put $g:=f/w$, that is, the $(0,q)$-form with coefficients $g_K:=f_K/w$ for $|K|=q$; since $w\ge q\delta>0$ by step 1.3, the estimate $|g|\le|f|/(q\delta)$ shows $g\in L^2_{0,q}=H_1$, and by step 2.1, $Ag=w\cdot(f/w)=f$; moreover $\langle f,g\rangle_\varphi=\int_D\sum_{|K|=q}|f_K|^2w^{-1}e^{-\varphi}dV=\int_D|f|^2w^{-1}e^{-\varphi}dV$. [F1, step 1.3, step 2.1, given, algebra]

4.1 Claim (iv) of [F7] applies with the Hilbert spaces $H_0,H_1,H_2$ and the operators $T,S$ of step 1.1, the bounded self-adjoint nonnegative multiplier $A$ of step 2.1, the datum $f\in\ker S$ (which is the hypothesis $\bar\partial_qf=0$ of the theorem) and the element $g$ of step 3.2: the closedness, density and composition requirements are steps 1.1 and 1.2, the domination hypothesis is step 3.1 and the range form $f=Ag$ is step 3.2, so [F7] yields a solution $u\in D(T)$ with $Tu=f$ whose least-norm representative $u_0\in(\ker T)^\perp$ satisfies $\|u_0\|^2\le\langle f,g\rangle$. [F7, step 1.1, step 1.2, step 2.1, step 3.1, step 3.2, given, algebra]

5.1 Unwinding step 4.1: $\bar\partial_{q-1}u_0=f$ with $u_0\in\operatorname{Dom}\bar\partial_{q-1}$ and $u_0\in(\ker\bar\partial_{q-1})^\perp$, and by steps 3.2 and 4.1, $\|u_0\|_\varphi^2\le\langle f,g\rangle_\varphi=\int_D|f|^2w^{-1}e^{-\varphi}dV$, so $u_0$ is a solution of $\bar\partial_{q-1}u=f$ obeying the stated weighted bound and is the least-norm one; the ambient AC and its countable instance are used exactly as recorded in the choice-use paragraph, through [F2] and through claim (iv) of [F7]. [F2, F7, F9, step 1.2, step 3.1, step 3.2, step 4.1, given, algebra] ∎
