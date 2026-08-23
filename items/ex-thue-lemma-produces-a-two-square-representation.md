---
id: ex-thue-lemma-produces-a-two-square-representation
kind: example
title: "Thue's collision argument gives $73=3^2+8^2$"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-thue-small-representatives, def-sum-of-two-squares-representation]
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
    - title: "P. Hackman, Elementary Number Theory, Chapter E, Example E.I.4"
      url: "https://courses.mai.liu.se/GU/TATA54/Dokument/booktot.pdf"
pipeline_run: null
---

## Example

The prime $73$ has $27^2\equiv-1\pmod{73}$. Thue's collision construction with the square $0\le i,j\le8$ produces the representation

$$73=3^2+8^2.$$

## Facts & Assumptions

**Given:** The prime $p=73$ and the residue $a=27$.

[L1] If $p$ is prime and $p\nmid a$, then there are nonzero integers $r,s$ with $|r|,|s|<\sqrt p$ and $ra\equiv s\pmod p$ ([[lem-thue-small-representatives]]).

[F1] A representation of a nonnegative integer $n$ as a sum of two squares is an ordered pair $(x,y)\in\mathbb Z^2$ such that $n=x^2+y^2$ ([[def-sum-of-two-squares-representation]]).

## Verification

**Proof technique:** direct.

1.1 One has $27^2=729\equiv-1\pmod{73}$, and $8^2=64<73<81=9^2$, so the maximal integer $h$ with $h^2<73$ is $8$. [algebra]

2.1 In the map $(i,j)\mapsto27i-j\pmod{73}$ on $0\le i,j\le8$, the distinct pairs $(3,8)$ and $(0,0)$ collide because $3\cdot27-8=73$. Their coordinate differences are $(3,8)$, exactly as in [L1]. [step 1.1, L1, algebra]

3.1 The bounds give $0<3^2+8^2<2\cdot73$, and step 2.1 together with $27^2\equiv-1$ makes the sum divisible by $73$. Directly, $3^2+8^2=9+64=73$, so $(3,8)$ is a representation in the sense of [F1]. [step 1.1, step 2.1, L1, F1, algebra] ∎
