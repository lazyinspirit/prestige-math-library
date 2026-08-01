---
id: prop-integers-modulo-n-as-a-quotient-group
kind: proposition
title: 'For every $n\in\mathbb N$, the congruence-class group $(\mathbb Z/n,+)$ is the quotient group $(\mathbb Z,+)/n\mathbb Z$'
status: draft
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-quotient-group-laws, cor-subgroups-of-abelian-groups-are-normal, thm-int-comm-ring, def-subgroup, def-congruence-modulo-an-integer, def-integers-modulo-n, def-addition-and-multiplication-modulo-n, thm-integers-modulo-n-basic-algebra, lem-nat-embeds-int]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Ernst, An Inquiry-Based Approach to Abstract Algebra, Quotients of Groups"
      url: "https://math.libretexts.org/Bookshelves/Abstract_and_Geometric_Algebra/An_Inquiry-Based_Approach_to_Abstract_Algebra_%28Ernst%29/06%3A_Products_and_Quotients_of_Groups/6.02%3A_Quotients_of_Groups"
pipeline_run: null
---

## Statement

For every $n\in\mathbb N$, view $n$ as its canonical nonnegative integer and
put $n\mathbb Z:=\{nk:k\in\mathbb Z\}$. Then the left cosets of $n\mathbb Z$
in $(\mathbb Z,+)$ are exactly the congruence classes modulo $n$, and coset
addition is the published addition of congruence classes. Thus

$$(\mathbb Z,+)/n\mathbb Z=(\mathbb Z/n,+)$$

as the same group on the same underlying set. This includes $n=0$ and $n=1$.

## Facts & Assumptions

**Given:** A natural number $n$, viewed in $\mathbb Z$ under the canonical embedding, and the set $n\mathbb Z=\{nk:k\in\mathbb Z\}$.

[L1] The integers form a commutative ring with identity ([[thm-int-comm-ring]]), and the canonical embedding of $\mathbb N$ preserves addition and multiplication ([[lem-nat-embeds-int]]).

[F1] A subset of a group is a subgroup when it contains the identity and is closed under the operation and inverses ([[def-subgroup]]).

[L2] Every subgroup of an abelian group is normal ([[cor-subgroups-of-abelian-groups-are-normal]]).

[F2] The congruence $x\equiv a\pmod n$ means that $x-a=nq$ for some $q\in\mathbb Z$ ([[def-congruence-modulo-an-integer]]).

[F3] The congruence class is $[a]_n=\{x\in\mathbb Z:x\equiv a\pmod n\}$ ([[def-integers-modulo-n]]).

[F4] Addition modulo $n$ is $[a]_n+[b]_n=[a+b]_n$ ([[def-addition-and-multiplication-modulo-n]]).

[L3] The cosets of a normal subgroup form a group under $(a+N)+(b+N)=(a+b)+N$ ([[thm-quotient-group-laws]]).

[L4] For every $n\in\mathbb N$, $(\mathbb Z/n,+,[0]_n)$ is an abelian group, including at $n=0$ and $n=1$ ([[thm-integers-modulo-n-basic-algebra]]).

## Proof

**Proof technique:** direct.

1.1 The set $n\mathbb Z$ contains $0=n0$; if $nk,n\ell\in n\mathbb Z$, then $nk+n\ell=n(k+\ell)$ and $-(nk)=n(-k)$ also lie in $n\mathbb Z$. Hence $n\mathbb Z\le(\mathbb Z,+)$. [L1, F1, algebra]

1.2 For $a,x\in\mathbb Z$, one has $x\in a+n\mathbb Z$ if and only if $x=a+nq$ for some $q\in\mathbb Z$, if and only if $x\equiv a\pmod n$, if and only if $x\in[a]_n$. Therefore $a+n\mathbb Z=[a]_n$. [F2, F3, algebra]

2.1 Since $(\mathbb Z,+)$ is abelian, the subgroup $n\mathbb Z$ is normal. [step 1.1, L2]

2.2 Under the equality in step 1.2, [L3] and [F4] give $(a+n\mathbb Z)+(b+n\mathbb Z)=(a+b)+n\mathbb Z=[a+b]_n=[a]_n+[b]_n$. [step 1.2, F4, L3]

3.1 Steps 2.1, 1.2, and 2.2 show that the quotient group and the group of congruence classes have the same underlying set and operation; [L4] confirms the published group convention, including $n=0$ and $n=1$. [step 2.1, step 1.2, step 2.2, L4] ∎
