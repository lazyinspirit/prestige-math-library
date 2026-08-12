---
id: thm-five-lemma-for-modules
kind: theorem
title: "The Five Lemma for modules"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-four-lemma-for-modules]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "A. Kleshchev, Lectures on Abstract Algebra for Graduate Students, sections 3.6, 3.14, and 3.15"
      url: "https://darkwing.uoregon.edu/~klesh/teaching/Alg600LN12.pdf"
    - title: "The Stacks Project, Algebra"
      url: "https://stacks.math.columbia.edu/tag/05CD"
    - title: "P. Hekmati, Homological Algebra, section 3.1"
      url: "https://www.math.auckland.ac.nz/~hekmati/HomologicalAlgebra.pdf"
pipeline_run: null
---

## Statement

In a commutative diagram with exact rows

```tikzcd
A \arrow[r, "u"] \arrow[d, "a"'] & B \arrow[r, "v"] \arrow[d, "b"'] & C \arrow[r, "w"] \arrow[d, "c"'] & D \arrow[r, "x"] \arrow[d, "d"'] & E \arrow[d, "e"] \\
A' \arrow[r, "u'"'] & B' \arrow[r, "v'"'] & C' \arrow[r, "w'"'] & D' \arrow[r, "x'"'] & E'
```

the middle map $c$ is injective if $a$ is surjective and $b,d$ are injective, and it is surjective if $b,d$ are surjective and $e$ is injective. In particular, if $a,b,d,e$ are isomorphisms, then $c$ is an isomorphism.

## Facts & Assumptions

**Given:** The commutative diagram in the statement, with exact rows.

**Diagram:** $u\colon A\to B$, $v\colon B\to C$, $w\colon C\to D$, $x\colon D\to E$, $u'\colon A'\to B'$, $v'\colon B'\to C'$, $w'\colon C'\to D'$, $x'\colon D'\to E'$, $a\colon A\to A'$, $b\colon B\to B'$, $c\colon C\to C'$, $d\colon D\to D'$, $e\colon E\to E'$.

[C1] $b\circ u=u'\circ a$ (given).

[C2] $c\circ v=v'\circ b$ (given).

[C3] $d\circ w=w'\circ c$ (given).

[C4] $e\circ x=x'\circ d$ (given).

[L1] In such a diagram, $a$ surjective with $b,d$ injective implies $c$ injective, while $b,d$ surjective with $e$ injective implies $c$ surjective ([[lem-four-lemma-for-modules]]).

## Proof

**Proof technique:** direct.

1.1 Under the first set of hypotheses, the injective Four Lemma [L1] applied to the diagram [C1] to [C4] gives that $c$ is injective. [C1, C2, C3, C4, L1]

1.2 Under the second set of hypotheses, the surjective Four Lemma [L1] applied to the same diagram gives that $c$ is surjective. [C1, C2, C3, C4, L1]

2.1 If $a,b,d,e$ are isomorphisms, then $a,b,d$ meet the first hypotheses and $b,d,e$ meet the second; steps 1.1 and 1.2 make $c$ both injective and surjective, hence an isomorphism. [step 1.1, step 1.2] ∎
