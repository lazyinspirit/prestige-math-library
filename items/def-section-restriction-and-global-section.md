---
id: def-section-restriction-and-global-section
kind: definition
title: "Sections, restrictions, and global sections of a presheaf"
status: draft
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-presheaf-on-topological-space]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Sheaves on Spaces, Section 3"
      url: "https://stacks.math.columbia.edu/download/sheaves.pdf"
---

## Definition

Let $\mathcal F$ be a presheaf on a topological space $X$.

An element of $\mathcal F(U)$ is called a **section of $\mathcal F$ over $U$**.
We also write
$$\Gamma(U,\mathcal F):=\mathcal F(U).$$

If $V \subseteq U$ and $s \in \mathcal F(U)$, its **restriction to $V$** is
$$s|_V:=\rho^U_V(s)\in\mathcal F(V).$$

A **global section** of $\mathcal F$ is a section over the whole space:
$$\Gamma(X,\mathcal F)=\mathcal F(X).$$

The presheaf identities imply
$$s|_U=s,\qquad (s|_V)|_W=s|_W\quad\text{for }W\subseteq V\subseteq U.$$
