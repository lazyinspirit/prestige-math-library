---
id: "def-degree-of-a-proper-smooth-map-by-compact-support-cohomology"
kind: "definition"
title: "Degree of a proper smooth map by compact-support cohomology"
status: published
origin: "pipeline"
pipeline_run: "phase-2-next-17"
proof_strategy: direct
deps: ["thm-integration-is-an-isomorphism-on-top-compactly-supported-de-rham-cohomology","prop-compactly-supported-de-rham-cohomology-is-contravariant-for-proper-smooth-maps"]
justified_by: ["lem-degree-is-well-defined-and-independent-of-the-normalized-top-form"]
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Robbin–Salamon, Introduction to Differential Topology
      url: https://zaco.au/lib/math/text/differential-geometry/difftop.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
---

## Definition

Let $F:M^n\to N^n$ be proper and smooth, with $M,N$ nonempty connected oriented smooth manifolds without boundary. Its **degree** is the scalar
$$\deg(F)=\bigl(\operatorname{Int}_M\circ F_c^*\circ\operatorname{Int}_N^{-1}\bigr)(1)\in\mathbb R,$$
where the integration isomorphisms use the choice-free finite-localization integral. Equivalently, it is the unique scalar satisfying
$$\int_M F^*\omega=\deg(F)\int_N\omega\qquad(\omega\in\Omega_c^n(N)).$$
Integer-valuedness and comparison with the homological degree on closed manifolds are subsequent assertions, not part of this definition's justification.

## Facts & Assumptions

[F1] [[thm-integration-is-an-isomorphism-on-top-compactly-supported-de-rham-cohomology]] supplies the two linear integration isomorphisms in ZF.

[F2] [[prop-compactly-supported-de-rham-cohomology-is-contravariant-for-proper-smooth-maps]] supplies the linear map $F_c^*$ on compact-support cohomology with representative $F^*\omega$.

## Verification

**Given:** The proper smooth map and oriented manifolds in the definition.

1.1 By [F1], $\operatorname{Int}_N$ is a bijective linear map, so its inverse is the function taking each real number to its unique preimage class. This uses uniqueness, not a choice of form representatives. The inverse is linear: applying the injective $\operatorname{Int}_N$ to the inverse image of $as+bt$ and to $a\operatorname{Int}_N^{-1}(s)+b\operatorname{Int}_N^{-1}(t)$ gives the same scalar. Together with [F2], the displayed composite is therefore a well-defined linear map $L:\mathbb R\to\mathbb R$. [F1, F2, given]

2.1 Put $d=L(1)$. Every $t\in\mathbb R$ equals $t\cdot1$, so linearity gives $L(t)=td$. For a compactly supported top form $\omega$, let $t=\operatorname{Int}_N[\omega]$. Then $\operatorname{Int}_N^{-1}(t)=[\omega]$ and [F2] gives $$\int_M F^*\omega=L(t)=d\int_N\omega.$$ Conversely, a scalar satisfying this equation for every such form equals $L(1)$ on any integral-one representative supplied by [F1]. Thus the composite definition and the unique-scalar characterization agree. [F1, F2, step 1.1]

3.1 At $n=0$ every coordinate chart has singleton image in $\mathbb R^0$, so each point is open. A nonempty connected zero-manifold is therefore a single point, and $F$ is the unique map between the two points. If their orientation signs are $\varepsilon_M,\varepsilon_N$, then $F^*$ preserves the scalar value and $L(t)=\varepsilon_M\varepsilon_N t$. This is consistent even when their signs differ. At $n=1$ [F2] preserves compact function primitives, as needed in the quotient. Zero forms give $0=d0$ and do not alone determine $d$; the integral-one class does. Empty manifolds are excluded because the target integration inverse would fail. Properness is exactly the support condition needed by [F2]; no regular value, compactness of $M$ or $N$, or choice axiom was assumed. [F1, F2, step 1.1, step 2.1, algebra] ∎
