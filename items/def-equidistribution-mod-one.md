---
id: def-equidistribution-mod-one
kind: definition
title: Equidistribution modulo one
status: draft
origin: pipeline
deps: [def-circle-rotation-and-doubling-map]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Charles Walkden, Ergodic Theory lecture notes"
      url: "https://personalpages.manchester.ac.uk/staff/Charles.Walkden/ergodic-theory/ergodic_theory.pdf"
      locator: "§1.1, equidistribution convention; §8.6, printed pp. 80–81"
---

## Definition

A real sequence $(x_n)_{n\geq0}$ is **equidistributed modulo one** if, for
every $0\leq a\leq c\leq1$, the frequencies indexed by integers $n\geq1$
satisfy

$$\frac1n\#\{0\leq k<n:\{x_k\}\in[a,c)\}\longrightarrow c-a.$$

Here $\{x\}=x-\lfloor x\rfloor\in[0,1)$, and the half-open convention makes
the representative and both endpoints unambiguous.  It includes the empty
interval $a=c$ and the whole interval $[0,1)$.
