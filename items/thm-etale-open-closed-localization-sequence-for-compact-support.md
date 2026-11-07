---
id: thm-etale-open-closed-localization-sequence-for-compact-support
kind: theorem
title: "Étale Open–Closed Localization Sequence for Compact Support"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 12
deps:
  - def-derived-category-of-etale-sheaves
  - def-derived-direct-image-with-proper-supports
  - def-compactly-supported-etale-cohomology
  - lem-etale-module-sheaves-have-exact-conservative-stalks-and-enough-injectives
  - thm-proper-base-change-and-finiteness-for-constructible-torsion-etale-sheaves
  - def-open-immersion-schemes
  - def-closed-immersion-schemes
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "J. S. Milne, *Lectures on Étale Cohomology*, version 2.21"
      url: "https://jmilne.org/math/CourseNotes/LEC.pdf"
      locator: "Chapter I §8, Proposition 8.15 and full stalkwise proof, pp. 62–63; §14.5 compact-support long exact sequence"
    - title: "The Stacks Project, *Étale Cohomology*"
      url: "https://stacks.math.columbia.edu/download/etale-cohomology.pdf"
      locator: "Tag 03PZ, extension by zero and open-closed localization for étale sheaves"
verification:
  precheck: pending
---

## Statement

Let $X$ be a separated finite-type scheme over a field, let $j:U\hookrightarrow X$ be an open immersion with closed complement $i:Z\hookrightarrow X$, and let $K$ be a bounded constructible $\overline{\mathbb Q}_\ell$-complex on the small étale site of $X$, with $\ell$ invertible in the field. The open–closed localization triangle induces a natural long exact sequence
$$\cdots\longrightarrow H_c^r(U,K|_U)\longrightarrow H_c^r(X,K)\longrightarrow H_c^r(Z,K|_Z)\longrightarrow H_c^{r+1}(U,K|_U)\longrightarrow\cdots.$$
For a constructible $\overline{\mathbb Q}_\ell$-sheaf $\mathcal F$ placed in degree zero, the sheaf-level sequence underlying this triangle is short exact:
$$0\longrightarrow j_!j^*\mathcal F\longrightarrow\mathcal F\longrightarrow i_*i^*\mathcal F\longrightarrow0.$$

## Statement references

[[def-derived-category-of-etale-sheaves|Derived category of étale sheaves]]

[[def-derived-direct-image-with-proper-supports|Derived direct image with proper supports]]

[[def-compactly-supported-etale-cohomology|Compactly supported étale cohomology]]

[J. S. Milne, *Lectures on Étale Cohomology*, Chapter I, §8, Proposition 8.15](https://jmilne.org/math/CourseNotes/LEC.pdf)


## Facts & Assumptions

**Given:** The field, open–closed decomposition, coefficient prime, and constructible complex in the Statement.

## Proof status

The torsion-sheaf localization sequence follows from the exact stalk sequence for $j_!j^*F\to F\to i_*i^*F$; Milne I.8, Proposition 8.15 checks the open and closed stalk cases. This batch has not supplied the derived $\overline{\mathbb Q}_\ell$ passage, including compatibility of the open–closed triangle with the adic inverse system and the proper closed-pushforward stalk comparison. The current proper-base-change supplier is itself proof:not-supplied. The statement is retained as the exact needed interface and escalated; the topological sheaf result is not substituted for the étale result.
