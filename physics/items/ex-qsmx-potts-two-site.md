---
id: ex-qsmx-potts-two-site
kind: example
domain: mathematics
library: physics
title: "Local spectrum and noncommuting terms"
status: published
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
dependency_level: 2
deps:
  - def-qsmx-quantum-potts-hamiltonian
  - lem-qsmx-potts-finite-gibbs-density
  - thm-qsmx-potts-tl-and-hecke
  - cor-exponential-is-a-bijection-onto-positive-reals
dependency_roles:
  def-qsmx-quantum-potts-hamiltonian: mathematical-premise
  lem-qsmx-potts-finite-gibbs-density: mathematical-premise
  thm-qsmx-potts-tl-and-hecke: mathematical-premise
  cor-exponential-is-a-bijection-onto-positive-reals: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
sources:
  references:
    - title: "A. Nichols, The Temperley-Lieb algebra and its generalizations in the Potts and XXZ models, §2.1.2–2.1.4"
      url: https://arxiv.org/pdf/hep-th/0509069
      locator: "§2.1.2–2.1.4, equations (2.4), (2.6)–(2.10), PDF pp. 4–6: finite two-site Potts-clock terms."
    - title: "D. Arovas, Thermodynamics and Statistical Mechanics, §7.4 Variational Density Matrix Method"
      url: https://phys.libretexts.org/Bookshelves/Thermodynamics_and_Statistical_Mechanics/Book:_Thermodynamics_and_Statistical_Mechanics_(Arovas)/07:_Mean_Field_Theory_of_Phase_Transitions/7.04:_Variational_Density_Matrix_Method
      locator: "§7.4, lines 1352–1379: normalized finite-state Boltzmann density and positive weights; the noncommuting quantum claim is proved locally."
---

## Example

Fix $Q\in\{2,3,4\}$ and the two-site open chain $L=2$. Let $\kappa,\lambda\in\mathbb R$ with $\kappa\neq0$ and finite $\beta\in\mathbb R\setminus\{0\}$, and set $H=-\kappa e_1-\lambda e_2=-\sqrt Q(\kappa P_1+\lambda D_{12})$. A classical diagonal replacement here means a density matrix diagonal in the computational basis $|ab\rangle$. The exact finite Gibbs density $\rho_\beta$ of this matrix is not diagonal in that basis. Moreover $P_1,D_{12}$ are nontrivial projections with spectrum $\{0,1\}$, satisfy $P_1D_{12}P_1=Q^{-1}P_1$, and do not commute.

## Example references

[[def-qsmx-quantum-potts-hamiltonian]]

[[lem-qsmx-potts-finite-gibbs-density]]

[[thm-qsmx-potts-tl-and-hecke]]

[[cor-exponential-is-a-bijection-onto-positive-reals]]

## Facts & Assumptions

**Given:** $Q\in\{2,3,4\}$, $L=2$, $\kappa,\lambda\in\mathbb R$, $\kappa\neq0$, and $\beta\in\mathbb R\setminus\{0\}$.

[A1] These parameter and boundary hypotheses are exactly those in the Example.

[F1] [[def-qsmx-quantum-potts-hamiltonian]]: the inner product is linear in its first argument; $P_1=|+\rangle\langle+|\otimes I$, $D_{12}=\sum_a|aa\rangle\langle aa|$, $e_1=\sqrt QP_1$, $e_2=\sqrt QD_{12}$, and $H=-\sqrt Q(\kappa P_1+\lambda D_{12})$; the spectral projections $\Pi_\mu$ are self-adjoint idempotents summing to $I$. A self-adjoint $A$ is positive definite if $\langle Av,v\rangle>0$ for every nonzero $v$.

[F2] [[lem-qsmx-potts-finite-gibbs-density]]: $H$ is self-adjoint, $Z_\beta>0$, and $\rho_\beta=Z_\beta^{-1}\sum_{\mu\in\Lambda(H)}e^{-\beta\mu}\Pi_\mu$.

[F3] [[cor-exponential-is-a-bijection-onto-positive-reals]]: $\exp:\mathbb R\to(0,\infty)$ is bijective, so it is injective and has strictly positive values on real inputs.

[F4] [[thm-qsmx-potts-tl-and-hecke]]: the operators $e_{2j-1}=\sqrt QP_j$ and $e_{2j}=\sqrt QD_{j,j+1}$ are the adjacent local Potts Temperley-Lieb generators at loop weight $\sqrt Q$.

## Proof

1.1 By [F4], $P_1$ and $D_{12}$ are the odd and even adjacent local generators in the stated Potts Temperley-Lieb representation. Since $P:=|+\rangle\langle+|$, $P|a\rangle=Q^{-1/2}|+\rangle$. Therefore $$P_1D_{12}P_1=\sum_{a=0}^{Q-1}(P|a\rangle\langle a|P)\otimes|a\rangle\langle a|=Q^{-1}P_1.$$ Both $P_1$ and $D_{12}$ are orthogonal projections. Their ranks are $Q$ in the $Q^2$-dimensional two-site space; for $Q\geq2$ each has spectrum $\{0,1\}$. [A1, F1, F4, algebra]

1.2 The matrix entry from $|00\rangle$ to $|10\rangle$ is $$\langle10|H|00\rangle=-\kappa\sqrt Q\,\langle10|P_1|00\rangle=-\kappa/\sqrt Q\neq0,$$ because $D_{12}$ is diagonal in this basis. Hence $H$ is not diagonal. [A1, F1, algebra]

2.1 Acting on $|00\rangle$ gives $P_1D_{12}|00\rangle=Q^{-1/2}|+\rangle|0\rangle$ and $D_{12}P_1|00\rangle=Q^{-1}|00\rangle$. These vectors differ for every $Q\geq2$, so $P_1D_{12}\neq D_{12}P_1$. [A1, F1, step 1.1]

2.2 Each eigenvalue $\mu$ of $H$ has a unit eigenvector $v$. By [F2], $H$ is self-adjoint; using the linear-first inner product from [F1], $\mu=\langle Hv,v\rangle=\langle v,Hv\rangle=\overline\mu$, so $\mu\in\mathbb R$. Since $\beta\neq0$, multiplication $\mu\mapsto-\beta\mu$ is injective, and [F3] makes $\mu\mapsto e^{-\beta\mu}$ injective; [F3] also gives positive weights. The projections in [F1] sum to the identity, so $B_\beta=\sum_\mu e^{-\beta\mu}\Pi_\mu$ is positive definite: for nonzero $w$, $\langle B_\beta w,w\rangle=\sum_\mu e^{-\beta\mu}\|\Pi_\mu w\|^2>0$. Now suppose $\rho_\beta$ were diagonal in the computational basis. By [F2], $Z_\beta>0$ and $B_\beta=Z_\beta\rho_\beta$, so $B_\beta$ would be diagonal. On the $\mu$-eigenspace of $H$, $B_\beta$ acts by $e^{-\beta\mu}$; these scalars are distinct for distinct real $\mu$, hence the eigenspaces of $B_\beta$ are exactly those of $H$. Every computational basis vector is an eigenvector of a diagonal $B_\beta$, and therefore would be an $H$-eigenvector. This contradicts the nonzero off-diagonal entry in step 1.2, so $\rho_\beta$ is not diagonal. [A1, F1, F2, F3, step 1.2, algebra]

3.1 At $\beta=0$, the spectral definition in [F1] gives $B_0=\sum_\mu\Pi_\mu=I$, so [F2] gives $\rho_0=I/Q^2$, which is diagonal. If $\kappa=0$, [F1] gives $H=-\lambda\sqrt Q\,D_{12}$, a diagonal matrix, so its spectral Gibbs density is diagonal as well. These boundary cases show why the nonzero assumptions are required. [F1, F2, step 1.1, algebra] ∎

## Remarks

This is an exact finite-matrix example. It records no observation and establishes no claim about phase transitions, thermalization, or a material realization.
