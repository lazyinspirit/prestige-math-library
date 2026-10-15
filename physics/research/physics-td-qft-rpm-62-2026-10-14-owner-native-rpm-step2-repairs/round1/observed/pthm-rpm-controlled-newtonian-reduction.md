---
id: pthm-rpm-controlled-newtonian-reduction
kind: physics-theorem
title: "Controlled Newtonian reductions for test motion"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 7
verification:
  precheck: pass
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
deps:
  - post-sr-massive-particle-dynamics
  - post-rpm-test-clock-and-background
  - post-rpm-massive-test-particle-action
  - def-rpm-mechanical-momentum-and-observer-energy
  - def-rpm-spacetime-observer-and-worldline
  - pthm-rpm-free-massive-and-null-geodesics
  - lem-rpm-low-speed-uniform-remainders
  - lem-gr-weak-field-admissibility-and-inverse-bounds
  - thm-gr-weak-field-scaled-trajectory-limit
dependency_roles:
  post-sr-massive-particle-dynamics: physical-assumption
  post-rpm-test-clock-and-background: physical-assumption
  post-rpm-massive-test-particle-action: physical-assumption
  def-rpm-mechanical-momentum-and-observer-energy: formulation-prerequisite
  def-rpm-spacetime-observer-and-worldline: formulation-prerequisite
  pthm-rpm-free-massive-and-null-geodesics: physical-result
  lem-rpm-low-speed-uniform-remainders: mathematical-premise
  lem-gr-weak-field-admissibility-and-inverse-bounds: mathematical-premise
  thm-gr-weak-field-scaled-trajectory-limit: mathematical-premise
physical_scope: "Two explicitly separate conditional model branches: (i) flat inertial constant-mass test-particle kinematics under a low-speed family bound; (ii) massive free test-particle geodesics in a stationary compact weak-field family satisfying the exact hypotheses of the GR mathematics limit theorem. The flat-frame momentum and energy estimates are not transferred to curved coordinate components. No metric family is constructed from Newtonian data, and no empirical, self-force, or global-time claim is made."
empirical_premises: []
sources:
  references:
    - title: "Sean Carroll, Lecture Notes on General Relativity, complete lecture notes"
      url: "https://preposterousuniverse.com/wp-content/uploads/grnotes-four.pdf"
      locator: "Chapter 4, §4.1, printed pp. 104–106 (PDF pp. 7–9): static weak-field and slow-motion assumptions in the geodesic equation and the Newtonian acceleration limit."
    - title: "David Tong, General Relativity, complete author-hosted lecture notes"
      url: "https://davidtong.org/teaching/general-relativity/grhtml/S5"
      locator: "§5.1.2: slow-motion geodesics in a weak, static gravitational field and their Newtonian acceleration limit."
---

## Statement

The following are two separate conditional reductions, with no identification of the flat inertial quantities in clause (a) with the curved coordinate quantities in clause (b).

**(a) Flat inertial kinematics.** In a named inertial chart of the flat massive-particle model [[post-sr-massive-particle-dynamics]], use the mechanical energy and momentum of [[def-rpm-mechanical-momentum-and-observer-energy]]. Let $C>0$, $0<\lambda\le\lambda_*$, and $\rho=C^2\lambda_*<1$. For any massive state with constant $m>0$, speed $v$, and $|v|\le C\sqrt\lambda\,c$, the bounds of [[lem-rpm-low-speed-uniform-remainders]] hold with $\varepsilon=\lambda$: the relativistic momentum and kinetic energy have the stated uniform Newtonian remainders, and the coordinate-time action density after subtracting the rest term differs from $\frac12m|v|^2$ by at most $mC^4c^2\lambda^2/[8(1-\rho)^{3/2}]$. This is a kinematic assertion; it assumes no force law and proves no trajectory convergence.

**(b) Curved weak-field free motion.** Adopt the separate massive test-particle action on a prescribed smooth background ([[post-rpm-massive-test-particle-action]]). Let the stationary weak-field metric family, scale $L$, spatial potential $\Phi=\varepsilon c^2\varphi$, massive geodesic, compact spatial region, speed bound, Newtonian comparison solution, and Hessian bound satisfy exactly hypotheses (H1)–(H3) of [[thm-gr-weak-field-scaled-trajectory-limit]]. If the massive particle's free worldline is the geodesic of that theorem, then for the scaled trajectories $(X_\varepsilon,W_\varepsilon)$ and $(X_*,W_*)$,

$$D(S):=\|X_\varepsilon(S)-X_*(S)\|_2+\|W_\varepsilon(S)-W_*(S)\|_2\le\bigl(D(0)+C_3\varepsilon S_*\bigr)e^{(1+K_2)S_*}\qquad(0\le S\le S_*),$$

with $C_3,K_2,S_*$ exactly as in that theorem. In particular, for identical scaled initial data, $\sup_{0\le S\le S_*}D(S)\le C_3\varepsilon S_*e^{(1+K_2)S_*}=O(\varepsilon)$ on this fixed scaled interval. The corresponding coordinate-time horizon is $T_\varepsilon=LS_*/(\sqrt\varepsilon c)$; this is not a large-time limit at fixed $\varepsilon$.

## Facts & Assumptions

**Given:** The separate flat inertial state and low-speed family of clause (a), and the prescribed curved weak-field data, massive geodesic, compact-containment, scaled Newtonian comparison solution, and Hessian bound (H1)–(H3) of clause (b).

[A1] The flat massive model adopts constant $m>0$, $P=mU$, the inertial-frame particle energy and momentum, and the massive branch only ([[post-sr-massive-particle-dynamics]]). This is separate from the curved-background model.

[F1] The pointwise massive-particle definitions are $P=mU$ and, in an inertial chart, $p=m\gamma v$, $E=\gamma mc^2$ ([[def-rpm-mechanical-momentum-and-observer-energy]]). Use SI units in both branches: $m$ is kg; $c$ and $c_*$ are m s$^{-1}$; $t,\tau,T,T_\varepsilon$ are seconds; $x,L$ are metres; $v$ is m s$^{-1}$; $p$ is kg m s$^{-1}$; $E,\mathcal L_c,\mathcal L_N$ are joules; and action is J s. In (a), $\lambda,\lambda_*,\rho,C$ are dimensionless. In (b), $\varepsilon,\varphi,C$ are dimensionless, $\Phi$ is m$^2$ s$^{-2}$, and the scaled variables $X=x/L$, $W=v/(\sqrt\varepsilon c)$, $S=t\sqrt\varepsilon c/L$, as well as $S_*,D,C_3,K_2$, are dimensionless ([[post-rpm-massive-test-particle-action]], [[thm-gr-weak-field-scaled-trajectory-limit]]). The formal parameter $c$ in (a) or (b) retains the unit m s$^{-1}$; varying it in a model family is not a claim that the exact SI defining value varies in nature.

[L1] For $|v|\le C\sqrt\lambda\,c$ and $C^2\lambda_*= \rho<1$, the uniform momentum, kinetic-energy and fixed-time action-density remainders hold with constants depending only on $C,\rho,m,c$ ([[lem-rpm-low-speed-uniform-remainders]]).

[A2] The massive spinless test-body model adopts $S_m[x]=-mc^2\int d\tau$ on a prescribed smooth time-oriented background, with fixed-endpoint stationary paths as its free trajectories; its ideal-clock increment is the stipulated proper time ([[post-rpm-massive-test-particle-action]], [[post-rpm-test-clock-and-background]]). It excludes self-gravity, radiation reaction, spin and finite-size structure. These are draft physical postulates in batch 22 and are used at their inspected scopes; in the curved branch the local time orientation is established in [L3].

[L2] Under that adopted action, stationary massive paths satisfy $D_\tau U=0$ and are affinely parametrized timelike geodesics; only local solutions and open maximal intervals are asserted ([[pthm-rpm-free-massive-and-null-geodesics]]). This is a current in-run draft result, so its use here is conditional on its exact statement and proof status.

[L3] For $0<\varepsilon\le\varepsilon_*$ in the stationary weak-field data, [[lem-gr-weak-field-admissibility-and-inverse-bounds]] gives $g(\varepsilon)_{00}\le-1/2$ at every event whose spatial coordinate lies in $K$. The image $\Gamma_\varepsilon=\{(ct,x_\varepsilon(t)):0\le t\le T_\varepsilon\}$ is compact and contained in $\Omega$ by (H1). Since $g(\varepsilon)_{00}$ is continuous, $O_\varepsilon:=\{p\in\Omega:g(\varepsilon)_{00}(p)<0\}$ is an open neighborhood of $\Gamma_\varepsilon$. The smooth coordinate field $\partial_0$ is timelike throughout $O_\varepsilon$, so choosing $N_\varepsilon:=\partial_0$ defines a time orientation there. Thus the restricted background $(O_\varepsilon,g(\varepsilon),N_\varepsilon)$ meets the time-oriented-background hypothesis; no orientation of the whole $\Omega$ is needed ([[lem-gr-weak-field-admissibility-and-inverse-bounds]], [[def-rpm-spacetime-observer-and-worldline]]).

[L4] For stationary weak-field data with the prescribed $C^2$ metric bounds, compact spatial containment, the uniform speed hypothesis, a Newtonian comparison solution on a fixed scaled interval, and $\|D^2\psi\|_{\mathrm{op}}\le K_2$, the published mathematics theorem gives the displayed finite-time estimate; it neither constructs those geodesics nor metric families ([[thm-gr-weak-field-scaled-trajectory-limit]]).

## Proof

**Proof technique:** apply the uniform kinematic estimate in the flat branch and the exact geodesic comparison theorem in the separate curved branch.

1.1 In clause (a), the named inertial chart has $\eta=\operatorname{diag}(-1,1,1,1)$ and $x^0=ct$. For a future-timelike history with coordinate velocity $v$, the proper-time definition gives $c^2(d\tau/dt)^2=-\eta((c,v),(c,v))=c^2-|v|^2$, so $d\tau/dt=\sqrt{1-|v|^2/c^2}$. Specializing the adopted action [A2] to this flat, time-oriented branch yields $S_m=\int\mathcal L_c(v)\,dt$ with $\mathcal L_c(v)=-mc^2\sqrt{1-|v|^2/c^2}$; hence the coordinate-time action density used by [L1] is exactly the postulated density, and subtracting the rest term replaces it by $\mathcal L_c+mc^2$. By [A1] and [F1] the inertial quantities are $p=m\gamma v$ and $E=\gamma mc^2$. The family speed bound is [L1]'s hypothesis with $\varepsilon=\lambda$ and $\rho=C^2\lambda_*$. Substitution into [L1] proves the momentum, kinetic-energy and action-density error bounds for every member of the family. No equation of motion or trajectory estimate is used. [given, A1, A2, F1, L1, algebra]

1.2 In clause (b), [L3] supplies a time-oriented open background neighborhood of the full contained worldline segment, which meets the background hypothesis of [A2]. The postulated stationary free path is therefore a timelike geodesic by [L2]. The theorem assumes this geodesic and the Newtonian comparison solution exist on the stated interval, and by hypothesis they satisfy exactly (H1)–(H3) recorded in [L4]. Applying [L4] gives the displayed bound with the same constants and scaled variables, without changing the metric assumptions or asserting that such a family can be constructed from arbitrary Newtonian data. [given, A2, L2, L3, L4]

2.1 When $D(0)=0$, the bound from step 1.2 reduces to $C_3\varepsilon S_*e^{(1+K_2)S_*}$; with $C_3,K_2,S_*$ fixed this is $O(\varepsilon)$ as $\varepsilon\downarrow0$. The coordinate-time identity is the stated rescaling $t=LS/(\sqrt\varepsilon c)$, so only a fixed scaled interval is covered. Clauses (a) and (b) have different geometries and no flat momentum or energy formula was used in the curved branch. [given, step 1.2, algebra] ∎

## Remarks

The flat inertial low-speed family and the curved weak-field geodesic family are separate hypotheses. In particular, the curved statement is not a Newtonian limit for every solution of Einstein's equations, does not establish existence of an Einstein metric family from Newtonian initial data, and does not imply geodesic completeness.
