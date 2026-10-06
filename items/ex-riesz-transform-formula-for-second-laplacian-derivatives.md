---
id: ex-riesz-transform-formula-for-second-laplacian-derivatives
kind: example
title: The Riesz-transform formula for second derivatives of the Laplacian
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
dependency_level: 0
deps: [def-riesz-transforms-on-euclidean-space, cor-riesz-transforms-are-bounded-on-lp, cor-riesz-transforms-are-ltwo-bounded, thm-fourier-differentiation-and-multiplication-identities-on-tempered-distributions, lem-ltwo-fourier-multiplier-bound, thm-plancherel, def-countable-choice]
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Armin Schikorra, Partial Differential Equations I & II (version October 1, 2025; complete 281-page graduate lecture notes)"
      url: "https://sites.pitt.edu/~armin/pde2022/pde.pdf"
      locator: "§7.6, the Riesz-transform identity $\\partial_{\\alpha\\beta}(\\eta u)=R_\\alpha R_\\beta g$ in the proof sketch of Theorem 7.16, printed pp. 137-139 (read in full)"
    - title: "John Villavert, Elementary Theory and Methods for Elliptic Partial Differential Equations (2017; complete 220-page lecture notes)"
      url: "http://www2.math.ou.edu/~villavert/research%20papers/elementary%20theory%20and%20methods%20for%20elliptic%20partial%20differential%20equations.pdf"
      locator: "Theorem 3.7, Step 1 (the Plancherel computation) and the multiplier comparison, printed pp. 104-105 (read in full)"
    - title: "Xu-Jia Wang, Schauder Estimates for Elliptic and Parabolic Equations (Australian National University, 2006; complete 7-page note)"
      url: "https://maths-people.anu.edu.au/~wang/publications/3-Schauder-esti.pdf"
      locator: "§1, the multiplier/modulus representation of $D^2u$, printed pp. 1-2 (read for context)"
---

## Example

Assume Countable Choice. Let $n\ge1$ and $u\in\mathcal S(\mathbb R^n)$. Then, as tempered distributions (equivalently, as $L^2$ classes almost everywhere),
$$\partial_i\partial_ju=-R_iR_j(\Delta u)=R_iR_j(-\Delta u)\qquad(i,j\in\{1,\dots,n\}),$$
where $R_1,\dots,R_n$ are the Riesz transforms of [[def-riesz-transforms-on-euclidean-space]]; the symbol of $R_iR_j$ is $-\xi_i\xi_j/|\xi|^2$ off the origin, and combining the $L^p$ bounds of [[cor-riesz-transforms-are-bounded-on-lp]] gives
$$\|\partial_i\partial_ju\|_{L^p}\le C_{n,p}^2\,\|\Delta u\|_{L^p}\qquad(1<p<\infty).$$
For $n=1$ the identity reads $u''=-R_1R_1u''$ and is consistent because $R_1^2=-\mathrm{id}$ makes both sides equal $u''$.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, $n\ge1$, $1<p<\infty$, a Schwartz function $u\in\mathcal S(\mathbb R^n)$, and the negative-sign $2\pi$-normalized Fourier convention.

[A1] The only choice assumption is Countable Choice $\mathrm{AC}_\omega$; it enters through the Plancherel and Riesz-transform interfaces. No full Axiom of Choice is used. ([[def-countable-choice]])

[F1] The Riesz transforms are $R_j=\mathcal F_2^{-1}M_{m_j}\mathcal F_2$ with $m_j(\xi)=-i\xi_j/|\xi|$ for $\xi\ne0$ and $m_j(0)=0$; $\|R_j\|_{L^2\to L^2}\le1$ and $\sum_jR_j^2=-\mathrm{id}$ on $L^2$. For $1<p<\infty$ each $R_j$ extends boundedly to $L^p(\mathbb R^n;\mathbb C)$ with norm at most $C_{n,p}$. ([[def-riesz-transforms-on-euclidean-space]], [[cor-riesz-transforms-are-ltwo-bounded]], [[cor-riesz-transforms-are-bounded-on-lp]], [[lem-ltwo-fourier-multiplier-bound]])

[F2] $\mathcal F(\partial^\alpha u)=(2\pi i\xi)^\alpha\mathcal Fu$ on $\mathcal S'(\mathbb R^n)$, and $\mathcal F_2$ is a linear isometry that is injective on $L^2$; two tempered distributions with the same Fourier transform are equal. ([[thm-fourier-differentiation-and-multiplication-identities-on-tempered-distributions]], [[thm-plancherel]])

## Verification

**Proof technique:** direct.

1.1 Fourier multipliers. For $u\in\mathcal S(\mathbb R^n)$ and any $i,j$, [F2] gives $\mathcal F(\partial_i\partial_ju)=(2\pi i\xi_i)(2\pi i\xi_j)\widehat u=-4\pi^2\xi_i\xi_j\widehat u$ and $\mathcal F(\Delta u)=-4\pi^2|\xi|^2\widehat u$ in $\mathcal S'$; since $u$ and its derivatives are Schwartz functions, these are also the $L^2$ Fourier transforms $\mathcal F_2$ of the corresponding classes. Off the origin $m_i(\xi)m_j(\xi)=(-i\xi_i/|\xi|)(-i\xi_j/|\xi|)=-\xi_i\xi_j/|\xi|^2$, so $m_im_j\cdot(-4\pi^2|\xi|^2)=4\pi^2\xi_i\xi_j$ and hence $\mathcal F_2(R_iR_j(-\Delta u))=\mathcal F_2(\partial_i\partial_ju)$ almost everywhere: indeed $R_iR_j(-\Delta u)=\mathcal F_2^{-1}\bigl(m_im_j\mathcal F_2(-\Delta u)\bigr)$ and $\mathcal F_2(-\Delta u)=4\pi^2|\xi|^2\widehat u$, while the value of $m_im_j$ at the single point $\xi=0$ is immaterial. Injectivity of $\mathcal F_2$ [F2] gives the $L^2$ identity $\partial_i\partial_ju=R_iR_j(-\Delta u)$, hence also the distributional identity and the sign rearrangement $R_iR_j(-\Delta u)=-R_iR_j(\Delta u)$. [F1, F2, algebra, A1]

2.1 Symbol and $L^p$ bound. The multiplier of $R_iR_j$ is $m_im_j=-\xi_i\xi_j/|\xi|^2$ off the origin, so its absolute value is at most $1$; applying [F1] twice and using the identity of step 1.1, $\|\partial_i\partial_ju\|_{L^p}=\|R_iR_j(-\Delta u)\|_{L^p}\le C_{n,p}^2\|\Delta u\|_{L^p}$ for $1<p<\infty$, the norms being those of the $L^p$ classes of the Schwartz functions involved. [step 1.1, F1, algebra]

2.2 The one-dimensional case. For $n=1$ one has $m_1(\xi)=-i\xi/|\xi|=-i\operatorname{sign}(\xi)$ off the origin, so $m_1^2=-1$ and therefore $R_1^2=-\mathrm{id}$ on $L^2$ by [F1]; the identity of step 1.1 then reads $u''=R_1R_1(-u'')=-R_1R_1u''$, whose right-hand side equals $u''$, so the two sides agree. [step 1.1, F1, algebra]

3.1 Conclusion. For every $n\ge1$ and $u\in\mathcal S(\mathbb R^n)$ the second derivatives are the composition of the second-order Riesz multiplier with $-\Delta u$; the strict range $1<p<\infty$ is inherited from the Riesz-transform $L^p$ theorem, and the sign convention is the negative-sign $2\pi$-normalized Fourier transform used throughout. No endpoint $p=1$ or $p=\infty$ bound is asserted. [step 1.1, step 2.1, step 2.2, given] ∎

## Remarks

- The formula identifies the Hessian of $u$ with a bounded combination of Riesz transforms of the Laplacian, which is the multiplier version of the Calderón–Zygmund representation of second derivatives; it is the whole-space model estimate behind the interior $W^{2,p}$ regularity on this page.
