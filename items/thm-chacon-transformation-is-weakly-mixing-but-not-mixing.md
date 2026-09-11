---
id: "thm-chacon-transformation-is-weakly-mixing-but-not-mixing"
kind: "theorem"
title: "Chacon transformation is weakly mixing but not mixing"
deps: ["lem-chacon-partial-maps-extend-to-an-invertible-map-mod-null-sets", "lem-chacon-eigenfunctions-are-constant", "thm-weak-mixing-is-equivalent-to-absence-of-nonconstant-eigenfunctions", "lem-chacon-tower-height-correlations-obstruct-mixing", "def-axiom-of-choice"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Peter Varju, Topics in Ergodic Theory, Michaelmas 2016, section 11 pp.36–40 (complete Chacon argument; public mirror)
      url: https://www.scribd.com/document/345852025/ergodic
    - title: Katok–Thouvenot Theorem 5.12 pp.696–697
      url: https://akatok.s3.amazonaws.com/pub/KT-spectral.pdf
    - title: Sarig Problems 3.8–3.10 pp.99–101
      url: https://www.weizmann.ac.il/math/sarigo/sites/math.sarigo/files/uploads/ergodicnotes.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

Assume AC. There exists an invertible completed Lebesgue probability system, the normalized three-cut one-spacer Chacon transformation, that is weakly mixing in the absolute-Cesaro sense but is not strongly mixing.

## Facts & Assumptions

[F1] The Chacon partial maps extend to an invertible completed Lebesgue probability system [[lem-chacon-partial-maps-extend-to-an-invertible-map-mod-null-sets]].

[F2] Its complex $L^2$ eigenfunctions are constant [[lem-chacon-eigenfunctions-are-constant]].

[F3] On such a probability space absence of nonconstant complex $L^2$ eigenfunctions is equivalent to absolute-Cesaro weak mixing [[thm-weak-mixing-is-equivalent-to-absence-of-nonconstant-eigenfunctions]].

[F4] The fixed set $A=[0,2/9)$ has correlations along $h_r$ at least $2/27$, exceeding $\mu(A)^2=4/81$ [[lem-chacon-tower-height-correlations-obstruct-mixing]].

[F5] Assume AC [[def-axiom-of-choice]].

## Proof

**Given:** AC and the normalized Chacon construction.

1.1 Take the ambient transformation furnished by F1, or its invariant conull restriction. It preserves completed Lebesgue probability and has a measurable inverse modulo null sets, meeting all F3 hypotheses. F2 excludes every nonconstant complex $L^2$ eigenfunction, so F3 gives weak mixing with the absolute value inside the Cesaro average. [F1, F2, F3, F5]

2.1 In the same system, F4 gives a fixed measurable $A$ of measure $2/9$ and unbounded heights $h_r$ with $\mu(A\cap T^{-h_r}A)-\mu(A)^2\ge2/81>0$. These correlations cannot tend to zero, so this system is not strongly mixing. The null-set modification of F1 leaves these measures unchanged. Together with step 1.1 this supplies the claimed witness, with AC inherited from every local construction and spectral input. [F4, F5, step 1.1] ∎
