---
id: def-qc-diamond-norm
kind: definition
title: "Diamond Norm"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 1
deps: ["def-qc-trace-norm"]
justified_by: ["thm-qc-diamond-norm-ancilla-dimension-bound"]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "John Watrous, The Theory of Quantum Information"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
      locator: "§3.3.2–3.3.4, completely bounded trace norm."
---

## Definition

Let $H,K$ be nonzero finite-dimensional complex Hilbert spaces and let $\Phi:\mathcal L(H)\to\mathcal L(K)$ be complex-linear. For each finite $r\ge1$, the induced trace norm of the amplification is
$$\|\Phi\otimes\operatorname{id}_{\mathbb C^r}\|_{1\to1}:=\sup_{X\ne0}\frac{\| (\Phi\otimes\operatorname{id}_{\mathbb C^r})(X)\|_1}{\|X\|_1},$$
where $X\in\mathcal L(H\otimes\mathbb C^r)$ and $\|\cdot\|_1$ is the finite-dimensional trace norm ([[def-qc-trace-norm]]). The **diamond norm** (the completely bounded trace norm) is
$$\|\Phi\|_\diamond:=\sup_{r\ge1}\|\Phi\otimes\operatorname{id}_{\mathbb C^r}\|_{1\to1}.$$
There is no factor $1/2$ in this map norm. The finite-dimensional ancilla theorem [[thm-qc-diamond-norm-ancilla-dimension-bound]] proves the supremum is finite, is attained, and can be capped at $r=\dim H$.
