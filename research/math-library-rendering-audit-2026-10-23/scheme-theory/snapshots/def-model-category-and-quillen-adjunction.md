---
id: def-model-category-and-quillen-adjunction
kind: definition
title: "Model categories and Quillen adjunctions"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 0
justified_by: []
aliases: []
deps:
  - def-category
  - thm-equivalent-encodings-of-an-adjunction
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Goerss-Schemmerhorn, Model Categories and Simplicial Methods"
      url: "https://arxiv.org/pdf/math/0609537"
      locator: "Definition 1.3 and Remark 1.4, PDF 3-4; source statements used as route, unprinted prerequisite arguments expanded locally"
    - title: "The Stacks Project, Simplicial Methods"
      url: "https://stacks.math.columbia.edu/download/simplicial.pdf"
      locator: "Sections 14.18.5-14.18.8, 14.24.1-14.24.3 and 14.31.1-14.31.9; accepted local normalization, Dold-Kan and horn arguments"
---

## Definition

A **model category** is a category $\mathcal M$ with all small limits and
colimits ([[def-category]]), together with three classes
$\mathcal W,\mathrm{Fib},\mathrm{Cof}$ of maps, each closed under retracts
(that is, if a map is a retract of a map in the class, in the arrow category,
then it lies in the class), subject to the following axioms.

1. $\mathcal W$ satisfies **two-out-of-three**: if two of $f$, $g$ and
   $g\circ f$ lie in $\mathcal W$, then so does the third.
2. **Lifting.** For a cofibration $i\colon A\to B$, a fibration
   $p\colon X\to Y$ and morphisms $a\colon A\to X$, $b\colon B\to Y$ with
   $p\circ a=b\circ i$, if $i$ or $p$ lies in $\mathcal W$, then there is a
   lift $\ell\colon B\to X$ with $\ell\circ i=a$ and $p\circ\ell=b$.
3. **Factorization.** Every map $f$ factors both as $f=p\circ i$ with $i$
   in $\mathrm{Cof}$ and $p$ in $\mathrm{Fib}\cap\mathcal W$, and as
   $f=q\circ j$ with $j$ in $\mathrm{Cof}\cap\mathcal W$ and $q$ in
   $\mathrm{Fib}$.

A **trivial fibration** is a map in $\mathrm{Fib}\cap\mathcal W$ and a
**trivial cofibration** is a map in $\mathrm{Cof}\cap\mathcal W$. An object
$X$ is **cofibrant** when the structure map $\varnothing\to X$ from an initial
object lies in $\mathrm{Cof}$, and **fibrant** when the structure map
$X\to\ast$ to a terminal object lies in $\mathrm{Fib}$; these properties are
independent of the chosen initial and terminal objects, since any two are
canonically isomorphic. A map in $\mathcal W$ is a **weak equivalence**.

A **Quillen adjunction** $L\dashv R$ between model categories
$\mathcal M$ and $\mathcal N$ is an adjunction (in the sense of
[[thm-equivalent-encodings-of-an-adjunction]]) whose right adjoint $R$ sends
fibrations to fibrations and trivial fibrations to trivial fibrations. It is
equivalent to require that the left adjoint $L$ sends cofibrations to
cofibrations and trivial cofibrations to trivial cofibrations: transposing
each lifting square across the adjunction bijection identifies a lift on the
left with a lift on the right, so the two conditions are exchanged by the
adjunction. A **Quillen equivalence** is a Quillen adjunction such that for
every cofibrant $X$ and fibrant $Y$ a map $LX\to Y$ lies in $\mathcal W$
exactly when its adjoint $X\to RY$ does.

When source and target carry simplicial mapping objects, an **enriched**
Quillen adjunction is a Quillen adjunction together with natural isomorphisms
$$\mathrm{Map}(LX,Y)\cong\mathrm{Map}(X,RY)$$ compatible with the simplicial
operators and natural with respect to the enriched mapping objects. A
**simplicial Quillen adjunction** between simplicial model categories is an
enriched adjunction in this sense whose underlying adjunction is Quillen.

These definitions do not assert the existence of any model structure: being a
model category is structure on a category, and a functor between model
categories is not required to preserve anything. Two objects require care
throughout: the initial and terminal objects. In the category of unital
commutative $A$-algebras the initial object is $A$ and the terminal object is
the zero ring, and the two must not be conflated when cofibrancy and fibrancy
are read off from the structure maps.
