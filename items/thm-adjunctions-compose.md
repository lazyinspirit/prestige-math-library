---
id: thm-adjunctions-compose
kind: theorem
title: 'Adjunctions compose with the composite unit and counit formulas'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-adjunction-by-unit-counit-and-triangle-identities, thm-interchange-law-for-natural-transformations]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'Emily Riehl, Category Theory in Context, 2nd ed., Proposition 4.3.4'
      url: 'https://emilyriehl.github.io/files/context.pdf'
    - title: 'Saunders Mac Lane, Categories for the Working Mathematician, 2nd ed., Chapter IV.8'
      url: 'https://doi.org/10.1007/978-1-4757-4721-8'
pipeline_run: null
---

## Statement

Let $F:\mathcal C\to\mathcal D$ be left adjoint to $G:\mathcal D\to\mathcal C$, with unit $\eta$ and counit $\varepsilon$, and let $F':\mathcal D\to\mathcal E$ be left adjoint to $G':\mathcal E\to\mathcal D$, with unit $\eta'$ and counit $\varepsilon'$. Then

$$F'F\dashv GG'$$

with unit and counit

$$\bar\eta=(G\eta'F)\circ\eta:1_{\mathcal C}\Rightarrow GG'F'F,$$

$$\bar\varepsilon=\varepsilon'\circ(F'\varepsilon G'):F'FGG'\Rightarrow1_{\mathcal E}.$$

## Facts & Assumptions

**Given:** The two adjunctions and their units and counits as in the Statement.

[L1] An adjunction is determined by a unit, a counit, and the two triangle identities ([[def-adjunction-by-unit-counit-and-triangle-identities]]).

[F1] Whenever the expressions are defined, the interchange identity is $(\beta'\circ\beta)*(\alpha'\circ\alpha)=(\beta'*\alpha')\circ(\beta*\alpha)$ ([[thm-interchange-law-for-natural-transformations]]).

## Proof

**Proof technique:** direct.

1.1 Whiskering gives $G\eta'F:GF\Rightarrow GG'F'F$ and $F'\varepsilon G':F'FGG'\Rightarrow F'G'$, so the displayed composites have the required types; they are natural because whiskering and vertical composition preserve naturality. [F1]

2.1 Expanding the first triangle composite for $F'F$ gives $(\bar\varepsilon F'F)\circ(F'F\bar\eta)=(\varepsilon'F'F)\circ(F'\varepsilon G'F'F)\circ(F'FG\eta'F)\circ(F'F\eta)$. Interchange rewrites the two middle factors as $F'\bigl[(\varepsilon G'F'F)\circ(FG\eta'F)\bigr]$, and naturality of $\varepsilon$ at the component $\eta'_{Fc}$ turns that bracket into $(\eta'F)\circ(\varepsilon F)$. [F1, step 1.1]

2.2 Expanding the second triangle composite for $GG'$ gives $(GG'\bar\varepsilon)\circ(\bar\eta GG')=(GG'\varepsilon')\circ(GG'F'\varepsilon G')\circ(G\eta'FGG')\circ(\eta GG')$. Interchange rewrites the two middle factors as $G\bigl[(G'F'\varepsilon G')\circ(\eta'FGG')\bigr]$, and naturality of $\eta'$ at the component $\varepsilon_{G'd}$ turns that bracket into $(\eta'G')\circ(\varepsilon G')$. The composite becomes $G\bigl[(G'\varepsilon')\circ(\eta'G')\bigr]\circ\bigl[(G\varepsilon)\circ(\eta G)\bigr]G'$, which by the two second triangle identities $G\varepsilon\circ\eta G=1_G$ and $G'\varepsilon'\circ\eta'G'=1_{G'}$ is $1_{GG'}$. [F1, L1, step 1.1]

3.1 By step 2.1 the first composite becomes $\bigl[(\varepsilon'F')\circ(F'\eta')\bigr]F\circ F'\bigl[(\varepsilon F)\circ(F\eta)\bigr]$, which by the two first triangle identities $\varepsilon F\circ F\eta=1_F$ and $\varepsilon'F'\circ F'\eta'=1_{F'}$ is $1_{F'F}$. [L1, step 2.1]

4.1 Thus $\bar\eta$ and $\bar\varepsilon$ satisfy both triangle identities, and [L1] gives $F'F\dashv GG'$. [step 3.1, step 2.2, L1] ∎
