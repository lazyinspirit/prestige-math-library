---
id: thm-wedderburn-artin-theorem
kind: theorem
title: "Wedderburn–Artin theorem for semisimple rings"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-endomorphism-ring-of-the-left-regular-module-is-opposite, thm-endomorphism-ring-of-a-finite-direct-sum-as-hom-matrices, thm-finitely-generated-semisimple-modules-are-finite-direct-sums-of-simple-modules, thm-schurs-lemma-for-modules, thm-matrix-rings-over-division-rings-are-semisimple, def-opposite-ring, def-semisimple-ring]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-17
sources:
  scraped: []
  references:
    - title: "William Crawley-Boevey, Noncommutative Algebra, Chapter 1 Sections 1.1-1.9"
      url: "https://www.math.uni-bielefeld.de/~wcrawley/1617noncommalg/Noncommutative%20algebra.pdf"
pipeline_run: null
---

## Statement

Let $R$ be a nonzero unital ring. Then $R$ is semisimple if and only if $$R\cong\prod_{i=1}^rM_{n_i}(D_i)$$ for positive integers $r,n_i$ and division rings $D_i$. See [[thm-endomorphism-ring-of-the-left-regular-module-is-opposite]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Statement.

[L1] For every unital ring $R$, evaluation at $1$ identifies endomorphisms of the left regular module with right multiplications and gives a ring isomorphism $$\operatorname{End}_R({}_R R)\cong R^{\mathrm{op}}.$$. ([[thm-endomorphism-ring-of-the-left-regular-module-is-opposite]]).

[L2] For left $R$-modules $M_1,\ldots,M_n$, endomorphisms of $\bigoplus_jM_j$ correspond to matrices $(f_{ij})$ with $f_{ij}\in\operatorname{Hom}_R(M_j,M_i)$, and composition is matrix multiplication using composition in the entries. ([[thm-endomorphism-ring-of-a-finite-direct-sum-as-hom-matrices]]).

[L3] Every finitely generated semisimple module is a finite direct sum of simple modules. ([[thm-finitely-generated-semisimple-modules-are-finite-direct-sums-of-simple-modules]]).

[L4] A nonzero homomorphism between simple modules is an isomorphism. Consequently the endomorphism ring of a simple module is a division ring. ([[thm-schurs-lemma-for-modules]]).

[L5] For a division ring $D$ and $n\ge1$, matrices with product $(AB)_{ij}=\sum_k a_{ik}b_{kj}$ form a semisimple ring whose left regular module is the direct sum of its simple column ideals. ([[thm-matrix-rings-over-division-rings-are-semisimple]]).

[L6] The opposite ring $R^{\mathrm{op}}$ has the same addition and identity as $R$ and multiplication $a\star b:=ba$. ([[def-opposite-ring]]).

[L7] A unital ring $R$ is semisimple when its left regular module ${}_R R$ is semisimple. This is a left-module definition and uses no Jacobson radical. For the zero ring, the regular module is zero and hence semisimple; the Wedderburn-Artin theorem below is stated for nonzero rings. ([[def-semisimple-ring]]).

## Proof

**Proof technique:** direct.

1.1 If $R$ is semisimple, its cyclic left regular module is a finite direct sum of simple modules. Grouping isomorphic summands gives ${}_RR\cong\bigoplus_{i=1}^rS_i^{n_i}$ with pairwise nonisomorphic $S_i$ and positive $r,n_i$. [L1, L2, L3, L4, L5, L6, L7, given, algebra]

2.1 Schur's lemma gives $\operatorname{Hom}_R(S_j,S_i)=0$ for $i\ne j$ and makes $E_i=\operatorname{End}_R(S_i)$ a division ring. Hence the endomorphism-matrix theorem gives $\operatorname{End}_R({}_RR)\cong\prod_iM_{n_i}(E_i)$. [step 1.1, given, algebra]

3.1 Since $\operatorname{End}_R({}_RR)\cong R^{\mathrm{op}}$, taking opposites gives $R\cong\prod_iM_{n_i}(E_i)^{\mathrm{op}}$. The opposite $E_i^{\mathrm{op}}$ is again a division ring, and entrywise transpose is a ring isomorphism $$ M_{n_i}(E_i)^{\mathrm{op}}\longrightarrow M_{n_i}(E_i^{\mathrm{op}}),\qquad A\longmapsto A^{\mathsf T}, $$ because reversing both the matrix product and the entry product gives $(BA)^{\mathsf T}=A^{\mathsf T}B^{\mathsf T}$ in the target. Thus $R\cong\prod_iM_{n_i}(D_i)$ with $D_i=E_i^{\mathrm{op}}$. [L5, L6, step 2.1, given, algebra]

4.1 Conversely, each $M_{n_i}(D_i)$ is semisimple by its column-ideal decomposition, and a finite product is semisimple because its regular module is the finite direct sum of the factors' regular modules. [step 3.1, given, algebra]

5.1 The Statement assumes that $R$ is nonzero, so the decomposition has at least one factor; no empty-product convention is asserted. This proves the stated claim. [step 4.1, given, algebra] ∎
