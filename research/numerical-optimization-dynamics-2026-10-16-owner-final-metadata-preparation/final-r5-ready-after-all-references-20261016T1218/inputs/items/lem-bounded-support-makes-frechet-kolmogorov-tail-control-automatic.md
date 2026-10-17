---
id: lem-bounded-support-makes-frechet-kolmogorov-tail-control-automatic
kind: lemma
title: "Uniformly supported families have vanishing tails"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 0
deps: [def-l-p-space-as-a-quotient-by-null-functions, def-metric-bounded-diameter, def-metric-ball, def-measure-null-set-and-almost-everywhere, thm-nonnegative-integral-zero-iff-zero-almost-everywhere]
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
      locator: "Theorem 1.15, condition (2) and the preceding example, printed pp. 6-7"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (archived 2025 author manuscript)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "Theorem 9.33, whose extra hypothesis is the tightness condition, printed p. 219"
---

## Statement

Let $1\le p<\infty$, let $E\subseteq\mathbb R^n$ be bounded and let
$\mathcal F\subseteq L^p(\mathbb R^n)$ be a family such that every
$f\in\mathcal F$ vanishes Lebesgue-almost everywhere outside $E$. In the
displayed nonnegative supremum, take the value $0$ if $\mathcal F=\varnothing$.
Then for every $\varepsilon>0$ there is $R>0$ with
$$\sup_{f\in\mathcal F}\int_{|x|>R}|f(x)|^p\,dx<\varepsilon.$$
In particular the tightness hypothesis of the Fr\'echet--Kolmogorov criterion
is automatic for families supported in one bounded set.

## Facts & Assumptions

**Given:** $1\le p<\infty$, a bounded set $E\subseteq\mathbb R^n$, and a family
$\mathcal F\subseteq L^p(\mathbb R^n)$ whose every member vanishes almost
everywhere outside $E$.

[F1] *Bounded sets lie in balls.* $E\subseteq\mathbb R^n$ is bounded in the
metric sense of [[def-metric-bounded-diameter]] if and only if there is a
centre $x_0$ and a radius $r>0$ with $E\subseteq B(x_0,r)$; a ball is
contained in the ball about the origin of radius $|x_0|+r$.
([[def-metric-bounded-diameter]], [[def-metric-ball]])

[F2] *Restriction to a measurable tail.* If $A\subseteq E^c$ is measurable
and $f$ vanishes almost everywhere on $E^c$, then for any measurable
representative $g$ the function $|g|^p\mathbf 1_A$ is measurable and zero
almost everywhere. ([[def-l-p-space-as-a-quotient-by-null-functions]],
[[def-measure-null-set-and-almost-everywhere]])

[F3] *Zero integral and almost-everywhere vanishing.* A nonnegative
measurable $h$ satisfies $\int h\,dx=0$ if and only if $h=0$ almost
everywhere. ([[thm-nonnegative-integral-zero-iff-zero-almost-everywhere]])

## Proof

**Proof technique:** Choose a ball containing $E$ and use the given
almost-everywhere vanishing on the measurable tail outside that ball.

1.1 By [F1] fix $R>0$ with $E\subseteq B(0,R)$ and put $A:=\{|x|>R\}$. The set $A$ is measurable and is contained in $E^c$. If $\mathcal F=\varnothing$ then its tail supremum is $0<\varepsilon$. Otherwise, for each $f\in\mathcal F$ the hypothesis says that $f$ vanishes almost everywhere on $E^c$, hence on $A$; by [F2] the measurable function $|g|^p\mathbf 1_A$ is zero almost everywhere for any representative $g$ of $f$, so [F3] gives $\int_A|f|^p\,dx=0$. [F1, F2, F3, given]

2.1 Every member of $\mathcal F$ has tail integral $0$ by step 1.1, so $\sup_{f\in\mathcal F}\int_{|x|>R}|f|^p\,dx=0<\varepsilon$. Since $\varepsilon>0$ was arbitrary, the tightness condition of the Fr\'echet--Kolmogorov criterion holds. The argument uses no choice principle: $R$ is obtained from the single bounded set $E$ and the supremum is evaluated at the constant value $0$. [step 1.1, given] ∎
