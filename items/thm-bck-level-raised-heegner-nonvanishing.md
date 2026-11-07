---
id: thm-bck-level-raised-heegner-nonvanishing
kind: theorem
title: "Level-Raised Heegner Classes Are Nonzero Modulo p"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 30
deps:
  - def-bipartite-heegner-euler-system
  - thm-bck-bipartite-heegner-system-and-reciprocity-laws
  - thm-bck-howard-bipartite-euler-system-bound
justified_by: []
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "A. Burungale, F. Castella, and C.-H. Kim, A Proof of Perrin-Riou’s Heegner Point Main Conjecture"
      url: "https://arxiv.org/pdf/1908.09512"
      locator: "§3 Proposition 3.7, printed pp. 10–11."
verification: {}
---

## Statement

Let $f$ be the modular form and $K,p$ the imaginary quadratic and prime data of the bipartite system, and assume Hypothesis $\heartsuit$: the residual representation is ramified at every $\ell\parallel N^+$, at every $\ell\mid N^-$ with $\ell\equiv\pm1\pmod p$, and, if $N$ is not squarefree, either at a prime dividing $N^-$ or at at least two primes $\ell\parallel N^+$. Assume also that the residual representation $\rho_0$ is surjective and $p$ is non-anomalous, meaning $a_p\not\equiv1\pmod{\mathfrak p}$ when $p$ splits in $K$ and $a_p^2\not\equiv1\pmod{\mathfrak p}$ when $p$ is inert. Then the negative-vertex system $\lambda$ has nonzero image in $\Lambda/\mathfrak p\Lambda$.

## Statement references

[Burungale–Castella–Kim, *A Proof of Perrin-Riou’s Heegner Point Main Conjecture*, §3 Proposition 3.7](https://arxiv.org/pdf/1908.09512)

## Authoring status

The exact proposition assumes the Zhang level-raising nonvanishing argument. The source's proof is by induction on the residual Selmer dimension and uses p-adic $L$-values of level-raised forms; that argument has not been reconstructed locally. This established claim is escalated, not treated as proved by the bipartite bound alone.
