---
id: def-gr-killing-energy-charge
kind: definition
title: "The timelike Killing current and the charge of a three-chain"
status: published
origin: session
domain: physics
dependency_level: 11
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-gr-killing-field, thm-gr-killing-and-on-shell-matter-identities, def-gr-observer-energy-momentum-current, lem-gr-observer-energy-momentum-decomposition, lem-gr-killing-congruence-kinematics-and-energy-current, def-gr-metric-volume-form-and-current-flux, thm-gr-density-divergence-and-finite-chain-flux, def-gr-stress-energy-tensor-field, def-gr-si-unit-and-coordinate-conventions, def-gr-smooth-lorentzian-objects, def-gr-observer-congruence-and-adapted-charts, def-gr-smooth-covariant-two-tensor-field, def-gr-tensor-fields-and-components, post-gr-spacetime-and-classical-domain, post-gr-field-and-matter-assumptions, post-gr-einstein-field-law, post-gr-classical-gravitational-action, prop-an-open-subset-of-a-smooth-manifold-has-a-canonical-restricted-smooth-structure, def-countable-choice]
dependency_roles:
  def-gr-killing-field: mathematical-premise
  thm-gr-killing-and-on-shell-matter-identities: mathematical-premise
  def-gr-observer-energy-momentum-current: mathematical-premise
  lem-gr-observer-energy-momentum-decomposition: mathematical-premise
  lem-gr-killing-congruence-kinematics-and-energy-current: mathematical-premise
  def-gr-metric-volume-form-and-current-flux: formulation-prerequisite
  thm-gr-density-divergence-and-finite-chain-flux: mathematical-premise
  def-gr-stress-energy-tensor-field: formulation-prerequisite
  def-gr-si-unit-and-coordinate-conventions: formulation-prerequisite
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-observer-congruence-and-adapted-charts: mathematical-premise
  def-gr-smooth-covariant-two-tensor-field: mathematical-premise
  def-gr-tensor-fields-and-components: mathematical-premise
  post-gr-spacetime-and-classical-domain: formulation-prerequisite
  post-gr-field-and-matter-assumptions: formulation-prerequisite
  post-gr-einstein-field-law: formulation-prerequisite
  post-gr-classical-gravitational-action: formulation-prerequisite
  prop-an-open-subset-of-a-smooth-manifold-has-a-canonical-restricted-smooth-structure: mathematical-premise
  def-countable-choice: mathematical-premise
physical_scope: "The charge associated with a timelike Killing symmetry of the smooth classical branch of the gravitational framework: the Killing current built from a smooth stress-energy tensor and its flux through finite smooth singular three-chains on a chosen oriented domain. It has an energy reading in joules when the Killing field is normalized with a length-valued flow parameter under the length-coordinate convention; other normalizations carry the corresponding scale in the charge's units. The item asserts no conservation, no finiteness for unbounded chains, no positivity and no measurement. With divergence-free T and Killing symmetry, the current lemma supplies conservation up to side flux; the field law is one possible source of that divergence condition. The definition applies only where the stated timelike Killing field exists."
sources:
  references:
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), section 4.5.5 'Conserved Energy from a Killing Vector': the current J_T = -K^mu T_{mu nu}, its vanishing divergence for Killing K, and the charge Q_T(Sigma) identified with the energy of the matter when K is everywhere timelike, printed pp. 188-189 (PDF pp. 195-196)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), section 5.3: Killing vectors and conserved quantities, printed pp. 53-56 (PDF pp. 54-57); section 9.3: conservation of T^{ab} on shell, printed pp. 116-118 (PDF pp. 117-119)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
    - title: "E. Gourgoulhon, 3+1 Formalism and Bases of Numerical Relativity, arXiv:gr-qc/0703035v1 (2007), section 4.1.2: energy density and momentum density measured by an observer, printed p. 52 (PDF p. 52)"
      url: "https://arxiv.org/pdf/gr-qc/0703035"
verification:
  precheck: n/a
---

## Definition

Let $(M,g,N)$ be a time-oriented smooth Lorentzian four-manifold
([[def-gr-smooth-lorentzian-objects]]), let $U\subseteq M$ be a nonempty open
subset carrying the restricted smooth structure of
[[prop-an-open-subset-of-a-smooth-manifold-has-a-canonical-restricted-smooth-structure]],
choose an orientation on $U$ and its metric volume form (independent of the
time orientation), let $T$ be a smooth symmetric covariant $2$-tensor field on $U$
([[def-gr-smooth-covariant-two-tensor-field]]) — in an application this is the
stress-energy tensor field of the model's matter sector
([[def-gr-stress-energy-tensor-field]]) — and let $\xi$ be a Killing field of
$(M,g)$ on $U$ ([[def-gr-killing-field]],
[[thm-gr-killing-and-on-shell-matter-identities]] clause (a)) that is
everywhere timelike and future-directed,

$$g_p(\xi_p,\xi_p)<0,\qquad g_p(\xi_p,N_p)<0\qquad\text{for every }p\in U .$$

Put $X:=\sqrt{-g(\xi,\xi)}>0$ on $U$ and $n:=\xi/X$, an observer congruence on
$U$: $g(n,n)=-1$ and $g(n,N)=g(\xi,N)/X<0$
([[def-gr-observer-congruence-and-adapted-charts]]).

**(a) Killing current.** The **Killing current** of the pair $(T,\xi)$ is the
smooth vector field on $U$

$$J_\xi{}^a:=T^{ab}\xi_b .$$

Since $\xi=Xn$ and $J^a=-T^{ab}n_b$, one has
$T^{ab}\xi_b=-XJ^a$, where $J=-T(\cdot,n)$ is the measured
energy-momentum current of [[def-gr-observer-energy-momentum-current]]; no
conservation of $J_\xi$ is asserted by this definition.

**(b) Killing charge of a three-chain.** For every finite smooth singular
$3$-chain $\Sigma$ of $M$ contained in $U$, the **Killing charge** of $\Sigma$
with respect to $\xi$ is the real number

$$Q_\xi(\Sigma):=-\Phi_{J_\xi}(\Sigma),$$

where $\Phi_{J_\xi}$ is the flux of the current $J_\xi$ through
$3$-chains on the oriented open submanifold $U$ in the sense of [[def-gr-metric-volume-form-and-current-flux]]
clause (b).

When $\xi$ is normalized with a length-valued flow parameter in the SI
length-coordinate convention, this charge is read as a **Killing energy**.

**(c) Relation to the measured energy current.** Since $J_\xi=-XJ$,

$$Q_\xi(\Sigma)=\Phi_{XJ}(\Sigma),$$

the flux of the redshift-weighted measured energy current $XJ$. For a
$3$-simplex $\sigma$ that is non-null with velocity basis $(v_1,v_2,v_3)$ and
adapted unit normal $\nu^{*}$ (so that $(\nu^{*},v_1,v_2,v_3)$ is positively
oriented and $\varepsilon:=g(\nu^{*},\nu^{*})\in\{-1,1\}$), the pullback of
$\iota_{XJ}\mathrm{vol}_g$ is
$\varepsilon\,g(XJ,\nu^{*})\sqrt{|\det(g(v_i,v_j))|}\,dt^1\wedge dt^2\wedge dt^3$
([[thm-gr-density-divergence-and-finite-chain-flux]] clause (c)); when
$\nu^{*}=-n$ and the $v_i$ span $n^{\perp}$ this coefficient equals
$-X\mu\sqrt{|\det(g(v_i,v_j))|}$, so up to the orientation sign carried by the
adapted normal, $Q_\xi(\Sigma)$ is the integral of the redshift-weighted
measured energy density $X\mu$ over $\Sigma$. The factor $X$ carries the
normalization and units of $\xi$.

**(d) Reading and scope.** $Q_\xi(\Sigma)$ is the charge that the model
assigns to the chain $\Sigma$ under the symmetry $\xi$, in the framework
of the postulates [[post-gr-spacetime-and-classical-domain]],
[[post-gr-field-and-matter-assumptions]] with the assigned tensor and symmetry; it does not require the field law
for its definition. Under the unit conventions of
[[def-gr-si-unit-and-coordinate-conventions]], if $T$ is read in
$\mathrm J\,\mathrm m^{-3}$ and the flow parameter of $\xi$ is measured in
metres, then $X$ is dimensionless and $Q_\xi(\Sigma)$ is read in $\mathrm J$.
More generally, if that parameter has unit $\mathcal S$, then in a
length-coordinate chart $X$ has units $\mathrm m/\mathcal S$ and $Q_\xi$ has
units $\mathrm J\,\mathrm m/\mathcal S$; converting it to an energy requires
an explicitly specified normalization factor. The value depends on the model,
on $\xi$ (replacing $\xi$ by a dimensionless constant multiple $\lambda\xi$
with $\lambda>0$ multiplies $X$, $J_\xi$ and $Q_\xi$ by $\lambda$), and on the
chain $\Sigma$. The definition asserts no conservation, no positivity, no
finiteness for unbounded chains and no measured value. If additionally
$\nabla^aT_{ab}=0$ on $U$, the Killing
current lemma gives conservation up to the side flux. The field law
([[post-gr-einstein-field-law]] or [[post-gr-classical-gravitational-action]])
is one way to supply this divergence condition; it is not necessary for
the mathematical conservation implication. If no
timelike Killing field exists on $U$, $Q_\xi$ is not defined by this item.
