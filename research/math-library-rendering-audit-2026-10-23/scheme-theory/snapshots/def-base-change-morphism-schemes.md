---
id: "def-base-change-morphism-schemes"
kind: "definition"
title: "Base change of objects, morphisms and properties"
status: published
origin: "pipeline"
deps: ["thm-fibre-products-of-schemes-exist", "def-scheme-over-base"]
provenance:
  statement: "literature-derived"
  proof: "not-applicable"
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Stacks 26.18.1 and 26.18.3"
      url: "https://stacks.math.columbia.edu/tag/01JW"
---

## Definition

Let $h:S'\to S$. For an $S$-scheme $f:X\to S$, its **base change** is $X_{S'}=X\times_S S'$, with structure map the second projection. For an $S$-morphism $u:X\to Y$, define $u_{S'}:X_{S'}\to Y_{S'}$ by its projections $u\circ\operatorname{pr}_X$ and $\operatorname{pr}_{S'}$. Existence and uniqueness follow from [[thm-fibre-products-of-schemes-exist]]; the meaning of $S$-morphism is [[def-scheme-over-base]]. These formulas preserve identities and composition because their projections do, so they define a functor. A property of morphisms is **stable under arbitrary base change** when every pullback of a morphism with that property again has it. No restriction such as flatness is implicit in “arbitrary”.
