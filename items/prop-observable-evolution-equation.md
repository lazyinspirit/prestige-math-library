---
id: prop-observable-evolution-equation
kind: proposition
title: Observable evolution equation
status: draft
origin: pipeline
deps: ["def-poisson-bracket-on-a-symplectic-manifold"]
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Ana Cannas da Silva, Lectures on Symplectic Geometry
      url: https://web.archive.org/web/20120413034139if_/http://www.math.ist.utl.pt:80/%7Eacannas/Books/symplectic.pdf
      locator: Lecture 18, Theorem 18.9 and proof, p. 109
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Statement

If $\gamma$ is an integral curve of $X_H$, then every observable $F$ satisfies

$$\frac d{dt}F(\gamma(t))=\{F,H\}(\gamma(t)).$$

## Facts & Assumptions

**Given:** Smooth functions $F,H$ and an integral curve $\gamma$ of $X_H$.

[F1] $\{F,H\}=X_H(F)$.
[[def-poisson-bracket-on-a-symplectic-manifold]].

## Proof

**Proof technique:** direct.

1.1 The chain rule and $\dot\gamma=X_H\circ\gamma$ give $\frac d{dt}(F\circ\gamma)=dF(X_H)\circ\gamma$. [given]

2.1 By [F1], $dF(X_H)=X_H(F)=\{F,H\}$, proving the formula on the entire local domain of the curve. [F1, step 1.1] ∎
