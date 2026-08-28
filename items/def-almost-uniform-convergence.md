---
id: def-almost-uniform-convergence
kind: definition
title: "Almost uniform convergence"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-measure-space, def-pointwise-uniform-and-uniformly-cauchy-convergence]
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  references:
    - title: "Gerald B. Folland, Real Analysis, 2nd ed., Section 2.4"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
    - title: "Terence Tao, 245A Notes 4: Modes of convergence"
      url: "https://terrytao.wordpress.com/2010/10/02/245a-notes-4-modes-of-convergence/"
---

## Definition

Let $(X,\mathcal A,\mu)$ be a measure space and let
$f_n,f : X \to \mathbb{R}$ be measurable. The sequence $(f_n)$
**converges to $f$ almost uniformly** when for every real $\varepsilon > 0$
there is a measurable set $E \in \mathcal A$ with $\mu(E)<\varepsilon$ such
that $(f_n)$ converges uniformly to $f$ on $X \setminus E$.

In expanded quantifiers, this means that for every $\varepsilon > 0$ there is a
measurable $E$ with $\mu(E)<\varepsilon$ such that
$$(\forall \eta>0)(\exists N\in\mathbb N)(\forall n\ge N)(\forall x\in X\setminus E)\quad |f_n(x)-f(x)|<\eta.$$
