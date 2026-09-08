---
id: lem-irreducible-submodule-is-primary-noetherian
kind: lemma
title: "An irreducible submodule of a Noetherian module is primary"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-chain-conditions-in-short-exact-sequences, def-quotient-module, lem-primary-submodule-zero-divisor-characterisation, thm-equivalent-characterizations-of-noetherian-modules]
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: Codex
    verdict: repaired-and-locally-checked
    date: 2026-09-08
    scope: "Owner-authorized ACC dependency and proof clarification; local checks only, no independent judge"
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, Theorem 19.18"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., proof of Theorem (18.21)"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
---

## Statement

Let $R$ be a commutative ring, let $M$ be a Noetherian left $R$-module, and let
$Q \subsetneq M$ be **irreducible**, meaning that whenever
$$ Q=A\cap B $$
with submodules $A,B \subseteq M$, then $Q=A$ or $Q=B$. Then $Q$ is primary.

## Facts & Assumptions

**Given:** A commutative ring $R$, a Noetherian left $R$-module $M$, and an irreducible proper submodule $Q \subsetneq M$.

[L1] In a short exact sequence, a quotient of a Noetherian module is again Noetherian ([[thm-chain-conditions-in-short-exact-sequences]]).

[L2] The quotient module $M/Q$ is formed from the cosets of $Q$ ([[def-quotient-module]]).

[L3] A proper submodule is primary exactly when the classical power condition of the previous lemma holds ([[lem-primary-submodule-zero-divisor-characterisation]]).

[L4] If every submodule is finitely generated, every ascending sequence of submodules stabilizes. This implication uses no choice principle ([[thm-equivalent-characterizations-of-noetherian-modules]], condition 1 implies condition 2).

## Proof

**Proof technique:** direct.

1.1 Let $N=M/Q$. By [L1], the quotient module $N$ is Noetherian. The submodule $0 \subset N$ is irreducible: if $0=A'\cap B'$ in $N$, then taking inverse images in $M$ gives $Q=A\cap B$ with $Q \subseteq A,B$, so the irreducibility of $Q$ forces $A=Q$ or $B=Q$, hence $A'=0$ or $B'=0$. [L1, L2, given, algebra]

2.1 Let $x \in R$ be a zero divisor on $N$, and write $K_k:=\{y\in N:x^ky=0\}$. Since $R$ is commutative, multiplication by $x^k$ is $R$-linear, so $K_k$ and $x^kN$ are submodules. Also $K_1\ne0$ and $K_k\subseteq K_{k+1}$. By [L4] this ascending sequence stabilizes; choose $n\ge1$ beyond its stabilization index, so $K_n=K_{2n}$. If $z\in K_n\cap x^nN$, write $z=x^ny$. Then $x^{2n}y=x^nz=0$, hence $y\in K_{2n}=K_n$ and $z=0$. Thus $0=K_n\cap x^nN$. This uses only the choice-free implication of [L4]. [L4, step 1.1, choose, algebra]

3.1 Since $0\ne K_1\subseteq K_n$, irreducibility of $0\subset N$ and $0=K_n\cap x^nN$ force $x^nN=0$. Consequently, if $xm\in Q$ and $m\notin Q$, the nonzero coset $m+Q$ shows that $x$ is a zero divisor on $N$, so some $n\ge1$ satisfies $x^nM\subseteq Q$. By [L3], $Q$ is primary. [L2, L3, step 1.1, step 2.1, algebra]

4.1 Hence every irreducible submodule of a Noetherian module is primary, without an additional choice assumption. [step 1.1, step 3.1] ∎
