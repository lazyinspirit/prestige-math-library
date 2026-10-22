---
id: lem-qftx-laurent-negative-projection-rota-baxter
kind: lemma
title: Laurent pole projection satisfies the weight-minus-one identity
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 1
deps:
  - def-qftx-laurent-subtraction-target
justified_by: []
dependency_roles:
  def-qftx-laurent-subtraction-target: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Dominique Manchon, Hopf algebras, from basics to applications to renormalization, full lecture notes, arXiv:math/0408405v2
      url: https://arxiv.org/pdf/math/0408405
      locator: "Section II.5, Theorem II.5.1 proof, printed pp. 36–37: projection identity for a Laurent splitting, proved by decomposing each input into negative and nonnegative parts."
verification:
  precheck: pass
---

## Statement

Let $K$ be a commutative unital $\mathbb Q$-algebra, let $\epsilon$ be formal, and put $A=K((\epsilon))$ with projection $R$ onto strictly negative powers. For all $x,y\in A$, $R$ satisfies
$$R(x)R(y)=R\bigl(R(x)y+xR(y)-xy\bigr).$$

## Statement references

[[def-qftx-laurent-subtraction-target]]

## Facts & Assumptions

**Given:** The Laurent-series algebra and projection of the Definition.

[F1] [[def-qftx-laurent-subtraction-target]]: $A=A_-\oplus A_+$, $R$ projects onto $A_-$, $A_-$ is closed under multiplication, and $A_+$ is closed under multiplication.

## Proof

**Given:** $x,y\in A$ and [F1].

1.1 Write $x=x_-+x_+$ and $y=y_-+y_+$ using the direct sum in [F1], so $R(x)=x_-$ and $R(y)=y_-$. Then
$$R(x)y+xR(y)-xy=x_-(y_-+y_+)+(x_-+x_+)y_--(x_-+x_+)(y_-+y_+)=x_-y_- -x_+y_+.$$ [given, F1, algebra]

2.1 Since $x_-y_-\in A_-$ and $x_+y_+\in A_+$, applying $R$ to the identity in step 1.1 gives $R(R(x)y+xR(y)-xy)=x_-y_-=R(x)R(y)$. [F1, step 1.1, algebra] ∎
