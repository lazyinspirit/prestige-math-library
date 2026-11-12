---
id: lem-author-30ec96de6e59-seminormal-ring-reduced
kind: lemma
title: The square-cube condition implies reducedness
status: published
domain: mathematics
deps:
  - math:def-commutative-ring
  - math:def-nilradical-and-reduced-ring
dependency_roles:
  math:def-commutative-ring: mathematical-premise
  math:def-nilradical-and-reduced-ring: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 0
---

## Statement
If a commutative ring $A$ has a unique $a\in A$ with $a^2=x$ and $a^3=y$ for every pair $x,y\in A$ with $x^3=y^2$, then $A$ is reduced: it has no nonzero nilpotent element.

## Facts & Assumptions

**Given:** A commutative ring satisfying the stated square-cube condition.

[F1] The commutative ring structure, including its multiplication and zero, is as in [[math:def-commutative-ring]]. Powers denote repeated multiplication, with $a^0=1$ and $a^{m+1}=a^m a$ for integers $m\geq 0$.

[F2] By [[math:def-nilradical-and-reduced-ring]], an element $t\in A$ is nilpotent exactly when $t^n=0$ for some integer $n\geq 1$, and $A$ is reduced exactly when every such element is zero.

**Goal:** Show that every nilpotent element vanishes.

## Proof

1.1 If $z^2=0$, then $z^3=z^2z=0$ as well. Both $0$ and $z$ have square and cube equal to zero, so uniqueness applied to $(x,y)=(0,0)$ gives $z=0$. [given, F1, algebra]

2.1 Let $t$ be nilpotent, so $t^n=0$ for some positive integer $n$. Choose an integer $k\geq 0$ with $2^k\geq n$; then $t^{2^k}=t^n t^{2^k-n}=0$. For $j=k,k-1,\ldots,1$, apply step 1.1 to $z=t^{2^{j-1}}$, whose square is $t^{2^j}$, to obtain $t^{2^{j-1}}=0$. This finite descent ends with $t=0$ (already true at the start if $k=0$). Thus $A$ is reduced. [F1, F2, step 1.1, construct, algebra] ∎
