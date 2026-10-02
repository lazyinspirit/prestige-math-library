---
id: thm-basic-bochner-kodaira-morrey-estimate-cn
kind: theorem
title: "Basic Bochner–Kodaira–Morrey estimate on $\\mathbb C^n$"
status: draft
origin: pipeline
deps:
  - def-weighted-l2-spaces-dbar-forms
  - lem-maximal-distributional-dbar-operator-is-closed
  - prop-basic-wedge-is-multilinear-and-alternating
  - thm-exterior-algebra-laws
  - lem-wedge-monomials-in-a-dual-basis-form-a-basis
  - def-wirtinger-operators-in-several-complex-variables
  - def-levi-form-and-strict-plurisubharmonicity
  - thm-c-two-levi-criterion-for-plurisubharmonicity
  - lem-clairaut-for-c2-potentials-by-rectangular-differences
  - thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz
  - thm-choice-implies-dependent-implies-countable-choice
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
      locator: "Ch. VII §1 (1.2), printed p. 330 (Bochner–Kodaira–Nakano identity); Ch. VIII §4 (4.1)–(4.2), printed pp. 370-371 (general d'' estimate)"
    - title: "Harold P. Boas, Lecture Notes on Several Complex Variables"
      url: https://haroldpboas.gitlab.io/courses/650-2019c/notes.pdf
      locator: "§3.3.3, printed pp. 81-85: the basic estimate proved by integration by parts, and Exercise 38 for the weighted computation"
    - title: "Mohammad Jabbari, Several Complex Variables course notes"
      url: https://www.cimat.mx/~mohammad.jabbari/course-SCV.pdf
      locator: "§4.3, Theorem 84 and Lemma 85, PDF pp. 97-98 (weighted L2 estimate for the d-bar problem)"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Statement

Assume the Axiom of Choice (AC). Let $\Omega\subseteq\mathbb C^n$ be open with $n\ge1$. Use one-based labels $z_j:=z_{j-1}^{\mathrm{can}}$ for $1\le j\le n$, also for their derivatives and form coefficients. Let $\varphi\in C^2(\Omega;\mathbb R)$, write

$$D_k:=\frac{\partial}{\partial\bar z_k},\qquad \varphi_j:=\frac{\partial\varphi}{\partial z_j},\qquad \varphi_{j\bar k}:=\frac{\partial^2\varphi}{\partial z_j\partial\bar z_k},$$

let $1\le q\le n$, and let $u$ be a compactly supported smooth $(0,q)$-form on $\Omega$, with coefficients $u_J$ on increasing tuples extended to non-increasing tuples by antisymmetry, so that $u_{jJ}=0$ when $j\in J$ ([[def-weighted-l2-spaces-dbar-forms]]); the operators $\partial_{z_j},\partial_{\bar z_j}$ are those of [[def-wirtinger-operators-in-several-complex-variables]]. All sums over multi-indices below run over increasing tuples, $\langle\cdot,\cdot\rangle_\varphi$ and $\|\cdot\|_\varphi$ are the inner product and norm of $L^2_{0,\bullet}(\Omega,e^{-\varphi})$, and $\bar\partial_\varphi^*$ is the weighted Hilbert adjoint of $\bar\partial_{q-1}$ ([[def-weighted-l2-spaces-dbar-forms]]).

1. **(Exact Bochner–Kodaira–Morrey form.)** The following identity holds, all integrals being finite:

$$\|\bar\partial u\|_\varphi^2+\|\bar\partial_\varphi^*u\|_\varphi^2=\sum_{|J|=q}\ \sum_{k=1}^n\int_\Omega|D_ku_J|^2\,e^{-\varphi}\,dV+\int_\Omega\sum_{|J|=q-1}\ \sum_{j,k=1}^n\varphi_{j\bar k}u_{jJ}\overline{u_{kJ}}\,e^{-\varphi}\,dV .$$

2. **(Levi inequality.)** If in addition $\varphi$ is plurisubharmonic on $\Omega$, then

$$\|\bar\partial u\|_\varphi^2+\|\bar\partial_\varphi^*u\|_\varphi^2\ \ge\ \int_\Omega\sum_{|J|=q-1}\ \sum_{j,k=1}^n\varphi_{j\bar k}u_{jJ}\overline{u_{kJ}}\,e^{-\varphi}\,dV .$$

## Facts & Assumptions

**Given:** The Axiom of Choice; an open set $\Omega\subseteq\mathbb C^n$ with $n\ge1$; a function $\varphi\in C^2(\Omega;\mathbb R)$; an integer $1\le q\le n$; a compactly supported smooth $(0,q)$-form $u$; and the notation $e_j:=d\bar z_j$, $D_j:=\partial_{\bar z_j}$, $\delta_j:=\varphi_j-\partial_{z_j}$ acting coefficientwise, where the Wirtinger operators $\partial_{z_j},\partial_{\bar z_j}$ are those fixed in the Statement, so that the holomorphic derivative, and not $D_j=\partial_{\bar z_j}$, appears in $\delta_j$; further $\varepsilon_jf:=e_j\wedge f$ on coefficient tensors, and $(\iota_jw)_K:=w_{jK}$ for increasing $K$.

[F1] The weighted inner product and norm on coefficient tuples of bidegree $(0,q)$ are $\langle v,w\rangle_\varphi=\int_\Omega\sum_{|J|=q}v_J\overline{w_J}e^{-\varphi}dV$ and $\|v\|_\varphi^2=\langle v,v\rangle_\varphi$ ([[def-weighted-l2-spaces-dbar-forms]]).

[F2] The distributional derivative of $u\in L^2_{0,q}$ is $\bar\partial u=\sum_{|J|=q}\sum_{j=1}^n(\partial u_J/\partial\bar z_j)\,d\bar z_j\wedge d\bar z^J$ ([[def-weighted-l2-spaces-dbar-forms]]).

[F3] The weighted adjoint is characterized by $\langle\bar\partial_{q-1}v,w\rangle_\varphi=\langle v,\bar\partial_\varphi^*w\rangle_\varphi$ for all $v\in\operatorname{Dom}\bar\partial_{q-1}$ and $w\in\operatorname{Dom}\bar\partial_\varphi^*$ ([[def-weighted-l2-spaces-dbar-forms]]).

[F4] Coefficients are extended to non-increasing tuples by antisymmetry, so that $v_{jK}=0$ when $j\in K$ ([[def-weighted-l2-spaces-dbar-forms]]).

[F5] The conventions $L^2_{0,q}=\{0\}$ and $\bar\partial_q=0$ are in force for $q<0$ and for $q>n$ ([[def-weighted-l2-spaces-dbar-forms]]).

[F6] For $1\le q\le n$ every $\psi\in C_c^\infty(\Omega)$ of bidegree $(0,q)$ lies in $\operatorname{Dom}\bar\partial_\varphi^*$, and $(\bar\partial_\varphi^*\psi)_K=\sum_{j=1}^n(\psi_{jK}\varphi_j-\partial_{z_j}\psi_{jK})$ ([[lem-maximal-distributional-dbar-operator-is-closed]]).

[F7] Wedge multiplication of basis vectors is multilinear and alternating, so $e_i\wedge e_i=0$ and transposing two neighbouring entries changes the sign; it is also associative, and the strictly increasing monomials form a basis; hence for a distinct $i$ and an increasing tuple $I=(i_1<\cdots<i_p)$ one has $e_i\wedge e_I=(-1)^{\#\{i_j<i\}}e_{\operatorname{sort}(\{i\}\cup I)}$, while $e_i\wedge e_I=0$ when $i\in I$ ([[prop-basic-wedge-is-multilinear-and-alternating]], [[thm-exterior-algebra-laws]], [[lem-wedge-monomials-in-a-dual-basis-form-a-basis]]).

[F8] The Levi form is $\mathcal L_u(a;v)=\sum_{j=1}^m\sum_{k=1}^m\frac{\partial^2u}{\partial z_j\partial\overline z_k}(a)v_j\overline{v_k}$ ([[def-levi-form-and-strict-plurisubharmonicity]]).

[F9] A $C^2$ real-valued function is plurisubharmonic if and only if its Levi form is pointwise semidefinite nonnegative ([[thm-c-two-levi-criterion-for-plurisubharmonicity]]).

[F10] For a function with continuous second partial derivatives, $\partial_j\partial_i\phi=\partial_i\partial_j\phi$ ([[lem-clairaut-for-c2-potentials-by-rectangular-differences]]).

[F11] On every measure space the complex $L^2$ pairing is linear in the first variable, conjugate-linear in the second, conjugate symmetric and positive definite ([[thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz]]).

[F12] $\mathrm{AC}\Rightarrow\mathrm{DC}\Rightarrow\mathrm{AC}_\omega$ in ZF ([[thm-choice-implies-dependent-implies-countable-choice]]).

[F13] The Axiom of Countable Choice $\mathrm{AC}_\omega$ supplies a choice function for every at most countable family of nonempty sets ([[def-countable-choice]]).

[F14] The Axiom of Choice supplies a choice function for every family of nonempty sets ([[def-axiom-of-choice]]).

**Choice use.** AC is the ambient hypothesis recorded in the Statement and cited as [F14]; the countable instance [F13] is the form of choice consumed by the constructions behind [F1] (completeness and density of the weighted space) and [F6] (the maximal operator and its adjoint on compactly supported smooth forms), and [F12] is the exact implication AC $\Rightarrow$ DC $\Rightarrow$ AC$_\omega$ supplying it. The proof itself selects no family of nonempty sets: the form, its coefficients, the weight and the finitely many index sets in the sums are all given.

## Proof

**Proof technique:** direct.

1.1 The notation of the given block is well defined on coefficient tensors, and for increasing $L$ the sign rule [F7] gives $e_k\wedge e_L=\epsilon(k,L)e_{L\cup k}$ for $k\notin L$ and $e_k\wedge e_L=0$ for $k\in L$, while the antisymmetry convention [F4] gives $\iota_je_L=\epsilon(j,L\setminus j)e_{L\setminus j}$ for $j\in L$ and $\iota_je_L=0$ for $j\notin L$, where $\epsilon(a,M):=(-1)^{\#\{m\in M:\,m<a\}}$; consequently the Clifford relation $\iota_j\varepsilon_k+\varepsilon_k\iota_j=\delta_{jk}\mathrm{id}$ holds, because for $j=k\in L$ one has $\iota_j\varepsilon_je_L=0$ and $\varepsilon_j\iota_je_L=e_L$, for $j=k\notin L$ one has $\iota_j\varepsilon_je_L=e_L$ and $\varepsilon_j\iota_je_L=0$, for $j\ne k$ with $j\notin L$ both terms vanish since an index occurring twice wedges to zero, and for $j\ne k$ with $j\in L$ the terms vanish when $k\in L$ and otherwise cancel by the sign identity $\epsilon(k,L)\epsilon(j,(L\setminus j)\cup k)=-\epsilon(j,L\setminus j)\epsilon(k,L\setminus j)$, whose two exponents differ by exactly one because exactly one of $j<k$, $k<j$ holds. [F4, F7, given, algebra]

1.2 For coefficient tensors $f$ of degree $p$ and $w$ of degree $p+1$ with compactly supported smooth coefficients, $\langle\varepsilon_jf,w\rangle_\varphi=\langle f,\iota_jw\rangle_\varphi$: by [F11] both sides are sesquilinear in $(f,w)$, and on constant basis tensors $f=e_I$, $w=e_L$ the formulas above from [F7] and [F4] give $(\varepsilon_je_I)_L=\epsilon(j,I)\delta_{L,I\cup j}$ and $(\iota_je_L)_I=\epsilon(j,L\setminus j)\delta_{I,L\setminus j}$, which are equal since $L=I\cup j$ exactly when $I=L\setminus j$; multiplying the pointwise identity by the positive factor $e^{-\varphi}$ and integrating with the pairing of [F1] gives the weighted statement. [F1, F4, F7, F11, given, algebra]

1.3 For all $f,g\in C_c^\infty(\Omega)$ one has $\langle D_jf,g\rangle_\varphi=\langle f,\delta_jg\rangle_\varphi$, and hence also $\langle\delta_jf,g\rangle_\varphi=\langle f,D_jg\rangle_\varphi$ by conjugate symmetry; indeed, $f$ is a compactly supported smooth $(0,0)$-form and $ge_j$ a compactly supported smooth $(0,1)$-form lying in $\operatorname{Dom}\bar\partial_\varphi^*$ with $\bar\partial_\varphi^*(ge_j)=\delta_jg$ by [F6], while [F2] gives $\bar\partial f=\sum_kD_kf\,e_k$, so the characterizing identity [F3] reads $\sum_k\delta_{kj}\langle D_kf,g\rangle_\varphi=\langle f,\delta_jg\rangle_\varphi$. [F1, F2, F3, F6, F11, given, algebra]

1.4 On compactly supported smooth forms the operator identities $\bar\partial=\sum_k\varepsilon_kD_k$ and $\bar\partial_\varphi^*=\sum_j\iota_j\delta_j$ hold pointwise in the increasing coefficients, the first because [F2] expands $\bar\partial$ as the sum of the wedges $(D_ku_J)e_k\wedge e_J$, and the second because the coefficient formula of [F6] is $\sum_j\delta_j(\psi_{jK})$ on each increasing $K$, which is what $\sum_j\iota_j\delta_j$ produces; consequently the self-adjoint-shaped operator $\Box:=\bar\partial_\varphi^*\bar\partial+\bar\partial\bar\partial_\varphi^*$ satisfies $\Box=\sum_{j,k}(\iota_j\delta_j\varepsilon_kD_k+\varepsilon_kD_k\iota_j\delta_j)$ on those forms. [F2, F6, given, algebra]

2.1 The operator identity $\Box=\sum_j\delta_jD_j+\sum_{j,k}\varphi_{j\bar k}\varepsilon_k\iota_j$ holds on compactly supported smooth forms: by the identities of step 1.4, the constant-coefficient form operators $\varepsilon_k,\iota_j$ commute with the coefficientwise operators $\delta_j,D_k$, and by the Clifford relation of step 1.1 one has $\iota_j\delta_j\varepsilon_kD_k=\iota_j\varepsilon_k\delta_jD_k=\delta_{jk}\delta_jD_k-\varepsilon_k\iota_j\delta_jD_k$ and $\varepsilon_kD_k\iota_j\delta_j=\varepsilon_k\iota_jD_k\delta_j$, so $\Box=\sum_j\delta_jD_j+\sum_{j,k}\varepsilon_k\iota_j(D_k\delta_j-\delta_jD_k)$; the commutator acting coefficientwise is the multiplication operator $D_k\varphi_j$, since the coefficientwise derivatives commute and only the term where $D_k$ hits $\varphi_j$ survives, and $D_k\varphi_j=\partial_{\bar z_k}\partial_{z_j}\varphi=\varphi_{j\bar k}$ by clairaut [F10]. [F10, step 1.1, step 1.4, given, algebra]

2.2 The left-hand side of claim 1 equals $\langle\Box u,u\rangle_\varphi$: since $u$ and its images are compactly supported smooth forms lying in the relevant domains, with $\bar\partial u=0$ by the degree convention [F5] when $q=n$, the characterizing adjoint identity [F3] applied to the pairs $(u,\bar\partial u)$ and $(\bar\partial_\varphi^*u,u)$ gives $\langle u,\bar\partial_\varphi^*\bar\partial u\rangle_\varphi=\langle\bar\partial u,\bar\partial u\rangle_\varphi=\|\bar\partial u\|_\varphi^2$ and $\langle\bar\partial\bar\partial_\varphi^*u,u\rangle_\varphi=\langle\bar\partial_\varphi^*u,\bar\partial_\varphi^*u\rangle_\varphi=\|\bar\partial_\varphi^*u\|_\varphi^2$, while conjugate symmetry [F11] turns the first expression into $\langle\bar\partial_\varphi^*\bar\partial u,u\rangle_\varphi$ because [F1] makes it a real number; adding the two terms and using the definition of $\Box$ from step 1.4 gives the claim. [F1, F3, F5, F6, F11, step 1.4, given, algebra]

3.1 The two summands of $\langle\Box u,u\rangle_\varphi$ evaluate as $\sum_j\langle\delta_jD_ju,u\rangle_\varphi=\sum_j\langle D_ju,D_ju\rangle_\varphi=\sum_{|J|=q}\sum_k\int_\Omega|D_ku_J|^2e^{-\varphi}dV$ by the adjoint identity of step 1.3, and $\sum_{j,k}\langle\varphi_{j\bar k}\varepsilon_k\iota_ju,u\rangle_\varphi=\sum_{j,k}\langle\varepsilon_k(\varphi_{j\bar k}\iota_ju),u\rangle_\varphi=\sum_{j,k}\langle\varphi_{j\bar k}\iota_ju,\iota_ku\rangle_\varphi=\sum_{j,k}\int_\Omega\sum_{|J|=q-1}\varphi_{j\bar k}u_{jJ}\overline{u_{kJ}}e^{-\varphi}dV$ by the adjointness of step 1.2, the scalar commutation of $\varepsilon_k$ and the pairing formula [F1]; adding these two evaluations through the decomposition of step 2.1 and combining with step 2.2 proves claim 1. [F1, step 1.2, step 1.3, step 2.1, step 2.2, algebra]

4.1 If $\varphi$ is plurisubharmonic, the Levi criterion [F9] applied to the Levi form [F8] gives $\sum_{j,k}\varphi_{j\bar k}(a)\xi_j\overline{\xi_k}\ge0$ for every $a\in\Omega$ and $\xi\in\mathbb C^n$, and applying this at each point with the given coefficients $\xi_j:=u_{jJ}(a)$, for every increasing $J$ of size $q-1$, exhibits the integrand of the second term in step 3.1 as a sum of nonnegative quantities; the first term of step 3.1 is a sum of squares of absolute values, hence also nonnegative, so dropping it from the identity of claim 1 yields the inequality of claim 2. [F8, F9, step 3.1, given, algebra]

5.1 Both claims of the Statement are proved: claim 1 is the identity assembled in step 3.1, and claim 2 follows from it by the nonnegativity established in step 4.1; the ambient hypothesis is the AC recorded in the Statement and cited as [F14], its countable instance is [F13] as supplied through [F12] by the interfaces [F1] and [F6], and no family of nonempty sets is selected anywhere in the argument. [F12, F13, F14, step 3.1, step 4.1] ∎
