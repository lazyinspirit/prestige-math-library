---
id: prop-na-exact-local-dmrg-update-does-not-increase-energy
kind: proposition
title: "An exact local DMRG ground solve does not increase Rayleigh energy"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
deps:
  - def-na-finite-mps-state-and-hermitian-hamiltonian
  - lem-na-mps-environment-isometry-and-effective-hamiltonian
  - lem-na-finite-hermitian-ground-vector-with-deterministic-tie
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
aliases: []
sources:
  references:
    - title: "Ulrich Schollwöck, The density-matrix renormalization group in the age of matrix product states, Annals of Physics 326 (2011), §§6.3–6.4"
      url: "https://arxiv.org/pdf/1008.3477"
    - title: "Grégoire Misguich, Introduction to matrix-product states and tensor networks, complete lecture notes (2026), §2.7"
      url: "https://arxiv.org/pdf/2606.24803"
dependency_level: 4
---

## Statement

Let $\psi_0=Ex_0$ be a normalized finite MPS in mixed canonical gauge about a one-site or two-site center, with $\|x_0\|_2=1$. Let $H_{\mathrm{eff}}=E^*HE$ be its effective Hermitian matrix, and replace the center by the deterministic unit ground vector $x_* $ of $H_{\mathrm{eff}}$, giving $\psi_*=Ex_*$. Then $\psi_*$ is normalized and
$$\mathcal E_H(\psi_*)\le\mathcal E_H(\psi_0).$$
This claim is before any bond truncation.

## Facts & Assumptions

**Given:** The finite-state and Hermitian-Hamiltonian conventions, an isometric one-site or two-site center embedding $E$, and the current unit center vector $x_0$.

[F1] [[lem-na-mps-environment-isometry-and-effective-hamiltonian]]: $E^*E=I$, $H_{\mathrm{eff}}=E^*HE$ is Hermitian, and $\langle Ex,HEx\rangle_F=x^*H_{\mathrm{eff}}x$.

[F2] [[lem-na-finite-hermitian-ground-vector-with-deterministic-tie]]: the selected unit vector $x_*$ minimizes the Rayleigh quotient of the finite Hermitian matrix $H_{\mathrm{eff}}$.

[F3] [[def-na-finite-mps-state-and-hermitian-hamiltonian]]: a normalized finite state has Frobenius norm one and $\mathcal E_H(\psi)=\langle\psi,H\psi\rangle_F$.

## Proof


1.1 Since $E^*E=I$ by [F1], the current center state $\psi_0=Ex_0$ has norm $\|x_0\|_2=1$, and the updated state $\psi_*=Ex_*$ has norm $\|x_*\|_2=1$. Thus both are admissible normalized states under [F3]. [given, F1, F3, algebra]

2.1 By [F2], $x_*^*H_{\mathrm{eff}}x_*\le x_0^*H_{\mathrm{eff}}x_0$. Use the pullback identity in [F1] on both sides and then [F3] to obtain $\mathcal E_H(\psi_*)\le\mathcal E_H(\psi_0)$. [F1, F2, F3, step 1.1, algebra] ∎
