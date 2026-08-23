---
id: lem-two-essentially-different-two-square-representations-factor-an-odd-integer
kind: lemma
title: "Two essentially different two-square representations factor an odd integer"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-brahmagupta-fibonacci-two-square-identity, def-common-divisor-and-gcd, lem-coprime-divides-product]
aliases: []
landmark: false
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
    - title: "P. Hackman, Elementary Number Theory, Chapter E, Theorem E.I.3"
      url: "https://courses.mai.liu.se/GU/TATA54/Dokument/booktot.pdf"
pipeline_run: null
---

## Statement

Let $N$ be odd and suppose

$$N=x^2+y^2=u^2+v^2,$$

where $x,u$ are positive odd integers, $y,v$ are positive even integers, and $0<x<u$. Then $0<v<y$, and two essentially different normalized representations force a factorisation $N=PQ$ with $P,Q>1$. More precisely, there are positive integers $e,f,g,h$ such that

$$x=eg-fh,\quad y=fg+eh,\quad u=eg+fh,\quad v=fg-eh,$$

and $N=(e^2+f^2)(g^2+h^2)$.

## Facts & Assumptions

**Given:** The two normalized representations and inequalities in the Statement.

[L1] For all integers $a,b,c,d$, $(a^2+b^2)(c^2+d^2)=(ac-bd)^2+(ad+bc)^2=(ac+bd)^2+(ad-bc)^2$ ([[lem-brahmagupta-fibonacci-two-square-identity]]).

[F1] An integer $d$ is a common divisor of $a$ and $b$ when $d\mid a$ and $d\mid b$ ([[def-common-divisor-and-gcd]]).

[L2] If $\gcd(a,b)=1$ and $a\mid bc$, then $a\mid c$ ([[lem-coprime-divides-product]]).

## Proof

**Proof technique:** direct.

1.1 Since $u^2-x^2=y^2-v^2>0$, one has $0<v<y$, and $(u-x)(u+x)=(y-v)(y+v)$. All four factors are positive and even, so with $A=(u+x)/2$, $B=(u-x)/2$, $C=(y+v)/2$, and $D=(y-v)/2$ one has $AB=CD$. [given, algebra]

2.1 Let $g=\gcd(A,C)$ and write $A=eg$, $C=fg$. Positivity gives $e,f,g>0$, and $\gcd(e,f)=1$, since a common divisor greater than one would make a common divisor of $A,C$ larger than $g$. [step 1.1, F1, choose]

3.1 The equality $AB=CD$ becomes $eB=fD$. Since $\gcd(e,f)=1$, [L2] gives $e\mid D$ and $f\mid B$; write $D=eh$ and $B=fh$ with $h>0$. [step 1.1, step 2.1, L2, algebra]

4.1 From $A=eg$, $B=fh$, $C=fg$, and $D=eh$ one obtains $u=A+B=eg+fh$, $x=A-B=eg-fh$, $y=C+D=fg+eh$, and $v=C-D=fg-eh$. [step 2.1, step 3.1, algebra]

5.1 By [L1], $(e^2+f^2)(g^2+h^2)=(eg+fh)^2+(fg-eh)^2=u^2+v^2=N$. Each factor exceeds one because all four entries are positive. [step 4.1, L1, algebra] ∎
