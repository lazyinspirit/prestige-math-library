---
page: mixed-hodge-structures-and-strictness-examples
title: "Mixed Hodge Structures And Strictness: Examples"
status: draft
requires:
  - mixed-hodge-structures-and-strictness
items: []
examples:
  - ex-a-mixed-hodge-extension-need-not-split-rationally
---

This companion to [[mixed-hodge-structures-and-strictness]] works the
smallest example that distinguishes a mixed Hodge structure from a direct sum
of pure pieces. [[ex-a-mixed-hodge-extension-need-not-split-rationally]] takes
$H=\mathbb Q e_0\oplus\mathbb Q e_1$ with weight filtration concentrated in
weights $-2$ and $0$ and Hodge filtration
$F^0=\mathbb C(e_0+ie_1)$; the graded pieces are the Tate structures
$\mathbb Q(1)$ and $\mathbb Q(0)$, both checks of the opposition axiom are
carried out in the displayed basis, and the resulting short exact sequence
$0\to\mathbb Q(1)\to H\to\mathbb Q(0)\to 0$ is shown to admit no rational
splitting: a rational section sends the generator of $\mathbb Q(0)$ to
$e_0+q e_1$ with $q\in\mathbb Q$, while preservation of $F^0$ forces $q=i$.
The example is used by the rest of the track as the standard warning that the
Deligne splitting is a decomposition over $\mathbb C$ only.
