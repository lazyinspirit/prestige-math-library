---
id: lem-finite-sum-reindexing-and-fubini
kind: lemma
title: "Finite commutative-monoid sums are invariant under bijective reindexing, split over disjoint unions, and satisfy the finite Fubini rule"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-finite-sum-in-a-commutative-monoid, thm-product-rule, thm-sum-rule, def-injection-surjection-bijection, thm-generalised-associativity]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "Andrade–da Cruz, Finite products in commutative monoids"
      url: "https://arxiv.org/abs/2605.08089"
pipeline_run: null
---

## Statement

Let $(M,+,0)$ be a commutative monoid and let all index sets below be finite.

1. If $h:T\to S$ is a bijection and $a:S\to M$, then $\sum_{t\in T}a_{h(t)}=\sum_{s\in S}a_s$.
2. If $S$ and $T$ are disjoint and $a:S\cup T\to M$, then $\sum_{u\in S\cup T}a_u=\sum_{s\in S}a_s+\sum_{t\in T}a_t$.
3. If $a:S\times T\to M$, then
   $$\sum_{(s,t)\in S\times T}a_{s,t}=\sum_{s\in S}\left(\sum_{t\in T}a_{s,t}\right)=\sum_{t\in T}\left(\sum_{s\in S}a_{s,t}\right).$$

## Facts & Assumptions

**Given:** A commutative monoid $(M,+,0)$, finite sets $S,T$, and functions and a bijection as in the Statement.

[F1] A finite commutative-monoid sum is obtained from any enumeration of its finite index set, and its value is independent of that enumeration ([[def-finite-sum-in-a-commutative-monoid]]).

[L1] A finite monoid product splits at a cut, may be regrouped into consecutive blocks, and in a commutative monoid is invariant under permutations ([[thm-generalised-associativity]]).

[L2] A finite family of pairwise disjoint finite sets has finite union, and its cardinality is the sum of the cardinalities; in particular, $|S\cup T|=|S|+|T|$ when $S$ and $T$ are disjoint ([[thm-sum-rule]]).

[L3] A Cartesian product of finite sets is finite with $|S\times T|=|S||T|$ ([[thm-product-rule]]).

[F2] Composites and inverses of bijections are bijections ([[def-injection-surjection-bijection]]).

## Proof

**Proof technique:** direct.

1.1 For clause 1, choose an enumeration $\phi:|T|\to T$. Then $h\circ\phi$ enumerates $S$, and [F1] gives $\sum_{t\in T}a_{h(t)}=\sum_{k<|T|}a_{h(\phi(k))}=\sum_{s\in S}a_s$. [F1, F2]

1.2 For clause 2, choose enumerations of $S$ and $T$ and concatenate them. By [L2] this gives an enumeration of $S\cup T$ of length $|S|+|T|$, and the splitting law in [L1] turns the resulting finite sum into the sum over $S$ followed by the sum over $T$. [F1, L1, L2]

1.3 For clause 3, choose enumerations $\phi:|S|\to S$ and $\psi:|T|\to T$. The disjoint slices $\{\phi(i)\}\times T$ cover $S\times T$; concatenate their $\psi$-enumerations in the order of $i$. By [L2] and [L3] this is an enumeration of $S\times T$, and regrouping it into the $|S|$ consecutive slices gives $\sum_{(s,t)\in S\times T}a_{s,t}=\sum_{s\in S}(\sum_{t\in T}a_{s,t})$. [F1, L1, L2, L3]

2.1 The column-major list also enumerates $S\times T$, and permutation invariance followed by regrouping into columns gives $\sum_{(s,t)\in S\times T}a_{s,t}=\sum_{t\in T}(\sum_{s\in S}a_{s,t})$. [step 1.3, F1, L1, L3]

3.1 Steps 1.1, 1.2, 1.3 and 2.1 prove reindexing, disjoint splitting and both finite Fubini equalities. [step 1.1, step 1.2, step 1.3, step 2.1] ∎
