---
id: lem-coprime-primitive-two-square-products-remain-primitive
kind: lemma
title: "Coprime primitively represented factors have a primitive product representation"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-sum-of-two-squares-representation, lem-brahmagupta-fibonacci-two-square-identity, def-common-divisor-and-gcd, lem-every-integer-above-one-has-a-prime-divisor, thm-euclids-lemma]
aliases: []
landmark: false
proof_strategy: contradiction
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
    - title: "P. Hackman, Elementary Number Theory, Chapter E, Lemma E.II.5"
      url: "https://courses.mai.liu.se/GU/TATA54/Dokument/booktot.pdf"
pipeline_run: null
---

## Statement

If $P=a^2+b^2$ and $Q=c^2+d^2$ are primitive representations with $\gcd(P,Q)=1$, then the Brahmagupta–Fibonacci construction gives a primitive representation of $PQ$. In particular, $(ac-bd,ad+bc)$ is primitive.

## Facts & Assumptions

**Given:** Primitive representations $P=a^2+b^2$, $Q=c^2+d^2$, with $\gcd(P,Q)=1$.

[F1] A two-square representation is primitive when its coordinate gcd is $1$ ([[def-sum-of-two-squares-representation]]).

[L1] For all integers $a,b,c,d$, $(a^2+b^2)(c^2+d^2)=(ac-bd)^2+(ad+bc)^2=(ac+bd)^2+(ad-bc)^2$ ([[lem-brahmagupta-fibonacci-two-square-identity]]).

[F2] An integer $d$ is a common divisor of $a$ and $b$ when $d\mid a$ and $d\mid b$ ([[def-common-divisor-and-gcd]]).

[L2] Every integer greater than $1$ has a prime divisor ([[lem-every-integer-above-one-has-a-prime-divisor]]).

[L3] If a prime $\ell$ divides $uv$, then $\ell\mid u$ or $\ell\mid v$ ([[thm-euclids-lemma]]).

## Proof

**Proof technique:** contradiction.

1.1 Put $X=ac-bd$ and $Y=ad+bc$. By [L1], $X^2+Y^2=PQ$. [given, F1, L1, construct]

1.2 Suppose, for contradiction, that $(X,Y)$ is not primitive. Its positive gcd then exceeds one, so choose by [L2] a prime $\ell$ dividing both $X$ and $Y$. [F2, L2, assume-contra, choose]

2.1 The combinations $aX+bY=cP$ and $aY-bX=dP$ are divisible by $\ell$. Since $(c,d)$ is primitive, $\ell$ cannot divide both; applying [L3] to the combination with coefficient not divisible by $\ell$ gives $\ell\mid P$. [step 1.2, F1, L3, algebra]

2.2 Similarly, $cX+dY=aQ$ and $cY-dX=bQ$. Primitivity of $(a,b)$ and [L3] give $\ell\mid Q$. [step 1.2, F1, L3, algebra]

3.1 Steps 2.1 and 2.2 contradict $\gcd(P,Q)=1$. Hence $(X,Y)$ is primitive and, by step 1.1, primitively represents $PQ$. [step 1.1, step 2.1, step 2.2, F1, F2, discharge-contradiction] ∎
