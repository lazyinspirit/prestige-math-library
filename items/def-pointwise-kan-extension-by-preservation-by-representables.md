---
id: def-pointwise-kan-extension-by-preservation-by-representables
kind: definition
title: "Pointwise Kan extensions as those preserved by representables"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-left-and-right-kan-extension, def-hom-functors-and-hom-bifunctor, def-opposite-category, def-small-locally-small-and-large-category]
justified_by: []
aliases: []
landmark: false
verification:
  audited: 2026-08-26
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, 2nd ed., Definitions 6.3.5-6.3.6"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Definition

Let $K:\mathcal C\to\mathcal D$ and $F:\mathcal C\to\mathcal E$ be functors,
with $\mathcal D$ and $\mathcal E$ locally small
([[def-small-locally-small-and-large-category]]).

Suppose $(R,\varepsilon)$ is a right Kan extension of $F$ along $K$
([[def-left-and-right-kan-extension]]). It is **pointwise** when, for every
object $e$ of $\mathcal E$, the covariant representable functor

$$\mathcal E(e,-):\mathcal E\to\mathbf{Set}$$

([[def-hom-functors-and-hom-bifunctor]]) sends $(R,\varepsilon)$ to a right Kan
extension of $\mathcal E(e,F-)$ along $K$.

Suppose $(L,\eta)$ is a left Kan extension of $F$ along $K$. It is
**pointwise** when, after passage to opposite categories
([[def-opposite-category]]), the corresponding right Kan extension in
$\mathcal E^{\mathrm{op}}$ is preserved by every covariant representable of
$\mathcal E^{\mathrm{op}}$, equivalently by every contravariant representable

$$\mathcal E(-,e):\mathcal E^{\mathrm{op}}\to\mathbf{Set}.$$

So the phrase "preserved by representables" is not one definition but two
variance-specific ones: covariant representables for right Kan extensions, and
contravariant representables after passing to opposites for left Kan
extensions.
