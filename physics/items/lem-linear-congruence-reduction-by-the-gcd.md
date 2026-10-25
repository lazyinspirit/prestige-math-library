---
id: lem-linear-congruence-reduction-by-the-gcd
kind: lemma
title: "If $n\\ge1$, $d=\\gcd(a,n)$ and $d\\mid b$, then $ax\\equiv b\\pmod n$ reduces to a congruence with coprime coefficient modulo $n/d$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-congruence-modulo-an-integer, def-common-divisor-and-gcd, cor-gcd-quotients-coprime, def-divides-in-z, lem-divisibility-basic, lem-int-cancellation]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "Mathematics LibreTexts, Linear Congruences"
      url: "https://math.libretexts.org/Bookshelves/Combinatorics_and_Discrete_Mathematics/Yet_Another_Introductory_Number_Theory_Textbook_-_Cryptology_Emphasis_%28Poritz%29/02%3A_Congruences/2.02%3A_Linear_Congruences"
pipeline_run: null
---

## Statement

Let $a,b\in\mathbb Z$, let $n\ge1$, and put $d:=\gcd(a,n)$. If $d\mid b$,
write

$$a=da',\qquad n=dn',\qquad b=db'.$$

Then $d>0$, the integers $a',n'$ are coprime, and for every $x\in\mathbb Z$,

$$ax\equiv b\pmod n\quad\Longleftrightarrow\quad a'x\equiv b'\pmod{n'}.$$

Thus the reduced modulus is the positive integer $n'=n/d$ and its coefficient
is coprime to it ([[def-congruence-modulo-an-integer]]).

## Facts & Assumptions

**Given:** Integers $a,b$, a positive integer $n$, $d:=\gcd(a,n)$, and $d\mid b$.

[L1] The gcd is a nonnegative common divisor, and it is positive when its two arguments are not both zero ([[def-common-divisor-and-gcd]]).

[L2] If $d=\gcd(u,v)\ne0$, then the uniquely determined quotients $u/d$ and $v/d$ are coprime ([[cor-gcd-quotients-coprime]], [[lem-int-cancellation]]).

[L3] $c\mid y$ means $y=cq$ for some integer $q$, and divisibility is preserved by integer linear combinations ([[def-divides-in-z]], [[lem-divisibility-basic]]).

[L4] $u\equiv v\pmod c$ means $c\mid(u-v)$ ([[def-congruence-modulo-an-integer]]).

## Proof

**Proof technique:** direct.

1.1 Since $n>0$, the pair $(a,n)$ is not $(0,0)$, so $d>0$ by [L1]. Because $d$ divides $a,n,b$, there are integers $a',n',b'$ with $a=da'$, $n=dn'$ and $b=db'$; these quotients are unique by cancellation, $n'>0$, and $a',n'$ are coprime by [L2]. [L1, L2, L3]

2.1 For any integer $x$, the congruence $ax\equiv b\pmod n$ says $dn'\mid d(a'x-b')$, so it holds exactly when there is an integer $q$ with $d(a'x-b')=dn'q$; since $d\ne0$, cancellation makes this equivalent to $a'x-b'=n'q$, namely $a'x\equiv b'\pmod{n'}$. [step 1.1, L3, L4] ∎
