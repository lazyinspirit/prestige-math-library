---
title: Actual cofiber triangles and source grading of the motivic tower
status: published
research_item: lem-author-74a9c17e63f1-graded-comparison
dependency_level: 13
---

PDF p. 4: Motivic graded spectral sequence; PDF p. 9: Eventual filtration vanishing

## Prerequisites

- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [def-motivic-filtration](item-def-motivic-filtration)
- [def-motivic-cohomology](item-def-motivic-cohomology)
- [thm-author-74a9c17e63f1-source-multiplicative-input](item-thm-author-74a9c17e63f1-source-multiplicative-input)


## Statement
Assume the Axiom of Choice. For each qcqs scheme $X$ over the standing field and $r\geq0$, the actual natural maps of the supplied tower give a cofiber triangle
$$F^{r+1}_{\mathrm{mot}}K(X)\longrightarrow F^r_{\mathrm{mot}}K(X)\longrightarrow\mathbb Z(r)_{\mathrm{mot}}(X)[2r].$$
The last arrow is the actual quotient map followed by the source equivalence $\gamma_r$. Thus it is a map of functor diagrams, not an identification from equality of homotopy groups. Extending motivic complexes to negative weights by zero identifies the negative graded terms too.

## Facts & Assumptions
[A1] The Axiom of Choice and the fixed size conventions of the cited constructions are inherited through [thm-author-74a9c17e63f1-source-multiplicative-input](item-thm-author-74a9c17e63f1-source-multiplicative-input). They discharge that supplier’s local-realization premise at its first application below. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

**Given:** The Axiom of Choice and the fixed size conventions of the cited constructions, together with the completed tower, its constant nonpositive extension and the completed motivic complex functor.

**Goal:** Specify the actual quotient maps and comparison used by every subsequent calculation.

[F1] [def-motivic-filtration](item-def-motivic-filtration) specifies the source tower by prime-field restriction and its constant nonpositive stages. [def-motivic-cohomology](item-def-motivic-cohomology) likewise uses the prime-field EM complexes.

[F2] [thm-author-74a9c17e63f1-source-multiplicative-input](item-thm-author-74a9c17e63f1-source-multiplicative-input) supplies $\gamma_r$ for those very objects and the zero convention for negative weights.

## Proof
1.1 Use the supplied realization under [A1]. Form $Q_r=\operatorname{cofib}(F^{r+1}\to F^r)$ in the stable category and compose its canonical quotient map with $\gamma_r$ from [F2]. By [F1], both the stage diagram and complex diagram are the actual restrictions of the source diagrams. Their natural equivalence therefore gives precisely the displayed cofiber triangle and its naturality in $X$. [A1, F1, F2, construct]

2.1 For $r<0$, the constant extension makes $F^{r+1}\to F^r$ an equivalence, including $r=-1$. Hence $Q_r=0$. This agrees with the explicit source zero complex in [F2]. No negative-weight cohomology is assumed to have been previously defined: in subsequent full-plane formulas its symbol means this zero extension. [F1, F2, step 1.1] ∎
