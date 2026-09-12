---
id: "def-distribution"
kind: "definition"
title: "Distribution"
deps: ["def-test-function-topology"]
provenance:
  statement: "ai-altered"
  proof: "not-applicable"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - url: "https://math.mit.edu/~dyatlov/18.155/155-notes.pdf"
      title: "Semyon Dyatlov, Lecture notes for 18.155 (2022)"
status: "draft"
origin: "pipeline"
---

## Definition

For open $\Omega\subseteq\mathbb R^n$, a **distribution** is a continuous complex-linear map $u:\mathcal D(\Omega)\to\mathbb C$, with the test-function topology of [[def-test-function-topology]]. Their vector space is denoted $\mathcal D'(\Omega)$. Write $\langle u,\varphi\rangle=u(\varphi)$; the pairing is linear in both arguments, with no conjugation.

Continuity means continuity for that topology: for each $\varepsilon>0$ the set $\{|u(\varphi)|<\varepsilon\}$ contains a zero-neighborhood. By linearity this suffices at every point. Sums and scalar multiples remain continuous and linear, so the indicated collection is a complex vector space. If $\Omega=\varnothing$, its test space is zero and its distribution space is zero as well. The finite-order estimate and the sequential criterion are established separately; neither substitutes for continuity in this definition.
