---
id: cor-every-spanning-set-contains-a-basis
kind: corollary
title: "Every spanning subset of a vector space contains a basis"
status: draft
origin: session
deps: [thm-every-independent-set-extends-to-a-basis, def-linear-basis, def-linear-independence, def-linear-combination-and-span, def-vector-space, def-field]
justified_by: []
aliases: [cor-spanning-contains-basis]
landmark: false
short: "a spanning set contains a basis"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Basis (linear algebra) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Basis_(linear_algebra)"
    - title: "S. Axler, Linear Algebra Done Right, 4th ed., Ch. 2"
      url: "https://linear.axler.net/"
pipeline_run: null
---

## Statement

**Assume the Axiom of Choice**, through [[thm-every-independent-set-extends-to-a-basis]].
Let $V$ be a vector space over a field $F$ ([[def-vector-space]]) and let
$S \subseteq V$ span $V$ ([[def-linear-combination-and-span]]). Then there is a
basis $B$ of $V$ ([[def-linear-basis]]) with $B \subseteq S$.

## Facts & Assumptions

**Given:** A field $F$, a vector space $V$ over $F$, and a subset $S \subseteq V$ with $\operatorname{span}(S) = V$.

[L1] $\varnothing$ is linearly independent ([[def-linear-independence]]).

[L2] If $L \subseteq S \subseteq V$ with $L$ linearly independent and $\operatorname{span}(S) = V$, there is a basis $B$ of $V$ with $L \subseteq B \subseteq S$ ([[thm-every-independent-set-extends-to-a-basis]]).

## Proof

**Proof technique:** direct.

1.1 The empty set is linearly independent and satisfies $\varnothing \subseteq S \subseteq V$, and $S$ spans $V$ by hypothesis, so the hypotheses of the extension theorem hold with $L := \varnothing$. [L1, L2]

1.2 The extension theorem therefore supplies a basis $B$ of $V$ with $\varnothing \subseteq B \subseteq S$. [L2]

2.1 That $B$ is a basis of $V$ contained in $S$, which is the claim. [step 1.1, step 1.2] ∎

## Remarks

- **What this costs.** The proof spends the Axiom of Choice, once, inside [[thm-zorn]]. For a **finite** spanning set the conclusion is also reachable without any choice principle: among the subsets of $S$ that span $V$ there is one of least size, by [[thm-well-ordering-principle]] applied to the set of sizes of spanning subsets of $S$, and a spanning subset of least size is a minimal spanning set, hence a basis by [[lem-basis-iff-maximal-independent-iff-minimal-spanning]]. That route is sketched here rather than carried out, because the page needs the general statement in any case and the general statement subsumes it.

- **The basis obtained is not unique.** A spanning set typically contains many bases: the companion page exhibits a three-element spanning set of $F^{2}$ each of whose three two-element subsets is a basis. Nothing above singles one out; Zorn's lemma produces a maximal element, not a canonical one.

- **Spanning alone is not enough to be a basis**, which is exactly what this corollary repairs: it says a spanning set can always be cut down, not that it need not be.
