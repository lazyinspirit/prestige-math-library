---
id: thm-hormander-l2-dbar-existence
kind: theorem
title: "Hörmander's weighted L2 existence theorem for the dbar equation"
status: draft
origin: pipeline
deps:
  - thm-open-connected-subsets-of-rn-are-polygonally-connected
  - rem-complex-euclidean-space-dictionary
  - def-weighted-l2-spaces-dbar-forms
  - def-bigraded-complex-differential-forms
  - def-weak-derivative-of-a-locally-integrable-function
  - def-levi-form-and-strict-plurisubharmonicity
  - def-levi-pseudoconvex-domain
  - def-plurisubharmonic-exhaustion-and-hartogs-pseudoconvexity
  - thm-pseudoconvex-domain-smooth-psh-exhaustion
  - lem-hormander-solver-on-smooth-pseudoconvex-domain
  - def-wirtinger-operators-in-several-complex-variables
  - lem-clairaut-for-c2-potentials-by-rectangular-differences
  - thm-complex-spectral-theorem-for-normal-endomorphisms
  - prop-self-adjoint-and-normal-matrix-criteria-in-orthonormal-bases
  - def-self-adjoint-and-normal-endomorphism
  - thm-bessel-inequality-and-finite-parseval-identity
  - thm-hilbert-spaces-are-reflexive-by-riesz-representation
  - cor-reflexive-iff-every-bounded-sequence-has-a-weakly-convergent-subsequence
  - cor-weak-convergence-implies-lower-semicontinuity-of-the-norm
  - def-weak-convergence-of-nets-and-sequences
  - thm-ultrafilter-lemma
  - thm-hahn-banach-dominated-extension
  - lem-ac-supplies-countable-and-dependent-choice-for-banach-integration
  - def-hahn-banach-extension-principle-relative
  - def-dependent-choice
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
      locator: "Ch. VIII §6, Theorem 6.5 with (6.4) and its proof, printed pp. 377-379: the semipositive weight estimate and the L2loc (resp. C-infinity) solvability branch"
    - title: "Harold P. Boas, Lecture Notes on Several Complex Variables"
      url: https://haroldpboas.gitlab.io/courses/650-2019c/notes.pdf
      locator: "§§3.3.2-3.3.3, printed pp. 79-85: the solution of the dbar equation on smooth pseudoconvex domains by the basic estimate, in the (0,1) case"
    - title: "Mohammad Jabbari, Several Complex Variables course notes"
      url: "https://www.cimat.mx/~mohammad.jabbari/course-SCV.pdf"
      locator: "§§4.1-4.3, PDF pp. 67-83: weighted L2 spaces, unbounded operators and the energy estimate (4.4) with Theorem 72"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice (AC). Let $n\ge1$ and use one-based labels $z_j:=z_{j-1}^{\mathrm{can}}$ for $1\le j\le n$, also for their derivatives and form coefficients. Let
$\Omega\subseteq\mathbb C^n$ be a domain that is Hartogs pseudoconvex
([[def-plurisubharmonic-exhaustion-and-hartogs-pseudoconvexity]]), let
$\varphi\in C^2(\Omega;\mathbb R)$ be strictly plurisubharmonic on $\Omega$
([[def-levi-form-and-strict-plurisubharmonicity]]), and let $1\le q\le n$. For
$a\in\Omega$ let $\lambda_1(a)\le\cdots\le\lambda_n(a)$ be the eigenvalues of
the Hermitian matrix $(\varphi_{j\bar k}(a))$ and put
$w(a):=\lambda_1(a)+\cdots+\lambda_q(a)$, so that $w>0$ on $\Omega$. Write
$L^2_{0,k}:=L^2_{0,k}(\Omega,e^{-\varphi})$ and let
$\bar\partial_k:\operatorname{Dom}\bar\partial_k\subseteq L^2_{0,k}\to L^2_{0,k+1}$
be the maximal distributional $\bar\partial$ of
[[def-weighted-l2-spaces-dbar-forms]].

1. If $f\in\operatorname{Dom}\bar\partial_q$ satisfies $\bar\partial_qf=0$ and
the weighted energy
$$E(f):=\int_\Omega\frac{|f|^2}{w}\,e^{-\varphi}\,dV$$
is finite, then there is $u\in\operatorname{Dom}\bar\partial_{q-1}$ with
$\bar\partial_{q-1}u=f$ and $\|u\|_\varphi^2\le E(f)$.

2. (Smooth data.) If in addition $\varphi\in C^\infty(\Omega;\mathbb R)$ and
$f\in C^\infty(\Omega;\Lambda^{0,q})$ satisfies $\bar\partial f=0$ pointwise and
$E(f)<+\infty$, then there is
$u\in C^\infty(\Omega;\Lambda^{0,q-1})\cap L^2_{0,q-1}(\Omega,e^{-\varphi})$
with $\bar\partial u=f$ and $\|u\|_\varphi^2\le E(f)$.

The strict positivity of $\varphi$ is kept in both claims, and no boundary
regularity of $u$ is claimed. Claim 2 is the $C^\infty$ branch of the same
weighted estimate, quoted from the source of [F19]; it does not assert that the
solution of claim 1 is smooth.

## Facts & Assumptions

**Given:** The Axiom of Choice; an integer $n\ge1$; a domain $\Omega\subseteq\mathbb C^n$ that is Hartogs pseudoconvex; a function $\varphi\in C^2(\Omega;\mathbb R)$ strictly plurisubharmonic on $\Omega$; an integer $1\le q\le n$; the eigenvalue functions $\lambda_1(a)\le\cdots\le\lambda_n(a)$ of the Hermitian matrices $(\varphi_{j\bar k}(a))$, $a\in\Omega$, and $w:=\lambda_1+\cdots+\lambda_q$; and a form $f\in\operatorname{Dom}\bar\partial_q$ with $\bar\partial_qf=0$ whose energy $E(f)=\int_\Omega|f|^2w^{-1}e^{-\varphi}dV$ is finite.

[F1] With the conventions of [[def-weighted-l2-spaces-dbar-forms]]: the space $L^2_{0,k}(\Omega,e^{-\varphi})$ of coefficient tuples carries the inner product $\langle u,v\rangle_\varphi=\int_\Omega\sum_{|J|=k}u_J\overline{v_J}e^{-\varphi}dV$ and is a complex Hilbert space.

[F2] With the same conventions, for $u\in L^2_{0,k}$ with a locally integrable representative the distributional form $\bar\partial u:=\sum_{|J|=k}\sum_{j=1}^n(\partial u_J/\partial\bar z_j)d\bar z_j\wedge d\bar z^J$ is defined, and $\operatorname{Dom}\bar\partial_k$ consists of those $u$ for which $\bar\partial u$ is represented by an element of $L^2_{0,k+1}$, which is then $\bar\partial_ku$ ([[def-weighted-l2-spaces-dbar-forms]]).

[F3] Coefficients are extended to non-increasing tuples by antisymmetry, so that $v_{jK}=0$ when $j\in K$, and this convention assigns the shuffle signs in the coefficient formula of [F2] ([[def-weighted-l2-spaces-dbar-forms]]).

[F4] The bidegree decomposition and the coefficient formula $\bar\partial\eta=\sum_{I,J,j}(\partial_{\bar z_j}a_{I,J})d\bar z_j\wedge dz^I\wedge d\bar z^J$ for smooth forms are as recorded in [[def-bigraded-complex-differential-forms]]; a smooth $(0,k)$-form is identified with its tuple of coefficients and $C_c^\infty(\Omega;\Lambda^{0,k})$ denotes the smooth compactly supported $(0,k)$-forms.

[F5] A weak derivative is defined by the test identity $\int_\Omega u\,D^\alpha\varphi=(-1)^{|\alpha|}\int_\Omega v\varphi$ for every $\varphi\in C_c^\infty(\Omega)$, and it is a statement about almost-everywhere classes ([[def-weak-derivative-of-a-locally-integrable-function]]).

[F6] The Levi form of $u\in C^2(\Omega,\mathbb R)$ is $\mathcal L_u(a;v)=\sum_{j,k}\frac{\partial^2u}{\partial z_j\partial\bar z_k}(a)v_j\overline{v_k}$, and $u$ is strictly plurisubharmonic when $\mathcal L_u(a;v)>0$ for every $a\in\Omega$ and every $v\ne0$ ([[def-levi-form-and-strict-plurisubharmonicity]]).

[F7] A domain with $C^2$ boundary is Levi pseudoconvex when for every boundary point $p$ there are a neighbourhood $U$ of $p$ and a function $\rho\in C^2(U,\mathbb R)$ with $\Omega\cap U=\{\rho<0\}$, $d\rho(p)\ne0$, and $\mathcal L_\rho(p;v)\ge0$ for every complex tangent vector $v$ ([[def-levi-pseudoconvex-domain]]).

[F8] A domain $\Omega$ is Hartogs pseudoconvex when $-\log\delta_\Omega$ is plurisubharmonic on $\Omega$, where $\delta_\Omega$ is the equal-radius polydisc boundary function; the whole space is Hartogs pseudoconvex by the empty-complement convention ([[def-plurisubharmonic-exhaustion-and-hartogs-pseudoconvexity]]).

[F9] If $\Omega\subseteq\mathbb C^n$ is a Hartogs pseudoconvex domain, then there are $S\in C^\infty(\Omega)$ strictly plurisubharmonic and a strictly increasing sequence $c_k\to+\infty$ such that, with $\Omega_k:=\{z\in\Omega:S(z)<c_k\}$: every $c_k$ is a regular value of $S$, every $\partial\Omega_k$ is a nonempty $C^\infty$ hypersurface of $\Omega$, $\overline{\Omega_k}\subseteq\Omega_{k+1}$ and $\bigcup_k\Omega_k=\Omega$, and $\mathcal L_S(p;v)>0$ for every $p\in\partial\Omega_k$ and every $v\ne0$ with $\sum_j(\partial S/\partial z_j)(p)v_j=0$ ([[thm-pseudoconvex-domain-smooth-psh-exhaustion]]).

[F10] Weighted solvability on a smoothly bounded domain ([[lem-hormander-solver-on-smooth-pseudoconvex-domain]]): if $D$ is a bounded Levi pseudoconvex domain with $C^\infty$ boundary, $\varphi\in C^2(\overline D)$ is strictly plurisubharmonic at every point of $\overline D$, $1\le q\le n$, and $f\in\operatorname{Dom}\bar\partial_q(D)$ satisfies $\bar\partial_qf=0$, then there is $u\in\operatorname{Dom}\bar\partial_{q-1}(D)$ with $\bar\partial_{q-1}u=f$, and the least-norm such solution satisfies $\|u\|_{\varphi,D}^2\le\int_D|f|^2w^{-1}e^{-\varphi}dV$ with $w$ the sum of the $q$ smallest eigenvalues of the Hermitian matrices $(\varphi_{j\bar k})$ on $D$.

[F11] The Wirtinger operators satisfy $\partial_{z_j}=\tfrac12(\partial_{x_j}-i\partial_{y_j})$ and $\partial_{\bar z_j}=\tfrac12(\partial_{x_j}+i\partial_{y_j})$ ([[def-wirtinger-operators-in-several-complex-variables]]).

[F12] For functions with continuous second partial derivatives the mixed second partials commute ([[lem-clairaut-for-c2-potentials-by-rectangular-differences]]).

[F13] A finite-dimensional complex inner product space has an orthonormal basis of eigenvectors of every normal endomorphism ([[thm-complex-spectral-theorem-for-normal-endomorphisms]]).

[F14] An endomorphism is self-adjoint exactly when its matrix in an orthonormal basis is Hermitian, and every self-adjoint endomorphism is normal ([[prop-self-adjoint-and-normal-matrix-criteria-in-orthonormal-bases]], [[def-self-adjoint-and-normal-endomorphism]]).

[F15] A finite orthonormal list $(e_0,\dots,e_{r-1})$ satisfies $\sum_{i<r}|\langle v,e_i\rangle|^2\le\|v\|^2$ for every $v$, with equality when $(e_i)$ is an orthonormal basis ([[thm-bessel-inequality-and-finite-parseval-identity]]).

[F16] Under the Axiom of Countable Choice every complete real or complex inner-product space is reflexive ([[thm-hilbert-spaces-are-reflexive-by-riesz-representation]]).

[F17] Under the ultrafilter lemma, DC and HB, a real or complex Banach space $X$ is reflexive if and only if every norm-bounded sequence in $X$ has a subsequence converging weakly to a point of $X$ ([[cor-reflexive-iff-every-bounded-sequence-has-a-weakly-convergent-subsequence]]).

[F18] Under HB, if a net $x_i\rightharpoonup x$ in a real or complex normed space, then $\|x\|\le\liminf_i\|x_i\|$, with no boundedness or completeness hypothesis ([[cor-weak-convergence-implies-lower-semicontinuity-of-the-norm]]).

[F20] The Axiom of Choice implies the ultrafilter lemma ([[thm-ultrafilter-lemma]]).

[F21] The Axiom of Choice implies HB, the real dominated-extension principle ([[thm-hahn-banach-dominated-extension]]).

[F22] In ZF, AC implies the Axiom of Countable Choice and the prescribed-initial-point form of Dependent Choice ([[lem-ac-supplies-countable-and-dependent-choice-for-banach-integration]]).

[F23] AC is the assertion that every family of nonempty sets has a choice function ([[def-axiom-of-choice]]); DC is the prescribed-initial-point form of [[def-dependent-choice]]; AC$_\omega$ selects from every at most countable family of nonempty sets ([[def-countable-choice]]); HB is the real dominated-extension principle over ZF ([[def-hahn-banach-extension-principle-relative]]).

[F19] (Demailly, Ch. VIII, Theorem 6.5 and its proof, printed p. 378, with (6.4) on p. 377.) On a weakly pseudoconvex Kähler manifold with a hermitian line bundle and a smooth weight having nonnegative curvature eigenvalues, a smooth closed $(n,q)$-form of finite reciprocal-eigenvalue energy has a smooth solution with the corresponding norm bound. No global $L^2$ hypothesis on the datum is required. Here use the trivial line bundle and the flat normalization in which $dz_j,d\bar z_j$ are orthonormal; the eigenvalues are those of $(\varphi_{j\bar k})$ and the metric volume is a constant multiple of $dV$. Put $\alpha=dz_1\wedge\cdots\wedge dz_n$. The map $\eta\mapsto\eta\wedge\alpha$ commutes with $\bar\partial$ and preserves coefficient norms, so the source bound transfers to $(0,q)$-forms; the common volume constant cancels.

[F24] Weak convergence of a net means convergence against every bounded linear functional; a sequence is the case $I=\mathbb N$ ([[def-weak-convergence-of-nets-and-sequences]]).

[F25] Under the complex Euclidean dictionary, $\Omega$ is an open connected subset of $\mathbb R^{2n}$, hence any two points can be joined by a polygonal path in $\Omega$ ([[rem-complex-euclidean-space-dictionary]], [[thm-open-connected-subsets-of-rn-are-polygonally-connected]]).

**Choice use.** AC is the ambient hypothesis recorded in the Statement and cited as [F23]; its countable instance AC$_\omega$ is consumed through the reflexive-Hilbert-space supplier [F16] and licenses the countably many applications of [F10] in step 2.2 that produce the sequence $(u_k)$, and DC and HB are consumed through the reflexivity criterion [F17]; the consequences AC $\Rightarrow$ ultrafilter lemma, AC $\Rightarrow$ HB and AC $\Rightarrow$ (DC and AC$_\omega$) are supplied by [F20], [F21] and [F22]. No other family of nonempty sets is selected, and apart from the interfaces named above no step uses choice beyond the definitions and the cited interfaces.

## Proof

**Proof technique:** direct.

1.1 By [F8] and [F9] choose a smooth strictly plurisubharmonic exhaustion $S$ and increasing regular values $c_k\to+\infty$, with $\Omega_k:=\{S<c_k\}$ relatively compact and exhausting $\Omega$. Fix $z_0\in\Omega$ and discard an initial finite segment so that $z_0\in\Omega_k$ for every remaining $k$. Let $D_k$ be the connected component of $\Omega_k$ containing $z_0$; these components are nested. They exhaust $\Omega$: for $z\in\Omega$, [F25] gives a polygonal path from $z_0$ to $z$, whose compact image lies in some $\Omega_k$ by the increasing open cover, so $z\in D_k$. Each $D_k$ is bounded because $\overline{\Omega_k}$ is compact. At $p\in\partial D_k$ one has $p\in\partial\Omega_k=\{S=c_k\}$; the regular-level chart makes $\Omega_k$ a connected local subgraph near $p$, and its inside part meets $D_k$, so it lies in $D_k$. Thus $D_k$ has $C^\infty$ boundary locally defined by $\rho=S-c_k$ with $d\rho(p)\ne0$. Strict plurisubharmonicity gives $\mathcal L_\rho(p;v)>0$ on every nonzero complex tangent vector, so $D_k$ is a bounded Levi pseudoconvex domain to which [F10] applies. [F7, F8, F9, F25, given]

1.2 For $a\in\Omega$ write $H(a):=(\varphi_{j\bar k}(a))$ and $B(a):=H(a)^T$. Reality of $\varphi$, the Wirtinger formulas [F11] and commutation of mixed partials [F12] give $\overline{H_{j k}}=H_{k j}$, so $H$ and $B$ are Hermitian and are self-adjoint by [F14]. Their characteristic polynomials agree, since $\det(tI-H^T)=\det(tI-H)$, so they have the same ordered eigenvalues $\lambda_i$. With the first-variable-linear inner product, $$\mathcal L_\varphi(a;v)=\sum_{j,k}H_{j k}(a)v_j\overline{v_k}=\langle B(a)v,v\rangle.$$ Thus strict plurisubharmonicity [F6] makes $B$ positive definite. Its orthonormal eigenbasis from [F13] shows that $\lambda_1(a)=\min_{|v|=1}\langle B(a)v,v\rangle>0$, hence every eigenvalue of $H$ is positive and $w(a)\ge q\lambda_1(a)>0$. [F6, F11, F12, F13, F14, given]

1.3 For each $k$ let $f_k$ be the restriction of $f$ to $D_k$, that is the tuple of restrictions $f_{k,K}:=f_K|_{D_k}$. Then $f_k\in L^2_{0,q}(D_k,e^{-\varphi})$ with $\int_{D_k}|f_k|^2w^{-1}e^{-\varphi}dV\le E(f)$ because $f\in L^2_{0,q}(\Omega,e^{-\varphi})$ and the integrand is nonnegative, and $f_k\in\operatorname{Dom}\bar\partial_q(D_k)$ with $\bar\partial_qf_k=0$: distributional differentiation is local, so the coefficient distributions of $\bar\partial f_k$ on $D_k$ are obtained by evaluating those of $\bar\partial f$ on test functions supported in $D_k$, and the coefficient formula and test identity of [F2], [F4] and [F5] pair them with the test functions $\overline{\psi}$, $\psi\in C_c^\infty(D_k)$, exactly as $\bar\partial f$ pairs with the zero extensions of $\overline{\psi}$ to $\Omega$; since the distribution $\bar\partial f$ is represented by the zero form by the hypothesis $\bar\partial_qf=0$, its restriction to $D_k$ is represented by the zero form as well. [F1, F2, F4, F5, given]

1.4 Fix a test form $\eta\in C_c^\infty(\Omega;\Lambda^{0,q})$ and let $\partial_0^*\eta$ be the $(0,q-1)$-form with coefficients $(\partial_0^*\eta)_I:=-\sum_{j=1}^n\partial_{z_j}\eta_{jI}$; then, writing $H:=L^2_{0,q-1}(\Omega,e^{-\varphi})$, $e^{\varphi}\partial_0^*\eta$ is compactly supported, of class $C^2$, and lies in $H$, and for every $\tilde u\in H$ one has the distributional identity $\sum_{|K|=q}\langle(\bar\partial\tilde u)_K,\overline{\eta_K}\rangle=\langle\tilde u,e^{\varphi}\partial_0^*\eta\rangle_\varphi$, where the left side evaluates the coefficient distributions of [F2](b) against the test functions $\overline{\eta_K}$ and the antisymmetry convention of [F3] assigns the shuffle signs: both sides equal the single sum $-\sum_{|I|=q-1}\sum_{j=1}^n\int_\Omega\tilde u_I\,\partial_{\bar z_j}\bigl(\overline{\eta_{jI}}\bigr)dV$, the left by the test identity of [F5] and the sign convention for $\bar\partial$ of [F4], and the right by expanding the pairing of [F1](a) with $\overline{\bigl(e^{\varphi}(\partial_0^*\eta)_I\bigr)}=e^{\varphi}\overline{(\partial_0^*\eta)_I}$ and conjugating the holomorphic derivative by the Wirtinger rules [F11]. [F1, F2, F3, F4, F5, F11, given, algebra]

2.1 The function $w$ is upper semicontinuous, hence Borel measurable, on $\Omega$: for every orthonormal $q$-frame $\mathcal V=(v_1,\dots,v_q)$ the function $a\mapsto G(a,\mathcal V):=\sum_{i=1}^q\langle H(a)v_i,v_i\rangle$ is continuous, and $w(a)=\min_{\mathcal V}G(a,\mathcal V)$ over the nonempty set of orthonormal $q$-frames, because expanding in an eigenbasis $(e_j)$ of step 1.2 gives $G(a,\mathcal V)=\sum_j\lambda_j(a)m_j$ with $m_j:=\sum_i|\langle v_i,e_j\rangle|^2\in[0,1]$ by the Bessel inequality of [F15] and $\sum_jm_j=\sum_i\|v_i\|^2=q$ by its Parseval clause, and for such a mass vector $\sum_j\lambda_j(a)m_j-(\lambda_1+\cdots+\lambda_q)(a)=\sum_{j\le q}\lambda_j(m_j-1)+\sum_{j>q}\lambda_jm_j\ge\lambda_q\left(\sum_{j\le q}(m_j-1)+\sum_{j>q}m_j\right)=0$, with equality for $\mathcal V=(e_1,\dots,e_q)$; hence $\{w<c\}=\bigcup_{\mathcal V}\{a:G(a,\mathcal V)<c\}$ is a union of open sets, and since $w>0$ on $\Omega$ by step 1.2 the integrand $|f|^2w^{-1}e^{-\varphi}$ is a nonnegative measurable function, so that the energy $E(f)$ of the statement is a well-defined extended Lebesgue integral. [F1, F15, step 1.2, given, algebra]

2.2 Fix $k$ and take $D:=D_k$. The domain $D$ is a bounded Levi pseudoconvex domain with $C^\infty$ boundary, the weight $\varphi$ lies in $C^2$ on a neighbourhood of $\overline D\subseteq\Omega$ and is strictly plurisubharmonic at every point of $\overline D$ by step 1.2 and the hypothesis, and the datum $f_k$ lies in $\operatorname{Dom}\bar\partial_q(D)$ with $\bar\partial_qf_k=0$ by step 1.3; all hypotheses of [F10] are therefore met, and its conclusion supplies the least-norm solution $u_k\in\operatorname{Dom}\bar\partial_{q-1}(D)$ of $\bar\partial_{q-1}u=f_k$ with $\|u_k\|_{\varphi,D}^2\le\int_D|f|^2w^{-1}e^{-\varphi}dV\le E(f)$, where the eigenvalue functions named in [F10] are the functions $\lambda_j$ of step 1.2 and the last inequality is step 1.3 with the nonnegative integrand and $D\subseteq\Omega$. [F10, step 1.1, step 1.2, step 1.3, given]

3.1 Extend each $u_k$ by zero: let $\tilde u_k$ equal $u_k$ on $D_k$ and $0$ on $\Omega\setminus D_k$, regarded as a coefficient tuple. Then $\tilde u_k\in H:=L^2_{0,q-1}(\Omega,e^{-\varphi})$ with measurable coefficients, $\|\tilde u_k\|_\varphi^2=\|u_k\|_{\varphi,D_k}^2\le E(f)$ by step 2.2, and consequently $(\tilde u_k)_{k\ge1}$ is a norm-bounded sequence in the complex Hilbert space $H$ of [F1]. [F1, step 2.2, given, algebra]

3.2 Let $\eta\in C_c^\infty(\Omega;\Lambda^{0,q})$ and let $K$ be an index with $\operatorname{supp}\eta\subseteq D_K$, which exists because the sets $D_k$ increase to $\Omega$ by step 1.1 while $\operatorname{supp}\eta$ is compact; for every $k\ge K$ the left side of the identity of step 1.4 with $\tilde u:=\tilde u_k$ equals $\int_\Omega\sum_{|K'|=q}f_{K'}\overline{\eta_{K'}}dV=:\langle f,\eta\rangle_0$: on the open set $D_k\supseteq\operatorname{supp}\eta$ the tuples $\tilde u_k$ and $u_k$ agree, so by the locality of distributional differentiation the coefficient distributions of $\bar\partial\tilde u_k$ evaluated against the test functions $\overline{\eta_{K'}}$ depend only on $u_k$, and there the $L^2$ identity $\bar\partial_{q-1}u_k=f_k$ of step 2.2 represents them by the coefficients $f_{K'}$. [F1, F5, step 1.1, step 1.4, step 2.2, given]

4.1 The space $H$ is reflexive by [F16], whose countable-choice hypothesis is the instance AC$_\omega$ supplied by AC through [F22]; by [F17], whose ultrafilter-lemma, DC and HB hypotheses are supplied from AC by [F20], [F22] and [F21], a reflexive complex Banach space has the property that the norm-bounded sequence $(\tilde u_k)$ admits a subsequence $(\tilde u_{k_j})_{j\ge1}$ converging weakly in $H$ to some $u\in H$. [F16, F17, F20, F21, F22, step 3.1]

5.1 By [F18], whose HB hypothesis is supplied from AC by [F21], applied to the weakly convergent sequence of step 4.1 one has $\|u\|_\varphi\le\liminf_{j\to\infty}\|\tilde u_{k_j}\|_\varphi$, and $\|\tilde u_{k_j}\|_\varphi^2\le E(f)$ for every $j$ by step 3.1, so that $\liminf_j\|\tilde u_{k_j}\|_\varphi\le E(f)^{1/2}$ and $\|u\|_\varphi^2\le E(f)$. [F18, F21, step 3.1, step 4.1, algebra]

5.2 Let $\eta\in C_c^\infty(\Omega;\Lambda^{0,q})$. By step 1.4 the left side of its identity with $\tilde u:=\tilde u_{k_j}$ equals $\langle\tilde u_{k_j},e^{\varphi}\partial_0^*\eta\rangle_\varphi$, and this scalar converges to $\langle u,e^{\varphi}\partial_0^*\eta\rangle_\varphi$ as $j\to\infty$ because $e^{\varphi}\partial_0^*\eta\in H$ and $\tilde u_{k_j}\rightharpoonup u$ weakly (step 4.1 and the characterization of weak convergence by bounded functionals in [F24]); by step 3.2 the same scalar equals $\langle f,\eta\rangle_0$ for all sufficiently large $j$, so $\langle u,e^{\varphi}\partial_0^*\eta\rangle_\varphi=\langle f,\eta\rangle_0$, and by step 1.4 applied with $\tilde u:=u$, whose left side is by construction the pairing of the coefficient distributions of $\bar\partial u$ with the test form $\eta$, the distribution $\bar\partial u$ is represented by the $L^2$ form $f$; by the definition of the maximal operator [F2](b) this says $u\in\operatorname{Dom}\bar\partial_{q-1}(\Omega)$ and $\bar\partial_{q-1}u=f$. [F1, F2, F24, step 4.1, step 1.4, step 3.2]

6.1 Claim 1 holds: the element $u$ of step 5.2 lies in $\operatorname{Dom}\bar\partial_{q-1}$ with $\bar\partial_{q-1}u=f$, and $\|u\|_\varphi^2\le E(f)$ by step 5.1. Claim 2 holds by the source fact [F19] under its hypotheses: $\Omega$ with the Euclidean Kähler form is a weakly pseudoconvex Kähler manifold because the exhaustion of [F9] is a plurisubharmonic exhaustion, $\varphi\in C^\infty(\Omega)$ has nonnegative eigenvalues $\lambda_j>0$, and the smooth $\bar\partial$-closed form $f$ has finite energy, so the $C^\infty$ branch of the quoted theorem supplies $u\in C^\infty(\Omega;\Lambda^{0,q-1})$ with $\bar\partial u=f$ and the same weighted bound; no boundary regularity of $u$ is asserted in either claim, and both claims are stated under the ambient Axiom of Choice cited as [F23]. [F9, F23, F19, step 5.1, step 5.2, given] ∎
