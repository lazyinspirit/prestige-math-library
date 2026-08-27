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

1.1 For each pair $(i,j)$ put $G_{ij}:=E_i\cap F_j$. The family $(G_{ij})$ is [given, L2]
measurable and pairwise disjoint, and
$$E_i=\bigsqcup_j G_{ij},\qquad F_j=\bigsqcup_i G_{ij}.$$
Whenever $G_{ij}\ne\varnothing$, the two simple formulas for $s$ agree on
$G_{ij}$, so $c_i=d_j$.

2.1 Finite additivity over the partitions in step 1.1 gives[step 1.1, L1, L2, algebra]
$$\sum_i c_i\mu(E_i)=\sum_{i,j}c_i\mu(G_{ij})=\sum_{i,j}d_j\mu(G_{ij})=\sum_j d_j\mu(F_j).$$
If some coefficient is $0$ on a cell of infinite measure, the convention in [L1]
forces both corresponding terms to be $0$, so no ambiguity occurs there either.


3.1 Therefore the simple integral does not depend on the chosen representation, [step 2.1, L1] ∎
and the definition in [L1] is well defined.
