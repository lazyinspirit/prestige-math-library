---
id: thm-cft-zhu-rationality-criterion
kind: theorem
title: Zhu-algebra criterion for rationality
status: draft
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 3
deps:
  - def-cft-zhu-algebra
  - thm-cft-zhu-algebra-structure-and-top-action
  - def-cft-higher-zhu-algebra
  - thm-cft-higher-zhu-algebra-structure
  - def-admissible-vertex-algebra-module
  - def-ordinary-vertex-module
  - def-rational-vertex-algebra
  - def-conformal-vertex-algebra
dependency_roles:
  def-cft-zhu-algebra: mathematical-premise
  thm-cft-zhu-algebra-structure-and-top-action: mathematical-premise
  def-cft-higher-zhu-algebra: mathematical-premise
  thm-cft-higher-zhu-algebra-structure: mathematical-premise
  def-admissible-vertex-algebra-module: mathematical-premise
  def-ordinary-vertex-module: mathematical-premise
  def-rational-vertex-algebra: mathematical-premise
  def-conformal-vertex-algebra: mathematical-premise
domain: mathematics
library: mathematics
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Chongying Dong and Cuipo Jiang, Rationality of Vertex Operator Algebras"
      url: "https://arxiv.org/pdf/math/0607679v1"
      locator: "Theorem 5.3 and its proof; Lemmas 3.1, 3.4, 5.1, 5.2 and the higher-Zhu construction."
    - title: "Chongying Dong, Haisheng Li, and Geoffrey Mason, Vertex operator algebras and associative algebras"
      url: "https://arxiv.org/pdf/q-alg/9612010"
      locator: "§§2–4; higher Zhu algebras, admissible-module layers, and the semisimplicity argument."
verification:
  precheck: pending
---

## Statement

Let $V$ be a simple conformal vertex algebra of CFT type over $\mathbb C$. Then $V$ is rational in the admissible-module convention if and only if its Zhu algebra $A(V)$ is semisimple and every irreducible admissible $V$-module is ordinary. Here semisimple for $A(V)$ means that its regular left module is a direct sum of simple left modules. No finite-dimensionality of $A(V)$ is asserted.

## Statement references

[[def-cft-zhu-algebra]]

[[def-rational-vertex-algebra]]

## Facts & Assumptions

**Given:** $V$ is simple and of CFT type; modules use the linked admissible and ordinary conventions.

[F1] [[def-cft-zhu-algebra]]: $A(V)=V/O(V)$ with the star product specified there; [[thm-cft-zhu-algebra-structure-and-top-action]] is the quotient-algebra and admissible-top-action interface.

[F2] [[def-cft-higher-zhu-algebra]]: $A_n(V)=V/O_n(V)$ with the higher candidate product and its $D(V)$ relation.

[F3] [[thm-cft-higher-zhu-algebra-structure]] proves that for every integer $n\ge0$, the full higher Zhu subspace $O_n(V)$, including $D(V)$, is a two-sided ideal and the quotient product on $A_n(V)$ is associative and unital. It makes no finite-dimensionality or admissible-module induction assertion.

[F4] [[def-admissible-vertex-algebra-module]]: an admissible module is nonnegatively graded and its homogeneous modes shift degree by $\mathrm{wt}(a)-m-1$.

[F5] [[def-ordinary-vertex-module]]: ordinary modules have semisimple $L(0)$, finite-dimensional eigenspaces and weights bounded below in real part.

[F6] [[def-rational-vertex-algebra]]: rationality means every admissible module is a direct sum of irreducible admissible submodules.

[A1] The Zhu top-level correspondence and the forward semisimplicity argument have not been proved locally. The required input is that irreducible admissible modules have simple $A(V)$-tops, every simple $A(V)$-module is realized as such a top, and rationality forces both semisimplicity of the regular $A(V)$-module and ordinarity of every irreducible admissible module. The missing argument constructs and verifies this correspondence using the quotient identities and module Jacobi identity.

[A2] The reverse implication needs the full higher-Zhu induction: from semisimplicity of $A(V)$ and ordinarity of irreducible admissible modules, the higher $A_n(V)$-modules and induced modules must split every admissible module. Dong–Jiang’s proof uses higher-level induced modules and degree-by-degree splitting; that construction and its cited technical lemmas have not been reconstructed here.

## Proof

1.1 Suppose first that $V$ is rational. Conditional on [A1], the top-level correspondence makes the regular $A(V)$-module a direct sum of simple modules and makes each irreducible admissible $V$-module ordinary. These are the two required conclusions. [given, F1, F4, F6, A1, algebra]

2.1 Conversely, suppose the regular $A(V)$-module is semisimple and every irreducible admissible $V$-module is ordinary. Conditional on [A2], the higher-Zhu induction decomposes every admissible $V$-module into irreducible admissible submodules. By [F6], this is rationality. [given, F2, F3, F4, F5, F6, A2, step 1.1, algebra] ∎

## Proof status

This is the simple-VOA criterion of Dong–Jiang Theorem 5.3 with its CFT-type convention explicit. The conditional deductions are complete, but [A1] and [A2] are substantial missing arguments; the item is escalated.
