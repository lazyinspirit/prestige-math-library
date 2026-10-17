---
id: lem-emg-source-and-test-scaling
kind: lemma
title: Smooth source/dust scaling and test-backreaction obstructions
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 2
proof_strategy: direct
deps:
  - def-emg-matter-formal-systems
  - thm-emg-selected-matter-energy-conditions
  - thm-emg-charged-dust-projection
  - prop-emg-test-field-residual-order
  - lem-emg-lorentz-hodge-calculus
  - def-countable-choice
  - thm-polar-coordinates-formula-for-lebesgue-measure
  - thm-ftc-second-part
  - thm-real-power-continuity-and-derivatives
dependency_roles:
  def-emg-matter-formal-systems: mathematical-premise
  thm-emg-selected-matter-energy-conditions: mathematical-premise
  thm-emg-charged-dust-projection: mathematical-premise
  prop-emg-test-field-residual-order: mathematical-premise
  lem-emg-lorentz-hodge-calculus: mathematical-premise
  def-countable-choice: mathematical-premise
  thm-polar-coordinates-formula-for-lebesgue-measure: mathematical-premise
  thm-ftc-second-part: mathematical-premise
  thm-real-power-continuity-and-derivatives: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), §1.4.1, equations (1.104)–(1.111), PDF pp. 34–36 (printed pp. 28–30), and §§4.3–4.5"
      url: https://arxiv.org/pdf/gr-qc/9712019v1
      locator: "Dust tensor/current conventions and the Maxwell stress-energy tensor. Carroll uses c=1 and Gaussian electromagnetic conventions; the local claim states SI conventions from its mathematical supplier and derives each scaling itself."
    - title: "David Tong, General Relativity, complete author-hosted lecture notes, 2019, §§4.5.2–4.5.4, equations (4.47), (4.52)–(4.55), PDF pp. 190–194 (printed pp. 183–187)"
      url: https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf
      locator: "Einstein equation, Maxwell energy-momentum tensor, its field energy density, and perfect-fluid stress. Tong sets c=1; no numerical normalization is imported."
    - title: "Reinhard Meinel and Moritz Hütten, On the black hole limit of electrically counterpoised dust configurations, arXiv:1105.3807v3 (2011), §2, equations (1)–(7), PDF pp. 2–3"
      url: https://arxiv.org/pdf/1105.3807
      locator: "A selected static charged-dust Einstein–Maxwell model with current parallel to velocity and a fixed charge-to-mass ratio. It uses c=G=1 and Gaussian units; the present scaling argument does not import its coupled solutions or normalization."
verification:
  precheck: pass
---

## Statement

Use the field, stress, matter, unit and curvature conventions of [[def-emg-matter-formal-systems]]. Let $U\subseteq M$ be open, let $\Lambda\in\mathbb R$ be constant, and define the Einstein residual for the source-free field model by

$$ \mathscr R_{ab}(g,F;\Lambda):=G_{ab}(g)+\Lambda g_{ab}-\kappa T^{\mathrm{EM}}_{ab}(g,F). $$

Suppose $G_{ab}(g)+\Lambda g_{ab}=0$ on $U$, and let $F_0$ be a smooth real two-form with $dF_0=0$ and $d(\star_gF_0)=0$. For every real dimensionless $\delta$, the field $F_\delta:=\delta F_0$ obeys the same source-free Maxwell equations and

$$ \mathscr R_{ab}(g,F_\delta;\Lambda)=-\kappa\delta^2 T^{\mathrm{EM}}_{ab}(g,F_0). $$

This is an exact residual identity on the fixed metric. If $\delta\ne0$ and $F_0$ is nonzero at a point, its observer energy there is positive and the residual is nonzero there; this does not estimate the distance to a different coupled solution.

Separately, let $\rho,\sigma\in C^1(\Omega)$ and a $C^2$ future timelike field $U$ with $g(U,U)=-c^2$ define charged dust on an open $\Omega\subseteq U$, with $\rho>0$, $T_m^{ab}=\rho U^aU^b$, $j^a=\sigma U^a$, and the formal matter-exchange equation of [[def-emg-matter-formal-systems]]. For any dimensionless $\eta>0$, replacing $(\rho,\sigma)$ by $(\eta\rho,\eta\sigma)$ multiplies $T_m$ and $j$ by $\eta$, leaves $\alpha=\sigma/\rho$ unchanged, and leaves the dust acceleration equation $\rho U^a\nabla_aU^b=\sigma F^b{}_cU^c$ unchanged when the prescribed $F$ and $U$ are held fixed. The sourced Maxwell equation must still match the changed current. If both $F$ and $j$ are scaled by $\eta$, Maxwell's equations remain linear but the electromagnetic stress scales by $\eta^2$, whereas the dust stress scales by $\eta$; no general coupled-solution family follows.

For a flat background with $\Lambda=0$ and $T_m=0$, a nonzero source-free Maxwell field cannot solve the exact Einstein equation with the unchanged Minkowski metric, because its observer energy density is positive somewhere.

Finally, in Minkowski space consider only the prescribed Coulomb profile on the finite annulus $\mathcal A_\ell:=\{\mathbf x\in\mathbb R^3:\ell<|\mathbf x|<2\ell\}$, where $\ell>0$ is a length, $Q\ne0$ is a charge, $r:=|\mathbf x|$, $\mathbf e_r:=\mathbf x/r$, $\mathbf E(\mathbf x)=Q(4\pi\varepsilon_0r^2)^{-1}\mathbf e_r$, and $\mathbf B=0$. Its Maxwell energy on that annulus is

$$ \mathcal E_\ell=\int_{\mathcal A_\ell}\frac{\varepsilon_0}{2}|\mathbf E|^2\,d^3x =\frac{Q^2}{16\pi\varepsilon_0\ell}. $$

Thus this fixed-charge Coulomb cutoff family has diverging shell energy as $\ell\downarrow0$. This finite-annulus calculation asserts no point-source construction, self-field evaluation, or obstruction theorem for arbitrary regularizations.

## Facts & Assumptions

**Given:** The formal Einstein–Maxwell matter conventions of [[def-emg-matter-formal-systems]], a fixed vacuum metric on $U$, a smooth source-free two-form $F_0$, the charged-dust exchange equation where used, and, for the Coulomb clause, $\ell>0$, $Q\ne0$, and the prescribed radial field on $\mathcal A_\ell$.

[F1] [[def-emg-matter-formal-systems]] defines $T_{\mathrm{EM}}$ as a quadratic tensor in $F$, $\varepsilon_0=(\mu_0c^2)^{-1}$, the formal source-free equations, the dust tensors, and the SI convention $F_{0i}=-E_i/c$, $F_{ij}=\epsilon_{ijk}B_k$.

[F2] [[thm-emg-selected-matter-energy-conditions]] proves that $T_{\mathrm{EM}}$ has observer energy density $u=(|E|^2/c^2+|B|^2)/(2\mu_0)$ and that this density is positive whenever $F$ is nonzero in that observer frame. It makes no general matter positivity assumption.

[F3] [[thm-emg-charged-dust-projection]] states that, for $\rho>0$, the matter-exchange equation is equivalent to continuity together with $\rho U^a\nabla_aU^b=\sigma F^b{}_cU^c$.

[F4] [[prop-emg-test-field-residual-order]] gives, for a fixed vacuum metric and a smooth source-free two-form, the exact fixed-metric residual $-\kappa\delta^2T_{\mathrm{EM}}(F_0)$ under $F_0\mapsto\delta F_0$. Its residual is not a nearby-solution estimate.

[F5] [[lem-emg-lorentz-hodge-calculus]] gives real-linearity of the Hodge star and exterior derivative on the stated oriented Lorentzian four-manifold.

[F6] [[def-countable-choice]] is the exact indexed axiom $\mathrm{AC}_\omega$: every specified sequence of nonempty sets has a choice function. [[thm-polar-coordinates-formula-for-lebesgue-measure]] assumes only this choice strength and gives the radial integration formula for every nonnegative Borel function on $\mathbb R^3$.

[F7] [[thm-real-power-continuity-and-derivatives]] gives $(r^{-1})'=-r^{-2}$ on $(0,\infty)$, and [[thm-ftc-second-part]] evaluates an integral once a differentiable primitive is supplied.

[A1] The fixed-metric vacuum and source-free field hypotheses in the first clause are independent assumptions. No Einstein or Maxwell existence theorem is used.

[A2] The Coulomb profile is assumed only on the finite annulus $\mathcal A_\ell$; no field, source, or potential is defined at the origin.

## Proof


1.1 Exterior differentiation is real-linear and the Hodge star is real-linear by [F5], so $dF_\delta=\delta\,dF_0=0$ and $d(\star_gF_\delta)=\delta\,d(\star_gF_0)=0$. Each term in the Maxwell tensor of [F1] is quadratic in $F$, hence $T_{\mathrm{EM}}(g,F_\delta)=\delta^2T_{\mathrm{EM}}(g,F_0)$. [given, F1, F5, algebra]

1.2 The definitions in [F1] give $T_m(\eta\rho,U)=\eta T_m(\rho,U)$ and $j(\eta\sigma,U)=\eta j(\sigma,U)$. On $\{\rho>0\}$, $(\eta\sigma)/(\eta\rho)=\sigma/\rho$. The force equation in [F3] therefore has both sides multiplied by $\eta$ if $F$ and $U$ are held fixed. [given, F1, F3, algebra]

1.3 At any point where $F_0\ne0$, choose a future unit observer and its positively oriented orthonormal rest frame. Then $E$ and $B$ cannot both vanish, since the field components are $F_{0i}=-E_i/c$ and $F_{ij}=\epsilon_{ijk}B_k$ by [F1]. With $\mu_0>0$, the density formula [F2] gives $u>0$. Minkowski space has $G_{ab}=0$; with $\Lambda=0$ and $T_m=0$, the Einstein equation would require $0=\kappa T^{\mathrm{EM}}_{ab}$, contradicted by this positive observer contraction and $\kappa>0$ from [F1]. [F1, F2, given, algebra]

1.4 The Coulomb energy density on $\mathcal A_\ell$ is $\frac{\varepsilon_0}{2}|\mathbf E|^2=\frac{Q^2}{32\pi^2\varepsilon_0 r^4}$ by [F2] and $\varepsilon_0=(\mu_0c^2)^{-1}$ from [F1], where $r=|\mathbf x|$. Apply [F6] to this nonnegative radial Borel function, restricted to $\ell<r<2\ell$, to obtain $ \mathcal E_\ell=4\pi\int_\ell^{2\ell}\frac{Q^2}{32\pi^2\varepsilon_0r^4}r^2\,dr =\frac{Q^2}{8\pi\varepsilon_0}\int_\ell^{2\ell}r^{-2}\,dr. $ The polar-coordinate measure and the field profile are only used on the finite annulus. [A2, F1, F2, F5, algebra]

2.1 The hypotheses of [F4] are exactly the fixed vacuum metric and smooth source-free $F_0$ in [A1]. Applying [F4] with the specified real scalar $\delta$ gives $\mathscr R(g,F_\delta;\Lambda)=-\kappa\delta^2T_{\mathrm{EM}}(g,F_0)$; step 1.1 also verifies directly that the scaled field remains source-free and that its stress has this quadratic scaling. [given, A1, F4, step 1.1]

2.2 The sourced Maxwell equation is $\nabla_aF^{ab}=-\mu_0j^b$ by [F1]; replacing $j$ by $\eta j$ while leaving $F$ fixed changes its right-hand side to $-\eta\mu_0j^b$, so it remains the same equation only when $(\eta-1)j=0$. If instead $(F,j)\mapsto(\eta F,\eta j)$, the Maxwell equation is preserved by linearity, but step 1.1 scales $T_{\mathrm{EM}}$ quadratically while step 1.2 scales $T_m$ linearly; the dust force equation then also has its left side scale by $\eta$ and its right side by $\eta^2$. These unequal degrees show why this scaling is not a general coupled-solution construction, while leaving special cancellations open. [F1, F3, step 1.1, step 1.2, algebra]

3.1 The primitive $-r^{-1}$ has derivative $r^{-2}$ on $(0,\infty)$ by [F7], so $\int_\ell^{2\ell}r^{-2}\,dr=\ell^{-1}-(2\ell)^{-1}=(2\ell)^{-1}$. Hence $\mathcal E_\ell=Q^2/(16\pi\varepsilon_0\ell)$. For every $M>0$, choosing $0<\ell<Q^2/(16\pi\varepsilon_0M)$ gives $\mathcal E_\ell>M$; therefore the shell energies diverge as $\ell\downarrow0$ at fixed $Q\ne0$. [given, F7, step 1.4, algebra] ∎
