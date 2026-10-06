---
id: lem-weak-limit-of-uniformly-bounded-difference-quotients-is-the-weak-derivative
kind: lemma
title: "Uniformly bounded difference quotients represent a weak derivative"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
deps: [def-first-difference-quotient, lem-difference-quotient-integration-by-parts, def-weak-derivative-of-a-locally-integrable-function, def-sobolev-space-wkp-and-its-norm, def-conjugate-exponents, thm-holder-inequality-for-integrals, thm-dominated-convergence, thm-meyers-serrin-density-on-an-arbitrary-open-set, lem-euclidean-bump-for-a-compact-set-inside-an-open-set, thm-arbitrary-measure-duality-for-l-p-when-one-less-p-less-infinity, lem-complex-lp-duality-from-real-lp-duality, def-l-p-space-as-a-quotient-by-null-functions, def-derivative, thm-mean-value-inequality, thm-chain-rule-for-total-derivatives, def-countable-choice]
landmark: false
dependency_level: 2
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "John K. Hunter, Notes on Partial Differential Equations (UC Davis, revised 18 June 2014, complete 242-page two-quarter graduate notes)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "Appendix 4.C, Theorem 4.53(2) and its proof, printed pp. 125-126 (read in full)"
    - title: "Richard S. Laugesen, Linear Analysis and Partial Differential Equations (University of Illinois, 2020, complete 158-page graduate notes)"
      url: "https://publish.illinois.edu/rlaugesen/files/2023/07/554-Lectures.pdf"
      locator: "Chapter 5, Section 5.2, Proposition 5.7(ii), printed pp. 110-111 (read in full)"
    - title: "Leon Simon, Lectures on Partial Differential Equations (Stanford, complete 223-page author scan)"
      url: "https://math.stanford.edu/~lms/lecs-on-pde.pdf"
      locator: "Lecture 5, Lemma 7: convergence of difference quotients to weak derivatives (read in full)"
---

## Statement

Assume Countable Choice. Let $\Omega\subseteq\mathbb R^n$ be open,
$U\subseteq\Omega$ open, $1<p<\infty$, $u\in L^p(\Omega;\mathbb K)$,
$\mathbb K\in\{\mathbb R,\mathbb C\}$, and fix a coordinate $i$.
Suppose $h_0>0$ and $U\subseteq\Omega_{i,h}$ for every $0<|h|<h_0$, and
$$\|\delta_h^iu\|_{L^p(U)}\le C\qquad(0<|h|<h_0).$$
Then $D_iu\in L^p(U)$ with norm at most $C$, and
$\delta_h^iu\rightharpoonup D_iu$ in $L^p(U)$ as $h\to0$.
No compact containment of $U$ and no bounds in other directions are required.
In particular this applies to tangential quotients on boundary half-balls.
For $U\Subset\Omega$ the shift condition holds whenever
$h_0<\operatorname{dist}(U,\partial\Omega)$; if bounds hold in every
coordinate, $u\in W^{1,p}(U)$. Only Countable Choice is used.

## Facts & Assumptions

**Given:** Countable Choice; the open sets $U\subseteq\Omega$; $1<p<\infty$ with conjugate $p'$; $u\in L^p(\Omega;\mathbb K)$; a fixed coordinate $i$; and $h_0>0$, $C\ge0$ with the shift condition and bound in the Statement. Write $\Omega'=U$ in the proof.

[F1] The quotient is defined on $\Omega_{i,h}$, and its restriction to $U$ is in $L^p(U)$ by translation invariance. The assumed shift condition makes this true for every $0<|h|<h_0$. ([[def-first-difference-quotient]])

[F2] Integration by parts for difference quotients: extend $\varphi\in C_c^\infty(\Omega)$ by zero to $\mathbb R^n$. If $w\in L^1_{\mathrm{loc}}(\Omega)$ and $0<|h|<\operatorname{dist}(\operatorname{supp}\varphi,\partial\Omega)$, then $\int_{\Omega_{i,h}}\delta_h^iw\,\varphi\,dx=-\int_{\Omega_{i,-h}}w\,\delta_{-h}^i\varphi\,dx$. Both integrals are finite on compact supports inside their respective shrunken domains. ([[lem-difference-quotient-integration-by-parts]])

[F3] For $\varphi\in C_c^\infty(\Omega)$ and fixed $x$ the one-variable map $g(t):=\varphi(x+te_i)$ is differentiable at $t=0$ with $g'(0)=\partial_i\varphi(x)$ and satisfies $|\varphi(x+he_i)-\varphi(x)|\le\|D\varphi\|_{L^\infty}|h|$ by the mean value inequality; consequently $\delta_{-h}^i\varphi(x)=(\varphi(x)-\varphi(x-he_i))/h\to\partial_i\varphi(x)$ as $h\to0$ for every $x$, with $|\delta_{-h}^i\varphi(x)|\le\|D\varphi\|_{L^\infty}$. ([[def-derivative]], [[thm-mean-value-inequality]], [[thm-chain-rule-for-total-derivatives]])

[F4] Hölder's inequality: for conjugate exponents $p,p'$ and classes $f\in L^p(\Omega')$, $g\in L^{p'}(\Omega')$ the product is in $L^1(\Omega')$ and $\int_{\Omega'}|fg|\,dx\le\|f\|_{L^p(\Omega')}\|g\|_{L^{p'}(\Omega')}$. ([[def-conjugate-exponents]], [[thm-holder-inequality-for-integrals]])

[F5] Dominated convergence: if $f_j\to f$ almost everywhere and $|f_j|\le G$ almost everywhere for a single integrable $G$, then $\int f_j\to\int f$. ([[thm-dominated-convergence]])

[F6] Density of smooth functions and cutoffs: for $1\le q<\infty$ the intersection $C^\infty(\Omega')\cap L^q(\Omega')$ is dense in $L^q(\Omega')$; for every compact $K\subseteq\Omega'$ there is $\chi\in C_c^\infty(\Omega';[0,1])$ with $\chi=1$ on $K$. ([[thm-meyers-serrin-density-on-an-arbitrary-open-set]], [[lem-euclidean-bump-for-a-compact-set-inside-an-open-set]])

[F7] Duality: on any measure space and for $1<q<\infty$ with conjugate $q'$, every bounded linear functional on $L^q$ is integration against a unique $L^{q'}$ class with equality of norms; for real scalars this is stated in [[thm-arbitrary-measure-duality-for-l-p-when-one-less-p-less-infinity]], and for complex-linear functionals with the bilinear pairing in [[lem-complex-lp-duality-from-real-lp-duality]].

[F8] Weak derivative: $D_iw\in L^1_{\mathrm{loc}}(\Omega')$ is the weak derivative of $w\in L^1_{\mathrm{loc}}(\Omega')$ exactly when $\int_{\Omega'}w\,\partial_i\varphi\,dx=-\int_{\Omega'}D_iw\,\varphi\,dx$ for every $\varphi\in C_c^\infty(\Omega')$. ([[def-weak-derivative-of-a-locally-integrable-function]])

[F9] An $L^p(\Omega)$ class restricts to $L^p(U)$ and is integrable on every compact subset of $\Omega$ by Hölder and finite measure. ([[def-l-p-space-as-a-quotient-by-null-functions]])

## Proof

**Proof technique:** direct.

1.1 Fix $\varphi\in C_c^\infty(\Omega')$ and put $h_1:=\operatorname{dist}(\operatorname{supp}\varphi,\partial\Omega)>0$. For every $0<|h|<\min(h_0,h_1)$ the integration-by-parts identity of [F2] applies (its support condition holds because $\operatorname{supp}\varphi\Subset\Omega'\subseteq\Omega$) and gives $$\int_{\Omega'}\delta_h^iu\,\varphi\,dx=\int_{\Omega_{i,h}}\delta_h^iu\,\varphi\,dx=-\int_{\Omega_{i,-h}}u\,\delta_{-h}^i\varphi\,dx=-\int_\Omega u\,\delta_{-h}^i\varphi\,dx.$$ Here $\varphi$ is extended by zero to $\mathbb R^n$; its difference quotient is globally defined and supported in $\Omega_{i,-h}$ for these $h$, whereas $\delta_h^iu$ is integrated only where it is defined. [F1, F2, given]

1.2 The test functions are dense in $L^{p'}(\Omega')$: given $f\in L^{p'}(\Omega')$ and $\eta>0$, [F6] provides $v\in C^\infty(\Omega')\cap L^{p'}(\Omega')$ with $\|v-f\|_{L^{p'}}<\eta/2$. Choose a compact exhaustion $K_1\subseteq K_2\subseteq\cdots$ of $\Omega'$ with $K_j\subseteq\operatorname{int}K_{j+1}$ and cutoffs $\chi_j\in C_c^\infty(\Omega';[0,1])$ equal to $1$ on $K_j$; then $\chi_jv\to v$ pointwise everywhere and $|\chi_jv-v|^{p'}\le2^{p'}|v|^{p'}\in L^1(\Omega')$, so [F5] gives $\|\chi_jv-v\|_{L^{p'}}\to0$, and for $j$ large $\chi_jv\in C_c^\infty(\Omega')$ lies within $\eta$ of $f$. [F5, F6]

2.1 By [F3] the classes $\delta_{-h}^i\varphi$ converge pointwise as $h\to0$ to $\partial_i\varphi$ and are bounded in absolute value by $\|D\varphi\|_\infty$; choose a fixed compact neighbourhood $K\Subset\Omega$ containing $\operatorname{supp}\varphi$ and all its translates by $te_i$ for sufficiently small $|t|$. The support of every such $\delta_{-h}^i\varphi$ lies in $K$, and $u\in L^1(K)$ by Hölder, so $\mathbf1_K|u|\,\|D\varphi\|_\infty$ is an integrable majorant on $\Omega$, and [F5] gives $$-\int_\Omega u\,\delta_{-h}^i\varphi\,dx\longrightarrow-\int_\Omega u\,\partial_i\varphi\,dx=:\ell(\varphi).$$ Thus the limit exists for every test function, and step 1.1 identifies it with $\lim_{h\to0}\int_{\Omega'}\delta_h^iu\,\varphi\,dx$. [F3, F5, F9, step 1.1]

3.1 For every $\varphi\in C_c^\infty(\Omega')$ the hypothesis and Hölder give, for all $0<|h|<\min(h_0,h_1)$, $$\Big|\int_{\Omega_{i,h}}\delta_h^iu\,\varphi\,dx\Big|=\Big|\int_{\Omega'}\delta_h^iu\,\varphi\,dx\Big|\le\|\delta_h^iu\|_{L^p(\Omega')}\,\|\varphi\|_{L^{p'}(\Omega')}\le C\,\|\varphi\|_{L^{p'}(\Omega')};$$ passing to the limit along $h\to0$ in step 2.1 yields $|\ell(\varphi)|\le C\|\varphi\|_{L^{p'}(\Omega')}$. Hence $\ell$ is a $\mathbb K$-linear functional on the subspace $C_c^\infty(\Omega')$ of $L^{p'}(\Omega')$, bounded there with constant $C$. [F4, step 2.1, given]

4.1 By step 1.2 and the boundedness of step 3.1, $\ell$ has a unique extension to a bounded linear functional $\Lambda$ on $L^{p'}(\Omega')$ with $\|\Lambda\|\le C$: for $f\in L^{p'}(\Omega')$ choose test functions $\varphi_j\to f$; the values $\ell(\varphi_j)$ form a Cauchy sequence because $|\ell(\varphi_j)-\ell(\varphi_k)|\le C\|\varphi_j-\varphi_k\|$, and $\Lambda(f):=\lim_j\ell(\varphi_j)$ is independent of the approximating sequence. [step 3.1, step 1.2]

5.1 Apply [F7] with $q=p'$ (so that $q'=p$) to the functional $\Lambda$ on $L^{p'}(\Omega')$: for $\mathbb K=\mathbb R$ the real duality theorem, and for $\mathbb K=\mathbb C$ the complex-linear duality lemma, provide a class $w\in L^p(\Omega';\mathbb K)$ with $$\Lambda(g)=\int_{\Omega'}w\,g\,dx\qquad(g\in L^{p'}(\Omega')),\qquad \|w\|_{L^p(\Omega')}=\|\Lambda\|\le C .$$ [F7, step 4.1]

6.1 For every $\varphi\in C_c^\infty(\Omega')$ (so that $\operatorname{supp}\varphi\Subset\Omega$ and $\partial_i\varphi$ has the same support) steps 2.1 and 5.1 give $$\int_{\Omega'}u\,\partial_i\varphi\,dx=-\ell(\varphi)=-\Lambda(\varphi)=-\int_{\Omega'}w\,\varphi\,dx .$$ By [F8] this is exactly the weak-derivative identity, so $w$ is the weak derivative $D_iu$ of $u$ on $\Omega'$ and $\|D_iu\|_{L^p(\Omega')}\le C$. [F8, step 2.1, step 5.1]

7.1 It remains to remove the test-function restriction in the convergence. Let $\varphi\in L^{p'}(\Omega')$ and $\eta>0$; by step 1.2 choose $\psi\in C_c^\infty(\Omega')$ with $\|\varphi-\psi\|_{L^{p'}}<\eta/(2C+2\|w\|_{L^p}+1)$, and then $0<|h|$ small enough that $\big|\int_{\Omega'}\delta_h^iu\,\psi\,dx-\int_{\Omega'}w\,\psi\,dx\big|<\eta/2$, which is possible by steps 2.1 and 5.1. For such $h$, $$\Big|\int_{\Omega'}\delta_h^iu\,\varphi-\int_{\Omega'}w\,\varphi\Big|\le\|\delta_h^iu\|_{L^p}\|\varphi-\psi\|_{L^{p'}}+\Big|\int_{\Omega'}(\delta_h^iu-w)\psi\Big|+\|w\|_{L^p}\|\psi-\varphi\|_{L^{p'}}<\eta ,$$ using [F4] twice and the uniform bound of the hypothesis. Hence $\int_{\Omega'}\delta_h^iu\,\varphi\to\int_{\Omega'}w\,\varphi$ for every $\varphi\in L^{p'}(\Omega')$, which with step 6.1 proves the weak convergence $\delta_h^iu\rightharpoonup D_iu$ in $L^p(\Omega')$. [F4, step 2.1, step 1.2, step 5.1, step 6.1] ∎

## Source notes

Hunter's Theorem 4.53(2) (printed pp. 125-126) and Laugesen's Proposition 5.7(ii) (printed pp. 110-111) prove the same criterion by extracting a weak limit through Banach-Alaoglu; the route above replaces that extraction by the bounded functional $\varphi\mapsto-\int u\,\partial_i\varphi$ and the duality representation of [F7], so no weak compactness is used and the only choice principle consumed is Countable Choice, as the duality suppliers themselves record. Simon's Lecture 5, Lemma 7 states the convergence of difference quotients to weak derivatives in the form used in [F3].
