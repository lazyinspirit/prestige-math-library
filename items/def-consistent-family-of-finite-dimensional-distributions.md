---
id: def-consistent-family-of-finite-dimensional-distributions
kind: definition
title: "A consistent family of finite-dimensional distributions"
status: published
origin: pipeline
deps: [def-probability-measure, def-product-sigma-algebra-and-finite-product-sigma-algebras, def-coordinate-maps-and-cylinder-sigma-algebra]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  audited: 2026-09-06
sources:
  references:
    - title: "Biskup, MATH 275D notes, Definition 2.2"
      url: "https://math.ucla.edu/~biskup/275d.1.25f/PDFs/ch2.pdf"
---

## Definition

Let $(E_i,\mathcal E_i)_{i\in I}$ be measurable spaces. A family
$(\mu_F)_{F\Subset I}$, indexed by all finite subsets of $I$, is a **consistent family of finite-dimensional
distributions** when each $\mu_F$ is a probability measure on
$\bigotimes_{i\in F}\mathcal E_i$, with the finite unordered product
sigma-algebra of [[def-coordinate-maps-and-cylinder-sigma-algebra]], and for
every pair of finite sets $F\subseteq G\subseteq I$ the pushforward of
$\mu_G$ under the restriction $p_{G,F}(x)=x|_F$ equals $\mu_F$; equivalently,
$\mu_G(p_{G,F}^{-1}(A))=\mu_F(A)$ for every
$A\in\bigotimes_{i\in F}\mathcal E_i$. The restriction is measurable since
inverse images of coordinate generators are coordinate generators. The empty
support carries the unique probability measure on the singleton empty product.

Reordering means choosing a different enumeration of the **same** finite set
$F$. If $e:[n]\to F$ is an enumeration, its displayed ordered law is the
pushforward of $\mu_F$ under $r_e(x)=(x_{e(0)},\ldots,x_{e(n-1)})$.
For another enumeration $e'$, the coordinate permutation $r_{e'}\circ r_e^{-1}$
pushes this ordered law to the one displayed using $e'$. This is automatic
from these definitions and does not require equal laws on different subsets
of $I$, or invariance under permutations of a fixed ordered product.
In particular, consistency is data about
every finite joint law, not merely the one-coordinate marginals.
