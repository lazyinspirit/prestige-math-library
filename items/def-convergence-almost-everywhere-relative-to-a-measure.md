---
id: def-convergence-almost-everywhere-relative-to-a-measure
kind: definition
title: "Convergence almost everywhere relative to a measure"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-measure-null-set-and-almost-everywhere]
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
**converges to $f$ $\mu$-almost everywhere** when there is a measurable
$\mu$-null set $N$ such that for every $x \in X \setminus N$ the real sequence
$(f_n(x))$ converges to $f(x)$.

Equivalently, $(f_n)$ converges to $f$ $\mu$-almost everywhere when the
pointwise convergence statement $f_n(x) \to f(x)$ holds
$\mu$-almost everywhere in the sense of
[[def-measure-null-set-and-almost-everywhere]].
