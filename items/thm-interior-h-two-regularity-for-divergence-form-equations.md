---
id: thm-interior-h-two-regularity-for-divergence-form-equations
kind: theorem
title: "Interior $H^2$ regularity for divergence-form equations"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 5
deps: [def-local-weak-solution-for-a-divergence-form-operator, def-uniformly-elliptic-divergence-form-operator, lem-tangential-difference-quotient-test-function, thm-difference-quotient-characterisation-of-w-one-p-for-p-greater-than-one, lem-interpolation-absorbs-lower-order-sobolev-terms-in-elliptic-estimates, cor-scaled-caccioppoli-inequality-on-concentric-balls, lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set, thm-young-inequality-real-exponents, thm-holder-inequality-for-integrals, def-countable-choice, lem-cutoff-difference-quotient-commutator-estimate, lem-weak-limit-of-uniformly-bounded-difference-quotients-is-the-weak-derivative, lem-euclidean-bump-for-a-compact-set-inside-an-open-set]
landmark: false
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "John K. Hunter, Notes on Partial Differential Equations (UC Davis, revised 18 June 2014, complete 242-page two-quarter graduate notes)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "Section 4.11, Theorem 4.27, printed pp. 110-114 (read in full)"
    - title: "Richard S. Laugesen, Linear Analysis and Partial Differential Equations (University of Illinois, 2020, complete 158-page graduate notes)"
      url: "https://publish.illinois.edu/rlaugesen/files/2023/07/554-Lectures.pdf"
      locator: "Chapter 5, Section 5.2, Theorem 5.6, printed pp. 108-110 (read in full)"
---

## Statement

Assume Countable Choice. Let $\Omega\subseteq\mathbb R^n$ be open,
$n\ge1$, $\mathbb K\in\{\mathbb R,\mathbb C\}$, let $L,a$ be as in
[[def-uniformly-elliptic-divergence-form-operator]] with constants
$\theta,M_a,M_b,M_c$ and with $a^{ij}\in W^{1,\infty}(\Omega)$ satisfying
$\|Da^{ij}\|_\infty\le M_1$, and let $f\in L^2_{\mathrm{loc}}(\Omega)$. If
$u\in H^1(\Omega)$ is a local weak solution of $Lu=f$ on $\Omega$
([[def-local-weak-solution-for-a-divergence-form-operator]]), then
$u\in H^2_{\mathrm{loc}}(\Omega)$, and for all open sets
$\Omega'\Subset\Omega''\Subset\Omega$ there is
$C=C(n,\theta,M_a,M_b,M_c,M_1,\Omega',\Omega'')$ with
$$\|u\|_{H^2(\Omega')}\le C\big(\|f\|_{L^2(\Omega'')}+\|u\|_{L^2(\Omega'')}\big).$$
Consequently the equation $Lu=f$ holds pointwise almost everywhere with
$D_i(a^{ij}D_ju)$ understood through the a.e. defined product
$(D_ia^{ij})D_ju+a^{ij}D_iD_ju$, and the same estimate holds for complex-valued $u$ by taking real parts in the coercive energy bounds; no splitting of complex coefficients into real and imaginary equations is used.
The scaffold wrote $\|f\|_{L^2(\Omega)}+\|u\|_{L^2(\Omega)}$ on the
right-hand side, which is ill-posed for a datum known only to lie in
$L^2_{\mathrm{loc}}(\Omega)$ (for instance $f=1/x$ on $\Omega=(0,1)$ is
locally but not globally square-integrable); the nested formulation above is
the well-posed local statement, and the quantitative content is otherwise
unchanged.

## Facts & Assumptions

**Given:** Countable Choice; the open set $\Omega$; coefficients $a^{ij}\in W^{1,\infty}(\Omega)$ with $\|Da^{ij}\|_\infty\le M_1$ and the bounds and ellipticity of $L$; the datum $f\in L^2_{\mathrm{loc}}(\Omega)$; and a local weak solution $u\in H^1(\Omega)$ of $Lu=f$.

[F1] Local weak solution: $a(u,\varphi)=\int_\Omega f\overline\varphi\,dx$ for every $\varphi\in C_c^\infty(\Omega)$. ([[def-local-weak-solution-for-a-divergence-form-operator]])

[F2] Coefficient package: $|a^{ij}|\le M_a$, $|b^i|\le M_b$, $|c|\le M_c$, $|D_ka^{ij}|\le M_1$ almost everywhere, and $\operatorname{Re}(a^{ij}\xi_j\overline{\xi_i})\ge\theta|\xi|^2$. ([[def-uniformly-elliptic-divergence-form-operator]])

[F3] Localised difference-quotient pairing. Choose nested open sets $\Omega'\Subset U_1\Subset U_2\Subset\Omega''$ and $\eta\in C_c^\infty(U_2;\mathbb R)$ with $\eta=1$ on $U_1$. For sufficiently small $h\ne0$ and a coordinate $k$, the test $v=-\delta_{-h}^k(\eta^2\delta_h^ku)$ belongs to $H^1_0(U_2)$, and the local weak identity extends to it by density. Discrete integration by parts in the principal part gives $P_h+R_{a,h}$, where $P_h=\int\eta^2a^{ij}(x+he_k)(\delta_h^kD_ju)\overline{(\delta_h^kD_iu)}$ and $\operatorname{Re}P_h\ge\theta E_h$ for $E_h:=\int\eta^2|\delta_h^kDu|^2$. The remainder contains only cutoff terms and first difference quotients of $a^{ij}$; since $a^{ij}\in W^{1,\infty}$, $|\delta_h^ka^{ij}|\le M_1$, and for every $\varepsilon>0$, $|R_{a,h}|\le\varepsilon E_h+C_\varepsilon(\|u\|^2_{L^2(U_2)}+ \|Du\|^2_{L^2(U_2)})$, uniformly in small $h$. Furthermore, $\|v\|_{L^2(U_2)}\le C_\eta(E_h^{1/2}+\|Du\|_{L^2(U_2)})$ by $\|\delta_{-h}w\|_2\le\|D_kw\|_2$ and the product rule. Therefore the lower-order and source pairings, estimated without differencing $b^i$ or $c$, satisfy $|\int_{U_2}(b^iD_iu+c u-f)\overline v| \le\varepsilon E_h+C_\varepsilon(\|Du\|^2_{L^2(U_2)}+ \|u\|^2_{L^2(U_2)}+\|f\|^2_{L^2(U_2)})$. ([[def-local-weak-solution-for-a-divergence-form-operator]], [[lem-tangential-difference-quotient-test-function]], [[thm-young-inequality-real-exponents]], [[thm-holder-inequality-for-integrals]])

[F4] Local Caccioppoli control on nested bounded sets. If $U_2$ is bounded with $\overline{U_2}\Subset U_3\Subset\Omega$, cover $\overline{U_2}$ by finitely many inner balls $B_{r_\ell}$ whose concentric outer balls $B_{R_\ell}$ are compactly contained in $U_3$. Applying the ball Caccioppoli estimate on each pair and summing gives $\|Du\|^2_{L^2(U_2)}\le C(\|u\|^2_{L^2(U_3)}+\|f\|^2_{L^2(U_3)})$, with $C$ allowed to depend on the finite cover, hence on $U_2,U_3$, as well as $n,\theta,M_a,M_b,M_c$ ([[cor-scaled-caccioppoli-inequality-on-concentric-balls]]).

[F5] Difference-quotient characterisation of $W^{1,p}$, $1<p<\infty$: $\|\delta_h^iu\|_{L^p(\Omega_1)}\le\|D_iu\|_{L^p(\Omega_2)}$ for $u\in W^{1,p}(\Omega_2)$ and $0<|h|<\operatorname{dist}(\Omega_1,\partial\Omega_2)$, and conversely a uniform bound $\|\delta_h^iu\|_{L^p(\Omega_1)}\le C$ for $0<|h|<\operatorname{dist}(\Omega_1,\partial\Omega_2)/2$ implies $D_iu\in L^p(\Omega_1)$ with $\|D_iu\|_{L^p(\Omega_1)}\le C$. ([[thm-difference-quotient-characterisation-of-w-one-p-for-p-greater-than-one]], [[lem-weak-limit-of-uniformly-bounded-difference-quotients-is-the-weak-derivative]]).

[F6] Young and Cauchy--Schwarz inequalities with a free $\varepsilon>0$. ([[thm-young-inequality-real-exponents]], [[thm-holder-inequality-for-integrals]])

[F7] If $h\in L^2(\Omega)$ satisfies $\int_\Omega h\overline\varphi\,dx=0$ for every $\varphi\in C_c^\infty(\Omega)$, then $h=0$; more generally $C_c^\infty(\Omega)$ is dense in $L^2(\Omega)$. ([[lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set]])

## Proof

**Proof technique:** direct.

1.1 Nested localization. Fix $\Omega'\Subset\Omega''\Subset\Omega$ and choose $\Omega'\Subset U_1\Subset U_2\Subset\Omega''$. Take $\eta\in C_c^\infty(U_2;\mathbb R)$ equal to one on $U_1$. For each coordinate $k$ and sufficiently small $h\ne0$, the test class $v=-\delta_{-h}^k(\eta^2\delta_h^ku)$ is supported in $U_2$ and belongs to $H^1_0(U_2)$; the weak identity extends from smooth tests to $v$ by density, since the form is bounded and $f\in L^2(U_2)$. [F1, F3]

1.2 Principal and lower-order terms. Write the principal pairing as $P_h+R_{a,h}$ as in [F3]. The weak equation gives $P_h+R_{a,h}=\int_{U_2}(f-b^iD_iu-cu)\overline v$, so taking real parts and using [F3] bounds the right side directly, without differentiating $b^i$ or $c$. Choosing $\varepsilon$ small relative to $\theta$ and absorbing the error terms into $\operatorname{Re}P_h\ge\theta E_h$ gives $$E_h\le C(\|u\|^2_{L^2(U_2)}+\|Du\|^2_{L^2(U_2)}+\|f\|^2_{L^2(U_2)}),$$ with $C=C(n,\theta,M_a,M_b,M_c,M_1,U_1,U_2)$, uniformly in sufficiently small $h$. This estimate uses derivatives only of the principal coefficients; $b,c\in L^\infty$ enter without being differentiated. Young's inequality and Cauchy--Schwarz [F6] absorb the energy errors. [F2, F3, F6, algebra]

2.1 Removing the intermediate gradient. The Caccioppoli estimate [F4] applied to $U_2\Subset\Omega''$ gives $\|Du\|^2_{L^2(U_2)}\le C(\|u\|^2_{L^2(\Omega'')}+ \|f\|^2_{L^2(\Omega'')})$. Substitution into step 1.2 yields $E_h\le C(\|u\|^2_{L^2(\Omega'')}+\|f\|^2_{L^2(\Omega'')})$ uniformly in $h$. [F4, step 1.2, algebra]

3.1 Recovering all second derivatives. Since $\eta=1$ on $U_1$ and $\Omega'\Subset U_1$, step 2.1 bounds $\|\delta_h^kD_ju\|_{L^2(\Omega')}$ uniformly for every $j,k$. Applying the directional weak-limit criterion cited in [F5] with any positive threshold below the actual cutoff-support margin gives $D_kD_ju\in L^2(\Omega')$ with the same bound. Summing over $j,k$ proves $u\in H^2(\Omega')$ and $\|u\|_{H^2(\Omega')}\le C(\|f\|_{L^2(\Omega'')}+ \|u\|_{L^2(\Omega'')})$. [F5, step 2.1, algebra]

4.1 The strong form and the equation a.e. On $\Omega'$, $u\in H^2$ by step 3.1, so the proved multiplier rule of [[lem-cutoff-difference-quotient-commutator-estimate]] gives $a^{ij}D_ju\in H^1(\Omega')$ with weak derivative $(D_ia^{ij})D_ju+a^{ij}D_iD_ju\in L^2(\Omega')$. For every $\varphi\in C_c^\infty(\Omega')$, integration by parts in [F1] gives $\int_{\Omega'}\big(f-(-D_i(a^{ij}D_ju)+b^iD_iu+cu)\big)\overline\varphi\,dx=0$. The bracket lies in $L^2(\Omega')$, so it vanishes a.e. there by [F7]; as the pair $\Omega'\Subset\Omega''\Subset\Omega$ was arbitrary, the equation $Lu=f$ holds pointwise almost everywhere on $\Omega$ with $D_i(a^{ij}D_ju)$ read as the a.e. product $(D_ia^{ij})D_ju+a^{ij}D_iD_ju$. [step 3.1, F1, F7, algebra]

5.1 Conclusion. Every $u\in H^1(\Omega)$ that solves $Lu=f$ locally with $L$ uniformly elliptic, $a^{ij}\in W^{1,\infty}(\Omega)$ and $f\in L^2_{\mathrm{loc}}(\Omega)$ lies in $H^2_{\mathrm{loc}}(\Omega)$ with the nested-domain estimate displayed in the Statement. The argument applies directly to complex-valued data and solutions by taking real parts in the coercive energy estimates, as in step 1.2. [step 3.1, step 4.1] ∎


## Source notes

Hunter's Theorem 4.27 (printed pp. 112-113) assumes $C^1$ principal coefficients and proves interior $H^2$ regularity by difference quotients. The local proof above supplies the $W^{1,\infty}$ version and permits bounded lower-order coefficients. Laugesen's Theorem 5.6 (printed pp. 108-110) gives the constant-coefficient core. The scaffold's right-hand side $\|f\|_{L^2(\Omega)}$ is not defined for $f\in L^2_{\mathrm{loc}}(\Omega)$ when $\Omega$ is unbounded or when $f$ blows up at a boundary point, as $f=1/x$ on $(0,1)$ shows; the repaired statement uses the standard nested domains $\Omega'\Subset\Omega''\Subset\Omega$, matching the $L^2_{\mathrm{loc}}$ hypothesis and the estimates actually proved.
