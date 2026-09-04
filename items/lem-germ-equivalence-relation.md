---
id: lem-germ-equivalence-relation
kind: lemma
title: "Equality on a smaller neighbourhood defines the germ equivalence relation"
status: draft
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-stalk-of-presheaf, def-equivalence-relation]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Sheaves on Spaces, Section 11"
      url: "https://stacks.math.columbia.edu/download/sheaves.pdf"
---

## Statement

Let $\mathcal F$ be a presheaf on a topological space $X$ and let $x\in X$.
For pairs $(U,s)$ and $(V,t)$ with $x\in U\cap V$, define
$$(U,s)\sim_x(V,t)$$
when there exists an open neighbourhood $W$ of $x$ with
$W\subseteq U\cap V$ and
$$s|_W=t|_W.$$
Then $\sim_x$ is an equivalence relation.

## Facts & Assumptions

**Given:** A presheaf $\mathcal F$ on $X$ and a point $x\in X$.

[F1] The stalk is built from pairs $(U,s)$ modulo equality on a smaller
neighbourhood of $x$ ([[def-stalk-of-presheaf]]).

[F2] An equivalence relation is one that is reflexive, symmetric, and
transitive ([[def-equivalence-relation]]).

## Proof

**Proof technique:** direct.

1.1 Reflexivity holds because if $(U,s)$ is any pair, then $s|_U=s|_U$, so $(U,s)\sim_x(U,s)$. Symmetry holds because $s|_W=t|_W$ implies $t|_W=s|_W$ on the same neighbourhood $W$. [F1, F2]

1.2 Suppose $(U,s)\sim_x(V,t)$ and $(V,t)\sim_x(Z,r)$. Choose neighbourhoods $W_1\subseteq U\cap V$ and $W_2\subseteq V\cap Z$ with $s|_{W_1}=t|_{W_1}$ and $t|_{W_2}=r|_{W_2}$. Then $W:=W_1\cap W_2$ is an open neighbourhood of $x$ contained in $U\cap Z$, and on $W$ one has $s|_W=t|_W=r|_W$. Hence $(U,s)\sim_x(Z,r)$. [F1, given]

2.1 Steps 1.1 and 1.2 show that $\sim_x$ is reflexive, symmetric, and transitive. By [F2], it is an equivalence relation. [F2, step 1.1, step 1.2] ∎
