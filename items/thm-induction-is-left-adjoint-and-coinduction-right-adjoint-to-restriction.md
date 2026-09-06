---
id: thm-induction-is-left-adjoint-and-coinduction-right-adjoint-to-restriction
kind: theorem
title: "Induction and coinduction are the two adjoints"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-restriction-induction-and-coinduction-for-group-modules, thm-coextension-of-scalars-is-right-adjoint-to-restriction-of-scalars]
proof_strategy: direct
verification:
  audited: 2026-09-06
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  scraped: []
  references:
    - title: "Weibel, §6.3"
      url: "https://math.mit.edu/~hrm/palestine/weibel/06-group_homology_and_cohomology.pdf"
---

## Statement

For $H\le G$, induction is left adjoint and coinduction is right adjoint to restriction.

## Proof

**Given:** A left $H$-module $M$ and a left $G$-module $N$.

1.1 Evaluation at $1\otimes m$ sends a $G$-map $F:\mathbb Z[G]\otimes_{\mathbb Z[H]}M\to N$ to the $H$-map $m\mapsto F(1\otimes m)$. Conversely, an $H$-map $f:M\to\operatorname{Res}N$ gives the well-defined $G$-map $g\otimes m\mapsto g f(m)$. These operations are inverse and natural, proving the induction adjunction for arbitrary group rings. [given]

2.1 The arbitrary-ring coextension adjunction identifies $\operatorname{Hom}_G(N,\operatorname{Hom}_H(\mathbb Z[G],M))$ with $\operatorname{Hom}_H(\operatorname{Res}N,M)$. Both identifications are natural, giving the two adjunctions. [step 1.1] ∎
