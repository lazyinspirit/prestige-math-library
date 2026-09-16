---
id: prop-a-nonzero-nilpotent-lie-algebra-has-nonzero-center
kind: proposition
title: A nonzero nilpotent Lie algebra has nonzero center
status: published
origin: pipeline
pipeline_run: phase-2-next-18
deps: [def-lower-central-series-and-nilpotent-lie-algebra, def-lie-subalgebra-ideal-and-center]
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Milne, Lie Algebras, Proposition 2.5(c)"
      url: https://www.jmilne.org/math/CourseNotes/LAG.pdf
      locator: "Proposition 2.5(c), printed p. 12"
---

## Statement

If $\mathfrak g$ is a nonzero nilpotent Lie algebra, then
$Z(\mathfrak g)\neq0$.

## Facts & Assumptions

**Given:** A nonzero nilpotent Lie algebra $\mathfrak g$.

[L1] Nilpotence means that the descending lower central series eventually vanishes, with $\gamma_{r+1}=[\mathfrak g,\gamma_r]$ ([[def-lower-central-series-and-nilpotent-lie-algebra]]).

[L2] The center consists of the elements $z$ satisfying $[\mathfrak g,z]=0$ ([[def-lie-subalgebra-ideal-and-center]]).

## Proof

**Proof technique:** direct.

1.1 Because $\gamma_1(\mathfrak g)=\mathfrak g\neq0$ and the series terminates by [L1], there is a largest index $c\geq1$ with $\gamma_c(\mathfrak g)\neq0$. Its successor satisfies $[\mathfrak g,\gamma_c]=\gamma_{c+1}=0$, so [L2] gives $0\neq\gamma_c\subseteq Z(\mathfrak g)$. [given, L1, L2, algebra]

2.1 Hence the center contains the displayed nonzero subspace and is itself nonzero. The hypothesis $\mathfrak g\neq0$ is essential: the zero algebra has zero center. No choice of a basis or of a central element is needed. [given, step 1.1] ∎
