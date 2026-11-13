---
title: The atomic-quadratic path quotient is faithful
status: draft
research_item: lem-author-7bd202611130-presentation-faithfulness
dependency_level: 23
sources:
  references: []
---

## Prerequisites

- [def-coxeter-data-artin-tits-normalisers](item-def-coxeter-data-artin-tits-normalisers)
- [def-standard-expressions-artin-tits-normalisers](item-def-standard-expressions-artin-tits-normalisers)
- [def-path-localisation-interface-artin-tits-prerequisites](item-def-path-localisation-interface-artin-tits-prerequisites)
- [def-atomic-braid-artin-tits-normalisers](item-def-atomic-braid-artin-tits-normalisers)
- [math:thm-arbitrary-rank-finite-parabolics-and-bruhat-subword](https://alphabetamath.cc/item/thm-arbitrary-rank-finite-parabolics-and-bruhat-subword)
- [lem-author-4ac39e6f1702-inverse-crossing](item-lem-author-4ac39e6f1702-inverse-crossing)
- [lem-author-7bd202611130-standard-braid-connectivity](item-lem-author-7bd202611130-standard-braid-connectivity)
- [lem-author-7bd202611130-word-normalisation](item-lem-author-7bd202611130-word-normalisation)


## Statement

Let $(W,S)$ be an arbitrary-rank Coxeter system with diagram vertex set $\Gamma_0$, and fix $J\subseteq\Gamma_0$. Let $Q$ have the associates of $J$ as vertices and one elementary edge $t_{a,I}:I\to K$ labelled by $v_{a,I}=w_{D\setminus\{a\}}w_D$ for each $a\in\Gamma_0\setminus I$ with $D=[I,a]$ and $W_D$ finite, where $b=\iota_D(a)$ and $K=(I\cup\{a\})\setminus\{b\}$. Impose all atomic braid relations on these edges and, for every such edge, both ordered quadratic relations $t_{a,I}t_{b,K}=1_I$ and $t_{b,K}t_{a,I}=1_K$, where $1_I$ and $1_K$ denote the empty paths. The reverse edge $t_{b,K}:K\to I$ exists under the same elementary-edge rule. Evaluation of labels induces a faithful functor from this path-category quotient to $\mathcal{BH}(J)$, and the quotient is a groupoid.

## Facts & Assumptions

[F1] Use the arbitrary-rank Coxeter system, canonical reflection formulas and simple-root basis of [def-coxeter-data-artin-tits-normalisers](item-def-coxeter-data-artin-tits-normalisers), and the associates, elementary morphisms, standard expressions and left-to-right groupoid conventions of [def-standard-expressions-artin-tits-normalisers](item-def-standard-expressions-artin-tits-normalisers). All paths are finite.

[F2] The path category, endpoint-preserving congruence and quotient are defined in [def-path-localisation-interface-artin-tits-prerequisites](item-def-path-localisation-interface-artin-tits-prerequisites). Atomic braid relations equate composable standard expressions of the same morphism by [def-atomic-braid-artin-tits-normalisers](item-def-atomic-braid-artin-tits-normalisers); on paths each elementary label is read as its corresponding edge.

[F3] For a finite set of simple generators in an arbitrary-rank Coxeter system, the group with the restricted Coxeter presentation embeds as the corresponding standard parabolic and its intrinsic length equals ambient length, by [math:thm-arbitrary-rank-finite-parabolics-and-bruhat-subword](https://alphabetamath.cc/item/thm-arbitrary-rank-finite-parabolics-and-bruhat-subword), part (1).

[F4] In a finite-rank Coxeter system, [lem-author-4ac39e6f1702-inverse-crossing](item-lem-author-4ac39e6f1702-inverse-crossing) applies whenever the crossing component $D$ is finite type: with $A=D\setminus\{a\}$, $b=\iota_D(a)$ and $v=w_Aw_D$, it gives $\iota_D(b)=a$ and $w_{D\setminus\{b\}}w_D=v^{-1}$. We apply this result inside the finite system on $D$.

[F5] Every finite elementary-generator path is congruent to a standard expression of its product modulo atomic braids and both ordered elementary inverse-pair quadratics, by [lem-author-7bd202611130-word-normalisation](item-lem-author-7bd202611130-word-normalisation). Any two standard expressions of the same morphism are connected by atomic braid moves preserving endpoints, by [lem-author-7bd202611130-standard-braid-connectivity](item-lem-author-7bd202611130-standard-braid-connectivity).

## Proof

**Given:** The arbitrary-rank Coxeter and groupoid data of [F1], with the path relations specified in the Statement and the inputs [F2], [F3], [F4] and [F5].

**Goal:** Establish the reverse-edge, groupoid and faithfulness assertions in the Statement.

**Proof technique:** direct.

1.1 Fix an elementary edge $t_{a,I}$ and put $D=[I,a]$, $A=D\setminus\{a\}$, $b=\iota_D(a)$ and $K=(I\cup\{a\})\setminus\{b\}$. The distinct simple generators indexed by $D$ belong to the finite group $W_D$, so $D$ is finite. By [F3], the Coxeter system with restricted matrix on $D$ identifies with $W_D$ and has the ambient length on that subgroup. Its longest elements therefore agree with the ambiently defined $w_D$ and $w_A$. By the reflection formulas of [F1], its canonical representation identifies with the restriction to the span of the roots indexed by $D$; hence its opposition permutation is the same $\iota_D$. Thus the finite-rank hypothesis in [F4] is satisfied inside this subsystem, without a rank restriction on $W$ or a finiteness assumption on $W_I$. [F1, F3]

2.1 Apply [F4] in this subsystem, with retained subset $A$ and added vertex $a$. Its crossing component is $D$, since $D$ is connected and $A\cup\{a\}=D$. It gives $\iota_D(b)=a$ and $w_{D\setminus\{b\}}w_D=(w_Aw_D)^{-1}$. In the full diagram, $b\notin K$ and $K\cup\{b\}=I\cup\{a\}$; the component containing $b\in D$ is still $D$. Thus $[K,b]=D$ is finite type, and [F1] supplies the elementary edge $t_{b,K}$ with label $v_{b,K}=w_{D\setminus\{b\}}w_D=v_{a,I}^{-1}$ and target $(K\cup\{b\})\setminus\{\iota_D(b)\}=I$. Consequently both ordered quadratic relations in the Statement evaluate to identities. [F1, F4, step 1.1]

3.1 Form the endpoint-preserving path congruence and quotient of [F2] using exactly the relations in the Statement. Evaluation sends each edge to its elementary morphism by [F1]. Each atomic relation evaluates equally on its two sides by [F2], and each quadratic relation evaluates to an identity by step 2.1. Thus evaluation descends to a functor on the quotient. Step 2.1 also gives every elementary edge class its two-sided inverse. Reversing the order of a finite path and replacing each edge by its reverse therefore gives a two-sided inverse for its class; the quotient is a groupoid. [F1, F2, step 2.1]

4.1 Consider two paths in the same hom-set whose evaluated labels agree. The relations just specified are the atomic braids and elementary inverse-pair quadratics used in [F5], since step 2.1 identifies every reverse elementary edge and both orders occur in our relation family. By word normalisation in [F5], each path is congruent to a standard expression of its common label. By braid connectivity in [F5], these standard expressions are related by finitely many atomic braid moves with the same endpoints. Hence the original paths are congruent. Evaluation is injective on each hom-set, which is faithfulness. This includes identity labels and empty paths. [F1, F5, step 2.1, step 3.1] ∎
