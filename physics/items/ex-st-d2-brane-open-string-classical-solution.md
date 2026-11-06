---
id: ex-st-d2-brane-open-string-classical-solution
kind: example
title: Classical Open String Ending on a Flat D2-Brane
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 6
domain: physics
library: physics
deps:
  - def-dp-brane-open-string-boundary-condition
  - def-st-flat-bosonic-string-model
  - def-st-conformal-gauge-and-residual-symmetry
  - post-st-bosonic-polyakov-model
  - pthm-st-open-string-boundary-variation
  - pthm-st-polyakov-eom-virasoro-constraints
dependency_roles:
  def-dp-brane-open-string-boundary-condition: formulation-prerequisite
  def-st-flat-bosonic-string-model: formulation-prerequisite
  def-st-conformal-gauge-and-residual-symmetry: formulation-prerequisite
  post-st-bosonic-polyakov-model: physical-assumption
  pthm-st-open-string-boundary-variation: physical-result
  pthm-st-polyakov-eom-virasoro-constraints: physical-result
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
physical_scope: "A classical coordinate-field solution of the free bosonic Polyakov model on an open strip ending on a static flat Type IIA D2-brane; excludes worldsheet fermions, quantization, D2 dynamics, RR charge, and backreaction."
sources:
  references:
    - title: "J. Polchinski, S. Chaudhuri, and C. V. Johnson, Notes on D-Branes, arXiv:hep-th/9602052v2"
      url: "https://arxiv.org/pdf/hep-th/9602052v2"
      locator: "Lecture II §2.2, PDF pp. 10–12, the open-string Neumann/Dirichlet boundary map; the example's equations of motion and constraints are verified locally from the named suppliers."
    - title: "J. Polchinski, Dirichlet-Branes and Ramond-Ramond Charges, arXiv:hep-th/9510017v3"
      url: "https://arxiv.org/pdf/hep-th/9510017v3"
      locator: "§2, PDF pp. 2–4, equation (4): a static Type IIA D2-brane has Neumann directions 0, 1, 2 and Dirichlet directions 3 through 9."
verification:
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Example

Let $M=\mathbb R^{1,9}$ have metric $\eta=\operatorname{diag}(-1,+1,\ldots,+1)$, and take the static Type IIA D2-brane $W=\{X^3=\cdots=X^9=0\}$. On the dimensionless open strip $\Sigma=\mathbb R\times[0,\pi]$, choose a constant $\epsilon>0$ with length dimension and set
$$
X^0=\sqrt2\,\epsilon\tau,\quad X^1=\epsilon\cos\tau\cos\sigma,\quad X^2=\epsilon\sin\tau\cos\sigma,\quad X^3=\epsilon\cos\tau\sin\sigma,\quad X^4=\epsilon\sin\tau\sin\sigma,\quad X^5=\cdots=X^9=0.
$$
This is a classical solution of the free conformal-gauge bosonic coordinate equations whose endpoints satisfy the D2 Neumann/Dirichlet data.

## Facts & Assumptions

**Given:** Use the mostly-plus target metric and dimensionless strip coordinates, with $\epsilon>0$ of length dimension. The worldsheet is the open strip $\mathbb R\times[0,\pi]$, the adopted model is the free flat Polyakov model in conformal gauge $h_{ab}=\operatorname{diag}(-1,+1)$, and the brane is a static Type IIA D2 with $W=\{X^3=\cdots=X^9=0\}$. This is a conditional model example, not a claim of a measured string or a stable D2-brane solution.

[F1] [[def-st-flat-bosonic-string-model]]: target $M=\mathbb R^{1,9}$ has metric $\eta=\operatorname{diag}(-1,+1,\ldots,+1)$, $X$ has length dimension, and open-strip coordinates $(\tau,\sigma)$ are dimensionless with $0\le\sigma\le\pi$.

[A1] [[post-st-bosonic-polyakov-model]]: the adopted action is the free tensile Polyakov action with no endpoint interaction.

[F2] [[def-st-conformal-gauge-and-residual-symmetry]]: the selected Lorentzian strip patch has $h_{ab}=e^{2\phi}\operatorname{diag}(-1,+1)$; we choose the representative $\phi=0$.

[F3] [[pthm-st-polyakov-eom-virasoro-constraints]]: a $C^2$ conformal-gauge solution obeys $\ddot X-X''=0$, $\dot X\cdot X'=0$, and $\dot X^2+X'^2=0$.

[F4] [[def-dp-brane-open-string-boundary-condition]]: for a D2-brane, coordinates $X^0,X^1,X^2$ are tangent Neumann directions and $X^3,\ldots,X^9$ are fixed Dirichlet directions.

[F5] [[pthm-st-open-string-boundary-variation]]: on each finite strip $[a,b]\times[0,\pi]$, with variations vanishing at $\tau=a,b$, Neumann data are $\partial_\sigma X^\mu=0$ at $\sigma=0,\pi$; fixed Dirichlet data make the endpoint variations vanish. The theorem is applied to these finite restrictions, not to an action integral over infinite time.

## Verification

1.1 The coordinate functions are $C^\infty$. For each of $X^1,\ldots,X^4$, the $\tau$-second derivative and $\sigma$-second derivative are both the negative of that coordinate, so $\ddot X^\mu-X^{\mu\prime\prime}=0$. $X^0$ is linear in $\tau$, and $X^5,\ldots,X^9$ are constant, so their wave equations also hold. By [F1], [A1], [F2], and [F3], this verifies the free conformal-gauge field equations in the adopted model. [given, F1, A1, F2, F3, algebra]

1.2 At $\sigma=0,\pi$, $\sin\sigma=0$, hence $X^3=X^4=0$ and $X^5=\cdots=X^9=0$, so all seven normal coordinates are fixed on $W$. Also $\partial_\sigma X^0=0$, $\partial_\sigma X^1=-\epsilon\cos\tau\sin\sigma=0$, and $\partial_\sigma X^2=-\epsilon\sin\tau\sin\sigma=0$ at both endpoints. These equalities hold for every real $\tau$. Restrict the smooth fields to any finite $[a,b]\times[0,\pi]$ and take variations vanishing at its temporal faces; [F5] applies and its spatial flux vanishes by the displayed endpoint equalities. Every variation with compact time support on the full strip lies in the interior of some such interval. Thus the fixed Dirichlet and Neumann conditions in [F4]–[F5] hold locally for all time, without requiring a finite infinite-time action. [given, F4, F5, algebra]

1.3 Direct differentiation gives $\dot X^2=-2\epsilon^2+\epsilon^2(\cos^2\sigma+\sin^2\sigma)=-\epsilon^2$, $X'^2=\epsilon^2(\sin^2\sigma+\cos^2\sigma)=\epsilon^2$, and $\dot X\cdot X'=0$, because the two rotating component pairs have cancelling cross terms. Therefore $\dot X^2+X'^2=0$ and $\dot X\cdot X'=0$. The induced metric is $\gamma_{ab}=\epsilon^2\operatorname{diag}(-1,+1)$, so it is nondegenerate Lorentzian and $X$ has rank two since $\epsilon>0$. [given, F1, F3, algebra]

2.1 The map therefore satisfies the free Polyakov field and metric equations and the D2 endpoint data on all of $\mathbb R\times[0,\pi]$. It is a classical bosonic coordinate-field example only; no fermionic, quantum, charge, or backreaction conclusion follows. [given, F3, F4, step 1.1, step 1.2, step 1.3] ∎

## Source references

[[def-dp-brane-open-string-boundary-condition]]

[[def-st-flat-bosonic-string-model]]

[[post-st-bosonic-polyakov-model]]

[[def-st-conformal-gauge-and-residual-symmetry]]

[[pthm-st-open-string-boundary-variation]]

[[pthm-st-polyakov-eom-virasoro-constraints]]

