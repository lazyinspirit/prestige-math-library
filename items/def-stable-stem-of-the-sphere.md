---
id: def-stable-stem-of-the-sphere
kind: definition
title: Stable stems of the sphere
status: published
origin: pipeline
deps: ["def-suspension-prespectrum-and-sphere-prespectrum", "def-stable-homotopy-groups-of-a-sequential-prespectrum"]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: J. P. May, A Concise Course in Algebraic Topology
      url: https://web.archive.org/web/20220823180711if_/http://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf
      locator: Chapter 22, Section 2, printed pages 176--177
---

## Definition

For $k\in\mathbb Z$, the **$k$th stable stem of the sphere** is

$$ \pi_k^s:=\pi_k(\mathbb S) =\operatorname*{colim}_{n\geq n_0}\pi_{n+k}(S^n), $$

where $n_0$ is any index for which $n+k\geq1$ thereafter. The bonding map is
the suspension homomorphism determined by the sphere-prespectrum structure
homeomorphism $S^1\wedge S^n\cong S^{n+1}$. Tail independence makes the
notation independent of $n_0$.

