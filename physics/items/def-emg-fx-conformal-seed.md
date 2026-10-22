---
id: def-emg-fx-conformal-seed
kind: definition
title: Conformal electrovacuum seed data
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: mathematics
dependency_level: 0
deps:
  - def-emg-constrained-electrovacuum-data
  - def-emg-geometric-scaling
dependency_roles:
  def-emg-constrained-electrovacuum-data: mathematical-premise
  def-emg-geometric-scaling: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "A. I. Alcubierre, J. C. Degollado and M. Salgado, The Einstein-Maxwell system in 3+1 form and initial data for multiple charged black holes, arXiv:0907.1151v2 (2009)"
      url: "https://arxiv.org/pdf/0907.1151"
      locator: "Section III.A, equations (3.4)-(3.12), defines the conformal spatial metric and electric-vector weight; this item fixes the broader seed data and SI-to-geometric interpretation."
    - title: "Eric Gourgoulhon, 3+1 Formalism and Bases of Numerical Relativity, Lecture Notes in Physics 846 (2012), author preprint arXiv:gr-qc/0703035v1"
      url: "https://arxiv.org/pdf/gr-qc/0703035"
      locator: "Sections 6.2.3 and 6.4.2, equations (6.14)-(6.22) and (6.81), give the spatial metric and trace-free-curvature conformal decompositions."
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
---

## Definition

Let $\Sigma$ be a nonempty oriented smooth three-manifold without boundary. Let $\bar h$ be a smooth Riemannian metric on $\Sigma$, let $\psi\in C^\infty(\Sigma,(0,\infty))$, let $\bar E,\bar B$ be smooth contravariant vector fields, let $\bar A$ be a smooth symmetric covariant two-tensor with $\bar h^{ij}\bar A_{ij}=0$, let $\tau\in C^\infty(\Sigma,\mathbb R)$, and let $\Lambda\in\mathbb R$ be constant. Let $c,G,\mu_0>0$ and $\kappa=8\pi G/c^4$ be the parameters of the inherited SI-to-geometric dictionary, and set $\alpha=\sqrt{\kappa/(2\mu_0)}>0$. Define

$$h:=\psi^4\bar h,\qquad K:=\frac{\tau}{3}h+\psi^{-2}\bar A,\qquad E:=\psi^{-6}\bar E,\qquad B:=\psi^{-6}\bar B.$$

The fields $E$ and $B$ are geometric-normalized spatial vectors: in length coordinates their components have units $\mathrm m^{-1}$. Their SI-convention counterparts are $e:=\alpha^{-1}E$ and $b:=\alpha^{-1}B$. In length coordinates, metric components and $\psi$ are dimensionless, $\tau$ and the covariant components of $\bar A$ and $K$ have units $\mathrm m^{-1}$, and $\Lambda$ has units $\mathrm m^{-2}$. The tuple $(\Sigma,\bar h,\psi,\bar A,\tau,\bar E,\bar B,\Lambda)$ with these induced fields is called conformal electrovacuum seed data. This definition imposes no divergence, Hamiltonian, or momentum equation and asserts no existence, uniqueness, or spacetime development.

## Definition references

[[def-emg-constrained-electrovacuum-data]]

[[def-emg-geometric-scaling]]
