---
id: prop-an-additive-functor-preserves-split-biproduct-diagrams
kind: proposition
title: "An additive functor preserves split biproduct diagrams"
status: published
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-an-additive-functor-preserves-finite-biproducts, thm-on-a-biproduct-the-injections-and-projections-satisfy-the-identity-sum-relation]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Section 12.3, Lemma 12.3.7"
      url: "https://stacks.math.columbia.edu/tag/09SE"
pipeline_run: frontier-20
---

## Statement

If $F:\mathcal C\to\mathcal D$ is additive and

$$A\xrightarrow{i}A\oplus C\xrightarrow{p}C$$

is part of a biproduct diagram with complementary maps $r:A\oplus C\to A$ and
$j:C\to A\oplus C$, then

$$FA\xrightarrow{F(i)}F(A\oplus C)\xrightarrow{F(p)}FC$$

is again part of a biproduct diagram with complementary maps $F(r)$ and $F(j)$.

## Facts & Assumptions

**Given:** An additive functor $F$ and a split biproduct diagram in its source.

[L1] An additive functor preserves finite biproducts
([[thm-an-additive-functor-preserves-finite-biproducts]]).

[L2] On a biproduct, the injection-projection maps satisfy the identity-sum
relation
([[thm-on-a-biproduct-the-injections-and-projections-satisfy-the-identity-sum-relation]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the object $F(A\oplus C)$ is a biproduct of $FA$ and $FC$ with structure maps $F(i),F(j),F(r),F(p)$. [L1]

2.1 The displayed identities $ri=1_A$, $pj=1_C$, $rj=0$, $pi=0$, and $ir+jp=1_{A\oplus C}$ are exactly the biproduct equations, so applying $F$ preserves them; [L2] identifies the last one as the identity-sum relation in the target. [L2, step 1.1]

3.1 Therefore the image diagram is again a split biproduct diagram. [step 1.1, step 2.1] ∎
