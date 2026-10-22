---
id: def-tgrx-ads-regulated-generalized-entropy
kind: definition
title: Regulated generalized entropy for AdS candidate surfaces
status: published
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: physics
library: physics
dependency_level: 2
deps:
  - def-tgr-regulated-generalized-entropy
  - lem-tgrx-locally-finite-relative-chain-model
  - def-countable-choice
  - def-riemannian-volume-density
  - prop-riemannian-volume-is-the-radon-measure-of-the-riemannian-density
dependency_roles:
  def-tgr-regulated-generalized-entropy: formulation-prerequisite
  lem-tgrx-locally-finite-relative-chain-model: mathematical-premise
  def-countable-choice: mathematical-premise
  def-riemannian-volume-density: mathematical-premise
  prop-riemannian-volume-is-the-radon-measure-of-the-riemannian-density: mathematical-premise
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
verification:
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
sources:
  references:
    - title: "Ahmed Almheiri, Thomas Hartman, Juan Maldacena, Edgar Shaghoulian, and
        Amirhossein Tajdini, The entropy of Hawking radiation, §§6 and 8"
      url: "https://arxiv.org/html/2006.06872"
      locator: "Full-text review; §§6 and 8, equations (6.2) and (8.2), for area plus
        regulated semiclassical bulk entropy on a surface and its associated
        region. The local definition supplies its own finite-regulator and
        convergence conditions."
---

## Definition

Fix an integer $d\ge2$, a smooth $(d+1)$-manifold with boundary $\overline M$, its interior $M$, and a smooth Lorentzian metric $g$ on $M$ with signature $(-,+,\ldots,+)$. The model supplies a dimensionless smooth defining function $z:\overline M\to[0,\infty)$ with $z>0$ on $M$, $z=0$ and $dz\ne0$ on $\mathscr I:=\partial\overline M$, such that $\overline g:=z^2g$ extends smoothly to a nondegenerate Lorentzian metric of the same signature on $\overline M$ whose induced metric $\gamma:=\overline g|_{T\mathscr I}$ is Lorentzian. Thus $\mathscr I$ is a timelike conformal boundary. For these signature conventions, a timelike vector $v$ satisfies $\overline g(v,v)<0$, a null vector is nonzero with $\overline g(v,v)=0$, and a causal vector is nonzero with $\overline g(v,v)\le0$. A **time orientation** is a continuous choice, at every point, of one component of the timelike cone; causal vectors in the closure of that component are future-directed. The model supplies a time orientation on $(\overline M,\overline g)$, which induces one on $(\mathscr I,\gamma)$. A submanifold is **spacelike** when the metric induced on each tangent space is positive definite.

A future-directed causal curve in $(\overline M,\overline g)$ or $(\mathscr I,\gamma)$ is a locally Lipschitz map $\eta:J\to\overline M$ or $\eta:J\to\mathscr I$, respectively, from a real interval, with a nonzero future-directed tangent almost everywhere and $\overline g(\dot\eta,\dot\eta)\le0$ or $\gamma(\dot\eta,\dot\eta)\le0$. Extensions are geometric: a regular increasing reparameterization is an order-preserving locally bi-Lipschitz homeomorphism $h:J\to J_0$ onto an interval. A curve is **inextendible** if there are no such $h$, a larger interval $\widetilde J$ containing $J_0$ as a proper subinterval, and a causal curve $\widetilde\eta:\widetilde J\to\overline M$ (or to $\mathscr I$ in the boundary case) with $\widetilde\eta\circ h=\eta$. Thus a parametrization on all of $\mathbb R$ does not by itself make a curve inextendible. A **boundary Cauchy slice** $\mathcal C_{\partial}$ is a smooth embedded spacelike hypersurface in $(\mathscr I,\gamma)$ whose inverse image under every inextendible boundary causal curve consists of exactly one parameter value. A **bulk Cauchy slice** for it is a smooth embedded spacelike $d$-dimensional hypersurface $\Sigma$ of $(\overline M,\overline g)$ with $\partial\Sigma=\mathcal C_{\partial}$ whose inverse image under every inextendible causal curve in $\overline M$ consists of exactly one parameter value. This is explicitly a boundary-inclusive convention: curves may meet or run along $\mathscr I$, and no ordinary Cauchy property for the AdS interior alone is imposed. Existence of these slices is supplied model data, not a theorem about every asymptotically AdS spacetime. For each candidate $X$, the model supplies such a slice $\Sigma_X$ containing $X$; one common slice is allowed.

A **boundary region** $A$ is a relatively compact open subset of $\mathcal C_{\partial}$ (its closure is compact) with smooth boundary $\partial A$; write $\overline A$ for its closure in $\mathcal C_{\partial}$. A candidate $X$ is a smooth embedded $(d-1)$-dimensional submanifold with boundary of $\overline M$, with $X\cap\mathscr I=\partial X=\partial A$, $X\setminus\partial X\subset M$, $X\subseteq\Sigma_X$, and positive-definite induced metric $\overline g|_{TX}$ (equivalently, $g|_{TX}$ is positive definite in the interior). Set $B_A:=\mathcal C_{\partial}\setminus A$, a closed subspace of $\Sigma_X$ since $\mathcal C_{\partial}=\partial\Sigma_X$ is closed and $A$ is open in it. Use the ambient locally finite mod-two relative chain model as follows. A chain in $C_k^{\mathrm{lf}}(\Sigma_X)$ is a formal sum of continuous singular $k$-simplex maps into $\Sigma_X$ such that every point has a neighborhood meeting only finitely many nonzero simplex images. The subgroup $C_k^{\mathrm{lf}}(\Sigma_X;B_A)$ consists of chains whose simplex images all lie in $B_A$, and $C_k^{\mathrm{lf}}(\Sigma_X,B_A)$ is the quotient with the induced face boundary; its homology is $H_k^{\mathrm{lf}}(\Sigma_X,B_A;\mathbb Z_2)$. The mod-two coefficients mean $1+1=0$. The model supplies a finite fundamental chain $a_X$ for the compact manifold with boundary $\overline A$ and an ambient locally finite fundamental chain $x$ for $X$, with boundaries supported in $\partial A$. Here fundamental means that, at every interior point of the represented manifold, the finite chain of simplices whose images contain that point has the unique nonzero mod-two local homology class. These are supplied chain data; local finiteness is required in the ambient slice, and is not inferred by pushing an intrinsic chain through an arbitrary nonproper inclusion. Define $\mathcal H_A$ by $[x]=[a_X]$ in $H_{d-1}^{\mathrm{lf}}(\Sigma_X,B_A;\mathbb Z_2)$. Equivalently, the model supplies a witness chain $r_X\in C_d^{\mathrm{lf}}(\Sigma_X)$ with $\partial r_X+a_X+x\in C_{d-1}^{\mathrm{lf}}(\Sigma_X;B_A)$. The specified bulk region $R_X\subseteq\Sigma_X$ is part of the model data represented by this witness; when $R_X$ is an ordinary bulk region, its supplied ambient locally finite fundamental chain is used. A proper compatible locally finite triangulation with the finite local fundamental-class certificates described above is one sufficient construction by mod-two face cancellation, not a requirement on the full candidate class. The supplied class $\mathcal X_A$ (possibly empty) includes all this slice and chain data; no candidate, region, chain or triangulation existence theorem is asserted.

A named finite-regulator sequence for $X\in\mathcal X_A$ consists of labels $(\Lambda_n)_{n\ge1}$, nonzero finite-dimensional complex inner-product spaces $H_{\mathrm{in},n}(X)$ and $H_{\mathrm{out},n}(X)$, a density operator $\rho_n(X)$ on their ordered tensor product, and a finite assigned geometric value $S_{\mathrm{grav},n}[X]$ for each $n$. A **density operator** here is a self-adjoint endomorphism with nonnegative eigenvalues and trace one. The factor $H_{\mathrm{out},n}(X)$ represents the regulated bulk region $R_X$ and $H_{\mathrm{in},n}(X)$ its complementary factor; both factors and the state are supplied model data. Take $k_B>0$ in $\mathrm{J\,K^{-1}}$. Define $\rho_{\mathrm{out},n}(X)$ by tracing the first, $H_{\mathrm{in},n}(X)$, factor out of the ordered tensor product, using the finite partial-trace convention in the finite-regulator outside-entropy definition: in orthonormal bases $(e_i)$ and $(f_a)$ of the two factors, the $(a,b)$ entry is $\sum_i(\rho_n(X))_{(i,a),(i,b)}$. The finite matrix argument in that definition proves the resulting endomorphism is a basis-independent density operator. With natural logarithms and $0\log0:=0$, set

$$S_{\mathrm{bulk},n}[R_X]:=-k_B\operatorname{tr}\!\left(\rho_{\mathrm{out},n}(X)\log\rho_{\mathrm{out},n}(X)\right),\qquad S_{\mathrm{gen},n}[X]:=S_{\mathrm{grav},n}[X]+S_{\mathrm{bulk},n}[R_X].$$

Require each $S_{\mathrm{grav},n}[X]$ to have units $\mathrm{J\,K^{-1}}$; its geometric terms, counterterms, and finite normalization are fixed model data in one declared regulator and renormalization scheme. On the optional Einstein–Hilbert area branch, the same fixed scheme also specifies, for each label $\Lambda_n$ and candidate, a dimensionless Borel function $0\le\chi_{\Lambda_n,X}\le1$ with compact support $K_{n,X}$ in $X^\circ:=X\setminus\partial X$. Put $h_X:=g|_{TX^\circ}$, a smooth positive-definite induced metric. Its density is $\mu_{h_X}=\sqrt{\det(h_{ab})}\,|dy^1\cdots dy^{d-1}|$ in a surface chart. The determinant transformation $h_y=J^Th_xJ$ gives the absolute-Jacobian density law. Under Countable Choice, meaning that every countable family of nonempty sets has a choice function, the density determines the corresponding compact-finite Borel measure $\operatorname{vol}_{h_X}$, independent of charts and orientation (compact-finite means finite on compact sets). Define the finite regulator-specific physical area by

$$\operatorname{Area}_{\Lambda_n}[X]:=\int_{X^\circ}\chi_{\Lambda_n,X}\,d\operatorname{vol}_{h_X},\qquad 0\le\operatorname{Area}_{\Lambda_n}[X]\le\operatorname{vol}_{h_X}(K_{n,X})<\infty.$$

The bound follows directly from $0\le\chi\le1$ and compact finiteness. Smooth cutoffs give the usual intrinsic integral $\int\chi\mu_{h_X}$; sharp compact Borel cutoffs $\chi=\mathbf1_K$ are included. The measure domain here is the Borel domain, with no implicit completion. The geometric area has units $\mathrm{m^{d-1}}$ in the model's length convention. Countable Choice is carried precisely for this measure/integration interface, not for the chain algebra. With supplied $G_{\Lambda_n}>0$ of units $\mathrm{m^d\,kg^{-1}\,s^{-2}}$, this branch sets

$$S_{\mathrm{grav},n}[X]=\frac{k_Bc^3\operatorname{Area}_{\Lambda_n}[X]}{4G_{\Lambda_n}\hbar}+S_{\mathrm{other},n}[X],$$

where $c$ has units $\mathrm{m\,s^{-1}}$, $\hbar$ has units $\mathrm{J\,s}$, and the finite $S_{\mathrm{other},n}$ includes the scheme's specified counterterms and finite normalization. The cutoff functions, their relation to $\Lambda_n$, and every subtraction are fixed by that named scheme; no unregulated physical-metric area of a boundary-anchored surface is substituted. General assigned finite $S_{\mathrm{grav},n}$ data outside this optional area branch remain allowed.

Assign $S_{\mathrm{gen}}^{\mathrm{ren}}[X]$ exactly when the combined sequence $(S_{\mathrm{gen},n}[X])_{n\ge1}$ converges to a finite real number in that scheme, and then set it equal to that limit. No separate convergence of the two summands is required. If the combined sequence lacks a finite limit, no renormalized value is assigned.

A smooth one-parameter candidate family means a jointly smooth map $F:(-\epsilon_0,\epsilon_0)\times S\to\overline M$, where $\epsilon_0>0$ and $S$ is a fixed smooth $(d-1)$-manifold with boundary, such that each $F_\epsilon:=F(\epsilon,\cdot)$ is an embedding with image $X_\epsilon\in\mathcal X_A$, $F_\epsilon(\partial S)=\partial A$ for the same fixed boundary region $A$, and $X_0=X$. Every member comes with its own supplied slice and chains satisfying $[x_\epsilon]=[a_{X_\epsilon}]$ in $H_{d-1}^{\mathrm{lf}}(\Sigma_{X_\epsilon},B_A;\mathbb Z_2)$. In this definition, preserving the homology condition means precisely this memberwise relative-chain criterion for the same $A$; it does not compare classes in different groups or assume an identification between the slices. The initial velocity is $V_{F_0(s)}:=\partial_\epsilon F(0,s)$. Require it to be smooth and orthogonal to $T_pX$ at every interior point $p=F_0(s)$, meaning $g(V_p,w)=0$ for every $w\in T_pX$, and to extend smoothly by zero at the fixed anchor. When it exists, define this specified family's first variation by $\delta_V S_{\mathrm{gen}}^{\mathrm{ren}}[X]:=\left.\frac{d}{d\epsilon}S_{\mathrm{gen}}^{\mathrm{ren}}[X_\epsilon]\right|_{\epsilon=0}$. Call $X$ **quantum stationary** when this derivative exists and is zero for every such allowed family. No family existence or identification of different homology groups is asserted. The term records the quantum bulk-entropy contribution to the functional; it does not assert a universal semiclassical or microscopic interpretation.

## Definition references

[[def-tgr-regulated-generalized-entropy]]

[[lem-tgrx-locally-finite-relative-chain-model]]

[[def-riemannian-volume-density]]

[[prop-riemannian-volume-is-the-radon-measure-of-the-riemannian-density]]

[[def-countable-choice]]

[Ahmed Almheiri et al., *The entropy of Hawking radiation*](https://arxiv.org/html/2006.06872)

## Remarks

The current `def-tgr-regulated-generalized-entropy` supplier is restricted to one specified compact section of a smooth null hypersurface. This definition supplies a separate candidate-surface model for the AdS page; it borrows the fixed-scheme and entropy-unit convention only and does not claim that the null-screen domain already covers these AdS surfaces.
