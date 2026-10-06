---
id: lem-tangential-h-two-estimate-near-a-flat-dirichlet-boundary
kind: lemma
title: "Tangential $H^2$ estimate near a flat Dirichlet boundary"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 5
deps: [lem-tangential-difference-quotient-test-function, lem-difference-quotient-integration-by-parts, lem-weak-limit-of-uniformly-bounded-difference-quotients-is-the-weak-derivative, thm-difference-quotient-characterisation-of-w-one-p-for-p-greater-than-one, def-local-weak-solution-for-a-divergence-form-operator, lem-scaled-euclidean-bumps-with-compact-support-and-gradient-bound, lem-interpolation-absorbs-lower-order-sobolev-terms-in-elliptic-estimates, def-uniformly-elliptic-divergence-form-operator, thm-young-inequality-real-exponents, thm-holder-inequality-for-integrals, def-countable-choice, lem-smooth-bump-between-concentric-euclidean-balls]
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
      locator: "Section 4.12, proof of Theorem 4.30, tangential difference quotients, printed p. 115 (read in full)"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript, complete 392 pages)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "Section 10.3, proof of Lemma 10.18, printed p. 242 (read in full)"
---

## Statement

Assume Countable Choice. Let $H=\{x_n>0\}$ be the upper half-space, $n\ge1$,
$\mathbb K\in\{\mathbb R,\mathbb C\}$, let $L,a$ be as in
[[def-uniformly-elliptic-divergence-form-operator]] with
$a^{ij}\in W^{1,\infty}(H)$, $b^i,c\in L^\infty(H)$ and bounds
$\theta,M_a,M_b,M_c,M_1$, let $f\in L^2(H)$, and let $u\in H^1_0(H)$ be
supported in $B_1(0)\cap\overline H$ and solve $Lu=f$ weakly on $H$
([[def-local-weak-solution-for-a-divergence-form-operator]]). Then for every
tangential index $k<n$ and every $i$ the weak derivative $D_kD_iu$ belongs
to $L^2(B_{1/2}(0)\cap H)$ with
$$\sum_{k<n}\sum_{i=1}^n\int_{B_{1/2}(0)\cap H}|D_kD_iu|^2\,dx\le C\big(\|f\|^2_{L^2(H)}+\|u\|^2_{L^2(H)}\big),$$
where $C=C(n,\theta,M_a,M_b,M_c,M_1)$ is independent of the step size. Only
tangential difference quotients of $u$ are used, so no extension of $u$
across the boundary is invoked.

## Facts & Assumptions

**Given:** Countable Choice; the half-space $H$; the coefficients and their bounds; the datum $f\in L^2(H)$; and the local weak solution $u\in H^1_0(H)$ supported in $B_1(0)\cap\overline H$.

[F1] Local weak solution and Dirichlet test class: $a(u,\varphi)=\int_Hf\overline\varphi\,dx$ for every $\varphi\in C_c^\infty(H)$, and products of $u$ with functions of $C_c^\infty(\mathbb R^n)$ lie in $H^1_0(H)$. ([[def-local-weak-solution-for-a-divergence-form-operator]], the explicitly defined half-space $H=\{x_n>0\}$)

[F2] Coefficient package: $|a^{ij}|\le M_a$, $|D_ka^{ij}|\le M_1$, $|b^i|\le M_b$, $|c|\le M_c$ a.e. and $\operatorname{Re}(a^{ij}\xi_j\overline{\xi_i})\ge\theta|\xi|^2$. ([[def-uniformly-elliptic-divergence-form-operator]])

[F3] Tangential test class and principal pairing: for $k<n$ and a real cutoff $\eta\in C_c^\infty(\mathbb R^n)$, $v=-\delta_{-h}^k(\eta^2\delta_h^ku)$ lies in $H^1_0(H)$. The weak identity extends from smooth tests to this class by density and boundedness of the form. Difference-quotient integration by parts and the product identity give
$$\int_H a^{ij}D_ju\overline{D_iv}=\int_H\eta^2a^{ij}(x+he_k)\delta_h^kD_ju\overline{\delta_h^kD_iu}+R_a.$$
Here $R_a$ consists of the principal coefficient quotient and cutoff terms only. Writing $E_h=\|\eta\delta_h^kDu\|_2$, these satisfy $|R_a|\le\varepsilon E_h^2+C_\varepsilon\|Du\|_2^2$. No difference quotient of $b$ or $c$ is used.
([[lem-tangential-difference-quotient-test-function]], [[lem-difference-quotient-integration-by-parts]], [[thm-young-inequality-real-exponents]])

[F4] Difference-quotient calculus and characterisation: difference quotients commute with weak derivatives, and the characterisation of $W^{1,p}$ for $1<p<\infty$ holds: a uniform bound $\|\delta_h^kw\|_{L^2(\Omega')}\le C$ for $0<|h|<h_0$ implies $D_kw\in L^2(\Omega')$ with $\|D_kw\|_{L^2(\Omega')}\le C$, whenever $\delta_h^kw$ is defined on $\Omega'$ for those $h$; for tangential directions and $\Omega'=B_{1/2}(0)\cap H$ this validity holds for all $h$. ([[lem-difference-quotient-integration-by-parts]], [[thm-difference-quotient-characterisation-of-w-one-p-for-p-greater-than-one]], [[lem-weak-limit-of-uniformly-bounded-difference-quotients-is-the-weak-derivative]])

[F5] Young and Cauchy--Schwarz inequalities with a free $\varepsilon>0$, and the elementary bound $\|\delta_h^kw\|_{L^2}\le\|D_kw\|_{L^2}$ for $w\in H^1$. ([[thm-young-inequality-real-exponents]], [[thm-holder-inequality-for-integrals]], [[thm-difference-quotient-characterisation-of-w-one-p-for-p-greater-than-one]])

[F6] Fix a real smooth bump equal to one on $B_{1/2}$ and supported in $B_1$; its gradient has a finite bound depending only on this fixed choice and the dimension. ([[lem-smooth-bump-between-concentric-euclidean-balls]])

## Proof

1.1 Setup. Choose $\eta\in C_c^\infty(B_1(0))$ with $0\le\eta\le1$, $\eta=1$ on $B_{1/2}(0)$ and $\|D\eta\|_\infty\le C_1=C_1(n)$ as in [F6]; fix a tangential index $k<n$ and $0<|h|<1/2$. Since the shift is tangential, $\delta_h^ku$ and $\delta_{-h}^k(\eta^2\delta_h^ku)$ are defined on $B_{1/2}(0)\cap H$ and $v$ is an admissible test class by [F3]. [F1, F3, F6]

1.2 Global gradient bound. Since $u\in H^1_0(H)$ and $f\in L^2(H)$, density permits $u$ itself as a test. Taking real parts gives $\theta\|Du\|_2^2\le\|f\|_2\|u\|_2+C(n)M_b\|Du\|_2\|u\|_2+M_c\|u\|_2^2$. Young's inequality absorbs half the gradient term and yields $\|Du\|_2^2\le C(\|f\|_2^2+\|u\|_2^2)$. This controls the entire half-space gradient and does not rely on a cutoff equal to one on the support of $u$. [F1, F2, F5]

2.1 Principal pairing and ellipticity. By [F3], the principal pairing is $P_h+R_a$, where $P_h=\int_H\eta^2a^{ij}(x+he_k)\delta_h^kD_ju\overline{\delta_h^kD_iu}$. Tangential translation preserves $H$, so $\operatorname{Re}P_h\ge\theta E_h^2$ by [F2]. The remainder is bounded by $\varepsilon E_h^2+C_\varepsilon\|Du\|_2^2$ uniformly for small $h$ by [F3]. [F2, F3, step 1.1]

3.1 Datum and lower-order terms. The difference-quotient bound and the product rule give $\|v\|_2\le\|D_k(\eta^2\delta_h^ku)\|_2\le C(\eta)(E_h+\|Du\|_2)$. Thus the weak equation, with the lower-order terms left undifferentiated, bounds $|\int_H(f-b^iD_iu-cu)\overline v|$ by $C(\|f\|_2+M_b\|Du\|_2+M_c\|u\|_2)(E_h+\|Du\|_2)$. Young's inequality gives $\varepsilon E_h^2+C_\varepsilon(\|f\|_2^2+\|Du\|_2^2+\|u\|_2^2)$. Boundedness of $b,c$ is sufficient. [F1, F2, F5, step 2.1, algebra]

4.1 Absorption. Combining steps 2.1 and 3.1 and choosing $\varepsilon$ small gives $$\int_H\eta^2|\delta_h^kDu|^2\,dx\le C\big(\|f\|^2_{L^2(H)}+\|u\|^2_{L^2(H)}+\|Du\|^2_{L^2(H)}\big)$$ with $C=C(n,\theta,M_a,M_b,M_c,M_1)$, uniformly in $0<|h|<1/2$. [step 2.1, step 3.1, algebra]

5.1 Conclusion. Substituting step 1.2 into step 4.1 and using $\eta=1$ on $B_{1/2}(0)$ yields $\|\delta_h^kD_iu\|_{L^2(B_{1/2}(0)\cap H)}\le C^{1/2}(\|f\|_{L^2(H)}+\|u\|_{L^2(H)})$ for every tangential $k$ and every $i$, uniformly in $0<|h|<1/2$; [F4] applies with $w=D_iu\in L^2(H)$ and the tangential validity noted there, so $D_kD_iu\in L^2(B_{1/2}(0)\cap H)$ with the same bound; summing over the finitely many $k<n$ and $i\le n$ gives the displayed estimate. [step 4.1, step 1.2, F4, algebra] ∎


## Source notes

Hunter's proof of Theorem 4.30 (printed p. 115) uses exactly the tangential test function $v=-D_{-h}^k(\eta^2D_h^ku)$ and notes that the zero trace makes it admissible; the same argument as the interior estimate then gives the tangential second derivatives. The global energy test in step 1.2 is valid by density because $u\in H^1_0(H)$; it eliminates the gradient term before the final difference-quotient characterization. The scaffold's scheme is reproduced; no reflection across the boundary is used, and the constant is independent of $h$.
