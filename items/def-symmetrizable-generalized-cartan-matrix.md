---
id: def-symmetrizable-generalized-cartan-matrix
kind: definition
title: "Symmetrizable generalized cartan matrix"
status: draft
origin: pipeline
deps: ["def-generalized-cartan-matrix"]
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
    - title: "Kleshchev, Lectures on Infinite Dimensional Lie Algebras — §2.1, pp.26–27"
      url: https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf
---

## Definition

A GCM $A$ is **symmetrizable** if there is a diagonal matrix $D=\operatorname{diag}(d_1,\ldots,d_n)$ with real $d_i>0$ such that $B=DA$ is symmetric, equivalently $d_i a_{ij}=d_j a_{ji}$ for all $i,j$. We fix one such $D$ when using a form.

The convention for GCM is [[def-generalized-cartan-matrix]]. One may take the $d_i$ positive rational, or positive integer after scaling. Indeed, in each connected component of the nonzero-entry graph, fix its least index $v$ and replace $d_i$ by $d_i/d_v$. Along an edge $ij$, $d_j/d_i=a_{ij}/a_{ji}$ is positive rational. A finite path from $v$ to $i$ therefore gives rational $d_i/d_v$; its value is independent of the path because the original real symmetrizer supplies the same ratio. Multiplication by the finite product of denominators gives integers. Isolated vertices are assigned 1. Kleshchev writes $A=\operatorname{diag}(\varepsilon_i)B$; our convention has $d_i=\varepsilon_i^{-1}$.

## Sources

Source comparison: [Kleshchev](https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf), §2.1, pp.26–27.
