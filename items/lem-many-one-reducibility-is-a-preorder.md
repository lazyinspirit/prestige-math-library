---
id: lem-many-one-reducibility-is-a-preorder
kind: lemma
title: "Computable many-one reducibility is reflexive and transitive"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-computable-many-one-reduction]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "MIT 6.045J / 18.400J, Lecture 9: Mapping Reducibility and Rice's Theorem"
      url: "https://ocw.mit.edu/courses/6-045j-automata-computability-and-complexity-spring-2011/7aead2c728dd3d5a737d832811ef97e6_MIT6_045JS11_lec09.pdf"
    - title: "Kevin Kelly, Many-one Reduction"
      url: "https://www.andrew.cmu.edu/user/kk3n/recursionclass/8reduction.html"
---

## Statement

Computable many-one reducibility is reflexive and transitive: every language
$A$ satisfies $A\le_m A$, and whenever $A\le_m B$ and $B\le_m C$, one also has
$A\le_m C$.

## Facts & Assumptions

**Given:** Languages $A,B,C$ over finite alphabets.

[L1] A computable many-one reduction is a total computable function preserving membership in both directions, by [[def-computable-many-one-reduction]].

## Proof

**Proof technique:** direct.

1.1 For reflexivity, use the identity map $\operatorname{id}(x)=x$ on $A$'s alphabet. It is total and computable, and $x\in A\iff \operatorname{id}(x)\in A$ for every $x$, so [L1] gives $A\le_m A$. [L1, given, construct]

1.2 For transitivity, let $f$ witness $A\le_m B$ and let $g$ witness $B\le_m C$. By [L1], both maps are total and computable, so $h:=g\circ f$ is total and computable as well. [L1, given, construct]

2.1 For every $x$, [L1] gives $x\in A\iff f(x)\in B\iff g(f(x))\in C$. Thus $x\in A\iff h(x)\in C$, so [L1] yields $A\le_m C$. [L1, step 1.2] ∎
