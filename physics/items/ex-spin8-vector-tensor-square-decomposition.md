---
id: ex-spin8-vector-tensor-square-decomposition
kind: example
title: Matrix form of the vector-square decomposition
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
page: st-spin8-representation-mathematics-examples
dependency_level: 4
domain: mathematics
library: physics
deps:
  - def-spin8-vector-and-half-spin-modules
  - thm-spin8-tensor-product-decompositions
  - def-axiom-of-choice
dependency_roles:
  def-spin8-vector-and-half-spin-modules: mathematical-premise
  thm-spin8-tensor-product-decompositions: mathematical-premise
  def-axiom-of-choice: mathematical-premise
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
    - title: "Timo Weigand, Introduction to String Theory, Winter term 2011/12"
      url: "https://www.thphys.uni-heidelberg.de/courses/weigand/Strings11-12.pdf"
      locator: "Chapter 6.6, printed pp. 143–144, equations (6.120)–(6.121): the vector tensor-square decomposition and scalar, two-form, and trace-free symmetric pieces."
    - title: "Katrin Becker, Melanie Becker, and John H. Schwarz, String Theory and M-Theory: A Modern Introduction"
      url: "https://csp-global.org/download/M-theory-Cambridge-University.pdf"
      locator: "Chapter 5.3, printed p. 169, Exercise 5.8 solution: the real matrix split into trace, antisymmetric, and symmetric trace-free parts."
---

## Example

Represent $8_v\otimes8_v$ by real $8\times8$ matrices via $e_i\otimes e_j\mapsto E_{ij}$. The Spin(8) action is $A\mapsto gAg^T$, where $g$ is the orthogonal vector action. Every such matrix has the unique decomposition
$$A=\frac{\operatorname{tr}A}{8}I_8+\frac{A-A^T}{2}+\left(\frac{A+A^T}{2}-\frac{\operatorname{tr}A}{8}I_8\right).$$
The three terms are respectively the scalar line, the skew-symmetric two-form module $28$, and the symmetric trace-free module $35_v$ from the Spin(8) tensor-product theorem.

## Example references

[[def-spin8-vector-and-half-spin-modules]]

[[thm-spin8-tensor-product-decompositions]]

## Facts & Assumptions

**Given:** $8_v=\mathbb R^8$ with its standard Euclidean inner product and the Spin(8) vector action.

[F1] $8_v$ is the standard real vector representation of Spin(8) on oriented Euclidean $\mathbb R^8$ ([[def-spin8-vector-and-half-spin-modules]]).

[F2] $8_v\otimes8_v\cong1\oplus28\oplus35_v$, with $28=\Lambda^2(8_v)$ and $35_v$ the trace-free part of $\operatorname{Sym}^2(8_v)$ ([[thm-spin8-tensor-product-decompositions]]).

[A1] The Axiom of Choice is assumed because the Spin(8) tensor-product theorem used in [F2] depends on it ([[def-axiom-of-choice]]).

## Verification

1.1 The tensors $e_i\otimes e_j$ form a basis of $8_v\otimes8_v$, and the assignment $e_i\otimes e_j\mapsto E_{ij}$ sends it bijectively to the matrix-unit basis, so it is a linear isomorphism. Under the diagonal action, $(g e_i)\otimes(g e_j)$ maps to $gE_{ij}g^T$; by linearity the induced tensor action is $A\mapsto gAg^T$. [given, F1, construct]

2.1 The first matrix term is a scalar multiple of $I_8$; the second is skew-symmetric; the third is symmetric and has trace $\operatorname{tr}A-\operatorname{tr}A=0$. Their sum is $A$ by expanding the symmetric and skew parts. A matrix that is both symmetric and skew-symmetric is zero, and a scalar matrix with zero trace is zero, so this decomposition is direct and unique over $\mathbb R$. [step 1.1, algebra]

3.1 Orthogonal conjugation fixes $I_8$ and the trace, preserves transpose, and therefore preserves each of the three summands. Their dimensions are $1$, $8\cdot7/2=28$, and $8\cdot9/2-1=35$ respectively. By [F2] these are exactly the scalar, antisymmetric, and symmetric trace-free modules in the theorem. [F1, F2, step 2.1, algebra] ∎
