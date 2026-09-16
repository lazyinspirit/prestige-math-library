---
id: def-product-measure-extension-axioms-pmea-and-pmea-sigma
kind: definition
title: "PMEA and PMEA-sigma"
status: draft
origin: pipeline
deps: [def-product-measure-on-sigma-finite-spaces, def-complete-measure-space, def-axiom-of-choice, def-cardinal]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "D. H. Fremlin, Real-valued-measurable cardinals"
      url: "https://www1.essex.ac.uk/maths/people/fremlin/rvmc.pdf"
      locator: "Sections 8A-8C, printed pp. 69-70"
    - title: "Joan Bagaria and Samuel Gomes da Silva, omega-one-strongly compact cardinals and normality"
      url: "https://diposit.ub.edu/server/api/core/bitstreams/d5caf92a-962e-496a-a31e-5630dafa67ec/content"
      locator: "Definitions 2.1 and 2.6, printed pp. 3-6"
---

## Definition

Work in $\mathrm{ZFC}$. Let $\lambda$ be a cardinal and let
$2^\lambda = \{0,1\}^\lambda$ be the set of all functions $\lambda \to \{0,1\}$.

- A **finite cylinder** is a set of the form
  $C(i_1,\dots,i_k;\varepsilon_1,\dots,\varepsilon_k) := \{\, x \in 2^\lambda : x(i_j) = \varepsilon_j \text{ for } j \le k \,\}$
  with $k \in \mathbb{N}$, distinct $i_1,\dots,i_k < \lambda$ and $\varepsilon_j \in \{0,1\}$. The **finite-cylinder $\sigma$-algebra** is the $\sigma$-algebra these generate ([[def-product-measure-on-sigma-finite-spaces]]).
- The **fair-coin product measure** $\mu_\lambda$ is the unique probability measure on the finite-cylinder $\sigma$-algebra with $\mu_\lambda(C) = 2^{-k}$ for every cylinder $C$ described by $k$ coordinates; it is the Kolmogorov product of fair coins at each coordinate, and for finite $\lambda$ it is the usual product of counting measures ([[def-product-measure-on-sigma-finite-spaces]]).

A **full extension** of $\mu_\lambda$ is a probability measure $\nu$ with domain the full power set $\mathcal P(2^\lambda)$ whose restriction to the finite-cylinder $\sigma$-algebra is $\mu_\lambda$ ([[def-complete-measure-space]]). It is **countably additive** when
$$\nu\Bigl(\bigcup_{n \in \mathbb N} A_n\Bigr) = \sup_{n} \nu(A_n)$$
for every increasing sequence $A_0 \subseteq A_1 \subseteq \dots$ of subsets of $2^\lambda$, and **$\mathfrak c$-additive** when the same holds for every increasing $\mathfrak c$-indexed family, i.e. when the null ideal of $\nu$ is closed under unions of fewer than $\mathfrak c$ sets ([[def-cardinal]]).

**PMEA** (the *product measure extension axiom*) is the assertion

> for every cardinal $\lambda$, the fair-coin product measure $\mu_\lambda$ has a full extension that is $\mathfrak c$-additive.

**PMEA-$\sigma$** is the weaker assertion

> for every cardinal $\lambda$, the fair-coin product measure $\mu_\lambda$ has a full extension that is countably additive.

## Remarks

- **The two axioms differ only in the additivity.** Every $\mathfrak c$-additive
  full extension is countably additive, so PMEA implies PMEA-$\sigma$; the
  converse is not asserted here. For topological consumers the difference is
  exactly which local bases can be handled: a countably additive full extension
  suffices in first countable spaces, and a $\mathfrak c$-additive one for all
  spaces of character below $\mathfrak c$.

- **No extension is constructed here.** Existence of the finite-cylinder
  measure is standard (Carathéodory extension from the clopen algebra, whose
  premeasure is countably additive by compactness), but neither PMEA nor
  PMEA-$\sigma$ is a theorem of $\mathrm{ZFC}$. Consistency of PMEA relative to
  a strongly compact cardinal is recorded in
  [[thm-lc-strong-compactness-product-measure-extension-interface]], whose PMEA
  sentence is exactly the axiom above.

- **Not a measure on the index set.** PMEA extends the product measure on
  $2^\lambda$; it does not assert a two-valued measure on $\lambda$.
