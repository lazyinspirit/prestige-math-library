---
id: lem-author-da44cda020c0-units-k1-split-surjective-homomorphism
kind: lemma
title: A right inverse makes a homomorphism surjective
status: draft
domain: mathematics
deps: []
dependency_roles: {}
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 0
---

## Statement
Let $d:G\to H$ and $s:H\to G$ be group homomorphisms with $d\circ s=\operatorname{id}_H$. Then $d$ is surjective and $s$ is injective. If $G$ is abelian, $G$ is the internal direct sum of $\ker(d)$ and $s(H)$.

Here $\ker(d)$ is the subgroup of elements mapped to the identity, and an internal direct sum means that each element has a unique expression as a product of one element from each subgroup.

## Facts & Assumptions
**Given:** Group homomorphisms $d,s$ with $d\circ s=\operatorname{id}_H$.

**Goal:** Prove surjectivity, injectivity and, when $G$ is abelian, the direct-sum decomposition.

## Proof
**Proof technique:** Apply the right-inverse identity and decompose an arbitrary element.

1.1 Each $h\in H$ equals $d(s(h))$, so $d$ is surjective. If $s(h)=s(h')$, applying $d$ gives $h=h'$, so $s$ is injective. [given, algebra]

2.1 Suppose $G$ is abelian. For $g\in G$, put $k=g\,s(d(g))^{-1}$. Then $d(k)=1$, so $g=k\,s(d(g))$ lies in $\ker(d)s(H)$. If $s(h)\in\ker(d)$, then $h=d(s(h))=1$, so the two subgroups intersect only in the identity. The expression is therefore unique, and commutativity gives the internal direct sum. [given, step 1.1, algebra] ∎
