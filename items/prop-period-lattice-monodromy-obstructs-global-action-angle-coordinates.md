---
id: prop-period-lattice-monodromy-obstructs-global-action-angle-coordinates
kind: proposition
title: Period-lattice monodromy obstructs global action–angle coordinates
status: published
origin: pipeline
deps: ["def-countable-choice","thm-liouville-arnold-action-angle-theorem"]
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Eckhard Meinrenken, Symplectic Geometry
      url: https://web.archive.org/web/20250806200149if_/https://www.math.utoronto.ca/mein/teaching/LectureNotes/symplectic.pdf
      locator: §6.2, global action-angle obstructions, pp. 73--74
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

This item assumes $\mathrm{AC}_\omega$, namely [[def-countable-choice|countable choice]]. In the propagated dependency chain, that assumption is required through [[thm-liouville-arnold-action-angle-theorem]]; after those interfaces are fixed, the remaining local or finite argument makes no additional countable-family choice.

On the regular base of a compact Lagrangian torus fibration, local bases of the
period lattice differ by matrices in $\mathrm{GL}(n,\mathbb Z)$. Parallel
transport therefore defines a monodromy representation
$\pi_1(B)\to\mathrm{GL}(n,\mathbb Z)$. Nontrivial monodromy obstructs global
action–angle coordinates.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, a regular compact connected torus fibration covered by the local action–angle charts of Liouville–Arnold.

[A1] $\mathrm{AC}_\omega$ is [[def-countable-choice|countable choice]] and is required here through [[thm-liouville-arnold-action-angle-theorem]]; after those supplied interfaces are fixed, the remaining local or finite calculation makes no additional countable-family choice.

[F1] Each local chart chooses a $\mathbb Z$-basis of the stabilizer lattice. [[thm-liouville-arnold-action-angle-theorem]].

## Proof

**Proof technique:** direct.

1.1 On an overlap, two ordered period bases generate the same rank-$n$ lattice. Each is therefore an integer linear combination of the other, and the two change matrices are inverse integer matrices; hence the transition lies in $\mathrm{GL}(n,\mathbb Z)$. Products of these transitions around loops give the monodromy representation. [A1, F1, given, algebra]

2.1 A single global angle system would label the same $n$ fundamental period loops on every fibre. Those labels would be a global basis of the lattice local system, so transport around every loop would return the basis unchanged. Therefore nonidentity monodromy rules out global action–angle coordinates. Trivial monodromy is only necessary: a global Lagrangian-section obstruction may remain. [F1, step 1.1] ∎
