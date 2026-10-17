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
  - lem-emg-lorentz-hodge-calculus
  - def-countable-choice
  - thm-polar-coordinates-formula-for-lebesgue-measure
  - thm-ftc-second-part
  - thm-continuous-implies-integrable
  - thm-real-power-continuity-and-derivatives
dependency_roles:
  def-emg-matter-formal-systems: mathematical-premise
  thm-emg-selected-matter-energy-conditions: mathematical-premise
  thm-emg-charged-dust-projection: mathematical-premise
  lem-emg-lorentz-hodge-calculus: mathematical-premise
  def-countable-choice: mathematical-premise
  thm-polar-coordinates-formula-for-lebesgue-measure: mathematical-premise
  thm-ftc-second-part: mathematical-premise
  thm-continuous-implies-integrable: mathematical-premise
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
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Statement

Use the field, stress, matter, unit and curvature conventions of [[def-emg-matter-formal-systems]]. Let $U\subseteq M$ be open, let $\Lambda\in\mathbb R$ be constant, and define the Einstein residual for the source-free field model by

$$ \mathscr R_{ab}(g,F;\Lambda):=G_{ab}(g)+\Lambda g_{ab}-\kappa T^{\mathrm{EM}}_{ab}(g,F). $$

Suppose $G_{ab}(g)+\Lambda g_{ab}=0$ on $U$, and let $F_0$ be a smooth real two-form with $dF_0=0$ and $\nabla_a(F_0)^{ab}=0$, the source-free form of the Maxwell equations in [[def-emg-matter-formal-systems]]. For every real dimensionless $\delta$, the field $F_\delta:=\delta F_0$ obeys those same source-free equations and

$$ \mathscr R_{ab}(g,F_\delta;\Lambda)=-\kappa\delta^2 T^{\mathrm{EM}}_{ab}(g,F_0). $$

This is an exact residual identity on the fixed metric. If $\delta\ne0$ and $F_0$ is nonzero at a point, its observer energy there is positive and the residual is nonzero there; this does not estimate the distance to a different coupled solution.

Separately, let $\rho,\sigma\in C^1(\Omega)$ and a $C^2$ future timelike field $U$ with $g(U,U)=-c^2$ define charged dust on an open $\Omega\subseteq U$, with $\rho>0$, $T_m^{ab}=\rho U^aU^b$, $j^a=\sigma U^a$, and the formal matter-exchange equation of [[def-emg-matter-formal-systems]]. For any dimensionless $\eta>0$, replacing $(\rho,\sigma)$ by $(\eta\rho,\eta\sigma)$ multiplies $T_m$ and $j$ by $\eta$, leaves $\alpha=\sigma/\rho$ unchanged, and leaves the dust acceleration equation $\rho U^a\nabla_aU^b=\sigma F^b{}_cU^c$ unchanged when the prescribed $F$ and $U$ are held fixed. The sourced Maxwell equation must still match the changed current. If both $F$ and $j$ are scaled by $\eta$, Maxwell's equations remain linear but the electromagnetic stress scales by $\eta^2$, whereas the dust stress scales by $\eta$; no general coupled-solution family follows.

For a flat background with $\Lambda=0$ and $T_m=0$, a nonzero source-free Maxwell field cannot solve the exact Einstein equation with the unchanged Minkowski metric, because its observer energy density is positive somewhere.

Finally, take $M=\mathbb R^4$ with length coordinates $x^0=ct$ and $\mathbf x=(x^1,x^2,x^3)$, Minkowski metric $\eta=\operatorname{diag}(-1,1,1,1)$, standard orientation, and future direction $\partial_0$. Let $\Omega=\mathbb R^3$, $I=\mathbb R$, and use the Euclidean norm $|\mathbf x|_2=(\sum_{i=1}^3(x^i)^2)^{1/2}$ and Lebesgue volume $d^3x$ in these Cartesian coordinates. Consider only the prescribed Coulomb profile on the finite annulus $\mathcal A_\ell:=\{\mathbf x\in\mathbb R^3:\ell<|\mathbf x|_2<2\ell\}$, where $\ell>0$ is a length and $Q\ne0$ is a charge parameter with units $\mathrm C$. Put $r:=|\mathbf x|_2$, $\mathbf e_r:=\mathbf x/r$, $\mathbf E(\mathbf x)=Q(4\pi\varepsilon_0r^2)^{-1}\mathbf e_r$, and $\mathbf B=0$. Its Maxwell energy on that annulus is

$$ \mathcal E_\ell=\int_{\mathcal A_\ell}\frac{\varepsilon_0}{2}|\mathbf E|^2\,d^3x =\frac{Q^2}{16\pi\varepsilon_0\ell}. $$

Thus this fixed-charge Coulomb cutoff family has diverging shell energy as $\ell\downarrow0$. This finite-annulus calculation asserts no point-source construction, self-field evaluation, or obstruction theorem for arbitrary regularizations.

## Facts & Assumptions

**Given:** The formal Einstein–Maxwell matter conventions of [[def-emg-matter-formal-systems]], a fixed vacuum metric on $U$, a smooth source-free two-form $F_0$, the charged-dust exchange equation where used, and, for the Coulomb clause, $\ell>0$, $Q\ne0$, and the prescribed radial field on $\mathcal A_\ell$.

[F1] [[def-emg-matter-formal-systems]] defines $T_{\mathrm{EM}}^{ab}=\mu_0^{-1}(F^{ac}F^b{}_c-\tfrac14g^{ab}F_{cd}F^{cd})$ and lowers both indices with $g$; hence $T^{\mathrm{EM}}_{ab}=\mu_0^{-1}(F_{ac}F_b{}^c-\tfrac14g_{ab}F_{cd}F^{cd})$. It also gives $\varepsilon_0=(\mu_0c^2)^{-1}$, the formal source-free equations, the dust tensors, and the SI convention $F_{0i}=-E_i/c$, $F_{ij}=\epsilon_{ijk}B_k$.

[F2] [[thm-emg-selected-matter-energy-conditions]] proves that $T_{\mathrm{EM}}$ has observer energy density $u=(|E|^2/c^2+|B|^2)/(2\mu_0)$ and that this density is positive whenever $F$ is nonzero in that observer frame. It makes no general matter positivity assumption.

[F3] [[thm-emg-charged-dust-projection]] states that, for $\rho>0$, the matter-exchange equation is equivalent to continuity together with $\rho U^a\nabla_aU^b=\sigma F^b{}_cU^c$.

[F4] [[lem-emg-lorentz-hodge-calculus]] gives the coordinate formula for $d$, from which its real-linearity follows; covariant differentiation and metric raising are linear in the tensor field.

[F5] [[def-countable-choice]] is the exact indexed axiom $\mathrm{AC}_\omega$: every specified sequence of nonempty sets has a choice function. [[thm-polar-coordinates-formula-for-lebesgue-measure]] assumes only this choice strength and gives the radial integration formula for every nonnegative Borel function on $\mathbb R^3$.

[F6] [[thm-real-power-continuity-and-derivatives]] gives $(r^{-1})'=-r^{-2}$ and continuity of $r\mapsto r^{-2}$ on $(0,\infty)$. [[thm-continuous-implies-integrable]] states that every continuous real function on a closed nondegenerate interval is integrable there; [[thm-ftc-second-part]] evaluates its integral when a differentiable primitive is supplied.

[A1] The fixed-metric vacuum and source-free field hypotheses in the first clause are independent assumptions. No Einstein or Maxwell existence theorem is used.

[A2] The Coulomb profile is assumed only on the finite annulus $\mathcal A_\ell$; no field, source, or potential is defined at the origin.

## Proof


1.1 By [F4], exterior differentiation is real-linear, so $dF_\delta=\delta\,dF_0=0$. The connection and metric raising in [F1] are linear in the field strength, so $\nabla_a(F_\delta)^{ab}=\delta\nabla_a(F_0)^{ab}=0$. Every term in the Maxwell tensor is quadratic in $F$, hence $T_{\mathrm{EM}}(g,F_\delta)=\delta^2T_{\mathrm{EM}}(g,F_0)$. [given, F1, F4, algebra]

1.2 The definitions in [F1] give $T_m(\eta\rho,U)=\eta T_m(\rho,U)$ and $j(\eta\sigma,U)=\eta j(\sigma,U)$. On $\{\rho>0\}$, $(\eta\sigma)/(\eta\rho)=\sigma/\rho$. The force equation in [F3] therefore has both sides multiplied by $\eta$ if $F$ and $U$ are held fixed. [given, F1, F3, algebra]

1.3 At any point where $F_0\ne0$, choose a future unit observer and its positively oriented orthonormal rest frame. Then $E$ and $B$ cannot both vanish, since the field components are $F_{0i}=-E_i/c$ and $F_{ij}=\epsilon_{ijk}B_k$ by [F1]. With $\mu_0>0$, the density formula [F2] gives $u>0$. Minkowski space has $G_{ab}=0$; with $\Lambda=0$ and $T_m=0$, the Einstein equation would require $0=\kappa T^{\mathrm{EM}}_{ab}$, contradicted by this positive observer contraction and $\kappa>0$ from [F1]. [F1, F2, given, algebra]

1.4 The Coulomb energy density on $\mathcal A_\ell$ is $\frac{\varepsilon_0}{2}|\mathbf E|^2=\frac{Q^2}{32\pi^2\varepsilon_0 r^4}$ by [F2] and $\varepsilon_0=(\mu_0c^2)^{-1}$ from [F1], where $r=|\mathbf x|$. With $d^3x$ denoting Lebesgue measure in Cartesian coordinates, define the nonnegative Borel function $h_\ell:\mathbb R^3\to[0,\infty)$ to equal $Q^2/(32\pi^2\varepsilon_0|\mathbf x|^4)$ when $\ell<|\mathbf x|<2\ell$ and $0$ otherwise. Then $\mathcal E_\ell=\int_{\mathbb R^3}h_\ell\,d^3x$, and [F5] gives $ \mathcal E_\ell=4\pi\int_\ell^{2\ell}\frac{Q^2}{32\pi^2\varepsilon_0r^4}r^2\,dr =\frac{Q^2}{8\pi\varepsilon_0}\int_\ell^{2\ell}r^{-2}\,dr. $ The field profile is used only on the finite annulus. [A2, F1, F2, F5, algebra]

2.1 By the quadratic formula in [F1] and step 1.1, $T^{\mathrm{EM}}_{ab}(g,F_\delta)=\delta^2T^{\mathrm{EM}}_{ab}(g,F_0)$. Substituting this identity and the assumed vacuum equation into the displayed definition of $\mathscr R$ gives $\mathscr R_{ab}(g,F_\delta;\Lambda)=-\kappa\delta^2T^{\mathrm{EM}}_{ab}(g,F_0)$, as claimed. [given, A1, F1, step 1.1, algebra]

2.2 The sourced Maxwell equation is $\nabla_aF^{ab}=-\mu_0j^b$ by [F1]; replacing $j$ by $\eta j$ while leaving $F$ fixed changes its right-hand side to $-\eta\mu_0j^b$, so it remains the same equation only when $(\eta-1)j=0$. If instead $(F,j)\mapsto(\eta F,\eta j)$, the Maxwell equation is preserved by linearity, but step 1.1 scales $T_{\mathrm{EM}}$ quadratically while step 1.2 scales $T_m$ linearly; the dust force equation then also has its left side scale by $\eta$ and its right side by $\eta^2$. These unequal degrees show why this scaling is not a general coupled-solution construction, while leaving special cancellations open. [F1, F3, step 1.1, step 1.2, algebra]

3.1 Because $\ell>0$, the function $r\mapsto r^{-2}$ is continuous on $[\ell,2\ell]$ by [F6] and hence is integrable there. The primitive $-r^{-1}$ has derivative $r^{-2}$ on this interval by [F6], so the fundamental theorem of calculus gives $\int_\ell^{2\ell}r^{-2}\,dr=\ell^{-1}-(2\ell)^{-1}=(2\ell)^{-1}$. Hence $\mathcal E_\ell=Q^2/(16\pi\varepsilon_0\ell)$. For every $M>0$, choosing $0<\ell<Q^2/(16\pi\varepsilon_0M)$ gives $\mathcal E_\ell>M$; therefore the shell energies diverge as $\ell\downarrow0$ at fixed $Q\ne0$. [given, F6, step 1.4, algebra] ∎
