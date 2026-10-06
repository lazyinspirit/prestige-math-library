---
page: weyl-character-and-multiplicity-formulas-examples
title: "Weyl Character and Multiplicity Formulas — Examples"
status: draft
requires: [weyl-character-and-multiplicity-formulas]
items: []
examples: [
  ex-a2-weyl-denominator-expansion,
  cex-omitting-the-rho-shift-breaks-kostants-formula,
  ex-kostant-multiplicity-in-the-sl3-adjoint-module,
  ex-freudenthal-recursion-for-the-sl3-adjoint-zero-weight,
  ex-weyl-character-and-dimension-formulas-for-sl2,
  ex-weyl-dimension-formula-for-a-fundamental-sl3-module
]
---

These leaves check the formulas on the smallest systems. The $A_2$ example
expands both sides of the denominator identity over the eight subsets of the
positive roots and matches the six Weyl translates term by term. The
$\mathfrak{sl}_2$ example runs the telescoping quotient
$(e^{(m+1)\omega}-e^{-(m+1)\omega})/(e^{\omega}-e^{-\omega})$ and the
dimension specialization, including the boundary case $m=0$.

The $\mathfrak{sl}_3$ adjoint module is used twice: Kostant's formula computes
the zero weight with $P(\theta)=2$, and Freudenthal's recursion recovers the
same multiplicity from the six extremal weights, with the indeterminate case
$0=0$ occurring only at the top weight. The dimension formula for a
fundamental $\mathfrak{sl}_3$ module checks the normalisation against the
three-dimensional defining representation, and the counterexample shows that
dropping the $\mu\mapsto\mu+\rho$ shift in Kostant's formula returns the wrong
multiplicity already for $L(2\omega)$ in $\mathfrak{sl}_2$.
