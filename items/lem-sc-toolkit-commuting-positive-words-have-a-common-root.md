---
id: lem-sc-toolkit-commuting-positive-words-have-a-common-root
kind: lemma
title: "Sc toolkit commuting positive words have a common root"
status: draft
origin: pipeline
deps: [def-alphabet-words-and-reduction]
landmark: false
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: "Lipschutz (1964), \u00a76 opening periodic-word argument; commuting-word input expanded locally"
      url: "http://lib.ysu.am/articles_art/6b5e2e5df94354a3efa7529c0c38c956.pdf"
---

## Statement

If nonempty finite words $x,y$ satisfy $xy=yx$ literally, then $x=c^a$ and $y=c^b$ for a nonempty word $c$ and positive integers $a,b$. Here positive powers mean repetitions; inverse alphabet letters are allowed, and commutation only in a quotient group is not enough.

## Facts & Assumptions

**Given:** Nonempty literal words $x,y$ with $xy=yx$.

[F1] Words are finite strings, including strings in an alphabet with formal inverses ([[def-alphabet-words-and-reduction]]).

## Proof

1.1 Prove the claim by recursion on the positive integer $|x|+|y|$. When $|x|=|y|$, the prefixes of that length in the equality $xy=yx$ give $x=y$; take $c=x$ and $a=b=1$. This includes the smallest possible total length two. [given, F1]

2.1 If $|x|>|y|$, prefix comparison gives $x=yu$ with $u$ nonempty. Substitute into $xy=yx$ to obtain $yuy=yyu$, and cancel the first literal copy of $y$, yielding $uy=yu$. The pair $(u,y)$ has smaller total length, so the recursive assertion gives $u=c^a$ and $y=c^b$ with $a,b>0$. Then $x=yu=c^{a+b}$. If $|y|>|x|$, interchange $x,y$ and the identical reduction gives the assertion. Each reduction strictly lowers a positive integer, so it terminates at the equal-length case. All cancellations are prefix cancellations of strings, not group reductions. [step 1.1, F1, algebra] ∎
