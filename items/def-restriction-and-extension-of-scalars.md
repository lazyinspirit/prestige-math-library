---
id: def-restriction-and-extension-of-scalars
kind: definition
title: "Restriction of scalars and extension of scalars $S\\otimes_RM$ along a ring homomorphism $R\\to S$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-ring-homomorphism, def-bimodule, thm-bimodule-actions-induced-on-tensor-products]
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "MIT 18.721 Algebraic Geometry notes, Section 2.1"
      url: "https://math.mit.edu/classes/18.721/ag-jun17-2021.pdf"
    - title: "W. Li, Commutative Algebra, Lectures 9-10"
      url: "https://www.math.columbia.edu/~wenqili/commalg_notes.pdf"
pipeline_run: null
---

## Definition

Let $f:R\to S$ be a unital homomorphism of commutative rings ([[def-ring-homomorphism]]).

For an $S$-module $N$, its **restriction of scalars** along $f$, denoted $\operatorname{Res}^S_RN$, is the same abelian group with $R$-action

$$r\cdot n:=f(r)n.$$

For an $R$-module $M$, its **extension of scalars** along $f$ is

$$S\otimes_RM.$$

Here $S$ is an $(S,R)$-bimodule with left action by multiplication and right action $s\cdot r:=s f(r)$ ([[def-bimodule]]). The induced outer action

$$s'(s\otimes m):=(s's)\otimes m$$

makes $S\otimes_RM$ an $S$-module ([[thm-bimodule-actions-induced-on-tensor-products]]).

Restriction acts on a homomorphism by leaving its underlying function unchanged. Extension sends $u:M\to M'$ to $1_S\otimes u:S\otimes_RM\to S\otimes_RM'$.
