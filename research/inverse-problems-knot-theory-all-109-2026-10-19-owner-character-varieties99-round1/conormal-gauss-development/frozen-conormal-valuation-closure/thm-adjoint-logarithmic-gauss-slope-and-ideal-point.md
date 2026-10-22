---
id: thm-adjoint-logarithmic-gauss-slope-and-ideal-point
kind: theorem
title: "Adjoint logarithmic Gauss slope on an affine character component"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 12
deps:
  - lem-adjoint-twisted-slope-is-rational-on-a-character-component
  - def-character-variety-logarithmic-slope-invariant
  - def-knot-a-polynomial
  - def-adjoint-twisted-homology-and-culler-shalen-data
  - lem-generic-adjoint-peripheral-kernel-is-the-logarithmic-conormal-line
  - lem-logarithmic-ideal-point-limits-and-lattice-fixed-peripheral-slopes
justified_by: []
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "Léo Bénard, François Florens, and Adrien Rodau, A slope invariant and the A-polynomial of knots, Theorems 1.3 and 1.5 and §§4–5"
      url: "https://arxiv.org/html/2103.14151"
    - title: "Marc Culler and Peter B. Shalen, Varieties of group representations and splittings of 3-manifolds, §3"
      url: "https://marc-culler.info/static/home/papers/CharacterVarieties.pdf"
---

## Statement

Assume full AC. Let $X$ be an irreducible one-dimensional character component whose peripheral eigenvalue image is a curve component $A_X(M,L)=0$ of the ordinary A-polynomial. At a smooth point where $M,L\ne0$, $\partial_M A_X\ne0$, and $\partial_L A_X\ne0$, the rational adjoint-twisted slope is
$$s_K=-\frac{M}{L}\frac{\partial_M A_X}{\partial_L A_X}.$$
If $x$ is an ideal point of the smooth projective completion of this curve and the associated Culler-Shalen construction yields an essential surface of boundary slope $r$ in the fixed meridian-longitude convention, the limiting slope at $x$ is $-r$.

## Statement references

[Bénard, Florens, and Rodau, Theorems 1.3 and 1.5 and §§4–5](https://arxiv.org/html/2103.14151)

[Culler and Shalen, §3](https://marc-culler.info/static/home/papers/CharacterVarieties.pdf)

## Facts & Assumptions

**Given:** Full AC, a one-dimensional character component, an admissible generic locus, its peripheral eigenvalue curve, and an ideal point with the associated surface specified in the statement.

[F1] The slope extends projectively to the stated character component once the rationality lemma is proved; it is an ordinary rational function wherever its generic value is not infinity ([[lem-adjoint-twisted-slope-is-rational-on-a-character-component]]).

[F2] The Bénard–Florens–Rodau convention orders the boundary basis as $(v\otimes\lambda,v\otimes\mu)$ and defines $s=-b/a$ for a kernel generator $a(v\otimes\lambda)+b(v\otimes\mu)$ ([[def-character-variety-logarithmic-slope-invariant]]).

[F3] [[lem-generic-adjoint-peripheral-kernel-is-the-logarithmic-conormal-line]] gives the actual generic representation, rank-one peripheral inclusion, differentiated word-chain functional, and the projective identity $s=[-M(A_X)_M:L(A_X)_L]$. It explicitly includes infinite slopes and requires no cotangent-space identification or scheme-reducedness premise.

[F4] [[lem-logarithmic-ideal-point-limits-and-lattice-fixed-peripheral-slopes]] constructs finite-field extending valuations, proves the logarithmic projective limit at a peripheral-curve ideal point, and proves the boundary-slope equality for an actual supplied equivariant inverse-image witness. It does not supply that witness or identify a character ideal point with a peripheral ideal point.

[A1] The ideal-point conclusion still needs the actual valuation action and associated surface boundary-slope calculation in the full original scope ([[def-adjoint-twisted-homology-and-culler-shalen-data]]).

## Proof obligation

The affine portion has the following complete assembly from [F3]. Its actual generic exterior peripheral kernel, in the order [F2], is the kernel of $(a,b)\mapsto a\,\mathrm dL/L+b\,\mathrm dM/M$. The differentiated representation annihilates every relator boundary, and local-coefficient Lefschetz duality gives this kernel dimension one; thus this is an actual homology computation, not a formal analogy with a cotangent map. Differentiating $A_X(M,L)=0$ gives $L(A_X)_L\,\mathrm dL/L+M(A_X)_M\,\mathrm dM/M=0$. By [F3] the nonzero coordinate pair consequently gives $s=[-M(A_X)_M:L(A_X)_L]$. This is the rational projective extension from [F1]. At a smooth point of the peripheral curve where the two stated derivatives are nonzero, its affine ratio is exactly $-M(A_X)_M/(L(A_X)_L)$, and the rational identity extends there because the denominator is nonzero. This proves the Statement's rational affine formula, with its exact sign and variable order.

A further complete valuation assembly is now available from [F4] for the peripheral-curve ideal-point interface. Take its actual DVR at the ideal point of the normalization of $A_X=0$. Its coordinate valuations cannot both vanish, because otherwise the integral-closure affine chart would contain the valuation center, contradicting idealness by separatedness. Extend that valuation to the finite representation field supplied in [F3] using [F4]. For a boundary loop $a[\lambda]+b[\mu]$ of the actual equivariant inverse-image surface, the deck element fixes an edge midpoint. Its determinant-one matrix then has both eigenvalues of valuation zero. Thus $a\,v(L)+b\,v(M)=0$, and the logarithmic limit is $[v(L):v(M)]=[-b:a]$, namely $-r$. This also proves the zero and infinite branches without dividing by a vanishing valuation. This paragraph does not identify an arbitrary character-curve ideal point or an unspecified associated surface with the actual supplied witness.

The whole theorem remains held: its additional ideal-point surface conclusion has not been supplied by the affine calculation. One must establish the actual relation between the valuation at the stated ideal point and the peripheral stabilizer of the associated surface; if the ideal point is initially on the character curve, one must also justify the needed peripheral-ideal behavior instead of silently assuming that at least one of $M,L$ has a zero or pole. The pointwise representation-valued specialization required by the separate BFR wrapper is an additional consumer obligation outside the dense rank-chart open; an identity of rational maps does not alone establish constancy of all specialized homology kernels. No narrowing of either original Statement, no essential-surface existence, and no full-theorem acceptance is claimed here.
