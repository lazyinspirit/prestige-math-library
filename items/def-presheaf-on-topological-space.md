---
id: def-presheaf-on-topological-space
kind: definition
title: "A presheaf on a topological space"
status: published
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-open-set-category-topological-space, def-functor-and-contravariant-functor, prop-sets-and-functions-form-category-set]
verification:
  audited: 2026-09-04
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Sheaves on Spaces, Definition 3.1"
      url: "https://stacks.math.columbia.edu/download/sheaves.pdf"
    - title: "Ravi Vakil, Foundations of Algebraic Geometry, Class 3"
      url: "https://math.stanford.edu/~vakil/0506-216/216Ajun2807.pdf"
---

## Definition

Let $X$ be a topological space. A **presheaf of sets on $X$** is a
contravariant functor
$$\mathcal F:\operatorname{Open}(X)\longrightarrow \mathbf{Set}$$
([[def-functor-and-contravariant-functor]],
[[prop-sets-and-functions-form-category-set]]).

Equivalently, a presheaf of sets on $X$ consists of:

- a set $\mathcal F(U)$ for every open set $U \subseteq X$;
- for every inclusion $V \subseteq U$, a restriction map
  $$\rho^U_V:\mathcal F(U)\longrightarrow \mathcal F(V),$$

such that
$$\rho^U_U=\operatorname{id}_{\mathcal F(U)}$$
and, whenever $W \subseteq V \subseteq U$,
$$\rho^U_W=\rho^V_W\circ \rho^U_V.$$

Because the arrows of $\operatorname{Open}(X)$ are the inclusions
$V \to U$ with $V \subseteq U$, contravariance is exactly the rule that sections
over a larger open set restrict to sections over a smaller one.
