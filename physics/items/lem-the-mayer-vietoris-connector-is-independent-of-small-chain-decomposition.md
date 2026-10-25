---
id: lem-the-mayer-vietoris-connector-is-independent-of-small-chain-decomposition
kind: lemma
title: "Well-definedness of the Mayer–Vietoris connector"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-mayer-vietoris-connecting-class, thm-short-exact-two-open-singular-chain-mayer-vietoris-sequence]
proof_strategy: direct
verification:
  audited: 2026-09-06
  precheck: pass
  judge: {model: "gpt-5.6-terra", verdict: pass, date: 2026-09-06}
sources:
  references:
    - title: "Allen Hatcher, Algebraic Topology, §2.2"
      url: "https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf"
pipeline_run: frontier-31a
---

## Statement

The class $[\partial u]$ defining the Mayer–Vietoris connector is independent
of the small-chain decomposition and of the chosen cycle representative.

## Facts & Assumptions

**Given:** Two decompositions $z=u+v=u'+v'$ of a cover-small cycle.

## Proof

**Proof technique:** direct.

1.1 Exactness of the chain sequence gives $u-u'=w$ and $v-v'=-w$ for some $w\in C_n(U\cap V;G)$. [given, algebra]

2.1 Hence $\partial u-\partial u'=\partial w$, so the two overlap cycles give the same homology class. Changing $z$ by a boundary yields the same calculation one degree higher. [step 1.1, algebra] ∎
