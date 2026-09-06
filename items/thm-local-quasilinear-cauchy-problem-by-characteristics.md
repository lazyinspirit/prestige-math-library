---
id: thm-local-quasilinear-cauchy-problem-by-characteristics
kind: theorem
title: "Local quasilinear characteristic graph construction"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-semilinear-and-quasilinear-first-order-cauchy-problems, def-augmented-characteristic-system-for-a-quasilinear-pde, lem-local-solvability-of-the-augmented-characteristic-ode, lem-characteristic-strip-compatibility, lem-characteristic-strip-jacobian-at-the-initial-surface, thm-euclidean-inverse-function-theorem]
justified_by: []
proof_strategy: direct
verification:
  audited: 2026-09-06
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "First order PDE: The Methods of Characteristics"
      url: "https://www.kth.se/social/files/560a55b6f276543ece51692f/Lectures_Method_of_Characteristics.pdf"
---

## Statement

At $y_0\in V$, suppose $[a(\gamma(y_0),\phi(y_0)),D\gamma(y_0)]$ has rank
$n$.  Then, after shrinking the characteristic strip, $\Psi(s,y)=X(s,y)$ is a
$C^1$ diffeomorphism onto an open set $U$, and

$$u(x):=Z(\Psi^{-1}(x))$$

is the unique $C^1$ function obtained by this inverse-projection construction.
It attains $u(\gamma(y))=\phi(y)$; the next lemma verifies its PDE.

## Facts & Assumptions

**Given:** The smooth coefficients, $C^1$ data, and the stated full-rank condition at $y_0$.

## Proof

**Proof technique:** direct.

1.1 The local ODE lemma supplies a $C^1$ strip, and the Jacobian lemma makes $D\Psi(0,y_0)$ invertible. [given, algebra]

2.1 By [[thm-euclidean-inverse-function-theorem]], shrink to a neighbourhood on which $\Psi$ has a $C^1$ inverse.  Define $u=Z\circ\Psi^{-1}$ there. [step 1.1, construct]

3.1 At $s=0$, $\Psi(0,y)=\gamma(y)$ and $Z(0,y)=\phi(y)$, hence $u(\gamma(y))=\phi(y)$.  Any inverse-projected function from this strip has the same formula and is therefore identical to $u$. [step 2.1, given] ∎
