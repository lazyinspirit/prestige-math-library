---
id: def-dual-space-of-a-normed-space
kind: definition
title: "The dual space X^* of a normed space and its dual norm"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-space-of-bounded-linear-operators, def-operator-norm,
       def-algebraic-dual-and-linear-functional,
       rem-real-and-complex-normed-space-convention]
justified_by: []
verification:
  audited: 2026-09-05
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Daniel Daners, Introduction to Functional Analysis, Definition 25.1"
      url: "https://www.maths.usyd.edu.au/u/athomas/FunctionalAnalysis/daners-functional-analysis-2017.pdf"
    - title: "Gerald Teschl, Topics in Real and Functional Analysis, Section 4.2"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
---

## Definition

Let $X$ be a normed space over the scalar field $\mathbb{K}$, where
$\mathbb{K}=\mathbb{R}$ in the literal definition and $\mathbb{K}=\mathbb{C}$
by the convention of [[rem-real-and-complex-normed-space-convention]]. The
**dual space** of $X$ is

$$X^*:=\mathcal{B}(X,\mathbb{K}),$$

the space of bounded linear functionals on $X$
([[def-space-of-bounded-linear-operators]]).

Each $f \in X^*$ is in particular a linear functional in the algebraic sense,
so $X^*$ is a subspace of the algebraic dual from
[[def-algebraic-dual-and-linear-functional]].

The **dual norm** on $X^*$ is the operator norm:

$$\|f\|_{X^*}:=\|f\| =\sup\{|f(x)|:\|x\| \le 1\}.$$

## Remarks

- The pairing between $X^*$ and $X$ is evaluation: $(f,x) \mapsto f(x)$.
- In this library, $X^*$ means the topological dual unless the phrase
  "algebraic dual" is written explicitly.
