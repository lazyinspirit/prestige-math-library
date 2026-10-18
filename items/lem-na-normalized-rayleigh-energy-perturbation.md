---
id: lem-na-normalized-rayleigh-energy-perturbation
kind: lemma
title: "Rayleigh energy perturbation for normalized finite states"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
deps:
  - def-finite-tensor-arrays-and-frobenius-inner-product
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
  - thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces
  - def-self-adjoint-and-normal-endomorphism
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
aliases: []
sources:
  references:
    - title: "Ulrich Schollwöck, The density-matrix renormalization group in the age of matrix product states, Annals of Physics 326 (2011), §6.3"
      url: "https://arxiv.org/pdf/1008.3477"
    - title: "Grégoire Misguich, Introduction to matrix-product states and tensor networks, complete lecture notes (2026), §2.7"
      url: "https://arxiv.org/pdf/2606.24803"
dependency_level: 1
---

## Statement

Let $\mathcal H=\mathbb F^{n_1\times\cdots\times n_d}$ be a finite tensor-array space over $\mathbb F\in\{\mathbb R,\mathbb C\}$, let $H:\mathcal H\to\mathcal H$ be self-adjoint, and let $\psi,\phi\in\mathcal H$ satisfy $\|\psi\|_F=\|\phi\|_F=1$. Then
$$\left|\langle\psi,H\psi\rangle_F-\langle\phi,H\phi\rangle_F\right|\le 2\|H\|_{\mathrm{op}}\|\psi-\phi\|_F.$$

## Facts & Assumptions

**Given:** A finite tensor-array space, a self-adjoint endomorphism $H$, and unit states $\psi,\phi$ in that space.

[F1] [[def-finite-tensor-arrays-and-frobenius-inner-product]]: the Frobenius pairing is the finite sum of conjugate-entry times entry, and its induced norm is $\|\cdot\|_F$.

[F2] [[def-operator-norm-on-a-finite-dimensional-inner-product-space]]: on a nonzero finite-dimensional domain, $\|H\|_{\mathrm{op}}=\max_{\|x\|=1}\|Hx\|$.

[F3] [[thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]]: the absolute value of an inner product is at most the product of the two vector norms; conjugating or swapping the arguments leaves the modulus unchanged, so the inequality applies to the conjugate-first Frobenius pairing as well.

[F4] [[def-self-adjoint-and-normal-endomorphism]]: self-adjointness means $H^*=H$.

## Proof


1.1 For every $v\in\mathcal H$, $\|Hv\|_F\le\|H\|_{\mathrm{op}}\|v\|_F$: this is immediate for $v=0$, and otherwise follows by applying [F2] to $v/\|v\|_F$ and scaling back. [given, F2, algebra]

2.1 By [F1], expand the difference as $\langle\psi-\phi,H\psi\rangle_F+\langle\phi,H(\psi-\phi)\rangle_F$. Apply [F3] to both terms, then [F2] and step 1.1 to obtain a bound of $\|\psi-\phi\|_F\|H\|_{\mathrm{op}}\|\psi\|_F+\|\phi\|_F\|H\|_{\mathrm{op}}\|\psi-\phi\|_F=2\|H\|_{\mathrm{op}}\|\psi-\phi\|_F$. Finally, $\overline{\langle\psi,H\psi\rangle_F}=\langle H\psi,\psi\rangle_F=\langle\psi,H\psi\rangle_F$ by [F1] and $H^*=H$ from [F4], so the energy values are real. [given, F1, F2, F3, F4, step 1.1, algebra] ∎
