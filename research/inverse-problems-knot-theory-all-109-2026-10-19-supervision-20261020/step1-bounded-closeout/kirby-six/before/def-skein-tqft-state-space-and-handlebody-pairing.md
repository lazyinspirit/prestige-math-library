---
id: def-skein-tqft-state-space-and-handlebody-pairing
kind: definition
title: "Skein TQFT state space and handlebody pairing"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 8
deps:
  - def-kauffman-bracket-skein-module-of-a-three-manifold
  - def-sl-two-root-of-unity-skein-parameter
  - def-semisimplified-temperley-lieb-fusion-category
  - def-extended-skein-cobordism-anomaly-data
  - lem-root-skein-surgery-kirby-color-invariance
  - def-axiom-of-choice
justified_by: []
aliases: []
proof_strategy: not-applicable
axiom_use: "Full AC is retained through the surgery-presentation supplier used to define the closed pairing invariant."
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "C. Blanchet, N. Habegger, G. Masbaum, and P. Vogel, Topological Quantum Field Theories Derived from the Kauffman Bracket, §§1–2"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/bhmv.pdf"
    - title: "Sean Pohorence, 3-manifold Invariants and TQFTs (January 2016), §§1.2 and 3.1–3.3"
      url: "https://categorified.net/RTinvariants/Jan29-Feb3.pdf"
    - title: "Joshua Chen, The Temperley-Lieb Categories and Skein Modules, Chapter 6"
      url: "https://arxiv.org/pdf/1502.06845v1"
---

## Definition

Fix a closed oriented marked surface $\Sigma$ with its Lagrangian and weighted anomaly data, and fix a marked handlebody $H$ with boundary $\Sigma$ and a complementary marked handlebody $H'$ so that their gluing is the standard oriented three-sphere. Specialize the framed-link Kauffman bracket skein module of $H$ to the coefficient field and root fixed above. For $x\in\mathcal K_A(H)$ and $y\in\mathcal K_A(H')$, define the handlebody pairing $B_\Sigma(x,y)$ by gluing the two framed skeins and evaluating the resulting closed marked three-manifold with the normalized root surgery invariant. Define

$$
\operatorname{Rad}(B_\Sigma)=\{x\in\mathcal K_A(H):B_\Sigma(x,y)=0\text{ for every }y\in\mathcal K_A(H')\},
\qquad
V_p(\Sigma)=\mathcal K_A(H)/\operatorname{Rad}(B_\Sigma).
$$

This is the radical-quotient handlebody state-space construction for the specified marking and anomaly data. Independence of the marking, finite generation, nondegeneracy, and the gluing maps are separate mathematical obligations.

## Definition references

[[def-kauffman-bracket-skein-module-of-a-three-manifold|Framed-link Kauffman bracket module]]

[[def-sl-two-root-of-unity-skein-parameter|Root and coefficient conventions]]

[[def-extended-skein-cobordism-anomaly-data|Weighted anomaly data]]

[[lem-root-skein-surgery-kirby-color-invariance|Closed surgery invariant required by the pairing]]

[Blanchet, Habegger, Masbaum, and Vogel, *Topological Quantum Field Theories Derived from the Kauffman Bracket*, §§1–2](https://webhomes.maths.ed.ac.uk/~v1ranick/papers/bhmv.pdf)

[Pohorence, *3-manifold Invariants and TQFTs*, §§1.2 and 3.1–3.3](https://categorified.net/RTinvariants/Jan29-Feb3.pdf)

[Chen, *The Temperley-Lieb Categories and Skein Modules*, Chapter 6](https://arxiv.org/pdf/1502.06845v1)
