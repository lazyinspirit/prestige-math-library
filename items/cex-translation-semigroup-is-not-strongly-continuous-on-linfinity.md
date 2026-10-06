---
id: cex-translation-semigroup-is-not-strongly-continuous-on-linfinity
kind: counterexample
title: "The translation semigroup is not strongly continuous on L-infinity"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 1
deps:
  - thm-riesz-fischer-completeness-of-l-p
  - def-countable-choice
  - def-strongly-continuous-semigroup
  - def-l-p-space-as-a-quotient-by-null-functions
  - def-essential-supremum-with-respect-to-a-measure
  - def-translation-of-a-function-on-rn
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Klaus-Jochen Engel and Rainer Nagel, One-Parameter Semigroups for Linear Evolution Equations, Graduate Texts in Mathematics 194 (complete author-hosted monograph)"
      url: "https://www.math.uni-tuebingen.de/de/forschung/agfa/members/engel-nagel_one-parameter-semigroups.pdf/%40%40download/file/engel-nagel_one-parameter-semigroups.pdf"
      locator: "Chapter I Section 5, the discussion of $L^\\infty$ and the Lotz remark, printed pp. 42-43"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2026 author manuscript; complete 392-page archived text)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "Chapter 11 Section 11.3, the discussion of translation on $L^\\infty$, printed pp. 256-258"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement refuted

Assume Countable Choice ([[def-countable-choice]]) for the $L^\infty$ Banach-space interface. Let $X=L^\infty(\mathbb R)$ with the essential-supremum norm ([[def-l-p-space-as-a-quotient-by-null-functions]], [[def-essential-supremum-with-respect-to-a-measure]]) and let $(T(t)f)(s):=f(s+t)$ ([[def-translation-of-a-function-on-rn]]). Then $T(0)=I$, $T(t+s)=T(t)T(s)$ and every $T(t)$ is a linear isometry of $X$, but $(T(t))_{t\ge0}$ is not strongly continuous: for $f:=\mathbf 1_{(-\infty,0]}$ and every $t>0$ one has $\|T(t)f-f\|_\infty=1$, so $T(t)f\not\to f$ as $t\downarrow0$. This is the endpoint excluded by the finite-$p$ translation theorem.

**Refuted claim.** Every one-parameter family $(T(t))_{t\ge0}$ of linear isometries of $L^\infty(\mathbb R)$ with $T(0)=I$ and $T(t+s)=T(t)T(s)$ is strongly continuous. The right translation semigroup below satisfies all the algebraic hypotheses and all the isometry properties but fails strong continuity at $0$; this is the $p=\infty$ endpoint excluded from the finite-$p$ translation theorem.

## Facts & Assumptions

**Given:** Countable Choice; $X=L^\infty(\mathbb R)$ with the essential-supremum norm, and $(T(t)f)(s):=f(s+t)$ for $t\ge0$, $f\in X$, $s\in\mathbb R$; the function $f:=\mathbf 1_{(-\infty,0]}$.

[F1] $L^\infty(\mathbb R)$ consists of almost-everywhere classes of measurable functions with $\|f\|_\infty=\inf\{M:|f|\le M\ \text{a.e.}\}$, and $T(t)$ is well defined on classes because a translation preserves null sets ([[def-l-p-space-as-a-quotient-by-null-functions]], [[def-essential-supremum-with-respect-to-a-measure]]).

[F2] Translation of functions is defined by $(\tau_h f)(s)=f(s-h)$ ([[def-translation-of-a-function-on-rn]]), so with $T(t)f=\tau_{-t}f$ the shift acts by $s\mapsto s+t$ as displayed.

[F3] A strongly continuous semigroup must satisfy $T(0)=I$, the semigroup law, and continuity of every orbit on $[0,\infty)$, in particular at $0$ ([[def-strongly-continuous-semigroup]]).

## Counterexample

**Proof technique:** direct computation with the step function $f=\mathbf 1_{(-\infty,0]}$.

1.1 $T(0)=I$ and $T(t+s)=T(t)T(s)$ for $s,t\ge0$: indeed $(T(0)f)(s)=f(s)=f(s)$ and $\bigl(T(t)T(s)f\bigr)(u)=(T(s)f)(u+t)=f(u+t+s)=(T(t+s)f)(u)$ for every $u$. [F2, algebra]

1.2 Each $T(t)$ is linear and an isometry of $X$: $|(T(t)f)(s)|=|f(s+t)|$, and $s\mapsto s+t$ is a bijection of $\mathbb R$ carrying null sets to null sets, so $\|T(t)f\|_\infty=\|f\|_\infty$. [F1, F2]

2.1 For $f=\mathbf 1_{(-\infty,0]}$ and $t>0$ one has $T(t)f=\mathbf 1_{(-\infty,-t]}$, hence $(T(t)f-f)(s)=-1$ for $s\in(-t,0]$ and $=0$ for $s\notin(-t,0]$; the difference is the indicator of the interval $(-t,0]$ up to a sign, and this interval has positive measure, so $\|T(t)f-f\|_\infty=1$. [F1, F2, step 1.1]

3.1 Consequently $T(t)f$ does not converge to $f$ in the norm of $X$ as $t\downarrow0$: the distance stays equal to $1$ for every $t>0$, whereas any limit must have distance tending to $0$. Since $f=T(0)f$, the orbit of $f$ is not continuous at $0$, so the family fails hypothesis (iii) of [F3] and is not a strongly continuous semigroup, despite satisfying all the algebraic axioms and consisting of linear isometries. [F3, step 1.1, step 1.2, step 2.1] ∎
