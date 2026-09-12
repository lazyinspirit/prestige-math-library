---
id: "def-g-acyclic-object-for-a-left-exact-functor"
kind: "definition"
title: "G-acyclic object for a left-exact functor"
deps: ["def-right-derived-object-relative-to-injective-resolution-data", "def-left-exact-and-right-exact-functor"]
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Stacks Project, Tag 015H"
      url: "https://stacks.math.columbia.edu/download/derived.pdf"
verification:
  audited: 2026-09-13
status: published
origin: "pipeline"
pipeline_run: "phase-2-next-17"
---

## Definition

Let $\mathcal B$ and $\mathcal C$ be abelian categories, let $G:\mathcal B\to\mathcal C$ be additive and [[def-left-exact-and-right-exact-functor|left exact]], and let $X\in\mathcal B$. Fix a supplied injective resolution datum $I$ whose domain contains $X$. The object $X$ is **$G$-acyclic relative to $I$** if $R_I^pG(X)=0$ for every integer $p>0$, where $R_I^pG(X)$ is defined by [[def-right-derived-object-relative-to-injective-resolution-data]]. A complex is **termwise $G$-acyclic relative to supplied data** if each term $X^n$ lies in the domain of a specified datum $I_n$ and satisfies $R_{I_n}^pG(X^n)=0$ for every $p>0$.

The condition imposes no vanishing on $G(X)$, which is canonically isomorphic to $R_I^0G(X)$ by left exactness and the resolution augmentation; it does not assert literal equality of these objects. It is distinct from exactness of a complex: exactness concerns its differentials, whereas termwise $G$-acyclicity concerns the higher derived objects of its individual terms. The zero object with its zero resolution is $G$-acyclic relative to that datum; a complex with no terms satisfies termwise acyclicity vacuously. No choice of a family of resolutions or independence assertion is part of this definition.
