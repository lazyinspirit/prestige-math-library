---
id: thm-global-w-two-p-estimate-for-the-laplacian-on-rn
kind: theorem
title: Global $W^{2,p}$ estimate for the Laplacian on Euclidean space
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
dependency_level: 0
deps: [cor-riesz-transforms-are-bounded-on-lp, def-riesz-transforms-on-euclidean-space, thm-fourier-differentiation-and-multiplication-identities-on-tempered-distributions, thm-plancherel, thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms, lem-ltwo-fourier-multiplier-bound, cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn, def-sobolev-space-wkp-and-its-norm, def-countable-choice]
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Armin Schikorra, Partial Differential Equations I & II (version October 1, 2025; complete 281-page graduate lecture notes)"
      url: "https://sites.pitt.edu/~armin/pde2022/pde.pdf"
      locator: "§7.6, the Riesz-transform proof of the global $W^{2,p}$ estimate for the Laplacian, printed pp. 137-139 (read in full)"
    - title: "Armin Schikorra, Partial Differential Equations I & II (version October 1, 2025; complete 281-page graduate lecture notes)"
      url: "https://sites.pitt.edu/~armin/pde2022/pde.pdf"
      locator: "§8.7, the constant-coefficient $L^p$ estimate and its role in the Schauder and $W^{2,p}$ theory, printed pp. 150-152 (read in full)"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript, complete 392 pages)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "§10.4, the $L^p$ estimates for $D^2u$ in terms of $\\Delta u$, printed pp. 243-247 (read in full)"
---

## Statement

Assume Countable Choice. Let $n\ge2$ and $1<p<\infty$. Then there is $C=C(n,p)<\infty$ such that every $u\in C_c^\infty(\mathbb R^n)$ satisfies
$$\|D^2u\|_{L^p(\mathbb R^n)}\le C\|\Delta u\|_{L^p(\mathbb R^n)},\qquad \|\partial_i\partial_ju\|_{L^p(\mathbb R^n)}\le C\|\Delta u\|_{L^p(\mathbb R^n)},$$
for all $i,j$, where $\|D^2u\|_{L^p}:=\max_{|\beta|=2}\|D^\beta u\|_{L^p}$; by density the bound extends to every $u\in W^{2,p}(\mathbb R^n)$ (for which $\Delta u\in L^p$ holds automatically). The constant may be taken as the square of the Riesz-transform bound of [[cor-riesz-transforms-are-bounded-on-lp]], hence is finite throughout $1<p<\infty$, including $p=2$. No sharp endpoint growth rate is claimed.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, $n\ge2$, $1<p<\infty$, and a function $u$ that is either in $C_c^\infty(\mathbb R^n)$ or, in the density step, in $W^{2,p}(\mathbb R^n)$.

[A1] The only choice assumption is Countable Choice $\mathrm{AC}_\omega$; it enters through the choice-qualified Riesz-transform, Fourier and Sobolev interfaces below. No full Axiom of Choice is used. ([[def-countable-choice]])

[F1] The Riesz transforms are the $L^2$ operators $R_j=\mathcal F_2^{-1}M_{m_j}\mathcal F_2$ with $m_j(\xi)=-i\xi_j/|\xi|$ for $\xi\ne0$ and $m_j(0)=0$, and for every $1<p<\infty$ each $R_j$ extends uniquely to a bounded operator on $L^p(\mathbb R^n;\mathbb C)$ with norm at most $C_{n,p}$; the bound of [[cor-riesz-transforms-are-bounded-on-lp]] is $\le C_{n,p}(1+|S^{n-1}|2^{-1}C_n)\max(p,(p-1)^{-1})$ ; this is an upper bound, not a lower bound on the operator norm. ([[def-riesz-transforms-on-euclidean-space]], [[lem-ltwo-fourier-multiplier-bound]])

[F2] The unitary Plancherel transform $\mathcal F_2$ is complex-linear, isometric and injective on $L^2(\mathbb R^n;\mathbb C)$; the negative-sign $2\pi$-normalized distributional transform equals $\mathcal F_2$ on $L^2$ classes in the sense that $\mathcal F u_f=u_{\mathcal F_2f}$, and it satisfies $\mathcal F(\partial^\alpha u)=(2\pi i\xi)^\alpha\mathcal Fu$ for tempered distributions. ([[thm-plancherel]], [[thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms]], [[thm-fourier-differentiation-and-multiplication-identities-on-tempered-distributions]])

[F3] Compactly supported smooth functions are dense in $W^{2,p}(\mathbb R^n)$ for finite $p$, and the Sobolev norm is the $p$-sum of the $L^p$ norms of the weak derivatives; for $u\in W^{2,p}$ all weak second derivatives and hence $\Delta u=\sum_i\partial_i^2u$ lie in $L^p$. ([[cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn]], [[def-sobolev-space-wkp-and-its-norm]])

## Proof

**Proof technique:** direct.

1.1 Fourier identification. Let $u\in C_c^\infty(\mathbb R^n)$ and put $f:=-\Delta u\in C_c^\infty(\mathbb R^n)$. Since $u$ is smooth, the classical identity $\widehat{\partial_i\partial_ju}=(2\pi i\xi_i)(2\pi i\xi_j)\widehat u$ and the distributional Fourier calculus of [F2] give, as tempered distributions, $\mathcal F(\partial_i\partial_ju)=(2\pi i\xi_i)(2\pi i\xi_j)\mathcal Fu=-4\pi^2\xi_i\xi_j\mathcal Fu$ and $\mathcal F(-\Delta u)=4\pi^2|\xi|^2\mathcal Fu$; on $L^2$ classes these equal $\mathcal F_2(\partial_i\partial_ju)$ and $\mathcal F_2f$ respectively by the agreement statement of [F2]. Since $f\in L^2$ and $R_j$ is the $L^2$ multiplier by $m_j$, the composition satisfies $R_iR_jf=\mathcal F_2^{-1}\bigl(m_im_j\mathcal F_2f\bigr)$ and, on $\{\xi\ne0\}$, $m_im_j\cdot4\pi^2|\xi|^2=(-i\xi_i/|\xi|)(-i\xi_j/|\xi|)4\pi^2|\xi|^2=-4\pi^2\xi_i\xi_j$. Plancherel injectivity [F2] therefore gives the $L^2$ identity $\partial_i\partial_ju=R_iR_jf=R_iR_j(-\Delta u)$. [F1, F2, given, algebra]

2.1 $L^p$ bound for smooth compactly supported data. For $u\in C_c^\infty$ the function $f=-\Delta u$ lies in $C_c^\infty\subset L^p\cap L^2$, so both operators in step 1.1 are defined on $L^p$ and the identity holds a.e.; using twice the $L^p$ bound of [F1], $\|\partial_i\partial_ju\|_{L^p}=\|R_iR_jf\|_{L^p}\le C_{n,p}^2\|f\|_{L^p}=C_{n,p}^2\|\Delta u\|_{L^p}$. Taking the maximum over $i,j$ gives $\|D^2u\|_{L^p}\le C_{n,p}^2\|\Delta u\|_{L^p}$ for every $u\in C_c^\infty(\mathbb R^n)$. [step 1.1, F1, algebra]

3.1 Density. Let $u\in W^{2,p}(\mathbb R^n)$ and let $u_k\in C_c^\infty(\mathbb R^n)$ satisfy $u_k\to u$ in $W^{2,p}(\mathbb R^n)$, which exists by [F3]. Then $\Delta u_k\to\Delta u$ and $\partial_i\partial_ju_k\to\partial_i\partial_ju$ in $L^p$ by the definition of the Sobolev norm [F3], and applying step 2.1 to $u_k$ and passing to the limit gives $\|D^2u\|_{L^p}\le C_{n,p}^2\|\Delta u\|_{L^p(\mathbb R^n)}$ and the same bound for each $\partial_i\partial_ju$. Since $\Delta u\in L^p$ holds automatically for $W^{2,p}$ classes by [F3], the inequality applies to every such class. [step 2.1, F3, algebra]

4.1 Conclusion and constants. The two displayed inequalities hold with $C=C_{n,p}^2$, which is finite for every $1<p<\infty$ by [F1]. Squaring an upper bound supplies an upper bound only; no sharp growth rate or endpoint estimate is inferred. The proof uses the Riesz-transform $L^p$ theory, whose choice assumption is the Countable Choice of [A1] together with those of the Fourier interfaces; no compactness, no extension operator and no maximal-function argument is used. [step 2.1, step 3.1, F1, A1, given] ∎

## Remarks

- The identity $\partial_i\partial_ju=R_iR_j(-\Delta u)$ is the multiplier form of the classical relation $\xi_i\xi_j=(\xi_i\xi_j/|\xi|^2)|\xi|^2$; the cancellation at $\xi=0$ is immaterial because single points are Lebesgue null.
- The estimate is the $L^p$ counterpart of the Schauder estimate of this page: both control second derivatives by the Laplacian/operator, but the $L^p$ scale accepts merely $L^p$ data and its constant degenerates at $p=1$ and $p=\infty$.
