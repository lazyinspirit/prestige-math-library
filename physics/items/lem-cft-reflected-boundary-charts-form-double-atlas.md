---
id: lem-cft-reflected-boundary-charts-form-double-atlas
kind: lemma
title: Reflected boundary charts form a holomorphic atlas on the double
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 1
deps:
  - def-cft-bordered-worldsheet-with-collars
  - thm-identity-theorem-holomorphic-functions
  - def-riemann-surface-and-holomorphic-atlas
dependency_roles:
  def-cft-bordered-worldsheet-with-collars: mathematical-premise
  thm-identity-theorem-holomorphic-functions: mathematical-premise
  def-riemann-surface-and-holomorphic-atlas: mathematical-premise
justified_by: []
proof_strategy: direct
domain: mathematics
library: mathematics
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Jiří Lebl, Guide to Cultivating Complex Analysis, version 1.9 (2026)"
      url: https://www.jirka.org/ca/ca.pdf
      locator: "§2.4.4, printed pp. 49–50, Theorem 2.4.7 and its complete proof by isolated zeros and the open-and-closed nonisolated-zero locus."
    - title: "John Cardy, Boundary Conformal Field Theory, arXiv:hep-th/0411189v2"
      url: https://arxiv.org/pdf/hep-th/0411189v2
      locator: "§2, PDF pp. 8–9: analytic half-disk boundary charts and doubling convention."
verification:
  precheck: pending
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

For a bordered analytic worldsheet with marked collars, the signed seam charts together with the plus and conjugated-minus interior charts in its definition form a holomorphic atlas on the labelled quotient topological double. This atlas defines a smooth structure making each connected component a Riemann surface, and copy exchange is an antiholomorphic orientation-reversing involution.

## Statement references

[[def-cft-bordered-worldsheet-with-collars]]

[[thm-identity-theorem-holomorphic-functions]]

[[def-riemann-surface-and-holomorphic-atlas]]

## Facts & Assumptions

**Given:** The compact smooth surface, analytic half-disk atlas, holomorphic transition extensions, real boundary values, and local-biholomorphic condition in the bordered-worldsheet definition.

[F1] [[def-cft-bordered-worldsheet-with-collars]]: every boundary transition has a holomorphic extension to a neighborhood of its boundary interval; the extension maps the interval to the real axis, is locally biholomorphic there, and preserves the designated upper side.

[F2] [[def-cft-bordered-worldsheet-with-collars]]: the underlying double is the labelled topological quotient and the signed charts are specified candidates only; neither that quotient nor a smooth collar supplies their analytic compatibility.

[F3] [[thm-identity-theorem-holomorphic-functions]]: two holomorphic functions on a connected complex domain that agree on a set with an interior accumulation point agree on the whole domain. The pinned published proof uses finite-order zero factorization and the clopen locally-zero locus.

[F4] [[def-riemann-surface-and-holomorphic-atlas]]: a Riemann surface is a nonempty connected Hausdorff second-countable topological space with a holomorphic atlas of charts to open subsets of $\mathbb C$.

## Proof

**Given:** The compact smooth surface, analytic half-disk atlas, holomorphic transition extensions, real boundary values, and local-biholomorphic condition in the bordered-worldsheet definition.

1.1 The quotient is compact because it is a continuous image of the compact disjoint union $\Sigma_+\sqcup\Sigma_-$. For two quotient points with different projections to $\Sigma$, choose disjoint open neighborhoods of those projections; if a projection is interior, shrink its neighborhood inside $\operatorname{int}\Sigma$ and use only the corresponding copy, while a seam neighborhood uses both copies. These sets are open and saturated, so their quotient images are disjoint open neighborhoods. Two distinct points with the same projection must be the two copies of an interior point, and disjoint neighborhoods in the separate copies separate them. Hence the quotient is Hausdorff. For a boundary chart $\psi:U\to V$, the set $E=U_+\sqcup U_-$ is open and saturated. The signed map $E\to V\cup\overline V$ is continuous and constant on identified seam points. Its fibers are exactly the quotient equivalence classes because $V\cap\overline V=V\cap\mathbb R$ and $\psi$ is injective. It therefore induces a continuous bijection from $E/\!\sim$ onto $V\cup\overline V$. If an open subset of the quotient chart is pulled back to $E$, its two coordinate images are relatively open in $V$ and $\overline V$ and agree on the real seam; their union is open in $V\cup\overline V$. Thus the signed chart is a homeomorphism. Its image is open because the upper and reflected lower relative neighborhoods join across each seam point. The interior copy charts are ordinary charts on open subsets of the two copies. These charts cover the compact quotient, so a finite subcover gives a countable base from countable bases of their planar images. The quotient is therefore second-countable and locally homeomorphic to open subsets of $\mathbb C$. [given, F2, algebra]

1.2 Fix two boundary charts with an overlap containing a seam point, and write $F$ for the specified holomorphic extension of their transition. On a sufficiently small disk centered at that point and invariant under conjugation, $F^\#(z)=\overline{F(\bar z)}$ is holomorphic by its local power series. Both $F^\#$ and $F$ agree on the real interval because $F$ maps that interval to itself. The interval has an interior accumulation point in the disk, so [F3] gives $F^\#=F$ on the disk. The transition between signed charts is $F$ on the upper half and $F^\#$ on the lower half, hence is one holomorphic map across the seam. The reverse boundary-chart transition is also specified by [F1]; applying the same reflection argument to its extension proves that the inverse signed transition is holomorphic across the seam. [given, F1, F3, algebra]

2.1 Transitions away from the seam are the original holomorphic transitions among all charts on the plus copy, including interior-boundary overlaps, or their complex conjugates among all charts on the minus copy. Step 1.2 proves holomorphic compatibility for every overlap meeting the seam. All chart changes are restrictions of the actual coordinate-change maps of the quotient, so their compositions satisfy the cocycle identity wherever defined. The charts therefore give a holomorphic atlas. Every connected component is nonempty and open: each point has a connected disk neighborhood inside a chart, contained in its component. Restricting the atlas to that open component preserves holomorphic compatibility, Hausdorffness and second countability. Thus [F4] makes each component a Riemann surface; the holomorphic coordinate changes and their inverses are smooth as real maps, so the same atlas also defines its smooth structure. [given, F1, F2, F4, step 1.1, step 1.2, algebra]

3.1 In a plus/minus interior chart pair and in every signed chart, copy exchange is $z\mapsto\bar z$. It is an involution, is antiholomorphic, and reverses the real two-dimensional orientation. [given, F2, step 1.2, algebra] ∎

## Remarks

This proves well-definedness of the analytic double from the stated extension data. It does not prove that every smooth surface with boundary admits compatible analytic half-disk charts, nor that every topological double is canonically endowed with this analytic structure absent those data.
