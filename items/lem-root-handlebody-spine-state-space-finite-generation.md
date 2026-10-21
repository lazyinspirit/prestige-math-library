---
id: lem-root-handlebody-spine-state-space-finite-generation
kind: lemma
title: "Finite generation by admissible handlebody-spine states"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 9
deps:
  - def-skein-tqft-state-space-and-handlebody-pairing
  - lem-root-fusion-rules-and-simple-object-completeness
  - def-axiom-of-choice
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Finite choice only is needed for a fixed finite spine; full AC is inherited from the declared state-space/surgery interface."
provenance:
  statement: literature-derived
  proof: literature-derived
sources:
  references:
    - title: "C. Blanchet, N. Habegger, G. Masbaum, and P. Vogel, Topological Quantum Field Theories Derived from the Kauffman Bracket, §§4–5"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/bhmv.pdf"
    - title: "Louis H. Kauffman and Sostenes L. Lins, Temperley-Lieb Recoupling Theory and Invariants of 3-Manifolds, Chapters 4–7"
      url: "https://api.pageplace.de/preview/DT0400.9781400882533_A27764847/preview-9781400882533_A27764847.pdf"
    - title: "Joshua Chen, The Temperley-Lieb Categories and Skein Modules, Chapter 6"
      url: "https://arxiv.org/pdf/1502.06845v1"
    - title: "BHMV, Topological Quantum Field Theories Derived from the Kauffman Bracket, Topology 34 (1995), exact external inputs"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/bhmv.pdf"
      locator: "Section 2 pp.897–898; Proposition 1.9 p.891; Theorem 1.4 p.887; Corollary 4.10 and Theorem 4.11 p.909"
    - title: "Gilmer–Masbaum, Maslov index, Lagrangians, Mapping Class Groups and TQFT, arXiv:0912.4706v3"
      url: "https://arxiv.org/pdf/0912.4706v3"
      locator: "Section 2 pp.4–6, equation (1), and Section 11 pp.23–25"
---

## Statement

Let $H$ be a handlebody with a fixed finite trivalent spine $G$, and let every edge carry one of the labels $0,\ldots,r-2$. Call a labeling admissible when the three labels at each trivalent vertex satisfy the root fusion rule. In the radical-quotient state space of $H$, the states represented by admissible labeled spines span, and the set of such labelings is finite. This statement asserts spanning, not linear independence.

## Statement references

[[def-skein-tqft-state-space-and-handlebody-pairing|Handlebody state space]]

[[lem-root-fusion-rules-and-simple-object-completeness|Root fusion rule]]

[Blanchet, Habegger, Masbaum, and Vogel, *Topological Quantum Field Theories Derived from the Kauffman Bracket*, §§4–5](https://webhomes.maths.ed.ac.uk/~v1ranick/papers/bhmv.pdf)

[Kauffman and Lins, *Temperley-Lieb Recoupling Theory and Invariants of 3-Manifolds*, Chapters 4–7](https://api.pageplace.de/preview/DT0400.9781400882533_A27764847/preview-9781400882533_A27764847.pdf)

[Chen, *The Temperley-Lieb Categories and Skein Modules*, Chapter 6](https://arxiv.org/pdf/1502.06845v1)

## Facts & Assumptions

**Given:** A finite handlebody spine and the root state-space construction.

[F1] [[def-skein-tqft-state-space-and-handlebody-pairing]] defines the state space as a radical quotient of a specialized handlebody skein module.

[F2] [[lem-root-fusion-rules-and-simple-object-completeness]] proves that the finite label set is $\{0,\ldots,r-2\}$ and gives the exact local fusion rule; it does not itself prove that arbitrary handlebody skeins are spanned by spine states.

[F3] **External input — actual handlebody quotient and spine basis.** BHMV, Proposition1.9 p.891 and Theorem4.11 p.909, identify the radical-quotient handlebody model with the universal state space and give an orthogonal basis represented by the $p$-admissibly colored fixed banded spine. For even $p=2r$, the source's $q=(p-2)/2=r-1$ and colors $<q$ are exactly $0,\ldots,r-2$; $p$-admissibility is the registered truncated fusion rule. Coefficients are specialized through the given complex primitive root, with no vanishing quantum denominator inverted. This imports the actual spanning theorem, rather than inferring it from abstract semisimplicity alone.

## Proof

**Given:** The fixed finite spine $G$ and the finite label set $\{0,\ldots,r-2\}$.

1.1 The edge set of $G$ is finite and each edge has only $r-1$ candidate labels by [F2]. Therefore the set of all labelings, and hence its subset of admissible labelings, is finite. [given, F2, construct]

2.1 Apply [F3] to the supplied handlebody marking and spine, using [F1] for the identical radical-quotient model and [F2] for its root labels. Every vector is a linear combination of the admissible spine states. Together with the finite count in step1.1 this proves the full Statement. Linear independence, although present in the imported theorem, is not needed for this spanning conclusion. No infinite skein reduction or additional choice campaign is performed. [F1, F2, F3, step 1.1] ∎
