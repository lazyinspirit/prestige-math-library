---
id: lem-open-immersion-monomorphism
kind: lemma
title: "Open immersions are monomorphisms"
status: published
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-open-immersion-schemes, def-morphism-of-schemes]
proof_strategy: direct
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "The Stacks Project, Schemes, Section 10"
      url: "https://stacks.math.columbia.edu/tag/01IS"
---
## Statement

An open immersion is a monomorphism of schemes, and a composite of open
immersions is an open immersion.

## Facts & Assumptions

**Given:** An open immersion $j:U\to X$.

## Proof

**Proof technique:** direct.

1.1 Replace $U$ by its isomorphic open subscheme of $X$, so that $j$ is the inclusion of an open subset with restricted sheaf. [given]

2.1 If $a,b:T\to U$ have $ja=jb$, their underlying maps and their sheaf maps agree after restriction to that open subscheme, hence $a=b$; thus $j$ is a monomorphism. [step 1.1]

3.1 A composite of two such identifications identifies the source with an open subscheme of the final target, so it is again an open immersion. [step 1.1] ∎
