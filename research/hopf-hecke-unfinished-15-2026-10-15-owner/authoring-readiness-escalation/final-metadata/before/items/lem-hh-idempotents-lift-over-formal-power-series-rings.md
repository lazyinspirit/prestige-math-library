---
id: lem-hh-idempotents-lift-over-formal-power-series-rings
kind: lemma
title: "Orthogonal idempotents lift over a complete formal power-series ring"
status: draft
origin: pipeline
pipeline_run: hopf-hecke-unfinished-15-2026-10-15
dependency_level: 0
deps: [def-algebra-over-a-commutative-ring, def-field, def-free-module-on-a-set-and-standard-basis, lem-hh-one-parameter-formal-series-local-ring]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Pavel Etingof, Structure of Finite Dimensional Algebras, MIT OpenCourseWare 18.712, Chapter 7"
      url: "https://ocw.mit.edu/courses/18-712-introduction-to-representation-theory-fall-2010/70961c084499052681efb7485af37858_MIT18_712F10_ch7.pdf"
      locator: "§7.2, Proposition 7.3 and Corollary 7.5, PDF p. 1: idempotent lifting through nilpotent ideals and lifting a complete orthogonal family. The item proves the complete one-parameter formal-series case by an explicit Newton limit."
axiom_use: "No arbitrary Choice. The input family and every corner induction are finite."
---

## Statement

Let $k$ be a field, $R:=k\llbracket h\rrbracket$ the ring of formal power series with its $h$-adic topology, and $A$ a unital $R$-algebra whose underlying $R$-module is free of finite rank. An **idempotent** is an element $e$ with $e^2=e$; idempotents $e_i$ are **orthogonal** if $e_ie_j=0$ whenever $i\ne j$, and a finite orthogonal family is **complete** if its sum is $1$. Every finite complete orthogonal family $(\bar e_1,\dots,\bar e_m)$ in $A/hA$ has a lift to a finite complete orthogonal family $(e_1,\dots,e_m)$ in $A$, with $e_i+hA=\bar e_i$ for each $i$.

## Facts & Assumptions

**Given:** A field $k$, $R=k\llbracket h\rrbracket$, a finite free unital $R$-algebra $A$, and a finite complete orthogonal idempotent family in $A/hA$.

[F1] The ring $R=k\llbracket h\rrbracket$ is complete and separated for the $h$-adic topology, and every finite free module $R^n$ is complete and separated coefficientwise ([[lem-hh-one-parameter-formal-series-local-ring]]).

[F2] A finite free module has a finite basis and unique finite coordinate expansions ([[def-free-module-on-a-set-and-standard-basis]]).

[F3] In a unital $R$-algebra the image of the commutative coefficient ring $R$ is central, so $h$ commutes with every element ([[def-algebra-over-a-commutative-ring]]).

## Proof

**Proof technique:** direct.

1.1 By [F2], a finite $R$-basis identifies $A$ with $R^n$, so [F1] makes $A$ complete and separated. Multiplication is continuous: when $x'-x,y'-y\in h^rA$, expansion gives $x'y'-xy=(x'-x)y+x(y'-y)+(x'-x)(y'-y)\in h^rA$. For any idempotent $q$, the map $x\mapsto qxq$ is continuous and idempotent; its image is the kernel of the continuous map $1-(x\mapsto qxq)$, hence is closed in the separated module $A$ and is therefore complete. [given, F1, F2, F3, algebra]

2.1 In any such complete algebra $B$ with identity $q$, start with $a\in B$ satisfying $\delta:=a^2-a\in hB$. The element $u:=2a-q$ commutes with $\delta$ and satisfies $u^2=q+4\delta$. The partial sums $S_N:=\sum_{r=0}^N(-4\delta)^r$ are Cauchy because $\delta^r\in h^rB$; let $S$ be their limit. The finite geometric identity $(q+4\delta)S_N=q-(-4\delta)^{N+1}=S_N(q+4\delta)$ and separatedness give $(q+4\delta)S=S(q+4\delta)=q$, so $u^{-1}=uS=Su$. Set $a':=a-u^{-1}\delta$. The terms commute, and expansion gives $(a')^2-a'=\delta-u(u^{-1}\delta)+(u^{-1}\delta)^2=(u^{-1}\delta)^2$. Thus one correction squares the error and leaves the reduction of $a$ unchanged. [step 1.1, F1, F3, algebra]

3.1 Starting with any lift $a_0$ of an idempotent in $B/hB$, apply step 2.1 repeatedly. If $a_n^2-a_n\in h^{r_n}B$, then $a_{n+1}-a_n\in h^{r_n}B$ and $a_{n+1}^2-a_{n+1}\in h^{2r_n}B$. Starting with $r_0=1$, we have $r_n=2^n$, so the sequence is Cauchy. Its limit $e$ exists by step 1.1; continuity of multiplication and the error tending to zero give $e^2=e$, and every correction lies in $hB$, so $e$ has the prescribed reduction. [step 1.1, step 2.1, given, algebra]

4.1 Lift a complete orthogonal family by induction on $m$. If $m=0$, completeness means $1=0$ in $A/hA$; since $A$ is free of finite rank and $R/hR\cong k$ is a field, its reduction is $k^n$, so $A/hA=0$ forces its rank $n$ to be zero and hence $A=0$. The empty family then lifts. For $m=1$, the only member is $1$, which already lifts the family. For $m\ge2$, lift $\bar e_1$ by step 3.1 to an idempotent $e_1$ and set $q:=1-e_1$. The remaining reductions lie in the corner $\bar q(A/hA)\bar q$ and form a complete orthogonal family there. The reduction map $qAq\to\bar q(A/hA)\bar q$ is onto because any lift $x$ of a corner element can be replaced by $qxq$. Its kernel is $h(qAq)$: if $y\in qAq$ lies in $hA$, write $y=ha$; then $y=qyq=hqaq$ since $h$ is central by [F3], and the reverse inclusion is immediate. Thus the reduction identifies $qAq/h(qAq)$ with the indicated corner. The corner is complete by step 1.1, so induction lifts the remaining family in $qAq$; its members are orthogonal to $e_1$ since $qe_1=e_1q=0$, and their sum is $q$. This proves the claim for $m$. [step 1.1, step 3.1, F1, F2, F3, given, algebra]

5.1 The construction makes only finitely many initial lift choices, one for each member of the input finite family, and then applies the deterministic Newton recurrence in step 2.1. It uses no maximality principle or arbitrary family of choices. Steps 3.1 and 4.1 produce the required exact idempotents and preserve every prescribed reduction. [step 2.1, step 3.1, step 4.1, given] ∎
