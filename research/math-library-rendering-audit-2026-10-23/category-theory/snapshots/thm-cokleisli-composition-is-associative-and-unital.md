---
id: thm-cokleisli-composition-is-associative-and-unital
kind: theorem
title: "Co-Kleisli composition is associative and unital"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-comonad, thm-kleisli-composition-is-associative-and-unital]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-sonnet-5"
    verdict: pass
    date: 2026-08-17
  audited: 2026-08-17
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, 2nd ed., Definition 5.2.10 by formal duality"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Statement

For a comonad $(G,\varepsilon,\delta)$, regard a co-Kleisli arrow $A\rightsquigarrow B$ as a morphism $f:GA\to B$. Define

$$g\star f=g\,G(f)\,\delta_A:GA\to C$$

for $g:GB\to C$, and define the identity at $A$ to be $\varepsilon_A:GA\to A$. Then $\star$ is associative and unital.

## Facts & Assumptions

**Given:** A comonad $(G,\varepsilon,\delta)$ and co-Kleisli arrows $f:GA\to B$, $g:GB\to C$, and $h:GC\to D$.

[L1] The comonad equations are coassociativity of $\delta$ and the two counit laws for $\varepsilon$ ([[def-comonad]]).

[L2] For a monad $(T,\eta,\mu)$ and morphisms $f:A\to TB$, $g:B\to TC$, the composite $g\star f:=\mu_C\circ T(g)\circ f$ is associative, and $\eta_A:A\to TA$ is a two-sided identity at $A$ ([[thm-kleisli-composition-is-associative-and-unital]]).

## Proof

**Proof technique:** direct.

1.1 The formula $g\star f=gG(f)\delta_A$ has source $GA$ and target $C$, so it defines composition on the proposed arrows. [L1]

2.1 Expanding $h\star(g\star f)$ and $(h\star g)\star f$, naturality and coassociativity of $\delta$ move the two duplications into the same order, after which functoriality of $G$ makes the composites equal. [L1, L2, step 1.1]

3.1 Naturality of $\varepsilon$ at $f$ rewrites $\varepsilon_B\star f=\varepsilon_B\,G(f)\,\delta_A$ as $f\,\varepsilon_{GA}\,\delta_A$, so the equation $\varepsilon G\circ\delta=1_G$ gives $\varepsilon_B\star f=f$; and $f\star\varepsilon_A=f\,G(\varepsilon_A)\,\delta_A$, so the equation $G\varepsilon\circ\delta=1_G$ gives $f\star\varepsilon_A=f$. Hence $\varepsilon_A$ is a two-sided identity. [L1, L2, step 1.1] ∎
