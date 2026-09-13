---
id: def-higher-cup-i-products
kind: definition
title: Higher cup-i products
status: draft
origin: pipeline
deps: ["lem-natural-higher-diagonal-approximations-on-singular-chains", "def-singular-cup-product-on-cochains"]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: Mosher and Tangora, Cohomology Operations and Applications
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/moshtang.pdf
      locator: Chapter 2, cup-i construction, printed pages 15--16
---

## Definition

Work over $\mathbb F_2$ and use the natural higher diagonals $D_i$ of
[[lem-natural-higher-diagonal-approximations-on-singular-chains]]. For
$a\in C^p(X;\mathbb F_2)$, $b\in C^q(X;\mathbb F_2)$, and $i\geq0$, their
**cup-$i$ product** is the cochain of degree $p+q-i$ defined by

$$
(a\smile_i b)(c):=(a\otimes b)(D_i c),\qquad c\in C_{p+q-i}(X;\mathbb F_2).
$$

Set $a\smile_i b=0$ when $i<0$ or $p+q-i<0$. Since $D_0$ is the
Alexander--Whitney diagonal, $a\smile_0b$ is exactly the singular cup product
of [[def-singular-cup-product-on-cochains]], with the same front-face/back-face
order.

For a subspace $A\subseteq X$, the carrier property of $D_i$ implies that the
formula restricts to relative cochains. More precisely, either of

$$
C^p(X,A)\otimes C^q(X)\longrightarrow C^{p+q-i}(X,A),\qquad C^p(X)\otimes C^q(X,A)\longrightarrow C^{p+q-i}(X,A)
$$

is well defined: on a chain in $A$, both tensor factors of $D_i$ lie in $A$,
so the relative factor evaluates to zero. The construction uses only the fixed
$D_i$ and evaluation, and hence makes no choice. It includes the empty space,
zero cochains, one-point spaces, and degenerate singular simplices.
