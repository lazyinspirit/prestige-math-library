---
id: lem-congruence-respects-integer-arithmetic
kind: lemma
title: "Congruent integers may be added, subtracted and multiplied: representative changes preserve both arithmetic operations"
status: published
origin: session
deps: [def-congruence-modulo-an-integer, lem-divisibility-basic, thm-int-comm-ring, def-group-power, thm-induction-principle]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "K. Conrad, Modular Arithmetic"
      url: "https://kconrad.math.uconn.edu/blurbs/ugradnumthy/modarithshort.pdf"
pipeline_run: null
---

## Statement

Let $n,a,a',b,b'\in\mathbb Z$. If $a\equiv a'\pmod n$ and
$b\equiv b'\pmod n$, then

$$a+b\equiv a'+b'\pmod n,\qquad a-b\equiv a'-b'\pmod n,\qquad ab\equiv a'b'\pmod n.$$

In particular $-a\equiv-a'\pmod n$, and for every $k\in\mathbb N$ the natural
powers of [[def-group-power]] satisfy $a^k\equiv(a')^k\pmod n$.

## Facts & Assumptions

**Given:** Integers $n,a,a',b,b'$ with $a\equiv a'\pmod n$ and $b\equiv b'\pmod n$.

[F1] $u\equiv v\pmod n$ means $n\mid(u-v)$ ([[def-congruence-modulo-an-integer]]).

[L1] If $d\mid u$ and $d\mid v$, then $d\mid ux+vy$ for all integers $x,y$; also $d\mid u$ implies $d\mid uw$ and $d\mid-u$ ([[lem-divisibility-basic]]).

[L2] $\mathbb Z$ is a commutative ring, so subtraction, distributivity and the identities used below are valid ([[thm-int-comm-ring]]).

[F2] Natural powers in the multiplicative monoid of $\mathbb Z$ satisfy $x^0=1$ and $x^{k+1}=x^kx$ ([[def-group-power]]).

[L3] A property true at $0$ and inherited by successors holds for every natural number ([[thm-induction-principle]]).

## Proof

**Proof technique:** direct.

1.1 By [F1], $n\mid(a-a')$ and $n\mid(b-b')$. [given, F1]

2.1 Since $(a+b)-(a'+b')=(a-a')+(b-b')$, linearity gives $a+b\equiv a'+b'\pmod n$. [step 1.1, F1, L1, L2]

2.2 Since $(a-b)-(a'-b')=(a-a')-(b-b')$, linearity gives $a-b\equiv a'-b'\pmod n$; also $n\mid(a-a')$ gives $n\mid-(a-a')=(-a)-(-a')$, so $-a\equiv-a'\pmod n$. [step 1.1, F1, L1, L2]

2.3 The identity $ab-a'b'=a(b-b')+b'(a-a')$ and linearity give $n\mid(ab-a'b')$, hence $ab\equiv a'b'\pmod n$. [step 1.1, F1, L1, L2]

3.1 The power claim holds at $k=0$ because $a^0=1=(a')^0$. If it holds at $k$, then step 2.3 applied to $a^k\equiv(a')^k$ and $a\equiv a'$ gives $a^{k+1}=a^ka\equiv(a')^ka'=(a')^{k+1}$. Thus it holds for every $k\in\mathbb N$ by induction. [step 2.3, F2, L3] ∎
