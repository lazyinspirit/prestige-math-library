---
id: thm-evaluation-is-the-limit-over-the-coslice-category
kind: theorem
title: "Evaluation is the limit over the coslice category"
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
    - title: "E. Riehl, Category Theory in Context, 2nd ed., Proposition 6.5.4"
      url: "https://emilyriehl.github.io/files/context.pdf"
    - title: "B. Richter, From Categories to Homotopy Theory, Proposition 4.7.2"
      url: "https://www.math.uni-hamburg.de/personen/richter/bookdraft.pdf"
pipeline_run: null
---

## Statement

Let $F:\mathcal C\to\mathcal E$ be a functor and let $c$ be an object of
$\mathcal C$. Then the diagram

$$c/\mathcal C\longrightarrow\mathcal C\overset{F}{\longrightarrow}\mathcal E$$

has a limit, and that limit is $F(c)$.

The proof is direct: the identity arrow $1_c:c\to c$ is initial in the coslice
category, so no product or equalizer computation is needed.

## Facts & Assumptions

**Given:** A functor $F:\mathcal C\to\mathcal E$ and an object $c$ of $\mathcal C$.

[F1] The coslice category $c/\mathcal C$ has objects arrows $u:c\to d$, and a morphism from $u:c\to d$ to $u':c\to d'$ is an arrow $a:d\to d'$ with $a\circ u=u'$ ([[def-comma-slice-and-coslice-categories]]).

[F2] A limit is a terminal cone ([[def-limit-and-colimit-of-a-diagram]]).

[L1] The comma-category formulas compute right Kan extensions ([[thm-the-comma-category-limit-and-colimit-formulae-compute-kan-extensions]]).

## Proof

**Proof technique:** direct.

1.1 Specialize the right-Kan part of [L1] to $K=1_{\mathcal C}$. Then the indexing category $(c\downarrow 1_{\mathcal C})$ is exactly the coslice category $c/\mathcal C$ of [F1]. [F1, L1]

2.1 The object $(c,1_c)$ is initial in $c/\mathcal C$: for any object $u:c\to d$, the required morphism from $(c,1_c)$ to $u$ is $u$ itself, and it is unique because its defining equation is $a\circ1_c=u$. Therefore the image of $(c,1_c)$ under the diagram is a limit object. That image is $F(c)$, and its limiting cone has components $F(u):F(c)\to F(d)$. By [F2], this says precisely that $F(c)$ is the limit of the diagram on $c/\mathcal C$. [F1, F2, step 1.1] ∎
