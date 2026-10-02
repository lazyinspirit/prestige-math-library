---
id: lem-weighted-morrey-estimate-on-smooth-pseudoconvex-domains
kind: lemma
title: Weighted Morrey–Kohn estimate with a pseudoconvex boundary term
status: draft
origin: pipeline
deps:
  - def-weighted-l2-spaces-dbar-forms
  - lem-maximal-distributional-dbar-operator-is-closed
  - def-levi-form-and-strict-plurisubharmonicity
  - def-levi-pseudoconvex-domain
  - prop-basic-wedge-is-multilinear-and-alternating
  - thm-exterior-algebra-laws
  - lem-wedge-monomials-in-a-dual-basis-form-a-basis
  - lem-clairaut-for-c2-potentials-by-rectangular-differences
  - def-wirtinger-operators-in-several-complex-variables
  - thm-complex-spectral-theorem-for-normal-endomorphisms
  - prop-self-adjoint-and-normal-matrix-criteria-in-orthonormal-bases
  - def-self-adjoint-and-normal-endomorphism
  - thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz
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
    - title: "Harold P. Boas, Lecture Notes on Several Complex Variables"
      url: https://haroldpboas.gitlab.io/courses/650-2019c/notes.pdf
      locator: "§3.3.3, printed pp. 81-85: formulas (3.3)-(3.5), the ∂̄-Neumann boundary condition (3.4), and Exercise 38 for the weighted computation"
    - title: "Jean-Pierre Demailly, Complex Analytic and Differential Geometry"
      url: https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf
      locator: "Ch. VIII §4 (4.1)-(4.2) and §6 (6.4)-(6.5), printed pp. 370-373: general estimate and smallest-eigenvalue bound"
    - title: "Friedrich Haslinger, Complex analysis, the dbar-Neumann problem, and Schrodinger operators (author manuscript)"
      url: https://www.mat.univie.ac.at/~has/dbar/dbar1.pdf
      locator: "§4, Proposition 4.12 and its complete proof via Lemmas 4.14-4.16, printed pp. 45-49; boundary criterion (4.31) and its necessity/sufficiency proof, printed p. 48."
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice (AC). Let $n\ge1$, and use $z_j$ for the canonical coordinate $z_{j-1}$, $1\le j\le n$, with the same relabeling for derivatives and form coefficients. Let $D\subseteq\mathbb C^n$ be a
bounded domain with $C^\infty$ boundary, let $\rho\in C^\infty(\overline D;\mathbb R)$
be a defining function with $D=\{z\in\overline D:\rho(z)<0\}$ and
$|\nabla\rho|=1$ on $\partial D$, let $\varphi\in C^2(\overline D;\mathbb R)$,
let $1\le q\le n$, and let $u\in C^\infty(\overline D;\Lambda^{0,q})$ satisfy
the **∂̄-Neumann boundary condition**
$$\sum_{j=1}^n u_{jK}\,\frac{\partial\rho}{\partial z_j}=0\quad\text{on }\partial D,\qquad\text{for every }K\text{ with }|K|=q-1, \tag{BC}$$
where $u_{jK}$ is the antisymmetric coefficient of $u$ on the tuple $(j,K)$ and
$dS$ denotes $(2n-1)$-dimensional surface measure on $\partial D$. Then:

1. $u\in\operatorname{Dom}\bar\partial_\varphi^*$, and the exact identity
$$\|\bar\partial u\|_\varphi^2+\|\bar\partial_\varphi^*u\|_\varphi^2=\sum_{|J|=q}\sum_{k=1}^n\int_D|D_ku_J|^2\,e^{-\varphi}\,dV+\int_D\sum_{|K|=q-1}\sum_{j,k=1}^n\varphi_{j\bar k}u_{jK}\overline{u_{kK}}\,e^{-\varphi}\,dV+\int_{\partial D}\sum_{|K|=q-1}\sum_{j,k=1}^n\rho_{j\bar k}u_{jK}\overline{u_{kK}}\,e^{-\varphi}\,dS$$
holds, with $D_k=\partial_{\bar z_k}$ and $\rho_{j\bar k}=\partial_{z_j}\partial_{\bar z_k}\rho$.

2. If $D$ is Levi pseudoconvex, the boundary term is nonnegative and therefore
$$\int_D\sum_{|K|=q-1}\sum_{j,k=1}^n\varphi_{j\bar k}u_{jK}\overline{u_{kK}}\,e^{-\varphi}\,dV\le\|\bar\partial u\|_\varphi^2+\|\bar\partial_\varphi^*u\|_\varphi^2 .$$

3. If $D$ is Levi pseudoconvex and $\lambda_1(a)\le\cdots\le\lambda_n(a)$
denote the eigenvalues of the Hermitian matrix $(\varphi_{j\bar k}(a))$, then
$$\int_D(\lambda_1+\cdots+\lambda_q)|u|^2\,e^{-\varphi}\,dV\le\|\bar\partial u\|_\varphi^2+\|\bar\partial_\varphi^*u\|_\varphi^2 .$$

4. If $D$ is Levi pseudoconvex, the inequality of claim 3 holds for **every** $u\in\operatorname{Dom}\bar\partial_q\cap\operatorname{Dom}\bar\partial_\varphi^*$.

## Facts & Assumptions
**Given:** The Axiom of Choice; a bounded domain $D\subseteq\mathbb C^n$ with $C^\infty$ boundary; a defining function $\rho$ normalized by $|\nabla\rho|=1$ on $\partial D$; a weight $\varphi\in C^2(\overline D;\mathbb R)$; an integer $1\le q\le n$; and a form $u\in C^\infty(\overline D;\Lambda^{0,q})$ satisfying (BC); the conventions $\varepsilon_jv:=d\bar z_j\wedge v$ and $(\iota_jv)_K:=v_{jK}$ on coefficient tensors, $D_j:=\partial_{\bar z_j}$ and $\delta_j:=\varphi_j-\partial_{z_j}$ acting coefficientwise, and $\bar\partial_0^*$ for the unweighted Hilbert adjoint of $\bar\partial$ (the case $\varphi\equiv0$ of the operators of [F1]), whose formal density on its smooth domain is $-\sum_j\iota_j\partial_{z_j}$.

[F1] The weighted space, its pairing $\langle v,w\rangle_\varphi=\int_D\sum_{|J|=q}v_J\overline{w_J}e^{-\varphi}dV$, the maximal distributional $\bar\partial$, and the weighted Hilbert adjoint $\bar\partial_\varphi^*$ with its formal density $(\bar\partial_\varphi^*v)_K=\sum_j(v_{jK}\varphi_j-\partial_{z_j}v_{jK})$ on its domain are as in [[def-weighted-l2-spaces-dbar-forms]]; coefficients are extended to non-increasing tuples by antisymmetry, so $v_{jK}=0$ when $j\in K$.

[F2] For every $\psi\in C_c^\infty(D)$ of bidegree $(0,q)$ one has $\psi\in\operatorname{Dom}\bar\partial_\varphi^*$ ([[lem-maximal-distributional-dbar-operator-is-closed]]).

[F3] Wedge multiplication of basis vectors is multilinear and alternating, so $e_i\wedge e_i=0$ and transposing two neighbouring entries changes the sign; it is also associative, and the strictly increasing monomials form a basis; hence for a distinct $i$ and an increasing tuple $I=(i_1<\cdots<i_p)$ one has $e_i\wedge e_I=(-1)^{\#\{i_j<i\}}e_{\operatorname{sort}(\{i\}\cup I)}$, while $e_i\wedge e_I=0$ when $i\in I$ ([[prop-basic-wedge-is-multilinear-and-alternating]], [[thm-exterior-algebra-laws]], [[lem-wedge-monomials-in-a-dual-basis-form-a-basis]]).

[F4] The Levi form is $\mathcal L_w(a;v)=\sum_{j,k}\frac{\partial^2w}{\partial z_j\partial\overline z_k}(a)v_j\overline{v_k}$ ([[def-levi-form-and-strict-plurisubharmonicity]]).

[F5] A domain with $C^2$ boundary is Levi pseudoconvex when for every $p\in\partial D$ there are a neighbourhood $U$ of $p$ and $\rho\in C^2(U,\mathbb R)$ with $D\cap U=\{\rho<0\}$, $d\rho(p)\ne0$, and $\mathcal L_\rho(p;v)\ge0$ for every $v\in\mathbb C^n$ with $\sum_j\frac{\partial\rho}{\partial z_j}(p)v_j=0$ ([[def-levi-pseudoconvex-domain]]).

[F6] For functions with continuous second partial derivatives, $\partial_j\partial_i\phi=\partial_i\partial_j\phi$ ([[lem-clairaut-for-c2-potentials-by-rectangular-differences]]).

[F7] The Wirtinger operators are $\partial_{z_j}=\tfrac12(\partial_{x_j}-i\partial_{y_j})$ and $\partial_{\bar z_j}=\tfrac12(\partial_{x_j}+i\partial_{y_j})$ ([[def-wirtinger-operators-in-several-complex-variables]]).

[F8] A normal endomorphism of a finite-dimensional complex inner product space has an orthonormal eigenbasis, and a self-adjoint endomorphism is normal ([[thm-complex-spectral-theorem-for-normal-endomorphisms]], [[prop-self-adjoint-and-normal-matrix-criteria-in-orthonormal-bases]], [[def-self-adjoint-and-normal-endomorphism]]).

[F9] On every measure space the complex $L^2$ pairing satisfies $|\langle f,g\rangle|\le\|f\|_2\|g\|_2$, also for finite tuples ([[thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz]]).

[F10] $\mathrm{AC}\Rightarrow\mathrm{AC}_\omega$ in ZF, and $\mathrm{AC}_\omega$ supplies a choice function for every at most countable family of nonempty sets ([[def-countable-choice]], [[def-axiom-of-choice]]).

[F11] (Boas, §3.3.3, printed pp. 81-84: formulas (3.3)-(3.4), Exercise 38.) For smooth scalar functions $F,G$ on $\overline D$ the divergence theorem stated in the given block gives the two weighted integrations by parts $\int_D(\partial_{z_j}F)\overline G\,e^{-\varphi}dV=\int_{\partial D}F\overline G\,\rho_{z_j}e^{-\varphi}dS-\int_D F\,\overline{\partial_{\bar z_j}G}\,e^{-\varphi}dV+\int_D F\overline G\,\varphi_j e^{-\varphi}dV$ and $\int_D(\partial_{\bar z_j}F)\overline G\,e^{-\varphi}dV=\int_{\partial D}F\overline G\,\rho_{\bar z_j}e^{-\varphi}dS-\int_D F\,\overline{\partial_{z_j}G}\,e^{-\varphi}dV+\int_D F\overline G\,\varphi_{\bar j}e^{-\varphi}dV$, where $\rho_{z_j}=\partial_{z_j}\rho$, $\rho_{\bar z_j}=\partial_{\bar z_j}\rho$, $\varphi_j=\partial_{z_j}\varphi$ and $\varphi_{\bar j}=\partial_{\bar z_j}\varphi$; Boas's (3.3) is the $q=1$ expansion obtained by dropping the boundary term for compactly supported data, his (3.4) is the adjoint boundary condition exhibited by these formulas, and his Exercise 38 is the same computation with a positive smooth weight in place of $e^{-\varphi}$, which is where the factors $\varphi_j,\varphi_{\bar j}$ come from.

[F12] (Haslinger, author manuscript, §4, Proposition 4.12 with Lemmas 4.14-4.16, printed pp. 45-49, and the general-degree boundary criterion (4.31) with its proof on printed p. 48.) On a bounded domain with $C^{k+1}$ boundary, $C^k_{(0,q)}(\overline D)\cap\operatorname{Dom}\bar\partial_0^*$ is dense in $\operatorname{Dom}\bar\partial_q\cap\operatorname{Dom}\bar\partial_0^*$ for the unweighted graph norm $(\|v\|_0^2+\|\bar\partial v\|_0^2+\|\bar\partial_0^*v\|_0^2)^{1/2}$; this also holds with $k=\infty$. For a $C^k$ form, $k\ge1$, membership in $\operatorname{Dom}\bar\partial_0^*$ is equivalent to (BC), and on this domain its value is $-\sum_j\iota_j\partial_{z_j}v$. The source proves this in boundary frames where (BC) is vanishing of the complex normal coefficients; thus the dense smooth family satisfies (BC). The source uses the unweighted pairing. Weighted transport is proved here in steps 1.2, 2.1 and 9.1, not attributed to the source.

**Given (source computation).** For $H\in C^1(\overline D)$, the divergence theorem gives $\int_D\partial_{z_j}H\,dV=\int_{\partial D}H\rho_{z_j}\,dS$; its conjugate gives the $\partial_{\bar z_j}$ formula. Applying these to $H=F\overline Ge^{-\varphi}$ gives [F11], including for $C^1$ factors. In Boas, §3.3.3, printed p. 83, the unweighted calculation for a smooth $(0,1)$-form $f$ is
$$\langle f,\bar\partial\eta\rangle_0=\int_D\sum_jf_j\overline{\partial_{\bar z_j}\eta}\,dV=-\int_D\sum_j\partial_{z_j}f_j\overline\eta\,dV+\int_{\partial D}\sum_jf_j\rho_{z_j}\overline\eta\,dS.$$
The Hilbert-adjoint identity holds precisely when the boundary term vanishes, as justified by [F12]. Boas's Exercise 38 treats a positive smooth weight; the $C^2$ weight here needs only the displayed divergence theorem and product rule.

**Choice use.** AC is the ambient hypothesis recorded in the Statement and cited as [F10]; the countable instance $\mathrm{AC}_\omega$ is the form of choice consumed by the interfaces [F1] (completeness and density of the weighted space) and [F2], and by the countable cutoffs, exhaustions and subsequences occurring in the imported density statement [F12]. The proof selects no family of nonempty sets beyond those countable instances.

## Proof

**Proof technique:** direct.

1.1 Since $\partial D$ is $C^\infty$ and $|\nabla\rho|=1$ there, $\overline D$ is compact, so $\varphi,\nabla\varphi$ and the coefficients $\varphi_{j\bar k}$ are bounded on $\overline D$; put $M:=\max_{j,k}\sup_{\overline D}|\varphi_{j\bar k}|<\infty$. The Hermitian matrix $H(a):=(\varphi_{j\bar k}(a))$ is well defined at every $a\in\overline D$, its eigenvalues $\lambda_1(a)\le\cdots\le\lambda_n(a)$ are real by [F8], and if $v$ is a unit eigenvector for $\lambda_i(a)$ then the Cauchy-Schwarz inequality gives $|\lambda_i(a)|=|\langle H(a)v,v\rangle|\le\max_{j,k}|\varphi_{j\bar k}(a)|\,\bigl(\sum_j|v_j|\bigr)^2\le n\max_{j,k}|\varphi_{j\bar k}(a)|\le nM$, so the sum $w:=\lambda_1+\cdots+\lambda_q$ satisfies $|w|\le qnM$ at every point of $\overline D$; also $\varphi_{\bar j}=\overline{\varphi_j}$ because $\varphi$ is real-valued. [F1, F7, F8, given, algebra]

1.2 Transport identity. A $(0,k)$-form $z$ lies in $\operatorname{Dom}\bar\partial_\varphi^*$ exactly when $e^{-\varphi}z$ lies in $\operatorname{Dom}\bar\partial_0^*$, and then $$\bar\partial_\varphi^*z=e^{\varphi}\bar\partial_0^*(e^{-\varphi}z).$$ Indeed $\langle\bar\partial h,z\rangle_\varphi=\langle\bar\partial h,e^{-\varphi}z\rangle_0$ and $\langle h,z^*\rangle_\varphi=\langle h,e^{-\varphi}z^*\rangle_0$ for every $h$ in the maximal domain. The weighted and unweighted graph domains of $\bar\partial$ agree as sets, since $e^{\pm\varphi}$ are bounded on $\overline D$; hence the two bounded-functional criteria are equivalent and their Riesz vectors have the displayed relation. [F1, given, algebra]

2.1 The form $u$ lies in $\operatorname{Dom}\bar\partial_\varphi^*$ and $\bar\partial_\varphi^*u=\sum_j\iota_j\delta_ju$: the positive factor $e^{-\varphi}$ preserves (BC), so [F12], applied with $k=2$ since $e^{-\varphi}u$ is $C^2$, gives $e^{-\varphi}u\in\operatorname{Dom}\bar\partial_0^*$ and $$\bar\partial_0^*(e^{-\varphi}u)=-\sum_j\iota_j\partial_{z_j}(e^{-\varphi}u)=e^{-\varphi}\sum_j\iota_j(\varphi_j-\partial_{z_j})u.$$ The transport identity of step 1.2 gives the claimed weighted adjoint and formula. [F1, F12, step 1.2, given, algebra]

3.1 On smooth coefficient tensors the following operator identities hold: (a) $\bar\partial=\sum_j\varepsilon_jD_j$ and $\bar\partial_\varphi^*=\sum_j\iota_j\delta_j$ on $\operatorname{Dom}\bar\partial_\varphi^*$; (b) $\iota_j\varepsilon_k+\varepsilon_k\iota_j=\delta_{jk}\mathrm{id}$; (c) $\iota_j\bar\partial=D_j-\bar\partial\iota_j$; (d) $[D_k,\delta_j]=\varphi_{j\bar k}$; (e) $\bar\partial_\varphi^*\bar\partial+\bar\partial\bar\partial_\varphi^*=\sum_j\delta_jD_j+\sum_{j,k}\varphi_{j\bar k}\varepsilon_k\iota_j$; and (f) $\langle\varepsilon_jf,g\rangle_\varphi=\langle f,\iota_jg\rangle_\varphi$ for coefficient tensors $f,g$ of adjacent degrees. Here (a) is the definition of the wedge and for smooth forms the formal density of [F1] established in step 2.1; (b) is the sign case check of [F3] against the antisymmetry convention of [F1]; (c) is $\iota_j\bar\partial=\sum_k(\delta_{jk}-\varepsilon_k\iota_j)D_k=D_j-\bar\partial\iota_j$; (d) is $D_k\varphi_j=\varphi_{j\bar k}$ by [F6]; (e) follows from (a)-(d) by writing $\bar\partial_\varphi^*\bar\partial+\bar\partial\bar\partial_\varphi^*=\sum_{j,k}(\iota_j\delta_j\varepsilon_kD_k+\varepsilon_kD_k\iota_j\delta_j)$ and substituting (b), (c) and (d); and (f) is the pointwise adjointness of wedge and contraction. [F1, F3, F6, F7, step 2.1, given, algebra]

4.1 For every $a\in\overline D$ and every coefficient tensor $(u_J)_{|J|=q}$ one has $\sum_{|K|=q-1}\sum_{j,k}\varphi_{j\bar k}(a)u_{jK}\overline{u_{kK}}\ge(\lambda_1+\cdots+\lambda_q)(a)\sum_{|J|=q}|u_J|^2$: the Hermitian matrix $H(a)$ is self-adjoint and hence normal, so [F8] gives an orthonormal basis $v_1,\dots,v_n$ of $\mathbb C^n$ with $H(a)v_i=\lambda_iv_i$ and $\varphi_{j\bar k}(a)=\sum_i\lambda_iv_{ij}\overline{v_{ik}}$; putting $w_{iK}:=\sum_jv_{ij}u_{jK}$ and $d_i:=\sum_{|K|=q-1}|w_{iK}|^2$ gives $\sum_{|K|=q-1}\sum_{j,k}\varphi_{j\bar k}u_{jK}\overline{u_{kK}}=\sum_i\lambda_id_i$; Parseval in each fiber $K$ gives $\sum_id_i=\sum_{|K|=q-1}\sum_j|u_{jK}|^2=q\sum_{|J|=q}|u_J|^2$, and $0\le d_i\le\sum_{|J|=q}|u_J|^2$ because $d_i=|\nu_iu|^2$ where $\nu_i:=\sum_jv_{ij}\iota_j$ is the adjoint, by (f) of step 3.1, of $\mu_i:=\sum_j\overline{v_{ij}}\varepsilon_j$ and $|\nu_iu|^2+|\mu_iu|^2=|u|^2$ by (b) and (f) of step 3.1, using $\sum_j|v_{ij}|^2=1$; finally, for real $\lambda_1\le\cdots\le\lambda_n$ and reals $0\le d_i\le U$ with $\sum_id_i=qU$ one has $\sum_i\lambda_id_i\ge(\lambda_1+\cdots+\lambda_q)U$, because an exchange of mass between indices $i>q$ and $j\le q$ never increases $\sum_i\lambda_id_i$ and repeated exchange reaches $d_1=\cdots=d_q=U$, $d_{q+1}=\cdots=d_n=0$. [F1, F3, F8, step 3.1, given, algebra]

4.2 The left-hand side of claim 1 equals $\langle\square u,u\rangle_\varphi+B_1$, where $\square:=\sum_j\delta_jD_j+\sum_{j,k}\varphi_{j\bar k}\varepsilon_k\iota_j$ and $B_1:=\int_{\partial D}\sum_{|K|=q}\sum_j(\bar\partial u)_{jK}\overline{u_K}\rho_{z_j}e^{-\varphi}dS$, with $(\bar\partial u)_{jK}$ the coefficient of the $(0,q+1)$-form $\bar\partial u$ on the ordered tuple $(j,K)$: by step 2.1 and identity (e) of step 3.1, $\langle\square u,u\rangle_\varphi=\langle\bar\partial_\varphi^*\bar\partial u,u\rangle_\varphi+\langle\bar\partial\bar\partial_\varphi^*u,u\rangle_\varphi$ computed as formal densities, the integration by parts for $\partial_{z_j}$ in [F11] with $F:=(\bar\partial u)_{jK}$, $G:=u_K$ gives $\langle\bar\partial_\varphi^*\bar\partial u,u\rangle_\varphi=\|\bar\partial u\|_\varphi^2-B_1$ using the formal integration-by-parts expression (no Hilbert-adjoint domain claim is made for $\bar\partial u$), and $\|\bar\partial u\|_\varphi^2=\sum_j\langle D_ju,\iota_j\bar\partial u\rangle_\varphi$ by (f) of step 3.1, while $\langle\bar\partial\bar\partial_\varphi^*u,u\rangle_\varphi=\|\bar\partial_\varphi^*u\|_\varphi^2$ by the adjoint relation applied to the $C^1$ form $\bar\partial_\varphi^*u$, whose first derivatives are bounded and hence whose $\bar\partial$ is in $L^2$, and the form $u\in\operatorname{Dom}\bar\partial_\varphi^*$; adding gives the claim. [F1, F9, F11, step 2.1, step 3.1, given, algebra]

4.3 The first summand is $\sum_j\langle\delta_jD_ju,u\rangle_\varphi=\sum_{|J|=q}\sum_k\int_D|D_ku_J|^2e^{-\varphi}dV-R$, where $R:=\int_{\partial D}\sum_{|J|=q}\sum_jD_ju_J\overline{u_J}\rho_{z_j}e^{-\varphi}dS$. Indeed apply the $\partial_{z_j}$ integration by parts of [F11] with $F=D_ju_J$ and $G=u_J$. Since $\delta_j=\varphi_j-\partial_{z_j}$, the weight-derivative terms cancel and the remaining volume term is $\int_D(D_ju_J)\overline{\partial_{\bar z_j}u_J}e^{-\varphi}dV=\int_D|D_ju_J|^2e^{-\varphi}dV$; the boundary term has the sign $-R$. [F1, F7, F11, step 3.1, given, algebra]

4.4 The second summand of $\langle\square u,u\rangle_\varphi$ evaluates as $\sum_{j,k}\langle\varphi_{j\bar k}\varepsilon_k\iota_ju,u\rangle_\varphi=\int_D\sum_{|K|=q-1}\sum_{j,k}\varphi_{j\bar k}u_{jK}\overline{u_{kK}}e^{-\varphi}dV$: apply the adjointness (f) of step 3.1 pointwise, move the scalar $\varphi_{j\bar k}$ outside the pairing, and use the coefficient formula of [F1]. [F1, step 3.1, given, algebra]

5.1 At every boundary point $p\in\partial D$ one has the identity $\sum_{|K|=q}\sum_{j=1}^n\bigl[(\bar\partial u)_{jK}-D_ju_K\bigr]\overline{u_K}\rho_{z_j}=\sum_{|K|=q-1}\sum_{j,k=1}^n\rho_{j\bar k}u_{jK}\overline{u_{kK}}$, all quantities being evaluated at $p$, where $(\bar\partial u)_{jK}$ denotes the coefficient of $\bar\partial u$ on the ordered tuple $(j,K)$ (so it equals $0$ when $j\in K$) and $u_K$ the coefficient of $u$ on the increasing tuple $K$; moreover $B_1-R=\int_{\partial D}\sum_{|K|=q-1}\sum_{j,k}\rho_{j\bar k}u_{jK}\overline{u_{kK}}e^{-\varphi}dS$. Indeed, with $\theta:=\sum_j\rho_{z_j}\iota_j$ the left-hand side equals $\langle(\theta\bar\partial-\sum_j\rho_{z_j}D_j)u,u\rangle_{pt}$ by (f) and (a) of step 3.1, and since $\theta\bar\partial=\sum_j\rho_{z_j}D_j-\bar\partial\theta+\sum_{j,k}\rho_{j\bar k}\varepsilon_k\iota_j$ by (b), (c) and [F6] (applied to $D_k\rho_{z_j}=\rho_{j\bar k}$), it equals $-\langle\bar\partial(\theta u),u\rangle_{pt}+\sum_{j,k}\rho_{j\bar k}\langle\varepsilon_k\iota_ju,u\rangle_{pt}$; the second term is $\sum_{|K|=q-1}\sum_{j,k}\rho_{j\bar k}u_{jK}\overline{u_{kK}}$ by (f) of step 3.1, and the first term vanishes because $-\langle\bar\partial(\theta u),u\rangle_{pt}=-\sum_{k,K}D_k(\theta u)_{K}\overline{u_{kK}}=-\sum_{j,k,K}\bigl(\rho_{j\bar k}u_{jK}+\rho_{z_j}D_ku_{jK}\bigr)\overline{u_{kK}}$ and for each $|K|=q-1$ the tangential operator $T_K:=\sum_k\overline{u_{kK}}(p)\partial_{\bar z_k}$ annihilates the restriction to $\partial D$ of $\sum_ju_{jK}\rho_{z_j}$: it is tangential at $p$ because $\sum_k\overline{u_{kK}}(p)\rho_{\bar z_k}(p)=\overline{\sum_ku_{kK}(p)\rho_{z_k}(p)}=0$ by (BC), and $\sum_ju_{jK}\rho_{z_j}=0$ on $\partial D$ by (BC), so $0=T_K\bigl(\sum_ju_{jK}\rho_{z_j}\bigr)(p)=\sum_{j,k}\overline{u_{kK}}\bigl(\rho_{j\bar k}u_{jK}+\rho_{z_j}D_ku_{jK}\bigr)(p)$; integrating the pointwise identity over $\partial D$ against $e^{-\varphi}dS$ and subtracting the definition of $R$ in step 4.3 from that of $B_1$ in step 4.2 gives the displayed identity for $B_1-R$. [F1, F3, F6, F7, F11, step 3.1, given, algebra]

6.1 Claim 1 holds: by steps 4.2, 4.3 and 4.4 the sum $\|\bar\partial u\|_\varphi^2+\|\bar\partial_\varphi^*u\|_\varphi^2$ equals $\sum_{|J|=q}\sum_k\int_D|D_ku_J|^2e^{-\varphi}dV-R+\int_D\sum_{j,k,K}\varphi_{j\bar k}u_{jK}\overline{u_{kK}}e^{-\varphi}dV+B_1$, and step 5.1 replaces $-R+B_1$ by $\int_{\partial D}\sum_{j,k,K}\rho_{j\bar k}u_{jK}\overline{u_{kK}}e^{-\varphi}dS$, which is the stated identity; the membership $u\in\operatorname{Dom}\bar\partial_\varphi^*$ is step 2.1. [step 2.1, step 4.2, step 4.3, step 4.4, step 5.1, given, algebra]

7.1 If $D$ is Levi pseudoconvex the boundary term of claim 1 is nonnegative: at $p\in\partial D$ and for each $K$ with $|K|=q-1$ the vector $v^{(K)}:=(u_{1K},\dots,u_{nK})$ satisfies $\sum_jv^{(K)}_j\rho_{z_j}(p)=0$ by (BC), so $\sum_{j,k}\rho_{j\bar k}(p)u_{jK}\overline{u_{kK}}=\mathcal L_\rho(p;v^{(K)})\ge0$ by [F5]: if $r$ is its local defining function at $p$, local coordinates transverse to $\partial D$ give $\rho=hr$ with $h(p)>0$; the product rule on vectors tangent to $r=0$ gives $\mathcal L_\rho(p;v)=h(p)\mathcal L_r(p;v)$, and the boundary integral of claim 1 is an integral of a pointwise nonnegative continuous function against the positive factor $e^{-\varphi}$; dropping it and the nonnegative first term of the identity of step 6.1 gives the estimate of claim 2. [F4, F5, step 6.1, given, algebra]

8.1 Claim 3 holds: by step 4.1 the integrand $\sum_{|K|=q-1}\sum_{j,k}\varphi_{j\bar k}u_{jK}\overline{u_{kK}}$ dominates $(\lambda_1+\cdots+\lambda_q)|u|^2$ pointwise on $\overline D$, and step 7.1 bounds the integral of the former by $\|\bar\partial u\|_\varphi^2+\|\bar\partial_\varphi^*u\|_\varphi^2$. [step 4.1, step 7.1, given, algebra]

9.1 Claim 4 holds. Let $u\in\operatorname{Dom}\bar\partial_q\cap\operatorname{Dom}\bar\partial_\varphi^*$ and put $v:=e^{-\varphi}u$. By the transport identity of step 1.2, $v\in\operatorname{Dom}\bar\partial_0^*$; the product rule gives $\bar\partial v=e^{-\varphi}(\bar\partial u-\bar\partial\varphi\wedge u)\in L^2$, so $v\in\operatorname{Dom}\bar\partial_q$. The unweighted graph-norm density [F12] gives smooth $v_\ell$ satisfying (BC) with $v_\ell\to v$, $\bar\partial v_\ell\to\bar\partial v$, and $\bar\partial_0^*v_\ell\to\bar\partial_0^*v$ in unweighted $L^2$. Put $u_\ell:=e^{\varphi}v_\ell$. Then $u_\ell$ satisfies (BC) and belongs to $C^2(\overline D)$, which suffices for the integrations by parts and boundary differentiations of steps 2.1–8.1. By step 1.2 and the product rule, $$\bar\partial_\varphi^*u_\ell=e^{\varphi}\bar\partial_0^*v_\ell,\qquad \bar\partial u_\ell=e^{\varphi}(\bar\partial v_\ell+\bar\partial\varphi\wedge v_\ell).$$ The bounded factors $e^{\pm\varphi}$ and $\bar\partial\varphi$ show that $u_\ell\to u$ in the weighted graph norm. Apply the inequality of step 8.1 to $u_\ell$ and pass to the limit: the right side converges by graph-norm convergence, and the left side converges because $|\lambda_1+\cdots+\lambda_q|\le qnM$ by step 1.1 and $L^2$ convergence implies convergence of the squared norms against any bounded real weight. Thus the inequality holds for $u$. [F1, F9, F12, step 1.1, step 1.2, step 8.1, given, algebra]

10.1 Claims 1, 2, 3 and 4 of the Statement are proved: claim 1 is step 6.1, claim 2 is step 7.1, claim 3 is step 8.1 and claim 4 is step 9.1; the ambient hypothesis is the AC recorded in the Statement and cited as [F10], its countable instance is consumed by [F1], [F2] and [F12] as described in the choice-use paragraph of the given block, and the two imported inputs from outside the library are the integration-by-parts computation [F11] of Boas and the unweighted boundary-criterion and graph-norm density statements [F12] of Haslinger, used in steps 2.1, 9.1 (with the weighted reduction carried out in steps 1.2 and 9.1). [F1, F2, F10, F11, F12, step 1.2, step 2.1, step 6.1, step 7.1, step 8.1, step 9.1] ∎
