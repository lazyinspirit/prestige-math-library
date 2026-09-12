---
id: "thm-kleene-fixed-point-theorem-for-program-indices"
kind: "theorem"
title: "Kleene fixed point theorem for program indices"
status: published
origin: "pipeline"
deps: ["thm-smn-for-the-fixed-acceptable-numbering", "def-acceptable-numbering-with-universal-evaluation"]
justified_by: []
landmark: false
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Gallier §5.1, Theorem 5.1; specialization proof route"
      url: https://www.cis.upenn.edu/~cis5110/notes/tcbook-comp.pdf
proof_strategy: "direct"
verification:
  audited: 2026-09-12
---

## Statement

For every total computable $F:\mathbb N\to\mathbb N$, there is e with $\varphi_e=\varphi_{F(e)}$ as partial functions. An index e can be computed from an index for F on the promise that F is total. Equality here is extensional; it does not assert $e=F(e)$.

## Facts & Assumptions

**Given:** An index f computing the total function F.

[F1] Binary-to-unary specialization $s(z,x)=s_1^1(z,x)$ is total computable and preserves domains and values ([[thm-smn-for-the-fixed-acceptable-numbering]]).

[F2] Universal evaluation and literal finite program compilation are effective ([[def-acceptable-numbering-with-universal-evaluation]]).

## Proof

1.1 Compile a binary program q which on $(z,y)$ first computes $s(z,z)$, then evaluates f on that number, obtaining $F(s(z,z))$, then evaluates that index on y. F1 supplies the first terminating subroutine, totality of F the second, and F2 the possibly partial last evaluation. Thus its binary function is $H(z,y)\simeq\varphi_{F(s(z,z))}(y)$. The finite compiler inserts f literally, so q is obtained effectively from f without running F during code generation. [F1, F2, given]

2.1 Compute $e=s(q,q)$. For each y, specialization gives $\varphi_e(y)\simeq H(q,y)\simeq\varphi_{F(s(q,q))}(y)=\varphi_{F(e)}(y)$. The first two subcalls in H terminate, so either the last call halts with exactly the asserted value or both sides are undefined. This proves equality of the partial domains as well as values. Computing q and then e is a halting transformation of the given index f; if the promise of totality fails the transformation still produces a number, but the asserted fixed-point conclusion is not inferred. [step 1.1, F1] ∎
