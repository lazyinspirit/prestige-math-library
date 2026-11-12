---
id: lem-author-c5b0693f4fc3-top-torsion-primewise
kind: lemma
title: Primewise detection of torsion
status: published
domain: mathematics
deps:
  - math:def-group
  - math:def-group-power
  - math:prop-abelian-groups-are-z-modules
  - math:def-annihilator-and-torsion-of-a-module
  - math:def-injection-surjection-bijection
  - math:def-prime
  - math:thm-prime-factorisation-exists
  - math:lem-group-power-laws
  - math:ex-integers-are-an-integral-domain-not-a-field
  - math:thm-int-ordered-ring
dependency_roles:
  math:def-group: mathematical-premise
  math:def-group-power: mathematical-premise
  math:prop-abelian-groups-are-z-modules: mathematical-premise
  math:def-annihilator-and-torsion-of-a-module: mathematical-premise
  math:def-injection-surjection-bijection: mathematical-premise
  math:def-prime: mathematical-premise
  math:thm-prime-factorisation-exists: mathematical-premise
  math:lem-group-power-laws: mathematical-premise
  math:ex-integers-are-an-integral-domain-not-a-field: mathematical-premise
  math:thm-int-ordered-ring: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 0
---

## Statement
An abelian group $M$ is torsion-free if multiplication by every prime is injective.

## Facts & Assumptions
[F1] Write the abelian group $M$ additively, with identity $0$, as in [[math:def-group]]. Integer multiplication $nx$ is the additive integer-power construction of [[math:def-group-power]]; [[math:prop-abelian-groups-are-z-modules]] identifies it with the canonical $\mathbb Z$-module action. Write $[n]:M\to M$ for the function $x\mapsto nx$.

[F2] We use the torsion terminology of [[math:def-annihilator-and-torsion-of-a-module]] for the canonical $\mathbb Z$-module in [F1]. Its integral-domain hypothesis holds by [[math:ex-integers-are-an-integral-domain-not-a-field]], claim 1. Thus $x\in M$ is torsion when $rx=0$ for some nonzero integer $r$. This is equivalent to $nx=0$ for some positive integer $n$: by [[math:thm-int-ordered-ring]], either $r>0$, when take $n=r$, or $r<0$, when $n=-r>0$; in the latter case claim 2 of [[math:lem-group-power-laws]] gives $(-r)x=-(rx)=-0=0$. Here $-0=0$ because the identity is its own inverse by the group axioms in [F1]. Conversely any positive integer is nonzero. Hence torsion-free means that every element annihilated by a positive integer is $0$. This includes the trivial group and the annihilator $n=1$.

[F3] A function is injective when equality of its values implies equality of its inputs, as in [[math:def-injection-surjection-bijection]].

[F4] Primes are positive integers greater than $1$ whose only positive divisors are $1$ and themselves, as in [[math:def-prime]]. By [[math:thm-prime-factorisation-exists]], every positive integer is a finite product of primes; for $1$ the empty product suffices.

[F5] In additive notation, [[math:lem-group-power-laws]], claim 3, gives $a(bx)=(ab)x$ for integers $a,b$. The integer-power construction in [F1] gives $1x=x$ and $n0=0$: a nonnegative multiple of $0$ is a repeated sum of zeros, and a negative multiple is the inverse of such a sum.

## Proof
**Given:** An abelian group $M$ such that $[p]$ is injective for every prime $p$.

**Goal:** Show every torsion element is zero.

1.1 Let $n>0$. Factor $n$ into finitely many primes by [F4]. By [F5], the function $[n]$ is the composition of their multiplication functions, and for the empty product it is $[1]$, the identity. This composition is injective: an equality of output values allows cancellation of the outermost injective function by [F3], and repeating this through the finite list gives equality of the original inputs. The identity case is immediate from [F3]. Thus $[n]$ is injective for every positive integer $n$. [given, F1, F3, F4, F5]

2.1 Let $x$ be a torsion element. By [F2], some positive integer $n$ satisfies $nx=0$. By [F5], $[n](x)=0=[n](0)$, so injectivity from step 1.1 implies $x=0$. Therefore $M$ is torsion-free, with no restriction on the abelian group beyond the stated primewise injectivity. [F2, F5, step 1.1] ∎
