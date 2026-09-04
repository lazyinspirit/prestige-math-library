---
id: lem-principal-crossed-homomorphisms-form-a-subgroup
kind: lemma
title: "Principal crossed homomorphisms form a subgroup"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-crossed-homomorphisms-with-abelian-coefficients-form-an-abelian-group, def-principal-crossed-homomorphism-for-abelian-coefficients]
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

For an abelian $G$-group $A$, the set $B^1(G,A)$ of principal crossed
homomorphisms is a subgroup of $Z^1(G,A)$.

## Facts & Assumptions

**Given:** A group $G$ acting on an abelian group $A$.

[L1] Crossed homomorphisms with abelian coefficients form an abelian group
([[lem-crossed-homomorphisms-with-abelian-coefficients-form-an-abelian-group]]).

[L2] Principal crossed homomorphisms are the maps $g\mapsto g\cdot a-a$
([[def-principal-crossed-homomorphism-for-abelian-coefficients]]).

## Proof

**Proof technique:** direct.

1.1 For $a\in A$ and $g,h\in G$, $(d a)(gh)=gh\cdot a-a=g\cdot(h\cdot a-a)+(g\cdot a-a)$, so every principal crossed homomorphism is a crossed homomorphism. Thus $B^1(G,A)\subseteq Z^1(G,A)$ by [L1] and [L2]. [given, L1, L2, algebra]

2.1 If $d a$ and $d b$ are principal, then $(d a+d b)(g)=g\cdot(a+b)-(a+b)=d(a+b)(g)$ and $-(d a)(g)=g\cdot(-a)-(-a)=d(-a)(g)$. So $B^1(G,A)$ is closed under sums and inverses, hence is a subgroup of $Z^1(G,A)$. [L1, L2, step 1.1, algebra] ∎
