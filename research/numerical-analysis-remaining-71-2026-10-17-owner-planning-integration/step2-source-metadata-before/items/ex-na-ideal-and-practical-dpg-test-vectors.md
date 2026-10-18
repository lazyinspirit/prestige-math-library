---
id: "ex-na-ideal-and-practical-dpg-test-vectors"
kind: "example"
title: "An explicit finite model separates ideal and practical test vectors"
status: "draft"
origin: "session"
pipeline_run: "numerical-analysis-remaining-71-2026-10-17"
dependency_level: 8
deps: ["alg-na-ultraweak-poisson-ideal-trial-to-test", "alg-na-practical-dpg-finite-riesz-solves", "thm-riesz-representation-in-finite-dimensions"]
justified_by: []
aliases: []
proof_strategy: direct
provenance: {"statement": "literature-derived", "proof": "ai-altered"}
sources: {"references": [{"title": "Jay Gopalakrishnan and Weifeng Qiu, An analysis of the practical DPG method", "url": "https://wiki.math.ntnu.no/_media/tma4183/2017v/1107.4293.pdf", "locator": "Complete 15-page article; §2 Theorem 2.1/proof, §§3.1–3.4 and Lemmas 3.1–3.3."}, {"title": "Leszek Demkowicz and Jay Gopalakrishnan, Analysis of the DPG method for the Poisson equation", "url": "https://web.pdx.edu/~gjay/pub/DPGlaplace.pdf", "locator": "Complete 22-page article; §§3–4 and Theorem 4.2; simple connectivity hypothesis noted."}, {"title": "Carstensen, Demkowicz, and Gopalakrishnan, A Posteriori Error Control for DPG Methods", "url": "https://web.pdx.edu/~gjay/pub/cdg.pdf", "locator": "Complete 21-page article; complete §2/Theorem 2.1 proof and §3.1."}]}
---

## Statement

Let $U=V=\mathbb R^2$ with Euclidean inner product, $A=\begin{pmatrix}1&1\\0&1\end{pmatrix}$, $b(x,y)=(Ax)\cdot y$, $U_h=\operatorname{span}(e_2)$, practical test space $V_r=\operatorname{span}(e_1)$, and load $F(y)=e_1\cdot y$. Then $Te_2=(1,1)$, $T^re_2=e_1$, and ideal and practical trial coefficients are $1/2$ and $1$.

## Facts & Assumptions

**Given:** The stated finite-dimensional trial/test data.

[F1] The ideal test is the full Riesz representative of $b(w,\cdot)$. ([[alg-na-ultraweak-poisson-ideal-trial-to-test]])

[F2] The practical test is its Riesz representative restricted to $V_r$. ([[alg-na-practical-dpg-finite-riesz-solves]])

[F3] Finite-dimensional Riesz systems have unique representatives. ([[thm-riesz-representation-in-finite-dimensions]])

## Proof

1.1 $Ae_2=(1,1)$, so [F1] gives $Te_2=(1,1)$. Its orthogonal projection to $V_r$ is $e_1$, so [F2] gives $T^re_2=e_1$. [F1, F2, given, algebra]

2.1 For ideal coefficient $c$, the equation is $b(ce_2,Te_2)=F(Te_2)$, hence $2c=1$ and $c=1/2$. For practical tests it is $b(ce_2,e_1)=F(e_1)$, hence $c=1$. Uniqueness follows from the positive Gram scalars $2$ and $1$ in [F3]. [F1, F2, F3, step 1.1, algebra] ∎
