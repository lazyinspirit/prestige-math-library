---
id: ex-gr-killing-energy-charge-of-a-static-dust
kind: example
title: "The Killing energy of a static dust in flat space and its conservation
  across slices"
status: draft
origin: session
domain: physics
dependency_level: 12
physical_scope: "An exact flat-space instance of the framework's Killing energy:
  a constant static dust with the translation Killing field of the identity
  chart, the current three-form of its Killing current, the value of the Killing
  energy on three-chains carried by constant-time slices, and its conservation
  up to the side flux. The example is an exact model calculation under the
  framework's unit reading; it asserts no measured value and no empirical mass,
  and the identification of its numbers with any physical energy requires
  separate empirical premises."
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps:
  - def-gr-killing-energy-charge
  - def-gr-killing-field
  - thm-gr-killing-and-on-shell-matter-identities
  - def-gr-dust-matter-model
  - prop-gr-dust-and-perfect-fluid-conservation-equations
  - def-gr-metric-volume-form-and-current-flux
  - thm-gr-density-divergence-and-finite-chain-flux
  - def-gr-observer-energy-momentum-current
  - lem-gr-metric-divergence-and-density-formula
  - def-gr-smooth-lorentzian-objects
  - def-gr-metric-selected-connection
  - thm-gr-nondegenerate-levi-civita-and-tensor-derivative
  - def-gr-smooth-covariant-two-tensor-field
  - def-gr-inverse-metric-and-musical-isomorphisms
  - def-gr-tensor-fields-and-components
  - def-interior-product-of-a-form-by-a-vector-field
  - def-wedge-product-of-differential-forms
  - def-gr-stress-energy-tensor-field
  - def-gr-si-unit-and-coordinate-conventions
  - def-gr-observer-congruence-and-adapted-charts
  - def-causal-classification-of-lorentz-vectors
  - lem-gr-killing-congruence-kinematics-and-energy-current
dependency_roles:
  def-gr-killing-energy-charge: formulation-prerequisite
  def-gr-killing-field: mathematical-premise
  thm-gr-killing-and-on-shell-matter-identities: mathematical-premise
  def-gr-dust-matter-model: mathematical-premise
  prop-gr-dust-and-perfect-fluid-conservation-equations: mathematical-premise
  def-gr-metric-volume-form-and-current-flux: mathematical-premise
  thm-gr-density-divergence-and-finite-chain-flux: mathematical-premise
  def-gr-observer-energy-momentum-current: mathematical-premise
  lem-gr-metric-divergence-and-density-formula: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  def-gr-smooth-covariant-two-tensor-field: mathematical-premise
  def-gr-inverse-metric-and-musical-isomorphisms: mathematical-premise
  def-gr-tensor-fields-and-components: mathematical-premise
  def-interior-product-of-a-form-by-a-vector-field: mathematical-premise
  def-wedge-product-of-differential-forms: mathematical-premise
  def-gr-stress-energy-tensor-field: formulation-prerequisite
  def-gr-si-unit-and-coordinate-conventions: formulation-prerequisite
  def-gr-observer-congruence-and-adapted-charts: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  lem-gr-killing-congruence-kinematics-and-energy-current: mathematical-premise
sources:
  references:
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos,
        Michaelmas 2019), section 4.5.5: the current -K^mu T_{mu nu} of a
        timelike Killing vector and its charge identified with the energy of the
        matter, printed pp. 188-189 (PDF pp. 195-196)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong\
        /gr/gr.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity,
        arXiv:gr-qc/9712019v1 (1997), Ch. 1 (1.104)-(1.106): the energy-momentum
        tensor of dust, printed pp. 28-30 (PDF pp. 35-37); Ch. 5 (5.39)-(5.42):
        Killing vectors and conserved quantities, printed pp. 140-142 (PDF pp.
        147-149)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
verification:
  precheck: pass
---

## Example

Let $M=\mathbb R^4$ carry the identity chart, the flat metric
$g=\operatorname{diag}(-1,1,1,1)$, the time orientation $N=\partial_0$ and the
chart orientation, with metric-selected connection $\nabla$
([[def-gr-smooth-lorentzian-objects]],
[[def-gr-metric-selected-connection]]). Let $\xi:=\partial_0$, let $\rho>0$ be
constant with the framework reading $\rho=\varepsilon$ in
$\mathrm J\,\mathrm m^{-3}$ (rest-mass density $\rho_m=\rho/c^2$),
let $u:=\partial_0$ and let $T^{ab}:=\rho\,u^au^b$, the tensor of the
dust model $(\rho,u)$ ([[def-gr-dust-matter-model]]). Then:

1. $\xi$ is a Killing field on $M$ that is everywhere timelike and
   future-directed, with $X=\sqrt{-g(\xi,\xi)}=1$ and congruence
   $n=\xi$; and the dust system holds, so $\nabla^aT_{ab}=0$ on $M$.
2. The Killing current of [[def-gr-killing-energy-charge]] is
   $J_\xi{}^a=T^{ab}\xi_b=-\rho\,\partial_0^a$, and its current $3$-form is
   $\iota_{J_\xi}\mathrm{vol}_g=-\rho\,dx^1\wedge dx^2\wedge dx^3$.
3. For every finite smooth singular $3$-chain $\Sigma$ of $M$ whose simplices
   have chart velocity vectors $(\partial_1,\partial_2,\partial_3)$ at every
   parameter point — in particular for simplices parametrized by the spatial chart
   coordinates on a constant-$x^0$ slice — the Killing energy of
   $\Sigma$ is

$$Q_\xi(\Sigma)=\rho\int_\Sigma dx^1\wedge dx^2\wedge dx^3,$$

   the integral of the model's rest-energy-density form over the chain in the
   framework's unit reading.
4. For every finite smooth singular $4$-chain $C$ of $M$ with
   $\partial C=\Sigma_2-\Sigma_1+B$,

$$Q_\xi(\Sigma_2)-Q_\xi(\Sigma_1)=-Q_\xi(B);$$

   in particular $Q_\xi(\Sigma_2)=Q_\xi(\Sigma_1)$ whenever the velocity
   vectors of every simplex of $B$ span a hyperplane containing $\partial_0$,
   since then the side flux vanishes.
5. Consequently this prescribed flat-source calculation realizes a
   conserved Killing charge: it is $\rho$ times the
   coordinate-volume reading of the slice region, read as the model's rest
   energy. The prescribed nonzero dust source is not asserted to solve the
   gravitational field law on this flat metric. No measured value is asserted.

## Facts & Assumptions

**Given:** The flat Lorentzian four-manifold $(\mathbb R^4,g)$ with identity chart, $g=\operatorname{diag}(-1,1,1,1)$, chart orientation, metric-selected connection $\nabla$, volume form $\mathrm{vol}_g$ and current flux $\Phi$; the vector fields $\xi=u=\partial_0$; the constant $\rho>0$; the tensor $T^{ab}=\rho\,u^au^b$.

[L1] On the identity chart the Christoffel symbols vanish, $\nabla$ is the coordinate connection, $\mathrm{vol}_g=dx^0\wedge dx^1\wedge dx^2\wedge dx^3$, and for a smooth vector field $J$, $\iota_J\mathrm{vol}_g=\sum_a(-1)^aJ^a\,dx^0\wedge\cdots\widehat{dx^a}\cdots\wedge dx^3$ ([[def-gr-metric-volume-form-and-current-flux]], [[lem-gr-metric-divergence-and-density-formula]], [[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]], [[def-interior-product-of-a-form-by-a-vector-field]], [[def-wedge-product-of-differential-forms]]).

[L2] $\xi=\partial_0$ has constant components in the identity chart, so it is Killing, $g(\xi,\xi)=-1$, $g(\xi,N)=-1$ and $X=1$; hence $n=\xi$ is a smooth observer congruence ([[def-gr-killing-field]], [[thm-gr-killing-and-on-shell-matter-identities]] clause (a), [[def-gr-observer-congruence-and-adapted-charts]], [[def-causal-classification-of-lorentz-vectors]]).

[L3] $(\rho,\partial_0)$ is a dust model with tensor $T^{ab}=\rho\,u^au^b$; the dust system holds for constant $\rho$ and constant $u$, and it is equivalent to $\nabla^aT_{ab}=0$ ([[def-gr-dust-matter-model]], [[prop-gr-dust-and-perfect-fluid-conservation-equations]] clause (a)).

[L4] The Killing current and Killing energy are $J_\xi{}^a=T^{ab}\xi_b$ and $Q_\xi(\Sigma)=-\Phi_{J_\xi}(\Sigma)$; if $\xi$ is timelike with $X=\sqrt{-g(\xi,\xi)}$ and $n=\xi/X$, then $J_\xi=-XJ$ with $J$ the measured current ([[def-gr-killing-energy-charge]] clauses (a)-(c), [[def-gr-observer-energy-momentum-current]]).

[L5] If $T$ is divergence-free and $\xi$ is timelike Killing on the oriented domain, $J_\xi=-XJ$ is divergence-free by [[lem-gr-killing-congruence-kinematics-and-energy-current]] clause (d). Finite-chain Stokes gives the Killing energy balance $Q_\xi(\Sigma_2)-Q_\xi(\Sigma_1)=-Q_\xi(B)$ for every finite smooth singular $4$-chain with $\partial C=\Sigma_2-\Sigma_1+B$ ([[thm-gr-density-divergence-and-finite-chain-flux]] clause (b)).

## Verification

**Proof technique:** direct; check the Killing and dust hypotheses, compute the Killing current and its three-form in the identity chart, evaluate the flux on slice chains, and apply the divergence-free Killing-current lemma and finite-chain Stokes.

1.1 (Hypotheses.) By [L2], $\xi$ is a Killing field that is everywhere timelike and future-directed, with $X=1$ and $n=\xi$; by [L3] the constant dust $(\rho,\partial_0)$ satisfies the dust system and $\nabla^aT_{ab}=0$. Hence the Killing-current construction applies and the conservation and symmetry hypotheses of [L5] are met; no gravitational field equation is used. [L2, L3, given]

2.1 (The Killing current and its three-form.) By [L1], $\xi_b=\eta_{b0}=-\delta^0{}_b$, so $J_\xi{}^a=T^{ab}\xi_b=\rho\,u^au^b\xi_b=\rho\,\partial_0^a(u^0\xi_0)=\rho\,\partial_0^a(1\cdot(-1))=-\rho\,\partial_0^a$. Since $\iota_{\partial_0}\mathrm{vol}_g=dx^1\wedge dx^2\wedge dx^3$ by [L1], linearity of the interior product gives $\iota_{J_\xi}\mathrm{vol}_g=-\rho\,dx^1\wedge dx^2\wedge dx^3$. This proves clause 2. [step 1.1, L1, L4, algebra]

3.1 (Killing energy on slice chains.) Let $\sigma$ be a smooth singular $3$-simplex of $M$ whose chart velocity vectors at every parameter point are $\sigma_*\partial_i=\partial_i$ for $i=1,2,3$ (so that its image lies in a constant-$x^0$ slice and it is parametrized by the slice coordinates). Then $\sigma^*(dx^1\wedge dx^2\wedge dx^3)=dt^1\wedge dt^2\wedge dt^3$, so by the definition of the flux through a simplex as the integral of the pulled-back current form, $\Phi_{J_\xi}(\sigma)=-\rho\int_{\Delta^3}dt^1\wedge dt^2\wedge dt^3$. By additivity of the flux over finite chains the same formula holds for every finite smooth singular $3$-chain $\Sigma$ with the stated velocity vectors, and $Q_\xi(\Sigma)=-\Phi_{J_\xi}(\Sigma)=\rho\int_\Sigma dx^1\wedge dx^2\wedge dx^3$ by [L4]. This proves clause 3. [step 2.1, L1, L4, algebra]

4.1 (Conservation and side flux.) By [L5] applied to the present Killing field, $Q_\xi(\Sigma_2)-Q_\xi(\Sigma_1)=-Q_\xi(B)$ for every finite smooth singular $4$-chain $C$ with $\partial C=\Sigma_2-\Sigma_1+B$. If the velocity vectors of every simplex of $B$ span a hyperplane containing $\partial_0$, then the four arguments $J_\xi,v_1,v_2,v_3$ of $\mathrm{vol}_g$ are linearly dependent — $J_\xi$ is a constant multiple of $\partial_0$ — so $\iota_{J_\xi}\mathrm{vol}_g$ vanishes on them and $\Phi_{J_\xi}(B)=0$, whence $Q_\xi(B)=0$ and $Q_\xi(\Sigma_2)=Q_\xi(\Sigma_1)$. This proves clause 4 and completes the verification. [step 2.1, L1, L4, L5, algebra] ∎

## Remarks

- **Reading of the value.** In the framework's stress-energy reading, $T$
  has components in $\mathrm J\,\mathrm m^{-3}$, and the flux $Q_\xi(\Sigma)$
  is read as the rest energy assigned to the chain. The parameter $\rho$ is
  the dust model's rest-energy-density parameter in the SI reading;
  $\rho_m=\rho/c^2$ is the corresponding mass density. The identification of
  $\rho\int_\Sigma dx^1\wedge dx^2\wedge dx^3$ with a physical mass or energy
  requires separate empirical premises and is not asserted.

- **Why conservation needs the side flux.** The current $J_\xi$ has no
  spatial components, so a side face swept out along $\partial_0$
  carries no flux; a side face tilted so that its velocity vectors span a
  hyperplane containing $\partial_0$ also carries none, by the
  linear-dependence argument of step 4.1. For a general side chain the flux
  need not vanish and the equality of clause 4 is a balance identity of
  bookkeeping, exactly as in
  [[thm-gr-density-divergence-and-finite-chain-flux]].
