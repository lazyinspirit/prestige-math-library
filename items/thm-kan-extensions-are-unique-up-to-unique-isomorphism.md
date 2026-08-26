---
id: thm-kan-extensions-are-unique-up-to-unique-isomorphism
kind: theorem
title: "Kan extensions are unique up to unique isomorphism"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-left-and-right-kan-extension, def-natural-transformation]
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
    - title: "E. Riehl, Category Theory in Context, 2nd ed., Exercise 6.1(ii)"
      url: "https://emilyriehl.github.io/files/context.pdf"
    - title: "B. Richter, From Categories to Homotopy Theory, §§4.1-4.2"
      url: "https://www.math.uni-hamburg.de/personen/richter/bookdraft.pdf"
pipeline_run: null
---

## Statement

Let $K:\mathcal C\to\mathcal D$ and $F:\mathcal C\to\mathcal E$ be functors.

If $(L,\eta)$ and $(L',\eta')$ are left Kan extensions of $F$ along $K$, then
there is a unique natural isomorphism $\alpha:L\Rightarrow L'$ such that

$$\eta'=(\alpha K)\circ\eta.$$

If $(R,\varepsilon)$ and $(R',\varepsilon')$ are right Kan extensions of $F$
along $K$, then there is a unique natural isomorphism $\beta:R\Rightarrow R'$
such that

$$\varepsilon=\varepsilon'\circ(\beta K).$$

So both left and right Kan extensions are unique up to unique compatible
isomorphism.

## Facts & Assumptions

**Given:** Functors $K:\mathcal C\to\mathcal D$ and $F:\mathcal C\to\mathcal E$; left Kan extensions $(L,\eta)$ and $(L',\eta')$ of $F$ along $K$; and right Kan extensions $(R,\varepsilon)$ and $(R',\varepsilon')$ of $F$ along $K$.

[L1] A left Kan extension $(L,\eta)$ of $F$ along $K$ is initial among pairs $(M,\alpha)$ with $\alpha:F\Rightarrow MK$, and a right Kan extension $(R,\varepsilon)$ is terminal among pairs $(M,\beta)$ with $\beta:MK\Rightarrow F$ ([[def-left-and-right-kan-extension]]).

## Proof

**Proof technique:** direct.

1.1 Since $(L,\eta)$ is a left Kan extension and $\eta':F\Rightarrow L'K$ is another such pair, [L1] gives a unique natural transformation $\alpha:L\Rightarrow L'$ with $\eta'=(\alpha K)\circ\eta$; similarly [L1] gives a unique natural transformation $\alpha':L'\Rightarrow L$ with $\eta=(\alpha'K)\circ\eta'$. [L1]

2.1 By step 1.1, $((\alpha'\alpha)K)\circ\eta=(\alpha'K)\circ\eta'=\eta$, while $(1_LK)\circ\eta=\eta$ trivially. So the uniqueness clause of [L1] forces $\alpha'\alpha=1_L$; likewise $\alpha\alpha'=1_{L'}$. Hence $\alpha$ is a natural isomorphism, and its compatibility with $\eta$ was built in at step 1.1. [L1, step 1.1]

3.1 The same argument with the terminal clause of [L1] gives unique $\beta:R\Rightarrow R'$ and $\beta':R'\Rightarrow R$ satisfying $\varepsilon=\varepsilon'\circ(\beta K)$ and $\varepsilon'=\varepsilon\circ(\beta'K)$, and uniqueness forces $\beta'\beta=1_R$ and $\beta\beta'=1_{R'}$. So right Kan extensions are unique up to unique compatible isomorphism as well. [L1, step 2.1] ∎
