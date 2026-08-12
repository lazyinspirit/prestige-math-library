---
id: def-adjugate-of-a-linear-operator
kind: definition
title: "The adjugate of an operator on a positive-dimensional finite-dimensional vector space, defined by the adjugate matrix in any basis"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-matrix-minors-cofactors-and-adjugate,
       thm-adjugate-is-equivariant-under-similarity,
       thm-two-sided-change-of-basis-formula,
       thm-matrix-representation-is-a-vector-space-isomorphism]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Sheldon Axler, Linear Algebra Done Right, 4th ed."
      url: "https://linear.axler.net/LADR4e.pdf"
pipeline_run: null
---

## Definition

Let $T:V\to V$ be a linear operator on a finite-dimensional vector space over
a field, with $\dim V=n\geq1$. Choose an ordered basis $\mathcal B$. The
**adjugate operator** $\operatorname{adj}(T):V\to V$ is the unique linear
operator satisfying

$$[\operatorname{adj}(T)]_{\mathcal B} =\operatorname{adj}([T]_{\mathcal B}),$$

where the matrix adjugate is defined in
[[def-matrix-minors-cofactors-and-adjugate]]. Existence and uniqueness follow
because the matrix-representation map is an isomorphism
([[thm-matrix-representation-is-a-vector-space-isomorphism]]).

This definition is independent of $\mathcal B$. Indeed, the two-sided
change-of-basis formula gives
$[T]_{\mathcal C}=P^{-1}[T]_{\mathcal B}P$
([[thm-two-sided-change-of-basis-formula]]), and adjugate equivariance gives

$$\operatorname{adj}([T]_{\mathcal C}) =P^{-1}\operatorname{adj}([T]_{\mathcal B})P$$

([[thm-adjugate-is-equivariant-under-similarity]]), which is exactly the
change-of-basis formula for the same operator.
