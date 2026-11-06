---
id: lem-cft-outgoing-mode-action-well-defined
kind: lemma
title: The outgoing mode algebra is coordinate independent and acts
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 6
domain: mathematics
library: mathematics
deps:
  - def-cft-outgoing-mode-algebra-action
  - def-cft-coordinate-independent-chiral-algebra
  - def-cft-pointed-curve-with-formal-coordinates
  - def-cft-local-mode-algebra
  - lem-cft-local-mode-algebra-representation-on-module
  - lem-cft-formal-residue-coordinate-invariance
  - lem-cft-aut-o-action-and-coordinate-covariance
  - lem-cft-chiral-operation-well-defined
dependency_roles:
  def-cft-outgoing-mode-algebra-action: mathematical-premise
  def-cft-coordinate-independent-chiral-algebra: mathematical-premise
  def-cft-pointed-curve-with-formal-coordinates: mathematical-premise
  def-cft-local-mode-algebra: mathematical-premise
  lem-cft-local-mode-algebra-representation-on-module: mathematical-premise
  lem-cft-formal-residue-coordinate-invariance: mathematical-premise
  lem-cft-aut-o-action-and-coordinate-covariance: mathematical-premise
  lem-cft-chiral-operation-well-defined: mathematical-premise
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
    - title: Beilinson and Drinfeld, Chiral Algebras, preliminary Chapter 4, §§4.4.4–4.4.5
      url: https://math.uchicago.edu/~drinfeld/langlands/chiral/cha_ch4.pdf
      locator: Global de Rham image in local mode algebras and the induced module action.
    - title: Bin Gui, Lectures on Vertex Operator Algebras and Conformal Blocks, arXiv:2305.03822v1, §§11.10–11.18
      url: https://arxiv.org/pdf/2305.03822v1
      locator: Residue action of global chiral sections; the proof uses finite-pole sections and does not use the strong-residue comparison.
---

## Statement

Use the finite-energy, finite-pole complex and outgoing mode map specified in the preceding definition. The local expansion map descends through its right-derivative cokernel. Changing any formal coordinate conjugates the corresponding local mode component by its Aut O action. Its image $\mathfrak g_{\mathrm{out}}$ is a Lie subalgebra of the product of completed local mode algebras and acts on each algebraic tensor product of integrally graded conformal modules at the marked points by the sum of the local residue actions.

## Statement references

[[def-cft-outgoing-mode-algebra-action]]

## Facts & Assumptions

**Given:** A pointed curve, the finite-pole right-D-module de Rham complex, the local mode bracket, and the conditional local chiral structure of [[lem-cft-chiral-operation-well-defined]].

[F1] [[def-cft-outgoing-mode-algebra-action]]: global sections have bounded energy and finite pole order at each marked point; degree-zero de Rham cohomology is the cokernel of global right derivatives; local expansion defines the outgoing map.

[F2] [[def-cft-local-mode-algebra]]: in coordinate $t$, a local exact form is $Ta\otimes fdt+a\otimes f'dt$, and its module action is the residue of $fY_M(a,t)dt$.

[F3] [[lem-cft-formal-residue-coordinate-invariance]]: residues of formal one-forms are invariant under formal-coordinate substitutions.

[F4] [[lem-cft-aut-o-action-and-coordinate-covariance]]: the Aut O action conjugates local state-fields by the transformed state and coordinate.

[F5] [[lem-cft-chiral-operation-well-defined]]: assuming its explicit local chiral Jacobi hypothesis, the local right-D-module operations glue and satisfy the chiral identities.

[F6] [[lem-cft-local-mode-algebra-representation-on-module]]: under the same local chiral structure, each completed local mode algebra is a Lie algebra represented on each lower-truncated module, with finite action on every vector.

## Proof

1.1 A global right derivative restricts in a formal coordinate $t_i$ to a local exact form $D_{t_i}(a\otimes fdt_i)=Ta\otimes fdt_i+a\otimes f'dt_i$. Its local mode class is therefore zero in the quotient of [F2]. Each finite-pole section has a Laurent expansion with a finite lower bound, so every local expansion is defined. Thus changing a global de Rham representative does not change any local component, and the map descends to the cokernel in [F1]. [F1, F2, algebra]

1.2 On a coordinate overlap, [F4] carries the state coefficient and relative coordinate by the same Aut O transition; the one-form factor transforms by the formal Jacobian. Its residue is unchanged by [F3]. Hence the two local mode classes are conjugate by the transition action, so the outgoing image is independent of the chosen formal coordinates. [F3, F4, algebra]

2.1 Restrict the operation in [F5] to regular two-input sections and take its relative de Rham residue in the first variable: locally this quotients finite delta derivatives by right derivatives in that variable, killing every positive normal derivative and retaining the coefficient of $\delta$. For local expressions $a=\sum_r a_rf_r(t)dt$ and $b=\sum_s b_sg_s(t)dt$, it gives $B_t(a,b)=\sum_{r,s,j\ge0}((a_r)_{(j)}b_s)f_r^{(j)}g_s\,dt/j!$. The state sums are finite, and uniform field truncation on their finite-dimensional coefficient spaces makes the sum over $j$ finite. Relative residue is invariant under coordinate change by [F3], with state transitions supplied by [F4] and the full operation in [F5]; hence these expressions glue. They have bounded energy and only finite-order poles at the marked points, because only finitely many derivatives and products occur. Right-$\mathcal D$ linearity makes a derivative in the first input a total first-variable derivative, whose relative residue is zero; a derivative in the second input remains a global right derivative on the output. Thus $B$ descends to the specified global-section cokernel, rather than requiring an identification with all analytic de Rham cohomology. Skew-symmetry and Jacobi follow by taking the same relative residues of the identities in [F5]. Restriction to a puncture gives exactly the bracket in [F2], so the outgoing map is a Lie homomorphism and its image is a Lie subalgebra. [F1, F2, F3, F4, F5, step 1.1, algebra, construct]

3.1 By [F6], each local component acts on its corresponding module and its sum on any pure tensor is a finite sum over the finite set of marked points. The algebraic tensor product is spanned by pure tensors, so this rule extends uniquely by linearity. If there are no marked points, the target product is the zero Lie algebra and the empty sum is the zero action. [F1, F6, step 2.1, construct] ∎
