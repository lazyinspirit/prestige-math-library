---
id: def-qc-tqc-modularity
kind: definition
title: Modular nondegeneracy
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps: [def-qc-tqc-ribbon-modular-data, def-braiding]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories, author final text"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
      locator: "§8.20, Definition 8.20.1 and Theorem 8.20.7, printed pp. 239–243: centralizing objects, centralizers, and nondegeneracy iff the trivial centralizer is Vec; compare §8.13, Definition 8.13.4 for the S-matrix terminology."
---

## Definition

Let $\mathcal C$ be a unitary ribbon fusion category. An object $x$ is
**transparent** if for every simple object $y$ the double braiding

$$c_{y,x}\circ c_{x,y}:x\otimes y\longrightarrow x\otimes y$$

is the identity. By naturality and additivity, the double braiding on a finite
direct sum is block diagonal with the double braidings on its simple summands;
therefore an object is transparent exactly when each simple summand is
transparent. Finite direct sums include the empty sum, so the zero object is
transparent. The category is **modular**, or **nondegenerate**, when its
transparent simple objects consist only of the tensor unit, equivalently when
its transparent objects are exactly the finite direct sums of the tensor unit.
This condition is additional to the existence of fusion spaces and a unitary
braid action.

