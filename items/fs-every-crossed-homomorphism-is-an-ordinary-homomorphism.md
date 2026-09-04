---
id: fs-every-crossed-homomorphism-is-an-ordinary-homomorphism
kind: false-statement
title: "FALSE: every crossed homomorphism is an ordinary homomorphism"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-crossed-homomorphism-for-a-g-group]
proof_strategy: direct
verification:
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

Every crossed homomorphism is an ordinary homomorphism.

## Facts & Assumptions

**Given:** The nontrivial element $t$ of $C_2$ acting on $\mathbb Z$ by $t\cdot n=-n$.

[L1] A crossed homomorphism satisfies $z(gh)=z(g)+g\cdot z(h)$ for abelian
coefficients ([[def-crossed-homomorphism-for-a-g-group]]).

## Refutation

**Proof technique:** direct.

1.1 Define $z:C_2\to\mathbb Z$ by $z(1)=0$ and $z(t)=1$. Then $z(t^2)=z(1)=0=1+t\cdot1=z(t)+t\cdot z(t)$, so [L1] shows that $z$ is a crossed homomorphism. [given, L1, algebra]

2.1 But $z$ is not an ordinary homomorphism, because a homomorphism $C_2\to\mathbb Z$ must send $t$ to an element of order dividing $2$, hence to $0$, whereas $z(t)=1$. Therefore the claim is false. [L1, step 1.1, algebra] ∎
