---
id: ex-gr-dust-conservation-in-flat-space
kind: example
title: "Dust in flat space: a conserved homogeneous model and a nonconserved time-dependent density"
status: published
origin: session
domain: mathematics
dependency_level: 9
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-dust-matter-model, prop-gr-dust-and-perfect-fluid-conservation-equations, def-gr-smooth-lorentzian-objects, def-gr-metric-selected-connection, thm-gr-nondegenerate-levi-civita-and-tensor-derivative, def-gr-smooth-covariant-two-tensor-field, def-c-r-and-smooth-maps-between-smooth-manifolds, def-smooth-vector-field-as-a-tangent-bundle-section, prop-an-open-subset-of-a-smooth-manifold-has-a-canonical-restricted-smooth-structure]
dependency_roles:
  def-gr-dust-matter-model: mathematical-premise
  prop-gr-dust-and-perfect-fluid-conservation-equations: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  def-gr-smooth-covariant-two-tensor-field: mathematical-premise
  def-c-r-and-smooth-maps-between-smooth-manifolds: mathematical-premise
  def-smooth-vector-field-as-a-tangent-bundle-section: mathematical-premise
  prop-an-open-subset-of-a-smooth-manifold-has-a-canonical-restricted-smooth-structure: mathematical-premise
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 1 (1.104)-(1.113): the energy-momentum tensor of dust and its conservation, printed pp. 28-31 (PDF pp. 35-38)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), section 6.2: the pressureless case and the geodesic motion of the fluid particles, printed pp. 65-66 (PDF pp. 66-67)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
verification:
  precheck: pass
---

## Example

Let $M=\mathbb R^4$ carry the identity chart, the flat metric
$g=\operatorname{diag}(-1,1,1,1)$ and the time orientation $N=\partial_0$, with
metric-selected connection $\nabla$; let $u:=\partial_0$, a smooth
future-directed unit timelike vector field on $M=\mathbb R^4$
([[def-gr-smooth-lorentzian-objects]],
[[def-gr-metric-selected-connection]],
[[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]],
[[def-smooth-vector-field-as-a-tangent-bundle-section]]). Then:

1. For every smooth $\rho:\mathbb R^4\to(0,\infty)$ with $\partial_0\rho=0$,
   the pair $(\rho,u)$ is a dust model on $M$ whose dust system holds and whose
   stress-energy tensor is divergence-free.
2. On the open subset $U:=\{x\in\mathbb R^4:x^0>-1\}$ the pair
   $(\rho|_U,u|_U)$ with $\rho(t,x)=1+t$ is a dust model on $U$ whose dust
   system fails and whose stress-energy tensor has
   $\nabla^aT_{ab}=-\delta^0{}_b\neq0$ on $U$.

## Facts & Assumptions

**Given:** The flat Lorentzian four-manifold $(\mathbb R^4,g)$ with identity chart, $g=\operatorname{diag}(-1,1,1,1)$, the unit field $u=\partial_0$, and densities $\rho$ as in the two clauses.

[L1] A dust model on an open $U$ is a pair $(\rho,u)$ with $\rho>0$ smooth and $u$ smooth, future-directed, unit and timelike; its tensor is $T^{ab}=\rho u^au^b$ and its system is $\nabla_a(\rho u^a)=0$, $u^a\nabla_au^b=0$ ([[def-gr-dust-matter-model]], [[prop-an-open-subset-of-a-smooth-manifold-has-a-canonical-restricted-smooth-structure]]).

[L2] For every dust model with $\rho>0$, $\nabla^aT_{ab}=0$ if and only if the dust system holds ([[prop-gr-dust-and-perfect-fluid-conservation-equations]] clause (a)).

[L3] On the identity chart $\Gamma\equiv0$, so $\nabla$ is the coordinate connection and $\nabla_aV^a=\partial_aV^a$ for smooth vector fields ([[def-gr-metric-selected-connection]], [[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]).

## Verification

**Proof technique:** direct; compute the dust system and the divergence with the coordinate connection.

1.1 (The unit field is ${\partial_0}$.) The field $u=\partial_0$ has constant components $(1,0,0,0)$, is smooth, satisfies $g(u,u)=-1$ and $g(u,N)=-1<0$, so it is a future-directed unit timelike field by [L1]. [L1, algebra]

2.1 (Conserved time-independent density.) Let $\rho>0$ be smooth with $\partial_0\rho=0$. By [L3], $\nabla_a(\rho u^a)=\partial_0\rho=0$ and $u^a\nabla_au^b=\partial_0(\delta^b{}_0)=0$: the dust system holds, so by [L2] $\nabla^aT_{ab}=0$. This is clause 1. [step 1.1, L1, L2, L3, algebra]

3.1 (Time-dependent density.) Let $\rho(t,x)=1+t$, positive on the open set $U=\{x^0>-1\}$, and restrict $u$ to $U$; both restrictions are smooth on $U$, and $u|_U$ remains future-directed, unit and timelike. By [L3] applied on $U$, $\nabla_a(\rho u^a)=\partial_0\rho=1\neq0$, so the dust system fails; directly, $T^{ab}=(1+t)\delta^a{}_0\delta^b{}_0$ and $\nabla_aT^{ab}=\partial_0(1+t)\delta^{0b}=\delta^{0b}$, and lowering the free index gives $\nabla^aT_{ab}=g_{bc}\nabla_aT^{ac}=-\delta^0{}_b$, which is nonzero on $U$. This is clause 2, and it shows that the equivalence of [L2] is not vacuous. [step 1.1, L1, L2, L3, algebra] ∎

## Remarks

- **Physical reading.** The conserved family is a constant dust congruence with time-independent, possibly spatially varying density in the flat model; the second family is not a solution of the dust system, and the field law of the framework would exclude it as a dust source. Neither statement is an empirical claim about matter.
