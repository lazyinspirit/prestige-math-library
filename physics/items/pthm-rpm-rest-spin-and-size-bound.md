---
id: pthm-rpm-rest-spin-and-size-bound
kind: physics-theorem
title: Rest-frame spin transport and finite-body size bounds
status: published
origin: pipeline
domain: physics
library: physics
dependency_level: 4
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "Conditional consequences of the adopted classical BMT polarization law in free and uniform-rest-magnetic-field branches, together with separate flat-body centroid and positive-energy size bounds. The BMT polarization vector and body angular-momentum vector are distinct unless an additional identification is explicitly adopted."
empirical_premises: []
deps:
  - def-countable-choice
  - def-cross-product-in-r3
  - def-em-electromagnetic-tensor
  - def-inertial-frame-and-inertial-chart
  - def-rpm-body-moments
  - def-rpm-charge-spin-model
  - def-sr-affine-minkowski-model
  - lem-rpm-bmt-transport-algebra
  - lem-rpm-body-spin-size-bound
  - lem-rpm-flat-centroid-shift
  - pthm-rpm-external-charge-action-equivalence
  - post-rpm-bmt-dipole-model
  - thm-sr-proper-time-and-observer-decomposition
  - thm-sr-proper-orthochronous-lorentz-algebra
dependency_roles:
  def-countable-choice: mathematical-premise
  def-cross-product-in-r3: mathematical-premise
  def-em-electromagnetic-tensor: formulation-prerequisite
  def-inertial-frame-and-inertial-chart: mathematical-premise
  def-rpm-body-moments: formulation-prerequisite
  def-rpm-charge-spin-model: formulation-prerequisite
  def-sr-affine-minkowski-model: mathematical-premise
  lem-rpm-bmt-transport-algebra: mathematical-premise
  lem-rpm-body-spin-size-bound: mathematical-premise
  lem-rpm-flat-centroid-shift: mathematical-premise
  pthm-rpm-external-charge-action-equivalence: physical-result
  post-rpm-bmt-dipole-model: physical-assumption
  thm-sr-proper-time-and-observer-decomposition: mathematical-premise
  thm-sr-proper-orthochronous-lorentz-algebra: mathematical-premise
sources:
  references:
    - title: "University of Virginia, Relativistic Spin Precession: the BMT Equation, Electromagnetic Theory lecture"
      url: https://galileoandeinstein.phys.virginia.edu/Elec_Mag/2022_Lectures/EM_71_g-2.html
      locator: "Full section “Relativistic Spin Precession: the BMT Equation,” including its rest-frame torque, covariant equation and coefficient matching; the exact conditional branches are derived locally."
    - title: "L. Filipe Costa and José Natário, Center of mass, spin supplementary conditions, and the momentum of spinning particles, arXiv:1410.6443v2; published in Equations of Motion in Relativistic Gravity, Fundamental Theories of Physics 179 (Springer, 2015)"
      url: https://arxiv.org/html/1410.6443v2
      locator: Section 2, observer-dependent centroid shifts, the centroid disk and the Møller radius; the positive-energy size estimate is proved here under its exact integral hypotheses.
verification:
  verified:
    model: "gpt-6-luna, gpt-6.1-sol, and delegated Codex review/repair agents; see completed run evidence"
    verdict: "Owner accepted completed review and adjudication evidence for publication"
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    delegated_by: "owner; publication instruction 2026-10-15"
---

## Statement

Assume $\mathrm{AC}_\omega$ of [[def-countable-choice]] for the canonical tangent-bundle and connection suppliers used by the BMT transport and charged-action equivalence. No full Axiom of Choice is assumed.

Adopt the charged-body quantities of [[def-rpm-charge-spin-model]], the SI field convention of [[def-em-electromagnetic-tensor]], and the classical BMT law [[post-rpm-bmt-dipole-model]]. For a trajectory stationary under the local action postulate, the translational force equation is supplied by [[pthm-rpm-external-charge-action-equivalence]]. In flat Minkowski spacetime let $m>0$, $q,g_s\in\mathbb R$, $\alpha=q/m$, $G=g_s/2$, and let $U,s$ satisfy
$$D_\tau U=\alpha F^\sharp(U),\qquad D_\tau s=\alpha\left[GF^\sharp(s)-(G-1)\frac{U}{c^2}g(s,F^\sharp(U))\right],\qquad g(U,U)=-c^2,\quad g(U,s)=0.$$
The tensor equation is covariant under proper orthochronous Lorentz transformations of the complete field and worldline data. If $F=0$, then $D_\tau U=0$ and $D_\tau s=0$. For any acceleration $a=D_\tau U$ within the Lorentz-force model, the $G=0$ branch is Fermi–Walker transport on the orthogonal spin subspace:
$$D_\tau s=\frac{1}{c^2}\bigl(Ug(a,s)-a g(U,s)\bigr)=\frac{U}{c^2}g(a,s).$$
For the uniform-field branch, choose an inertial frame $(o;e_0,e_1,e_2,e_3)$ of [[def-inertial-frame-and-inertial-chart]] with $e_0=U/c$ for the stationary trajectory and with the positively oriented orthonormal spatial basis $(e_1,e_2,e_3)$. Let $\mathbf E=0$ and let the constant spatial field be $\mathbf B\ne0$; its norm and cross product are those of the frame's positive-definite spatial structure. Then $U=(c,\mathbf0)$ is stationary, $\widehat{\mathbf B}:=\mathbf B/|\mathbf B|$, and for $\mathbf s_0:=\mathbf s(\tau_0)$ define $\mathbf s_{\parallel,0}:=(\mathbf s_0\cdot\widehat{\mathbf B})\widehat{\mathbf B}$ and $\mathbf s_{\perp,0}:=\mathbf s_0-\mathbf s_{\parallel,0}$. The $G$ branch has the exact solution
$$\mathbf s(\tau)=\mathbf s_{\parallel,0}+\cos(\omega\Delta\tau)\mathbf s_{\perp,0}-\sin(\omega\Delta\tau)\widehat{\mathbf B}\times\mathbf s_{\perp,0},\qquad \omega=\frac{qG}{m}|\mathbf B|,\quad \Delta\tau=\tau-\tau_0.$$
The $F=0$, $G=0$, and uniform-field claims are deductions within the adopted model, not experimental statements. For the independent finite-body branch, use the moment and unit convention of [[def-rpm-body-moments]]; the density-to-spin identity below is stipulated data.

Separately, let a flat body have rest momentum $p$, and define $M:=\sqrt{-g(p,p)}/c>0$. Choose its momentum-rest inertial frame $(o;e_0,e_1,e_2,e_3)$ of [[def-inertial-frame-and-inertial-chart]] with $e_0=p/(Mc)$ and spatial origin at the stipulated body center. Define $\overline B_\ell(0):=\{\mathbf x\in\mathbb R^3:|\mathbf x|\le\ell\}$ using the Euclidean norm of its positive-definite spatial rest space. In this frame $p$ has components $(Mc,\mathbf0)$; let $S^{ab}=-S^{ba}$ be its angular-momentum tensor, with $S^{0i}=0$ (hence $S^{ab}p_b=0$), and let $e:\mathbb R^3\to[0,\infty)$ and $j:\mathbb R^3\to\mathbb R^3$ be measurable rest densities, with each component of $j$ in $L^1(\mathbb R^3)$; their units are joules per cubic metre and kilogram per square metre per second, respectively. Assume $e$ and $j$ vanish almost everywhere outside $\overline B_\ell(0)$, $|j|$ is the Euclidean norm and satisfies $|j|\le e/c$ almost everywhere, $\int e\,d^3x=Mc^2$, and the stipulated componentwise spin-density identity
$$\mathbf s_*:=\int_{\mathbb R^3}\mathbf x\times j(\mathbf x)\,d^3x=\tfrac12\epsilon_{kij}S^{ij}\,\mathbf e_k,$$
where the vector integral is componentwise in the positively oriented spatial basis of this inertial frame.
Then
$$\ell\ge\frac{|\mathbf s_*|}{Mc}.$$
If $\mathbf s_*\ne0$, every observer-induced centroid shift $\boldsymbol\delta$ of the flat SSC translation law satisfies $|\boldsymbol\delta|<|\mathbf s_*|/(Mc)$, every point of the open disk in $\mathbf s_*^\perp$ with that radius is attained, and its boundary is a supremum not attained by a timelike observer. If $\mathbf s_*=0$, the only shift is $\boldsymbol\delta=0$. Under proper orthochronous Lorentz transformations of the complete body data and its momentum-rest hypersurface, the scalars $M$, $\ell$, $|\mathbf s_*|$, and $|\mathbf s_*|/(Mc)$ are unchanged; $\mathbf s_*$ itself transforms as a spatial vector, so its components depend on the oriented rest-space basis. No equality between $\mathbf s$ and $\mathbf s_*$ is assumed, so the size inequalities do not bound the BMT polarization unless such an identification is separately adopted.

## Facts & Assumptions

[A3] [[def-countable-choice]]: assume only countable choice $\mathrm{AC}_\omega$ for the canonical tangent-bundle smooth structure and inherited BMT/action-equivalence supplier hypotheses.

**Given:** The adopted classical BMT and Lorentz-force equations, the flat Lorentz metric and SI field convention, an initially orthogonal polarization, and, independently, flat-body rest data with the stated support, positivity and energy-current bound.

[A2] The polarization begins orthogonal to $U$; the uniform-field clause uses $\mathbf E=0$ and constant $\mathbf B$ in the inertial rest chart; independently, the body data satisfy the stated rest-frame angular-momentum, support, positive-energy and energy-current hypotheses.

[A1] The charged-body definition treats $m,q,g_s$ as model parameters, $s$ as a polarization vector orthogonal to $U$, and $F$ as a prescribed field; the BMT transport and translation laws are separately adopted. [[def-rpm-charge-spin-model]]; [[post-rpm-bmt-dipole-model]]

[F1] In the stated SI convention, $F_{0i}=-E_i/c$ and $F_{ij}=\epsilon_{ijk}B_k$; $F^\sharp$ is defined by $g(F^\sharp(v),w)=F(w,v)$. [[def-em-electromagnetic-tensor]]; [[def-rpm-charge-spin-model]]

[F2] The restricted transport algebra preserves $g(U,s)=0$ and $g(s,s)$ when the coefficients are $G$ and $1-G$, gives the pointwise rest-space projected operator $\alpha G(\mathbf s\times\mathbf B)$ in its stated basis convention, and supplies uniqueness for the continuous-coefficient linear spin transport on compact intervals. [[lem-rpm-bmt-transport-algebra]]

[F3] Proper orthochronous Lorentz maps preserve the Lorentz form and future cone. [[def-sr-affine-minkowski-model]]; [[thm-sr-proper-orthochronous-lorentz-algebra]]

[F4] Under the explicit rest-frame hypotheses $e\ge0$, $|j|\le e/c$, support radius $\ell$, and $Mc^2=\int e>0$, the body spin satisfies $|\mathbf s_*|\le\ell Mc$. [[lem-rpm-body-spin-size-bound]]

[F5] For an antisymmetric flat spin tensor with $S^{ab}p_b=0$ and $p=(Mc,\mathbf0)$, observer-induced shifts fill the open disk in $\mathbf s_*^\perp$ of radius $|\mathbf s_*|/(Mc)$; the boundary is not attained. [[lem-rpm-flat-centroid-shift]]

[F6] Under [A3], stationarity of the adopted local charged-particle action yields $D_\tau U=(q/m)F^\sharp(U)$. [[pthm-rpm-external-charge-action-equivalence]]

## Proof

**Proof technique:** direct.

1.1 If $F=0$, [F6] and the BMT postulate [A1] make both right-hand sides zero, so $D_\tau U=0$ and $D_\tau s=0$. For $G=0$ and general field, the spin equation reduces to $D_\tau s=\alpha U\,g(s,F^\sharp(U))/c^2$. Since [F6] gives $a=\alpha F^\sharp(U)$, this equals $U g(a,s)/c^2$. The full Fermi–Walker expression in the Statement has the additional term $-a g(U,s)/c^2$, which is zero by [A2]; thus the stated branch is exactly Fermi–Walker transport. [given, A3, A1, A2, F1, F6, algebra]

1.2 Let $\Lambda$ be a proper orthochronous Lorentz map and transform $U,s,F$ as vector and two-form data. Metric preservation [F3] and the defining identity of $F^\sharp$ imply $F'{}^\sharp(\Lambda v)=\Lambda F^\sharp(v)$: pair both sides with an arbitrary $\Lambda w$ and use $F'(\Lambda w,\Lambda v)=F(w,v)$. The scalar $g(s,F^\sharp(U))$ and constraint $g(U,s)=0$ are preserved. Therefore applying $\Lambda$ to each BMT and translation equation gives the same equation for the transformed data. [given, A3, A2, F1, F3, algebra]

1.3 In the uniform rest magnetic field in [A2], [F6] gives $F^\sharp(U)=0$ because $\mathbf E=0$, so $U=(c,\mathbf0)$ remains at rest and $\kappa=g(s,F^\sharp(U))=0$. The cross-product convention [F1,F2] gives $d\mathbf s/d\tau=\omega\,\mathbf s\times\widehat{\mathbf B}$. With $\theta:=\omega\Delta\tau$, direct differentiation of the displayed formula gives
$$\frac{d\mathbf s}{d\tau}=-\omega\sin(\theta)\mathbf s_{\perp,0}-\omega\cos(\theta)\widehat{\mathbf B}\times\mathbf s_{\perp,0}=\omega\mathbf s(\tau)\times\widehat{\mathbf B},$$
and at $\tau=\tau_0$ the formula equals $\mathbf s_0$. Uniqueness of the continuous-coefficient linear spin transport on compact intervals, supplied by [F2], makes this the exact solution. If $qG=0$ the formula reduces to constant spin. [given, A3, A1, A2, F1, F2, F6, algebra]

2.1 By the stipulated rest-density identity in the Statement and the hypotheses [A2], the data meet [F4], so $|\mathbf s_*|\le\ell Mc$; divide by $Mc>0$ for the first inequality. The hypotheses of [F5] are exactly the rest momentum and spin condition in [A2], so every timelike observer shift lies inside the disk of radius $|\mathbf s_*|/(Mc)$ and the boundary is not attained. In the case $\mathbf s_*=0$, [F5] gives only zero shift and [F4] gives the trivial lower bound $\ell\ge0$. In the momentum rest frame, $S^{0i}=0$ and $S^{ij}=\epsilon_{ijk}s_*^k$, so direct contraction gives $S_{ab}S^{ab}/2=|\mathbf s_*|^2$; together with $M=\sqrt{-g(p,p)}/c$, this shows the radius is a Lorentz scalar. A proper orthochronous Lorentz map sends the momentum-rest hyperplane isometrically to the transformed momentum-rest hyperplane, so the support radius $\ell$ is unchanged for the transformed complete rest-frame data. The BMT vector $\mathbf s$ has not entered either estimate; only a separately adopted identification $\mathbf s=\mathbf s_*$ would allow its magnitude to be substituted. [given, A3, A2, F3, F4, F5, algebra] ∎

## Remarks

The BMT polarization vector belongs to the charged test-body transport model. The body spin $\mathbf s_*$ is the dual of an angular-momentum moment in a momentum-rest frame. Their units agree, but their physical identification is additional input. The Lorentz-covariance claim applies to the full tensor model, while the magnetic sine–cosine expression and size assumptions are stated in their specified rest frames.
