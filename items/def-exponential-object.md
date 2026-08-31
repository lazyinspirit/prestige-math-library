---
id: def-exponential-object
kind: definition
title: "Exponential object"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-products-and-coproducts]
landmark: true
verification:
  audited: 2026-09-01
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "S. Mac Lane, Categories for the Working Mathematician, 2nd ed., IV.6"
      url: "https://math.mit.edu/~hrm/palestine/maclane-categories.pdf"
    - title: "Emily Riehl, Category Theory in Context, 2nd ed., Definition 4.4.10"
      url: "https://emilyriehl.github.io/files/context.pdf"
---

## Definition

Let $\mathcal C$ be a category with binary products ([[def-products-and-coproducts]]). For objects $B,C$, an **exponential object** of $C$ by $B$ is an object $C^B$ together with an evaluation morphism

$$\operatorname{ev}:C^B\times B\to C$$

such that for every object $A$ and every morphism $f:A\times B\to C$ there is a unique morphism

$$\lambda f:A\to C^B$$

with

$$\operatorname{ev}\circ(\lambda f\times 1_B)=f.$$

If exponential objects $D^B$ are chosen for every object $D$ and these choices are assembled functorially, their universal properties say equivalently that $D\mapsto D^B$ is right adjoint to $-\times B$; in particular its value at $C$ is $C^B$. The existence of the single exponential $C^B$ alone does not assert that this right adjoint exists on every object.
