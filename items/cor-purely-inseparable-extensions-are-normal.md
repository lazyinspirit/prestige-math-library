---
id: cor-purely-inseparable-extensions-are-normal
kind: corollary
title: "Every purely inseparable algebraic extension is normal"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-purely-inseparable-extension-characterizations, def-normal-algebraic-extension]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Fields and Galois Theory, Chapter 6"
      url: "https://www.jmilne.org/math/Books/FT0.pdf"
    - title: "The Stacks Project, Section 9.15: Normal extensions"
      url: "https://stacks.math.columbia.edu/tag/09HL"
pipeline_run: null
---

## Statement

Every purely inseparable algebraic extension is normal.

## Facts & Assumptions

**Given:** A purely inseparable algebraic extension $K/F$ and an element $\alpha\in K$.

[L1] In positive characteristic, the minimal polynomial of $\alpha$ has the form $x^{p^e}-a$; in characteristic zero the extension is trivial ([[thm-purely-inseparable-extension-characterizations]]).

[L2] An algebraic extension is normal exactly when the minimal polynomial over the base of every one of its elements splits in the extension ([[def-normal-algebraic-extension]]).

## Proof

**Proof technique:** direct.

1.1 In characteristic $p$, [L1] gives $m_\alpha(x)=x^{p^e}-a=(x-\alpha)^{p^e}$ in $K[x]$, so the minimal polynomial splits in $K$. [L1, algebra]

1.2 In characteristic zero, [L1] gives $K=F$, which is normal. [L1, L2]

2.1 Thus every minimal polynomial required by [L2] splits in $K$, and $K/F$ is normal. [step 1.1, step 1.2, L2] ∎
