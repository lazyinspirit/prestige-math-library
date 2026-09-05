---
id: thm-the-underlying-category-construction-is-a-two-functor
kind: theorem
title: "The underlying-category construction is a 2-functor"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-the-underlying-ordinary-category-of-an-enriched-category, def-enriched-functor, def-enriched-natural-transformation]
aliases: []
landmark: false
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
    - title: "G. M. Kelly, Basic Concepts of Enriched Category Theory, equations (1.12) and (1.13)"
      url: "https://www.scribd.com/document/891660167/tr10"
    - title: "Emily Riehl, Categorical Homotopy Theory, Remark 3.5.11"
      url: "https://emilyriehl.github.io/files/cathtpy.pdf"
---

## Statement

Let $\mathcal V$ be locally small. Sending a $\mathcal V$-category $\mathcal A$ to its underlying ordinary
category $\mathcal A_0$ extends to enriched functors and enriched natural
transformations and defines a strict 2-functor
$(-)_0:\mathcal V\text{-}\mathbf{Cat}\to\mathbf{Cat}$ on the set-object
enriched categories of this page.

## Facts & Assumptions

**Given:** A locally small monoidal category $\mathcal V$, $\mathcal V$-categories $\mathcal A,\mathcal B$, and $\mathcal V$-functors
$T,S:\mathcal A\to\mathcal B$.

[L1] The underlying category $\mathcal A_0$ has the same objects as
$\mathcal A$, hom-sets $\mathcal V(\mathbf 1,\mathcal A(A,B))$, and composition
induced from enriched composition
([[def-the-underlying-ordinary-category-of-an-enriched-category]]).

[L2] A $\mathcal V$-functor gives hom-object maps
$T_{A,B}:\mathcal A(A,B)\to\mathcal B(TA,TB)$ compatible with composition and
units ([[def-enriched-functor]]).

[L3] A $\mathcal V$-natural transformation has components
$\alpha_A:\mathbf 1\to\mathcal B(TA,SA)$
([[def-enriched-natural-transformation]]).

## Proof

**Proof technique:** direct.

1.1 On objects, define $T_0:\mathcal A_0\to\mathcal B_0$ by the same object map as $T$. On a morphism $f:\mathbf 1\to\mathcal A(A,B)$, define $T_0(f):=T_{A,B}\circ f:\mathbf 1\to\mathcal B(TA,TB)$. Because [L2] preserves enriched composition and identities, [L1] shows that $T_0$ preserves ordinary composition and identity morphisms. [L1, L2, given]

1.2 On 2-cells, send $\alpha:T\Rightarrow S$ to the ordinary natural transformation $\alpha_0:T_0\Rightarrow S_0$ whose component at $A$ is exactly the same morphism $\alpha_A:\mathbf 1\to\mathcal B(TA,SA)$ from [L3]. The enriched naturality equation of [L3] implies ordinary naturality after reading the hom-objects through [L1]. [L1, L3, algebra]

2.1 Identity functors, composite functors, identity 2-cells, and vertical and horizontal composites are preserved strictly because the definitions in steps 1.1 and 1.2 forget no object-level data and simply reuse the same component maps. Therefore the assignment is a strict 2-functor. [step 1.1, step 1.2] ∎
