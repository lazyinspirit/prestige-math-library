---
id: lem-radial-mollification-fixes-local-mean-value-functions
kind: lemma
title: "Radial mollification fixes local mean-value functions"
status: published
origin: pipeline
deps: [def-radial-mollifier-family-in-rn, def-spherical-averages-and-local-ball-means-in-rn, lem-sphere-and-ball-measures-scale, thm-polar-coordinates-formula-for-lebesgue-measure, def-countable-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-05-receipts.jsonl (lem-radial-mollification-fixes-local-mean-value-functions). No independent judge or whole-closure certification.
    delegated_by: owner
sources:
  references:
    - title: "PDE source treatment"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
---
## Statement

Assume the Axiom of Countable Choice. Let $u\in C(\Omega)$ have the spherical mean-value property, and let $(\rho_\varepsilon)$ be a radial mollifier family as in [[def-radial-mollifier-family-in-rn]]. Then $(u*\rho_\varepsilon)(x)=u(x)$ whenever $B_\varepsilon(x)\Subset\Omega$.

## Proof

**Given:** Countable Choice, $u$ has the local spherical mean-value property, and $B_\varepsilon(x)\Subset\Omega$.

1.1 Under Countable Choice, [[thm-polar-coordinates-formula-for-lebesgue-measure]] gives $(u*\rho_\varepsilon)(x)=\omega_{n-1}\int_0^\varepsilon q_\varepsilon(t)t^{n-1}M_u(x,t)dt$ [given].

2.1 Substitute $M_u(x,t)=u(x)$ and use $\int\rho_\varepsilon=1$ to obtain $(u*\rho_\varepsilon)(x)=u(x)$ [given]. ∎
