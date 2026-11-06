---
id: ex-m2-anomaly-line-does-not-determine-vacuum-rank
kind: example
title: M2 Determinant Lines and Twisted Curve Euler Characteristics
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
category: string-theory
dependency_level: 4
proof_strategy: direct application of Riemann-Roch and direct-sum cohomology
axiom_strength: ZF + full AC (inherited from the supplied Riemann-Roch theorem)
deps:
  - def-m2-combined-fermion-cfield-descent-data
  - thm-riemann-roch-compact-riemann-surfaces
  - def-line-bundle-associated-to-a-divisor
  - def-divisor-principal-and-canonical-divisor-riemann-surface
  - def-riemann-surface-and-holomorphic-atlas
  - def-sheaf-cohomology-derived-global-sections
dependency_roles:
  def-m2-combined-fermion-cfield-descent-data: mathematical-premise
  thm-riemann-roch-compact-riemann-surfaces: mathematical-premise
  def-line-bundle-associated-to-a-divisor: mathematical-premise
  def-divisor-principal-and-canonical-divisor-riemann-surface: mathematical-premise
  def-riemann-surface-and-holomorphic-atlas: mathematical-premise
  def-sheaf-cohomology-derived-global-sections: mathematical-premise
physical_scope: >-
  Pure mathematical example of information loss under the determinant map. The
  bundles are not competing physical compactifications or membrane vacua.
proof_status: explicit mathematical example proved; no physical vacuum asserted
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
    - title: "Daniel S. Freed and Gregory W. Moore, Setting the Quantum Integrand of M-Theory"
      url: https://arxiv.org/pdf/hep-th/0409135v3
      locator: "§1.3, PDF pp. 11–14: determinant/Pfaffian line context only. The curve-index calculation uses the exact published imported Riemann–Roch supplier and is proved here."
---

## Statement

Exhibit trivial rank-one and rank-two bundles over a curve with the same trivial determinant, but twisted holomorphic Euler characteristics two and four after tensoring with the same fixed line. This is information lost by the determinant line, not evidence for competing physical compactifications.

## Construction

Let $C=\mathbb{CP}^1$ with its standard complex structure, choose a point $p\in C$, let $D=[p]$ be the degree-one divisor, and put $L=\mathcal O_C(D)\cong\mathcal O(1)$. Set
$$E_1=\mathcal O_C,\qquad E_2=\mathcal O_C\oplus\mathcal O_C.$$
Give each trivial summand its constant frame. Their determinants are both the same trivial line, while their ranks are one and two. Here the topological genus convention is $\chi_{\rm top}(C)=2-2g$ for a compact connected oriented surface; $\mathbb{CP}^1$ is the sphere and has genus zero.

For $G=L$ or $L\oplus L$, let $\mathcal O(G)$ be its sheaf of holomorphic sections, put $h^q(C,G):=\dim_{\mathbb C}H^q(C,\mathcal O(G))$, and use the curve convention $\chi(C,G):=h^0(C,G)-h^1(C,G)$. Finiteness for these particular bundles is established below; no rank-two Riemann–Roch theorem is presumed. The determinant of a rank-$r$ bundle is its top exterior power $\Lambda^rG$.

## Facts & Assumptions

**Given:** Full AC and the bundles in the Construction.

[F1] [[thm-riemann-roch-compact-riemann-surfaces]]: assuming full AC, for a compact Riemann surface of genus $g$ and divisor $D$, $\chi(\mathcal O(D))=\deg D+1-g$.

[F2] [[def-line-bundle-associated-to-a-divisor]]: a divisor $D$ determines the holomorphic line bundle $\mathcal O(D)$, and $\mathcal O(0)$ is the trivial line.

[F3] [[def-divisor-principal-and-canonical-divisor-riemann-surface]]: on a compact Riemann surface a divisor has finite support and degree equal to the sum of its coefficients.

[F4] [[def-riemann-surface-and-holomorphic-atlas]]: a Riemann surface is a nonempty connected Hausdorff second-countable complex one-manifold; the standard complex structure on $\mathbb{CP}^1$ is such a surface.

[F5] [[def-m2-combined-fermion-cfield-descent-data]]: the Euclidean descent package is mathematical data and does not assert physical realization or supply a physical vacuum multiplicity.

[F6] [[def-sheaf-cohomology-derived-global-sections]]: under AC, sheaf cohomology is computed by global sections of an injective resolution, independently of the resolution up to natural isomorphism. Scalar multiplication induces the complex vector-space structure for sheaves of complex vector spaces.

## Proof

1.1 The determinant of the rank-one line $E_1$ is $\mathcal O_C$. The determinant of $E_2$ is $\mathcal O_C\otimes\mathcal O_C\cong\mathcal O_C$, with the tensor of the constant frames. Thus the determinant lines agree, while $\operatorname{rank}E_1=1$ and $\operatorname{rank}E_2=2$. [given, F2, algebra]

1.2 The standard charts $z$ on $\mathbb C$ and $w=1/z$ near infinity have holomorphic transition on $\mathbb C^*$, so they give the Riemann-surface structure in [F4]. The one-point compactification of $\mathbb C$ is homeomorphic to $S^2$ by stereographic projection; its cell structure has one zero-cell and one two-cell, hence Euler characteristic $2=2-2g$ and genus $g=0$. The single point divisor has $\deg D=1$ by [F3]. Since $L=\mathcal O_C(D)$ by [F2], Riemann–Roch [F1] gives $\chi(C,L)=1+1-0=2$. [F1, F2, F3, F4, algebra]

2.1 To verify finite direct-sum additivity, choose an injective resolution $L\to I^\bullet$ as in [F6]. A finite direct sum of injective sheaves is injective: extension of a map along a monomorphism can be performed separately in each component. Hence $L\oplus L\to I^\bullet\oplus I^\bullet$ is an injective resolution. Global sections split componentwise, and the kernels and images of the componentwise differential split. Thus $H^q(C,L\oplus L)=H^q(C,L)\oplus H^q(C,L)$ for each $q$, so the degree-zero and degree-one groups are finite by [F1], and $\chi(C,L\oplus L)=\chi(C,L)+\chi(C,L)=4$. Therefore the twisted rank-one and rank-two bundles have holomorphic Euler characteristics two and four despite having the same untwisted determinant line. The determinant calculation is a mathematical information-loss example; by [F5] it constructs no physical vacuum. [F1, F5, F6, step 1.1, step 1.2, algebra] ∎

## Sources

- [Freed–Moore, *Setting the Quantum Integrand of M-Theory*, §1.3](https://arxiv.org/pdf/hep-th/0409135v3): determinant/Pfaffian line context only; the rank and curve-index calculation is local and uses the pinned Riemann–Roch supplier.
