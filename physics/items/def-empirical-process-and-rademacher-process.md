---
id: def-empirical-process-and-rademacher-process
kind: definition
title: "Empirical, centered, and Rademacher processes"
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 0
deps:
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
  - def-identically-distributed-and-iid-random-variables
  - def-independent-random-elements
  - def-probability-measure
  - def-random-element-and-real-random-variable
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "David Pollard, Empirical Processes: Theory and Applications, Chapter 2"
      url: "http://www.stat.yale.edu/~pollard/Books/Iowa/Iowa-notes.pdf"
    - title: "David Pollard, Probability Tools, Tricks, and Miracles, 2026 manuscript, Chapter 13"
      url: "http://www.stat.yale.edu/~pollard/Books/Pttm/Pttm26-06-22.pdf"
    - title: "Jon A. Wellner, Empirical Processes: Theory and Applications, Chapter 1"
      url: "https://faculty.washington.edu/jonw/RESEARCH/TALKS/Delft/emp-proc-delft-big.pdf"
---

## Definition

Let $(\mathcal X,\mathcal A,P)$ be a probability space, let $n\ge1$ be an integer, and let $Z_1,\ldots,Z_n$ be IID random elements with law $P$. For a class $\mathcal F$ of measurable, integrable real-valued functions on $\mathcal X$, write

$$Pf:=\int f\,dP,\qquad P_nf:=\frac1n\sum_{i=1}^n f(Z_i),\qquad \mathbb G_n(f):=\sqrt n\,(P_nf-Pf).$$

The map $f\mapsto P_nf-Pf$ is the centered empirical process, and $\mathbb G_n$ is its $\sqrt n$-scaled version. More generally, for independent processes $X_1(t),\ldots,X_n(t)$ whose marginal expectations are finite for each index $t\in T$, the centered process sum is

$$S_n(t):=\sum_{i=1}^n\bigl(X_i(t)-\mathbb E X_i(t)\bigr),\qquad t\in T.$$

On an auxiliary probability-space extension, let $\sigma_1,\ldots,\sigma_n$ be independent signs, each taking $+1$ and $-1$ with probability $1/2$, independent of the observations. The empirical Rademacher process is

$$R_n(f):=\sum_{i=1}^n\sigma_i f(Z_i),\qquad f\in\mathcal F.$$

The centered Rademacher process $\sum_i\sigma_i(f(Z_i)-Pf)$ is a distinct process; no equality between it and $R_n$ is part of this definition.

For a countable class of measurable functions, each displayed supremum of measurable sample paths is measurable. For an uncountable class, ordinary probability or expectation is used only when a specified countable subclass has the same supremum almost surely for the process in question; this is the separable-version convention used here. Otherwise state results using outer probability

$$P^*(A):=\inf\{P(B):A\subseteq B,\ B\in\mathcal A\}$$

and, for a nonnegative possibly nonmeasurable random quantity $Y$, outer expectation

$$\mathbb E^*Y:=\inf\{\mathbb E U: U\text{ is measurable, nonnegative, and }U\ge Y\}.$$

In particular, measurability of every $f$ separately does not by itself make an uncountable supremum measurable.
