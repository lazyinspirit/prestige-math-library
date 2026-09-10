---
id: def-real-and-imaginary-kac-moody-roots
kind: definition
title: "Real and imaginary kac moody roots"
status: draft
origin: pipeline
deps: ["prop-the-weyl-group-preserves-roots-and-root-multiplicities"]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "Kleshchev, Lectures on Infinite Dimensional Lie Algebras — §5.1, pp.68–69, and §5.3, pp.73–74"
      url: https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf
---

## Definition

For the root system of $\mathfrak g(A)$, define $\Delta^{\mathrm{re}}=W\Pi$, where $\Pi=\{\alpha_1,\ldots,\alpha_n\}$. Define $\Delta^{\mathrm{im}}=\Delta\setminus\Delta^{\mathrm{re}}$. These are the **real** and **imaginary** roots. Each inherits its positive or negative sign from $\Delta\subset Q^+\cup(-Q^+)$.

By [[prop-the-weyl-group-preserves-roots-and-root-multiplicities]], $W\Pi$ consists of roots. The two classes partition $\Delta$ and exclude zero. The labels denote orbit membership; they do not define roots by the sign of a squared length, and make sense without a symmetrizer.

## Sources

Source comparison: [Kleshchev](https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf), §5.1, pp.68–69, and §5.3, pp.73–74.
