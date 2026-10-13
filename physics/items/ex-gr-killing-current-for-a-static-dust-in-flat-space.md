---
id: ex-gr-killing-current-for-a-static-dust-in-flat-space
kind: example
title: "The Killing current of a static dust congruence in flat space"
status: published
origin: session
domain: mathematics
dependency_level: 10
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-killing-field, thm-gr-killing-and-on-shell-matter-identities, def-gr-dust-matter-model, prop-gr-dust-and-perfect-fluid-conservation-equations, def-gr-smooth-lorentzian-objects, def-gr-metric-selected-connection, thm-gr-nondegenerate-levi-civita-and-tensor-derivative, def-gr-inverse-metric-and-musical-isomorphisms, def-gr-smooth-covariant-two-tensor-field, def-gr-metric-volume-form-and-current-flux, def-interior-product-of-a-form-by-a-vector-field, def-smooth-vector-field-as-a-tangent-bundle-section, def-c-r-and-smooth-maps-between-smooth-manifolds]
dependency_roles:
  def-gr-killing-field: mathematical-premise
  thm-gr-killing-and-on-shell-matter-identities: mathematical-premise
  def-gr-dust-matter-model: mathematical-premise
  prop-gr-dust-and-perfect-fluid-conservation-equations: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  def-gr-inverse-metric-and-musical-isomorphisms: mathematical-premise
  def-gr-smooth-covariant-two-tensor-field: mathematical-premise
  def-gr-metric-volume-form-and-current-flux: mathematical-premise
  def-interior-product-of-a-form-by-a-vector-field: mathematical-premise
  def-smooth-vector-field-as-a-tangent-bundle-section: mathematical-premise
  def-c-r-and-smooth-maps-between-smooth-manifolds: mathematical-premise
sources:
  references:
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), section 5.3: Killing vectors and the conserved quantity X_a V^a along geodesics, printed pp. 53-56 (PDF pp. 54-57)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 5 (5.39)-(5.42): Killing vectors and conserved quantities along geodesics, printed pp. 140-142 (PDF pp. 147-149)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
verification:
  precheck: pass
---

## Example

Let $M=\mathbb R^4$ carry the identity chart, the flat metric
$g=\operatorname{diag}(-1,1,1,1)$, the time orientation $N=\partial_0$ and the
chart orientation, with metric-selected connection $\nabla$
([[def-gr-smooth-lorentzian-objects]],
[[def-gr-metric-selected-connection]]). Let $\xi:=\partial_0$, let
$\rho:\mathbb R^4\to(0,\infty)$ be smooth with $\partial_0\rho=0$, and let
$u:=\partial_0$, so that $(\rho,u)$ is a dust model on $M$ with tensor
$T^{ab}=\rho u^au^b$ ([[def-gr-dust-matter-model]]). Then:

1. $\xi=\partial_0$ is a Killing field.
2. The current $J^a:=T^{ab}\xi_b$ equals $J=-\rho\,u$, and $\nabla_aJ^a=0$.
3. $\iota_J\mathrm{vol}_g=-\rho\,dx^1\wedge dx^2\wedge dx^3$: the current
   $3$-form is (minus) the rest density carried by the constant-$x^0$ slices,
   and its flux through corresponding regions of two slices is equal because
   $\partial_0\rho=0$.

## Facts & Assumptions

**Given:** The flat Lorentzian four-manifold $(\mathbb R^4,g)$ with identity chart, metric-selected connection $\nabla$, the vector field $\xi=\partial_0$, the dust model $(\rho,u)$ with $u=\partial_0$ and $\partial_0\rho=0$, and its tensor $T^{ab}=\rho u^au^b$.

[L1] $\xi$ is a Killing field of $(M,g)$ exactly when $\mathcal L_\xi g=0$; equivalently $\nabla_a\xi_b+\nabla_b\xi_a=0$ ([[def-gr-killing-field]], [[thm-gr-killing-and-on-shell-matter-identities]] clause (a)).

[L2] For symmetric $T$ with $\nabla^aT_{ab}=0$ and Killing $\xi$, the current $J^a=T^{ab}\xi_b$ satisfies $\nabla_aJ^a=0$ ([[thm-gr-killing-and-on-shell-matter-identities]] clause (c)).

[L3] The dust system holds for $(\rho,u)$ when $\partial_0\rho=0$, hence $\nabla^aT_{ab}=0$ ([[prop-gr-dust-and-perfect-fluid-conservation-equations]] clause (a)).

[L4] On the identity chart $\Gamma\equiv0$, so $\nabla$ is the coordinate connection; $\xi_b=\eta_{b0}=-\delta^0{}_b$, and $\mathrm{vol}_g=dx^0\wedge dx^1\wedge dx^2\wedge dx^3$ with $\iota_{\partial_0}\mathrm{vol}_g=dx^1\wedge dx^2\wedge dx^3$ ([[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]], [[def-gr-inverse-metric-and-musical-isomorphisms]], [[def-gr-metric-volume-form-and-current-flux]], [[def-interior-product-of-a-form-by-a-vector-field]]).

## Verification

**Proof technique:** direct; check the Killing equation with the constant metric, compute the current and its divergence, and evaluate the current form.

1.1 (Killing field.) In the identity chart the metric components are constant, so $\partial_cg_{ab}=0$ and, by [L4], $\Gamma\equiv0$; hence $\nabla_a\xi_b+\nabla_b\xi_a=\partial_a\xi_b+\partial_b\xi_a$. Since $\xi=\partial_0$ has constant components, $\nabla_a\xi_b=0$ for all $a,b$ and the Killing equation of [L1] holds. [L1, L4, algebra]

1.2 (Conservation of the dust tensor.) By [L4] and $\partial_0\rho=0$, $\nabla_a(\rho u^a)=\partial_0\rho=0$ and $u^a\nabla_au^b=0$: the dust system holds, so [L3] gives $\nabla^aT_{ab}=0$. [L3, L4, algebra]

2.1 (The current.) By [L4], $J^a=T^{ab}\xi_b=\rho u^au^b\xi_b=\rho u^a(u^0\xi_0)=\rho u^a(1\cdot(-1))=-\rho u^a$; that is, $J=-\rho u=(-\rho,0,0,0)$. By [L4], $\nabla_aJ^a=\partial_0(-\rho)=0$; consistently, steps 1.1 and 1.2 put us in the hypotheses of [L2]. [step 1.1, step 1.2, L2, L4, algebra]

3.1 (The current form.) By [L4], $\iota_J\mathrm{vol}_g=\iota_{-\rho\partial_0}\mathrm{vol}_g=-\rho\,\iota_{\partial_0}\mathrm{vol}_g=-\rho\,dx^1\wedge dx^2\wedge dx^3$. Consequently, for a smooth singular $3$-chain whose image lies in a constant-$x^0$ slice and whose orientation is the chart orientation of that slice, the flux is $-\int\rho$, the negative of the integrated rest density over the chain's parameter domain; since $\partial_0\rho=0$ and $\iota_J\mathrm{vol}_g$ has no $dt$ component, corresponding chains in two different slices have equal flux. This completes the verification. [step 2.1, L4, algebra] ∎

## Remarks

- **Signs.** The minus sign in clauses 2-3 is the sign of the orientation conventions: the adapted unit normal of a constant-$x^0$ slice pointing in the $+\partial_0$ direction is timelike, so the flux formula of the density theorem carries a factor $\varepsilon=-1$. Reversing the orientation of the slice or of $M$ flips the sign of the flux but not the conservation statement.

- **Reading.** The current here is an energy current: the dust coefficient $\rho$ is the rest-energy density, and $J^a=T^{ab}\xi_b=-\rho u^a$. Under the physical normalization $U=cu$ and $\rho_m=\rho/c^2$, this is $J^a=-c\rho_m U^a$, not the rest-mass current $\rho_mU^a$. The example asserts no empirical fact about matter distributions.
