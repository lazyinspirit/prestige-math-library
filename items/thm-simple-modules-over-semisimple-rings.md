---
id: thm-simple-modules-over-semisimple-rings
kind: theorem
title: "Simple modules over a product of matrix rings over division rings"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-wedderburn-artin-theorem, thm-schurs-lemma-for-modules, thm-matrix-rings-over-division-rings-are-semisimple]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-sonnet-5"
    verdict: pass
    date: 2026-08-17
  audited: 2026-08-17
sources:
  scraped: []
  references:
    - title: "MIT 18.706, Lecture 2: Semisimple Modules, Socles, Artinian Rings, Wedderburn's Theorem"
      url: "https://ocw.mit.edu/courses/18-706-noncommutative-algebra-spring-2023/mit18_706_s23_lec02.pdf"
pipeline_run: null
---

## Statement

Let $r\ge1$, let every $n_i\ge1$, let every $D_i$ be a division ring, and put $R=\prod_{i=1}^rM_{n_i}(D_i)$. Then every simple left $R$-module is supported on exactly one factor and is isomorphic to that factor's column module $D_i^{n_i}$. These column modules give all simple left $R$-module isomorphism classes, with one class for each factor. See [[thm-wedderburn-artin-theorem]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Statement.

[L1] A nonzero homomorphism between simple modules is an isomorphism. Consequently the endomorphism ring of a simple module is a division ring. ([[thm-schurs-lemma-for-modules]]).

[L2] If $D$ is a division ring and $n\ge1$, then the left regular module of $M_n(D)$ is the direct sum of its simple column ideals $M_n(D)e_{jj}\cong D^n$. ([[thm-matrix-rings-over-division-rings-are-semisimple]]).

## Proof

**Proof technique:** direct.

1.1 Write $c_i\in R$ for the central idempotent that is $1$ in factor $i$ and $0$ elsewhere. For a simple left $R$-module $S$, every $c_iS$ is a submodule and $S=\sum_i c_iS$. Hence some $c_iS$ is nonzero and therefore equals $S$; then $c_jS=c_jc_iS=0$ for $j\ne i$. Thus $S$ is supported on exactly one factor $A_i=M_{n_i}(D_i)$. [given, algebra]

2.1 Choose $0\ne s\in S$. The map $A_i\to S$, $a\mapsto as$, is surjective because its image is a nonzero submodule. By [L2], $A_i$ is a direct sum of simple column ideals $C_j\cong D_i^{n_i}$. At least one restriction $C_j\to S$ is nonzero, so [L1] makes it an isomorphism. Hence $S\cong D_i^{n_i}$. [L1, L2, step 1.1, given, algebra]

3.1 Conversely each column module is simple by [L2]. Modules supported on different factors cannot be isomorphic, because the corresponding $c_i$ acts as the identity on one and as zero on the other. For a fixed factor all column ideals are isomorphic to $D_i^{n_i}$ by [L2]. This proves the classification, including the one-factor case $r=1$. [L2, step 1.1, step 2.1, given, algebra] ∎
