---
id: def-emg-set-size-and-class-schema
kind: definition
title: Set-sized objects and definable-class schemas
status: published
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
physical_scope: null
deps:
- def-language-of-set-theory
- def-axiom-of-power-set
- def-axiom-schema-of-separation
- def-ordered-pair
- def-cartesian-product
- def-function
dependency_roles:
  def-language-of-set-theory: mathematical-premise
  def-axiom-of-power-set: mathematical-premise
  def-axiom-schema-of-separation: mathematical-premise
  def-ordered-pair: mathematical-premise
  def-cartesian-product: mathematical-premise
  def-function: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  scraped: []
  references:
  - title: B. Kaya, MATH 320 Set Theory (METU), §1.1
    url: https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf
  - title: Zermelo-Fraenkel set theory (Wikipedia)
    url: https://en.wikipedia.org/wiki/Zermelo%E2%80%93Fraenkel_set_theory
  - title: C. Wilson, A Brief Introduction to ZFC (Chicago REU 2016)
    url: https://math.uchicago.edu/~may/REU2016/REUPapers/Wilson.pdf
dependency_level: 0
---

## Definition

Use the first-order language of [[def-language-of-set-theory]]: all quantified objects are sets, and a **definable class** $\{x:\varphi(x,p)\}$ abbreviates a formula with set parameters $p$. It is not a new set or a domain for unrestricted quantification. Work with the usual set axioms, in particular [[def-axiom-of-power-set]] and [[def-axiom-schema-of-separation]], and the ordered pairs, products and functions of [[def-ordered-pair]], [[def-cartesian-product]] and [[def-function]]. The power-set axiom supplies a collecting set; Separation trims it to exactly $\mathcal P(X)=\{Y:Y\subseteq X\}$.

A **small category** has a set $O$ of objects, a set $A$ of arrows, source and target functions $s,t:A\to O$, an identity function $e:O\to A$, and a composition function on the set $\{(a,b)\in A\times A:s(a)=t(b)\}$, where $ab$ denotes $a\circ b$ and the laws are $s(e(x))=t(e(x))=x$, $s(ab)=s(b)$, $t(ab)=t(a)$, $e(t(a))a=a=ae(s(a))$, and $(ab)c=a(bc)$ whenever the displayed compositions are defined. It is **locally small** when each specified hom-collection is a set. A definable large category is a schema of formulas for its objects, arrows and operations, with those laws asserted as formulas; it is not a set of all objects or a category of all large categories. No Grothendieck universe is assumed.

All indexed families in the local bundle construction have a supplied set index $I$. If $U_i\subseteq M$ and $G$ is a set, their tagged disjoint union is the subset $D=\{(i,x,z)\in I\times M\times G:x\in U_i\}$, formed by Separation. Given a set equivalence relation $E\subseteq D\times D$, each class $[u]_E=\{v\in D:(u,v)\in E\}$ is a subset of $D$, and the quotient is the set

$$
D/E=\{C\in\mathcal P(D):\exists u\in D\ \forall v\in D\ (v\in C\iff(u,v)\in E)\}.
$$

Thus the quotient is obtained by Separation in $\mathcal P(D)$, without choosing representatives. Transition-map graphs and connection data are subsets of specified finite products and power sets, not arbitrary proper-class objects.

For the Cauchy-development coding application, fix a set manifold $\Sigma$ and the tensor-bundle total spaces over $\Sigma\times\mathbb R$. A code consists of an open set $D\subseteq\Sigma\times\mathbb R$, graphs of a metric and a two-form on $D$ inside those fixed total spaces, a time orientation, and a fixed initial embedding. All of its coordinates belong to fixed products and power sets. Separation selects the tuples satisfying the specified smoothness, Lorentzian, field-equation and initial-data formulas. Hence these codes form a set. This size assertion does not prove field-equation existence, maximality or uniqueness, and makes no proper-class representative choice.
