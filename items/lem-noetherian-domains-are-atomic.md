---
id: lem-noetherian-domains-are-atomic
kind: lemma
title: "Noetherian domains are atomic"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-noetherian-ring-and-module, def-divisibility-and-associates-in-a-domain, def-irreducible-and-prime-elements-in-a-domain]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Lemma 10.120.3"
      url: "https://stacks.math.columbia.edu/tag/034O"
pipeline_run: frontier-22
---

## Statement

Every nonzero nonunit in a Noetherian integral domain is a finite product of
irreducible elements.

## Facts & Assumptions

**Given:** A Noetherian integral domain $R$ and a nonzero nonunit $a\in R$.

[L1] Noetherianity means the ascending chain condition on ideals, in particular on principal ideals ([[def-noetherian-ring-and-module]]).

[L2] Divisibility and associates are those of [[def-divisibility-and-associates-in-a-domain]], and irreducible elements are those of [[def-irreducible-and-prime-elements-in-a-domain]].

## Proof

**Proof technique:** direct.

1.1 Suppose the statement were false, and let $S$ be the set of nonzero nonunits that are not finite products of irreducibles. By [L1], the family of principal ideals $(x)$ with $x\in S$ has a maximal member; choose $a\in S$ with $(a)$ maximal. The element $a$ is not irreducible, so write $a=bc$ with $b$ and $c$ nonunits. [L1, L2, choose]

2.1 Since $a$ is not a finite product of irreducibles, at least one of $b$ or $c$ lies in $S$; choose $b$ if possible, otherwise choose $c$. Also $a=bc$ makes $a\in(b)$ and $a\in(c)$, while neither $b$ nor $c$ is associate to $a$ because both are nonunits. Hence $(a)\subsetneq(b)$ and $(a)\subsetneq(c)$, contradicting the maximal choice of $(a)$. [step 1.1, L2, algebra]

3.1 The contradiction in step 2.1 shows $S$ is empty. Therefore every nonzero nonunit of $R$ factors into irreducibles. [step 2.1] ∎
