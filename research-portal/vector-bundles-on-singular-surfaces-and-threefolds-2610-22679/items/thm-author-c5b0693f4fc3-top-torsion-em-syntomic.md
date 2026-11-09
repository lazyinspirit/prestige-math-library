---
id: thm-author-c5b0693f4fc3-top-torsion-em-syntomic
kind: theorem
title: External EM affine syntomic filtration and actual obstruction map
status: draft
domain: mathematics
deps:
  - def-motivic-cohomology
dependency_roles:
  def-motivic-cohomology: mathematical-premise
provenance:
  statement: literature-derived
  proof: literature-derived
external_input: true
sources:
  references:
    - title: Elden Elmanto and Matthew Morrow, Motivic cohomology of
        equicharacteristic schemes
      url: https://arxiv.org/pdf/2309.08463v1
      locator: Definition 4.14, Lemma 4.16 and proof, pp.24–25; Remark 4.30(2), Remark
        4.31, Corollary 4.32 and proof, p.30
      hypotheses: All F_p-algebras for Definition 4.14/Lemma 4.16; all qcqs
        F_p-schemes for Corollary 4.32; j>=0 (use r=1).
      statement: Mod-p syntomic cohomology is the left Kan extension from finite
        polynomial F_p-algebras of RΓ_et(−,Ω_log^j)[−j]. It has a finite
        filtration with the graded pieces stated below. For qcqs X there is a
        natural fiber sequence mot/p → syn/p → RΓ_cdh(X,νtilde_1(j))[−j−1].
      reading_limits: Read full Definition 4.14, Lemma 4.16 and its proof, Remarks
        4.30/4.31, Corollary 4.32 and its proof; did not reconstruct underlying
        de Rham-Witt, TC or rigidity theorems. Use v1 bytes, not v2 numbering.
dependency_level: 9
---

## Statement
For every $\mathbb F_p$-algebra $A$ and $j\geq0$, the complex $\mathbb F_p(j)_{\rm syn}(A)$ has a finite filtration from zero to itself, with graded pieces, in order,
$$L^j[-j-1],L^{j-1}[-j],\ldots,L^0[-1],\quad L^0,L^1[-1],\ldots,L^j[-j],$$
where $L^a=L\Lambda^aL_{A/\mathbb F_p}$. The cotangent complex and its derived exterior powers are cohomologically nonpositive (compute by a simplicial polynomial resolution).
For any qcqs $\mathbb F_p$-scheme $X$ the canonical comparison fits in the actual natural fiber sequence
$$\mathbb Z(j)_{\rm mot}(X)/p\longrightarrow\mathbb F_p(j)_{\rm syn}(X)\longrightarrow R\Gamma_{\rm cdh}(X,\widetilde\nu_1(j))[-j-1].$$
Here $\widetilde\nu_1(j)(A)$ is the cokernel of the Artin–Schreier map on differential forms (EM Definition 4.29), and its cdh sheafification is meant. The second arrow is EM (4.7), not an arbitrary map selected from a group isomorphism.

## External input
Import EM Lemma 4.16 and Corollary 4.32 with their stated hypotheses. The finite filtration is proved there by the de Rham/Cartier filtration and left Kan extension; the fiber sequence is proved from the actual motivic pullback square. These are established inputs, not locally reconstructed foundations. In particular, the obstruction formula is the correct primary comparison used to interpret the positive-characteristic part of the next external input. No equivalence between derived syntomic cohomology and ordinary étale logarithmic forms on an arbitrary singular affine is asserted.
