---
id: lem-r2-space-filling-source-current-reduction
kind: lemma
title: "A space-filling source current reduces to the negative internal integration current"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
category: string-theory
dependency_level: 1
proof_strategy: direct
deps:
  - def-r2-compact-de-rham-current-of-a-source-cycle
  - thm-jordan-fubini-by-sections
  - thm-the-exterior-derivative-is-a-graded-derivation
  - lem-finite-chart-localization-defines-choice-free-integration-and-compact-stokes
dependency_roles:
  def-r2-compact-de-rham-current-of-a-source-cycle: mathematical-premise
  thm-jordan-fubini-by-sections: mathematical-premise
  thm-the-exterior-derivative-is-a-graded-derivation: mathematical-premise
  lem-finite-chart-localization-defines-choice-free-integration-and-compact-stokes: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Tien-Cuong Dinh and Nessim Sibony, Introduction to the Theory of Currents"
      url: https://people.math.harvard.edu/~demarco/Math274/DinhSibony_Introduction.pdf
      locator: "§3.1, pp. 31–33; §3.2, p. 35; and §4.4, Example 4.4.1, p. 44: form-current pairing, differential, and integration on a submanifold. The product-test reduction and test-first/source-first sign conversion are the explicit local calculation below, not a theorem quoted verbatim from this source."
verification:
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Let $E$ be an oriented smooth four-manifold, let $X$ be a compact oriented smooth six-manifold, and use the product orientation on $E\times X$ with the $E$ factor first. Let $\chi\in\Omega_c^4(E)$ have $\int_E\chi=1$, and let $C\subseteq X$ be a compact oriented embedded three-manifold without boundary. Orient $W:=E\times C$ by the same product order.

Write $\pi_E:E\times X\to E$ and $\pi_X:E\times X\to X$ for the projections. For an integer $0\le k\le6$ and $\zeta\in\Omega_c^{10-k}(E\times X)$, define $\pi_{X*}\zeta\in\Omega^{6-k}(X)$ by integration over the oriented $E$ factor, with convention $\pi_{X*}(\pi_E^*\beta_4\wedge\pi_X^*\gamma)=(\int_E\beta_4)\gamma$ for decomposable terms of external degree four and zero external integral for other external degrees. Equivalently, in oriented product coordinates, retain the terms containing the oriented external volume element and integrate their coefficient functions over $E$, using a partition of unity in $E$ when needed. Define the external-independent product extension of an internal degree-$k$ current $T$ by
$$\langle T^\uparrow,\zeta\rangle:=\langle T,\pi_{X*}\zeta\rangle.$$
For a smooth internal $k$-form $\alpha_k$, this convention gives $\langle (T_{\alpha_k})^\uparrow,\zeta\rangle=\int_{E\times X}\pi_X^*\alpha_k\wedge\zeta$.

The ten-dimensional source-current convention
$$\int_{E\times X}\zeta_7\wedge J_W=\int_W\iota_W^*\zeta_7$$
for compactly supported test seven-forms $\zeta_7$ has the following reduction to the mathematical current convention of [[def-r2-compact-de-rham-current-of-a-source-cycle]]:
$$\int_{E\times X}J_W\wedge(\chi\wedge\eta_3)=-\int_C\eta_3=-\langle\delta_C,\eta_3\rangle.$$
For an internal smooth $k$-form $\alpha_k$ and an internal current $T$ of degree $k$, pairing the product extensions just defined with $\chi\wedge\eta_{6-k}$ gives respectively $\int_X\alpha_k\wedge\eta_{6-k}$ and $\langle T,\eta_{6-k}\rangle$. For $0\le k\le5$, the current differential also reduces on these product tests: the pairing of $d_{10}T^\uparrow$ with $\chi\wedge\eta_{5-k}$ equals the pairing of $d_XT$ with $\eta_{5-k}$.

## Facts & Assumptions

**Given:** The oriented manifolds and product orientation above, the normalized compactly supported top form $\chi$, and the degree-current convention of [[def-r2-compact-de-rham-current-of-a-source-cycle]].

[F1] [[def-r2-compact-de-rham-current-of-a-source-cycle]] defines $T_{\alpha_k}(\eta)=\int_X\alpha_k\wedge\eta$, $\langle dT,\eta\rangle=(-1)^{k+1}\langle T,d\eta\rangle$, and $\langle\delta_C,\eta_3\rangle=\int_C\eta_3$.

[F2] [[thm-jordan-fubini-by-sections]] applies to Riemann-integrable functions on bounded Jordan sets with integrable sections outside a content-zero exceptional set. Below it is applied only to smooth functions, extended by zero, on bounded product rectangles; every section is integrable.

[F3] [[thm-the-exterior-derivative-is-a-graded-derivation]] gives $d(\chi\wedge\eta)=d\chi\wedge\eta+(-1)^4\chi\wedge d\eta$.

[F4] For the possibly noncompact oriented manifold $M=E\times X$ of dimension $n=10$, use compactly supported tests: let $\Omega_K^r(M)$ be the smooth $r$-forms supported in a fixed compact $K\subset M$, with the coordinate coefficient-and-derivative seminorms of [F1]. Give $\Omega_c^r(M)=\bigcup_K\Omega_K^r(M)$ the finest locally convex topology making every inclusion $\Omega_K^r(M)\to\Omega_c^r(M)$ continuous. A degree-$k$ current is a continuous real-linear functional on $\Omega_c^{n-k}(M)$. Define $\langle dS,\zeta\rangle=(-1)^{k+1}\langle S,d\zeta\rangle$ for tests of degree $n-k-1$ and put $dS=0$ in top degree. The coordinate formula for $d$ preserves supports and bounds each output seminorm of order $m$ by finitely many input seminorms of order $m+1$; hence this defines a continuous current. For a smooth $q$-form $\beta$, set $\langle S\wedge\beta,\zeta\rangle=\langle S,\beta\wedge\zeta\rangle$ and $\beta\wedge S=(-1)^{kq}S\wedge\beta$. These definitions agree with [F1] on compact manifolds. They are the compact-test conventions of Dinh–Sibony, §3.1 Definition 3.1.3, §3.2 and §4.4; no noncompact assertion is imported from [F1].

[F5] [[lem-finite-chart-localization-defines-choice-free-integration-and-compact-stokes]] constructs compactly supported top-form integrals using finitely many smooth chart cutoffs summing to one near the support, proves independence of those choices, and applies without compactness of the manifold. This supplies all chart localizations below.

## Proof

**Given:** The product geometry, $\int_E\chi=1$, and the stated test forms.

1.1 For any compactly supported top forms $\beta$ on $E$ and $\gamma$ on $N=X$ or $N=C$, apply [F5] separately to their compact supports. Write the resulting finite chart pieces as $f_a(u)\,du^1\wedge\cdots\wedge du^4$ and $g_b(v)\,dv^1\wedge\cdots\wedge dv^{\dim N}$ in oriented charts. Their coefficient functions extend smoothly by zero outside their chart images and have compact support. Choose bounded rectangles $A_a,B_b$ containing these supports. The function $f_a(u)g_b(v)$ is continuous on the Jordan rectangle $A_a\times B_b$, with continuous sections everywhere. Thus [F2] gives $\int f_ag_b=(\int f_a)(\int g_b)$. Summing the finite chart pieces and using [F5] proves $\int_{E\times N}\pi_E^*\beta\wedge\pi_N^*\gamma=(\int_E\beta)(\int_N\gamma)$ with the external-first orientation. In particular, moving $\pi_X^*\alpha_k$ past $\chi$ has sign $(-1)^{4k}=1$, so $\int_{E\times X}\pi_X^*\alpha_k\wedge\chi\wedge\pi_X^*\eta=\int_X\alpha_k\wedge\eta$. Taking $N=C$ gives $\int_W\chi\wedge\pi_X^*\eta=\int_C\eta$. [F1, F2, F5, given, algebra]

2.1 The fibre integral in the Statement is well-defined and continuous on each fixed-support test space of [F4]. Indeed, for tests supported in a compact $K\subset E\times X$, use [F5] to fix finitely many external cutoffs on $\pi_E(K)$ and internal chart cutoffs on $X$. The external-degree-four coefficient of each localized piece extends by zero in the external coordinates and is integrated on a fixed bounded rectangle $A$. In internal coordinates $y$, differentiation gives $\partial_y^a\int_A f(u,y)\,du=\int_A\partial_y^a f(u,y)\,du$: difference quotients converge uniformly on compact coordinate rectangles, by the fundamental theorem of calculus and uniform continuity of the next derivative. Iteration proves smoothness; the bound $|\int_A\partial_y^a f\,du|\le\operatorname{vol}(A)\sup|\partial_y^a f|$ proves continuity for every output seminorm. Independence of external cutoffs and coordinates follows from [F5] applied at each $y$; internal coordinate changes act linearly on the retained internal form coefficients, so these local forms glue. Composition with the continuous internal current $T$ therefore makes $T^\uparrow$ a current in [F4]. Applying the same finite-chart Fubini calculation to an arbitrary test $\zeta$ gives $\int_{E\times X}\pi_X^*\alpha_k\wedge\zeta=\int_X\alpha_k\wedge\pi_{X*}\zeta$: only external degree four contributes, and its interchange with $\alpha_k$ has sign $1$. Integration over $W$ also gives a continuous functional on each fixed-support space, since its pullback integral is bounded by finitely many coefficient seminorms on charts of the compact set $W\cap K$; here $W$ is closed because $C$ is compact. Thus the source pairing defines a current as well. [F1, F2, F4, F5, step 1.1, given, construct]

3.1 In the mathematical current convention, the associated current of the degree-three source form is evaluated with the form-current order $J_W\wedge(\chi\wedge\eta)$. Moving the degree-three current past the degree-seven test form changes sign by $(-1)^{3\cdot7}=-1$. The source convention in the Statement therefore gives
$$\int_{E\times X}J_W\wedge(\chi\wedge\eta)=-\int_{E\times X}(\chi\wedge\eta)\wedge J_W=-\int_W\chi\wedge\eta=-\int_C\eta.$$
By [F1], the final term is $-\langle\delta_C,\eta\rangle$. [F1, F4, given, step 1.1, step 2.1, algebra]

4.1 For an internal degree-$k$ current $T$, the definition above and $\int_E\chi=1$ give $\pi_{X*}(\chi\wedge\eta)=\eta$, hence $\langle T^\uparrow,\chi\wedge\eta\rangle=\langle T,\eta\rangle$. For the differential assertion let $0\le k\le5$ and $\eta\in\Omega^{5-k}(X)$. Since $d\chi=0$ for a top form on the four-manifold and [F3] gives $d(\chi\wedge\eta)=\chi\wedge d\eta$, the compact-test differential [F4] on $E\times X$ and the compact-base differential [F1] on $X$ yield
$$\langle d_{10}T^\uparrow,\chi\wedge\eta\rangle=(-1)^{k+1}\langle T^\uparrow,\chi\wedge d\eta\rangle=(-1)^{k+1}\langle T,d\eta\rangle=\langle d_XT,\eta\rangle.$$
This proves the reduction of the current differential on the tests needed for a product compactification. [F1, F3, F4, step 1.1, step 2.1, algebra] ∎

## Remarks

The minus sign is forced by the degree-current convention: the source literature writes the localized source by the test-first wedge $\zeta_7\wedge J_W$, while [[def-r2-compact-de-rham-current-of-a-source-cycle]] associates smooth forms by $J_W\wedge\zeta_7$. A physical source-current postulate in the first convention therefore reduces to $-\delta_C$ in the second. This is the sign conversion used by the massive IIA tadpole item; it is independent of the regularized source-first intersection sign.
