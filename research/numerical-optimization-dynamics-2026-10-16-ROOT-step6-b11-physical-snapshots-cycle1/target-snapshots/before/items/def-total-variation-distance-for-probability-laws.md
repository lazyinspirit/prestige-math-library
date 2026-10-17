---
id: def-total-variation-distance-for-probability-laws
kind: definition
title: "Total variation distance for probability laws"
status: published
origin: pipeline
landmark: false
deps:
  - def-probability-measure
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-10-02
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
sources:
  references:
    - title: "Levin, Peres and Wilmer, Markov Chains and Mixing Times, second edition, §4.1 and §21.3"
      url: https://pages.uoregon.edu/dlevin/MARKOV/mcmt2e.pdf
    - title: "Aldous–Chewi, Probability Theory, Lectures 13–15"
      url: https://www.stat.berkeley.edu/~aldous/205B/chewi_notes.pdf
---

## Definition

Let $\mu$ and $\nu$ be probability measures on the same measurable space
$(E,\mathcal E)$ ([[def-probability-measure]]). Their **total variation
distance** is

$$\lVert\mu-\nu\rVert_{\mathrm{TV}}:=\sup_{A\in\mathcal E}\bigl|\mu(A)-\nu(A)\bigr| .$$

For every event $A$ the difference $\mu(A)-\nu(A)$ is a real number in
$[-1,1]$, because both measures have total mass one; hence the set being
maximized is a nonempty subset of $[0,1]$ and the supremum lies in $[0,1]$.
The empty event and the whole space give the values $0$ and
$|\mu(E)-\nu(E)|=0$, so the distance is zero when $\mu=\nu$, and it is symmetric
in $\mu$ and $\nu$. This convention carries no factor $1/2$ in the supremum;
it is therefore not the total variation norm of the signed measure $\mu-\nu$,
which is twice the quantity above when that signed measure is considered on a
measurable space where the decomposition is attained. On a countable state
space with its power-set sigma-algebra the supremum equals the half-$\ell^1$
sum $\tfrac12\sum_{x\in E}|\mu(\{x\})-\nu(\{x\})|$; that identity is proved in
[[lem-total-variation-half-l1-formula-on-a-countable-space]], not assumed here.
