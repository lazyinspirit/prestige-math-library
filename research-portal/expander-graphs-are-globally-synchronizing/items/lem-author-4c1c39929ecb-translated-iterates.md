---
id: lem-author-4c1c39929ecb-translated-iterates
kind: lemma
title: Translate every finite forward orbit without assuming global invertibility
domain: mathematics
status: published
origin: pipeline
deps:
  - lem-author-4c1c39929ecb-fixed-point-translation
  - math:thm-induction-principle
dependency_roles:
  lem-author-4c1c39929ecb-fixed-point-translation: mathematical-premise
  math:thm-induction-principle: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 1
---

## Statement

Use the translation $\tau(y)=p+y$ and conjugate $f(y)=h(p+y)-p$ of the fixed-point translation lemma. For every integer $n\ge0$, the iterates through time $n$ are defined at $y$ for $f$ exactly when they are defined at $p+y$ for $h$, and then $h^n(p+y)=p+f^n(y)$. An iterate of a local map is defined only if all preceding points lie in its domain; $h^0$ and $f^0$ are identities. Consequently, for any $B\subseteq U-p$, every forward iterate of $y$ lies in $B$ exactly when every forward iterate of $p+y$ lies in $p+B$.

## Facts & Assumptions

[F1] The conjugacy is defined on $U-p$ and obeys $h\circ\tau=\tau\circ f$ [[lem-author-4c1c39929ecb-fixed-point-translation]].

[F2] Mathematical induction: if a property holds at $0$ and its validity at $n$ implies its validity at $n+1$ for every $n\ge0$, it holds for all nonnegative integers [[math:thm-induction-principle]].

## Proof

**Given:** The maps, domains and iterate convention in the Statement.

**Goal:** Establish equality of the orbit conditions, including their domains.

1.1 At time zero the equality is $p+y=p+y$. If it holds through time $n$, then $f^n(y)\in U-p$ exactly when $h^n(p+y)\in U$. These are precisely the conditions for the next iterate to be defined, and conjugacy gives $h^{n+1}(p+y)=p+f^{n+1}(y)$. Induction proves the claim for every finite $n$. [given, F1, F2]

2.1 Applying the finite identity for each $n\ge0$ gives $f^n(y)\in B$ exactly when $h^n(p+y)\in p+B$. Requiring these equivalent conditions for every $n$ proves the assertion about complete forward orbits. [step 1.1] ∎
