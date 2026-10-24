---
id: cex-the-same-number-of-removable-p-hooks-does-not-replace-the-core-test
kind: counterexample
title: "Equal removable-hook counts do not replace the core test"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 18
deps: [def-removable-border-strip-and-height, lem-hooks-correspond-to-removable-border-strips, thm-e-core-is-independent-of-the-rim-hook-removal-order, def-e-core-e-quotient-and-e-weight, thm-nakayama-block-classification-for-symmetric-groups, def-hook-arm-leg-and-hook-length, def-beta-set-and-e-runner-abacus-of-a-partition]
justified_by: []
aliases: []
landmark: false
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Stacey Law (lecturer), notes by Leonard Tomczak, Representation Theory of Symmetric Groups, Cambridge Part III Michaelmas 2022 lecture notes, complete 76-page PDF"
      url: "https://math.berkeley.edu/~ltomczak/notes/Mich2022/RepSn_Notes.pdf"
      locator: "Section 4.1, printed pp. 59-63: the abacus computation of e-cores (Theorem 4.10), the worked examples, and Proposition 4.12 (the weight as the number of e-hooks removed and as the number of hooks of length divisible by e)"
    - title: "Andrew Mathas, Hecke algebras and Schur algebras of the symmetric group, complete 79-page prepublication manuscript (1998; expanded AMS University Lecture Series 15 edition, 1999)"
      url: "https://web.math.ucsb.edu/~bigelow/books/mathas.pdf"
      locator: "Lemma 5.34 with its abacus proof and Corollary 5.37, printed pp. 61-63: the e-core of a partition and the block classification by e-cores"
---

## Statement refuted

The number of removable $p$-hooks of a partition determines its $p$-core; in
particular two partitions of $n$ with the same number of removable $p$-hooks
lie in the same $p$-block of the symmetric group.

## Facts & Assumptions

**Given:** The prime $p=3$ and the partitions $\lambda=(5)$ and $\mu=(4,1)$ of $5$, with their Young diagrams and hook lengths ([[def-hook-arm-leg-and-hook-length]]).

[F1] For a node $(i,j)$ of $[\nu]$, its hook length is $h_{i,j}(\nu)=\nu_i-j+\nu'_j-i+1$ ([[def-hook-arm-leg-and-hook-length]]). A removable rim strip is a nonempty edge-connected skew diagram containing no $2\times2$ block whose deletion leaves a partition ([[def-removable-border-strip-and-height]]). Node hooks correspond bijectively to removable rim strips, preserving size; hence the number of removable $p$-strips equals the number of node hooks of length $p$ ([[lem-hooks-correspond-to-removable-border-strips]]).

[F2] $e$-core and abacus: for a $\beta$-set $X$ of $\nu$ the top-packed set $X^{(e)}$ is obtained by sliding every bead up as far as possible on its own runner, $C_e(\nu)=P(X^{(e)})$, and $C_e(\nu)$ is the terminal partition of every maximal sequence of removals of removable border strips of size $e$; a partition is an $e$-core exactly when it has no hook of length $e$ ([[def-e-core-e-quotient-and-e-weight]], [[def-beta-set-and-e-runner-abacus-of-a-partition]], [[thm-e-core-is-independent-of-the-rim-hook-removal-order]]).

[F3] Nakayama: two Specht modules of $k[S_n]$ over a splitting field $k$ of characteristic $p$ lie in the same block if and only if their labels have the same $p$-core ([[thm-nakayama-block-classification-for-symmetric-groups]]).

## Counterexample

**Proof technique:** direct.

1.1 The partition $(5)$. Its hook-length diagram is the single row $5,4,3,2,1$, so by [F1] the unique hook of length $3$ is $H_{1,3}(5)$, a horizontal rim hook of size $3$ spanning the nodes $(1,3),(1,4),(1,5)$ whose removal leaves the partition $(2)$; hence $(5)$ has exactly one removable $3$-hook. Its $\beta$-set is $X_\lambda=\{b_1\}=\{5\}$, a single bead on runner $2$ at row $1$; top-packing slides it to row $0$, so $X^{(3)}=\{2\}$ and $C_3((5))=P(\{2\})=(2)$, a $3$-core since $2<3$ and $(2)$ has hook lengths $2,1$. [given, F1, F2, construct]

1.2 The partition $(4,1)$. Its hook-length diagram is $5,3,2,1$ in the first row and $1$ in the second, so by [F1] the unique hook of length $3$ is $H_{1,2}(4,1)$, whose rim hook is the horizontal strip $(1,2),(1,3),(1,4)$ with complement $(1,1)$; hence $(4,1)$ also has exactly one removable $3$-hook. Its $\beta$-set is $X_\mu=\{b_1,b_2\}=\{5,1\}$, with $5$ on runner $2$ at row $1$ and $1$ on runner $1$ at row $0$; top-packing slides the bead $5$ to the position $2$, so $X^{(3)}=\{2,1\}$ and $C_3((4,1))=P(\{2,1\})=(1,1)$, a $3$-core since $(1,1)$ has hook lengths $2,1$. [given, F1, F2, construct]

2.1 The two partitions therefore have the same number (one) of removable $3$-hooks, but their $3$-cores are the distinct partitions $(2)$ and $(1,1)$ of size $2$; by [F3] the Specht modules $S^{(5)}_k$ and $S^{(4,1)}_k$ lie in different blocks of $k[S_5]$ for every splitting field $k$ of characteristic $3$. The top-packed abacus test of [F2] distinguishes the two configurations (one bead on runner $2$ versus beads on runners $2$ and $1$), while the local removable-hook count does not, so no such count can replace the core test. [F2, F3, step 1.1, step 1.2] ∎

Both partitions have $3$-weight $1$, so even the weight may agree while the blocks differ; the invariant that separates them is the runner distribution of the beads, not the number of removable hooks.
