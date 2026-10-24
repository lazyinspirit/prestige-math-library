---
id: lem-separable-banach-has-countable-norming-family
kind: lemma
title: "A separable Banach space has a countable norming family"
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 0
deps:
  - def-separable-space
  - def-dual-space-of-a-normed-space
  - def-hahn-banach-extension-principle-relative
  - def-countable-choice
  - cor-relative-hahn-banach-dual-norming
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
axiom_use: "The proof uses HB for each norm-one supporting functional and countable choice to select one for each member of a countable dense subset. No stronger choice principle is used."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "A. Lunardi, M. Miranda, and D. Pallara, Infinite Dimensional Analysis"
      url: "https://www.mathematik.tu-darmstadt.de/media/analysis/lehrmaterial_anapde/hallerd/Lectures.pdf"
      locator: "Section 3.1: separability and countable norming sets for Gaussian measures."
---

## Statement

Assume HB and countable choice. Let $B$ be a real separable Banach space. There is a sequence
$(\ell_j)_{j\ge1}\subseteq B^*$ with $\|\ell_j\|=1$ such that
$$\|x\|=\sup_{j\ge1}|\ell_j(x)|\qquad(x\in B).$$
If $B=\{0\}$, the conclusion is interpreted using the zero functional and the
supremum is $0$.

## Facts & Assumptions

[F1] Separability supplies a countable dense subset of $B$
([[def-separable-space]]).

[F2] For each nonzero $x\in B$, Hahn–Banach supplies $\ell\in B^*$ with
$\|\ell\|=1$ and $\ell(x)=\|x\|$
([[def-hahn-banach-extension-principle-relative]],
[[cor-relative-hahn-banach-dual-norming]]).

[A1] Countable choice selects one such functional for each element of a
countable dense subset ([[def-countable-choice]]).

## Proof


**Given:** HB, countable choice, and a real separable Banach space $B$.

1.1 If $B=\{0\}$, take the constant zero sequence. Otherwise let $D$ be a countable dense subset of $B$. The normalized set $\{d/\|d\|:d\in D,\ d\ne0\}$ is countable and dense in the unit sphere: for $\|x\|=1$ and $d\to x$, eventually $d\ne0$ and $\|d/\|d\|-x\|\le2\|d-x\|$. Enumerate it as $(x_j)$. By [F2] and [A1], choose $\ell_j\in B^*$ with $\|\ell_j\|=1$ and $\ell_j(x_j)=1$ for each $j$. [given, F1, F2, A1, choose]

2.1 For every $x\in B$ and every $j$, $|\ell_j(x)|\le\|x\|$, so the supremum is at most $\|x\|$. If $x\ne0$, choose unit vectors $x_{j_k}\to x/\|x\|$. Then $\ell_{j_k}(x/\|x\|)\ge 1-\|x_{j_k}-x/\|x\|\|\to1$, so $\sup_j|\ell_j(x)|\ge\|x\|$. The zero vector gives equality directly. [given, step 1.1, algebra] ∎

