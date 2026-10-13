---
id: ex-gr-perfect-fluid-energy-equation-from-the-local-balance
kind: example
title: "The perfect-fluid energy equation recovered from the local energy balance"
status: published
origin: session
domain: mathematics
dependency_level: 10
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-observer-energy-momentum-current, lem-gr-observer-energy-momentum-decomposition, def-gr-congruence-acceleration-and-expansion, lem-gr-congruence-acceleration-and-expansion-properties, lem-gr-energy-momentum-current-divergence, def-gr-perfect-fluid-matter-model, prop-gr-dust-and-perfect-fluid-conservation-equations, def-gr-smooth-lorentzian-objects, def-gr-metric-selected-connection, thm-gr-nondegenerate-levi-civita-and-tensor-derivative, def-gr-inverse-metric-and-musical-isomorphisms, def-gr-smooth-covariant-two-tensor-field, def-gr-observer-congruence-and-adapted-charts, def-gr-observer-and-rest-space, def-causal-classification-of-lorentz-vectors, def-c-r-and-smooth-maps-between-smooth-manifolds, def-smooth-vector-field-as-a-tangent-bundle-section]
dependency_roles:
  def-gr-observer-energy-momentum-current: mathematical-premise
  lem-gr-observer-energy-momentum-decomposition: mathematical-premise
  def-gr-congruence-acceleration-and-expansion: mathematical-premise
  lem-gr-congruence-acceleration-and-expansion-properties: mathematical-premise
  lem-gr-energy-momentum-current-divergence: mathematical-premise
  def-gr-perfect-fluid-matter-model: mathematical-premise
  prop-gr-dust-and-perfect-fluid-conservation-equations: mathematical-premise
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
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), section 4.5.4: the perfect fluid tensor (4.53) and the conservation equations (4.54)-(4.55) as energy conservation and the Euler equation, printed pp. 185-187 (PDF pp. 192-194)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
    - title: "E. Gourgoulhon, 3+1 Formalism and Bases of Numerical Relativity, arXiv:gr-qc/0703035v1 (2007), section 5.2.2: the energy conservation equation containing the expansion term, printed p. 73 (PDF p. 73), and section 5.3: the perfect-fluid 3+1 equations, printed pp. 75-76 (PDF pp. 75-76)"
      url: "https://arxiv.org/pdf/gr-qc/0703035"
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), section 6.2: the perfect fluid energy-momentum tensor (6.30) and conservation equations (6.31), printed pp. 65-66 (PDF pp. 66-67)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
verification:
  precheck: pass
---

## Example

Let $(M,g,N)$ be a time-oriented smooth Lorentzian four-manifold with
metric-selected connection $\nabla$, let $U\subseteq M$ be a nonempty open
subset and let $(\varepsilon,p,n)$ be a perfect-fluid model on $U$ with
stress-energy tensor $T^{ab}=(\varepsilon+p)n^an^b+pg^{ab}$
([[def-gr-perfect-fluid-matter-model]]); suppose
$\nabla^aT_{ab}=0$ on $U$. Take the observer congruence of
[[def-gr-observer-energy-momentum-current]] to be the fluid field $n$ itself,
and write $D=n^a\nabla_a$ and $\theta=\nabla_an^a$. Then:

1. For this congruence $\mu=\varepsilon$, $J=\varepsilon n$, $\Phi=0$ and
   $S^{ab}=p\,h^{ab}$ with $h^{ab}=g^{ab}+n^an^b$.
2. $T^{ab}\nabla_an_b=p\theta$, so the local balance of
   [[lem-gr-energy-momentum-current-divergence]] clause (b) reads

$$\nabla_a(\varepsilon n^a)=-p\theta,\qquad\text{equivalently}\qquad D\varepsilon+(\varepsilon+p)\theta=0 .$$

3. This is exactly the energy equation of
   [[prop-gr-dust-and-perfect-fluid-conservation-equations]] clause (b) under
   the hypothesis $\nabla^aT_{ab}=0$; the momentum (Euler) equation is the
   complementary projection of $\nabla^aT_{ab}=0$ and is not implied by the
   energy balance alone.

## Facts & Assumptions

**Given:** The time-oriented smooth Lorentzian four-manifold $(M,g,N)$ with metric-selected connection $\nabla$, the open subset $U$, the perfect-fluid model $(\varepsilon,p,n)$ on $U$ with tensor $T^{ab}=(\varepsilon+p)n^an^b+pg^{ab}$, and the hypothesis $\nabla^aT_{ab}=0$ on $U$.

[L1] A perfect-fluid model consists of smooth functions $\varepsilon,p:U\to\mathbb R$ and a smooth future-directed unit timelike field $n$ with $g(n,n)=-1$; its stress-energy tensor is $T^{ab}=(\varepsilon+p)n^an^b+pg^{ab}$, and no positivity of $\varepsilon$ or $p$ is required ([[def-gr-perfect-fluid-matter-model]], [[def-causal-classification-of-lorentz-vectors]]).

[L2] The measured fields of [[def-gr-observer-energy-momentum-current]] satisfy $\mu=T_{ab}n^an^b$, $J^a=-T^{ab}n_b$, $\Phi=J-\mu n$, $S^{ab}=h^a{}_ch^b{}_dT^{cd}$ and the decomposition $T^{ab}=\mu n^an^b+n^a\Phi^b+n^b\Phi^a+S^{ab}$ ([[lem-gr-observer-energy-momentum-decomposition]] clause (b)).

[L3] With $\nabla^aT_{ab}=0$, the identities $\nabla_aJ^a=-T^{ab}\nabla_an_b$ and $D\mu+\mu\theta+\nabla_a\Phi^a=\nabla_aJ^a$ hold ([[lem-gr-energy-momentum-current-divergence]] clauses (a) and (b)).

[L4] $\theta=\nabla_an^a=h^{ab}\nabla_an_b$ ([[def-gr-congruence-acceleration-and-expansion]] clause (b), [[lem-gr-congruence-acceleration-and-expansion-properties]] clause (c)); and $n^b\nabla_an_b=0$, because $\nabla$ is $g$-compatible and $n\cdot n=-1$ is constant, so $0=\nabla_a(n\cdot n)=2n^b\nabla_an_b$ ([[def-gr-metric-selected-connection]] clause (a), [[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]).

[L5] $\nabla^aT_{ab}=0$ holds if and only if $D\varepsilon+(\varepsilon+p)\theta=0$ and $(\varepsilon+p)a^b+h^{ba}\partial_ap=0$, where $a^b=n^a\nabla_an^b$ ([[prop-gr-dust-and-perfect-fluid-conservation-equations]] clause (b)).

[L6] The extension of $\nabla$ to tensor fields satisfies the product rule and $\nabla g^{-1}=0$, so indices may be raised and lowered across $\nabla$ ([[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]] clause (c), [[def-gr-inverse-metric-and-musical-isomorphisms]]).

## Verification

**Proof technique:** direct; substitute the perfect-fluid tensor into the definitions of the measured fields, contract the divergence with the fluid field, and compare with the known conservation equivalence.

1.1 (The congruence data.) By [L1], $n$ is a smooth future-directed unit timelike field, hence an observer congruence; its acceleration is $a=\nabla_nn$, its expansion is $\theta=\nabla_an^a$, and $n^b\nabla_an_b=0$ by [L4]. [L1, L4, given]

2.1 (Measured fields.) By [L6] and [L2], $\mu=T_{ab}n^an^b=(\varepsilon+p)(n\cdot n)^2+p(n\cdot n)=\varepsilon$, and $J^a=-T^{ab}n_b=-(\varepsilon+p)n^a(n\cdot n)-pn^a=\varepsilon n^a$, so $J=\varepsilon n$ and $\Phi=J-\mu n=0$. Similarly $S^{ab}=h^a{}_ch^b{}_d\bigl[(\varepsilon+p)n^cn^d+pg^{cd}\bigr]=ph^{ab}$, since $h^a{}_cn^c=0$. This proves clause 1. [step 1.1, L2, L6, algebra]

2.2 (The source term.) By [L6], $T^{ab}\nabla_an_b=(\varepsilon+p)n^an^b\nabla_an_b+pg^{ab}\nabla_an_b=0+p\theta$ by [L4], where the first term vanishes because $n^b\nabla_an_b=0$. [step 1.1, L4, L6, algebra]

3.1 (The balance.) By [L3], $\nabla_aJ^a=-T^{ab}\nabla_an_b=-p\theta$, while $\nabla_aJ^a=\nabla_a(\varepsilon n^a)=n^a\nabla_a\varepsilon+\varepsilon\nabla_an^a=D\varepsilon+\varepsilon\theta$ by step 2.1; hence $D\varepsilon+(\varepsilon+p)\theta=0$. This is the energy equation of [L5] under the present hypothesis $\nabla^aT_{ab}=0$; the Euler equation of [L5] is the projection orthogonal to $n$ and is not derived from the balance used here. This proves clauses 2 and 3. [step 2.1, step 2.2, L3, L5, algebra] ∎

## Remarks

- **Consistency across pages.** The example connects the new balance identity
  of [[lem-gr-energy-momentum-current-divergence]] with the conservation
  equivalence already proved in
  [[prop-gr-dust-and-perfect-fluid-conservation-equations]]; it does not
  reprove the latter and uses no equation of state.

- **No dynamics.** Only the algebraic identities and the hypothesis
  $\nabla^aT_{ab}=0$ are used; the example asserts no existence of a fluid
  solution and no measured value. A model that adds an equation of state
  restricts the admissible tuples $(\varepsilon,p,n)$ without changing the
  identities.
