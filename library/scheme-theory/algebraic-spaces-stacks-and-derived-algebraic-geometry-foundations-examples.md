---
page: algebraic-spaces-stacks-and-derived-algebraic-geometry-foundations-examples
title: "Algebraic Spaces, Stacks, and Derived Algebraic Geometry Foundations — Examples"
status: published
requires: [algebraic-spaces-stacks-and-derived-algebraic-geometry-foundations]
items: []
examples:
  - ex-scheme-as-algebraic-space
  - ex-classifying-stack-of-a-finite-group
  - cex-quotient-stack-need-not-be-a-scheme
---

The companion examples separate the three levels that the main page keeps
apart. First, the affine line over a field is an algebraic space, with the
diagonal equivalence relation presenting it and the identity as etale scheme
cover; more generally every scheme is an algebraic space via the fully
faithful Yoneda embedding. Second, the classifying stack $BG$ of a finite
group $G$, viewed as the constant group scheme over the field, is an algebraic
stack with presentation by the trivial torsor; when $G$ is abelian its inertia
stack is $G_k\times_kBG$, and over the trivial torsor the inertia objects are
the pairs $(\text{trivial torsor},g)$. Third, for nontrivial $G$ the stack $BG$
is not equivalent to the stack of any scheme — its inertia over
$\operatorname{Spec}k$ is nontrivial while a scheme's stack in setoids has
trivial inertia — even though the fppf quotient sheaf of the trivial action is
the representable sheaf of $\operatorname{Spec}k$. This witnesses that
quotient sheaves, algebraic spaces and quotient stacks genuinely differ.
