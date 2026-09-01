---
id: thm-krull-intersection-theorem
kind: theorem
title: "The Krull intersection is the $(1-a)$-torsion submodule, and it vanishes in the Jacobson-radical case"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-artin-rees-lemma, lem-determinant-trick-for-nakayama, thm-jacobson-radical-unit-characterisation, thm-finite-generation-and-finite-presentation-over-a-noetherian-ring]
aliases: []
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "Allen B. Altman and Steven L. Kleiman, A Term of Commutative Algebra, Exercise (20.19)"
      url: "https://web.mit.edu/18.705/www/12Nts.pdf"
    - title: "J. S. Milne, A Primer of Commutative Algebra, §24"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
---

## Statement

The first clause below is choice-free; the second uses the published
Jacobson-radical unit criterion and therefore inherits its Axiom-of-Choice
boundary.

Let $R$ be a Noetherian commutative ring, let $I\subset R$ be an ideal, and let
$M$ be a finite $R$-module. Put
$$
K:=\bigcap_{n\ge0} I^nM.
$$
Then:

1. $K$ is exactly the set of elements $m\in M$ for which $(1-a)m=0$ for some
   $a\in I$;
2. if $I\subseteq J(R)$, then $K=0$.

## Facts & Assumptions

**Given:** A Noetherian commutative ring $R$, an ideal $I\subset R$, a finite $R$-module $M$, and $K=\bigcap_{n\ge0}I^nM$.

[L1] Artin-Rees applies to the submodule $K\subseteq M$ ([[thm-artin-rees-lemma]]).

[L2] If a finite module $N$ satisfies $IN=N$, then $(1-a)N=0$ for some $a\in I$ ([[lem-determinant-trick-for-nakayama]]).

[L3] Assuming the Axiom of Choice, $a\in J(R)$ exactly when $1-ra$ is a unit for every $r\in R$ ([[thm-jacobson-radical-unit-characterisation]]).

[L4] A submodule of a finite module over a Noetherian ring is finite ([[thm-finite-generation-and-finite-presentation-over-a-noetherian-ring]]).

## Proof

**Proof technique:** direct.


1.1 Since $K\subseteq I^nM$ for every $n$, Artin-Rees gives some $c$ such that for all $n\ge c$, $ K=I^nM\cap K=I^{n-c}(I^cM\cap K)=I^{n-c}K. $ In particular $IK=K$. [L1, given]


1.2 Conversely, if $(1-a)m=0$ for some $a\in I$, then $m=am\in IM$. Iterating gives $m=a^nm\in I^nM$ for every $n\ge0$, hence $m\in K$. [given, algebra]


1.3 Steps 2.1 and 1.2 identify $K$ with the set of $(1-a)$-torsion elements claimed in part 1. [algebra]


2.1 The submodule $K\subseteq M$ is finite by [L4]. Applying [L2] to $K$ and the equality $IK=K$ from step 1.1 gives $a\in I$ with $ (1-a)K=0. $ So every element of $K$ satisfies the displayed torsion condition. [L2, L4, step 1.1, algebra]


3.1 Assume now $I\subseteq J(R)$. For any $m\in K$, step 2.1 gives some $a\in I\subseteq J(R)$ with $(1-a)m=0$. By [L3], $1-a$ is a unit, so multiplying by its inverse gives $m=0$. Thus $K=0$. [L3, step 2.1, algebra]


4.1 Therefore both stated conclusions hold. [algebra] ∎
