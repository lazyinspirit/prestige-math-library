---
id: def-convergence-in-l-one-of-a-measure
kind: definition
title: "Convergence in L^1(mu)"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-l-one-of-a-measure]
verification:
  audited: 2026-08-28
  precheck: n/a
sources:
  references:
    - title: "Gerald B. Folland, Real Analysis, 2nd ed., Proposition 2.29"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
    - title: "Terence Tao, 245A Notes 4: Modes of convergence"
      url: "https://terrytao.wordpress.com/2010/10/02/245a-notes-4-modes-of-convergence/"
---

## Definition

Let $(X,\mathcal A,\mu)$ be a measure space and let $f_n,f \in L^1(\mu)$
([[def-l-one-of-a-measure]]). The sequence $(f_n)$ **converges to $f$ in
$L^1(\mu)$** when

$$\int |f_n-f|\,d\mu \to 0.$$

On this page $L^1(\mu)$ is still the class of integrable representatives rather
than the quotient by almost-everywhere equality, so the expression above is
read on the functions themselves.
