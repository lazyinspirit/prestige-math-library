---
id: lem-root-skein-surgery-kirby-color-invariance
kind: lemma
title: "Root Kirby-color handle-slide and blow-up invariance"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 7
deps:
  - def-sl-two-root-of-unity-skein-parameter
  - def-semisimplified-temperley-lieb-fusion-category
  - lem-root-fusion-rules-and-simple-object-completeness
  - def-extended-skein-cobordism-anomaly-data
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Choice-free in the finite color calculations; full AC is carried separately by the surgery-presentation theorem that consumes this result."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "C. Blanchet, N. Habegger, G. Masbaum, and P. Vogel, Three-Manifold Invariants Derived from the Kauffman Bracket, Topology 31 (1992), §§2–4"
      url: "https://www.sciencedirect.com/science/article/pii/004093839290002Y"
    - title: "Louis H. Kauffman and Sostenes L. Lins, Temperley-Lieb Recoupling Theory and Invariants of 3-Manifolds, Chapters 8 and 12"
      url: "https://www.jstor.org/stable/j.ctt1bgzb7v"
    - title: "Sean Pohorence, 3-manifold Invariants and TQFTs (January 2016), §3.1"
      url: "https://categorified.net/RTinvariants/Jan29-Feb3.pdf"
---

## Statement

Fix even $p\ge4$, a primitive $2p$-th root $A$, the BHMV semisimplified category, and its quantum dimensions $d_j$ and twists $\theta_j$ for $0\le j\le r-2$. Put $\Omega_p=\sum_{j=0}^{r-2}d_jp_j$, $\Delta_+=\sum_jd_j^2\theta_j$, and $\Delta_-=\sum_jd_j^2\theta_j^{-1}$. The Statement asserts that both $\Delta_+$ and $\Delta_-$ are nonzero. For a finite integral framed link $L$ in the oriented three-sphere, color each surgery component by $\Omega_p$ and normalize the bracket evaluation by $\Delta_+^{b_+(L)}\Delta_-^{b_-(L)}$, where $b_\pm(L)$ are the positive and negative indices of the framing matrix. With the stated BHMV root and weighted anomaly convention, the resulting value is unchanged under framed isotopy, handle slides, and addition or deletion of a split $\pm1$-framed unknot.

## Statement references

[[def-sl-two-root-of-unity-skein-parameter|Root, coefficient, and loop conventions]]

[[def-semisimplified-temperley-lieb-fusion-category|Simple projectors and category convention]]

[[lem-root-fusion-rules-and-simple-object-completeness|Fusion dimensions and twists]]

[[def-extended-skein-cobordism-anomaly-data|Weighted anomaly normalization]]

[Blanchet, Habegger, Masbaum, and Vogel, *Three-Manifold Invariants Derived from the Kauffman Bracket*, §§2–4](https://www.sciencedirect.com/science/article/pii/004093839290002Y)

[Kauffman and Lins, *Temperley-Lieb Recoupling Theory and Invariants of 3-Manifolds*, Chapters 8 and 12](https://www.jstor.org/stable/j.ctt1bgzb7v)

[Pohorence, *3-manifold Invariants and TQFTs*, §3.1](https://categorified.net/RTinvariants/Jan29-Feb3.pdf)

## Facts & Assumptions

**Given:** The root parameter, the semisimplified category, its simple projectors, quantum dimensions, twist, and a finite integral framed surgery link.

[F1] [[def-sl-two-root-of-unity-skein-parameter]] fixes $p$, $A$, $r$, $\delta$, and $\mathbb C$.

[F2] [[def-semisimplified-temperley-lieb-fusion-category]] defines the quotient and the root-specific projectors.

[F3] [[lem-root-fusion-rules-and-simple-object-completeness]] is intended to establish the finite simple list, dimensions, twists, and Hopf-link nondegeneracy; its general recoupling proof is not yet complete.

[F4] [[def-extended-skein-cobordism-anomaly-data]] fixes the weighted Lagrangian composition and the selected sixth root $\kappa$.

## Proof

**Given:** The data in the Statement.

1.1 The label set is finite, so $\Omega_p$ is a finite linear combination of colored projectors. The normalized surgery expression is therefore a finite complex number whenever the displayed Gauss sums are nonzero. [F1, F2, given, construct]

2.1 A handle slide must be checked by inserting the full Kirby color into the local encircling annulus and using the root fusion and Hopf-link orthogonality identities. A $\pm1$ blow-up must be checked by evaluating the two framed-unknot Gauss sums and matching them to the weight/signature correction. Those root identities and their exact conversion to the registered anomaly normalization have not been proved in this carrier, so the asserted move invariance is escalated. [F3, F4, step 1.1, given]
