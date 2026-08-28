---
id: lem-irreducible-submodule-is-primary-noetherian
kind: lemma
title: "An irreducible submodule of a Noetherian module is primary"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-chain-conditions-in-short-exact-sequences, def-quotient-module, lem-primary-submodule-zero-divisor-characterisation]
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
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
$$
Q=A\cap B
$$
with submodules $A,B \subseteq M$, then $Q=A$ or $Q=B$. Then $Q$ is primary.

## Facts & Assumptions

**Given:** A commutative ring $R$, a Noetherian left $R$-module $M$, and an irreducible proper submodule $Q \subsetneq M$.

[L1] In a short exact sequence, a quotient of a Noetherian module is again Noetherian ([[thm-chain-conditions-in-short-exact-sequences]]).

[L2] The quotient module $M/Q$ is formed from the cosets of $Q$ ([[def-quotient-module]]).

[L3] A proper submodule is primary exactly when the classical power condition of the previous lemma holds ([[lem-primary-submodule-zero-divisor-characterisation]]).

## Proof

**Proof technique:** direct.

1.1 Let $N=M/Q$. By [L1], the quotient module $N$ is Noetherian. The submodule $0 \subset N$ is irreducible: if $0=A'\cap B'$ in $N$, then taking inverse images in $M$ gives $Q=A\cap B$ with $Q \subseteq A,B$, so the irreducibility of $Q$ forces $A=Q$ or $B=Q$, hence $A'=0$ or $B'=0$. [L1, L2, given, algebra]

2.1 Let $x \in R$ be a zero divisor on $N$. Then $(0:_N x)\neq0$. Because $N$ is Noetherian, the ascending chain $$ (0:_N x)\subseteq (0:_N x^2)\subseteq\cdots $$ stabilizes; choose $n \ge 1$ with $(0:_N x^n)=(0:_N x^{n+1})=(0:_N x^{2n})$. If $z \in (0:_N x^n)\cap x^nN$, write $z=x^ny$. Then $x^nz=0$, so $x^{2n}y=0$ and hence $y \in (0:_N x^{2n})=(0:_N x^n)$. Therefore $z=x^ny=0$, and $$ 0=(0:_N x^n)\cap x^nN. $$ [step 1.1, choose, algebra]

3.1 Since $(0:_N x)\subseteq (0:_N x^n)$ is nonzero, the irreducibility of $0 \subset N$ and the decomposition in step 2.1 force $x^nN=0$. Thus every zero divisor on $N$ acts nilpotently on $N$. By [L3], this means $Q$ is primary. [L3, step 2.1, algebra]

4.1 Hence every irreducible submodule of a Noetherian module is primary. [step 1.1, step 3.1] ∎
