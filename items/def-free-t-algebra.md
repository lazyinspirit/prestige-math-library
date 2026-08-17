---
id: def-free-t-algebra
kind: definition
title: "Free algebra for a monad"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-t-algebra-and-algebra-homomorphism]
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
    - title: "E. Riehl, Category Theory in Context, 2nd ed., Definition 5.2.8"
      url: "https://emilyriehl.github.io/files/context.pdf"
    - title: "B. Richter, From Categories to Homotopy Theory, Example 6.2.3"
      url: "https://www.math.uni-hamburg.de/personen/richter/bookdraft.pdf"
pipeline_run: null
---

## Definition

For a monad $(T,\eta,\mu)$ and an object $A$, the **free $T$-algebra on $A$** is

$$(TA,\mu_A).$$

It is a $T$-algebra: its associativity axiom is the componentwise monad associativity equation, and its unit axiom is $\mu_A\circ\eta_{TA}=1_{TA}$. For a morphism $f:A\to B$, naturality of $\mu$ makes $T(f):(TA,\mu_A)\to(TB,\mu_B)$ an algebra homomorphism.
