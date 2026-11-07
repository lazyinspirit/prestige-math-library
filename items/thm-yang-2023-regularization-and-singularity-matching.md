---
dependency_level: 4
id: thm-yang-2023-regularization-and-singularity-matching
kind: theorem
title: "Yang Relative-Trace Regularization and Singularity Matching"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: not-supplied
deps:
  - def-glnplus1-gln-period-and-relative-trace-kernel
  - def-yang-regularized-relative-trace-distributions
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Liyang Yang, Relative Trace Formula and L-functions for GL(n+1) × GL(n), §§2.2–2.6, 3–5, 7.1–7.2"
      url: "https://arxiv.org/pdf/2303.02225v1"
pipeline_run: number-theory-all-141-2026-10-25
---

## Statement

Use Yang’s central-character normalization: all specified central characters are trivial on the positive real split center. Level spaces use the nebentypus character $\kappa$ defined with the test class, so they mean isotypic spaces when the central character is ramified.

Let $F$ be a number field, $n\geq2$, $G=\mathrm{GL}_{n+1}$, $G'=\mathrm{GL}_n$, and use the embedding, Whittaker characters, measures, kernel, and Rankin–Selberg period fixed in the preceding definitions. Let $\pi'_1,\pi'_2$ be unitary cuspidal automorphic representations of $G'(\mathbb A_F)$ with unitary central characters, choose cusp forms $\phi'_i\in\pi'_i$, let $S$ contain the archimedean places and every place where either $\pi'_i$ is ramified, let $\mathfrak N\subsetneq\mathcal O_F$ be an integral ideal supported outside $S$, and let $\omega$ be a unitary idele-class character of finite conductor dividing $\mathfrak N$. Take $f\in\mathcal F_S(\mathfrak N,\omega^{-1})$ as defined in the preceding definition. For $s=(s_1,s_2)\in\mathbb C^2$, set

$$R=\{s:\operatorname{Re}(s_1)>-1/(n+1),\ \operatorname{Re}(s_2)>-1/(n+1)\}.$$

Yang's four-stage regularization gives the geometric distribution $J^{\mathrm{Reg}}_{\mathrm{Geo}}$ as the sum of the small-cell and big-cell limits defined above. On the common right half-plane $\operatorname{Re}(s_i)\gg1$, the central-cutoff Fourier identity gives $J^{\mathrm{Reg}}_{\mathrm{Spec}}=J^{\mathrm{Reg}}_{\mathrm{Geo}}$. The combined geometric distribution converges absolutely when $\operatorname{Re}(s_i)>1/2$ for $i=1,2$ and admits meromorphic continuation to $R$. In $\operatorname{Re}(s_1+s_2)>0$, the small-cell term is a Rankin–Selberg integral representation of $\Lambda(1+s_1+s_2,\pi'_1\times\widetilde{\pi'_2})$. The big-cell calculation separates the dual Rankin–Selberg orbit from the remaining orbital terms; the latter continue meromorphically to $R$ and include an entire residual-orbit contribution.

The combined geometric distribution has at most simple poles on $s_1+s_2\in\{-1,0,1\}$. Its residues on those lines agree with the corresponding residues of the regularized spectral distribution. Thus the singular parts of the two distributions match and cancel in their difference.

## Statement references

[Liyang Yang, *Relative Trace Formula and L-functions for GL(n+1) × GL(n)*, §§2.2–2.6, 3–5, and 7.1–7.2](https://arxiv.org/pdf/2303.02225v1)

## Current proof boundary

Yang omits the proof of Proposition4.13, saying it is similar to Proposition4.12. Its residual-term domination and meromorphic continuation, the preceding local support estimates, the cusp-form decay and Poisson summation, and the exact residue identities are not reconstructed locally here. A citation and a formal rational denominator do not prove the required uniform integrability.
