---
id: ex-bounded-set-formulas-and-witness-direction
kind: example
title: "Bounded formulas and the direction of absoluteness"
status: draft
origin: pipeline
deps: [thm-delta-zero-absoluteness-for-transitive-sets, thm-sigma-one-upward-and-pi-one-downward-absoluteness, lem-bounded-definitions-of-basic-set-operations]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "Freiburg, Course Notes for Set Theory and Independence Proofs (2024) — Propositions 3.5.6/3.5.8 pp51–52"
      url: "https://home.mathematik.uni-freiburg.de/maxwell/coursenotes-settheoryandindependenceproofs.pdf"
---


## Example

Bounded graph agreement can be checked explicitly on $a=\{0\}$, $b=\{0,1\}$ and $f=\{\langle0,1\rangle\}$. Here $f:a\to b$ is injective. Existence of such a graph is a separate existential assertion whose witness must be retained for upward transfer.

## Facts & Assumptions

[F1] [[lem-bounded-definitions-of-basic-set-operations]]: The graphs of empty set, subset, unordered pair, singleton, union, intersection (with $\bigcap\varnothing=\varnothing$), difference, Kuratowski ordered pair, Cartesian product, relation domain/range, functionhood, evaluation and injection have $\Delta_0$ definitions. Thus their values agree between transitive membership structures whenever the input and output sets are in the smaller domain. This is graph agreement, not an assertion that an arbitrary transitive domain is closed under these operations.

[F2] [[thm-delta-zero-absoluteness-for-transitive-sets]]: If $M\subseteq N$ are nonempty transitive sets, every $\Delta_0$ formula is absolute between them on parameter tuples from $M$. No internal set-theory axioms are required. The analogous assertion for definable transitive classes is a formula-by-formula scheme.

[F3] [[thm-sigma-one-upward-and-pi-one-downward-absoluteness]]: For nonempty transitive $M\subseteq N$, a literal existential block over a $\Delta_0$ matrix transfers truth upward, and its universal dual transfers truth downward. For formulas classified only by ZF-provable equivalence, assume both structures satisfy ZF (or all axioms used in the equivalence proof).

## Verification

**Given:** $0=\varnothing$, $1=\{0\}$, $a=\{0\}$, $b=\{0,1\}$, $f=\{\langle0,1\rangle\}$.

1.1 The formula for $x\subseteq y$ is $\forall u\in x(u\in y)$; for $z=\{x,y\}$ it is $x\in z\land y\in z\land\forall u\in z(u=x\lor u=y)$. In the instance, the only element $0$ of $a$ belongs to $b$, and the only elements of $b$ are $0,1$, so both tests hold for $a\subseteq b$ and $b=\{0,1\}$. [given, algebra]

2.1 Use the bounded $K(p,x,y)$ graph of F1. A bounded injection test is: every $p\in f$ has coordinates $x\in a,y\in b$ with $K(p,x,y)$; every $x\in a$ occurs in such a $p$; and for $p,q\in f$ and their coordinates in $a,b$, equal first coordinates imply equal second coordinates and conversely. Here $\langle0,1\rangle=\{\{0\},\{0,1\}\}$ is the sole pair, its first coordinate is $0$, its value is $1\in b$, and comparing the only pair with itself verifies both uniqueness and injection. [F1, step 1.1]

3.1 In transitive domains containing $a,b,f$, F2 preserves these bounded graph tests. If the smaller domain contains the displayed witness $f$, F3 transfers the sentence $\exists f\,(f:a\hookrightarrow b)$ upward by retaining it. If only $a,b$ are present, graph absoluteness alone neither constructs $f$ in that domain nor supplies downward transfer of its existence. [F2, F3, step 2.1] ∎

