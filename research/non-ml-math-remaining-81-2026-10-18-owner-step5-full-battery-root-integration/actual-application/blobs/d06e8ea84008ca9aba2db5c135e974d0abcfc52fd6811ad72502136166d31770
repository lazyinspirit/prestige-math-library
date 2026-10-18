---
id: thm-unequal-parameter-cell-quotients-are-modules
kind: theorem
title: Weighted cell quotients are well-defined modules and bimodules
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 6
deps: [def-unequal-parameter-coxeter-hecke-algebra, thm-unequal-parameter-kazhdan-lusztig-basis, def-unequal-parameter-cells-and-cell-quotients]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
axiom_use: "None; products, chains, and coefficient expansions are finite."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "George Lusztig, Hecke Algebras with Unequal Parameters, revised arXiv text (2014)"
      url: "https://arxiv.org/pdf/math/0208154"
      locator: "§8.1–8.3, PDF pp. 36–37: weighted cells, ideal closure, and the left/right cell-module quotients."
---

## Statement

For every Coxeter system and weight function of [[def-unequal-parameter-coxeter-hecke-algebra]], the spans $I^L_{\le\mathcal C}$ and $I^L_{<\mathcal C}$ attached to a left cell are left ideals; the right-cell spans are right ideals; and the two-sided-cell spans are two-sided ideals. Therefore the quotients defined in [[def-unequal-parameter-cells-and-cell-quotients]] are left modules, right modules, or bimodules, respectively. Each quotient has an $A$-basis consisting exactly of the images of the KL basis elements indexed by its cell. No further cell property, semisimplicity, or irreducible-module classification is asserted.

## Facts & Assumptions

**Given:** The weighted Hecke algebra $H_A(W,L)$, its KL basis, the coefficient preorders, and a cell $\mathcal C$.

[F1] [[def-unequal-parameter-cells-and-cell-quotients]]: $x\leftarrow_L y$ means $C_x$ occurs with nonzero coefficient in $C_sC_y$ for some $s\in S$; $\le_L$ is its finite-chain closure; the left cell quotient is the span of all $C_x$ with $x\le_L\mathcal C$, modulo the span with $x\notin\mathcal C$. The right and two-sided definitions use right or either kind of step.

[F2] [[thm-unequal-parameter-kazhdan-lusztig-basis]]: $\{C_w:w\in W\}$ is an $A$-basis; each product $C_sC_y$ and $C_yC_s$ has a finite basis expansion; and $T_s=C_s-\eta_s$ for a scalar $\eta_s\in A$.

## Proof

**Given:** The data in the Statement.

1.1 **The left spans are left ideals.** If $C_x$ occurs in $C_sC_y$, then $x\leftarrow_L y$, hence $x\le_L y$. Therefore, if $y\le_L\mathcal C$, every basis term in $C_sC_y$ also has index $\le_L\mathcal C$, proving closure of $I^L_{\le\mathcal C}$ under left multiplication by each $C_s$. If $y<_{L}\mathcal C$, each such $x$ is also outside $\mathcal C$: otherwise some $g\in\mathcal C$ satisfies $g\le_L x\le_L y\le_L g$, forcing $y\in\mathcal C$, a contradiction. Thus $I^L_{<\mathcal C}$ is also closed under left multiplication by each $C_s$. Since $T_s=C_s-\eta_s$, the $C_s$ and scalars generate $H_A(W,L)$, so both spans are left ideals. [F1, F2, algebra]

1.2 **The right spans are right ideals.** If $C_x$ occurs in $C_yC_s$, then $x\leftarrow_R y$, hence $x\le_R y$. Thus right multiplication by each $C_s$ preserves the right numerator. If $y$ is in the right denominator and $x\in\mathcal C$, choose $g\in\mathcal C$ with $y\le_R g$; since $g$ and $x$ lie in the same cell, $g\le_R x$, while $x\le_R y$. Transitivity would make $g$ equivalent to $y$, contradicting $y\notin\mathcal C$. So right multiplication also preserves the right denominator. The generators $T_s=C_s-\eta_s$ then show that these spans are right ideals of $H_A(W,L)$. [F1, F2, algebra]

2.1 **The two-sided spans are two-sided ideals.** A two-sided preorder step is a left step or a right step. Applying the closure arguments of steps 1.1 and 1.2 to each type of step shows that left and right multiplication by every $C_s$, and hence by every $T_s$, preserves both $I^{LR}_{\le\mathcal C}$ and $I^{LR}_{<\mathcal C}$. They are therefore two-sided ideals. [F1, F2, step 1.1, step 1.2, algebra]

3.1 **Quotient bases and actions.** The KL basis is an $A$-basis by [F2]. For the corresponding preorder, every $x\in\mathcal C$ belongs to the numerator because $x\le x$; every numerator index outside $\mathcal C$ belongs to the denominator by its definition. Thus the numerator basis indices are the disjoint union of the cell $\mathcal C$ and the denominator indices, so their quotient has basis exactly the images of $C_w$ with $w\in\mathcal C$. The induced left, right, or bimodule action is well defined because the numerator and denominator are ideals of the required sidedness, as proved in steps 1.1, 1.2, and 2.1. [F1, F2, step 1.1, step 1.2, step 2.1] ∎
