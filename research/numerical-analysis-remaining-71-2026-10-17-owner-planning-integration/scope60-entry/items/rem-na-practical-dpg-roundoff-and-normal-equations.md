---
id: "rem-na-practical-dpg-roundoff-and-normal-equations"
kind: "remark"
title: "Exact DPG stability does not certify quadrature or algebraic solve errors"
status: "draft"
origin: "session"
pipeline_run: "numerical-analysis-remaining-71-2026-10-17"
dependency_level: 6
deps: ["alg-na-practical-dpg-finite-riesz-solves", "thm-normal-equations-square-the-spectral-condition-number"]
justified_by: []
aliases: []
proof_strategy: direct
provenance: {"statement": "literature-derived", "proof": "ai-altered"}
sources: {"references": [{"title": "Jay Gopalakrishnan and Weifeng Qiu, An analysis of the practical DPG method", "url": "https://wiki.math.ntnu.no/_media/tma4183/2017v/1107.4293.pdf", "locator": "Complete 15-page paper; §2 Theorem 2.1 and proof; §§3.1–3.4, including Lemmas 3.1–3.3 on ultraweak Poisson and Fortin maps."}, {"title": "Leszek Demkowicz and Jay Gopalakrishnan, Analysis of the DPG method for the Poisson equation", "url": "https://web.pdx.edu/~gjay/pub/DPGlaplace.pdf", "locator": "Complete 22-page paper; §§3.1–3.2, Lemmas 4.1–4.4, Theorem 4.2. The graph inf-sup proof assumes simply connected Lipschitz domain."}, {"title": "Leszek Demkowicz, Mathematical Theory of Finite Elements", "url": "https://users.ices.utexas.edu/~leszek/classes/EM394H/book.pdf", "locator": "Complete 229-page course monograph; §§5.1–5.2 ideal/practical DPG; §§5.6.2 and 5.6.4 Fortin and mixed stability."}, {"title": "C. Carstensen, L. Demkowicz, and J. Gopalakrishnan, A Posteriori Error Control for DPG Methods", "url": "https://web.pdx.edu/~gjay/pub/cdg.pdf", "locator": "Complete 21-page paper; full §2 and Theorem 2.1 proof, §3.1. The Poisson stability application cites the same simply-connected source."}]}
verification: {}
---

## Statement

The Fortin, boundedness, and Riesz arguments use exact integrals and exact finite solves; they imply no quadrature or floating-point perturbation estimate. For full-column-rank real $A$, $\kappa_2(A^TA)=\kappa_2(A)^2$.

## Facts & Assumptions

**Given:** The exact finite Riesz algorithm and a full-column-rank matrix.

[F1] The practical-test algorithm specifies exact integrals and solves. ([[alg-na-practical-dpg-finite-riesz-solves]])

[F2] The normal-equation condition number is squared under full column rank. ([[thm-normal-equations-square-the-spectral-condition-number]])

## Proof

1.1 Perturbations and rounded arithmetic are absent from [F1], so it supplies no error estimate for them. [F1, algebra]

2.1 Under the rank hypothesis, [F2] gives the displayed identity; this is a conditioning statement, not a solver-specific error bound. [F2, algebra] ∎
