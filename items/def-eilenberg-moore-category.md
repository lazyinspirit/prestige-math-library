---
id: def-eilenberg-moore-category
kind: definition
title: "Eilenberg–Moore category of a monad"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [thm-t-algebra-homomorphisms-are-closed-under-identities-and-composition]
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + claude-sonnet-5"
    verdict: pass
    date: 2026-08-17
  audited: 2026-08-17
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, 2nd ed., Definition 5.2.4"
      url: "https://emilyriehl.github.io/files/context.pdf"
    - title: "B. Richter, From Categories to Homotopy Theory, Section 6.2"
      url: "https://www.math.uni-hamburg.de/personen/richter/bookdraft.pdf"
pipeline_run: null
---

## Definition

For a monad $T$ on $\mathcal C$, the **Eilenberg–Moore category** $\mathcal C^T$ has the $T$-algebras as objects and the $T$-algebra homomorphisms as morphisms. Its identities and composition are those of $\mathcal C$; [[thm-t-algebra-homomorphisms-are-closed-under-identities-and-composition]] proves that these operations are closed and satisfy the category laws.

The **Eilenberg–Moore forgetful functor** $U^T:\mathcal C^T\to\mathcal C$ sends $(A,a)$ to $A$ and acts as the identity on each underlying morphism.
