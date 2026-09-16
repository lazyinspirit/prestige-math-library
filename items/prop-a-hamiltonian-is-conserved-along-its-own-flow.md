---
id: prop-a-hamiltonian-is-conserved-along-its-own-flow
kind: proposition
title: A Hamiltonian is conserved along its own flow
status: published
origin: pipeline
deps: ["def-hamiltonian-vector-field-and-hamiltonian-function"]
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Ana Cannas da Silva, Lectures on Symplectic Geometry
      url: https://web.archive.org/web/20120413034139if_/http://www.math.ist.utl.pt:80/%7Eacannas/Books/symplectic.pdf
      locator: Lecture 18, remark after Definition 18.1, p. 106
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Statement

$H$ is constant along every integral curve of $X_H$.

## Facts & Assumptions

**Given:** A Hamiltonian $H$ and an integral curve $\gamma$ of $X_H$.

[F1] The convention is $dH=\iota_{X_H}\omega$. [[def-hamiltonian-vector-field-and-hamiltonian-function]].

## Proof

**Proof technique:** direct.

1.1 Along $\gamma$, $\frac d{dt}H(\gamma(t))=dH(X_H)=\omega(X_H,X_H)=0$ by alternation. [F1, given]

2.1 Hence $H\circ\gamma$ is constant on every connected time interval in the maximal domain. This proves conservation without assuming completeness. [step 1.1] ∎
