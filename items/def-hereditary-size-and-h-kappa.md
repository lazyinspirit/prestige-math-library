---
id: def-hereditary-size-and-h-kappa
kind: definition
title: "Hereditary size and H_kappa"
status: published
origin: pipeline
deps: ["prop-transitive-closure-minimality", "def-cardinal"]
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
    - title: "Weiss, An Introduction to Set Theory (2014) \u2014 chapter 10 pp.100\u2013101 (explicit choice-free adaptation)."
      url: "https://www.math.toronto.edu/~weiss/Set_Theory.pdf"
---

## Definition

Let $\kappa$ be an infinite initial ordinal. In ZF set

$$H_\kappa=\{x:\exists\lambda<\kappa\ \exists j\ (j:\operatorname{TC}(\{x\})\hookrightarrow\lambda)\}.$$

This initially defines a class. Its root-inclusive transitive closure contains $x$ as an element. When $\operatorname{TC}(\{x\})$ is well-orderable its hereditary cardinality means the least ordinal equinumerous with it; under Choice this exists for every set. The injection formulation above is used without Choice.

For infinite $\kappa$, replacing $\operatorname{TC}(\{x\})$ by $\operatorname{TC}(x)$ gives the same class. Indeed $\operatorname{TC}(\{x\})=\{x\}\cup\operatorname{TC}(x)$ by the finite-stage formula. Adding one point to a set injecting into finite $\lambda$ gives an injection into $\lambda+1<\kappa$; for infinite $\lambda$, keep indices at least $\omega$, shift natural indices by one, and use index zero for the added point, obtaining an injection into $\lambda$. Restriction gives the converse. We retain the root-inclusive convention throughout.

Conventions and prerequisites: [[prop-transitive-closure-minimality]], [[def-cardinal]].
