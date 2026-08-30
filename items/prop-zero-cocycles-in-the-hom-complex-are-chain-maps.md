---
id: prop-zero-cocycles-in-the-hom-complex-are-chain-maps
kind: proposition
title: "Zero cocycles in the Hom complex are chain maps"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-hom-complex-of-chain-complexes, def-chain-map]
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, Chapter 1 of An Introduction to Homological Algebra"
      url: "https://math.mit.edu/~hrm/palestine/weibel/01-chain_complexes.pdf"
    - title: "Joseph J. Rotman, An Introduction to Homological Algebra, 2nd ed."
      url: "https://dokumen.pub/an-introduction-to-homological-algebra-2nbsped-9780387245270-9780387683249.html"
pipeline_run: frontier-25
---

## Statement

Let $u=(u_n)_n$ be a degree-$0$ element of
$\underline{\operatorname{Hom}}(C,D)_0$. Then $\partial u=0$ if and only if
$u:C_\bullet\to D_\bullet$ is a chain map.

## Facts & Assumptions

**Given:** A degree-$0$ graded morphism $u=(u_n)_n:C_\bullet\to D_\bullet$.

[L1] In degree $0$, the Hom-complex differential is $$ (\partial u)_n=d^D_nu_n-u_{n-1}d^C_n $$ ([[def-hom-complex-of-chain-complexes]]).

[L2] A chain map is a degreewise family satisfying $$d^D_nu_n=u_{n-1}d^C_n$$ for every $n$ ([[def-chain-map]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the equality $\partial u=0$ means exactly that $$d^D_nu_n-u_{n-1}d^C_n=0$$ for every $n\in\mathbb Z$. [L1, given, algebra]

2.1 Rewriting the equality in step 1.1 gives $$d^D_nu_n=u_{n-1}d^C_n$$ for every $n$, and [L2] is precisely this condition. Thus $\partial u=0$ if and only if $u$ is a chain map. [L2, step 1.1, algebra] ∎
