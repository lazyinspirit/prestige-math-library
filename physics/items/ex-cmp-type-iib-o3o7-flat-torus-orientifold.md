---
id: ex-cmp-type-iib-o3o7-flat-torus-orientifold
kind: example
title: "The flat complex three-torus O3 orientifold"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 4
domain: physics
library: physics
category: string-theory
deps:
  - def-cmp-type-iib-o3-o7-orientifold-data
  - lem-cmp-flat-torus-o3o7-hodge-data
dependency_roles:
  def-cmp-type-iib-o3-o7-orientifold-data: formulation-prerequisite
  lem-cmp-flat-torus-o3o7-hodge-data: mathematical-premise
justified_by: []
aliases: []
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
physical_scope: "Geometric illustration of the O3/O7 parity projection on the flat broad-Calabi–Yau three-torus. It is not a strict-SU(3)-holonomy compactification, a sourced ten-dimensional solution, or evidence of tadpole cancellation, flux consistency, or moduli stabilization."
empirical_premises: []
sources:
  references:
    - title: "Mariana Graña, Athanasia Ksagoni, Praxitelis Ntokos, and Hagen Triendl, String Theory Compactifications, SpringerBriefs in Physics (2017)"
      url: "https://djvu.online/file/qufswWArYbwIP"
      locator: "§6.2, printed pp. 64–65; factorized toroidal example and O3 involution."
    - title: "Thomas W. Grimm and Jan Louis, The effective action of N=1 Calabi-Yau orientifolds, arXiv:hep-th/0403067v3"
      url: "https://arxiv.org/pdf/hep-th/0403067v3"
      locator: "§3.1, PDF pp. 8–10; O3/O7 parity projection and harmonic-form eigenspaces."
---

## Example

Let $E=\mathbb C/(\mathbb Z+i\mathbb Z)$, $X=E^3$, and let $\sigma([z_1,z_2,z_3])=[-z_1,-z_2,-z_3]$. Equip $X$ with $J=\sum_{j=1}^3 dx_j\wedge dy_j$ and $\Omega=dz_1\wedge dz_2\wedge dz_3$. Under the Type IIB O3/O7 quotient convention of `def-cmp-type-iib-o3-o7-orientifold-data`, this is an O3 projection: $\operatorname{Fix}(\sigma)$ consists of $64$ isolated points, $h^{1,1}_+=9$, $h^{1,1}_-=0$, $h^{2,1}_+=0$, and $h^{2,1}_-=9$. Therefore this example has no odd harmonic two-form modes $b^a,c^a$ in the projected closed-string sector. It illustrates the geometric parity data only; it does not assert a consistent sourced string background or a four-dimensional vacuum.

## Example references

[[def-cmp-type-iib-o3-o7-orientifold-data]]

[[lem-cmp-flat-torus-o3o7-hodge-data]]

[Graña, Ksagoni, Ntokos, and Triendl, §6.2](https://djvu.online/file/qufswWArYbwIP)

[Grimm and Louis, §3.1](https://arxiv.org/pdf/hep-th/0403067v3)

## Facts & Assumptions

**Given:** $E=\mathbb C/(\mathbb Z+i\mathbb Z)$, $X=E^3$, the negation involution $\sigma$, its descended flat Kähler form and holomorphic three-form, and the adopted O3/O7 quotient convention.

[F1] [[lem-cmp-flat-torus-o3o7-hodge-data]] proves that $\sigma$ has $64$ isolated fixed points and acts on $H^{p,q}(X)$ by $(-1)^{p+q}$, with $h^{p,q}=\binom3p\binom3q$.

[F2] [[def-cmp-type-iib-o3-o7-orientifold-data]] identifies isolated complex fixed loci with O3-plane loci for the stated spacetime-filling Type IIB orientifold convention; source charges and their cancellation are separate inputs.

## Proof

**Proof technique:** substitution into the torus parity calculation and the orientifold fixed-locus convention.

**Given:** The flat torus and involution in the Statement.

1.1 The stated $J$ and $\Omega$ are the forms from the torus supplier. Its proof verifies that negation is holomorphic and isometric, preserves $J$, sends $\Omega$ to $-\Omega$, and has exactly $4^3=64$ fixed points, all with zero-dimensional fixed components. Applying [F2] classifies those loci as O3-plane loci and gives no O7-plane locus. [F1, F2, given]

2.1 Since $p+q$ is even for $(p,q)=(1,1)$ and odd for $(2,1)$, [F1] gives $h^{1,1}_+=\binom31\binom31=9$, $h^{1,1}_-=0$, $h^{2,1}_+=0$, and $h^{2,1}_-=\binom32\binom31=9$. The O3/O7 field projection retains the odd real harmonic two-forms. By [F1], negation acts by $(-1)^{p+q}=+1$ on every harmonic bidegree with $p+q=2$, including $(2,0)$ and $(0,2)$ as well as $(1,1)$. Thus the entire odd real harmonic two-form space vanishes, and no internal $B_2,C_2$ modes, in particular no $b^a,c^a$ modes, survive. This count is a geometric projection statement, not a tadpole or solution check. [F1, F2, step 1.1, algebra] ∎

## Remarks

The torus has trivial holonomy, so it is an example under the broad Calabi–Yau convention and must not be used to infer the strict-$SU(3)$-holonomy spectrum. The $64$ fixed points identify geometric O3 loci only; localized charges, D-brane content, flux, tadpole cancellation, and backreaction are not specified.
