---
id: prop-first-return-time-and-induced-map-are-measurable
kind: proposition
title: First-return time and induced map are measurable
deps: ["def-first-return-time-and-induced-transformation", "def-trace-sigma-algebra", "prop-measure-preserving-compositions-iterates-and-completions"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Sarig §1.6.4 p.28
      url: https://www.weizmann.ac.il/math/sarigo/sites/math.sarigo/files/uploads/ergodicnotes.pdf
status: draft
origin: pipeline
proof_strategy: direct
---

## Statement

With $E,r_E,E_\infty,T_E$ as in the first-return definition, $r_E:E\to\{1,2,\ldots\}\cup\{\infty\}$ is measurable for the full power-set sigma-algebra on this countable target, and $T_E$ is measurable for $\mathcal A|_{E_\infty}$.

## Facts & Assumptions

[F1] The core is measurable and T_E is an everywhere defined self-map of it. [[def-first-return-time-and-induced-transformation]].

[F2] Every finite iterate is measurable on the original sigma-algebra. [[prop-measure-preserving-compositions-iterates-and-completions]].

[F3] Trace sets are intersections with the domain. [[def-trace-sigma-algebra]].

## Proof

**Given:** With $E,r_E,E_\infty,T_E$ as in the first-return definition, $r_E:E\to\{1,2,\ldots\}\cup\{\infty\}$ is measurable for the full power-set sigma-algebra on this countable target, and $T_E$ is measurable for $\mathcal A|_{E_\infty}$.

1.1 For $n\ge1$, the fiber $H_n=\{x\in E:r_E(x)=n\}=E\cap T^{-n}E\cap\bigcap_{1\le j<n}T^{-j}(X\setminus E)$ is measurable. At $n=1$ the empty intersection is $X$. The fiber at infinity is $E\setminus\bigcup_{n\ge1}H_n$. Every inverse image of a subset of the countable target is a countable union of these fibers, proving measurability of $r_E$. [F1, F2]

2.1 For $B\in\mathcal A|_{E_\infty}$ the measurability of $E_\infty$ implies $B\in\mathcal A$. The identity $T_E^{-1}B=\bigcup_{n\ge1}(E_\infty\cap H_n\cap T^{-n}B)$ expresses its inverse image as a measurable subset of $E_\infty$, hence a trace set. Empty B gives an empty union of pieces; full B gives all of the core. [step 1.1, F1, F2, F3] ∎

