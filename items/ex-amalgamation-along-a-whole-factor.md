---
id: ex-amalgamation-along-a-whole-factor
kind: example
title: "Amalgamating along a whole factor recovers the other group"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-pushout-of-group-homomorphisms, def-group-isomorphism-and-automorphism, lem-inverse-of-bijective-group-homomorphism, prop-integers-modulo-n-as-a-quotient-group]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references: []
pipeline_run: null
---
## Example

Let $f:K\to G$ be an isomorphism and $h:K\to H$ any homomorphism. The pushout is $H$, with legs $h\circ f^{-1}:G\to H$ and $\mathrm{id}_H$. For example, pushing $C_4\xleftarrow{\cong}C_4\to C_2$ along reduction modulo $2$ gives $C_2$.

## Facts & Assumptions

**Given:** The objects and hypotheses in the example.

[L1] Given homomorphisms $f:K\to G$ and $h:K\to H$ as in def-group-homomorphism, a **pushout** is a group $P$ with homomorphisms $i_G:G\to P$ and $i_H:H\to P$ such that $i_G\circ f=i_H\circ h$, and such that every compatible pair $u:G\to Q$, $v:H\to Q$ factors through a unique $w:P\to Q$ with $w\circ i_G=u$ and $w\circ i_H=v$. The maps $f,h$ need not be injective. ([[def-pushout-of-group-homomorphisms]]).

[L2] Group isomorphisms, automorphisms and the set $\operatorname{Aut}(G)$. An **isomorphism** $f:G\to H$ is a bijective group homomorphism (def-group-homomorphism, def-injection-surjection-bijection). When $G=H$, it is an **automorphism** of $G$. Write $$\operatorname{Aut}(G):=\{f:G\to G:f\text{ is an automorphism}\}.$$ ([[def-group-isomorphism-and-automorphism]]).

[L3] The inverse of a bijective group homomorphism is a group homomorphism. If $f:G\to H$ is a bijective group homomorphism, then its set-theoretic inverse $f^{-1}:H\to G$ is a group homomorphism. ([[lem-inverse-of-bijective-group-homomorphism]]).

[L4] For every $n\in\mathbb N$, view $n$ as its canonical nonnegative integer and put $n\mathbb Z:=\{nk:k\in\mathbb Z\}$. Then the left cosets of $n\mathbb Z$ in $(\mathbb Z,+)$ are exactly the congruence classes modulo $n$, and coset addition is the published addition of congruence classes. Thus $$(\mathbb Z,+)/n\mathbb Z=(\mathbb Z/n,+)$$ as the same group on the same underlying set. This includes $n=0$ and $n=1$. ([[prop-integers-modulo-n-as-a-quotient-group]]).

## Verification

**Proof technique:** direct.

1.1 The two displayed legs agree on $K$: $(h\circ f^{-1})\circ f=h$. [given, L1, L2, L3, L4]

2.1 For a compatible pair $u:G\to Q$, $v:H\to Q$, one has $u=v\circ h\circ f^{-1}$, so $v$ is the unique mediator from $H$. [step 1.1]

3.1 In the cyclic example this says the $C_4$ leg is reduction modulo $2$, the $C_2$ leg is the identity, and every compatible cocone factors uniquely through $C_2$. [step 2.1] ∎
