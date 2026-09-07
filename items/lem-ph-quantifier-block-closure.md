---
id: lem-ph-quantifier-block-closure
kind: lemma
title: "Ph quantifier block closure"
status: draft
origin: pipeline
deps: [def-polynomial-hierarchy-levels]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Goldreich, Computational Complexity lecture notes; Lecture9 §9.1, Proposition9.1.1 p104 and proof of Theorem9.9 pp105–107."
      url: "https://www.wisdom.weizmann.ac.il/~oded/PS/CC/all.pdf"
---

## Statement

For each fixed $k\ge0$, both $\Sigma_k^p$ and $\Pi_k^p$ are closed under polynomial-time many-one preimages and polynomially many uniformly indexed conjunctions and disjunctions. Precisely, if the language of pairs $(x,i)$ lies in the class and $0\le i<q(|x|)$ for a polynomial-time computable polynomial bound $q$, then both “every such $i$” and “some such $i$” define languages in that class. Complements interchange $\Sigma_k^p$ and $\Pi_k^p$, and each is contained in both classes at level $k+1$. These assertions also hold with one fixed base oracle.

## Facts & Assumptions

**Given:** the objects and hypotheses in the statement above.

[F1] The levels are defined by a fixed number of alternating polynomial-length string blocks over a uniform polynomial-time predicate. ([[def-polynomial-hierarchy-levels]]).


## Proof

1.1 The bounded-block definition supplies one uniform predicate for $(x,i)$, not a separately chosen machine for each index. A polynomial-time preimage first computes its image; witness lengths can be padded to a polynomial bound in $|x|$. At level zero all these operations are deterministic polynomial-time loops. [F1]

2.1 For positive $k$, conjunctions use a tuple of independent variables at each quantifier block and the conjunction of the matrix tests. The identities $(Q a\,U(a))\wedge(Q b\,V(b))\iff Q(a,b)(U(a)\wedge V(b))$ hold for either quantifier over nonempty domains. One verifies the universal identity by fixing an arbitrary value of the other variable, and the existential identity by combining witnesses. Repeated application proves both directions of the tuple construction. A tuple contains only polynomially many polynomial-length strings. [step 1.1, algebra]

3.1 Disjunction follows by complementing a conjunction of complements; this simultaneously proves closure for both starting polarities. Negating a quantified predicate flips every quantifier and negates its deterministic matrix. A zero-term conjunction is true and a zero-term disjunction is false, both deterministic. Length-zero blocks still have one value. [step 2.1, algebra]

4.1 Append an unused last block for containment in the next level of the same polarity; prepend an unused opposite block for the other polarity. Both preserve truth because binary-string domains are nonempty. The proof copies calls to a fixed base oracle verbatim, so all constructions relativize. [F1, step 3.1] ∎
