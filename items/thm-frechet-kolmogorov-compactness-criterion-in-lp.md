---
id: thm-frechet-kolmogorov-compactness-criterion-in-lp
kind: theorem
title: "The Fr\\'echet--Kolmogorov compactness criterion in $L^p(\\mathbb R^n)$"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 0
deps: [def-radial-mollifier-family-in-rn, thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign, thm-young-convolution-inequality, thm-minkowski-integral-inequality, thm-holder-inequality-for-integrals, def-translation-of-a-function-on-rn, lem-equicontinuous-families-have-finite-sup-nets, thm-arzela-ascoli-for-real-ck, def-totally-bounded, lem-totally-bounded-basic, thm-complete-subspace-iff-closed, thm-complete-and-totally-bounded-implies-compact, thm-riesz-fischer-completeness-of-l-p, thm-metric-compactness-equivalences, def-metric-ball, def-l-p-space-as-a-quotient-by-null-functions, thm-lebesgue-outer-measure-and-measurability-are-translation-invariant, def-countable-choice, def-dependent-choice]
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
      locator: "Theorem 1.15 and Example 1.16, printed pp. 6-7"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (archived 2025 author manuscript)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "Theorem B.15 (Kolmogorov--Riesz--Sudakov), printed pp. 360-361; the local proof also assumes boundedness, as in Hunter Theorem 1.15."
    - title: "Juha Kinnunen, Sobolev Spaces (Aalto University, 2026, complete graduate lecture notes)"
      url: "https://math.aalto.fi/~jkkinnun/files/sobolev_spaces.pdf"
      locator: "Chapter 3, Section 3.6, the mollification and Arzel\\`a--Ascoli method of the proof of Theorem 3.44, printed pp. 86-89"
---

## Statement

Assume the Axiom of Countable Choice and the Axiom of Dependent Choice. Let
$1\le p<\infty$ and let $\mathcal F\subseteq L^p(\mathbb R^n)$. In each of the
three displayed nonnegative suprema, take the value $0$ if $\mathcal F=\varnothing$.
Assume $\mathcal F$ satisfies:
(i) $\sup_{f\in\mathcal F}\|f\|_{L^p(\mathbb R^n)}<\infty$; (ii) for every
$\varepsilon>0$ there is $R>0$ with
$\sup_{f\in\mathcal F}\bigl(\int_{|x|>R}|f|^p\bigr)^{1/p}<\varepsilon$; and
(iii) for every $\varepsilon>0$ there is $\delta>0$ with
$\sup_{f\in\mathcal F}\|\tau_hf-f\|_{L^p(\mathbb R^n)}<\varepsilon$ whenever
$|h|<\delta$. Then $\mathcal F$ is totally bounded in $L^p(\mathbb R^n)$, the
closure of $\mathcal F$ is compact, and every sequence in $\mathcal F$ has a
subsequence converging in $L^p(\mathbb R^n)$.

## Facts & Assumptions

**Given:** the Axioms of Countable and Dependent Choice, $1\le p<\infty$, and a family $\mathcal F\subseteq L^p(\mathbb R^n)$ satisfying conditions (i)--(iii) of the statement; write $M:=\sup_{f\in\mathcal F}\|f\|_p<\infty$. For $R>0$ and $f\in\mathcal F$ put $f_R:=f\mathbf 1_{\{|x|\le R\}}$, and for each $\varepsilon>0$ let $\eta_\varepsilon$ be the radial mollifier at scale $\varepsilon$ of [[def-radial-mollifier-family-in-rn]].

[F1] *Mollification.* For $f_R\in L^p\subseteq L^1_{\mathrm{loc}}$, the function $f_R*\eta_\delta$ is smooth and $\partial^\alpha(f_R*\eta_\delta)=f_R*(\partial^\alpha\eta_\delta)$. ([[thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign]])

[F2] *H\"older's inequality.* For conjugate exponents $p,p'$, $\int|uv|\le\|u\|_p\|v\|_{p'}$; in particular $|(f_R*\eta_\delta)(x)|\le\|f_R\|_p\|\eta_\delta\|_{p'}$ and $|\nabla(f_R*\eta_\delta)(x)|\le\|f_R\|_p\|\nabla\eta_\delta\|_{p'}$ pointwise. ([[thm-holder-inequality-for-integrals]])

[F3] *Minkowski's integral inequality.* For measurable $F$ on a product of sigma-finite measure spaces with $\int_Y\|F(\cdot,y)\|_p\,d\nu(y)<\infty$, $\bigl\|\int_YF(\cdot,y)\,d\nu(y)\bigr\|_p\le\int_Y\|F(\cdot,y)\|_p\,d\nu(y)$. ([[thm-minkowski-integral-inequality]])

[F4] *Translations are $L^p$-isometries.* $\|\tau_hg\|_p=\|g\|_p$ for every $g\in L^p$ and every $h$, since Lebesgue measure is translation invariant. ([[def-translation-of-a-function-on-rn]], [[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]], [[def-l-p-space-as-a-quotient-by-null-functions]])

[F5] *Finite nets for equicontinuous families.* An equicontinuous pointwise bounded family in $C(K,\mathbb R)$, $K$ a compact metric space, is totally bounded for the supremum metric; the same holds after applying the statement to real and imaginary parts of a complex-valued family, and [[thm-arzela-ascoli-for-real-ck]] records the equivalent compact-closure form. ([[lem-equicontinuous-families-have-finite-sup-nets]], [[thm-arzela-ascoli-for-real-ck]])

[F6] *Total boundedness and its closure.* A metric space is totally bounded when it has a finite $\delta$-net for every $\delta>0$; total boundedness passes to subsets and to closures, and for $g,h$ supported in a compact ball $K$ one has $\|g-h\|_p\le\|g-h\|_\infty|K|^{1/p}$. ([[def-totally-bounded]], [[lem-totally-bounded-basic]], [[def-metric-ball]])

[F7] *Completeness and compactness of $L^p$.* $L^p(\mathbb R^n)$ is complete; a closed subspace of a complete metric space is complete, and a complete and totally bounded metric space is compact under Countable Choice; compactness and sequential compactness of a metric space are equivalent under Countable and Dependent Choice. ([[thm-riesz-fischer-completeness-of-l-p]], [[thm-complete-subspace-iff-closed]], [[thm-complete-and-totally-bounded-implies-compact]], [[thm-metric-compactness-equivalences]], [[def-countable-choice]], [[def-dependent-choice]])

## Proof

**Proof technique:** Make the tails small and the translations small, regularise by convolution, use Arzel\`a--Ascoli to get a finite net for the regularised family, and transfer the net back to $\mathcal F$.

1.1 If $\mathcal F=\varnothing$ it is totally bounded and its closure is empty. Otherwise fix $\varepsilon>0$. By (ii) choose $R>0$ with $\|f-f_R\|_p<\varepsilon$ for every $f\in\mathcal F$, and by (iii) choose $\delta>0$ with $\|\tau_hf-f\|_p<\varepsilon$ for every $f\in\mathcal F$ and every $|h|<\delta$; let $\eta:=\eta_{\delta/2}$ be the radial mollifier at scale $\delta/2$, so $\int\eta=1$, $\eta\ge0$ and $\operatorname{supp}\eta\subseteq B(0,\delta/2)$. [given]

2.1 For every $f\in\mathcal F$ and every $|y|<\delta$, $\|f_R-\tau_yf_R\|_p\le\|f_R-f\|_p+\|f-\tau_yf\|_p+\|\tau_yf-\tau_yf_R\|_p<3\varepsilon$ by step 1.1 and [F4]. Since $f_R-f_R*\eta=\int\eta(y)\bigl(f_R-\tau_yf_R\bigr)dy$, [F3] gives $\|f_R-f_R*\eta\|_p\le\int\eta(y)\|f_R-\tau_yf_R\|_p\,dy<3\varepsilon$, and therefore $\|f-f_R*\eta\|_p<4\varepsilon$. [F3, F4, step 1.1]

2.2 By [F1] and [F2], every $g=f_R*\eta$ satisfies $\|g\|_\infty\le M\|\eta\|_{p'}$ and $\|\nabla g\|_\infty\le M\|\nabla\eta\|_{p'}$, and $g$ vanishes off the ball of radius $R+\delta$ because $f_R$ vanishes off the ball of radius $R$; hence the family $\mathcal G:=\{f_R*\eta:f\in\mathcal F\}$ is uniformly bounded and uniformly Lipschitz, and all its elements are supported in the compact ball $K:=\overline{B(0,R+\delta)}$. [F1, F2, step 1.1]

3.1 The real parts $\{\operatorname{Re}g:g\in\mathcal G\}$ are equicontinuous and pointwise bounded on the compact metric space $K$, and likewise the imaginary parts; by [F5] both families are totally bounded in the supremum metric, and combining the finitely many real and imaginary sup-balls, $\mathcal G$ is totally bounded in the supremum metric over $K$. Since every $g$ is supported in $K$, the supremum over $\mathbb R^n$ equals the supremum over $K$, so for every $\vartheta>0$ the family $\mathcal G$ has a finite covering by $L^p$-balls of radius $\vartheta$ by [F6]. [F5, F6, step 2.2]

4.1 Let $r>0$ and apply steps 1.1--3.1 with $\varepsilon<r/10$, covering $\mathcal G$ by finitely many $L^p$-balls of radius $r/10$. Step 2.1 then covers $\mathcal F$ by the same centres with radius $r/2$. Discard empty intersections with $\mathcal F$ and choose one point of $\mathcal F$ in each remaining ball. Their radius-$r$ balls cover $\mathcal F$ by the triangle inequality, so the centres belong to $\mathcal F$ as required by [F6]. Thus $\mathcal F$ is totally bounded. [F6, step 2.1, step 3.1]

5.1 By [F6] the closure $\overline{\mathcal F}$ is totally bounded, and it is closed in the complete space $L^p(\mathbb R^n)$, hence complete by [F7]; a complete and totally bounded metric space is compact by [F7], and compactness is equivalent to sequential compactness by [F7], so every sequence in $\mathcal F$ has a subsequence converging in $L^p(\mathbb R^n)$. The empty case was disposed of in step 1.1, and no other choice principle is used: Countable Choice covers the completeness-to-compactness step and the finite-net selection, Dependent Choice covers the compactness-sequential equivalence. [F6, F7, step 1.1, step 4.1] ∎ 
