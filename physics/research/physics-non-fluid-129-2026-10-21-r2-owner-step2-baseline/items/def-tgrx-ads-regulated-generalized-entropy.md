---
id: def-tgrx-ads-regulated-generalized-entropy
kind: definition
title: Regulated generalized entropy for AdS candidate surfaces
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: physics
library: physics
dependency_level: 2
deps:
  - def-tgr-regulated-generalized-entropy
dependency_roles:
  def-tgr-regulated-generalized-entropy: formulation-prerequisite
justified_by: []
aliases: []
forward_refs: []
physical_scope: >
  A model definition for finite-regulator generalized entropy on a supplied
  class of spacelike codimension-two bulk surfaces with fixed boundary anchor
  and homology class. It assigns a renormalized value only when the named
  combined sequence converges finitely in its fixed scheme. It asserts no
  candidate existence, convergence, scheme independence, gravitational field
  equation, entropy dictionary, or monotonicity law.
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Ahmed Almheiri, Thomas Hartman, Juan Maldacena, Edgar Shaghoulian, and Amirhossein Tajdini, The entropy of Hawking radiation, §§6 and 8"
      url: "https://arxiv.org/html/2006.06872"
      locator: "Full-text review; §§6 and 8, equations (6.2) and (8.2), for area plus regulated semiclassical bulk entropy on a surface and its associated region. The local definition supplies its own finite-regulator and convergence conditions."
---

## Definition

Fix a smooth Lorentzian bulk spacetime $(M,g)$ and a supplied timelike conformal boundary. A **boundary Cauchy slice** is a smooth spacelike hypersurface of that boundary which every inextendible causal curve in the boundary meets exactly once. A **boundary region** $A$ is a relatively compact open subset of such a slice with smooth boundary $\partial A$. Fix a specified homology class $\mathcal H_A$ and a supplied class $\mathcal X_A$ (which may be empty) of smooth embedded codimension-two surfaces $X$, meaning $\dim X=\dim M-2$, with $\partial X=\partial A$. **Spacelike** means that the induced metric on $X$ is positive definite. Membership in $\mathcal H_A$ means that the model supplies an admissible bulk region $R_X$ whose relative boundary is $A\cup X$ on its chosen bulk Cauchy slice. The existence of any such surface is input data, not a consequence of this definition.

A named finite-regulator sequence for $X\in\mathcal X_A$ consists of labels $(\Lambda_n)_{n\ge1}$, nonzero finite-dimensional complex inner-product spaces $H_{\mathrm{in},n}(X)$ and $H_{\mathrm{out},n}(X)$, a density operator $\rho_n(X)$ on their ordered tensor product, and a finite assigned geometric value $S_{\mathrm{grav},n}[X]$ for each $n$. A **density operator** here is a self-adjoint endomorphism with nonnegative eigenvalues and trace one. The factor $H_{\mathrm{out},n}(X)$ represents the regulated bulk region $R_X$ and $H_{\mathrm{in},n}(X)$ its complementary factor; both factors and the state are supplied model data. Take $k_B>0$ in $\mathrm{J\,K^{-1}}$. Define $\rho_{\mathrm{out},n}(X)$ by tracing the first, $H_{\mathrm{in},n}(X)$, factor out of the ordered tensor product, using the finite partial-trace convention of the previously defined regulated entropy: in orthonormal bases $(e_i)$ and $(f_a)$ of the two factors, the $(a,b)$ entry is $\sum_i(\rho_n(X))_{(i,a),(i,b)}$. That convention proves the resulting endomorphism is a basis-independent density operator. With natural logarithms and $0\log0:=0$, set

$$S_{\mathrm{bulk},n}[R_X]:=-k_B\operatorname{tr}\!\left(\rho_{\mathrm{out},n}(X)\log\rho_{\mathrm{out},n}(X)\right),\qquad S_{\mathrm{gen},n}[X]:=S_{\mathrm{grav},n}[X]+S_{\mathrm{bulk},n}[R_X].$$

Require each $S_{\mathrm{grav},n}[X]$ to have units $\mathrm{J\,K^{-1}}$; its geometric terms, counterterms, and finite normalization are fixed model data in one declared regulator and renormalization scheme. Assign $S_{\mathrm{gen}}^{\mathrm{ren}}[X]$ exactly when the combined sequence $(S_{\mathrm{gen},n}[X])_{n\ge1}$ converges to a finite real number in that scheme, and then set it equal to that limit. No separate convergence of the two summands is required. If the combined sequence lacks a finite limit, no renormalized value is assigned.

For a smooth one-parameter family $X_\epsilon\in\mathcal X_A$ with fixed boundary anchor, fixed homology class, and $X_0=X$, let $V$ be its initial smooth normal velocity field, so $V_p\in(T_pX)^\perp_g$ and $V=0$ on $\partial X$. When the derivative exists, define the first variation by $\delta_V S_{\mathrm{gen}}^{\mathrm{ren}}[X]:=\left.\frac{d}{d\epsilon}S_{\mathrm{gen}}^{\mathrm{ren}}[X_\epsilon]\right|_{\epsilon=0}$. Call $X$ **quantum stationary** when this derivative exists and is zero for every such allowed family. The term records the quantum bulk-entropy contribution to the functional; it does not assert a universal semiclassical or microscopic interpretation.

## Definition references

[[def-tgr-regulated-generalized-entropy]]

[Ahmed Almheiri et al., *The entropy of Hawking radiation*](https://arxiv.org/html/2006.06872)

## Remarks

The current `def-tgr-regulated-generalized-entropy` supplier is restricted to one specified compact section of a smooth null hypersurface. This definition supplies a separate candidate-surface model for the AdS page; it borrows the fixed-scheme and entropy-unit convention only and does not claim that the null-screen domain already covers these AdS surfaces.
