---
id: def-the-underlying-ordinary-category-of-an-enriched-category
kind: definition
title: "The underlying ordinary category of an enriched category"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-enriched-category]
aliases: []
landmark: true
verification:
  audited: 2026-09-05
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "G. M. Kelly, Basic Concepts of Enriched Category Theory, equations (1.10) and (1.11)"
      url: "https://www.scribd.com/document/891660167/tr10"
    - title: "Emily Riehl, Categorical Homotopy Theory, Section 3.4"
      url: "https://emilyriehl.github.io/files/cathtpy.pdf"
---

## Definition

Let $\mathcal A$ be a $\mathcal V$-category ([[def-enriched-category]]).

Its **underlying ordinary category** $\mathcal A_0$ has the same objects as
$\mathcal A$ and hom-sets

$$\mathcal A_0(A,B):=\mathcal V(\mathbf 1,\mathcal A(A,B)).$$

So an ordinary morphism $A\to B$ in $\mathcal A_0$ is a global element of the
hom-object $\mathcal A(A,B)$.

Composition in $\mathcal A_0$ is induced from enriched composition:
if $f:\mathbf 1\to\mathcal A(A,B)$ and
$g:\mathbf 1\to\mathcal A(B,C)$, then

$$g\circ_0 f := \mathbf 1\xrightarrow{\cong}\mathbf 1\otimes\mathbf 1\xrightarrow{g\otimes f}\mathcal A(B,C)\otimes\mathcal A(A,B)\xrightarrow{M_{A,B,C}}\mathcal A(A,C).$$

The identity morphism of $A$ in $\mathcal A_0$ is the enriched identity
$j_A:\mathbf 1\to\mathcal A(A,A)$.
