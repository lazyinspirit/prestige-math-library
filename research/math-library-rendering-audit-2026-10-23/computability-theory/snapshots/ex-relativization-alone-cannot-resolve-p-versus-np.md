---
id: ex-relativization-alone-cannot-resolve-p-versus-np
kind: example
title: "Relativization alone cannot resolve p versus np"
status: published
origin: pipeline
deps: [cor-relativization-alone-cannot-resolve-p-versus-np, lem-polynomial-space-oracle-absorption]
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
    - title: "Arora–Barak, Computational Complexity, 2007 draft; §3.5 proof of Theorem3.9, pp71–72."
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
---

## Example

A TQBF oracle absorbs polynomial nondeterministic computation into PSPACE. A finite diagonal stage with clock $p(n)=n^2$ and $n=8$ can defeat a machine on $1^8$, provided all earlier committed words have length less than eight. This finite stage is not a complete separating oracle.

## Facts & Assumptions

**Given:** the objects and hypotheses in the statement above.

[F1] Neither an argument for $P=NP$ nor an argument for $P\ne NP$ can be valid unchanged relative to every total oracle. ([[cor-relativization-alone-cannot-resolve-p-versus-np]]).

[F2] $NP^{TQBF}\subseteq\mathrm{PSPACE}\subseteq P^{TQBF}$. ([[lem-polynomial-space-oracle-absorption]]).


## Verification

1.1 A branch has at most polynomially many queries, all of polynomial length. Replaying the finite branch tree and deciding each TQBF query in reusable polynomial space gives the absorption; one many-one TQBF reduction supplies the converse PSPACE inclusion into deterministic oracle time. [F2]

2.1 At $n=8$ there are $256$ candidate words and at most $64$ queries. Preserve earlier commitments and answer every new query NO. At least $192$ length-eight words remain unqueried. An accepting run is defeated by freezing the entire length to NO; a rejecting run by setting one unqueried word YES and freezing the rest NO. Also freeze every queried word of other lengths. Further stages are required to defeat other programs. Opposite full oracle worlds, not this one finite count alone, yield the relativization obstruction. [F1, algebra] ∎
