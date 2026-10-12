---
id: pthm-gr-schwarzschild-stationary-redshift
kind: physics-theorem
title: "Restricted redshift prediction of the Schwarzschild vacuum model: the observer-energy ratio between static observers"
status: draft
origin: session
domain: physics
dependency_level: 15
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [pthm-gr-schwarzschild-vacuum-model, def-gr-schwarzschild-exterior-model, lem-gr-schwarzschild-metric-properties, lem-gr-schwarzschild-static-congruence-and-clock-rates, lem-gr-schwarzschild-timelike-geodesic-reduction, post-gr-ideal-clocks-and-free-fall, def-gr-observer-relative-energy-and-momentum, lem-gr-observer-pairing-with-future-causal-vectors, def-gr-observer-and-rest-space, def-gr-observer-congruence-and-adapted-charts, def-gr-smooth-lorentzian-objects, def-gr-metric-selected-connection, thm-gr-nondegenerate-levi-civita-and-tensor-derivative, thm-gr-killing-and-on-shell-matter-identities, def-gr-killing-field, def-geodesic-of-an-affine-connection, def-causal-classification-of-lorentz-vectors, def-derivative, thm-algebra-of-derivatives, def-rational-power]
dependency_roles:
  pthm-gr-schwarzschild-vacuum-model: physical-result
  def-gr-schwarzschild-exterior-model: mathematical-premise
  lem-gr-schwarzschild-metric-properties: mathematical-premise
  lem-gr-schwarzschild-static-congruence-and-clock-rates: mathematical-premise
  lem-gr-schwarzschild-timelike-geodesic-reduction: mathematical-premise
  post-gr-ideal-clocks-and-free-fall: physical-assumption
  def-gr-observer-relative-energy-and-momentum: mathematical-premise
  lem-gr-observer-pairing-with-future-causal-vectors: mathematical-premise
  def-gr-observer-and-rest-space: mathematical-premise
  def-gr-observer-congruence-and-adapted-charts: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  thm-gr-killing-and-on-shell-matter-identities: mathematical-premise
  def-gr-killing-field: mathematical-premise
  def-geodesic-of-an-affine-connection: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  def-derivative: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  def-rational-power: mathematical-premise
physical_scope: "Conditional prediction of the adopted Schwarzschild exterior vacuum model: for a specified ideal light ray (a future null geodesic) joining two events on static observer worldlines at radii r_E and r_R, the ratio of the observer energies measured with the static congruence is sqrt(f(r_E)/f(r_R)) with f = 1 - 2G_N m_*/(c^2 r), and the redshift parameter defined from that ratio satisfies 1 + z = sqrt(f(r_R)/f(r_E)). The statement is an exact consequence of the model metric, the null-geodesic light-ray rule and the observer-energy definition; it asserts no observed wavelength, spectral line, calibration or measurement, and it excludes moving observers, non-geometric-optics propagation and dispersion. Any comparison with a reported redshift requires a separate apparatus, calibration and statistical model."
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 7 (7.59)-(7.62): the computation of the frequency shift between two observers fixed at constant (r,theta,phi) in the Schwarzschild geometry, omega_2/omega_1 = sqrt((1-2GM/r_1)/(1-2GM/r_2)), printed pp. 180-181 (PDF pp. 187-188)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), section 1.2.5: the gravitational redshift derived from the static potential, omega_A/omega_B = 1 + (Phi(r_A)-Phi(r_B))/c^2 to leading order, printed pp. 25-26 (PDF pp. 32-33); section 6.1.3: the statement that light emerging from a deeper gravitational well appears increasingly redshifted, printed p. 243 (PDF p. 250)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
verification:
  precheck: pass
---

## Statement

Adopt the Schwarzschild exterior vacuum model of
[[pthm-gr-schwarzschild-vacuum-model]]: the exterior datum $(M,g,N)$ of mass
parameter $m_*>0$ with $s=2G_Nm_*/c^2$ and $f(r)=1-s/r$
([[def-gr-schwarzschild-exterior-model]]), its metric-selected connection
$\nabla$ ([[def-gr-metric-selected-connection]],
[[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]), its static
congruence $n=f^{-1/2}\partial_0$
([[lem-gr-schwarzschild-static-congruence-and-clock-rates]]), and the light-ray
rule that ideal light rays are future null geodesics of $\nabla$
([[post-gr-ideal-clocks-and-free-fall]] clause (iii)). Let $\eta:J\to M$ be
such a ray: a $C^1$ curve on an interval $J$ with tangent $W=\eta'$, $g(W,W)=0$
and $W$ future-directed ([[def-geodesic-of-an-affine-connection]],
[[def-causal-classification-of-lorentz-vectors]]). Let $s_E,s_R\in J$ with
$s_E<s_R$ and suppose $\eta(s_E)$ and $\eta(s_R)$ lie on static observer
worldlines of radii $r_E=r(\eta(s_E))$ and $r_R=r(\eta(s_R))$ with
$r_E,r_R\in(s,\infty)$. For each parameter value define the **observer energy
of the ray relative to the static observers** by

$$E(s):=-c\,g_{\eta(s)}\bigl(W(s),n(\eta(s))\bigr),$$

the value of the observer-energy definition of
[[def-gr-observer-relative-energy-and-momentum]] clause (a) for the unit
observer $n$. Then:

**(a) Constancy of the Killing pairing.** $\partial_0$ is a Killing field of
$g$ and the function $C:=-g_{\eta(s)}(W(s),\partial_0)$ is constant along $J$;
moreover $C>0$.

**(b) The observer-energy ratio.** $E(s)>0$ along the ray and

$$\frac{E(s_R)}{E(s_E)}=\sqrt{\frac{f(r_E)}{f(r_R)}}=\sqrt{\frac{1-s/r_E}{1-s/r_R}} .$$

**(c) Redshift parameter.** If the **redshift parameter** of the pair of events
is defined by $z:=\dfrac{E(s_E)}{E(s_R)}-1$, equivalently by
$1+z=E(s_E)/E(s_R)$, then

$$1+z=\sqrt{\frac{f(r_R)}{f(r_E)}} .$$

The ratio in (b) and (c) is unchanged if $W$ is replaced by $\mu W$ with a
nonzero constant $\mu$: a null ray determines its tangent only up to scale,
and only the ratio of energies is asserted. No observed wavelength, spectral
line, calibration or measurement enters the statement; the identification of
the ratio with a frequency ratio of an ideal ray is part of the framework's
geometric-optics reading, and moving observers require additional factors.

**(d) Scope.** The statement is a model prediction for the specified ideal
ray and the specified static observers; it asserts no redshift measurement and
no property of any real source, and it excludes non-geometric-optics
propagation, dispersion and any apparatus or analysis model.

## Facts & Assumptions

**Given:** The Schwarzschild exterior datum with $m_*>0$ and $s=2G_Nm_*/c^2$, its metric $g$, its connection $\nabla$, its static congruence $n=f^{-1/2}\partial_0$, a future null geodesic $\eta:J\to M$ with tangent $W$, parameters $s_E<s_R$ in $J$ with radii $r_E,r_R>s$, and the energies $E(s)$ of the statement.

[L1] The metric components in a product chart are $g_{00}=-f$, $g_{11}=f^{-1}$, $g_{22}=r^2$, $g_{33}=r^2\sin^2\vartheta$ with $f=1-s/r>0$ on $r>s$, and the static congruence is $n=f^{-1/2}\partial_0$ with $g(n,n)=-1$, $g(n,\partial_0)=-f^{1/2}$ ([[lem-gr-schwarzschild-metric-properties]], [[lem-gr-schwarzschild-static-congruence-and-clock-rates]] clause (a)).

[L2] $\partial_0$ and $\partial_\varphi$ are Killing fields of $g$, and $g(\xi,\gamma')$ is constant along every geodesic $\gamma$ for every Killing field $\xi$ ([[lem-gr-schwarzschild-timelike-geodesic-reduction]] clause (a), [[thm-gr-killing-and-on-shell-matter-identities]] clause (b), [[def-gr-killing-field]]).

[L3] The observer energy of a tangent vector $P$ relative to an observer $n$ is $E_n(P)=-c\,g(P,n)$; for a nonzero future causal $P$ it is positive ([[def-gr-observer-relative-energy-and-momentum]] clause (a), [[lem-gr-observer-pairing-with-future-causal-vectors]] claim 1, [[def-gr-observer-and-rest-space]]).

[L4] The ideal light ray of the model is a future null geodesic and its tangent is determined only up to nonzero scale ([[post-gr-ideal-clocks-and-free-fall]] clause (iii), [[def-geodesic-of-an-affine-connection]]).

[L5] The square root $\sqrt{f(r)}>0$ is smooth on $r>s$, and $\sqrt{f(r_R)}/\sqrt{f(r_E)}=\sqrt{f(r_R)/f(r_E)}$ ([[def-rational-power]], [[thm-algebra-of-derivatives]], [[def-derivative]]).

## Proof

**Proof technique:** contract the null tangent with the Killing field, express the observer energy through the static congruence, and take the ratio at the two parameter values.

1.1 (Constancy and positivity of the pairing.) By [L2] the field $\partial_0$ is Killing and the function $s\mapsto g_{\eta(s)}(W(s),\partial_0)$ is constant on $J$; write $C:=-g(W,\partial_0)$. Since $W$ is nonzero future causal and $\partial_0$ is future timelike, [L3] with the observer $\tilde n:=\partial_0/\sqrt{f}$ applied at each point shows $g(W,\tilde n)<0$, that is, $-g(W,\partial_0)/\sqrt f>0$, hence $C>0$. [L2, L3, L1, algebra]

2.1 (The observer energy along the ray.) By [L3] and [L1], writing $n=f^{-1/2}\partial_0$ at each point and using the constancy of step 1.1, $E(s)=-c\,g(W,n)=-c\,f(r(\eta(s)))^{-1/2}g(W,\partial_0)=c\,C\,f(r(\eta(s)))^{-1/2}>0$. Evaluating at $s_E$ and $s_R$ and dividing gives $E(s_R)/E(s_E)=\sqrt{f(r_E)/f(r_R)}$, which is claim (b); the definition $1+z=E(s_E)/E(s_R)$ gives $1+z=\sqrt{f(r_R)/f(r_E)}$, which is (c). Replacing $W$ by $\mu W$ multiplies $C$ and every $E(s)$ by $\mu$, leaving both ratios unchanged, and by [L4] only this scale ambiguity is present. [step 1.1, L1, L3, L4, L5, algebra]

3.1 (Conclusion and status.) Steps 1.1-2.1 establish (a)-(c) as consequences of the model, the light-ray rule and the observer-energy definition, using no observed quantity; clause (d) records that the statement is a conditional model prediction for the specified ideal ray and static observers, with moving observers and apparatus models excluded. [step 1.1, step 2.1, given] ∎

## Remarks

- **Model prediction, not an observation.** The theorem compares two ideal observer energies of one ideal null geodesic in the adopted model. A reported redshift is a measured quantity with an emission line, a spectrograph, calibration, resolution and uncertainty; identifying the two requires an apparatus and analysis model, and this is a subject for experiment items and for the experimental-interface page, not a consequence of the mathematics proved here.

- **Where each assumption entered.** The metric form gave the pairing $g(W,\partial_0)$ and the factor $f^{-1/2}$; the Killing property of $\partial_0$ gave constancy; the light-ray rule gave the identification of the ideal ray with a future null geodesic; the observer-energy definition entered through $E=-cg(W,n)$. No field equation and no matter model was used: the result holds for every Schwarzschild exterior datum with $s>0$ irrespective of the field law, and it is the physical reading of the model that attaches the frequency interpretation.
