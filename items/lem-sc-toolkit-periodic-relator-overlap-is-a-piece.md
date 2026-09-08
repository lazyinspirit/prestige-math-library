---
id: lem-sc-toolkit-periodic-relator-overlap-is-a-piece
kind: lemma
title: "Sc toolkit periodic relator overlap is a piece"
status: draft
origin: pipeline
deps: [def-sc-toolkit-symmetrised-relators-and-pieces, lem-sc-toolkit-commuting-positive-words-have-a-common-root]
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
    - title: "Lipschutz (1964), \u00a76 opening remark, printed p.41"
      url: "http://lib.ysu.am/articles_art/6b5e2e5df94354a3efa7529c0c38c956.pdf"
---

## Statement

Let $r=x^m a$ be a literal cyclically reduced relator word, with $x\ne\varnothing$, $m\ge2$, and $a$ possibly empty. If $xa\ne ax$ literally, then $x^{m-1}$ is a piece. If $xa=ax$ and $a$ is nonempty, $x$ and $a$ are positive powers of a common nonempty word, and so is $r$. If $a$ is empty, $r$ is already a power of $x$.

## Facts & Assumptions

**Given:** The literal factorization $r=x^m a$ in a symmetrised relator set, with $x$ nonempty and $m\ge2$.

[F1] Distinct symmetrised relators with a nonempty common prefix define a piece ([[def-sc-toolkit-symmetrised-relators-and-pieces]]).

[F2] Nonempty literally commuting words are positive powers of a common word ([[lem-sc-toolkit-commuting-positive-words-have-a-common-root]]).

## Proof

1.1 Moving the first copy of $x$ to the end gives another symmetrised word $s=x^{m-1}ax$. The equality $r=s$ holds exactly when, after cancelling the common prefix $x^{m-1}$, $xa=ax$. Thus when $xa\ne ax$, the distinct words $r,s$ have the nonempty common prefix $x^{m-1}$, a piece by [F1]. [given, F1]

2.1 When $xa=ax$ and $a\ne\varnothing$, [F2] gives $x=c^b$, $a=c^d$ for positive integers $b,d$. Substitution gives $r=c^{mb+d}$. If $a$ is empty then $r=x^m$ directly. This exhausts the commuting and noncommuting possibilities without mistaking equal rotations for distinct relators. [F2, step 1.1, algebra] ∎
