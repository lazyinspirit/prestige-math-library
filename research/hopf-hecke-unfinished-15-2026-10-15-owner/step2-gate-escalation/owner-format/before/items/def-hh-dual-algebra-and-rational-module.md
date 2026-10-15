---
id: def-hh-dual-algebra-and-rational-module
kind: definition
title: "The dual convolution algebra and rational modules"
status: draft
origin: pipeline
pipeline_run: hopf-hecke-unfinished-15-2026-10-15
dependency_level: 1
deps: [def-hh-coalgebra-and-coalgebra-map, def-hh-scalar-and-tensor-conventions, def-left-and-right-modules, def-algebraic-dual-and-linear-functional, def-algebra-over-a-commutative-ring, def-linear-map]
justified_by: [thm-hh-comodules-and-rational-dual-modules]
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Daniel Kongsgaard and UCSD Math 207A, Hopf Algebras Lecture Notes, Spring 2020"
      url: "https://mathweb.ucsd.edu/~drogalsk/207a-s20-lecturenotes.pdf"
      locator: "§1.6, Proposition 1.13, printed pp.12–13; §3.4, Definition 3.27, printed p.40"
    - title: "Andrew Baker, Hopf algebras over fields: an introduction, SMSTC supplementary course notes 2026–7"
      url: "https://www.maths.gla.ac.uk/~ajb/SMSTC/HopfAlgebrasNotes.pdf"
      locator: "§2.3, printed pp.23–24"
verification:
  precheck: n/a
---

## Definition

For a coalgebra $C$ over $k$, write
$$
C^*:=\operatorname{Hom}_k(C,k)
$$
for its full algebraic dual, using [[def-algebraic-dual-and-linear-functional]]. Define the **convolution candidate product** by
$$
(f*g)(c):=(f\otimes g)(\Delta(c))
$$
for $f,g\in C^*$ and $c\in C$, and take $\varepsilon$ as its candidate unit. Thus, when $\Delta(c)=\sum_i c_i\otimes d_i$, $(f*g)(c)=\sum_i f(c_i)g(d_i)$. Every such sum is finite because tensors are algebraic tensors under [[def-hh-scalar-and-tensor-conventions]].

The theorem [[thm-hh-comodules-and-rational-dual-modules]] proves that this product is associative and unital, so it makes $C^*$ a $k$-algebra. A **left $C^*$-module** here is a $k$-vector space $M$ with a $k$-bilinear action $C^*\times M\to M$ satisfying $f\cdot(g\cdot m)=(f*g)\cdot m$ and $\varepsilon\cdot m=m$. This is the usual unital module convention of [[def-left-and-right-modules]] for the resulting $k$-algebra.

Such a module is **rational** if for every $m\in M$ there exists a finite tensor $t_m\in M\otimes C$ such that
$$
f\cdot m=(\operatorname{id}_M\otimes f)(t_m)
\quad\text{for every }f\in C^*.
$$
This definition asserts existence only. The theorem proves uniqueness of $t_m$ under its stated choice hypothesis before naming it as a coaction value.

The convolution formula uses the order $f$ on the first tensor factor and $g$ on the second. Sources that identify $(C\otimes C)^*$ with $C^*\otimes C^*$ using the reversed tensor-factor convention require the corresponding switch; the formula above fixes the convention used throughout this page.

## Remarks

The draft supplier [[def-hh-coalgebra-and-coalgebra-map]] is present in batch 1 and states the coassociative comultiplication and two-sided counit used here. This definition introduces the convolution candidate only; [[thm-hh-comodules-and-rational-dual-modules]] proves that it is associative and unital.
