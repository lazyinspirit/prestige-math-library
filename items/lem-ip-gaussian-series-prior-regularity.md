---
id: lem-ip-gaussian-series-prior-regularity
kind: lemma
title: "Weighted Hilbert Gaussian series and prior regularity"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 2
deps:
  - def-ip-prior-on-a-forward-domain
  - def-hilbert-space
  - def-separable-space
  - def-borel-gaussian-random-element-on-a-separable-banach-space
  - lem-density-normal-laws-and-square-summable-gaussian-series
  - def-countable-choice
  - def-axiom-of-choice
  - thm-riesz-representation-for-hilbert-space
  - thm-monotone-convergence-for-the-integral
  - def-banach-gaussian-covariance-operator-and-rkhs
  - thm-banach-gaussian-covariance-rkhs-is-well-defined
  - thm-fernique-integrability-for-separable-banach-gaussian-law
  - thm-bounded-linear-maps-commute-with-bochner-integration
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
axiom_use: "The almost-sure and L² convergence proof is choice-free once the probability space and independent centered unit-variance variables are supplied. Countable choice is used through the published square-summable scalar Gaussian-series law and Hilbert-space Riesz representation for the Gaussian and covariance branches. The library's Borel Gaussian, covariance, and Fernique interfaces require AC; Fernique is used only for the exponential-moment conclusion."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "M. Dashti and A. M. Stuart, The Bayesian Approach to Inverse Problems (arXiv:1302.6989)"
      url: "https://arxiv.org/pdf/1302.6989"
      locator: "§2.4, Theorem 2.10 and its proof for Hilbert-scale Gaussian-series convergence; Remarks 2.11 for the second-moment calculation and Karhunen–Loève covariance convention."
    - title: "E. Giné and R. Nickl, Mathematical Foundations of Infinite-Dimensional Statistical Models (Cambridge University Press, 2016)"
      url: "https://www.statslab.cam.ac.uk/~nickl/Site/__files/FULLPDF.pdf"
      locator: "§4.2, orthonormal wavelet bases; §§4.3.4–4.3.5, Besov coefficient characterizations; §4.4.1, random Gaussian wavelet series."
---

## Statement

Let $H_0$ and $H_1$ be separable real Hilbert spaces with a continuous inclusion $H_1\hookrightarrow H_0$. Let $(e_j)_{j\ge1}$ be an orthonormal basis of $H_0$ that is a complete orthogonal basis of $H_1$, write $w_j=\|e_j\|_{H_1}^2>0$, and set $f_j=e_j/\sqrt{w_j}$, so $(f_j)_{j\ge1}$ is an orthonormal basis of $H_1$. Let $(\xi_j)_{j\ge1}$ be independent real random variables on one probability space with $\mathbb E\xi_j=0$ and $\mathbb E\xi_j^2=1$, and let $\lambda_j\ge0$ satisfy $\sum_{j\ge1}\lambda_jw_j<\infty$. Then
$$S_N=\sum_{j=1}^N\sqrt{\lambda_j}\,\xi_j e_j$$
converges almost surely in $H_1$ and in $L^2(\Omega;H_1)$ to an $H_1$-valued Borel-measurable random element $S$, with
$$\mathbb E\|S\|_{H_1}^2=\sum_{j\ge1}\lambda_jw_j.$$
These norm-convergence conclusions use no choice axiom beyond the supplied probability space and variables. For the following Gaussian conclusions, assume in addition that each $\xi_j$ has the standard normal law $N(0,1)$. Under the Axiom of Choice and countable choice, $S$ is a centered Borel Gaussian random element in $H_1$. Its covariance map $C:H_1^*\to H_1$, transported to $H_1$ by the Hilbert-space Riesz identification, is diagonal in the basis $(f_j)_{j\ge1}$ with eigenvalues $\lambda_jw_j$, and these eigenvalues are summable. If $D$ is a Borel forward-map domain in $H_1$ and $\mathbb P(S\in D)=1$, then the law of $S$ is a prior on $D$. Under the Axiom of Choice there is $a>0$ such that
$$\mathbb E\exp\!\bigl(a\|S\|_{H_1}^2\bigr)<\infty.$$

## Statement references

[[def-hilbert-space|a Hilbert space is a complete inner-product space]]

[[def-separable-space|separable means having an at most countable dense subset]]

[[def-ip-prior-on-a-forward-domain|a prior on a forward domain requires full measure on that domain]]

[[def-borel-gaussian-random-element-on-a-separable-banach-space|Borel Gaussian random elements are Borel measurable and have centered normal continuous-linear projections]]

[[lem-density-normal-laws-and-square-summable-gaussian-series|square-summable independent Gaussian series have the corresponding scalar normal law under countable choice]]

[[def-countable-choice|the Axiom of Countable Choice]]

[[def-axiom-of-choice|the Axiom of Choice]]

[[thm-riesz-representation-for-hilbert-space|under countable choice, every bounded Hilbert-space functional is represented by an inner product vector]]

[[def-banach-gaussian-covariance-operator-and-rkhs|the covariance operator and covariance-induced RKHS of a Banach Gaussian]]

[[thm-banach-gaussian-covariance-rkhs-is-well-defined|well-definedness of the covariance and RKHS construction]]

[[thm-fernique-integrability-for-separable-banach-gaussian-law|Fernique exponential-square integrability]]

[[thm-bounded-linear-maps-commute-with-bochner-integration|bounded linear functionals commute with Bochner integration]]

[Dashti and Stuart, §2.4, Theorem 2.10 and Remarks 2.11, full text](https://arxiv.org/pdf/1302.6989)

[Giné and Nickl, §§4.2–4.4.1, full book](https://www.statslab.cam.ac.uk/~nickl/Site/__files/FULLPDF.pdf)

## Facts & Assumptions

**Given:** Separable real Hilbert spaces $H_0,H_1$ with the stated continuous inclusion and common orthogonal basis; positive weights $w_j=\|e_j\|_{H_1}^2$; a probability space carrying independent real variables $\xi_j$ with $\mathbb E\xi_j=0$ and $\mathbb E\xi_j^2=1$; nonnegative $\lambda_j$ with $\sum_j\lambda_jw_j<\infty$. For the Gaussian conclusions, also assume each $\xi_j\sim N(0,1)$. AC and countable choice are assumed only for the stated Gaussian-law, covariance, and exponential-integrability branches.

[A1] AC is required by the library's Borel Gaussian, covariance/RKHS, and Fernique interfaces. [[def-axiom-of-choice]]

[A2] Countable choice is used only by [F3] for scalar Gaussian-law identification and by [F8] for Hilbert-space Riesz representation. [[def-countable-choice]]

[F1] A prior on a declared Borel forward-map domain $D$ is a Borel probability $\mu$ on the parameter space with $\mu(D)=1$. [[def-ip-prior-on-a-forward-domain]]

[F2] A centered Borel Gaussian random element is Borel measurable and every continuous linear functional of it has a centered normal law. [[def-borel-gaussian-random-element-on-a-separable-banach-space]]

[F3] Under countable choice, if independent standard normal variables have real coefficients with square-summable squares and their finite sums converge in probability to a supplied real random variable, that limit has the centered normal law with variance equal to the sum of coefficient squares. [[lem-density-normal-laws-and-square-summable-gaussian-series]]

[F4] For nonnegative measurable $Y_N\uparrow Y$, monotone convergence gives $\mathbb E Y_N\uparrow\mathbb E Y$. [[thm-monotone-convergence-for-the-integral]]

[F5] Under AC, a centered Borel Gaussian random element in a real separable Banach space has an exponential-square norm moment for some positive exponent. [[thm-fernique-integrability-for-separable-banach-gaussian-law]]

[F6] Under AC, the covariance operator of a centered Borel Gaussian is $C\ell=\mathbb E[\ell(S)S]$ and its covariance RKHS is the completion of the quotient by the covariance nullspace. [[def-banach-gaussian-covariance-operator-and-rkhs]]

[F7] Under AC, the Bochner covariance and the continuous injective embedding of the completed covariance RKHS into the Banach space are well-defined. [[thm-banach-gaussian-covariance-rkhs-is-well-defined]]

[F8] Under countable choice, every bounded linear functional on a Hilbert space is the inner product with a unique vector, preserving the dual norm. [[thm-riesz-representation-for-hilbert-space]]

[F9] A bounded linear map commutes with the Bochner integral of an integrable vector-valued function. [[thm-bounded-linear-maps-commute-with-bochner-integration]]

## Proof

**Given:** $H_0,H_1,(e_j),(w_j),(\xi_j),(\lambda_j)$ as in the Statement, and AC and countable choice for the Gaussian-law, covariance, and Fernique conclusions.

1.1 Put $Y_N=\sum_{j=1}^N\lambda_jw_j\xi_j^2$ and $Y=\lim_NY_N$. The supplied second moments give $\mathbb EY_N=\sum_{j\le N}\lambda_jw_j$, so [F4] gives $\mathbb EY=\sum_j\lambda_jw_j<\infty$. Therefore $Y<\infty$ almost surely: if $\mathbb P(Y=\infty)>0$, then $\mathbb EY\ge M\mathbb P(Y=\infty)$ for every $M>0$, contradicting finiteness. On the full-measure event $\Omega_0=\{Y<\infty\}$, orthogonality gives $\|S_m-S_n\|_{H_1}^2=\sum_{n<j\le m}\lambda_jw_j\xi_j^2\to0$ as $m,n\to\infty$. Completeness of $H_1$ gives an almost-sure limit. This convergence argument uses no choice axiom. [F4, given, algebra]

2.1 Define $S$ to be this limit on $\Omega_0$ and $0$ on its measurable null complement. Each $S_N$ is Borel measurable. For any proper open $O\subset H_1$, let $C=H_1\setminus O$. The scalar functions $d(S_N,C)$ are measurable and on $\Omega_0$ converge to $d(S,C)$; because $S\in O$ exactly when $d(S,C)>0$, the set $S^{-1}(O)$ is $\Omega_0\cap\{\liminf_Nd(S_N,C)>0\}$, with $\Omega_0^c$ added exactly when $0\in O$. The liminf condition is a countable combination of measurable scalar inequalities, so $S^{-1}(O)$ is measurable. The cases $O=\varnothing$ and $O=H_1$ are immediate. Thus $S$ is Borel measurable. [step 1.1, given, construct, algebra]

3.1 On $\Omega_0$, $\|S-S_N\|_{H_1}^2=Y-Y_N$. Since $\mathbb P(\Omega_0^c)=0$, [F4] and step 1.1 give $\mathbb E\|S-S_N\|_{H_1}^2=\sum_{j>N}\lambda_jw_j\to0$ and $\mathbb E\|S\|_{H_1}^2=\sum_j\lambda_jw_j$. Hence $S_N\to S$ in $L^2(\Omega;H_1)$. [F4, step 1.1, step 2.1, algebra]

4.1 For any $\ell\in H_1^*$, let $z\in H_1$ be its Riesz vector and write $\ell_z(x)=\langle x,z\rangle$, so $\ell=\ell_z$. Set $c_j=\sqrt{\lambda_j}\,\ell_z(e_j)=\sqrt{\lambda_jw_j}\,\langle f_j,z\rangle$. Since $|\langle f_j,z\rangle|\le\|z\|$, $\sum_jc_j^2\le\|z\|^2\sum_j\lambda_jw_j<\infty$. By step 3.1, $\ell_z(S_N)\to\ell_z(S)$ in $L^2$, hence in probability; [F3] makes $\ell_z(S)$ centered normal with variance $\sum_jc_j^2$. Together with step 2.1 and [F2], this proves that $S$ is a centered Borel Gaussian random element. For Riesz vectors $z,y\in H_1$, independence, centering, and unit variances give $\mathbb E[\ell_z(S_N)\ell_y(S_N)]=\sum_{j\le N}\lambda_jw_j\langle f_j,z\rangle\langle f_j,y\rangle$. The $L^2$ convergence from step 3.1 and Cauchy–Schwarz let these expectations pass to the limit, so the covariance form is $Q(\ell_z,\ell_y)=\sum_j\lambda_jw_j\langle f_j,z\rangle\langle f_j,y\rangle$. The series $v_z:=\sum_j\lambda_jw_j\langle f_j,z\rangle f_j$ converges in $H_1$: the finite Pythagorean identity gives $\sum_{j\le N}|\langle f_j,z\rangle|^2\le\|z\|^2$, and $\sup_j\lambda_jw_j\le\sum_j\lambda_jw_j<\infty$, so $\sum_j(\lambda_jw_j)^2|\langle f_j,z\rangle|^2<\infty$. Thus $Q(\ell_z,\ell_y)=\langle v_z,y\rangle$. By [F6]–[F7] the covariance Bochner integral exists, and [F9] shows that applying any Riesz coordinate functional commutes with that integral. Hence $v_z$ is the Riesz vector of $C\ell_z$, so the covariance operator transported to $H_1$ by Riesz is diagonal in $(f_j)$ with eigenvalues $\lambda_jw_j$, whose sum is finite. [A1, A2, F2, F3, F6, F7, F8, F9, step 2.1, step 3.1, given, algebra]

5.1 If $D\subset H_1$ is a Borel forward-map domain with $\mathbb P(S\in D)=1$, then the law $\mu$ of $S$ satisfies $\mu(D)=\mathbb P(S\in D)=1$. The definition [F1] therefore makes $\mu$ a prior on $D$. [F1, step 4.1, algebra]

6.1 The space $H_1$ is a real separable Banach space, and step 4.1 supplies a centered Borel Gaussian random element in it. Under AC, [F5] applies and gives $a>0$ with $\mathbb E\exp(a\|S\|_{H_1}^2)<\infty$. [A1, F5, step 4.1] ∎
