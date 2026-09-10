---
id: def-kac-moody-category-o
kind: definition
title: "Kac moody category o"
status: draft
origin: pipeline
deps: ["prop-kac-moody-root-spaces-are-finite-dimensional", "def-kac-moody-root-lattice-height-and-positive-cone"]
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
    - title: "Kleshchev, Lectures on Infinite Dimensional Lie Algebras — §9.1, pp.116–118"
      url: https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf
---

## Definition

A $\mathfrak g(A)$-module is a **weight module** if $V=\bigoplus_{\mu\in\mathfrak h^*}V_\mu$, where $V_\mu=\{v:hv=\mu(h)v\text{ for every }h\in\mathfrak h\}$. The category $\mathcal O$ consists of weight modules with finite-dimensional weight spaces and support in a finite union $\bigcup_{j=1}^s(\lambda_j-Q^+)$. Morphisms are $\mathfrak g$-linear maps. No finite generation or finite length is included in this convention.

Here $Q^+$ and its order are from [[def-kac-moody-root-lattice-height-and-positive-cone]], and root spaces are those of [[prop-kac-moody-root-spaces-are-finite-dimensional]]. For fixed $\mu$, the weights above $\mu$ in each cone have the form $\mu+\sum k_i\alpha_i$ with $0\le k_i\le m_i$ when $\lambda_j-\mu=\sum m_i\alpha_i\in Q^+$. Thus only finitely many occur. In particular every $v\in V$ is killed by all but finitely many positive root spaces, since it has finite weight support. A submodule is a sum of its weight intersections: on each vector finite Lagrange interpolation in one Cartan operator separates its distinct weights. The quotient therefore also decomposes into the quotient weight spaces. Both inherit the finite bounds and finite cone support. The zero module is allowed with $s=0$.

## Sources

Source comparison: [Kleshchev](https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf), §9.1, pp.116–118.
