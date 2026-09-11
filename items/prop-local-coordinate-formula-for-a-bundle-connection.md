---
id: prop-local-coordinate-formula-for-a-bundle-connection
kind: proposition
title: "Local coordinate formula for a bundle connection"
status: published
origin: pipeline
deps: ["def-connection-one-form-in-a-local-frame","prop-connection-laws-in-directional-form"]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Ved Datar, Lectures on Riemannian Geometry
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
---

## Statement

In a local frame $e$, write $s=eu$ with coefficient column $u$. Then
$$\nabla_Xs=e\bigl(X(u)+\omega(X)u\bigr),\qquad \nabla s=e(du+\omega u).$$
Here the last expression means an $E$-valued one-form, and $X(u)$ and $du$ act entrywise.

## Facts & Assumptions

**Given:** A connection restricted to an open frame domain, a local section $s=\sum_j u^je_j$, and a local vector field $X$.

[F1] The connection matrix is defined by the derivatives of the frame sections ([[def-connection-one-form-in-a-local-frame]]).

[F2] Directional differentiation is real-linear and obeys the section Leibniz rule ([[prop-connection-laws-in-directional-form]]).

## Proof

1.1 Apply the Leibniz rule to each of the finitely many summands: $\nabla_Xs=\sum_j X(u^j)e_j+\sum_j u^j\nabla_Xe_j$. Inserting the frame derivatives yields $\sum_i\bigl(X(u^i)+\sum_j\omega^i{}_j(X)u^j\bigr)e_i$. [F1, F2]

2.1 This is exactly the first matrix formula. At each point, every tangent vector is the value of a local coordinate vector-field combination; equality upon all such evaluations therefore gives the one-form formula. The calculation is valid on an empty frame domain, with an empty sum in rank zero, and with one summand in rank one. On a zero-dimensional base both differentiated functions and one-forms vanish. No choice of a global frame is used. [step 1.1] ∎
