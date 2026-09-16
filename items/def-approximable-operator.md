---
id: def-approximable-operator
kind: definition
title: Approximable operator
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-bounded-linear-operator, def-operator-norm, def-space-of-bounded-linear-operators, def-linear-basis, lem-finite-rank-operators-are-compact, thm-norm-limit-of-compact-operators-is-compact, def-countable-choice, def-banach-space, def-compact-linear-operator, def-metric-convergence, thm-metric-closure-characterisation]
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis — §4.2 p.188, Exercise 4.29 and the surrounding approximation discussion"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
    - title: "Gerald Teschl, Topics in Real and Functional Analysis, version November 17, 2017 — §3.1, approximation by finite rank operators"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
---

## Definition

Let $X$ and $Y$ be normed spaces over the same scalar field and let
$\mathcal B(X,Y)$ be the space of bounded linear operators with the operator
norm ([[def-space-of-bounded-linear-operators]],
[[def-bounded-linear-operator]], [[def-operator-norm]]). Write

$$\mathcal F(X,Y):=\{R\in\mathcal B(X,Y): R(X) \text{ admits an ordered basis of finite length}\}$$

for the set of bounded finite-rank operators ([[def-linear-basis]]). An
operator $T\in\mathcal B(X,Y)$ is **approximable** when $T$ lies in the closure
of $\mathcal F(X,Y)$ in the operator-norm metric
([[def-metric-convergence]], [[thm-metric-closure-characterisation]]).

**The closure is an epsilon statement.** The zero operator lies in
$\mathcal F(X,Y)$, since its range $\{0\}$ admits the empty ordered basis, so
$\mathcal F(X,Y)$ is nonempty and the metric-space description of the closure
applies: $T$ is approximable if and only if for every real $\varepsilon>0$
there is a bounded finite-rank operator $R$ with $\|T-R\|<\varepsilon$. No
choice principle is used for this equivalence.

**Approximable operators are compact, under countable choice.** Assume the
Axiom of Countable Choice ([[def-countable-choice]]), let $Y$ be a Banach space
([[def-banach-space]]) and let $T$ be approximable. Choosing for every
$n\in\mathbb N$ a bounded finite-rank $R_n$ with $\|T-R_n\|<1/(n+1)$ is a
countable selection from nonempty sets, so such operators exist; each $R_n$ is
compact ([[lem-finite-rank-operators-are-compact]]) and
$\|R_n-T\|\to0$, so $T$ is compact by the norm-limit theorem
([[thm-norm-limit-of-compact-operators-is-compact]],
[[def-compact-linear-operator]]).

**No converse is asserted here.** The statement that every compact operator
into $Y$ is approximable is the approximation-property question for the target
$Y$; it is not a consequence of the definition and is not claimed. The
companion page records the implication that holds when $Y$ has the
approximation property, and the distinction between compact and approximable
operators for a general Banach target is left open.
