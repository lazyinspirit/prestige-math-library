---
id: "lem-na-least-squares-poisson-residual-norm-equivalence"
kind: "lemma"
title: "Least-squares residual norm is equivalent to H(div) x H1_0 error"
status: "draft"
origin: "session"
pipeline_run: "numerical-analysis-remaining-71-2026-10-17"
dependency_level: 5
deps: ["def-na-least-squares-poisson-first-order", "def-na-hdiv-space", "def-countable-choice", "lem-na-homogeneous-dirichlet-poincare", "def-wkp-zero-as-a-sobolev-closure"]
justified_by: []
aliases: []
proof_strategy: direct
provenance: {"statement": "literature-derived", "proof": "ai-altered"}
sources: {"references": [{"title": "Peter Bochev and Max Gunzburger, Least-squares finite element methods", "url": "https://people.sc.fsu.edu/~mgunzburger/files_papers/gunzburger-ls-icm.pdf", "locator": "Complete 26-page paper; §§2.2.1 and 4.1–4.2 on first-order least-squares Poisson and residual norm equivalence."}, {"title": "J. Bond, R. Chaudhry, L. Cyr, and L. Olson, A First-Order System Least-Squares Finite Element Method for the Poisson-Boltzmann Equation", "url": "https://lukeo.cs.illinois.edu/files/2010_BoChCyOl_lspbe.pdf", "locator": "Complete 11-page paper; Theorem 1 and proof, used comparatively because its coefficients and boundary hypotheses differ."}]}
---

## Statement

Assume Countable Choice. Let $\Omega\subset\mathbb R^2$ be bounded connected Lipschitz and $C_P$ satisfy $\|w\|_2\le C_P\|\nabla w\|_2$ on $H^1_0$. For $z=(\delta\sigma,\delta u)\in H(div)\times H^1_0$, put $Rz=(\delta\sigma+\nabla\delta u,div\delta\sigma)$. This is injective and its norm is equivalent to the product graph norm. If $a=\|R_1z\|_2$, $b=\|R_2z\|_2$, $g=\|\nabla\delta u\|_2$, then $g\le a+C_Pb$, $\|\delta u\|_2\le C_P(a+C_Pb)$, $\|\delta\sigma\|_2\le2a+C_Pb$, and $\|Rz\|^2\le2\|z\|^2_{H(div)\times H^1}$.

## Facts & Assumptions

**Given:** Countable Choice, the real spaces and the stated Poincare inequality.

[A1] Countable Choice is used to choose the H1_0 density sequence in the weak Green passage. ([[def-countable-choice]])

[F1] Residual components follow the least-squares definition. ([[def-na-least-squares-poisson-first-order]])

[F2] H(div) has L2 distributional divergence and graph norm. ([[def-na-hdiv-space]])

[F3] Homogeneous Dirichlet Poincare holds. ([[lem-na-homogeneous-dirichlet-poincare]])

[F4] H1_0 is the H1 closure of compactly supported smooth functions. ([[def-wkp-zero-as-a-sobolev-closure]])

## Proof

1.1 Approximate $\delta u$ by compactly supported smooth functions. The distributional divergence identity and $L^{2}$ continuity give $(\delta\sigma,\nabla\delta u)=-(div\delta\sigma,\delta u)$. Substitute $\delta\sigma=R_1z-\nabla\delta u$ to get $g^2=(R_1z,\nabla\delta u)+(R_2z,\delta u)$. [A1, F2, F4, algebra]

2.1 Cauchy–Schwarz and [F3] imply $g^2\le ag+C_Pbg$. If $g>0$, divide by $g$; if $g=0$, the bound is immediate. Poincare and $\delta\sigma=R_1z-\nabla\delta u$ give the stated component estimates, controlling the product graph norm. [F3, step 1.1, algebra]

3.1 The first residual square is at most $2\|\delta\sigma\|_2^2+2\|\nabla\delta u\|_2^2$ and the second is the divergence component. If $Rz=0$, step 2.1 and Poincare give $\delta u=0$, then $\delta\sigma=0$. This proves reverse boundedness and injectivity. [F1, F2, step 2.1, algebra] ∎
