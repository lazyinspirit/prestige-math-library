---
id: lem-mean-zero-poincare-estimate-on-bounded-connected-extension-domains-for-p-less-than-n
kind: lemma
title: "Mean-zero Poincare estimate on bounded connected extension domains below the dimension"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 0
deps: [def-sobolev-space-wkp-and-its-norm, def-sobolev-extension-domain-and-extension-operator, def-l-p-space-as-a-quotient-by-null-functions, def-axiom-of-choice, def-countable-choice, def-dependent-choice, lem-euclidean-bump-for-a-compact-set-inside-an-open-set, lem-weak-leibniz-rule-with-a-smooth-factor, cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn, thm-lebesgue-outer-measure-and-measurability-are-translation-invariant, cor-vector-valued-ftc-and-lipschitz-bound, thm-minkowski-integral-inequality, thm-holder-inequality-for-integrals, def-radial-mollifier-family-in-rn, thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign, thm-arzela-ascoli-for-real-ck, thm-metric-compactness-equivalences, cor-euclidean-closed-balls-and-spheres-are-compact, thm-riesz-fischer-completeness-of-l-p, lem-weak-derivatives-are-unique-almost-everywhere, thm-zero-weak-gradient-implies-componentwise-constancy, def-weak-derivative-of-a-locally-integrable-function, thm-tonelli-and-fubini-for-completed-product-measures, lem-euclidean-balls-have-positive-finite-lebesgue-measure, prop-measure-monotonicity, prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets, thm-complex-lp-completeness-and-almost-everywhere-subsequences, thm-completion-measurable-functions-have-base-measurable-representatives, cor-lebesgue-sigma-algebra-is-the-completion-of-borel-lebesgue-measure]
proof_strategy: "Prove the mean-zero inequality by contradiction: a minimising sequence of mean-zero unit-$L^p$ functions with gradient norms tending to zero is extended by a fixed extension operator, cut off to a fixed compact support, mollified at every scale and diagonalised using Arzela-Ascoli; the $L^p$ limit has vanishing weak gradient and zero mean but unit norm, contradicting connectedness."
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Juha Kinnunen, Sobolev Spaces (Aalto University, complete graduate lecture notes)"
      url: "https://math.aalto.fi/~jkkinnun/files/sobolev_spaces.pdf"
      locator: "Theorem 3.47, printed pp. 90–91 (PDF pp. 93–94), mean-zero contradiction proof; the internal smoothing compactness argument supplies its Theorem 3.44 use locally."
---

## Statement

Assume the Axiom of Choice (and hence Countable Choice and Dependent Choice). Let $n\ge2$, $1<p<n$, $\mathbb K\in\{\mathbb R,\mathbb C\}$, and let $\Omega\subset\mathbb R^n$ be a nonempty bounded connected $W^{1,p}$-extension domain. Then there exists $C_P=C_P(n,p,\Omega,\mathbb K)$ such that $\|u-u_\Omega\|_{L^p(\Omega)}\le C_P\|Du\|_{L^p(\Omega)}$ for every $u\in W^{1,p}(\Omega;\mathbb K)$, where $u_\Omega=|\Omega|^{-1}\int_\Omega u$.

## Facts & Assumptions

**Given:** The Axiom of Choice; integers $n\ge2$; an exponent $1<p<n$; a field $\mathbb K\in\{\mathbb R,\mathbb C\}$; a nonempty bounded connected $W^{1,p}$-extension domain $\Omega\subset\mathbb R^n$; a bounded linear extension operator $E:W^{1,p}(\Omega;\mathbb K)\to W^{1,p}(\mathbb R^n;\mathbb K)$ with $(Eu)|_\Omega=u$ and operator norm $\|E\|$; a nonnegative unit-mass $\rho\in C_c^\infty(\mathbb R^n)$ with $\operatorname{supp}\rho\subseteq\overline B_1(0)$ and radial mollifiers $\rho_\varepsilon$.

[F1] The Axiom of Choice is the statement that every family of nonempty sets has a choice function, and it implies Countable Choice ([[def-axiom-of-choice]], [[def-countable-choice]]).

[F2] Dependent Choice is the statement that every entire relation on a nonempty set admits a sequence with prescribed first term ([[def-dependent-choice]]).

[F3] $W^{1,p}(\Omega;\mathbb K)$ consists of the $L^p$ classes with weak first derivatives in $L^p$, and $L^p$ is the quotient by almost-everywhere null functions ([[def-sobolev-space-wkp-and-its-norm]], [[def-l-p-space-as-a-quotient-by-null-functions]]).

[F4] A $W^{1,p}$-extension domain carries a bounded linear $E$ with $(Eu)|_\Omega=u$ ([[def-sobolev-extension-domain-and-extension-operator]]).

[F5] Weak Leibniz rule: for smooth $\eta$ with bounded value and first derivatives and $v\in W^{1,p}$ the product $\eta v$ lies in $W^{1,p}$ and $D(\eta v)=(D\eta)v+\eta Dv$ ([[lem-weak-leibniz-rule-with-a-smooth-factor]]).

[F6] For a compact $K$ inside an open $U$ there is a smooth $\chi$ with $\chi=1$ on $K$ and support in $U$ ([[lem-euclidean-bump-for-a-compact-set-inside-an-open-set]]).

[F7] $C_c^\infty(\mathbb R^n;\mathbb K)$ is dense in $W^{1,p}(\mathbb R^n;\mathbb K)$ for $1\le p<\infty$ ([[cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn]]).

[F8] Lebesgue measure is translation invariant ([[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]]).

[F9] Vector-valued fundamental theorem: for a differentiable $f:[a,b]\to\mathbb R^m$ with integrable derivative, $f(b)-f(a)=\int_a^bf'$ ([[cor-vector-valued-ftc-and-lipschitz-bound]]).

[F10] The family $\rho_\varepsilon(x)=\varepsilon^{-n}\rho(x/\varepsilon)$ is the radial mollifier family generated by $\rho$, with $\rho_\varepsilon\ge0$, $\int\rho_\varepsilon=1$ and $\operatorname{supp}\rho_\varepsilon\subseteq\overline B_\varepsilon(0)$ ([[def-radial-mollifier-family-in-rn]]).

[F11] For locally integrable $f$ the convolution $f*\rho_\varepsilon$ is smooth with $\partial^\alpha(f*\rho_\varepsilon)=f*(\partial^\alpha\rho_\varepsilon)$ ([[thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign]]).

[F12] Holder's inequality for integrals ([[thm-holder-inequality-for-integrals]]).

[F13] Minkowski's integral inequality: for a measurable $F$ on a product with $\int_Y\|F(\cdot,y)\|_{L^p(X)}\,d\nu(y)<\infty$, the function $x\mapsto\int_Y|F(x,y)|\,d\nu(y)$ lies in $L^p(X)$ with norm at most $\int_Y\|F(\cdot,y)\|_{L^p(X)}\,d\nu(y)$ ([[thm-minkowski-integral-inequality]]).

[F14] Arzela-Ascoli: for a nonempty compact metric space $K$, a subset of $C(K,\mathbb R)$ has compact closure in the supremum metric exactly when it is equicontinuous and pointwise bounded ([[thm-arzela-ascoli-for-real-ck]]).

[F15] Under Countable Choice and Dependent Choice a compact metric space is sequentially compact, and Euclidean closed balls are compact ([[thm-metric-compactness-equivalences]], [[cor-euclidean-closed-balls-and-spheres-are-compact]]).

[F16] $L^p$ is complete for $1\le p\le\infty$ ([[thm-riesz-fischer-completeness-of-l-p]], [[thm-complex-lp-completeness-and-almost-everywhere-subsequences]]).

[F17] Weak derivatives are unique almost everywhere, and the weak derivative is defined by the test-function identity ([[lem-weak-derivatives-are-unique-almost-everywhere]], [[def-weak-derivative-of-a-locally-integrable-function]]).

[F18] If $u\in W^{1,p}_{\mathrm{loc}}(\Omega;\mathbb K)$ has $D_iu=0$ almost everywhere for every $i$, then $u$ is almost everywhere constant on each connected component of $\Omega$ ([[thm-zero-weak-gradient-implies-componentwise-constancy]]).

[F19] On a completed sigma-finite product, nonnegative measurable functions may be integrated in either order, and Tonelli-Fubini applies to measurable integrands of the form $G(x,y)$ ([[thm-tonelli-and-fubini-for-completed-product-measures]]).

[F20] Every Euclidean ball has positive finite Lebesgue measure ([[lem-euclidean-balls-have-positive-finite-lebesgue-measure]]), $\lambda$ is monotone under inclusion ([[prop-measure-monotonicity]]), and bounded subsets have finite outer measure ([[prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets]]).

[F21] Under Countable Choice, Lebesgue measure is the completion of its Borel restriction ([[cor-lebesgue-sigma-algebra-is-the-completion-of-borel-lebesgue-measure]]), and every completion-measurable real function has an almost-everywhere equal Borel representative ([[thm-completion-measurable-functions-have-base-measurable-representatives]]); apply this to real and imaginary parts for complex functions.

## Proof

**Proof technique:** contradiction.

1.1 The contradiction setup. Because $\Omega$ is nonempty open and bounded, it contains a ball and $0<|\Omega|<\infty$ by [F20], so the mean $u_\Omega$ is defined for every $u\in L^p(\Omega;\mathbb K)$. Suppose the asserted constant does not exist. Then for every $j\ge1$ there is $u_j\in W^{1,p}(\Omega;\mathbb K)$ with $\|u_j-(u_j)_\Omega\|_{L^p(\Omega)}>j\|Du_j\|_{L^p(\Omega)}$; the left side is positive, and Countable Choice [F1] selects such a sequence. Put $v_j:=(u_j-(u_j)_\Omega)/\|u_j-(u_j)_\Omega\|_{L^p(\Omega)}$. Then $v_j\in W^{1,p}(\Omega;\mathbb K)$, $(v_j)_\Omega=0$, $\|v_j\|_{L^p(\Omega)}=1$ and $\|Dv_j\|_{L^p(\Omega)}<1/j$. [F1, F3, F20, given, choose]

1.2 Translation differences. Every $W\in W^{1,p}(\mathbb R^n;\mathbb K)$ and $h\in\mathbb R^n$ satisfy $\|W(\cdot-h)-W\|_{L^p(\mathbb R^n)}\le|h|\,\|DW\|_{L^p(\mathbb R^n)}$. For smooth compactly supported $\varphi$ the fundamental theorem [F9] applied to $t\mapsto\varphi(x-th)$ gives $\varphi(x-h)-\varphi(x)=-\int_0^1D\varphi(x-th)h\,dt$, so Minkowski [F13] and translation invariance [F8] give $\|\varphi(\cdot-h)-\varphi\|_p\le|h|\int_0^1\|D\varphi(\cdot-th)\|_p\,dt=|h|\|D\varphi\|_p$. For general $W$, [F7] provides $\varphi_k\in C_c^\infty$ with $\varphi_k\to W$ in $W^{1,p}(\mathbb R^n)$; applying the smooth bound to $\varphi_k$ and letting $k\to\infty$, using translation invariance [F8] on the left and strong convergence on the right, gives the claim. [F7, F8, F9, F13, algebra]

2.1 Extension and cutoff. Fix $E$ as in [F4] and put $M_0:=\|E\|$. The closure $\overline\Omega$ is compact. Choose a bounded open ball $U$ containing it; [F6] gives a smooth $\chi$ equal to $1$ on $\overline\Omega$ with closed support contained in $U$. That support is bounded and hence compact, so $\chi\in C_c^\infty(\mathbb R^n)$; put $K:=\operatorname{supp}\chi$, a compact set. Define $F_j:=\chi\,Ev_j$. By [F5] each $F_j$ lies in $W^{1,p}(\mathbb R^n;\mathbb K)$, has support in $K$, restricts to $v_j$ on $\Omega$ (because $\chi=1$ there) and satisfies $\|F_j\|_{L^p(\mathbb R^n)}+\|DF_j\|_{L^p(\mathbb R^n)}\le(n+1)(1+\|\chi\|_\infty+\|D\chi\|_\infty)\|Ev_j\|_{W^{1,p}(\mathbb R^n)}\le M$ with $M:=(n+1)^2(1+\|\chi\|_\infty+\|D\chi\|_\infty)M_0$, using $\|v_j\|_{W^{1,p}}\le n+1$ and the elementary bound of the Euclidean gradient norm by the sum of its coordinate norms from step 1.1 and the operator bound of [F4]. [F4, F5, F6, step 1.1, algebra]

3.1 Mollification and equicontinuity at one scale. Fix $0<\varepsilon\le1$. By [F10] and [F11], $F_j*\rho_\varepsilon$ is smooth on $\mathbb R^n$ with $D(F_j*\rho_\varepsilon)=F_j*D\rho_\varepsilon$ and support in the compact set $K':=K+\overline B_1(0)$. Holder [F12] gives, uniformly in $j$ and $x$, $|(F_j*\rho_\varepsilon)(x)|\le\|F_j\|_{L^p}\|\rho_\varepsilon\|_{L^{p'}}\le M\|\rho_\varepsilon\|_{L^{p'}}$ and $|D(F_j*\rho_\varepsilon)(x)|\le M\|D\rho_\varepsilon\|_{L^{p'}}$, using step 2.1. The second bound makes the family $\{F_j*\rho_\varepsilon\}_j$ equicontinuous on the compact metric space $K'$ and the first makes it pointwise bounded. [F10, F11, F12, step 2.1, algebra]

3.2 Uniform mollification error. By [F10], $F_j*\rho_\varepsilon-F_j=\int\rho_\varepsilon(y)(F_j(\cdot-y)-F_j)\,dy$ on $\mathbb R^n$. Choose finite-valued Borel representatives of each $F_j$ using [F21], changing them to zero on a Borel null set and outside $K$. Then $(x,y)\mapsto F_j(x-y)$ and $F_j(x)$ are Borel measurable, since subtraction and projection are continuous. The integrand is therefore product measurable, with measurable absolute section integrals by [F19]. Minkowski [F13], the translation bound of step 1.2 and $\operatorname{supp}\rho_\varepsilon\subseteq\overline B_\varepsilon(0)$ give $\|F_j*\rho_\varepsilon-F_j\|_{L^p(\mathbb R^n)}\le\int\rho_\varepsilon(y)\|F_j(\cdot-y)-F_j\|_{L^p}\,dy\le\varepsilon\|DF_j\|_{L^p}\le\varepsilon M$, the last inequality by step 2.1. [F10, F13, F19, F21, step 1.2, step 2.1, algebra]

4.1 One scale at a time. Fix $0<\varepsilon\le1$. The family $\{F_j*\rho_\varepsilon\}_j$ is uniformly bounded and equicontinuous on the compact set $K'$ by step 3.1, so by Arzela-Ascoli [F14] its closure in $C(K';\mathbb C)\cong C(K';\mathbb R)^2$ is compact; applying [F14] to the real and imaginary parts componentwise and then the sequential compactness of [F15], there is a subsequence $(j_k)_k$ and $G_\varepsilon\in C(K';\mathbb K)$ with $F_{j_k}*\rho_\varepsilon\to G_\varepsilon$ uniformly on $K'$. [F14, F15, step 3.1, given]

5.1 Diagonalisation over the scales. Apply step 4.1 successively to the scales $\varepsilon_m=2^{-m}$, each time to the previously selected subsequence, and select the $m$-th extracted subsequence at stage $m$ in such a way that the diagonal sequence $(j_k)$, where $j_k$ is the $k$-th index of the $k$-th subsequence, is strictly increasing; Dependent Choice [F2] formalises the recursion. Then for every fixed $m$ the tail $(F_{j_k}*\rho_{\varepsilon_m})_{k\ge m}$ is a subsequence of the $m$-th extracted subsequence, hence converges uniformly on $K'$ and in particular is Cauchy in $L^p(K')$. [F2, step 4.1, choose, construct]

6.1 Cauchy and the $L^p$ limit. For $k,l\ge m$, step 3.2 applied at scale $\varepsilon_m$ and the uniform convergence on $K'$ of step 5.1 give $\|F_{j_k}-F_{j_l}\|_{L^p(\mathbb R^n)}\le2M\varepsilon_m+\|F_{j_k}*\rho_{\varepsilon_m}-F_{j_l}*\rho_{\varepsilon_m}\|_{L^p(K')}$. Given $\delta>0$ choose $m$ with $2M2^{-m}<\delta/2$, then $k,l$ large enough that the second term is below $\delta/2$; hence $(F_{j_k})_k$ is Cauchy in $L^p(\mathbb R^n;\mathbb K)$ and converges by [F16] to some $F\in L^p(\mathbb R^n;\mathbb K)$. [F16, step 3.2, step 5.1, algebra]

7.1 Properties of the limit. Restrict $v:=F|_\Omega$. Since $F_{j_k}|_\Omega=v_{j_k}$ by step 2.1 and $\|v-v_{j_k}\|_{L^p(\Omega)}\le\|F-F_{j_k}\|_{L^p(\mathbb R^n)}\to0$ by step 6.1, the limit of the norms gives $\|v\|_{L^p(\Omega)}=1$, and Holder [F12] with $|\Omega|<\infty$ gives $\bigl|\int_\Omega v\bigr|=\lim_k\bigl|\int_\Omega v_{j_k}\bigr|=0$ because every $v_{j_k}$ has mean zero (step 1.1). Thus $v\in L^p(\Omega;\mathbb K)$ has unit norm and mean zero. [F3, F12, step 1.1, step 2.1, step 6.1, algebra]

8.1 The weak gradient of the limit vanishes. Let $\varphi\in C_c^\infty(\Omega)$ and $1\le i\le n$. Since $v_{j_k}$ is the weak $i$-th derivative pair, $\int_\Omega v_{j_k}\partial_i\varphi=-\int_\Omega D_iv_{j_k}\varphi$ for every $k$ by [F17]. Holder [F12] gives $\bigl|\int_\Omega D_iv_{j_k}\varphi\bigr|\le\|D_iv_{j_k}\|_{L^p}\|\varphi\|_{L^{p'}}\le j_k^{-1}\|\varphi\|_{L^{p'}}\to0$, using step 1.1, and $\int_\Omega v_{j_k}\partial_i\varphi\to\int_\Omega v\,\partial_i\varphi$ by step 7.1 and Holder. Hence $\int_\Omega v\,\partial_i\varphi=0$ for every test function and every $i$, so the zero function is a weak $i$-th derivative of $v$; by uniqueness of weak derivatives [F17], $D_iv=0$ almost everywhere on $\Omega$ and $v\in W^{1,p}(\Omega;\mathbb K)$. [F3, F12, F17, step 1.1, step 7.1, algebra]

9.1 The contradiction. By step 8.1 the class $v\in W^{1,p}(\Omega;\mathbb K)$ has all weak derivatives zero almost everywhere, so [F18] and the connectedness of $\Omega$ give a constant $c\in\mathbb K$ with $v=c$ almost everywhere on $\Omega$. Step 7.1 gives $0=\int_\Omega v=c|\Omega|$, hence $c=0$ and $v=0$ almost everywhere, contradicting $\|v\|_{L^p(\Omega)}=1$ from step 7.1. Therefore a constant $C_P=C_P(n,p,\Omega,\mathbb K)$ with the asserted property exists. [F18, step 7.1, step 8.1, given, contradiction] ∎

## Source notes

Kinnunen proves the mean-zero estimate as the inner step of Theorem 3.47 (printed pp. 90-91) using the Rellich-Kondrachov compactness theorem. The proof above replaces that compactness input by an internal argument: the extension operator of the definition of an extension domain, a fixed smooth cutoff, mollification at every scale, Arzela-Ascoli on a fixed compact set, a diagonal subsequence and the completeness of $L^p$. The weak derivative of the limit is obtained from the test-function identity rather than from strong convergence of gradients, so no compactness theorem from the later compactness page is used. The argument uses Countable Choice to select the minimising sequence and Dependent Choice for the nested subsequences; both are supplied by the Axiom of Choice assumed in the Statement.
