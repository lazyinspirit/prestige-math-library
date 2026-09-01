---
id: thm-flatness-of-noetherian-completion
kind: theorem
title: "The completion of a Noetherian ring is flat"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-completion-as-extension-of-scalars, cor-completion-commutes-with-finite-quotients-and-submodules, thm-completion-is-exact-on-finite-modules, thm-flatness-criteria-by-injections-and-ideals, thm-noetherian-ring-ideal-characterisations]
aliases: []
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
sources:
  scraped: []
  references:
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., Corollary 22.23"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
    - title: "J. S. Milne, A Primer of Commutative Algebra, Proposition 24.6"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
    - title: "The Stacks Project, Lemma 10.97.2"
      url: "https://stacks.math.columbia.edu/tag/0BNH"
pipeline_run: null
---

## Statement

Assume the Axiom of Choice.

Let $R$ be a Noetherian commutative ring and let $I \subseteq R$ be an ideal. Then the
completion map
$$
R \to \widehat R
$$
makes $\widehat R$ into a flat $R$-module.

## Facts & Assumptions

**Given:** A Noetherian commutative ring $R$ and an ideal $I \subseteq R$.

[L1] For a Noetherian ring, completion identifies finite modules with extension
of scalars, and it carries ideal multiples to the corresponding multiples after
tensoring ([[thm-completion-as-extension-of-scalars]], [[cor-completion-commutes-with-finite-quotients-and-submodules]]).

[L2] An $R$-module is flat exactly when $J \otimes_R M \to M$ is injective for
every ideal $J \subseteq R$ ([[thm-flatness-criteria-by-injections-and-ideals]]).

[L3] Completion is exact on short exact sequences of finite modules over a Noetherian commutative ring ([[thm-completion-is-exact-on-finite-modules]]).

[L4] Every ideal of a Noetherian commutative ring is finitely generated
([[thm-noetherian-ring-ideal-characterisations]]).

## Proof

**Proof technique:** direct.

1.1 Let $J \subseteq R$ be an ideal. It is a finite $R$-module by [L4]. Hence [L1] identifies $$J \otimes_R \widehat R$$ with the completion $\widehat J$, and under this identification the multiplication map $$J \otimes_R \widehat R \to \widehat R$$ becomes the natural map $$\widehat J \to \widehat R.$$ [L1, L4]

2.1 The map $\widehat J \to \widehat R$ is injective because [L3] applies to the short exact sequence $$0 \to J \to R \to R/J \to 0.$$ Therefore $J \otimes_R \widehat R \to \widehat R$ is injective for every ideal $J$. [L3, step 1.1]

3.1 Applying [L2], we conclude that $\widehat R$ is flat as an $R$-module. [L2, step 2.1] ∎
