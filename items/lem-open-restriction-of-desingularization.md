---
id: "lem-open-restriction-of-desingularization"
kind: "lemma"
title: "Open restrictions of the canonical desingularization"
status: published
origin: pipeline
pipeline_run: "frontier-40-geometry-braids-rep-27"
dependency_level: 19
deps:
  - "def-axiom-of-choice"
  - "def-birational-morphism-schemes"
  - "def-closed-immersion-schemes"
  - "def-integral-scheme"
  - "def-locally-finite-type-and-finite-type-morphism"
  - "def-open-immersion-schemes"
  - "def-smooth-morphism-schemes"
  - "lem-canonical-resolution-commutes-with-smooth-morphisms"
  - "lem-embedding-independence-of-desingularization"
  - "thm-weak-embedded-desingularization"
proof_strategy: "direct"
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
sources:
  references:
    - title: "Jaroslaw Wlodarczyk, Simple Hironaka resolution in characteristic zero, J. Amer. Math. Soc. 18 (2005) 779-822; author's arXiv version math/0401401 (28 pp., dated October 25, 2018)"
      url: "https://arxiv.org/pdf/math/0401401"
---

## Statement

Assume AC ([[def-axiom-of-choice]]).

In the setting of [[lem-embedding-independence-of-desingularization]], let $V\to U$ be an open immersion of integral affine $K$-varieties ([[def-open-immersion-schemes]]) and let $\operatorname{res}_U\colon\widetilde U\to U$, $\operatorname{res}_V\colon\widetilde V\to V$ be the canonical desingularizations.
Then there is an open immersion $\widetilde V\hookrightarrow\widetilde U$ lifting $V\to U$ such that $\widetilde V\to\operatorname{res}_U^{-1}(V)$ is an isomorphism over $V$.

## Facts & Assumptions

**Given:** An open embedding $V\hookrightarrow U$ of affine $K$-varieties of finite type over a field $K$ of characteristic zero, with canonical desingularizations $\widetilde V\to V$ and $\widetilde U\to U$.



[A1] [[def-axiom-of-choice]]: AC is assumed for the canonical-resolution consumer clauses and their cited AC-dependent construction suppliers.

[F1] [[thm-weak-embedded-desingularization]], [[lem-canonical-resolution-commutes-with-smooth-morphisms]]: embedded desingularization commutes with smooth ambient morphisms; an open immersion is étale, hence smooth of relative dimension zero.

[F2] [[thm-weak-embedded-desingularization]], [[lem-embedding-independence-of-desingularization]]: the canonical desingularization of an affine variety is obtained by an embedded desingularization in any smooth affine ambient variety and is independent of that choice.

[F3] [[def-open-immersion-schemes]], [[def-locally-finite-type-and-finite-type-morphism]]: in the principal case $V=U_f$ for a regular function $f$; one may choose a closed embedding $U\hookrightarrow X$ into a smooth affine $X$ and a function $F$ on $X$ restricting to $f$, so that $U_f\hookrightarrow X_F$ is a closed immersion and $X_F\hookrightarrow X$ is an open immersion of smooth affine schemes.

## Proof

1.1 The principal case. Assume first $V=U_f$ with $f\in K[U]$. By [F3] choose a smooth affine ambient $X$ and $F\in K[X]$ with $F|_U=f$; the open immersions $X_F\hookrightarrow X$ and $U_f\hookrightarrow U$ are étale, so [F1] gives a canonical identification of the embedded desingularization of $U_f$ in $X_F$ with the restriction of the embedded desingularization of $U$ in $X$; by [F2] this is the required open embedding of the canonical desingularizations over $U_f$. [A1, F1, F2, F3]

2.1 The general case. For an arbitrary affine open $V\hookrightarrow U$, the complement is defined by finitely many functions; covering $V$ by principal opens $U_g$ contained in $V$ and applying step 1.1 to each, the identifications glue because the desingularizations are canonical and their restrictions to the intersections agree by the same argument. This yields an open embedding $\widetilde V\hookrightarrow\widetilde U$ lifting $V\hookrightarrow U$, with $\widetilde V\to\operatorname{res}_U^{-1}(V)$ an isomorphism over $V$. [A1, F1, F2, step 1.1] ∎ 
