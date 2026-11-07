---
id: thm-bourgain-lindenstrauss-corrected-plaque-mass-or-flow-escape
kind: theorem
title: "Bourgain–Lindenstrauss corrected plaque-mass or flow-escape alternative"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 4
deps: [def-quantum-limit-of-hecke-maass-eigenfunctions, thm-mahler-compactness-and-split-orbit-escape]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  scraped: []
  references:
    - title: "Jean Bourgain and Elon Lindenstrauss, Correction to Entropy of Quantum Limits"
      url: "https://math.huji.ac.il/~elon/Publications/erratum-pos-entropy.pdf"
      locator: "Theorem 2 and §2, printed pp. 2–3."
    - title: "Jean Bourgain and Elon Lindenstrauss, Entropy of Quantum Limits"
      url: "https://math.huji.ac.il/~elon/Publications/pos_entropy.pdf"
      locator: "§5, Theorems 5.1–5.4, printed pp. 15–18."
---

## Statement

Let Γ be a congruence subgroup of SL₂(ℤ), X=Γ\SL₂(ℝ), μ an arithmetic quantum limit on X, Ω⊂X compact, and τ₀=1/50. Put a(t)=diag(eᵗ,e⁻ᵗ), u₋(s)=[[1,0],[s,1]], u₊(s)=[[1,s],[0,1]], and B(ε,τ₀)=a((−τ₀,τ₀))u₋((−ε,ε))u₊((−ε,ε)). Define M(f,x)=sup_{T>0}T⁻¹∫₀ᵀf(xa(t))dt. For every sufficiently small ε>0 and every x∈Ω, either μ(xB(ε,τ₀))≪Ω ε^(2/9), or M(1_{X\Ω},x)>0.199.

## Statement references

[Jean Bourgain and Elon Lindenstrauss, Correction to Entropy of Quantum Limits, Theorem 2 and §2, printed pp. 2–3.](https://math.huji.ac.il/~elon/Publications/erratum-pos-entropy.pdf)

[Jean Bourgain and Elon Lindenstrauss, Entropy of Quantum Limits, §5, Theorems 5.1–5.4, printed pp. 15–18.](https://math.huji.ac.il/~elon/Publications/pos_entropy.pdf)

## Facts & Assumptions

**Given:** The complete objects, parameters, conventions and hypotheses in the Statement.

[L1] The correction’s Theorem 2 gives this pointwise alternative on every x in a fixed compact Ω. The earlier split-algebra case is replaced by its §2 argument. [Jean Bourgain and Elon Lindenstrauss, Correction to Entropy of Quantum Limits, Theorem 2 and §2, printed pp. 2–3.](https://math.huji.ac.il/~elon/Publications/erratum-pos-entropy.pdf)
