---
id: fs-two-nonisomorphic-complete-ordered-fields
kind: false-statement
title: "FALSE: there exist two non-isomorphic complete ordered fields"
status: published
origin: session
deps: [thm-uniqueness-complete-ordered-field, def-complete-ordered-field, def-ordered-field-isomorphism]
aliases: []
landmark: false
short: "no second ℝ (false)"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: openai/gpt-5.4
    verdict: pass
    date: 2026-07-25
  audited: 2026-07-25
sources:
  scraped: []
  references:
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "M. Spivak, Calculus, 4th ed., Ch. 30"
      url: "https://en.wikipedia.org/wiki/Calculus_(Spivak)"
pipeline_run: null
---

## Statement

**False statement.** There exist two complete ordered fields
([[def-complete-ordered-field]]) that are **not** isomorphic; that is,
completeness together with the ordered-field axioms fails to determine the real
numbers up to isomorphism.

## Facts & Assumptions

**Given:** The claim that there are complete ordered fields $F$ and $G$ admitting no ordered-field isomorphism between them.

[L1] Any two complete ordered fields are isomorphic via a unique ordered-field isomorphism ([[thm-uniqueness-complete-ordered-field]]).

[L2] A complete ordered field is one with the least-upper-bound property ([[def-complete-ordered-field]]).

[L3] An ordered-field isomorphism is a bijective, order-preserving field homomorphism ([[def-ordered-field-isomorphism]]).

## Refutation

**Proof technique:** direct.

1.1 Let $F$ and $G$ be any complete ordered fields, as the claim posits, each with the least-upper-bound property. [given, L2]

1.2 By [L1] there exists an ordered-field isomorphism $\varphi : F \to G$ (indeed a unique one). [L1]

2.1 Hence $F$ and $G$ are isomorphic, contradicting the asserted non-isomorphism; since $F, G$ were arbitrary complete ordered fields, no non-isomorphic pair can exist and the statement is false. [step 1.1, step 1.2, L3] ∎
