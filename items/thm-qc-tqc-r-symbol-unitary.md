---
id: thm-qc-tqc-r-symbol-unitary
kind: theorem
title: R-symbol unitarity
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 4
deps: [def-qc-tqc-r-symbol, def-qc-tqc-unitary-fusion-category, thm-qc-tqc-fusion-multiplicity-space-is-hilbert]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "David Penneys, Unitary Fusion Categories, Math 8800 lecture notes"
      url: "https://people.math.osu.edu/penneys.2/UQSL/ArchivedNotes/TPM/FusionCats.pdf"
      locator: "§§3.2–3.3, PDF pp. 4–8: dagger structure and unitary monoidal maps."
---

## Statement

In a unitary braided fusion category, every R-symbol matrix in orthonormal
multiplicity bases is unitary.

## Facts & Assumptions

**Given:** a unitary braided fusion category and simple charges $a,b,c$.

[F1] [[def-qc-tqc-unitary-fusion-category]]: the braiding is a unitary
isomorphism, so $c_{a,b}^\dagger=c_{a,b}^{-1}$.

[F2] [[def-qc-tqc-r-symbol]]: the channel map is
$\mathcal R_{ab}^c(f)=f\circ c_{a,b}^{-1}$ from $V_{ab}^c$ to $V_{ba}^c$.

[F3] [[thm-qc-tqc-fusion-multiplicity-space-is-hilbert]]: on either
multiplicity space, $\langle f,g\rangle\operatorname{id}_c=f\circ g^\dagger$.

## Proof

1.1 The map $\mathcal R_{ab}^c$ is invertible: its inverse sends $g\in V_{ba}^c$ to $g\circ c_{a,b}$. Indeed, composing either way cancels $c_{a,b}^{-1}$ with $c_{a,b}$ by [F2]. [F1, F2, construct]

1.2 For $f,g\in V_{ab}^c$, the inner product of their images is $(f\circ c_{a,b}^{-1})\circ(g\circ c_{a,b}^{-1})^\dagger =f\circ c_{a,b}^{-1}\circ c_{a,b}\circ g^\dagger =f\circ g^\dagger$. The middle equality uses $(g\circ c^{-1})^\dagger=c\circ g^\dagger$ from [F1] and contravariance of dagger. Thus [F3] shows that $\mathcal R_{ab}^c$ preserves the inner product. [F1, F2, F3, algebra]

2.1 In the orthonormal bases used to define $R_{ab}^c$, step 1.2 gives $(R_{ab}^c)^\dagger R_{ab}^c=I$, and step 1.1 gives invertibility. Therefore $R_{ab}^c$ is unitary; when both spaces have dimension zero this is the empty identity matrix. [F1, F2, step 1.1, step 1.2] ∎
