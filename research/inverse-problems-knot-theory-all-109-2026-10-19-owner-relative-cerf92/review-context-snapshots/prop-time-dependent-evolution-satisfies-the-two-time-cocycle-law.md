---
id: prop-time-dependent-evolution-satisfies-the-two-time-cocycle-law
kind: proposition
title: "Time-dependent evolution satisfies the two-time cocycle law"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-time-dependent-vector-fields-have-local-smooth-evolution-operators]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-04
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

## Statement

Let $\Psi_{t,s}$ be a local evolution operator for a smooth time-dependent
vector field. Whenever both sides are defined,

$$ \Psi_{r,t}\circ \Psi_{t,s}=\Psi_{r,s}. $$

## Facts & Assumptions

**Given:** A local evolution operator $\Psi_{t,s}$ for a smooth time-dependent vector field $X_t$.

[L1] Local evolution operators give unique solutions of the time-dependent initial-value problem ([[thm-time-dependent-vector-fields-have-local-smooth-evolution-operators]]).

## Proof

**Proof technique:** direct.

1.1 Fix admissible times $r,t,s$ and a point $p$ for which all maps are defined. The curve $$ \alpha(u):=\Psi_{u,t}(\Psi_{t,s}(p)) $$ solves $\dot\alpha(u)=X_u(\alpha(u))$ and satisfies $\alpha(t)=\Psi_{t,s}(p)$. [L1, given]

2.1 The curve $$ \beta(u):=\Psi_{u,s}(p) $$ solves the same differential equation and has the same value at $u=t$. By uniqueness in [L1], $\alpha(u)=\beta(u)$ wherever both are defined. [L1, step 1.1]

3.1 Evaluating step 2.1 at $u=r$ gives $\Psi_{r,t}(\Psi_{t,s}(p))=\Psi_{r,s}(p)$. Therefore the two-time cocycle law holds. [step 2.1] ∎
