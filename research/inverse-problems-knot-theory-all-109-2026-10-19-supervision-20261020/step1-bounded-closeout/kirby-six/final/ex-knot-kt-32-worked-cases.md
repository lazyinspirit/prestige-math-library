---
id: ex-knot-kt-32-worked-cases
kind: example
title: "Worked root-of-unity fusion and torus-state cases"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 12
deps:
  - def-sl-two-root-of-unity-skein-parameter
  - lem-jones-wenzl-idempotents-exist-below-root-order
  - def-semisimplified-temperley-lieb-fusion-category
  - lem-root-fusion-rules-and-simple-object-completeness
  - def-extended-skein-cobordism-anomaly-data
  - def-skein-tqft-state-space-and-handlebody-pairing
  - lem-root-handlebody-spine-state-space-finite-generation
  - lem-root-handlebody-pairing-nondegeneracy-and-gluing
  - lem-root-skein-surgery-kirby-color-invariance
  - thm-root-of-unity-skein-tqft-gluing-and-surgery-invariance
  - thm-skein-module-of-solid-torus-has-core-multicurve-basis
  - def-axiom-of-choice
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Full AC is inherited only through the solid-torus skein-basis interface; the finite root and fusion calculations themselves are choice-free."
provenance:
  statement: ai-generated
  proof: literature-derived
generation:
  role: example
sources:
  references:
    - title: "C. Blanchet, N. Habegger, G. Masbaum, and P. Vogel, Topological Quantum Field Theories Derived from the Kauffman Bracket, §4"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/bhmv.pdf"
    - title: "Joshua Chen, The Temperley-Lieb Categories and Skein Modules, §§5.3–5.4"
      url: "https://arxiv.org/pdf/1502.06845v1"
    - title: "BHMV, Topological Quantum Field Theories Derived from the Kauffman Bracket, Topology 34 (1995), exact external inputs"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/bhmv.pdf"
      locator: "Section 2 pp.897–898; Proposition 1.9 p.891; Theorem 1.4 p.887; Corollary 4.10 and Theorem 4.11 p.909"
    - title: "Gilmer–Masbaum, Maslov index, Lagrangians, Mapping Class Groups and TQFT, arXiv:0912.4706v3"
      url: "https://arxiv.org/pdf/0912.4706v3"
      locator: "Section 2 pp.4–6, equation (1), and Section 11 pp.23–25"
---

## Example

Use the BHMV convention $A$ primitive of order $2p$, $p$ even, $r=p/2$, and labels $0,\ldots,r-2$. At $p=4$ the label set is $\{0\}$ and the torus state space has dimension $1$. At $p=6$ the label set is $\{0,1\}$, the fusion rule is $1\otimes1\cong0$, and the torus state space has dimension $2$.

## Example references

[[def-sl-two-root-of-unity-skein-parameter|Root and label conventions]]

[[lem-root-fusion-rules-and-simple-object-completeness|Root fusion rules]]

[[def-skein-tqft-state-space-and-handlebody-pairing|Torus state-space definition]]

[Blanchet, Habegger, Masbaum, and Vogel, *Topological Quantum Field Theories Derived from the Kauffman Bracket*, §4](https://webhomes.maths.ed.ac.uk/~v1ranick/papers/bhmv.pdf)

[Chen, *The Temperley-Lieb Categories and Skein Modules*, §§5.3–5.4](https://arxiv.org/pdf/1502.06845v1)

## Facts & Assumptions

**Given:** The fixed BHMV roots $p=4$ and $p=6$ and the corresponding specialized Temperley–Lieb categories.

[F1] [[def-sl-two-root-of-unity-skein-parameter]]: at $p=4$, $r=2$; at $p=6$, $r=3$; the label set is $\{0,\ldots,r-2\}$.

[F2] [[lem-jones-wenzl-idempotents-exist-below-root-order]]: at $p=6$, $p_2$ is defined and has zero trace.

[F3] [[lem-root-fusion-rules-and-simple-object-completeness]] supplies the resolved full root fusion/completeness interface; no accepted proof is replayed.

[F4] [[thm-skein-module-of-solid-torus-has-core-multicurve-basis]]: the framed skein module of the solid torus has the core multicurves as a free basis; its authorship record assumes full AC.

[F5] [[lem-root-handlebody-pairing-nondegeneracy-and-gluing]] supplies the normalized perfect pairing and gluing at this root.

[F6] **External input — exact torus basis.** BHMV Corollary4.10 p.909 gives the solid-torus core states as an actual basis of the torus state space; at even $p=2r$ its colors are $0,\ldots,r-2$. Proposition1.9 identifies this space with the declared complementary-handlebody radical quotient. This is an actual basis statement, not a dimension inferred merely from a finite spanning list.

## Verification

**Given:** The two root choices in the Example.

1.1 At $p=4$, $r=2$ and $r-2=0$, so the displayed label set is exactly $\{0\}$. At $p=6$, $r=3$ and $r-2=1$, so it is exactly $\{0,1\}$. [F1, given, algebra]

2.1 At $p=6$, $\delta=-1$, $p_2=1_2+U_1$, and $e_0=-U_1$ is an idempotent isomorphic to the tensor unit. Since $p_2$ is negligible by [F2], the decomposition $1_2=p_2+e_0$ gives $1\otimes1\cong0$ in the quotient. This verifies the stated fusion calculation. [F2, F3, step 1.1, algebra]

3.1 By [F6] the torus dimension is the number of these basis labels, namely $r-1$. Step1.1 gives one label for $p=4$ and two labels for $p=6$, so the dimensions are $1$ and $2$. Together with the retained local fusion calculation in step2.1 this proves every Example clause. No polynomial skein basis before radical quotient is confused with the finite TQFT basis. [F1, F3, F4, F5, F6, step 1.1, step 2.1, algebra] ∎
