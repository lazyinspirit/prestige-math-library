---
id: lem-normal-hall-subgroup-gives-a-coprime-extension
kind: lemma
title: "A normal Hall subgroup presents the ambient group as an extension of coprime orders"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-hall-pi-subgroup, thm-lagrange, cor-order-of-a-quotient-group]
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

Let $N\trianglelefteq G$ be a normal Hall $\pi$-subgroup of a finite group $G$.
Then

$$1\to N\to G\to G/N\to1$$

is a group extension with $\gcd(|N|,|G/N|)=1$.

## Facts & Assumptions

**Given:** A finite group $G$ and a normal Hall $\pi$-subgroup $N\trianglelefteq G$.

[L1] A Hall $\pi$-subgroup has order coprime to its index ([[def-hall-pi-subgroup]]).

[L2] For a finite group, the order of a quotient is the index of the kernel
([[cor-order-of-a-quotient-group]]).

[L3] For a finite group and a subgroup, the group order is subgroup order times
index ([[thm-lagrange]]).

## Proof

**Proof technique:** direct.

1.1 Because $N$ is a Hall $\pi$-subgroup, [L1] gives $\gcd(|N|,[G:N])=1$. [given, L1]

2.1 Since $N\trianglelefteq G$, the quotient $G/N$ exists and [L2] gives $|G/N|=[G:N]$. Therefore step 1.1 says exactly that $\gcd(|N|,|G/N|)=1$. The displayed short exact sequence is the standard quotient extension. [L2, L3, step 1.1] ∎
