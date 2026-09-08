---
id: ex-bass-dimension-of-a-free-abelian-group
kind: example
title: Free abelian groups have degree equal to rank
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Druţu–Kapovich, Geometric Group Theory (837-page edition)
      url: https://www.math.ucdavis.edu/~kapovich/EPR/ggt.pdf
      locator: Theorem 14.26 abelian base, p.511
status: draft
origin: pipeline
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
proof_strategy: direct
deps: ["thm-bass-guivarch-growth-degree-formula-with-proof", "def-bass-guivarch-dimension"]
---
## Example

For $G=\mathbb Z^d$ with $d\ge0$, $D(G)=d$. Standard word balls have size bounded above and below by positive multiples of $n^d$ for $n\ge1$.

## Facts & Assumptions

**Given:** For d>0 use the standard basis as generators; for d=0 use the empty generating set of the trivial group.

[F1] A finitely generated nilpotent group has two-sided polynomial ball bounds of degree D ([[thm-bass-guivarch-growth-degree-formula-with-proof]]).

[F2] D is the sum of i times the free rank of layer i ([[def-bass-guivarch-dimension]]).

## Verification

1.1 Addition in $\mathbb Z^d$ is commutative, so $\gamma_2=1$. Its only nonzero lower-central rank is $r_1=d$, hence $D=d$. The standard basis is a finite generating set, and the group is nilpotent of class one when d>0, so F1 applies. [F1, F2]

2.1 For an integer vector a, each generator letter changes one coordinate by 1 in absolute value. Thus any representing word has at least $\sum_j|a_j|$ letters; writing each coordinate power attains that number. Consequently $[-\lfloor n/d\rfloor,\lfloor n/d\rfloor]^d\cap\mathbb Z^d\subseteq B(n)\subseteq[-n,n]^d\cap\mathbb Z^d$ for d>0. For n>=d, the left cube has at least $(n/d)^d$ points, and the right has at most $(3n)^d$. For $1\le n<d$ the ball contains 1 and $(n/d)^d<=1$, so these bounds persist. [step 1.1, algebra]

3.1 For d=0 there is one empty vector, the empty word has length zero, and every ball has size 1. The dimension is the empty sum 0 and $n^0=1$. Thus the degree and both estimates include the zero-dimensional case. [F2, step 2.1] ∎

## Source notes

[Druţu–Kapovich, Geometric Group Theory (837-page edition)](https://www.math.ucdavis.edu/~kapovich/EPR/ggt.pdf), Theorem 14.26 abelian base, p.511. Revised Theorem 14.26 abelian base is accompanied here by the explicit lattice interval calculation.
