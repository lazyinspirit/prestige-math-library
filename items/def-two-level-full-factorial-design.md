---
id: def-two-level-full-factorial-design
kind: definition
title: "Two-level full factorial designs and coded effects"
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 0
deps: []
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Gary W. Oehlert, A First Course in Design and Analysis of Experiments, Chapter 8, §§8.2 and 8.5"
      url: "https://users.stat.umn.edu/~gary/book/fcdae.pdf"
    - title: "NIST/SEMATECH e-Handbook of Statistical Methods, §5.3.3.3.1, Two-level full factorial designs"
      url: "https://www.itl.nist.gov/div898/handbook/pri/section3/pri3331.htm"
    - title: "NIST/SEMATECH e-Handbook of Statistical Methods, §5.3.3.3.2, Full factorial example"
      url: "https://www.itl.nist.gov/div898/handbook/pri/section3/pri3332.htm"
---

## Definition

Fix an integer $k\ge1$ and write $[k]=\{1,\ldots,k\}$. A **two-level full factorial design** has run set
$$\mathcal X_k=\{-1,+1\}^{[k]},$$
so every one of the $2^k$ sign combinations occurs once. For a run $x\in\mathcal X_k$ and a subset $A\subseteq[k]$, define its sign column by
$$x_A=\prod_{j\in A}x_j,$$
where the empty product is $x_\varnothing=1$. The design matrix $X$ has one row for each run, one column for each subset of factors, and entry $X_{x,A}=x_A$. Any fixed ordering of the runs and subsets may be used.

The run set and subset index set both have $2^k$ elements: a subset $A$ corresponds to the sign vector whose $j$th coordinate is $+1$ exactly when $j\in A$. Thus $X$ is a square $2^k\times2^k$ matrix.

For a real response table $y=(y_x)_{x\in\mathcal X_k}$, define its normalized factorial coefficient by
$$\widehat\beta_A(y)=2^{-k}\sum_{x\in\mathcal X_k}x_Ay_x.$$
For nonempty $A$, put $G_{A,+}=\{x:x_A=+1\}$ and $G_{A,-}=\{x:x_A=-1\}$. Both sets are nonempty: the all-positive run lies in $G_{A,+}$, and flipping any coordinate in $A$ gives a run in $G_{A,-}$. Define the factorial effect on this response scale as
$$\widehat\tau_A(y)=\frac{1}{|G_{A,+}|}\sum_{x\in G_{A,+}}y_x-\frac{1}{|G_{A,-}|}\sum_{x\in G_{A,-}}y_x.$$

