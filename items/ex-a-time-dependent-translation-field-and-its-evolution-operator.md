---
id: ex-a-time-dependent-translation-field-and-its-evolution-operator
kind: example
title: "A time-dependent translation field and its evolution operator"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-time-dependent-vector-field-and-evolution-operator, thm-time-dependent-vector-fields-have-local-smooth-evolution-operators, prop-time-dependent-evolution-satisfies-the-two-time-cocycle-law]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Marius Crainic, Rui Loja Fernandes, and Ioan Marcut, Lectures on Poisson Geometry"
      url: "https://webspace.science.uu.nl/~crain101/gsm217.pdf"
---

## Example

Let $I\subseteq\mathbb R$ be an open interval, let $a:I\to\mathbb R$ be
smooth, and consider the time-dependent vector field

$$ X_t=a(t)\frac{\partial}{\partial x} $$

on $\mathbb R$. Its evolution operator is

$$ \Psi_{t,s}(x)=x+\int_s^t a(r)\,dr. $$

## Facts & Assumptions

**Given:** An open interval $I\subseteq\mathbb R$, a smooth function
$a:I\to\mathbb R$, and the field $X_t=a(t)\,d/dx$ on $\mathbb R$.

[L1] Time-dependent vector fields admit local smooth evolution operators ([[thm-time-dependent-vector-fields-have-local-smooth-evolution-operators]]).

[L2] Evolution operators satisfy the cocycle law ([[prop-time-dependent-evolution-satisfies-the-two-time-cocycle-law]]).

## Verification

**Proof technique:** direct.

1.1 Differentiating the proposed formula yields $$ \frac{d}{dt}\Psi_{t,s}(x)=a(t)=X_t(\Psi_{t,s}(x)), $$ and clearly $\Psi_{s,s}(x)=x$. So the formula solves the initial-value problem. [given]

2.1 Because $I$ is an interval, the segment between any $s,t\in I$ stays in $I$, so the integral and the displayed map are defined for every $s,t\in I$. Thus this is the global evolution operator extending the local one from [L1]. Moreover, $$ \Psi_{r,t}(\Psi_{t,s}(x))=x+\int_s^t a+\int_t^r a=x+\int_s^r a=\Psi_{r,s}(x), $$ matching [L2]. [L1, L2, step 1.1, algebra] ∎
