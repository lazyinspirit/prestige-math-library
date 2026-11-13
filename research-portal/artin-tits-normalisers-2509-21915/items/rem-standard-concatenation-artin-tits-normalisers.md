---
id: rem-standard-concatenation-artin-tits-normalisers
kind: remark
title: Concatenation of length-additive standard expressions
status: published
domain: mathematics
origin: pipeline
deps:
  - def-standard-expressions-artin-tits-normalisers
dependency_roles:
  def-standard-expressions-artin-tits-normalisers: mathematical-premise
proof_strategy: Verify
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Normalisers of parabolic subgroups of Artin–Tits groups and Tits cone
        intersections
      url: https://arxiv.org/abs/2509.21915v3
      locator: PDF p. 18, Remark 4.14
      statement: If $x=yz$ is a length-additive product of composable Brink–Howlett
        morphisms, the concatenation of chosen standard expressions for $y$ and
        $z$ is a standard expression for $x$.
      hypotheses: The Coxeter system and Brink–Howlett groupoid conventions of the
        article; $y$ and $z$ are composable and each has the chosen standard
        expression.
      reading_limits: The frozen article text at Remark 4.14 was read for attribution.
        This article citation is not used as a proof premise.
dependency_level: 12
---

## Statement

Let $y:I\to K$ and $z:K\to L$ be composable morphisms in the Brink–Howlett groupoid, and put $x=yz$. If $\ell(x)=\ell(y)+\ell(z)$, then concatenating any chosen standard expression $\mathbf y$ for $y$ with any chosen standard expression $\mathbf z$ for $z$ gives a standard expression $\mathbf y\mathbf z$ for $x$. This includes empty expressions for identity morphisms.

## Statement references

[[def-standard-expressions-artin-tits-normalisers]]

## Proof


**Given:** Composable morphisms $y:I\to K$ and $z:K\to L$, their product $x=yz$, the equality $\ell(x)=\ell(y)+\ell(z)$, and chosen standard expressions $\mathbf y$ and $\mathbf z$.

**Goal:** Show that their concatenation is a standard expression for $x$.

[F1] By [[def-standard-expressions-artin-tits-normalisers]], a standard expression is a finite composable sequence of the specified wall-crossing morphisms whose product is the morphism and whose factor lengths sum to its Coxeter length. The empty sequence represents an identity and has length sum zero; composable labels multiply in sequence order.



1.1 Write $\mathbf y=(u_1,\ldots,u_m)$ and $\mathbf z=(v_1,\ldots,v_n)$. By [F1], their sequences consist of the required wall-crossing morphisms, with products $y$ and $z$ and respective length sums $\ell(y)$ and $\ell(z)$. Their endpoint $K$ agrees, so their concatenation is composable from $I$ to $L$ and has product $yz=x$. This remains true when either sequence is empty. [F1, given]

2.1 The sum of the Coxeter lengths of the concatenated factors is $\ell(y)+\ell(z)=\ell(x)$, including when a sequence is empty. Hence [F1] identifies the concatenation $\mathbf y\mathbf z$ as a standard expression for $x$, as claimed. [F1, step 1.1, given] ∎
