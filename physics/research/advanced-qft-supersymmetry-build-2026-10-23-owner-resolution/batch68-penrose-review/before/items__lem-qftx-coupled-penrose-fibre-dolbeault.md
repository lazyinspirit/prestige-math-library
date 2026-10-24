---
id: lem-qftx-coupled-penrose-fibre-dolbeault
kind: lemma
title: Dolbeault groups of the negative twistor-fibre twists
status: draft
origin: pipeline
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
page: qftx-coupled-penrose-vanishing-on-the-round-four-sphere
dependency_level: 1
deps:
  - def-axiom-of-choice
  - def-qftx-coupled-penrose-incidence-geometry
  - thm-harmonic-star-duality-for-line-bundle-valued-dolbeault-cohomology
  - thm-serre-duality-compact-riemann-surfaces
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-qftx-coupled-penrose-incidence-geometry: mathematical-premise
  thm-harmonic-star-duality-for-line-bundle-valued-dolbeault-cohomology: mathematical-premise
  thm-serre-duality-compact-riemann-surfaces: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_base: "ZF + full AC inherited from harmonic-star duality."
sources:
  references:
    - title: "J. H. Rawnsley, On the Atiyah-Hitchin-Drinfeld-Manin vanishing theorem for cohomology groups of instanton bundles"
      url: "https://gdz.sub.uni-goettingen.de/download/pdf/PPN235181684_0241/LOG_0014.pdf"
      locator: "§§1–3, printed pp. 43–54: the fibre O(-2) harmonic generator and the O(-1) correction equation."
verification:
  precheck: pass
---

## Statement

Let $L=\mathbb CP^1$ and let $\mathcal O_L(k)$ be the degree-$k$ holomorphic line bundle. For the smooth Dolbeault complexes on $L$, the cohomology groups satisfy

$$H^{0,0}_{\bar\partial}(L,\mathcal O_L(-1))=H^{0,1}_{\bar\partial}(L,\mathcal O_L(-1))=H^{0,0}_{\bar\partial}(L,\mathcal O_L(-2))=0,\qquad H^{0,1}_{\bar\partial}(L,\mathcal O_L(-2))\cong\mathbb C.$$

The canonical bundle is $K_L\cong\mathcal O_L(-2)$; the last group is one-dimensional, and the first three vanish.

## Statement references

[[def-qftx-coupled-penrose-incidence-geometry]]

[[thm-harmonic-star-duality-for-line-bundle-valued-dolbeault-cohomology]]

[[thm-serre-duality-compact-riemann-surfaces]]

[Rawnsley, §§1–3, pp. 43–54](https://gdz.sub.uni-goettingen.de/download/pdf/PPN235181684_0241/LOG_0014.pdf)

## Facts & Assumptions

**Given:** The projective line $L$ with its two standard holomorphic charts, the conventional twists $\mathcal O_L(k)$, and full AC as required by the harmonic-star duality theorem.

[F1] On the overlap of the two standard charts of $\mathbb CP^1$, the coordinate changes by $w=1/z$; the tautological bundle frame changes by $e_\infty=z^{-1}e_0$, and the canonical frame changes by $dw=-z^{-2}dz$, so $K_L\cong\mathcal O_L(-2)$. This is the transition convention for $\mathcal O(-1)$ used in the incidence definition. [[def-qftx-coupled-penrose-incidence-geometry]]

[F2] On a compact Riemann surface with full AC, harmonic-star duality gives $H^{0,1}_{\bar\partial}(L,G)^*\cong H^0(L,K_L\otimes G^*)$ for every holomorphic line bundle $G$. [[thm-harmonic-star-duality-for-line-bundle-valued-dolbeault-cohomology]]

[F3] Full AC is an explicit hypothesis of [F2] and is included in its imported proof dependencies. [[def-axiom-of-choice]], [[thm-harmonic-star-duality-for-line-bundle-valued-dolbeault-cohomology]]

[F4] For a compact connected Riemann surface, the structure-sheaf case of Serre duality gives $H^0(L,\mathcal O_L)\cong\mathbb C$. [[thm-serre-duality-compact-riemann-surfaces]]

## Proof

1.1 For $k=1,2$, a global section of $\mathcal O_L(-k)$ has coefficients $f_0(z)$ and $f_\infty(w)$ related by $f_0(z)=z^{-k}f_\infty(1/z)$ on $z\ne0$. Since $f_\infty$ is holomorphic near $w=0$, it is bounded there, so the entire function $f_0$ tends to zero as $|z|\to\infty$; Liouville's theorem gives $f_0=0$, hence the section vanishes. Thus $H^{0,0}_{\bar\partial}(L,\mathcal O(-1))=H^{0,0}_{\bar\partial}(L,\mathcal O(-2))=0$. [given, F1, algebra]

2.1 By [F4], $H^0(L,\mathcal O_L)=\mathbb C$. Apply [F2] to $G=\mathcal O_L(-1)$; by [F1], $K_L\otimes G^*=\mathcal O_L(-1)$ and its holomorphic-section space is zero by step 1.1, whence $H^{0,1}_{\bar\partial}(L,\mathcal O_L(-1))=0$. Apply [F2] to $G=\mathcal O_L(-2)$; its dual twist is $K_L\otimes G^*=\mathcal O_L$, whose section space has dimension one by [F4]. Therefore the dual of $H^{0,1}_{\bar\partial}(L,\mathcal O_L(-2))$ is one-dimensional, so the group itself is one-dimensional and isomorphic to $\mathbb C$. [F1, F2, F3, F4, step 1.1, algebra] ∎
