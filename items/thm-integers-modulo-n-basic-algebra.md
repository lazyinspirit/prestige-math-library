---
id: thm-integers-modulo-n-basic-algebra
kind: theorem
title: "For every natural $n$, $(\\mathbb{Z}/n,+)$ is an abelian group, multiplication is a commutative monoid operation, and both distributive laws hold"
status: published
origin: session
deps: [def-addition-and-multiplication-modulo-n, thm-int-comm-ring, def-group, def-semigroup-and-monoid]
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
    - title: "K. Conrad, Modular Arithmetic"
      url: "https://kconrad.math.uconn.edu/blurbs/ugradnumthy/modarithshort.pdf"
pipeline_run: null
---

## Statement

For every $n\in\mathbb N$, with addition and multiplication as in
[[def-addition-and-multiplication-modulo-n]]:

1. $(\mathbb Z/n,+,[0]_n)$ is an abelian group ([[def-group]]), with
   $-[a]_n=[-a]_n$;
2. $(\mathbb Z/n,\cdot,[1]_n)$ is a commutative monoid
   ([[def-semigroup-and-monoid]]);
3. multiplication distributes over addition on both sides.

The assertions include $n=0$ and $n=1$. At $n=1$, the two distinguished
identities coincide because $[0]_1=[1]_1$.

## Facts & Assumptions

**Given:** A natural number $n$ and classes $[a]_n,[b]_n,[c]_n$ in $\mathbb Z/n$.

[F1] $[u]_n+[v]_n=[u+v]_n$ and $[u]_n[v]_n=[uv]_n$, and these values are independent of representatives ([[def-addition-and-multiplication-modulo-n]]).

[L1] $\mathbb Z$ is a commutative ring: addition and multiplication are associative and commutative, $0$ and $1$ are identities, every integer has an additive inverse, and multiplication distributes over addition ([[thm-int-comm-ring]]).

[F2] An abelian group is an associative commutative binary operation with an identity and inverses; a commutative monoid is an associative commutative binary operation with an identity ([[def-group]], [[def-semigroup-and-monoid]]).

## Proof

**Proof technique:** direct.

1.1 Associativity and commutativity of addition follow from $([a]_n+[b]_n)+[c]_n=[(a+b)+c]_n=[a+(b+c)]_n=[a]_n+([b]_n+[c]_n)$ and $[a+b]_n=[b+a]_n$. [F1, L1]

1.2 The class $[0]_n$ is an additive identity, and $[-a]_n$ is an additive inverse of $[a]_n$, since $[a+0]_n=[a]_n$ and $[a+(-a)]_n=[0]_n$. [F1, L1]

1.3 Associativity and commutativity of multiplication follow from $[(ab)c]_n=[a(bc)]_n$ and $[ab]_n=[ba]_n$, while $[1]_n$ is a multiplicative identity because $[a\cdot1]_n=[a]_n$. [F1, L1]

1.4 Left distributivity is $[a]_n([b]_n+[c]_n)=[a(b+c)]_n=[ab+ac]_n=[a]_n[b]_n+[a]_n[c]_n$; right distributivity follows identically, or from commutativity. [F1, L1]

2.1 Steps 1.1 and 1.2 verify the abelian-group clauses, step 1.3 verifies the commutative-monoid clauses, and step 1.4 gives both distributive laws. [step 1.1, step 1.2, step 1.3, step 1.4, F2] ∎
