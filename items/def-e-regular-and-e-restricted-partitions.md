---
id: def-e-regular-and-e-restricted-partitions
kind: definition
title: "e-regular and e-restricted partitions"
status: published
origin: pipeline
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-p-regular-and-p-restricted-partitions, def-partition-young-diagram-and-conjugate-partition]
justified_by: []
aliases: []
landmark: false
dependency_level: 0
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-11
sources:
  scraped: []
  references:
    - title: "Andrew Mathas, Hecke algebras and Schur algebras of the symmetric group, complete prepublication manuscript (1998; expanded published edition: AMS University Lecture Series 15, 1999); complete 79-page manuscript, SHA-256 8cfeb611a95a3ff25cb95ad22bfd3a68475818301c34b04d131a8480a1b997e0"
      url: "https://web.math.ucsb.edu/~bigelow/books/mathas.pdf"
      locator: "Definitions 3.35-3.37 and Theorem 3.39, printed pp. 32-34: e-regular and e-restricted partitions as the labels of the simple modules, with the conjugate-sign dictionary"
    - title: "Alexander Kleshchev, Representation theory of symmetric groups and related Hecke algebras, arXiv:0909.4844; Bull. Amer. Math. Soc. 47 (2010) 419-481; complete 66-page arXiv survey, SHA-256 8685199608967fa7c479e4dd883990b716a6f708e71cf75f6ce4aba41c6f2cab"
      url: "https://arxiv.org/pdf/0909.4844"
      locator: "Section 5.3, printed pp. 23-25: e-regular/e-restricted partitions and the Remark 5.5 conjugation dictionary for simple modules"
---

## Definition

Let $e\in\{2,3,4,\dots\}\cup\{\infty\}$ and let $\lambda\vdash n$ be a partition
with parts $\lambda_1\ge\lambda_2\ge\cdots$ and conjugate $\lambda'$
([[def-partition-young-diagram-and-conjugate-partition]]). Then $\lambda$ is
**$e$-regular** when every positive integer occurs as a part of $\lambda$ fewer
than $e$ times, i.e. $z_j(\lambda)<e$ for every $j\ge1$, and **$e$-restricted**
when $\lambda_i-\lambda_{i+1}<e$ for every $i\ge1$ (with $\lambda_i:=0$ for
$i>\ell(\lambda)$).

For prime $e=p$ these are exactly the $p$-regular and $p$-restricted notions of
[[def-p-regular-and-p-restricted-partitions]]; the same inequalities define the
extension to composite finite $e$. For $e=\infty$ both
conditions are vacuous, so every partition is both $e$-regular and
$e$-restricted: the inequalities $z_j(\lambda)<\infty$ and
$\lambda_i-\lambda_{i+1}<\infty$ hold because partitions have finitely many
nonzero parts and each difference is a nonnegative integer. Moreover $\lambda$
is $e$-restricted if and only if its conjugate $\lambda'$ is $e$-regular: the
multiplicity of the part $i$ in $\lambda'$ is the number of columns of
$[\lambda]$ of height exactly $i$, namely $\lambda_i-\lambda_{i+1}$, so the
two conditions $z_i(\lambda')=\lambda_i-\lambda_{i+1}<e$ are the same family
of inequalities, and for $e=\infty$ both sides hold. In particular
$\varnothing$ is simultaneously $e$-regular and $e$-restricted for every $e$
([[def-p-regular-and-p-restricted-partitions]]).
