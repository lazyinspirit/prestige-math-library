---
id: lem-finite-generating-subset-of-a-generating-set
kind: lemma
title: "Every generating set of a finitely generated module contains a finite generating subset"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [lem-generated-submodule-as-finite-linear-combinations, def-generated-cyclic-finitely-generated-and-free-modules]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, §3 (3.15)"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., Exercise (16.2)"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
pipeline_run: null
---

## Statement

Let $R$ be a ring, let $M$ be a finitely generated left $R$-module
([[def-generated-cyclic-finitely-generated-and-free-modules]]) and let
$S\subseteq M$ satisfy $\langle S\rangle_R=M$. Then some **finite** subset
$S'\subseteq S$ already satisfies $\langle S'\rangle_R=M$.

No hypothesis is placed on $S$ itself, which may be infinite, and none on $R$
beyond being a ring.

## Facts & Assumptions

**Given:** A ring $R$, a finitely generated left $R$-module $M$, and a subset $S\subseteq M$ generating $M$.

[L1] $M$ is finitely generated when $M=\langle T\rangle_R$ for some finite $T$, and $\langle T\rangle_R$ is the smallest submodule of $M$ containing $T$ ([[def-generated-cyclic-finitely-generated-and-free-modules]]).

[L2] For a ring $R$, a left $R$-module $M$ and a subset $S\subseteq M$, the submodule $\langle S\rangle_R$ is the set of finite sums $\sum_{i=1}^{k}r_is_i$ with $k\in\mathbb N$, $r_i\in R$ and $s_i\in S$, the term with $k=0$ being $0_M$ ([[lem-generated-submodule-as-finite-linear-combinations]]).

## Proof

**Proof technique:** direct.

1.1 Fix a finite $T\subseteq M$ with $\langle T\rangle_R=M$, available because $M$ is finitely generated, and recall the hypothesis $\langle S\rangle_R=M$. [L1, given]

2.1 For each $t\in T$ we have $t\in M=\langle S\rangle_R$, so $t=\sum_{i=1}^{k}r_is_i$ for some $k\in\mathbb N$, some $r_1,\ldots,r_k\in R$ and some $s_1,\ldots,s_k\in S$; write $S_t:=\{s_1,\ldots,s_k\}\subseteq S$, a finite set with $t\in\langle S_t\rangle_R$. One such expression is selected for each of the finitely many elements of $T$, so this is a finite sequence of selections and no choice axiom is used. [L2, step 1.1, given]

3.1 Put $S':=\bigcup_{t\in T}S_t$. This is a union of finitely many finite sets, hence finite, and $S'\subseteq S$; moreover $S_t\subseteq S'$ gives $\langle S_t\rangle_R\subseteq\langle S'\rangle_R$, so $t\in\langle S'\rangle_R$ for every $t\in T$, that is $T\subseteq\langle S'\rangle_R$. [step 2.1, algebra]

4.1 $\langle S'\rangle_R$ is a submodule of $M$ containing $T$, so it contains the smallest such submodule, namely $\langle T\rangle_R=M$; and $\langle S'\rangle_R\subseteq M$ always. Hence $\langle S'\rangle_R=M$ with $S'\subseteq S$ finite. [L1, step 1.1, step 3.1] ∎

## Remarks

- **The finite generating subset depends on the chosen $T$, and no smallest one is claimed.** Different finite generating sets $T$ produce different subsets $S'$, and the lemma asserts only that some finite subset of $S$ generates. It says nothing about the least possible size of such a subset.

- **The hypothesis that $M$ is finitely generated cannot be dropped.** Without it the conclusion is the assertion that every generating set of every module has a finite generating subset, which would make every module finitely generated, since a module always generates itself.
