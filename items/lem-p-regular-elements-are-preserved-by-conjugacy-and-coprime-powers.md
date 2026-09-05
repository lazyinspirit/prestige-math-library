---
id: lem-p-regular-elements-are-preserved-by-conjugacy-and-coprime-powers
kind: lemma
title: "p-regularity is preserved by conjugacy and by powers coprime to the element order"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-p-regular-and-p-singular-elements]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "J. Miquel Martinez, Modular Representation Theory of Finite Groups"
      url: "https://www.uv.es/jomimar8/pdfs/course%20notes.pdf"
    - title: "Tudor Ciurca, Representation Theory"
      url: "https://www.scribd.com/document/951548499/ModRep"
---

## Statement

Let $x\in G$ and let $p$ be a prime.

1. If $y=gxg^{-1}$ for some $g\in G$, then $x$ is $p$-regular if and only if
   $y$ is $p$-regular.
2. If $m$ is coprime to $|x|$, then $x$ is $p$-regular if and only if $x^m$ is
   $p$-regular.

## Facts & Assumptions

**Given:** A finite group $G$, a prime $p$, and an element $x\in G$.

[F1] An element is $p$-regular exactly when the prime $p$ does not divide its order ([[def-p-regular-and-p-singular-elements]]).

## Proof

**Proof technique:** direct.

1.1 Conjugation preserves order: if $y=gxg^{-1}$, then $y^n=1$ exactly when $gx^ng^{-1}=1$, that is, exactly when $x^n=1$. So $|y|=|x|$. [given, algebra]

1.2 Let $n=|x|$ and suppose $\gcd(m,n)=1$. Then the cyclic subgroup $\langle x^m\rangle$ equals $\langle x\rangle$, because some integer $r$ satisfies $mr\equiv1\pmod n$, hence $x=(x^m)^r$. Therefore $|x^m|=|x|$. [given, algebra]

2.1 Step 1.1 and [F1] prove claim 1, while step 1.2 and [F1] prove claim 2. [F1, step 1.1, step 1.2] ∎
