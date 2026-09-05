---
id: ex-hilbert-symbol-at-an-odd-prime
kind: example
title: "A Hilbert-symbol computation at an odd prime"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-odd-p-hilbert-symbol-formula]
justified_by: []
proof_strategy: direct
sources:
  references:
    - title: "Andrew V. Sutherland, 18.782 Lecture 10, Theorem 10.7"
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

In $\mathbb Q_3$, one has

$$
(3,2)_3=-1.
$$

## Facts & Assumptions

**Given:** The odd-prime Hilbert-symbol formula
([[thm-odd-p-hilbert-symbol-formula]]).

## Verification

**Proof technique:** direct.

1.1 Write $3=3^1\cdot1$ and $2=3^0\cdot2$. The formula from [[thm-odd-p-hilbert-symbol-formula]] gives $(3,2)_3=(-1)^{0}\left(\frac{1}{3}\right)^0\left(\frac{2}{3}\right)^1=(2/3)$. [given, algebra]

2.1 The nonzero square class modulo $3$ is only $1$, so $2$ is a nonsquare and $(2/3)=-1$. Hence $(3,2)_3=-1$. [step 1.1, given, algebra] ∎
