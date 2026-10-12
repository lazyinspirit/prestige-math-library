---
id: cex-gr-conservation-does-not-imply-nonnegative-measured-energy-density
kind: counterexample
title: "A divergence-free symmetric tensor with negative measured energy density"
status: draft
origin: session
domain: physics
dependency_level: 7
physical_scope: "A flat-space pointwise counterexample in the framework's reading: a smooth symmetric tensor with vanishing divergence whose measured energy density is negative for a static observer congruence. It refutes the claim that on-shell conservation alone forces nonnegative measured energy density; no dynamics, no solution of any field equation, no measurement and no empirical claim is involved."
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-observer-energy-momentum-current, def-gr-measured-energy-density-flux-and-stress, def-gr-observer-congruence-and-adapted-charts, def-gr-smooth-lorentzian-objects, def-gr-stress-energy-tensor-field, def-gr-energy-conditions, def-gr-metric-selected-connection, thm-gr-nondegenerate-levi-civita-and-tensor-derivative, def-gr-smooth-covariant-two-tensor-field, def-gr-inverse-metric-and-musical-isomorphisms, def-gr-si-unit-and-coordinate-conventions, def-causal-classification-of-lorentz-vectors, prop-an-open-subset-of-a-smooth-manifold-has-a-canonical-restricted-smooth-structure, def-c-r-and-smooth-maps-between-smooth-manifolds]
dependency_roles:
  def-gr-observer-energy-momentum-current: mathematical-premise
  def-gr-measured-energy-density-flux-and-stress: formulation-prerequisite
  def-gr-observer-congruence-and-adapted-charts: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-stress-energy-tensor-field: formulation-prerequisite
  def-gr-energy-conditions: formulation-prerequisite
  def-gr-metric-selected-connection: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  def-gr-smooth-covariant-two-tensor-field: mathematical-premise
  def-gr-inverse-metric-and-musical-isomorphisms: mathematical-premise
  def-gr-si-unit-and-coordinate-conventions: formulation-prerequisite
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  prop-an-open-subset-of-a-smooth-manifold-has-a-canonical-restricted-smooth-structure: mathematical-premise
  def-c-r-and-smooth-maps-between-smooth-manifolds: mathematical-premise
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 4: the Weak Energy Condition (4.72) as an additional assumption on T, printed p. 118 (PDF p. 125)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), section 4.5.7: the energy conditions are additional assumptions on the stress-energy tensor, printed pp. 194-198 (PDF pp. 201-205)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
verification:
  precheck: pass
---

## Statement refuted

Statement refuted: "Let $M=\mathbb R^4$ carry the flat metric
$g=\operatorname{diag}(-1,1,1,1)$ and the identity chart, with metric-selected
connection $\nabla$, and let $T$ be a smooth symmetric covariant $2$-tensor
field on an open subset $U\subseteq M$ with $\nabla^aT_{ab}=0$ on $U$. Then
the measured energy density of [[def-gr-observer-energy-momentum-current]] is
nonnegative, $T_{ab}n^an^b\ge0$ on $U$ for every smooth observer congruence
$n$ on $U$."

## Facts & Assumptions

**Given:** The flat Lorentzian four-manifold $(\mathbb R^4,g)$ with identity chart, $g=\operatorname{diag}(-1,1,1,1)$ and chart orientation, with metric-selected connection $\nabla$; the open set $U:=\mathbb R^4$; the smooth function $\varphi(x):=(x^1)^2+1>0$; and the smooth symmetric covariant $2$-tensor field $T$ with components $T_{ab}=-\varphi\,\delta^0_a\delta^0_b$.

[L1] On the identity chart the Christoffel symbols vanish and $\nabla$ is the coordinate connection, so $\nabla^aT_{ab}=\eta^{ac}\nabla_cT_{ab}=\eta^{ac}\partial_cT_{ab}$ and $T^{ab}=\eta^{a\alpha}\eta^{b\beta}T_{\alpha\beta}$ ([[def-gr-metric-selected-connection]], [[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]], [[def-gr-inverse-metric-and-musical-isomorphisms]]).

[L2] $T$ is a smooth symmetric covariant $2$-tensor field on $U$: its components are smooth functions of $x$ and symmetric in $a,b$; equivalently, $\mathbb R^4$ is a smooth manifold and the component prescription defines a smooth tensor field ([[def-gr-smooth-covariant-two-tensor-field]], [[prop-an-open-subset-of-a-smooth-manifold-has-a-canonical-restricted-smooth-structure]], [[def-c-r-and-smooth-maps-between-smooth-manifolds]]).

[L3] The measured energy density is $\mu=T_{ab}n^an^b$ ([[def-gr-observer-energy-momentum-current]] clause (b), [[def-gr-measured-energy-density-flux-and-stress]] clause (a)).

[L4] $n=\partial_0$ is a smooth future-directed observer congruence on $\mathbb R^4$ with $n^a=\delta^a_0$ and $n_a=-\delta^0_a$ ([[def-gr-observer-congruence-and-adapted-charts]], [[def-causal-classification-of-lorentz-vectors]], [[def-gr-smooth-lorentzian-objects]]).

[L5] The weak energy condition of [[def-gr-energy-conditions]] is an additional pointwise assumption on $T$, not a consequence of conservation ([[def-gr-energy-conditions]], [[def-gr-stress-energy-tensor-field]]).

## Counterexample

1.1 (Smoothness and symmetry.) The functions $T_{ab}=-\varphi\delta^0_a\delta^0_b$ are smooth on $\mathbb R^4$ and symmetric in $a,b$, so by [L2] they define a smooth symmetric covariant $2$-tensor field on $U$. [L2, given]

1.2 (Divergence-freedom.) By [L1], $T^{ab}=\eta^{a\alpha}\eta^{b\beta}T_{\alpha\beta}=-\varphi\,\delta^a_0\delta^b_0$, since $\eta^{00}=-1$ and $\varphi$ depends only on $x^1$; hence $\nabla^aT_{ab}=\eta^{ac}\partial_cT_{ab}=\eta^{0c}\partial_cT_{0b}=0$ for every $b$, because $T_{0b}=0$ for $b\neq0$ and $T_{00}=-\varphi$ is independent of $x^0$. Thus $\nabla^aT_{ab}=0$ on $U$: the hypothesis of the refuted statement holds. [L1, algebra]

2.1 (Negative measured energy density.) For $n=\partial_0$, [L3] and [L4] give $\mu=T_{ab}n^an^b=T_{00}(n^0)^2=-\varphi<0$ on $U$, since $\varphi>0$. The refuted conclusion fails: the divergence-free tensor $T$ has a negative measured energy density for the observer congruence $n$. [step 1.2, L3, L4, algebra]

3.1 (Conclusion.) A smooth symmetric tensor field with $\nabla^aT_{ab}=0$ need not satisfy $T_{ab}n^an^b\ge0$ for every observer congruence; conservation and pointwise positivity are independent conditions, in accordance with [L5]. The displayed statement is refuted. [step 2.1, L5, algebra] ∎

## Remarks

- **Not a matter model.** The tensor $T$ is a prescribed smooth symmetric
  tensor, not the stress-energy tensor of any of the framework's matter
  sectors, and it is not asserted to solve any field equation; the
  counterexample concerns the logical independence of the conservation
  identity $\nabla^aT_{ab}=0$ and the pointwise positivity of the measured
  density, both of which are conditions the framework states separately.

- **Complementary direction.** The companion counterexample on the Einstein
  and matter examples page shows the other independence: the weak energy
  condition does not imply conservation.
