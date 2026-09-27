---
id: def-gbc-global-choice-ground-for-easton
kind: definition
title: Class-theoretic ground assumptions for Easton forcing
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-axiom-of-choice, def-aleph-and-beth-hierarchies, def-easton-function, def-easton-support-product, thm-generalized-continuum-hypothesis-in-l, thm-ordinals-and-omega-are-absolute-in-transitive-models]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "Kameryn J. Williams, The Structure of Models of Second-order Set Theories, Definition 1.1, Fact 1.18 and Observation 1.21"
      url: "https://juliakw.net/research/pubs/diss/kwilliams-diss-ss.pdf"
    - title: "Thomas Jech, Set Theory, Chapter 15, forcing with a class of conditions, printed pp.235-237"
      url: "https://fa.ewi.tudelft.nl/~hart/onderwijs/set_theory/Jech/15-applications_of_forcing.pdf"
    - title: "Kameryn J. Williams, Math 655 Lecture Notes 2.2, Theorem 77 (global Easton, proof sketch), PDF p.16"
      url: "https://juliakw.net/teaching/2019/math655/part2.2.pdf"
verification:
  precheck: n/a
---

## Definition

The class-forcing results on this page are stated over the following ground,
which is the setting of the source's class-forcing section. A **GBC + Global
Choice + GCH ground** is a pair $(M,\mathcal{C})$ such that:

- **(sets)** $M$ is a countable transitive set with
  $M\models\mathrm{ZFC}+\mathrm{GCH}$, that is, ZFC together with
  $2^{\aleph_{\alpha}}=\aleph_{\alpha+1}$ for every ordinal $\alpha$
  ([[def-aleph-and-beth-hierarchies]]);
- **(classes)** $\mathcal{C}\subseteq\mathcal{P}(M)$ is a countable collection
  of subsets of $M$, the *classes* of the ground, containing all
  $M$-definable subsets with set parameters, every set of $M$ (identified with
  its $M$-elements), and the set $M$ itself; complements relative to $M$ and
  finite intersections belong to $\mathcal C$ by comprehension below;
- **(comprehension)** for every formula $\varphi(v,u_{1},\dots,u_{m},
  X_{1},\dots,X_{n})$ of the two-sorted language whose bound variables range
  over sets only, and all parameters $a_{1},\dots,a_{m}\in M$ and
  $X_{1},\dots,X_{n}\in\mathcal{C}$,
  $\{a\in M:(M,\mathcal{C})\models\varphi(a,\vec a,\vec X)\}$ is a class in
  $\mathcal{C}$; class quantifiers are thus never used in comprehension, and
  every class of $\mathcal{C}$ is a subset of $M$;
- **(class Replacement)** if $A\in\mathcal{C}$ is a functional class and
  $a\in M$, then the image $\{y\in M:\exists x\in a\ (x,y)\in A\}$ is an
  element of $M$, so set-indexed class images are sets;
- **(Global Choice)** there is a class $W\in\mathcal{C}$ that well-orders all
  of $M$ as a class of ordered pairs; equivalently, over the other GBC axioms
  (Williams, Fact 1.18), there is a class function choosing an element of every nonempty
  set of $M$.

The set part $M$ alone is a transitive model of ZFC ([[thm-ordinals-and-omega-are-absolute-in-transitive-models]]);
the class part is kept countable on purpose, so that below there are only
countably many dense classes to meet and a generic filter exists externally.

A **definable Easton class function** over such a ground is a function $F$,
arising as a class of $\mathcal{C}$ via a fixed definition with set parameters
([[def-easton-function]]), that is defined on every infinite regular cardinal
of $M$, takes cardinal values, is nondecreasing, and satisfies
$\operatorname{cf}(F(\kappa))>\kappa$ for every infinite regular $\kappa$. The
**Easton class product** $P(F)$ is the class of conditions of
[[def-easton-support-product]] for this $F$; it is a class of $\mathcal{C}$,
and each of its conditions is a set of $M$, while $P(F)$ itself is not a set
of $M$.

Finally, an $M$-generic filter for the class product is a filter
$G\subseteq P(F)$ (nonempty, upward closed and directed under the order
$p\le q\Leftrightarrow p\supseteq q$, a condition being stronger the larger
its domain) such that $G\cap D\ne\varnothing$ for every $D\in\mathcal{C}$
that is dense in $P(F)$. It is part of this hypothesis that such a $G$ is
available externally: since $M$ and $\mathcal{C}$ are countable, and the
dense classes in question form a subcollection of the countable
$\mathcal C$, such filters exist and every condition extends into one.

**Existence and reading.** A ground of this kind is *not* a theorem of ZFC. It
is available, for example, from any countable transitive set
$M\models\mathrm{ZFC}+V=L$: take $\mathcal C=\operatorname{Def}(M)$,
the subsets definable over $M$ with set parameters. Substituting the finitely
many definitions of class parameters proves elementary comprehension; for a
definable functional class, Replacement in $M$ gives its image on each set.
The constructible well-order is definable in $M$, providing Global Choice.
There are countably many formulas and finite tuples of parameters from $M$,
so $\mathcal C$ is countable. GCH holds in $M$ because $V=L$ proves GCH
([[thm-generalized-continuum-hypothesis-in-l]]). All class items on this
page are therefore conditional statements about such a ground: they assert
nothing in ZFC alone, and this page never claims that a countable transitive
model of ZFC + GCH, or a ground of this definition, exists in ZFC.
