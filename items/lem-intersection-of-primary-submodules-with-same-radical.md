---
id: lem-intersection-of-primary-submodules-with-same-radical
kind: lemma
title: "A finite intersection of primary submodules with one radical is primary"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-primary-submodule-and-primary-ideal, lem-primary-submodule-zero-divisor-characterisation]
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  scraped: []
  references:
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, Proposition 19.6"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., Lemma (18.12)"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
---

## Statement

Let $R$ be a Noetherian commutative ring, let $M$ be a finitely generated left
$R$-module, and let $r\ge1$. Let $Q_1,\dots,Q_r \subsetneq M$ be $\mathfrak p$-primary
submodules. Then
$$
Q=Q_1\cap\cdots\cap Q_r
$$
is also $\mathfrak p$-primary.

## Facts & Assumptions

**Given:** A Noetherian commutative ring $R$, a finitely generated left $R$-module $M$, an integer $r\ge1$, a prime ideal $\mathfrak p$, and $\mathfrak p$-primary submodules $Q_1,\dots,Q_r \subsetneq M$.

[L1] A proper submodule is primary exactly when $am\in Q'$ and $m\notin Q'$ imply $a^nM'\subseteq Q'$ for some $n\ge1$ ([[lem-primary-submodule-zero-divisor-characterisation]]).

[L2] A primary submodule $Q'$ is $\mathfrak p$-primary when $\sqrt{\operatorname{Ann}_R(M'/Q')}=\mathfrak p$ ([[def-primary-submodule-and-primary-ideal]]).

## Proof

**Proof technique:** direct.

1.1 Because $r\ge1$, one has $Q\subseteq Q_1\subsetneq M$, so $Q$ is proper. Suppose $am\in Q$ and $m\notin Q$. Choose $i$ with $m\notin Q_i$. Since $Q_i$ is primary, [L1] gives $e\ge1$ with $a^eM\subseteq Q_i$, so $a\in\sqrt{\operatorname{Ann}_R(M/Q_i)}=\mathfrak p$ by [L2]. [L1, L2, given, choose, algebra]

2.1 For each $j$, step 1.1 gives $a\in\mathfrak p=\sqrt{\operatorname{Ann}_R(M/Q_j)}$, so choose $e_j\ge1$ with $a^{e_j}M\subseteq Q_j$. The nonempty finite list has a maximum $E$, and then $a^EM\subseteq Q_j$ for every $j$, hence $a^EM\subseteq Q$. By [L1], the proper submodule $Q$ is primary. [L1, L2, step 1.1, choose, algebra]

3.1 If $a\in\mathfrak p$, the same finite-maximum argument as in step 2.1 gives a power of $a$ in $\operatorname{Ann}_R(M/Q)$, so $\mathfrak p\subseteq\sqrt{\operatorname{Ann}_R(M/Q)}$. Conversely, if a power of $a$ annihilates $M/Q$, it also annihilates every $M/Q_j$ because $Q\subseteq Q_j$, so $a\in\sqrt{\operatorname{Ann}_R(M/Q_j)}=\mathfrak p$. Thus $\sqrt{\operatorname{Ann}_R(M/Q)}=\mathfrak p$, and [L2] makes $Q$ $\mathfrak p$-primary. [L2, step 2.1, algebra] ∎
