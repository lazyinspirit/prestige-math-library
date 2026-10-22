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

Fix an integer $d\ge2$, a smooth time-oriented $(d+1)$-manifold with boundary $\overline M$, its interior $M$, and a smooth Lorentzian metric $g$ on $M$ with signature $(-,+,\ldots,+)$. The model supplies a dimensionless smooth defining function $z:\overline M\to[0,\infty)$ with $z>0$ on $M$, $z=0$ and $dz\ne0$ on $\mathscr I:=\partial\overline M$, such that $\overline g:=z^2g$ extends smoothly to a nondegenerate metric on $\overline M$ whose induced metric $\gamma:=\overline g|_{T\mathscr I}$ is Lorentzian. Thus $\mathscr I$ is a timelike conformal boundary; its time orientation is fixed as model data.

A future-directed causal curve in either $(M,g)$ or $(\mathscr I,\gamma)$ is a locally Lipschitz map $\eta:J\to M$ or $\eta:J\to\mathscr I$, respectively, from an interval $J\subseteq\mathbb R$, whose tangent exists almost everywhere, is nonzero and future-directed almost everywhere, and obeys $g(\dot\eta,\dot\eta)\le0$ or $\gamma(\dot\eta,\dot\eta)\le0$, respectively. Such a curve is **inextendible** if it has no extension of the same kind to a strictly larger interval. A **boundary Cauchy slice** $\mathcal C_{\partial}$ is a smooth embedded spacelike hypersurface of $(\mathscr I,\gamma)$ that meets every inextendible future-directed causal curve in $\mathscr I$ at exactly one point. A **bulk Cauchy slice** $\Sigma$ for this boundary slice is a smooth embedded spacelike $d$-dimensional hypersurface of $(\overline M,\overline g)$ with $\partial\Sigma=\mathcal C_{\partial}$ such that $\Sigma\cap M$ meets every inextendible future-directed causal curve in $(M,g)$ exactly once. For each candidate $X$, the model supplies a bulk Cauchy slice $\Sigma_X$ containing $X$; a model may use one common slice for all candidates.

A **boundary region** $A$ is a relatively compact open subset of $\mathcal C_{\partial}$ with smooth boundary $\partial A$; write $\overline A$ for its closure in $\mathcal C_{\partial}$. A candidate $X$ is a smooth embedded $(d-1)$-dimensional submanifold with boundary of $\overline M$, with $X\cap\mathscr I=\partial X=\partial A$, $X\setminus\partial X\subset M$, $X\subseteq\Sigma_X$, and positive-definite induced metric $\overline g|_{TX}$ (equivalently, $g|_{TX}$ is positive definite in the interior). Set $B_A:=\mathcal C_{\partial}\setminus A$. For each candidate use singular relative homology with coefficients in $\mathbb Z_2$ for the pair $(\Sigma_X,B_A)$. Since $\partial\overline A=\partial X=\partial A\subset B_A$, choose mod-two fundamental chains $a_X$ of $\overline A$ and $x$ of $X$; they are relative cycles. Here $\mathcal H_A$ denotes the condition $[x]=[a_X]$ in $H_{d-1}(\Sigma_X,B_A;\mathbb Z_2)$. Explicitly, the model supplies a relative $d$-chain $R_X$, represented by a singular chain $r_X\in C_d(\Sigma_X;\mathbb Z_2)$, such that $\partial r_X+a_X+x\in C_{d-1}(B_A;\mathbb Z_2)$; thus additional boundary supported in $B_A$ is discarded in the relative chain complex. When $R_X$ is represented by an ordinary bulk region, its fundamental chain is used. The supplied candidate class $\mathcal X_A$ (which may be empty) includes this slice and chain data; existence of any such candidate is input data, not a consequence of this definition.

A named finite-regulator sequence for $X\in\mathcal X_A$ consists of labels $(\Lambda_n)_{n\ge1}$, nonzero finite-dimensional complex inner-product spaces $H_{\mathrm{in},n}(X)$ and $H_{\mathrm{out},n}(X)$, a density operator $\rho_n(X)$ on their ordered tensor product, and a finite assigned geometric value $S_{\mathrm{grav},n}[X]$ for each $n$. A **density operator** here is a self-adjoint endomorphism with nonnegative eigenvalues and trace one. The factor $H_{\mathrm{out},n}(X)$ represents the regulated bulk region $R_X$ and $H_{\mathrm{in},n}(X)$ its complementary factor; both factors and the state are supplied model data. Take $k_B>0$ in $\mathrm{J\,K^{-1}}$. Define $\rho_{\mathrm{out},n}(X)$ by tracing the first, $H_{\mathrm{in},n}(X)$, factor out of the ordered tensor product, using the finite partial-trace convention of the previously defined regulated entropy: in orthonormal bases $(e_i)$ and $(f_a)$ of the two factors, the $(a,b)$ entry is $\sum_i(\rho_n(X))_{(i,a),(i,b)}$. That convention proves the resulting endomorphism is a basis-independent density operator. With natural logarithms and $0\log0:=0$, set

$$S_{\mathrm{bulk},n}[R_X]:=-k_B\operatorname{tr}\!\left(\rho_{\mathrm{out},n}(X)\log\rho_{\mathrm{out},n}(X)\right),\qquad S_{\mathrm{gen},n}[X]:=S_{\mathrm{grav},n}[X]+S_{\mathrm{bulk},n}[R_X].$$

Require each $S_{\mathrm{grav},n}[X]$ to have units $\mathrm{J\,K^{-1}}$; its geometric terms, counterterms, and finite normalization are fixed model data in one declared regulator and renormalization scheme. Assign $S_{\mathrm{gen}}^{\mathrm{ren}}[X]$ exactly when the combined sequence $(S_{\mathrm{gen},n}[X])_{n\ge1}$ converges to a finite real number in that scheme, and then set it equal to that limit. No separate convergence of the two summands is required. If the combined sequence lacks a finite limit, no renormalized value is assigned.

For a smooth one-parameter family $X_\epsilon\in\mathcal X_A$ with fixed boundary anchor, fixed homology class, and $X_0=X$, let $V$ be its initial smooth normal velocity field, so $V_p\in(T_pX)^\perp_g$ and $V=0$ on $\partial X$. When the derivative exists, define the first variation by $\delta_V S_{\mathrm{gen}}^{\mathrm{ren}}[X]:=\left.\frac{d}{d\epsilon}S_{\mathrm{gen}}^{\mathrm{ren}}[X_\epsilon]\right|_{\epsilon=0}$. Call $X$ **quantum stationary** when this derivative exists and is zero for every such allowed family. The term records the quantum bulk-entropy contribution to the functional; it does not assert a universal semiclassical or microscopic interpretation.

## Definition references

[[def-tgr-regulated-generalized-entropy]]

[Ahmed Almheiri et al., *The entropy of Hawking radiation*](https://arxiv.org/html/2006.06872)

## Remarks

The current `def-tgr-regulated-generalized-entropy` supplier is restricted to one specified compact section of a smooth null hypersurface. This definition supplies a separate candidate-surface model for the AdS page; it borrows the fixed-scheme and entropy-unit convention only and does not claim that the null-screen domain already covers these AdS surfaces.
