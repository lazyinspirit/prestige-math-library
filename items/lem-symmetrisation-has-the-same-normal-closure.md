---
id: lem-symmetrisation-has-the-same-normal-closure
kind: lemma
title: "A relator set and its symmetrisation have the same normal closure"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-symmetrisation-of-a-relator-set, def-normal-closure]
proof_strategy: "direct"
verification:
  audited: 2026-09-01
  precheck: pass
sources:
  scraped: []
  references:
    - title: "GAP SmallCancellation manual, Chapter 1: Small Cancellation Theory — the classical conditions"
      url: "https://mate.dm.uba.ar/~isadofschi/smallcancellation/chap1_mj.html"
    - title: "Jay Williams, Universal Countable Borel Quasi-Orders"
      url: "https://arxiv.org/pdf/1306.1270"
    - title: "Nicholas Touikan, An Introduction to Combinatorial and Geometric Group Theory, Section 3.5"
      url: "https://ntouikan.ext.unb.ca/MATH6022/IntroCGGT/html_output/section-18.html"
    - title: "Clara Löh, Geometric Group Theory: An Introduction, Section 7.4.1"
      url: "https://loeh.app.uni-regensburg.de/ggt_book/ggt_book_draft.pdf"
---

## Statement

Let $R$ be a cyclically reduced relator set and let $R^{\operatorname{sym}}$ be
its symmetrisation. Then $R$ and $R^{\operatorname{sym}}$ have the same normal
closure in the free group on the generators.

## Facts & Assumptions

**Given:** A cyclically reduced relator set $R$ in a free group $F(X)$, and its
symmetrisation $R^{\operatorname{sym}}$.

[F1] The normal closure of a subset $S\subseteq F(X)$ is the smallest normal
subgroup of $F(X)$ containing $S$ ([[def-normal-closure]]).

[L1] Every element of $R^{\operatorname{sym}}$ is either a cyclic conjugate of a
member of $R$ or of its inverse ([[def-symmetrisation-of-a-relator-set]]).

## Proof

**Proof technique:** direct.

1.1 Let $N=\langle\!\langle R\rangle\!\rangle$. Because $N$ is normal by [F1], it contains $r^{-1}$ whenever it contains $r$, and it contains $uru^{-1}$ for every $u\in F(X)$. Hence [L1] implies that every element of $R^{\operatorname{sym}}$ already lies in $N$. Therefore $\langle\!\langle R^{\operatorname{sym}}\rangle\!\rangle\subseteq N$. [F1, L1, given]

1.2 Every relator of $R$ belongs to $R^{\operatorname{sym}}$ by definition, so the normal closure of $R^{\operatorname{sym}}$ contains $R$. By the minimality clause of [F1], $N\subseteq\langle\!\langle R^{\operatorname{sym}}\rangle\!\rangle$. [F1, L1, given]

2.1 The two containments from steps 1.1 and 1.2 are equalities, so the normal closures agree. [step 1.1, step 1.2] ∎
