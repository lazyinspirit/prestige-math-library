---
id: thm-finiteness-of-compactly-supported-etale-cohomology-for-curves-over-algebraically-closed-fields
kind: theorem
title: "Finiteness of compactly supported l-adic cohomology for curves over algebraically closed fields"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 12
deps:
  - def-compactly-supported-etale-cohomology
  - def-constructible-l-adic-sheaf-on-a-scheme
  - def-lisse-l-adic-sheaf-on-a-scheme
  - def-smooth-curve-over-finite-field
justified_by: []
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "J. S. Milne, Lectures on Étale Cohomology, Chapter I §§18–19 and §24"
      url: https://jmilne.org/math/CourseNotes/LEC.pdf
    - title: "Grothendieck et al., SGA 5, Exposé X, §§4–7 (full text edition)"
      url: https://grothendiecksga.com/read/sga5/en/X-4.html
verification:
  precheck: pending
---
## Statement

Let $k$ be an algebraically closed field of characteristic $p>0$, let $U$ be a separated finite-type smooth curve over $k$, let $\ell\ne p$, and let $\mathcal F$ be a constructible finite-rank $\mathbb Q_\ell$-sheaf on $U$. Then $H_c^i(U,\mathcal F)$ is finite-dimensional over $\mathbb Q_\ell$ for every integer $i$, and it vanishes for $i<0$ and $i>2$.

## Statement references

[[def-compactly-supported-etale-cohomology|Compactly supported étale cohomology]]

[[def-constructible-l-adic-sheaf-on-a-scheme|Constructible rational adic sheaves]]

[Milne, *Lectures on Étale Cohomology*, Chapter I §§18–19](https://jmilne.org/math/CourseNotes/LEC.pdf)

[SGA 4, Exposé XIV, finiteness and cohomological dimension for curves](https://stacks.math.columbia.edu/download/etale-cohomology.pdf)

## Facts & Assumptions

**Given:** The algebraically closed field, smooth curve, prime $\ell\ne p$, and constructible coefficient sheaf in the Statement.

[F1] [[def-compactly-supported-etale-cohomology]]: compactly supported cohomology is the cohomology of the derived direct image with proper support.

The finite-field theorem currently supplied by batch 25 does not imply this algebraically closed-field assertion, and a complete local proof has not been supplied; this theorem is escalated rather than treated as proved.
