---
id: def-normal-inclusion-of-brauer-pairs
kind: definition
title: Normal inclusion of Brauer pairs
deps: [def-brauer-pair-for-a-block, def-relative-brauer-homomorphism]
provenance:
  statement: literature-derived
  proof: not-applicable
status: published
origin: pipeline
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: Jacobsen, Block fusion systems and the center of the group ring, §§1.1 and 2.2, pp.3–8 and 13–18
      url: https://www.math.ku.dk/bibliotek/arkivet/phd-theses/phd14mwj.pdf
---

## Definition

For local pairs as in [[def-brauer-pair-for-a-block]], write $(Q,f)\trianglelefteq(P,e)$ when $Q\trianglelefteq P$, $f$ is fixed by conjugation by $P$, and $\operatorname{Br}_{P/Q}(f)e=e$. The relative map has the fixed-algebra domain in [[def-relative-brauer-homomorphism]]. Define a candidate inclusion $(Q,f)\le(P,e)$ by existence of a finite chain of such normal inclusions, allowing a chain of length zero. The later order theorem proves unique descent, independence of the chain, and the partial-order properties; none is assumed here. At equal subgroups the condition is $fe=e$, which for primitive central blocks forces $f=e$.

## Sources

Jacobsen, Block fusion systems and the center of the group ring, §§1.1 and 2.2, pp.3–8 and 13–18. Local argument and conventions as displayed above.
