---
id: thm-evaluation-is-the-colimit-over-the-slice-category
kind: theorem
title: "Evaluation is the colimit over the slice category"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-the-comma-category-limit-and-colimit-formulae-compute-kan-extensions, def-comma-slice-and-coslice-categories, def-limit-and-colimit-of-a-diagram, def-functor-and-contravariant-functor]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, 2nd ed., Proposition 6.5.6"
      url: "https://emilyriehl.github.io/files/context.pdf"
    - title: "B. Richter, From Categories to Homotopy Theory, Proposition 4.7.2"
      url: "https://www.math.uni-hamburg.de/personen/richter/bookdraft.pdf"
pipeline_run: null
---

## Statement

Let $F:\mathcal C\to\mathcal E$ be a functor and let $c$ be an object of
$\mathcal C$. Then the diagram

$$\mathcal C/c\longrightarrow\mathcal C\overset{F}{\longrightarrow}\mathcal E$$

has a colimit, and that colimit is $F(c)$.

The proof is again direct: the identity arrow $1_c:c\to c$ is terminal in the
slice category.

## Facts & Assumptions

**Given:** A functor $F:\mathcal C\to\mathcal E$ and an object $c$ of $\mathcal C$.

[F1] The slice category $\mathcal C/c$ has objects arrows $u:d\to c$, and a morphism from $u:d\to c$ to $u':d'\to c$ is an arrow $a:d\to d'$ with $u'\circ a=u$ ([[def-comma-slice-and-coslice-categories]]).

[F2] A colimit is an initial cocone ([[def-limit-and-colimit-of-a-diagram]]).

[L1] The comma-category formulas compute left Kan extensions ([[thm-the-comma-category-limit-and-colimit-formulae-compute-kan-extensions]]).

## Proof

**Proof technique:** direct.

1.1 Specialize the left-Kan part of [L1] to $K=1_{\mathcal C}$. Then the indexing category $(1_{\mathcal C}\downarrow c)$ is exactly the slice category $\mathcal C/c$ of [F1]. [F1, L1]

2.1 The object $(c,1_c)$ is terminal in $\mathcal C/c$: for any object $u:d\to c$, the required morphism from $u$ to $(c,1_c)$ is $u$ itself, and it is unique because its defining equation is $1_c\circ a=u$. Therefore the image of $(c,1_c)$ under the diagram is a colimit object. That image is $F(c)$, and its colimiting cocone has components $F(u):F(d)\to F(c)$. By [F2], this says precisely that $F(c)$ is the colimit of the diagram on $\mathcal C/c$. [F1, F2, step 1.1] ∎
