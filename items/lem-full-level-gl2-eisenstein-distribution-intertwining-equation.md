---
id: lem-full-level-gl2-eisenstein-distribution-intertwining-equation
kind: lemma
title: "The Full-Level GL2 Eisenstein Distribution Intertwining Equation"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 4
deps:
  - lem-full-level-gl2-eisenstein-distribution-pairing-is-meromorphic
  - lem-meromorphic-gl2-local-trilinear-intertwining-identity
  - def-euler-gamma-function
  - thm-identity-theorem-holomorphic-functions
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "S. D. Miller and W. Schmid, The Rankin–Selberg Method for Automorphic Distributions"
      url: "https://arxiv.org/pdf/math/0605783v1"
      locator: "§4, equations (4.8)–(4.11), printed pp.18–19."
---

## Statement

The meromorphic full-level Eisenstein distribution and the meromorphic
intertwiner between parameters $-\nu$ and $\nu$, both of parity zero, satisfy
$$J_\nu E_{-\nu}=G_0(\nu)E_\nu,\qquad G_0(\nu)=2(2\pi)^{-\nu}\Gamma(\nu)\cos(\pi\nu/2).$$
This is an identity of meromorphic distribution sections, including their
Laurent expansions at exceptional parameters. No choice principle is assumed.

## Statement references

[[lem-full-level-gl2-eisenstein-distribution-pairing-is-meromorphic|the normalized Eisenstein family]]

[[lem-meromorphic-gl2-local-trilinear-intertwining-identity|the normalized intertwiner]]

## Facts & Assumptions

**Given:** The meromorphic families $E_\nu$ and $J_\nu$ with the preceding normalizations.

[F1] [[lem-full-level-gl2-eisenstein-distribution-pairing-is-meromorphic]] gives full-level invariance and nonzero Fourier coefficients $a_\nu(n)=\sum_{d\mid |n|}d^{-\nu}$.

[F2] [[lem-meromorphic-gl2-local-trilinear-intertwining-identity]] constructs $J_\nu$ from the symmetric kernel $|t-x|^{\nu-1}$, with equivariance and meromorphic finite-order continuation.

[F3] [[def-euler-gamma-function]] gives the convergent Gamma integral on the right half-plane; [[thm-identity-theorem-holomorphic-functions]] extends its Laplace transform from positive real scale to complex scale with positive real part and extends the resulting meromorphic identities.

## Proof

**Given:** The families in the Statement; write $e(nx)=e^{2\pi inx}$.

1.1 A nonzero-frequency $N$-eigen distribution section is uniquely determined by its restriction $e(nx)$ to the affine line. Indeed, the difference of two such sections is supported at infinity and has finite order there. In the reciprocal coordinate, translations act by $u\mapsto u/(1\pm tu)$ with a smooth principal-series weight. On the finite space of jets through any fixed order their action is unipotent, so all its characters are trivial. A section supported there cannot transform by $e(nt)$ for $n\ne0$. An extension exists: in the reciprocal chart the formal expression is $|u|^{\rho-1}e(-n/u)$; integrate by parts against tests using $d(e(-n/u))/du=2\pi in u^{-2}e(-n/u)$. Repetition moves arbitrary positive powers of $u$ into the amplitude, making the defining integrals and all required finite-order estimates convergent; the zero boundary prescription gives a distribution section. Uniqueness makes its two chart definitions and its $N$-eigen identity consistent. Denote this section by $B_{n,\rho}$. [F2, construct, algebra]

2.1 For $0<\operatorname{Re}\nu<1$, the oscillatory convolution of $e(nt)$ with $|t-x|^{\nu-1}$ is well defined by integration by parts at both infinite ends. Insert the damping $e^{-\epsilon|t-x|}$, $\epsilon>0$. Its Fourier scalar is $\Gamma(\nu)((\epsilon-2\pi in)^{-\nu}+(\epsilon+2\pi in)^{-\nu})$, by the Gamma integral and its complex-scale extension in [F3]. As $\epsilon\downarrow0$, this tends to $G_0(\nu)|n|^{-\nu}$. The same integrations by parts used in step 1.1 show that this is the affine restriction of the compact-picture operator [F2]; cutoff differences at infinity tend to zero on every test. Equivariance and uniqueness in step 1.1 therefore give $J_\nu B_{n,-\nu}=G_0(\nu)|n|^{-\nu}B_{n,\nu}$, first in this strip and then meromorphically by [F3]. [step 1.1, F2, F3, algebra]

3.1 The compact unipotent average with character $e(-nt)$ projects the periodic distribution $E_\rho$ onto $a_\rho(n)B_{n,\rho}$ for $n\ne0$: its affine restriction is that Fourier term, and uniqueness in step 1.1 identifies the full section. The average commutes with $J_\nu$ by equivariance. The divisor identity $a_{-\nu}(n)=|n|^\nu a_\nu(n)$ and step 2.1 now show that $D_\nu=J_\nu E_{-\nu}-G_0(\nu)E_\nu$ has every nonzero affine Fourier coefficient equal to zero. Thus its affine restriction is a constant distribution $c_\nu$. This uses only compact character averages and distributional Fourier uniqueness, the latter obtained by the convergent smooth Fourier approximation of a test. [F1, F2, step 1.1, step 2.1, algebra]

4.1 Both terms of $D_\nu$ are full-level invariant. On the punctured affine line, inversion consequently identifies the constant $c_\nu$ with $|x|^{\nu-1}c_\nu$. For $\nu\ne1$ this forces $c_\nu=0$. Then $D_\nu$ is supported at infinity, whereas inversion invariance makes it supported at zero as well; these disjoint supports force $D_\nu=0$. This proves the identity away from a discrete set and $\nu=1$. Meromorphic continuation from [F1]–[F3] extends it to the full family, with no asserted pointwise value at a pole. [step 3.1, F1, F2, F3, algebra] ∎
