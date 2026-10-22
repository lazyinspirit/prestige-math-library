---
id: def-qftx-finite-bordism-state-span
kind: definition
title: "Finite gauge state spaces and bordism spans"
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
dependency_level: 2
deps:
  - def-qftx-finite-flat-connection-groupoid
  - def-qftx-finite-groupoid-integration
justified_by: []
aliases: []
domain: mathematics
library: mathematics
dependency_roles:
  def-qftx-finite-flat-connection-groupoid: mathematical-premise
  def-qftx-finite-groupoid-integration: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_use: "No choice principle is used; the boundary and bulk groupoids are finite."
proof_strategy: direct
sources:
  references:
    - title: "Gregory W. Moore and Vivek Saxena, TASI Lectures on Topological Field Theories and Differential Cohomology"
      url: "https://arxiv.org/pdf/2510.07408"
      locator: "§13, PDF pp. 51–53, for finite-gauge states as functions on bundle isomorphism classes; §23.3, PDF pp. 97–99, for restriction correspondences and push-pull amplitudes."
    - title: "Daniel S. Freed and Frank Quinn, Chern-Simons Theory with Finite Gauge Group"
      url: "https://www.math.ru.nl/~mueger/TQFT/FQ.pdf"
      locator: "§2, PDF pp. 8–11, for automorphism-weighted boundary state spaces, amplitudes, and their finite gluing measure."
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
---

## Definition

Fix an integer $d\ge1$ and a finite group $G$. A **triangulated $d$-bordism** $M:\Sigma_0\to\Sigma_1$ is a compact oriented piecewise-linear $d$-manifold with product collars on its boundary, where $\Sigma_0$ and $\Sigma_1$ are closed oriented $(d-1)$-manifolds with finite triangulations and the incoming boundary is identified with $-\Sigma_0$ while the outgoing boundary is identified with $\Sigma_1$. The boundary triangulations agree with the induced triangulation of $M$.

For a closed $(d-1)$-manifold $\Sigma$, define the state space

$$V_G(\Sigma):=\operatorname{Fun}(\pi_0(\mathcal C_G(\Sigma)),\mathbb C), \qquad \langle f,g\rangle_\Sigma :=\sum_{[A]\in\pi_0(\mathcal C_G(\Sigma))} \frac{\overline{f([A])}g([A])}{|\operatorname{Aut}_{\mathcal C_G(\Sigma)}(A)|}.$$

The orientation reversal $-\Sigma$ has the same underlying triangulated cell complex and the same chosen directions on its edges, with only the manifold orientation reversed. Since the flat-connection groupoid uses the cell complex, directed edge labels, flatness equations, and vertex gauge action, not the manifold orientation, the identity on these data gives $\mathcal C_G(-\Sigma)=\mathcal C_G(\Sigma)$ and hence the same function set for their state spaces. For a complex vector space $W$, write $\overline W$ for its conjugate vector space, with the same addition and scalar multiplication $\lambda\cdot_{\overline W}w:=\overline\lambda w$. The map $J_\Sigma:V_G(-\Sigma)\to\overline{V_G(\Sigma)}$ given by $J_\Sigma(f)=\overline f$ pointwise is complex-linear. Reversing the manifold orientation does not replace any fixed directed edge label by its inverse; inversion occurs only when a chosen edge direction itself is reversed.

The specified boundary triangulation identifications induce restriction functors. On the incoming end, $r_0$ is restriction to $\partial_{\mathrm{in}}M$, transport through its identification with $-\Sigma_0$, and then the identity on the common underlying cell data $\mathcal C_G(-\Sigma_0)=\mathcal C_G(\Sigma_0)$. The outgoing functor $r_1$ is defined by restriction and its specified identification with $\Sigma_1$. In either transport, a chosen edge mapped to the opposite chosen direction uses the inverse-edge rule from the flat-connection Definition. These functors give a span of finite groupoids

$$\mathcal C_G(\Sigma_0)\xleftarrow{r_0}\mathcal C_G(M)\xrightarrow{r_1}\mathcal C_G(\Sigma_1).$$

The associated linear map is

$$Z_M:=(r_1)_!r_0^*:V_G(\Sigma_0)\to V_G(\Sigma_1),$$

where pullback and pushforward are the finite homotopy-fiber operations just defined. For empty boundary, the amplitude is $Z_G(M)=|\mathcal C_G(M)|$.

## Definition references

[[def-qftx-finite-flat-connection-groupoid]]

[[def-qftx-finite-groupoid-integration]]

## Facts & Assumptions

**Given:** A fixed integer $d\ge1$, a finite group $G$, and a finite triangulated bordism with compatible boundary triangulations.

[F1] [[def-qftx-finite-flat-connection-groupoid]]: every finite cell complex has a finite flat-connection groupoid formed from edge labels and vertex gauge transformations.

[F2] [[def-qftx-finite-groupoid-integration]]: finite groupoid cardinality and homotopy-fiber pushforward use the weight $1/|\operatorname{Aut}|$.

## Proof

1.1 Each boundary and bulk triangulation has finitely many cells, and $G$ is finite. Thus the field sets and gauge groups in [F1] are finite, the boundary state spaces are finite-dimensional complex vector spaces, and the sums defining their pairings and amplitudes are finite. The displayed inner product is positive definite because every coefficient $1/|\operatorname{Aut}(A)|$ is a positive real number. [given, F1, F2]

2.1 Restricting the labels and vertex gauge transformations to a boundary transports each attaching word and its flatness equation, so the resulting edge assignment is still flat. If a boundary identification reverses a chosen edge direction, the transported label is inverted, and $(h_{t(e)}g_eh_{s(e)}^{-1})^{-1}=h_{s(e)}g_e^{-1}h_{t(e)}^{-1}$ is exactly the gauge action on that reversed edge. Thus the reindexed restrictions $r_0,r_1$ are functors. Pullback and homotopy-fiber pushforward therefore define $Z_M$ by [F2]; both are linear because they are substitution and finite weighted summation. [F1, F2, step 1.1]

3.1 If $\Sigma_0=\Sigma_1=\varnothing$, the restriction span has the terminal groupoid at each end. Its induced map sends $1$ to $\int_{A\in\mathcal C_G(M)}1=|\mathcal C_G(M)|$ by [F2], which is the stated closed amplitude. [F2, step 2.1] ∎
