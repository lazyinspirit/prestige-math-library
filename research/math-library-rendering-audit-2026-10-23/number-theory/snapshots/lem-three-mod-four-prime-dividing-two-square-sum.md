---
id: lem-three-mod-four-prime-dividing-two-square-sum
kind: lemma
title: "A prime congruent to $3$ modulo $4$ divides both coordinates of a divisible two-square sum"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-sum-of-two-squares-representation, thm-first-supplement-to-quadratic-reciprocity, def-legendre-symbol, thm-z-mod-p-is-a-field, thm-euclids-lemma, def-congruence-modulo-an-integer]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: "P. Hackman, Elementary Number Theory, Chapter E, §E.II.2"
      url: "https://courses.mai.liu.se/GU/TATA54/Dokument/booktot.pdf"
    - title: "W. Stein, Elementary Number Theory: Primes, Congruences, and Secrets, Lemma 5.7.4"
      url: "https://wstein.org/ent/ent.pdf"
pipeline_run: null
---

## Statement

If $q\equiv3\pmod4$ is prime and $q\mid x^2+y^2$, then $q\mid x$ and $q\mid y$. Consequently $q^2\mid x^2+y^2$.

## Facts & Assumptions

**Given:** A prime $q\equiv3\pmod4$ and integers $x,y$ such that $q\mid x^2+y^2$.

[F1] A representation of a nonnegative integer $n$ as a sum of two squares is an ordered pair $(x,y)\in\mathbb Z^2$ such that $n=x^2+y^2$ ([[def-sum-of-two-squares-representation]]).

[L1] For an odd prime $p$, $(-1/p)=1$ if and only if $p\equiv1\pmod4$, while $(-1/p)=-1$ if and only if $p\equiv3\pmod4$ ([[thm-first-supplement-to-quadratic-reciprocity]]).

[F2] For an odd prime $p$, the Legendre symbol is $0$ when $p$ divides the numerator, $1$ when its nonzero class is a square, and $-1$ otherwise ([[def-legendre-symbol]]).

[L2] For every prime $p$, addition and multiplication make $\mathbb Z/p$ a field ([[thm-z-mod-p-is-a-field]]).

[L3] If a prime $p$ divides $ab$, then $p\mid a$ or $p\mid b$ ([[thm-euclids-lemma]]).

[F3] The congruence $a\equiv b\pmod n$ means that $n\mid(a-b)$ ([[def-congruence-modulo-an-integer]]).

## Proof

**Proof technique:** direct.

1.1 The divisibility hypothesis is the congruence $x^2+y^2\equiv0\pmod q$. [given, F1, F3]

2.1 If $q\mid y$, then step 1.1 gives $q\mid x^2$, so [L3] gives $q\mid x$; the same argument with the coordinates interchanged handles $q\mid x$. [step 1.1, L3, algebra]

2.2 If neither coordinate were divisible by $q$, the nonzero class of $y$ would be invertible in the field $\mathbb Z/q$, and step 1.1 would give $(xy^{-1})^2=-1$. Thus $-1$ would be a nonzero quadratic residue and $(-1/q)=1$. [step 1.1, L2, F2, F3, algebra]

3.1 Since $q\equiv3\pmod4$, [L1] instead gives $(-1/q)=-1$, contradicting step 2.2. [step 2.2, L1, F2, given]

4.1 Hence at least one coordinate is divisible by $q$, and step 2.1 makes both divisible by $q$. Writing $x=qx_0$ and $y=qy_0$ gives $x^2+y^2=q^2(x_0^2+y_0^2)$. [step 2.1, step 3.1, algebra] ∎
