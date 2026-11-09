---
id: lem-author-b02e51f9da03-whitney-vanishing
kind: lemma
title: Stable triviality forces vanishing of the actual Chern coefficients
status: published
domain: mathematics
deps:
  - lem-author-b02e51f9da03-trivial-chern
  - def-stably-free-bundles
  - prop-chern-whitney-identities
  - lem-author-4f94f7982b0d-actual-whitney
  - math:lem-operational-chern-classes-and-whitney-formula
  - math:def-chern-classes-of-a-vector-bundle
  - math:def-axiom-of-choice
dependency_roles:
  lem-author-b02e51f9da03-trivial-chern: mathematical-premise
  def-stably-free-bundles: mathematical-premise
  prop-chern-whitney-identities: mathematical-premise
  lem-author-4f94f7982b0d-actual-whitney: mathematical-premise
  math:lem-operational-chern-classes-and-whitney-formula: mathematical-premise
  math:def-chern-classes-of-a-vector-bundle: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 22
---

## Statement
Assume the Axiom of Choice and the fixed compatible site and universe bounds of the supplied motivic Chern constructions. If $E$ is stably trivial on a qcqs scheme over a field, all its positive motivic Chern classes vanish. If the scheme is smooth and equidimensional of finite type, all its positive ordinary integral Chow Chern classes vanish too. In either theory, this follows by applying the actual Whitney formula to a stable trivialization, without assuming that Chern classes of actual bundles depend only on an unspecified K-zero class.

## Facts & Assumptions
[A1] Assume [[math:def-axiom-of-choice]] and the stated compatible site and universe bounds. These are inherited from the actual motivic Chern and Whitney suppliers when they are applied below; their finite direct-sum and coefficient calculations add no further choice principle.


**Given:** The data and hypotheses in the statement, AC and the stated compatible site and universe bounds for the actual motivic constructions.

**Goal:** Establish the stated conclusion.

[F1] There is an actual stable isomorphism $E\oplus\mathcal O_X^N\cong\mathcal O_X^{r+N}$. [[def-stably-free-bundles]]

[F2] In each of the stated theories trivial bundles have the unit Chern series. [[lem-author-b02e51f9da03-trivial-chern]]

[F3] The actual motivic and Chow direct-sum Whitney formulas hold, and Chern classes are invariant under bundle isomorphism. [[prop-chern-whitney-identities]], [[lem-author-4f94f7982b0d-actual-whitney]], [[math:lem-operational-chern-classes-and-whitney-formula]], [[math:def-chern-classes-of-a-vector-bundle]]

## Proof

1.1 Apply the actual direct-sum formula to the isomorphism in [F1]. Isomorphism invariance and [F2] give $c_t(E)\cdot1=c_t(E)c_t(\mathcal O_X^N)=c_t(\mathcal O_X^{r+N})=1$. This argument applies independently to both the motivic and the ordinary Chow operations under their stated hypotheses. [A1, F1, F2, F3]

2.1 Equality of formal series is equality of coefficients. Hence $c_i(E)=0$ for every $i\geq1$ in each applicable coefficient group. No cancellation of bundles and no comparison inferred from equality of groups has entered this deduction. [A1, step 1.1, algebra] ∎
