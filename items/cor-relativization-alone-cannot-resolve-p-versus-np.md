---
id: cor-relativization-alone-cannot-resolve-p-versus-np
kind: corollary
title: "Relativization alone cannot resolve p versus np"
status: published
origin: pipeline
deps: [def-relativizing-proof-technique, thm-an-oracle-separates-p-from-np, thm-an-oracle-collapses-p-and-np]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Arora–Barak, Computational Complexity, 2007 draft; §3.5 conclusion, p72."
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
---

## Statement

Neither an argument for $P=NP$ nor an argument for $P\ne NP$ can be valid unchanged relative to every total oracle.

## Facts & Assumptions

**Given:** the objects and hypotheses in the statement above.

[F1] An argument about complexity classes **relativizes** if its asserted reasoning remains valid when every machine in it receives the same arbitrary total membership oracle, using the resource conventions of the stated convention. This is a property of an argument, not a claimed algorithm for classifying all proofs. ([[def-relativizing-proof-technique]]).

[F2] There is a total oracle $B$ for which $P^B\ne NP^B$. In fact $L_B=\{1^n:B\cap\{0,1\}^n\ne\varnothing\}$ lies in $NP^B\setminus P^B$. ([[thm-an-oracle-separates-p-from-np]]).

[F3] For $A=TQBF$, $P^A=NP^A=\mathrm{PSPACE}$. ([[thm-an-oracle-collapses-p-and-np]]).


## Proof

1.1 By the definition of relativization, an argument for equality with this property would prove $P^B=NP^B$ for every total $B$. The separating oracle supplies a counterinstance. [F1, F2]

2.1 An argument for inequality with this property would prove $P^A\ne NP^A$ for every total $A$. The TQBF oracle instead gives equality. These two obstructions concern the property of the argument, and imply neither an unrelativized equality nor an unrelativized separation. [F1, F3] ∎
