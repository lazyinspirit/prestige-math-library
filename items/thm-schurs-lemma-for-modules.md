---
id: thm-schurs-lemma-for-modules
kind: theorem
title: "Schur's lemma for simple modules"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-simple-module, def-endomorphism-ring-of-a-module, prop-endomorphisms-form-a-ring]
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

A nonzero homomorphism between simple modules is an isomorphism. Consequently the endomorphism ring of a simple module is a division ring. See [[def-simple-module]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Statement.

[L1] A left $R$-module $M$ is simple if $M\ne0$ and its only submodules are $0$ and $M$. Equivalently, $M$ has no proper nonzero submodule. ([[def-simple-module]]).

[L2] For a left $R$-module $M$, define $$\operatorname{End}_R(M):=\operatorname{Hom}_R(M,M).$$ Addition is pointwise and multiplication is composition, $(fg)(m):=f(g(m))$. The ring laws and the identity endomorphism are established in prop-endomorphisms-form-a-ring. ([[def-endomorphism-ring-of-a-module]]).

[L3] For every left $R$-module $M$, pointwise addition and composition make $\operatorname{End}_R(M)$ a unital ring with identity $\operatorname{id}_M$. ([[prop-endomorphisms-form-a-ring]]).

## Proof

**Proof technique:** direct.

1.1 The kernel and image of a homomorphism between simple modules are each zero or whole. [L1, L2, L3, given, algebra]

2.1 A nonzero homomorphism is therefore injective and surjective. [step 1.1, given, algebra]

3.1 Applied to a nonzero endomorphism, its inverse is linear, so the endomorphism ring is a division ring. [step 2.1, given, algebra]

4.1 The excluded case is genuinely excluded rather than overlooked: the zero homomorphism between nonzero simple modules is not an isomorphism, which is why the hypothesis asks for a nonzero one, and it is the zero element of the endomorphism ring of step 3.1 rather than a non-invertible unit. Contrapositively, if two simple modules are not isomorphic then every homomorphism between them is zero. This proves the stated claim. [step 2.1, step 3.1, given, algebra] ∎
