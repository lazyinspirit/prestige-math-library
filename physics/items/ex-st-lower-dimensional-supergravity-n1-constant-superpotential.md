---
id: ex-st-lower-dimensional-supergravity-n1-constant-superpotential
kind: example
title: $N=1$ Constant-Superpotential Potential on a Flat Chiral Patch
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 8
domain: physics
library: physics
deps:
- def-st-4d-n1-kahler-hodge-line-data
- post-four-dimensional-n1-matter-coupled-supergravity
- pthm-four-dimensional-n1-fd-scalar-potential
dependency_roles:
  def-st-4d-n1-kahler-hodge-line-data: formulation-prerequisite
  post-four-dimensional-n1-matter-coupled-supergravity: physical-assumption
  pthm-four-dimensional-n1-fd-scalar-potential: physical-result
physical_scope: One local neutral chiral scalar and an uncharged spectator U(1) in the adopted two-derivative N=1 Einstein-frame
  model, with no auxiliary-independent scalar-potential term; the example evaluates the scalar potential and makes no string
  compactification or vacuum-realization claim.
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
  - title: Jan Louis, Introduction to Supersymmetry and Supergravity
    url: https://www.physik.uni-hamburg.de/th2/ag-louis/dokumente/lectures/ws-15-16/ws-15-susy-lecture-notes.pdf
    locator: §9.1, equation (9.2), N=1 scalar potential and the negative gravitino term; the example arithmetic is derived locally.
  - title: Christian Hohl, Notes on the derivation of the general N=1 supergravity/matter/Yang-Mills Lagrangian for d=4 dimensions
      using superspace techniques
    url: https://arxiv.org/pdf/2005.09504v1
    locator: §8.5.5, equations (8.223)–(8.230), auxiliary elimination and the local N=1 potential.
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
generation:
  role: example
---
## Example

Take one complex chiral coordinate $z\in\mathbb C$ of mass dimension 1, $M_P>0$, the trivial Kähler line bundle, Kähler potential $K(z,\bar z)=z\bar z$, and constant nonzero superpotential $W(z)=w_0$ of mass dimension 3. Couple one spectator $U(1)$ vector with $f=1$, zero Killing vector, and zero moment map $P=0$. This is local one-field $N=1$ data in the Kähler-Hodge patch convention; the vector is uncharged and contributes no D-term. Take the scalar potential to be generated solely by eliminating the displayed auxiliary sector, with no additional auxiliary-independent term, and evaluate it using the F/D formula stated below.

## Example references

[Louis, §9.1, equation (9.2)](https://www.physik.uni-hamburg.de/th2/ag-louis/dokumente/lectures/ws-15-16/ws-15-susy-lecture-notes.pdf)

[Hohl, §8.5.5, equations (8.223)–(8.230)](https://arxiv.org/pdf/2005.09504v1)

[[def-st-4d-n1-kahler-hodge-line-data|Four-Dimensional $N=1$ Kähler–Hodge Line Data]]

[[post-four-dimensional-n1-matter-coupled-supergravity|Four-Dimensional $N=1$ Matter-Coupled Supergravity]]

[[pthm-four-dimensional-n1-fd-scalar-potential|Four-Dimensional $N=1$ F- and D-Term Scalar Potential]]

## Facts & Assumptions

**Given:** $z\in\mathbb C$, $K=z\bar z$, $W=w_0\neq0$, $M_P>0$, the trivial line-bundle patch, and the uncharged vector data $f=1$, $k=0$, $P=0$. In this example no auxiliary-independent scalar-potential term is added.

[F1] [[def-st-4d-n1-kahler-hodge-line-data|Four-Dimensional $N=1$ Kähler–Hodge Line Data]] fixes $D_zW=\partial_zW+(K_z/M_P^2)W$ and the mass dimensions.

[F2] [[post-four-dimensional-n1-matter-coupled-supergravity|Four-Dimensional $N=1$ Matter-Coupled Supergravity]] adopts the old-minimal $N=1$ component framework used in this example.

[F3] [[pthm-four-dimensional-n1-fd-scalar-potential|Four-Dimensional $N=1$ F- and D-Term Scalar Potential]] gives the conditional F/D scalar-potential formula.


## Verification

1.1 Since $K_z=\bar z$, $\partial_zW=0$, and $W=w_0$, [F1] gives $D_zW=\bar z\,w_0/M_P^2$. Also $K_{z\bar z}=1$, so $K^{z\bar z}=1$; the metric is positive and the inverse used in [F3] exists. [given, F1, F3, algebra]

2.1 Substitution into [F3] gives $V=e^{|z|^2/M_P^2}\left(\frac{|z|^2|w_0|^2}{M_P^4}-\frac{3|w_0|^2}{M_P^2}\right)=e^{|z|^2/M_P^2}\frac{|w_0|^2}{M_P^2}\left(\frac{|z|^2}{M_P^2}-3\right)$, because $P=0$ removes the D-term. At $z=0$, this yields $V(0)=-3|w_0|^2/M_P^2$. The result has mass dimension four and is a value of the adopted model potential, not a claim about a realized string vacuum. [given, F1, F2, F3, step 1.1, algebra] ∎

## Remarks

This calculation uses the adopted $N=1$ framework and scalar-potential carriers on the A page, with the four-dimensional Einstein-frame and Planck normalization of [[def-supergravity-conventions-and-normalizations]]. It remains a conditional example in that low-energy model.
