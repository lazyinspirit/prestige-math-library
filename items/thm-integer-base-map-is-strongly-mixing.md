---
id: thm-integer-base-map-is-strongly-mixing
kind: theorem
title: Every integer-base circle map is strongly mixing
deps: ["prop-integer-base-map-preserves-lebesgue-measure", "thm-mixing-is-checkable-on-a-generating-pi-system", "def-completion-of-a-measure-space", "def-countable-choice"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Sarig Proposition 1.5 p.9, b-adic branch-count generalization
      url: https://www.weizmann.ac.il/math/sarigo/sites/math.sarigo/files/uploads/ergodicnotes.pdf
status: published
origin: pipeline
proof_strategy: direct
---

## Statement

Assume countable choice. For every integer $b\ge2$ and every pair of Borel or completed Lebesgue measurable circle sets A,B, $\lambda(A\cap D_b^{-n}B)\to\lambda(A)\lambda(B)$. Thus $D_b$ is strongly mixing for either measure.

## Facts & Assumptions

[F1] D_b preserves either probability measure. [[prop-integer-base-map-preserves-lebesgue-measure]].

[F2] Strong mixing follows from correlations on a generating pi-system containing X. [[thm-mixing-is-checkable-on-a-generating-pi-system]].

[F3] Every completed set differs from a Borel set within a Borel null set. [[def-completion-of-a-measure-space]].

## Proof

**Given:** Assume countable choice. For every integer $b\ge2$ and every pair of Borel or completed Lebesgue measurable circle sets A,B, $\lambda(A\cap D_b^{-n}B)\to\lambda(A)\lambda(B)$. Thus $D_b$ is strongly mixing for either measure.

1.1 The b-adic intervals at all depths, together with the empty set, form a pi-system: two such intervals are nested or disjoint, and depth zero is X. They generate the circle Borel sets. Indeed every ordinary open interval in (0,1) is the union of the b-adic cells whose closures lie within it; the cell containing any specified interior point has arbitrarily small diameter. The endpoint zero is the intersection of $[0,b^{-r})$ over r, so relative interval-open sets are generated as well. Conversely each cell is Borel. The countable family of cells permits these unions in the generated sigma-algebra. [F1]

2.1 Let $I=I_{r,k}$ and $J=I_{s,l}$. For $n\ge r$, the interval I contains exactly $b^{n-r}$ depth-n cells. On each such cell, the inverse image under $D_b^n$ of J is a half-open interval of length $b^{-(n+s)}$. Hence $\lambda(I\cap D_b^{-n}J)=b^{n-r}b^{-(n+s)}=b^{-r}b^{-s}=\lambda(I)\lambda(J)$. The same equality holds when either set is empty. The generator theorem proves Borel strong mixing. [step 1.1, F1, F2, algebra]

3.1 For completed A,B take Borel A_0,B_0 and Borel null sets Z_A,Z_B containing their respective symmetric differences. For every n, $(A\cap D_b^{-n}B)\mathbin\triangle(A_0\cap D_b^{-n}B_0)\subseteq Z_A\cup D_b^{-n}Z_B$, a completed null set by preservation. Thus the correlation and both marginal measures agree with those for A_0,B_0. The Borel limit proves the completed limit. Countable choice is inherited from the measure and completion suppliers; only finitely many representatives are selected here. [step 2.1, F1, F3] ∎

