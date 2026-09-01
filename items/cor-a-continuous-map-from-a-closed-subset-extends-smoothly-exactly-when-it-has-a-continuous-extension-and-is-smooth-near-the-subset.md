---
id: cor-a-continuous-map-from-a-closed-subset-extends-smoothly-exactly-when-it-has-a-continuous-extension-and-is-smooth-near-the-subset
kind: corollary
title: "A continuous map from a closed subset extends smoothly exactly when it has a continuous extension and is smooth near the subset"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-relative-whitney-approximation-for-manifold-valued-maps]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed., Smooth Approximation of Maps Between Manifolds"
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
---

## Statement

Let $A\subseteq M$ be closed and let $f:A\to N$ be continuous. Then $f$ extends
to a smooth map $M\to N$ if and only if it has a continuous extension to $M$
that is smooth on a neighbourhood of $A$.

## Facts & Assumptions

**Given:** A closed subset $A\subseteq M$ and a continuous map $f:A\to N$.

[L1] Relative Whitney approximation for manifold-valued maps smooths a
continuous extension without changing it near the closed set
([[thm-relative-whitney-approximation-for-manifold-valued-maps]]).

## Proof
**Proof technique:** direct.

1.1 If $f$ has a smooth extension $F:M\to N$, then that extension is in particular continuous and smooth near $A$. [given]

1.2 Conversely, suppose $F:M\to N$ is continuous, extends $f$, and is smooth on a neighbourhood of $A$. Apply [L1] to $F$ and the closed set $A$. The resulting smooth map $\widetilde F$ agrees with $F$ on a neighbourhood of $A$, hence extends $f$. [L1, given]

2.1 The two implications from steps 1.1 and 1.2 prove the equivalence. [step 1.1, step 1.2] ∎
