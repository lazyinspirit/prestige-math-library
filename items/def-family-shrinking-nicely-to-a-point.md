---
id: def-family-shrinking-nicely-to-a-point
kind: definition
title: "A family shrinking nicely to a point"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-countable-choice, def-metric-ball, lem-euclidean-balls-have-positive-finite-lebesgue-measure]
verification:
  audited: 2026-09-04
sources:
  references:
    - title: "Gerald B. Folland, Real Analysis: Modern Techniques and Their Applications, 2nd ed., Theorem 3.21"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
    - title: "Terence Tao, An Introduction to Measure Theory, Exercise 1.6.15"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf"
---

## Definition

Assume the Axiom of Countable Choice ([[def-countable-choice]]).

Let $x\in\mathbb{R}^n$. A family $(E_r)_{r>0}$ of Lebesgue measurable subsets
of $\mathbb{R}^n$ **shrinks nicely to $x$** if there is a constant $\alpha>0$
such that for every $r>0$,
$$E_r\subseteq B(x,r) \qquad\text{and}\qquad \lambda(E_r)\ge\alpha\,\lambda(B(x,r)).$$

The constant $\alpha$ is part of the data: later comparison estimates depend on
it explicitly.
