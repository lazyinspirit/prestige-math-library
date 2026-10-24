---
id: lem-interior-w-two-p-regularity-for-the-laplacian
kind: lemma
title: Local $W^{2,p}$ regularity of weak solutions of the Poisson equation
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
dependency_level: 1
deps: [thm-global-w-two-p-estimate-for-the-laplacian-on-rn, def-newtonian-potential, thm-newtonian-potential-solves-poisson-distributionally, def-riesz-transforms-on-euclidean-space, cor-riesz-transforms-are-bounded-on-lp, cor-riesz-transforms-are-ltwo-bounded, thm-fourier-differentiation-and-multiplication-identities-on-tempered-distributions, thm-fourier-transform-is-a-topological-automorphism-of-tempered-distributions, thm-distributional-differentiation-is-continuous-and-commutes, thm-locally-integrable-functions-embed-in-distributions, thm-young-convolution-inequality, def-laplace-fundamental-solution-with-positive-minus-laplacian-sign, thm-meyers-serrin-density-on-an-arbitrary-open-set, thm-interior-derivative-estimates-for-harmonic-functions, cor-locally-integrable-weakly-harmonic-functions-are-smooth, def-sobolev-space-wkp-and-its-norm, lem-smooth-bump-between-concentric-euclidean-balls, def-countable-choice, thm-newtonian-potential-for-holder-data-is-classical, thm-holder-inequality-for-integrals, thm-polar-coordinates-formula-for-lebesgue-measure, thm-riesz-fischer-completeness-of-l-p, thm-complex-lp-completeness-and-almost-everywhere-subsequences, thm-monotone-convergence-for-the-integral]
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Armin Schikorra, Partial Differential Equations I & II (version October 1, 2025; complete 281-page graduate lecture notes)"
      url: "https://sites.pitt.edu/~armin/pde2022/pde.pdf"
      locator: "§7.6, the interior $W^{2,p}$ regularity of the Poisson equation by the Newtonian-Hessian representation, printed pp. 137-139 (read in full)"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript, complete 392 pages)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "§10.4, the local $L^p$ estimates for $D^2u$ in terms of $\\Delta u$, printed pp. 243-247 (read in full)"
    - title: "John Villavert, Elementary Theory and Methods for Elliptic Partial Differential Equations (2017; complete 220-page lecture notes)"
      url: "http://www2.math.ou.edu/~villavert/research%20papers/elementary%20theory%20and%20methods%20for%20elliptic%20partial%20differential%20equations.pdf"
      locator: "§3.1.1 and Theorem 3.7, the Newtonian representation and the local $W^{2,p}$ estimate, printed pp. 92-93 and 104-105 (read in full)"
---

## Statement

Assume Countable Choice. Let $n\ge2$, $1<p<\infty$, let $B\subseteq\mathbb R^n$ be a ball and let $u\in W^{1,2}(B)$ satisfy $-\Delta u=f$ in the distributional sense on $B$ with $f\in L^p(B)$. Then $u\in W^{2,p}_{\mathrm{loc}}(B)$, and for every open $B'\Subset B$ there is $C=C(n,p,B',B)<\infty$ with
$$\|u\|_{W^{2,p}(B')}\le C\bigl(\|f\|_{L^p(B)}+\|u\|_{L^2(B)}\bigr).$$
No boundary regularity is asserted, and no decay of $u$ at infinity is assumed; the estimate is local in the interior only.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, $n\ge2$, $1<p<\infty$, a ball $B$, a function $u\in W^{1,2}(B)$ with $-\Delta u=f$ in $\mathcal D'(B)$ and $f\in L^p(B)$, and an open $B'\Subset B$.

[A1] The only choice assumption is Countable Choice $\mathrm{AC}_\omega$; it enters through the choice-qualified Newtonian-potential, Riesz-transform, Fourier and Sobolev interfaces. No full Axiom of Choice is used. ([[def-countable-choice]])

[F1] For $f\in L^1_c(\mathbb R^n)$ the Newtonian potential $Nf$ is locally integrable and $-\Delta T_{Nf}=T_f$ in $\mathcal D'(\mathbb R^n)$; it is smooth and harmonic off the support of $f$. For compactly supported $f\in L^p$ the local Young bound $\|Nf\|_{L^p(B_R)}\le\|\Phi\|_{L^1(B_{R+\rho})}\|f\|_{L^p}$ holds when $\operatorname{supp}f\subseteq B_\rho$, and similarly for the first derivatives with $\nabla\Phi\in L^1_{\rm loc}$. ([[def-newtonian-potential]], [[thm-newtonian-potential-solves-poisson-distributionally]], [[thm-young-convolution-inequality]], [[def-laplace-fundamental-solution-with-positive-minus-laplacian-sign]])

[F3] The Riesz transforms have $L^2$ norm at most $1$, satisfy $\sum_jR_j^2=-\mathrm{id}$, and extend boundedly to $L^p$ with norm at most $C_{n,p}$; their composition $R_iR_j$ has symbol $-\xi_i\xi_j/|\xi|^2$. The Fourier transform satisfies $\mathcal F(\partial^\alpha g)=(2\pi i\xi)^\alpha\mathcal Fg$ and is injective on tempered distributions; two locally integrable functions equal as distributions are equal almost everywhere; distributional differentiation is continuous for the distribution topology. ([[def-riesz-transforms-on-euclidean-space]], [[cor-riesz-transforms-are-ltwo-bounded]], [[cor-riesz-transforms-are-bounded-on-lp]], [[thm-fourier-differentiation-and-multiplication-identities-on-tempered-distributions]], [[thm-fourier-transform-is-a-topological-automorphism-of-tempered-distributions]], [[thm-locally-integrable-functions-embed-in-distributions]], [[thm-distributional-differentiation-is-continuous-and-commutes]])

[F4] A locally integrable weakly harmonic function on an open set is $C^\infty$ there, and for every compact $K$ contained in the open set and every multi-index $\beta$ with $|\beta|\le2$ one has $\sup_K|D^\beta h|\le C(K,\Omega)\|h\|_{L^1(\Omega)}$. ([[cor-locally-integrable-weakly-harmonic-functions-are-smooth]], [[thm-interior-derivative-estimates-for-harmonic-functions]])

[F5] Smooth cutoffs between concentric balls exist: for $B'\Subset B''\Subset B$ there is $\eta\in C_c^\infty(B)$ with $0\le\eta\le1$ and $\eta=1$ on a neighbourhood of $\overline{B''}$. Meyers–Serrin supplies smooth $W^{k,p}$ approximation, without claiming compact support on an arbitrary open set. For compactly supported $L^p$ data, apply its $k=0$ case on $\mathbb R^n$ and multiply by a fixed smooth cutoff equal to one on the support; the approximants then have one common compact support. ([[lem-smooth-bump-between-concentric-euclidean-balls]], [[thm-meyers-serrin-density-on-an-arbitrary-open-set]], [[def-sobolev-space-wkp-and-its-norm]])

## Proof

**Proof technique:** direct.

1.1 Localization. Choose a ball $B''$ with $B'\Subset B''\Subset B$ and, by [F5], a cutoff $\eta\in C_c^\infty(B)$ with $\eta=1$ on a neighbourhood of $\overline{B''}$; put $g:=\eta f$, extended by zero to $\mathbb R^n$, so that $g\in L^p_c(\mathbb R^n)$ and $g=f$ on $B''$. Let $w:=N(g)$ be the Newtonian potential of $g$. [F1, F5, given, A1]

2.1 Hessian bound for smooth data without dividing by the frequency variable. Let $g\in C_c^\infty$ and $w=Ng$. The classical-potential supplier [[thm-newtonian-potential-for-holder-data-is-classical]] gives $w\in C^2$ and $-\Delta w=g$. Fix $\chi\in C_c^\infty(B_2)$ equal to one on $B_1$, and put $\chi_T(x)=\chi(x/T)$. For large $T$ containing the support of $g$, $\Delta(\chi_Tw)=-g+2\nabla\chi_T\cdot\nabla w+w\Delta\chi_T$. On $T\le|x|\le2T$, the kernel formulas and differentiation away from the support give $|w(x)|\le C_gT^{2-n}$ for $n\ge3$, $|w(x)|\le C_g(1+\log T)$ for $n=2$, and $|\nabla w(x)|\le C_gT^{1-n}$ in both cases. Thus the commutator has $L^p$ norm at most $C_gT^{-n+n/p}(1+\mathbf1_{n=2}\log T)$, which tends to zero for $p>1$. The whole-space estimate [[thm-global-w-two-p-estimate-for-the-laplacian-on-rn]] applies to the compactly supported $C^2$ function $\chi_Tw$ (its classical derivatives are weak derivatives by integration by parts). On any fixed ball $B_M$, $\chi_Tw=w$ for $T>M$, so $\|D^2w\|_{L^p(B_M)}\le C_{n,p}(\|g\|_p+o(1))$. First let $T\to\infty$, then $M\to\infty$; [[thm-monotone-convergence-for-the-integral]] applied to the increasing ball indicators times the nonnegative Hessian integrands gives $\|D^2w\|_{L^p(\mathbb R^n)}\le C_{n,p}\|g\|_p$. This includes $p=2$ and avoids any two-dimensional Fourier inversion at zero. [F1, F3, F5, step 1.1, algebra]

3.1 Second derivatives of $w$: the $L^p$ case. For general $g\in L^p_c$, choose $g_k\in C_c^\infty$ with $g_k\to g$ in $L^p$ (possible by [F5] after multiplying by a cutoff). By [F1] the potentials $N g_k$ converge to $N g$ in $L^1_{\rm loc}$, and by the $L^p$ bound of step 2.1 the fields $D_{ij}Ng_k$ are Cauchy in $L^p(\mathbb R^n)$ (apply step 2.1 to $g_k-g_\ell$). Completeness of scalar $L^p$ follows from [[thm-riesz-fischer-completeness-of-l-p]] for real components and [[thm-complex-lp-completeness-and-almost-everywhere-subsequences]] for complex data under Countable Choice. Since distributional differentiation is continuous [F3], the limit is $D_{ij}Ng\in L^p$, so $w=N g\in W^{2,p}_{\rm loc}(\mathbb R^n)$ with, if $\operatorname{supp}g\subseteq B_\rho(0)$, for every ball $B_R(0)$, $\|w\|_{W^{2,p}(B_R)}\le C(n,p,R,\rho)\|g\|_{L^p}$ (the zero- and first-order terms are controlled by the Young bounds of [F1] and the second-order terms by step 2.1). [step 1.1, step 2.1, F1, F3, F5, algebra]

4.1 The remainder is harmonic. Since $\eta=1$ on $B''$ we have $g=f$ there, so $-\Delta(u-w)=f-g=0$ in $\mathcal D'(B'')$ by [F1]; hence $h:=u-w$ is a weakly harmonic function on $B''$ and therefore $C^\infty$ there by [F4]. The interior derivative estimates give $\|h\|_{W^{2,p}(B')}\le C(n,B',B'')\|h\|_{L^1(B'')}$, and $\|h\|_{L^1(B'')}\le |B|^{1/2}\|u\|_{L^2(B)}+\|w\|_{L^1(B'')}\le C(B,n,p)(\|u\|_{L^2(B)}+\|f\|_{L^p(B)})$ by the local Young bound [F1], Hölder on the bounded supports, and $\|u\|_{L^1(B'')}\le |B|^{1/2}\|u\|_{L^2(B)}$. [step 1.1, step 3.1, F1, F4, algebra]

5.1 Conclusion. On $B'$ one has $u=w+h$ with $w\in W^{2,p}(B')$ by step 3.1 and $h\in W^{2,p}(B')$ by step 4.1, so $u\in W^{2,p}(B')$ and $\|u\|_{W^{2,p}(B')}\le\|w\|_{W^{2,p}(B')}+\|h\|_{W^{2,p}(B')}\le C(n,p,B',B)(\|f\|_{L^p(B)}+\|u\|_{L^2(B)})$, using $\|g\|_{L^p}\le\|\eta\|_\infty\|f\|_{L^p(B)}$. No boundary condition on $u$ was used, and the constants depend only on $n,p$ and the balls. [step 3.1, step 4.1, F1, F5, given] ∎

## Remarks

- The proof isolates the two inputs: the growing-cutoff whole-space estimate bounds the Hessian of the potential on $L^p$ data, while the harmonic remainder is controlled by the interior estimates for harmonic functions. The harmonic remainder is estimated in local $L^1$; no $L^p$ to $L^2$ embedding for the potential is assumed.
