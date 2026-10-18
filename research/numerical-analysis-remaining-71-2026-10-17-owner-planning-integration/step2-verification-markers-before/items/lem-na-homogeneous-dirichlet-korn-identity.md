---
id: lem-na-homogeneous-dirichlet-korn-identity
kind: lemma
title: "The homogeneous Dirichlet strain identity"
status: draft
origin: session
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps: ["def-wkp-zero-as-a-sobolev-closure", "def-countable-choice", "def-sobolev-space-wkp-and-its-norm", "thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces", "cor-vector-valued-ftc-and-lipschitz-bound"]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jean-Luc Guermond, MATH 661 Fall 2025, Chapters 53–54 (complete course notes)"
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap53.pdf
      locator: "Chapter 53, §§53.1–53.4: weak Stokes problem, divergence lift and inf-sup; Chapter 54, §§54.1–54.2: Fortin criteria and MINI element."
    - title: "Daniele Boffi, Franco Brezzi, Michel Fortin, Mixed Finite Element Methods and Applications (complete textbook)"
      url: https://www.karlin.mff.cuni.cz/~knobloch/FILES/Boffi-Brezzi-Fortin-Mixed_FEMs_and_Applications.pdf
      locator: "Chapter 5, Theorem 5.2.2; Chapter 8, §§8.2, 8.4.2, 8.5.5, 8.6.1 and 8.7.1."
---

## Statement

Assume Countable Choice. For bounded open $D\subset\mathbb R^d$ and $v\in H^1_0(D;\mathbb R^d)$, put $\varepsilon(v)=(\nabla v+\nabla v^T)/2$. Then
$$2\|\varepsilon(v)\|_2^2=\|\nabla v\|_2^2+\|\operatorname{div}v\|_2^2,$$
so $\|\nabla v\|_2\le\sqrt2\|\varepsilon(v)\|_2$.

## Facts & Assumptions

**Given:** $v\in H^1_0(D;\mathbb R^d)$, the closure of smooth compactly supported vector fields in $H^1$.

[A1] Countable Choice permits selecting the H0 test-function approximation sequence used to pass the smooth strain identity to the limit. ([[def-countable-choice]])

[F1] $H^1_0(D)$ is the $H^1$-closure of $C_c^\infty(D)$. ([[def-wkp-zero-as-a-sobolev-closure]])

[F2] The weak gradient has square-integrable entries and converges in $L^2$ under $H^1$ convergence. ([[def-sobolev-space-wkp-and-its-norm]])

[F3] For compactly supported smooth $h$ on $\mathbb R^d$, Fubini and the one-dimensional fundamental theorem give $\int\partial_jh=0$ for each coordinate. ([[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]])


## Proof

1.1 For $v\in C_c^\infty(D;\mathbb R^d)$, expanding the symmetric gradient gives $2|\varepsilon(v)|^2=|\nabla v|^2+\sum_{i,j}\partial_jv_i\partial_iv_j$ pointwise. [given, algebra]

2.1 For each $i,j$, apply [F3] to $h=v_i\partial_i v_j$, which is compactly supported and smooth. The product rule gives $\int_D\partial_jv_i\partial_iv_j=-\int_Dv_i\partial_j\partial_iv_j$. Summing in $j$ and using equality of mixed derivatives gives $-\sum_i\int_Dv_i\partial_i(\operatorname{div}v)$. Apply [F3] again to $h=v_i\operatorname{div}v$ and sum in $i$ to obtain $\sum_i\int_D(\partial_iv_i)\operatorname{div}v=\|\operatorname{div}v\|_2^2$. [F3, algebra, step 1.1]

3.1 By [A1, F1], approximate any $v\in H^1_0$ by such smooth fields in $H^1$. All three squared norms in the identity converge by [F2] and continuity of the finite sums, so the identity passes to the limit. Its nonnegative divergence term gives the displayed inequality. [A1, F1, F2, algebra, step 2.1] ∎
