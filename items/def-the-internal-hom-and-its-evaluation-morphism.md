---
id: def-the-internal-hom-and-its-evaluation-morphism
kind: definition
title: "The internal hom and its evaluation morphism"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-left-closed-and-right-closed-monoidal-category, def-adjunct-and-transposition-under-an-adjunction]
landmark: false
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "G. M. Kelly, Basic Concepts of Enriched Category Theory, equations (1.23) and (1.24)"
      url: "https://tac.mta.ca/tac/reprints/articles/10/tr10.pdf"
    - title: "Emily Riehl, Category Theory in Context, 2nd ed., Section 4.4"
      url: "https://emilyriehl.github.io/files/context.pdf"
---

## Definition

Assume $\mathcal C$ is right closed. For objects $X,Y$, the **right internal hom** $[X,Y]$ is the value at $Y$ of the chosen right adjoint $[X,-]$ to $-\otimes X$ ([[def-left-closed-and-right-closed-monoidal-category]]).

The **evaluation morphism**

$$\operatorname{ev}_{X,Y}:[X,Y]\otimes X\to Y$$

is the counit component at $Y$ of the adjunction $-\otimes X\dashv [X,-]$. For every object $A$, the adjunction yields the transposition bijection

$$\mathcal C(A\otimes X,Y)\cong\mathcal C(A,[X,Y]),$$

which sends a morphism $u:A\otimes X\to Y$ to its adjunct $u^\flat:A\to[X,Y]$ and sends $v:A\to[X,Y]$ to its inverse transpose $v^\sharp:A\otimes X\to Y$ in the sense of [[def-adjunct-and-transposition-under-an-adjunction]].

If $\mathcal C$ is left closed, the **left internal hom** $\langle X,Y\rangle$ and its evaluation map

$$\widetilde{\operatorname{ev}}_{X,Y}:X\otimes\langle X,Y\rangle\to Y$$

are defined dually from the adjunction $X\otimes-\dashv\langle X,-\rangle$.
