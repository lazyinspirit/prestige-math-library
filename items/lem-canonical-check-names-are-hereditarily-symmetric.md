---
id: lem-canonical-check-names-are-hereditarily-symmetric
kind: lemma
title: Canonical check names are hereditarily symmetric
status: draft
origin: pipeline
deps: [def-forcing-name-automorphism-action, def-symmetric-forcing-system-and-hereditarily-symmetric-names, thm-check-name-evaluation-and-generic-reconstruction]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - {title: "Karagila, Forcing & Symmetric Extensions, proof of Theorem 10.17", url: "https://karagila.org/files/Forcing-2023.pdf"}
---

## Statement

Every ground set $x$ has a check name fixed by every forcing automorphism; it is hereditarily symmetric and evaluates to $x$. Thus the ground model lies in every symmetric extension.

## Facts & Assumptions

**Given:** The hypotheses, objects, and conventions in the Statement.

[F1] [[def-forcing-name-automorphism-action]] gives the recursive action and check-name fixation.

[F2] [[def-symmetric-forcing-system-and-hereditarily-symmetric-names]] defines HS.

[F3] [[thm-check-name-evaluation-and-generic-reconstruction]] gives $\check x_G=x$.

## Proof

1.1 Induct on rank of $x$. Every subname $\check y$ for $y\in x$ is HS by induction. F1 gives $\pi\check x=\check x$ for every automorphism, so its stabilizer is the whole group and belongs to the normal filter. Thus $\check x$ is HS. [F1, F2]

2.1 F3 gives $\check x_{G_0}=x$. Hence every ground set occurs as the value of an HS name, including $x=\varnothing$, and the ground model is contained in the symmetric interpretation. [F3, step 1.1] ∎