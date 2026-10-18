---
id: ex-sbp-inviscid-versus-viscous-entropy-budget
kind: example
title: An exact three-node inviscid-versus-viscous SBP entropy budget
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 5
aliases: []
deps:
  - def-periodic-sbp-compressible-viscous-scheme
  - lem-ideal-gas-entropy-conservative-flux-properties
  - lem-compressible-viscous-flux-entropy-variable-factorization
  - lem-compressible-ideal-gas-entropy-pair-and-variables
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
sources:
  references:
    - title: "Eitan Tadmor, Entropy Stable Schemes, Chapter 18, Handbook of Numerical Methods for Hyperbolic Problems: Basic and Fundamental Issues, 2016, complete chapter"
      url: "https://math.umd.edu/~tadmor/references/files/Tadmor%20entropy%20stable%20schemes-r%20handbook2016.pdf"
      locator: "Printed pp. 482–490, Section 4.6 and Section 6: entropy-conservative flux identity and high-order flux differencing. The three-node arithmetic is computed locally."
    - title: "Pablo Fernandez, Ngoc-Cuong Nguyen, and Jaime Peraire, Entropy-stable hybridized discontinuous Galerkin methods for the compressible Euler and Navier-Stokes equations, complete author preprint"
      url: "https://arxiv.org/pdf/1808.05066"
      locator: "Sections 2.2–2.3 and 4.4–4.5: compressible viscous entropy production; the finite nodal budget is recomputed locally."
---

## Example

Take $d=1$, $R=1$, $\gamma=2$, $c_v=1$, $s_0=0$, and three periodic nodes with $H=I_3$ and

$$D=\frac12\begin{pmatrix}0&1&-1\\-1&0&1\\1&-1&0\end{pmatrix}.$$

Use states $U_1=(1,0,1)$, $U_2=(1,0,2)$, and $U_3=(1,0,1)$. The Euler-only entropy-conservative operator has zero total mathematical-entropy rate at this state; adding the model viscous term gives the exact rate $-\kappa/8$.

## Verification


**Given:** The three-node data above, $\kappa>0$, the SBP flux-differencing formula, and the entropy-variable viscous block.

[F1] [[def-periodic-sbp-compressible-viscous-scheme]]: the Euler term is $2D F^{\mathrm{ec}}(U_i,U_\ell)$, the viscous term is $D(K_{11}(U_i)(Dv)_i)$, and the periodic grid satisfies $D^T=-D$ and $D\mathbf1=0$.

[F2] [[lem-ideal-gas-entropy-conservative-flux-properties]]: $F^{\mathrm{ec}}(U_i,U_\ell)=F^{\mathrm{ec}}(U_\ell,U_i)$ and $(v_\ell-v_i)^TF^{\mathrm{ec}}(U_i,U_\ell)=\psi(U_\ell)-\psi(U_i)$.

[F3] [[lem-compressible-viscous-flux-entropy-variable-factorization]]: the one-dimensional nodal viscous entropy production is $2\mu T|G^0|^2+\zeta T(\operatorname{tr}G)^2+\kappa T^2(Dv_E)^2$.

[F4] [[lem-compressible-ideal-gas-entropy-pair-and-variables]]: $v=\nabla_U\eta$, $v_m=u/T$, and $v_E=-1/T$.

1.1 The displayed $D$ is skew-symmetric, and each row sums to zero, so with $H=I_3$ it satisfies [F1]. The states have $\rho_i=1$, $p_i=E_i>0$, and $T_i=E_i$, hence are admissible. [F1, given, algebra]

2.1 Formula [F4] gives $v_{E}=(-1,-1/2,-1)$ and $v_m=(0,0,0)$. Multiplication by $D$ gives $Dv_E=(1/4,0,-1/4)$ and $Dv_m=0$. Since $u_i=0$, the strain array $G$ in [F3] vanishes at every node. [F1, F3, F4, step 1.1, algebra]

2.2 By [F4] and the chain rule, the Euler-only operator has entropy derivative $-2\sum_{i,\ell}D_{i\ell}v_i^TF^{\mathrm{ec}}(U_i,U_\ell)$. Skew-symmetry and [F2] rewrite this as $-\sum_{i,\ell}D_{i\ell}(\psi(U_i)-\psi(U_\ell))=0$, since both row and column sums of $D$ vanish. [F1, F2, F4, step 1.1, algebra]

3.1 For the viscous term, [F4] and matrix skew-symmetry give the entropy derivative $v^TDW=-(Dv)^TW=-\sum_i(Dv_i)^TK_{11}(U_i)(Dv_i)$ for the nodal flux array $W_i=K_{11}(U_i)(Dv)_i$. The zero strain and $T=(1,2,1)$ from step 1.1 reduce [F3] to $-\kappa\sum_iT_i^2(Dv_{E,i})^2=-\kappa(1/16+0+1/16)=-\kappa/8$. Thus adding viscosity changes the Euler-only rate from zero to the stated negative value. [F1, F3, F4, step 1.1, step 2.1, algebra] ∎
