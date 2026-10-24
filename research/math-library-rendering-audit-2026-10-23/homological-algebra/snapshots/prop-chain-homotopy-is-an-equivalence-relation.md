---
id: prop-chain-homotopy-is-an-equivalence-relation
kind: proposition
title: "Chain homotopy is an equivalence relation"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-chain-homotopy]
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, Chapter 1 of An Introduction to Homological Algebra"
      url: "https://math.mit.edu/~hrm/palestine/weibel/01-chain_complexes.pdf"
pipeline_run: frontier-25
---

## Statement

For fixed chain complexes $C_\bullet$ and $D_\bullet$ in an abelian category,
the relation of being
chain homotopic is an equivalence relation on the set of chain maps
$C_\bullet\to D_\bullet$.

## Facts & Assumptions

**Given:** Chain maps $f,g,h:C_\bullet\to D_\bullet$ between complexes in an abelian category.

[L1] A chain homotopy $s:f\simeq g$ is a degree-$1$ family with $$f-g=ds+sd$$ componentwise ([[def-chain-homotopy]]).

## Proof

**Proof technique:** direct.

1.1 Reflexivity holds because the zero degree-$1$ family satisfies $$f-f=0=d0+0d,$$ so [L1] gives $f\simeq f$. [L1, given, algebra]

2.1 If $s:f\simeq g$, then [L1] gives $f-g=ds+sd$, hence $$g-f=d(-s)+(-s)d,$$ so $g\simeq f$. If $s:f\simeq g$ and $t:g\simeq h$, then $$f-h=(f-g)+(g-h)=d(s+t)+(s+t)d,$$ so $f\simeq h$. Therefore the relation is symmetric and transitive as well. [L1, step 1.1, algebra] ∎
