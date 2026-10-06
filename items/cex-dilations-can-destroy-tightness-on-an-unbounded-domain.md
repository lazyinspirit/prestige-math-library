---
id: cex-dilations-can-destroy-tightness-on-an-unbounded-domain
kind: counterexample
title: "Expanding bumps lose tightness"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 0
deps: [def-l-p-space-as-a-quotient-by-null-functions, def-sobolev-space-wkp-and-its-norm, thm-linear-change-of-variables-for-lebesgue-measure, thm-holder-inequality-for-integrals, thm-newton-leibniz-with-interior-derivative, thm-minkowski-integral-inequality, thm-tonelli-and-fubini-for-completed-product-measures, thm-dominated-convergence, def-translation-of-a-function-on-rn, def-metric-ball, def-countable-choice, lem-classical-derivatives-are-weak-derivatives]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "John K. Hunter, Notes on Partial Differential Equations (UC Davis, revised 18 June 2014, complete 242-page two-quarter notes)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "Sections 1.5 and 3.10, printed pp. 6-7 and 73-74; locally derived consequences are identified in the strategy."
    - title: "Juha Kinnunen, Sobolev Spaces (Aalto University, 2026, complete graduate lecture notes)"
      url: "https://math.aalto.fi/~jkkinnun/files/sobolev_spaces.pdf"
      locator: "Chapter 3, Section 3.6, Theorem 3.44, Remark 3.45 and Example 3.46, printed pp. 85-90."
---

## Statement refuted

**Refuted claim.** On $\mathbb R^n$ a bounded family in $W^{1,p}(\mathbb R^n)$
that is uniformly translation continuous is relatively compact in
$L^p(\mathbb R^n)$; in other words the tightness condition of the
Fr\'echet--Kolmogorov criterion would be automatic for $W^{1,p}$-bounded
families.

The witness spreads one unit of mass over balls of radius tending to infinity.
The $L^p$ norm and the translation modulus are controlled, but no fixed ball
carries any of the mass in the limit, and no subsequence can converge in
$L^p(\mathbb R^n)$.

## Facts & Assumptions

**Given:** Countable Choice; $n\ge1$, $1\le p<\infty$, a nonzero $\varphi\in C_c^\infty(\mathbb R^n)$ with $\|\varphi\|_{L^p(\mathbb R^n)}=1$ (for instance a normalised smooth bump), and $f_j(x):=j^{-n/p}\varphi(x/j)$ for $j\ge1$.

[F1] *Scaling.* For every measurable nonnegative $h$ and $j>0$, $\int_{\mathbb R^n}h(x/j)j^{-n}\,dx=\int_{\mathbb R^n}h(y)\,dy$; equivalently $\int_{\mathbb R^n}h(jx)j^{n}\,dx=\int h$. ([[thm-linear-change-of-variables-for-lebesgue-measure]])

[F2] *Segment bound.* For $\varphi\in C^1$ and $y,y'\in\mathbb R^n$, $\varphi(y)-\varphi(y')=\int_0^1\nabla\varphi(y'+t(y-y'))\cdot(y-y')\,dt$; hence $|\varphi(y)-\varphi(y')|\le|y-y'|\int_0^1|\nabla\varphi(y'+t(y-y'))|\,dt$. ([[thm-newton-leibniz-with-interior-derivative]])

[F3] *Minkowski and Tonelli.* For measurable $F$ on a product of sigma-finite spaces with $\int\|F(\cdot,t)\|_p\,dt<\infty$, $\|\int F(\cdot,t)\,dt\|_p\le\int\|F(\cdot,t)\|_p\,dt$, and the iterated integral of a nonnegative measurable function may be computed in either order. ([[thm-minkowski-integral-inequality]], [[thm-tonelli-and-fubini-for-completed-product-measures]])

[F4] *Dominated convergence.* If $|h_j|\le g$ with $g$ integrable and $h_j\to h$ pointwise almost everywhere, then $\int h_j\to\int h$. ([[thm-dominated-convergence]])

[F5] *Translation and balls.* $(\tau_hf)(x)=f(x-h)$ and $B(0,r)=\{|x|<r\}$; a ball of radius $r$ has finite Lebesgue measure. ([[def-translation-of-a-function-on-rn]], [[def-metric-ball]], [[def-l-p-space-as-a-quotient-by-null-functions]])

## Counterexample

**Proof technique:** direct.

1.1 By [F1] applied to $|\varphi|^p$ and to $|D\varphi|^p$, $\|f_j\|_{L^p}=j^{-n/p}\cdot j^{n/p}\|\varphi\|_{L^p}=1$ and $\|Df_j\|_{L^p}=j^{-1}\|D\varphi\|_{L^p}\le\|D\varphi\|_{L^p}$, and the same scaling holds for every derivative component. The classical derivatives are the weak derivatives by [[lem-classical-derivatives-are-weak-derivatives]], so $(f_j)$ is bounded in $L^p$ and in $W^{1,p}(\mathbb R^n)$; moreover $\int_{B(0,R)}|f_j|^p\,dx=\int_{B(0,R/j)}|\varphi(y)|^p\,dy\to0$ as $j\to\infty$ for each fixed $R$ by [F4], since $|\varphi|^p\mathbf 1_{B(0,R/j)}\le|\varphi|^p$ and the indicators tend to zero except at the null point $0$. [F1, F4, F5, given]

1.2 For fixed $h$ the segment bound [F2] applied to $\varphi$ at $y=(x-h)/j$ and $y'=x/j$ gives $|f_j(x-h)-f_j(x)|\le j^{-n/p}|h|j^{-1}\int_0^1|\nabla\varphi((x-th)/j)|\,dt$; taking $L^p$ norms and applying [F3] together with the translation and scaling identities of [F1] yields $\|\tau_hf_j-f_j\|_{L^p}\le|h|j^{-1}\|D\varphi\|_{L^p}\le|h|\,\|D\varphi\|_{L^p}$, a bound independent of $j$ that tends to $0$ with $|h|$; hence the family is uniformly translation continuous. [F1, F2, F3, given]

2.1 The family is not tight: by [F1], $\int_{|x|>R}|f_j|^p\,dx=\int_{|y|>R/j}|\varphi(y)|^p\,dy\to\int_{\mathbb R^n}|\varphi|^p=1$ for every fixed $R$ by [F4], so no $R$ makes the tails uniformly small; and it is not relatively compact, because if a subsequence converged in $L^p(\mathbb R^n)$ to some $g$, then $\|g\|_{L^p}=1$ by continuity of the norm, while step 1.1 forces $g=0$ almost everywhere on each ball $B(0,R)$ and hence on all of $\mathbb R^n$, a contradiction. So boundedness and uniform translation continuity alone do not give relative compactness on $\mathbb R^n$. Countable Choice is inherited through the scaling, Sobolev and completed-product interfaces. [F4, F5, step 1.1, step 1.2] ∎ 