---
id: lem-affine-finite-field-hashes-are-pairwise-independent
kind: lemma
title: "Affine maps over a finite field form a pairwise independent hash family"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-pairwise-independent-hash-family, def-field]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Sanjeev Arora and Boaz Barak, Computational Complexity: A Modern Approach"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
---

## Statement

Let $F$ be a finite field, and let

$$\mathcal H:=\{\,h_{a,b}:F\to F \mid h_{a,b}(x)=ax+b,\ a,b\in F\,\}.$$

Then $\mathcal H$ is a pairwise independent hash family from $F$ to $F$.

## Facts & Assumptions

**Given:** a finite field $F$ and the affine family $\mathcal H$.

[L1] In a field, every nonzero element has a multiplicative inverse and $0\ne 1$ ([[def-field]]).

[L2] Pairwise independence means uniformity of the ordered pair of outputs at every two distinct inputs ([[def-pairwise-independent-hash-family]]).

## Proof

**Proof technique:** direct.

1.1 Fix distinct inputs $x,x'\in F$ and target outputs $y,y'\in F$. Because $x-x'\ne 0$, [L1] gives $a=(y-y')/(x-x')$. Then $b:=y-ax$ is forced, and these values satisfy $ax+b=y$ and $ax'+b=y'$. Thus there is at least one pair $(a,b)$ producing the target output pair. [L1, given, construct]

2.1 If $(a,b)$ and $(a',b')$ both satisfy those two equations, then subtracting them yields $(a-a')(x-x')=0$. Since $x-x'\ne 0$, [L1] gives $a=a'$, and then $b=b'$. So the pair from step 1.1 is unique. [L1, step 1.1, algebra]

3.1 The family $\mathcal H$ has $|F|^2$ members, and step 2.1 shows that exactly one of them maps $(x,x')$ to $(y,y')$. Therefore the probability in [L2] is $1/|F|^2$, proving pairwise independence. [L2, step 2.1, algebra] ∎
