---
id: def-membership-rank-of-a-set
kind: definition
title: "Membership rank under Foundation"
status: published
origin: pipeline
deps: ["def-rank-of-a-well-founded-relation", "thm-foundation-equivalent-to-hierarchy-exhaustion"]
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
    - title: "Weiss, An Introduction to Set Theory (2014) \u2014 chapter 10 p.99."
      url: "https://www.math.toronto.edu/~weiss/Set_Theory.pdf"
---

## Definition

Now assume ZF, including Foundation. Membership on the universe is well-founded and setlike, so its ordinal rank is defined for every set. Write

$$\operatorname{rank}(x)=\sup\{\operatorname{rank}(y)+1:y\in x\}.$$

The empty supremum is $0$, so $\operatorname{rank}(\varnothing)=0$. If $y\in x$, then $\operatorname{rank}(y)<\operatorname{rank}(x)$. This is the Foundation-dependent special case of relation rank. The earlier construction of $V_\alpha$ did not require Foundation.

Conventions and prerequisites: [[def-rank-of-a-well-founded-relation]], [[thm-foundation-equivalent-to-hierarchy-exhaustion]].
