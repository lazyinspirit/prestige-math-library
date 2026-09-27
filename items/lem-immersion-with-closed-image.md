---
id: lem-immersion-with-closed-image
kind: lemma
title: An immersion with closed image is a closed immersion
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-locally-closed-immersion, def-closed-immersion-schemes]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Schemes, Lemma 26.10.4, printed p.18"
      url: "https://stacks.math.columbia.edu/download/schemes.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
---

## Statement

Let $i:Z\to X$ be an immersion of schemes. If the image $i(Z)$ is closed in $X$,
then $i$ is a closed immersion.

## Facts & Assumptions

**Given:** An immersion $i:Z\to X$ with $i(Z)$ closed in $X$, and a factorization $i=j\circ c$ with $c:Z\to U$ a closed immersion into an open subscheme $j:U\hookrightarrow X$.

[F1] A morphism $i$ is an **immersion** if there exist an open subscheme $j:U\hookrightarrow X$ and a closed immersion $c:Z\to U$ with $i=j\circ c$; the property depends only on $i$, and $j$ is a homeomorphism onto $U$, so $i(Z)=c(Z)$ as subsets of $X$. ([[def-locally-closed-immersion]])

[F2] A morphism $i:Z\to X$ is a **closed immersion** if its underlying map is a homeomorphism onto a closed subset of $X$ and $\mathcal O_X\to i_*\mathcal O_Z$ is surjective; a closed immersion $c$ has $\mathcal O_U\to c_*\mathcal O_Z$ surjective, and for an open immersion $j:U\hookrightarrow X$ the stalk maps of $\mathcal O_X\to j_*\mathcal O_U$ are isomorphisms at points of $U$. ([[def-closed-immersion-schemes]])

## Proof

1.1 By [F1] the underlying map of $i$ is the composite of the homeomorphism $Z\to c(Z)$ induced by $c$ and the inclusion $c(Z)\subseteq U\subseteq X$; hence it is a homeomorphism onto the subset $i(Z)=c(Z)$ of $X$, which is closed in $X$ by hypothesis. [F1, given]

2.1 It remains to check the structure sheaf map $\mathcal O_X\to i_*\mathcal O_Z$ of [F2] on stalks. For $x\in X$ with $x\notin i(Z)$ one has $(i_*\mathcal O_Z)_x=0$, so surjectivity at $x$ is automatic. [F2, step 1.1]

2.2 For $x\in i(Z)\subseteq U$ the stalk map factors through the open-immersion stalk isomorphism $\mathcal O_{X,x}\to\mathcal O_{U,x}$ followed by the stalk at $x$ of the surjection $\mathcal O_U\to c_*\mathcal O_Z$ of [F2], hence is surjective; the identifications $(i_*\mathcal O_Z)_x=(c_*\mathcal O_Z)_x$ hold because $j$ maps $U$ homeomorphically onto the open set $U$ containing $x$. [F2, step 1.1]

3.1 Steps 1.1, 2.1 and 2.2 verify both clauses of [F2]: the underlying map is a homeomorphism onto the closed subset $i(Z)$ and the structure sheaf map is surjective, so $i$ is a closed immersion. [F2, step 1.1, step 2.1, step 2.2] ∎
