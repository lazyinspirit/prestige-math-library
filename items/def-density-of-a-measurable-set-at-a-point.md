---
id: def-density-of-a-measurable-set-at-a-point
kind: definition
title: "Density of a measurable set at a point"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-countable-choice, def-lebesgue-measure-and-the-lebesgue-sigma-algebra, def-metric-ball, lem-euclidean-balls-have-positive-finite-lebesgue-measure]
sources:
  references:
    - title: "Terence Tao, An Introduction to Measure Theory, Exercise 1.6.24"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf"
    - title: "Walter Rudin, Real and Complex Analysis, 3rd ed., Chapter 7"
      url: "https://web.archive.org/web/20221029120924if_/https://perso.telecom-paristech.fr/decreuse/_downloads/c22155fef582344beb326c1f44f437d2/rudin.pdf"
---

## Definition

Assume the Axiom of Countable Choice ([[def-countable-choice]]).

Let $E\subseteq\mathbb{R}^n$ be Lebesgue measurable
([[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]]), and let
$x\in\mathbb{R}^n$. If the limit exists, the **density of $E$ at $x$** is
$$\Theta(E,x):= \lim_{r\to0^+}\frac{\lambda(E\cap B(x,r))}{\lambda(B(x,r))},$$
where the denominator is positive and finite by
[[lem-euclidean-balls-have-positive-finite-lebesgue-measure]].

When $\Theta(E,x)=1$, we call $x$ a **density-one point** of $E$; when
$\Theta(E,x)=0$, we call $x$ a **density-zero point** of $E$.
