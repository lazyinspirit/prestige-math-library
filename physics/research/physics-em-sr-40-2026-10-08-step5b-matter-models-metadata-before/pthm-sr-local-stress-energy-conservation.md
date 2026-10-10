---
id: pthm-sr-local-stress-energy-conservation
kind: physics-theorem
title: "Local conservation of the adopted matter stress-energy tensors"
status: draft
origin: pipeline
domain: physics
physical_scope: "Flat affine Minkowski spacetime in every inertial chart, under the adopted scalar-field, dust and perfect-fluid model equations of [[post-sr-matter-models-and-evolution]]. The theorem is a conditional deduction from those adopted equations: it asserts no interaction, force law, cross section, measurement or empirical fact, makes no claim for arbitrary prescribed symmetric tensors, and its conclusions inherit the scope and qualifications of the postulate."
deps: [post-sr-matter-models-and-evolution, lem-sr-scalar-field-stress-divergence-identity, lem-sr-scalar-field-hilbert-stress-energy, lem-sr-dust-conservation-equivalence, lem-sr-perfect-fluid-conservation-equations, def-sr-stress-energy-tensor-and-force-density, def-sr-affine-minkowski-model, post-sr-massive-particle-dynamics, lem-sr-four-momentum-in-inertial-frame, lem-sr-boost-time-length-and-velocity-formulas, thm-sr-tensor-and-current-transformation, def-lorentz-boost]
dependency_roles:
  post-sr-matter-models-and-evolution: physical-assumption
  lem-sr-scalar-field-stress-divergence-identity: mathematical-premise
  lem-sr-scalar-field-hilbert-stress-energy: mathematical-premise
  lem-sr-dust-conservation-equivalence: mathematical-premise
  lem-sr-perfect-fluid-conservation-equations: mathematical-premise
  def-sr-stress-energy-tensor-and-force-density: mathematical-premise
  def-sr-affine-minkowski-model: mathematical-premise
  post-sr-massive-particle-dynamics: physical-assumption
  lem-sr-four-momentum-in-inertial-frame: mathematical-premise
  lem-sr-boost-time-length-and-velocity-formulas: mathematical-premise
  thm-sr-tensor-and-current-transformation: mathematical-premise
  def-lorentz-boost: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "D. Tong, General Relativity, University of Cambridge Part III Mathematical Tripos (Michaelmas Term 2019); c = 1 formulas converted to x^0 = c t; 4.5.1-4.5.5 printed pp. 181-191: scalar-field action (4.42)-(4.43) and equation of motion, Hilbert energy-momentum tensor (4.46), diffeomorphism invariance and conservation (4.50), flat-space Noether form, scalar tensor (4.51), Maxwell tensor (4.52), perfect fluid (4.53) with conservation equations (4.54)-(4.55), and the flat-space conserved-charge box argument of 4.5.5"
      url: "https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Chapter 1 printed pp. 28-30 (energy-momentum tensor, dust T^{mu nu}=rho U^mu U^nu (1.106), perfect fluid (1.107)-(1.110), scalar and Maxwell tensors (1.111)-(1.112), conservation (1.113) with the remark that the proof follows from each matter model's equations of motion) and Chapter 5 printed pp. 138-139 (on-shell conservation from diffeomorphism invariance with compact-support variations, (5.34)-(5.38))"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "B. Crowell, Special Relativity, revision 2020-12-10 (author-published undergraduate textbook, 246 PDF pages); signature (+---) converted to (-+++) and c = 1 formulas converted to x^0 = c t; Chapter 9 pp. 179-197: 9.1 pp. 179-182 (current vector, flux, charge conservation), 9.2 pp. 183-191 (stress-energy tensor, conservation and flux, symmetry, dust, rank-2 transformation law, pressure, perfect fluid, worked examples, energy conditions), 9.3 pp. 192-197 (Gauss's theorem, integral conservation laws, the energy-momentum vector, angular momentum); the printed 9.2.8 dominant energy condition p. 191 has the defective |P| > rho and is not used"
      url: "https://archive.org/download/sr_20220102/sr.pdf"
---

## Statement

Under the adopted matter premises of [[post-sr-matter-models-and-evolution]] on a nonempty open $\Omega$: (a) If $\varphi$ is a smooth scalar field solving the adopted field equation $\Box\varphi=V'(\varphi)$ on $\Omega$, then the Hilbert stress-energy tensor of the scalar-field action ([[lem-sr-scalar-field-hilbert-stress-energy]]) satisfies $\partial_aT^{ab}=0$ on $\Omega$, in every inertial chart. (b) If $\rho>0$ and the future unit field $n$ satisfy the adopted dust equations, then $T=\rho\,n\otimes n$ satisfies $\partial_aT^{ab}=0$; conversely if $\partial_aT^{ab}=0$ and $\rho>0$ then the dust equations hold. (c) If $\varepsilon,P$ and the future unit field $n$ satisfy the adopted fluid equations, then $T=(\varepsilon+P)n\otimes n+P\eta^{-1}$ satisfies $\partial_aT^{ab}=0$; conversely conservation of that $T$ implies the two fluid equations. (d) For a $C^1$ symmetric tensor field prescribed on $\Omega$ that is not obtained from one of the adopted models together with its field equations, no conservation is asserted; a conservation statement about such a field is an additional explicit premise. (e) The theorem is a conditional deduction from the adopted model equations; it asserts no interaction, force law, cross section, measurement or empirical fact, and its conclusions inherit the scope of the postulate. Under the already stated homogeneous dust reading, the tensor boost computation has the conditional physical interpretation $T'^{00}=\gamma^2\rho$. For comoving identical massive particles with fixed rest mass $m$, rest number density $\nu$ and $\rho=\nu mc^2$, a rest rectangular parcel has boosted simultaneous volume $1/\gamma$ times its rest volume (the parallel length contracts and transverse lengths are unchanged), so its particle density is $\gamma\nu$; the adopted massive-particle reading gives each particle energy $\gamma mc^2$. Thus the two factors in $\gamma^2\rho$ correspond respectively to particle energy and volume/density. This is conditional model interpretation for that homogeneous particle realization, not a derivation of the continuum from microscopic dynamics, a claim about arbitrary tensors, or empirical evidence.

For the postulate's separate mathematical branch $\Omega=\varnothing$, the scalar, dust and fluid component formulas define the unique empty symmetric tensor field and its coordinate derivatives are empty maps. Thus each pointwise conservation equation and each pointwise dust/fluid equivalence in (a)–(c) is vacuously valid; no Hilbert-tensor, stress-energy, action-stationarity or physical-reading supplier is applied to this branch, and no nonempty parcel realization in (e) exists.

## Facts & Assumptions

**Given:** For the adopted-model branch let $\Omega$ be nonempty and open; for the separate empty-domain branch use only the empty-field conventions of [[post-sr-matter-models-and-evolution]]. The affine Minkowski model with inertial chart $x$ and its index conventions ([[def-sr-affine-minkowski-model]]), the adopted matter model equations and readings of [[post-sr-matter-models-and-evolution]], the particle premises and homogeneous dust reading of [[post-sr-massive-particle-dynamics]], and the force-density/conservation terminology of [[def-sr-stress-energy-tensor-and-force-density]] (conservation of a $C^1$ symmetric field $T$ means $\partial_aT^{ab}=0$, and the force density is chart-independent).

[F1] Scalar divergence identity: for the smooth scalar field and Hilbert tensor of the adopted model, $\partial_aT^{ab}=K(\Box\varphi-V'(\varphi))\partial^b\varphi$; in particular any solution of $\Box\varphi=V'(\varphi)$ has conserved Hilbert tensor. ([[lem-sr-scalar-field-stress-divergence-identity]], [[lem-sr-scalar-field-hilbert-stress-energy]])

[F2] Dust equivalence: for $C^1$ $\rho>0$ and a $C^1$ future unit field $n$, $\partial_a(\rho\,n^an^b)=0$ if and only if $\partial_a(\rho n^a)=0$ and $n^a\partial_an^b=0$. ([[lem-sr-dust-conservation-equivalence]])

[F3] Perfect-fluid identity: for the field $T=(\varepsilon+P)n\otimes n+P\eta^{-1}$, $\partial_aT^{ab}=n^b(D\varepsilon+(\varepsilon+P)\vartheta)+((\varepsilon+P)a^b+h^{bc}\partial_cP)$, and $\partial_aT^{ab}=0$ if and only if both bracket expressions vanish. ([[lem-sr-perfect-fluid-conservation-equations]])

[F4] Massive-particle reading: a particle of rest mass $m$ and four-velocity $U=m^{-1}P$ has energy $E=\gamma mc^2$ in a frame where its speed parameter is $v$ with $\gamma=(1-v^2/c^2)^{-1/2}$; a rest rectangular parcel's parallel length contracts by the factor $1/\gamma$ while transverse lengths are unchanged. ([[lem-sr-four-momentum-in-inertial-frame]], [[lem-sr-boost-time-length-and-velocity-formulas]], [[post-sr-massive-particle-dynamics]])

[F5] Transformation laws: under an inertial transition the components of a $C^1$ type-$(2,0)$ field transform by the rank-two law $T'^{ab}=\Lambda^a{}_c\Lambda^b{}_dT^{cd}$, and its coordinate divergence transforms as a vector, $\partial'_aT'^{ab}=\Lambda^b{}_c\partial_aT^{ac}$, so conservation is a chart-independent statement. ([[def-sr-stress-energy-tensor-and-force-density]], [[thm-sr-tensor-and-current-transformation]]\,(iii),(iv))

## Proof

**Proof technique:** direct. In steps 1.1–1.5 assume the nonempty adopted-model branch, so the cited nonempty-domain suppliers apply; the separate mathematical empty-domain branch is proved in step 1.6.

1.1 Clause (a). The adopted scalar model includes the field equation $\Box\varphi=V'(\varphi)$ on $\Omega$; [F1] then gives $\partial_aT^{ab}=K\cdot0\cdot\partial^b\varphi=0$ on $\Omega$. By [F5] the vanishing is independent of the inertial chart in which the components are computed. [F1, F5, given]

1.2 Clause (b). The adopted dust model is exactly the pair of equations $\partial_a(\rho n^a)=0$ and $n^a\partial_an^b=0$ with $\rho>0$; the forward direction of [F2] gives $\partial_aT^{ab}=0$ for $T=\rho\,n\otimes n$, and the reverse direction gives that conservation with $\rho>0$ implies both equations. [F2, given]

1.3 Clause (c). The adopted fluid model is the pair of equations obtained by setting both bracket expressions of [F3] to zero; by the equivalence in [F3] this is exactly $\partial_aT^{ab}=0$ for $T=(\varepsilon+P)n\otimes n+P\eta^{-1}$, in both directions. [F3, given]

1.4 Clause (d). The definition [[def-sr-stress-energy-tensor-and-force-density]] states explicitly in its clause (d) that it asserts no conservation of any prescribed symmetric field, and the present theorem derives conservation only from the adopted model equations of clauses (a)–(c); accordingly for a $C^1$ symmetric field prescribed on $\Omega$ that is not obtained from one of the adopted models together with its field equations, no conservation is asserted, and any conservation statement about such a field would be an additional explicit premise. [given]

1.5 Clause (e), conditional homogeneous-dust reading. Consider a homogeneous dust realization with comoving identical particles of rest mass $m>0$ and rest number density $\nu>0$, so that the adopted reading gives $\rho=\nu mc^2$, and consider a rest rectangular parcel of rest volume $V_0$. Take the tensor $T=\rho\,n\otimes n$ in the rest frame, where $n=e_0$, so that $T^{00}=\rho$ and all other components vanish. The passive boost with parameter $\beta$ along the parcel's motion direction has $\Lambda^0{}_0=\gamma$ and is proper orthochronous ([[def-lorentz-boost]]), so the rank-two law of [F5] gives $T'^{00}=\Lambda^0{}_a\Lambda^0{}_bT^{ab}=(\Lambda^0{}_0)^2\rho=\gamma^2\rho$; thus $T'^{00}=\gamma^2\nu mc^2=(\gamma mc^2)(\gamma\nu)$. In a frame related to the rest frame by that boost the simultaneous volume of the parcel is $V_0/\gamma$ by the length-contraction part of [F4] (parallel length $1/\gamma$, transverse lengths unchanged), so the particle number density in that frame is $\nu'=N/(V_0/\gamma)=\gamma\nu$; by the massive-particle reading [F4] each particle carries energy $\gamma mc^2$. Hence the two factors in $\gamma^2\rho$ correspond respectively to particle energy and volume/density in the boosted frame. This is a conditional interpretation of the factorization within the homogeneous particle realization; it is not a derivation of the continuum model from microscopic dynamics. [F4, F5, given]

1.6 Empty-domain branch. If $\Omega=\varnothing$, [[post-sr-matter-models-and-evolution]] supplies only the unique empty fields described by [[def-ck-tensor-field-on-minkowski-space]]. Their component derivatives and products are empty maps; every equality asserted at a point of $\Omega$ is therefore vacuous, including the two directions of the dust and fluid equivalences. There is no nonempty parcel in $\Omega$ to which clause (e)'s conditional realization can apply. This proves the separate mathematical empty-domain clause without invoking the named nonempty-domain suppliers on that domain. [given]

2.1 In the nonempty adopted-model branch, clauses (a), (b), (c) and (d) are steps 1.1–1.4 and clause (e) is step 1.5; the separate mathematical empty-domain clause is step 1.6. Every conservation conclusion is a conditional deduction from the adopted model equations; the theorem asserts no interaction, force law, cross section, measurement or empirical fact, contains no empirical premise and makes no claim about arbitrary prescribed tensors. All choices are finite; no choice principle is used. [step 1.1, step 1.2, step 1.3, step 1.4, step 1.5, step 1.6] ∎
