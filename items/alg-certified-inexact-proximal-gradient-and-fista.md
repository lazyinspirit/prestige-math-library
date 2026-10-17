---
id: alg-certified-inexact-proximal-gradient-and-fista
kind: algorithm
title: "Certified inexact proximal-gradient and FISTA updates"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 5
deps:
  - alg-proximal-gradient-and-fista
  - def-extended-real-epsilon-subdifferential
  - def-proximal-mapping
  - thm-proximal-operator-existence-resolvent-firm-nonexpansive
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Mark Schmidt, Nicolas Le Roux, and Francis Bach, Convergence Rates of Inexact Proximal-Gradient Methods for Convex Optimization, §3 and Appendix Lemma 2"
      url: "https://arxiv.org/pdf/1109.2415"
---

## Definition

Use the finite proximal-gradient or FISTA recurrences of [[alg-proximal-gradient-and-fista]], but replace each exact proximal output $x_k=T_L(y_k)$ by a reported finite point $x_k\in\operatorname{dom}g$ and certificate
$$L(y_k-x_k)-\nabla f(y_k)\in\partial_{\eta_k}g(x_k),\qquad \eta_k\ge0,$$
where $\partial_{\eta}g$ is defined in [[def-extended-real-epsilon-subdifferential]]. In proximal-gradient mode $y_k=x_{k-1}$; in FISTA mode use the same momentum update as the exact recurrence. If the certificate cannot be supplied for a call, return status **inconclusive** and make no convergence claim for that run. The inexact rate theorems on this page use this certificate itself; they do not assert rates for an unverified objective-gap tolerance alone.
