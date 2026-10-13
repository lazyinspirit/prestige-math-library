---
id: ex-gr-translating-dust-measured-energy-and-balance
kind: example
title: "A translating dust in flat space: measured energy density, flux and the local balance"
status: published
origin: session
domain: mathematics
dependency_level: 10
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-observer-energy-momentum-current, lem-gr-observer-energy-momentum-decomposition, def-gr-congruence-acceleration-and-expansion, lem-gr-congruence-acceleration-and-expansion-properties, lem-gr-energy-momentum-current-divergence, def-gr-dust-matter-model, prop-gr-dust-and-perfect-fluid-conservation-equations, thm-gr-density-divergence-and-finite-chain-flux, def-gr-smooth-lorentzian-objects, def-gr-metric-selected-connection, thm-gr-nondegenerate-levi-civita-and-tensor-derivative, def-gr-inverse-metric-and-musical-isomorphisms, def-gr-smooth-covariant-two-tensor-field, def-gr-observer-congruence-and-adapted-charts, def-gr-observer-and-rest-space, def-causal-classification-of-lorentz-vectors, def-c-r-and-smooth-maps-between-smooth-manifolds, def-smooth-vector-field-as-a-tangent-bundle-section]
dependency_roles:
  def-gr-observer-energy-momentum-current: mathematical-premise
  lem-gr-observer-energy-momentum-decomposition: mathematical-premise
  def-gr-congruence-acceleration-and-expansion: mathematical-premise
  lem-gr-congruence-acceleration-and-expansion-properties: mathematical-premise
  lem-gr-energy-momentum-current-divergence: mathematical-premise
  def-gr-dust-matter-model: mathematical-premise
  prop-gr-dust-and-perfect-fluid-conservation-equations: mathematical-premise
  thm-gr-density-divergence-and-finite-chain-flux: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  def-gr-inverse-metric-and-musical-isomorphisms: mathematical-premise
  def-gr-smooth-covariant-two-tensor-field: mathematical-premise
  def-gr-observer-congruence-and-adapted-charts: mathematical-premise
  def-gr-observer-and-rest-space: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  def-c-r-and-smooth-maps-between-smooth-manifolds: mathematical-premise
  def-smooth-vector-field-as-a-tangent-bundle-section: mathematical-premise
sources:
  references:
    - title: "E. Gourgoulhon, 3+1 Formalism and Bases of Numerical Relativity, arXiv:gr-qc/0703035v1 (2007), section 5.2: the 3+1 energy conservation equation with the expansion term, and the Newtonian limit linearised check, printed pp. 72-74 (PDF pp. 72-74)"
      url: "https://arxiv.org/pdf/gr-qc/0703035"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), sections 4.5.3-4.5.4: the dust and perfect fluid energy-momentum tensors and the equations equivalent to their conservation, printed pp. 183-187 (PDF pp. 190-194)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 1 (1.104)-(1.106): the energy-momentum tensor of dust and its conservation, printed pp. 28-30 (PDF pp. 35-37)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
verification:
  precheck: pass
---

## Example

Let $M=\mathbb R^4$ carry the identity chart, the flat metric
$g=\operatorname{diag}(-1,1,1,1)$ and the time orientation $N=\partial_0$, with the standard coordinate
orientation $dx^0\wedge dx^1\wedge dx^2\wedge dx^3$, and
the metric-selected connection $\nabla$ ([[def-gr-smooth-lorentzian-objects]],
[[def-gr-metric-selected-connection]],
[[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]). Let
$\beta\in(-1,1)$, put $\gamma:=(1-\beta^2)^{-1/2}$, let
$\varphi:\mathbb R\to(0,\infty)$ be smooth, and define

$$\rho(x):=\varphi\bigl(x^1-\beta x^0\bigr),\qquad u:=\gamma\bigl(\partial_0+\beta\partial_1\bigr).$$

Further let $n:=\partial_0$, and let $T^{ab}:=\rho\,u^au^b$ (the tensor of the
dust model $(\rho,u)$, [[def-gr-dust-matter-model]]). Then:

1. $u$ is a smooth future-directed unit timelike vector field and $(\rho,u)$
   is a dust model on $M$; the dust system holds, so $\nabla^aT_{ab}=0$ on
   $M$.
2. $n$ is a smooth observer congruence with $a=\nabla_nn=0$ and
   $\theta=\nabla_an^a=0$.
3. The measured fields of [[def-gr-observer-energy-momentum-current]] for the
   congruence $n$ are

$$\mu=\rho\gamma^2,\qquad J=\rho\gamma^2\bigl(\partial_0+\beta\partial_1\bigr),\qquad \Phi=\rho\gamma^2\beta\,\partial_1,\qquad S=\rho\gamma^2\beta^2\,\partial_1\otimes\partial_1,$$

   and they satisfy the decomposition
   $T^{ab}=\mu\,n^an^b+n^a\Phi^b+n^b\Phi^a+S^{ab}$ of
   [[lem-gr-observer-energy-momentum-decomposition]] clause (b).
4. $\nabla_aJ^a=0$ on $M$, and the local balance of
   [[lem-gr-energy-momentum-current-divergence]] clause (b) holds:

$$D\mu+\mu\theta+\nabla_a\Phi^a=0=-T^{ab}\nabla_an_b .$$

   In this example the balance is the continuity equation for the translating
   density current $\rho\gamma(\partial_0+\beta\partial_1)$.

## Facts & Assumptions

**Given:** The flat Lorentzian four-manifold $(\mathbb R^4,g)$ with identity chart, $g=\operatorname{diag}(-1,1,1,1)$, metric-selected connection $\nabla$, time orientation $N=\partial_0$ and standard coordinate orientation; the numbers $\beta\in(-1,1)$, $\gamma=(1-\beta^2)^{-1/2}$; the smooth positive function $\rho$ and the vector fields $u=\gamma(\partial_0+\beta\partial_1)$ and $n=\partial_0$; the tensor $T^{ab}=\rho u^au^b$.

[L1] On the identity chart the Christoffel symbols vanish and $\nabla$ is the coordinate connection, so $\nabla_aV^a=\partial_aV^a$ for smooth vector fields and $\nabla^aT_{ab}=g^{ac}\partial_cT_{ab}$ for smooth tensor fields ([[def-gr-metric-selected-connection]], [[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]], [[def-gr-inverse-metric-and-musical-isomorphisms]]).

[L2] $u$ is a smooth future-directed unit timelike vector field: $g(u,u)=\gamma^2(-1+\beta^2)=-1$ and $g(u,N)=-\gamma<0$ ([[def-gr-smooth-lorentzian-objects]], [[def-causal-classification-of-lorentz-vectors]], [[def-gr-observer-and-rest-space]]).

[L3] $(\rho,u)$ is a dust model whenever $\rho>0$ is smooth and $u$ is a smooth future-directed unit timelike vector field; the dust system is $\nabla_a(\rho u^a)=0$ and $u^a\nabla_au^b=0$, and it is equivalent to $\nabla^aT_{ab}=0$ ([[def-gr-dust-matter-model]], [[prop-gr-dust-and-perfect-fluid-conservation-equations]] clause (a)).

[L4] $n=\partial_0$ is a smooth observer congruence on $M$; its acceleration and expansion are $a=\nabla_nn$ and $\theta=\nabla_an^a$ ([[def-gr-observer-congruence-and-adapted-charts]], [[def-gr-congruence-acceleration-and-expansion]]).

[L5] The measured fields $\mu$, $J$, $\Phi$, $S$ satisfy $J=\mu n+\Phi$, $\mu=-J^an_a$ and the decomposition $T^{ab}=\mu n^an^b+n^a\Phi^b+n^b\Phi^a+S^{ab}$ ([[def-gr-observer-energy-momentum-current]], [[lem-gr-observer-energy-momentum-decomposition]] clause (b)).

[L6] With $\nabla^aT_{ab}=0$ on $M$, the identities $\nabla_aJ^a=-T^{ab}\nabla_an_b$ and $D\mu+\mu\theta+\nabla_a\Phi^a=\nabla_aJ^a$ hold ([[lem-gr-energy-momentum-current-divergence]] clauses (a) and (b)).

## Verification

**Proof technique:** direct; verify the unit and future conditions, check the dust system in the identity chart, and compute the measured fields and their balance explicitly.

1.1 (The dust model.) By [L2] the field $u$ is a smooth future-directed unit timelike vector field; $\rho$ is smooth and strictly positive by definition, so $(\rho,u)$ is a dust model with tensor $T^{ab}=\rho u^au^b$ by [L3]. [L2, L3, given]

1.2 (The dust system.) In the identity chart, $u^0=\gamma$, $u^1=\gamma\beta$, with constant components and constant $\gamma$; hence by [L1], $u^a\nabla_au^b=u^a\partial_a u^b=0$, and $\nabla_a(\rho u^a)=\partial_0(\rho\gamma)+\partial_1(\rho\gamma\beta)=\gamma\bigl(\partial_0\rho+\beta\partial_1\rho\bigr)=0$, because $\partial_0\rho=-\beta\varphi'(x^1-\beta x^0)$ and $\partial_1\rho=\varphi'(x^1-\beta x^0)$. The dust system therefore holds, and [L3] gives $\nabla^aT_{ab}=0$. [L1, L3, algebra]

1.3 (Acceleration and expansion of $n$.) Since $n=\partial_0$ has constant components in the identity chart, [L1] gives $\nabla_an_b=\partial_an_b=0$; hence $a=\nabla_nn=0$ and $\theta=\nabla_an^a=0$. [L1, L4, algebra]

1.4 (Measured fields.) By [L1], $n^a=\delta^a_0$ and $n_a=-\delta^0_a$; $u_an^a=g(u,n)=\gamma g(\partial_0+\beta\partial_1,\partial_0)=-\gamma$, so $\mu=T_{ab}n^an^b=\rho(u_an^a)^2=\rho\gamma^2$. Further $T^{ab}n_b=\rho u^a(u_bn^b)=-\rho\gamma u^a$, so $J^a=-T^{ab}n_b=\rho\gamma u^a$, that is, $J=\rho\gamma^2(\partial_0+\beta\partial_1)=\mu n+\rho\gamma^2\beta\partial_1$, whence $\Phi=\rho\gamma^2\beta\partial_1$ by [L5]. Finally $h^a{}_bn^b=0$ gives $S^{ab}=\rho\,h^a{}_c u^c\,h^b{}_d u^d$ with $h(u)=u+n(u\cdot n)=\gamma\beta\partial_1$, so $S=\rho\gamma^2\beta^2\partial_1\otimes\partial_1$. Substituting these four fields verifies the decomposition of [L5]. [L1, L2, L5, algebra]

2.1 (Balance.) By [L1] and the explicit forms, $\nabla_aJ^a=\partial_0(\rho\gamma^2)+\partial_1(\rho\gamma^2\beta)=\gamma^2(\partial_0\rho+\beta\partial_1\rho)=0$, and $T^{ab}\nabla_an_b=0$ by step 1.3, so step 1.3 and [L6] give $D\mu+\mu\theta+\nabla_a\Phi^a=\nabla_aJ^a=0=-T^{ab}\nabla_an_b$. Directly, $D\mu=\partial_0\mu=-\gamma^2\beta\varphi'$ and $\nabla_a\Phi^a=\rho\gamma^2\beta\partial_1\ln\rho=\gamma^2\beta\varphi'$, whose sum vanishes with $\theta=0$. The balance is thus the continuity equation $\partial_0(\rho\gamma)+\partial_1(\rho\gamma\beta)=0$ for the density current. This completes the verification. [step 1.2, step 1.3, step 1.4, L6, algebra] ∎

## Remarks

- **Unit reading.** In the SI stress-energy reading, $\rho=\varepsilon$
  is rest energy density in $\mathrm J\,\mathrm m^{-3}$, and
  $\rho_m=\rho/c^2$ is rest-mass density. The values of $\mu$, $\Phi$ and $S$ displayed above are the
  normalized component values of the tensor split. In particular $\Phi$ is
  the spatial tensor current with energy-density component units, and its SI
  measured energy flux is $q=c\Phi$ under the framework convention; the
  mathematical Example asserts the algebraic identities only and no measured
  value.
  The factor $\gamma^2$ is the familiar enhancement of the measured energy
  density of a moving medium relative to the congruence at rest in the chart.

- **Nonzero flux with conserved charge.** The current $J$ is divergence-free
  although its spatial part $\Phi$ is nonzero: the translating profile carries
  energy across each constant-$x^0$ slice, and the balance records that the
  loss of energy in a region is compensated by the flux through its boundary,
  exactly as in [[thm-gr-density-divergence-and-finite-chain-flux]].
