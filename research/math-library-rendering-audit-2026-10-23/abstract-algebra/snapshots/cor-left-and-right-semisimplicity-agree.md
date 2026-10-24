---
id: cor-left-and-right-semisimplicity-agree
kind: corollary
title: "Left and right semisimplicity of a ring agree"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-semisimple-ring, thm-wedderburn-artin-theorem, def-opposite-ring, thm-matrix-rings-over-division-rings-are-semisimple]
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
    - title: "William Crawley-Boevey, Noncommutative Algebra, Chapter 1 Sections 1.1-1.9"
      url: "https://www.math.uni-bielefeld.de/~wcrawley/1617noncommalg/Noncommutative%20algebra.pdf"
pipeline_run: null
---

## Statement

A unital ring is semisimple as a left regular module if and only if it is semisimple as a right regular module. See [[thm-wedderburn-artin-theorem]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Statement.

[L1] A unital ring $R$ is semisimple when its left regular module ${}_R R$ is semisimple; the zero ring is semisimple because its regular module is zero. ([[def-semisimple-ring]]).

[L2] Let $R$ be a nonzero unital ring. Then $R$ is semisimple if and only if $$R\cong\prod_{i=1}^rM_{n_i}(D_i)$$ for positive integers $r,n_i$ and division rings $D_i$. ([[thm-wedderburn-artin-theorem]]).

[L3] For a unital ring $R$, the opposite ring $R^{\mathrm{op}}$ has the same underlying abelian group, identity, and addition as $R$, with multiplication $a\star b:=ba$. Associativity and both distributive laws follow from those of $R$ with the order reversed, and the same element $1$ is a two-sided identity. Thus the displayed operations really form a unital ring, including when $R$ is the zero ring. ([[def-opposite-ring]]).

[L4] For a division ring $D$ and $n\ge1$, the ring $M_n(D)$ is semisimple and its left regular module is a finite direct sum of simple column ideals. ([[thm-matrix-rings-over-division-rings-are-semisimple]]).

## Proof

**Proof technique:** direct.

1.1 First suppose that $R$ is semisimple on the left. If $R$ is the zero ring, its right regular module is also the zero module and is semisimple. Otherwise [L2] gives $R\cong\prod_iM_{n_i}(D_i)$. [L1, L2, given]

2.1 By [L4], it suffices to identify the opposite factors as matrix rings over division rings. Each $D_i^{\mathrm{op}}$ is a division ring, and entrywise transpose defines a ring isomorphism $$ M_{n_i}(D_i)^{\mathrm{op}}\longrightarrow M_{n_i}(D_i^{\mathrm{op}}),\qquad A\longmapsto A^{\mathsf T}, $$ because $(AB)^{\mathsf T}=B^{\mathsf T}A^{\mathsf T}$ with the products interpreted in the indicated rings. Hence $R^{\mathrm{op}}\cong\prod_iM_{n_i}(D_i^{\mathrm{op}})$. By [L4], each factor's left regular module is semisimple, and the regular module of the finite product is their finite direct sum. Thus $R^{\mathrm{op}}$ is left semisimple, equivalently $R$ is right semisimple. [L3, L4, step 1.1, given, algebra]

3.1 Conversely, if $R$ is right semisimple, then $R^{\mathrm{op}}$ is left semisimple. Applying steps 1.1–2.1 to $R^{\mathrm{op}}$ makes it right semisimple, which is exactly left semisimplicity of $R$. This also retains the zero-ring case. [L3, step 1.1, step 2.1, given, algebra] ∎
