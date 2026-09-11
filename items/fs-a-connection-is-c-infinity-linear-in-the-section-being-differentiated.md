---
id: fs-a-connection-is-c-infinity-linear-in-the-section-being-differentiated
kind: false-statement
title: "A connection is c infinity linear in the section being differentiated"
status: published
origin: pipeline
deps: ["prop-connection-laws-in-directional-form","thm-local-connection-forms-glue-exactly-when-they-obey-the-transformation-law"]
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

For every connection, $\nabla_X(fs)=f\nabla_Xs$ for all smooth $f$, vector fields $X$ and sections $s$.

## Facts & Assumptions

**Given:** The proposed universal assertion.

[F1] A connection satisfies $\nabla_X(fs)=X(f)s+f\nabla_Xs$ ([[prop-connection-laws-in-directional-form]]).

[F2] A prescribed smooth connection matrix in a global frame defines a connection ([[thm-local-connection-forms-glue-exactly-when-they-obey-the-transformation-law]]).

## Refutation

1.1 On $E=\mathbb R\times\mathbb R$ over $\mathbb R$, take global frame $e=1$ and zero matrix, giving $\nabla_X(ue)=X(u)e$ by [F2]. Put $X=\partial_x$, $f(x)=x$, $s=e$. Then $\nabla_X(fs)=e$, while $f\nabla_Xs=0$. [F1, F2, given]

2.1 At $x=0$ these are respectively the nonzero unit fibre vector and zero, disproving the assertion even in rank one and at a zero of $f$. The correct formula has the missing term $X(f)s=e$. A constant $f$ or a zero section would not witness failure; this explicit nonconstant $f$ and nonzero section do. [F1, step 1.1] ∎
