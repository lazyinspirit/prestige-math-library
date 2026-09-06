---
id: thm-stalk-structure-sheaf-prime-localization
kind: theorem
title: "The stalk of the affine structure sheaf at a prime is A_p"
status: draft
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-structure-sheaf-affine-scheme, thm-sections-basic-open-affine-scheme, def-stalk-of-presheaf, def-localisation-at-a-prime-ideal, thm-universal-property-of-localisation]
proof_strategy: direct
verification: {precheck: pass, judge: {model: "gpt-5.6-terra", verdict: pass, date: 2026-09-06}}
sources:
  references:
    - title: "The Stacks Project, Lemma 26.5.4"
      url: "https://stacks.math.columbia.edu/tag/01HR"
---
## Statement

For $\mathfrak p\in\operatorname{Spec}A$, there is a canonical isomorphism
$\mathcal O_{\operatorname{Spec}A,\mathfrak p}\cong A_{\mathfrak p}$.

## Facts & Assumptions

**Given:** A prime $\mathfrak p$ and the affine structure sheaf.

## Proof

**Proof technique:** direct.

1.1 The opens $D(f)$ with $f\notin\mathfrak p$ are cofinal neighborhoods of $\mathfrak p$, and their sections are $A_f$. [given]

2.1 Hence the stalk is $\varinjlim_{f\notin\mathfrak p}A_f$. [step 1.1]

3.1 This colimit is $A_{\mathfrak p}$ by the universal property of localization. [step 2.1] ∎
