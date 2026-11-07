---
id: lem-trace-discriminant-exponent-independent-of-integral-basis
kind: lemma
title: "Trace-discriminant exponent is independent of the integral basis"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 4
deps:
  - def-field-of-p-adic-numbers
  - def-local-field-valuation-ring-uniformizer-and-residue-field
  - def-extension-degree-and-finite-extension
  - def-field-norm-and-trace
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Faltings–Wüstholz, *Rational Points*, Chapter V, §2"
      url: "https://yhzhumath.github.io/Mordell2024/RP.pdf"
      locator: "Printed pp. 160–161; local trace-discriminant exponents in the bounded-degree extension argument."
verification:
  precheck: pending
---

## Statement

Let $F$ be a finite extension of $\mathbb Q_p$, let $E/F$ be a finite separable extension of degree $n$, and suppose $\mathcal O_E$ has two $\mathcal O_F$-bases $b_1,\ldots,b_n$ and $c_1,\ldots,c_n$. Define $D(b)=\det(\operatorname{Tr}_{E/F}(b_i b_j))$ and $D(c)=\det(\operatorname{Tr}_{E/F}(c_i c_j))$. Then $v_F(D(b))=v_F(D(c))$.

## Statement references

[[def-field-of-p-adic-numbers]]

[[def-local-field-valuation-ring-uniformizer-and-residue-field]]

[[def-extension-degree-and-finite-extension]]

[[def-field-norm-and-trace]]

[Faltings–Wüstholz, *Rational Points*, Chapter V, §2, printed pp. 160–161](https://yhzhumath.github.io/Mordell2024/RP.pdf)

## Facts & Assumptions

**Given:** A finite local field extension $E/F$ of degree $n$, the valuation ring $\mathcal O_F$, its normalized valuation $v_F$, and two stated integral bases of $\mathcal O_E$.

[F1] [[def-local-field-valuation-ring-uniformizer-and-residue-field]]: $\mathcal O_F$ is a discrete valuation ring, and $v_F$ is its normalized valuation.

[F2] [[def-field-norm-and-trace]]: $\operatorname{Tr}_{E/F}(xy)$ is bilinear in $x,y$ over $F$.

## Proof

**Proof technique:** transform the Gram matrix under the integral change of basis.

**Given:** [F1]–[F2] and the two $\mathcal O_F$-bases.

1.1 There is a change-of-basis matrix $U\in\operatorname{GL}_n(\mathcal O_F)$ with $c_j=\sum_i b_iU_{ij}$. If $G_b=(\operatorname{Tr}_{E/F}(b_i b_j))$ and $G_c=(\operatorname{Tr}_{E/F}(c_i c_j))$, bilinearity in [F2] gives $G_c=U^{\mathsf T}G_bU$. [F2, given, algebra]

1.2 Taking determinants gives $D(c)=(\det U)^2D(b)$. Since $U$ is invertible over $\mathcal O_F$, $\det U$ is a unit, so [F1] gives $v_F(D(c))=v_F(D(b))$. [F1, step 1.1, algebra] ∎
