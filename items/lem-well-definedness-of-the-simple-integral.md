---
id: lem-well-definedness-of-the-simple-integral
kind: lemma
title: "The simple integral is independent of the chosen representation"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-integral-of-a-nonnegative-simple-function, def-measure]
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John K. Hunter, Measure Theory Notes, Definition 4.1"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes_ch4.pdf"
    - title: "Gerald B. Folland, Real Analysis, 2nd ed., §2.2"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
---

## Statement

If a nonnegative simple measurable function $s$ admits two representations
$$s=\sum_{i=1}^m c_i\chi_{E_i}=\sum_{j=1}^n d_j\chi_{F_j},$$
then the two coefficient sums defining $\int s\,d\mu$ are equal. So
[[def-integral-of-a-nonnegative-simple-function]] is well defined.

## Facts & Assumptions

**Given:** Two simple representations of the same nonnegative simple measurable function $s$.

[L1] The simple integral is defined by $\int s\,d\mu=\sum c_j\mu(E_j)$ with the convention $0\cdot(+\infty)=0$ ([[def-integral-of-a-nonnegative-simple-function]]).

[L2] A measure is countably additive on pairwise disjoint measurable families, hence finitely additive on finite measurable partitions ([[def-measure]]).

## Proof

**Proof technique:** direct.

1.1 Complete both representations to partitions of $X$. [given, L1] Put $E_0=X\setminus\bigcup_{i=1}^mE_i$ and $F_0=X\setminus\bigcup_{j=1}^nF_j$, with coefficients $c_0=d_0=0$. Both are measurable. Adding these zero terms leaves the represented function and each coefficient sum unchanged, including when a complement has infinite measure, by the convention in [L1]. The augmented families $(E_i)_{i=0}^m$ and $(F_j)_{j=0}^n$ are finite measurable partitions of $X$. [given, L1]

2.1 Refine the two partitions by their intersections. [step 1.1] For $0\le i\le m$ and $0\le j\le n$ set $G_{ij}=E_i\cap F_j$. These sets are measurable and pairwise disjoint, and $$E_i=\bigsqcup_{j=0}^nG_{ij},\qquad F_j=\bigsqcup_{i=0}^mG_{ij}.$$ On every nonempty $G_{ij}$ the two formulas give the same value of $s$, so $c_i=d_j$. [step 1.1]

3.1 Apply finite additivity and the nonnegative extended-real finite-sum rules. [L1, L2, step 2.1] They give $$\sum_{i=0}^m c_i\mu(E_i)=\sum_{i=0}^m\sum_{j=0}^n c_i\mu(G_{ij})=\sum_{i=0}^m\sum_{j=0}^n d_j\mu(G_{ij})=\sum_{j=0}^n d_j\mu(F_j).$$ For a zero coefficient, every product with an infinite measure is $0$ by [L1]; for a positive coefficient the usual extended-real distributivity applies. Thus no subtraction of infinities occurs. [L1, L2, step 2.1]

4.1 Removing the added zero terms from step 3.1 proves equality of the original coefficient sums. [step 1.1, step 3.1] ∎

