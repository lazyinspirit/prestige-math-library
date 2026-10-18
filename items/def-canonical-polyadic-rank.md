---
id: def-canonical-polyadic-rank
kind: definition
title: Canonical polyadic rank
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-finite-tensor-arrays-and-frobenius-inner-product]
aliases: []
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Tamara G. Kolda and Brett W. Bader, Tensor Decompositions and Applications, SIAM Review 51(3) (2009), §3"
      url: "https://www.kolda.net/publication/TensorReview.pdf"
    - title: "ACM 270-1, Complete Lecture Notes, Caltech, Spring 2019, Lecture 13, §4.2"
      url: "https://iqim.caltech.edu/wp-content/uploads/2019/08/ACM270_complete_lecture_notes.pdf"
dependency_level: 1
---

## Definition

For $A\in\mathbb F^{n_1\times\cdots\times n_d}$, its canonical polyadic rank (CP rank) is the least integer $R\ge0$ for which
$$ A=\sum_{q=1}^{R}a_q^{(1)}\otimes\cdots\otimes a_q^{(d)},\qquad a_q^{(k)}\in\mathbb F^{n_k}. $$
The empty sum is zero, so the zero tensor has CP rank $0$. The coordinate expansion
$$ A=\sum_{i_1=1}^{n_1}\cdots\sum_{i_d=1}^{n_d} A_{i_1,\ldots,i_d}\,e_{i_1}^{(1)}\otimes\cdots\otimes e_{i_d}^{(d)} $$
shows that the set of admissible finite integers $R$ is nonempty. The well-ordering of $\mathbb N_0$ therefore makes the least such $R$ well-defined.
