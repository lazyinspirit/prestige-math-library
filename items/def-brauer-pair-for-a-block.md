---
id: def-brauer-pair-for-a-block
kind: definition
title: Brauer pair for a block
deps: [prop-central-idempotents-under-the-brauer-homomorphism]
provenance:
  statement: literature-derived
  proof: not-applicable
status: draft
origin: pipeline
verification:
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

A **local Brauer pair** is $(P,e)$ where $P\le G$ is a $p$-subgroup and $e$ is a primitive central idempotent of $kC_G(P)$. For a global block $b\in kG$, it is a **$b$-Brauer pair** when $\operatorname{Br}_P(b)e=e$. Equivalently the product is nonzero, by [[prop-central-idempotents-under-the-brauer-homomorphism]]. Membership in a global block is not an inclusion relation between local pairs. In particular $(1,b)$ is a $b$-pair because $\operatorname{Br}_1$ is the identity.

## Sources

Jacobsen, Block fusion systems and the center of the group ring, §§1.1 and 2.2, pp.3–8 and 13–18. Local argument and conventions as displayed above.
