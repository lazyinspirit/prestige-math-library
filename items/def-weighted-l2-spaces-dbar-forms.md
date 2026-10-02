---
id: def-weighted-l2-spaces-dbar-forms
kind: definition
title: Weighted L2 spaces and maximal dbar operators
status: draft
origin: pipeline
deps:
  - def-complex-lp-and-euclidean-test-function-conventions
  - thm-complex-lp-completeness-and-almost-everywhere-subsequences
  - def-complex-l-two-inner-product
  - thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz
  - thm-complex-finite-simple-and-smooth-compact-support-density-for-finite-p
  - def-bigraded-complex-differential-forms
  - def-weak-derivative-of-a-locally-integrable-function
  - def-densely-defined-closed-and-closable-operator
  - def-adjoint-of-a-densely-defined-unbounded-operator
  - def-hilbert-space
  - def-countable-choice
  - def-axiom-of-choice
  - lem-test-function-cutoffs-and-euclidean-localization
  - thm-riesz-representation-for-hilbert-space
  - thm-locally-integrable-functions-embed-in-distributions
  - thm-dominated-convergence
  - rem-complex-euclidean-space-dictionary
  - def-mollifier-family-generated-by-a-unit-mass-smooth-bump
  - thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign
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
      locator: "Ch. VIII §§1 and 3, printed pp. 363-372: unbounded operators, distributional d''-operators, and the warning that the Hilbert adjoint need not coincide with the formal expression on a boundary domain."
    - title: "Harold P. Boas, Lecture Notes on Several Complex Variables"
      url: https://haroldpboas.gitlab.io/courses/650-2019c/notes.pdf
      locator: "§3.3.3, printed pp. 81-83: distributional dbar, membership of a form in the domain of the Hilbert adjoint, and the boundary condition."
    - title: "Mohammad Jabbari, Several Complex Variables course notes"
      url: https://www.cimat.mx/~mohammad.jabbari/course-SCV.pdf
      locator: "§§4.1.1-4.1.3, PDF pp. 67-84: weighted L2 spaces of forms, maximal closed extension, and the adjoint formula."
verification:
  precheck: pass
---

## Definition

Assume the Axiom of Choice (AC). Let $n\ge1$ and let $\Omega\subseteq\mathbb C^n$ be open,
let $0\le q\le n$, and let $\varphi\in C^2(\Omega;\mathbb R)$. Write
$L^2_{0,q}:=L^2_{0,q}(\Omega,e^{-\varphi})$ for the object defined in (a)
below, and use the conventions $L^2_{0,q}=\{0\}$ and $\bar\partial_q=0$ for
$q<0$ and for $q>n$. In formulas indexed by $1\le j\le n$, write $z_j$
for the canonical coordinate $z_{j-1}$ of
[[rem-complex-euclidean-space-dictionary]], and relabel the corresponding
Wirtinger operators and form coefficients in the same way.

**(a) Weighted $L^2$ spaces of $(0,q)$-forms.** A $(0,q)$-form coefficient
tuple $u=(u_J)_{|J|=q}$ is measurable when every $u_J$ is a measurable
function in the sense of
([[def-complex-lp-and-euclidean-test-function-conventions]]); two tuples are
identified when they agree almost everywhere. Put
$$\langle u,v\rangle_\varphi:=\int_\Omega\sum_{|J|=q}u_J\overline{v_J}\,e^{-\varphi}\,dV,\qquad \|u\|_\varphi^2:=\langle u,u\rangle_\varphi,$$
and define
$$L^2_{0,q}(\Omega,e^{-\varphi}):=\{u:\ u\text{ measurable},\ \|u\|_\varphi<\infty\}/\sim .$$
Here $dV$ is Lebesgue measure on $\mathbb C^n\cong\mathbb R^{2n}$. The space
$L^2_{0,q}(\Omega,e^{-\varphi})$ carries the inner product
$\langle\cdot,\cdot\rangle_\varphi$ and is a complex Hilbert space.

**(b) The maximal distributional $\bar\partial$.** For $u\in L^2_{0,q}$ choose
any representative, which is locally integrable, and let
$$\bar\partial u:=\sum_{|J|=q}\ \sum_{j=1}^n\frac{\partial u_J}{\partial\bar z_j}\,d\bar z_j\wedge d\bar z^J$$
be its distributional derivative, an element of the space of distributions on
$\Omega$. The **maximal domain** is
$$\operatorname{Dom}\bar\partial_q:=\{u\in L^2_{0,q}:\ \bar\partial u\text{ is represented by an element of }L^2_{0,q+1}\},$$
and for $u\in\operatorname{Dom}\bar\partial_q$ the form $\bar\partial_q u\in L^2_{0,q+1}$
is that representing element. The operator
$\bar\partial_q:\operatorname{Dom}\bar\partial_q\to L^2_{0,q+1}$ is the
**maximal distributional $\bar\partial$** in degree $q$. Its minimal domain
contains every smooth form with compact support in $\Omega$.

**(c) The weighted adjoint.** Let
$\bar\partial_{q-1}:\operatorname{Dom}\bar\partial_{q-1}\to L^2_{0,q}$ be the
maximal operator of degree $q-1$. Its **weighted adjoint** is the Hilbert
adjoint $\bar\partial_\varphi^*:L^2_{0,q}\supseteq\operatorname{Dom}\bar\partial_\varphi^*\to L^2_{0,q-1}$,
using the same bounded-functional definition for operators between the two
Hilbert spaces: $v\in\operatorname{Dom}\bar\partial_\varphi^*$ holds exactly when the
functional $u\mapsto\langle\bar\partial_{q-1}u,v\rangle_\varphi$ is continuous
on $\operatorname{Dom}\bar\partial_{q-1}$ in the ambient norm, and then
$\bar\partial_\varphi^*v$ is the unique $w\in L^2_{0,q-1}$ with
$$\langle\bar\partial_{q-1}u,v\rangle_\varphi=\langle u,w\rangle_\varphi \qquad\text{for all }u\in\operatorname{Dom}\bar\partial_{q-1}.$$
Convention: $\bar\partial_\varphi^*$ always denotes the adjoint of the
preceding degree, and the formal density
$$\bigl(\bar\partial_\varphi^*v\bigr)_K=-e^{\varphi}\sum_{j=1}^n \frac{\partial}{\partial z_j}\bigl(e^{-\varphi}v_{jK}\bigr) =\sum_{j=1}^n\Bigl(v_{jK}\,\frac{\partial\varphi}{\partial z_j} -\frac{\partial v_{jK}}{\partial z_j}\Bigr)$$
expresses $\bar\partial_\varphi^*v$ as a distribution whenever
$v\in\operatorname{Dom}\bar\partial_\varphi^*$; coefficients are extended to
non-increasing tuples by antisymmetry, so that $v_{jK}=0$ when $j\in K$. The
Hilbert adjoint is *not* asserted to equal this formal expression on all of
$L^2_{0,q}$, and no boundary condition on $\partial\Omega$ is imposed here.

**(d) Density of test forms.** The smooth compactly supported $(0,q)$-forms,
regarded as tuples of their coefficient functions, form a linear subspace
$C_c^\infty(\Omega;\Lambda^{0,q})\subseteq L^2_{0,q}(\Omega,e^{-\varphi})$
that is dense in $L^2_{0,q}(\Omega,e^{-\varphi})$. The reduction to the
unweighted Euclidean $L^2$ density theorem, first for compactly supported
tuples and then in general by cutoff along a compact exhaustion of $\Omega$,
is carried out in step 1.3 below.

## Facts & Assumptions

**Given:** The Axiom of Choice; an integer $n\ge1$; an open set $\Omega\subseteq\mathbb C^n$; an integer $0\le q\le n$; and a real function $\varphi\in C^2(\Omega;\mathbb R)$.

[F1] A measurable complex function is locally integrable for Lebesgue measure when $\int_K|f|<\infty$ on every compact $K$ ([[def-complex-lp-and-euclidean-test-function-conventions]]).

[F2] For every measure space and $1\le p\le\infty$ the complex $L^p$ space is complete ([[thm-complex-lp-completeness-and-almost-everywhere-subsequences]]).

[F3] On every measure space the pairing $\langle f,g\rangle=\int f\overline g$ on complex $L^2$ is representative-independent, linear in the first variable, conjugate-linear in the second, conjugate symmetric and positive definite, and $|\langle f,g\rangle|\le\|f\|_2\|g\|_2$ ([[thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz]]); the finite-tuple clause of the same theorem gives the same conclusions for the summed tuple pairing.

[F4] The bidegree decomposition of complex forms and the coefficient formula $\bar\partial\eta=\sum_{I,J,j}(\partial_{\bar z_j}a_{I,J})\,d\bar z_j\wedge dz^I\wedge d\bar z^J$ are as recorded in [[def-bigraded-complex-differential-forms]].

[F5] A weak derivative is defined by the test identity $\int_\Omega u\,D^\alpha\varphi=(-1)^{|\alpha|}\int_\Omega v\varphi$ for every $\varphi\in C_c^\infty(\Omega)$, and it is a statement about almost-everywhere classes ([[def-weak-derivative-of-a-locally-integrable-function]]).

[F6] Assuming countable choice, $C_c^\infty(\mathbb R^n;\mathbb C)$ is dense in Euclidean Lebesgue $L^p$ for $n\ge1$ and $1\le p<\infty$ ([[thm-complex-finite-simple-and-smooth-compact-support-density-for-finite-p]]).

[F7] An operator is densely defined when its domain is dense and closed when its graph is closed ([[def-densely-defined-closed-and-closable-operator]]), and the adjoint bounded-functional criterion for a densely defined operator on one Hilbert space reads: a vector $y$ lies in the adjoint domain exactly when $x\mapsto\langle Tx,y\rangle$ is bounded on the domain ([[def-adjoint-of-a-densely-defined-unbounded-operator]]).

[F8] A complex Hilbert space is a complex inner-product space whose norm is complete ([[def-hilbert-space]]); the pairing of [F3] is the first-variable-linear convention fixed by [[def-complex-l-two-inner-product]].

[F9] AC states that every family of nonempty sets has a choice function ([[def-axiom-of-choice]]); its countable instance gives the countable-choice conventions used by [F2] and [F6] ([[def-countable-choice]]).

[F10] For compact $K$ inside an open Euclidean set $O$, there is $\chi\in C_c^\infty(O)$ with $0\le\chi\le1$ equal to one near $K$ ([[lem-test-function-cutoffs-and-euclidean-localization]]).

[F11] Under countable choice every bounded linear functional on a complex Hilbert space has a unique Riesz vector; the vector depends conjugate-linearly on the functional ([[thm-riesz-representation-for-hilbert-space]]).

[F12] Under countable choice a locally integrable function representing the zero distribution is zero almost everywhere ([[thm-locally-integrable-functions-embed-in-distributions]]).

[F13] Dominated convergence applies to measurable functions converging almost everywhere with a single integrable majorant ([[thm-dominated-convergence]]).

[F14] A compactly supported smooth unit-mass bump generates a mollifier family, and convolution with it is smooth ([[def-mollifier-family-generated-by-a-unit-mass-smooth-bump]], [[thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign]]).

**Choice use.** AC is used only through its countable instance, for the measure-theoretic completeness and density interfaces [F2], [F6], [F11] and [F12], and to select the cutoff sequence in step 1.3. The definitions of the weighted pairing, of the maximal operator and of the Hilbert adjoint select nothing.

## Proof

**Proof technique:** direct.

1.1 If $\Omega=\varnothing$, all coefficient spaces contain only the zero class and the assertions are immediate. Assume $\Omega\ne\varnothing$. The weight $e^{-\varphi}$ is continuous and strictly positive on $\Omega$, so $\mu_\varphi:=e^{-\varphi}\,dV$ is a Borel measure on $\Omega$ with the same null sets as Lebesgue measure and with finite mass on every compact subset of the $\sigma$-compact space $\Omega$; by [F3] the tuple pairing of coefficient tuples satisfies the inner-product axioms and Cauchy-Schwarz, and by [F2] with $p=2$ and $\mu=\mu_\varphi$ the complex space $L^2(\mu_\varphi;\mathbb C)$ is complete, so the coefficientwise space of (a), a finite product of $m=\binom nq$ copies of $L^2(\mu_\varphi;\mathbb C)$ with the summed pairing, is a complex inner-product space whose norm is complete, that is, a complex Hilbert space in the sense of [F8]; the countable instance of [F9] is exactly the hypothesis consumed by [F2] and [F6], and no other selection is made here. [F2, F3, F8, F9, given, algebra]

1.2 Let $u\in L^2_{0,q}$ and let $K\subseteq\Omega$ be a nonempty compact set; then $\int_K|u_J|\,dV\le|K|^{1/2}\bigl(\int_K|u_J|^2\,dV\bigr)^{1/2}$ by Cauchy-Schwarz, and $c_K:=\min_Ke^{-\varphi}>0$ gives $\int_K|u_J|^2\,dV\le c_K^{-1}\|u_J\|_\varphi^2<\infty$, so every coefficient of $u$ is locally integrable; by [F1] it therefore has a distributional derivative in each variable, and by [F5] that derivative depends only on the almost-everywhere class of $u_J$, so it is well defined on $L^2_{0,q}$ and additive and $\mathbb C$-homogeneous in the coefficient. [F1, F5, given, algebra]

1.3 Test forms are dense in the weighted space. Let $u\in L^2_{0,q}$. For integers $k\ge1$ choose $\chi_k\in C_c^\infty(\Omega)$ with $0\le\chi_k\le1$, $\chi_k=1$ near $K_k$ and $\operatorname{supp}\chi_k\subseteq K_{k+1}$, where $K_k=\{|z|\le k\}\cap\{\operatorname{dist}(z,\mathbb C^n\setminus\Omega)\ge1/k\}$ and the distance constraint is omitted when $\Omega=\mathbb C^n$. These sets are compact, exhaust $\Omega$, and satisfy $K_k\subseteq\operatorname{int}K_{k+1}$: distance to the nonempty complement is continuous by the triangle inequality, and both defining inequalities become strict at the next index. Apply [F10] with $O=\operatorname{int}K_{k+1}$ and use countable choice for the cutoffs (take zero when $K_k$ is empty); then $|\chi_ku-u|^2e^{-\varphi}\le4|u|^2e^{-\varphi}\in L^1$ and $\chi_ku\to u$ pointwise, so [F13] gives $\|\chi_ku-u\|_\varphi\to0$ and each $\chi_ku$ has compact support in $\Omega$. It remains to approximate any such compactly supported tuple $v:=\chi_ku$. If $v=0$ there is nothing to prove; otherwise put $K:=\operatorname{supp}v\subseteq K_{k+1}$ and use the already chosen exhaustion cutoff $\theta:=\chi_{k+1}$, which equals $1$ near $K_{k+1}$ and has compact support in $\Omega$. Thus $\theta v=v$. Let $C:=\max_{\operatorname{supp}\theta}e^{-\varphi}<\infty$, extend each coefficient of $v$ by zero to a tuple $\widetilde v$ on $\mathbb C^n\cong\mathbb R^{2n}$, and apply [F6] componentwise: for every $\varepsilon>0$ there is a tuple $\psi=(\psi_J)$ with $\psi_J\in C_c^\infty(\mathbb R^{2n})$ and $\|\psi_J-\widetilde v_J\|_{L^2(\mathbb R^{2n})}<\varepsilon m^{-1/2}C^{-1/2}$ for each of the $m=\binom nq$ coefficients. The tuple $\theta\psi|_\Omega$ lies in $C_c^\infty(\Omega;\Lambda^{0,q})$, and because $\theta v=v$ its error is $\theta(\psi-\widetilde v)$ on $\Omega$. Therefore $$\|\theta\psi-v\|_\varphi^2\le C\sum_{|J|=q}\|\psi_J-\widetilde v_J\|_{L^2(\mathbb R^{2n})}^2<\varepsilon^2.$$ This proves the claimed weighted density. [F1, F6, F9, F10, F13, given, algebra]

2.1 Define $\bar\partial u$ for $u\in L^2_{0,q}$ by the formula of (b) using the locally integrable representative supplied by step 1.2; by [F4] its coefficient in front of $d\bar z^L$, $|L|=q+1$, is $\sum_{j\in L}\varepsilon_{j,L\setminus j}\,\partial u_{L\setminus j}/\partial\bar z_j$, a distribution, and if $w,w'\in L^2_{0,q+1}$ both represent $\bar\partial u$, then every coefficient of $w-w'$ is locally integrable by step 1.2 and represents the zero distribution, so [F12] gives $w=w'$ almost everywhere; hence $\operatorname{Dom}\bar\partial_q$ and $\bar\partial_q$ are well defined. [F4, F5, F12, step 1.2, given, algebra]

2.2 For $q=0$ the preceding-degree adjoint is zero by convention. For $q\ge1$, let $v\in\operatorname{Dom}\bar\partial_\varphi^*$ and $w:=\bar\partial_\varphi^*v$. For every compactly supported smooth $(0,q-1)$-form $\psi$, the adjoint identity and [F4], with wedge signs absorbed in the antisymmetric coefficients $v_{jK}$, give $$\int_\Omega\sum_{|K|=q-1}\psi_K\overline{w_K}e^{-\varphi}dV=\int_\Omega\sum_{|K|=q-1}\sum_{j=1}^n(\partial_{\bar z_j}\psi_K)\overline{v_{jK}}e^{-\varphi}dV.$$ The identity [F5], conjugated and summed, therefore gives $$e^{-\varphi}w_K=-\sum_j\partial_{z_j}(e^{-\varphi}v_{jK})$$ as distributions. Here a first derivative of a locally integrable function acts continuously on compactly supported $C^1$ tests by its defining integral. To use such a test, extend it by zero and convolve with a smooth unit-mass bump as in [F14]: the approximations and their first derivatives converge uniformly, with supports in a fixed compact subset of $\Omega$. Local integrability then passes each defining integral to the limit. This also justifies the $C^2$ multiplier $e^{\varphi}$ and its product rule in this order-one identity. Multiplying by $e^{\varphi}$ and expanding yields exactly (c), only on the Hilbert-adjoint domain. [F4, F5, F14, step 1.2, given, algebra]

3.1 The domain of $\bar\partial_q$ is a linear subspace and $\bar\partial_q$ is linear: by [F5] the distributional identity $\partial(au_J+bu'_J)/\partial\bar z_j=a\,\partial u_J/\partial\bar z_j+b\,\partial u'_J/\partial\bar z_j$ holds for all scalars $a,b$ and all locally integrable $u_J,u'_J$ (test against every compactly supported smooth function and use linearity of the integral), and applying the uniqueness part of step 2.1 to the two representations of $\bar\partial(au+bu')$ gives $\bar\partial_q(au+bu')=a\,\bar\partial_q u+b\,\bar\partial_q u'$; the domain is nonempty because every smooth compactly supported $(0,q)$-form has its smooth $\bar\partial$ in $L^2_{0,q+1}$ by [F4]. [F4, F5, step 2.1, given, algebra]

4.1 The operator $\bar\partial_{q-1}$ is densely defined because its domain contains the compactly supported smooth $(0,q-1)$-forms by step 3.1 and these are dense by step 1.3; therefore the bounded-functional criterion in (c) defines its adjoint: each bounded functional extends to the domain Hilbert space and has a unique Riesz vector by [F11], so $\bar\partial_\varphi^*$ is unique, and it is linear because $v\mapsto(u\mapsto\langle\bar\partial u,v\rangle_\varphi)$ and the Riesz correspondence are both conjugate-linear, while the convention for $q<0$ and $q>n$ is the zero operator on $\{0\}$; this completes the well-definedness of the objects named in (a), (b) and (c). [F7, F11, step 1.3, step 3.1, given, algebra] ∎
