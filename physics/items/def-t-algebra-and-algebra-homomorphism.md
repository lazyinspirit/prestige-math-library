---
id: def-t-algebra-and-algebra-homomorphism
kind: definition
title: "Algebra and algebra homomorphism for a monad"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-monad]
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
    - title: "B. Richter, From Categories to Homotopy Theory, Definition 6.2.1"
      url: "https://www.math.uni-hamburg.de/personen/richter/bookdraft.pdf"
pipeline_run: null
---

## Definition

Let $(T,\eta,\mu)$ be a monad on $\mathcal C$ ([[def-monad]]). A **$T$-algebra** is an object $A$ together with a morphism $a:TA\to A$, called its **structure map**, satisfying

$$a\circ\eta_A=1_A,\qquad a\circ T(a)=a\circ\mu_A.$$

For $T$-algebras $(A,a)$ and $(B,b)$, a **$T$-algebra homomorphism** $f:(A,a)\to(B,b)$ is a morphism $f:A\to B$ in $\mathcal C$ such that

$$f\circ a=b\circ T(f).$$
