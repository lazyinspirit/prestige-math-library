---
id: def-productive-and-creative-set
kind: definition
title: "Productive and creative sets"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-numbering-of-partial-computable-functions]
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Robert I. Soare, Turing Computability: Theory and Applications"
      url: "https://www.scribd.com/document/620633428/Theory-and-Applications-of-Computability-In-cooperation-with-the-association-Computability-in-Europe-Robert-I-Soare-Turing-Computability-Theory"
---

## Definition

Fix a numbering $(\varphi_e)_{e\in\mathbb N}$ and write
$$ W_e:=\operatorname{dom}(\varphi_e). $$

A set $P\subseteq\mathbb N$ is **productive** when there exists a partial
computable function
$$ p:\mathbb N\rightharpoonup\mathbb N $$
such that for every $e$,
$$ W_e\subseteq P \implies p(e)\mathbin\downarrow\text{ and }p(e)\in P\setminus W_e. $$
Such a function $p$ is called a **productive function** for $P$.

A set $C\subseteq\mathbb N$ is **creative** when:

- $C=W_e$ for some $e$, so $C$ is computably enumerable, and
- its complement $\mathbb N\setminus C$ is productive.

## Remarks

- Productivity means every c.e. subset of $P$ can be effectively diagonalized
  against from inside $P$.

- For the fixed acceptable machine coding used later, the standard
  normalization of productive functions permits the witness to be chosen total
  and one-one. Whenever a later proof needs that strengthened normal form, it
  says so explicitly rather than building totality and injectivity into the
  definition.

- Creativity packages two facts at once: effective enumerability of $C$ and
  productive richness of its complement.
