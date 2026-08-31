---
id: thm-a-locally-cartesian-closed-category-has-pullbacks-and-with-a-terminal-object-all-finite-limits
kind: theorem
title: "A locally cartesian closed category has pullbacks, and with a terminal object it has all finite limits"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-locally-cartesian-closed-category, def-pullbacks-and-pushouts, def-initial-terminal-and-zero-object]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Emily Riehl, Category Theory in Context, 2nd ed., Lemma 4.6.4"
      url: "https://emilyriehl.github.io/files/context.pdf"
---

## Statement

Every locally cartesian closed category has pullbacks. If it also has a terminal object, then it has all finite limits.

## Facts & Assumptions

**Given:** A locally cartesian closed category $\mathcal C$, and optionally a terminal object $\mathbf 1$.

[L1] Every slice $\mathcal C/X$ is cartesian closed, hence has binary products ([[def-locally-cartesian-closed-category]]).

[L2] A pullback of $u:A\to X$ and $v:B\to X$ is a universal square over $X$ ([[def-pullbacks-and-pushouts]]).

[L3] A terminal object is an object receiving a unique map from every object ([[def-initial-terminal-and-zero-object]]).

## Proof

**Proof technique:** direct.

1.1 Fix arrows $u:A\to X$ and $v:B\to X$. Since $\mathcal C/X$ is cartesian closed by [L1], it has a binary product $(p:P\to X)$ of those two slice objects. Its projections are morphisms $P\to A$ and $P\to B$ over $X$, and the product universal property in the slice is exactly the pullback universal property of [L2]. So $\mathcal C$ has pullbacks. [given, L1, L2]

2.1 Now assume $\mathbf 1$ is terminal. A pullback with codomain $\mathbf 1$ is an ordinary binary product, because by [L3] every object has a unique map to $\mathbf 1$. Thus step 1.1 gives binary products in $\mathcal C$, and the given object $\mathbf 1$ is terminal. [step 1.1, L3]

3.1 A category with pullbacks and a terminal object has all finite limits: binary products come from step 2.1, and equalizers are pullbacks of the diagonal against a pair of parallel arrows. Hence $\mathcal C$ has all finite limits. [step 2.1, L2, algebra]

4.1 Therefore every locally cartesian closed category has pullbacks, and with a terminal object it has all finite limits. [step 1.1, step 3.1] ∎
