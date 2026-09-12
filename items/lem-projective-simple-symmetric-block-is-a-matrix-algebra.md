---
id: lem-projective-simple-symmetric-block-is-a-matrix-algebra
kind: lemma
title: A projective simple in a symmetric block forces a matrix block
deps: [def-block-bimodule-for-the-double-group, prop-group-algebra-in-defining-characteristic-is-a-symmetric-frobenius-algebra, cor-finitely-generated-projective-kg-modules-are-injective-and-conversely, cor-the-regular-module-decomposes-into-projective-indecomposables, thm-krull-schmidt-for-finite-dimensional-kg-modules, thm-wedderburn-artin-theorem, def-splitting-p-modular-system-for-a-finite-group]
provenance:
  statement: literature-derived
  proof: ai-altered
status: published
origin: pipeline
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: Webb, A Course in Finite Group Representation Theory, §§11.3, 11.6 and 12.3–12.5, especially pp.240–245
      url: https://www-users.cse.umn.edu/~webb/RepBook/RepBookLatex.pdf
proof_strategy: direct
---

## Statement

If $k$ is the residue splitting field and a block $B=kGb$ has a projective simple left module $S$, then $B\cong M_{\dim_kS}(k)$ and $S$ is its unique simple module up to isomorphism.

## Facts & Assumptions

**Given:** A finite group, splitting residue field, block $B$, and a projective simple $S$.

[F1] A block has no nontrivial central idempotent. ([[def-block-bimodule-for-the-double-group]])

[F2] The coefficient-of-identity form is associative, symmetric and nondegenerate. ([[prop-group-algebra-in-defining-characteristic-is-a-symmetric-frobenius-algebra]])

[F3] Finite projective $kG$-modules are injective. ([[cor-finitely-generated-projective-kg-modules-are-injective-and-conversely]])

[F4] The split regular module decomposes into projective covers, each with multiplicity the dimension of its simple head. ([[cor-the-regular-module-decomposes-into-projective-indecomposables]])

[F5] Finite indecomposable decompositions exist and are unique. ([[thm-krull-schmidt-for-finite-dimensional-kg-modules]])

[F6] A nonzero semisimple ring is a finite product of matrix rings over division rings. ([[thm-wedderburn-artin-theorem]])

[F7] The residue field splits $G$ and all subgroups. ([[def-splitting-p-modular-system-for-a-finite-group]])

## Proof

**Proof technique:** direct.

1.1 The central product decomposition $kG=B\times kG(1-b)$ has zero cross-products, so the symmetric form in [F2] restricts nondegenerately to $B$: a vector orthogonal to $B$ is already orthogonal to the other factor, hence is zero. A projective $B$-module is projective over $kG$ because $B$ is a direct summand of $kG$. Thus $S$ is injective over $kG$ by [F3], and also over $B$ by restriction to the block module category. [F1, F2, F3]

2.1 Decompose the regular $B$-module into indecomposable projectives using [F4] and [F5]. The projective cover of $S$ is $S$ itself; hence the sum $U$ of all summands isomorphic to $S$ is nonzero. Let $V$ be the sum of the other summands. A nonzero map $S\to P$ for an indecomposable summand $P$ is injective and splits because $S$ is injective; it forces $P\cong S$. A nonzero map $P\to S$ is surjective and splits because $S$ is projective, again forcing $P\cong S$. Consequently $\operatorname{Hom}_B(U,V)=\operatorname{Hom}_B(V,U)=0$. [F4, F5, step 1.1]

3.1 The projection $q:B\to U$ commutes with every $B$-linear endomorphism, because the off-diagonal homomorphism spaces vanish. Such endomorphisms include every right multiplication. A left-module endomorphism is right multiplication by $q(b)$; commuting also with right multiplication makes $q(b)$ central. It is a nonzero central idempotent, so [F1] forces $q(b)=b$ and $V=0$. Thus the regular module is a sum of copies of $S$ and is semisimple. By [F6] and the splitting condition [F7], $B$ is a single matrix algebra over $k$, of size $\dim_kS$, with exactly one simple module. [F1, F6, F7, step 2.1] ∎

## Sources

Webb, A Course in Finite Group Representation Theory, §§11.3, 11.6 and 12.3–12.5, especially pp.240–245. Local argument and conventions as displayed above.
