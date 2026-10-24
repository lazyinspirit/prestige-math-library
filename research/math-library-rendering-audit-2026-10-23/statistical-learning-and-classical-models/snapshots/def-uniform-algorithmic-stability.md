---
id: def-uniform-algorithmic-stability
kind: definition
title: "Uniform algorithmic stability under deletion"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
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
    date: 2026-10-20
sources:
  references:
    - title: "Olivier Bousquet and André Elisseeff, Stability and Generalization, JMLR 2 (2002), Definition 6 and following replacement inequality, p. 504"
      url: "https://www.jmlr.org/papers/volume2/bousquet02a/bousquet02a.pdf"
    - title: "Mehryar Mohri, Afshin Rostamizadeh, and Ameet Talwalkar, Foundations of Machine Learning, 2nd ed., Definition 14.1"
      url: "https://moodle2.units.it/pluginfile.php/757669/mod_resource/content/1/Mohri%20et%20al.%20-%202018%20-%20Foundations%20of%20machine%20learning.pdf"
---

## Definition

Let $\mathcal Z$ be an observation set, let $\mathcal H$ be a set of hypotheses, and let $L:\mathcal H\times\mathcal Z\to[0,\infty)$ be a loss. A deterministic size-indexed learning rule consists, for every integer $n\ge1$ and every retained index set $J\subseteq[n]$, of a map $A_{n,J}$ from the indexed observations $(z_j)_{j\in J}$ to $\mathcal H$; the original sample size $n$ remains an input to this rule. For $S=(z_1,\ldots,z_n)$ write $A_S:=A_{n,[n]}(S)$ and $A_{S\setminus i}:=A_{n,[n]\setminus\{i\}}(S|_{[n]\setminus\{i\}})$ for the output after deleting indexed observation $i$. The rule is permutation-invariant if simultaneous reordering of the observations and relabeling of their retained indices leaves each output unchanged. Given a nonnegative sequence $(\beta_n)_{n\ge1}$, the rule has uniform deletion stability with coefficients $(\beta_n)$ if, for every $n\ge1$, every $S\in\mathcal Z^n$, every $i\in[n]$, and every $z\in\mathcal Z$,

$$
|L(A_S,z)-L(A_{S\setminus i},z)|\le\beta_n.
$$

The sequence is nonincreasing when $\beta_{n+1}\le\beta_n$ for every $n\ge1$. This is the deletion convention. If $S'$ differs from $S$ only at coordinate $i$, then $S\setminus i=S'\setminus i$, and the triangle inequality gives $|L(A_S,z)-L(A_{S'},z)|\le2\beta_n$ for every $z$; the resulting replacement bound has coefficient $2\beta_n$.

## Definition references

Bousquet and Elisseeff, Definition 6 and the following inequality, printed p. 504, define uniform stability by deleting one indexed observation and state the coefficient-$2\beta_n$ replacement consequence. [Full JMLR paper PDF](https://www.jmlr.org/papers/volume2/bousquet02a/bousquet02a.pdf)

Mohri, Rostamizadeh, and Talwalkar, Definition 14.1, use a replacement-sample convention. [Full second-edition book PDF](https://moodle2.units.it/pluginfile.php/757669/mod_resource/content/1/Mohri%20et%20al.%20-%202018%20-%20Foundations%20of%20machine%20learning.pdf)
