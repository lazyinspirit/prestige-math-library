---
id: thm-uniqueness-of-wedderburn-artin-data
kind: theorem
title: "Uniqueness of the Wedderburn–Artin factors"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-wedderburn-artin-theorem, thm-simple-modules-over-semisimple-rings, thm-matrix-rings-over-division-rings-are-semisimple, thm-schurs-lemma-for-modules, thm-jordan-holder-theorem-for-modules]
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

The division rings and matrix sizes in a Wedderburn-Artin decomposition of a nonzero semisimple ring are unique up to permutation and division-ring isomorphism. See [[thm-wedderburn-artin-theorem]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Statement.

[L1] Let $R$ be a nonzero unital ring. Then $R$ is semisimple if and only if $$R\cong\prod_{i=1}^rM_{n_i}(D_i)$$ for positive integers $r,n_i$ and division rings $D_i$. ([[thm-wedderburn-artin-theorem]]).

[L2] For $r\ge1$, $n_i\ge1$, and division rings $D_i$, every simple left module over $\prod_iM_{n_i}(D_i)$ is supported on exactly one factor and is isomorphic to that factor's column module $D_i^{n_i}$; these give all isomorphism classes. ([[thm-simple-modules-over-semisimple-rings]]).

[L3] For a division ring $D$ and $n\ge1$, the left regular module of $M_n(D)$ is the direct sum of the $n$ simple column ideals $M_n(D)e_{jj}\cong D^n$. ([[thm-matrix-rings-over-division-rings-are-semisimple]]).

[L4] A nonzero homomorphism between simple modules is an isomorphism. Consequently the endomorphism ring of a simple module is a division ring. ([[thm-schurs-lemma-for-modules]]).

[L5] Any two composition series of a module have the same length, and their simple factors agree up to permutation and isomorphism. ([[thm-jordan-holder-theorem-for-modules]]).

## Proof

**Proof technique:** direct.

1.1 In a decomposition $R\cong\prod_iM_{n_i}(D_i)$, the simple left module supported on factor $i$ is its column module $S_i=D_i^{n_i}$. Distinct coordinate idempotents show that the $S_i$ are pairwise nonisomorphic as $R$-modules, and [L3] decomposes the regular module with exactly $n_i$ copies of $S_i$. [L1, L2, L3, L4, L5, given, algebra]

2.1 Let $f:S_i\to S_i$ commute with the matrix action and put $v=f(e_1)$. For $k\ne1$, the matrix unit $e_{kk}$ annihilates $e_1$, so it annihilates $v$; hence $v=e_1d$ for a unique $d\in D_i$. Since $e_j=e_{j1}e_1$, one has $f(e_j)=e_{j1}f(e_1)=e_jd$, and additivity then gives $f(x)=xd$ for every column $x$. Thus the endomorphisms are precisely right scalar multiplications, composition reverses the scalar order, and $\operatorname{End}_R(S_i)\cong D_i^{\mathrm{op}}$. Therefore $D_i\cong\operatorname{End}_R(S_i)^{\mathrm{op}}$ is determined by the simple-module type with the orientation fixed. [L3, L4, step 1.1, given, algebra]

3.1 Jordan–Hölder [L5] makes the simple-module types and their multiplicities in ${}_RR$ invariant. Hence the pairs $(n_i,D_i)$ are determined up to reordering and division-ring isomorphism. This proves the stated claim. [L5, step 1.1, step 2.1, given] ∎
