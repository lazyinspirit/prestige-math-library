---
id: def-classical-normal-derivative
kind: definition
title: Classical normal derivative
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: Hunter, Notes on Partial Differential Equations
      url: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf
      locator: Hunter §2.5, immediately before Theorem 2.23, printed p. 32 (PDF p. 38).
status: draft
origin: pipeline
deps: ["def-bounded-c-one-domain-boundary-charts-and-outward-normal", "def-bounded-piecewise-c-one-euclidean-domain"]
---

## Definition

For a bounded $C^1$ domain $\Omega$ and $u\in C^1(\overline\Omega)$, the classical normal derivative is $\partial_\nu u(x)=Du(x)\cdot\nu(x)$ on $\partial\Omega$. Here Du is the continuous extension of the interior gradient and $\nu$ is the outward unit normal. For a specified finite piecewise $C^1$ presentation define the same expression on each face off its edge set E; arbitrary values on E do not change a surface integral. This definition uses a classical continuous trace, and asserts neither a Sobolev trace nor a conormal derivative.

## Source notes

Hunter §2.5, immediately before Theorem 2.23, printed p. 32 (PDF p. 38).

