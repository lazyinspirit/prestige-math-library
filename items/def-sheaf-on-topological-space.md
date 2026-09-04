---
id: def-sheaf-on-topological-space
kind: definition
title: "A sheaf on a topological space"
status: published
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-presheaf-on-topological-space]
verification:
  audited: 2026-09-04
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Sheaves on Spaces, Definition 7.1"
      url: "https://stacks.math.columbia.edu/download/sheaves.pdf"
    - title: "Ravi Vakil, Foundations of Algebraic Geometry, Class 3"
      url: "https://math.stanford.edu/~vakil/0506-216/216Ajun2807.pdf"
---

## Definition

Let $\mathcal F$ be a presheaf on a topological space $X$. We say that
$\mathcal F$ is a **sheaf** if for every open set $U \subseteq X$ and every
open cover $U=\bigcup_{i\in I}U_i$, including the empty cover of
$\varnothing$, the following two conditions hold.

**Locality.** If $s,t\in\mathcal F(U)$ satisfy
$$s|_{U_i}=t|_{U_i}\qquad\text{for all }i\in I,$$
then $s=t$.

**Gluing.** If sections $s_i\in\mathcal F(U_i)$ satisfy
$$s_i|_{U_i\cap U_j}=s_j|_{U_i\cap U_j}\qquad\text{for all }i,j\in I,$$
then there exists $s\in\mathcal F(U)$ such that
$$s|_{U_i}=s_i\qquad\text{for all }i\in I.$$

By locality, such a section $s$ is automatically unique. Thus a sheaf is
exactly a presheaf whose compatible local sections glue uniquely.
