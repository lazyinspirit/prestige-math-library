---
id: ex-two-adic-hilbert-symbol
kind: example
title: "The two-adic Hilbert symbol table"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-two-adic-hilbert-symbol-formula]
justified_by: []
proof_strategy: direct
sources:
  references:
    - title: "Andrew V. Sutherland, 18.782 Lecture 10, Theorem 10.9"
      url: "https://math.mit.edu/classes/18.782/2013fa/LectureNotes10.pdf"
verification:
  audited: 2026-09-05
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
---

## Example

The two-adic formula gives, for instance,

$$
(-1,-1)_2=-1,\qquad (5,5)_2=1.
$$

## Facts & Assumptions

**Given:** The explicit formula for the Hilbert symbol over $\mathbb Q_2$
([[thm-two-adic-hilbert-symbol-formula]]).

## Verification

**Proof technique:** direct.

1.1 For $a=b=-1$, one has $\alpha=\beta=0$, $u=v=-1$, so $\epsilon(u)=\epsilon(v)=1$ and $\omega(u)=\omega(v)=0$. Hence [[thm-two-adic-hilbert-symbol-formula]] gives $(-1,-1)_2=(-1)^{1\cdot1}=-1$. [given, algebra]

2.1 For $a=b=5$, one has $\alpha=\beta=0$, $u=v=5$, so $\epsilon(5)=0$ and $\omega(5)=1$. The exponent in the theorem is therefore $0$, and $(5,5)_2=1$. [step 1.1, given, algebra] ∎
