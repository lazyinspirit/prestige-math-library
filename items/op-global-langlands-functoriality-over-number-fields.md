---
id: op-global-langlands-functoriality-over-number-fields
kind: open-problem
title: Global Langlands functoriality over number fields
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-axiom-of-choice
  - def-countable-choice
provenance:
  statement: literature-derived
  proof: not-applicable
axiom_use: >-
  AC is assumed for the global absolute-Galois-group convention, and Countable
  Choice for the current local-place conventions used to state almost-everywhere
  unramified classes. No choice-free branch is asserted.
sources:
  references:
    - title: "Michael Emerton, Langlands Reciprocity: L-functions, Automorphic Forms, and Diophantine Equations, §6.4.3"
      url: "https://math.uchicago.edu/~emerton/pdffiles/reciprocity.pdf"
    - title: "James Newton, Modularity of Galois Representations and Langlands Functoriality, §§2.5–2.6"
      url: "https://people.maths.ox.ac.uk/newton/iisc.pdf"
verification:
  precheck: n/a
---

## Open problem

Assume AC and Countable Choice under the current global and local conventions.
Let $F$ be a number field and let $\mathbb A_F$ be its adele ring, the
restricted product of its completions with respect to the valuation rings at
finite places. Let $G$ and $H$ be connected reductive linear algebraic groups
over $F$, meaning smooth connected affine groups whose base changes to an
algebraic closure of $F$ have trivial unipotent radicals. A Borel subgroup is
a closed connected solvable subgroup that is maximal after base change to an
algebraic closure; assume such a subgroup of $H$ is defined over $F$. Let
$\widehat G$ and $\widehat H$ be the complex connected reductive groups with
the dual root data of $G$ and $H$, equipped with their induced Galois actions.
Write $^LG=\widehat G\rtimes\Gamma_F$ and
$^LH=\widehat H\rtimes\Gamma_F$, where
$\Gamma_F=\operatorname{Gal}(F^{\mathrm{sep}}/F)$. An $L$-homomorphism
$\eta:^LG\to{}^LH$ is a continuous homomorphism inducing the identity on the
$\Gamma_F$ quotient and whose map on the dual groups is $\Gamma_F$-equivariant.
An automorphic representation of $G(\mathbb A_F)$ is an irreducible
subquotient of the right-regular representation on smooth automorphic forms
on $G(F)\backslash G(\mathbb A_F)$; these are smooth functions of moderate
growth and finite under the archimedean compact-group and center actions.

At a finite place $v$ where $G$ has a reductive integral model, choose the
associated hyperspecial compact subgroup $K_v$. If a local factor $\pi_v$ has
a nonzero $K_v$-fixed vector, the spherical Hecke algebra acts on that line
through a character; the Satake isomorphism associates to it a semisimple
conjugacy class $s_v(\pi)$ in $\widehat G$. Let $c_v(\pi)$ be the conjugacy
class in $^LG$ formed from $s_v(\pi)$ and geometric Frobenius
$\operatorname{Frob}_{v,\mathrm{geom}}$, the inverse of arithmetic Frobenius.
Define $c_v(\Pi)$ in the same way for $H$. The global functoriality problem
asks: for every such $F,G,H,\eta$ and every automorphic representation
$\pi$ of $G(\mathbb A_F)$, is there an automorphic representation $\Pi$ of
$H(\mathbb A_F)$ such that
$c_v(\Pi)=\eta(c_v(\pi))$ for all but finitely many finite places $v$ where
both local factors have hyperspecial fixed vectors?

## Open problem references

[[def-axiom-of-choice]]

[[def-countable-choice]]

[Michael Emerton, *Langlands Reciprocity: L-functions, Automorphic Forms, and Diophantine Equations*, §6.4.3](https://math.uchicago.edu/~emerton/pdffiles/reciprocity.pdf)

[James Newton, *Modularity of Galois Representations and Langlands Functoriality*, §§2.5–2.6](https://people.maths.ox.ac.uk/newton/iisc.pdf)

## Status

Open as a universal assertion over all number fields, connected reductive
groups, $L$-homomorphisms, and automorphic representations as of 2026-10-26.
This does not assert that every individual transfer case is open: particular
base-change, symmetric-power, and inner-form transfers are known. The
number-field conjecture is separate from the function-field $\mathrm{GL}_r$
correspondence stated in the current prerequisite page.

## Status references

[Michael Emerton, *Langlands Reciprocity: L-functions, Automorphic Forms, and Diophantine Equations*, §6.4.3](https://math.uchicago.edu/~emerton/pdffiles/reciprocity.pdf)

[James Newton, *Modularity of Galois Representations and Langlands Functoriality*, §2.6](https://people.maths.ox.ac.uk/newton/iisc.pdf)
