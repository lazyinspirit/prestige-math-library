---
id: thm-dependent-choice-is-equivalent-to-complete-metric-baire-over-zf
kind: theorem
title: "Dependent Choice is equivalent to the complete-metric Baire principle over ZF"
status: draft
origin: pipeline
deps: [thm-serial-dependent-choice-implies-complete-metric-baire-over-zf, thm-complete-metric-baire-principle-implies-dependent-choice-over-zf]
landmark: true
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Miller, Lecture notes on set theory without choice; Proposition 5.4(1) equivalent to (2), pp.10\u201311"
      url: https://people.math.wisc.edu/~awmille1/old/m873-08/ac.pdf
    - title: "Karagila, Zornian Functional Analysis, Definition 4 and Chapter 2, pp. 4–5, 8–11"
      url: https://karagila.org/wp-content/uploads/2016/10/axiom-of-choice-in-analysis.pdf
---

## Statement

Over ZF, the serial-relation Dependent Choice principle (equivalently, its
prescribed-start form) holds if and only if every complete metric space is
Baire. The principles use nonempty serial carriers and $\omega$-indexed open
dense families, respectively; the Baire assertion includes the empty space.
This is an internal equivalence over ZF, not a consistency or independence
assertion.

## Facts & Assumptions

**Given:** ZF and the two principles in the statement.

[F1] DC implies CM-Baire with these conventions ([[thm-serial-dependent-choice-implies-complete-metric-baire-over-zf]]).

[F2] CM-Baire implies both starting-point-free and prescribed-start DC ([[thm-complete-metric-baire-principle-implies-dependent-choice-over-zf]]).

## Proof

1.1 Assume DC. The forward implication applies over ZF to every complete metric space and every $\omega$-indexed sequence of open dense subsets, and says that their intersection is dense. This is exactly CM-Baire, including its empty-space instance. [F1, given]

2.1 Assume CM-Baire. The reverse implication applies to every nonempty set and every serial relation on it, and supplies both the unrestricted and prescribed-start chain principles. Thus CM-Baire implies DC. These two implications prove the stated equivalence over ZF. [F2, step 1.1, given] ∎
