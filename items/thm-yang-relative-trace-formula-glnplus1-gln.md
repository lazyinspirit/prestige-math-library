---
dependency_level: 8
id: thm-yang-relative-trace-formula-glnplus1-gln
kind: theorem
title: "Yang Relative Trace Formula for GL(n+1) × GL(n)"
status: draft
origin: pipeline
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
deps:
  - thm-yang-2023-spectral-expansion-of-relative-kernel
  - thm-yang-2023-regularization-and-singularity-matching
sources:
  scraped: []
  references:
    - title: "Liyang Yang, Relative Trace Formula and L-functions for GL(n+1) × GL(n), Theorems D and E, §§8.3–8.4"
      url: "https://arxiv.org/pdf/2303.02225v1"
pipeline_run: number-theory-all-141-2026-10-25
---

## Statement

Use Yang’s central-character normalization: all specified central characters are trivial on the positive real split center. Level spaces use the nebentypus character $\kappa$ defined with the test class, so they mean isotypic spaces when the central character is ramified.

Let $F$ be a number field, $n\geq2$, $G=\mathrm{GL}_{n+1}$, and $G'=\mathrm{GL}_n$. Use the period, kernel, test-function, and truncated-distribution definitions already fixed on the preceding A page. Let $\pi'_1,\pi'_2$ be unitary cuspidal generic automorphic representations of $G'(\mathbb A_F)$ with unitary central characters, and choose cusp forms $\phi'_i\in\pi'_i$. Let $S$ contain the archimedean places and every ramified place of $\pi'_1,\pi'_2$, let $\mathfrak N\subsetneq\mathcal O_F$ be an integral ideal supported outside $S$, and let $\omega$ be a unitary Hecke character of finite conductor dividing $\mathfrak N$. For $f\in\mathcal F_S(\mathfrak N,\omega^{-1})$ and $s=(s_1,s_2)$, the regularized spectral and geometric distributions satisfy

$$J^{\mathrm{Reg}}_{\mathrm{Spec}}(f,s;\phi'_1,\phi'_2)=J^{\mathrm{Reg}}_{\mathrm{Geo}}(f,s;\phi'_1,\phi'_2)$$

on a right half-plane $\operatorname{Re}(s_1),\operatorname{Re}(s_2)\gg1$, where both sides converge absolutely. They continue meromorphically to $R=\{\operatorname{Re}(s_i)>-1/(n+1)\}$. Their only possible poles are simple and lie on $s_1+s_2\in\{-1,0,1\}$, and the residues on each such line agree.

Let $R^*=\{s:|\operatorname{Re}(s_i)|<1/(n+1)\}$. Let $\mathcal X_{\mathrm{pole}}$ be the finite set of proper-Levi cuspidal data for which one of the meromorphic Whittaker-period products in the spectral-expansion statement has a simple pole. For $\chi=\{(M_Q,\sigma)\}\in\mathcal X_{\mathrm{pole}}$, with the associated basis $B_{Q,\chi}$ and period $\Psi_\lambda$ defined there, put

$$G_\chi(s)=\sum_{\phi\in B_{Q,\chi}}\operatorname*{Res}_{\lambda=n(s_1-1/2)}\!\left[\Psi_\lambda(s_1,I(\lambda,f)\phi,\phi'_1)\Psi_\lambda(s_2,\phi,\phi'_2)\right],\quad \widetilde G_\chi(s)=\sum_{\phi\in B_{Q,\chi}}\operatorname*{Res}_{\lambda=n(1/2-s_2)}\!\left[\Psi_\lambda(s_1,I(\lambda,f)\phi,\phi'_1)\Psi_\lambda(s_2,\phi,\phi'_2)\right].$$

Add $\sum_{\chi\in\mathcal X_{\mathrm{pole}}}(G_\chi-\widetilde G_\chi)$ to each continued distribution, writing the resulting holomorphic functions on $R^*$ as $J^{\mathrm{Reg},\heartsuit}_{\mathrm{Spec}}$ and $J^{\mathrm{Reg},\heartsuit}_{\mathrm{Geo}}$. These corrected functions are equal on $R^*$. The corrected spectral side is the absolutely convergent generic-spectrum integral of the two Whittaker periods with their meromorphic continuations.

## Facts & Assumptions

**Given:** The number field, ranks, central characters, cuspidal representations, test functions, and regularized distributions specified in the Statement. Prove the relative trace identities and continuation claims.

[F1] [[thm-yang-2023-spectral-expansion-of-relative-kernel]]: On $\operatorname{Re}(s_i)>1/2$, the regularized spectral side is the absolutely convergent integral over the full generic spectrum of the two Whittaker periods and continues meromorphically to $R$.

[F2] [[thm-yang-2023-regularization-and-singularity-matching]]: On a common right half-plane the central-cutoff Fourier identity gives $J^{\mathrm{Reg}}_{\mathrm{Spec}}=J^{\mathrm{Reg}}_{\mathrm{Geo}}$; the geometric side continues to $R$, and the simple-pole residues on $s_1+s_2\in\{-1,0,1\}$ match the spectral residues.

[A1] The exact contour-shift residue identity, including the coefficients of $G_\chi$ and $\widetilde G_\chi$, absolute convergence of the corrected generic-spectrum integral, and cancellation of all polar parts on $R^*$ are additional unsupplied analytic inputs. Meromorphic equality and agreement of residues alone do not establish their stated formulas. The full spectral and geometric suppliers also remain locally unproved.

## Proof

1.1 On $\operatorname{Re}(s_i)\gg1$, [F2] identifies the two limits of the central-cutoff kernel identity, and [F1] supplies the absolutely convergent spectral expression on the left. This gives the first identity on a nonempty open subset of $R$. [given, F1, F2]

2.1 By [F1] and [F2], both sides have meromorphic continuations on the connected region $R$. Since they agree on the open subset from Step 1.1, the identity theorem gives equality throughout $R$, with the residue agreement stated in [F2]. [F1, F2, step 1.1]

3.1 Conditional also on [A1], the precise contour-shift calculation identifies the finitely many singular proper-Levi period residues with the corresponding orbital corrections on the geometric side. Adding the same residue correction to both continued distributions cancels their polar parts and leaves equal holomorphic corrected functions. The spectral expression is the absolutely convergent continuation recorded in [F1]. [A1, F1, F2, step 2.1] ∎

## Proof references

[Liyang Yang, *Relative Trace Formula and L-functions for GL(n+1) × GL(n)*, Theorems D and E, §§8.3–8.4](https://arxiv.org/pdf/2303.02225v1)

The argument is a formal reduction conditional on the explicitly held analytic suppliers and A1, not a completed proof of the unconditional trace formula.
