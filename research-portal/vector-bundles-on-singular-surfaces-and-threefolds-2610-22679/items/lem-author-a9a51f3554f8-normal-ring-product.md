---
id: lem-author-a9a51f3554f8-normal-ring-product
kind: lemma
title: A normal noetherian ring is a finite product of normal domains
status: draft
domain: mathematics
deps:
  - math:def-normal-noetherian-ring
  - math:cor-radical-ideal-has-finitely-many-minimal-primes-noetherian
  - math:def-axiom-of-choice
dependency_roles:
  math:def-normal-noetherian-ring: mathematical-premise
  math:cor-radical-ideal-has-finitely-many-minimal-primes-noetherian: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 0
---

## Statement
Assume the Axiom of Choice. Let $A$ be a commutative noetherian ring such that every localization $A_{\mathfrak p}$ at a prime ideal is an integrally closed domain. Then $A$ is canonically isomorphic to the finite product of its quotients by its minimal prime ideals, and those quotients are noetherian integrally closed domains. The zero ring is the empty product.

A prime is minimal if it contains no strictly smaller prime. A domain is integrally closed if every element of its fraction field satisfying a monic polynomial over the domain belongs to the domain. A ring is noetherian if every ideal is finitely generated.

## Statement references

[[math:def-normal-noetherian-ring]]

## Facts & Assumptions

[F1] A normal noetherian ring has the prime-localization property in the statement; the zero ring satisfies it vacuously ([[math:def-normal-noetherian-ring]]).

[F2] A radical ideal in a noetherian ring is the intersection of finitely many primes minimal over it; the supplier uses dependent choice, available here from the assumed Axiom of Choice ([[math:cor-radical-ideal-has-finitely-many-minimal-primes-noetherian]]).

[A1] The Axiom of Choice is available, including for the existence of maximal ideals containing proper ideals ([[math:def-axiom-of-choice]]).

## Proof

**Given:** A ring $A$ and the Axiom of Choice as in the statement.

**Goal:** Obtain the stated canonical product and prove that each factor is a normal noetherian domain.

1.1 If $a\ne0$ in $A$, its annihilator is proper, so by [A1] it is contained in a maximal ideal $\mathfrak m$. Then $a/1\ne0$ in $A_{\mathfrak m}$: otherwise some $s\notin\mathfrak m$ annihilates $a$. A nilpotent element maps to zero in every prime localization because these localizations are domains. Hence $A$ has no nonzero nilpotents, so its zero ideal is radical. [A1, given]

2.1 By [F2], $0=\bigcap_{i=1}^r\mathfrak p_i$ for the finitely many minimal primes. Distinct $\mathfrak p_i,\mathfrak p_j$ are comaximal. Otherwise their sum lies in a maximal ideal $\mathfrak m$ by [A1]. Their extensions to $A_{\mathfrak m}$ are distinct minimal primes: contraction of a prime below either extension is a prime below the corresponding $\mathfrak p_i$, and distinctness follows by choosing $a\in\mathfrak p_i\setminus\mathfrak p_j$ and using primality of $\mathfrak p_j$. This contradicts $A_{\mathfrak m}$ being a domain, whose only minimal prime is zero. [F2, A1, step 1.1, given]

3.1 For each $i$, choose $e_i$ congruent to $1$ modulo $\mathfrak p_i$ and to $0$ modulo every other $\mathfrak p_j$: multiply, over $j\ne i$, elements of $\mathfrak p_j$ congruent to $1$ modulo $\mathfrak p_i$. Therefore $A\to\prod_i A/\mathfrak p_i$ is surjective by the sum $\sum_i e_i a_i$, and it is injective because its kernel is the intersection in step 2.1. Each quotient is a noetherian domain. If $r=0$, the same kernel equality gives $A=0$ and the product is empty. [step 2.1, algebra]

4.1 Put $B=A/\mathfrak p_i$. For every prime $\mathfrak q$ of $B$, the corresponding localization of $B$ is a localization of the product in step 3.1 at a prime and hence is an integrally closed domain by [F1]. If $x$ in the fraction field of $B$ is integral over $B$, then its image is integral over every $B_{\mathfrak q}$ and therefore belongs to each. If $x\notin B$, the ideal $I=\{b\in B: bx\in B\}$ is proper; choose a maximal ideal $\mathfrak m\supseteq I$ using [A1]. The membership $x\in B_{\mathfrak m}$ would give an $s\notin\mathfrak m$ with $sx\in B$, a contradiction. Thus $B$ is integrally closed, completing the proof. [F1, A1, step 3.1] ∎
