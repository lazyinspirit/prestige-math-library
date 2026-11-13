---
id: def-standard-expressions-artin-tits-normalisers
kind: definition
title: Standard expressions and their lengths
status: draft
domain: mathematics
origin: pipeline
deps:
  - def-coxeter-data-artin-tits-normalisers
  - def-associates-artin-tits-normalisers
  - def-brink-howlett-artin-tits-normalisers
  - def-connected-support-artin-tits-normalisers
  - def-longest-elements-artin-tits-normalisers
  - def-simple-wall-crossing-artin-tits-normalisers
  - lem-wall-is-morphism-artin-tits-normalisers
dependency_roles:
  def-coxeter-data-artin-tits-normalisers: mathematical-premise
  def-associates-artin-tits-normalisers: mathematical-premise
  def-brink-howlett-artin-tits-normalisers: mathematical-premise
  def-connected-support-artin-tits-normalisers: mathematical-premise
  def-longest-elements-artin-tits-normalisers: mathematical-premise
  def-simple-wall-crossing-artin-tits-normalisers: mathematical-premise
  lem-wall-is-morphism-artin-tits-normalisers: mathematical-premise
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Normalisers of parabolic subgroups of Artin–Tits groups and Tits cone
        intersections
      url: https://arxiv.org/abs/2509.21915v3
      locator: PDF p. 17, Definition 4.9
      statement: A standard expression is a composable product of the indicated
        wall-crossing morphisms whose Coxeter lengths add to the length of the
        product; its standard-expression length is the number of factors.
      hypotheses: The Coxeter system and Brink–Howlett groupoid conventions of the
        article, with I and K objects and w a morphism from I to K.
      reading_limits: The frozen extracted text at Definition 4.9 and the surrounding
        groupoid and wall-crossing definitions was read for attribution. The
        article citation is not used as a proof premise.
dependency_level: 11
---

## Definition

Let $(W,S)$ be a Coxeter system with diagram vertex set $\Gamma_0$, and fix $J\subseteq\Gamma_0$. For $L\subseteq\Gamma_0$, write $W_L=\langle s_i:i\in L\rangle$; an associate of $J$ is a subset whose standard parabolic subgroup is conjugate to $W_J$. The Brink–Howlett groupoid $\mathcal{BH}(J)$ has these associates as objects. A morphism $x:I\to K$ is labelled by an element $x\in W$ satisfying $\{x\alpha_k:k\in K\}=\{\alpha_i:i\in I\}$, and composable labels multiply from left to right. Write $\ell(x)$ for the least number of simple generators in a word representing $x$.

For an associate $I$ and $a\in\Gamma_0\setminus I$, let $D=[I,a]$ be the component containing $a$ in the diagram induced on $I\cup\{a\}$. If $W_D$ is finite, write $w_L$ for the longest element of a finite $W_L$ and $\iota_D$ for the permutation defined by $w_D\alpha_i=-\alpha_{\iota_D(i)}$. Put $v_{a,I}=w_{D\setminus\{a\}}w_D$ and $I'=(I\cup\{a\})\setminus\{\iota_D(a)\}$. This label is a morphism $I\to I'$.

For objects $I,K$ and a morphism $w:I\to K$, a **standard expression** is a finite sequence of such morphisms $v_{a_1,I_1},\ldots,v_{a_m,I_m}$, composable in that order from $I$ to $K$, whose product is $w$ and for which $\ell(w)=\sum_{i=1}^m\ell(v_{a_i,I_i})$. For $m>0$ the source condition says $I_1=I$. The empty sequence is allowed when $I=K$ and $w$ is the identity; its product is the identity and its length sum is zero. The **standard-expression length of the expression** is its number $m$ of factors. When a morphism has a standard expression and every standard expression for it has the same number of factors, this common number is denoted $\ell_{\mathcal{BH}}(w)$ and called the standard-expression length of $w$.

## Definition references

[[def-coxeter-data-artin-tits-normalisers]]

[[def-associates-artin-tits-normalisers]]

[[def-brink-howlett-artin-tits-normalisers]]

[[def-connected-support-artin-tits-normalisers]]

[[def-longest-elements-artin-tits-normalisers]]

[[def-simple-wall-crossing-artin-tits-normalisers]]

[[lem-wall-is-morphism-artin-tits-normalisers]]

## Justification

The Coxeter length is defined as a minimum over finite representing words. The groupoid supplies the source, target, identity and composition of each finite composable sequence; the wall-crossing construction and its morphism lemma supply the displayed factors under the stated finiteness condition. Thus the product and the equality of lengths are well-defined conditions on a finite sequence. Its number of entries is a uniquely determined nonnegative integer. The notation for a morphism is introduced only under the explicitly stated existence and independence conditions, so no expression-independent value is assumed here.

## Source notes

Definition 4.9 attributes the terminology to section 2 of its reference [5]. Existence and independence are separate subsequent results in the article; they are not established by this definition.
