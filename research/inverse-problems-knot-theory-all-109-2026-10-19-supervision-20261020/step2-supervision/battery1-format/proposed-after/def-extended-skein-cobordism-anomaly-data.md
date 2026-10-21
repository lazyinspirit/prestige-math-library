---
id: def-extended-skein-cobordism-anomaly-data
kind: definition
title: "Weighted Lagrangian extension and root anomaly data"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 6
deps:
  - def-sl-two-root-of-unity-skein-parameter
  - def-semisimplified-temperley-lieb-fusion-category
  - lem-root-fusion-rules-and-simple-object-completeness
  - def-weighted-lagrangian-ribbon-bordism
  - def-axiom-of-choice
justified_by: []
aliases: []
proof_strategy: not-applicable
axiom_use: "Full AC is a declared prerequisite of the weighted Lagrangian bordism interface; choosing the displayed roots for one fixed p and A is a finite pointwise choice, with no familywise choice used in this definition."
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "C. Blanchet, N. Habegger, G. Masbaum, and P. Vogel, Topological Quantum Field Theories Derived from the Kauffman Bracket, §§1–2 and Appendix B"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/bhmv.pdf"
    - title: "Sean Pohorence, 3-manifold Invariants and TQFTs (January 2016), §3.1"
      url: "https://categorified.net/RTinvariants/Jan29-Feb3.pdf"
    - title: "Walker, On Witten's 3-Manifold Invariants, §§1 and 18"
      url: "https://canyon23.net/math/1991TQFTNotes.pdf"
---

## Definition

For the fixed root parameter, let $\mathcal C_p$ denote the semisimplified Temperley–Lieb category with labels $0,\ldots,r-2$, pivotal dimensions $d_j=[j+1]$, and Hopf-link data inherited from the Kauffman bracket. Put $\mathcal D_p^2=\sum_{j=0}^{r-2}d_j^2$ and choose $\mathcal D_p\in\mathbb C$ with that square. Choose $\kappa\in\mathbb C$ satisfying $\kappa^6=A^{-6-(p+1)p/2}$. The root-specific extended data are the weighted Lagrangian ribbon bordisms whose objects are closed oriented labeled surfaces with a Lagrangian subspace of real first homology and whose morphisms are collared oriented labeled ribbon bordisms with integer weights. If $M_1:\Sigma_0\to\Sigma_1$ and $M_2:\Sigma_1\to\Sigma_2$ have relations $\Lambda_{M_1},\Lambda_{M_2}$ and boundary Lagrangians $\lambda_0,\lambda_1,\lambda_2$, define

$$K_1=\Lambda_{M_1}(\lambda_0),\qquad K_0=\lambda_1,\qquad K_2=\Lambda_{M_2}^{\,t}(\lambda_2), \qquad n(M_2\circ M_1)=n_2+n_1+\mu(K_1,K_0,K_2),$$

using the Wall-signature Maslov convention. The category composition, units, and anomaly weight are those specified by this formula and the weighted Lagrangian bordism definition; no ordinary oriented anomaly-free functor is part of this Definition.

## Definition references

[[def-sl-two-root-of-unity-skein-parameter|Root and loop conventions]]

[[def-semisimplified-temperley-lieb-fusion-category|Root category]]

[[lem-root-fusion-rules-and-simple-object-completeness|Fusion, ribbon, and Hopf-link data]]

[[def-weighted-lagrangian-ribbon-bordism|Weighted Lagrangian ribbon-bordism category and composition convention]]

[Blanchet, Habegger, Masbaum, and Vogel, *Topological Quantum Field Theories Derived from the Kauffman Bracket*, §§1–2 and Appendix B](https://webhomes.maths.ed.ac.uk/~v1ranick/papers/bhmv.pdf)

[Pohorence, *3-manifold Invariants and TQFTs*, §3.1](https://categorified.net/RTinvariants/Jan29-Feb3.pdf)

[Walker, *On Witten's 3-Manifold Invariants*, §§1 and 18](https://canyon23.net/math/1991TQFTNotes.pdf)

[[def-axiom-of-choice|Full choice assumption inherited by the weighted category]]

## Remarks

The BHMV source uses $p_1$-structures, while the registered prerequisite map specifies Lagrangian-weighted data. This Definition supplies the latter using the existing local category carrier; the equality between its Maslov correction and the BHMV $p_1$/signature anomaly remains a theorem obligation and is not asserted here.
