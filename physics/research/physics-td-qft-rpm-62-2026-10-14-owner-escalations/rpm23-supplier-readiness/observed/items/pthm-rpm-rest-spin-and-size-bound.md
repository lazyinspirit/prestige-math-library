---
id: pthm-rpm-rest-spin-and-size-bound
kind: physics-theorem
title: Rest-frame spin transport and finite-body size bounds
status: draft
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
  - def-cross-product-in-r3
  - def-em-electromagnetic-tensor
  - def-rpm-body-moments
  - def-rpm-charge-spin-model
  - def-sr-affine-minkowski-model
  - lem-rpm-bmt-transport-algebra
  - lem-rpm-body-spin-size-bound
  - lem-rpm-flat-centroid-shift
  - pthm-rpm-external-charge-action-equivalence
  - post-rpm-bmt-dipole-model
  - thm-sr-proper-orthochronous-lorentz-algebra
dependency_roles:
  def-cross-product-in-r3: mathematical-premise
  def-em-electromagnetic-tensor: formulation-prerequisite
  def-rpm-body-moments: formulation-prerequisite
  def-rpm-charge-spin-model: formulation-prerequisite
  def-sr-affine-minkowski-model: mathematical-premise
  lem-rpm-bmt-transport-algebra: mathematical-premise
  lem-rpm-body-spin-size-bound: mathematical-premise
  lem-rpm-flat-centroid-shift: mathematical-premise
  pthm-rpm-external-charge-action-equivalence: physical-result
  post-rpm-bmt-dipole-model: physical-assumption
  thm-sr-proper-orthochronous-lorentz-algebra: mathematical-premise
sources:
  references:
    - title: "University of Virginia, Relativistic Spin Precession: the BMT Equation, Electromagnetic Theory lecture"
      url: https://galileoandeinstein.phys.virginia.edu/Elec_Mag/2022_Lectures/EM_71_g-2.html
      locator: "Full section “Relativistic Spin Precession: the BMT Equation,” including its rest-frame torque, covariant equation and coefficient matching; the exact conditional branches are derived locally."
    - title: "L. Filipe Costa and José Natário, Center of mass, spin supplementary conditions, and the momentum of spinning particles, arXiv:1410.6443v2; published in Equations of Motion in Relativistic Gravity, Fundamental Theories of Physics 179 (Springer, 2015)"
      url: https://arxiv.org/html/1410.6443v2
      locator: Section 2, observer-dependent centroid shifts, the centroid disk and the Møller radius; the positive-energy size estimate is proved here under its exact integral hypotheses.
verification: {}
---

## Statement

Adopt the charged-body quantities of [[def-rpm-charge-spin-model]], the SI field convention of [[def-em-electromagnetic-tensor]], and the classical BMT law [[post-rpm-bmt-dipole-model]]. For a trajectory stationary under the local action postulate, the translational force equation is supplied by [[pthm-rpm-external-charge-action-equivalence]]. In flat Minkowski spacetime let $m>0$, $q,g_s\in\mathbb R$, $\alpha=q/m$, $G=g_s/2$, and let $U,s$ satisfy
$$D_\tau U=\alpha F^\sharp(U),\qquad D_\tau s=\alpha\left[GF^\sharp(s)-(G-1)\frac{U}{c^2}g(s,F^\sharp(U))\right],\qquad g(U,U)=-c^2,\quad g(U,s)=0.$$
The tensor equation is covariant under proper orthochronous Lorentz transformations of the complete field and worldline data. If $F=0$, then $D_\tau U=0$ and $D_\tau s=0$. For any acceleration $a=D_\tau U$ within the Lorentz-force model, the $G=0$ branch is Fermi–Walker transport on the orthogonal spin subspace:
$$D_\tau s=\frac{1}{c^2}\bigl(Ug(a,s)-a g(U,s)\bigr)=\frac{U}{c^2}g(a,s).$$
In an inertial rest frame with uniform $\mathbf E=0$ and constant $\mathbf B\ne0$, $U=(c,\mathbf0)$ is stationary and the $G$ branch has the exact solution
$$\mathbf s(\tau)=\mathbf s_\parallel+\cos(\omega\Delta\tau)\mathbf s_\perp-\sin(\omega\Delta\tau)\widehat{\mathbf B}\times\mathbf s_\perp,\qquad \omega=\frac{qG}{m}|\mathbf B|,\quad \Delta\tau=\tau-\tau_0,$$
where the projections are parallel and perpendicular to $\mathbf B$. The $F=0$, $G=0$, and uniform-field claims are deductions within the adopted model, not experimental statements.

Separately, let a flat body have rest momentum $p=(Mc,\mathbf0)$, $M>0$, antisymmetric angular-momentum tensor with $S^{0i}=0$ (hence $S^{ab}p_b=0$), and Lebesgue-integrable rest densities $e\ge0$ in joules per cubic metre and $j$ in kilogram per square metre per second, supported in a ball of radius $\ell>0$ metres, with $|j|\le e/c$ and $\int e\,d^3x=Mc^2$. Define the body spin $\mathbf s_*:=\int x\times j\,d^3x=\tfrac12\epsilon_{kij}S^{ij}\,\mathbf e_k$. Then
$$\ell\ge\frac{|\mathbf s_*|}{Mc},\qquad |\boldsymbol\delta|<\frac{|\mathbf s_*|}{Mc}$$
for every observer-induced centroid shift $\boldsymbol\delta$ of the flat SSC translation law; the disk radius is a supremum, not an attained boundary for a timelike observer. These rest-body quantities are Lorentz invariant under transforming the complete body data and its momentum-rest hypersurface. No equality between $\mathbf s$ and $\mathbf s_*$ is assumed, so the size inequalities do not bound the BMT polarization unless such an identification is separately adopted.

## Facts & Assumptions

**Given:** The adopted classical BMT and Lorentz-force equations, the flat Lorentz metric and SI field convention, an initially orthogonal polarization, and, independently, flat-body rest data with the stated support, positivity and energy-current bound.

[A2] The polarization begins orthogonal to $U$; the uniform-field clause uses $\mathbf E=0$ and constant $\mathbf B$ in the inertial rest chart; independently, the body data satisfy the stated rest-frame angular-momentum, support, positive-energy and energy-current hypotheses.

[A1] The charged-body definition treats $m,q,g_s$ as model parameters, $s$ as a polarization vector orthogonal to $U$, and $F$ as a prescribed field; the BMT transport and translation laws are separately adopted. [[def-rpm-charge-spin-model]]; [[post-rpm-bmt-dipole-model]]

[F1] In the stated SI convention, $F_{0i}=-E_i/c$ and $F_{ij}=\epsilon_{ijk}B_k$; $F^\sharp$ is defined by $g(F^\sharp(v),w)=F(w,v)$. [[def-em-electromagnetic-tensor]]; [[def-rpm-charge-spin-model]]

[F2] The restricted transport algebra preserves $g(U,s)=0$ and $g(s,s)$ when the coefficients are $G$ and $1-G$, and its rest-frame spatial operator is $\alpha G(\mathbf s\times\mathbf B)$. [[lem-rpm-bmt-transport-algebra]]

[F3] Proper orthochronous Lorentz maps preserve the Lorentz form and future cone. [[def-sr-affine-minkowski-model]]; [[thm-sr-proper-orthochronous-lorentz-algebra]]

[F4] Under the explicit rest-frame hypotheses $e\ge0$, $|j|\le e/c$, support radius $\ell$, and $Mc^2=\int e>0$, the body spin satisfies $|\mathbf s_*|\le\ell Mc$. [[lem-rpm-body-spin-size-bound]]

[F5] For an antisymmetric flat spin tensor with $S^{ab}p_b=0$ and $p=(Mc,\mathbf0)$, observer-induced shifts fill the open disk in $\mathbf s_*^\perp$ of radius $|\mathbf s_*|/(Mc)$; the boundary is not attained. [[lem-rpm-flat-centroid-shift]]

[F6] In the flat clause, $S_z^{ab}=c^{-1}\int((x-z)^aT^{0b}-(x-z)^bT^{0a})d^3x$, with $(x-z)^0=0$ on the slice. [[def-rpm-body-moments]]

[F7] Stationarity of the adopted local charged-particle action yields $D_\tau U=(q/m)F^\sharp(U)$. [[pthm-rpm-external-charge-action-equivalence]]

## Proof

**Proof technique:** direct.

1.1 If $F=0$, [F7] and the BMT postulate [A1] make both right-hand sides zero, so $D_\tau U=0$ and $D_\tau s=0$. For $G=0$ and general field, the spin equation reduces to $D_\tau s=\alpha U\,g(s,F^\sharp(U))/c^2$. Since [F7] gives $a=\alpha F^\sharp(U)$, this equals $U g(a,s)/c^2$. The full Fermi–Walker expression in the Statement has the additional term $-a g(U,s)/c^2$, which is zero by [A2]; thus the stated branch is exactly Fermi–Walker transport. [given, A1, A2, F1, F7, algebra]

1.2 Let $\Lambda$ be a proper orthochronous Lorentz map and transform $U,s,F$ as vector and two-form data. Metric preservation [F3] and the defining identity of $F^\sharp$ imply $F'{}^\sharp(\Lambda v)=\Lambda F^\sharp(v)$: pair both sides with an arbitrary $\Lambda w$ and use $F'(\Lambda w,\Lambda v)=F(w,v)$. The scalar $g(s,F^\sharp(U))$ and constraint $g(U,s)=0$ are preserved. Therefore applying $\Lambda$ to each BMT and translation equation gives the same equation for the transformed data. [given, A2, F1, F3, algebra]

1.3 In the uniform rest magnetic field in [A2], [F7] gives $F^\sharp(U)=0$ because $\mathbf E=0$, so $U=(c,\mathbf0)$ remains at rest and $\kappa=g(s,F^\sharp(U))=0$. The cross-product convention [F1,F2] gives $d\mathbf s/d\tau=\omega\,\mathbf s\times\widehat{\mathbf B}$. Decompose $\mathbf s=\mathbf s_\parallel+\mathbf s_\perp$; the parallel part is constant. Differentiating the displayed sine–cosine formula gives $-\omega\widehat{\mathbf B}\times\mathbf s_\perp=\omega\mathbf s_\perp\times\widehat{\mathbf B}$ at every $\tau$, and at $\tau_0$ it equals the prescribed initial vector. Uniqueness of the linear transport equation in [F2] makes this the exact solution. If $qG=0$ the formula reduces to constant spin. [given, A1, A2, F1, F2, F7, algebra]

2.1 On the rest slice, put $e=T^{00}$ and $j^i=T^{0i}/c$. Contracting the exact flat moment formula [F6] with $\tfrac12\epsilon_{kij}$ gives $s_*^k=\int\epsilon_{kij}x^ij^j d^3x=\int(x\times j)^k d^3x$. Thus [F4] gives $|\mathbf s_*|\le\ell Mc$; divide by $Mc>0$ for the first inequality. The hypotheses of [F5] are exactly the rest momentum and spin condition in [A2], so every timelike observer shift lies inside the disk of radius $|\mathbf s_*|/(Mc)$ and the boundary is not attained. In the case $\mathbf s_*=0$, [F5] gives only zero shift and [F4] gives the trivial lower bound $\ell\ge0$. In the momentum rest frame, $S^{0i}=0$ and $S^{ij}=\epsilon_{ijk}s_*^k$, so direct contraction gives $S_{ab}S^{ab}/2=|\mathbf s_*|^2$; together with $M=\sqrt{-p^2}/c$, this shows the radius is a Lorentz scalar. A Lorentz map sends the momentum-rest hyperplane isometrically to the transformed momentum-rest hyperplane, so the support radius $\ell$ is unchanged for the transformed complete rest-frame data. The BMT vector $\mathbf s$ has not entered either estimate; only a separately adopted identification $\mathbf s=\mathbf s_*$ would allow its magnitude to be substituted. [given, A2, F3, F4, F5, F6, algebra] ∎

## Remarks

The BMT polarization vector belongs to the charged test-body transport model. The body spin $\mathbf s_*$ is the dual of an angular-momentum moment in a momentum-rest frame. Their units agree, but their physical identification is additional input. The Lorentz-covariance claim applies to the full tensor model, while the magnetic sine–cosine expression and size assumptions are stated in their specified rest frames.
