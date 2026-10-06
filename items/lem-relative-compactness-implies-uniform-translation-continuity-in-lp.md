---
id: lem-relative-compactness-implies-uniform-translation-continuity-in-lp
kind: lemma
title: "Relative compactness forces uniform translation continuity in $L^p$"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 0
deps: [thm-translation-is-continuous-in-l-p-for-one-le-p-less-infinity, thm-compact-implies-complete-and-totally-bounded, lem-totally-bounded-basic, def-totally-bounded, def-translation-of-a-function-on-rn, def-l-p-space-as-a-quotient-by-null-functions, def-metric-ball, def-countable-choice, thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]
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
      locator: "Theorem 1.15, condition (3) of the Fr\\'echet--Kolmogorov criterion and the surrounding discussion of necessity, printed pp. 6-7"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (archived 2025 author manuscript)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "Theorem B.15, condition (i), printed p. 360"
---

## Statement

Assume the Axiom of Countable Choice. Let $1\le p<\infty$ and let
$\mathcal F\subseteq L^p(\mathbb R^n)$ be relatively compact, that is, its
closure in $L^p(\mathbb R^n)$ is compact. In the displayed nonnegative
supremum, take the value $0$ if $\mathcal F=\varnothing$. Then
$$\sup_{f\in\mathcal F}\|\tau_hf-f\|_{L^p(\mathbb R^n)}\longrightarrow0 \qquad(|h|\to0).$$
This is the necessity of the translation hypothesis in the
Fr\'echet--Kolmogorov criterion.

## Facts & Assumptions

**Given:** the Axiom of Countable Choice, $1\le p<\infty$, and a relatively compact family $\mathcal F\subseteq L^p(\mathbb R^n)$ with closure $\overline{\mathcal F}$.

[F1] *Compact metric spaces are totally bounded.* A compact metric space is totally bounded and complete. ([[thm-compact-implies-complete-and-totally-bounded]])

[F2] *Total boundedness is finite-net covering.* A metric space $(X,d)$ is totally bounded when for every $\delta>0$ there are finitely many points $x_1,\dots,x_N\in X$ with $X=\bigcup_{i=1}^N B(x_i,\delta)$; a subset of a totally bounded space which is itself totally bounded as a subspace has the same property for every $\delta>0$. ([[def-totally-bounded]], [[def-metric-ball]], [[lem-totally-bounded-basic]])

[F3] *Continuity of translation in $L^p$.* For every $g\in L^p(\mathbb R^n)$, $\|\tau_hg-g\|_p\to0$ as $|h|\to0$, where $\tau_hg=g(\cdot-h)$ acts on almost-everywhere classes. ([[thm-translation-is-continuous-in-l-p-for-one-le-p-less-infinity]], [[def-translation-of-a-function-on-rn]])

[F4] *Translation is an $L^p$-isometry.* $\|\tau_hg\|_p=\|g\|_p$ for every $g\in L^p(\mathbb R^n)$ and every $h$, because Lebesgue measure is translation invariant. ([[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]], [[def-l-p-space-as-a-quotient-by-null-functions]])

## Proof

**Proof technique:** Cover the compact closure by finitely many small balls, use continuity of translation at the finitely many centres, and propagate to the whole family by the isometry property and the triangle inequality.

1.1 If $\mathcal F=\varnothing$ the supremum is $0$ and the claim holds. Otherwise the closure $\overline{\mathcal F}$ is a compact subset of $L^p(\mathbb R^n)$, so $(\overline{\mathcal F},d_p)$ is a compact metric space and [F1] makes it totally bounded. Given $\varepsilon>0$, [F2] provides finitely many centres $f_1,\dots,f_N\in\overline{\mathcal F}$ with $\overline{\mathcal F}\subseteq\bigcup_{i=1}^NB(f_i,\varepsilon/3)$. [F1, F2, given]

2.1 For each $i$ the centre $f_i$ is an element of $L^p(\mathbb R^n)$, so [F3] gives $\delta_i>0$ with $\|\tau_hf_i-f_i\|_p<\varepsilon/3$ whenever $|h|<\delta_i$; set $\delta:=\min_i\delta_i>0$, a minimum over the nonempty finite set of indices. By [F4], $\|\tau_h(f-f_i)\|_p=\|f-f_i\|_p$ for every $f\in L^p(\mathbb R^n)$ and every $h$. [F3, F4, step 1.1]

3.1 Fix $f\in\mathcal F$ and $|h|<\delta$. By step 1.1 there is $i$ with $\|f-f_i\|_p<\varepsilon/3$, and the triangle inequality together with steps 2.1 and 1.1 gives $\|\tau_hf-f\|_p\le\|\tau_h(f-f_i)\|_p+\|\tau_hf_i-f_i\|_p+\|f_i-f\|_p<\varepsilon/3+\varepsilon/3+\varepsilon/3=\varepsilon$. Hence $\sup_{f\in\mathcal F}\|\tau_hf-f\|_p\le\varepsilon$ for all $|h|<\delta$, and since $\varepsilon>0$ was arbitrary the supremum tends to $0$. Countable Choice enters only through the continuity-of-translation interface [F3]. [F3, F4, step 1.1, step 2.1] ∎ 
