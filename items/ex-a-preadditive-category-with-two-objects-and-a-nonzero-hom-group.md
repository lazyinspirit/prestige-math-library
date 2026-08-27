---
id: ex-a-preadditive-category-with-two-objects-and-a-nonzero-hom-group
kind: example
title: "A preadditive category with two objects and a nonzero hom-group"
status: published
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-preadditive-category]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Kiran S. Kedlaya, Solid modules over an ordinary ring, Section 1.2"
      url: "https://www.kskedlaya.org/condensed/sec_solid1.html"
pipeline_run: frontier-20
---

## Example

Let $\mathcal C$ have two objects $X,Y$ with

$$\mathcal C(X,X)=\mathbb Z,\qquad \mathcal C(Y,Y)=\mathbb Z,\qquad \mathcal C(X,Y)=\mathbb Z,\qquad \mathcal C(Y,X)=0,$$

and let composition be the obvious integer multiplication where defined and the
zero map otherwise. Then $\mathcal C$ is preadditive and has a nonzero mixed
hom-group $\mathcal C(X,Y)$.

## Facts & Assumptions

**Given:** The category $\mathcal C$ described in the Example.

[L1] A preadditive category has abelian-group hom-sets and bilinear composition
([[def-preadditive-category]]).

## Verification

**Proof technique:** direct.

1.1 Each displayed hom-set is an abelian group under ordinary integer addition, except $\mathcal C(Y,X)=0$, which is the trivial abelian group. The chosen identity morphisms are the integers $1\in\mathbb Z$ on $X$ and $Y$. [L1]

2.1 Composition is bilinear because wherever integer multiplication is defined it distributes over integer addition, and any composite involving $\mathcal C(Y,X)=0$ is automatically zero. So the data satisfy the definition [L1], while $\mathcal C(X,Y)=\mathbb Z\ne0$ gives the promised nonzero mixed hom-group. [L1, step 1.1] ∎
