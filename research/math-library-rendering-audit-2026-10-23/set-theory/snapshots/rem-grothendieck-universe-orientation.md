---
id: rem-grothendieck-universe-orientation
kind: remark
title: "Grothendieck universes and relative size"
status: published
origin: pipeline
deps: ["def-grothendieck-universe-closure-convention", "prop-ranks-of-ordinals-and-hierarchy-stages"]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Shulman, Set theory for category theory \u2014 p.16 paragraphs on universes and relative smallness."
      url: "https://arxiv.org/pdf/0810.1279"
---

## Remark

For a fixed universe $U$, “$U$-small” means being a member of $U$. It is relative to that specified set. Cardinal size alone does not determine it: a singleton can contain an ordinal of arbitrarily high rank, since $\operatorname{rank}(\{\alpha\})=\alpha+1$ follows immediately from the rank equation and $\operatorname{rank}(\alpha)=\alpha$.

Our closure convention does not impose $\omega\in U$. For example, $V_\omega$ satisfies the closure conditions: its members lie in finite stages; pairs and power sets raise the stage by only finitely much; and a family indexed by one of its finite members has a finite bound on the stages of its values, so its union again lies in a finite stage. It is nonempty and transitive, but $\omega\notin V_\omega$ by the ordinal-intersection formula. This explains why an uncountable-inaccessible characterization needs an additional infinity convention. Universe existence axioms and large-cardinal characterizations are not asserted here.

Conventions and prerequisites: [[def-grothendieck-universe-closure-convention]], [[prop-ranks-of-ordinals-and-hierarchy-stages]].
