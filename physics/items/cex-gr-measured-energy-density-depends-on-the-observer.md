---
id: cex-gr-measured-energy-density-depends-on-the-observer
kind: counterexample
title: "The measured energy density of a fixed tensor depends on the observer congruence"
status: published
origin: session
domain: physics
dependency_level: 8
physical_scope: "A flat-space kinematic counterexample in the framework's reading: the energy density assigned by the observer split of a fixed smooth symmetric tensor depends on the chosen observer congruence, shown for a static dust tensor measured by a static and by a boosted congruence. The statement refuted is the observer independence of the measured energy density in the smooth branch; no dynamics, no conservation, no measurement and no empirical claim is involved."
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-observer-energy-momentum-current, lem-gr-observer-energy-momentum-decomposition, def-gr-measured-energy-density-flux-and-stress, def-gr-dust-matter-model, def-gr-observer-congruence-and-adapted-charts, def-gr-observer-and-rest-space, def-gr-smooth-lorentzian-objects, def-gr-metric-selected-connection, def-gr-smooth-covariant-two-tensor-field, def-gr-inverse-metric-and-musical-isomorphisms, def-causal-classification-of-lorentz-vectors]
dependency_roles:
  def-gr-observer-energy-momentum-current: mathematical-premise
  lem-gr-observer-energy-momentum-decomposition: mathematical-premise
  def-gr-measured-energy-density-flux-and-stress: formulation-prerequisite
  def-gr-dust-matter-model: mathematical-premise
  def-gr-observer-congruence-and-adapted-charts: mathematical-premise
  def-gr-observer-and-rest-space: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  def-gr-smooth-covariant-two-tensor-field: mathematical-premise
  def-gr-inverse-metric-and-musical-isomorphisms: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
sources:
  references:
    - title: "E. Gourgoulhon, 3+1 Formalism and Bases of Numerical Relativity, arXiv:gr-qc/0703035v1 (2007), section 4.1.2: the energy density E = T(n,n) is the density measured by the Eulerian observer, so it is tied to the chosen normal n, printed p. 52 (PDF p. 52)"
      url: "https://arxiv.org/pdf/gr-qc/0703035"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), section 4.5.3: T_{mu nu}u^mu u^nu = rho is the energy density measured by an observer comoving with the fluid, printed p. 186 (PDF p. 193)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
verification:
  precheck: pass
---

## Statement refuted

Statement refuted: "Let $U$ be a nonempty open subset of a time-oriented smooth
Lorentzian four-manifold and let $T$ be a smooth symmetric covariant
$2$-tensor field on $U$. If $n$ and $n'$ are smooth observer congruences on
$U$, then the measured energy densities of [[def-gr-observer-energy-momentum-current]]
agree, $T_{ab}n^an^b=T_{ab}n'^an'^b$ on $U$."

## Facts & Assumptions

**Given:** The flat Lorentzian four-manifold $(\mathbb R^4,g)$ with identity chart, $g=\operatorname{diag}(-1,1,1,1)$ and time orientation $N=\partial_0$, with the metric-selected connection; the constant $\rho>0$, read as rest energy density in $\mathrm J\,\mathrm m^{-3}$ with $\rho_m=\rho/c^2$ the SI rest-mass density; the dust model $(\rho,u)$ with $u=\partial_0$ and tensor $T^{ab}=\rho\,u^au^b$ ([[def-gr-dust-matter-model]]); the number $\beta\in(0,1)$, $\gamma=(1-\beta^2)^{-1/2}$; and the vector fields $n=\partial_0$ and $n'=\gamma(\partial_0+\beta\partial_1)$.

[L1] $n=\partial_0$ and $n'=\gamma(\partial_0+\beta\partial_1)$ are smooth future-directed unit timelike vector fields on $\mathbb R^4$, hence observer congruences: $g(n,n)=-1$, $g(n,\partial_0)=-1$, and $g(n',n')=\gamma^2(-1+\beta^2)=-1$, $g(n',\partial_0)=-\gamma<0$ ([[def-gr-observer-congruence-and-adapted-charts]], [[def-gr-observer-and-rest-space]], [[def-causal-classification-of-lorentz-vectors]], [[def-gr-smooth-lorentzian-objects]]).

[L2] The measured energy density is $\mu=T_{ab}n^an^b$ ([[def-gr-observer-energy-momentum-current]] clause (b), [[def-gr-measured-energy-density-flux-and-stress]] clause (a)).

[L3] On the identity chart the metric equals its inverse, $\eta^{ab}=\eta_{ab}=\operatorname{diag}(-1,1,1,1)$, and $\partial_0^a=\delta^a_0$ with $\partial_{0,a}=-\delta^0_a$ ([[def-gr-inverse-metric-and-musical-isomorphisms]], [[def-gr-smooth-covariant-two-tensor-field]]).

## Counterexample

1.1 (Two congruences.) By [L1], $n$ and $n'$ are both smooth observer congruences on $U:=\mathbb R^4$, and they are distinct because $n'$ has the nonzero spatial component $\gamma\beta\partial_1$. [L1, given]

1.2 (The tensor.) $T^{ab}=\rho\,u^au^b$ is the tensor of the dust model $(\rho,\partial_0)$; it is a smooth symmetric type $(2,0)$ tensor field, equivalently $T_{ab}=\rho\,\partial_{0,a}\partial_{0,b}$ after lowering both indices with [L3]. [given, L3]

2.1 (Energy density for the static congruence.) For $n=\partial_0$, [L3] gives $u_an^a=\partial_{0,a}\delta^a_0=-1$, so $\mu=T_{ab}n^an^b=\rho(u_an^a)^2=\rho$ by [L2]. [step 1.2, L2, L3, algebra]

2.2 (Energy density for the boosted congruence.) For $n'$, [L1] and [L3] give $u_an'^a=\gamma\partial_{0,a}\bigl(\delta^a_0+\beta\delta^a_1\bigr)=-\gamma$. Hence $\mu'=T_{ab}n'^an'^b=\rho(u_an'^a)^2=\rho\gamma^2$ by [L2], and $\mu'-\mu=\rho(\gamma^2-1)>0$ because $\beta\in(0,1)$ implies $\gamma>1$. [step 1.2, L1, L2, L3, algebra]

3.1 (Conclusion.) The fixed smooth symmetric tensor $T$ assigns the energy density $\rho$ to the congruence $n$ and $\rho\gamma^2$ to the congruence $n'$, and these values differ since $\gamma>1$. The displayed statement is therefore refuted: in the framework's reading, measured energy density is observer dependent. This completes the counterexample. [step 2.1, step 2.2, algebra] ∎

## Remarks

- **What the counterexample does not say.** It does not contradict the
  algebraic decomposition of [[lem-gr-observer-energy-momentum-decomposition]],
  which holds for each congruence separately; it shows that the measured
  density is not a property of $T$ alone. In the framework's reading this is
  the kinematic fact that a moving medium has a boosted energy density.

- **No empirical content.** Both congruences are idealizations and no
  measurement is asserted; the comparison is between two exact model readings
  of one prescribed tensor.
