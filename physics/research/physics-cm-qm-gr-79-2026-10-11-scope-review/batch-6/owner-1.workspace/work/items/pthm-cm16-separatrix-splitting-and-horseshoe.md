---
id: pthm-cm16-separatrix-splitting-and-horseshoe
kind: physics-theorem
title: "A smooth periodically forced one-coordinate model with a transverse homoclinic horseshoe: the physical stroboscopic map has a compact invariant set conjugate to the shift, chaotic in the stated sense"
status: draft
origin: session
domain: physics
dependency_level: 13
deps: [thm-smooth-fixed-mass-mechanical-horseshoe,
       def-smooth-periodic-oscillator-pulse-model,
       def-cm16-stroboscopic-and-poincare-maps,
       def-cm16-chaos-list-for-model-maps,
       post-cm02-force-superposition,
       def-cm02-newtonian-flow,
       def-cm01-units,
       def-bilateral-symbol-and-bounded-sequence-space,
       def-cm-topologically-mixing-dense-periodic-and-sensitive-maps,
       def-stable-unstable-cones-and-line-slopes,
       def-countable-choice,
       def-dependent-choice,
       def-ck-euclidean-maps-and-diffeomorphisms]
dependency_roles:
  thm-smooth-fixed-mass-mechanical-horseshoe: mathematical-premise
  def-smooth-periodic-oscillator-pulse-model: mathematical-premise
  def-cm16-stroboscopic-and-poincare-maps: formulation-prerequisite
  def-cm16-chaos-list-for-model-maps: formulation-prerequisite
  post-cm02-force-superposition: formulation-prerequisite
  def-cm02-newtonian-flow: formulation-prerequisite
  def-cm01-units: formulation-prerequisite
  def-bilateral-symbol-and-bounded-sequence-space: mathematical-premise
  def-cm-topologically-mixing-dense-periodic-and-sensitive-maps: mathematical-premise
  def-stable-unstable-cones-and-line-slopes: mathematical-premise
  def-countable-choice: mathematical-premise
  def-dependent-choice: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "The conditional chaos theorem for one declared smooth mechanical model: a single label of fixed positive mass on a line, subject to the harmonic restoring force plus a smooth P-periodic polynomial pulse forcing derived from an explicit bump function. For every pulse width below a threshold depending only on the dimensionless amplitude parameter a>=100 and the bump, the physical stroboscopic map of the model has a compact invariant set on which it is conjugate to the two-sign shift, is topologically mixing, has dense periodic points and sensitive dependence, with two hyperbolic fixed points and transverse homoclinic points, and all coded states satisfy the explicit bounds |Q|<=sqrt(a+3) l0 and |Pi|<=m l0 w0 sqrt(a+3). The model is an adopted mechanical model, not a reported apparatus; no measurement, no empirical chaos claim and no claim about other driven or nearly integrable models is made."
sources:
  references:
    - title: "P. Cvitanovic, R. Artuso, R. Mainieri, G. Tanner, G. Vattay, Chaos: Classical and Quantum (ChaosBook.org, edition 17.6.8), Chapter 14 Section 14.6 and Chapter 15 Sections 15.1-15.3: symbolic dynamics, the Henon horseshoe and homoclinic tangles as concrete constructions rather than pictures"
      url: "https://chaosbook.org/chapters/ChaosBook.pdf"
    - title: "R. Devaney and Z. Nitecki, Shift automorphisms in the Henon mapping, Communications in Mathematical Physics 67 (1979) 137-146: the shift structure of a quadratic horseshoe and the stable/unstable sectors"
      url: "https://projecteuclid.org/journals/communications-in-mathematical-physics/volume-67/issue-2/Shift-automorphisms-in-the-H%C3%A9non-mapping/cmp/1103905161.pdf"
    - title: "Gerald Sussman and Jack Wisdom, Structure and Interpretation of Classical Mechanics, 2nd ed., §4.3: the tangle narrative and the explicit warning that a pictured crossing does not prove chaos"
      url: "https://mitp-content-server.mit.edu/books/content/sectbyfn/books_pres_0/9579/sicm_edition_2.zip"
---

## Statement

Grant the Axioms of Countable and Dependent Choice
([[def-countable-choice]], [[def-dependent-choice]]), inherited from the
supplier theorem below.

**(i) The model.** Fix a length scale $\ell_0>0$, a mass $m>0$, a frequency
scale $\omega_0>0$, a dimensionless amplitude $a\ge100$, and a pulse width
$\delta>0$. Let $w$ be the normalized smooth bump and $\beta_\delta$ the
smooth $P$-periodic pulse of [[def-smooth-periodic-oscillator-pulse-model]]
with $P:=\pi/2+\delta$, $\beta_\delta=0$ on $[0,\pi/2]$ and
$\beta_\delta(t)=\delta^{-1}w((t-\pi/2)/\delta)$ on $[\pi/2,P]$. The
**physical pulsed oscillator model** is the one-label model on the
configuration domain $Q:=\mathbb R$ with fixed mass $m$ and the
$T_p$-periodic force map
$$F(T,Q):=-m\omega_0^2\Bigl[Q+\ell_0\,\beta_\delta(\omega_0T)\Bigl(a-\frac{Q^2}{\ell_0^2}\Bigr)\Bigr], \qquad T_p:=\frac{P}{\omega_0},$$
that is, a model of [[post-cm02-force-superposition]] with
$m\ddot Q=F(T,Q)$ and $F(T+T_p,Q)=F(T,Q)$; its motions are the $C^2$ curves of
[[def-cm02-newtonian-flow]]. Its canonical momentum is
$\Pi=m\dot Q$ and its stroboscopic map at period $T_p$ is the map $\Psi_\delta$
of [[def-cm16-stroboscopic-and-poincare-maps]] clause (i).

**(ii) The horseshoe.** There is $\delta_0>0$, depending only on $a$ and the
bump $w$, such that for every $0<\delta<\delta_0$ there is a homeomorphism
$H_\delta$ of the two-sign shift space $(X_\pm,D_\pm)$ of
[[def-bilateral-symbol-and-bounded-sequence-space]] onto a compact subset
$\Lambda_\delta^{\mathrm{phys}}$ of the physical phase plane such that
$$\Psi_\delta\circ H_\delta=H_\delta\circ S_\pm,$$
so that $\Lambda_\delta^{\mathrm{phys}}$ is compact and $\Psi_\delta$-invariant
and the restriction $\Psi_\delta|_{\Lambda_\delta^{\mathrm{phys}}}$ is
conjugate to the shift; with the Euclidean metric of the chart this
restriction is chaotic in the stated sense of
[[def-cm16-chaos-list-for-model-maps]]: continuous, topologically mixing, dense
periodic points and sensitive dependence with a positive constant.

**(iii) Hyperbolic points and transverse homoclinic orbits.** The two constant
codes give two hyperbolic fixed points of $\Psi_\delta$, one of each sign; and
for every code $\sigma\in X_\pm$ that is constant outside a finite set, the
point $H_\delta(\sigma)$ is a transverse homoclinic point of the corresponding
fixed point, in the sense of the stable and unstable cones and line fields of
[[def-stable-unstable-cones-and-line-slopes]]; distinct such codes give
distinct points.

**(iv) Explicit bounds.** Write $R:=\sqrt a+3$. Every state in
$\Lambda_\delta^{\mathrm{phys}}$ satisfies
$$\lvert Q\rvert\le R\,\ell_0,\qquad \lvert\Pi\rvert=m\ell_0\omega_0\,\lvert p\rvert\le m\ell_0\omega_0R,$$
and every coded trajectory exists for all times and remains in that box at the
stroboscopic times. For $a=100$ the bounds are $\lvert Q\rvert\le13\,\ell_0$
and $\lvert\Pi\rvert\le13\,m\ell_0\omega_0$.

**(v) Scope.** The forcing is an adopted phenomenological polynomial pulse
generated by the explicit bump; it is not claimed to be an observed drive or
apparatus, and no measurement, calibration or uncertainty is involved. The
result is about this one model: it does not assert chaos for every driven
pendulum, for separatrix splitting in gravitational or vortex models, for
Hénon-Heiles energies, or for any numerical portrait, and it does not
validate a first-order Melnikov calculation by analogy
([[def-cm16-chaos-list-for-model-maps]] clause (d)).

## Facts & Assumptions

**Given:** the scales $\ell_0,m,\omega_0$, the parameters $a\ge100$ and
$\delta>0$, the bump $w$ and pulse $\beta_\delta$ of
[[def-smooth-periodic-oscillator-pulse-model]], and the physical model
$m\ddot Q=F(T,Q)$ of the Statement.

[L1] The dimensionless horseshoe ([[thm-smooth-fixed-mass-mechanical-horseshoe]]): grant $\mathrm{AC}_\omega$ and $\mathrm{DC}$; for $a\ge100$ and the stroboscopic map $G_\delta$ of the dimensionless model of [[def-smooth-periodic-oscillator-pulse-model]] there is $\delta_0>0$ depending only on $a,w$ such that for every $0<\delta<\delta_0$ there is a homeomorphism $h_\delta:X_\pm\to\mathbb R^2$ onto a compact $G_\delta$-invariant set $\Lambda_\delta$ with $G_\delta\circ h_\delta=h_\delta\circ S_\pm$; $G_\delta|_{\Lambda_\delta}$ is chaotic in the stated sense; the constant codes give two hyperbolic fixed points; and every finite-word code gives a transverse homoclinic point.

[L2] The dimensionless model and its coding bound ([[def-smooth-periodic-oscillator-pulse-model]], [[def-bilateral-symbol-and-bounded-sequence-space]]): the dimensionless model is $q''=-q+\beta_\delta(t)(q^2-a)$ with fixed mass $1$; its coded phase points are pairs of bounded sequences with $\lvert x_n\rvert\le R=\sqrt a+3$, so $G_\delta$'s coded states $(q,p)$ satisfy $\lvert q\rvert\le R$, $\lvert p\rvert\le R$.

[L3] Transport of the topological properties under a homeomorphism ([[def-cm-topologically-mixing-dense-periodic-and-sensitive-maps]]): continuity, topological mixing, density of periodic points and sensitive dependence are invariant under conjugation by a homeomorphism, the sensitivity constant changing with the uniform continuity moduli on the compact set.

## Proof

**Proof technique:** direct.

1.1 Regularity and scaling of the model: the potential
$U(T,Q):=\tfrac12m\omega_0^2Q^2+m\omega_0^2\ell_0^2\beta_\delta(\omega_0T)[aQ/\ell_0-Q^3/(3\ell_0^3)]$
is $C^\infty$ on $\mathbb R^2$ ([[def-smooth-periodic-oscillator-pulse-model]]), and $F(T,Q)=-\partial_QU=-m\omega_0^2[Q+\ell_0\beta_\delta(\omega_0T)(a-Q^2/\ell_0^2)]$ is $T_p$-periodic, $T_p=P/\omega_0$. With $Q=\ell_0q$ and $T=t/\omega_0$ one has $\ddot Q=\ell_0\omega_0^2q''$, so $m\ddot Q=F(T,Q)$ is equivalent to $q''=-q+\beta_\delta(t)(q^2-a)$; consequently the physical trajectory through $(Q_0,\Pi_0)=(\ell_0q_0,m\ell_0\omega_0p_0)$ is $T\mapsto(\ell_0q(\omega_0T),m\ell_0\omega_0q'(\omega_0T))$ for the dimensionless trajectory through $(q_0,p_0)$, and conversely. [given, algebra]

1.2 Application of [L1]: for $a\ge100$ let $\delta_0$ be the threshold of [L1]. For $0<\delta<\delta_0$, [L1] provides $h_\delta,\Lambda_\delta$ with the conjugacy, the chaos list, the hyperbolic fixed points and the transverse homoclinic points for the dimensionless stroboscopic map $G_\delta$. [given, L1]

2.1 Physical transfer: define $S:\mathbb R^2\to\mathbb R^2$, $S(q,p):=(\ell_0q,m\ell_0\omega_0p)$ and $H_\delta:=S\circ h_\delta$, $\Lambda_\delta^{\mathrm{phys}}:=S(\Lambda_\delta)$. By step 1.1 the physical stroboscopic map satisfies $\Psi_\delta\circ S=S\circ G_\delta$, hence $\Psi_\delta\circ H_\delta=H_\delta\circ S_\pm$; $S$ is a linear homeomorphism and $\Lambda_\delta$ is compact, so $\Lambda_\delta^{\mathrm{phys}}$ is compact and $\Psi_\delta$-invariant and $\Psi_\delta|_{\Lambda_\delta^{\mathrm{phys}}}$ is conjugate to $G_\delta|_{\Lambda_\delta}$ through the homeomorphism $H_\delta$ of the compact sets. [step 1.1, step 1.2, L1, algebra]

3.1 Clause (ii): by step 2.1 and [L3], the four properties of the chaos list transfer to $\Psi_\delta|_{\Lambda_\delta^{\mathrm{phys}}}$: continuity (conjugacy of continuous maps), topological mixing and density of periodic points are conjugation-invariant, and sensitive dependence transfers with a positive constant because $H_\delta$ is uniformly continuous on the compact $X_\pm$ and $H_\delta^{-1}$ is uniformly continuous on the compact $\Lambda_\delta^{\mathrm{phys}}$. Clause (iii) likewise transfers the two hyperbolic fixed points and the transverse homoclinic points of [L1] to $\Psi_\delta$ and the points $H_\delta(\sigma)$, since $S$ and its inverse are linear and preserve transversality and distinctness. [step 2.1, L1, L3, algebra]

4.1 Clause (iv): by [L2] every coded state $(q,p)$ of $G_\delta$ satisfies $\lvert q\rvert\le R$ and $\lvert p\rvert\le R$ with $R=\sqrt a+3$; applying $S$ gives $\lvert Q\rvert=\ell_0\lvert q\rvert\le R\ell_0$ and $\lvert\Pi\rvert=m\ell_0\omega_0\lvert p\rvert\le m\ell_0\omega_0R$, and for $a=100$ one has $R=13$. Each coded trajectory is defined for all times because its stroboscopic images remain in the domain of $\Psi_\delta$ by invariance of $\Lambda_\delta^{\mathrm{phys}}$; this is the boundedness statement of clause (iv). [step 2.1, step 3.1, L1, L2, algebra] ∎

## Remarks

- **Why this is a chaos proof and not a picture.** The conjugacy to the shift, the mixing, the density of periodic points, the sensitivity and the transverse homoclinic points are all inferred from the supplier theorem's explicit constructions (a contraction on a complete sequence space, invariant cones with expansion, and weighted graph-transform curves), not from a plotted tangle; the physical transfer uses only a linear change of scale. See [[def-cm16-chaos-list-for-model-maps]] clause (d).

- **Choice assumptions.** The countable and dependent choice assumptions are inherited from the supplier's compactness and homeomorphism clauses and are declared in the Statement; no other choice is used, since all constructions are explicit.

- **Units.** $[F]=\mu\ell\tau^{-2}=$ N, $[\Pi]=\mu\ell^2\tau^{-1}$, $[\ell_0]=[R\ell_0]=\ell$ and $[m\ell_0\omega_0R]=\mu\ell\tau^{-1}$ ([[def-cm01-units]]); the pulse duration is $\delta/\omega_0$ and the forcing period $T_p=P/\omega_0$, both times.
