---
id: "ex-minimal-resolution-unit-cancellation"
kind: "example"
title: "minimal resolution unit cancellation"
deps: ["lem-minimal-free-resolution-differentials-land-in-maximal-ideal"]
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "§12.2 minimal-resolution construction and Remark 12.28, pp.120–121"
      url: "https://websites.umich.edu/~mmustata/CAnotes.pdf"
provenance:
  statement: ai-generated
  proof: ai-altered
status: published
origin: "pipeline"
generation:
  role: example
proof_strategy: "Explicit algebraic derivation"
---

## Example

Over $R=k[x]_{(x)}$, the free resolution $0\to R^2\xrightarrow{\operatorname{diag}(x,1)}R^2\to R/(x)\to0$, with augmentation $(a,b)\mapsto a\bmod x$, contracts to the minimal resolution $0\to R\xrightarrow{x}R\to R/(x)\to0$.

## Facts & Assumptions

**Given:** The objects and hypotheses in the example. We work with the Axiom of Choice; cited dependent-choice and resolution-existence hypotheses are retained.

[F1] [[lem-minimal-free-resolution-differentials-land-in-maximal-ideal]]: For an augmented degreewise finite free resolution over a nonzero Noetherian local ring $(R,\mathfrak m)$, minimality means that every positive differential matrix has entries in $\mathfrak m$. Equivalently no positive differential admits a unit pivot, or a nonzero two-term identity direct summand. A unit pivot can be cancelled without changing the resolved module.

## Verification

1.1 The displayed diagonal map is injective since $R$ is a domain. Its image consists exactly of pairs whose first coordinate lies in $(x)$, which is the augmentation kernel. Hence the complex is exact. [given, algebra]

2.1 The second coordinates form the two-term identity summand, whose identity homotopy contracts it. Removing it leaves multiplication by $x$ on the first coordinates. Since $x$ belongs to the maximal ideal, this remaining resolution is minimal by the unit-cancellation criterion. [F1, step 1.1] ∎
