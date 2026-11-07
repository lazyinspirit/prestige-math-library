---
id: thm-tilting-equivalence-for-perfectoid-k-algebras
kind: theorem
title: "Tilting equivalence for perfectoid Banach algebras"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 4
deps:
  - def-perfectoid-k-algebra
  - def-perfectoid-field-and-its-tilt
  - thm-perfectoid-field-tilt-is-perfectoid
  - thm-bms-perfectoid-ring-and-perfectoid-tate-algebra-agree
  - def-dependent-choice
justified_by: []
provenance:
  statement: ai-altered
  proof: not-supplied
sources:
  references:
    - title: "Peter Scholze, Perfectoid Spaces, Theorem 5.2"
      url: "https://www.numdam.org/article/PMIHES_2012__116__245_0.pdf"
    - title: "Matthew Morrow, Adic and perfectoid spaces, §6"
      url: "https://www.imo.universite-paris-saclay.fr/~matthew.morrow/Perf%20spaces%20IMJ-PRG%20final.pdf"
---

## Statement

Assume Dependent Choice. Let $K$ be a perfectoid field with tilt $K^\flat$, and choose $\varpi\in K^\circ$ with $|p|_K<|\varpi|_K<1$. For a perfectoid Banach $K$-algebra $R$, the ring
$$R^{\flat\circ}=\varprojlim_{x\mapsto x^p}R^\circ/\varpi R^\circ$$
is the inverse limit of rings of characteristic $p$ under Frobenius; the associated multiplicative map is $x^\sharp=\lim_n\widetilde x_n^{p^n}$ for lifts $\widetilde x_n\in R^\circ$ of the coordinates. With its complete topology, $R^\flat=R^{\flat\circ}[1/\varpi^\flat]$ is a perfectoid Banach $K^\flat$-algebra, where $\varpi^\flat\in K^{\flat\circ}$ is any field-tilt element with $|\varpi^\flat|_{K^\flat}=|\varpi|_K$; such an element exists by equality of value groups, and its sharp has the same absolute value as $\varpi$. An exact equality $(\varpi^\flat)^\sharp=\varpi$ is not required. The functor $R\mapsto R^\flat$ is an equivalence from the category of perfectoid Banach $K$-algebras and continuous $K$-algebra homomorphisms to the category of perfectoid Banach $K^\flat$-algebras and continuous $K^\flat$-algebra homomorphisms.

## Statement references

[Peter Scholze, *Perfectoid Spaces*, Theorem 5.2](https://www.numdam.org/article/PMIHES_2012__116__245_0.pdf)

[Matthew Morrow, *Adic and perfectoid spaces*, §6](https://www.imo.universite-paris-saclay.fr/~matthew.morrow/Perf%20spaces%20IMJ-PRG%20final.pdf)

## Remaining local proof obligations

If $\varpi_0=(\varpi^\flat)^\sharp$ has $|\varpi_0|_K=|\varpi|_K$, then $\varpi_0/\varpi$ is a unit of $K^\circ$. Hence $\varpi_0K^\circ=\varpi K^\circ$ and $\varpi_0R^\circ=\varpi R^\circ$, so this scalar convention retains the arbitrary originally chosen quotient. Equality of value groups supplies the tilt element, while an exact sharp equality would require a compatible sequence of exact $p$-power roots of the originally chosen scalar.

Scholze's Theorem 5.2 proof invokes almost-flatness and almost-cotangent-complex deformation results from Gabber–Ramero, *Almost Ring Theory*, Theorems 2.5.36 and 3.5.28, together with Illusie's cotangent-complex results. Those complete local suppliers have not been reconstructed. The BMS comparison bridge is also recorded as escalated above. No equivalence proof is supplied here, so this item remains escalated.

