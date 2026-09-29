---
id: def-euler-characteristic-coherent-sheaf
kind: definition
title: "Euler characteristic of a coherent sheaf"
status: published
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - cor-projective-cohomology-finite-dimensional-field
  - def-axiom-of-choice
  - def-coherent-module-scheme
  - def-dimension
  - def-field
  - def-proper-morphism
  - def-sheaf-cohomology-derived-global-sections
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  references:
    - title: "The Stacks Project, Cohomology of Schemes, Chapter 30, Sections 30.2-30.22"
      url: "https://stacks.math.columbia.edu/download/coherent.pdf"
    - title: "Ravi Vakil, The Rising Sea (29 August 2022), Sections 19.1, 19.6, 19.9, 28.1-28.2"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf"
---

## Definition

Assume the Axiom of Choice, inherited from the finiteness and vanishing
corollary cited below ([[def-axiom-of-choice]]). Let $k$ be a field
([[def-field]]), let $X$ be a scheme proper over $k$
([[def-proper-morphism]]), and let $\mathcal F$ be a coherent
$\mathcal O_X$-module ([[def-coherent-module-scheme]]) with sheaf cohomology
groups $H^q(X,\mathcal F)$ ([[def-sheaf-cohomology-derived-global-sections]]).

By [[cor-projective-cohomology-finite-dimensional-field]] each group
$H^q(X,\mathcal F)$ is a finite-dimensional $k$-vector space
([[def-dimension]]) and only finitely many of the groups are nonzero: if $X$
admits a finite affine open cover with $n\ge0$ members, then
$H^q(X,\mathcal F)=0$ for every $q\ge n$. Consequently the alternating sum
$$\chi(X,\mathcal F):=\sum_{q\ge0}(-1)^q\dim_kH^q(X,\mathcal F)$$
has only finitely many nonzero terms and defines an integer, the **Euler
characteristic** of $\mathcal F$ on $X$. Equivalently, for any finite affine
open cover of $X$ with $n$ members one has
$$\chi(X,\mathcal F)=\sum_{q=0}^{n-1}(-1)^q\dim_kH^q(X,\mathcal F),$$
the value being independent of the cover because the definition uses only the
cohomology groups.

If $X=\varnothing$ then all groups $H^q(X,\mathcal F)$ vanish, the cover has
$n=0$ members, and we set $\chi(X,\mathcal F)=0$; this is the empty sum in the
displayed formula. The zero sheaf $\mathcal F=0$ likewise has
$\chi(X,0)=0$.
