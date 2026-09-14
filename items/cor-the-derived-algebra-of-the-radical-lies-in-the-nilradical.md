---
id: cor-the-derived-algebra-of-the-radical-lies-in-the-nilradical
kind: corollary
title: The derived algebra of the radical lies in the nilradical
status: draft
origin: pipeline
pipeline_run: phase-2-next-18
deps: [thm-the-commutator-of-a-lie-algebra-with-its-radical-lies-in-the-nilradical]
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Milne, Lie Algebras, Theorem 6.9"
      url: https://www.jmilne.org/math/CourseNotes/LAG.pdf
      locator: "Theorem 6.9, printed p. 36"
---

## Statement

For a finite-dimensional Lie algebra $\mathfrak g$ over a
characteristic-zero field,

$$[\operatorname{rad}(\mathfrak g),\operatorname{rad}(\mathfrak g)]\subseteq\operatorname{nilrad}(\mathfrak g).$$

## Facts & Assumptions

**Given:** A finite-dimensional characteristic-zero Lie algebra $\mathfrak g$.

[L1] The commutator of $\mathfrak g$ with its radical lies in its nilradical:
$[\mathfrak g,\operatorname{rad}(\mathfrak g)]\subseteq
\operatorname{nilrad}(\mathfrak g)$
([[thm-the-commutator-of-a-lie-algebra-with-its-radical-lies-in-the-nilradical]]).

## Proof

**Proof technique:** direct.

1.1 Since $\operatorname{rad}(\mathfrak g)\subseteq\mathfrak g$, monotonicity of the bracket span gives $[\operatorname{rad}(\mathfrak g),\operatorname{rad}(\mathfrak g)]\subseteq[\mathfrak g,\operatorname{rad}(\mathfrak g)]$. [given, algebra]

2.1 Combining step 1.1 with [L1] gives the desired containment. This also covers zero radical, solvable $\mathfrak g$, and $\mathfrak g=0$, and uses no choice. [L1, step 1.1] ∎
