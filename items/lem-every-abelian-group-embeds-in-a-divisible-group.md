---
id: lem-every-abelian-group-embeds-in-a-divisible-group
kind: lemma
title: "Every abelian group embeds in a divisible abelian group"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-every-module-is-a-quotient-of-a-free-module, def-divisible-module-over-an-integral-domain, def-direct-sum-of-a-family-of-modules, thm-rat-field]
justified_by: []
aliases: []
landmark: true
proof_strategy: constructive
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "A. Kleshchev, Lectures on Abstract Algebra for Graduate Students, sections 3.6, 3.14, and 3.15"
      url: "https://darkwing.uoregon.edu/~klesh/teaching/Alg600LN12.pdf"
    - title: "The Stacks Project, Algebra"
      url: "https://stacks.math.columbia.edu/tag/05CD"
    - title: "P. Hekmati, Homological Algebra, section 3.1"
      url: "https://www.math.auckland.ac.nz/~hekmati/HomologicalAlgebra.pdf"
pipeline_run: null
---

## Statement

Every abelian group $A$ admits an injective homomorphism into a divisible abelian group. The construction uses no choice principle.

## Facts & Assumptions

**Given:** An abelian group $A$, viewed as a $\mathbb Z$-module.

[L1] The canonical map $F=\mathbb Z^{(A)}\to A$ is surjective and identifies $A$ with $F/K$, where $K$ is its kernel ([[cor-every-module-is-a-quotient-of-a-free-module]]).

[F1] An abelian group is divisible if multiplication by every nonzero integer is surjective ([[def-divisible-module-over-an-integral-domain]]).

[F2] Direct sums consist of finite-support tuples ([[def-direct-sum-of-a-family-of-modules]]).

[L2] $\mathbb Q$ is a field and therefore permits division by every nonzero integer ([[thm-rat-field]]).

## Proof

**Proof technique:** constructive.

1.1 Let $F=\mathbb Z^{(A)}$, let $\varepsilon:F\to A$ be the canonical surjection, and put $K=\ker\varepsilon$; by [L1], $A\cong F/K$. [L1, construct]

1.2 The group $Q$ is divisible: for a finite-support tuple $q$ and a nonzero integer $n$, divide each of its finitely many nonzero rational coordinates by $n$ using [L2]. [F2, L2]

2.1 Embed $F$ coordinatewise into $Q:=\mathbb Q^{(A)}$, and regard $K$ as a subgroup of $Q$. Define $D:=Q/K$ and $j:F/K\to D$ by $j(f+K)=f+K$. This is well defined and injective because $F\cap K=K$. [step 1.1, F2, L2, construct]

2.2 A quotient of a divisible group is divisible: if $q+K\in D$ and $n\ne0$, choose $y\in Q$ with $ny=q$ by step 1.2; then $n(y+K)=q+K$. Thus $D$ is divisible by [F1]. [step 1.2, F1]

3.1 Composing the isomorphism $A\cong F/K$ from step 1.1 with the injection $j$ of step 2.1 embeds $A$ in the divisible group $D$. Every division was coordinatewise on finite support, so no choice was used. [step 1.1, step 2.1, step 2.2, discharge-construct] ∎
