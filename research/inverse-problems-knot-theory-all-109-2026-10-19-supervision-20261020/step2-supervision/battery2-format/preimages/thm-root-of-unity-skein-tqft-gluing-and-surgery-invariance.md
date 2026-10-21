---
id: thm-root-of-unity-skein-tqft-gluing-and-surgery-invariance
kind: theorem
title: "Root-of-unity skein TQFT gluing and surgery invariance"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 11
deps:
  - def-extended-skein-cobordism-anomaly-data
  - def-skein-tqft-state-space-and-handlebody-pairing
  - lem-root-handlebody-pairing-nondegeneracy-and-gluing
  - lem-root-skein-surgery-kirby-color-invariance
  - def-weighted-lagrangian-ribbon-bordism
  - thm-kirby-moves-classify-framed-link-presentations
  - def-axiom-of-choice
justified_by: []
proof_strategy: direct
axiom_use: "Full AC is used through finite framed-link surgery presentations and the Kirby-move classification supplier; all color sums are finite."
provenance:
  statement: literature-derived
  proof: literature-derived
sources:
  references:
    - title: "C. Blanchet, N. Habegger, G. Masbaum, and P. Vogel, Topological Quantum Field Theories Derived from the Kauffman Bracket, Topology 34 (1995), Theorem 1.4 and §§1–5"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/bhmv.pdf"
    - title: "Louis H. Kauffman and Sostenes L. Lins, Temperley-Lieb Recoupling Theory and Invariants of 3-Manifolds, Chapters 7 and 12"
      url: "https://www.jstor.org/stable/j.ctt1bgzb7v"
    - title: "Sean Pohorence, 3-manifold Invariants and TQFTs (January 2016), §§1.2 and 3"
      url: "https://categorified.net/RTinvariants/Jan29-Feb3.pdf"
    - title: "BHMV, Topological Quantum Field Theories Derived from the Kauffman Bracket, Topology 34 (1995), exact external inputs"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/bhmv.pdf"
      locator: "Section 2 pp.897–898; Proposition 1.9 p.891; Theorem 1.4 p.887; Corollary 4.10 and Theorem 4.11 p.909"
    - title: "Gilmer–Masbaum, Maslov index, Lagrangians, Mapping Class Groups and TQFT, arXiv:0912.4706v3"
      url: "https://arxiv.org/pdf/0912.4706v3"
      locator: "Section 2 pp.4–6, equation (1), and Section 11 pp.23–25"
---

## Statement

Assume full AC. Fix even $p\ge4$, a primitive $2p$-th root $A$, and the BHMV Kauffman bracket convention with $\delta=-A^2-A^{-2}$. On the weighted Lagrangian extended bordism category built from the root semisimplified Temperley–Lieb data, the normalized Kirby-color surgery maps define a finite-dimensional skein TQFT: the handlebody state spaces are the radical quotients of their skein modules, gluing is given by the inverse normalized handlebody pairing, and the resulting closed value is unchanged under isotopy, framed handle slides, and split $\pm1$-blow-ups. Forgetting the weight and Lagrangian extension yields only the projective ordinary-oriented data unless a separate anomaly-cancellation result is proved.

## Statement references

[[def-sl-two-root-of-unity-skein-parameter|Root and bracket conventions]]

[[def-extended-skein-cobordism-anomaly-data|Weighted Lagrangian extension and anomaly data]]

[[def-skein-tqft-state-space-and-handlebody-pairing|State spaces]]

[[lem-root-skein-surgery-kirby-color-invariance|Kirby-color surgery maps]]

[[lem-root-handlebody-pairing-nondegeneracy-and-gluing|Pairing and gluing identities]]

[[thm-kirby-moves-classify-framed-link-presentations|Framed surgery presentations and move classification]]

[Blanchet, Habegger, Masbaum, and Vogel, *Topological Quantum Field Theories Derived from the Kauffman Bracket*, Theorem 1.4 and §§1–5](https://webhomes.maths.ed.ac.uk/~v1ranick/papers/bhmv.pdf)

[Kauffman and Lins, *Temperley-Lieb Recoupling Theory and Invariants of 3-Manifolds*, Chapters 7 and 12](https://www.jstor.org/stable/j.ctt1bgzb7v)

[Pohorence, *3-manifold Invariants and TQFTs*, §§1.2 and 3](https://categorified.net/RTinvariants/Jan29-Feb3.pdf)

## Facts & Assumptions

**Given:** Full AC, the fixed BHMV root and pivotal convention, weighted Lagrangian bordism data, the root state spaces and their surgery maps.

[A1] [[def-axiom-of-choice]] supplies the full choice assumption used by the surgery-presentation and Kirby-move supplier.

[F1] [[thm-kirby-moves-classify-framed-link-presentations]]: framed surgery diagrams for the same closed oriented manifold are connected by the stated isotopies, framed handle slides, and split signed-unit-unknot moves.

[F2] [[lem-root-skein-surgery-kirby-color-invariance]] supplies the closed surgery invariance, nonzero Gauss sums and precise external BHMV weighted normalization, including weight unit $\kappa^3$.

[F3] [[lem-root-handlebody-pairing-nondegeneracy-and-gluing]] supplies the perfect radical-quotient pairing, finite inverse sewing tensor and externally specified weighted gluing.

[F4] [[def-weighted-lagrangian-ribbon-bordism]] supplies associative weighted Lagrangian composition with the Wall-signature Maslov correction.

## Proof

**Given:** The data in the Statement.

1.1 For a fixed surgery presentation, the color set is finite and the state-space pairing is defined by a finite bracket evaluation. This constructs a candidate linear map for each presented weighted bordism. [A1, F2, F3, F4, given, construct]

2.1 Any two presented closed surgery links are related by [F1], and [F2] preserves their values under every move. For bordisms, use the BHMV additional $\eta^{b_0+b_1}$ normalization specified in the state-space Definition, not the raw closed invariant alone. The finite state spaces, perfect pairing and actual surgery/sewing maps are [F3], whose external BHMV/Gilmer–Masbaum input supplies the TQFT construction at the exact even root and complex specialization. The inverse-pairing contraction composes these maps, with the integer Wall/Maslov weight law [F4]. This proves finite-dimensionality, gluing and presentation invariance of the stated weighted theory. [A1, F1, F2, F3, F4, step 1.1]

2.2 Forgetting the weight removes the scalar that corrects the Maslov/signature defect. Therefore the imported construction descends only projectively to ordinary oriented data without a further anomaly-cancellation input. No such additional theorem is asserted here. Full AC remains the declared branch of the presentation/marked category interfaces; finite color sums add no stronger assumption. [A1, F2, F3, F4, step 2.1] ∎
