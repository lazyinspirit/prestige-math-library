---
id: ex-coordinate-projection-onto-a-subspace-of-c-three
kind: example
title: "A coordinate projection in complex three-space"
status: draft
origin: pipeline
pipeline_run: phase-2-wave-1
deps: [lem-finite-dimensional-subspace-admits-a-linear-projection-without-choice]
justified_by: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
sources:
  scraped: []
  references:
    - title: "Sheldon Axler, Linear Algebra Done Right, fourth edition"
      url: "https://linear.axler.net/LADR4e.pdf"
---

## Example

In $\mathbb C^3$, set $U=\operatorname{span}\{(1,1,0),(0,1,1)\}$. The map $P(x,y,z)=(x,x+z,z)$ is the projection onto $U$ along $\operatorname{span}\{(0,1,0)\}$.

## Facts & Assumptions

**Given:** $P:\mathbb C^3\to\mathbb C^3$, $P(x,y,z)=(x,x+z,z)$, and the subspace $U$ displayed above.

[F1] For a subspace $U$ of a finite-dimensional space there exists a linear idempotent with image $U$ and restriction equal to the identity on $U$ ([[lem-finite-dimensional-subspace-admits-a-linear-projection-without-choice]]).

## Verification

**Proof technique:** direct.

1.1 For $v=(x,y,z)$, $v'=(x',y',z')$ and $a,b\in\mathbb C$, the formula gives $P(av+bv')=(ax+bx',a(x+z)+b(x'+z'),az+bz')=aP(v)+bP(v')$. Moreover $P^2(x,y,z)=P(x,x+z,z)=(x,x+z,z)=P(x,y,z)$. [given, algebra]

2.1 For every $(x,y,z)$, $P(x,y,z)=x(1,1,0)+z(0,1,1)\in U$. Conversely any $u=s(1,1,0)+t(0,1,1)=(s,s+t,t)$ satisfies $P(u)=(s,s+t,t)=u$, so $\operatorname{im}P=U$ and $P|_U=\operatorname{id}_U$. This explicitly realizes the projection supplied by F1. [F1, step 1.1, algebra]

3.1 The equation $P(x,y,z)=0$ is equivalent to $x=0$ and $z=0$, with $y$ arbitrary. Hence $\ker P=\{(0,y,0):y\in\mathbb C\}=\operatorname{span}\{(0,1,0)\}$. Every vector decomposes as $(x,y,z)=(x,x+z,z)+(0,y-x-z,0)$ with the first summand in $U$ and the second in $\ker P$. If $(s,s+t,t)=(0,y,0)$, then $s=t=y=0$, so the intersection is zero and the decomposition is unique. Thus the stated kernel is exactly the direction along which $P$ projects. [step 2.1, algebra] ∎

## Sources

[Axler](https://linear.axler.net/LADR4e.pdf), 2.33, p. 42, supplies the complement construction being illustrated. These particular vectors and coordinate calculations are locally chosen.
