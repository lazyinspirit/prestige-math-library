---
id: prop-index-one-trajectory-spaces-are-zero-dimensional
kind: proposition
title: "Index-one trajectory spaces are zero-dimensional"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [thm-unparametrized-trajectory-space-is-a-smooth-manifold]
proof_strategy: direct
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Alexander F. Ritter, Part III Morse Homology, Lecture 9"
      url: "https://people.maths.ox.ac.uk/ritter/morse-cambridge/combined.pdf"
---

## Statement

If $(f,X)$ is Morse--Smale and $\lambda(p)-\lambda(q)=1$, then $\mathcal M(p,q)$ is a discrete smooth manifold.  This statement does not assert finiteness.

## Facts & Assumptions

**Given:** A Morse--Smale pair and critical points with index drop one.

[F1] The unparametrized space has dimension $\lambda(p)-\lambda(q)-1$ ([[thm-unparametrized-trajectory-space-is-a-smooth-manifold]]).

## Proof

**Proof technique:** direct.

1.1 Substitution in [F1] gives $\dim\mathcal M(p,q)=1-1=0$. [F1, given, algebra]

2.1 A zero-dimensional smooth manifold is discrete, proving the claim without any compactness assertion. [step 1.1] ∎
