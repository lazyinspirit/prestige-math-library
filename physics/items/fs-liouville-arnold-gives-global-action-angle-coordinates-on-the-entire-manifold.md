---
id: fs-liouville-arnold-gives-global-action-angle-coordinates-on-the-entire-manifold
kind: false-statement
title: Liouville–Arnold gives global action–angle coordinates on the entire manifold
status: published
origin: pipeline
deps: ["def-countable-choice","thm-liouville-arnold-action-angle-theorem","prop-period-lattice-monodromy-obstructs-global-action-angle-coordinates"]
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Eckhard Meinrenken, Symplectic Geometry
      url: https://web.archive.org/web/20250806200149if_/https://www.math.utoronto.ca/mein/teaching/LectureNotes/symplectic.pdf
      locator: §§6.2--6.3, pp. 72--75
    - title: N. Martynchuk, H. W. Broer, and K. Efstathiou, Hamiltonian Monodromy and Morse Theory
      url: https://arxiv.org/pdf/1901.00705
      locator: Theorem 2.7 and §3.1, pp. 5--11
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Statement refuted

This item assumes $\mathrm{AC}_\omega$, namely [[def-countable-choice|countable choice]]. In the propagated dependency chain, that assumption is required through [[thm-liouville-arnold-action-angle-theorem]] and [[prop-period-lattice-monodromy-obstructs-global-action-angle-coordinates]]; after those interfaces are fixed, the remaining local or finite argument makes no additional countable-family choice.

Liouville–Arnold gives one global action–angle coordinate system on the whole
phase space of every completely integrable system.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, the proposed global conclusion.

[A1] $\mathrm{AC}_\omega$ is [[def-countable-choice|countable choice]] and is required here through [[thm-liouville-arnold-action-angle-theorem]] and [[prop-period-lattice-monodromy-obstructs-global-action-angle-coordinates]]; after those supplied interfaces are fixed, the remaining local or finite calculation makes no additional countable-family choice.

[F1] Liouville–Arnold is a local theorem near a compact connected regular fibre and assumes a regular locally proper fibration. [[thm-liouville-arnold-action-angle-theorem]].

[F2] Nontrivial period-lattice monodromy forbids global action–angle coordinates. [[prop-period-lattice-monodromy-obstructs-global-action-angle-coordinates]].

## Refutation

**Proof technique:** direct.

1.1 The spherical pendulum has a regular torus bundle around its focus--focus critical value whose period basis returns around a loop by the nonidentity matrix $\begin{pmatrix}1&1\\0&1\end{pmatrix}$, as computed in the cited Martynchuk--Broer--Efstathiou source. [given]

2.1 By [F2], this system has no global action–angle coordinates on that regular-value region, while [F1] still supplies charts near each regular torus. Singular fibres also lie outside [F1]. Hence the claimed global conclusion is false. [A1, F1, F2, step 1.1] ∎
