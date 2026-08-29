---
id: thm-the-sphere-the-plane-and-the-disc-are-pairwise-nonbiholomorphic
kind: theorem
title: "The sphere, the plane, and the disc are pairwise non-biholomorphic"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-conformal-equivalence-and-automorphism-group, thm-continuous-image-of-a-compact-space-is-compact, thm-open-mapping-theorem-holomorphic-functions, thm-liouville-bounded-entire-function]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-29
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Elias M. Stein and Rami Shakarchi, Complex Analysis, Ch. 8 §1"
      url: "https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf"
---

## Statement

The Riemann sphere $\widehat{\mathbb C}$, the complex plane $\mathbb C$, and
the unit disc $\mathbb D$ are pairwise non-biholomorphic.

## Facts & Assumptions

**Given:** The three domains $\widehat{\mathbb C}$, $\mathbb C$, and $\mathbb D$.

[F1] A conformal equivalence is a biholomorphism between domains
([[def-conformal-equivalence-and-automorphism-group]]).

[F2] The continuous image of a compact space is compact
([[thm-continuous-image-of-a-compact-space-is-compact]]).

[F3] Every bounded entire function is constant
([[thm-liouville-bounded-entire-function]]).

## Proof

**Proof technique:** direct.

1.1 If there were a biholomorphism from $\widehat{\mathbb C}$ onto $\mathbb C$ or onto $\mathbb D$, then [F2] would make the target compact because $\widehat{\mathbb C}$ is compact, but neither $\mathbb C$ nor $\mathbb D$ is compact. Hence the sphere is biholomorphic to neither the plane nor the disc. [F1, F2, given]

1.2 If there were a biholomorphism $f:\mathbb C\to\mathbb D$, then $f$ would be a bounded entire function and [F3] would make it constant, contradicting bijectivity. Hence $\mathbb C$ and $\mathbb D$ are not biholomorphic. [F1, F3, algebra]

2.1 Steps 1.1 and 1.2 cover all three pairs, so $\widehat{\mathbb C}$, $\mathbb C$, and $\mathbb D$ are pairwise non-biholomorphic. [step 1.1, step 1.2] ∎
