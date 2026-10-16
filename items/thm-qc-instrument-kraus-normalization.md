---
id: thm-qc-instrument-kraus-normalization
kind: theorem
title: "Instrument branch Kraus families satisfy total normalization"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
deps:
  - def-qc-instrument-and-conditional-state
  - def-qc-kraus-representation
  - def-trace-of-an-endomorphism
  - prop-trace-is-linear
  - thm-trace-of-ab-equals-trace-of-ba
  - lem-qc-trace-pairing-nondegenerate
justified_by: []
dependency_level: 6
proof_strategy: direct
axiom_use: "None; all sums are finite."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "John Preskill, Quantum Computation, Chapter 3: Foundations II: Measurement and Evolution"
      url: "https://www.preskill.caltech.edu/ph219/chap3_15.pdf"
    - title: "John Watrous, The Theory of Quantum Information (2018 author-hosted draft), §§2.2.2 and 2.3.2"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
    - title: "John Preskill, Quantum Computation, Chapter 3: Foundations II: Measurement and Evolution"
      url: "https://www.preskill.caltech.edu/ph219/chap3_15.pdf"
---

## Statement

Let $(\mathcal I_a)_{a\in\Omega}$ be a finite instrument from a nonzero finite-dimensional complex inner-product space $H$ to a finite-dimensional complex inner-product space $K$. Suppose that for every $a$ a finite Kraus family $(M_{a,j})_j$ represents $\mathcal I_a$. Then
$$\sum_{a\in\Omega}\sum_j M_{a,j}^\dagger M_{a,j}=I_H.$$

## Facts & Assumptions

**Given:** The finite instrument and, for each observed outcome $a$, a finite Kraus representation of its branch map.

[F1] [[def-qc-instrument-and-conditional-state]]: $\sum_a\operatorname{tr}_K(\mathcal I_a(X))=\operatorname{tr}_H(X)$ for every $X\in\mathcal L(H)$.

[F2] [[def-qc-kraus-representation]]: $\mathcal I_a(X)=\sum_jM_{a,j}XM_{a,j}^\dagger$ for every input operator $X$.

[F3] [[prop-trace-is-linear]] and [[thm-trace-of-ab-equals-trace-of-ba]]: trace is linear and $\operatorname{tr}_K(AB)=\operatorname{tr}_H(BA)$ for compatible rectangular maps $A:H\to K$, $B:K\to H$.

[F4] [[lem-qc-trace-pairing-nondegenerate]]: if $D\in\mathcal L(H)$ and $\operatorname{tr}_H(DX)=0$ for every $X\in\mathcal L(H)$, then $D=0$.

## Proof


1.1 Put $S=\sum_{a,j}M_{a,j}^\dagger M_{a,j}\in\mathcal L(H)$. For every $X\in\mathcal L(H)$, [F1]–[F3] give $\operatorname{tr}_H(X)=\sum_a\operatorname{tr}_K(\mathcal I_a(X)) =\sum_{a,j}\operatorname{tr}_K(M_{a,j}XM_{a,j}^\dagger) =\sum_{a,j}\operatorname{tr}_H(XM_{a,j}^\dagger M_{a,j}) =\operatorname{tr}_H(XS)$. [given, F1, F2, F3, algebra]

2.1 Cyclicity in [F3] gives $\operatorname{tr}_H((S-I_H)X)=\operatorname{tr}_H(X(S-I_H))=0$ for every $X$. Apply [F4] to $D=S-I_H$ to obtain $S-I_H=0$, which is the stated normalization. This proof uses the exact trace-pairing lemma [[lem-qc-trace-pairing-nondegenerate]] and does not use a channel characterization. [given, step 1.1, F3, F4, algebra] ∎

## Remarks

The result is specific to the sum of the branches of an instrument. Its proof uses the instrument trace identity directly and does not depend on the separate QC05 trace-preserving Kraus theorem.

