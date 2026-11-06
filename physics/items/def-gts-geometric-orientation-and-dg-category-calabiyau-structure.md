---
id: def-gts-geometric-orientation-and-dg-category-calabiyau-structure
kind: definition
title: Geometric orientation and dg-category Calabi–Yau structure
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
category: string-theory
page: gts-classical-deformation-cotangent-theory
dependency_level: 3
deps:
  - def-gts-strict-calabiyau-variety-in-the-morimura-source-convention
  - def-gts-derived-artin-stack-and-cotangent-complex
  - def-smooth-projective-dualizing-line-bundle-and-trace
  - thm-serre-duality-smooth-projective-variety-locally-free-sheaves
  - def-derived-scheme-and-cotangent-complex
  - def-gts-small-dg-categories-perfect-modules-and-morita-deformation
  - def-axiom-of-choice
  - lem-gts-projective-volume-pairing-for-vector-bundles
dependency_roles:
  def-gts-strict-calabiyau-variety-in-the-morimura-source-convention: mathematical-premise
  def-gts-derived-artin-stack-and-cotangent-complex: mathematical-premise
  def-smooth-projective-dualizing-line-bundle-and-trace: mathematical-premise
  thm-serre-duality-smooth-projective-variety-locally-free-sheaves: mathematical-premise
  def-derived-scheme-and-cotangent-complex: mathematical-premise
  def-gts-small-dg-categories-perfect-modules-and-morita-deformation: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  lem-gts-projective-volume-pairing-for-vector-bundles: mathematical-premise
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Pantev, Toën, Vaquié, Vezzosi, Shifted Symplectic Structures
      url: https://arxiv.org/pdf/1111.3209
      locator: Definition 2.4, PDF pp. 32–33.
    - title: Christopher Brav and Tobias Dyckerhoff, Relative Calabi-Yau Structures
      url: https://arxiv.org/pdf/1606.00619
      locator: Definition 1.2 and Definition 1.5, PDF pp. 2–3; §§2.1–2.3 for smoothness, bimodule duality, and negative cyclic homology.
    - title: Matthew Huynh, Degenerations of Shifted Symplectic Moduli Stacks of Sheaves
      url: https://arxiv.org/pdf/2609.36922
      locator: Definition 1.12, §§3.1–3.3, PDF pp. 4–14, for the base-linear left Calabi–Yau convention.
verification:
  precheck: n/a
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
aliases: []
---

## Definition

Fix a characteristic-zero field k and use the derived-stack and cochain conventions of the exact suppliers listed below. Write $C(X_{A},E)$ = R $\Gamma (X_{A},E)$ for derived global sections of a perfect complex E on a base change $X_{A}$ = X × Spec(A), and E dual = R $\operatorname{Hom}_{O_{X_{A}}}(E,O_{X_{A}})$. A derived stack X is O-compact when, for every connective derived k-algebra A, $O_{X_{A}}$ is compact in $\operatorname{QCoh}(X_{A})$ and $C(X_{A},E)$ is a perfect A-module for each perfect E and commutes with derived base change. Compact means that the derived mapping functor out of $O_{X_{A}}$ preserves arbitrary coproducts.

A degree-d geometric orientation on an O-compact derived stack X is a map [X]: $C(X,O_{X})$ -> k[-d] such that for every connective derived k-algebra A and every perfect complex E on $X_{A}$, the evaluation and cup-product map
$C(X_A,E)\to R\operatorname{Hom}_A(C(X_A,E\ \mathrm{dual}),A)[-d]$
induced by $[X]_A=[X]\otimes id_A$ is a quasi-isomorphism. Use cohomological shifts $K[r]^{j} = K^{j+r}$. The orientation is a datum on a derived stack; it is not the same object as a volume form or as a nondegenerate pairing specified only on individual vector bundles.

For the following projective-volume construction assume the Axiom of Choice, as required by the trace and projective-volume suppliers. If X is a smooth projective pure d-dimensional k-scheme with a chosen trivialization nu: $O_{X}$ -> $\omega _{X}$ = $\operatorname{det}(\Omega ^{1}_{X/k})$, the normalized Serre trace defines a candidate map $C(X,O_{X})$ -> k[-d]: compose R Gamma(X,nu) with the derived morphism R $\Gamma (X,\omega _{X})$ -> k[-d] corresponding to $t_{X}$ on $H^{d}(X,\omega _{X})$. The local projective-volume lemma proves that X is O-compact and this trace is a geometric orientation in the full sense above: it constructs the cap quasi-isomorphism for every perfect complex after every connective derived base change, using the finite affine Čech complex, the pulled-back coordinate Koszul generator, and exact finite-cone and retract closure. Its original vector-bundle pairing is the restriction at $A=k$. The source-specific strict Calabi–Yau convention remains distinct from this orientation condition.

For a small k-linear cohomological dg category A, let $A^{e} = A^{op}$ $\otimes_k$ A and regard A as its diagonal $A^{e}$-module. The category is smooth when the diagonal is perfect as an $A^{e}$-module. Hochschild chains HH(A/k) are the derived trace of the diagonal, equivalently the realization of the cyclic bar construction; they carry the canonical circle action. Negative cyclic chains are HN(A/k) = $HH(A/k)^{hS^{1}}$, the homotopy-fixed-point object for that action. Define the inverse-dualizing bimodule A! = R $\operatorname{Hom}_{A^{e}}(A,A^{e})$.

For a smooth A, an absolute left d-Calabi–Yau structure on A is a map k[d] -> HN(A/k) whose image in HH(A/k) induces a quasi-isomorphism A! -> A[-d]. Here smoothness is an explicit hypothesis for the identification HH(A/k) = R $\operatorname{Hom}_{A^{e}}(A!,A)$ used to obtain this bimodule map; defining smoothness alone does not impose it on an arbitrary dg category. For a discrete commutative C-algebra R and a compactly generated smooth R-linear stable category C, use the relative convention HN(C/R) = $HH(C/R)^{hS^{1}}$; a relative left d-Calabi–Yau structure is a map R[d] -> HN(C/R) whose induced natural map $id_C!\to id_C[-d]$ is an equivalence. Here C! denotes the inverse-dualizing endofunctor represented by the dual of the diagonal C-bimodule. Smoothness and finite type for C are the source's categorical finiteness hypotheses; they are not implied by the existence of the negative-cyclic class.

These geometric and categorical Calabi–Yau data are kept separate. The right Calabi–Yau convention uses a properness hypothesis and a map from the diagonal to its k-linear dual; neither it nor a geometric orientation is identified with the left negative-cyclic structure without a separately proved comparison.

## Definition references

[[def-gts-strict-calabiyau-variety-in-the-morimura-source-convention]]

[[def-gts-derived-artin-stack-and-cotangent-complex]]

[[def-smooth-projective-dualizing-line-bundle-and-trace]]

[[thm-serre-duality-smooth-projective-variety-locally-free-sheaves]]

[[def-derived-scheme-and-cotangent-complex]]

[[def-gts-small-dg-categories-perfect-modules-and-morita-deformation]]

[[def-axiom-of-choice]]

[[lem-gts-projective-volume-pairing-for-vector-bundles]]

## Remarks

The geometric orientation is the PTVV $\mathcal O$-orientation, not a Calabi–Yau condition on a dg category. The projective volume-trace construction requires a chosen trivialization of $\omega_X$ but does not require strict intermediate-cohomology vanishings. When its input is a $k$-variety in the Morimura convention, connectedness follows from integrality and is not a separate hypothesis; the source's triviality condition itself retains no chosen trivialization.

The full perfect-complex and derived-base-change assertion is established by [[lem-gts-projective-volume-pairing-for-vector-bundles]], proof steps 1.2, 2.2, 3.2, and 4.1. The lemma applies without connectedness or strict intermediate-cohomology vanishing, and makes no comparison with a negative-cyclic Calabi–Yau class.

