---
id: ex-singleton-rank-and-hereditary-size
kind: example
title: "A singleton can have large rank and hereditary size"
status: draft
origin: pipeline
deps: ["def-hereditary-size-and-h-kappa", "prop-ranks-of-ordinals-and-hierarchy-stages"]
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Weiss, An Introduction to Set Theory (2014) \u2014 chapter 10 cardinality example p.101; Shulman p.16 singleton example."
      url: "https://www.math.toronto.edu/~weiss/Set_Theory.pdf"
---

## Example

For every infinite ordinal $\alpha$, the singleton $s=\{\alpha\}$ has rank $\alpha+1$ although it has exactly one element. Its root-inclusive closure $\operatorname{TC}(\{s\})$ contains every ordinal below $\alpha$. In particular when $\alpha=\kappa$ is an infinite initial ordinal, $s\notin H_\kappa$.

## Facts & Assumptions

**Given:** Work in ZF unless the statement explicitly weakens or supplements it; fix the objects and hypotheses of the statement.

[F1] Let $\kappa$ be an infinite initial ordinal. In ZF set $$H_\kappa=\{x:\exists\lambda<\kappa\ \exists j\ (j:\operatorname{TC}(\{x\})\hookrightarrow\lambda)\}.$$ This initially defines a class. Its root-inclusive transitive closure contains $x$ as an element. When $\operatorname{TC}(\{x\})$ is well-orderable its hereditary cardinality means the least ordinal equinumerous with it; under Choice this exists for every set. The injection formulation above is used without Choice. For infinite $\kappa$, replacing $\operatorname{TC}(\{x\})$ by $\operatorname{TC}(x)$ gives the same class. Indeed $\operatorname{TC}(\{x\})=\{x\}\cup\operatorname{TC}(x)$ by the finite-stage formula. Adding one point to a set injecting into finite $\lambda$ gives an injection into $\lambda+1<\kappa$; for infinite $\lambda$, keep indices at least $\omega$, shift natural indices by one, and use index zero for the added point, obtaining an injection into $\lambda$. Restriction gives the converse. We retain the root-inclusive convention throughout. Conventions and prerequisites: prop-transitive-closure-minimality, def-cardinal. ([[def-hereditary-size-and-h-kappa]])

[F2] In ZF, for every ordinal $\alpha$, $\operatorname{rank}(\alpha)=\alpha$ and $\operatorname{rank}(V_\alpha)=\alpha$. ([[prop-ranks-of-ordinals-and-hierarchy-stages]])

## Verification

1.1 The ordinal-rank formula and membership-rank equation give $\operatorname{rank}(s)=\sup\{\operatorname{rank}(\alpha)+1\}=\alpha+1$. Its only element is $\alpha$, so its cardinality is one. [F2]

2.1 Starting from $\{s\}$, transitive closure contains $s$, then $\alpha\in s$, and then all $\beta\in\alpha$. If $\alpha=\kappa$ and this closure injected into $\lambda<\kappa$, restriction would inject $\kappa$ into $\lambda$, impossible for an initial ordinal: the image subset of $\lambda$ has order type at most $\lambda$ and is equinumerous with $\kappa$. Thus the defining witness for $H_\kappa$ cannot exist. [F1, step 1.1] ∎

