---
id: thm-conditional-independence-of-suslin-hypothesis
kind: theorem
title: "Conditional independence of SH"
status: published
origin: pipeline
deps: [cor-formal-consistency-of-suslin-hypothesis, cor-formal-consistency-of-not-suslin-hypothesis, def-arithmetic-provability-and-consistency, def-suslin-hypothesis-and-suslin-algebra]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Monk, Set theory following Jech, Chapters 15-16"
      url: https://euclid.colorado.edu/~monkd/jech.pdf
justified_by: []
forward_refs: []
---

## Statement

In the external metatheory, if ZFC is consistent, then both ZFC+SH and
ZFC+$\neg$SH are consistent. Consequently, under the same consistency
hypothesis,

$$\mathrm{ZFC}\nvdash\mathrm{SH}\qquad\text{and}\qquad\mathrm{ZFC}\nvdash\neg\mathrm{SH}.$$

Here consistency and derivability refer to the fixed certified finite proof
predicates. The conclusion is conditional metamathematical independence; it is
not the assertion that ZFC internally proves its own consistency or either
non-derivability statement.

## Facts & Assumptions

**Given:** external $\operatorname{Con}(\mathrm{ZFC})$ for the fixed proof
predicate and contradiction sentence.

[F1] External consistency of ZFC implies external consistency of ZFC+SH.
[[cor-formal-consistency-of-suslin-hypothesis]]

[F2] PA proves, and hence the external metatheory validates, that consistency
of ZFC implies consistency of ZFC+$\neg$SH.
[[cor-formal-consistency-of-not-suslin-hypothesis]]

[F3] $\operatorname{Con}(T)$ means that there is no actual certified finite
$T$-refutation of the fixed contradiction. [[def-arithmetic-provability-and-consistency]]

[F4] SH is the assertion that no strong-convention Suslin line exists, so
$\neg$SH is its literal logical negation. [[def-suslin-hypothesis-and-suslin-algebra]]

## Proof

**Proof technique:** contradiction by adjoining the opposite axiom.

1.1 By the given consistency hypothesis and [F1], ZFC+SH has no certified finite refutation. By [F2], ZFC+$\neg$SH has no certified finite refutation. These are external conclusions about the two fixed proof predicates; the weaker first supplier prevents promoting this conjunction to a new PA theorem here. [F1, F2, F3, assume-hyp]

2.1 Suppose that $d$ were a certified ZFC proof of SH. Every ZFC axiom and logical inference used by $d$ is also available in ZFC+$\neg$SH. Regard $d$ as a derivation in that extension, append its one added axiom $\neg$SH, and then append a fixed propositional derivation of the chosen contradiction from SH and $\neg$SH. This would be a certified finite ZFC+$\neg$SH refutation, contrary to step 1.1. Hence $\mathrm{ZFC}\nvdash\mathrm{SH}$. [F3, F4, step 1.1, construct]

2.2 Conversely, suppose that $e$ were a certified ZFC proof of $\neg$SH. View $e$ in ZFC+SH, append the single added SH axiom, and use the same fixed propositional contradiction block with its two premises interchanged. This would refute ZFC+SH, again contradicting step 1.1. Hence $\mathrm{ZFC}\nvdash\neg\mathrm{SH}$. [F3, F4, step 1.1, construct]

3.1 Steps 1.1-2.2 give both consistency conclusions and both non-derivability conclusions under external $\operatorname{Con}(\mathrm{ZFC})$. The argument transforms only actual certified finite proofs. Malformed codes do not satisfy the proof predicate, and the empty line sequence is not silently treated as a refutation. Each hypothetical non-derivability witness uses exactly one occurrence of the opposite extension's added axiom; no set-theoretic choice is made in either proof splice. [F3, step 1.1, step 2.1, step 2.2] ∎

## Remarks

- The result says neither SH nor its negation is derivable from ZFC, provided
  ZFC is consistent. It does not choose a true side of SH in the ambient
  universe.
- All uses of the axiom of choice occur inside the object-theoretic suppliers.
  The final metamathematical proof splices finite derivations and makes no
  family choice.
