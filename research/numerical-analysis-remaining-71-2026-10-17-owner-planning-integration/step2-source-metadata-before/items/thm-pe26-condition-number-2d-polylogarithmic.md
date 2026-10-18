---
id: thm-pe26-condition-number-2d-polylogarithmic
kind: theorem
title: The two-dimensional BDDC and FETI-DP polylogarithmic bound
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 7
deps: [def-pe26-scalar-substructuring-model, def-pe26-feti-dp-dual-system-and-preconditioner, def-pe26-scaled-averaging-and-bddc-preconditioner, thm-pe26-nontrivial-spectrum-bddc-feti-dp, lem-pe26-preconditioned-operator-norm-bound, lem-pe26-scaled-averaging-energy-bound]
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "None; the proof uses the two preceding finite-dimensional spectral estimates."
verification:
  precheck: pass
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Olof B. Widlund, Introduction to the Design and Theory of Domain Decomposition Algorithms, DD20 Tutorial, pp. 94–97"
      url: "https://cs.nyu.edu/~widlund/SD_rev_tutorial.pdf"
    - title: "Oliver Rheinbach, Parallel Scalable Iterative Substructuring, Chapter 2 §2.4, Theorems 2.4.1–2.4.3"
      url: "https://d-nb.info/983219192/34"
    - title: "Jan Mandel and Bedřich Sousedík, BDDC and FETI-DP under Minimalist Assumptions, §4"
      url: "https://arxiv.org/pdf/0708.4031"
---

## Statement

Assume the scalar model of [[def-pe26-scalar-substructuring-model]], matching shape-regular quasiuniform $P_1$ meshes on bounded-shape polygonal subdomains in two dimensions, all subdomain vertices primal, coefficient scaling $\rho_i/(\rho_i+\rho_j)$ on each open interface edge, and nonzero assembled and multiplier spaces. Then both preconditioned interface operators satisfy

$$\kappa(M_{\rm BDDC}^{-1}\widehat S)\le C(1+\log(H/h))^2,\qquad \kappa(M_{\rm FETI-DP}^{-1}F)\le C(1+\log(H/h))^2.$$

The constant is independent of $h$, $H$, the number of subdomains, and arbitrary positive jumps in the coefficient values $\rho_i$. If either preconditioned space is zero-dimensional, that interface solve is trivial and its condition number is not asserted. This statement does not cover three-dimensional vertex-only constraints, arbitrary graph or mesh geometries, or unaligned/intra-subdomain high-contrast coefficients.

## Facts & Assumptions

**Given:** The scalar second-order subdomain diffusion family and its primal/dual preconditioners; write $\|Q\|_{\widetilde S}$ for the operator norm induced by the partially assembled Schur energy.

[F1] [[lem-pe26-scaled-averaging-energy-bound]]: $\|P\|_{\widetilde S}\le C_0(1+\log(H/h))$ for $P=I-R E_0$.

[F2] [[lem-pe26-preconditioned-operator-norm-bound]]: for $LT=I$, preconditioned eigenvalues lie between $1$ and $\|TL\|_A^2$.

[F3] [[def-pe26-scaled-averaging-and-bddc-preconditioner]]: BDDC has $TL=R E_0=I-P$.

[F4] [[def-pe26-feti-dp-dual-system-and-preconditioner]]: FETI-DP has $TL=B_D^TB=P$, $BB_D^T=I_\Lambda$, and $\Lambda=\operatorname{range}B$; the latter convention makes $B^T$ injective on $\Lambda$.

[F5] [[thm-pe26-nontrivial-spectrum-bddc-feti-dp]]: the two positive preconditioned spectra agree except possibly at $1$.

## Proof

1.1 Apply [F2] with $L=E_0$ and $T=R$. The BDDC eigenvalues are at least one and at most $\|RE_0\|_{\widetilde S}^2=\|I-P\|_{\widetilde S}^2$. By the triangle inequality for the induced operator norm, $\|I-P\|_{\widetilde S}\le1+\|P\|_{\widetilde S}\le1+C_0(1+\log(H/h))$. Since $1+\log(H/h)\ge1$, squaring yields the BDDC bound with a geometry-only constant. [given, F1, F2, F3, algebra]

1.2 Apply [F2] with $L=B$ and $T=B_D^T$. This bounds the eigenvalues of $F M_{\rm FETI-DP}^{-1}$ below by one and above by $\|B_D^TB\|_{\widetilde S}^2=\|P\|_{\widetilde S}^2\le C_0^2(1+\log(H/h))^2$ by [F1] and [F4]. The Gram factors $F=B\widetilde S^{-1}B^T$ and $M_{\rm FETI-DP}^{-1}=B_D\widetilde S B_D^T$ are positive definite: $B^T$ is injective on $\Lambda$ by [F4], $B_D^T$ is injective by $BB_D^T=I_\Lambda$, and $\widetilde S$ is positive definite. Thus both maps are isomorphisms, and conjugation by $F$ sends $M_{\rm FETI-DP}^{-1}F$ to $F M_{\rm FETI-DP}^{-1}$, since
$$F(M_{\rm FETI-DP}^{-1}F)F^{-1}=F M_{\rm FETI-DP}^{-1}.$$
They therefore have identical eigenvalues, so the stated FETI-DP product has the same lower and upper bounds. [given, F1, F2, F4, algebra]

2.1 The lower eigenvalue bounds make both condition numbers their respective largest eigenvalues. The common nonunit spectrum in [F5] confirms that the paired methods have the same nontrivial convergence spectrum; neither assertion introduces a 3D, arbitrary-graph or unaligned-coefficient claim excluded in the Statement. [F5, step 1.1, step 1.2] ∎
