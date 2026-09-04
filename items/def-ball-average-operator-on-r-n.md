---
id: def-ball-average-operator-on-r-n
kind: definition
title: "The average of a locally integrable function over a Euclidean ball"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-countable-choice, def-locally-integrable-function-on-r-n, lem-euclidean-balls-have-positive-finite-lebesgue-measure]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  references:
    - title: "Gerald B. Folland, Real Analysis: Modern Techniques and Their Applications, 2nd ed., Section 3.4"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
---

## Definition

Assume the Axiom of Countable Choice ([[def-countable-choice]]).

Let $f\in L^1_{\mathrm{loc}}(\mathbb{R}^n)$
([[def-locally-integrable-function-on-r-n]]), let $x\in\mathbb{R}^n$, and let
$r>0$. The **ball average** of $f$ over $B(x,r)$ is
$$A_rf(x):=\frac{1}{\lambda(B(x,r))}\int_{B(x,r)} f(y)\,d\lambda(y).$$

The denominator is well defined because
[[lem-euclidean-balls-have-positive-finite-lebesgue-measure]] shows that every
Euclidean ball has positive finite Lebesgue measure.
