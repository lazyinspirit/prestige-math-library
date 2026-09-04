---
id: lem-crossed-homomorphisms-with-abelian-coefficients-form-an-abelian-group
kind: lemma
title: "With abelian coefficients, crossed homomorphisms form an abelian group"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-crossed-homomorphism-for-a-g-group]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "David A. Craven, Finite Group Theory"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/finitegroups2012.pdf"
---

## Statement

Let $G$ act on an abelian group $A$ by automorphisms. The set

$$Z^1(G,A):=\{z:G\to A:z(gh)=z(g)+g\cdot z(h)\}$$

is an abelian group under pointwise addition.

## Facts & Assumptions

**Given:** A group $G$ acting on an abelian group $A$.

[L1] For abelian coefficients, a crossed homomorphism satisfies
$z(gh)=z(g)+g\cdot z(h)$ ([[def-crossed-homomorphism-for-a-g-group]]).

## Proof

**Proof technique:** direct.

1.1 If $z,w\in Z^1(G,A)$, then $(z+w)(gh)=z(gh)+w(gh)=z(g)+w(g)+g\cdot z(h)+g\cdot w(h)=(z+w)(g)+g\cdot(z+w)(h)$, so $z+w$ is again a crossed homomorphism by [L1]. [given, L1, algebra]

2.1 The zero map is a crossed homomorphism, and if $z\in Z^1(G,A)$ then $(-z)(gh)=-z(gh)=-z(g)+g\cdot(-z(h))$, so $-z$ is one as well. Thus pointwise addition makes $Z^1(G,A)$ a subgroup of the abelian group $A^G$. In particular it is abelian. [L1, step 1.1, algebra] ∎
