---
id: alg-certified-inexact-proximal-gradient-and-fista
kind: algorithm
title: "Certified inexact proximal-gradient and FISTA updates"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 5
deps:
  - alg-proximal-gradient-and-fista
  - def-extended-real-epsilon-subdifferential
  - def-proximal-mapping
  - thm-proximal-operator-existence-resolvent-firm-nonexpansive
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Mark Schmidt, Nicolas Le Roux, and Francis Bach, Convergence Rates of Inexact Proximal-Gradient Methods for Convex Optimization, §3 and Appendix Lemma 2"
      url: "https://arxiv.org/pdf/1109.2415"
---

## Definition

Use the finite proximal-gradient or FISTA recurrences of [[alg-proximal-gradient-and-fista]], but replace each exact proximal output $x_k=T_L(y_k)$ by a reported finite point $x_k\in\operatorname{dom}g$ and certificate
$$L(y_k-x_k)-\nabla f(y_k)\in\partial_{\eta_k}g(x_k),\qquad \eta_k\ge0,$$
where $\partial_{\eta}g$ is defined in [[def-extended-real-epsilon-subdifferential]]. In proximal-gradient mode $y_k=x_{k-1}$; in FISTA mode use the same momentum update as the exact recurrence. If the certificate cannot be supplied for a call, return status **inconclusive** and make no convergence claim for that run. The inexact rate theorems on this page use this certificate itself; they do not assert rates for an unverified objective-gap tolerance alone. For $\eta_k=0$ the resolvent theorem [[thm-proximal-operator-existence-resolvent-firm-nonexpansive]] makes the certificate equivalent to an exact proximal call.

## Facts & Assumptions

**Given:** A reported point $x$ and certificate $L(y-x)-\nabla f(y)\in\partial_\eta g(x)$ with $\eta\ge0$.

[F1] [[def-extended-real-epsilon-subdifferential]]: the certificate means $g(z)-g(x)\ge\langle L(y-x)-\nabla f(y),z-x\rangle-\eta$ for every finite-valued $g(z)$.

[F2] [[def-proximal-mapping]]: the proximal subproblem with parameter $1/L$ and input $w=y-\nabla f(y)/L$ minimizes $g(u)+(L/2)\|u-w\|_2^2$.

## Verification

1.1 Let $Q_y(u)=g(u)+(L/2)\|u-(y-\nabla f(y)/L)\|_2^2$. For finite $g(z)$, expand the difference and apply [F1]: $$Q_y(z)-Q_y(x)=g(z)-g(x)+\langle\nabla f(y),z-x\rangle+\frac{L}{2}\bigl(\|z-y\|_2^2-\|x-y\|_2^2\bigr)\ge\frac{L}{2}\|z-x\|_2^2-\eta\ge-\eta.$$ If $g(z)=+\infty$, the same lower bound is automatic. [F1, F2, given, algebra]

2.1 Step 1.1 gives $Q_y(z)\ge Q_y(x)-\eta$ for every $z$, while choosing $z=x$ shows $\inf_zQ_y(z)\le Q_y(x)<+\infty$. Hence the infimum is finite and $\inf_zQ_y(z)\ge Q_y(x)-\eta$, or $Q_y(x)\le\inf_zQ_y(z)+\eta$. By [F2], $Q_y$ is exactly the proximal subproblem objective, so the certificate guarantees proximal subproblem value error at most $\eta$. No converse from value error to the certificate is used. [F2, step 1.1, given, algebra] ∎