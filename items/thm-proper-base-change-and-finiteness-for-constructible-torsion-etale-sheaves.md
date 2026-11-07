---
id: thm-proper-base-change-and-finiteness-for-constructible-torsion-etale-sheaves
kind: theorem
title: "Proper base change and finiteness for constructible torsion étale sheaves"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 6
deps:
  - def-etale-sheaf-of-finite-modules
  - def-constructible-etale-sheaf-of-finite-modules
  - def-proper-morphism
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "J. S. Milne, Lectures on Étale Cohomology, Chapter I, Theorems 17.7 and 17.10"
      url: "https://jmilne.org/math/CourseNotes/LEC.pdf"
    - title: The Stacks Project, Étale Cohomology, Proper base change
      url: https://stacks.math.columbia.edu/download/etale-cohomology.pdf
      locator: Proper base change theorem for arbitrary torsion abelian sheaves and arbitrary base change
    - title: Grothendieck et al., SGA 4, Exposé XIV, Section 1
      url: https://grothendiecksga.com/read/sga4/en/XIV-1.html
      locator: Theorem 1.1, proper direct-image constructibility for constructible Z/n modules
---

## Statement

Let $f:X\to S$ be a proper morphism of finite type between Noetherian schemes, let $n\geq1$ be an integer, and let $\mathcal F$ be a constructible sheaf of $\mathbb Z/n\mathbb Z$-modules on $X_{\acute e t}$. For each integer $r\ge0$, the sheaf $R^r f_*\mathcal F$ is constructible, and for every geometric point $\bar s\to S$ its stalk is canonically $H^r(X_{\bar s},\mathcal F|_{X_{\bar s}})$. For every morphism $g:T\to S$, form $X'=X\times_S T$ with projections $f':X'\to T$ and $g':X'\to X$. Then the canonical proper-base-change map $g^*R^r f_*\mathcal F\to R^r f'_*g'^*\mathcal F$ is an isomorphism for every $r$.

## Statement references

[Milne, *Lectures on Étale Cohomology*, Chapter I, Theorem 17.7, p. 116](https://jmilne.org/math/CourseNotes/LEC.pdf)

[Milne, *Lectures on Étale Cohomology*, Chapter I, Theorem 17.10, p. 117](https://jmilne.org/math/CourseNotes/LEC.pdf)

## Remarks

No invertibility hypothesis on $n$ is required for the proper-base-change or relative constructibility assertions here. Invertibility is a separate hypothesis in the duality and prime-to-characteristic cohomological-dimension results. This full torsion interface is needed by compactification independence for arbitrary constructible torsion sheaves. The source theorems are established, but their complete geometric proofs remain local authoring obligations in this draft; these references are not external theorem inputs.
