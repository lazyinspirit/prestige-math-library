---
id: thm-universal-arrows-are-initial-or-terminal-in-comma-categories
kind: theorem
title: "Universal arrows to a functor are initial in comma categories, and universal arrows from a functor are terminal"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-universal-arrow-to-and-from-a-functor,
       def-comma-slice-and-coslice-categories,
       def-initial-terminal-and-zero-object]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Emily Riehl, Category Theory in Context, Proposition 2.4.8"
      url: "https://emilyriehl.github.io/files/context.pdf"
    - title: "Tom Leinster, Basic Category Theory, Section 4.1"
      url: "https://arxiv.org/pdf/1612.09375.pdf"
pipeline_run: null
---

## Statement

For a functor $U:\mathcal D\to\mathcal C$ and an object $X\in\mathcal C$:

1. a pair $(R,\eta:X\to U(R))$ is a universal arrow from $X$ to $U$ if and
   only if it is initial as an object of $(X\downarrow U)$;
2. a pair $(R,\varepsilon:U(R)\to X)$ is a universal arrow from $U$ to $X$ if
   and only if it is terminal as an object of $(U\downarrow X)$.

## Facts & Assumptions

**Given:** The functor $U:\mathcal D\to\mathcal C$, object $X$, and one of the pairs in the statement.

[F1] A universal arrow from $X$ to $U$ gives a unique $h:R\to D$ with $f=U(h)\circ\eta$ for every $f:X\to U(D)$; a universal arrow from $U$ to $X$ gives a unique $h:D\to R$ with $f=\varepsilon\circ U(h)$ for every $f:U(D)\to X$ ([[def-universal-arrow-to-and-from-a-functor]]).

[F2] In $(X\downarrow U)$, a morphism $(R,\eta)\to(D,f)$ is an $h:R\to D$ with $U(h)\circ\eta=f$; in $(U\downarrow X)$, a morphism $(D,f)\to(R,\varepsilon)$ is an $h:D\to R$ with $\varepsilon\circ U(h)=f$ ([[def-comma-slice-and-coslice-categories]]).

[F3] Initiality means that there is exactly one morphism from the object to every object, while terminality means that there is exactly one morphism from every object to it ([[def-initial-terminal-and-zero-object]]).

## Proof

**Proof technique:** direct.

1.1 By [F2], the morphisms $(R,\eta)\to(D,f)$ in $(X\downarrow U)$ are exactly the morphisms $h$ satisfying the factorisation equation in the first part of [F1]. [F1, F2]

1.2 By [F2], the morphisms $(D,f)\to(R,\varepsilon)$ in $(U\downarrow X)$ are exactly the morphisms $h$ satisfying the second factorisation equation in [F1]. [F1, F2]

2.1 Existence and uniqueness of such an $h$ for every $(D,f)$ is therefore equivalent, by [F3], to $(R,\eta)$ being initial. [step 1.1, F3]

3.1 Existence and uniqueness of such an $h$ for every $(D,f)$ is therefore equivalent, by [F3], to $(R,\varepsilon)$ being terminal. [step 1.2, F3] ∎
