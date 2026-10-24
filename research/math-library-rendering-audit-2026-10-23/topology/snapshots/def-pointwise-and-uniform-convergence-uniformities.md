---
id: def-pointwise-and-uniform-convergence-uniformities
kind: definition
title: "The pointwise and uniform-convergence uniformities on a function set $Y^X$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-uniform-space-by-entourages, def-finite-cardinality]
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references: [{title: "M. Megrelishvili, Lecture Notes in Topological Groups", url: "https://u.math.biu.ac.il/~megereli/TGrNotes070217.pdf"}]
pipeline_run: null
---

## Definition

Let $Y$ be uniform and let $Y^X$ be the set of maps $X\to Y$. For an entourage $V$ of $Y$ and finite $F\subseteq X$ ([[def-finite-cardinality]]), define

$$P(F,V)=\{(f,g):(f(x),g(x))\in V\text{ for every }x\in F\},\qquad Q(V)=\{(f,g):(f(x),g(x))\in V\text{ for every }x\in X\}.$$

The relations $P(F,V)$ form an entourage base: finite intersections are
refined by replacing $F$ with a finite union and $V$ with a common refinement;
inverses replace $V$ by $V^{-1}$; and a square root of $V$ gives a square root
of $P(F,V)$. The same verification with the fixed coordinate set $X$ proves
the axioms for the $Q(V)$. The uniformities they generate are respectively the
**pointwise-convergence** and **uniform-convergence** uniformities on $Y^X$.
