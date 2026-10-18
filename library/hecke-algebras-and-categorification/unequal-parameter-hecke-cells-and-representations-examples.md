---
page: unequal-parameter-hecke-cells-and-representations-examples
title: 'Unequal-Parameter Hecke Cells and Representations: Examples and Counterexamples'
status: draft
items: []
examples:
- ex-b2-unequal-parameter-kl-basis-and-cell-edges
- cex-modular-specialization-collapses-unequal-parameter-cell-labels
- ex-a1-nonsemisimple-good-specialization-has-a-basic-set
---

These examples test the A-page conventions in two small finite Coxeter groups. The B2 computation records four explicit KL transitions without classifying all cells. The characteristic-two example shows that distinct generic cell labels can specialize to one simple module; it draws no conclusion about canonical-basic-set existence.

Companion: [[unequal-parameter-hecke-cells-and-representations]].

## B2: unequal rank-two parameters

[[ex-b2-unequal-parameter-kl-basis-and-cell-edges]] uses $I_2(4)$, $L(s)=1$, and $L(t)=2$. It computes $C_s,C_t,C_{st},C_{ts}$, the two quadratic KL products, and four left-preorder edges. Its TikZ diagrams specify both the Coxeter edge label and the direction and coefficient convention for the cell transitions.

## A1×A1: a modular label collapse

[[cex-modular-specialization-collapses-unequal-parameter-cell-labels]] uses $L(s)=1,L(t)=2$ and $v\mapsto3$ over $\mathbb Z_2$. The four generic cell characters are distinct over $\mathbb Q_2$, while the special algebra is $\mathbb F_2[x,y]/(x^2,y^2)$ with one simple module. All four stable rank-one lattices reduce to that module.

The example refutes universal preservation of cell labels under modular reduction. It does not assert whether a canonical basic set exists in this specialization.

## Source boundary

Geck's §4.1 gives both the exact nonzero-Schur-element condition under which his finite-Weyl identity-decomposition theorem applies and a separate type-G2 example where a canonical basic set fails to exist. The A-page verifies the theorem's hypothesis for its odd-characteristic A1×A1 case; the characteristic-two A1×A1 example here is computed directly and is not identified with Geck's type-G2 counterexample.

The rank-one example [[ex-a1-nonsemisimple-good-specialization-has-a-basic-set]] verifies every required Lusztig property and specializes at $v=i$. Both full Schur elements vanish, while both leading Schur integers remain one. Its dual-number algebra has a singleton canonical basic set, illustrating the general theorem's nonsemisimple scope.
