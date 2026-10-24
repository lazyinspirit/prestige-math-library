---
id: thm-local-ring-unit-characterisations
kind: theorem
title: 'Assuming the Axiom of Choice, a nonzero commutative ring is local exactly when its nonunits form an ideal, exactly when one of $x$ and $1-x$ is a unit for every $x$'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-local-ring, thm-proper-ideal-contained-in-maximal-ideal, lem-ring-units-form-a-group, def-left-right-and-two-sided-ideal]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-13
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: 'The Stacks Project, Lemma 10.18.3'
      url: 'https://stacks.math.columbia.edu/tag/07BH'
pipeline_run: frontier-12
---

## Statement

Assume the Axiom of Choice. For a nonzero commutative ring $R$, the following are equivalent:

1. $R$ is local;
2. the set of nonunits of $R$ is an ideal;
3. for every $x\in R$, at least one of $x$ and $1-x$ is a unit.

When these conditions hold, the ideal of nonunits is the unique maximal ideal.

## Facts & Assumptions

**Given:** A nonzero commutative ring $R$ and the Axiom of Choice.

[F1] A local ring is a nonzero commutative ring with one maximal ideal ([[def-local-ring]]).

[F2] Assuming Choice, every proper ideal in a nonzero commutative ring lies in a maximal ideal ([[thm-proper-ideal-contained-in-maximal-ideal]]).

[F3] Units contain $1$ and are closed under products and inverses; $0$ is not a unit in a nonzero ring ([[lem-ring-units-form-a-group]]).

[F4] An ideal contains $0$, is closed under addition and additive inverses, and absorbs multiplication by ring elements ([[def-left-right-and-two-sided-ideal]]).

## Proof

**Proof technique:** direct cycle of implications.

1.1 Assume $R$ is local with maximal ideal $\mathfrak m$. No element of $\mathfrak m$ is a unit. Conversely, if $x$ is a nonunit, then $(x)$ is proper and [F2] places it in a maximal ideal, necessarily $\mathfrak m$. Thus the nonunits are exactly $\mathfrak m$, proving condition 2. [F1, F2, F3]

1.2 Assume the nonunits form an ideal $N$. If both $x$ and $1-x$ were nonunits, then [F4] would give $1=x+(1-x)\in N$, contrary to [F3]. Hence condition 3 holds. [F3, F4]

1.3 Assume condition 3 and let $N$ be the nonunits. By [F3], $0\in N$. If $x\in N$ and $r\in R$, then $rx$ cannot be a unit, since an inverse for $rx$ would make $x$ a unit; also $-x$ cannot be a unit. [F3, algebra]

2.1 If $x,y\in N$ and $u=x+y$ were a unit, then $xu^{-1}$ and $yu^{-1}=1-xu^{-1}$ would both be nonunits, because a unit among either would make $x$ or $y$ a unit. This contradicts condition 3. Thus $x+y\in N$, and [F4] with step 1.3 shows that $N$ is an ideal. [F3, F4, step 1.3]

3.1 The ideal $N$ is proper because $1\notin N$. Every proper ideal consists entirely of nonunits, so it is contained in $N$. Hence $N$ is maximal and is the only maximal ideal; by [F1], $R$ is local. [F1, F3, F4, step 2.1] ∎
