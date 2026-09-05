---
id: thm-a-lax-monoidal-functor-induces-a-change-of-base-on-enriched-categories
kind: theorem
title: "A lax monoidal functor induces change of base on enriched categories"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-lax-strong-and-strict-monoidal-functor, def-enriched-category]
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-09-05
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Emily Riehl, Categorical Homotopy Theory, Lemma 3.4.3"
      url: "https://emilyriehl.github.io/files/cathtpy.pdf"
    - title: "Geoffrey Cruttwell, Normed Spaces and the Change of Base for Enriched Categories, Proposition 4.2.1"
      url: "https://www.reluctantm.com/gcruttw/publications/thesis4.pdf"
---

## Statement

Let $F:\mathcal V\to\mathcal W$ be a lax monoidal functor. Every
$\mathcal V$-category $\mathcal A$ determines a $\mathcal W$-category
$F_*\mathcal A$ with the same objects and hom-objects
$(F_*\mathcal A)(A,B):=F(\mathcal A(A,B))$.

## Facts & Assumptions

**Given:** A lax monoidal functor $F:\mathcal V\to\mathcal W$ and a
$\mathcal V$-category $\mathcal A$.

[L1] A lax monoidal functor provides comparison morphisms
$F(X)\otimes F(Y)\to F(X\otimes Y)$ and $\mathbf 1_{\mathcal W}\to F(\mathbf 1_{\mathcal V})$
compatible with associativity and the unitors
([[def-lax-strong-and-strict-monoidal-functor]]).

[L2] A $\mathcal V$-category is specified by hom-objects, composition maps, and
identity maps satisfying the usual enriched diagrams
([[def-enriched-category]]).

## Proof

**Proof technique:** direct.

1.1 Keep the same object set as $\mathcal A$ and define the new hom-object from $A$ to $B$ to be $F(\mathcal A(A,B))$. [L2, given]

1.2 Use the laxity morphism of [L1] to send $F(\mathcal A(B,C))\otimes F(\mathcal A(A,B))$ into $F(\mathcal A(B,C)\otimes\mathcal A(A,B))$, then follow with $F(M_{A,B,C})$ to obtain the new enriched composition map. Use the unit morphism $\mathbf 1_{\mathcal W}\to F(\mathbf 1_{\mathcal V})$ followed by $F(j_A)$ for the new enriched identity. [L1, L2, construct]

2.1 The coherence axioms of [L1] ensure that applying $F$ to the associativity and unit diagrams of [L2] yields the corresponding diagrams in $\mathcal W$. Thus the data of steps 1.1 and 1.2 define a $\mathcal W$-category. [L1, L2, step 1.2] ∎
