---
id: ex-functions-of-disjoint-independent-coordinate-blocks
kind: example
title: "Functions of disjoint independent coordinate blocks remain independent"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-independent-random-elements, thm-grouping-independent-sigma-algebras, lem-measurable-functions-preserve-independence]
proof_strategy: direct
sources:
  references: []
verification:
  audited: 2026-09-05
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
---

## Example

Let $X_0,X_1,X_2,X_3$ be independent random elements. Put
$$Y:=(X_0,X_1),\qquad Z:=(X_2,X_3).$$
If $f$ and $g$ are measurable maps on the targets of $Y$ and $Z$, then
$f(Y)$ and $g(Z)$ are independent.

This is the standard way to pass from coordinate independence to independence
of functions built from disjoint coordinate blocks.

## Facts & Assumptions

**Given:** Independent random elements $X_0,X_1,X_2,X_3$ and measurable maps
$f$ and $g$ as in the Example.

[L1] Disjoint groups of an independent sigma-algebra family remain independent.
([[thm-grouping-independent-sigma-algebras]])

[L2] Measurable coordinatewise functions preserve independence.
([[lem-measurable-functions-preserve-independence]])

[L3] Independence of random elements is defined through independence of their
generated sigma-algebras. ([[def-independent-random-elements]])

## Verification

**Proof technique:** direct.

1.1 The sigma-algebras $\sigma(X_0),\sigma(X_1),\sigma(X_2),\sigma(X_3)$ are independent by [L3]. Grouping the first two and last two coordinates, [L1] shows that the block sigma-algebras $\sigma(X_0,X_1)$ and $\sigma(X_2,X_3)$ are independent. Therefore the block random elements $Y$ and $Z$ are independent. [L1, L3]

2.1 Applying [L2] to the independent pair $Y,Z$ and the measurable maps $f,g$ gives independence of $f(Y)$ and $g(Z)$. [step 1.1, L2] ∎
