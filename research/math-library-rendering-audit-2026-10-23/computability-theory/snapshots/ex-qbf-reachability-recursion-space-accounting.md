---
id: "ex-qbf-reachability-recursion-space-accounting"
kind: "example"
title: "Space accounting for the QBF reachability recursion"
verification:
  audited: 2026-09-13
status: published
origin: "pipeline"
deps: ["lem-space-bounded-machine-configuration-count", "thm-tqbf-pspace-completeness-interface"]
justified_by: []
landmark: false
provenance:
  statement: "ai-generated"
  proof: "ai-generated"
sources:
  references:
    - title: "Kabanets, CMPT 710 Lecture 13, \u00a71"
      url: https://www.cs.sfu.ca/~kabanets/710_2007/new_lectures/l13.pdf
generation:
  role: "example"
proof_strategy: "direct"
---

## Example

Use a graph on the two-bit vertices $00,01,10,11$ with edges $00\to01$ and $01\to10$ only. The one-copy quantified reachability construction gives a true formula for reaching $10$ from $00$ within two edges, and a false formula for reaching $11$. This example also compares its formula size with duplicated recursion and counts depth-first evaluation space.

## Facts & Assumptions

**Given:** The displayed four-vertex graph with all four bit vectors valid.

[F1] The formulas $R_0$ and $R_{i+1}$, their midpoint/selector semantics and their one-copy size recurrence are proved in [[thm-tqbf-pspace-completeness-interface]].

## Verification

1.1 Here $E(X,Y)$ is $(X=00\wedge Y=01)\vee(X=01\wedge Y=10)$ and $R_0(X,Y)$ is $(X=Y)\vee E(X,Y)$. Thus $R_0(00,10)=0$, $R_0(00,01)=1$ and $R_0(01,10)=1$. In $R_1(00,10)$ choose midpoint $Z=01$. The selector $b=0$ forces only $R_0(00,01)$ and $b=1$ forces only $R_0(01,10)$; all endpoint pairs not selected by the guard make the implication automatically true. Hence $R_1(00,10)=1$. [F1, given]

1.2 For general $m$-bit vertices, each level adds three $m$-bit vectors and one selector, so depth $d$ has $(3m+1)d$ new bound bits. At $m=2,d=2$ this is 14 bits. If $B$ is the base formula's occurrence count, the one-copy count is at most $B+Cdm$ for a fixed expansion constant $C$. The duplicated midpoint recursion instead satisfies $D_{i+1}=2D_i+O(m)$, with $2^d B$ base occurrences. At $d=m$, the former is polynomial after variable-name encoding, whereas the latter already contains $2^m$ base copies. [F1]

2.1 For $R_1(00,11)$, the first selected pair can satisfy $R_0(00,Z)$ only for $Z=00$ or $01$. But $R_0(00,11)=R_0(01,11)=0$, so the second selected pair fails in either case. For $Z=10$ or $11$ the first pair already fails. These are all four midpoints, proving $R_1(00,11)=0$. Equality also gives $R_0(11,11)=1$ despite the absence of outgoing edges. [F1, step 1.1]

3.1 If the encoded final formula has length $N$, a depth-first quantifier evaluator uses a table of at most $N$ variable bits, at most $N$ frames each holding an $O(\log(N+2))$ position and one saved answer, and polynomial space for matrix parsing. Even storing a whole length-$N$ residual formula per frame costs at most $O(N^2)$ cells. After the first child returns, only its answer bit is needed while reusing child storage for the second. It does not store the whole binary evaluation tree. At depth zero it simply evaluates $R_0$. These concrete bounds explain why an exponential number of possible assignments does not imply exponential workspace. [F1, step 1.2] ∎
