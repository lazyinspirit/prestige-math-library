---
id: def-monad
kind: definition
title: "Monad on a category"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-functor-and-contravariant-functor, def-natural-transformation, def-horizontal-composition-and-whiskering-of-natural-transformations]
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, 2nd ed., Definition 5.1.1"
      url: "https://emilyriehl.github.io/files/context.pdf"
    - title: "B. Richter, From Categories to Homotopy Theory, Definition 6.1.1"
      url: "https://www.math.uni-hamburg.de/personen/richter/bookdraft.pdf"
    - title: "S. Mac Lane, Categories for the Working Mathematician, 2nd ed., Chapter VI.1"
      url: "https://math.mit.edu/~hrm/palestine/maclane-categories.pdf"
pipeline_run: null
---

## Definition

Let $\mathcal C$ be a category. A **monad on $\mathcal C$** is a triple $(T,\eta,\mu)$ consisting of an endofunctor $T:\mathcal C\to\mathcal C$ ([[def-functor-and-contravariant-functor]]) and natural transformations ([[def-natural-transformation]])

$$\eta:1_{\mathcal C}\Rightarrow T,\qquad \mu:T^2\Rightarrow T,$$

called the **unit** and **multiplication**, such that

$$\mu\circ T\mu=\mu\circ\mu T:T^3\Rightarrow T,$$

$$\mu\circ T\eta=1_T=\mu\circ\eta T:T\Rightarrow T.$$

Here $T\mu$, $\mu T$, $T\eta$, and $\eta T$ are whiskerings in the sense of [[def-horizontal-composition-and-whiskering-of-natural-transformations]]. Componentwise, for every object $A$,

$$\mu_A\circ T(\mu_A)=\mu_A\circ\mu_{TA},\qquad \mu_A\circ T(\eta_A)=1_{TA}=\mu_A\circ\eta_{TA}.$$
