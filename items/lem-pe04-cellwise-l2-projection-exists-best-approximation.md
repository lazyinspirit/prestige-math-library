---
id: lem-pe04-cellwise-l2-projection-exists-best-approximation
kind: lemma
title: The cellwise L2 projection exists uniquely and is best approximation
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps:
  - def-pe04-cellwise-l2-projection
  - cor-cauchy-schwarz-inequality-for-l-two
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Bernardo Cockburn, An Introduction to the Discontinuous Galerkin Method for Convection-Dominated Problems, CIME lecture notes"
      url: "https://www-users.cse.umn.edu/~bcockbur/lecture_notes/DG-1.pdf"
      locator: "§3.5, printed p. 164: the elementwise L2 projection equations; the finite-dimensional existence and best-approximation proof is supplied locally."
---

## Statement

For every finite measure $\mu$ on a bounded nondegenerate interval or nondegenerate affine simplex $K$ that assigns positive measure to every nonempty relatively open subset, every integer degree $p\ge0$ with $\mathbb P_p(K)\subseteq\mathcal L^2(\mu)$ as in [[def-pe04-cellwise-l2-projection]], and every $u\in\mathcal L^2(\mu)$, the set $\mathcal P_K(u)$ contains exactly one polynomial $\Pi_Ku$. For each $w\in\mathbb P_p(K)$,
$$\|u-\Pi_Ku\|_{L^2(K)}\le\|u-w\|_{L^2(K)}.$$

## Facts & Assumptions

**Given:** A finite measure $\mu$ with full support on $K$, the finite-dimensional polynomial space $\mathbb P_p(K)\subset\mathcal L^2(\mu)$, $u\in\mathcal L^2(\mu)$, and the orthogonality equations defining $\mathcal P_K(u)$.

[F1] [[def-pe04-cellwise-l2-projection]]: $p\in\mathcal P_K(u)$ exactly when $\int_K(u-p)w\,d\mu=0$ for every $w\in\mathbb P_p(K)$.

[F2] [[cor-cauchy-schwarz-inequality-for-l-two]]: if $f,g\in\mathcal L^2(\mu)$, then $\int|fg|\,d\mu\le\|f\|_2\|g\|_2$.

## Proof

1.1 Choose the finite monomial basis $\{\phi_1,\ldots,\phi_M\}$ of $\mathbb P_p(K)$. Its Gram matrix $G_{ij}=\int_K\phi_i\phi_j\,d\mu$ is positive definite: for every nonzero coefficient vector $c$, the polynomial $q=\sum_i c_i\phi_i$ is continuous and nonzero at some point of $K$, so it is bounded away from zero on a nonempty relatively open subset; full support gives $c^TGc=\int_Kq^2\,d\mu>0$. Each moment $b_i=\int_Ku\phi_i\,d\mu$ is finite by [F2]. The invertible system $Gc=b$ therefore has a unique solution, and $p=\sum_i c_i\phi_i$ satisfies [F1]. [F1, F2, construct, algebra]

2.1 For any $w\in\mathbb P_p(K)$, write $u-w=(u-\Pi_Ku)+(\Pi_Ku-w)$. The first term is orthogonal to the second by [F1], hence $\|u-w\|_2^2=\|u-\Pi_Ku\|_2^2+\|\Pi_Ku-w\|_2^2\ge\|u-\Pi_Ku\|_2^2$. Taking square roots proves best approximation. [F1, step 1.1, algebra] ∎
