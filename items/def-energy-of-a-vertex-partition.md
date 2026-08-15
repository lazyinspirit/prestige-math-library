---
id: def-energy-of-a-vertex-partition
kind: definition
title: "The mean-square density, or energy, of a vertex partition"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-edge-density-between-vertex-sets, def-regular-and-equitable-vertex-partition]
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Y. Zhao, Graph Theory and Additive Combinatorics, Definition 2.1.10"
      url: "https://yufeizhao.com/gtacbook/2.pdf"
    - title: "D. Conlon and J. Fox, Graph removal lemmas, sec. 2.1"
      url: "https://arxiv.org/pdf/1211.3487"
pipeline_run: null
---

## Definition

Let $G$ have order $n>0$. For vertex sets $X,Y$ and partitions $\mathcal A$ of $X$, $\mathcal B$ of $Y$ into nonempty sets, define their **pair energy** by
$$q(\mathcal A,\mathcal B):=\frac1{n^2}\sum_{A\in\mathcal A}\sum_{B\in\mathcal B}|A||B|d(A,B)^2.$$
For a vertex partition $\mathcal P$ of $G$ ([[def-regular-and-equitable-vertex-partition]]), its **energy**, or **mean-square density**, is
$$q(\mathcal P):=q(\mathcal P,\mathcal P)=\frac1{n^2}\sum_{A,B\in\mathcal P}|A||B|d(A,B)^2,$$
using the ordered-pair density of [[def-edge-density-between-vertex-sets]]. The empty partition of the null graph has energy $0$.
