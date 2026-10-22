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
---

## Definition

Fix an integer $d\ge1$ and a finite group $G$. A **triangulated $d$-bordism** $M:\Sigma_0\to\Sigma_1$ is a compact oriented piecewise-linear $d$-manifold with product collars on its boundary, where $\Sigma_0$ and $\Sigma_1$ are closed oriented $(d-1)$-manifolds with finite triangulations and the incoming boundary is identified with $-\Sigma_0$ while the outgoing boundary is identified with $\Sigma_1$. The boundary triangulations agree with the induced triangulation of $M$.

For a closed $(d-1)$-manifold $\Sigma$, define the state space

$$V_G(\Sigma):=\operatorname{Fun}(\pi_0(\mathcal C_G(\Sigma)),\mathbb C), \qquad \langle f,g\rangle_\Sigma :=\sum_{[A]\in\pi_0(\mathcal C_G(\Sigma))} \frac{\overline{f([A])}g([A])}{|\operatorname{Aut}_{\mathcal C_G(\Sigma)}(A)|}.$$

Orientation reversal uses the same flat-connection groupoid with each oriented edge label replaced by its inverse; pointwise complex conjugation identifies the state space of $-\Sigma$ with the conjugate of $V_G(\Sigma)$. Restriction to the incoming and outgoing boundaries gives a span of finite groupoids

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

2.1 Restricting edge labels and vertex gauge transformations to a boundary preserves the inverse-edge and flatness equations, so $r_0$ and $r_1$ are functors. Pullback and homotopy-fiber pushforward therefore define $Z_M$ by [F2]; both are linear because they are substitution and finite weighted summation. [F1, F2, step 1.1]

3.1 If $\Sigma_0=\Sigma_1=\varnothing$, the restriction span has the terminal groupoid at each end. Its induced map sends $1$ to $\int_{A\in\mathcal C_G(M)}1=|\mathcal C_G(M)|$ by [F2], which is the stated closed amplitude. [F2, step 2.1] ∎
