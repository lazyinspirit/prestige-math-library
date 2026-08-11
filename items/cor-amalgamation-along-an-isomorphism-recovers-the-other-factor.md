---
id: cor-amalgamation-along-an-isomorphism-recovers-the-other-factor
kind: corollary
title: "A pushout along an isomorphism is isomorphic to the other factor"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: direct-corollary
deps: [def-pushout-of-group-homomorphisms, def-group-isomorphism-and-automorphism, lem-inverse-of-bijective-group-homomorphism]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references: []
pipeline_run: null
---
## Statement

If $f:K\to G$ is an isomorphism and $h:K\to H$ is any homomorphism, then the pushout is isomorphic to $H$, compatibly with the canonical maps.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement.

[L1] Given homomorphisms $f:K\to G$ and $h:K\to H$ as in def-group-homomorphism, a **pushout** is a group $P$ with homomorphisms $i_G:G\to P$ and $i_H:H\to P$ such that $i_G\circ f=i_H\circ h$, and such that every compatible pair $u:G\to Q$, $v:H\to Q$ factors through a unique $w:P\to Q$ with $w\circ i_G=u$ and $w\circ i_H=v$. The maps $f,h$ need not be injective. ([[def-pushout-of-group-homomorphisms]]).

[L2] Group isomorphisms, automorphisms and the set $\operatorname{Aut}(G)$. An **isomorphism** $f:G\to H$ is a bijective group homomorphism (def-group-homomorphism, def-injection-surjection-bijection). When $G=H$, it is an **automorphism** of $G$. Write $$\operatorname{Aut}(G):=\{f:G\to G:f\text{ is an automorphism}\}.$$ ([[def-group-isomorphism-and-automorphism]]).

[L3] The inverse of a bijective group homomorphism is a group homomorphism. If $f:G\to H$ is a bijective group homomorphism, then its set-theoretic inverse $f^{-1}:H\to G$ is a group homomorphism. ([[lem-inverse-of-bijective-group-homomorphism]]).

## Proof

**Proof technique:** direct.

1.1 The maps $h\circ f^{-1}:G\to H$ and $\mathrm{id}_H:H\to H$ are compatible because $(h\circ f^{-1})\circ f=h$. [given, L1, L2, L3]

2.1 For any other compatible pair $u:G\to Q$, $v:H\to Q$, compatibility forces $u=v\circ h\circ f^{-1}$, so the unique mediator from $H$ is $v$. [step 1.1]

3.1 Thus $H$ satisfies the pushout universal property and is uniquely isomorphic to the given pushout. The proof also covers trivial groups. [step 2.1, algebra] ∎
