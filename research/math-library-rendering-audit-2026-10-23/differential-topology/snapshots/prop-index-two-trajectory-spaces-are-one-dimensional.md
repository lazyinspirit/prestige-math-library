---
id: prop-index-two-trajectory-spaces-are-one-dimensional
kind: proposition
title: "Index-two trajectory spaces are one-dimensional"
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

If $(f,X)$ is Morse--Smale and $\lambda(p)-\lambda(q)=2$, then $\mathcal M(p,q)$ is a one-dimensional smooth manifold.  No compactification or boundary description is asserted.

## Facts & Assumptions

**Given:** A Morse--Smale pair and critical points with index drop two.

[F1] The unparametrized space has dimension $\lambda(p)-\lambda(q)-1$ ([[thm-unparametrized-trajectory-space-is-a-smooth-manifold]]).

## Proof

**Proof technique:** direct.

1.1 Substitution in [F1] gives $\dim\mathcal M(p,q)=2-1=1$. [F1, given, algebra]

2.1 Therefore the moduli space is a one-dimensional smooth manifold, with no assertion about its ends. [step 1.1] ∎
