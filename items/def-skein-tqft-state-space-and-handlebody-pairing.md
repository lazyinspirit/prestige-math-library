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
    - title: "BHMV, Topological Quantum Field Theories Derived from the Kauffman Bracket, Topology 34 (1995), exact external inputs"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/bhmv.pdf"
      locator: "Section 2 pp.897–898; Proposition 1.9 p.891; Theorem 1.4 p.887; Corollary 4.10 and Theorem 4.11 p.909"
    - title: "Gilmer–Masbaum, Maslov index, Lagrangians, Mapping Class Groups and TQFT, arXiv:0912.4706v3"
      url: "https://arxiv.org/pdf/0912.4706v3"
      locator: "Section 2 pp.4–6, equation (1), and Section 11 pp.23–25"
---

## Definition

Fix a closed oriented marked surface $\Sigma$ with its Lagrangian and weighted anomaly data, and fix a marked handlebody $H$ with boundary $\Sigma$ and a complementary marked handlebody $H'$ so that their gluing is the standard oriented three-sphere. Specialize the framed-link Kauffman bracket skein module of $H$ to the coefficient field and root fixed above. For $x\in\mathcal K_A(H)$ and $y\in\mathcal K_A(H')$, define the handlebody pairing $B_\Sigma(x,y)$ by gluing the two framed skeins and evaluating the resulting closed marked three-manifold with the normalized root surgery invariant. Define

$$\operatorname{Rad}(B_\Sigma)=\{x\in\mathcal K_A(H):B_\Sigma(x,y)=0\text{ for every }y\in\mathcal K_A(H')\}, \qquad V_p(\Sigma)=\mathcal K_A(H)/\operatorname{Rad}(B_\Sigma).$$

This is the radical-quotient handlebody state-space construction for the specified marking and anomaly data. Independence of the marking, finite generation, nondegeneracy, and the gluing maps are separate mathematical obligations.

**External normalization input.** In this Definition the closed marked evaluation is the BHMV TQFT normalization, not merely the raw signature-normalized closed invariant $\theta_p$ of the Kirby lemma. BHMV §2 pp.897–898 and Gilmer–Masbaum §11 pp.23–25 give
$$Z_p(M,w)=\eta^{b_0(M)+b_1(M)}(\kappa^3)^w\theta_p(M),\qquad \Delta_\pm=\eta^{-1}\kappa^{\pm3}.$$
Thus $Z_p(S^3,0)=\eta$ and $Z_p(S^2\times S^1,0)=1$. These nonzero normalizations and the registered Wall-sign weight are part of the pairing. BHMV Proposition1.9, p.891, identifies EXACTLY this radical quotient computed with two complementary handlebodies with its universal state space. This external identification supplies well-definedness of the presented model; its finite basis and gluing are the separate following lemmas. The selected $\kappa$ remains a sixth root, with one weight step acting by its cube. The source itself is only used at these located statements/constructions, not as a claimed locally reconstructed universal-construction proof.

**Source hypotheses for this identification.** The normalized BHMV closed invariant is multiplicative and involutive, so BHMV Proposition 1.1 gives its cobordism-generated quantization functor at this fixed root; extend its coefficients to $\mathbb C$ as stated above. BHMV Theorem 1.7 supplies both hypotheses needed for Proposition 1.9: its Kauffman bracket relations let that proposition replace the free bordism module by the specialized skein module, and its surgery axioms give the surjectivity and radical-kernel description. The corresponding weighted Lagrangian version is the BHMV skein TQFT with integral weights and Lagrangians in place of $p_1$-structures, as described by Gilmer–Masbaum in §11; their one-weight square-root multiplier is matched to the selected BHMV sixth root by $\kappa_{\mathrm{GM}}=\kappa^3$. In that section Lemma 11.1 states the weighted surgery axiom and Remark 11.3 applies it to the handlebody skein presentation; the source refers the Lemma 11.1 proof to the BHMV argument rather than repeating it. These are imported source inputs, not a locally reconstructed proof, and they do not add another quotient or change the state-space interface.

## Definition references

[[def-kauffman-bracket-skein-module-of-a-three-manifold|Framed-link Kauffman bracket module]]

[[def-sl-two-root-of-unity-skein-parameter|Root and coefficient conventions]]

[[def-extended-skein-cobordism-anomaly-data|Weighted anomaly data]]

[[lem-root-skein-surgery-kirby-color-invariance|Closed surgery invariant required by the pairing]]

[Blanchet, Habegger, Masbaum, and Vogel, *Topological Quantum Field Theories Derived from the Kauffman Bracket*, §§1–2](https://webhomes.maths.ed.ac.uk/~v1ranick/papers/bhmv.pdf)

[BHMV, Propositions 1.1 and 1.9 and Theorem 1.7, §§1.A, 1.C and pp. 886–891](https://webhomes.maths.ed.ac.uk/~v1ranick/papers/bhmv.pdf)

[Gilmer–Masbaum, *Maslov Index, Lagrangians, Mapping Class Groups and TQFT*, §11, weighted BHMV construction, Lemma 11.1 and Remark 11.3](https://arxiv.org/pdf/0912.4706v3)

[Pohorence, *3-manifold Invariants and TQFTs*, §§1.2 and 3.1–3.3](https://categorified.net/RTinvariants/Jan29-Feb3.pdf)

[Chen, *The Temperley-Lieb Categories and Skein Modules*, Chapter 6](https://arxiv.org/pdf/1502.06845v1)
