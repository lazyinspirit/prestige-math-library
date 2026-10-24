---
id: cor-finite-type-algebra-over-a-principal-ideal-domain-is-noetherian
kind: corollary
title: "Every algebra of finite type over a principal ideal domain is a Noetherian ring"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [cor-finite-type-algebra-over-noetherian-ring-is-noetherian, cor-principal-ideal-domains-are-noetherian, def-finite-type-and-module-finite-algebras, def-principal-ideal-domain]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "M. Hochster, Introduction to Commutative Algebra, Math 614, Corollary 5.9"
      url: "http://web.archive.org/web/20230308152844if_/https://dept.math.lsa.umich.edu/~hochster/615W22/614Lx.pdf"
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., §16"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
pipeline_run: null
---

## Statement

Let $R$ be a principal ideal domain ([[def-principal-ideal-domain]]) and let $A$
be a commutative $R$-algebra of finite type
([[def-finite-type-and-module-finite-algebras]]). Then $A$ is a Noetherian ring.

## Facts & Assumptions

**Given:** A principal ideal domain $R$ and a commutative $R$-algebra $A$ of finite type. A field is a principal ideal domain under the definition in force here: it is an integral domain, and its only ideals are $(0)$ and $(1)$, both principal. So the field case falls under this statement rather than outside it.

[F1] An integral domain $R$ is a **principal ideal domain** (PID) if every ideal $I\trianglelefteq R$ is principal: there is an $a\in R$ with $I=(a)$ ([[def-principal-ideal-domain]]).

[L1] Every principal ideal domain is Noetherian ([[cor-principal-ideal-domains-are-noetherian]]).

[L2] Every commutative algebra of finite type over a Noetherian commutative ring is a Noetherian ring ([[cor-finite-type-algebra-over-noetherian-ring-is-noetherian]]).

## Proof

**Proof technique:** direct.

1.1 The base ring $R$ is a principal ideal domain, hence an integral domain and in particular a commutative ring, and hence a Noetherian ring. [F1, L1, given]

2.1 The algebra $A$ is of finite type over the Noetherian commutative ring $R$, so it is a Noetherian ring. [L2, step 1.1] ∎
