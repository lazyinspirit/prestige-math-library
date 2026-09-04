---
id: cor-first-cohomology-for-a-trivial-action-is-hom
kind: corollary
title: "For a trivial action, first cohomology is Hom"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-group-homomorphism, thm-the-inhomogeneous-one-cocycle-model-agrees-with-crossed-homomorphisms-in-degree-one]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "David A. Craven, Finite Group Theory"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/finitegroups2012.pdf"
---

## Statement

If $G$ acts trivially on an abelian group $A$, then

$$H^1(G,A)\cong\operatorname{Hom}(G,A).$$

## Facts & Assumptions

**Given:** A trivial action of $G$ on an abelian group $A$.

[L1] The crossed-homomorphism model computes $H^1(G,A)$
([[thm-the-inhomogeneous-one-cocycle-model-agrees-with-crossed-homomorphisms-in-degree-one]]).

[L2] A group homomorphism $f:G\to A$ is characterized by $f(gh)=f(g)+f(h)$ in
additive notation ([[def-group-homomorphism]]).

## Proof

**Proof technique:** direct.

1.1 Under the trivial action, the crossed-homomorphism identity becomes $z(gh)=z(g)+z(h)$, which is exactly the homomorphism law of [L2]. So crossed homomorphisms are precisely the homomorphisms $G\to A$. [given, L1, L2]

2.1 Principal crossed homomorphisms are all zero, because $g\cdot a-a=a-a=0$ for every $g$ and $a$. Therefore the quotient $H^1(G,A)$ is just the group of homomorphisms from step 1.1. [L1, step 1.1, algebra] ∎
