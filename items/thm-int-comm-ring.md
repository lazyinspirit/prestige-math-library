---
id: thm-int-comm-ring
kind: theorem
title: "The integers form a commutative ring"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-integers, def-int-operations, lem-int-add-well-defined,
       lem-int-mul-well-defined, lem-nat-add-commutative,
       lem-nat-add-associative, lem-nat-add-identity,
       lem-nat-mult-commutative, lem-nat-mult-associative,
       lem-nat-mult-distributive, lem-nat-mult-identity]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-03
    scope: published-dependency-repair
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "T. Tao, Analysis I, 3rd ed., §4.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "E. Landau, Foundations of Analysis"
      url: "https://archive.org/details/foundationsofana0000land"
    - title: "Integer — construction from pairs of naturals (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Integer"
pipeline_run: null
---

## Statement

$(\mathbb{Z}, +, \cdot, 0, 1)$ with the operations of [[def-int-operations]] is
a commutative ring with multiplicative identity, in which every element has the
additive inverse $-[(a,b)] = [(b,a)]$.

## Facts & Assumptions

**Given:** $\mathbb{Z}$ with the operations of [[def-int-operations]].

[L1] Addition on $\mathbb{N}$ is commutative and associative, with zero as a two-sided identity ([[lem-nat-add-commutative]], [[lem-nat-add-associative]], [[lem-nat-add-identity]]).

[L2] Multiplication on $\mathbb{N}$ is commutative and associative, distributes over addition, and has the usual zero and identity laws ([[lem-nat-mult-commutative]], [[lem-nat-mult-associative]], [[lem-nat-mult-distributive]], [[lem-nat-mult-identity]]).

[L3] The integer operations are independent of representatives ([[lem-int-add-well-defined]], [[lem-int-mul-well-defined]]).

## Proof

**Proof technique:** direct.

1.1 By [L3], each axiom may be verified on arbitrary fixed representatives $(a,b), (c,d), (e,f)$. [L3, suffices]

1.2 Associativity of $+$: $((a,b)+(c,d))+(e,f)$ and $(a,b)+((c,d)+(e,f))$ both equal $(a+c+e,\; b+d+f)$. [L1]

1.3 Commutativity of $+$: $(a+c,\, b+d) = (c+a,\, d+b)$. [L1]

1.4 Additive identity: $(a,b) + (0,0) = (a+0,\, b+0) = (a,b)$. [L1]

1.5 Additive inverses: $(a,b) + (b,a) = (a+b,\, b+a) \sim (0,0)$, since $(a+b) + 0 = (b+a) + 0$. [L1]

1.6 Commutativity of $\cdot$: swapping $(a,b) \leftrightarrow (c,d)$ sends $(ac+bd,\, ad+bc)$ to $(ca+db,\, cb+da)$, the same pair. [L1, L2]

1.7 Multiplicative identity: $(a,b) \cdot (1,0) = (a \cdot 1 + b \cdot 0,\; a \cdot 0 + b \cdot 1) = (a,b)$. [L1, L2]

1.8 Associativity of $\cdot$: expanding, both $((a,b)(c,d))(e,f)$ and $(a,b)((c,d)(e,f))$ equal $(ace+adf+bcf+bde,\; acf+ade+bce+bdf)$. [L1, L2]

1.9 Distributivity: $(a,b) \cdot ((c,d)+(e,f)) = (a(c+e)+b(d+f),\; a(d+f)+b(c+e)) = (ac+bd,\, ad+bc) + (ae+bf,\, af+be) = (a,b)(c,d) + (a,b)(e,f)$. [L1, L2]

2.1 Steps 1.2–1.9 verify all axioms: $(\mathbb{Z}, +, \cdot, 0, 1)$ is a commutative ring with identity and additive inverses. [step 1.1, step 1.2, step 1.3, step 1.4, step 1.5, step 1.6, step 1.7, step 1.8, step 1.9] ∎
