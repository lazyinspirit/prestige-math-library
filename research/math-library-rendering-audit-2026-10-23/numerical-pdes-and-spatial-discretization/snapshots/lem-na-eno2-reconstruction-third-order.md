---
id: lem-na-eno2-reconstruction-third-order
kind: lemma
title: The selected nodal ENO2 quadratic reconstructs the face to third order
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
aliases: []
deps:
  - def-na-high-resolution-reconstruction
  - thm-cardinal-polynomial-interpolant-exists-uniquely
  - thm-lagrange-interpolation-remainder
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Chi-Wang Shu, Essentially Non-Oscillatory and Weighted Essentially Non-Oscillatory Schemes for Hyperbolic Conservation Laws, complete lecture notes"
      url: "https://www3.nd.edu/~zxu2/acms60790S13/Shu-WENO-notes.pdf"
      locator: "§§2.1.1 and 2.2.1, PDF pp. 3–17: polynomial interpolation and ENO divided-difference stencil selection."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Let $h>0$, let $y_j=jh$, and let $u\in C^3([y_{i-1},y_{i+2}])$ with $M:=\sup|u'''|<\infty$. Form the nodal ENO2 value at $y_{i+1/2}$ by the rule in [[def-na-high-resolution-reconstruction]]. Then
$$|U^{ENO2}_{i+1/2}-u(y_{i+1/2})|\le Mh^3/16.$$
The conclusion holds for either selected triple, so it includes the left-tie case.

## Facts & Assumptions

**Given:** Uniform distinct nodes $y_j=jh$, nodal values $U_j=u(y_j)$ from a C3 function, and the ENO2 selector and Newton quadratic.

[F1] [[def-na-high-resolution-reconstruction]]: ENO2 compares the absolute divided differences on $(y_{i-1},y_i,y_{i+1})$ and $(y_i,y_{i+1},y_{i+2})$, chooses the smaller (ties left), and evaluates the corresponding Newton quadratic at $y_{i+1/2}$.

[F2] [[thm-cardinal-polynomial-interpolant-exists-uniquely]]: for distinct real nodes, the data have a unique interpolating polynomial of degree at most the number of nodes minus one.

[F3] [[thm-lagrange-interpolation-remainder]]: for three distinct nodes and $u\in C^3$, the quadratic interpolant error at a non-node $x$ is $u'''(\xi)(x-y_a)(x-y_b)(x-y_c)/3!$ for some $\xi$ between the nodes and $x$.

## Proof

1.1 For either candidate triple $y_a<y_b<y_c$, let $D_{ab}=(U_b-U_a)/(y_b-y_a)$ and $D_{bc}=(U_c-U_b)/(y_c-y_b)$. The Newton polynomial in [F1] takes values $U_a$ and $U_b$ at the first two nodes. At $y_c$, its value is $U_a+D_{ab}(y_c-y_a)+(D_{bc}-D_{ab})(y_c-y_b)=U_b+D_{bc}(y_c-y_b)=U_c$, using the divided-difference definition. By [F2] it is the unique quadratic interpolant to that triple. [given, F1, F2, algebra]

1.2 Apply [F3] to the left triple. The offsets from $y_{i+1/2}$ are $-3h/2,-h/2,h/2$, whose product has magnitude $3h^3/8$; hence the error is at most $M(3h^3/8)/6=Mh^3/16$. For the right triple the offsets are $-h/2,h/2,3h/2$, with the same product magnitude, so it has the same bound. [given, F3, algebra]

2.1 The selector in [F1] returns one of those two quadratics, including the left one at a tie. Since both candidates satisfy the bound from step 1.2, whichever is selected satisfies it. [F1, step 1.2] ∎
