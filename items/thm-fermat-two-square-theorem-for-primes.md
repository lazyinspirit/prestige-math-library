---
id: thm-fermat-two-square-theorem-for-primes
kind: theorem
title: "Fermat's two-square theorem for primes"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-sum-of-two-squares-representation, lem-thue-small-representatives, thm-first-supplement-to-quadratic-reciprocity, def-legendre-symbol, def-congruence-modulo-an-integer]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
sources:
  scraped: []
  references:
    - title: "P. Hackman, Elementary Number Theory, Chapter E, Theorem E.I.2"
      url: "https://courses.mai.liu.se/GU/TATA54/Dokument/booktot.pdf"
    - title: "W. Stein, Elementary Number Theory: Primes, Congruences, and Secrets, Theorem 5.7.1"
      url: "https://wstein.org/ent/ent.pdf"
pipeline_run: null
---

## Statement

A prime $p$ is a sum of two integer squares if and only if $p=2$ or $p\equiv1\pmod4$ ([[def-sum-of-two-squares-representation]]).

## Facts & Assumptions

**Given:** A prime $p$.

[F1] A representation of a nonnegative integer $n$ as a sum of two squares is an ordered pair $(x,y)\in\mathbb Z^2$ such that $n=x^2+y^2$ ([[def-sum-of-two-squares-representation]]).

[L1] If $p$ is prime, $p\nmid a$, then there are nonzero integers $r,s$ with $|r|,|s|<\sqrt p$ and $ra\equiv s\pmod p$ ([[lem-thue-small-representatives]]).

[L2] For an odd prime $p$, $(-1/p)=1$ if and only if $p\equiv1\pmod4$ ([[thm-first-supplement-to-quadratic-reciprocity]]).

[F2] For an odd prime $p$, $(a/p)=1$ means that $p\nmid a$ and $a$ is a quadratic residue modulo $p$ ([[def-legendre-symbol]]).

[F3] The congruence $a\equiv b\pmod n$ means that $n\mid(a-b)$ ([[def-congruence-modulo-an-integer]]).

## Proof

**Proof technique:** direct.

1.1 If an odd prime satisfies $p=x^2+y^2$, the square residues modulo $4$ show that $x,y$ have opposite parity and hence $p\equiv1\pmod4$. [given, F1, algebra]

1.2 The remaining even prime has the representation $2=1^2+1^2$. [F1, algebra]

1.3 For the converse direction, suppose $p\equiv1\pmod4$. Then $p$ is odd, and [L2] and [F2] provide an integer $a$ with $a^2\equiv-1\pmod p$ and $p\nmid a$. [given, L2, F2, F3, choose]

2.1 Apply [L1] to this $a$ to obtain nonzero integers $r,s$ with $|r|,|s|<\sqrt p$ and $ra\equiv s\pmod p$. [step 1.3, L1, F3]

3.1 Squaring the congruence in step 2.1 and using $a^2\equiv-1$ gives $p\mid r^2+s^2$. Moreover $0<r^2+s^2<p+p=2p$. The only positive multiple of $p$ below $2p$ is $p$, so $p=r^2+s^2$. [step 1.3, step 2.1, F1, F3, algebra]

4.1 Step 1.1 proves necessity for odd primes, step 1.2 handles $p=2$, and step 3.1 proves sufficiency when $p\equiv1\pmod4$. [step 1.1, step 1.2, step 3.1] ∎
