---
id: lem-root-handlebody-pairing-nondegeneracy-and-gluing
kind: lemma
title: "Handlebody pairing nondegeneracy and gluing"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 10
deps:
  - def-skein-tqft-state-space-and-handlebody-pairing
  - lem-root-handlebody-spine-state-space-finite-generation
  - def-extended-skein-cobordism-anomaly-data
  - def-axiom-of-choice
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Full AC is inherited from the marked surgery-presentation and weighted-bordism interfaces."
provenance:
  statement: literature-derived
  proof: literature-derived
sources:
  references:
    - title: "C. Blanchet, N. Habegger, G. Masbaum, and P. Vogel, Topological Quantum Field Theories Derived from the Kauffman Bracket, §§1 and 4–5"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/bhmv.pdf"
    - title: "Louis H. Kauffman and Sostenes L. Lins, Temperley-Lieb Recoupling Theory and Invariants of 3-Manifolds, Chapters 6–7"
      url: "https://api.pageplace.de/preview/DT0400.9781400882533_A27764847/preview-9781400882533_A27764847.pdf"
    - title: "Sean Pohorence, 3-manifold Invariants and TQFTs (January 2016), §3"
      url: "https://categorified.net/RTinvariants/Jan29-Feb3.pdf"
    - title: "BHMV, Topological Quantum Field Theories Derived from the Kauffman Bracket, Topology 34 (1995), exact external inputs"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/bhmv.pdf"
      locator: "Section 2 pp.897–898; Proposition 1.9 p.891; Theorem 1.4 p.887; Corollary 4.10 and Theorem 4.11 p.909"
    - title: "Gilmer–Masbaum, Maslov index, Lagrangians, Mapping Class Groups and TQFT, arXiv:0912.4706v3"
      url: "https://arxiv.org/pdf/0912.4706v3"
      locator: "Section 2 pp.4–6, equation (1), and Section 11 pp.23–25"
---

## Statement

For the fixed root parameter, the normalized double-handlebody pairing on the admissible spine states of a marked handlebody is nondegenerate after quotienting by its radical. The inverse pairing defines the sewing map for gluing along a closed marked surface, and these maps satisfy the stated weighted Lagrangian anomaly correction.

## Statement references

[[def-skein-tqft-state-space-and-handlebody-pairing|State-space pairing]]

[[lem-root-handlebody-spine-state-space-finite-generation|Finite spine spanning set]]

[[def-extended-skein-cobordism-anomaly-data|Weighted Lagrangian anomaly convention]]

[Blanchet, Habegger, Masbaum, and Vogel, *Topological Quantum Field Theories Derived from the Kauffman Bracket*, §§1 and 4–5](https://webhomes.maths.ed.ac.uk/~v1ranick/papers/bhmv.pdf)

[Kauffman and Lins, *Temperley-Lieb Recoupling Theory and Invariants of 3-Manifolds*, Chapters 6–7](https://api.pageplace.de/preview/DT0400.9781400882533_A27764847/preview-9781400882533_A27764847.pdf)

[Pohorence, *3-manifold Invariants and TQFTs*, §3](https://categorified.net/RTinvariants/Jan29-Feb3.pdf)

## Facts & Assumptions

**Given:** The finite spanning set of admissible spine states and the normalized gluing pairing.

[F1] [[def-skein-tqft-state-space-and-handlebody-pairing]] defines the radical quotient and pairing.

[F2] [[lem-root-handlebody-spine-state-space-finite-generation]] supplies the finite admissible spine spanning set via its explicitly labelled external BHMV input.

[F3] [[def-extended-skein-cobordism-anomaly-data]] fixes the weight and Maslov convention.

[F4] **External input — perfect pairing and sewing.** BHMV, Theorem1.4 p.887, property(F) on p.886, Proposition1.9 p.891, and Theorem4.11 p.909: in this even-root theory the radical quotient is finite free with unimodular dual pairing, the admissible spine states form a basis with unit diagonal norms in the double pairing, and the universal gluing maps satisfy the TQFT axioms. Proposition1.9 permits the complementary handlebody giving $S^3$, rather than assuming the self-double and $S^3$ pairings have the same matrix. Their normalization is the $Z_p$ normalization explicitly fixed in [F1]. Only perfectness/basis/sewing at this actual convention is imported.

[F5] **External input — actual weighted variant.** Gilmer–Masbaum, arXiv:0912.4706v3, §2 equation(1) pp.4–6 and §11 pp.23–25, states the colored TQFT with Lagrangians and integer weights and one-weight multiplier $\nu=\kappa^3$ in BHMV notation. The finite sign comparison $\mu_{GM}=-\mu_{Wall}$ is as recorded in the Kirby lemma, so its composition is exactly that of [F3]. The source states rational Lagrangians. For the real Lagrangians of [F3], take the rational handlebody-kernel reference on each marked surface and transport by the weight-zero identity cylinder to its specified real Lagrangian; the reverse cylinder is its inverse because $\mu(L,L',L)=0$. Conjugating morphisms by these cylinders is a functor to the rational-reference category, with the integer weights computed by [F3], so the imported functor extends to these real objects. This is a finite categorical transport, not an assumption that every real Lagrangian is rational.

## Proof

**Given:** A marked handlebody spine, its admissible colorings, and the gluing pairing.

1.1 On a fixed finite spine, each admissible coloring gives a finite colored graph state. Gluing a pair of handlebodies evaluates the resulting closed colored graph using the specified root bracket and anomaly normalization. [F1, F2, F3, given]

2.1 By [F4], the radical quotients for the two orientations are finite-dimensional dual spaces and their normalized pairing is perfect. This is stronger than left nondegeneracy by the definition of a radical alone. Choose bases $v_i,w_j$ and let $B_{ij}$ be their pairing matrix. Its inverse gives the coevaluation tensor $\sum_{i,j}(B^{-1})_{ji}v_i\otimes w_j$; contraction with $B$ on either side is the identity. This finite linear-algebra identity is exactly the sewing contraction in the imported gluing theorem and is independent of the chosen dual bases. [F1, F2, F4, step 1.1, algebra]

3.1 The imported weighted gluing in [F5] gives the prescribed anomaly factor, with weight law [F3]. Its parameter is the cube of the selected sixth root, not an independently chosen square root with an unchecked sign. The real-Lagrangian transport in [F5] respects composition because the intervening reference cylinders cancel. Thus the inverse-pairing sewing maps satisfy precisely the registered weighted law. No unweighted anomaly cancellation or positivity of every complex-root Hermitian form is asserted. [F3, F4, F5, step 2.1, algebra] ∎

